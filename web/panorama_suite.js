import * as Ja from "../../scripts/app.js";
import { app as un } from "../../scripts/app.js";
import { api as Jt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function vc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const it = {}, ii = [], Vn = () => {
}, _f = () => !1, To = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Lo = (e) => e.startsWith("onUpdate:"), Bt = Object.assign, _c = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Mp = Object.prototype.hasOwnProperty, Je = (e, t) => Mp.call(e, t), Re = Array.isArray, ai = (e) => aa(e) === "[object Map]", xf = (e) => aa(e) === "[object Set]", Ql = (e) => aa(e) === "[object Date]", ze = (e) => typeof e == "function", wt = (e) => typeof e == "string", Hn = (e) => typeof e == "symbol", nt = (e) => e !== null && typeof e == "object", wf = (e) => (nt(e) || ze(e)) && ze(e.then) && ze(e.catch), Sf = Object.prototype.toString, aa = (e) => Sf.call(e), kp = (e) => aa(e).slice(8, -1), Nf = (e) => aa(e) === "[object Object]", xc = (e) => wt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Fi = /* @__PURE__ */ vc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ro = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Pp = /-\w/g, Qt = Ro(
  (e) => e.replace(Pp, (t) => t.slice(1).toUpperCase())
), Cp = /\B([A-Z])/g, Tr = Ro(
  (e) => e.replace(Cp, "-$1").toLowerCase()
), Oo = Ro((e) => e.charAt(0).toUpperCase() + e.slice(1)), ks = Ro(
  (e) => e ? `on${Oo(e)}` : ""
), Rn = (e, t) => !Object.is(e, t), Ps = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Mf = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Ap = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let eu;
const Fo = () => eu || (eu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qt(e) {
  if (Re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], a = wt(r) ? Tp(r) : qt(r);
      if (a)
        for (const s in a)
          t[s] = a[s];
    }
    return t;
  } else if (wt(e) || nt(e))
    return e;
}
const Ip = /;(?![^(]*\))/g, Dp = /:([^]+)/, Ep = /\/\*[^]*?\*\//g;
function Tp(e) {
  const t = {};
  return e.replace(Ep, "").split(Ip).forEach((n) => {
    if (n) {
      const r = n.split(Dp);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function xt(e) {
  let t = "";
  if (wt(e))
    t = e;
  else if (Re(e))
    for (let n = 0; n < e.length; n++) {
      const r = xt(e[n]);
      r && (t += r + " ");
    }
  else if (nt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Lp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Rp = /* @__PURE__ */ vc(Lp);
function kf(e) {
  return !!e || e === "";
}
function Op(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = wc(e[r], t[r]);
  return n;
}
function wc(e, t) {
  if (e === t) return !0;
  let n = Ql(e), r = Ql(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Hn(e), r = Hn(t), n || r)
    return e === t;
  if (n = Re(e), r = Re(t), n || r)
    return n && r ? Op(e, t) : !1;
  if (n = nt(e), r = nt(t), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(e).length, s = Object.keys(t).length;
    if (a !== s)
      return !1;
    for (const u in e) {
      const f = e.hasOwnProperty(u), g = t.hasOwnProperty(u);
      if (f && !g || !f && g || !wc(e[u], t[u]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Pf = (e) => !!(e && e.__v_isRef === !0), kt = (e) => wt(e) ? e : e == null ? "" : Re(e) || nt(e) && (e.toString === Sf || !ze(e.toString)) ? Pf(e) ? kt(e.value) : JSON.stringify(e, Cf, 2) : String(e), Cf = (e, t) => Pf(t) ? Cf(e, t.value) : ai(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, a], s) => (n[Cs(r, s) + " =>"] = a, n),
    {}
  )
} : xf(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Cs(n))
} : Hn(t) ? Cs(t) : nt(t) && !Re(t) && !Nf(t) ? String(t) : t, Cs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Hn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let an;
class Fp {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = an, !t && an && (this.index = (an.scopes || (an.scopes = [])).push(
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
      const n = an;
      try {
        return an = this, t();
      } finally {
        an = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = an, an = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (an = this.prevScope, this.prevScope = void 0);
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
function Vp() {
  return an;
}
let st;
const As = /* @__PURE__ */ new WeakSet();
class Af {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, an && an.active && an.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, As.has(this) && (As.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Df(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, tu(this), Ef(this);
    const t = st, n = Nn;
    st = this, Nn = !0;
    try {
      return this.fn();
    } finally {
      Tf(this), st = t, Nn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Mc(t);
      this.deps = this.depsTail = void 0, tu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? As.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Xs(this) && this.run();
  }
  get dirty() {
    return Xs(this);
  }
}
let If = 0, Vi, Hi;
function Df(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Hi, Hi = e;
    return;
  }
  e.next = Vi, Vi = e;
}
function Sc() {
  If++;
}
function Nc() {
  if (--If > 0)
    return;
  if (Hi) {
    let t = Hi;
    for (Hi = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Vi; ) {
    let t = Vi;
    for (Vi = void 0; t; ) {
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
function Ef(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Tf(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const a = r.prevDep;
    r.version === -1 ? (r === n && (n = a), Mc(r), Hp(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
  }
  e.deps = t, e.depsTail = n;
}
function Xs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Lf(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Lf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Zi) || (e.globalVersion = Zi, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Xs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = st, r = Nn;
  st = e, Nn = !0;
  try {
    Ef(e);
    const a = e.fn(e._value);
    (t.version === 0 || Rn(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    st = n, Nn = r, Tf(e), e.flags &= -3;
  }
}
function Mc(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: a } = e;
  if (r && (r.nextSub = a, e.prevSub = void 0), a && (a.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Mc(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Hp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Nn = !0;
const Rf = [];
function Jn() {
  Rf.push(Nn), Nn = !1;
}
function Qn() {
  const e = Rf.pop();
  Nn = e === void 0 ? !0 : e;
}
function tu(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = st;
    st = void 0;
    try {
      t();
    } finally {
      st = n;
    }
  }
}
let Zi = 0;
class zp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class kc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!st || !Nn || st === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== st)
      n = this.activeLink = new zp(st, this), st.deps ? (n.prevDep = st.depsTail, st.depsTail.nextDep = n, st.depsTail = n) : st.deps = st.depsTail = n, Of(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = st.depsTail, n.nextDep = void 0, st.depsTail.nextDep = n, st.depsTail = n, st.deps === n && (st.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Zi++, this.notify(t);
  }
  notify(t) {
    Sc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Nc();
    }
  }
}
function Of(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Of(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Zs = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ Symbol(
  ""
), Js = /* @__PURE__ */ Symbol(
  ""
), Ji = /* @__PURE__ */ Symbol(
  ""
);
function zt(e, t, n) {
  if (Nn && st) {
    let r = Zs.get(e);
    r || Zs.set(e, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || (r.set(n, a = new kc()), a.map = r, a.key = n), a.track();
  }
}
function Xn(e, t, n, r, a, s) {
  const u = Zs.get(e);
  if (!u) {
    Zi++;
    return;
  }
  const f = (g) => {
    g && g.trigger();
  };
  if (Sc(), t === "clear")
    u.forEach(f);
  else {
    const g = Re(e), y = g && xc(n);
    if (g && n === "length") {
      const x = Number(r);
      u.forEach((d, w) => {
        (w === "length" || w === Ji || !Hn(w) && w >= x) && f(d);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), y && f(u.get(Ji)), t) {
        case "add":
          g ? y && f(u.get("length")) : (f(u.get(Mr)), ai(e) && f(u.get(Js)));
          break;
        case "delete":
          g || (f(u.get(Mr)), ai(e) && f(u.get(Js)));
          break;
        case "set":
          ai(e) && f(u.get(Mr));
          break;
      }
  }
  Nc();
}
function Wr(e) {
  const t = /* @__PURE__ */ Ze(e);
  return t === e ? t : (zt(t, "iterate", Ji), /* @__PURE__ */ mn(e) ? t : t.map(Mn));
}
function Vo(e) {
  return zt(e = /* @__PURE__ */ Ze(e), "iterate", Ji), e;
}
function Tn(e, t) {
  return /* @__PURE__ */ er(e) ? ui(/* @__PURE__ */ kr(e) ? Mn(t) : t) : Mn(t);
}
const jp = {
  __proto__: null,
  [Symbol.iterator]() {
    return Is(this, Symbol.iterator, (e) => Tn(this, e));
  },
  concat(...e) {
    return Wr(this).concat(
      ...e.map((t) => Re(t) ? Wr(t) : t)
    );
  },
  entries() {
    return Is(this, "entries", (e) => (e[1] = Tn(this, e[1]), e));
  },
  every(e, t) {
    return Un(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Un(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Tn(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Un(
      this,
      "find",
      e,
      t,
      (n) => Tn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Un(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Un(
      this,
      "findLast",
      e,
      t,
      (n) => Tn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Un(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Un(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ds(this, "includes", e);
  },
  indexOf(...e) {
    return Ds(this, "indexOf", e);
  },
  join(e) {
    return Wr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ds(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Un(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return wi(this, "pop");
  },
  push(...e) {
    return wi(this, "push", e);
  },
  reduce(e, ...t) {
    return nu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return nu(this, "reduceRight", e, t);
  },
  shift() {
    return wi(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Un(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return wi(this, "splice", e);
  },
  toReversed() {
    return Wr(this).toReversed();
  },
  toSorted(e) {
    return Wr(this).toSorted(e);
  },
  toSpliced(...e) {
    return Wr(this).toSpliced(...e);
  },
  unshift(...e) {
    return wi(this, "unshift", e);
  },
  values() {
    return Is(this, "values", (e) => Tn(this, e));
  }
};
function Is(e, t, n) {
  const r = Vo(e), a = r[t]();
  return r !== e && !/* @__PURE__ */ mn(e) && (a._next = a.next, a.next = () => {
    const s = a._next();
    return s.done || (s.value = n(s.value)), s;
  }), a;
}
const $p = Array.prototype;
function Un(e, t, n, r, a, s) {
  const u = Vo(e), f = u !== e && !/* @__PURE__ */ mn(e), g = u[t];
  if (g !== $p[t]) {
    const d = g.apply(e, s);
    return f ? Mn(d) : d;
  }
  let y = n;
  u !== e && (f ? y = function(d, w) {
    return n.call(this, Tn(e, d), w, e);
  } : n.length > 2 && (y = function(d, w) {
    return n.call(this, d, w, e);
  }));
  const x = g.call(u, y, r);
  return f && a ? a(x) : x;
}
function nu(e, t, n, r) {
  const a = Vo(e), s = a !== e && !/* @__PURE__ */ mn(e);
  let u = n, f = !1;
  a !== e && (s ? (f = r.length === 0, u = function(y, x, d) {
    return f && (f = !1, y = Tn(e, y)), n.call(this, y, Tn(e, x), d, e);
  }) : n.length > 3 && (u = function(y, x, d) {
    return n.call(this, y, x, d, e);
  }));
  const g = a[t](u, ...r);
  return f ? Tn(e, g) : g;
}
function Ds(e, t, n) {
  const r = /* @__PURE__ */ Ze(e);
  zt(r, "iterate", Ji);
  const a = r[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Ac(n[0]) ? (n[0] = /* @__PURE__ */ Ze(n[0]), r[t](...n)) : a;
}
function wi(e, t, n = []) {
  Jn(), Sc();
  const r = (/* @__PURE__ */ Ze(e))[t].apply(e, n);
  return Nc(), Qn(), r;
}
const Bp = /* @__PURE__ */ vc("__proto__,__v_isRef,__isVue"), Ff = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Hn)
);
function Up(e) {
  Hn(e) || (e = String(e));
  const t = /* @__PURE__ */ Ze(this);
  return zt(t, "has", e), t.hasOwnProperty(e);
}
class Vf {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !a;
    if (n === "__v_isReadonly")
      return a;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (a ? s ? e0 : $f : s ? jf : zf).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const u = Re(t);
    if (!a) {
      let g;
      if (u && (g = jp[n]))
        return g;
      if (n === "hasOwnProperty")
        return Up;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ $t(t) ? t : r
    );
    if ((Hn(n) ? Ff.has(n) : Bp(n)) || (a || zt(t, "get", n), s))
      return f;
    if (/* @__PURE__ */ $t(f)) {
      const g = u && xc(n) ? f : f.value;
      return a && nt(g) ? /* @__PURE__ */ ec(g) : g;
    }
    return nt(f) ? a ? /* @__PURE__ */ ec(f) : /* @__PURE__ */ Ho(f) : f;
  }
}
class Hf extends Vf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, a) {
    let s = t[n];
    const u = Re(t) && xc(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ er(s);
      if (!/* @__PURE__ */ mn(r) && !/* @__PURE__ */ er(r) && (s = /* @__PURE__ */ Ze(s), r = /* @__PURE__ */ Ze(r)), !u && /* @__PURE__ */ $t(s) && !/* @__PURE__ */ $t(r))
        return y || (s.value = r), !0;
    }
    const f = u ? Number(n) < t.length : Je(t, n), g = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ $t(t) ? t : a
    );
    return t === /* @__PURE__ */ Ze(a) && (f ? Rn(r, s) && Xn(t, "set", n, r) : Xn(t, "add", n, r)), g;
  }
  deleteProperty(t, n) {
    const r = Je(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && r && Xn(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Hn(n) || !Ff.has(n)) && zt(t, "has", n), r;
  }
  ownKeys(t) {
    return zt(
      t,
      "iterate",
      Re(t) ? "length" : Mr
    ), Reflect.ownKeys(t);
  }
}
class Gp extends Vf {
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
const Kp = /* @__PURE__ */ new Hf(), Wp = /* @__PURE__ */ new Gp(), Yp = /* @__PURE__ */ new Hf(!0);
const Qs = (e) => e, Da = (e) => Reflect.getPrototypeOf(e);
function qp(e, t, n) {
  return function(...r) {
    const a = this.__v_raw, s = /* @__PURE__ */ Ze(a), u = ai(s), f = e === "entries" || e === Symbol.iterator && u, g = e === "keys" && u, y = a[e](...r), x = n ? Qs : t ? ui : Mn;
    return !t && zt(
      s,
      "iterate",
      g ? Js : Mr
    ), Bt(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: d, done: w } = y.next();
          return w ? { value: d, done: w } : {
            value: f ? [x(d[0]), x(d[1])] : x(d),
            done: w
          };
        }
      }
    );
  };
}
function Ea(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xp(e, t) {
  const n = {
    get(a) {
      const s = this.__v_raw, u = /* @__PURE__ */ Ze(s), f = /* @__PURE__ */ Ze(a);
      e || (Rn(a, f) && zt(u, "get", a), zt(u, "get", f));
      const { has: g } = Da(u), y = t ? Qs : e ? ui : Mn;
      if (g.call(u, a))
        return y(s.get(a));
      if (g.call(u, f))
        return y(s.get(f));
      s !== u && s.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && zt(/* @__PURE__ */ Ze(a), "iterate", Mr), a.size;
    },
    has(a) {
      const s = this.__v_raw, u = /* @__PURE__ */ Ze(s), f = /* @__PURE__ */ Ze(a);
      return e || (Rn(a, f) && zt(u, "has", a), zt(u, "has", f)), a === f ? s.has(a) : s.has(a) || s.has(f);
    },
    forEach(a, s) {
      const u = this, f = u.__v_raw, g = /* @__PURE__ */ Ze(f), y = t ? Qs : e ? ui : Mn;
      return !e && zt(g, "iterate", Mr), f.forEach((x, d) => a.call(s, y(x), y(d), u));
    }
  };
  return Bt(
    n,
    e ? {
      add: Ea("add"),
      set: Ea("set"),
      delete: Ea("delete"),
      clear: Ea("clear")
    } : {
      add(a) {
        const s = /* @__PURE__ */ Ze(this), u = Da(s), f = /* @__PURE__ */ Ze(a), g = !t && !/* @__PURE__ */ mn(a) && !/* @__PURE__ */ er(a) ? f : a;
        return u.has.call(s, g) || Rn(a, g) && u.has.call(s, a) || Rn(f, g) && u.has.call(s, f) || (s.add(g), Xn(s, "add", g, g)), this;
      },
      set(a, s) {
        !t && !/* @__PURE__ */ mn(s) && !/* @__PURE__ */ er(s) && (s = /* @__PURE__ */ Ze(s));
        const u = /* @__PURE__ */ Ze(this), { has: f, get: g } = Da(u);
        let y = f.call(u, a);
        y || (a = /* @__PURE__ */ Ze(a), y = f.call(u, a));
        const x = g.call(u, a);
        return u.set(a, s), y ? Rn(s, x) && Xn(u, "set", a, s) : Xn(u, "add", a, s), this;
      },
      delete(a) {
        const s = /* @__PURE__ */ Ze(this), { has: u, get: f } = Da(s);
        let g = u.call(s, a);
        g || (a = /* @__PURE__ */ Ze(a), g = u.call(s, a)), f && f.call(s, a);
        const y = s.delete(a);
        return g && Xn(s, "delete", a, void 0), y;
      },
      clear() {
        const a = /* @__PURE__ */ Ze(this), s = a.size !== 0, u = a.clear();
        return s && Xn(
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
    n[a] = qp(a, e, t);
  }), n;
}
function Pc(e, t) {
  const n = Xp(e, t);
  return (r, a, s) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? r : Reflect.get(
    Je(n, a) && a in r ? n : r,
    a,
    s
  );
}
const Zp = {
  get: /* @__PURE__ */ Pc(!1, !1)
}, Jp = {
  get: /* @__PURE__ */ Pc(!1, !0)
}, Qp = {
  get: /* @__PURE__ */ Pc(!0, !1)
};
const zf = /* @__PURE__ */ new WeakMap(), jf = /* @__PURE__ */ new WeakMap(), $f = /* @__PURE__ */ new WeakMap(), e0 = /* @__PURE__ */ new WeakMap();
function t0(e) {
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
function n0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : t0(kp(e));
}
// @__NO_SIDE_EFFECTS__
function Ho(e) {
  return /* @__PURE__ */ er(e) ? e : Cc(
    e,
    !1,
    Kp,
    Zp,
    zf
  );
}
// @__NO_SIDE_EFFECTS__
function r0(e) {
  return Cc(
    e,
    !1,
    Yp,
    Jp,
    jf
  );
}
// @__NO_SIDE_EFFECTS__
function ec(e) {
  return Cc(
    e,
    !0,
    Wp,
    Qp,
    $f
  );
}
function Cc(e, t, n, r, a) {
  if (!nt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = n0(e);
  if (s === 0)
    return e;
  const u = a.get(e);
  if (u)
    return u;
  const f = new Proxy(
    e,
    s === 2 ? r : n
  );
  return a.set(e, f), f;
}
// @__NO_SIDE_EFFECTS__
function kr(e) {
  return /* @__PURE__ */ er(e) ? /* @__PURE__ */ kr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function mn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ac(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ze(t) : e;
}
function i0(e) {
  return !Je(e, "__v_skip") && Object.isExtensible(e) && Mf(e, "__v_skip", !0), e;
}
const Mn = (e) => nt(e) ? /* @__PURE__ */ Ho(e) : e, ui = (e) => nt(e) ? /* @__PURE__ */ ec(e) : e;
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function tc(e) {
  return a0(e, !1);
}
function a0(e, t) {
  return /* @__PURE__ */ $t(e) ? e : new o0(e, t);
}
class o0 {
  constructor(t, n) {
    this.dep = new kc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ze(t), this._value = n ? t : Mn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ mn(t) || /* @__PURE__ */ er(t);
    t = r ? t : /* @__PURE__ */ Ze(t), Rn(t, n) && (this._rawValue = t, this._value = r ? t : Mn(t), this.dep.trigger());
  }
}
function ni(e) {
  return /* @__PURE__ */ $t(e) ? e.value : e;
}
const s0 = {
  get: (e, t, n) => t === "__v_raw" ? e : ni(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const a = e[t];
    return /* @__PURE__ */ $t(a) && !/* @__PURE__ */ $t(n) ? (a.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Bf(e) {
  return /* @__PURE__ */ kr(e) ? e : new Proxy(e, s0);
}
class c0 {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new kc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Zi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    st !== this)
      return Df(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Lf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function l0(e, t, n = !1) {
  let r, a;
  return ze(e) ? r = e : (r = e.get, a = e.set), new c0(r, a, n);
}
const Ta = {}, uo = /* @__PURE__ */ new WeakMap();
let xr;
function u0(e, t = !1, n = xr) {
  if (n) {
    let r = uo.get(n);
    r || uo.set(n, r = []), r.push(e);
  }
}
function f0(e, t, n = it) {
  const { immediate: r, deep: a, once: s, scheduler: u, augmentJob: f, call: g } = n, y = (C) => a ? C : /* @__PURE__ */ mn(C) || a === !1 || a === 0 ? Zn(C, 1) : Zn(C);
  let x, d, w, N, A = !1, D = !1;
  if (/* @__PURE__ */ $t(e) ? (d = () => e.value, A = /* @__PURE__ */ mn(e)) : /* @__PURE__ */ kr(e) ? (d = () => y(e), A = !0) : Re(e) ? (D = !0, A = e.some((C) => /* @__PURE__ */ kr(C) || /* @__PURE__ */ mn(C)), d = () => e.map((C) => {
    if (/* @__PURE__ */ $t(C))
      return C.value;
    if (/* @__PURE__ */ kr(C))
      return y(C);
    if (ze(C))
      return g ? g(C, 2) : C();
  })) : ze(e) ? t ? d = g ? () => g(e, 2) : e : d = () => {
    if (w) {
      Jn();
      try {
        w();
      } finally {
        Qn();
      }
    }
    const C = xr;
    xr = x;
    try {
      return g ? g(e, 3, [N]) : e(N);
    } finally {
      xr = C;
    }
  } : d = Vn, t && a) {
    const C = d, $ = a === !0 ? 1 / 0 : a;
    d = () => Zn(C(), $);
  }
  const O = Vp(), H = () => {
    x.stop(), O && O.active && _c(O.effects, x);
  };
  if (s && t) {
    const C = t;
    t = (...$) => {
      C(...$), H();
    };
  }
  let R = D ? new Array(e.length).fill(Ta) : Ta;
  const E = (C) => {
    if (!(!(x.flags & 1) || !x.dirty && !C))
      if (t) {
        const $ = x.run();
        if (a || A || (D ? $.some((ie, ae) => Rn(ie, R[ae])) : Rn($, R))) {
          w && w();
          const ie = xr;
          xr = x;
          try {
            const ae = [
              $,
              // pass undefined as the old value when it's changed for the first time
              R === Ta ? void 0 : D && R[0] === Ta ? [] : R,
              N
            ];
            R = $, g ? g(t, 3, ae) : (
              // @ts-expect-error
              t(...ae)
            );
          } finally {
            xr = ie;
          }
        }
      } else
        x.run();
  };
  return f && f(E), x = new Af(d), x.scheduler = u ? () => u(E, !1) : E, N = (C) => u0(C, !1, x), w = x.onStop = () => {
    const C = uo.get(x);
    if (C) {
      if (g)
        g(C, 4);
      else
        for (const $ of C) $();
      uo.delete(x);
    }
  }, t ? r ? E(!0) : R = x.run() : u ? u(E.bind(null, !0), !0) : x.run(), H.pause = x.pause.bind(x), H.resume = x.resume.bind(x), H.stop = H, H;
}
function Zn(e, t = 1 / 0, n) {
  if (t <= 0 || !nt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ $t(e))
    Zn(e.value, t, n);
  else if (Re(e))
    for (let r = 0; r < e.length; r++)
      Zn(e[r], t, n);
  else if (xf(e) || ai(e))
    e.forEach((r) => {
      Zn(r, t, n);
    });
  else if (Nf(e)) {
    for (const r in e)
      Zn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Zn(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function oa(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (a) {
    zo(a, t, n);
  }
}
function zn(e, t, n, r) {
  if (ze(e)) {
    const a = oa(e, t, n, r);
    return a && wf(a) && a.catch((s) => {
      zo(s, t, n);
    }), a;
  }
  if (Re(e)) {
    const a = [];
    for (let s = 0; s < e.length; s++)
      a.push(zn(e[s], t, n, r));
    return a;
  }
}
function zo(e, t, n, r = !0) {
  const a = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: u } = t && t.appContext.config || it;
  if (t) {
    let f = t.parent;
    const g = t.proxy, y = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const x = f.ec;
      if (x) {
        for (let d = 0; d < x.length; d++)
          if (x[d](e, g, y) === !1)
            return;
      }
      f = f.parent;
    }
    if (s) {
      Jn(), oa(s, null, 10, [
        e,
        g,
        y
      ]), Qn();
      return;
    }
  }
  d0(e, n, a, r, u);
}
function d0(e, t, n, r = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Xt = [];
let Dn = -1;
const oi = [];
let lr = null, Jr = 0;
const Uf = /* @__PURE__ */ Promise.resolve();
let fo = null;
function Ic(e) {
  const t = fo || Uf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function h0(e) {
  let t = Dn + 1, n = Xt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, a = Xt[r], s = Qi(a);
    s < e || s === e && a.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Dc(e) {
  if (!(e.flags & 1)) {
    const t = Qi(e), n = Xt[Xt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Qi(n) ? Xt.push(e) : Xt.splice(h0(t), 0, e), e.flags |= 1, Gf();
  }
}
function Gf() {
  fo || (fo = Uf.then(Wf));
}
function g0(e) {
  Re(e) ? oi.push(...e) : lr && e.id === -1 ? lr.splice(Jr + 1, 0, e) : e.flags & 1 || (oi.push(e), e.flags |= 1), Gf();
}
function ru(e, t, n = Dn + 1) {
  for (; n < Xt.length; n++) {
    const r = Xt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Xt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Kf(e) {
  if (oi.length) {
    const t = [...new Set(oi)].sort(
      (n, r) => Qi(n) - Qi(r)
    );
    if (oi.length = 0, lr) {
      lr.push(...t);
      return;
    }
    for (lr = t, Jr = 0; Jr < lr.length; Jr++) {
      const n = lr[Jr];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    lr = null, Jr = 0;
  }
}
const Qi = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Wf(e) {
  try {
    for (Dn = 0; Dn < Xt.length; Dn++) {
      const t = Xt[Dn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), oa(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Dn < Xt.length; Dn++) {
      const t = Xt[Dn];
      t && (t.flags &= -2);
    }
    Dn = -1, Xt.length = 0, Kf(), fo = null, (Xt.length || oi.length) && Wf();
  }
}
let fn = null, Yf = null;
function ho(e) {
  const t = fn;
  return fn = e, Yf = e && e.type.__scopeId || null, t;
}
function p0(e, t = fn, n) {
  if (!t || e._n)
    return e;
  const r = (...a) => {
    r._d && pu(-1);
    const s = ho(t);
    let u;
    try {
      u = e(...a);
    } finally {
      ho(s), r._d && pu(1);
    }
    return u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Ec(e, t) {
  if (fn === null)
    return e;
  const n = Uo(fn), r = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [s, u, f, g = it] = t[a];
    s && (ze(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Zn(u), r.push({
      dir: s,
      instance: n,
      value: u,
      oldValue: void 0,
      arg: f,
      modifiers: g
    }));
  }
  return e;
}
function yr(e, t, n, r) {
  const a = e.dirs, s = t && t.dirs;
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    s && (f.oldValue = s[u].value);
    let g = f.dir[r];
    g && (Jn(), zn(g, n, 8, [
      e.el,
      f,
      e,
      t
    ]), Qn());
  }
}
function m0(e, t) {
  if (jt) {
    let n = jt.provides;
    const r = jt.parent && jt.parent.provides;
    r === n && (n = jt.provides = Object.create(r)), n[e] = t;
  }
}
function Qa(e, t, n = !1) {
  const r = m1();
  if (r || si) {
    let a = si ? si._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && ze(t) ? t.call(r && r.proxy) : t;
  }
}
const y0 = /* @__PURE__ */ Symbol.for("v-scx"), b0 = () => Qa(y0);
function zi(e, t, n) {
  return qf(e, t, n);
}
function qf(e, t, n = it) {
  const { immediate: r, deep: a, flush: s, once: u } = n, f = Bt({}, n), g = t && r || !t && s !== "post";
  let y;
  if (ta) {
    if (s === "sync") {
      const N = b0();
      y = N.__watcherHandles || (N.__watcherHandles = []);
    } else if (!g) {
      const N = () => {
      };
      return N.stop = Vn, N.resume = Vn, N.pause = Vn, N;
    }
  }
  const x = jt;
  f.call = (N, A, D) => zn(N, x, A, D);
  let d = !1;
  s === "post" ? f.scheduler = (N) => {
    rn(N, x && x.suspense);
  } : s !== "sync" && (d = !0, f.scheduler = (N, A) => {
    A ? N() : Dc(N);
  }), f.augmentJob = (N) => {
    t && (N.flags |= 4), d && (N.flags |= 2, x && (N.id = x.uid, N.i = x));
  };
  const w = f0(e, t, f);
  return ta && (y ? y.push(w) : g && w()), w;
}
function v0(e, t, n) {
  const r = this.proxy, a = wt(e) ? e.includes(".") ? Xf(r, e) : () => r[e] : e.bind(r, r);
  let s;
  ze(t) ? s = t : (s = t.handler, n = t);
  const u = sa(this), f = qf(a, s.bind(r), n);
  return u(), f;
}
function Xf(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
const _0 = /* @__PURE__ */ Symbol("_vte"), x0 = (e) => e.__isTeleport, w0 = /* @__PURE__ */ Symbol("_leaveCb");
function Tc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Tc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Zf(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function iu(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const go = /* @__PURE__ */ new WeakMap();
function ji(e, t, n, r, a = !1) {
  if (Re(e)) {
    e.forEach(
      (D, O) => ji(
        D,
        t && (Re(t) ? t[O] : t),
        n,
        r,
        a
      )
    );
    return;
  }
  if ($i(r) && !a) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ji(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? Uo(r.component) : r.el, u = a ? null : s, { i: f, r: g } = e, y = t && t.r, x = f.refs === it ? f.refs = {} : f.refs, d = f.setupState, w = /* @__PURE__ */ Ze(d), N = d === it ? _f : (D) => iu(x, D) ? !1 : Je(w, D), A = (D, O) => !(O && iu(x, O));
  if (y != null && y !== g) {
    if (au(t), wt(y))
      x[y] = null, N(y) && (d[y] = null);
    else if (/* @__PURE__ */ $t(y)) {
      const D = t;
      A(y, D.k) && (y.value = null), D.k && (x[D.k] = null);
    }
  }
  if (ze(g))
    oa(g, f, 12, [u, x]);
  else {
    const D = wt(g), O = /* @__PURE__ */ $t(g);
    if (D || O) {
      const H = () => {
        if (e.f) {
          const R = D ? N(g) ? d[g] : x[g] : A() || !e.k ? g.value : x[e.k];
          if (a)
            Re(R) && _c(R, s);
          else if (Re(R))
            R.includes(s) || R.push(s);
          else if (D)
            x[g] = [s], N(g) && (d[g] = x[g]);
          else {
            const E = [s];
            A(g, e.k) && (g.value = E), e.k && (x[e.k] = E);
          }
        } else D ? (x[g] = u, N(g) && (d[g] = u)) : O && (A(g, e.k) && (g.value = u), e.k && (x[e.k] = u));
      };
      if (u) {
        const R = () => {
          H(), go.delete(e);
        };
        R.id = -1, go.set(e, R), rn(R, n);
      } else
        au(e), H();
    }
  }
}
function au(e) {
  const t = go.get(e);
  t && (t.flags |= 8, go.delete(e));
}
Fo().requestIdleCallback;
Fo().cancelIdleCallback;
const $i = (e) => !!e.type.__asyncLoader, Jf = (e) => e.type.__isKeepAlive;
function S0(e, t) {
  Qf(e, "a", t);
}
function N0(e, t) {
  Qf(e, "da", t);
}
function Qf(e, t, n = jt) {
  const r = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (jo(t, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Jf(a.parent.vnode) && M0(r, t, n, a), a = a.parent;
  }
}
function M0(e, t, n, r) {
  const a = jo(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  td(() => {
    _c(r[t], a);
  }, n);
}
function jo(e, t, n = jt, r = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...u) => {
      Jn();
      const f = sa(n), g = zn(t, n, e, u);
      return f(), Qn(), g;
    });
    return r ? a.unshift(s) : a.push(s), s;
  }
}
const tr = (e) => (t, n = jt) => {
  (!ta || e === "sp") && jo(e, (...r) => t(...r), n);
}, k0 = tr("bm"), ed = tr("m"), P0 = tr(
  "bu"
), C0 = tr("u"), Lc = tr(
  "bum"
), td = tr("um"), A0 = tr(
  "sp"
), I0 = tr("rtg"), D0 = tr("rtc");
function E0(e, t = jt) {
  jo("ec", e, t);
}
const T0 = "components", nd = /* @__PURE__ */ Symbol.for("v-ndc");
function L0(e) {
  return wt(e) ? R0(T0, e, !1) || e : e || nd;
}
function R0(e, t, n = !0, r = !1) {
  const a = fn || jt;
  if (a) {
    const s = a.type;
    {
      const f = x1(
        s,
        !1
      );
      if (f && (f === t || f === Qt(t) || f === Oo(Qt(t))))
        return s;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      ou(a[e] || s[e], t) || // global registration
      ou(a.appContext[e], t)
    );
    return !u && r ? s : u;
  }
}
function ou(e, t) {
  return e && (e[t] || e[Qt(t)] || e[Oo(Qt(t))]);
}
function Zt(e, t, n, r) {
  let a;
  const s = n, u = Re(e);
  if (u || wt(e)) {
    const f = u && /* @__PURE__ */ kr(e);
    let g = !1, y = !1;
    f && (g = !/* @__PURE__ */ mn(e), y = /* @__PURE__ */ er(e), e = Vo(e)), a = new Array(e.length);
    for (let x = 0, d = e.length; x < d; x++)
      a[x] = t(
        g ? y ? ui(Mn(e[x])) : Mn(e[x]) : e[x],
        x,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let f = 0; f < e; f++)
      a[f] = t(f + 1, f, void 0, s);
  } else if (nt(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (f, g) => t(f, g, void 0, s)
      );
    else {
      const f = Object.keys(e);
      a = new Array(f.length);
      for (let g = 0, y = f.length; g < y; g++) {
        const x = f[g];
        a[g] = t(e[x], x, g, s);
      }
    }
  else
    a = [];
  return a;
}
const nc = (e) => e ? Nd(e) ? Uo(e) : nc(e.parent) : null, Bi = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Bt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => nc(e.parent),
    $root: (e) => nc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => id(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Dc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ic.bind(e.proxy)),
    $watch: (e) => v0.bind(e)
  })
), Es = (e, t) => e !== it && !e.__isScriptSetup && Je(e, t), O0 = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: a, props: s, accessCache: u, type: f, appContext: g } = e;
    if (t[0] !== "$") {
      const w = u[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return r[t];
          case 2:
            return a[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Es(r, t))
          return u[t] = 1, r[t];
        if (a !== it && Je(a, t))
          return u[t] = 2, a[t];
        if (Je(s, t))
          return u[t] = 3, s[t];
        if (n !== it && Je(n, t))
          return u[t] = 4, n[t];
        rc && (u[t] = 0);
      }
    }
    const y = Bi[t];
    let x, d;
    if (y)
      return t === "$attrs" && zt(e.attrs, "get", ""), y(e);
    if (
      // css module (injected by vue-loader)
      (x = f.__cssModules) && (x = x[t])
    )
      return x;
    if (n !== it && Je(n, t))
      return u[t] = 4, n[t];
    if (
      // global properties
      d = g.config.globalProperties, Je(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: a, ctx: s } = e;
    return Es(a, t) ? (a[t] = n, !0) : r !== it && Je(r, t) ? (r[t] = n, !0) : Je(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: a, props: s, type: u }
  }, f) {
    let g;
    return !!(n[f] || e !== it && f[0] !== "$" && Je(e, f) || Es(t, f) || Je(s, f) || Je(r, f) || Je(Bi, f) || Je(a.config.globalProperties, f) || (g = u.__cssModules) && g[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Je(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function su(e) {
  return Re(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let rc = !0;
function F0(e) {
  const t = id(e), n = e.proxy, r = e.ctx;
  rc = !1, t.beforeCreate && cu(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: s,
    methods: u,
    watch: f,
    provide: g,
    inject: y,
    // lifecycle
    created: x,
    beforeMount: d,
    mounted: w,
    beforeUpdate: N,
    updated: A,
    activated: D,
    deactivated: O,
    beforeDestroy: H,
    beforeUnmount: R,
    destroyed: E,
    unmounted: C,
    render: $,
    renderTracked: ie,
    renderTriggered: ae,
    errorCaptured: re,
    serverPrefetch: we,
    // public API
    expose: k,
    inheritAttrs: ce,
    // assets
    components: ge,
    directives: xe,
    filters: ve
  } = t;
  if (y && V0(y, r, null), u)
    for (const _e in u) {
      const G = u[_e];
      ze(G) && (r[_e] = G.bind(n));
    }
  if (a) {
    const _e = a.call(n, n);
    nt(_e) && (e.data = /* @__PURE__ */ Ho(_e));
  }
  if (rc = !0, s)
    for (const _e in s) {
      const G = s[_e], fe = ze(G) ? G.bind(n, n) : ze(G.get) ? G.get.bind(n, n) : Vn, ke = !ze(G) && ze(G.set) ? G.set.bind(n) : Vn, Te = Pr({
        get: fe,
        set: ke
      });
      Object.defineProperty(r, _e, {
        enumerable: !0,
        configurable: !0,
        get: () => Te.value,
        set: (Oe) => Te.value = Oe
      });
    }
  if (f)
    for (const _e in f)
      rd(f[_e], r, n, _e);
  if (g) {
    const _e = ze(g) ? g.call(n) : g;
    Reflect.ownKeys(_e).forEach((G) => {
      m0(G, _e[G]);
    });
  }
  x && cu(x, e, "c");
  function le(_e, G) {
    Re(G) ? G.forEach((fe) => _e(fe.bind(n))) : G && _e(G.bind(n));
  }
  if (le(k0, d), le(ed, w), le(P0, N), le(C0, A), le(S0, D), le(N0, O), le(E0, re), le(D0, ie), le(I0, ae), le(Lc, R), le(td, C), le(A0, we), Re(k))
    if (k.length) {
      const _e = e.exposed || (e.exposed = {});
      k.forEach((G) => {
        Object.defineProperty(_e, G, {
          get: () => n[G],
          set: (fe) => n[G] = fe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  $ && e.render === Vn && (e.render = $), ce != null && (e.inheritAttrs = ce), ge && (e.components = ge), xe && (e.directives = xe), we && Zf(e);
}
function V0(e, t, n = Vn) {
  Re(e) && (e = ic(e));
  for (const r in e) {
    const a = e[r];
    let s;
    nt(a) ? "default" in a ? s = Qa(
      a.from || r,
      a.default,
      !0
    ) : s = Qa(a.from || r) : s = Qa(a), /* @__PURE__ */ $t(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (u) => s.value = u
    }) : t[r] = s;
  }
}
function cu(e, t, n) {
  zn(
    Re(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function rd(e, t, n, r) {
  let a = r.includes(".") ? Xf(n, r) : () => n[r];
  if (wt(e)) {
    const s = t[e];
    ze(s) && zi(a, s);
  } else if (ze(e))
    zi(a, e.bind(n));
  else if (nt(e))
    if (Re(e))
      e.forEach((s) => rd(s, t, n, r));
    else {
      const s = ze(e.handler) ? e.handler.bind(n) : t[e.handler];
      ze(s) && zi(a, s, e);
    }
}
function id(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: a,
    optionsCache: s,
    config: { optionMergeStrategies: u }
  } = e.appContext, f = s.get(t);
  let g;
  return f ? g = f : !a.length && !n && !r ? g = t : (g = {}, a.length && a.forEach(
    (y) => po(g, y, u, !0)
  ), po(g, t, u)), nt(t) && s.set(t, g), g;
}
function po(e, t, n, r = !1) {
  const { mixins: a, extends: s } = t;
  s && po(e, s, n, !0), a && a.forEach(
    (u) => po(e, u, n, !0)
  );
  for (const u in t)
    if (!(r && u === "expose")) {
      const f = H0[u] || n && n[u];
      e[u] = f ? f(e[u], t[u]) : t[u];
    }
  return e;
}
const H0 = {
  data: lu,
  props: uu,
  emits: uu,
  // objects
  methods: Di,
  computed: Di,
  // lifecycle
  beforeCreate: Yt,
  created: Yt,
  beforeMount: Yt,
  mounted: Yt,
  beforeUpdate: Yt,
  updated: Yt,
  beforeDestroy: Yt,
  beforeUnmount: Yt,
  destroyed: Yt,
  unmounted: Yt,
  activated: Yt,
  deactivated: Yt,
  errorCaptured: Yt,
  serverPrefetch: Yt,
  // assets
  components: Di,
  directives: Di,
  // watch
  watch: j0,
  // provide / inject
  provide: lu,
  inject: z0
};
function lu(e, t) {
  return t ? e ? function() {
    return Bt(
      ze(e) ? e.call(this, this) : e,
      ze(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function z0(e, t) {
  return Di(ic(e), ic(t));
}
function ic(e) {
  if (Re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Yt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Di(e, t) {
  return e ? Bt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function uu(e, t) {
  return e ? Re(e) && Re(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Bt(
    /* @__PURE__ */ Object.create(null),
    su(e),
    su(t ?? {})
  ) : t;
}
function j0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Bt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Yt(e[r], t[r]);
  return n;
}
function ad() {
  return {
    app: null,
    config: {
      isNativeTag: _f,
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
let $0 = 0;
function B0(e, t) {
  return function(r, a = null) {
    ze(r) || (r = Bt({}, r)), a != null && !nt(a) && (a = null);
    const s = ad(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let g = !1;
    const y = s.app = {
      _uid: $0++,
      _component: r,
      _props: a,
      _container: null,
      _context: s,
      _instance: null,
      version: S1,
      get config() {
        return s.config;
      },
      set config(x) {
      },
      use(x, ...d) {
        return u.has(x) || (x && ze(x.install) ? (u.add(x), x.install(y, ...d)) : ze(x) && (u.add(x), x(y, ...d))), y;
      },
      mixin(x) {
        return s.mixins.includes(x) || s.mixins.push(x), y;
      },
      component(x, d) {
        return d ? (s.components[x] = d, y) : s.components[x];
      },
      directive(x, d) {
        return d ? (s.directives[x] = d, y) : s.directives[x];
      },
      mount(x, d, w) {
        if (!g) {
          const N = y._ceVNode || Ct(r, a);
          return N.appContext = s, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(N, x, w), g = !0, y._container = x, x.__vue_app__ = y, Uo(N.component);
        }
      },
      onUnmount(x) {
        f.push(x);
      },
      unmount() {
        g && (zn(
          f,
          y._instance,
          16
        ), e(null, y._container), delete y._container.__vue_app__);
      },
      provide(x, d) {
        return s.provides[x] = d, y;
      },
      runWithContext(x) {
        const d = si;
        si = y;
        try {
          return x();
        } finally {
          si = d;
        }
      }
    };
    return y;
  };
}
let si = null;
const U0 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Qt(t)}Modifiers`] || e[`${Tr(t)}Modifiers`];
function G0(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || it;
  let a = n;
  const s = t.startsWith("update:"), u = s && U0(r, t.slice(7));
  u && (u.trim && (a = n.map((x) => wt(x) ? x.trim() : x)), u.number && (a = n.map(Ap)));
  let f, g = r[f = ks(t)] || // also try camelCase event handler (#2249)
  r[f = ks(Qt(t))];
  !g && s && (g = r[f = ks(Tr(t))]), g && zn(
    g,
    e,
    6,
    a
  );
  const y = r[f + "Once"];
  if (y) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, zn(
      y,
      e,
      6,
      a
    );
  }
}
const K0 = /* @__PURE__ */ new WeakMap();
function od(e, t, n = !1) {
  const r = n ? K0 : t.emitsCache, a = r.get(e);
  if (a !== void 0)
    return a;
  const s = e.emits;
  let u = {}, f = !1;
  if (!ze(e)) {
    const g = (y) => {
      const x = od(y, t, !0);
      x && (f = !0, Bt(u, x));
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  return !s && !f ? (nt(e) && r.set(e, null), null) : (Re(s) ? s.forEach((g) => u[g] = null) : Bt(u, s), nt(e) && r.set(e, u), u);
}
function $o(e, t) {
  return !e || !To(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Je(e, t[0].toLowerCase() + t.slice(1)) || Je(e, Tr(t)) || Je(e, t));
}
function fu(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: a,
    propsOptions: [s],
    slots: u,
    attrs: f,
    emit: g,
    render: y,
    renderCache: x,
    props: d,
    data: w,
    setupState: N,
    ctx: A,
    inheritAttrs: D
  } = e, O = ho(e);
  let H, R;
  try {
    if (n.shapeFlag & 4) {
      const C = a || r, $ = C;
      H = Ln(
        y.call(
          $,
          C,
          x,
          d,
          N,
          w,
          A
        )
      ), R = f;
    } else {
      const C = t;
      H = Ln(
        C.length > 1 ? C(
          d,
          { attrs: f, slots: u, emit: g }
        ) : C(
          d,
          null
        )
      ), R = t.props ? f : W0(f);
    }
  } catch (C) {
    Ui.length = 0, zo(C, e, 1), H = Ct(fr);
  }
  let E = H;
  if (R && D !== !1) {
    const C = Object.keys(R), { shapeFlag: $ } = E;
    C.length && $ & 7 && (s && C.some(Lo) && (R = Y0(
      R,
      s
    )), E = fi(E, R, !1, !0));
  }
  return n.dirs && (E = fi(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && Tc(E, n.transition), H = E, ho(O), H;
}
const W0 = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || To(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Y0 = (e, t) => {
  const n = {};
  for (const r in e)
    (!Lo(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function q0(e, t, n) {
  const { props: r, children: a, component: s } = e, { props: u, children: f, patchFlag: g } = t, y = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && g >= 0) {
    if (g & 1024)
      return !0;
    if (g & 16)
      return r ? du(r, u, y) : !!u;
    if (g & 8) {
      const x = t.dynamicProps;
      for (let d = 0; d < x.length; d++) {
        const w = x[d];
        if (sd(u, r, w) && !$o(y, w))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : r === u ? !1 : r ? u ? du(r, u, y) : !0 : !!u;
  return !1;
}
function du(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    if (sd(t, e, s) && !$o(n, s))
      return !0;
  }
  return !1;
}
function sd(e, t, n) {
  const r = e[n], a = t[n];
  return n === "style" && nt(r) && nt(a) ? !wc(r, a) : r !== a;
}
function X0({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = r, e = a), a === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const cd = {}, ld = () => Object.create(cd), ud = (e) => Object.getPrototypeOf(e) === cd;
function Z0(e, t, n, r = !1) {
  const a = {}, s = ld();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), fd(e, t, a, s);
  for (const u in e.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? e.props = r ? a : /* @__PURE__ */ r0(a) : e.type.props ? e.props = a : e.props = s, e.attrs = s;
}
function J0(e, t, n, r) {
  const {
    props: a,
    attrs: s,
    vnode: { patchFlag: u }
  } = e, f = /* @__PURE__ */ Ze(a), [g] = e.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const x = e.vnode.dynamicProps;
      for (let d = 0; d < x.length; d++) {
        let w = x[d];
        if ($o(e.emitsOptions, w))
          continue;
        const N = t[w];
        if (g)
          if (Je(s, w))
            N !== s[w] && (s[w] = N, y = !0);
          else {
            const A = Qt(w);
            a[A] = ac(
              g,
              f,
              A,
              N,
              e,
              !1
            );
          }
        else
          N !== s[w] && (s[w] = N, y = !0);
      }
    }
  } else {
    fd(e, t, a, s) && (y = !0);
    let x;
    for (const d in f)
      (!t || // for camelCase
      !Je(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((x = Tr(d)) === d || !Je(t, x))) && (g ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[x] !== void 0) && (a[d] = ac(
        g,
        f,
        d,
        void 0,
        e,
        !0
      )) : delete a[d]);
    if (s !== f)
      for (const d in s)
        (!t || !Je(t, d)) && (delete s[d], y = !0);
  }
  y && Xn(e.attrs, "set", "");
}
function fd(e, t, n, r) {
  const [a, s] = e.propsOptions;
  let u = !1, f;
  if (t)
    for (let g in t) {
      if (Fi(g))
        continue;
      const y = t[g];
      let x;
      a && Je(a, x = Qt(g)) ? !s || !s.includes(x) ? n[x] = y : (f || (f = {}))[x] = y : $o(e.emitsOptions, g) || (!(g in r) || y !== r[g]) && (r[g] = y, u = !0);
    }
  if (s) {
    const g = /* @__PURE__ */ Ze(n), y = f || it;
    for (let x = 0; x < s.length; x++) {
      const d = s[x];
      n[d] = ac(
        a,
        g,
        d,
        y[d],
        e,
        !Je(y, d)
      );
    }
  }
  return u;
}
function ac(e, t, n, r, a, s) {
  const u = e[n];
  if (u != null) {
    const f = Je(u, "default");
    if (f && r === void 0) {
      const g = u.default;
      if (u.type !== Function && !u.skipFactory && ze(g)) {
        const { propsDefaults: y } = a;
        if (n in y)
          r = y[n];
        else {
          const x = sa(a);
          r = y[n] = g.call(
            null,
            t
          ), x();
        }
      } else
        r = g;
      a.ce && a.ce._setProp(n, r);
    }
    u[
      0
      /* shouldCast */
    ] && (s && !f ? r = !1 : u[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Tr(n)) && (r = !0));
  }
  return r;
}
const Q0 = /* @__PURE__ */ new WeakMap();
function dd(e, t, n = !1) {
  const r = n ? Q0 : t.propsCache, a = r.get(e);
  if (a)
    return a;
  const s = e.props, u = {}, f = [];
  let g = !1;
  if (!ze(e)) {
    const x = (d) => {
      g = !0;
      const [w, N] = dd(d, t, !0);
      Bt(u, w), N && f.push(...N);
    };
    !n && t.mixins.length && t.mixins.forEach(x), e.extends && x(e.extends), e.mixins && e.mixins.forEach(x);
  }
  if (!s && !g)
    return nt(e) && r.set(e, ii), ii;
  if (Re(s))
    for (let x = 0; x < s.length; x++) {
      const d = Qt(s[x]);
      hu(d) && (u[d] = it);
    }
  else if (s)
    for (const x in s) {
      const d = Qt(x);
      if (hu(d)) {
        const w = s[x], N = u[d] = Re(w) || ze(w) ? { type: w } : Bt({}, w), A = N.type;
        let D = !1, O = !0;
        if (Re(A))
          for (let H = 0; H < A.length; ++H) {
            const R = A[H], E = ze(R) && R.name;
            if (E === "Boolean") {
              D = !0;
              break;
            } else E === "String" && (O = !1);
          }
        else
          D = ze(A) && A.name === "Boolean";
        N[
          0
          /* shouldCast */
        ] = D, N[
          1
          /* shouldCastTrue */
        ] = O, (D || Je(N, "default")) && f.push(d);
      }
    }
  const y = [u, f];
  return nt(e) && r.set(e, y), y;
}
function hu(e) {
  return e[0] !== "$" && !Fi(e);
}
const Rc = (e) => e === "_" || e === "_ctx" || e === "$stable", Oc = (e) => Re(e) ? e.map(Ln) : [Ln(e)], e1 = (e, t, n) => {
  if (t._n)
    return t;
  const r = p0((...a) => Oc(t(...a)), n);
  return r._c = !1, r;
}, hd = (e, t, n) => {
  const r = e._ctx;
  for (const a in e) {
    if (Rc(a)) continue;
    const s = e[a];
    if (ze(s))
      t[a] = e1(a, s, r);
    else if (s != null) {
      const u = Oc(s);
      t[a] = () => u;
    }
  }
}, gd = (e, t) => {
  const n = Oc(t);
  e.slots.default = () => n;
}, pd = (e, t, n) => {
  for (const r in t)
    (n || !Rc(r)) && (e[r] = t[r]);
}, t1 = (e, t, n) => {
  const r = e.slots = ld();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (pd(r, t, n), n && Mf(r, "_", a, !0)) : hd(t, r);
  } else t && gd(e, t);
}, n1 = (e, t, n) => {
  const { vnode: r, slots: a } = e;
  let s = !0, u = it;
  if (r.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? s = !1 : pd(a, t, n) : (s = !t.$stable, hd(t, a)), u = t;
  } else t && (gd(e, t), u = { default: 1 });
  if (s)
    for (const f in a)
      !Rc(f) && u[f] == null && delete a[f];
}, rn = s1;
function r1(e) {
  return i1(e);
}
function i1(e, t) {
  const n = Fo();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: a,
    patchProp: s,
    createElement: u,
    createText: f,
    createComment: g,
    setText: y,
    setElementText: x,
    parentNode: d,
    nextSibling: w,
    setScopeId: N = Vn,
    insertStaticContent: A
  } = e, D = (T, V, q, oe = null, I = null, j = null, W = void 0, te = null, Z = !!V.dynamicChildren) => {
    if (T === V)
      return;
    T && !Si(T, V) && (oe = Gt(T), Oe(T, I, j, !0), T = null), V.patchFlag === -2 && (Z = !1, V.dynamicChildren = null);
    const { type: Y, ref: pe, shapeFlag: ue } = V;
    switch (Y) {
      case Bo:
        O(T, V, q, oe);
        break;
      case fr:
        H(T, V, q, oe);
        break;
      case eo:
        T == null && R(V, q, oe, W);
        break;
      case tt:
        ge(
          T,
          V,
          q,
          oe,
          I,
          j,
          W,
          te,
          Z
        );
        break;
      default:
        ue & 1 ? $(
          T,
          V,
          q,
          oe,
          I,
          j,
          W,
          te,
          Z
        ) : ue & 6 ? xe(
          T,
          V,
          q,
          oe,
          I,
          j,
          W,
          te,
          Z
        ) : (ue & 64 || ue & 128) && Y.process(
          T,
          V,
          q,
          oe,
          I,
          j,
          W,
          te,
          Z,
          m
        );
    }
    pe != null && I ? ji(pe, T && T.ref, j, V || T, !V) : pe == null && T && T.ref != null && ji(T.ref, null, j, T, !0);
  }, O = (T, V, q, oe) => {
    if (T == null)
      r(
        V.el = f(V.children),
        q,
        oe
      );
    else {
      const I = V.el = T.el;
      V.children !== T.children && y(I, V.children);
    }
  }, H = (T, V, q, oe) => {
    T == null ? r(
      V.el = g(V.children || ""),
      q,
      oe
    ) : V.el = T.el;
  }, R = (T, V, q, oe) => {
    [T.el, T.anchor] = A(
      T.children,
      V,
      q,
      oe,
      T.el,
      T.anchor
    );
  }, E = ({ el: T, anchor: V }, q, oe) => {
    let I;
    for (; T && T !== V; )
      I = w(T), r(T, q, oe), T = I;
    r(V, q, oe);
  }, C = ({ el: T, anchor: V }) => {
    let q;
    for (; T && T !== V; )
      q = w(T), a(T), T = q;
    a(V);
  }, $ = (T, V, q, oe, I, j, W, te, Z) => {
    if (V.type === "svg" ? W = "svg" : V.type === "math" && (W = "mathml"), T == null)
      ie(
        V,
        q,
        oe,
        I,
        j,
        W,
        te,
        Z
      );
    else {
      const Y = T.el && T.el._isVueCE ? T.el : null;
      try {
        Y && Y._beginPatch(), we(
          T,
          V,
          I,
          j,
          W,
          te,
          Z
        );
      } finally {
        Y && Y._endPatch();
      }
    }
  }, ie = (T, V, q, oe, I, j, W, te) => {
    let Z, Y;
    const { props: pe, shapeFlag: ue, transition: de, dirs: Me } = T;
    if (Z = T.el = u(
      T.type,
      j,
      pe && pe.is,
      pe
    ), ue & 8 ? x(Z, T.children) : ue & 16 && re(
      T.children,
      Z,
      null,
      oe,
      I,
      Ts(T, j),
      W,
      te
    ), Me && yr(T, null, oe, "created"), ae(Z, T, T.scopeId, W, oe), pe) {
      for (const Ie in pe)
        Ie !== "value" && !Fi(Ie) && s(Z, Ie, null, pe[Ie], j, oe);
      "value" in pe && s(Z, "value", null, pe.value, j), (Y = pe.onVnodeBeforeMount) && Pn(Y, oe, T);
    }
    Me && yr(T, null, oe, "beforeMount");
    const De = a1(I, de);
    De && de.beforeEnter(Z), r(Z, V, q), ((Y = pe && pe.onVnodeMounted) || De || Me) && rn(() => {
      try {
        Y && Pn(Y, oe, T), De && de.enter(Z), Me && yr(T, null, oe, "mounted");
      } finally {
      }
    }, I);
  }, ae = (T, V, q, oe, I) => {
    if (q && N(T, q), oe)
      for (let j = 0; j < oe.length; j++)
        N(T, oe[j]);
    if (I) {
      let j = I.subTree;
      if (V === j || vd(j.type) && (j.ssContent === V || j.ssFallback === V)) {
        const W = I.vnode;
        ae(
          T,
          W,
          W.scopeId,
          W.slotScopeIds,
          I.parent
        );
      }
    }
  }, re = (T, V, q, oe, I, j, W, te, Z = 0) => {
    for (let Y = Z; Y < T.length; Y++) {
      const pe = T[Y] = te ? qn(T[Y]) : Ln(T[Y]);
      D(
        null,
        pe,
        V,
        q,
        oe,
        I,
        j,
        W,
        te
      );
    }
  }, we = (T, V, q, oe, I, j, W) => {
    const te = V.el = T.el;
    let { patchFlag: Z, dynamicChildren: Y, dirs: pe } = V;
    Z |= T.patchFlag & 16;
    const ue = T.props || it, de = V.props || it;
    let Me;
    if (q && br(q, !1), (Me = de.onVnodeBeforeUpdate) && Pn(Me, q, V, T), pe && yr(V, T, q, "beforeUpdate"), q && br(q, !0), (ue.innerHTML && de.innerHTML == null || ue.textContent && de.textContent == null) && x(te, ""), Y ? k(
      T.dynamicChildren,
      Y,
      te,
      q,
      oe,
      Ts(V, I),
      j
    ) : W || G(
      T,
      V,
      te,
      null,
      q,
      oe,
      Ts(V, I),
      j,
      !1
    ), Z > 0) {
      if (Z & 16)
        ce(te, ue, de, q, I);
      else if (Z & 2 && ue.class !== de.class && s(te, "class", null, de.class, I), Z & 4 && s(te, "style", ue.style, de.style, I), Z & 8) {
        const De = V.dynamicProps;
        for (let Ie = 0; Ie < De.length; Ie++) {
          const Le = De[Ie], Fe = ue[Le], at = de[Le];
          (at !== Fe || Le === "value") && s(te, Le, Fe, at, I, q);
        }
      }
      Z & 1 && T.children !== V.children && x(te, V.children);
    } else !W && Y == null && ce(te, ue, de, q, I);
    ((Me = de.onVnodeUpdated) || pe) && rn(() => {
      Me && Pn(Me, q, V, T), pe && yr(V, T, q, "updated");
    }, oe);
  }, k = (T, V, q, oe, I, j, W) => {
    for (let te = 0; te < V.length; te++) {
      const Z = T[te], Y = V[te], pe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Z.type === tt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Si(Z, Y) || // - In the case of a component, it could contain anything.
        Z.shapeFlag & 198) ? d(Z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          q
        )
      );
      D(
        Z,
        Y,
        pe,
        null,
        oe,
        I,
        j,
        W,
        !0
      );
    }
  }, ce = (T, V, q, oe, I) => {
    if (V !== q) {
      if (V !== it)
        for (const j in V)
          !Fi(j) && !(j in q) && s(
            T,
            j,
            V[j],
            null,
            I,
            oe
          );
      for (const j in q) {
        if (Fi(j)) continue;
        const W = q[j], te = V[j];
        W !== te && j !== "value" && s(T, j, te, W, I, oe);
      }
      "value" in q && s(T, "value", V.value, q.value, I);
    }
  }, ge = (T, V, q, oe, I, j, W, te, Z) => {
    const Y = V.el = T ? T.el : f(""), pe = V.anchor = T ? T.anchor : f("");
    let { patchFlag: ue, dynamicChildren: de, slotScopeIds: Me } = V;
    Me && (te = te ? te.concat(Me) : Me), T == null ? (r(Y, q, oe), r(pe, q, oe), re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      V.children || [],
      q,
      pe,
      I,
      j,
      W,
      te,
      Z
    )) : ue > 0 && ue & 64 && de && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren && T.dynamicChildren.length === de.length ? (k(
      T.dynamicChildren,
      de,
      q,
      I,
      j,
      W,
      te
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (V.key != null || I && V === I.subTree) && md(
      T,
      V,
      !0
      /* shallow */
    )) : G(
      T,
      V,
      q,
      pe,
      I,
      j,
      W,
      te,
      Z
    );
  }, xe = (T, V, q, oe, I, j, W, te, Z) => {
    V.slotScopeIds = te, T == null ? V.shapeFlag & 512 ? I.ctx.activate(
      V,
      q,
      oe,
      W,
      Z
    ) : ve(
      V,
      q,
      oe,
      I,
      j,
      W,
      Z
    ) : J(T, V, Z);
  }, ve = (T, V, q, oe, I, j, W) => {
    const te = T.component = p1(
      T,
      oe,
      I
    );
    if (Jf(T) && (te.ctx.renderer = m), y1(te, !1, W), te.asyncDep) {
      if (I && I.registerDep(te, le, W), !T.el) {
        const Z = te.subTree = Ct(fr);
        H(null, Z, V, q), T.placeholder = Z.el;
      }
    } else
      le(
        te,
        T,
        V,
        q,
        I,
        j,
        W
      );
  }, J = (T, V, q) => {
    const oe = V.component = T.component;
    if (q0(T, V, q))
      if (oe.asyncDep && !oe.asyncResolved) {
        _e(oe, V, q);
        return;
      } else
        oe.next = V, oe.update();
    else
      V.el = T.el, oe.vnode = V;
  }, le = (T, V, q, oe, I, j, W) => {
    const te = () => {
      if (T.isMounted) {
        let { next: ue, bu: de, u: Me, parent: De, vnode: Ie } = T;
        {
          const vt = yd(T);
          if (vt) {
            ue && (ue.el = Ie.el, _e(T, ue, W)), vt.asyncDep.then(() => {
              rn(() => {
                T.isUnmounted || Y();
              }, I);
            });
            return;
          }
        }
        let Le = ue, Fe;
        br(T, !1), ue ? (ue.el = Ie.el, _e(T, ue, W)) : ue = Ie, de && Ps(de), (Fe = ue.props && ue.props.onVnodeBeforeUpdate) && Pn(Fe, De, ue, Ie), br(T, !0);
        const at = fu(T), Pe = T.subTree;
        T.subTree = at, D(
          Pe,
          at,
          // parent may have changed if it's in a teleport
          d(Pe.el),
          // anchor may have changed if it's in a fragment
          Gt(Pe),
          T,
          I,
          j
        ), ue.el = at.el, Le === null && X0(T, at.el), Me && rn(Me, I), (Fe = ue.props && ue.props.onVnodeUpdated) && rn(
          () => Pn(Fe, De, ue, Ie),
          I
        );
      } else {
        let ue;
        const { el: de, props: Me } = V, { bm: De, m: Ie, parent: Le, root: Fe, type: at } = T, Pe = $i(V);
        br(T, !1), De && Ps(De), !Pe && (ue = Me && Me.onVnodeBeforeMount) && Pn(ue, Le, V), br(T, !0);
        {
          Fe.ce && Fe.ce._hasShadowRoot() && Fe.ce._injectChildStyle(
            at,
            T.parent ? T.parent.type : void 0
          );
          const vt = T.subTree = fu(T);
          D(
            null,
            vt,
            q,
            oe,
            T,
            I,
            j
          ), V.el = vt.el;
        }
        if (Ie && rn(Ie, I), !Pe && (ue = Me && Me.onVnodeMounted)) {
          const vt = V;
          rn(
            () => Pn(ue, Le, vt),
            I
          );
        }
        (V.shapeFlag & 256 || Le && $i(Le.vnode) && Le.vnode.shapeFlag & 256) && T.a && rn(T.a, I), T.isMounted = !0, V = q = oe = null;
      }
    };
    T.scope.on();
    const Z = T.effect = new Af(te);
    T.scope.off();
    const Y = T.update = Z.run.bind(Z), pe = T.job = Z.runIfDirty.bind(Z);
    pe.i = T, pe.id = T.uid, Z.scheduler = () => Dc(pe), br(T, !0), Y();
  }, _e = (T, V, q) => {
    V.component = T;
    const oe = T.vnode.props;
    T.vnode = V, T.next = null, J0(T, V.props, oe, q), n1(T, V.children, q), Jn(), ru(T), Qn();
  }, G = (T, V, q, oe, I, j, W, te, Z = !1) => {
    const Y = T && T.children, pe = T ? T.shapeFlag : 0, ue = V.children, { patchFlag: de, shapeFlag: Me } = V;
    if (de > 0) {
      if (de & 128) {
        ke(
          Y,
          ue,
          q,
          oe,
          I,
          j,
          W,
          te,
          Z
        );
        return;
      } else if (de & 256) {
        fe(
          Y,
          ue,
          q,
          oe,
          I,
          j,
          W,
          te,
          Z
        );
        return;
      }
    }
    Me & 8 ? (pe & 16 && bt(Y, I, j), ue !== Y && x(q, ue)) : pe & 16 ? Me & 16 ? ke(
      Y,
      ue,
      q,
      oe,
      I,
      j,
      W,
      te,
      Z
    ) : bt(Y, I, j, !0) : (pe & 8 && x(q, ""), Me & 16 && re(
      ue,
      q,
      oe,
      I,
      j,
      W,
      te,
      Z
    ));
  }, fe = (T, V, q, oe, I, j, W, te, Z) => {
    T = T || ii, V = V || ii;
    const Y = T.length, pe = V.length, ue = Math.min(Y, pe);
    let de;
    for (de = 0; de < ue; de++) {
      const Me = V[de] = Z ? qn(V[de]) : Ln(V[de]);
      D(
        T[de],
        Me,
        q,
        null,
        I,
        j,
        W,
        te,
        Z
      );
    }
    Y > pe ? bt(
      T,
      I,
      j,
      !0,
      !1,
      ue
    ) : re(
      V,
      q,
      oe,
      I,
      j,
      W,
      te,
      Z,
      ue
    );
  }, ke = (T, V, q, oe, I, j, W, te, Z) => {
    let Y = 0;
    const pe = V.length;
    let ue = T.length - 1, de = pe - 1;
    for (; Y <= ue && Y <= de; ) {
      const Me = T[Y], De = V[Y] = Z ? qn(V[Y]) : Ln(V[Y]);
      if (Si(Me, De))
        D(
          Me,
          De,
          q,
          null,
          I,
          j,
          W,
          te,
          Z
        );
      else
        break;
      Y++;
    }
    for (; Y <= ue && Y <= de; ) {
      const Me = T[ue], De = V[de] = Z ? qn(V[de]) : Ln(V[de]);
      if (Si(Me, De))
        D(
          Me,
          De,
          q,
          null,
          I,
          j,
          W,
          te,
          Z
        );
      else
        break;
      ue--, de--;
    }
    if (Y > ue) {
      if (Y <= de) {
        const Me = de + 1, De = Me < pe ? V[Me].el : oe;
        for (; Y <= de; )
          D(
            null,
            V[Y] = Z ? qn(V[Y]) : Ln(V[Y]),
            q,
            De,
            I,
            j,
            W,
            te,
            Z
          ), Y++;
      }
    } else if (Y > de)
      for (; Y <= ue; )
        Oe(T[Y], I, j, !0), Y++;
    else {
      const Me = Y, De = Y, Ie = /* @__PURE__ */ new Map();
      for (Y = De; Y <= de; Y++) {
        const Kt = V[Y] = Z ? qn(V[Y]) : Ln(V[Y]);
        Kt.key != null && Ie.set(Kt.key, Y);
      }
      let Le, Fe = 0;
      const at = de - De + 1;
      let Pe = !1, vt = 0;
      const kn = new Array(at);
      for (Y = 0; Y < at; Y++) kn[Y] = 0;
      for (Y = Me; Y <= ue; Y++) {
        const Kt = T[Y];
        if (Fe >= at) {
          Oe(Kt, I, j, !0);
          continue;
        }
        let Nt;
        if (Kt.key != null)
          Nt = Ie.get(Kt.key);
        else
          for (Le = De; Le <= de; Le++)
            if (kn[Le - De] === 0 && Si(Kt, V[Le])) {
              Nt = Le;
              break;
            }
        Nt === void 0 ? Oe(Kt, I, j, !0) : (kn[Nt - De] = Y + 1, Nt >= vt ? vt = Nt : Pe = !0, D(
          Kt,
          V[Nt],
          q,
          null,
          I,
          j,
          W,
          te,
          Z
        ), Fe++);
      }
      const _t = Pe ? o1(kn) : ii;
      for (Le = _t.length - 1, Y = at - 1; Y >= 0; Y--) {
        const Kt = De + Y, Nt = V[Kt], jn = V[Kt + 1], Lr = Kt + 1 < pe ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          jn.el || bd(jn)
        ) : oe;
        kn[Y] === 0 ? D(
          null,
          Nt,
          q,
          Lr,
          I,
          j,
          W,
          te,
          Z
        ) : Pe && (Le < 0 || Y !== _t[Le] ? Te(Nt, q, Lr, 2) : Le--);
      }
    }
  }, Te = (T, V, q, oe, I = null) => {
    const { el: j, type: W, transition: te, children: Z, shapeFlag: Y } = T;
    if (Y & 6) {
      Te(T.component.subTree, V, q, oe);
      return;
    }
    if (Y & 128) {
      T.suspense.move(V, q, oe);
      return;
    }
    if (Y & 64) {
      W.move(T, V, q, m);
      return;
    }
    if (W === tt) {
      r(j, V, q);
      for (let ue = 0; ue < Z.length; ue++)
        Te(Z[ue], V, q, oe);
      r(T.anchor, V, q);
      return;
    }
    if (W === eo) {
      E(T, V, q);
      return;
    }
    if (oe !== 2 && Y & 1 && te)
      if (oe === 0)
        te.beforeEnter(j), r(j, V, q), rn(() => te.enter(j), I);
      else {
        const { leave: ue, delayLeave: de, afterLeave: Me } = te, De = () => {
          T.ctx.isUnmounted ? a(j) : r(j, V, q);
        }, Ie = () => {
          j._isLeaving && j[w0](
            !0
            /* cancelled */
          ), ue(j, () => {
            De(), Me && Me();
          });
        };
        de ? de(j, De, Ie) : Ie();
      }
    else
      r(j, V, q);
  }, Oe = (T, V, q, oe = !1, I = !1) => {
    const {
      type: j,
      props: W,
      ref: te,
      children: Z,
      dynamicChildren: Y,
      shapeFlag: pe,
      patchFlag: ue,
      dirs: de,
      cacheIndex: Me,
      memo: De
    } = T;
    if (ue === -2 && (I = !1), te != null && (Jn(), ji(te, null, q, T, !0), Qn()), Me != null && (V.renderCache[Me] = void 0), pe & 256) {
      V.ctx.deactivate(T);
      return;
    }
    const Ie = pe & 1 && de, Le = !$i(T);
    let Fe;
    if (Le && (Fe = W && W.onVnodeBeforeUnmount) && Pn(Fe, V, T), pe & 6)
      Ut(T.component, q, oe);
    else {
      if (pe & 128) {
        T.suspense.unmount(q, oe);
        return;
      }
      Ie && yr(T, null, V, "beforeUnmount"), pe & 64 ? T.type.remove(
        T,
        V,
        q,
        m,
        oe
      ) : Y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (j !== tt || ue > 0 && ue & 64) ? bt(
        Y,
        V,
        q,
        !1,
        !0
      ) : (j === tt && ue & 384 || !I && pe & 16) && bt(Z, V, q), oe && Ye(T);
    }
    const at = De != null && Me == null;
    (Le && (Fe = W && W.onVnodeUnmounted) || Ie || at) && rn(() => {
      Fe && Pn(Fe, V, T), Ie && yr(T, null, V, "unmounted"), at && (T.el = null);
    }, q);
  }, Ye = (T) => {
    const { type: V, el: q, anchor: oe, transition: I } = T;
    if (V === tt) {
      ht(q, oe);
      return;
    }
    if (V === eo) {
      C(T);
      return;
    }
    const j = () => {
      a(q), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (T.shapeFlag & 1 && I && !I.persisted) {
      const { leave: W, delayLeave: te } = I, Z = () => W(q, j);
      te ? te(T.el, j, Z) : Z();
    } else
      j();
  }, ht = (T, V) => {
    let q;
    for (; T !== V; )
      q = w(T), a(T), T = q;
    a(V);
  }, Ut = (T, V, q) => {
    const { bum: oe, scope: I, job: j, subTree: W, um: te, m: Z, a: Y } = T;
    gu(Z), gu(Y), oe && Ps(oe), I.stop(), j && (j.flags |= 8, Oe(W, T, V, q)), te && rn(te, V), rn(() => {
      T.isUnmounted = !0;
    }, V);
  }, bt = (T, V, q, oe = !1, I = !1, j = 0) => {
    for (let W = j; W < T.length; W++)
      Oe(T[W], V, q, oe, I);
  }, Gt = (T) => {
    if (T.shapeFlag & 6)
      return Gt(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const V = w(T.anchor || T.el), q = V && V[_0];
    return q ? w(q) : V;
  };
  let sn = !1;
  const hn = (T, V, q) => {
    let oe;
    T == null ? V._vnode && (Oe(V._vnode, null, null, !0), oe = V._vnode.component) : D(
      V._vnode || null,
      T,
      V,
      null,
      null,
      null,
      q
    ), V._vnode = T, sn || (sn = !0, ru(oe), Kf(), sn = !1);
  }, m = {
    p: D,
    um: Oe,
    m: Te,
    r: Ye,
    mt: ve,
    mc: re,
    pc: G,
    pbc: k,
    n: Gt,
    o: e
  };
  return {
    render: hn,
    hydrate: void 0,
    createApp: B0(hn)
  };
}
function Ts({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function br({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function a1(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function md(e, t, n = !1) {
  const r = e.children, a = t.children;
  if (Re(r) && Re(a))
    for (let s = 0; s < r.length; s++) {
      const u = r[s];
      let f = a[s];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[s] = qn(a[s]), f.el = u.el), !n && f.patchFlag !== -2 && md(u, f)), f.type === Bo && (f.patchFlag === -1 && (f = a[s] = qn(f)), f.el = u.el), f.type === fr && !f.el && (f.el = u.el);
    }
}
function o1(e) {
  const t = e.slice(), n = [0];
  let r, a, s, u, f;
  const g = e.length;
  for (r = 0; r < g; r++) {
    const y = e[r];
    if (y !== 0) {
      if (a = n[n.length - 1], e[a] < y) {
        t[r] = a, n.push(r);
        continue;
      }
      for (s = 0, u = n.length - 1; s < u; )
        f = s + u >> 1, e[n[f]] < y ? s = f + 1 : u = f;
      y < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, u = n[s - 1]; s-- > 0; )
    n[s] = u, u = t[u];
  return n;
}
function yd(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : yd(t);
}
function gu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function bd(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? bd(t.subTree) : null;
}
const vd = (e) => e.__isSuspense;
function s1(e, t) {
  t && t.pendingBranch ? Re(e) ? t.effects.push(...e) : t.effects.push(e) : g0(e);
}
const tt = /* @__PURE__ */ Symbol.for("v-fgt"), Bo = /* @__PURE__ */ Symbol.for("v-txt"), fr = /* @__PURE__ */ Symbol.for("v-cmt"), eo = /* @__PURE__ */ Symbol.for("v-stc"), Ui = [];
let dn = null;
function Ae(e = !1) {
  Ui.push(dn = e ? null : []);
}
function c1() {
  Ui.pop(), dn = Ui[Ui.length - 1] || null;
}
let ea = 1;
function pu(e, t = !1) {
  ea += e, e < 0 && dn && t && (dn.hasOnce = !0);
}
function _d(e) {
  return e.dynamicChildren = ea > 0 ? dn || ii : null, c1(), ea > 0 && dn && dn.push(e), e;
}
function Ee(e, t, n, r, a, s) {
  return _d(
    se(
      e,
      t,
      n,
      r,
      a,
      s,
      !0
    )
  );
}
function gi(e, t, n, r, a) {
  return _d(
    Ct(
      e,
      t,
      n,
      r,
      a,
      !0
    )
  );
}
function xd(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Si(e, t) {
  return e.type === t.type && e.key === t.key;
}
const wd = ({ key: e }) => e ?? null, to = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? wt(e) || /* @__PURE__ */ $t(e) || ze(e) ? { i: fn, r: e, k: t, f: !!n } : e : null);
function se(e, t = null, n = null, r = 0, a = null, s = e === tt ? 0 : 1, u = !1, f = !1) {
  const g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wd(t),
    ref: t && to(t),
    scopeId: Yf,
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
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: fn
  };
  return f ? (Fc(g, n), s & 128 && e.normalize(g)) : n && (g.shapeFlag |= wt(n) ? 8 : 16), ea > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  dn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (g.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  g.patchFlag !== 32 && dn.push(g), g;
}
const Ct = l1;
function l1(e, t = null, n = null, r = 0, a = null, s = !1) {
  if ((!e || e === nd) && (e = fr), xd(e)) {
    const f = fi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Fc(f, n), ea > 0 && !s && dn && (f.shapeFlag & 6 ? dn[dn.indexOf(e)] = f : dn.push(f)), f.patchFlag = -2, f;
  }
  if (w1(e) && (e = e.__vccOpts), t) {
    t = u1(t);
    let { class: f, style: g } = t;
    f && !wt(f) && (t.class = xt(f)), nt(g) && (/* @__PURE__ */ Ac(g) && !Re(g) && (g = Bt({}, g)), t.style = qt(g));
  }
  const u = wt(e) ? 1 : vd(e) ? 128 : x0(e) ? 64 : nt(e) ? 4 : ze(e) ? 2 : 0;
  return se(
    e,
    t,
    n,
    r,
    a,
    u,
    s,
    !0
  );
}
function u1(e) {
  return e ? /* @__PURE__ */ Ac(e) || ud(e) ? Bt({}, e) : e : null;
}
function fi(e, t, n = !1, r = !1) {
  const { props: a, ref: s, patchFlag: u, children: f, transition: g } = e, y = t ? Sd(a || {}, t) : a, x = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: y,
    key: y && wd(y),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? Re(s) ? s.concat(to(t)) : [s, to(t)] : to(t)
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
    patchFlag: t && e.type !== tt ? u === -1 ? 16 : u | 16 : u,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: g,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && fi(e.ssContent),
    ssFallback: e.ssFallback && fi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return g && r && Tc(
    x,
    g.clone(x)
  ), x;
}
function f1(e = " ", t = 0) {
  return Ct(Bo, null, e, t);
}
function d1(e, t) {
  const n = Ct(eo, null, e);
  return n.staticCount = t, n;
}
function on(e = "", t = !1) {
  return t ? (Ae(), gi(fr, null, e)) : Ct(fr, null, e);
}
function Ln(e) {
  return e == null || typeof e == "boolean" ? Ct(fr) : Re(e) ? Ct(
    tt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : xd(e) ? qn(e) : Ct(Bo, null, String(e));
}
function qn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : fi(e);
}
function Fc(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Re(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Fc(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !ud(t) ? t._ctx = fn : a === 3 && fn && (fn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ze(t) ? (t = { default: t, _ctx: fn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [f1(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Sd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const a in r)
      if (a === "class")
        t.class !== r.class && (t.class = xt([t.class, r.class]));
      else if (a === "style")
        t.style = qt([t.style, r.style]);
      else if (To(a)) {
        const s = t[a], u = r[a];
        u && s !== u && !(Re(s) && s.includes(u)) ? t[a] = s ? [].concat(s, u) : u : u == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Lo(a) && (t[a] = u);
      } else a !== "" && (t[a] = r[a]);
  }
  return t;
}
function Pn(e, t, n, r = null) {
  zn(e, t, 7, [
    n,
    r
  ]);
}
const h1 = ad();
let g1 = 0;
function p1(e, t, n) {
  const r = e.type, a = (t ? t.appContext : e.appContext) || h1, s = {
    uid: g1++,
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
    scope: new Fp(
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
    propsOptions: dd(r, a),
    emitsOptions: od(r, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: it,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: it,
    data: it,
    props: it,
    attrs: it,
    slots: it,
    refs: it,
    setupState: it,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = G0.bind(null, s), e.ce && e.ce(s), s;
}
let jt = null;
const m1 = () => jt || fn;
let mo, oc;
{
  const e = Fo(), t = (n, r) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(r), (s) => {
      a.length > 1 ? a.forEach((u) => u(s)) : a[0](s);
    };
  };
  mo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => jt = n
  ), oc = t(
    "__VUE_SSR_SETTERS__",
    (n) => ta = n
  );
}
const sa = (e) => {
  const t = jt;
  return mo(e), e.scope.on(), () => {
    e.scope.off(), mo(t);
  };
}, mu = () => {
  jt && jt.scope.off(), mo(null);
};
function Nd(e) {
  return e.vnode.shapeFlag & 4;
}
let ta = !1;
function y1(e, t = !1, n = !1) {
  t && oc(t);
  const { props: r, children: a } = e.vnode, s = Nd(e);
  Z0(e, r, s, t), t1(e, a, n || t);
  const u = s ? b1(e, t) : void 0;
  return t && oc(!1), u;
}
function b1(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, O0);
  const { setup: r } = n;
  if (r) {
    Jn();
    const a = e.setupContext = r.length > 1 ? _1(e) : null, s = sa(e), u = oa(
      r,
      e,
      0,
      [
        e.props,
        a
      ]
    ), f = wf(u);
    if (Qn(), s(), (f || e.sp) && !$i(e) && Zf(e), f) {
      if (u.then(mu, mu), t)
        return u.then((g) => {
          yu(e, g);
        }).catch((g) => {
          zo(g, e, 0);
        });
      e.asyncDep = u;
    } else
      yu(e, u);
  } else
    Md(e);
}
function yu(e, t, n) {
  ze(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : nt(t) && (e.setupState = Bf(t)), Md(e);
}
function Md(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Vn);
  {
    const a = sa(e);
    Jn();
    try {
      F0(e);
    } finally {
      Qn(), a();
    }
  }
}
const v1 = {
  get(e, t) {
    return zt(e, "get", ""), e[t];
  }
};
function _1(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, v1),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Uo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Bf(i0(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Bi)
        return Bi[n](e);
    },
    has(t, n) {
      return n in t || n in Bi;
    }
  })) : e.proxy;
}
function x1(e, t = !0) {
  return ze(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function w1(e) {
  return ze(e) && "__vccOpts" in e;
}
const Pr = (e, t) => /* @__PURE__ */ l0(e, t, ta), S1 = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let sc;
const bu = typeof window < "u" && window.trustedTypes;
if (bu)
  try {
    sc = /* @__PURE__ */ bu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const kd = sc ? (e) => sc.createHTML(e) : (e) => e, N1 = "http://www.w3.org/2000/svg", M1 = "http://www.w3.org/1998/Math/MathML", Yn = typeof document < "u" ? document : null, vu = Yn && /* @__PURE__ */ Yn.createElement("template"), k1 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const a = t === "svg" ? Yn.createElementNS(N1, e) : t === "mathml" ? Yn.createElementNS(M1, e) : n ? Yn.createElement(e, { is: n }) : Yn.createElement(e);
    return e === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
  },
  createText: (e) => Yn.createTextNode(e),
  createComment: (e) => Yn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Yn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, a, s) {
    const u = n ? n.previousSibling : t.lastChild;
    if (a && (a === s || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === s || !(a = a.nextSibling)); )
        ;
    else {
      vu.innerHTML = kd(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const f = vu.content;
      if (r === "svg" || r === "mathml") {
        const g = f.firstChild;
        for (; g.firstChild; )
          f.appendChild(g.firstChild);
        f.removeChild(g);
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
}, P1 = /* @__PURE__ */ Symbol("_vtc");
function C1(e, t, n) {
  const r = e[P1];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const yo = /* @__PURE__ */ Symbol("_vod"), Pd = /* @__PURE__ */ Symbol("_vsh"), Vc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[yo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ni(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Ni(e, !0), r.enter(e)) : r.leave(e, () => {
      Ni(e, !1);
    }) : Ni(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ni(e, t);
  }
};
function Ni(e, t) {
  e.style.display = t ? e[yo] : "none", e[Pd] = !t;
}
const A1 = /* @__PURE__ */ Symbol(""), I1 = /(?:^|;)\s*display\s*:/;
function D1(e, t, n) {
  const r = e.style, a = wt(n);
  let s = !1;
  if (n && !a) {
    if (t)
      if (wt(t))
        for (const u of t.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && no(r, f, "");
        }
      else
        for (const u in t)
          n[u] == null && no(r, u, "");
    for (const u in n)
      u === "display" && (s = !0), no(r, u, n[u]);
  } else if (a) {
    if (t !== n) {
      const u = r[A1];
      u && (n += ";" + u), r.cssText = n, s = I1.test(n);
    }
  } else t && e.removeAttribute("style");
  yo in e && (e[yo] = s ? r.display : "", e[Pd] && (r.display = "none"));
}
const _u = /\s*!important$/;
function no(e, t, n) {
  if (Re(n))
    n.forEach((r) => no(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = E1(e, t);
    _u.test(n) ? e.setProperty(
      Tr(r),
      n.replace(_u, ""),
      "important"
    ) : e[r] = n;
  }
}
const xu = ["Webkit", "Moz", "ms"], Ls = {};
function E1(e, t) {
  const n = Ls[t];
  if (n)
    return n;
  let r = Qt(t);
  if (r !== "filter" && r in e)
    return Ls[t] = r;
  r = Oo(r);
  for (let a = 0; a < xu.length; a++) {
    const s = xu[a] + r;
    if (s in e)
      return Ls[t] = s;
  }
  return t;
}
const wu = "http://www.w3.org/1999/xlink";
function Su(e, t, n, r, a, s = Rp(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(wu, t.slice(6, t.length)) : e.setAttributeNS(wu, t, n) : n == null || s && !kf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Hn(n) ? String(n) : n
  );
}
function Nu(e, t, n, r, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? kd(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const f = s === "OPTION" ? e.getAttribute("value") || "" : e.value, g = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (f !== g || !("_value" in e)) && (e.value = g), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = kf(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  u && e.removeAttribute(a || t);
}
function T1(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function L1(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Mu = /* @__PURE__ */ Symbol("_vei");
function R1(e, t, n, r, a = null) {
  const s = e[Mu] || (e[Mu] = {}), u = s[t];
  if (r && u)
    u.value = r;
  else {
    const [f, g] = O1(t);
    if (r) {
      const y = s[t] = H1(
        r,
        a
      );
      T1(e, f, y, g);
    } else u && (L1(e, f, u, g), s[t] = void 0);
  }
}
const ku = /(?:Once|Passive|Capture)$/;
function O1(e) {
  let t;
  if (ku.test(e)) {
    t = {};
    let r;
    for (; r = e.match(ku); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Tr(e.slice(2)), t];
}
let Rs = 0;
const F1 = /* @__PURE__ */ Promise.resolve(), V1 = () => Rs || (F1.then(() => Rs = 0), Rs = Date.now());
function H1(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    zn(
      z1(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = V1(), n;
}
function z1(e, t) {
  if (Re(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (a) => !a._stopped && r && r(a)
    );
  } else
    return t;
}
const Pu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, j1 = (e, t, n, r, a, s) => {
  const u = a === "svg";
  t === "class" ? C1(e, r, u) : t === "style" ? D1(e, n, r) : To(t) ? Lo(t) || R1(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : $1(e, t, r, u)) ? (Nu(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Su(e, t, r, u, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (B1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !wt(r))) ? Nu(e, Qt(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Su(e, t, r, u));
};
function $1(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Pu(t) && ze(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Pu(t) && wt(n) ? !1 : t in e;
}
function B1(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Qt(t);
  return Array.isArray(n) ? n.some((a) => Qt(a) === r) : Object.keys(n).some((a) => Qt(a) === r);
}
const U1 = ["ctrl", "shift", "alt", "meta"], G1 = {
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
  exact: (e, t) => U1.some((n) => e[`${n}Key`] && !t.includes(n))
}, Cd = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((a, ...s) => {
    for (let u = 0; u < t.length; u++) {
      const f = G1[t[u]];
      if (f && f(a, t)) return;
    }
    return e(a, ...s);
  }));
}, K1 = /* @__PURE__ */ Bt({ patchProp: j1 }, k1);
let Cu;
function W1() {
  return Cu || (Cu = r1(K1));
}
const Y1 = ((...e) => {
  const t = W1().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const a = X1(r);
    if (!a) return;
    const s = t._component;
    !ze(s) && !s.render && !s.template && (s.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, q1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, t;
});
function q1(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function X1(e) {
  return wt(e) ? document.querySelector(e) : e;
}
const pt = Math.PI / 180, Ad = Math.PI * 2, Z1 = 2048;
function rt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function dr(e, t, n) {
  return { x: e, y: t, z: n };
}
function bo(e, t) {
  return dr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ri(e, t) {
  return dr(e.x * t, e.y * t, e.z * t);
}
function ro(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Au(e, t) {
  return dr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Ei(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return dr(e.x / t, e.y / t, e.z / t);
}
function J1(e, t) {
  const n = Number(e || 0) * pt, r = Number(t || 0) * pt, a = Math.cos(r);
  return dr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function io(e, t, n = 0) {
  const r = J1(e, t);
  let a = dr(0, 1, 0);
  Math.abs(ro(r, a)) > 0.999 && (a = dr(0, 0, 1));
  let s = Ei(Au(a, r)), u = Ei(Au(r, s));
  const f = Number(n || 0) * pt, g = Math.cos(f), y = Math.sin(f), x = bo(ri(s, g), ri(u, y)), d = bo(ri(s, -y), ri(u, g));
  return s = Ei(x), u = Ei(d), { fwd: r, right: s, up: u };
}
function Q1(e, t) {
  const n = (Number(e || 0) - 0.5) * Ad, r = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(r);
  return dr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Iu(e, t, n = 1) {
  const r = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), s = Math.max(1, Number(n || 1)), u = Math.max(512, Z1), f = Math.min(1, u / Math.max(r, a));
  return {
    sourceWidth: r,
    sourceHeight: a,
    sourceDpr: s,
    renderScale: f,
    width: Math.max(1, Math.round(r * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function Du(e, t, n) {
  const r = e.createShader(t);
  if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(r) || "shader compile failed";
    throw e.deleteShader(r), new Error(a);
  }
  return r;
}
function Os(e, t, n) {
  const r = Du(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = Du(e, e.FRAGMENT_SHADER, n);
  } catch (u) {
    throw e.deleteShader(r), u;
  }
  const s = e.createProgram();
  if (e.attachShader(s, r), e.attachShader(s, a), e.linkProgram(s), e.deleteShader(r), e.deleteShader(a), !e.getProgramParameter(s, e.LINK_STATUS)) {
    const u = e.getProgramInfoLog(s) || "program link failed";
    throw e.deleteProgram(s), new Error(u);
  }
  return s;
}
const Fs = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, em = `#version 300 es
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
}`, tm = `#version 300 es
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
}`, nm = `#version 300 es
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
function Mi(e, t, n) {
  if (!e || e.mode === "unwrap") return null;
  const r = Number(e.mode === "cutout" ? e.hFovDeg || 90 : e.fovDeg || 100), a = Number(e.mode === "cutout" ? e.vFovDeg || 60 : 2 * Math.atan(Math.tan(rt(r, 1, 179) * pt * 0.5) * (n / Math.max(t, 1))) / pt);
  return {
    yawDeg: Number(e.yawDeg || 0),
    pitchDeg: Number(e.pitchDeg || 0),
    rollDeg: Number(e.mode === "cutout" && e.rollDeg || 0),
    hFovDeg: rt(r, 1, 179),
    vFovDeg: rt(a, 0.1, 179)
  };
}
function rm(e) {
  const t = io(
    Number(e.yawDeg || 0),
    Number(e.pitchDeg || 0),
    Number(e.rollDeg || 0)
  );
  return {
    right: t.right,
    up: t.up,
    fwd: t.fwd,
    tanX: Math.tan(rt(Number(e.hFovDeg), 0.1, 179) * 0.5 * pt),
    tanY: Math.tan(rt(Number(e.vFovDeg), 0.1, 179) * 0.5 * pt),
    crop: e.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: rt(Number(e.opacity ?? 1), 0, 1)
  };
}
function im(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, r = null, a = null, s = null, u = null, f = null, g = null, y = null, x = null, d = null, w = null, N = !1, A = Iu(1, 1, 1), D = null, O = null, H = null, R = null, E = null;
  const C = /* @__PURE__ */ new Map();
  let $ = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, ie = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  }, ae = {
    paint: !1,
    mask: !1
  };
  function re(I = null, j = null) {
    const W = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, W), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, I ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, j ?? n.CLAMP_TO_EDGE), W;
  }
  function we() {
    if (N) return !0;
    try {
      return n = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (r = Os(n, Fs, em), a = Os(n, Fs, tm), s = Os(n, Fs, nm), D = {
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
      }, O = {
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
      }, H = {
        texture: n.getUniformLocation(s, "u_texture"),
        mode: n.getUniformLocation(s, "u_mode"),
        viewRight: n.getUniformLocation(s, "u_viewRight"),
        viewUp: n.getUniformLocation(s, "u_viewUp"),
        viewFwd: n.getUniformLocation(s, "u_viewFwd"),
        viewHfov: n.getUniformLocation(s, "u_viewHfov"),
        viewVfov: n.getUniformLocation(s, "u_viewVfov"),
        stickerRight: n.getUniformLocation(s, "u_stickerRight"),
        stickerUp: n.getUniformLocation(s, "u_stickerUp"),
        stickerFwd: n.getUniformLocation(s, "u_stickerFwd"),
        stickerTanX: n.getUniformLocation(s, "u_stickerTanX"),
        stickerTanY: n.getUniformLocation(s, "u_stickerTanY"),
        crop: n.getUniformLocation(s, "u_crop"),
        opacity: n.getUniformLocation(s, "u_opacity")
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
      ]), n.STATIC_DRAW), f = re(n.REPEAT, n.CLAMP_TO_EDGE), g = re(n.REPEAT, n.CLAMP_TO_EDGE), y = re(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), N = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function k() {
    var I;
    if (n) {
      try {
        u && n.deleteBuffer(u), f && n.deleteTexture(f), g && n.deleteTexture(g), y && n.deleteTexture(y), C.forEach((j) => {
          ke(j);
        }), r && n.deleteProgram(r), a && n.deleteProgram(a), s && n.deleteProgram(s), (I = n.getExtension("WEBGL_lose_context")) == null || I.loseContext();
      } catch {
      }
      n = null, r = null, a = null, s = null, u = null, f = null, g = null, y = null, C.clear(), x = null, d = null, w = null, ie = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, ae = {
        paint: !1,
        mask: !1
      }, R = null, E = null, N = !1;
    }
  }
  function ce(I, j, W = 1) {
    A = Iu(I, j, W), (t.width !== A.width || t.height !== A.height) && (t.width = A.width, t.height = A.height);
  }
  function ge(I) {
    I === "background" ? x = null : I === "paint" ? d = null : w = null, ie[I] && (ie[I].width = 0, ie[I].height = 0);
  }
  function xe() {
    ae.paint = !1, ae.mask = !1;
  }
  function ve(I) {
    xe(), I === "paint" ? ae.paint = !0 : I === "mask" && (ae.mask = !0);
  }
  function J(I, j, W = [], te = { width: 0, height: 0 }, Z = !1) {
    if (!n || !I || !j) return !1;
    const Y = Number(j.width || j.videoWidth || j.naturalWidth || 0), pe = Number(j.height || j.videoHeight || j.naturalHeight || 0);
    if (!(Y > 1) || !(pe > 1)) return !1;
    const ue = Array.isArray(W) ? W.filter((de) => de && de.w > 0 && de.h > 0) : [];
    if (!ue.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, I), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Z ? 1 : 0), te.width !== Y || te.height !== pe)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, j), te.width = Y, te.height = pe, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (R || (R = document.createElement("canvas"), E = R.getContext("2d")), !E)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, j), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const de of ue) {
      const Me = Math.max(0, Math.floor(Number(de.x || 0))), De = Math.max(0, Math.floor(Number(de.y || 0))), Ie = Math.min(Y - Me, Math.ceil(Number(de.w || 0))), Le = Math.min(pe - De, Math.ceil(Number(de.h || 0)));
      if (!(Ie <= 0 || Le <= 0)) {
        if (R.width !== Ie || R.height !== Le) {
          if (R.width = Ie, R.height = Le, E = R.getContext("2d"), !E)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, j), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          E.clearRect(0, 0, Ie, Le);
        E.drawImage(j, Me, De, Ie, Le, 0, 0, Ie, Le), n.texSubImage2D(n.TEXTURE_2D, 0, Me, De, n.RGBA, n.UNSIGNED_BYTE, R);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function le(I, j, W, te, Z = null, Y = !1) {
    if (!we()) return !1;
    if (!W)
      return ge(I), !1;
    const pe = String(te ?? ""), ue = I === "background" ? x : I === "paint" ? d : w, de = ie[I], Me = Number(W.width || W.videoWidth || W.naturalWidth || 0), De = Number(W.height || W.videoHeight || W.naturalHeight || 0), Ie = de.width !== Me || de.height !== De;
    if (ue === pe && !Ie && !(Array.isArray(Z) && Z.length)) return !0;
    if (!(Me > 0) || !(De > 0))
      return ge(I), !1;
    if (n.bindTexture(n.TEXTURE_2D, j), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Y ? 1 : 0), !(Array.isArray(Z) && Z.length ? J(j, W, Z, de, Y) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, W), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ge(I), !1;
      de.width = Me, de.height = De;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), I === "background" ? x = pe : I === "paint" ? d = pe : w = pe, !0;
  }
  function _e(I, j) {
    return le("background", f, I, j, null, !0);
  }
  function G(I, j, W = null) {
    return le("paint", g, I, j, W, !0);
  }
  function fe(I, j, W = null) {
    return le("mask", y, I, j, W, !0);
  }
  function ke(I) {
    I != null && I.texture && n && n.deleteTexture(I.texture);
  }
  function Te(I = /* @__PURE__ */ new Set()) {
    C.forEach((j, W) => {
      I.has(W) || (ke(j), C.delete(W));
    });
  }
  function Oe(I) {
    if (!n || !(I != null && I.assetId) || !(I != null && I.source)) return null;
    const j = String(I.assetId), W = String(I.revision ?? ""), te = I.source, Z = Number(te.width || te.naturalWidth || te.videoWidth || 0), Y = Number(te.height || te.naturalHeight || te.videoHeight || 0);
    if (Z <= 0 || Y <= 0) return null;
    let pe = C.get(j);
    if (pe || (pe = {
      texture: re(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, C.set(j, pe)), pe.revision !== W || pe.width !== Z || pe.height !== Y) {
      if (n.bindTexture(n.TEXTURE_2D, pe.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, te), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), pe.revision = W, pe.width = Z, pe.height = Y;
    }
    return pe.texture;
  }
  function Ye(I = []) {
    if (!we()) return !1;
    const j = /* @__PURE__ */ new Set();
    return I.forEach((W) => {
      !(W != null && W.assetId) || !(W != null && W.source) || (j.add(String(W.assetId)), Oe(W));
    }), Te(j), !0;
  }
  function ht() {
    return we() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function Ut(I) {
    n.useProgram(I), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function bt(I, j = {}) {
    if (!x) return null;
    n.disable(n.BLEND), Ut(r), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(D.background, 0), n.uniform2f(D.viewport, Math.max(1, A.width), Math.max(1, A.height)), n.uniform1i(D.mode, (I == null ? void 0 : I.mode) === "unwrap" ? 0 : (I == null ? void 0 : I.mode) === "cutout" ? 2 : 1);
    const W = Mi(I, A.width, A.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(D.yaw, Number(W.yawDeg || 0) * pt), n.uniform1f(D.pitch, Number(W.pitchDeg || 0) * pt), n.uniform1f(D.roll, Number(W.rollDeg || 0) * pt), n.uniform1f(D.hFov, rt(Number(W.hFovDeg || 90), 0.1, 179) * pt), n.uniform1f(D.vFov, rt(Number(W.vFovDeg || 60), 0.1, 179) * pt), n.uniform1f(D.opacity, rt(Number(j.backgroundOpacity ?? 1), 0, 1));
    const te = Number((I == null ? void 0 : I.coverageDeg) || (j == null ? void 0 : j.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(D.coverage, te), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function Gt(I, j = {}) {
    const W = ae.paint && d != null, te = ae.mask && w != null;
    if (!W && !te) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Ut(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, g), n.uniform1i(O.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, y), n.uniform1i(O.mask, 1), n.uniform1i(O.mode, (I == null ? void 0 : I.mode) === "unwrap" ? 0 : (I == null ? void 0 : I.mode) === "cutout" ? 2 : 1);
    const Z = Mi(I, A.width, A.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(O.yaw, Number(Z.yawDeg || 0) * pt), n.uniform1f(O.pitch, Number(Z.pitchDeg || 0) * pt), n.uniform1f(O.roll, Number(Z.rollDeg || 0) * pt), n.uniform1f(O.hFov, rt(Number(Z.hFovDeg || 90), 0.1, 179) * pt), n.uniform1f(O.vFov, rt(Number(Z.vFovDeg || 60), 0.1, 179) * pt), n.uniform1f(O.paintOpacity, rt(Number(j.paintOpacity ?? 1), 0, 1)), n.uniform1f(O.maskOpacity, rt(Number(j.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(O.hasPaint, W ? 1 : 0), n.uniform1i(O.hasMask, te ? 1 : 0), n.uniform1i(O.showMaskTint, j.showMaskTint === !1 ? 0 : 1), n.uniform3f(O.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function sn(I, j) {
    var de, Me, De, Ie, Le, Fe, at;
    const W = Array.isArray(I == null ? void 0 : I.objects) ? I.objects : [];
    if (!W.length) {
      xe(), Te(/* @__PURE__ */ new Set());
      return;
    }
    const te = (j == null ? void 0 : j.mode) === "unwrap" ? 0 : (j == null ? void 0 : j.mode) === "cutout" ? 2 : 1, Z = Mi(j, A.width, A.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, Y = io(Z.yawDeg, Z.pitchDeg, Z.rollDeg), pe = W.slice().sort((Pe, vt) => Number((Pe == null ? void 0 : Pe.zIndex) || 0) - Number((vt == null ? void 0 : vt.zIndex) || 0)), ue = /* @__PURE__ */ new Set();
    xe();
    for (const Pe of pe)
      if (!(!Pe || Pe.visible === !1)) {
        if (Pe.type === "sticker") {
          const vt = String(((de = Pe == null ? void 0 : Pe.params) == null ? void 0 : de.assetId) || (Pe == null ? void 0 : Pe.id) || "");
          if (!vt) continue;
          ue.add(vt);
          const kn = Oe({
            assetId: vt,
            source: Pe.source,
            revision: Pe.revision
          });
          if (!kn) continue;
          const _t = rm({
            yawDeg: ((Me = Pe == null ? void 0 : Pe.transform) == null ? void 0 : Me.yawDeg) || 0,
            pitchDeg: ((De = Pe == null ? void 0 : Pe.transform) == null ? void 0 : De.pitchDeg) || 0,
            rollDeg: ((Ie = Pe == null ? void 0 : Pe.transform) == null ? void 0 : Ie.rollDeg) || 0,
            hFovDeg: ((Le = Pe == null ? void 0 : Pe.transform) == null ? void 0 : Le.hFovDeg) || 30,
            vFovDeg: ((Fe = Pe == null ? void 0 : Pe.transform) == null ? void 0 : Fe.vFovDeg) || 30,
            crop: ((at = Pe == null ? void 0 : Pe.params) == null ? void 0 : at.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (Pe == null ? void 0 : Pe.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Ut(s), n.uniform1i(H.texture, 0), n.uniform1i(H.mode, te), n.uniform3f(H.viewRight, Y.right.x, Y.right.y, Y.right.z), n.uniform3f(H.viewUp, Y.up.x, Y.up.y, Y.up.z), n.uniform3f(H.viewFwd, Y.fwd.x, Y.fwd.y, Y.fwd.z), n.uniform1f(H.viewHfov, rt(Number(Z.hFovDeg || 90), 0.1, 179) * pt), n.uniform1f(H.viewVfov, rt(Number(Z.vFovDeg || 60), 0.1, 179) * pt), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, kn), n.uniform3f(H.stickerRight, _t.right.x, _t.right.y, _t.right.z), n.uniform3f(H.stickerUp, _t.up.x, _t.up.y, _t.up.z), n.uniform3f(H.stickerFwd, _t.fwd.x, _t.fwd.y, _t.fwd.z), n.uniform1f(H.stickerTanX, Math.max(1e-6, _t.tanX)), n.uniform1f(H.stickerTanY, Math.max(1e-6, _t.tanY)), n.uniform4f(
            H.crop,
            rt(Number(_t.crop.x0 ?? 0), 0, 1),
            rt(Number(_t.crop.y0 ?? 0), 0, 1),
            rt(Number(_t.crop.x1 ?? 1), 0, 1),
            rt(Number(_t.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(H.opacity, _t.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (Pe.type === "paint" || Pe.type === "raster") {
          if (!G(Pe.source, Pe.revision ?? "")) continue;
          ve("paint"), Gt(j, {
            paintOpacity: Number(Pe.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (Pe.type === "mask") {
          if (!fe(Pe.source, Pe.revision ?? "")) continue;
          ve("mask"), Gt(j, {
            paintOpacity: 0,
            maskOpacity: Number(Pe.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    Te(ue), xe();
  }
  function hn(I) {
    return !ht() || !x ? null : (bt({
      mode: "panorama",
      yawDeg: (I == null ? void 0 : I.yawDeg) || 0,
      pitchDeg: (I == null ? void 0 : I.pitchDeg) || 0,
      fovDeg: (I == null ? void 0 : I.fovDeg) || 100
    }, I), t);
  }
  function m(I) {
    return !ht() || !x ? null : (bt({ mode: "unwrap" }, I), t);
  }
  function ft(I) {
    return !ht() || !x ? null : (bt({
      mode: "cutout",
      yawDeg: (I == null ? void 0 : I.yawDeg) || 0,
      pitchDeg: (I == null ? void 0 : I.pitchDeg) || 0,
      rollDeg: (I == null ? void 0 : I.rollDeg) || 0,
      hFovDeg: (I == null ? void 0 : I.hFovDeg) || 90,
      vFovDeg: (I == null ? void 0 : I.vFovDeg) || 60
    }, I), t);
  }
  function T(I = {}) {
    if (!we() || (ce(I.width, I.height, I.dpr || 1), !ht())) return null;
    const j = Object.prototype.hasOwnProperty.call(I, "backgroundSource"), W = Object.prototype.hasOwnProperty.call(I, "paintSource"), te = Object.prototype.hasOwnProperty.call(I, "maskSource"), Z = Object.prototype.hasOwnProperty.call(I, "textures"), Y = Object.prototype.hasOwnProperty.call(I, "scene");
    return j && _e(I.backgroundSource, I.backgroundRevision ?? ""), W && G(I.paintSource, I.paintRevision ?? ""), te && fe(I.maskSource, I.maskRevision ?? ""), Z && (Ye(I.textures || []), $.textures = I.textures || []), Y && ($.scene = I.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(I, "objectPass") && ($.objectPass = I.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(I, "backgroundOpacity") && ($.backgroundOpacity = Number(I.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(I, "showMaskTint") && ($.showMaskTint = I.showMaskTint === !0), Object.prototype.hasOwnProperty.call(I, "coverageDeg") && ($.coverageDeg = Number(I.coverageDeg || 360) === 180 ? 180 : 360), x && bt(I.view, {
      ...I,
      backgroundOpacity: Number(I.backgroundOpacity ?? $.backgroundOpacity ?? 1),
      coverageDeg: Number(I.coverageDeg || $.coverageDeg || 360) === 180 ? 180 : 360
    }), sn(
      $.objectPass || { objects: [] },
      I.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t;
  }
  function V(I = {}) {
    return we() ? !!T({
      ...I,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(I.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(t.width || 1),
      height: Number(t.height || 1),
      dpr: 1
    }) : !1;
  }
  function q(I, j, W) {
    const te = Math.max(1, Number((I == null ? void 0 : I.viewportWidth) || A.sourceWidth || A.width || 1)), Z = Math.max(1, Number((I == null ? void 0 : I.viewportHeight) || A.sourceHeight || A.height || 1)), Y = Number(j), pe = Number(W);
    if (!Number.isFinite(Y) || !Number.isFinite(pe)) return null;
    if ((I == null ? void 0 : I.mode) === "unwrap")
      return { u: (Y / te % 1 + 1) % 1, v: rt(pe / Z, 0, 1) };
    const ue = Mi(I, te, Z);
    if (!ue) return null;
    const de = io(ue.yawDeg, ue.pitchDeg, ue.rollDeg), Me = (Y - te * 0.5) / (te * 0.5) * Math.tan(rt(ue.hFovDeg, 1, 179) * pt * 0.5), De = (Z * 0.5 - pe) / (Z * 0.5) * Math.tan(rt(ue.vFovDeg, 0.1, 179) * pt * 0.5), Ie = Ei(bo(bo(ri(de.right, Me), ri(de.up, De)), de.fwd));
    return {
      u: (Math.atan2(Ie.x, Ie.z) / Ad + 0.5 + 1) % 1,
      v: rt(0.5 - Math.asin(rt(Ie.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function oe(I, j, W) {
    const te = Math.max(1, Number((I == null ? void 0 : I.viewportWidth) || A.sourceWidth || A.width || 1)), Z = Math.max(1, Number((I == null ? void 0 : I.viewportHeight) || A.sourceHeight || A.height || 1));
    if ((I == null ? void 0 : I.mode) === "unwrap")
      return {
        x: (Number(j || 0) % 1 + 1) % 1 * te,
        y: rt(Number(W || 0), 0, 1) * Z,
        visible: !0
      };
    const Y = Mi(I, te, Z);
    if (!Y)
      return { x: te * 0.5, y: Z * 0.5, visible: !1 };
    const pe = io(Y.yawDeg, Y.pitchDeg, Y.rollDeg), ue = Q1(j, W), de = ro(ue, pe.right), Me = ro(ue, pe.up), De = ro(ue, pe.fwd);
    if (De <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Ie = te * 0.5 + de / De * (te * 0.5 / Math.tan(rt(Y.hFovDeg, 1, 179) * pt * 0.5)), Le = Z * 0.5 - Me / De * (Z * 0.5 / Math.tan(rt(Y.vFovDeg, 0.1, 179) * pt * 0.5));
    return { x: Ie, y: Le, visible: Ie >= 0 && Ie <= te && Le >= 0 && Le <= Z };
  }
  return {
    init: we,
    dispose: k,
    setViewport: ce,
    setBackgroundErp: _e,
    setPaintErp: G,
    setMaskErp: fe,
    renderPanorama: hn,
    renderUnwrap: m,
    renderCutout: ft,
    renderScene: T,
    syncState: V,
    screenToErpUv: q,
    erpUvToScreen: oe,
    getCanvas() {
      return t;
    },
    isSupported() {
      return we();
    },
    getViewport() {
      return { ...A };
    }
  };
}
function Eu(e, t = 1, n = 16384) {
  const r = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(r) ? r : 1));
}
function am() {
  const e = /* @__PURE__ */ new Map();
  function t(u) {
    return u != null ? String(u) : "default";
  }
  function n(u, f, g) {
    const y = t(u);
    let x = e.get(y) || null;
    if (!x) {
      const N = document.createElement("canvas"), A = N.getContext("2d");
      if (!A) return null;
      x = {
        id: y,
        canvas: N,
        ctx: A,
        width: 0,
        height: 0
      }, e.set(y, x);
    }
    const d = Eu(f), w = Eu(g);
    return x.width !== d && (x.canvas.width = d, x.width = d), x.height !== w && (x.canvas.height = w, x.height = w), x;
  }
  function r(u) {
    return e.get(t(u)) || null;
  }
  function a(u) {
    const f = r(u);
    f && f.ctx.clearRect(0, 0, f.canvas.width, f.canvas.height);
  }
  function s() {
    e.clear();
  }
  return {
    ensureTarget: n,
    getTarget: r,
    clearTarget: a,
    dispose: s
  };
}
const om = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), sm = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function Id(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function cm(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function lm(e = {}) {
  const t = sm.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? Id(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function um(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!om.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), r = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? Id(n, 0, 1) : 1,
    zIndex: Number.isFinite(r) ? r : 0,
    coverageAware: cm(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function fm(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((r) => um(r)).filter((r) => !!r && r.visible !== !1).sort((r, a) => {
      const s = Number((r == null ? void 0 : r.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return s !== u ? s - u : String((r == null ? void 0 : r.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function di(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: lm((e == null ? void 0 : e.background) || {}),
    objectPass: fm((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function dm(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Hc(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), r = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(r) ? r : 0,
    opacity: Number.isFinite(a) ? dm(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function hm(e, t, n = {}) {
  return e ? Hc({
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
function gm(e, t, n = {}) {
  return e ? Hc({
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
function pm(e, t, n = {}) {
  return e ? Hc({
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
function Dd(e = {}) {
  const t = [], n = hm(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), r = gm(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), r && t.push(r), a.forEach((s, u) => {
    const f = pm(
      (s == null ? void 0 : s.source) || null,
      (s == null ? void 0 : s.revision) || "",
      {
        id: String((s == null ? void 0 : s.id) || `raster_layer_${u}`),
        zIndex: Number((s == null ? void 0 : s.zIndex) ?? (s == null ? void 0 : s.z_index) ?? 90),
        opacity: Number((s == null ? void 0 : s.opacity) ?? 1),
        visible: (s == null ? void 0 : s.visible) !== !1,
        transform: (s == null ? void 0 : s.transform) || null,
        params: (s == null ? void 0 : s.params) || {}
      }
    );
    f && t.push(f);
  }), t.sort((s, u) => {
    const f = Number((s == null ? void 0 : s.zIndex) || 0), g = Number((u == null ? void 0 : u.zIndex) || 0);
    return f !== g ? f - g : String((s == null ? void 0 : s.id) || "").localeCompare(String((u == null ? void 0 : u.id) || ""));
  });
}
function zc(e, t) {
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
function Go(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, r = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, s = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], u = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return di({
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
      objects: zc(a, s)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function La(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], r = zc(t, n), a = Dd({
    paintSource: (e == null ? void 0 : e.paintSource) || null,
    paintRevision: (e == null ? void 0 : e.paintRevision) || "",
    paintOptions: (e == null ? void 0 : e.paintOptions) || null,
    maskSource: (e == null ? void 0 : e.maskSource) || null,
    maskRevision: (e == null ? void 0 : e.maskRevision) || "",
    maskOptions: (e == null ? void 0 : e.maskOptions) || null,
    rasterEntries: (e == null ? void 0 : e.rasterEntries) || []
  });
  return di({
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
function mm(e = {}) {
  var s, u, f, g, y, x, d, w;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const N = di(e), A = Array.isArray((s = N.objectPass) == null ? void 0 : s.objects) ? N.objectPass.objects : [], D = {
      stickers: A.filter((E) => E.type === "sticker").map((E) => {
        var C, $, ie, ae, re, we, k, ce, ge, xe, ve, J, le;
        return {
          id: E.id,
          assetId: String(((C = E == null ? void 0 : E.params) == null ? void 0 : C.assetId) || (($ = E == null ? void 0 : E.params) == null ? void 0 : $.asset_id) || (E == null ? void 0 : E.id) || ""),
          yawDeg: Number(((ie = E == null ? void 0 : E.transform) == null ? void 0 : ie.yawDeg) ?? ((ae = E == null ? void 0 : E.params) == null ? void 0 : ae.yawDeg) ?? 0),
          pitchDeg: Number(((re = E == null ? void 0 : E.transform) == null ? void 0 : re.pitchDeg) ?? ((we = E == null ? void 0 : E.params) == null ? void 0 : we.pitchDeg) ?? 0),
          rollDeg: Number(((k = E == null ? void 0 : E.transform) == null ? void 0 : k.rollDeg) ?? ((ce = E == null ? void 0 : E.params) == null ? void 0 : ce.rollDeg) ?? 0),
          hFovDeg: Number(((ge = E == null ? void 0 : E.transform) == null ? void 0 : ge.hFovDeg) ?? ((xe = E == null ? void 0 : E.params) == null ? void 0 : xe.hFovDeg) ?? 30),
          vFovDeg: Number(((ve = E == null ? void 0 : E.transform) == null ? void 0 : ve.vFovDeg) ?? ((J = E == null ? void 0 : E.params) == null ? void 0 : J.vFovDeg) ?? 30),
          crop: ((le = E == null ? void 0 : E.params) == null ? void 0 : le.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((E == null ? void 0 : E.opacity) ?? 1),
          visible: (E == null ? void 0 : E.visible) !== !1,
          zIndex: Number((E == null ? void 0 : E.zIndex) ?? 0)
        };
      }),
      selectedId: ((u = N.objectPass) == null ? void 0 : u.selectedId) ?? null,
      hoveredId: ((f = N.objectPass) == null ? void 0 : f.hoveredId) ?? null
    }, O = A.filter((E) => E.type === "sticker").map((E) => {
      var C, $;
      return {
        assetId: String(((C = E == null ? void 0 : E.params) == null ? void 0 : C.assetId) || (($ = E == null ? void 0 : E.params) == null ? void 0 : $.asset_id) || (E == null ? void 0 : E.id) || ""),
        source: E.source || null,
        revision: String((E == null ? void 0 : E.revision) || "")
      };
    }).filter((E) => E.assetId && E.source), H = A.find((E) => E.type === "paint") || null, R = A.find((E) => E.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((g = N.background) == null ? void 0 : g.source) || null,
      backgroundRevision: String(((y = N.background) == null ? void 0 : y.revision) || ""),
      coverageDeg: Number(((x = N.background) == null ? void 0 : x.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (H == null ? void 0 : H.source) || null,
      paintRevision: String((H == null ? void 0 : H.revision) || ""),
      maskSource: (R == null ? void 0 : R.source) || null,
      maskRevision: String((R == null ? void 0 : R.revision) || ""),
      textures: O,
      scene: D,
      objectPass: N.objectPass,
      backgroundOpacity: Number(((d = N.background) == null ? void 0 : d.opacity) ?? 1),
      showMaskTint: ((w = e == null ? void 0 : e.overlay) == null ? void 0 : w.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], r = e.layers || {}, a = di({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...zc(t, n),
        ...Dd({
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
function ym(e) {
  let t = null;
  function n(s = {}) {
    const u = mm(s);
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
function pi(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (O) => im(O), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => am(), r = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (O) => ym(O), a = t(e), s = (e == null ? void 0 : e.targetCanvas) || null, u = n();
  let f = null;
  const g = r({
    syncState(O = {}) {
      if (typeof a.syncState == "function") {
        const H = { ...O }, R = a.syncState(H);
        return R && (f = H, R);
      }
      return f = { ...O }, !0;
    }
  });
  function y(O = {}) {
    return g.sync(O);
  }
  function x(O = {}, H = {}) {
    return f ? a.renderScene({
      ...f,
      view: O,
      width: H.width,
      height: H.height,
      dpr: H.dpr,
      backgroundOpacity: H.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: H.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function d(O, H, R = {}, E = {}) {
    if (!H) return !1;
    const C = x(R, {
      ...E,
      width: H.w,
      height: H.h
    });
    return C ? O ? (O.canvas && C === O.canvas || O.drawImage(C, H.x, H.y, H.w, H.h), !0) : !!s && C === s : !1;
  }
  function w(O, H = {}, R = {}) {
    const E = Number(R.width || 0), C = Number(R.height || 0);
    if (!(E > 0) || !(C > 0)) return null;
    const $ = u.ensureTarget(O, E, C);
    if (!$) return null;
    const ie = x(H, {
      ...R,
      width: E,
      height: C
    });
    return ie ? ($.ctx.clearRect(0, 0, $.canvas.width, $.canvas.height), $.ctx.drawImage(ie, 0, 0, $.canvas.width, $.canvas.height), $.canvas) : null;
  }
  function N(O) {
    u.clearTarget(O);
  }
  function A() {
    var O;
    u.dispose(), (O = a.dispose) == null || O.call(a), f = null;
  }
  function D() {
    f = null, g.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: y,
    renderView: x,
    renderToContext: d,
    renderToTarget: w,
    clearTarget: N,
    snapshotState: g.snapshot,
    clearState: D,
    dispose: A
  };
}
function Qr(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function bm() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Tu(e, t = 8) {
  var x;
  const n = (x = e == null ? void 0 : e.getContext) == null ? void 0 : x.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || a < 1) return null;
  const s = n.getImageData(0, 0, r, a).data;
  let u = r, f = a, g = -1, y = -1;
  for (let d = 0; d < a; d += 1)
    for (let w = 0; w < r; w += 1)
      s[(d * r + w) * 4 + 3] <= t || (w < u && (u = w), d < f && (f = d), w > g && (g = w), d > y && (y = d));
  return g < u || y < f ? null : {
    minX: u,
    minY: f,
    maxX: g,
    maxY: y,
    width: g - u + 1,
    height: y - f + 1,
    aspect: Number(((g - u + 1) / Math.max(1, y - f + 1)).toFixed(4))
  };
}
function jc(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const a = document.createElement("canvas");
  return a.width = n, a.height = r, a;
}
function En(e, t, n) {
  if (!e) return Qr(t, n);
  const r = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== a) && (e.canvas.width = r, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function lt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let Vs = null, Hs = null, Lu = null, Ru = null, Qe = null, ki = null, Wt = null, or = null;
function vm() {
  if (Hs) return Hs;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), Hs = n, n;
}
function Yr(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Vs = En(Vs, n, r);
  const a = Vs;
  lt(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", Ru !== a.ctx && (Lu = a.ctx.createPattern(vm(), "repeat"), Ru = a.ctx), a.ctx.fillStyle = Lu, a.ctx.fillRect(0, 0, n, r), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function _m(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function xm(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function wm(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Sm(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const dt = /* @__PURE__ */ new Map(), $c = 128;
function Nm(e, t, n, r, a, s) {
  const u = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), g = `${u}:${f.toFixed(2)}:${n}:${r}:${a}:${s.toFixed(3)}`;
  if (dt.has(g)) {
    const R = dt.get(g);
    return dt.delete(g), dt.set(g, R), R;
  }
  dt.size >= $c && dt.delete(dt.keys().next().value);
  const y = u * 2 + 2, x = u + 1, d = jc(y, y), w = d.getContext("2d"), N = f * u, A = u + 1, D = `rgba(${n},${r},${a},${s})`, O = `rgba(${n},${r},${a},0)`, H = w.createRadialGradient(x, x, N, x, x, A);
  return H.addColorStop(0, D), H.addColorStop(1, O), w.fillStyle = H, w.fillRect(0, 0, y, y), dt.set(g, d), d;
}
function Mm(e, t, n, r, a, s, u) {
  const { r: f, g, b: y, a: x } = r, d = Math.max(2, Math.ceil(e) * 2), w = Math.max(2, Math.ceil(t) * 2), N = Math.max(0, a), A = Math.max(0, Math.min(0.99, s)), D = Math.max(0, Math.min(1, u ?? 0)), O = `chisel:${d}:${w}:${n.toFixed(2)}:${f}:${g}:${y}:${x.toFixed(3)}:${N.toFixed(2)}:${A.toFixed(2)}:${D.toFixed(2)}`;
  if (dt.has(O)) {
    const re = dt.get(O);
    return dt.delete(O), dt.set(O, re), re;
  }
  dt.size >= $c && dt.delete(dt.keys().next().value);
  const H = jc(d, w), R = H.getContext("2d"), E = R.createImageData(d, w), C = E.data, $ = Math.max(0, e - t), ie = Math.max(0, Math.min(1, n)), ae = 1 + N;
  for (let re = 0; re < w; re++)
    for (let we = 0; we < d; we++) {
      const k = we + 0.5 - e, ce = re + 0.5 - t, ge = Math.max(Math.abs(k) - $, 0), ve = Math.hypot(ge, ce) / t;
      if (ve >= 1) continue;
      const J = ve <= ie ? 1 : Math.max(0, (1 - ve) / Math.max(1e-4, 1 - ie)), le = 1 - ve, _e = 1 + N * (1 - le) * (1 - le), G = 1 - A * le * le, fe = _e * G / ae;
      let ke = 1;
      if (D > 0) {
        const Ye = Math.floor((ce + t) / 1.5), ht = Math.floor((k + e) / 8), Ut = Cr(ci(Ye * 41 + 500, ht * 19 + 300));
        ke = 1 - D * 0.42 * Ut;
      }
      const Te = Math.round(255 * Math.min(1, x * J * fe * ke));
      if (Te <= 0) continue;
      const Oe = (re * d + we) * 4;
      C[Oe] = f, C[Oe + 1] = g, C[Oe + 2] = y, C[Oe + 3] = Te;
    }
  return R.putImageData(E, 0, 0), dt.set(O, H), H;
}
function ci(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ r & 255, 16777619), a = Math.imul(a ^ r >> 8 & 255, 16777619), a >>> 0;
}
function Cr(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function km(e, t, n, r, a, s, u) {
  const f = e + 0.5 - n, g = t + 0.5 - r, y = Math.max(0, n - r), x = Math.max(Math.abs(f) - y, 0), d = Math.hypot(x, g) / r;
  if (d >= 1) return 0;
  const w = Cr(ci(e * 17 + 3, t * 13 + 7)), N = d + s * 0.22 * (w - 0.5);
  if (N >= 1) return 0;
  const A = N <= a ? 1 : Math.max(0, (1 - N) / Math.max(1e-4, 1 - a)), D = Pm(e, t, f, g, n, r), O = s * 0.55;
  if (D < O) return 0;
  const R = 0.45 + 0.55 * ((D - O) / Math.max(1e-4, 1 - O));
  return Math.round(255 * Math.min(1, u * A * R));
}
function Pm(e, t, n, r, a, s) {
  const u = Math.floor((n + a) / 3), f = Math.floor((r + s) / 2), g = Cr(ci(u * 13 + 700, f * 17 + 400)), y = Math.floor((n + a) / 1.5), x = Math.floor((r + s) / 1.5), d = Cr(ci(y * 23 + 800, x * 29 + 500)), w = Cr(ci(e * 3 + 100, t * 5 + 200));
  return g * 0.55 + d * 0.3 + w * 0.15;
}
function Cm(e, t, n, r, a) {
  const { r: s, g: u, b: f, a: g } = r, y = Math.max(2, Math.ceil(e) * 2), x = Math.max(2, Math.ceil(t) * 2), d = Math.max(0, Math.min(1, a)), w = `crayon:${y}:${x}:${n.toFixed(2)}:${s}:${u}:${f}:${g.toFixed(3)}:${d.toFixed(2)}`;
  if (dt.has(w)) {
    const R = dt.get(w);
    return dt.delete(w), dt.set(w, R), R;
  }
  dt.size >= $c && dt.delete(dt.keys().next().value);
  const N = jc(y, x), A = N.getContext("2d"), D = A.createImageData(y, x), O = D.data, H = Math.max(0, Math.min(1, n));
  for (let R = 0; R < x; R++)
    for (let E = 0; E < y; E++) {
      const C = km(E, R, e, t, H, d, g);
      if (C <= 0) continue;
      const $ = (R * y + E) * 4;
      O[$] = s, O[$ + 1] = u, O[$ + 2] = f, O[$ + 3] = C;
    }
  return A.putImageData(D, 0, 0), dt.set(w, N), N;
}
function Ed(e, t, n) {
  var D, O;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), a = wm(t, n), s = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), u = Am(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), g = Number(((D = t == null ? void 0 : t.angle) == null ? void 0 : D.value) ?? 0), y = Sm(t, a), x = String(((O = t == null ? void 0 : t.targetSpace) == null ? void 0 : O.viewMode) || ""), d = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && x !== "unwrap", w = t == null ? void 0 : t.scatter, N = w ? { radius: Number(w.radius ?? 1.5), count: Math.max(1, Math.round(w.count ?? 6)) } : null;
  let A;
  if (r === "chisel") {
    const H = a * f, R = a, E = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), C = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), $ = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    A = Mm(H, R, s, u, E, C, $);
  } else if (r === "crayon") {
    const H = a * f, R = a, E = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    A = Cm(H, R, s, u, E);
  } else
    A = Nm(a, s, u.r, u.g, u.b, u.a);
  return { ctx: e, stampTex: A, radiusPx: a, spacingPx: y, desc: n, aspect: f, angle: g, stampKind: r, scatter: N, latitudeCorrection: d };
}
function Am(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), s = Math.max(0, Math.min(1, Number(r.a ?? 1))) * a;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(r.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(r.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(r.b || 0))) * 255),
    a: s
  };
}
function Im(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${a})`;
}
function Ou(e, t, n, r, a) {
  const s = e.angle, u = e.desc.width;
  function f(y, x) {
    s === 0 ? e.ctx.drawImage(e.stampTex, y - a, x - r, a * 2, r * 2) : (e.ctx.save(), e.ctx.translate(y, x), e.ctx.rotate(s), e.ctx.drawImage(e.stampTex, -a, -r, a * 2, r * 2), e.ctx.restore());
  }
  f(t, n);
  const g = s === 0 ? a : a * Math.abs(Math.cos(s)) + r * Math.abs(Math.sin(s));
  t - g < 0 && f(t + u, n), t + g > u && f(t - u, n);
}
function Bc(e, t, n, r) {
  const a = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: y, count: x } = e.scatter, d = y * e.radiusPx * a, w = ci(t, n);
    for (let N = 0; N < x; N++) {
      const A = Cr(w + N * 2) * Math.PI * 2, D = Math.sqrt(Cr(w + N * 2 + 1)) * d, O = t + Math.cos(A) * D, H = n + Math.sin(A) * D, R = Math.max(0.5, e.radiusPx * a * 0.48), E = (0.5 - H / Math.max(1, e.desc.height)) * Math.PI, C = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(E)) : 1, $ = R * e.aspect * C;
      Ou(e, O, H, R, $);
    }
    return;
  }
  const s = Math.max(0.5, e.radiusPx * a), u = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, g = s * e.aspect * f;
  Ou(e, t, n, s, g);
}
function Fu(e, t, n) {
  const r = xm(t);
  if (!e || r.length === 0) return;
  const a = n.width, s = n.height, u = Ed(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let w = 0; w < r.length; w++) {
    let N = Number(r[w].u || 0) * a;
    const A = Number(r[w].v || 0) * s;
    w > 0 && Math.abs(N - f[w - 1].x) > a * 0.5 && (N += N < f[w - 1].x ? a : -a), f.push({ x: N, y: A });
  }
  if (Bc(u, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let g = f[0], y = f[0], x = f[0], d = 0;
  for (let w = 1; w < f.length; w++) {
    const N = f[w], A = { x: (y.x + N.x) * 0.5, y: (y.y + N.y) * 0.5 };
    w === 1 ? d = na(u, x.x, x.y, A.x, A.y, d) : d = vo(u, g, x, A, N, d), g = y, y = N, x = A;
  }
  f.length === 2 ? na(u, x.x, x.y, y.x, y.y, d) : vo(u, g, x, y, y, d), e.restore();
}
function ao(e, t, n) {
  var d;
  const r = Array.isArray((d = t == null ? void 0 : t.geometry) == null ? void 0 : d.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const a = n.width, s = n.height, u = Im(t), f = [];
  let g = 1 / 0, y = -1 / 0;
  for (let w = 0; w < r.length; w++) {
    const N = _m(r[w]);
    let A = Number(N.x || 0) * a;
    w > 0 && Math.abs(A - f[w - 1].x) > a * 0.5 && (A += A < f[w - 1].x ? a : -a), f.push({ x: A, y: Number(N.y || 0) * s }), A < g && (g = A), A > y && (y = A);
  }
  function x(w) {
    e.beginPath(), e.moveTo(f[0].x + w, f[0].y);
    for (let N = 1; N < f.length; N++) e.lineTo(f[N].x + w, f[N].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = u, x(0), g < 0 && x(a), y > a && x(-a), e.restore();
}
function Ra(e, t, n) {
  var u;
  if (String(((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    ao(e, t, n);
    return;
  }
  const s = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  s >= 0.999 ? Fu(e, t, n) : (ki = En(ki, n.width, n.height), lt(ki), Fu(ki.ctx, t, n), e.save(), e.globalAlpha = s, e.drawImage(ki.canvas, 0, 0), e.restore());
}
function sr(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function na(e, t, n, r, a, s) {
  const u = r - t, f = a - n, g = Math.hypot(u, f);
  if (g < 1e-9) return s;
  let y = e.spacingPx - s;
  for (; y <= g; ) {
    const x = y / g;
    Bc(e, t + u * x, n + f * x, 1), y += e.spacingPx;
  }
  return g - y + e.spacingPx;
}
function vo(e, t, n, r, a, s) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, g = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(a.x - r.x, a.y - r.y)) + 1e-4, x = 0, d = f, w = d + g, N = w + y, A = w - d, D = 16;
  let O = s, H = n.x, R = n.y;
  for (let E = 1; E <= D; E++) {
    const C = d + A * E / D, $ = ((d - C) * t.x + (C - x) * n.x) / (d - x), ie = ((d - C) * t.y + (C - x) * n.y) / (d - x), ae = ((w - C) * n.x + (C - d) * r.x) / (w - d), re = ((w - C) * n.y + (C - d) * r.y) / (w - d), we = ((N - C) * r.x + (C - w) * a.x) / (N - w), k = ((N - C) * r.y + (C - w) * a.y) / (N - w), ce = ((w - C) * $ + (C - x) * ae) / (w - x), ge = ((w - C) * ie + (C - x) * re) / (w - x), xe = ((N - C) * ae + (C - d) * we) / (N - d), ve = ((N - C) * re + (C - d) * k) / (N - d), J = ((w - C) * ce + (C - d) * xe) / (w - d), le = ((w - C) * ge + (C - d) * ve) / (w - d);
    O = na(e, H, R, J, le, O), H = J, R = le;
  }
  return O;
}
function Dm(e, t, n, r) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const s = e.descriptor, u = s.width, f = n * s.height, g = e.activeStroke;
  let y = t * u;
  if (g && Math.abs(y - g.prev.x) > u * 0.5 && (y += y < g.prev.x ? u : -u), !g) {
    const N = Ed(a, r, s), A = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), D = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), O = String((r == null ? void 0 : r.toolKind) || "") === "eraser", H = String((r == null ? void 0 : r.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", Bc(N, y, f, 1), e.activeStroke = {
      pprev: { x: y, y: f },
      prev: { x: y, y: f },
      lastMidX: y,
      lastMidY: f,
      stampTex: N.stampTex,
      radiusPx: N.radiusPx,
      spacingPx: N.spacingPx,
      aspect: N.aspect,
      angle: N.angle,
      stampKind: N.stampKind,
      scatter: N.scatter,
      latitudeCorrection: N.latitudeCorrection,
      strokeOpacity: A,
      velocityWidthFactor: D,
      distSinceStamp: 0,
      isEraser: O,
      layerKind: H,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const x = (g.prev.x + y) * 0.5, d = (g.prev.y + f) * 0.5;
  a.globalCompositeOperation = "source-over";
  const w = {
    ctx: a,
    stampTex: g.stampTex,
    radiusPx: g.radiusPx,
    spacingPx: g.spacingPx,
    desc: s,
    aspect: g.aspect,
    angle: g.angle,
    stampKind: g.stampKind,
    scatter: g.scatter,
    latitudeCorrection: g.latitudeCorrection
  };
  g.pointCount === 1 ? g.distSinceStamp = na(w, g.lastMidX, g.lastMidY, x, d, g.distSinceStamp) : g.distSinceStamp = vo(
    w,
    g.pprev,
    { x: g.lastMidX, y: g.lastMidY },
    { x, y: d },
    { x: y, y: f },
    g.distSinceStamp
  ), g.pprev = g.prev, g.prev = { x: y, y: f }, g.lastMidX = x, g.lastMidY = d, g.pointCount++, e.displayDirty = !0;
}
function cc(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), s = Qr(t, n), u = {
    descriptor: r,
    committedMask: Qr(t, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: Qr(t, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, g = Qr(t, n);
  let y = null, x = "", d = null;
  function w(k) {
    return {
      actionGroupId: k,
      descriptor: r,
      committedPaint: Qr(t, n),
      currentStroke: s,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function N(k) {
    let ce = a.get(k);
    return ce || (ce = w(k), a.set(k, ce)), ce;
  }
  function A(k) {
    return x === "mask" ? u : y ? N(y) : f;
  }
  function D(k) {
    var G;
    const ce = !d || d.length !== k.length || k.some((fe, ke) => fe !== d[ke]), ge = x === "paint" && ((G = y ? a.get(y) : f) == null ? void 0 : G.activeStroke) || null, xe = x === "mask", ve = u.activeStroke;
    let J = u.displayDirty || f.displayDirty || ce;
    for (const fe of k) {
      const ke = a.get(fe);
      if (ke != null && ke.displayDirty) {
        J = !0;
        break;
      }
    }
    if ((ge || xe && ve) && (J = !0), !J) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const fe of k) {
      const ke = a.get(fe);
      ke && (ke.displayDirty = !1);
    }
    d = [...k];
    const le = g.ctx;
    lt(g);
    const _e = !!(ge != null && ge.isEraser);
    for (const fe of k) {
      const ke = a.get(fe);
      if (!ke) continue;
      const Oe = y === ke.actionGroupId && x === "paint" ? ke.activeStroke : null;
      if (_e)
        Qe = En(Qe, t, n), lt(Qe), Qe.ctx.drawImage(ke.committedPaint.canvas, 0, 0), sr(Qe.ctx, s.canvas), le.drawImage(Qe.canvas, 0, 0);
      else if (le.drawImage(ke.committedPaint.canvas, 0, 0), Oe) {
        const Ye = ke.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Oe.strokeOpacity ?? 1));
        le.save(), le.globalAlpha = Ye, le.drawImage(s.canvas, 0, 0), le.restore();
      }
    }
    xe && (ve != null && ve.isEraser) ? (Qe = En(Qe, t, n), lt(Qe), Qe.ctx.drawImage(u.committedMask.canvas, 0, 0), sr(Qe.ctx, s.canvas), Yr(le, Qe.canvas)) : (Yr(le, u.committedMask.canvas), xe && ve && Yr(le, s.canvas));
  }
  function O(k) {
    var ge, xe, ve, J, le;
    for (const _e of a.values())
      lt(_e.committedPaint), lt(_e.currentStroke), _e.activeStroke = null, _e.displayDirty = !0;
    lt(u.committedMask), lt(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, d = null;
    const ce = [
      ...Array.isArray((xe = (ge = k == null ? void 0 : k.painting) == null ? void 0 : ge.paint) == null ? void 0 : xe.strokes) ? k.painting.paint.strokes : [],
      ...Array.isArray((J = (ve = k == null ? void 0 : k.painting) == null ? void 0 : ve.mask) == null ? void 0 : J.strokes) ? k.painting.mask.strokes : []
    ];
    for (const _e of ce) {
      if (((le = _e == null ? void 0 : _e.targetSpace) == null ? void 0 : le.kind) !== "ERP_GLOBAL") continue;
      const G = String((_e == null ? void 0 : _e.layerKind) || "paint"), ke = String((_e == null ? void 0 : _e.toolKind) || "pen") === "eraser";
      if (G === "mask") {
        const Te = u.descriptor;
        ke ? (Qe = En(Qe, Te.width, Te.height), lt(Qe), Ra(Qe.ctx, _e, Te), sr(u.committedMask.ctx, Qe.canvas)) : Ra(u.committedMask.ctx, _e, Te);
        continue;
      }
      if (ke) {
        Qe = En(Qe, r.width, r.height), lt(Qe), Ra(Qe.ctx, _e, r);
        for (const Te of a.values())
          sr(Te.committedPaint.ctx, Qe.canvas), Te.displayDirty = !0;
      } else {
        const Te = String((_e == null ? void 0 : _e.actionGroupId) || "__default__"), Oe = N(Te), Ye = Oe.descriptor;
        Ra(Oe.committedPaint.ctx, _e, Ye), Oe.displayDirty = !0;
      }
    }
    D([...a.keys()]);
  }
  function H(k, ce) {
    x = String((k == null ? void 0 : k.layerKind) || "");
    const ge = String((k == null ? void 0 : k.toolKind) || "") === "eraser";
    if (x === "mask")
      y = null, lt(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const xe = ge ? f : N(String((k == null ? void 0 : k.actionGroupId) || "__default__"));
      y = ge ? "" : String((k == null ? void 0 : k.actionGroupId) || "__default__"), lt(xe.currentStroke), xe.activeStroke = null, xe.displayDirty = !0;
    }
  }
  function R(k, ce) {
    var G;
    const ge = String((k == null ? void 0 : k.layerKind) || "paint"), xe = String((k == null ? void 0 : k.toolKind) || "") === "eraser", ve = ge === "mask" ? u : xe ? f : N(String((k == null ? void 0 : k.actionGroupId) || y || "__default__")), J = ve.activeStroke, le = ve.descriptor;
    if (J && J.pointCount > 1) {
      const fe = ve.currentStroke.ctx;
      fe.globalCompositeOperation = "source-over";
      const ke = {
        ctx: fe,
        stampTex: J.stampTex,
        radiusPx: J.radiusPx,
        spacingPx: J.spacingPx,
        desc: le,
        aspect: J.aspect,
        angle: J.angle,
        stampKind: J.stampKind,
        scatter: J.scatter,
        latitudeCorrection: J.latitudeCorrection
      };
      J.pointCount === 2 ? na(ke, J.lastMidX, J.lastMidY, J.prev.x, J.prev.y, J.distSinceStamp) : vo(ke, J.pprev, { x: J.lastMidX, y: J.lastMidY }, J.prev, J.prev, J.distSinceStamp);
    }
    ve.lassoPreviewActive && (lt(ve.currentStroke), ao(ve.currentStroke.ctx, k, le), ve.lassoPreviewActive = !1);
    const _e = ge === "mask" ? u.committedMask : ve.committedPaint;
    if (xe && ge === "paint")
      for (const fe of a.values())
        sr(fe.committedPaint.ctx, ve.currentStroke.canvas), fe.displayDirty = !0;
    else if (xe)
      sr(_e.ctx, ve.currentStroke.canvas);
    else {
      const fe = Math.max(0, Math.min(1, (J == null ? void 0 : J.strokeOpacity) ?? 1));
      _e.ctx.save(), _e.ctx.globalAlpha = fe, _e.ctx.drawImage(ve.currentStroke.canvas, 0, 0), _e.ctx.restore();
    }
    bm() && (String((k == null ? void 0 : k.toolKind) || ""), String((le == null ? void 0 : le.kind) || ""), Number((le == null ? void 0 : le.width) || 0), Number((le == null ? void 0 : le.height) || 0), String(((G = k == null ? void 0 : k.targetSpace) == null ? void 0 : G.viewMode) || ""), Number((k == null ? void 0 : k.aspect) ?? 1), Tu(ve.currentStroke.canvas), Tu(_e.canvas), void 0), lt(ve.currentStroke), ve.activeStroke = null, ve.displayDirty = !0, y = null, x = "", D([...a.keys()]);
  }
  function E(k) {
    if (x === "mask")
      lt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (x === "paint" && !y)
      lt(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (y) {
      const ce = a.get(y);
      ce && (lt(ce.currentStroke), ce.activeStroke = null, ce.lassoPreviewActive = !1, ce.displayDirty = !0);
    }
    y = null, x = "", D([...a.keys()]);
  }
  function C(k, ce) {
    var xe;
    if (x = String((k == null ? void 0 : k.layerKind) || ""), String(((xe = k == null ? void 0 : k.geometry) == null ? void 0 : xe.geometryKind) || "") === "lasso_fill") {
      if (x === "mask")
        lt(u.currentStroke), ao(u.currentStroke.ctx, k, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const ve = String((k == null ? void 0 : k.toolKind) || "") === "eraser", J = ve ? f : N(String((k == null ? void 0 : k.actionGroupId) || y || "__default__"));
        y = ve ? "" : String((k == null ? void 0 : k.actionGroupId) || y || "__default__"), lt(J.currentStroke), ao(J.currentStroke.ctx, k, J.descriptor), J.lassoPreviewActive = !0, J.displayDirty = !0;
      }
      D([...a.keys()]);
    }
  }
  function $(k) {
    return D(k ?? [...a.keys()]), {
      displayPaint: g,
      committedMask: u.committedMask,
      descriptor: r
    };
  }
  function ie(k) {
    return a.get(String(k)) ?? null;
  }
  function ae() {
    return [...a.keys()];
  }
  function re(k) {
    var le;
    const ce = a.get(String(k));
    if (!ce) return null;
    const ge = x === "paint" && y === ce.actionGroupId, xe = x === "paint" && ((le = y ? a.get(y) : f) == null ? void 0 : le.activeStroke) || null;
    if (xe != null && xe.isEraser)
      return Wt = En(Wt, t, n), lt(Wt), Wt.ctx.drawImage(ce.committedPaint.canvas, 0, 0), sr(Wt.ctx, s.canvas), Wt.canvas;
    const ve = ge ? ce.activeStroke : null;
    if (!ve) return ce.committedPaint.canvas;
    Wt = En(Wt, t, n), lt(Wt), Wt.ctx.drawImage(ce.committedPaint.canvas, 0, 0);
    const J = ce.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, ve.strokeOpacity ?? 1));
    return Wt.ctx.save(), Wt.ctx.globalAlpha = J, Wt.ctx.drawImage(s.canvas, 0, 0), Wt.ctx.restore(), Wt.canvas;
  }
  function we() {
    return or = En(or, t, n), lt(or), Yr(or.ctx, u.committedMask.canvas), x === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (Qe = En(Qe, t, n), lt(Qe), Qe.ctx.drawImage(u.committedMask.canvas, 0, 0), sr(Qe.ctx, s.canvas), lt(or), Yr(or.ctx, Qe.canvas)) : Yr(or.ctx, s.canvas)), or.canvas;
  }
  return {
    rebuildCommitted: O,
    beginStroke: H,
    appendStrokePoint: Dm,
    updateActiveStroke: C,
    commitActiveStroke: R,
    cancelActiveStroke: E,
    getErpTarget: $,
    ensureTarget: A,
    getGroupTarget: ie,
    getGroupDisplayCanvas: re,
    getMaskDisplayCanvas: we,
    getAllGroupIds: ae
  };
}
function B(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function zs(e, t, n) {
  const r = Number(e);
  return Number.isFinite(r) ? Math.max(Number(t), Math.min(Number(n), r)) : Number(t);
}
function Rt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Em(e, t) {
  let n = Rt(t) - Rt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Vu = Math.PI / 180, Hu = 0.12, Tm = 3, Lm = 35, Rm = 140, Ti = 100, Om = 20, zu = 0.8;
function Fm(e, t, n) {
  const r = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), s = B(Number(e || Ti), 1, 179) * Vu;
  return 2 * Math.atan(Math.tan(s * 0.5) * (a / r)) / Vu;
}
function Vm(e) {
  return Number.isFinite(Number(e == null ? void 0 : e.deltaY)) ? Number(e.deltaY) : Number.isFinite(Number(e == null ? void 0 : e.wheelDelta)) ? -Number(e.wheelDelta) : Number.isFinite(Number(e == null ? void 0 : e.detail)) ? Number(e.detail) * 40 : 0;
}
function Ko(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Ti })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), s = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, g = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function y(H, R = null) {
    f && f(H, R);
  }
  function x(H, R, E = null, C = performance.now()) {
    return g.drag.active = !0, g.drag.lastX = Number(H || 0), g.drag.lastY = Number(R || 0), g.drag.lastTs = Number(C || performance.now()), g.drag.pointerId = E, g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.lastTs = g.drag.lastTs, g.velHistory = [], y("drag", { phase: "start", x: g.drag.lastX, y: g.drag.lastY, pointerId: E }), !0;
  }
  function d(H, R, E = "pano", C = performance.now()) {
    if (!g.drag.active) return !1;
    const $ = Number(C || performance.now()), ie = Number(H), ae = Number(R), re = ie - g.drag.lastX, we = ae - g.drag.lastY;
    g.drag.lastX = ie, g.drag.lastY = ae, g.drag.lastTs = $;
    const k = r() || { x: 1, y: 1 }, ce = Number(k.x || 1), ge = Number(k.y || 1), xe = { ...t() };
    let ve = 0, J = 0;
    if (E === "unwrap") {
      const _e = a() || { w: 1, h: 1 }, G = Math.max(1, Number(_e.w || 1)), fe = Math.max(1, Number(_e.h || 1)), ke = re / G, Te = we / fe;
      ve = -ke * 360 * ce, J = Te * 180 * ge;
    } else {
      const _e = s() || { w: 0, h: 0 }, G = Math.max(1, Number(_e.w || 0)), fe = Math.max(1, Number(_e.h || 0));
      if (G > 1 && fe > 1) {
        const ke = B(Number(xe.fov || Ti), 1, 179), Te = B(Fm(ke, G, fe), 0.1, 179);
        ve = -(re / G) * ke * ce, J = we / fe * Te * ge;
      } else
        ve = -re * Hu * ce, J = we * Hu * ge;
    }
    xe.yaw = Rt(Number(xe.yaw || 0) + ve), xe.pitch = B(Number(xe.pitch || 0) + J, -89.9, 89.9), n(xe), g.velHistory.push({ ts: $, yaw: xe.yaw, pitch: xe.pitch });
    let le = 0;
    for (; le < g.velHistory.length - 1 && g.velHistory[le].ts < $ - 100; ) le++;
    return le > 0 && g.velHistory.splice(0, le), g.inertia.active = !1, g.inertia.lastTs = $, u(), y("drag", { phase: "move", dx: re, dy: we, dYaw: ve, dPitch: J }), !0;
  }
  function w(H = performance.now()) {
    if (!g.drag.active) return !1;
    g.drag.active = !1;
    const R = Number(H || performance.now());
    g.drag.lastTs = R;
    const E = g.velHistory.filter(($) => R - $.ts <= 80);
    if (E.length >= 2) {
      const $ = E[0], ie = E.at(-1), ae = Math.max(1e-3, (ie.ts - $.ts) / 1e3);
      let re = ie.yaw - $.yaw;
      re > 180 && (re -= 360), re < -180 && (re += 360), g.inertia.vx = re / ae, g.inertia.vy = (ie.pitch - $.pitch) / ae;
    } else
      g.inertia.vx = 0, g.inertia.vy = 0;
    g.velHistory = [];
    const C = Math.hypot(g.inertia.vx, g.inertia.vy);
    return g.inertia.active = C > Om, g.inertia.lastTs = R, y("drag", { phase: "end", speed: C, inertiaActive: g.inertia.active }), !0;
  }
  function N(H = performance.now()) {
    if (!g.inertia.active) return !1;
    const R = Number(H || performance.now()), E = Math.max(1e-3, (R - (g.inertia.lastTs || R)) / 1e3);
    g.inertia.lastTs = R;
    const C = { ...t() };
    C.yaw = Rt(Number(C.yaw || 0) + g.inertia.vx * E), C.pitch = B(Number(C.pitch || 0) + g.inertia.vy * E, -89.9, 89.9);
    const $ = Math.exp(-5.5 * E);
    return g.inertia.vx *= $, g.inertia.vy *= $, Math.abs(g.inertia.vx) < zu && Math.abs(g.inertia.vy) < zu && (g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.active = !1), n(C), u(), g.inertia.active;
  }
  function A(H) {
    const R = Math.sign(Number(H || 0));
    if (!R) return !1;
    const E = { ...t() }, C = Number(E.fov || Ti);
    return E.fov = B(C + R * Tm, Lm, Rm), n(E), u(), y("wheel", { deltaSign: R, fovBefore: C, fovAfter: E.fov }), !0;
  }
  function D(H) {
    return A(Math.sign(Vm(H)));
  }
  function O() {
    n({ yaw: 0, pitch: 0, fov: Ti }), g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, u();
  }
  return {
    state: g,
    startDrag: x,
    moveDrag: d,
    endDrag: w,
    stepInertia: N,
    applyWheel: A,
    applyWheelEvent: D,
    resetView: O
  };
}
function lc(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const ju = Math.PI / 180;
function Pi(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Hm(e) {
  const t = e || {}, n = Pi(t.yaw_deg, 0), r = Pi(t.pitch_deg, 0), a = Pi(t.roll_deg ?? t.rot_deg, 0), s = zs(Pi(t.hFOV_deg, 90), 1, 179), u = zs(Pi(t.vFOV_deg, 60), 1, 179), f = Math.tan(s * ju * 0.5) / Math.max(1e-6, Math.tan(u * ju * 0.5)), g = zs(f, 0.1, 10);
  return {
    yaw: n,
    pitch: r,
    roll: a,
    hfov: s,
    vfov: u,
    aspect: g
  };
}
const Td = 0.28;
function zm(e) {
  const t = e && typeof e == "object" ? e : {}, n = B(Number(t.x0 ?? 0), 0, 1), r = B(Number(t.y0 ?? 0), 0, 1), a = B(Number(t.x1 ?? 1), 0, 1), s = B(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(r, s),
    x1: Math.max(n, a),
    y1: Math.max(r, s)
  };
}
function jm(e, t = {}) {
  if (!e || typeof e != "object") return null;
  const n = String(e.asset_id || e.assetId || "").trim(), r = e.type === "external_image" || e.source_kind === "external_image", a = n || (r ? String(e.id || "").trim() : ""), s = t.includeHidden === !0, u = e.visible === !1, f = s && r && u;
  return {
    id: String(e.id || ""),
    assetId: a,
    zIndex: Number(e.z_index || e.zIndex || 0),
    yawDeg: Number(e.yaw_deg || e.yawDeg || 0),
    pitchDeg: Number(e.pitch_deg || e.pitchDeg || 0),
    rollDeg: Number(e.rot_deg ?? e.roll_deg ?? e.rollDeg ?? 0),
    hFovDeg: B(Number(e.hFOV_deg || e.hFovDeg || 30), 1, 179),
    vFovDeg: B(Number(e.vFOV_deg || e.vFovDeg || 30), 1, 179),
    crop: zm(e.crop),
    opacity: f ? Td : B(Number(e.opacity ?? 1), 0, 1),
    visible: f ? !0 : e.visible !== !1,
    external: r
  };
}
function Wo(e, t = {}) {
  var s;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], r = t.includeHidden === !0;
  return {
    stickers: n.map((u) => jm(u, { includeHidden: r })).filter((u) => u && (r || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: t.selectedId ?? ((s = e == null ? void 0 : e.active) == null ? void 0 : s.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function Ld(e, t, n = {}) {
  if (typeof t != "function") return [];
  const r = n.scene || Wo(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, s = [], u = /* @__PURE__ */ new Set();
  return r.stickers.forEach((f) => {
    var A;
    const g = String((f == null ? void 0 : f.assetId) || "").trim(), y = g || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!y || u.has(y)) return;
    const x = g ? a[g] : null, d = t(y, x, f);
    if (d instanceof HTMLImageElement && !d.complete) return;
    const w = Number((d == null ? void 0 : d.naturalWidth) || (d == null ? void 0 : d.videoWidth) || (d == null ? void 0 : d.width) || 0), N = Number((d == null ? void 0 : d.naturalHeight) || (d == null ? void 0 : d.videoHeight) || (d == null ? void 0 : d.height) || 0);
    !d || w <= 0 || N <= 0 || (u.add(y), s.push({
      assetId: y,
      source: d,
      revision: String(((A = n.revisionFor) == null ? void 0 : A.call(n, y, x, d)) ?? [
        y,
        Number(d.naturalWidth || d.videoWidth || d.width || 0),
        Number(d.naturalHeight || d.videoHeight || d.height || 0),
        String(d.currentSrc || d.src || "")
      ].join("|"))
    }));
  }), s;
}
function Uc(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: B(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function $m(e, t = 360) {
  return Uc(e, t);
}
function Nr(e) {
  const t = Hm(e || {});
  return {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yaw_deg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch_deg) || 0),
    rollDeg: Number((t == null ? void 0 : t.roll) ?? (e == null ? void 0 : e.roll_deg) ?? (e == null ? void 0 : e.rot_deg) ?? 0),
    hFovDeg: B(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179),
    vFovDeg: B(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179),
    aspect: Number((t == null ? void 0 : t.aspect) || 1)
  };
}
const { app: ut } = Ja;
function uc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Ja == null ? void 0 : Ja.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Ir = Math.PI / 180, _o = {}, Bm = { Nu: 24, Nv: 14 }, Um = 10, Gm = 120;
function Km() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ci(e) {
  var n, r, a, s, u;
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
    stylePos: String(((s = e.style) == null ? void 0 : s.position) || ""),
    styleTransform: String(((u = e.style) == null ? void 0 : u.transform) || "")
  };
}
function Wm() {
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
    .pano-node-preview-dom button:active {
      background: rgba(28,28,30,1) !important;
      transform: translateY(1px);
    }
  `, document.head.appendChild(e);
}
function hr(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (r, a) => {
    const s = Number(r), u = Number(a);
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
function Ym(e) {
  const t = hr(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function Rd(e, t, n) {
  Ym(e) && (e.size = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))]);
}
function fc(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Od(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function qm(e) {
  return lc(Od(e));
}
function Ar(e = null) {
  var s, u;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (s = ut == null ? void 0 : ut.canvas) == null ? void 0 : s.constructor) == null ? void 0 : u.name) || "");
  return [t, r, n, a].join("|");
}
function Fd(e, t = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Ar(t)
  } : String(e) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Ar(t)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Ar(t)
  };
}
const Gi = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(e) {
    !e || String(e.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(e), this.lastSignature || (this.lastSignature = Ar(e)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(e) {
    e && this.nodes.delete(e), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const e = this.nodes.values().next().value || null, t = Ar(e);
    t !== this.lastSignature && (this.lastSignature = t, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((r) => {
        if (!(!r || String(r.__panoPreviewMode || "") !== "stickers"))
          try {
            r.__panoRebindGeneration = this.generation, String(r.__panoStickersPath || "unknown"), this.generation, Vd(r).rebind(r.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function Vd(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = r === "cutout" ? "dom" : Fd(r, e).chosenPath, s = fc(e);
      this.activeBackend = s;
      const u = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, g = n.noPreview === !0;
      if (s === a && s !== "none" && u === r && f === g) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = g, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      s !== "none" && li(e, { keepMonitor: r === "stickers" }), Oy(e, { ...n, mode: r, __panoForcedPath: a }), this.activeBackend = fc(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      li(e, { keepMonitor: r === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      li(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function Xm(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function li(e, t = {}) {
  var r, a, s, u, f;
  if (!e) return;
  wo.unregister(e), Xm(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
  try {
    (r = e.__panoDomRestore) == null || r.call(e);
  } catch {
  }
  e.__panoDomRestore = null;
  try {
    (a = e.__panoLegacyRestore) == null || a.call(e);
  } catch {
  }
  e.__panoLegacyRestore = null;
  const n = e.__panoDomPreview;
  if (n) {
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
    Array.isArray(e.widgets) && (e.widgets = e.widgets.filter((g) => {
      if (g === (n == null ? void 0 : n.widget)) return !1;
      const y = String((g == null ? void 0 : g.name) || ""), x = String((g == null ? void 0 : g.type) || ""), d = uc();
      return !(y === d || x === d || y === "pano_preview" || x === "pano_preview" || y === "preview" && x === "pano_preview");
    }));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor, t.keepMonitor || Gi.unregister(e);
}
function Dr(e, t, n) {
  return { x: e, y: t, z: n };
}
function $u(e, t) {
  return Dr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Oa(e, t) {
  return Dr(e.x * t, e.y * t, e.z * t);
}
function js(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Bu(e, t) {
  return Dr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Fa(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Dr(e.x / t, e.y / t, e.z / t);
}
function wr(e, t) {
  const n = e * Ir, r = t * Ir, a = Math.cos(r);
  return Dr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Gc(e, t, n = 0) {
  const r = wr(e, t), a = Dr(0, 1, 0);
  let s = Bu(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = Dr(1, 0, 0)), s = Fa(s);
  let u = Fa(Bu(r, s));
  const f = n * Ir, g = Math.cos(f), y = Math.sin(f), x = $u(Oa(s, g), Oa(u, y)), d = $u(Oa(s, -y), Oa(u, g));
  return { fwd: r, right: Fa(x), up: Fa(d) };
}
function Zm(e, t = "#00ff00") {
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
function Jm(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = ra(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Kc(e) {
  var u, f;
  const t = Jm(e), n = String(((u = ra(e, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), r = Number(((f = ra(e, "coverage")) == null ? void 0 : f.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.bg === n && a.coverage === r)
    return a.parsed;
  const s = Zm(t, n);
  return s.coverage = r, e.__panoStateCache = { source: t, bg: n, coverage: r, parsed: s }, s;
}
function ra(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function Uu(e, t, n) {
  return !!n && e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
function Hd(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function Qm(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function zd(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function jd(e, t, n = null) {
  var a, s;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((a = r == null ? void 0 : r.isSubgraphNode) != null && a.call(r))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = u ? (s = r.resolveSubgraphOutputLink) == null ? void 0 : s.call(r, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = Qm(e == null ? void 0 : e.graph, n)), r;
}
function ey(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Wc(e, t = []) {
  const n = ey(e), r = [];
  return t.forEach((a) => {
    n.includes(String(a)) && r.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !r.includes(a) && r.push(a);
  }), r.length ? r : t;
}
function Gu(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function xo(e, t) {
  const n = Gu(e), r = Gu(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function ty(e, t = ["erp_image", "bg_erp"]) {
  var g;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = Wc(e, t).map((y) => n.findIndex((x) => String((x == null ? void 0 : x.name) || "") === String(y))).filter((y) => y >= 0), s = n.map((y, x) => ({ input: y, idx: x })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), u = [.../* @__PURE__ */ new Set([...a, ...s])], f = [];
  for (const y of u) {
    const x = jd(e, y);
    if ((x == null ? void 0 : x.id) != null) {
      f.push(String(x.id));
      continue;
    }
    const d = (g = n[y]) == null ? void 0 : g.link;
    if (d == null) continue;
    const w = Hd(e == null ? void 0 : e.graph, d), { originId: N } = zd(w);
    N != null && f.push(String(N));
  }
  return [...new Set(f)];
}
const wo = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Jt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((s) => {
        var f, g, y, x, d;
        if (!s) return;
        xo(r, s == null ? void 0 : s.id), ty(s, ["erp_image", "bg_erp"]).some((w) => xo(r, w)), hc(s), (g = (f = s.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || g.call(f), (y = s.setDirtyCanvas) == null || y.call(s, !0, !0), (d = (x = s.graph) == null ? void 0 : x.setDirtyCanvas) == null || d.call(x, !0, !0), String(s.__panoPreviewMode || ""), String(s.__panoPreviewMode || "");
      });
    }, Jt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Jt) != null && e.removeEventListener) || (Jt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function So(e) {
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
  const a = `/view?${n.toString()}`;
  return typeof ((s = Jt) == null ? void 0 : s.apiURL) == "function" ? Jt.apiURL(a) : a;
}
function ny(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function ry(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), s = r.join("/");
  return { filename: a, subfolder: s };
}
function iy(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function $d(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (ny(t)) return [t];
  const { filename: n, subfolder: r } = ry(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((s) => So({
    filename: n,
    subfolder: r,
    type: s
  }));
  return iy([...a, t]);
}
function ay(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? So({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function dc(e) {
  const t = ut == null ? void 0 : ut.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const a = n;
  if (t instanceof Map) {
    for (const s of t.keys())
      if (xo(s, a)) return t.get(s);
  } else {
    const s = Object.keys(t);
    for (const u of s)
      if (xo(u, a)) return t[u];
  }
  return null;
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
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return So({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = On(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : So(e);
}
function Bd(e, t) {
  var r;
  const n = String(e || "").trim();
  if (!n) return "";
  try {
    const a = typeof window < "u" && ((r = window == null ? void 0 : window.location) != null && r.href) ? window.location.href : "http://127.0.0.1/", s = new URL(n, a);
    return t > 0 && s.searchParams.set("pano_rev", String(t)), s.toString();
  } catch {
    const a = n.includes("?") ? "&" : "?";
    return t > 0 ? `${n}${a}pano_rev=${t}` : n;
  }
}
function oy(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (s) => {
    Array.isArray(s) && s.forEach((u) => t.push(u));
  }, a = (s, u = 0) => {
    !s || u > 3 || n.has(s) || typeof s == "object" && (n.add(s), r(s.images), a(s.output, u + 1), a(s.ui, u + 1), a(s.data, u + 1), a(s.result, u + 1));
  };
  return a(e, 0), t;
}
function sy(e, t) {
  try {
    const n = oy(t);
    let r = "";
    for (const a of n)
      if (r = On(a), r) break;
    r ? (e.__panoOwnOutputRev = Number(e.__panoOwnOutputRev || 0) + 1, e.__panoOwnOutputSrc = String(r || ""), Bd(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function cy(e, t = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  const r = String((e == null ? void 0 : e.__panoOwnOutputSrc) || "").trim(), a = dc(n), s = Array.isArray(a == null ? void 0 : a.images) ? a.images : [], u = Array.isArray(e == null ? void 0 : e.imgs) ? e.imgs : [], f = r ? [r, ...s, ...u] : [...s, ...u];
  let g = "";
  for (const H of f)
    if (g = On(H), g) break;
  if (!g) return null;
  const y = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), d = $d(g).map((H) => Bd(H, y));
  if (!d.length) return null;
  const w = `${g}|rev:${y}`;
  e.__panoOwnOutputImageCache || (e.__panoOwnOutputImageCache = {
    src: "",
    img: null,
    pendingSrc: "",
    pendingImg: null
  });
  const N = e.__panoOwnOutputImageCache;
  if (N.img && N.src === w) return N.img;
  if (N.pendingImg && N.pendingSrc === w)
    return N.img && (N.img.complete || N.img.naturalWidth || N.img.width) ? N.img : N.pendingImg;
  const A = new Image();
  let D = -1;
  const O = () => {
    if (D += 1, D >= d.length) {
      e.__panoOwnOutputImageCache === N && (N.pendingSrc = "", N.pendingImg = null);
      return;
    }
    A.src = d[D];
  };
  return A.onload = () => {
    var H;
    e.__panoOwnOutputImageCache === N && N.pendingImg === A && N.pendingSrc === w && (N.src = w, N.img = A, N.pendingSrc = "", N.pendingImg = null), t == null || t(), (H = e.setDirtyCanvas) == null || H.call(e, !0, !0);
  }, A.onerror = () => {
    if (D + 1 >= d.length) {
      e.__panoOwnOutputImageCache === N && N.pendingImg === A && (N.pendingSrc = "", N.pendingImg = null);
      return;
    }
    O();
  }, N.pendingSrc = w, N.pendingImg = A, O(), N.img && (N.img.complete || N.img.naturalWidth || N.img.width) ? N.img : A;
}
function ly(e, t = []) {
  var y, x;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = Wc(e, t).map((d) => n.findIndex((w) => String((w == null ? void 0 : w.name) || "") === String(d))).filter((d) => d >= 0), s = n.map((d, w) => ({ input: d, idx: w })).filter(({ input: d }) => String((d == null ? void 0 : d.type) || "").toUpperCase() === "IMAGE").map(({ idx: d }) => d), u = [.../* @__PURE__ */ new Set([...a, ...s])];
  for (const d of u) {
    const w = n[d], N = w == null ? void 0 : w.link;
    if (N == null) continue;
    const A = Hd(e.graph, N), { originId: D, originSlot: O } = zd(A);
    if (D == null) continue;
    const H = jd(e, d, D);
    if (!H) continue;
    const R = Number(O || 0), E = dc((H == null ? void 0 : H.id) ?? D), C = Array.isArray(E == null ? void 0 : E.images) ? E.images : [];
    if (C.length) {
      const re = [];
      R >= 0 && R < C.length && re.push(C[R]), re.push(...C);
      for (const we of re) {
        const k = On(we);
        if (k)
          return String((w == null ? void 0 : w.name) || ""), { src: k, sourceType: "nodeOutputs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    let $ = [];
    try {
      $ = typeof (ut == null ? void 0 : ut.getNodeImageUrls) == "function" ? ut.getNodeImageUrls(H) || [] : [];
    } catch {
      $ = [];
    }
    if (Array.isArray($) && $.length) {
      const re = [];
      R >= 0 && R < $.length && re.push($[R]), re.push(...$);
      for (const we of re) {
        const k = On(we);
        if (k)
          return String((w == null ? void 0 : w.name) || ""), { src: k, sourceType: "appNodeImageUrls", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const ie = Array.isArray(H == null ? void 0 : H.imgs) ? H.imgs : [];
    if (ie.length) {
      const re = [];
      R >= 0 && R < ie.length && re.push(ie[R]), re.push(...ie);
      for (const we of re) {
        const k = On(we);
        if (k)
          return String((w == null ? void 0 : w.name) || ""), { src: k, sourceType: "nodeImgs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const ae = (y = H == null ? void 0 : H.widgets) == null ? void 0 : y.find((re) => String((re == null ? void 0 : re.name) || "").toLowerCase() === "image");
    if (ae) {
      let re = On(ae.value);
      if (re && !re.includes("/") && !re.includes(":") && (H.comfyClass === "LoadImage" || H.type === "LoadImage") && (re = Jt.apiURL(`/view?filename=${encodeURIComponent(re)}&type=input&subfolder=`)), re)
        return String((w == null ? void 0 : w.name) || ""), { src: re, sourceType: "widget", inputName: String((w == null ? void 0 : w.name) || "") };
    }
  }
  const f = dc(e == null ? void 0 : e.id), g = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && g.push(...f.pano_input_images), Array.isArray((x = f == null ? void 0 : f.ui) == null ? void 0 : x.pano_input_images) && g.push(...f.ui.pano_input_images), g.length > 0)
    for (const d of g) {
      const w = On(d);
      if (w)
        return { src: w, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function uy(e, t = []) {
  const n = ly(e, t), r = String((n == null ? void 0 : n.src) || "").trim();
  if (!r) return null;
  const a = $d(r);
  if (!a.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = t.join("|") || "image", u = e.__panoLinkedInputImageCache.get(s);
  if (u && u.srcRaw === r && u.img) return u.img;
  const f = new Image(), g = { srcRaw: r, resolvedSrc: "", img: f };
  e.__panoLinkedInputImageCache.set(s, g);
  let y = -1;
  const x = () => {
    var w, N;
    if (y += 1, y >= a.length) {
      try {
        (N = (w = e.__panoLinkedInputImageCache) == null ? void 0 : w.delete) == null || N.call(w, s);
      } catch {
      }
      String((n == null ? void 0 : n.sourceType) || ""), a.length;
      return;
    }
    const d = a[y];
    g.resolvedSrc = d, f.src = d;
  };
  return f.onload = () => {
    var d;
    String(g.resolvedSrc || f.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (d = e.setDirtyCanvas) == null || d.call(e, !0, !0);
  }, f.onerror = (d) => {
    var w, N;
    if (y + 1 < a.length) {
      x();
      return;
    }
    try {
      (N = (w = e.__panoLinkedInputImageCache) == null ? void 0 : w.delete) == null || N.call(w, s);
    } catch {
    }
    String(g.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((d == null ? void 0 : d.type) || "error");
  }, x(), f;
}
function No(e, t = [], n = null) {
  const r = uy(e, t);
  return r ? (typeof n == "function" && (r.complete && (r.naturalWidth || r.width) || r.addEventListener("load", () => n(), { once: !0 })), r) : null;
}
function hc(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, e.__panoWrappedErpCache = null;
  }
}
function Ud(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function vr(e, t, n = "") {
  const r = Ud(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = a), !0) : r.isLoading ? a - Number(r.loadingSinceTs || 0) < Gm ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function gc(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), s = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), u = n / a, f = r / s, g = Math.min(u, f);
  return Number.isFinite(g) && g > 0 ? g : 1;
}
function Ku(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), s = Number((t == null ? void 0 : t.w) || 0), u = Number((t == null ? void 0 : t.h) || 0);
  if (s <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), g = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), s * 0.44)), y = Math.max(Math.round(34 * n), f + Math.round(14 * n)), x = r + (s - g) * 0.5, d = a + (u - y) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(x, d, g, y, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", x + g * 0.5, d + y * 0.5 + 0.5), e.restore();
}
function Va(e, t, n = "Open editor and add frame") {
  var a;
  const r = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  r && (r.textContent = String(n || "Open editor and add frame"), r.style.display = t ? "flex" : "none");
}
function fy(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  if (n) {
    const a = t.find((s) => String((s == null ? void 0 : s.id) || "") === n);
    if (a) return a;
  }
  return t[0] || null;
}
function Gd(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0), r = Number((e == null ? void 0 : e.y) || 0), a = Math.max(1, Number((e == null ? void 0 : e.w) || 0)), s = Math.max(1, Number((e == null ? void 0 : e.h) || 0)), u = Number(t) > 0 ? Number(t) : 1;
  let f = a, g = a / u;
  return g > s && (g = s, f = s * u), {
    x: n + (a - f) * 0.5,
    y: r + (s - g) * 0.5,
    w: f,
    h: g
  };
}
function dy(e, t, n, r = 0) {
  if (!e || !t || !n) return !1;
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), s = Math.max(1, Number(t.naturalHeight || t.height || 0));
  if (a <= 1 || s <= 1) return !1;
  const u = Gd(n, a / s);
  e.save(), e.imageSmoothingEnabled = !0, e.imageSmoothingQuality = "low", e.drawImage(t, u.x, u.y, u.w, u.h);
  const f = Math.max(0, Math.min(1, Number(r) || 0));
  return f > 0 && (e.fillStyle = `rgba(0,0,0,${f})`, e.fillRect(u.x, u.y, u.w, u.h)), e.restore(), !0;
}
function hy(e, t = null) {
  const r = Array.isArray(e.widgets) ? e.widgets : [];
  let a = 32;
  return r.forEach((s) => {
    var f;
    if (s === t || !s || s.hidden || s.type === "hidden") return;
    let u = 22;
    try {
      const g = typeof s.computeSize == "function" ? s.computeSize(((f = hr(e)) == null ? void 0 : f[0]) || 0) : null;
      Array.isArray(g) && Number.isFinite(Number(g[1])) && (u = Number(g[1]));
    } catch {
      u = 22;
    }
    a += u;
  }), a;
}
function oo(e) {
  const n = hy(e) + 2, r = 8, a = hr(e), s = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), u = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return u < 40 || s < 80 ? null : { x: r, y: n, w: s, h: u };
}
function Kd(e, t, n) {
  e.__panoPreviewImageCache || (e.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const r = String(t || "");
  if (!r) return null;
  const a = ay(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const s = window.__panoSharedImageCache.get(a);
  if (s != null && s.img)
    return e.__panoPreviewImageCache.set(r, { src: a, img: s.img }), s.img;
  const u = e.__panoPreviewImageCache.get(r);
  if (u && u.src === a) return u.img;
  const f = new Image();
  return f.src = a, f.onload = () => {
    var g, y, x;
    (y = (g = e.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || y.call(g), (x = e.setDirtyCanvas) == null || x.call(e, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: f }), e.__panoPreviewImageCache.set(r, { src: a, img: f }), f;
}
function gy(e, t) {
  const n = Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], r = e.__panoStickerSortCache;
  if ((r == null ? void 0 : r.source) === n && Array.isArray(r.sorted)) return r.sorted;
  const a = [...n].sort((s, u) => Number((s == null ? void 0 : s.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return e.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function Wd(e, t) {
  return Wo(t, {
    selectedId: null,
    hoveredId: null
  });
}
function Yd(e, t, n) {
  return Ld(t, (r, a) => Kd(e, r, a), { scene: n });
}
function py(e, t, n, r = 0.45) {
  const a = (e.x + t.x + n.x) / 3, s = (e.y + t.y + n.y) / 3, u = (f) => {
    const g = f.x - a, y = f.y - s, x = Math.hypot(g, y) || 1;
    return { x: f.x + g / x * r, y: f.y + y / x * r };
  };
  return [u(e), u(t), u(n)];
}
function Wu(e, t, n, r, a, s, u, f) {
  const g = n.x * (r.y - a.y) + r.x * (a.y - n.y) + a.x * (n.y - r.y);
  if (Math.abs(g) < 1e-6) return;
  const [y, x, d] = py(s, u, f, Number(e.__panoTriExpandPx || 0.45));
  e.save(), e.beginPath(), e.moveTo(y.x, y.y), e.lineTo(x.x, x.y), e.lineTo(d.x, d.y), e.closePath(), e.clip();
  const w = (s.x * (r.y - a.y) + u.x * (a.y - n.y) + f.x * (n.y - r.y)) / g, N = (s.x * (a.x - r.x) + u.x * (n.x - a.x) + f.x * (r.x - n.x)) / g, A = (s.x * (r.x * a.y - a.x * r.y) + u.x * (a.x * n.y - n.x * a.y) + f.x * (n.x * r.y - r.x * n.y)) / g, D = (s.y * (r.y - a.y) + u.y * (a.y - n.y) + f.y * (n.y - r.y)) / g, O = (s.y * (a.x - r.x) + u.y * (n.x - a.x) + f.y * (r.x - n.x)) / g, H = (s.y * (r.x * a.y - a.x * r.y) + u.y * (a.x * n.y - n.x * a.y) + f.y * (n.x * r.y - r.x * n.y)) / g;
  e.transform(w, D, N, O, A, H), e.drawImage(t, 0, 0), e.restore();
}
function qd(e, t, n, r) {
  const a = js(e, t.right), s = js(e, t.up), u = js(e, t.fwd);
  if (u <= 1e-4) return null;
  const f = s / u / r, g = a / u / r;
  return { x: n.x + n.w * 0.5 + g * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function Xd(e, t, n, r, a, s, u, f = 12, g = 9) {
  var ve;
  const y = B(Number(u.hFOV_deg || 30), 1, 179) * Ir, x = B(Number(u.vFOV_deg || 30), 1, 179) * Ir, d = Math.tan(y * 0.5), w = Math.tan(x * 0.5), N = u.crop || {}, A = B(Number(N.x0 ?? 0), 0, 1), D = B(Number(N.y0 ?? 0), 0, 1), O = B(Number(N.x1 ?? 1), 0, 1), H = B(Number(N.y1 ?? 1), 0, 1), R = Math.max(1e-4, O - A), E = Math.max(1e-4, H - D), C = Gc(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), $ = [], ie = [], ae = [], re = [];
  for (let J = 0; J <= g; J++) {
    const le = J / g, G = (1 - (D + le * E) * 2) * w;
    for (let fe = 0; fe <= f; fe++) {
      const ke = fe / f, Oe = ((A + ke * R) * 2 - 1) * d, Ye = C.fwd.x + C.right.x * Oe + C.up.x * G, ht = C.fwd.y + C.right.y * Oe + C.up.y * G, Ut = C.fwd.z + C.right.z * Oe + C.up.z * G, bt = Math.hypot(Ye, ht, Ut) || 1e-8, Gt = Ye / bt, sn = ht / bt, hn = Ut / bt, m = Gt * r.right.x + sn * r.right.y + hn * r.right.z, ft = Gt * r.up.x + sn * r.up.y + hn * r.up.z, T = Gt * r.fwd.x + sn * r.fwd.y + hn * r.fwd.z;
      if (T <= 1e-4)
        $[J] || ($[J] = []), ie[J] || (ie[J] = []), $[J][fe] = null, ie[J][fe] = null;
      else {
        const V = ft / T / a, q = m / T / a;
        $[J] || ($[J] = []), ie[J] || (ie[J] = []), $[J][fe] = n.x + n.w * 0.5 + q * n.h * 0.5, ie[J][fe] = n.y + n.h * 0.5 - V * n.h * 0.5;
      }
      ae[J] || (ae[J] = []), re[J] || (re[J] = []), ae[J][fe] = ke, re[J][fe] = le;
    }
  }
  const we = (ve = s.assets) == null ? void 0 : ve[u.asset_id], k = Kd(t, u.asset_id, we);
  if (!k || !k.complete || !k.naturalWidth) return;
  const ce = Number(k.naturalWidth || k.width || 1), ge = Number(k.naturalHeight || k.height || 1), xe = f < 10 ? 0.35 : 0.45;
  e.__panoTriExpandPx = xe;
  for (let J = 0; J < g; J++)
    for (let le = 0; le < f; le++) {
      const _e = $[J][le], G = ie[J][le], fe = $[J][le + 1], ke = ie[J][le + 1], Te = $[J + 1][le], Oe = ie[J + 1][le], Ye = $[J + 1][le + 1], ht = ie[J + 1][le + 1];
      if (_e === null || fe === null || Te === null || Ye === null) continue;
      const Ut = ae[J][le] * ce, bt = re[J][le] * ge, Gt = ae[J][le + 1] * ce, sn = re[J][le + 1] * ge, hn = ae[J + 1][le] * ce, m = re[J + 1][le] * ge, ft = ae[J + 1][le + 1] * ce, T = re[J + 1][le + 1] * ge;
      Wu(e, k, { x: Ut, y: bt }, { x: Gt, y: sn }, { x: ft, y: T }, { x: _e, y: G }, { x: fe, y: ke }, { x: Ye, y: ht }), Wu(e, k, { x: Ut, y: bt }, { x: ft, y: T }, { x: hn, y: m }, { x: _e, y: G }, { x: Ye, y: ht }, { x: Te, y: Oe });
    }
}
function my(e, t, n = null) {
  String(e.__panoPreviewMode || "stickers");
  const r = Kc(e), a = oo(e);
  if (!a) return;
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const s = Gc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(e.__panoPreviewView.fov || 100) * Ir * 0.5);
  t.save(), t.fillStyle = "#1a1a1e", t.strokeStyle = "#3f3f46", t.lineWidth = 1, t.beginPath(), t.roundRect(a.x, a.y, a.w, a.h, 8), t.fill(), t.stroke(), t.clip();
  const f = No(
    e,
    Wc(e, ["erp_image", "bg_erp"]),
    () => {
      var C, $, ie;
      ($ = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null || $.call(C), (ie = e.setDirtyCanvas) == null || ie.call(e, !0, !1);
    }
  ), g = !!(f && f.complete && (f.naturalWidth || f.width)), y = Qd(e), x = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, d = y || x, w = _o, N = Wd(e, r), A = Yd(e, r, N), D = Uc(e.__panoPreviewView, r == null ? void 0 : r.coverage);
  let O = !1;
  if (e.__panoRuntimeCore || (e.__panoRuntimeCore = pi()), g) {
    const C = Go({
      stateRevision: [
        "runtime_panorama_scene",
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0),
        Number((r == null ? void 0 : r.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(A) ? A.map((ae) => `${String((ae == null ? void 0 : ae.assetId) || "")}:${String((ae == null ? void 0 : ae.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: f,
      backgroundRevision: [
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0)
      ].join("|"),
      coverageDeg: Number((r == null ? void 0 : r.coverage) || 360) === 180 ? 180 : 360,
      scene: N,
      textures: A,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), ie = e.__panoRuntimeCore.syncState(C) ? e.__panoRuntimeCore.renderToTarget("runtime_preview", D, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    O = !!ie, ie && t.drawImage(ie, a.x, a.y, a.w, a.h);
  }
  const H = d ? 8 : 12, R = d ? 6 : 9, E = gy(e, r);
  if (!g || E.length === 0) {
    const C = gc(t == null ? void 0 : t.canvas, a);
    Zd(t, a, s, u, C);
  }
  !O && g && Mo(e, t, a, s, u, f, w), !O && E.length > 0 && E.forEach((C) => Xd(t, e, a, s, u, r, C, H, R)), t.restore();
}
function yy(e, t, n, r, a = "preview_scene", s = "") {
  const u = String(
    s || [
      String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
      Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
      Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
    ].join("|")
  );
  return Go({
    stateRevision: [
      a,
      u,
      Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
      Array.isArray(r) ? r.map((f) => `${String((f == null ? void 0 : f.assetId) || "")}:${String((f == null ? void 0 : f.revision) || "")}`).join(",") : ""
    ].join("|"),
    backgroundSource: e,
    backgroundRevision: u,
    coverageDeg: Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
    scene: n,
    textures: r,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
}
function so(e, t, n, r) {
  var s, u, f, g, y, x;
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
      const d = r.convertEventToCanvasOffset(t);
      if (Array.isArray(d) && d.length >= 2)
        return {
          x: Number(d[0]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[0]) || 0),
          y: Number(d[1]) - Number(((g = e == null ? void 0 : e.pos) == null ? void 0 : g[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[0]) || 0),
      y: Number(t.canvasY) - Number(((x = e == null ? void 0 : e.pos) == null ? void 0 : x[1]) || 0)
    };
  const a = vy(e, t, r);
  return a || null;
}
function by(e, t) {
  var d, w;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, s = (d = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : d.call(a), u = (t == null ? void 0 : t.ds) || ((w = ut == null ? void 0 : ut.canvas) == null ? void 0 : w.ds);
  if (!s || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const g = Array.isArray(u.offset) ? u.offset : [0, 0], y = (n - Number(s.left || 0)) / f - Number(g[0] || 0), x = (r - Number(s.top || 0)) / f - Number(g[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(x) ? null : { x: y, y: x };
}
function vy(e, t, n) {
  var a, s;
  const r = by(t, n || (ut == null ? void 0 : ut.canvas));
  return r ? {
    x: r.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: r.y - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[1]) || 0)
  } : null;
}
function Ha(e) {
  if (e.__panoLegacyPreviewHooked) return;
  e.__panoPreviewMode, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), hr(e), e.__panoLegacyPreviewHooked = !0, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "legacy_draw", Rd(e, 320, 180), ei(e);
  const t = e.onDrawForeground, n = e.onResize;
  e.onDrawForeground = function() {
    var w, N;
    const d = t ? t.apply(this, arguments) : void 0;
    try {
      const A = arguments[0];
      A && !((w = this.flags) != null && w.collapsed) && (r.stepInertia(performance.now()) && ((N = this.setDirtyCanvas) == null || N.call(this, !0, !1)), my(this, A, r));
    } catch {
    }
    return d;
  }, e.onResize = function() {
    var w;
    const d = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, ko(this, 150), (w = this.setDirtyCanvas) == null || w.call(this, !0, !0), eh(this, 220, null), d;
  };
  const r = Ko({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (d) => {
      e.__panoPreviewView = d;
    },
    getViewportSize: () => {
      const d = oo(e);
      return {
        w: Math.max(1, Number((d == null ? void 0 : d.w) || 0)),
        h: Math.max(1, Number((d == null ? void 0 : d.h) || 0))
      };
    },
    onInteraction: () => {
      var d;
      Jd(e), (d = e.setDirtyCanvas) == null || d.call(e, !0, !1);
    }
  }), a = e.onMouseDown;
  e.onMouseDown = function(d, w, N) {
    var A;
    try {
      if (!((A = this.flags) != null && A.collapsed)) {
        const D = so(this, d, w, N) || { x: 0, y: 0 }, O = hr(this), H = Number((O == null ? void 0 : O[0]) || 0), R = Number((O == null ? void 0 : O[1]) || 0);
        if (D.x >= H - 20 && D.y >= R - 20)
          return a ? a.apply(this, arguments) : void 0;
        const C = oo(this);
        if (Uu(D.x, D.y, C))
          return (d == null ? void 0 : d.button) === 0 && r.startDrag(D.x, D.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const s = e.onMouseMove;
  e.onMouseMove = function(d, w, N) {
    try {
      const A = so(this, d, w, N);
      if (r.state.drag.active) {
        if (typeof (d == null ? void 0 : d.buttons) == "number" && (d.buttons & 1) === 0)
          return r.endDrag(), !0;
        const D = A || r.state.drag;
        return r.moveDrag(D.x, D.y, "pano"), !0;
      }
    } catch {
    }
    return s ? s.apply(this, arguments) : void 0;
  };
  const u = e.onMouseUp;
  e.onMouseUp = function() {
    return r.state.drag.active ? (r.endDrag(), !0) : u ? u.apply(this, arguments) : void 0;
  };
  const f = e.onMouseLeave;
  e.onMouseLeave = function() {
    const d = f ? f.apply(this, arguments) : void 0;
    return r.state.drag.active && r.endDrag(), d;
  };
  const g = e.onMouseWheel;
  e.onMouseWheel = function(d, w, N) {
    var A, D;
    try {
      if ((A = this.flags) != null && A.collapsed) return g ? g.apply(this, arguments) : void 0;
      const O = so(this, d, w, N), H = oo(this);
      if (!O || !Uu(O.x, O.y, H)) return g ? g.apply(this, arguments) : void 0;
      const R = Number((d == null ? void 0 : d.deltaY) ?? (d == null ? void 0 : d.wheelDeltaY) ?? (typeof w == "number" ? w : 0));
      return r.applyWheel(Math.sign(R)) && ((D = this.setDirtyCanvas) == null || D.call(this, !0, !1)), typeof (d == null ? void 0 : d.preventDefault) == "function" && d.preventDefault(), typeof (d == null ? void 0 : d.stopPropagation) == "function" && d.stopPropagation(), !0;
    } catch {
      return g ? g.apply(this, arguments) : void 0;
    }
  };
  const y = e.onRemoved, x = () => {
    e.__panoLegacyPreviewHooked && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.onResize = n, e.onDrawForeground = t, e.onMouseDown = a, e.onMouseMove = s, e.onMouseUp = u, e.onMouseLeave = f, e.onMouseWheel = g, e.onRemoved = y, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoLegacyRestore = null);
  };
  e.__panoLegacyRestore = x, e.onRemoved = function() {
    return x(), Gi.unregister(this), wo.unregister(this), y ? y.apply(this, arguments) : void 0;
  };
}
function _y(e, t) {
  const n = No(
    e,
    ["erp_image", "bg_erp"],
    () => {
      var u, f;
      return (f = (u = e.__panoDomPreview) == null ? void 0 : u.requestDraw) == null ? void 0 : f.call(u);
    }
  ), r = Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0), a = Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0);
  if (r > 1 && a > 1)
    return {
      kind: "ERP_GLOBAL",
      width: Math.max(1, Math.round(r)),
      height: Math.max(1, Math.round(a))
    };
  const s = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: s,
    height: Math.max(1, Math.round(s * 0.5))
  };
}
function xy(e, t) {
  var y, x, d, w, N, A, D, O, H, R, E, C;
  const n = (x = (y = t == null ? void 0 : t.painting) == null ? void 0 : y.paint) == null ? void 0 : x.strokes, r = (w = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.mask) == null ? void 0 : w.strokes, a = Array.isArray(n) && n.length > 0, s = Array.isArray(r) && r.length > 0;
  if (!a && !s) return null;
  const u = _y(e, t), f = `${u.width}x${u.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = cc(u), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const g = {
    paint: n || null,
    mask: r || null,
    groups: ((N = t == null ? void 0 : t.painting) == null ? void 0 : N.groups) || null,
    rasterObjects: ((A = t == null ? void 0 : t.painting) == null ? void 0 : A.raster_objects) || null
  };
  return (((D = e.__panoPreviewPaintRevision) == null ? void 0 : D.paint) !== g.paint || ((O = e.__panoPreviewPaintRevision) == null ? void 0 : O.mask) !== g.mask || ((H = e.__panoPreviewPaintRevision) == null ? void 0 : H.groups) !== g.groups || ((R = e.__panoPreviewPaintRevision) == null ? void 0 : R.rasterObjects) !== g.rasterObjects) && (e.__panoPreviewPaintRevision = g, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    s ? "m1" : "m0",
    String(Array.isArray((E = t == null ? void 0 : t.painting) == null ? void 0 : E.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((C = t == null ? void 0 : t.painting) == null ? void 0 : C.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function wy(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, a) => Number((r == null ? void 0 : r.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function Sy(e, t) {
  const n = xy(e, t);
  if (!n) return null;
  const r = wy(t);
  return n.getErpTarget(r).displayPaint.canvas;
}
function Ny(e, t, n = null) {
  var f;
  const r = (f = t == null ? void 0 : t.painting_layer) == null ? void 0 : f.paint, a = On(r);
  if (!a) return null;
  e.__panoPaintingLayerImageCache || (e.__panoPaintingLayerImageCache = { src: "", img: null });
  const s = e.__panoPaintingLayerImageCache;
  if (s.img && s.src === a) return s.img;
  const u = new Image();
  return u.onload = () => {
    var g;
    n == null || n(), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0);
  }, u.onerror = () => {
    var g;
    ((g = e.__panoPaintingLayerImageCache) == null ? void 0 : g.img) === u && (e.__panoPaintingLayerImageCache = { src: "", img: null });
  }, u.src = a, e.__panoPaintingLayerImageCache = { src: a, img: u }, u;
}
function Yu(e, t) {
  var s, u;
  const n = e == null ? void 0 : e.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((s = t == null ? void 0 : t.painting) == null ? void 0 : s.raster_objects) && t.painting.raster_objects.length > 0) {
    const f = Ny(e, t, () => {
      var g, y;
      return (y = (g = e.__panoDomPreview) == null ? void 0 : g.requestDraw) == null ? void 0 : y.call(g);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((u = t == null ? void 0 : t.painting_layer) == null ? void 0 : u.revision) || f.currentSrc || f.src || "")
      };
  }
  const a = Sy(e, t);
  return a ? {
    source: a,
    revision: String(e.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function My(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function ky(e, t, n, r) {
  let a = (e == null ? void 0 : e[t]) || null;
  return (!a || a.width !== n || a.height !== r) && (a = document.createElement("canvas"), a.width = n, a.height = r, e[t] = a), a;
}
function Py(e, t, n, r, a, s) {
  if (!t || !n || !(r > 0) || !(a > 0)) return;
  const u = My(n);
  if (u.width === r && u.height === a) {
    t.drawImage(n, 0, 0, r, a);
    return;
  }
  const g = ky(e, s, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!g) {
    t.drawImage(n, 0, 0, r, a);
    return;
  }
  try {
    g.clearRect(0, 0, u.width, u.height), g.drawImage(n, 0, 0, u.width, u.height);
    const y = g.getImageData(0, 0, u.width, u.height).data, x = t.getImageData(0, 0, r, a), d = x.data, w = Math.max(0, u.width - 1), N = Math.max(0, u.height - 1);
    for (let A = 0; A < a; A += 1) {
      const D = (A + 0.5) * u.height / a - 0.5, O = B(Math.floor(D), 0, N), H = B(O + 1, 0, N), R = B(D - O, 0, 1);
      for (let E = 0; E < r; E += 1) {
        const C = (E + 0.5) * u.width / r - 0.5, $ = B(Math.floor(C), 0, w), ie = B($ + 1, 0, w), ae = B(C - $, 0, 1);
        let re = 0, we = 0, k = 0, ce = 0;
        const ge = (J, le, _e) => {
          const G = (le * u.width + J) * 4, fe = (y[G + 3] || 0) / 255;
          re += fe * _e, we += (y[G] || 0) / 255 * fe * _e, k += (y[G + 1] || 0) / 255 * fe * _e, ce += (y[G + 2] || 0) / 255 * fe * _e;
        };
        if (ge($, O, (1 - ae) * (1 - R)), ge(ie, O, ae * (1 - R)), ge($, H, (1 - ae) * R), ge(ie, H, ae * R), re <= 1e-6) continue;
        const xe = (A * r + E) * 4, ve = 1 - re;
        d[xe] = Math.round(B((we + d[xe] / 255 * ve) * 255, 0, 255)), d[xe + 1] = Math.round(B((k + d[xe + 1] / 255 * ve) * 255, 0, 255)), d[xe + 2] = Math.round(B((ce + d[xe + 2] / 255 * ve) * 255, 0, 255)), d[xe + 3] = 255;
      }
    }
    t.putImageData(x, 0, 0);
  } catch {
    t.drawImage(n, 0, 0, r, a);
  }
}
function qu(e, t, n, r) {
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), s = Math.max(1, Number(t.naturalHeight || t.height || 0)), f = `${String(t.currentSrc || t.src || "")}|${a}x${s}|${r}`;
  let g = e.__panoPreviewBgPaint;
  if (!g || g.__revKey !== f || g.width !== a || g.height !== s) {
    (!g || g.width !== a || g.height !== s) && (g = document.createElement("canvas"), g.width = a, g.height = s, e.__panoPreviewBgPaint = g);
    const y = g.getContext("2d");
    y.clearRect(0, 0, a, s), y.drawImage(t, 0, 0, a, s), Py(e, y, n, a, s, "__panoPreviewOverlayScratch"), g.__revKey = f;
  }
  return g;
}
function Cy(e, t, n, r = null) {
  const a = String(e.__panoPreviewMode || "stickers");
  Ud(e, a);
  const s = Kc(e), u = a === "cutout" ? cy(e, () => {
    var D, O;
    return (O = (D = e.__panoDomPreview) == null ? void 0 : D.requestDraw) == null ? void 0 : O.call(D);
  }) : null, f = !!(u && u.complete && (u.naturalWidth || u.width)), g = t.parentElement, y = 1, x = Math.max(1, Number((g == null ? void 0 : g.clientWidth) || t.clientWidth || 0)), d = Math.max(1, Number((g == null ? void 0 : g.clientHeight) || t.clientHeight || 0)), w = Math.max(64, Math.round(x * y)), N = Math.max(64, Math.round(d * y)), A = t.getContext("2d");
  if (A)
    if (a === "cutout") {
      const D = fy(s), O = No(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var ce, ge;
          return (ge = (ce = e.__panoDomPreview) == null ? void 0 : ce.requestDraw) == null ? void 0 : ge.call(ce);
        }
      ), H = !!(O && O.complete && (O.naturalWidth || O.width));
      (t.width !== w || t.height !== N) && (t.width = w, t.height = N);
      const R = { x: 0, y: 0, w, h: N }, E = f ? B(Number((u.naturalWidth || u.width) / Math.max(1, Number(u.naturalHeight || u.height || 1))), 0.05, 20) : H ? B(Number((O.naturalWidth || O.width) / Math.max(1, Number(O.naturalHeight || O.height || 1))), 0.05, 20) : 1, C = D ? Nr(D) : null, $ = B(Number((C == null ? void 0 : C.aspect) || E || 1), 0.05, 20), ie = Gd(R, $), ae = gc(t, R);
      A.setTransform(1, 0, 0, 1, 0, 0), A.fillStyle = "#070707", A.fillRect(0, 0, w, N);
      let re = "none", we = "Open editor and add frame", k = "";
      if (f)
        A.drawImage(u, ie.x, ie.y, ie.w, ie.h);
      else if (k = String((O == null ? void 0 : O.src) || ""), D)
        O && !H ? re = "loading" : H ? (re = "empty", we = "Open editor or run node") : (re = "empty", we = "Connect ERP image");
      else {
        if (H) {
          const ce = Yu(e, s), ge = ce != null && ce.source ? qu(e, O, ce.source, ce.revision || "") : O;
          dy(A, ge, R, 0.44);
        }
        re = "empty", we = "Open editor and add frame";
      }
      re === "loading" ? (Ku(A, ie, ae), Va(e, !1), vr(e, !0, k)) : re === "empty" ? (Va(e, !0, we), vr(e, !1, "")) : (Va(e, !1), vr(e, !1, ""));
    } else {
      Va(e, !1), (t.width !== w || t.height !== N) && (t.width = w, t.height = N);
      const D = { x: 0, y: 0, w, h: N }, O = gc(t, D);
      A.setTransform(1, 0, 0, 1, 0, 0), A.clearRect(0, 0, w, N), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const H = Gc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), R = Math.tan(Number(e.__panoPreviewView.fov || 100) * Ir * 0.5), E = No(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var ve, J;
          return (J = (ve = e.__panoDomPreview) == null ? void 0 : ve.requestDraw) == null ? void 0 : J.call(ve);
        }
      ), C = !!(E && E.complete && (E.naturalWidth || E.width));
      A.fillStyle = "#1a1a1e", A.fillRect(0, 0, w, N);
      const $ = Wd(e, s), ie = Yd(e, s, $), ae = Uc(e.__panoPreviewView, s == null ? void 0 : s.coverage), re = Yu(e, s), we = (re == null ? void 0 : re.source) || null, k = C && we ? qu(e, E, we, (re == null ? void 0 : re.revision) || "") : E, ce = k !== E ? String(k.__revKey || "") : E ? [
        String(E.currentSrc || E.src || ""),
        Number(E.naturalWidth || E.width || 0),
        Number(E.naturalHeight || E.height || 0)
      ].join("|") : "";
      e.__panoDomRuntimeCore || (e.__panoDomRuntimeCore = pi());
      let ge = !1;
      if (C) {
        const J = e.__panoDomRuntimeCore.syncState(
          yy(k, s, $, ie, "runtime_dom_scene", ce)
        ) ? e.__panoDomRuntimeCore.renderToTarget("runtime_preview", ae, {
          width: D.w,
          height: D.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        J && (A.drawImage(J, D.x, D.y, D.w, D.h), ge = !0);
      }
      const xe = $.stickers;
      if (C && ge)
        vr(e, !1, "");
      else if (C)
        Mo(e, A, D, H, R, k, _o), vr(e, !1, "");
      else if (we)
        Mo(e, A, D, H, R, we, _o), vr(e, !!E && !C, String((E == null ? void 0 : E.src) || ""));
      else {
        const ve = !!E && !C;
        vr(e, ve, String((E == null ? void 0 : E.src) || "")), ve && Ku(A, D, O);
      }
      if ((!C || xe.length === 0) && Zd(A, D, H, R, O), !ge && xe.length > 0) {
        const ve = Qd(e), J = r != null && r.state ? r.state.inertia.active || r.state.drag.active : !1, le = ve || J, _e = le ? 8 : 12, G = le ? 6 : 9;
        xe.forEach((fe) => Xd(A, e, D, H, R, s, fe, _e, G));
      } else if (!E || !C) {
        const ve = Math.max(14, Math.round(16 * O));
        A.fillStyle = "rgba(212,212,216,0.85)", A.font = `600 ${ve}px Plus Jakarta Sans, Geist, sans-serif`, A.textAlign = "center", A.fillText("Open editor to add stickers", w * 0.5, N * 0.5 + 24 * O);
      }
    }
}
function Mo(e, t, n, r, a, s, u = Bm) {
  const f = Kc(e), g = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = pi());
  const y = Go({
    stateRevision: [
      "runtime_bg_only",
      String((s == null ? void 0 : s.currentSrc) || (s == null ? void 0 : s.src) || ""),
      Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 0),
      Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 0),
      Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
    ].join("|"),
    backgroundSource: s,
    backgroundRevision: [
      String((s == null ? void 0 : s.currentSrc) || (s == null ? void 0 : s.src) || ""),
      Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 0),
      Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 0)
    ].join("|"),
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360,
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  if (!e.__panoBackgroundCore.syncState(y)) return;
  const d = e.__panoBackgroundCore.renderToTarget("runtime_preview", {
    mode: "panorama",
    yawDeg: Number(g.yaw || 0),
    pitchDeg: Number(g.pitch || 0),
    fovDeg: Number(g.fov || 100),
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
  }, {
    width: n.w,
    height: n.h,
    dpr: window.devicePixelRatio || 1,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  d && t.drawImage(d, n.x, n.y, n.w, n.h);
}
function Xu(e, t, n, r, a, s, u = 1) {
  let f = !1;
  e.strokeStyle = s, e.lineWidth = u, e.beginPath();
  for (const g of t) {
    const y = qd(g, n, r, a);
    if (!y) {
      f = !1;
      continue;
    }
    f ? e.lineTo(y.x, y.y) : (e.moveTo(y.x, y.y), f = !0);
  }
  e.stroke();
}
function Zd(e, t, n, r, a = 1) {
  e.save();
  const s = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const x = [];
    for (let d = -180; d <= 180; d += 15) x.push(wr(d, y));
    Xu(e, x, n, t, r, y === 0 ? u : s, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const x = [];
    for (let d = -89; d <= 89; d += 15) x.push(wr(y, d));
    Xu(e, x, n, t, r, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : s, y % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: wr(0, 0) },
    { name: "Right", dir: wr(90, 0) },
    { name: "Back", dir: wr(180, 0) },
    { name: "Left", dir: wr(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.32)";
  const g = Math.max(9, Math.round(11 * a));
  e.font = `500 ${g}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", f.forEach((y) => {
    const x = qd(y.dir, n, t, r);
    x && e.fillText(y.name, x.x, x.y + 20 * a);
  }), e.restore();
}
function Ay(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function Jd(e) {
  const t = Ay(e);
  t.dragging = !1, t.hqFrames = Um;
}
function ko(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function Qd(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function Iy(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function Dy(e, t, n = 20) {
  var u;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (u = t.getBoundingClientRect) == null ? void 0 : u.call(t);
  if (!r) return !1;
  const a = Number(e.clientX) - Number(r.left || 0), s = Number(e.clientY) - Number(r.top || 0);
  return a >= r.width - n && s >= r.height - n;
}
function qr(e, t) {
  return Dy(e, t) ? !1 : (Iy(e), !0);
}
function Ey() {
  var n;
  const e = (n = ut == null ? void 0 : ut.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Ty(e) {
  var n;
  if (!e) return;
  const t = (n = ut == null ? void 0 : ut.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function Ly(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0) return;
  const r = hr(e), a = Number((r == null ? void 0 : r[0]) || 0), s = Number((r == null ? void 0 : r[1]) || 0);
  if (!Number.isFinite(a) || !Number.isFinite(s) || a >= t && s >= n) return;
  const u = [Math.max(t, a), Math.max(n, s)];
  try {
    typeof e.setSize == "function" ? e.setSize(u) : e.size = u, e.__panoStandaloneBootSized = !0;
  } catch (f) {
    String((f == null ? void 0 : f.message) || f || "unknown");
  }
}
function Ry(e, t = 0, n = null, r = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var s, u;
    e.__panoBootMinHeightTimer = null, (s = e == null ? void 0 : e.__panoDomPreview) != null && s.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Zu(e, t = null, n = 0) {
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(0, Number(n || 0)) : 0;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(0, Number(n || 0)) : "auto";
    },
    afterResize() {
      e.__panoUserResized = !0, ko(e, 150), t == null || t(), eh(e, 180, t);
    }
  };
}
function eh(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function ei(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function Oy(e, t = {}) {
  var _e;
  const n = t.__allowStandalone === !0, r = qm(e);
  if (r && !n) {
    Od(e);
    return;
  }
  r && Ly(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", wo.register(e);
  const a = e.__panoPreviewMode === "stickers", s = t.__noLegacyFallback === !0, u = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), a || Gi.unregister(e);
  const f = String(t.__panoForcedPath || "").trim(), g = a ? Fd(e.__panoPreviewMode, e) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Ar(e),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (f === "dom" || f === "legacy_draw") && (g.chosenPath = f, g.reason = "controller_target_backend");
  const y = a ? g.chosenPath : "dom", x = g.signature || Ar(e);
  if (Number(e.__panoRebindGeneration || 0), fc(e), e == null || e.id, e.__panoPreviewMode, g.reason, g.frontendVersionRaw, e.addDOMWidget, hr(e), e.__panoFrontendSig = x, e.__panoStickersPath = y, a && Gi.register(e), a && y === "legacy_draw") {
    if (s) return;
    li(e, { keepMonitor: !0 }), Ha(e);
    return;
  }
  if ((_e = e.__panoDomPreview) != null && _e.widget) return;
  if (e.__panoLegacyPreviewHooked && li(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function") {
    a && !s && Ha(e);
    return;
  }
  const d = t.noPreview === !0, w = a || d ? 0 : 56, N = document.createElement("div");
  if (Wm(), N.className = "pano-node-preview-dom", N.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), d && N.classList.add("pano-node-preview--no-preview"), N.setAttribute("data-capture-wheel", "true"), N.setAttribute("tabindex", "-1"), N.style.cssText = [
    "width:100%",
    d ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), d) {
    const G = e.addDOMWidget(uc(), "preview", N, Zu(e, null));
    ei(e), e.__panoDomPreview = { widget: G, root: N, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const A = document.createElement("div");
  A.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const D = document.createElement("canvas");
  D.style.cssText = [
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
  const O = document.createElement("div");
  O.style.cssText = [
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
  ].join(";"), O.textContent = "Open editor and add frame", A.appendChild(D), A.appendChild(O), N.appendChild(A), Rd(e, 120, 120), ei(e);
  let H = null;
  try {
    Ry(e, w, () => {
      var G, fe;
      return (fe = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : fe.call(G);
    }), H = e.addDOMWidget(
      uc(),
      "preview",
      N,
      Zu(e, () => {
        var G, fe;
        return (fe = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : fe.call(G);
      }, w)
    );
  } catch {
    a && Ha(e);
    return;
  }
  const R = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, E = () => {
    R.needsDraw = !0, R.raf || (R.raf = requestAnimationFrame(ie));
  }, C = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    ko(e, 150), E();
  }) : null;
  C == null || C.observe(A);
  const $ = () => {
    if (!a || e.__panoDomProbePending) return;
    e.__panoDomProbePending = !0;
    const G = 3, fe = (ke) => {
      requestAnimationFrame(() => {
        var Oe;
        const Te = !!(N != null && N.isConnected && (A != null && A.isConnected) && (D != null && D.isConnected) && Number(A.clientHeight || 0) > 0 && Number(D.clientHeight || 0) > 0);
        if (!Te && ke < G) {
          fe(ke + 1);
          return;
        }
        if (e.__panoDomProbePending = !1, e.__panoPreviewMode, Number((A == null ? void 0 : A.clientHeight) || 0), Number((D == null ? void 0 : D.clientHeight) || 0), !Te) {
          if (s) {
            e.__panoPreviewMode, Number((A == null ? void 0 : A.clientHeight) || 0), Number((D == null ? void 0 : D.clientHeight) || 0);
            return;
          }
          li(e, { keepMonitor: !0 }), e.__panoStickersPath = "legacy_draw_auto", Ha(e), (Oe = e.setDirtyCanvas) == null || Oe.call(e, !0, !0);
        }
      });
    };
    fe(1);
  }, ie = (G) => {
    var ke, Te, Oe;
    R.raf = 0;
    const fe = ae.stepInertia(G);
    (R.needsDraw || fe) && (R.needsDraw = !1, (ke = e.flags) != null && ke.collapsed || Cy(e, D, null, ae), (Te = e.setDirtyCanvas) == null || Te.call(e, !0, !1)), (fe || R.needsDraw) && (R.raf = requestAnimationFrame(ie)), Km() && (!e.__panoDebugLastTs || G - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = G, e.__panoPreviewMode, hr(e), Ci(N), Ci(A), Ci(D), Ci(N.parentElement), Ci((Oe = N.parentElement) == null ? void 0 : Oe.parentElement), Number(D.width || 0), Number(D.height || 0), void 0);
  }, ae = Ko({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (G) => {
      e.__panoPreviewView = G;
    },
    onInteraction: () => {
      E();
    }
  });
  D.addEventListener("pointerdown", (G) => {
    var fe, ke;
    qr(G, A) && u && G.button === 0 && ((fe = N.focus) == null || fe.call(N), (ke = D.setPointerCapture) == null || ke.call(D, G.pointerId), D.style.cursor = "grabbing", ae.startDrag(G.clientX, G.clientY, G.pointerId));
  }), D.addEventListener("pointermove", (G) => {
    !u || !ae.state.drag.active || (qr(G, A), ae.moveDrag(G.clientX, G.clientY, "pano"));
  });
  const re = (G) => {
    var fe;
    !u || !ae.state.drag.active || (qr(G, A), (fe = D.releasePointerCapture) == null || fe.call(D, G.pointerId), D.style.cursor = "grab", ae.endDrag(), Jd(e), E());
  };
  D.addEventListener("pointerup", re), D.addEventListener("pointercancel", re), D.addEventListener("pointerleave", (G) => {
    ae.state.drag.active && re(G);
  });
  const we = (G) => {
    var ke, Te, Oe;
    if (!qr(G, A) || !u) return;
    const fe = Ey();
    ae.applyWheelEvent(G) && E(), (ke = G.preventDefault) == null || ke.call(G), (Te = G.stopPropagation) == null || Te.call(G), (Oe = G.stopImmediatePropagation) == null || Oe.call(G), requestAnimationFrame(() => {
      var Ye, ht;
      Ty(fe), (ht = (Ye = ut == null ? void 0 : ut.canvas) == null ? void 0 : Ye.setDirty) == null || ht.call(Ye, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((G) => {
    A.addEventListener(G, we, { passive: !1, capture: !0 }), D.addEventListener(G, we, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((G) => {
    D.addEventListener(G, (fe) => qr(fe, A)), A.addEventListener(G, (fe) => qr(fe, A));
  });
  const k = ra(e, "state_json");
  if (k && !k.__panoPreviewPatchedCb) {
    k.__panoPreviewPatchedCb = !0;
    const G = k.callback;
    k.callback = (fe) => {
      const ke = G ? G(fe) : void 0;
      return E(), ke;
    };
  }
  const ce = ra(e, "bg_color");
  if (ce && !ce.__panoPreviewPatchedCb) {
    ce.__panoPreviewPatchedCb = !0;
    const G = ce.callback;
    ce.callback = (fe) => {
      const ke = G ? G(fe) : void 0;
      return E(), ke;
    };
  }
  const ge = e.onRemoved, xe = e.onResize, ve = e.onExecuted;
  e.onExecuted = function(G) {
    sy(e, G), hc(e), ei(e), E();
    const fe = ve ? ve.apply(this, arguments) : void 0;
    return ei(e), fe;
  };
  const J = e.onConnectionsChange;
  e.onConnectionsChange = function() {
    return hc(e), ei(e), E(), J ? J.apply(this, arguments) : void 0;
  }, e.onResize = function() {
    var fe;
    const G = xe ? xe.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, ko(this, 150), E(), (fe = this.setDirtyCanvas) == null || fe.call(this, !0, !1), G;
  }, e.onRemoved = function() {
    return le(), Gi.unregister(this), wo.unregister(this), ge ? ge.apply(this, arguments) : void 0;
  };
  const le = () => {
    var G;
    R.raf && cancelAnimationFrame(R.raf), (G = C == null ? void 0 : C.disconnect) == null || G.call(C), e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize = xe, e.onExecuted = ve, e.onConnectionsChange = J, e.onRemoved = ge;
  };
  e.__panoDomRestore = le, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoDomPreview = { widget: H, root: N, canvas: D, requestDraw: E, state: R, emptyHintEl: O }, $(), E();
}
function Ju(e, t = {}) {
  Vd(e).attach({
    ...t,
    mode: "cutout"
  });
}
const Po = Math.PI / 180;
function Er(e, t, n) {
  return { x: e, y: t, z: n };
}
function Qu(e, t) {
  return Er(e.x + t.x, e.y + t.y, e.z + t.z);
}
function za(e, t) {
  return Er(e.x * t, e.y * t, e.z * t);
}
function ef(e, t) {
  return Er(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function ja(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Er(e.x / t, e.y / t, e.z / t);
}
function Fy(e, t) {
  const n = e * Po, r = t * Po, a = Math.cos(r);
  return Er(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Vy(e, t, n = 0) {
  const r = Fy(e, t), a = Er(0, 1, 0);
  let s = ef(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = Er(1, 0, 0)), s = ja(s);
  const u = ja(ef(r, s)), f = n * Po, g = Math.cos(f), y = Math.sin(f), x = Qu(za(s, g), za(u, y)), d = Qu(za(s, -y), za(u, g));
  return { fwd: r, right: ja(x), up: ja(d) };
}
const $a = 140, Hy = 180, tf = 40, $s = 10;
function nf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function rf(e, t) {
  const n = nf(e), r = nf(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function af(e) {
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
  const a = `/view?${n.toString()}`;
  return typeof ((s = Jt) == null ? void 0 : s.apiURL) == "function" ? Jt.apiURL(a) : a;
}
function Ki(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Ki(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return af({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = Ki(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : af(e);
}
function of(e) {
  var a;
  const t = (a = un) == null ? void 0 : a.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const s of t.keys())
      if (rf(s, n)) return t.get(s);
  } else
    for (const s of Object.keys(t))
      if (rf(s, n)) return t[s];
  return null;
}
function zy(e, t = "erp_image") {
  var A, D, O, H, R, E, C, $, ie, ae, re, we;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = null;
  const a = n.find((k) => String((k == null ? void 0 : k.name) || "") === String(t));
  if ((a == null ? void 0 : a.link) != null && (r = a.link), r == null) {
    const k = n.find((ce) => String((ce == null ? void 0 : ce.type) || "").toUpperCase() === "IMAGE" && (ce == null ? void 0 : ce.link) != null);
    (k == null ? void 0 : k.link) != null && (r = k.link);
  }
  if (r == null) return "";
  const s = ((D = (A = e == null ? void 0 : e.graph) == null ? void 0 : A.links) == null ? void 0 : D[r]) || ((R = (H = (O = un) == null ? void 0 : O.graph) == null ? void 0 : H.links) == null ? void 0 : R[r]);
  if (!s) return "";
  const u = Number(s.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = ($ = (C = (E = un) == null ? void 0 : E.graph) == null ? void 0 : C.getNodeById) == null ? void 0 : $.call(C, u), g = of(u), y = of(e == null ? void 0 : e.id), x = [
    g == null ? void 0 : g.images,
    (ie = g == null ? void 0 : g.ui) == null ? void 0 : ie.pano_input_images,
    g == null ? void 0 : g.pano_input_images,
    (ae = y == null ? void 0 : y.ui) == null ? void 0 : ae.pano_input_images,
    y == null ? void 0 : y.pano_input_images
  ];
  for (const k of x)
    if (Array.isArray(k))
      for (const ce of k) {
        const ge = Ki(ce);
        if (ge) return ge;
      }
  let d = [];
  try {
    d = typeof ((re = un) == null ? void 0 : re.getNodeImageUrls) == "function" ? un.getNodeImageUrls(f) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const k of d) {
      const ce = Ki(k);
      if (ce) return ce;
    }
  if (f) {
    const k = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const ce of k) {
      const ge = Ki(ce);
      if (ge) return ge;
    }
  }
  const w = (we = f == null ? void 0 : f.widgets) == null ? void 0 : we.find((k) => String((k == null ? void 0 : k.name) || "").toLowerCase() === "image"), N = String((w == null ? void 0 : w.value) || "").trim();
  return N ? Jt.apiURL(`/view?filename=${encodeURIComponent(N)}&type=input&subfolder=`) : "";
}
function sf(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function cf(e, t, n, r, a, s) {
  var d, w, N;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !s || !s.complete || !(s.naturalWidth || s.width) || n <= 1 || r <= 1) {
    sf(t, n, r);
    return;
  }
  const u = Vy(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * Po * 0.5), g = Number(((N = (w = (d = e == null ? void 0 : e.widgets) == null ? void 0 : d.find) == null ? void 0 : w.call(d, (A) => (A == null ? void 0 : A.name) === "coverage")) == null ? void 0 : N.value) || 360) === 180 ? 180 : 360;
  e.__panoStandaloneCore || (e.__panoStandaloneCore = pi());
  const y = Go({
    stateRevision: [
      "standalone_preview_scene",
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0),
      g
    ].join("|"),
    backgroundSource: s,
    backgroundRevision: [
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0)
    ].join("|"),
    coverageDeg: g,
    scene: Wo(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!e.__panoStandaloneCore.syncState(y) && (() => {
    const A = e.__panoStandaloneCore.renderToTarget(
      "preview_node",
      $m(a, g),
      { width: n, height: r, dpr: window.devicePixelRatio || 1 }
    );
    return A ? (t.drawImage(A, 0, 0, n, r), !0) : !1;
  })() || (Mo(e, t, { x: 0, y: 0, w: n, h: r }, u, f, s, _o), sf(t, n, r));
}
function lf(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class jy {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = Ko({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Rt(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: B(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: B(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var a, s, u, f;
        const r = (s = (a = this.canvas) == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : s.call(a);
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
    var r, a, s;
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
    const n = ((s = (a = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : a.find) == null ? void 0 : s.call(a, (u) => (u == null ? void 0 : u.name) === "coverage")) || null;
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
      const a = t.getLegacyPreviewRect();
      return n.save(), n.fillStyle = "rgba(18,18,22,0.92)", n.strokeStyle = "rgba(82,82,89,1)", n.lineWidth = 1, n.beginPath(), n.roundRect(a.x, a.y, a.w, a.h, 8), n.fill(), n.stroke(), n.fillStyle = "rgba(236,236,242,0.92)", n.font = "600 12px sans-serif", n.textAlign = "center", n.textBaseline = "middle", n.fillText(t.errorText, a.x + a.w * 0.5, a.y + a.h * 0.5), n.restore(), r;
    };
  }
  attachDom() {
    var t;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--stickers", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${$a}px`,
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
          return $a;
        },
        getHeight() {
          return $a;
        },
        onRemove: () => this.teardown(),
        afterResize: () => this.requestDraw()
      };
      if (this.widget = this.node.addDOMWidget("preview", "preview", this.root, n), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (a) => {
          const s = r ? r(a) || {} : {};
          return {
            ...s,
            minHeight: Math.max($a, Number(s.minHeight || 0)),
            minWidth: Math.max(Hy, Number(s.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.onResizeDom(), this.logProbeFrames();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  bindDomInput(t, n) {
    t.addEventListener("pointerdown", (a) => {
      var s, u, f;
      a.button === 0 && ((s = n.focus) == null || s.call(n, { preventScroll: !0 }), (u = t.setPointerCapture) == null || u.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (f = a.stopImmediatePropagation) == null || f.call(a));
    }), t.addEventListener("pointermove", (a) => {
      var s;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (s = a.stopImmediatePropagation) == null || s.call(a));
    });
    const r = (a) => {
      var s, u;
      this.controller.state.drag.active && ((s = t.releasePointerCapture) == null || s.call(t, a.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (u = a.stopImmediatePropagation) == null || u.call(a));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (a) => {
      var s;
      this.controller.applyWheelEvent(a), a.preventDefault(), a.stopPropagation(), (s = a.stopImmediatePropagation) == null || s.call(a);
    }, { passive: !1, capture: !0 });
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
      const s = t.getLegacyPreviewRect();
      return lf(a.x, a.y, s) ? (t.legacyDragPointer = !0, t.controller.startDrag(a.x - s.x, a.y - s.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var u;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const a = t.localPoint(r);
      if (!a) return !0;
      const s = t.getLegacyPreviewRect();
      return t.controller.moveDrag(a.x - s.x, a.y - s.y, "pano"), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, a) {
      var y, x, d, w, N, A;
      const s = so(this, n, r, a), u = t.getLegacyPreviewRect();
      if (!s || !lf(s.x, s.y, u))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof r == "number" ? r : 0));
      Number(((y = t.view) == null ? void 0 : y.fov) || 100);
      const g = t.controller.applyWheel(Math.sign(f));
      return Number(((x = t.view) == null ? void 0 : x.fov) || 100), g && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (w = n == null ? void 0 : n.preventDefault) == null || w.call(n), (N = n == null ? void 0 : n.stopPropagation) == null || N.call(n), (A = n == null ? void 0 : n.stopImmediatePropagation) == null || A.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, a, s, u;
    const t = Math.max(80, Number(((a = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : a[0]) || 0) - $s * 2), n = Math.max(60, Number(((u = (s = this.node) == null ? void 0 : s.size) == null ? void 0 : u[1]) || 0) - tf - $s);
    return { x: $s, y: tf, w: t, h: n };
  }
  drawLegacy(t) {
    var r, a;
    if (!t || (a = (r = this.node) == null ? void 0 : r.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (t.save(), t.translate(n.x, n.y), cf(this.node, t, n.w, n.h, this.view, this.img), this.errorText && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), t.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const t = this.root.getBoundingClientRect(), n = window.devicePixelRatio || 1, r = Math.max(1, Math.round(t.width * n)), a = Math.max(1, Math.round(t.height * n));
    (this.canvas.width !== r || this.canvas.height !== a) && (this.canvas.width = r, this.canvas.height = a, this.requestDraw());
  }
  refreshImage() {
    const t = zy(this.node, this.imageInputName);
    if (!t) {
      this.img = null, this.imgSrc = "", this.requestDraw();
      return;
    }
    if (t === this.imgSrc && this.img) return;
    this.imgSrc = t;
    const n = new Image();
    n.onload = () => {
      this.imgSrc === t && (this.img = n, this.requestDraw());
    }, n.onerror = () => {
      this.imgSrc === t && (this.img = null, this.requestDraw());
    }, n.src = t;
  }
  requestDraw() {
    var t, n;
    if (this.needsDraw = !0, this.inTick) {
      this.queuedDuringTick = !0;
      return;
    }
    this.rafId || (this.rafId = requestAnimationFrame(this.tick)), this.canvas || (n = (t = this.node).setDirtyCanvas) == null || n.call(t, !0, !1);
  }
  tick(t = performance.now()) {
    var a, s;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (cf(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (s = (a = this.node).setDirtyCanvas) == null || s.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  logProbeFrames() {
    if (!this.root || !this.canvas) return;
    let t = 0;
    const n = () => {
      !this.root || !this.canvas || t >= 3 || (t += 1, requestAnimationFrame(n));
    };
    requestAnimationFrame(n);
  }
  teardown() {
    var n, r, a, s, u, f, g, y, x, d, w;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || a.call(r), this.resizeObserver = null;
    try {
      (u = (s = this.root) == null ? void 0 : s.remove) == null || u.call(s);
    } catch {
    }
    if (Array.isArray((f = this.node) == null ? void 0 : f.widgets) && this.widget)
      try {
        this.node.widgets = this.node.widgets.filter((N) => N !== this.widget);
      } catch {
      }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((x = (y = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : y.find) == null ? void 0 : x.call(y, (N) => (N == null ? void 0 : N.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), (w = (d = this.node.__panoStandaloneCore) == null ? void 0 : d.dispose) == null || w.call(d), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function $y(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new jy(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function By(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(t)}`;
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
function th(e) {
  return !!(e != null && e.prototype);
}
function pc(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function Uy(e, t = {}) {
  th(e) || $y(e, {
    ...t,
    onOpen: pc(e, t.onOpen)
  });
}
function Gy(e, t = {}) {
  if (!th(e)) {
    Ju(e, {
      ...t,
      onOpen: pc(e, t.onOpen)
    });
    return;
  }
  By(e, "cutout_preview", (n) => {
    Ju(n, {
      ...t,
      onOpen: pc(n, t.onOpen)
    });
  });
}
const nn = {
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
}, Gn = "pen";
function uf(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function Ky(e = 80, t = null, n = 8) {
  const r = [];
  let a = -1;
  const s = Math.max(1, Number(e || 80)), u = Math.max(1, Number(n || 8));
  function f(y) {
    if (r.splice(0, r.length), a = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((d) => {
      r.push(String(d || ""));
    }), !r.length)) return;
    const x = Number(y.index);
    Number.isInteger(x) ? x === -1 ? a = -1 : a = Math.max(0, Math.min(r.length - 1, x)) : a = r.length - 1;
  }
  function g(y) {
    r[a] !== y && (r.splice(a + 1), r.push(y), r.length > s && r.shift(), a = r.length - 1);
  }
  return f(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(y) {
      g(String(y || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const y = a - 1;
      return y < 0 || y >= r.length ? null : (a = y, r[a]);
    },
    redo() {
      const y = a + 1;
      return y < 0 || y >= r.length ? null : (a = y, r[a]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return a;
    },
    serialize() {
      const y = r.length, x = Math.max(0, y - u), d = a >= 0 ? Math.max(0, Math.min(a, x)) : x, w = r.slice(d, d + u), N = a < 0 ? -1 : Math.max(-1, Math.min(w.length - 1, a - d));
      return {
        version: 1,
        entries: w,
        index: N
      };
    },
    hydrate: f
  };
}
function et(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function Wy() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Yy(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const a = String(r.actionGroupId || r.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const s = et(r.z_index ?? r.zIndex, t.length);
    t.push({
      id: String(r.id || a),
      type: "strokeGroup",
      actionGroupId: a,
      z_index: Math.max(0, Math.round(s ?? t.length)),
      locked: r.locked === !0
    });
  }
  return t;
}
function qy(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Xy(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = et(e.t, 0), r = et(e.widthScale, null), a = et(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const s = et(e.u, null), u = et(e.v, null);
    if (s == null || u == null) return null;
    const f = {
      targetKind: "ERP_GLOBAL",
      u: (s % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, u)),
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  if (t.kind === "FRAME_LOCAL") {
    const s = et(e.u, null), u = et(e.v, null);
    if (s == null || u == null) return null;
    const f = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: s,
      v: u,
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  return null;
}
function Ba(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const a of e) {
    const s = Xy(a, t);
    if (!s) return null;
    r.push(s);
  }
  return r.length >= n ? r : null;
}
function Zy(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const g = Ba(e.points, t, 3);
    return g ? { geometryKind: a, points: g } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const s = Ba(e.points, t, 1);
  if (!s) return null;
  const u = Ba(e.rawPoints, t, 1), f = Ba(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: s,
    rawPoints: u || s.map((g) => ({ ...g })),
    processedPoints: f || s.map((g) => ({ ...g }))
  };
}
function Jy(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = qy(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), a = Zy(e.geometry, n, r, t === "paint");
  if (!a) return null;
  const s = et(e.size, null), u = et(e.opacity, null);
  if (s == null || u == null) return null;
  const f = String(e.id || "").trim(), g = String(e.actionGroupId || "").trim();
  if (!f || !g) return null;
  const y = et(e.radiusValue, null), x = String(e.radiusModel || "").trim() || null;
  let d = null;
  if (t === "paint") {
    const w = e.color;
    if (!w || typeof w != "object") return null;
    d = {
      r: Math.max(0, Math.min(1, et(w.r, 0))),
      g: Math.max(0, Math.min(1, et(w.g, 0))),
      b: Math.max(0, Math.min(1, et(w.b, 0))),
      a: Math.max(0, Math.min(1, et(w.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: g,
    targetSpace: n,
    layerKind: t,
    toolKind: r,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, s),
    opacity: Math.max(0, Math.min(1, u)),
    hardness: et(e.hardness, null),
    flow: et(e.flow, null),
    spacing: et(e.spacing, null),
    createdAt: Math.trunc(et(e.createdAt, 0)),
    color: d,
    radiusModel: x,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: a
  };
}
function ff(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const a = Jy(r, t);
    a && n.strokes.push(a);
  }
  return n;
}
function Qy(e) {
  if (!e || typeof e != "object") return null;
  const t = et(e.u0, null), n = et(e.v0, null), r = et(e.u1, null), a = et(e.v1, null);
  if (t == null || n == null || r == null || a == null) return null;
  const s = (f) => Math.max(0, Math.min(1, f)), u = { u0: s(t), v0: s(n), u1: s(r), v1: s(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function eb(e) {
  const t = e || {};
  return {
    du: et(t.du, 0) ?? 0,
    dv: et(t.dv, 0) ?? 0,
    rot_deg: et(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, et(t.scale, 1) ?? 1)
  };
}
function tb(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const s = Qy(e.bbox);
  return s ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, et(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: s,
    rasterDataUrl: a,
    transform: eb(e.transform)
  } : null;
}
function nb(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const a = tb(r, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function Wi(e) {
  const t = Wy();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Yy(e.groups),
    paint: ff(e.paint, "paint"),
    mask: ff(e.mask, "mask"),
    raster_objects: nb(e.raster_objects)
  };
}
function df(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function rb(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: B(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: B(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function hf(e = {}, t = 0) {
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
  return n === "sticker" ? (r.transform = rb((e == null ? void 0 : e.transform) || e), r.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (r.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, r.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), r;
}
function ib(e = {}) {
  var r, a;
  if (e != null && e.background && (e != null && e.objectPass) && Array.isArray(e.objectPass.objects))
    return di({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: df(e.background || {}),
      objectPass: {
        selectedId: ((r = e == null ? void 0 : e.objectPass) == null ? void 0 : r.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((s, u) => hf(s, u)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = df((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((s, u) => hf(s, u)).filter(Boolean);
  return di({
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
function ia(e = {}) {
  const t = String((e == null ? void 0 : e.mode) || "panorama");
  return t === "cutout" ? {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: B(Number((e == null ? void 0 : e.hFovDeg) || 90), 1, 179),
    vFovDeg: B(Number((e == null ? void 0 : e.vFovDeg) || 60), 1, 179),
    aspect: Number((e == null ? void 0 : e.aspect) || 1),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : t === "unwrap" ? {
    mode: "unwrap",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: B(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: B(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  };
}
function Co(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function ab(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || pi((e == null ? void 0 : e.coreOptions) || {});
  let r = null, a = "";
  function s(d) {
    var w;
    return JSON.stringify({
      stateRevision: (d == null ? void 0 : d.stateRevision) || "",
      background: (d == null ? void 0 : d.background) || null,
      objects: Array.isArray((w = d == null ? void 0 : d.objectPass) == null ? void 0 : w.objects) ? d.objectPass.objects.map((N) => ({
        id: (N == null ? void 0 : N.id) || "",
        type: (N == null ? void 0 : N.type) || "",
        revision: (N == null ? void 0 : N.revision) || "",
        visible: (N == null ? void 0 : N.visible) !== !1,
        opacity: Number((N == null ? void 0 : N.opacity) ?? 1),
        zIndex: Number((N == null ? void 0 : N.zIndex) ?? 0),
        transform: (N == null ? void 0 : N.transform) || null,
        params: (N == null ? void 0 : N.params) || null
      })) : [],
      overlay: (d == null ? void 0 : d.overlay) || {}
    });
  }
  function u(d = {}) {
    const w = ib(d), N = s(w);
    return a === N || !n.syncState(w) ? !1 : (r = w, a = N, !0);
  }
  function f(d = {}, w = {}) {
    if (!r) return null;
    const N = ia(d), A = Co(w);
    return n.renderToTarget(t, N, A);
  }
  function g(d, w, N = {}, A = {}) {
    if (!d || !w || !r) return !1;
    const D = ia(N), O = Co({
      ...A,
      width: Number((w == null ? void 0 : w.w) || (A == null ? void 0 : A.width) || 1),
      height: Number((w == null ? void 0 : w.h) || (A == null ? void 0 : A.height) || 1)
    });
    return n.renderToContext(d, w, D, O);
  }
  function y() {
    var d;
    r = null, a = "", (d = n.clearState) == null || d.call(n);
  }
  function x() {
    var d;
    y(), (d = n.dispose) == null || d.call(n);
  }
  return {
    isSupported: typeof (n == null ? void 0 : n.isSupported) == "function" ? () => n.isSupported() : () => !1,
    syncScene: u,
    renderFrame: f,
    renderToContext: g,
    snapshotScene: () => r,
    clearScene: y,
    dispose: x
  };
}
function ob(e, t, n) {
  return new Promise((r, a) => {
    e.toBlob((s) => {
      s ? r(s) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function sb(e, t = {}) {
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = ia((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), r = Co({
    width: (t == null ? void 0 : t.width) || 1,
    height: (t == null ? void 0 : t.height) || 1,
    dpr: (t == null ? void 0 : t.dpr) || 1
  }), a = e.renderFrame(n, r);
  if (!a) throw new Error("Panorama scene camera render returned null.");
  const s = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", u = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return ob(a, s, u);
}
function cb(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const r = document.createElement("canvas");
  r.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), r.style.width = "100%", r.style.height = "100%", r.style.display = "block", t.appendChild(r);
  const a = r.getContext("2d");
  let s = ia((n == null ? void 0 : n.view) || {}), u = !1, f = 0;
  function g() {
    const w = Number((n == null ? void 0 : n.width) || t.clientWidth || r.clientWidth || 1), N = Number((n == null ? void 0 : n.height) || t.clientHeight || r.clientHeight || 1), A = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), D = Co({ width: w, height: N, dpr: A });
    return r.width = Math.max(1, Math.round(D.width * D.dpr)), r.height = Math.max(1, Math.round(D.height * D.dpr)), r.style.width = `${D.width}px`, r.style.height = `${D.height}px`, D;
  }
  function y() {
    if (u || !a) return !1;
    const w = g();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, r.width, r.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: r.width, h: r.height },
      s,
      { ...w, width: r.width, height: r.height, dpr: 1 }
    );
  }
  function x() {
    u || f || (f = requestAnimationFrame(() => {
      f = 0, y();
    }));
  }
  const d = typeof ResizeObserver == "function" ? new ResizeObserver(() => x()) : null;
  return d == null || d.observe(t), x(), {
    canvas: r,
    setView(w) {
      s = ia(w || {}), x();
    },
    getView() {
      return s;
    },
    present: y,
    requestRender: x,
    unmount() {
      u = !0, f && cancelAnimationFrame(f), d == null || d.disconnect(), r.remove();
    }
  };
}
function lb(e = {}) {
  const t = ab({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, r = {}) {
      return t.renderFrame(Nr(n), r);
    },
    renderShotToContext(n, r, a, s = {}) {
      return t.renderToContext(n, r, Nr(a), s);
    },
    mount(n, r = {}) {
      const a = r != null && r.shot ? Nr(r.shot) : r == null ? void 0 : r.view;
      return cb(t, n, { ...r, view: a });
    },
    exportFrame(n = {}) {
      const r = n != null && n.shot ? { ...n, camera: Nr(n.shot) } : n;
      return sb(t, r);
    }
  };
}
function Ai(e, t, n, r) {
  const a = Array.isArray(e) ? e.find((s) => String((s == null ? void 0 : s[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, r);
}
function ub(e = {}) {
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
function fb({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: s,
  hsv01ToRgb: u,
  getBrushPresetIdForTool: f,
  isActiveLassoTool: g
}) {
  var E, C;
  const y = e.primaryTool === "paint" || e.primaryTool === "mask", x = {
    visible: y,
    activePane: y ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: r(e.customPaintColor, 1),
    colorPopOpen: y ? !!n : !1,
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
    historyEntries: Array.from({ length: 8 }, ($, ie) => ({ index: ie, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!y) return x;
  const d = ((E = t.find(($) => a(e.paintColor, $.color))) == null ? void 0 : E.id) || "", w = !d, N = s(e.customPaintColor), A = Math.round(Math.max(0, Math.min(1, Number(((C = e.customPaintColor) == null ? void 0 : C.a) ?? 1))) * 100), D = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), O = e.brushSizes[D] ?? 10, H = g(), R = Array.from({ length: 8 }, ($, ie) => e.customPaintHistory[ie] || null);
  return {
    ...x,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: d,
    customColorActive: w,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...u(N.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, N.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, N.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, N.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, N.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, N.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, N.h)) * 100}%`,
    alphaValue: A,
    alphaText: `${A}%`,
    historyEntries: R.map(($, ie) => ({
      index: ie,
      color: $ ? { cssColor: r($, 1) } : null
    })),
    sizeValue: O,
    sizeText: String(O),
    sizeFill: `${Math.max(0, Math.min(100, (O - 1) / 119 * 100))}%`,
    sizeDisabled: H,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function db({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function hb({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: a,
  selectedItems: s,
  params: u,
  notes: f,
  visibilityRows: g,
  uiSettings: y,
  normalizeCoverageValue: x
}) {
  return {
    coverage: { value: x(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || a === "stroke" || s.length > 1,
      label: "Copy State"
    },
    params: u,
    notes: f,
    paramsDisabled: !r,
    visibilityRows: g,
    uiSettings: t ? null : y,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function gb({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: a,
  allLocked: s,
  selectedLocked: u,
  activeAspect: f,
  cutoutAspectOpen: g,
  isExternalSticker: y,
  isStickerHidden: x,
  canRestoreSelectedToInitial: d,
  iconSet: w
}) {
  if (!(a != null && a.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let N = [];
  if (n.length > 1)
    N = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  else if (r === "stroke")
    N = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  else if (e === "stickers" || r === "image") {
    if (N = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back }
    ], y(t) || (N.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: w.duplicate }), N.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: w.replace_image })), y(t)) {
      const E = d(), C = x(t);
      N.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: E ? "Back to initial position" : "Already at initial position",
        icon: w.back_initial,
        disabled: !E
      }), N.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: C ? "Show" : "Hide",
        tip: C ? "Show input image" : "Hide input image",
        icon: C ? w.eye : w.eye_dashed
      });
    }
    N.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? w.lock_open : w.lock_closed }), y(t) || N.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete });
  } else
    N = [
      {
        key: "aspect",
        kind: "aspect",
        icon: w.aspect,
        open: !!g,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((E) => ({ value: E, label: E, active: f === E }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: w.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  const A = a.corners.map((E) => E.x), D = a.corners.map((E) => E.y), O = Math.min(...A), H = Math.max(...A), R = Math.max(...D);
  return {
    visible: !0,
    left: (O + H) * 0.5,
    top: R + 18,
    items: N,
    anchor: { minX: O, maxX: H, maxY: R }
  };
}
const Xe = {
  globe: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><circle cx='12' cy='12' r='10'/><path d='M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z'/></svg>",
  // View toggle
  pano: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M1.5 8.2c1.9-2.2 4.1-3.3 6.5-3.3s4.6 1.1 6.5 3.3'/><path d='M2.6 10.9c1.5-1.5 3.3-2.3 5.4-2.3s3.9.8 5.4 2.3'/><circle cx='8' cy='12.2' r='1' fill='currentColor' stroke='none'/></svg>",
  unwrap: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='1.75' y='3' width='12.5' height='10' rx='2'/><path d='M5.9 3v10M10.1 3v10'/></svg>",
  camera: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.75 5.25H4.79C5.23 5.25 5.63 4.98 5.79 4.57L6.02 3.98C6.18 3.57 6.58 3.3 7.02 3.3H8.98C9.42 3.3 9.82 3.57 9.98 3.98L10.21 4.57C10.37 4.98 10.77 5.25 11.21 5.25H13.25C13.8 5.25 14.25 5.7 14.25 6.25V11.25C14.25 11.8 13.8 12.25 13.25 12.25H2.75C2.2 12.25 1.75 11.8 1.75 11.25V6.25C1.75 5.7 2.2 5.25 2.75 5.25Z'/><circle cx='8' cy='8.75' r='2.25'/></svg>",
  // Left toolbar
  cursor_tool: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 2.5 12.2 8l-4 1.2 1.8 4.3-1.8.8-1.9-4.3-2.6 2.2z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
  palette_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z'/><path d='M7 13.5a2.5 2.5 0 0 0 2.5 2.5H11a2 2 0 0 1 0 4h-1'/><circle cx='7.5' cy='8.5' r='.9' fill='currentColor' stroke='none'/><circle cx='12' cy='6.5' r='.9' fill='currentColor' stroke='none'/><circle cx='16.5' cy='8.5' r='.9' fill='currentColor' stroke='none'/></svg>",
  circle_dashed_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10.1 2.6A9.9 9.9 0 0 1 13.9 2.6'/><path d='M17.8 4.2a9.9 9.9 0 0 1 2 2.8'/><path d='M21.4 10.1a9.9 9.9 0 0 1 0 3.8'/><path d='M19.8 17.8a9.9 9.9 0 0 1-2.8 2'/><path d='M13.9 21.4a9.9 9.9 0 0 1-3.8 0'/><path d='M6.2 19.8a9.9 9.9 0 0 1-2-2.8'/><path d='M2.6 13.9a9.9 9.9 0 0 1 0-3.8'/><path d='M4.2 6.2a9.9 9.9 0 0 1 2.8-2'/></svg>",
  image: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M2.5 2h11A1.5 1.5 0 0 1 15 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2ZM2 9.56l2.77-2.77a1 1 0 0 1 1.41 0l1.32 1.32 2.82-2.82a1 1 0 0 1 1.42 0L14 7.55V3.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v6.06Zm0 1.41V12.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V8.97L10.8 5.76 7.85 8.7a.75.75 0 0 1-1.06 0L5.47 7.38 2 10.97ZM5.5 4.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Z' fill='currentColor'/></svg>",
  plus_circle: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.75 4.25V5V7.25H11H11.75V8.75H11H8.75V11V11.75L7.25 11.75V11V8.75H5H4.25V7.25H5H7.25V5V4.25H8.75Z' fill='currentColor'/></svg>",
  clear: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
  undo: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M5.5 4.3 2.8 7l2.7 2.7'/><path d='M3.1 7h5.3a3.7 3.7 0 1 1 0 7.4'/></svg>",
  redo: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='m10.5 4.3 2.7 2.7-2.7 2.7'/><path d='M12.9 7H7.6a3.7 3.7 0 1 0 0 7.4'/></svg>",
  // Floating right
  reset: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M8 3.2a4.8 4.8 0 1 1-4.8 4.8'/><path d='M3.2 3.2v3.6h3.6'/></svg>",
  eye: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M4.02168 4.76932C6.11619 2.33698 9.88374 2.33698 11.9783 4.76932L14.7602 7.99999L11.9783 11.2307C9.88374 13.663 6.1162 13.663 4.02168 11.2307L1.23971 7.99999L4.02168 4.76932ZM13.1149 3.79054C10.422 0.663244 5.57797 0.663247 2.88503 3.79054L-0.318359 7.5106V8.48938L2.88503 12.2094C5.57797 15.3367 10.422 15.3367 13.1149 12.2094L16.3183 8.48938V7.5106L13.1149 3.79054ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999Z' fill='currentColor'/></svg>",
  eye_dashed: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.51404 3.15793C7.48217 2.87411 8.51776 2.87411 9.48589 3.15793L9.90787 1.71851C8.66422 1.35392 7.33571 1.35392 6.09206 1.71851L6.51404 3.15793ZM10.848 3.78166C11.2578 4.04682 11.6393 4.37568 11.9783 4.76932L13.046 6.00934L14.1827 5.03056L13.1149 3.79054C12.6818 3.28761 12.1918 2.86449 11.6628 2.52224L10.848 3.78166ZM4.02168 4.76932C4.36065 4.37568 4.74209 4.04682 5.15195 3.78166L4.33717 2.52225C3.80815 2.86449 3.3181 3.28761 2.88503 3.79054L1.81723 5.03056L2.95389 6.00934L4.02168 4.76932ZM14.1138 7.24936L14.7602 7.99999L14.1138 8.75062L15.2505 9.72941L16.3183 8.48938V7.5106L15.2505 6.27058L14.1138 7.24936ZM1.88609 7.24936L1.23971 7.99999L1.88609 8.75062L0.749437 9.72941L-0.318359 8.48938V7.5106L0.749436 6.27058L1.88609 7.24936ZM13.0461 9.99064L11.9783 11.2307C11.6393 11.6243 11.2578 11.9532 10.848 12.2183L11.6628 13.4777C12.1918 13.1355 12.6818 12.7124 13.1149 12.2094L14.1827 10.9694L13.0461 9.99064ZM4.02168 11.2307L2.95389 9.99064L1.81723 10.9694L2.88503 12.2094C3.3181 12.7124 3.80815 13.1355 4.33717 13.4777L5.15195 12.2183C4.7421 11.9532 4.36065 11.6243 4.02168 11.2307ZM9.90787 14.2815L9.48589 12.8421C8.51776 13.1259 7.48217 13.1259 6.51405 12.8421L6.09206 14.2815C7.33572 14.6461 8.66422 14.6461 9.90787 14.2815ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z' fill='currentColor'/></svg>",
  fullscreen: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M1 5.25V6H2.5V5.25V2.5H5.25H6V1H5.25H2C1.44772 1 1 1.44772 1 2V5.25ZM5.25 14.9994H6V13.4994H5.25H2.5V10.7494V9.99939H1V10.7494V13.9994C1 14.5517 1.44772 14.9994 2 14.9994H5.25ZM15 10V10.75V14C15 14.5523 14.5523 15 14 15H10.75H10V13.5H10.75H13.5V10.75V10H15ZM10.75 1H10V2.5H10.75H13.5V5.25V6H15V5.25V2C15 1.44772 14.5523 1 14 1H10.75Z' fill='currentColor'/></svg>",
  fullscreen_close: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6 1V1.75V5C6 5.55229 5.55228 6 5 6H1.75H1V4.5H1.75H4.5V1.75V1H6ZM14.25 6H15V4.5H14.25H11.5V1.75V1H10V1.75V5C10 5.55228 10.4477 6 11 6H14.25ZM10 14.25V15H11.5V14.25V11.5H14.29H15.04V10H14.29H11C10.4477 10 10 10.4477 10 11V14.25ZM1.75 10H1V11.5H1.75H4.5V14.25V15H6V14.25V11C6 10.4477 5.55229 10 5 10H1.75Z' fill='currentColor'/></svg>",
  chevron: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='m4.5 6.5 3.5 3.5 3.5-3.5'/></svg>",
  copy: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.2' y='5.2' width='7.8' height='7.8' rx='1.4'/><rect x='3' y='3' width='7.8' height='7.8' rx='1.4'/></svg>",
  bring_front: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 12V4'/><path d='m4.4 5.6 1.6-1.6 1.6 1.6'/><path d='M9.5 11h3.1M9.5 8h2.2M9.5 5h1.2'/></svg>",
  send_back: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 4v8'/><path d='m4.4 10.4 1.6 1.6 1.6-1.6'/><path d='M9.5 11h1.2M9.5 8h2.2M9.5 5h3.1'/></svg>",
  duplicate: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.3' y='5.3' width='7.7' height='7.7' rx='1.4'/><rect x='3' y='3' width='7.7' height='7.7' rx='1.4'/></svg>",
  replace_image: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='m17 2 4 4-4 4'/><path d='M3 11v-1a4 4 0 0 1 4-4h14'/><path d='m7 22-4-4 4-4'/><path d='M21 13v1a4 4 0 0 1-4 4H3'/></svg>",
  back_initial: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 14V2.5' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M4.5 3.5h6.2l-1.6 2.2 1.6 2.2H4.5z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M12.8 12.2H7.2' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='m8.9 10.6-1.7 1.6 1.7 1.6' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
  delete: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
  lock_closed: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M10 4.5V6H6V4.5C6 3.39543 6.89543 2.5 8 2.5C9.10457 2.5 10 3.39543 10 4.5ZM4.5 6V4.5C4.5 2.567 6.067 1 8 1C9.933 1 11.5 2.567 11.5 4.5V6H12.5H14V7.5V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V7.5V6H3.5H4.5ZM11.5 7.5H10H6H4.5H3.5V12.5C3.5 13.0523 3.94772 13.5 4.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V7.5H11.5Z' fill='currentColor'></path></svg>",
  lock_open: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14 6V4.5C14 3.39543 13.1046 2.5 12 2.5C10.8954 2.5 10 3.39543 10 4.5V6H10.5H12V7.5V12.5C12 13.8807 10.8807 15 9.5 15H2.5C1.11929 15 0 13.8807 0 12.5V7.5V6H1.5H8.5V4.5C8.5 2.567 10.067 1 12 1C13.933 1 15.5 2.567 15.5 4.5V6H14ZM10.5 7.5H10H8.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H9.5C10.0523 13.5 10.5 13.0523 10.5 12.5V7.5Z' fill='currentColor'></path></svg>",
  aspect: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.866 14.7041C13.9131 14.5727 12.9574 14.4687 12 14.3923V12.8876C12.8347 12.9523 13.6683 13.0373 14.4999 13.1426L14.5 9.00003H16L15.9999 14L15.9999 14.8605L15.1475 14.7429L14.866 14.7041ZM16 7.00003L16 2.49996L16 1.6394L15.1475 1.75699L14.866 1.79581C13.9131 1.92725 12.9574 2.03119 12 2.10765V3.61228C12.8347 3.54757 13.6683 3.46256 14.5 3.35727L14.5 7.00003H16ZM9.99998 2.22729V3.72844C8.66715 3.77999 7.33282 3.77999 5.99998 3.72844V2.22729C7.33279 2.28037 8.66718 2.28037 9.99998 2.22729ZM9.99998 14.2726V12.7715C8.66715 12.7199 7.33282 12.7199 5.99998 12.7715V14.2726C7.33279 14.2195 8.66718 14.2195 9.99998 14.2726ZM3.99998 14.3923C3.04258 14.4687 2.08683 14.5727 1.13391 14.7041L0.85242 14.7429L-0.0000610352 14.8605L-0.0000578761 14L-0.0000396322 9.00003H1.49996L1.49995 13.1426C2.33162 13.0373 3.16521 12.9523 3.99998 12.8876V14.3923ZM1.49997 7.00003L1.49998 3.35727C2.33164 3.46256 3.16522 3.54757 3.99998 3.61228V2.10765C3.0426 2.03119 2.08686 1.92725 1.13395 1.79581L0.852462 1.75699L-0.0000127554 1.6394L-0.0000159144 2.49995L-0.0000323345 7.00003H1.49997Z' fill='currentColor'/></svg>",
  rotate_90: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.21967 4.71967L5.68934 5.25L6.75 6.31066L7.28033 5.78033L9.25 3.81066V13.5C9.25 13.6381 9.13807 13.75 9 13.75H2.75H2V15.25H2.75H9C9.9665 15.25 10.75 14.4665 10.75 13.5V3.81066L12.7197 5.78033L13.25 6.31066L14.3107 5.25L13.7803 4.71967L10.5303 1.46967C10.2374 1.17678 9.76256 1.17678 9.46967 1.46967L6.21967 4.71967Z' fill='currentColor'/></svg>",
  // Paint dock
  pencil_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m3 21 3.8-1 10-10a2.1 2.1 0 0 0-3-3L3.8 17z'/><path d='m14.5 6.5 3 3'/></svg>",
  spray_can_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 6h6'/><path d='M12 3h2a2 2 0 0 1 2 2v1'/><path d='M9 8h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z'/><path d='M5 10h.01'/><path d='M3 14h.01'/><path d='M5 18h.01'/></svg>",
  highlighter_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m14 4 6 6'/><path d='m4 20 4.5-1 9-9-3.5-3.5-9 9z'/><path d='M13 7 17 11'/><path d='M3 21h7'/></svg>",
  paintbrush_vertical_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 2v2'/><path d='M14 2v4'/><path d='M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z'/><path d='M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1'/></svg>",
  eraser_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m7 13.5 6.8-6.8a2.2 2.2 0 0 1 3.1 0l2.4 2.4a2.2 2.2 0 0 1 0 3.1l-6.8 6.8a2.2 2.2 0 0 1-1.5.6H7.8a2.2 2.2 0 0 1-1.6-.6l-1.5-1.5a2.2 2.2 0 0 1 0-3.1L7 13.5Z'/><path d='M13.5 19.5H21'/></svg>",
  lasso_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M7.2 18.8C4.6 18 3 16.2 3 14c0-3.9 4-7 9-7s9 3.1 9 7-4 7-9 7c-1.1 0-2.2-.1-3.1-.4'/><path d='M7 17c1 0 1.8.8 1.8 1.8S8 20.6 7 20.6s-1.8-.8-1.8-1.8S6 17 7 17Z'/></svg>"
}, Ao = {
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
    const t = e, n = Pr(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, a) => (Ae(), gi(L0(e.tag), Sd({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value, { innerHTML: e.icon }), null, 16, ["class", "innerHTML"]));
  }
}, pb = { class: "pano-floating-right" }, mb = {
  class: "pano-fov-value",
  "data-fov-value": "",
  "aria-label": "Field of view"
}, yb = ["data-settled"], bb = ["data-ready", "data-settled"], vb = ["aria-label", "data-tip", "innerHTML"], _b = {
  key: 1,
  class: "pano-camera-preview-label"
}, xb = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    fovValue: { type: String, default: "100°" },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ae(), Ee(tt, null, [
      se("div", pb, [
        se("span", mb, kt(e.fovValue), 1),
        (Ae(!0), Ee(tt, null, Zt(e.buttons, (r) => (Ae(), gi(Ao, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Ec(se("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        se("div", {
          class: xt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: qt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = se("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, null, -1)),
          e.previewToggle.visible ? (Ae(), Ee("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview",
            innerHTML: e.previewToggle.icon
          }, null, 8, vb)) : on("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Ae(), Ee("div", _b, kt(e.preview.label || "Preview unavailable"), 1)) : on("", !0)
        ], 14, bb)
      ], 8, yb), [
        [Vc, e.preview.visible]
      ])
    ], 64));
  }
}, wb = ["aria-label"], Sb = { class: "pano-canvas-confirm-title" }, Nb = { class: "pano-canvas-confirm-text" }, Mb = { class: "pano-canvas-confirm-actions" }, kb = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Pb = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ tc(null), r = /* @__PURE__ */ tc(null);
    let a = null;
    function s() {
      const d = r.value;
      return d ? Array.from(d.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((w) => w instanceof HTMLElement ? !w.hidden && w.tabIndex >= 0 && w.offsetParent !== null : !1) : [];
    }
    function u(d) {
      const w = r.value;
      if (!w) return;
      const N = w.querySelector(`[data-action='${d}']`);
      N instanceof HTMLButtonElement && N.click();
    }
    function f() {
      var D;
      const d = r.value;
      if (!d) return;
      const w = d.querySelector("[data-action='confirm-accept']");
      if (w instanceof HTMLElement) {
        w.focus();
        return;
      }
      const A = s()[0] || d;
      (D = A == null ? void 0 : A.focus) == null || D.call(A);
    }
    function g() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function y(d) {
      var H;
      if (d.defaultPrevented) return;
      if (d.key === "Escape") {
        d.preventDefault(), d.stopPropagation(), u("confirm-cancel");
        return;
      }
      if (d.key !== "Tab") return;
      const w = s(), N = r.value;
      if (!w.length) {
        d.preventDefault(), (H = N == null ? void 0 : N.focus) == null || H.call(N);
        return;
      }
      const A = w[0], D = w[w.length - 1], O = document.activeElement;
      if (d.shiftKey) {
        (O === A || O === N || !(N != null && N.contains(O))) && (d.preventDefault(), D.focus());
        return;
      }
      (O === D || !(N != null && N.contains(O))) && (d.preventDefault(), A.focus());
    }
    function x(d) {
      d.target === n.value && u("confirm-cancel");
    }
    return zi(() => t.model.visible, (d, w) => {
      if (d) {
        a = document.activeElement, Ic(() => {
          f();
        });
        return;
      }
      w && g();
    }, { immediate: !0 }), Lc(() => {
      g();
    }), (d, w) => e.model.visible === !0 ? (Ae(), Ee("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Cd(x, ["self"])
    }, [
      se("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: y
      }, [
        se("div", Sb, kt(e.model.title), 1),
        se("div", Nb, kt(e.model.text), 1),
        se("div", Mb, [
          w[0] || (w[0] = se("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          se("button", kb, kt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, wb)
    ], 512)) : on("", !0);
  }
}, Cb = ["data-paint-pane"], Ab = ["hidden"], Ib = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], Db = ["aria-pressed", "disabled"], Eb = ["hidden"], Tb = { class: "pano-paint-color-pop-head" }, Lb = { class: "pano-paint-color-field" }, Rb = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, Ob = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, Fb = { class: "pano-paint-color-field" }, Vb = { class: "pano-paint-alpha-wrap" }, Hb = ["value"], zb = { "data-paint-alpha-value": "" }, jb = ["hidden"], $b = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Bb = ["data-paint-history-index", "aria-label", "disabled"], Ub = ["data-paint-footer"], Gb = ["data-paint-group"], Kb = ["hidden"], Wb = ["value", "disabled"], Yb = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, qb = ["hidden"], Xb = {
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
    return (r, a) => (Ae(), Ee("div", {
      class: xt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Ae(!0), Ee(tt, null, Zt(e.panes, (s) => {
        var u;
        return Ae(), Ee("div", {
          key: s.key,
          class: xt(["pano-paint-pane", { "is-active": e.state.activePane === s.key }]),
          "data-paint-pane": s.key
        }, [
          s.showColorFloat ? (Ae(), Ee("div", {
            key: 0,
            class: xt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Ae(!0), Ee(tt, null, Zt(e.paintSwatches, (f) => (Ae(), Ee("button", {
              key: f.id,
              class: xt(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: qt(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, Ib))), 128)),
            se("button", {
              class: xt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: qt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, Db),
            se("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: qt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              se("div", Tb, [
                se("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: qt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = se("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              se("div", Lb, [
                se("div", Rb, [
                  se("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: qt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                se("div", Ob, [
                  se("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: qt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              se("label", Fb, [
                a[1] || (a[1] = se("span", null, "Opacity", -1)),
                se("div", Vb, [
                  se("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, Hb),
                  se("span", zb, kt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              se("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                se("div", $b, [
                  (Ae(!0), Ee(tt, null, Zt(e.state.historyEntries || [], (f) => (Ae(), Ee("button", {
                    key: f.index,
                    class: xt(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: qt(n(f.color))
                  }, null, 14, Bb))), 128))
                ])
              ], 8, jb)
            ], 12, Eb)
          ], 10, Ab)) : on("", !0),
          se("div", {
            class: "pano-paint-footer",
            "data-paint-footer": s.footer
          }, [
            se("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": s.group
            }, [
              (Ae(!0), Ee(tt, null, Zt(s.tools, (f) => {
                var g;
                return Ae(), gi(Ao, {
                  key: `${s.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((g = e.state.activeTools) == null ? void 0 : g[s.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, Gb),
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
                style: qt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, Wb),
              se("span", Yb, kt(e.state.sizeText || "10"), 1)
            ], 10, Kb),
            se("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((u = e.state.clearVisible) == null ? void 0 : u[s.key]) ?? !s.clearHidden)
            }, [
              Ct(Ao, {
                icon: ni(Xe).clear,
                label: s.clearLabel,
                tip: s.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": s.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, qb)
          ], 8, Ub)
        ], 10, Cb);
      }), 128))
    ], 2));
  }
}, Zb = {
  key: 0,
  class: "pano-cutout-menu"
}, Jb = ["innerHTML"], Qb = ["data-aspect"], ev = ["data-action", "aria-label", "data-tip", "disabled", "innerHTML"], tv = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ae(), Ee("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: qt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Ae(!0), Ee(tt, null, Zt(e.model.items || [], (r) => (Ae(), Ee(tt, {
        key: r.key
      }, [
        r.kind === "aspect" ? (Ae(), Ee("div", Zb, [
          se("button", {
            class: "pano-btn pano-btn-icon",
            type: "button",
            "data-action": "aspect",
            "aria-label": "Aspect Ratio",
            "data-tip": "Aspect ratio",
            innerHTML: r.icon
          }, null, 8, Jb),
          se("div", {
            class: xt(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Ae(!0), Ee(tt, null, Zt(r.choices || [], (a) => (Ae(), Ee("button", {
              key: a.value,
              class: xt(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, kt(a.label), 11, Qb))), 128))
          ], 2)
        ])) : (Ae(), Ee("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0,
          innerHTML: r.icon
        }, null, 8, ev))
      ], 64))), 128))
    ], 4));
  }
}, nv = {
  class: "pano-side",
  "data-side": ""
}, rv = { class: "pano-side-head" }, iv = ["innerHTML"], av = {
  key: 0,
  class: "pano-side-scroll"
}, ov = { class: "pano-inspector" }, sv = { class: "pano-ui-row pano-coverage-row" }, cv = ["data-selected"], lv = ["aria-pressed", "disabled"], uv = ["aria-pressed", "disabled"], fv = {
  key: 0,
  class: "pano-section-title"
}, dv = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, hv = {
  class: "pano-picker",
  "data-picker": "selection"
}, gv = ["disabled"], pv = ["innerHTML"], mv = ["hidden"], yv = ["data-selection-id", "innerHTML"], bv = {
  key: 2,
  class: "pano-state-actions"
}, vv = ["disabled"], _v = ["innerHTML"], xv = ["data-key"], wv = ["min", "max", "step", "value", "disabled", "data-param-key"], Sv = ["min", "max", "step", "value", "disabled", "data-param-key"], Nv = { class: "pano-visibility-section" }, Mv = { class: "pano-visibility-stack" }, kv = ["data-visibility-row"], Pv = { class: "pano-visibility-name" }, Cv = ["innerHTML"], Av = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled", "innerHTML"], Iv = ["open"], Dv = ["innerHTML"], Ev = { class: "pano-ui-settings-body" }, Tv = { class: "pano-ui-row" }, Lv = ["data-selected"], Rv = ["aria-pressed"], Ov = ["aria-pressed"], Fv = { class: "pano-ui-row" }, Vv = ["data-selected"], Hv = ["aria-pressed"], zv = ["aria-pressed"], jv = { class: "pano-ui-row" }, $v = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, Bv = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, Uv = { class: "pano-picker-label" }, Gv = ["hidden"], Kv = ["data-quality"], Wv = {
  key: 1,
  class: "pano-side-footer"
}, Yv = ["data-action"], qv = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e;
    function n(f) {
      return String(f || "").replace(/[&<>"']/g, (g) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[g]);
    }
    const r = Pr(() => `<span class="pano-side-title-icon" aria-hidden="true">${Xe.globe}</span><span>${n(t.nodeTitle)}</span>`), a = Pr(() => {
      const f = t.model;
      return !f || typeof f != "object" ? !1 : Object.keys(f).length > 0 && !!f.coverage;
    });
    function s(f) {
      return { "--v": `${Number((f == null ? void 0 : f.fillPct) || 0)}%` };
    }
    function u(f, g) {
      return (g == null ? void 0 : g.paramsDisabled) === !0 || (f == null ? void 0 : f.enabled) === !1;
    }
    return (f, g) => {
      var y, x, d, w, N;
      return Ae(), Ee("div", nv, [
        se("div", rv, [
          se("div", {
            class: "pano-side-title",
            innerHTML: r.value
          }, null, 8, iv),
          g[0] || (g[0] = se("div", { class: "pano-side-actions" }, null, -1))
        ]),
        g[13] || (g[13] = se("div", { class: "pano-divider" }, null, -1)),
        a.value ? (Ae(), Ee("div", av, [
          se("div", ov, [
            g[12] || (g[12] = se("div", { class: "pano-section-title" }, [
              se("span", null, "Scene")
            ], -1)),
            se("div", sv, [
              g[1] || (g[1] = se("label", null, "Coverage", -1)),
              se("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((y = e.model.coverage) == null ? void 0 : y.value) === 180 ? "1" : "0"
              }, [
                se("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((x = e.model.coverage) == null ? void 0 : x.value) === 360 ? "true" : "false",
                  disabled: ((d = e.model.coverage) == null ? void 0 : d.disabled) === !0
                }, "360", 8, lv),
                se("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((w = e.model.coverage) == null ? void 0 : w.value) === 180 ? "true" : "false",
                  disabled: ((N = e.model.coverage) == null ? void 0 : N.disabled) === !0
                }, "180", 8, uv)
              ], 8, cv)
            ]),
            e.model.transformTitle !== !1 ? (Ae(), Ee("div", fv, [...g[2] || (g[2] = [
              se("span", null, "Transform", -1)
            ])])) : on("", !0),
            e.model.selectionPicker ? (Ae(), Ee("div", dv, [
              se("label", null, kt(e.model.selectionPicker.label), 1),
              se("div", hv, [
                se("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  se("span", {
                    class: "pano-picker-label",
                    innerHTML: e.model.selectionPicker.currentLabelHtml
                  }, null, 8, pv),
                  g[3] || (g[3] = se("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, gv),
                se("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Ae(!0), Ee(tt, null, Zt(e.model.selectionPicker.items || [], (A) => (Ae(), Ee("button", {
                    key: A.id,
                    type: "button",
                    class: xt(["pano-picker-item", { active: A.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": A.id,
                    innerHTML: A.labelHtml
                  }, null, 10, yv))), 128))
                ], 8, mv)
              ])
            ])) : on("", !0),
            e.model.copyStateButton ? (Ae(), Ee("div", bv, [
              se("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                se("span", {
                  innerHTML: ni(Xe).copy
                }, null, 8, _v),
                se("span", null, kt(e.model.copyStateButton.label), 1)
              ], 8, vv)
            ])) : on("", !0),
            se("div", {
              class: xt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Ae(!0), Ee(tt, { key: 0 }, Zt(e.model.notes, (A) => (Ae(), Ee("div", {
                key: A,
                class: "pano-param-note"
              }, kt(A), 1))), 128)) : (Ae(!0), Ee(tt, { key: 1 }, Zt(e.model.params || [], (A) => (Ae(), Ee("div", {
                key: A.key,
                class: "pano-field",
                "data-key": A.key
              }, [
                se("label", null, kt(A.label), 1),
                se("input", {
                  type: "range",
                  min: A.min,
                  max: A.max,
                  step: A.step,
                  value: A.value,
                  disabled: u(A, e.model),
                  style: qt(s(A)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": A.key
                }, null, 12, wv),
                se("input", {
                  type: "number",
                  min: A.min,
                  max: A.max,
                  step: A.step,
                  value: A.displayValue,
                  disabled: u(A, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": A.key
                }, null, 8, Sv)
              ], 8, xv))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Ae(), Ee(tt, { key: 3 }, [
              g[5] || (g[5] = se("div", { class: "pano-divider" }, null, -1)),
              se("div", Nv, [
                g[4] || (g[4] = se("div", { class: "pano-section-title" }, [
                  se("span", null, "Layers")
                ], -1)),
                se("div", Mv, [
                  (Ae(!0), Ee(tt, null, Zt(e.model.visibilityRows, (A) => (Ae(), Ee("div", {
                    key: A.key,
                    class: xt(["pano-visibility-row", { "is-hidden": A.visible === !1, "is-disabled": A.enabled === !1 }]),
                    "data-visibility-row": A.key
                  }, [
                    se("span", Pv, [
                      se("span", {
                        class: "pano-visibility-name-icon",
                        "aria-hidden": "true",
                        innerHTML: A.icon
                      }, null, 8, Cv),
                      se("span", null, kt(A.label), 1)
                    ]),
                    se("button", {
                      class: xt(["pano-visibility-toggle", { active: A.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": A.key,
                      "aria-label": A.ariaLabel,
                      "aria-pressed": A.visible === !0 ? "true" : "false",
                      "data-tip": A.tip,
                      disabled: A.enabled === !1,
                      innerHTML: A.visible === !0 ? ni(Xe).eye : ni(Xe).eye_dashed
                    }, null, 10, Av)
                  ], 10, kv))), 128))
                ])
              ])
            ], 64)) : on("", !0),
            e.model.uiSettings ? (Ae(), Ee("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              se("summary", null, [
                g[6] || (g[6] = se("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                se("span", {
                  class: "pano-ui-caret",
                  "aria-hidden": "true",
                  innerHTML: ni(Xe).chevron
                }, null, 8, Dv)
              ]),
              se("div", Ev, [
                se("div", Tv, [
                  g[7] || (g[7] = se("label", null, "Drag X", -1)),
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
                    }, "Normal", 8, Rv),
                    se("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, Ov)
                  ], 8, Lv)
                ]),
                se("div", Fv, [
                  g[8] || (g[8] = se("label", null, "Drag Y", -1)),
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
                    }, "Normal", 8, Hv),
                    se("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, zv)
                  ], 8, Vv)
                ]),
                se("div", jv, [
                  g[10] || (g[10] = se("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  se("div", $v, [
                    se("button", Bv, [
                      se("span", Uv, kt(e.model.uiSettings.qualityLabel), 1),
                      g[9] || (g[9] = se("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    se("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Ae(!0), Ee(tt, null, Zt(e.model.uiSettings.qualityOptions || [], (A) => (Ae(), Ee("button", {
                        key: A.value,
                        type: "button",
                        class: xt(["pano-picker-item", { active: A.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": A.value
                      }, kt(A.label), 11, Kv))), 128))
                    ], 8, Gv)
                  ])
                ]),
                g[11] || (g[11] = se("div", { class: "pano-ui-row" }, [
                  se("span"),
                  se("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, Iv)) : on("", !0)
          ])
        ])) : on("", !0),
        (e.model.footerButtons || []).length ? (Ae(), Ee("div", Wv, [
          (Ae(!0), Ee(tt, null, Zt(e.model.footerButtons, (A) => (Ae(), Ee("button", {
            key: A.action,
            class: xt(["pano-btn", { "pano-btn-primary": A.primary === !0 }]),
            type: "button",
            "data-action": A.action
          }, kt(A.label), 11, Yv))), 128))
        ])) : on("", !0)
      ]);
    };
  }
}, Xv = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ae(), Ee("div", {
      class: xt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail"
      }]),
      "data-tooltip": "",
      style: qt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, kt(e.model.text || ""), 7));
  }
}, Zv = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, Jv = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Ae(), Ee("div", Zv, [
      (Ae(!0), Ee(tt, null, Zt(e.buttons, (r) => Ec((Ae(), gi(Ao, {
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
        [Vc, r.visible !== !1]
      ])), 128))
    ]));
  }
}, Qv = { class: "pano-floating-top" }, e_ = ["data-selected", "data-view-count"], t_ = ["data-view", "aria-pressed", "aria-label", "disabled"], n_ = ["innerHTML"], r_ = { class: "label" }, i_ = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return Ae(), Ee("div", Qv, [
        se("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Ae(!0), Ee(tt, null, Zt(e.buttons, (a) => Ec((Ae(), Ee("button", {
            key: a.key,
            class: xt(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            se("span", {
              innerHTML: a.icon
            }, null, 8, n_),
            se("span", r_, kt(a.label), 1)
          ], 10, t_)), [
            [Vc, a.visible !== !1]
          ])), 128))
        ], 8, e_)
      ]);
    };
  }
};
function nh(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Xe.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Xe.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Xe.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Xe.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Xe.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Xe.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Xe.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Xe.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Xe.image, pressed: null }
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
const a_ = ["aria-label"], o_ = { class: "pano-stage-wrap" }, s_ = {
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
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, r = t;
    let a = "", s = !1, u = null;
    const f = /* @__PURE__ */ tc(null), g = Pr(() => n.readOnly === !0), y = Pr(() => n.shellPreset || nh(n.type)), x = Pr(() => {
      var E;
      const R = Array.isArray((E = y.value) == null ? void 0 : E.floatingButtons) ? y.value.floatingButtons.slice() : [];
      return g.value && R.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Xe.fullscreen
      }), R;
    });
    function d() {
      const R = f.value;
      return R ? Array.from(R.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((E) => E instanceof HTMLElement ? !E.hidden && E.tabIndex >= 0 && E.offsetParent !== null : !1) : [];
    }
    function w() {
      var C;
      const E = d()[0] || f.value;
      (C = E == null ? void 0 : E.focus) == null || C.call(E);
    }
    function N() {
      var R;
      u != null && u.isConnected && ((R = u.focus) == null || R.call(u)), u = null;
    }
    function A(R) {
      var E, C, $, ie;
      if (!R.defaultPrevented) {
        if (R.key === "Tab") {
          const ae = d();
          if (!ae.length) {
            R.preventDefault(), (C = (E = f.value) == null ? void 0 : E.focus) == null || C.call(E);
            return;
          }
          const re = ae[0], we = ae[ae.length - 1], k = document.activeElement;
          if (R.shiftKey) {
            (k === re || k === f.value || !(($ = f.value) != null && $.contains(k))) && (R.preventDefault(), we.focus());
            return;
          }
          (k === we || !((ie = f.value) != null && ie.contains(k))) && (R.preventDefault(), re.focus());
          return;
        }
        R.key === "Escape" && r("close");
      }
    }
    function D() {
      s || (a = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function O() {
      s && (document.body.style.overflow = a, s = !1);
    }
    function H(R) {
      document.removeEventListener("keydown", A), R ? (u || (u = document.activeElement), D(), document.addEventListener("keydown", A), Ic(() => {
        w();
      })) : (O(), N());
    }
    return ed(() => {
      H(n.open);
    }), Lc(() => {
      O(), document.removeEventListener("keydown", A), N();
    }), zi(() => n.open, (R) => {
      H(R);
    }), (R, E) => e.open ? (Ae(), Ee("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: E[0] || (E[0] = Cd((C) => r("close"), ["self"]))
    }, [
      se("section", {
        ref_key: "modalRef",
        ref: f,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        se("div", o_, [
          E[1] || (E[1] = d1('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
          g.value ? on("", !0) : (Ae(), Ee(tt, { key: 0 }, [
            Ct(Jv, {
              buttons: e.uiState.toolButtons || y.value.toolButtons || []
            }, null, 8, ["buttons"]),
            Ct(Xb, {
              "paint-swatches": e.paintSwatches,
              panes: y.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          Ct(i_, {
            buttons: e.uiState.viewButtons || y.value.viewButtons || []
          }, null, 8, ["buttons"]),
          Ct(xb, {
            buttons: e.uiState.floatingButtons || x.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          Ct(tv, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          Ct(Xv, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          Ct(Pb, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? on("", !0) : (Ae(), gi(qv, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, a_)
    ])) : on("", !0);
  }
}, Io = "state_json", _r = "sticker_image_1", Bs = "external_image", Us = "pano_sticker_input_images", co = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Pt = Math.PI / 180, ur = 180 / Math.PI, Do = 24, c_ = 4, l_ = 4, Li = /* @__PURE__ */ new Map(), mc = /* @__PURE__ */ new Map(), Ri = /* @__PURE__ */ new Map(), Tt = {
  // Source: @geist-ui/icons globe.js (v1.0.2)
  globe: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' shape-rendering='geometricPrecision'><circle cx='12' cy='12' r='10'/><path d='M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z'/></svg>",
  duplicate: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.3' y='5.3' width='7.7' height='7.7' rx='1.4'/><rect x='3' y='3' width='7.7' height='7.7' rx='1.4'/></svg>",
  replace_image: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='m17 2 4 4-4 4'/><path d='M3 11v-1a4 4 0 0 1 4-4h14'/><path d='m7 22-4-4 4-4'/><path d='M21 13v1a4 4 0 0 1-4 4H3'/></svg>",
  bring_front: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 12V4'/><path d='m4.4 5.6 1.6-1.6 1.6 1.6'/><path d='M9.5 11h3.1M9.5 8h2.2M9.5 5h1.2'/></svg>",
  send_back: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 4v8'/><path d='m4.4 10.4 1.6 1.6 1.6-1.6'/><path d='M9.5 11h1.2M9.5 8h2.2M9.5 5h3.1'/></svg>",
  aspect: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.866 14.7041C13.9131 14.5727 12.9574 14.4687 12 14.3923V12.8876C12.8347 12.9523 13.6683 13.0373 14.4999 13.1426L14.5 9.00003H16L15.9999 14L15.9999 14.8605L15.1475 14.7429L14.866 14.7041ZM16 7.00003L16 2.49996L16 1.6394L15.1475 1.75699L14.866 1.79581C13.9131 1.92725 12.9574 2.03119 12 2.10765V3.61228C12.8347 3.54757 13.6683 3.46256 14.5 3.35727L14.5 7.00003H16ZM9.99998 2.22729V3.72844C8.66715 3.77999 7.33282 3.77999 5.99998 3.72844V2.22729C7.33279 2.28037 8.66718 2.28037 9.99998 2.22729ZM9.99998 14.2726V12.7715C8.66715 12.7199 7.33282 12.7199 5.99998 12.7715V14.2726C7.33279 14.2195 8.66718 14.2195 9.99998 14.2726ZM3.99998 14.3923C3.04258 14.4687 2.08683 14.5727 1.13391 14.7041L0.85242 14.7429L-0.0000610352 14.8605L-0.0000578761 14L-0.0000396322 9.00003H1.49996L1.49995 13.1426C2.33162 13.0373 3.16521 12.9523 3.99998 12.8876V14.3923ZM1.49997 7.00003L1.49998 3.35727C2.33164 3.46256 3.16522 3.54757 3.99998 3.61228V2.10765C3.0426 2.03119 2.08686 1.92725 1.13395 1.79581L0.852462 1.75699L-0.0000127554 1.6394L-0.0000159144 2.49995L-0.0000323345 7.00003H1.49997Z' fill='currentColor'/></svg>",
  rotate_90: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.21967 4.71967L5.68934 5.25L6.75 6.31066L7.28033 5.78033L9.25 3.81066V13.5C9.25 13.6381 9.13807 13.75 9 13.75H2.75H2V15.25H2.75H9C9.9665 15.25 10.75 14.4665 10.75 13.5V3.81066L12.7197 5.78033L13.25 6.31066L14.3107 5.25L13.7803 4.71967L10.5303 1.46967C10.2374 1.17678 9.76256 1.17678 9.46967 1.46967L6.21967 4.71967Z' fill='currentColor'/></svg>",
  back_initial: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 14V2.5' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M4.5 3.5h6.2l-1.6 2.2 1.6 2.2H4.5z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M12.8 12.2H7.2' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='m8.9 10.6-1.7 1.6 1.7 1.6' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
  delete: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
  eye: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M4.02168 4.76932C6.11619 2.33698 9.88374 2.33698 11.9783 4.76932L14.7602 7.99999L11.9783 11.2307C9.88374 13.663 6.1162 13.663 4.02168 11.2307L1.23971 7.99999L4.02168 4.76932ZM13.1149 3.79054C10.422 0.663244 5.57797 0.663247 2.88503 3.79054L-0.318359 7.5106V8.48938L2.88503 12.2094C5.57797 15.3367 10.422 15.3367 13.1149 12.2094L16.3183 8.48938V7.5106L13.1149 3.79054ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z' fill='currentColor'/></svg>",
  eye_dashed: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.51404 3.15793C7.48217 2.87411 8.51776 2.87411 9.48589 3.15793L9.90787 1.71851C8.66422 1.35392 7.33571 1.35392 6.09206 1.71851L6.51404 3.15793ZM10.848 3.78166C11.2578 4.04682 11.6393 4.37568 11.9783 4.76932L13.046 6.00934L14.1827 5.03056L13.1149 3.79054C12.6818 3.28761 12.1918 2.86449 11.6628 2.52224L10.848 3.78166ZM4.02168 4.76932C4.36065 4.37568 4.74209 4.04682 5.15195 3.78166L4.33717 2.52225C3.80815 2.86449 3.3181 3.28761 2.88503 3.79054L1.81723 5.03056L2.95389 6.00934L4.02168 4.76932ZM14.1138 7.24936L14.7602 7.99999L14.1138 8.75062L15.2505 9.72941L16.3183 8.48938V7.5106L15.2505 6.27058L14.1138 7.24936ZM1.88609 7.24936L1.23971 7.99999L1.88609 8.75062L0.749437 9.72941L-0.318359 8.48938V7.5106L0.749436 6.27058L1.88609 7.24936ZM13.0461 9.99064L11.9783 11.2307C11.6393 11.6243 11.2578 11.9532 10.848 12.2183L11.6628 13.4777C12.1918 13.1355 12.6818 12.7124 13.1149 12.2094L14.1827 10.9694L13.0461 9.99064ZM4.02168 11.2307L2.95389 9.99064L1.81723 10.9694L2.88503 12.2094C3.3181 12.7124 3.80815 13.1355 4.33717 13.4777L5.15195 12.2183C4.7421 11.9532 4.36065 11.6243 4.02168 11.2307ZM9.90787 14.2815L9.48589 12.8421C8.51776 13.1259 7.48217 13.1259 6.51405 12.8421L6.09206 14.2815C7.33572 14.6461 8.66422 14.6461 9.90787 14.2815ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z' fill='currentColor'/></svg>",
  fullscreen: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M1 5.25V6H2.5V5.25V2.5H5.25H6V1H5.25H2C1.44772 1 1 1.44772 1 2V5.25ZM5.25 14.9994H6V13.4994H5.25H2.5V10.7494V9.99939H1V10.7494V13.9994C1 14.5517 1.44772 14.9994 2 14.9994H5.25ZM15 10V10.75V14C15 14.5523 14.5523 15 14 15H10.75H10V13.5H10.75H13.5V10.75V10H15ZM10.75 1H10V2.5H10.75H13.5V5.25V6H15V5.25V2C15 1.44772 14.5523 1 14 1H10.75Z' fill='currentColor'/></svg>",
  camera: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.75 5.25H4.79C5.23 5.25 5.63 4.98 5.79 4.57L6.02 3.98C6.18 3.57 6.58 3.3 7.02 3.3H8.98C9.42 3.3 9.82 3.57 9.98 3.98L10.21 4.57C10.37 4.98 10.77 5.25 11.21 5.25H13.25C13.8 5.25 14.25 5.7 14.25 6.25V11.25C14.25 11.8 13.8 12.25 13.25 12.25H2.75C2.2 12.25 1.75 11.8 1.75 11.25V6.25C1.75 5.7 2.2 5.25 2.75 5.25Z'/><circle cx='8' cy='8.75' r='2.25'/></svg>",
  // Source: vercel.com/geist/icons
  plus_circle: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.75 4.25V5V7.25H11H11.75V8.75H11H8.75V11V11.75L7.25 11.75V11V8.75H5H4.25V7.25H5H7.25V5V4.25H8.75Z' fill='currentColor'/></svg>",
  image: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M2.5 2h11A1.5 1.5 0 0 1 15 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2ZM2 9.56l2.77-2.77a1 1 0 0 1 1.41 0l1.32 1.32 2.82-2.82a1 1 0 0 1 1.42 0L14 7.55V3.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v6.06Zm0 1.41V12.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V8.97L10.8 5.76 7.85 8.7a.75.75 0 0 1-1.06 0L5.47 7.38 2 10.97ZM5.5 4.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Z' fill='currentColor'/></svg>",
  fullscreen_close: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6 1V1.75V5C6 5.55229 5.55228 6 5 6H1.75H1V4.5H1.75H4.5V1.75V1H6ZM14.25 6H15V4.5H14.25H11.5V1.75V1H10V1.75V5C10 5.55228 10.4477 6 11 6H14.25ZM10 14.25V15H11.5V14.25V11.5H14.29H15.04V10H14.29H11C10.4477 10 10 10.4477 10 11V14.25ZM1.75 10H1V11.5H1.75H4.5V14.25V15H6V14.25V11C6 10.4477 5.55229 10 5 10H1.75Z' fill='currentColor'/></svg>",
  circle_dashed_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10.1 2.6A9.9 9.9 0 0 1 13.9 2.6'/><path d='M17.8 4.2a9.9 9.9 0 0 1 2 2.8'/><path d='M21.4 10.1a9.9 9.9 0 0 1 0 3.8'/><path d='M19.8 17.8a9.9 9.9 0 0 1-2.8 2'/><path d='M13.9 21.4a9.9 9.9 0 0 1-3.8 0'/><path d='M6.2 19.8a9.9 9.9 0 0 1-2-2.8'/><path d='M2.6 13.9a9.9 9.9 0 0 1 0-3.8'/><path d='M4.2 6.2a9.9 9.9 0 0 1 2.8-2'/></svg>",
  // Source: Lucide paintbrush-vertical
  paintbrush_vertical_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 2v2'/><path d='M14 2v4'/><path d='M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z'/><path d='M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1'/></svg>",
  lock_closed: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M10 4.5V6H6V4.5C6 3.39543 6.89543 2.5 8 2.5C9.10457 2.5 10 3.39543 10 4.5ZM4.5 6V4.5C4.5 2.567 6.067 1 8 1C9.933 1 11.5 2.567 11.5 4.5V6H12.5H14V7.5V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V7.5V6H3.5H4.5ZM11.5 7.5H10H6H4.5H3.5V12.5C3.5 13.0523 3.94772 13.5 4.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V7.5H11.5Z' fill='currentColor'></path></svg>",
  lock_open: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14 6V4.5C14 3.39543 13.1046 2.5 12 2.5C10.8954 2.5 10 3.39543 10 4.5V6H10.5H12V7.5V12.5C12 13.8807 10.8807 15 9.5 15H2.5C1.11929 15 0 13.8807 0 12.5V7.5V6H1.5H8.5V4.5C8.5 2.567 10.067 1 12 1C13.933 1 15.5 2.567 15.5 4.5V6H14ZM10.5 7.5H10H8.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H9.5C10.0523 13.5 10.5 13.0523 10.5 12.5V7.5Z' fill='currentColor'></path></svg>"
};
function Lt(e) {
  return Number(e) === 180 ? 180 : 360;
}
function u_(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function f_(e) {
  return 1 - Math.pow(1 - e, 3);
}
function d_(e) {
  return e * e * e;
}
function Fn(e, t, n) {
  return { x: e, y: t, z: n };
}
function Ua(e, t) {
  return Fn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ga(e, t) {
  return Fn(e.x * t, e.y * t, e.z * t);
}
function Sn(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Ka(e, t) {
  return Fn(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Xr(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Fn(e.x / t, e.y / t, e.z / t);
}
function Cn(e, t) {
  const n = e * Pt, r = t * Pt, a = Math.cos(r);
  return Fn(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Wa(e) {
  return {
    yaw: Rt(Math.atan2(e.x, e.z) * ur),
    pitch: B(Math.asin(B(e.y, -1, 1)) * ur, -90, 90)
  };
}
function Kn(e, t) {
  let n = !1;
  for (let r = 0, a = t.length - 1; r < t.length; a = r++) {
    const s = t[r].x, u = t[r].y, f = t[a].x, g = t[a].y;
    u > e.y != g > e.y && e.x < (f - s) * (e.y - u) / (g - u || 1e-6) + s && (n = !n);
  }
  return n;
}
function cr(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Gs(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), s = Number(e.x || 0) - Number(t.x || 0), u = Number(e.y || 0) - Number(t.y || 0), f = r * r + a * a;
  if (f <= 1e-6) return cr(e, t);
  const g = B((s * r + u * a) / f, 0, 1), y = Number(t.x || 0) + r * g, x = Number(t.y || 0) + a * g, d = Number(e.x || 0) - y, w = Number(e.y || 0) - x;
  return d * d + w * w;
}
function Wn(e, t, n) {
  return e + (t - e) * n;
}
function An(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(B(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(B(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(B(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${B(n, 0, 1)})`;
}
function h_(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Ya = { fillStyle: "", url: "" };
function g_(e, t, n) {
  if (Ya.url && Ya.fillStyle === String(e || ""))
    return Ya.url;
  const r = h_(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Do}" height="${Do}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Ya = { fillStyle: String(e || ""), url: r }, r;
}
function lo(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function ln(e) {
  return {
    r: B(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: B(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: B(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: B(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Ht(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function p_(e) {
  return co.some((t) => lo(e, t.color));
}
function Ks(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, a = B(Number(t), 0, 1), s = B(Number(n), 0, 1);
  if (a <= 1e-6) return { r: s, g: s, b: s };
  const u = Math.floor(r * 6), f = r * 6 - u, g = s * (1 - a), y = s * (1 - f * a), x = s * (1 - (1 - f) * a);
  switch (u % 6) {
    case 0:
      return { r: s, g: x, b: g };
    case 1:
      return { r: y, g: s, b: g };
    case 2:
      return { r: g, g: s, b: x };
    case 3:
      return { r: g, g: y, b: s };
    case 4:
      return { r: x, g, b: s };
    default:
      return { r: s, g, b: y };
  }
}
function Ws(e) {
  const t = B(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = B(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = B(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, r), s = Math.min(t, n, r), u = a - s;
  let f = 0;
  u > 1e-6 && (a === t ? f = ((n - r) / u + (n < r ? 6 : 0)) / 6 : a === n ? f = ((r - t) / u + 2) / 6 : f = ((t - n) / u + 4) / 6);
  const g = a <= 1e-6 ? 0 : u / a;
  return { h: f, s: g, v: a };
}
function m_(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function gf(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function y_(e, t) {
  const n = gf(e, 1), r = gf(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const a = 1e3, s = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(r * a)), f = (d, w) => w ? f(w, d % w) : d, g = f(s, u) || 1, y = Math.max(1, Math.round(s / g)), x = Math.max(1, Math.round(u / g));
  return `${y}:${x}`;
}
function Oi(e) {
  const t = B(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Pt, n = B(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Pt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function b_(e) {
  const t = Number(e);
  if (!Number.isFinite(t) || t <= 0) return "1:1";
  const n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ], r = 0.015;
  for (const [a, s] of n)
    if (Math.abs(t - s) <= r) return a;
  return "";
}
function Sr(e) {
  const t = Oi(e);
  return b_(t) || y_(t, 1);
}
function rh(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Sr(t), t;
}
function Ii(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Sr(e);
}
let qa = null;
function v_() {
  return qa || (qa = new Promise((e) => {
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
  }), qa);
}
const ih = "pano_suite.ui_settings.v1", ah = "pano_suite.node_grid_visibility.v1";
let ti = null, In = null, Xa = { text: null, parsed: null };
function Yi(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function __() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(ih)) || "").trim();
    if (!t) return ti ? Yi(ti) : null;
    const n = JSON.parse(t), r = Yi(n);
    return ti = r, r;
  } catch {
    return ti ? Yi(ti) : null;
  }
}
function x_(e) {
  var n;
  const t = Yi(e);
  ti = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(ih, JSON.stringify(t));
  } catch {
  }
  return t;
}
function oh() {
  var e;
  if (In && typeof In == "object")
    return In;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(ah)) || "").trim();
    if (!t)
      return In = {}, In;
    const n = JSON.parse(t);
    return In = n && typeof n == "object" ? n : {}, In;
  } catch {
    return In = {}, In;
  }
}
function w_(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = oh()[n];
  return typeof a == "boolean" ? a : !!t;
}
function S_(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = oh();
  r[n] = !!t, In = r;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(ah, JSON.stringify(r));
  } catch {
  }
}
function N_(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function M_(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function k_(e) {
  var r, a;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function pf(e) {
  const { paintCount: t, maskCount: n } = k_(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let a = 0, s = 0;
  return r.forEach((u) => {
    String((u == null ? void 0 : u.layerKind) || "paint") === "mask" ? s += 1 : a += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: a,
    maskRasterCount: s,
    totalPaintCount: t + a,
    totalMaskCount: n + s
  };
}
function Zr(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function mf(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function P_(e) {
  return Array.isArray(e) ? e.map((t) => !t || typeof t != "object" ? t : rh(t)) : [];
}
function C_(e, t = 2048, n = "#00ff00", r = 360) {
  const a = __(), s = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Lt(r),
    bg_color: n,
    output_preset: t,
    assets: {},
    stickers: [],
    shots: [],
    painting: Wi(null),
    painting_layer: null,
    ui_settings: {
      invert_view_x: !!(a != null && a.invert_view_x),
      invert_view_y: !!(a != null && a.invert_view_y),
      preview_quality: String((a == null ? void 0 : a.preview_quality) || "balanced")
    },
    active: { selected_sticker_id: null, selected_shot_id: null }
  }, u = String(e || "").trim();
  if (!u) return s;
  try {
    let f = null;
    if (Xa.text === u ? f = Xa.parsed : (f = JSON.parse(u), Xa = { text: u, parsed: f }), !f || typeof f != "object" || Array.isArray(f)) return s;
    const g = {
      ...s,
      ...f,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: N_(f.assets),
      stickers: M_(f.stickers),
      shots: P_(f.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: Wi(f.painting),
      painting_layer: f.painting_layer && typeof f.painting_layer == "object" ? f.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(f.ui_settings && f.ui_settings.invert_view_x),
        invert_view_y: !!(f.ui_settings && f.ui_settings.invert_view_y),
        preview_quality: (() => {
          var x;
          const y = String(((x = f.ui_settings) == null ? void 0 : x.preview_quality) || "balanced");
          return y === "draft" || y === "balanced" || y === "high" ? y : "balanced";
        })()
      },
      active: f.active && typeof f.active == "object" ? { ...f.active } : { ...s.active }
    };
    return a && (g.ui_settings = Yi({ ...g.ui_settings, ...a })), g.output_preset = bc(t, Number(g.output_preset || s.output_preset)), g.bg_color = String(n || g.bg_color || s.bg_color), g.coverage = Lt(r), delete g.editor_history, g;
  } catch {
    return Xa = { text: u, parsed: null }, s;
  }
}
function pn(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function Yc(e) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const t = pn(e, "coverage");
  if (!t) return;
  const n = typeof t.callback == "function" ? t.callback.bind(t) : null;
  t.callback = function(...r) {
    var s, u, f, g, y, x, d, w, N, A;
    const a = n ? n(...r) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (s = e.__panoPreviewNodeRuntime) == null ? void 0 : s.requestDraw) == null || u.call(s), (g = (f = e.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || g.call(f), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (d = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || d.call(x, !0, !0), (A = (N = (w = un) == null ? void 0 : w.canvas) == null ? void 0 : N.setDirty) == null || A.call(N, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function A_(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function yf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function I_(e) {
  var N, A, D, O, H;
  if (!e || e.__panoCoverageWidgetOrderMigrated) return;
  const t = pn(e, "coverage"), n = pn(e, "bg_color"), r = pn(e, Io), a = pn(e, "sticker_state");
  if (!t || !n || !r) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const s = String(t.value ?? "").trim(), u = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(s) && A_(s) && (yf(u) || u === ""))) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let y = "360";
  if (yf(u))
    try {
      const R = JSON.parse(u);
      y = String(Lt(R == null ? void 0 : R.coverage));
    } catch {
      y = "360";
    }
  const x = s, d = u, w = f;
  t.value = y, (N = t.callback) == null || N.call(t, y), n.value = x, (A = n.callback) == null || A.call(n, x), r.value = d, (D = r.callback) == null || D.call(r, d), a && (a.value = w, (O = a.callback) == null || O.call(a, w)), (H = e.setDirtyCanvas) == null || H.call(e, !0, !0), e.__panoCoverageWidgetOrderMigrated = !0;
}
function Ys(e) {
  return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function D_(e, t) {
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
function E_(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var s, u;
    const a = String((r == null ? void 0 : r.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (s = r.inputEl) != null && s.style && (r.inputEl.style.display = "none"), (u = r.parentEl) != null && u.style && (r.parentEl.style.display = "none")));
  });
}
function yc(e, t, n) {
  var s, u;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(t));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (s = a.inputEl) != null && s.style && (a.inputEl.style.display = ""), (u = a.parentEl) != null && u.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var f;
    return [Math.max(120, Number(((f = e == null ? void 0 : e.size) == null ? void 0 : f[0]) || 0) - 20), 30];
  }), a) : (a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a);
}
function Za(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function bc(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function sh(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function T_(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function ch(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function L_(e, t, n = null) {
  var a, s;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((a = r == null ? void 0 : r.isSubgraphNode) != null && a.call(r))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = u ? (s = r.resolveSubgraphOutputLink) == null ? void 0 : s.call(r, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = T_(e == null ? void 0 : e.graph, n)), r;
}
function Eo(e) {
  var a;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t), n.set("type", String(e.type || "output")), e.subfolder && n.set("subfolder", String(e.subfolder));
  const r = `/view?${n.toString()}`;
  return typeof ((a = Jt) == null ? void 0 : a.apiURL) == "function" ? Jt.apiURL(r) : r;
}
function R_(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function O_(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), s = r.join("/");
  return { filename: a, subfolder: s };
}
function F_(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function lh(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (R_(t)) return [t];
  const { filename: n, subfolder: r } = O_(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((s) => Eo({
    filename: n,
    subfolder: r,
    type: s
  }));
  return F_([...a, t]);
}
function V_(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Eo({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function qi(e) {
  var r;
  const t = (r = un) == null ? void 0 : r.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  return t instanceof Map ? t.get(e) || t.get(n) || t.get(Number(n)) || null : t[e] || t[n] || null;
}
function hi(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return hi(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Eo({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = hi(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Eo(e);
}
function H_(e, t = -1) {
  var a;
  const n = [];
  Array.isArray(e == null ? void 0 : e.images) && e.images.length && n.push(e.images), Array.isArray((a = e == null ? void 0 : e.ui) == null ? void 0 : a.images) && e.ui.images.length && n.push(e.ui.images);
  const r = [];
  for (const s of n)
    !Array.isArray(s) || !s.length || (t >= 0 && t < s.length && r.push(s[t]), r.push(...s));
  return r;
}
function qs(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e || []) {
    const a = hi(r);
    !a || n.has(a) || (n.add(a), t.push(a));
  }
  return t;
}
function z_(e, t, n, r = null) {
  var d;
  const a = qi(e == null ? void 0 : e.id), s = Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d[t]) ? a.ui[t] : Array.isArray(a == null ? void 0 : a[t]) ? a[t] : [], u = Array.isArray(s) && s.length ? s[0] : null, f = hi(u);
  if (!f) return null;
  const g = `__ui__${t}`, y = n.get(g);
  if (y && y.__panoSrc === f) return y;
  const x = new Image();
  return x.__panoSrc = f, x.onload = () => {
    typeof r == "function" && r(x);
  }, x.src = f, n.set(g, x), x;
}
function j_(e, t) {
  var R, E;
  const n = String(t || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [], a = r.findIndex((C) => String((C == null ? void 0 : C.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const s = r[a], u = s == null ? void 0 : s.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const f = sh(e.graph, u), { originId: g, originSlot: y } = ch(f);
  if (g == null) return { src: "", sourceType: "", inputName: n };
  const x = L_(e, a, g), d = Number(y || 0);
  if (!x) return { src: "", sourceType: "", inputName: n };
  let w = [];
  try {
    w = typeof ((R = un) == null ? void 0 : R.getNodeImageUrls) == "function" ? un.getNodeImageUrls(x) || [] : [];
  } catch {
    w = [];
  }
  if (Array.isArray(w) && w.length) {
    const C = [];
    d >= 0 && d < w.length && C.push(w[d]), C.push(...w);
    const $ = qs(C);
    if ($.length) return { src: $[0], srcCandidates: $, sourceType: "appNodeImageUrls", inputName: n };
  }
  const N = qi((x == null ? void 0 : x.id) ?? g), A = H_(N, d), D = qs(A);
  if (D.length) return { src: D[0], srcCandidates: D, sourceType: "nodeOutputs", inputName: n };
  const O = Array.isArray(x == null ? void 0 : x.imgs) ? x.imgs : [];
  if (O.length) {
    const C = [];
    d >= 0 && d < O.length && C.push(O[d]), C.push(...O);
    const $ = qs(C);
    if ($.length) return { src: $[0], srcCandidates: $, sourceType: "nodeImgs", inputName: n };
  }
  const H = (E = x == null ? void 0 : x.widgets) == null ? void 0 : E.find((C) => String((C == null ? void 0 : C.name) || "").toLowerCase() === "image");
  if (H) {
    let C = hi(H.value);
    if (C && !C.includes("/") && !C.includes(":") && (x.comfyClass === "LoadImage" || x.type === "LoadImage") && (C = Jt.apiURL(`/view?filename=${encodeURIComponent(C)}&type=input&subfolder=`)), C) return { src: C, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function $_(e, t, n, r = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const s = lh(a);
  if (!s.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(t || "image"), f = e.__panoLinkedInputImageCache.get(u);
  if (f && f.srcRaw === a && f.img) return f.img;
  const g = new Image(), y = { srcRaw: a, resolvedSrc: "", img: g };
  e.__panoLinkedInputImageCache.set(u, y);
  let x = -1;
  const d = () => {
    var N, A;
    if (x += 1, x >= s.length) {
      try {
        (A = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || A.call(N, u);
      } catch {
      }
      return;
    }
    const w = s[x];
    y.resolvedSrc = w, g.src = w;
  };
  return g.onload = () => {
    var w;
    r == null || r(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0);
  }, g.onerror = () => {
    var w, N;
    if (x + 1 < s.length) {
      d();
      return;
    }
    try {
      (N = (w = e.__panoLinkedInputImageCache) == null ? void 0 : w.delete) == null || N.call(w, u);
    } catch {
    }
  }, d(), g;
}
function B_(e, t, n, r = null) {
  const a = Array.isArray(n) ? n.map((A) => String(A || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = String(t || "image"), u = a.join(`
`), f = e.__panoLinkedInputImageCache.get(s);
  if (f && f.srcRaw === u && f.img) return f.img;
  const g = [], y = /* @__PURE__ */ new Set();
  if (a.forEach((A) => {
    lh(A).forEach((D) => {
      const O = String(D || "").trim();
      !O || y.has(O) || (y.add(O), g.push(O));
    });
  }), !g.length) return null;
  const x = new Image(), d = { srcRaw: u, resolvedSrc: "", img: x };
  e.__panoLinkedInputImageCache.set(s, d);
  let w = -1;
  const N = () => {
    var D, O;
    if (w += 1, w >= g.length) {
      try {
        (O = (D = e.__panoLinkedInputImageCache) == null ? void 0 : D.delete) == null || O.call(D, s);
      } catch {
      }
      return;
    }
    const A = g[w];
    d.resolvedSrc = A, x.src = A;
  };
  return x.onload = () => {
    var A;
    r == null || r(), (A = e.setDirtyCanvas) == null || A.call(e, !0, !0);
  }, x.onerror = () => {
    var A, D;
    if (w + 1 < g.length) {
      N();
      return;
    }
    try {
      (D = (A = e.__panoLinkedInputImageCache) == null ? void 0 : A.delete) == null || D.call(A, s);
    } catch {
    }
  }, N(), x;
}
function uh(e, t = []) {
  const n = Array.isArray(t) ? t : [t];
  for (const r of n) {
    const a = j_(e, r);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function bf(e, t = [], n = null, r = "") {
  const a = Array.isArray(t) ? t : [t], s = uh(e, a), u = String(r || a.join("|") || "image_exact"), f = Array.isArray(s == null ? void 0 : s.srcCandidates) ? s.srcCandidates : [];
  if (f.length) return B_(e, u, f, n);
  const g = String((s == null ? void 0 : s.src) || "").trim();
  return g ? $_(e, u, g, n) : null;
}
async function Xi(e, t, n = {}) {
  const r = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? r, s = r, u = D_(e, t);
  await v_();
  const f = pn(e, "output_preset"), g = pn(e, "coverage"), y = pn(e, "bg_color"), x = pn(e, Io), d = C_(
    String((x == null ? void 0 : x.value) || ""),
    bc(f == null ? void 0 : f.value, 2048),
    String((y == null ? void 0 : y.value) || "#00ff00"),
    Lt(g == null ? void 0 : g.value)
  );
  e.__panoLiveStateOverride = JSON.stringify(d), t === "cutout" && (d.shots = Array.isArray(d.shots) ? d.shots.slice(0, 1) : [], d.shots.length || (d.active.selected_shot_id = null));
  const w = t === "cutout" ? (() => {
    var c;
    const i = Array.isArray(d.shots) ? d.shots : [], o = String(((c = d == null ? void 0 : d.active) == null ? void 0 : c.selected_shot_id) || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === o) || i[0] || null;
  })() : null, N = w ? _l(w, !1) : { width: 220, height: 132 }, A = nh(t), D = /* @__PURE__ */ Ho({
    viewButtons: (A.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    toolButtons: (A.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...(A.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...s ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Tt.fullscreen, disabled: !1 }] : []
    ],
    fovValue: "100°",
    outputPreviewToggle: {
      visible: !1,
      icon: Tt.fullscreen,
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
      customColorCss: An({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: An({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (i, o) => ({ index: o, color: null })),
      sizeValue: 10,
      sizeText: "10",
      sizeFill: "7.56%",
      sizeDisabled: !1,
      showSizeRow: !0,
      clearVisible: { paint: !0, mask: !0 },
      activeTools: { paint: "pen", mask: "pen" }
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
      width: N.width,
      height: N.height,
      label: w ? "Loading preview" : "Add Frame to preview"
    }
  }), O = document.createElement("div");
  document.body.appendChild(O);
  const H = Y1(s_, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: A,
    paintSwatches: co.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: An(i.color, 1)
    })),
    uiState: D,
    onClose: () => Kr()
  });
  try {
    H.mount(O);
  } catch (i) {
    try {
      H.unmount();
    } catch {
    }
    throw O.remove(), i;
  }
  const R = O.querySelector(".pano-modal-overlay"), E = O.querySelector(".pano-modal"), C = E == null ? void 0 : E.querySelector("[data-stage-overlay]"), $ = E == null ? void 0 : E.querySelector("[data-stage-background]"), ie = E == null ? void 0 : E.querySelector(".pano-stage-wrap");
  if (!R || !E || !C || !$ || !ie)
    throw H.unmount(), O.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const ae = document.createElement("div");
  ae.setAttribute("aria-hidden", "true"), ae.style.position = "absolute", ae.style.left = "0", ae.style.top = "0", ae.style.pointerEvents = "none", ae.style.zIndex = "12", ae.style.display = "none", ae.style.willChange = "transform,width,height,background,border-radius", ie == null || ie.appendChild(ae);
  const re = document.createElement("div");
  re.className = "pano-paint-size-preview", re.setAttribute("aria-hidden", "true");
  const we = document.createElement("div");
  we.className = "pano-paint-size-preview-sample", re.appendChild(we), ie == null || ie.appendChild(re);
  const k = C.getContext("2d"), ce = pi(), ge = t === "cutout" ? lb({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, xe = E.querySelector("[data-side]"), ve = E.querySelector("[data-selection-menu]"), J = E.querySelector("[data-tooltip]"), le = E.querySelector("[data-camera-preview-host]"), _e = E.querySelector("[data-paint-color-row]"), G = E.querySelector("[data-paint-color-pop]"), fe = E.querySelector("[data-paint-color-sv]"), ke = E.querySelector("[data-paint-color-sv-cursor]"), Te = E.querySelector("[data-paint-hue-strip]"), Oe = E.querySelector("[data-paint-hue-handle]");
  let Ye = 0, ht = 0;
  ie == null || ie.removeAttribute("data-stage-ready"), ie == null || ie.setAttribute("data-stage-loading-kind", "boot"), C.style.opacity = "1", $.style.opacity = "0", a && (xe == null || xe.remove(), E.classList.add("pano-modal-readonly"));
  const Ut = () => {
    if (!m.customPaintSessionStart) return;
    if (lo(m.customPaintSessionStart, m.customPaintColor)) {
      m.customPaintSessionStart = null;
      return;
    }
    if (p_(m.customPaintColor)) {
      m.customPaintSessionStart = null;
      return;
    }
    const i = [
      ln(m.customPaintColor),
      ...m.customPaintHistory.filter((o) => !lo(o, m.customPaintColor))
    ];
    m.customPaintHistory = i.slice(0, 8), m.customPaintSessionStart = null;
  }, bt = (i = !1) => {
    !G || G.hidden || (i ? Ut() : m.customPaintSessionStart = null, G.hidden = !0, D.paintDock.colorPopOpen = !1);
  }, Gt = () => {
    G && (G.hidden && (m.customPaintSessionStart = ln(m.customPaintColor)), G.hidden = !1, D.paintDock.colorPopOpen = !0);
  };
  E.addEventListener("pointerdown", (i) => {
    Ca(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (E.querySelectorAll(".pano-picker-pop").forEach((o) => {
      o.hidden = !0;
    }), bt(!0), t === "cutout" && m.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (m.cutoutAspectOpen = !1, m.menuMode = "", m.menuSize.measured = !1, Be(), ye())));
  });
  const sn = t === "stickers" ? d.active.selected_sticker_id : d.active.selected_shot_id, hn = JSON.stringify(mf(d)), m = {
    mode: "pano",
    selectedId: sn,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Lt(d.coverage),
    historyController: Ky(80, { entries: [hn], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Gn,
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
    showGrid: w_(e == null ? void 0 : e.id, !0),
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
    frameView: { zoom: 1, panX: 0, panY: 0 },
    paintEngine: cc(),
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
    panelLastValues: null,
    panelWasEnabled: !1,
    viewTween: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null
  }, ft = ge && le ? ge.mount(le, { shot: null }) : null;
  t === "stickers" && (m.selectedId = null, d.active.selected_sticker_id = null), m.selectedIds = m.selectedId ? [m.selectedId] : [];
  const T = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), I = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: t === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1
  }, j = {
    timer: 0,
    target: null
  }, W = {
    active: !1,
    depth: 0
  };
  function te() {
    D.toolButtons.forEach((i) => {
      const o = i.attr === "data-tool-mode", c = i.attr === "data-paint-tool", l = i.attr === "data-mask-tool";
      i.active = o ? i.value === m.primaryTool : c ? i.key === m.paintTool : l ? i.key === m.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function Z(i) {
    const o = i == null ? void 0 : i.dataTransfer;
    if (!o) return !1;
    if (o.items && o.items.length) {
      for (const c of o.items) {
        if (!c || c.kind !== "file") continue;
        const l = String(c.type || "").toLowerCase();
        if (!l || l.startsWith("image/")) return !0;
      }
      return !1;
    }
    return o.files && o.files.length ? Array.from(o.files).some((c) => Sa(c)) : !1;
  }
  function Y(i) {
    const o = !!i;
    W.active !== o && (W.active = o, ie.classList.toggle("drop-active", o));
  }
  function pe(i, o, c = m.viewFov, l = 140, h = 620) {
    const p = Em(m.viewYaw, i), v = o - m.viewPitch, b = c - m.viewFov, _ = Math.hypot(p, v) + Math.abs(b) * 0.6, S = Math.round(B(l + _ * 2.2, l, h));
    m.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: S,
      startYaw: m.viewYaw,
      startPitch: m.viewPitch,
      startFov: m.viewFov,
      targetPitch: o,
      targetFov: c,
      deltaYaw: p
    }, m.viewInertia.active = !1, m.viewInertia.vx = 0, m.viewInertia.vy = 0, ye();
  }
  Rh();
  function ue() {
    return t === "stickers" ? d.stickers : d.shots;
  }
  function de() {
    const i = d.painting || (d.painting = Wi(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function Me(i = "paint") {
    var h, p;
    const o = Array.isArray((p = (h = d.painting) == null ? void 0 : h[i]) == null ? void 0 : p.strokes) ? d.painting[i].strokes : [], c = [], l = /* @__PURE__ */ new Set();
    for (const v of o) {
      const b = String((v == null ? void 0 : v.actionGroupId) || "").trim();
      !b || l.has(b) || (l.add(b), c.push(b));
    }
    return c;
  }
  function De() {
    return Me("paint");
  }
  function Ie(i, o) {
    const c = String(o || "").trim();
    return c ? `${i === "mask" ? "mask" : "paint"}:${c}` : "";
  }
  function Le(i) {
    const o = String(i || "").trim();
    return o ? `raster:${o}` : "";
  }
  function Fe(i) {
    const o = String(i || "").trim();
    if (!o) return "";
    const c = o.match(/^raster:(.*)$/);
    return String(c ? c[1] || "" : o).trim();
  }
  function at(i, o = null) {
    const c = String(i || "").trim();
    if (!c) return { layerKind: "paint", actionGroupId: "" };
    const l = c.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: c };
  }
  function Pe() {
    var o;
    let i = -1;
    for (const c of Array.isArray(d.stickers) ? d.stickers : [])
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of de())
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of Array.isArray((o = d.painting) == null ? void 0 : o.raster_objects) ? d.painting.raster_objects : [])
      String((c == null ? void 0 : c.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0)));
    return i + 1;
  }
  function vt(i, o = null) {
    const c = String(i || "").trim();
    if (!c) return null;
    const l = de();
    let h = l.find((p) => String((p == null ? void 0 : p.actionGroupId) || "") === c);
    return h ? o != null && (h.z_index = Math.max(0, Number(o || 0))) : (h = {
      id: c,
      type: "strokeGroup",
      actionGroupId: c,
      z_index: o == null ? Pe() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, l.push(h)), h;
  }
  function kn(i) {
    if (!(i != null && i.centerUv)) return [];
    const o = Number(i.centerUv.u || 0), c = Number(i.centerUv.v || 0), l = Number(i.halfW || 0), h = Number(i.halfH || 0);
    return [
      {
        u: ((o - l) % 1 + 1) % 1,
        v: B(c - h, 0, 1)
      },
      {
        u: ((o + l) % 1 + 1) % 1,
        v: B(c - h, 0, 1)
      },
      {
        u: ((o + l) % 1 + 1) % 1,
        v: B(c + h, 0, 1)
      },
      {
        u: ((o - l) % 1 + 1) % 1,
        v: B(c + h, 0, 1)
      }
    ];
  }
  function _t() {
    const i = new Set(De()), c = de().filter((l) => i.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return i.forEach((l) => {
      c.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === l) || c.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: Pe(),
        locked: !1,
        frame: null
      });
    }), c.sort((l, h) => Number((l == null ? void 0 : l.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), d.painting.groups = c, c;
  }
  function Kt(i, o, c) {
    var z;
    const l = (X) => (Number(X || 0) % 1 + 1) % 1, h = [];
    for (const X of c) {
      const Q = X == null ? void 0 : X.geometry, he = (Q == null ? void 0 : Q.geometryKind) === "lasso_fill" ? Q == null ? void 0 : Q.points : (Q == null ? void 0 : Q.processedPoints) || (Q == null ? void 0 : Q.rawPoints) || (Q == null ? void 0 : Q.points) || [];
      Array.isArray(he) && h.push(...he);
    }
    if (!h.length) return null;
    const p = l(((z = h[0]) == null ? void 0 : z.u) || 0);
    let v = 0, b = 0;
    h.forEach((X) => {
      const Q = l((X == null ? void 0 : X.u) || 0);
      v += p + gn(Q, p), b += Number((X == null ? void 0 : X.v) || 0);
    });
    const _ = (v / h.length % 1 + 1) % 1;
    let S = 1 / 0, P = -1 / 0, M = 1 / 0, L = -1 / 0;
    h.forEach((X) => {
      const Q = l((X == null ? void 0 : X.u) || 0), he = gn(Q, _);
      S = Math.min(S, he), P = Math.max(P, he);
      const ne = Number((X == null ? void 0 : X.v) || 0);
      M = Math.min(M, ne), L = Math.max(L, ne);
    });
    const F = c.reduce((X, Q) => {
      const he = ar(String((Q == null ? void 0 : Q.toolKind) || "pen")), ne = nn[he] || nn[Gn], me = Math.max(1, Number((Q == null ? void 0 : Q.size) || 10)) * Math.max(0.1, Number((ne == null ? void 0 : ne.sizeScale) ?? 1));
      return Math.max(X, me);
    }, 0), U = Math.max(35e-4, F / 2048);
    return {
      centerUv: { u: ((_ + (S + P) * 0.5) % 1 + 1) % 1, v: B((M + L) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (P - S) * 0.5 + U,
      halfH: (L - M) * 0.5 + U,
      uvPad: U
    };
  }
  function Nt(i, o, c) {
    const l = String(i || "").trim();
    if (!l) return null;
    const h = de().find((v) => String((v == null ? void 0 : v.actionGroupId) || "") === l);
    if (!h) return null;
    const p = c || yn(l, o);
    return h.frame = Kt(l, o, p), h.frame;
  }
  function jn() {
    var l;
    const i = (Array.isArray(d.stickers) ? d.stickers : []).map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), o = _t().map((h) => ({
      type: "strokeGroup",
      id: String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || ""),
      actionGroupId: String((h == null ? void 0 : h.actionGroupId) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), c = (Array.isArray((l = d.painting) == null ? void 0 : l.raster_objects) ? d.painting.raster_objects : []).filter((h) => String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => ({
      type: "rasterObject",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    }));
    return [...i, ...o, ...c].sort((h, p) => Number(h.z_index || 0) - Number(p.z_index || 0));
  }
  function Lr(i = !0) {
    var c, l, h, p, v, b;
    const o = jn().filter((_) => _.type === "strokeGroup").map((_) => String(_.actionGroupId || "")).filter((_) => !!_);
    if (i) {
      const _ = String(((l = (c = m.interaction) == null ? void 0 : c.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), S = String(((p = (h = m.interaction) == null ? void 0 : h.stroke) == null ? void 0 : p.layerKind) || "").trim(), P = String(((b = (v = m.interaction) == null ? void 0 : v.stroke) == null ? void 0 : b.toolKind) || "").trim();
      _ && S === "paint" && P !== "eraser" && !o.includes(_) && o.push(_);
    }
    return o;
  }
  function Yo(i = !0) {
    var b, _, S, P, M, L;
    const o = jn();
    if (!i) return o;
    const c = String(((_ = (b = m.interaction) == null ? void 0 : b.stroke) == null ? void 0 : _.actionGroupId) || "").trim(), l = String(((P = (S = m.interaction) == null ? void 0 : S.stroke) == null ? void 0 : P.layerKind) || "").trim(), h = String(((L = (M = m.interaction) == null ? void 0 : M.stroke) == null ? void 0 : L.toolKind) || "").trim();
    if (!c || l !== "paint" || h === "eraser" || o.some((F) => F.type === "strokeGroup" && String(F.actionGroupId || "") === c))
      return o;
    const p = ot();
    let v = o.reduce((F, U) => Math.max(F, Number((U == null ? void 0 : U.z_index) || 0)), -1) + 1;
    return p && Mt(p) && String(p.actionGroupId || "") === c && (v = Number(p.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: c,
        actionGroupId: c,
        z_index: v,
        item: null
      }
    ].sort((F, U) => Number((F == null ? void 0 : F.z_index) || 0) - Number((U == null ? void 0 : U.z_index) || 0));
  }
  function fh() {
    return de().slice().sort((i, o) => Number((i == null ? void 0 : i.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((i) => Or(Ie("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function dh() {
    var i;
    return (Array.isArray((i = d.painting) == null ? void 0 : i.raster_objects) ? d.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, c) => Number((o == null ? void 0 : o.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((o) => Rr(Le((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function qc(i = m.interaction) {
    const o = String((i == null ? void 0 : i.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const c = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, l = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return c || l;
    }
    return !1;
  }
  function hh() {
    var o, c, l, h;
    let i = null;
    try {
      const p = Lr(), v = ((h = (l = (c = (o = m.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : c.call(o, p)) == null ? void 0 : l.displayPaint) == null ? void 0 : h.canvas) || null;
      v && (i = {
        source: v,
        revision: `${$r()}:${ca()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function ca() {
    var h, p, v, b, _, S, P;
    const i = m.interaction, o = String((i == null ? void 0 : i.kind) || "");
    if (!qc(i)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const M = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, L = String(((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.layerKind) || ""), F = ((v = M == null ? void 0 : M.rawPoints) == null ? void 0 : v.length) ?? ((b = M == null ? void 0 : M.points) == null ? void 0 : b.length) ?? 0, U = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${L || "paint"}_${o}_live${U}_${F}_${m.livePaintInteractionRevision}`;
    }
    const c = String(((_ = i == null ? void 0 : i.item) == null ? void 0 : _.actionGroupId) || ""), l = String(((S = i == null ? void 0 : i.item) == null ? void 0 : S.rasterObjectId) || ((P = i == null ? void 0 : i.item) == null ? void 0 : P.id) || "");
    return `_${o}_${c || l || "active"}_${m.livePaintInteractionRevision}`;
  }
  function qo() {
    const i = Array.isArray(d.shots) ? d.shots : [], o = Array.isArray(d.stickers) ? d.stickers : [];
    return [...i, ...o];
  }
  function cn(i) {
    return !!i && Array.isArray(d.shots) && d.shots.includes(i);
  }
  function mt(i) {
    return !!i && Array.isArray(d.stickers) && d.stickers.includes(i);
  }
  function en() {
    var i;
    return Array.isArray((i = d.painting) == null ? void 0 : i.raster_objects) ? d.painting.raster_objects : [];
  }
  function Rr(i) {
    const o = Fe(i);
    if (!o) return null;
    const c = en().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
    return !c || String((c == null ? void 0 : c.layerKind) || "paint") !== "paint" ? null : {
      ...c,
      id: Le(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function Ot(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const o = Fe(i.rasterObjectId || i.id || "");
    return !!o && !!Rr(Le(o));
  }
  function Or(i) {
    const o = at(i), c = String(o.actionGroupId || "").trim();
    if (!c) return null;
    const l = de().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === c || String((h == null ? void 0 : h.actionGroupId) || "") === c);
    return l ? {
      ...l,
      id: Ie("paint", c),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: c
    } : null;
  }
  function Mt(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const o = String(i.actionGroupId || "").trim(), c = String(i.layerKind || "paint").trim() || "paint";
    return !!o && !!Or(Ie(c, o));
  }
  function yn(i, o = null) {
    const c = at(i, o), l = String(c.actionGroupId || "").trim();
    return l ? Gr(c.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === l) : [];
  }
  function gh(i, o = "paint") {
    var p, v, b;
    const c = String(i || "").trim(), h = `geomv5:${String(o || "paint").trim() || "paint"}:${c}:${m.mode}:${_i()}`;
    if (m.mode === "frame") {
      const _ = Ge(), S = String((_ == null ? void 0 : _.id) || ""), P = _ ? Vt(_) : null;
      return `${h}:frame:${S}:${Math.round(Number((P == null ? void 0 : P.x) || 0))}:${Math.round(Number((P == null ? void 0 : P.y) || 0))}:${Math.round(Number((P == null ? void 0 : P.w) || 0))}:${Math.round(Number((P == null ? void 0 : P.h) || 0))}:${Math.round(Number(((p = m.frameView) == null ? void 0 : p.zoom) || 1) * 1e3)}:${Math.round(Number(((v = m.frameView) == null ? void 0 : v.panX) || 0))}:${Math.round(Number(((b = m.frameView) == null ? void 0 : b.panY) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(m.viewYaw || 0) * 100)}:${Math.round(Number(m.viewPitch || 0) * 100)}:${Math.round(Number(m.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function la(i, o, c) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: B(Number(i.v || 0) + Number(c || 0), 0, 1)
    };
  }
  function gn(i, o) {
    let c = Number(i || 0) - Number(o || 0);
    for (; c > 0.5; ) c -= 1;
    for (; c < -0.5; ) c += 1;
    return c;
  }
  function Xo(i, o = null, c = null) {
    var S;
    const l = at(i, o), h = Array.isArray(c) ? c : yn(l.actionGroupId, l.layerKind), p = [];
    if (h.forEach((P) => {
      const M = (P == null ? void 0 : P.geometry) || null, L = (M == null ? void 0 : M.geometryKind) === "lasso_fill" ? M == null ? void 0 : M.points : (M == null ? void 0 : M.processedPoints) || (M == null ? void 0 : M.rawPoints) || (M == null ? void 0 : M.points) || [];
      Array.isArray(L) && p.push(...L);
    }), !p.length) return { u: 0.5, v: 0.5 };
    const v = Number(((S = p[0]) == null ? void 0 : S.u) || 0);
    let b = 0, _ = 0;
    return p.forEach((P) => {
      b += v + gn(Number((P == null ? void 0 : P.u) || 0), v), _ += Number((P == null ? void 0 : P.v) || 0);
    }), {
      u: (b / p.length % 1 + 1) % 1,
      v: B(_ / p.length, 0, 1)
    };
  }
  function ua(i, o, c = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((o == null ? void 0 : o.u) || 0), p = Number((o == null ? void 0 : o.v) || 0), v = gn(Number(i.u || 0), h), b = Number(i.v || 0) - p, _ = Number(l || 0) * Pt, S = Math.cos(_), P = Math.sin(_), M = Math.max(0.02, Number(c || 1)), L = (v * S - b * P) * M, F = (v * P + b * S) * M;
    return {
      ...i,
      u: ((h + L) % 1 + 1) % 1,
      v: B(p + F, 0, 1)
    };
  }
  function Xc(i, o, c, l = null, h = null, p = null) {
    const v = at(i, h), b = String(v.actionGroupId || "").trim();
    if (!b) return !1;
    const _ = Gr(v.layerKind), S = Array.isArray(l) ? new Map(l.map((M) => [String((M == null ? void 0 : M.id) || ""), M])) : null;
    let P = !1;
    if (_.forEach((M) => {
      if (String((M == null ? void 0 : M.actionGroupId) || "").trim() !== b) return;
      const L = (S == null ? void 0 : S.get(String((M == null ? void 0 : M.id) || ""))) || M, F = M == null ? void 0 : M.geometry, U = L == null ? void 0 : L.geometry;
      !F || !U || (Array.isArray(U.points) && (F.points = U.points.map((z) => la(z, o, c)), P = !0), Array.isArray(U.rawPoints) && (F.rawPoints = U.rawPoints.map((z) => la(z, o, c)), P = !0), Array.isArray(U.processedPoints) && (F.processedPoints = U.processedPoints.map((z) => la(z, o, c)), P = !0));
    }), P && p) {
      const M = de().find((L) => String((L == null ? void 0 : L.actionGroupId) || "") === b);
      M && (M.frame = null);
    }
    return P;
  }
  function Zc(i, o = 1, c = 0, l = null, h = null, p = null) {
    const v = at(i, h), b = String(v.actionGroupId || "").trim();
    if (!b) return !1;
    const _ = Gr(v.layerKind), S = Array.isArray(l) ? l : yn(b, v.layerKind), P = Array.isArray(S) ? new Map(S.map((F) => [String((F == null ? void 0 : F.id) || ""), F])) : null, M = (p == null ? void 0 : p.centerUv) ?? Xo(b, v.layerKind, S);
    let L = !1;
    if (_.forEach((F) => {
      if (String((F == null ? void 0 : F.actionGroupId) || "").trim() !== b) return;
      const U = (P == null ? void 0 : P.get(String((F == null ? void 0 : F.id) || ""))) || F, z = F == null ? void 0 : F.geometry, X = U == null ? void 0 : U.geometry;
      !z || !X || (Array.isArray(X.points) && (z.points = X.points.map((Q) => ua(Q, M, o, c)), L = !0), Array.isArray(X.rawPoints) && (z.rawPoints = X.rawPoints.map((Q) => ua(Q, M, o, c)), L = !0), Array.isArray(X.processedPoints) && (z.processedPoints = X.processedPoints.map((Q) => ua(Q, M, o, c)), L = !0));
    }), L && p) {
      const F = de().find((U) => String((U == null ? void 0 : U.actionGroupId) || "") === b);
      F && (F.frame = null);
    }
    return L;
  }
  function Jc(i, o, c, l = null) {
    const h = Fe(i);
    if (!h) return !1;
    const p = en().find((P) => String((P == null ? void 0 : P.id) || "").trim() === h);
    if (!p) return !1;
    const v = l && typeof l == "object" ? l : p, b = (v == null ? void 0 : v.transform) || {}, _ = Number(b.du || 0) + Number(o || 0), S = B(Number(b.dv || 0) + Number(c || 0), -1, 1);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.du = _, p.transform.dv = S, !0;
  }
  function ph(i, o = 1, c = null) {
    const l = Fe(i);
    if (!l) return !1;
    const h = en().find((S) => String((S == null ? void 0 : S.id) || "").trim() === l);
    if (!h) return !1;
    const p = c && typeof c == "object" ? c : h, v = (p == null ? void 0 : p.transform) || {}, b = Math.max(0.01, Number(v.scale || 1)), _ = B(b * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = _, !0;
  }
  function ot() {
    const i = String(m.selectedId || "");
    if (!i) return null;
    const o = Or(i);
    if (o) return o;
    const c = Rr(i);
    return c || (t === "cutout" ? qo().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null : ue().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null);
  }
  function bn() {
    const i = Array.isArray(m.selectedIds) && m.selectedIds.length ? m.selectedIds : m.selectedId ? [m.selectedId] : [], o = [], c = /* @__PURE__ */ new Set();
    return i.forEach((l) => {
      const h = String(l || "").trim();
      if (!h || c.has(h)) return;
      c.add(h);
      const p = h === String(m.selectedId || "") ? ot() : Or(h) || Rr(h) || (t === "cutout" ? qo().find((v) => String((v == null ? void 0 : v.id) || "") === h) : ue().find((v) => String((v == null ? void 0 : v.id) || "") === h));
      p && o.push(p);
    }), o;
  }
  function Zo(i = null) {
    const o = Array.isArray(i) ? i : bn();
    if (!o || o.length < 2) return null;
    const c = o.map((S) => It(S)).filter((S) => (S == null ? void 0 : S.visible) && Array.isArray(S.corners) && S.corners.length);
    if (!c.length) return null;
    const l = c.flatMap((S) => S.corners.map((P) => Number((P == null ? void 0 : P.x) || 0))), h = c.flatMap((S) => S.corners.map((P) => Number((P == null ? void 0 : P.y) || 0))), p = Math.min(...l), v = Math.max(...l), b = Math.min(...h), _ = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (p + v) * 0.5, y: (b + _) * 0.5 },
      corners: [
        { x: p, y: b },
        { x: v, y: b },
        { x: v, y: _ },
        { x: p, y: _ }
      ],
      edgeMidpoints: [
        { edge: "top", x: (p + v) * 0.5, y: b, a: { x: p, y: b }, b: { x: v, y: b } },
        { edge: "right", x: v, y: (b + _) * 0.5, a: { x: v, y: b }, b: { x: v, y: _ } },
        { edge: "bottom", x: (p + v) * 0.5, y: _, a: { x: v, y: _ }, b: { x: p, y: _ } },
        { edge: "left", x: p, y: (b + _) * 0.5, a: { x: p, y: _ }, b: { x: p, y: b } }
      ],
      rotateStemBase: { x: (p + v) * 0.5, y: b },
      rotateHandle: { x: (p + v) * 0.5, y: b - 30 }
    };
  }
  function mh(i) {
    const o = String((i == null ? void 0 : i.id) || "").trim();
    return !!o && Array.isArray(m.selectedIds) && m.selectedIds.includes(o);
  }
  function fa() {
    const i = ot();
    return i ? Mt(i) || Ot(i) ? "stroke" : cn(i) ? "frame" : "image" : null;
  }
  function nr(i) {
    if (!i || typeof i != "object") return !1;
    if (Mt(i)) {
      const o = String(i.actionGroupId || i.id || "").trim(), c = de().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    if (Ot(i)) {
      const o = Fe(i.rasterObjectId || i.id || ""), c = en().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    return i.locked === !0;
  }
  function Jo(i = null) {
    const o = Array.isArray(i) ? i : bn();
    return o.length > 0 && o.every((c) => nr(c));
  }
  function yh(i, o) {
    const c = o === !0;
    if (!i || typeof i != "object") return !1;
    if (Mt(i)) {
      const l = String(i.actionGroupId || i.id || "").trim(), h = de().find((p) => String((p == null ? void 0 : p.actionGroupId) || (p == null ? void 0 : p.id) || "").trim() === l);
      return !h || h.locked === c ? !1 : (h.locked = c, !0);
    }
    if (Ot(i)) {
      const l = Fe(i.rasterObjectId || i.id || ""), h = en().find((p) => String((p == null ? void 0 : p.id) || "").trim() === l);
      return !h || h.locked === c ? !1 : (h.locked = c, !0);
    }
    return i.locked === c ? !1 : (i.locked = c, !0);
  }
  function bh() {
    if (r) return;
    const i = bn();
    if (!i.length) return;
    const o = !Jo(i);
    let c = !1;
    i.forEach((l) => {
      yh(l, o) && (c = !0);
    }), c && (ct(), yt(), Be(), ye());
  }
  function gr(i) {
    m.selectedId = (i == null ? void 0 : i.id) || null, m.selectedIds = i != null && i.id ? [i.id] : [], i && mt(i) ? d.active.selected_sticker_id = i.id || null : d.active.selected_sticker_id = null, i && cn(i) ? d.active.selected_shot_id = i.id || null : i ? cn(i) || (d.active.selected_shot_id = d.active.selected_shot_id) : d.active.selected_shot_id = null;
  }
  function vh(i, o = null) {
    const c = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((v) => {
      const b = String((v == null ? void 0 : v.id) || "").trim();
      !b || l.has(b) || (l.add(b), c.push(b));
    }), m.selectedIds = c;
    const h = String(o || "").trim();
    m.selectedId = h && c.includes(h) ? h : c[c.length - 1] || null;
    const p = ot();
    d.active.selected_sticker_id = p && mt(p) && p.id || null, p && cn(p) ? d.active.selected_shot_id = p.id || null : c.length || (d.active.selected_shot_id = null);
  }
  function Qc() {
    const i = (Array.isArray(d.shots) ? d.shots : []).map((c, l) => ({
      kind: "frame",
      item: c,
      label: String((c == null ? void 0 : c.label) || `Frame ${l + 1}`)
    })), o = (Array.isArray(d.stickers) ? d.stickers : []).map((c, l) => {
      var p, v;
      const h = At(c) ? String(c.id || _r) : String(((v = (p = d.assets) == null ? void 0 : p[c.asset_id]) == null ? void 0 : v.name) || c.asset_id || c.id || `Image ${l + 1}`);
      return {
        kind: "image",
        item: c,
        label: h
      };
    });
    return [...i, ...o];
  }
  function _h(i) {
    return i === "frame" ? Tt.camera : i === "stroke" ? Tt.paintbrush_vertical_tool : Tt.image;
  }
  function el(i) {
    return !i || !i.item ? Ys(String((i == null ? void 0 : i.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${_h(i.kind)}</span><span>${Ys(String(i.label || ""))}</span>`;
  }
  function tl() {
    return Pe();
  }
  function At(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === _r || String(i.source_kind || "") === Bs;
  }
  function Fr(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function xh(i) {
    return At(i) && Fr(i) ? Td : 1;
  }
  function wh() {
    return m.primaryTool === "mask" ? m.maskTool : m.paintTool;
  }
  function Sh() {
    return String(wh() || "") === "lasso_fill";
  }
  function Nh() {
    if (r) return;
    const i = ot();
    !i || !At(i) || (i.visible = Fr(i), Dt(), ct(), yt(), je(), Be(), ye());
  }
  function Mh() {
    if (r || t !== "stickers") return;
    const i = ot();
    if (!i || !At(i)) return;
    const o = i.initial_pose;
    if (!o || typeof o != "object") return;
    i.yaw_deg = Number(o.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(o.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(o.hFOV_deg ?? i.hFOV_deg ?? 30);
    const c = Qo(Us, () => {
      ye();
    });
    c && (c.complete || c.naturalWidth || c.width) ? i.vFOV_deg = pr(
      Number(o.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    ) : i.vFOV_deg = Number(o.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(o.rot_deg ?? i.rot_deg ?? 0), ct(), yt(), je(), Be(), ye();
  }
  function kh(i) {
    if (!i || !At(i)) return null;
    const o = i.initial_pose;
    if (!o || typeof o != "object") return null;
    const c = {
      yaw_deg: Number(o.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? i.rot_deg ?? 0)
    }, l = Qo(Us, () => {
      ye();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (c.vFOV_deg = pr(
      c.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), c;
  }
  function Ph() {
    const i = ot();
    if (!i || !At(i)) return !1;
    const o = kh(i);
    if (!o) return !1;
    const c = (l, h) => Math.abs(Number(l || 0) - Number(h || 0)) <= 1e-4;
    return !(c(i.yaw_deg, o.yaw_deg) && c(i.pitch_deg, o.pitch_deg) && c(i.hFOV_deg, o.hFOV_deg) && c(i.vFOV_deg, o.vFOV_deg) && c(i.rot_deg, o.rot_deg));
  }
  function nl(i) {
    var c;
    const o = qi(e == null ? void 0 : e.id);
    return Array.isArray((c = o == null ? void 0 : o.ui) == null ? void 0 : c[i]) ? o.ui[i] : Array.isArray(o == null ? void 0 : o[i]) ? o[i] : [];
  }
  function Ch(i) {
    const o = qi(e == null ? void 0 : e.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, i) ? o.ui[i] : o && Object.prototype.hasOwnProperty.call(o, i) ? o[i] : null;
  }
  function Ah(i, o = null) {
    var c;
    if (i && typeof i == "object" && !Array.isArray(i)) return i;
    if (Array.isArray(i) && i.length > 0) {
      const l = i[0];
      if (l && typeof l == "object" && !Array.isArray(l)) return l;
    }
    if (Array.isArray(o) && o.length > 0) {
      const l = (c = o[0]) == null ? void 0 : c.parsed_state;
      if (l && typeof l == "object" && !Array.isArray(l))
        return {
          yaw_deg: Number(l.yaw_deg || 0),
          pitch_deg: Number(l.pitch_deg || 0),
          hFOV_deg: Number(l.hFOV_deg || 30),
          rot_deg: Number(l.roll_deg || 0)
        };
    }
    return null;
  }
  function Qo(i, o = null) {
    const c = nl(i), l = Array.isArray(c) && c.length ? c[0] : null, h = hi(l);
    if (!h) return null;
    const p = `__ui__${i}`, v = T.get(p);
    if (v && v.__panoSrc === h) return v;
    const b = new Image();
    return b.__panoSrc = h, b.onload = () => {
      typeof o == "function" ? o(b) : ye();
    }, b.src = h, T.set(p, b), b;
  }
  function rl(i = null) {
    const o = bf(e, ["sticker_image"], i, "sticker_image_exact");
    return o || Qo(Us, i);
  }
  function il(i) {
    const o = String(i || "");
    let c = 2166136261;
    for (let l = 0; l < o.length; l += 1)
      c ^= o.charCodeAt(l), c = Math.imul(c, 16777619);
    return String(c >>> 0);
  }
  function pr(i, o, c) {
    const l = Math.max(1, Number(o || 1)), h = Math.max(1, Number(c || 1)), p = B(Number(i || 30), 0.1, 179) * Pt, v = 2 * Math.atan(Math.tan(p * 0.5) * (h / l));
    return B(v * ur, 0.1, 179);
  }
  function Ih(i) {
    const o = String(i || "").trim();
    if (!o) return null;
    try {
      const c = JSON.parse(o);
      if (!c || typeof c != "object" || String(c.kind || "") !== "pano_sticker_state") return null;
      const l = c.version;
      let h = null;
      if (typeof l == "number" && Number.isInteger(l) ? h = l : typeof l == "string" && /^\d+$/.test(l) && (h = Number.parseInt(l, 10)), h !== 1) return null;
      const p = c.pose;
      if (!p || typeof p != "object") return null;
      const v = Number(p.yaw_deg), b = Number(p.pitch_deg), _ = Number(p.roll_deg), S = Number(p.hFOV_deg);
      if (![v, b, _, S].every((F) => Number.isFinite(F))) return null;
      let P = ((v + 180) % 360 + 360) % 360 - 180;
      Object.is(P, -0) && (P = 0);
      const M = {
        yaw_deg: P,
        pitch_deg: B(b, -89.9, 89.9),
        roll_deg: _,
        hFOV_deg: B(S, 0.1, 179)
      }, L = Number(c.source_aspect);
      return Number.isFinite(L) && L > 0 && (M.source_aspect = L), M;
    } catch {
      return null;
    }
  }
  function al(i) {
    const o = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), p = Oi(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Rt(Number.isFinite(o) ? o : 0),
        pitch_deg: B(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: B(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: p
    };
  }
  function Dh(i) {
    var b;
    if (!i || typeof i != "object") return al(null);
    const o = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), p = Number(i == null ? void 0 : i.vFOV_deg);
    let v = 1;
    if (Number.isFinite(h) && Number.isFinite(p)) {
      const _ = B(h, 0.1, 179) * Pt, S = B(p, 0.1, 179) * Pt, P = Math.tan(S * 0.5);
      if (Math.abs(P) > 1e-6) {
        const M = Math.tan(_ * 0.5) / P;
        Number.isFinite(M) && M > 0 && (v = M);
      }
    }
    if (i != null && i.asset_id && ((b = d == null ? void 0 : d.assets) != null && b[i.asset_id])) {
      const _ = d.assets[i.asset_id], S = Number((_ == null ? void 0 : _.w) || 0), P = Number((_ == null ? void 0 : _.h) || 0);
      S > 0 && P > 0 && (v = S / P);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Rt(Number.isFinite(o) ? o : 0),
        pitch_deg: B(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: B(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: v
    };
  }
  function Eh(i) {
    var l, h, p, v, b;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((_) => String((_ == null ? void 0 : _.name) || "") === String(i)) : null, c = o == null ? void 0 : o.link;
    if (c != null) {
      const _ = sh(e.graph, c), { originId: S, originSlot: P } = ch(_), M = qi(S), L = [
        M == null ? void 0 : M.output,
        M == null ? void 0 : M.result,
        (l = M == null ? void 0 : M.data) == null ? void 0 : l.output,
        (h = M == null ? void 0 : M.data) == null ? void 0 : h.result,
        (p = M == null ? void 0 : M.ui) == null ? void 0 : p.output,
        (v = M == null ? void 0 : M.ui) == null ? void 0 : v.result
      ];
      for (const F of L) {
        if (!Array.isArray(F)) continue;
        const U = Number(P || 0), z = F[U];
        if (typeof z == "string" && z.trim()) return z;
      }
    }
    return String(((b = pn(e, i)) == null ? void 0 : b.value) || "");
  }
  function Th(i, o, c) {
    const l = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : Ih(o);
    if (l) {
      const v = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || l.source_aspect || 1), b = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: pr(l.hFOV_deg, v, b),
        rot_deg: Number(l.roll_deg || 0)
      };
    }
    const h = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 1), p = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
    return {
      yaw_deg: Number(m.viewYaw || 0),
      pitch_deg: Number(m.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: pr(30, h, p),
      rot_deg: 0
    };
  }
  function ol(i = "sync") {
    if (t !== "stickers" || r) return;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((F) => String((F == null ? void 0 : F.name) || "") === "sticker_image") : null, c = (o == null ? void 0 : o.link) ?? null, l = rl(() => {
      var F;
      (F = e.__panoExternalStickerSync) == null || F.call(e, "image-loaded");
    }), h = Ah(Ch("pano_sticker_input_pose"), null), p = Eh("sticker_state"), v = il(h && typeof h == "object" ? JSON.stringify(h) : p), b = Array.isArray(d.stickers) ? d.stickers : d.stickers = [], _ = b.findIndex((F) => String((F == null ? void 0 : F.id) || "") === _r);
    if (c == null) {
      _ >= 0 && (b.splice(_, 1), m.selectedId === _r && (m.selectedId = null, m.selectedIds = [], d.active.selected_sticker_id = null), yt(), je(), Be(), ye());
      return;
    }
    const S = b.reduce((F, U) => Math.max(F, Number((U == null ? void 0 : U.z_index) || 0)), -1);
    let P = _ >= 0 ? b[_] : null;
    const M = !P || Number(P.source_link_id ?? -1) !== Number(c) || String(P.source_state_hash || "") !== v;
    P || (P = {
      id: _r,
      source_kind: Bs
    }, b.push(P)), P.id = _r, P.source_kind = Bs, P.source_link_id = Number(c), P.source_state_hash = v, P.visible = P.visible !== !1;
    let L = !1;
    if (M) {
      const F = Th(h, p, l);
      Object.assign(P, F, {
        initial_pose: { ...F },
        visible: !0,
        z_index: S + 1
      }), L = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const F = pr(
        Number(P.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(P.vFOV_deg || 0) - F) > 1e-6 && (P.vFOV_deg = F, L = !0);
    }
    L && (yt(), je(), Be()), ye();
  }
  function Vr(i = {}) {
    const c = i.preservePanelValues !== !1 ? ot() : null;
    c && (m.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: Ii(c)
    }), m.selectedId = null, m.selectedIds = [], m.cutoutAspectOpen = !1, d.active.selected_sticker_id = null, d.active.selected_shot_id = null;
  }
  function Lh() {
    if (t !== "cutout") return;
    const i = Ge();
    i && gr(i);
  }
  function es() {
    if (t !== "cutout") return;
    const i = Ge();
    Ai(D.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !i,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Tt.camera : Tt.plus_circle
    });
  }
  function da() {
    const i = !!Ge();
    m.mode === "frame" && !i && (m.mode = "pano"), m.outputPreviewRect = null, D.viewButtons.forEach((o) => {
      const c = o.key === m.mode;
      o.pressed = c ? "true" : "false", o.visible = !(o.key === "frame" && t !== "cutout"), o.disabled = o.key === "frame" ? !i : !1;
    }), D.outputPreviewToggle.visible = t === "cutout" && !!Ge(), t === "cutout" && D.cameraPreview && (D.cameraPreview.visible = !0, D.cameraPreview.expanded = !!m.outputPreviewExpanded, D.cameraPreview.settled = D.cameraPreview.settled === !0 && I.pendingStableLayoutFrames <= 0 && I.hasPresentedFrame), Ll() ? gt(m.pointerPos) : C.style.cursor = m.mode === "pano" ? "grab" : "default";
  }
  function Rh() {
    const o = hl({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function ts() {
    const i = Cn(m.viewYaw, m.viewPitch);
    let o = Fn(0, 1, 0);
    Math.abs(Sn(i, o)) > 0.999 && (o = Fn(0, 0, 1));
    const c = Xr(Ka(o, i)), l = Xr(Ka(i, c));
    return { right: c, up: l, fwd: i };
  }
  function mi(i) {
    const { right: o, up: c, fwd: l } = ts(), h = Sn(i, o), p = Sn(i, c), v = Sn(i, l);
    if (v <= 1e-5) return null;
    const b = C.width, _ = C.height, S = m.viewFov * Pt, P = 2 * Math.atan(Math.tan(S / 2) * (_ / b)), M = b / 2 / Math.tan(S / 2), L = _ / 2 / Math.tan(P / 2);
    return {
      x: b / 2 + h / v * M,
      y: _ / 2 - p / v * L,
      z: v
    };
  }
  function ns(i, o) {
    const { right: c, up: l, fwd: h } = ts(), p = C.width, v = C.height, b = m.viewFov * Pt, _ = 2 * Math.atan(Math.tan(b / 2) * (v / p)), S = (i - p / 2) / (p / 2) * Math.tan(b / 2), P = (v / 2 - o) / (v / 2) * Math.tan(_ / 2), M = Ua(Ua(Ga(c, S), Ga(l, P)), h);
    return Xr(M);
  }
  function rr() {
    const i = C.width, o = C.height, c = 2;
    if (i / Math.max(o, 1) >= c) {
      const b = o, _ = b * c;
      return { x: (i - _) * 0.5, y: 0, w: _, h: b };
    }
    const h = i, p = h / c;
    return { x: 0, y: (o - p) * 0.5, w: h, h: p };
  }
  function sl(i) {
    var v;
    if (i && typeof i == "object" && (At(i) || i.external === !0))
      return rl(() => {
        var b;
        (b = e.__panoExternalStickerSync) == null || b.call(e, "image-loaded");
      });
    const o = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!o) return null;
    const c = T.get(o);
    if (c) return c;
    const l = (v = d.assets) == null ? void 0 : v[o], h = V_(l);
    if (!h) return null;
    const p = new Image();
    return p.onload = () => ye(), p.src = h, T.set(o, p), p;
  }
  function cl(i, o = null) {
    const c = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!c) return null;
    const l = V.get(c);
    if (l)
      return l.complete || l.width || l.naturalWidth, l;
    const h = new Image();
    return h.onload = () => {
      typeof o == "function" && o();
    }, h.src = c, V.set(c, h), h;
  }
  function Oh(i) {
    const o = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!o) return null;
    const c = q.get(o);
    if (c) return c.ready ? c : null;
    const l = cl(i, () => {
      const P = q.get(o);
      P && (P.ready = !1), ye({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const h = Number(l.naturalWidth || l.width || 0), p = Number(l.naturalHeight || l.height || 0);
    if (h < 1 || p < 1) return null;
    const v = document.createElement("canvas");
    v.width = h, v.height = p;
    const b = v.getContext("2d", { willReadFrequently: !0 });
    if (!b) return null;
    b.clearRect(0, 0, h, p), b.drawImage(l, 0, 0, h, p);
    const _ = b.getImageData(0, 0, h, p).data, S = { canvas: v, width: h, height: p, alpha: _, ready: !0 };
    return q.set(o, S), S;
  }
  function Fh(i, o, c = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((o == null ? void 0 : o.u) || 0), p = Number((o == null ? void 0 : o.v) || 0), v = gn(Number(i.u || 0), h), b = Number(i.v || 0) - p, _ = Math.max(0.02, Number(c || 1)), S = Number(l || 0) * Pt, P = Math.cos(S), M = Math.sin(S), L = v / _, F = b / _, U = L * P + F * M, z = -L * M + F * P;
    return {
      ...i,
      u: ((h + U) % 1 + 1) % 1,
      v: p + z
    };
  }
  function Vh(i, o) {
    if (!i || !o) return null;
    const c = (i == null ? void 0 : i.bbox) || null;
    if (!c) return null;
    const l = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(c.u0 || 0) + Number(c.u1 || 0)) * 0.5,
      v: (Number(c.v0 || 0) + Number(c.v1 || 0)) * 0.5
    }, p = {
      u: ((Number(o.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(l.dv || 0)
    }, v = Fh(
      p,
      h,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), b = Number(c.u1 || 0) - Number(c.u0 || 0), _ = Number(c.v1 || 0) - Number(c.v0 || 0);
    if (!(b > 1e-6) || !(_ > 1e-6)) return null;
    const S = gn(Number(v.u || 0), Number(c.u0 || 0)) / b, P = (Number(v.v || 0) - Number(c.v0 || 0)) / _;
    if (S < 0 || S > 1 || P < 0 || P > 1) return 0;
    const M = Oh(i);
    if (!M) return null;
    const L = B(Math.floor(S * M.width), 0, M.width - 1), F = B(Math.floor(P * M.height), 0, M.height - 1);
    return Number(M.alpha[(F * M.width + L) * 4 + 3] || 0);
  }
  function ll(i, o, c, l = null) {
    if (!(o != null && o.visible) || !Kn(c, o.corners)) return !1;
    const h = l || xn(c, performance.now()), p = Vh(i, h);
    return p === null ? !0 : p > 8;
  }
  function Hh() {
    var l, h, p, v, b, _, S, P;
    const i = ((h = (l = m.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, Lr(!1))) || null, o = Math.max(1, Number(((p = i == null ? void 0 : i.descriptor) == null ? void 0 : p.width) || ((b = (v = i == null ? void 0 : i.displayPaint) == null ? void 0 : v.canvas) == null ? void 0 : b.width) || 2048)), c = Math.max(1, Number(((_ = i == null ? void 0 : i.descriptor) == null ? void 0 : _.height) || ((P = (S = i == null ? void 0 : i.displayPaint) == null ? void 0 : S.canvas) == null ? void 0 : P.height) || 1024));
    return { width: o, height: c };
  }
  function zh() {
    var F, U, z;
    const i = m.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const o = (i == null ? void 0 : i.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const c = Bn(), l = `${ca()}:${c.width}:${c.height}`;
    if (((F = m._activePaintEraserPreviewInfo) == null ? void 0 : F.cacheKey) === l)
      return m._activePaintEraserPreviewInfo.value || null;
    const h = Ht(o), p = (h == null ? void 0 : h.geometry) || null;
    if (p && String(p.geometryKind || "") !== "lasso_fill") {
      const X = Array.isArray(p.rawPoints) && p.rawPoints.length ? p.rawPoints : Array.isArray(p.points) ? p.points : [];
      p.processedPoints = ds(X, h.targetSpace, !0);
    }
    const v = vi(c.width, c.height, { readback: !0 });
    if (!Sl(v, h, { w: c.width, h: c.height })) return null;
    const b = ((z = (U = v.ctx) == null ? void 0 : U.getImageData(0, 0, c.width, c.height)) == null ? void 0 : z.data) || null;
    if (!b) return null;
    let _ = c.width, S = c.height, P = -1, M = -1;
    for (let X = 0; X < c.height; X += 1)
      for (let Q = 0; Q < c.width; Q += 1)
        b[(X * c.width + Q) * 4 + 3] <= 8 || (Q < _ && (_ = Q), X < S && (S = X), Q > P && (P = Q), X > M && (M = X));
    if (P < _ || M < S)
      return m._activePaintEraserPreviewInfo = { cacheKey: l, value: null }, null;
    const L = {
      surface: v,
      bounds: { minX: _, minY: S, maxX: P, maxY: M },
      key: `${l}:${_}:${S}:${P}:${M}`
    };
    return m._activePaintEraserPreviewInfo = { cacheKey: l, value: L }, m._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), L;
  }
  function yi() {
    m._activePaintEraserPreviewInfo = null, m._liveEraserPreviewCanvasCache = null;
  }
  function jh(i, o, c) {
    var l, h;
    if (!i) return null;
    if (i.type === "rasterObject" && ((l = i.item) != null && l.bbox)) {
      const p = i.item.bbox, v = ((h = i.item) == null ? void 0 : h.transform) || {}, b = Number(p.u0 || 0) + Number(v.du || 0), _ = Number(p.u1 || 0) + Number(v.du || 0), S = Number(p.v0 || 0) + Number(v.dv || 0), P = Number(p.v1 || 0) + Number(v.dv || 0);
      return {
        minX: Math.floor((b % 1 + 1) % 1 * o),
        maxX: Math.ceil((_ % 1 + 1) % 1 * o),
        minY: Math.floor(B(S, 0, 1) * c),
        maxY: Math.ceil(B(P, 0, 1) * c),
        wraps: _ - b >= 1 || b < 0 || _ > 1
      };
    }
    if (i.type === "strokeGroup") {
      const p = yn(i.actionGroupId, "paint"), v = Nt(i.actionGroupId, "paint", p);
      if (!v) return null;
      const b = v.centerUv.u - v.halfW, _ = v.centerUv.u + v.halfW, S = v.centerUv.v - v.halfH, P = v.centerUv.v + v.halfH;
      return {
        minX: Math.floor((b % 1 + 1) % 1 * o),
        maxX: Math.ceil((_ % 1 + 1) % 1 * o),
        minY: Math.floor(B(S, 0, 1) * c),
        maxY: Math.ceil(B(P, 0, 1) * c),
        wraps: _ - b >= 1 || b < 0 || _ > 1
      };
    }
    return null;
  }
  function $h(i, o, c) {
    if (!i || !o) return !1;
    const l = (v) => v.wraps ? [
      { minX: 0, maxX: v.maxX, minY: v.minY, maxY: v.maxY, wraps: !1 },
      { minX: v.minX, maxX: c - 1, minY: v.minY, maxY: v.maxY, wraps: !1 }
    ] : [v], h = l(i), p = l(o);
    return h.some((v) => p.some((b) => !(v.maxX < b.minX || b.maxX < v.minX || v.maxY < b.minY || b.maxY < v.minY)));
  }
  function Bh(i, o, c) {
    var me, Ce, Ve, Se, K, ee, be;
    if (!i || !o || !((me = c == null ? void 0 : c.surface) != null && me.canvas) || o.type !== "rasterObject") return i;
    const l = Number(i.width || c.surface.canvas.width || 0), h = Number(i.height || c.surface.canvas.height || 0);
    if (l < 1 || h < 1) return i;
    const p = jh(o, l, h);
    if (p && !$h(p, c.bounds, l)) return i;
    const v = String(((Ce = o.item) == null ? void 0 : Ce.id) || o.id || ""), b = ((Ve = o.item) == null ? void 0 : Ve.transform) || {}, _ = `${c.key}:${v}:${l}:${h}:${Number(b.du || 0).toFixed(6)}:${Number(b.dv || 0).toFixed(6)}:${Number(b.rot_deg || 0).toFixed(3)}:${Number(b.scale || 1).toFixed(4)}`, S = m._liveEraserPreviewCanvasCache instanceof Map ? m._liveEraserPreviewCanvasCache : m._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (S.has(_)) return S.get(_);
    const P = B(Math.floor(Number(((Se = c.bounds) == null ? void 0 : Se.minX) || 0)), 0, Math.max(0, l - 1)), M = B(Math.floor(Number(((K = c.bounds) == null ? void 0 : K.minY) || 0)), 0, Math.max(0, h - 1)), L = B(Math.ceil(Number(((ee = c.bounds) == null ? void 0 : ee.maxX) || 0)), P, Math.max(0, l - 1)), F = B(Math.ceil(Number(((be = c.bounds) == null ? void 0 : be.maxY) || 0)), M, Math.max(0, h - 1)), U = Math.max(1, L - P + 1), z = Math.max(1, F - M + 1), X = vi(l, h, { readback: !0 });
    X.ctx.clearRect(0, 0, l, h), X.ctx.drawImage(i, 0, 0);
    const Q = X.ctx.getImageData(P, M, U, z);
    X.ctx.save(), X.ctx.globalCompositeOperation = "destination-out", X.ctx.drawImage(c.surface.canvas, 0, 0), X.ctx.restore();
    const he = X.ctx.getImageData(P, M, U, z);
    let ne = !1;
    for (let Ne = 0; Ne < U * z; Ne += 1) {
      const $e = Q.data[Ne * 4 + 3], He = he.data[Ne * 4 + 3];
      if ($e > He) {
        ne = !0;
        break;
      }
    }
    return ne ? (S.size > 64 && S.clear(), S.set(_, X.canvas), X.canvas) : (S.set(_, i), i);
  }
  function ul(i, o = null) {
    const c = Fe((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.bbox) || null;
    if (!c || !l) return null;
    const h = cl(i, o);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: p, height: v } = Hh(), b = (i == null ? void 0 : i.transform) || {}, _ = [
      c,
      p,
      v,
      l.u0,
      l.v0,
      l.u1,
      l.v1,
      b.du,
      b.dv,
      b.rot_deg,
      b.scale,
      _i()
    ].join(":"), S = oe.get(_);
    if (S) return S;
    oe.size > 64 && oe.clear();
    const P = document.createElement("canvas");
    P.width = p, P.height = v;
    const M = P.getContext("2d");
    if (!M) return null;
    const L = Number(l.u0 || 0) * p, F = Number(l.v0 || 0) * v, U = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * p), z = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * v), X = L + U * 0.5 + Number(b.du || 0) * p, Q = F + z * 0.5 + Number(b.dv || 0) * v, he = Number(b.rot_deg || 0) * Pt, ne = Math.max(0.01, Number(b.scale || 1));
    for (const me of [-p, 0, p])
      M.save(), M.translate(X + me, Q), M.rotate(he), M.scale(ne, ne), M.drawImage(h, -U * 0.5, -z * 0.5, U, z), M.restore();
    return oe.set(_, P), P;
  }
  function Uh() {
    return Wo(d, {
      selectedId: m.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Gh(i) {
    return Ld(
      d,
      (o, c, l) => sl(l || o),
      { scene: i }
    );
  }
  function fl(i, o, c, l, h = "modal_object_view") {
    if (!i || !o || !c) return !1;
    String((c == null ? void 0 : c.mode) || "");
    const p = !!l && !!l.complete && Number(l.naturalWidth || l.width || 0) > 1 && Number(l.naturalHeight || l.height || 0) > 1;
    if (yl(o, c))
      return eg(
        o,
        c,
        p && m.showPanorama ? l : null,
        `${h}_bg_gl`
      );
    const b = pa(), _ = ma(b), S = m.showObjects ? ya() : bi([]), M = La({
      stateRevision: [
        h,
        p ? String(l.currentSrc || l.src || "") : "no_bg",
        p ? Number(l.naturalWidth || l.width || 0) : 0,
        p ? Number(l.naturalHeight || l.height || 0) : 0,
        Array.isArray(_) ? _.map((z) => `${String((z == null ? void 0 : z.assetId) || "")}:${String((z == null ? void 0 : z.revision) || "")}`).join(",") : "none",
        S.length ? S.map((z) => `${String((z == null ? void 0 : z.id) || "")}:${String((z == null ? void 0 : z.revision) || "")}:${Number((z == null ? void 0 : z.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: p && m.showPanorama ? l : null,
      backgroundRevision: p ? `${h}:bg` : "",
      coverageDeg: Lt(d.coverage),
      scene: b,
      textures: _,
      paintSource: null,
      paintRevision: "",
      rasterEntries: S,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), L = ce;
    if (!L.syncState(M)) return !1;
    const U = L.renderToTarget(`${h}_direct`, c, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return U ? (i.drawImage(U, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function rs(i, o = "sticker.png") {
    const c = new FormData();
    c.append("image", i), c.append("type", "input"), c.append("subfolder", "panorama_stickers");
    const l = await Jt.fetchApi("/upload/image", { method: "POST", body: c });
    if (!l || l.status !== 200)
      throw new Error(`upload failed (${(l == null ? void 0 : l.status) || "no-response"})`);
    const h = await l.json(), p = String((h == null ? void 0 : h.name) || "").trim();
    if (!p)
      throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: p,
      subfolder: String((h == null ? void 0 : h.subfolder) || "panorama_stickers"),
      storage: String((h == null ? void 0 : h.type) || "input"),
      name: String((i == null ? void 0 : i.name) || o)
    };
  }
  async function is(i, o) {
    const c = await new Promise((b) => i.toBlob(b, "image/png")), l = new FormData();
    l.append("image", c, o), l.append("type", "temp"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const h = await Jt.fetchApi("/upload/image", { method: "POST", body: l });
    if (!h || h.status !== 200) throw new Error(`upload failed (${h == null ? void 0 : h.status})`);
    const p = await h.json(), v = String((p == null ? void 0 : p.name) || "").trim();
    if (!v) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: v,
      subfolder: String((p == null ? void 0 : p.subfolder) || "panorama_stickers"),
      storage: String((p == null ? void 0 : p.type) || "input")
    };
  }
  let as = null, ha = !1;
  function Kh() {
    const i = pf(d.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const o = d.painting_layer, c = $r();
    return !o || typeof o != "object" || String(o.revision || "") !== c || i.totalPaintCount > 0 && !o.paint || i.totalMaskCount > 0 && !o.mask;
  }
  function os() {
    const i = String(e.id ?? "0"), o = Li.get(i);
    if (ha && o) return o;
    const c = (async () => {
      var p, v, b, _, S, P, M, L, F, U, z, X;
      const l = $r(), h = pf(d.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        d.painting_layer !== null && (d.painting_layer = null, as = l, _n());
        return;
      }
      if (as !== l && !ha) {
        ha = !0;
        try {
          xa();
          const Q = Lr(!1), he = ((v = (p = m.paintEngine) == null ? void 0 : p.getErpTarget) == null ? void 0 : v.call(p, Q)) || null, ne = ((b = he == null ? void 0 : he.displayPaint) == null ? void 0 : b.canvas) || null, me = ((_ = he == null ? void 0 : he.committedMask) == null ? void 0 : _.canvas) || null, Ce = Math.max(1, Number(((S = he == null ? void 0 : he.descriptor) == null ? void 0 : S.width) || (ne == null ? void 0 : ne.width) || (me == null ? void 0 : me.width) || 2048)), Ve = Math.max(1, Number(((P = he == null ? void 0 : he.descriptor) == null ? void 0 : P.height) || (ne == null ? void 0 : ne.height) || (me == null ? void 0 : me.height) || 1024));
          (!ne && h.totalPaintCount > 0 || !me && h.totalMaskCount > 0) && ((!m._paintLayerSyncBlankSurface || Number(((M = m._paintLayerSyncBlankSurface.canvas) == null ? void 0 : M.width) || 0) !== Ce || Number(((L = m._paintLayerSyncBlankSurface.canvas) == null ? void 0 : L.height) || 0) !== Ve) && (m._paintLayerSyncBlankSurface = vi(Ce, Ve)), m._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ce, Ve));
          const Se = ne || h.totalPaintCount > 0 && ((F = m._paintLayerSyncBlankSurface) == null ? void 0 : F.canvas) || null, K = me || h.totalMaskCount > 0 && ((U = m._paintLayerSyncBlankSurface) == null ? void 0 : U.canvas) || null;
          if (!Se && !K) return;
          let ee = null, be = null;
          const Ne = [];
          if (h.totalPaintCount > 0) {
            ee = await is(Se, `pano_paint_${i}.png`);
            for (const $e of Q) {
              const He = String($e || "").trim();
              if (!He) continue;
              const Ue = ((X = (z = m.paintEngine) == null ? void 0 : z.getGroupDisplayCanvas) == null ? void 0 : X.call(z, He)) || null;
              if (!Ue) continue;
              const We = He.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ke = await is(Ue, `pano_group_${i}_${We}.png`);
              Ke && Ne.push({
                id: He,
                actionGroupId: He,
                image: Ke
              });
            }
          }
          h.totalMaskCount > 0 && (be = await is(K, `pano_mask_${i}.png`)), l === $r() && (d.painting_layer = {
            paint: ee,
            mask: be,
            groups: Ne,
            revision: l
          }, as = l, _n());
        } catch (Q) {
          throw Q;
        } finally {
          ha = !1;
        }
      }
    })();
    return Li.set(i, c), c.finally(() => {
      Li.get(i) === c && Li.delete(i);
    }), c;
  }
  function Hr() {
    const i = z_(e, "pano_input_images", T, () => ye());
    if (i) return i;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((v) => String((v == null ? void 0 : v.name) || "")) : [], c = o.includes("erp_image"), l = o.includes("bg_erp");
    let h = [];
    return r && (c || l) ? h = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : h = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], bf(e, h, () => ye(), `background:${h.join("|")}`);
  }
  function dl(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Wh() {
    if (!I.hasPresentedFrame) return "boot";
    let i = !1, o = !1;
    if (m.showPanorama) {
      const c = Hr();
      i = !!c && !dl(c);
    }
    if (m.showObjects) {
      const c = Array.isArray(d.stickers) ? d.stickers : [];
      for (const l of c) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const h = sl(l);
        if (h && !dl(h)) {
          o = !0;
          break;
        }
      }
    }
    return i && o ? "mixed" : i ? "background" : o ? "stickers" : "";
  }
  function zr() {
    const i = new Set(
      (d.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(d.assets || {}).forEach((o) => {
      i.has(o) || (delete d.assets[o], T.delete(o));
    });
  }
  function ss(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(B(i.y, -1, 1))
    };
  }
  function cs(i, o = null) {
    const { lon: c, lat: l } = ss(i), h = rr();
    let p = h.x + (c / (2 * Math.PI) + 0.5) * h.w;
    const v = h.y + (0.5 - l / Math.PI) * h.h;
    if (o !== null) {
      for (; p - o > h.w / 2; ) p -= h.w;
      for (; p - o < -h.w / 2; ) p += h.w;
    }
    return { x: p, y: v, z: 1 };
  }
  function ga(i) {
    const o = Cn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0));
    let c = Fn(0, 1, 0);
    Math.abs(Sn(o, c)) > 0.999 && (c = Fn(0, 0, 1));
    const l = Xr(Ka(c, o)), h = Xr(Ka(o, l)), p = Math.tan(B(Number(i.hFOV_deg || 20), 0.1, 179) * 0.5 * Pt), v = Math.tan(B(Number(i.vFOV_deg || 20), 0.1, 179) * 0.5 * Pt), b = Number(i.rot_deg || i.roll_deg || 0) * Pt, _ = Math.cos(b), S = Math.sin(b);
    return {
      centerDir: o,
      right: l,
      up: h,
      tanX: p,
      tanY: v,
      cr: _,
      sr: S
    };
  }
  function ir(i, o, c) {
    const l = o * i.cr - c * i.sr, h = o * i.sr + c * i.cr;
    return Xr(Ua(Ua(i.centerDir, Ga(i.right, l)), Ga(i.up, h)));
  }
  function hl(i) {
    const o = ga(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: h }) => ir(o, l * o.tanX, h * o.tanY));
  }
  function gl(i, o, c) {
    const l = ga(i), h = (o * 2 - 1) * l.tanX, p = (1 - c * 2) * l.tanY;
    return ir(l, h, p);
  }
  function pl(i) {
    const o = (i == null ? void 0 : i.bbox) || null, c = (i == null ? void 0 : i.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(c.du || 0)) % 1 + 1) % 1,
      v: B((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(c.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Yh(i) {
    var _, S, P, M;
    const o = (i == null ? void 0 : i.bbox) || null;
    if (!o) return [];
    const c = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((_ = i == null ? void 0 : i.transform) == null ? void 0 : _.scale) || 1)), h = Number(((S = i == null ? void 0 : i.transform) == null ? void 0 : S.rot_deg) || 0), p = Number(((P = i == null ? void 0 : i.transform) == null ? void 0 : P.du) || 0), v = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((L) => la(ua(L, c, l, h), p, v));
  }
  function qh(i) {
    const o = Fe((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.transform) || {}, l = (i == null ? void 0 : i.bbox) || {}, h = `${o}:${m.mode}:${_i()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${c.du}:${c.dv}:${c.rot_deg}:${c.scale}`;
    if (m.mode === "frame") {
      const p = Ge(), v = p ? Vt(p) : null;
      return `${h}:frame:${String((p == null ? void 0 : p.id) || "")}:${Math.round(Number((v == null ? void 0 : v.x) || 0))}:${Math.round(Number((v == null ? void 0 : v.y) || 0))}:${Math.round(Number((v == null ? void 0 : v.w) || 0))}:${Math.round(Number((v == null ? void 0 : v.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(m.viewYaw || 0) * 100)}:${Math.round(Number(m.viewPitch || 0) * 100)}:${Math.round(Number(m.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Xh(i) {
    const o = String((i == null ? void 0 : i.id) || ""), l = [
      cn(i) ? "frame" : mt(i) ? "sticker" : "item",
      o,
      m.mode,
      Number((i == null ? void 0 : i.yaw_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.pitch_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.hFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.vFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.rot_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.roll_deg) || 0).toFixed(4),
      Ii(i)
    ].join(":");
    if (m.mode === "frame") {
      const h = Ge(), p = h ? Vt(h) : null;
      return `${l}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((p == null ? void 0 : p.x) || 0))}:${Math.round(Number((p == null ? void 0 : p.y) || 0))}:${Math.round(Number((p == null ? void 0 : p.w) || 0))}:${Math.round(Number((p == null ? void 0 : p.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(m.viewYaw || 0) * 100)}:${Math.round(Number(m.viewPitch || 0) * 100)}:${Math.round(Number(m.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Zh() {
    var o;
    const i = String(((o = d.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return i === "draft" ? m.hqFrames && m.hqFrames > 0 ? [28, 20] : m.interaction ? [12, 9] : [20, 14] : i === "high" ? m.hqFrames && m.hqFrames > 0 ? [48, 36] : m.interaction ? [20, 14] : [36, 26] : m.hqFrames && m.hqFrames > 0 ? [40, 30] : m.interaction ? [16, 12] : [28, 20];
  }
  function ml() {
    var i;
    return !!$ && !!((i = ce == null ? void 0 : ce.isSupported) != null && i.call(ce));
  }
  function yl(i, o) {
    return !ml() || t !== "stickers" && t !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((i == null ? void 0 : i.x) || 0) === 0 && Number((i == null ? void 0 : i.y) || 0) === 0 && Math.round(Number((i == null ? void 0 : i.w) || 0)) === Math.round(Number((C == null ? void 0 : C.width) || 0)) && Math.round(Number((i == null ? void 0 : i.h) || 0)) === Math.round(Number((C == null ? void 0 : C.height) || 0));
  }
  function pa() {
    return m.showObjects ? Uh() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function ma(i) {
    return !m.showObjects || !Array.isArray(i == null ? void 0 : i.stickers) || i.stickers.length === 0 ? [] : Gh(i);
  }
  function bl() {
    var i, o;
    return ((o = (i = m.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : o.call(i)) || null;
  }
  function Jh() {
    return bl() ? `${hs()}:mask_display` : "";
  }
  function bi(i) {
    if (!m.showMask) return i;
    const o = bl();
    if (!o) return i;
    const c = Jh(), l = i.reduce((h, p) => Math.max(h, Number((p == null ? void 0 : p.zIndex) || 0)), -1);
    return i.push({
      id: "mask_display",
      source: o,
      revision: c,
      zIndex: l + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function ya() {
    var l, h;
    const i = Yo(!0), o = zh(), c = [];
    for (const p of i) {
      if ((p == null ? void 0 : p.type) === "strokeGroup") {
        const v = String(p.actionGroupId || p.id || "");
        if (!v) continue;
        const b = ((h = (l = m.paintEngine) == null ? void 0 : l.getGroupDisplayCanvas) == null ? void 0 : h.call(l, v)) || null;
        if (!b) continue;
        c.push({
          id: `paint_group:${v}`,
          source: b,
          revision: `${hs()}:${v}`,
          zIndex: Number((p == null ? void 0 : p.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((p == null ? void 0 : p.type) === "rasterObject") {
        const v = p.item || null, b = Fe((v == null ? void 0 : v.id) || p.id || "");
        if (!b) continue;
        const _ = ul(v, () => ye());
        if (!_) continue;
        const S = Bh(_, p, o), P = (v == null ? void 0 : v.transform) || {};
        c.push({
          id: `raster:${b}`,
          source: S,
          revision: [
            $r(),
            (o == null ? void 0 : o.key) || "",
            b,
            Number(P.du || 0).toFixed(6),
            Number(P.dv || 0).toFixed(6),
            Number(P.rot_deg || 0).toFixed(3),
            Number(P.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((p == null ? void 0 : p.z_index) || 0),
          opacity: 1,
          visible: (v == null ? void 0 : v.visible) !== !1
        });
      }
    }
    return bi(c);
  }
  function Qh(i, o = "modal_bg_gl") {
    const c = pa(), l = ma(c), h = !!i && !!i.complete && Number(i.naturalWidth || i.width || 0) > 1 && Number(i.naturalHeight || i.height || 0) > 1, p = h ? [
      String(i.currentSrc || i.src || ""),
      Number(i.naturalWidth || i.width || 0),
      Number(i.naturalHeight || i.height || 0)
    ].join("|") : "none", v = m.showObjects ? ya() : bi([]), b = null, _ = [
      o,
      p,
      Array.isArray(c == null ? void 0 : c.stickers) ? c.stickers.map((S) => String((S == null ? void 0 : S.id) || "")).join(",") : "none",
      Array.isArray(l) ? l.map((S) => `${String((S == null ? void 0 : S.assetId) || "")}:${String((S == null ? void 0 : S.revision) || "")}`).join(",") : "none",
      v.length ? v.map((S) => `${String((S == null ? void 0 : S.id) || "")}:${String((S == null ? void 0 : S.revision) || "")}:${Number((S == null ? void 0 : S.zIndex) || 0)}`).join(",") : "paint:none",
      m.showPanorama ? "panorama:1" : "panorama:0",
      m.showObjects ? "objects:1" : "objects:0",
      m.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: La({
        stateRevision: _,
        backgroundSource: h ? i : null,
        backgroundRevision: h ? `${o}:${p}` : "",
        coverageDeg: Lt(d.coverage),
        scene: c,
        textures: l,
        paintSource: b,
        paintRevision: "",
        rasterEntries: v,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: h || l.length > 0 || v.length > 0
    };
  }
  function ls() {
    if (!$) return;
    const i = $.getContext("webgl2");
    if (i)
      i.viewport(0, 0, $.width, $.height), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT);
    else {
      const o = $.getContext("2d");
      o && (o.clearRect(0, 0, $.width, $.height), o.fillStyle = "#070707", o.fillRect(0, 0, $.width, $.height));
    }
    I.backgroundWasVisible = !1, I.backgroundDirty = !1;
  }
  function eg(i, o, c, l = "modal_bg_gl") {
    var S;
    if (!yl(i, o)) return !1;
    if (!I.backgroundDirty && I.backgroundWasVisible) return !0;
    const { descriptor: h, hasContent: p } = Qh(c, l);
    if (!p || !ce.syncState(h))
      return ls(), !1;
    const b = ce.renderToTarget("modal_pano", o, {
      width: i.w,
      height: i.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), _ = (S = $ == null ? void 0 : $.getContext) == null ? void 0 : S.call($, "2d");
    return !b || !_ ? (ls(), !1) : (_.clearRect(0, 0, $.width, $.height), _.drawImage(b, 0, 0, $.width, $.height), I.backgroundWasVisible = !0, I.backgroundDirty = !1, !0);
  }
  function tg(i = !1) {
    const o = C.width, c = C.height, l = rr();
    if (k.globalAlpha = 1, k.lineWidth = 1, i || (k.fillStyle = "#070707", k.fillRect(0, 0, o, c), k.fillStyle = "#070707", k.fillRect(l.x, l.y, l.w, l.h)), xa(), fl(
      k,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      Hr(),
      "modal_unwrap"
    ), m.showGrid && !m.fullscreen) {
      k.strokeStyle = "#3f3f46";
      for (let p = 0; p <= 16; p += 1) {
        const v = l.x + l.w * p / 16;
        k.beginPath(), k.moveTo(v, l.y), k.lineTo(v, l.y + l.h), k.stroke();
      }
      for (let p = 0; p <= 8; p += 1) {
        const v = l.y + l.h * p / 8;
        k.beginPath(), k.moveTo(l.x, v), k.lineTo(l.x + l.w, v), k.stroke();
      }
      k.strokeStyle = "rgba(250, 250, 250, 0.86)", k.lineWidth = 1.2, k.beginPath(), k.moveTo(l.x, l.y + l.h / 2), k.lineTo(l.x + l.w, l.y + l.h / 2), k.stroke(), k.fillStyle = "rgba(250, 250, 250, 0.42)", k.font = "500 11px Geist, sans-serif", k.textAlign = "center";
      const h = l.y + l.h * 0.57;
      k.fillText("Left", l.x + l.w * 0.25, h), k.fillText("Front", l.x + l.w * 0.5, h), k.fillText("Right", l.x + l.w * 0.75, h), k.fillText("Back", l.x + 38, h), k.fillText("Back", l.x + l.w - 38, h);
    }
  }
  function vl(i, o, c = 1) {
    let l = !1;
    k.strokeStyle = o, k.lineWidth = c, k.beginPath();
    for (const h of i) {
      const p = mi(h);
      if (!p) {
        l = !1;
        continue;
      }
      l ? k.lineTo(p.x, p.y) : (k.moveTo(p.x, p.y), l = !0);
    }
    k.stroke();
  }
  function ng(i = !1) {
    const o = C.width, c = C.height;
    if (i || (ml() ? k.clearRect(0, 0, o, c) : (k.fillStyle = "#070707", k.fillRect(0, 0, o, c))), xa(), fl(
      k,
      { x: 0, y: 0, w: o, h: c },
      {
        mode: "panorama",
        yawDeg: m.viewYaw,
        pitchDeg: m.viewPitch,
        fovDeg: m.viewFov,
        coverageDeg: Lt(d.coverage)
      },
      Hr(),
      "modal_pano"
    ), m.showGrid && !m.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const p = [];
        for (let v = -89; v <= 89; v += 4) p.push(Cn(h, v));
        vl(p, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const p = [];
        for (let v = -180; v <= 180; v += 4) p.push(Cn(v, h));
        vl(p, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: Cn(-90, 0) },
        { name: "Front", dir: Cn(0, 0) },
        { name: "Right", dir: Cn(90, 0) },
        { name: "Back", dir: Cn(180, 0) }
      ];
      k.fillStyle = "rgba(250, 250, 250, 0.42)", k.font = "500 11px Geist, sans-serif", k.textAlign = "center", l.forEach((h) => {
        const p = mi(h.dir);
        p && k.fillText(h.name, p.x, p.y + 24);
      });
    }
  }
  function rg(i, o = null, c = null, l = null) {
    if (m.mode === "frame") {
      const h = o || Ge();
      if (!h) return [];
      const p = c || Vt(h);
      return Hg(i, h, p);
    }
    return Nl(i, l);
  }
  function ba(i, o = null, c = null, l = null, h = null) {
    if (!i) return null;
    if (m.mode === "unwrap") {
      const v = Nl([i], h);
      return v[0] ? { x: v[0].x, y: v[0].y, z: 1 } : null;
    }
    const p = jr(i);
    return p ? $n(p, o, c, l) : null;
  }
  function ig(i, o) {
    const c = String(i.actionGroupId || i.id || "").trim(), l = yn(c, i.layerKind), h = Nt(c, i.layerKind, l), p = (h == null ? void 0 : h.centerUv) || Xo(c, i.layerKind, l), v = m.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, b = [], _ = m.mode === "frame" ? Ge() : null, S = _ ? Vt(_) : null;
    for (const ne of l) {
      const me = (ne == null ? void 0 : ne.geometry) || null, Ce = (me == null ? void 0 : me.geometryKind) === "lasso_fill" ? me == null ? void 0 : me.points : (me == null ? void 0 : me.processedPoints) || (me == null ? void 0 : me.rawPoints) || (me == null ? void 0 : me.points) || [], Ve = rg(Ce, _, S, v).filter((ee) => Number.isFinite(ee == null ? void 0 : ee.x) && Number.isFinite(ee == null ? void 0 : ee.y));
      if (!Ve.length) continue;
      const Se = ar(String((ne == null ? void 0 : ne.toolKind) || "pen")), K = nn[Se] || nn[Gn];
      b.push({
        points: Ve,
        closed: String((me == null ? void 0 : me.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ne == null ? void 0 : ne.size) || 10) * Math.max(0.1, Number((K == null ? void 0 : K.sizeScale) ?? 1)) + 10),
        layerKind: String((ne == null ? void 0 : ne.layerKind) || i.layerKind || "paint")
      });
    }
    const P = ba(p, null, _, S, v);
    if (!P) {
      const ne = { visible: !1, kind: "strokeGroup" };
      return m._strokeGeomCache.set(o, ne), ne;
    }
    const L = kn(h).map((ne) => ba(ne, P.x, _, S, v)).filter((ne) => Number.isFinite(ne == null ? void 0 : ne.x) && Number.isFinite(ne == null ? void 0 : ne.y)).map((ne) => ({ x: Number(ne.x || 0), y: Number(ne.y || 0) }));
    if (L.length < 4) {
      const ne = { visible: !1, kind: "strokeGroup" };
      return m._strokeGeomCache.set(o, ne), ne;
    }
    const F = (ne, me) => ({
      x: (Number((ne == null ? void 0 : ne.x) || 0) + Number((me == null ? void 0 : me.x) || 0)) * 0.5,
      y: (Number((ne == null ? void 0 : ne.y) || 0) + Number((me == null ? void 0 : me.y) || 0)) * 0.5,
      a: ne,
      b: me
    }), U = F(L[0], L[1]), z = F(L[1], L[2]), X = F(L[2], L[3]), Q = F(L[3], L[0]), he = {
      kind: "strokeGroup",
      center: { x: Number(P.x || 0), y: Number(P.y || 0) },
      corners: L,
      edgeMidpoints: [
        { edge: "top", ...U },
        { edge: "right", ...z },
        { edge: "bottom", ...X },
        { edge: "left", ...Q }
      ],
      rotateStemBase: { x: U.x, y: U.y },
      rotateHandle: { x: U.x, y: U.y - 30 },
      strokePaths: b,
      visible: !0
    };
    return m._strokeGeomCache.set(o, he), he;
  }
  function ag(i, o) {
    const c = m.mode === "frame" ? Ge() : null, l = c ? Vt(c) : null, h = pl(i), p = m.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, v = ba(h, null, c, l, p), _ = Yh(i).map((L) => ba(L, (v == null ? void 0 : v.x) ?? null, c, l, p)).filter((L) => Number.isFinite(L == null ? void 0 : L.x) && Number.isFinite(L == null ? void 0 : L.y));
    if (!Array.isArray(_) || _.length < 4) {
      const L = { visible: !1, kind: "rasterObject" };
      return m._strokeGeomCache.set(o, L), L;
    }
    const S = _.slice(0, 4).map((L) => ({ x: Number((L == null ? void 0 : L.x) || 0), y: Number((L == null ? void 0 : L.y) || 0) })), M = {
      kind: "rasterObject",
      center: {
        x: S.reduce((L, F) => L + Number(F.x || 0), 0) / S.length,
        y: S.reduce((L, F) => L + Number(F.y || 0), 0) / S.length
      },
      corners: S,
      visible: !0
    };
    return m._strokeGeomCache.set(o, M), M;
  }
  function $n(i, o = null, c = null, l = null) {
    if (m.mode === "frame") {
      const he = c || Ge(), ne = l || Vt(he);
      if (!he || !ne) return null;
      const me = he ? xi(he, i) : null;
      return me ? {
        x: Number(ne.x || 0) + Number(me.x || 0) * Number(ne.w || 0),
        y: Number(ne.y || 0) + Number(me.y || 0) * Number(ne.h || 0),
        z: 1
      } : null;
    }
    if (m.mode === "unwrap") return cs(i, o);
    const { right: h, up: p, fwd: v } = ts(), b = Sn(i, h), _ = Sn(i, p), S = Sn(i, v), P = C.width, M = C.height, L = m.viewFov * Pt, F = 2 * Math.atan(Math.tan(L / 2) * (M / Math.max(P, 1))), U = P / 2 / Math.tan(L / 2), z = M / 2 / Math.tan(F / 2), X = Math.max(S, 1e-4), Q = Math.max(P, M) * 2;
    return {
      x: B(P / 2 + b / X * U, -Q, P + Q),
      y: B(M / 2 - _ / X * z, -Q, M + Q),
      z: X
    };
  }
  function og(i) {
    const o = Cn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), c = m.mode === "frame" ? Ge() : null, l = c ? Vt(c) : null, h = $n(o, null, c, l);
    if (!h) return { visible: !1 };
    const p = ga(i), b = hl(i).map((Ce) => $n(Ce, h.x, c, l)).filter((Ce) => Number.isFinite(Ce == null ? void 0 : Ce.x) && Number.isFinite(Ce == null ? void 0 : Ce.y));
    if (b.length < 4) return { visible: !1 };
    const _ = ir(p, 0, p.tanY), S = ir(p, 0, p.tanY + Math.max(p.tanY * 0.43, 0.053)), P = $n(_, h.x, c, l);
    if (!P) return { visible: !1 };
    const M = $n(S, (P == null ? void 0 : P.x) ?? h.x, c, l), L = ((M == null ? void 0 : M.x) ?? P.x) - P.x, F = ((M == null ? void 0 : M.y) ?? P.y) - P.y, U = Math.hypot(L, F) || 1, z = {
      x: P.x + L / U * 30,
      y: P.y + F / U * 30
    }, X = $n(ir(p, 0, p.tanY), h.x, c, l), Q = $n(ir(p, p.tanX, 0), h.x, c, l), he = $n(ir(p, 0, -p.tanY), h.x, c, l), ne = $n(ir(p, -p.tanX, 0), h.x, c, l);
    if (!X || !Q || !he || !ne) return { visible: !1 };
    const me = [
      {
        edge: "top",
        x: X.x,
        y: X.y,
        a: { x: b[0].x, y: b[0].y },
        b: { x: b[1].x, y: b[1].y }
      },
      {
        edge: "right",
        x: Q.x,
        y: Q.y,
        a: { x: b[1].x, y: b[1].y },
        b: { x: b[2].x, y: b[2].y }
      },
      {
        edge: "bottom",
        x: he.x,
        y: he.y,
        a: { x: b[2].x, y: b[2].y },
        b: { x: b[3].x, y: b[3].y }
      },
      {
        edge: "left",
        x: ne.x,
        y: ne.y,
        a: { x: b[3].x, y: b[3].y },
        b: { x: b[0].x, y: b[0].y }
      }
    ];
    return {
      center: { x: h.x, y: h.y },
      corners: b.map((Ce) => ({ x: Ce.x, y: Ce.y })),
      edgeMidpoints: me,
      rotateStemBase: { x: P.x, y: P.y },
      rotateHandle: z,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function It(i) {
    if (Mt(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), p = gh(h, i.layerKind), v = m._strokeGeomCache.get(p);
      return v || (m._strokeGeomCache.size > 256 && m._strokeGeomCache.clear(), ig(i, p));
    }
    if (Ot(i)) {
      const h = qh(i), p = m._strokeGeomCache.get(h);
      return p || (m._strokeGeomCache.size > 256 && m._strokeGeomCache.clear(), ag(i, h));
    }
    const o = Xh(i), c = m._strokeGeomCache.get(o);
    if (c) return c;
    m._strokeGeomCache.size > 256 && m._strokeGeomCache.clear();
    const l = og(i);
    return m._strokeGeomCache.set(o, l), l;
  }
  function va(i, o, c, l = null) {
    const h = [];
    for (let p = 0; p <= c; p += 1) {
      const v = p / c;
      let b = 0, _ = 0;
      o === 0 ? (b = v, _ = 0) : o === 1 ? (b = 1, _ = v) : o === 2 ? (b = 1 - v, _ = 1) : (b = 0, _ = 1 - v);
      const S = gl(i, b, _), P = m.mode === "unwrap" ? cs(S, l) : mi(S);
      P && h.push(P);
    }
    return h;
  }
  function sg(i, o) {
    const c = Cn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), l = m.mode === "unwrap" ? cs(c) : null, h = l ? l.x : null, p = m.mode === "pano" ? 28 : 20, v = [
      va(i, 0, p, h),
      va(i, 1, p, h),
      va(i, 2, p, h),
      va(i, 3, p, h)
    ];
    k.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", k.lineWidth = o ? 2 : 1, k.beginPath();
    let b = !1;
    for (const _ of v)
      for (const S of _)
        b ? k.lineTo(S.x, S.y) : (k.moveTo(S.x, S.y), b = !0);
    k.closePath(), k.stroke();
  }
  function cg() {
    const i = [...Array.isArray(d.shots) ? d.shots : []], o = [...Array.isArray(d.stickers) ? d.stickers : []].sort((c, l) => Number(c.z_index || 0) - Number(l.z_index || 0));
    return [...i, ...o];
  }
  function us() {
    const i = [...Array.isArray(d.shots) ? d.shots : []];
    return [...[...Array.isArray(d.stickers) ? d.stickers : []].sort((c, l) => Number(l.z_index || 0) - Number(c.z_index || 0)), ...i];
  }
  function _a(i, o = []) {
    if (!(!i || !Array.isArray(o) || o.length < 4)) {
      i.beginPath(), i.moveTo(o[0].x, o[0].y);
      for (let c = 1; c < 4; c += 1) i.lineTo(o[c].x, o[c].y);
      i.closePath();
    }
  }
  function lg(i, o, c) {
    const l = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (l.length < 4) return;
    const h = c ? "rgba(255, 116, 116, 0.96)" : o ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", p = c ? "rgba(255, 89, 89, 0.08)" : o ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", v = o ? 3.2 : 2.6, b = o ? 4.4 : 3.4, _ = o ? 24 : 20;
    _a(k, l), k.fillStyle = p, k.fill(), k.strokeStyle = h, k.lineWidth = v, k.stroke(), k.save(), k.strokeStyle = h, k.lineWidth = b, k.lineCap = "round";
    for (let L = 0; L < 4; L += 1) {
      const F = l[L], U = l[(L + 3) % 4], z = l[(L + 1) % 4], X = F.x - U.x, Q = F.y - U.y, he = Math.hypot(X, Q) || 1, ne = z.x - F.x, me = z.y - F.y, Ce = Math.hypot(ne, me) || 1;
      k.beginPath(), k.moveTo(F.x, F.y), k.lineTo(F.x - X / he * _, F.y - Q / he * _), k.moveTo(F.x, F.y), k.lineTo(F.x + ne / Ce * _, F.y + me / Ce * _), k.stroke();
    }
    const S = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (l[0].x + l[1].x) * 0.5, y: (l[0].y + l[1].y) * 0.5 },
      { edge: "right", x: (l[1].x + l[2].x) * 0.5, y: (l[1].y + l[2].y) * 0.5 },
      { edge: "bottom", x: (l[2].x + l[3].x) * 0.5, y: (l[2].y + l[3].y) * 0.5 },
      { edge: "left", x: (l[3].x + l[0].x) * 0.5, y: (l[3].y + l[0].y) * 0.5 }
    ], P = {
      x: (l[0].x + l[1].x + l[2].x + l[3].x) * 0.25,
      y: (l[0].y + l[1].y + l[2].y + l[3].y) * 0.25
    }, M = o ? 12 : 9;
    S.forEach((L) => {
      const F = P.x - L.x, U = P.y - L.y, z = Math.hypot(F, U) || 1;
      k.beginPath(), k.moveTo(L.x, L.y), k.lineTo(L.x + F / z * M, L.y + U / z * M), k.stroke();
    }), k.restore();
  }
  function ug(i, o, c, l) {
    if (cn(i)) {
      lg(o, c, l);
      return;
    }
    if (mt(i)) {
      const h = k.globalAlpha;
      k.globalAlpha = xh(i), m.mode === "frame" ? (k.strokeStyle = c ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", k.lineWidth = c ? 2 : 1, _a(k, o.corners), k.stroke()) : sg(i, c), k.globalAlpha = h;
      return;
    }
    k.fillStyle = c ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", _a(k, o.corners), k.fill(), k.strokeStyle = c ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", k.lineWidth = c ? 2.8 : 1.9, _a(k, o.corners), k.stroke();
  }
  function fg(i, o, c) {
    k.fillStyle = c, o.corners.forEach((l) => {
      k.beginPath(), k.arc(l.x, l.y, 6.5, 0, Math.PI * 2), k.fill();
    }), cn(i) && (k.strokeStyle = c, k.lineCap = "round", k.lineWidth = 4, o.edgeMidpoints.forEach((l) => {
      var P, M, L, F;
      const h = (((P = l.b) == null ? void 0 : P.x) ?? l.x) - (((M = l.a) == null ? void 0 : M.x) ?? l.x), p = (((L = l.b) == null ? void 0 : L.y) ?? l.y) - (((F = l.a) == null ? void 0 : F.y) ?? l.y), v = Math.hypot(h, p) || 1, b = h / v, _ = p / v, S = 10;
      k.beginPath(), k.moveTo(l.x - b * S, l.y - _ * S), k.lineTo(l.x + b * S, l.y + _ * S), k.stroke();
    }), k.lineCap = "butt"), Mt(i) || (k.strokeStyle = "rgba(250, 250, 250, 0.9)", k.lineWidth = 1.8, k.beginPath(), k.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), k.lineTo(o.rotateHandle.x, o.rotateHandle.y), k.stroke(), k.fillStyle = c, k.beginPath(), k.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), k.fill());
  }
  function dg() {
    var b;
    const [i, o] = Zh(), c = bn(), l = c.length > 1, h = t === "cutout" ? cg() : ue(), p = h.map((_) => `${String((_ == null ? void 0 : _.id) || "")}:${cn(_) ? "frame" : Number((_ == null ? void 0 : _.z_index) || 0)}`).join("|");
    (!m._sortedItemsCache || m._sortedItemsCache.src !== h || m._sortedItemsCache.orderKey !== p) && (m._sortedItemsCache = {
      src: h,
      orderKey: p,
      sorted: [...h]
    });
    const v = m._sortedItemsCache.sorted;
    for (const _ of v) {
      const S = !l && mh(_);
      if (m.mode === "frame" && !S || !m.showObjects && !cn(_)) continue;
      const P = mt(_), M = cn(_), L = nr(_);
      if (!P && !M)
        continue;
      const F = It(_);
      if (!(t !== "stickers" && !F.visible) && (ug(_, F, S, L), S && F.visible)) {
        const U = L ? "#ff4d4f" : P && At(_) ? "#f59e0b" : "#0070f3";
        fg(_, F, U);
      }
    }
    if (l) {
      const _ = Zo(c);
      if (_ != null && _.visible) {
        const S = Jo(c) ? "#ff4d4f" : "#0070f3";
        k.save(), k.strokeStyle = "rgba(255, 255, 255, 0.95)", k.lineWidth = 2, k.setLineDash([6, 4]), k.beginPath(), k.moveTo(_.corners[0].x, _.corners[0].y);
        for (let P = 1; P < _.corners.length; P += 1) k.lineTo(_.corners[P].x, _.corners[P].y);
        k.closePath(), k.stroke(), k.setLineDash([]), k.fillStyle = S, _.corners.forEach((P) => {
          k.beginPath(), k.arc(P.x, P.y, 6.5, 0, Math.PI * 2), k.fill();
        }), k.restore();
      }
    } else
      c.forEach((_) => {
        if (!Mt(_) && !Ot(_)) return;
        const S = It(_);
        if (!(S != null && S.visible)) return;
        const P = nr(_) ? "#ff4d4f" : "#0070f3";
        k.save(), k.strokeStyle = "rgba(255, 255, 255, 0.95)", k.lineWidth = 2, k.setLineDash([6, 4]), k.beginPath(), k.moveTo(S.corners[0].x, S.corners[0].y);
        for (let M = 1; M < S.corners.length; M += 1) k.lineTo(S.corners[M].x, S.corners[M].y);
        k.closePath(), k.stroke(), k.setLineDash([]), k.fillStyle = P, S.corners.forEach((M) => {
          k.beginPath(), k.arc(M.x, M.y, 6.5, 0, Math.PI * 2), k.fill();
        }), k.restore();
      });
    if (((b = m.interaction) == null ? void 0 : b.kind) === "marquee_select") {
      const _ = Fl(m.interaction.start, m.interaction.current);
      k.save(), k.strokeStyle = "rgba(255, 255, 255, 0.9)", k.fillStyle = "rgba(255, 255, 255, 0.08)", k.lineWidth = 1, k.setLineDash([5, 4]), k.beginPath(), k.rect(_.x0, _.y0, _.x1 - _.x0, _.y1 - _.y0), k.fill(), k.stroke(), k.restore();
    }
    m.hqFrames && i >= 40 && o >= 30 && (m.hqFrames -= 1, m.hqFrames > 0 && ye());
  }
  function hg(i) {
    const o = Nr(i), c = B(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), l = 320;
    return c >= 1 ? { width: l, height: Math.max(1, Math.round(l / c)) } : { width: Math.max(1, Math.round(l * c)), height: l };
  }
  function _l(i, o = !1) {
    const c = B(Oi(i), 0.05, 20), l = o ? 320 : 220;
    return c >= 1 ? { width: l, height: Math.max(1, Math.round(l / c)) } : { width: Math.max(1, Math.round(l * c)), height: l };
  }
  function gg(i) {
    if (!le || !i) return !1;
    const o = le.closest(".pano-camera-preview");
    if (!o) return !1;
    const c = Math.round(Number(o.clientWidth || le.clientWidth || 0)), l = Math.round(Number(o.clientHeight || le.clientHeight || 0));
    return Math.abs(c - Number(i.width || 0)) <= 1 && Math.abs(l - Number(i.height || 0)) <= 1;
  }
  function pg() {
    var c;
    const i = Array.isArray(d.stickers) ? d.stickers : [], o = Array.isArray((c = d.painting) == null ? void 0 : c.raster_objects) ? d.painting.raster_objects : [];
    return JSON.stringify({
      stickers: i.map((l) => ({
        id: String((l == null ? void 0 : l.id) || ""),
        asset_id: String((l == null ? void 0 : l.asset_id) || (l == null ? void 0 : l.assetId) || ""),
        source_kind: String((l == null ? void 0 : l.source_kind) || ""),
        source_link_id: Number((l == null ? void 0 : l.source_link_id) ?? -1),
        source_state_hash: String((l == null ? void 0 : l.source_state_hash) || ""),
        visible: (l == null ? void 0 : l.visible) !== !1,
        z_index: Number((l == null ? void 0 : l.z_index) || 0),
        yaw_deg: Number((l == null ? void 0 : l.yaw_deg) || 0),
        pitch_deg: Number((l == null ? void 0 : l.pitch_deg) || 0),
        hFOV_deg: Number((l == null ? void 0 : l.hFOV_deg) || 0),
        vFOV_deg: Number((l == null ? void 0 : l.vFOV_deg) || 0),
        rot_deg: Number((l == null ? void 0 : l.rot_deg) || 0),
        roll_deg: Number((l == null ? void 0 : l.roll_deg) || 0),
        crop: (l == null ? void 0 : l.crop) || null
      })),
      rasters: o.filter((l) => String((l == null ? void 0 : l.layerKind) || "paint") === "paint").map((l) => ({
        id: String((l == null ? void 0 : l.id) || ""),
        visible: (l == null ? void 0 : l.visible) !== !1,
        z_index: Number((l == null ? void 0 : l.z_index) || 0),
        transform: (l == null ? void 0 : l.transform) || null,
        bbox: (l == null ? void 0 : l.bbox) || null
      }))
    });
  }
  function mg(i, o = {}) {
    if (!i) return "";
    const c = Hr(), l = c && (c.complete || c.naturalWidth || c.width) ? [
      String(c.currentSrc || c.src || ""),
      Number(c.naturalWidth || c.width || 0),
      Number(c.naturalHeight || c.height || 0)
    ].join("|") : "no_bg", h = hg(i);
    return [
      String((i == null ? void 0 : i.id) || ""),
      hs(),
      pg(),
      ca(),
      l,
      m.showPanorama ? "panorama:1" : "panorama:0",
      m.showObjects ? "objects:1" : "objects:0",
      m.showMask ? "mask:1" : "mask:0",
      `${h.width}x${h.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function yg() {
    var L, F;
    if (m.outputPreviewRect = null, D.outputPreviewToggle.visible = m.mode !== "frame" && !!Ge(), t !== "cutout" || !D.cameraPreview) return;
    if (m.mode === "frame") {
      D.cameraPreview.visible = !1, D.cameraPreview.settled = !1;
      return;
    }
    D.cameraPreview.visible = !0;
    const i = Ge(), o = Hr();
    if (!i || !ge || !ft) {
      D.cameraPreview.ready = !1, D.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", D.cameraPreview.expanded = !!m.outputPreviewExpanded, D.cameraPreview.settled = !1, D.cameraPreview.width = 220, D.cameraPreview.height = 132, (L = ge == null ? void 0 : ge.clearScene) == null || L.call(ge), (F = ft == null ? void 0 : ft.requestRender) == null || F.call(ft);
      return;
    }
    const c = _l(i, !!m.outputPreviewExpanded);
    D.cameraPreview.width = c.width, D.cameraPreview.height = c.height, D.cameraPreview.expanded = !!m.outputPreviewExpanded;
    const l = pa(), h = ma(l), p = !!o && !!o.complete && Number(o.naturalWidth || o.width || 0) > 1 && Number(o.naturalHeight || o.height || 0) > 1, v = p ? [
      String(o.currentSrc || o.src || ""),
      Number(o.naturalWidth || o.width || 0),
      Number(o.naturalHeight || o.height || 0)
    ].join("|") : "none", b = m.showObjects ? ya() : bi([]), _ = La({
      stateRevision: [
        "cutout_preview_camera",
        v,
        Array.isArray(l == null ? void 0 : l.stickers) ? l.stickers.map((U) => String((U == null ? void 0 : U.id) || "")).join(",") : "none",
        Array.isArray(h) ? h.map((U) => `${String((U == null ? void 0 : U.assetId) || "")}:${String((U == null ? void 0 : U.revision) || "")}`).join(",") : "none",
        b.length ? b.map((U) => `${String((U == null ? void 0 : U.id) || "")}:${String((U == null ? void 0 : U.revision) || "")}:${Number((U == null ? void 0 : U.zIndex) || 0)}`).join(",") : "paint:none",
        m.showPanorama ? "panorama:1" : "panorama:0",
        m.showObjects ? "objects:1" : "objects:0",
        m.showMask ? "showMask:1" : "showMask:0",
        Lt(d.coverage)
      ].join("|"),
      backgroundSource: p && m.showPanorama ? o : null,
      backgroundRevision: p ? `cutout_preview:${v}` : "",
      coverageDeg: Lt(d.coverage),
      scene: l,
      textures: h,
      rasterEntries: b,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(p || h.length > 0 || b.length > 0)) {
      D.cameraPreview.ready = !1, D.cameraPreview.label = "Connect ERP image", D.cameraPreview.settled = !1, ge.clearScene(), ft.requestRender();
      return;
    }
    if (!p || !m.showPanorama) {
      D.cameraPreview.ready = !1, D.cameraPreview.label = o ? "Loading preview" : "Connect ERP image", D.cameraPreview.settled = !1, ge.clearScene(), ft.requestRender();
      return;
    }
    ge.syncScene(_), ft.setView(Nr(i));
    const P = gg(c), M = P ? ft.present() : !1;
    P || ft.requestRender(), D.cameraPreview.ready = !0, D.cameraPreview.label = P && M ? "" : "Loading preview", D.cameraPreview.settled = P && M && I.pendingStableLayoutFrames <= 0 && I.hasPresentedFrame;
  }
  function bg(i, o, c, l = {}) {
    if (!ge || !c) return !1;
    const h = Hr(), p = pa(), v = ma(p), b = !!h && !!h.complete && Number(h.naturalWidth || h.width || 0) > 1 && Number(h.naturalHeight || h.height || 0) > 1, _ = m.showObjects ? ya() : bi([]);
    return b || v.length > 0 || _.length > 0 ? (ge.syncScene(La({
      stateRevision: mg(c, l),
      backgroundSource: b && m.showPanorama ? h : null,
      backgroundRevision: b ? String(h.currentSrc || h.src || "") : "",
      coverageDeg: Lt(d.coverage),
      scene: p,
      textures: v,
      rasterEntries: _,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), ge.renderShotToContext(i, o, c, l)) : !1;
  }
  function fs(i, o) {
    if (!i || !o) return null;
    const c = Number(o.x || 0), l = Number(o.y || 0);
    return gl(i, c, l);
  }
  function jr(i) {
    if (!i) return null;
    const o = (Number(i.u || 0) - 0.5) * (2 * Math.PI), c = (0.5 - Number(i.v || 0)) * Math.PI, l = Math.cos(c);
    return Fn(l * Math.sin(o), Math.sin(c), l * Math.cos(o));
  }
  function vg(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function _g(i, o, c, l = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: Ft(i, "widthScale", 1),
      pressureLike: Ft(i, "pressureLike", 1)
    }, ...l, u: o, v: c };
  }
  function xg(i, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function ds(i, o, c = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const l = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (l) {
      let z = null;
      i.forEach((X) => {
        const Q = Number((X == null ? void 0 : X.u) || 0), he = Number((X == null ? void 0 : X.v) || 0), ne = (Q % 1 + 1) % 1, me = z == null ? ne : z + gn(ne, (z % 1 + 1) % 1);
        h.set(X, { x: me, y: he }), z = me;
      });
    }
    const p = (z) => !z || typeof z != "object" ? { x: 0, y: 0 } : h.get(z) || vg(z), v = (z, X, Q, he = {}) => {
      const ne = l ? (Number(X) % 1 + 1) % 1 : Number(X), me = _g(z, ne, Q, he);
      return h.set(me, { x: Number(X), y: Number(Q) }), me;
    }, b = (z, X, Q) => {
      const he = p(z), ne = p(X);
      return v(z, Wn(he.x, ne.x, Q), Wn(he.y, ne.y, Q), {
        t: Wn(Number((z == null ? void 0 : z.t) || 0), Number((X == null ? void 0 : X.t) || 0), Q),
        widthScale: Wn(Ft(z, "widthScale", 1), Ft(X, "widthScale", 1), Q),
        pressureLike: Wn(Ft(z, "pressureLike", 1), Ft(X, "pressureLike", 1), Q)
      });
    };
    if (i.length === 1) {
      const z = p(i[0]);
      return [v(i[0], z.x, z.y)];
    }
    const _ = xg(o, c), S = (z, X) => {
      const Q = [0];
      for (let ee = 1; ee < z.length; ee += 1) {
        const be = p(z[ee - 1]), Ne = p(z[ee]);
        Q.push(Q[ee - 1] + Math.hypot(Ne.x - be.x, Ne.y - be.y));
      }
      const he = Q[Q.length - 1] || 0;
      if (he <= 1e-8) {
        const ee = z[0], be = p(ee);
        return [v(ee, be.x, be.y)];
      }
      const ne = [];
      let me = 0;
      for (let ee = 0; ee <= he + 1e-9; ee += X) {
        for (; me < Q.length - 2 && Q[me + 1] < ee; ) me += 1;
        const be = Q[me], Ne = Q[me + 1], $e = Math.max(1e-8, Ne - be);
        ne.push(b(z[me], z[me + 1], B((ee - be) / $e, 0, 1)));
      }
      const Ce = z[z.length - 1], Ve = p(Ce), Se = ne[ne.length - 1], K = Se ? p(Se) : null;
      return (!K || Math.hypot(K.x - Ve.x, K.y - Ve.y) > X * 0.35) && ne.push(v(Ce, Ve.x, Ve.y)), ne;
    }, P = (z) => {
      if (!Array.isArray(z) || z.length < 3) return z ? z.slice() : [];
      const X = p(z[0]), Q = [v(z[0], X.x, X.y)];
      for (let me = 0; me < z.length - 1; me += 1) {
        const Ce = z[me], Ve = z[me + 1], Se = p(Ce), K = p(Ve), ee = v(
          Ce,
          Se.x * 0.75 + K.x * 0.25,
          Se.y * 0.75 + K.y * 0.25,
          {
            t: Number(Ce.t || 0) * 0.75 + Number(Ve.t || 0) * 0.25,
            widthScale: Ft(Ce, "widthScale", 1) * 0.75 + Ft(Ve, "widthScale", 1) * 0.25,
            pressureLike: Ft(Ce, "pressureLike", 1) * 0.75 + Ft(Ve, "pressureLike", 1) * 0.25
          }
        ), be = v(
          Ce,
          Se.x * 0.25 + K.x * 0.75,
          Se.y * 0.25 + K.y * 0.75,
          {
            t: Number(Ce.t || 0) * 0.25 + Number(Ve.t || 0) * 0.75,
            widthScale: Ft(Ce, "widthScale", 1) * 0.25 + Ft(Ve, "widthScale", 1) * 0.75,
            pressureLike: Ft(Ce, "pressureLike", 1) * 0.25 + Ft(Ve, "pressureLike", 1) * 0.75
          }
        );
        Q.push(ee, be);
      }
      const he = z[z.length - 1], ne = p(he);
      return Q.push(v(he, ne.x, ne.y)), Q;
    }, M = S(i, _);
    if (M.length < 3) return M;
    const L = c ? 2 : 1;
    let F = M.slice();
    for (let z = 0; z < L; z += 1) F = P(F);
    return S(F, Math.max(_ * 0.75, 55e-5));
  }
  function Ft(i, o, c = 1) {
    const l = Number(i == null ? void 0 : i[o]);
    return Number.isFinite(l) ? Math.max(0, l) : c;
  }
  function wg(i) {
    const o = Number(i == null ? void 0 : i.radiusValue);
    if (Number.isFinite(o) && o > 0) {
      const c = String((i == null ? void 0 : i.radiusModel) || "").trim() || "erp_uv_norm";
      return c === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((i == null ? void 0 : i.size) || 10) * 0.5 / 2048)
      } : {
        model: c,
        value: o
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((i == null ? void 0 : i.size) || 10) * 0.5 / 2048)
    };
  }
  function vi(i, o, c = {}) {
    const l = document.createElement("canvas");
    l.width = Math.max(1, Math.round(i)), l.height = Math.max(1, Math.round(o));
    const h = l.getContext("2d", c.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, l.width, l.height), h.imageSmoothingEnabled = !0), { canvas: l, ctx: h };
  }
  function _i() {
    const i = wa();
    return `${String(m.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function $r() {
    const i = wa();
    return `${String(m.paintStrokeRevision)}:${String(m.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function hs() {
    const i = ca(), o = $r();
    return i ? `${o}:${i}` : o;
  }
  function Sg() {
    m.paintStrokeRevision += 1, m.paintCompositeRevision += 1;
  }
  function Ng() {
    m.paintCompositeRevision += 1;
  }
  function Mg() {
    m._sortedItemsCache = null, m._strokeGeomCache.clear();
  }
  function xl() {
    var i, o;
    m.paintEngineRevisionKey = null, (o = (i = m.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || o.call(i, d), m.paintEngineRevisionKey = _i();
  }
  function Dt() {
    m.objectVisualRevision = Number(m.objectVisualRevision || 0) + 1, Mg(), I.backgroundDirty = !0, I.dirty = !0;
  }
  function vn({ rebuildPaintEngine: i = !1 } = {}) {
    Sg(), Dt(), i && xl();
  }
  function Br() {
    Ng(), Dt();
  }
  function xa() {
    var l;
    const i = wa(), o = `${i.width}x${i.height}`;
    m.paintEngineDescriptorKey !== o && (m.paintEngine = cc(i), m.paintEngineDescriptorKey = o, m.paintEngineRevisionKey = "");
    const c = _i();
    m.paintEngineRevisionKey !== c && (m.paintEngineRevisionKey = c, (l = m.paintEngine) == null || l.rebuildCommitted(d));
  }
  function wa() {
    const i = Math.max(1, Number((d == null ? void 0 : d.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function Bn() {
    return wa();
  }
  function kg(i, o, c, l, h = null) {
    const p = wg(i), v = Ft(o, "widthScale", 1) * Ft(o, "pressureLike", 1);
    return p.model === "erp_uv_norm" ? Math.max(0.5, p.value * c * v) : p.model === "world_angle" ? h ? Math.max(0.5, p.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * Pt) * c * v) : Math.max(0.5, p.value / (2 * Math.PI) * c * v) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * v);
  }
  function Pg(i, o, c = {}) {
    const l = String((o == null ? void 0 : o.layerKind) || "paint"), h = String((o == null ? void 0 : o.toolKind) || "pen"), p = c.preview === !0, v = p ? 0.78 : 1;
    if (i.globalAlpha = h === "marker" ? 0.7 * v : 1, l === "mask") {
      i.fillStyle = p ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const b = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, _ = p ? Math.max(0.28, Number(b.a ?? 1) * 0.88) : Math.max(0.12, Number(b.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(b.r || 0) * 255)}, ${Math.round(Number(b.g || 0) * 255)}, ${Math.round(Number(b.b || 0) * 255)}, ${_})`;
  }
  function Cg(i, o, c) {
    const l = Math.max(0.5, Math.min(c, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(l) || (i.beginPath(), i.arc(Number(o.x || 0), Number(o.y || 0), l, 0, Math.PI * 2), i.fill());
  }
  function Ag(i, o, c, l, h = {}) {
    if (!i || !Array.isArray(o) || !o.length) return;
    const p = Math.max(l.w, l.h) * 0.25;
    i.save(), Pg(i, c, h);
    const v = (b) => Cg(i, b, p);
    if (o.length === 1) {
      v(o[0]), i.restore();
      return;
    }
    for (let b = 0; b < o.length - 1; b += 1) {
      const _ = o[b], S = o[b + 1];
      if (!_ || !S) continue;
      const P = Number(_.x || 0), M = Number(_.y || 0), L = Number(S.x || 0), F = Number(S.y || 0), U = Math.max(0.5, Math.min(p, Number(_.radiusPx || 0.5))), z = Math.max(0.5, Math.min(p, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite(P) || !Number.isFinite(M) || !Number.isFinite(L) || !Number.isFinite(F) || !Number.isFinite(U) || !Number.isFinite(z)) continue;
      const X = L - P, Q = F - M, he = Math.hypot(X, Q);
      if (!Number.isFinite(he) || he < 1e-6) {
        v(_);
        continue;
      }
      if (he > Math.max(l.w, l.h) * 0.5) continue;
      const ne = Math.max(0.5, Math.min(U, z)), me = Math.max(0.35, Math.min(ne * 0.4, 2.25)), Ce = Math.max(1, Math.ceil(he / me));
      for (let Ve = 0; Ve <= Ce; Ve += 1) {
        const Se = Ve / Ce;
        v({
          x: Wn(P, L, Se),
          y: Wn(M, F, Se),
          radiusPx: Wn(U, z, Se)
        });
      }
    }
    v(o[o.length - 1]), i.restore();
  }
  function Ig(i, o, c, l) {
    Ag(i, o, c, l, { preview: !1 });
  }
  function Dg(i, o, c, l, h) {
    var b, _, S, P;
    if (!i || !Array.isArray(o) || o.length < 3) return;
    const p = "u", v = "v";
    if (i.save(), String((c == null ? void 0 : c.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((c == null ? void 0 : c.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const M = (c == null ? void 0 : c.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(M.r || 0) * 255)}, ${Math.round(Number(M.g || 0) * 255)}, ${Math.round(Number(M.b || 0) * 255)}, ${Number(M.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((b = o[0]) == null ? void 0 : b[p]) || 0) * l.w, Number(((_ = o[0]) == null ? void 0 : _[v]) || 0) * l.h);
    for (let M = 1; M < o.length; M += 1)
      i.lineTo(Number(((S = o[M]) == null ? void 0 : S[p]) || 0) * l.w, Number(((P = o[M]) == null ? void 0 : P[v]) || 0) * l.h);
    i.closePath(), i.fill(), i.restore();
  }
  function wl(i) {
    const o = (i == null ? void 0 : i.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function Eg(i, o) {
    const c = wl(i);
    return !Array.isArray(c) || !c.length ? [] : c.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: kg(i, l, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function Sl(i, o, c = null) {
    var b, _, S, P;
    if (!(i != null && i.ctx) || !o) return !1;
    const l = c || { w: Number(((b = i.canvas) == null ? void 0 : b.width) || 0), h: Number(((_ = i.canvas) == null ? void 0 : _.height) || 0) }, h = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((S = o == null ? void 0 : o.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((P = o == null ? void 0 : o.geometry) == null ? void 0 : P.geometryKind) || "") === "lasso_fill")
      return Dg(i.ctx, wl(h), h, l), !0;
    const v = Eg(h, l);
    return v.length ? (Ig(i.ctx, v, h, l), !0) : !1;
  }
  function Tg(i, o, c, l = 8) {
    const h = new Uint8Array(o * c), p = [], v = new Int32Array(o * c), b = new Int32Array(o * c);
    for (let _ = 0; _ < c; _ += 1)
      for (let S = 0; S < o; S += 1) {
        const P = _ * o + S;
        if (h[P] || i[P] <= l) continue;
        let M = 0, L = 0;
        v[L] = S, b[L] = _, L += 1, h[P] = 1;
        const F = [];
        let U = S, z = _, X = S, Q = _;
        for (; M < L; ) {
          const he = v[M], ne = b[M];
          M += 1, F.push({ x: he, y: ne }), he < U && (U = he), ne < z && (z = ne), he > X && (X = he), ne > Q && (Q = ne);
          const me = [
            [(he - 1 + o) % o, ne],
            [(he + 1) % o, ne],
            [he, ne - 1],
            [he, ne + 1]
          ];
          for (const [Ce, Ve] of me) {
            if (Ve < 0 || Ve >= c) continue;
            const Se = Ve * o + Ce;
            h[Se] || i[Se] <= l || (h[Se] = 1, v[L] = Ce, b[L] = Ve, L += 1);
          }
        }
        p.push({ pixels: F, minX: U, minY: z, maxX: X, maxY: Q });
      }
    return p;
  }
  function Lg(i, o) {
    const c = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((_) => Number((_ == null ? void 0 : _.x) || 0)).filter((_) => Number.isFinite(_)))].sort((_, S) => _ - S);
    if (!c.length) return null;
    if (c.length === 1)
      return { startX: c[0], widthPx: 1 };
    let l = -1, h = 0;
    for (let _ = 0; _ < c.length; _ += 1) {
      const S = c[_], M = (_ === c.length - 1 ? c[0] + o : c[_ + 1]) - S - 1;
      M > l && (l = M, h = _);
    }
    const p = (c[(h + 1) % c.length] + o) % o;
    let v = 1 / 0, b = -1 / 0;
    for (const _ of c) {
      const S = (_ - p + o) % o;
      v = Math.min(v, S), b = Math.max(b, S);
    }
    return {
      startX: p,
      widthPx: Math.max(1, b - v + 1)
    };
  }
  function Rg(i, o, c = {}) {
    var S;
    const l = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), p = (S = i == null ? void 0 : i.getContext) == null ? void 0 : S.call(i, "2d");
    if (!p || l < 1 || h < 1) return [];
    const v = p.getImageData(0, 0, l, h), b = new Uint8Array(l * h);
    for (let P = 0; P < b.length; P += 1) b[P] = v.data[P * 4 + 3];
    return Tg(b, l, h, 8).map((P, M) => {
      const L = Lg(P, l);
      if (!L) return null;
      const F = Number(L.widthPx || 0), U = P.maxY - P.minY + 1, z = Number(L.startX || 0), X = document.createElement("canvas");
      X.width = F, X.height = U;
      const Q = X.getContext("2d");
      if (!Q) return null;
      const he = Q.createImageData(F, U);
      return P.pixels.forEach(({ x: ne, y: me }) => {
        const Ce = (me * l + ne) * 4, Ve = (Number(ne || 0) - z + l) % l, Se = ((me - P.minY) * F + Ve) * 4;
        he.data[Se + 0] = v.data[Ce + 0], he.data[Se + 1] = v.data[Ce + 1], he.data[Se + 2] = v.data[Ce + 2], he.data[Se + 3] = v.data[Ce + 3];
      }), Q.putImageData(he, 0, 0), {
        id: Zr("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((c == null ? void 0 : c.z_index) || 0) + M * 1e-3,
        locked: (c == null ? void 0 : c.locked) === !0,
        bbox: {
          u0: 0,
          v0: P.minY / h,
          u1: F / l,
          v1: (P.maxY + 1) / h
        },
        rasterDataUrl: X.toDataURL("image/png"),
        transform: {
          du: z / l,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function xi(i, o) {
    if (!i || !o) return null;
    const c = ga(i), l = Sn(o, c.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const h = Sn(o, c.right) / l, p = Sn(o, c.up) / l, v = h * c.cr + p * c.sr, b = -h * c.sr + p * c.cr;
    return {
      x: (v / Math.max(1e-6, c.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, c.tanY)) * 0.5
    };
  }
  function Og(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (m.mode === "unwrap") {
      const c = rr();
      return i.map((l) => ({
        x: c.x + Number(l.u || 0) * c.w,
        y: c.y + Number(l.v || 0) * c.h
      }));
    }
    const o = i.map((c) => mi(jr(c))).filter(Boolean);
    return o.every((c) => Number(c.z || 0) > 0) ? o.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function Nl(i, o = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (m.mode === "unwrap") {
      const l = rr();
      return i.map((h) => {
        const p = (Number(h.u || 0) % 1 + 1) % 1, v = o == null ? p : Number(o || 0) + gn(p, o);
        return {
          x: l.x + v * l.w,
          y: l.y + Number(h.v || 0) * l.h
        };
      });
    }
    const c = i.map((l) => mi(jr(l))).filter(Boolean);
    return c.every((l) => Number(l.z || 0) > 0) ? c.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function Fg(i, o = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let c = 0; c < i.length; c += 1) {
      const l = i[c], h = i[(c + 1) % i.length];
      if (!l || !h || !Number.isFinite(l.x) || !Number.isFinite(l.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(l.x), Number(h.y) - Number(l.y)) > o) return !1;
    }
    return !0;
  }
  function Vg(i, o, c) {
    if (!Array.isArray(i) || i.length < 3 || !o || !c) return [];
    const l = [];
    for (const h of i) {
      const p = jr(h), v = xi(o, p);
      if (!v) return [];
      l.push({
        x: Number(c.x || 0) + Number(v.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(v.y || 0) * Number(c.h || 0)
      });
    }
    return Fg(l, Math.max(80, Math.max(c.w, c.h) * 0.75)) ? l : [];
  }
  function Hg(i, o, c) {
    if (!Array.isArray(i) || i.length < 1 || !o || !c) return [];
    const l = [];
    for (const h of i) {
      const p = jr(h), v = xi(o, p);
      v && l.push({
        x: Number(c.x || 0) + Number(v.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(v.y || 0) * Number(c.h || 0)
      });
    }
    return l;
  }
  function zg() {
    var h;
    const i = Ge(), o = Vt(i);
    if (!i || !o) return !1;
    k.save(), k.fillStyle = "#050505", k.fillRect(0, 0, C.width, C.height), k.shadowColor = "rgba(0, 0, 0, 0.45)", k.shadowBlur = 24, k.shadowOffsetX = 0, k.shadowOffsetY = 10, k.fillStyle = "rgba(14, 14, 14, 1)", k.fillRect(o.x, o.y, o.w, o.h), k.restore(), k.save(), k.beginPath(), k.rect(o.x, o.y, o.w, o.h), k.clip();
    const c = m.interaction ? "draft" : String(((h = d.ui_settings) == null ? void 0 : h.preview_quality) || "balanced");
    return bg(k, o, i, { quality: c }) === !0 || (k.fillStyle = "rgba(255, 255, 255, 0.03)", k.fillRect(o.x, o.y, o.w, o.h)), k.restore(), k.save(), k.strokeStyle = "rgba(255, 255, 255, 0.12)", k.lineWidth = 1, k.strokeRect(o.x + 0.5, o.y + 0.5, o.w - 1, o.h - 1), k.restore(), !0;
  }
  function jg() {
    var _, S;
    if (((_ = m.interaction) == null ? void 0 : _.kind) !== "paint_lasso_fill") return;
    const i = m.interaction.stroke, o = (S = i == null ? void 0 : i.geometry) == null ? void 0 : S.points;
    let c;
    if (m.mode === "frame") {
      const P = Ge(), M = Vt(P);
      c = Vg(o, P, M);
    } else
      c = Og(o);
    if (!Array.isArray(c) || c.length < 3) return;
    const l = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, p = Math.round(Number(h.r || 0) * 255), v = Math.round(Number(h.g || 0) * 255), b = Math.round(Number(h.b || 0) * 255);
    k.save(), k.beginPath(), k.moveTo(Number(c[0].x || 0), Number(c[0].y || 0));
    for (let P = 1; P < c.length; P++) k.lineTo(Number(c[P].x || 0), Number(c[P].y || 0));
    k.closePath(), l ? (k.lineWidth = 2, k.setLineDash([6, 6]), k.lineDashOffset = 0, k.strokeStyle = "rgba(0,0,0,0.96)", k.stroke(), k.lineDashOffset = -6, k.strokeStyle = "rgba(255,255,255,0.96)", k.stroke(), k.setLineDash([]), k.lineDashOffset = 0) : (k.lineWidth = 1.5, k.setLineDash([6, 4]), k.strokeStyle = `rgba(${p},${v},${b},1)`, k.stroke(), k.setLineDash([])), k.restore();
  }
  function $g() {
    m.mode === "frame" ? zg() : m.mode === "unwrap" ? tg(!1) : ng(!1), t === "cutout" && yg(), dg(), jg(), D.fovValue = `${Math.round(m.viewFov)}°`, Math.abs(Number(m.outputPreviewAnim || 0) - Number(m.outputPreviewAnimTo || 0)) < 1e-6 && Be(), I.hasPresentedFrame || (I.hasPresentedFrame = !0, $.style.opacity = "1"), t === "cutout" && D.cameraPreview && (D.cameraPreview.settled = I.pendingStableLayoutFrames <= 0 && I.hasPresentedFrame && m.mode !== "frame");
    const i = Wh();
    i ? (ie == null || ie.removeAttribute("data-stage-ready"), ie == null || ie.setAttribute("data-stage-loading-kind", i)) : (ie == null || ie.setAttribute("data-stage-ready", ""), ie == null || ie.removeAttribute("data-stage-loading-kind"));
  }
  function Bg(i = m.interaction) {
    if (t !== "stickers" || m.mode !== "pano") return !1;
    const o = String((i == null ? void 0 : i.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function Ug() {
    e.__panoLiveStateOverride = d, e.__panoLivePaintSurface = hh();
  }
  function ye(i = {}) {
    var b, _, S, P, M, L, F, U, z, X;
    const o = !!i.localOnly, c = i.externalSync === !0, l = String(i.cause || ""), h = String(((b = m.interaction) == null ? void 0 : b.kind) || "");
    (!o || h === "view" || h === "pan_frame" || Bg() || !!((_ = m.viewTween) != null && _.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (I.backgroundDirty = !0), o && qc() && (m.livePaintInteractionRevision += 1, I.backgroundDirty = !0), (!o || l === "selection" || l === "mode" || l === "cutout_frame") && (es(), da()), Ug(), c && ((P = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || P.call(S), (M = e.setDirtyCanvas) == null || M.call(e, !0, !1)), c && !o && ((F = (L = e.graph) == null ? void 0 : L.setDirtyCanvas) == null || F.call(L, !0, !0), (X = (z = (U = un) == null ? void 0 : U.canvas) == null ? void 0 : z.setDirty) == null || X.call(z, !0, !0)), I.dirty = !0;
  }
  function Ml() {
    const i = C.getBoundingClientRect(), o = Math.max(2, Math.round(i.width)), c = Math.max(2, Math.round(i.height));
    return C.width !== o || C.height !== c || $.width !== o || $.height !== c ? (C.width = o, C.height = c, $.width = o, $.height = c, I.backgroundDirty = !0, I.dirty = !0, t === "cutout" && (I.pendingStableLayoutFrames = Math.max(Number(I.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function gs(i = performance.now()) {
    var o;
    if (I.running) {
      if (I.lastTickTs = i, m.outputPreviewAnim !== m.outputPreviewAnimTo) {
        const c = Math.max(1, Number(m.outputPreviewAnimDurationMs)), l = B((i - Number(m.outputPreviewAnimStartTs || 0)) / c, 0, 1), p = m.outputPreviewAnimTo > m.outputPreviewAnimFrom ? f_(l) : d_(l);
        m.outputPreviewAnim = Wn(m.outputPreviewAnimFrom, m.outputPreviewAnimTo, p), I.dirty = !0, l >= 1 && (m.outputPreviewAnim = m.outputPreviewAnimTo);
      }
      if ((o = m.viewTween) != null && o.active) {
        const c = m.viewTween, l = B((i - c.startTs) / c.durationMs, 0, 1), h = u_(l);
        m.viewYaw = Rt(c.startYaw + c.deltaYaw * h), m.viewPitch = c.startPitch + (c.targetPitch - c.startPitch) * h, m.viewFov = c.startFov + (c.targetFov - c.startFov) * h, I.backgroundDirty = !0, I.dirty = !0, l >= 1 && (m.viewTween = null);
      }
      if (m.viewInertia.vx = Number(Et.state.inertia.vx || 0), m.viewInertia.vy = Number(Et.state.inertia.vy || 0), m.viewInertia.active = !!Et.state.inertia.active, Et.stepInertia(i) && (m.viewInertia.vx = Number(Et.state.inertia.vx || 0), m.viewInertia.vy = Number(Et.state.inertia.vy || 0), m.viewInertia.active = !!Et.state.inertia.active, I.backgroundDirty = !0, I.dirty = !0), (I.dirty || i - I.lastSizeCheckTs >= 220) && (Ml(), I.lastSizeCheckTs = i), I.pendingStableLayoutFrames > 0 && (I.pendingStableLayoutFrames -= 1, I.dirty = !0), I.dirty) {
        if (I.pendingStableLayoutFrames > 0) {
          I.rafId = requestAnimationFrame(gs);
          return;
        }
        I.dirty = !1, $g();
      }
      I.rafId = requestAnimationFrame(gs);
    }
  }
  function Gg() {
    I.running = !1, I.rafId && cancelAnimationFrame(I.rafId), I.rafId = 0;
  }
  function ct() {
    r || (m.historyController.commitActionGroup(JSON.stringify(mf(d))), vs());
  }
  function ps(i) {
    if (r) return;
    const o = i < 0 ? m.historyController.undo() : m.historyController.redo();
    if (vs(), !o) return;
    const c = JSON.parse(o);
    Object.keys(d).forEach((l) => delete d[l]), Object.assign(d, c), m.selectedId = t === "stickers" || t === "cutout" ? d.active.selected_sticker_id : d.active.selected_shot_id, m.selectedIds = m.selectedId ? [m.selectedId] : [], vn(), tn(), je(), _n(), ye({ cause: "cutout_frame" });
  }
  function kl() {
    var c, l;
    const i = Array.isArray((c = m.historyController) == null ? void 0 : c.entries) ? m.historyController.entries : [], o = Number((l = m.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !r && i.length > 1 && o > 0,
      canRedo: !r && i.length > 1 && o >= 0 && o < i.length - 1
    };
  }
  function tn() {
    te();
    const i = fb({
      editor: m,
      swatches: co,
      paintColorPopOpen: G ? !G.hidden : !1,
      colorToCss: An,
      colorsApproximatelyEqual: lo,
      rgb01ToHsv: Ws,
      hsv01ToRgb: Ks,
      getBrushPresetIdForTool: ar,
      isActiveLassoTool: Sh
    });
    if (Object.assign(D.paintDock, i), !i.visible) {
      G && (G.hidden = !0);
      return;
    }
    ht && (clearTimeout(ht), ht = 0), _e && (!i.colorEnabled && G && !G.hidden && (ht = window.setTimeout(() => {
      G.hidden = !0, D.paintDock.colorPopOpen = !1, ht = 0;
    }, 170)), G && (G.style.setProperty("--picker-hue-color", i.pickerHueColor), G.style.setProperty("--picker-sat", i.pickerSat), G.style.setProperty("--picker-val", i.pickerVal), G.style.setProperty("--picker-hue", i.pickerHue)), ke && (ke.style.left = i.pickerSvLeft, ke.style.top = i.pickerSvTop), Oe && (Oe.style.left = i.pickerHueLeft));
  }
  function ms() {
    const i = ot();
    i && (m.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: Ii(i)
    }, je());
  }
  function je() {
    var me, Ce, Ve, Se;
    if (a) return;
    d.ui_settings = d.ui_settings || {};
    const i = ub(d.ui_settings);
    if (s) {
      D.sidePanel = db({
        coverage: d.coverage,
        uiSettings: i,
        normalizeCoverageValue: Lt
      });
      return;
    }
    const o = ot(), c = bn(), l = fa();
    c.length > 1 && (m.panelLastValues = m.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), o && l !== "stroke" && (m.panelLastValues = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: Number(o.hFOV_deg || (l === "image" ? 30 : 90)),
      vFOV_deg: Number(o.vFOV_deg || (l === "image" ? 30 : 60)),
      rot_deg: Number(o.rot_deg || 0),
      roll_deg: Number(o.roll_deg || 0),
      aspect_id: Ii(o)
    });
    const h = m.panelLastValues || (t === "stickers" || l === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), p = l === "stroke" ? null : o, v = p || h, b = !!p;
    m.panelWasEnabled = b, es();
    let _ = null;
    if (t === "stickers" || t === "cutout") {
      const K = [{ id: "", labelHtml: Ys(t === "stickers" ? "No image" : "Nothing selected"), item: null }];
      t === "stickers" ? ue().forEach((Ne, $e) => {
        var We, Ke;
        const He = At(Ne) ? String(Ne.id || _r) : String(((Ke = (We = d.assets) == null ? void 0 : We[Ne.asset_id]) == null ? void 0 : Ke.name) || Ne.asset_id || Ne.id), Ue = `${$e + 1}. ${He}${At(Ne) && Fr(Ne) ? " (hidden)" : ""}`;
        K.push({ id: Ne.id, labelHtml: el({ item: Ne, label: Ue, kind: "image" }), item: Ne, kind: "image" });
      }) : Qc().forEach((Ne) => {
        K.push({ id: Ne.item.id, labelHtml: el(Ne), item: Ne.item, kind: Ne.kind });
      });
      const ee = (p == null ? void 0 : p.id) || "", be = K.find((Ne) => Ne.id === ee) || K[0];
      _ = {
        label: "Selection",
        open: !1,
        disabled: K.length <= 1,
        currentLabelHtml: be.labelHtml,
        items: K.map((Ne) => ({ id: Ne.id, labelHtml: Ne.labelHtml, active: Ne.id === ee }))
      };
    }
    const S = [], P = (K, ee, be, Ne, $e) => {
      const He = B(Number(v[K] || 0), be, Ne);
      S.push({
        key: K,
        label: ee,
        min: be,
        max: Ne,
        step: $e,
        value: He,
        displayValue: m_(He),
        fillPct: B((He - be) / Math.max(1e-6, Ne - be) * 100, 0, 100),
        enabled: b && !r
      });
    }, M = [];
    c.length > 1 ? (M.push(`Selected objects: ${c.length}`), M.push("Multi-selection supports z-order and delete.")) : (P("yaw_deg", "Yaw", -180, 180, 0.1), P("pitch_deg", "Pitch", -90, 90, 0.1), P("hFOV_deg", "H FOV", 1, 179, 0.1), P("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || l === "image" ? P("rot_deg", "Rotation", -180, 180, 0.1) : P("roll_deg", "Roll", -180, 180, 0.1));
    const L = Array.isArray((Ce = (me = d == null ? void 0 : d.painting) == null ? void 0 : me.paint) == null ? void 0 : Ce.strokes) ? d.painting.paint.strokes.length : 0, F = Array.isArray((Se = (Ve = d == null ? void 0 : d.painting) == null ? void 0 : Ve.mask) == null ? void 0 : Se.strokes) ? d.painting.mask.strokes.length : 0, U = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((K) => String((K == null ? void 0 : K.name) || "")) : [], z = uh(
      e,
      U.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), X = !!String((z == null ? void 0 : z.src) || "").trim() || nl("pano_input_images").length > 0, Q = Array.isArray(ue()) && ue().length > 0 || L > 0, he = F > 0, ne = [
      { key: "mask", label: "Mask", icon: Tt.circle_dashed_tool, visible: !!m.showMask, enabled: he },
      { key: "objects", label: "Paint / Images", icon: Tt.image, visible: !!m.showObjects, enabled: Q },
      { key: "panorama", label: "Panorama", icon: Tt.globe, visible: !!m.showPanorama, enabled: X }
    ].map((K) => ({
      ...K,
      ariaLabel: `Toggle ${K.label.toLowerCase()}`,
      tip: K.visible ? "Hide" : "Show"
    }));
    D.sidePanel = hb({
      coverage: d.coverage,
      readOnly: r,
      selectionPicker: _,
      enabled: b,
      selectedKind: l,
      selectedItems: c,
      params: S,
      notes: M,
      visibilityRows: ne,
      uiSettings: i,
      normalizeCoverageValue: Lt
    });
  }
  function Sa(i) {
    if (!i) return !1;
    if (String(i.type || "").toLowerCase().startsWith("image/")) return !0;
    const c = String(i.name || "").toLowerCase();
    return c.endsWith(".png") || c.endsWith(".jpg") || c.endsWith(".jpeg") || c.endsWith(".webp") || c.endsWith(".gif") || c.endsWith(".bmp");
  }
  async function Pl(i) {
    if (r || t !== "stickers" && t !== "cutout" || !Sa(i)) return;
    const o = Za("asset"), c = URL.createObjectURL(i);
    try {
      const l = await new Promise((v, b) => {
        const _ = new Image();
        _.onload = () => v(_), _.onerror = () => b(new Error("image load failed")), _.src = c;
      });
      T.set(o, l);
      const h = Za("st");
      d.stickers.push({
        id: h,
        asset_id: o,
        yaw_deg: m.viewYaw,
        pitch_deg: m.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: pr(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: tl()
      }), gr(d.stickers[d.stickers.length - 1]), El(), ct(), je(), Be(), ye();
      const p = (async () => {
        const v = await rs(i, String(i.name || o));
        (Array.isArray(d.stickers) ? d.stickers : []).filter((S) => String((S == null ? void 0 : S.asset_id) || "") === o).length && (d.assets[o] = v, zr(), yt(), je(), Be(), ye());
      })();
      Ri.set(o, p);
      try {
        await p;
      } finally {
        Ri.delete(o);
      }
    } catch {
      delete d.assets[o], T.delete(o);
      const l = Array.isArray(d.stickers) ? d.stickers : [], h = l.filter((p) => String((p == null ? void 0 : p.asset_id) || "") === o);
      h.length && (d.stickers = l.filter((p) => String((p == null ? void 0 : p.asset_id) || "") !== o), h.some((p) => {
        var v;
        return String((p == null ? void 0 : p.id) || "") === String(((v = m.selection) == null ? void 0 : v.id) || "");
      }) && gr(null), je(), Be(), ye());
    } finally {
      URL.revokeObjectURL(c);
    }
  }
  function Cl(i) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var l;
      const c = (l = o.files) == null ? void 0 : l[0];
      !c || typeof i != "function" || i(c);
    }, o.click();
  }
  function Kg() {
    r || t !== "stickers" && t !== "cutout" || Cl((i) => {
      Pl(i);
    });
  }
  async function Wg(i) {
    var S;
    if (r || t !== "stickers" && t !== "cutout") return;
    const o = ot();
    if (!o || !mt(o) || At(o) || !Sa(i)) return;
    const c = String(o.id || ""), l = String(o.asset_id || ""), h = l ? Ht(((S = d.assets) == null ? void 0 : S[l]) || null) : null, p = Number(o.vFOV_deg || 0), v = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, b = Za("asset"), _ = URL.createObjectURL(i);
    try {
      const P = await new Promise((L, F) => {
        const U = new Image();
        U.onload = () => L(U), U.onerror = () => F(new Error("image load failed")), U.src = _;
      });
      T.set(b, P), o.asset_id = b, o.vFOV_deg = pr(
        Number(o.hFOV_deg || 30),
        Number(P.naturalWidth || P.width || 1),
        Number(P.naturalHeight || P.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Dt(), ct(), je(), Be(), ye();
      const M = (async () => {
        const L = await rs(i, String(i.name || b));
        (Array.isArray(d.stickers) ? d.stickers : []).some((z) => String((z == null ? void 0 : z.id) || "") === c && String((z == null ? void 0 : z.asset_id) || "") === b) && (d.assets[b] = L, zr(), yt(), je(), Be(), ye());
      })();
      Ri.set(b, M);
      try {
        await M;
      } finally {
        Ri.delete(b);
      }
    } catch {
      delete d.assets[b], T.delete(b);
      const P = (Array.isArray(d.stickers) ? d.stickers : []).find((M) => String((M == null ? void 0 : M.id) || "") === c) || null;
      P && String(P.asset_id || "") === b && (l && h && (d.assets[l] = h), P.asset_id = l, P.vFOV_deg = p, P.crop = v ? { ...v } : null), Dt(), je(), Be(), ye();
    } finally {
      URL.revokeObjectURL(_);
    }
  }
  function Yg() {
    if (r) return;
    const i = ot();
    !i || !mt(i) || At(i) || Cl((o) => {
      Wg(o);
    });
  }
  async function qg() {
    if (r || t !== "stickers") return;
    const i = d.assets && typeof d.assets == "object" ? d.assets : {}, o = Object.entries(i).filter(([, l]) => {
      const h = String((l == null ? void 0 : l.type) || "").toLowerCase(), p = String((l == null ? void 0 : l.value) || "");
      return h === "dataurl" && p.startsWith("data:image");
    });
    if (!o.length) return;
    let c = !1;
    for (const [l, h] of o)
      try {
        const p = String((h == null ? void 0 : h.value) || "");
        if (!p) continue;
        const v = await fetch(p).then((M) => M.blob()), b = String(v.type || "image/png").split("/")[1] || "png", _ = String((h == null ? void 0 : h.name) || `${l}.${b}`), S = new File([v], _, { type: v.type || "image/png" }), P = await rs(S, _);
        d.assets[l] = {
          ...P,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, c = !0;
      } catch {
      }
    c && (yt(), ye());
  }
  function Xg() {
    if (r || t !== "cutout") return;
    const i = Ge();
    if (i) {
      gr(i), m.mode = "pano", pe(
        Rt(Number(i.yaw_deg || 0)),
        B(Number(i.pitch_deg || 0), -89.9, 89.9),
        m.viewFov
      ), je(), Be(), ye({ cause: "cutout_frame" });
      return;
    }
    const o = Math.max(0.1, Number((C == null ? void 0 : C.width) || 1) / Math.max(1, Number((C == null ? void 0 : C.height) || 1))), c = B(Number(m.viewFov || 90), 1, 179), l = B(Math.min(42, c * 0.42), 8, 96), h = B(ur * (2 * Math.atan(Math.tan(l * Pt * 0.5) / Math.max(0.1, o))), 6, 72), p = rh({
      id: `frame_${Date.now().toString(36)}`,
      label: "Frame 1",
      yaw_deg: Rt(Number(m.viewYaw || 0)),
      pitch_deg: B(Number(m.viewPitch || 0), -89.9, 89.9),
      roll_deg: 0,
      hFOV_deg: l,
      vFOV_deg: h,
      locked: !1
    });
    d.shots = [p], gr(p), m.mode = "pano", ct(), yt(), je(), Be(), ye({ cause: "cutout_frame" });
  }
  function Zg() {
    r || t === "cutout" && (d.shots = [], m.selectedId = null, m.selectedIds = [], m.mode === "frame" && (m.mode = "pano"), m.cutoutAspectOpen = !1, d.active.selected_shot_id = null, ct(), yt(), je(), ye());
  }
  function Jg() {
    const i = Array.isArray(d.stickers) ? d.stickers : [], o = [];
    for (const c of i)
      At(c) && (c.visible = !1, o.push(c));
    return o;
  }
  function Al(i, o, c = "Clear") {
    return new Promise((l) => {
      D.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(o || ""),
        confirmLabel: String(c || "Confirm"),
        resolve: l
      };
    });
  }
  async function Qg() {
    var c, l;
    if (r || !await Al(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    d.painting = Wi(null), vn();
    const o = Jg();
    t === "stickers" ? (d.stickers = o, d.assets = {}, m.selectedId = ((c = o[0]) == null ? void 0 : c.id) || null, m.selectedIds = m.selectedId ? [m.selectedId] : [], d.active.selected_sticker_id = ((l = o[0]) == null ? void 0 : l.id) || null, zr()) : (d.stickers = o, d.assets = {}, d.shots = [], m.selectedId = null, m.selectedIds = [], d.active.selected_sticker_id = null, d.active.selected_shot_id = null, m.mode === "frame" && (m.mode = "pano"), m.cutoutAspectOpen = !1, zr()), ct(), yt(), je(), Be(), ye();
  }
  async function ep(i) {
    var p, v, b, _;
    if (r) return;
    const o = i === "mask" ? "mask" : "paint", c = o === "mask" ? "Mask" : "Paint", l = Gr(o);
    if (!(!l.length && !(((p = m.interaction) == null ? void 0 : p.kind) === "draw" && ((v = m.interaction) == null ? void 0 : v.layerKind) === o) || !await Al(
      `Clear ${c}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${c}`
    ))) {
      if (((b = m.interaction) == null ? void 0 : b.kind) === "draw" && ((_ = m.interaction) == null ? void 0 : _.layerKind) === o) {
        const S = Bn();
        S && m.paintEngine.cancelActiveStroke(S), m.interaction = null;
      }
      l.length = 0, d.painting.raster_objects = en().filter((S) => String((S == null ? void 0 : S.layerKind) || "paint") !== o), o === "paint" && (de().length = 0), vn(), ct(), yt(), je(), Be(), tn(), ye();
    }
  }
  function tp() {
    if (r) return;
    const i = ot();
    if (!i || !mt(i) || At(i)) return;
    const o = JSON.parse(JSON.stringify(i));
    o.id = Za("st"), o.yaw_deg = Rt((o.yaw_deg || 0) + 8), o.z_index = tl(), d.stickers.push(o), d.active.selected_sticker_id = o.id, m.selectedId = o.id, m.selectedIds = [o.id], Dt(), ct(), yt(), Be(), je(), ye();
  }
  function Il() {
    var c, l, h, p, v, b;
    if (r) return;
    const i = bn(), o = ot();
    if (!(!o && i.length === 0)) {
      if (i.length > 1) {
        const _ = new Set(i.filter((M) => Mt(M)).map((M) => String(M.actionGroupId || M.id || ""))), S = new Set(i.filter((M) => Ot(M)).map((M) => Fe(M.rasterObjectId || M.id || ""))), P = new Set(i.filter(mt).map((M) => String(M.id || "")));
        _.size > 0 && (d.painting.paint.strokes = (Array.isArray((l = (c = d.painting) == null ? void 0 : c.paint) == null ? void 0 : l.strokes) ? d.painting.paint.strokes : []).filter((M) => !_.has(String((M == null ? void 0 : M.actionGroupId) || ""))), d.painting.groups = de().filter((M) => !_.has(String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))), vn()), S.size > 0 && (d.painting.raster_objects = en().filter((M) => !S.has(String((M == null ? void 0 : M.id) || ""))), Br()), P.size > 0 && (d.stickers = (Array.isArray(d.stickers) ? d.stickers : []).filter((M) => P.has(String((M == null ? void 0 : M.id) || "")) ? At(M) ? (Fr(M) || (M.visible = !1), !0) : !1 : !0), zr(), Dt()), m.selectedId = null, m.selectedIds = [], ct(), yt(), je(), Be(), ye();
        return;
      }
      if (Mt(o)) {
        const _ = String(o.actionGroupId || o.id || "").trim();
        d.painting.paint.strokes = (Array.isArray((p = (h = d.painting) == null ? void 0 : h.paint) == null ? void 0 : p.strokes) ? d.painting.paint.strokes : []).filter((S) => String((S == null ? void 0 : S.actionGroupId) || "").trim() !== _), d.painting.groups = de().filter((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() !== _), vn(), m.selectedId = null, m.selectedIds = [], ct(), yt(), je(), Be(), ye();
        return;
      }
      if (Ot(o)) {
        const _ = Fe(o.rasterObjectId || o.id || "");
        d.painting.raster_objects = en().filter((S) => String((S == null ? void 0 : S.id) || "").trim() !== _), Br(), m.selectedId = null, m.selectedIds = [], ct(), yt(), je(), Be(), ye();
        return;
      }
      if (t === "stickers" || mt(o)) {
        if (At(o)) {
          if (Fr(o)) return;
          o.visible = !1, Dt(), ct(), yt(), je(), Be(), ye();
          return;
        }
        d.stickers = d.stickers.filter((_) => _.id !== o.id), zr(), Dt(), m.selectedId = ((v = d.stickers[0]) == null ? void 0 : v.id) || null, m.selectedIds = m.selectedId ? [m.selectedId] : [], d.active.selected_sticker_id = ((b = d.stickers[0]) == null ? void 0 : b.id) || null, ct(), yt(), je(), Be(), ye();
        return;
      }
      Zg();
    }
  }
  function np(i, o) {
    if (!i) return;
    const c = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const L = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(L)) {
        const [z, X] = L.split(":").map((Q) => Number(Q));
        if (Number.isFinite(z) && Number.isFinite(X)) return z >= X;
      }
      const F = Number(i.hFOV_deg || 64), U = Number(i.vFOV_deg || 40);
      return Math.abs(F - U) > 1e-6 ? F >= U : Oi(i) >= 1;
    })();
    let [h, p] = c[String(o)] || c["1:1"];
    h >= p !== l && ([h, p] = [p, h]);
    const v = h / p, b = B(Number(i.hFOV_deg || 64), 1, 179), _ = B(Number(i.vFOV_deg || 40), 1, 179), S = Math.sqrt(Math.max(1, b * _)), P = B(S * Math.sqrt(v), 1, 179), M = B(S / Math.sqrt(v), 1, 179);
    i.hFOV_deg = P, i.vFOV_deg = M, i.aspect_id = String(o);
  }
  function rp(i) {
    if (!i) return;
    const o = Math.max(1, Number(i.hFOV_deg || 90)), c = Math.max(1, Number(i.vFOV_deg || 60));
    i.hFOV_deg = c, i.vFOV_deg = o, i.aspect_id = Sr(i);
  }
  function Dl() {
    jn().forEach((o, c) => {
      o.type === "sticker" && o.item && (o.item.z_index = c), o.type === "strokeGroup" && o.item && (o.item.z_index = c), o.type === "rasterObject" && o.item && (o.item.z_index = c);
    });
  }
  function ip() {
    if (r) return;
    const i = bn();
    if (!ot() || i.length === 0) return;
    Dl();
    const c = jn(), l = new Set(i.map((b) => mt(b) ? `sticker:${String(b.id || "")}` : Ot(b) ? `rasterObject:${Fe(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], p = [];
    if (c.forEach((b) => {
      var S, P;
      const _ = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((P = b.item) == null ? void 0 : P.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(_) ? h.push(b) : p.push(b);
    }), !h.length || h[h.length - 1] === c[c.length - 1]) return;
    [...p, ...h].forEach((b, _) => {
      b.type === "sticker" && b.item && (b.item.z_index = _), b.type === "strokeGroup" && b.item && (b.item.z_index = _), b.type === "rasterObject" && b.item && (b.item.z_index = _);
    }), Dt(), ct(), yt(), Be(), ye();
  }
  function ap() {
    if (r) return;
    const i = bn();
    if (!ot() || i.length === 0) return;
    Dl();
    const c = jn(), l = new Set(i.map((b) => mt(b) ? `sticker:${String(b.id || "")}` : Ot(b) ? `rasterObject:${Fe(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], p = [];
    if (c.forEach((b) => {
      var S, P;
      const _ = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((P = b.item) == null ? void 0 : P.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(_) ? h.push(b) : p.push(b);
    }), !h.length || h[0] === c[0]) return;
    [...h, ...p].forEach((b, _) => {
      b.type === "sticker" && b.item && (b.item.z_index = _), b.type === "strokeGroup" && b.item && (b.item.z_index = _), b.type === "rasterObject" && b.item && (b.item.z_index = _);
    }), Dt(), ct(), yt(), Be(), ye();
  }
  function op() {
    r || (d.projection_model = "pinhole_rectilinear", d.alpha_mode = "straight", f && (d.output_preset = bc(f.value, Number(d.output_preset || 2048))), g && (d.coverage = Lt(g.value)), y && (d.bg_color = String(y.value || d.bg_color || "#00ff00")), _n(), e.setDirtyCanvas(!0, !0));
  }
  function _n() {
    var o;
    if (r) return;
    d.coverage = Lt(d.coverage);
    const i = JSON.stringify(d);
    x && (x.value = i, (o = x.callback) == null || o.call(x, i));
  }
  function Na() {
    d.ui_settings = x_(d.ui_settings), r || _n();
  }
  function yt() {
    var i;
    r || (_n(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function sp(i = {}) {
    var l, h, p, v, b, _, S, P, M, L;
    const o = i.syncPreview !== !1, c = i.syncGraph !== !1;
    o && ((h = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || h.call(l), (v = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || v.call(p), (b = e.setDirtyCanvas) == null || b.call(e, !0, !1)), c && ((S = (_ = e.graph) == null ? void 0 : _.setDirtyCanvas) == null || S.call(_, !0, !0), (L = (M = (P = un) == null ? void 0 : P.canvas) == null ? void 0 : M.setDirty) == null || L.call(M, !0, !0));
  }
  function El() {
    m.primaryTool !== "cursor" && (m.primaryTool = "cursor", tn(), je());
  }
  function Ur(i) {
    const o = C.getBoundingClientRect();
    return {
      x: (i.clientX - o.left) / o.width * C.width,
      y: (i.clientY - o.top) / o.height * C.height
    };
  }
  function Ma(i) {
    const o = C.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(o.left || 0),
      y: Number(i.clientY) - Number(o.top || 0)
    };
  }
  function Tl() {
    return m.mode === "pano" || m.mode === "unwrap";
  }
  function Ge() {
    if (t !== "cutout") return null;
    const i = Array.isArray(d.shots) ? d.shots : [];
    if (!i.length) return null;
    const o = String(d.active.selected_shot_id || "");
    return i.find((c) => String((c == null ? void 0 : c.id) || "") === o) || i[0] || null;
  }
  function Vt(i = Ge()) {
    var v, b, _;
    if (!i || !C) return null;
    const o = {
      x: 24,
      y: 24,
      w: Math.max(1, Number(C.width || 0) - 48),
      h: Math.max(1, Number(C.height || 0) - 48)
    }, c = B(Oi(i), 0.1, 10);
    let l = o.w, h = Math.max(1, Math.round(l / c));
    h > o.h && (h = o.h, l = Math.max(1, Math.round(h * c)));
    const p = Math.max(0.1, Number(((v = m.frameView) == null ? void 0 : v.zoom) || 1));
    return l *= p, h *= p, {
      x: Math.round(o.x + (o.w - l) * 0.5 + Number(((b = m.frameView) == null ? void 0 : b.panX) || 0)),
      y: Math.round(o.y + (o.h - h) * 0.5 + Number(((_ = m.frameView) == null ? void 0 : _.panY) || 0)),
      w: Math.max(1, Math.round(l)),
      h: Math.max(1, Math.round(h))
    };
  }
  function ys() {
    return t === "cutout" && !!Ge();
  }
  function xn(i, o = performance.now()) {
    if (m.mode === "unwrap") {
      const p = rr(), v = (i.x - p.x) / Math.max(1, p.w), b = (i.y - p.y) / Math.max(1, p.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (v % 1 + 1) % 1,
        v: B(b, 0, 1),
        t: Number(o || 0)
      };
    }
    const c = ns(i.x, i.y), { lon: l, lat: h } = ss(c);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: B(0.5 - h / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function wn(i, o, c = performance.now()) {
    const l = Vt(o);
    if (!l) return null;
    const h = {
      x: (Number(i.x) - l.x) / Math.max(1, l.w),
      y: (Number(i.y) - l.y) / Math.max(1, l.h)
    }, p = fs(o, h);
    if (!p) return null;
    const { lon: v, lat: b } = ss(p);
    return {
      targetKind: "ERP_GLOBAL",
      u: (v / (2 * Math.PI) + 0.5 + 1) % 1,
      v: B(0.5 - b / Math.PI, 0, 1),
      t: Number(c || 0)
    };
  }
  function cp(i, o) {
    var S;
    const c = Ge(), l = Vt(c);
    if (!c || !l) return !1;
    const h = Math.max(0.1, Number(((S = m.frameView) == null ? void 0 : S.zoom) || 1)), p = B(h * Number(o), 0.25, 12);
    if (Math.abs(p - h) < 1e-6) return !1;
    const v = (Number(i.x) - l.x) / Math.max(1e-6, l.w), b = (Number(i.y) - l.y) / Math.max(1e-6, l.h);
    m.frameView.zoom = p;
    const _ = Vt(c);
    return _ ? (m.frameView.panX += Number(i.x) - (_.x + _.w * v), m.frameView.panY += Number(i.y) - (_.y + _.h * b), !0) : !1;
  }
  function lp(i, o) {
    const c = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, c / 2048)
    };
  }
  function ar(i) {
    const o = String(i || "").trim();
    return o === "eraser" ? Gn : nn[o] ? o : m.activeBrushPresetId || Gn;
  }
  function Ll() {
    return (m.primaryTool === "paint" || m.primaryTool === "mask") && (Tl() || ys());
  }
  function Rl() {
    var i;
    return Ll() && ((i = m.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function ka(i, o = !0) {
    const c = Number((i == null ? void 0 : i.x) || 0), l = Number((i == null ? void 0 : i.y) || 0), h = o !== !1, p = m.pointerPos || { x: 0, y: 0, inside: !1 }, v = p.inside !== h || Math.abs(p.x - c) > 0.01 || Math.abs(p.y - l) > 0.01;
    return m.pointerPos = { x: c, y: l, inside: h }, v;
  }
  function up() {
    var P, M;
    if (!Rl()) return null;
    const i = m.primaryTool === "mask" ? "mask" : "paint", o = i === "mask" ? m.maskTool : m.paintTool, c = ar(o), l = nn[c] || nn[Gn], h = Number(m.brushSizes[c] ?? 10), p = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), v = Math.max(3, p * 0.5), b = i === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : ln(m.paintColor), _ = i === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : B(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), S = i === "mask" ? 0.95 : o === "eraser" ? 0.75 : B(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: o,
      preset: l,
      radius: v,
      fillStyle: An(b, _),
      strokeStyle: An(b, S),
      x: Number(((P = m.pointerPos) == null ? void 0 : P.x) || 0),
      y: Number(((M = m.pointerPos) == null ? void 0 : M.y) || 0),
      hotspotX: v,
      hotspotY: v
    };
  }
  function fp() {
    var L, F, U;
    const i = up();
    if (!ae) return;
    if (!i) {
      ae.style.display = "none";
      return;
    }
    let o = i.radius * 2, c = i.radius * 2, l = "999px", h = 0, p = i.fillStyle, v = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const _ = "rgba(222, 222, 222, 0.72)", S = "rgba(52, 52, 52, 0.72)";
    let P = Number(i.hotspotX ?? o * 0.5), M = Number(i.hotspotY ?? c * 0.5);
    if (i.toolKind === "lasso_fill")
      o = Do, c = Do, l = "0", v = "0", b = "none", P = c_, M = l_, p = g_(i.fillStyle, S, _);
    else if (i.layerKind === "mask")
      p = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const z = Math.max(1, Number(((L = i.preset) == null ? void 0 : L.aspect) ?? 1));
      o = Math.max(10, i.radius * 2 * z), c = Math.max(6, i.radius * 2), l = `${Math.min(6, c * 0.42)}px`, h = Number(((U = (F = i.preset) == null ? void 0 : F.angle) == null ? void 0 : U.value) || 0) * ur;
    } else i.toolKind === "brush" ? p = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (p = "rgba(255,255,255,0.14)");
    ae.style.display = "block", ae.style.width = `${Math.round(o)}px`, ae.style.height = `${Math.round(c)}px`, ae.style.borderRadius = l, ae.style.border = v, ae.style.boxShadow = b, ae.style.background = p, ae.style.backgroundRepeat = "no-repeat", ae.style.backgroundPosition = "center", ae.style.backgroundSize = "contain", ae.style.transform = `translate(${Math.round(i.x - P)}px, ${Math.round(i.y - M)}px) rotate(${h}deg)`;
  }
  function dp() {
    var he;
    if (!re || !we) return;
    const i = m.primaryTool === "mask" ? "mask" : "paint", o = i === "mask" ? m.maskTool : m.paintTool;
    if (o === "lasso_fill") return;
    const c = ar(o), l = nn[c] || nn[Gn], h = Number(m.brushSizes[c] ?? 10), p = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), v = Math.max(6, p * 0.5), b = o === "eraser", _ = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : ln(m.paintColor), S = i === "mask" ? An(_, 0.22) : b ? "rgba(255,255,255,0.14)" : An(_, B(Math.max(0.18, Number(_.a ?? 1) * 0.34), 0.18, 0.56)), P = i === "mask" ? An(_, 0.96) : b ? "rgba(255,255,255,0.72)" : An(_, B(Math.max(0.56, Number(_.a ?? 1) * 0.96), 0.56, 1));
    let M = v * 2, L = v * 2, F = "999px", U = 0, z = S;
    const X = "rgba(222, 222, 222, 0.72)", Q = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      z = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const ne = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      M = Math.max(16, v * 2 * ne), L = Math.max(10, v * 2), F = `${Math.min(8, L * 0.42)}px`, U = Number(((he = l == null ? void 0 : l.angle) == null ? void 0 : he.value) || 0) * ur;
    } else o === "brush" ? z = `radial-gradient(circle at 50% 50%, ${P} 0%, ${S} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (M = Math.max(18, v * 1.8), L = M, z = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${P} 43%, ${P} 58%, rgba(0,0,0,0) 59%)`) : b && (z = "rgba(255,255,255,0.12)");
    we.style.width = `${Math.round(M)}px`, we.style.height = `${Math.round(L)}px`, we.style.borderRadius = F, we.style.background = z, we.style.border = `1px solid ${X}`, we.style.boxShadow = `0 0 0 1px ${Q}`, we.style.transform = `rotate(${U}deg)`, Ye && (clearTimeout(Ye), Ye = 0), re.classList.remove("fade-out"), re.classList.add("show");
  }
  function Pa() {
    !re || !re.classList.contains("show") || (re.classList.add("fade-out"), Ye && clearTimeout(Ye), Ye = window.setTimeout(() => {
      re.classList.remove("show", "fade-out"), Ye = 0;
    }, 180));
  }
  function hp(i, o, c, l) {
    const h = ar(o), p = nn[h] || nn[Gn], v = m.brushSizes[h] ?? 10, b = Math.max(1, v) * Math.max(0.1, p.sizeScale ?? 1), _ = lp(l, b), S = c.map((M) => ({
      ...M,
      t: Number((M == null ? void 0 : M.t) || 0),
      widthScale: Number.isFinite(Number(M == null ? void 0 : M.widthScale)) ? Math.max(0, Number(M.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(M == null ? void 0 : M.pressureLike)) ? Math.max(0, Number(M.pressureLike)) : 1
    })), P = {
      id: Zr(i),
      actionGroupId: Zr("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(m.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(m.mode || "pano") },
      layerKind: i,
      toolKind: o,
      size: b,
      createdAt: Date.now(),
      color: i === "paint" ? { ...m.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: _.radiusModel,
      radiusValue: _.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: S.map((M) => ({ ...M })),
        points: S.map((M) => ({ ...M }))
      }
    };
    return uf(P, p), Number(p.aspect ?? 1), Number(P.aspect ?? 1), String(P.stampKind || ""), Number(P.size || 0), String(P.radiusModel || ""), Number(P.radiusValue || 0), { ...P.targetSpace }, P;
  }
  function gp(i, o, c, l) {
    const h = c.map((_) => ({
      ..._,
      t: Number((_ == null ? void 0 : _.t) || 0),
      widthScale: Number.isFinite(Number(_ == null ? void 0 : _.widthScale)) ? Math.max(0, Number(_.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(_ == null ? void 0 : _.pressureLike)) ? Math.max(0, Number(_.pressureLike)) : 1
    })), p = ar(o), v = nn[p] || nn[Gn], b = {
      id: Zr(i),
      actionGroupId: Zr("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(m.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(m.mode || "pano") },
      layerKind: i,
      toolKind: o,
      size: 10,
      createdAt: Date.now(),
      color: i === "paint" ? { ...m.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((_) => ({ ..._ }))
      }
    };
    return uf(b, v), Number(v.aspect ?? 1), Number(b.aspect ?? 1), String(b.stampKind || ""), { ...b.targetSpace }, b;
  }
  function Gr(i) {
    const o = d.painting || (d.painting = Wi(null)), c = o[i] || (o[i] = { strokes: [] });
    return Array.isArray(c.strokes) || (c.strokes = []), c.strokes;
  }
  function pp(i, o, c = performance.now()) {
    let l;
    if (m.mode === "frame") {
      const S = Ge();
      if (!S) return !1;
      l = wn(o, S, c);
    } else
      l = xn(o, c);
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, p = i.stroke.geometry.points, v = h[h.length - 1];
    if (v) {
      const S = Math.abs(Number(l.u ?? l.x ?? 0) - Number(v.u ?? v.x ?? 0)), P = Math.abs(Number(l.v ?? l.y ?? 0) - Number(v.v ?? v.y ?? 0));
      if (S < 15e-4 && P < 15e-4) return !1;
    }
    const b = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...b }), p.push({ ...b });
    const _ = Bn();
    if (_) {
      const S = m.paintEngine.ensureTarget(_);
      m.paintEngine.appendStrokePoint(S, Number(b.u ?? 0), Number(b.v ?? 0), i.stroke);
    }
    return !0;
  }
  function mp(i, o, c = performance.now()) {
    var v, b;
    let l;
    if (m.mode === "frame") {
      const _ = Ge();
      if (!_) return !1;
      l = wn(o, _, c);
    } else
      l = xn(o, c);
    const h = (b = (v = i == null ? void 0 : i.stroke) == null ? void 0 : v.geometry) == null ? void 0 : b.points;
    if (!l || !Array.isArray(h)) return !1;
    const p = h[h.length - 1];
    if (p) {
      const _ = Math.abs(Number(l.u ?? l.x ?? 0) - Number(p.u ?? p.x ?? 0)), S = Math.abs(Number(l.v ?? l.y ?? 0) - Number(p.v ?? p.y ?? 0));
      if (_ < 15e-4 && S < 15e-4) return !1;
    }
    return h.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function yp(i) {
    var ne, me, Ce, Ve, Se;
    const o = (i == null ? void 0 : i.stroke) || null;
    if (!o || (i == null ? void 0 : i.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    xa();
    const c = Bn(), l = vi(c.width, c.height);
    if (!Sl(l, o, { w: c.width, h: c.height })) return !1;
    const h = ((me = (ne = l.ctx) == null ? void 0 : ne.getImageData(0, 0, c.width, c.height)) == null ? void 0 : me.data) || null;
    if (!h) return !1;
    const p = new Map(de().map((K) => [String((K == null ? void 0 : K.actionGroupId) || (K == null ? void 0 : K.id) || "").trim(), K ? { ...K } : null])), v = [], b = [], _ = [...en().filter((K) => String((K == null ? void 0 : K.layerKind) || "paint") !== "paint")];
    let S = !1, P = jn().reduce((K, ee) => Math.max(K, Number((ee == null ? void 0 : ee.z_index) || 0)), -1) + 1;
    function M(K, ee, be, Ne = 8) {
      let $e = ee, He = be, Ue = -1, We = -1;
      for (let Ke = 0; Ke < be; Ke += 1)
        for (let qe = 0; qe < ee; qe += 1)
          K[(Ke * ee + qe) * 4 + 3] <= Ne || (qe < $e && ($e = qe), Ke < He && (He = Ke), qe > Ue && (Ue = qe), Ke > We && (We = Ke));
      return Ue < $e || We < He ? null : { minX: $e, minY: He, maxX: Ue, maxY: We };
    }
    const L = M(h, c.width, c.height, 8);
    if (!L) return !1;
    function F(K, ee) {
      return !K || !ee ? !1 : !(K.maxX < ee.minX || ee.maxX < K.minX || K.maxY < ee.minY || ee.maxY < K.minY);
    }
    function U(K, ee) {
      const be = Nt((K == null ? void 0 : K.actionGroupId) || (K == null ? void 0 : K.id) || "", "paint", ee);
      if (!be) return null;
      const Ne = be.centerUv.u - be.halfW, $e = be.centerUv.u + be.halfW, He = be.centerUv.v - be.halfH, Ue = be.centerUv.v + be.halfH, We = c.width, Ke = c.height;
      return {
        minX: Math.floor((Ne % 1 + 1) % 1 * We),
        maxX: Math.ceil(($e % 1 + 1) % 1 * We),
        minY: Math.floor(B(He, 0, 1) * Ke),
        maxY: Math.ceil(B(Ue, 0, 1) * Ke),
        wraps: $e - Ne >= 1 || Ne < 0 || $e > 1
      };
    }
    function z(K) {
      const ee = (K == null ? void 0 : K.bbox) || null;
      if (!ee) return null;
      const be = (K == null ? void 0 : K.transform) || {}, Ne = c.width, $e = c.height, He = Number(ee.u0 || 0) + Number(be.du || 0), Ue = Number(ee.u1 || 0) + Number(be.du || 0), We = Number(ee.v0 || 0) + Number(be.dv || 0), Ke = Number(ee.v1 || 0) + Number(be.dv || 0);
      return {
        minX: Math.floor((He % 1 + 1) % 1 * Ne),
        maxX: Math.ceil((Ue % 1 + 1) % 1 * Ne),
        minY: Math.floor(B(We, 0, 1) * $e),
        maxY: Math.ceil(B(Ke, 0, 1) * $e),
        wraps: Ue - He >= 1 || He < 0 || Ue > 1
      };
    }
    function X(K) {
      return K ? K.wraps ? F(L, { minX: 0, maxX: K.maxX, minY: K.minY, maxY: K.maxY }) || F(L, { minX: K.minX, maxX: c.width - 1, minY: K.minY, maxY: K.maxY }) : F(L, K) : !0;
    }
    function Q(K) {
      if (!K) return { touched: !1, canvas: null };
      const ee = vi(c.width, c.height, { readback: !0 });
      ee.ctx.drawImage(K, 0, 0);
      const be = ee.ctx.getImageData(0, 0, c.width, c.height);
      ee.ctx.save(), ee.ctx.globalCompositeOperation = "destination-out", ee.ctx.drawImage(l.canvas, 0, 0), ee.ctx.restore();
      const Ne = ee.ctx.getImageData(0, 0, c.width, c.height);
      for (let $e = 0; $e < c.width * c.height; $e += 1) {
        if (h[$e * 4 + 3] <= 8) continue;
        const Ue = be.data[$e * 4 + 3], We = Ne.data[$e * 4 + 3];
        if (Ue > We)
          return { touched: !0, canvas: ee.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function he(K, ee, be) {
      const Ne = Number(be == null ? void 0 : be.z_index), $e = Rg(K, ee, be).map((He, Ue) => ({
        ...He,
        z_index: Number.isFinite(Ne) ? Ne + Ue * 1e-3 : P + Ue * 1e-3
      }));
      return $e.length && (P = Math.max(P, ...$e.map((He) => Number((He == null ? void 0 : He.z_index) || 0))) + 1), $e;
    }
    for (const K of de()) {
      const ee = String((K == null ? void 0 : K.actionGroupId) || (K == null ? void 0 : K.id) || "").trim();
      if (!ee) continue;
      const be = yn(ee, "paint");
      if (!X(U(K, be))) {
        b.push(K), v.push(...be);
        continue;
      }
      const Ne = ((Ve = (Ce = m.paintEngine) == null ? void 0 : Ce.getGroupTarget) == null ? void 0 : Ve.call(Ce, ee)) || null, $e = ((Se = Ne == null ? void 0 : Ne.committedPaint) == null ? void 0 : Se.canvas) || null;
      if (!$e) {
        b.push(K), v.push(...be);
        continue;
      }
      const He = Q($e);
      if (!He.touched || !He.canvas) {
        b.push(K), v.push(...be);
        continue;
      }
      S = !0;
      const Ue = he(He.canvas, "paint", p.get(ee) || K || {});
      _.push(...Ue);
    }
    for (const K of en().filter((ee) => String((ee == null ? void 0 : ee.layerKind) || "paint") === "paint")) {
      if (!X(z(K))) {
        _.push(K);
        continue;
      }
      const ee = ul(K, null);
      if (!ee) {
        _.push(K);
        continue;
      }
      const be = Q(ee);
      if (!be.touched || !be.canvas) {
        _.push(K);
        continue;
      }
      S = !0;
      const Ne = he(be.canvas, "paint", K);
      _.push(...Ne);
    }
    return S ? (d.painting.paint.strokes = v, d.painting.groups = b.sort((K, ee) => Number((K == null ? void 0 : K.z_index) || 0) - Number((ee == null ? void 0 : ee.z_index) || 0)), d.painting.raster_objects = _.sort((K, ee) => Number((K == null ? void 0 : K.z_index) || 0) - Number((ee == null ? void 0 : ee.z_index) || 0)), Vr({ preservePanelValues: !1 }), !0) : !1;
  }
  function bp(i) {
    var p, v, b, _;
    const o = ((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.geometry) || null;
    if (!o) return !1;
    const c = String(((v = i == null ? void 0 : i.stroke) == null ? void 0 : v.toolKind) || "pen");
    if (i.layerKind === "paint" && c === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = ds(o.rawPoints || o.points || [], i.stroke.targetSpace, !0)), yp(i);
    const l = i.layerKind === "paint" && c !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (l && vt((b = i.stroke) == null ? void 0 : b.actionGroupId), Gr(i.layerKind).push(i.stroke), !0);
    const h = o.rawPoints || o.points || [];
    return h.length < 1 ? !1 : (o.processedPoints = ds(h, i.stroke.targetSpace, !0), l && vt((_ = i.stroke) == null ? void 0 : _.actionGroupId), Gr(i.layerKind).push(i.stroke), !0);
  }
  function Ol(i) {
    var c;
    if (t === "cutout" && m.mode === "frame") {
      const l = Ge(), h = Vt(l);
      if (!l || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const v = wn(i, l, performance.now()), b = v ? jr(v) : null;
      if (b)
        for (const S of us()) {
          if (!mt(S)) continue;
          const P = xi(S, b);
          if (P && Number(P.x) >= 0 && Number(P.x) <= 1 && Number(P.y) >= 0 && Number(P.y) <= 1) {
            const M = It(S);
            if (M != null && M.visible) return { item: S, geom: M };
          }
        }
      const _ = Yo(!1).slice().sort((S, P) => Number((P == null ? void 0 : P.z_index) || 0) - Number((S == null ? void 0 : S.z_index) || 0));
      for (const S of _) {
        if (S.type === "strokeGroup") {
          const L = Or(Ie("paint", S.actionGroupId || S.id || ""));
          if (!L) continue;
          const F = It(L);
          if (!(F != null && F.visible)) continue;
          const U = Array.isArray(F.strokePaths) ? F.strokePaths : [];
          for (const z of U) {
            const X = Array.isArray(z == null ? void 0 : z.points) ? z.points : [];
            if (!X.length) continue;
            if (z.closed && X.length >= 3 && Kn(i, X)) return { item: L, geom: F };
            const Q = Math.max(8, Number((z == null ? void 0 : z.lineWidth) || 0) * 0.5 + 6);
            for (let he = 0; he < X.length - 1; he += 1)
              if (Gs(i, X[he], X[he + 1]) <= Q * Q) return { item: L, geom: F };
            if (X.length === 1 && cr(i, X[0]) <= Q * Q) return { item: L, geom: F };
          }
          continue;
        }
        if (S.type === "rasterObject") {
          const L = Rr(Le(((c = S.item) == null ? void 0 : c.id) || S.id || ""));
          if (!L) continue;
          const F = It(L);
          if (ll(L, F, i, v)) return { item: L, geom: F };
          continue;
        }
        const P = S.item;
        if (!P || !mt(P) || !b) continue;
        const M = xi(P, b);
        if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
          const L = It(P);
          if (L != null && L.visible) return { item: P, geom: L };
        }
      }
      return null;
    }
    const o = [
      ...Yo(!1).slice().sort((l, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var h;
        return l.type === "strokeGroup" ? Or(Ie("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? Rr(Le(((h = l.item) == null ? void 0 : h.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...t === "cutout" ? us().filter((l) => cn(l)) : []
    ];
    for (const l of o) {
      if (Mt(l)) {
        const p = It(l);
        if (!(p != null && p.visible)) continue;
        const v = Array.isArray(p.strokePaths) ? p.strokePaths : [];
        for (const b of v) {
          const _ = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
          if (!_.length) continue;
          if (b.closed && _.length >= 3 && Kn(i, _)) return { item: l, geom: p };
          const S = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
          for (let P = 0; P < _.length - 1; P += 1)
            if (Gs(i, _[P], _[P + 1]) <= S * S) return { item: l, geom: p };
          if (_.length === 1 && cr(i, _[0]) <= S * S) return { item: l, geom: p };
        }
        continue;
      }
      if (Ot(l)) {
        const p = It(l);
        if (!(p != null && p.visible)) continue;
        if (ll(l, p, i)) return { item: l, geom: p };
        continue;
      }
      const h = It(l);
      if (h.visible && Kn(i, h.corners))
        return { item: l, geom: h };
    }
    return null;
  }
  function bs(i, o) {
    if (!i || !i.visible) return { kind: "none", cursor: m.mode === "pano" ? "grab" : "default" };
    if (i.kind === "strokeGroup") {
      const l = i.corners.findIndex((p) => cr(p, o) <= 121);
      if (l >= 0) {
        const p = i.corners[l], v = p.x - i.center.x, b = p.y - i.center.y, _ = v * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: _ };
      }
      const h = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const p of h) {
        const v = Array.isArray(p == null ? void 0 : p.points) ? p.points : [];
        if (p.closed && v.length >= 3 && Kn(o, v)) return { kind: "move", cursor: "default" };
        const b = Math.max(8, Number((p == null ? void 0 : p.lineWidth) || 0) * 0.5 + 6);
        for (let _ = 0; _ < v.length - 1; _ += 1)
          if (Gs(o, v[_], v[_ + 1]) <= b * b) return { kind: "move", cursor: "default" };
      }
      return Kn(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: m.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const l = i.corners.findIndex((h) => cr(h, o) <= 121);
      if (l >= 0) {
        const h = i.corners[l], p = h.x - i.center.x, v = h.y - i.center.y, b = p * v >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: b };
      }
      return Kn(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: m.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const l = i.edgeMidpoints.find((h) => cr(h, o) <= 169);
      if (l) {
        const h = l.edge === "left" || l.edge === "right";
        return { kind: h ? "scale_x" : "scale_y", cursor: h ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const c = i.corners.findIndex((l) => cr(l, o) <= 121);
    if (c >= 0) {
      const l = i.corners[c], h = l.x - i.center.x, p = l.y - i.center.y, v = h * p >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: c, cursor: v };
    }
    return cr(i.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : Kn(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: m.mode === "pano" ? "grab" : "default" };
  }
  function Fl(i, o) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function vp(i, o) {
    return !!i && !!o && Number(o.x) >= Number(i.x0) && Number(o.x) <= Number(i.x1) && Number(o.y) >= Number(i.y0) && Number(o.y) <= Number(i.y1);
  }
  function _p(i, o) {
    if (!i || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((h) => vp(i, h))) return !0;
    const c = (Number(i.x0) + Number(i.x1)) * 0.5, l = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Kn({ x: c, y: l }, o.corners);
  }
  function gt(i) {
    if (fp(), m.interaction) {
      m.interaction.kind === "paint_stroke" || m.interaction.kind === "paint_lasso_fill" ? C.style.cursor = "none" : m.interaction.kind === "view" || m.interaction.kind === "pan_frame" ? C.style.cursor = "grabbing" : m.interaction.kind === "move" || m.interaction.kind === "move_multi" || m.interaction.kind === "move_stroke_group" || m.interaction.kind === "move_raster_object" ? C.style.cursor = "move" : m.interaction.kind === "scale" || m.interaction.kind === "scale_x" || m.interaction.kind === "scale_y" || m.interaction.kind === "scale_raster_object" ? C.style.cursor = m.interaction.cursor || "nwse-resize" : m.interaction.kind === "rotate" ? C.style.cursor = "grabbing" : C.style.cursor = "default";
      return;
    }
    if (Rl()) {
      C.style.cursor = "none";
      return;
    }
    if (m.mode === "frame" && m.primaryTool !== "cursor") {
      C.style.cursor = "default";
      return;
    }
    if (m.primaryTool === "cursor" && m.marqueeModifier) {
      C.style.cursor = "default";
      return;
    }
    const o = ot(), c = o ? It(o) : null, l = o ? nr(o) : !1, h = l ? { kind: "none", cursor: "default" } : bs(c, i);
    if (!l && h.kind !== "none") {
      C.style.cursor = h.cursor;
      return;
    }
    if (m.primaryTool === "cursor" && Ol(i)) {
      C.style.cursor = "default";
      return;
    }
    C.style.cursor = m.mode === "pano" ? "grab" : "default";
  }
  function Be() {
    var h, p;
    if (!ve) return;
    const i = ot(), o = bn();
    if (!i && o.length === 0 || m.interaction) {
      D.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const c = fa(), l = gb({
      type: t,
      selected: i,
      selectedItems: o,
      selectedKind: c,
      geom: o.length > 1 ? Zo(o) : It(i),
      allLocked: Jo(o),
      selectedLocked: nr(i),
      activeAspect: Ii(i),
      cutoutAspectOpen: m.cutoutAspectOpen,
      isExternalSticker: At,
      isStickerHidden: Fr,
      canRestoreSelectedToInitial: Ph,
      iconSet: Tt
    });
    if (!l.visible) {
      D.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    D.selectionMenu = {
      visible: !0,
      left: ((h = D.selectionMenu) == null ? void 0 : h.left) ?? l.left ?? 0,
      top: ((p = D.selectionMenu) == null ? void 0 : p.top) ?? l.top ?? 0,
      items: l.items
    }, requestAnimationFrame(() => {
      var L, F, U;
      if (!ve || D.selectionMenu.visible !== !0) return;
      const v = ve.getBoundingClientRect(), b = Math.round(Number((v == null ? void 0 : v.width) || 0)) || 220, _ = Math.round(Number((v == null ? void 0 : v.height) || 0)) || 40, S = 14;
      let P = B((Number(((L = l.anchor) == null ? void 0 : L.minX) || 0) + Number(((F = l.anchor) == null ? void 0 : F.maxX) || 0)) * 0.5 - b * 0.5, S, C.width - b - S), M = Number(((U = l.anchor) == null ? void 0 : U.maxY) || 0) + 18;
      if (!Number.isFinite(P) || !Number.isFinite(M) || M + _ > C.height - S) {
        D.selectionMenu.visible = !1;
        return;
      }
      D.selectionMenu.left = P, D.selectionMenu.top = M;
    });
  }
  function Ca() {
    j.timer && (clearTimeout(j.timer), j.timer = 0), j.target = null, D.tooltip.visible = !1, D.tooltip.text = "", D.tooltip.variant = "";
  }
  function xp(i) {
    if (!J || !i || !i.isConnected) return;
    const o = String(i.getAttribute("data-tip") || "").trim();
    if (!o) return;
    D.tooltip.text = o, D.tooltip.visible = !0;
    const c = i;
    requestAnimationFrame(() => {
      var U, z;
      if (j.target !== c || !J || !(c != null && c.isConnected)) return;
      const l = ie.getBoundingClientRect(), h = c.getBoundingClientRect(), p = 8, v = 12, b = Math.round(Number(((U = J.getBoundingClientRect()) == null ? void 0 : U.width) || 0)) || 100, _ = Math.round(Number(((z = J.getBoundingClientRect()) == null ? void 0 : z.height) || 0)) || 24, S = !!c.closest(".pano-floating-left"), P = !!c.closest(".pano-paint-footer") || !!c.closest(".pano-paint-color-float");
      let M = "", L = h.left - l.left + h.width * 0.5 - b * 0.5, F = h.top - l.top - _ - v;
      if (S)
        M = "tool-rail", L = h.right - l.left + 10, F = h.top - l.top + h.height * 0.5 - _ * 0.5, L = B(L, p, Math.max(p, l.width - b - p)), F = B(F, p, Math.max(p, l.height - _ - p));
      else if (P) {
        M = "footer";
        const X = c.closest(".pano-paint-footer"), Q = X ? X.getBoundingClientRect() : h;
        L = Q.left - l.left + Q.width * 0.5 - b * 0.5, F = Q.bottom - l.top + 5, L = B(L, p, Math.max(p, l.width - b - p)), F = Math.max(p, F);
      }
      L = B(L, p, Math.max(p, l.width - b - p)), F = Math.max(p, F), D.tooltip.left = L, D.tooltip.top = F, D.tooltip.variant = M, D.tooltip.visible = !0;
    });
  }
  const Et = Ko({
    getView: () => ({ yaw: m.viewYaw, pitch: m.viewPitch, fov: m.viewFov }),
    setView: (i) => {
      m.viewYaw = Rt(Number(i.yaw || 0)), m.viewPitch = B(Number(i.pitch || 0), -89.9, 89.9), m.viewFov = B(Number(i.fov || m.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = C.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || C.clientWidth || 0)),
        h: Math.max(1, Number(i.height || C.clientHeight || 0))
      };
    },
    getInvert: () => {
      var i, o;
      return {
        x: (i = d.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (o = d.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: rr,
    onInteraction: () => {
      I.backgroundDirty = !0, I.dirty = !0;
    }
  });
  C.onpointerdown = (i) => {
    const o = Ur(i);
    if (ka(o, !0), m.viewTween = null, Et.state.inertia.active = !1, Et.state.inertia.vx = 0, Et.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), m.mode === "frame")
        m.interaction = { kind: "pan_frame", last: o };
      else {
        const b = m.mode === "unwrap" ? o : Ma(i);
        m.interaction = { kind: "view", last: b, lastTs: performance.now() }, Et.startDrag(b.x, b.y, i.pointerId, performance.now());
      }
      gt(o), C.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (r) {
      if (m.mode === "pano") {
        const b = Ma(i);
        m.interaction = { kind: "view", last: b, lastTs: performance.now() }, Et.startDrag(b.x, b.y, i.pointerId, performance.now()), gt(o), C.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (G && !G.hidden)
      return;
    if ((m.primaryTool === "paint" || m.primaryTool === "mask") && (Tl() || ys())) {
      const b = m.primaryTool === "mask" ? "mask" : "paint", _ = m.primaryTool === "mask" ? m.maskTool : m.paintTool, S = m.mode === "frame" && ys() ? Ge() : null, P = { kind: "ERP_GLOBAL" }, M = S ? wn(o, S, performance.now()) : xn(o, performance.now());
      m.interaction = {
        kind: _ === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: Zr("live"),
        stroke: _ === "lasso_fill" ? gp(b, _, [M], P) : hp(b, _, [M], P)
      }, yi();
      const L = Bn();
      if (L)
        if (m.paintEngine.beginStroke(m.interaction.stroke, L), m.interaction.kind === "paint_stroke") {
          const F = m.paintEngine.ensureTarget(L), U = Number((M == null ? void 0 : M.u) ?? (M == null ? void 0 : M.x) ?? 0), z = Number((M == null ? void 0 : M.v) ?? (M == null ? void 0 : M.y) ?? 0);
          m.paintEngine.appendStrokePoint(F, U, z, m.interaction.stroke);
        } else
          m.paintEngine.updateActiveStroke(m.interaction.stroke, L);
      gt(o), C.setPointerCapture(i.pointerId), ye();
      return;
    }
    const c = bn(), l = ot(), h = c.length > 1 ? Zo(c) : l ? It(l) : null;
    if (m.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      m.interaction = { kind: "marquee_select", start: o, current: o }, gt(o), C.setPointerCapture(i.pointerId), ye({ localOnly: !0 });
      return;
    }
    if (c.length > 1 && (h != null && h.visible)) {
      if ((c.some((_) => nr(_)) ? { kind: "none" } : bs(h, o)).kind === "move") {
        m.interaction = {
          kind: "move_multi",
          items: c.map((_) => _),
          offset: { x: o.x - h.center.x, y: o.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: c.filter((_) => mt(_)).map((_) => ({
            id: String(_.id || ""),
            yaw_deg: Number(_.yaw_deg || 0),
            pitch_deg: Number(_.pitch_deg || 0),
            center: (() => {
              var P, M;
              const S = It(_);
              return S != null && S.visible ? { x: Number(((P = S.center) == null ? void 0 : P.x) || 0), y: Number(((M = S.center) == null ? void 0 : M.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: c.filter((_) => Mt(_)).map((_) => ({
            id: String(_.actionGroupId || _.id || ""),
            layerKind: String(_.layerKind || "paint"),
            snapshot: Ht(yn(_.actionGroupId, _.layerKind)),
            frameSnapshot: Ht(Nt(_.actionGroupId, _.layerKind)),
            center: (() => {
              var P, M;
              const S = It(_);
              return S != null && S.visible ? { x: Number(((P = S.center) == null ? void 0 : P.x) || 0), y: Number(((M = S.center) == null ? void 0 : M.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Xo(_.actionGroupId, _.layerKind)
          })),
          rasterSnapshots: c.filter((_) => Ot(_)).map((_) => ({
            id: Fe(_.rasterObjectId || _.id || ""),
            snapshot: Ht(en().find((S) => String((S == null ? void 0 : S.id) || "") === Fe(_.rasterObjectId || _.id || ""))),
            center: (() => {
              var P, M;
              const S = It(_);
              return S != null && S.visible ? { x: Number(((P = S.center) == null ? void 0 : P.x) || 0), y: Number(((M = S.center) == null ? void 0 : M.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: pl(_)
          }))
        }, gt(o), C.setPointerCapture(i.pointerId);
        return;
      }
    } else if (l && (h != null && h.visible)) {
      const b = nr(l) ? { kind: "none" } : bs(h, o);
      if (b.kind === "scale") {
        m.interaction = Mt(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: Ht(yn(l.actionGroupId, l.layerKind)),
          frameSnapshot: Ht(Nt(l.actionGroupId, l.layerKind)),
          cursor: b.cursor
        } : Ot(l) ? {
          kind: "scale_raster_object",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: Ht(en().find((_) => String((_ == null ? void 0 : _.id) || "") === Fe(l.rasterObjectId || l.id || ""))),
          cursor: b.cursor
        } : {
          kind: "scale",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor
        }, gt(o), C.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "scale_x" || b.kind === "scale_y") {
        m.interaction = {
          kind: b.kind,
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor,
          edge: b.edge
        }, gt(o), C.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        m.interaction = Mt(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: h.center,
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x),
          snapshot: Ht(yn(l.actionGroupId, l.layerKind)),
          frameSnapshot: Ht(Nt(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: h.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x)
        }, gt(o), C.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (Mt(l)) {
          const _ = m.mode === "frame" ? (() => {
            const S = Ge();
            return S ? wn(o, S, performance.now()) : null;
          })() : xn(o, performance.now());
          m.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: _,
            snapshot: Ht(yn(l.actionGroupId, l.layerKind)),
            frameSnapshot: Ht(Nt(l.actionGroupId, l.layerKind))
          }, gt(o), C.setPointerCapture(i.pointerId);
          return;
        }
        if (Ot(l)) {
          const _ = m.mode === "frame" ? (() => {
            const S = Ge();
            return S ? wn(o, S, performance.now()) : null;
          })() : xn(o, performance.now());
          m.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: _,
            snapshot: Ht(en().find((S) => String((S == null ? void 0 : S.id) || "") === Fe(l.rasterObjectId || l.id || "")))
          }, gt(o), C.setPointerCapture(i.pointerId);
          return;
        }
        m.interaction = {
          kind: "move",
          item: l,
          offset: { x: o.x - h.center.x, y: o.y - h.center.y }
        }, gt(o), C.setPointerCapture(i.pointerId);
        return;
      }
    }
    const p = Ol(o);
    if (p) {
      const b = m.selectedId !== p.item.id;
      if (b && m.selectedId && (ct(), _n()), gr(p.item), t === "cutout" && b && (m.cutoutAspectOpen = !1), b && je(), Be(), ye(), nr(p.item)) {
        gt(o);
        return;
      }
      m.interaction = {
        kind: Mt(p.item) ? "move_stroke_group" : Ot(p.item) ? "move_raster_object" : "move",
        item: p.item,
        offset: { x: o.x - p.geom.center.x, y: o.y - p.geom.center.y },
        startUv: Mt(p.item) || Ot(p.item) ? m.mode === "frame" ? (() => {
          const _ = Ge();
          return _ ? wn(o, _, performance.now()) : null;
        })() : xn(o, performance.now()) : null,
        snapshot: Mt(p.item) ? Ht(yn(p.item.actionGroupId, p.item.layerKind)) : Ot(p.item) ? Ht(en().find((_) => String((_ == null ? void 0 : _.id) || "") === Fe(p.item.rasterObjectId || p.item.id || ""))) : null,
        frameSnapshot: Mt(p.item) ? Ht(Nt(p.item.actionGroupId, p.item.layerKind)) : null
      }, gt(o), C.setPointerCapture(i.pointerId);
      return;
    }
    const v = !!m.selectedId;
    if (v && (ct(), _n()), Vr(), v && je(), Be(), ye(), m.mode === "pano") {
      const b = Ma(i);
      m.interaction = { kind: "view", last: b, lastTs: performance.now() }, Et.startDrag(b.x, b.y, i.pointerId, performance.now()), gt(o), C.setPointerCapture(i.pointerId);
    }
  }, C.onpointermove = (i) => {
    var l, h, p, v, b, _, S, P, M, L, F, U, z, X, Q, he, ne, me, Ce, Ve;
    const o = Ur(i);
    if (ka(o, !0), !m.interaction) {
      gt(o);
      return;
    }
    gt(o);
    const c = m.interaction;
    if (c.kind === "paint_stroke") {
      const Se = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let K = !1;
      Se.forEach((ee) => {
        const be = Ur(ee);
        pp(c, be, performance.now()) && (K = !0);
      }), K && ye({ localOnly: !0 });
      return;
    }
    if (c.kind === "paint_lasso_fill") {
      const Se = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let K = !1;
      if (Se.forEach((ee) => {
        const be = Ur(ee);
        mp(c, be, performance.now()) && (K = !0);
      }), K) {
        const ee = Bn();
        ee && m.paintEngine.updateActiveStroke(c.stroke, ee), ye({ localOnly: !0 });
      }
      return;
    }
    if (c.kind === "view") {
      const Se = performance.now(), K = m.mode === "unwrap" ? o : Ma(i);
      Et.moveDrag(K.x, K.y, m.mode === "unwrap" ? "unwrap" : "pano", Se), c.lastTs = Se, c.last = K, ye({ localOnly: !0 });
      return;
    }
    if (c.kind === "pan_frame") {
      m.frameView.panX += o.x - c.last.x, m.frameView.panY += o.y - c.last.y, c.last = o, ye({ localOnly: !0 });
      return;
    }
    if (c.kind === "move") {
      const Se = o.x - c.offset.x, K = o.y - c.offset.y;
      if (m.mode === "frame" && t === "cutout") {
        const ee = Ge(), be = Vt(ee);
        if (!ee || !be) return;
        const Ne = {
          x: B((Se - be.x) / Math.max(1, be.w), 0, 1),
          y: B((K - be.y) / Math.max(1, be.h), 0, 1)
        }, $e = fs(ee, Ne);
        if (!$e) return;
        const He = Wa($e);
        c.item.yaw_deg = He.yaw, c.item.pitch_deg = He.pitch;
      } else if (m.mode === "unwrap") {
        const ee = rr(), be = B((Se - ee.x) / Math.max(ee.w, 1), 0, 1), Ne = B((K - ee.y) / Math.max(ee.h, 1), 0, 1);
        c.item.yaw_deg = Rt(be * 360 - 180), c.item.pitch_deg = B(90 - Ne * 180, -90, 90);
      } else {
        const ee = ns(Se, K), be = Wa(ee);
        c.item.yaw_deg = be.yaw, c.item.pitch_deg = be.pitch;
      }
      mt(c.item) && Dt(), ye({ localOnly: !0 });
      return;
    }
    if (c.kind === "move_stroke_group") {
      const Se = m.mode === "frame" ? (() => {
        const be = Ge();
        return be ? wn(o, be, performance.now()) : null;
      })() : xn(o, performance.now());
      if (!Se || !c.startUv) return;
      const K = gn(Number(Se.u || 0), Number(c.startUv.u || 0)), ee = Number(Se.v || 0) - Number(c.startUv.v || 0);
      Xc((l = c.item) == null ? void 0 : l.actionGroupId, K, ee, c.snapshot, (h = c.item) == null ? void 0 : h.layerKind, c.frameSnapshot) && (vn({ rebuildPaintEngine: !1 }), ye({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_raster_object") {
      const Se = m.mode === "frame" ? (() => {
        const be = Ge();
        return be ? wn(o, be, performance.now()) : null;
      })() : xn(o, performance.now());
      if (!Se || !c.startUv) return;
      const K = gn(Number(Se.u || 0), Number(c.startUv.u || 0)), ee = Number(Se.v || 0) - Number(c.startUv.v || 0);
      Jc(((p = c.item) == null ? void 0 : p.rasterObjectId) || ((v = c.item) == null ? void 0 : v.id) || "", K, ee, c.snapshot) && (Br(), ye({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_raster_object") {
      const K = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      ph(((b = c.item) == null ? void 0 : b.rasterObjectId) || ((_ = c.item) == null ? void 0 : _.id) || "", K, c.snapshot) && (Br(), ye({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_multi") {
      const Se = o.x - Number(((S = c.offset) == null ? void 0 : S.x) || 0), K = o.y - Number(((P = c.offset) == null ? void 0 : P.y) || 0);
      let ee = !1, be = !1, Ne = !1;
      const $e = Se - Number(((M = c.startCenter) == null ? void 0 : M.x) || Se), He = K - Number(((L = c.startCenter) == null ? void 0 : L.y) || K);
      for (const Ue of Array.isArray(c.stickerSnapshots) ? c.stickerSnapshots : []) {
        const We = (t === "cutout" ? qo() : ue()).find((qe) => String((qe == null ? void 0 : qe.id) || "") === String(Ue.id || ""));
        if (!We || !mt(We)) continue;
        const Ke = {
          x: Number(((F = Ue.center) == null ? void 0 : F.x) || 0) + $e,
          y: Number(((U = Ue.center) == null ? void 0 : U.y) || 0) + He
        };
        if (m.mode === "frame" && t === "cutout") {
          const qe = Ge(), St = Vt(qe);
          if (!qe || !St) continue;
          const mr = {
            x: B((Ke.x - St.x) / Math.max(1, St.w), 0, 1),
            y: B((Ke.y - St.y) / Math.max(1, St.h), 0, 1)
          }, Zl = fs(qe, mr);
          if (!Zl) continue;
          const Jl = Wa(Zl);
          We.yaw_deg = Jl.yaw, We.pitch_deg = Jl.pitch;
        } else if (m.mode === "unwrap") {
          const qe = rr(), St = B((Ke.x - qe.x) / Math.max(qe.w, 1), 0, 1), mr = B((Ke.y - qe.y) / Math.max(qe.h, 1), 0, 1);
          We.yaw_deg = Rt(St * 360 - 180), We.pitch_deg = B(90 - mr * 180, -90, 90);
        } else {
          const qe = ns(Ke.x, Ke.y), St = Wa(qe);
          We.yaw_deg = St.yaw, We.pitch_deg = St.pitch;
        }
        ee = !0;
      }
      for (const Ue of Array.isArray(c.strokeSnapshots) ? c.strokeSnapshots : []) {
        const We = {
          x: Number(((z = Ue.center) == null ? void 0 : z.x) || 0) + $e,
          y: Number(((X = Ue.center) == null ? void 0 : X.y) || 0) + He
        }, Ke = m.mode === "frame" ? (() => {
          const St = Ge();
          return St ? wn(We, St, performance.now()) : null;
        })() : xn(We, performance.now()), qe = Ue.centerUv || null;
        if (Ke && qe) {
          const St = gn(Number(Ke.u || 0), Number(qe.u || 0)), mr = Number(Ke.v || 0) - Number(qe.v || 0);
          Xc(Ue.id, St, mr, Ue.snapshot, Ue.layerKind, Ue.frameSnapshot) && (ee = !0, be = !0);
        }
      }
      for (const Ue of Array.isArray(c.rasterSnapshots) ? c.rasterSnapshots : []) {
        const We = {
          x: Number(((Q = Ue.center) == null ? void 0 : Q.x) || 0) + $e,
          y: Number(((he = Ue.center) == null ? void 0 : he.y) || 0) + He
        }, Ke = m.mode === "frame" ? (() => {
          const St = Ge();
          return St ? wn(We, St, performance.now()) : null;
        })() : xn(We, performance.now()), qe = Ue.centerUv || null;
        if (Ke && qe) {
          const St = gn(Number(Ke.u || 0), Number(qe.u || 0)), mr = Number(Ke.v || 0) - Number(qe.v || 0);
          Jc(Ue.id, St, mr, Ue.snapshot) && (ee = !0, Ne = !0);
        }
      }
      ee && (be ? vn({ rebuildPaintEngine: !1 }) : Ne ? Br() : Dt(), ye({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_stroke_group") {
      const K = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      Zc((ne = c.item) == null ? void 0 : ne.actionGroupId, K, 0, c.snapshot, (me = c.item) == null ? void 0 : me.layerKind, c.frameSnapshot) && (vn({ rebuildPaintEngine: !1 }), ye({ localOnly: !0 }));
      return;
    }
    if (c.kind === "rotate_stroke_group") {
      let Se = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - Number(c.startAng || 0)) * ur;
      i.shiftKey && (Se = Math.round(Se / 45) * 45), Zc((Ce = c.item) == null ? void 0 : Ce.actionGroupId, 1, Se, c.snapshot, (Ve = c.item) == null ? void 0 : Ve.layerKind, c.frameSnapshot) && (vn({ rebuildPaintEngine: !1 }), ye({ localOnly: !0 }));
      return;
    }
    if (c.kind === "marquee_select") {
      c.current = o, ye({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale") {
      const K = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = B(c.startHFOV * K, 1, 179), c.item.vFOV_deg = B(c.startVFOV * K, 1, 179), c.item.aspect_id = Sr(c.item), mt(c.item) && Dt(), ye({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_x") {
      const K = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = B(c.startHFOV * K, 1, 179), c.item.aspect_id = Sr(c.item), mt(c.item) && Dt(), ye({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_y") {
      const K = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.vFOV_deg = B(c.startVFOV * K, 1, 179), c.item.aspect_id = Sr(c.item), mt(c.item) && Dt(), ye({ localOnly: !0 });
      return;
    }
    if (c.kind === "rotate") {
      let K = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - c.startAng) * ur, ee = c.startRot - K;
      i.shiftKey && (ee = Math.round(ee / 45) * 45);
      const be = mt(c.item) ? "rot_deg" : "roll_deg";
      c.item[be] = ee, mt(c.item) && Dt(), ye({ localOnly: !0 });
    }
  }, C.onpointerup = () => {
    var o, c, l, h, p, v;
    const i = m.interaction;
    if (((o = m.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = m.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill")
      if (yi(), bp(m.interaction)) {
        vn();
        const b = String(((l = m.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (b) {
          const S = de().find((P) => String((P == null ? void 0 : P.actionGroupId) || "") === b);
          S && (S.frame = null);
        }
        const _ = Bn();
        _ && (String(((h = m.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (m.paintEngine.cancelActiveStroke(_), xl()) : m.paintEngine.commitActiveStroke(m.interaction.stroke, _)), ct(), _n(), je(), Be(), e.setDirtyCanvas(!0, !0), ye();
      } else {
        const b = Bn();
        b && m.paintEngine.cancelActiveStroke(b);
      }
    else if (((p = m.interaction) == null ? void 0 : p.kind) === "marquee_select") {
      const b = Fl(m.interaction.start, m.interaction.current), S = [
        ...t === "cutout" ? us().filter((P) => !cn(P)) : [...ue()],
        ...fh(),
        ...dh()
      ].filter((P) => _p(b, It(P)));
      vh(S, ((v = S[S.length - 1]) == null ? void 0 : v.id) || null), t === "cutout" && S.length && (m.cutoutAspectOpen = !1), je(), Be(), ye();
    } else if (m.interaction && m.interaction.kind !== "view" && m.interaction.kind !== "pan_frame") {
      let b = !1;
      (m.interaction.kind === "move_stroke_group" || m.interaction.kind === "scale_stroke_group" || m.interaction.kind === "rotate_stroke_group") && (b = !0), (m.interaction.kind === "move_raster_object" || m.interaction.kind === "scale_raster_object") && (b = !0), m.interaction.kind === "move_multi" && Array.isArray(m.interaction.strokeSnapshots) && m.interaction.strokeSnapshots.length && (b = !0), m.interaction.kind === "move_multi" && Array.isArray(m.interaction.rasterSnapshots) && m.interaction.rasterSnapshots.length && (b = !0), b && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(m.interaction.kind) || m.interaction.kind === "move_multi" && Array.isArray(m.interaction.strokeSnapshots) && m.interaction.strokeSnapshots.length ? vn({ rebuildPaintEngine: !0 }) : Br()), ct(), _n(), e.setDirtyCanvas(!0, !0), ms(), m.hqFrames = 1, Be(), ye();
    }
    m.interaction = null, yi(), i && i.kind === "view" && Et.endDrag(performance.now()), da(), Be(), gt(m.pointerPos), ye();
  }, C.onpointercancel = () => {
    var i, o, c;
    if (((i = m.interaction) == null ? void 0 : i.kind) === "view" && Et.endDrag(performance.now()), ((o = m.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = m.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
      yi();
      const l = Bn();
      l && m.paintEngine.cancelActiveStroke(l);
    }
    m.interaction = null, yi(), da(), gt(m.pointerPos), ye({ localOnly: !0 });
  }, C.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, C.onmousemove = (i) => {
    const o = Ur(i);
    ka(o, !0), !m.interaction && gt(o);
  }, C.onmouseleave = () => {
    ka(m.pointerPos, !1), gt(m.pointerPos);
  }, C.onwheel = (i) => {
    if (m.mode === "frame") {
      const o = Ur(i), c = i.deltaY < 0 ? 1.1 : 1 / 1.1;
      cp(o, c) && ye({ localOnly: !0 }), i.preventDefault();
      return;
    }
    m.mode === "pano" && (Et.applyWheelEvent(i) && ye({ localOnly: !0 }), i.preventDefault());
  }, C.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), Y(!0));
  }, C.ondrop = (i) => {
    var l;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), W.depth = 0, Y(!1);
    const c = Array.from(((l = i.dataTransfer) == null ? void 0 : l.files) || []).find((h) => Sa(h));
    c && Pl(c);
  };
  const Vl = (i) => {
    t !== "stickers" && t !== "cutout" || r || Z(i) && (W.depth += 1, Y(!0), i.preventDefault());
  }, Hl = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!W.active && Z(i) && Y(!0), W.active && i.preventDefault());
  }, zl = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !W.active) return;
    W.depth = Math.max(0, W.depth - 1);
    const o = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (W.depth === 0 || o) && Y(!1);
  }, jl = (i) => {
    t !== "stickers" && t !== "cutout" || r || (W.depth = 0, Y(!1), Z(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", Vl, !0), window.addEventListener("dragover", Hl, !0), window.addEventListener("dragleave", zl, !0), window.addEventListener("drop", jl, !0);
  function vs() {
    const { canUndo: i, canRedo: o } = kl();
    Ai(D.toolButtons, "value", "undo", { disabled: !i }), Ai(D.toolButtons, "value", "redo", { disabled: !o });
  }
  const $l = (i, o, c = !1) => {
    var b;
    const l = ot(), h = fa();
    if (!l || h === "stroke") return;
    const p = (((b = D.sidePanel) == null ? void 0 : b.params) || []).find((_) => _.key === i);
    if (!p || p.enabled === !1) return;
    let v = Number(o);
    Number.isNaN(v) && (v = 0), v = B(v, Number(p.min), Number(p.max)), i === "yaw_deg" && (v = Rt(v)), l[i] = v, t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (l.aspect_id = Sr(l)), je(), ye(), c && ct();
  };
  xe == null || xe.addEventListener("click", async (i) => {
    var l, h, p, v, b, _, S, P, M;
    const o = i.target.closest("[data-action]");
    if (!o) return;
    const c = String(o.getAttribute("data-action") || "");
    if (c === "coverage-set") {
      const L = Lt(o.getAttribute("data-coverage"));
      if (L === Lt(d.coverage)) return;
      d.coverage = L, m.coverage = L, g && (g.value = String(L)), s ? I.backgroundDirty = !0 : (_n(), sp({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), je(), Be(), ye();
      return;
    }
    if (c === "toggle-selection-picker") {
      if ((h = (l = D.sidePanel) == null ? void 0 : l.selectionPicker) != null && h.disabled) return;
      D.sidePanel.selectionPicker.open = !D.sidePanel.selectionPicker.open;
      return;
    }
    if (c === "select-picker-item") {
      D.sidePanel.selectionPicker.open = !1;
      const L = String(o.getAttribute("data-selection-id") || "");
      let F = null;
      L && (t === "stickers" ? F = ue().find((U) => String((U == null ? void 0 : U.id) || "") === L) || null : F = ((p = Qc().find((U) => {
        var z;
        return String(((z = U == null ? void 0 : U.item) == null ? void 0 : z.id) || "") === L;
      })) == null ? void 0 : p.item) || null), gr(F || null), F && !Mt(F) && pe(
        Rt(Number(F.yaw_deg || 0)),
        B(Number(F.pitch_deg || 0), -89.9, 89.9),
        m.viewFov
      ), je(), Be(), ye();
      return;
    }
    if (c === "copy-state-inline") {
      const L = ot(), F = fa();
      if (!L || F === "stroke" || bn().length > 1) return;
      const U = JSON.stringify(t === "cutout" && F !== "image" ? al(L) : Dh(L));
      try {
        await navigator.clipboard.writeText(U), (v = D.sidePanel) != null && v.copyStateButton && (D.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var z;
          (z = D.sidePanel) != null && z.copyStateButton && (D.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (c === "toggle-visibility") {
      const L = String(o.getAttribute("data-visibility") || "");
      L === "panorama" ? m.showPanorama = !m.showPanorama : L === "objects" ? m.showObjects = !m.showObjects : L === "mask" && (m.showMask = !m.showMask), je(), ye();
      return;
    }
    if (c === "set-invert-x") {
      d.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", Na(), je(), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0), ye();
      return;
    }
    if (c === "set-invert-y") {
      d.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", Na(), je(), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0), ye();
      return;
    }
    if (c === "toggle-quality-picker") {
      (S = D.sidePanel) != null && S.uiSettings && (D.sidePanel.uiSettings.qualityOpen = !D.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (c === "set-quality") {
      const L = String(o.getAttribute("data-quality") || "balanced");
      d.ui_settings.preview_quality = L === "draft" || L === "high" ? L : "balanced", Na(), je(), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0), ye();
      return;
    }
    if (c === "ui-reset-defaults") {
      d.ui_settings.invert_view_x = !1, d.ui_settings.invert_view_y = !1, d.ui_settings.preview_quality = "balanced", Na(), je(), (M = e.setDirtyCanvas) == null || M.call(e, !0, !0), ye();
      return;
    }
    if (c === "close-preview") {
      Kr();
      return;
    }
    if (c === "cancel-close") {
      Kr();
      return;
    }
    c === "save-close" && (op(), Kr());
  }), xe == null || xe.addEventListener("input", (i) => {
    const o = i.target.closest("[data-action='param-input']");
    o && $l(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), xe == null || xe.addEventListener("change", (i) => {
    const o = i.target.closest("[data-action='param-input']");
    o && $l(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const _s = () => {
    const i = !!m.showGrid;
    Ai(D.floatingButtons, "action", "toggle-grid", {
      icon: i ? Tt.eye : Tt.eye_dashed,
      pressed: i ? "true" : "false",
      label: i ? "Hide Grid" : "Show Grid",
      tip: i ? "Hide grid" : "Show grid"
    });
  };
  _s(), E.addEventListener("click", (i) => {
    var b, _, S, P;
    if ((_ = (b = i.target) == null ? void 0 : b.matches) != null && _.call(b, "[data-confirm-overlay]")) {
      const M = (S = D.confirmDialog) == null ? void 0 : S.resolve;
      D.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, M == null || M(!1);
      return;
    }
    const o = i.target.closest("[data-view]");
    if (o) {
      if (o.disabled) return;
      m.mode = String(o.getAttribute("data-view") || "pano"), t === "cutout" && m.mode === "frame" && ot() && cn(ot()) && (Vr({ preservePanelValues: !0 }), je(), Be()), El(), da(), ye();
      return;
    }
    const c = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (c && !r) {
      if (c.matches("[data-tool-mode]")) {
        const M = String(c.getAttribute("data-tool-mode") || "cursor");
        m.primaryTool = M, (M === "paint" || M === "mask") && Vr({ preservePanelValues: !0 }), tn(), je(), Be(), ye();
        return;
      }
      if (c.matches("[data-tool-ui-action]")) {
        const M = String(c.getAttribute("data-tool-ui-action") || "");
        if ((M === "undo" || M === "redo") && c.disabled) return;
        M === "undo" ? ps(-1) : M === "redo" ? ps(1) : M === "clear" ? Qg() : M === "add" || M === "add-image" ? Kg() : M === "add-or-look" && Xg();
        return;
      }
      if (c.matches("[data-paint-tool]")) {
        m.primaryTool = "paint";
        const M = String(c.getAttribute("data-paint-tool") || "pen");
        m.paintTool = M, Vr({ preservePanelValues: !0 }), nn[M] && (m.activeBrushPresetId = M), tn(), je(), Be(), ye();
        return;
      }
      if (c.matches("[data-mask-tool]")) {
        m.primaryTool = "mask", m.maskTool = String(c.getAttribute("data-mask-tool") || "pen"), Vr({ preservePanelValues: !0 }), tn(), je(), Be(), ye();
        return;
      }
      if (c.matches("[data-paint-layer-clear-current]")) {
        const M = String(c.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        ep(M);
        return;
      }
      if (c.matches("[data-paint-color-swatch]")) {
        const M = co.find((L) => L.id === c.getAttribute("data-paint-color-swatch"));
        if (!M) return;
        m.paintColor = ln(M.color), bt(!0), tn();
        return;
      }
      if (c.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), G && !G.hidden ? bt(!0) : Gt(), tn();
        return;
      }
    }
    const l = String(((P = c == null ? void 0 : c.getAttribute) == null ? void 0 : P.call(c, "data-action")) || "");
    if (!r) {
      if (l === "aspect") {
        m.cutoutAspectOpen = !m.cutoutAspectOpen, m.menuSize.measured = !1, Be(), ye();
        return;
      }
      if (l === "aspect-set") {
        const M = ot();
        if (!M) return;
        const L = String(c.getAttribute("data-aspect") || "1:1");
        np(M, L), m.cutoutAspectOpen = !1, m.menuSize.measured = !1, ms(), ct(), yt(), Be(), ye();
        return;
      }
      if (l === "rotate-90") {
        const M = ot();
        if (!M) return;
        rp(M), m.cutoutAspectOpen = !1, m.menuSize.measured = !1, ms(), ct(), yt(), Be(), ye();
        return;
      }
      if (l === "bring-front") {
        ip();
        return;
      }
      if (l === "send-back") {
        ap();
        return;
      }
      if (l === "duplicate") {
        tp();
        return;
      }
      if (l === "replace-image") {
        Yg();
        return;
      }
      if (l === "toggle-lock") {
        bh();
        return;
      }
      if (l === "back-initial") {
        Mh();
        return;
      }
      if (l === "toggle-visible") {
        Nh();
        return;
      }
      if (l === "delete") {
        Il();
        return;
      }
    }
    if (l === "reset-view") {
      pe(0, 0, 100, 180, 680);
      return;
    }
    if (l === "toggle-grid") {
      m.showGrid = !m.showGrid, S_(e == null ? void 0 : e.id, m.showGrid), _s(), ye();
      return;
    }
    if (l === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), Np();
      return;
    }
    if (l === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const M = !m.outputPreviewExpanded;
      m.outputPreviewExpanded = M, m.outputPreviewAnimFrom = m.outputPreviewAnim, m.outputPreviewAnimTo = M ? 1 : 0, m.outputPreviewAnimStartTs = performance.now(), Wl(), ye();
      return;
    }
    const h = i.target.closest("[data-paint-history-index]");
    if (!h) return;
    const p = Number(h.getAttribute("data-paint-history-index")), v = m.customPaintHistory[p];
    v && (m.customPaintColor = ln(v), m.paintColor = ln(v), tn());
  }), E.addEventListener("input", (i) => {
    const o = i.target.closest("[data-paint-size-slider]");
    if (o) {
      if (o.disabled) return;
      const l = Math.max(1, Math.min(120, Math.round(Number(o.value)))), h = ar(m.primaryTool === "paint" ? m.paintTool : m.maskTool);
      m.brushSizes[h] = l, tn(), dp();
      return;
    }
    const c = i.target.closest("[data-paint-alpha-slider]");
    if (c) {
      const l = { ...m.customPaintColor, a: B(Number(c.value) / 100, 0, 1) };
      m.customPaintColor = ln(l), m.paintColor = ln(l), tn();
    }
  }), E.addEventListener("change", (i) => {
    i.target.closest("[data-paint-size-slider]") && Pa();
  }), E.addEventListener("pointerup", (i) => {
    i.target.closest("[data-paint-size-slider]") && Pa();
  }), E.addEventListener("pointercancel", (i) => {
    i.target.closest("[data-paint-size-slider]") && Pa();
  }), E.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && Pa();
  }), E.addEventListener("pointerover", (i) => {
    const o = i.target.closest("[data-tip]");
    !o || !E.contains(o) || j.target !== o && (j.target = o, j.timer && clearTimeout(j.timer), j.timer = window.setTimeout(() => {
      j.target === o && xp(o);
    }, 220));
  }), E.addEventListener("pointerout", (i) => {
    var l, h;
    const o = i.target.closest("[data-tip]");
    !o || j.target !== o || (i.relatedTarget instanceof Element ? (h = (l = i.relatedTarget).closest) == null ? void 0 : h.call(l, "[data-tip]") : null) === o || Ca();
  }), E.addEventListener("pointerdown", () => {
    Ca();
  });
  const wp = (i, o) => {
    var b;
    if (!fe) return;
    const c = fe.getBoundingClientRect(), l = B((i - c.left) / Math.max(1, c.width), 0, 1), h = 1 - B((o - c.top) / Math.max(1, c.height), 0, 1), p = Ws(m.customPaintColor), v = { ...Ks(p.h, l, h), a: Number(((b = m.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    m.customPaintColor = ln(v), m.paintColor = ln(v), tn();
  }, Sp = (i) => {
    var p;
    if (!Te) return;
    const o = Te.getBoundingClientRect(), c = B((i - o.left) / Math.max(1, o.width), 0, 1), l = Ws(m.customPaintColor), h = { ...Ks(c, l.s, l.v), a: Number(((p = m.customPaintColor) == null ? void 0 : p.a) ?? 1) };
    m.customPaintColor = ln(h), m.paintColor = ln(h), tn();
  }, Bl = (i, o) => {
    const c = i.pointerId;
    o(i);
    const l = (p) => {
      p.pointerId === c && o(p);
    }, h = (p) => {
      p.pointerId === c && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  fe && (fe.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Bl(i, (o) => wp(o.clientX, o.clientY));
  }), Te && (Te.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Bl(i, (o) => Sp(o.clientX));
  }), E.addEventListener("click", (i) => {
    var h;
    const o = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const c = o.getAttribute("data-action") === "confirm-accept", l = (h = D.confirmDialog) == null ? void 0 : h.resolve;
    D.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, l == null || l(c);
  });
  const Ul = () => {
    const i = !!m.fullscreen;
    Ai(D.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Tt.fullscreen_close : Tt.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, Aa = (i) => {
    const o = !!i;
    m.fullscreen !== o && (m.fullscreen = o, E.classList.toggle("pano-modal-fullscreen", o), o ? (m.fullscreenPrevShowGrid = !!m.showGrid, m.showGrid = !1) : m.fullscreenPrevShowGrid !== null && (m.showGrid = !!m.fullscreenPrevShowGrid, m.fullscreenPrevShowGrid = null), _s(), Ul(), ye());
  }, Gl = () => document.fullscreenElement === R, Np = async () => {
    var i, o;
    try {
      if (!document.fullscreenEnabled) {
        Aa(!m.fullscreen);
        return;
      }
      Gl() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((i = R.requestFullscreen) == null ? void 0 : i.call(R));
    } catch {
      Aa(!m.fullscreen);
    }
  }, Kl = () => {
    document.fullscreenEnabled && Aa(Gl());
  };
  document.addEventListener("fullscreenchange", Kl), Ul();
  const Wl = () => {
    const i = !!m.outputPreviewExpanded;
    D.outputPreviewToggle.icon = i ? Tt.fullscreen_close : Tt.fullscreen, D.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", D.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  Wl();
  const xs = e.onExecuted, ws = e.onConnectionsChange;
  let Ss = null, Ns = null, Ms = null;
  !r && t === "stickers" && (Ms = (i = "sync") => {
    ol(i);
  }, e.__panoExternalStickerSync = Ms, Ss = function(...o) {
    var c;
    typeof xs == "function" && xs.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "executed");
  }, e.onExecuted = Ss, Ns = function(...o) {
    var c;
    typeof ws == "function" && ws.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "connections");
  }, e.onConnectionsChange = Ns), r || (mc.set(String(e.id ?? "0"), () => os()), Kh() && os());
  const Kr = () => {
    var i, o, c, l, h, p, v, b, _, S, P;
    mc.delete(String(e.id ?? "0")), r || os(), document.fullscreenElement === R && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Kl), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, (c = (o = e.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || c.call(o), (h = (l = e.graph) == null ? void 0 : l.setDirtyCanvas) == null || h.call(l, !0, !0), (b = (v = (p = un) == null ? void 0 : p.canvas) == null ? void 0 : v.setDirty) == null || b.call(v, !0, !0), Ca(), Gg(), (_ = ce == null ? void 0 : ce.dispose) == null || _.call(ce), (S = ft == null ? void 0 : ft.unmount) == null || S.call(ft), (P = ge == null ? void 0 : ge.dispose) == null || P.call(ge), Y(!1), window.removeEventListener("keydown", Yl, !0), window.removeEventListener("keydown", ql, !0), window.removeEventListener("keydown", Ia, !0), window.removeEventListener("keyup", Ia, !0), window.removeEventListener("keydown", Xl, !0), window.removeEventListener("dragenter", Vl, !0), window.removeEventListener("dragover", Hl, !0), window.removeEventListener("dragleave", zl, !0), window.removeEventListener("drop", jl, !0), !r && t === "stickers" && (e.onExecuted === Ss && (e.onExecuted = xs), e.onConnectionsChange === Ns && (e.onConnectionsChange = ws), e.__panoExternalStickerSync === Ms && (e.__panoExternalStickerSync = null)), H.unmount(), O.remove();
  }, Yl = (i) => {
    var o, c, l, h;
    if (i.key === "Escape") {
      if (m.fullscreen && document.fullscreenElement === R) {
        i.preventDefault(), i.stopPropagation(), (o = i.stopImmediatePropagation) == null || o.call(i), (c = document.exitFullscreen) == null || c.call(document).catch(() => {
        });
        return;
      }
      if (m.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), Aa(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (h = i.stopImmediatePropagation) == null || h.call(i), Kr();
    }
  }, ql = (i) => {
    const o = String(i.key || ""), c = String(i.code || ""), l = Number(i.keyCode || 0);
    if (!(o === "Delete" || c === "Delete" || l === 46) && !(o === "Backspace" || c === "Backspace" || l === 8)) return;
    const v = i.target, b = ((v == null ? void 0 : v.tagName) || "").toUpperCase();
    b === "INPUT" || b === "TEXTAREA" || v != null && v.isContentEditable || !ot() || (Il(), i.preventDefault(), i.stopPropagation());
  }, Ia = (i) => {
    const o = !!(i.ctrlKey || i.metaKey);
    m.marqueeModifier !== o && (m.marqueeModifier = o, gt(m.pointerPos));
  }, Xl = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const o = String(i.key || "").toLowerCase(), c = String(i.code || "");
    if (o !== "z" && c !== "KeyZ") return;
    const l = i.target, h = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: p, canRedo: v } = kl();
    i.shiftKey && !v || !i.shiftKey && !p || (ps(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", Yl, !0), window.addEventListener("keydown", ql, !0), window.addEventListener("keydown", Ia, !0), window.addEventListener("keyup", Ia, !0), window.addEventListener("keydown", Xl, !0), R.addEventListener("pointerdown", (i) => {
    i.target === R && Kr();
  }), Lh(), !r && t === "stickers" && ol("open"), qg(), ct(), vs(), tn(), je(), es(), Ml(), gt(m.pointerPos), ye(), I.rafId = requestAnimationFrame(gs);
}
function vf(e, t, n, r) {
  if (!(e != null && e.prototype)) return;
  const a = (y) => {
    var x, d;
    try {
      (x = y.__panoDomRestore) == null || x.call(y);
    } catch {
    }
    try {
      (d = y.__panoLegacyRestore) == null || d.call(y);
    } catch {
    }
    y.__panoDomPreview = null, y.__panoLegacyPreviewHooked = !1, y.__panoPreviewHooked = !1, y.__panoPreviewAttached = !1, y.__panoPreviewMountKey = null;
  };
  function s(y) {
    var A;
    const x = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === x) return;
    a(y), n === "PanoramaStickers" && I_(y), Yc(y), E_(y, Io);
    const w = pn(y, Io);
    if (w && !w.__panoPreviewPatchedCb) {
      w.__panoPreviewPatchedCb = !0;
      const D = w.callback;
      w.callback = (O) => {
        var R;
        const H = D ? D(O) : void 0;
        return (R = y.setDirtyCanvas) == null || R.call(y, !0, !1), H;
      };
    }
    const N = pn(y, "bg_color");
    if (N && (N.value == null || String(N.value).trim() === "" || String(N.value).toLowerCase() === "#000000") && (N.value = "#00ff00", (A = N.callback) == null || A.call(N, "#00ff00")), n === "PanoramaStickers") {
      yc(y, r, () => Xi(y, "stickers"));
      {
        y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = x;
        return;
      }
    }
    yc(y, r, () => Xi(y, "cutout")), Gy(y, {
      buttonText: r,
      onOpen: () => Xi(y, "cutout")
    }), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = x;
  }
  const u = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const y = u ? u.apply(this, arguments) : void 0;
    return s(this), y;
  };
  const f = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const y = f ? f.apply(this, arguments) : void 0;
    return this.widgets && s(this), y;
  };
  const g = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const y = g ? g.apply(this, arguments) : void 0;
    return this.widgets && s(this), y;
  };
}
function U_(e) {
  if (!(e != null && e.prototype)) return;
  const t = function() {
    (!Array.isArray(this.size) || this.size[0] < 100 || this.size[1] < 100) && (this.size = [360, 260]);
  }, n = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const a = n ? n.apply(this, arguments) : void 0;
    return t.call(this), a;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const a = r ? r.apply(this, arguments) : void 0;
    return t.call(this), a;
  };
}
function G_(e) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const t = () => {
    const r = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), a = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = a, !r && a < 40) {
      requestAnimationFrame(t);
      return;
    }
    Yc(e), yc(e, "Open Preview", () => Xi(e, "stickers", { readOnly: !0, hideSidebar: !1 })), Uy(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (s) => Xi(s, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(t);
}
un.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  async beforeQueuePrompt() {
    const e = [...mc.values()].map((r) => {
      try {
        return typeof r == "function" ? r() : null;
      } catch {
        return null;
      }
    }).filter(Boolean);
    e.length > 0 && await Promise.allSettled(e);
    const t = [...Li.values()];
    t.length > 0 && await Promise.allSettled(t);
    const n = [...Ri.values()];
    n.length > 0 && await Promise.allSettled(n);
  },
  beforeRegisterNodeDef(e, t) {
    const n = String((t == null ? void 0 : t.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && vf(e, t, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && vf(e, t, "PanoramaCutout", "Open Cutout Editor"), lc(n) && U_(e);
  },
  nodeCreated(e) {
    const t = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    Yc(e), lc(t) && G_(e);
  }
});
