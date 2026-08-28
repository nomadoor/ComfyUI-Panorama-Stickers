import * as fs from "../../scripts/app.js";
import { app as tr } from "../../scripts/app.js";
import { api as dn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Jc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const kt = {}, oa = [], vr = () => {
}, Fh = () => !1, Ws = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ys = (e) => e.startsWith("onUpdate:"), gn = Object.assign, Zc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, kb = Object.prototype.hasOwnProperty, dt = (e, t) => kb.call(e, t), Ye = Array.isArray, sa = (e) => go(e) === "[object Map]", Rh = (e) => go(e) === "[object Set]", Qf = (e) => go(e) === "[object Date]", Xe = (e) => typeof e == "function", zt = (e) => typeof e == "string", _r = (e) => typeof e == "symbol", bt = (e) => e !== null && typeof e == "object", Lh = (e) => (bt(e) || Xe(e)) && Xe(e.then) && Xe(e.catch), zh = Object.prototype.toString, go = (e) => zh.call(e), Nb = (e) => go(e).slice(8, -1), $h = (e) => go(e) === "[object Object]", Qc = (e) => zt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xa = /* @__PURE__ */ Jc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), qs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Mb = /-\w/g, Sn = qs(
  (e) => e.replace(Mb, (t) => t.slice(1).toUpperCase())
), Pb = /\B([A-Z])/g, Ni = qs(
  (e) => e.replace(Pb, "-$1").toLowerCase()
), Xs = qs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gl = qs(
  (e) => e ? `on${Xs(e)}` : ""
), pr = (e, t) => !Object.is(e, t), ds = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, jh = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, eu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ed;
const Js = () => ed || (ed = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function jt(e) {
  if (Ye(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], a = zt(r) ? Ib(r) : jt(r);
      if (a)
        for (const o in a)
          t[o] = a[o];
    }
    return t;
  } else if (zt(e) || bt(e))
    return e;
}
const Ab = /;(?![^(]*\))/g, Cb = /:([^]+)/, Tb = /\/\*[^]*?\*\//g;
function Ib(e) {
  const t = {};
  return e.replace(Tb, "").split(Ab).forEach((n) => {
    if (n) {
      const r = n.split(Cb);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ut(e) {
  let t = "";
  if (zt(e))
    t = e;
  else if (Ye(e))
    for (let n = 0; n < e.length; n++) {
      const r = ut(e[n]);
      r && (t += r + " ");
    }
  else if (bt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Eb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Db = /* @__PURE__ */ Jc(Eb);
function Vh(e) {
  return !!e || e === "";
}
function Ob(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = tu(e[r], t[r]);
  return n;
}
function tu(e, t) {
  if (e === t) return !0;
  let n = Qf(e), r = Qf(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = _r(e), r = _r(t), n || r)
    return e === t;
  if (n = Ye(e), r = Ye(t), n || r)
    return n && r ? Ob(e, t) : !1;
  if (n = bt(e), r = bt(t), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(e).length, o = Object.keys(t).length;
    if (a !== o)
      return !1;
    for (const u in e) {
      const f = e.hasOwnProperty(u), h = t.hasOwnProperty(u);
      if (f && !h || !f && h || !tu(e[u], t[u]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Hh = (e) => !!(e && e.__v_isRef === !0), ct = (e) => zt(e) ? e : e == null ? "" : Ye(e) || bt(e) && (e.toString === zh || !Xe(e.toString)) ? Hh(e) ? ct(e.value) : JSON.stringify(e, Uh, 2) : String(e), Uh = (e, t) => Hh(t) ? Uh(e, t.value) : sa(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, a], o) => (n[Kl(r, o) + " =>"] = a, n),
    {}
  )
} : Rh(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Kl(n))
} : _r(t) ? Kl(t) : bt(t) && !Ye(t) && !$h(t) ? String(t) : t, Kl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    _r(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Cn;
class Fb {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Cn, !t && Cn && (this.index = (Cn.scopes || (Cn.scopes = [])).push(
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
      const n = Cn;
      try {
        return Cn = this, t();
      } finally {
        Cn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Cn, Cn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Cn = this.prevScope, this.prevScope = void 0);
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
function Rb() {
  return Cn;
}
let Mt;
const Wl = /* @__PURE__ */ new WeakSet();
class Bh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Cn && Cn.active && Cn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Wl.has(this) && (Wl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Kh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, td(this), Wh(this);
    const t = Mt, n = nr;
    Mt = this, nr = !0;
    try {
      return this.fn();
    } finally {
      Yh(this), Mt = t, nr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        iu(t);
      this.deps = this.depsTail = void 0, td(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Wl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    _c(this) && this.run();
  }
  get dirty() {
    return _c(this);
  }
}
let Gh = 0, Ja, Za;
function Kh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Za, Za = e;
    return;
  }
  e.next = Ja, Ja = e;
}
function nu() {
  Gh++;
}
function ru() {
  if (--Gh > 0)
    return;
  if (Za) {
    let t = Za;
    for (Za = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ja; ) {
    let t = Ja;
    for (Ja = void 0; t; ) {
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
function Wh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Yh(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const a = r.prevDep;
    r.version === -1 ? (r === n && (n = a), iu(r), Lb(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
  }
  e.deps = t, e.depsTail = n;
}
function _c(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (qh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function qh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === io) || (e.globalVersion = io, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !_c(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Mt, r = nr;
  Mt = e, nr = !0;
  try {
    Wh(e);
    const a = e.fn(e._value);
    (t.version === 0 || pr(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    Mt = n, nr = r, Yh(e), e.flags &= -3;
  }
}
function iu(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: a } = e;
  if (r && (r.nextSub = a, e.prevSub = void 0), a && (a.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      iu(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Lb(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let nr = !0;
const Xh = [];
function zr() {
  Xh.push(nr), nr = !1;
}
function $r() {
  const e = Xh.pop();
  nr = e === void 0 ? !0 : e;
}
function td(e) {
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
let io = 0;
class zb {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class au {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Mt || !nr || Mt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Mt)
      n = this.activeLink = new zb(Mt, this), Mt.deps ? (n.prevDep = Mt.depsTail, Mt.depsTail.nextDep = n, Mt.depsTail = n) : Mt.deps = Mt.depsTail = n, Jh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Mt.depsTail, n.nextDep = void 0, Mt.depsTail.nextDep = n, Mt.depsTail = n, Mt.deps === n && (Mt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, io++, this.notify(t);
  }
  notify(t) {
    nu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ru();
    }
  }
}
function Jh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Jh(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const xc = /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ Symbol(
  ""
), Sc = /* @__PURE__ */ Symbol(
  ""
), ao = /* @__PURE__ */ Symbol(
  ""
);
function un(e, t, n) {
  if (nr && Mt) {
    let r = xc.get(e);
    r || xc.set(e, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || (r.set(n, a = new au()), a.map = r, a.key = n), a.track();
  }
}
function Fr(e, t, n, r, a, o) {
  const u = xc.get(e);
  if (!u) {
    io++;
    return;
  }
  const f = (h) => {
    h && h.trigger();
  };
  if (nu(), t === "clear")
    u.forEach(f);
  else {
    const h = Ye(e), g = h && Qc(n);
    if (h && n === "length") {
      const y = Number(r);
      u.forEach((x, S) => {
        (S === "length" || S === ao || !_r(S) && S >= y) && f(x);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), g && f(u.get(ao)), t) {
        case "add":
          h ? g && f(u.get("length")) : (f(u.get(yi)), sa(e) && f(u.get(Sc)));
          break;
        case "delete":
          h || (f(u.get(yi)), sa(e) && f(u.get(Sc)));
          break;
        case "set":
          sa(e) && f(u.get(yi));
          break;
      }
  }
  ru();
}
function Ki(e) {
  const t = /* @__PURE__ */ ft(e);
  return t === e ? t : (un(t, "iterate", ao), /* @__PURE__ */ Gn(e) ? t : t.map(rr));
}
function Zs(e) {
  return un(e = /* @__PURE__ */ ft(e), "iterate", ao), e;
}
function fr(e, t) {
  return /* @__PURE__ */ jr(e) ? ga(/* @__PURE__ */ vi(e) ? rr(t) : t) : rr(t);
}
const $b = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yl(this, Symbol.iterator, (e) => fr(this, e));
  },
  concat(...e) {
    return Ki(this).concat(
      ...e.map((t) => Ye(t) ? Ki(t) : t)
    );
  },
  entries() {
    return Yl(this, "entries", (e) => (e[1] = fr(this, e[1]), e));
  },
  every(e, t) {
    return Pr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Pr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => fr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Pr(
      this,
      "find",
      e,
      t,
      (n) => fr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Pr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Pr(
      this,
      "findLast",
      e,
      t,
      (n) => fr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Pr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Pr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ql(this, "includes", e);
  },
  indexOf(...e) {
    return ql(this, "indexOf", e);
  },
  join(e) {
    return Ki(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ql(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Pr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Fa(this, "pop");
  },
  push(...e) {
    return Fa(this, "push", e);
  },
  reduce(e, ...t) {
    return nd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return nd(this, "reduceRight", e, t);
  },
  shift() {
    return Fa(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Pr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Fa(this, "splice", e);
  },
  toReversed() {
    return Ki(this).toReversed();
  },
  toSorted(e) {
    return Ki(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ki(this).toSpliced(...e);
  },
  unshift(...e) {
    return Fa(this, "unshift", e);
  },
  values() {
    return Yl(this, "values", (e) => fr(this, e));
  }
};
function Yl(e, t, n) {
  const r = Zs(e), a = r[t]();
  return r !== e && !/* @__PURE__ */ Gn(e) && (a._next = a.next, a.next = () => {
    const o = a._next();
    return o.done || (o.value = n(o.value)), o;
  }), a;
}
const jb = Array.prototype;
function Pr(e, t, n, r, a, o) {
  const u = Zs(e), f = u !== e && !/* @__PURE__ */ Gn(e), h = u[t];
  if (h !== jb[t]) {
    const x = h.apply(e, o);
    return f ? rr(x) : x;
  }
  let g = n;
  u !== e && (f ? g = function(x, S) {
    return n.call(this, fr(e, x), S, e);
  } : n.length > 2 && (g = function(x, S) {
    return n.call(this, x, S, e);
  }));
  const y = h.call(u, g, r);
  return f && a ? a(y) : y;
}
function nd(e, t, n, r) {
  const a = Zs(e), o = a !== e && !/* @__PURE__ */ Gn(e);
  let u = n, f = !1;
  a !== e && (o ? (f = r.length === 0, u = function(g, y, x) {
    return f && (f = !1, g = fr(e, g)), n.call(this, g, fr(e, y), x, e);
  }) : n.length > 3 && (u = function(g, y, x) {
    return n.call(this, g, y, x, e);
  }));
  const h = a[t](u, ...r);
  return f ? fr(e, h) : h;
}
function ql(e, t, n) {
  const r = /* @__PURE__ */ ft(e);
  un(r, "iterate", ao);
  const a = r[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ lu(n[0]) ? (n[0] = /* @__PURE__ */ ft(n[0]), r[t](...n)) : a;
}
function Fa(e, t, n = []) {
  zr(), nu();
  const r = (/* @__PURE__ */ ft(e))[t].apply(e, n);
  return ru(), $r(), r;
}
const Vb = /* @__PURE__ */ Jc("__proto__,__v_isRef,__isVue"), Zh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_r)
);
function Hb(e) {
  _r(e) || (e = String(e));
  const t = /* @__PURE__ */ ft(this);
  return un(t, "has", e), t.hasOwnProperty(e);
}
class Qh {
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
      return r === (a ? o ? Zb : rp : o ? np : tp).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const u = Ye(t);
    if (!a) {
      let h;
      if (u && (h = $b[n]))
        return h;
      if (n === "hasOwnProperty")
        return Hb;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ hn(t) ? t : r
    );
    if ((_r(n) ? Zh.has(n) : Vb(n)) || (a || un(t, "get", n), o))
      return f;
    if (/* @__PURE__ */ hn(f)) {
      const h = u && Qc(n) ? f : f.value;
      return a && bt(h) ? /* @__PURE__ */ kc(h) : h;
    }
    return bt(f) ? a ? /* @__PURE__ */ kc(f) : /* @__PURE__ */ xa(f) : f;
  }
}
class ep extends Qh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, a) {
    let o = t[n];
    const u = Ye(t) && Qc(n);
    if (!this._isShallow) {
      const g = /* @__PURE__ */ jr(o);
      if (!/* @__PURE__ */ Gn(r) && !/* @__PURE__ */ jr(r) && (o = /* @__PURE__ */ ft(o), r = /* @__PURE__ */ ft(r)), !u && /* @__PURE__ */ hn(o) && !/* @__PURE__ */ hn(r))
        return g || (o.value = r), !0;
    }
    const f = u ? Number(n) < t.length : dt(t, n), h = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ hn(t) ? t : a
    );
    return t === /* @__PURE__ */ ft(a) && (f ? pr(r, o) && Fr(t, "set", n, r) : Fr(t, "add", n, r)), h;
  }
  deleteProperty(t, n) {
    const r = dt(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && r && Fr(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!_r(n) || !Zh.has(n)) && un(t, "has", n), r;
  }
  ownKeys(t) {
    return un(
      t,
      "iterate",
      Ye(t) ? "length" : yi
    ), Reflect.ownKeys(t);
  }
}
class Ub extends Qh {
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
const Bb = /* @__PURE__ */ new ep(), Gb = /* @__PURE__ */ new Ub(), Kb = /* @__PURE__ */ new ep(!0);
const wc = (e) => e, Bo = (e) => Reflect.getPrototypeOf(e);
function Wb(e, t, n) {
  return function(...r) {
    const a = this.__v_raw, o = /* @__PURE__ */ ft(a), u = sa(o), f = e === "entries" || e === Symbol.iterator && u, h = e === "keys" && u, g = a[e](...r), y = n ? wc : t ? ga : rr;
    return !t && un(
      o,
      "iterate",
      h ? Sc : yi
    ), gn(
      // inheriting all iterator properties
      Object.create(g),
      {
        // iterator protocol
        next() {
          const { value: x, done: S } = g.next();
          return S ? { value: x, done: S } : {
            value: f ? [y(x[0]), y(x[1])] : y(x),
            done: S
          };
        }
      }
    );
  };
}
function Go(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Yb(e, t) {
  const n = {
    get(a) {
      const o = this.__v_raw, u = /* @__PURE__ */ ft(o), f = /* @__PURE__ */ ft(a);
      e || (pr(a, f) && un(u, "get", a), un(u, "get", f));
      const { has: h } = Bo(u), g = t ? wc : e ? ga : rr;
      if (h.call(u, a))
        return g(o.get(a));
      if (h.call(u, f))
        return g(o.get(f));
      o !== u && o.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && un(/* @__PURE__ */ ft(a), "iterate", yi), a.size;
    },
    has(a) {
      const o = this.__v_raw, u = /* @__PURE__ */ ft(o), f = /* @__PURE__ */ ft(a);
      return e || (pr(a, f) && un(u, "has", a), un(u, "has", f)), a === f ? o.has(a) : o.has(a) || o.has(f);
    },
    forEach(a, o) {
      const u = this, f = u.__v_raw, h = /* @__PURE__ */ ft(f), g = t ? wc : e ? ga : rr;
      return !e && un(h, "iterate", yi), f.forEach((y, x) => a.call(o, g(y), g(x), u));
    }
  };
  return gn(
    n,
    e ? {
      add: Go("add"),
      set: Go("set"),
      delete: Go("delete"),
      clear: Go("clear")
    } : {
      add(a) {
        const o = /* @__PURE__ */ ft(this), u = Bo(o), f = /* @__PURE__ */ ft(a), h = !t && !/* @__PURE__ */ Gn(a) && !/* @__PURE__ */ jr(a) ? f : a;
        return u.has.call(o, h) || pr(a, h) && u.has.call(o, a) || pr(f, h) && u.has.call(o, f) || (o.add(h), Fr(o, "add", h, h)), this;
      },
      set(a, o) {
        !t && !/* @__PURE__ */ Gn(o) && !/* @__PURE__ */ jr(o) && (o = /* @__PURE__ */ ft(o));
        const u = /* @__PURE__ */ ft(this), { has: f, get: h } = Bo(u);
        let g = f.call(u, a);
        g || (a = /* @__PURE__ */ ft(a), g = f.call(u, a));
        const y = h.call(u, a);
        return u.set(a, o), g ? pr(o, y) && Fr(u, "set", a, o) : Fr(u, "add", a, o), this;
      },
      delete(a) {
        const o = /* @__PURE__ */ ft(this), { has: u, get: f } = Bo(o);
        let h = u.call(o, a);
        h || (a = /* @__PURE__ */ ft(a), h = u.call(o, a)), f && f.call(o, a);
        const g = o.delete(a);
        return h && Fr(o, "delete", a, void 0), g;
      },
      clear() {
        const a = /* @__PURE__ */ ft(this), o = a.size !== 0, u = a.clear();
        return o && Fr(
          a,
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
  ].forEach((a) => {
    n[a] = Wb(a, e, t);
  }), n;
}
function ou(e, t) {
  const n = Yb(e, t);
  return (r, a, o) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? r : Reflect.get(
    dt(n, a) && a in r ? n : r,
    a,
    o
  );
}
const qb = {
  get: /* @__PURE__ */ ou(!1, !1)
}, Xb = {
  get: /* @__PURE__ */ ou(!1, !0)
}, Jb = {
  get: /* @__PURE__ */ ou(!0, !1)
};
const tp = /* @__PURE__ */ new WeakMap(), np = /* @__PURE__ */ new WeakMap(), rp = /* @__PURE__ */ new WeakMap(), Zb = /* @__PURE__ */ new WeakMap();
function Qb(e) {
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
function ey(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Qb(Nb(e));
}
// @__NO_SIDE_EFFECTS__
function xa(e) {
  return /* @__PURE__ */ jr(e) ? e : su(
    e,
    !1,
    Bb,
    qb,
    tp
  );
}
// @__NO_SIDE_EFFECTS__
function ty(e) {
  return su(
    e,
    !1,
    Kb,
    Xb,
    np
  );
}
// @__NO_SIDE_EFFECTS__
function kc(e) {
  return su(
    e,
    !0,
    Gb,
    Jb,
    rp
  );
}
function su(e, t, n, r, a) {
  if (!bt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = ey(e);
  if (o === 0)
    return e;
  const u = a.get(e);
  if (u)
    return u;
  const f = new Proxy(
    e,
    o === 2 ? r : n
  );
  return a.set(e, f), f;
}
// @__NO_SIDE_EFFECTS__
function vi(e) {
  return /* @__PURE__ */ jr(e) ? /* @__PURE__ */ vi(e.__v_raw) : !!(e && e.__v_isReactive);
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
function lu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ft(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ft(t) : e;
}
function ny(e) {
  return !dt(e, "__v_skip") && Object.isExtensible(e) && jh(e, "__v_skip", !0), e;
}
const rr = (e) => bt(e) ? /* @__PURE__ */ xa(e) : e, ga = (e) => bt(e) ? /* @__PURE__ */ kc(e) : e;
// @__NO_SIDE_EFFECTS__
function hn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function pn(e) {
  return ry(e, !1);
}
function ry(e, t) {
  return /* @__PURE__ */ hn(e) ? e : new iy(e, t);
}
class iy {
  constructor(t, n) {
    this.dep = new au(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ft(t), this._value = n ? t : rr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ Gn(t) || /* @__PURE__ */ jr(t);
    t = r ? t : /* @__PURE__ */ ft(t), pr(t, n) && (this._rawValue = t, this._value = r ? t : rr(t), this.dep.trigger());
  }
}
function ht(e) {
  return /* @__PURE__ */ hn(e) ? e.value : e;
}
const ay = {
  get: (e, t, n) => t === "__v_raw" ? e : ht(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const a = e[t];
    return /* @__PURE__ */ hn(a) && !/* @__PURE__ */ hn(n) ? (a.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function ip(e) {
  return /* @__PURE__ */ vi(e) ? e : new Proxy(e, ay);
}
class oy {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new au(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = io - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Mt !== this)
      return Kh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return qh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function sy(e, t, n = !1) {
  let r, a;
  return Xe(e) ? r = e : (r = e.get, a = e.set), new oy(r, a, n);
}
const Ko = {}, Cs = /* @__PURE__ */ new WeakMap();
let mi;
function ly(e, t = !1, n = mi) {
  if (n) {
    let r = Cs.get(n);
    r || Cs.set(n, r = []), r.push(e);
  }
}
function cy(e, t, n = kt) {
  const { immediate: r, deep: a, once: o, scheduler: u, augmentJob: f, call: h } = n, g = (I) => a ? I : /* @__PURE__ */ Gn(I) || a === !1 || a === 0 ? Rr(I, 1) : Rr(I);
  let y, x, S, M, v = !1, E = !1;
  if (/* @__PURE__ */ hn(e) ? (x = () => e.value, v = /* @__PURE__ */ Gn(e)) : /* @__PURE__ */ vi(e) ? (x = () => g(e), v = !0) : Ye(e) ? (E = !0, v = e.some((I) => /* @__PURE__ */ vi(I) || /* @__PURE__ */ Gn(I)), x = () => e.map((I) => {
    if (/* @__PURE__ */ hn(I))
      return I.value;
    if (/* @__PURE__ */ vi(I))
      return g(I);
    if (Xe(I))
      return h ? h(I, 2) : I();
  })) : Xe(e) ? t ? x = h ? () => h(e, 2) : e : x = () => {
    if (S) {
      zr();
      try {
        S();
      } finally {
        $r();
      }
    }
    const I = mi;
    mi = y;
    try {
      return h ? h(e, 3, [M]) : e(M);
    } finally {
      mi = I;
    }
  } : x = vr, t && a) {
    const I = x, D = a === !0 ? 1 / 0 : a;
    x = () => Rr(I(), D);
  }
  const $ = Rb(), L = () => {
    y.stop(), $ && $.active && Zc($.effects, y);
  };
  if (o && t) {
    const I = t;
    t = (...D) => {
      I(...D), L();
    };
  }
  let P = E ? new Array(e.length).fill(Ko) : Ko;
  const z = (I) => {
    if (!(!(y.flags & 1) || !y.dirty && !I))
      if (t) {
        const D = y.run();
        if (a || v || (E ? D.some((G, B) => pr(G, P[B])) : pr(D, P))) {
          S && S();
          const G = mi;
          mi = y;
          try {
            const B = [
              D,
              // pass undefined as the old value when it's changed for the first time
              P === Ko ? void 0 : E && P[0] === Ko ? [] : P,
              M
            ];
            P = D, h ? h(t, 3, B) : (
              // @ts-expect-error
              t(...B)
            );
          } finally {
            mi = G;
          }
        }
      } else
        y.run();
  };
  return f && f(z), y = new Bh(x), y.scheduler = u ? () => u(z, !1) : z, M = (I) => ly(I, !1, y), S = y.onStop = () => {
    const I = Cs.get(y);
    if (I) {
      if (h)
        h(I, 4);
      else
        for (const D of I) D();
      Cs.delete(y);
    }
  }, t ? r ? z(!0) : P = y.run() : u ? u(z.bind(null, !0), !0) : y.run(), L.pause = y.pause.bind(y), L.resume = y.resume.bind(y), L.stop = L, L;
}
function Rr(e, t = 1 / 0, n) {
  if (t <= 0 || !bt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ hn(e))
    Rr(e.value, t, n);
  else if (Ye(e))
    for (let r = 0; r < e.length; r++)
      Rr(e[r], t, n);
  else if (Rh(e) || sa(e))
    e.forEach((r) => {
      Rr(r, t, n);
    });
  else if ($h(e)) {
    for (const r in e)
      Rr(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Rr(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function bo(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (a) {
    Qs(a, t, n);
  }
}
function xr(e, t, n, r) {
  if (Xe(e)) {
    const a = bo(e, t, n, r);
    return a && Lh(a) && a.catch((o) => {
      Qs(o, t, n);
    }), a;
  }
  if (Ye(e)) {
    const a = [];
    for (let o = 0; o < e.length; o++)
      a.push(xr(e[o], t, n, r));
    return a;
  }
}
function Qs(e, t, n, r = !0) {
  const a = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: u } = t && t.appContext.config || kt;
  if (t) {
    let f = t.parent;
    const h = t.proxy, g = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const y = f.ec;
      if (y) {
        for (let x = 0; x < y.length; x++)
          if (y[x](e, h, g) === !1)
            return;
      }
      f = f.parent;
    }
    if (o) {
      zr(), bo(o, null, 10, [
        e,
        h,
        g
      ]), $r();
      return;
    }
  }
  uy(e, n, a, r, u);
}
function uy(e, t, n, r = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const xn = [];
let ur = -1;
const la = [];
let Zr = null, ea = 0;
const ap = /* @__PURE__ */ Promise.resolve();
let Ts = null;
function cu(e) {
  const t = Ts || ap;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function fy(e) {
  let t = ur + 1, n = xn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, a = xn[r], o = oo(a);
    o < e || o === e && a.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function uu(e) {
  if (!(e.flags & 1)) {
    const t = oo(e), n = xn[xn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= oo(n) ? xn.push(e) : xn.splice(fy(t), 0, e), e.flags |= 1, op();
  }
}
function op() {
  Ts || (Ts = ap.then(lp));
}
function dy(e) {
  Ye(e) ? la.push(...e) : Zr && e.id === -1 ? Zr.splice(ea + 1, 0, e) : e.flags & 1 || (la.push(e), e.flags |= 1), op();
}
function rd(e, t, n = ur + 1) {
  for (; n < xn.length; n++) {
    const r = xn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      xn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function sp(e) {
  if (la.length) {
    const t = [...new Set(la)].sort(
      (n, r) => oo(n) - oo(r)
    );
    if (la.length = 0, Zr) {
      Zr.push(...t);
      return;
    }
    for (Zr = t, ea = 0; ea < Zr.length; ea++) {
      const n = Zr[ea];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Zr = null, ea = 0;
  }
}
const oo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function lp(e) {
  try {
    for (ur = 0; ur < xn.length; ur++) {
      const t = xn[ur];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), bo(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ur < xn.length; ur++) {
      const t = xn[ur];
      t && (t.flags &= -2);
    }
    ur = -1, xn.length = 0, sp(), Ts = null, (xn.length || la.length) && lp();
  }
}
let Rn = null, cp = null;
function Is(e) {
  const t = Rn;
  return Rn = e, cp = e && e.type.__scopeId || null, t;
}
function up(e, t = Rn, n) {
  if (!t || e._n)
    return e;
  const r = (...a) => {
    r._d && md(-1);
    const o = Is(t);
    let u;
    try {
      u = e(...a);
    } finally {
      Is(o), r._d && md(1);
    }
    return u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function _i(e, t) {
  if (Rn === null)
    return e;
  const n = il(Rn), r = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [o, u, f, h = kt] = t[a];
    o && (Xe(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Rr(u), r.push({
      dir: o,
      instance: n,
      value: u,
      oldValue: void 0,
      arg: f,
      modifiers: h
    }));
  }
  return e;
}
function fi(e, t, n, r) {
  const a = e.dirs, o = t && t.dirs;
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    o && (f.oldValue = o[u].value);
    let h = f.dir[r];
    h && (zr(), xr(h, n, 8, [
      e.el,
      f,
      e,
      t
    ]), $r());
  }
}
function hy(e, t) {
  if (fn) {
    let n = fn.provides;
    const r = fn.parent && fn.parent.provides;
    r === n && (n = fn.provides = Object.create(r)), n[e] = t;
  }
}
function hs(e, t, n = !1) {
  const r = dv();
  if (r || ca) {
    let a = ca ? ca._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Xe(t) ? t.call(r && r.proxy) : t;
  }
}
const py = /* @__PURE__ */ Symbol.for("v-scx"), my = () => hs(py);
function xi(e, t, n) {
  return fp(e, t, n);
}
function fp(e, t, n = kt) {
  const { immediate: r, deep: a, flush: o, once: u } = n, f = gn({}, n), h = t && r || !t && o !== "post";
  let g;
  if (lo) {
    if (o === "sync") {
      const M = my();
      g = M.__watcherHandles || (M.__watcherHandles = []);
    } else if (!h) {
      const M = () => {
      };
      return M.stop = vr, M.resume = vr, M.pause = vr, M;
    }
  }
  const y = fn;
  f.call = (M, v, E) => xr(M, y, v, E);
  let x = !1;
  o === "post" ? f.scheduler = (M) => {
    An(M, y && y.suspense);
  } : o !== "sync" && (x = !0, f.scheduler = (M, v) => {
    v ? M() : uu(M);
  }), f.augmentJob = (M) => {
    t && (M.flags |= 4), x && (M.flags |= 2, y && (M.id = y.uid, M.i = y));
  };
  const S = cy(e, t, f);
  return lo && (g ? g.push(S) : h && S()), S;
}
function gy(e, t, n) {
  const r = this.proxy, a = zt(e) ? e.includes(".") ? dp(r, e) : () => r[e] : e.bind(r, r);
  let o;
  Xe(t) ? o = t : (o = t.handler, n = t);
  const u = yo(this), f = fp(a, o.bind(r), n);
  return u(), f;
}
function dp(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
const by = /* @__PURE__ */ Symbol("_vte"), yy = (e) => e.__isTeleport, vy = /* @__PURE__ */ Symbol("_leaveCb");
function fu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, fu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function hp(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function id(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Es = /* @__PURE__ */ new WeakMap();
function Qa(e, t, n, r, a = !1) {
  if (Ye(e)) {
    e.forEach(
      (E, $) => Qa(
        E,
        t && (Ye(t) ? t[$] : t),
        n,
        r,
        a
      )
    );
    return;
  }
  if (eo(r) && !a) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Qa(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? il(r.component) : r.el, u = a ? null : o, { i: f, r: h } = e, g = t && t.r, y = f.refs === kt ? f.refs = {} : f.refs, x = f.setupState, S = /* @__PURE__ */ ft(x), M = x === kt ? Fh : (E) => id(y, E) ? !1 : dt(S, E), v = (E, $) => !($ && id(y, $));
  if (g != null && g !== h) {
    if (ad(t), zt(g))
      y[g] = null, M(g) && (x[g] = null);
    else if (/* @__PURE__ */ hn(g)) {
      const E = t;
      v(g, E.k) && (g.value = null), E.k && (y[E.k] = null);
    }
  }
  if (Xe(h))
    bo(h, f, 12, [u, y]);
  else {
    const E = zt(h), $ = /* @__PURE__ */ hn(h);
    if (E || $) {
      const L = () => {
        if (e.f) {
          const P = E ? M(h) ? x[h] : y[h] : v() || !e.k ? h.value : y[e.k];
          if (a)
            Ye(P) && Zc(P, o);
          else if (Ye(P))
            P.includes(o) || P.push(o);
          else if (E)
            y[h] = [o], M(h) && (x[h] = y[h]);
          else {
            const z = [o];
            v(h, e.k) && (h.value = z), e.k && (y[e.k] = z);
          }
        } else E ? (y[h] = u, M(h) && (x[h] = u)) : $ && (v(h, e.k) && (h.value = u), e.k && (y[e.k] = u));
      };
      if (u) {
        const P = () => {
          L(), Es.delete(e);
        };
        P.id = -1, Es.set(e, P), An(P, n);
      } else
        ad(e), L();
    }
  }
}
function ad(e) {
  const t = Es.get(e);
  t && (t.flags |= 8, Es.delete(e));
}
Js().requestIdleCallback;
Js().cancelIdleCallback;
const eo = (e) => !!e.type.__asyncLoader, pp = (e) => e.type.__isKeepAlive;
function _y(e, t) {
  mp(e, "a", t);
}
function xy(e, t) {
  mp(e, "da", t);
}
function mp(e, t, n = fn) {
  const r = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (el(t, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      pp(a.parent.vnode) && Sy(r, t, n, a), a = a.parent;
  }
}
function Sy(e, t, n, r) {
  const a = el(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  gp(() => {
    Zc(r[t], a);
  }, n);
}
function el(e, t, n = fn, r = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...u) => {
      zr();
      const f = yo(n), h = xr(t, n, e, u);
      return f(), $r(), h;
    });
    return r ? a.unshift(o) : a.push(o), o;
  }
}
const Gr = (e) => (t, n = fn) => {
  (!lo || e === "sp") && el(e, (...r) => t(...r), n);
}, wy = Gr("bm"), du = Gr("m"), ky = Gr(
  "bu"
), Ny = Gr("u"), tl = Gr(
  "bum"
), gp = Gr("um"), My = Gr(
  "sp"
), Py = Gr("rtg"), Ay = Gr("rtc");
function Cy(e, t = fn) {
  el("ec", e, t);
}
const Ty = "components", bp = /* @__PURE__ */ Symbol.for("v-ndc");
function Iy(e) {
  return zt(e) ? Ey(Ty, e, !1) || e : e || bp;
}
function Ey(e, t, n = !0, r = !1) {
  const a = Rn || fn;
  if (a) {
    const o = a.type;
    {
      const f = bv(
        o,
        !1
      );
      if (f && (f === t || f === Sn(t) || f === Xs(Sn(t))))
        return o;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      od(a[e] || o[e], t) || // global registration
      od(a.appContext[e], t)
    );
    return !u && r ? o : u;
  }
}
function od(e, t) {
  return e && (e[t] || e[Sn(t)] || e[Xs(Sn(t))]);
}
function Lt(e, t, n, r) {
  let a;
  const o = n, u = Ye(e);
  if (u || zt(e)) {
    const f = u && /* @__PURE__ */ vi(e);
    let h = !1, g = !1;
    f && (h = !/* @__PURE__ */ Gn(e), g = /* @__PURE__ */ jr(e), e = Zs(e)), a = new Array(e.length);
    for (let y = 0, x = e.length; y < x; y++)
      a[y] = t(
        h ? g ? ga(rr(e[y])) : rr(e[y]) : e[y],
        y,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let f = 0; f < e; f++)
      a[f] = t(f + 1, f, void 0, o);
  } else if (bt(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (f, h) => t(f, h, void 0, o)
      );
    else {
      const f = Object.keys(e);
      a = new Array(f.length);
      for (let h = 0, g = f.length; h < g; h++) {
        const y = f[h];
        a[h] = t(e[y], y, h, o);
      }
    }
  else
    a = [];
  return a;
}
const Nc = (e) => e ? zp(e) ? il(e) : Nc(e.parent) : null, to = (
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
    $parent: (e) => Nc(e.parent),
    $root: (e) => Nc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => vp(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      uu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = cu.bind(e.proxy)),
    $watch: (e) => gy.bind(e)
  })
), Xl = (e, t) => e !== kt && !e.__isScriptSetup && dt(e, t), Dy = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: a, props: o, accessCache: u, type: f, appContext: h } = e;
    if (t[0] !== "$") {
      const S = u[t];
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
        if (Xl(r, t))
          return u[t] = 1, r[t];
        if (a !== kt && dt(a, t))
          return u[t] = 2, a[t];
        if (dt(o, t))
          return u[t] = 3, o[t];
        if (n !== kt && dt(n, t))
          return u[t] = 4, n[t];
        Mc && (u[t] = 0);
      }
    }
    const g = to[t];
    let y, x;
    if (g)
      return t === "$attrs" && un(e.attrs, "get", ""), g(e);
    if (
      // css module (injected by vue-loader)
      (y = f.__cssModules) && (y = y[t])
    )
      return y;
    if (n !== kt && dt(n, t))
      return u[t] = 4, n[t];
    if (
      // global properties
      x = h.config.globalProperties, dt(x, t)
    )
      return x[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: a, ctx: o } = e;
    return Xl(a, t) ? (a[t] = n, !0) : r !== kt && dt(r, t) ? (r[t] = n, !0) : dt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: a, props: o, type: u }
  }, f) {
    let h;
    return !!(n[f] || e !== kt && f[0] !== "$" && dt(e, f) || Xl(t, f) || dt(o, f) || dt(r, f) || dt(to, f) || dt(a.config.globalProperties, f) || (h = u.__cssModules) && h[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : dt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function sd(e) {
  return Ye(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Mc = !0;
function Oy(e) {
  const t = vp(e), n = e.proxy, r = e.ctx;
  Mc = !1, t.beforeCreate && ld(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: o,
    methods: u,
    watch: f,
    provide: h,
    inject: g,
    // lifecycle
    created: y,
    beforeMount: x,
    mounted: S,
    beforeUpdate: M,
    updated: v,
    activated: E,
    deactivated: $,
    beforeDestroy: L,
    beforeUnmount: P,
    destroyed: z,
    unmounted: I,
    render: D,
    renderTracked: G,
    renderTriggered: B,
    errorCaptured: le,
    serverPrefetch: ie,
    // public API
    expose: T,
    inheritAttrs: K,
    // assets
    components: J,
    directives: he,
    filters: pe
  } = t;
  if (g && Fy(g, r, null), u)
    for (const A in u) {
      const ve = u[A];
      Xe(ve) && (r[A] = ve.bind(n));
    }
  if (a) {
    const A = a.call(n, n);
    bt(A) && (e.data = /* @__PURE__ */ xa(A));
  }
  if (Mc = !0, o)
    for (const A in o) {
      const ve = o[A], Ae = Xe(ve) ? ve.bind(n, n) : Xe(ve.get) ? ve.get.bind(n, n) : vr, Pe = !Xe(ve) && Xe(ve.set) ? ve.set.bind(n) : vr, H = wt({
        get: Ae,
        set: Pe
      });
      Object.defineProperty(r, A, {
        enumerable: !0,
        configurable: !0,
        get: () => H.value,
        set: (Le) => H.value = Le
      });
    }
  if (f)
    for (const A in f)
      yp(f[A], r, n, A);
  if (h) {
    const A = Xe(h) ? h.call(n) : h;
    Reflect.ownKeys(A).forEach((ve) => {
      hy(ve, A[ve]);
    });
  }
  y && ld(y, e, "c");
  function we(A, ve) {
    Ye(ve) ? ve.forEach((Ae) => A(Ae.bind(n))) : ve && A(ve.bind(n));
  }
  if (we(wy, x), we(du, S), we(ky, M), we(Ny, v), we(_y, E), we(xy, $), we(Cy, le), we(Ay, G), we(Py, B), we(tl, P), we(gp, I), we(My, ie), Ye(T))
    if (T.length) {
      const A = e.exposed || (e.exposed = {});
      T.forEach((ve) => {
        Object.defineProperty(A, ve, {
          get: () => n[ve],
          set: (Ae) => n[ve] = Ae,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  D && e.render === vr && (e.render = D), K != null && (e.inheritAttrs = K), J && (e.components = J), he && (e.directives = he), ie && hp(e);
}
function Fy(e, t, n = vr) {
  Ye(e) && (e = Pc(e));
  for (const r in e) {
    const a = e[r];
    let o;
    bt(a) ? "default" in a ? o = hs(
      a.from || r,
      a.default,
      !0
    ) : o = hs(a.from || r) : o = hs(a), /* @__PURE__ */ hn(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (u) => o.value = u
    }) : t[r] = o;
  }
}
function ld(e, t, n) {
  xr(
    Ye(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function yp(e, t, n, r) {
  let a = r.includes(".") ? dp(n, r) : () => n[r];
  if (zt(e)) {
    const o = t[e];
    Xe(o) && xi(a, o);
  } else if (Xe(e))
    xi(a, e.bind(n));
  else if (bt(e))
    if (Ye(e))
      e.forEach((o) => yp(o, t, n, r));
    else {
      const o = Xe(e.handler) ? e.handler.bind(n) : t[e.handler];
      Xe(o) && xi(a, o, e);
    }
}
function vp(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: a,
    optionsCache: o,
    config: { optionMergeStrategies: u }
  } = e.appContext, f = o.get(t);
  let h;
  return f ? h = f : !a.length && !n && !r ? h = t : (h = {}, a.length && a.forEach(
    (g) => Ds(h, g, u, !0)
  ), Ds(h, t, u)), bt(t) && o.set(t, h), h;
}
function Ds(e, t, n, r = !1) {
  const { mixins: a, extends: o } = t;
  o && Ds(e, o, n, !0), a && a.forEach(
    (u) => Ds(e, u, n, !0)
  );
  for (const u in t)
    if (!(r && u === "expose")) {
      const f = Ry[u] || n && n[u];
      e[u] = f ? f(e[u], t[u]) : t[u];
    }
  return e;
}
const Ry = {
  data: cd,
  props: ud,
  emits: ud,
  // objects
  methods: Ka,
  computed: Ka,
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
  components: Ka,
  directives: Ka,
  // watch
  watch: zy,
  // provide / inject
  provide: cd,
  inject: Ly
};
function cd(e, t) {
  return t ? e ? function() {
    return gn(
      Xe(e) ? e.call(this, this) : e,
      Xe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ly(e, t) {
  return Ka(Pc(e), Pc(t));
}
function Pc(e) {
  if (Ye(e)) {
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
function Ka(e, t) {
  return e ? gn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ud(e, t) {
  return e ? Ye(e) && Ye(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : gn(
    /* @__PURE__ */ Object.create(null),
    sd(e),
    sd(t ?? {})
  ) : t;
}
function zy(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = gn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = _n(e[r], t[r]);
  return n;
}
function _p() {
  return {
    app: null,
    config: {
      isNativeTag: Fh,
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
let $y = 0;
function jy(e, t) {
  return function(r, a = null) {
    Xe(r) || (r = gn({}, r)), a != null && !bt(a) && (a = null);
    const o = _p(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let h = !1;
    const g = o.app = {
      _uid: $y++,
      _component: r,
      _props: a,
      _container: null,
      _context: o,
      _instance: null,
      version: vv,
      get config() {
        return o.config;
      },
      set config(y) {
      },
      use(y, ...x) {
        return u.has(y) || (y && Xe(y.install) ? (u.add(y), y.install(g, ...x)) : Xe(y) && (u.add(y), y(g, ...x))), g;
      },
      mixin(y) {
        return o.mixins.includes(y) || o.mixins.push(y), g;
      },
      component(y, x) {
        return x ? (o.components[y] = x, g) : o.components[y];
      },
      directive(y, x) {
        return x ? (o.directives[y] = x, g) : o.directives[y];
      },
      mount(y, x, S) {
        if (!h) {
          const M = g._ceVNode || je(r, a);
          return M.appContext = o, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(M, y, S), h = !0, g._container = y, y.__vue_app__ = g, il(M.component);
        }
      },
      onUnmount(y) {
        f.push(y);
      },
      unmount() {
        h && (xr(
          f,
          g._instance,
          16
        ), e(null, g._container), delete g._container.__vue_app__);
      },
      provide(y, x) {
        return o.provides[y] = x, g;
      },
      runWithContext(y) {
        const x = ca;
        ca = g;
        try {
          return y();
        } finally {
          ca = x;
        }
      }
    };
    return g;
  };
}
let ca = null;
const Vy = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Sn(t)}Modifiers`] || e[`${Ni(t)}Modifiers`];
function Hy(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || kt;
  let a = n;
  const o = t.startsWith("update:"), u = o && Vy(r, t.slice(7));
  u && (u.trim && (a = n.map((y) => zt(y) ? y.trim() : y)), u.number && (a = n.map(eu)));
  let f, h = r[f = Gl(t)] || // also try camelCase event handler (#2249)
  r[f = Gl(Sn(t))];
  !h && o && (h = r[f = Gl(Ni(t))]), h && xr(
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
    e.emitted[f] = !0, xr(
      g,
      e,
      6,
      a
    );
  }
}
const Uy = /* @__PURE__ */ new WeakMap();
function xp(e, t, n = !1) {
  const r = n ? Uy : t.emitsCache, a = r.get(e);
  if (a !== void 0)
    return a;
  const o = e.emits;
  let u = {}, f = !1;
  if (!Xe(e)) {
    const h = (g) => {
      const y = xp(g, t, !0);
      y && (f = !0, gn(u, y));
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  return !o && !f ? (bt(e) && r.set(e, null), null) : (Ye(o) ? o.forEach((h) => u[h] = null) : gn(u, o), bt(e) && r.set(e, u), u);
}
function nl(e, t) {
  return !e || !Ws(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), dt(e, t[0].toLowerCase() + t.slice(1)) || dt(e, Ni(t)) || dt(e, t));
}
function fd(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: a,
    propsOptions: [o],
    slots: u,
    attrs: f,
    emit: h,
    render: g,
    renderCache: y,
    props: x,
    data: S,
    setupState: M,
    ctx: v,
    inheritAttrs: E
  } = e, $ = Is(e);
  let L, P;
  try {
    if (n.shapeFlag & 4) {
      const I = a || r, D = I;
      L = dr(
        g.call(
          D,
          I,
          y,
          x,
          M,
          S,
          v
        )
      ), P = f;
    } else {
      const I = t;
      L = dr(
        I.length > 1 ? I(
          x,
          { attrs: f, slots: u, emit: h }
        ) : I(
          x,
          null
        )
      ), P = t.props ? f : By(f);
    }
  } catch (I) {
    no.length = 0, Qs(I, e, 1), L = je(ri);
  }
  let z = L;
  if (P && E !== !1) {
    const I = Object.keys(P), { shapeFlag: D } = z;
    I.length && D & 7 && (o && I.some(Ys) && (P = Gy(
      P,
      o
    )), z = ba(z, P, !1, !0));
  }
  return n.dirs && (z = ba(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(n.dirs) : n.dirs), n.transition && fu(z, n.transition), L = z, Is($), L;
}
const By = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ws(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Gy = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ys(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Ky(e, t, n) {
  const { props: r, children: a, component: o } = e, { props: u, children: f, patchFlag: h } = t, g = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && h >= 0) {
    if (h & 1024)
      return !0;
    if (h & 16)
      return r ? dd(r, u, g) : !!u;
    if (h & 8) {
      const y = t.dynamicProps;
      for (let x = 0; x < y.length; x++) {
        const S = y[x];
        if (Sp(u, r, S) && !nl(g, S))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : r === u ? !1 : r ? u ? dd(r, u, g) : !0 : !!u;
  return !1;
}
function dd(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    if (Sp(t, e, o) && !nl(n, o))
      return !0;
  }
  return !1;
}
function Sp(e, t, n) {
  const r = e[n], a = t[n];
  return n === "style" && bt(r) && bt(a) ? !tu(r, a) : r !== a;
}
function Wy({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = r, e = a), a === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const wp = {}, kp = () => Object.create(wp), Np = (e) => Object.getPrototypeOf(e) === wp;
function Yy(e, t, n, r = !1) {
  const a = {}, o = kp();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Mp(e, t, a, o);
  for (const u in e.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? e.props = r ? a : /* @__PURE__ */ ty(a) : e.type.props ? e.props = a : e.props = o, e.attrs = o;
}
function qy(e, t, n, r) {
  const {
    props: a,
    attrs: o,
    vnode: { patchFlag: u }
  } = e, f = /* @__PURE__ */ ft(a), [h] = e.propsOptions;
  let g = !1;
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
        if (nl(e.emitsOptions, S))
          continue;
        const M = t[S];
        if (h)
          if (dt(o, S))
            M !== o[S] && (o[S] = M, g = !0);
          else {
            const v = Sn(S);
            a[v] = Ac(
              h,
              f,
              v,
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
    Mp(e, t, a, o) && (g = !0);
    let y;
    for (const x in f)
      (!t || // for camelCase
      !dt(t, x) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Ni(x)) === x || !dt(t, y))) && (h ? n && // for camelCase
      (n[x] !== void 0 || // for kebab-case
      n[y] !== void 0) && (a[x] = Ac(
        h,
        f,
        x,
        void 0,
        e,
        !0
      )) : delete a[x]);
    if (o !== f)
      for (const x in o)
        (!t || !dt(t, x)) && (delete o[x], g = !0);
  }
  g && Fr(e.attrs, "set", "");
}
function Mp(e, t, n, r) {
  const [a, o] = e.propsOptions;
  let u = !1, f;
  if (t)
    for (let h in t) {
      if (Xa(h))
        continue;
      const g = t[h];
      let y;
      a && dt(a, y = Sn(h)) ? !o || !o.includes(y) ? n[y] = g : (f || (f = {}))[y] = g : nl(e.emitsOptions, h) || (!(h in r) || g !== r[h]) && (r[h] = g, u = !0);
    }
  if (o) {
    const h = /* @__PURE__ */ ft(n), g = f || kt;
    for (let y = 0; y < o.length; y++) {
      const x = o[y];
      n[x] = Ac(
        a,
        h,
        x,
        g[x],
        e,
        !dt(g, x)
      );
    }
  }
  return u;
}
function Ac(e, t, n, r, a, o) {
  const u = e[n];
  if (u != null) {
    const f = dt(u, "default");
    if (f && r === void 0) {
      const h = u.default;
      if (u.type !== Function && !u.skipFactory && Xe(h)) {
        const { propsDefaults: g } = a;
        if (n in g)
          r = g[n];
        else {
          const y = yo(a);
          r = g[n] = h.call(
            null,
            t
          ), y();
        }
      } else
        r = h;
      a.ce && a.ce._setProp(n, r);
    }
    u[
      0
      /* shouldCast */
    ] && (o && !f ? r = !1 : u[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Ni(n)) && (r = !0));
  }
  return r;
}
const Xy = /* @__PURE__ */ new WeakMap();
function Pp(e, t, n = !1) {
  const r = n ? Xy : t.propsCache, a = r.get(e);
  if (a)
    return a;
  const o = e.props, u = {}, f = [];
  let h = !1;
  if (!Xe(e)) {
    const y = (x) => {
      h = !0;
      const [S, M] = Pp(x, t, !0);
      gn(u, S), M && f.push(...M);
    };
    !n && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!o && !h)
    return bt(e) && r.set(e, oa), oa;
  if (Ye(o))
    for (let y = 0; y < o.length; y++) {
      const x = Sn(o[y]);
      hd(x) && (u[x] = kt);
    }
  else if (o)
    for (const y in o) {
      const x = Sn(y);
      if (hd(x)) {
        const S = o[y], M = u[x] = Ye(S) || Xe(S) ? { type: S } : gn({}, S), v = M.type;
        let E = !1, $ = !0;
        if (Ye(v))
          for (let L = 0; L < v.length; ++L) {
            const P = v[L], z = Xe(P) && P.name;
            if (z === "Boolean") {
              E = !0;
              break;
            } else z === "String" && ($ = !1);
          }
        else
          E = Xe(v) && v.name === "Boolean";
        M[
          0
          /* shouldCast */
        ] = E, M[
          1
          /* shouldCastTrue */
        ] = $, (E || dt(M, "default")) && f.push(x);
      }
    }
  const g = [u, f];
  return bt(e) && r.set(e, g), g;
}
function hd(e) {
  return e[0] !== "$" && !Xa(e);
}
const hu = (e) => e === "_" || e === "_ctx" || e === "$stable", pu = (e) => Ye(e) ? e.map(dr) : [dr(e)], Jy = (e, t, n) => {
  if (t._n)
    return t;
  const r = up((...a) => pu(t(...a)), n);
  return r._c = !1, r;
}, Ap = (e, t, n) => {
  const r = e._ctx;
  for (const a in e) {
    if (hu(a)) continue;
    const o = e[a];
    if (Xe(o))
      t[a] = Jy(a, o, r);
    else if (o != null) {
      const u = pu(o);
      t[a] = () => u;
    }
  }
}, Cp = (e, t) => {
  const n = pu(t);
  e.slots.default = () => n;
}, Tp = (e, t, n) => {
  for (const r in t)
    (n || !hu(r)) && (e[r] = t[r]);
}, Zy = (e, t, n) => {
  const r = e.slots = kp();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Tp(r, t, n), n && jh(r, "_", a, !0)) : Ap(t, r);
  } else t && Cp(e, t);
}, Qy = (e, t, n) => {
  const { vnode: r, slots: a } = e;
  let o = !0, u = kt;
  if (r.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? o = !1 : Tp(a, t, n) : (o = !t.$stable, Ap(t, a)), u = t;
  } else t && (Cp(e, t), u = { default: 1 });
  if (o)
    for (const f in a)
      !hu(f) && u[f] == null && delete a[f];
}, An = iv;
function ev(e) {
  return tv(e);
}
function tv(e, t) {
  const n = Js();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: a,
    patchProp: o,
    createElement: u,
    createText: f,
    createComment: h,
    setText: g,
    setElementText: y,
    parentNode: x,
    nextSibling: S,
    setScopeId: M = vr,
    insertStaticContent: v
  } = e, E = (R, j, Q, _e = null, me = null, O = null, ee = void 0, re = null, de = !!j.dynamicChildren) => {
    if (R === j)
      return;
    R && !Ra(R, j) && (_e = Vt(R), Le(R, me, O, !0), R = null), j.patchFlag === -2 && (de = !1, j.dynamicChildren = null);
    const { type: te, ref: ke, shapeFlag: xe } = j;
    switch (te) {
      case rl:
        $(R, j, Q, _e);
        break;
      case ri:
        L(R, j, Q, _e);
        break;
      case Zl:
        R == null && P(j, Q, _e, ee);
        break;
      case it:
        J(
          R,
          j,
          Q,
          _e,
          me,
          O,
          ee,
          re,
          de
        );
        break;
      default:
        xe & 1 ? D(
          R,
          j,
          Q,
          _e,
          me,
          O,
          ee,
          re,
          de
        ) : xe & 6 ? he(
          R,
          j,
          Q,
          _e,
          me,
          O,
          ee,
          re,
          de
        ) : (xe & 64 || xe & 128) && te.process(
          R,
          j,
          Q,
          _e,
          me,
          O,
          ee,
          re,
          de,
          nn
        );
    }
    ke != null && me ? Qa(ke, R && R.ref, O, j || R, !j) : ke == null && R && R.ref != null && Qa(R.ref, null, O, R, !0);
  }, $ = (R, j, Q, _e) => {
    if (R == null)
      r(
        j.el = f(j.children),
        Q,
        _e
      );
    else {
      const me = j.el = R.el;
      j.children !== R.children && g(me, j.children);
    }
  }, L = (R, j, Q, _e) => {
    R == null ? r(
      j.el = h(j.children || ""),
      Q,
      _e
    ) : j.el = R.el;
  }, P = (R, j, Q, _e) => {
    [R.el, R.anchor] = v(
      R.children,
      j,
      Q,
      _e,
      R.el,
      R.anchor
    );
  }, z = ({ el: R, anchor: j }, Q, _e) => {
    let me;
    for (; R && R !== j; )
      me = S(R), r(R, Q, _e), R = me;
    r(j, Q, _e);
  }, I = ({ el: R, anchor: j }) => {
    let Q;
    for (; R && R !== j; )
      Q = S(R), a(R), R = Q;
    a(j);
  }, D = (R, j, Q, _e, me, O, ee, re, de) => {
    if (j.type === "svg" ? ee = "svg" : j.type === "math" && (ee = "mathml"), R == null)
      G(
        j,
        Q,
        _e,
        me,
        O,
        ee,
        re,
        de
      );
    else {
      const te = R.el && R.el._isVueCE ? R.el : null;
      try {
        te && te._beginPatch(), ie(
          R,
          j,
          me,
          O,
          ee,
          re,
          de
        );
      } finally {
        te && te._endPatch();
      }
    }
  }, G = (R, j, Q, _e, me, O, ee, re) => {
    let de, te;
    const { props: ke, shapeFlag: xe, transition: Ie, dirs: d } = R;
    if (de = R.el = u(
      R.type,
      O,
      ke && ke.is,
      ke
    ), xe & 8 ? y(de, R.children) : xe & 16 && le(
      R.children,
      de,
      null,
      _e,
      me,
      Jl(R, O),
      ee,
      re
    ), d && fi(R, null, _e, "created"), B(de, R, R.scopeId, ee, _e), ke) {
      for (const ze in ke)
        ze !== "value" && !Xa(ze) && o(de, ze, null, ke[ze], O, _e);
      "value" in ke && o(de, "value", null, ke.value, O), (te = ke.onVnodeBeforeMount) && or(te, _e, R);
    }
    d && fi(R, null, _e, "beforeMount");
    const Oe = nv(me, Ie);
    Oe && Ie.beforeEnter(de), r(de, j, Q), ((te = ke && ke.onVnodeMounted) || Oe || d) && An(() => {
      try {
        te && or(te, _e, R), Oe && Ie.enter(de), d && fi(R, null, _e, "mounted");
      } finally {
      }
    }, me);
  }, B = (R, j, Q, _e, me) => {
    if (Q && M(R, Q), _e)
      for (let O = 0; O < _e.length; O++)
        M(R, _e[O]);
    if (me) {
      let O = me.subTree;
      if (j === O || Op(O.type) && (O.ssContent === j || O.ssFallback === j)) {
        const ee = me.vnode;
        B(
          R,
          ee,
          ee.scopeId,
          ee.slotScopeIds,
          me.parent
        );
      }
    }
  }, le = (R, j, Q, _e, me, O, ee, re, de = 0) => {
    for (let te = de; te < R.length; te++) {
      const ke = R[te] = re ? Or(R[te]) : dr(R[te]);
      E(
        null,
        ke,
        j,
        Q,
        _e,
        me,
        O,
        ee,
        re
      );
    }
  }, ie = (R, j, Q, _e, me, O, ee) => {
    const re = j.el = R.el;
    let { patchFlag: de, dynamicChildren: te, dirs: ke } = j;
    de |= R.patchFlag & 16;
    const xe = R.props || kt, Ie = j.props || kt;
    let d;
    if (Q && di(Q, !1), (d = Ie.onVnodeBeforeUpdate) && or(d, Q, j, R), ke && fi(j, R, Q, "beforeUpdate"), Q && di(Q, !0), (xe.innerHTML && Ie.innerHTML == null || xe.textContent && Ie.textContent == null) && y(re, ""), te ? T(
      R.dynamicChildren,
      te,
      re,
      Q,
      _e,
      Jl(j, me),
      O
    ) : ee || ve(
      R,
      j,
      re,
      null,
      Q,
      _e,
      Jl(j, me),
      O,
      !1
    ), de > 0) {
      if (de & 16)
        K(re, xe, Ie, Q, me);
      else if (de & 2 && xe.class !== Ie.class && o(re, "class", null, Ie.class, me), de & 4 && o(re, "style", xe.style, Ie.style, me), de & 8) {
        const Oe = j.dynamicProps;
        for (let ze = 0; ze < Oe.length; ze++) {
          const He = Oe[ze], qe = xe[He], pt = Ie[He];
          (pt !== qe || He === "value") && o(re, He, qe, pt, me, Q);
        }
      }
      de & 1 && R.children !== j.children && y(re, j.children);
    } else !ee && te == null && K(re, xe, Ie, Q, me);
    ((d = Ie.onVnodeUpdated) || ke) && An(() => {
      d && or(d, Q, j, R), ke && fi(j, R, Q, "updated");
    }, _e);
  }, T = (R, j, Q, _e, me, O, ee) => {
    for (let re = 0; re < j.length; re++) {
      const de = R[re], te = j[re], ke = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        de.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (de.type === it || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ra(de, te) || // - In the case of a component, it could contain anything.
        de.shapeFlag & 198) ? x(de.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Q
        )
      );
      E(
        de,
        te,
        ke,
        null,
        _e,
        me,
        O,
        ee,
        !0
      );
    }
  }, K = (R, j, Q, _e, me) => {
    if (j !== Q) {
      if (j !== kt)
        for (const O in j)
          !Xa(O) && !(O in Q) && o(
            R,
            O,
            j[O],
            null,
            me,
            _e
          );
      for (const O in Q) {
        if (Xa(O)) continue;
        const ee = Q[O], re = j[O];
        ee !== re && O !== "value" && o(R, O, re, ee, me, _e);
      }
      "value" in Q && o(R, "value", j.value, Q.value, me);
    }
  }, J = (R, j, Q, _e, me, O, ee, re, de) => {
    const te = j.el = R ? R.el : f(""), ke = j.anchor = R ? R.anchor : f("");
    let { patchFlag: xe, dynamicChildren: Ie, slotScopeIds: d } = j;
    d && (re = re ? re.concat(d) : d), R == null ? (r(te, Q, _e), r(ke, Q, _e), le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      j.children || [],
      Q,
      ke,
      me,
      O,
      ee,
      re,
      de
    )) : xe > 0 && xe & 64 && Ie && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    R.dynamicChildren && R.dynamicChildren.length === Ie.length ? (T(
      R.dynamicChildren,
      Ie,
      Q,
      me,
      O,
      ee,
      re
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (j.key != null || me && j === me.subTree) && Ip(
      R,
      j,
      !0
      /* shallow */
    )) : ve(
      R,
      j,
      Q,
      ke,
      me,
      O,
      ee,
      re,
      de
    );
  }, he = (R, j, Q, _e, me, O, ee, re, de) => {
    j.slotScopeIds = re, R == null ? j.shapeFlag & 512 ? me.ctx.activate(
      j,
      Q,
      _e,
      ee,
      de
    ) : pe(
      j,
      Q,
      _e,
      me,
      O,
      ee,
      de
    ) : fe(R, j, de);
  }, pe = (R, j, Q, _e, me, O, ee) => {
    const re = R.component = fv(
      R,
      _e,
      me
    );
    if (pp(R) && (re.ctx.renderer = nn), hv(re, !1, ee), re.asyncDep) {
      if (me && me.registerDep(re, we, ee), !R.el) {
        const de = re.subTree = je(ri);
        L(null, de, j, Q), R.placeholder = de.el;
      }
    } else
      we(
        re,
        R,
        j,
        Q,
        me,
        O,
        ee
      );
  }, fe = (R, j, Q) => {
    const _e = j.component = R.component;
    if (Ky(R, j, Q))
      if (_e.asyncDep && !_e.asyncResolved) {
        A(_e, j, Q);
        return;
      } else
        _e.next = j, _e.update();
    else
      j.el = R.el, _e.vnode = j;
  }, we = (R, j, Q, _e, me, O, ee) => {
    const re = () => {
      if (R.isMounted) {
        let { next: xe, bu: Ie, u: d, parent: Oe, vnode: ze } = R;
        {
          const se = Ep(R);
          if (se) {
            xe && (xe.el = ze.el, A(R, xe, ee)), se.asyncDep.then(() => {
              An(() => {
                R.isUnmounted || te();
              }, me);
            });
            return;
          }
        }
        let He = xe, qe;
        di(R, !1), xe ? (xe.el = ze.el, A(R, xe, ee)) : xe = ze, Ie && ds(Ie), (qe = xe.props && xe.props.onVnodeBeforeUpdate) && or(qe, Oe, xe, ze), di(R, !0);
        const pt = fd(R), rt = R.subTree;
        R.subTree = pt, E(
          rt,
          pt,
          // parent may have changed if it's in a teleport
          x(rt.el),
          // anchor may have changed if it's in a fragment
          Vt(rt),
          R,
          me,
          O
        ), xe.el = pt.el, He === null && Wy(R, pt.el), d && An(d, me), (qe = xe.props && xe.props.onVnodeUpdated) && An(
          () => or(qe, Oe, xe, ze),
          me
        );
      } else {
        let xe;
        const { el: Ie, props: d } = j, { bm: Oe, m: ze, parent: He, root: qe, type: pt } = R, rt = eo(j);
        di(R, !1), Oe && ds(Oe), !rt && (xe = d && d.onVnodeBeforeMount) && or(xe, He, j), di(R, !0);
        {
          qe.ce && qe.ce._hasShadowRoot() && qe.ce._injectChildStyle(
            pt,
            R.parent ? R.parent.type : void 0
          );
          const se = R.subTree = fd(R);
          E(
            null,
            se,
            Q,
            _e,
            R,
            me,
            O
          ), j.el = se.el;
        }
        if (ze && An(ze, me), !rt && (xe = d && d.onVnodeMounted)) {
          const se = j;
          An(
            () => or(xe, He, se),
            me
          );
        }
        (j.shapeFlag & 256 || He && eo(He.vnode) && He.vnode.shapeFlag & 256) && R.a && An(R.a, me), R.isMounted = !0, j = Q = _e = null;
      }
    };
    R.scope.on();
    const de = R.effect = new Bh(re);
    R.scope.off();
    const te = R.update = de.run.bind(de), ke = R.job = de.runIfDirty.bind(de);
    ke.i = R, ke.id = R.uid, de.scheduler = () => uu(ke), di(R, !0), te();
  }, A = (R, j, Q) => {
    j.component = R;
    const _e = R.vnode.props;
    R.vnode = j, R.next = null, qy(R, j.props, _e, Q), Qy(R, j.children, Q), zr(), rd(R), $r();
  }, ve = (R, j, Q, _e, me, O, ee, re, de = !1) => {
    const te = R && R.children, ke = R ? R.shapeFlag : 0, xe = j.children, { patchFlag: Ie, shapeFlag: d } = j;
    if (Ie > 0) {
      if (Ie & 128) {
        Pe(
          te,
          xe,
          Q,
          _e,
          me,
          O,
          ee,
          re,
          de
        );
        return;
      } else if (Ie & 256) {
        Ae(
          te,
          xe,
          Q,
          _e,
          me,
          O,
          ee,
          re,
          de
        );
        return;
      }
    }
    d & 8 ? (ke & 16 && Ve(te, me, O), xe !== te && y(Q, xe)) : ke & 16 ? d & 16 ? Pe(
      te,
      xe,
      Q,
      _e,
      me,
      O,
      ee,
      re,
      de
    ) : Ve(te, me, O, !0) : (ke & 8 && y(Q, ""), d & 16 && le(
      xe,
      Q,
      _e,
      me,
      O,
      ee,
      re,
      de
    ));
  }, Ae = (R, j, Q, _e, me, O, ee, re, de) => {
    R = R || oa, j = j || oa;
    const te = R.length, ke = j.length, xe = Math.min(te, ke);
    let Ie;
    for (Ie = 0; Ie < xe; Ie++) {
      const d = j[Ie] = de ? Or(j[Ie]) : dr(j[Ie]);
      E(
        R[Ie],
        d,
        Q,
        null,
        me,
        O,
        ee,
        re,
        de
      );
    }
    te > ke ? Ve(
      R,
      me,
      O,
      !0,
      !1,
      xe
    ) : le(
      j,
      Q,
      _e,
      me,
      O,
      ee,
      re,
      de,
      xe
    );
  }, Pe = (R, j, Q, _e, me, O, ee, re, de) => {
    let te = 0;
    const ke = j.length;
    let xe = R.length - 1, Ie = ke - 1;
    for (; te <= xe && te <= Ie; ) {
      const d = R[te], Oe = j[te] = de ? Or(j[te]) : dr(j[te]);
      if (Ra(d, Oe))
        E(
          d,
          Oe,
          Q,
          null,
          me,
          O,
          ee,
          re,
          de
        );
      else
        break;
      te++;
    }
    for (; te <= xe && te <= Ie; ) {
      const d = R[xe], Oe = j[Ie] = de ? Or(j[Ie]) : dr(j[Ie]);
      if (Ra(d, Oe))
        E(
          d,
          Oe,
          Q,
          null,
          me,
          O,
          ee,
          re,
          de
        );
      else
        break;
      xe--, Ie--;
    }
    if (te > xe) {
      if (te <= Ie) {
        const d = Ie + 1, Oe = d < ke ? j[d].el : _e;
        for (; te <= Ie; )
          E(
            null,
            j[te] = de ? Or(j[te]) : dr(j[te]),
            Q,
            Oe,
            me,
            O,
            ee,
            re,
            de
          ), te++;
      }
    } else if (te > Ie)
      for (; te <= xe; )
        Le(R[te], me, O, !0), te++;
    else {
      const d = te, Oe = te, ze = /* @__PURE__ */ new Map();
      for (te = Oe; te <= Ie; te++) {
        const ae = j[te] = de ? Or(j[te]) : dr(j[te]);
        ae.key != null && ze.set(ae.key, te);
      }
      let He, qe = 0;
      const pt = Ie - Oe + 1;
      let rt = !1, se = 0;
      const Gt = new Array(pt);
      for (te = 0; te < pt; te++) Gt[te] = 0;
      for (te = d; te <= xe; te++) {
        const ae = R[te];
        if (qe >= pt) {
          Le(ae, me, O, !0);
          continue;
        }
        let Te;
        if (ae.key != null)
          Te = ze.get(ae.key);
        else
          for (He = Oe; He <= Ie; He++)
            if (Gt[He - Oe] === 0 && Ra(ae, j[He])) {
              Te = He;
              break;
            }
        Te === void 0 ? Le(ae, me, O, !0) : (Gt[Te - Oe] = te + 1, Te >= se ? se = Te : rt = !0, E(
          ae,
          j[Te],
          Q,
          null,
          me,
          O,
          ee,
          re,
          de
        ), qe++);
      }
      const V = rt ? rv(Gt) : oa;
      for (He = V.length - 1, te = pt - 1; te >= 0; te--) {
        const ae = Oe + te, Te = j[ae], ne = j[ae + 1], tt = ae + 1 < ke ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ne.el || Dp(ne)
        ) : _e;
        Gt[te] === 0 ? E(
          null,
          Te,
          Q,
          tt,
          me,
          O,
          ee,
          re,
          de
        ) : rt && (He < 0 || te !== V[He] ? H(Te, Q, tt, 2) : He--);
      }
    }
  }, H = (R, j, Q, _e, me = null) => {
    const { el: O, type: ee, transition: re, children: de, shapeFlag: te } = R;
    if (te & 6) {
      H(R.component.subTree, j, Q, _e);
      return;
    }
    if (te & 128) {
      R.suspense.move(j, Q, _e);
      return;
    }
    if (te & 64) {
      ee.move(R, j, Q, nn);
      return;
    }
    if (ee === it) {
      r(O, j, Q);
      for (let xe = 0; xe < de.length; xe++)
        H(de[xe], j, Q, _e);
      r(R.anchor, j, Q);
      return;
    }
    if (ee === Zl) {
      z(R, j, Q);
      return;
    }
    if (_e !== 2 && te & 1 && re)
      if (_e === 0)
        re.beforeEnter(O), r(O, j, Q), An(() => re.enter(O), me);
      else {
        const { leave: xe, delayLeave: Ie, afterLeave: d } = re, Oe = () => {
          R.ctx.isUnmounted ? a(O) : r(O, j, Q);
        }, ze = () => {
          O._isLeaving && O[vy](
            !0
            /* cancelled */
          ), xe(O, () => {
            Oe(), d && d();
          });
        };
        Ie ? Ie(O, Oe, ze) : ze();
      }
    else
      r(O, j, Q);
  }, Le = (R, j, Q, _e = !1, me = !1) => {
    const {
      type: O,
      props: ee,
      ref: re,
      children: de,
      dynamicChildren: te,
      shapeFlag: ke,
      patchFlag: xe,
      dirs: Ie,
      cacheIndex: d,
      memo: Oe
    } = R;
    if (xe === -2 && (me = !1), re != null && (zr(), Qa(re, null, Q, R, !0), $r()), d != null && (j.renderCache[d] = void 0), ke & 256) {
      j.ctx.deactivate(R);
      return;
    }
    const ze = ke & 1 && Ie, He = !eo(R);
    let qe;
    if (He && (qe = ee && ee.onVnodeBeforeUnmount) && or(qe, j, R), ke & 6)
      nt(R.component, Q, _e);
    else {
      if (ke & 128) {
        R.suspense.unmount(Q, _e);
        return;
      }
      ze && fi(R, null, j, "beforeUnmount"), ke & 64 ? R.type.remove(
        R,
        j,
        Q,
        nn,
        _e
      ) : te && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !te.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (O !== it || xe > 0 && xe & 64) ? Ve(
        te,
        j,
        Q,
        !1,
        !0
      ) : (O === it && xe & 384 || !me && ke & 16) && Ve(de, j, Q), _e && Qe(R);
    }
    const pt = Oe != null && d == null;
    (He && (qe = ee && ee.onVnodeUnmounted) || ze || pt) && An(() => {
      qe && or(qe, j, R), ze && fi(R, null, j, "unmounted"), pt && (R.el = null);
    }, Q);
  }, Qe = (R) => {
    const { type: j, el: Q, anchor: _e, transition: me } = R;
    if (j === it) {
      yt(Q, _e);
      return;
    }
    if (j === Zl) {
      I(R);
      return;
    }
    const O = () => {
      a(Q), me && !me.persisted && me.afterLeave && me.afterLeave();
    };
    if (R.shapeFlag & 1 && me && !me.persisted) {
      const { leave: ee, delayLeave: re } = me, de = () => ee(Q, O);
      re ? re(R.el, O, de) : de();
    } else
      O();
  }, yt = (R, j) => {
    let Q;
    for (; R !== j; )
      Q = S(R), a(R), R = Q;
    a(j);
  }, nt = (R, j, Q) => {
    const { bum: _e, scope: me, job: O, subTree: ee, um: re, m: de, a: te } = R;
    pd(de), pd(te), _e && ds(_e), me.stop(), O && (O.flags |= 8, Le(ee, R, j, Q)), re && An(re, j), An(() => {
      R.isUnmounted = !0;
    }, j);
  }, Ve = (R, j, Q, _e = !1, me = !1, O = 0) => {
    for (let ee = O; ee < R.length; ee++)
      Le(R[ee], j, Q, _e, me);
  }, Vt = (R) => {
    if (R.shapeFlag & 6)
      return Vt(R.component.subTree);
    if (R.shapeFlag & 128)
      return R.suspense.next();
    const j = S(R.anchor || R.el), Q = j && j[by];
    return Q ? S(Q) : j;
  };
  let Tn = !1;
  const In = (R, j, Q) => {
    let _e;
    R == null ? j._vnode && (Le(j._vnode, null, null, !0), _e = j._vnode.component) : E(
      j._vnode || null,
      R,
      j,
      null,
      null,
      null,
      Q
    ), j._vnode = R, Tn || (Tn = !0, rd(_e), sp(), Tn = !1);
  }, nn = {
    p: E,
    um: Le,
    m: H,
    r: Qe,
    mt: pe,
    mc: le,
    pc: ve,
    pbc: T,
    n: Vt,
    o: e
  };
  return {
    render: In,
    hydrate: void 0,
    createApp: jy(In)
  };
}
function Jl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function di({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function nv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ip(e, t, n = !1) {
  const r = e.children, a = t.children;
  if (Ye(r) && Ye(a))
    for (let o = 0; o < r.length; o++) {
      const u = r[o];
      let f = a[o];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[o] = Or(a[o]), f.el = u.el), !n && f.patchFlag !== -2 && Ip(u, f)), f.type === rl && (f.patchFlag === -1 && (f = a[o] = Or(f)), f.el = u.el), f.type === ri && !f.el && (f.el = u.el);
    }
}
function rv(e) {
  const t = e.slice(), n = [0];
  let r, a, o, u, f;
  const h = e.length;
  for (r = 0; r < h; r++) {
    const g = e[r];
    if (g !== 0) {
      if (a = n[n.length - 1], e[a] < g) {
        t[r] = a, n.push(r);
        continue;
      }
      for (o = 0, u = n.length - 1; o < u; )
        f = o + u >> 1, e[n[f]] < g ? o = f + 1 : u = f;
      g < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, u = n[o - 1]; o-- > 0; )
    n[o] = u, u = t[u];
  return n;
}
function Ep(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ep(t);
}
function pd(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Dp(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Dp(t.subTree) : null;
}
const Op = (e) => e.__isSuspense;
function iv(e, t) {
  t && t.pendingBranch ? Ye(e) ? t.effects.push(...e) : t.effects.push(e) : dy(e);
}
const it = /* @__PURE__ */ Symbol.for("v-fgt"), rl = /* @__PURE__ */ Symbol.for("v-txt"), ri = /* @__PURE__ */ Symbol.for("v-cmt"), Zl = /* @__PURE__ */ Symbol.for("v-stc"), no = [];
let Ln = null;
function Me(e = !1) {
  no.push(Ln = e ? null : []);
}
function av() {
  no.pop(), Ln = no[no.length - 1] || null;
}
let so = 1;
function md(e, t = !1) {
  so += e, e < 0 && Ln && t && (Ln.hasOnce = !0);
}
function Fp(e) {
  return e.dynamicChildren = so > 0 ? Ln || oa : null, av(), so > 0 && Ln && Ln.push(e), e;
}
function Ce(e, t, n, r, a, o) {
  return Fp(
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
function Mi(e, t, n, r, a) {
  return Fp(
    je(
      e,
      t,
      n,
      r,
      a,
      !0
    )
  );
}
function Rp(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ra(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Lp = ({ key: e }) => e ?? null, ps = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? zt(e) || /* @__PURE__ */ hn(e) || Xe(e) ? { i: Rn, r: e, k: t, f: !!n } : e : null);
function X(e, t = null, n = null, r = 0, a = null, o = e === it ? 0 : 1, u = !1, f = !1) {
  const h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Lp(t),
    ref: t && ps(t),
    scopeId: cp,
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
    ctx: Rn
  };
  return f ? (mu(h, n), o & 128 && e.normalize(h)) : n && (h.shapeFlag |= zt(n) ? 8 : 16), so > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  Ln && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (h.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  h.patchFlag !== 32 && Ln.push(h), h;
}
const je = ov;
function ov(e, t = null, n = null, r = 0, a = null, o = !1) {
  if ((!e || e === bp) && (e = ri), Rp(e)) {
    const f = ba(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && mu(f, n), so > 0 && !o && Ln && (f.shapeFlag & 6 ? Ln[Ln.indexOf(e)] = f : Ln.push(f)), f.patchFlag = -2, f;
  }
  if (yv(e) && (e = e.__vccOpts), t) {
    t = sv(t);
    let { class: f, style: h } = t;
    f && !zt(f) && (t.class = ut(f)), bt(h) && (/* @__PURE__ */ lu(h) && !Ye(h) && (h = gn({}, h)), t.style = jt(h));
  }
  const u = zt(e) ? 1 : Op(e) ? 128 : yy(e) ? 64 : bt(e) ? 4 : Xe(e) ? 2 : 0;
  return X(
    e,
    t,
    n,
    r,
    a,
    u,
    o,
    !0
  );
}
function sv(e) {
  return e ? /* @__PURE__ */ lu(e) || Np(e) ? gn({}, e) : e : null;
}
function ba(e, t, n = !1, r = !1) {
  const { props: a, ref: o, patchFlag: u, children: f, transition: h } = e, g = t ? Qr(a || {}, t) : a, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: g,
    key: g && Lp(g),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Ye(o) ? o.concat(ps(t)) : [o, ps(t)] : ps(t)
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
    patchFlag: t && e.type !== it ? u === -1 ? 16 : u | 16 : u,
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
    ssContent: e.ssContent && ba(e.ssContent),
    ssFallback: e.ssFallback && ba(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return h && r && fu(
    y,
    h.clone(y)
  ), y;
}
function lv(e = " ", t = 0) {
  return je(rl, null, e, t);
}
function Ft(e = "", t = !1) {
  return t ? (Me(), Mi(ri, null, e)) : je(ri, null, e);
}
function dr(e) {
  return e == null || typeof e == "boolean" ? je(ri) : Ye(e) ? je(
    it,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Rp(e) ? Or(e) : je(rl, null, String(e));
}
function Or(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ba(e);
}
function mu(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Ye(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), mu(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Np(t) ? t._ctx = Rn : a === 3 && Rn && (Rn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Xe(t) ? (t = { default: t, _ctx: Rn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [lv(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Qr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const a in r)
      if (a === "class")
        t.class !== r.class && (t.class = ut([t.class, r.class]));
      else if (a === "style")
        t.style = jt([t.style, r.style]);
      else if (Ws(a)) {
        const o = t[a], u = r[a];
        u && o !== u && !(Ye(o) && o.includes(u)) ? t[a] = o ? [].concat(o, u) : u : u == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ys(a) && (t[a] = u);
      } else a !== "" && (t[a] = r[a]);
  }
  return t;
}
function or(e, t, n, r = null) {
  xr(e, t, 7, [
    n,
    r
  ]);
}
const cv = _p();
let uv = 0;
function fv(e, t, n) {
  const r = e.type, a = (t ? t.appContext : e.appContext) || cv, o = {
    uid: uv++,
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
    scope: new Fb(
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
    propsOptions: Pp(r, a),
    emitsOptions: xp(r, a),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Hy.bind(null, o), e.ce && e.ce(o), o;
}
let fn = null;
const dv = () => fn || Rn;
let Os, Cc;
{
  const e = Js(), t = (n, r) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(r), (o) => {
      a.length > 1 ? a.forEach((u) => u(o)) : a[0](o);
    };
  };
  Os = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => fn = n
  ), Cc = t(
    "__VUE_SSR_SETTERS__",
    (n) => lo = n
  );
}
const yo = (e) => {
  const t = fn;
  return Os(e), e.scope.on(), () => {
    e.scope.off(), Os(t);
  };
}, gd = () => {
  fn && fn.scope.off(), Os(null);
};
function zp(e) {
  return e.vnode.shapeFlag & 4;
}
let lo = !1;
function hv(e, t = !1, n = !1) {
  t && Cc(t);
  const { props: r, children: a } = e.vnode, o = zp(e);
  Yy(e, r, o, t), Zy(e, a, n || t);
  const u = o ? pv(e, t) : void 0;
  return t && Cc(!1), u;
}
function pv(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Dy);
  const { setup: r } = n;
  if (r) {
    zr();
    const a = e.setupContext = r.length > 1 ? gv(e) : null, o = yo(e), u = bo(
      r,
      e,
      0,
      [
        e.props,
        a
      ]
    ), f = Lh(u);
    if ($r(), o(), (f || e.sp) && !eo(e) && hp(e), f) {
      if (u.then(gd, gd), t)
        return u.then((h) => {
          bd(e, h);
        }).catch((h) => {
          Qs(h, e, 0);
        });
      e.asyncDep = u;
    } else
      bd(e, u);
  } else
    $p(e);
}
function bd(e, t, n) {
  Xe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : bt(t) && (e.setupState = ip(t)), $p(e);
}
function $p(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || vr);
  {
    const a = yo(e);
    zr();
    try {
      Oy(e);
    } finally {
      $r(), a();
    }
  }
}
const mv = {
  get(e, t) {
    return un(e, "get", ""), e[t];
  }
};
function gv(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, mv),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function il(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ip(ny(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in to)
        return to[n](e);
    },
    has(t, n) {
      return n in t || n in to;
    }
  })) : e.proxy;
}
function bv(e, t = !0) {
  return Xe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function yv(e) {
  return Xe(e) && "__vccOpts" in e;
}
const wt = (e, t) => /* @__PURE__ */ sy(e, t, lo), vv = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Tc;
const yd = typeof window < "u" && window.trustedTypes;
if (yd)
  try {
    Tc = /* @__PURE__ */ yd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const jp = Tc ? (e) => Tc.createHTML(e) : (e) => e, _v = "http://www.w3.org/2000/svg", xv = "http://www.w3.org/1998/Math/MathML", Tr = typeof document < "u" ? document : null, vd = Tr && /* @__PURE__ */ Tr.createElement("template"), Sv = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const a = t === "svg" ? Tr.createElementNS(_v, e) : t === "mathml" ? Tr.createElementNS(xv, e) : n ? Tr.createElement(e, { is: n }) : Tr.createElement(e);
    return e === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
  },
  createText: (e) => Tr.createTextNode(e),
  createComment: (e) => Tr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Tr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, a, o) {
    const u = n ? n.previousSibling : t.lastChild;
    if (a && (a === o || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === o || !(a = a.nextSibling)); )
        ;
    else {
      vd.innerHTML = jp(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const f = vd.content;
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
      u ? u.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, wv = /* @__PURE__ */ Symbol("_vtc");
function kv(e, t, n) {
  const r = e[wv];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Fs = /* @__PURE__ */ Symbol("_vod"), Vp = /* @__PURE__ */ Symbol("_vsh"), vo = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Fs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : La(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), La(e, !0), r.enter(e)) : r.leave(e, () => {
      La(e, !1);
    }) : La(e, t));
  },
  beforeUnmount(e, { value: t }) {
    La(e, t);
  }
};
function La(e, t) {
  e.style.display = t ? e[Fs] : "none", e[Vp] = !t;
}
const Nv = /* @__PURE__ */ Symbol(""), Mv = /(?:^|;)\s*display\s*:/;
function Pv(e, t, n) {
  const r = e.style, a = zt(n);
  let o = !1;
  if (n && !a) {
    if (t)
      if (zt(t))
        for (const u of t.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && ms(r, f, "");
        }
      else
        for (const u in t)
          n[u] == null && ms(r, u, "");
    for (const u in n)
      u === "display" && (o = !0), ms(r, u, n[u]);
  } else if (a) {
    if (t !== n) {
      const u = r[Nv];
      u && (n += ";" + u), r.cssText = n, o = Mv.test(n);
    }
  } else t && e.removeAttribute("style");
  Fs in e && (e[Fs] = o ? r.display : "", e[Vp] && (r.display = "none"));
}
const _d = /\s*!important$/;
function ms(e, t, n) {
  if (Ye(n))
    n.forEach((r) => ms(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Av(e, t);
    _d.test(n) ? e.setProperty(
      Ni(r),
      n.replace(_d, ""),
      "important"
    ) : e[r] = n;
  }
}
const xd = ["Webkit", "Moz", "ms"], Ql = {};
function Av(e, t) {
  const n = Ql[t];
  if (n)
    return n;
  let r = Sn(t);
  if (r !== "filter" && r in e)
    return Ql[t] = r;
  r = Xs(r);
  for (let a = 0; a < xd.length; a++) {
    const o = xd[a] + r;
    if (o in e)
      return Ql[t] = o;
  }
  return t;
}
const Sd = "http://www.w3.org/1999/xlink";
function wd(e, t, n, r, a, o = Db(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Sd, t.slice(6, t.length)) : e.setAttributeNS(Sd, t, n) : n == null || o && !Vh(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : _r(n) ? String(n) : n
  );
}
function kd(e, t, n, r, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? jp(n) : n);
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
  let u = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = Vh(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  u && e.removeAttribute(a || t);
}
function ta(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Cv(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Nd = /* @__PURE__ */ Symbol("_vei");
function Tv(e, t, n, r, a = null) {
  const o = e[Nd] || (e[Nd] = {}), u = o[t];
  if (r && u)
    u.value = r;
  else {
    const [f, h] = Iv(t);
    if (r) {
      const g = o[t] = Ov(
        r,
        a
      );
      ta(e, f, g, h);
    } else u && (Cv(e, f, u, h), o[t] = void 0);
  }
}
const Md = /(?:Once|Passive|Capture)$/;
function Iv(e) {
  let t;
  if (Md.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Md); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ni(e.slice(2)), t];
}
let ec = 0;
const Ev = /* @__PURE__ */ Promise.resolve(), Dv = () => ec || (Ev.then(() => ec = 0), ec = Date.now());
function Ov(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    xr(
      Fv(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Dv(), n;
}
function Fv(e, t) {
  if (Ye(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (a) => !a._stopped && r && r(a)
    );
  } else
    return t;
}
const Pd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Rv = (e, t, n, r, a, o) => {
  const u = a === "svg";
  t === "class" ? kv(e, r, u) : t === "style" ? Pv(e, n, r) : Ws(t) ? Ys(t) || Tv(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Lv(e, t, r, u)) ? (kd(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && wd(e, t, r, u, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (zv(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !zt(r))) ? kd(e, Sn(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), wd(e, t, r, u));
};
function Lv(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Pd(t) && Xe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Pd(t) && zt(n) ? !1 : t in e;
}
function zv(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Sn(t);
  return Array.isArray(n) ? n.some((a) => Sn(a) === r) : Object.keys(n).some((a) => Sn(a) === r);
}
const Ad = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ye(t) ? (n) => ds(t, n) : t;
};
function $v(e) {
  e.target.composing = !0;
}
function Cd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const tc = /* @__PURE__ */ Symbol("_assign");
function Td(e, t, n) {
  return t && (e = e.trim()), n && (e = eu(e)), e;
}
const Id = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, a) {
    e[tc] = Ad(a);
    const o = r || a.props && a.props.type === "number";
    ta(e, t ? "change" : "input", (u) => {
      u.target.composing || e[tc](Td(e.value, n, o));
    }), (n || o) && ta(e, "change", () => {
      e.value = Td(e.value, n, o);
    }), t || (ta(e, "compositionstart", $v), ta(e, "compositionend", Cd), ta(e, "change", Cd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: a, number: o } }, u) {
    if (e[tc] = Ad(u), e.composing) return;
    const f = (o || e.type === "number") && !/^0\d/.test(e.value) ? eu(e.value) : e.value, h = t ?? "";
    if (f === h)
      return;
    const g = e.getRootNode();
    (g instanceof Document || g instanceof ShadowRoot) && g.activeElement === e && e.type !== "range" && (r && t === n || a && e.value.trim() === h) || (e.value = h);
  }
}, jv = ["ctrl", "shift", "alt", "meta"], Vv = {
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
  exact: (e, t) => jv.some((n) => e[`${n}Key`] && !t.includes(n))
}, zn = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((a, ...o) => {
    for (let u = 0; u < t.length; u++) {
      const f = Vv[t[u]];
      if (f && f(a, t)) return;
    }
    return e(a, ...o);
  }));
}, Hv = /* @__PURE__ */ gn({ patchProp: Rv }, Sv);
let Ed;
function Uv() {
  return Ed || (Ed = ev(Hv));
}
const gu = ((...e) => {
  const t = Uv().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const a = Gv(r);
    if (!a) return;
    const o = t._component;
    !Xe(o) && !o.render && !o.template && (o.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, Bv(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, t;
});
function Bv(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Gv(e) {
  return zt(e) ? document.querySelector(e) : e;
}
const Et = Math.PI / 180, Hp = Math.PI * 2, Kv = 2048;
function St(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function ii(e, t, n) {
  return { x: e, y: t, z: n };
}
function Rs(e, t) {
  return ii(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ia(e, t) {
  return ii(e.x * t, e.y * t, e.z * t);
}
function gs(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Dd(e, t) {
  return ii(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Wa(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ii(e.x / t, e.y / t, e.z / t);
}
function Wv(e, t) {
  const n = Number(e || 0) * Et, r = Number(t || 0) * Et, a = Math.cos(r);
  return ii(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function bs(e, t, n = 0) {
  const r = Wv(e, t);
  let a = ii(0, 1, 0);
  Math.abs(gs(r, a)) > 0.999 && (a = ii(0, 0, 1));
  let o = Wa(Dd(a, r)), u = Wa(Dd(r, o));
  const f = Number(n || 0) * Et, h = Math.cos(f), g = Math.sin(f), y = Rs(ia(o, h), ia(u, g)), x = Rs(ia(o, -g), ia(u, h));
  return o = Wa(y), u = Wa(x), { fwd: r, right: o, up: u };
}
function Yv(e, t) {
  const n = (Number(e || 0) - 0.5) * Hp, r = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(r);
  return ii(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Od(e, t, n = 1) {
  const r = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), o = Math.max(1, Number(n || 1)), u = Math.max(512, Kv), f = Math.min(1, u / Math.max(r, a));
  return {
    sourceWidth: r,
    sourceHeight: a,
    sourceDpr: o,
    renderScale: f,
    width: Math.max(1, Math.round(r * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function Fd(e, t, n) {
  const r = e.createShader(t);
  if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(r) || "shader compile failed";
    throw e.deleteShader(r), new Error(a);
  }
  return r;
}
function nc(e, t, n) {
  const r = Fd(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = Fd(e, e.FRAGMENT_SHADER, n);
  } catch (u) {
    throw e.deleteShader(r), u;
  }
  const o = e.createProgram();
  if (e.attachShader(o, r), e.attachShader(o, a), e.linkProgram(o), e.deleteShader(r), e.deleteShader(a), !e.getProgramParameter(o, e.LINK_STATUS)) {
    const u = e.getProgramInfoLog(o) || "program link failed";
    throw e.deleteProgram(o), new Error(u);
  }
  return o;
}
const rc = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, qv = `#version 300 es
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
}`, Xv = `#version 300 es
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
}`, Jv = `#version 300 es
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
function za(e, t, n) {
  if (!e || e.mode === "unwrap") return null;
  const r = Number(e.mode === "cutout" ? e.hFovDeg || 90 : e.fovDeg || 100), a = Number(e.mode === "cutout" ? e.vFovDeg || 60 : 2 * Math.atan(Math.tan(St(r, 1, 179) * Et * 0.5) * (n / Math.max(t, 1))) / Et);
  return {
    yawDeg: Number(e.yawDeg || 0),
    pitchDeg: Number(e.pitchDeg || 0),
    rollDeg: Number(e.mode === "cutout" && e.rollDeg || 0),
    hFovDeg: St(r, 1, 179),
    vFovDeg: St(a, 0.1, 179)
  };
}
function Zv(e) {
  const t = bs(
    Number(e.yawDeg || 0),
    Number(e.pitchDeg || 0),
    Number(e.rollDeg || 0)
  );
  return {
    right: t.right,
    up: t.up,
    fwd: t.fwd,
    tanX: Math.tan(St(Number(e.hFovDeg), 0.1, 179) * 0.5 * Et),
    tanY: Math.tan(St(Number(e.vFovDeg), 0.1, 179) * 0.5 * Et),
    crop: e.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: St(Number(e.opacity ?? 1), 0, 1)
  };
}
function Qv(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, r = null, a = null, o = null, u = null, f = null, h = null, g = null, y = null, x = null, S = null, M = !1, v = Od(1, 1, 1), E = null, $ = null, L = null, P = null, z = null;
  const I = /* @__PURE__ */ new Map();
  let D = {
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
  }, B = {
    paint: !1,
    mask: !1
  };
  function le(O = null, ee = null) {
    const re = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, re), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, O ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, ee ?? n.CLAMP_TO_EDGE), re;
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
      }), n ? (r = nc(n, rc, qv), a = nc(n, rc, Xv), o = nc(n, rc, Jv), E = {
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
      }, $ = {
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
      }, L = {
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
      }, u = n.createBuffer(), n.bindBuffer(n.ARRAY_BUFFER, u), n.bufferData(n.ARRAY_BUFFER, new Float32Array([
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
      ]), n.STATIC_DRAW), f = le(n.REPEAT, n.CLAMP_TO_EDGE), h = le(n.REPEAT, n.CLAMP_TO_EDGE), g = le(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), M = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function T() {
    var O;
    if (n) {
      try {
        u && n.deleteBuffer(u), f && n.deleteTexture(f), h && n.deleteTexture(h), g && n.deleteTexture(g), I.forEach((ee) => {
          Pe(ee);
        }), r && n.deleteProgram(r), a && n.deleteProgram(a), o && n.deleteProgram(o), (O = n.getExtension("WEBGL_lose_context")) == null || O.loseContext();
      } catch {
      }
      n = null, r = null, a = null, o = null, u = null, f = null, h = null, g = null, I.clear(), y = null, x = null, S = null, G = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, B = {
        paint: !1,
        mask: !1
      }, P = null, z = null, M = !1;
    }
  }
  function K(O, ee, re = 1) {
    v = Od(O, ee, re), (t.width !== v.width || t.height !== v.height) && (t.width = v.width, t.height = v.height);
  }
  function J(O) {
    O === "background" ? y = null : O === "paint" ? x = null : S = null, G[O] && (G[O].width = 0, G[O].height = 0);
  }
  function he() {
    B.paint = !1, B.mask = !1;
  }
  function pe(O) {
    he(), O === "paint" ? B.paint = !0 : O === "mask" && (B.mask = !0);
  }
  function fe(O, ee, re = [], de = { width: 0, height: 0 }, te = !1) {
    if (!n || !O || !ee) return !1;
    const ke = Number(ee.width || ee.videoWidth || ee.naturalWidth || 0), xe = Number(ee.height || ee.videoHeight || ee.naturalHeight || 0);
    if (!(ke > 1) || !(xe > 1)) return !1;
    const Ie = Array.isArray(re) ? re.filter((d) => d && d.w > 0 && d.h > 0) : [];
    if (!Ie.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, O), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, te ? 1 : 0), de.width !== ke || de.height !== xe)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, ee), de.width = ke, de.height = xe, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (P || (P = document.createElement("canvas"), z = P.getContext("2d")), !z)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, ee), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const d of Ie) {
      const Oe = Math.max(0, Math.floor(Number(d.x || 0))), ze = Math.max(0, Math.floor(Number(d.y || 0))), He = Math.min(ke - Oe, Math.ceil(Number(d.w || 0))), qe = Math.min(xe - ze, Math.ceil(Number(d.h || 0)));
      if (!(He <= 0 || qe <= 0)) {
        if (P.width !== He || P.height !== qe) {
          if (P.width = He, P.height = qe, z = P.getContext("2d"), !z)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, ee), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          z.clearRect(0, 0, He, qe);
        z.drawImage(ee, Oe, ze, He, qe, 0, 0, He, qe), n.texSubImage2D(n.TEXTURE_2D, 0, Oe, ze, n.RGBA, n.UNSIGNED_BYTE, P);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function we(O, ee, re, de, te = null, ke = !1) {
    if (!ie()) return !1;
    if (!re)
      return J(O), !1;
    const xe = String(de ?? ""), Ie = O === "background" ? y : O === "paint" ? x : S, d = G[O], Oe = Number(re.width || re.videoWidth || re.naturalWidth || 0), ze = Number(re.height || re.videoHeight || re.naturalHeight || 0), He = d.width !== Oe || d.height !== ze;
    if (Ie === xe && !He && !(Array.isArray(te) && te.length)) return !0;
    if (!(Oe > 0) || !(ze > 0))
      return J(O), !1;
    if (n.bindTexture(n.TEXTURE_2D, ee), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, ke ? 1 : 0), !(Array.isArray(te) && te.length ? fe(ee, re, te, d, ke) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, re), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), J(O), !1;
      d.width = Oe, d.height = ze;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), O === "background" ? y = xe : O === "paint" ? x = xe : S = xe, !0;
  }
  function A(O, ee) {
    return we("background", f, O, ee, null, !0);
  }
  function ve(O, ee, re = null) {
    return we("paint", h, O, ee, re, !0);
  }
  function Ae(O, ee, re = null) {
    return we("mask", g, O, ee, re, !0);
  }
  function Pe(O) {
    O != null && O.texture && n && n.deleteTexture(O.texture);
  }
  function H(O = /* @__PURE__ */ new Set()) {
    I.forEach((ee, re) => {
      O.has(re) || (Pe(ee), I.delete(re));
    });
  }
  function Le(O) {
    if (!n || !(O != null && O.assetId) || !(O != null && O.source)) return null;
    const ee = String(O.assetId), re = String(O.revision ?? ""), de = O.source, te = Number(de.width || de.naturalWidth || de.videoWidth || 0), ke = Number(de.height || de.naturalHeight || de.videoHeight || 0);
    if (te <= 0 || ke <= 0) return null;
    let xe = I.get(ee);
    if (xe || (xe = {
      texture: le(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, I.set(ee, xe)), xe.revision !== re || xe.width !== te || xe.height !== ke) {
      if (n.bindTexture(n.TEXTURE_2D, xe.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, de), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), xe.revision = re, xe.width = te, xe.height = ke;
    }
    return xe.texture;
  }
  function Qe(O = []) {
    if (!ie()) return !1;
    const ee = /* @__PURE__ */ new Set();
    return O.forEach((re) => {
      !(re != null && re.assetId) || !(re != null && re.source) || (ee.add(String(re.assetId)), Le(re));
    }), H(ee), !0;
  }
  function yt() {
    return ie() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function nt(O) {
    n.useProgram(O), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function Ve(O, ee = {}) {
    if (!y) return null;
    n.disable(n.BLEND), nt(r), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(E.background, 0), n.uniform2f(E.viewport, Math.max(1, v.width), Math.max(1, v.height)), n.uniform1i(E.mode, (O == null ? void 0 : O.mode) === "unwrap" ? 0 : (O == null ? void 0 : O.mode) === "cutout" ? 2 : 1);
    const re = za(O, v.width, v.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(E.yaw, Number(re.yawDeg || 0) * Et), n.uniform1f(E.pitch, Number(re.pitchDeg || 0) * Et), n.uniform1f(E.roll, Number(re.rollDeg || 0) * Et), n.uniform1f(E.hFov, St(Number(re.hFovDeg || 90), 0.1, 179) * Et), n.uniform1f(E.vFov, St(Number(re.vFovDeg || 60), 0.1, 179) * Et), n.uniform1f(E.opacity, St(Number(ee.backgroundOpacity ?? 1), 0, 1));
    const de = Number((O == null ? void 0 : O.coverageDeg) || (ee == null ? void 0 : ee.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(E.coverage, de), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function Vt(O, ee = {}) {
    const re = B.paint && x != null, de = B.mask && S != null;
    if (!re && !de) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), nt(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, h), n.uniform1i($.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, g), n.uniform1i($.mask, 1), n.uniform1i($.mode, (O == null ? void 0 : O.mode) === "unwrap" ? 0 : (O == null ? void 0 : O.mode) === "cutout" ? 2 : 1);
    const te = za(O, v.width, v.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f($.yaw, Number(te.yawDeg || 0) * Et), n.uniform1f($.pitch, Number(te.pitchDeg || 0) * Et), n.uniform1f($.roll, Number(te.rollDeg || 0) * Et), n.uniform1f($.hFov, St(Number(te.hFovDeg || 90), 0.1, 179) * Et), n.uniform1f($.vFov, St(Number(te.vFovDeg || 60), 0.1, 179) * Et), n.uniform1f($.paintOpacity, St(Number(ee.paintOpacity ?? 1), 0, 1)), n.uniform1f($.maskOpacity, St(Number(ee.maskOpacity ?? 0.55), 0, 1)), n.uniform1i($.hasPaint, re ? 1 : 0), n.uniform1i($.hasMask, de ? 1 : 0), n.uniform1i($.showMaskTint, ee.showMaskTint === !1 ? 0 : 1), n.uniform3f($.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function Tn(O, ee) {
    var d, Oe, ze, He, qe, pt, rt;
    const re = Array.isArray(O == null ? void 0 : O.objects) ? O.objects : [];
    if (!re.length) {
      he(), H(/* @__PURE__ */ new Set());
      return;
    }
    const de = (ee == null ? void 0 : ee.mode) === "unwrap" ? 0 : (ee == null ? void 0 : ee.mode) === "cutout" ? 2 : 1, te = za(ee, v.width, v.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, ke = bs(te.yawDeg, te.pitchDeg, te.rollDeg), xe = re.slice().sort((se, Gt) => Number((se == null ? void 0 : se.zIndex) || 0) - Number((Gt == null ? void 0 : Gt.zIndex) || 0)), Ie = /* @__PURE__ */ new Set();
    he();
    for (const se of xe)
      if (!(!se || se.visible === !1)) {
        if (se.type === "sticker") {
          const Gt = String(((d = se == null ? void 0 : se.params) == null ? void 0 : d.assetId) || (se == null ? void 0 : se.id) || "");
          if (!Gt) continue;
          Ie.add(Gt);
          const V = Le({
            assetId: Gt,
            source: se.source,
            revision: se.revision
          });
          if (!V) continue;
          const ae = Zv({
            yawDeg: ((Oe = se == null ? void 0 : se.transform) == null ? void 0 : Oe.yawDeg) || 0,
            pitchDeg: ((ze = se == null ? void 0 : se.transform) == null ? void 0 : ze.pitchDeg) || 0,
            rollDeg: ((He = se == null ? void 0 : se.transform) == null ? void 0 : He.rollDeg) || 0,
            hFovDeg: ((qe = se == null ? void 0 : se.transform) == null ? void 0 : qe.hFovDeg) || 30,
            vFovDeg: ((pt = se == null ? void 0 : se.transform) == null ? void 0 : pt.vFovDeg) || 30,
            crop: ((rt = se == null ? void 0 : se.params) == null ? void 0 : rt.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (se == null ? void 0 : se.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), nt(o), n.uniform1i(L.texture, 0), n.uniform1i(L.mode, de), n.uniform3f(L.viewRight, ke.right.x, ke.right.y, ke.right.z), n.uniform3f(L.viewUp, ke.up.x, ke.up.y, ke.up.z), n.uniform3f(L.viewFwd, ke.fwd.x, ke.fwd.y, ke.fwd.z), n.uniform1f(L.viewHfov, St(Number(te.hFovDeg || 90), 0.1, 179) * Et), n.uniform1f(L.viewVfov, St(Number(te.vFovDeg || 60), 0.1, 179) * Et), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, V), n.uniform3f(L.stickerRight, ae.right.x, ae.right.y, ae.right.z), n.uniform3f(L.stickerUp, ae.up.x, ae.up.y, ae.up.z), n.uniform3f(L.stickerFwd, ae.fwd.x, ae.fwd.y, ae.fwd.z), n.uniform1f(L.stickerTanX, Math.max(1e-6, ae.tanX)), n.uniform1f(L.stickerTanY, Math.max(1e-6, ae.tanY)), n.uniform4f(
            L.crop,
            St(Number(ae.crop.x0 ?? 0), 0, 1),
            St(Number(ae.crop.y0 ?? 0), 0, 1),
            St(Number(ae.crop.x1 ?? 1), 0, 1),
            St(Number(ae.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(L.opacity, ae.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (se.type === "paint" || se.type === "raster") {
          if (!ve(se.source, se.revision ?? "")) continue;
          pe("paint"), Vt(ee, {
            paintOpacity: Number(se.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (se.type === "mask") {
          if (!Ae(se.source, se.revision ?? "")) continue;
          pe("mask"), Vt(ee, {
            paintOpacity: 0,
            maskOpacity: Number(se.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    H(Ie), he();
  }
  function In(O) {
    return !yt() || !y ? null : (Ve({
      mode: "panorama",
      yawDeg: (O == null ? void 0 : O.yawDeg) || 0,
      pitchDeg: (O == null ? void 0 : O.pitchDeg) || 0,
      fovDeg: (O == null ? void 0 : O.fovDeg) || 100
    }, O), t);
  }
  function nn(O) {
    return !yt() || !y ? null : (Ve({ mode: "unwrap" }, O), t);
  }
  function Nt(O) {
    return !yt() || !y ? null : (Ve({
      mode: "cutout",
      yawDeg: (O == null ? void 0 : O.yawDeg) || 0,
      pitchDeg: (O == null ? void 0 : O.pitchDeg) || 0,
      rollDeg: (O == null ? void 0 : O.rollDeg) || 0,
      hFovDeg: (O == null ? void 0 : O.hFovDeg) || 90,
      vFovDeg: (O == null ? void 0 : O.vFovDeg) || 60
    }, O), t);
  }
  function R(O = {}) {
    if (!ie()) return !1;
    const ee = Object.prototype.hasOwnProperty.call(O, "backgroundSource"), re = Object.prototype.hasOwnProperty.call(O, "paintSource"), de = Object.prototype.hasOwnProperty.call(O, "maskSource"), te = Object.prototype.hasOwnProperty.call(O, "textures"), ke = Object.prototype.hasOwnProperty.call(O, "scene");
    return ee && A(O.backgroundSource, O.backgroundRevision ?? ""), re && ve(O.paintSource, O.paintRevision ?? ""), de && Ae(O.maskSource, O.maskRevision ?? ""), te && (Qe(O.textures || []), D.textures = O.textures || []), ke && (D.scene = O.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(O, "objectPass") && (D.objectPass = O.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(O, "backgroundOpacity") && (D.backgroundOpacity = Number(O.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(O, "showMaskTint") && (D.showMaskTint = O.showMaskTint === !0), Object.prototype.hasOwnProperty.call(O, "coverageDeg") && (D.coverageDeg = Number(O.coverageDeg || 360) === 180 ? 180 : 360), !0;
  }
  function j(O = {}) {
    return !ie() || (K(O.width, O.height, O.dpr || 1), !yt()) || !R(O) ? null : (y && Ve(O.view, {
      ...O,
      backgroundOpacity: Number(O.backgroundOpacity ?? D.backgroundOpacity ?? 1),
      coverageDeg: Number(O.coverageDeg || D.coverageDeg || 360) === 180 ? 180 : 360
    }), Tn(
      D.objectPass || { objects: [] },
      O.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t);
  }
  function Q(O = {}) {
    return R(O);
  }
  function _e(O, ee, re) {
    const de = Math.max(1, Number((O == null ? void 0 : O.viewportWidth) || v.sourceWidth || v.width || 1)), te = Math.max(1, Number((O == null ? void 0 : O.viewportHeight) || v.sourceHeight || v.height || 1)), ke = Number(ee), xe = Number(re);
    if (!Number.isFinite(ke) || !Number.isFinite(xe)) return null;
    if ((O == null ? void 0 : O.mode) === "unwrap")
      return { u: (ke / de % 1 + 1) % 1, v: St(xe / te, 0, 1) };
    const Ie = za(O, de, te);
    if (!Ie) return null;
    const d = bs(Ie.yawDeg, Ie.pitchDeg, Ie.rollDeg), Oe = (ke - de * 0.5) / (de * 0.5) * Math.tan(St(Ie.hFovDeg, 1, 179) * Et * 0.5), ze = (te * 0.5 - xe) / (te * 0.5) * Math.tan(St(Ie.vFovDeg, 0.1, 179) * Et * 0.5), He = Wa(Rs(Rs(ia(d.right, Oe), ia(d.up, ze)), d.fwd));
    return {
      u: (Math.atan2(He.x, He.z) / Hp + 0.5 + 1) % 1,
      v: St(0.5 - Math.asin(St(He.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function me(O, ee, re) {
    const de = Math.max(1, Number((O == null ? void 0 : O.viewportWidth) || v.sourceWidth || v.width || 1)), te = Math.max(1, Number((O == null ? void 0 : O.viewportHeight) || v.sourceHeight || v.height || 1));
    if ((O == null ? void 0 : O.mode) === "unwrap")
      return {
        x: (Number(ee || 0) % 1 + 1) % 1 * de,
        y: St(Number(re || 0), 0, 1) * te,
        visible: !0
      };
    const ke = za(O, de, te);
    if (!ke)
      return { x: de * 0.5, y: te * 0.5, visible: !1 };
    const xe = bs(ke.yawDeg, ke.pitchDeg, ke.rollDeg), Ie = Yv(ee, re), d = gs(Ie, xe.right), Oe = gs(Ie, xe.up), ze = gs(Ie, xe.fwd);
    if (ze <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const He = de * 0.5 + d / ze * (de * 0.5 / Math.tan(St(ke.hFovDeg, 1, 179) * Et * 0.5)), qe = te * 0.5 - Oe / ze * (te * 0.5 / Math.tan(St(ke.vFovDeg, 0.1, 179) * Et * 0.5));
    return { x: He, y: qe, visible: He >= 0 && He <= de && qe >= 0 && qe <= te };
  }
  return {
    init: ie,
    dispose: T,
    setViewport: K,
    setBackgroundErp: A,
    setPaintErp: ve,
    setMaskErp: Ae,
    renderPanorama: In,
    renderUnwrap: nn,
    renderCutout: Nt,
    renderScene: j,
    syncState: Q,
    screenToErpUv: _e,
    erpUvToScreen: me,
    getCanvas() {
      return t;
    },
    isSupported() {
      return ie();
    },
    getViewport() {
      return { ...v };
    }
  };
}
function Rd(e, t = 1, n = 16384) {
  const r = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(r) ? r : 1));
}
function e1() {
  const e = /* @__PURE__ */ new Map();
  function t(u) {
    return u != null ? String(u) : "default";
  }
  function n(u, f, h) {
    const g = t(u);
    let y = e.get(g) || null;
    if (!y) {
      const M = document.createElement("canvas"), v = M.getContext("2d");
      if (!v) return null;
      y = {
        id: g,
        canvas: M,
        ctx: v,
        width: 0,
        height: 0
      }, e.set(g, y);
    }
    const x = Rd(f), S = Rd(h);
    return y.width !== x && (y.canvas.width = x, y.width = x), y.height !== S && (y.canvas.height = S, y.height = S), y;
  }
  function r(u) {
    return e.get(t(u)) || null;
  }
  function a(u) {
    const f = r(u);
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
const t1 = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), n1 = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function Up(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function r1(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function i1(e = {}) {
  const t = n1.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? Up(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function a1(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!t1.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), r = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? Up(n, 0, 1) : 1,
    zIndex: Number.isFinite(r) ? r : 0,
    coverageAware: r1(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function o1(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((r) => a1(r)).filter((r) => !!r && r.visible !== !1).sort((r, a) => {
      const o = Number((r == null ? void 0 : r.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return o - u;
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function ya(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: i1((e == null ? void 0 : e.background) || {}),
    objectPass: o1((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function s1(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function bu(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), r = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(r) ? r : 0,
    opacity: Number.isFinite(a) ? s1(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function l1(e, t, n = {}) {
  return e ? bu({
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
function c1(e, t, n = {}) {
  return e ? bu({
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
function u1(e, t, n = {}) {
  return e ? bu({
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
function Bp(e = {}) {
  const t = [], n = l1(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), r = c1(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), r && t.push(r), a.forEach((o, u) => {
    const f = u1(
      (o == null ? void 0 : o.source) || null,
      (o == null ? void 0 : o.revision) || "",
      {
        id: String((o == null ? void 0 : o.id) || `raster_layer_${u}`),
        zIndex: Number((o == null ? void 0 : o.zIndex) ?? (o == null ? void 0 : o.z_index) ?? 90),
        opacity: Number((o == null ? void 0 : o.opacity) ?? 1),
        visible: (o == null ? void 0 : o.visible) !== !1,
        transform: (o == null ? void 0 : o.transform) || null,
        params: (o == null ? void 0 : o.params) || {}
      }
    );
    f && t.push(f);
  }), t.sort((o, u) => {
    const f = Number((o == null ? void 0 : o.zIndex) || 0), h = Number((u == null ? void 0 : u.zIndex) || 0);
    return f !== h ? f - h : String((o == null ? void 0 : o.id) || "").localeCompare(String((u == null ? void 0 : u.id) || ""));
  });
}
function yu(e, t) {
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
function Gp(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, r = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, o = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], u = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return ya({
    stateRevision: r,
    background: {
      type: "erp_image",
      source: t,
      revision: u,
      coverageDeg: n,
      opacity: Number((e == null ? void 0 : e.backgroundOpacity) ?? 1)
    },
    objectPass: {
      selectedId: (a == null ? void 0 : a.selectedId) ?? null,
      hoveredId: (a == null ? void 0 : a.hoveredId) ?? null,
      objects: yu(a, o)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function Ya(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], r = yu(t, n), a = Bp({
    paintSource: (e == null ? void 0 : e.paintSource) || null,
    paintRevision: (e == null ? void 0 : e.paintRevision) || "",
    paintOptions: (e == null ? void 0 : e.paintOptions) || null,
    maskSource: (e == null ? void 0 : e.maskSource) || null,
    maskRevision: (e == null ? void 0 : e.maskRevision) || "",
    maskOptions: (e == null ? void 0 : e.maskOptions) || null,
    rasterEntries: (e == null ? void 0 : e.rasterEntries) || []
  });
  return ya({
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
function f1(e = {}) {
  var o, u, f, h, g, y, x, S;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const M = ya(e), v = Array.isArray((o = M.objectPass) == null ? void 0 : o.objects) ? M.objectPass.objects : [], E = {
      stickers: v.filter((z) => z.type === "sticker").map((z) => {
        var I, D, G, B, le, ie, T, K, J, he, pe, fe, we;
        return {
          id: z.id,
          assetId: String(((I = z == null ? void 0 : z.params) == null ? void 0 : I.assetId) || ((D = z == null ? void 0 : z.params) == null ? void 0 : D.asset_id) || (z == null ? void 0 : z.id) || ""),
          yawDeg: Number(((G = z == null ? void 0 : z.transform) == null ? void 0 : G.yawDeg) ?? ((B = z == null ? void 0 : z.params) == null ? void 0 : B.yawDeg) ?? 0),
          pitchDeg: Number(((le = z == null ? void 0 : z.transform) == null ? void 0 : le.pitchDeg) ?? ((ie = z == null ? void 0 : z.params) == null ? void 0 : ie.pitchDeg) ?? 0),
          rollDeg: Number(((T = z == null ? void 0 : z.transform) == null ? void 0 : T.rollDeg) ?? ((K = z == null ? void 0 : z.params) == null ? void 0 : K.rollDeg) ?? 0),
          hFovDeg: Number(((J = z == null ? void 0 : z.transform) == null ? void 0 : J.hFovDeg) ?? ((he = z == null ? void 0 : z.params) == null ? void 0 : he.hFovDeg) ?? 30),
          vFovDeg: Number(((pe = z == null ? void 0 : z.transform) == null ? void 0 : pe.vFovDeg) ?? ((fe = z == null ? void 0 : z.params) == null ? void 0 : fe.vFovDeg) ?? 30),
          crop: ((we = z == null ? void 0 : z.params) == null ? void 0 : we.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((z == null ? void 0 : z.opacity) ?? 1),
          visible: (z == null ? void 0 : z.visible) !== !1,
          zIndex: Number((z == null ? void 0 : z.zIndex) ?? 0)
        };
      }),
      selectedId: ((u = M.objectPass) == null ? void 0 : u.selectedId) ?? null,
      hoveredId: ((f = M.objectPass) == null ? void 0 : f.hoveredId) ?? null
    }, $ = v.filter((z) => z.type === "sticker").map((z) => {
      var I, D;
      return {
        assetId: String(((I = z == null ? void 0 : z.params) == null ? void 0 : I.assetId) || ((D = z == null ? void 0 : z.params) == null ? void 0 : D.asset_id) || (z == null ? void 0 : z.id) || ""),
        source: z.source || null,
        revision: String((z == null ? void 0 : z.revision) || "")
      };
    }).filter((z) => z.assetId && z.source), L = v.find((z) => z.type === "paint") || null, P = v.find((z) => z.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((h = M.background) == null ? void 0 : h.source) || null,
      backgroundRevision: String(((g = M.background) == null ? void 0 : g.revision) || ""),
      coverageDeg: Number(((y = M.background) == null ? void 0 : y.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (L == null ? void 0 : L.source) || null,
      paintRevision: String((L == null ? void 0 : L.revision) || ""),
      maskSource: (P == null ? void 0 : P.source) || null,
      maskRevision: String((P == null ? void 0 : P.revision) || ""),
      textures: $,
      scene: E,
      objectPass: M.objectPass,
      backgroundOpacity: Number(((x = M.background) == null ? void 0 : x.opacity) ?? 1),
      showMaskTint: ((S = e == null ? void 0 : e.overlay) == null ? void 0 : S.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], r = e.layers || {}, a = ya({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...yu(t, n),
        ...Bp({
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
function d1(e) {
  let t = null;
  function n(o = {}) {
    const u = f1(o);
    return e.syncState({
      stateRevision: u.stateRevision,
      backgroundSource: u.backgroundSource,
      backgroundRevision: u.backgroundRevision,
      coverageDeg: u.coverageDeg,
      paintSource: u.paintSource,
      paintRevision: u.paintRevision,
      maskSource: u.maskSource,
      maskRevision: u.maskRevision,
      textures: u.textures,
      scene: u.scene,
      objectPass: u.objectPass,
      backgroundOpacity: u.backgroundOpacity,
      showMaskTint: u.showMaskTint
    }) ? (t = u, !0) : !1;
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
function _o(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : ($) => Qv($), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => e1(), r = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : ($) => d1($), a = t(e), o = (e == null ? void 0 : e.targetCanvas) || null, u = n();
  let f = null;
  const h = r({
    syncState($ = {}) {
      if (typeof a.syncState == "function") {
        const L = { ...$ }, P = a.syncState(L);
        return P && (f = L, P);
      }
      return f = { ...$ }, !0;
    }
  });
  function g($ = {}) {
    return h.sync($);
  }
  function y($ = {}, L = {}) {
    return f ? a.renderScene({
      ...f,
      view: $,
      width: L.width,
      height: L.height,
      dpr: L.dpr,
      backgroundOpacity: L.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: L.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function x($, L, P = {}, z = {}) {
    if (!L) return !1;
    const I = Math.min(1, Math.max(0.1, Number(z.renderScale ?? 1))), D = y(P, {
      ...z,
      width: Math.max(1, Math.round(L.w * I)),
      height: Math.max(1, Math.round(L.h * I))
    });
    return D ? $ ? ($.canvas && D === $.canvas || $.drawImage(D, L.x, L.y, L.w, L.h), !0) : !!o && D === o : !1;
  }
  function S($, L = {}, P = {}) {
    const z = Number(P.width || 0), I = Number(P.height || 0);
    if (!(z > 0) || !(I > 0)) return null;
    const D = u.ensureTarget($, z, I);
    if (!D) return null;
    const G = y(L, {
      ...P,
      width: z,
      height: I
    });
    return G ? (D.ctx.clearRect(0, 0, D.canvas.width, D.canvas.height), D.ctx.drawImage(G, 0, 0, D.canvas.width, D.canvas.height), D.canvas) : null;
  }
  function M($) {
    u.clearTarget($);
  }
  function v() {
    var $;
    u.dispose(), ($ = a.dispose) == null || $.call(a), f = null;
  }
  function E() {
    f = null, h.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: g,
    renderView: y,
    renderToContext: x,
    renderToTarget: S,
    clearTarget: M,
    snapshotState: h.snapshot,
    clearState: E,
    dispose: v
  };
}
function na(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function h1() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ld(e, t = 8) {
  var y;
  const n = (y = e == null ? void 0 : e.getContext) == null ? void 0 : y.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || a < 1) return null;
  const o = n.getImageData(0, 0, r, a).data;
  let u = r, f = a, h = -1, g = -1;
  for (let x = 0; x < a; x += 1)
    for (let S = 0; S < r; S += 1)
      o[(x * r + S) * 4 + 3] <= t || (S < u && (u = S), x < f && (f = x), S > h && (h = S), x > g && (g = x));
  return h < u || g < f ? null : {
    minX: u,
    minY: f,
    maxX: h,
    maxY: g,
    width: h - u + 1,
    height: g - f + 1,
    aspect: Number(((h - u + 1) / Math.max(1, g - f + 1)).toFixed(4))
  };
}
function vu(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const a = document.createElement("canvas");
  return a.width = n, a.height = r, a;
}
function Ir(e, t, n) {
  if (!e) return na(t, n);
  const r = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== a) && (e.canvas.width = r, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function Ct(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let ic = null, ac = null, zd = null, $d = null, Ot = null, $a = null, vn = null, Xr = null;
function p1() {
  if (ac) return ac;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), ac = n, n;
}
function oc(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  ic = Ir(ic, n, r);
  const a = ic;
  Ct(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", $d !== a.ctx && (zd = a.ctx.createPattern(p1(), "repeat"), $d = a.ctx), a.ctx.fillStyle = zd, a.ctx.fillRect(0, 0, n, r), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function m1(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function g1(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function b1(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function y1(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Tt = /* @__PURE__ */ new Map(), _u = 128;
function v1(e, t, n, r, a, o) {
  const u = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), h = `${u}:${f.toFixed(2)}:${n}:${r}:${a}:${o.toFixed(3)}`;
  if (Tt.has(h)) {
    const P = Tt.get(h);
    return Tt.delete(h), Tt.set(h, P), P;
  }
  Tt.size >= _u && Tt.delete(Tt.keys().next().value);
  const g = u * 2 + 2, y = u + 1, x = vu(g, g), S = x.getContext("2d"), M = f * u, v = u + 1, E = `rgba(${n},${r},${a},${o})`, $ = `rgba(${n},${r},${a},0)`, L = S.createRadialGradient(y, y, M, y, y, v);
  return L.addColorStop(0, E), L.addColorStop(1, $), S.fillStyle = L, S.fillRect(0, 0, g, g), Tt.set(h, x), x;
}
function _1(e, t, n, r, a, o, u) {
  const { r: f, g: h, b: g, a: y } = r, x = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), M = Math.max(0, a), v = Math.max(0, Math.min(0.99, o)), E = Math.max(0, Math.min(1, u ?? 0)), $ = `chisel:${x}:${S}:${n.toFixed(2)}:${f}:${h}:${g}:${y.toFixed(3)}:${M.toFixed(2)}:${v.toFixed(2)}:${E.toFixed(2)}`;
  if (Tt.has($)) {
    const le = Tt.get($);
    return Tt.delete($), Tt.set($, le), le;
  }
  Tt.size >= _u && Tt.delete(Tt.keys().next().value);
  const L = vu(x, S), P = L.getContext("2d"), z = P.createImageData(x, S), I = z.data, D = Math.max(0, e - t), G = Math.max(0, Math.min(1, n)), B = 1 + M;
  for (let le = 0; le < S; le++)
    for (let ie = 0; ie < x; ie++) {
      const T = ie + 0.5 - e, K = le + 0.5 - t, J = Math.max(Math.abs(T) - D, 0), pe = Math.hypot(J, K) / t;
      if (pe >= 1) continue;
      const fe = pe <= G ? 1 : Math.max(0, (1 - pe) / Math.max(1e-4, 1 - G)), we = 1 - pe, A = 1 + M * (1 - we) * (1 - we), ve = 1 - v * we * we, Ae = A * ve / B;
      let Pe = 1;
      if (E > 0) {
        const Qe = Math.floor((K + t) / 1.5), yt = Math.floor((T + e) / 8), nt = Si(ua(Qe * 41 + 500, yt * 19 + 300));
        Pe = 1 - E * 0.42 * nt;
      }
      const H = Math.round(255 * Math.min(1, y * fe * Ae * Pe));
      if (H <= 0) continue;
      const Le = (le * x + ie) * 4;
      I[Le] = f, I[Le + 1] = h, I[Le + 2] = g, I[Le + 3] = H;
    }
  return P.putImageData(z, 0, 0), Tt.set($, L), L;
}
function ua(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ r & 255, 16777619), a = Math.imul(a ^ r >> 8 & 255, 16777619), a >>> 0;
}
function Si(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function x1(e, t, n, r, a, o, u) {
  const f = e + 0.5 - n, h = t + 0.5 - r, g = Math.max(0, n - r), y = Math.max(Math.abs(f) - g, 0), x = Math.hypot(y, h) / r;
  if (x >= 1) return 0;
  const S = Si(ua(e * 17 + 3, t * 13 + 7)), M = x + o * 0.22 * (S - 0.5);
  if (M >= 1) return 0;
  const v = M <= a ? 1 : Math.max(0, (1 - M) / Math.max(1e-4, 1 - a)), E = S1(e, t, f, h, n, r), $ = o * 0.55;
  if (E < $) return 0;
  const P = 0.45 + 0.55 * ((E - $) / Math.max(1e-4, 1 - $));
  return Math.round(255 * Math.min(1, u * v * P));
}
function S1(e, t, n, r, a, o) {
  const u = Math.floor((n + a) / 3), f = Math.floor((r + o) / 2), h = Si(ua(u * 13 + 700, f * 17 + 400)), g = Math.floor((n + a) / 1.5), y = Math.floor((r + o) / 1.5), x = Si(ua(g * 23 + 800, y * 29 + 500)), S = Si(ua(e * 3 + 100, t * 5 + 200));
  return h * 0.55 + x * 0.3 + S * 0.15;
}
function w1(e, t, n, r, a) {
  const { r: o, g: u, b: f, a: h } = r, g = Math.max(2, Math.ceil(e) * 2), y = Math.max(2, Math.ceil(t) * 2), x = Math.max(0, Math.min(1, a)), S = `crayon:${g}:${y}:${n.toFixed(2)}:${o}:${u}:${f}:${h.toFixed(3)}:${x.toFixed(2)}`;
  if (Tt.has(S)) {
    const P = Tt.get(S);
    return Tt.delete(S), Tt.set(S, P), P;
  }
  Tt.size >= _u && Tt.delete(Tt.keys().next().value);
  const M = vu(g, y), v = M.getContext("2d"), E = v.createImageData(g, y), $ = E.data, L = Math.max(0, Math.min(1, n));
  for (let P = 0; P < y; P++)
    for (let z = 0; z < g; z++) {
      const I = x1(z, P, e, t, L, x, h);
      if (I <= 0) continue;
      const D = (P * g + z) * 4;
      $[D] = o, $[D + 1] = u, $[D + 2] = f, $[D + 3] = I;
    }
  return v.putImageData(E, 0, 0), Tt.set(S, M), M;
}
function Kp(e, t, n) {
  var E, $;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), a = b1(t, n), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), u = k1(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), h = Number(((E = t == null ? void 0 : t.angle) == null ? void 0 : E.value) ?? 0), g = y1(t, a), y = String((($ = t == null ? void 0 : t.targetSpace) == null ? void 0 : $.viewMode) || ""), x = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && y !== "unwrap", S = t == null ? void 0 : t.scatter, M = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let v;
  if (r === "chisel") {
    const L = a * f, P = a, z = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), I = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), D = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    v = _1(L, P, o, u, z, I, D);
  } else if (r === "crayon") {
    const L = a * f, P = a, z = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    v = w1(L, P, o, u, z);
  } else
    v = v1(a, o, u.r, u.g, u.b, u.a);
  return { ctx: e, stampTex: v, radiusPx: a, spacingPx: g, desc: n, aspect: f, angle: h, stampKind: r, scatter: M, latitudeCorrection: x };
}
function k1(e) {
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
function N1(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${a})`;
}
function jd(e, t, n, r, a) {
  const o = e.angle, u = e.desc.width;
  function f(g, y) {
    o === 0 ? e.ctx.drawImage(e.stampTex, g - a, y - r, a * 2, r * 2) : (e.ctx.save(), e.ctx.translate(g, y), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -a, -r, a * 2, r * 2), e.ctx.restore());
  }
  f(t, n);
  const h = o === 0 ? a : a * Math.abs(Math.cos(o)) + r * Math.abs(Math.sin(o));
  t - h < 0 && f(t + u, n), t + h > u && f(t - u, n);
}
function xu(e, t, n, r) {
  const a = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: g, count: y } = e.scatter, x = g * e.radiusPx * a, S = ua(t, n);
    for (let M = 0; M < y; M++) {
      const v = Si(S + M * 2) * Math.PI * 2, E = Math.sqrt(Si(S + M * 2 + 1)) * x, $ = t + Math.cos(v) * E, L = n + Math.sin(v) * E, P = Math.max(0.5, e.radiusPx * a * 0.48), z = (0.5 - L / Math.max(1, e.desc.height)) * Math.PI, I = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(z)) : 1, D = P * e.aspect * I;
      jd(e, $, L, P, D);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * a), u = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, h = o * e.aspect * f;
  jd(e, t, n, o, h);
}
function Vd(e, t, n) {
  const r = g1(t);
  if (!e || r.length === 0) return;
  const a = n.width, o = n.height, u = Kp(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let S = 0; S < r.length; S++) {
    let M = Number(r[S].u || 0) * a;
    const v = Number(r[S].v || 0) * o;
    S > 0 && Math.abs(M - f[S - 1].x) > a * 0.5 && (M += M < f[S - 1].x ? a : -a), f.push({ x: M, y: v });
  }
  if (xu(u, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let h = f[0], g = f[0], y = f[0], x = 0;
  for (let S = 1; S < f.length; S++) {
    const M = f[S], v = { x: (g.x + M.x) * 0.5, y: (g.y + M.y) * 0.5 };
    S === 1 ? x = co(u, y.x, y.y, v.x, v.y, x) : x = Ls(u, h, y, v, M, x), h = g, g = M, y = v;
  }
  f.length === 2 ? co(u, y.x, y.y, g.x, g.y, x) : Ls(u, h, y, g, g, x), e.restore();
}
function ys(e, t, n) {
  var x;
  const r = Array.isArray((x = t == null ? void 0 : t.geometry) == null ? void 0 : x.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const a = n.width, o = n.height, u = N1(t), f = [];
  let h = 1 / 0, g = -1 / 0;
  for (let S = 0; S < r.length; S++) {
    const M = m1(r[S]);
    let v = Number(M.x || 0) * a;
    S > 0 && Math.abs(v - f[S - 1].x) > a * 0.5 && (v += v < f[S - 1].x ? a : -a), f.push({ x: v, y: Number(M.y || 0) * o }), v < h && (h = v), v > g && (g = v);
  }
  function y(S) {
    e.beginPath(), e.moveTo(f[0].x + S, f[0].y);
    for (let M = 1; M < f.length; M++) e.lineTo(f[M].x + S, f[M].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = u, y(0), h < 0 && y(a), g > a && y(-a), e.restore();
}
function Wo(e, t, n) {
  var u;
  if (String(((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    ys(e, t, n);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? Vd(e, t, n) : ($a = Ir($a, n.width, n.height), Ct($a), Vd($a.ctx, t, n), e.save(), e.globalAlpha = o, e.drawImage($a.canvas, 0, 0), e.restore());
}
function hi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function co(e, t, n, r, a, o) {
  const u = r - t, f = a - n, h = Math.hypot(u, f);
  if (h < 1e-9) return o;
  let g = e.spacingPx - o;
  for (; g <= h; ) {
    const y = g / h;
    xu(e, t + u * y, n + f * y, 1), g += e.spacingPx;
  }
  return h - g + e.spacingPx;
}
function Ls(e, t, n, r, a, o) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, h = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, g = Math.sqrt(Math.hypot(a.x - r.x, a.y - r.y)) + 1e-4, y = 0, x = f, S = x + h, M = S + g, v = S - x, E = 16;
  let $ = o, L = n.x, P = n.y;
  for (let z = 1; z <= E; z++) {
    const I = x + v * z / E, D = ((x - I) * t.x + (I - y) * n.x) / (x - y), G = ((x - I) * t.y + (I - y) * n.y) / (x - y), B = ((S - I) * n.x + (I - x) * r.x) / (S - x), le = ((S - I) * n.y + (I - x) * r.y) / (S - x), ie = ((M - I) * r.x + (I - S) * a.x) / (M - S), T = ((M - I) * r.y + (I - S) * a.y) / (M - S), K = ((S - I) * D + (I - y) * B) / (S - y), J = ((S - I) * G + (I - y) * le) / (S - y), he = ((M - I) * B + (I - x) * ie) / (M - x), pe = ((M - I) * le + (I - x) * T) / (M - x), fe = ((S - I) * K + (I - x) * he) / (S - x), we = ((S - I) * J + (I - x) * pe) / (S - x);
    $ = co(e, L, P, fe, we, $), L = fe, P = we;
  }
  return $;
}
function M1(e, t, n, r) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const o = e.descriptor, u = o.width, f = n * o.height, h = e.activeStroke;
  let g = t * u;
  if (h && Math.abs(g - h.prev.x) > u * 0.5 && (g += g < h.prev.x ? u : -u), !h) {
    const M = Kp(a, r, o), v = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), E = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), $ = String((r == null ? void 0 : r.toolKind) || "") === "eraser", L = String((r == null ? void 0 : r.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", xu(M, g, f, 1), e.activeStroke = {
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
      strokeOpacity: v,
      velocityWidthFactor: E,
      distSinceStamp: 0,
      isEraser: $,
      layerKind: L,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const y = (h.prev.x + g) * 0.5, x = (h.prev.y + f) * 0.5;
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
  h.pointCount === 1 ? h.distSinceStamp = co(S, h.lastMidX, h.lastMidY, y, x, h.distSinceStamp) : h.distSinceStamp = Ls(
    S,
    h.pprev,
    { x: h.lastMidX, y: h.lastMidY },
    { x: y, y: x },
    { x: g, y: f },
    h.distSinceStamp
  ), h.pprev = h.prev, h.prev = { x: g, y: f }, h.lastMidX = y, h.lastMidY = x, h.pointCount++, e.displayDirty = !0;
}
function Ic(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), o = na(t, n), u = {
    descriptor: r,
    committedMask: na(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: na(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, h = na(t, n);
  let g = null, y = "", x = null;
  function S(T) {
    return {
      actionGroupId: T,
      descriptor: r,
      committedPaint: na(t, n),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function M(T) {
    let K = a.get(T);
    return K || (K = S(T), a.set(T, K)), K;
  }
  function v(T) {
    return y === "mask" ? u : g ? M(g) : f;
  }
  function E(T) {
    var we;
    const K = !x || x.length !== T.length || T.some((A, ve) => A !== x[ve]), J = y === "paint" && ((we = g ? a.get(g) : f) == null ? void 0 : we.activeStroke) || null;
    let he = u.displayDirty || f.displayDirty || K;
    for (const A of T) {
      const ve = a.get(A);
      if (ve != null && ve.displayDirty) {
        he = !0;
        break;
      }
    }
    if (J && (he = !0), !he) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const A of T) {
      const ve = a.get(A);
      ve && (ve.displayDirty = !1);
    }
    x = [...T];
    const pe = h.ctx;
    Ct(h);
    const fe = !!(J != null && J.isEraser);
    for (const A of T) {
      const ve = a.get(A);
      if (!ve) continue;
      const Pe = g === ve.actionGroupId && y === "paint" ? ve.activeStroke : null;
      if (fe)
        Ot = Ir(Ot, t, n), Ct(Ot), Ot.ctx.drawImage(ve.committedPaint.canvas, 0, 0), hi(Ot.ctx, o.canvas), pe.drawImage(Ot.canvas, 0, 0);
      else if (pe.drawImage(ve.committedPaint.canvas, 0, 0), Pe) {
        const H = ve.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Pe.strokeOpacity ?? 1));
        pe.save(), pe.globalAlpha = H, pe.drawImage(o.canvas, 0, 0), pe.restore();
      }
    }
  }
  function $(T) {
    var J, he, pe, fe, we;
    for (const A of a.values())
      Ct(A.committedPaint), Ct(A.currentStroke), A.activeStroke = null, A.displayDirty = !0;
    Ct(u.committedMask), Ct(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, x = null;
    const K = [
      ...Array.isArray((he = (J = T == null ? void 0 : T.painting) == null ? void 0 : J.paint) == null ? void 0 : he.strokes) ? T.painting.paint.strokes : [],
      ...Array.isArray((fe = (pe = T == null ? void 0 : T.painting) == null ? void 0 : pe.mask) == null ? void 0 : fe.strokes) ? T.painting.mask.strokes : []
    ];
    for (const A of K) {
      if (((we = A == null ? void 0 : A.targetSpace) == null ? void 0 : we.kind) !== "ERP_GLOBAL") continue;
      const ve = String((A == null ? void 0 : A.layerKind) || "paint"), Pe = String((A == null ? void 0 : A.toolKind) || "pen") === "eraser";
      if (ve === "mask") {
        const H = u.descriptor;
        Pe ? (Ot = Ir(Ot, H.width, H.height), Ct(Ot), Wo(Ot.ctx, A, H), hi(u.committedMask.ctx, Ot.canvas)) : Wo(u.committedMask.ctx, A, H);
        continue;
      }
      if (Pe) {
        Ot = Ir(Ot, r.width, r.height), Ct(Ot), Wo(Ot.ctx, A, r);
        for (const H of a.values())
          hi(H.committedPaint.ctx, Ot.canvas), H.displayDirty = !0;
      } else {
        const H = String((A == null ? void 0 : A.actionGroupId) || "__default__"), Le = M(H), Qe = Le.descriptor;
        Wo(Le.committedPaint.ctx, A, Qe), Le.displayDirty = !0;
      }
    }
    E([...a.keys()]);
  }
  function L(T, K) {
    y = String((T == null ? void 0 : T.layerKind) || "");
    const J = String((T == null ? void 0 : T.toolKind) || "") === "eraser";
    if (y === "mask")
      g = null, Ct(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const he = J ? f : M(String((T == null ? void 0 : T.actionGroupId) || "__default__"));
      g = J ? "" : String((T == null ? void 0 : T.actionGroupId) || "__default__"), Ct(he.currentStroke), he.activeStroke = null, he.displayDirty = !0;
    }
  }
  function P(T, K) {
    var ve;
    const J = String((T == null ? void 0 : T.layerKind) || "paint"), he = String((T == null ? void 0 : T.toolKind) || "") === "eraser", pe = J === "mask" ? u : he ? f : M(String((T == null ? void 0 : T.actionGroupId) || g || "__default__")), fe = pe.activeStroke, we = pe.descriptor;
    if (fe && fe.pointCount > 1) {
      const Ae = pe.currentStroke.ctx;
      Ae.globalCompositeOperation = "source-over";
      const Pe = {
        ctx: Ae,
        stampTex: fe.stampTex,
        radiusPx: fe.radiusPx,
        spacingPx: fe.spacingPx,
        desc: we,
        aspect: fe.aspect,
        angle: fe.angle,
        stampKind: fe.stampKind,
        scatter: fe.scatter,
        latitudeCorrection: fe.latitudeCorrection
      };
      fe.pointCount === 2 ? co(Pe, fe.lastMidX, fe.lastMidY, fe.prev.x, fe.prev.y, fe.distSinceStamp) : Ls(Pe, fe.pprev, { x: fe.lastMidX, y: fe.lastMidY }, fe.prev, fe.prev, fe.distSinceStamp);
    }
    pe.lassoPreviewActive && (Ct(pe.currentStroke), ys(pe.currentStroke.ctx, T, we), pe.lassoPreviewActive = !1);
    const A = J === "mask" ? u.committedMask : pe.committedPaint;
    if (he && J === "paint")
      for (const Ae of a.values())
        hi(Ae.committedPaint.ctx, pe.currentStroke.canvas), Ae.displayDirty = !0;
    else if (he)
      hi(A.ctx, pe.currentStroke.canvas);
    else {
      const Ae = Math.max(0, Math.min(1, (fe == null ? void 0 : fe.strokeOpacity) ?? 1));
      A.ctx.save(), A.ctx.globalAlpha = Ae, A.ctx.drawImage(pe.currentStroke.canvas, 0, 0), A.ctx.restore();
    }
    h1() && (String((T == null ? void 0 : T.toolKind) || ""), String((we == null ? void 0 : we.kind) || ""), Number((we == null ? void 0 : we.width) || 0), Number((we == null ? void 0 : we.height) || 0), String(((ve = T == null ? void 0 : T.targetSpace) == null ? void 0 : ve.viewMode) || ""), Number((T == null ? void 0 : T.aspect) ?? 1), Ld(pe.currentStroke.canvas), Ld(A.canvas), void 0), Ct(pe.currentStroke), pe.activeStroke = null, pe.displayDirty = !0, g = null, y = "", E([...a.keys()]);
  }
  function z(T) {
    if (y === "mask")
      Ct(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (y === "paint" && !g)
      Ct(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (g) {
      const K = a.get(g);
      K && (Ct(K.currentStroke), K.activeStroke = null, K.lassoPreviewActive = !1, K.displayDirty = !0);
    }
    g = null, y = "", E([...a.keys()]);
  }
  function I(T, K) {
    var he;
    if (y = String((T == null ? void 0 : T.layerKind) || ""), String(((he = T == null ? void 0 : T.geometry) == null ? void 0 : he.geometryKind) || "") === "lasso_fill") {
      if (y === "mask")
        Ct(u.currentStroke), ys(u.currentStroke.ctx, T, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const pe = String((T == null ? void 0 : T.toolKind) || "") === "eraser", fe = pe ? f : M(String((T == null ? void 0 : T.actionGroupId) || g || "__default__"));
        g = pe ? "" : String((T == null ? void 0 : T.actionGroupId) || g || "__default__"), Ct(fe.currentStroke), ys(fe.currentStroke.ctx, T, fe.descriptor), fe.lassoPreviewActive = !0, fe.displayDirty = !0;
      }
      E([...a.keys()]);
    }
  }
  function D(T) {
    return E(T ?? [...a.keys()]), {
      displayPaint: h,
      committedMask: u.committedMask,
      descriptor: r
    };
  }
  function G(T) {
    return a.get(String(T)) ?? null;
  }
  function B() {
    return [...a.keys()];
  }
  function le(T) {
    var we;
    const K = a.get(String(T));
    if (!K) return null;
    const J = y === "paint" && g === K.actionGroupId, he = y === "paint" && ((we = g ? a.get(g) : f) == null ? void 0 : we.activeStroke) || null;
    if (he != null && he.isEraser)
      return vn = Ir(vn, t, n), Ct(vn), vn.ctx.drawImage(K.committedPaint.canvas, 0, 0), hi(vn.ctx, o.canvas), vn.canvas;
    const pe = J ? K.activeStroke : null;
    if (!pe) return K.committedPaint.canvas;
    vn = Ir(vn, t, n), Ct(vn), vn.ctx.drawImage(K.committedPaint.canvas, 0, 0);
    const fe = K.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, pe.strokeOpacity ?? 1));
    return vn.ctx.save(), vn.ctx.globalAlpha = fe, vn.ctx.drawImage(o.canvas, 0, 0), vn.ctx.restore(), vn.canvas;
  }
  function ie() {
    return Xr = Ir(Xr, t, n), Ct(Xr), oc(Xr.ctx, u.committedMask.canvas), y === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (Ot = Ir(Ot, t, n), Ct(Ot), Ot.ctx.drawImage(u.committedMask.canvas, 0, 0), hi(Ot.ctx, o.canvas), Ct(Xr), oc(Xr.ctx, Ot.canvas)) : oc(Xr.ctx, o.canvas)), Xr.canvas;
  }
  return {
    rebuildCommitted: $,
    beginStroke: L,
    appendStrokePoint: M1,
    updateActiveStroke: I,
    commitActiveStroke: P,
    cancelActiveStroke: z,
    getErpTarget: D,
    ensureTarget: v,
    getGroupTarget: G,
    getGroupDisplayCanvas: le,
    getMaskDisplayCanvas: ie,
    getAllGroupIds: B
  };
}
function Y(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function sc(e, t, n) {
  const r = Number(e);
  return Number.isFinite(r) ? Math.max(Number(t), Math.min(Number(n), r)) : Number(t);
}
function Bt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function P1(e, t) {
  let n = Bt(t) - Bt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Ec = 3;
function ja(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Su(e, t = 0) {
  const n = ja(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = ja(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const a = ja(e == null ? void 0 : e.wheelDelta);
  if (a != null) return Math.sign(-a);
  const o = ja(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(ja(t) || 0);
}
function Wp(e) {
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
const Hd = Math.PI / 180, Ud = 0.12, A1 = Ec, C1 = 35, T1 = 140, qa = 100, I1 = 20, Bd = 0.8;
function E1(e, t, n) {
  const r = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), o = Y(Number(e || qa), 1, 179) * Hd;
  return 2 * Math.atan(Math.tan(o * 0.5) * (a / r)) / Hd;
}
function wu(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: qa })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, h = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function g(P, z = null) {
    f && f(P, z);
  }
  function y(P, z, I = null, D = performance.now()) {
    return h.drag.active = !0, h.drag.lastX = Number(P || 0), h.drag.lastY = Number(z || 0), h.drag.lastTs = Number(D || performance.now()), h.drag.pointerId = I, h.inertia.active = !1, h.inertia.vx = 0, h.inertia.vy = 0, h.inertia.lastTs = h.drag.lastTs, h.velHistory = [], g("drag", { phase: "start", x: h.drag.lastX, y: h.drag.lastY, pointerId: I }), !0;
  }
  function x(P, z, I = "pano", D = performance.now()) {
    if (!h.drag.active) return !1;
    const G = Number(D || performance.now()), B = Number(P), le = Number(z), ie = B - h.drag.lastX, T = le - h.drag.lastY;
    h.drag.lastX = B, h.drag.lastY = le, h.drag.lastTs = G;
    const K = r() || { x: 1, y: 1 }, J = Number(K.x || 1), he = Number(K.y || 1), pe = { ...t() };
    let fe = 0, we = 0;
    if (I === "unwrap") {
      const ve = a() || { w: 1, h: 1 }, Ae = Math.max(1, Number(ve.w || 1)), Pe = Math.max(1, Number(ve.h || 1)), H = ie / Ae, Le = T / Pe;
      fe = -H * 360 * J, we = Le * 180 * he;
    } else {
      const ve = o() || { w: 0, h: 0 }, Ae = Math.max(1, Number(ve.w || 0)), Pe = Math.max(1, Number(ve.h || 0));
      if (Ae > 1 && Pe > 1) {
        const H = Y(Number(pe.fov || qa), 1, 179), Le = Y(E1(H, Ae, Pe), 0.1, 179);
        fe = -(ie / Ae) * H * J, we = T / Pe * Le * he;
      } else
        fe = -ie * Ud * J, we = T * Ud * he;
    }
    pe.yaw = Bt(Number(pe.yaw || 0) + fe), pe.pitch = Y(Number(pe.pitch || 0) + we, -89.9, 89.9), n(pe), h.velHistory.push({ ts: G, yaw: pe.yaw, pitch: pe.pitch });
    let A = 0;
    for (; A < h.velHistory.length - 1 && h.velHistory[A].ts < G - 100; ) A++;
    return A > 0 && h.velHistory.splice(0, A), h.inertia.active = !1, h.inertia.lastTs = G, u(), g("drag", { phase: "move", dx: ie, dy: T, dYaw: fe, dPitch: we }), !0;
  }
  function S(P = performance.now()) {
    if (!h.drag.active) return !1;
    h.drag.active = !1;
    const z = Number(P || performance.now());
    h.drag.lastTs = z;
    const I = h.velHistory.filter((G) => z - G.ts <= 80);
    if (I.length >= 2) {
      const G = I[0], B = I.at(-1), le = Math.max(1e-3, (B.ts - G.ts) / 1e3);
      let ie = B.yaw - G.yaw;
      ie > 180 && (ie -= 360), ie < -180 && (ie += 360), h.inertia.vx = ie / le, h.inertia.vy = (B.pitch - G.pitch) / le;
    } else
      h.inertia.vx = 0, h.inertia.vy = 0;
    h.velHistory = [];
    const D = Math.hypot(h.inertia.vx, h.inertia.vy);
    return h.inertia.active = D > I1, h.inertia.lastTs = z, g("drag", { phase: "end", speed: D, inertiaActive: h.inertia.active }), !0;
  }
  function M(P = performance.now()) {
    if (!h.inertia.active) return !1;
    const z = Number(P || performance.now()), I = Math.max(1e-3, (z - (h.inertia.lastTs || z)) / 1e3);
    h.inertia.lastTs = z;
    const D = { ...t() };
    D.yaw = Bt(Number(D.yaw || 0) + h.inertia.vx * I), D.pitch = Y(Number(D.pitch || 0) + h.inertia.vy * I, -89.9, 89.9);
    const G = Math.exp(-5.5 * I);
    return h.inertia.vx *= G, h.inertia.vy *= G, Math.abs(h.inertia.vx) < Bd && Math.abs(h.inertia.vy) < Bd && (h.inertia.vx = 0, h.inertia.vy = 0, h.inertia.active = !1), n(D), u(), h.inertia.active;
  }
  function v() {
    const P = h.drag.active || h.inertia.active || h.inertia.vx !== 0 || h.inertia.vy !== 0;
    return h.drag.active = !1, h.drag.pointerId = null, h.inertia.active = !1, h.inertia.vx = 0, h.inertia.vy = 0, h.velHistory = [], P;
  }
  function E(P) {
    const z = Math.sign(Number(P || 0));
    if (!z) return !1;
    const I = { ...t() }, D = Number(I.fov || qa);
    return I.fov = Y(D + z * A1, C1, T1), n(I), u(), g("wheel", { deltaSign: z, fovBefore: D, fovAfter: I.fov }), !0;
  }
  function $(P, z = 0) {
    return E(Su(P, z));
  }
  function L() {
    n({ yaw: 0, pitch: 0, fov: qa }), h.inertia.active = !1, h.inertia.vx = 0, h.inertia.vy = 0, u();
  }
  return {
    state: h,
    startDrag: y,
    moveDrag: x,
    endDrag: S,
    stepInertia: M,
    stopMotion: v,
    applyWheel: E,
    applyWheelEvent: $,
    resetView: L
  };
}
function zs(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const Gd = Math.PI / 180;
function Va(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function D1(e) {
  const t = e || {}, n = Va(t.yaw_deg, 0), r = Va(t.pitch_deg, 0), a = Va(t.roll_deg ?? t.rot_deg, 0), o = sc(Va(t.hFOV_deg, 90), 1, 179), u = sc(Va(t.vFOV_deg, 60), 1, 179), f = Math.tan(o * Gd * 0.5) / Math.max(1e-6, Math.tan(u * Gd * 0.5)), h = sc(f, 0.1, 10);
  return {
    yaw: n,
    pitch: r,
    roll: a,
    hfov: o,
    vfov: u,
    aspect: h
  };
}
const Yp = 0.28;
function O1(e) {
  const t = e && typeof e == "object" ? e : {}, n = Y(Number(t.x0 ?? 0), 0, 1), r = Y(Number(t.y0 ?? 0), 0, 1), a = Y(Number(t.x1 ?? 1), 0, 1), o = Y(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(r, o),
    x1: Math.max(n, a),
    y1: Math.max(r, o)
  };
}
function F1(e, t = {}) {
  if (!e || typeof e != "object") return null;
  const n = String(e.asset_id || e.assetId || "").trim(), r = e.type === "external_image" || e.source_kind === "external_image", a = n || (r ? String(e.id || "").trim() : ""), o = t.includeHidden === !0, u = e.visible === !1, f = o && r && u;
  return {
    id: String(e.id || ""),
    assetId: a,
    zIndex: Number(e.z_index || e.zIndex || 0),
    yawDeg: Number(e.yaw_deg || e.yawDeg || 0),
    pitchDeg: Number(e.pitch_deg || e.pitchDeg || 0),
    rollDeg: Number(e.rot_deg ?? e.roll_deg ?? e.rollDeg ?? 0),
    hFovDeg: Y(Number(e.hFOV_deg || e.hFovDeg || 30), 1, 179),
    vFovDeg: Y(Number(e.vFOV_deg || e.vFovDeg || 30), 1, 179),
    crop: O1(e.crop),
    opacity: f ? Yp : Y(Number(e.opacity ?? 1), 0, 1),
    visible: f ? !0 : e.visible !== !1,
    external: r
  };
}
function al(e, t = {}) {
  var o;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], r = t.includeHidden === !0;
  return {
    stickers: n.map((u) => F1(u, { includeHidden: r })).filter((u) => u && (r || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: t.selectedId ?? ((o = e == null ? void 0 : e.active) == null ? void 0 : o.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function qp(e, t, n = {}) {
  if (typeof t != "function") return [];
  const r = n.scene || al(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, o = [], u = /* @__PURE__ */ new Set();
  return r.stickers.forEach((f) => {
    var v;
    const h = String((f == null ? void 0 : f.assetId) || "").trim(), g = h || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!g || u.has(g)) return;
    const y = h ? a[h] : null, x = t(g, y, f);
    if (x instanceof HTMLImageElement && !x.complete) return;
    const S = Number((x == null ? void 0 : x.naturalWidth) || (x == null ? void 0 : x.videoWidth) || (x == null ? void 0 : x.width) || 0), M = Number((x == null ? void 0 : x.naturalHeight) || (x == null ? void 0 : x.videoHeight) || (x == null ? void 0 : x.height) || 0);
    !x || S <= 0 || M <= 0 || (u.add(g), o.push({
      assetId: g,
      source: x,
      revision: String(((v = n.revisionFor) == null ? void 0 : v.call(n, g, y, x)) ?? [
        g,
        Number(x.naturalWidth || x.videoWidth || x.width || 0),
        Number(x.naturalHeight || x.videoHeight || x.height || 0),
        String(x.currentSrc || x.src || "")
      ].join("|"))
    }));
  }), o;
}
function uo(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: Y(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function R1(e, t = 360) {
  return uo(e, t);
}
function yr(e) {
  const t = D1(e || {});
  return {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yaw_deg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch_deg) || 0),
    rollDeg: Number((t == null ? void 0 : t.roll) ?? (e == null ? void 0 : e.roll_deg) ?? (e == null ? void 0 : e.rot_deg) ?? 0),
    hFovDeg: Y(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179),
    vFovDeg: Y(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179),
    aspect: Number((t == null ? void 0 : t.aspect) || 1)
  };
}
const mn = Math.PI / 180, Vr = 180 / Math.PI;
function Hr(e, t, n) {
  return { x: e, y: t, z: n };
}
function va(e, t) {
  return Hr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ti(e, t) {
  return Hr(e.x * t, e.y * t, e.z * t);
}
function vs(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function $s(e, t) {
  return Hr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function ni(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Hr(e.x / t, e.y / t, e.z / t);
}
function Xp(e, t) {
  const n = e * mn, r = t * mn, a = Math.cos(r);
  return Hr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Jp(e, t, n = 0) {
  const r = Xp(e, t), a = Hr(0, 1, 0);
  let o = $s(a, r);
  Math.hypot(o.x, o.y, o.z) < 1e-6 && (o = Hr(1, 0, 0)), o = ni(o);
  const u = ni($s(r, o)), f = n * mn, h = Math.cos(f), g = Math.sin(f), y = va(ti(o, h), ti(u, g)), x = va(ti(o, -g), ti(u, h));
  return { fwd: r, right: ni(y), up: ni(x) };
}
const Ur = 1, Br = 179, Dc = 85;
function Zp(e) {
  const t = ((at(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Qp(e, t) {
  let n = at(e, 0) - at(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function em(e, t, { shiftKey: n = !1 } = {}) {
  let r = at(e, 0) + at(t, 0) * Vr;
  return n && (r = Math.round(r / 15) * 15), Zp(r);
}
function at(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function xo(e = {}) {
  const t = Y(at(e.hFOV_deg, 90), Ur, Br), n = Y(at(e.vFOV_deg, 60), Ur, Br), r = Math.tan(t * mn * 0.5), a = Math.tan(n * mn * 0.5);
  return {
    yawDeg: at(e.yaw_deg, 0),
    pitchDeg: at(e.pitch_deg, 0),
    rollDeg: at(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: a,
    aspect: r / Math.max(1e-12, a)
  };
}
function fa(e, t) {
  const n = Math.max(1, at((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, at((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = xo(t);
  return Math.max(1, Math.min(
    n / (2 * a.tanHalfX),
    r / (2 * a.tanHalfY)
  ));
}
function ku(e, t) {
  const n = Math.max(1, at((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, at((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Math.max(1e-6, at(t, 1)), o = Math.min(n, r * a);
  return { width: o, height: o / a };
}
function tm(e, t) {
  const n = Math.max(1e-12, at(t, 1)), r = Math.max(1e-6, at((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1e-6, at((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Y(2 * Math.atan(r / (2 * n)) * Vr, Ur, Br), u = Y(2 * Math.atan(a / (2 * n)) * Vr, Ur, Br);
  return { hFOV_deg: o, vFOV_deg: u };
}
function L1(e, t, n) {
  const r = at(e == null ? void 0 : e.x, 0), a = at(e == null ? void 0 : e.y, 0), o = Math.max(1, at((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), u = Math.max(1, at((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), f = xo(t), h = Math.max(1e-12, at(n, 1)), g = 2 * h * f.tanHalfX, y = 2 * h * f.tanHalfY;
  return {
    x: r + (o - g) * 0.5,
    y: a + (u - y) * 0.5,
    w: g,
    h: y,
    focalPx: h
  };
}
function Oc(e, t, n = Dc) {
  const r = Math.max(1e-12, at(t, 1)), a = Y(at(n, Dc), 1, 89.999), o = r * Math.tan(a * mn), u = Math.max(1, at((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), f = Math.max(1, at((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(u * 0.5, o),
    halfH: Math.min(f * 0.5, o)
  };
}
function _s(e, t) {
  const n = Y(at(e, 60), Ur, Br), r = Math.max(1e-6, at(t, 1));
  return Y(
    2 * Math.atan(Math.tan(n * mn * 0.5) * r) * Vr,
    Ur,
    Br
  );
}
function Kd(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function z1(e, t) {
  const n = Kd(e, 1), r = Kd(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const a = 1e3, o = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(r * a)), f = (g, y) => y ? f(y, g % y) : g, h = f(o, u) || 1;
  return `${Math.max(1, Math.round(o / h))}:${Math.max(1, Math.round(u / h))}`;
}
function da(e) {
  const t = Y(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * mn, n = Y(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * mn;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function bi(e) {
  const t = da(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, a]) => Math.abs(t - a) <= 0.015);
  return (r == null ? void 0 : r[0]) || z1(t, 1);
}
function nm(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = bi(t), t;
}
function rm({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  viewFovDeg: r = 100
} = {}) {
  const a = Y(Math.min(42, at(r, 100) * 0.42), 8, 96);
  return nm({
    id: String(e),
    label: "Frame 1",
    yaw_deg: at(t, 0),
    pitch_deg: Y(at(n, 0), -89.9, 89.9),
    roll_deg: 0,
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function Er(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : bi(e);
}
function im(e, t) {
  const n = xo(e), r = at(t, 1);
  if (!(r > 0)) return null;
  const a = 2 * Math.atan(n.tanHalfX * r) * Vr, o = 2 * Math.atan(n.tanHalfY * r) * Vr;
  return a < Ur || a > Br || o < Ur || o > Br ? null : { hFOV_deg: a, vFOV_deg: o };
}
function am(e, t, n = Ec) {
  const r = Math.sign(at(t, 0)), a = Math.abs(at(n, Ec));
  if (!r || !(a > 0)) return null;
  const o = xo(e), u = o.hFovDeg + r * a;
  if (u < Ur || u > Br) return null;
  const f = Math.tan(u * mn * 0.5);
  return im(e, f / o.tanHalfX);
}
function om({
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
  let u = null, f = !1, h = !1;
  const g = () => u || e(), y = () => o(n(g()));
  return {
    model: () => n(g()),
    refresh() {
      return h ? this.model() : (y(), this.model());
    },
    beginGesture() {
      return h || u ? !1 : (u = e(), f = !1, y(), !0);
    },
    updateGesture(x) {
      if (h) return !1;
      u || this.beginGesture();
      const S = t(u, x);
      return S.changed ? (u = S.state, f = !0, r(u), y(), !0) : !1;
    },
    hasGestureChanges() {
      return u != null && f;
    },
    commitGesture() {
      if (h || !u) return !1;
      const x = f;
      return x && a(u), u = null, f = !1, r(null), y(), x;
    },
    cancelGesture() {
      return h || !u ? !1 : (u = null, f = !1, r(null), y(), !0);
    },
    apply(x) {
      if (h) return !1;
      u && this.commitGesture();
      const S = t(e(), x);
      return S.changed ? (a(S.state), y(), !0) : !1;
    },
    destroy() {
      if (h) return;
      h = !0;
      const x = u != null;
      u = null, f = !1, x && r(null);
    }
  };
}
const Fc = Math.PI / 180, aa = 180 / Math.PI, $1 = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), j1 = 260;
function Wd(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function sm(e, t) {
  return t ? sm(t, e % t) : e;
}
function V1(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, a = r ? 1e3 : 1e6, o = r ? 1 : Math.max(e, t), u = Math.max(1, Math.round(e / o * a)), f = Math.max(1, Math.round(t / o * a)), h = sm(u, f) || 1;
  return `${Math.round(u / h)}:${Math.round(f / h)}`;
}
function fo(e, t) {
  const n = Wd(e), r = Wd(t);
  if (n == null || r == null) return null;
  const a = n / r;
  return !Number.isFinite(a) || a <= 0 ? null : { width: n, height: r, ratio: a, label: V1(n, r) };
}
function wi(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((a) => String((a == null ? void 0 : a.id) || "") === n) || t[0] || null;
}
function lm(e) {
  const t = wi(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Er(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function H1(e, t, n = $1) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), a = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), f = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), h = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), g = ($, L, P) => {
    const z = $ + L, I = Math.max(0, P - 1), D = z > I && z > 0 ? I / z : 1;
    return [$ * D, L * D];
  }, [y, x] = g(h, u, r), [S, M] = g(o, f, a), v = {
    x: y,
    y: S,
    w: Math.max(1, r - y - x),
    h: Math.max(1, a - S - M)
  }, E = ku(v, t);
  return {
    x: v.x + (v.w - E.width) * 0.5,
    y: v.y + (v.h - E.height) * 0.5,
    w: E.width,
    h: E.height,
    safeRect: v
  };
}
function U1(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), a = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, u = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, f = fa(t, n), h = {
    width: Math.max(o, r - o) * 2,
    height: Math.max(u, a - u) * 2
  }, { halfW: g, halfH: y } = Oc(h, f), x = {
    x: o - g,
    y: u - y,
    w: g * 2,
    h: y * 2
  }, S = x.x <= 0 && x.y <= 0 && x.x + x.w >= r && x.y + x.h >= a, M = r / a, v = Math.tan(Dc * Fc), E = M >= 1 ? v : v * M, $ = M >= 1 ? v / M : v;
  return {
    focalPx: f,
    rect: x,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(g / f) * aa,
      vFOV_deg: 2 * Math.atan(y / f) * aa
    },
    fallback: S ? null : {
      rect: { x: 0, y: 0, w: r, h: a },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(E) * aa,
        vFOV_deg: 2 * Math.atan($) * aa
      }
    }
  };
}
function Wi(e, t) {
  const n = wi(e);
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
function B1(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), a = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(a) && a > 0) {
    const u = fa(n, e);
    return tm(ku(n, t), u);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: _s(o, t) };
}
function Yd(e, t, n, { preserveOrientation: r = !1, safeRect: a = null } = {}) {
  let o = fo(t, n);
  if (!o) return e;
  const u = da(e) >= 1;
  r && o.ratio >= 1 !== u && (o = fo(o.height, o.width));
  const f = B1(e, o.ratio, a);
  return Math.abs(Number(e.hFOV_deg || 0) - f.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - f.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...f, aspect_id: o.label };
}
function cm(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (wi(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), a = rm({
      id: r,
      yawDeg: t.yawDeg,
      pitchDeg: t.pitchDeg,
      viewFovDeg: t.viewFovDeg
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
    const r = wi(e);
    if (!r) return { state: e, changed: !1 };
    const a = (Array.isArray(e.shots) ? e.shots : []).filter((u) => u !== r), o = ((n = a[0]) == null ? void 0 : n.id) == null ? null : String(a[0].id);
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
    return Wi(e, (r) => Yd(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Wi(e, (r) => {
      const o = String(Er(r) || "").match(/^([0-9.]+):([0-9.]+)$/), u = o ? fo(o[1], o[2]) : fo(da(r), 1);
      return u ? Yd(r, u.height, u.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? Wi(e, (a) => {
      const o = Zp(r), u = Number(a.roll_deg ?? a.rot_deg ?? 0);
      if (Math.abs(u - o) <= 1e-12) return a;
      const f = { ...a, roll_deg: o };
      return delete f.rot_deg, f;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Wi(e, (r) => {
    const a = im(r, t.scale);
    return a ? { ...r, ...a } : r;
  }) : t.type === "step-fov" ? Wi(e, (r) => {
    const a = am(r, t.direction);
    return a ? { ...r, ...a } : r;
  }) : t.type === "pan-camera" ? Wi(e, (r) => {
    const a = dm(t.startShot || r, t);
    return Math.abs(Number(a.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(a.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: a.yaw_deg, pitch_deg: a.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function um({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: r = !1,
  altKey: a = !1,
  allowAlt: o = !1,
  deadZoneRatio: u = 0.05
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
  }, y = Math.hypot(Number(t.x || 0) - g.x, Number(t.y || 0) - g.y);
  if (f === "shift" && y < Math.min(h.w, h.h) * u) return null;
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
function fm(e, t, n = {}) {
  var u, f;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((u = e.center) == null ? void 0 : u.y) || 0),
    Number(t.x || 0) - Number(((f = e.center) == null ? void 0 : f.x) || 0)
  ), a = Number(e.accumulatedRad || 0) + Qp(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: a },
    rollDeg: em(e.startRollDeg, a, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function dm(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, a = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * r, u = Number(t.dy || 0) * a, f = Number(e.roll_deg ?? e.rot_deg ?? 0) * Fc, h = Math.cos(f), g = Math.sin(f), y = o / n, x = -u / n, S = y * h - x * g, M = y * g + x * h, v = Number(e.pitch_deg || 0) * Fc, E = Math.max(0.25, Math.abs(Math.cos(v)));
  return {
    ...e,
    yaw_deg: Bt(Number(e.yaw_deg || 0) - Math.atan(S) / E * aa),
    pitch_deg: Y(Number(e.pitch_deg || 0) - Math.atan(M) * aa, -90, 90)
  };
}
function G1({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return om({
    readState: e,
    reduce: cm,
    projectModel: lm,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Ee = Object.freeze({
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
}), K1 = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, W1 = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: K1(t[2])
})), Y1 = {
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
}, qd = Object.fromEntries(
  Object.entries(Y1).map(([e, t]) => [e, {
    name: t.name,
    elements: W1(t.body)
  }])
), Xt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = wt(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(qd, r) ? qd[r] : null;
    });
    return (r, a) => n.value ? (Me(), Ce("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: ut(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Me(!0), Ce(it, null, Lt(n.value.elements, (o, u) => (Me(), Ce(it, {
        key: `${n.value.name || e.icon || "icon"}-${o.tag}-${u}`
      }, [
        o.tag === "path" ? (Me(), Ce("path", Qr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Me(), Ce("circle", Qr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Me(), Ce("rect", Qr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Me(), Ce("line", Qr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Me(), Ce("polyline", Qr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Me(), Ce("polygon", Qr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : Ft("", !0)
      ], 64))), 128))
    ], 2)) : Ft("", !0);
  }
}, Jt = {
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
    return (r, a) => (Me(), Mi(Iy(e.tag), Qr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: up(() => [
        je(Xt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, q1 = ["aria-expanded", "disabled"], X1 = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, J1 = ["data-aspect", "disabled", "onClick"], Z1 = { class: "pano-cutout-aspect-custom" }, Q1 = ["disabled"], e_ = ["disabled"], t_ = ["data-custom-width", "data-custom-height", "disabled"], hm = {
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
    ]), o = /* @__PURE__ */ pn("1"), u = /* @__PURE__ */ pn("1"), f = /* @__PURE__ */ pn(null), h = wt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), g = wt(() => {
      const E = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], $ = String(n.model.aspectLabel || "");
      return E.length ? E.map((L) => {
        const P = typeof L == "string" ? L : String((L == null ? void 0 : L.value) || ""), z = typeof L == "string" ? L : String((L == null ? void 0 : L.label) || P);
        return {
          ...typeof L == "object" && L ? L : {},
          value: P,
          label: z,
          active: $ ? P === $ : (L == null ? void 0 : L.active) === !0
        };
      }) : a.map((L) => ({
        ...L,
        active: L.value === $
      }));
    }), y = wt(() => {
      var $;
      const E = String(n.model.aspectLabel || "").trim();
      return E || String((($ = g.value.find((L) => L.active === !0)) == null ? void 0 : $.label) || "Aspect");
    });
    xi(y, (E) => {
      const $ = String(E || "").match(/^([0-9.]+):([0-9.]+)$/);
      $ && (o.value = $[1], u.value = $[2]);
    }, { immediate: !0 });
    function x(E) {
      r("action", E);
    }
    function S(E) {
      var $;
      n.model.aspectOpen === !0 && (($ = f.value) != null && $.contains(E.target) || x({ type: "close-aspect" }));
    }
    du(() => {
      document.addEventListener("pointerdown", S, !0);
    }), tl(() => {
      document.removeEventListener("pointerdown", S, !0);
    });
    function M(E) {
      const [$, L] = String(E.value || "").split(":");
      x({
        type: "set-aspect",
        width: $,
        height: L,
        preserveOrientation: !0
      });
    }
    function v() {
      x({
        type: "set-aspect",
        width: o.value,
        height: u.value,
        preserveOrientation: !1
      });
    }
    return (E, $) => (Me(), Ce("div", {
      ref_key: "rootElement",
      ref: f,
      class: ut(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Me(), Mi(Jt, {
        key: 0,
        icon: e.model.aspectIcon || ht(Ee).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: h.value },
        onClick: $[0] || ($[0] = (L) => x({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Me(), Ce("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: h.value,
        onClick: $[1] || ($[1] = (L) => x({ type: "toggle-aspect" }))
      }, [
        je(Xt, {
          icon: e.model.aspectIcon || ht(Ee).aspect
        }, null, 8, ["icon"]),
        X("span", null, ct(y.value), 1),
        je(Xt, {
          icon: ht(Ee).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, q1)),
      _i(X("div", X1, [
        (Me(!0), Ce(it, null, Lt(g.value, (L) => (Me(), Ce("button", {
          key: L.value,
          class: ut(["pano-btn pano-frame-aspect-choice", { active: L.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": L.value,
          disabled: h.value,
          onClick: (P) => M(L)
        }, ct(L.label), 11, J1))), 128)),
        X("div", Z1, [
          _i(X("input", {
            "onUpdate:modelValue": $[2] || ($[2] = (L) => o.value = L),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: h.value
          }, null, 8, Q1), [
            [Id, o.value]
          ]),
          $[4] || ($[4] = X("span", { "aria-hidden": "true" }, ":", -1)),
          _i(X("input", {
            "onUpdate:modelValue": $[3] || ($[3] = (L) => u.value = L),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: h.value
          }, null, 8, e_), [
            [Id, u.value]
          ]),
          X("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": u.value,
            disabled: h.value,
            onClick: v
          }, "Apply", 8, t_)
        ])
      ], 512), [
        [vo, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, n_ = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, r_ = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ pn(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, a) => (Me(), Ce("div", {
      class: ut(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: a[1] || (a[1] = zn(() => {
      }, ["stop"])),
      onWheel: a[2] || (a[2] = zn(() => {
      }, ["stop"]))
    }, [
      je(Jt, {
        icon: ht(Ee).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: a[0] || (a[0] = zn((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      X("div", n_, [
        a[3] || (a[3] = X("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Me(!0), Ce(it, null, Lt(ht(n), (o) => (Me(), Ce("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          X("kbd", null, ct(o[0]), 1),
          X("span", null, ct(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, i_ = { class: "pano-cutout-node-surface" }, a_ = ["title", "disabled"], o_ = { class: "value" }, s_ = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, l_ = {
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
    return (r, a) => (Me(), Ce("div", i_, [
      X("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: a[4] || (a[4] = zn(() => {
        }, ["stop"])),
        onWheel: a[5] || (a[5] = zn(() => {
        }, ["stop"]))
      }, [
        X("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (o) => n({ type: "open-editor" }))
        }, [
          je(Xt, {
            icon: ht(Ee).fullscreen
          }, null, 8, ["icon"]),
          a[6] || (a[6] = X("span", { class: "label" }, "Full Editor", -1))
        ]),
        je(Jt, {
          icon: e.model.hasShot ? ht(Ee).delete : ht(Ee).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: a[1] || (a[1] = (o) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        je(hm, {
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
          onDblclick: a[2] || (a[2] = zn((o) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          je(Xt, {
            icon: ht(Ee).roll
          }, null, 8, ["icon"]),
          X("span", o_, ct(e.model.rollLabel || "0.0°"), 1)
        ], 40, a_),
        je(Jt, {
          icon: ht(Ee).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: a[3] || (a[3] = (o) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        je(r_)
      ], 32),
      e.model.hasShot === !1 ? (Me(), Ce("div", s_, " Choose a view · + Add Frame ")) : Ft("", !0)
    ]));
  }
}, pm = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = /* @__PURE__ */ pn(null);
    let o, u = !1;
    function f() {
      if (!u) return { active: !1, intent: void 0 };
      const x = o;
      return o = void 0, u = !1, { active: !0, intent: x };
    }
    function h(x) {
      const S = a.value;
      return S instanceof HTMLInputElement ? (o = x, u = !0, S.value = "", S.click(), !0) : !1;
    }
    function g(x) {
      var E, $;
      const { active: S, intent: M } = f();
      if (!S) return;
      const v = (($ = (E = x.target) == null ? void 0 : E.files) == null ? void 0 : $[0]) || null;
      if (v) {
        r("file-selected", { intent: M, file: v });
        return;
      }
      r("file-cancelled", { intent: M });
    }
    function y() {
      const { active: x, intent: S } = f();
      x && r("file-cancelled", { intent: S });
    }
    return t({ open: h }), (x, S) => (Me(), Ce("input", {
      ref_key: "inputRef",
      ref: a,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: g,
      onCancel: y
    }, null, 544));
  }
}, c_ = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, u_ = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ pn(!1), n = Object.freeze([
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
    return (r, a) => (Me(), Ce("div", {
      class: ut(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: a[1] || (a[1] = zn(() => {
      }, ["stop"])),
      onWheel: a[2] || (a[2] = zn(() => {
      }, ["stop"]))
    }, [
      je(Jt, {
        icon: ht(Ee).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: a[0] || (a[0] = zn((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      X("div", c_, [
        a[3] || (a[3] = X("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Me(!0), Ce(it, null, Lt(ht(n), (o) => (Me(), Ce("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          X("kbd", null, ct(o[0]), 1),
          X("span", null, ct(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, f_ = { class: "pano-stickers-node-surface" }, d_ = ["disabled"], h_ = {
  key: 0,
  class: "pano-stickers-node-empty-note"
}, p_ = {
  key: 1,
  class: "pano-stickers-node-drop-cue"
}, m_ = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ pn(null);
    function r(u) {
      var f;
      (f = t.onAction) == null || f.call(t, u);
    }
    function a() {
      var u, f;
      (f = (u = n.value) == null ? void 0 : u.open) == null || f.call(u, "add");
    }
    function o(u) {
      r({ type: "add-image-file", file: (u == null ? void 0 : u.file) || null });
    }
    return (u, f) => (Me(), Ce("div", f_, [
      X("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: f[5] || (f[5] = zn(() => {
        }, ["stop"])),
        onWheel: f[6] || (f[6] = zn(() => {
        }, ["stop"]))
      }, [
        X("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: f[0] || (f[0] = (h) => r({ type: "open-editor" }))
        }, [
          je(Xt, {
            icon: ht(Ee).fullscreen
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
          je(Xt, {
            icon: ht(Ee).image
          }, null, 8, ["icon"]),
          f[8] || (f[8] = X("span", { class: "label" }, "Add Image", -1))
        ], 8, d_),
        je(Jt, {
          icon: e.model.locked ? ht(Ee).lock_closed : ht(Ee).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: f[1] || (f[1] = (h) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        je(Jt, {
          icon: ht(Ee).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: f[2] || (f[2] = (h) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        je(Jt, {
          icon: ht(Ee).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: f[3] || (f[3] = (h) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        je(Jt, {
          icon: e.model.isExternalSelection ? ht(Ee).back_initial : ht(Ee).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: f[4] || (f[4] = (h) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        je(u_)
      ], 32),
      e.model.hasStickers === !1 ? (Me(), Ce("div", h_, " Add Image to place a sticker ")) : Ft("", !0),
      e.model.dropActive === !0 ? (Me(), Ce("div", p_, "Drop image to add")) : Ft("", !0),
      je(pm, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: o
      }, null, 512)
    ]));
  }
}, xs = "sticker_image_1", mm = "external_image";
function Ss(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), a = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * a) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function lc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Nu(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function Mu(e) {
  return String((e == null ? void 0 : e.id) || "") === xs || String((e == null ? void 0 : e.source_kind) || "") === mm;
}
const gm = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function bm(e) {
  return !Mu(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(gm.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), a = Number(e.initial_pose[t]);
    return [t, Number.isFinite(a) ? a : Number.isFinite(r) ? r : n];
  }));
}
function ym(e) {
  const t = bm(e);
  return t ? gm.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function vm(e, t = {}) {
  var I, D, G;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((B) => String((B == null ? void 0 : B.id) || "") === xs);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const B = String(((I = e.active) == null ? void 0 : I.selected_sticker_id) || "") === xs;
    return {
      state: {
        ...e,
        stickers: n.filter((le, ie) => ie !== r),
        active: B ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const a = Number(t.linkId), o = String(t.stateHash || ""), u = r >= 0 ? n[r] : null, f = !u || Number(u.source_link_id ?? -1) !== a || String(u.source_state_hash || "") !== o, h = Number(t.imageWidth || 0), g = Number(t.imageHeight || 0), y = h > 0 && g > 0, x = Math.max(1, h), S = Math.max(1, g), M = t.pose && typeof t.pose == "object" ? t.pose : {}, v = f ? M.hFOV_deg || (u == null ? void 0 : u.hFOV_deg) || 30 : (u == null ? void 0 : u.hFOV_deg) || M.hFOV_deg || 30, E = Math.min(179, Math.max(0.1, Number(v)));
  if (!f) {
    if (!y) return { state: e, changed: !1 };
    const B = Ss(E, x, S), le = Number(((D = u == null ? void 0 : u.initial_pose) == null ? void 0 : D.hFOV_deg) ?? E), ie = Ss(le, x, S), T = Number(((G = u == null ? void 0 : u.initial_pose) == null ? void 0 : G.vFOV_deg) ?? ie);
    return Math.abs(Number((u == null ? void 0 : u.vFOV_deg) || 0) - B) <= 1e-6 && Math.abs(T - ie) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((K, J) => J === r ? {
          ...K,
          vFOV_deg: B,
          initial_pose: K.initial_pose && typeof K.initial_pose == "object" ? { ...K.initial_pose, vFOV_deg: ie } : K.initial_pose
        } : K)
      },
      changed: !0
    };
  }
  const $ = n.reduce((B, le) => Math.max(B, Number((le == null ? void 0 : le.z_index) || 0)), -1), L = {
    yaw_deg: Number(M.yaw_deg || 0),
    pitch_deg: Number(M.pitch_deg || 0),
    hFOV_deg: E,
    vFOV_deg: y ? Ss(E, x, S) : Number(M.vFOV_deg || (u == null ? void 0 : u.vFOV_deg) || E),
    rot_deg: Number(M.rot_deg ?? M.roll_deg ?? 0)
  }, P = {
    ...u || {},
    id: xs,
    source_kind: mm,
    source_link_id: a,
    source_state_hash: o,
    ...L,
    initial_pose: { ...L },
    visible: !0,
    z_index: $ + 1
  }, z = r >= 0 ? n.map((B, le) => le === r ? P : B) : [...n, P];
  return { state: { ...e, stickers: z }, changed: !0 };
}
function Pu(e) {
  const t = (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: lc(o.z_index),
    item: o
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: lc(o.z_index),
    item: o
  })), a = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: lc(o.z_index),
    item: o
  }));
  return [...t, ...r, ...a].sort((o, u) => o.z_index - u.z_index);
}
function _m(e) {
  const t = Nu(e), n = Mu(t), r = (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).some((f) => f && f.visible !== !1), a = Pu(e), o = t ? a.findIndex((f) => f.type === "sticker" && f.item === t) : -1, u = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: ym(t),
    selectedId: t ? String(t.id || "") : null,
    locked: u,
    canDelete: !!t && !u,
    canMoveForward: o >= 0 && o < a.length - 1,
    canMoveBackward: o > 0
  };
}
function g_(e) {
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
function Xd(e, t) {
  const n = Nu(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = g_(e), a = String(n.id || ""), o = Pu(r), u = o.findIndex((h) => h.type === "sticker" && h.id === a);
  if (u < 0) return { state: e, changed: !1 };
  if (t === "front" && u === o.length - 1 || t === "back" && u === 0)
    return { state: e, changed: !1 };
  const [f] = o.splice(u, 1);
  return t === "front" ? o.push(f) : o.unshift(f), o.forEach((h, g) => {
    h.item.z_index = g;
  }), { state: r, changed: !0 };
}
function b_(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function y_(e, t = {}) {
  var r, a;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return vm(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, u = String(o.stickerId || "").trim(), f = String(o.assetId || "").trim();
    if (!u || !f || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((S) => String((S == null ? void 0 : S.id) || "") === u))
      return { state: e, changed: !1 };
    const g = Pu(e).reduce((S, M) => Math.max(S, Number(M.z_index || 0)), -1), y = 30, x = {
      id: u,
      asset_id: f,
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: y,
      vFOV_deg: Ss(y, o.imageWidth, o.imageHeight),
      rot_deg: 0,
      z_index: g + 1
    };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [f]: o.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], x],
        active: { ...e.active || {}, selected_sticker_id: u }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const o = String(t.id || "");
    return !o || !(Array.isArray(e.stickers) ? e.stickers : []).some((u) => String((u == null ? void 0 : u.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = Nu(e);
  if (!n) return { state: e, changed: !1 };
  if (t.type === "toggle-lock") {
    const o = n.locked !== !0;
    return {
      state: {
        ...e,
        stickers: e.stickers.map((u) => u === n ? { ...u, locked: o } : u)
      },
      changed: !0
    };
  }
  if (t.type === "restore-initial") {
    const o = bm(n);
    return !o || !ym(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((u) => u === n ? { ...u, ...o } : u)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Xd(e, "front");
  if (t.type === "send-back") return Xd(e, "back");
  if (t.type === "delete-selected") {
    if (Mu(n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((h) => h === n ? { ...h, visible: !1 } : h)
        },
        changed: !0
      };
    const o = e.stickers.filter((h) => h !== n), u = ((a = o[0]) == null ? void 0 : a.id) == null ? null : String(o[0].id), f = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: u }
    };
    return f.assets = b_(f), { state: f, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, u = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], f = {};
    return u.forEach((h) => {
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
function v_(e = {}) {
  return om({
    ...e,
    reduce: y_,
    projectModel: _m
  });
}
function __(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Jd(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function x_(e, t) {
  let n = !1;
  for (let r = 0, a = t.length - 1; r < t.length; a = r, r += 1) {
    const o = t[r], u = t[a];
    o.y > e.y != u.y > e.y && e.x < (u.x - o.x) * (e.y - o.y) / (u.y - o.y || 1e-12) + o.x && (n = !n);
  }
  return n;
}
function Rc(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Jd(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], a = r.x - e.center.x, o = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: a * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Jd(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : x_(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function xm(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((a) => (Array.isArray(a) ? a : []).forEach((o) => {
    r ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function Sm(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 6.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 10, 0, Math.PI * 2), e.fill());
}
function wm(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1))
  };
}
function km(e) {
  return Jp(
    Number((e == null ? void 0 : e.yawDeg) ?? (e == null ? void 0 : e.yaw) ?? 0),
    Number((e == null ? void 0 : e.pitchDeg) ?? (e == null ? void 0 : e.pitch) ?? 0),
    0
  );
}
function S_(e, t, n) {
  const { width: r, height: a } = wm(n), { right: o, up: u, fwd: f } = km(t), h = Y(Number((t == null ? void 0 : t.fovDeg) ?? (t == null ? void 0 : t.fov) ?? 100), 1, 179) * mn, g = 2 * Math.atan(Math.tan(h * 0.5) * (a / r)), y = (Number((e == null ? void 0 : e.x) || 0) - r * 0.5) / (r * 0.5) * Math.tan(h * 0.5), x = (a * 0.5 - Number((e == null ? void 0 : e.y) || 0)) / (a * 0.5) * Math.tan(g * 0.5);
  return ni(va(va(ti(o, y), ti(u, x)), f));
}
function Ha(e, t, n) {
  const { width: r, height: a } = wm(n), { right: o, up: u, fwd: f } = km(t), h = vs(e, o), g = vs(e, u), y = vs(e, f), x = 1e-4;
  if (!Number.isFinite(y)) return null;
  const S = Math.max(y, x), M = Y(Number((t == null ? void 0 : t.fovDeg) ?? (t == null ? void 0 : t.fov) ?? 100), 1, 179) * mn, v = 2 * Math.atan(Math.tan(M * 0.5) * (a / r)), E = r * 0.5 / Math.tan(M * 0.5), $ = a * 0.5 / Math.tan(v * 0.5), L = Math.max(r, a) * 2;
  return {
    x: Y(r * 0.5 + h / S * E, -L, r + L),
    y: Y(a * 0.5 - g / S * $, -L, a + L),
    rawZ: y
  };
}
function w_(e) {
  const t = Xp(Number((e == null ? void 0 : e.yaw_deg) || 0), Number((e == null ? void 0 : e.pitch_deg) || 0));
  let n = Hr(0, 1, 0);
  Math.abs(vs(t, n)) > 0.999 && (n = Hr(0, 0, 1));
  const r = ni($s(n, t)), a = ni($s(t, r)), o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) * mn;
  return {
    centerDir: t,
    right: r,
    up: a,
    tanX: Math.tan(Y(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * mn * 0.5),
    tanY: Math.tan(Y(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * mn * 0.5),
    cosRotation: Math.cos(o),
    sinRotation: Math.sin(o)
  };
}
function pi(e, t, n) {
  const r = t * e.cosRotation - n * e.sinRotation, a = t * e.sinRotation + n * e.cosRotation;
  return ni(va(
    va(e.centerDir, ti(e.right, r)),
    ti(e.up, a)
  ));
}
function Nm(e, t, n) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = w_(e), a = Ha(r.centerDir, t, n);
  if (!a) return { visible: !1 };
  const o = [
    pi(r, -r.tanX, r.tanY),
    pi(r, r.tanX, r.tanY),
    pi(r, r.tanX, -r.tanY),
    pi(r, -r.tanX, -r.tanY)
  ].map((M) => Ha(M, t, n)), u = Array.from({ length: 4 }, (M, v) => {
    const E = [];
    for (let $ = 0; $ <= 28; $ += 1) {
      const L = $ / 28;
      let P, z;
      v === 0 ? (P = -r.tanX + 2 * r.tanX * L, z = r.tanY) : v === 1 ? (P = r.tanX, z = r.tanY - 2 * r.tanY * L) : v === 2 ? (P = r.tanX - 2 * r.tanX * L, z = -r.tanY) : (P = -r.tanX, z = -r.tanY + 2 * r.tanY * L);
      const I = Ha(pi(r, P, z), t, n);
      I && E.push({ x: I.x, y: I.y });
    }
    return E;
  }), f = Ha(pi(r, 0, r.tanY), t, n), h = Ha(
    pi(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t,
    n
  ), g = [a, ...o, f, h];
  if (g.some((M) => !M || !Number.isFinite(M.x) || !Number.isFinite(M.y)))
    return { visible: !1 };
  if (!g.some((M) => M.rawZ > 1e-4)) return { visible: !1 };
  const y = h.x - f.x, x = h.y - f.y, S = Math.hypot(y, x) || 1;
  return {
    center: { x: a.x, y: a.y },
    corners: o.map((M) => ({ x: M.x, y: M.y })),
    boundaryEdges: u,
    rotateStemBase: { x: f.x, y: f.y },
    rotateHandle: {
      x: f.x + y / S * 30,
      y: f.y + x / S * 30
    },
    visible: !0
  };
}
function Zd(e, t, n, r, a) {
  const o = (Array.isArray(e) ? e : []).filter((f) => f && f.visible !== !1).map((f) => ({ item: f, geometry: Nm(f, r, a) })).filter((f) => f.geometry.visible).sort((f, h) => {
    var g, y;
    return Number(((g = h.item) == null ? void 0 : g.z_index) || 0) - Number(((y = f.item) == null ? void 0 : y.z_index) || 0);
  }), u = o.find((f) => {
    var h;
    return String(((h = f.item) == null ? void 0 : h.id) || "") === String(t || "");
  });
  if (u) {
    const f = Rc(u.geometry, n);
    if (f.kind === "scale" || f.kind === "rotate") return { ...u, hit: f };
  }
  for (const f of o) {
    const h = Rc(f.geometry, n);
    if (h.kind !== "none") return { ...f, hit: h };
  }
  return null;
}
function k_(e, t, n, r) {
  const a = S_(t, n, r);
  return {
    ...e,
    yaw_deg: Bt(Math.atan2(a.x, a.z) * Vr),
    pitch_deg: Math.asin(Y(a.y, -1, 1)) * Vr
  };
}
function N_(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Y(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: Y(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function M_(e, t, n, r = !1) {
  const a = (Number(n || 0) - Number(t || 0)) * Vr;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - a;
  return r && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let Yo = null;
function Au() {
  return Yo || (Yo = new Promise((e) => {
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
  }), Yo);
}
function Un(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function P_(e, t = 1024) {
  const n = Math.max(1, Math.round(Un(e, 2048))), r = Math.min(n, Math.max(1, Math.round(Un(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function A_(e, t, n) {
  const r = Un(t), a = Un(n), o = e == null ? void 0 : e.bbox;
  if (!o || r < 1 || a < 1) return null;
  const u = Un(o.u0), f = Un(o.v0), h = Un(o.u1), g = Un(o.v1);
  if (h <= u || g <= f) return null;
  const y = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((u + h) * 0.5 + Un(y.du)) * r,
    centerY: ((f + g) * 0.5 + Un(y.dv)) * a,
    width: (h - u) * r,
    height: (g - f) * a,
    rotationRad: Un(y.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Un(y.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function C_(e, t, n) {
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
function T_() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function n() {
    if (!(e.size <= 16))
      for (const [o, u] of e) {
        if (e.size <= 16) break;
        u.settled && (u.image.onload = null, u.image.onerror = null, e.delete(o));
      }
  }
  function r(o, u) {
    let f = e.get(o);
    if (f)
      return e.delete(o), e.set(o, f), !f.settled && typeof u == "function" && f.listeners.add(u), f.image;
    const h = new Image();
    f = { image: h, listeners: new Set(typeof u == "function" ? [u] : []), settled: !1 }, e.set(o, f);
    const g = () => {
      f.settled = !0;
      const y = [...f.listeners];
      f.listeners.clear(), y.forEach((x) => x()), n();
    };
    return h.onload = g, h.onerror = g, h.src = o, n(), h;
  }
  function a(o, u, f, h = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const g = String(o.rasterDataUrl || "").trim(), y = A_(o, u, f);
    if (!g.startsWith("data:") || !y) return null;
    const x = C_(o, u, f), S = String((o == null ? void 0 : o.id) || "").trim() || x, M = t.get(S);
    if ((M == null ? void 0 : M.revision) === x) return { source: M.source, revision: x };
    const v = r(g, h), E = Number(v.naturalWidth || v.width || 0), $ = Number(v.naturalHeight || v.height || 0);
    if (!v.complete || E < 1 || $ < 1) return null;
    const L = document.createElement("canvas");
    L.width = Math.max(1, Math.round(u)), L.height = Math.max(1, Math.round(f));
    const P = L.getContext("2d");
    return P ? (y.wrapOffsets.forEach((z) => {
      P.save(), P.translate(y.centerX + z, y.centerY), P.rotate(y.rotationRad), P.scale(y.scale, y.scale), P.drawImage(
        v,
        -y.width * 0.5,
        -y.height * 0.5,
        y.width,
        y.height
      ), P.restore();
    }), t.set(S, { revision: x, source: L }), { source: L, revision: x }) : null;
  }
  return {
    get: a,
    retain(o = []) {
      const u = new Set(Array.from(o, (f) => String(f || "").trim()).filter(Boolean));
      for (const f of t.keys())
        u.has(f) || t.delete(f);
    },
    dispose() {
      e.forEach((o) => {
        o.listeners.clear(), o.image.onload = null, o.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function I_(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function E_(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function D_({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), a = Math.max(1, Math.trunc(Number(t || 32)));
  function o(x) {
    if (!x) return;
    x.entry.listeners.delete(x);
    const S = r.get(x.owner);
    (S == null ? void 0 : S.get(x.key)) === x && S.delete(x.key);
  }
  function u(x, S, M, v) {
    if (!x || typeof v != "function" || M.settled) return;
    let E = r.get(x);
    E || (E = /* @__PURE__ */ new Map(), r.set(x, E));
    const $ = E.get(S);
    if (($ == null ? void 0 : $.entry) === M) {
      $.callback = v;
      return;
    }
    o($);
    const L = { owner: x, key: S, entry: M, callback: v };
    E.set(S, L), M.listeners.add(L);
  }
  function f(x) {
    x.settled || (x.settled = !0, x.image.onload = null, x.image.onerror = null, [...x.listeners].forEach((S) => {
      o(S);
      try {
        S.callback(x.image);
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
  function g(x, S, M, v = null) {
    const E = String(S || ""), $ = String(M || "");
    if (!E || !$) return null;
    let L = n.get(E);
    if (L)
      n.delete(E), n.set(E, L);
    else {
      h(a - 1);
      const z = e || globalThis.Image;
      if (typeof z != "function") return null;
      const I = new z();
      L = { image: I, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(E, L), I.onload = () => f(L), I.onerror = () => f(L), I.src = $;
    }
    return L.settled || L.image.complete && Number(L.image.naturalWidth || L.image.width || 0) > 0 || u(x, E, L, v), L.image;
  }
  function y(x) {
    const S = r.get(x);
    S && ([...S.values()].forEach(o), r.delete(x), h(a));
  }
  return { get: g, disposeOwner: y };
}
function js(e) {
  return e ? ((!e.__panoNodeOutputMediaFreshness || typeof e.__panoNodeOutputMediaFreshness != "object") && (e.__panoNodeOutputMediaFreshness = /* @__PURE__ */ Object.create(null)), e.__panoNodeOutputMediaFreshness) : null;
}
function ol(e, t = "") {
  const n = String(t || "").trim();
  if (!n) return (e == null ? void 0 : e.__panoNodeOutputMediaCurrent) !== !1;
  const r = js(e);
  return Object.prototype.hasOwnProperty.call(r, n) ? r[n] !== !1 : (e == null ? void 0 : e.__panoNodeOutputMediaCurrent) !== !1;
}
function Qd(e, t = "") {
  if (!e) return;
  const n = String(t || "").trim();
  if (n) {
    js(e)[n] = !1;
    return;
  }
  e.__panoNodeOutputMediaCurrent = !1;
}
function O_(e, t = "") {
  if (!e) return;
  const n = String(t || "").trim();
  if (n) {
    js(e)[n] = !0;
    return;
  }
  e.__panoNodeOutputMediaCurrent = !0;
  const r = js(e);
  Object.keys(r).forEach((a) => {
    r[a] = !0;
  });
}
function eh(e, t, n, r = ["erp_image", "bg_erp"]) {
  const a = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || a === "input")) return !1;
  const u = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((u == null ? void 0 : u.name) || ""));
}
function F_(e, t = [], n = null) {
  var a;
  const r = typeof n == "function" ? n : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const u = [(a = e == null ? void 0 : e.ui) == null ? void 0 : a[o], e == null ? void 0 : e[o]];
    for (const f of u)
      if (Array.isArray(f))
        for (const h of f) {
          const g = r(h);
          if (g && (/\.mp4(\?|$)/i.test(g) || String((h == null ? void 0 : h.format) || "").toLowerCase() === "video/mp4"))
            return g;
        }
  }
  return "";
}
function R_({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  var v;
  const r = ((v = e == null ? void 0 : e.createElement) == null ? void 0 : v.call(e, "video")) || null;
  if (!r || !t) return null;
  const a = typeof n == "function" ? n : () => {
  };
  let o = !1, u = 0;
  const f = typeof r.requestVideoFrameCallback == "function", h = () => {
    o || !f || u || r.paused || r.ended || (u = r.requestVideoFrameCallback(() => {
      u = 0, !o && (a(), h());
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
  }, y = () => a(), x = () => {
    a(), h();
  }, S = () => a();
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", g, { once: !0 }), r.addEventListener("canplay", g, { once: !0 }), f || r.addEventListener("timeupdate", y), r.addEventListener("play", x), r.addEventListener("pause", S), r.src = t, r.load(), { video: r, destroy: () => {
    var E, $;
    o || (o = !0, u && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(u), u = 0), r.removeEventListener("loadedmetadata", g), r.removeEventListener("canplay", g), r.removeEventListener("timeupdate", y), r.removeEventListener("play", x), r.removeEventListener("pause", S), r.pause(), (E = r.removeAttribute) == null || E.call(r, "src"), ($ = r.load) == null || $.call(r));
  } };
}
function gt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function L_() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function z_(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const a = String(r.actionGroupId || r.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const o = gt(r.z_index ?? r.zIndex, t.length);
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
function $_(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function j_(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = gt(e.t, 0), r = gt(e.widthScale, null), a = gt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = gt(e.u, null), u = gt(e.v, null);
    if (o == null || u == null) return null;
    const f = {
      targetKind: "ERP_GLOBAL",
      u: (o % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, u)),
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  if (t.kind === "FRAME_LOCAL") {
    const o = gt(e.u, null), u = gt(e.v, null);
    if (o == null || u == null) return null;
    const f = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: o,
      v: u,
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  return null;
}
function qo(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const a of e) {
    const o = j_(a, t);
    if (!o) return null;
    r.push(o);
  }
  return r.length >= n ? r : null;
}
function V_(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const h = qo(e.points, t, 3);
    return h ? { geometryKind: a, points: h } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const o = qo(e.points, t, 1);
  if (!o) return null;
  const u = qo(e.rawPoints, t, 1), f = qo(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: o,
    rawPoints: u || o.map((h) => ({ ...h })),
    processedPoints: f || o.map((h) => ({ ...h }))
  };
}
function H_(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = $_(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), a = V_(e.geometry, n, r, t === "paint");
  if (!a) return null;
  const o = gt(e.size, null), u = gt(e.opacity, null);
  if (o == null || u == null) return null;
  const f = String(e.id || "").trim(), h = String(e.actionGroupId || "").trim();
  if (!f || !h) return null;
  const g = gt(e.radiusValue, null), y = String(e.radiusModel || "").trim() || null;
  let x = null;
  if (t === "paint") {
    const S = e.color;
    if (!S || typeof S != "object") return null;
    x = {
      r: Math.max(0, Math.min(1, gt(S.r, 0))),
      g: Math.max(0, Math.min(1, gt(S.g, 0))),
      b: Math.max(0, Math.min(1, gt(S.b, 0))),
      a: Math.max(0, Math.min(1, gt(S.a, 1)))
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
    opacity: Math.max(0, Math.min(1, u)),
    hardness: gt(e.hardness, null),
    flow: gt(e.flow, null),
    spacing: gt(e.spacing, null),
    createdAt: Math.trunc(gt(e.createdAt, 0)),
    color: x,
    radiusModel: y,
    radiusValue: g == null ? null : Math.max(0, g),
    geometry: a
  };
}
function th(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const a = H_(r, t);
    a && n.strokes.push(a);
  }
  return n;
}
function U_(e) {
  if (!e || typeof e != "object") return null;
  const t = gt(e.u0, null), n = gt(e.v0, null), r = gt(e.u1, null), a = gt(e.v1, null);
  if (t == null || n == null || r == null || a == null) return null;
  const o = (f) => Math.max(0, Math.min(1, f)), u = { u0: o(t), v0: o(n), u1: o(r), v1: o(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function B_(e) {
  const t = e || {};
  return {
    du: gt(t.du, 0) ?? 0,
    dv: gt(t.dv, 0) ?? 0,
    rot_deg: gt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, gt(t.scale, 1) ?? 1)
  };
}
function G_(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const o = U_(e.bbox);
  return o ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, gt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: a,
    transform: B_(e.transform)
  } : null;
}
function K_(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const a = G_(r, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function ro(e) {
  const t = L_();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: z_(e.groups),
    paint: th(e.paint, "paint"),
    mask: th(e.mask, "mask"),
    raster_objects: K_(e.raster_objects)
  };
}
let Xo = { text: null, parsed: null };
function tn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Lc(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function W_({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: tn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: ro(null),
    painting_layer: null,
    ui_settings: Lc(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Y_(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function q_(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function X_(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function J_(e) {
  return Array.isArray(e) ? e.map((t) => nm(t)) : [];
}
function Z_(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), a = n.find((u) => String((u == null ? void 0 : u.id) || "") === r) || n[0], o = String((a == null ? void 0 : a.id) || "") || null;
  return { shots: [a], selectedShotId: o };
}
function Mm(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = W_(n), a = String(e || "").trim();
  if (!a) return r;
  try {
    let o = null;
    if (Xo.text === a ? o = Xo.parsed : (o = JSON.parse(a), Xo = { text: a, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return r;
    const u = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, f = {
      ...r,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: q_(o.assets),
      stickers: X_(o.stickers),
      shots: J_(o.shots),
      painting: ro(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Lc(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...r.active }
    };
    return u && (f.ui_settings = Lc({ ...f.ui_settings, ...u })), f.output_preset = Y_(
      n.outputPreset,
      Number(f.output_preset || r.output_preset)
    ), f.bg_color = String(n.backgroundColor || f.bg_color || r.bg_color), f.coverage = tn(n.coverage), delete f.editor_history, f;
  } catch {
    return Xo = { text: a, parsed: null }, r;
  }
}
function nh(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
const Vs = "state_json";
function Lr(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function Q_(e) {
  var u, f;
  const t = Lr(e, Vs);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = Mm(n, {
    coverage: (u = Lr(e, "coverage")) == null ? void 0 : u.value
  }), a = cm(r, { type: "add-frame" });
  if (!a.changed) return !1;
  const o = JSON.stringify(a.state);
  return t.value = o, (f = t.callback) == null || f.call(t, o), !0;
}
function Cu(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = Lr(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...a) {
    var u, f, h, g, y, x, S, M, v;
    const o = r ? r(...a) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (u = e.__panoPreviewNodeRuntime) == null ? void 0 : u.requestDraw) == null || f.call(u), (g = (h = e.__panoDomPreview) == null ? void 0 : h.requestDraw) == null || g.call(h), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (S = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || S.call(x, !0, !0), (v = (M = t == null ? void 0 : t.canvas) == null ? void 0 : M.setDirty) == null || v.call(M, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function ex(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function rh(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function tx(e) {
  var y, x, S, M, v, E;
  if (!e) return;
  const t = Lr(e, "coverage"), n = Lr(e, "bg_color"), r = Lr(e, Vs), a = Lr(e, "sticker_state");
  if (!t || !n || !r) return;
  const o = String(t.value ?? "").trim(), u = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && ex(o) && (rh(u) || u === ""))) return;
  let g = "360";
  if (rh(u))
    try {
      g = String(tn((y = JSON.parse(u)) == null ? void 0 : y.coverage));
    } catch {
      g = "360";
    }
  t.value = g, (x = t.callback) == null || x.call(t, g), n.value = o, (S = n.callback) == null || S.call(n, o), r.value = u, (M = r.callback) == null || M.call(r, u), a && (a.value = f, (v = a.callback) == null || v.call(a, f)), (E = e.setDirtyCanvas) == null || E.call(e, !0, !0);
}
function ws(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var o, u;
    const a = String((r == null ? void 0 : r.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (o = r.element) != null && o.style && (r.element.style.display = "none"), (u = r.parentEl) != null && u.style && (r.parentEl.style.display = "none")));
  });
}
function zc(e, t, n) {
  var o, u;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(t));
  if (a) {
    a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", a.options = { ...a.options || {}, hidden: !1 }, typeof a.__panoComputeSizeBeforeHide == "function" && (a.computeSize = a.__panoComputeSizeBeforeHide), delete a.__panoComputeSizeBeforeHide, (o = a.element) != null && o.style && (a.element.style.display = ""), (u = a.parentEl) != null && u.style && (a.parentEl.style.display = "");
    const f = typeof a.computeSize == "function" ? a.computeSize() : null;
    return (!Array.isArray(f) || Number(f[0] || 0) <= 0 || Number(f[1] || 0) <= 0) && (a.computeSize = () => {
      var h;
      return [Math.max(120, Number(((h = e == null ? void 0 : e.size) == null ? void 0 : h[0]) || 0) - 20), 30];
    }), a;
  }
  return a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a;
}
async function nx(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, a]) => a)) : await Promise.all(r.map(([, a]) => a)), r.forEach(([a, o]) => {
        n.get(a) === o && n.delete(a);
      });
    }
}
function $c(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, o = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), u = o.catch(() => {
  });
  e.__panoStickerOperationTail = u, e.__panoPendingStickerUploads.set(t, o);
  const f = () => {
    var h, g;
    ((g = (h = e.__panoPendingStickerUploads) == null ? void 0 : h.get) == null ? void 0 : g.call(h, t)) === o && e.__panoPendingStickerUploads.delete(t);
  };
  return o.then(f, f), u.then(() => {
    e.__panoStickerOperationTail === u && (e.__panoStickerOperationTail = null);
  }), o;
}
async function Pm(e, t = {}) {
  var r;
  await nx(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const a of n) await a();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function rx(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await Pm(e), n ? n.apply(this, r) : this.value;
  };
}
function ix(e) {
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
function ih(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: a,
  attachStickers: o,
  attachCutout: u,
  enableStickersPreview: f
}) {
  if (!(e != null && e.prototype)) return;
  function h(g) {
    var S;
    const y = `editor_btn|${n}`;
    if (g.__panoPreviewAttached === !0 && g.__panoPreviewMountKey === y) return;
    ix(g), Cu(g, t), ws(g, Vs);
    const x = Lr(g, Vs);
    if (rx(g, x), x && !x.__panoPreviewPatchedCb) {
      x.__panoPreviewPatchedCb = !0;
      const M = x.callback;
      x.callback = (v) => {
        var $;
        const E = M ? M(v) : void 0;
        return ($ = g.setDirtyCanvas) == null || $.call(g, !0, !1), E;
      };
    }
    if (n === "PanoramaStickers") {
      const M = Lr(g, "bg_color");
      M && (M.value == null || String(M.value).trim() === "" || String(M.value).toLowerCase() === "#000000") && (M.value = "#00ff00", (S = M.callback) == null || S.call(M, "#00ff00")), zc(g, r, () => a(g, "stickers")), f && (o(g, {
        enabled: !0,
        buttonText: r,
        onOpen: () => a(g, "stickers")
      }), g.__panoStickersNodeSurface && ws(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260])), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = y;
      return;
    }
    zc(g, r, () => a(g, "cutout")), u(g, {
      buttonText: r,
      onOpen: () => a(g, "cutout")
    }), g.__panoCutoutNodeSurface && ws(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260]), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = y;
  }
  for (const g of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const y = e.prototype[g];
    e.prototype[g] = function() {
      const x = y ? y.apply(this, arguments) : void 0;
      return g === "onNodeCreated" && n === "PanoramaCutout" && Q_(this), g === "onConfigure" && n === "PanoramaStickers" && this.widgets && tx(this), (g === "onNodeCreated" || this.widgets) && h(this), x;
    };
  }
}
function ax(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
}
function ox(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
  requestFrame: a
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const o = () => {
    const u = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), f = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = f, !u && f < 40) {
      a(o);
      return;
    }
    Cu(e, t);
    const h = (g = e) => n(g, "stickers", { readOnly: !0, hideSidebar: !1 });
    zc(e, "Open Preview", () => h(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: h
    }), e.__panoPreviewNodeSurface && ws(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  a(o);
}
function sx({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: r,
  attachPreview: a,
  requestFrame: o,
  enableStickersPreview: u = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    beforeRegisterNodeDef(f, h) {
      const g = String((h == null ? void 0 : h.name) || "");
      (g === "PanoramaStickers" || g === "Panorama Stickers") && ih(f, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), (g === "PanoramaCutout" || g === "Panorama Cutout") && ih(f, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), zs(g) && ax(f);
    },
    nodeCreated(f) {
      const h = String((f == null ? void 0 : f.comfyClass) || (f == null ? void 0 : f.type) || (f == null ? void 0 : f.title) || "");
      Cu(f, e), zs(h) && ox(f, { app: e, openEditor: t, attachPreview: a, requestFrame: o });
    }
  };
}
const lx = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Qn(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : lx.test(String(e.name || "")) : !1;
}
function Am(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => (n == null ? void 0 : n.kind) === "file" && (!String(n.type || "").trim() || String(n.type).toLowerCase().startsWith("image/"))) : Array.from(e.files || []).some((n) => Qn(n)) : !1;
}
function cx(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, a = (h) => {
    var g, y, x;
    (g = h == null ? void 0 : h.preventDefault) == null || g.call(h), (y = h == null ? void 0 : h.stopPropagation) == null || y.call(h), (x = h == null ? void 0 : h.stopImmediatePropagation) == null || x.call(h);
  }, o = (h) => {
    if (Am(h == null ? void 0 : h.dataTransfer)) {
      a(h);
      try {
        h.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, u = (h) => {
    var g;
    h != null && h.relatedTarget && ((g = e.contains) != null && g.call(e, h.relatedTarget)) || n(!1);
  }, f = (h) => {
    var y;
    const g = Array.from(((y = h == null ? void 0 : h.dataTransfer) == null ? void 0 : y.files) || []).find((x) => Qn(x));
    if (!g) {
      n(!1);
      return;
    }
    a(h), n(!1), r(g);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", u, !0), e.addEventListener("drop", f, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", u, !0), e.removeEventListener("drop", f, !0), n(!1);
  };
}
async function jc(e, t = {}) {
  var u, f, h, g;
  if (!Qn(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((f = (u = globalThis.URL) == null ? void 0 : u.createObjectURL) == null ? void 0 : f.bind(globalThis.URL)), a = t.revokeObjectURL || ((g = (h = globalThis.URL) == null ? void 0 : h.revokeObjectURL) == null ? void 0 : g.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const o = r(e);
  try {
    const y = await new Promise((x, S) => {
      const M = new n();
      M.onload = () => x(M), M.onerror = () => S(new Error("image load failed")), M.src = o;
    });
    return {
      image: y,
      width: Math.max(1, Number(y.naturalWidth || y.width || 1)),
      height: Math.max(1, Number(y.naturalHeight || y.height || 1))
    };
  } finally {
    a == null || a(o);
  }
}
async function ks(e, { fetchApi: t } = {}) {
  if (!Qn(e)) throw new TypeError("A supported image file is required.");
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
const { app: Rt } = fs, Tu = D_();
function Vc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (fs == null ? void 0 : fs.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Hs = Math.PI / 180, ux = {}, fx = { Nu: 24, Nv: 14 }, dx = 10, hx = "pano_suite.ui_settings.v1", px = 120;
function ah() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1,
    preview_quality: "balanced"
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(hx)) || "").trim();
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
function mx() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ua(e) {
  var n, r, a, o, u;
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
    styleTransform: String(((u = e.style) == null ? void 0 : u.transform) || "")
  };
}
function gx() {
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
  const n = (r, a) => {
    const o = Number(r), u = Number(a);
    return !Number.isFinite(o) || !Number.isFinite(u) ? null : [o, u];
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
function Cm(e) {
  const t = Hc(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function bx(e, t, n) {
  Cm(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function Uc(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Iu(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Tm(e) {
  return zs(Iu(e));
}
function oh(e = null) {
  var o, u;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (o = Rt == null ? void 0 : Rt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : u.name) || "");
  return [t, r, n, a].join("|");
}
function Im(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = "dom", o = Uc(e);
      this.activeBackend = o;
      const u = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, h = n.noPreview === !0;
      if (o === a && o !== "none" && u === r && f === h) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = h, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && Ns(e), iS(e, { ...n, mode: r, __panoForcedPath: a }), this.activeBackend = Uc(e);
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
function yx(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Ns(e, t = {}) {
  var r, a, o, u, f;
  if (!e) return;
  Bc.unregister(e), yx(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      (f = (u = n.root) == null ? void 0 : u.remove) == null || f.call(u);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && (e.widgets = e.widgets.filter((h) => {
      if (h === (n == null ? void 0 : n.widget)) return !1;
      const g = String((h == null ? void 0 : h.name) || ""), y = String((h == null ? void 0 : h.type) || ""), x = Vc();
      return !(g === x || y === x || g === "pano_preview" || y === "pano_preview" || g === "preview" && y === "pano_preview");
    }));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function ki(e, t, n) {
  return { x: e, y: t, z: n };
}
function sh(e, t) {
  return ki(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Jo(e, t) {
  return ki(e.x * t, e.y * t, e.z * t);
}
function cc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function lh(e, t) {
  return ki(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Zo(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ki(e.x / t, e.y / t, e.z / t);
}
function gi(e, t) {
  const n = e * Hs, r = t * Hs, a = Math.cos(r);
  return ki(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function vx(e, t, n = 0) {
  const r = gi(e, t), a = ki(0, 1, 0);
  let o = lh(a, r);
  Math.hypot(o.x, o.y, o.z) < 1e-6 && (o = ki(1, 0, 0)), o = Zo(o);
  let u = Zo(lh(r, o));
  const f = n * Hs, h = Math.cos(f), g = Math.sin(f), y = sh(Jo(o, h), Jo(u, g)), x = sh(Jo(o, -g), Jo(u, h));
  return { fwd: r, right: Zo(y), up: Zo(x) };
}
function _x(e, t = "#00ff00") {
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
function xx(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = ha(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Bn(e) {
  var f, h;
  const t = xx(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((f = ha(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), a = Number(((h = ha(e, "coverage")) == null ? void 0 : h.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === n && o.bg === r && o.coverage === a)
    return o.parsed;
  const u = _x(t, r);
  return u.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: a, parsed: u }, u;
}
function ha(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function Em(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function Sx(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Dm(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Om(e, t, n = null) {
  var a, o;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((a = r == null ? void 0 : r.isSubgraphNode) != null && a.call(r))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = u ? (o = r.resolveSubgraphOutputLink) == null ? void 0 : o.call(r, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = Sx(e == null ? void 0 : e.graph, n)), r;
}
function wx(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Fm(e, t = []) {
  const n = wx(e), r = [];
  return t.forEach((a) => {
    n.includes(String(a)) && r.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !r.includes(a) && r.push(a);
  }), r.length ? r : t;
}
function ch(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Us(e, t) {
  const n = ch(e), r = ch(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function kx(e, t = ["erp_image", "bg_erp"]) {
  var h;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = Fm(e, t).map((g) => n.findIndex((y) => String((y == null ? void 0 : y.name) || "") === String(g))).filter((g) => g >= 0), o = n.map((g, y) => ({ input: g, idx: y })).filter(({ input: g }) => String((g == null ? void 0 : g.type) || "").toUpperCase() === "IMAGE").map(({ idx: g }) => g), u = [.../* @__PURE__ */ new Set([...a, ...o])], f = [];
  for (const g of u) {
    const y = Om(e, g);
    if ((y == null ? void 0 : y.id) != null) {
      f.push(String(y.id));
      continue;
    }
    const x = (h = n[g]) == null ? void 0 : h.link;
    if (x == null) continue;
    const S = Em(e == null ? void 0 : e.graph, x), { originId: M } = Dm(S);
    M != null && f.push(String(M));
  }
  return [...new Set(f)];
}
const Bc = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = dn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var g, y, x, S, M;
        if (!o) return;
        const u = Us(r, o == null ? void 0 : o.id);
        kx(o, ["erp_image", "bg_erp"]).some((v) => Us(r, v)), !(String(o.__panoPreviewMode || "") === "cutout" && !u) && (Lm(o), (y = (g = o.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || y.call(g), (x = o.setDirtyCanvas) == null || x.call(o, !0, !0), (M = (S = o.graph) == null ? void 0 : S.setDirtyCanvas) == null || M.call(S, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
      });
    }, dn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = dn) != null && e.removeEventListener) || (dn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Bs(e) {
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
  return typeof ((o = dn) == null ? void 0 : o.apiURL) == "function" ? dn.apiURL(a) : a;
}
function Nx(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Mx(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), o = r.join("/");
  return { filename: a, subfolder: o };
}
function Px(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function Ax(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Nx(t)) return [t];
  const { filename: n, subfolder: r } = Mx(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((o) => Bs({
    filename: n,
    subfolder: r,
    type: o
  }));
  return Px([...a, t]);
}
function Cx(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Bs({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function ho(e) {
  const t = Rt == null ? void 0 : Rt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const a = n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Us(o, a)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const u of o)
      if (Us(u, a)) return t[u];
  }
  return null;
}
function Gc(e, t, n = null) {
  const r = n || (e == null ? void 0 : e.__panoLastExecutedOutput) || ho(e == null ? void 0 : e.id), a = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(a) ? a[0] : a;
}
function mr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return mr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Bs({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = mr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Bs(e);
}
function uh(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Rm(e) {
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
function Eu(e, t) {
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
function Tx(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (o) => {
    Array.isArray(o) && o.forEach((u) => t.push(u));
  }, a = (o, u = 0) => {
    !o || u > 3 || n.has(o) || typeof o == "object" && (n.add(o), r(o.images), a(o.output, u + 1), a(o.ui, u + 1), a(o.data, u + 1), a(o.result, u + 1));
  };
  return a(e, 0), t;
}
function Ix(e, t) {
  try {
    e.__panoOwnOutputRev = I_(e.__panoOwnOutputRev);
    const n = Tx(t);
    let r = "";
    for (const a of n)
      if (r = mr(a), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), Eu(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function pa(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function fh(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!ol(e, "background"))
    return pa(e), null;
  const a = ho(r), o = F_(a, t, mr);
  if (!o)
    return pa(e), null;
  const u = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), f = Eu(o, u), h = `${t.join("|")}:${f}`, g = e.__panoOwnOutputVideoCache;
  if (g != null && g.video && g.key === h) return g.video;
  pa(e);
  const y = R_({
    documentRef: document,
    src: f,
    onFrame: n
  });
  return y ? (e.__panoOwnOutputVideoCache = { key: h, ...y }, y.video) : null;
}
function Ex(e, t = []) {
  var g, y;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = Fm(e, t).map((x) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(x))).filter((x) => x >= 0), o = n.map((x, S) => ({ input: x, idx: S })).filter(({ input: x }) => String((x == null ? void 0 : x.type) || "").toUpperCase() === "IMAGE").map(({ idx: x }) => x), u = [.../* @__PURE__ */ new Set([...a, ...o])];
  for (const x of u) {
    const S = n[x], M = S == null ? void 0 : S.link;
    if (M == null) continue;
    const v = Em(e.graph, M), { originId: E, originSlot: $ } = Dm(v);
    if (E == null) continue;
    const L = Om(e, x, E);
    if (!L) continue;
    const P = Number($ || 0), z = ho((L == null ? void 0 : L.id) ?? E), I = Array.isArray(z == null ? void 0 : z.images) ? z.images : [];
    if (I.length) {
      const le = [];
      P >= 0 && P < I.length && le.push(I[P]), le.push(...I);
      for (const ie of le) {
        const T = mr(ie);
        if (T)
          return String((S == null ? void 0 : S.name) || ""), { src: T, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let D = [];
    try {
      D = typeof (Rt == null ? void 0 : Rt.getNodeImageUrls) == "function" ? Rt.getNodeImageUrls(L) || [] : [];
    } catch {
      D = [];
    }
    if (Array.isArray(D) && D.length) {
      const le = [];
      P >= 0 && P < D.length && le.push(D[P]), le.push(...D);
      for (const ie of le) {
        const T = mr(ie);
        if (T)
          return String((S == null ? void 0 : S.name) || ""), { src: T, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const G = Array.isArray(L == null ? void 0 : L.imgs) ? L.imgs : [];
    if (G.length) {
      const le = [];
      P >= 0 && P < G.length && le.push(G[P]), le.push(...G);
      for (const ie of le) {
        const T = mr(ie);
        if (T)
          return String((S == null ? void 0 : S.name) || ""), { src: T, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const B = (g = L == null ? void 0 : L.widgets) == null ? void 0 : g.find((le) => String((le == null ? void 0 : le.name) || "").toLowerCase() === "image");
    if (B) {
      let le = mr(B.value);
      if (le && !le.includes("/") && !le.includes(":") && (L.comfyClass === "LoadImage" || L.type === "LoadImage") && (le = dn.apiURL(`/view?filename=${encodeURIComponent(le)}&type=input&subfolder=`)), le)
        return String((S == null ? void 0 : S.name) || ""), { src: le, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const f = ol(e, "background") ? ho(e == null ? void 0 : e.id) : null, h = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && h.push(...f.pano_input_images), Array.isArray((y = f == null ? void 0 : f.ui) == null ? void 0 : y.pano_input_images) && h.push(...f.ui.pano_input_images), h.length > 0)
    for (const x of h) {
      const S = mr(x);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Dx(e, t = [], n = {}) {
  const r = Ex(e, t), a = String((r == null ? void 0 : r.src) || "").trim();
  if (!a) return null;
  const o = Ax(a);
  if (!o.length) return null;
  const u = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = t.join("|") || "image", h = e.__panoLinkedInputImageCache.get(f);
  if (h && h.srcRaw === a && h.img) return h.img;
  if (h && h.pendingSrcRaw === a && h.pendingImg)
    return u && h.img && (h.img.complete || h.img.naturalWidth || h.img.width) ? h.img : h.pendingImg;
  const g = new Image(), y = h || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  y.pendingSrcRaw = a, y.pendingResolvedSrc = "", y.pendingImg = g, e.__panoLinkedInputImageCache.set(f, y);
  let x = -1;
  const S = () => {
    var v, E, $, L;
    if (x += 1, x >= o.length) {
      if (((E = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : E.call(v, f)) === y && y.pendingImg === g && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
        try {
          (L = ($ = e.__panoLinkedInputImageCache) == null ? void 0 : $.delete) == null || L.call($, f);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), o.length;
      return;
    }
    const M = o[x];
    y.pendingResolvedSrc = M, g.src = M;
  };
  return g.onload = () => {
    var M, v, E;
    ((v = (M = e.__panoLinkedInputImageCache) == null ? void 0 : M.get) == null ? void 0 : v.call(M, f)) === y && y.pendingImg === g && (y.srcRaw = a, y.resolvedSrc = String(y.pendingResolvedSrc || g.src || ""), y.img = g, y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null), String(y.pendingResolvedSrc || y.resolvedSrc || g.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (E = e.setDirtyCanvas) == null || E.call(e, !0, !0);
  }, g.onerror = (M) => {
    var v, E, $, L;
    if (x + 1 < o.length) {
      S();
      return;
    }
    if (((E = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : E.call(v, f)) === y && y.pendingImg === g && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
      try {
        (L = ($ = e.__panoLinkedInputImageCache) == null ? void 0 : $.delete) == null || L.call($, f);
      } catch {
      }
    String(y.pendingResolvedSrc || y.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((M == null ? void 0 : M.type) || "error");
  }, S(), u && y.img && (y.img.complete || y.img.naturalWidth || y.img.width) ? y.img : g;
}
function dh(e, t = [], n = null, r = {}) {
  const a = Dx(e, t, r);
  return a ? (typeof n == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => n(), { once: !0 })), a) : null;
}
function Lm(e) {
  var t, n, r, a;
  if (e) {
    Tu.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    try {
      (a = (r = e.__panoPreviewImageCache) == null ? void 0 : r.clear) == null || a.call(r);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, pa(e), e.__panoWrappedErpCache = null;
  }
}
function Ox(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, pa(e), e.__panoWrappedErpCache = null;
  }
}
function Fx(e) {
  var t, n;
  if (e)
    try {
      (n = (t = e.__panoPreviewImageCache) == null ? void 0 : t.delete) == null || n.call(t, "sticker_image_1");
    } catch {
    }
}
function zm(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Ba(e, t, n = "") {
  const r = zm(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = a), !0) : r.isLoading ? a - Number(r.loadingSinceTs || 0) < px ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function uc(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), u = n / a, f = r / o, h = Math.min(u, f);
  return Number.isFinite(h) && h > 0 ? h : 1;
}
function Rx(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), u = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), h = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), o * 0.44)), g = Math.max(Math.round(34 * n), f + Math.round(14 * n)), y = r + (o - h) * 0.5, x = a + (u - g) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(y, x, h, g, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", y + h * 0.5, x + g * 0.5 + 0.5), e.restore();
}
function Yi(e, t, n = "Connect ERP image") {
  var a;
  const r = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  r && (r.textContent = String(n || "Connect ERP image"), r.style.display = t ? "flex" : "none");
}
function Lx(e) {
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
function $m(e, t, n, r = null) {
  var M;
  e.__panoPreviewImageCache || (e.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const a = String(t || "");
  if (!a) return null;
  let o = Cx(n);
  if (!o && (r != null && r.external)) {
    if (!ol(e, "external-sticker")) return null;
    const v = e.__panoLastExecutedOutput || ho(e == null ? void 0 : e.id), E = ((M = v == null ? void 0 : v.ui) == null ? void 0 : M.pano_sticker_input_images) || (v == null ? void 0 : v.pano_sticker_input_images) || [];
    for (const $ of Array.isArray(E) ? E : [E])
      if (o = mr($), o) break;
  }
  if (!o) return null;
  const u = Gc(e, "pano_sticker_input_state_hash"), f = r != null && r.external ? String(u ?? "") : "", h = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, g = r != null && r.external ? Eu(o, h) : o, y = E_(o, f, h), x = e.__panoPreviewImageCache.get(a);
  if (x && x.src === g) return x.img;
  const S = Tu.get(e, y, g, () => {
    var v, E, $;
    r != null && r.external && ((v = e.__panoExternalStickerSync) == null || v.call(e, "image-loaded")), ($ = (E = e.__panoDomPreview) == null ? void 0 : E.requestDraw) == null || $.call(E);
  });
  return S ? (e.__panoPreviewImageCache.set(a, { src: g, img: S }), S) : null;
}
function zx(e, t) {
  return al(t, {
    selectedId: null,
    hoveredId: null
  });
}
function $x(e, t, n) {
  return qp(
    t,
    (r, a, o) => $m(e, r, a, o),
    { scene: n }
  );
}
function jx(e, t) {
  var x, S, M, v;
  const n = Gx(e, t), r = Kx(t), a = Array.isArray((x = t == null ? void 0 : t.painting) == null ? void 0 : x.groups) ? t.painting.groups : [], o = new Map(
    a.filter((E) => E && typeof E == "object").map((E) => [String((E == null ? void 0 : E.actionGroupId) || (E == null ? void 0 : E.id) || "").trim(), Number((E == null ? void 0 : E.z_index) || 0)])
  ), u = n ? r.map((E) => {
    const $ = n.getGroupDisplayCanvas(E);
    return $ ? {
      id: `paint_group:${E}`,
      source: $,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${E}`,
      zIndex: Number(o.get(E) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], f = Array.isArray((S = t == null ? void 0 : t.painting) == null ? void 0 : S.raster_objects) ? t.painting.raster_objects : [];
  if (f.length === 0)
    return (v = (M = e.__panoRasterObjectSurfaceCache) == null ? void 0 : M.retain) == null || v.call(M, []), u;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = T_()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var E, $;
    return ($ = (E = e.__panoDomPreview) == null ? void 0 : E.requestDraw) == null ? void 0 : $.call(E);
  });
  const h = P_(t == null ? void 0 : t.output_preset), g = f.filter((E) => (E == null ? void 0 : E.visible) !== !1 && String((E == null ? void 0 : E.layerKind) || "paint") === "paint").map((E) => String((E == null ? void 0 : E.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(g);
  const y = f.map((E) => {
    const $ = e.__panoRasterObjectSurfaceCache.get(
      E,
      h.width,
      h.height,
      e.__panoRasterObjectReady
    );
    return $ ? {
      id: `raster:${String((E == null ? void 0 : E.id) || "")}`,
      source: $.source,
      revision: $.revision,
      zIndex: Number((E == null ? void 0 : E.z_index) || 0),
      opacity: 1,
      visible: (E == null ? void 0 : E.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...u, ...y];
}
function fc(e, t, n, r = "") {
  const a = zx(e, t), o = $x(e, t, a), u = jx(e, t), f = Rm(n), h = Vm(n), g = Ya({
    stateRevision: [
      "runtime_cutout_scene",
      f,
      h.width,
      h.height,
      Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
      String(r || ""),
      Array.isArray(o) ? o.map((y) => `${String((y == null ? void 0 : y.assetId) || "")}:${String((y == null ? void 0 : y.revision) || "")}`).join(",") : "",
      Array.isArray(u) ? u.map((y) => `${String((y == null ? void 0 : y.id) || "")}:${String((y == null ? void 0 : y.revision) || "")}:${Number((y == null ? void 0 : y.zIndex) || 0)}`).join(",") : ""
    ].join("|"),
    backgroundSource: n,
    backgroundRevision: f,
    coverageDeg: Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
    scene: a,
    textures: o,
    rasterEntries: u,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  return e.__panoRuntimeCore || (e.__panoRuntimeCore = _o()), e.__panoRuntimeCore.syncState(g), e.__panoRuntimeCore;
}
function jm(e, t, n, r) {
  const a = cc(e, t.right), o = cc(e, t.up), u = cc(e, t.fwd);
  if (u <= 1e-4) return null;
  const f = o / u / r, h = a / u / r;
  return { x: n.x + n.w * 0.5 + h * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function Vx(e, t, n, r) {
  var o, u, f, h, g, y;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[1]) || 0)
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
      y: Number(t.canvasY) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[1]) || 0)
    };
  const a = Ux(e, t, r);
  return a || null;
}
function Hx(e, t) {
  var x, S;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (x = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : x.call(a), u = (t == null ? void 0 : t.ds) || ((S = Rt == null ? void 0 : Rt.canvas) == null ? void 0 : S.ds);
  if (!o || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const h = Array.isArray(u.offset) ? u.offset : [0, 0], g = (n - Number(o.left || 0)) / f - Number(h[0] || 0), y = (r - Number(o.top || 0)) / f - Number(h[1] || 0);
  return !Number.isFinite(g) || !Number.isFinite(y) ? null : { x: g, y };
}
function Ux(e, t, n) {
  var a, o;
  const r = Hx(t, n || (Rt == null ? void 0 : Rt.canvas));
  return r ? {
    x: r.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: r.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function Bx(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function Gx(e, t) {
  var g, y, x, S, M, v, E, $, L, P, z, I;
  const n = (y = (g = t == null ? void 0 : t.painting) == null ? void 0 : g.paint) == null ? void 0 : y.strokes, r = (S = (x = t == null ? void 0 : t.painting) == null ? void 0 : x.mask) == null ? void 0 : S.strokes, a = Array.isArray(n) && n.length > 0, o = Array.isArray(r) && r.length > 0;
  if (!a && !o) return null;
  const u = Bx(e, t), f = `${u.width}x${u.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = Ic(u), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const h = {
    paint: n || null,
    mask: r || null,
    groups: ((M = t == null ? void 0 : t.painting) == null ? void 0 : M.groups) || null,
    rasterObjects: ((v = t == null ? void 0 : t.painting) == null ? void 0 : v.raster_objects) || null
  };
  return (((E = e.__panoPreviewPaintRevision) == null ? void 0 : E.paint) !== h.paint || (($ = e.__panoPreviewPaintRevision) == null ? void 0 : $.mask) !== h.mask || ((L = e.__panoPreviewPaintRevision) == null ? void 0 : L.groups) !== h.groups || ((P = e.__panoPreviewPaintRevision) == null ? void 0 : P.rasterObjects) !== h.rasterObjects) && (e.__panoPreviewPaintRevision = h, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((z = t == null ? void 0 : t.painting) == null ? void 0 : z.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((I = t == null ? void 0 : t.painting) == null ? void 0 : I.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function Kx(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, a) => Number((r == null ? void 0 : r.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function Vm(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Wx(e, t, n, r) {
  const a = Nm(t, n, r);
  if (!a.visible) return null;
  const o = __(t);
  return e.save(), xm(e, a.boundaryEdges, { selected: !0 }), Sm(e, a, { accent: o }), e.restore(), a;
}
function Yx(e, t, n, r = null) {
  var M, v, E, $, L, P, z, I, D, G, B, le, ie, T, K, J;
  const a = String(e.__panoPreviewMode || "stickers");
  zm(e, a);
  const o = Bn(e);
  a === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (E = (v = (M = e.__panoCutoutNodeSurface) == null ? void 0 : M.session) == null ? void 0 : v.refresh) == null || E.call(v)) : a === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (P = (L = ($ = e.__panoStickersNodeSurface) == null ? void 0 : $.session) == null ? void 0 : L.refresh) == null || P.call(L));
  const u = t.parentElement, f = 1, h = Math.max(1, Number((u == null ? void 0 : u.clientWidth) || t.clientWidth || 0)), g = Math.max(1, Number((u == null ? void 0 : u.clientHeight) || t.clientHeight || 0)), y = Math.max(64, Math.round(h * f)), x = Math.max(64, Math.round(g * f)), S = t.getContext("2d");
  if (S)
    if (a === "cutout") {
      const he = Lx(o), pe = fh(
        e,
        ["pano_input_videos"],
        () => {
          var nt, Ve;
          return (Ve = (nt = e.__panoDomPreview) == null ? void 0 : nt.requestDraw) == null ? void 0 : Ve.call(nt);
        }
      ) || dh(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var nt, Ve;
          return (Ve = (nt = e.__panoDomPreview) == null ? void 0 : nt.requestDraw) == null ? void 0 : Ve.call(nt);
        },
        { preserveReadyWhilePending: !1 }
      ), fe = uh(pe);
      (t.width !== y || t.height !== x) && (t.width = y, t.height = x);
      const we = { x: 0, y: 0, w: y, h: x }, A = Vm(pe), ve = fe ? Y(Number(A.width / A.height), 0.05, 20) : 1, Ae = he ? yr(he) : null, Pe = Y(Number((Ae == null ? void 0 : Ae.aspect) || ve || 1), 0.05, 20), H = H1(we, Pe);
      e.__panoCutoutNodeFrame = H, uc(t, we), S.setTransform(1, 0, 0, 1, 0, 0), S.fillStyle = "#070707", S.fillRect(0, 0, y, x);
      let Le = "none", Qe = "Connect ERP image", yt = "";
      if (yt = String((pe == null ? void 0 : pe.currentSrc) || (pe == null ? void 0 : pe.src) || ""), he)
        if (pe && !fe)
          Le = "loading";
        else if (fe) {
          const nt = fc(e, o, pe, (he == null ? void 0 : he.id) || ""), Ve = U1({ width: y, height: x }, H, he), Vt = Ve.rect, Tn = yr(Ve.shot);
          let In = !0;
          if (Ve.fallback) {
            const R = Ve.fallback.rect, j = yr(Ve.fallback.shot);
            In = nt.renderToContext(
              S,
              R,
              j,
              { width: R.w, height: R.h, dpr: 1 }
            );
          }
          const nn = nt.renderToContext(
            S,
            Vt,
            Tn,
            { width: Vt.w, height: Vt.h, dpr: 1 }
          );
          let Nt = !0;
          Ve.fallback && (Nt = nt.renderToContext(
            S,
            H,
            yr(he),
            { width: H.w, height: H.h, dpr: 1 }
          )), (!In || !nn || !Nt) && (Le = "empty", Qe = "Open editor or run node");
        } else
          Le = "empty", Qe = "Connect ERP image";
      else {
        const nt = e.__panoLastCutoutShot;
        if (e.__panoPreviewView || (e.__panoPreviewView = nt ? {
          yaw: Number(nt.yaw_deg || 0),
          pitch: Number(nt.pitch_deg || 0),
          fov: 100
        } : { yaw: 0, pitch: 0, fov: 100 }), fe) {
          const Ve = fc(e, o, pe, "zero_shot_viewer"), Vt = ((I = (z = r == null ? void 0 : r.state) == null ? void 0 : z.drag) == null ? void 0 : I.active) === !0 || ((G = (D = r == null ? void 0 : r.state) == null ? void 0 : D.inertia) == null ? void 0 : G.active) === !0 ? 0.5 : 1;
          Ve.renderToContext(
            S,
            we,
            uo(e.__panoPreviewView, o == null ? void 0 : o.coverage),
            { width: we.w, height: we.h, dpr: 1, renderScale: Vt }
          ) || (Le = "empty", Qe = "Open editor or run node");
        } else pe ? Le = "loading" : (Le = "empty", Qe = "Connect ERP image");
      }
      he && (e.__panoLastCutoutShot = { ...he }, S.save(), S.fillStyle = "rgba(0,0,0,0.58)", S.beginPath(), S.rect(0, 0, y, x), S.rect(H.x, H.y, H.w, H.h), S.fill("evenodd"), S.restore(), S.save(), S.strokeStyle = "rgba(255,221,87,0.72)", S.lineWidth = 2, S.strokeRect(H.x + 0.5, H.y + 0.5, Math.max(0, H.w - 1), Math.max(0, H.h - 1)), S.restore()), Le === "loading" ? (Yi(e, !1), Ba(e, !0, yt)) : Le === "empty" ? (Yi(e, !0, Qe), Ba(e, !1, "")) : (Yi(e, !1), Ba(e, !1, ""));
    } else {
      Yi(e, !1), (t.width !== y || t.height !== x) && (t.width = y, t.height = x);
      const he = { x: 0, y: 0, w: y, h: x };
      S.setTransform(1, 0, 0, 1, 0, 0), S.fillStyle = "#070707", S.fillRect(0, 0, y, x), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const pe = fh(
        e,
        ["pano_input_videos"],
        () => {
          var Ae, Pe;
          return (Pe = (Ae = e.__panoDomPreview) == null ? void 0 : Ae.requestDraw) == null ? void 0 : Pe.call(Ae);
        }
      ) || dh(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var Ae, Pe;
          return (Pe = (Ae = e.__panoDomPreview) == null ? void 0 : Ae.requestDraw) == null ? void 0 : Pe.call(Ae);
        },
        { preserveReadyWhilePending: !1 }
      ), fe = pe || null, we = !pe || uh(fe), A = uo(e.__panoPreviewView, o == null ? void 0 : o.coverage);
      let ve = !1;
      if (we) {
        const Pe = fc(e, o, fe, pe ? "stickers_surface|background:input" : "stickers_surface|background:none"), H = Qx(e) || ((le = (B = r == null ? void 0 : r.state) == null ? void 0 : B.drag) == null ? void 0 : le.active) === !0 || ((T = (ie = r == null ? void 0 : r.state) == null ? void 0 : ie.inertia) == null ? void 0 : T.active) === !0 || ((K = e.__panoStickerDrag) == null ? void 0 : K.active) === !0;
        ve = Pe.renderToContext(
          S,
          he,
          A,
          { width: he.w, height: he.h, dpr: 1, renderScale: H ? 0.5 : 1 }
        );
      }
      if (we && ve)
        Ba(e, !1, "");
      else {
        const Ae = !!pe && !we;
        Ba(e, Ae, String((fe == null ? void 0 : fe.currentSrc) || (fe == null ? void 0 : fe.src) || "")), Ae && Rx(S, he, uc(t, he)), Yi(e, !1);
      }
      if (!pe && ve) {
        const Ae = Y(Number(A.fovDeg || 100), 1, 179) * Hs, Pe = Math.tan(Ae * 0.5) * (he.h / Math.max(1, he.w)), H = vx(Number(A.yawDeg || 0), Number(A.pitchDeg || 0), 0);
        Xx(S, he, H, Pe, uc(t, he));
      }
      if (ve) {
        Yi(e, !1);
        const Ae = String(((J = o == null ? void 0 : o.active) == null ? void 0 : J.selected_sticker_id) || ""), Pe = (Array.isArray(o == null ? void 0 : o.stickers) ? o.stickers : []).find((H) => String((H == null ? void 0 : H.id) || "") === Ae && (H == null ? void 0 : H.visible) !== !1);
        e.__panoSelectedStickerGeometry = Pe ? Wx(S, Pe, A, { width: y, height: x }) : null;
      } else
        e.__panoSelectedStickerGeometry = null;
    }
}
function qx(e, t, n, r, a, o, u = fx) {
  const f = Bn(e), h = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = _o());
  const g = Rm(o), y = Gp({
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
  if (!e.__panoBackgroundCore.syncState(y)) return;
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
function hh(e, t, n, r, a, o, u = 1) {
  let f = !1;
  e.strokeStyle = o, e.lineWidth = u, e.beginPath();
  for (const h of t) {
    const g = jm(h, n, r, a);
    if (!g) {
      f = !1;
      continue;
    }
    f ? e.lineTo(g.x, g.y) : (e.moveTo(g.x, g.y), f = !0);
  }
  e.stroke();
}
function Xx(e, t, n, r, a = 1) {
  e.save();
  const o = "#3f3f46", u = "rgba(250, 250, 250, 0.86)";
  for (let g = -75; g <= 75; g += 15) {
    const y = [];
    for (let x = -180; x <= 180; x += 4) y.push(gi(x, g));
    hh(e, y, n, t, r, g === 0 ? u : o, g === 0 ? 1.5 : 1);
  }
  for (let g = -180; g <= 180; g += 15) {
    const y = [];
    for (let x = -89; x <= 89; x += 4) y.push(gi(g, x));
    hh(e, y, n, t, r, o, g % 90 === 0 ? 1.3 : 1);
  }
  const f = [
    { name: "Front", dir: gi(0, 0) },
    { name: "Right", dir: gi(90, 0) },
    { name: "Back", dir: gi(180, 0) },
    { name: "Left", dir: gi(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const h = Math.max(9, Math.round(11 * a));
  e.font = `500 ${h}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", f.forEach((g) => {
    const y = jm(g.dir, n, t, r);
    y && e.fillText(g.name, y.x, y.y + 24 * a);
  }), e.restore();
}
function Jx(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function Zx(e) {
  const t = Jx(e);
  t.dragging = !1, t.hqFrames = dx;
}
function Kc(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function Qx(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function Wc(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function eS(e, t, n = 20) {
  var u;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (u = t.getBoundingClientRect) == null ? void 0 : u.call(t);
  if (!r) return !1;
  const a = Number(e.clientX) - Number(r.left || 0), o = Number(e.clientY) - Number(r.top || 0);
  return a >= r.width - n && o >= r.height - n;
}
function Vn(e, t) {
  return eS(e, t) ? !1 : (Wc(e), !0);
}
function ph() {
  var n;
  const e = (n = Rt == null ? void 0 : Rt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function mh(e) {
  var n;
  if (!e) return;
  const t = (n = Rt == null ? void 0 : Rt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function tS(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !Cm(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (a) {
    String((a == null ? void 0 : a.message) || a || "unknown");
  }
}
function nS(e, t = 0, n = null, r = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var o, u;
    e.__panoBootMinHeightTimer = null, (o = e == null ? void 0 : e.__panoDomPreview) != null && o.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function gh(e, t = null, n = 0, r = 0, a = !0) {
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
      e.__panoUserResized = !0, Kc(e, 150), t == null || t(), a && rS(e, 180, t);
    }
  };
}
function rS(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Ga(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function iS(e, t = {}) {
  var Gt;
  const n = t.__allowStandalone === !0, r = Tm(e);
  if (r && !n) {
    Iu(e);
    return;
  }
  r && tS(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = e.__panoPreviewMode === "stickers", o = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), String(t.__panoForcedPath || "").trim();
  const u = {
    signature: oh(e)
  }, f = "dom", h = u.signature || oh(e);
  if (Number(e.__panoRebindGeneration || 0), Uc(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Hc(e), e.__panoFrontendSig = h, e.__panoStickersPath = f, (Gt = e.__panoDomPreview) != null && Gt.widget || (e.__panoLegacyPreviewHooked && Ns(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const g = t.noPreview === !0, y = g ? 0 : 56, x = g ? 0 : j1, S = document.createElement("div");
  if (gx(), S.className = "pano-node-preview-dom", S.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), g && S.classList.add("pano-node-preview--no-preview"), S.setAttribute("data-capture-wheel", "true"), S.tabIndex = 0, S.style.cssText = [
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
    const V = e.addDOMWidget(Vc(), "preview", S, gh(e, null));
    Ga(e), e.__panoDomPreview = { widget: V, root: S, requestDraw: () => {
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
  const v = document.createElement("canvas");
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
  const E = document.createElement("div");
  E.style.cssText = [
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
  ].join(";"), E.textContent = "Connect ERP image", M.appendChild(v), M.appendChild(E), S.appendChild(M);
  const $ = Wp(S), L = document.createElement("div");
  L && (L.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", L.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", S.appendChild(L)), bx(e, 120, 120), Ga(e);
  let P = null;
  try {
    nS(e, y, () => {
      var V, ae;
      return (ae = (V = e.__panoDomPreview) == null ? void 0 : V.requestDraw) == null ? void 0 : ae.call(V);
    }), P = e.addDOMWidget(
      Vc(),
      "preview",
      S,
      gh(
        e,
        () => {
          var V, ae;
          return (ae = (V = e.__panoDomPreview) == null ? void 0 : V.requestDraw) == null ? void 0 : ae.call(V);
        },
        y,
        x,
        !1
      )
    );
  } catch {
    return;
  }
  const z = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, I = () => {
    z.destroyed || (z.needsDraw = !0, !z.inTick && !z.raf && (z.raf = requestAnimationFrame(H)));
  }, D = /* @__PURE__ */ xa(a ? { ..._m(Bn(e)), importing: !1, dropActive: !1 } : {
    ...lm(Bn(e)),
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((V) => ({ value: V, label: V }))
  });
  let G = null;
  const B = (a ? v_ : G1)({
    readState: () => Bn(e),
    publishLiveState: (V) => {
      V ? (G = V, e.__panoLiveStateOverride = V) : (e.__panoLiveStateOverride === G && (e.__panoLiveStateOverride = null), G = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, I();
    },
    commitState: (V) => {
      var ne, tt, Ue, mt;
      const ae = ha(e, "state_json");
      if (!ae) return;
      const Te = JSON.stringify(V);
      ae.value = Te, (ne = ae.callback) == null || ne.call(ae, Te), e.__panoStateCache = null, (tt = e.setDirtyCanvas) == null || tt.call(e, !0, !0), (mt = (Ue = e.graph) == null ? void 0 : Ue.setDirtyCanvas) == null || mt.call(Ue, !0, !0);
    },
    onChange: (V) => Object.assign(D, V)
  }), le = (V = "sync", ae = null) => {
    if (!a || !B || B.hasGestureChanges()) return !1;
    const Te = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((yn) => String((yn == null ? void 0 : yn.name) || "") === "sticker_image") : null, ne = (Te == null ? void 0 : Te.link) ?? null;
    if (ne == null)
      return B.apply({ type: "sync-external", value: { connected: !1 } });
    if (!ol(e, "external-sticker")) return !1;
    const tt = Gc(e, "pano_sticker_input_pose", ae), Ue = Array.isArray(tt) ? tt[0] : tt, mt = String(Gc(e, "pano_sticker_input_state_hash", ae) ?? ""), Dt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, Kt = Bn(e), rn = (Array.isArray(Kt == null ? void 0 : Kt.stickers) ? Kt.stickers : []).find((yn) => String((yn == null ? void 0 : yn.id) || "") === "sticker_image_1"), It = $m(e, "sticker_image_1", null, { external: !0 }), ai = Ue && typeof Ue == "object" ? Ue : rn || { yaw_deg: Dt.yaw, pitch_deg: Dt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return B.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: ne,
        stateHash: mt,
        pose: ai,
        imageWidth: Number((It == null ? void 0 : It.naturalWidth) || (It == null ? void 0 : It.width) || 0),
        imageHeight: Number((It == null ? void 0 : It.naturalHeight) || (It == null ? void 0 : It.height) || 0)
      }
    });
  };
  e.__panoExternalStickerSync = le;
  let ie = 0;
  const T = async (V) => {
    if (!a || !B || !Qn(V)) return !1;
    const ae = `asset_${Math.random().toString(16).slice(2, 10)}`, Te = `st_${Math.random().toString(16).slice(2, 10)}`, ne = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    ie += 1, D.importing = !0;
    const tt = $c(e, `add:${ae}`, async () => {
      const Ue = await jc(V), mt = await ks(V, {
        fetchApi: (Dt, Kt) => dn.fetchApi(Dt, Kt)
      });
      return we(), B.apply({
        type: "add-sticker",
        value: {
          stickerId: Te,
          assetId: ae,
          asset: mt,
          imageWidth: Ue.width,
          imageHeight: Ue.height,
          yaw_deg: Number(ne.yaw || 0),
          pitch_deg: Number(ne.pitch || 0)
        }
      });
    });
    try {
      return await tt;
    } catch {
      return !1;
    } finally {
      ie = Math.max(0, ie - 1), D.importing = ie > 0, I();
    }
  };
  let K = null, J = null, he = null, pe = !1;
  const fe = () => {
    var V;
    return he && (clearTimeout(he), he = null), pe ? (pe = !1, ((V = B == null ? void 0 : B.commitGesture) == null ? void 0 : V.call(B)) ?? !1) : !1;
  }, we = () => {
    var ne, tt, Ue;
    const V = fe(), ae = (K == null ? void 0 : K.pointerId) ?? (J == null ? void 0 : J.pointerId);
    if (K = null, J = null, e.__panoStickerDrag = null, ae != null) {
      try {
        (ne = v.hasPointerCapture) != null && ne.call(v, ae) && ((tt = v.releasePointerCapture) == null || tt.call(v, ae));
      } catch {
      }
      v.style.cursor = "grab";
    }
    const Te = ((Ue = B == null ? void 0 : B.commitGesture) == null ? void 0 : Ue.call(B)) ?? !1;
    return V || Te;
  }, A = () => we();
  B && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(A));
  let ve = null, Ae = !1;
  if (L && B)
    try {
      Au(), ve = gu(a ? m_ : l_, {
        model: D,
        onAction: (V) => {
          var ne, tt;
          if ((V == null ? void 0 : V.type) === "open-editor") {
            we(), a || (D.aspectOpen = !1), (ne = e.__panoOpenEditor) == null || ne.call(e);
            return;
          }
          if (a) {
            if ((V == null ? void 0 : V.type) === "add-image-file") {
              T(V.file);
              return;
            }
            B.apply(V) && I();
            return;
          }
          if ((V == null ? void 0 : V.type) === "toggle-aspect") {
            D.aspectOpen = !D.aspectOpen;
            return;
          }
          if ((V == null ? void 0 : V.type) === "close-aspect") {
            D.aspectOpen = !1;
            return;
          }
          let ae = V;
          if ((V == null ? void 0 : V.type) === "add-frame") {
            const Ue = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            ae = {
              ...V,
              yawDeg: Number(Ue.yaw || 0),
              pitchDeg: Number(Ue.pitch || 0),
              viewFovDeg: 100
            };
          } else if ((V == null ? void 0 : V.type) === "delete-frame") {
            const Ue = wi(Bn(e));
            Ue && (e.__panoPreviewView = {
              yaw: Number(Ue.yaw_deg || 0),
              pitch: Number(Ue.pitch_deg || 0),
              fov: 100
            });
          }
          const Te = ((tt = e.__panoCutoutNodeFrame) == null ? void 0 : tt.safeRect) || null;
          D.aspectOpen = !1, B.apply({ ...ae, safeRect: Te }) && I();
        }
      }), ve.mount(L), Ae = !0;
    } catch {
      ve = null, Ae = !1;
    }
  const Pe = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    Kc(e, 150), I();
  }) : null;
  Pe == null || Pe.observe(M);
  const H = (V) => {
    var Te, ne;
    z.raf = 0, z.inTick = !0;
    let ae = !1;
    try {
      ae = Le.stepInertia(V), (z.needsDraw || ae) && (z.needsDraw = !1, (Te = e.flags) != null && Te.collapsed || Yx(e, v, null, Le));
    } finally {
      z.inTick = !1;
    }
    (ae || z.needsDraw) && !z.raf && (z.raf = requestAnimationFrame(H)), mx() && (!e.__panoDebugLastTs || V - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = V, e.__panoPreviewMode, Hc(e), Ua(S), Ua(M), Ua(v), Ua(S.parentElement), Ua((ne = S.parentElement) == null ? void 0 : ne.parentElement), Number(v.width || 0), Number(v.height || 0), void 0);
  }, Le = wu({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (V) => {
      e.__panoPreviewView = V;
    },
    getViewportSize: () => {
      const V = v.getBoundingClientRect();
      return {
        w: Math.max(1, Number(V.width || v.clientWidth || 0)),
        h: Math.max(1, Number(V.height || v.clientHeight || 0))
      };
    },
    getInvert: () => {
      const V = ah();
      return {
        x: V.invert_view_x ? -1 : 1,
        y: V.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      I();
    }
  }), Qe = a ? M : S, yt = (V) => {
    const ae = v.getBoundingClientRect();
    return {
      x: (Number(V.clientX) - ae.left) * (v.width / Math.max(1, ae.width)),
      y: (Number(V.clientY) - ae.top) * (v.height / Math.max(1, ae.height))
    };
  }, nt = (V) => {
    var ne, tt;
    if (!a || !o) return;
    const ae = Bn(e), Te = Zd(
      ae == null ? void 0 : ae.stickers,
      String(((ne = ae == null ? void 0 : ae.active) == null ? void 0 : ne.selected_sticker_id) || ""),
      yt(V),
      uo(e.__panoPreviewView, ae == null ? void 0 : ae.coverage),
      { width: v.width, height: v.height }
    );
    if (!Te) {
      v.style.cursor = "grab";
      return;
    }
    if (((tt = Te.item) == null ? void 0 : tt.locked) === !0) {
      v.style.cursor = "default";
      return;
    }
    v.style.cursor = Te.hit.cursor || "default";
  };
  v.addEventListener("pointerdown", (V) => {
    var mt, Dt, Kt, rn, It, ai, bn, yn, Sa, wa, ka;
    if (!Vn(V, Qe) || V.button !== 0) return;
    if (!a) {
      const wn = wi(Bn(e)), $n = e.__panoCutoutNodeFrame;
      if (!wn) {
        (mt = S.focus) == null || mt.call(S, { preventScroll: !0 }), (Dt = v.setPointerCapture) == null || Dt.call(v, V.pointerId), v.style.cursor = "grabbing", Le.startDrag(V.clientX, V.clientY, V.pointerId);
        return;
      }
      if (wn.locked === !0 || !$n || !B) return;
      const So = yt(V);
      let oi;
      if (V.shiftKey) {
        const En = um({
          frame: $n,
          point: So,
          startRollDeg: Number(wn.roll_deg ?? wn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!En) return;
        oi = { kind: "roll", pointerId: V.pointerId, rollGesture: En };
      } else {
        const En = ((Kt = Bn(e)) == null ? void 0 : Kt.ui_settings) || ah();
        oi = {
          kind: "pan",
          pointerId: V.pointerId,
          startPoint: So,
          startShot: { ...wn },
          focalPx: fa($n, wn),
          invertX: En.invert_view_x === !0,
          invertY: En.invert_view_y === !0
        };
      }
      we(), (rn = S.focus) == null || rn.call(S, { preventScroll: !0 }), (It = v.setPointerCapture) == null || It.call(v, V.pointerId), v.style.cursor = "grabbing", B.beginGesture(), K = oi;
      return;
    }
    if (!o) return;
    const ae = yt(V), Te = Bn(e), ne = String(((ai = Te == null ? void 0 : Te.active) == null ? void 0 : ai.selected_sticker_id) || ""), tt = uo(e.__panoPreviewView, Te == null ? void 0 : Te.coverage), Ue = Zd(
      Te == null ? void 0 : Te.stickers,
      ne,
      ae,
      tt,
      { width: v.width, height: v.height }
    );
    if ((bn = S.focus) == null || bn.call(S, { preventScroll: !0 }), Ue && B) {
      if (Le.stopMotion(), we(), String(((yn = Ue.item) == null ? void 0 : yn.id) || "") !== ne && B.apply({ type: "select-sticker", id: Ue.item.id }), ((Sa = Ue.item) == null ? void 0 : Sa.locked) === !0) {
        I();
        return;
      }
      const wn = ae, $n = Ue.geometry.center;
      J = {
        active: !0,
        kind: Ue.hit.kind,
        pointerId: V.pointerId,
        startPoint: wn,
        startCenter: { ...$n },
        startSticker: { ...Ue.item },
        startDistance: Math.max(1, Math.hypot(wn.x - $n.x, wn.y - $n.y)),
        startAngle: Math.atan2(wn.y - $n.y, wn.x - $n.x),
        camera: tt,
        viewport: { width: v.width, height: v.height }
      }, e.__panoStickerDrag = J, B.beginGesture(), (wa = v.setPointerCapture) == null || wa.call(v, V.pointerId), v.style.cursor = Ue.hit.kind === "rotate" ? "grabbing" : Ue.hit.kind === "move" ? "move" : Ue.hit.cursor, I();
      return;
    }
    (ka = v.setPointerCapture) == null || ka.call(v, V.pointerId), v.style.cursor = "grabbing", Le.startDrag(V.clientX, V.clientY, V.pointerId);
  }), v.addEventListener("pointermove", (V) => {
    if (!a) {
      if (!K) {
        if (!Le.state.drag.active) return;
        Vn(V, Qe), Le.moveDrag(V.clientX, V.clientY, "pano");
        return;
      }
      if (K.pointerId !== V.pointerId || !B) return;
      if (Vn(V, Qe), K.kind === "pan") {
        const Te = yt(V);
        B.updateGesture({
          type: "pan-camera",
          startShot: K.startShot,
          dx: Te.x - K.startPoint.x,
          dy: Te.y - K.startPoint.y,
          focalPx: K.focalPx,
          invertX: K.invertX,
          invertY: K.invertY
        });
        return;
      }
      const ae = fm(K.rollGesture, yt(V), V);
      if (!ae) return;
      K.rollGesture = ae.gesture, B.updateGesture({ type: "set-roll", value: ae.rollDeg });
      return;
    }
    if (!J && !Le.state.drag.active) {
      nt(V);
      return;
    }
    if (J) {
      if (J.pointerId !== V.pointerId || !B) return;
      Vn(V, Qe);
      const ae = yt(V);
      let Te = J.startSticker;
      if (J.kind === "move")
        Te = k_(
          J.startSticker,
          {
            x: J.startCenter.x + ae.x - J.startPoint.x,
            y: J.startCenter.y + ae.y - J.startPoint.y
          },
          J.camera,
          J.viewport
        );
      else if (J.kind === "scale") {
        const ne = Math.hypot(ae.x - J.startCenter.x, ae.y - J.startCenter.y);
        Te = N_(J.startSticker, J.startDistance, ne);
      } else if (J.kind === "rotate") {
        const ne = Math.atan2(ae.y - J.startCenter.y, ae.x - J.startCenter.x);
        Te = M_(J.startSticker, J.startAngle, ne, V.shiftKey === !0);
      }
      B.updateGesture({ type: "set-transform", value: Te }), I();
      return;
    }
    !o || !Le.state.drag.active || (Vn(V, Qe), Le.moveDrag(V.clientX, V.clientY, "pano"));
  });
  const Ve = () => {
    var ae, Te;
    if (!K && !J) {
      if (!Le.state.drag.active) return;
      Le.endDrag(), v.style.cursor = "grab", I();
      return;
    }
    if (!B) return;
    const V = (K == null ? void 0 : K.pointerId) ?? (J == null ? void 0 : J.pointerId);
    K = null, J = null, e.__panoStickerDrag = null;
    try {
      (ae = v.hasPointerCapture) != null && ae.call(v, V) && ((Te = v.releasePointerCapture) == null || Te.call(v, V));
    } catch {
    }
    B.cancelGesture(), v.style.cursor = "grab", I();
  }, Vt = (V, ae = !1) => {
    var Te, ne, tt, Ue;
    if (!a) {
      if (!K) {
        if (!Le.state.drag.active) return;
        Vn(V, Qe), (Te = v.releasePointerCapture) == null || Te.call(v, V.pointerId), v.style.cursor = "grab", Le.endDrag(), I();
        return;
      }
      if (K.pointerId !== V.pointerId || !B) return;
      Vn(V, Qe), K = null, (ne = v.releasePointerCapture) == null || ne.call(v, V.pointerId), v.style.cursor = "grab", ae ? B.cancelGesture() : B.commitGesture(), nt(V), I();
      return;
    }
    if (J) {
      if (J.pointerId !== V.pointerId || !B) return;
      Vn(V, Qe), J = null, e.__panoStickerDrag = null, (tt = v.releasePointerCapture) == null || tt.call(v, V.pointerId), v.style.cursor = "grab", ae ? B.cancelGesture() : B.commitGesture(), I();
      return;
    }
    !o || !Le.state.drag.active || (Vn(V, Qe), (Ue = v.releasePointerCapture) == null || Ue.call(v, V.pointerId), v.style.cursor = "grab", Le.endDrag(), Zx(e), I());
  };
  v.addEventListener("pointerup", Vt), v.addEventListener("pointercancel", (V) => Vt(V, !0)), v.addEventListener("lostpointercapture", Ve), v.addEventListener("pointerleave", (V) => {
    !a && K || J || Le.state.drag.active && Vt(V);
  });
  const Tn = (V) => {
    const ae = document.activeElement;
    if (ae !== S && !S.contains(ae)) return;
    if (V.key === "Escape" && (K || J) && B) {
      Ve(), Wc(V);
      return;
    }
    if (!a || V.key !== "Delete" && V.key !== "Backspace" || !B) return;
    const Te = V.target, ne = String((Te == null ? void 0 : Te.tagName) || "").toUpperCase();
    ne === "INPUT" || ne === "TEXTAREA" || Te != null && Te.isContentEditable || D.canDelete === !0 && (we(), B.apply({ type: "delete-selected" }) && I(), Wc(V));
  };
  window.addEventListener("keydown", Tn, !0);
  const In = (V) => {
    var Te, ne, tt, Ue, mt, Dt;
    if (!Vn(V, Qe)) return;
    if (!a) {
      const Kt = wi(Bn(e));
      if (Kt && Kt.locked !== !0 && B) {
        const rn = Su(V);
        rn !== 0 && (pe || (we(), B.beginGesture(), pe = !0), B.updateGesture({
          type: "step-fov",
          direction: rn
        }) ? (he && clearTimeout(he), he = setTimeout(fe, 180), I()) : B.hasGestureChanges() || (B.cancelGesture(), pe = !1));
      } else if (!Kt) {
        const rn = ph();
        Le.applyWheelEvent(V) && I(), requestAnimationFrame(() => {
          mh(rn);
        });
      }
      (Te = V.preventDefault) == null || Te.call(V), (ne = V.stopPropagation) == null || ne.call(V), (tt = V.stopImmediatePropagation) == null || tt.call(V);
      return;
    }
    if (!o) return;
    const ae = ph();
    Le.applyWheelEvent(V) && I(), (Ue = V.preventDefault) == null || Ue.call(V), (mt = V.stopPropagation) == null || mt.call(V), (Dt = V.stopImmediatePropagation) == null || Dt.call(V), requestAnimationFrame(() => {
      mh(ae);
    });
  }, nn = a ? [M, v] : [M];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((V) => {
    nn.forEach((ae) => ae.addEventListener(V, In, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((V) => {
    v.addEventListener(V, (ae) => Vn(ae, Qe)), M.addEventListener(V, (ae) => Vn(ae, Qe));
  });
  const Nt = ha(e, "state_json");
  let R = null, j = null;
  Nt && !Nt.__panoPreviewPatchedCb && (R = Nt.callback, j = (V) => {
    const ae = R ? R(V) : void 0;
    return I(), ae;
  }, Nt.callback = j, Nt.__panoPreviewPatchedCb = j);
  const Q = ha(e, "bg_color");
  let _e = null, me = null;
  Q && !Q.__panoPreviewPatchedCb && (_e = Q.callback, me = (V) => {
    const ae = _e ? _e(V) : void 0;
    return I(), ae;
  }, Q.callback = me, Q.__panoPreviewPatchedCb = me);
  const O = e.onRemoved, ee = e.onResize, re = e.onExecuted, de = e.onDragOver, te = e.onDragDrop;
  let ke = null;
  const xe = () => {
    a && (D.dropActive = !0, ke && clearTimeout(ke), ke = setTimeout(() => {
      ke = null, D.dropActive = !1;
    }, 140));
  }, Ie = a ? function(V) {
    return (de ? de.apply(this, arguments) : !1) === !0 ? !0 : Am(V == null ? void 0 : V.dataTransfer) ? (xe(), !0) : !1;
  } : null, d = a ? function(V) {
    var ne;
    if ((te ? te.apply(this, arguments) : !1) === !0) return !0;
    const Te = Array.from(((ne = V == null ? void 0 : V.dataTransfer) == null ? void 0 : ne.files) || []).find((tt) => Qn(tt));
    return Te ? (ke && clearTimeout(ke), ke = null, D.dropActive = !1, T(Te), !0) : !1;
  } : null;
  a && (e.onDragOver = Ie, e.onDragDrop = d);
  const Oe = a ? cx(S, {
    onActive: (V) => {
      if (V) {
        xe();
        return;
      }
      ke && clearTimeout(ke), ke = null, D.dropActive = !1;
    },
    onDrop: (V) => {
      T(V);
    }
  }) : () => {
  }, ze = function(V) {
    Ix(e, V), e.__panoLastExecutedOutput = V || null, Lm(e), O_(e), le("executed", V), Ga(e), I();
    const ae = re ? re.apply(this, arguments) : void 0;
    return Ga(e), ae;
  };
  e.onExecuted = ze;
  const He = e.onConnectionsChange, qe = function(V, ae) {
    const Te = eh(e, V, ae, ["sticker_image"]), ne = eh(
      e,
      V,
      ae,
      ["erp_image", "bg_erp"]
    ), tt = arguments, Ue = He ? He.apply(this, tt) : void 0, mt = () => {
      z.destroyed || ((ne || Te) && (ne && (Qd(e, "background"), Ox(e)), Te && (Qd(e, "external-sticker"), e.__panoLastExecutedOutput = null, Fx(e))), Te && le("connection-change"), Ga(e), I());
    };
    return mt(), queueMicrotask(mt), Ue;
  };
  e.onConnectionsChange = qe;
  const pt = function() {
    const V = ee ? ee.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Kc(this, 150), I(), V;
  };
  e.onResize = pt;
  const rt = function() {
    return se(), Bc.unregister(this), O ? O.apply(this, arguments) : void 0;
  };
  e.onRemoved = rt;
  const se = () => {
    var V, ae, Te, ne, tt, Ue, mt, Dt, Kt, rn, It;
    z.destroyed = !0, (V = Pe == null ? void 0 : Pe.disconnect) == null || V.call(Pe), we(), v.removeEventListener("lostpointercapture", Ve), Oe(), $(), window.removeEventListener("keydown", Tn, !0), (Te = (ae = e.__panoStateFlushers) == null ? void 0 : ae.delete) == null || Te.call(ae, A), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (ne = B == null ? void 0 : B.destroy) == null || ne.call(B), (tt = ve == null ? void 0 : ve.unmount) == null || tt.call(ve), (mt = (Ue = e.__panoRuntimeCore) == null ? void 0 : Ue.dispose) == null || mt.call(Ue), e.__panoRuntimeCore = null, (Kt = (Dt = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Dt.dispose) == null || Kt.call(Dt), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, e.__panoExternalStickerSync = null, ke && clearTimeout(ke), ke = null, Tu.disposeOwner(e), pa(e), z.raf && cancelAnimationFrame(z.raf), z.raf = 0, ((rn = e.__panoCutoutNodeSurface) == null ? void 0 : rn.session) === B && (e.__panoCutoutNodeSurface = null), ((It = e.__panoStickersNodeSurface) == null ? void 0 : It.session) === B && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === pt && (e.onResize = ee), e.onExecuted === ze && (e.onExecuted = re), e.onConnectionsChange === qe && (e.onConnectionsChange = He), j && (Nt == null ? void 0 : Nt.callback) === j && (Nt.callback = R), j && (Nt == null ? void 0 : Nt.__panoPreviewPatchedCb) === j && delete Nt.__panoPreviewPatchedCb, me && (Q == null ? void 0 : Q.callback) === me && (Q.callback = _e), me && (Q == null ? void 0 : Q.__panoPreviewPatchedCb) === me && delete Q.__panoPreviewPatchedCb, e.onDragOver === Ie && (e.onDragOver = de), e.onDragDrop === d && (e.onDragDrop = te), e.onRemoved === rt && (e.onRemoved = O);
  };
  e.__panoDomRestore = se, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = B && Ae && !a ? { session: B, model: D } : null, e.__panoStickersNodeSurface = B && Ae && a ? { session: B, model: D } : null, e.__panoDomPreview = {
    widget: P,
    root: S,
    canvas: v,
    requestDraw: I,
    state: z,
    emptyHintEl: E,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Bc.register(e), le("attach"), I();
}
function bh(e, t = {}) {
  Im(e).attach({
    ...t,
    mode: "cutout"
  });
}
function yh(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (Tm(e) && !n) {
    Iu(e);
    return;
  }
  Im(e).attach(t);
}
function aS(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function oS(e, t = 1) {
  const n = Number(t), r = Number.isFinite(n) && n > 0 ? n : 1, a = Number(e == null ? void 0 : e.width), o = Number(e == null ? void 0 : e.height);
  return {
    width: Math.max(1, Math.round((Number.isFinite(a) ? a : 0) * r)),
    height: Math.max(1, Math.round((Number.isFinite(o) ? o : 0) * r))
  };
}
function sS({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var M;
  const a = typeof n == "function" ? n : () => {
  }, o = typeof r == "function" ? r : () => {
  };
  let u = !1, f = null;
  const h = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, g = () => {
    const v = h();
    return v === f || (f = v, a(v)), v;
  }, y = () => g();
  return (M = t == null ? void 0 : t.addEventListener) == null || M.call(t, "fullscreenchange", y), g(), { toggle: async () => {
    var v;
    if (u || !e || !t) return !1;
    if (h()) {
      try {
        await ((v = t.exitFullscreen) == null ? void 0 : v.call(t));
      } catch {
      }
      return g(), h();
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), h())
          return g(), !0;
      } catch {
      }
    return o(), g(), !1;
  }, isActive: h, destroy: () => {
    var v, E, $;
    if (!u) {
      if (u = !0, (v = t == null ? void 0 : t.removeEventListener) == null || v.call(t, "fullscreenchange", y), h())
        try {
          const L = (E = t.exitFullscreen) == null ? void 0 : E.call(t);
          ($ = L == null ? void 0 : L.catch) == null || $.call(L, () => {
          });
        } catch {
        }
      f = !1, a(!1);
    }
  } };
}
const lS = { class: "pano-preview-node-surface" }, cS = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (Me(), Ce("div", lS, [
      je(Jt, {
        icon: e.model.fullscreen ? ht(Ee).fullscreen_close : ht(Ee).fullscreen,
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
}, Qo = 140, uS = 180, vh = 40, dc = 10;
function _h(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function xh(e, t) {
  const n = _h(e), r = _h(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Sh(e) {
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
  return typeof ((o = dn) == null ? void 0 : o.apiURL) == "function" ? dn.apiURL(a) : a;
}
function ma(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return ma(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Sh({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = ma(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Sh(e);
}
function Hm(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function fS(e) {
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
  var a;
  const t = (a = tr) == null ? void 0 : a.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (xh(o, n)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (xh(o, n)) return t[o];
  return null;
}
function dS(e) {
  var r, a;
  const t = Yc(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (a = t == null ? void 0 : t.ui) == null ? void 0 : a.images,
    t == null ? void 0 : t.images
  ];
  for (const o of n)
    if (Array.isArray(o))
      for (const u of o) {
        const f = ma(u);
        if (f && /\.mp4(\?|$)/i.test(f) || f && String((u == null ? void 0 : u.format) || "").toLowerCase() === "video/mp4") return f;
      }
  return "";
}
function hS(e, t = "erp_image") {
  var v, E, $, L, P, z, I, D, G, B, le, ie;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = null;
  const a = n.find((T) => String((T == null ? void 0 : T.name) || "") === String(t));
  if ((a == null ? void 0 : a.link) != null && (r = a.link), r == null) {
    const T = n.find((K) => String((K == null ? void 0 : K.type) || "").toUpperCase() === "IMAGE" && (K == null ? void 0 : K.link) != null);
    (T == null ? void 0 : T.link) != null && (r = T.link);
  }
  if (r == null) return "";
  const o = ((E = (v = e == null ? void 0 : e.graph) == null ? void 0 : v.links) == null ? void 0 : E[r]) || ((P = (L = ($ = tr) == null ? void 0 : $.graph) == null ? void 0 : L.links) == null ? void 0 : P[r]);
  if (!o) return "";
  const u = Number(o.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (D = (I = (z = tr) == null ? void 0 : z.graph) == null ? void 0 : I.getNodeById) == null ? void 0 : D.call(I, u), h = Yc(u), g = Yc(e == null ? void 0 : e.id), y = [
    (G = g == null ? void 0 : g.ui) == null ? void 0 : G.pano_input_images,
    g == null ? void 0 : g.pano_input_images,
    h == null ? void 0 : h.images,
    (B = h == null ? void 0 : h.ui) == null ? void 0 : B.pano_input_images,
    h == null ? void 0 : h.pano_input_images
  ];
  for (const T of y)
    if (Array.isArray(T))
      for (const K of T) {
        const J = ma(K);
        if (J) return J;
      }
  let x = [];
  try {
    x = typeof ((le = tr) == null ? void 0 : le.getNodeImageUrls) == "function" ? tr.getNodeImageUrls(f) || [] : [];
  } catch {
    x = [];
  }
  if (Array.isArray(x) && x.length > 0)
    for (const T of x) {
      const K = ma(T);
      if (K) return K;
    }
  if (f) {
    const T = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const K of T) {
      const J = ma(K);
      if (J) return J;
    }
  }
  const S = (ie = f == null ? void 0 : f.widgets) == null ? void 0 : ie.find((T) => String((T == null ? void 0 : T.name) || "").toLowerCase() === "image"), M = String((S == null ? void 0 : S.value) || "").trim();
  return M ? dn.apiURL(`/view?filename=${encodeURIComponent(M)}&type=input&subfolder=`) : "";
}
function wh(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function kh(e, t, n, r, a, o) {
  var S, M, v;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !Hm(o) || n <= 1 || r <= 1) {
    wh(t, n, r);
    return;
  }
  const u = Jp(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * mn * 0.5), h = Number(((v = (M = (S = e == null ? void 0 : e.widgets) == null ? void 0 : S.find) == null ? void 0 : M.call(S, (E) => (E == null ? void 0 : E.name) === "coverage")) == null ? void 0 : v.value) || 360) === 180 ? 180 : 360;
  e.__panoStandaloneCore || (e.__panoStandaloneCore = _o());
  const g = fS(o), y = Gp({
    stateRevision: [
      "standalone_preview_scene",
      g,
      h
    ].join("|"),
    backgroundSource: o,
    backgroundRevision: g,
    coverageDeg: h,
    scene: al(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!e.__panoStandaloneCore.syncState(y) && (() => {
    const E = e.__panoStandaloneCore.renderToTarget(
      "preview_node",
      R1(a, h),
      { width: n, height: r, dpr: window.devicePixelRatio || 1 }
    );
    return E ? (t.drawImage(E, 0, 0, n, r), !0) : !1;
  })() || (qx(e, t, { x: 0, y: 0, w: n, h: r }, u, f, o, ux), wh(t, n, r));
}
function Nh(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class pS {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = wu({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Bt(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: Y(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: Y(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var a, o, u, f;
        const r = (o = (a = this.canvas) == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : o.call(a);
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
    var r, a, o;
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
    const n = ((o = (a = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : a.find) == null ? void 0 : o.call(a, (u) => (u == null ? void 0 : u.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...u) => {
      const f = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...u) : void 0;
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
        `min-height:${Qo}px`,
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
          return Qo;
        },
        getHeight() {
          return Qo;
        },
        onRemove: () => this.teardown(),
        afterResize: () => this.requestDraw()
      };
      if (this.widget = this.node.addDOMWidget("preview", "preview", this.root, n), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (a) => {
          const o = r ? r(a) || {} : {};
          return {
            ...o,
            minHeight: Math.max(Qo, Number(o.minHeight || 0)),
            minWidth: Math.max(uS, Number(o.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, n, r, a, o, u;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return Au(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ xa({ fullscreen: !1 }), this.fullscreenController = sS({
        root: this.root,
        documentRef: document,
        onChange: (f) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = f), this.requestDraw();
        },
        onFallback: () => {
          var f, h;
          return (h = (f = this.options).onOpen) == null ? void 0 : h.call(f, this.node);
        }
      }), this.surfaceApp = gu(cS, {
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
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (a = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || a.call(r), this.surfaceApp = null, (u = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || u.call(o), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var a;
    (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = Wp(n), t.addEventListener("pointerdown", (o) => {
      var u, f, h;
      o.button === 0 && ((u = n.focus) == null || u.call(n, { preventScroll: !0 }), (f = t.setPointerCapture) == null || f.call(t, o.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (h = o.stopImmediatePropagation) == null || h.call(o));
    }), t.addEventListener("pointermove", (o) => {
      var u;
      this.controller.state.drag.active && (this.controller.moveDrag(o.clientX, o.clientY, "pano"), o.preventDefault(), o.stopPropagation(), (u = o.stopImmediatePropagation) == null || u.call(o));
    });
    const r = (o) => {
      var u, f;
      this.controller.state.drag.active && ((u = t.releasePointerCapture) == null || u.call(t, o.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), o.preventDefault(), o.stopPropagation(), (f = o.stopImmediatePropagation) == null || f.call(o));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (o) => {
      var u;
      this.controller.applyWheelEvent(o), o.preventDefault(), o.stopPropagation(), (u = o.stopImmediatePropagation) == null || u.call(o);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (o) => {
      var u;
      this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (u = o.stopImmediatePropagation) == null || u.call(o);
    }), n.addEventListener("keydown", (o) => {
      var u;
      aS(o, n) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (u = o.stopImmediatePropagation) == null || u.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !Hm(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
    })) : (this.videoPaused = !0, this.img.pause()), this.requestDraw());
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), r;
    }, this.node.onMouseDown = function(n, r) {
      var u;
      const a = t.localPoint(r);
      if (!a) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const o = t.getLegacyPreviewRect();
      return Nh(a.x, a.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(a.x - o.x, a.y - o.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var u;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const a = t.localPoint(r);
      if (!a) return !0;
      const o = t.getLegacyPreviewRect();
      return t.controller.moveDrag(a.x - o.x, a.y - o.y, "pano"), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, a) {
      var h, g, y, x, S, M;
      const o = Vx(this, n, r, a), u = t.getLegacyPreviewRect();
      if (!o || !Nh(o.x, o.y, u))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((h = t.view) == null ? void 0 : h.fov) || 100);
      const f = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((g = t.view) == null ? void 0 : g.fov) || 100), f && ((y = this.setDirtyCanvas) == null || y.call(this, !0, !1)), (x = n == null ? void 0 : n.preventDefault) == null || x.call(n), (S = n == null ? void 0 : n.stopPropagation) == null || S.call(n), (M = n == null ? void 0 : n.stopImmediatePropagation) == null || M.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, a, o, u;
    const t = Math.max(80, Number(((a = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : a[0]) || 0) - dc * 2), n = Math.max(60, Number(((u = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : u[1]) || 0) - vh - dc);
    return { x: dc, y: vh, w: t, h: n };
  }
  drawLegacy(t) {
    var r, a;
    if (!t || (a = (r = this.node) == null ? void 0 : r.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (t.save(), t.translate(n.x, n.y), kh(this.node, t, n.w, n.h, this.view, this.img), this.errorText && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), t.restore());
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = oS(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var a, o, u;
    const t = dS(this.node);
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
    const n = hS(this.node, this.imageInputName);
    if (!n) {
      (o = this.mediaCleanup) == null || o.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (u = this.mediaCleanup) == null || u.call(this), this.mediaCleanup = null, this.imgSrc = n;
    const r = new Image();
    r.onload = () => {
      this.imgSrc === n && (this.img = r, this.requestDraw());
    }, r.onerror = () => {
      this.imgSrc === n && (this.img = null, this.requestDraw());
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), kh(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (a = this.node).setDirtyCanvas) == null || o.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, a, o, u, f, h, g, y, x, S, M, v, E, $, L, P, z, I;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || a.call(r), this.resizeObserver = null, (u = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || u.call(o), this.fullscreenController = null, (f = this.wheelCaptureCleanup) == null || f.call(this), this.wheelCaptureCleanup = null, (g = (h = this.surfaceApp) == null ? void 0 : h.unmount) == null || g.call(h), this.surfaceApp = null, (x = (y = this.surfaceHost) == null ? void 0 : y.remove) == null || x.call(y), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (S = this.mediaCleanup) == null || S.call(this), this.mediaCleanup = null;
    try {
      (v = (M = this.root) == null ? void 0 : M.remove) == null || v.call(M);
    } catch {
    }
    if (Array.isArray((E = this.node) == null ? void 0 : E.widgets) && this.widget)
      try {
        this.node.widgets = this.node.widgets.filter((D) => D !== this.widget);
      } catch {
      }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((P = (L = ($ = this.node) == null ? void 0 : $.widgets) == null ? void 0 : L.find) == null ? void 0 : P.call(L, (D) => (D == null ? void 0 : D.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), (I = (z = this.node.__panoStandaloneCore) == null ? void 0 : z.dispose) == null || I.call(z), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function mS(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new pS(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function Um(e, t, n) {
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
function Du(e) {
  return !!(e != null && e.prototype);
}
function po(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function gS(e, t = {}) {
  Du(e) || mS(e, {
    ...t,
    onOpen: po(e, t.onOpen)
  });
}
function bS(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!Du(e)) {
    yh(e, {
      ...r,
      onOpen: po(e, t.onOpen)
    });
    return;
  }
  Um(e, "stickers_node_preview", (a) => {
    yh(a, {
      ...r,
      onOpen: po(a, t.onOpen)
    });
  });
}
function yS(e, t = {}) {
  if (!Du(e)) {
    bh(e, {
      ...t,
      onOpen: po(e, t.onOpen)
    });
    return;
  }
  Um(e, "cutout_preview", (n) => {
    bh(n, {
      ...t,
      onOpen: po(n, t.onOpen)
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
}, Ar = "pen";
function Mh(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function vS(e = 80, t = null, n = 8) {
  const r = [];
  let a = -1;
  const o = Math.max(1, Number(e || 80)), u = Math.max(1, Number(n || 8));
  function f(g) {
    if (r.splice(0, r.length), a = -1, !g || typeof g != "object" || !Array.isArray(g.entries) || (g.entries.forEach((x) => {
      r.push(String(x || ""));
    }), !r.length)) return;
    const y = Number(g.index);
    Number.isInteger(y) ? y === -1 ? a = -1 : a = Math.max(0, Math.min(r.length - 1, y)) : a = r.length - 1;
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
      const g = r.length, y = Math.max(0, g - u), x = a >= 0 ? Math.max(0, Math.min(a, y)) : y, S = r.slice(x, x + u), M = a < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, a - x));
      return {
        version: 1,
        entries: S,
        index: M
      };
    },
    hydrate: f
  };
}
function Ph(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function _S(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: Y(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: Y(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function Ah(e = {}, t = 0) {
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
  return n === "sticker" ? (r.transform = _S((e == null ? void 0 : e.transform) || e), r.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (r.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, r.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), r;
}
function xS(e = {}) {
  var r, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return ya({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: Ph((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((r = e == null ? void 0 : e.objectPass) == null ? void 0 : r.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((o, u) => Ah(o, u)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = Ph((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((o, u) => Ah(o, u)).filter(Boolean);
  return ya({
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
function mo(e = {}) {
  const t = String((e == null ? void 0 : e.mode) || "panorama");
  return t === "cutout" ? {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: Y(Number((e == null ? void 0 : e.hFovDeg) || 90), 1, 179),
    vFovDeg: Y(Number((e == null ? void 0 : e.vFovDeg) || 60), 1, 179),
    aspect: Number((e == null ? void 0 : e.aspect) || 1),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : t === "unwrap" ? {
    mode: "unwrap",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: Y(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: Y(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  };
}
function Gs(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function SS(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || _o((e == null ? void 0 : e.coreOptions) || {});
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
  function u(x = {}) {
    const S = xS(x), M = o(S);
    return a === M || !n.syncState(S) ? !1 : (r = S, a = M, !0);
  }
  function f(x = {}, S = {}) {
    if (!r) return null;
    const M = mo(x), v = Gs(S);
    return n.renderToTarget(t, M, v);
  }
  function h(x, S, M = {}, v = {}) {
    if (!x || !S || !r) return !1;
    const E = mo(M), $ = Gs({
      ...v,
      width: Number((S == null ? void 0 : S.w) || (v == null ? void 0 : v.width) || 1),
      height: Number((S == null ? void 0 : S.h) || (v == null ? void 0 : v.height) || 1)
    });
    return n.renderToContext(x, S, E, $);
  }
  function g() {
    var x;
    r = null, a = "", (x = n.clearState) == null || x.call(n);
  }
  function y() {
    var x;
    g(), (x = n.dispose) == null || x.call(n);
  }
  return {
    isSupported: typeof (n == null ? void 0 : n.isSupported) == "function" ? () => n.isSupported() : () => !1,
    syncScene: u,
    renderFrame: f,
    renderToContext: h,
    snapshotScene: () => r,
    clearScene: g,
    dispose: y
  };
}
function wS(e, t, n) {
  return new Promise((r, a) => {
    e.toBlob((o) => {
      o ? r(o) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function kS(e, t = {}) {
  var h, g;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = mo((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), r = (t == null ? void 0 : t.output) || ((h = t == null ? void 0 : t.camera) == null ? void 0 : h.output) || ((g = t == null ? void 0 : t.view) == null ? void 0 : g.output) || null, a = Gs(
    r || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), o = e.renderFrame(n, a);
  if (!o) throw new Error("Panorama scene camera render returned null.");
  const u = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", f = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return wS(o, u, f);
}
function NS(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const r = document.createElement("canvas");
  r.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), r.style.width = "100%", r.style.height = "100%", r.style.display = "block", t.appendChild(r);
  const a = r.getContext("2d");
  let o = mo((n == null ? void 0 : n.view) || {}), u = !1, f = 0;
  function h() {
    const S = Number((n == null ? void 0 : n.width) || t.clientWidth || r.clientWidth || 1), M = Number((n == null ? void 0 : n.height) || t.clientHeight || r.clientHeight || 1), v = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), E = Gs({ width: S, height: M, dpr: v });
    return r.width = Math.max(1, Math.round(E.width * E.dpr)), r.height = Math.max(1, Math.round(E.height * E.dpr)), r.style.width = `${E.width}px`, r.style.height = `${E.height}px`, E;
  }
  function g() {
    if (u || !a) return !1;
    const S = h();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, r.width, r.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: r.width, h: r.height },
      o,
      { ...S, width: r.width, height: r.height, dpr: 1 }
    );
  }
  function y() {
    u || f || (f = requestAnimationFrame(() => {
      f = 0, g();
    }));
  }
  const x = typeof ResizeObserver == "function" ? new ResizeObserver(() => y()) : null;
  return x == null || x.observe(t), y(), {
    canvas: r,
    setView(S) {
      o = mo(S || {}), y();
    },
    getView() {
      return { ...o };
    },
    present: g,
    requestRender: y,
    unmount() {
      u = !0, f && cancelAnimationFrame(f), x == null || x.disconnect(), r.remove();
    }
  };
}
function MS(e = {}) {
  const t = SS({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, r = {}) {
      return t.renderFrame(yr(n), r);
    },
    renderShotToContext(n, r, a, o = {}) {
      return t.renderToContext(n, r, yr(a), o);
    },
    mount(n, r = {}) {
      const a = r != null && r.shot ? yr(r.shot) : r == null ? void 0 : r.view;
      return NS(t, n, { ...r, view: a });
    },
    exportFrame(n = {}) {
      const r = n != null && n.shot ? { ...n, camera: yr(n.shot) } : n;
      return kS(t, r);
    }
  };
}
function qi(e, t, n, r) {
  const a = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, r);
}
function PS(e = {}) {
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
function AS({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: o,
  hsv01ToRgb: u,
  getBrushPresetIdForTool: f,
  isActiveLassoTool: h
}) {
  var z, I;
  const g = e.primaryTool === "paint" || e.primaryTool === "mask", y = {
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
    historyEntries: Array.from({ length: 8 }, (D, G) => ({ index: G, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!g) return y;
  const x = ((z = t.find((D) => a(e.paintColor, D.color))) == null ? void 0 : z.id) || "", S = !x, M = o(e.customPaintColor), v = Math.round(Math.max(0, Math.min(1, Number(((I = e.customPaintColor) == null ? void 0 : I.a) ?? 1))) * 100), E = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), $ = e.brushSizes[E] ?? 10, L = h(), P = Array.from({ length: 8 }, (D, G) => e.customPaintHistory[G] || null);
  return {
    ...y,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: x,
    customColorActive: S,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...u(M.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, M.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, M.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, M.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, M.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, M.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, M.h)) * 100}%`,
    alphaValue: v,
    alphaText: `${v}%`,
    historyEntries: P.map((D, G) => ({
      index: G,
      color: D ? { cssColor: r(D, 1) } : null
    })),
    sizeValue: $,
    sizeText: String($),
    sizeFill: `${Math.max(0, Math.min(100, ($ - 1) / 119 * 100))}%`,
    sizeDisabled: L,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function CS({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function TS({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: a,
  selectedItems: o,
  params: u,
  notes: f,
  visibilityRows: h,
  uiSettings: g,
  normalizeCoverageValue: y
}) {
  return {
    coverage: { value: y(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || a === "stroke" || o.length > 1,
      label: "Copy State"
    },
    params: u,
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
function IS({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: a,
  allLocked: o,
  selectedLocked: u,
  activeAspect: f,
  cutoutAspectOpen: h,
  isExternalSticker: g,
  isStickerHidden: y,
  canRestoreSelectedToInitial: x,
  iconSet: S
}) {
  if (!(a != null && a.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let M = [];
  if (n.length > 1)
    M = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  else if (r === "stroke")
    M = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  else if (e === "stickers" || r === "image") {
    if (M = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back }
    ], g(t) || (M.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: S.duplicate }), M.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: S.replace_image })), g(t)) {
      const D = x(), G = y(t);
      M.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: D ? "Back to initial position" : "Already at initial position",
        icon: S.back_initial,
        disabled: !D
      }), M.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: G ? "Show" : "Hide",
        tip: G ? "Show input image" : "Hide input image",
        icon: G ? S.eye : S.eye_dashed
      });
    }
    M.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? S.lock_open : S.lock_closed }), g(t) || M.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete });
  } else
    M = [
      {
        key: "aspect",
        kind: "aspect",
        icon: S.aspect,
        open: !!h,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((D) => ({ value: D, label: D, active: f === D }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: S.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  const v = a.corners.map((D) => ({ x: Number(D == null ? void 0 : D.x), y: Number(D == null ? void 0 : D.y) })).filter((D) => Number.isFinite(D.x) && Number.isFinite(D.y));
  if (!v.length) return { visible: !1, left: 0, top: 0, items: [] };
  const E = v.map((D) => D.x), $ = v.map((D) => D.y), L = Math.min(...E), P = Math.max(...E), z = Math.min(...$), I = Math.max(...$);
  return {
    visible: !0,
    left: (L + P) * 0.5,
    top: I + 18,
    items: M,
    anchor: { minX: L, maxX: P, minY: z, maxY: I }
  };
}
const ES = { class: "pano-floating-right" }, DS = ["data-settled"], OS = ["data-ready", "data-settled"], FS = ["aria-label", "data-tip"], RS = {
  key: 1,
  class: "pano-camera-preview-label"
}, LS = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Ce(it, null, [
      X("div", ES, [
        (Me(!0), Ce(it, null, Lt(e.buttons, (r) => (Me(), Mi(Jt, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      _i(X("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        X("div", {
          class: ut(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: jt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = X("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, null, -1)),
          e.previewToggle.visible ? (Me(), Ce("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            je(Xt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, FS)) : Ft("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Me(), Ce("div", RS, ct(e.preview.label || "Preview unavailable"), 1)) : Ft("", !0)
        ], 14, OS)
      ], 8, DS), [
        [vo, e.preview.visible]
      ])
    ], 64));
  }
}, zS = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, $S = ["y2", "transform"], jS = ["transform"], VS = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (a, o) => o * 15), r = wt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (a, o) => _i((Me(), Ce("div", {
      class: ut(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Me(), Ce("svg", zS, [
        o[1] || (o[1] = X("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Me(!0), Ce(it, null, Lt(ht(n), (u) => (Me(), Ce("line", {
          key: u,
          class: ut(["pano-frame-roll-knob-tick", { zero: u === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: u % 45 === 0 ? 7 : 6,
          transform: `rotate(${u} 20 20)`
        }, null, 10, $S))), 128)),
        X("g", { transform: r.value }, [...o[0] || (o[0] = [
          X("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, jS),
        o[2] || (o[2] = X("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [vo, e.model.visible === !0]
    ]);
  }
}, HS = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Ce("div", {
      class: ut(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      je(hm, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      je(Jt, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      je(VS, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, US = ["aria-label"], BS = { class: "pano-canvas-confirm-title" }, GS = { class: "pano-canvas-confirm-text" }, KS = { class: "pano-canvas-confirm-actions" }, WS = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, YS = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ pn(null), r = /* @__PURE__ */ pn(null);
    let a = null;
    function o() {
      const x = r.value;
      return x ? Array.from(x.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((S) => S instanceof HTMLElement ? !S.hidden && S.tabIndex >= 0 && S.offsetParent !== null : !1) : [];
    }
    function u(x) {
      const S = r.value;
      if (!S) return;
      const M = S.querySelector(`[data-action='${x}']`);
      M instanceof HTMLButtonElement && M.click();
    }
    function f() {
      var E;
      const x = r.value;
      if (!x) return;
      const S = x.querySelector("[data-action='confirm-accept']");
      if (S instanceof HTMLElement) {
        S.focus();
        return;
      }
      const v = o()[0] || x;
      (E = v == null ? void 0 : v.focus) == null || E.call(v);
    }
    function h() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function g(x) {
      var L;
      if (x.defaultPrevented) return;
      if (x.key === "Escape") {
        x.preventDefault(), x.stopPropagation(), u("confirm-cancel");
        return;
      }
      if (x.key !== "Tab") return;
      const S = o(), M = r.value;
      if (!S.length) {
        x.preventDefault(), (L = M == null ? void 0 : M.focus) == null || L.call(M);
        return;
      }
      const v = S[0], E = S[S.length - 1], $ = document.activeElement;
      if (x.shiftKey) {
        ($ === v || $ === M || !(M != null && M.contains($))) && (x.preventDefault(), E.focus());
        return;
      }
      ($ === E || !(M != null && M.contains($))) && (x.preventDefault(), v.focus());
    }
    function y(x) {
      x.target === n.value && u("confirm-cancel");
    }
    return xi(() => t.model.visible, (x, S) => {
      if (x) {
        a = document.activeElement, cu(() => {
          f();
        });
        return;
      }
      S && h();
    }, { immediate: !0 }), tl(() => {
      h();
    }), (x, S) => e.model.visible === !0 ? (Me(), Ce("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: zn(y, ["self"])
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
        X("div", BS, ct(e.model.title), 1),
        X("div", GS, ct(e.model.text), 1),
        X("div", KS, [
          S[0] || (S[0] = X("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          X("button", WS, ct(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, US)
    ], 512)) : Ft("", !0);
  }
}, qS = ["data-paint-pane"], XS = ["hidden"], JS = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], ZS = ["aria-pressed", "disabled"], QS = ["hidden"], ew = { class: "pano-paint-color-pop-head" }, tw = { class: "pano-paint-color-field" }, nw = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, rw = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, iw = { class: "pano-paint-color-field" }, aw = { class: "pano-paint-alpha-wrap" }, ow = ["value"], sw = { "data-paint-alpha-value": "" }, lw = ["hidden"], cw = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, uw = ["data-paint-history-index", "aria-label", "disabled"], fw = ["data-paint-footer"], dw = ["data-paint-group"], hw = ["hidden"], pw = ["value", "disabled"], mw = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, gw = ["hidden"], bw = {
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
    return (r, a) => (Me(), Ce("div", {
      class: ut(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Me(!0), Ce(it, null, Lt(e.panes, (o) => {
        var u;
        return Me(), Ce("div", {
          key: o.key,
          class: ut(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Me(), Ce("div", {
            key: 0,
            class: ut(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Me(!0), Ce(it, null, Lt(e.paintSwatches, (f) => (Me(), Ce("button", {
              key: f.id,
              class: ut(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: jt(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, JS))), 128)),
            X("button", {
              class: ut(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: jt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, ZS),
            X("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: jt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              X("div", ew, [
                X("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: jt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = X("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              X("div", tw, [
                X("div", nw, [
                  X("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: jt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                X("div", rw, [
                  X("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: jt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              X("label", iw, [
                a[1] || (a[1] = X("span", null, "Opacity", -1)),
                X("div", aw, [
                  X("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, ow),
                  X("span", sw, ct(e.state.alphaText || "100%"), 1)
                ])
              ]),
              X("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                X("div", cw, [
                  (Me(!0), Ce(it, null, Lt(e.state.historyEntries || [], (f) => (Me(), Ce("button", {
                    key: f.index,
                    class: ut(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: jt(n(f.color))
                  }, null, 14, uw))), 128))
                ])
              ], 8, lw)
            ], 12, QS)
          ], 10, XS)) : Ft("", !0),
          X("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            X("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Me(!0), Ce(it, null, Lt(o.tools, (f) => {
                var h;
                return Me(), Mi(Jt, {
                  key: `${o.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((h = e.state.activeTools) == null ? void 0 : h[o.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, dw),
            X("div", {
              class: ut(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
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
                style: jt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, pw),
              X("span", mw, ct(e.state.sizeText || "10"), 1)
            ], 10, hw),
            X("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((u = e.state.clearVisible) == null ? void 0 : u[o.key]) ?? !o.clearHidden)
            }, [
              je(Jt, {
                icon: ht(Ee).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, gw)
          ], 8, fw)
        ], 10, qS);
      }), 128))
    ], 2));
  }
}, yw = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ pn(null), r = /* @__PURE__ */ pn(null), a = /* @__PURE__ */ pn(null);
    function o() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: a.value
      };
    }
    return t({ getRefs: o }), (u, f) => (Me(), Ce(it, null, [
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
}, vw = {
  key: 0,
  class: "pano-cutout-menu"
}, _w = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, xw = ["data-aspect"], Sw = ["data-action", "aria-label", "data-tip", "disabled"], ww = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Ce("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: jt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Me(!0), Ce(it, null, Lt(e.model.items || [], (r) => (Me(), Ce(it, {
        key: r.key
      }, [
        r.kind === "aspect" ? (Me(), Ce("div", vw, [
          X("button", _w, [
            je(Xt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          X("div", {
            class: ut(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Me(!0), Ce(it, null, Lt(r.choices || [], (a) => (Me(), Ce("button", {
              key: a.value,
              class: ut(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, ct(a.label), 11, xw))), 128))
          ], 2)
        ])) : (Me(), Ce("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          je(Xt, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, Sw))
      ], 64))), 128))
    ], 4));
  }
}, kw = {
  class: "pano-side",
  "data-side": ""
}, Nw = { class: "pano-side-head" }, Mw = { class: "pano-side-title" }, Pw = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, Aw = {
  key: 0,
  class: "pano-side-scroll"
}, Cw = { class: "pano-inspector" }, Tw = { class: "pano-ui-row pano-coverage-row" }, Iw = ["data-selected"], Ew = ["aria-pressed", "disabled"], Dw = ["aria-pressed", "disabled"], Ow = {
  key: 0,
  class: "pano-section-title"
}, Fw = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, Rw = {
  class: "pano-picker",
  "data-picker": "selection"
}, Lw = ["disabled"], zw = { class: "pano-picker-label" }, $w = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, jw = ["hidden"], Vw = ["data-selection-id"], Hw = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Uw = {
  key: 2,
  class: "pano-state-actions"
}, Bw = ["disabled"], Gw = ["data-key"], Kw = ["min", "max", "step", "value", "disabled", "data-param-key"], Ww = ["min", "max", "step", "value", "disabled", "data-param-key"], Yw = { class: "pano-visibility-section" }, qw = { class: "pano-visibility-stack" }, Xw = ["data-visibility-row"], Jw = { class: "pano-visibility-name" }, Zw = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, Qw = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], ek = ["open"], tk = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, nk = { class: "pano-ui-settings-body" }, rk = { class: "pano-ui-row" }, ik = ["data-selected"], ak = ["aria-pressed"], ok = ["aria-pressed"], sk = { class: "pano-ui-row" }, lk = ["data-selected"], ck = ["aria-pressed"], uk = ["aria-pressed"], fk = { class: "pano-ui-row" }, dk = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, hk = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, pk = { class: "pano-picker-label" }, mk = ["hidden"], gk = ["data-quality"], bk = {
  key: 1,
  class: "pano-side-footer"
}, yk = ["data-action"], vk = {
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
    function a(o, u) {
      return (u == null ? void 0 : u.paramsDisabled) === !0 || (o == null ? void 0 : o.enabled) === !1;
    }
    return (o, u) => {
      var f, h, g, y, x;
      return Me(), Ce("div", kw, [
        X("div", Nw, [
          X("div", Mw, [
            X("span", Pw, [
              je(Xt, {
                icon: ht(Ee).globe
              }, null, 8, ["icon"])
            ]),
            X("span", null, ct(e.nodeTitle), 1)
          ]),
          u[0] || (u[0] = X("div", { class: "pano-side-actions" }, null, -1))
        ]),
        u[13] || (u[13] = X("div", { class: "pano-divider" }, null, -1)),
        n.value ? (Me(), Ce("div", Aw, [
          X("div", Cw, [
            u[12] || (u[12] = X("div", { class: "pano-section-title" }, [
              X("span", null, "Scene")
            ], -1)),
            X("div", Tw, [
              u[1] || (u[1] = X("label", null, "Coverage", -1)),
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
                }, "360", 8, Ew),
                X("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((y = e.model.coverage) == null ? void 0 : y.value) === 180 ? "true" : "false",
                  disabled: ((x = e.model.coverage) == null ? void 0 : x.disabled) === !0
                }, "180", 8, Dw)
              ], 8, Iw)
            ]),
            e.model.transformTitle !== !1 ? (Me(), Ce("div", Ow, [...u[2] || (u[2] = [
              X("span", null, "Transform", -1)
            ])])) : Ft("", !0),
            e.model.selectionPicker ? (Me(), Ce("div", Fw, [
              X("label", null, ct(e.model.selectionPicker.label), 1),
              X("div", Rw, [
                X("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  X("span", zw, [
                    e.model.selectionPicker.currentIcon ? (Me(), Ce("span", $w, [
                      je(Xt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : Ft("", !0),
                    X("span", null, ct(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  u[3] || (u[3] = X("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, Lw),
                X("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Me(!0), Ce(it, null, Lt(e.model.selectionPicker.items || [], (S) => (Me(), Ce("button", {
                    key: S.id,
                    type: "button",
                    class: ut(["pano-picker-item", { active: S.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": S.id
                  }, [
                    S.icon ? (Me(), Ce("span", Hw, [
                      je(Xt, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : Ft("", !0),
                    X("span", null, ct(S.label), 1)
                  ], 10, Vw))), 128))
                ], 8, jw)
              ])
            ])) : Ft("", !0),
            e.model.copyStateButton ? (Me(), Ce("div", Uw, [
              X("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                je(Xt, {
                  icon: ht(Ee).copy
                }, null, 8, ["icon"]),
                X("span", null, ct(e.model.copyStateButton.label), 1)
              ], 8, Bw)
            ])) : Ft("", !0),
            X("div", {
              class: ut(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Me(!0), Ce(it, { key: 0 }, Lt(e.model.notes, (S) => (Me(), Ce("div", {
                key: S,
                class: "pano-param-note"
              }, ct(S), 1))), 128)) : (Me(!0), Ce(it, { key: 1 }, Lt(e.model.params || [], (S) => (Me(), Ce("div", {
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
                  style: jt(r(S)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": S.key
                }, null, 12, Kw),
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
                }, null, 8, Ww)
              ], 8, Gw))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Me(), Ce(it, { key: 3 }, [
              u[5] || (u[5] = X("div", { class: "pano-divider" }, null, -1)),
              X("div", Yw, [
                u[4] || (u[4] = X("div", { class: "pano-section-title" }, [
                  X("span", null, "Layers")
                ], -1)),
                X("div", qw, [
                  (Me(!0), Ce(it, null, Lt(e.model.visibilityRows, (S) => (Me(), Ce("div", {
                    key: S.key,
                    class: ut(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    X("span", Jw, [
                      X("span", Zw, [
                        je(Xt, {
                          icon: S.icon
                        }, null, 8, ["icon"])
                      ]),
                      X("span", null, ct(S.label), 1)
                    ]),
                    X("button", {
                      class: ut(["pano-visibility-toggle", { active: S.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": S.key,
                      "aria-label": S.ariaLabel,
                      "aria-pressed": S.visible === !0 ? "true" : "false",
                      "data-tip": S.tip,
                      disabled: S.enabled === !1
                    }, [
                      je(Xt, {
                        icon: S.visible === !0 ? ht(Ee).eye : ht(Ee).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, Qw)
                  ], 10, Xw))), 128))
                ])
              ])
            ], 64)) : Ft("", !0),
            e.model.uiSettings ? (Me(), Ce("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              X("summary", null, [
                u[6] || (u[6] = X("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                X("span", tk, [
                  je(Xt, {
                    icon: ht(Ee).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              X("div", nk, [
                X("div", rk, [
                  u[7] || (u[7] = X("label", null, "Drag X", -1)),
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
                    }, "Normal", 8, ak),
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, ok)
                  ], 8, ik)
                ]),
                X("div", sk, [
                  u[8] || (u[8] = X("label", null, "Drag Y", -1)),
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
                    }, "Normal", 8, ck),
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, uk)
                  ], 8, lk)
                ]),
                X("div", fk, [
                  u[10] || (u[10] = X("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  X("div", dk, [
                    X("button", hk, [
                      X("span", pk, ct(e.model.uiSettings.qualityLabel), 1),
                      u[9] || (u[9] = X("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    X("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Me(!0), Ce(it, null, Lt(e.model.uiSettings.qualityOptions || [], (S) => (Me(), Ce("button", {
                        key: S.value,
                        type: "button",
                        class: ut(["pano-picker-item", { active: S.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": S.value
                      }, ct(S.label), 11, gk))), 128))
                    ], 8, mk)
                  ])
                ]),
                u[11] || (u[11] = X("div", { class: "pano-ui-row" }, [
                  X("span"),
                  X("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, ek)) : Ft("", !0)
          ])
        ])) : Ft("", !0),
        (e.model.footerButtons || []).length ? (Me(), Ce("div", bk, [
          (Me(!0), Ce(it, null, Lt(e.model.footerButtons, (S) => (Me(), Ce("button", {
            key: S.action,
            class: ut(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, ct(S.label), 11, yk))), 128))
        ])) : Ft("", !0)
      ]);
    };
  }
}, _k = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Ce("div", {
      class: ut(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: jt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, ct(e.model.text || ""), 7));
  }
}, xk = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, Sk = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Me(), Ce("div", xk, [
      (Me(!0), Ce(it, null, Lt(e.buttons, (r) => _i((Me(), Mi(Jt, {
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
        [vo, r.visible !== !1]
      ])), 128))
    ]));
  }
}, wk = ["data-video-ready"], kk = { class: "pano-video-transport-shell" }, Nk = { class: "pano-video-controls-left" }, Mk = { class: "pano-video-filmstrip" }, Pk = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, Ak = ["src", "onLoad"], Ck = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, Tk = ["max", "value", "disabled"], Ik = { class: "pano-video-controls-right" }, Ek = ["data-has-audio"], Dk = { class: "pano-video-volume-pop" }, Ok = ["value", "disabled"], Fk = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = wt(() => {
      var D;
      return ((D = t.state) == null ? void 0 : D.playing) === !0 ? "Pause" : "Play";
    }), r = wt(() => {
      var D;
      return ((D = t.state) == null ? void 0 : D.playing) === !0 ? "Pause video" : "Play video";
    }), a = wt(() => {
      var D;
      return ((D = t.state) == null ? void 0 : D.playing) === !0 ? Ee.pause : Ee.play;
    }), o = wt(() => {
      var D;
      return ((D = t.state) == null ? void 0 : D.loop) === !1 ? "Enable loop" : "Disable loop";
    }), u = wt(() => {
      var D;
      return ((D = t.state) == null ? void 0 : D.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), f = wt(() => {
      var D;
      return ((D = t.state) == null ? void 0 : D.loop) === !1 ? Ee.loop_off : Ee.loop;
    }), h = wt(() => {
      var D, G;
      return ((D = t.state) == null ? void 0 : D.muted) === !0 || Number(((G = t.state) == null ? void 0 : G.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), g = wt(() => {
      var D, G, B;
      return ((D = t.state) == null ? void 0 : D.hasAudio) !== !0 ? Ee.volume : ((G = t.state) == null ? void 0 : G.muted) === !0 || Number(((B = t.state) == null ? void 0 : B.volume) ?? 1) <= 0 ? Ee.volume_muted : Ee.volume2;
    }), y = wt(() => {
      var D;
      return Math.max(0, Math.min(100, Number(((D = t.state) == null ? void 0 : D.progressPct) || 0)));
    }), x = wt(() => ({ left: `${y.value}%` })), S = wt(() => {
      var le, ie;
      const D = (le = t.state) == null ? void 0 : le.volumePct, G = Number(((ie = t.state) == null ? void 0 : ie.volume) ?? 1) * 100, B = Number(D ?? G ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, B))}%`
      };
    }), M = wt(() => {
      var B, le;
      const G = [
        String(((B = t.state) == null ? void 0 : B.currentTimeLabel) || "0:00"),
        String(((le = t.state) == null ? void 0 : le.durationLabel) || "0:00")
      ].reduce((ie, T) => Math.max(ie, T.length), 4);
      return `${Math.max(4, G)}ch`;
    }), v = wt(() => ({ "--pano-video-time-ch": M.value })), E = wt(() => {
      var B, le;
      const D = Array.isArray((B = t.state) == null ? void 0 : B.thumbnails) ? t.state.thumbnails : [];
      if (D.length) return D;
      const G = Math.max(7, Number(((le = t.state) == null ? void 0 : le.thumbnailCount) || 9));
      return Array.from({ length: G }, (ie, T) => ({
        id: `placeholder-${T}`,
        src: "",
        label: ""
      }));
    }), $ = /* @__PURE__ */ pn(/* @__PURE__ */ new Set()), L = (D) => String((D == null ? void 0 : D.id) || (D == null ? void 0 : D.src) || (D == null ? void 0 : D.label) || ""), P = (D) => $.value.has(L(D)), z = (D) => {
      const G = new Set($.value);
      G.add(L(D)), $.value = G;
    };
    xi(E, (D) => {
      const G = new Set(D.map(L)), B = /* @__PURE__ */ new Set();
      for (const le of $.value)
        G.has(le) && B.add(le);
      $.value = B;
    }, { immediate: !0 });
    const I = wt(() => {
      var D;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((D = t.state) == null ? void 0 : D.shellMaxWidthPx) || 640))}px`
      };
    });
    return (D, G) => (Me(), Ce("div", {
      class: ut(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: jt(I.value)
    }, [
      G[1] || (G[1] = X("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      X("div", kk, [
        X("div", Nk, [
          je(Jt, {
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
            style: jt(v.value)
          }, ct(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        X("div", Mk, [
          X("div", Pk, [
            (Me(!0), Ce(it, null, Lt(E.value, (B) => (Me(), Ce("div", {
              key: L(B),
              class: ut(["pano-video-thumb", {
                "is-placeholder": !B.src,
                "is-loaded": B.src && P(B)
              }])
            }, [
              B.src ? (Me(), Ce("img", {
                key: 0,
                src: B.src,
                alt: "",
                draggable: "false",
                onLoad: (le) => z(B)
              }, null, 40, Ak)) : (Me(), Ce("span", Ck))
            ], 2))), 128))
          ]),
          X("div", {
            class: "pano-video-playhead",
            style: jt(x.value),
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
          }, null, 8, Tk)
        ]),
        X("div", Ik, [
          X("div", {
            class: "pano-video-time pano-video-time-end",
            style: jt(v.value)
          }, ct(e.state.durationLabel || "0:00"), 5),
          je(Jt, {
            "extra-class": "pano-video-control",
            icon: f.value,
            label: o.value,
            tip: u.value,
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
            X("div", Dk, [
              X("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: jt(S.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, Ok)
            ]),
            je(Jt, {
              "extra-class": "pano-video-control",
              icon: g.value,
              label: h.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, Ek)
        ])
      ])
    ], 14, wk));
  }
}, Rk = { class: "pano-floating-top" }, Lk = ["data-selected", "data-view-count"], zk = ["data-view", "aria-pressed", "aria-label", "disabled"], $k = { class: "label" }, jk = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return Me(), Ce("div", Rk, [
        X("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Me(!0), Ce(it, null, Lt(e.buttons, (a) => _i((Me(), Ce("button", {
            key: a.key,
            class: ut(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            je(Xt, {
              icon: a.icon
            }, null, 8, ["icon"]),
            X("span", $k, ct(a.label), 1)
          ], 10, zk)), [
            [vo, a.visible !== !1]
          ])), 128))
        ], 8, Lk)
      ]);
    };
  }
};
function Bm(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Ee.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Ee.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Ee.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Ee.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Ee.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Ee.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Ee.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Ee.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Ee.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Ee.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Ee.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Ee.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Ee.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Ee.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Ee.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Ee.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Ee.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Ee.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Ee.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Ee.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Ee.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Ee.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Ee.lasso_tool }
        ]
      }
    ]
  };
}
const Vk = ["aria-label"], Hk = { class: "pano-stage-wrap" }, Uk = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, Bk = {
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
    let o = "", u = !1, f = null;
    const h = /* @__PURE__ */ pn(null), g = /* @__PURE__ */ pn(null), y = /* @__PURE__ */ pn(null);
    function x() {
      var T, K;
      return ((K = (T = y.value) == null ? void 0 : T.getRefs) == null ? void 0 : K.call(T)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function S(T) {
      var K, J;
      return ((J = (K = g.value) == null ? void 0 : K.open) == null ? void 0 : J.call(K, T)) === !0;
    }
    function M(T) {
      a("image-file-selected", T);
    }
    function v(T) {
      a("image-file-cancelled", T);
    }
    t({ getPaintOverlayRefs: x, openImagePicker: S });
    const E = wt(() => r.readOnly === !0), $ = wt(() => r.shellPreset || Bm(r.type)), L = wt(() => {
      var K, J, he;
      const T = String((((K = r.uiState) == null ? void 0 : K.stageStatus) === "failed" ? (J = r.uiState) == null ? void 0 : J.stageStatusDetail : (he = r.uiState) == null ? void 0 : he.stageWarningDetail) ?? "");
      return T === "background" ? "Background preview unavailable. Re-run the node to refresh it." : T === "stickers" ? "One or more sticker previews are unavailable." : T === "frame" ? "The editor hit a rendering error. Check the browser console for details." : T.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), P = wt(() => {
      var K;
      const T = Array.isArray((K = $.value) == null ? void 0 : K.floatingButtons) ? $.value.floatingButtons.slice() : [];
      return E.value && T.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ee.fullscreen
      }), T;
    });
    function z() {
      const T = h.value;
      return T ? Array.from(T.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((K) => K instanceof HTMLElement ? !K.hidden && K.tabIndex >= 0 && K.offsetParent !== null : !1) : [];
    }
    function I() {
      var J;
      const K = z()[0] || h.value;
      (J = K == null ? void 0 : K.focus) == null || J.call(K);
    }
    function D() {
      var T;
      f != null && f.isConnected && ((T = f.focus) == null || T.call(f)), f = null;
    }
    function G(T) {
      var K, J, he, pe;
      if (!T.defaultPrevented) {
        if (T.key === "Tab") {
          const fe = z();
          if (!fe.length) {
            T.preventDefault(), (J = (K = h.value) == null ? void 0 : K.focus) == null || J.call(K);
            return;
          }
          const we = fe[0], A = fe[fe.length - 1], ve = document.activeElement;
          if (T.shiftKey) {
            (ve === we || ve === h.value || !((he = h.value) != null && he.contains(ve))) && (T.preventDefault(), A.focus());
            return;
          }
          (ve === A || !((pe = h.value) != null && pe.contains(ve))) && (T.preventDefault(), we.focus());
          return;
        }
        T.key === "Escape" && a("close");
      }
    }
    function B() {
      u || (o = document.body.style.overflow, document.body.style.overflow = "hidden", u = !0);
    }
    function le() {
      u && (document.body.style.overflow = o, u = !1);
    }
    function ie(T) {
      document.removeEventListener("keydown", G), T ? (f || (f = document.activeElement), B(), document.addEventListener("keydown", G), cu(() => {
        I();
      })) : (le(), D());
    }
    return du(() => {
      ie(r.open);
    }), tl(() => {
      le(), document.removeEventListener("keydown", G), D();
    }), xi(() => r.open, (T) => {
      ie(T);
    }), (T, K) => e.open ? (Me(), Ce("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: K[0] || (K[0] = zn((J) => a("close"), ["self"]))
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
        X("div", Hk, [
          K[1] || (K[1] = X("canvas", {
            class: "pano-stage pano-stage-bg",
            "data-stage-background": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          K[2] || (K[2] = X("canvas", {
            class: "pano-stage pano-stage-overlay",
            "data-stage-overlay": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          K[3] || (K[3] = X("div", {
            class: "pano-stage-loading",
            "aria-hidden": "true"
          }, null, -1)),
          e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Me(), Ce("div", Uk, ct(L.value), 1)) : Ft("", !0),
          K[4] || (K[4] = X("div", {
            class: "pano-stage-drop-hint",
            "aria-hidden": "true"
          }, [
            X("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
          ], -1)),
          je(yw, {
            ref_key: "paintOverlaysRef",
            ref: y
          }, null, 512),
          je(pm, {
            ref_key: "imageFilePickerRef",
            ref: g,
            onFileSelected: M,
            onFileCancelled: v
          }, null, 512),
          E.value ? Ft("", !0) : (Me(), Ce(it, { key: 1 }, [
            je(Sk, {
              buttons: e.uiState.toolButtons || $.value.toolButtons || []
            }, null, 8, ["buttons"]),
            je(HS, {
              model: e.uiState.frameRail || {}
            }, null, 8, ["model"]),
            je(bw, {
              "paint-swatches": e.paintSwatches,
              panes: $.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          je(Fk, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          je(jk, {
            buttons: e.uiState.viewButtons || $.value.viewButtons || []
          }, null, 8, ["buttons"]),
          je(LS, {
            buttons: e.uiState.floatingButtons || P.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          je(ww, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          je(_k, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          je(YS, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? Ft("", !0) : (Me(), Mi(vk, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, Vk)
    ])) : Ft("", !0);
  }
}, hr = "loading", _a = "ready", gr = "failed";
function Gm(e, t = "") {
  return e && (e.__panoLoadState = hr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Km(e, t = "") {
  return e && (e.__panoLoadState = _a, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Wm(e, t = "") {
  return e && (e.__panoLoadState = gr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function qc(e, t) {
  return e ? e.__panoLoadState === gr ? gr : typeof t == "function" && t(e) ? _a : hr : _a;
}
function Xc(e) {
  return qc(e) === gr;
}
function Gk({ presented: e, background: t = _a, stickers: n = [] } = {}) {
  if (!e) return { status: hr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], a = t === hr, o = r.includes(hr);
  if (a && o) return { status: hr, detail: "mixed" };
  if (a) return { status: hr, detail: "background" };
  if (o) return { status: hr, detail: "stickers" };
  const u = t === gr, f = r.includes(gr);
  return u && f ? { status: gr, detail: "mixed" } : u ? { status: gr, detail: "background" } : f ? { status: gr, detail: "stickers" } : { status: _a, detail: "" };
}
function Xi(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const a = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(a) : a;
}
function Ch(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function Kk(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Th(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Wk(e, t, n = null) {
  var a, o;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((a = r == null ? void 0 : r.isSubgraphNode) != null && a.call(r))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = u ? (o = r.resolveSubgraphOutputLink) == null ? void 0 : o.call(r, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = Kk(e == null ? void 0 : e.graph, n)), r;
}
function Yk(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function qk(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function Xk(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function Jk({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const a = (I) => {
    if (!I) return "";
    if (typeof I == "string") return String(I || "").trim();
    if (Array.isArray(I)) {
      if (I.length === 0) return "";
      if (I.length === 1) return a(I[0]);
      const D = String(I[0] || "").trim();
      if (D)
        return Xi(t, {
          filename: D,
          subfolder: String(I[1] || "").trim(),
          type: String(I[2] || "output").trim() || "output"
        });
      for (const G of I) {
        const B = a(G);
        if (B) return B;
      }
      return "";
    }
    return typeof (I == null ? void 0 : I.src) == "string" && I.src ? I.src : typeof (I == null ? void 0 : I.url) == "string" && I.url ? I.url : Xi(t, I);
  }, o = (I) => {
    if (!I || typeof I != "object") return "";
    const D = String(I.type || "").trim().toLowerCase();
    if (D === "dataurl") return String(I.value || "");
    if (D !== "comfy_image") return "";
    const G = String(I.filename || "").trim();
    return G ? Xi(t, {
      filename: G,
      subfolder: String(I.subfolder || ""),
      type: String(I.storage || "input")
    }) : "";
  }, u = (I) => {
    const D = e == null ? void 0 : e.nodeOutputs;
    if (!D || I == null) return null;
    const G = String(I);
    return D instanceof Map ? D.get(I) || D.get(G) || D.get(Number(G)) || null : D[I] || D[G] || null;
  }, f = (I, D) => {
    var B;
    const G = u(I == null ? void 0 : I.id);
    return Array.isArray((B = G == null ? void 0 : G.ui) == null ? void 0 : B[D]) ? G.ui[D] : Array.isArray(G == null ? void 0 : G[D]) ? G[D] : [];
  }, h = (I, D) => {
    const G = u(I == null ? void 0 : I.id);
    return G != null && G.ui && Object.prototype.hasOwnProperty.call(G.ui, D) ? G.ui[D] : G && Object.prototype.hasOwnProperty.call(G, D) ? G[D] : null;
  }, g = (I, D) => {
    const G = h(I, "pano_sticker_input_state_hash"), B = Array.isArray(G) ? G[0] : G;
    return String(B ?? "").trim() || Xk(D);
  }, y = (I) => {
    const D = [], G = /* @__PURE__ */ new Set();
    for (const B of I || []) {
      const le = a(B);
      !le || G.has(le) || (G.add(le), D.push(le));
    }
    return D;
  }, x = (I, D) => {
    var le;
    const G = [];
    Array.isArray(I == null ? void 0 : I.images) && I.images.length && G.push(I.images), Array.isArray((le = I == null ? void 0 : I.ui) == null ? void 0 : le.images) && I.ui.images.length && G.push(I.ui.images);
    const B = [];
    for (const ie of G)
      D >= 0 && D < ie.length && B.push(ie[D]), B.push(...ie);
    return B;
  }, S = (I, D) => {
    var Ae;
    const G = String(D || "").trim();
    if (!G) return { src: "", sourceType: "", inputName: "" };
    const B = Array.isArray(I == null ? void 0 : I.inputs) ? I.inputs : [], le = B.findIndex((Pe) => String((Pe == null ? void 0 : Pe.name) || "") === G);
    if (le < 0) return { src: "", sourceType: "", inputName: G };
    const ie = B[le], T = ie == null ? void 0 : ie.link;
    if (T == null) return { src: "", sourceType: "", inputName: G };
    const { originId: K, originSlot: J } = Th(Ch(I == null ? void 0 : I.graph, T));
    if (K == null) return { src: "", sourceType: "", inputName: G };
    const he = Wk(I, le, K);
    if (!he) return { src: "", sourceType: "", inputName: G };
    const pe = Number(J || 0);
    let fe = [];
    try {
      fe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(he) || [] : [];
    } catch {
      fe = [];
    }
    if (Array.isArray(fe) && fe.length) {
      const Pe = [];
      pe >= 0 && pe < fe.length && Pe.push(fe[pe]), Pe.push(...fe);
      const H = y(Pe);
      if (H.length)
        return { src: H[0], srcCandidates: H, sourceType: "appNodeImageUrls", inputName: G };
    }
    const we = y(x(u((he == null ? void 0 : he.id) ?? K), pe));
    if (we.length)
      return { src: we[0], srcCandidates: we, sourceType: "nodeOutputs", inputName: G };
    const A = Array.isArray(he == null ? void 0 : he.imgs) ? he.imgs : [];
    if (A.length) {
      const Pe = [];
      pe >= 0 && pe < A.length && Pe.push(A[pe]), Pe.push(...A);
      const H = y(Pe);
      if (H.length)
        return { src: H[0], srcCandidates: H, sourceType: "nodeImgs", inputName: G };
    }
    const ve = (Ae = he == null ? void 0 : he.widgets) == null ? void 0 : Ae.find((Pe) => String((Pe == null ? void 0 : Pe.name) || "").toLowerCase() === "image");
    if (ve) {
      let Pe = a(ve.value);
      if (Pe && !Pe.includes("/") && !Pe.includes(":") && (he.comfyClass === "LoadImage" || he.type === "LoadImage") && (Pe = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Pe)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Pe)}&type=input&subfolder=`), Pe) return { src: Pe, sourceType: "widget", inputName: G };
    }
    return { src: "", sourceType: "", inputName: G };
  }, M = (I, D = []) => {
    const G = Array.isArray(D) ? D : [D];
    for (const B of G) {
      const le = S(I, B);
      if (String((le == null ? void 0 : le.src) || "").trim()) return le;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, v = (I) => {
    const D = String(I || "").trim();
    if (!D) return [];
    if (Yk(D)) return [D];
    const { filename: G, subfolder: B } = qk(D);
    return G ? y([
      Xi(t, { filename: G, subfolder: B, type: "temp" }),
      Xi(t, { filename: G, subfolder: B, type: "output" }),
      Xi(t, { filename: G, subfolder: B, type: "input" }),
      D
    ]) : [D];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (I) => {
      var D, G;
      try {
        (G = (D = I == null ? void 0 : I.__panoLinkedInputImageCache) == null ? void 0 : D.forEach) == null || G.call(D, (B, le, ie) => {
          var T;
          B != null && B.img && ((T = r == null ? void 0 : r.isImageLoadFailed) != null && T.call(r, B.img)) && ie.delete(le);
        });
      } catch {
      }
    },
    externalStateHash: g,
    invalidateUiImage: (I, D) => {
      var G;
      (G = I == null ? void 0 : I.delete) == null || G.call(I, `__ui__${String(D || "")}`);
    },
    linkedValue: (I, D) => {
      var ie, T, K, J;
      const G = String(D || ""), B = Array.isArray(I == null ? void 0 : I.inputs) ? I.inputs.find((he) => String((he == null ? void 0 : he.name) || "") === G) : null;
      if ((B == null ? void 0 : B.link) != null) {
        const { originId: he, originSlot: pe } = Th(Ch(I == null ? void 0 : I.graph, B.link)), fe = u(he), we = [
          fe == null ? void 0 : fe.output,
          fe == null ? void 0 : fe.result,
          (ie = fe == null ? void 0 : fe.data) == null ? void 0 : ie.output,
          (T = fe == null ? void 0 : fe.data) == null ? void 0 : T.result,
          (K = fe == null ? void 0 : fe.ui) == null ? void 0 : K.output,
          (J = fe == null ? void 0 : fe.ui) == null ? void 0 : J.result
        ];
        for (const A of we) {
          if (!Array.isArray(A)) continue;
          const ve = A[Number(pe || 0)];
          if (typeof ve == "string" && ve.trim()) return ve;
        }
      }
      const le = Array.isArray(I == null ? void 0 : I.widgets) ? I.widgets.find((he) => String((he == null ? void 0 : he.name) || "") === G) : null;
      return String((le == null ? void 0 : le.value) || "");
    },
    loadPreferredExactLinkedImage: (I, D = [], G = null, B = "") => {
      var Le;
      const le = Array.isArray(D) ? D : [D], ie = M(I, le), K = (Array.isArray(ie == null ? void 0 : ie.srcCandidates) && ie.srcCandidates.length ? ie.srcCandidates : [ie == null ? void 0 : ie.src]).map((Qe) => String(Qe || "").trim()).filter(Boolean);
      if (!K.length) return null;
      const J = y(K.flatMap((Qe) => v(Qe)));
      if (!J.length) return null;
      I.__panoLinkedInputImageCache || (I.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const he = String(B || le.join("|") || "image_exact"), pe = K.join(`
`), fe = I.__panoLinkedInputImageCache.get(he);
      if (fe && fe.srcRaw === pe && fe.img) return fe.img;
      const we = n || globalThis.Image;
      if (typeof we != "function") return null;
      const A = new we();
      (Le = r == null ? void 0 : r.markImageLoading) == null || Le.call(r, A, pe);
      const ve = { srcRaw: pe, resolvedSrc: "", img: A };
      I.__panoLinkedInputImageCache.set(he, ve);
      let Ae = -1;
      const Pe = (Qe) => {
        var yt, nt, Ve;
        Qe === "ready" ? (yt = r == null ? void 0 : r.markImageReady) == null || yt.call(r, A, pe) : (nt = r == null ? void 0 : r.markImageFailed) == null || nt.call(r, A, pe), G == null || G(A), (Ve = I.setDirtyCanvas) == null || Ve.call(I, !0, !0);
      }, H = () => {
        if (Ae += 1, Ae >= J.length) {
          Pe("failed");
          return;
        }
        ve.resolvedSrc = J[Ae], A.src = ve.resolvedSrc;
      };
      return A.onload = () => Pe("ready"), A.onerror = () => {
        if (Ae + 1 < J.length) {
          H();
          return;
        }
        Pe("failed");
      }, H(), A;
    },
    output: u,
    resolvePreferredExactLinkedSource: M,
    source: a,
    uiImage: (I, D, G, B = null) => {
      var pe, fe, we;
      const le = f(I, D)[0] || null, ie = a(le);
      if (!ie) return null;
      const T = `__ui__${D}`, K = (pe = G == null ? void 0 : G.get) == null ? void 0 : pe.call(G, T);
      if (K && K.__panoSrc === ie) return K;
      const J = n || globalThis.Image;
      if (typeof J != "function") return null;
      const he = new J();
      return he.__panoSrc = ie, (fe = r == null ? void 0 : r.markImageLoading) == null || fe.call(r, he, ie), he.onload = () => {
        var A;
        (A = r == null ? void 0 : r.markImageReady) == null || A.call(r, he, ie), B == null || B(he);
      }, he.onerror = () => {
        var A;
        (A = r == null ? void 0 : r.markImageFailed) == null || A.call(r, he, ie), B == null || B(he);
      }, he.src = ie, (we = G == null ? void 0 : G.set) == null || we.call(G, T, he), he;
    },
    uiList: f,
    uiValue: h
  };
}
const Zk = "state_json", es = "sticker_image_1", Qk = "external_image", ts = "pano_sticker_input_images", eN = !0, Ms = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], cn = Math.PI / 180, Dr = 180 / Math.PI, hc = 1, tN = "rgb(255, 221, 87)", nN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, rN = 64, Ih = 40, pc = 16, iN = 0.45, Eh = 180, aN = 160, Ks = 24, oN = 4, sN = 4, ns = /* @__PURE__ */ new Map(), Dh = /* @__PURE__ */ new Map(), ei = /* @__PURE__ */ new Map(), lN = 12, er = Jk({
  app: tr,
  api: dn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Xc,
    markImageFailed: Wm,
    markImageLoading: Gm,
    markImageReady: Km
  }
}), cN = er.assetSource, uN = er.source, mc = er.uiImage, fN = er.invalidateUiImage, dN = er.resolvePreferredExactLinkedSource, gc = er.loadPreferredExactLinkedImage;
function rs(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function hN(e) {
  return 1 - Math.pow(1 - e, 3);
}
function pN(e, t, n) {
  const r = Y((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function mN(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = ei.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (ei.delete(t), ei.set(t, n), n);
}
function gN(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (ei.delete(n), ei.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); ei.size > lN; ) {
      const a = ei.keys().next().value;
      if (!a) break;
      ei.delete(a);
    }
}
function bN(e) {
  return e * e * e;
}
function br(e, t, n) {
  return { x: e, y: t, z: n };
}
function is(e, t) {
  return br(e.x + t.x, e.y + t.y, e.z + t.z);
}
function as(e, t) {
  return br(e.x * t, e.y * t, e.z * t);
}
function Zn(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function os(e, t) {
  return br(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Ji(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return br(e.x / t, e.y / t, e.z / t);
}
function sr(e, t) {
  const n = e * cn, r = t * cn, a = Math.cos(r);
  return br(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function ss(e) {
  return {
    yaw: Bt(Math.atan2(e.x, e.z) * Dr),
    pitch: Y(Math.asin(Y(e.y, -1, 1)) * Dr, -90, 90)
  };
}
function Cr(e, t) {
  let n = !1;
  for (let r = 0, a = t.length - 1; r < t.length; a = r++) {
    const o = t[r].x, u = t[r].y, f = t[a].x, h = t[a].y;
    u > e.y != h > e.y && e.x < (f - o) * (e.y - u) / (h - u || 1e-6) + o && (n = !n);
  }
  return n;
}
function Jr(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function bc(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), u = Number(e.y || 0) - Number(t.y || 0), f = r * r + a * a;
  if (f <= 1e-6) return Jr(e, t);
  const h = Y((o * r + u * a) / f, 0, 1), g = Number(t.x || 0) + r * h, y = Number(t.y || 0) + a * h, x = Number(e.x || 0) - g, S = Number(e.y || 0) - y;
  return x * x + S * S;
}
function Hn(e, t, n) {
  return e + (t - e) * n;
}
function lr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Y(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Y(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Y(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Y(n, 0, 1)})`;
}
function yN(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let ls = { fillStyle: "", url: "" };
function vN(e, t, n) {
  if (ls.url && ls.fillStyle === String(e || ""))
    return ls.url;
  const r = yN(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Ks}" height="${Ks}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return ls = { fillStyle: String(e || ""), url: r }, r;
}
function Ps(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function Fn(e) {
  return {
    r: Y(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Y(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Y(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Y(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function ln(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function _N(e) {
  return Ms.some((t) => Ps(e, t.color));
}
function yc(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, a = Y(Number(t), 0, 1), o = Y(Number(n), 0, 1);
  if (a <= 1e-6) return { r: o, g: o, b: o };
  const u = Math.floor(r * 6), f = r * 6 - u, h = o * (1 - a), g = o * (1 - f * a), y = o * (1 - (1 - f) * a);
  switch (u % 6) {
    case 0:
      return { r: o, g: y, b: h };
    case 1:
      return { r: g, g: o, b: h };
    case 2:
      return { r: h, g: o, b: y };
    case 3:
      return { r: h, g, b: o };
    case 4:
      return { r: y, g: h, b: o };
    default:
      return { r: o, g: h, b: g };
  }
}
function vc(e) {
  const t = Y(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = Y(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = Y(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, r), o = Math.min(t, n, r), u = a - o;
  let f = 0;
  u > 1e-6 && (a === t ? f = ((n - r) / u + (n < r ? 6 : 0)) / 6 : a === n ? f = ((r - t) / u + 2) / 6 : f = ((t - n) / u + 4) / 6);
  const h = a <= 1e-6 ? 0 : u / a;
  return { h: f, s: h, v: a };
}
function Zi(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const Ym = "pano_suite.ui_settings.v1", qm = "pano_suite.node_grid_visibility.v1";
let ra = null, cr = null;
function As(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function xN() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Ym)) || "").trim();
    if (!t) return ra ? As(ra) : null;
    const n = JSON.parse(t), r = As(n);
    return ra = r, r;
  } catch {
    return ra ? As(ra) : null;
  }
}
function SN(e) {
  var n;
  const t = As(e);
  ra = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Ym, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Xm() {
  var e;
  if (cr && typeof cr == "object")
    return cr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(qm)) || "").trim();
    if (!t)
      return cr = {}, cr;
    const n = JSON.parse(t);
    return cr = n && typeof n == "object" ? n : {}, cr;
  } catch {
    return cr = {}, cr;
  }
}
function wN(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = Xm()[n];
  return typeof a == "boolean" ? a : !!t;
}
function kN(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = Xm();
  r[n] = !!t, cr = r;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(qm, JSON.stringify(r));
  } catch {
  }
}
function NN(e) {
  var r, a;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Oh(e) {
  const { paintCount: t, maskCount: n } = NN(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let a = 0, o = 0;
  return r.forEach((u) => {
    String((u == null ? void 0 : u.layerKind) || "paint") === "mask" ? o += 1 : a += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: a,
    maskRasterCount: o,
    totalPaintCount: t + a,
    totalMaskCount: n + o
  };
}
function Qi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function cs(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function MN(e, t) {
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
function us(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function PN(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function AN(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function CN(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function TN(e, t, n = {}) {
  var Xf;
  await Pm(e, { tolerateOperationFailure: !0 }), er.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? r, o = r, u = MN(e, t);
  await Au();
  const f = cs(e, "output_preset"), h = cs(e, "coverage"), g = cs(e, "bg_color"), y = cs(e, Zk), x = () => {
    const i = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return gc(
      e,
      i,
      () => ye(),
      `background:size:${i.join("|")}`
    );
  }, S = () => {
    const i = x();
    return CN(i);
  }, M = (i = 2048) => {
    const s = f == null ? void 0 : f.value;
    return AN(s) ? S() || Math.max(1, Math.round(Number(i || 2048))) : PN(s, i);
  }, v = Mm(String((y == null ? void 0 : y.value) || ""), {
    outputPreset: M(2048),
    backgroundColor: String((g == null ? void 0 : g.value) || "#00ff00"),
    coverage: tn(h == null ? void 0 : h.value),
    sharedUiSettings: xN()
  });
  e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = 0, t === "cutout" && (v.shots = Array.isArray(v.shots) ? v.shots.slice(0, 1) : [], v.shots.length || (v.active.selected_shot_id = null));
  const E = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(v.shots) ? v.shots : [], s = String(((l = v == null ? void 0 : v.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((c) => String((c == null ? void 0 : c.id) || "") === s) || i[0] || null;
  })() : null, $ = E ? df(E, !1) : { width: 220, height: 132 }, L = Bm(t), P = /* @__PURE__ */ xa({
    stageStatus: hr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (L.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    toolButtons: (L.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...(L.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Ee.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Ee.aspect,
      rotateIcon: Ee.rotate_90,
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
      icon: Ee.fullscreen,
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
      customColorCss: lr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: lr({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: $.width,
      height: $.height,
      label: E ? "Loading preview" : "Add Frame to preview"
    }
  }), z = document.createElement("div");
  document.body.appendChild(z);
  const I = ({ intent: i, file: s } = {}) => {
    if (Qn(s)) {
      if (i === "add") {
        xf(s);
        return;
      }
      i === "replace" && H0(s);
    }
  }, D = ({ intent: i } = {}) => {
  }, G = gu(Bk, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: L,
    paintSwatches: Ms.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: lr(i.color, 1)
    })),
    uiState: P,
    onClose: () => {
      Gi();
    },
    onImageFileSelected: I,
    onImageFileCancelled: D
  });
  let B = null;
  try {
    B = G.mount(z);
  } catch (i) {
    try {
      G.unmount();
    } catch {
    }
    throw z.remove(), i;
  }
  const le = z.querySelector(".pano-modal-overlay"), ie = z.querySelector(".pano-modal"), T = ie == null ? void 0 : ie.querySelector("[data-stage-overlay]"), K = ie == null ? void 0 : ie.querySelector("[data-stage-background]"), J = ie == null ? void 0 : ie.querySelector(".pano-stage-wrap"), he = ((Xf = B == null ? void 0 : B.getPaintOverlayRefs) == null ? void 0 : Xf.call(B)) || {}, pe = he.cursor || null, fe = he.sizePreview || null, we = he.sizeSample || null;
  if (!le || !ie || !T || !K || !J || !pe || !fe || !we)
    throw G.unmount(), z.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const A = T.getContext("2d"), ve = _o(), Ae = t === "cutout" ? MS({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, Pe = ie.querySelector("[data-side]"), H = ie.querySelector("[data-video-element]"), Le = ie.querySelector(".pano-floating-right"), Qe = ie.querySelector(".pano-floating-top"), yt = ie.querySelector("[data-tool-rail]"), nt = ie.querySelector("[data-frame-rail]"), Ve = ie.querySelector("[data-frame-roll-knob]"), Vt = ie.querySelector("[data-paint-dock]"), Tn = ie.querySelector(".pano-video-transport"), In = ie.querySelector("[data-selection-menu]"), nn = ie.querySelector("[data-tooltip]"), Nt = ie.querySelector("[data-camera-preview-host]"), R = ie.querySelector("[data-paint-color-row]"), j = ie.querySelector("[data-paint-color-pop]"), Q = ie.querySelector("[data-paint-color-sv]"), _e = ie.querySelector("[data-paint-color-sv-cursor]"), me = ie.querySelector("[data-paint-hue-strip]"), O = ie.querySelector("[data-paint-hue-handle]");
  let ee = 0, re = 0;
  J == null || J.removeAttribute("data-stage-ready"), J == null || J.setAttribute("data-stage-loading-kind", "boot"), T.style.opacity = "1", K.style.opacity = "0", a && (Pe == null || Pe.remove(), ie.classList.add("pano-modal-readonly"));
  const de = () => {
    if (!d.customPaintSessionStart) return;
    if (Ps(d.customPaintSessionStart, d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    if (_N(d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    const i = [
      Fn(d.customPaintColor),
      ...d.customPaintHistory.filter((s) => !Ps(s, d.customPaintColor))
    ];
    d.customPaintHistory = i.slice(0, 8), d.customPaintSessionStart = null;
  }, te = (i = !1) => {
    !j || j.hidden || (i ? de() : d.customPaintSessionStart = null, j.hidden = !0, P.paintDock.colorPopOpen = !1);
  }, ke = () => {
    j && (j.hidden && (d.customPaintSessionStart = Fn(d.customPaintColor)), j.hidden = !1, P.paintDock.colorPopOpen = !0);
  };
  ie.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || ci(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (ie.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), te(!0), t === "cutout" && d.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (d.cutoutAspectOpen = !1, d.menuMode = "", d.menuSize.measured = !1, Ze(), ye()), (s = P.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (P.frameRail.aspectOpen = !1)));
  });
  const xe = t === "stickers" ? v.active.selected_sticker_id : v.active.selected_shot_id, Ie = JSON.stringify(nh(v)), d = {
    mode: "pano",
    selectedId: xe,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: tn(v.coverage),
    historyController: vS(80, { entries: [Ie], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Ar,
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
    showGrid: wN(e == null ? void 0 : e.id, !0),
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
    paintEngine: Ic(),
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
  }, Oe = Ae && Nt ? Ae.mount(Nt, { shot: null }) : null;
  t === "stickers" && (d.selectedId = null, v.active.selected_sticker_id = null), d.selectedIds = d.selectedId ? [d.selectedId] : [];
  const ze = /* @__PURE__ */ new Map(), He = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map(), rt = document.createElement("canvas");
  rt.__panoFrameIdx = 0;
  const se = {
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
  }, Gt = Number.parseFloat(
    getComputedStyle(ie).getPropertyValue("--pano-float-radius")
  ) || 10, V = (i) => {
    const s = String(i || "default");
    T.style.cursor !== s && (T.style.cursor = s);
  }, ae = {
    timer: 0,
    target: null
  }, Te = {
    active: !1,
    depth: 0
  }, ne = {
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
  }, tt = 4, Ue = 9, mt = [];
  let Dt = 0;
  const Kt = () => {
    var k, C;
    const i = (k = J == null ? void 0 : J.getBoundingClientRect) == null ? void 0 : k.call(J), s = (C = Le == null ? void 0 : Le.getBoundingClientRect) == null ? void 0 : C.call(Le), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), c = s ? Math.max(0, Number(s.width || 0)) : 0, _ = c > 0 ? c + 14 + 12 : 72, b = Math.max(280, Math.floor(l - _ * 2)), w = d.fullscreen ? Math.min(1200, b) : b;
    P.videoTransport.shellMaxWidthPx = w;
  }, rn = () => {
    Dt || (Dt = window.requestAnimationFrame(() => {
      Dt = 0, Kt();
    }));
  }, It = () => {
    const i = Math.max(1, Number(P.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / i));
  }, ai = (i) => {
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
  }, bn = typeof ResizeObserver < "u" ? new ResizeObserver(() => rn()) : null;
  bn == null || bn.observe(J), Le && (bn == null || bn.observe(Le)), mt.push(() => {
    var i;
    Dt && (window.cancelAnimationFrame(Dt), Dt = 0), (i = bn == null ? void 0 : bn.disconnect) == null || i.call(bn);
  }), rn();
  const yn = () => {
    ne.thumbnailJobId += 1, ne.thumbnailSrc = "", P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = Ue;
  }, Sa = async (i, s, l) => {
    const c = String(i || "").trim();
    if (!c) {
      yn();
      return;
    }
    const p = mN(c);
    if (p) {
      ne.thumbnailSrc = c, P.videoTransport.thumbnails = p.thumbnails, P.videoTransport.thumbnailCount = p.thumbnailCount;
      return;
    }
    if (ne.thumbnailSrc === c && Array.isArray(P.videoTransport.thumbnails) && P.videoTransport.thumbnails.length)
      return;
    const m = ++ne.thumbnailJobId;
    ne.thumbnailSrc = c, P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = Ue;
    const _ = document.createElement("video");
    if (_.preload = "auto", _.muted = !0, _.playsInline = !0, _.crossOrigin = "anonymous", !await new Promise((ue) => {
      let ge = !1;
      const ce = (Ne) => {
        ge || (ge = !0, ue(Ne));
      };
      _.addEventListener("loadedmetadata", () => ce(!0), { once: !0 }), _.addEventListener("canplay", () => ce(!0), { once: !0 }), _.addEventListener("error", () => ce(!1), { once: !0 }), _.src = c, _.load();
    }) || ne.thumbnailJobId !== m) return;
    const w = Math.max(1, Number(_.videoWidth || 0)), k = Math.max(1, Number(_.videoHeight || 0));
    if (w < 1 || k < 1) return;
    const C = Math.max(0, Number(_.duration || s || 0)), N = document.createElement("canvas"), F = 46, U = Math.max(72, Math.round(w / k * F));
    N.width = U, N.height = F;
    const Z = N.getContext("2d");
    if (!Z) return;
    const W = [], q = (ue) => new Promise((ge) => {
      let ce = !1;
      const Ne = () => {
        ce || (ce = !0, ge());
      };
      _.addEventListener("seeked", Ne, { once: !0 }), _.addEventListener("error", Ne, { once: !0 });
      try {
        _.currentTime = ue;
      } catch {
        Ne();
      }
    });
    for (let ue = 0; ue < Ue; ue += 1) {
      if (ne.thumbnailJobId !== m) return;
      const ge = ue / (Ue - 1), ce = C > 0 ? Math.max(0, Math.min(C - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), C * ge)) : 0;
      if (await q(ce), ne.thumbnailJobId !== m) return;
      Z.clearRect(0, 0, U, F), Z.drawImage(_, 0, 0, U, F), W.push({
        id: `thumb-${ue}`,
        src: N.toDataURL("image/jpeg", 0.72),
        time: ce,
        label: gl(ce)
      });
    }
    ne.thumbnailJobId === m && (P.videoTransport.thumbnails = W, P.videoTransport.thumbnailCount = W.length || Ue, gN(c, {
      thumbnails: W,
      thumbnailCount: W.length || Ue,
      duration: C,
      fps: l
    }));
  }, wa = (i) => {
    const s = Math.max(1, Number(P.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(i || 0)) * s));
  }, ka = (i) => {
    if (!(H instanceof HTMLVideoElement) || Number(H.videoWidth || 0) < 1 || Number(H.videoHeight || 0) < 1) return null;
    const s = Number(H.videoWidth || 0), l = Number(H.videoHeight || 0), c = document.createElement("canvas");
    c.width = s, c.height = l, c.__panoFrameIdx = Number(c.__panoFrameIdx || 0) + 1;
    const p = c.getContext("2d");
    if (!p) return null;
    for (p.drawImage(H, 0, 0, s, l), ne.frameCache.set(i, c), ne.frameCacheOrder = ne.frameCacheOrder.filter((m) => m !== i), ne.frameCacheOrder.push(i); ne.frameCacheOrder.length > tt; ) {
      const m = ne.frameCacheOrder.shift();
      m != null && ne.frameCache.delete(m);
    }
    return c;
  }, wn = (i, s = null) => {
    if (!(i instanceof HTMLCanvasElement)) return !1;
    const l = Number(i.width || 0), c = Number(i.height || 0);
    if (l < 1 || c < 1) return !1;
    (rt.width !== l || rt.height !== c) && (rt.width = l, rt.height = c);
    const p = rt.getContext("2d");
    return p ? (p.clearRect(0, 0, l, c), p.drawImage(i, 0, 0, l, c), rt.__panoFrameIdx = Number(rt.__panoFrameIdx || 0) + 1, s != null && (ne.presentedTime = Number(s || 0)), !0) : !1;
  }, $n = (i) => {
    const s = wa(i), l = ne.frameCache.get(s) || null;
    return l ? (ne.currentFrameNumber = s, wn(l, i)) : !1;
  };
  if (mt.push(() => {
    yn();
  }), H instanceof HTMLVideoElement) {
    const i = () => {
      if (typeof H.requestVideoFrameCallback != "function" || H.__panoFramePumpActive) return;
      H.__panoFramePumpActive = !0;
      const b = (w, k) => {
        H.__panoFramePumpActive = !1;
        const C = Number((k == null ? void 0 : k.mediaTime) ?? H.currentTime ?? 0), N = wa(C), F = It();
        ne.mode === "scrub" ? Math.abs(C - Number(ne.editorTime || 0)) <= F && (ka(N), $n(ne.editorTime), se.backgroundDirty = !0, se.dirty = !0, ir({
          ready: !0,
          playing: !1,
          visible: wr(),
          currentTime: ne.editorTime,
          duration: P.videoTransport.duration,
          frameCount: P.videoTransport.frameCount,
          fps: P.videoTransport.fps,
          mode: "scrub"
        }), ye({ cause: "frame_view", localOnly: !0 })) : (ne.editorTime = C, ne.presentedTime = C, ne.requestedTime = null, ne.currentFrameNumber = N, ka(N), ne.frameCounter += 1, H.dataset.panoFrameIdx = String(ne.frameCounter), se.backgroundDirty = !0, se.dirty = !0, ir({
          ready: !0,
          playing: !H.paused && !H.ended,
          visible: wr(),
          currentTime: C,
          duration: P.videoTransport.duration,
          frameCount: P.videoTransport.frameCount,
          fps: P.videoTransport.fps,
          mode: "playback"
        }), ye({ cause: "frame_view", localOnly: !0 })), se.running && (!H.paused || ne.mode === "scrub") && i();
      };
      try {
        H.requestVideoFrameCallback(b);
      } catch {
        H.__panoFramePumpActive = !1;
      }
    }, s = () => {
      ne.pendingPlaybackResume && (ne.pendingPlaybackResume = !1, ne.mode = "playback", ne.requestedTime = null, Di() && (se.backgroundDirty = !0, se.dirty = !0), H.play().catch(() => {
      }));
    }, l = () => {
      ne.editorTime = Number(H.currentTime || 0), Number(H.readyState || 0) >= 2 && Di() && (se.backgroundDirty = !0, se.dirty = !0), Oi(), i(), ye({ cause: "frame_view", localOnly: !0 });
    }, c = () => {
      ne.mode = "playback", ne.seeking = !1, ne.requestedTime = null, Oi(), i(), ye({ cause: "frame_view", localOnly: !0 });
    }, p = () => {
      ne.mode === "playback" && Di() && (se.backgroundDirty = !0, se.dirty = !0), Oi(), ye({ cause: "frame_view", localOnly: !0 });
    }, m = () => {
      ir({
        ready: !!H.getAttribute("src"),
        playing: !H.paused && !H.ended,
        visible: wr(),
        currentTime: ne.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: ne.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: H.muted,
        volume: Number(H.volume ?? P.videoTransport.volume ?? 1)
      });
    }, _ = () => {
      const b = ne.seeking || ne.pendingPlaybackResume || ne.mode === "scrub";
      if (ne.seeking = !1, !b) {
        ne.requestedTime = null, i();
        return;
      }
      const w = Number(ne.requestedTime ?? ne.editorTime ?? 0), k = Number(H.currentTime || 0);
      if (Math.abs(k - w) > It()) {
        bl(w);
        return;
      }
      ne.mode === "scrub" && (Di(), se.backgroundDirty = !0, se.dirty = !0, ye({ cause: "frame_view", localOnly: !0 })), ne.requestedTime = null, s(), i();
    };
    H.addEventListener("loadedmetadata", l), H.addEventListener("loadeddata", l), H.addEventListener("canplay", l), H.addEventListener("play", c), H.addEventListener("pause", p), H.addEventListener("volumechange", m), H.addEventListener("seeked", _), mt.push(() => H.removeEventListener("loadedmetadata", l)), mt.push(() => H.removeEventListener("loadeddata", l)), mt.push(() => H.removeEventListener("canplay", l)), mt.push(() => H.removeEventListener("play", c)), mt.push(() => H.removeEventListener("pause", p)), mt.push(() => H.removeEventListener("volumechange", m)), mt.push(() => H.removeEventListener("seeked", _));
  }
  function So() {
    P.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", c = i.attr === "data-mask-tool";
      i.active = s ? i.value === d.primaryTool : l ? i.key === d.paintTool : c ? i.key === d.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function oi(i) {
    const s = i == null ? void 0 : i.dataTransfer;
    if (!s) return !1;
    if (s.items && s.items.length) {
      for (const l of s.items) {
        if (!l || l.kind !== "file") continue;
        const c = String(l.type || "").toLowerCase();
        if (!c || c.startsWith("image/")) return !0;
      }
      return !1;
    }
    return s.files && s.files.length ? Array.from(s.files).some((l) => Qn(l)) : !1;
  }
  function En(i) {
    const s = !!i;
    Te.active !== s && (Te.active = s, J.classList.toggle("drop-active", s));
  }
  function sl(i, s, l = d.viewFov, c = 140, p = 620) {
    const m = P1(d.viewYaw, i), _ = s - d.viewPitch, b = l - d.viewFov, w = Math.hypot(m, _) + Math.abs(b) * 0.6, k = Math.round(Y(c + w * 2.2, c, p));
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
    }, d.viewInertia.active = !1, d.viewInertia.vx = 0, d.viewInertia.vy = 0, ye();
  }
  Mg();
  function Sr() {
    return t === "stickers" ? v.stickers : v.shots;
  }
  function an() {
    const i = v.painting || (v.painting = ro(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function Jm(i = "paint") {
    var p, m;
    const s = Array.isArray((m = (p = v.painting) == null ? void 0 : p[i]) == null ? void 0 : m.strokes) ? v.painting[i].strokes : [], l = [], c = /* @__PURE__ */ new Set();
    for (const _ of s) {
      const b = String((_ == null ? void 0 : _.actionGroupId) || "").trim();
      !b || c.has(b) || (c.add(b), l.push(b));
    }
    return l;
  }
  function Zm() {
    return Jm("paint");
  }
  function Na(i, s) {
    const l = String(s || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function Ma(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function Wt(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const l = s.match(/^raster:(.*)$/);
    return String(l ? l[1] || "" : s).trim();
  }
  function Pa(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return { layerKind: "paint", actionGroupId: "" };
    const c = l.match(/^(paint|mask):(.*)$/);
    return c ? { layerKind: c[1] === "mask" ? "mask" : "paint", actionGroupId: String(c[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: l };
  }
  function ll() {
    var s;
    let i = -1;
    for (const l of Array.isArray(v.stickers) ? v.stickers : [])
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of an())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Array.isArray((s = v.painting) == null ? void 0 : s.raster_objects) ? v.painting.raster_objects : [])
      String((l == null ? void 0 : l.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0)));
    return i + 1;
  }
  function Ou(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const c = an();
    let p = c.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return p ? s != null && (p.z_index = Math.max(0, Number(s || 0))) : (p = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: s == null ? ll() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, c.push(p)), p;
  }
  function Qm(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), l = Number(i.centerUv.v || 0), c = Number(i.halfW || 0), p = Number(i.halfH || 0);
    return [
      {
        u: ((s - c) % 1 + 1) % 1,
        v: Y(l - p, 0, 1)
      },
      {
        u: ((s + c) % 1 + 1) % 1,
        v: Y(l - p, 0, 1)
      },
      {
        u: ((s + c) % 1 + 1) % 1,
        v: Y(l + p, 0, 1)
      },
      {
        u: ((s - c) % 1 + 1) % 1,
        v: Y(l + p, 0, 1)
      }
    ];
  }
  function eg() {
    const i = new Set(Zm()), l = an().filter((c) => i.has(String((c == null ? void 0 : c.actionGroupId) || "")));
    return i.forEach((c) => {
      l.some((p) => String((p == null ? void 0 : p.actionGroupId) || "") === c) || l.push({
        id: c,
        type: "strokeGroup",
        actionGroupId: c,
        z_index: ll(),
        locked: !1,
        frame: null
      });
    }), l.sort((c, p) => Number((c == null ? void 0 : c.z_index) || 0) - Number((p == null ? void 0 : p.z_index) || 0)), v.painting.groups = l, l;
  }
  function tg(i, s, l) {
    var W;
    const c = (q) => (Number(q || 0) % 1 + 1) % 1, p = [];
    for (const q of l) {
      const ue = q == null ? void 0 : q.geometry, ge = (ue == null ? void 0 : ue.geometryKind) === "lasso_fill" ? ue == null ? void 0 : ue.points : (ue == null ? void 0 : ue.processedPoints) || (ue == null ? void 0 : ue.rawPoints) || (ue == null ? void 0 : ue.points) || [];
      Array.isArray(ge) && p.push(...ge);
    }
    if (!p.length) return null;
    const m = c(((W = p[0]) == null ? void 0 : W.u) || 0);
    let _ = 0, b = 0;
    p.forEach((q) => {
      const ue = c((q == null ? void 0 : q.u) || 0);
      _ += m + jn(ue, m), b += Number((q == null ? void 0 : q.v) || 0);
    });
    const w = (_ / p.length % 1 + 1) % 1;
    let k = 1 / 0, C = -1 / 0, N = 1 / 0, F = -1 / 0;
    p.forEach((q) => {
      const ue = c((q == null ? void 0 : q.u) || 0), ge = jn(ue, w);
      k = Math.min(k, ge), C = Math.max(C, ge);
      const ce = Number((q == null ? void 0 : q.v) || 0);
      N = Math.min(N, ce), F = Math.max(F, ce);
    });
    const U = l.reduce((q, ue) => {
      const ge = qr(String((ue == null ? void 0 : ue.toolKind) || "pen")), ce = Pn[ge] || Pn[Ar], Ne = Math.max(1, Number((ue == null ? void 0 : ue.size) || 10)) * Math.max(0.1, Number((ce == null ? void 0 : ce.sizeScale) ?? 1));
      return Math.max(q, Ne);
    }, 0), Z = Math.max(35e-4, U / 2048);
    return {
      centerUv: { u: ((w + (k + C) * 0.5) % 1 + 1) % 1, v: Y((N + F) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (C - k) * 0.5 + Z,
      halfH: (F - N) * 0.5 + Z,
      uvPad: Z
    };
  }
  function Kr(i, s, l) {
    const c = String(i || "").trim();
    if (!c) return null;
    const p = an().find((_) => String((_ == null ? void 0 : _.actionGroupId) || "") === c);
    if (!p) return null;
    const m = l || Kn(c, s);
    return p.frame = tg(c, s, m), p.frame;
  }
  function Pi() {
    var c;
    const i = (Array.isArray(v.stickers) ? v.stickers : []).map((p) => ({
      type: "sticker",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), s = eg().map((p) => ({
      type: "strokeGroup",
      id: String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || ""),
      actionGroupId: String((p == null ? void 0 : p.actionGroupId) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), l = (Array.isArray((c = v.painting) == null ? void 0 : c.raster_objects) ? v.painting.raster_objects : []).filter((p) => String((p == null ? void 0 : p.layerKind) || "paint") === "paint").map((p) => ({
      type: "rasterObject",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    }));
    return [...i, ...s, ...l].sort((p, m) => Number(p.z_index || 0) - Number(m.z_index || 0));
  }
  function cl(i = !0) {
    var l, c, p, m, _, b;
    const s = Pi().filter((w) => w.type === "strokeGroup").map((w) => String(w.actionGroupId || "")).filter((w) => !!w);
    if (i) {
      const w = String(((c = (l = d.interaction) == null ? void 0 : l.stroke) == null ? void 0 : c.actionGroupId) || "").trim(), k = String(((m = (p = d.interaction) == null ? void 0 : p.stroke) == null ? void 0 : m.layerKind) || "").trim(), C = String(((b = (_ = d.interaction) == null ? void 0 : _.stroke) == null ? void 0 : b.toolKind) || "").trim();
      w && k === "paint" && C !== "eraser" && !s.includes(w) && s.push(w);
    }
    return s;
  }
  function ul(i = !0) {
    var b, w, k, C, N, F;
    const s = Pi();
    if (!i) return s;
    const l = String(((w = (b = d.interaction) == null ? void 0 : b.stroke) == null ? void 0 : w.actionGroupId) || "").trim(), c = String(((C = (k = d.interaction) == null ? void 0 : k.stroke) == null ? void 0 : C.layerKind) || "").trim(), p = String(((F = (N = d.interaction) == null ? void 0 : N.stroke) == null ? void 0 : F.toolKind) || "").trim();
    if (!l || c !== "paint" || p === "eraser" || s.some((U) => U.type === "strokeGroup" && String(U.actionGroupId || "") === l))
      return s;
    const m = At();
    let _ = s.reduce((U, Z) => Math.max(U, Number((Z == null ? void 0 : Z.z_index) || 0)), -1) + 1;
    return m && Ht(m) && String(m.actionGroupId || "") === l && (_ = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: _,
        item: null
      }
    ].sort((U, Z) => Number((U == null ? void 0 : U.z_index) || 0) - Number((Z == null ? void 0 : Z.z_index) || 0));
  }
  function ng() {
    return an().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => Ci(Na("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function rg() {
    var i;
    return (Array.isArray((i = v.painting) == null ? void 0 : i.raster_objects) ? v.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((s) => Ai(Ma((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function Fu(i = d.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, c = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || c;
    }
    return !1;
  }
  function ig() {
    var s, l, c, p;
    let i = null;
    try {
      const m = cl(), _ = ((p = (c = (l = (s = d.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : l.call(s, m)) == null ? void 0 : c.displayPaint) == null ? void 0 : p.canvas) || null;
      _ && (i = {
        source: _,
        revision: `${ji()}:${wo()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function wo() {
    var p, m, _, b, w, k, C;
    const i = d.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!Fu(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const N = ((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.geometry) || null, F = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), U = ((_ = N == null ? void 0 : N.rawPoints) == null ? void 0 : _.length) ?? ((b = N == null ? void 0 : N.points) == null ? void 0 : b.length) ?? 0, Z = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${F || "paint"}_${s}_live${Z}_${U}_${d.livePaintInteractionRevision}`;
    }
    const l = String(((w = i == null ? void 0 : i.item) == null ? void 0 : w.actionGroupId) || ""), c = String(((k = i == null ? void 0 : i.item) == null ? void 0 : k.rasterObjectId) || ((C = i == null ? void 0 : i.item) == null ? void 0 : C.id) || "");
    return `_${s}_${l || c || "active"}_${d.livePaintInteractionRevision}`;
  }
  function fl() {
    const i = Array.isArray(v.shots) ? v.shots : [], s = Array.isArray(v.stickers) ? v.stickers : [];
    return [...i, ...s];
  }
  function Dn(i) {
    return !!i && Array.isArray(v.shots) && v.shots.includes(i);
  }
  function vt(i) {
    return !!i && Array.isArray(v.stickers) && v.stickers.includes(i);
  }
  function kn() {
    var i;
    return Array.isArray((i = v.painting) == null ? void 0 : i.raster_objects) ? v.painting.raster_objects : [];
  }
  function Ai(i) {
    const s = Wt(i);
    if (!s) return null;
    const l = kn().find((c) => String((c == null ? void 0 : c.id) || "").trim() === s);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: Ma(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function on(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = Wt(i.rasterObjectId || i.id || "");
    return !!s && !!Ai(Ma(s));
  }
  function Ci(i) {
    const s = Pa(i), l = String(s.actionGroupId || "").trim();
    if (!l) return null;
    const c = an().find((p) => String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || "") === l || String((p == null ? void 0 : p.actionGroupId) || "") === l);
    return c ? {
      ...c,
      id: Na("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function Ht(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!Ci(Na(l, s));
  }
  function Kn(i, s = null) {
    const l = Pa(i, s), c = String(l.actionGroupId || "").trim();
    return c ? Ui(l.layerKind).filter((p) => String((p == null ? void 0 : p.actionGroupId) || "").trim() === c) : [];
  }
  function ag(i, s = "paint") {
    const l = String(i || "").trim(), p = `geomv5:${String(s || "paint").trim() || "paint"}:${l}:${d.mode}:${Ea()}`;
    if (d.mode === "frame") {
      const m = Be(), _ = String((m == null ? void 0 : m.id) || ""), b = m ? Ut(m) : null;
      return `${p}:frame:${_}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((b == null ? void 0 : b.x) || 0))}:${Math.round(Number((b == null ? void 0 : b.y) || 0))}:${Math.round(Number((b == null ? void 0 : b.w) || 0))}:${Math.round(Number((b == null ? void 0 : b.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((T == null ? void 0 : T.width) || 0))}:${Math.round(Number((T == null ? void 0 : T.height) || 0))}`;
  }
  function ko(i, s, l) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: Y(Number(i.v || 0) + Number(l || 0), 0, 1)
    };
  }
  function jn(i, s) {
    let l = Number(i || 0) - Number(s || 0);
    for (; l > 0.5; ) l -= 1;
    for (; l < -0.5; ) l += 1;
    return l;
  }
  function dl(i, s = null, l = null) {
    var k;
    const c = Pa(i, s), p = Array.isArray(l) ? l : Kn(c.actionGroupId, c.layerKind), m = [];
    if (p.forEach((C) => {
      const N = (C == null ? void 0 : C.geometry) || null, F = (N == null ? void 0 : N.geometryKind) === "lasso_fill" ? N == null ? void 0 : N.points : (N == null ? void 0 : N.processedPoints) || (N == null ? void 0 : N.rawPoints) || (N == null ? void 0 : N.points) || [];
      Array.isArray(F) && m.push(...F);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const _ = Number(((k = m[0]) == null ? void 0 : k.u) || 0);
    let b = 0, w = 0;
    return m.forEach((C) => {
      b += _ + jn(Number((C == null ? void 0 : C.u) || 0), _), w += Number((C == null ? void 0 : C.v) || 0);
    }), {
      u: (b / m.length % 1 + 1) % 1,
      v: Y(w / m.length, 0, 1)
    };
  }
  function No(i, s, l = 1, c = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), _ = jn(Number(i.u || 0), p), b = Number(i.v || 0) - m, w = Number(c || 0) * cn, k = Math.cos(w), C = Math.sin(w), N = Math.max(0.02, Number(l || 1)), F = (_ * k - b * C) * N, U = (_ * C + b * k) * N;
    return {
      ...i,
      u: ((p + F) % 1 + 1) % 1,
      v: Y(m + U, 0, 1)
    };
  }
  function Ru(i, s, l, c = null, p = null, m = null) {
    const _ = Pa(i, p), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const w = Ui(_.layerKind), k = Array.isArray(c) ? new Map(c.map((N) => [String((N == null ? void 0 : N.id) || ""), N])) : null;
    let C = !1;
    if (w.forEach((N) => {
      if (String((N == null ? void 0 : N.actionGroupId) || "").trim() !== b) return;
      const F = (k == null ? void 0 : k.get(String((N == null ? void 0 : N.id) || ""))) || N, U = N == null ? void 0 : N.geometry, Z = F == null ? void 0 : F.geometry;
      !U || !Z || (Array.isArray(Z.points) && (U.points = Z.points.map((W) => ko(W, s, l)), C = !0), Array.isArray(Z.rawPoints) && (U.rawPoints = Z.rawPoints.map((W) => ko(W, s, l)), C = !0), Array.isArray(Z.processedPoints) && (U.processedPoints = Z.processedPoints.map((W) => ko(W, s, l)), C = !0));
    }), C && m) {
      const N = an().find((F) => String((F == null ? void 0 : F.actionGroupId) || "") === b);
      N && (N.frame = null);
    }
    return C;
  }
  function Lu(i, s = 1, l = 0, c = null, p = null, m = null) {
    const _ = Pa(i, p), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const w = Ui(_.layerKind), k = Array.isArray(c) ? c : Kn(b, _.layerKind), C = Array.isArray(k) ? new Map(k.map((U) => [String((U == null ? void 0 : U.id) || ""), U])) : null, N = (m == null ? void 0 : m.centerUv) ?? dl(b, _.layerKind, k);
    let F = !1;
    if (w.forEach((U) => {
      if (String((U == null ? void 0 : U.actionGroupId) || "").trim() !== b) return;
      const Z = (C == null ? void 0 : C.get(String((U == null ? void 0 : U.id) || ""))) || U, W = U == null ? void 0 : U.geometry, q = Z == null ? void 0 : Z.geometry;
      !W || !q || (Array.isArray(q.points) && (W.points = q.points.map((ue) => No(ue, N, s, l)), F = !0), Array.isArray(q.rawPoints) && (W.rawPoints = q.rawPoints.map((ue) => No(ue, N, s, l)), F = !0), Array.isArray(q.processedPoints) && (W.processedPoints = q.processedPoints.map((ue) => No(ue, N, s, l)), F = !0));
    }), F && m) {
      const U = an().find((Z) => String((Z == null ? void 0 : Z.actionGroupId) || "") === b);
      U && (U.frame = null);
    }
    return F;
  }
  function zu(i, s, l, c = null) {
    const p = Wt(i);
    if (!p) return !1;
    const m = kn().find((C) => String((C == null ? void 0 : C.id) || "").trim() === p);
    if (!m) return !1;
    const _ = c && typeof c == "object" ? c : m, b = (_ == null ? void 0 : _.transform) || {}, w = Number(b.du || 0) + Number(s || 0), k = Y(Number(b.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = w, m.transform.dv = k, !0;
  }
  function og(i, s = 1, l = null) {
    const c = Wt(i);
    if (!c) return !1;
    const p = kn().find((k) => String((k == null ? void 0 : k.id) || "").trim() === c);
    if (!p) return !1;
    const m = l && typeof l == "object" ? l : p, _ = (m == null ? void 0 : m.transform) || {}, b = Math.max(0.01, Number(_.scale || 1)), w = Y(b * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.scale = w, !0;
  }
  function At() {
    const i = String(d.selectedId || "");
    if (!i) return null;
    const s = Ci(i);
    if (s) return s;
    const l = Ai(i);
    return l || (t === "cutout" ? fl().find((c) => String((c == null ? void 0 : c.id) || "") === i) || null : Sr().find((c) => String((c == null ? void 0 : c.id) || "") === i) || null);
  }
  function Wn() {
    const i = Array.isArray(d.selectedIds) && d.selectedIds.length ? d.selectedIds : d.selectedId ? [d.selectedId] : [], s = [], l = /* @__PURE__ */ new Set();
    return i.forEach((c) => {
      const p = String(c || "").trim();
      if (!p || l.has(p)) return;
      l.add(p);
      const m = p === String(d.selectedId || "") ? At() : Ci(p) || Ai(p) || (t === "cutout" ? fl().find((_) => String((_ == null ? void 0 : _.id) || "") === p) : Sr().find((_) => String((_ == null ? void 0 : _.id) || "") === p));
      m && s.push(m);
    }), s;
  }
  function hl(i = null) {
    const s = Array.isArray(i) ? i : Wn();
    if (!s || s.length < 2) return null;
    const l = s.map((k) => qt(k)).filter((k) => (k == null ? void 0 : k.visible) && Array.isArray(k.corners) && k.corners.length);
    if (!l.length) return null;
    const c = l.flatMap((k) => k.corners.map((C) => Number((C == null ? void 0 : C.x) || 0))), p = l.flatMap((k) => k.corners.map((C) => Number((C == null ? void 0 : C.y) || 0))), m = Math.min(...c), _ = Math.max(...c), b = Math.min(...p), w = Math.max(...p);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + _) * 0.5, y: (b + w) * 0.5 },
      corners: [
        { x: m, y: b },
        { x: _, y: b },
        { x: _, y: w },
        { x: m, y: w }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + _) * 0.5, y: b, a: { x: m, y: b }, b: { x: _, y: b } },
        { edge: "right", x: _, y: (b + w) * 0.5, a: { x: _, y: b }, b: { x: _, y: w } },
        { edge: "bottom", x: (m + _) * 0.5, y: w, a: { x: _, y: w }, b: { x: m, y: w } },
        { edge: "left", x: m, y: (b + w) * 0.5, a: { x: m, y: w }, b: { x: m, y: b } }
      ],
      rotateStemBase: { x: (m + _) * 0.5, y: b },
      rotateHandle: { x: (m + _) * 0.5, y: b - 30 }
    };
  }
  function $u(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(d.selectedIds) && d.selectedIds.includes(s);
  }
  function Mo() {
    const i = At();
    return i ? Ht(i) || on(i) ? "stroke" : Dn(i) ? "frame" : "image" : null;
  }
  function Yn(i) {
    if (!i || typeof i != "object") return !1;
    if (Ht(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), l = an().find((c) => String((c == null ? void 0 : c.actionGroupId) || (c == null ? void 0 : c.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (on(i)) {
      const s = Wt(i.rasterObjectId || i.id || ""), l = kn().find((c) => String((c == null ? void 0 : c.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function pl(i = null) {
    const s = Array.isArray(i) ? i : Wn();
    return s.length > 0 && s.every((l) => Yn(l));
  }
  function sg(i, s) {
    const l = s === !0;
    if (!i || typeof i != "object") return !1;
    if (Ht(i)) {
      const c = String(i.actionGroupId || i.id || "").trim(), p = an().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === c);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    if (on(i)) {
      const c = Wt(i.rasterObjectId || i.id || ""), p = kn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === c);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    return i.locked === l ? !1 : (i.locked = l, !0);
  }
  function lg() {
    if (r) return;
    const i = Wn();
    if (!i.length) return;
    const s = !pl(i);
    let l = !1;
    i.forEach((c) => {
      sg(c, s) && (l = !0);
    }), l && (ot(), lt(), Ze(), ye());
  }
  function Ti(i) {
    d.selectedId = (i == null ? void 0 : i.id) || null, d.selectedIds = i != null && i.id ? [i.id] : [], i && vt(i) ? v.active.selected_sticker_id = i.id || null : v.active.selected_sticker_id = null, i && Dn(i) ? v.active.selected_shot_id = i.id || null : i ? Dn(i) || (v.active.selected_shot_id = v.active.selected_shot_id) : v.active.selected_shot_id = null;
  }
  function cg(i, s = null) {
    const l = [], c = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((_) => {
      const b = String((_ == null ? void 0 : _.id) || "").trim();
      !b || c.has(b) || (c.add(b), l.push(b));
    }), d.selectedIds = l;
    const p = String(s || "").trim();
    d.selectedId = p && l.includes(p) ? p : l[l.length - 1] || null;
    const m = At();
    v.active.selected_sticker_id = m && vt(m) && m.id || null, m && Dn(m) ? v.active.selected_shot_id = m.id || null : l.length || (v.active.selected_shot_id = null);
  }
  function ju() {
    const i = (Array.isArray(v.shots) ? v.shots : []).map((l, c) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${c + 1}`)
    })), s = (Array.isArray(v.stickers) ? v.stickers : []).map((l, c) => {
      var m, _;
      const p = Yt(l) ? String(l.id || es) : String(((_ = (m = v.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : _.name) || l.asset_id || l.id || `Image ${c + 1}`);
      return {
        kind: "image",
        item: l,
        label: p
      };
    });
    return [...i, ...s];
  }
  function ug(i) {
    return i === "frame" ? Ee.camera : i === "stroke" ? Ee.paintbrush_vertical_tool : Ee.image;
  }
  function ml(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: ug(i.kind)
    };
  }
  function Vu() {
    return ll();
  }
  function Yt(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === es || String(i.source_kind || "") === Qk;
  }
  function Ii(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function fg(i) {
    return Yt(i) && Ii(i) ? Yp : 1;
  }
  function dg() {
    return d.primaryTool === "mask" ? d.maskTool : d.paintTool;
  }
  function hg() {
    return String(dg() || "") === "lasso_fill";
  }
  function pg() {
    if (r) return;
    const i = At();
    !i || !Yt(i) || (i.visible = Ii(i), Zt(), ot(), lt(), Ke(), Ze(), ye());
  }
  function mg() {
    if (r || t !== "stickers") return;
    const i = At();
    if (!i || !Yt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = yl(ts, () => {
      ye();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = Fi(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), ot(), lt(), Ke(), Ze(), ye();
  }
  function gg(i) {
    if (!i || !Yt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const l = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, c = yl(ts, () => {
      ye();
    });
    return c && (c.complete || c.naturalWidth || c.width) && (l.vFOV_deg = Fi(
      l.hFOV_deg,
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    )), l;
  }
  function bg() {
    const i = At();
    if (!i || !Yt(i)) return !1;
    const s = gg(i);
    if (!s) return !1;
    const l = (c, p) => Math.abs(Number(c || 0) - Number(p || 0)) <= 1e-4;
    return !(l(i.yaw_deg, s.yaw_deg) && l(i.pitch_deg, s.pitch_deg) && l(i.hFOV_deg, s.hFOV_deg) && l(i.vFOV_deg, s.vFOV_deg) && l(i.rot_deg, s.rot_deg));
  }
  function Hu(i) {
    return er.uiList(e, i);
  }
  function Uu(i) {
    return er.uiValue(e, i);
  }
  function Bu() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return zs(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function yg() {
    const { metaKey: i } = Bu(), s = Uu(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function Ei(i) {
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
  function gl(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(s / 60), c = s % 60;
    return `${l}:${String(c).padStart(2, "0")}`;
  }
  function ir(i = {}) {
    const s = Number(i.currentTime ?? ne.editorTime ?? 0), l = Number(i.duration ?? P.videoTransport.duration ?? 0), c = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!P.videoTransport.ready, p = Object.prototype.hasOwnProperty.call(i, "playing") ? !!i.playing : !!P.videoTransport.playing, m = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!P.videoTransport.visible, _ = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(H instanceof HTMLVideoElement ? H.muted : P.videoTransport.muted), b = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : H instanceof HTMLVideoElement ? H.volume : P.videoTransport.volume
    ), w = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : ai(H), k = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!P.videoTransport.loop;
    Object.assign(P.videoTransport, {
      ready: c,
      playing: p,
      visible: m,
      loop: k,
      currentTime: Number.isFinite(s) ? s : 0,
      duration: Number.isFinite(l) ? l : 0,
      progressPct: l > 1e-6 ? Math.max(0, Math.min(100, s / l * 100)) : 0,
      currentTimeLabel: gl(s),
      durationLabel: gl(l),
      frameCount: Math.max(0, Number(i.frameCount ?? P.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(i.fps ?? P.videoTransport.fps ?? 24)),
      mode: String(i.mode || ne.mode || "playback"),
      hasAudio: w,
      muted: _,
      volume: Math.max(0, Math.min(1, Number.isFinite(b) ? b : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(b) ? b : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : P.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? P.videoTransport.thumbnailCount ?? Ue))
    });
  }
  function wr() {
    return !!(H instanceof HTMLVideoElement && H.getAttribute("src") && d.primaryTool !== "paint" && d.primaryTool !== "mask");
  }
  function vg() {
    ir({
      visible: wr()
    });
  }
  function Di() {
    if (!(H instanceof HTMLVideoElement) || Number(H.videoWidth || 0) < 1 || Number(H.videoHeight || 0) < 1) return !1;
    const i = Number(H.videoWidth || 0), s = Number(H.videoHeight || 0);
    (rt.width !== i || rt.height !== s) && (rt.width = i, rt.height = s);
    const l = rt.getContext("2d");
    return l ? (l.clearRect(0, 0, i, s), l.drawImage(H, 0, 0, i, s), rt.__panoFrameIdx = Number(rt.__panoFrameIdx || 0) + 1, ne.presentedTime = Number(ne.editorTime || H.currentTime || 0), !0) : !1;
  }
  function Gu() {
    return ne.mode === "scrub" && Number(rt.width || 0) > 0 && Number(rt.height || 0) > 0 && Number(rt.__panoFrameIdx || 0) > 0 ? rt : H instanceof HTMLVideoElement && Number(H.videoWidth || 0) > 0 && Number(H.videoHeight || 0) > 0 && Number(H.readyState || 0) >= 2 ? H : null;
  }
  function bl(i) {
    if (!(H instanceof HTMLVideoElement) || Number(H.videoWidth || 0) < 1 || Number(H.videoHeight || 0) < 1) return;
    const s = Math.max(0, Number(i || 0));
    if (ne.requestedTime = s, !ne.seeking && !(Math.abs(Number(H.currentTime || 0) - s) <= 5e-4)) {
      ne.seeking = !0;
      try {
        H.currentTime = s;
      } catch {
        ne.seeking = !1;
      }
    }
  }
  function Oi() {
    if (!(H instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = Bu(), s = Hu(i)[0] || null, l = uN(s), c = yg(), p = Math.max(0, Number((c == null ? void 0 : c.frames) || 0)), m = Math.max(1, Number((c == null ? void 0 : c.fps) || 24)), _ = Number((c == null ? void 0 : c.duration) || (p > 0 ? p / m : 0)), b = !!(c != null && c.has_audio) || ai(H);
    return l && H.dataset.panoSrc !== l ? (H.pause(), H.dataset.panoSrc = l, H.dataset.panoFrameIdx = "0", H.loop = !!P.videoTransport.loop, H.muted = !!P.videoTransport.muted, H.volume = Math.max(0, Math.min(1, Number(P.videoTransport.volume ?? 1))), H.src = l, H.load(), Sa(l, _, m)) : !l && H.getAttribute("src") && (H.pause(), H.removeAttribute("src"), H.load(), yn()), H.loop !== !!P.videoTransport.loop && (H.loop = !!P.videoTransport.loop), l && (!Array.isArray(P.videoTransport.thumbnails) || P.videoTransport.thumbnails.length === 0) && Sa(l, _, m), l || yn(), ir({
      ready: !!l,
      playing: !H.paused && !H.ended,
      visible: !!l && d.primaryTool !== "paint" && d.primaryTool !== "mask",
      currentTime: ne.editorTime,
      duration: _,
      frameCount: p,
      fps: m,
      mode: ne.mode,
      hasAudio: b,
      loop: !!H.loop,
      muted: !!H.muted,
      volume: Number(H.volume ?? P.videoTransport.volume ?? 1),
      thumbnailCount: P.videoTransport.thumbnailCount
    }), l || null;
  }
  function _g(i, s = null) {
    var l;
    if (i && typeof i == "object" && !Array.isArray(i)) return i;
    if (Array.isArray(i) && i.length > 0) {
      const c = i[0];
      if (c && typeof c == "object" && !Array.isArray(c)) return c;
    }
    if (Array.isArray(s) && s.length > 0) {
      const c = (l = s[0]) == null ? void 0 : l.parsed_state;
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
  function yl(i, s = null) {
    return mc(e, i, ze, s || (() => ye()));
  }
  function Ku(i = null) {
    return yl(ts, i);
  }
  function Fi(i, s, l) {
    const c = Math.max(1, Number(s || 1)), p = Math.max(1, Number(l || 1)), m = Y(Number(i || 30), 0.1, 179) * cn, _ = 2 * Math.atan(Math.tan(m * 0.5) * (p / c));
    return Y(_ * Dr, 0.1, 179);
  }
  function xg(i) {
    const s = String(i || "").trim();
    if (!s) return null;
    try {
      const l = JSON.parse(s);
      if (!l || typeof l != "object" || String(l.kind || "") !== "pano_sticker_state") return null;
      const c = l.version;
      let p = null;
      if (typeof c == "number" && Number.isInteger(c) ? p = c : typeof c == "string" && /^\d+$/.test(c) && (p = Number.parseInt(c, 10)), p !== 1) return null;
      const m = l.pose;
      if (!m || typeof m != "object") return null;
      const _ = Number(m.yaw_deg), b = Number(m.pitch_deg), w = Number(m.roll_deg), k = Number(m.hFOV_deg);
      if (![_, b, w, k].every((U) => Number.isFinite(U))) return null;
      let C = ((_ + 180) % 360 + 360) % 360 - 180;
      Object.is(C, -0) && (C = 0);
      const N = {
        yaw_deg: C,
        pitch_deg: Y(b, -89.9, 89.9),
        roll_deg: w,
        hFOV_deg: Y(k, 0.1, 179)
      }, F = Number(l.source_aspect);
      return Number.isFinite(F) && F > 0 && (N.source_aspect = F), N;
    } catch {
      return null;
    }
  }
  function Wu(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), c = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = da(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Bt(Number.isFinite(s) ? s : 0),
        pitch_deg: Y(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: Y(Number.isFinite(p) ? p : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function Sg(i) {
    var b;
    if (!i || typeof i != "object") return Wu(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), c = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(p) && Number.isFinite(m)) {
      const w = Y(p, 0.1, 179) * cn, k = Y(m, 0.1, 179) * cn, C = Math.tan(k * 0.5);
      if (Math.abs(C) > 1e-6) {
        const N = Math.tan(w * 0.5) / C;
        Number.isFinite(N) && N > 0 && (_ = N);
      }
    }
    if (i != null && i.asset_id && ((b = v == null ? void 0 : v.assets) != null && b[i.asset_id])) {
      const w = v.assets[i.asset_id], k = Number((w == null ? void 0 : w.w) || 0), C = Number((w == null ? void 0 : w.h) || 0);
      k > 0 && C > 0 && (_ = k / C);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Bt(Number.isFinite(s) ? s : 0),
        pitch_deg: Y(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: Y(Number.isFinite(p) ? p : 30, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function wg(i) {
    return er.linkedValue(e, i);
  }
  function kg(i, s, l) {
    const c = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : xg(s);
    if (c) {
      const _ = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || c.source_aspect || 1), b = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(c.yaw_deg || 0),
        pitch_deg: Number(c.pitch_deg || 0),
        hFOV_deg: Number(c.hFOV_deg || 30),
        vFOV_deg: Fi(c.hFOV_deg, _, b),
        rot_deg: Number(c.roll_deg || 0)
      };
    }
    const p = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 1), m = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
    return {
      yaw_deg: Number(d.viewYaw || 0),
      pitch_deg: Number(d.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Fi(30, p, m),
      rot_deg: 0
    };
  }
  function Yu(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((k) => String((k == null ? void 0 : k.name) || "") === "sticker_image") : null, l = (s == null ? void 0 : s.link) ?? null, c = Ku(() => {
      var k;
      (k = e.__panoExternalStickerSync) == null || k.call(e, "image-loaded");
    }), p = _g(Uu("pano_sticker_input_pose"), null), m = wg("sticker_state"), _ = er.externalStateHash(e, m), b = l == null ? null : kg(p, m, c), w = vm(v, {
      connected: l != null,
      linkId: l,
      stateHash: _,
      pose: b,
      imageWidth: Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 0),
      imageHeight: Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 0)
    });
    w.changed && (v.stickers = w.state.stickers, v.active = w.state.active, l == null && d.selectedId === es && (d.selectedId = null, d.selectedIds = []), lt(), Ke(), Ze()), ye();
  }
  function Aa(i = {}) {
    const l = i.preservePanelValues !== !1 ? At() : null;
    l && (d.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: Er(l)
    }), d.selectedId = null, d.selectedIds = [], d.cutoutAspectOpen = !1, v.active.selected_sticker_id = null, v.active.selected_shot_id = null;
  }
  function Ng() {
    if (t !== "cutout") return;
    const i = Be();
    i && (d.selectedId = String(i.id || "") || null, d.selectedIds = d.selectedId ? [d.selectedId] : []);
  }
  function vl() {
    if (t !== "cutout") return;
    const i = Be();
    qi(P.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Ee.camera : Ee.plus_circle
    });
  }
  function qu() {
    const i = t === "cutout" && d.mode === "frame", s = !i && !!d.showGrid;
    qi(P.floatingButtons, "action", "reset-view", {
      disabled: r || i
    }), qi(P.floatingButtons, "action", "toggle-grid", {
      icon: s ? Ee.eye : Ee.eye_dashed,
      pressed: s ? "true" : "false",
      label: s ? "Hide Grid" : "Show Grid",
      tip: s ? "Hide grid" : "Show grid",
      disabled: r || i
    });
  }
  function kr() {
    var l;
    const i = !!Be();
    d.mode === "frame" && !i && (d.mode = "pano"), d.outputPreviewRect = null, P.viewButtons.forEach((c) => {
      const p = c.key === d.mode;
      c.pressed = p ? "true" : "false", c.visible = !(c.key === "frame" && t !== "cutout"), c.disabled = c.key === "frame" ? !i : !1;
    });
    const s = t === "cutout" && d.mode === "frame" ? Be() : null;
    P.frameRail.visible = !!s, P.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, P.frameRollKnob.visible = !!s && !r && s.locked !== !0, P.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, P.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), P.frameRollKnob.displayValue = Zi(P.frameRollKnob.rollDeg), P.frameRollKnob.dragging = ((l = d.interaction) == null ? void 0 : l.kind) === "roll_frame", P.frameRollKnob.armed = !!s && d.altModifier === !0, P.frameRail.rollKnob = P.frameRollKnob, P.frameRail.aspectLabel = s ? Er(s) : "", P.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((c) => ({
      value: c,
      label: c,
      active: !!s && String(Er(s)) === c
    })), s || (P.frameRail.aspectOpen = !1), P.outputPreviewToggle.visible = t === "cutout" && d.mode !== "frame" && !!Be(), t === "cutout" && P.cameraPreview && (P.cameraPreview.visible = d.mode !== "frame", P.cameraPreview.expanded = !!d.outputPreviewExpanded, P.cameraPreview.settled = P.cameraPreview.settled === !0 && se.pendingStableLayoutFrames <= 0 && se.hasPresentedFrame), qu(), Cf() ? _t(d.pointerPos) : V(d.mode === "pano" ? "grab" : "default");
  }
  function Mg() {
    const s = nf({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function _l() {
    const i = sr(d.viewYaw, d.viewPitch);
    let s = br(0, 1, 0);
    Math.abs(Zn(i, s)) > 0.999 && (s = br(0, 0, 1));
    const l = Ji(os(s, i)), c = Ji(os(i, l));
    return { right: l, up: c, fwd: i };
  }
  function Ca(i) {
    const { right: s, up: l, fwd: c } = _l(), p = Zn(i, s), m = Zn(i, l), _ = Zn(i, c);
    if (_ <= 1e-5) return null;
    const b = T.width, w = T.height, k = d.viewFov * cn, C = 2 * Math.atan(Math.tan(k / 2) * (w / b)), N = b / 2 / Math.tan(k / 2), F = w / 2 / Math.tan(C / 2);
    return {
      x: b / 2 + p / _ * N,
      y: w / 2 - m / _ * F,
      z: _
    };
  }
  function xl(i, s) {
    const { right: l, up: c, fwd: p } = _l(), m = T.width, _ = T.height, b = d.viewFov * cn, w = 2 * Math.atan(Math.tan(b / 2) * (_ / m)), k = (i - m / 2) / (m / 2) * Math.tan(b / 2), C = (_ / 2 - s) / (_ / 2) * Math.tan(w / 2), N = is(is(as(l, k), as(c, C)), p);
    return Ji(N);
  }
  function Wr() {
    const i = T.width, s = T.height, l = 2;
    if (i / Math.max(s, 1) >= l) {
      const b = s, w = b * l;
      return { x: (i - w) * 0.5, y: 0, w, h: b };
    }
    const p = i, m = p / l;
    return { x: 0, y: (s - m) * 0.5, w: p, h: m };
  }
  function Xu(i) {
    var _;
    if (i && typeof i == "object" && (Yt(i) || i.external === !0))
      return Ku(() => {
        var b;
        (b = e.__panoExternalStickerSync) == null || b.call(e, "image-loaded");
      });
    const s = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const l = ze.get(s);
    if (l) return l;
    const c = (_ = v.assets) == null ? void 0 : _[s], p = cN(c);
    if (!p) return null;
    const m = new Image();
    return Gm(m, p), m.onload = () => {
      Km(m, p), ye();
    }, m.onerror = () => {
      Wm(m, p), ye();
    }, m.src = p, ze.set(s, m), m;
  }
  function Ju(i, s = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const c = He.get(l);
    if (c)
      return c.complete || c.width || c.naturalWidth, c;
    const p = new Image();
    return p.onload = () => {
      typeof s == "function" && s();
    }, p.src = l, He.set(l, p), p;
  }
  function Pg(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = qe.get(s);
    if (l) return l.ready ? l : null;
    const c = Ju(i, () => {
      const C = qe.get(s);
      C && (C.ready = !1), ye({ localOnly: !0 });
    });
    if (!c || !(c.complete || c.width || c.naturalWidth)) return null;
    const p = Number(c.naturalWidth || c.width || 0), m = Number(c.naturalHeight || c.height || 0);
    if (p < 1 || m < 1) return null;
    const _ = document.createElement("canvas");
    _.width = p, _.height = m;
    const b = _.getContext("2d", { willReadFrequently: !0 });
    if (!b) return null;
    b.clearRect(0, 0, p, m), b.drawImage(c, 0, 0, p, m);
    const w = b.getImageData(0, 0, p, m).data, k = { canvas: _, width: p, height: m, alpha: w, ready: !0 };
    return qe.set(s, k), k;
  }
  function Ag(i, s, l = 1, c = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), _ = jn(Number(i.u || 0), p), b = Number(i.v || 0) - m, w = Math.max(0.02, Number(l || 1)), k = Number(c || 0) * cn, C = Math.cos(k), N = Math.sin(k), F = _ / w, U = b / w, Z = F * C + U * N, W = -F * N + U * C;
    return {
      ...i,
      u: ((p + Z) % 1 + 1) % 1,
      v: m + W
    };
  }
  function Cg(i, s) {
    if (!i || !s) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const c = (i == null ? void 0 : i.transform) || {}, p = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(c.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(c.dv || 0)
    }, _ = Ag(
      m,
      p,
      Number(c.scale || 1),
      Number(c.rot_deg || 0)
    ), b = Number(l.u1 || 0) - Number(l.u0 || 0), w = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(b > 1e-6) || !(w > 1e-6)) return null;
    const k = jn(Number(_.u || 0), Number(l.u0 || 0)) / b, C = (Number(_.v || 0) - Number(l.v0 || 0)) / w;
    if (k < 0 || k > 1 || C < 0 || C > 1) return 0;
    const N = Pg(i);
    if (!N) return null;
    const F = Y(Math.floor(k * N.width), 0, N.width - 1), U = Y(Math.floor(C * N.height), 0, N.height - 1);
    return Number(N.alpha[(U * N.width + F) * 4 + 3] || 0);
  }
  function Zu(i, s, l, c = null) {
    if (!(s != null && s.visible) || !Cr(l, s.corners)) return !1;
    const p = c || Xn(l, performance.now()), m = Cg(i, p);
    return m === null ? !0 : m > 8;
  }
  function Tg() {
    var c, p, m, _, b, w, k, C;
    const i = ((p = (c = d.paintEngine) == null ? void 0 : c.getErpTarget) == null ? void 0 : p.call(c, cl(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((b = (_ = i == null ? void 0 : i.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : b.width) || 2048)), l = Math.max(1, Number(((w = i == null ? void 0 : i.descriptor) == null ? void 0 : w.height) || ((C = (k = i == null ? void 0 : i.displayPaint) == null ? void 0 : k.canvas) == null ? void 0 : C.height) || 1024));
    return { width: s, height: l };
  }
  function Ig() {
    var U, Z, W;
    const i = d.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const l = On(), c = `${wo()}:${l.width}:${l.height}`;
    if (((U = d._activePaintEraserPreviewInfo) == null ? void 0 : U.cacheKey) === c)
      return d._activePaintEraserPreviewInfo.value || null;
    const p = ln(s), m = (p == null ? void 0 : p.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const q = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Al(q, p.targetSpace, !0);
    }
    const _ = Ia(l.width, l.height, { readback: !0 });
    if (!gf(_, p, { w: l.width, h: l.height })) return null;
    const b = ((W = (Z = _.ctx) == null ? void 0 : Z.getImageData(0, 0, l.width, l.height)) == null ? void 0 : W.data) || null;
    if (!b) return null;
    let w = l.width, k = l.height, C = -1, N = -1;
    for (let q = 0; q < l.height; q += 1)
      for (let ue = 0; ue < l.width; ue += 1)
        b[(q * l.width + ue) * 4 + 3] <= 8 || (ue < w && (w = ue), q < k && (k = q), ue > C && (C = ue), q > N && (N = q));
    if (C < w || N < k)
      return d._activePaintEraserPreviewInfo = { cacheKey: c, value: null }, null;
    const F = {
      surface: _,
      bounds: { minX: w, minY: k, maxX: C, maxY: N },
      key: `${c}:${w}:${k}:${C}:${N}`
    };
    return d._activePaintEraserPreviewInfo = { cacheKey: c, value: F }, d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), F;
  }
  function Ri() {
    d._activePaintEraserPreviewInfo = null, d._liveEraserPreviewCanvasCache = null;
  }
  function Eg(i, s, l) {
    var c, p;
    if (!i) return null;
    if (i.type === "rasterObject" && ((c = i.item) != null && c.bbox)) {
      const m = i.item.bbox, _ = ((p = i.item) == null ? void 0 : p.transform) || {}, b = Number(m.u0 || 0) + Number(_.du || 0), w = Number(m.u1 || 0) + Number(_.du || 0), k = Number(m.v0 || 0) + Number(_.dv || 0), C = Number(m.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((b % 1 + 1) % 1 * s),
        maxX: Math.ceil((w % 1 + 1) % 1 * s),
        minY: Math.floor(Y(k, 0, 1) * l),
        maxY: Math.ceil(Y(C, 0, 1) * l),
        wraps: w - b >= 1 || b < 0 || w > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = Kn(i.actionGroupId, "paint"), _ = Kr(i.actionGroupId, "paint", m);
      if (!_) return null;
      const b = _.centerUv.u - _.halfW, w = _.centerUv.u + _.halfW, k = _.centerUv.v - _.halfH, C = _.centerUv.v + _.halfH;
      return {
        minX: Math.floor((b % 1 + 1) % 1 * s),
        maxX: Math.ceil((w % 1 + 1) % 1 * s),
        minY: Math.floor(Y(k, 0, 1) * l),
        maxY: Math.ceil(Y(C, 0, 1) * l),
        wraps: w - b >= 1 || b < 0 || w > 1
      };
    }
    return null;
  }
  function Dg(i, s, l) {
    if (!i || !s) return !1;
    const c = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: l - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], p = c(i), m = c(s);
    return p.some((_) => m.some((b) => !(_.maxX < b.minX || b.maxX < _.minX || _.maxY < b.minY || b.maxY < _.minY)));
  }
  function Og(i, s, l) {
    var Ne, $e, Ge, et, Se, oe, be;
    if (!i || !s || !((Ne = l == null ? void 0 : l.surface) != null && Ne.canvas) || s.type !== "rasterObject") return i;
    const c = Number(i.width || l.surface.canvas.width || 0), p = Number(i.height || l.surface.canvas.height || 0);
    if (c < 1 || p < 1) return i;
    const m = Eg(s, c, p);
    if (m && !Dg(m, l.bounds, c)) return i;
    const _ = String((($e = s.item) == null ? void 0 : $e.id) || s.id || ""), b = ((Ge = s.item) == null ? void 0 : Ge.transform) || {}, w = `${l.key}:${_}:${c}:${p}:${Number(b.du || 0).toFixed(6)}:${Number(b.dv || 0).toFixed(6)}:${Number(b.rot_deg || 0).toFixed(3)}:${Number(b.scale || 1).toFixed(4)}`, k = d._liveEraserPreviewCanvasCache instanceof Map ? d._liveEraserPreviewCanvasCache : d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (k.has(w)) return k.get(w);
    const C = Y(Math.floor(Number(((et = l.bounds) == null ? void 0 : et.minX) || 0)), 0, Math.max(0, c - 1)), N = Y(Math.floor(Number(((Se = l.bounds) == null ? void 0 : Se.minY) || 0)), 0, Math.max(0, p - 1)), F = Y(Math.ceil(Number(((oe = l.bounds) == null ? void 0 : oe.maxX) || 0)), C, Math.max(0, c - 1)), U = Y(Math.ceil(Number(((be = l.bounds) == null ? void 0 : be.maxY) || 0)), N, Math.max(0, p - 1)), Z = Math.max(1, F - C + 1), W = Math.max(1, U - N + 1), q = Ia(c, p, { readback: !0 });
    q.ctx.clearRect(0, 0, c, p), q.ctx.drawImage(i, 0, 0);
    const ue = q.ctx.getImageData(C, N, Z, W);
    q.ctx.save(), q.ctx.globalCompositeOperation = "destination-out", q.ctx.drawImage(l.surface.canvas, 0, 0), q.ctx.restore();
    const ge = q.ctx.getImageData(C, N, Z, W);
    let ce = !1;
    for (let Fe = 0; Fe < Z * W; Fe += 1) {
      const Re = ue.data[Fe * 4 + 3], De = ge.data[Fe * 4 + 3];
      if (Re > De) {
        ce = !0;
        break;
      }
    }
    return ce ? (k.size > 64 && k.clear(), k.set(w, q.canvas), q.canvas) : (k.set(w, i), i);
  }
  function Qu(i, s = null) {
    const l = Wt((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.bbox) || null;
    if (!l || !c) return null;
    const p = Ju(i, s);
    if (!p || !(p.complete || p.width || p.naturalWidth)) return null;
    const { width: m, height: _ } = Tg(), b = (i == null ? void 0 : i.transform) || {}, w = [
      l,
      m,
      _,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
      b.du,
      b.dv,
      b.rot_deg,
      b.scale,
      Ea()
    ].join(":"), k = pt.get(w);
    if (k) return k;
    pt.size > 64 && pt.clear();
    const C = document.createElement("canvas");
    C.width = m, C.height = _;
    const N = C.getContext("2d");
    if (!N) return null;
    const F = Number(c.u0 || 0) * m, U = Number(c.v0 || 0) * _, Z = Math.max(1, (Number(c.u1 || 0) - Number(c.u0 || 0)) * m), W = Math.max(1, (Number(c.v1 || 0) - Number(c.v0 || 0)) * _), q = F + Z * 0.5 + Number(b.du || 0) * m, ue = U + W * 0.5 + Number(b.dv || 0) * _, ge = Number(b.rot_deg || 0) * cn, ce = Math.max(0.01, Number(b.scale || 1));
    for (const Ne of [-m, 0, m])
      N.save(), N.translate(q + Ne, ue), N.rotate(ge), N.scale(ce, ce), N.drawImage(p, -Z * 0.5, -W * 0.5, Z, W), N.restore();
    return pt.set(w, C), C;
  }
  function Fg() {
    return al(v, {
      selectedId: d.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Rg(i) {
    return qp(
      v,
      (s, l, c) => Xu(c || s),
      { scene: i }
    );
  }
  function ef(i, s, l, c, p = "modal_object_view") {
    if (!i || !s || !l) return !1;
    String((l == null ? void 0 : l.mode) || "");
    const m = si(c);
    if (sf(s, l))
      return Gg(
        s,
        l,
        m && d.showPanorama ? c : null,
        `${p}_bg_gl`
      );
    const b = To(), w = Io(b), k = d.showObjects ? Eo() : Ta([]), N = Ya({
      stateRevision: [
        p,
        m ? Ei(c) : "no_bg",
        Array.isArray(w) ? w.map((W) => `${String((W == null ? void 0 : W.assetId) || "")}:${String((W == null ? void 0 : W.revision) || "")}`).join(",") : "none",
        k.length ? k.map((W) => `${String((W == null ? void 0 : W.id) || "")}:${String((W == null ? void 0 : W.revision) || "")}:${Number((W == null ? void 0 : W.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: m && d.showPanorama ? c : null,
      backgroundRevision: m ? `${p}:${Ei(c)}` : "",
      coverageDeg: tn(v.coverage),
      scene: b,
      textures: w,
      paintSource: null,
      paintRevision: "",
      rasterEntries: k,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), F = ve;
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
  async function Sl(i, s) {
    const l = await new Promise((b) => i.toBlob(b, "image/png")), c = new FormData();
    c.append("image", l, s), c.append("type", "input"), c.append("subfolder", "panorama_stickers"), c.append("overwrite", "1");
    const p = await dn.fetchApi("/upload/image", { method: "POST", body: c });
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
  let Po = null, Ao = !1;
  function Lg() {
    const i = Oh(v.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const s = v.painting_layer, l = ji();
    return !s || typeof s != "object" || String(s.revision || "") !== l || i.totalPaintCount > 0 && !s.paint || i.totalMaskCount > 0 && !s.mask;
  }
  function tf() {
    const i = String(e.id ?? "0"), s = ns.get(i);
    if (Ao && s) return s;
    const l = (async () => {
      var m, _, b, w, k, C, N, F, U, Z, W, q;
      const c = ji(), p = Oh(v.painting);
      if (p.totalPaintCount <= 0 && p.totalMaskCount <= 0) {
        v.painting_layer !== null && (v.painting_layer = null, Po = c, Mn());
        return;
      }
      if (Po !== c && !Ao) {
        Ao = !0;
        try {
          Ro();
          const ue = cl(!1), ge = ((_ = (m = d.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : _.call(m, ue)) || null, ce = ((b = ge == null ? void 0 : ge.displayPaint) == null ? void 0 : b.canvas) || null, Ne = ((w = ge == null ? void 0 : ge.committedMask) == null ? void 0 : w.canvas) || null, $e = Math.max(1, Number(((k = ge == null ? void 0 : ge.descriptor) == null ? void 0 : k.width) || (ce == null ? void 0 : ce.width) || (Ne == null ? void 0 : Ne.width) || 2048)), Ge = Math.max(1, Number(((C = ge == null ? void 0 : ge.descriptor) == null ? void 0 : C.height) || (ce == null ? void 0 : ce.height) || (Ne == null ? void 0 : Ne.height) || 1024));
          (!ce && p.totalPaintCount > 0 || !Ne && p.totalMaskCount > 0) && ((!d._paintLayerSyncBlankSurface || Number(((N = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : N.width) || 0) !== $e || Number(((F = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : F.height) || 0) !== Ge) && (d._paintLayerSyncBlankSurface = Ia($e, Ge)), d._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, $e, Ge));
          const et = ce || p.totalPaintCount > 0 && ((U = d._paintLayerSyncBlankSurface) == null ? void 0 : U.canvas) || null, Se = Ne || p.totalMaskCount > 0 && ((Z = d._paintLayerSyncBlankSurface) == null ? void 0 : Z.canvas) || null;
          if (!et && !Se) return;
          let oe = null, be = null;
          const Fe = [];
          if (p.totalPaintCount > 0) {
            oe = await Sl(et, `pano_paint_${i}.png`);
            for (const Re of ue) {
              const De = String(Re || "").trim();
              if (!De) continue;
              const We = ((q = (W = d.paintEngine) == null ? void 0 : W.getGroupDisplayCanvas) == null ? void 0 : q.call(W, De)) || null;
              if (!We) continue;
              const st = De.replace(/[^a-zA-Z0-9_-]+/g, "_"), Je = await Sl(We, `pano_group_${i}_${st}.png`);
              Je && Fe.push({
                id: De,
                actionGroupId: De,
                image: Je
              });
            }
          }
          p.totalMaskCount > 0 && (be = await Sl(Se, `pano_mask_${i}.png`)), c === ji() && (v.painting_layer = {
            paint: oe,
            mask: be,
            groups: Fe,
            revision: c
          }, Po = c, Mn());
        } catch (ue) {
          throw ue;
        } finally {
          Ao = !1;
        }
      }
    })();
    return ns.set(i, l), l.finally(() => {
      ns.get(i) === l && ns.delete(i);
    }), l;
  }
  function Li() {
    if (t === "cutout") {
      const b = Gu();
      if (b) return b;
      const w = gc(
        e,
        ["erp_image", "bg_erp"],
        () => ye(),
        "background:cutout:erp_image|bg_erp"
      );
      return w && !Xc(w) ? w : mc(e, "pano_input_images", ze, () => ye()) || w || null;
    }
    const i = Gu();
    if (i) return i;
    const s = mc(e, "pano_input_images", ze, () => ye());
    if (s && !Xc(s)) return s;
    const l = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((b) => String((b == null ? void 0 : b.name) || "")) : [], c = l.includes("erp_image"), p = l.includes("bg_erp");
    let m = [];
    return r && (c || p) ? m = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : m = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], gc(e, m, () => ye(), `background:${m.join("|")}`) || s || null;
  }
  function si(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function zg() {
    let i = _a;
    const s = [];
    if (d.showPanorama) {
      const l = Li();
      i = qc(l, si);
    }
    if (d.showObjects) {
      const l = Array.isArray(v.stickers) ? v.stickers : [];
      for (const c of l) {
        if ((c == null ? void 0 : c.visible) === !1) continue;
        const p = Xu(c);
        s.push(qc(p, si));
      }
    }
    return Gk({
      presented: se.hasPresentedFrame,
      background: i,
      stickers: s
    });
  }
  function zi() {
    const i = new Set(
      (v.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(v.assets || {}).forEach((s) => {
      i.has(s) || (delete v.assets[s], ze.delete(s));
    });
  }
  function wl(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(Y(i.y, -1, 1))
    };
  }
  function kl(i, s = null) {
    const { lon: l, lat: c } = wl(i), p = Wr();
    let m = p.x + (l / (2 * Math.PI) + 0.5) * p.w;
    const _ = p.y + (0.5 - c / Math.PI) * p.h;
    if (s !== null) {
      for (; m - s > p.w / 2; ) m -= p.w;
      for (; m - s < -p.w / 2; ) m += p.w;
    }
    return { x: m, y: _, z: 1 };
  }
  function Co(i) {
    const s = sr(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0));
    let l = br(0, 1, 0);
    Math.abs(Zn(s, l)) > 0.999 && (l = br(0, 0, 1));
    const c = Ji(os(l, s)), p = Ji(os(s, c)), m = Math.tan(Y(Number(i.hFOV_deg || 20), 0.1, 179) * 0.5 * cn), _ = Math.tan(Y(Number(i.vFOV_deg || 20), 0.1, 179) * 0.5 * cn), b = Number(i.rot_deg || i.roll_deg || 0) * cn, w = Math.cos(b), k = Math.sin(b);
    return {
      centerDir: s,
      right: c,
      up: p,
      tanX: m,
      tanY: _,
      cr: w,
      sr: k
    };
  }
  function Yr(i, s, l) {
    const c = s * i.cr - l * i.sr, p = s * i.sr + l * i.cr;
    return Ji(is(is(i.centerDir, as(i.right, c)), as(i.up, p)));
  }
  function nf(i) {
    const s = Co(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: c, v: p }) => Yr(s, c * s.tanX, p * s.tanY));
  }
  function rf(i, s, l) {
    const c = Co(i), p = (s * 2 - 1) * c.tanX, m = (1 - l * 2) * c.tanY;
    return Yr(c, p, m);
  }
  function af(i) {
    const s = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: Y((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function $g(i) {
    var w, k, C, N;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const l = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, c = Math.max(0.01, Number(((w = i == null ? void 0 : i.transform) == null ? void 0 : w.scale) || 1)), p = Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.rot_deg) || 0), m = Number(((C = i == null ? void 0 : i.transform) == null ? void 0 : C.du) || 0), _ = Number(((N = i == null ? void 0 : i.transform) == null ? void 0 : N.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((F) => ko(No(F, l, c, p), m, _));
  }
  function jg(i) {
    const s = Wt((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, c = (i == null ? void 0 : i.bbox) || {}, p = `${s}:${d.mode}:${Ea()}:${c.u0}:${c.v0}:${c.u1}:${c.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (d.mode === "frame") {
      const m = Be(), _ = m ? Ut(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((T == null ? void 0 : T.width) || 0))}:${Math.round(Number((T == null ? void 0 : T.height) || 0))}`;
  }
  function Vg(i) {
    const s = String((i == null ? void 0 : i.id) || ""), c = [
      Dn(i) ? "frame" : vt(i) ? "sticker" : "item",
      s,
      d.mode,
      Number((i == null ? void 0 : i.yaw_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.pitch_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.hFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.vFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.rot_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.roll_deg) || 0).toFixed(4),
      Er(i)
    ].join(":");
    if (d.mode === "frame") {
      const p = Be(), m = p ? Ut(p) : null;
      return `${c}:frame:${String((p == null ? void 0 : p.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${c}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((T == null ? void 0 : T.width) || 0))}:${Math.round(Number((T == null ? void 0 : T.height) || 0))}`;
  }
  function Hg() {
    var s;
    const i = String(((s = v.ui_settings) == null ? void 0 : s.preview_quality) || "balanced");
    return i === "draft" ? d.hqFrames && d.hqFrames > 0 ? [28, 20] : d.interaction ? [12, 9] : [20, 14] : i === "high" ? d.hqFrames && d.hqFrames > 0 ? [48, 36] : d.interaction ? [20, 14] : [36, 26] : d.hqFrames && d.hqFrames > 0 ? [40, 30] : d.interaction ? [16, 12] : [28, 20];
  }
  function of() {
    var i;
    return !!K && !!((i = ve == null ? void 0 : ve.isSupported) != null && i.call(ve));
  }
  function sf(i, s) {
    return !of() || t !== "stickers" && t !== "cutout" || String((s == null ? void 0 : s.mode) || "") !== "panorama" ? !1 : Number((i == null ? void 0 : i.x) || 0) === 0 && Number((i == null ? void 0 : i.y) || 0) === 0 && Math.round(Number((i == null ? void 0 : i.w) || 0)) === Math.round(Number((T == null ? void 0 : T.width) || 0)) && Math.round(Number((i == null ? void 0 : i.h) || 0)) === Math.round(Number((T == null ? void 0 : T.height) || 0));
  }
  function To() {
    return d.showObjects ? Fg() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Io(i) {
    return !d.showObjects || !Array.isArray(i == null ? void 0 : i.stickers) || i.stickers.length === 0 ? [] : Rg(i);
  }
  function lf() {
    var i, s;
    return ((s = (i = d.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function Ug() {
    return lf() ? `${Cl()}:mask_display` : "";
  }
  function Ta(i) {
    if (!d.showMask) return i;
    const s = lf();
    if (!s) return i;
    const l = Ug(), c = i.reduce((_, b) => Math.max(_, Number((b == null ? void 0 : b.zIndex) || 0)), -1), p = (Array.isArray(v.stickers) ? v.stickers : []).reduce((_, b) => Math.max(_, Number((b == null ? void 0 : b.z_index) || 0)), -1), m = Math.max(c, p);
    return i.push({
      id: "mask_display",
      source: s,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function Eo() {
    var c, p;
    const i = ul(!0), s = Ig(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const _ = String(m.actionGroupId || m.id || "");
        if (!_) continue;
        const b = ((p = (c = d.paintEngine) == null ? void 0 : c.getGroupDisplayCanvas) == null ? void 0 : p.call(c, _)) || null;
        if (!b) continue;
        l.push({
          id: `paint_group:${_}`,
          source: b,
          revision: `${Cl()}:${_}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const _ = m.item || null, b = Wt((_ == null ? void 0 : _.id) || m.id || "");
        if (!b) continue;
        const w = Qu(_, () => ye());
        if (!w) continue;
        const k = Og(w, m, s), C = (_ == null ? void 0 : _.transform) || {};
        l.push({
          id: `raster:${b}`,
          source: k,
          revision: [
            ji(),
            (s == null ? void 0 : s.key) || "",
            b,
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
    return Ta(l);
  }
  function Bg(i, s = "modal_bg_gl") {
    const l = To(), c = Io(l), p = si(i), m = p ? Ei(i) : "none", _ = d.showObjects ? Eo() : Ta([]), b = null, w = [
      s,
      m,
      Array.isArray(l == null ? void 0 : l.stickers) ? l.stickers.map((k) => String((k == null ? void 0 : k.id) || "")).join(",") : "none",
      Array.isArray(c) ? c.map((k) => `${String((k == null ? void 0 : k.assetId) || "")}:${String((k == null ? void 0 : k.revision) || "")}`).join(",") : "none",
      _.length ? _.map((k) => `${String((k == null ? void 0 : k.id) || "")}:${String((k == null ? void 0 : k.revision) || "")}:${Number((k == null ? void 0 : k.zIndex) || 0)}`).join(",") : "paint:none",
      d.showPanorama ? "panorama:1" : "panorama:0",
      d.showObjects ? "objects:1" : "objects:0",
      d.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: Ya({
        stateRevision: w,
        backgroundSource: p ? i : null,
        backgroundRevision: p ? `${s}:${m}` : "",
        coverageDeg: tn(v.coverage),
        scene: l,
        textures: c,
        paintSource: b,
        paintRevision: "",
        rasterEntries: _,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: p || c.length > 0 || _.length > 0
    };
  }
  function Nl() {
    if (!K) return;
    const i = K.getContext("webgl2");
    if (i)
      i.viewport(0, 0, K.width, K.height), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT);
    else {
      const s = K.getContext("2d");
      s && (s.clearRect(0, 0, K.width, K.height), s.fillStyle = "#070707", s.fillRect(0, 0, K.width, K.height));
    }
    se.backgroundWasVisible = !1, se.backgroundDirty = !1;
  }
  function Gg(i, s, l, c = "modal_bg_gl") {
    var k;
    if (!sf(i, s)) return !1;
    if (!se.backgroundDirty && se.backgroundWasVisible) return !0;
    const { descriptor: p, hasContent: m } = Bg(l, c);
    if (!m || !ve.syncState(p))
      return Nl(), !1;
    const b = ve.renderToTarget("modal_pano", s, {
      width: i.w,
      height: i.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), w = (k = K == null ? void 0 : K.getContext) == null ? void 0 : k.call(K, "2d");
    return !b || !w ? (Nl(), !1) : (w.clearRect(0, 0, K.width, K.height), w.drawImage(b, 0, 0, K.width, K.height), se.backgroundWasVisible = !0, se.backgroundDirty = !1, !0);
  }
  function Kg(i = !1) {
    const s = T.width, l = T.height, c = Wr();
    if (A.globalAlpha = 1, A.lineWidth = 1, i || (A.fillStyle = "#070707", A.fillRect(0, 0, s, l), A.fillStyle = "#070707", A.fillRect(c.x, c.y, c.w, c.h)), Ro(), ef(
      A,
      { x: c.x, y: c.y, w: c.w, h: c.h },
      { mode: "unwrap" },
      Li(),
      "modal_unwrap"
    ), d.showGrid && !d.fullscreen) {
      A.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const _ = c.x + c.w * m / 16;
        A.beginPath(), A.moveTo(_, c.y), A.lineTo(_, c.y + c.h), A.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const _ = c.y + c.h * m / 8;
        A.beginPath(), A.moveTo(c.x, _), A.lineTo(c.x + c.w, _), A.stroke();
      }
      A.strokeStyle = "rgba(250, 250, 250, 0.86)", A.lineWidth = 1.2, A.beginPath(), A.moveTo(c.x, c.y + c.h / 2), A.lineTo(c.x + c.w, c.y + c.h / 2), A.stroke(), A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center";
      const p = c.y + c.h * 0.57;
      A.fillText("Left", c.x + c.w * 0.25, p), A.fillText("Front", c.x + c.w * 0.5, p), A.fillText("Right", c.x + c.w * 0.75, p), A.fillText("Back", c.x + 38, p), A.fillText("Back", c.x + c.w - 38, p);
    }
  }
  function cf(i, s, l = 1) {
    let c = !1;
    A.strokeStyle = s, A.lineWidth = l, A.beginPath();
    for (const p of i) {
      const m = Ca(p);
      if (!m) {
        c = !1;
        continue;
      }
      c ? A.lineTo(m.x, m.y) : (A.moveTo(m.x, m.y), c = !0);
    }
    A.stroke();
  }
  function Wg(i = !1) {
    const s = T.width, l = T.height;
    if (i || (of() ? A.clearRect(0, 0, s, l) : (A.fillStyle = "#070707", A.fillRect(0, 0, s, l))), Ro(), ef(
      A,
      { x: 0, y: 0, w: s, h: l },
      {
        mode: "panorama",
        yawDeg: d.viewYaw,
        pitchDeg: d.viewPitch,
        fovDeg: d.viewFov,
        coverageDeg: tn(v.coverage)
      },
      Li(),
      "modal_pano"
    ), d.showGrid && !d.fullscreen) {
      for (let p = -180; p <= 180; p += 15) {
        const m = [];
        for (let _ = -89; _ <= 89; _ += 4) m.push(sr(p, _));
        cf(m, "#3f3f46", p % 90 === 0 ? 1.3 : 1);
      }
      for (let p = -75; p <= 75; p += 15) {
        const m = [];
        for (let _ = -180; _ <= 180; _ += 4) m.push(sr(_, p));
        cf(m, p === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", p === 0 ? 1.5 : 1);
      }
      const c = [
        { name: "Left", dir: sr(-90, 0) },
        { name: "Front", dir: sr(0, 0) },
        { name: "Right", dir: sr(90, 0) },
        { name: "Back", dir: sr(180, 0) }
      ];
      A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", c.forEach((p) => {
        const m = Ca(p.dir);
        m && A.fillText(p.name, m.x, m.y + 24);
      });
    }
  }
  function Yg(i, s = null, l = null, c = null) {
    if (d.mode === "frame") {
      const p = s || Be();
      if (!p) return [];
      const m = l || Ut(p);
      return C0(i, p, m);
    }
    return bf(i, c);
  }
  function Do(i, s = null, l = null, c = null, p = null) {
    if (!i) return null;
    if (d.mode === "unwrap") {
      const _ = bf([i], p);
      return _[0] ? { x: _[0].x, y: _[0].y, z: 1 } : null;
    }
    const m = $i(i);
    return m ? Nr(m, s, l, c) : null;
  }
  function qg(i, s) {
    const l = String(i.actionGroupId || i.id || "").trim(), c = Kn(l, i.layerKind), p = Kr(l, i.layerKind, c), m = (p == null ? void 0 : p.centerUv) || dl(l, i.layerKind, c), _ = d.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, b = [], w = d.mode === "frame" ? Be() : null, k = w ? Ut(w) : null;
    for (const ce of c) {
      const Ne = (ce == null ? void 0 : ce.geometry) || null, $e = (Ne == null ? void 0 : Ne.geometryKind) === "lasso_fill" ? Ne == null ? void 0 : Ne.points : (Ne == null ? void 0 : Ne.processedPoints) || (Ne == null ? void 0 : Ne.rawPoints) || (Ne == null ? void 0 : Ne.points) || [], Ge = Yg($e, w, k, _).filter((oe) => Number.isFinite(oe == null ? void 0 : oe.x) && Number.isFinite(oe == null ? void 0 : oe.y));
      if (!Ge.length) continue;
      const et = qr(String((ce == null ? void 0 : ce.toolKind) || "pen")), Se = Pn[et] || Pn[Ar];
      b.push({
        points: Ge,
        closed: String((Ne == null ? void 0 : Ne.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ce == null ? void 0 : ce.size) || 10) * Math.max(0.1, Number((Se == null ? void 0 : Se.sizeScale) ?? 1)) + 10),
        layerKind: String((ce == null ? void 0 : ce.layerKind) || i.layerKind || "paint")
      });
    }
    const C = Do(m, null, w, k, _);
    if (!C) {
      const ce = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(s, ce), ce;
    }
    const F = Qm(p).map((ce) => Do(ce, C.x, w, k, _)).filter((ce) => Number.isFinite(ce == null ? void 0 : ce.x) && Number.isFinite(ce == null ? void 0 : ce.y)).map((ce) => ({ x: Number(ce.x || 0), y: Number(ce.y || 0) }));
    if (F.length < 4) {
      const ce = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(s, ce), ce;
    }
    const U = (ce, Ne) => ({
      x: (Number((ce == null ? void 0 : ce.x) || 0) + Number((Ne == null ? void 0 : Ne.x) || 0)) * 0.5,
      y: (Number((ce == null ? void 0 : ce.y) || 0) + Number((Ne == null ? void 0 : Ne.y) || 0)) * 0.5,
      a: ce,
      b: Ne
    }), Z = U(F[0], F[1]), W = U(F[1], F[2]), q = U(F[2], F[3]), ue = U(F[3], F[0]), ge = {
      kind: "strokeGroup",
      center: { x: Number(C.x || 0), y: Number(C.y || 0) },
      corners: F,
      edgeMidpoints: [
        { edge: "top", ...Z },
        { edge: "right", ...W },
        { edge: "bottom", ...q },
        { edge: "left", ...ue }
      ],
      rotateStemBase: { x: Z.x, y: Z.y },
      rotateHandle: { x: Z.x, y: Z.y - 30 },
      strokePaths: b,
      visible: !0
    };
    return d._strokeGeomCache.set(s, ge), ge;
  }
  function Xg(i, s) {
    const l = d.mode === "frame" ? Be() : null, c = l ? Ut(l) : null, p = af(i), m = d.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, _ = Do(p, null, l, c, m), w = $g(i).map((F) => Do(F, (_ == null ? void 0 : _.x) ?? null, l, c, m)).filter((F) => Number.isFinite(F == null ? void 0 : F.x) && Number.isFinite(F == null ? void 0 : F.y));
    if (!Array.isArray(w) || w.length < 4) {
      const F = { visible: !1, kind: "rasterObject" };
      return d._strokeGeomCache.set(s, F), F;
    }
    const k = w.slice(0, 4).map((F) => ({ x: Number((F == null ? void 0 : F.x) || 0), y: Number((F == null ? void 0 : F.y) || 0) })), N = {
      kind: "rasterObject",
      center: {
        x: k.reduce((F, U) => F + Number(U.x || 0), 0) / k.length,
        y: k.reduce((F, U) => F + Number(U.y || 0), 0) / k.length
      },
      corners: k,
      visible: !0
    };
    return d._strokeGeomCache.set(s, N), N;
  }
  function Nr(i, s = null, l = null, c = null, p = {}) {
    if (d.mode === "frame") {
      const Ne = l || Be(), $e = c || Ut(Ne);
      if (!Ne || !$e) return null;
      const Ge = Ne ? Da(Ne, i) : null;
      return Ge ? {
        x: Number($e.x || 0) + Number(Ge.x || 0) * Number($e.w || 0),
        y: Number($e.y || 0) + Number(Ge.y || 0) * Number($e.h || 0),
        z: 1
      } : null;
    }
    if (d.mode === "unwrap") return kl(i, s);
    const { right: m, up: _, fwd: b } = _l(), w = Zn(i, m), k = Zn(i, _), C = Zn(i, b), N = 1e-4;
    if (!Number.isFinite(C) || C <= N && !(p != null && p.clipBehind)) return null;
    const F = Math.max(C, N), U = T.width, Z = T.height, W = d.viewFov * cn, q = 2 * Math.atan(Math.tan(W / 2) * (Z / Math.max(U, 1))), ue = U / 2 / Math.tan(W / 2), ge = Z / 2 / Math.tan(q / 2), ce = Math.max(U, Z) * 2;
    return {
      x: Y(U / 2 + w / F * ue, -ce, U + ce),
      y: Y(Z / 2 - k / F * ge, -ce, Z + ce),
      z: F,
      rawZ: C,
      clipped: C <= N
    };
  }
  function Jg(i, s = []) {
    if (d.mode !== "pano" || vt(i)) return 1;
    const l = s.map((c) => Number((c == null ? void 0 : c.rawZ) ?? (c == null ? void 0 : c.z))).filter((c) => Number.isFinite(c));
    return l.length ? pN(0.035, 0.2, Math.min(...l)) : 1;
  }
  function Zg(i) {
    const s = sr(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), l = d.mode === "frame" ? Be() : null, c = l ? Ut(l) : null, p = d.mode === "pano" && (vt(i) || Dn(i)), m = p ? { clipBehind: !0 } : null, _ = Nr(s, null, l, c, m);
    if (!_) return { visible: !1 };
    const b = Co(i), k = nf(i).map((oe) => Nr(oe, _.x, l, c, m)).filter((oe) => Number.isFinite(oe == null ? void 0 : oe.x) && Number.isFinite(oe == null ? void 0 : oe.y));
    if (k.length < 4) return { visible: !1 };
    const C = Yr(b, 0, b.tanY), N = Yr(b, 0, b.tanY + Math.max(b.tanY * 0.43, 0.053)), F = Nr(C, _.x, l, c, m);
    if (!F) return { visible: !1 };
    const U = Nr(N, (F == null ? void 0 : F.x) ?? _.x, l, c, m), Z = ((U == null ? void 0 : U.x) ?? F.x) - F.x, W = ((U == null ? void 0 : U.y) ?? F.y) - F.y, q = Math.hypot(Z, W) || 1, ue = {
      x: F.x + Z / q * 30,
      y: F.y + W / q * 30
    }, ge = Nr(Yr(b, 0, b.tanY), _.x, l, c, m), ce = Nr(Yr(b, b.tanX, 0), _.x, l, c, m), Ne = Nr(Yr(b, 0, -b.tanY), _.x, l, c, m), $e = Nr(Yr(b, -b.tanX, 0), _.x, l, c, m);
    if (!ge || !ce || !Ne || !$e) return { visible: !1 };
    const Ge = [
      _,
      ...k,
      F,
      U,
      ge,
      ce,
      Ne,
      $e
    ];
    if (p && !Ge.some((oe) => Number((oe == null ? void 0 : oe.rawZ) ?? (oe == null ? void 0 : oe.z)) > 1e-4)) return { visible: !1 };
    const et = Jg(i, Ge), Se = [
      {
        edge: "top",
        x: ge.x,
        y: ge.y,
        a: { x: k[0].x, y: k[0].y },
        b: { x: k[1].x, y: k[1].y }
      },
      {
        edge: "right",
        x: ce.x,
        y: ce.y,
        a: { x: k[1].x, y: k[1].y },
        b: { x: k[2].x, y: k[2].y }
      },
      {
        edge: "bottom",
        x: Ne.x,
        y: Ne.y,
        a: { x: k[2].x, y: k[2].y },
        b: { x: k[3].x, y: k[3].y }
      },
      {
        edge: "left",
        x: $e.x,
        y: $e.y,
        a: { x: k[3].x, y: k[3].y },
        b: { x: k[0].x, y: k[0].y }
      }
    ];
    return {
      center: { x: _.x, y: _.y },
      corners: k.map((oe) => ({ x: oe.x, y: oe.y })),
      edgeMidpoints: Se,
      rotateStemBase: { x: F.x, y: F.y },
      rotateHandle: ue,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: et,
      visible: !0
    };
  }
  function qt(i) {
    if (Ht(i)) {
      const p = String(i.actionGroupId || i.id || "").trim(), m = ag(p, i.layerKind), _ = d._strokeGeomCache.get(m);
      return _ || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), qg(i, m));
    }
    if (on(i)) {
      const p = jg(i), m = d._strokeGeomCache.get(p);
      return m || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), Xg(i, p));
    }
    const s = Vg(i), l = d._strokeGeomCache.get(s);
    if (l) return l;
    d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear();
    const c = Zg(i);
    return d._strokeGeomCache.set(s, c), c;
  }
  function Oo(i, s, l, c = null) {
    const p = [];
    for (let m = 0; m <= l; m += 1) {
      const _ = m / l;
      let b = 0, w = 0;
      s === 0 ? (b = _, w = 0) : s === 1 ? (b = 1, w = _) : s === 2 ? (b = 1 - _, w = 1) : (b = 0, w = 1 - _);
      const k = rf(i, b, w), C = d.mode === "unwrap" ? kl(k, c) : Ca(k);
      C && p.push(C);
    }
    return p;
  }
  function Qg(i, s) {
    const l = sr(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), c = d.mode === "unwrap" ? kl(l) : null, p = c ? c.x : null, m = d.mode === "pano" ? 28 : 20, _ = [
      Oo(i, 0, m, p),
      Oo(i, 1, m, p),
      Oo(i, 2, m, p),
      Oo(i, 3, m, p)
    ];
    xm(A, _, { selected: s });
  }
  function e0() {
    const i = [...Array.isArray(v.shots) ? v.shots : []], s = [...Array.isArray(v.stickers) ? v.stickers : []].sort((l, c) => Number(l.z_index || 0) - Number(c.z_index || 0));
    return [...i, ...s];
  }
  function Ml() {
    const i = [...Array.isArray(v.shots) ? v.shots : []];
    return [...[...Array.isArray(v.stickers) ? v.stickers : []].sort((l, c) => Number(c.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function Fo(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(s[l].x, s[l].y);
      i.closePath();
    }
  }
  function uf(i, s, l) {
    const c = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (c.length < 4) return;
    const p = Y(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    const m = A.globalAlpha;
    A.globalAlpha = m * p;
    const _ = l ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", b = l ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", w = s ? 3.2 : 2.6;
    Fo(A, c), A.fillStyle = b, A.fill(), A.strokeStyle = _, A.lineWidth = w, A.stroke(), A.save(), A.strokeStyle = _, A.lineWidth = s ? 3.2 : 2.6, A.lineCap = "round";
    const k = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (c[0].x + c[1].x) * 0.5, y: (c[0].y + c[1].y) * 0.5 },
      { edge: "right", x: (c[1].x + c[2].x) * 0.5, y: (c[1].y + c[2].y) * 0.5 },
      { edge: "bottom", x: (c[2].x + c[3].x) * 0.5, y: (c[2].y + c[3].y) * 0.5 },
      { edge: "left", x: (c[3].x + c[0].x) * 0.5, y: (c[3].y + c[0].y) * 0.5 }
    ], C = { top: "bottom", right: "left", bottom: "top", left: "right" }, N = s ? 12 : 9;
    k.forEach((F) => {
      const Z = k.find((ge) => (ge == null ? void 0 : ge.edge) === C[F == null ? void 0 : F.edge]) || {
        x: (c[0].x + c[1].x + c[2].x + c[3].x) * 0.25,
        y: (c[0].y + c[1].y + c[2].y + c[3].y) * 0.25
      }, W = Z.x - F.x, q = Z.y - F.y, ue = Math.hypot(W, q) || 1;
      A.beginPath(), A.moveTo(F.x, F.y), A.lineTo(F.x + W / ue * N, F.y + q / ue * N), A.stroke();
    }), A.restore(), A.globalAlpha = m;
  }
  function t0(i, s, l, c) {
    const p = Y(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    if (Dn(i)) {
      uf(s, l, c);
      return;
    }
    if (vt(i)) {
      const _ = A.globalAlpha;
      A.globalAlpha = _ * fg(i) * p, d.mode === "frame" ? (A.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : c ? "rgba(255, 89, 89, 0.72)" : "#71717a", A.lineWidth = l ? 2 : 1, Fo(A, s.corners), A.stroke()) : Qg(i, l), A.globalAlpha = _;
      return;
    }
    const m = A.globalAlpha;
    A.globalAlpha = m * p, A.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : c ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Fo(A, s.corners), A.fill(), A.strokeStyle = l ? "rgba(255, 255, 255, 1)" : c ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", A.lineWidth = l ? 2.8 : 1.9, Fo(A, s.corners), A.stroke(), A.globalAlpha = m;
  }
  function ff(i, s, l) {
    if (vt(i)) {
      Sm(A, s, { accent: l });
      return;
    }
    A.fillStyle = l, s.corners.forEach((c) => {
      A.beginPath(), A.arc(c.x, c.y, 6.5, 0, Math.PI * 2), A.fill();
    }), Dn(i) && (A.strokeStyle = l, A.lineCap = "round", A.lineWidth = 4, s.edgeMidpoints.forEach((c) => {
      var C, N, F, U;
      const p = (((C = c.b) == null ? void 0 : C.x) ?? c.x) - (((N = c.a) == null ? void 0 : N.x) ?? c.x), m = (((F = c.b) == null ? void 0 : F.y) ?? c.y) - (((U = c.a) == null ? void 0 : U.y) ?? c.y), _ = Math.hypot(p, m) || 1, b = p / _, w = m / _, k = 10;
      A.beginPath(), A.moveTo(c.x - b * k, c.y - w * k), A.lineTo(c.x + b * k, c.y + w * k), A.stroke();
    }), A.lineCap = "butt"), Ht(i) || (A.strokeStyle = "rgba(250, 250, 250, 0.9)", A.lineWidth = 1.8, A.beginPath(), A.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), A.lineTo(s.rotateHandle.x, s.rotateHandle.y), A.stroke(), A.fillStyle = l, A.beginPath(), A.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), A.fill());
  }
  function n0() {
    var b;
    const [i, s] = Hg(), l = d.mode === "frame" ? [] : Wn(), c = l.length > 1, p = t === "cutout" ? e0() : Sr(), m = p.map((w) => `${String((w == null ? void 0 : w.id) || "")}:${Dn(w) ? "frame" : Number((w == null ? void 0 : w.z_index) || 0)}`).join("|");
    (!d._sortedItemsCache || d._sortedItemsCache.src !== p || d._sortedItemsCache.orderKey !== m) && (d._sortedItemsCache = {
      src: p,
      orderKey: m,
      sorted: [...p]
    });
    const _ = d._sortedItemsCache.sorted;
    for (const w of _) {
      const k = d.mode !== "frame" && !c && $u(w);
      if (d.mode === "frame" && !k || !d.showObjects && !Dn(w)) continue;
      const C = vt(w), N = Dn(w), F = Yn(w);
      if (!C && !N)
        continue;
      const U = qt(w);
      if (t !== "stickers" && !U.visible)
        continue;
      const Z = Y(Number((U == null ? void 0 : U.visibilityAlpha) ?? 1), 0, 1);
      if (Z <= 0.01) continue;
      const W = N && t === "cutout" && d.mode === "pano" ? Y(Number(d.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (A.save(), A.globalAlpha *= W, t0(w, U, k, F), k && U.visible) {
        const q = F ? "#ff4d4f" : C && Yt(w) ? "#f59e0b" : "#0070f3", ue = A.globalAlpha;
        A.globalAlpha = ue * Z, ff(w, U, q), A.globalAlpha = ue;
      }
      A.restore();
    }
    if (t === "cutout" && d.mode === "pano" && !Be() && d.cutoutPanoFrameVisual && d.cutoutPanoFrameAlpha > 1e-4) {
      const w = d.cutoutPanoFrameVisual, k = Y(Number(d.cutoutPanoFrameAlpha || 0), 0, 1);
      A.save(), A.globalAlpha *= k, uf(w.geom, w.selected, w.locked), w.selected && ff(
        w.item,
        w.geom,
        w.locked ? "#ff4d4f" : "#0070f3"
      ), A.restore();
    }
    if (c) {
      const w = hl(l);
      if (w != null && w.visible) {
        const k = pl(l) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(w.corners[0].x, w.corners[0].y);
        for (let C = 1; C < w.corners.length; C += 1) A.lineTo(w.corners[C].x, w.corners[C].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = k, w.corners.forEach((C) => {
          A.beginPath(), A.arc(C.x, C.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      }
    } else
      l.forEach((w) => {
        if (!Ht(w) && !on(w)) return;
        const k = qt(w);
        if (!(k != null && k.visible)) return;
        const C = Yn(w) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(k.corners[0].x, k.corners[0].y);
        for (let N = 1; N < k.corners.length; N += 1) A.lineTo(k.corners[N].x, k.corners[N].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = C, k.corners.forEach((N) => {
          A.beginPath(), A.arc(N.x, N.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      });
    if (((b = d.interaction) == null ? void 0 : b.kind) === "marquee_select") {
      const w = Of(d.interaction.start, d.interaction.current);
      A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.9)", A.fillStyle = "rgba(255, 255, 255, 0.08)", A.lineWidth = 1, A.setLineDash([5, 4]), A.beginPath(), A.rect(w.x0, w.y0, w.x1 - w.x0, w.y1 - w.y0), A.fill(), A.stroke(), A.restore();
    }
    d.hqFrames && i >= 40 && s >= 30 && (d.hqFrames -= 1, d.hqFrames > 0 && ye());
  }
  function r0(i) {
    const s = yr(i), l = Y(Number((s == null ? void 0 : s.aspect) || 1), 0.05, 20), c = 320;
    return l >= 1 ? { width: c, height: Math.max(1, Math.round(c / l)) } : { width: Math.max(1, Math.round(c * l)), height: c };
  }
  function df(i, s = !1) {
    const l = Y(da(i), 0.05, 20), c = s ? 320 : 220;
    return l >= 1 ? { width: c, height: Math.max(1, Math.round(c / l)) } : { width: Math.max(1, Math.round(c * l)), height: c };
  }
  function i0(i) {
    if (!Nt || !i) return !1;
    const s = Nt.closest(".pano-camera-preview");
    if (!s) return !1;
    const l = Math.round(Number(s.clientWidth || Nt.clientWidth || 0)), c = Math.round(Number(s.clientHeight || Nt.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(c - Number(i.height || 0)) <= 1;
  }
  function a0() {
    return `obj:${Number(d.objectVisualRevision || 0)}`;
  }
  function o0(i, s = {}) {
    if (!i) return "";
    const l = Li(), c = l && si(l) ? Ei(l) : "no_bg", p = r0(i);
    return [
      String((i == null ? void 0 : i.id) || ""),
      Cl(),
      a0(),
      wo(),
      c,
      d.showPanorama ? "panorama:1" : "panorama:0",
      d.showObjects ? "objects:1" : "objects:0",
      d.showMask ? "mask:1" : "mask:0",
      `${p.width}x${p.height}`,
      String(s.quality || "balanced")
    ].join("|");
  }
  function s0() {
    var F, U, Z, W;
    if (d.outputPreviewRect = null, P.outputPreviewToggle.visible = d.mode !== "frame" && !!Be(), t !== "cutout" || !P.cameraPreview) return;
    if (d.mode === "frame") {
      P.cameraPreview.visible = !1, P.cameraPreview.settled = !1;
      return;
    }
    const i = Be();
    if (!i) {
      P.cameraPreview.visible = !0, P.cameraPreview.ready = !1, P.cameraPreview.settled = !1, P.cameraPreview.expanded = !!d.outputPreviewExpanded, P.cameraPreview.width = 220, P.cameraPreview.height = 132, P.cameraPreview.label = "Add Frame to preview", (F = Ae == null ? void 0 : Ae.clearScene) == null || F.call(Ae), (U = Oe == null ? void 0 : Oe.requestRender) == null || U.call(Oe);
      return;
    }
    P.cameraPreview.visible = !0;
    const s = Li();
    if (!i || !Ae || !Oe) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", P.cameraPreview.expanded = !!d.outputPreviewExpanded, P.cameraPreview.settled = !1, P.cameraPreview.width = 220, P.cameraPreview.height = 132, (Z = Ae == null ? void 0 : Ae.clearScene) == null || Z.call(Ae), (W = Oe == null ? void 0 : Oe.requestRender) == null || W.call(Oe);
      return;
    }
    const l = df(i, !!d.outputPreviewExpanded);
    P.cameraPreview.width = l.width, P.cameraPreview.height = l.height, P.cameraPreview.expanded = !!d.outputPreviewExpanded;
    const c = To(), p = Io(c), m = si(s), _ = m ? Ei(s) : "none", b = d.showObjects ? Eo() : Ta([]), w = Ya({
      stateRevision: [
        "cutout_preview_camera",
        _,
        Array.isArray(c == null ? void 0 : c.stickers) ? c.stickers.map((q) => String((q == null ? void 0 : q.id) || "")).join(",") : "none",
        Array.isArray(p) ? p.map((q) => `${String((q == null ? void 0 : q.assetId) || "")}:${String((q == null ? void 0 : q.revision) || "")}`).join(",") : "none",
        b.length ? b.map((q) => `${String((q == null ? void 0 : q.id) || "")}:${String((q == null ? void 0 : q.revision) || "")}:${Number((q == null ? void 0 : q.zIndex) || 0)}`).join(",") : "paint:none",
        d.showPanorama ? "panorama:1" : "panorama:0",
        d.showObjects ? "objects:1" : "objects:0",
        d.showMask ? "showMask:1" : "showMask:0",
        tn(v.coverage)
      ].join("|"),
      backgroundSource: m && d.showPanorama ? s : null,
      backgroundRevision: m ? `cutout_preview:${_}` : "",
      coverageDeg: tn(v.coverage),
      scene: c,
      textures: p,
      rasterEntries: b,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(m || p.length > 0 || b.length > 0)) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = "Connect ERP image", P.cameraPreview.settled = !1, Ae.clearScene(), Oe.requestRender();
      return;
    }
    if (d.showPanorama && !m && p.length === 0 && b.length === 0) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = s ? "Loading preview" : "Connect ERP image", P.cameraPreview.settled = !1, Ae.clearScene(), Oe.requestRender();
      return;
    }
    Ae.syncScene(w), Oe.setView(yr(i));
    const C = i0(l), N = C ? Oe.present() : !1;
    C || Oe.requestRender(), P.cameraPreview.ready = !0, P.cameraPreview.label = C && N ? "" : "Loading preview", P.cameraPreview.settled = C && N && se.pendingStableLayoutFrames <= 0 && se.hasPresentedFrame;
  }
  function l0(i, s, l, c = {}) {
    if (!Ae || !l) return !1;
    const p = Li(), m = To(), _ = Io(m), b = si(p), w = d.showObjects ? Eo() : Ta([]);
    return b || _.length > 0 || w.length > 0 ? (Ae.syncScene(Ya({
      stateRevision: o0(l, c),
      backgroundSource: b && d.showPanorama ? p : null,
      backgroundRevision: b ? `cutout_frame:${Ei(p)}` : "",
      coverageDeg: tn(v.coverage),
      scene: m,
      textures: _,
      rasterEntries: w,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), Ae.renderShotToContext(i, s, l, c)) : !1;
  }
  function Pl(i, s) {
    if (!i || !s) return null;
    const l = Number(s.x || 0), c = Number(s.y || 0);
    return rf(i, l, c);
  }
  function $i(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, c = Math.cos(l);
    return br(c * Math.sin(s), Math.sin(l), c * Math.cos(s));
  }
  function c0(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function u0(i, s, l, c = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: sn(i, "widthScale", 1),
      pressureLike: sn(i, "pressureLike", 1)
    }, ...c, u: s, v: l };
  }
  function f0(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function Al(i, s, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const c = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", p = /* @__PURE__ */ new WeakMap();
    if (c) {
      let W = null;
      i.forEach((q) => {
        const ue = Number((q == null ? void 0 : q.u) || 0), ge = Number((q == null ? void 0 : q.v) || 0), ce = (ue % 1 + 1) % 1, Ne = W == null ? ce : W + jn(ce, (W % 1 + 1) % 1);
        p.set(q, { x: Ne, y: ge }), W = Ne;
      });
    }
    const m = (W) => !W || typeof W != "object" ? { x: 0, y: 0 } : p.get(W) || c0(W), _ = (W, q, ue, ge = {}) => {
      const ce = c ? (Number(q) % 1 + 1) % 1 : Number(q), Ne = u0(W, ce, ue, ge);
      return p.set(Ne, { x: Number(q), y: Number(ue) }), Ne;
    }, b = (W, q, ue) => {
      const ge = m(W), ce = m(q);
      return _(W, Hn(ge.x, ce.x, ue), Hn(ge.y, ce.y, ue), {
        t: Hn(Number((W == null ? void 0 : W.t) || 0), Number((q == null ? void 0 : q.t) || 0), ue),
        widthScale: Hn(sn(W, "widthScale", 1), sn(q, "widthScale", 1), ue),
        pressureLike: Hn(sn(W, "pressureLike", 1), sn(q, "pressureLike", 1), ue)
      });
    };
    if (i.length === 1) {
      const W = m(i[0]);
      return [_(i[0], W.x, W.y)];
    }
    const w = f0(s, l), k = (W, q) => {
      const ue = [0];
      for (let oe = 1; oe < W.length; oe += 1) {
        const be = m(W[oe - 1]), Fe = m(W[oe]);
        ue.push(ue[oe - 1] + Math.hypot(Fe.x - be.x, Fe.y - be.y));
      }
      const ge = ue[ue.length - 1] || 0;
      if (ge <= 1e-8) {
        const oe = W[0], be = m(oe);
        return [_(oe, be.x, be.y)];
      }
      const ce = [];
      let Ne = 0;
      for (let oe = 0; oe <= ge + 1e-9; oe += q) {
        for (; Ne < ue.length - 2 && ue[Ne + 1] < oe; ) Ne += 1;
        const be = ue[Ne], Fe = ue[Ne + 1], Re = Math.max(1e-8, Fe - be);
        ce.push(b(W[Ne], W[Ne + 1], Y((oe - be) / Re, 0, 1)));
      }
      const $e = W[W.length - 1], Ge = m($e), et = ce[ce.length - 1], Se = et ? m(et) : null;
      return (!Se || Math.hypot(Se.x - Ge.x, Se.y - Ge.y) > q * 0.35) && ce.push(_($e, Ge.x, Ge.y)), ce;
    }, C = (W) => {
      if (!Array.isArray(W) || W.length < 3) return W ? W.slice() : [];
      const q = m(W[0]), ue = [_(W[0], q.x, q.y)];
      for (let Ne = 0; Ne < W.length - 1; Ne += 1) {
        const $e = W[Ne], Ge = W[Ne + 1], et = m($e), Se = m(Ge), oe = _(
          $e,
          et.x * 0.75 + Se.x * 0.25,
          et.y * 0.75 + Se.y * 0.25,
          {
            t: Number($e.t || 0) * 0.75 + Number(Ge.t || 0) * 0.25,
            widthScale: sn($e, "widthScale", 1) * 0.75 + sn(Ge, "widthScale", 1) * 0.25,
            pressureLike: sn($e, "pressureLike", 1) * 0.75 + sn(Ge, "pressureLike", 1) * 0.25
          }
        ), be = _(
          $e,
          et.x * 0.25 + Se.x * 0.75,
          et.y * 0.25 + Se.y * 0.75,
          {
            t: Number($e.t || 0) * 0.25 + Number(Ge.t || 0) * 0.75,
            widthScale: sn($e, "widthScale", 1) * 0.25 + sn(Ge, "widthScale", 1) * 0.75,
            pressureLike: sn($e, "pressureLike", 1) * 0.25 + sn(Ge, "pressureLike", 1) * 0.75
          }
        );
        ue.push(oe, be);
      }
      const ge = W[W.length - 1], ce = m(ge);
      return ue.push(_(ge, ce.x, ce.y)), ue;
    }, N = k(i, w);
    if (N.length < 3) return N;
    const F = l ? 2 : 1;
    let U = N.slice();
    for (let W = 0; W < F; W += 1) U = C(U);
    return k(U, Math.max(w * 0.75, 55e-5));
  }
  function sn(i, s, l = 1) {
    const c = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(c) ? Math.max(0, c) : l;
  }
  function d0(i) {
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
  function Ia(i, s, l = {}) {
    const c = document.createElement("canvas");
    c.width = Math.max(1, Math.round(i)), c.height = Math.max(1, Math.round(s));
    const p = c.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return p && (p.clearRect(0, 0, c.width, c.height), p.imageSmoothingEnabled = !0), { canvas: c, ctx: p };
  }
  function Ea() {
    const i = Lo();
    return `${String(d.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function ji() {
    const i = Lo();
    return `${String(d.paintStrokeRevision)}:${String(d.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function Cl() {
    const i = wo(), s = ji();
    return i ? `${s}:${i}` : s;
  }
  function h0() {
    d.paintStrokeRevision += 1, d.paintCompositeRevision += 1;
  }
  function p0() {
    d.paintCompositeRevision += 1;
  }
  function m0() {
    d._sortedItemsCache = null, d._strokeGeomCache.clear();
  }
  function hf() {
    var i, s;
    d.paintEngineRevisionKey = null, (s = (i = d.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, v), d.paintEngineRevisionKey = Ea();
  }
  function pf() {
    v.painting_layer !== null && (v.painting_layer = null), Po = "";
  }
  function Zt() {
    d.objectVisualRevision = Number(d.objectVisualRevision || 0) + 1, m0(), se.backgroundDirty = !0, se.dirty = !0;
  }
  function qn({ rebuildPaintEngine: i = !1 } = {}) {
    pf(), h0(), Zt(), i && hf();
  }
  function Vi() {
    pf(), p0(), Zt();
  }
  function Ro() {
    var c;
    const i = Lo(), s = `${i.width}x${i.height}`;
    d.paintEngineDescriptorKey !== s && (d.paintEngine = Ic(i), d.paintEngineDescriptorKey = s, d.paintEngineRevisionKey = "");
    const l = Ea();
    d.paintEngineRevisionKey !== l && (d.paintEngineRevisionKey = l, (c = d.paintEngine) == null || c.rebuildCommitted(v));
  }
  function Lo() {
    const i = Math.max(1, M(Number((v == null ? void 0 : v.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function On() {
    return Lo();
  }
  function g0(i, s, l, c, p = null) {
    const m = d0(i), _ = sn(s, "widthScale", 1) * sn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * _) : m.model === "world_angle" ? p ? Math.max(0.5, m.value / Math.max(1e-6, Number(p.hFOV_deg || 90) * cn) * l * _) : Math.max(0.5, m.value / (2 * Math.PI) * l * _) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * _);
  }
  function b0(i, s, l = {}) {
    const c = String((s == null ? void 0 : s.layerKind) || "paint"), p = String((s == null ? void 0 : s.toolKind) || "pen"), m = l.preview === !0, _ = m ? 0.78 : 1;
    if (i.globalAlpha = p === "marker" ? 0.7 * _ : 1, c === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (p === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const b = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, w = m ? Math.max(0.28, Number(b.a ?? 1) * 0.88) : Math.max(0.12, Number(b.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(b.r || 0) * 255)}, ${Math.round(Number(b.g || 0) * 255)}, ${Math.round(Number(b.b || 0) * 255)}, ${w})`;
  }
  function y0(i, s, l) {
    const c = Math.max(0.5, Math.min(l, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(c) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), c, 0, Math.PI * 2), i.fill());
  }
  function v0(i, s, l, c, p = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(c.w, c.h) * 0.25;
    i.save(), b0(i, l, p);
    const _ = (b) => y0(i, b, m);
    if (s.length === 1) {
      _(s[0]), i.restore();
      return;
    }
    for (let b = 0; b < s.length - 1; b += 1) {
      const w = s[b], k = s[b + 1];
      if (!w || !k) continue;
      const C = Number(w.x || 0), N = Number(w.y || 0), F = Number(k.x || 0), U = Number(k.y || 0), Z = Math.max(0.5, Math.min(m, Number(w.radiusPx || 0.5))), W = Math.max(0.5, Math.min(m, Number(k.radiusPx || 0.5)));
      if (!Number.isFinite(C) || !Number.isFinite(N) || !Number.isFinite(F) || !Number.isFinite(U) || !Number.isFinite(Z) || !Number.isFinite(W)) continue;
      const q = F - C, ue = U - N, ge = Math.hypot(q, ue);
      if (!Number.isFinite(ge) || ge < 1e-6) {
        _(w);
        continue;
      }
      if (ge > Math.max(c.w, c.h) * 0.5) continue;
      const ce = Math.max(0.5, Math.min(Z, W)), Ne = Math.max(0.35, Math.min(ce * 0.4, 2.25)), $e = Math.max(1, Math.ceil(ge / Ne));
      for (let Ge = 0; Ge <= $e; Ge += 1) {
        const et = Ge / $e;
        _({
          x: Hn(C, F, et),
          y: Hn(N, U, et),
          radiusPx: Hn(Z, W, et)
        });
      }
    }
    _(s[s.length - 1]), i.restore();
  }
  function _0(i, s, l, c) {
    v0(i, s, l, c, { preview: !1 });
  }
  function x0(i, s, l, c, p) {
    var b, w, k, C;
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
    i.beginPath(), i.moveTo(Number(((b = s[0]) == null ? void 0 : b[m]) || 0) * c.w, Number(((w = s[0]) == null ? void 0 : w[_]) || 0) * c.h);
    for (let N = 1; N < s.length; N += 1)
      i.lineTo(Number(((k = s[N]) == null ? void 0 : k[m]) || 0) * c.w, Number(((C = s[N]) == null ? void 0 : C[_]) || 0) * c.h);
    i.closePath(), i.fill(), i.restore();
  }
  function mf(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function S0(i, s) {
    const l = mf(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((c) => ({
      x: Number((c == null ? void 0 : c.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((c == null ? void 0 : c.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: g0(i, c, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function gf(i, s, l = null) {
    var b, w, k, C;
    if (!(i != null && i.ctx) || !s) return !1;
    const c = l || { w: Number(((b = i.canvas) == null ? void 0 : b.width) || 0), h: Number(((w = i.canvas) == null ? void 0 : w.height) || 0) }, p = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((k = s == null ? void 0 : s.geometry) == null ? void 0 : k.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((C = s == null ? void 0 : s.geometry) == null ? void 0 : C.geometryKind) || "") === "lasso_fill")
      return x0(i.ctx, mf(p), p, c), !0;
    const _ = S0(p, c);
    return _.length ? (_0(i.ctx, _, p, c), !0) : !1;
  }
  function w0(i, s, l, c = 8) {
    const p = new Uint8Array(s * l), m = [], _ = new Int32Array(s * l), b = new Int32Array(s * l);
    for (let w = 0; w < l; w += 1)
      for (let k = 0; k < s; k += 1) {
        const C = w * s + k;
        if (p[C] || i[C] <= c) continue;
        let N = 0, F = 0;
        _[F] = k, b[F] = w, F += 1, p[C] = 1;
        const U = [];
        let Z = k, W = w, q = k, ue = w;
        for (; N < F; ) {
          const ge = _[N], ce = b[N];
          N += 1, U.push({ x: ge, y: ce }), ge < Z && (Z = ge), ce < W && (W = ce), ge > q && (q = ge), ce > ue && (ue = ce);
          const Ne = [
            [(ge - 1 + s) % s, ce],
            [(ge + 1) % s, ce],
            [ge, ce - 1],
            [ge, ce + 1]
          ];
          for (const [$e, Ge] of Ne) {
            if (Ge < 0 || Ge >= l) continue;
            const et = Ge * s + $e;
            p[et] || i[et] <= c || (p[et] = 1, _[F] = $e, b[F] = Ge, F += 1);
          }
        }
        m.push({ pixels: U, minX: Z, minY: W, maxX: q, maxY: ue });
      }
    return m;
  }
  function k0(i, s) {
    const l = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((w) => Number((w == null ? void 0 : w.x) || 0)).filter((w) => Number.isFinite(w)))].sort((w, k) => w - k);
    if (!l.length) return null;
    if (l.length === 1)
      return { startX: l[0], widthPx: 1 };
    let c = -1, p = 0;
    for (let w = 0; w < l.length; w += 1) {
      const k = l[w], N = (w === l.length - 1 ? l[0] + s : l[w + 1]) - k - 1;
      N > c && (c = N, p = w);
    }
    const m = (l[(p + 1) % l.length] + s) % s;
    let _ = 1 / 0, b = -1 / 0;
    for (const w of l) {
      const k = (w - m + s) % s;
      _ = Math.min(_, k), b = Math.max(b, k);
    }
    return {
      startX: m,
      widthPx: Math.max(1, b - _ + 1)
    };
  }
  function N0(i, s, l = {}) {
    var k;
    const c = Number((i == null ? void 0 : i.width) || 0), p = Number((i == null ? void 0 : i.height) || 0), m = (k = i == null ? void 0 : i.getContext) == null ? void 0 : k.call(i, "2d");
    if (!m || c < 1 || p < 1) return [];
    const _ = m.getImageData(0, 0, c, p), b = new Uint8Array(c * p);
    for (let C = 0; C < b.length; C += 1) b[C] = _.data[C * 4 + 3];
    return w0(b, c, p, 8).map((C, N) => {
      const F = k0(C, c);
      if (!F) return null;
      const U = Number(F.widthPx || 0), Z = C.maxY - C.minY + 1, W = Number(F.startX || 0), q = document.createElement("canvas");
      q.width = U, q.height = Z;
      const ue = q.getContext("2d");
      if (!ue) return null;
      const ge = ue.createImageData(U, Z);
      return C.pixels.forEach(({ x: ce, y: Ne }) => {
        const $e = (Ne * c + ce) * 4, Ge = (Number(ce || 0) - W + c) % c, et = ((Ne - C.minY) * U + Ge) * 4;
        ge.data[et + 0] = _.data[$e + 0], ge.data[et + 1] = _.data[$e + 1], ge.data[et + 2] = _.data[$e + 2], ge.data[et + 3] = _.data[$e + 3];
      }), ue.putImageData(ge, 0, 0), {
        id: Qi("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + N * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: C.minY / p,
          u1: U / c,
          v1: (C.maxY + 1) / p
        },
        rasterDataUrl: q.toDataURL("image/png"),
        transform: {
          du: W / c,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Da(i, s) {
    if (!i || !s) return null;
    const l = Co(i), c = Zn(s, l.centerDir);
    if (!Number.isFinite(c) || c <= 1e-6) return null;
    const p = Zn(s, l.right) / c, m = Zn(s, l.up) / c, _ = p * l.cr + m * l.sr, b = -p * l.sr + m * l.cr;
    return {
      x: (_ / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function M0(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (d.mode === "unwrap") {
      const l = Wr();
      return i.map((c) => ({
        x: l.x + Number(c.u || 0) * l.w,
        y: l.y + Number(c.v || 0) * l.h
      }));
    }
    const s = i.map((l) => Ca($i(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function bf(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (d.mode === "unwrap") {
      const c = Wr();
      return i.map((p) => {
        const m = (Number(p.u || 0) % 1 + 1) % 1, _ = s == null ? m : Number(s || 0) + jn(m, s);
        return {
          x: c.x + _ * c.w,
          y: c.y + Number(p.v || 0) * c.h
        };
      });
    }
    const l = i.map((c) => Ca($i(c))).filter(Boolean);
    return l.every((c) => Number(c.z || 0) > 0) ? l.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function P0(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const c = i[l], p = i[(l + 1) % i.length];
      if (!c || !p || !Number.isFinite(c.x) || !Number.isFinite(c.y) || !Number.isFinite(p.x) || !Number.isFinite(p.y) || Math.hypot(Number(p.x) - Number(c.x), Number(p.y) - Number(c.y)) > s) return !1;
    }
    return !0;
  }
  function A0(i, s, l) {
    if (!Array.isArray(i) || i.length < 3 || !s || !l) return [];
    const c = [];
    for (const p of i) {
      const m = $i(p), _ = Da(s, m);
      if (!_) return [];
      c.push({
        x: Number(l.x || 0) + Number(_.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(_.y || 0) * Number(l.h || 0)
      });
    }
    return P0(c, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? c : [];
  }
  function C0(i, s, l) {
    if (!Array.isArray(i) || i.length < 1 || !s || !l) return [];
    const c = [];
    for (const p of i) {
      const m = $i(p), _ = Da(s, m);
      _ && c.push({
        x: Number(l.x || 0) + Number(_.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(_.y || 0) * Number(l.h || 0)
      });
    }
    return c;
  }
  function T0() {
    var U;
    const i = Be(), s = Dl(i);
    if (!i || !s) return !1;
    const l = { x: s.x, y: s.y, w: s.w, h: s.h }, c = Math.max(1, Number(s.focalPx || 1)), p = l.x + l.w * 0.5, m = l.y + l.h * 0.5, { halfW: _, halfH: b } = Oc(
      { width: T.width, height: T.height },
      c
    ), w = { x: p - _, y: m - b, w: _ * 2, h: b * 2 }, k = {
      ...i,
      hFOV_deg: 2 * Math.atan(_ / c) * Dr,
      vFOV_deg: 2 * Math.atan(b / c) * Dr
    }, C = I0(l);
    A.save(), A.fillStyle = "#0a0a0a", A.fillRect(0, 0, T.width, T.height);
    const N = d.interaction ? "draft" : String(((U = v.ui_settings) == null ? void 0 : U.preview_quality) || "balanced");
    return l0(A, w, k, { quality: N }) === !0 || (A.fillStyle = "rgba(255, 255, 255, 0.03)", A.fillRect(w.x, w.y, w.w, w.h)), A.restore(), A.save(), A.fillStyle = "rgba(0, 0, 0, 0.58)", A.beginPath(), A.rect(0, 0, T.width, T.height), A.roundRect(l.x, l.y, l.w, l.h, C), A.fill("evenodd"), A.restore(), A.save(), A.strokeStyle = tN, A.globalAlpha = 0.62, A.lineWidth = 2, A.beginPath(), A.roundRect(l.x + 1, l.y + 1, l.w - 2, l.h - 2, Math.max(0, C - 1)), A.stroke(), A.restore(), !0;
  }
  function I0(i) {
    const s = Math.max(1e-6, Number(se.frameCanvasScale || 1));
    return Math.min(Gt * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function Mr() {
    var s;
    const i = d.mode === "frame" ? Be() : null;
    P.frameRollKnob.visible = !!i && !r, P.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), P.frameRollKnob.displayValue = Zi(P.frameRollKnob.rollDeg), P.frameRollKnob.dragging = ((s = d.interaction) == null ? void 0 : s.kind) === "roll_frame", P.frameRollKnob.armed = !!i && d.altModifier === !0;
  }
  function E0() {
    var w, k;
    if (((w = d.interaction) == null ? void 0 : w.kind) !== "paint_lasso_fill") return;
    const i = d.interaction.stroke, s = (k = i == null ? void 0 : i.geometry) == null ? void 0 : k.points;
    let l;
    if (d.mode === "frame") {
      const C = Be(), N = Ut(C);
      l = A0(s, C, N);
    } else
      l = M0(s);
    if (!Array.isArray(l) || l.length < 3) return;
    const c = String((i == null ? void 0 : i.layerKind) || "") === "mask", p = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(p.r || 0) * 255), _ = Math.round(Number(p.g || 0) * 255), b = Math.round(Number(p.b || 0) * 255);
    A.save(), A.beginPath(), A.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let C = 1; C < l.length; C++) A.lineTo(Number(l[C].x || 0), Number(l[C].y || 0));
    A.closePath(), c ? (A.lineWidth = 2, A.setLineDash([6, 6]), A.lineDashOffset = 0, A.strokeStyle = "rgba(0,0,0,0.96)", A.stroke(), A.lineDashOffset = -6, A.strokeStyle = "rgba(255,255,255,0.96)", A.stroke(), A.setLineDash([]), A.lineDashOffset = 0) : (A.lineWidth = 1.5, A.setLineDash([6, 4]), A.strokeStyle = `rgba(${m},${_},${b},1)`, A.stroke(), A.setLineDash([])), A.restore();
  }
  function D0() {
    const i = d.frameRollOverlayVisual, s = Y(Number(d.frameRollOverlayAlpha || 0), 0, 1);
    if (d.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const l = Ut(i.shot);
    if (!l) return;
    const c = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * cn, m = Math.hypot(l.w, l.h) * 0.55, _ = Math.cos(p) * m, b = Math.sin(p) * m;
    A.save(), A.globalAlpha *= s, A.beginPath(), A.rect(l.x, l.y, l.w, l.h), A.clip(), A.translate(c.x, c.y), A.rotate(p);
    const w = Math.max(12, Math.min(l.w, l.h) / 6);
    A.beginPath();
    for (let k = -m; k <= m; k += w)
      A.moveTo(k, -m), A.lineTo(k, m);
    for (let k = -m; k <= m; k += w)
      A.moveTo(-m, k), A.lineTo(m, k);
    A.lineWidth = 1, A.strokeStyle = "rgba(255, 255, 255, 0.22)", A.stroke(), A.setTransform(1, 0, 0, 1, 0, 0), A.beginPath(), A.moveTo(c.x - _, c.y - b), A.lineTo(c.x + _, c.y + b), A.lineWidth = 1.5, A.setLineDash([8, 6]), A.strokeStyle = "rgba(255, 255, 255, 0.92)", A.shadowColor = "rgba(0, 0, 0, 0.8)", A.shadowBlur = 3, A.stroke(), A.setLineDash([]), A.restore();
  }
  function O0() {
    return t !== "cutout" || !Be() ? 0 : iN;
  }
  function F0() {
    const i = Y(Number(d.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || d.mode !== "pano") return;
    const s = Be(), l = s ? qt(s) : null, c = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((_) => ({ x: Number(_.x || 0), y: Number(_.y || 0) })) : null;
    l != null && l.visible && c && (d.cutoutPanoDimCorners = c), s && (l != null && l.visible) && c && (d.cutoutPanoFrameVisual = {
      item: s,
      geom: l,
      selected: $u(s),
      locked: Yn(s)
    });
    const p = Number(d.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? c : p ? d.cutoutPanoDimCorners || [] : [];
    if (A.save(), A.fillStyle = `rgba(0, 0, 0, ${i})`, A.beginPath(), A.rect(0, 0, T.width, T.height), m.length >= 4) {
      A.moveTo(m[0].x, m[0].y);
      for (let _ = 1; _ < 4; _ += 1) A.lineTo(m[_].x, m[_].y);
      A.closePath();
    }
    A.fill("evenodd"), A.restore();
  }
  function R0() {
    d.mode === "frame" ? (se.frameSafeRect = rb(), T0()) : d.mode === "unwrap" ? Kg(!1) : Wg(!1), F0(), t === "cutout" && s0(), n0(), Mr(), E0(), D0(), P.fovValue = `${Math.round(d.viewFov)}°`, Math.abs(Number(d.outputPreviewAnim || 0) - Number(d.outputPreviewAnimTo || 0)) < 1e-6 && Ze(), se.hasPresentedFrame || (se.hasPresentedFrame = !0, K.style.opacity = "1"), t === "cutout" && P.cameraPreview && (P.cameraPreview.settled = se.pendingStableLayoutFrames <= 0 && se.hasPresentedFrame && d.mode !== "frame");
    const i = zg();
    P.stageStatus = i.status, P.stageStatusDetail = i.detail, i.status === hr ? (J == null || J.removeAttribute("data-stage-ready"), J == null || J.setAttribute("data-stage-loading-kind", i.detail)) : (J == null || J.setAttribute("data-stage-ready", ""), J == null || J.removeAttribute("data-stage-loading-kind"));
  }
  function L0(i = d.interaction) {
    if (t !== "stickers" || d.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function z0() {
    e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = ig();
  }
  function ye(i = {}) {
    var b, w, k, C, N, F, U, Z, W, q;
    const s = !!i.localOnly, l = i.externalSync === !0, c = String(i.cause || ""), p = String(((b = d.interaction) == null ? void 0 : b.kind) || "");
    (!s || p === "view" || p === "pan_frame" || L0() || !!((w = d.viewTween) != null && w.active) || c === "mode" || c === "frame_view" || c === "cutout_frame") && (se.backgroundDirty = !0), s && Fu() && (d.livePaintInteractionRevision += 1, se.backgroundDirty = !0), (!s || c === "selection" || c === "mode" || c === "cutout_frame") && (vl(), kr()), z0(), l && ((C = (k = e.__panoDomPreview) == null ? void 0 : k.requestDraw) == null || C.call(k), (N = e.setDirtyCanvas) == null || N.call(e, !0, !1)), l && !s && ((U = (F = e.graph) == null ? void 0 : F.setDirtyCanvas) == null || U.call(F, !0, !0), (q = (W = (Z = tr) == null ? void 0 : Z.canvas) == null ? void 0 : W.setDirty) == null || q.call(W, !0, !0)), se.dirty = !0;
  }
  function yf() {
    const i = T.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height));
    return T.width !== s || T.height !== l || K.width !== s || K.height !== l ? (T.width = s, T.height = l, K.width = s, K.height = l, se.backgroundDirty = !0, se.dirty = !0, t === "cutout" && (se.pendingStableLayoutFrames = Math.max(Number(se.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function $0(i = performance.now()) {
    var m, _;
    se.lastTickTs = i;
    const s = d.mode === "frame" && ((m = d.interaction) == null ? void 0 : m.kind) === "roll_frame" ? d.interaction : null;
    s != null && s.shot && (d.frameRollOverlayVisual = { shot: s.shot });
    const l = s ? 1 : 0;
    if (Math.abs(l - Number(d.frameRollOverlayTarget || 0)) > 1e-6 && (d.frameRollOverlayFrom = Number(d.frameRollOverlayAlpha || 0), d.frameRollOverlayTarget = l, d.frameRollOverlayStartTs = i), Math.abs(Number(d.frameRollOverlayAlpha || 0) - l) > 1e-6) {
      const b = Y(
        (i - Number(d.frameRollOverlayStartTs || i)) / aN,
        0,
        1
      );
      d.frameRollOverlayAlpha = Hn(
        Number(d.frameRollOverlayFrom || 0),
        l,
        rs(b)
      ), b >= 1 && (d.frameRollOverlayAlpha = l, l === 0 && (d.frameRollOverlayVisual = null)), se.dirty = !0;
    }
    const c = O0();
    if (Math.abs(c - Number(d.cutoutPanoDimTarget || 0)) > 1e-6 && (d.cutoutPanoDimFrom = Number(d.cutoutPanoDimAlpha || 0), d.cutoutPanoDimTarget = c, d.cutoutPanoDimStartTs = i), Math.abs(Number(d.cutoutPanoDimAlpha || 0) - c) > 1e-6) {
      const b = Y(
        (i - Number(d.cutoutPanoDimStartTs || i)) / Eh,
        0,
        1
      );
      d.cutoutPanoDimAlpha = Hn(
        Number(d.cutoutPanoDimFrom || 0),
        c,
        rs(b)
      ), b >= 1 && (d.cutoutPanoDimAlpha = c), b >= 1 && c === 0 && (d.cutoutPanoDimCorners = null), se.dirty = !0;
    }
    const p = t === "cutout" && Be() ? 1 : 0;
    if (Math.abs(p - Number(d.cutoutPanoFrameTarget || 0)) > 1e-6 && (d.cutoutPanoFrameFrom = Number(d.cutoutPanoFrameAlpha || 0), d.cutoutPanoFrameTarget = p, d.cutoutPanoFrameStartTs = i), Math.abs(Number(d.cutoutPanoFrameAlpha || 0) - p) > 1e-6) {
      const b = Y(
        (i - Number(d.cutoutPanoFrameStartTs || i)) / Eh,
        0,
        1
      );
      d.cutoutPanoFrameAlpha = Hn(
        Number(d.cutoutPanoFrameFrom || 0),
        p,
        rs(b)
      ), b >= 1 && (d.cutoutPanoFrameAlpha = p, p === 0 && (d.cutoutPanoFrameVisual = null)), se.dirty = !0;
    }
    if (d.outputPreviewAnim !== d.outputPreviewAnimTo) {
      const b = Math.max(1, Number(d.outputPreviewAnimDurationMs)), w = Y((i - Number(d.outputPreviewAnimStartTs || 0)) / b, 0, 1), C = d.outputPreviewAnimTo > d.outputPreviewAnimFrom ? hN(w) : bN(w);
      d.outputPreviewAnim = Hn(d.outputPreviewAnimFrom, d.outputPreviewAnimTo, C), se.dirty = !0, w >= 1 && (d.outputPreviewAnim = d.outputPreviewAnimTo);
    }
    if ((_ = d.viewTween) != null && _.active) {
      const b = d.viewTween, w = Y((i - b.startTs) / b.durationMs, 0, 1), k = rs(w);
      d.viewYaw = Bt(b.startYaw + b.deltaYaw * k), d.viewPitch = b.startPitch + (b.targetPitch - b.startPitch) * k, d.viewFov = b.startFov + (b.targetFov - b.startFov) * k, se.backgroundDirty = !0, se.dirty = !0, w >= 1 && (d.viewTween = null);
    }
    if (d.viewInertia.vx = Number(Qt.state.inertia.vx || 0), d.viewInertia.vy = Number(Qt.state.inertia.vy || 0), d.viewInertia.active = !!Qt.state.inertia.active, Qt.stepInertia(i) && (d.viewInertia.vx = Number(Qt.state.inertia.vx || 0), d.viewInertia.vy = Number(Qt.state.inertia.vy || 0), d.viewInertia.active = !!Qt.state.inertia.active, se.backgroundDirty = !0, se.dirty = !0), (se.dirty || i - se.lastSizeCheckTs >= 220) && (yf(), se.lastSizeCheckTs = i), se.pendingStableLayoutFrames > 0 && (se.pendingStableLayoutFrames -= 1, se.dirty = !0), se.dirty) {
      if (se.pendingStableLayoutFrames > 0)
        return;
      se.dirty = !1, R0();
    }
  }
  function vf(i = performance.now()) {
    if (se.running)
      try {
        $0(i);
      } catch (s) {
        const l = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
        se.tickErrorSignature !== l && (se.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", s)), P.stageStatus = gr, P.stageStatusDetail = "frame", J == null || J.setAttribute("data-stage-ready", ""), J == null || J.removeAttribute("data-stage-loading-kind");
      } finally {
        se.running && (se.rafId = requestAnimationFrame(vf));
      }
  }
  function j0() {
    se.running = !1, se.rafId && cancelAnimationFrame(se.rafId), se.rafId = 0;
  }
  function ot() {
    r || (d.historyController.commitActionGroup(JSON.stringify(nh(v))), zl());
  }
  function Tl(i) {
    if (r) return;
    const s = i < 0 ? d.historyController.undo() : d.historyController.redo();
    if (zl(), !s) return;
    const l = JSON.parse(s);
    Object.keys(v).forEach((c) => delete v[c]), Object.assign(v, l), d.selectedId = t === "stickers" || t === "cutout" ? v.active.selected_sticker_id : v.active.selected_shot_id, d.selectedIds = d.selectedId ? [d.selectedId] : [], qn(), Nn(), Ke(), Mn(), ye({ cause: "cutout_frame" });
  }
  function _f() {
    var l, c;
    const i = Array.isArray((l = d.historyController) == null ? void 0 : l.entries) ? d.historyController.entries : [], s = Number((c = d.historyController) == null ? void 0 : c.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function Nn() {
    So();
    const i = AS({
      editor: d,
      swatches: Ms,
      paintColorPopOpen: j ? !j.hidden : !1,
      colorToCss: lr,
      colorsApproximatelyEqual: Ps,
      rgb01ToHsv: vc,
      hsv01ToRgb: yc,
      getBrushPresetIdForTool: qr,
      isActiveLassoTool: hg
    });
    if (Object.assign(P.paintDock, i), vg(), !i.visible) {
      j && (j.hidden = !0);
      return;
    }
    re && (clearTimeout(re), re = 0), R && (!i.colorEnabled && j && !j.hidden && (re = window.setTimeout(() => {
      j.hidden = !0, P.paintDock.colorPopOpen = !1, re = 0;
    }, 170)), j && (j.style.setProperty("--picker-hue-color", i.pickerHueColor), j.style.setProperty("--picker-sat", i.pickerSat), j.style.setProperty("--picker-val", i.pickerVal), j.style.setProperty("--picker-hue", i.pickerHue)), _e && (_e.style.left = i.pickerSvLeft, _e.style.top = i.pickerSvTop), O && (O.style.left = i.pickerHueLeft));
  }
  function Hi() {
    const i = t === "cutout" && d.mode === "frame" ? Be() : At();
    i && (d.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: Er(i)
    }, Ke());
  }
  function Ke() {
    var Ge, et, Se, oe;
    if (a) return;
    v.ui_settings = v.ui_settings || {};
    const i = PS(v.ui_settings);
    if (o) {
      P.sidePanel = CS({
        coverage: v.coverage,
        uiSettings: i,
        normalizeCoverageValue: tn
      });
      return;
    }
    const s = At(), l = t === "cutout" && d.mode === "frame" ? Be() : null, c = l || s, p = l ? [l] : Wn(), m = l ? "shot" : Mo();
    p.length > 1 && (d.panelLastValues = d.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), c && m !== "stroke" && (d.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (m === "image" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (m === "image" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: Er(c)
    });
    const _ = d.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), b = m === "stroke" ? null : c, w = b || _, k = !!b && !Yn(b);
    d.panelWasEnabled = k, vl();
    let C = null;
    if (l) {
      const be = ml({ item: l, kind: "shot", label: "Frame" });
      C = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: be.label,
        currentIcon: be.icon || null,
        items: [{
          id: String(l.id || ""),
          label: be.label,
          icon: be.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const be = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? Sr().forEach((De, We) => {
        var en, Pt;
        if (!De) return;
        const st = Yt(De) ? String(De.id || es) : String(((Pt = (en = v.assets) == null ? void 0 : en[De.asset_id]) == null ? void 0 : Pt.name) || De.asset_id || De.id), Je = `${We + 1}. ${st}${Yt(De) && Ii(De) ? " (hidden)" : ""}`, xt = ml({ item: De, label: Je, kind: "image" });
        be.push({ id: De.id, label: xt.label, icon: xt.icon, item: De, kind: "image" });
      }) : ju().forEach((De) => {
        if (!(De != null && De.item)) return;
        const We = ml(De);
        be.push({ id: De.item.id, label: We.label, icon: We.icon, item: De.item, kind: De.kind });
      });
      const Fe = (b == null ? void 0 : b.id) || "", Re = be.find((De) => De.id === Fe) || be[0];
      C = {
        label: "Selection",
        open: !1,
        disabled: be.length <= 1,
        currentLabel: Re.label,
        currentIcon: Re.icon || null,
        items: be.map((De) => ({
          id: De.id,
          label: De.label,
          icon: De.icon || null,
          active: De.id === Fe
        }))
      };
    }
    const N = [], F = (be, Fe, Re, De, We) => {
      const st = Y(Number(w[be] || 0), Re, De);
      N.push({
        key: be,
        label: Fe,
        min: Re,
        max: De,
        step: We,
        value: st,
        displayValue: Zi(st),
        fillPct: Y((st - Re) / Math.max(1e-6, De - Re) * 100, 0, 100),
        enabled: k && !r
      });
    }, U = [];
    p.length > 1 ? (U.push(`Selected objects: ${p.length}`), U.push("Multi-selection supports z-order and delete.")) : (F("yaw_deg", "Yaw", -180, 180, 0.1), F("pitch_deg", "Pitch", -90, 90, 0.1), F("hFOV_deg", "H FOV", 1, 179, 0.1), F("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? F("rot_deg", "Rotation", -180, 180, 0.1) : F("roll_deg", "Roll", -180, 180, 0.1));
    const Z = Array.isArray((et = (Ge = v == null ? void 0 : v.painting) == null ? void 0 : Ge.paint) == null ? void 0 : et.strokes) ? v.painting.paint.strokes.length : 0, W = Array.isArray((oe = (Se = v == null ? void 0 : v.painting) == null ? void 0 : Se.mask) == null ? void 0 : oe.strokes) ? v.painting.mask.strokes.length : 0, q = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((be) => String((be == null ? void 0 : be.name) || "")) : [], ue = dN(
      e,
      q.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), ge = !!String((ue == null ? void 0 : ue.src) || "").trim() || Hu("pano_input_images").length > 0, ce = Array.isArray(Sr()) && Sr().length > 0 || Z > 0, Ne = W > 0, $e = [
      { key: "mask", label: "Mask", icon: Ee.circle_dashed_tool, visible: !!d.showMask, enabled: Ne },
      { key: "objects", label: "Paint / Images", icon: Ee.image, visible: !!d.showObjects, enabled: ce },
      { key: "panorama", label: "Panorama", icon: Ee.globe, visible: !!d.showPanorama, enabled: ge }
    ].map((be) => ({
      ...be,
      ariaLabel: `Toggle ${be.label.toLowerCase()}`,
      tip: be.visible ? "Hide" : "Show"
    }));
    P.sidePanel = TS({
      coverage: v.coverage,
      readOnly: r,
      selectionPicker: C,
      enabled: k,
      selectedKind: m,
      selectedItems: p,
      params: N,
      notes: U,
      visibilityRows: $e,
      uiSettings: i,
      normalizeCoverageValue: tn
    });
  }
  async function xf(i) {
    if (r || t !== "stickers" && t !== "cutout" || !Qn(i)) return;
    const s = us("asset"), l = $c(e, `add:${s}`, async () => {
      try {
        const { image: c } = await jc(i);
        ze.set(s, c);
        const p = us("st");
        v.stickers.push({
          id: p,
          asset_id: s,
          yaw_deg: d.viewYaw,
          pitch_deg: d.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: Fi(30, Number(c.naturalWidth || c.width || 1), Number(c.naturalHeight || c.height || 1)),
          rot_deg: 0,
          z_index: Vu()
        }), Ti(v.stickers[v.stickers.length - 1]), El(), Ke(), Ze(), ye();
        const m = await ks(i, {
          fetchApi: (w, k) => dn.fetchApi(w, k)
        });
        if (!(Array.isArray(v.stickers) ? v.stickers : []).filter((w) => String((w == null ? void 0 : w.asset_id) || "") === s).length) return;
        v.assets[s] = m, zi(), ot(), lt(), Ke(), Ze(), ye();
      } catch (c) {
        delete v.assets[s], ze.delete(s);
        const p = Array.isArray(v.stickers) ? v.stickers : [], m = p.filter((_) => String((_ == null ? void 0 : _.asset_id) || "") === s);
        throw m.length && (v.stickers = p.filter((_) => String((_ == null ? void 0 : _.asset_id) || "") !== s), m.some((_) => String((_ == null ? void 0 : _.id) || "") === String(d.selectedId || "")) && Ti(null), Ke(), Ze(), ye(), lt()), c;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function V0() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = B == null ? void 0 : B.openImagePicker) == null || i.call(B, "add");
  }
  async function H0(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = At();
    if (!s || !vt(s) || Yt(s) || !Qn(i)) return;
    const l = String(s.id || ""), c = us("asset"), p = $c(e, `replace:${l}:${c}`, async () => {
      var C;
      const m = (Array.isArray(v.stickers) ? v.stickers : []).find((N) => String((N == null ? void 0 : N.id) || "") === l) || null;
      if (!m || !vt(m) || Yt(m)) return;
      const _ = String(m.asset_id || ""), b = _ ? ln(((C = v.assets) == null ? void 0 : C[_]) || null) : null, w = Number(m.vFOV_deg || 0), k = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: N } = await jc(i);
        ze.set(c, N), m.asset_id = c, m.vFOV_deg = Fi(
          Number(m.hFOV_deg || 30),
          Number(N.naturalWidth || N.width || 1),
          Number(N.naturalHeight || N.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Zt(), Ke(), Ze(), ye();
        const F = await ks(i, {
          fetchApi: (Z, W) => dn.fetchApi(Z, W)
        }), U = (Array.isArray(v.stickers) ? v.stickers : []).find((Z) => String((Z == null ? void 0 : Z.id) || "") === l) || null;
        if (!U || String(U.asset_id || "") !== c) return;
        v.assets[c] = F, zi(), ot(), lt(), Ke(), Ze(), ye();
      } catch (N) {
        delete v.assets[c], ze.delete(c);
        const F = (Array.isArray(v.stickers) ? v.stickers : []).find((U) => String((U == null ? void 0 : U.id) || "") === l) || null;
        throw F && String(F.asset_id || "") === c && (_ && b && (v.assets[_] = b), F.asset_id = _, F.vFOV_deg = w, F.crop = k ? { ...k } : null), Zt(), lt(), Ke(), Ze(), ye(), N;
      }
    });
    try {
      await p;
    } catch {
    }
  }
  function U0() {
    var s;
    if (r) return;
    const i = At();
    !i || !vt(i) || Yt(i) || (s = B == null ? void 0 : B.openImagePicker) == null || s.call(B, "replace");
  }
  async function B0() {
    if (r || t !== "stickers") return;
    const i = v.assets && typeof v.assets == "object" ? v.assets : {}, s = Object.entries(i).filter(([, c]) => {
      const p = String((c == null ? void 0 : c.type) || "").toLowerCase(), m = String((c == null ? void 0 : c.value) || "");
      return p === "dataurl" && m.startsWith("data:image");
    });
    if (!s.length) return;
    let l = !1;
    for (const [c, p] of s)
      try {
        const m = String((p == null ? void 0 : p.value) || "");
        if (!m) continue;
        const _ = await fetch(m).then((N) => N.blob()), b = String(_.type || "image/png").split("/")[1] || "png", w = String((p == null ? void 0 : p.name) || `${c}.${b}`), k = new File([_], w, { type: _.type || "image/png" }), C = await ks(k, {
          fetchApi: (N, F) => dn.fetchApi(N, F)
        });
        v.assets[c] = {
          ...C,
          w: Number((p == null ? void 0 : p.w) || 0),
          h: Number((p == null ? void 0 : p.h) || 0)
        }, l = !0;
      } catch {
      }
    l && (lt(), ye());
  }
  function G0() {
    if (r || t !== "cutout") return;
    const i = Be();
    if (i) {
      Ti(i), d.mode = "pano", sl(
        Bt(Number(i.yaw_deg || 0)),
        Y(Number(i.pitch_deg || 0), -89.9, 89.9),
        d.viewFov
      ), Ke(), Ze(), ye({ cause: "cutout_frame" });
      return;
    }
    const s = rm({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Bt(Number(d.viewYaw || 0)),
      pitchDeg: Number(d.viewPitch || 0),
      viewFovDeg: Number(d.viewFov || 90)
    });
    v.shots = [s], Ti(s), El(), d.mode = "pano", ot(), lt(), Ke(), Ze(), ye({ cause: "cutout_frame" });
  }
  function K0() {
    r || t !== "cutout" || (v.shots = [], d.selectedId = null, d.selectedIds = [], d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, v.active.selected_shot_id = null, ot(), lt(), Ke(), Ze(), ye());
  }
  function W0() {
    const i = Array.isArray(v.stickers) ? v.stickers : [], s = [];
    for (const l of i)
      Yt(l) && (l.visible = !1, s.push(l));
    return s;
  }
  function Sf(i, s, l = "Clear") {
    return new Promise((c) => {
      P.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(s || ""),
        confirmLabel: String(l || "Confirm"),
        resolve: c
      };
    });
  }
  async function Y0() {
    var l, c;
    if (r || !await Sf(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    v.painting = ro(null), qn();
    const s = W0();
    if (t === "stickers")
      v.stickers = s, v.assets = {}, d.selectedId = ((l = s[0]) == null ? void 0 : l.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], v.active.selected_sticker_id = ((c = s[0]) == null ? void 0 : c.id) || null, zi();
    else {
      const p = Z_(v.shots, v.active.selected_shot_id);
      v.stickers = s, v.assets = {}, v.shots = p.shots, d.selectedId = p.selectedShotId, d.selectedIds = d.selectedId ? [d.selectedId] : [], v.active.selected_sticker_id = null, v.active.selected_shot_id = p.selectedShotId, !p.selectedShotId && d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, zi();
    }
    ot(), lt(), Ke(), Ze(), ye();
  }
  async function q0(i) {
    var m, _, b, w;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", l = s === "mask" ? "Mask" : "Paint", c = Ui(s);
    if (!(!c.length && !(((m = d.interaction) == null ? void 0 : m.kind) === "draw" && ((_ = d.interaction) == null ? void 0 : _.layerKind) === s) || !await Sf(
      `Clear ${l}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((b = d.interaction) == null ? void 0 : b.kind) === "draw" && ((w = d.interaction) == null ? void 0 : w.layerKind) === s) {
        const k = On();
        k && d.paintEngine.cancelActiveStroke(k), d.interaction = null;
      }
      c.length = 0, v.painting.raster_objects = kn().filter((k) => String((k == null ? void 0 : k.layerKind) || "paint") !== s), s === "paint" && (an().length = 0), qn(), ot(), lt(), Ke(), Ze(), Nn(), ye();
    }
  }
  function X0() {
    if (r) return;
    const i = At();
    if (!i || !vt(i) || Yt(i)) return;
    const s = JSON.parse(JSON.stringify(i));
    s.id = us("st"), s.yaw_deg = Bt((s.yaw_deg || 0) + 8), s.z_index = Vu(), v.stickers.push(s), v.active.selected_sticker_id = s.id, d.selectedId = s.id, d.selectedIds = [s.id], Zt(), ot(), lt(), Ze(), Ke(), ye();
  }
  function wf() {
    var l, c, p, m, _, b;
    if (r) return;
    const i = Wn(), s = At();
    if (!(!s && i.length === 0)) {
      if (i.length > 1) {
        const w = new Set(i.filter((N) => Ht(N)).map((N) => String(N.actionGroupId || N.id || ""))), k = new Set(i.filter((N) => on(N)).map((N) => Wt(N.rasterObjectId || N.id || ""))), C = new Set(i.filter(vt).map((N) => String(N.id || "")));
        w.size > 0 && (v.painting.paint.strokes = (Array.isArray((c = (l = v.painting) == null ? void 0 : l.paint) == null ? void 0 : c.strokes) ? v.painting.paint.strokes : []).filter((N) => !w.has(String((N == null ? void 0 : N.actionGroupId) || ""))), v.painting.groups = an().filter((N) => !w.has(String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || ""))), qn()), k.size > 0 && (v.painting.raster_objects = kn().filter((N) => !k.has(String((N == null ? void 0 : N.id) || ""))), Vi()), C.size > 0 && (v.stickers = (Array.isArray(v.stickers) ? v.stickers : []).filter((N) => C.has(String((N == null ? void 0 : N.id) || "")) ? Yt(N) ? (Ii(N) || (N.visible = !1), !0) : !1 : !0), zi(), Zt()), d.selectedId = null, d.selectedIds = [], ot(), lt(), Ke(), Ze(), ye();
        return;
      }
      if (Ht(s)) {
        const w = String(s.actionGroupId || s.id || "").trim();
        v.painting.paint.strokes = (Array.isArray((m = (p = v.painting) == null ? void 0 : p.paint) == null ? void 0 : m.strokes) ? v.painting.paint.strokes : []).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() !== w), v.painting.groups = an().filter((k) => String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim() !== w), qn(), d.selectedId = null, d.selectedIds = [], ot(), lt(), Ke(), Ze(), ye();
        return;
      }
      if (on(s)) {
        const w = Wt(s.rasterObjectId || s.id || "");
        v.painting.raster_objects = kn().filter((k) => String((k == null ? void 0 : k.id) || "").trim() !== w), Vi(), d.selectedId = null, d.selectedIds = [], ot(), lt(), Ke(), Ze(), ye();
        return;
      }
      if (t === "stickers" || vt(s)) {
        if (Yt(s)) {
          if (Ii(s)) return;
          s.visible = !1, Zt(), ot(), lt(), Ke(), Ze(), ye();
          return;
        }
        v.stickers = v.stickers.filter((w) => w.id !== s.id), zi(), Zt(), d.selectedId = ((_ = v.stickers[0]) == null ? void 0 : _.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], v.active.selected_sticker_id = ((b = v.stickers[0]) == null ? void 0 : b.id) || null, ot(), lt(), Ke(), Ze(), ye();
        return;
      }
      K0();
    }
  }
  function Il(i, s) {
    const l = se.frameSafeRect;
    if (!i || !l || d.mode !== "frame") return !1;
    const c = hc * fa(l, i), p = tm(ku(l, s), c);
    return i.hFOV_deg = p.hFOV_deg, i.vFOV_deg = p.vFOV_deg, !0;
  }
  function kf(i, s) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, c = (() => {
      const b = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(b)) {
        const [C, N] = b.split(":").map((F) => Number(F));
        if (Number.isFinite(C) && Number.isFinite(N)) return C >= N;
      }
      const w = Number(i.hFOV_deg || 64), k = Number(i.vFOV_deg || 40);
      return Math.abs(w - k) > 1e-6 ? w >= k : da(i) >= 1;
    })();
    let [p, m] = l[String(s)] || l["1:1"];
    p >= m !== c && ([p, m] = [m, p]);
    const _ = p / m;
    if (!Il(i, _)) {
      const b = Y(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = b, i.hFOV_deg = _s(b, _);
    }
    i.aspect_id = `${p}:${m}`;
  }
  function J0(i, s, l) {
    if (!i || i.locked === !0) return !1;
    const c = fo(s, l);
    if (!c) return !1;
    const p = c.ratio;
    if (!Il(i, p)) {
      const m = Y(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = _s(m, p);
    }
    return i.aspect_id = c.label, !0;
  }
  function Nf(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), l = xo(i), c = l.tanHalfX / Math.max(1e-12, l.tanHalfY), p = 1 / Math.max(1e-12, c);
    if (!Il(i, p)) {
      const m = Y(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = _s(m, p);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, _] = s.split(":");
      i.aspect_id = `${_}:${m}`;
    } else
      i.aspect_id = bi(i);
  }
  function Mf() {
    Pi().forEach((s, l) => {
      s.type === "sticker" && s.item && (s.item.z_index = l), s.type === "strokeGroup" && s.item && (s.item.z_index = l), s.type === "rasterObject" && s.item && (s.item.z_index = l);
    });
  }
  function Z0() {
    if (r) return;
    const i = Wn();
    if (!At() || i.length === 0) return;
    Mf();
    const l = Pi(), c = new Set(i.map((b) => vt(b) ? `sticker:${String(b.id || "")}` : on(b) ? `rasterObject:${Wt(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), p = [], m = [];
    if (l.forEach((b) => {
      var k, C;
      const w = b.type === "sticker" ? `sticker:${String(((k = b.item) == null ? void 0 : k.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((C = b.item) == null ? void 0 : C.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      c.has(w) ? p.push(b) : m.push(b);
    }), !p.length || p[p.length - 1] === l[l.length - 1]) return;
    [...m, ...p].forEach((b, w) => {
      b.type === "sticker" && b.item && (b.item.z_index = w), b.type === "strokeGroup" && b.item && (b.item.z_index = w), b.type === "rasterObject" && b.item && (b.item.z_index = w);
    }), Zt(), ot(), lt(), Ze(), ye();
  }
  function Q0() {
    if (r) return;
    const i = Wn();
    if (!At() || i.length === 0) return;
    Mf();
    const l = Pi(), c = new Set(i.map((b) => vt(b) ? `sticker:${String(b.id || "")}` : on(b) ? `rasterObject:${Wt(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), p = [], m = [];
    if (l.forEach((b) => {
      var k, C;
      const w = b.type === "sticker" ? `sticker:${String(((k = b.item) == null ? void 0 : k.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((C = b.item) == null ? void 0 : C.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      c.has(w) ? p.push(b) : m.push(b);
    }), !p.length || p[0] === l[0]) return;
    [...p, ...m].forEach((b, w) => {
      b.type === "sticker" && b.item && (b.item.z_index = w), b.type === "strokeGroup" && b.item && (b.item.z_index = w), b.type === "rasterObject" && b.item && (b.item.z_index = w);
    }), Zt(), ot(), lt(), Ze(), ye();
  }
  function eb() {
    r || (v.projection_model = "pinhole_rectilinear", v.alpha_mode = "straight", f && (v.output_preset = M(Number(v.output_preset || 2048))), h && (v.coverage = tn(h.value)), g && (v.bg_color = String(g.value || v.bg_color || "#00ff00")), Mn(), e.setDirtyCanvas(!0, !0));
  }
  function Mn() {
    var s;
    if (r) return;
    v.coverage = tn(v.coverage);
    const i = JSON.stringify(v);
    y && (y.value = i, (s = y.callback) == null || s.call(y, i));
  }
  const Pf = () => Mn();
  r || (e.__panoFlushStateBeforeQueue = Pf);
  function zo() {
    v.ui_settings = SN(v.ui_settings), r || Mn();
  }
  function lt() {
    var i;
    r || (Mn(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function tb() {
    r || Lg() && tf().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function nb(i = {}) {
    var c, p, m, _, b, w, k, C, N, F;
    const s = i.syncPreview !== !1, l = i.syncGraph !== !1;
    s && ((p = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || p.call(c), (_ = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || _.call(m), (b = e.setDirtyCanvas) == null || b.call(e, !0, !1)), l && ((k = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || k.call(w, !0, !0), (F = (N = (C = tr) == null ? void 0 : C.canvas) == null ? void 0 : N.setDirty) == null || F.call(N, !0, !0));
  }
  function El() {
    d.primaryTool !== "cursor" && (d.primaryTool = "cursor", Nn(), Ke());
  }
  function li(i) {
    const s = T.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * T.width,
      y: (i.clientY - s.top) / s.height * T.height
    };
  }
  function $o(i) {
    const s = T.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function Af() {
    return d.mode === "pano" || d.mode === "unwrap";
  }
  function Be() {
    if (t !== "cutout") return null;
    const i = Array.isArray(v.shots) ? v.shots : [];
    if (!i.length) return null;
    const s = String(v.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === s) || i[0] || null;
  }
  function rb() {
    var U, Z, W, q, ue;
    if (!T) return null;
    const i = (U = T.getBoundingClientRect) == null ? void 0 : U.call(T), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? T.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? T.height / i.height : 1;
    se.frameCanvasScale = Math.min(s, l);
    let c = 24, p = 24;
    const m = Math.max(c + 1, T.width - 24);
    let _ = Math.max(p + 1, T.height - 24);
    const b = (Z = yt == null ? void 0 : yt.getBoundingClientRect) == null ? void 0 : Z.call(yt), w = (W = nt == null ? void 0 : nt.getBoundingClientRect) == null ? void 0 : W.call(nt);
    let k = 24;
    b && i && b.width > 0 && b.height > 0 && (k = Math.max(k, (b.right - i.left) * s + Ih)), w && i && w.width > 0 && w.height > 0 && ((q = P.frameRail) == null ? void 0 : q.visible) === !0 && (k = Math.max(k, (i.right - w.left) * s + Ih)), c = Math.max(c, k);
    const C = Math.min(m, T.width - k);
    let N = 24;
    const F = (ue = Qe == null ? void 0 : Qe.getBoundingClientRect) == null ? void 0 : ue.call(Qe);
    if (F && i && F.width > 0 && F.height > 0 && (N = Math.max(N, (F.bottom - i.top) * l + pc)), [Vt, Tn].forEach((ge) => {
      var $e;
      if (!ge || !i) return;
      const ce = getComputedStyle(ge);
      if (ce.display === "none" || ce.visibility === "hidden" || Number(ce.opacity) <= 0) return;
      const Ne = ($e = ge.getBoundingClientRect) == null ? void 0 : $e.call(ge);
      !Ne || Ne.width <= 0 || Ne.height <= 0 || (N = Math.max(N, (i.bottom - Ne.top) * l + pc));
    }), Le && i) {
      const ge = getComputedStyle(Le);
      ge.display !== "none" && ge.visibility !== "hidden" && Number(ge.opacity) > 0 && (N = Math.max(N, (rN + pc) * l));
    }
    return p = Math.max(p, N), _ = Math.max(p + 1, Math.min(_, T.height - N)), {
      x: c,
      y: p,
      w: Math.max(1, C - c),
      h: Math.max(1, _ - p)
    };
  }
  function Dl(i = Be()) {
    if (!i || !T) return null;
    const s = se.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, T.width - 48),
      h: Math.max(1, T.height - 48)
    };
    return L1(s, i, hc * fa(s, i));
  }
  function Ut(i = Be()) {
    const s = Dl(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function Ol() {
    return t === "cutout" && !!Be();
  }
  function Xn(i, s = performance.now()) {
    if (d.mode === "unwrap") {
      const m = Wr(), _ = (i.x - m.x) / Math.max(1, m.w), b = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (_ % 1 + 1) % 1,
        v: Y(b, 0, 1),
        t: Number(s || 0)
      };
    }
    const l = xl(i.x, i.y), { lon: c, lat: p } = wl(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (c / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Y(0.5 - p / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Jn(i, s, l = performance.now()) {
    const c = Ut(s);
    if (!c) return null;
    const p = {
      x: (Number(i.x) - c.x) / Math.max(1, c.w),
      y: (Number(i.y) - c.y) / Math.max(1, c.h)
    };
    if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1) return null;
    const m = Pl(s, p);
    if (!m) return null;
    const { lon: _, lat: b } = wl(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (_ / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Y(0.5 - b / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function ib(i, s) {
    const l = Be();
    if (!l || l.locked === !0) return !1;
    const c = Number(s) > 0, p = am(l, s);
    if (!p) return !1;
    if (c) {
      const m = hc * fa(
        se.frameSafeRect || { w: T.width, h: T.height },
        p
      ), _ = Oc({ width: T.width, height: T.height }, m);
      if (_.halfW < T.width * 0.5 - 1e-6 || _.halfH < T.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = p.hFOV_deg, l.vFOV_deg = p.vFOV_deg, d.frameWheelChanged = !0, d.frameWheelCommitTimer && window.clearTimeout(d.frameWheelCommitTimer), d.frameWheelCommitTimer = window.setTimeout(() => {
      d.frameWheelCommitTimer = 0, d.frameWheelChanged && (d.frameWheelChanged = !1, ot(), lt(), Ke());
    }, 180), Ke(), !0;
  }
  function ab() {
    return d.frameWheelCommitTimer && (window.clearTimeout(d.frameWheelCommitTimer), d.frameWheelCommitTimer = 0), d.frameWheelChanged ? (d.frameWheelChanged = !1, ot(), lt(), Ke(), !0) : !1;
  }
  function Oa() {
    const i = d.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && ci(), d.interaction = null, Ri(), kr(), Ke(), _t(d.pointerPos), ye({ localOnly: !0 }), !0;
  }
  function ob(i, s) {
    const l = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function qr(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? Ar : Pn[s] ? s : d.activeBrushPresetId || Ar;
  }
  function Cf() {
    return (d.primaryTool === "paint" || d.primaryTool === "mask") && (Af() || Ol());
  }
  function Tf() {
    var i;
    return Cf() && ((i = d.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function jo(i, s = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), c = Number((i == null ? void 0 : i.y) || 0), p = s !== !1, m = d.pointerPos || { x: 0, y: 0, inside: !1 }, _ = m.inside !== p || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - c) > 0.01;
    return d.pointerPos = { x: l, y: c, inside: p }, _;
  }
  function sb() {
    var C, N;
    if (!Tf()) return null;
    const i = d.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? d.maskTool : d.paintTool, l = qr(s), c = Pn[l] || Pn[Ar], p = Number(d.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(c.sizeScale ?? 1)), _ = Math.max(3, m * 0.5), b = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Fn(d.paintColor), w = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : Y(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), k = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : Y(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: c,
      radius: _,
      fillStyle: lr(b, w),
      strokeStyle: lr(b, k),
      x: Number(((C = d.pointerPos) == null ? void 0 : C.x) || 0),
      y: Number(((N = d.pointerPos) == null ? void 0 : N.y) || 0),
      hotspotX: _,
      hotspotY: _
    };
  }
  function lb() {
    var F, U, Z;
    const i = sb();
    if (!pe) return;
    if (!i) {
      pe.style.display = "none";
      return;
    }
    let s = i.radius * 2, l = i.radius * 2, c = "999px", p = 0, m = i.fillStyle, _ = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const w = "rgba(222, 222, 222, 0.72)", k = "rgba(52, 52, 52, 0.72)";
    let C = Number(i.hotspotX ?? s * 0.5), N = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Ks, l = Ks, c = "0", _ = "0", b = "none", C = oN, N = sN, m = vN(i.fillStyle, k, w);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const W = Math.max(1, Number(((F = i.preset) == null ? void 0 : F.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * W), l = Math.max(6, i.radius * 2), c = `${Math.min(6, l * 0.42)}px`, p = Number(((Z = (U = i.preset) == null ? void 0 : U.angle) == null ? void 0 : Z.value) || 0) * Dr;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    pe.style.display = "block", pe.style.width = `${Math.round(s)}px`, pe.style.height = `${Math.round(l)}px`, pe.style.borderRadius = c, pe.style.border = _, pe.style.boxShadow = b, pe.style.background = m, pe.style.backgroundRepeat = "no-repeat", pe.style.backgroundPosition = "center", pe.style.backgroundSize = "contain", pe.style.transform = `translate(${Math.round(i.x - C)}px, ${Math.round(i.y - N)}px) rotate(${p}deg)`;
  }
  function cb() {
    var ge;
    if (!fe || !we) return;
    const i = d.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? d.maskTool : d.paintTool;
    if (s === "lasso_fill") return;
    const l = qr(s), c = Pn[l] || Pn[Ar], p = Number(d.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(c.sizeScale ?? 1)), _ = Math.max(6, m * 0.5), b = s === "eraser", w = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : Fn(d.paintColor), k = i === "mask" ? lr(w, 0.22) : b ? "rgba(255,255,255,0.14)" : lr(w, Y(Math.max(0.18, Number(w.a ?? 1) * 0.34), 0.18, 0.56)), C = i === "mask" ? lr(w, 0.96) : b ? "rgba(255,255,255,0.72)" : lr(w, Y(Math.max(0.56, Number(w.a ?? 1) * 0.96), 0.56, 1));
    let N = _ * 2, F = _ * 2, U = "999px", Z = 0, W = k;
    const q = "rgba(222, 222, 222, 0.72)", ue = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      W = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const ce = Math.max(1, Number((c == null ? void 0 : c.aspect) ?? 1));
      N = Math.max(16, _ * 2 * ce), F = Math.max(10, _ * 2), U = `${Math.min(8, F * 0.42)}px`, Z = Number(((ge = c == null ? void 0 : c.angle) == null ? void 0 : ge.value) || 0) * Dr;
    } else s === "brush" ? W = `radial-gradient(circle at 50% 50%, ${C} 0%, ${k} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (N = Math.max(18, _ * 1.8), F = N, W = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${C} 43%, ${C} 58%, rgba(0,0,0,0) 59%)`) : b && (W = "rgba(255,255,255,0.12)");
    we.style.width = `${Math.round(N)}px`, we.style.height = `${Math.round(F)}px`, we.style.borderRadius = U, we.style.background = W, we.style.border = `1px solid ${q}`, we.style.boxShadow = `0 0 0 1px ${ue}`, we.style.transform = `rotate(${Z}deg)`, ee && (clearTimeout(ee), ee = 0), fe.classList.remove("fade-out"), fe.classList.add("show");
  }
  function Vo() {
    !fe || !fe.classList.contains("show") || (fe.classList.add("fade-out"), ee && clearTimeout(ee), ee = window.setTimeout(() => {
      fe.classList.remove("show", "fade-out"), ee = 0;
    }, 180));
  }
  function If(i, s, l, c) {
    const p = qr(s), m = Pn[p] || Pn[Ar], _ = d.brushSizes[p] ?? 10, b = Math.max(1, _) * Math.max(0.1, m.sizeScale ?? 1), w = ob(c, b), k = l.map((N) => ({
      ...N,
      t: Number((N == null ? void 0 : N.t) || 0),
      widthScale: Number.isFinite(Number(N == null ? void 0 : N.widthScale)) ? Math.max(0, Number(N.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(N == null ? void 0 : N.pressureLike)) ? Math.max(0, Number(N.pressureLike)) : 1
    })), C = {
      id: Qi(i),
      actionGroupId: Qi("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(d.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(d.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: b,
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
    return Mh(C, m), Number(m.aspect ?? 1), Number(C.aspect ?? 1), String(C.stampKind || ""), Number(C.size || 0), String(C.radiusModel || ""), Number(C.radiusValue || 0), { ...C.targetSpace }, C;
  }
  function Ef(i, s, l, c) {
    const p = l.map((w) => ({
      ...w,
      t: Number((w == null ? void 0 : w.t) || 0),
      widthScale: Number.isFinite(Number(w == null ? void 0 : w.widthScale)) ? Math.max(0, Number(w.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(w == null ? void 0 : w.pressureLike)) ? Math.max(0, Number(w.pressureLike)) : 1
    })), m = qr(s), _ = Pn[m] || Pn[Ar], b = {
      id: Qi(i),
      actionGroupId: Qi("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(d.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(d.mode || "pano") },
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
    return Mh(b, _), Number(_.aspect ?? 1), Number(b.aspect ?? 1), String(b.stampKind || ""), { ...b.targetSpace }, b;
  }
  function Ui(i) {
    const s = v.painting || (v.painting = ro(null)), l = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function ub(i, s, l = performance.now()) {
    let c;
    if (d.mode === "frame") {
      const k = Be();
      if (!k || (c = Jn(s, k, l), !c)) return !1;
    } else
      c = Xn(s, l);
    if (!c) return !1;
    const p = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, _ = p[p.length - 1];
    if (_) {
      const k = Math.abs(Number(c.u ?? c.x ?? 0) - Number(_.u ?? _.x ?? 0)), C = Math.abs(Number(c.v ?? c.y ?? 0) - Number(_.v ?? _.y ?? 0));
      if (k < 15e-4 && C < 15e-4) return !1;
    }
    const b = {
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    p.push({ ...b }), m.push({ ...b });
    const w = On();
    if (w) {
      const k = d.paintEngine.ensureTarget(w);
      d.paintEngine.appendStrokePoint(k, Number(b.u ?? 0), Number(b.v ?? 0), i.stroke);
    }
    return !0;
  }
  function fb(i, s, l = performance.now()) {
    var _, b;
    let c;
    if (d.mode === "frame") {
      const w = Be();
      if (!w) return !1;
      c = Jn(s, w, l);
    } else
      c = Xn(s, l);
    const p = (b = (_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.geometry) == null ? void 0 : b.points;
    if (!c || !Array.isArray(p)) return !1;
    const m = p[p.length - 1];
    if (m) {
      const w = Math.abs(Number(c.u ?? c.x ?? 0) - Number(m.u ?? m.x ?? 0)), k = Math.abs(Number(c.v ?? c.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (w < 15e-4 && k < 15e-4) return !1;
    }
    return p.push({
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function db(i) {
    var ce, Ne, $e, Ge, et;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    Ro();
    const l = On(), c = Ia(l.width, l.height);
    if (!gf(c, s, { w: l.width, h: l.height })) return !1;
    const p = ((Ne = (ce = c.ctx) == null ? void 0 : ce.getImageData(0, 0, l.width, l.height)) == null ? void 0 : Ne.data) || null;
    if (!p) return !1;
    const m = new Map(an().map((Se) => [String((Se == null ? void 0 : Se.actionGroupId) || (Se == null ? void 0 : Se.id) || "").trim(), Se ? { ...Se } : null])), _ = [], b = [], w = [...kn().filter((Se) => String((Se == null ? void 0 : Se.layerKind) || "paint") !== "paint")];
    let k = !1, C = Pi().reduce((Se, oe) => Math.max(Se, Number((oe == null ? void 0 : oe.z_index) || 0)), -1) + 1;
    function N(Se, oe, be, Fe = 8) {
      let Re = oe, De = be, We = -1, st = -1;
      for (let Je = 0; Je < be; Je += 1)
        for (let xt = 0; xt < oe; xt += 1)
          Se[(Je * oe + xt) * 4 + 3] <= Fe || (xt < Re && (Re = xt), Je < De && (De = Je), xt > We && (We = xt), Je > st && (st = Je));
      return We < Re || st < De ? null : { minX: Re, minY: De, maxX: We, maxY: st };
    }
    const F = N(p, l.width, l.height, 8);
    if (!F) return !1;
    function U(Se, oe) {
      return !Se || !oe ? !1 : !(Se.maxX < oe.minX || oe.maxX < Se.minX || Se.maxY < oe.minY || oe.maxY < Se.minY);
    }
    function Z(Se, oe) {
      const be = Kr((Se == null ? void 0 : Se.actionGroupId) || (Se == null ? void 0 : Se.id) || "", "paint", oe);
      if (!be) return null;
      const Fe = be.centerUv.u - be.halfW, Re = be.centerUv.u + be.halfW, De = be.centerUv.v - be.halfH, We = be.centerUv.v + be.halfH, st = l.width, Je = l.height;
      return {
        minX: Math.floor((Fe % 1 + 1) % 1 * st),
        maxX: Math.ceil((Re % 1 + 1) % 1 * st),
        minY: Math.floor(Y(De, 0, 1) * Je),
        maxY: Math.ceil(Y(We, 0, 1) * Je),
        wraps: Re - Fe >= 1 || Fe < 0 || Re > 1
      };
    }
    function W(Se) {
      const oe = (Se == null ? void 0 : Se.bbox) || null;
      if (!oe) return null;
      const be = (Se == null ? void 0 : Se.transform) || {}, Fe = l.width, Re = l.height, De = Number(oe.u0 || 0) + Number(be.du || 0), We = Number(oe.u1 || 0) + Number(be.du || 0), st = Number(oe.v0 || 0) + Number(be.dv || 0), Je = Number(oe.v1 || 0) + Number(be.dv || 0);
      return {
        minX: Math.floor((De % 1 + 1) % 1 * Fe),
        maxX: Math.ceil((We % 1 + 1) % 1 * Fe),
        minY: Math.floor(Y(st, 0, 1) * Re),
        maxY: Math.ceil(Y(Je, 0, 1) * Re),
        wraps: We - De >= 1 || De < 0 || We > 1
      };
    }
    function q(Se) {
      return Se ? Se.wraps ? U(F, { minX: 0, maxX: Se.maxX, minY: Se.minY, maxY: Se.maxY }) || U(F, { minX: Se.minX, maxX: l.width - 1, minY: Se.minY, maxY: Se.maxY }) : U(F, Se) : !0;
    }
    function ue(Se) {
      if (!Se) return { touched: !1, canvas: null };
      const oe = Ia(l.width, l.height, { readback: !0 });
      oe.ctx.drawImage(Se, 0, 0);
      const be = oe.ctx.getImageData(0, 0, l.width, l.height);
      oe.ctx.save(), oe.ctx.globalCompositeOperation = "destination-out", oe.ctx.drawImage(c.canvas, 0, 0), oe.ctx.restore();
      const Fe = oe.ctx.getImageData(0, 0, l.width, l.height);
      for (let Re = 0; Re < l.width * l.height; Re += 1) {
        if (p[Re * 4 + 3] <= 8) continue;
        const We = be.data[Re * 4 + 3], st = Fe.data[Re * 4 + 3];
        if (We > st)
          return { touched: !0, canvas: oe.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ge(Se, oe, be) {
      const Fe = Number(be == null ? void 0 : be.z_index), Re = N0(Se, oe, be).map((De, We) => ({
        ...De,
        z_index: Number.isFinite(Fe) ? Fe + We * 1e-3 : C + We * 1e-3
      }));
      return Re.length && (C = Math.max(C, ...Re.map((De) => Number((De == null ? void 0 : De.z_index) || 0))) + 1), Re;
    }
    for (const Se of an()) {
      const oe = String((Se == null ? void 0 : Se.actionGroupId) || (Se == null ? void 0 : Se.id) || "").trim();
      if (!oe) continue;
      const be = Kn(oe, "paint");
      if (!q(Z(Se, be))) {
        b.push(Se), _.push(...be);
        continue;
      }
      const Fe = ((Ge = ($e = d.paintEngine) == null ? void 0 : $e.getGroupTarget) == null ? void 0 : Ge.call($e, oe)) || null, Re = ((et = Fe == null ? void 0 : Fe.committedPaint) == null ? void 0 : et.canvas) || null;
      if (!Re) {
        b.push(Se), _.push(...be);
        continue;
      }
      const De = ue(Re);
      if (!De.touched || !De.canvas) {
        b.push(Se), _.push(...be);
        continue;
      }
      k = !0;
      const We = ge(De.canvas, "paint", m.get(oe) || Se || {});
      w.push(...We);
    }
    for (const Se of kn().filter((oe) => String((oe == null ? void 0 : oe.layerKind) || "paint") === "paint")) {
      if (!q(W(Se))) {
        w.push(Se);
        continue;
      }
      const oe = Qu(Se, null);
      if (!oe) {
        w.push(Se);
        continue;
      }
      const be = ue(oe);
      if (!be.touched || !be.canvas) {
        w.push(Se);
        continue;
      }
      k = !0;
      const Fe = ge(be.canvas, "paint", Se);
      w.push(...Fe);
    }
    return k ? (v.painting.paint.strokes = _, v.painting.groups = b.sort((Se, oe) => Number((Se == null ? void 0 : Se.z_index) || 0) - Number((oe == null ? void 0 : oe.z_index) || 0)), v.painting.raster_objects = w.sort((Se, oe) => Number((Se == null ? void 0 : Se.z_index) || 0) - Number((oe == null ? void 0 : oe.z_index) || 0)), Aa({ preservePanelValues: !1 }), !0) : !1;
  }
  function hb(i) {
    var _, b, w, k, C;
    if ((((b = (_ = i.stroke) == null ? void 0 : _.geometry) == null ? void 0 : b.rawPoints) || ((k = (w = i.stroke) == null ? void 0 : w.geometry) == null ? void 0 : k.points) || []).length >= 1) {
      Fl(i);
      const N = On();
      N && (String(((C = i.stroke) == null ? void 0 : C.toolKind) || "") === "eraser" ? d.paintEngine.cancelActiveStroke(N) : d.paintEngine.commitActiveStroke(i.stroke, N)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(d.mode || "frame") }, p = If(i.layerKind, l.toolKind, [], c);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = On();
    m && d.paintEngine.beginStroke(p, m);
  }
  function pb(i) {
    var _, b;
    if ((((b = (_ = i.stroke) == null ? void 0 : _.geometry) == null ? void 0 : b.points) || []).length >= 3) {
      Fl(i);
      const w = On();
      w && d.paintEngine.commitActiveStroke(i.stroke, w), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(d.mode || "frame") }, p = Ef(i.layerKind, l.toolKind, [], c);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = On();
    m && d.paintEngine.beginStroke(p, m);
  }
  function Fl(i) {
    var m, _, b, w;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const l = String(((_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = Al(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), db(i);
    const c = i.layerKind === "paint" && l !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (c && Ou((b = i.stroke) == null ? void 0 : b.actionGroupId), Ui(i.layerKind).push(i.stroke), !0);
    const p = s.rawPoints || s.points || [];
    return p.length < 1 ? !1 : (s.processedPoints = Al(p, i.stroke.targetSpace, !0), c && Ou((w = i.stroke) == null ? void 0 : w.actionGroupId), Ui(i.layerKind).push(i.stroke), !0);
  }
  function Df(i) {
    var l;
    if (t === "cutout" && d.mode === "frame") {
      const c = Be(), p = Ut(c);
      if (!c || !p || !(Number((i == null ? void 0 : i.x) || 0) >= Number(p.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(p.x || 0) + Number(p.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(p.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(p.y || 0) + Number(p.h || 0))) return null;
      const _ = Jn(i, c, performance.now()), b = _ ? $i(_) : null;
      if (b)
        for (const k of Ml()) {
          if (!vt(k)) continue;
          const C = Da(k, b);
          if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
            const N = qt(k);
            if (N != null && N.visible) return { item: k, geom: N };
          }
        }
      const w = ul(!1).slice().sort((k, C) => Number((C == null ? void 0 : C.z_index) || 0) - Number((k == null ? void 0 : k.z_index) || 0));
      for (const k of w) {
        if (k.type === "strokeGroup") {
          const F = Ci(Na("paint", k.actionGroupId || k.id || ""));
          if (!F) continue;
          const U = qt(F);
          if (!(U != null && U.visible)) continue;
          const Z = Array.isArray(U.strokePaths) ? U.strokePaths : [];
          for (const W of Z) {
            const q = Array.isArray(W == null ? void 0 : W.points) ? W.points : [];
            if (!q.length) continue;
            if (W.closed && q.length >= 3 && Cr(i, q)) return { item: F, geom: U };
            const ue = Math.max(8, Number((W == null ? void 0 : W.lineWidth) || 0) * 0.5 + 6);
            for (let ge = 0; ge < q.length - 1; ge += 1)
              if (bc(i, q[ge], q[ge + 1]) <= ue * ue) return { item: F, geom: U };
            if (q.length === 1 && Jr(i, q[0]) <= ue * ue) return { item: F, geom: U };
          }
          continue;
        }
        if (k.type === "rasterObject") {
          const F = Ai(Ma(((l = k.item) == null ? void 0 : l.id) || k.id || ""));
          if (!F) continue;
          const U = qt(F);
          if (Zu(F, U, i, _)) return { item: F, geom: U };
          continue;
        }
        const C = k.item;
        if (!C || !vt(C) || !b) continue;
        const N = Da(C, b);
        if (N && Number(N.x) >= 0 && Number(N.x) <= 1 && Number(N.y) >= 0 && Number(N.y) <= 1) {
          const F = qt(C);
          if (F != null && F.visible) return { item: C, geom: F };
        }
      }
      return null;
    }
    const s = [
      ...ul(!1).slice().sort((c, p) => Number((p == null ? void 0 : p.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((c) => {
        var p;
        return c.type === "strokeGroup" ? Ci(Na("paint", c.actionGroupId || c.id || "")) : c.type === "rasterObject" ? Ai(Ma(((p = c.item) == null ? void 0 : p.id) || c.id || "")) : c.item;
      }).filter(Boolean),
      ...t === "cutout" ? Ml().filter((c) => Dn(c)) : []
    ];
    for (const c of s) {
      if (Ht(c)) {
        const m = qt(c);
        if (!(m != null && m.visible)) continue;
        const _ = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const b of _) {
          const w = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
          if (!w.length) continue;
          if (b.closed && w.length >= 3 && Cr(i, w)) return { item: c, geom: m };
          const k = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
          for (let C = 0; C < w.length - 1; C += 1)
            if (bc(i, w[C], w[C + 1]) <= k * k) return { item: c, geom: m };
          if (w.length === 1 && Jr(i, w[0]) <= k * k) return { item: c, geom: m };
        }
        continue;
      }
      if (on(c)) {
        const m = qt(c);
        if (!(m != null && m.visible)) continue;
        if (Zu(c, m, i)) return { item: c, geom: m };
        continue;
      }
      const p = qt(c);
      if (p.visible && Cr(i, p.corners))
        return { item: c, geom: p };
    }
    return null;
  }
  function Rl(i, s, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    if (vt(l)) return Rc(i, s);
    if (i.kind === "strokeGroup") {
      const p = i.corners.findIndex((_) => Jr(_, s) <= 121);
      if (p >= 0) {
        const _ = i.corners[p], b = _.x - i.center.x, w = _.y - i.center.y, k = b * w >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: p, cursor: k };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const _ of m) {
        const b = Array.isArray(_ == null ? void 0 : _.points) ? _.points : [];
        if (_.closed && b.length >= 3 && Cr(s, b)) return { kind: "move", cursor: "default" };
        const w = Math.max(8, Number((_ == null ? void 0 : _.lineWidth) || 0) * 0.5 + 6);
        for (let k = 0; k < b.length - 1; k += 1)
          if (bc(s, b[k], b[k + 1]) <= w * w) return { kind: "move", cursor: "default" };
      }
      return Cr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const p = i.corners.findIndex((m) => Jr(m, s) <= 121);
      if (p >= 0) {
        const m = i.corners[p], _ = m.x - i.center.x, b = m.y - i.center.y, w = _ * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: p, cursor: w };
      }
      return Cr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const p = i.edgeMidpoints.find((m) => Jr(m, s) <= 169);
      if (p) {
        const m = p.edge === "left" || p.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: p.edge, mid: p };
      }
    }
    const c = i.corners.findIndex((p) => Jr(p, s) <= 121);
    if (c >= 0) {
      const p = i.corners[c], m = p.x - i.center.x, _ = p.y - i.center.y, b = m * _ >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: c, cursor: b };
    }
    return Jr(i.rotateHandle, s) <= 144 ? { kind: "rotate", cursor: "grab" } : Cr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
  }
  function Of(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function mb(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function gb(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((p) => mb(i, p))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, c = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Cr({ x: l, y: c }, s.corners);
  }
  function _t(i) {
    if (lb(), d.interaction) {
      d.interaction.kind === "paint_stroke" || d.interaction.kind === "paint_lasso_fill" ? V("none") : d.interaction.kind === "view" || d.interaction.kind === "pan_frame" || d.interaction.kind === "roll_frame" ? V("grabbing") : d.interaction.kind === "move" || d.interaction.kind === "move_multi" || d.interaction.kind === "move_stroke_group" || d.interaction.kind === "move_raster_object" ? V("move") : d.interaction.kind === "scale" || d.interaction.kind === "scale_x" || d.interaction.kind === "scale_y" || d.interaction.kind === "scale_raster_object" ? V(d.interaction.cursor || "nwse-resize") : d.interaction.kind === "rotate" ? V("grabbing") : V("default");
      return;
    }
    if (Tf()) {
      V("none");
      return;
    }
    if (d.mode === "frame") {
      if (d.altModifier && !r) {
        V(nN);
        return;
      }
      if (d.primaryTool !== "cursor") {
        V("default");
        return;
      }
      V("grab");
      return;
    }
    if (d.primaryTool === "cursor" && d.marqueeModifier) {
      V("default");
      return;
    }
    const s = At(), l = s ? qt(s) : null, c = s ? Yn(s) : !1, p = c ? { kind: "none", cursor: "default" } : Rl(l, i, s);
    if (!c && p.kind !== "none") {
      V(p.cursor);
      return;
    }
    if (d.primaryTool === "cursor" && Df(i)) {
      V("default");
      return;
    }
    V(d.mode === "pano" ? "grab" : "default");
  }
  function Ze() {
    var w, k;
    if (!In) return;
    if (d.mode === "frame") {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const i = At(), s = Wn();
    if (!i && s.length === 0 || d.interaction) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = Mo(), c = IS({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: l,
      geom: s.length > 1 ? hl(s) : qt(i),
      allLocked: pl(s),
      selectedLocked: Yn(i),
      activeAspect: Er(i),
      cutoutAspectOpen: d.cutoutAspectOpen,
      isExternalSticker: Yt,
      isStickerHidden: Ii,
      canRestoreSelectedToInitial: bg,
      iconSet: Ee
    });
    if (!c.visible) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const p = (C, N, { requireFitsBelow: F = !0 } = {}) => {
      var Ne, $e, Ge;
      const Z = Number((Ne = c.anchor) == null ? void 0 : Ne.minX), W = Number(($e = c.anchor) == null ? void 0 : $e.maxX), q = Number((Ge = c.anchor) == null ? void 0 : Ge.maxY);
      if (![Z, W, q].every(Number.isFinite)) return null;
      const ue = Math.max(14, T.width - C - 14), ge = Y((Z + W) * 0.5 - C * 0.5, 14, ue), ce = q + 18;
      return !Number.isFinite(ge) || !Number.isFinite(ce) || F && ce + N > T.height - 14 ? null : { left: ge, top: ce };
    }, m = Math.max(1, Number(((w = d.menuSize) == null ? void 0 : w.w) || 220)), _ = Math.max(1, Number(((k = d.menuSize) == null ? void 0 : k.h) || 40)), b = p(m, _, { requireFitsBelow: !1 });
    if (!b) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    P.selectionMenu = {
      visible: !0,
      left: b.left,
      top: b.top,
      items: c.items
    }, requestAnimationFrame(() => {
      if (!In || P.selectionMenu.visible !== !0) return;
      const C = In.getBoundingClientRect(), N = Math.round(Number((C == null ? void 0 : C.width) || 0)) || 220, F = Math.round(Number((C == null ? void 0 : C.height) || 0)) || 40;
      d.menuSize = { w: N, h: F, measured: !0 };
      const U = p(N, F);
      if (!U) {
        P.selectionMenu.visible = !1;
        return;
      }
      P.selectionMenu.left = U.left, P.selectionMenu.top = U.top;
    });
  }
  function ci() {
    ae.timer && (clearTimeout(ae.timer), ae.timer = 0), ae.target = null, P.tooltip.visible = !1;
  }
  function bb(i) {
    if (!nn || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    P.tooltip.text = s, P.tooltip.visible = !0;
    const l = i;
    requestAnimationFrame(() => {
      var W, q;
      if (ae.target !== l || !nn || !(l != null && l.isConnected)) return;
      const c = J.getBoundingClientRect(), p = l.getBoundingClientRect(), m = 8, _ = 12, b = Math.round(Number(((W = nn.getBoundingClientRect()) == null ? void 0 : W.width) || 0)) || 100, w = Math.round(Number(((q = nn.getBoundingClientRect()) == null ? void 0 : q.height) || 0)) || 24, k = !!l.closest(".pano-floating-left"), C = !!l.closest(".pano-frame-rail"), N = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let F = "", U = p.left - c.left + p.width * 0.5 - b * 0.5, Z = p.top - c.top - w - _;
      if (k)
        F = "tool-rail", U = p.right - c.left + 10, Z = p.top - c.top + p.height * 0.5 - w * 0.5, U = Y(U, m, Math.max(m, c.width - b - m)), Z = Y(Z, m, Math.max(m, c.height - w - m));
      else if (C)
        F = "frame-rail", U = p.left - c.left - b - 10, Z = p.top - c.top + p.height * 0.5 - w * 0.5, U = Y(U, m, Math.max(m, c.width - b - m)), Z = Y(Z, m, Math.max(m, c.height - w - m));
      else if (N) {
        F = "footer";
        const ue = l.closest(".pano-paint-footer"), ge = ue ? ue.getBoundingClientRect() : p;
        U = ge.left - c.left + ge.width * 0.5 - b * 0.5, Z = ge.bottom - c.top + 5, U = Y(U, m, Math.max(m, c.width - b - m)), Z = Math.max(m, Z);
      }
      U = Y(U, m, Math.max(m, c.width - b - m)), Z = Math.max(m, Z), P.tooltip.left = U, P.tooltip.top = Z, P.tooltip.variant = F, P.tooltip.visible = !0;
    });
  }
  const Qt = wu({
    getView: () => ({ yaw: d.viewYaw, pitch: d.viewPitch, fov: d.viewFov }),
    setView: (i) => {
      d.viewYaw = Bt(Number(i.yaw || 0)), d.viewPitch = Y(Number(i.pitch || 0), -89.9, 89.9), d.viewFov = Y(Number(i.fov || d.viewFov || 100), 35, 140);
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
        x: (i = v.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (s = v.ui_settings) != null && s.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: Wr,
    onInteraction: () => {
      se.backgroundDirty = !0, se.dirty = !0;
    }
  });
  function yb(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += Qp(s, i.lastAngle), i.lastAngle = s;
    const c = em(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = c, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const p = (((m = P.sidePanel) == null ? void 0 : m.params) || []).find((_) => _.key === "roll_deg");
    p && (p.value = c, p.displayValue = Zi(c), p.fillPct = (c + 180) / 360 * 100), Mr(), Ll(i), ye({ localOnly: !0 });
  }
  function vb(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const c = fm(i.rollGesture, s, l);
    if (!c) return;
    i.rollGesture = c.gesture, i.center = c.gesture.center, i.lastAngle = c.gesture.lastAngle, i.accumulatedRad = c.gesture.accumulatedRad, i.shot.roll_deg = c.rollDeg, i.changed = i.changed || Math.abs(c.gesture.accumulatedRad) > 1e-9;
    const p = (((m = P.sidePanel) == null ? void 0 : m.params) || []).find((_) => _.key === "roll_deg");
    p && (p.value = c.rollDeg, p.displayValue = Zi(c.rollDeg), p.fillPct = (c.rollDeg + 180) / 360 * 100), Mr(), Ll(i), ye({ localOnly: !0 });
  }
  const Ff = (i, s) => {
    const l = li(i);
    return Math.atan2(l.y - s.y, l.x - s.x);
  };
  function Ll(i) {
    var _, b;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    ae.timer && (clearTimeout(ae.timer), ae.timer = 0), ae.target = null;
    const s = Ut(i.shot), l = (_ = T.getBoundingClientRect) == null ? void 0 : _.call(T), c = (b = J.getBoundingClientRect) == null ? void 0 : b.call(J);
    if (!s || !l || !c || T.width <= 0 || T.height <= 0) return;
    const p = l.width / T.width, m = l.height / T.height;
    P.tooltip.text = `${Zi(i.shot.roll_deg)}°`, P.tooltip.left = l.left - c.left + (s.x + s.w * 0.5) * p, P.tooltip.top = l.top - c.top + (s.y + s.h * 0.5) * m + 12, P.tooltip.variant = "roll", P.tooltip.visible = !0;
  }
  Ve == null || Ve.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || d.mode !== "frame") return;
    const s = Be();
    if (!s || s.locked === !0) return;
    const l = Ut(s);
    if (!l) return;
    const c = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Ff(i, c);
    d.interaction = {
      kind: "roll_frame",
      shot: s,
      center: c,
      lastAngle: p,
      accumulatedRad: 0,
      start: { roll_deg: Number(s.roll_deg ?? s.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (m = Ve.setPointerCapture) == null || m.call(Ve, i.pointerId), i.preventDefault(), Mr(), Ll(d.interaction), ye({ localOnly: !0 });
  }), Ve == null || Ve.addEventListener("pointermove", (i) => {
    var s;
    ((s = d.interaction) == null ? void 0 : s.kind) !== "roll_frame" || d.interaction.source !== "knob" || yb(
      d.interaction,
      Ff(i, d.interaction.center),
      i
    );
  });
  const _b = () => {
    const i = d.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (ot(), lt(), Ke()), d.interaction = null, ci(), kr(), Mr(), ye());
  };
  Ve == null || Ve.addEventListener("pointerup", _b), Ve == null || Ve.addEventListener("pointercancel", () => Oa()), Ve == null || Ve.addEventListener("lostpointercapture", () => {
    var i;
    ((i = d.interaction) == null ? void 0 : i.source) === "knob" && Oa();
  }), Ve == null || Ve.addEventListener("dblclick", (i) => {
    const s = d.mode === "frame" && !r ? Be() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, ot(), lt(), Ke(), Mr(), ye(), i.preventDefault());
  }), T.onpointerdown = (i) => {
    const s = li(i);
    if (jo(s, !0), d.viewTween = null, Qt.state.inertia.active = !1, Qt.state.inertia.vx = 0, Qt.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), d.mode === "frame") {
        const b = Be();
        if (!b || r || b.locked === !0) return;
        d.interaction = {
          kind: "pan_frame",
          shot: b,
          last: s,
          start: {
            yaw_deg: Number(b.yaw_deg || 0),
            pitch_deg: Number(b.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const b = d.mode === "unwrap" ? s : $o(i);
        d.interaction = { kind: "view", last: b, lastTs: performance.now() }, Qt.startDrag(b.x, b.y, i.pointerId, performance.now());
      }
      _t(s), T.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (d.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const b = Be(), w = Ut(b);
      if (!b || b.locked === !0 || !w) return;
      const k = um({
        frame: w,
        point: s,
        startRollDeg: Number(b.roll_deg ?? b.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!k) return;
      d.interaction = {
        kind: "roll_frame",
        shot: b,
        center: k.center,
        lastAngle: k.lastAngle,
        accumulatedRad: k.accumulatedRad,
        rollGesture: k,
        start: { roll_deg: Number(b.roll_deg ?? b.rot_deg ?? 0) },
        changed: !1,
        altStarted: k.source === "alt",
        source: k.source
      }, T.setPointerCapture(i.pointerId), i.preventDefault(), Mr(), ye({ localOnly: !0 });
      return;
    }
    if (d.mode === "frame" && d.primaryTool === "cursor") {
      const b = Be();
      if (!b || r || b.locked === !0) return;
      d.interaction = {
        kind: "pan_frame",
        shot: b,
        last: s,
        start: { yaw_deg: Number(b.yaw_deg || 0), pitch_deg: Number(b.pitch_deg || 0) },
        changed: !1
      }, _t(s), T.setPointerCapture(i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      if (d.mode === "pano") {
        const b = $o(i);
        d.interaction = { kind: "view", last: b, lastTs: performance.now() }, Qt.startDrag(b.x, b.y, i.pointerId, performance.now()), _t(s), T.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (j && !j.hidden)
      return;
    if ((d.primaryTool === "paint" || d.primaryTool === "mask") && (Af() || Ol())) {
      const b = d.primaryTool === "mask" ? "mask" : "paint", w = d.primaryTool === "mask" ? d.maskTool : d.paintTool, k = d.mode === "frame" && Ol() ? Be() : null, C = { kind: "ERP_GLOBAL" }, N = k ? Jn(s, k, performance.now()) : Xn(s, performance.now());
      if (!N) {
        _t(s);
        return;
      }
      d.interaction = {
        kind: w === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: Qi("live"),
        stroke: w === "lasso_fill" ? Ef(b, w, [N], C) : If(b, w, [N], C)
      }, Ri();
      const F = On();
      if (F)
        if (d.paintEngine.beginStroke(d.interaction.stroke, F), d.interaction.kind === "paint_stroke") {
          const U = d.paintEngine.ensureTarget(F), Z = Number((N == null ? void 0 : N.u) ?? (N == null ? void 0 : N.x) ?? 0), W = Number((N == null ? void 0 : N.v) ?? (N == null ? void 0 : N.y) ?? 0);
          d.paintEngine.appendStrokePoint(U, Z, W, d.interaction.stroke);
        } else
          d.paintEngine.updateActiveStroke(d.interaction.stroke, F);
      _t(s), T.setPointerCapture(i.pointerId), ye();
      return;
    }
    const l = Wn(), c = At(), p = l.length > 1 ? hl(l) : c ? qt(c) : null;
    if (d.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      d.interaction = { kind: "marquee_select", start: s, current: s }, _t(s), T.setPointerCapture(i.pointerId), ye({ localOnly: !0 });
      return;
    }
    if (l.length > 1 && (p != null && p.visible)) {
      if ((l.some((w) => Yn(w)) ? { kind: "none" } : Rl(p, s)).kind === "move") {
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
              const k = qt(w);
              return k != null && k.visible ? { x: Number(((C = k.center) == null ? void 0 : C.x) || 0), y: Number(((N = k.center) == null ? void 0 : N.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: l.filter((w) => Ht(w)).map((w) => ({
            id: String(w.actionGroupId || w.id || ""),
            layerKind: String(w.layerKind || "paint"),
            snapshot: ln(Kn(w.actionGroupId, w.layerKind)),
            frameSnapshot: ln(Kr(w.actionGroupId, w.layerKind)),
            center: (() => {
              var C, N;
              const k = qt(w);
              return k != null && k.visible ? { x: Number(((C = k.center) == null ? void 0 : C.x) || 0), y: Number(((N = k.center) == null ? void 0 : N.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: dl(w.actionGroupId, w.layerKind)
          })),
          rasterSnapshots: l.filter((w) => on(w)).map((w) => ({
            id: Wt(w.rasterObjectId || w.id || ""),
            snapshot: ln(kn().find((k) => String((k == null ? void 0 : k.id) || "") === Wt(w.rasterObjectId || w.id || ""))),
            center: (() => {
              var C, N;
              const k = qt(w);
              return k != null && k.visible ? { x: Number(((C = k.center) == null ? void 0 : C.x) || 0), y: Number(((N = k.center) == null ? void 0 : N.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: af(w)
          }))
        }, _t(s), T.setPointerCapture(i.pointerId);
        return;
      }
    } else if (c && (p != null && p.visible)) {
      const b = Yn(c) ? { kind: "none" } : Rl(p, s, c);
      if (b.kind === "scale") {
        d.interaction = Ht(c) ? {
          kind: "scale_stroke_group",
          item: c,
          center: p.center,
          startDist: Math.max(1, Math.hypot(s.x - p.center.x, s.y - p.center.y)),
          snapshot: ln(Kn(c.actionGroupId, c.layerKind)),
          frameSnapshot: ln(Kr(c.actionGroupId, c.layerKind)),
          cursor: b.cursor
        } : on(c) ? {
          kind: "scale_raster_object",
          item: c,
          center: p.center,
          startDist: Math.max(1, Math.hypot(s.x - p.center.x, s.y - p.center.y)),
          snapshot: ln(kn().find((w) => String((w == null ? void 0 : w.id) || "") === Wt(c.rasterObjectId || c.id || ""))),
          cursor: b.cursor
        } : {
          kind: "scale",
          item: c,
          center: p.center,
          startDist: Math.max(1, Math.hypot(s.x - p.center.x, s.y - p.center.y)),
          startHFOV: Number(c.hFOV_deg || 20),
          startVFOV: Number(c.vFOV_deg || 20),
          cursor: b.cursor
        }, _t(s), T.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "scale_x" || b.kind === "scale_y") {
        d.interaction = {
          kind: b.kind,
          item: c,
          center: p.center,
          startDist: Math.max(1, Math.hypot(s.x - p.center.x, s.y - p.center.y)),
          startHFOV: Number(c.hFOV_deg || 20),
          startVFOV: Number(c.vFOV_deg || 20),
          cursor: b.cursor,
          edge: b.edge
        }, _t(s), T.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        d.interaction = Ht(c) ? {
          kind: "rotate_stroke_group",
          item: c,
          center: p.center,
          startAng: Math.atan2(s.y - p.center.y, s.x - p.center.x),
          snapshot: ln(Kn(c.actionGroupId, c.layerKind)),
          frameSnapshot: ln(Kr(c.actionGroupId, c.layerKind))
        } : {
          kind: "rotate",
          item: c,
          center: p.center,
          startRot: Number(c.rot_deg || c.roll_deg || 0),
          startAng: Math.atan2(s.y - p.center.y, s.x - p.center.x)
        }, _t(s), T.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (Ht(c)) {
          const w = d.mode === "frame" ? (() => {
            const k = Be();
            return k ? Jn(s, k, performance.now()) : null;
          })() : Xn(s, performance.now());
          d.interaction = {
            kind: "move_stroke_group",
            item: c,
            startUv: w,
            snapshot: ln(Kn(c.actionGroupId, c.layerKind)),
            frameSnapshot: ln(Kr(c.actionGroupId, c.layerKind))
          }, _t(s), T.setPointerCapture(i.pointerId);
          return;
        }
        if (on(c)) {
          const w = d.mode === "frame" ? (() => {
            const k = Be();
            return k ? Jn(s, k, performance.now()) : null;
          })() : Xn(s, performance.now());
          d.interaction = {
            kind: "move_raster_object",
            item: c,
            startUv: w,
            snapshot: ln(kn().find((k) => String((k == null ? void 0 : k.id) || "") === Wt(c.rasterObjectId || c.id || "")))
          }, _t(s), T.setPointerCapture(i.pointerId);
          return;
        }
        d.interaction = {
          kind: "move",
          item: c,
          offset: { x: s.x - p.center.x, y: s.y - p.center.y }
        }, _t(s), T.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = Df(s);
    if (m) {
      const b = d.selectedId !== m.item.id;
      if (b && d.selectedId && (ot(), Mn()), Ti(m.item), t === "cutout" && b && (d.cutoutAspectOpen = !1), b && Ke(), Ze(), ye(), Yn(m.item)) {
        _t(s);
        return;
      }
      d.interaction = {
        kind: Ht(m.item) ? "move_stroke_group" : on(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: s.x - m.geom.center.x, y: s.y - m.geom.center.y },
        startUv: Ht(m.item) || on(m.item) ? d.mode === "frame" ? (() => {
          const w = Be();
          return w ? Jn(s, w, performance.now()) : null;
        })() : Xn(s, performance.now()) : null,
        snapshot: Ht(m.item) ? ln(Kn(m.item.actionGroupId, m.item.layerKind)) : on(m.item) ? ln(kn().find((w) => String((w == null ? void 0 : w.id) || "") === Wt(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Ht(m.item) ? ln(Kr(m.item.actionGroupId, m.item.layerKind)) : null
      }, _t(s), T.setPointerCapture(i.pointerId);
      return;
    }
    const _ = !!d.selectedId;
    if (_ && (ot(), Mn()), Aa(), _ && Ke(), Ze(), ye(), d.mode === "pano") {
      const b = $o(i);
      d.interaction = { kind: "view", last: b, lastTs: performance.now() }, Qt.startDrag(b.x, b.y, i.pointerId, performance.now()), _t(s), T.setPointerCapture(i.pointerId);
    }
  }, T.onpointermove = (i) => {
    var c, p, m, _, b, w, k, C, N, F, U, Z, W, q, ue, ge, ce, Ne, $e, Ge, et, Se;
    const s = li(i);
    if (jo(s, !0), !d.interaction) {
      _t(s);
      return;
    }
    _t(s);
    const l = d.interaction;
    if (l.kind === "paint_stroke") {
      const oe = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let be = !1;
      oe.forEach((Fe) => {
        const Re = li(Fe);
        if (d.mode === "frame") {
          const De = Be(), We = De ? Ut(De) : null;
          if (We) {
            const st = (Re.x - We.x) / Math.max(1, We.w), Je = (Re.y - We.y) / Math.max(1, We.h);
            if (!(st >= 0 && st <= 1 && Je >= 0 && Je <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, hb(l));
          }
        }
        ub(l, Re, performance.now()) && (be = !0);
      }), be && ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "paint_lasso_fill") {
      const oe = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let be = !1;
      if (oe.forEach((Fe) => {
        const Re = li(Fe);
        if (d.mode === "frame") {
          const De = Be(), We = De ? Ut(De) : null;
          if (We) {
            const st = (Re.x - We.x) / Math.max(1, We.w), Je = (Re.y - We.y) / Math.max(1, We.h);
            if (!(st >= 0 && st <= 1 && Je >= 0 && Je <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, pb(l));
          }
        }
        fb(l, Re, performance.now()) && (be = !0);
      }), be) {
        const Fe = On();
        Fe && d.paintEngine.updateActiveStroke(l.stroke, Fe), ye({ localOnly: !0 });
      }
      return;
    }
    if (l.kind === "view") {
      const oe = performance.now(), be = d.mode === "unwrap" ? s : $o(i);
      Qt.moveDrag(be.x, be.y, d.mode === "unwrap" ? "unwrap" : "pano", oe), l.lastTs = oe, l.last = be, ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "pan_frame") {
      const oe = Dl(l.shot);
      if (!oe || !l.shot) return;
      const be = s.x - l.last.x, Fe = s.y - l.last.y, Re = dm(l.shot, {
        dx: be,
        dy: Fe,
        focalPx: oe.focalPx,
        invertX: ((c = v.ui_settings) == null ? void 0 : c.invert_view_x) === !0,
        invertY: ((p = v.ui_settings) == null ? void 0 : p.invert_view_y) === !0
      });
      l.shot.yaw_deg = Re.yaw_deg, l.shot.pitch_deg = Re.pitch_deg, l.changed = l.changed || Math.abs(be) > 0 || Math.abs(Fe) > 0, l.last = s, ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "roll_frame") {
      if (l.source === "knob") return;
      vb(l, s, i);
      return;
    }
    if (l.kind === "move") {
      const oe = s.x - l.offset.x, be = s.y - l.offset.y;
      if (d.mode === "frame" && t === "cutout") {
        const Fe = Be(), Re = Ut(Fe);
        if (!Fe || !Re) return;
        const De = {
          x: Y((oe - Re.x) / Math.max(1, Re.w), 0, 1),
          y: Y((be - Re.y) / Math.max(1, Re.h), 0, 1)
        }, We = Pl(Fe, De);
        if (!We) return;
        const st = ss(We);
        l.item.yaw_deg = st.yaw, l.item.pitch_deg = st.pitch;
      } else if (d.mode === "unwrap") {
        const Fe = Wr(), Re = Y((oe - Fe.x) / Math.max(Fe.w, 1), 0, 1), De = Y((be - Fe.y) / Math.max(Fe.h, 1), 0, 1);
        l.item.yaw_deg = Bt(Re * 360 - 180), l.item.pitch_deg = Y(90 - De * 180, -90, 90);
      } else {
        const Fe = xl(oe, be), Re = ss(Fe);
        l.item.yaw_deg = Re.yaw, l.item.pitch_deg = Re.pitch;
      }
      vt(l.item) && Zt(), ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "move_stroke_group") {
      const oe = d.mode === "frame" ? (() => {
        const Re = Be();
        return Re ? Jn(s, Re, performance.now()) : null;
      })() : Xn(s, performance.now());
      if (!oe || !l.startUv) return;
      const be = jn(Number(oe.u || 0), Number(l.startUv.u || 0)), Fe = Number(oe.v || 0) - Number(l.startUv.v || 0);
      Ru((m = l.item) == null ? void 0 : m.actionGroupId, be, Fe, l.snapshot, (_ = l.item) == null ? void 0 : _.layerKind, l.frameSnapshot) && (qn({ rebuildPaintEngine: !1 }), ye({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_raster_object") {
      const oe = d.mode === "frame" ? (() => {
        const Re = Be();
        return Re ? Jn(s, Re, performance.now()) : null;
      })() : Xn(s, performance.now());
      if (!oe || !l.startUv) return;
      const be = jn(Number(oe.u || 0), Number(l.startUv.u || 0)), Fe = Number(oe.v || 0) - Number(l.startUv.v || 0);
      zu(((b = l.item) == null ? void 0 : b.rasterObjectId) || ((w = l.item) == null ? void 0 : w.id) || "", be, Fe, l.snapshot) && (Vi(), ye({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_raster_object") {
      const be = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      og(((k = l.item) == null ? void 0 : k.rasterObjectId) || ((C = l.item) == null ? void 0 : C.id) || "", be, l.snapshot) && (Vi(), ye({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_multi") {
      const oe = s.x - Number(((N = l.offset) == null ? void 0 : N.x) || 0), be = s.y - Number(((F = l.offset) == null ? void 0 : F.y) || 0);
      let Fe = !1, Re = !1, De = !1;
      const We = oe - Number(((U = l.startCenter) == null ? void 0 : U.x) || oe), st = be - Number(((Z = l.startCenter) == null ? void 0 : Z.y) || be);
      for (const Je of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
        const xt = (t === "cutout" ? fl() : Sr()).find((Pt) => String((Pt == null ? void 0 : Pt.id) || "") === String(Je.id || ""));
        if (!xt || !vt(xt)) continue;
        const en = {
          x: Number(((W = Je.center) == null ? void 0 : W.x) || 0) + We,
          y: Number(((q = Je.center) == null ? void 0 : q.y) || 0) + st
        };
        if (d.mode === "frame" && t === "cutout") {
          const Pt = Be(), $t = Ut(Pt);
          if (!Pt || !$t) continue;
          const ui = {
            x: Y((en.x - $t.x) / Math.max(1, $t.w), 0, 1),
            y: Y((en.y - $t.y) / Math.max(1, $t.h), 0, 1)
          }, Jf = Pl(Pt, ui);
          if (!Jf) continue;
          const Zf = ss(Jf);
          xt.yaw_deg = Zf.yaw, xt.pitch_deg = Zf.pitch;
        } else if (d.mode === "unwrap") {
          const Pt = Wr(), $t = Y((en.x - Pt.x) / Math.max(Pt.w, 1), 0, 1), ui = Y((en.y - Pt.y) / Math.max(Pt.h, 1), 0, 1);
          xt.yaw_deg = Bt($t * 360 - 180), xt.pitch_deg = Y(90 - ui * 180, -90, 90);
        } else {
          const Pt = xl(en.x, en.y), $t = ss(Pt);
          xt.yaw_deg = $t.yaw, xt.pitch_deg = $t.pitch;
        }
        Fe = !0;
      }
      for (const Je of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
        const xt = {
          x: Number(((ue = Je.center) == null ? void 0 : ue.x) || 0) + We,
          y: Number(((ge = Je.center) == null ? void 0 : ge.y) || 0) + st
        }, en = d.mode === "frame" ? (() => {
          const $t = Be();
          return $t ? Jn(xt, $t, performance.now()) : null;
        })() : Xn(xt, performance.now()), Pt = Je.centerUv || null;
        if (en && Pt) {
          const $t = jn(Number(en.u || 0), Number(Pt.u || 0)), ui = Number(en.v || 0) - Number(Pt.v || 0);
          Ru(Je.id, $t, ui, Je.snapshot, Je.layerKind, Je.frameSnapshot) && (Fe = !0, Re = !0);
        }
      }
      for (const Je of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
        const xt = {
          x: Number(((ce = Je.center) == null ? void 0 : ce.x) || 0) + We,
          y: Number(((Ne = Je.center) == null ? void 0 : Ne.y) || 0) + st
        }, en = d.mode === "frame" ? (() => {
          const $t = Be();
          return $t ? Jn(xt, $t, performance.now()) : null;
        })() : Xn(xt, performance.now()), Pt = Je.centerUv || null;
        if (en && Pt) {
          const $t = jn(Number(en.u || 0), Number(Pt.u || 0)), ui = Number(en.v || 0) - Number(Pt.v || 0);
          zu(Je.id, $t, ui, Je.snapshot) && (Fe = !0, De = !0);
        }
      }
      Fe && (Re ? qn({ rebuildPaintEngine: !1 }) : De ? Vi() : Zt(), ye({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_stroke_group") {
      const be = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      Lu(($e = l.item) == null ? void 0 : $e.actionGroupId, be, 0, l.snapshot, (Ge = l.item) == null ? void 0 : Ge.layerKind, l.frameSnapshot) && (qn({ rebuildPaintEngine: !1 }), ye({ localOnly: !0 }));
      return;
    }
    if (l.kind === "rotate_stroke_group") {
      let oe = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - Number(l.startAng || 0)) * Dr;
      i.shiftKey && (oe = Math.round(oe / 45) * 45), Lu((et = l.item) == null ? void 0 : et.actionGroupId, 1, oe, l.snapshot, (Se = l.item) == null ? void 0 : Se.layerKind, l.frameSnapshot) && (qn({ rebuildPaintEngine: !1 }), ye({ localOnly: !0 }));
      return;
    }
    if (l.kind === "marquee_select") {
      l.current = s, ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale") {
      const be = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      l.item.hFOV_deg = Y(l.startHFOV * be, 1, 179), l.item.vFOV_deg = Y(l.startVFOV * be, 1, 179), l.item.aspect_id = bi(l.item), vt(l.item) && Zt(), ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_x") {
      const be = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      l.item.hFOV_deg = Y(l.startHFOV * be, 1, 179), l.item.aspect_id = bi(l.item), vt(l.item) && Zt(), ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_y") {
      const be = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      l.item.vFOV_deg = Y(l.startVFOV * be, 1, 179), l.item.aspect_id = bi(l.item), vt(l.item) && Zt(), ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "rotate") {
      let be = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - l.startAng) * Dr, Fe = l.startRot - be;
      i.shiftKey && (Fe = Math.round(Fe / 45) * 45);
      const Re = vt(l.item) ? "rot_deg" : "roll_deg";
      l.item[Re] = Fe, vt(l.item) && Zt(), ye({ localOnly: !0 });
    }
  }, T.onpointerup = () => {
    var s, l, c, p, m, _, b, w;
    const i = d.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if (((s = d.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = d.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        Ri();
        const k = Fl(d.interaction), C = !!d.interaction._hasCommittedSegments;
        if (k || C) {
          qn();
          const N = String(((c = d.interaction.stroke) == null ? void 0 : c.actionGroupId) || "").trim();
          if (N) {
            const U = an().find((Z) => String((Z == null ? void 0 : Z.actionGroupId) || "") === N);
            U && (U.frame = null);
          }
          const F = On();
          F && (k ? String(((p = d.interaction.stroke) == null ? void 0 : p.toolKind) || "") === "eraser" ? (d.paintEngine.cancelActiveStroke(F), hf()) : d.paintEngine.commitActiveStroke(d.interaction.stroke, F) : d.paintEngine.cancelActiveStroke(F)), ot(), Mn(), Ke(), Ze(), e.setDirtyCanvas(!0, !0), ye();
        } else {
          const N = On();
          N && d.paintEngine.cancelActiveStroke(N);
        }
      } else if (((m = d.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const k = Of(d.interaction.start, d.interaction.current), N = [
          ...t === "cutout" ? Ml().filter((F) => !Dn(F)) : [...Sr()],
          ...ng(),
          ...rg()
        ].filter((F) => gb(k, qt(F)));
        cg(N, ((_ = N[N.length - 1]) == null ? void 0 : _.id) || null), t === "cutout" && N.length && (d.cutoutAspectOpen = !1), Ke(), Ze(), ye();
      } else if (((b = d.interaction) == null ? void 0 : b.kind) === "pan_frame" || ((w = d.interaction) == null ? void 0 : w.kind) === "roll_frame")
        d.interaction.changed && (ot(), lt(), Ke());
      else if (d.interaction && d.interaction.kind !== "view") {
        let k = !1;
        (d.interaction.kind === "move_stroke_group" || d.interaction.kind === "scale_stroke_group" || d.interaction.kind === "rotate_stroke_group") && (k = !0), (d.interaction.kind === "move_raster_object" || d.interaction.kind === "scale_raster_object") && (k = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length && (k = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.rasterSnapshots) && d.interaction.rasterSnapshots.length && (k = !0), k && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(d.interaction.kind) || d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length ? qn({ rebuildPaintEngine: !0 }) : Vi()), ot(), Mn(), e.setDirtyCanvas(!0, !0), Hi(), d.hqFrames = 1, Ze(), ye();
      }
      d.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && ci(), Ri(), i && i.kind === "view" && Qt.endDrag(performance.now()), kr(), Ze(), _t(d.pointerPos), ye();
    }
  }, T.onpointercancel = () => {
    var i, s, l;
    if (!Oa()) {
      if (((i = d.interaction) == null ? void 0 : i.kind) === "view" && Qt.endDrag(performance.now()), ((s = d.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = d.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        Ri();
        const c = On();
        c && d.paintEngine.cancelActiveStroke(c);
      }
      d.interaction = null, Ri(), kr(), _t(d.pointerPos), ye({ localOnly: !0 });
    }
  }, T.onlostpointercapture = () => {
    Oa();
  }, T.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, T.onmousemove = (i) => {
    const s = li(i), l = jo(s, !0);
    d.interaction || (_t(s), l && d.mode === "frame" && d.primaryTool === "cursor" && ye({ localOnly: !0 }));
  }, T.onmouseleave = () => {
    jo(d.pointerPos, !1), _t(d.pointerPos), d.mode === "frame" && d.primaryTool === "cursor" && ye({ localOnly: !0 });
  }, T.onwheel = (i) => {
    if (d.mode === "frame") {
      const s = li(i), l = Su(i);
      l && ib(s, l) && ye({ localOnly: !0 }), i.preventDefault();
      return;
    }
    d.mode === "pano" && (Qt.applyWheelEvent(i) && ye({ localOnly: !0 }), i.preventDefault());
  }, T.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), En(!0));
  }, T.ondrop = (i) => {
    var c;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Te.depth = 0, En(!1);
    const l = Array.from(((c = i.dataTransfer) == null ? void 0 : c.files) || []).find((p) => Qn(p));
    l && xf(l);
  };
  const Rf = (i) => {
    t !== "stickers" && t !== "cutout" || r || oi(i) && (Te.depth += 1, En(!0), i.preventDefault());
  }, Lf = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!Te.active && oi(i) && En(!0), Te.active && i.preventDefault());
  }, zf = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !Te.active) return;
    Te.depth = Math.max(0, Te.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Te.depth === 0 || s) && En(!1);
  }, $f = (i) => {
    t !== "stickers" && t !== "cutout" || r || (Te.depth = 0, En(!1), oi(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", Rf, !0), window.addEventListener("dragover", Lf, !0), window.addEventListener("dragleave", zf, !0), window.addEventListener("drop", $f, !0);
  function zl() {
    const { canUndo: i, canRedo: s } = _f();
    qi(P.toolButtons, "value", "undo", { disabled: !i }), qi(P.toolButtons, "value", "redo", { disabled: !s });
  }
  const jf = (i, s, l = !1) => {
    var w;
    const c = t === "cutout" && d.mode === "frame" ? Be() : null, p = c || At(), m = c ? "shot" : Mo();
    if (!p || m === "stroke" || Yn(p)) return;
    const _ = (((w = P.sidePanel) == null ? void 0 : w.params) || []).find((k) => k.key === i);
    if (!_ || _.enabled === !1) return;
    let b = Number(s);
    Number.isNaN(b) && (b = 0), b = Y(b, Number(_.min), Number(_.max)), i === "yaw_deg" && (b = Bt(b)), p[i] = b, t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (p.aspect_id = bi(p)), Ke(), ye(), l && ot();
  };
  Pe == null || Pe.addEventListener("click", async (i) => {
    var c, p, m, _, b, w, k, C, N;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const l = String(s.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const F = tn(s.getAttribute("data-coverage"));
      if (F === tn(v.coverage)) return;
      v.coverage = F, d.coverage = F, h && (h.value = String(F)), o ? se.backgroundDirty = !0 : (Mn(), nb({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), Ke(), Ze(), ye();
      return;
    }
    if (l === "toggle-selection-picker") {
      if ((p = (c = P.sidePanel) == null ? void 0 : c.selectionPicker) != null && p.disabled) return;
      P.sidePanel.selectionPicker.open = !P.sidePanel.selectionPicker.open;
      return;
    }
    if (l === "select-picker-item") {
      P.sidePanel.selectionPicker.open = !1;
      const F = String(s.getAttribute("data-selection-id") || "");
      let U = null;
      F && (t === "stickers" ? U = Sr().find((Z) => String((Z == null ? void 0 : Z.id) || "") === F) || null : U = ((m = ju().find((Z) => {
        var W;
        return String(((W = Z == null ? void 0 : Z.item) == null ? void 0 : W.id) || "") === F;
      })) == null ? void 0 : m.item) || null), Ti(U || null), U && !Ht(U) && sl(
        Bt(Number(U.yaw_deg || 0)),
        Y(Number(U.pitch_deg || 0), -89.9, 89.9),
        d.viewFov
      ), Ke(), Ze(), ye();
      return;
    }
    if (l === "copy-state-inline") {
      const F = At(), U = Mo();
      if (!F || U === "stroke" || Wn().length > 1) return;
      const Z = JSON.stringify(t === "cutout" && U !== "image" ? Wu(F) : Sg(F));
      try {
        await navigator.clipboard.writeText(Z), (_ = P.sidePanel) != null && _.copyStateButton && (P.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var W;
          (W = P.sidePanel) != null && W.copyStateButton && (P.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (l === "toggle-visibility") {
      const F = String(s.getAttribute("data-visibility") || "");
      F === "panorama" ? d.showPanorama = !d.showPanorama : F === "objects" ? d.showObjects = !d.showObjects : F === "mask" && (d.showMask = !d.showMask), Ke(), ye();
      return;
    }
    if (l === "set-invert-x") {
      v.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", zo(), Ke(), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0), ye();
      return;
    }
    if (l === "set-invert-y") {
      v.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", zo(), Ke(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), ye();
      return;
    }
    if (l === "toggle-quality-picker") {
      (k = P.sidePanel) != null && k.uiSettings && (P.sidePanel.uiSettings.qualityOpen = !P.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (l === "set-quality") {
      const F = String(s.getAttribute("data-quality") || "balanced");
      v.ui_settings.preview_quality = F === "draft" || F === "high" ? F : "balanced", zo(), Ke(), (C = e.setDirtyCanvas) == null || C.call(e, !0, !0), ye();
      return;
    }
    if (l === "ui-reset-defaults") {
      v.ui_settings.invert_view_x = !1, v.ui_settings.invert_view_y = !1, v.ui_settings.preview_quality = "balanced", zo(), Ke(), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0), ye();
      return;
    }
    if (l === "close-preview") {
      Gi();
      return;
    }
    if (l === "cancel-close") {
      Gi();
      return;
    }
    l === "save-close" && (eb(), Gi());
  }), Pe == null || Pe.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && jf(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), Pe == null || Pe.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && jf(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const $l = () => qu();
  $l(), ie.addEventListener("click", (i) => {
    var b, w, k, C;
    if ((w = (b = i.target) == null ? void 0 : b.matches) != null && w.call(b, "[data-confirm-overlay]")) {
      const N = (k = P.confirmDialog) == null ? void 0 : k.resolve;
      P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, N == null || N(!1);
      return;
    }
    const s = i.target.closest("[data-view]");
    if (s) {
      if (s.disabled) return;
      const N = d.mode;
      d.mode = String(s.getAttribute("data-view") || "pano"), t === "cutout" && d.mode === "frame" && (N !== "frame" && (se.frameSafeRect = null), Ke(), Ze()), El(), kr(), ye();
      return;
    }
    const l = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (l && !r) {
      if (l.matches("[data-tool-mode]")) {
        const N = String(l.getAttribute("data-tool-mode") || "cursor");
        d.primaryTool = N, (N === "paint" || N === "mask") && Aa({ preservePanelValues: !0 }), Nn(), Ke(), Ze(), ye();
        return;
      }
      if (l.matches("[data-tool-ui-action]")) {
        const N = String(l.getAttribute("data-tool-ui-action") || "");
        if ((N === "undo" || N === "redo") && l.disabled) return;
        N === "undo" ? Tl(-1) : N === "redo" ? Tl(1) : N === "clear" ? Y0() : N === "add" || N === "add-image" ? V0() : N === "add-or-look" && G0();
        return;
      }
      if (l.matches("[data-paint-tool]")) {
        d.primaryTool = "paint";
        const N = String(l.getAttribute("data-paint-tool") || "pen");
        d.paintTool = N, Aa({ preservePanelValues: !0 }), Pn[N] && (d.activeBrushPresetId = N), Nn(), Ke(), Ze(), ye();
        return;
      }
      if (l.matches("[data-mask-tool]")) {
        d.primaryTool = "mask", d.maskTool = String(l.getAttribute("data-mask-tool") || "pen"), Aa({ preservePanelValues: !0 }), Nn(), Ke(), Ze(), ye();
        return;
      }
      if (l.matches("[data-paint-layer-clear-current]")) {
        const N = String(l.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        q0(N);
        return;
      }
      if (l.matches("[data-paint-color-swatch]")) {
        const N = Ms.find((F) => F.id === l.getAttribute("data-paint-color-swatch"));
        if (!N) return;
        d.paintColor = Fn(N.color), te(!0), Nn();
        return;
      }
      if (l.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), j && !j.hidden ? te(!0) : ke(), Nn();
        return;
      }
    }
    const c = String(((C = l == null ? void 0 : l.getAttribute) == null ? void 0 : C.call(l, "data-action")) || "");
    if (c === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(H instanceof HTMLVideoElement)) return;
      if (Oi(), H.paused) {
        ne.mode = "playback", ne.pendingPlaybackResume = !1, ne.resumeAfterScrub = !1;
        const N = Number(P.videoTransport.duration || H.duration || 0), F = Number(H.currentTime || ne.editorTime || 0), U = N > 0 && F >= N - 1e-3 ? 0 : Number(ne.editorTime || F || 0), Z = Math.max(It(), 0.04);
        ne.editorTime = U, Math.abs(F - U) > Z ? (ne.seeking = !1, ne.pendingPlaybackResume = !0, bl(U)) : H.play().catch(() => {
        });
      } else
        H.pause(), ne.mode = "scrub", ne.resumeAfterScrub = !1, ne.pendingPlaybackResume = !1, ne.editorTime = Number(H.currentTime || 0), Di();
      ir({
        ready: !!H.getAttribute("src"),
        playing: !H.paused && !H.ended,
        visible: wr(),
        currentTime: ne.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: ne.mode
      }), ye({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (c === "video-audio-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(H instanceof HTMLVideoElement) || !P.videoTransport.hasAudio) return;
      const N = !H.muted;
      H.muted = N, !N && Number(H.volume || 0) <= 0 && (H.volume = Math.max(0.01, Number(P.videoTransport.volume || 1))), ir({
        ready: !!H.getAttribute("src"),
        playing: !H.paused && !H.ended,
        visible: wr(),
        currentTime: ne.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: ne.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: H.muted,
        volume: Number(H.volume ?? P.videoTransport.volume ?? 1)
      }), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (c === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(H instanceof HTMLVideoElement)) return;
      const N = !P.videoTransport.loop;
      P.videoTransport.loop = N, H.loop = N, ir({
        ready: !!H.getAttribute("src"),
        playing: !H.paused && !H.ended,
        visible: wr(),
        currentTime: ne.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: ne.mode,
        hasAudio: P.videoTransport.hasAudio,
        loop: N,
        muted: H.muted,
        volume: Number(H.volume ?? P.videoTransport.volume ?? 1)
      }), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (!r) {
      if (c === "frame-aspect") {
        P.frameRail.aspectOpen = !P.frameRail.aspectOpen;
        return;
      }
      if (c === "frame-aspect-set") {
        const N = d.mode === "frame" ? Be() : null;
        if (!N || N.locked === !0) return;
        kf(N, String(l.getAttribute("data-aspect") || "1:1")), P.frameRail.aspectOpen = !1, Hi(), ot(), lt(), kr(), ye();
        return;
      }
      if (c === "frame-aspect-custom") {
        const N = d.mode === "frame" ? Be() : null, F = l.getAttribute("data-custom-width"), U = l.getAttribute("data-custom-height");
        if (!N || !J0(N, F, U)) return;
        P.frameRail.aspectOpen = !1, Hi(), ot(), lt(), kr(), ye();
        return;
      }
      if (c === "frame-rotate-90") {
        const N = d.mode === "frame" ? Be() : null;
        if (!N || N.locked === !0) return;
        Nf(N), P.frameRail.aspectOpen = !1, Hi(), ot(), lt(), kr(), ye();
        return;
      }
      if (c === "aspect") {
        d.cutoutAspectOpen = !d.cutoutAspectOpen, d.menuSize.measured = !1, Ze(), ye();
        return;
      }
      if (c === "aspect-set") {
        const N = At();
        if (!N) return;
        const F = String(l.getAttribute("data-aspect") || "1:1");
        kf(N, F), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, Hi(), ot(), lt(), Ze(), ye();
        return;
      }
      if (c === "rotate-90") {
        const N = At();
        if (!N) return;
        Nf(N), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, Hi(), ot(), lt(), Ze(), ye();
        return;
      }
      if (c === "bring-front") {
        Z0();
        return;
      }
      if (c === "send-back") {
        Q0();
        return;
      }
      if (c === "duplicate") {
        X0();
        return;
      }
      if (c === "replace-image") {
        U0();
        return;
      }
      if (c === "toggle-lock") {
        lg();
        return;
      }
      if (c === "back-initial") {
        mg();
        return;
      }
      if (c === "toggle-visible") {
        pg();
        return;
      }
      if (c === "delete") {
        wf();
        return;
      }
    }
    if (c === "reset-view") {
      if (d.mode === "frame") return;
      sl(0, 0, 100, 180, 680);
      return;
    }
    if (c === "toggle-grid") {
      if (d.mode === "frame") return;
      d.showGrid = !d.showGrid, kN(e == null ? void 0 : e.id, d.showGrid), $l(), ye();
      return;
    }
    if (c === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), wb();
      return;
    }
    if (c === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const N = !d.outputPreviewExpanded;
      d.outputPreviewExpanded = N, d.outputPreviewAnimFrom = d.outputPreviewAnim, d.outputPreviewAnimTo = N ? 1 : 0, d.outputPreviewAnimStartTs = performance.now(), Gf(), ye();
      return;
    }
    const p = i.target.closest("[data-paint-history-index]");
    if (!p) return;
    const m = Number(p.getAttribute("data-paint-history-index")), _ = d.customPaintHistory[m];
    _ && (d.customPaintColor = Fn(_), d.paintColor = Fn(_), Nn());
  }), ie.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(H instanceof HTMLVideoElement)) return;
      Oi();
      const m = Y(Number(s.value || 0), 0, Number(P.videoTransport.duration || 0));
      ne.mode = "scrub", !ne.seeking && !H.paused && !H.ended && (ne.resumeAfterScrub = !0, H.pause()), ne.editorTime = m, $n(m), ir({
        ready: !!H.getAttribute("src"),
        playing: !1,
        visible: wr(),
        currentTime: m,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: "scrub"
      }), Number(rt.__panoFrameIdx || 0) > 0 && (se.backgroundDirty = !0, se.dirty = !0, ye({ cause: "frame_view", localOnly: !0 })), bl(m);
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(H instanceof HTMLVideoElement)) return;
      const m = Y(Number(l.value || 0), 0, 1);
      H.volume = m, H.muted = m <= 1e-4, ir({
        ready: !!H.getAttribute("src"),
        playing: !H.paused && !H.ended,
        visible: wr(),
        currentTime: ne.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: ne.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: H.muted,
        volume: m
      });
      return;
    }
    const c = i.target.closest("[data-paint-size-slider]");
    if (c) {
      if (c.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(c.value)))), _ = qr(d.primaryTool === "paint" ? d.paintTool : d.maskTool);
      d.brushSizes[_] = m, Nn(), cb();
      return;
    }
    const p = i.target.closest("[data-paint-alpha-slider]");
    if (p) {
      const m = { ...d.customPaintColor, a: Y(Number(p.value) / 100, 0, 1) };
      d.customPaintColor = Fn(m), d.paintColor = Fn(m), Nn();
    }
  }), ie.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(H instanceof HTMLVideoElement)) return;
      ne.pendingPlaybackResume = !!ne.resumeAfterScrub, ne.resumeAfterScrub = !1, ne.pendingPlaybackResume || (ne.mode = "scrub"), ne.seeking || (ne.pendingPlaybackResume ? (ne.pendingPlaybackResume = !1, ne.mode = "playback", H.play().catch(() => {
      })) : (Di(), ye({ cause: "frame_view", localOnly: !0 })));
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Vo();
  }), ie.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Vo();
  }), ie.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Vo();
  }), ie.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && Vo();
  }), ie.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !ie.contains(s) || ae.target !== s && (ae.target = s, ae.timer && clearTimeout(ae.timer), ae.timer = window.setTimeout(() => {
      ae.target === s && bb(s);
    }, 220));
  }), ie.addEventListener("pointerout", (i) => {
    var c, p;
    const s = i.target.closest("[data-tip]");
    !s || ae.target !== s || (i.relatedTarget instanceof Element ? (p = (c = i.relatedTarget).closest) == null ? void 0 : p.call(c, "[data-tip]") : null) === s || ci();
  }), ie.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || ci();
  });
  const xb = (i, s) => {
    var b;
    if (!Q) return;
    const l = Q.getBoundingClientRect(), c = Y((i - l.left) / Math.max(1, l.width), 0, 1), p = 1 - Y((s - l.top) / Math.max(1, l.height), 0, 1), m = vc(d.customPaintColor), _ = { ...yc(m.h, c, p), a: Number(((b = d.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    d.customPaintColor = Fn(_), d.paintColor = Fn(_), Nn();
  }, Sb = (i) => {
    var m;
    if (!me) return;
    const s = me.getBoundingClientRect(), l = Y((i - s.left) / Math.max(1, s.width), 0, 1), c = vc(d.customPaintColor), p = { ...yc(l, c.s, c.v), a: Number(((m = d.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    d.customPaintColor = Fn(p), d.paintColor = Fn(p), Nn();
  }, Vf = (i, s) => {
    const l = i.pointerId;
    s(i);
    const c = (m) => {
      m.pointerId === l && s(m);
    }, p = (m) => {
      m.pointerId === l && (window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p));
    };
    window.addEventListener("pointermove", c), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  };
  Q && (Q.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Vf(i, (s) => xb(s.clientX, s.clientY));
  }), me && (me.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Vf(i, (s) => Sb(s.clientX));
  }), ie.addEventListener("click", (i) => {
    var p;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const l = s.getAttribute("data-action") === "confirm-accept", c = (p = P.confirmDialog) == null ? void 0 : p.resolve;
    P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, c == null || c(l);
  });
  const Hf = () => {
    const i = !!d.fullscreen;
    qi(P.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Ee.fullscreen_close : Ee.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, Ho = (i) => {
    const s = !!i;
    d.fullscreen !== s && (d.fullscreen = s, ie.classList.toggle("pano-modal-fullscreen", s), s ? (d.fullscreenPrevShowGrid = !!d.showGrid, d.showGrid = !1) : d.fullscreenPrevShowGrid !== null && (d.showGrid = !!d.fullscreenPrevShowGrid, d.fullscreenPrevShowGrid = null), $l(), Hf(), rn(), ye());
  }, Uf = () => document.fullscreenElement === le, wb = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        Ho(!d.fullscreen);
        return;
      }
      Uf() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = le.requestFullscreen) == null ? void 0 : i.call(le));
    } catch {
      Ho(!d.fullscreen);
    }
  }, Bf = () => {
    document.fullscreenEnabled && Ho(Uf());
  };
  document.addEventListener("fullscreenchange", Bf), Hf();
  const Gf = () => {
    const i = !!d.outputPreviewExpanded;
    P.outputPreviewToggle.icon = i ? Ee.fullscreen_close : Ee.fullscreen, P.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", P.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  Gf();
  const jl = e.onExecuted, Vl = e.onConnectionsChange;
  let Hl = null, Ul = null, Bl = null;
  !r && t === "stickers" && (Bl = (i = "sync") => {
    Yu(i);
  }, e.__panoExternalStickerSync = Bl, Hl = function(...s) {
    var l;
    typeof jl == "function" && jl.apply(this, s), fN(ze, ts), (l = this.__panoExternalStickerSync) == null || l.call(this, "executed");
  }, e.onExecuted = Hl, Ul = function(...s) {
    var l;
    typeof Vl == "function" && Vl.apply(this, s), (l = this.__panoExternalStickerSync) == null || l.call(this, "connections");
  }, e.onConnectionsChange = Ul), r || Dh.set(String(e.id ?? "0"), () => tf());
  let Bi = null;
  const Gi = async () => Bi || (Bi = (async () => {
    var i, s, l, c, p, m, _, b, w, k, C;
    return Dh.delete(String(e.id ?? "0")), ab(), r || Mn(), document.fullscreenElement === le && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Bf), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Pf && (e.__panoFlushStateBeforeQueue = null), (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s), (p = (c = e.graph) == null ? void 0 : c.setDirtyCanvas) == null || p.call(c, !0, !0), (b = (_ = (m = tr) == null ? void 0 : m.canvas) == null ? void 0 : _.setDirty) == null || b.call(_, !0, !0), ci(), j0(), H instanceof HTMLVideoElement && H.pause(), mt.forEach((N) => {
      try {
        N();
      } catch {
      }
    }), (w = ve == null ? void 0 : ve.dispose) == null || w.call(ve), (k = Oe == null ? void 0 : Oe.unmount) == null || k.call(Oe), (C = Ae == null ? void 0 : Ae.dispose) == null || C.call(Ae), En(!1), window.removeEventListener("keydown", Kf, !0), window.removeEventListener("keydown", Wf, !0), window.removeEventListener("keydown", Uo, !0), window.removeEventListener("keyup", Uo, !0), window.removeEventListener("blur", Yf), window.removeEventListener("keydown", qf, !0), window.removeEventListener("dragenter", Rf, !0), window.removeEventListener("dragover", Lf, !0), window.removeEventListener("dragleave", zf, !0), window.removeEventListener("drop", $f, !0), !r && t === "stickers" && (e.onExecuted === Hl && (e.onExecuted = jl), e.onConnectionsChange === Ul && (e.onConnectionsChange = Vl), e.__panoExternalStickerSync === Bl && (e.__panoExternalStickerSync = null)), G.unmount(), z.remove(), tb(), Bi = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), Bi = null, !1)), Bi), Kf = (i) => {
    var s, l, c, p, m;
    if (i.key === "Escape") {
      if (Oa()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (d.fullscreen && document.fullscreenElement === le) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (c = document.exitFullscreen) == null || c.call(document).catch(() => {
        });
        return;
      }
      if (d.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (p = i.stopImmediatePropagation) == null || p.call(i), Ho(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), Gi();
    }
  }, Wf = (i) => {
    const s = String(i.key || ""), l = String(i.code || ""), c = Number(i.keyCode || 0);
    if (!(s === "Delete" || l === "Delete" || c === 46) && !(s === "Backspace" || l === "Backspace" || c === 8)) return;
    const _ = i.target, b = ((_ == null ? void 0 : _.tagName) || "").toUpperCase();
    b === "INPUT" || b === "TEXTAREA" || _ != null && _.isContentEditable || !At() || (wf(), i.preventDefault(), i.stopPropagation());
  }, Uo = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    d.marqueeModifier === s && d.altModifier === l || (d.marqueeModifier = s, d.altModifier = l, Mr(), _t(d.pointerPos));
  }, Yf = () => {
    d.marqueeModifier = !1, d.altModifier = !1, Mr(), _t(d.pointerPos);
  }, qf = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (s !== "z" && l !== "KeyZ") return;
    const c = i.target, p = ((c == null ? void 0 : c.tagName) || "").toUpperCase();
    if (p === "INPUT" || p === "TEXTAREA" || c != null && c.isContentEditable) return;
    const { canUndo: m, canRedo: _ } = _f();
    i.shiftKey && !_ || !i.shiftKey && !m || (Tl(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", Kf, !0), window.addEventListener("keydown", Wf, !0), window.addEventListener("keydown", Uo, !0), window.addEventListener("keyup", Uo, !0), window.addEventListener("blur", Yf), window.addEventListener("keydown", qf, !0), le.addEventListener("pointerdown", (i) => {
    i.target === le && Gi();
  });
  function ar(i, s, { rollbackState: l = !1 } = {}) {
    let c = "";
    try {
      l && (c = JSON.stringify(v)), s();
    } catch (p) {
      if (c)
        try {
          const m = JSON.parse(c);
          Object.keys(v).forEach((_) => delete v[_]), Object.assign(v, m), r || Mn();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      P.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, p);
    }
  }
  ar("cutout-focus", Ng), !r && t === "stickers" && ar("external-sticker-sync", () => Yu("open"), { rollbackState: !0 }), B0().catch((i) => {
    P.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), ar("history", ot), ar("undo-redo", zl), ar("paint-ui", Nn), ar("side-panel", Ke), ar("look-at-frame", vl), ar("video-source", Oi), ar("canvas-size", yf), ar("cursor", () => _t(d.pointerPos)), ye(), se.rafId = requestAnimationFrame(vf);
}
tr.registerExtension(sx({
  app: tr,
  openEditor: TN,
  attachStickers: bS,
  attachCutout: yS,
  attachPreview: gS,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: eN
}));
