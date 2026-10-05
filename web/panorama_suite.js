import * as es from "../../scripts/app.js";
import { app as Xn } from "../../scripts/app.js";
import { api as dn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function su(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Ct = {}, Li = [], fr = () => {
}, dp = () => !1, el = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), tl = (e) => e.startsWith("onUpdate:"), hn = Object.assign, lu = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, zg = Object.prototype.hasOwnProperty, bt = (e, t) => zg.call(e, t), tt = Array.isArray, Vi = (e) => ua(e) === "[object Map]", fp = (e) => ua(e) === "[object Set]", Sd = (e) => ua(e) === "[object Date]", ot = (e) => typeof e == "function", qt = (e) => typeof e == "string", mr = (e) => typeof e == "symbol", Mt = (e) => e !== null && typeof e == "object", pp = (e) => (Mt(e) || ot(e)) && ot(e.then) && ot(e.catch), hp = Object.prototype.toString, ua = (e) => hp.call(e), jg = (e) => ua(e).slice(8, -1), mp = (e) => ua(e) === "[object Object]", cu = (e) => qt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Lo = /* @__PURE__ */ su(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), nl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Hg = /-\w/g, bn = nl(
  (e) => e.replace(Hg, (t) => t.slice(1).toUpperCase())
), Gg = /\B([A-Z])/g, gi = nl(
  (e) => e.replace(Gg, "-$1").toLowerCase()
), rl = nl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ml = nl(
  (e) => e ? `on${rl(e)}` : ""
), ur = (e, t) => !Object.is(e, t), ts = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, gp = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, uu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let wd;
const il = () => wd || (wd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function kt(e) {
  if (tt(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = qt(n) ? Ug(n) : kt(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (qt(e) || Mt(e))
    return e;
}
const Wg = /;(?![^(]*\))/g, Kg = /:([^]+)/, Bg = /\/\*[^]*?\*\//g;
function Ug(e) {
  const t = {};
  return e.replace(Bg, "").split(Wg).forEach((r) => {
    if (r) {
      const n = r.split(Kg);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ut(e) {
  let t = "";
  if (qt(e))
    t = e;
  else if (tt(e))
    for (let r = 0; r < e.length; r++) {
      const n = ut(e[r]);
      n && (t += n + " ");
    }
  else if (Mt(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Yg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", qg = /* @__PURE__ */ su(Yg);
function yp(e) {
  return !!e || e === "";
}
function Xg(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = du(e[n], t[n]);
  return r;
}
function du(e, t) {
  if (e === t) return !0;
  let r = Sd(e), n = Sd(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = mr(e), n = mr(t), r || n)
    return e === t;
  if (r = tt(e), n = tt(t), r || n)
    return r && n ? Xg(e, t) : !1;
  if (r = Mt(e), n = Mt(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const a in e) {
      const s = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (s && !l || !s && l || !du(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const bp = (e) => !!(e && e.__v_isRef === !0), rt = (e) => qt(e) ? e : e == null ? "" : tt(e) || Mt(e) && (e.toString === hp || !ot(e.toString)) ? bp(e) ? rt(e.value) : JSON.stringify(e, vp, 2) : String(e), vp = (e, t) => bp(t) ? vp(e, t.value) : Vi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[Pl(n, o) + " =>"] = i, r),
    {}
  )
} : fp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Pl(r))
} : mr(t) ? Pl(t) : Mt(t) && !tt(t) && !mp(t) ? String(t) : t, Pl = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    mr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let kn;
class Jg {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = kn, !t && kn && (this.index = (kn.scopes || (kn.scopes = [])).push(
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
      const r = kn;
      try {
        return kn = this, t();
      } finally {
        kn = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = kn, kn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (kn = this.prevScope, this.prevScope = void 0);
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
function Zg() {
  return kn;
}
let At;
const Nl = /* @__PURE__ */ new WeakSet();
class _p {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, kn && kn.active && kn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Nl.has(this) && (Nl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, xd(this), xp(this);
    const t = At, r = Jn;
    At = this, Jn = !0;
    try {
      return this.fn();
    } finally {
      kp(this), At = t, Jn = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        hu(t);
      this.deps = this.depsTail = void 0, xd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Nl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    fc(this) && this.run();
  }
  get dirty() {
    return fc(this);
  }
}
let Sp = 0, Vo, Ro;
function wp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ro, Ro = e;
    return;
  }
  e.next = Vo, Vo = e;
}
function fu() {
  Sp++;
}
function pu() {
  if (--Sp > 0)
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
function xp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function kp(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), hu(n), Qg(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function fc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Mp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Mp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Uo) || (e.globalVersion = Uo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !fc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = At, n = Jn;
  At = e, Jn = !0;
  try {
    xp(e);
    const i = e.fn(e._value);
    (t.version === 0 || ur(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    At = r, Jn = n, kp(e), e.flags &= -3;
  }
}
function hu(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      hu(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function Qg(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Jn = !0;
const Pp = [];
function Or() {
  Pp.push(Jn), Jn = !1;
}
function Fr() {
  const e = Pp.pop();
  Jn = e === void 0 ? !0 : e;
}
function xd(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = At;
    At = void 0;
    try {
      t();
    } finally {
      At = r;
    }
  }
}
let Uo = 0;
class e0 {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class mu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!At || !Jn || At === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== At)
      r = this.activeLink = new e0(At, this), At.deps ? (r.prevDep = At.depsTail, At.depsTail.nextDep = r, At.depsTail = r) : At.deps = At.depsTail = r, Np(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = At.depsTail, r.nextDep = void 0, At.depsTail.nextDep = r, At.depsTail = r, At.deps === r && (At.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, Uo++, this.notify(t);
  }
  notify(t) {
    fu();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      pu();
    }
  }
}
function Np(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Np(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const pc = /* @__PURE__ */ new WeakMap(), ai = /* @__PURE__ */ Symbol(
  ""
), hc = /* @__PURE__ */ Symbol(
  ""
), Yo = /* @__PURE__ */ Symbol(
  ""
);
function cn(e, t, r) {
  if (Jn && At) {
    let n = pc.get(e);
    n || pc.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new mu()), i.map = n, i.key = r), i.track();
  }
}
function Mr(e, t, r, n, i, o) {
  const a = pc.get(e);
  if (!a) {
    Uo++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (fu(), t === "clear")
    a.forEach(s);
  else {
    const l = tt(e), c = l && cu(r);
    if (l && r === "length") {
      const u = Number(n);
      a.forEach((d, f) => {
        (f === "length" || f === Yo || !mr(f) && f >= u) && s(d);
      });
    } else
      switch ((r !== void 0 || a.has(void 0)) && s(a.get(r)), c && s(a.get(Yo)), t) {
        case "add":
          l ? c && s(a.get("length")) : (s(a.get(ai)), Vi(e) && s(a.get(hc)));
          break;
        case "delete":
          l || (s(a.get(ai)), Vi(e) && s(a.get(hc)));
          break;
        case "set":
          Vi(e) && s(a.get(ai));
          break;
      }
  }
  pu();
}
function ki(e) {
  const t = /* @__PURE__ */ yt(e);
  return t === e ? t : (cn(t, "iterate", Yo), /* @__PURE__ */ Gn(e) ? t : t.map(tr));
}
function ol(e) {
  return cn(e = /* @__PURE__ */ yt(e), "iterate", Yo), e;
}
function sr(e, t) {
  return /* @__PURE__ */ Tr(e) ? Bi(/* @__PURE__ */ si(e) ? tr(t) : t) : tr(t);
}
const t0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Cl(this, Symbol.iterator, (e) => sr(this, e));
  },
  concat(...e) {
    return ki(this).concat(
      ...e.map((t) => tt(t) ? ki(t) : t)
    );
  },
  entries() {
    return Cl(this, "entries", (e) => (e[1] = sr(this, e[1]), e));
  },
  every(e, t) {
    return vr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return vr(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => sr(this, n)),
      arguments
    );
  },
  find(e, t) {
    return vr(
      this,
      "find",
      e,
      t,
      (r) => sr(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return vr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return vr(
      this,
      "findLast",
      e,
      t,
      (r) => sr(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return vr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return vr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Al(this, "includes", e);
  },
  indexOf(...e) {
    return Al(this, "indexOf", e);
  },
  join(e) {
    return ki(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Al(this, "lastIndexOf", e);
  },
  map(e, t) {
    return vr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return vo(this, "pop");
  },
  push(...e) {
    return vo(this, "push", e);
  },
  reduce(e, ...t) {
    return kd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return kd(this, "reduceRight", e, t);
  },
  shift() {
    return vo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return vr(this, "some", e, t, void 0, arguments);
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
    return Cl(this, "values", (e) => sr(this, e));
  }
};
function Cl(e, t, r) {
  const n = ol(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Gn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const n0 = Array.prototype;
function vr(e, t, r, n, i, o) {
  const a = ol(e), s = a !== e && !/* @__PURE__ */ Gn(e), l = a[t];
  if (l !== n0[t]) {
    const d = l.apply(e, o);
    return s ? tr(d) : d;
  }
  let c = r;
  a !== e && (s ? c = function(d, f) {
    return r.call(this, sr(e, d), f, e);
  } : r.length > 2 && (c = function(d, f) {
    return r.call(this, d, f, e);
  }));
  const u = l.call(a, c, n);
  return s && i ? i(u) : u;
}
function kd(e, t, r, n) {
  const i = ol(e), o = i !== e && !/* @__PURE__ */ Gn(e);
  let a = r, s = !1;
  i !== e && (o ? (s = n.length === 0, a = function(c, u, d) {
    return s && (s = !1, c = sr(e, c)), r.call(this, c, sr(e, u), d, e);
  }) : r.length > 3 && (a = function(c, u, d) {
    return r.call(this, c, u, d, e);
  }));
  const l = i[t](a, ...n);
  return s ? sr(e, l) : l;
}
function Al(e, t, r) {
  const n = /* @__PURE__ */ yt(e);
  cn(n, "iterate", Yo);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ bu(r[0]) ? (r[0] = /* @__PURE__ */ yt(r[0]), n[t](...r)) : i;
}
function vo(e, t, r = []) {
  Or(), fu();
  const n = (/* @__PURE__ */ yt(e))[t].apply(e, r);
  return pu(), Fr(), n;
}
const r0 = /* @__PURE__ */ su("__proto__,__v_isRef,__isVue"), Cp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(mr)
);
function i0(e) {
  mr(e) || (e = String(e));
  const t = /* @__PURE__ */ yt(this);
  return cn(t, "has", e), t.hasOwnProperty(e);
}
class Ap {
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
      return n === (i ? o ? h0 : Fp : o ? Op : Ep).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const a = tt(t);
    if (!i) {
      let l;
      if (a && (l = t0[r]))
        return l;
      if (r === "hasOwnProperty")
        return i0;
    }
    const s = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ pn(t) ? t : n
    );
    if ((mr(r) ? Cp.has(r) : r0(r)) || (i || cn(t, "get", r), o))
      return s;
    if (/* @__PURE__ */ pn(s)) {
      const l = a && cu(r) ? s : s.value;
      return i && Mt(l) ? /* @__PURE__ */ gc(l) : l;
    }
    return Mt(s) ? i ? /* @__PURE__ */ gc(s) : /* @__PURE__ */ Qi(s) : s;
  }
}
class Ip extends Ap {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const a = tt(t) && cu(r);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Tr(o);
      if (!/* @__PURE__ */ Gn(n) && !/* @__PURE__ */ Tr(n) && (o = /* @__PURE__ */ yt(o), n = /* @__PURE__ */ yt(n)), !a && /* @__PURE__ */ pn(o) && !/* @__PURE__ */ pn(n))
        return c || (o.value = n), !0;
    }
    const s = a ? Number(r) < t.length : bt(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ pn(t) ? t : i
    );
    return t === /* @__PURE__ */ yt(i) && (s ? ur(n, o) && Mr(t, "set", r, n) : Mr(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = bt(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Mr(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!mr(r) || !Cp.has(r)) && cn(t, "has", r), n;
  }
  ownKeys(t) {
    return cn(
      t,
      "iterate",
      tt(t) ? "length" : ai
    ), Reflect.ownKeys(t);
  }
}
class o0 extends Ap {
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
const a0 = /* @__PURE__ */ new Ip(), s0 = /* @__PURE__ */ new o0(), l0 = /* @__PURE__ */ new Ip(!0);
const mc = (e) => e, Va = (e) => Reflect.getPrototypeOf(e);
function c0(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ yt(i), a = Vi(o), s = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = i[e](...n), u = r ? mc : t ? Bi : tr;
    return !t && cn(
      o,
      "iterate",
      l ? hc : ai
    ), hn(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: d, done: f } = c.next();
          return f ? { value: d, done: f } : {
            value: s ? [u(d[0]), u(d[1])] : u(d),
            done: f
          };
        }
      }
    );
  };
}
function Ra(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function u0(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ yt(o), s = /* @__PURE__ */ yt(i);
      e || (ur(i, s) && cn(a, "get", i), cn(a, "get", s));
      const { has: l } = Va(a), c = t ? mc : e ? Bi : tr;
      if (l.call(a, i))
        return c(o.get(i));
      if (l.call(a, s))
        return c(o.get(s));
      o !== a && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && cn(/* @__PURE__ */ yt(i), "iterate", ai), i.size;
    },
    has(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ yt(o), s = /* @__PURE__ */ yt(i);
      return e || (ur(i, s) && cn(a, "has", i), cn(a, "has", s)), i === s ? o.has(i) : o.has(i) || o.has(s);
    },
    forEach(i, o) {
      const a = this, s = a.__v_raw, l = /* @__PURE__ */ yt(s), c = t ? mc : e ? Bi : tr;
      return !e && cn(l, "iterate", ai), s.forEach((u, d) => i.call(o, c(u), c(d), a));
    }
  };
  return hn(
    r,
    e ? {
      add: Ra("add"),
      set: Ra("set"),
      delete: Ra("delete"),
      clear: Ra("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ yt(this), a = Va(o), s = /* @__PURE__ */ yt(i), l = !t && !/* @__PURE__ */ Gn(i) && !/* @__PURE__ */ Tr(i) ? s : i;
        return a.has.call(o, l) || ur(i, l) && a.has.call(o, i) || ur(s, l) && a.has.call(o, s) || (o.add(l), Mr(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Gn(o) && !/* @__PURE__ */ Tr(o) && (o = /* @__PURE__ */ yt(o));
        const a = /* @__PURE__ */ yt(this), { has: s, get: l } = Va(a);
        let c = s.call(a, i);
        c || (i = /* @__PURE__ */ yt(i), c = s.call(a, i));
        const u = l.call(a, i);
        return a.set(i, o), c ? ur(o, u) && Mr(a, "set", i, o) : Mr(a, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ yt(this), { has: a, get: s } = Va(o);
        let l = a.call(o, i);
        l || (i = /* @__PURE__ */ yt(i), l = a.call(o, i)), s && s.call(o, i);
        const c = o.delete(i);
        return l && Mr(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ yt(this), o = i.size !== 0, a = i.clear();
        return o && Mr(
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
    r[i] = c0(i, e, t);
  }), r;
}
function gu(e, t) {
  const r = u0(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    bt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const d0 = {
  get: /* @__PURE__ */ gu(!1, !1)
}, f0 = {
  get: /* @__PURE__ */ gu(!1, !0)
}, p0 = {
  get: /* @__PURE__ */ gu(!0, !1)
};
const Ep = /* @__PURE__ */ new WeakMap(), Op = /* @__PURE__ */ new WeakMap(), Fp = /* @__PURE__ */ new WeakMap(), h0 = /* @__PURE__ */ new WeakMap();
function m0(e) {
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
function g0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : m0(jg(e));
}
// @__NO_SIDE_EFFECTS__
function Qi(e) {
  return /* @__PURE__ */ Tr(e) ? e : yu(
    e,
    !1,
    a0,
    d0,
    Ep
  );
}
// @__NO_SIDE_EFFECTS__
function y0(e) {
  return yu(
    e,
    !1,
    l0,
    f0,
    Op
  );
}
// @__NO_SIDE_EFFECTS__
function gc(e) {
  return yu(
    e,
    !0,
    s0,
    p0,
    Fp
  );
}
function yu(e, t, r, n, i) {
  if (!Mt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = g0(e);
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
function si(e) {
  return /* @__PURE__ */ Tr(e) ? /* @__PURE__ */ si(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Tr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Gn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function bu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ yt(t) : e;
}
function b0(e) {
  return !bt(e, "__v_skip") && Object.isExtensible(e) && gp(e, "__v_skip", !0), e;
}
const tr = (e) => Mt(e) ? /* @__PURE__ */ Qi(e) : e, Bi = (e) => Mt(e) ? /* @__PURE__ */ gc(e) : e;
// @__NO_SIDE_EFFECTS__
function pn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  return Tp(e, !1);
}
// @__NO_SIDE_EFFECTS__
function vs(e) {
  return Tp(e, !0);
}
function Tp(e, t) {
  return /* @__PURE__ */ pn(e) ? e : new v0(e, t);
}
class v0 {
  constructor(t, r) {
    this.dep = new mu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ yt(t), this._value = r ? t : tr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Gn(t) || /* @__PURE__ */ Tr(t);
    t = n ? t : /* @__PURE__ */ yt(t), ur(t, r) && (this._rawValue = t, this._value = n ? t : tr(t), this.dep.trigger());
  }
}
function Qe(e) {
  return /* @__PURE__ */ pn(e) ? e.value : e;
}
const _0 = {
  get: (e, t, r) => t === "__v_raw" ? e : Qe(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ pn(i) && !/* @__PURE__ */ pn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Dp(e) {
  return /* @__PURE__ */ si(e) ? e : new Proxy(e, _0);
}
class S0 {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new mu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Uo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    At !== this)
      return wp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Mp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function w0(e, t, r = !1) {
  let n, i;
  return ot(e) ? n = e : (n = e.get, i = e.set), new S0(n, i, r);
}
const $a = {}, _s = /* @__PURE__ */ new WeakMap();
let ti;
function x0(e, t = !1, r = ti) {
  if (r) {
    let n = _s.get(r);
    n || _s.set(r, n = []), n.push(e);
  }
}
function k0(e, t, r = Ct) {
  const { immediate: n, deep: i, once: o, scheduler: a, augmentJob: s, call: l } = r, c = (L) => i ? L : /* @__PURE__ */ Gn(L) || i === !1 || i === 0 ? Pr(L, 1) : Pr(L);
  let u, d, f, h, g = !1, m = !1;
  if (/* @__PURE__ */ pn(e) ? (d = () => e.value, g = /* @__PURE__ */ Gn(e)) : /* @__PURE__ */ si(e) ? (d = () => c(e), g = !0) : tt(e) ? (m = !0, g = e.some((L) => /* @__PURE__ */ si(L) || /* @__PURE__ */ Gn(L)), d = () => e.map((L) => {
    if (/* @__PURE__ */ pn(L))
      return L.value;
    if (/* @__PURE__ */ si(L))
      return c(L);
    if (ot(L))
      return l ? l(L, 2) : L();
  })) : ot(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (f) {
      Or();
      try {
        f();
      } finally {
        Fr();
      }
    }
    const L = ti;
    ti = u;
    try {
      return l ? l(e, 3, [h]) : e(h);
    } finally {
      ti = L;
    }
  } : d = fr, t && i) {
    const L = d, C = i === !0 ? 1 / 0 : i;
    d = () => Pr(L(), C);
  }
  const y = Zg(), F = () => {
    u.stop(), y && y.active && lu(y.effects, u);
  };
  if (o && t) {
    const L = t;
    t = (...C) => {
      L(...C), F();
    };
  }
  let K = m ? new Array(e.length).fill($a) : $a;
  const z = (L) => {
    if (!(!(u.flags & 1) || !u.dirty && !L))
      if (t) {
        const C = u.run();
        if (i || g || (m ? C.some((U, q) => ur(U, K[q])) : ur(C, K))) {
          f && f();
          const U = ti;
          ti = u;
          try {
            const q = [
              C,
              // pass undefined as the old value when it's changed for the first time
              K === $a ? void 0 : m && K[0] === $a ? [] : K,
              h
            ];
            K = C, l ? l(t, 3, q) : (
              // @ts-expect-error
              t(...q)
            );
          } finally {
            ti = U;
          }
        }
      } else
        u.run();
  };
  return s && s(z), u = new _p(d), u.scheduler = a ? () => a(z, !1) : z, h = (L) => x0(L, !1, u), f = u.onStop = () => {
    const L = _s.get(u);
    if (L) {
      if (l)
        l(L, 4);
      else
        for (const C of L) C();
      _s.delete(u);
    }
  }, t ? n ? z(!0) : K = u.run() : a ? a(z.bind(null, !0), !0) : u.run(), F.pause = u.pause.bind(u), F.resume = u.resume.bind(u), F.stop = F, F;
}
function Pr(e, t = 1 / 0, r) {
  if (t <= 0 || !Mt(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ pn(e))
    Pr(e.value, t, r);
  else if (tt(e))
    for (let n = 0; n < e.length; n++)
      Pr(e[n], t, r);
  else if (fp(e) || Vi(e))
    e.forEach((n) => {
      Pr(n, t, r);
    });
  else if (mp(e)) {
    for (const n in e)
      Pr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Pr(e[n], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function da(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    al(i, t, r);
  }
}
function gr(e, t, r, n) {
  if (ot(e)) {
    const i = da(e, t, r, n);
    return i && pp(i) && i.catch((o) => {
      al(o, t, r);
    }), i;
  }
  if (tt(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(gr(e[o], t, r, n));
    return i;
  }
}
function al(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: a } = t && t.appContext.config || Ct;
  if (t) {
    let s = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, l, c) === !1)
            return;
      }
      s = s.parent;
    }
    if (o) {
      Or(), da(o, null, 10, [
        e,
        l,
        c
      ]), Fr();
      return;
    }
  }
  M0(e, r, i, n, a);
}
function M0(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const yn = [];
let ar = -1;
const Ri = [];
let $r = null, Ni = 0;
const Lp = /* @__PURE__ */ Promise.resolve();
let Ss = null;
function sl(e) {
  const t = Ss || Lp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function P0(e) {
  let t = ar + 1, r = yn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = yn[n], o = qo(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function vu(e) {
  if (!(e.flags & 1)) {
    const t = qo(e), r = yn[yn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= qo(r) ? yn.push(e) : yn.splice(P0(t), 0, e), e.flags |= 1, Vp();
  }
}
function Vp() {
  Ss || (Ss = Lp.then($p));
}
function N0(e) {
  tt(e) ? Ri.push(...e) : $r && e.id === -1 ? $r.splice(Ni + 1, 0, e) : e.flags & 1 || (Ri.push(e), e.flags |= 1), Vp();
}
function Md(e, t, r = ar + 1) {
  for (; r < yn.length; r++) {
    const n = yn[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      yn.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Rp(e) {
  if (Ri.length) {
    const t = [...new Set(Ri)].sort(
      (r, n) => qo(r) - qo(n)
    );
    if (Ri.length = 0, $r) {
      $r.push(...t);
      return;
    }
    for ($r = t, Ni = 0; Ni < $r.length; Ni++) {
      const r = $r[Ni];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    $r = null, Ni = 0;
  }
}
const qo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function $p(e) {
  try {
    for (ar = 0; ar < yn.length; ar++) {
      const t = yn[ar];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), da(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ar < yn.length; ar++) {
      const t = yn[ar];
      t && (t.flags &= -2);
    }
    ar = -1, yn.length = 0, Rp(), Ss = null, (yn.length || Ri.length) && $p();
  }
}
let Ln = null, zp = null;
function ws(e) {
  const t = Ln;
  return Ln = e, zp = e && e.type.__scopeId || null, t;
}
function jp(e, t = Ln, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Vd(-1);
    const o = ws(t);
    let a;
    try {
      a = e(...i);
    } finally {
      ws(o), n._d && Vd(1);
    }
    return a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ir(e, t) {
  if (Ln === null)
    return e;
  const r = fl(Ln), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, a, s, l = Ct] = t[i];
    o && (ot(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Pr(a), n.push({
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
function qr(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    o && (s.oldValue = o[a].value);
    let l = s.dir[n];
    l && (Or(), gr(l, r, 8, [
      e.el,
      s,
      e,
      t
    ]), Fr());
  }
}
function C0(e, t) {
  if (un) {
    let r = un.provides;
    const n = un.parent && un.parent.provides;
    n === r && (r = un.provides = Object.create(n)), r[e] = t;
  }
}
function ns(e, t, r = !1) {
  const n = Py();
  if (n || $i) {
    let i = $i ? $i._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && ot(t) ? t.call(n && n.proxy) : t;
  }
}
const A0 = /* @__PURE__ */ Symbol.for("v-scx"), I0 = () => ns(A0);
function li(e, t, r) {
  return Hp(e, t, r);
}
function Hp(e, t, r = Ct) {
  const { immediate: n, deep: i, flush: o, once: a } = r, s = hn({}, r), l = t && n || !t && o !== "post";
  let c;
  if (Jo) {
    if (o === "sync") {
      const h = I0();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {
      };
      return h.stop = fr, h.resume = fr, h.pause = fr, h;
    }
  }
  const u = un;
  s.call = (h, g, m) => gr(h, u, g, m);
  let d = !1;
  o === "post" ? s.scheduler = (h) => {
    xn(h, u && u.suspense);
  } : o !== "sync" && (d = !0, s.scheduler = (h, g) => {
    g ? h() : vu(h);
  }), s.augmentJob = (h) => {
    t && (h.flags |= 4), d && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const f = k0(e, t, s);
  return Jo && (c ? c.push(f) : l && f()), f;
}
function E0(e, t, r) {
  const n = this.proxy, i = qt(e) ? e.includes(".") ? Gp(n, e) : () => n[e] : e.bind(n, n);
  let o;
  ot(t) ? o = t : (o = t.handler, r = t);
  const a = pa(this), s = Hp(i, o.bind(n), r);
  return a(), s;
}
function Gp(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const O0 = /* @__PURE__ */ Symbol("_vte"), F0 = (e) => e.__isTeleport, T0 = /* @__PURE__ */ Symbol("_leaveCb");
function _u(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, _u(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Wp(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Pd(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const xs = /* @__PURE__ */ new WeakMap();
function $o(e, t, r, n, i = !1) {
  if (tt(e)) {
    e.forEach(
      (m, y) => $o(
        m,
        t && (tt(t) ? t[y] : t),
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
  const o = n.shapeFlag & 4 ? fl(n.component) : n.el, a = i ? null : o, { i: s, r: l } = e, c = t && t.r, u = s.refs === Ct ? s.refs = {} : s.refs, d = s.setupState, f = /* @__PURE__ */ yt(d), h = d === Ct ? dp : (m) => Pd(u, m) ? !1 : bt(f, m), g = (m, y) => !(y && Pd(u, y));
  if (c != null && c !== l) {
    if (Nd(t), qt(c))
      u[c] = null, h(c) && (d[c] = null);
    else if (/* @__PURE__ */ pn(c)) {
      const m = t;
      g(c, m.k) && (c.value = null), m.k && (u[m.k] = null);
    }
  }
  if (ot(l))
    da(l, s, 12, [a, u]);
  else {
    const m = qt(l), y = /* @__PURE__ */ pn(l);
    if (m || y) {
      const F = () => {
        if (e.f) {
          const K = m ? h(l) ? d[l] : u[l] : g() || !e.k ? l.value : u[e.k];
          if (i)
            tt(K) && lu(K, o);
          else if (tt(K))
            K.includes(o) || K.push(o);
          else if (m)
            u[l] = [o], h(l) && (d[l] = u[l]);
          else {
            const z = [o];
            g(l, e.k) && (l.value = z), e.k && (u[e.k] = z);
          }
        } else m ? (u[l] = a, h(l) && (d[l] = a)) : y && (g(l, e.k) && (l.value = a), e.k && (u[e.k] = a));
      };
      if (a) {
        const K = () => {
          F(), xs.delete(e);
        };
        K.id = -1, xs.set(e, K), xn(K, r);
      } else
        Nd(e), F();
    }
  }
}
function Nd(e) {
  const t = xs.get(e);
  t && (t.flags |= 8, xs.delete(e));
}
il().requestIdleCallback;
il().cancelIdleCallback;
const zo = (e) => !!e.type.__asyncLoader, Kp = (e) => e.type.__isKeepAlive;
function D0(e, t) {
  Bp(e, "a", t);
}
function L0(e, t) {
  Bp(e, "da", t);
}
function Bp(e, t, r = un) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (ll(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Kp(i.parent.vnode) && V0(n, t, r, i), i = i.parent;
  }
}
function V0(e, t, r, n) {
  const i = ll(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Up(() => {
    lu(n[t], i);
  }, r);
}
function ll(e, t, r = un, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...a) => {
      Or();
      const s = pa(r), l = gr(t, r, e, a);
      return s(), Fr(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Dr = (e) => (t, r = un) => {
  (!Jo || e === "sp") && ll(e, (...n) => t(...n), r);
}, R0 = Dr("bm"), cl = Dr("m"), $0 = Dr(
  "bu"
), z0 = Dr("u"), fa = Dr(
  "bum"
), Up = Dr("um"), j0 = Dr(
  "sp"
), H0 = Dr("rtg"), G0 = Dr("rtc");
function W0(e, t = un) {
  ll("ec", e, t);
}
const K0 = "components", Yp = /* @__PURE__ */ Symbol.for("v-ndc");
function B0(e) {
  return qt(e) ? U0(K0, e, !1) || e : e || Yp;
}
function U0(e, t, r = !0, n = !1) {
  const i = Ln || un;
  if (i) {
    const o = i.type;
    {
      const s = Ey(
        o,
        !1
      );
      if (s && (s === t || s === bn(t) || s === rl(bn(t))))
        return o;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Cd(i[e] || o[e], t) || // global registration
      Cd(i.appContext[e], t)
    );
    return !a && n ? o : a;
  }
}
function Cd(e, t) {
  return e && (e[t] || e[bn(t)] || e[rl(bn(t))]);
}
function St(e, t, r, n) {
  let i;
  const o = r, a = tt(e);
  if (a || qt(e)) {
    const s = a && /* @__PURE__ */ si(e);
    let l = !1, c = !1;
    s && (l = !/* @__PURE__ */ Gn(e), c = /* @__PURE__ */ Tr(e), e = ol(e)), i = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      i[u] = t(
        l ? c ? Bi(tr(e[u])) : tr(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let s = 0; s < e; s++)
      i[s] = t(s + 1, s, void 0, o);
  } else if (Mt(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (s, l) => t(s, l, void 0, o)
      );
    else {
      const s = Object.keys(e);
      i = new Array(s.length);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = s[l];
        i[l] = t(e[u], u, l, o);
      }
    }
  else
    i = [];
  return i;
}
const yc = (e) => e ? mh(e) ? fl(e) : yc(e.parent) : null, jo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ hn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => yc(e.parent),
    $root: (e) => yc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Xp(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      vu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = sl.bind(e.proxy)),
    $watch: (e) => E0.bind(e)
  })
), Il = (e, t) => e !== Ct && !e.__isScriptSetup && bt(e, t), Y0 = {
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
        if (Il(n, t))
          return a[t] = 1, n[t];
        if (i !== Ct && bt(i, t))
          return a[t] = 2, i[t];
        if (bt(o, t))
          return a[t] = 3, o[t];
        if (r !== Ct && bt(r, t))
          return a[t] = 4, r[t];
        bc && (a[t] = 0);
      }
    }
    const c = jo[t];
    let u, d;
    if (c)
      return t === "$attrs" && cn(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = s.__cssModules) && (u = u[t])
    )
      return u;
    if (r !== Ct && bt(r, t))
      return a[t] = 4, r[t];
    if (
      // global properties
      d = l.config.globalProperties, bt(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return Il(i, t) ? (i[t] = r, !0) : n !== Ct && bt(n, t) ? (n[t] = r, !0) : bt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: a }
  }, s) {
    let l;
    return !!(r[s] || e !== Ct && s[0] !== "$" && bt(e, s) || Il(t, s) || bt(o, s) || bt(n, s) || bt(jo, s) || bt(i.config.globalProperties, s) || (l = a.__cssModules) && l[s]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : bt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Ad(e) {
  return tt(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let bc = !0;
function q0(e) {
  const t = Xp(e), r = e.proxy, n = e.ctx;
  bc = !1, t.beforeCreate && Id(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: a,
    watch: s,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: f,
    beforeUpdate: h,
    updated: g,
    activated: m,
    deactivated: y,
    beforeDestroy: F,
    beforeUnmount: K,
    destroyed: z,
    unmounted: L,
    render: C,
    renderTracked: U,
    renderTriggered: q,
    errorCaptured: ce,
    serverPrefetch: $,
    // public API
    expose: me,
    inheritAttrs: P,
    // assets
    components: T,
    directives: ne,
    filters: Z
  } = t;
  if (c && X0(c, n, null), a)
    for (const Y in a) {
      const S = a[Y];
      ot(S) && (n[Y] = S.bind(r));
    }
  if (i) {
    const Y = i.call(r, r);
    Mt(Y) && (e.data = /* @__PURE__ */ Qi(Y));
  }
  if (bc = !0, o)
    for (const Y in o) {
      const S = o[Y], D = ot(S) ? S.bind(r, r) : ot(S.get) ? S.get.bind(r, r) : fr, oe = !ot(S) && ot(S.set) ? S.set.bind(r) : fr, X = st({
        get: D,
        set: oe
      });
      Object.defineProperty(n, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => X.value,
        set: (fe) => X.value = fe
      });
    }
  if (s)
    for (const Y in s)
      qp(s[Y], n, r, Y);
  if (l) {
    const Y = ot(l) ? l.call(r) : l;
    Reflect.ownKeys(Y).forEach((S) => {
      C0(S, Y[S]);
    });
  }
  u && Id(u, e, "c");
  function ae(Y, S) {
    tt(S) ? S.forEach((D) => Y(D.bind(r))) : S && Y(S.bind(r));
  }
  if (ae(R0, d), ae(cl, f), ae($0, h), ae(z0, g), ae(D0, m), ae(L0, y), ae(W0, ce), ae(G0, U), ae(H0, q), ae(fa, K), ae(Up, L), ae(j0, $), tt(me))
    if (me.length) {
      const Y = e.exposed || (e.exposed = {});
      me.forEach((S) => {
        Object.defineProperty(Y, S, {
          get: () => r[S],
          set: (D) => r[S] = D,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === fr && (e.render = C), P != null && (e.inheritAttrs = P), T && (e.components = T), ne && (e.directives = ne), $ && Wp(e);
}
function X0(e, t, r = fr) {
  tt(e) && (e = vc(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Mt(i) ? "default" in i ? o = ns(
      i.from || n,
      i.default,
      !0
    ) : o = ns(i.from || n) : o = ns(i), /* @__PURE__ */ pn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : t[n] = o;
  }
}
function Id(e, t, r) {
  gr(
    tt(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function qp(e, t, r, n) {
  let i = n.includes(".") ? Gp(r, n) : () => r[n];
  if (qt(e)) {
    const o = t[e];
    ot(o) && li(i, o);
  } else if (ot(e))
    li(i, e.bind(r));
  else if (Mt(e))
    if (tt(e))
      e.forEach((o) => qp(o, t, r, n));
    else {
      const o = ot(e.handler) ? e.handler.bind(r) : t[e.handler];
      ot(o) && li(i, o, e);
    }
}
function Xp(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: a }
  } = e.appContext, s = o.get(t);
  let l;
  return s ? l = s : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (c) => ks(l, c, a, !0)
  ), ks(l, t, a)), Mt(t) && o.set(t, l), l;
}
function ks(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && ks(e, o, r, !0), i && i.forEach(
    (a) => ks(e, a, r, !0)
  );
  for (const a in t)
    if (!(n && a === "expose")) {
      const s = J0[a] || r && r[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const J0 = {
  data: Ed,
  props: Od,
  emits: Od,
  // objects
  methods: No,
  computed: No,
  // lifecycle
  beforeCreate: gn,
  created: gn,
  beforeMount: gn,
  mounted: gn,
  beforeUpdate: gn,
  updated: gn,
  beforeDestroy: gn,
  beforeUnmount: gn,
  destroyed: gn,
  unmounted: gn,
  activated: gn,
  deactivated: gn,
  errorCaptured: gn,
  serverPrefetch: gn,
  // assets
  components: No,
  directives: No,
  // watch
  watch: Q0,
  // provide / inject
  provide: Ed,
  inject: Z0
};
function Ed(e, t) {
  return t ? e ? function() {
    return hn(
      ot(e) ? e.call(this, this) : e,
      ot(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Z0(e, t) {
  return No(vc(e), vc(t));
}
function vc(e) {
  if (tt(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function gn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function No(e, t) {
  return e ? hn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Od(e, t) {
  return e ? tt(e) && tt(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : hn(
    /* @__PURE__ */ Object.create(null),
    Ad(e),
    Ad(t ?? {})
  ) : t;
}
function Q0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = hn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = gn(e[n], t[n]);
  return r;
}
function Jp() {
  return {
    app: null,
    config: {
      isNativeTag: dp,
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
let ey = 0;
function ty(e, t) {
  return function(n, i = null) {
    ot(n) || (n = hn({}, n)), i != null && !Mt(i) && (i = null);
    const o = Jp(), a = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const c = o.app = {
      _uid: ey++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Fy,
      get config() {
        return o.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return a.has(u) || (u && ot(u.install) ? (a.add(u), u.install(c, ...d)) : ot(u) && (a.add(u), u(c, ...d))), c;
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), c;
      },
      component(u, d) {
        return d ? (o.components[u] = d, c) : o.components[u];
      },
      directive(u, d) {
        return d ? (o.directives[u] = d, c) : o.directives[u];
      },
      mount(u, d, f) {
        if (!l) {
          const h = c._ceVNode || Ke(n, i);
          return h.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(h, u, f), l = !0, c._container = u, u.__vue_app__ = c, fl(h.component);
        }
      },
      onUnmount(u) {
        s.push(u);
      },
      unmount() {
        l && (gr(
          s,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return o.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = $i;
        $i = c;
        try {
          return u();
        } finally {
          $i = d;
        }
      }
    };
    return c;
  };
}
let $i = null;
const ny = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${bn(t)}Modifiers`] || e[`${gi(t)}Modifiers`];
function ry(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ct;
  let i = r;
  const o = t.startsWith("update:"), a = o && ny(n, t.slice(7));
  a && (a.trim && (i = r.map((u) => qt(u) ? u.trim() : u)), a.number && (i = r.map(uu)));
  let s, l = n[s = Ml(t)] || // also try camelCase event handler (#2249)
  n[s = Ml(bn(t))];
  !l && o && (l = n[s = Ml(gi(t))]), l && gr(
    l,
    e,
    6,
    i
  );
  const c = n[s + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, gr(
      c,
      e,
      6,
      i
    );
  }
}
const iy = /* @__PURE__ */ new WeakMap();
function Zp(e, t, r = !1) {
  const n = r ? iy : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let a = {}, s = !1;
  if (!ot(e)) {
    const l = (c) => {
      const u = Zp(c, t, !0);
      u && (s = !0, hn(a, u));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !s ? (Mt(e) && n.set(e, null), null) : (tt(o) ? o.forEach((l) => a[l] = null) : hn(a, o), Mt(e) && n.set(e, a), a);
}
function ul(e, t) {
  return !e || !el(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), bt(e, t[0].toLowerCase() + t.slice(1)) || bt(e, gi(t)) || bt(e, t));
}
function Fd(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: a,
    attrs: s,
    emit: l,
    render: c,
    renderCache: u,
    props: d,
    data: f,
    setupState: h,
    ctx: g,
    inheritAttrs: m
  } = e, y = ws(e);
  let F, K;
  try {
    if (r.shapeFlag & 4) {
      const L = i || n, C = L;
      F = lr(
        c.call(
          C,
          L,
          u,
          d,
          h,
          f,
          g
        )
      ), K = s;
    } else {
      const L = t;
      F = lr(
        L.length > 1 ? L(
          d,
          { attrs: s, slots: a, emit: l }
        ) : L(
          d,
          null
        )
      ), K = t.props ? s : oy(s);
    }
  } catch (L) {
    Ho.length = 0, al(L, e, 1), F = Ke(Hr);
  }
  let z = F;
  if (K && m !== !1) {
    const L = Object.keys(K), { shapeFlag: C } = z;
    L.length && C & 7 && (o && L.some(tl) && (K = ay(
      K,
      o
    )), z = Ui(z, K, !1, !0));
  }
  return r.dirs && (z = Ui(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(r.dirs) : r.dirs), r.transition && _u(z, r.transition), F = z, ws(y), F;
}
const oy = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || el(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, ay = (e, t) => {
  const r = {};
  for (const n in e)
    (!tl(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function sy(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: a, children: s, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Td(n, a, c) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (Qp(a, n, f) && !ul(c, f))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : n === a ? !1 : n ? a ? Td(n, a, c) : !0 : !!a;
  return !1;
}
function Td(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (Qp(t, e, o) && !ul(r, o))
      return !0;
  }
  return !1;
}
function Qp(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Mt(n) && Mt(i) ? !du(n, i) : n !== i;
}
function ly({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const eh = {}, th = () => Object.create(eh), nh = (e) => Object.getPrototypeOf(e) === eh;
function cy(e, t, r, n = !1) {
  const i = {}, o = th();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), rh(e, t, i, o);
  for (const a in e.propsOptions[0])
    a in i || (i[a] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ y0(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function uy(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: a }
  } = e, s = /* @__PURE__ */ yt(i), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let f = u[d];
        if (ul(e.emitsOptions, f))
          continue;
        const h = t[f];
        if (l)
          if (bt(o, f))
            h !== o[f] && (o[f] = h, c = !0);
          else {
            const g = bn(f);
            i[g] = _c(
              l,
              s,
              g,
              h,
              e,
              !1
            );
          }
        else
          h !== o[f] && (o[f] = h, c = !0);
      }
    }
  } else {
    rh(e, t, i, o) && (c = !0);
    let u;
    for (const d in s)
      (!t || // for camelCase
      !bt(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = gi(d)) === d || !bt(t, u))) && (l ? r && // for camelCase
      (r[d] !== void 0 || // for kebab-case
      r[u] !== void 0) && (i[d] = _c(
        l,
        s,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (o !== s)
      for (const d in o)
        (!t || !bt(t, d)) && (delete o[d], c = !0);
  }
  c && Mr(e.attrs, "set", "");
}
function rh(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let l in t) {
      if (Lo(l))
        continue;
      const c = t[l];
      let u;
      i && bt(i, u = bn(l)) ? !o || !o.includes(u) ? r[u] = c : (s || (s = {}))[u] = c : ul(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, a = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ yt(r), c = s || Ct;
    for (let u = 0; u < o.length; u++) {
      const d = o[u];
      r[d] = _c(
        i,
        l,
        d,
        c[d],
        e,
        !bt(c, d)
      );
    }
  }
  return a;
}
function _c(e, t, r, n, i, o) {
  const a = e[r];
  if (a != null) {
    const s = bt(a, "default");
    if (s && n === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && ot(l)) {
        const { propsDefaults: c } = i;
        if (r in c)
          n = c[r];
        else {
          const u = pa(i);
          n = c[r] = l.call(
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
    ] && (n === "" || n === gi(r)) && (n = !0));
  }
  return n;
}
const dy = /* @__PURE__ */ new WeakMap();
function ih(e, t, r = !1) {
  const n = r ? dy : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, a = {}, s = [];
  let l = !1;
  if (!ot(e)) {
    const u = (d) => {
      l = !0;
      const [f, h] = ih(d, t, !0);
      hn(a, f), h && s.push(...h);
    };
    !r && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l)
    return Mt(e) && n.set(e, Li), Li;
  if (tt(o))
    for (let u = 0; u < o.length; u++) {
      const d = bn(o[u]);
      Dd(d) && (a[d] = Ct);
    }
  else if (o)
    for (const u in o) {
      const d = bn(u);
      if (Dd(d)) {
        const f = o[u], h = a[d] = tt(f) || ot(f) ? { type: f } : hn({}, f), g = h.type;
        let m = !1, y = !0;
        if (tt(g))
          for (let F = 0; F < g.length; ++F) {
            const K = g[F], z = ot(K) && K.name;
            if (z === "Boolean") {
              m = !0;
              break;
            } else z === "String" && (y = !1);
          }
        else
          m = ot(g) && g.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = m, h[
          1
          /* shouldCastTrue */
        ] = y, (m || bt(h, "default")) && s.push(d);
      }
    }
  const c = [a, s];
  return Mt(e) && n.set(e, c), c;
}
function Dd(e) {
  return e[0] !== "$" && !Lo(e);
}
const Su = (e) => e === "_" || e === "_ctx" || e === "$stable", wu = (e) => tt(e) ? e.map(lr) : [lr(e)], fy = (e, t, r) => {
  if (t._n)
    return t;
  const n = jp((...i) => wu(t(...i)), r);
  return n._c = !1, n;
}, oh = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (Su(i)) continue;
    const o = e[i];
    if (ot(o))
      t[i] = fy(i, o, n);
    else if (o != null) {
      const a = wu(o);
      t[i] = () => a;
    }
  }
}, ah = (e, t) => {
  const r = wu(t);
  e.slots.default = () => r;
}, sh = (e, t, r) => {
  for (const n in t)
    (r || !Su(n)) && (e[n] = t[n]);
}, py = (e, t, r) => {
  const n = e.slots = th();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (sh(n, t, r), r && gp(n, "_", i, !0)) : oh(t, n);
  } else t && ah(e, t);
}, hy = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, a = Ct;
  if (n.shapeFlag & 32) {
    const s = t._;
    s ? r && s === 1 ? o = !1 : sh(i, t, r) : (o = !t.$stable, oh(t, i)), a = t;
  } else t && (ah(e, t), a = { default: 1 });
  if (o)
    for (const s in i)
      !Su(s) && a[s] == null && delete i[s];
}, xn = vy;
function my(e) {
  return gy(e);
}
function gy(e, t) {
  const r = il();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: a,
    createText: s,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: d,
    nextSibling: f,
    setScopeId: h = fr,
    insertStaticContent: g
  } = e, m = (_, w, H, G = null, v = null, x = null, V = void 0, k = null, M = !!w.dynamicChildren) => {
    if (_ === w)
      return;
    _ && !_o(_, w) && (G = ie(_), fe(_, v, x, !0), _ = null), w.patchFlag === -2 && (M = !1, w.dynamicChildren = null);
    const { type: A, ref: B, shapeFlag: te } = w;
    switch (A) {
      case dl:
        y(_, w, H, G);
        break;
      case Hr:
        F(_, w, H, G);
        break;
      case Ol:
        _ == null && K(w, H, G, V);
        break;
      case Xe:
        T(
          _,
          w,
          H,
          G,
          v,
          x,
          V,
          k,
          M
        );
        break;
      default:
        te & 1 ? C(
          _,
          w,
          H,
          G,
          v,
          x,
          V,
          k,
          M
        ) : te & 6 ? ne(
          _,
          w,
          H,
          G,
          v,
          x,
          V,
          k,
          M
        ) : (te & 64 || te & 128) && A.process(
          _,
          w,
          H,
          G,
          v,
          x,
          V,
          k,
          M,
          I
        );
    }
    B != null && v ? $o(B, _ && _.ref, x, w || _, !w) : B == null && _ && _.ref != null && $o(_.ref, null, x, _, !0);
  }, y = (_, w, H, G) => {
    if (_ == null)
      n(
        w.el = s(w.children),
        H,
        G
      );
    else {
      const v = w.el = _.el;
      w.children !== _.children && c(v, w.children);
    }
  }, F = (_, w, H, G) => {
    _ == null ? n(
      w.el = l(w.children || ""),
      H,
      G
    ) : w.el = _.el;
  }, K = (_, w, H, G) => {
    [_.el, _.anchor] = g(
      _.children,
      w,
      H,
      G,
      _.el,
      _.anchor
    );
  }, z = ({ el: _, anchor: w }, H, G) => {
    let v;
    for (; _ && _ !== w; )
      v = f(_), n(_, H, G), _ = v;
    n(w, H, G);
  }, L = ({ el: _, anchor: w }) => {
    let H;
    for (; _ && _ !== w; )
      H = f(_), i(_), _ = H;
    i(w);
  }, C = (_, w, H, G, v, x, V, k, M) => {
    if (w.type === "svg" ? V = "svg" : w.type === "math" && (V = "mathml"), _ == null)
      U(
        w,
        H,
        G,
        v,
        x,
        V,
        k,
        M
      );
    else {
      const A = _.el && _.el._isVueCE ? _.el : null;
      try {
        A && A._beginPatch(), $(
          _,
          w,
          v,
          x,
          V,
          k,
          M
        );
      } finally {
        A && A._endPatch();
      }
    }
  }, U = (_, w, H, G, v, x, V, k) => {
    let M, A;
    const { props: B, shapeFlag: te, transition: ge, dirs: W } = _;
    if (M = _.el = a(
      _.type,
      x,
      B && B.is,
      B
    ), te & 8 ? u(M, _.children) : te & 16 && ce(
      _.children,
      M,
      null,
      G,
      v,
      El(_, x),
      V,
      k
    ), W && qr(_, null, G, "created"), q(M, _, _.scopeId, V, G), B) {
      for (const we in B)
        we !== "value" && !Lo(we) && o(M, we, null, B[we], x, G);
      "value" in B && o(M, "value", null, B.value, x), (A = B.onVnodeBeforeMount) && ir(A, G, _);
    }
    W && qr(_, null, G, "beforeMount");
    const pe = yy(v, ge);
    pe && ge.beforeEnter(M), n(M, w, H), ((A = B && B.onVnodeMounted) || pe || W) && xn(() => {
      try {
        A && ir(A, G, _), pe && ge.enter(M), W && qr(_, null, G, "mounted");
      } finally {
      }
    }, v);
  }, q = (_, w, H, G, v) => {
    if (H && h(_, H), G)
      for (let x = 0; x < G.length; x++)
        h(_, G[x]);
    if (v) {
      let x = v.subTree;
      if (w === x || dh(x.type) && (x.ssContent === w || x.ssFallback === w)) {
        const V = v.vnode;
        q(
          _,
          V,
          V.scopeId,
          V.slotScopeIds,
          v.parent
        );
      }
    }
  }, ce = (_, w, H, G, v, x, V, k, M = 0) => {
    for (let A = M; A < _.length; A++) {
      const B = _[A] = k ? wr(_[A]) : lr(_[A]);
      m(
        null,
        B,
        w,
        H,
        G,
        v,
        x,
        V,
        k
      );
    }
  }, $ = (_, w, H, G, v, x, V) => {
    const k = w.el = _.el;
    let { patchFlag: M, dynamicChildren: A, dirs: B } = w;
    M |= _.patchFlag & 16;
    const te = _.props || Ct, ge = w.props || Ct;
    let W;
    if (H && Xr(H, !1), (W = ge.onVnodeBeforeUpdate) && ir(W, H, w, _), B && qr(w, _, H, "beforeUpdate"), H && Xr(H, !0), (te.innerHTML && ge.innerHTML == null || te.textContent && ge.textContent == null) && u(k, ""), A ? me(
      _.dynamicChildren,
      A,
      k,
      H,
      G,
      El(w, v),
      x
    ) : V || S(
      _,
      w,
      k,
      null,
      H,
      G,
      El(w, v),
      x,
      !1
    ), M > 0) {
      if (M & 16)
        P(k, te, ge, H, v);
      else if (M & 2 && te.class !== ge.class && o(k, "class", null, ge.class, v), M & 4 && o(k, "style", te.style, ge.style, v), M & 8) {
        const pe = w.dynamicProps;
        for (let we = 0; we < pe.length; we++) {
          const Pe = pe[we], ue = te[Pe], ve = ge[Pe];
          (ve !== ue || Pe === "value") && o(k, Pe, ue, ve, v, H);
        }
      }
      M & 1 && _.children !== w.children && u(k, w.children);
    } else !V && A == null && P(k, te, ge, H, v);
    ((W = ge.onVnodeUpdated) || B) && xn(() => {
      W && ir(W, H, w, _), B && qr(w, _, H, "updated");
    }, G);
  }, me = (_, w, H, G, v, x, V) => {
    for (let k = 0; k < w.length; k++) {
      const M = _[k], A = w[k], B = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        M.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (M.type === Xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !_o(M, A) || // - In the case of a component, it could contain anything.
        M.shapeFlag & 198) ? d(M.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          H
        )
      );
      m(
        M,
        A,
        B,
        null,
        G,
        v,
        x,
        V,
        !0
      );
    }
  }, P = (_, w, H, G, v) => {
    if (w !== H) {
      if (w !== Ct)
        for (const x in w)
          !Lo(x) && !(x in H) && o(
            _,
            x,
            w[x],
            null,
            v,
            G
          );
      for (const x in H) {
        if (Lo(x)) continue;
        const V = H[x], k = w[x];
        V !== k && x !== "value" && o(_, x, k, V, v, G);
      }
      "value" in H && o(_, "value", w.value, H.value, v);
    }
  }, T = (_, w, H, G, v, x, V, k, M) => {
    const A = w.el = _ ? _.el : s(""), B = w.anchor = _ ? _.anchor : s("");
    let { patchFlag: te, dynamicChildren: ge, slotScopeIds: W } = w;
    W && (k = k ? k.concat(W) : W), _ == null ? (n(A, H, G), n(B, H, G), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      H,
      B,
      v,
      x,
      V,
      k,
      M
    )) : te > 0 && te & 64 && ge && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren && _.dynamicChildren.length === ge.length ? (me(
      _.dynamicChildren,
      ge,
      H,
      v,
      x,
      V,
      k
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || v && w === v.subTree) && lh(
      _,
      w,
      !0
      /* shallow */
    )) : S(
      _,
      w,
      H,
      B,
      v,
      x,
      V,
      k,
      M
    );
  }, ne = (_, w, H, G, v, x, V, k, M) => {
    w.slotScopeIds = k, _ == null ? w.shapeFlag & 512 ? v.ctx.activate(
      w,
      H,
      G,
      V,
      M
    ) : Z(
      w,
      H,
      G,
      v,
      x,
      V,
      M
    ) : le(_, w, M);
  }, Z = (_, w, H, G, v, x, V) => {
    const k = _.component = My(
      _,
      G,
      v
    );
    if (Kp(_) && (k.ctx.renderer = I), Ny(k, !1, V), k.asyncDep) {
      if (v && v.registerDep(k, ae, V), !_.el) {
        const M = k.subTree = Ke(Hr);
        F(null, M, w, H), _.placeholder = M.el;
      }
    } else
      ae(
        k,
        _,
        w,
        H,
        v,
        x,
        V
      );
  }, le = (_, w, H) => {
    const G = w.component = _.component;
    if (sy(_, w, H))
      if (G.asyncDep && !G.asyncResolved) {
        Y(G, w, H);
        return;
      } else
        G.next = w, G.update();
    else
      w.el = _.el, G.vnode = w;
  }, ae = (_, w, H, G, v, x, V) => {
    const k = () => {
      if (_.isMounted) {
        let { next: te, bu: ge, u: W, parent: pe, vnode: we } = _;
        {
          const p = ch(_);
          if (p) {
            te && (te.el = we.el, Y(_, te, V)), p.asyncDep.then(() => {
              xn(() => {
                _.isUnmounted || A();
              }, v);
            });
            return;
          }
        }
        let Pe = te, ue;
        Xr(_, !1), te ? (te.el = we.el, Y(_, te, V)) : te = we, ge && ts(ge), (ue = te.props && te.props.onVnodeBeforeUpdate) && ir(ue, pe, te, we), Xr(_, !0);
        const ve = Fd(_), Ne = _.subTree;
        _.subTree = ve, m(
          Ne,
          ve,
          // parent may have changed if it's in a teleport
          d(Ne.el),
          // anchor may have changed if it's in a fragment
          ie(Ne),
          _,
          v,
          x
        ), te.el = ve.el, Pe === null && ly(_, ve.el), W && xn(W, v), (ue = te.props && te.props.onVnodeUpdated) && xn(
          () => ir(ue, pe, te, we),
          v
        );
      } else {
        let te;
        const { el: ge, props: W } = w, { bm: pe, m: we, parent: Pe, root: ue, type: ve } = _, Ne = zo(w);
        Xr(_, !1), pe && ts(pe), !Ne && (te = W && W.onVnodeBeforeMount) && ir(te, Pe, w), Xr(_, !0);
        {
          ue.ce && ue.ce._hasShadowRoot() && ue.ce._injectChildStyle(
            ve,
            _.parent ? _.parent.type : void 0
          );
          const p = _.subTree = Fd(_);
          m(
            null,
            p,
            H,
            G,
            _,
            v,
            x
          ), w.el = p.el;
        }
        if (we && xn(we, v), !Ne && (te = W && W.onVnodeMounted)) {
          const p = w;
          xn(
            () => ir(te, Pe, p),
            v
          );
        }
        (w.shapeFlag & 256 || Pe && zo(Pe.vnode) && Pe.vnode.shapeFlag & 256) && _.a && xn(_.a, v), _.isMounted = !0, w = H = G = null;
      }
    };
    _.scope.on();
    const M = _.effect = new _p(k);
    _.scope.off();
    const A = _.update = M.run.bind(M), B = _.job = M.runIfDirty.bind(M);
    B.i = _, B.id = _.uid, M.scheduler = () => vu(B), Xr(_, !0), A();
  }, Y = (_, w, H) => {
    w.component = _;
    const G = _.vnode.props;
    _.vnode = w, _.next = null, uy(_, w.props, G, H), hy(_, w.children, H), Or(), Md(_), Fr();
  }, S = (_, w, H, G, v, x, V, k, M = !1) => {
    const A = _ && _.children, B = _ ? _.shapeFlag : 0, te = w.children, { patchFlag: ge, shapeFlag: W } = w;
    if (ge > 0) {
      if (ge & 128) {
        oe(
          A,
          te,
          H,
          G,
          v,
          x,
          V,
          k,
          M
        );
        return;
      } else if (ge & 256) {
        D(
          A,
          te,
          H,
          G,
          v,
          x,
          V,
          k,
          M
        );
        return;
      }
    }
    W & 8 ? (B & 16 && J(A, v, x), te !== A && u(H, te)) : B & 16 ? W & 16 ? oe(
      A,
      te,
      H,
      G,
      v,
      x,
      V,
      k,
      M
    ) : J(A, v, x, !0) : (B & 8 && u(H, ""), W & 16 && ce(
      te,
      H,
      G,
      v,
      x,
      V,
      k,
      M
    ));
  }, D = (_, w, H, G, v, x, V, k, M) => {
    _ = _ || Li, w = w || Li;
    const A = _.length, B = w.length, te = Math.min(A, B);
    let ge;
    for (ge = 0; ge < te; ge++) {
      const W = w[ge] = M ? wr(w[ge]) : lr(w[ge]);
      m(
        _[ge],
        W,
        H,
        null,
        v,
        x,
        V,
        k,
        M
      );
    }
    A > B ? J(
      _,
      v,
      x,
      !0,
      !1,
      te
    ) : ce(
      w,
      H,
      G,
      v,
      x,
      V,
      k,
      M,
      te
    );
  }, oe = (_, w, H, G, v, x, V, k, M) => {
    let A = 0;
    const B = w.length;
    let te = _.length - 1, ge = B - 1;
    for (; A <= te && A <= ge; ) {
      const W = _[A], pe = w[A] = M ? wr(w[A]) : lr(w[A]);
      if (_o(W, pe))
        m(
          W,
          pe,
          H,
          null,
          v,
          x,
          V,
          k,
          M
        );
      else
        break;
      A++;
    }
    for (; A <= te && A <= ge; ) {
      const W = _[te], pe = w[ge] = M ? wr(w[ge]) : lr(w[ge]);
      if (_o(W, pe))
        m(
          W,
          pe,
          H,
          null,
          v,
          x,
          V,
          k,
          M
        );
      else
        break;
      te--, ge--;
    }
    if (A > te) {
      if (A <= ge) {
        const W = ge + 1, pe = W < B ? w[W].el : G;
        for (; A <= ge; )
          m(
            null,
            w[A] = M ? wr(w[A]) : lr(w[A]),
            H,
            pe,
            v,
            x,
            V,
            k,
            M
          ), A++;
      }
    } else if (A > ge)
      for (; A <= te; )
        fe(_[A], v, x, !0), A++;
    else {
      const W = A, pe = A, we = /* @__PURE__ */ new Map();
      for (A = pe; A <= ge; A++) {
        const b = w[A] = M ? wr(w[A]) : lr(w[A]);
        b.key != null && we.set(b.key, A);
      }
      let Pe, ue = 0;
      const ve = ge - pe + 1;
      let Ne = !1, p = 0;
      const j = new Array(ve);
      for (A = 0; A < ve; A++) j[A] = 0;
      for (A = W; A <= te; A++) {
        const b = _[A];
        if (ue >= ve) {
          fe(b, v, x, !0);
          continue;
        }
        let R;
        if (b.key != null)
          R = we.get(b.key);
        else
          for (Pe = pe; Pe <= ge; Pe++)
            if (j[Pe - pe] === 0 && _o(b, w[Pe])) {
              R = Pe;
              break;
            }
        R === void 0 ? fe(b, v, x, !0) : (j[R - pe] = A + 1, R >= p ? p = R : Ne = !0, m(
          b,
          w[R],
          H,
          null,
          v,
          x,
          V,
          k,
          M
        ), ue++);
      }
      const N = Ne ? by(j) : Li;
      for (Pe = N.length - 1, A = ve - 1; A >= 0; A--) {
        const b = pe + A, R = w[b], se = w[b + 1], ye = b + 1 < B ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          se.el || uh(se)
        ) : G;
        j[A] === 0 ? m(
          null,
          R,
          H,
          ye,
          v,
          x,
          V,
          k,
          M
        ) : Ne && (Pe < 0 || A !== N[Pe] ? X(R, H, ye, 2) : Pe--);
      }
    }
  }, X = (_, w, H, G, v = null) => {
    const { el: x, type: V, transition: k, children: M, shapeFlag: A } = _;
    if (A & 6) {
      X(_.component.subTree, w, H, G);
      return;
    }
    if (A & 128) {
      _.suspense.move(w, H, G);
      return;
    }
    if (A & 64) {
      V.move(_, w, H, I);
      return;
    }
    if (V === Xe) {
      n(x, w, H);
      for (let te = 0; te < M.length; te++)
        X(M[te], w, H, G);
      n(_.anchor, w, H);
      return;
    }
    if (V === Ol) {
      z(_, w, H);
      return;
    }
    if (G !== 2 && A & 1 && k)
      if (G === 0)
        k.beforeEnter(x), n(x, w, H), xn(() => k.enter(x), v);
      else {
        const { leave: te, delayLeave: ge, afterLeave: W } = k, pe = () => {
          _.ctx.isUnmounted ? i(x) : n(x, w, H);
        }, we = () => {
          x._isLeaving && x[T0](
            !0
            /* cancelled */
          ), te(x, () => {
            pe(), W && W();
          });
        };
        ge ? ge(x, pe, we) : we();
      }
    else
      n(x, w, H);
  }, fe = (_, w, H, G = !1, v = !1) => {
    const {
      type: x,
      props: V,
      ref: k,
      children: M,
      dynamicChildren: A,
      shapeFlag: B,
      patchFlag: te,
      dirs: ge,
      cacheIndex: W,
      memo: pe
    } = _;
    if (te === -2 && (v = !1), k != null && (Or(), $o(k, null, H, _, !0), Fr()), W != null && (w.renderCache[W] = void 0), B & 256) {
      w.ctx.deactivate(_);
      return;
    }
    const we = B & 1 && ge, Pe = !zo(_);
    let ue;
    if (Pe && (ue = V && V.onVnodeBeforeUnmount) && ir(ue, w, _), B & 6)
      O(_.component, H, G);
    else {
      if (B & 128) {
        _.suspense.unmount(H, G);
        return;
      }
      we && qr(_, null, w, "beforeUnmount"), B & 64 ? _.type.remove(
        _,
        w,
        H,
        I,
        G
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== Xe || te > 0 && te & 64) ? J(
        A,
        w,
        H,
        !1,
        !0
      ) : (x === Xe && te & 384 || !v && B & 16) && J(M, w, H), G && xe(_);
    }
    const ve = pe != null && W == null;
    (Pe && (ue = V && V.onVnodeUnmounted) || we || ve) && xn(() => {
      ue && ir(ue, w, _), we && qr(_, null, w, "unmounted"), ve && (_.el = null);
    }, H);
  }, xe = (_) => {
    const { type: w, el: H, anchor: G, transition: v } = _;
    if (w === Xe) {
      Q(H, G);
      return;
    }
    if (w === Ol) {
      L(_);
      return;
    }
    const x = () => {
      i(H), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (_.shapeFlag & 1 && v && !v.persisted) {
      const { leave: V, delayLeave: k } = v, M = () => V(H, x);
      k ? k(_.el, x, M) : M();
    } else
      x();
  }, Q = (_, w) => {
    let H;
    for (; _ !== w; )
      H = f(_), i(_), _ = H;
    i(w);
  }, O = (_, w, H) => {
    const { bum: G, scope: v, job: x, subTree: V, um: k, m: M, a: A } = _;
    Ld(M), Ld(A), G && ts(G), v.stop(), x && (x.flags |= 8, fe(V, _, w, H)), k && xn(k, w), xn(() => {
      _.isUnmounted = !0;
    }, w);
  }, J = (_, w, H, G = !1, v = !1, x = 0) => {
    for (let V = x; V < _.length; V++)
      fe(_[V], w, H, G, v);
  }, ie = (_) => {
    if (_.shapeFlag & 6)
      return ie(_.component.subTree);
    if (_.shapeFlag & 128)
      return _.suspense.next();
    const w = f(_.anchor || _.el), H = w && w[O0];
    return H ? f(H) : w;
  };
  let Se = !1;
  const _e = (_, w, H) => {
    let G;
    _ == null ? w._vnode && (fe(w._vnode, null, null, !0), G = w._vnode.component) : m(
      w._vnode || null,
      _,
      w,
      null,
      null,
      null,
      H
    ), w._vnode = _, Se || (Se = !0, Md(G), Rp(), Se = !1);
  }, I = {
    p: m,
    um: fe,
    m: X,
    r: xe,
    mt: Z,
    mc: ce,
    pc: S,
    pbc: me,
    n: ie,
    o: e
  };
  return {
    render: _e,
    hydrate: void 0,
    createApp: ty(_e)
  };
}
function El({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Xr({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function yy(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function lh(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (tt(n) && tt(i))
    for (let o = 0; o < n.length; o++) {
      const a = n[o];
      let s = i[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = wr(i[o]), s.el = a.el), !r && s.patchFlag !== -2 && lh(a, s)), s.type === dl && (s.patchFlag === -1 && (s = i[o] = wr(s)), s.el = a.el), s.type === Hr && !s.el && (s.el = a.el);
    }
}
function by(e) {
  const t = e.slice(), r = [0];
  let n, i, o, a, s;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const c = e[n];
    if (c !== 0) {
      if (i = r[r.length - 1], e[i] < c) {
        t[n] = i, r.push(n);
        continue;
      }
      for (o = 0, a = r.length - 1; o < a; )
        s = o + a >> 1, e[r[s]] < c ? o = s + 1 : a = s;
      c < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), r[o] = n);
    }
  }
  for (o = r.length, a = r[o - 1]; o-- > 0; )
    r[o] = a, a = t[a];
  return r;
}
function ch(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ch(t);
}
function Ld(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function uh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? uh(t.subTree) : null;
}
const dh = (e) => e.__isSuspense;
function vy(e, t) {
  t && t.pendingBranch ? tt(e) ? t.effects.push(...e) : t.effects.push(e) : N0(e);
}
const Xe = /* @__PURE__ */ Symbol.for("v-fgt"), dl = /* @__PURE__ */ Symbol.for("v-txt"), Hr = /* @__PURE__ */ Symbol.for("v-cmt"), Ol = /* @__PURE__ */ Symbol.for("v-stc"), Ho = [];
let Vn = null;
function De(e = !1) {
  Ho.push(Vn = e ? null : []);
}
function _y() {
  Ho.pop(), Vn = Ho[Ho.length - 1] || null;
}
let Xo = 1;
function Vd(e, t = !1) {
  Xo += e, e < 0 && Vn && t && (Vn.hasOnce = !0);
}
function fh(e) {
  return e.dynamicChildren = Xo > 0 ? Vn || Li : null, _y(), Xo > 0 && Vn && Vn.push(e), e;
}
function Ve(e, t, r, n, i, o) {
  return fh(
    Ce(
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
function Kn(e, t, r, n, i) {
  return fh(
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
function ph(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function _o(e, t) {
  return e.type === t.type && e.key === t.key;
}
const hh = ({ key: e }) => e ?? null, rs = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? qt(e) || /* @__PURE__ */ pn(e) || ot(e) ? { i: Ln, r: e, k: t, f: !!r } : e : null);
function Ce(e, t = null, r = null, n = 0, i = null, o = e === Xe ? 0 : 1, a = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && hh(t),
    ref: t && rs(t),
    scopeId: zp,
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
    ctx: Ln
  };
  return s ? (xu(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= qt(r) ? 8 : 16), Xo > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Vn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Vn.push(l), l;
}
const Ke = Sy;
function Sy(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === Yp) && (e = Hr), ph(e)) {
    const s = Ui(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && xu(s, r), Xo > 0 && !o && Vn && (s.shapeFlag & 6 ? Vn[Vn.indexOf(e)] = s : Vn.push(s)), s.patchFlag = -2, s;
  }
  if (Oy(e) && (e = e.__vccOpts), t) {
    t = wy(t);
    let { class: s, style: l } = t;
    s && !qt(s) && (t.class = ut(s)), Mt(l) && (/* @__PURE__ */ bu(l) && !tt(l) && (l = hn({}, l)), t.style = kt(l));
  }
  const a = qt(e) ? 1 : dh(e) ? 128 : F0(e) ? 64 : Mt(e) ? 4 : ot(e) ? 2 : 0;
  return Ce(
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
function wy(e) {
  return e ? /* @__PURE__ */ bu(e) || nh(e) ? hn({}, e) : e : null;
}
function Ui(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: a, children: s, transition: l } = e, c = t ? xr(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && hh(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? tt(o) ? o.concat(rs(t)) : [o, rs(t)] : rs(t)
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
    patchFlag: t && e.type !== Xe ? a === -1 ? 16 : a | 16 : a,
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
  return l && n && _u(
    u,
    l.clone(u)
  ), u;
}
function Co(e = " ", t = 0) {
  return Ke(dl, null, e, t);
}
function dt(e = "", t = !1) {
  return t ? (De(), Kn(Hr, null, e)) : Ke(Hr, null, e);
}
function lr(e) {
  return e == null || typeof e == "boolean" ? Ke(Hr) : tt(e) ? Ke(
    Xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ph(e) ? wr(e) : Ke(dl, null, String(e));
}
function wr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ui(e);
}
function xu(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (tt(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), xu(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !nh(t) ? t._ctx = Ln : i === 3 && Ln && (Ln.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ot(t) ? (t = { default: t, _ctx: Ln }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Co(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function xr(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = ut([t.class, n.class]));
      else if (i === "style")
        t.style = kt([t.style, n.style]);
      else if (el(i)) {
        const o = t[i], a = n[i];
        a && o !== a && !(tt(o) && o.includes(a)) ? t[i] = o ? [].concat(o, a) : a : a == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !tl(i) && (t[i] = a);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function ir(e, t, r, n = null) {
  gr(e, t, 7, [
    r,
    n
  ]);
}
const xy = Jp();
let ky = 0;
function My(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || xy, o = {
    uid: ky++,
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
    scope: new Jg(
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
    propsOptions: ih(n, i),
    emitsOptions: Zp(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ct,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Ct,
    data: Ct,
    props: Ct,
    attrs: Ct,
    slots: Ct,
    refs: Ct,
    setupState: Ct,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ry.bind(null, o), e.ce && e.ce(o), o;
}
let un = null;
const Py = () => un || Ln;
let Ms, Sc;
{
  const e = il(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((a) => a(o)) : i[0](o);
    };
  };
  Ms = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => un = r
  ), Sc = t(
    "__VUE_SSR_SETTERS__",
    (r) => Jo = r
  );
}
const pa = (e) => {
  const t = un;
  return Ms(e), e.scope.on(), () => {
    e.scope.off(), Ms(t);
  };
}, Rd = () => {
  un && un.scope.off(), Ms(null);
};
function mh(e) {
  return e.vnode.shapeFlag & 4;
}
let Jo = !1;
function Ny(e, t = !1, r = !1) {
  t && Sc(t);
  const { props: n, children: i } = e.vnode, o = mh(e);
  cy(e, n, o, t), py(e, i, r || t);
  const a = o ? Cy(e, t) : void 0;
  return t && Sc(!1), a;
}
function Cy(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Y0);
  const { setup: n } = r;
  if (n) {
    Or();
    const i = e.setupContext = n.length > 1 ? Iy(e) : null, o = pa(e), a = da(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), s = pp(a);
    if (Fr(), o(), (s || e.sp) && !zo(e) && Wp(e), s) {
      if (a.then(Rd, Rd), t)
        return a.then((l) => {
          $d(e, l);
        }).catch((l) => {
          al(l, e, 0);
        });
      e.asyncDep = a;
    } else
      $d(e, a);
  } else
    gh(e);
}
function $d(e, t, r) {
  ot(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Mt(t) && (e.setupState = Dp(t)), gh(e);
}
function gh(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || fr);
  {
    const i = pa(e);
    Or();
    try {
      q0(e);
    } finally {
      Fr(), i();
    }
  }
}
const Ay = {
  get(e, t) {
    return cn(e, "get", ""), e[t];
  }
};
function Iy(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ay),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function fl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Dp(b0(e.exposed)), {
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
function Ey(e, t = !0) {
  return ot(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Oy(e) {
  return ot(e) && "__vccOpts" in e;
}
const st = (e, t) => /* @__PURE__ */ w0(e, t, Jo), Fy = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let wc;
const zd = typeof window < "u" && window.trustedTypes;
if (zd)
  try {
    wc = /* @__PURE__ */ zd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const yh = wc ? (e) => wc.createHTML(e) : (e) => e, Ty = "http://www.w3.org/2000/svg", Dy = "http://www.w3.org/1998/Math/MathML", Sr = typeof document < "u" ? document : null, jd = Sr && /* @__PURE__ */ Sr.createElement("template"), Ly = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Sr.createElementNS(Ty, e) : t === "mathml" ? Sr.createElementNS(Dy, e) : r ? Sr.createElement(e, { is: r }) : Sr.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Sr.createTextNode(e),
  createComment: (e) => Sr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Sr.querySelector(e),
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
      jd.innerHTML = yh(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const s = jd.content;
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
}, Vy = /* @__PURE__ */ Symbol("_vtc");
function Ry(e, t, r) {
  const n = e[Vy];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Ps = /* @__PURE__ */ Symbol("_vod"), bh = /* @__PURE__ */ Symbol("_vsh"), fi = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[Ps] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : So(e, t);
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
  e.style.display = t ? e[Ps] : "none", e[bh] = !t;
}
const $y = /* @__PURE__ */ Symbol(""), zy = /(?:^|;)\s*display\s*:/;
function jy(e, t, r) {
  const n = e.style, i = qt(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (qt(t))
        for (const a of t.split(";")) {
          const s = a.slice(0, a.indexOf(":")).trim();
          r[s] == null && is(n, s, "");
        }
      else
        for (const a in t)
          r[a] == null && is(n, a, "");
    for (const a in r)
      a === "display" && (o = !0), is(n, a, r[a]);
  } else if (i) {
    if (t !== r) {
      const a = n[$y];
      a && (r += ";" + a), n.cssText = r, o = zy.test(r);
    }
  } else t && e.removeAttribute("style");
  Ps in e && (e[Ps] = o ? n.display : "", e[bh] && (n.display = "none"));
}
const Hd = /\s*!important$/;
function is(e, t, r) {
  if (tt(r))
    r.forEach((n) => is(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = Hy(e, t);
    Hd.test(r) ? e.setProperty(
      gi(n),
      r.replace(Hd, ""),
      "important"
    ) : e[n] = r;
  }
}
const Gd = ["Webkit", "Moz", "ms"], Fl = {};
function Hy(e, t) {
  const r = Fl[t];
  if (r)
    return r;
  let n = bn(t);
  if (n !== "filter" && n in e)
    return Fl[t] = n;
  n = rl(n);
  for (let i = 0; i < Gd.length; i++) {
    const o = Gd[i] + n;
    if (o in e)
      return Fl[t] = o;
  }
  return t;
}
const Wd = "http://www.w3.org/1999/xlink";
function Kd(e, t, r, n, i, o = qg(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Wd, t.slice(6, t.length)) : e.setAttributeNS(Wd, t, r) : r == null || o && !yp(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : mr(r) ? String(r) : r
  );
}
function Bd(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? yh(r) : r);
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
    s === "boolean" ? r = yp(r) : r == null && s === "string" ? (r = "", a = !0) : s === "number" && (r = 0, a = !0);
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
function Gy(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Ud = /* @__PURE__ */ Symbol("_vei");
function Wy(e, t, r, n, i = null) {
  const o = e[Ud] || (e[Ud] = {}), a = o[t];
  if (n && a)
    a.value = n;
  else {
    const [s, l] = Ky(t);
    if (n) {
      const c = o[t] = Yy(
        n,
        i
      );
      Ci(e, s, c, l);
    } else a && (Gy(e, s, a, l), o[t] = void 0);
  }
}
const Yd = /(?:Once|Passive|Capture)$/;
function Ky(e) {
  let t;
  if (Yd.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Yd); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : gi(e.slice(2)), t];
}
let Tl = 0;
const By = /* @__PURE__ */ Promise.resolve(), Uy = () => Tl || (By.then(() => Tl = 0), Tl = Date.now());
function Yy(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    gr(
      qy(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = Uy(), r;
}
function qy(e, t) {
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
const qd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Xy = (e, t, r, n, i, o) => {
  const a = i === "svg";
  t === "class" ? Ry(e, n, a) : t === "style" ? jy(e, r, n) : el(t) ? tl(t) || Wy(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Jy(e, t, n, a)) ? (Bd(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Kd(e, t, n, a, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Zy(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !qt(n))) ? Bd(e, bn(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Kd(e, t, n, a));
};
function Jy(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && qd(t) && ot(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return qd(t) && qt(r) ? !1 : t in e;
}
function Zy(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = bn(t);
  return Array.isArray(r) ? r.some((i) => bn(i) === n) : Object.keys(r).some((i) => bn(i) === n);
}
const Xd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return tt(t) ? (r) => ts(t, r) : t;
};
function Qy(e) {
  e.target.composing = !0;
}
function Jd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Dl = /* @__PURE__ */ Symbol("_assign");
function Zd(e, t, r) {
  return t && (e = e.trim()), r && (e = uu(e)), e;
}
const Qd = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[Dl] = Xd(i);
    const o = n || i.props && i.props.type === "number";
    Ci(e, t ? "change" : "input", (a) => {
      a.target.composing || e[Dl](Zd(e.value, r, o));
    }), (r || o) && Ci(e, "change", () => {
      e.value = Zd(e.value, r, o);
    }), t || (Ci(e, "compositionstart", Qy), Ci(e, "compositionend", Jd), Ci(e, "change", Jd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, a) {
    if (e[Dl] = Xd(a), e.composing) return;
    const s = (o || e.type === "number") && !/^0\d/.test(e.value) ? uu(e.value) : e.value, l = t ?? "";
    if (s === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, eb = ["ctrl", "shift", "alt", "meta"], tb = {
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
  exact: (e, t) => eb.some((r) => e[`${r}Key`] && !t.includes(r))
}, It = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let a = 0; a < t.length; a++) {
      const s = tb[t[a]];
      if (s && s(i, t)) return;
    }
    return e(i, ...o);
  }));
}, nb = /* @__PURE__ */ hn({ patchProp: Xy }, Ly);
let ef;
function rb() {
  return ef || (ef = my(nb));
}
const ku = ((...e) => {
  const t = rb().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = ob(n);
    if (!i) return;
    const o = t._component;
    !ot(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const a = r(i, !1, ib(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, t;
});
function ib(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ob(e) {
  return qt(e) ? document.querySelector(e) : e;
}
const ab = "PanoramaSuite.Debug.Diagnostics", sb = "PanoramaSuite.Debug.ExportDiagnostics", Ll = "pano_suite.diagnostics.v1", tf = "pano_suite.diagnostics.previous.v1", lb = 300, cb = 2e5, ub = 100, db = 20, fb = 1e3, pb = 2, za = 1024 * 1024;
function Vr(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function hb() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function mb() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: hb,
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
function gb(e = {}) {
  const t = { ...mb(), ...e };
  let r = !1, n = !1, i = null, o = null, a = 0, s = null, l = 0, c = 0;
  const u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, h = { created: 0, collected: 0 }, g = t.FinalizationRegistry ? new t.FinalizationRegistry((I) => {
    u.delete(I), f.collected += 1;
  }) : null, m = t.FinalizationRegistry ? new t.FinalizationRegistry((I) => {
    d.delete(I), h.collected += 1;
  }) : null, y = /* @__PURE__ */ new Set(), F = { created: 0, lost: 0, restored: 0, disposed: 0 }, K = [], z = /* @__PURE__ */ new Map();
  let L = { count: 0, maxMs: 0 }, C = /* @__PURE__ */ new Map(), U = { count: 0, maxMs: 0 };
  const q = [];
  function ce(I, re, _ = void 0) {
    K.push(_ === void 0 ? { t: t.clock(), type: I, label: re } : { t: t.clock(), type: I, label: re, detail: _ }), K.length > ub && K.shift();
  }
  function $(I, re, _, w, H) {
    if (!r || !w || !t.WeakRef) return w;
    const G = { ref: new t.WeakRef(w), label: H };
    return I.add(G), re == null || re.register(w, G), _.created += 1, w;
  }
  function me(I, re = "") {
    return $(u, g, f, I, re);
  }
  function P(I, re = "") {
    return $(d, m, h, I, re);
  }
  function T({ label: I = "", width: re, height: _, offscreen: w = !1 } = {}) {
    const H = globalThis.OffscreenCanvas;
    let G;
    return w && typeof H < "u" ? G = new H(re, _) : (G = t.document().createElement("canvas"), re !== void 0 && _ !== void 0 && (G.width = re, G.height = _)), me(G, I);
  }
  function ne(I) {
    I.width = 0, I.height = 0, r && (f.released += 1);
  }
  function Z(I = t.document(), re = "") {
    var _;
    return P(((_ = I == null ? void 0 : I.createElement) == null ? void 0 : _.call(I, "video")) || null, re);
  }
  function le(I, re) {
    if (!r || !I) return () => {
    };
    const _ = { label: re, lost: !1, disposed: !1 };
    y.add(_), F.created += 1, ce("webgl-created", re);
    const w = () => {
      _.disposed || (_.lost = !0, F.lost += 1, ce("webglcontextlost", re));
    }, H = () => {
      _.disposed || (_.lost = !1, F.restored += 1, ce("webglcontextrestored", re));
    };
    return I.addEventListener("webglcontextlost", w), I.addEventListener("webglcontextrestored", H), () => {
      _.disposed || (_.disposed = !0, y.delete(_), F.disposed += 1, ce("webgl-disposed", re));
    };
  }
  function ae(I, re) {
    return z.set(I, re), () => {
      z.get(I) === re && z.delete(I);
    };
  }
  function Y() {
    return r ? t.now() : -1;
  }
  function S(I) {
    if (I < 0 || !r) return;
    const re = t.now() - I;
    L.count += 1, L.maxMs = Math.max(L.maxMs, re);
  }
  function D(I, re) {
    if (re < 0 || !r) return;
    const _ = t.now() - re, w = C.get(I) ?? { count: 0, maxMs: 0 };
    w.count += 1, w.maxMs = Math.max(w.maxMs, _), C.set(I, w);
  }
  function oe() {
    let I = 0, re = 0, _ = 0, w = [0, 0];
    const H = {};
    for (const G of u) {
      const v = G.ref.deref();
      if (!v) continue;
      I += 1;
      const x = v.width * v.height;
      x > 0 && (re += 1), _ += x, x > w[0] * w[1] && (w = [v.width, v.height]);
      const V = H[G.label] ?? (H[G.label] = [0, 0]);
      V[0] += 1, V[1] += x;
    }
    return { ...f, alive: I, sized: re, pixels: _, mb: Vr(_ * 4 / za, 1), largest: w, byLabel: H };
  }
  function X() {
    const I = [];
    let re = 0, _ = 0;
    for (const w of d) {
      const H = w.ref.deref();
      if (!H) continue;
      re += 1;
      const G = !H.paused && !H.ended;
      G && (_ += 1), I.length < db && I.push({
        label: w.label,
        playing: G,
        src: !!(H.currentSrc || H.src),
        size: [H.videoWidth || 0, H.videoHeight || 0],
        ready: H.readyState ?? 0,
        connected: !!H.isConnected
      });
    }
    return { ...h, alive: re, playing: _, list: I };
  }
  function fe() {
    const I = t.now(), re = t.memory(), _ = {
      t: t.clock(),
      heap: re ? { used: Vr(re.usedJSHeapSize / za, 1), total: Vr(re.totalJSHeapSize / za, 1), limit: Vr(re.jsHeapSizeLimit / za, 1) } : null,
      canvas: oe(),
      webgl: { ...F, alive: [...y].filter((w) => !w.lost).length },
      video: X(),
      frame: { count: L.count, maxMs: Vr(L.maxMs), longTasks: U.count, longTaskMaxMs: Vr(U.maxMs) },
      renders: Object.fromEntries([...C].map(([w, H]) => [w, { count: H.count, maxMs: Vr(H.maxMs) }])),
      sources: Object.fromEntries([...z].map(([w, H]) => [w, H()])),
      costMs: Vr(c, 3)
    };
    return L = { count: 0, maxMs: 0 }, C = /* @__PURE__ */ new Map(), U = { count: 0, maxMs: 0 }, q.push({ record: _, text: JSON.stringify(_) }), q.length > lb && q.shift(), l += 1, l % pb === 0 && Q(), c = t.now() - I, _;
  }
  function xe(I = cb) {
    const re = JSON.stringify({ ...o, events: K }).slice(0, -1);
    let _ = I - re.length - 14, w = q.length;
    for (; w > 0 && _ - q[w - 1].text.length - 1 >= 0; )
      w -= 1, _ -= q[w].text.length + 1;
    return `${re},"records":[${q.slice(w).map((H) => H.text).join(",")}]}`;
  }
  function Q() {
    if (!o) return;
    const I = t.storage();
    if (I) {
      o.savedAt = t.clock();
      try {
        I.setItem(Ll, xe());
      } catch {
      }
    }
  }
  function O() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", Q();
  }
  function J() {
    var H;
    if (n) return i;
    n = !0;
    const I = t.storage();
    if (!I) return null;
    let re = null;
    try {
      if (re = I.getItem(Ll), re === null) {
        const G = I.getItem(tf);
        return i = G === null ? null : JSON.parse(G), i;
      }
      I.setItem(tf, re), I.removeItem(Ll), i = JSON.parse(re);
    } catch {
      return i;
    }
    const _ = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], w = _.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${_.length} records kept. Its last records:`,
      JSON.stringify(w)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((H = _.at(-1)) == null ? void 0 : H.t) || 0).toISOString()}; ${_.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(w)
    ), i;
  }
  function ie(I) {
    const re = I === !0;
    if (J(), re !== r) {
      if (r = re, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, q.length = 0, s = t.observeLongTasks((_) => {
          for (const w of _)
            U.count += 1, U.maxMs = Math.max(U.maxMs, w.duration);
        }), t.addUnload(O), a = t.setInterval(fe, fb), Q();
        return;
      }
      t.clearInterval(a), a = 0, s == null || s(), s = null, t.removeUnload(O), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", Q();
    }
  }
  function Se() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...K], records: q.map((I) => I.record) } : null,
      previous: i
    };
  }
  function _e() {
    const I = t.document(), re = new Blob([JSON.stringify(Se(), null, 1)], { type: "application/json" }), _ = URL.createObjectURL(re), w = I.createElement("a");
    w.href = _, w.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, w.click(), setTimeout(() => URL.revokeObjectURL(_), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: T,
    releaseCanvas: ne,
    trackCanvas: me,
    createVideo: Z,
    trackVideo: P,
    watchContext: le,
    addSource: ae,
    frameStart: Y,
    frameEnd: S,
    renderEnd: D,
    sample: fe,
    serialize: xe,
    recoverPrevious: J,
    setEnabled: ie,
    exportData: Se,
    download: _e
  };
}
const Nn = gb(), nn = Nn.createCanvas, Zo = Nn.releaseCanvas, Vl = Nn.trackCanvas, ha = Nn.createVideo, nf = Nn.trackVideo, yb = Nn.addSource, bb = Nn.frameStart, vb = Nn.frameEnd;
function vh(e, t) {
  const r = Nn.watchContext(e.canvas, t), n = Nn.addSource(`three.${t}`, () => e.stats()), i = (o) => (a) => {
    const s = Nn.frameStart(), l = o(a);
    return Nn.renderEnd(t, s), l;
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
const _b = {
  id: ab,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Nn.setEnabled(e === !0)
}, rf = {
  id: sb,
  label: "Export Panorama Suite diagnostics",
  function: () => Nn.download()
};
function Ai(e, t) {
  const r = nn({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function Sb() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function of(e, t = 8) {
  var u;
  const r = (u = e == null ? void 0 : e.getContext) == null ? void 0 : u.call(e, "2d"), n = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!r || n < 1 || i < 1) return null;
  const o = r.getImageData(0, 0, n, i).data;
  let a = n, s = i, l = -1, c = -1;
  for (let d = 0; d < i; d += 1)
    for (let f = 0; f < n; f += 1)
      o[(d * n + f) * 4 + 3] <= t || (f < a && (a = f), d < s && (s = d), f > l && (l = f), d > c && (c = d));
  return l < a || c < s ? null : {
    minX: a,
    minY: s,
    maxX: l,
    maxY: c,
    width: l - a + 1,
    height: c - s + 1,
    aspect: Number(((l - a + 1) / Math.max(1, c - s + 1)).toFixed(4))
  };
}
function Mu(e, t) {
  return nn({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function zr(e, t, r) {
  if (!e) return Ai(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Bt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function sn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let Rl = null, $l = null, af = null, sf = null, Kt = null, wo = null;
function wb() {
  if ($l) return $l;
  const e = 6, t = 17, r = nn({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), $l = r, r;
}
function zl(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  Rl = zr(Rl, r, n);
  const i = Rl;
  Bt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", sf !== i.ctx && (af = i.ctx.createPattern(wb(), "repeat"), sf = i.ctx), i.ctx.fillStyle = af, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function xb(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function kb(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Mb(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Pb(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Lt = /* @__PURE__ */ new Map(), Pu = 128;
function Nb(e, t, r, n, i, o) {
  const a = Math.max(1, Math.round(e)), s = Math.max(0, Math.min(1, t)), l = `${a}:${s.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if (Lt.has(l)) {
    const K = Lt.get(l);
    return Lt.delete(l), Lt.set(l, K), K;
  }
  Lt.size >= Pu && Lt.delete(Lt.keys().next().value);
  const c = a * 2 + 2, u = a + 1, d = Mu(c, c), f = d.getContext("2d"), h = s * a, g = a + 1, m = `rgba(${r},${n},${i},${o})`, y = `rgba(${r},${n},${i},0)`, F = f.createRadialGradient(u, u, h, u, u, g);
  return F.addColorStop(0, m), F.addColorStop(1, y), f.fillStyle = F, f.fillRect(0, 0, c, c), Lt.set(l, d), d;
}
function Cb(e, t, r, n, i, o, a) {
  const { r: s, g: l, b: c, a: u } = n, d = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), h = Math.max(0, i), g = Math.max(0, Math.min(0.99, o)), m = Math.max(0, Math.min(1, a ?? 0)), y = `chisel:${d}:${f}:${r.toFixed(2)}:${s}:${l}:${c}:${u.toFixed(3)}:${h.toFixed(2)}:${g.toFixed(2)}:${m.toFixed(2)}`;
  if (Lt.has(y)) {
    const ce = Lt.get(y);
    return Lt.delete(y), Lt.set(y, ce), ce;
  }
  Lt.size >= Pu && Lt.delete(Lt.keys().next().value);
  const F = Mu(d, f), K = F.getContext("2d"), z = K.createImageData(d, f), L = z.data, C = Math.max(0, e - t), U = Math.max(0, Math.min(1, r)), q = 1 + h;
  for (let ce = 0; ce < f; ce++)
    for (let $ = 0; $ < d; $++) {
      const me = $ + 0.5 - e, P = ce + 0.5 - t, T = Math.max(Math.abs(me) - C, 0), Z = Math.hypot(T, P) / t;
      if (Z >= 1) continue;
      const le = Z <= U ? 1 : Math.max(0, (1 - Z) / Math.max(1e-4, 1 - U)), ae = 1 - Z, Y = 1 + h * (1 - ae) * (1 - ae), S = 1 - g * ae * ae, D = Y * S / q;
      let oe = 1;
      if (m > 0) {
        const xe = Math.floor((P + t) / 1.5), Q = Math.floor((me + e) / 8), O = ci(zi(xe * 41 + 500, Q * 19 + 300));
        oe = 1 - m * 0.42 * O;
      }
      const X = Math.round(255 * Math.min(1, u * le * D * oe));
      if (X <= 0) continue;
      const fe = (ce * d + $) * 4;
      L[fe] = s, L[fe + 1] = l, L[fe + 2] = c, L[fe + 3] = X;
    }
  return K.putImageData(z, 0, 0), Lt.set(y, F), F;
}
function zi(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function ci(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Ab(e, t, r, n, i, o, a) {
  const s = e + 0.5 - r, l = t + 0.5 - n, c = Math.max(0, r - n), u = Math.max(Math.abs(s) - c, 0), d = Math.hypot(u, l) / n;
  if (d >= 1) return 0;
  const f = ci(zi(e * 17 + 3, t * 13 + 7)), h = d + o * 0.22 * (f - 0.5);
  if (h >= 1) return 0;
  const g = h <= i ? 1 : Math.max(0, (1 - h) / Math.max(1e-4, 1 - i)), m = Ib(e, t, s, l, r, n), y = o * 0.55;
  if (m < y) return 0;
  const K = 0.45 + 0.55 * ((m - y) / Math.max(1e-4, 1 - y));
  return Math.round(255 * Math.min(1, a * g * K));
}
function Ib(e, t, r, n, i, o) {
  const a = Math.floor((r + i) / 3), s = Math.floor((n + o) / 2), l = ci(zi(a * 13 + 700, s * 17 + 400)), c = Math.floor((r + i) / 1.5), u = Math.floor((n + o) / 1.5), d = ci(zi(c * 23 + 800, u * 29 + 500)), f = ci(zi(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + d * 0.3 + f * 0.15;
}
function Eb(e, t, r, n, i) {
  const { r: o, g: a, b: s, a: l } = n, c = Math.max(2, Math.ceil(e) * 2), u = Math.max(2, Math.ceil(t) * 2), d = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${u}:${r.toFixed(2)}:${o}:${a}:${s}:${l.toFixed(3)}:${d.toFixed(2)}`;
  if (Lt.has(f)) {
    const K = Lt.get(f);
    return Lt.delete(f), Lt.set(f, K), K;
  }
  Lt.size >= Pu && Lt.delete(Lt.keys().next().value);
  const h = Mu(c, u), g = h.getContext("2d"), m = g.createImageData(c, u), y = m.data, F = Math.max(0, Math.min(1, r));
  for (let K = 0; K < u; K++)
    for (let z = 0; z < c; z++) {
      const L = Ab(z, K, e, t, F, d, l);
      if (L <= 0) continue;
      const C = (K * c + z) * 4;
      y[C] = o, y[C + 1] = a, y[C + 2] = s, y[C + 3] = L;
    }
  return g.putImageData(m, 0, 0), Lt.set(f, h), h;
}
function _h(e, t, r) {
  var m, y;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = Mb(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), a = Ob(t), s = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((m = t == null ? void 0 : t.angle) == null ? void 0 : m.value) ?? 0), c = Pb(t, i), u = String(((y = t == null ? void 0 : t.targetSpace) == null ? void 0 : y.viewMode) || ""), d = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && u !== "unwrap", f = t == null ? void 0 : t.scatter, h = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let g;
  if (n === "chisel") {
    const F = i * s, K = i, z = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), L = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), C = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    g = Cb(F, K, o, a, z, L, C);
  } else if (n === "crayon") {
    const F = i * s, K = i, z = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    g = Eb(F, K, o, a, z);
  } else
    g = Nb(i, o, a.r, a.g, a.b, a.a);
  return { ctx: e, stampTex: g, radiusPx: i, spacingPx: c, desc: r, aspect: s, angle: l, stampKind: n, scatter: h, latitudeCorrection: d };
}
function Ob(e) {
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
function Fb(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function lf(e, t, r, n, i) {
  const o = e.angle, a = e.desc.width;
  function s(c, u) {
    o === 0 ? e.ctx.drawImage(e.stampTex, c - i, u - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(c, u), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  s(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && s(t + a, r), t + l > a && s(t - a, r);
}
function Nu(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: c, count: u } = e.scatter, d = c * e.radiusPx * i, f = zi(t, r);
    for (let h = 0; h < u; h++) {
      const g = ci(f + h * 2) * Math.PI * 2, m = Math.sqrt(ci(f + h * 2 + 1)) * d, y = t + Math.cos(g) * m, F = r + Math.sin(g) * m, K = Math.max(0.5, e.radiusPx * i * 0.48), z = (0.5 - F / Math.max(1, e.desc.height)) * Math.PI, L = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(z)) : 1, C = K * e.aspect * L;
      lf(e, y, F, K, C);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), a = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, s = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(a)) : 1, l = o * e.aspect * s;
  lf(e, t, r, o, l);
}
function cf(e, t, r) {
  const n = kb(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, a = _h(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const s = [];
  for (let f = 0; f < n.length; f++) {
    let h = Number(n[f].u || 0) * i;
    const g = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(h - s[f - 1].x) > i * 0.5 && (h += h < s[f - 1].x ? i : -i), s.push({ x: h, y: g });
  }
  if (Nu(a, s[0].x, s[0].y, 1), s.length === 1) {
    e.restore();
    return;
  }
  let l = s[0], c = s[0], u = s[0], d = 0;
  for (let f = 1; f < s.length; f++) {
    const h = s[f], g = { x: (c.x + h.x) * 0.5, y: (c.y + h.y) * 0.5 };
    f === 1 ? d = Qo(a, u.x, u.y, g.x, g.y, d) : d = Ns(a, l, u, g, h, d), l = c, c = h, u = g;
  }
  s.length === 2 ? Qo(a, u.x, u.y, c.x, c.y, d) : Ns(a, l, u, c, c, d), e.restore();
}
function os(e, t, r) {
  var d;
  const n = Array.isArray((d = t == null ? void 0 : t.geometry) == null ? void 0 : d.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, a = Fb(t), s = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const h = xb(n[f]);
    let g = Number(h.x || 0) * i;
    f > 0 && Math.abs(g - s[f - 1].x) > i * 0.5 && (g += g < s[f - 1].x ? i : -i), s.push({ x: g, y: Number(h.y || 0) * o }), g < l && (l = g), g > c && (c = g);
  }
  function u(f) {
    e.beginPath(), e.moveTo(s[0].x + f, s[0].y);
    for (let h = 1; h < s.length; h++) e.lineTo(s[h].x + f, s[h].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = a, u(0), l < 0 && u(i), c > i && u(-i), e.restore();
}
function ja(e, t, r) {
  var a;
  if (String(((a = t == null ? void 0 : t.geometry) == null ? void 0 : a.geometryKind) || "") === "lasso_fill") {
    os(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? cf(e, t, r) : (wo = zr(wo, r.width, r.height), Bt(wo), cf(wo.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(wo.canvas, 0, 0), e.restore());
}
function Jr(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Qo(e, t, r, n, i, o) {
  const a = n - t, s = i - r, l = Math.hypot(a, s);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const u = c / l;
    Nu(e, t + a * u, r + s * u, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function Ns(e, t, r, n, i, o) {
  const s = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, u = 0, d = s, f = d + l, h = f + c, g = f - d, m = 16;
  let y = o, F = r.x, K = r.y;
  for (let z = 1; z <= m; z++) {
    const L = d + g * z / m, C = ((d - L) * t.x + (L - u) * r.x) / (d - u), U = ((d - L) * t.y + (L - u) * r.y) / (d - u), q = ((f - L) * r.x + (L - d) * n.x) / (f - d), ce = ((f - L) * r.y + (L - d) * n.y) / (f - d), $ = ((h - L) * n.x + (L - f) * i.x) / (h - f), me = ((h - L) * n.y + (L - f) * i.y) / (h - f), P = ((f - L) * C + (L - u) * q) / (f - u), T = ((f - L) * U + (L - u) * ce) / (f - u), ne = ((h - L) * q + (L - d) * $) / (h - d), Z = ((h - L) * ce + (L - d) * me) / (h - d), le = ((f - L) * P + (L - d) * ne) / (f - d), ae = ((f - L) * T + (L - d) * Z) / (f - d);
    y = Qo(e, F, K, le, ae, y), F = le, K = ae;
  }
  return y;
}
function Tb(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, a = o.width, s = r * o.height, l = e.activeStroke;
  let c = t * a;
  if (l && Math.abs(c - l.prev.x) > a * 0.5 && (c += c < l.prev.x ? a : -a), !l) {
    const h = _h(i, n, o), g = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), m = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), y = String((n == null ? void 0 : n.toolKind) || "") === "eraser", F = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", Nu(h, c, s, 1), e.activeStroke = {
      pprev: { x: c, y: s },
      prev: { x: c, y: s },
      lastMidX: c,
      lastMidY: s,
      stampTex: h.stampTex,
      radiusPx: h.radiusPx,
      spacingPx: h.spacingPx,
      aspect: h.aspect,
      angle: h.angle,
      stampKind: h.stampKind,
      scatter: h.scatter,
      latitudeCorrection: h.latitudeCorrection,
      strokeOpacity: g,
      velocityWidthFactor: m,
      distSinceStamp: 0,
      isEraser: y,
      layerKind: F,
      pointCount: 1
    }, sn(e);
    return;
  }
  const u = (l.prev.x + c) * 0.5, d = (l.prev.y + s) * 0.5;
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
  l.pointCount === 1 ? l.distSinceStamp = Qo(f, l.lastMidX, l.lastMidY, u, d, l.distSinceStamp) : l.distSinceStamp = Ns(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: u, y: d },
    { x: c, y: s },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: s }, l.lastMidX = u, l.lastMidY = d, l.pointCount++, sn(e);
}
function pl(e = {}) {
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
  let c = null, u = "", d = null;
  const f = /* @__PURE__ */ new Map();
  let h = null;
  function g(ne) {
    return {
      actionGroupId: ne,
      descriptor: n,
      committedPaint: Ai(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function m(ne) {
    let Z = i.get(ne);
    return Z || (Z = g(ne), i.set(ne, Z)), Z;
  }
  function y(ne) {
    return u === "mask" ? a : c ? m(c) : s;
  }
  function F(ne) {
    var D;
    const Z = !d || d.length !== ne.length || ne.some((oe, X) => oe !== d[X]), le = u === "paint" && ((D = c ? i.get(c) : s) == null ? void 0 : D.activeStroke) || null;
    let ae = a.displayDirty || s.displayDirty || Z;
    for (const oe of ne) {
      const X = i.get(oe);
      if (X != null && X.displayDirty) {
        ae = !0;
        break;
      }
    }
    if (le && (ae = !0), !ae) return;
    a.displayDirty = !1, s.displayDirty = !1;
    for (const oe of ne) {
      const X = i.get(oe);
      X && (X.displayDirty = !1);
    }
    d = [...ne];
    const Y = l.ctx;
    Bt(l);
    const S = !!(le != null && le.isEraser);
    for (const oe of ne) {
      const X = i.get(oe);
      if (!X) continue;
      const xe = c === X.actionGroupId && u === "paint" ? X.activeStroke : null;
      if (S)
        Kt = zr(Kt, t, r), Bt(Kt), Kt.ctx.drawImage(X.committedPaint.canvas, 0, 0), Jr(Kt.ctx, o.canvas), Y.drawImage(Kt.canvas, 0, 0);
      else if (Y.drawImage(X.committedPaint.canvas, 0, 0), xe) {
        const Q = X.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, xe.strokeOpacity ?? 1));
        Y.save(), Y.globalAlpha = Q, Y.drawImage(o.canvas, 0, 0), Y.restore();
      }
    }
  }
  function K(ne) {
    var le, ae, Y, S, D;
    for (const oe of i.values())
      Bt(oe.committedPaint), Bt(oe.currentStroke), oe.activeStroke = null, sn(oe);
    Bt(a.committedMask), Bt(a.currentStroke), a.activeStroke = null, a.painted = !1, f.clear(), sn(a), sn(s), d = null;
    const Z = [
      ...Array.isArray((ae = (le = ne == null ? void 0 : ne.painting) == null ? void 0 : le.paint) == null ? void 0 : ae.strokes) ? ne.painting.paint.strokes : [],
      ...Array.isArray((S = (Y = ne == null ? void 0 : ne.painting) == null ? void 0 : Y.mask) == null ? void 0 : S.strokes) ? ne.painting.mask.strokes : []
    ];
    for (const oe of Z) {
      if (((D = oe == null ? void 0 : oe.targetSpace) == null ? void 0 : D.kind) !== "ERP_GLOBAL") continue;
      const X = String((oe == null ? void 0 : oe.layerKind) || "paint"), xe = String((oe == null ? void 0 : oe.toolKind) || "pen") === "eraser";
      if (X === "mask") {
        const Q = a.descriptor;
        xe ? (Kt = zr(Kt, Q.width, Q.height), Bt(Kt), ja(Kt.ctx, oe, Q), Jr(a.committedMask.ctx, Kt.canvas)) : (ja(a.committedMask.ctx, oe, Q), a.painted = !0);
        continue;
      }
      if (xe) {
        Kt = zr(Kt, n.width, n.height), Bt(Kt), ja(Kt.ctx, oe, n);
        for (const Q of i.values())
          Jr(Q.committedPaint.ctx, Kt.canvas), sn(Q);
      } else {
        const Q = String((oe == null ? void 0 : oe.actionGroupId) || "__default__"), O = m(Q), J = O.descriptor;
        ja(O.committedPaint.ctx, oe, J), sn(O);
      }
    }
    F([...i.keys()]);
  }
  function z(ne, Z) {
    u = String((ne == null ? void 0 : ne.layerKind) || "");
    const le = String((ne == null ? void 0 : ne.toolKind) || "") === "eraser";
    if (u === "mask")
      c = null, Bt(a.currentStroke), a.activeStroke = null, sn(a);
    else {
      const ae = le ? s : m(String((ne == null ? void 0 : ne.actionGroupId) || "__default__"));
      c = le ? "" : String((ne == null ? void 0 : ne.actionGroupId) || "__default__"), Bt(ae.currentStroke), ae.activeStroke = null, sn(ae);
    }
  }
  function L(ne, Z) {
    var X;
    const le = String((ne == null ? void 0 : ne.layerKind) || "paint"), ae = String((ne == null ? void 0 : ne.toolKind) || "") === "eraser", Y = le === "mask" ? a : ae ? s : m(String((ne == null ? void 0 : ne.actionGroupId) || c || "__default__")), S = Y.activeStroke, D = Y.descriptor;
    if (S && S.pointCount > 1) {
      const fe = Y.currentStroke.ctx;
      fe.globalCompositeOperation = "source-over";
      const xe = {
        ctx: fe,
        stampTex: S.stampTex,
        radiusPx: S.radiusPx,
        spacingPx: S.spacingPx,
        desc: D,
        aspect: S.aspect,
        angle: S.angle,
        stampKind: S.stampKind,
        scatter: S.scatter,
        latitudeCorrection: S.latitudeCorrection
      };
      S.pointCount === 2 ? Qo(xe, S.lastMidX, S.lastMidY, S.prev.x, S.prev.y, S.distSinceStamp) : Ns(xe, S.pprev, { x: S.lastMidX, y: S.lastMidY }, S.prev, S.prev, S.distSinceStamp);
    }
    Y.lassoPreviewActive && (Bt(Y.currentStroke), os(Y.currentStroke.ctx, ne, D), Y.lassoPreviewActive = !1);
    const oe = le === "mask" ? a.committedMask : Y.committedPaint;
    if (ae && le === "paint")
      for (const fe of i.values())
        Jr(fe.committedPaint.ctx, Y.currentStroke.canvas), sn(fe);
    else if (ae)
      Jr(oe.ctx, Y.currentStroke.canvas);
    else {
      le === "mask" && (a.painted = !0);
      const fe = Math.max(0, Math.min(1, (S == null ? void 0 : S.strokeOpacity) ?? 1));
      oe.ctx.save(), oe.ctx.globalAlpha = fe, oe.ctx.drawImage(Y.currentStroke.canvas, 0, 0), oe.ctx.restore();
    }
    Sb() && (String((ne == null ? void 0 : ne.toolKind) || ""), String((D == null ? void 0 : D.kind) || ""), Number((D == null ? void 0 : D.width) || 0), Number((D == null ? void 0 : D.height) || 0), String(((X = ne == null ? void 0 : ne.targetSpace) == null ? void 0 : X.viewMode) || ""), Number((ne == null ? void 0 : ne.aspect) ?? 1), of(Y.currentStroke.canvas), of(oe.canvas), void 0), Bt(Y.currentStroke), Y.activeStroke = null, sn(Y), f.clear(), c = null, u = "", F([...i.keys()]);
  }
  function C(ne) {
    if (u === "mask")
      Bt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, sn(a);
    else if (u === "paint" && !c)
      Bt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, sn(s);
    else if (c) {
      const Z = i.get(c);
      Z && (Bt(Z.currentStroke), Z.activeStroke = null, Z.lassoPreviewActive = !1, sn(Z));
    }
    f.clear(), c = null, u = "", F([...i.keys()]);
  }
  function U(ne, Z) {
    var ae;
    if (u = String((ne == null ? void 0 : ne.layerKind) || ""), String(((ae = ne == null ? void 0 : ne.geometry) == null ? void 0 : ae.geometryKind) || "") === "lasso_fill") {
      if (u === "mask")
        Bt(a.currentStroke), os(a.currentStroke.ctx, ne, a.descriptor), a.lassoPreviewActive = !0, sn(a);
      else {
        const Y = String((ne == null ? void 0 : ne.toolKind) || "") === "eraser", S = Y ? s : m(String((ne == null ? void 0 : ne.actionGroupId) || c || "__default__"));
        c = Y ? "" : String((ne == null ? void 0 : ne.actionGroupId) || c || "__default__"), Bt(S.currentStroke), os(S.currentStroke.ctx, ne, S.descriptor), S.lassoPreviewActive = !0, sn(S);
      }
      F([...i.keys()]);
    }
  }
  function q(ne) {
    return F(ne ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: a.committedMask,
      descriptor: n
    };
  }
  function ce(ne) {
    return i.get(String(ne)) ?? null;
  }
  function $() {
    return [...i.keys()];
  }
  function me(ne) {
    var fe;
    const Z = i.get(String(ne));
    if (!Z) return null;
    const le = u === "paint" && c === Z.actionGroupId, ae = u === "paint" && ((fe = c ? i.get(c) : s) == null ? void 0 : fe.activeStroke) || null, Y = !!(ae != null && ae.isEraser), S = le ? Z.activeStroke : null;
    if (!Y && !S) return Z.committedPaint.canvas;
    const D = `${Z.revision}:${s.revision}:${Y}`, oe = f.get(Z.actionGroupId);
    if ((oe == null ? void 0 : oe.key) === D) return oe.surface.canvas;
    const X = zr((oe == null ? void 0 : oe.surface) ?? null, t, r);
    return Bt(X), X.ctx.drawImage(Z.committedPaint.canvas, 0, 0), Y ? Jr(X.ctx, o.canvas) : (X.ctx.save(), X.ctx.globalAlpha = Z.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, S.strokeOpacity ?? 1)), X.ctx.drawImage(o.canvas, 0, 0), X.ctx.restore()), f.set(Z.actionGroupId, { key: D, surface: X }), X.canvas;
  }
  function P() {
    const ne = u === "mask" ? a.activeStroke : null;
    return !a.painted && (!ne || ne.isEraser) ? null : `${a.revision}:${!!ne}`;
  }
  function T() {
    const ne = P();
    if (ne === null)
      return h = null, null;
    if ((h == null ? void 0 : h.key) === ne) return h.surface.canvas;
    const Z = zr((h == null ? void 0 : h.surface) ?? null, t, r);
    Bt(Z);
    const le = u === "mask" ? a.activeStroke : null;
    return le != null && le.isEraser ? (Kt = zr(Kt, t, r), Bt(Kt), Kt.ctx.drawImage(a.committedMask.canvas, 0, 0), Jr(Kt.ctx, o.canvas), zl(Z.ctx, Kt.canvas)) : (zl(Z.ctx, a.committedMask.canvas), le && zl(Z.ctx, o.canvas)), h = { key: ne, surface: Z }, Z.canvas;
  }
  return {
    rebuildCommitted: K,
    beginStroke: z,
    appendStrokePoint: Tb,
    updateActiveStroke: U,
    commitActiveStroke: L,
    cancelActiveStroke: C,
    getErpTarget: q,
    ensureTarget: y,
    getGroupTarget: ce,
    getGroupDisplayCanvas: me,
    getMaskDisplayCanvas: T,
    getMaskDisplayRevision: P,
    getAllGroupIds: $
  };
}
function Ee(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function $t(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Cu(e, t) {
  let r = $t(t) - $t(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const xc = 3;
function xo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Cs(e, t = 0) {
  const r = xo(e == null ? void 0 : e.deltaY);
  if (r != null) return Math.sign(r);
  const n = xo(e == null ? void 0 : e.wheelDeltaY);
  if (n != null) return Math.sign(-n);
  const i = xo(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = xo(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(xo(t) || 0);
}
function Sh(e) {
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
const uf = Math.PI / 180, df = 0.12, Db = xc, Lb = 35, Vb = 140, Ao = 100, Rb = 20, ff = 0.8;
function $b(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Ee(Number(e || Ao), 1, 179) * uf;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / uf;
}
function Au(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Ao })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), a = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), s = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(K, z = null) {
    s && s(K, z);
  }
  function u(K, z, L = null, C = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(K || 0), l.drag.lastY = Number(z || 0), l.drag.lastTs = Number(C || performance.now()), l.drag.pointerId = L, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: L }), !0;
  }
  function d(K, z, L = "pano", C = performance.now()) {
    if (!l.drag.active) return !1;
    const U = Number(C || performance.now()), q = Number(K), ce = Number(z), $ = q - l.drag.lastX, me = ce - l.drag.lastY;
    l.drag.lastX = q, l.drag.lastY = ce, l.drag.lastTs = U;
    const P = n() || { x: 1, y: 1 }, T = Number(P.x || 1), ne = Number(P.y || 1), Z = { ...t() };
    let le = 0, ae = 0;
    if (L === "unwrap") {
      const S = i() || { w: 1, h: 1 }, D = Math.max(1, Number(S.w || 1)), oe = Math.max(1, Number(S.h || 1)), X = $ / D, fe = me / oe;
      le = -X * 360 * T, ae = fe * 180 * ne;
    } else {
      const S = o() || { w: 0, h: 0 }, D = Math.max(1, Number(S.w || 0)), oe = Math.max(1, Number(S.h || 0));
      if (D > 1 && oe > 1) {
        const X = Ee(Number(Z.fov || Ao), 1, 179), fe = Ee($b(X, D, oe), 0.1, 179);
        le = -($ / D) * X * T, ae = me / oe * fe * ne;
      } else
        le = -$ * df * T, ae = me * df * ne;
    }
    Z.yaw = $t(Number(Z.yaw || 0) + le), Z.pitch = Ee(Number(Z.pitch || 0) + ae, -89.9, 89.9), r(Z), l.velHistory.push({ ts: U, yaw: Z.yaw, pitch: Z.pitch });
    let Y = 0;
    for (; Y < l.velHistory.length - 1 && l.velHistory[Y].ts < U - 100; ) Y++;
    return Y > 0 && l.velHistory.splice(0, Y), l.inertia.active = !1, l.inertia.lastTs = U, a(), c("drag", { phase: "move", dx: $, dy: me, dYaw: le, dPitch: ae }), !0;
  }
  function f(K = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const z = Number(K || performance.now());
    l.drag.lastTs = z;
    const L = l.velHistory.filter((U) => z - U.ts <= 80);
    if (L.length >= 2) {
      const U = L[0], q = L.at(-1), ce = Math.max(1e-3, (q.ts - U.ts) / 1e3);
      let $ = q.yaw - U.yaw;
      $ > 180 && ($ -= 360), $ < -180 && ($ += 360), l.inertia.vx = $ / ce, l.inertia.vy = (q.pitch - U.pitch) / ce;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const C = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = C > Rb, l.inertia.lastTs = z, c("drag", { phase: "end", speed: C, inertiaActive: l.inertia.active }), !0;
  }
  function h(K = performance.now()) {
    if (!l.inertia.active) return !1;
    const z = Number(K || performance.now()), L = Math.max(1e-3, (z - (l.inertia.lastTs || z)) / 1e3);
    l.inertia.lastTs = z;
    const C = { ...t() };
    C.yaw = $t(Number(C.yaw || 0) + l.inertia.vx * L), C.pitch = Ee(Number(C.pitch || 0) + l.inertia.vy * L, -89.9, 89.9);
    const U = Math.exp(-5.5 * L);
    return l.inertia.vx *= U, l.inertia.vy *= U, Math.abs(l.inertia.vx) < ff && Math.abs(l.inertia.vy) < ff && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(C), a(), l.inertia.active;
  }
  function g() {
    const K = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], K;
  }
  function m(K) {
    const z = Math.sign(Number(K || 0));
    if (!z) return !1;
    const L = { ...t() }, C = Number(L.fov || Ao);
    return L.fov = Ee(C + z * Db, Lb, Vb), r(L), a(), c("wheel", { deltaSign: z, fovBefore: C, fovAfter: L.fov }), !0;
  }
  function y(K, z = 0) {
    return m(Cs(K, z));
  }
  function F() {
    r({ yaw: 0, pitch: 0, fov: Ao }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, a();
  }
  return {
    state: l,
    startDrag: u,
    moveDrag: d,
    endDrag: f,
    stepInertia: h,
    stopMotion: g,
    applyWheel: m,
    applyWheelEvent: y,
    resetView: F
  };
}
const vt = Math.PI / 180, Zt = 180 / Math.PI;
function Wn(e, t, r) {
  return { x: e, y: t, z: r };
}
function As(e, t) {
  return Wn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Is(e, t) {
  return Wn(e.x * t, e.y * t, e.z * t);
}
function jl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Iu(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Wn(e.x / t, e.y / t, e.z / t);
}
function Pn(e, t) {
  const r = e * vt, n = t * vt, i = Math.cos(n);
  return Wn(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function eo(e, t, r = 0) {
  const n = Number(e || 0) * vt, i = Number(t || 0) * vt, o = r * vt, a = Math.cos(n), s = Math.sin(n), l = Math.cos(i), c = Math.sin(i), u = Math.cos(o), d = Math.sin(o);
  return {
    right: Wn(
      a * u - s * c * d,
      l * d,
      -s * u - a * c * d
    ),
    up: Wn(
      -a * d - s * c * u,
      l * u,
      s * d - a * c * u
    ),
    fwd: Wn(s * l, c, a * l)
  };
}
function Es(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function xt(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function zb() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function jb(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const i = String(n.actionGroupId || n.id || "").trim();
    if (!i || r.has(i)) continue;
    r.add(i);
    const o = xt(n.z_index ?? n.zIndex, t.length);
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
function Hb(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function Gb(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const r = xt(e.t, 0), n = xt(e.widthScale, null), i = xt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = xt(e.u, null), a = xt(e.v, null);
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
    const o = xt(e.u, null), a = xt(e.v, null);
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
function Ha(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = Gb(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function Wb(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const l = Ha(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = Ha(e.points, t, 1);
  if (!o) return null;
  const a = Ha(e.rawPoints, t, 1), s = Ha(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: a || o.map((l) => ({ ...l })),
    processedPoints: s || o.map((l) => ({ ...l }))
  };
}
function Kb(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = Hb(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = Wb(e.geometry, r, n, t === "paint");
  if (!i) return null;
  const o = xt(e.size, null), a = xt(e.opacity, null);
  if (o == null || a == null) return null;
  const s = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!s || !l) return null;
  const c = xt(e.radiusValue, null), u = String(e.radiusModel || "").trim() || null;
  let d = null;
  if (t === "paint") {
    const f = e.color;
    if (!f || typeof f != "object") return null;
    d = {
      r: Math.max(0, Math.min(1, xt(f.r, 0))),
      g: Math.max(0, Math.min(1, xt(f.g, 0))),
      b: Math.max(0, Math.min(1, xt(f.b, 0))),
      a: Math.max(0, Math.min(1, xt(f.a, 1)))
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
    hardness: xt(e.hardness, null),
    flow: xt(e.flow, null),
    spacing: xt(e.spacing, null),
    createdAt: Math.trunc(xt(e.createdAt, 0)),
    color: d,
    radiusModel: u,
    radiusValue: c == null ? null : Math.max(0, c),
    geometry: i
  };
}
function pf(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = Kb(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function Bb(e) {
  if (!e || typeof e != "object") return null;
  const t = xt(e.u0, null), r = xt(e.v0, null), n = xt(e.u1, null), i = xt(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (s) => Math.max(0, Math.min(1, s)), a = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return a.u1 <= a.u0 || a.v1 <= a.v0 ? null : a;
}
function Ub(e) {
  const t = e || {};
  return {
    du: xt(t.du, 0) ?? 0,
    dv: xt(t.dv, 0) ?? 0,
    rot_deg: xt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, xt(t.scale, 1) ?? 1)
  };
}
function Yb(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = Bb(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, xt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: Ub(e.transform)
  } : null;
}
function qb(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = Yb(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function to(e) {
  const t = zb();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: jb(e.groups),
    paint: pf(e.paint, "paint"),
    mask: pf(e.mask, "mask"),
    raster_objects: qb(e.raster_objects)
  };
}
const Bn = 1, Un = 179, kc = 85;
function hl(e) {
  const t = ((nt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function wh(e, t) {
  let r = nt(e, 0) - nt(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function xh(e, t, { shiftKey: r = !1 } = {}) {
  let n = nt(e, 0) + nt(t, 0) * Zt;
  return r && (n = Math.round(n / 15) * 15), hl(n);
}
function nt(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function Kr(e = {}) {
  const t = Ee(nt(e.hFOV_deg || 90, 90), Bn, Un), r = Ee(nt(e.vFOV_deg || 60, 60), Bn, Un), n = Math.tan(t * vt * 0.5), i = Math.tan(r * vt * 0.5);
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
function pi(e, t) {
  const r = Math.max(1, nt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, nt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Kr(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function Eu(e, t) {
  const r = Math.max(1, nt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, nt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, nt(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function Ou(e, t) {
  const r = Math.max(1e-12, nt(t, 1)), n = Math.max(1e-6, nt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, nt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Ee(2 * Math.atan(n / (2 * r)) * Zt, Bn, Un), a = Ee(2 * Math.atan(i / (2 * r)) * Zt, Bn, Un);
  return { hFOV_deg: o, vFOV_deg: a };
}
function Xb(e, t, r) {
  const n = nt(e == null ? void 0 : e.x, 0), i = nt(e == null ? void 0 : e.y, 0), o = Math.max(1, nt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), a = Math.max(1, nt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), s = Kr(t), l = Math.max(1e-12, nt(r, 1)), c = 2 * l * s.tanHalfX, u = 2 * l * s.tanHalfY;
  return {
    x: n + (o - c) * 0.5,
    y: i + (a - u) * 0.5,
    w: c,
    h: u,
    focalPx: l
  };
}
function Fu(e, t, r = kc) {
  const n = Math.max(1e-12, nt(t, 1)), i = Ee(nt(r, kc), 1, 89.999), o = n * Math.tan(i * vt), a = Math.max(1, nt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), s = Math.max(1, nt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(a * 0.5, o),
    halfH: Math.min(s * 0.5, o)
  };
}
function kh(e, t, r) {
  const n = Math.max(1e-12, nt(t, 1));
  return {
    x: (nt(r == null ? void 0 : r.x, 0) - nt(e == null ? void 0 : e.x, 0)) / n,
    y: -(nt(r == null ? void 0 : r.y, 0) - nt(e == null ? void 0 : e.y, 0)) / n
  };
}
function Jb(e, t) {
  const r = Ee(nt(e, 90), Bn, Un), n = Math.max(1e-6, nt(t, 1));
  return Ee(
    2 * Math.atan(Math.tan(r * vt * 0.5) / n) * Zt,
    Bn,
    Un
  );
}
function as(e, t) {
  const r = Ee(nt(e, 60), Bn, Un), n = Math.max(1e-6, nt(t, 1));
  return Ee(
    2 * Math.atan(Math.tan(r * vt * 0.5) * n) * Zt,
    Bn,
    Un
  );
}
function hf(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function Zb(e, t) {
  const r = hf(e, 1), n = hf(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), a = Math.max(1, Math.round(n * i)), s = (c, u) => u ? s(u, c % u) : c, l = s(o, a) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(a / l))}`;
}
function yi(e) {
  const t = Ee(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * vt, r = Ee(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * vt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function ui(e) {
  const t = yi(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || Zb(t, 1);
}
function Tu(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = ui(t), t;
}
function Mh({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const a = o == null || String(o).trim() === "" ? NaN : Number(o), s = Number.isFinite(a) ? Ee(a, Bn, Un) : Ee(Math.min(42, nt(i, 100) * 0.42), 8, 96);
  return Tu({
    id: String(e),
    label: "Frame 1",
    yaw_deg: nt(t, 0),
    pitch_deg: Ee(nt(r, 0), -89.9, 89.9),
    roll_deg: hl(n),
    hFOV_deg: s,
    vFOV_deg: s,
    locked: !1
  });
}
function Cr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : ui(e);
}
function Ph(e, t) {
  const r = Kr(e), n = nt(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * Zt, o = 2 * Math.atan(r.tanHalfY * n) * Zt;
  return i < Bn || i > Un || o < Bn || o > Un ? null : { hFOV_deg: i, vFOV_deg: o };
}
function Nh(e, t, r = xc) {
  const n = Math.sign(nt(t, 0)), i = Math.abs(nt(r, xc));
  if (!n || !(i > 0)) return null;
  const o = Kr(e), a = o.hFovDeg + n * i;
  if (a < Bn || a > Un) return null;
  const s = Math.tan(a * vt * 0.5);
  return Ph(e, s / o.tanHalfX);
}
function Ch(e, t) {
  const r = Kr(e), n = eo(r.yawDeg, r.pitchDeg, r.rollDeg), i = nt(t == null ? void 0 : t.x, 0), o = nt(t == null ? void 0 : t.y, 0);
  return Iu(As(As(n.fwd, Is(n.right, i)), Is(n.up, o)));
}
function Qb(e) {
  return Wn(e.x, e.y, -e.z);
}
function ss(e) {
  return Wn(e.x, e.y, -e.z);
}
function An(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = eo(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function Ah(e) {
  const t = ss(Wn(e[0][0], e[1][0], e[2][0])), r = ss(Wn(e[0][1], e[1][1], e[2][1])), n = ss(Wn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), a = Math.cos(i), s = Math.sin(i), l = Math.atan2(s * r.z - a * r.x, a * t.x - s * t.z);
  return { yawDeg: i * Zt, pitchDeg: o * Zt, rollDeg: l * Zt };
}
function ea(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), r = e.x / t, n = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (n * n + i * i), 2 * (r * n - i * o), 2 * (r * i + n * o)],
    [2 * (r * n + i * o), 1 - 2 * (r * r + i * i), 2 * (n * i - r * o)],
    [2 * (r * i - n * o), 2 * (n * i + r * o), 1 - 2 * (r * r + n * n)]
  ];
}
function bi(e) {
  const [[t, r, n], [i, o, a], [s, l, c]] = e, u = t + o + c;
  if (u > 0) {
    const f = 0.5 / Math.sqrt(u + 1);
    return { x: (l - a) * f, y: (n - s) * f, z: (i - r) * f, w: 0.25 / f };
  }
  if (t > o && t > c) {
    const f = 2 * Math.sqrt(1 + t - o - c);
    return { x: 0.25 * f, y: (r + i) / f, z: (n + s) / f, w: (l - a) / f };
  }
  if (o > c) {
    const f = 2 * Math.sqrt(1 + o - t - c);
    return { x: (r + i) / f, y: 0.25 * f, z: (a + l) / f, w: (n - s) / f };
  }
  const d = 2 * Math.sqrt(1 + c - t - o);
  return { x: (n + s) / d, y: (a + l) / d, z: 0.25 * d, w: (i - r) / d };
}
function Ga(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const oi = 1e-6, Mc = 1e-6, ev = 1e-9;
function ta(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function tv(e, t) {
  if (e === "auto") return t;
  const [r, n, i, o] = e;
  let a = 0, s = 1;
  for (let l = 0; l < 50; l += 1) {
    const c = 0.5 * (a + s);
    ta(0, r, i, 1, c) < t ? a = c : s = c;
  }
  return ta(0, n, o, 1, 0.5 * (a + s));
}
function Yi(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function qi(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], a = r.map((f) => -f / i), s = n.map((f) => f / o);
  if (a.reduce((f, h, g) => f + h * s[g], 0) < 0) return r.map(() => 0);
  const l = a.map((f, h) => (f * o + s[h] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((h, g) => h + g * g, 0)), u = 3 * Math.min(c(a), c(s)), d = c(l);
  return d <= u ? l : l.map((f) => f * u / d);
}
function Ih(e, t, r, n) {
  const i = r[n], o = r[n + 1], a = t[n + 1] - t[n], s = i.map((u, d) => o[d] - u);
  let l = s;
  Yi(e, n) && (l = qi(t, n, r[n - 1].map((u, d) => u - i[d]), s).map((u) => u * a));
  let c = s;
  return Yi(e, n + 1) && (c = qi(t, n + 1, s.map((u) => -u), r[n + 2].map((u, d) => u - o[d])).map((u) => u * a)), [l.map((u) => u / 3), c.map((u) => -u / 3)];
}
function Eh(e, t, r, n, i) {
  const [[o], [a]] = Ih(e, t, r.map((s) => [s]), n);
  return ta(r[n], r[n] + o, r[n + 1] + a, r[n + 1], i);
}
function nv(e, t, r, n) {
  var c, u;
  const i = e.map((d) => d.value);
  let [o, a] = Ih(e, t, i, r);
  o = ((c = e[r].handles) == null ? void 0 : c.out) ?? o, a = ((u = e[r + 1].handles) == null ? void 0 : u.in) ?? a;
  const s = i[r], l = i[r + 1];
  return [0, 1, 2].map((d) => ta(s[d], s[d] + o[d], l[d] + a[d], l[d], n));
}
function Os([e, t, r, n], [i, o, a, s]) {
  return [
    n * i + e * s + t * a - r * o,
    n * o - e * a + t * s + r * i,
    n * a + e * o - t * i + r * s,
    n * s - e * i - t * o - r * a
  ];
}
function rv(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Hl(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function iv([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function Pc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function Ti(e, t) {
  return iv(Os([-e[0], -e[1], -e[2], e[3]], t));
}
function Gl(e, t, r) {
  return Os(e, Pc(Ti(e, t).map((n) => r * n)));
}
function Wl(e, t) {
  const r = rv(e, t);
  if (Math.abs(r) > Mc) return r < 0;
  const [n, i, o] = Ti(e, t);
  for (const a of [-i, n, o])
    if (Math.abs(a) > Mc) return a < 0;
  return !1;
}
function Wa(e) {
  const { x: t, y: r, z: n, w: i } = bi(An(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function Nc(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function ov(e, t, r, n) {
  const i = Wa(e[r].value);
  let o = Wa(e[r + 1].value);
  Wl(i, o) && (o = Hl(o));
  const a = t[r + 1] - t[r], s = Ti(i, o);
  let l = s;
  if (Yi(e, r)) {
    let C = Wa(e[r - 1].value);
    Wl(C, i) && (C = Hl(C)), l = qi(t, r, Ti(i, C), s).map((U) => U * a);
  }
  let c = s;
  if (Yi(e, r + 1)) {
    let C = Wa(e[r + 2].value);
    Wl(o, C) && (C = Hl(C)), c = qi(t, r + 1, Ti(o, i), Ti(o, C)).map((U) => U * a);
  }
  const u = Os(i, Pc(l.map((C, U) => 0.5 * (C - s[U])))), d = Os(o, Pc(s.map((C, U) => 0.5 * (C - c[U])))), [f, h, g, m] = Gl(Gl(i, o, n), Gl(u, d, n), 2 * n * (1 - n)), { yawDeg: y, pitchDeg: F, rollDeg: K } = Ah(ea({ x: f, y: h, z: g, w: m })), z = e[r].value, L = e[r + 1].value;
  return {
    yaw_deg: Nc(y, z.yaw_deg, L.yaw_deg, n),
    pitch_deg: F,
    roll_deg: Nc(K, z.roll_deg, L.roll_deg, n)
  };
}
function na(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function Fs(e) {
  return Math.sqrt(na(e, e));
}
function Ts(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function Oh(e, t) {
  const r = na(e, t), n = t.map((a, s) => a - r * e[s]), i = Fs(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((a) => a * o);
}
function Ii(e, t) {
  const r = Fs(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function Ka(e, t, r) {
  return Ii(e, Oh(e, t).map((n) => r * n));
}
function Kl(e, t) {
  const r = Ts(e[t].value), n = Ts(e[t + 1].value), i = na(r, n), o = i < 0 && Fs(n.map((l, c) => l - i * r[c])) <= Mc;
  let a;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    a = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    a = Oh(r, n);
  const s = Fs(a);
  return [a, a.map((l, c) => Math.cos(s) * l - s * Math.sin(s) * r[c]), o];
}
function av(e, t, r, n) {
  const i = Ts(e[r].value), o = Ts(e[r + 1].value), [a, s, l] = Kl(e, r);
  let c = a, u = s;
  const d = t[r + 1] - t[r];
  Yi(e, r) && (c = qi(t, r, Kl(e, r - 1)[1].map((z) => -z), c).map((z) => z * d)), Yi(e, r + 1) && (u = qi(t, r + 1, u.map((z) => -z), Kl(e, r + 1)[0]).map((z) => z * d));
  let f, h, g;
  if (l) {
    const z = Math.PI, L = ta(0, na(c, a) / z / 3, z - na(u, s) / z / 3, z, n);
    [f, h, g] = Ii(i, a.map((C) => L * C / z));
  } else {
    const z = Ka(Ii(i, c.map((U) => U / 3)), Ii(o, u.map((U) => -U / 3)), n), L = Ka(Ii(i, c.map((U) => n * U / 3)), z, n), C = Ka(z, Ii(o, u.map((U) => -(1 - n) * U / 3)), n);
    [f, h, g] = Ka(L, C, n);
  }
  const m = Math.hypot(f, g), y = e[r].value.yaw_deg, F = e[r + 1].value.yaw_deg;
  return { yaw_deg: m <= ev ? y + (F - y) * n : Nc(Math.atan2(f, g) * 180 / Math.PI, y, F, n), pitch_deg: Math.atan2(h, m) * 180 / Math.PI };
}
function sv(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = Eh(e, t, e.map((a) => a.value[o]), r, n);
  return i;
}
function lv(e, t, r, n) {
  return Eh(e, t, e.map((i) => i.value), r, n);
}
const cv = { position: nv, rotation: ov, direction: av, size: sv };
function Ht(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return Ga(e[t].value);
  if (r <= n[0].frame + oi) return Ga(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - oi) return Ga(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + oi; ) o += 1;
  const a = n[o];
  if (Math.abs(r - a.frame) <= oi || a.easing === "hold") return Ga(a.value);
  const s = n.map((c) => c.frame), l = tv(a.easing, (r - s[o]) / (s[o + 1] - s[o]));
  return (cv[t] ?? lv)(n, s, o, l);
}
function Cc(e) {
  return Math.min(179, Math.max(0.1, e));
}
function uv(e) {
  return Math.min(1, Math.max(0, e));
}
function Fh(e) {
  return Math.max(1e-6, e);
}
function Th(e, t) {
  return t - (e.start - e.in);
}
function no(e, t) {
  return t >= e.start - oi && (e.duration === null || t < e.start + e.duration - oi);
}
function Du(e, t) {
  return {
    position: Ht(e, "position", t),
    ...Ht(e, "rotation", t),
    hFOV_deg: Cc(Ht(e, "fov", t)),
    aspect: e.aspect
  };
}
function ma(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = Th(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : Du(n, r),
    scene: {
      active: i.visible && no(i.clip, r),
      clip_frame: o,
      position: Ht(i, "position", o),
      ...Ht(i, "rotation", o),
      scale: Fh(Ht(i, "scale", o))
    },
    stickers: e.stickers.map((a) => hi(a, r))
  };
}
function dv(e, t) {
  if (e.placement === "world")
    return {
      position: Ht(e, "position", t),
      ...Ht(e, "rotation", t),
      scale: Fh(Ht(e, "scale", t))
    };
  const r = Ht(e, "size", t);
  return {
    ...Ht(e, "direction", t),
    roll_deg: Ht(e, "roll", t),
    hFOV_deg: Cc(r.hFOV_deg),
    vFOV_deg: Cc(r.vFOV_deg)
  };
}
function hi(e, t) {
  const r = Th(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && no(e.clip, t),
    clip_frame: r,
    ...dv(e, r),
    opacity: uv(Ht(e, "opacity", r))
  };
}
const fv = 2, pv = ["sky", "world"], Ac = ["perspective", "erp"], hv = ["input", "output", "temp"], Dh = [0.42, 0, 0.58, 1], Lh = 1, Lu = 1e3, Ic = 1e7, Vu = Ic;
function tn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Yt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Ru(e, t) {
  const r = Yt(e, t);
  return r !== null && r > 0 ? r : t;
}
function Cn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function ml(e) {
  const t = Yt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function ls(e) {
  const t = ml(e);
  return t === null ? null : Cn(t, -Ic, Ic);
}
function ro(e) {
  const t = Ru(e, null);
  return t === null ? null : Cn(t, Lh, Lu);
}
function Vh(e) {
  const t = ml(e);
  return t !== null && t >= 1 ? Math.min(t, Vu) : null;
}
function ra(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Rh(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => Yt(r, null));
  return t.includes(null) ? null : t;
}
function $h(e) {
  return Rh(e) || [0, 0, 0];
}
function zh(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Yt(t.yaw_deg, 0),
    pitch_deg: Cn(Yt(t.pitch_deg, 0), -90, 90),
    roll_deg: Yt(t.roll_deg, 0)
  };
}
function mv(e) {
  return Cn(Yt(e, 90), 0.1, 179);
}
function gv(e) {
  return Ru(e, 1);
}
function yv(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Yt(t.yaw_deg, 0),
    pitch_deg: Cn(Yt(t.pitch_deg, 0), -90, 90)
  };
}
function bv(e) {
  return Yt(e, 0);
}
function vv(e) {
  const t = tn(e) ? e : {};
  return {
    hFOV_deg: Cn(Yt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Cn(Yt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function jh(e) {
  return Cn(Yt(e, 1), 0, 1);
}
const $u = [["position", $h], ["rotation", zh], ["fov", mv]], gl = [["position", $h], ["rotation", zh], ["scale", gv]], zu = [["direction", yv], ["roll", bv], ["size", vv], ["opacity", jh]], ju = [...gl, ["opacity", jh]];
function _v(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => Yt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...Dh];
}
function Sv(e) {
  if (!tn(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = Rh(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function wv(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!tn(i)) continue;
    const o = ls(i.frame);
    if (o === null) continue;
    const a = { frame: o, value: t(i.value), easing: _v(i.easing) }, s = r ? Sv(i.handles) : null;
    s && (a.handles = s), n.set(o, a);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function Hu(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = tn(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: wv(o.keyframes, i, n === "position") };
  }
  return r;
}
function Hh(e) {
  const t = tn(e) ? e : {}, r = ls(t.start), n = ls(t.in), i = ls(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function xv(e) {
  const t = tn(e) ? e : {}, r = Cn(Yt(t.x0, 0), 0, 1), n = Cn(Yt(t.y0, 0), 0, 1), i = Cn(Yt(t.x1, 1), 0, 1), o = Cn(Yt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function kv(e) {
  if (!tn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: hv.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function Mv(e) {
  const t = kv(e.source);
  if (!t) return null;
  const r = pv.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: Hh(e.clip),
    visible: ra(e.visible, !0),
    locked: ra(e.locked, !1),
    crop: xv(e.crop),
    ...Hu(e, n ? ju : zu)
  };
  return n || (i.z_index = ml(e.z_index) ?? 0), i;
}
function Pv(e) {
  const t = [];
  let r = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const a = tn(o) ? Mv(o) : null;
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
function Gh(e) {
  if (!tn(e)) return null;
  const t = Ac.includes(e.projection) ? e.projection : Ac[0];
  return { aspect: Ru(e.aspect, 1), projection: t, visible: ra(e.visible, !0), ...Hu(e, $u) };
}
function Gu() {
  return Gh({});
}
function Ds(e) {
  const t = tn(e.timeline) ? e.timeline : {}, r = tn(e.scene) ? e.scene : {};
  return {
    version: fv,
    timeline: {
      fps: ro(t.fps) ?? 24,
      length: Vh(t.length)
    },
    camera: Gh(e.camera),
    scene: { clip: Hh(r.clip), visible: ra(r.visible, !0), ...Hu(r, gl) },
    stickers: Pv(e.stickers),
    painting: to(e.painting),
    painting_layer: tn(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: ra(e.painting_visible, !0)
  };
}
function Nv(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const r = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!tn(r)) return null;
  const n = String(r.type || "").trim().toLowerCase();
  return n === "comfy_image" ? {
    kind: "file",
    filename: String(r.filename || "").trim(),
    subfolder: String(r.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(r.storage || "input").trim().toLowerCase()
  } : n === "dataurl" ? { kind: "file", data_url: r.value } : null;
}
function Cv(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!tn(t)) return null;
  const r = Cn(Yt(t.hFOV_deg, 90), 1, 179), n = Cn(Yt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function Av(e) {
  const t = tn(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(tn) : [];
  return r.sort((n, i) => Yt(n.z_index, 0) - Yt(i.z_index, 0)), Ds({
    camera: Cv(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: Nv(n, t),
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
function Zn(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Ds({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!tn(t)) throw new Error("state_json is not a JSON object.");
  const r = Object.hasOwn(t, "version") ? t.version : 1;
  if (r !== 1 && r !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(r)}; supported versions are 1 and 2.`);
  return r === 1 ? Av(t) : Ds(t);
}
const Bl = {
  state: { painting_visible: !0 },
  camera: { projection: Ac[0], visible: !0 },
  scene: { visible: !0 }
};
function Ul(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function Ec(e) {
  return JSON.stringify({
    ...Ul(e, Bl.state),
    camera: e.camera && Ul(e.camera, Bl.camera),
    scene: Ul(e.scene, Bl.scene)
  });
}
function Yl(e, t, r, n, i) {
  const o = {};
  for (const [a] of t)
    o[a] = {
      value: e[a].value,
      keyframes: e[a].keyframes.map((s) => ({ ...s, frame: r(n + s.frame) - i }))
    };
  return o;
}
function mf(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function ia(e, t) {
  const r = ro(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (s) => ml(s * n), { length: o } = e.timeline, a = mf(e.scene.clip, i);
  return Ds({
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...Yl(e.camera, $u, i, 0, 0) },
    scene: { clip: a.clip, visible: e.scene.visible, ...Yl(e.scene, gl, i, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((s) => {
      const { clip: l, anchor: c, newAnchor: u } = mf(s.clip, i), d = s.placement === "world" ? ju : zu;
      return { ...s, clip: l, ...Yl(s, d, i, c, u) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function ql(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Wh(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Kh(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= oi);
}
function Bh(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? Wh(e.keyframes[n - 1].easing) : [...Dh];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function fn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = ql(i.value, n);
    return;
  }
  const o = Kh(i, r);
  o ? o.value = ql(o.value, n) : Bh(i, r, ql(Ht(e, t, r), n));
}
function io(e) {
  return e.placement === "world" ? ju.map(([t]) => t) : e.placement === "sky" ? zu.map(([t]) => t) : (e.clip ? gl : $u).map(([t]) => t);
}
function Iv(e, t) {
  for (const r of io(e))
    Kh(e[r], t) || Bh(e[r], t, Ht(e, r, t));
}
function Ev(e) {
  const t = io(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function Xl(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function Ov(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function Fv(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const a = e[o];
    if (!a.keyframes.some((l) => i.has(l.frame))) continue;
    const s = Ht(e, o, n);
    a.keyframes = a.keyframes.filter((l) => !i.has(l.frame)), a.keyframes.length || (a.value = s);
  }
}
function Tv(e, t, r, n, i) {
  n = Math.max(n, Math.min(0, i - Math.min(...r)));
  const o = new Set(r);
  for (const a of t) {
    const s = e[a], l = s.keyframes.filter((u) => o.has(u.frame)).map((u) => ({ ...u, frame: u.frame + n })), c = new Set(l.map((u) => u.frame));
    s.keyframes = [
      ...s.keyframes.filter((u) => !o.has(u.frame) && !c.has(u.frame)),
      ...l
    ].sort((u, d) => u.frame - d.frame);
  }
  return n;
}
function Uh(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((a) => r.length > 1 ? a.frame >= n && a.frame < i : a.frame === n));
}
function Dv(e, t, r) {
  const n = Uh(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function Lv(e, t, r, n) {
  for (const i of Uh(e, t, r)) i.easing = Wh(n);
}
function Vv(e, t) {
  e.start = Math.max(0, e.start + t);
}
function Rv(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function $v(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function zv(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Ls(e) {
  return io(e).map((t) => e[t]);
}
function jv(e, { cameraOnly: t = !1, camera: r = !1 } = {}) {
  return t ? Ls(e.camera).some((n) => n.keyframes.length > 0) : Yh(e, { camera: r });
}
function Vs(e) {
  return Ls(e).some((t) => t.keyframes.length > 0) || !!e.clip && !zv(e.clip);
}
function Yh(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(Vs);
}
const Hv = 1e5;
function qh(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, r);
  if (i && e.camera)
    for (const a of Ls(e.camera))
      for (const s of a.keyframes) o = Math.max(o, s.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: s } = a;
    o = Math.max(o, s.duration === null || s === n ? s.start + 1 : s.start + s.duration);
    for (const l of Ls(a))
      for (const c of l.keyframes) o = Math.max(o, s.start - s.in + c.frame + 1);
  }
  return Number.isFinite(o) ? o : Hv;
}
function Gv(e) {
  return e > 0 ? ro(Math.min(e, Lu)) : null;
}
function Wv(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : Vh(Math.max(1, Math.min(e, Vu)));
}
const Jl = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], Kv = 2e3;
function Bv(e, t, r = 56) {
  const n = Jl.find((o) => o * t >= r) || Jl[Jl.length - 1], i = [];
  for (let o = 0; o < e && i.length < Kv; o += n) i.push(o);
  return i;
}
function Uv(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let Ba = { text: null, parsed: null };
function vn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Rs(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function Yv({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: vn(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: to(null),
    painting_layer: null,
    ui_settings: Rs(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Xh(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function qv(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function Xv(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function Jv(e) {
  return Array.isArray(e) ? e.map((t) => Tu(t)) : [];
}
function Zv(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((a) => String((a == null ? void 0 : a.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function Jh(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = Yv(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (Ba.text === i ? o = Ba.parsed : (o = JSON.parse(i), Ba = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const a = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, s = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: qv(o.assets),
      stickers: Xv(o.stickers),
      shots: Jv(o.shots),
      painting: to(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Rs(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return a && (s.ui_settings = Rs({ ...s.ui_settings, ...a })), s.output_preset = Xh(
      r.outputPreset,
      Number(s.output_preset || n.output_preset)
    ), s.bg_color = String(r.backgroundColor || s.bg_color || n.bg_color), s.coverage = vn(r.coverage), delete s.editor_history, s;
  } catch {
    return Ba = { text: i, parsed: null }, n;
  }
}
function Qv(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function e1(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), { state: r, paintingChanged: n };
}
function t1(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function Zh(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: a, scene: s = null, camera: l = !1 } = t, c = ro(t.fps);
  let u;
  try {
    u = Zn(e);
  } catch {
    u = Zn(null);
  }
  c && c !== u.timeline.fps && (u = ia(u, c));
  const d = l && u.camera === null;
  if (d && (u = { ...u, camera: Gu() }), s) {
    let f = Zn(s);
    c && c !== f.timeline.fps && (f = ia(f, c)), u = { ...f, camera: u.camera, cutout_state: u };
  }
  return {
    ...u,
    ...d ? { default_camera: !0 } : {},
    coverage: vn(i),
    bg_color: n,
    output_preset: Xh(r),
    ui_settings: Rs(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...a }
  };
}
function n1(e, t) {
  e.cutout_state && (e.cutout_state = ia(e.cutout_state, t));
  const r = ia(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, a] of i)
    if (a) {
      o.clip && (o.clip = a.clip);
      for (const s of io(o)) o[s].keyframes = a[s].keyframes;
    }
}
function Wu(e, t) {
  const r = hi(e, t);
  return { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg, hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg, rot_deg: r.roll_deg };
}
const r1 = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function gf(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function i1(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[r1[r]].keyframes.length));
}
function Qh(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = gf(r, ["yaw_deg", "pitch_deg"]), o = gf(r, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && fn(e, "direction", n, i), r.rot_deg !== void 0 && fn(e, "roll", n, r.rot_deg), Object.keys(o).length && fn(e, "size", n, o);
}
const yl = ["position_x", "position_y", "position_z"], bl = "camera";
function em(e, t) {
  const r = Du(e, t);
  return Tu({
    id: bl,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: Jb(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function o1(e) {
  return Zn({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: $t(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function a1(e) {
  return e - 360 * Math.round(e / 360);
}
function s1(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + a1(r[o] - n[o]));
  Object.keys(i).length && fn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && fn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * vt * 0.5) / Math.tan(r.vFOV_deg * vt * 0.5)), r.position.some((o, a) => o !== n.position[a]) && fn(e, "position", t, [...r.position]);
}
function l1(e, t) {
  const r = Ht(e, "position", t), n = Ht(e, "rotation", t);
  return {
    ...Object.fromEntries(yl.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Ht(e, "fov", t)
  };
}
function c1(e, t, r, n) {
  const i = yl.indexOf(r);
  if (i >= 0) {
    const o = Ht(e, "position", t);
    o[i] = n, fn(e, "position", t, o);
  } else r === "hFOV_deg" ? fn(e, "fov", t, n) : fn(e, "rotation", t, { [r]: n });
}
function u1(e, t, r) {
  fn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function d1(e, t) {
  const r = hi(e, t);
  return {
    ...Object.fromEntries(yl.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function f1(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = yl.indexOf(r);
  if (o >= 0) {
    const a = Ht(e, "position", i);
    a[o] = n, fn(e, "position", i, a);
  } else r === "scale" ? fn(e, "scale", i, n) : r === "opacity" ? fn(e, "opacity", i, n / 100) : fn(e, "rotation", i, { [r]: n });
}
function p1(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && fn(e, i, n, r[i]);
}
function h1(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function m1(e, t, r) {
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
function cs(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function $s(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Ku(e, t, r, n) {
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
function g1(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = $t(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function Oc(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function tm(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function nm(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function rm(e) {
  e.default_camera && JSON.stringify(Zn({ version: 2, camera: e.camera }).camera) !== JSON.stringify(Gu()) && delete e.default_camera;
}
function im(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const r = Zn(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(r.camera) === JSON.stringify(Gu()) && (r.camera = null), Ec(r);
}
function om(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = Zn(r);
    if (Ec(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && Ec(ia(i, o)) === t;
  } catch {
    return !1;
  }
}
const Zl = 0.15, y1 = 0.01, b1 = 1e-3, v1 = 0.05, _1 = 4, yf = 250, S1 = 16, Qn = 1, w1 = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Rn(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function pr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function vl(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function oo(e, t, r = 0) {
  const n = An(e, t, r), i = pr(n, 2);
  return { right: pr(n, 0), up: pr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function x1(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function Fc(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function k1(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : Fc(e, "3dof", r);
}
function M1(e) {
  return oo(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function P1(e) {
  return Rn(e.position, oo(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function Br(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Go(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Bu(e, t) {
  return Go(Br(t, e.position), oo(e.yaw_deg, e.pitch_deg).forward);
}
function Uu(e) {
  return Math.max(e, 1e-6) * v1;
}
function Tc(e, t, r = null, n = Qn) {
  if (t) return t;
  const i = Uu(n);
  if (r && Bu(e, r) > 0) {
    const o = Br(r, e.position), a = Math.hypot(...o);
    return a >= i ? r : Rn(e.position, o, i / a);
  }
  return Rn(e.position, oo(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function am(e, t = Qn) {
  return Math.max(e.distance, Uu(t));
}
function sm(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > _1 ? !1 : t.time - e.time < yf || e.cost > S1 && t.time - e.wheelTime < yf;
}
function Yu(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * vt);
  return { tanX: n, tanY: n * r / t };
}
function lm(e, t, r, n, i = P1(e)) {
  const o = e.roll_deg ?? 0, [a, s] = N1(t, r, o), l = $t(e.yaw_deg + a / n * 360), c = Ee(e.pitch_deg - s / n * 360, -89.9, 89.9), u = An(e.yaw_deg, e.pitch_deg, o), d = An(l, c, o), f = Br(e.position, i), h = [0, 1, 2].map((m) => Go(pr(u, m), f)), g = { ...e, yaw_deg: l, pitch_deg: c, position: Rn(i, vl(d, h)) };
  return { ...g, distance: Bu(g, i) };
}
function N1(e, t, r) {
  const n = Math.cos(r * vt), i = Math.sin(r * vt);
  return [e * n + t * i, t * n - e * i];
}
function cm(e, t, r, n, i, o = e.distance) {
  const { right: a, up: s } = M1(e), l = 2 * o * Yu(e, n, i).tanY / i;
  return { ...e, position: Rn(Rn(e.position, a, -t * l), s, r * l), distance: o };
}
function um(e, t, r, n = Qn) {
  const i = Br(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const a = Math.max(n, 1e-6), s = a * y1, l = r > 0 ? Math.min(Math.max(o * Zl, s), o - a * b1) : -Math.max(o * Zl / (1 - Zl), s);
  if (r > 0 && l <= 0) return e;
  const c = { ...e, position: Rn(e.position, i, l / o) };
  return { ...c, distance: Math.max(Bu(c, t), Uu(n)) };
}
function dm(e, t, r, n) {
  const { tanX: i, tanY: o } = Yu(e, r, n), a = Math.atan(Math.min(i, o)), s = Math.max(t.radius, 1e-6) / Math.sin(a) * 1.1, { forward: l } = oo(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Rn(t.center, l, -s), distance: s };
}
function qu(e, t, r, n = null) {
  return fm({
    quaternion: bi(An(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Yu(e, t, r).tanY) * Zt,
    aspect: t / r
  }, e.position, e.distance, n);
}
function fm(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: Qn }, a = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), s = Math.max(a + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: s * 2
  };
}
function oa(e, t, r, n) {
  const { right: i, up: o, forward: a } = pm(e), s = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = s[0] * a[0] + s[1] * a[1] + s[2] * a[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * vt), u = c * e.aspect, d = s[0] * i[0] + s[1] * i[1] + s[2] * i[2], f = s[0] * o[0] + s[1] * o[1] + s[2] * o[2];
  return { x: r * 0.5 * (1 + d / l / u), y: n * 0.5 * (1 - f / l / c), z: l };
}
function pm(e) {
  const t = ea(e.quaternion), r = pr(t, 2);
  return { right: pr(t, 0), up: pr(t, 1), forward: r.map((n) => -n) };
}
function zs(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function C1({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function Xu(e, t) {
  if (!e || !t.active) return null;
  const r = A1(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: Dc(t),
    itemQuaternion: e.kind === "splat" ? w1 : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function hm(e, t, r) {
  const n = t.stickers.findIndex((s) => s.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], a = Xu(e, o);
  return a && { ...a, id: i.id, opacity: o.opacity, value: o };
}
function mm(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function A1(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function Dc(e) {
  return {
    position: [...e.position],
    quaternion: bi(An(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Lc(e, t) {
  return Rn(e.position, vl(An(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function us(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function Vc({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function Rc(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((a) => a[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((a) => a[o]))), n = t.map((o, a) => (o + r[a]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function I1(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...Vc(t).map((o) => Lc(e.scene, o)));
  for (const o of r) i.push(...Ju(o));
  for (const { box: o, value: a } of n) i.push(...Vc(o).map((s) => Lc(a, s)));
  return i;
}
function E1(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: bi(An(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: An(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function Ju(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Rn(e.position, vl(e.rotation, [n, i, 0])));
}
function O1(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? Rc(Ju(i)) : o != null && o.box ? Rc(Vc(us(o.kind, o.box)).map((a) => Lc(n, a))) : { center: [...n.position], radius: n.scale };
}
const F1 = 2, T1 = 0.5, D1 = 30;
function gm(e, t) {
  const r = Br(t, e), n = Math.atan2(r[0], -r[2]) * Zt, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * Zt;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function L1(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * T1 : F1, o = t ? [...t] : Rn(e.position, oo(e.yaw_deg, e.pitch_deg).forward, i), a = Math.hypot(...Br(o, e.position)), s = a > 0 ? gm(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(a, 1e-3) * Math.tan(D1 * 0.5 * vt);
  return { position: o, rotation: s, scale: l };
}
function bf(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function V1(e) {
  return [0, 1, 2].map((t) => pr(e, t));
}
function vf(e, t, r, n) {
  if (e === "translate") return { position: Rn(t.position, Br(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * H1(r.scale, n.scale) / r.scale };
  const i = bf(ea(n.quaternion), V1(ea(r.quaternion))), o = bf(i, An(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: a, pitchDeg: s, rollDeg: l } = Ah(o);
  return Math.abs(s) <= R1 ? { rotation: { yaw_deg: a + 0, pitch_deg: s, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: s, roll_deg: $1(o, t.yaw_deg) } };
}
const R1 = 89.9;
function $1(e, t) {
  const r = pr(e, 0), n = pr(e, 1), i = Math.cos(t * vt), o = Math.sin(t * vt);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * Zt + 0;
}
const z1 = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function j1(e, t, r, n, i) {
  if (!oa(e, t, n, i)) return null;
  const { right: o, up: a, forward: s } = pm(e), l = Br(t, e.position), c = Go(l, o), u = Go(l, a), d = Go(l, s), f = Math.tan(e.fovY_deg * 0.5 * vt), h = f * e.aspect, g = Math.hypot(c, u, d) * z1[r] * Math.min(1.9 * f, 7) / 4;
  if (!(d > g)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const m = (L) => {
    const C = g * Math.sqrt(L * L + d * d - g * g);
    return [(L * d - C) / (d * d - g * g), (L * d + C) / (d * d - g * g)];
  }, [y, F] = m(c), [K, z] = m(u);
  return {
    minX: n * 0.5 * (1 + y / h),
    maxX: n * 0.5 * (1 + F / h),
    minY: i * 0.5 * (1 - z / f),
    maxY: i * 0.5 * (1 - K / f)
  };
}
function H1(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, a) => Math.abs(a - e) > Math.abs(o - e) ? a : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function G1(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function ym(e, t) {
  const r = An(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * vt) * t, i = n / e.aspect, o = (c, u, d) => Rn(e.position, vl(r, [c, u, d])), a = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], s = a.map((c) => [e.position, c]);
  a.forEach((c, u) => s.push([c, a[(u + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return s.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), s;
}
function W1(e, t, r, n, i, o = 6) {
  return t.some(([a, s]) => {
    const l = oa(e, a, n, i), c = oa(e, s, n, i);
    if (!l || !c) return !1;
    const u = c.x - l.x, d = c.y - l.y, f = Ee(((r.x - l.x) * u + (r.y - l.y) * d) / Math.max(u * u + d * d, 1e-12), 0, 1);
    return Math.hypot(l.x + u * f - r.x, l.y + d * f - r.y) <= o;
  });
}
function K1(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function B1(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Ht(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (a, s) => {
    const l = o === 1 ? 0 : s * i / (o - 1);
    return Ht(n, "position", l);
  });
}
function U1(e, t, r, n, i) {
  const o = Math.max(0, e) * r, a = Math.max(0, t) * r, s = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(a, 1));
  return {
    width: Math.max(1, Math.round(o * s)),
    height: Math.max(1, Math.round(a * s))
  };
}
const bm = 0.28;
function vm(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * vt);
  return {
    quaternion: bi(An(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * Zt,
    aspect: n
  };
}
function Wo(e) {
  const t = Kr(e);
  return {
    quaternion: bi(An(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function _m(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = Fu(r, n), a = t.x + t.w * 0.5, s = t.y + t.h * 0.5;
  return {
    rect: { x: a - i, y: s - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * Zt,
      vFOV_deg: 2 * Math.atan(o / n) * Zt
    }
  };
}
function Sm(e, t, r) {
  const [[n, i, o], [a, s, l], [c, u, d]] = ea(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * vt), h = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(g, m = 1e-4) {
      const y = Qb(g), F = n * y.x + a * y.y + c * y.z, K = i * y.x + s * y.y + u * y.z, z = -(o * y.x + l * y.y + d * y.z), L = Math.max(z, m);
      return {
        x: t * 0.5 * (1 + F / L / h),
        y: r * 0.5 * (1 - K / L / f),
        z
      };
    },
    // The unit direction seen at the point (x, y).
    ray(g, m) {
      const y = (g / t * 2 - 1) * h, F = (1 - m / r * 2) * f;
      return Iu(ss({
        x: n * y + i * F - o,
        y: a * y + s * F - l,
        z: c * y + u * F - d
      }));
    }
  };
}
function wm(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = ma(e, t) }) {
  const a = [];
  e.stickers.forEach((s, l) => {
    const c = o.stickers[l];
    if (s.placement !== "sky") return;
    const u = s.source.kind === "port" && !s.visible;
    if (!c.active && !u) return;
    const d = r(s);
    if (!d) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * vt), h = Math.tan(c.vFOV_deg * 0.5 * vt), { crop: g } = s;
    a.push({
      kind: "sticker",
      id: s.id,
      media: d.media,
      revision: d.revision,
      source: d.source,
      opacity: u ? bm : c.opacity,
      zIndex: n(s),
      quaternion: bi(An(c.yaw_deg, c.pitch_deg, c.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * g.x0 - 1) * f,
        x1: (2 * g.x1 - 1) * f,
        y0: (1 - 2 * g.y1) * h,
        y1: (1 - 2 * g.y0) * h
      }
    });
  });
  for (const s of i) a.push({ kind: "erp", ...s });
  return a.sort((s, l) => s.zIndex - l.zIndex);
}
function xm(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const s of r)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !a.has(s.id) && a.set(s.id, s);
  return wm(e, t, {
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
function Y1(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function km(e, t, r, { media: n, evaluated: i = ma(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const s of r)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !o.has(s.id) && o.set(s.id, s);
  const a = [];
  return e.stickers.forEach((s, l) => {
    const c = i.stickers[l];
    if (s.placement !== "world" || !c.active) return;
    const u = o.get(s.id), d = u ? n(u) : null;
    if (!d) return;
    const { width: f, height: h } = Y1(d.media), g = E1(c, s.crop, f, h);
    g && a.push({
      id: s.id,
      media: d.media,
      revision: d.revision,
      source: d.source,
      opacity: c.opacity,
      position: g.position,
      quaternion: g.quaternion,
      rotation: g.rotation,
      width: g.width,
      height: g.height,
      crop: s.crop
    });
  }), a;
}
function q1({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: a = () => import("./.lazy/pano_three_view-CoFkxyk2.js").then((s) => s.$) }) {
  let s = null, l = null, c = !1, u = 0;
  const d = () => {
    l = vh(s.createThreeView({ onUpdate: n, onSplats: i, createCanvas: () => e }), "editor");
  }, f = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(m) {
      return l && !f.lost ? l.render(m) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(m) {
      return l && !f.lost ? l.renderUnwrap(m) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(m, y) {
      return l && !f.lost ? l.resize(m, y) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(m, y) {
      l && !f.lost && l.clear(m, y);
    },
    // Frees the Spark renderer of an owner that stops drawing SPLATs for now (pano_three_view.js
    // releaseSplats).
    releaseSplats(m) {
      l && !f.lost && l.releaseSplats(m);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(m) {
      return l ? l.sceneBox(m) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(m, y, F, K, z) {
      return l && !f.lost ? l.pick(m, y, F, K, z) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(m, y, F, K, z) {
      return l && !f.lost ? l.pickSurface(m, y, F, K, z) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(m, y, F, K, z) {
      return l && !f.lost ? l.pickSticker(m, y, F, K, z) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(m, y, F, K, z, L) {
      return l && !f.lost ? l.gizmoPointer(m, y, F, K, z, L) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return u + (l ? l.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", h), e.removeEventListener("webglcontextrestored", g), l == null || l.dispose(), l = null;
    }
  };
  function h(m) {
    m.preventDefault(), !(c || f.lost) && (f.lost = !0, f.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function g() {
    c || !f.lost || queueMicrotask(() => {
      c || !f.lost || (l && (u += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, s && (d(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", h), e.addEventListener("webglcontextrestored", g), a().then((m) => {
    c || (s = m, !f.lost && (d(), f.ready = !0, t()));
  }).catch((m) => {
    console.error("[PanoramaStickers] three.js view is unavailable", m), f.failed = !0, r();
  }), f;
}
const Mm = "3D view unavailable. Check the browser console.";
function js(e, t, r) {
  return vm({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function X1(e) {
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
    let c = !1;
    return i.add(l), {
      get failed() {
        return n;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(u) {
        return c ? null : (o(), t ? t.render({ ...u, owner: l }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(l);
      },
      dispose() {
        c || (c = !0, i.delete(l), t == null || t.release(l), !i.size && (n = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const Pm = X1(
  () => import("./.lazy/pano_three_view-CoFkxyk2.js").then((e) => e.$).then((e) => vh(e.createThreeView({ createCanvas: () => nn({ label: "three.node" }) }), "node"))
), Ur = ["erp_image", "bg_erp", "bg_media"], ds = ["source"], Zu = ["sticker_image", "sticker"], Nm = ["scene"], J1 = {
  background: [...Ur, ...ds],
  "external-sticker": [...Zu, ...ds],
  scene: [...Nm, ...ds]
};
function Cm(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Qu(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = Cm(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function Z1(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function _f(e, t) {
  var o, a;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((s) => (s == null ? void 0 : s.name) === t);
  let n = r >= 0 && e.graph ? e.getInputLink(r) : null;
  const i = /* @__PURE__ */ new Set();
  for (; n; ) {
    if (n.type && n.type !== "*") return String(n.type);
    const s = e.graph.getNodeById(n.origin_id);
    if (!s || i.has(s)) return "";
    i.add(s);
    const l = (a = (o = s.outputs) == null ? void 0 : o[n.origin_slot ?? 0]) == null ? void 0 : a.type;
    if (l && l !== "*") return String(l);
    if (s.type !== "Reroute") return "";
    n = s.getInputLink(0);
  }
  return "";
}
function Am(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const a = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((s) => String(s == null ? void 0 : s.id) === r[o]);
    if (!a || o === r.length - 1) return { graph: n, entry: a };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((s) => (s == null ? void 0 : s.id) === a.type);
  }
}
function Q1(e, t) {
  const { graph: r, entry: n } = Am(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((a) => Array.isArray(a) ? [a[0], { origin_id: a[1], origin_slot: a[2] }] : [a == null ? void 0 : a.id, a])), o = {};
  for (const a of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const s = Cm(i.get(a == null ? void 0 : a.link));
    s && (o[String((a == null ? void 0 : a.name) || "")] = s);
  }
  return o;
}
const Im = [...Ur, ...Zu, ...Nm, ...ds], e_ = 256, Ei = /* @__PURE__ */ new Map(), Ql = /* @__PURE__ */ new WeakMap();
let Em = () => null;
function Om(e) {
  return Ql.has(e) || Ql.set(e, JSON.stringify(e)), Ql.get(e);
}
function t_(e) {
  Em = e;
}
function Hs(e, t) {
  const r = Om(e);
  Ei.delete(r), Ei.set(r, t), Ei.size > e_ && Ei.delete(Ei.keys().next().value);
}
function en(e, t) {
  var o;
  const r = e ? Em(e) : null;
  if (!r) return !0;
  const n = Qu(e);
  let i = Ei.get(Om(r));
  if (i)
    Hs(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((a) => Im.includes(a == null ? void 0 : a.name)))) return !0;
    Hs(r, n), i = n;
  }
  return J1[t].every((a) => i[a] === n[a]);
}
const Gs = /* @__PURE__ */ new WeakSet();
async function $c(e, t) {
  if (Gs.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && Gs.add(e), r.ok && n !== void 0 ? n : null;
}
function Fm(e, t) {
  var o, a, s, l, c;
  const r = (s = (a = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : a.extra_pnginfo) == null ? void 0 : s.workflow, { entry: n } = Am(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = n == null ? void 0 : n.inputs) != null && c.some((u) => Im.includes(u == null ? void 0 : u.name))) ? null : { output: i, inputs: Q1(r, t) };
}
const fs = /* @__PURE__ */ new Map();
function n_(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && fs.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await $c(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const a = Fm(i, o);
        a && Hs(a.output, a.inputs);
      }
    });
}
const r_ = 5;
function i_(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${r_}`, n = $c(e, `/jobs?${r}`).then((a) => (a == null ? void 0 : a.jobs) || []), i = /* @__PURE__ */ new Map(), o = (a) => (i.has(a) || i.set(a, $c(e, `/jobs/${encodeURIComponent(a)}`)), i.get(a));
  return {
    async lastNodeOutput(a, s) {
      var c, u, d, f;
      const l = String(a.id);
      for (const { id: h } of await n) {
        if (!s()) return null;
        const g = await o(h);
        if ((c = g == null ? void 0 : g.outputs) != null && c[l])
          return ((f = (d = (u = g.workflow) == null ? void 0 : u.prompt) == null ? void 0 : d[l]) == null ? void 0 : f.class_type) !== a.comfyClass ? null : Fm(g, l);
      }
      return null;
    }
  };
}
function o_(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, a;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((a = i.changeTracker) == null ? void 0 : a.nodeOutputs);
  });
}
let Mi = null;
async function a_(e, t, r) {
  var s;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || Gs.has(r) || (s = fs.get(i)) != null && s.has(n) || o_(t)) return null;
  (Mi == null ? void 0 : Mi.workflowId) !== i && (Mi = { workflowId: i, history: i_(r, i) }, queueMicrotask(() => {
    Mi = null;
  }));
  const a = await Mi.history.lastNodeOutput(e, o);
  return o() ? a ? (Hs(a.output, a.inputs), t.nodeOutputs[n] = a.output, a.output) : (Gs.has(r) || fs.set(i, (fs.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function Sf(e, t, r, n = Ur) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const a = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((a == null ? void 0 : a.name) || ""));
}
const wf = /\.(mp4|webm|mov|m4v|mkv)$/i;
function ps(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return wf.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return wf.test(String((e == null ? void 0 : e.filename) || ""));
}
const ec = /* @__PURE__ */ new WeakMap();
function s_(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function zc(e) {
  return s_(e) ? (ec.has(e) || ec.set(e, Math.random().toString(36).slice(2, 10)), ec.get(e)) : "run";
}
function Tm(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function l_(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, a) => {
    for (const s of a) {
      const l = r(o, s);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, u) => u)));
    }
  };
  return i(e, t), n;
}
function ed(e, t = [], r = null) {
  var i;
  const n = typeof r == "function" ? r : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const a = [(i = e == null ? void 0 : e.ui) == null ? void 0 : i[o], e == null ? void 0 : e[o]];
    for (const s of a)
      if (Array.isArray(s))
        for (const l of s) {
          const c = n(l);
          if (c && (/\.mp4(\?|$)/i.test(c) || String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4"))
            return c;
        }
  }
  return "";
}
function c_({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: r = null
} = {}) {
  const n = ha(e, "looping-preview");
  if (!n || !t) return null;
  const i = typeof r == "function" ? r : () => {
  };
  let o = !1, a = 0;
  const s = typeof n.requestVideoFrameCallback == "function", l = () => {
    o || !s || a || n.paused || n.ended || (a = n.requestVideoFrameCallback(() => {
      a = 0, !o && (i(), l());
    }));
  }, c = () => {
    o || i();
  }, u = () => i(), d = () => {
    i(), l();
  }, f = () => i();
  let h = !1;
  const g = () => {
    h = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", c, { once: !0 }), n.addEventListener("loadeddata", c, { once: !0 }), s || n.addEventListener("timeupdate", u), n.addEventListener("play", d), n.addEventListener("pause", f), n.addEventListener("error", g), n.src = t, n.load();
  const m = () => {
    o || h || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, y = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var K, z;
      o || (o = !0, a && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(a), a = 0), n.removeEventListener("loadedmetadata", c), n.removeEventListener("loadeddata", c), n.removeEventListener("timeupdate", u), n.removeEventListener("play", d), n.removeEventListener("pause", f), n.removeEventListener("error", g), n.pause(), (K = n.removeAttribute) == null || K.call(n, "src"), (z = n.load) == null || z.call(n));
    },
    failed: () => h,
    play: m,
    pause: y,
    toggle() {
      n.paused ? m() : y();
    },
    get playing() {
      return !o && !n.paused && !n.ended;
    }
  };
}
function Zr(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function u_(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function xf(e, t, r = null) {
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
  return !n && r != null && (n = u_(e == null ? void 0 : e.graph, r)), n;
}
function d_(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function f_(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function p_(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function Dm({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (C) => {
    if (!C) return "";
    if (typeof C == "string") return String(C || "").trim();
    if (Array.isArray(C)) {
      if (C.length === 0) return "";
      if (C.length === 1) return i(C[0]);
      const U = String(C[0] || "").trim();
      if (U)
        return Zr(t, {
          filename: U,
          subfolder: String(C[1] || "").trim(),
          type: String(C[2] || "output").trim() || "output"
        });
      for (const q of C) {
        const ce = i(q);
        if (ce) return ce;
      }
      return "";
    }
    return typeof (C == null ? void 0 : C.src) == "string" && C.src ? C.src : typeof (C == null ? void 0 : C.url) == "string" && C.url ? C.url : Zr(t, C);
  }, o = (C) => {
    if (!C || typeof C != "object") return "";
    const U = String(C.type || "").trim().toLowerCase();
    if (U === "dataurl") return String(C.value || "");
    if (U !== "comfy_image") return "";
    const q = String(C.filename || "").trim();
    return q ? Zr(t, {
      filename: q,
      subfolder: String(C.subfolder || ""),
      type: String(C.storage || "input")
    }) : "";
  }, a = (C) => {
    const U = e == null ? void 0 : e.nodeOutputs;
    if (!U || C == null) return null;
    const q = String(C);
    return U instanceof Map ? U.get(C) || U.get(q) || U.get(Number(q)) || null : U[C] || U[q] || null;
  }, s = (C, U) => {
    var ce;
    const q = a(C == null ? void 0 : C.id);
    return Array.isArray((ce = q == null ? void 0 : q.ui) == null ? void 0 : ce[U]) ? q.ui[U] : Array.isArray(q == null ? void 0 : q[U]) ? q[U] : [];
  }, l = (C, U) => {
    const q = a(C == null ? void 0 : C.id);
    return q != null && q.ui && Object.prototype.hasOwnProperty.call(q.ui, U) ? q.ui[U] : q && Object.prototype.hasOwnProperty.call(q, U) ? q[U] : null;
  }, c = (C, U) => {
    const q = l(C, "pano_sticker_input_state_hash"), ce = Array.isArray(q) ? q[0] : q;
    return String(ce ?? "").trim() || p_(U);
  }, u = (C) => {
    const U = [], q = /* @__PURE__ */ new Set();
    for (const ce of C || []) {
      const $ = i(ce);
      !$ || q.has($) || (q.add($), U.push($));
    }
    return U;
  }, d = (C, U) => {
    var $;
    const q = [];
    Array.isArray(C == null ? void 0 : C.images) && C.images.length && q.push(C.images), Array.isArray(($ = C == null ? void 0 : C.ui) == null ? void 0 : $.images) && C.ui.images.length && q.push(C.ui.images);
    const ce = [];
    for (const me of q)
      U >= 0 && U < me.length && ce.push(me[U]), ce.push(...me);
    return ce;
  }, f = (C, U) => {
    var D;
    const q = String(U || "").trim();
    if (!q) return { src: "", sourceType: "", inputName: "" };
    const $ = (Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs : []).findIndex((oe) => String((oe == null ? void 0 : oe.name) || "") === q);
    if ($ < 0) return { src: "", sourceType: "", inputName: q };
    const me = C.graph ? C.getInputLink($) : null;
    if ((me == null ? void 0 : me.origin_id) == null) return { src: "", sourceType: "", inputName: q };
    const P = me.origin_id, T = xf(C, $, P);
    if (!T) return { src: "", sourceType: "", inputName: q };
    const ne = Number(me.origin_slot ?? 0);
    let Z = [];
    try {
      Z = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(T) || [] : [];
    } catch {
      Z = [];
    }
    if (Array.isArray(Z) && Z.length) {
      const oe = [];
      ne >= 0 && ne < Z.length && oe.push(Z[ne]), oe.push(...Z);
      const X = u(oe.filter((fe) => !ps(fe)));
      if (X.length)
        return { src: X[0], srcCandidates: X, sourceType: "appNodeImageUrls", inputName: q };
    }
    const le = a((T == null ? void 0 : T.id) ?? P), ae = u(d(le, ne).filter((oe) => !ps(oe))).map((oe) => `${oe}&pano_src=${zc(le)}`);
    if (ae.length)
      return { src: ae[0], srcCandidates: ae, sourceType: "nodeOutputs", inputName: q };
    const Y = Array.isArray(T == null ? void 0 : T.imgs) ? T.imgs : [];
    if (Y.length) {
      const oe = [];
      ne >= 0 && ne < Y.length && oe.push(Y[ne]), oe.push(...Y);
      const X = u(oe);
      if (X.length)
        return { src: X[0], srcCandidates: X, sourceType: "nodeImgs", inputName: q };
    }
    const S = (D = T == null ? void 0 : T.widgets) == null ? void 0 : D.find((oe) => String((oe == null ? void 0 : oe.name) || "").toLowerCase() === "image");
    if (S) {
      let oe = i(S.value);
      if (oe && !oe.includes("/") && !oe.includes(":") && (T.comfyClass === "LoadImage" || T.type === "LoadImage") && (oe = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(oe)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(oe)}&type=input&subfolder=`), oe) return { src: oe, sourceType: "widget", inputName: q };
    }
    return { src: "", sourceType: "", inputName: q };
  }, h = (C, U = []) => {
    var ce;
    const q = Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs : [];
    for (const $ of U) {
      const me = q.findIndex((Z) => String((Z == null ? void 0 : Z.name) || "") === $), P = me >= 0 && C.graph ? C.getInputLink(me) : null;
      if ((P == null ? void 0 : P.origin_id) == null) continue;
      const T = a(((ce = xf(C, me, P.origin_id)) == null ? void 0 : ce.id) ?? P.origin_id), ne = (Array.isArray(T == null ? void 0 : T.images) ? T.images : []).find(ps);
      return ne ? `${Zr(t, ne)}&pano_src=${zc(T)}` : "";
    }
    return "";
  }, g = (C, U = []) => {
    const q = Array.isArray(U) ? U : [U];
    for (const ce of q) {
      const $ = f(C, ce);
      if (String(($ == null ? void 0 : $.src) || "").trim()) return $;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, m = (C) => {
    const U = String(C || "").trim();
    if (!U) return [];
    if (d_(U)) return [U];
    const { filename: q, subfolder: ce } = f_(U);
    return q ? u([
      Zr(t, { filename: q, subfolder: ce, type: "temp" }),
      Zr(t, { filename: q, subfolder: ce, type: "output" }),
      Zr(t, { filename: q, subfolder: ce, type: "input" }),
      U
    ]) : [U];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (C) => {
      var U, q;
      try {
        (q = (U = C == null ? void 0 : C.__panoLinkedInputImageCache) == null ? void 0 : U.forEach) == null || q.call(U, (ce, $, me) => {
          var P;
          ce != null && ce.img && ((P = n == null ? void 0 : n.isImageLoadFailed) != null && P.call(n, ce.img)) && me.delete($);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (C, U) => {
      var q;
      (q = C == null ? void 0 : C.delete) == null || q.call(C, `__ui__${String(U || "")}`);
    },
    linkedValue: (C, U) => {
      var P, T, ne, Z;
      const q = String(U || ""), ce = Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs.findIndex((le) => String((le == null ? void 0 : le.name) || "") === q) : -1, $ = ce >= 0 && C.graph ? C.getInputLink(ce) : null;
      if ($) {
        const le = a($.origin_id), ae = [
          le == null ? void 0 : le.output,
          le == null ? void 0 : le.result,
          (P = le == null ? void 0 : le.data) == null ? void 0 : P.output,
          (T = le == null ? void 0 : le.data) == null ? void 0 : T.result,
          (ne = le == null ? void 0 : le.ui) == null ? void 0 : ne.output,
          (Z = le == null ? void 0 : le.ui) == null ? void 0 : Z.result
        ];
        for (const Y of ae) {
          if (!Array.isArray(Y)) continue;
          const S = Y[Number($.origin_slot || 0)];
          if (typeof S == "string" && S.trim()) return S;
        }
      }
      const me = Array.isArray(C == null ? void 0 : C.widgets) ? C.widgets.find((le) => String((le == null ? void 0 : le.name) || "") === q) : null;
      return String((me == null ? void 0 : me.value) || "");
    },
    linkedVideoFile: h,
    loadPreferredExactLinkedImage: (C, U = [], q = null, ce = "") => {
      var xe;
      const $ = Array.isArray(U) ? U : [U], me = g(C, $), T = (Array.isArray(me == null ? void 0 : me.srcCandidates) && me.srcCandidates.length ? me.srcCandidates : [me == null ? void 0 : me.src]).map((Q) => String(Q || "").trim()).filter(Boolean);
      if (!T.length) return null;
      const ne = u(T.flatMap((Q) => m(Q)));
      if (!ne.length) return null;
      C.__panoLinkedInputImageCache || (C.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const Z = String(ce || $.join("|") || "image_exact"), le = T.join(`
`), ae = C.__panoLinkedInputImageCache.get(Z);
      if (ae && ae.srcRaw === le && ae.img) return ae.img;
      const Y = r || globalThis.Image;
      if (typeof Y != "function") return null;
      const S = new Y();
      (xe = n == null ? void 0 : n.markImageLoading) == null || xe.call(n, S, le);
      const D = { srcRaw: le, resolvedSrc: "", img: S };
      C.__panoLinkedInputImageCache.set(Z, D);
      let oe = -1;
      const X = (Q) => {
        var O, J, ie;
        Q === "ready" ? (O = n == null ? void 0 : n.markImageReady) == null || O.call(n, S, le) : (J = n == null ? void 0 : n.markImageFailed) == null || J.call(n, S, le), q == null || q(S), (ie = C.setDirtyCanvas) == null || ie.call(C, !0, !0);
      }, fe = () => {
        if (oe += 1, oe >= ne.length) {
          X("failed");
          return;
        }
        D.resolvedSrc = ne[oe], S.src = D.resolvedSrc;
      };
      return S.onload = () => X("ready"), S.onerror = () => {
        if (oe + 1 < ne.length) {
          fe();
          return;
        }
        X("failed");
      }, fe(), S;
    },
    output: a,
    resolvePreferredExactLinkedSource: g,
    source: i,
    uiImage: (C, U, q, ce = null) => {
      var le, ae, Y;
      const $ = s(C, U)[0] || null, me = i($);
      if (!me) return null;
      const P = `__ui__${U}`, T = (le = q == null ? void 0 : q.get) == null ? void 0 : le.call(q, P);
      if (T && T.__panoSrc === me) return T;
      const ne = r || globalThis.Image;
      if (typeof ne != "function") return null;
      const Z = new ne();
      return Z.__panoSrc = me, (ae = n == null ? void 0 : n.markImageLoading) == null || ae.call(n, Z, me), Z.onload = () => {
        var S;
        (S = n == null ? void 0 : n.markImageReady) == null || S.call(n, Z, me), ce == null || ce(Z);
      }, Z.onerror = () => {
        var S;
        (S = n == null ? void 0 : n.markImageFailed) == null || S.call(n, Z, me), ce == null || ce(Z);
      }, Z.src = me, (Y = q == null ? void 0 : q.set) == null || Y.call(q, P, Z), Z;
    },
    uiList: s,
    uiValue: l
  };
}
const h_ = 1e-3;
function td(e, t, r, n) {
  if (!no(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const a = Math.floor(i + 0.5);
    return a >= 0 && a < n.frames ? (a + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(h_ / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function Lm(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function m_(e, t) {
  return Math.floor(e * t.fps);
}
function nd(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const kf = 4;
function rd({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(a) {
    return n.has(a) || n.set(a, e(r[a], t)), n.get(a);
  }
  return {
    picture(a, s, l, c) {
      if ((a.length !== r.length || a.some((f, h) => f !== r[h])) && (r = a, n.clear(), i = null), s === null) return null;
      const u = m_(s, l);
      for (let f = u; f < Math.min(r.length, u + kf + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < u || f > u + kf) && f !== i && n.delete(f);
      const d = n.get(u);
      return d != null && d.complete && d.naturalWidth > 0 && (i !== null && i !== u && n.delete(i), i = u), i === null ? c : n.get(i);
    }
  };
}
function Vm({
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
  const c = () => a || e(), u = () => o(r(c()));
  return {
    model: () => r(c()),
    refresh() {
      return l ? this.model() : (u(), this.model());
    },
    beginGesture() {
      return l || a ? !1 : (a = e(), s = !1, u(), !0);
    },
    updateGesture(d) {
      if (l) return !1;
      a || this.beginGesture();
      const f = t(a, d);
      return f.changed ? (a = f.state, s = !0, n(a), u(), !0) : !1;
    },
    hasGestureChanges() {
      return a != null && s;
    },
    commitGesture() {
      if (l || !a) return !1;
      const d = s;
      return d && i(a), a = null, s = !1, n(null), u(), d;
    },
    cancelGesture() {
      return l || !a ? !1 : (a = null, s = !1, n(null), u(), !0);
    },
    apply(d) {
      if (l) return !1;
      a && this.commitGesture();
      const f = t(e(), d);
      return f.changed ? (i(f.state), u(), !0) : !1;
    },
    destroy() {
      if (l) return;
      l = !0;
      const d = a != null;
      a = null, s = !1, d && n(null);
    }
  };
}
const hs = "sticker_image_1", Rm = "external_image", Xi = 0;
function ji(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function tc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Gr(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function jc(e, t = Xi) {
  return (e == null ? void 0 : e.version) !== 2 ? Gr(e) : Gr(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: hi(r, t).active,
    external: r.source.kind === "port",
    ...Wu(r, t)
  }));
}
function id(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && Gr(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function $m(e) {
  return String((e == null ? void 0 : e.id) || "") === hs || String((e == null ? void 0 : e.source_kind) || "") === Rm;
}
function od(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : $m(t);
}
const zm = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function jm(e) {
  return !$m(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(zm.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function Hm(e) {
  const t = jm(e);
  return t ? zm.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function Gm(e, t = {}) {
  var L, C, U;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((q) => String((q == null ? void 0 : q.id) || "") === hs);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const q = String(((L = e.active) == null ? void 0 : L.selected_sticker_id) || "") === hs;
    return {
      state: {
        ...e,
        stickers: r.filter((ce, $) => $ !== n),
        active: q ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), a = n >= 0 ? r[n] : null, s = !a || Number(a.source_link_id ?? -1) !== i || String(a.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), u = l > 0 && c > 0, d = Math.max(1, l), f = Math.max(1, c), h = t.pose && typeof t.pose == "object" ? t.pose : {}, g = s ? h.hFOV_deg || (a == null ? void 0 : a.hFOV_deg) || 30 : (a == null ? void 0 : a.hFOV_deg) || h.hFOV_deg || 30, m = Math.min(179, Math.max(0.1, Number(g)));
  if (!s) {
    if (!u) return { state: e, changed: !1 };
    const q = ji(m, d, f), ce = Number(((C = a == null ? void 0 : a.initial_pose) == null ? void 0 : C.hFOV_deg) ?? m), $ = ji(ce, d, f), me = Number(((U = a == null ? void 0 : a.initial_pose) == null ? void 0 : U.vFOV_deg) ?? $);
    return Math.abs(Number((a == null ? void 0 : a.vFOV_deg) || 0) - q) <= 1e-6 && Math.abs(me - $) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((P, T) => T === n ? {
          ...P,
          vFOV_deg: q,
          initial_pose: P.initial_pose && typeof P.initial_pose == "object" ? { ...P.initial_pose, vFOV_deg: $ } : P.initial_pose
        } : P)
      },
      changed: !0
    };
  }
  const y = r.reduce((q, ce) => Math.max(q, Number((ce == null ? void 0 : ce.z_index) || 0)), -1), F = {
    yaw_deg: Number(h.yaw_deg || 0),
    pitch_deg: Number(h.pitch_deg || 0),
    hFOV_deg: m,
    vFOV_deg: u ? ji(m, d, f) : Number(h.vFOV_deg || (a == null ? void 0 : a.vFOV_deg) || m),
    rot_deg: Number(h.rot_deg ?? h.roll_deg ?? 0)
  }, K = {
    ...a || {},
    id: hs,
    source_kind: Rm,
    source_link_id: i,
    source_state_hash: o,
    ...F,
    initial_pose: { ...F },
    visible: !0,
    z_index: y + 1
  }, z = n >= 0 ? r.map((q, ce) => ce === n ? K : q) : [...r, K];
  return { state: { ...e, stickers: z }, changed: !0 };
}
function Mf(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const g_ = ["IMAGE", "VIDEO"];
function Pf(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => g_.includes(r)) ? "2d" : null;
}
function y_(e, t) {
  var i, o, a, s, l, c;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((u) => (u == null ? void 0 : u.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? Pf(n.type) ?? Pf((c = (l = (s = (a = (o = e.graph).getNodeById) == null ? void 0 : a.call(o, n.origin_id)) == null ? void 0 : s.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : c.type) : null;
}
function Wm(e, { pose: t = null, image: r = null } = {}) {
  return {
    connected: Mf(e, "sticker"),
    awaitingPose: !t && (Mf(e, "sticker_state") || y_(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((r == null ? void 0 : r.naturalWidth) || (r == null ? void 0 : r.width) || 0),
    imageHeight: Number((r == null ? void 0 : r.naturalHeight) || (r == null ? void 0 : r.height) || 0)
  };
}
function Nf(e, t) {
  const r = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return Zn({ version: 2, stickers: [r] }).stickers[0];
}
function Km(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null, imageWidth: i = 0, imageHeight: o = 0 } = {}) {
  var m;
  const a = e.stickers.findIndex((y) => od(e, y)), s = a >= 0 ? e.stickers[a] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const y = ((m = e.active) == null ? void 0 : m.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((F, K) => K !== a),
        active: y ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const l = i > 0 && o > 0;
  if (s && (n == null ? void 0 : n.placement) === "world" && n.replace && s.placement === "sky") {
    const y = { ...Nf(s.id, n), clip: s.clip, visible: s.visible, locked: s.locked };
    return { state: { ...e, stickers: e.stickers.map((F, K) => K === a ? y : F) }, changed: !0 };
  }
  if (s) {
    if (!l || s.placement !== "sky") return { state: e, changed: !1 };
    const y = [s.size.value, ...s.size.keyframes.map((z) => z.value)], F = y.map((z) => ji(z.hFOV_deg, i, o));
    if (y.every((z, L) => Math.abs(z.vFOV_deg - F[L]) <= 1e-6)) return { state: e, changed: !1 };
    const K = {
      value: { ...s.size.value, vFOV_deg: F[0] },
      keyframes: s.size.keyframes.map((z, L) => ({ ...z, value: { ...z.value, vFOV_deg: F[L + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((z, L) => L === a ? { ...z, size: K } : z) },
      changed: !0
    };
  }
  if (r) return { state: e, changed: !1 };
  const c = new Set(e.stickers.map((y) => y.id));
  let u = 1;
  for (; c.has(`sticker_${u}`); ) u += 1;
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, Nf(`sticker_${u}`, n)] }, changed: !0 };
  const d = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), f = (y) => l ? ji(y, i, o) : y, h = Ku(`sticker_${u}`, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: d,
    vFOV_deg: f(d)
  }, Gr(e).reduce((y, F) => Math.max(y, F.z_index), -1) + 1), g = (n == null ? void 0 : n.keyframes) ?? {};
  return h.direction.keyframes = g.direction ?? [], h.roll.keyframes = g.roll ?? [], h.size.keyframes = (g.size ?? []).map((y) => ({ ...y, value: { ...y.value, vFOV_deg: f(y.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, h] }, changed: !0 };
}
function ad(e) {
  const t = Gr(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: tc(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: tc(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: tc(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, a) => o.z_index - a.z_index);
}
function Bm(e) {
  const t = id(e), r = od(e, t), n = Gr(e).some((s) => s && s.visible !== !1), i = ad(e), o = t ? i.findIndex((s) => s.type === "sticker" && s.item === t) : -1, a = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: Hm(t),
    selectedId: t ? String(t.id || "") : null,
    locked: a,
    canDelete: !!t && !a,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function b_(e) {
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
function Cf(e, t) {
  const r = id(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = b_(e), i = String(r.id || ""), o = ad(n), a = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (a < 0) return { state: e, changed: !1 };
  if (t === "front" && a === o.length - 1 || t === "back" && a === 0)
    return { state: e, changed: !1 };
  const [s] = o.splice(a, 1);
  return t === "front" ? o.push(s) : o.unshift(s), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: n, changed: !0 };
}
function v_(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function __(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Gm(e, t.value);
  if (t.type === "sync-port") return Km(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), a = String(i.assetId || "").trim();
    if (!o || !a || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = ad(e).reduce((f, h) => Math.max(f, Number(h.z_index || 0)), -1), c = 30, u = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: c,
      vFOV_deg: ji(c, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, Ku(o, cs(i.asset), u, l + 1)],
          active: { ...e.active || {}, selected_sticker_id: o }
        },
        changed: !0
      };
    const d = { id: o, asset_id: a, ...u, z_index: l + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [a]: i.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], d],
        active: { ...e.active || {}, selected_sticker_id: o }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const i = String(t.id || "");
    return !i || !Gr(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = id(e);
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
    const i = jm(r);
    return !i || !Hm(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Cf(e, "front");
  if (t.type === "send-back") return Cf(e, "back");
  if (t.type === "delete-selected") {
    if (od(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = Gr({ ...e, stickers: i })[0], a = (o == null ? void 0 : o.id) == null ? null : String(o.id), s = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: a }
    };
    return e.version !== 2 && (s.assets = v_(s)), { state: s, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], a = e.version === 2 ? Wu(r, Xi) : r, s = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(a[l] || 0)) > 1e-12 && (s[l] = c);
    }), !Object.keys(s).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = i1(r, s);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(r);
      return Qh(c, Xi, l), { state: { ...e, stickers: e.stickers.map((u) => u === r ? c : u) }, changed: !0 };
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
function S_(e = {}) {
  return Vm({
    ...e,
    reduce: __,
    projectModel: Bm
  });
}
const Hc = 2;
function ni(e, t) {
  return Math.floor(e * t + 0.5);
}
function w_(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Um({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: a, onChange: s }) {
  let l = 0, c = !1, u = !1, d = { name: "idle" }, f = [];
  const h = () => c && !u, g = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function m() {
    for (const D of f) D();
    f = [];
  }
  function y(D, oe = {}) {
    return m(), d = { name: D, ...oe }, s(), d;
  }
  function F(D, oe, X) {
    const fe = () => {
      d === D && X();
    };
    e.addEventListener(oe, fe), f.push(() => e.removeEventListener(oe, fe));
  }
  function K(D, oe) {
    let X = t.requestFrame(function fe(xe) {
      d === D && (oe(xe), d === D && (X = t.requestFrame(fe)));
    });
    f.push(() => t.cancelFrame(X));
  }
  function z(D) {
    l = D, o(l);
  }
  function L() {
    return y(u ? "error" : "idle");
  }
  function C() {
    u = !0, L();
  }
  function U() {
    const { seekable: D } = e, oe = D != null && D.length ? D.end(D.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(oe) ? oe : 1 / 0));
  }
  function q(D) {
    if (!h()) return D === "play" ? T() : L();
    if (e.readyState < Hc) {
      const oe = y("loading", { then: D });
      return F(oe, "loadeddata", () => q(oe.then)), F(oe, "error", C), oe;
    }
    return D === "play" && l / r() >= Number(e.duration) ? T() : ce(D, !1);
  }
  function ce(D, oe) {
    const X = U();
    if (!e.ended && ni(Number(e.currentTime), r()) === ni(X, r())) return $(D);
    const fe = y("seeking", { then: D, frame: l, retried: oe });
    return F(fe, "seeked", () => {
      const xe = ni(Number(e.currentTime), r()) === ni(U(), r()), Q = l === fe.frame;
      xe || Q && fe.retried ? $(fe.then) : ce(fe.then, Q);
    }), F(fe, "error", C), e.currentTime = X, fe;
  }
  function $(D) {
    return D === "play" ? me() : (a(), L());
  }
  function me() {
    const D = y("playingVideo", { shown: !1 });
    if (F(D, "pause", () => e.ended ? P() : le()), F(D, "ended", P), F(D, "error", C), i() && ni(Number(e.duration), r()) >= n()) {
      const X = e.loop;
      e.loop = !0, f.push(() => {
        e.loop = X;
      });
    }
    const oe = (X, fe) => {
      fe && !D.shown && (D.shown = !0, s()), ne(ni(X, r()));
    };
    if (g()) {
      let X = e.requestVideoFrameCallback(function fe(xe, Q) {
        d === D && (oe(Number(Q.mediaTime), !0), d === D && (X = e.requestVideoFrameCallback(fe)));
      });
      f.push(() => {
        var fe;
        return (fe = e.cancelVideoFrameCallback) == null ? void 0 : fe.call(e, X);
      });
    } else
      K(D, () => oe(Number(e.currentTime), e.readyState >= Hc));
    return Promise.resolve(e.play()).catch(() => {
      d === D && le();
    }), D;
  }
  function P() {
    a(), T();
  }
  function T() {
    const D = y("playingClock", { startTs: t.now(), startFrame: l });
    return K(D, (oe) => ne(D.startFrame + Math.floor((oe - D.startTs) / 1e3 * r()))), D;
  }
  function ne(D) {
    if (D < n()) {
      z(D);
      return;
    }
    if (!i()) {
      Z(n() - 1);
      return;
    }
    d.name === "playingVideo" && (m(), e.pause()), z(0), q("play");
  }
  function Z(D) {
    d.name === "playingVideo" ? (m(), e.pause(), z(Math.max(0, D)), a()) : z(Math.max(0, D)), q("still");
  }
  function le() {
    if (d.name === "loading" || d.name === "seeking")
      d.then = "still", s();
    else if (d.name === "playingVideo") {
      m(), e.pause();
      const D = w_(Number(e.currentTime), r());
      z(Math.min(D, n() - 1)), a(), l === D ? L() : q("still");
    } else d.name === "playingClock" && Z(Math.min(l, n() - 1));
  }
  function ae() {
    if (!S()) {
      if (l >= n() - 1 && z(0), d.name === "loading" || d.name === "seeking") {
        d.then = "play", s();
        return;
      }
      q("play");
    }
  }
  function Y(D) {
    const oe = Math.max(0, Math.round(D));
    if (d.name === "loading" || d.name === "seeking") {
      d.then = "still", z(oe), s();
      return;
    }
    d.name === "playingVideo" && (m(), e.pause()), z(oe), q("still");
  }
  function S() {
    return d.name === "playingVideo" || d.name === "playingClock" || d.then === "play";
  }
  return {
    get frame() {
      return l;
    },
    get state() {
      return d.name;
    },
    get playing() {
      return S();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return d.name === "playingVideo" || d.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return d.name === "playingVideo" && d.shown;
    },
    play: ae,
    stop: le,
    seek: Y,
    toggle() {
      S() ? le() : ae();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(D) {
      m(), c = !!D, u = !1, q("still");
    },
    dispose() {
      m(), c = !1, d = { name: "idle" };
    }
  };
}
function sd({ video: e, onCapture: t, onChange: r }) {
  let n = "", i = !1, o = { time: null, playing: !1, fps: 1 }, a = null, s = null, l = !1;
  function c(m) {
    s = m, t();
  }
  function u(m) {
    a = m, e.currentTime = m;
  }
  function d() {
    const m = l;
    f(), l !== m && r();
  }
  function f() {
    if (!n || i || e.readyState < Hc) return;
    const { time: m, playing: y, fps: F } = o;
    if (m === null) {
      e.pause(), l = !1;
      return;
    }
    if (y) {
      if (a !== null) return;
      const K = Number(e.duration), z = Number.isFinite(K) ? Math.min(m, K) : m, L = Math.abs(Number(e.currentTime) - z) > 1.5 / F;
      if (e.ended && !L) return;
      L && u(z), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, c(NaN)), !(a !== null || s === m) && (Number(e.currentTime) === m ? c(m) : u(m));
  }
  const h = {
    loadeddata: d,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: d,
    seeked: () => {
      const m = a;
      a = null, !o.playing && m === o.time ? c(m) : d();
    },
    playing: () => {
      !o.playing || l || (l = !0, r());
    },
    error: () => {
      n && (i = !0, r());
    }
  };
  e.muted = !0;
  for (const [m, y] of Object.entries(h)) e.addEventListener(m, y);
  function g(m) {
    n = m, i = !1, a = null, s = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: m = "", time: y = null, playing: F = !1, fps: K }) {
      m !== n && (g(m), r()), o = { time: y, playing: F, fps: K }, d();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(m, y) {
      return !n || i ? y : o.time === null ? null : o.playing && l ? e : s === null ? y : m;
    },
    dispose() {
      for (const [m, y] of Object.entries(h)) e.removeEventListener(m, y);
      g("");
    }
  };
}
function Gc(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function x_({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: a, onStickerCapture: s, onChange: l, camera: c = !1 }) {
  let u = "", d = "", f = 0;
  const h = /* @__PURE__ */ new Set();
  let g = null, m = null;
  const y = () => i().timeline.fps, F = (P) => P.stickers.find((T) => T.source.kind === "port"), K = () => {
    const P = i(), T = F(P);
    return qh(P, {
      minimum: Math.round(y() * 5),
      frames: Math.max(
        u ? Math.round(f * y()) : 0,
        g && T ? Lm(T.clip, y(), g.meta) : 0
      ),
      camera: c
    });
  }, z = Um({
    video: e,
    clock: n,
    fps: y,
    span: K,
    loop: () => !0,
    onFrame: o,
    onCapture: a,
    onChange: l
  }), L = () => {
    d === u && Number.isFinite(e.duration) && (f = e.duration);
  }, C = () => {
    d && (h.add(d), l());
  }, U = sd({ video: t, onCapture: s, onChange: l }), q = rd({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", L), e.addEventListener("error", C);
  function ce(P) {
    P !== d && (d = P, e.pause(), P ? e.src = P : e.removeAttribute("src"), e.load(), z.setSource(!!P));
  }
  function $() {
    z.playing && z.stop();
  }
  function me(P) {
    const T = F(P);
    m = g && T ? td(T.clip, z.frame, P.timeline.fps, g.meta) : null, U.follow({
      src: (g == null ? void 0 : g.src) || "",
      time: m,
      playing: z.advancing,
      fps: P.timeline.fps
    });
  }
  return {
    get frame() {
      return z.frame;
    },
    get playing() {
      return z.playing;
    },
    get showsVideo() {
      return z.showsVideo;
    },
    get source() {
      return d;
    },
    pause: $,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return g;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(P, T) {
      return g != null && g.frames ? q.picture(g.frames, m, g.meta, T) : U.picture(P, T);
    },
    toggle() {
      z.playing ? z.stop() : z.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: P, sources: T, state: ne, sticker: Z = null }) {
      if (g = P ? Z : null, !P)
        return $(), ce(""), me(ne), !1;
      for (const D of h)
        T.includes(D) || h.delete(D);
      const le = T.find((D) => D && !h.has(D)) || "", ae = le !== u;
      ae && (u = le, f = 0), ce(u);
      const Y = Yh(ne, { camera: c }) || !!u && z.state !== "error" || !!g;
      return Y || $(), (ae || !Y || !z.playing && z.frame >= K()) && z.frame !== Xi && z.seek(Xi), me(ne), Y;
    },
    dispose() {
      z.dispose(), U.dispose(), e.removeEventListener("loadedmetadata", L), e.removeEventListener("error", C), e.pause(), e.removeAttribute("src"), e.load(), d = "";
    }
  };
}
const Ws = Math.PI / 180, dr = 180 / Math.PI, k_ = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), M_ = 260;
function Af(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function Ym(e, t) {
  return t ? Ym(t, e % t) : e;
}
function P_(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), a = Math.max(1, Math.round(e / o * i)), s = Math.max(1, Math.round(t / o * i)), l = Ym(a, s) || 1;
  return `${Math.round(a / l)}:${Math.round(s / l)}`;
}
function aa(e, t) {
  const r = Af(e), n = Af(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: P_(r, n) };
}
function di(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function qm(e) {
  const t = di(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Cr(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function ld(e, t, r = k_) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), c = (y, F, K) => {
    const z = y + F, L = Math.max(0, K - 1), C = z > L && z > 0 ? L / z : 1;
    return [y * C, F * C];
  }, [u, d] = c(l, a, n), [f, h] = c(o, s, i), g = {
    x: u,
    y: f,
    w: Math.max(1, n - u - d),
    h: Math.max(1, i - f - h)
  }, m = Eu(g, t);
  return {
    x: g.x + (g.w - m.width) * 0.5,
    y: g.y + (g.h - m.height) * 0.5,
    w: m.width,
    h: m.height,
    safeRect: g
  };
}
function N_(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = ld({ width: r, height: n }, 1), o = Ee(Number((e == null ? void 0 : e.fov) || 100), 1, 179), a = r / (2 * Math.tan(o * Ws * 0.5)), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = Ch(l, kh(
    { x: r * 0.5, y: n * 0.5 },
    a,
    s
  )), u = C_(c, eo(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), d = Ou({ width: i.w, height: i.h }, a);
  return {
    type: "add-frame",
    yawDeg: u.yaw,
    pitchDeg: u.pitch,
    rollDeg: u.roll,
    frameFovDeg: d.hFOV_deg
  };
}
function Xm(e) {
  return {
    yaw: $t(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * dr),
    pitch: Ee(Math.asin(Ee(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * dr, -89.9, 89.9)
  };
}
function C_(e, t) {
  const r = Xm(e), n = eo(r.yaw, r.pitch, 0), i = jl(t, e), o = {
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
    roll: hl(Math.atan2(
      jl(s, n.up),
      jl(s, n.right)
    ) * dr)
  };
}
function Jm(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = ld({ width: r, height: n }, yi(e)), o = pi(i, e), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, s = Ch(e, kh(
    a,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = Xm(s);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Ee(2 * Math.atan(r / (2 * o)) * dr, 1, 179)
  };
}
function A_(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, a = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, s = pi(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(a, i - a) * 2
  }, { halfW: c, halfH: u } = Fu(l, s), d = {
    x: o - c,
    y: a - u,
    w: c * 2,
    h: u * 2
  }, f = d.x <= 0 && d.y <= 0 && d.x + d.w >= n && d.y + d.h >= i, h = n / i, g = Math.tan(kc * Ws), m = h >= 1 ? g : g * h, y = h >= 1 ? g / h : g;
  return {
    focalPx: s,
    rect: d,
    shot: {
      ...r,
      hFOV_deg: 2 * Math.atan(c / s) * dr,
      vFOV_deg: 2 * Math.atan(u / s) * dr
    },
    fallback: f ? null : {
      rect: { x: 0, y: 0, w: n, h: i },
      shot: {
        ...r,
        hFOV_deg: 2 * Math.atan(m) * dr,
        vFOV_deg: 2 * Math.atan(y) * dr
      }
    }
  };
}
function Pi(e, t) {
  const r = di(e);
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
function I_(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const a = pi(r, e);
    return Ou(Eu(r, t), a);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: as(o, t) };
}
function If(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = aa(t, r);
  if (!o) return e;
  const a = yi(e) >= 1;
  n && o.ratio >= 1 !== a && (o = aa(o.height, o.width));
  const s = I_(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - s.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - s.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...s, aspect_id: o.label };
}
function Zm(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (di(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = Mh({
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
    const n = di(e);
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
    return Pi(e, (n) => If(
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
      const o = String(Cr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), a = o ? aa(o[1], o[2]) : aa(yi(n), 1);
      return a ? If(n, a.height, a.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? Pi(e, (i) => {
      const o = hl(n), a = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(a - o) <= 1e-12) return i;
      const s = { ...i, roll_deg: o };
      return delete s.rot_deg, s;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Pi(e, (n) => {
    const i = Ph(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? Pi(e, (n) => {
    const i = Nh(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? Pi(e, (n) => {
    const i = tg(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function Qm({
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
  }, c = {
    x: l.x + l.w * 0.5,
    y: l.y + l.h * 0.5
  }, u = Math.hypot(Number(t.x || 0) - c.x, Number(t.y || 0) - c.y);
  if (s === "shift" && u < Math.min(l.w, l.h) * a) return null;
  const d = Math.atan2(Number(t.y || 0) - c.y, Number(t.x || 0) - c.x);
  return {
    source: s,
    frame: l,
    center: c,
    startRollDeg: Number(r || 0),
    lastAngle: d,
    accumulatedRad: 0
  };
}
function eg(e, t, r = {}) {
  var a, s;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((a = e.center) == null ? void 0 : a.y) || 0),
    Number(t.x || 0) - Number(((s = e.center) == null ? void 0 : s.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + wh(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: xh(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function tg(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, a = Number(t.dy || 0) * i, s = Number(e.roll_deg ?? e.rot_deg ?? 0) * Ws, l = Math.cos(s), c = Math.sin(s), u = o / r, d = -a / r, f = u * l - d * c, h = u * c + d * l, g = Number(e.pitch_deg || 0) * Ws, m = Math.max(0.25, Math.abs(Math.cos(g)));
  return {
    ...e,
    yaw_deg: $t(Number(e.yaw_deg || 0) - Math.atan(f) / m * dr),
    pitch_deg: Ee(Number(e.pitch_deg || 0) - Math.atan(h) * dr, -90, 90)
  };
}
function E_({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return Vm({
    readState: e,
    reduce: Zm,
    projectModel: qm,
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
}), O_ = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, F_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: O_(t[2])
})), T_ = {
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
}, Ef = Object.fromEntries(
  Object.entries(T_).map(([e, t]) => [e, {
    name: t.name,
    elements: F_(t.body)
  }])
), Vt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, r = st(() => {
      const n = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Ef, n) ? Ef[n] : null;
    });
    return (n, i) => r.value ? (De(), Ve("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: ut(["icon icon-tabler icons-tabler-outline", [
        r.value.name ? `icon-tabler-${r.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (De(!0), Ve(Xe, null, St(r.value.elements, (o, a) => (De(), Ve(Xe, {
        key: `${r.value.name || e.icon || "icon"}-${o.tag}-${a}`
      }, [
        o.tag === "path" ? (De(), Ve("path", xr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (De(), Ve("circle", xr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (De(), Ve("rect", xr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (De(), Ve("line", xr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (De(), Ve("polyline", xr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (De(), Ve("polygon", xr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : dt("", !0)
      ], 64))), 128))
    ], 2)) : dt("", !0);
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
    const t = e, r = st(() => {
      const n = { ...t.attrs };
      return t.tag === "button" && n.type == null && (n.type = t.type), t.label && (n["aria-label"] = t.label), t.tip && (n["data-tip"] = t.tip), t.pressed != null && (n["aria-pressed"] = t.pressed), n;
    });
    return (n, i) => (De(), Kn(B0(e.tag), xr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: jp(() => [
        Ke(Vt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, D_ = ["aria-expanded", "disabled"], L_ = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, V_ = ["data-aspect", "disabled", "onClick"], R_ = { class: "pano-cutout-aspect-custom" }, $_ = ["disabled"], z_ = ["disabled"], j_ = ["data-custom-width", "data-custom-height", "disabled"], ng = {
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
    ]), o = /* @__PURE__ */ Ut("1"), a = /* @__PURE__ */ Ut("1"), s = /* @__PURE__ */ Ut(null), l = st(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), c = st(() => {
      const m = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], y = String(r.model.aspectLabel || "");
      return m.length ? m.map((F) => {
        const K = typeof F == "string" ? F : String((F == null ? void 0 : F.value) || ""), z = typeof F == "string" ? F : String((F == null ? void 0 : F.label) || K);
        return {
          ...typeof F == "object" && F ? F : {},
          value: K,
          label: z,
          active: y ? K === y : (F == null ? void 0 : F.active) === !0
        };
      }) : i.map((F) => ({
        ...F,
        active: F.value === y
      }));
    }), u = st(() => {
      var y;
      const m = String(r.model.aspectLabel || "").trim();
      return m || String(((y = c.value.find((F) => F.active === !0)) == null ? void 0 : y.label) || "Aspect");
    });
    li(u, (m) => {
      const y = String(m || "").match(/^([0-9.]+):([0-9.]+)$/);
      y && (o.value = y[1], a.value = y[2]);
    }, { immediate: !0 });
    function d(m) {
      n("action", m);
    }
    function f(m) {
      var y;
      r.model.aspectOpen === !0 && ((y = s.value) != null && y.contains(m.target) || d({ type: "close-aspect" }));
    }
    cl(() => {
      document.addEventListener("pointerdown", f, !0);
    }), fa(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function h(m) {
      const [y, F] = String(m.value || "").split(":");
      d({
        type: "set-aspect",
        width: y,
        height: F,
        preserveOrientation: !0
      });
    }
    function g() {
      d({
        type: "set-aspect",
        width: o.value,
        height: a.value,
        preserveOrientation: !1
      });
    }
    return (m, y) => (De(), Ve("div", {
      ref_key: "rootElement",
      ref: s,
      class: ut(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (De(), Kn(Jt, {
        key: 0,
        icon: e.model.aspectIcon || Qe(ze).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: y[0] || (y[0] = (F) => d({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (De(), Ve("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: y[1] || (y[1] = (F) => d({ type: "toggle-aspect" }))
      }, [
        Ke(Vt, {
          icon: e.model.aspectIcon || Qe(ze).aspect
        }, null, 8, ["icon"]),
        Ce("span", null, rt(u.value), 1),
        Ke(Vt, {
          icon: Qe(ze).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, D_)),
      Ir(Ce("div", L_, [
        (De(!0), Ve(Xe, null, St(c.value, (F) => (De(), Ve("button", {
          key: F.value,
          class: ut(["pano-btn pano-frame-aspect-choice", { active: F.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": F.value,
          disabled: l.value,
          onClick: (K) => h(F)
        }, rt(F.label), 11, V_))), 128)),
        Ce("div", R_, [
          Ir(Ce("input", {
            "onUpdate:modelValue": y[2] || (y[2] = (F) => o.value = F),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, $_), [
            [Qd, o.value]
          ]),
          y[4] || (y[4] = Ce("span", { "aria-hidden": "true" }, ":", -1)),
          Ir(Ce("input", {
            "onUpdate:modelValue": y[3] || (y[3] = (F) => a.value = F),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, z_), [
            [Qd, a.value]
          ]),
          Ce("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": a.value,
            disabled: l.value,
            onClick: g
          }, "Apply", 8, j_)
        ])
      ], 512), [
        [fi, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, H_ = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, G_ = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Ut(!1), r = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (n, i) => (De(), Ve("div", {
      class: ut(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = It(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = It(() => {
      }, ["stop"]))
    }, [
      Ke(Jt, {
        icon: Qe(ze).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = It((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Ce("div", H_, [
        i[3] || (i[3] = Ce("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (De(!0), Ve(Xe, null, St(Qe(r), (o) => (De(), Ve("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Ce("kbd", null, rt(o[0]), 1),
          Ce("span", null, rt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, W_ = {
  class: "pano-view-unavailable",
  role: "status"
}, cd = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (De(), Ve("div", W_, rt(Qe(Mm)), 1));
  }
}, K_ = { class: "pano-cutout-node-surface" }, B_ = ["title", "disabled"], U_ = { class: "value" }, Y_ = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, q_ = {
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
    return (n, i) => (De(), Ve("div", K_, [
      Ce("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = It(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = It(() => {
        }, ["stop"]))
      }, [
        Ce("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          Ke(Vt, {
            icon: Qe(ze).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Ce("span", { class: "label" }, "Full Editor", -1))
        ]),
        Ke(Jt, {
          icon: e.model.hasShot ? Qe(ze).delete : Qe(ze).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ke(ng, {
          model: e.model,
          mode: "node",
          onAction: r
        }, null, 8, ["model"]),
        Ce("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = It((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Ke(Vt, {
            icon: Qe(ze).roll
          }, null, 8, ["icon"]),
          Ce("span", U_, rt(e.model.rollLabel || "0.0°"), 1)
        ], 40, B_),
        Ke(Jt, {
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
        Ke(G_)
      ], 32),
      e.model.hasShot === !1 ? (De(), Ve("div", Y_, " Choose a view · + Add Frame ")) : dt("", !0),
      e.model.viewUnavailable ? (De(), Kn(cd, { key: 1 })) : dt("", !0)
    ]));
  }
}, rg = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: r }) {
    const n = r, i = /* @__PURE__ */ Ut(null);
    let o, a = !1;
    function s() {
      if (!a) return { active: !1, intent: void 0 };
      const d = o;
      return o = void 0, a = !1, { active: !0, intent: d };
    }
    function l(d) {
      const f = i.value;
      return f instanceof HTMLInputElement ? (o = d, a = !0, f.value = "", f.click(), !0) : !1;
    }
    function c(d) {
      var m, y;
      const { active: f, intent: h } = s();
      if (!f) return;
      const g = ((y = (m = d.target) == null ? void 0 : m.files) == null ? void 0 : y[0]) || null;
      if (g) {
        n("file-selected", { intent: h, file: g });
        return;
      }
      n("file-cancelled", { intent: h });
    }
    function u() {
      const { active: d, intent: f } = s();
      d && n("file-cancelled", { intent: f });
    }
    return t({ open: l }), (d, f) => (De(), Ve("input", {
      ref_key: "inputRef",
      ref: i,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: c,
      onCancel: u
    }, null, 544));
  }
}, X_ = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, J_ = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Ut(!1), r = Object.freeze([
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
    return (n, i) => (De(), Ve("div", {
      class: ut(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = It(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = It(() => {
      }, ["stop"]))
    }, [
      Ke(Jt, {
        icon: Qe(ze).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = It((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Ce("div", X_, [
        i[3] || (i[3] = Ce("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (De(!0), Ve(Xe, null, St(Qe(r), (o) => (De(), Ve("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Ce("kbd", null, rt(o[0]), 1),
          Ce("span", null, rt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Z_ = { class: "pano-stickers-node-surface" }, Q_ = ["disabled"], eS = ["aria-label", "data-tip"], tS = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, nS = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, rS = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Ut(null);
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
    return (a, s) => (De(), Ve("div", Z_, [
      Ce("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: s[5] || (s[5] = It(() => {
        }, ["stop"])),
        onWheel: s[6] || (s[6] = It(() => {
        }, ["stop"]))
      }, [
        Ce("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: s[0] || (s[0] = (l) => n({ type: "open-editor" }))
        }, [
          Ke(Vt, {
            icon: Qe(ze).fullscreen
          }, null, 8, ["icon"]),
          s[10] || (s[10] = Ce("span", { class: "label" }, "Full Editor", -1))
        ]),
        Ce("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          Ke(Vt, {
            icon: Qe(ze).image
          }, null, 8, ["icon"]),
          s[11] || (s[11] = Ce("span", { class: "label" }, "Add Image", -1))
        ], 8, Q_),
        Ke(Jt, {
          icon: e.model.locked ? Qe(ze).lock_closed : Qe(ze).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: s[1] || (s[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Ke(Jt, {
          icon: Qe(ze).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: s[2] || (s[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Ke(Jt, {
          icon: Qe(ze).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: s[3] || (s[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Ke(Jt, {
          icon: e.model.isExternalSelection ? Qe(ze).back_initial : Qe(ze).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: s[4] || (s[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ke(J_)
      ], 32),
      e.model.playable === !0 ? (De(), Ve("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: s[7] || (s[7] = It(() => {
        }, ["stop"])),
        onWheel: s[8] || (s[8] = It(() => {
        }, ["stop"])),
        onClick: s[9] || (s[9] = (l) => n({ type: "toggle-playback" }))
      }, [
        Ke(Vt, {
          icon: e.model.playing ? Qe(ze).pause : Qe(ze).play
        }, null, 8, ["icon"])
      ], 40, eS)) : dt("", !0),
      e.model.hasStickers === !1 ? (De(), Ve("div", tS, " Add Image to place a sticker ")) : dt("", !0),
      e.model.dropActive === !0 ? (De(), Ve("div", nS, "Drop image to add")) : dt("", !0),
      Ke(rg, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (De(), Kn(cd, { key: 3 })) : dt("", !0)
    ]));
  }
}, Of = 24;
function iS(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Ko(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function ig(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], a = t[i];
    o.y > e.y != a.y > e.y && e.x < (a.x - o.x) * (e.y - o.y) / (a.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function Wc(e, t) {
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
  return Ko(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : ig(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function oS(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
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
  return Ko(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : ig(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function ud(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function og(e, t, { accent: r = "#0070f3" } = {}) {
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
function aS(e) {
  const t = eo(
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
function Qr(e, t, r) {
  return Iu(As(
    As(e.centerDir, Is(e.right, t)),
    Is(e.up, r)
  ));
}
function dd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = aS(e), n = ko(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    Qr(r, -r.tanX, r.tanY),
    Qr(r, r.tanX, r.tanY),
    Qr(r, r.tanX, -r.tanY),
    Qr(r, -r.tanX, -r.tanY)
  ].map((f) => ko(f, t)), o = Array.from({ length: 4 }, (f, h) => {
    const g = [];
    for (let m = 0; m <= 28; m += 1) {
      const y = m / 28;
      let F, K;
      h === 0 ? (F = -r.tanX + 2 * r.tanX * y, K = r.tanY) : h === 1 ? (F = r.tanX, K = r.tanY - 2 * r.tanY * y) : h === 2 ? (F = r.tanX - 2 * r.tanX * y, K = -r.tanY) : (F = -r.tanX, K = -r.tanY + 2 * r.tanY * y);
      const z = ko(Qr(r, F, K), t);
      z && g.push({ x: z.x, y: z.y });
    }
    return g;
  }), a = ko(Qr(r, 0, r.tanY), t), s = ko(
    Qr(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t
  ), l = [n, ...i, a, s];
  if (l.some((f) => !f || !Number.isFinite(f.x) || !Number.isFinite(f.y)))
    return { visible: !1 };
  if (!l.some((f) => f.rawZ > 1e-4)) return { visible: !1 };
  const c = s.x - a.x, u = s.y - a.y, d = Math.hypot(c, u) || 1;
  return {
    center: { x: n.x, y: n.y },
    corners: i.map((f) => ({ x: f.x, y: f.y })),
    boundaryEdges: o,
    rotateStemBase: { x: a.x, y: a.y },
    rotateHandle: {
      x: a.x + c / d * Of,
      y: a.y + u / d * Of
    },
    visible: !0
  };
}
function Ff(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((a) => a && a.visible !== !1).map((a) => ({ item: a, geometry: dd(a, n) })).filter((a) => a.geometry.visible).sort((a, s) => {
    var l, c;
    return Number(((l = s.item) == null ? void 0 : l.z_index) || 0) - Number(((c = a.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((a) => {
    var s;
    return String(((s = a.item) == null ? void 0 : s.id) || "") === String(t || "");
  });
  if (o) {
    const a = Wc(o.geometry, r);
    if (a.kind === "scale" || a.kind === "rotate") return { ...o, hit: a };
  }
  for (const a of i) {
    const s = Wc(a.geometry, r);
    if (s.kind !== "none") return { ...a, hit: s };
  }
  return null;
}
function sS(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: $t(Math.atan2(n.x, n.z) * Zt),
    pitch_deg: Math.asin(Ee(n.y, -1, 1)) * Zt
  };
}
function lS(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Ee(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Ee(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function cS(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * Zt;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let Ua = null;
function fd() {
  return Ua || (Ua = new Promise((e) => {
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
  }), Ua);
}
function zn(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function uS(e, t = 1024) {
  const r = Math.max(1, Math.round(zn(e, 2048))), n = Math.min(r, Math.max(1, Math.round(zn(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function dS(e, t, r) {
  const n = zn(t), i = zn(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const a = zn(o.u0), s = zn(o.v0), l = zn(o.u1), c = zn(o.v1);
  if (l <= a || c <= s) return null;
  const u = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((a + l) * 0.5 + zn(u.du)) * n,
    centerY: ((s + c) * 0.5 + zn(u.dv)) * i,
    width: (l - a) * n,
    height: (c - s) * i,
    rotationRad: zn(u.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, zn(u.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function fS(e, t, r) {
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
function pS() {
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
    const c = () => {
      s.settled = !0;
      const u = [...s.listeners];
      s.listeners.clear(), u.forEach((d) => d()), r();
    };
    return l.onload = c, l.onerror = c, l.src = o, r(), l;
  }
  function i(o, a, s, l = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const c = String(o.rasterDataUrl || "").trim(), u = dS(o, a, s);
    if (!c.startsWith("data:") || !u) return null;
    const d = fS(o, a, s), f = String((o == null ? void 0 : o.id) || "").trim() || d, h = t.get(f);
    if ((h == null ? void 0 : h.revision) === d) return { source: h.source, revision: d };
    const g = n(c, l), m = Number(g.naturalWidth || g.width || 0), y = Number(g.naturalHeight || g.height || 0);
    if (!g.complete || m < 1 || y < 1) return null;
    const F = nn({ label: "raster-object" });
    F.width = Math.max(1, Math.round(a)), F.height = Math.max(1, Math.round(s));
    const K = F.getContext("2d");
    return K ? (u.wrapOffsets.forEach((z) => {
      K.save(), K.translate(u.centerX + z, u.centerY), K.rotate(u.rotationRad), K.scale(u.scale, u.scale), K.drawImage(
        g,
        -u.width * 0.5,
        -u.height * 0.5,
        u.width,
        u.height
      ), K.restore();
    }), t.set(f, { revision: d, source: F }), { source: F, revision: d }) : null;
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
function hS(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function mS(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function gS({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(d) {
    if (!d) return;
    d.entry.listeners.delete(d);
    const f = n.get(d.owner);
    (f == null ? void 0 : f.get(d.key)) === d && f.delete(d.key);
  }
  function a(d, f, h, g) {
    if (!d || typeof g != "function" || h.settled) return;
    let m = n.get(d);
    m || (m = /* @__PURE__ */ new Map(), n.set(d, m));
    const y = m.get(f);
    if ((y == null ? void 0 : y.entry) === h) {
      y.callback = g;
      return;
    }
    o(y);
    const F = { owner: d, key: f, entry: h, callback: g };
    m.set(f, F), h.listeners.add(F);
  }
  function s(d, f) {
    d.settled || (d.settled = !0, d.image.onload = null, d.image.onerror = null, !f && r.get(d.key) === d && r.delete(d.key), [...d.listeners].forEach((h) => {
      o(h);
      try {
        h.callback(d.image, f);
      } catch {
      }
    }), l(i));
  }
  function l(d) {
    if (!(r.size <= d))
      for (const [f, h] of r) {
        if (r.size <= d) break;
        !h.settled || h.listeners.size > 0 || (h.image.onload = null, h.image.onerror = null, r.delete(f));
      }
  }
  function c(d, f, h, g = null) {
    const m = String(f || ""), y = String(h || "");
    if (!m || !y) return null;
    let F = r.get(m);
    if (F)
      r.delete(m), r.set(m, F);
    else {
      l(i - 1);
      const z = e || globalThis.Image;
      if (typeof z != "function") return null;
      const L = new z();
      F = { key: m, image: L, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(m, F), L.onload = () => s(F, !0), L.onerror = () => s(F, !1), L.src = y;
    }
    return F.settled || F.image.complete && Number(F.image.naturalWidth || F.image.width || 0) > 0 || a(d, m, F, g), F.image;
  }
  function u(d) {
    const f = n.get(d);
    f && ([...f.values()].forEach(o), n.delete(d), l(i));
  }
  return { get: c, disposeOwner: u };
}
const Io = /* @__PURE__ */ new WeakMap();
function ag(e, t, { editor: r = !1 } = {}) {
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
function Er(e, ...t) {
  const r = Io.get(e), n = (r == null ? void 0 : r.findLast((i) => i.editor)) || (r == null ? void 0 : r.at(-1));
  return n ? (n.handler(...t), !0) : !1;
}
const ms = Object.freeze({
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
}), sg = "PanoramaSuite.Editor.ViewControls", yS = {
  id: sg,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(ms).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function bS(e) {
  return Object.hasOwn(ms, e) ? ms[e] : ms.default;
}
function vS(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const a = e.bindings.find((s) => s.button === t && !!s.shift === r && !!s.alt === n);
  return (a == null ? void 0 : a.action) ?? null;
}
function _S(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const Ks = "state_json";
function Ar(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function SS(e) {
  var a, s;
  const t = Ar(e, Ks);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = Jh(r, {
    coverage: (a = Ar(e, "coverage")) == null ? void 0 : a.value
  }), i = Zm(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (s = t.callback) == null || s.call(t, o), !0;
}
function pd(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const r = Ar(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, s, l, c, u, d, f, h, g;
    const o = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (s = (a = e.__panoPreviewNodeRuntime) == null ? void 0 : a.requestDraw) == null || s.call(a), (c = (l = e.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || c.call(l), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (f = (d = e.graph) == null ? void 0 : d.setDirtyCanvas) == null || f.call(d, !0, !0), (g = (h = t == null ? void 0 : t.canvas) == null ? void 0 : h.setDirty) == null || g.call(h, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function wS(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Tf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function xS(e) {
  var u, d, f, h, g, m;
  if (!e) return;
  const t = Ar(e, "coverage"), r = Ar(e, "bg_color"), n = Ar(e, Ks), i = Ar(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), a = String(r.value ?? "").trim(), s = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && wS(o) && (Tf(a) || a === ""))) return;
  let c = "360";
  if (Tf(a))
    try {
      c = String(vn((u = JSON.parse(a)) == null ? void 0 : u.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (d = t.callback) == null || d.call(t, c), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = a, (h = n.callback) == null || h.call(n, a), i && (i.value = s, (g = i.callback) == null || g.call(i, s)), (m = e.setDirtyCanvas) == null || m.call(e, !0, !0);
}
function gs(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, a;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (a = n.parentEl) != null && a.style && (n.parentEl.style.display = "none")));
  });
}
function Kc(e, t, r) {
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
async function kS(e, { tolerateOperationFailure: t = !1 } = {}) {
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
    var l, c;
    ((c = (l = e.__panoPendingStickerUploads) == null ? void 0 : l.get) == null ? void 0 : c.call(l, t)) === o && e.__panoPendingStickerUploads.delete(t);
  };
  return o.then(s, s), a.then(() => {
    e.__panoStickerOperationTail === a && (e.__panoStickerOperationTail = null);
  }), o;
}
async function lg(e, t = {}) {
  var n;
  await kS(e, t);
  const r = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const i of r) await i();
  await ((n = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : n.call(e));
}
function MS(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await lg(e), r ? r.apply(this, n) : this.value;
  };
}
function PS(e) {
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
function NS(e) {
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
  studio: c = !1
}) {
  if (!(e != null && e.prototype)) return;
  function u(d) {
    var g;
    const f = `editor_btn|${r}`;
    if (d.__panoPreviewAttached === !0 && d.__panoPreviewMountKey === f) return;
    PS(d), pd(d, t), gs(d, Ks);
    const h = Ar(d, Ks);
    if (MS(d, h), h && !h.__panoPreviewPatchedCb) {
      h.__panoPreviewPatchedCb = !0;
      const m = h.callback;
      h.callback = (y) => {
        var K;
        const F = m ? m(y) : void 0;
        return (K = d.setDirtyCanvas) == null || K.call(d, !0, !1), F;
      };
    }
    if (r === "PanoramaStickers") {
      d.__panoSceneStateV2 = l, d.__panoStudio = c;
      const m = Ar(d, "bg_color");
      !l && m && (m.value == null || String(m.value).trim() === "" || String(m.value).toLowerCase() === "#000000") && (m.value = "#00ff00", (g = m.callback) == null || g.call(m, "#00ff00")), Kc(d, n, () => i(d, "stickers")), s && (o(d, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(d, "stickers")
      }), d.__panoStickersNodeSurface && gs(d, n), (!Array.isArray(d.size) || d.size[0] < 10 || d.size[1] < 10) && (d.size = [360, 260])), d.__panoPreviewAttached = !0, d.__panoPreviewMountKey = f;
      return;
    }
    d.__panoSceneStateV2 = l, Kc(d, n, () => i(d, "cutout")), l || a(d, {
      buttonText: n,
      onOpen: () => i(d, "cutout")
    }), d.__panoCutoutNodeSurface && gs(d, n), (!Array.isArray(d.size) || d.size[0] < 10 || d.size[1] < 10) && (d.size = [360, 260]), d.__panoPreviewAttached = !0, d.__panoPreviewMountKey = f;
  }
  for (const d of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[d];
    e.prototype[d] = function() {
      const h = f ? f.apply(this, arguments) : void 0;
      d === "onNodeCreated" && r === "PanoramaCutout" && !l && SS(this), d === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && xS(this);
      const g = !!this.__panoPreviewAttached;
      return (d === "onNodeCreated" || this.widgets) && u(this), d === "onAdded" && g && Er(this, "attach"), h;
    };
  }
}
function CS(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return NS(this), n;
  };
}
function AS(e, {
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
    pd(e, t);
    const l = (c = e) => r(c, "stickers", { readOnly: !0, hideSidebar: !1 });
    Kc(e, "Open Preview", () => l(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: l
    }), e.__panoPreviewNodeSurface && gs(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  i(o);
}
function IS({
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
    settings: [yS, _b],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [rf],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [rf.id] }],
    beforeRegisterNodeDef(l, c) {
      const u = String((c == null ? void 0 : c.name) || "");
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
      }), Es(u) && CS(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      l.__panoPreviewAttached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      pd(l, e), Es(c) && AS(l, { app: e, openEditor: t, attachPreview: i, requestFrame: a });
    }
  };
}
const ES = /\.(png|jpe?g|webp|gif|bmp)$/i;
function qn(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : ES.test(String(e.name || "")) : !1;
}
function hd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => qn(r)) : !1;
}
function OS(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var c, u, d;
    (c = l == null ? void 0 : l.preventDefault) == null || c.call(l), (u = l == null ? void 0 : l.stopPropagation) == null || u.call(l), (d = l == null ? void 0 : l.stopImmediatePropagation) == null || d.call(l);
  }, o = (l) => {
    if (hd(l == null ? void 0 : l.dataTransfer)) {
      i(l);
      try {
        l.dataTransfer.dropEffect = "copy";
      } catch {
      }
      r(!0);
    }
  }, a = (l) => {
    var c;
    l != null && l.relatedTarget && ((c = e.contains) != null && c.call(e, l.relatedTarget)) || r(!1);
  }, s = (l) => {
    var u;
    const c = Array.from(((u = l == null ? void 0 : l.dataTransfer) == null ? void 0 : u.files) || []).find((d) => qn(d));
    if (!c) {
      r(!1);
      return;
    }
    i(l), r(!1), n(c);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", a, !0), e.addEventListener("drop", s, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", a, !0), e.removeEventListener("drop", s, !0), r(!1);
  };
}
async function Oo(e, t = {}) {
  var a, s, l, c;
  if (!qn(e)) throw new TypeError("A supported image file is required.");
  const r = t.ImageCtor || globalThis.Image, n = t.createObjectURL || ((s = (a = globalThis.URL) == null ? void 0 : a.createObjectURL) == null ? void 0 : s.bind(globalThis.URL)), i = t.revokeObjectURL || ((c = (l = globalThis.URL) == null ? void 0 : l.revokeObjectURL) == null ? void 0 : c.bind(globalThis.URL));
  if (typeof r != "function" || typeof n != "function")
    throw new Error("Image decoding is unavailable.");
  const o = n(e);
  try {
    const u = await new Promise((d, f) => {
      const h = new r();
      h.onload = () => d(h), h.onerror = () => f(new Error("image load failed")), h.src = o;
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
async function ri(e, { fetchApi: t } = {}) {
  if (!qn(e)) throw new TypeError("A supported image file is required.");
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
const Df = /* @__PURE__ */ new WeakSet(), Lf = /* @__PURE__ */ new WeakSet();
let Vf = 0;
function Bc(e) {
  if (!e || typeof e != "object" || Lf.has(e)) return e;
  const t = String(e.type || "preview");
  return Vf += 1, e.type = `${t}:pano-${Vf}`, Lf.add(e), e;
}
function Bs(e) {
  if (!e || typeof e != "object" || Df.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, Df.add(e), e;
}
function cg(e, t) {
  var n, i;
  if (!t || ((i = (n = Bs(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function FS({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const c = i;
    i = null, o || r == null || r(c);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: Rt } = es;
t_((e) => Wr(e.id));
n_(dn);
const md = gS(), { linkedVideoFile: TS } = Dm({ app: Rt, api: dn });
function Uc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (es == null ? void 0 : es.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const DS = "pano_suite.ui_settings.v1", LS = 120, VS = 2048;
function Rf() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(DS)) || "").trim();
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
function RS() {
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
function $S() {
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
function Yc(e) {
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
function ug(e) {
  const t = Yc(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function zS(e, t, r) {
  ug(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function qc(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function gd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function dg(e) {
  return Es(gd(e));
}
function $f(e = null) {
  var o, a;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((a = (o = Rt == null ? void 0 : Rt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : a.name) || "");
  return [t, n, r, i].join("|");
}
function fg(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(r = {}) {
      const n = String(r.mode || "stickers") === "cutout" ? "cutout" : "stickers", i = "dom", o = qc(e);
      this.activeBackend = o;
      const a = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", s = e.__panoPreviewNoPreview === !0, l = r.noPreview === !0;
      if (o === i && o !== "none" && a === n && s === l) {
        e.__panoAttachOptions = { ...r, mode: n }, e.__panoPreviewMode = n, e.__panoPreviewNoPreview = l, e.__panoPreviewButtonText = String(r.buttonText || (n === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof r.onOpen == "function" ? r.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && ys(e), Ew(e, { ...r, mode: n, __panoForcedPath: i }), this.activeBackend = qc(e);
    },
    rebind(r = {}) {
      const n = String(r.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      ys(e), this.activeBackend = "none", this.attach({ ...r, mode: n });
    },
    teardown() {
      ys(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function jS(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function ys(e, t = {}) {
  var n, i, o, a, s;
  if (!e) return;
  Xc.unregister(e), jS(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
    Array.isArray(e.widgets) && e.widgets.filter((c) => {
      if (c === (r == null ? void 0 : r.widget)) return !0;
      const u = String((c == null ? void 0 : c.name) || ""), d = String((c == null ? void 0 : c.type) || ""), f = Uc();
      return u === f || d === f || u === "pano_preview" || d === "pano_preview" ? !0 : u === "preview" && d === "pano_preview";
    }).forEach((c) => lw(e, c));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function HS(e, t = "#00ff00") {
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
function GS(e) {
  var r;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((r = Hi(e, "state_json")) == null ? void 0 : r.value) || "");
}
function wn(e) {
  var s, l;
  const t = GS(e), r = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), n = String(((s = Hi(e, "bg_color")) == null ? void 0 : s.value) || "#1a1a1e"), i = Number(((l = Hi(e, "coverage")) == null ? void 0 : l.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === r && o.bg === n && o.coverage === i)
    return o.parsed;
  const a = e.__panoSceneStateV2 && typeof t == "string" ? Zh(t, { backgroundColor: n, coverage: i, active: tm(e) }) : HS(t, n);
  return a.coverage = i, e.__panoStateCache = { source: t, liveVersion: r, bg: n, coverage: i, parsed: a }, a;
}
function Hi(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function WS(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function pg(e, t, r = null) {
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
  return !n && r != null && (n = WS(e == null ? void 0 : e.graph, r)), n;
}
function KS(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function hg(e, t = []) {
  const r = KS(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    Ur.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function zf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function Us(e, t) {
  const r = zf(e), n = zf(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function BS(e, t) {
  var r;
  return pg(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function US(e, t = Ur) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = hg(e, t).map((s) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(s))).filter((s) => s >= 0), o = r.map((s, l) => ({ input: s, idx: l })).filter(({ input: s }) => String((s == null ? void 0 : s.type) || "").toUpperCase() === "IMAGE").map(({ idx: s }) => s), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  return l_(e, a, BS);
}
const Xc = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = dn) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, u, d, f;
        if (!o) return;
        const a = Us(n, o == null ? void 0 : o.id);
        String(o.__panoPreviewMode || "") === "cutout" && !a || !a && ![...US(o)].some((h) => Us(n, h)) || Tm(o.__panoExecutedOutputs ?? (o.__panoExecutedOutputs = /* @__PURE__ */ new Map()), n, r.output) || (mg(o), (c = (l = o.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || c.call(l), (u = o.setDirtyCanvas) == null || u.call(o, !0, !0), (f = (d = o.graph) == null ? void 0 : d.setDirtyCanvas) == null || f.call(d, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
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
function Ys(e) {
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
  return typeof ((o = dn) == null ? void 0 : o.apiURL) == "function" ? dn.apiURL(i) : i;
}
function YS(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function qS(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function XS(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function JS(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (YS(t)) return [t];
  const { filename: r, subfolder: n } = qS(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => Ys({
    filename: r,
    subfolder: n,
    type: o
  }));
  return XS([...i, t]);
}
function ZS(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? Ys({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Wr(e) {
  const t = Rt == null ? void 0 : Rt.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Us(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const a of o)
      if (Us(a, i)) return t[a];
  }
  return null;
}
function Bo(e, t, r = null) {
  const n = r || Wr(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
}
function Dn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Dn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return Ys({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = Dn(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Ys(e);
}
function qs(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function nc(e) {
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
function yd(e, t) {
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
function QS(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((a) => t.push(a));
  }, i = (o, a = 0) => {
    !o || a > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, a + 1), i(o.ui, a + 1), i(o.data, a + 1), i(o.result, a + 1));
  };
  return i(e, 0), t;
}
function ew(e, t) {
  try {
    e.__panoOwnOutputRev = hS(e.__panoOwnOutputRev);
    const r = QS(t);
    let n = "";
    for (const i of r)
      if (n = Dn(i), n) break;
    n ? (e.__panoOwnOutputSrc = String(n || ""), yd(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Gi(e) {
  var t;
  (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null || t.player.destroy(), e && (e.__panoOwnOutputVideoCache = null);
}
function tw(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!en(e, "background"))
    return Gi(e), null;
  const i = Wr(n), o = ed(i, t, Dn);
  if (!o)
    return Gi(e), null;
  const a = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), s = yd(o, a), l = `${t.join("|")}:${s}`, c = e.__panoOwnOutputVideoCache;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  Gi(e);
  const u = c_({
    documentRef: document,
    src: s,
    onFrame: r
  });
  return u ? (e.__panoOwnOutputVideoCache = { key: l, player: u }, u.video) : null;
}
function nw(e, t = []) {
  var c, u;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = hg(e, t).map((d) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(d))).filter((d) => d >= 0), o = r.map((d, f) => ({ input: d, idx: f })).filter(({ input: d }) => String((d == null ? void 0 : d.type) || "").toUpperCase() === "IMAGE").map(({ idx: d }) => d), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const d of a) {
    const f = r[d], h = e.graph ? e.getInputLink(d) : null;
    if ((h == null ? void 0 : h.origin_id) == null) continue;
    const g = h.origin_id, m = pg(e, d, g);
    if (!m) continue;
    const y = Number(h.origin_slot ?? 0), F = Wr((m == null ? void 0 : m.id) ?? g), K = Array.isArray(F == null ? void 0 : F.images) ? F.images : [];
    if (K.length) {
      const U = [];
      y >= 0 && y < K.length && U.push(K[y]), U.push(...K);
      for (const q of U.filter((ce) => !ps(ce))) {
        const ce = Dn(q);
        if (ce)
          return String((f == null ? void 0 : f.name) || ""), { src: `${ce}&pano_src=${zc(F)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let z = [];
    try {
      z = typeof (Rt == null ? void 0 : Rt.getNodeImageUrls) == "function" ? Rt.getNodeImageUrls(m) || [] : [];
    } catch {
      z = [];
    }
    if (Array.isArray(z) && z.length) {
      const U = [];
      y >= 0 && y < z.length && U.push(z[y]), U.push(...z);
      for (const q of U) {
        const ce = Dn(q);
        if (ce)
          return String((f == null ? void 0 : f.name) || ""), { src: ce, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const L = Array.isArray(m == null ? void 0 : m.imgs) ? m.imgs : [];
    if (L.length) {
      const U = [];
      y >= 0 && y < L.length && U.push(L[y]), U.push(...L);
      for (const q of U) {
        const ce = Dn(q);
        if (ce)
          return String((f == null ? void 0 : f.name) || ""), { src: ce, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const C = (c = m == null ? void 0 : m.widgets) == null ? void 0 : c.find((U) => String((U == null ? void 0 : U.name) || "").toLowerCase() === "image");
    if (C) {
      let U = Dn(C.value);
      if (U && !U.includes("/") && !U.includes(":") && (m.comfyClass === "LoadImage" || m.type === "LoadImage") && (U = dn.apiURL(`/view?filename=${encodeURIComponent(U)}&type=input&subfolder=`)), U)
        return String((f == null ? void 0 : f.name) || ""), { src: U, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const s = en(e, "background") ? Wr(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(s == null ? void 0 : s.pano_input_images) && l.push(...s.pano_input_images), Array.isArray((u = s == null ? void 0 : s.ui) == null ? void 0 : u.pano_input_images) && l.push(...s.ui.pano_input_images), l.length > 0)
    for (const d of l) {
      const f = Dn(d);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function rw(e, t = [], r = {}) {
  const n = nw(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = JS(i);
  if (!o.length) return null;
  const a = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = t.join("|") || "image", l = e.__panoLinkedInputImageCache.get(s);
  if (l && l.srcRaw === i && l.img) return l.img;
  if (l && l.pendingSrcRaw === i && l.pendingImg)
    return a && l.img && (l.img.complete || l.img.naturalWidth || l.img.width) ? l.img : l.pendingImg;
  const c = new Image(), u = l || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  u.pendingSrcRaw = i, u.pendingResolvedSrc = "", u.pendingImg = c, e.__panoLinkedInputImageCache.set(s, u);
  let d = -1;
  const f = () => {
    var g, m, y, F;
    if (d += 1, d >= o.length) {
      if (((m = (g = e.__panoLinkedInputImageCache) == null ? void 0 : g.get) == null ? void 0 : m.call(g, s)) === u && u.pendingImg === c && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, !u.img))
        try {
          (F = (y = e.__panoLinkedInputImageCache) == null ? void 0 : y.delete) == null || F.call(y, s);
        } catch {
        }
      String((n == null ? void 0 : n.sourceType) || ""), o.length;
      return;
    }
    const h = o[d];
    u.pendingResolvedSrc = h, c.src = h;
  };
  return c.onload = () => {
    var h, g, m;
    ((g = (h = e.__panoLinkedInputImageCache) == null ? void 0 : h.get) == null ? void 0 : g.call(h, s)) === u && u.pendingImg === c && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || c.src || ""), u.img = c, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || c.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (m = e.setDirtyCanvas) == null || m.call(e, !0, !0);
  }, c.onerror = (h) => {
    var g, m, y, F;
    if (d + 1 < o.length) {
      f();
      return;
    }
    if (((m = (g = e.__panoLinkedInputImageCache) == null ? void 0 : g.get) == null ? void 0 : m.call(g, s)) === u && u.pendingImg === c && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, !u.img))
      try {
        (F = (y = e.__panoLinkedInputImageCache) == null ? void 0 : y.delete) == null || F.call(y, s);
      } catch {
      }
    String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((h == null ? void 0 : h.type) || "error");
  }, f(), a && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : c;
}
function iw(e, t = [], r = null, n = {}) {
  const i = rw(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function mg(e) {
  var t, r;
  if (e) {
    md.disposeOwner(e);
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Gi(e), e.__panoWrappedErpCache = null;
  }
}
function ow(e) {
  var t, r;
  if (e) {
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Gi(e), e.__panoWrappedErpCache = null;
  }
}
function gg(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const r = e.__panoRenderCache, n = String(t || "");
  return r.mode !== n && (r.mode = n, r.isLoading = !1, r.loadingSinceTs = 0), r;
}
function Ya(e, t, r = "") {
  const n = gg(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < LS ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function jf(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), a = r / i, s = n / o, l = Math.min(a, s);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function aw(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), a = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || a <= 0) return;
  const s = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), c = Math.max(Math.round(34 * r), s + Math.round(14 * r)), u = n + (o - l) * 0.5, d = i + (a - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(u, d, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", u + l * 0.5, d + c * 0.5 + 0.5), e.restore();
}
function rc(e, t) {
  var n;
  const r = (n = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : n.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function sw(e) {
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
function lw(e, t) {
  return cg(e, t);
}
function sa(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = ZS(r);
  if (!o && (n != null && n.external)) {
    if (!en(e, "external-sticker")) return null;
    const h = Wr(e == null ? void 0 : e.id), g = ((f = h == null ? void 0 : h.ui) == null ? void 0 : f.pano_sticker_input_images) || (h == null ? void 0 : h.pano_sticker_input_images) || [];
    for (const m of Array.isArray(g) ? g : [g])
      if (o = Dn(m), o) break;
  }
  if (!o) return null;
  const a = Bo(e, "pano_sticker_input_state_hash"), s = n != null && n.external ? String(a ?? "") : "", l = n != null && n.external ? Number(e.__panoOwnOutputRev || 0) : 0, c = n != null && n.external ? yd(o, l) : o, u = mS(o, s, l);
  return md.get(e, u, c, (h, g) => {
    var m, y;
    g && (n != null && n.external && e.__panoOutputFromRun && Er(e, "image-loaded"), (y = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || y.call(m));
  }) || null;
}
function cw(e, t) {
  var d, f, h, g;
  const r = hw(e, t), n = mw(t), i = Array.isArray((d = t == null ? void 0 : t.painting) == null ? void 0 : d.groups) ? t.painting.groups : [], o = new Map(
    i.filter((m) => m && typeof m == "object").map((m) => [String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim(), Number((m == null ? void 0 : m.z_index) || 0)])
  ), a = r ? n.map((m) => {
    const y = r.getGroupDisplayCanvas(m);
    return y ? {
      id: `paint_group:${m}`,
      source: y,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${m}`,
      zIndex: Number(o.get(m) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], s = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.raster_objects) ? t.painting.raster_objects : [];
  if (s.length === 0)
    return (g = (h = e.__panoRasterObjectSurfaceCache) == null ? void 0 : h.retain) == null || g.call(h, []), a;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = pS()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var m, y;
    return (y = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null ? void 0 : y.call(m);
  });
  const l = uS(t == null ? void 0 : t.output_preset), c = s.filter((m) => (m == null ? void 0 : m.visible) !== !1 && String((m == null ? void 0 : m.layerKind) || "paint") === "paint").map((m) => String((m == null ? void 0 : m.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(c);
  const u = s.map((m) => {
    const y = e.__panoRasterObjectSurfaceCache.get(
      m,
      l.width,
      l.height,
      e.__panoRasterObjectReady
    );
    return y ? {
      id: `raster:${String((m == null ? void 0 : m.id) || "")}`,
      source: y.source,
      revision: y.revision,
      zIndex: Number((m == null ? void 0 : m.z_index) || 0),
      opacity: 1,
      visible: (m == null ? void 0 : m.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...u];
}
function uw(e, t, r, n) {
  var o, a, s, l, c, u;
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
      const d = n.convertEventToCanvasOffset(t);
      if (Array.isArray(d) && d.length >= 2)
        return {
          x: Number(d[0]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[0]) || 0),
          y: Number(d[1]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[0]) || 0),
      y: Number(t.canvasY) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[1]) || 0)
    };
  const i = fw(e, t, n);
  return i || null;
}
function dw(e, t) {
  var d, f;
  const r = Number(e == null ? void 0 : e.clientX), n = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(n)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (d = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : d.call(i), a = (t == null ? void 0 : t.ds) || ((f = Rt == null ? void 0 : Rt.canvas) == null ? void 0 : f.ds);
  if (!o || !a) return null;
  const s = Number(a.scale || 1);
  if (!Number.isFinite(s) || Math.abs(s) < 1e-6) return null;
  const l = Array.isArray(a.offset) ? a.offset : [0, 0], c = (r - Number(o.left || 0)) / s - Number(l[0] || 0), u = (n - Number(o.top || 0)) / s - Number(l[1] || 0);
  return !Number.isFinite(c) || !Number.isFinite(u) ? null : { x: c, y: u };
}
function fw(e, t, r) {
  var i, o;
  const n = dw(t, r || (Rt == null ? void 0 : Rt.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function pw(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function hw(e, t) {
  var c, u, d, f, h, g, m, y, F, K, z, L;
  const r = (u = (c = t == null ? void 0 : t.painting) == null ? void 0 : c.paint) == null ? void 0 : u.strokes, n = (f = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.mask) == null ? void 0 : f.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const a = pw(e, t), s = `${a.width}x${a.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== s) && (e.__panoPreviewPaintEngine = pl(a), e.__panoPreviewPaintDescriptorKey = s, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const l = {
    paint: r || null,
    mask: n || null,
    groups: ((h = t == null ? void 0 : t.painting) == null ? void 0 : h.groups) || null,
    rasterObjects: ((g = t == null ? void 0 : t.painting) == null ? void 0 : g.raster_objects) || null
  };
  return (((m = e.__panoPreviewPaintRevision) == null ? void 0 : m.paint) !== l.paint || ((y = e.__panoPreviewPaintRevision) == null ? void 0 : y.mask) !== l.mask || ((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.groups) !== l.groups || ((K = e.__panoPreviewPaintRevision) == null ? void 0 : K.rasterObjects) !== l.rasterObjects) && (e.__panoPreviewPaintRevision = l, e.__panoPreviewPaintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((z = t == null ? void 0 : t.painting) == null ? void 0 : z.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((L = t == null ? void 0 : t.painting) == null ? void 0 : L.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function mw(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function gw(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function yw(e, t, r) {
  const n = dd(t, r);
  n.visible && ud(e, n.boundaryEdges, { selected: !1 });
}
function bw(e, t, r) {
  const n = dd(t, r);
  n.visible && (e.save(), ud(e, n.boundaryEdges, { selected: !0 }), og(e, n, { accent: iS(t) }), e.restore());
}
function Jc(e, t, r) {
  return Sm(js(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function Xs(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? Xi;
}
function vw(e) {
  return [en(e, "background") ? ed(Wr(e.id), ["pano_input_videos"], Dn) : "", TS(e, Ur)];
}
function _w(e) {
  var o;
  if (!en(e, "external-sticker")) return null;
  const t = Wr(e.id), r = Bo(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(Dn), meta: r };
  const i = ed(t, ["pano_sticker_input_videos"], Dn);
  return i ? { src: i, meta: r } : null;
}
function Sw({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function Hf(e, t, r) {
  var o;
  ((o = e.__panoSurfaceScene) == null ? void 0 : o.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: Zn({ ...t, painting: null }) });
  const n = (a) => {
    var l;
    if (a.visible === !1) return null;
    let s;
    if (t.version === 2) {
      s = sa(e, a.id, $s(a.source), { external: a.source.kind === "port" });
      const c = e.__panoSurfacePlayback;
      if (a.source.kind === "port" && c) {
        const u = c.playback.stickerPicture(c.stickerStill, s), d = nd(c.playback.stickerMedia, s);
        return u ? { media: u, revision: nc(u), source: d } : null;
      }
    } else {
      const c = a.type === "external_image" || a.source_kind === "external_image", u = String(a.asset_id || "") || (c ? String(a.id || "") : "");
      s = sa(e, u, (l = t.assets) == null ? void 0 : l[a.asset_id], { external: c });
    }
    return qs(s) ? { media: s, revision: nc(s) } : null;
  }, i = (t.painting_visible === !1 ? [] : cw(e, t)).filter((a) => a.visible !== !1).map((a) => ({ id: a.id, media: a.source, revision: a.revision, opacity: a.opacity, zIndex: a.zIndex }));
  return {
    background: qs(r) ? { media: r, revision: nc(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: xm(e.__panoSurfaceScene.sceneState, Xs(e), t.stickers, { media: n, paintLayers: i })
  };
}
function ww(e, t, r) {
  var L, C, U, q, ce, $, me;
  const n = String(e.__panoPreviewMode || "stickers");
  gg(e, n);
  const i = wn(e);
  n === "cutout" && e.__panoCutoutNodeSurfaceState !== i ? (e.__panoCutoutNodeSurfaceState = i, (U = (C = (L = e.__panoCutoutNodeSurface) == null ? void 0 : L.session) == null ? void 0 : C.refresh) == null || U.call(C)) : n === "stickers" && e.__panoStickersNodeSurfaceState !== i && (e.__panoStickersNodeSurfaceState = i, ($ = (ce = (q = e.__panoStickersNodeSurface) == null ? void 0 : q.session) == null ? void 0 : ce.refresh) == null || $.call(ce));
  const o = t.parentElement, a = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientWidth) || t.clientWidth || 0))), s = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientHeight) || t.clientHeight || 0))), l = t.getContext("2d");
  if (!l) return;
  (t.width !== a || t.height !== s) && (t.width = a, t.height = s);
  const c = { x: 0, y: 0, w: a, h: s };
  l.setTransform(1, 0, 0, 1, 0, 0), l.fillStyle = "#070707", l.fillRect(0, 0, a, s);
  const u = (e.__panoSurfacePlayback ? Sw(e.__panoSurfacePlayback) : tw(e, ["pano_input_videos"], () => {
    var P, T;
    return (T = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null ? void 0 : T.call(P);
  })) || iw(
    e,
    Ur,
    () => {
      var P, T;
      return (T = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null ? void 0 : T.call(P);
    },
    { preserveReadyWhilePending: !1 }
  ), d = qs(u);
  let f = null;
  const h = (P, T) => {
    f || (f = Hf(e, i, u));
    const ne = r.render({ width: P.w, height: P.h, camera: T, ...f });
    return ne && l.drawImage(ne.canvas, ne.x, ne.y, ne.width, ne.height, P.x, P.y, P.w, P.h), !!ne;
  };
  if (n === "cutout") {
    const P = sw(i), T = gw(u), ne = P ? Ee(Kr(P).aspect, 0.1, 10) : d ? Ee(Number(T.width / T.height), 0.05, 20) : 1, Z = ld(c, ne);
    e.__panoCutoutNodeFrame = Z;
    let le = "none";
    const ae = String((u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "");
    if (P)
      if (u && !d)
        le = "loading";
      else if (d) {
        const Y = A_({ width: a, height: s }, Z, P);
        [
          !Y.fallback || h(Y.fallback.rect, Wo(Y.fallback.shot)),
          h(Y.rect, Wo(Y.shot)),
          !Y.fallback || h(Z, Wo(P))
        ].every(Boolean) || (le = "loading");
      } else
        le = "empty";
    else {
      const Y = e.__panoLastCutoutShot;
      Y ? (e.__panoPreviewView = Jm(Y, { width: a, height: s }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), d ? h(c, js(e.__panoPreviewView, a, s)) || (le = "loading") : u ? le = "loading" : le = "empty";
    }
    d || r.release(), r.failed && le === "loading" && (le = "none"), P && (e.__panoLastCutoutShot = { ...P }, l.save(), l.fillStyle = "rgba(0,0,0,0.58)", l.beginPath(), l.rect(0, 0, a, s), l.rect(Z.x, Z.y, Z.w, Z.h), l.fill("evenodd"), l.restore(), l.save(), l.strokeStyle = "rgba(255,221,87,0.72)", l.lineWidth = 2, l.strokeRect(Z.x + 0.5, Z.y + 0.5, Math.max(0, Z.w - 1), Math.max(0, Z.h - 1)), l.restore()), le === "loading" ? (rc(e, !1), Ya(e, !0, ae)) : le === "empty" ? (rc(e, !0), Ya(e, !1, "")) : (rc(e, !1), Ya(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let g = !1;
  (!u || d) && (f = Hf(e, i, u), !f.background && !f.layers.length ? (r.release(), g = !0) : g = h(c, js(e.__panoPreviewView, a, s)));
  const m = !g && !r.failed;
  Ya(e, m, m ? String((u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "") : ""), m && aw(l, c, jf(t, c));
  const y = Jc(e, a, s);
  !u && g && xw(l, y, jf(t, c));
  const F = String(((me = i == null ? void 0 : i.active) == null ? void 0 : me.selected_sticker_id) || ""), K = jc(i, Xs(e)), z = g ? K.find((P) => String((P == null ? void 0 : P.id) || "") === F && (P == null ? void 0 : P.visible) !== !1) : null;
  g && K.filter((P) => P !== z && (P == null ? void 0 : P.visible) !== !1 && (P.external || P.source_kind === "external_image")).filter((P) => !qs(sa(e, P.id, null, { external: !0 }))).forEach((P) => yw(l, P, y)), z && bw(l, z, y);
}
function Gf(e, t, r, n, i = 1) {
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
function xw(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let s = -75; s <= 75; s += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(Pn(c, s));
    Gf(e, l, t, s === 0 ? i : n, s === 0 ? 1.5 : 1);
  }
  for (let s = -180; s <= 180; s += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(Pn(s, c));
    Gf(e, l, t, n, s % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: Pn(0, 0) },
    { name: "Right", dir: Pn(90, 0) },
    { name: "Back", dir: Pn(180, 0) },
    { name: "Left", dir: Pn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const a = Math.max(9, Math.round(11 * r));
  e.font = `500 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((s) => {
    const l = t.project(s.dir);
    l.z > 1e-4 && e.fillText(s.name, l.x, l.y + 24 * r);
  }), e.restore();
}
function Zc(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function kw(e, t, r = 20) {
  var a;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (a = t.getBoundingClientRect) == null ? void 0 : a.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function $n(e, t) {
  return kw(e, t) ? !1 : (Zc(e), !0);
}
function Wf() {
  var r;
  const e = (r = Rt == null ? void 0 : Rt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Mw(e) {
  var r;
  if (!e) return;
  const t = (r = Rt == null ? void 0 : Rt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function Pw(e, t = 360, r = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !ug(e)) return;
  const n = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(n) : e.size = n, e.__panoStandaloneBootSized = !0;
  } catch (i) {
    String((i == null ? void 0 : i.message) || i || "unknown");
  }
}
function Nw(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = i > 0, !(i <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var o, a;
    e.__panoBootMinHeightTimer = null, (o = e == null ? void 0 : e.__panoDomPreview) != null && o.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function Kf(e, t = null, r = 0, n = 0, i = !0) {
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
      e.__panoUserResized = !0, t == null || t(), i && Cw(e, 180, t);
    }
  };
}
function Cw(e, t = 180, r = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var n;
    e.__panoResizeSettleTimer = null, r == null || r(), (n = e.setDirtyCanvas) == null || n.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Fo(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const Aw = /* @__PURE__ */ new WeakMap();
function yg(e, t) {
  return Tm(Aw, e, t) ? !1 : (ew(e, t), mg(e), Fo(e), !0);
}
async function Iw(e) {
  var r, n;
  const t = await a_(e, Rt, dn);
  t && (yg(e, t), (n = (r = e.__panoDomPreview) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function Ew(e, t = {}) {
  var be;
  const r = t.__allowStandalone === !0, n = dg(e);
  if (n && !r) {
    gd(e);
    return;
  }
  n && Pw(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const i = e.__panoPreviewMode === "stickers", o = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const a = {
    signature: $f(e)
  }, s = "dom", l = a.signature || $f(e);
  if (Number(e.__panoRebindGeneration || 0), qc(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Yc(e), e.__panoFrontendSig = l, e.__panoStickersPath = s, (be = e.__panoDomPreview) != null && be.widget || (e.__panoLegacyPreviewHooked && ys(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const c = t.noPreview === !0, u = c ? 0 : 56, d = c ? 0 : M_, f = document.createElement("div");
  if ($S(), f.className = "pano-node-preview-dom", f.classList.add(i ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), c && f.classList.add("pano-node-preview--no-preview"), f.setAttribute("data-capture-wheel", "true"), f.tabIndex = 0, f.style.cssText = [
    "width:100%",
    c ? "height:auto" : "height:100%",
    d > 0 ? `min-height:${d}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), c) {
    const E = Bs(Bc(
      e.addDOMWidget(Uc(), "preview", f, Kf(e, null))
    ));
    Fo(e), e.__panoDomPreview = { widget: E, root: f, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const h = document.createElement("div");
  h.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const g = nn({ label: "node.surface" });
  g.style.cssText = [
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
  const m = document.createElement("div");
  m.style.cssText = [
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
  ].join(";"), m.textContent = "Connect ERP image", h.appendChild(g), h.appendChild(m), f.appendChild(h);
  const y = Sh(f), F = document.createElement("div");
  F && (F.className = i ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", F.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", f.appendChild(F)), zS(e, 120, 120), Fo(e);
  let K = null;
  try {
    Nw(e, u, () => {
      var E, de;
      return (de = (E = e.__panoDomPreview) == null ? void 0 : E.requestDraw) == null ? void 0 : de.call(E);
    }), K = Bs(Bc(e.addDOMWidget(
      Uc(),
      "preview",
      f,
      Kf(
        e,
        () => {
          var E, de;
          return (de = (E = e.__panoDomPreview) == null ? void 0 : E.requestDraw) == null ? void 0 : de.call(E);
        },
        u,
        d,
        !1
      )
    )));
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
  }, L = () => {
    z.destroyed || (z.needsDraw = !0, !z.inTick && !z.raf && (z.raf = requestAnimationFrame(Se)));
  }, C = Pm(L), U = /* @__PURE__ */ Qi(i ? { ...Bm(wn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...qm(wn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((E) => ({ value: E, label: E }))
  });
  let q = null;
  if (i && e.__panoSceneStateV2) {
    const [E, de] = [0, 1].map(() => {
      const Ie = ha(document, "node.playback");
      return Ie.playsInline = !0, Ie.preload = "auto", Ie.crossOrigin = "anonymous", Ie.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", h.appendChild(Ie), Ie;
    }), Me = nn({ label: "node.still" });
    Me.__panoFrameIdx = 0;
    const Ae = nn({ label: "node.port-still" });
    Ae.__panoFrameIdx = 0;
    const Te = x_({
      video: E,
      stickerVideo: de,
      createImage: (Ie, Le) => {
        const je = new Image();
        return je.onload = Le, je.onerror = Le, je.src = Ie, je;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ie) => requestAnimationFrame(Ie),
        cancelFrame: (Ie) => cancelAnimationFrame(Ie)
      },
      readState: () => wn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: L,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Le;
        if (!(E.videoWidth > 0 && E.videoHeight > 0)) return;
        const Ie = Math.min(1, VS / E.videoWidth);
        Me.width = Math.round(E.videoWidth * Ie), Me.height = Math.round(E.videoHeight * Ie), (Le = Me.getContext("2d")) == null || Le.drawImage(E, 0, 0, Me.width, Me.height), Me.__panoFrameIdx += 1, L();
      },
      onStickerCapture: () => {
        var Ie;
        de.videoWidth > 0 && de.videoHeight > 0 && (Ae.width = de.videoWidth, Ae.height = de.videoHeight, (Ie = Ae.getContext("2d")) == null || Ie.drawImage(de, 0, 0), Ae.__panoFrameIdx += 1, L());
      },
      onChange: () => {
        U.playing = Te.playing, L();
      }
    });
    q = { playback: Te, video: E, still: Me, stickerVideo: de, stickerStill: Ae, stickerSource: "" }, e.__panoSurfacePlayback = q;
  }
  const ce = () => {
    var je;
    const { playback: E, still: de, stickerStill: Me } = q, Ae = Gc(h, !!((je = e.flags) != null && je.collapsed)), Te = E.source, Ie = Ae ? _w(e) : null, Le = E.follow({
      shown: Ae,
      sources: Ae ? vw(e) : [],
      state: wn(e),
      sticker: Ie
    });
    ((Ie == null ? void 0 : Ie.src) || "") !== q.stickerSource && (q.stickerSource = (Ie == null ? void 0 : Ie.src) || "", Zo(Me)), E.source !== Te && (Zo(de), de.__panoFrameIdx = 0), U.playable = Le, U.playing = E.playing;
  }, $ = () => {
    var de, Me;
    const E = ((de = e.__panoOwnOutputVideoCache) == null ? void 0 : de.player) ?? null;
    E && !Gc(h, !!((Me = e.flags) != null && Me.collapsed)) && E.pause(), i && (U.playable = !!E && !E.failed(), U.playing = !!(E != null && E.playing));
  }, me = () => {
    var E;
    q == null || q.playback.pause(), (E = e.__panoOwnOutputVideoCache) == null || E.player.pause();
  };
  let P = null;
  const T = (i ? S_ : E_)({
    readState: () => wn(e),
    publishLiveState: (E) => {
      E ? (P = E, e.__panoLiveStateOverride = E) : (e.__panoLiveStateOverride === P && (e.__panoLiveStateOverride = null), P = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, L();
    },
    commitState: (E) => {
      var Ae, Te, Ie, Le;
      const de = Hi(e, "state_json");
      if (!de) return;
      nm(e, E.active);
      const Me = im(e, E);
      om(e, Me, String(de.value ?? "")) || (de.value = Me, (Ae = de.callback) == null || Ae.call(de, Me), e.__panoStateCache = null, (Te = e.setDirtyCanvas) == null || Te.call(e, !0, !0), (Le = (Ie = e.graph) == null ? void 0 : Ie.setDirtyCanvas) == null || Le.call(Ie, !0, !0));
    },
    onChange: (E) => Object.assign(U, E)
  }), Z = i ? ag(e, (E = "sync", de = null) => {
    var Pt;
    if (!i || !e.graph || !T || T.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Et = en(e, "external-sticker"), Gt = wn(e).stickers.find((Qt) => Qt.source.kind === "port");
      return T.apply({
        type: "sync-port",
        value: Wm(e, {
          pose: Et ? Bo(e, "pano_sticker_input_pose", de) : null,
          image: Gt ? sa(e, Gt.id, null, { external: !0 }) : null
        })
      });
    }
    const Me = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Et) => String((Et == null ? void 0 : Et.name) || "") === "sticker_image") : -1, Ae = Me >= 0 ? ((Pt = e.getInputLink(Me)) == null ? void 0 : Pt.id) ?? null : null;
    if (Ae == null)
      return T.apply({ type: "sync-external", value: { connected: !1 } });
    if (!en(e, "external-sticker")) return !1;
    const Te = Bo(e, "pano_sticker_input_pose", de), Ie = Array.isArray(Te) ? Te[0] : Te, Le = String(Bo(e, "pano_sticker_input_state_hash", de) ?? ""), je = e.__panoPreviewView || { yaw: 0, pitch: 0 }, Be = wn(e), $e = (Array.isArray(Be == null ? void 0 : Be.stickers) ? Be.stickers : []).find((Et) => String((Et == null ? void 0 : Et.id) || "") === "sticker_image_1"), He = sa(e, "sticker_image_1", null, { external: !0 }), Tt = Ie && typeof Ie == "object" ? Ie : $e || { yaw_deg: je.yaw, pitch_deg: je.pitch, hFOV_deg: 30, rot_deg: 0 };
    return T.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Ae,
        stateHash: Le,
        pose: Tt,
        imageWidth: Number((He == null ? void 0 : He.naturalWidth) || (He == null ? void 0 : He.width) || 0),
        imageHeight: Number((He == null ? void 0 : He.naturalHeight) || (He == null ? void 0 : He.height) || 0)
      }
    });
  }) : () => {
  };
  let le = 0;
  const ae = async (E) => {
    if (!i || !T || !qn(E)) return !1;
    me();
    const de = `asset_${Math.random().toString(16).slice(2, 10)}`, Me = `st_${Math.random().toString(16).slice(2, 10)}`, Ae = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    le += 1, U.importing = !0;
    const Te = Eo(e, `add:${de}`, async () => {
      const Ie = await Oo(E), Le = await ri(E, {
        fetchApi: (je, Be) => dn.fetchApi(je, Be)
      });
      return fe(), T.apply({
        type: "add-sticker",
        value: {
          stickerId: Me,
          assetId: de,
          asset: Le,
          imageWidth: Ie.width,
          imageHeight: Ie.height,
          yaw_deg: Number(Ae.yaw || 0),
          pitch_deg: Number(Ae.pitch || 0)
        }
      });
    });
    try {
      return await Te;
    } catch {
      return !1;
    } finally {
      le = Math.max(0, le - 1), U.importing = le > 0, L();
    }
  };
  let Y = null, S = null, D = null, oe = !1;
  const X = () => {
    var E;
    return D && (clearTimeout(D), D = null), oe ? (oe = !1, ((E = T == null ? void 0 : T.commitGesture) == null ? void 0 : E.call(T)) ?? !1) : !1;
  }, fe = () => {
    var Ae, Te, Ie;
    const E = X(), de = (Y == null ? void 0 : Y.pointerId) ?? (S == null ? void 0 : S.pointerId);
    if (Y = null, S = null, de != null) {
      try {
        (Ae = g.hasPointerCapture) != null && Ae.call(g, de) && ((Te = g.releasePointerCapture) == null || Te.call(g, de));
      } catch {
      }
      g.style.cursor = "grab";
    }
    const Me = ((Ie = T == null ? void 0 : T.commitGesture) == null ? void 0 : Ie.call(T)) ?? !1;
    return E || Me;
  }, xe = () => {
    var Ae, Te, Ie;
    const E = X(), de = Y == null ? void 0 : Y.pointerId;
    if (Y = null, de != null) {
      try {
        (Ae = g.hasPointerCapture) != null && Ae.call(g, de) && ((Te = g.releasePointerCapture) == null || Te.call(g, de));
      } catch {
      }
      g.style.cursor = "grab";
    }
    const Me = ((Ie = T == null ? void 0 : T.cancelGesture) == null ? void 0 : Ie.call(T)) ?? !1;
    return E || Me;
  }, Q = () => fe();
  T && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(Q));
  let O = null, J = !1;
  if (F && T)
    try {
      fd(), O = ku(i ? rS : q_, {
        model: U,
        onAction: (E) => {
          var Ae, Te, Ie;
          if ((E == null ? void 0 : E.type) === "toggle-playback") {
            fe(), q ? q.playback.toggle() : (Ae = e.__panoOwnOutputVideoCache) == null || Ae.player.toggle(), L();
            return;
          }
          if (me(), (E == null ? void 0 : E.type) === "open-editor") {
            fe(), i || (U.aspectOpen = !1), (Te = e.__panoOpenEditor) == null || Te.call(e);
            return;
          }
          if (i) {
            if ((E == null ? void 0 : E.type) === "add-image-file") {
              ae(E.file);
              return;
            }
            T.apply(E) && L();
            return;
          }
          if ((E == null ? void 0 : E.type) === "toggle-aspect") {
            U.aspectOpen = !U.aspectOpen;
            return;
          }
          if ((E == null ? void 0 : E.type) === "close-aspect") {
            U.aspectOpen = !1;
            return;
          }
          let de = E;
          if ((E == null ? void 0 : E.type) === "add-frame") {
            const Le = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            de = {
              ...E,
              ...N_(Le, {
                width: g.width,
                height: g.height
              })
            };
          } else if ((E == null ? void 0 : E.type) === "delete-frame") {
            const Le = di(wn(e));
            Le && (e.__panoPreviewView = Jm(Le, {
              width: g.width,
              height: g.height
            }));
          }
          const Me = ((Ie = e.__panoCutoutNodeFrame) == null ? void 0 : Ie.safeRect) || null;
          U.aspectOpen = !1, T.apply({ ...de, safeRect: Me }) && L();
        }
      }), O.mount(F), J = !0;
    } catch {
      O = null, J = !1;
    }
  const ie = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    q && ce(), L();
  }) : null;
  ie == null || ie.observe(h);
  const Se = (E) => {
    var Me, Ae;
    z.raf = 0, z.inTick = !0;
    let de = !1;
    try {
      de = _e.stepInertia(E), (z.needsDraw || de) && (z.needsDraw = !1, q ? ce() : $(), (Me = e.flags) != null && Me.collapsed || ww(e, g, C), U.viewUnavailable = C.failed);
    } finally {
      z.inTick = !1;
    }
    (de || z.needsDraw) && !z.raf && (z.raf = requestAnimationFrame(Se)), RS() && (!e.__panoDebugLastTs || E - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = E, e.__panoPreviewMode, Yc(e), Po(f), Po(h), Po(g), Po(f.parentElement), Po((Ae = f.parentElement) == null ? void 0 : Ae.parentElement), Number(g.width || 0), Number(g.height || 0), void 0);
  }, _e = Au({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (E) => {
      e.__panoPreviewView = E;
    },
    getViewportSize: () => {
      const E = g.getBoundingClientRect();
      return {
        w: Math.max(1, Number(E.width || g.clientWidth || 0)),
        h: Math.max(1, Number(E.height || g.clientHeight || 0))
      };
    },
    getInvert: () => {
      const E = Rf();
      return {
        x: E.invert_view_x ? -1 : 1,
        y: E.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      L();
    }
  }), I = i ? h : f, re = (E) => {
    const de = g.getBoundingClientRect();
    return {
      x: (Number(E.clientX) - de.left) * (g.width / Math.max(1, de.width)),
      y: (Number(E.clientY) - de.top) * (g.height / Math.max(1, de.height))
    };
  }, _ = (E) => {
    var Ae, Te;
    if (!i || !o) return;
    const de = wn(e), Me = Ff(
      jc(de, Xs(e)),
      String(((Ae = de == null ? void 0 : de.active) == null ? void 0 : Ae.selected_sticker_id) || ""),
      re(E),
      Jc(e, g.width, g.height)
    );
    if (!Me) {
      g.style.cursor = "grab";
      return;
    }
    if (((Te = Me.item) == null ? void 0 : Te.locked) === !0) {
      g.style.cursor = "default";
      return;
    }
    g.style.cursor = Me.hit.cursor || "default";
  };
  g.addEventListener("pointerdown", (E) => {
    var je, Be, $e, He, Tt, Dt, Pt, Et, Gt, Qt, zt;
    if (!$n(E, I) || E.button !== 0) return;
    if (!i) {
      const wt = di(wn(e)), Ge = e.__panoCutoutNodeFrame;
      if (!wt) {
        (je = f.focus) == null || je.call(f, { preventScroll: !0 }), (Be = g.setPointerCapture) == null || Be.call(g, E.pointerId), g.style.cursor = "grabbing", _e.startDrag(E.clientX, E.clientY, E.pointerId);
        return;
      }
      if (wt.locked === !0 || !Ge || !T) return;
      const In = re(E);
      let En;
      if (E.shiftKey) {
        const nr = Qm({
          frame: Ge,
          point: In,
          startRollDeg: Number(wt.roll_deg ?? wt.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!nr) return;
        En = { kind: "roll", pointerId: E.pointerId, rollGesture: nr };
      } else {
        const nr = (($e = wn(e)) == null ? void 0 : $e.ui_settings) || Rf();
        En = {
          kind: "pan",
          pointerId: E.pointerId,
          startPoint: In,
          startShot: { ...wt },
          focalPx: pi(Ge, wt),
          invertX: nr.invert_view_x === !0,
          invertY: nr.invert_view_y === !0
        };
      }
      fe(), (He = f.focus) == null || He.call(f, { preventScroll: !0 }), (Tt = g.setPointerCapture) == null || Tt.call(g, E.pointerId), g.style.cursor = "grabbing", T.beginGesture(), Y = En;
      return;
    }
    if (!o) return;
    const de = re(E), Me = wn(e), Ae = String(((Dt = Me == null ? void 0 : Me.active) == null ? void 0 : Dt.selected_sticker_id) || ""), Te = Jc(e, g.width, g.height);
    (Pt = f.focus) == null || Pt.call(f, { preventScroll: !0 });
    const Ie = () => Ff(jc(Me, Xs(e)), Ae, de, Te);
    let Le = Ie();
    if (Le && (q != null && q.playback.playing) && (me(), Le = Ie()), Le && T) {
      if (_e.stopMotion(), fe(), String(((Et = Le.item) == null ? void 0 : Et.id) || "") !== Ae && T.apply({ type: "select-sticker", id: Le.item.id }), ((Gt = Le.item) == null ? void 0 : Gt.locked) === !0) {
        L();
        return;
      }
      const wt = de, Ge = Le.geometry.center;
      S = {
        active: !0,
        kind: Le.hit.kind,
        pointerId: E.pointerId,
        startPoint: wt,
        startCenter: { ...Ge },
        startSticker: { ...Le.item },
        startDistance: Math.max(1, Math.hypot(wt.x - Ge.x, wt.y - Ge.y)),
        startAngle: Math.atan2(wt.y - Ge.y, wt.x - Ge.x),
        projection: Te
      }, T.beginGesture(), (Qt = g.setPointerCapture) == null || Qt.call(g, E.pointerId), g.style.cursor = Le.hit.kind === "rotate" ? "grabbing" : Le.hit.kind === "move" ? "move" : Le.hit.cursor, L();
      return;
    }
    (zt = g.setPointerCapture) == null || zt.call(g, E.pointerId), g.style.cursor = "grabbing", _e.startDrag(E.clientX, E.clientY, E.pointerId);
  }), g.addEventListener("pointermove", (E) => {
    if (!i) {
      if (!Y) {
        if (!_e.state.drag.active) return;
        $n(E, I), _e.moveDrag(E.clientX, E.clientY, "pano");
        return;
      }
      if (Y.pointerId !== E.pointerId || !T) return;
      if ($n(E, I), Y.kind === "pan") {
        const Me = re(E);
        T.updateGesture({
          type: "pan-camera",
          startShot: Y.startShot,
          dx: Me.x - Y.startPoint.x,
          dy: Me.y - Y.startPoint.y,
          focalPx: Y.focalPx,
          invertX: Y.invertX,
          invertY: Y.invertY
        });
        return;
      }
      const de = eg(Y.rollGesture, re(E), E);
      if (!de) return;
      Y.rollGesture = de.gesture, T.updateGesture({ type: "set-roll", value: de.rollDeg });
      return;
    }
    if (!S && !_e.state.drag.active) {
      _(E);
      return;
    }
    if (S) {
      if (S.pointerId !== E.pointerId || !T) return;
      $n(E, I);
      const de = re(E);
      let Me = S.startSticker;
      if (S.kind === "move")
        Me = sS(
          S.startSticker,
          {
            x: S.startCenter.x + de.x - S.startPoint.x,
            y: S.startCenter.y + de.y - S.startPoint.y
          },
          S.projection
        );
      else if (S.kind === "scale") {
        const Ae = Math.hypot(de.x - S.startCenter.x, de.y - S.startCenter.y);
        Me = lS(S.startSticker, S.startDistance, Ae);
      } else if (S.kind === "rotate") {
        const Ae = Math.atan2(de.y - S.startCenter.y, de.x - S.startCenter.x);
        Me = cS(S.startSticker, S.startAngle, Ae, E.shiftKey === !0);
      }
      T.updateGesture({ type: "set-transform", value: Me }), L();
      return;
    }
    !o || !_e.state.drag.active || ($n(E, I), _e.moveDrag(E.clientX, E.clientY, "pano"));
  });
  const w = () => {
    var de, Me;
    if (!Y && !S) {
      if (!_e.state.drag.active) return;
      _e.endDrag(), g.style.cursor = "grab", L();
      return;
    }
    if (!T) return;
    const E = (Y == null ? void 0 : Y.pointerId) ?? (S == null ? void 0 : S.pointerId);
    Y = null, S = null;
    try {
      (de = g.hasPointerCapture) != null && de.call(g, E) && ((Me = g.releasePointerCapture) == null || Me.call(g, E));
    } catch {
    }
    T.cancelGesture(), g.style.cursor = "grab", L();
  }, H = (E, de = !1) => {
    var Me, Ae, Te, Ie;
    if (!i) {
      if (!Y) {
        if (!_e.state.drag.active) return;
        $n(E, I), (Me = g.releasePointerCapture) == null || Me.call(g, E.pointerId), g.style.cursor = "grab", _e.endDrag(), L();
        return;
      }
      if (Y.pointerId !== E.pointerId || !T) return;
      $n(E, I), Y = null, (Ae = g.releasePointerCapture) == null || Ae.call(g, E.pointerId), g.style.cursor = "grab", de ? T.cancelGesture() : T.commitGesture(), _(E), L();
      return;
    }
    if (S) {
      if (S.pointerId !== E.pointerId || !T) return;
      $n(E, I), S = null, (Te = g.releasePointerCapture) == null || Te.call(g, E.pointerId), g.style.cursor = "grab", de ? T.cancelGesture() : T.commitGesture(), L();
      return;
    }
    !o || !_e.state.drag.active || ($n(E, I), (Ie = g.releasePointerCapture) == null || Ie.call(g, E.pointerId), g.style.cursor = "grab", _e.endDrag(), L());
  };
  g.addEventListener("pointerup", H), g.addEventListener("pointercancel", (E) => H(E, !0)), g.addEventListener("lostpointercapture", w), g.addEventListener("pointerleave", (E) => {
    !i && Y || S || _e.state.drag.active && H(E);
  });
  const G = (E) => {
    const de = document.activeElement;
    if (de !== f && !f.contains(de)) return;
    if (E.key === "Escape" && (Y || S) && T) {
      w(), Zc(E);
      return;
    }
    if (!i || E.key !== "Delete" && E.key !== "Backspace" || !T) return;
    const Me = E.target, Ae = String((Me == null ? void 0 : Me.tagName) || "").toUpperCase();
    Ae === "INPUT" || Ae === "TEXTAREA" || Me != null && Me.isContentEditable || U.canDelete === !0 && (me(), fe(), T.apply({ type: "delete-selected" }) && L(), Zc(E));
  };
  window.addEventListener("keydown", G, !0);
  const v = FS({
    requestFrame: (E) => requestAnimationFrame(E),
    cancelFrame: (E) => cancelAnimationFrame(E),
    restore: (E) => Mw(E)
  }), x = (E) => {
    var Me, Ae, Te, Ie, Le, je;
    if (!$n(E, I)) return;
    if (!i) {
      const Be = di(wn(e));
      if (Be && Be.locked !== !0 && T) {
        const $e = Cs(E);
        $e !== 0 && (oe || (fe(), T.beginGesture(), oe = !0), T.updateGesture({
          type: "step-fov",
          direction: $e
        }) ? (D && clearTimeout(D), D = setTimeout(X, 180), L()) : T.hasGestureChanges() || (T.cancelGesture(), oe = !1));
      } else if (!Be) {
        const $e = Wf();
        _e.applyWheelEvent(E) && L(), v.schedule($e);
      }
      (Me = E.preventDefault) == null || Me.call(E), (Ae = E.stopPropagation) == null || Ae.call(E), (Te = E.stopImmediatePropagation) == null || Te.call(E);
      return;
    }
    if (!o) return;
    const de = Wf();
    _e.applyWheelEvent(E) && L(), (Ie = E.preventDefault) == null || Ie.call(E), (Le = E.stopPropagation) == null || Le.call(E), (je = E.stopImmediatePropagation) == null || je.call(E), v.schedule(de);
  }, V = i ? [h, g] : [h];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((E) => {
    V.forEach((de) => de.addEventListener(E, x, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((E) => {
    g.addEventListener(E, (de) => $n(de, I)), h.addEventListener(E, (de) => $n(de, I));
  });
  const k = Hi(e, "state_json");
  let M = null, A = null;
  k && !k.__panoPreviewPatchedCb && (M = k.callback, A = (E) => {
    const de = M ? M(E) : void 0;
    return L(), de;
  }, k.callback = A, k.__panoPreviewPatchedCb = A);
  const B = Hi(e, "bg_color");
  let te = null, ge = null;
  B && !B.__panoPreviewPatchedCb && (te = B.callback, ge = (E) => {
    const de = te ? te(E) : void 0;
    return L(), de;
  }, B.callback = ge, B.__panoPreviewPatchedCb = ge);
  const W = e.onRemoved, pe = e.onResize, we = e.onExecuted, Pe = e.onDragOver, ue = e.onDragDrop;
  let ve = null;
  const Ne = () => {
    i && (U.dropActive = !0, ve && clearTimeout(ve), ve = setTimeout(() => {
      ve = null, U.dropActive = !1;
    }, 140));
  }, p = i ? function(E) {
    return (Pe ? Pe.apply(this, arguments) : !1) === !0 ? !0 : hd(E == null ? void 0 : E.dataTransfer) ? (Ne(), !0) : !1;
  } : null, j = i ? function(E) {
    var Ae;
    if ((ue ? ue.apply(this, arguments) : !1) === !0) return !0;
    const Me = Array.from(((Ae = E == null ? void 0 : E.dataTransfer) == null ? void 0 : Ae.files) || []).find((Te) => qn(Te));
    return Me ? (ve && clearTimeout(ve), ve = null, U.dropActive = !1, ae(Me), !0) : !1;
  } : null;
  i && (e.onDragOver = p, e.onDragDrop = j);
  const N = i ? OS(f, {
    onActive: (E) => {
      if (E) {
        Ne();
        return;
      }
      ve && clearTimeout(ve), ve = null, U.dropActive = !1;
    },
    onDrop: (E) => {
      ae(E);
    }
  }) : () => {
  }, b = function(E) {
    e.__panoOutputFromRun = !0;
    const de = yg(e, E);
    Er(e, de ? "executed" : "sync", E), L();
    const Me = we ? we.apply(this, arguments) : void 0;
    return Fo(e), Me;
  };
  e.onExecuted = b;
  const R = e.onConnectionsChange, se = function(E, de) {
    const Me = Sf(e, E, de, Zu), Ae = Sf(e, E, de, Ur), Te = arguments, Ie = R ? R.apply(this, Te) : void 0, Le = () => {
      z.destroyed || (Ae && ow(e), Me && Er(e, "connection-change"), Fo(e), L());
    };
    return Le(), queueMicrotask(Le), Ie;
  };
  e.onConnectionsChange = se;
  const ye = function() {
    const E = pe ? pe.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, L(), E;
  };
  e.onResize = ye;
  const he = function() {
    return ee(), Xc.unregister(this), W ? W.apply(this, arguments) : void 0;
  };
  e.onRemoved = he;
  const ee = () => {
    var E, de, Me, Ae, Te, Ie, Le, je, Be;
    z.destroyed = !0, (E = ie == null ? void 0 : ie.disconnect) == null || E.call(ie), i ? fe() : xe(), g.removeEventListener("lostpointercapture", w), N(), y(), window.removeEventListener("keydown", G, !0), (Me = (de = e.__panoStateFlushers) == null ? void 0 : de.delete) == null || Me.call(de, Q), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Ae = T == null ? void 0 : T.destroy) == null || Ae.call(T), (Te = O == null ? void 0 : O.unmount) == null || Te.call(O), q && (q.playback.dispose(), q.video.remove(), q.stickerVideo.remove(), e.__panoSurfacePlayback === q && (e.__panoSurfacePlayback = null)), C.dispose(), e.__panoSurfaceScene = null, (Le = (Ie = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ie.dispose) == null || Le.call(Ie), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, Z(), v.dispose(), ve && clearTimeout(ve), ve = null, md.disposeOwner(e), Gi(e), z.raf && cancelAnimationFrame(z.raf), z.raf = 0, ((je = e.__panoCutoutNodeSurface) == null ? void 0 : je.session) === T && (e.__panoCutoutNodeSurface = null), ((Be = e.__panoStickersNodeSurface) == null ? void 0 : Be.session) === T && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === ye && (e.onResize = pe), e.onExecuted === b && (e.onExecuted = we), e.onConnectionsChange === se && (e.onConnectionsChange = R), A && (k == null ? void 0 : k.callback) === A && (k.callback = M), A && (k == null ? void 0 : k.__panoPreviewPatchedCb) === A && delete k.__panoPreviewPatchedCb, ge && (B == null ? void 0 : B.callback) === ge && (B.callback = te), ge && (B == null ? void 0 : B.__panoPreviewPatchedCb) === ge && delete B.__panoPreviewPatchedCb, e.onDragOver === p && (e.onDragOver = Pe), e.onDragDrop === j && (e.onDragDrop = ue), e.onRemoved === he && (e.onRemoved = W);
  };
  e.__panoDomRestore = ee, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = T && J && !i ? { session: T, model: U } : null, e.__panoStickersNodeSurface = T && J && i ? { session: T, model: U } : null, e.__panoDomPreview = {
    widget: K,
    root: f,
    canvas: g,
    requestDraw: L,
    state: z,
    emptyHintEl: m,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Xc.register(e), e.graph && Er(e, "attach"), L();
}
function Bf(e, t = {}) {
  fg(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Uf(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (dg(e) && !r) {
    gd(e);
    return;
  }
  fg(e).attach(t);
}
function Ow(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function Fw(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, a = Number(e == null ? void 0 : e.width), s = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(a) ? a : 0) * o, c = Math.max(0, Number.isFinite(s) ? s : 0) * o, u = Number(r), d = u > 0 ? u : 1 / 0, f = Math.max(l, c);
  let h = f > 0 ? Math.min(1, d / f) : 1;
  return n && l > 0 && c > 0 && (h = Math.min(h, n.width * o / l, n.height * o / c)), {
    width: Math.max(1, Math.round(l * h)),
    height: Math.max(1, Math.round(c * h))
  };
}
function Tw({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: r = null,
  onFallback: n = null
} = {}) {
  var h;
  const i = typeof r == "function" ? r : () => {
  }, o = typeof n == "function" ? n : () => {
  };
  let a = !1, s = null;
  const l = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, c = () => {
    const g = l();
    return g === s || (s = g, i(g)), g;
  }, u = () => c();
  return (h = t == null ? void 0 : t.addEventListener) == null || h.call(t, "fullscreenchange", u), c(), { toggle: async () => {
    var g;
    if (a || !e || !t) return !1;
    if (l()) {
      try {
        await ((g = t.exitFullscreen) == null ? void 0 : g.call(t));
      } catch {
      }
      return a ? !1 : (c(), l());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), a) return !1;
        if (l())
          return c(), !0;
      } catch {
      }
    return a || (o(), c()), !1;
  }, isActive: l, destroy: () => {
    var g, m, y;
    if (!a) {
      if (a = !0, (g = t == null ? void 0 : t.removeEventListener) == null || g.call(t, "fullscreenchange", u), l())
        try {
          const F = (m = t.exitFullscreen) == null ? void 0 : m.call(t);
          (y = F == null ? void 0 : F.catch) == null || y.call(F, () => {
          });
        } catch {
        }
      s = !1, i(!1);
    }
  } };
}
const Dw = { class: "pano-preview-node-surface" }, Lw = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (De(), Ve("div", Dw, [
      Ke(Jt, {
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
      e.model.viewUnavailable ? (De(), Kn(cd, { key: 0 })) : dt("", !0)
    ]));
  }
}, qa = 140, Vw = 180, Yf = 40, ic = 10;
function qf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function Xf(e, t) {
  const r = qf(e), n = qf(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function Jf(e) {
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
  return typeof ((o = dn) == null ? void 0 : o.apiURL) == "function" ? dn.apiURL(i) : i;
}
function Wi(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Wi(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Jf({
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
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Jf(e);
}
function bg(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Rw(e) {
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
function Qc(e) {
  var i;
  const t = (i = Xn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Xf(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (Xf(o, r)) return t[o];
  return null;
}
function $w(e) {
  var n, i;
  const t = Qc(e == null ? void 0 : e.id), r = [
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
function zw(e, t = "erp_image") {
  var h, g, m, y, F, K, z;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((L) => String((L == null ? void 0 : L.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((L, C) => String((L == null ? void 0 : L.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(C))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const a = (m = (g = (h = Xn) == null ? void 0 : h.graph) == null ? void 0 : g.getNodeById) == null ? void 0 : m.call(g, o), s = Qc(o), l = Qc(e == null ? void 0 : e.id), c = [
    (y = l == null ? void 0 : l.ui) == null ? void 0 : y.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    s == null ? void 0 : s.images,
    (F = s == null ? void 0 : s.ui) == null ? void 0 : F.pano_input_images,
    s == null ? void 0 : s.pano_input_images
  ];
  for (const L of c)
    if (Array.isArray(L))
      for (const C of L) {
        const U = Wi(C);
        if (U) return U;
      }
  let u = [];
  try {
    u = typeof ((K = Xn) == null ? void 0 : K.getNodeImageUrls) == "function" ? Xn.getNodeImageUrls(a) || [] : [];
  } catch {
    u = [];
  }
  if (Array.isArray(u) && u.length > 0)
    for (const L of u) {
      const C = Wi(L);
      if (C) return C;
    }
  if (a) {
    const L = Array.isArray(a == null ? void 0 : a.imgs) ? a.imgs : [];
    for (const C of L) {
      const U = Wi(C);
      if (U) return U;
    }
  }
  const d = (z = a == null ? void 0 : a.widgets) == null ? void 0 : z.find((L) => String((L == null ? void 0 : L.name) || "").toLowerCase() === "image"), f = String((d == null ? void 0 : d.value) || "").trim();
  return f ? dn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function oc(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function Zf(e, t, r, n, i, o, a) {
  var c, u, d;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !bg(o) || r <= 1 || n <= 1) {
    oc(t, r, n);
    return;
  }
  if (a.failed) {
    oc(t, r, n);
    return;
  }
  const s = Number(((d = (u = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : u.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, l = a.render({
    width: r,
    height: n,
    camera: js(i, r, n),
    background: { media: o, revision: Rw(o), coverage: s },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : oc(t, r, n);
}
function Qf(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class jw {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Pm(() => this.requestDraw()), this.controller = Au({
      getView: () => this.view,
      setView: (n) => {
        this.view = {
          yaw: $t(Number((n == null ? void 0 : n.yaw) || 0)),
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
        `min-height:${qa}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = nn({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const r = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return qa;
        },
        getHeight() {
          return qa;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Bs(Bc(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(qa, Number(o.minHeight || 0)),
            minWidth: Math.max(Vw, Number(o.minWidth || 0))
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
      return fd(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Qi({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = Tw({
        root: this.root,
        documentRef: document,
        onChange: (s) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = s), this.requestDraw();
        },
        onFallback: () => {
          var s, l;
          return (l = (s = this.options).onOpen) == null ? void 0 : l.call(s, this.node);
        }
      }), this.surfaceApp = ku(Lw, {
        model: this.surfaceModel,
        onAction: (s) => {
          var l, c;
          (s == null ? void 0 : s.type) === "toggle-fullscreen" && ((c = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null || c.call(l));
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
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = Sh(r), t.addEventListener("pointerdown", (o) => {
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
      Ow(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !bg(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? Gc(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = Xn.canvas) != null && n.graph) || this.node.graph === Xn.canvas.graph);
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
      return Qf(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var l, c, u, d, f, h;
      const o = uw(this, r, n, i), a = t.getLegacyPreviewRect();
      if (!o || !Qf(o.x, o.y, a))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const s = t.controller.applyWheelEvent(r, typeof n == "number" ? n : 0);
      return Number(((c = t.view) == null ? void 0 : c.fov) || 100), s && ((u = this.setDirtyCanvas) == null || u.call(this, !0, !1)), (d = r == null ? void 0 : r.preventDefault) == null || d.call(r), (f = r == null ? void 0 : r.stopPropagation) == null || f.call(r), (h = r == null ? void 0 : r.stopImmediatePropagation) == null || h.call(r), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var n, i, o, a;
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - ic * 2), r = Math.max(60, Number(((a = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : a[1]) || 0) - Yf - ic);
    return { x: ic, y: Yf, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), Zf(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? Mm : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = Fw(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, a;
    const t = $w(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const s = ha(document, "preview-node.video");
      s.muted = !0, s.loop = !0, s.preload = "auto", s.playsInline = !0, s.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = s, this.requestDraw());
      }, c = () => this.requestDraw();
      s.addEventListener("loadedmetadata", l), s.addEventListener("loadeddata", l), s.addEventListener("timeupdate", c), s.addEventListener("play", c), s.addEventListener("pause", c), s.src = t, s.load(), this.mediaCleanup = () => {
        s.pause(), s.removeEventListener("loadedmetadata", l), s.removeEventListener("loadeddata", l), s.removeEventListener("timeupdate", c), s.removeEventListener("play", c), s.removeEventListener("pause", c), s.removeAttribute("src"), s.load();
      };
      return;
    }
    const r = zw(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), Zf(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, a, s, l, c, u, d, f, h, g, m, y, F;
    if (((r = this.node) == null ? void 0 : r.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (a = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || a.call(o), this.fullscreenController = null, (s = this.wheelCaptureCleanup) == null || s.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (d = (u = this.surfaceHost) == null ? void 0 : u.remove) == null || d.call(u), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (g = (h = this.root) == null ? void 0 : h.remove) == null || g.call(h);
    } catch {
    }
    try {
      cg(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((F = (y = (m = this.node) == null ? void 0 : m.widgets) == null ? void 0 : y.find) == null ? void 0 : F.call(y, (K) => (K == null ? void 0 : K.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function Hw(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const r = new jw(e, t);
  e.__panoPreviewNodeRuntime = r, r.attach();
}
function vg(e, t, r) {
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
function bd(e) {
  return !!(e != null && e.prototype);
}
function la(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function Gw(e, t = {}) {
  bd(e) || Hw(e, {
    ...t,
    onOpen: la(e, t.onOpen)
  });
}
function Ww(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!bd(e)) {
    Uf(e, {
      ...n,
      onOpen: la(e, t.onOpen)
    });
    return;
  }
  vg(e, "stickers_node_preview", (i) => {
    Uf(i, {
      ...n,
      onOpen: la(i, t.onOpen)
    });
  });
}
function Kw(e, t = {}) {
  if (!bd(e)) {
    Bf(e, {
      ...t,
      onOpen: la(e, t.onOpen)
    });
    return;
  }
  vg(e, "cutout_preview", (r) => {
    Bf(r, {
      ...t,
      onOpen: la(r, t.onOpen)
    });
  });
}
const Mn = {
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
}, kr = "pen";
function ep(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function Bw({ requestFrame: e, cancelFrame: t, tasks: r }) {
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
const lt = Object.freeze({
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
  // Media arrived or changed: an image or a VIDEO frame loaded, a `scene` item or Spark loaded.
  MEDIA: "media",
  // The stage's Spark renderer has new splats or a new order (pano_spark_views.js): the stage draws again,
  // the camera preview does not.
  SPLAT_STAGE: "splat_stage",
  // The camera preview's Spark renderer has new splats or a new order: the preview draws again. The stage
  // draws with it (the frame draws all of the three.js canvas), its own Spark having nothing new to sort.
  SPLAT_PREVIEW: "splat_preview",
  // The stage changed size.
  RESIZE: "resize",
  // The WebGL context came back.
  CONTEXT: "context"
}), Uw = new Set(Object.values(lt));
function Yw({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, a = !1, s = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), u = 1, d = 0;
  function f(m) {
    try {
      m();
    } catch (y) {
      i(y);
    }
  }
  function h() {
    !o && !a && !s && (o = e(g));
  }
  function g(m) {
    o = 0, a = !0;
    try {
      const y = c;
      c = /* @__PURE__ */ new Map();
      for (const K of y.values()) f(() => K(m));
      if (s) return;
      const F = l;
      l = /* @__PURE__ */ new Set(), (F.size || n()) && f(() => r(m, F));
    } finally {
      a = !1;
    }
    (l.size || c.size || n()) && h();
  }
  return {
    requestDraw(m) {
      if (!Uw.has(m)) throw new Error(`Unknown draw reason: ${m}`);
      m === lt.STATE && (d += 1), l.add(m), h();
    },
    requestFrame(m) {
      const y = u++;
      return c.set(y, m), h(), y;
    },
    cancelFrame(m) {
      c.delete(m);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      h();
    },
    get stateRevision() {
      return d;
    },
    // Whether a frame is pending.
    get pending() {
      return o !== 0;
    },
    stop() {
      s = !0, o && t(o), o = 0, c.clear(), l.clear();
    }
  };
}
const qw = { class: "pano-floating-right" }, Xw = {
  key: 0,
  class: "pano-floating-space"
}, Jw = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, Zw = ["data-settled"], Qw = ["data-ready", "data-settled"], ex = ["aria-label", "data-tip"], tx = {
  key: 1,
  class: "pano-camera-preview-label"
}, nx = {
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
    return (t, r) => (De(), Ve(Xe, null, [
      Ce("div", qw, [
        e.space ? Ir((De(), Ve("div", Xw, [
          Ce("div", Jw, [
            (De(!0), Ve(Xe, null, St(e.space.modes, (n) => (De(), Kn(Jt, {
              key: n.key,
              "extra-class": { active: n.key === e.space.mode },
              icon: n.icon,
              label: n.label,
              tip: n.tip,
              pressed: n.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": n.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Ke(Jt, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [fi, e.space.visible]
        ]) : dt("", !0),
        (De(!0), Ve(Xe, null, St(e.buttons, (n) => (De(), Kn(Jt, {
          key: n.action,
          icon: n.icon,
          label: n.label,
          tip: n.tip,
          pressed: n.pressed,
          attrs: { "data-action": n.action, disabled: n.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Ir(Ce("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Ce("div", {
          class: ut(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: kt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          r[0] || (r[0] = Ce("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            Ce("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (De(), Ve("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Ke(Vt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, ex)) : dt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (De(), Ve("div", tx, rt(e.preview.label || "Preview unavailable"), 1)) : dt("", !0)
        ], 14, Qw)
      ], 8, Zw), [
        [fi, e.preview.visible]
      ])
    ], 64));
  }
}, rx = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, ix = ["y2", "transform"], ox = ["transform"], ax = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = st(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => Ir((De(), Ve("div", {
      class: ut(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (De(), Ve("svg", rx, [
        o[1] || (o[1] = Ce("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (De(!0), Ve(Xe, null, St(Qe(r), (a) => (De(), Ve("line", {
          key: a,
          class: ut(["pano-frame-roll-knob-tick", { zero: a === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: a % 45 === 0 ? 7 : 6,
          transform: `rotate(${a} 20 20)`
        }, null, 10, ix))), 128)),
        Ce("g", { transform: n.value }, [...o[0] || (o[0] = [
          Ce("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, ox),
        o[2] || (o[2] = Ce("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [fi, e.model.visible === !0]
    ]);
  }
}, sx = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (De(), Ve("div", {
      class: ut(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Ke(ng, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Ke(Jt, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Ke(ax, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, lx = ["aria-label"], cx = { class: "pano-canvas-confirm-title" }, ux = { class: "pano-canvas-confirm-text" }, dx = { class: "pano-canvas-confirm-actions" }, fx = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, px = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Ut(null), n = /* @__PURE__ */ Ut(null);
    let i = null;
    function o() {
      const d = n.value;
      return d ? Array.from(d.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((f) => f instanceof HTMLElement ? !f.hidden && f.tabIndex >= 0 && f.offsetParent !== null : !1) : [];
    }
    function a(d) {
      const f = n.value;
      if (!f) return;
      const h = f.querySelector(`[data-action='${d}']`);
      h instanceof HTMLButtonElement && h.click();
    }
    function s() {
      var m;
      const d = n.value;
      if (!d) return;
      const f = d.querySelector("[data-action='confirm-accept']");
      if (f instanceof HTMLElement) {
        f.focus();
        return;
      }
      const g = o()[0] || d;
      (m = g == null ? void 0 : g.focus) == null || m.call(g);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function c(d) {
      var F;
      if (d.defaultPrevented) return;
      if (d.key === "Escape") {
        d.preventDefault(), d.stopPropagation(), a("confirm-cancel");
        return;
      }
      if (d.key !== "Tab") return;
      const f = o(), h = n.value;
      if (!f.length) {
        d.preventDefault(), (F = h == null ? void 0 : h.focus) == null || F.call(h);
        return;
      }
      const g = f[0], m = f[f.length - 1], y = document.activeElement;
      if (d.shiftKey) {
        (y === g || y === h || !(h != null && h.contains(y))) && (d.preventDefault(), m.focus());
        return;
      }
      (y === m || !(h != null && h.contains(y))) && (d.preventDefault(), g.focus());
    }
    function u(d) {
      d.target === r.value && a("confirm-cancel");
    }
    return li(() => t.model.visible, (d, f) => {
      if (d) {
        i = document.activeElement, sl(() => {
          s();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), fa(() => {
      l();
    }), (d, f) => e.model.visible === !0 ? (De(), Ve("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: It(u, ["self"])
    }, [
      Ce("div", {
        ref_key: "cardRef",
        ref: n,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: c
      }, [
        Ce("div", cx, rt(e.model.title), 1),
        Ce("div", ux, rt(e.model.text), 1),
        Ce("div", dx, [
          f[0] || (f[0] = Ce("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Ce("button", fx, rt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, lx)
    ], 512)) : dt("", !0);
  }
}, hx = ["data-paint-pane"], mx = ["hidden"], gx = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], yx = ["aria-pressed", "disabled"], bx = ["hidden"], vx = { class: "pano-paint-color-pop-head" }, _x = { class: "pano-paint-color-field" }, Sx = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, wx = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, xx = { class: "pano-paint-color-field" }, kx = { class: "pano-paint-alpha-wrap" }, Mx = ["value"], Px = { "data-paint-alpha-value": "" }, Nx = ["hidden"], Cx = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Ax = ["data-paint-history-index", "aria-label", "disabled"], Ix = ["data-paint-footer"], Ex = ["data-paint-group"], Ox = ["hidden"], Fx = ["value", "disabled"], Tx = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, Dx = ["hidden"], Lx = {
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
    return (n, i) => (De(), Ve("div", {
      class: ut(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (De(!0), Ve(Xe, null, St(e.panes, (o) => {
        var a;
        return De(), Ve("div", {
          key: o.key,
          class: ut(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (De(), Ve("div", {
            key: 0,
            class: ut(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (De(!0), Ve(Xe, null, St(e.paintSwatches, (s) => (De(), Ve("button", {
              key: s.id,
              class: ut(["pano-paint-color-dot", { active: e.state.activeSwatchId === s.id }]),
              type: "button",
              "data-paint-color-swatch": s.id,
              "aria-label": s.label,
              style: kt(t(s)),
              "aria-pressed": e.state.activeSwatchId === s.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, gx))), 128)),
            Ce("button", {
              class: ut(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: kt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, yx),
            Ce("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: kt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              Ce("div", vx, [
                Ce("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: kt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Ce("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Ce("div", _x, [
                Ce("div", Sx, [
                  Ce("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: kt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Ce("div", wx, [
                  Ce("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: kt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Ce("label", xx, [
                i[1] || (i[1] = Ce("span", null, "Opacity", -1)),
                Ce("div", kx, [
                  Ce("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, Mx),
                  Ce("span", Px, rt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Ce("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Ce("div", Cx, [
                  (De(!0), Ve(Xe, null, St(e.state.historyEntries || [], (s) => (De(), Ve("button", {
                    key: s.index,
                    class: ut(["pano-paint-color-history-dot", { empty: !s.color }]),
                    type: "button",
                    "data-paint-history-index": s.index,
                    "aria-label": `Recent color ${s.index + 1}`,
                    disabled: !s.color,
                    style: kt(r(s.color))
                  }, null, 14, Ax))), 128))
                ])
              ], 8, Nx)
            ], 12, bx)
          ], 10, mx)) : dt("", !0),
          Ce("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Ce("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (De(!0), Ve(Xe, null, St(o.tools, (s) => {
                var l;
                return De(), Kn(Jt, {
                  key: `${o.key}-${s.key}`,
                  icon: s.icon,
                  label: s.label,
                  tip: s.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === s.key },
                  attrs: { [s.attr]: s.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, Ex),
            Ce("div", {
              class: ut(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              Ce("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: kt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, Fx),
              Ce("span", Tx, rt(e.state.sizeText || "10"), 1)
            ], 10, Ox),
            Ce("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((a = e.state.clearVisible) == null ? void 0 : a[o.key]) ?? !o.clearHidden)
            }, [
              Ke(Jt, {
                icon: Qe(ze).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, Dx)
          ], 8, Ix)
        ], 10, hx);
      }), 128))
    ], 2));
  }
}, Vx = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const r = /* @__PURE__ */ Ut(null), n = /* @__PURE__ */ Ut(null), i = /* @__PURE__ */ Ut(null);
    function o() {
      return {
        cursor: r.value,
        sizePreview: n.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (a, s) => (De(), Ve(Xe, null, [
      Ce("div", {
        ref_key: "cursorRef",
        ref: r,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      Ce("div", {
        ref_key: "sizePreviewRef",
        ref: n,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        Ce("div", {
          ref_key: "sizeSampleRef",
          ref: i,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, Rx = ["aria-label"], $x = ["data-tip", "aria-pressed"], zx = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = st(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => (De(), Ve("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: kt({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (De(!0), Ve(Xe, null, St(e.buttons, (o) => (De(), Ve("button", xr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), rt(o.label), 17, $x))), 128))
    ], 12, Rx));
  }
}, jx = {
  key: 0,
  class: "pano-cutout-menu"
}, Hx = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, Gx = ["data-aspect"], Wx = ["data-action", "aria-label", "data-tip", "disabled"], Kx = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (De(), Ve("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: kt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (De(!0), Ve(Xe, null, St(e.model.items || [], (n) => (De(), Ve(Xe, {
        key: n.key
      }, [
        n.kind === "aspect" ? (De(), Ve("div", jx, [
          Ce("button", Hx, [
            Ke(Vt, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          Ce("div", {
            class: ut(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (De(!0), Ve(Xe, null, St(n.choices || [], (i) => (De(), Ve("button", {
              key: i.value,
              class: ut(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, rt(i.label), 11, Gx))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (De(), Kn(zx, {
          key: 1,
          buttons: n.buttons || [],
          attr: n.attr,
          label: n.label
        }, null, 8, ["buttons", "attr", "label"])) : (De(), Ve("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": n.action,
          "aria-label": n.label,
          "data-tip": n.tip,
          disabled: n.disabled === !0
        }, [
          Ke(Vt, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, Wx))
      ], 64))), 128))
    ], 4));
  }
}, Bx = {
  key: 0,
  class: "pano-easing"
}, Ux = { class: "pano-section-title" }, Yx = { class: "pano-easing-range" }, qx = { class: "pano-easing-modes" }, Xx = ["aria-pressed", "onClick"], Jx = ["viewBox"], Zx = ["x", "y"], Qx = ["x1", "y1", "x2", "y2"], ek = ["d"], tk = ["x1", "y1", "x2", "y2"], nk = ["x1", "y1", "x2", "y2"], rk = ["cx", "cy"], ik = ["cx", "cy"], ok = { class: "pano-easing-note" }, _r = 132, ei = 14, ak = {
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
    ], o = /* @__PURE__ */ Ut(null), a = st(() => {
      var g;
      return Array.isArray((g = r.model) == null ? void 0 : g.easing) ? r.model.easing : null;
    }), s = (g) => ei + g * _r, l = (g) => ei + (1 - g) * _r, c = st(() => {
      var K;
      if (((K = r.model) == null ? void 0 : K.easing) === "hold") return `M${s(0)} ${l(0)} H${s(1)} V${l(1)}`;
      const [g, m, y, F] = a.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${s(0)} ${l(0)} C${s(g)} ${l(m)} ${s(y)} ${l(F)} ${s(1)} ${l(1)}`;
    }), u = st(() => a.value ? a.value.map((g) => g.toFixed(2)).join(", ") : "");
    function d(g) {
      var m;
      return JSON.stringify(g.easing) === JSON.stringify((m = r.model) == null ? void 0 : m.easing);
    }
    function f(g, m) {
      n("timeline", { type: "easing", easing: g, commit: m });
    }
    function h(g, m) {
      var L;
      if (g.button !== 0 || !a.value) return;
      const y = g.currentTarget;
      (L = y.setPointerCapture) == null || L.call(y, g.pointerId);
      let F = null;
      const K = (C) => {
        const U = o.value.getBoundingClientRect(), q = U.width / (_r + ei * 2), ce = ((C.clientX - U.left) / q - ei) / _r, $ = 1 - ((C.clientY - U.top) / q - ei) / _r;
        F = [...F || a.value], F[m] = Math.round(Math.min(1, Math.max(0, ce)) * 100) / 100, F[m + 1] = Math.round(Math.min(1, Math.max(0, $)) * 100) / 100, f(F, !1);
      }, z = () => {
        y.removeEventListener("pointermove", K), y.removeEventListener("pointerup", z), y.removeEventListener("pointercancel", z), F && f(F, !0);
      };
      y.addEventListener("pointermove", K), y.addEventListener("pointerup", z), y.addEventListener("pointercancel", z);
    }
    return (g, m) => e.model ? (De(), Ve("div", Bx, [
      Ce("div", Ux, [
        m[2] || (m[2] = Ce("span", null, "Easing", -1)),
        Ce("span", Yx, rt(e.model.label), 1)
      ]),
      Ce("div", qx, [
        (De(), Ve(Xe, null, St(i, (y) => Ce("button", {
          key: y.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": d(y) ? "true" : "false",
          onClick: (F) => f(y.easing, !0)
        }, rt(y.label), 9, Xx)), 64))
      ]),
      a.value || e.model.easing === "hold" ? (De(), Ve("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${_r + ei * 2} ${_r + ei * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Ce("rect", {
          class: "pano-easing-square",
          x: s(0),
          y: l(1),
          width: _r,
          height: _r
        }, null, 8, Zx),
        Ce("line", {
          class: "pano-easing-diagonal",
          x1: s(0),
          y1: l(0),
          x2: s(1),
          y2: l(1)
        }, null, 8, Qx),
        Ce("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, ek),
        a.value ? (De(), Ve(Xe, { key: 0 }, [
          Ce("line", {
            class: "pano-easing-arm",
            x1: s(0),
            y1: l(0),
            x2: s(a.value[0]),
            y2: l(a.value[1])
          }, null, 8, tk),
          Ce("line", {
            class: "pano-easing-arm",
            x1: s(1),
            y1: l(1),
            x2: s(a.value[2]),
            y2: l(a.value[3])
          }, null, 8, nk),
          Ce("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[0]),
            cy: l(a.value[1]),
            r: "6",
            onPointerdown: m[0] || (m[0] = (y) => h(y, 0))
          }, null, 40, rk),
          Ce("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[2]),
            cy: l(a.value[3]),
            r: "6",
            onPointerdown: m[1] || (m[1] = (y) => h(y, 2))
          }, null, 40, ik)
        ], 64)) : dt("", !0)
      ], 8, Jx)) : dt("", !0),
      Ce("div", ok, [
        e.model.mixed ? (De(), Ve(Xe, { key: 0 }, [
          Co("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (De(), Ve(Xe, { key: 1 }, [
          Co("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (De(), Ve(Xe, { key: 2 }, [
          Co("Holds the value, then jumps to the next keyframe.")
        ], 64)) : a.value ? (De(), Ve(Xe, { key: 3 }, [
          Co("cubic-bezier(" + rt(u.value) + ")", 1)
        ], 64)) : dt("", !0)
      ])
    ])) : dt("", !0);
  }
}, sk = {
  class: "pano-side",
  "data-side": ""
}, lk = { class: "pano-side-head" }, ck = { class: "pano-side-title" }, uk = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, dk = {
  key: 0,
  class: "pano-side-scroll"
}, fk = { class: "pano-inspector" }, pk = { class: "pano-ui-row pano-coverage-row" }, hk = ["data-selected"], mk = ["aria-pressed", "disabled"], gk = ["aria-pressed", "disabled"], yk = {
  key: 0,
  class: "pano-section-title"
}, bk = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, vk = {
  class: "pano-picker",
  "data-picker": "selection"
}, _k = ["disabled"], Sk = { class: "pano-picker-label" }, wk = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, xk = ["hidden"], kk = ["data-selection-id"], Mk = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Pk = {
  key: 2,
  class: "pano-state-actions"
}, Nk = ["disabled"], Ck = ["data-key"], Ak = { class: "pano-field-group-values" }, Ik = ["title", "onPointerdown"], Ek = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], Ok = ["data-key"], Fk = ["min", "max", "step", "value", "disabled", "data-param-key"], Tk = ["min", "max", "step", "value", "disabled", "data-param-key"], Dk = ["open"], Lk = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, Vk = { class: "pano-ui-settings-body" }, Rk = { class: "pano-ui-row" }, $k = ["data-selected"], zk = ["aria-pressed"], jk = ["aria-pressed"], Hk = { class: "pano-ui-row" }, Gk = ["data-selected"], Wk = ["aria-pressed"], Kk = ["aria-pressed"], Bk = {
  key: 1,
  class: "pano-side-footer"
}, Uk = ["data-action"], Yk = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = st(() => {
      const c = r.model;
      return !c || typeof c != "object" ? !1 : Object.keys(c).length > 0 && !!c.coverage;
    });
    function o(c) {
      return { "--v": `${Number((c == null ? void 0 : c.fillPct) || 0)}%` };
    }
    function a(c, u) {
      return (u == null ? void 0 : u.paramsDisabled) === !0 || (c == null ? void 0 : c.enabled) === !1;
    }
    const s = {};
    function l(c, u) {
      const d = s[u.key];
      if (c.button !== 0 || !d || a(u, r.model)) return;
      c.preventDefault();
      const f = c.currentTarget, h = c.clientX, g = Number(d.value) || 0;
      let m = !1;
      f.setPointerCapture(c.pointerId);
      const y = (K) => {
        if (!m && Math.abs(K.clientX - h) < 3) return;
        m = !0;
        const z = g + (K.clientX - h) * u.drag * (K.shiftKey ? 0.1 : 1);
        d.value = String(Number(z.toFixed(3))), d.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, F = () => {
        f.removeEventListener("pointermove", y), f.removeEventListener("pointerup", F), f.removeEventListener("pointercancel", F), f.removeEventListener("lostpointercapture", F), m ? d.dispatchEvent(new Event("change", { bubbles: !0 })) : d.focus();
      };
      f.addEventListener("pointermove", y), f.addEventListener("pointerup", F), f.addEventListener("pointercancel", F), f.addEventListener("lostpointercapture", F);
    }
    return (c, u) => {
      var d, f, h, g, m;
      return De(), Ve("div", sk, [
        Ce("div", lk, [
          Ce("div", ck, [
            Ce("span", uk, [
              Ke(Vt, {
                icon: Qe(ze).globe
              }, null, 8, ["icon"])
            ]),
            Ce("span", null, rt(e.nodeTitle), 1)
          ]),
          u[1] || (u[1] = Ce("div", { class: "pano-side-actions" }, null, -1))
        ]),
        u[10] || (u[10] = Ce("div", { class: "pano-divider" }, null, -1)),
        i.value ? (De(), Ve("div", dk, [
          Ce("div", fk, [
            u[9] || (u[9] = Ce("div", { class: "pano-section-title" }, [
              Ce("span", null, "Scene")
            ], -1)),
            Ce("div", pk, [
              u[2] || (u[2] = Ce("label", null, "Coverage", -1)),
              Ce("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((d = e.model.coverage) == null ? void 0 : d.value) === 180 ? "1" : "0"
              }, [
                Ce("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((f = e.model.coverage) == null ? void 0 : f.value) === 360 ? "true" : "false",
                  disabled: ((h = e.model.coverage) == null ? void 0 : h.disabled) === !0
                }, "360", 8, mk),
                Ce("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((g = e.model.coverage) == null ? void 0 : g.value) === 180 ? "true" : "false",
                  disabled: ((m = e.model.coverage) == null ? void 0 : m.disabled) === !0
                }, "180", 8, gk)
              ], 8, hk)
            ]),
            e.model.transformTitle !== !1 ? (De(), Ve("div", yk, [...u[3] || (u[3] = [
              Ce("span", null, "Transform", -1)
            ])])) : dt("", !0),
            e.model.selectionPicker ? (De(), Ve("div", bk, [
              Ce("label", null, rt(e.model.selectionPicker.label), 1),
              Ce("div", vk, [
                Ce("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Ce("span", Sk, [
                    e.model.selectionPicker.currentIcon ? (De(), Ve("span", wk, [
                      Ke(Vt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : dt("", !0),
                    Ce("span", null, rt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  u[4] || (u[4] = Ce("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, _k),
                Ce("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (De(!0), Ve(Xe, null, St(e.model.selectionPicker.items || [], (y) => (De(), Ve("button", {
                    key: y.id,
                    type: "button",
                    class: ut(["pano-picker-item", { active: y.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": y.id
                  }, [
                    y.icon ? (De(), Ve("span", Mk, [
                      Ke(Vt, {
                        icon: y.icon
                      }, null, 8, ["icon"])
                    ])) : dt("", !0),
                    Ce("span", null, rt(y.label), 1)
                  ], 10, kk))), 128))
                ], 8, xk)
              ])
            ])) : dt("", !0),
            e.model.copyStateButton ? (De(), Ve("div", Pk, [
              Ce("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Ke(Vt, {
                  icon: Qe(ze).copy
                }, null, 8, ["icon"]),
                Ce("span", null, rt(e.model.copyStateButton.label), 1)
              ], 8, Nk)
            ])) : dt("", !0),
            Ce("div", {
              class: ut(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (De(!0), Ve(Xe, { key: 0 }, St(e.model.notes, (y) => (De(), Ve("div", {
                key: y,
                class: "pano-param-note"
              }, rt(y), 1))), 128)) : (De(!0), Ve(Xe, { key: 1 }, St(e.model.rows || [], (y) => (De(), Ve(Xe, {
                key: y.key
              }, [
                y.grouped ? (De(), Ve("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": y.key
                }, [
                  Ce("label", null, rt(y.label), 1),
                  Ce("div", Ak, [
                    (De(!0), Ve(Xe, null, St(y.fields, (F) => (De(), Ve("div", {
                      key: F.key,
                      class: "pano-axis-field"
                    }, [
                      Ce("span", {
                        class: ut(["pano-axis", { disabled: a(F, e.model) }]),
                        title: F.label,
                        onPointerdown: (K) => l(K, F)
                      }, rt(F.short), 43, Ik),
                      Ce("input", {
                        ref_for: !0,
                        ref: (K) => {
                          s[F.key] = K;
                        },
                        type: "number",
                        min: F.min,
                        max: F.max,
                        step: F.step,
                        value: F.displayValue,
                        disabled: a(F, e.model),
                        "aria-label": `${y.label} ${F.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": F.key
                      }, null, 8, Ek)
                    ]))), 128))
                  ])
                ], 8, Ck)) : (De(), Ve("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": y.key
                }, [
                  Ce("label", null, rt(y.label), 1),
                  Ce("input", {
                    type: "range",
                    min: y.fields[0].min,
                    max: y.fields[0].max,
                    step: y.fields[0].step,
                    value: y.fields[0].value,
                    disabled: a(y.fields[0], e.model),
                    style: kt(o(y.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": y.fields[0].key
                  }, null, 12, Fk),
                  Ce("input", {
                    type: "number",
                    min: y.fields[0].min,
                    max: y.fields[0].max,
                    step: y.fields[0].step,
                    value: y.fields[0].displayValue,
                    disabled: a(y.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": y.fields[0].key
                  }, null, 8, Tk)
                ], 8, Ok))
              ], 64))), 128))
            ], 2),
            Ke(ak, {
              model: e.easing,
              onTimeline: u[0] || (u[0] = (y) => n("timeline", y))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (De(), Ve("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Ce("summary", null, [
                u[5] || (u[5] = Ce("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Ce("span", Lk, [
                  Ke(Vt, {
                    icon: Qe(ze).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Ce("div", Vk, [
                Ce("div", Rk, [
                  u[6] || (u[6] = Ce("label", null, "Drag X", -1)),
                  Ce("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    Ce("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, zk),
                    Ce("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, jk)
                  ], 8, $k)
                ]),
                Ce("div", Hk, [
                  u[7] || (u[7] = Ce("label", null, "Drag Y", -1)),
                  Ce("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    Ce("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, Wk),
                    Ce("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, Kk)
                  ], 8, Gk)
                ]),
                u[8] || (u[8] = Ce("div", { class: "pano-ui-row" }, [
                  Ce("span"),
                  Ce("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, Dk)) : dt("", !0)
          ])
        ])) : dt("", !0),
        (e.model.footerButtons || []).length ? (De(), Ve("div", Bk, [
          (De(!0), Ve(Xe, null, St(e.model.footerButtons, (y) => (De(), Ve("button", {
            key: y.action,
            class: ut(["pano-btn", { "pano-btn-primary": y.primary === !0 }]),
            type: "button",
            "data-action": y.action
          }, rt(y.label), 11, Uk))), 128))
        ])) : dt("", !0)
      ]);
    };
  }
}, qk = { class: "pano-timeline-bar" }, Xk = ["aria-label", "data-tip"], Jk = ["aria-label", "data-tip"], Zk = { class: "pano-timeline-time" }, Qk = ["data-tip"], eM = { key: 0 }, tM = ["min", "max", "value"], nM = ["data-tip"], rM = { key: 0 }, iM = ["max", "value"], oM = ["aria-expanded"], aM = ["inert"], sM = { class: "pano-timeline-name" }, lM = ["aria-pressed", "aria-label", "data-tip", "onClick"], cM = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, uM = ["disabled", "aria-expanded", "aria-label", "onClick"], dM = ["title", "aria-current", "onClick"], fM = ["data-keyed", "aria-label", "onClick"], pM = ["onPointerdown"], hM = ["onPointerdown"], mM = ["onPointerdown"], gM = ["onPointerdown"], yM = ["aria-label", "data-tip", "onPointerdown"], bM = { key: 0 }, vM = ["onPointerdown"], _M = ["aria-label", "data-tip", "onPointerdown"], SM = { key: 0 }, wM = 10, xM = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ vs(0), playing: /* @__PURE__ */ vs(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Ut(null), o = /* @__PURE__ */ Ut(null), a = /* @__PURE__ */ Ut(1), s = /* @__PURE__ */ Ut(0), l = /* @__PURE__ */ Ut(!1);
    let c = null, u = null, d = null;
    cl(() => {
      c = new ResizeObserver(([ae]) => {
        a.value = Math.max(1, ae.contentRect.width);
      }), i.value && c.observe(i.value), u = new ResizeObserver(([ae]) => {
        s.value = ae.contentRect.height;
      }), o.value && u.observe(o.value);
    }), fa(() => {
      c == null || c.disconnect(), u == null || u.disconnect(), d == null || d();
    });
    const f = st(() => Math.max(1, Number(r.model.span || 1))), h = st(() => r.playhead.frame.value), g = st(() => r.playhead.playing.value), m = st(() => Ov(h.value, Number(r.model.fps || 1))), y = st(() => a.value / f.value), F = (ae) => `${ae / f.value * 100}%`, K = st(() => Bv(f.value, y.value));
    function z(ae) {
      const Y = i.value.getBoundingClientRect(), S = Math.floor((ae - Y.left) / Math.max(1, Y.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, S));
    }
    function L(ae, Y, S) {
      const D = Math.ceil(wM / Math.max(1e-6, y.value)), oe = new Map(Y.map((X) => [X.frame, X.full]));
      return Uv(Y.map((X) => X.frame), D).map((X, fe) => ({
        ...X,
        key: `${ae}:${fe}`,
        partial: X.frames.some((xe) => !oe.get(xe)),
        selected: X.frames.some((xe) => S.includes(xe))
      }));
    }
    const C = st(() => {
      const ae = /* @__PURE__ */ new Map();
      for (const Y of r.model.rows || []) {
        ae.set(Y.id, L(Y.id, Y.keys, Y.selectedFrames));
        for (const S of Y.lanes) ae.set(S.key, L(S.key, S.frames.map((D) => ({ frame: D, full: !0 })), S.selectedFrames));
      }
      return ae;
    });
    function U(ae) {
      const Y = ae.end === null ? f.value : ae.end;
      return { left: F(ae.start), width: F(Math.max(0, Y - ae.start)) };
    }
    function q(ae, Y) {
      const S = ae.clientX, D = Math.max(1e-6, y.value);
      let oe = 0;
      Y("start", 0, ae);
      const X = (xe) => {
        if (xe.pointerId !== ae.pointerId) return;
        const Q = Math.round((xe.clientX - S) / D);
        Q !== oe && (oe = Q, Y("move", oe, xe));
      }, fe = (xe) => {
        xe.pointerId === ae.pointerId && (d(), Y("end", oe, xe));
      };
      d == null || d(), d = () => {
        window.removeEventListener("pointermove", X), window.removeEventListener("pointerup", fe), window.removeEventListener("pointercancel", fe), d = null;
      }, window.addEventListener("pointermove", X), window.addEventListener("pointerup", fe), window.addEventListener("pointercancel", fe);
    }
    function ce(ae) {
      ae.button === 0 && q(ae, (Y, S, D) => n("action", { type: "seek", frame: z(D.clientX), phase: Y }));
    }
    function $(ae, Y, S) {
      ae.button === 0 && (n("action", { type: "select-row", id: Y.id }), q(ae, (D, oe) => n("action", { type: "clip", id: Y.id, mode: S, delta: oe, phase: D })));
    }
    function me(ae, Y, S, D, oe) {
      if (ae.button === 0) {
        if (ae.shiftKey) {
          n("action", { type: "select-keys", owner: Y.id, lane: S, frames: D.frames, additive: !0 });
          return;
        }
        D.frames.every((X) => oe.includes(X)) || n("action", { type: "select-keys", owner: Y.id, lane: S, frames: D.frames, additive: !1 }), q(ae, (X, fe) => n("action", { type: "move-keys", delta: fe, phase: X }));
      }
    }
    const P = st(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function T(ae, Y, S) {
      n("action", Y), await sl(), ae.target.value = S();
    }
    function ne(ae) {
      T(ae, { type: "fps", fps: Number(ae.target.value) }, () => P.value);
    }
    function Z(ae) {
      const Y = ae.target.value.trim();
      T(ae, { type: "length", length: Y ? Number(Y) : null }, () => r.model.length ?? "");
    }
    function le(ae, Y, S) {
      ae.button !== 0 || ae.target !== ae.currentTarget || n("action", { type: "select-keys", owner: Y.id, lane: S, frames: [], additive: !1 });
    }
    return (ae, Y) => Ir((De(), Ve("section", {
      class: ut(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Ce("div", qk, [
        Ce("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": g.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": g.value ? "Pause (Space)" : "Play (Space)",
          onClick: Y[0] || (Y[0] = (S) => n("action", { type: "play" }))
        }, [
          Ke(Vt, {
            icon: g.value ? Qe(ze).pause : Qe(ze).play
          }, null, 8, ["icon"])
        ], 8, Xk),
        e.model.hasAudio ? (De(), Ve("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: Y[1] || (Y[1] = (S) => n("action", { type: "mute" }))
        }, [
          Ke(Vt, {
            icon: e.model.muted ? Qe(ze).volume_muted : Qe(ze).volume2
          }, null, 8, ["icon"])
        ], 8, Jk)) : dt("", !0),
        Ce("span", Zk, rt(m.value), 1),
        Ce("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (De(), Ve("span", eM, rt(P.value), 1)) : (De(), Ve("input", {
            key: 1,
            type: "number",
            min: Qe(Lh),
            max: Qe(Lu),
            step: "any",
            value: P.value,
            "aria-label": "Timeline fps",
            onChange: ne
          }, null, 40, tM)),
          Y[6] || (Y[6] = Ce("span", null, "fps", -1))
        ], 8, Qk),
        Ce("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          Y[7] || (Y[7] = Ce("span", null, "Length", -1)),
          e.model.lengthLocked ? (De(), Ve("span", rM, rt(e.model.length), 1)) : (De(), Ve("input", {
            key: 1,
            type: "number",
            min: "1",
            max: Qe(Vu),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: Z
          }, null, 40, iM))
        ], 8, nM),
        Ce("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: Y[2] || (Y[2] = (S) => n("action", { type: "toggle-expanded" }))
        }, [
          Y[8] || (Y[8] = Ce("span", null, "Timeline", -1)),
          Ke(Vt, {
            icon: Qe(ze).chevron
          }, null, 8, ["icon"])
        ], 8, oM)
      ]),
      Ce("div", {
        class: ut(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: kt({ "--pano-timeline-rows": `${s.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: Y[3] || (Y[3] = It((S) => l.value = !0, ["self"])),
        onTransitionend: Y[4] || (Y[4] = It((S) => l.value = !1, ["self"])),
        onTransitioncancel: Y[5] || (Y[5] = It((S) => l.value = !1, ["self"]))
      }, [
        Ce("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          Y[9] || (Y[9] = Ce("div", { class: "pano-timeline-corner" }, null, -1)),
          Ce("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: ce
          }, [
            (De(!0), Ve(Xe, null, St(K.value, (S) => (De(), Ve("span", {
              key: S,
              class: "pano-timeline-tick",
              style: kt({ left: F(S) })
            }, rt(S), 5))), 128)),
            Ce("span", {
              class: "pano-timeline-playhead",
              style: kt({ left: F(h.value + 0.5) })
            }, null, 4)
          ], 544),
          (De(!0), Ve(Xe, null, St(e.model.rows || [], (S) => (De(), Ve(Xe, {
            key: S.id
          }, [
            Ce("div", {
              class: ut(["pano-timeline-head", { selected: S.selected, "is-hidden": !S.visible }])
            }, [
              Ce("div", sM, [
                S.hideable ? (De(), Ve("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": S.visible ? "true" : "false",
                  "aria-label": `${S.label} visible`,
                  "data-tip": S.visible ? "Hide" : "Show",
                  onClick: It((D) => n("action", { type: "toggle-visible", id: S.id }), ["stop"])
                }, [
                  Ke(Vt, {
                    icon: S.visible ? Qe(ze).eye : Qe(ze).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, lM)) : (De(), Ve("span", cM)),
                Ce("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !S.keyable,
                  "aria-expanded": S.open ? "true" : "false",
                  "aria-label": S.open ? `Hide ${S.label} parameters` : `Show ${S.label} parameters`,
                  onClick: It((D) => n("action", { type: "toggle-row", id: S.id }), ["stop"])
                }, [
                  Ke(Vt, {
                    icon: Qe(ze).chevron
                  }, null, 8, ["icon"])
                ], 8, uM),
                Ce("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: S.label,
                  "aria-current": S.selected ? "true" : void 0,
                  onClick: (D) => n("action", { type: "select-row", id: S.id })
                }, [
                  Ke(Vt, {
                    icon: S.icon
                  }, null, 8, ["icon"]),
                  Ce("span", null, rt(S.label), 1)
                ], 8, dM),
                S.keyable ? (De(), Ve("button", {
                  key: 2,
                  class: ut(["pano-timeline-key", { keyed: Qe(Xl)(S.keys, h.value) }]),
                  type: "button",
                  "data-keyed": Qe(Xl)(S.keys, h.value) ? "true" : "false",
                  "aria-label": Qe(Xl)(S.keys, h.value) ? `Every ${S.label} parameter has a keyframe here; update them` : `Add keyframes for every ${S.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: It((D) => n("action", { type: "key-row", owner: S.id }), ["stop"])
                }, [
                  Ke(Vt, {
                    icon: Qe(ze).keyframe
                  }, null, 8, ["icon"])
                ], 10, fM)) : dt("", !0)
              ]),
              S.open ? (De(!0), Ve(Xe, { key: 0 }, St(S.lanes, (D) => (De(), Ve("div", {
                key: D.key,
                class: "pano-timeline-lane-head"
              }, rt(D.label), 1))), 128)) : dt("", !0)
            ], 2),
            Ce("div", {
              class: ut(["pano-timeline-track", { selected: S.selected }])
            }, [
              Ce("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (D) => le(D, S, null)
              }, [
                S.clip ? (De(), Ve("div", {
                  key: 0,
                  class: ut(["pano-timeline-clip", { open: S.clip.end === null }]),
                  style: kt(U(S.clip)),
                  onPointerdown: It((D) => $(D, S, "move"), ["stop"])
                }, [
                  Ce("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: It((D) => $(D, S, "start"), ["stop"])
                  }, null, 40, mM),
                  Ce("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: It((D) => $(D, S, "end"), ["stop"])
                  }, null, 40, gM)
                ], 46, hM)) : dt("", !0),
                (De(!0), Ve(Xe, null, St(C.value.get(S.id), (D) => (De(), Ve("button", {
                  key: D.key,
                  type: "button",
                  class: ut(["pano-timeline-pin", { selected: D.selected, cluster: D.frames.length > 1, partial: D.partial }]),
                  style: kt({ left: F(D.frame + 0.5) }),
                  "aria-label": `${S.label}: ${D.frames.length > 1 ? `${D.frames.length} keyframes` : `keyframe at frame ${D.frames[0]}`}`,
                  "data-tip": D.frames.length > 1 ? `${D.frames.length} keyframes` : `Frame ${D.frames[0]}`,
                  onPointerdown: It((oe) => me(oe, S, null, D, S.selectedFrames), ["stop"])
                }, [
                  D.frames.length > 1 ? (De(), Ve("span", bM, rt(D.frames.length), 1)) : dt("", !0)
                ], 46, yM))), 128))
              ], 40, pM),
              S.open ? (De(!0), Ve(Xe, { key: 0 }, St(S.lanes, (D) => (De(), Ve("div", {
                key: D.key,
                class: "pano-timeline-lane",
                onPointerdown: (oe) => le(oe, S, D.lane)
              }, [
                (De(!0), Ve(Xe, null, St(C.value.get(D.key), (oe) => (De(), Ve("button", {
                  key: oe.key,
                  type: "button",
                  class: ut(["pano-timeline-pin", { selected: oe.selected, cluster: oe.frames.length > 1 }]),
                  style: kt({ left: F(oe.frame + 0.5) }),
                  "aria-label": `${D.label}: ${oe.frames.length > 1 ? `${oe.frames.length} keyframes` : `keyframe at frame ${oe.frames[0]}`}`,
                  "data-tip": oe.frames.length > 1 ? `${oe.frames.length} keyframes` : `Frame ${oe.frames[0]}`,
                  onPointerdown: It((X) => me(X, S, D.lane, oe, D.selectedFrames), ["stop"])
                }, [
                  oe.frames.length > 1 ? (De(), Ve("span", SM, rt(oe.frames.length), 1)) : dt("", !0)
                ], 46, _M))), 128))
              ], 40, vM))), 128)) : dt("", !0),
              Ce("span", {
                class: "pano-timeline-playhead",
                style: kt({ left: F(h.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, aM)
    ], 2)), [
      [fi, e.model.visible]
    ]);
  }
}, kM = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (De(), Ve("div", {
      class: ut(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: kt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, rt(e.model.text || ""), 7));
  }
}, MM = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, PM = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (De(), Ve("div", MM, [
      (De(!0), Ve(Xe, null, St(e.buttons, (n) => Ir((De(), Kn(Jt, {
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
        [fi, n.visible !== !1]
      ])), 128))
    ]));
  }
}, NM = ["data-video-ready"], CM = { class: "pano-video-transport-shell" }, AM = { class: "pano-video-controls-left" }, IM = { class: "pano-video-filmstrip" }, EM = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, OM = ["src", "onLoad"], FM = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, TM = ["max", "value", "disabled"], DM = { class: "pano-video-controls-right" }, LM = ["data-has-audio"], VM = { class: "pano-video-volume-pop" }, RM = ["value", "disabled"], $M = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = st(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.playing) === !0 ? "Pause" : "Play";
    }), n = st(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.playing) === !0 ? "Pause video" : "Play video";
    }), i = st(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.playing) === !0 ? ze.pause : ze.play;
    }), o = st(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.loop) === !1 ? "Enable loop" : "Disable loop";
    }), a = st(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), s = st(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.loop) === !1 ? ze.loop_off : ze.loop;
    }), l = st(() => {
      var C, U;
      return ((C = t.state) == null ? void 0 : C.muted) === !0 || Number(((U = t.state) == null ? void 0 : U.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = st(() => {
      var C, U, q;
      return ((C = t.state) == null ? void 0 : C.hasAudio) !== !0 ? ze.volume : ((U = t.state) == null ? void 0 : U.muted) === !0 || Number(((q = t.state) == null ? void 0 : q.volume) ?? 1) <= 0 ? ze.volume_muted : ze.volume2;
    }), u = st(() => {
      var C;
      return Math.max(0, Math.min(100, Number(((C = t.state) == null ? void 0 : C.progressPct) || 0)));
    }), d = st(() => ({ left: `${u.value}%` })), f = st(() => {
      var ce, $;
      const C = (ce = t.state) == null ? void 0 : ce.volumePct, U = Number((($ = t.state) == null ? void 0 : $.volume) ?? 1) * 100, q = Number(C ?? U ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, q))}%`
      };
    }), h = st(() => {
      var q, ce;
      const U = [
        String(((q = t.state) == null ? void 0 : q.currentTimeLabel) || "0:00"),
        String(((ce = t.state) == null ? void 0 : ce.durationLabel) || "0:00")
      ].reduce(($, me) => Math.max($, me.length), 4);
      return `${Math.max(4, U)}ch`;
    }), g = st(() => ({ "--pano-video-time-ch": h.value })), m = st(() => {
      var q, ce;
      const C = Array.isArray((q = t.state) == null ? void 0 : q.thumbnails) ? t.state.thumbnails : [];
      if (C.length) return C;
      const U = Math.max(7, Number(((ce = t.state) == null ? void 0 : ce.thumbnailCount) || 9));
      return Array.from({ length: U }, ($, me) => ({
        id: `placeholder-${me}`,
        src: "",
        label: ""
      }));
    }), y = /* @__PURE__ */ Ut(/* @__PURE__ */ new Set()), F = (C) => String((C == null ? void 0 : C.id) || (C == null ? void 0 : C.src) || (C == null ? void 0 : C.label) || ""), K = (C) => y.value.has(F(C)), z = (C) => {
      const U = new Set(y.value);
      U.add(F(C)), y.value = U;
    };
    li(m, (C) => {
      const U = new Set(C.map(F)), q = /* @__PURE__ */ new Set();
      for (const ce of y.value)
        U.has(ce) && q.add(ce);
      y.value = q;
    }, { immediate: !0 });
    const L = st(() => {
      var C;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((C = t.state) == null ? void 0 : C.shellMaxWidthPx) || 640))}px`
      };
    });
    return (C, U) => (De(), Ve("div", {
      class: ut(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: kt(L.value)
    }, [
      U[1] || (U[1] = Ce("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      U[2] || (U[2] = Ce("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Ce("div", CM, [
        Ce("div", AM, [
          Ke(Jt, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: r.value,
            tip: n.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          Ce("div", {
            class: "pano-video-time pano-video-time-start",
            style: kt(g.value)
          }, rt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Ce("div", IM, [
          Ce("div", EM, [
            (De(!0), Ve(Xe, null, St(m.value, (q) => (De(), Ve("div", {
              key: F(q),
              class: ut(["pano-video-thumb", {
                "is-placeholder": !q.src,
                "is-loaded": q.src && K(q)
              }])
            }, [
              q.src ? (De(), Ve("img", {
                key: 0,
                src: q.src,
                alt: "",
                draggable: "false",
                onLoad: (ce) => z(q)
              }, null, 40, OM)) : (De(), Ve("span", FM))
            ], 2))), 128))
          ]),
          Ce("div", {
            class: "pano-video-playhead",
            style: kt(d.value),
            "aria-hidden": "true"
          }, [...U[0] || (U[0] = [
            Ce("span", { class: "pano-video-playhead-line" }, null, -1),
            Ce("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          Ce("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, TM)
        ]),
        Ce("div", DM, [
          Ce("div", {
            class: "pano-video-time pano-video-time-end",
            style: kt(g.value)
          }, rt(e.state.durationLabel || "0:00"), 5),
          Ke(Jt, {
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
          Ce("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            Ce("div", VM, [
              Ce("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: kt(f.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, RM)
            ]),
            Ke(Jt, {
              "extra-class": "pano-video-control",
              icon: c.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, LM)
        ])
      ])
    ], 14, NM));
  }
}, zM = { class: "pano-floating-top" }, jM = ["data-selected", "data-view-count"], HM = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], GM = { class: "label" }, WM = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return De(), Ve("div", zM, [
        Ce("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (De(!0), Ve(Xe, null, St(e.buttons, (i) => Ir((De(), Ve("button", {
            key: i.key,
            class: ut(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Ke(Vt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            Ce("span", GM, rt(i.label), 1)
          ], 10, HM)), [
            [fi, i.visible !== !1]
          ])), 128))
        ], 8, jM)
      ]);
    };
  }
};
function _g(e = "stickers") {
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
const KM = ["aria-label"], BM = { class: "pano-stage-column" }, UM = { class: "pano-stage-wrap" }, YM = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, qM = {
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
    const l = /* @__PURE__ */ Ut(null), c = /* @__PURE__ */ Ut(null), u = /* @__PURE__ */ Ut(null);
    function d() {
      var P, T;
      return ((T = (P = u.value) == null ? void 0 : P.getRefs) == null ? void 0 : T.call(P)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(P) {
      var T, ne;
      return ((ne = (T = c.value) == null ? void 0 : T.open) == null ? void 0 : ne.call(T, P)) === !0;
    }
    function h(P) {
      i("image-file-selected", P);
    }
    function g(P) {
      i("image-file-cancelled", P);
    }
    t({ getPaintOverlayRefs: d, openImagePicker: f });
    const m = st(() => n.readOnly === !0), y = st(() => n.shellPreset || _g(n.type)), F = st(() => {
      var T, ne, Z;
      const P = String((((T = n.uiState) == null ? void 0 : T.stageStatus) === "failed" ? (ne = n.uiState) == null ? void 0 : ne.stageStatusDetail : (Z = n.uiState) == null ? void 0 : Z.stageWarningDetail) ?? "");
      return P === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : P === "stickers" ? "One or more sticker previews are unavailable." : P === "frame" ? "The editor hit a rendering error. Check the browser console for details." : P === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : P.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), K = st(() => {
      var P, T, ne;
      return ((P = n.uiState) == null ? void 0 : P.stageStatus) === "failed" || (T = n.uiState) != null && T.stageWarningDetail ? F.value : (ne = n.uiState) == null ? void 0 : ne.stageNotice;
    }), z = st(() => {
      var T;
      const P = Array.isArray((T = y.value) == null ? void 0 : T.floatingButtons) ? y.value.floatingButtons.slice() : [];
      return m.value && P.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: ze.fullscreen
      }), P;
    });
    function L() {
      const P = l.value;
      return P ? Array.from(P.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((T) => T instanceof HTMLElement ? !T.hidden && T.tabIndex >= 0 && T.offsetParent !== null : !1) : [];
    }
    function C() {
      var ne;
      const T = L()[0] || l.value;
      (ne = T == null ? void 0 : T.focus) == null || ne.call(T);
    }
    function U() {
      var P;
      s != null && s.isConnected && ((P = s.focus) == null || P.call(s)), s = null;
    }
    function q(P) {
      var T, ne, Z, le;
      if (!P.defaultPrevented) {
        if (P.key === "Tab") {
          const ae = L();
          if (!ae.length) {
            P.preventDefault(), (ne = (T = l.value) == null ? void 0 : T.focus) == null || ne.call(T);
            return;
          }
          const Y = ae[0], S = ae[ae.length - 1], D = document.activeElement;
          if (P.shiftKey) {
            (D === Y || D === l.value || !((Z = l.value) != null && Z.contains(D))) && (P.preventDefault(), S.focus());
            return;
          }
          (D === S || !((le = l.value) != null && le.contains(D))) && (P.preventDefault(), Y.focus());
          return;
        }
        P.key === "Escape" && i("close");
      }
    }
    function ce() {
      a || (o = document.body.style.overflow, document.body.style.overflow = "hidden", a = !0);
    }
    function $() {
      a && (document.body.style.overflow = o, a = !1);
    }
    function me(P) {
      document.removeEventListener("keydown", q), P ? (s || (s = document.activeElement), ce(), document.addEventListener("keydown", q), sl(() => {
        C();
      })) : ($(), U());
    }
    return cl(() => {
      me(n.open);
    }), fa(() => {
      $(), document.removeEventListener("keydown", q), U();
    }), li(() => n.open, (P) => {
      me(P);
    }), (P, T) => e.open ? (De(), Ve("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: T[2] || (T[2] = It((ne) => i("close"), ["self"]))
    }, [
      Ce("section", {
        ref_key: "modalRef",
        ref: l,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        Ce("div", BM, [
          Ce("div", UM, [
            T[3] || (T[3] = Ce("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            T[4] || (T[4] = Ce("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            T[5] || (T[5] = Ce("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (De(), Ve("div", YM, rt(K.value), 1)) : dt("", !0),
            T[6] || (T[6] = Ce("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Ce("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Ke(Vx, {
              ref_key: "paintOverlaysRef",
              ref: u
            }, null, 512),
            Ke(rg, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: h,
              onFileCancelled: g
            }, null, 512),
            m.value ? dt("", !0) : (De(), Ve(Xe, { key: 1 }, [
              Ke(PM, {
                buttons: e.uiState.toolButtons || y.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Ke(sx, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Ke(Lx, {
                "paint-swatches": e.paintSwatches,
                panes: y.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Ke($M, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Ke(WM, {
              buttons: e.uiState.viewButtons || y.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Ke(nx, {
              buttons: e.uiState.floatingButtons || z.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Ke(Kx, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Ke(kM, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Ke(px, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Ke(xM, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: T[0] || (T[0] = (ne) => i("timeline", ne))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? dt("", !0) : (De(), Kn(Yk, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: T[1] || (T[1] = (ne) => i("timeline", ne))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, KM)
    ])) : dt("", !0);
  }
}, Yn = "loading", ca = "ready", Hn = "failed";
function Sg(e, t = "") {
  return e && (e.__panoLoadState = Yn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function wg(e, t = "") {
  return e && (e.__panoLoadState = ca, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function xg(e, t = "") {
  return e && (e.__panoLoadState = Hn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function eu(e, t) {
  return e ? e.__panoLoadState === Hn ? Hn : typeof t == "function" && t(e) ? ca : Yn : ca;
}
function tu(e) {
  return eu(e) === Hn;
}
function XM({ presented: e, background: t = ca, stickers: r = [] } = {}) {
  if (!e) return { status: Yn, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === Yn, o = n.includes(Yn);
  if (i && o) return { status: Yn, detail: "mixed" };
  if (i) return { status: Yn, detail: "background" };
  if (o) return { status: Yn, detail: "stickers" };
  const a = t === Hn, s = n.includes(Hn);
  return a && s ? { status: Hn, detail: "mixed" } : a ? { status: Hn, detail: "background" } : s ? { status: Hn, detail: "stickers" } : { status: ca, detail: "" };
}
const JM = "state_json", ZM = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), vd = "sticker_image_1", QM = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), kg = 0.01, eP = "external_image", Ji = "pano_sticker_input_images", Mg = "pano_sticker_input_videos", Pg = "pano_sticker_input_frames", Ng = "pano_sticker_input_video_meta", tP = !0, _l = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], hr = Math.PI / 180, mi = 180 / Math.PI, nu = 1, Cg = "rgb(255, 221, 87)", nP = "rgb(228, 228, 231)", rP = "rgb(180, 150, 60)", iP = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, oP = 64, tp = 40, ac = 16, aP = 0.45, np = 180, sP = 160, Js = 24, lP = 4, cP = 4, uP = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function sc(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function dP(e) {
  return 1 - Math.pow(1 - e, 3);
}
function fP(e, t, r) {
  const n = Ee((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function pP(e) {
  return e * e * e;
}
function Sl(e, t, r) {
  return { x: e, y: t, z: r };
}
function rp(e, t) {
  return Sl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ip(e, t) {
  return Sl(e.x * t, e.y * t, e.z * t);
}
function lc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function hP(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Sl(e.x / t, e.y / t, e.z / t);
}
function Xa(e) {
  return {
    yaw: $t(Math.atan2(e.x, e.z) * mi),
    pitch: Ee(Math.asin(Ee(e.y, -1, 1)) * mi, -90, 90)
  };
}
function Rr(e, t) {
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
function cc(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), a = Number(e.y || 0) - Number(t.y || 0), s = n * n + i * i;
  if (s <= 1e-6) return To(e, t);
  const l = Ee((o * n + a * i) / s, 0, 1), c = Number(t.x || 0) + n * l, u = Number(t.y || 0) + i * l, d = Number(e.x || 0) - c, f = Number(e.y || 0) - u;
  return d * d + f * f;
}
function jn(e, t, r) {
  return e + (t - e) * r;
}
function cr(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Ee(r, 0, 1)})`;
}
function mP(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Ja = { fillStyle: "", url: "" };
function gP(e, t, r) {
  if (Ja.url && Ja.fillStyle === String(e || ""))
    return Ja.url;
  const n = mP(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Js}" height="${Js}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Ja = { fillStyle: String(e || ""), url: n }, n;
}
function Zs(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function Tn(e) {
  return {
    r: Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Ee(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function ln(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function yP(e) {
  return _l.some((t) => Zs(e, t.color));
}
function ru(e, t, r) {
  const n = (Number(e) % 1 + 1) % 1, i = Ee(Number(t), 0, 1), o = Ee(Number(r), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const a = Math.floor(n * 6), s = n * 6 - a, l = o * (1 - i), c = o * (1 - s * i), u = o * (1 - (1 - s) * i);
  switch (a % 6) {
    case 0:
      return { r: o, g: u, b: l };
    case 1:
      return { r: c, g: o, b: l };
    case 2:
      return { r: l, g: o, b: u };
    case 3:
      return { r: l, g: c, b: o };
    case 4:
      return { r: u, g: l, b: o };
    default:
      return { r: o, g: l, b: c };
  }
}
function iu(e) {
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
function bP(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function op(e) {
  const { paintCount: t, maskCount: r } = bP(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function Ag(e, t, r, n, i) {
  const o = r.bbox, a = r.transform || {}, s = Number(o.u0 || 0) * n, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * n), u = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), d = s + c * 0.5 + Number(a.du || 0) * n, f = l + u * 0.5 + Number(a.dv || 0) * i, h = Number(a.rot_deg || 0) * hr, g = Math.max(0.01, Number(a.scale || 1));
  for (const m of [-n, 0, n])
    e.save(), e.translate(d + m, f), e.rotate(h), e.scale(g, g), e.drawImage(t, -c * 0.5, -u * 0.5, c, u), e.restore();
}
function Di(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Za(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function vP(e, t) {
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
function ii(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function _P(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function SP(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function wP(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const Ig = "pano_suite.ui_settings.v1", Eg = "pano_suite.node_grid_visibility.v1";
let Oi = null, or = null;
function bs(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function xP() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Ig)) || "").trim();
    if (!t) return Oi ? bs(Oi) : null;
    const r = JSON.parse(t), n = bs(r);
    return Oi = n, n;
  } catch {
    return Oi ? bs(Oi) : null;
  }
}
function kP(e) {
  var r;
  const t = bs(e);
  Oi = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(Ig, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Og() {
  var e;
  if (or && typeof or == "object")
    return or;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Eg)) || "").trim();
    if (!t)
      return or = {}, or;
    const r = JSON.parse(t);
    return or = r && typeof r == "object" ? r : {}, or;
  } catch {
    return or = {}, or;
  }
}
function MP(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = Og()[r];
  return typeof i == "boolean" ? i : !!t;
}
function PP(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = Og();
  n[r] = !!t, or = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(Eg, JSON.stringify(n));
  } catch {
  }
}
function NP(e, t) {
  const r = { ...e }, n = t.map((i) => i(uc(e, i.name)));
  for (const { connect: i, ...o } of n) {
    for (const a of Object.keys(o))
      if (a in r) throw new Error(`Panorama editor: ${a} is provided twice`);
    Object.assign(r, o);
  }
  return n.forEach((i, o) => i.connect(uc(r, t[o].name))), uc(r, "showEditor");
}
function uc(e, t) {
  return new Proxy(e, {
    get(r, n) {
      if (!(n in r)) throw new Error(`Panorama editor: ${t} takes ${String(n)}, which nothing provides`);
      return r[n];
    }
  });
}
const ou = 0.5, Fg = "PANO_SCENE";
function CP(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: Zn(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function AP(e, t, r) {
  return e * r / t;
}
function IP(e) {
  return !e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length ? null : {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: vn(e("pano_upstream_coverage")[0])
  };
}
const EP = "bg_media is not used";
function OP(e, t) {
  return e === Fg && t === null;
}
function FP(e, t, r) {
  if (!e.painting_visible) return [];
  const { groups: n, raster_objects: i } = e.painting, o = [
    ...n.map((l) => ({ kind: "group", id: l.actionGroupId, zIndex: l.z_index })),
    ...i.filter((l) => l.layerKind === "paint").map((l) => ({ kind: "raster", id: l.id, zIndex: l.z_index, item: l }))
  ], a = Math.max(-1, ...o.map((l) => l.zIndex), ...e.stickers.map((l) => l.z_index ?? 0)) + 1, s = new Set(n.map((l) => l.actionGroupId));
  for (const l of t) s.has(l) || o.push({ kind: "group", id: l, zIndex: a });
  return r && o.push({ kind: "mask", id: "mask", zIndex: a }), o;
}
function Nr(e, t) {
  return Array.isArray(e[t]) ? e[t] : [];
}
function ap(e, t) {
  return { ...e, id: `upstream:${t}:${e.id}`, opacity: e.opacity * ou };
}
function TP(e, t, r, { media: n, paintLayers: i, source: o }) {
  const { sceneState: a, ui: s } = e, l = ma(a, r), c = (m) => m.visible ? n(m) : null, u = wm(a, r, { media: c, zIndex: (m) => m.z_index, paintLayers: i, evaluated: l }).map((m) => ap(m, t)), d = km(a, r, a.stickers, { media: c, evaluated: l }).map((m) => ap(m, t)), f = [], h = zs(Nr(s, "pano_scene_files"), Nr(s, "pano_scene_meta"), o);
  h && f.push({ slot: `${t}:scene`, urls: h.urls.filter(Boolean), request: Xu(h, l.scene), value: l.scene, opacity: ou });
  const g = zs(Nr(s, "pano_sticker_files"), Nr(s, "pano_sticker_meta"), o);
  if (g) {
    const m = hm(g, a, l);
    f.push({ slot: `${t}:sticker`, urls: mm(g, a), request: m, value: (m == null ? void 0 : m.value) ?? null, opacity: ((m == null ? void 0 : m.opacity) ?? 1) * ou });
  }
  return { evaluated: l, sky: u, stickers: d, items: f };
}
const jr = /* @__PURE__ */ new Map(), DP = 12;
function LP(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = jr.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (jr.delete(t), jr.set(t, r), r);
}
function VP(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (jr.delete(r), jr.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); jr.size > DP; ) {
      const i = jr.keys().next().value;
      if (!i) break;
      jr.delete(i);
    }
}
function RP(e) {
  const {
    comfyMedia: t,
    cutoutV2: r,
    editor: n,
    editorView: i,
    floatingRightEl: o,
    imageCache: a,
    loadPreferredExactLinkedImage: s,
    mediaAssetSource: l,
    mediaSource: c,
    mediaUiImage: u,
    node: d,
    portStillCanvas: f,
    portVideoEl: h,
    readOnly: g,
    runtime: m,
    scheduler: y,
    stageWrap: F,
    state: K,
    stateV2: z,
    stillCanvas: L,
    studio: C,
    timelinePlayhead: U,
    type: q,
    uiState: ce,
    videoEl: $
  } = e;
  let me, P, T, ne, Z, le;
  const ae = {
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
  }, Y = 9, S = [];
  let D = 0;
  const oe = () => {
    var je, Be;
    const ee = (je = F == null ? void 0 : F.getBoundingClientRect) == null ? void 0 : je.call(F), be = (Be = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : Be.call(o), E = Math.max(0, Number((ee == null ? void 0 : ee.width) || 0)), de = be ? Math.max(0, Number(be.width || 0)) : 0, Te = de > 0 ? de + 14 + 12 : 72, Ie = Math.max(280, Math.floor(E - Te * 2)), Le = n.fullscreen ? Math.min(1200, Ie) : Ie;
    ce.videoTransport.shellMaxWidthPx = Le;
  }, X = () => {
    D || (D = y.requestFrame(() => {
      D = 0, oe();
    }));
  }, fe = (ee) => {
    if (!(ee instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(ee.audioTracks) && ee.audioTracks.length > 0 || ee.audioTracks && typeof ee.audioTracks.length == "number" && ee.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof ee.mozHasAudio == "boolean") return ee.mozHasAudio;
    } catch {
    }
    try {
      if (Number(ee.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!ce.videoTransport.hasAudio;
  }, xe = typeof ResizeObserver < "u" ? new ResizeObserver(() => X()) : null;
  xe == null || xe.observe(F), o && (xe == null || xe.observe(o)), S.push(() => {
    var ee;
    D && (y.cancelFrame(D), D = 0), (ee = xe == null ? void 0 : xe.disconnect) == null || ee.call(xe);
  }), X();
  const Q = () => {
    ae.thumbnailJobId += 1, ae.thumbnailSrc = "", ce.videoTransport.thumbnails = [], ce.videoTransport.thumbnailCount = Y;
  }, O = async (ee, be, E) => {
    const de = String(ee || "").trim();
    if (!de) {
      Q();
      return;
    }
    const Me = LP(de);
    if (Me) {
      ae.thumbnailSrc = de, ce.videoTransport.thumbnails = Me.thumbnails, ce.videoTransport.thumbnailCount = Me.thumbnailCount;
      return;
    }
    const Ae = ++ae.thumbnailJobId;
    ae.thumbnailSrc = de, ce.videoTransport.thumbnails = [], ce.videoTransport.thumbnailCount = Y;
    const Te = ha(document, "editor.thumbnails");
    Te.preload = "auto", Te.muted = !0, Te.playsInline = !0, Te.crossOrigin = "anonymous";
    const Ie = nn({ label: "editor.thumbnail" });
    try {
      const Le = await new Promise((Gt) => {
        let Qt = !1;
        const zt = (wt) => {
          Qt || (Qt = !0, Gt(wt));
        };
        Te.addEventListener("loadedmetadata", () => zt(!0), { once: !0 }), Te.addEventListener("canplay", () => zt(!0), { once: !0 }), Te.addEventListener("error", () => zt(!1), { once: !0 }), Te.src = de, Te.load();
      });
      if (ae.thumbnailJobId !== Ae) return;
      const je = Number(Te.videoWidth || 0), Be = Number(Te.videoHeight || 0);
      if (!Le || je < 1 || Be < 1) {
        ae.thumbnailFailedSrcs.add(de);
        return;
      }
      const $e = Math.max(0, Number(Te.duration || be || 0)), He = 46, Tt = Math.max(72, Math.round(je / Be * He));
      Ie.width = Tt, Ie.height = He;
      const Dt = Ie.getContext("2d");
      if (!Dt) return;
      const Pt = [], Et = (Gt) => new Promise((Qt) => {
        let zt = !1;
        const wt = () => {
          zt || (zt = !0, Qt());
        };
        Te.addEventListener("seeked", wt, { once: !0 }), Te.addEventListener("error", wt, { once: !0 });
        try {
          Te.currentTime = Gt;
        } catch {
          wt();
        }
      });
      for (let Gt = 0; Gt < Y; Gt += 1) {
        if (ae.thumbnailJobId !== Ae) return;
        const Qt = Y <= 1 ? 0 : Gt / (Y - 1), zt = $e > 0 ? Math.max(0, Math.min($e - Math.max(1e-3, 0.5 / Math.max(1, Number(E || 24))), $e * Qt)) : 0;
        if (await Et(zt), ae.thumbnailJobId !== Ae) return;
        Dt.clearRect(0, 0, Tt, He), Dt.drawImage(Te, 0, 0, Tt, He), Pt.push({
          id: `thumb-${Gt}`,
          src: Ie.toDataURL("image/jpeg", 0.72),
          time: zt,
          label: H(zt)
        });
      }
      if (ae.thumbnailJobId !== Ae) return;
      ce.videoTransport.thumbnails = Pt, ce.videoTransport.thumbnailCount = Pt.length || Y, VP(de, {
        thumbnails: Pt,
        thumbnailCount: Pt.length || Y,
        duration: $e,
        fps: E
      });
    } finally {
      Te.removeAttribute("src"), Te.load(), Zo(Ie);
    }
  };
  S.push(() => {
    Q();
  });
  const J = Um({
    video: $ instanceof HTMLVideoElement ? $ : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (ee) => y.requestFrame(ee),
      cancelFrame: (ee) => y.cancelFrame(ee)
    },
    fps: G,
    span: () => {
      if (z) return le();
      const ee = Math.round(Number(ce.videoTransport.duration || 0) * G());
      return $.loop || !(ee > 0) ? 1 / 0 : ee;
    },
    loop: () => z,
    onFrame: (ee) => {
      z ? T(ee) : v(), P({ cause: "frame_view", localOnly: !0, reason: lt.PLAYHEAD });
    },
    onCapture: () => {
      M() && (m.backgroundDirty = !0);
    },
    onChange: () => {
      v(), U.playing.value = J.playing, Z(), P({ cause: "frame_view", localOnly: !0, reason: lt.PLAYHEAD });
    }
  });
  S.push(() => J.dispose());
  const ie = z && h instanceof HTMLVideoElement ? sd({
    video: h,
    onCapture: () => {
      var E;
      const ee = Number(h.videoWidth || 0), be = Number(h.videoHeight || 0);
      ee < 1 || be < 1 || (f.width = ee, f.height = be, (E = f.getContext("2d")) == null || E.drawImage(h, 0, 0), f.__panoFrameIdx += 1, P({ cause: "frame_view", localOnly: !0, reason: lt.MEDIA }));
    },
    onChange: () => P({ cause: "frame_view", localOnly: !0, reason: lt.MEDIA })
  }) : null;
  ie && S.push(() => ie.dispose());
  const Se = z ? rd({
    createImage: (ee, be) => {
      const E = new Image();
      return E.onload = be, E.onerror = be, E.src = ee, E;
    },
    onLoad: () => P({ cause: "frame_view", localOnly: !0, reason: lt.MEDIA })
  }) : null;
  if ($ instanceof HTMLVideoElement) {
    const ee = () => {
      te(), P({ cause: "frame_view", localOnly: !0 });
    }, be = () => {
      v({
        hasAudio: ce.videoTransport.hasAudio,
        muted: $.muted,
        volume: Number($.volume ?? ce.videoTransport.volume ?? 1)
      });
    }, E = () => {
      const de = $.dataset.panoSrc;
      de && (ae.failedSrcs.add(de), te(), P());
    };
    for (const [de, Me] of [
      ["loadedmetadata", ee],
      ["loadeddata", ee],
      ["canplay", ee],
      ["volumechange", be],
      ["error", E]
    ])
      $.addEventListener(de, Me), S.push(() => $.removeEventListener(de, Me));
  }
  function _e(ee) {
    return t.uiList(d, ee);
  }
  function I(ee) {
    return t.uiValue(d, ee);
  }
  function re() {
    const ee = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
    if (Es(ee))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const be = N();
    return be ? { videoKey: be.videoKey, metaKey: be.metaKey } : q === "stickers" || q === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function _() {
    const { metaKey: ee } = re(), be = I(ee);
    return Array.isArray(be) && be.length > 0 && be[0] && typeof be[0] == "object" ? be[0] : be && typeof be == "object" ? be : null;
  }
  function w(ee) {
    return ee ? ee instanceof HTMLVideoElement ? [
      String(ee.currentSrc || ee.src || ""),
      Number(ee.videoWidth || 0),
      Number(ee.videoHeight || 0)
    ].join("|") : ee instanceof HTMLCanvasElement ? [
      "canvas",
      Number(ee.width || 0),
      Number(ee.height || 0),
      String(ee.__panoFrameIdx || 0)
    ].join("|") : [
      String(ee.currentSrc || ee.src || ""),
      Number(ee.naturalWidth || ee.width || 0),
      Number(ee.naturalHeight || ee.height || 0)
    ].join("|") : "none";
  }
  function H(ee) {
    const be = Math.max(0, Math.floor(Number(ee || 0))), E = Math.floor(be / 60), de = be % 60;
    return `${E}:${String(de).padStart(2, "0")}`;
  }
  function G() {
    return z ? K.timeline.fps : ae.metaFps || 1e3;
  }
  function v(ee = {}) {
    const be = Number(ee.duration ?? ce.videoTransport.duration ?? 0), E = Math.max(1, Number(ee.fps ?? ce.videoTransport.fps ?? 24)), de = J.frame / G(), Me = Object.prototype.hasOwnProperty.call(ee, "ready") ? !!ee.ready : !!ce.videoTransport.ready, Ae = J.playing, Te = Object.prototype.hasOwnProperty.call(ee, "visible") ? !!ee.visible : !!ce.videoTransport.visible, Ie = Object.prototype.hasOwnProperty.call(ee, "muted") ? !!ee.muted : !!($ instanceof HTMLVideoElement ? $.muted : ce.videoTransport.muted), Le = Number(
      Object.prototype.hasOwnProperty.call(ee, "volume") ? ee.volume : $ instanceof HTMLVideoElement ? $.volume : ce.videoTransport.volume
    ), je = Object.prototype.hasOwnProperty.call(ee, "hasAudio") ? !!ee.hasAudio : fe($), Be = Object.prototype.hasOwnProperty.call(ee, "loop") ? !!ee.loop : !!ce.videoTransport.loop;
    Object.assign(ce.videoTransport, {
      ready: Me,
      playing: Ae,
      visible: Te,
      loop: Be,
      currentTime: Number.isFinite(de) ? de : 0,
      duration: Number.isFinite(be) ? be : 0,
      progressPct: be > 1e-6 ? Math.max(0, Math.min(100, de / be * 100)) : 0,
      currentTimeLabel: H(de),
      durationLabel: H(be),
      frameCount: Math.max(0, Number(ee.frameCount ?? ce.videoTransport.frameCount ?? 0)),
      fps: E,
      hasAudio: je,
      muted: Ie,
      volume: Math.max(0, Math.min(1, Number.isFinite(Le) ? Le : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(Le) ? Le : 1)) * 100),
      thumbnails: Array.isArray(ee.thumbnails) ? ee.thumbnails : ce.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(ee.thumbnailCount ?? ce.videoTransport.thumbnailCount ?? Y))
    });
  }
  function x() {
    return !!($ instanceof HTMLVideoElement && !z && $.getAttribute("src") && n.primaryTool !== "paint" && n.primaryTool !== "mask");
  }
  function V() {
    if (!($ instanceof HTMLVideoElement) || !ce.videoTransport.hasAudio) return;
    const ee = !$.muted;
    $.muted = ee, !ee && Number($.volume || 0) <= 0 && ($.volume = Math.max(0.01, Number(ce.videoTransport.volume || 1))), v({
      hasAudio: ce.videoTransport.hasAudio,
      muted: $.muted,
      volume: Number($.volume ?? ce.videoTransport.volume ?? 1)
    });
  }
  function k() {
    v({
      visible: x()
    });
  }
  function M() {
    if (!($ instanceof HTMLVideoElement) || Number($.videoWidth || 0) < 1 || Number($.videoHeight || 0) < 1) return !1;
    const ee = Number($.videoWidth || 0), be = Number($.videoHeight || 0);
    (L.width !== ee || L.height !== be) && (L.width = ee, L.height = be);
    const E = L.getContext("2d");
    return E ? (E.clearRect(0, 0, ee, be), E.drawImage($, 0, 0, ee, be), L.__panoFrameIdx = Number(L.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function A() {
    return !J.showsVideo && Number(L.width || 0) > 0 && Number(L.height || 0) > 0 && Number(L.__panoFrameIdx || 0) > 0 ? L : $ instanceof HTMLVideoElement && Number($.videoWidth || 0) > 0 && Number($.videoHeight || 0) > 0 && Number($.readyState || 0) >= 2 ? $ : null;
  }
  function B() {
    L.__panoFrameIdx = 0, m.backgroundDirty = !0;
  }
  function te() {
    if (!($ instanceof HTMLVideoElement)) return null;
    const { videoKey: ee } = re(), be = (N() || en(d, "background")) && _e(ee)[0] || null, E = c(be), de = [E, t.linkedVideoFile(d, R())].filter(Boolean), Me = de.find(($e) => !ae.failedSrcs.has($e)) || "";
    ae.videoFailed = !Me && de.length > 0;
    const Ae = Me && Me === E ? _() : null;
    ae.metaFps = Number(Ae == null ? void 0 : Ae.fps) > 0 ? Number(Ae.fps) : 0;
    const Te = Math.max(1, Number((Ae == null ? void 0 : Ae.fps) || (z ? K.timeline.fps : 24))), Ie = $.dataset.panoSrc === Me && Number.isFinite($.duration) ? $.duration : 0, Le = Number((Ae == null ? void 0 : Ae.duration) || ((Ae == null ? void 0 : Ae.frames) > 0 ? Ae.frames / Te : Ie)), je = Math.max(0, Number((Ae == null ? void 0 : Ae.frames) || Math.round(Le * Te))), Be = !!(Ae != null && Ae.has_audio) || fe($);
    return Me && $.dataset.panoSrc !== Me ? ($.pause(), B(), $.dataset.panoSrc = Me, $.loop = !z && !!ce.videoTransport.loop, $.muted = !!ce.videoTransport.muted, $.volume = Math.max(0, Math.min(1, Number(ce.videoTransport.volume ?? 1))), $.src = Me, $.load(), J.setSource(!0), z || J.seek(0)) : !Me && $.getAttribute("src") && ($.pause(), $.removeAttribute("src"), delete $.dataset.panoSrc, $.load(), B(), Q(), J.setSource(!1)), z || ($.loop = !!ce.videoTransport.loop), Me && !z && ae.thumbnailSrc !== Me && !ae.thumbnailFailedSrcs.has(Me) && O(Me, Le, Te), Me || Q(), v({
      ready: !!Me,
      visible: !!Me && x(),
      duration: Le,
      frameCount: je,
      fps: Te,
      hasAudio: Be,
      loop: !!$.loop,
      muted: !!$.muted,
      volume: Number($.volume ?? ce.videoTransport.volume ?? 1),
      thumbnailCount: ce.videoTransport.thumbnailCount
    }), Me || null;
  }
  function ge(ee, be = null) {
    return u(d, ee, a, be || (() => P()));
  }
  function W(ee = null) {
    return en(d, "external-sticker") ? ge(Ji, ee) : null;
  }
  function pe() {
    if (!en(d, "external-sticker")) return null;
    const ee = _e(Ng)[0];
    if (!ee || typeof ee != "object") return null;
    const be = _e(Pg).map(c).filter(Boolean);
    if (be.length) return { frames: be, meta: ee };
    const E = c(_e(Mg)[0] || null);
    return E ? { src: E, meta: ee } : null;
  }
  function we() {
    const ee = K.stickers.find(me), be = ee ? pe() : null, E = be ? td(ee.clip, n.frame, K.timeline.fps, be.meta) : null;
    ie.follow({ src: (be == null ? void 0 : be.src) || "", time: E, playing: J.advancing, fps: K.timeline.fps });
    const de = ee ? ve(ee) : null, Me = be != null && be.frames ? Se.picture(be.frames, E, be.meta, de) : ie.picture(f, de);
    return Me ? { media: Me, revision: w(Me), source: nd(be, de) } : null;
  }
  function Pe() {
    return !z || !en(d, "scene") ? null : zs(_e("pano_scene_files"), _e("pano_scene_meta"), c);
  }
  function ue() {
    return !z || !en(d, "external-sticker") ? null : zs(_e("pano_sticker_files"), _e("pano_sticker_meta"), c);
  }
  function ve(ee) {
    var Te;
    if (ee && typeof ee == "object" && (me(ee) || ee.external === !0))
      return W(() => {
        Er(d, "image-loaded");
      });
    const be = z ? Ne(ee) : String(ee && typeof ee == "object" ? ee.asset_id || ee.assetId || "" : ee || "");
    if (!be) return null;
    const E = a.get(be);
    if (E) return E;
    const de = z ? $s(ee.source) : (Te = K.assets) == null ? void 0 : Te[be], Me = l(de);
    if (!Me) return null;
    const Ae = new Image();
    return Sg(Ae, Me), Ae.onload = () => {
      wg(Ae, Me), P();
    }, Ae.onerror = () => {
      xg(Ae, Me), P();
    }, Ae.src = Me, a.set(be, Ae), Ae;
  }
  function Ne(ee) {
    const { source: be } = ee;
    return be.filename ? `file:${be.storage}:${be.subfolder}:${be.filename}` : `sticker:${ee.id}`;
  }
  function p() {
    if (q === "cutout" && !r) {
      const Ae = A();
      if (Ae) return Ae;
      const Te = s(
        d,
        ["erp_image", "bg_erp"],
        () => P(),
        "background:cutout:erp_image|bg_erp"
      );
      return Te && !tu(Te) ? Te : u(d, "pano_input_images", a, () => P()) || Te || null;
    }
    const ee = A();
    if (ee) return ee;
    const be = N(), E = be || en(d, "background") ? u(d, (be == null ? void 0 : be.imageKey) ?? "pano_input_images", a, () => P()) : null;
    if (E && !tu(E)) return E;
    if ($ instanceof HTMLVideoElement && $.dataset.panoSrc) return $;
    if (be) return E;
    const de = R();
    return s(d, de, () => P(), `background:${de.join("|")}`) || E || null;
  }
  function j() {
    var be;
    const ee = (Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs : []).findIndex((E) => (E == null ? void 0 : E.name) === "source");
    return ee >= 0 && d.graph ? String(((be = d.getInputLink(ee)) == null ? void 0 : be.type) || "") : "";
  }
  function N() {
    return !C || !en(d, "scene") ? null : IP(_e);
  }
  function b() {
    var ee;
    return ((ee = N()) == null ? void 0 : ee.coverage) ?? vn(K.coverage);
  }
  function R() {
    if (N()) return [];
    if (q === "cutout") return r ? j() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const ee = Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs.map((de) => String((de == null ? void 0 : de.name) || "")) : [], be = ee.includes("erp_image"), E = ee.includes("bg_erp");
    return g && (be || E) ? be ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : q === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function se(ee) {
    return ee ? ee instanceof HTMLImageElement ? !!ee.complete && Number(ee.naturalWidth || ee.width || 0) > 0 && Number(ee.naturalHeight || ee.height || 0) > 0 : ee instanceof HTMLVideoElement ? Number(ee.videoWidth || 0) > 0 && Number(ee.videoHeight || 0) > 0 && Number(ee.readyState || 0) >= 2 : Number(ee.width || ee.naturalWidth || 0) > 0 && Number(ee.height || ee.naturalHeight || 0) > 0 : !1;
  }
  function ye() {
    if (i.failed) return { status: Hn, detail: "renderer" };
    if (!i.ready) return { status: Yn, detail: "boot" };
    const ee = p(), be = ae.videoFailed ? Hn : eu(ee, se), E = [];
    for (const de of ne()) {
      if ((de == null ? void 0 : de.visible) === !1) continue;
      const Me = ve(de);
      E.push(eu(Me, se));
    }
    return XM({
      presented: m.hasPresentedFrame,
      background: be,
      stickers: E
    });
  }
  function he() {
    $ instanceof HTMLVideoElement && $.pause(), S.forEach((ee) => {
      try {
        ee();
      } catch {
      }
    });
  }
  return {
    connect(ee) {
      ({
        isExternalSticker: me,
        requestDraw: P,
        setTimelineFrame: T,
        skyStickers: ne,
        syncTimeline: Z,
        timelineSpanFrames: le
      } = ee);
    },
    videoState: ae,
    queueVideoTransportLayout: X,
    playback: J,
    portVideo: ie,
    getNodeUiValue: I,
    getMediaRevisionToken: w,
    playbackFps: G,
    syncVideoTransportState: v,
    toggleVideoMuted: V,
    syncVideoTransportVisibility: k,
    refreshModalVideoSource: te,
    getStickerUiImage: ge,
    getExternalStickerPreviewImage: W,
    getPortMedia: pe,
    followPortSticker: we,
    getStickerImage: ve,
    stickerImageKey: Ne,
    getConnectedErpImage: p,
    backgroundCoverage: b,
    upstreamBackground: N,
    isDecodedImageReady: se,
    getStageImageStatus: ye,
    sceneFiles: Pe,
    stickerFiles: ue,
    disposeMediaSession: he
  };
}
function $P(e = 80, t = null, r = 8) {
  const n = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), a = Math.max(1, Number(r || 8));
  function s(c) {
    if (n.splice(0, n.length), i = -1, !c || typeof c != "object" || !Array.isArray(c.entries) || (c.entries.forEach((d) => {
      n.push(String(d || ""));
    }), !n.length)) return;
    const u = Number(c.index);
    Number.isInteger(u) ? u === -1 ? i = -1 : i = Math.max(0, Math.min(n.length - 1, u)) : i = n.length - 1;
  }
  function l(c) {
    n[i] !== c && (n.splice(i + 1), n.push(c), n.length > o && n.shift(), i = n.length - 1);
  }
  return s(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(c) {
      l(String(c || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const c = i - 1;
      return c < 0 || c >= n.length ? null : (i = c, n[i]);
    },
    redo() {
      const c = i + 1;
      return c < 0 || c >= n.length ? null : (i = c, n[i]);
    },
    get entries() {
      return n.slice();
    },
    get index() {
      return i;
    },
    serialize() {
      const c = n.length, u = Math.max(0, c - a), d = i >= 0 ? Math.max(0, Math.min(i, u)) : u, f = n.slice(d, d + a), h = i < 0 ? -1 : Math.max(-1, Math.min(f.length - 1, i - d));
      return {
        version: 1,
        entries: f,
        index: h
      };
    },
    hydrate: s
  };
}
const zP = 80;
function Tg(e) {
  return JSON.stringify(Qv(e));
}
function jP(e) {
  return $P(zP, { entries: [Tg(e)], index: 0 });
}
function Dg(e, t) {
  var r, n;
  return (e === "stickers" ? (r = t.active) == null ? void 0 : r.selected_sticker_id : (n = t.active) == null ? void 0 : n.selected_shot_id) ?? null;
}
function HP(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: a,
    type: s
  } = e;
  let l, c, u, d, f, h, g, m, y, F, K, z, L, C;
  function U() {
    r || (K(), rm(i), !(o && i.stickers.some(d)) && (t.historyController.commitActionGroup(Tg(i)), L()));
  }
  function q($) {
    var ne, Z;
    if (r) return;
    F();
    const me = $ < 0 ? t.historyController.undo() : t.historyController.redo();
    if (L(), !me) return;
    const P = e1(i, me), T = (ne = i.timeline) == null ? void 0 : ne.fps;
    Object.keys(i).forEach((le) => delete i[le]), Object.assign(i, P.state), K(!1), o && i.timeline.fps !== T && g.seek(Math.round(t.frame * i.timeline.fps / T)), t.selectedId = Dg(s, i), a && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((Z = u()) == null ? void 0 : Z.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), m(), n.backgroundDirty = !0, P.paintingChanged ? h() : f(), z(), C(), c(), y({ cause: "cutout_frame" });
  }
  function ce() {
    var P, T;
    const $ = Array.isArray((P = t.historyController) == null ? void 0 : P.entries) ? t.historyController.entries : [], me = Number((T = t.historyController) == null ? void 0 : T.index);
    return {
      canUndo: !r && $.length > 1 && me > 0,
      canRedo: !r && $.length > 1 && me >= 0 && me < $.length - 1
    };
  }
  return {
    connect($) {
      ({
        clearWorldSelection: l,
        commitState: c,
        getActiveCutoutShot: u,
        isUploadingSticker: d,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: h,
        playback: g,
        releaseHiddenSelection: m,
        requestDraw: y,
        stopTimelinePlayback: F,
        syncCutoutShot: K,
        syncPaintUi: z,
        syncUndoRedoButtons: L,
        updateSidePanel: C
      } = $);
    },
    pushHistory: U,
    restoreHistory: q,
    getHistoryCapabilities: ce
  };
}
function GP(e) {
  const {
    canvas: t,
    cutoutV2: r,
    editor: n,
    sceneV2: i,
    state: o,
    stateV2: a,
    type: s
  } = e;
  let l, c, u, d, f, h, g;
  function m() {
    return s === "stickers" ? y() : o.shots;
  }
  function y() {
    return i ? o.stickers.filter((p) => p.placement === "sky") : o.stickers;
  }
  function F(p) {
    return i && J(p);
  }
  function K(p) {
    return p.source.kind === "file" && !p.source.filename && !p.source.data_url;
  }
  function z(p) {
    return F(p) ? Wu(p, n.frame) : p;
  }
  function L(p, j) {
    F(p) ? Qh(p, n.frame, j) : Object.assign(p, j);
  }
  function C() {
    const p = o.painting || (o.painting = to(null));
    return Array.isArray(p.groups) || (p.groups = []), p.groups;
  }
  function U(p = "paint") {
    var R, se;
    const j = Array.isArray((se = (R = o.painting) == null ? void 0 : R[p]) == null ? void 0 : se.strokes) ? o.painting[p].strokes : [], N = [], b = /* @__PURE__ */ new Set();
    for (const ye of j) {
      const he = String((ye == null ? void 0 : ye.actionGroupId) || "").trim();
      !he || b.has(he) || (b.add(he), N.push(he));
    }
    return N;
  }
  function q() {
    return U("paint");
  }
  function ce(p, j) {
    const N = String(j || "").trim();
    return N ? `${p === "mask" ? "mask" : "paint"}:${N}` : "";
  }
  function $(p) {
    const j = String(p || "").trim();
    return j ? `raster:${j}` : "";
  }
  function me(p) {
    const j = String(p || "").trim();
    if (!j) return "";
    const N = j.match(/^raster:(.*)$/);
    return String(N ? N[1] || "" : j).trim();
  }
  function P(p, j = null) {
    const N = String(p || "").trim();
    if (!N) return { layerKind: "paint", actionGroupId: "" };
    const b = N.match(/^(paint|mask):(.*)$/);
    return b ? { layerKind: b[1] === "mask" ? "mask" : "paint", actionGroupId: String(b[2] || "").trim() } : { layerKind: j === "mask" ? "mask" : "paint", actionGroupId: N };
  }
  function T() {
    var j;
    let p = -1;
    for (const N of y())
      p = Math.max(p, Number((N == null ? void 0 : N.z_index) || 0));
    for (const N of C())
      p = Math.max(p, Number((N == null ? void 0 : N.z_index) || 0));
    for (const N of Array.isArray((j = o.painting) == null ? void 0 : j.raster_objects) ? o.painting.raster_objects : [])
      String((N == null ? void 0 : N.layerKind) || "paint") === "paint" && (p = Math.max(p, Number((N == null ? void 0 : N.z_index) || 0)));
    return p + 1;
  }
  function ne(p, j = null) {
    const N = String(p || "").trim();
    if (!N) return null;
    const b = C();
    let R = b.find((se) => String((se == null ? void 0 : se.actionGroupId) || "") === N);
    return R ? j != null && (R.z_index = Math.max(0, Number(j || 0))) : (R = {
      id: N,
      type: "strokeGroup",
      actionGroupId: N,
      z_index: j == null ? T() : Math.max(0, Number(j || 0)),
      locked: !1,
      frame: null
    }, b.push(R)), R;
  }
  function Z(p) {
    if (!(p != null && p.centerUv)) return [];
    const j = Number(p.centerUv.u || 0), N = Number(p.centerUv.v || 0), b = Number(p.halfW || 0), R = Number(p.halfH || 0);
    return [
      {
        u: ((j - b) % 1 + 1) % 1,
        v: Ee(N - R, 0, 1)
      },
      {
        u: ((j + b) % 1 + 1) % 1,
        v: Ee(N - R, 0, 1)
      },
      {
        u: ((j + b) % 1 + 1) % 1,
        v: Ee(N + R, 0, 1)
      },
      {
        u: ((j - b) % 1 + 1) % 1,
        v: Ee(N + R, 0, 1)
      }
    ];
  }
  function le() {
    const p = new Set(q()), N = C().filter((b) => p.has(String((b == null ? void 0 : b.actionGroupId) || "")));
    return p.forEach((b) => {
      N.some((R) => String((R == null ? void 0 : R.actionGroupId) || "") === b) || N.push({
        id: b,
        type: "strokeGroup",
        actionGroupId: b,
        z_index: T(),
        locked: !1,
        frame: null
      });
    }), N.sort((b, R) => Number((b == null ? void 0 : b.z_index) || 0) - Number((R == null ? void 0 : R.z_index) || 0)), o.painting.groups = N, N;
  }
  function ae(p, j, N) {
    var Ie;
    const b = (Le) => (Number(Le || 0) % 1 + 1) % 1, R = [];
    for (const Le of N) {
      const je = Le == null ? void 0 : Le.geometry, Be = (je == null ? void 0 : je.geometryKind) === "lasso_fill" ? je == null ? void 0 : je.points : (je == null ? void 0 : je.processedPoints) || (je == null ? void 0 : je.rawPoints) || (je == null ? void 0 : je.points) || [];
      Array.isArray(Be) && R.push(...Be);
    }
    if (!R.length) return null;
    const se = b(((Ie = R[0]) == null ? void 0 : Ie.u) || 0);
    let ye = 0, he = 0;
    R.forEach((Le) => {
      const je = b((Le == null ? void 0 : Le.u) || 0);
      ye += se + G(je, se), he += Number((Le == null ? void 0 : Le.v) || 0);
    });
    const ee = (ye / R.length % 1 + 1) % 1;
    let be = 1 / 0, E = -1 / 0, de = 1 / 0, Me = -1 / 0;
    R.forEach((Le) => {
      const je = b((Le == null ? void 0 : Le.u) || 0), Be = G(je, ee);
      be = Math.min(be, Be), E = Math.max(E, Be);
      const $e = Number((Le == null ? void 0 : Le.v) || 0);
      de = Math.min(de, $e), Me = Math.max(Me, $e);
    });
    const Ae = N.reduce((Le, je) => {
      const Be = c(String((je == null ? void 0 : je.toolKind) || "pen")), $e = Mn[Be] || Mn[kr], He = Math.max(1, Number((je == null ? void 0 : je.size) || 10)) * Math.max(0.1, Number(($e == null ? void 0 : $e.sizeScale) ?? 1));
      return Math.max(Le, He);
    }, 0), Te = Math.max(35e-4, Ae / 2048);
    return {
      centerUv: { u: ((ee + (be + E) * 0.5) % 1 + 1) % 1, v: Ee((de + Me) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (E - be) * 0.5 + Te,
      halfH: (Me - de) * 0.5 + Te,
      uvPad: Te
    };
  }
  function Y(p, j, N) {
    const b = String(p || "").trim();
    if (!b) return null;
    const R = C().find((ye) => String((ye == null ? void 0 : ye.actionGroupId) || "") === b);
    if (!R) return null;
    const se = N || _(b, j);
    return R.frame = ae(b, j, se), R.frame;
  }
  function S() {
    var b;
    const p = y().map((R) => ({
      type: "sticker",
      id: String((R == null ? void 0 : R.id) || ""),
      z_index: Number((R == null ? void 0 : R.z_index) || 0),
      item: R
    })), j = le().map((R) => ({
      type: "strokeGroup",
      id: String((R == null ? void 0 : R.id) || (R == null ? void 0 : R.actionGroupId) || ""),
      actionGroupId: String((R == null ? void 0 : R.actionGroupId) || ""),
      z_index: Number((R == null ? void 0 : R.z_index) || 0),
      item: R
    })), N = (Array.isArray((b = o.painting) == null ? void 0 : b.raster_objects) ? o.painting.raster_objects : []).filter((R) => String((R == null ? void 0 : R.layerKind) || "paint") === "paint").map((R) => ({
      type: "rasterObject",
      id: String((R == null ? void 0 : R.id) || ""),
      z_index: Number((R == null ? void 0 : R.z_index) || 0),
      item: R
    }));
    return [...p, ...j, ...N].sort((R, se) => Number(R.z_index || 0) - Number(se.z_index || 0));
  }
  function D(p = !0) {
    var N, b, R, se, ye, he;
    const j = S().filter((ee) => ee.type === "strokeGroup").map((ee) => String(ee.actionGroupId || "")).filter((ee) => !!ee);
    if (p) {
      const ee = String(((b = (N = n.interaction) == null ? void 0 : N.stroke) == null ? void 0 : b.actionGroupId) || "").trim(), be = String(((se = (R = n.interaction) == null ? void 0 : R.stroke) == null ? void 0 : se.layerKind) || "").trim(), E = String(((he = (ye = n.interaction) == null ? void 0 : ye.stroke) == null ? void 0 : he.toolKind) || "").trim();
      ee && be === "paint" && E !== "eraser" && !j.includes(ee) && j.push(ee);
    }
    return j;
  }
  function oe(p = !0) {
    var he, ee, be, E, de, Me;
    const j = S();
    if (!p) return j;
    const N = String(((ee = (he = n.interaction) == null ? void 0 : he.stroke) == null ? void 0 : ee.actionGroupId) || "").trim(), b = String(((E = (be = n.interaction) == null ? void 0 : be.stroke) == null ? void 0 : E.layerKind) || "").trim(), R = String(((Me = (de = n.interaction) == null ? void 0 : de.stroke) == null ? void 0 : Me.toolKind) || "").trim();
    if (!N || b !== "paint" || R === "eraser" || j.some((Ae) => Ae.type === "strokeGroup" && String(Ae.actionGroupId || "") === N))
      return j;
    const se = h();
    let ye = j.reduce((Ae, Te) => Math.max(Ae, Number((Te == null ? void 0 : Te.z_index) || 0)), -1) + 1;
    return se && re(se) && String(se.actionGroupId || "") === N && (ye = Number(se.z_index || 0)), [
      ...j,
      {
        type: "strokeGroup",
        id: N,
        actionGroupId: N,
        z_index: ye,
        item: null
      }
    ].sort((Ae, Te) => Number((Ae == null ? void 0 : Ae.z_index) || 0) - Number((Te == null ? void 0 : Te.z_index) || 0));
  }
  function X() {
    return C().slice().sort((p, j) => Number((p == null ? void 0 : p.z_index) || 0) - Number((j == null ? void 0 : j.z_index) || 0)).map((p) => I(ce("paint", (p == null ? void 0 : p.actionGroupId) || (p == null ? void 0 : p.id) || ""))).filter(Boolean);
  }
  function fe() {
    var p;
    return (Array.isArray((p = o.painting) == null ? void 0 : p.raster_objects) ? o.painting.raster_objects : []).filter((j) => String((j == null ? void 0 : j.layerKind) || "paint") === "paint").slice().sort((j, N) => Number((j == null ? void 0 : j.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0)).map((j) => Se($((j == null ? void 0 : j.id) || ""))).filter(Boolean);
  }
  function xe() {
    return r || !Array.isArray(o.stickers) ? [] : y();
  }
  function Q() {
    return [...Array.isArray(o.shots) ? o.shots : [], ...xe()];
  }
  function O(p) {
    return !!p && Array.isArray(o.shots) && o.shots.includes(p);
  }
  function J(p) {
    return !!p && Array.isArray(o.stickers) && o.stickers.includes(p);
  }
  function ie() {
    var p;
    return Array.isArray((p = o.painting) == null ? void 0 : p.raster_objects) ? o.painting.raster_objects : [];
  }
  function Se(p) {
    const j = me(p);
    if (!j) return null;
    const N = ie().find((b) => String((b == null ? void 0 : b.id) || "").trim() === j);
    return !N || String((N == null ? void 0 : N.layerKind) || "paint") !== "paint" ? null : {
      ...N,
      id: $(j),
      type: "rasterObject",
      rasterObjectId: j
    };
  }
  function _e(p) {
    if (!p || typeof p != "object" || String(p.type || "") !== "rasterObject") return !1;
    const j = me(p.rasterObjectId || p.id || "");
    return !!j && !!Se($(j));
  }
  function I(p) {
    const j = P(p), N = String(j.actionGroupId || "").trim();
    if (!N) return null;
    const b = C().find((R) => String((R == null ? void 0 : R.id) || (R == null ? void 0 : R.actionGroupId) || "") === N || String((R == null ? void 0 : R.actionGroupId) || "") === N);
    return b ? {
      ...b,
      id: ce("paint", N),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: N
    } : null;
  }
  function re(p) {
    if (!p || typeof p != "object" || String(p.type || "") !== "strokeGroup") return !1;
    const j = String(p.actionGroupId || "").trim(), N = String(p.layerKind || "paint").trim() || "paint";
    return !!j && !!I(ce(N, j));
  }
  function _(p, j = null) {
    const N = P(p, j), b = String(N.actionGroupId || "").trim();
    return b ? d(N.layerKind).filter((R) => String((R == null ? void 0 : R.actionGroupId) || "").trim() === b) : [];
  }
  function w(p, j = "paint") {
    const N = String(p || "").trim(), R = `geomv5:${String(j || "paint").trim() || "paint"}:${N}:${n.mode}:${f()}`;
    if (n.mode === "frame") {
      const se = l(), ye = String((se == null ? void 0 : se.id) || ""), he = se ? u(se) : null;
      return `${R}:frame:${ye}:${Math.round(Number((se == null ? void 0 : se.yaw_deg) || 0) * 1e3)}:${Math.round(Number((se == null ? void 0 : se.pitch_deg) || 0) * 1e3)}:${Math.round(Number((se == null ? void 0 : se.roll_deg) ?? (se == null ? void 0 : se.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((se == null ? void 0 : se.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((se == null ? void 0 : se.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((he == null ? void 0 : he.x) || 0))}:${Math.round(Number((he == null ? void 0 : he.y) || 0))}:${Math.round(Number((he == null ? void 0 : he.w) || 0))}:${Math.round(Number((he == null ? void 0 : he.h) || 0))}`;
    }
    return `${R}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function H(p, j, N) {
    return !p || typeof p != "object" ? p : {
      ...p,
      u: ((Number(p.u || 0) + Number(j || 0)) % 1 + 1) % 1,
      v: Ee(Number(p.v || 0) + Number(N || 0), 0, 1)
    };
  }
  function G(p, j) {
    let N = Number(p || 0) - Number(j || 0);
    for (; N > 0.5; ) N -= 1;
    for (; N < -0.5; ) N += 1;
    return N;
  }
  function v(p, j = null, N = null) {
    var be;
    const b = P(p, j), R = Array.isArray(N) ? N : _(b.actionGroupId, b.layerKind), se = [];
    if (R.forEach((E) => {
      const de = (E == null ? void 0 : E.geometry) || null, Me = (de == null ? void 0 : de.geometryKind) === "lasso_fill" ? de == null ? void 0 : de.points : (de == null ? void 0 : de.processedPoints) || (de == null ? void 0 : de.rawPoints) || (de == null ? void 0 : de.points) || [];
      Array.isArray(Me) && se.push(...Me);
    }), !se.length) return { u: 0.5, v: 0.5 };
    const ye = Number(((be = se[0]) == null ? void 0 : be.u) || 0);
    let he = 0, ee = 0;
    return se.forEach((E) => {
      he += ye + G(Number((E == null ? void 0 : E.u) || 0), ye), ee += Number((E == null ? void 0 : E.v) || 0);
    }), {
      u: (he / se.length % 1 + 1) % 1,
      v: Ee(ee / se.length, 0, 1)
    };
  }
  function x(p, j, N = 1, b = 0) {
    if (!p || typeof p != "object") return p;
    const R = Number((j == null ? void 0 : j.u) || 0), se = Number((j == null ? void 0 : j.v) || 0), ye = G(Number(p.u || 0), R), he = Number(p.v || 0) - se, ee = Number(b || 0) * hr, be = Math.cos(ee), E = Math.sin(ee), de = Math.max(0.02, Number(N || 1)), Me = (ye * be - he * E) * de, Ae = (ye * E + he * be) * de;
    return {
      ...p,
      u: ((R + Me) % 1 + 1) % 1,
      v: Ee(se + Ae, 0, 1)
    };
  }
  function V(p, j, N, b = null, R = null, se = null) {
    const ye = P(p, R), he = String(ye.actionGroupId || "").trim();
    if (!he) return !1;
    const ee = d(ye.layerKind), be = Array.isArray(b) ? new Map(b.map((de) => [String((de == null ? void 0 : de.id) || ""), de])) : null;
    let E = !1;
    if (ee.forEach((de) => {
      if (String((de == null ? void 0 : de.actionGroupId) || "").trim() !== he) return;
      const Me = (be == null ? void 0 : be.get(String((de == null ? void 0 : de.id) || ""))) || de, Ae = de == null ? void 0 : de.geometry, Te = Me == null ? void 0 : Me.geometry;
      !Ae || !Te || (Array.isArray(Te.points) && (Ae.points = Te.points.map((Ie) => H(Ie, j, N)), E = !0), Array.isArray(Te.rawPoints) && (Ae.rawPoints = Te.rawPoints.map((Ie) => H(Ie, j, N)), E = !0), Array.isArray(Te.processedPoints) && (Ae.processedPoints = Te.processedPoints.map((Ie) => H(Ie, j, N)), E = !0));
    }), E && se) {
      const de = C().find((Me) => String((Me == null ? void 0 : Me.actionGroupId) || "") === he);
      de && (de.frame = null);
    }
    return E;
  }
  function k(p, j = 1, N = 0, b = null, R = null, se = null) {
    const ye = P(p, R), he = String(ye.actionGroupId || "").trim();
    if (!he) return !1;
    const ee = d(ye.layerKind), be = Array.isArray(b) ? b : _(he, ye.layerKind), E = Array.isArray(be) ? new Map(be.map((Ae) => [String((Ae == null ? void 0 : Ae.id) || ""), Ae])) : null, de = (se == null ? void 0 : se.centerUv) ?? v(he, ye.layerKind, be);
    let Me = !1;
    if (ee.forEach((Ae) => {
      if (String((Ae == null ? void 0 : Ae.actionGroupId) || "").trim() !== he) return;
      const Te = (E == null ? void 0 : E.get(String((Ae == null ? void 0 : Ae.id) || ""))) || Ae, Ie = Ae == null ? void 0 : Ae.geometry, Le = Te == null ? void 0 : Te.geometry;
      !Ie || !Le || (Array.isArray(Le.points) && (Ie.points = Le.points.map((je) => x(je, de, j, N)), Me = !0), Array.isArray(Le.rawPoints) && (Ie.rawPoints = Le.rawPoints.map((je) => x(je, de, j, N)), Me = !0), Array.isArray(Le.processedPoints) && (Ie.processedPoints = Le.processedPoints.map((je) => x(je, de, j, N)), Me = !0));
    }), Me && se) {
      const Ae = C().find((Te) => String((Te == null ? void 0 : Te.actionGroupId) || "") === he);
      Ae && (Ae.frame = null);
    }
    return Me;
  }
  function M(p, j, N, b = null) {
    const R = me(p);
    if (!R) return !1;
    const se = ie().find((E) => String((E == null ? void 0 : E.id) || "").trim() === R);
    if (!se) return !1;
    const ye = b && typeof b == "object" ? b : se, he = (ye == null ? void 0 : ye.transform) || {}, ee = Number(he.du || 0) + Number(j || 0), be = Ee(Number(he.dv || 0) + Number(N || 0), -1, 1);
    return se.transform || (se.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), se.transform.du = ee, se.transform.dv = be, !0;
  }
  function A(p, j = 1, N = null) {
    const b = me(p);
    if (!b) return !1;
    const R = ie().find((be) => String((be == null ? void 0 : be.id) || "").trim() === b);
    if (!R) return !1;
    const se = N && typeof N == "object" ? N : R, ye = (se == null ? void 0 : se.transform) || {}, he = Math.max(0.01, Number(ye.scale || 1)), ee = Ee(he * Math.max(0.01, Number(j || 1)), 0.01, 100);
    return R.transform || (R.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), R.transform.scale = ee, !0;
  }
  function B() {
    return T();
  }
  function te(p) {
    var j;
    return !p || typeof p != "object" ? !1 : a ? ((j = p.source) == null ? void 0 : j.kind) === "port" : String(p.id || "") === vd || String(p.source_kind || "") === eP;
  }
  function ge(p) {
    return !!(p && typeof p == "object" && p.visible === !1);
  }
  function W(p) {
    return te(p) && ge(p) ? bm : 1;
  }
  function pe(p, j, N = 1, b = 0) {
    if (!p || typeof p != "object") return p;
    const R = Number((j == null ? void 0 : j.u) || 0), se = Number((j == null ? void 0 : j.v) || 0), ye = G(Number(p.u || 0), R), he = Number(p.v || 0) - se, ee = Math.max(0.02, Number(N || 1)), be = Number(b || 0) * hr, E = Math.cos(be), de = Math.sin(be), Me = ye / ee, Ae = he / ee, Te = Me * E + Ae * de, Ie = -Me * de + Ae * E;
    return {
      ...p,
      u: ((R + Te) % 1 + 1) % 1,
      v: se + Ie
    };
  }
  function we(p) {
    const j = (p == null ? void 0 : p.bbox) || null, N = (p == null ? void 0 : p.transform) || {};
    return j ? {
      u: (((Number(j.u0 || 0) + Number(j.u1 || 0)) * 0.5 + Number(N.du || 0)) % 1 + 1) % 1,
      v: Ee((Number(j.v0 || 0) + Number(j.v1 || 0)) * 0.5 + Number(N.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Pe(p) {
    var ee, be, E, de;
    const j = (p == null ? void 0 : p.bbox) || null;
    if (!j) return [];
    const N = {
      u: (Number(j.u0 || 0) + Number(j.u1 || 0)) * 0.5,
      v: (Number(j.v0 || 0) + Number(j.v1 || 0)) * 0.5
    }, b = Math.max(0.01, Number(((ee = p == null ? void 0 : p.transform) == null ? void 0 : ee.scale) || 1)), R = Number(((be = p == null ? void 0 : p.transform) == null ? void 0 : be.rot_deg) || 0), se = Number(((E = p == null ? void 0 : p.transform) == null ? void 0 : E.du) || 0), ye = Number(((de = p == null ? void 0 : p.transform) == null ? void 0 : de.dv) || 0);
    return [
      { u: Number(j.u0 || 0), v: Number(j.v0 || 0) },
      { u: Number(j.u1 || 0), v: Number(j.v0 || 0) },
      { u: Number(j.u1 || 0), v: Number(j.v1 || 0) },
      { u: Number(j.u0 || 0), v: Number(j.v1 || 0) }
    ].map((Me) => H(x(Me, N, b, R), se, ye));
  }
  function ue(p) {
    const j = me((p == null ? void 0 : p.rasterObjectId) || (p == null ? void 0 : p.id) || ""), N = (p == null ? void 0 : p.transform) || {}, b = (p == null ? void 0 : p.bbox) || {}, R = `${j}:${n.mode}:${f()}:${b.u0}:${b.v0}:${b.u1}:${b.v1}:${N.du}:${N.dv}:${N.rot_deg}:${N.scale}`;
    if (n.mode === "frame") {
      const se = l(), ye = se ? u(se) : null;
      return `${R}:frame:${String((se == null ? void 0 : se.id) || "")}:${Math.round(Number((ye == null ? void 0 : ye.x) || 0))}:${Math.round(Number((ye == null ? void 0 : ye.y) || 0))}:${Math.round(Number((ye == null ? void 0 : ye.w) || 0))}:${Math.round(Number((ye == null ? void 0 : ye.h) || 0))}`;
    }
    return `${R}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function ve(p) {
    const j = String((p == null ? void 0 : p.id) || ""), N = O(p) ? "frame" : J(p) ? "sticker" : "item", b = z(p), R = [
      N,
      j,
      n.mode,
      Number((b == null ? void 0 : b.yaw_deg) || 0).toFixed(4),
      Number((b == null ? void 0 : b.pitch_deg) || 0).toFixed(4),
      Number((b == null ? void 0 : b.hFOV_deg) || 0).toFixed(4),
      Number((b == null ? void 0 : b.vFOV_deg) || 0).toFixed(4),
      Number((b == null ? void 0 : b.rot_deg) || 0).toFixed(4),
      Number((b == null ? void 0 : b.roll_deg) || 0).toFixed(4),
      Cr(b),
      F(p) && g(p)
    ].join(":");
    if (n.mode === "frame") {
      const se = l(), ye = se ? u(se) : null;
      return `${R}:frame:${String((se == null ? void 0 : se.id) || "")}:${Math.round(Number((ye == null ? void 0 : ye.x) || 0))}:${Math.round(Number((ye == null ? void 0 : ye.y) || 0))}:${Math.round(Number((ye == null ? void 0 : ye.w) || 0))}:${Math.round(Number((ye == null ? void 0 : ye.h) || 0))}`;
    }
    return `${R}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function Ne() {
    S().forEach((j, N) => {
      j.type === "sticker" && j.item && (j.item.z_index = N), j.type === "strokeGroup" && j.item && (j.item.z_index = N), j.type === "rasterObject" && j.item && (j.item.z_index = N);
    });
  }
  return {
    connect(p) {
      ({
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: c,
        getFrameViewRect: u,
        getPaintingLayerList: d,
        getPaintingRevisionKey: f,
        getSelected: h,
        sceneStickerShown: g
      } = p);
    },
    getList: m,
    skyStickers: y,
    isSceneSticker: F,
    isUploadingSticker: K,
    poseOf: z,
    writePose: L,
    getPaintingGroupList: C,
    makeStrokeGroupSelectionId: ce,
    makeRasterObjectSelectionId: $,
    parseRasterObjectSelectionId: me,
    ensurePaintingGroupEntry: ne,
    getFrameCornersUv: Z,
    ensureGroupFrame: Y,
    getDisplayListObjects: S,
    getOrderedPaintGroupIds: D,
    getOrderedDisplayListObjects: oe,
    getSelectableStrokeGroupItems: X,
    getSelectableRasterObjectItems: fe,
    cutoutStickers: xe,
    getCutoutSelectableItems: Q,
    isShotItem: O,
    isStickerItem: J,
    getRasterObjectList: ie,
    getRasterObjectItem: Se,
    isRasterObjectItem: _e,
    getStrokeGroupItem: I,
    isStrokeGroupItem: re,
    getStrokeGroupStrokes: _,
    getStrokeGeomCacheKey: w,
    shortestWrappedDelta: G,
    getStrokeGroupCenterUv: v,
    applyStrokeGroupOffset: V,
    applyStrokeGroupTransform: k,
    applyRasterObjectOffset: M,
    applyRasterObjectTransform: A,
    getNextStickerZIndex: B,
    isExternalSticker: te,
    isStickerHidden: ge,
    getStickerDisplayAlpha: W,
    inverseTransformErpPointAround: pe,
    getRasterObjectCenterUv: we,
    getRasterObjectTransformedErpPoints: Pe,
    getRasterObjectGeomCacheKey: ue,
    getSceneItemGeomCacheKey: ve,
    normalizeDisplayZIndices: Ne
  };
}
function WP(e) {
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
  let c, u, d, f, h, g, m, y, F, K, z, L, C, U, q, ce, $, me, P, T, ne, Z, le, ae, Y, S, D, oe, X, fe, xe, Q;
  function O() {
    const p = String(t.selectedId || "");
    if (!p) return null;
    const j = C(p);
    if (j) return j;
    const N = K(p);
    return N || (o ? g().find((b) => String((b == null ? void 0 : b.id) || "") === p) || null : y().find((b) => String((b == null ? void 0 : b.id) || "") === p) || null);
  }
  function J() {
    const p = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], j = [], N = /* @__PURE__ */ new Set();
    return p.forEach((b) => {
      const R = String(b || "").trim();
      if (!R || N.has(R)) return;
      N.add(R);
      const se = R === String(t.selectedId || "") ? O() : C(R) || K(R) || (o ? g().find((ye) => String((ye == null ? void 0 : ye.id) || "") === R) : y().find((ye) => String((ye == null ? void 0 : ye.id) || "") === R));
      se && j.push(se);
    }), j;
  }
  function ie(p = null) {
    const j = Array.isArray(p) ? p : J();
    if (!j || j.length < 2) return null;
    const N = j.map((be) => ae(be)).filter((be) => (be == null ? void 0 : be.visible) && Array.isArray(be.corners) && be.corners.length);
    if (!N.length) return null;
    const b = N.flatMap((be) => be.corners.map((E) => Number((E == null ? void 0 : E.x) || 0))), R = N.flatMap((be) => be.corners.map((E) => Number((E == null ? void 0 : E.y) || 0))), se = Math.min(...b), ye = Math.max(...b), he = Math.min(...R), ee = Math.max(...R);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (se + ye) * 0.5, y: (he + ee) * 0.5 },
      corners: [
        { x: se, y: he },
        { x: ye, y: he },
        { x: ye, y: ee },
        { x: se, y: ee }
      ],
      edgeMidpoints: [
        { edge: "top", x: (se + ye) * 0.5, y: he, a: { x: se, y: he }, b: { x: ye, y: he } },
        { edge: "right", x: ye, y: (he + ee) * 0.5, a: { x: ye, y: he }, b: { x: ye, y: ee } },
        { edge: "bottom", x: (se + ye) * 0.5, y: ee, a: { x: ye, y: ee }, b: { x: se, y: ee } },
        { edge: "left", x: se, y: (he + ee) * 0.5, a: { x: se, y: ee }, b: { x: se, y: he } }
      ],
      rotateStemBase: { x: (se + ye) * 0.5, y: he },
      rotateHandle: { x: (se + ye) * 0.5, y: he - 30 }
    };
  }
  function Se(p) {
    const j = String((p == null ? void 0 : p.id) || "").trim();
    return !!j && Array.isArray(t.selectedIds) && t.selectedIds.includes(j);
  }
  function _e() {
    const p = O();
    return p ? ne(p) || ce(p) ? "stroke" : me(p) ? "frame" : "image" : null;
  }
  function I(p) {
    if (!p || typeof p != "object") return !1;
    if (ne(p)) {
      const j = String(p.actionGroupId || p.id || "").trim(), N = F().find((b) => String((b == null ? void 0 : b.actionGroupId) || (b == null ? void 0 : b.id) || "").trim() === j);
      return (N == null ? void 0 : N.locked) === !0;
    }
    if (ce(p)) {
      const j = S(p.rasterObjectId || p.id || ""), N = z().find((b) => String((b == null ? void 0 : b.id) || "").trim() === j);
      return (N == null ? void 0 : N.locked) === !0;
    }
    return p.locked === !0;
  }
  function re(p = null) {
    const j = Array.isArray(p) ? p : J();
    return j.length > 0 && j.every((N) => I(N));
  }
  function _(p, j) {
    const N = j === !0;
    if (!p || typeof p != "object") return !1;
    if (ne(p)) {
      const b = String(p.actionGroupId || p.id || "").trim(), R = F().find((se) => String((se == null ? void 0 : se.actionGroupId) || (se == null ? void 0 : se.id) || "").trim() === b);
      return !R || R.locked === N ? !1 : (R.locked = N, !0);
    }
    if (ce(p)) {
      const b = S(p.rasterObjectId || p.id || ""), R = z().find((se) => String((se == null ? void 0 : se.id) || "").trim() === b);
      return !R || R.locked === N ? !1 : (R.locked = N, !0);
    }
    return p.locked === N ? !1 : (p.locked = N, !0);
  }
  function w() {
    if (r) return;
    const p = J();
    if (!p.length) return;
    const j = !re(p);
    let N = !1;
    p.forEach((b) => {
      _(b, j) && (N = !0);
    }), N && (oe(), u(), xe(), Q(), X());
  }
  function H(p) {
    pe(), s.selection = null, t.selectedId = (p == null ? void 0 : p.id) || null, t.selectedIds = p != null && p.id ? [p.id] : [], p && T(p) ? a.active.selected_sticker_id = p.id || null : a.active.selected_sticker_id = null, p && me(p) ? a.active.selected_shot_id = p.id || null : p ? me(p) || (a.active.selected_shot_id = a.active.selected_shot_id) : a.active.selected_shot_id = null;
  }
  function G(p, j = null) {
    const N = [], b = /* @__PURE__ */ new Set();
    (Array.isArray(p) ? p : []).forEach((ye) => {
      const he = String((ye == null ? void 0 : ye.id) || "").trim();
      !he || b.has(he) || (b.add(he), N.push(he));
    }), t.selectedIds = N, pe(), s.selection = null;
    const R = String(j || "").trim();
    t.selectedId = R && N.includes(R) ? R : N[N.length - 1] || null;
    const se = O();
    a.active.selected_sticker_id = se && T(se) && se.id || null, se && me(se) ? a.active.selected_shot_id = se.id || null : N.length || (a.active.selected_shot_id = null);
  }
  function v() {
    const p = (Array.isArray(a.shots) ? a.shots : []).map((N, b) => ({
      kind: "frame",
      item: N,
      label: String((N == null ? void 0 : N.label) || `Frame ${b + 1}`)
    })), j = f().map((N, b) => {
      var se, ye;
      const R = q(N) ? String(N.id || vd) : String(((ye = (se = a.assets) == null ? void 0 : se[N.asset_id]) == null ? void 0 : ye.name) || N.asset_id || N.id || `Image ${b + 1}`);
      return {
        kind: "image",
        item: N,
        label: R
      };
    });
    return [...p, ...j];
  }
  function x(p) {
    return p === "frame" ? ze.camera : p === "stroke" ? ze.paintbrush_vertical_tool : ze.image;
  }
  function V(p) {
    return !p || !p.item ? {
      label: String((p == null ? void 0 : p.label) || ""),
      icon: null
    } : {
      label: String(p.label || ""),
      icon: x(p.kind)
    };
  }
  function k() {
    if (r) return;
    const p = O();
    !p || !q(p) || (p.visible = P(p), ue(), Z(), oe(), u(), Q(), xe(), X());
  }
  function M() {
    if (r || l !== "stickers") return;
    const p = O();
    if (!p || !q(p)) return;
    const j = p.initial_pose;
    if (!j || typeof j != "object") return;
    p.yaw_deg = Number(j.yaw_deg ?? p.yaw_deg ?? 0), p.pitch_deg = Number(j.pitch_deg ?? p.pitch_deg ?? 0), p.hFOV_deg = Number(j.hFOV_deg ?? p.hFOV_deg ?? 30);
    const N = L(Ji, () => {
      X();
    });
    N && (N.complete || N.naturalWidth || N.width) ? p.vFOV_deg = d(
      Number(j.hFOV_deg ?? p.hFOV_deg ?? 30),
      Number(N.naturalWidth || N.width || 1),
      Number(N.naturalHeight || N.height || 1)
    ) : p.vFOV_deg = Number(j.vFOV_deg ?? p.vFOV_deg ?? 30), p.rot_deg = Number(j.rot_deg ?? p.rot_deg ?? 0), oe(), u(), Q(), xe(), X();
  }
  function A(p) {
    if (!p || !q(p)) return null;
    const j = p.initial_pose;
    if (!j || typeof j != "object") return null;
    const N = {
      yaw_deg: Number(j.yaw_deg ?? p.yaw_deg ?? 0),
      pitch_deg: Number(j.pitch_deg ?? p.pitch_deg ?? 0),
      hFOV_deg: Number(j.hFOV_deg ?? p.hFOV_deg ?? 30),
      vFOV_deg: Number(j.vFOV_deg ?? p.vFOV_deg ?? 30),
      rot_deg: Number(j.rot_deg ?? p.rot_deg ?? 0)
    }, b = L(Ji, () => {
      X();
    });
    return b && (b.complete || b.naturalWidth || b.width) && (N.vFOV_deg = d(
      N.hFOV_deg,
      Number(b.naturalWidth || b.width || 1),
      Number(b.naturalHeight || b.height || 1)
    )), N;
  }
  function B() {
    const p = O();
    if (!p || !q(p)) return !1;
    const j = A(p);
    if (!j) return !1;
    const N = (b, R) => Math.abs(Number(b || 0) - Number(R || 0)) <= 1e-4;
    return !(N(p.yaw_deg, j.yaw_deg) && N(p.pitch_deg, j.pitch_deg) && N(p.hFOV_deg, j.hFOV_deg) && N(p.vFOV_deg, j.vFOV_deg) && N(p.rot_deg, j.rot_deg));
  }
  function te(p = {}) {
    const N = p.preservePanelValues !== !1 ? D(O()) : null;
    N && (t.panelLastValues = {
      yaw_deg: Number(N.yaw_deg || 0),
      pitch_deg: Number(N.pitch_deg || 0),
      hFOV_deg: Number(N.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(N.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(N.rot_deg || 0),
      roll_deg: Number(N.roll_deg || 0),
      aspect_id: Cr(N)
    }), t.selectedId = null, t.selectedIds = [], pe(), t.cutoutAspectOpen = !1, a.active.selected_sticker_id = null, a.active.selected_shot_id = null;
  }
  function ge() {
    return !i || !t.worldSelectedId ? null : a.stickers.find((p) => p.id === t.worldSelectedId && p.placement === "world") || null;
  }
  function W(p) {
    H(null), t.worldSelectedId = p, n.backgroundDirty = !0;
  }
  function pe() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function we(p) {
    return !!p && !r && !p.locked;
  }
  function Pe() {
    if (l !== "cutout") return;
    const p = h();
    p && (t.selectedId = String(p.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function ue() {
    var j;
    const p = O();
    ($(p) && !fe(p) || t.selectedId === bl && U() && !c() || _e() === "stroke" && !Y()) && H(null), ((j = ge()) == null ? void 0 : j.visible) === !1 && pe();
  }
  function ve() {
    if (r) return;
    const p = J();
    if (!O() || p.length === 0 || p.some((he) => I(he))) return;
    le();
    const N = m(), b = new Set(p.map((he) => T(he) ? `sticker:${String(he.id || "")}` : ce(he) ? `rasterObject:${S(he.rasterObjectId || he.id || "")}` : `strokeGroup:${String(he.actionGroupId || he.id || "")}`)), R = [], se = [];
    if (N.forEach((he) => {
      var be, E;
      const ee = he.type === "sticker" ? `sticker:${String(((be = he.item) == null ? void 0 : be.id) || "")}` : he.type === "rasterObject" ? `rasterObject:${String(((E = he.item) == null ? void 0 : E.id) || he.id || "")}` : `strokeGroup:${String(he.actionGroupId || "")}`;
      b.has(ee) ? R.push(he) : se.push(he);
    }), !R.length || R[R.length - 1] === N[N.length - 1]) return;
    [...se, ...R].forEach((he, ee) => {
      he.type === "sticker" && he.item && (he.item.z_index = ee), he.type === "strokeGroup" && he.item && (he.item.z_index = ee), he.type === "rasterObject" && he.item && (he.item.z_index = ee);
    }), Z(), oe(), u(), xe(), X();
  }
  function Ne() {
    if (r) return;
    const p = J();
    if (!O() || p.length === 0 || p.some((he) => I(he))) return;
    le();
    const N = m(), b = new Set(p.map((he) => T(he) ? `sticker:${String(he.id || "")}` : ce(he) ? `rasterObject:${S(he.rasterObjectId || he.id || "")}` : `strokeGroup:${String(he.actionGroupId || he.id || "")}`)), R = [], se = [];
    if (N.forEach((he) => {
      var be, E;
      const ee = he.type === "sticker" ? `sticker:${String(((be = he.item) == null ? void 0 : be.id) || "")}` : he.type === "rasterObject" ? `rasterObject:${String(((E = he.item) == null ? void 0 : E.id) || he.id || "")}` : `strokeGroup:${String(he.actionGroupId || "")}`;
      b.has(ee) ? R.push(he) : se.push(he);
    }), !R.length || R[0] === N[0]) return;
    [...R, ...se].forEach((he, ee) => {
      he.type === "sticker" && he.item && (he.item.z_index = ee), he.type === "strokeGroup" && he.item && (he.item.z_index = ee), he.type === "rasterObject" && he.item && (he.item.z_index = ee);
    }), Z(), oe(), u(), xe(), X();
  }
  return {
    connect(p) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: u,
        computeStickerVFov: d,
        cutoutStickers: f,
        getActiveCutoutShot: h,
        getCutoutSelectableItems: g,
        getDisplayListObjects: m,
        getList: y,
        getPaintingGroupList: F,
        getRasterObjectItem: K,
        getRasterObjectList: z,
        getStickerUiImage: L,
        getStrokeGroupItem: C,
        hasCamera: U,
        isExternalSticker: q,
        isRasterObjectItem: ce,
        isSceneSticker: $,
        isShotItem: me,
        isStickerHidden: P,
        isStickerItem: T,
        isStrokeGroupItem: ne,
        markObjectVisualsDirty: Z,
        normalizeDisplayZIndices: le,
        objectGeom: ae,
        paintingShown: Y,
        parseRasterObjectSelectionId: S,
        poseOf: D,
        pushHistory: oe,
        requestDraw: X,
        sceneStickerShown: fe,
        updateSelectionMenu: xe,
        updateSidePanel: Q
      } = p);
    },
    getSelected: O,
    getSelectedItems: J,
    getMultiSelectionGeom: ie,
    isItemSelected: Se,
    getSelectedKind: _e,
    isItemLocked: I,
    areAllSelectedItemsLocked: re,
    toggleSelectedLock: w,
    setSelectedItem: H,
    setSelectedItems: G,
    getCutoutInspectorItems: v,
    getSelectionItemIcon: x,
    getSelectionItemLabelData: V,
    toggleSelectedExternalStickerVisibility: k,
    restoreSelectedToInitialPose: M,
    canRestoreSelectedToInitial: B,
    clearSelection: te,
    selectedWorldSticker: ge,
    selectWorldSticker: W,
    clearWorldSelection: pe,
    worldStickerEditable: we,
    applyInitialCutoutFocus: Pe,
    releaseHiddenSelection: ue,
    bringSelectedToFront: ve,
    sendSelectedToBack: Ne
  };
}
function KP(e) {
  const {
    backgroundCanvas: t,
    canvas: r,
    editor: n,
    state: i,
    studio: o
  } = e;
  let a, s, l, c, u, d, f = { key: [], projection: null };
  function h() {
    return o && a() && i.camera.projection === "erp";
  }
  function g() {
    const J = ce({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !J || J.length !== 4 ? !1 : J[0].y >= J[3].y;
  }
  function m() {
    return vm({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function y() {
    const O = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return O.some((J, ie) => J !== f.key[ie]) && (f = { key: O, projection: Sm(m(), r.width, r.height) }), f.projection;
  }
  function F(O) {
    const J = y().project(O);
    return J.z > 1e-4 ? J : null;
  }
  function K(O, J) {
    return y().ray(O, J);
  }
  function z() {
    const O = r.width, J = r.height, ie = 2;
    if (O / Math.max(J, 1) >= ie) {
      const _ = J, w = _ * ie;
      return { x: (O - w) * 0.5, y: 0, w, h: _ };
    }
    const _e = O, I = _e / ie;
    return { x: 0, y: (J - I) * 0.5, w: _e, h: I };
  }
  function L(O) {
    return {
      lon: Math.atan2(O.x, O.z),
      lat: Math.asin(Ee(O.y, -1, 1))
    };
  }
  function C(O, J = null) {
    const { lon: ie, lat: Se } = L(O), _e = z();
    let I = _e.x + (ie / (2 * Math.PI) + 0.5) * _e.w;
    const re = _e.y + (0.5 - Se / Math.PI) * _e.h;
    if (J !== null) {
      for (; I - J > _e.w / 2; ) I -= _e.w;
      for (; I - J < -_e.w / 2; ) I += _e.w;
    }
    return { x: I, y: re, z: 1 };
  }
  function U(O) {
    const J = c(O), ie = eo(
      Number(J.yaw_deg || 0),
      Number(J.pitch_deg || 0),
      Number(J.rot_deg || J.roll_deg || 0)
    ), Se = Math.tan(Ee(Number(J.hFOV_deg || 20), 0.1, 179) * 0.5 * hr), _e = Math.tan(Ee(Number(J.vFOV_deg || 20), 0.1, 179) * 0.5 * hr);
    return {
      centerDir: ie.fwd,
      right: ie.right,
      up: ie.up,
      tanX: Se,
      tanY: _e
    };
  }
  function q(O, J, ie) {
    return hP(rp(rp(O.centerDir, ip(O.right, J)), ip(O.up, ie)));
  }
  function ce(O) {
    const J = U(O);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: Se, v: _e }) => q(J, Se * J.tanX, _e * J.tanY));
  }
  function $(O, J, ie) {
    const Se = U(O), _e = (J * 2 - 1) * Se.tanX, I = (1 - ie * 2) * Se.tanY;
    return q(Se, _e, I);
  }
  function me(O) {
    const J = t.width / Math.max(1, r.width), ie = t.height / Math.max(1, r.height);
    return { x: O.x * J, y: O.y * ie, w: O.w * J, h: O.h * ie };
  }
  function P(O, J = null, ie = null, Se = null) {
    if (n.mode === "frame") {
      const _e = J || s();
      if (!_e) return [];
      const I = ie || l(_e);
      return oe(O, _e, I);
    }
    return Y(O, Se);
  }
  function T(O, J = null, ie = null, Se = null, _e = null) {
    if (!O) return null;
    if (n.mode === "unwrap") {
      const re = Y([O], _e);
      return re[0] ? { x: re[0].x, y: re[0].y, z: 1 } : null;
    }
    const I = Z(O);
    return I ? u(I, J, ie, Se) : null;
  }
  function ne(O, J) {
    if (!O || !J) return null;
    const ie = Number(J.x || 0), Se = Number(J.y || 0);
    return $(O, ie, Se);
  }
  function Z(O) {
    if (!O) return null;
    const J = (Number(O.u || 0) - 0.5) * (2 * Math.PI), ie = (0.5 - Number(O.v || 0)) * Math.PI, Se = Math.cos(ie);
    return Sl(Se * Math.sin(J), Math.sin(ie), Se * Math.cos(J));
  }
  function le(O, J) {
    if (!O || !J) return null;
    const ie = U(O), Se = lc(J, ie.centerDir);
    if (!Number.isFinite(Se) || Se <= 1e-6) return null;
    const _e = lc(J, ie.right) / Se, I = lc(J, ie.up) / Se;
    return {
      x: (_e / Math.max(1e-6, ie.tanX) + 1) * 0.5,
      y: (1 - I / Math.max(1e-6, ie.tanY)) * 0.5
    };
  }
  function ae(O) {
    if (!Array.isArray(O) || O.length < 3) return [];
    if (n.mode === "unwrap") {
      const ie = z();
      return O.map((Se) => ({
        x: ie.x + Number(Se.u || 0) * ie.w,
        y: ie.y + Number(Se.v || 0) * ie.h
      }));
    }
    const J = O.map((ie) => F(Z(ie))).filter(Boolean);
    return J.every((ie) => Number(ie.z || 0) > 0) ? J.map((ie) => ({ x: Number(ie.x || 0), y: Number(ie.y || 0) })) : [];
  }
  function Y(O, J = null) {
    if (!Array.isArray(O) || O.length < 1) return [];
    if (n.mode === "unwrap") {
      const Se = z();
      return O.map((_e) => {
        const I = (Number(_e.u || 0) % 1 + 1) % 1, re = J == null ? I : Number(J || 0) + d(I, J);
        return {
          x: Se.x + re * Se.w,
          y: Se.y + Number(_e.v || 0) * Se.h
        };
      });
    }
    const ie = O.map((Se) => F(Z(Se))).filter(Boolean);
    return ie.every((Se) => Number(Se.z || 0) > 0) ? ie.map((Se) => ({ x: Number(Se.x || 0), y: Number(Se.y || 0) })) : [];
  }
  function S(O, J = 160) {
    if (!Array.isArray(O) || O.length < 3) return !1;
    for (let ie = 0; ie < O.length; ie += 1) {
      const Se = O[ie], _e = O[(ie + 1) % O.length];
      if (!Se || !_e || !Number.isFinite(Se.x) || !Number.isFinite(Se.y) || !Number.isFinite(_e.x) || !Number.isFinite(_e.y) || Math.hypot(Number(_e.x) - Number(Se.x), Number(_e.y) - Number(Se.y)) > J) return !1;
    }
    return !0;
  }
  function D(O, J, ie) {
    if (!Array.isArray(O) || O.length < 3 || !J || !ie) return [];
    const Se = [];
    for (const _e of O) {
      const I = Z(_e), re = le(J, I);
      if (!re) return [];
      Se.push({
        x: Number(ie.x || 0) + Number(re.x || 0) * Number(ie.w || 0),
        y: Number(ie.y || 0) + Number(re.y || 0) * Number(ie.h || 0)
      });
    }
    return S(Se, Math.max(80, Math.max(ie.w, ie.h) * 0.75)) ? Se : [];
  }
  function oe(O, J, ie) {
    if (!Array.isArray(O) || O.length < 1 || !J || !ie) return [];
    const Se = [];
    for (const _e of O) {
      const I = Z(_e), re = le(J, I);
      re && Se.push({
        x: Number(ie.x || 0) + Number(re.x || 0) * Number(ie.w || 0),
        y: Number(ie.y || 0) + Number(re.y || 0) * Number(ie.h || 0)
      });
    }
    return Se;
  }
  function X(O) {
    const J = r.getBoundingClientRect();
    return {
      x: (O.clientX - J.left) / J.width * r.width,
      y: (O.clientY - J.top) / J.height * r.height
    };
  }
  function fe(O) {
    const J = r.getBoundingClientRect();
    return {
      x: Number(O.clientX) - Number(J.left || 0),
      y: Number(O.clientY) - Number(J.top || 0)
    };
  }
  function xe(O, J = performance.now()) {
    if (n.mode === "unwrap") {
      const I = z(), re = (O.x - I.x) / Math.max(1, I.w), _ = (O.y - I.y) / Math.max(1, I.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (re % 1 + 1) % 1,
        v: Ee(_, 0, 1),
        t: Number(J || 0)
      };
    }
    const ie = K(O.x, O.y), { lon: Se, lat: _e } = L(ie);
    return {
      targetKind: "ERP_GLOBAL",
      u: (Se / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ee(0.5 - _e / Math.PI, 0, 1),
      t: Number(J || 0)
    };
  }
  function Q(O, J, ie = performance.now()) {
    const Se = l(J);
    if (!Se) return null;
    const _e = {
      x: (Number(O.x) - Se.x) / Math.max(1, Se.w),
      y: (Number(O.y) - Se.y) / Math.max(1, Se.h)
    };
    if (_e.x < 0 || _e.x > 1 || _e.y < 0 || _e.y > 1) return null;
    const I = ne(J, _e);
    if (!I) return null;
    const { lon: re, lat: _ } = L(I);
    return {
      targetKind: "ERP_GLOBAL",
      u: (re / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ee(0.5 - _ / Math.PI, 0, 1),
      t: Number(ie || 0)
    };
  }
  return {
    connect(O) {
      ({
        cameraShoots: a,
        getActiveCutoutShot: s,
        getFrameViewRect: l,
        poseOf: c,
        projectSceneItemDir: u,
        shortestWrappedDelta: d
      } = O);
    },
    isErpCamera: h,
    currentViewCamera: m,
    currentViewProjection: y,
    projectDir: F,
    screenToWorldDir: K,
    getUnwrapRect: z,
    projectDirUnwrap: C,
    getStickerFrame: U,
    stickerDirFromFrame: q,
    stickerCornersDir: ce,
    stickerSampleDir: $,
    stickerCornerOrderSanity: g,
    projectEditorPoints: P,
    projectErpPointToEditor: T,
    frameLocalPointToWorldDir: ne,
    erpPointToWorldDir: Z,
    worldDirToFrameLocalPoint: le,
    projectLassoPointsToCurrentView: ae,
    projectErpLassoPointsToFrameRect: D,
    screenPos: X,
    screenPosCss: fe,
    screenPosToErpPoint: xe,
    screenPosToFrameAsErpPoint: Q,
    deviceRect: me
  };
}
function BP(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, a, s, l, c, u, d, f, h, g, m, y, F, K, z, L, C, U, q, ce, $, me, P, T, ne, Z, le, ae, Y, S, D, oe;
  function X(I, re) {
    const _ = String(I.actionGroupId || I.id || "").trim(), w = z(_, I.layerKind), H = s(_, I.layerKind, w), G = (H == null ? void 0 : H.centerUv) || K(_, I.layerKind, w), v = n.mode === "unwrap" ? Number((G == null ? void 0 : G.u) || 0) : null, x = [], V = n.mode === "frame" ? l() : null, k = V ? d(V) : null;
    for (const ue of w) {
      const ve = (ue == null ? void 0 : ue.geometry) || null, Ne = (ve == null ? void 0 : ve.geometryKind) === "lasso_fill" ? ve == null ? void 0 : ve.points : (ve == null ? void 0 : ve.processedPoints) || (ve == null ? void 0 : ve.rawPoints) || (ve == null ? void 0 : ve.points) || [], p = Z(Ne, V, k, v).filter((b) => Number.isFinite(b == null ? void 0 : b.x) && Number.isFinite(b == null ? void 0 : b.y));
      if (!p.length) continue;
      const j = c(String((ue == null ? void 0 : ue.toolKind) || "pen")), N = Mn[j] || Mn[kr];
      x.push({
        points: p,
        closed: String((ve == null ? void 0 : ve.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ue == null ? void 0 : ue.size) || 10) * Math.max(0.1, Number((N == null ? void 0 : N.sizeScale) ?? 1)) + 10),
        layerKind: String((ue == null ? void 0 : ue.layerKind) || I.layerKind || "paint")
      });
    }
    const M = le(G, null, V, k, v);
    if (!M) {
      const ue = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(re, ue), ue;
    }
    const B = u(H).map((ue) => le(ue, M.x, V, k, v)).filter((ue) => Number.isFinite(ue == null ? void 0 : ue.x) && Number.isFinite(ue == null ? void 0 : ue.y)).map((ue) => ({ x: Number(ue.x || 0), y: Number(ue.y || 0) }));
    if (B.length < 4) {
      const ue = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(re, ue), ue;
    }
    const te = (ue, ve) => ({
      x: (Number((ue == null ? void 0 : ue.x) || 0) + Number((ve == null ? void 0 : ve.x) || 0)) * 0.5,
      y: (Number((ue == null ? void 0 : ue.y) || 0) + Number((ve == null ? void 0 : ve.y) || 0)) * 0.5,
      a: ue,
      b: ve
    }), ge = te(B[0], B[1]), W = te(B[1], B[2]), pe = te(B[2], B[3]), we = te(B[3], B[0]), Pe = {
      kind: "strokeGroup",
      center: { x: Number(M.x || 0), y: Number(M.y || 0) },
      corners: B,
      edgeMidpoints: [
        { edge: "top", ...ge },
        { edge: "right", ...W },
        { edge: "bottom", ...pe },
        { edge: "left", ...we }
      ],
      rotateStemBase: { x: ge.x, y: ge.y },
      rotateHandle: { x: ge.x, y: ge.y - 30 },
      strokePaths: x,
      visible: !0
    };
    return n._strokeGeomCache.set(re, Pe), Pe;
  }
  function fe(I, re) {
    const _ = n.mode === "frame" ? l() : null, w = _ ? d(_) : null, H = f(I), G = n.mode === "unwrap" ? Number((H == null ? void 0 : H.u) || 0) : null, v = le(H, null, _, w, G), V = g(I).map((B) => le(B, (v == null ? void 0 : v.x) ?? null, _, w, G)).filter((B) => Number.isFinite(B == null ? void 0 : B.x) && Number.isFinite(B == null ? void 0 : B.y));
    if (!Array.isArray(V) || V.length < 4) {
      const B = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(re, B), B;
    }
    const k = V.slice(0, 4).map((B) => ({ x: Number((B == null ? void 0 : B.x) || 0), y: Number((B == null ? void 0 : B.y) || 0) })), A = {
      kind: "rasterObject",
      center: {
        x: k.reduce((B, te) => B + Number(te.x || 0), 0) / k.length,
        y: k.reduce((B, te) => B + Number(te.y || 0), 0) / k.length
      },
      corners: k,
      visible: !0
    };
    return n._strokeGeomCache.set(re, A), A;
  }
  function xe(I, re = null, _ = null, w = null, H = {}) {
    if (n.mode === "frame") {
      const M = _ || l(), A = w || d(M);
      if (!M || !A) return null;
      const B = M ? oe(M, I) : null;
      return B ? {
        x: Number(A.x || 0) + Number(B.x || 0) * Number(A.w || 0),
        y: Number(A.y || 0) + Number(B.y || 0) * Number(A.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return ne(I, re);
    const G = 1e-4, v = o().project(I, G);
    if (!Number.isFinite(v.z) || v.z <= G && !(H != null && H.clipBehind)) return null;
    const x = r.width, V = r.height, k = Math.max(x, V) * 2;
    return {
      x: Ee(v.x, -k, x + k),
      y: Ee(v.y, -k, V + k),
      z: Math.max(v.z, G),
      rawZ: v.z,
      clipped: v.z <= G
    };
  }
  function Q(I, re = []) {
    if (n.mode !== "pano" || ce(I)) return 1;
    const _ = re.map((w) => Number((w == null ? void 0 : w.rawZ) ?? (w == null ? void 0 : w.z))).filter((w) => Number.isFinite(w));
    return _.length ? fP(0.035, 0.2, Math.min(..._)) : 1;
  }
  function O(I) {
    if (U(I) && !ae(I)) return { visible: !1 };
    const re = P(I), _ = Pn(Number(re.yaw_deg || 0), Number(re.pitch_deg || 0)), w = n.mode === "frame" ? l() : null, H = w ? d(w) : null, G = n.mode === "pano" && (ce(I) || q(I)), v = G ? { clipBehind: !0 } : null, x = xe(_, null, w, H, v);
    if (!x) return { visible: !1 };
    const V = y(I), M = Y(I).map((R) => xe(R, x.x, w, H, v)).filter((R) => Number.isFinite(R == null ? void 0 : R.x) && Number.isFinite(R == null ? void 0 : R.y));
    if (M.length < 4) return { visible: !1 };
    const A = S(V, 0, V.tanY), B = S(V, 0, V.tanY + Math.max(V.tanY * 0.43, 0.053)), te = xe(A, x.x, w, H, v);
    if (!te) return { visible: !1 };
    const ge = xe(B, (te == null ? void 0 : te.x) ?? x.x, w, H, v), W = ((ge == null ? void 0 : ge.x) ?? te.x) - te.x, pe = ((ge == null ? void 0 : ge.y) ?? te.y) - te.y, we = Math.hypot(W, pe) || 1, Pe = {
      x: te.x + W / we * 30,
      y: te.y + pe / we * 30
    }, ue = xe(S(V, 0, V.tanY), x.x, w, H, v), ve = xe(S(V, V.tanX, 0), x.x, w, H, v), Ne = xe(S(V, 0, -V.tanY), x.x, w, H, v), p = xe(S(V, -V.tanX, 0), x.x, w, H, v);
    if (!ue || !ve || !Ne || !p) return { visible: !1 };
    const j = [
      x,
      ...M,
      te,
      ge,
      ue,
      ve,
      Ne,
      p
    ];
    if (G && !j.some((R) => Number((R == null ? void 0 : R.rawZ) ?? (R == null ? void 0 : R.z)) > 1e-4)) return { visible: !1 };
    const N = Q(I, j), b = [
      {
        edge: "top",
        x: ue.x,
        y: ue.y,
        a: { x: M[0].x, y: M[0].y },
        b: { x: M[1].x, y: M[1].y }
      },
      {
        edge: "right",
        x: ve.x,
        y: ve.y,
        a: { x: M[1].x, y: M[1].y },
        b: { x: M[2].x, y: M[2].y }
      },
      {
        edge: "bottom",
        x: Ne.x,
        y: Ne.y,
        a: { x: M[2].x, y: M[2].y },
        b: { x: M[3].x, y: M[3].y }
      },
      {
        edge: "left",
        x: p.x,
        y: p.y,
        a: { x: M[3].x, y: M[3].y },
        b: { x: M[0].x, y: M[0].y }
      }
    ];
    return {
      center: { x: x.x, y: x.y },
      corners: M.map((R) => ({ x: R.x, y: R.y })),
      edgeMidpoints: b,
      rotateStemBase: { x: te.x, y: te.y },
      rotateHandle: Pe,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: N,
      visible: !0
    };
  }
  function J(I) {
    if (t && q(I) && L()) return { visible: !1 };
    if (!me() && ($(I) || C(I))) return { visible: !1 };
    if ($(I)) {
      const H = String(I.actionGroupId || I.id || "").trim(), G = F(H, I.layerKind), v = n._strokeGeomCache.get(G);
      return v || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), X(I, G));
    }
    if (C(I)) {
      const H = h(I), G = n._strokeGeomCache.get(H);
      return G || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), fe(I, H));
    }
    const re = m(I), _ = n._strokeGeomCache.get(re);
    if (_) return _;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const w = O(I);
    return n._strokeGeomCache.set(re, w), w;
  }
  function ie(I, re, _, w = null) {
    const H = [];
    for (let G = 0; G <= _; G += 1) {
      const v = G / _;
      let x = 0, V = 0;
      re === 0 ? (x = v, V = 0) : re === 1 ? (x = 1, V = v) : re === 2 ? (x = 1 - v, V = 1) : (x = 0, V = 1 - v);
      const k = D(I, x, V), M = n.mode === "unwrap" ? ne(k, w) : T(k);
      M && H.push(M);
    }
    return H;
  }
  function Se() {
    const I = [...Array.isArray(i.shots) ? i.shots : []], re = [...a()].sort((_, w) => Number(_.z_index || 0) - Number(w.z_index || 0));
    return [...I, ...re];
  }
  function _e() {
    const I = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...a()].sort((_, w) => Number(w.z_index || 0) - Number(_.z_index || 0)), ...I];
  }
  return {
    connect(I) {
      ({
        currentViewProjection: o,
        cutoutStickers: a,
        ensureGroupFrame: s,
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: c,
        getFrameCornersUv: u,
        getFrameViewRect: d,
        getRasterObjectCenterUv: f,
        getRasterObjectGeomCacheKey: h,
        getRasterObjectTransformedErpPoints: g,
        getSceneItemGeomCacheKey: m,
        getStickerFrame: y,
        getStrokeGeomCacheKey: F,
        getStrokeGroupCenterUv: K,
        getStrokeGroupStrokes: z,
        isFreeSpaceView: L,
        isRasterObjectItem: C,
        isSceneSticker: U,
        isShotItem: q,
        isStickerItem: ce,
        isStrokeGroupItem: $,
        paintingShown: me,
        poseOf: P,
        projectDir: T,
        projectDirUnwrap: ne,
        projectEditorPoints: Z,
        projectErpPointToEditor: le,
        sceneStickerShown: ae,
        stickerCornersDir: Y,
        stickerDirFromFrame: S,
        stickerSampleDir: D,
        worldDirToFrameLocalPoint: oe
      } = I);
    },
    projectSceneItemDir: xe,
    objectGeom: J,
    sampleStickerEdge: ie,
    getCutoutSelectableItemsForDisplay: Se,
    getCutoutSelectableItemsForHit: _e
  };
}
const Qa = /* @__PURE__ */ new Map();
function UP(e) {
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
  let c, u, d, f, h, g, m, y, F, K, z, L, C, U, q, ce, $, me, P, T;
  function ne(v = n.interaction) {
    const x = String((v == null ? void 0 : v.kind) || "");
    if (x === "paint_stroke" || x === "paint_lasso_fill" || x === "move_stroke_group" || x === "scale_stroke_group" || x === "rotate_stroke_group" || x === "move_raster_object" || x === "scale_raster_object") return !0;
    if (x === "move_multi") {
      const V = Array.isArray(v == null ? void 0 : v.strokeSnapshots) && v.strokeSnapshots.length > 0, k = Array.isArray(v == null ? void 0 : v.rasterSnapshots) && v.rasterSnapshots.length > 0;
      return V || k;
    }
    return !1;
  }
  function Z() {
    var x, V, k, M;
    let v = null;
    try {
      const A = y(), B = ((M = (k = (V = (x = n.paintEngine) == null ? void 0 : x.getErpTarget) == null ? void 0 : V.call(x, A)) == null ? void 0 : k.displayPaint) == null ? void 0 : M.canvas) || null;
      B && (v = {
        source: B,
        revision: `${F()}:${le()}`
      });
    } catch {
      v = null;
    }
    return v;
  }
  function le() {
    var M, A, B, te, ge, W, pe;
    const v = n.interaction, x = String((v == null ? void 0 : v.kind) || "");
    if (!ne(v)) return "";
    if (x === "paint_stroke" || x === "paint_lasso_fill") {
      const we = ((M = v == null ? void 0 : v.stroke) == null ? void 0 : M.geometry) || null, Pe = String(((A = v == null ? void 0 : v.stroke) == null ? void 0 : A.layerKind) || ""), ue = ((B = we == null ? void 0 : we.rawPoints) == null ? void 0 : B.length) ?? ((te = we == null ? void 0 : we.points) == null ? void 0 : te.length) ?? 0, ve = String((v == null ? void 0 : v._livePreviewToken) || "");
      return `_${Pe || "paint"}_${x}_live${ve}_${ue}_${n.livePaintInteractionRevision}`;
    }
    const V = String(((ge = v == null ? void 0 : v.item) == null ? void 0 : ge.actionGroupId) || ""), k = String(((W = v == null ? void 0 : v.item) == null ? void 0 : W.rasterObjectId) || ((pe = v == null ? void 0 : v.item) == null ? void 0 : pe.id) || "");
    return `_${x}_${V || k || "active"}_${n.livePaintInteractionRevision}`;
  }
  function ae(v, x = null) {
    const V = String((v == null ? void 0 : v.rasterDataUrl) || "").trim();
    if (!V) return null;
    const k = s.get(V);
    if (k)
      return k.complete || k.width || k.naturalWidth, k;
    const M = new Image();
    return M.onload = () => {
      typeof x == "function" && x();
    }, M.src = V, s.set(V, M), M;
  }
  function Y(v) {
    const x = String((v == null ? void 0 : v.rasterDataUrl) || "").trim();
    if (!x) return null;
    const V = a.get(x);
    if (V) return V.ready ? V : null;
    const k = ae(v, () => {
      const pe = a.get(x);
      pe && (pe.ready = !1), me({ localOnly: !0 });
    });
    if (!k || !(k.complete || k.width || k.naturalWidth)) return null;
    const M = Number(k.naturalWidth || k.width || 0), A = Number(k.naturalHeight || k.height || 0);
    if (M < 1 || A < 1) return null;
    const B = nn({ label: "editor.image-pixels" });
    B.width = M, B.height = A;
    const te = B.getContext("2d", { willReadFrequently: !0 });
    if (!te) return null;
    te.clearRect(0, 0, M, A), te.drawImage(k, 0, 0, M, A);
    const ge = te.getImageData(0, 0, M, A).data, W = { canvas: B, width: M, height: A, alpha: ge, ready: !0 };
    return a.set(x, W), W;
  }
  function S(v, x) {
    if (!v || !x) return null;
    const V = (v == null ? void 0 : v.bbox) || null;
    if (!V) return null;
    const k = (v == null ? void 0 : v.transform) || {}, M = {
      u: (Number(V.u0 || 0) + Number(V.u1 || 0)) * 0.5,
      v: (Number(V.v0 || 0) + Number(V.v1 || 0)) * 0.5
    }, A = {
      u: ((Number(x.u || 0) - Number(k.du || 0)) % 1 + 1) % 1,
      v: Number(x.v || 0) - Number(k.dv || 0)
    }, B = L(
      A,
      M,
      Number(k.scale || 1),
      Number(k.rot_deg || 0)
    ), te = Number(V.u1 || 0) - Number(V.u0 || 0), ge = Number(V.v1 || 0) - Number(V.v0 || 0);
    if (!(te > 1e-6) || !(ge > 1e-6)) return null;
    const W = T(Number(B.u || 0), Number(V.u0 || 0)) / te, pe = (Number(B.v || 0) - Number(V.v0 || 0)) / ge;
    if (W < 0 || W > 1 || pe < 0 || pe > 1) return 0;
    const we = Y(v);
    if (!we) return null;
    const Pe = Ee(Math.floor(W * we.width), 0, we.width - 1), ue = Ee(Math.floor(pe * we.height), 0, we.height - 1);
    return Number(we.alpha[(ue * we.width + Pe) * 4 + 3] || 0);
  }
  function D(v, x, V, k = null) {
    if (!(x != null && x.visible) || !Rr(V, x.corners)) return !1;
    const M = k || P(V, performance.now()), A = S(v, M);
    return A === null ? !0 : A > 8;
  }
  function oe() {
    var k, M, A, B, te, ge, W, pe;
    const v = ((M = (k = n.paintEngine) == null ? void 0 : k.getErpTarget) == null ? void 0 : M.call(k, y(!1))) || null, x = Math.max(1, Number(((A = v == null ? void 0 : v.descriptor) == null ? void 0 : A.width) || ((te = (B = v == null ? void 0 : v.displayPaint) == null ? void 0 : B.canvas) == null ? void 0 : te.width) || 2048)), V = Math.max(1, Number(((ge = v == null ? void 0 : v.descriptor) == null ? void 0 : ge.height) || ((pe = (W = v == null ? void 0 : v.displayPaint) == null ? void 0 : W.canvas) == null ? void 0 : pe.height) || 1024));
    return { width: x, height: V };
  }
  function X() {
    var ue, ve, Ne;
    const v = n.interaction;
    if ((v == null ? void 0 : v.kind) !== "paint_stroke") return null;
    const x = (v == null ? void 0 : v.stroke) || null;
    if (!x || String((x == null ? void 0 : x.layerKind) || "") !== "paint" || String((x == null ? void 0 : x.toolKind) || "") !== "eraser") return null;
    const V = f(), k = `${le()}:${V.width}:${V.height}`;
    if (((ue = n._activePaintEraserPreviewInfo) == null ? void 0 : ue.cacheKey) === k)
      return n._activePaintEraserPreviewInfo.value || null;
    const M = ln(x), A = (M == null ? void 0 : M.geometry) || null;
    if (A && String(A.geometryKind || "") !== "lasso_fill") {
      const p = Array.isArray(A.rawPoints) && A.rawPoints.length ? A.rawPoints : Array.isArray(A.points) ? A.points : [];
      A.processedPoints = q(p, M.targetSpace, !0);
    }
    const B = u(V.width, V.height, { readback: !0 });
    if (!ce(B, M, { w: V.width, h: V.height })) return null;
    const te = ((Ne = (ve = B.ctx) == null ? void 0 : ve.getImageData(0, 0, V.width, V.height)) == null ? void 0 : Ne.data) || null;
    if (!te) return null;
    let ge = V.width, W = V.height, pe = -1, we = -1;
    for (let p = 0; p < V.height; p += 1)
      for (let j = 0; j < V.width; j += 1)
        te[(p * V.width + j) * 4 + 3] <= 8 || (j < ge && (ge = j), p < W && (W = p), j > pe && (pe = j), p > we && (we = p));
    if (pe < ge || we < W)
      return n._activePaintEraserPreviewInfo = { cacheKey: k, value: null }, null;
    const Pe = {
      surface: B,
      bounds: { minX: ge, minY: W, maxX: pe, maxY: we },
      key: `${k}:${ge}:${W}:${pe}:${we}`
    };
    return n._activePaintEraserPreviewInfo = { cacheKey: k, value: Pe }, n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), Pe;
  }
  function fe() {
    n._activePaintEraserPreviewInfo = null, n._liveEraserPreviewCanvasCache = null;
  }
  function xe(v, x, V) {
    var k, M;
    if (!v) return null;
    if (v.type === "rasterObject" && ((k = v.item) != null && k.bbox)) {
      const A = v.item.bbox, B = ((M = v.item) == null ? void 0 : M.transform) || {}, te = Number(A.u0 || 0) + Number(B.du || 0), ge = Number(A.u1 || 0) + Number(B.du || 0), W = Number(A.v0 || 0) + Number(B.dv || 0), pe = Number(A.v1 || 0) + Number(B.dv || 0);
      return {
        minX: Math.floor((te % 1 + 1) % 1 * x),
        maxX: Math.ceil((ge % 1 + 1) % 1 * x),
        minY: Math.floor(Ee(W, 0, 1) * V),
        maxY: Math.ceil(Ee(pe, 0, 1) * V),
        wraps: ge - te >= 1 || te < 0 || ge > 1
      };
    }
    if (v.type === "strokeGroup") {
      const A = z(v.actionGroupId, "paint"), B = d(v.actionGroupId, "paint", A);
      if (!B) return null;
      const te = B.centerUv.u - B.halfW, ge = B.centerUv.u + B.halfW, W = B.centerUv.v - B.halfH, pe = B.centerUv.v + B.halfH;
      return {
        minX: Math.floor((te % 1 + 1) % 1 * x),
        maxX: Math.ceil((ge % 1 + 1) % 1 * x),
        minY: Math.floor(Ee(W, 0, 1) * V),
        maxY: Math.ceil(Ee(pe, 0, 1) * V),
        wraps: ge - te >= 1 || te < 0 || ge > 1
      };
    }
    return null;
  }
  function Q(v, x, V) {
    if (!v || !x) return !1;
    const k = (B) => B.wraps ? [
      { minX: 0, maxX: B.maxX, minY: B.minY, maxY: B.maxY, wraps: !1 },
      { minX: B.minX, maxX: V - 1, minY: B.minY, maxY: B.maxY, wraps: !1 }
    ] : [B], M = k(v), A = k(x);
    return M.some((B) => A.some((te) => !(B.maxX < te.minX || te.maxX < B.minX || B.maxY < te.minY || te.maxY < B.minY)));
  }
  function O(v, x, V) {
    var R, se, ye, he, ee, be, E;
    if (!v || !x || !((R = V == null ? void 0 : V.surface) != null && R.canvas) || x.type !== "rasterObject") return v;
    const k = Number(v.width || V.surface.canvas.width || 0), M = Number(v.height || V.surface.canvas.height || 0);
    if (k < 1 || M < 1) return v;
    const A = xe(x, k, M);
    if (A && !Q(A, V.bounds, k)) return v;
    const B = String(((se = x.item) == null ? void 0 : se.id) || x.id || ""), te = ((ye = x.item) == null ? void 0 : ye.transform) || {}, ge = `${V.key}:${B}:${k}:${M}:${Number(te.du || 0).toFixed(6)}:${Number(te.dv || 0).toFixed(6)}:${Number(te.rot_deg || 0).toFixed(3)}:${Number(te.scale || 1).toFixed(4)}`, W = n._liveEraserPreviewCanvasCache instanceof Map ? n._liveEraserPreviewCanvasCache : n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (W.has(ge)) return W.get(ge);
    const pe = Ee(Math.floor(Number(((he = V.bounds) == null ? void 0 : he.minX) || 0)), 0, Math.max(0, k - 1)), we = Ee(Math.floor(Number(((ee = V.bounds) == null ? void 0 : ee.minY) || 0)), 0, Math.max(0, M - 1)), Pe = Ee(Math.ceil(Number(((be = V.bounds) == null ? void 0 : be.maxX) || 0)), pe, Math.max(0, k - 1)), ue = Ee(Math.ceil(Number(((E = V.bounds) == null ? void 0 : E.maxY) || 0)), we, Math.max(0, M - 1)), ve = Math.max(1, Pe - pe + 1), Ne = Math.max(1, ue - we + 1), p = u(k, M, { readback: !0 });
    p.ctx.clearRect(0, 0, k, M), p.ctx.drawImage(v, 0, 0);
    const j = p.ctx.getImageData(pe, we, ve, Ne);
    p.ctx.save(), p.ctx.globalCompositeOperation = "destination-out", p.ctx.drawImage(V.surface.canvas, 0, 0), p.ctx.restore();
    const N = p.ctx.getImageData(pe, we, ve, Ne);
    let b = !1;
    for (let de = 0; de < ve * Ne; de += 1) {
      const Me = j.data[de * 4 + 3], Ae = N.data[de * 4 + 3];
      if (Me > Ae) {
        b = !0;
        break;
      }
    }
    return b ? (W.size > 64 && W.clear(), W.set(ge, p.canvas), p.canvas) : (W.set(ge, v), v);
  }
  function J(v, x = null) {
    const V = U((v == null ? void 0 : v.rasterObjectId) || (v == null ? void 0 : v.id) || ""), k = (v == null ? void 0 : v.bbox) || null;
    if (!V || !k) return null;
    const M = ae(v, x);
    if (!M || !(M.complete || M.width || M.naturalWidth)) return null;
    const { width: A, height: B } = oe(), te = (v == null ? void 0 : v.transform) || {}, ge = [
      V,
      A,
      B,
      k.u0,
      k.v0,
      k.u1,
      k.v1,
      te.du,
      te.dv,
      te.rot_deg,
      te.scale,
      K()
    ].join(":"), W = o.get(ge);
    if (W) return W;
    o.size > 64 && o.clear();
    const pe = nn({ label: "editor.raster-erp" });
    pe.width = A, pe.height = B;
    const we = pe.getContext("2d");
    return we ? (Ag(we, M, v, A, B), o.set(ge, pe), pe) : null;
  }
  async function ie(v, x) {
    const V = await new Promise((te) => v.toBlob(te, "image/png")), k = new FormData();
    k.append("image", V, x), k.append("type", "input"), k.append("subfolder", "panorama_stickers"), k.append("overwrite", "1");
    const M = await t.fetchApi("/upload/image", { method: "POST", body: k });
    if (!M || M.status !== 200) throw new Error(`upload failed (${M == null ? void 0 : M.status})`);
    const A = await M.json(), B = String((A == null ? void 0 : A.name) || "").trim();
    if (!B) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: B,
      subfolder: String((A == null ? void 0 : A.subfolder) || "panorama_stickers"),
      storage: String((A == null ? void 0 : A.type) || "input")
    };
  }
  let Se = null, _e = !1;
  function I() {
    if (r) return !1;
    const v = op(l.painting), { width: x, height: V } = h();
    return t1(l.painting_layer, { paintCount: v.totalPaintCount, maskCount: v.totalMaskCount, width: x, height: V, nodeId: String(i.id ?? "0") });
  }
  function re() {
    const v = String(i.id ?? "0"), x = Qa.get(v);
    if (_e && x) return x;
    const V = (async () => {
      var A, B, te, ge, W, pe, we, Pe, ue, ve, Ne, p;
      const k = F(), M = op(l.painting);
      if (M.totalPaintCount <= 0 && M.totalMaskCount <= 0) {
        l.painting_layer !== null && (l.painting_layer = null, Se = k, c());
        return;
      }
      if (Se !== k && !_e) {
        _e = !0;
        try {
          $();
          const j = y(!1), N = ((B = (A = n.paintEngine) == null ? void 0 : A.getErpTarget) == null ? void 0 : B.call(A, j)) || null, b = ((te = N == null ? void 0 : N.displayPaint) == null ? void 0 : te.canvas) || null, R = ((ge = N == null ? void 0 : N.committedMask) == null ? void 0 : ge.canvas) || null, se = Math.max(1, Number(((W = N == null ? void 0 : N.descriptor) == null ? void 0 : W.width) || (b == null ? void 0 : b.width) || (R == null ? void 0 : R.width) || 2048)), ye = Math.max(1, Number(((pe = N == null ? void 0 : N.descriptor) == null ? void 0 : pe.height) || (b == null ? void 0 : b.height) || (R == null ? void 0 : R.height) || 1024));
          (!b && M.totalPaintCount > 0 || !R && M.totalMaskCount > 0) && ((!n._paintLayerSyncBlankSurface || Number(((we = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : we.width) || 0) !== se || Number(((Pe = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Pe.height) || 0) !== ye) && (n._paintLayerSyncBlankSurface = u(se, ye)), n._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, se, ye));
          const he = b || M.totalPaintCount > 0 && ((ue = n._paintLayerSyncBlankSurface) == null ? void 0 : ue.canvas) || null, ee = R || M.totalMaskCount > 0 && ((ve = n._paintLayerSyncBlankSurface) == null ? void 0 : ve.canvas) || null;
          if (!he && !ee) return;
          let be = null, E = null;
          const de = [];
          if (M.totalPaintCount > 0) {
            be = await ie(he, `pano_paint_${v}.png`);
            for (const Me of j) {
              const Ae = String(Me || "").trim();
              if (!Ae) continue;
              const Te = ((p = (Ne = n.paintEngine) == null ? void 0 : Ne.getGroupDisplayCanvas) == null ? void 0 : p.call(Ne, Ae)) || null;
              if (!Te) continue;
              const Ie = Ae.replace(/[^a-zA-Z0-9_-]+/g, "_"), Le = await ie(Te, `pano_group_${v}_${Ie}.png`);
              Le && de.push({
                id: Ae,
                actionGroupId: Ae,
                image: Le
              });
            }
          }
          M.totalMaskCount > 0 && (E = await ie(ee, `pano_mask_${v}.png`)), k === F() && (l.painting_layer = {
            paint: be,
            mask: E,
            groups: de,
            revision: k
          }, Se = k, c());
        } catch (j) {
          throw j;
        } finally {
          _e = !1;
        }
      }
    })();
    return Qa.set(v, V), V.finally(() => {
      Qa.get(v) === V && Qa.delete(v);
    }), V;
  }
  function _(v) {
    var B;
    const x = ((B = n.paintEngine) == null ? void 0 : B.getMaskDisplayCanvas()) || null;
    if (!x) return v;
    const V = `mask_display:${n.paintEngine.getMaskDisplayRevision()}`, k = v.reduce((te, ge) => Math.max(te, Number((ge == null ? void 0 : ge.zIndex) || 0)), -1), M = (Array.isArray(l.stickers) ? l.stickers : []).reduce((te, ge) => Math.max(te, Number((ge == null ? void 0 : ge.z_index) || 0)), -1), A = Math.max(k, M);
    return v.push({
      id: "mask_display",
      source: x,
      revision: V,
      zIndex: A + 1,
      opacity: 1,
      visible: !0
    }), v;
  }
  function w() {
    var k, M;
    const v = m(!0), x = X(), V = [];
    for (const A of v) {
      if ((A == null ? void 0 : A.type) === "strokeGroup") {
        const B = String(A.actionGroupId || A.id || "");
        if (!B) continue;
        const te = ((M = (k = n.paintEngine) == null ? void 0 : k.getGroupDisplayCanvas) == null ? void 0 : M.call(k, B)) || null;
        if (!te) continue;
        V.push({
          id: `paint_group:${B}`,
          source: te,
          revision: `${g()}:${B}`,
          zIndex: Number((A == null ? void 0 : A.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((A == null ? void 0 : A.type) === "rasterObject") {
        const B = A.item || null, te = U((B == null ? void 0 : B.id) || A.id || "");
        if (!te) continue;
        const ge = J(B, () => me());
        if (!ge) continue;
        const W = O(ge, A, x), pe = (B == null ? void 0 : B.transform) || {};
        V.push({
          id: `raster:${te}`,
          source: W,
          revision: [
            F(),
            (x == null ? void 0 : x.key) || "",
            te,
            Number(pe.du || 0).toFixed(6),
            Number(pe.dv || 0).toFixed(6),
            Number(pe.rot_deg || 0).toFixed(3),
            Number(pe.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((A == null ? void 0 : A.z_index) || 0),
          opacity: 1,
          visible: (B == null ? void 0 : B.visible) !== !1
        });
      }
    }
    return _(V);
  }
  function H() {
    return C() ? w().filter((v) => v.visible !== !1).map((v) => ({ id: v.id, media: v.source, revision: v.revision, opacity: v.opacity, zIndex: v.zIndex })) : [];
  }
  function G() {
    l.painting_layer !== null && (l.painting_layer = null), Se = "";
  }
  return {
    connect(v) {
      ({
        commitState: c,
        createRasterSurface: u,
        ensureGroupFrame: d,
        getActivePaintTargetDescriptor: f,
        getDesiredPaintTargetDescriptor: h,
        getDisplayPaintRevisionKey: g,
        getOrderedDisplayListObjects: m,
        getOrderedPaintGroupIds: y,
        getPaintingCompositeRevisionKey: F,
        getPaintingRevisionKey: K,
        getStrokeGroupStrokes: z,
        inverseTransformErpPointAround: L,
        paintingShown: C,
        parseRasterObjectSelectionId: U,
        processFreehandPoints: q,
        rasterizeStrokeToSurface: ce,
        rebuildPaintEngineIfNeeded: $,
        requestDraw: me,
        screenPosToErpPoint: P,
        shortestWrappedDelta: T
      } = v);
    },
    getSharedLivePaintSurface: Z,
    getLivePaintRevisionSuffix: le,
    isPaintCompositeInteraction: ne,
    hitRasterObjectAt: D,
    invalidateLivePaintPreviewCaches: fe,
    buildRasterObjectEditCanvas: J,
    needsPaintingLayerSync: I,
    syncPaintingLayerAsync: re,
    invalidatePaintingLayerState: G,
    buildEditorViewPaintLayers: H
  };
}
function YP(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, a, s;
  function l(Q) {
    return !Q || typeof Q != "object" ? { x: 0, y: 0 } : { x: Number((Q == null ? void 0 : Q.u) || 0), y: Number((Q == null ? void 0 : Q.v) || 0) };
  }
  function c(Q, O, J, ie = {}) {
    return { ...{
      ...Q,
      t: Number((Q == null ? void 0 : Q.t) || 0),
      widthScale: f(Q, "widthScale", 1),
      pressureLike: f(Q, "pressureLike", 1)
    }, ...ie, u: O, v: J };
  }
  function u(Q, O = !1) {
    return O ? 12e-4 : 18e-4;
  }
  function d(Q, O, J = !1) {
    if (!Array.isArray(Q) || !Q.length) return [];
    const ie = String((O == null ? void 0 : O.kind) || "") === "ERP_GLOBAL", Se = /* @__PURE__ */ new WeakMap();
    if (ie) {
      let k = null;
      Q.forEach((M) => {
        const A = Number((M == null ? void 0 : M.u) || 0), B = Number((M == null ? void 0 : M.v) || 0), te = (A % 1 + 1) % 1, ge = k == null ? te : k + s(te, (k % 1 + 1) % 1);
        Se.set(M, { x: ge, y: B }), k = ge;
      });
    }
    const _e = (k) => !k || typeof k != "object" ? { x: 0, y: 0 } : Se.get(k) || l(k), I = (k, M, A, B = {}) => {
      const te = ie ? (Number(M) % 1 + 1) % 1 : Number(M), ge = c(k, te, A, B);
      return Se.set(ge, { x: Number(M), y: Number(A) }), ge;
    }, re = (k, M, A) => {
      const B = _e(k), te = _e(M);
      return I(k, jn(B.x, te.x, A), jn(B.y, te.y, A), {
        t: jn(Number((k == null ? void 0 : k.t) || 0), Number((M == null ? void 0 : M.t) || 0), A),
        widthScale: jn(f(k, "widthScale", 1), f(M, "widthScale", 1), A),
        pressureLike: jn(f(k, "pressureLike", 1), f(M, "pressureLike", 1), A)
      });
    };
    if (Q.length === 1) {
      const k = _e(Q[0]);
      return [I(Q[0], k.x, k.y)];
    }
    const _ = u(O, J), w = (k, M) => {
      const A = [0];
      for (let ue = 1; ue < k.length; ue += 1) {
        const ve = _e(k[ue - 1]), Ne = _e(k[ue]);
        A.push(A[ue - 1] + Math.hypot(Ne.x - ve.x, Ne.y - ve.y));
      }
      const B = A[A.length - 1] || 0;
      if (B <= 1e-8) {
        const ue = k[0], ve = _e(ue);
        return [I(ue, ve.x, ve.y)];
      }
      const te = [];
      let ge = 0;
      for (let ue = 0; ue <= B + 1e-9; ue += M) {
        for (; ge < A.length - 2 && A[ge + 1] < ue; ) ge += 1;
        const ve = A[ge], Ne = A[ge + 1], p = Math.max(1e-8, Ne - ve);
        te.push(re(k[ge], k[ge + 1], Ee((ue - ve) / p, 0, 1)));
      }
      const W = k[k.length - 1], pe = _e(W), we = te[te.length - 1], Pe = we ? _e(we) : null;
      return (!Pe || Math.hypot(Pe.x - pe.x, Pe.y - pe.y) > M * 0.35) && te.push(I(W, pe.x, pe.y)), te;
    }, H = (k) => {
      if (!Array.isArray(k) || k.length < 3) return k ? k.slice() : [];
      const M = _e(k[0]), A = [I(k[0], M.x, M.y)];
      for (let ge = 0; ge < k.length - 1; ge += 1) {
        const W = k[ge], pe = k[ge + 1], we = _e(W), Pe = _e(pe), ue = I(
          W,
          we.x * 0.75 + Pe.x * 0.25,
          we.y * 0.75 + Pe.y * 0.25,
          {
            t: Number(W.t || 0) * 0.75 + Number(pe.t || 0) * 0.25,
            widthScale: f(W, "widthScale", 1) * 0.75 + f(pe, "widthScale", 1) * 0.25,
            pressureLike: f(W, "pressureLike", 1) * 0.75 + f(pe, "pressureLike", 1) * 0.25
          }
        ), ve = I(
          W,
          we.x * 0.25 + Pe.x * 0.75,
          we.y * 0.25 + Pe.y * 0.75,
          {
            t: Number(W.t || 0) * 0.25 + Number(pe.t || 0) * 0.75,
            widthScale: f(W, "widthScale", 1) * 0.25 + f(pe, "widthScale", 1) * 0.75,
            pressureLike: f(W, "pressureLike", 1) * 0.25 + f(pe, "pressureLike", 1) * 0.75
          }
        );
        A.push(ue, ve);
      }
      const B = k[k.length - 1], te = _e(B);
      return A.push(I(B, te.x, te.y)), A;
    }, G = w(Q, _);
    if (G.length < 3) return G;
    const v = J ? 2 : 1;
    let x = G.slice();
    for (let k = 0; k < v; k += 1) x = H(x);
    return w(x, Math.max(_ * 0.75, 55e-5));
  }
  function f(Q, O, J = 1) {
    const ie = Number(Q == null ? void 0 : Q[O]);
    return Number.isFinite(ie) ? Math.max(0, ie) : J;
  }
  function h(Q) {
    const O = Number(Q == null ? void 0 : Q.radiusValue);
    if (Number.isFinite(O) && O > 0) {
      const J = String((Q == null ? void 0 : Q.radiusModel) || "").trim() || "erp_uv_norm";
      return J === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((Q == null ? void 0 : Q.size) || 10) * 0.5 / 2048)
      } : {
        model: J,
        value: O
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((Q == null ? void 0 : Q.size) || 10) * 0.5 / 2048)
    };
  }
  function g(Q, O, J = {}) {
    const ie = nn({ label: "editor.raster-surface" });
    ie.width = Math.max(1, Math.round(Q)), ie.height = Math.max(1, Math.round(O));
    const Se = ie.getContext("2d", J.readback ? { willReadFrequently: !0 } : void 0);
    return Se && (Se.clearRect(0, 0, ie.width, ie.height), Se.imageSmoothingEnabled = !0), { canvas: ie, ctx: Se };
  }
  function m() {
    const Q = me();
    return `${String(t.paintStrokeRevision)}:${Q.width}x${Q.height}`;
  }
  function y() {
    const Q = me();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${Q.width}x${Q.height}`;
  }
  function F() {
    const Q = i(), O = y();
    return Q ? `${O}:${Q}` : O;
  }
  function K() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function z() {
    t.paintCompositeRevision += 1;
  }
  function L() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function C() {
    var Q, O;
    t.paintEngineRevisionKey = null, (O = (Q = t.paintEngine) == null ? void 0 : Q.rebuildCommitted) == null || O.call(Q, n), t.paintEngineRevisionKey = m();
  }
  function U() {
    L(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function q({ rebuildPaintEngine: Q = !1 } = {}) {
    o(), K(), U(), Q && C();
  }
  function ce() {
    o(), z(), U();
  }
  function $() {
    var ie;
    const Q = me(), O = `${Q.width}x${Q.height}`;
    t.paintEngineDescriptorKey !== O && (t.paintEngine = pl(Q), t.paintEngineDescriptorKey = O, t.paintEngineRevisionKey = "");
    const J = m();
    t.paintEngineRevisionKey !== J && (t.paintEngineRevisionKey = J, (ie = t.paintEngine) == null || ie.rebuildCommitted(n));
  }
  function me() {
    const Q = Math.max(1, a(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: Q,
      height: Math.max(1, Math.round(Q * 0.5))
    };
  }
  function P() {
    return me();
  }
  function T(Q, O, J, ie, Se = null) {
    const _e = h(Q), I = f(O, "widthScale", 1) * f(O, "pressureLike", 1);
    return _e.model === "erp_uv_norm" ? Math.max(0.5, _e.value * J * I) : _e.model === "world_angle" ? Se ? Math.max(0.5, _e.value / Math.max(1e-6, Number(Se.hFOV_deg || 90) * hr) * J * I) : Math.max(0.5, _e.value / (2 * Math.PI) * J * I) : Math.max(0.5, Number((Q == null ? void 0 : Q.size) || 10) * 0.5 * I);
  }
  function ne(Q, O, J = {}) {
    const ie = String((O == null ? void 0 : O.layerKind) || "paint"), Se = String((O == null ? void 0 : O.toolKind) || "pen"), _e = J.preview === !0, I = _e ? 0.78 : 1;
    if (Q.globalAlpha = Se === "marker" ? 0.7 * I : 1, ie === "mask") {
      Q.fillStyle = _e ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (Se === "eraser") {
      Q.globalCompositeOperation = "destination-out", Q.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const re = String((O == null ? void 0 : O.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (O == null ? void 0 : O.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, _ = _e ? Math.max(0.28, Number(re.a ?? 1) * 0.88) : Math.max(0.12, Number(re.a ?? 1));
    Q.fillStyle = `rgba(${Math.round(Number(re.r || 0) * 255)}, ${Math.round(Number(re.g || 0) * 255)}, ${Math.round(Number(re.b || 0) * 255)}, ${_})`;
  }
  function Z(Q, O, J) {
    const ie = Math.max(0.5, Math.min(J, Number((O == null ? void 0 : O.radiusPx) || 0.5)));
    !Number.isFinite(O == null ? void 0 : O.x) || !Number.isFinite(O == null ? void 0 : O.y) || !Number.isFinite(ie) || (Q.beginPath(), Q.arc(Number(O.x || 0), Number(O.y || 0), ie, 0, Math.PI * 2), Q.fill());
  }
  function le(Q, O, J, ie, Se = {}) {
    if (!Q || !Array.isArray(O) || !O.length) return;
    const _e = Math.max(ie.w, ie.h) * 0.25;
    Q.save(), ne(Q, J, Se);
    const I = (re) => Z(Q, re, _e);
    if (O.length === 1) {
      I(O[0]), Q.restore();
      return;
    }
    for (let re = 0; re < O.length - 1; re += 1) {
      const _ = O[re], w = O[re + 1];
      if (!_ || !w) continue;
      const H = Number(_.x || 0), G = Number(_.y || 0), v = Number(w.x || 0), x = Number(w.y || 0), V = Math.max(0.5, Math.min(_e, Number(_.radiusPx || 0.5))), k = Math.max(0.5, Math.min(_e, Number(w.radiusPx || 0.5)));
      if (!Number.isFinite(H) || !Number.isFinite(G) || !Number.isFinite(v) || !Number.isFinite(x) || !Number.isFinite(V) || !Number.isFinite(k)) continue;
      const M = v - H, A = x - G, B = Math.hypot(M, A);
      if (!Number.isFinite(B) || B < 1e-6) {
        I(_);
        continue;
      }
      if (B > Math.max(ie.w, ie.h) * 0.5) continue;
      const te = Math.max(0.5, Math.min(V, k)), ge = Math.max(0.35, Math.min(te * 0.4, 2.25)), W = Math.max(1, Math.ceil(B / ge));
      for (let pe = 0; pe <= W; pe += 1) {
        const we = pe / W;
        I({
          x: jn(H, v, we),
          y: jn(G, x, we),
          radiusPx: jn(V, k, we)
        });
      }
    }
    I(O[O.length - 1]), Q.restore();
  }
  function ae(Q, O, J, ie) {
    le(Q, O, J, ie, { preview: !1 });
  }
  function Y(Q, O, J, ie, Se) {
    var re, _, w, H;
    if (!Q || !Array.isArray(O) || O.length < 3) return;
    const _e = "u", I = "v";
    if (Q.save(), String((J == null ? void 0 : J.layerKind) || "") === "mask")
      Q.fillStyle = "rgba(255,255,255,1)";
    else if (String((J == null ? void 0 : J.toolKind) || "") === "eraser")
      Q.globalCompositeOperation = "destination-out", Q.fillStyle = "rgba(0,0,0,1)";
    else {
      const G = (J == null ? void 0 : J.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      Q.fillStyle = `rgba(${Math.round(Number(G.r || 0) * 255)}, ${Math.round(Number(G.g || 0) * 255)}, ${Math.round(Number(G.b || 0) * 255)}, ${Number(G.a ?? 1)})`;
    }
    Q.beginPath(), Q.moveTo(Number(((re = O[0]) == null ? void 0 : re[_e]) || 0) * ie.w, Number(((_ = O[0]) == null ? void 0 : _[I]) || 0) * ie.h);
    for (let G = 1; G < O.length; G += 1)
      Q.lineTo(Number(((w = O[G]) == null ? void 0 : w[_e]) || 0) * ie.w, Number(((H = O[G]) == null ? void 0 : H[I]) || 0) * ie.h);
    Q.closePath(), Q.fill(), Q.restore();
  }
  function S(Q) {
    const O = (Q == null ? void 0 : Q.geometry) || null;
    return O ? String(O.geometryKind || "") === "lasso_fill" ? Array.isArray(O.points) ? O.points : [] : Array.isArray(O.processedPoints) && O.processedPoints.length ? O.processedPoints : Array.isArray(O.rawPoints) && O.rawPoints.length ? O.rawPoints : Array.isArray(O.points) ? O.points : [] : [];
  }
  function D(Q, O) {
    const J = S(Q);
    return !Array.isArray(J) || !J.length ? [] : J.map((ie) => ({
      x: Number((ie == null ? void 0 : ie.u) || 0) * Number((O == null ? void 0 : O.w) || 1),
      y: Number((ie == null ? void 0 : ie.v) || 0) * Number((O == null ? void 0 : O.h) || 1),
      radiusPx: T(Q, ie, Number((O == null ? void 0 : O.w) || 1), Number((O == null ? void 0 : O.h) || 1))
    }));
  }
  function oe(Q, O, J = null) {
    var re, _, w, H;
    if (!(Q != null && Q.ctx) || !O) return !1;
    const ie = J || { w: Number(((re = Q.canvas) == null ? void 0 : re.width) || 0), h: Number(((_ = Q.canvas) == null ? void 0 : _.height) || 0) }, Se = String((O == null ? void 0 : O.toolKind) || "") === "eraser" ? {
      ...O,
      layerKind: "mask",
      toolKind: String(((w = O == null ? void 0 : O.geometry) == null ? void 0 : w.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : O;
    if (String(((H = O == null ? void 0 : O.geometry) == null ? void 0 : H.geometryKind) || "") === "lasso_fill")
      return Y(Q.ctx, S(Se), Se, ie), !0;
    const I = D(Se, ie);
    return I.length ? (ae(Q.ctx, I, Se, ie), !0) : !1;
  }
  function X(Q, O, J, ie = 8) {
    const Se = new Uint8Array(O * J), _e = [], I = new Int32Array(O * J), re = new Int32Array(O * J);
    for (let _ = 0; _ < J; _ += 1)
      for (let w = 0; w < O; w += 1) {
        const H = _ * O + w;
        if (Se[H] || Q[H] <= ie) continue;
        let G = 0, v = 0;
        I[v] = w, re[v] = _, v += 1, Se[H] = 1;
        const x = [];
        let V = w, k = _, M = w, A = _;
        for (; G < v; ) {
          const B = I[G], te = re[G];
          G += 1, x.push({ x: B, y: te }), B < V && (V = B), te < k && (k = te), B > M && (M = B), te > A && (A = te);
          const ge = [
            [(B - 1 + O) % O, te],
            [(B + 1) % O, te],
            [B, te - 1],
            [B, te + 1]
          ];
          for (const [W, pe] of ge) {
            if (pe < 0 || pe >= J) continue;
            const we = pe * O + W;
            Se[we] || Q[we] <= ie || (Se[we] = 1, I[v] = W, re[v] = pe, v += 1);
          }
        }
        _e.push({ pixels: x, minX: V, minY: k, maxX: M, maxY: A });
      }
    return _e;
  }
  function fe(Q, O) {
    const J = [...new Set((Array.isArray(Q == null ? void 0 : Q.pixels) ? Q.pixels : []).map((_) => Number((_ == null ? void 0 : _.x) || 0)).filter((_) => Number.isFinite(_)))].sort((_, w) => _ - w);
    if (!J.length) return null;
    if (J.length === 1)
      return { startX: J[0], widthPx: 1 };
    let ie = -1, Se = 0;
    for (let _ = 0; _ < J.length; _ += 1) {
      const w = J[_], G = (_ === J.length - 1 ? J[0] + O : J[_ + 1]) - w - 1;
      G > ie && (ie = G, Se = _);
    }
    const _e = (J[(Se + 1) % J.length] + O) % O;
    let I = 1 / 0, re = -1 / 0;
    for (const _ of J) {
      const w = (_ - _e + O) % O;
      I = Math.min(I, w), re = Math.max(re, w);
    }
    return {
      startX: _e,
      widthPx: Math.max(1, re - I + 1)
    };
  }
  function xe(Q, O, J = {}) {
    var w;
    const ie = Number((Q == null ? void 0 : Q.width) || 0), Se = Number((Q == null ? void 0 : Q.height) || 0), _e = (w = Q == null ? void 0 : Q.getContext) == null ? void 0 : w.call(Q, "2d");
    if (!_e || ie < 1 || Se < 1) return [];
    const I = _e.getImageData(0, 0, ie, Se), re = new Uint8Array(ie * Se);
    for (let H = 0; H < re.length; H += 1) re[H] = I.data[H * 4 + 3];
    return X(re, ie, Se, 8).map((H, G) => {
      const v = fe(H, ie);
      if (!v) return null;
      const x = Number(v.widthPx || 0), V = H.maxY - H.minY + 1, k = Number(v.startX || 0), M = nn({ label: "editor.lasso-fill" });
      M.width = x, M.height = V;
      const A = M.getContext("2d");
      if (!A) return null;
      const B = A.createImageData(x, V);
      return H.pixels.forEach(({ x: te, y: ge }) => {
        const W = (ge * ie + te) * 4, pe = (Number(te || 0) - k + ie) % ie, we = ((ge - H.minY) * x + pe) * 4;
        B.data[we + 0] = I.data[W + 0], B.data[we + 1] = I.data[W + 1], B.data[we + 2] = I.data[W + 2], B.data[we + 3] = I.data[W + 3];
      }), A.putImageData(B, 0, 0), {
        id: Di("raster"),
        type: "raster_frozen",
        layerKind: O === "mask" ? "mask" : "paint",
        z_index: Number((J == null ? void 0 : J.z_index) || 0) + G * 1e-3,
        locked: (J == null ? void 0 : J.locked) === !0,
        bbox: {
          u0: 0,
          v0: H.minY / Se,
          u1: x / ie,
          v1: (H.maxY + 1) / Se
        },
        rasterDataUrl: M.toDataURL("image/png"),
        transform: {
          du: k / ie,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(Q) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: a,
        shortestWrappedDelta: s
      } = Q);
    },
    processFreehandPoints: d,
    createRasterSurface: g,
    getPaintingRevisionKey: m,
    getPaintingCompositeRevisionKey: y,
    getDisplayPaintRevisionKey: F,
    refreshPaintEngineRevisionCache: C,
    markObjectVisualsDirty: U,
    markPaintStrokeVisualsDirty: q,
    markPaintCompositeVisualsDirty: ce,
    rebuildPaintEngineIfNeeded: $,
    getDesiredPaintTargetDescriptor: me,
    getActivePaintTargetDescriptor: P,
    rasterizeStrokeToSurface: oe,
    createRasterFrozenObjectsFromCanvas: xe
  };
}
function qP(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: a
  } = e;
  let s, l, c, u, d, f, h;
  function g($, me = null) {
    var P;
    if ($ && typeof $ == "object" && !Array.isArray($)) return $;
    if (Array.isArray($) && $.length > 0) {
      const T = $[0];
      if (T && typeof T == "object" && !Array.isArray(T)) return T;
    }
    if (Array.isArray(me) && me.length > 0) {
      const T = (P = me[0]) == null ? void 0 : P.parsed_state;
      if (T && typeof T == "object" && !Array.isArray(T))
        return {
          yaw_deg: Number(T.yaw_deg || 0),
          pitch_deg: Number(T.pitch_deg || 0),
          hFOV_deg: Number(T.hFOV_deg || 30),
          rot_deg: Number(T.roll_deg || 0)
        };
    }
    return null;
  }
  function m($, me, P) {
    const T = Math.max(1, Number(me || 1)), ne = Math.max(1, Number(P || 1)), Z = Ee(Number($ || 30), 0.1, 179) * hr, le = 2 * Math.atan(Math.tan(Z * 0.5) * (ne / T));
    return Ee(le * mi, 0.1, 179);
  }
  function y($) {
    const me = String($ || "").trim();
    if (!me) return null;
    try {
      const P = JSON.parse(me);
      if (!P || typeof P != "object" || String(P.kind || "") !== "pano_sticker_state") return null;
      const T = P.version;
      let ne = null;
      if (typeof T == "number" && Number.isInteger(T) ? ne = T : typeof T == "string" && /^\d+$/.test(T) && (ne = Number.parseInt(T, 10)), ne !== 1) return null;
      const Z = P.pose;
      if (!Z || typeof Z != "object") return null;
      const le = Number(Z.yaw_deg), ae = Number(Z.pitch_deg), Y = Number(Z.roll_deg), S = Number(Z.hFOV_deg);
      if (![le, ae, Y, S].every((fe) => Number.isFinite(fe))) return null;
      let D = ((le + 180) % 360 + 360) % 360 - 180;
      Object.is(D, -0) && (D = 0);
      const oe = {
        yaw_deg: D,
        pitch_deg: Ee(ae, -89.9, 89.9),
        roll_deg: Y,
        hFOV_deg: Ee(S, 0.1, 179)
      }, X = Number(P.source_aspect);
      return Number.isFinite(X) && X > 0 && (oe.source_aspect = X), oe;
    } catch {
      return null;
    }
  }
  function F($) {
    const me = Number($ == null ? void 0 : $.yaw_deg), P = Number($ == null ? void 0 : $.pitch_deg), T = Number(($ == null ? void 0 : $.roll_deg) ?? ($ == null ? void 0 : $.rot_deg)), ne = Number($ == null ? void 0 : $.hFOV_deg), Z = yi($);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $t(Number.isFinite(me) ? me : 0),
        pitch_deg: Ee(Number.isFinite(P) ? P : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(T) ? T : 0,
        hFOV_deg: Ee(Number.isFinite(ne) ? ne : 90, 0.1, 179)
      },
      source_aspect: Z
    };
  }
  function K($) {
    var ae;
    if (!$ || typeof $ != "object") return F(null);
    const me = Number($ == null ? void 0 : $.yaw_deg), P = Number($ == null ? void 0 : $.pitch_deg), T = Number(($ == null ? void 0 : $.roll_deg) ?? ($ == null ? void 0 : $.rot_deg)), ne = Number($ == null ? void 0 : $.hFOV_deg), Z = Number($ == null ? void 0 : $.vFOV_deg);
    let le = 1;
    if (Number.isFinite(ne) && Number.isFinite(Z)) {
      const Y = Ee(ne, 0.1, 179) * hr, S = Ee(Z, 0.1, 179) * hr, D = Math.tan(S * 0.5);
      if (Math.abs(D) > 1e-6) {
        const oe = Math.tan(Y * 0.5) / D;
        Number.isFinite(oe) && oe > 0 && (le = oe);
      }
    }
    if ($ != null && $.asset_id && ((ae = o == null ? void 0 : o.assets) != null && ae[$.asset_id])) {
      const Y = o.assets[$.asset_id], S = Number((Y == null ? void 0 : Y.w) || 0), D = Number((Y == null ? void 0 : Y.h) || 0);
      S > 0 && D > 0 && (le = S / D);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $t(Number.isFinite(me) ? me : 0),
        pitch_deg: Ee(Number.isFinite(P) ? P : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(T) ? T : 0,
        hFOV_deg: Ee(Number.isFinite(ne) ? ne : 30, 0.1, 179)
      },
      source_aspect: le
    };
  }
  function z($) {
    return t.linkedValue(n, $);
  }
  function L($, me, P) {
    const T = $ && typeof $ == "object" ? {
      yaw_deg: Number($.yaw_deg || 0),
      pitch_deg: Number($.pitch_deg || 0),
      roll_deg: Number($.rot_deg ?? $.roll_deg ?? 0),
      hFOV_deg: Number($.hFOV_deg || 30)
    } : y(me);
    if (T) {
      const le = Number((P == null ? void 0 : P.naturalWidth) || (P == null ? void 0 : P.width) || T.source_aspect || 1), ae = Number((P == null ? void 0 : P.naturalHeight) || (P == null ? void 0 : P.height) || 1);
      return {
        yaw_deg: Number(T.yaw_deg || 0),
        pitch_deg: Number(T.pitch_deg || 0),
        hFOV_deg: Number(T.hFOV_deg || 30),
        vFOV_deg: m(T.hFOV_deg, le, ae),
        rot_deg: Number(T.roll_deg || 0)
      };
    }
    const ne = Number((P == null ? void 0 : P.naturalWidth) || (P == null ? void 0 : P.width) || 1), Z = Number((P == null ? void 0 : P.naturalHeight) || (P == null ? void 0 : P.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: m(30, ne, Z),
      rot_deg: 0
    };
  }
  function C() {
    const $ = l(() => {
      Er(n, "image-loaded");
    }), me = en(n, "external-sticker") ? g(c("pano_sticker_input_pose"), null) : null;
    return Km(o, Wm(n, { pose: me, image: $ }));
  }
  function U() {
    var ae;
    const $ = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((Y) => String((Y == null ? void 0 : Y.name) || "") === "sticker_image") : -1, me = $ >= 0 ? ((ae = n.getInputLink($)) == null ? void 0 : ae.id) ?? null : null, P = l(() => {
      Er(n, "image-loaded");
    }), T = g(c("pano_sticker_input_pose"), null), ne = z("sticker_state"), Z = t.externalStateHash(n, ne), le = me == null ? null : L(T, ne, P);
    return Gm(o, {
      connected: me != null,
      linkId: me,
      stateHash: Z,
      pose: le,
      imageWidth: Number((P == null ? void 0 : P.naturalWidth) || (P == null ? void 0 : P.width) || 0),
      imageHeight: Number((P == null ? void 0 : P.naturalHeight) || (P == null ? void 0 : P.height) || 0)
    });
  }
  function q($ = "sync") {
    if (a !== "stickers" || i) return;
    const me = n.__panoSceneStateV2 ? C() : U();
    if (me.changed) {
      const P = o.stickers.find(u);
      o.stickers = me.state.stickers, o.active = me.state.active, P && r.selectedId === P.id && !o.stickers.some((T) => T.id === P.id) && (r.selectedId = null, r.selectedIds = []), s(), h(), f();
    }
    d();
  }
  function ce() {
    const $ = Array.isArray(o.stickers) ? o.stickers : [], me = [];
    for (const P of $)
      u(P) && (P.visible = !1, me.push(P));
    return me;
  }
  return {
    connect($) {
      ({
        commitAndRefreshNode: s,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: u,
        requestDraw: d,
        updateSelectionMenu: f,
        updateSidePanel: h
      } = $);
    },
    computeStickerVFov: m,
    buildCanonicalCutoutStickerState: F,
    buildCanonicalSelectedStickerState: K,
    reconcileExternalStickerFromInputs: q,
    collectExternalStickersForClearAll: ce
  };
}
const XP = 250, JP = 600, ZP = 180, QP = 2;
function eN(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Do(e, t, r) {
  return e + (t - e) * r;
}
function tN(e, t, r = 1) {
  const n = Math.max(
    Math.abs(Cu(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((a, s) => a - e.position[s])) / Math.max(r, 1e-6), o = Math.min(1, n / ZP + i / QP);
  return Math.round(Do(XP, JP, o));
}
function nN(e, t, r) {
  const n = eN(Ee(r, 0, 1));
  return {
    position: e.position.map((i, o) => Do(i, t.position[o], n)),
    yaw_deg: $t(e.yaw_deg + Cu(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Do(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Do(e.hFOV_deg, t.hFOV_deg, n),
    distance: Do(e.distance, t.distance, n)
  };
}
function rN(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(Cu(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function iN(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return rN(e, t) ? null : { from: e, to: t, startTs: r, durationMs: tN(e, t, n), end: i };
}
function oN(e, t) {
  const r = Ee((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: nN(e.from, e.to, r), done: !1 };
}
function Qs(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function aN(e, t, r) {
  const n = Qs(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function sN(e) {
  const {
    app: t,
    cameraV2: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: a,
    runtime: s,
    sceneV2: l,
    state: c,
    stateV2: u,
    studio: d,
    viewController: f
  } = e;
  let h, g, m, y, F, K, z, L, C, U = null;
  function q(k, M = null) {
    const A = D();
    z(() => {
      i.viewTransition = iN(A, k, performance.now(), { scale: Se(), end: M });
    }), !i.viewTransition && M && ce(M), f.state.inertia.active = !1, f.state.inertia.vx = 0, f.state.inertia.vy = 0, L(), F({ localOnly: !0, reason: lt.VIEW });
  }
  function ce(k) {
    Y(Fc({ ...ae(), moved: k.moved }, k.mode, oe())), s.backgroundDirty = !0;
  }
  function $() {
    i.viewTransition && (i.viewTransition = null, L());
  }
  function me(k, M) {
    q({ ...D(), yaw_deg: k, pitch_deg: M });
  }
  function P() {
    return !d || fe() && !y();
  }
  function T() {
    return i.mode === "pano" && ne();
  }
  function ne() {
    return u && C1({ sceneLinked: l && !!Qu(a).scene, files: K(), stickers: c.stickers });
  }
  function Z() {
    return i.spaceMode === "6dof" && T();
  }
  function le() {
    var k, M, A;
    return bS((A = (M = (k = t.ui) == null ? void 0 : k.settings) == null ? void 0 : M.getSettingValue) == null ? void 0 : A.call(M, sg));
  }
  function ae() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function Y(k) {
    i.spaceMode = k.mode, i.viewPosition = k.position, i.viewMoved = k.moved;
  }
  function S(k) {
    var A;
    const M = aN(i.spaceMode, i.viewTransition, k);
    if (M !== "keep") {
      if (M === "return") {
        q({ ...D(), position: oe(), distance: ((A = J()) == null ? void 0 : A.radius) || Qn }, { mode: k, moved: !1 });
        return;
      }
      $(), Y(Fc({ ...ae(), position: D().position }, k, oe())), s.backgroundDirty = !0, L(), F({ localOnly: !0, reason: lt.VIEW });
    }
  }
  function D() {
    var A;
    const k = i.viewMoved ? i.viewDistance : ((A = J()) == null ? void 0 : A.radius) || Qn, M = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: k };
    return x1(i.spaceMode, M, oe());
  }
  function oe() {
    return fe() ? O().position : [0, 0, 0];
  }
  function X() {
    return r && c.camera !== null;
  }
  function fe() {
    return X() && (!d || c.camera.visible);
  }
  function xe() {
    return c.painting_visible !== !1;
  }
  function Q(k) {
    return k.visible && no(k.clip, i.frame);
  }
  function O() {
    return Du(c.camera, i.frame);
  }
  function J() {
    var M;
    const k = h();
    return ((M = k.space ?? k.content) == null ? void 0 : M.sphere) ?? null;
  }
  function ie(k) {
    i.viewPosition = k.position, i.viewYaw = k.yaw_deg, i.viewPitch = k.pitch_deg, i.viewDistance = k.distance, i.viewMoved = !0, s.backgroundDirty = !0, F({ localOnly: !0, reason: lt.VIEW });
  }
  function Se() {
    var k;
    return ((k = J()) == null ? void 0 : k.radius) || Qn;
  }
  function _e() {
    var pe;
    const k = h().space, M = g(), A = i.worldSelectedId || i.selectedId, B = M.stickers.findIndex((we) => we.id === A), te = B < 0 ? null : {
      sticker: M.stickers[B],
      value: ma(M, i.frame).stickers[B],
      plane: k.stickers.find((we) => we.id === A) ?? null,
      item: ((pe = k.sticker) == null ? void 0 : pe.id) === A && k.sticker.url ? { kind: k.sticker.kind, box: o.sceneBox(k.sticker.url) } : null
    }, ge = m() ? v() : O1(J(), te);
    if (!ge) return;
    const W = D();
    i.viewDistance = W.distance, i.viewMoved = !0, q(dm(W, ge, n.width, n.height));
  }
  function I(k) {
    return o.pickSurface(V(), k.x, k.y, n.width, n.height);
  }
  function re(k, M) {
    var A;
    return Tc(k, M, i.viewMoved ? null : (A = J()) == null ? void 0 : A.center, Se());
  }
  function _() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function w(k, M) {
    const A = performance.now(), B = { x: k.x, y: k.y, time: A, key: o.contentRevision(), view: _() };
    if (!sm(U, B)) {
      const ge = I(k);
      U = { ...B, cost: performance.now() - A, hit: ge };
    }
    const te = D();
    ie(um(te, re(te, U.hit), M, Se())), U.view = _(), U.wheelTime = A;
  }
  function H(k, M, A) {
    const B = D();
    i.interaction = k === "orbit" ? { kind: "space_orbit", last: M, pivot: re(B, I(M)) } : { kind: "space_pan", last: M, depth: am(B, Se()) }, C(M), n.setPointerCapture(A);
  }
  function G(k) {
    return k * 0.2;
  }
  function v() {
    return { center: O().position, radius: G(Se()) };
  }
  function x(k, M) {
    const { yaw_deg: A, pitch_deg: B } = gm(k.position, M);
    return { ...k, yaw_deg: A, pitch_deg: B };
  }
  function V() {
    return qu(D(), n.width, n.height, J());
  }
  return {
    connect(k) {
      ({
        editorViewInput: h,
        editorViewSceneState: g,
        isCameraSelected: m,
        isErpCamera: y,
        requestDraw: F,
        sceneFiles: K,
        startAnimation: z,
        syncFloatingViewButtonState: L,
        updateCursor: C
      } = k);
    },
    transitionView: q,
    applyViewTransitionEnd: ce,
    cancelViewTransition: $,
    turnViewTo: me,
    cameraPreviewShown: P,
    isSpaceView: T,
    hasSpaceContent: ne,
    isFreeSpaceView: Z,
    viewControls: le,
    spaceModeState: ae,
    applySpaceMode: Y,
    setSpaceMode: S,
    spaceViewState: D,
    spaceOrigin: oe,
    hasCamera: X,
    cameraShoots: fe,
    paintingShown: xe,
    sceneStickerShown: Q,
    cutoutCamera: O,
    contentSphere: J,
    setSpaceView: ie,
    spaceScale: Se,
    frameSpaceContent: _e,
    zoomSpaceAt: w,
    startSpaceDrag: H,
    currentSpaceCamera: V,
    cameraFrustumLength: G,
    cameraSphere: v,
    lookingAt: x
  };
}
function lN(e) {
  const {
    canvas: t,
    editor: r,
    editorView: n,
    imageCache: i,
    readOnly: o,
    scheduler: a,
    state: s,
    stateV2: l,
    stillCanvas: c,
    videoEl: u
  } = e;
  let d, f, h, g, m, y, F, K, z, L, C, U, q, ce, $, me, P, T, ne, Z, le, ae, Y, S, D, oe, X, fe, xe, Q, O, J, ie, Se, _e = { revision: -1, sceneState: null }, I = null;
  function re() {
    return I || (I = H()), I;
  }
  function _() {
    I = null;
  }
  function w() {
    return _e.sceneState;
  }
  function H() {
    const we = U(), Pe = h(), ue = { ...s.assets };
    for (const E of l ? [] : s.stickers) {
      const de = String((E == null ? void 0 : E.asset_id) || "");
      de && !ue[de] && i.has(de) && (ue[de] = { type: "comfy_image", filename: de });
    }
    const ve = l ? s.stickers.map((E) => Z(E) ? { ...E, source: { kind: "file", filename: xe(E) } } : E) : s.stickers;
    _e.revision !== a.stateRevision && (_e = { revision: a.stateRevision, sceneState: Zn({ ...s, stickers: ve, assets: ue, painting: null }) }), l && G(_e.sceneState);
    const Ne = ma(_e.sceneState, r.frame), p = ae ? L() : null, j = (E) => {
      if (l && !E.visible) return null;
      if (ae && P(E)) return p;
      const de = ce(E);
      return de ? { media: de, revision: q(de) } : null;
    }, N = ie(), b = [...N.sky, ...xm(_e.sceneState, r.frame, s.stickers, { media: j, paintLayers: Pe, evaluated: Ne })], R = we && (we === u || we === c) ? u.dataset.panoSrc : we, se = me(we) ? { media: we, revision: q(we), coverage: f(), source: R } : null, ye = $(), he = k1(D(), ye, oe());
    he.mode !== r.spaceMode && y(), d(he);
    const ee = ye ? v(_e.sceneState, Ne, j, N) : null, be = ne() ? { ...ee, ...x(ee) } : null;
    return { background: se, layers: b, space: be, content: ee };
  }
  function G(we) {
    const Pe = new Map(s.stickers.map((ue) => [ue.id, ue.clip]));
    we.scene.clip = { ...s.scene.clip };
    for (const ue of we.stickers) {
      const ve = Pe.get(ue.id);
      ve && (ue.clip = { ...ve });
    }
  }
  function v(we, Pe, ue, ve) {
    const Ne = Y(), p = Xu(Ne, Pe.scene), j = p != null && p.url ? n.sceneBox(p.url) : null, N = j && us(p.kind, j), b = fe(), R = hm(b, we, Pe), se = R != null && R.url ? n.sceneBox(R.url) : null, ye = se ? [{ box: us(R.kind, se), value: R.value }] : [], he = km(we, r.frame, s.stickers, { media: ue, evaluated: Pe });
    for (const { request: be, value: E } of ve.items) {
      const de = be != null && be.url ? n.sceneBox(be.url) : null;
      de && ye.push({ box: us(be.kind, de), value: E });
    }
    const ee = Rc(I1(Pe, N, [...he, ...ve.stickers], ye));
    return {
      evaluated: Pe,
      sceneUrls: Ne ? Ne.urls.filter(Boolean) : [],
      scene: p,
      stickerUrls: mm(b, we),
      sticker: R,
      stickers: he,
      upstreamStickers: ve.stickers,
      upstreamItems: ve.items,
      sphere: ee
    };
  }
  function x(we) {
    var ue;
    const Pe = ((ue = we.sphere) == null ? void 0 : ue.radius) || Qn;
    return {
      gizmo: k() ? B() : V(we.evaluated),
      grid: r.showGrid && !r.fullscreen ? G1(Pe) : null,
      lines: m() ? A(Pe) : []
    };
  }
  function V(we) {
    const Pe = S(), ue = we.stickers.find((ve) => ve.id === (Pe == null ? void 0 : Pe.id));
    return !Se(Pe) || !(ue != null && ue.active) ? null : { mode: r.gizmoMode, transform: Dc(ue) };
  }
  function k() {
    return m() && r.selectedId === bl;
  }
  let M = { revision: -1, span: -1, segments: [] };
  function A(we) {
    const Pe = O();
    (M.revision !== a.stateRevision || M.span !== Pe) && (M = { revision: a.stateRevision, span: Pe, segments: K1(B1(s, Pe)) });
    const { segments: ue } = M, ve = ue.length ? [{ segments: ue, color: rP }] : [];
    if (!T()) return ve;
    const Ne = k() ? Cg : nP;
    return [...ve, { segments: ym(K(), g(we)), color: Ne }];
  }
  function B() {
    return !T() || !k() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: Dc({ ...K(), scale: 1 }) };
  }
  function te() {
    const { background: we, layers: Pe, space: ue } = re(), ve = t.width, Ne = t.height, p = z({ x: 0, y: 0, w: ve, h: Ne });
    let j = !1;
    return !we && !Pe.length && !ue ? (n.clear(460551), j = n.ready) : (n.clear(), j = !!n.render({
      rect: p,
      camera: ue ? qu(X(), ve, Ne, ue.sphere) : F(),
      background: we,
      layers: Pe,
      space: ue
    })), Q(), (r.worldSelectedId || k() || le()) && J(), j;
  }
  function ge(we) {
    const { content: Pe } = re();
    return !Pe || !we.position ? Wo(we) : fm(Wo(we), we.position, C(), Pe.sphere);
  }
  function W(we, Pe, ue, ve = null) {
    const { background: Ne, layers: p, content: j } = re();
    if (!Ne && !p.length && !j) return null;
    const N = j && Pe.position ? j : null;
    return n.render({ rect: we, camera: ge(Pe), background: Ne, layers: p, space: N, owner: ue, clearColor: ve });
  }
  function pe(we) {
    return n.clear(460551), !!n.renderUnwrap({ rect: z(we), ...re() });
  }
  return {
    connect(we) {
      ({
        applySpaceMode: d,
        backgroundCoverage: f,
        buildEditorViewPaintLayers: h,
        cameraFrustumLength: g,
        cameraShoots: m,
        cancelViewTransition: y,
        currentViewCamera: F,
        cutoutCamera: K,
        deviceRect: z,
        followPortSticker: L,
        frameViewDistance: C,
        getConnectedErpImage: U,
        getMediaRevisionToken: q,
        getStickerImage: ce,
        hasSpaceContent: $,
        isDecodedImageReady: me,
        isExternalSticker: P,
        isFreeSpaceView: T,
        isSpaceView: ne,
        isUploadingSticker: Z,
        isWorldMenuShown: le,
        portVideo: ae,
        sceneFiles: Y,
        selectedWorldSticker: S,
        spaceModeState: D,
        spaceOrigin: oe,
        spaceViewState: X,
        stickerFiles: fe,
        stickerImageKey: xe,
        syncFloatingViewButtonState: Q,
        timelineSpanFrames: O,
        updateSelectionMenu: J,
        upstreamViewInput: ie,
        worldStickerEditable: Se
      } = we);
    },
    editorViewInput: re,
    endEditorViewFrame: _,
    editorViewSceneState: w,
    isCameraSelected: k,
    renderEditorView: te,
    shotViewCamera: ge,
    drawEditorViewShot: W,
    renderEditorViewUnwrap: pe
  };
}
function cN(e) {
  const {
    comfyMedia: t,
    editor: r,
    mediaAssetSource: n,
    mediaSource: i,
    node: o,
    state: a,
    studio: s
  } = e;
  let l, c, u, d, f = { list: null, entries: [] };
  const h = /* @__PURE__ */ new Map(), g = () => d({ cause: "frame_view", localOnly: !0, reason: lt.MEDIA });
  function m(Z) {
    if (!Z) return null;
    let le = h.get(Z);
    return le || (le = new Image(), le.onload = g, le.onerror = g, le.src = Z, h.set(Z, le)), le;
  }
  function y({ sceneState: Z, ui: le }) {
    return [
      ...Z.stickers.filter((ae) => ae.source.kind !== "port").map((ae) => n($s(ae.source))),
      i(Nr(le, Ji)[0] || null),
      ...Z.painting.raster_objects.map((ae) => ae.rasterDataUrl)
    ].filter(Boolean);
  }
  function F() {
    return s && (_f(o, "scene") === Fg || !!K());
  }
  function K() {
    const Z = s && en(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, le = Array.isArray(Z) ? Z : null;
    if (f.list !== le) {
      f.entries.forEach(T), f = { list: le, entries: le ? CP(le).map((Y) => ({ layer: Y })) : [] };
      const ae = new Set(f.entries.flatMap((Y) => y(Y.layer)));
      for (const Y of [...h.keys()]) ae.has(Y) || h.delete(Y);
    }
    return le && f.entries;
  }
  function z() {
    if (!K()) return 0;
    const [Z] = t.uiValue(o, "pano_timeline_frames") || [];
    return Number(Z) > 0 ? Number(Z) : 0;
  }
  function L() {
    if (!s) return "";
    const Z = K();
    if (OP(_f(o, "scene"), Z)) return "Run the workflow to show the upstream scene.";
    if (!Z) return "";
    const le = t.uiList(o, "pano_sticker_warnings");
    return String(le.find((ae) => String(ae).startsWith(EP)) ?? "");
  }
  function C(Z, le, ae) {
    const { ui: Y, sceneState: S } = Z.layer, D = S.timeline.fps, oe = Nr(Y, Ng)[0], X = Nr(Y, Pg).map(i).filter(Boolean), fe = i(Nr(Y, Mg)[0] || null), xe = oe && typeof oe == "object" ? X.length ? { frames: X, meta: oe } : fe ? { src: fe, meta: oe } : null : null, Q = m(i(Nr(Y, Ji)[0] || null)), O = xe ? td(le.clip, ae, D, xe.meta) : null;
    let J = Q;
    if (xe != null && xe.frames)
      Z.frames || (Z.frames = rd({
        createImage: (ie, Se) => {
          const _e = new Image();
          return _e.onload = Se, _e.onerror = Se, _e.src = ie, _e;
        },
        onLoad: g
      })), J = Z.frames.picture(xe.frames, O, xe.meta, Q);
    else if (xe != null && xe.src) {
      const ie = U(Z);
      ie.follow({ src: xe.src, time: O, playing: u.advancing, fps: D }), J = ie.picture(Z.still, Q);
    }
    return J ? { media: J, revision: c(J), source: nd(xe, Q) } : null;
  }
  function U(Z) {
    if (Z.follower) return Z.follower;
    const le = ha(document, "editor.upstream-port-video");
    le.playsInline = !0, le.preload = "auto";
    const ae = nn({ label: "editor.upstream-port-still" });
    return ae.__panoFrameIdx = 0, Z.video = le, Z.still = ae, Z.follower = sd({
      video: le,
      onCapture: () => {
        var D;
        const Y = Number(le.videoWidth || 0), S = Number(le.videoHeight || 0);
        Y < 1 || S < 1 || (ae.width = Y, ae.height = S, (D = ae.getContext("2d")) == null || D.drawImage(le, 0, 0), ae.__panoFrameIdx += 1, g());
      },
      onChange: g
    }), Z.follower;
  }
  function q(Z, le, ae) {
    if (le.source.kind === "port") return C(Z, le, ae);
    const Y = m(n($s(le.source)));
    return Y ? { media: Y, revision: c(Y) } : null;
  }
  function ce(Z) {
    var xe;
    const { sceneState: le } = Z.layer, { painting: ae } = le, Y = ae.paint.strokes.length + ae.mask.strokes.length;
    if (!le.painting_visible || !Y && !ae.raster_objects.length) return [];
    const S = l(), D = `${S.width}x${S.height}`;
    Z.paintSize !== D && (me(Z), Z.paintSize = D, Z.paintEngine = Y ? pl(S) : null, (xe = Z.paintEngine) == null || xe.rebuildCommitted({ painting: ae }), Z.rasters = /* @__PURE__ */ new Map());
    const oe = Z.paintEngine, X = (oe == null ? void 0 : oe.getMaskDisplayCanvas()) || null, fe = [];
    for (const Q of FP(le, oe ? oe.getAllGroupIds() : [], !!X)) {
      const O = Q.kind === "group" ? oe == null ? void 0 : oe.getGroupDisplayCanvas(Q.id) : Q.kind === "mask" ? X : $(Z, Q.item, S);
      O && fe.push({ id: `${Q.kind}:${Q.id}`, media: O, revision: D, opacity: 1, zIndex: Q.zIndex });
    }
    return fe;
  }
  function $(Z, le, { width: ae, height: Y }) {
    if (Z.rasters.has(le.id)) return Z.rasters.get(le.id);
    const S = m(le.rasterDataUrl);
    if (!S.complete || !S.naturalWidth) return null;
    const D = nn({ label: "editor.upstream-raster-erp", width: ae, height: Y }), oe = D.getContext("2d");
    return oe ? (Ag(oe, S, le, ae, Y), Z.rasters.set(le.id, D), D) : null;
  }
  function me(Z) {
    var le;
    (le = Z.rasters) == null || le.forEach((ae) => Zo(ae)), Z.rasters = null, Z.paintEngine = null, Z.paintSize = null;
  }
  function P() {
    const Z = K() ?? [], le = { sky: [], stickers: [], items: [] };
    return Z.forEach((ae, Y) => {
      const S = AP(r.frame, a.timeline.fps, ae.layer.sceneState.timeline.fps), D = TP(ae.layer, Y, S, {
        media: (oe) => q(ae, oe, S),
        paintLayers: ce(ae),
        source: i
      });
      le.sky.push(...D.sky), le.stickers.push(...D.stickers), le.items.push(...D.items);
    }), le;
  }
  function T(Z) {
    var le;
    (le = Z.follower) == null || le.dispose(), Z.still && Zo(Z.still), me(Z);
  }
  function ne() {
    f.entries.forEach(T), f = { list: null, entries: [] }, h.clear();
  }
  return {
    connect(Z) {
      ({ getDesiredPaintTargetDescriptor: l, getMediaRevisionToken: c, playback: u, requestDraw: d } = Z);
    },
    upstreamLinked: F,
    upstreamNotice: L,
    upstreamSpanFrames: z,
    upstreamViewInput: P,
    disposeUpstream: ne
  };
}
const au = "camera_preview";
function uN(e) {
  return e === au ? lt.SPLAT_PREVIEW : lt.SPLAT_STAGE;
}
function dN(e) {
  return [...e].some((t) => t !== lt.VIEW && t !== lt.OVERLAY && t !== lt.SPLAT_STAGE);
}
function Lg(e, t = !1) {
  const r = Ee(yi(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function fN(e) {
  const {
    backgroundCanvas: t,
    cutoutPreviewCanvas: r,
    cutoutPreviewHost: n,
    editor: i,
    editorView: o,
    runtime: a,
    shotEditor: s,
    studio: l,
    uiState: c
  } = e;
  let u, d, f, h, g = null, m = !1, y = !1;
  function F() {
    m && (m = !1, o.releaseSplats(au));
  }
  function K() {
    g = null, y = !1, F();
  }
  function z($) {
    if (!n || !$) return !1;
    const me = n.closest(".pano-camera-preview");
    if (!me) return !1;
    const P = Math.round(Number(me.clientWidth || n.clientWidth || 0)), T = Math.round(Number(me.clientHeight || n.clientHeight || 0));
    return Math.abs(P - Number($.width || 0)) <= 1 && Math.abs(T - Number($.height || 0)) <= 1;
  }
  function L($, me) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !s || !c.cameraPreview) return;
    if (i.mode === "frame" || !u()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, K();
      return;
    }
    const P = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !P || !r) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = P ? "Preview unavailable" : "Add Frame to preview", K();
      return;
    }
    const T = Lg(P, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = T.width, c.cameraPreview.height = T.height, y) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, F();
      return;
    }
    const ne = window.devicePixelRatio || 1, Z = Math.max(1, T.width * ne), le = Math.max(1, T.height * ne), ae = Math.min(1, t.width / Z, t.height / le), Y = { width: Math.max(1, Math.floor(Z * ae)), height: Math.max(1, Math.floor(le * ae)) }, S = !g || g.width !== Y.width || g.height !== Y.height || dN(me);
    if ($ && S) {
      m = !0;
      const oe = d({ x: 0, y: t.height - Y.height, w: Y.width, h: Y.height }, P, au);
      g = oe ? Y : null, oe && ce(oe);
    }
    if (!g) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = h() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const D = z(T);
    c.cameraPreview.ready = !0, c.cameraPreview.label = D ? "" : "Loading preview", c.cameraPreview.settled = D && a.pendingStableLayoutFrames <= 0 && a.hasPresentedFrame;
  }
  function C() {
    g = null, y = !1;
  }
  let U = 0, q = !1;
  function ce($) {
    const me = ++U;
    createImageBitmap($.canvas, $.x, $.y, $.width, $.height).then((P) => {
      var T;
      if (me !== U || !a.running) {
        P.close();
        return;
      }
      (T = r.getContext("bitmaprenderer")) == null || T.transferFromImageBitmap(P);
    }).catch((P) => {
      me !== U || !a.running || (y = !0, g = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !q && (q = !0, console.error("[PanoramaStickers] camera preview frame failed", P)));
    });
  }
  return {
    connect($) {
      ({
        cameraPreviewShown: u,
        drawEditorViewShot: d,
        getActiveCutoutShot: f,
        getConnectedErpImage: h
      } = $);
    },
    drawCutoutOutputPreview: L,
    forgetCameraPreviewFrame: C
  };
}
function pN(e) {
  const {
    cameraV2: t,
    canvas: r,
    ctx: n,
    editor: i,
    editorView: o,
    frameGateCssRadius: a,
    runtime: s,
    shotEditor: l,
    studio: c,
    type: u
  } = e;
  let d, f, h, g, m, y, F, K, z, L, C, U, q, ce, $, me, P, T, ne, Z, le, ae, Y, S, D, oe, X, fe, xe, Q, O, J, ie, Se, _e, I, re, _;
  function w(ue) {
    const ve = r.width, Ne = r.height, p = ce();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, ve, Ne), J(), ue && (s.backgroundDirty = !_e(p)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let N = 0; N <= 16; N += 1) {
        const b = p.x + p.w * N / 16;
        n.beginPath(), n.moveTo(b, p.y), n.lineTo(b, p.y + p.h), n.stroke();
      }
      for (let N = 0; N <= 8; N += 1) {
        const b = p.y + p.h * N / 8;
        n.beginPath(), n.moveTo(p.x, b), n.lineTo(p.x + p.w, b), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(p.x, p.y + p.h / 2), n.lineTo(p.x + p.w, p.y + p.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const j = p.y + p.h * 0.57;
      n.fillText("Left", p.x + p.w * 0.25, j), n.fillText("Front", p.x + p.w * 0.5, j), n.fillText("Right", p.x + p.w * 0.75, j), n.fillText("Back", p.x + 38, j), n.fillText("Back", p.x + p.w - 38, j);
    }
  }
  function H(ue, ve, Ne = 1) {
    let p = !1;
    n.strokeStyle = ve, n.lineWidth = Ne, n.beginPath();
    for (const j of ue) {
      const N = fe(j);
      if (!N) {
        p = !1;
        continue;
      }
      p ? n.lineTo(N.x, N.y) : (n.moveTo(N.x, N.y), p = !0);
    }
    n.stroke();
  }
  function G(ue) {
    const ve = r.width, Ne = r.height;
    if (n.clearRect(0, 0, ve, Ne), J(), ue && (s.backgroundDirty = !Se()), i.showGrid && !i.fullscreen && m().space)
      v();
    else if (i.showGrid && !i.fullscreen) {
      for (let j = -180; j <= 180; j += 15) {
        const N = [];
        for (let b = -89; b <= 89; b += 4) N.push(Pn(j, b));
        H(N, "#3f3f46", j % 90 === 0 ? 1.3 : 1);
      }
      for (let j = -75; j <= 75; j += 15) {
        const N = [];
        for (let b = -180; b <= 180; b += 4) N.push(Pn(b, j));
        H(N, j === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", j === 0 ? 1.5 : 1);
      }
      const p = [
        { name: "Left", dir: Pn(-90, 0) },
        { name: "Front", dir: Pn(0, 0) },
        { name: "Right", dir: Pn(90, 0) },
        { name: "Back", dir: Pn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", p.forEach((j) => {
        const N = fe(j.dir);
        N && n.fillText(j.name, N.x, N.y + 24);
      });
    }
  }
  function v() {
    const ue = qu(_(), r.width, r.height, f()), ve = oa(ue, [0, 0, 0], r.width, r.height);
    ve && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", ve.x, ve.y - 12));
  }
  function x(ue, ve) {
    const Ne = X(ue), p = Pn(Number(Ne.yaw_deg || 0), Number(Ne.pitch_deg || 0)), j = i.mode === "unwrap" ? xe(p) : null, N = j ? j.x : null, b = i.mode === "pano" ? 28 : 20, R = [
      I(ue, 0, b, N),
      I(ue, 1, b, N),
      I(ue, 2, b, N),
      I(ue, 3, b, N)
    ];
    ud(n, R, { selected: ve });
  }
  function V(ue, ve = []) {
    if (!(!ue || !Array.isArray(ve) || ve.length < 4)) {
      ue.beginPath(), ue.moveTo(ve[0].x, ve[0].y);
      for (let Ne = 1; Ne < 4; Ne += 1) ue.lineTo(ve[Ne].x, ve[Ne].y);
      ue.closePath();
    }
  }
  function k(ue, ve, Ne) {
    const p = Array.isArray(ue == null ? void 0 : ue.corners) ? ue.corners : [];
    if (p.length < 4) return;
    const j = Ee(Number((ue == null ? void 0 : ue.visibilityAlpha) ?? 1), 0, 1);
    if (j <= 0.01) return;
    const N = n.globalAlpha;
    n.globalAlpha = N * j;
    const b = Ne ? "rgba(255, 116, 116, 0.96)" : ve ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", R = Ne ? "rgba(255, 89, 89, 0.08)" : ve ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", se = ve ? 3.2 : 2.6;
    V(n, p), n.fillStyle = R, n.fill(), n.strokeStyle = b, n.lineWidth = se, n.stroke(), n.save(), n.strokeStyle = b, n.lineWidth = ve ? 3.2 : 2.6, n.lineCap = "round";
    const ye = Array.isArray(ue == null ? void 0 : ue.edgeMidpoints) && ue.edgeMidpoints.length >= 4 ? ue.edgeMidpoints : [
      { edge: "top", x: (p[0].x + p[1].x) * 0.5, y: (p[0].y + p[1].y) * 0.5 },
      { edge: "right", x: (p[1].x + p[2].x) * 0.5, y: (p[1].y + p[2].y) * 0.5 },
      { edge: "bottom", x: (p[2].x + p[3].x) * 0.5, y: (p[2].y + p[3].y) * 0.5 },
      { edge: "left", x: (p[3].x + p[0].x) * 0.5, y: (p[3].y + p[0].y) * 0.5 }
    ], he = { top: "bottom", right: "left", bottom: "top", left: "right" }, ee = ve ? 12 : 9;
    ye.forEach((be) => {
      const de = ye.find((Ie) => (Ie == null ? void 0 : Ie.edge) === he[be == null ? void 0 : be.edge]) || {
        x: (p[0].x + p[1].x + p[2].x + p[3].x) * 0.25,
        y: (p[0].y + p[1].y + p[2].y + p[3].y) * 0.25
      }, Me = de.x - be.x, Ae = de.y - be.y, Te = Math.hypot(Me, Ae) || 1;
      n.beginPath(), n.moveTo(be.x, be.y), n.lineTo(be.x + Me / Te * ee, be.y + Ae / Te * ee), n.stroke();
    }), n.restore(), n.globalAlpha = N;
  }
  function M(ue, ve, Ne, p) {
    const j = Ee(Number((ve == null ? void 0 : ve.visibilityAlpha) ?? 1), 0, 1);
    if (j <= 0.01) return;
    if (Y(ue)) {
      k(ve, Ne, p);
      return;
    }
    if (S(ue)) {
      const b = n.globalAlpha;
      n.globalAlpha = b * q(ue) * j, i.mode === "frame" ? (n.strokeStyle = Ne ? "rgba(250, 250, 250, 0.9)" : p ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = Ne ? 2 : 1, V(n, ve.corners), n.stroke()) : x(ue, Ne), n.globalAlpha = b;
      return;
    }
    const N = n.globalAlpha;
    n.globalAlpha = N * j, n.fillStyle = Ne ? "rgba(0, 112, 243, 0.24)" : p ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", V(n, ve.corners), n.fill(), n.strokeStyle = Ne ? "rgba(255, 255, 255, 1)" : p ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = Ne ? 2.8 : 1.9, V(n, ve.corners), n.stroke(), n.globalAlpha = N;
  }
  function A(ue, ve, Ne) {
    if (S(ue)) {
      og(n, ve, { accent: Ne });
      return;
    }
    const p = !(Y(ue) && me());
    n.fillStyle = Ne, p && ve.corners.forEach((j) => {
      n.beginPath(), n.arc(j.x, j.y, 6.5, 0, Math.PI * 2), n.fill();
    }), p && Y(ue) && (n.strokeStyle = Ne, n.lineCap = "round", n.lineWidth = 4, ve.edgeMidpoints.forEach((j) => {
      var ee, be, E, de;
      const N = (((ee = j.b) == null ? void 0 : ee.x) ?? j.x) - (((be = j.a) == null ? void 0 : be.x) ?? j.x), b = (((E = j.b) == null ? void 0 : E.y) ?? j.y) - (((de = j.a) == null ? void 0 : de.y) ?? j.y), R = Math.hypot(N, b) || 1, se = N / R, ye = b / R, he = 10;
      n.beginPath(), n.moveTo(j.x - se * he, j.y - ye * he), n.lineTo(j.x + se * he, j.y + ye * he), n.stroke();
    }), n.lineCap = "butt"), D(ue) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(ve.rotateStemBase.x, ve.rotateStemBase.y), n.lineTo(ve.rotateHandle.x, ve.rotateHandle.y), n.stroke(), n.fillStyle = Ne, n.beginPath(), n.arc(ve.rotateHandle.x, ve.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function B() {
    var N;
    const ue = i.mode === "frame" ? [] : U(), ve = ue.length > 1, Ne = l ? F() : L(), p = Ne.map((b) => `${String((b == null ? void 0 : b.id) || "")}:${Y(b) ? "frame" : Number((b == null ? void 0 : b.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== Ne || i._sortedItemsCache.orderKey !== p) && (i._sortedItemsCache = {
      src: Ne,
      orderKey: p,
      sorted: [...Ne]
    });
    const j = i._sortedItemsCache.sorted;
    for (const b of j) {
      const R = i.mode !== "frame" && !ve && Z(b);
      if (i.mode === "frame" && !R) continue;
      const se = S(b), ye = Y(b), he = ne(b);
      if (!se && !ye || ae(b) && !re(b)) continue;
      const ee = oe(b);
      if (u !== "stickers" && !ee.visible)
        continue;
      const be = Ee(Number((ee == null ? void 0 : ee.visibilityAlpha) ?? 1), 0, 1);
      if (be <= 0.01) continue;
      const E = ye && l && i.mode === "pano" ? Ee(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= E, M(b, ee, R, he), R && ee.visible) {
        const de = he ? "#ff4d4f" : se && P(b) ? "#f59e0b" : "#0070f3", Me = n.globalAlpha;
        n.globalAlpha = Me * be, A(b, ee, de), n.globalAlpha = Me;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !y() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const b = i.cutoutPanoFrameVisual, R = Ee(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= R, k(b.geom, b.selected, b.locked), b.selected && A(
        b.item,
        b.geom,
        b.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (ve) {
      const b = C(ue);
      if (b != null && b.visible) {
        const R = d(ue) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(b.corners[0].x, b.corners[0].y);
        for (let se = 1; se < b.corners.length; se += 1) n.lineTo(b.corners[se].x, b.corners[se].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = R, b.corners.forEach((se) => {
          n.beginPath(), n.arc(se.x, se.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      ue.forEach((b) => {
        if (!D(b) && !le(b)) return;
        const R = oe(b);
        if (!(R != null && R.visible)) return;
        const se = ne(b) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(R.corners[0].x, R.corners[0].y);
        for (let ye = 1; ye < R.corners.length; ye += 1) n.lineTo(R.corners[ye].x, R.corners[ye].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = se, R.corners.forEach((ye) => {
          n.beginPath(), n.arc(ye.x, ye.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((N = i.interaction) == null ? void 0 : N.kind) === "marquee_select") {
      const b = ie(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(b.x0, b.y0, b.x1 - b.x0, b.y1 - b.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function te(ue) {
    const ve = y(), Ne = K(ve);
    if (!ve || !Ne)
      return n.clearRect(0, 0, r.width, r.height), ue && o.clear(657930), !1;
    const p = { x: Ne.x, y: Ne.y, w: Ne.w, h: Ne.h }, { rect: j, shot: N } = _m(ve, Ne, { width: r.width, height: r.height }), b = ge(p);
    if (n.clearRect(0, 0, r.width, r.height), ue) {
      o.clear(657930);
      const R = h(j), se = !!g(R, N, void 0, 657930);
      se || o.clear(1118481, R), s.backgroundDirty = !se;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(p.x, p.y, p.w, p.h, b), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = Cg, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(p.x + 1, p.y + 1, p.w - 2, p.h - 2, Math.max(0, b - 1)), n.stroke(), n.restore(), !0;
  }
  function ge(ue) {
    const ve = Math.max(1e-6, Number(s.frameCanvasScale || 1));
    return Math.min(a * ve, Number((ue == null ? void 0 : ue.w) || 0) * 0.5, Number((ue == null ? void 0 : ue.h) || 0) * 0.5);
  }
  function W() {
    var se, ye;
    if (((se = i.interaction) == null ? void 0 : se.kind) !== "paint_lasso_fill") return;
    const ue = i.interaction.stroke, ve = (ye = ue == null ? void 0 : ue.geometry) == null ? void 0 : ye.points;
    let Ne;
    if (i.mode === "frame") {
      const he = y(), ee = z(he);
      Ne = Q(ve, he, ee);
    } else
      Ne = O(ve);
    if (!Array.isArray(Ne) || Ne.length < 3) return;
    const p = String((ue == null ? void 0 : ue.layerKind) || "") === "mask", j = (ue == null ? void 0 : ue.color) || { r: 1, g: 0.25, b: 0.25 }, N = Math.round(Number(j.r || 0) * 255), b = Math.round(Number(j.g || 0) * 255), R = Math.round(Number(j.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(Ne[0].x || 0), Number(Ne[0].y || 0));
    for (let he = 1; he < Ne.length; he++) n.lineTo(Number(Ne[he].x || 0), Number(Ne[he].y || 0));
    n.closePath(), p ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${N},${b},${R},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function pe() {
    const ue = i.frameRollOverlayVisual, ve = Ee(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(ue != null && ue.shot) || ve <= 1e-4) return;
    const Ne = z(ue.shot);
    if (!Ne) return;
    const p = { x: Ne.x + Ne.w * 0.5, y: Ne.y + Ne.h * 0.5 }, j = Number(ue.shot.roll_deg ?? ue.shot.rot_deg ?? 0) * hr, N = Math.hypot(Ne.w, Ne.h) * 0.55, b = Math.cos(j) * N, R = Math.sin(j) * N;
    n.save(), n.globalAlpha *= ve, n.beginPath(), n.rect(Ne.x, Ne.y, Ne.w, Ne.h), n.clip(), n.translate(p.x, p.y), n.rotate(j);
    const se = Math.max(12, Math.min(Ne.w, Ne.h) / 6);
    n.beginPath();
    for (let ye = -N; ye <= N; ye += se)
      n.moveTo(ye, -N), n.lineTo(ye, N);
    for (let ye = -N; ye <= N; ye += se)
      n.moveTo(-N, ye), n.lineTo(N, ye);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(p.x - b, p.y - R), n.lineTo(p.x + b, p.y + R), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function we() {
    return !l || !y() || t && T() || c && !$() ? 0 : aP;
  }
  function Pe() {
    const ue = Ee(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (ue <= 1e-4 || !l || i.mode !== "pano") return;
    const ve = y(), Ne = ve ? oe(ve) : null, p = Array.isArray(Ne == null ? void 0 : Ne.corners) && Ne.corners.length >= 4 ? Ne.corners.map((b) => ({ x: Number(b.x || 0), y: Number(b.y || 0) })) : null;
    Ne != null && Ne.visible && p && (i.cutoutPanoDimCorners = p), ve && (Ne != null && Ne.visible) && p && (i.cutoutPanoFrameVisual = {
      item: ve,
      geom: Ne,
      selected: Z(ve),
      locked: ne(ve)
    });
    const j = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, N = Ne != null && Ne.visible ? p : j ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${ue})`, n.beginPath(), n.rect(0, 0, r.width, r.height), N.length >= 4) {
      n.moveTo(N[0].x, N[0].y);
      for (let b = 1; b < 4; b += 1) n.lineTo(N[b].x, N[b].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(ue) {
      ({
        areAllSelectedItemsLocked: d,
        contentSphere: f,
        deviceRect: h,
        drawEditorViewShot: g,
        editorViewInput: m,
        getActiveCutoutShot: y,
        getCutoutSelectableItemsForDisplay: F,
        getFrameViewLayout: K,
        getFrameViewRect: z,
        getList: L,
        getMultiSelectionGeom: C,
        getSelectedItems: U,
        getStickerDisplayAlpha: q,
        getUnwrapRect: ce,
        isCameraSelected: $,
        isErpCamera: me,
        isExternalSticker: P,
        isFreeSpaceView: T,
        isItemLocked: ne,
        isItemSelected: Z,
        isRasterObjectItem: le,
        isSceneSticker: ae,
        isShotItem: Y,
        isStickerItem: S,
        isStrokeGroupItem: D,
        objectGeom: oe,
        poseOf: X,
        projectDir: fe,
        projectDirUnwrap: xe,
        projectErpLassoPointsToFrameRect: Q,
        projectLassoPointsToCurrentView: O,
        rebuildPaintEngineIfNeeded: J,
        rectFromPoints: ie,
        renderEditorView: Se,
        renderEditorViewUnwrap: _e,
        sampleStickerEdge: I,
        sceneStickerShown: re,
        spaceViewState: _
      } = ue);
    },
    drawGridUnwrap: w,
    drawGridPano: G,
    drawObjects: B,
    drawFrameViewBackground: te,
    drawLassoOutlineOverlay: W,
    drawFrameRollOverlay: pe,
    getCutoutPanoDimTarget: we,
    drawCutoutPanoPassepartout: Pe
  };
}
function hN(e) {
  const {
    app: t,
    backgroundCanvas: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: a,
    readOnly: s,
    runtime: l,
    scheduler: c,
    shotEditor: u,
    stageWrap: d,
    state: f,
    timeline: h,
    type: g,
    uiState: m,
    viewController: y
  } = e;
  let F, K, z, L, C, U, q, ce, $, me, P, T, ne, Z, le, ae, Y, S, D, oe, X, fe, xe, Q, O, J = () => {
  };
  function ie(W = /* @__PURE__ */ new Set()) {
    me();
    const pe = l.backgroundDirty;
    u && (S(), K(pe, W)), i.mode === "frame" ? (l.frameSafeRect = ae(), C(pe)) : i.mode === "unwrap" ? q(pe) : U(pe), z(), $(), X(), ce(), L(), m.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && Q(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), u && m.cameraPreview && (m.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const we = Z();
    m.stageStatus = we.status, m.stageStatusDetail = we.detail, m.stageNotice = O(), we.status === Yn ? (d == null || d.removeAttribute("data-stage-ready"), d == null || d.setAttribute("data-stage-loading-kind", we.detail)) : (d == null || d.setAttribute("data-stage-ready", ""), d == null || d.removeAttribute("data-stage-loading-kind"));
  }
  function Se(W = i.interaction) {
    if (g !== "stickers" || i.mode !== "pano") return !1;
    const pe = String((W == null ? void 0 : W.kind) || "");
    return pe === "move" || pe === "scale" || pe === "scale_x" || pe === "scale_y" || pe === "rotate" ? !0 : pe === "move_multi" ? Array.isArray(W == null ? void 0 : W.stickerSnapshots) && W.stickerSnapshots.length > 0 : !1;
  }
  function _e() {
    return !!i.interaction || !!h.drag;
  }
  function I() {
    l.nodePreviewPending = !1, a.__panoLiveStateOverride = f, a.__panoLiveStateVersion = Number(a.__panoLiveStateVersion || 0) + 1, a.__panoLivePaintSurface = ne();
  }
  function re(W = {}) {
    var j, N, b, R, se, ye, he, ee;
    const pe = W.reason ?? lt.STATE, we = !!W.localOnly, Pe = W.externalSync === !0, ue = String(W.cause || ""), ve = String(((j = i.interaction) == null ? void 0 : j.kind) || "");
    (!we || ve === "view" || ve === "pan_frame" || Se() || !!i.viewTransition || ue === "mode" || ue === "frame_view" || ue === "cutout_frame") && (l.backgroundDirty = !0), we && le() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!we || ue === "selection" || ue === "mode" || ue === "cutout_frame") && (fe(), xe()), _e() ? l.nodePreviewPending = !0 : I(), Pe && ((b = (N = a.__panoDomPreview) == null ? void 0 : N.requestDraw) == null || b.call(N), (R = a.setDirtyCanvas) == null || R.call(a, !0, !1)), Pe && !we && ((ye = (se = a.graph) == null ? void 0 : se.setDirtyCanvas) == null || ye.call(se, !0, !0), (ee = (he = t == null ? void 0 : t.canvas) == null ? void 0 : he.setDirty) == null || ee.call(he, !0, !0)), c.requestDraw(pe);
  }
  function _() {
    const W = n.getBoundingClientRect(), pe = Math.max(2, Math.round(W.width)), we = Math.max(2, Math.round(W.height)), Pe = window.devicePixelRatio || 1, ue = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== pe || n.height !== we) && (n.width = pe, n.height = we);
    const ve = U1(W.width || pe, W.height || we, Pe, window.innerWidth || W.width, window.innerHeight || W.height);
    return o.resize(ve.width, ve.height), [n.width, n.height, r.width, r.height].join("x") === ue ? !1 : (l.backgroundDirty = !0, l.dirty = !0, u && w(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function w(W) {
    W(), c.wake();
  }
  function H() {
    return !!i.viewTransition || !!y.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || _e();
  }
  function G(W = performance.now(), pe = /* @__PURE__ */ new Set()) {
    var Ne;
    l.nodePreviewPending && !_e() && I(), pe.forEach((p) => l.reasons.add(p)), pe.size && (l.dirty = !0), [...pe].some((p) => p !== lt.OVERLAY) && (l.backgroundDirty = !0), D(), l.lastTickTs > 0 ? Math.max(1e-3, (W - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = W;
    const we = i.mode === "frame" && ((Ne = i.interaction) == null ? void 0 : Ne.kind) === "roll_frame" ? i.interaction : null;
    we != null && we.shot && (i.frameRollOverlayVisual = { shot: we.shot });
    const Pe = we ? 1 : 0;
    if (Math.abs(Pe - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = Pe, i.frameRollOverlayStartTs = W), Math.abs(Number(i.frameRollOverlayAlpha || 0) - Pe) > 1e-6) {
      const p = Ee(
        (W - Number(i.frameRollOverlayStartTs || W)) / sP,
        0,
        1
      );
      i.frameRollOverlayAlpha = jn(
        Number(i.frameRollOverlayFrom || 0),
        Pe,
        sc(p)
      ), p >= 1 && (i.frameRollOverlayAlpha = Pe, Pe === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const ue = T();
    if (Math.abs(ue - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = ue, i.cutoutPanoDimStartTs = W), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - ue) > 1e-6) {
      const p = Ee(
        (W - Number(i.cutoutPanoDimStartTs || W)) / np,
        0,
        1
      );
      i.cutoutPanoDimAlpha = jn(
        Number(i.cutoutPanoDimFrom || 0),
        ue,
        sc(p)
      ), p >= 1 && (i.cutoutPanoDimAlpha = ue), p >= 1 && ue === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const ve = u && P() ? 1 : 0;
    if (Math.abs(ve - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = ve, i.cutoutPanoFrameStartTs = W), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - ve) > 1e-6) {
      const p = Ee(
        (W - Number(i.cutoutPanoFrameStartTs || W)) / np,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = jn(
        Number(i.cutoutPanoFrameFrom || 0),
        ve,
        sc(p)
      ), p >= 1 && (i.cutoutPanoFrameAlpha = ve, ve === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const p = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), j = Ee((W - Number(i.outputPreviewAnimStartTs || 0)) / p, 0, 1), b = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? dP(j) : pP(j);
      i.outputPreviewAnim = jn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, b), l.dirty = !0, j >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: p, done: j } = oN(i.viewTransition, W);
      if (i.viewPosition = p.position, i.viewYaw = p.yaw_deg, i.viewPitch = p.pitch_deg, i.viewFov = p.hFOV_deg, i.viewDistance = p.distance, j) {
        const { end: N } = i.viewTransition;
        i.viewTransition = null, N && F(N), oe();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (i.viewInertia.vx = Number(y.state.inertia.vx || 0), i.viewInertia.vy = Number(y.state.inertia.vy || 0), i.viewInertia.active = !!y.state.inertia.active, y.stepInertia(W) && (i.viewInertia.vx = Number(y.state.inertia.vx || 0), i.viewInertia.vy = Number(y.state.inertia.vy || 0), i.viewInertia.active = !!y.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const p = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), ie(p);
    }
  }
  function v(W) {
    try {
      W();
    } catch (pe) {
      const we = String((pe == null ? void 0 : pe.stack) || (pe == null ? void 0 : pe.message) || pe || "unknown editor frame error");
      l.tickErrorSignature !== we && (l.tickErrorSignature = we, console.error("[PanoramaStickers] editor frame failed", pe)), m.stageStatus = Hn, m.stageStatusDetail = "frame", d == null || d.setAttribute("data-stage-ready", ""), d == null || d.removeAttribute("data-stage-loading-kind");
    }
  }
  function x(W = performance.now(), pe = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const we = bb();
    v(() => G(W, pe)), vb(we);
  }
  function V() {
    !l.running || !_() || v(() => {
      l.dirty = !1, ie(/* @__PURE__ */ new Set([lt.RESIZE]));
    });
  }
  const k = new ResizeObserver(V);
  let M = null;
  function A() {
    M == null || M.removeEventListener("change", B), M = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), M.addEventListener("change", B);
  }
  function B() {
    A(), V();
  }
  function te() {
    J = yb("editor", () => {
      var W;
      return {
        type: g,
        readOnly: s,
        mode: i.mode,
        interaction: ((W = i.interaction) == null ? void 0 : W.kind) ?? null,
        timelineDrag: !!h.drag,
        playing: !!Y.playing
      };
    });
  }
  function ge() {
    J(), l.running = !1, c.stop(), k.disconnect(), M.removeEventListener("change", B);
  }
  return {
    connect(W) {
      ({
        applyViewTransitionEnd: F,
        drawCutoutOutputPreview: K,
        drawCutoutPanoPassepartout: z,
        drawFrameRollOverlay: L,
        drawFrameViewBackground: C,
        drawGridPano: U,
        drawGridUnwrap: q,
        drawLassoOutlineOverlay: ce,
        drawObjects: $,
        endEditorViewFrame: me,
        getActiveCutoutShot: P,
        getCutoutPanoDimTarget: T,
        getSharedLivePaintSurface: ne,
        getStageImageStatus: Z,
        isPaintCompositeInteraction: le,
        measureFrameSafeRect: ae,
        playback: Y,
        rebuildPaintEngineIfNeeded: S,
        syncCutoutShot: D,
        syncFloatingViewButtonState: oe,
        syncFrameRollKnob: X,
        syncLookAtFrameButtonState: fe,
        syncViewToggleState: xe,
        updateSelectionMenu: Q,
        upstreamNotice: O
      } = W);
    },
    requestDraw: re,
    syncCanvasSize: _,
    startAnimation: w,
    editorAnimating: H,
    tick: x,
    stageResizeObserver: k,
    watchPixelRatio: A,
    sampleEditorDiagnostics: te,
    stopRenderLoop: ge
  };
}
function Fi(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function mN(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function gN({
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
  var z, L;
  const c = e.primaryTool === "paint" || e.primaryTool === "mask", u = {
    visible: c,
    activePane: c ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: n(e.customPaintColor, 1),
    colorPopOpen: c ? !!r : !1,
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
    historyEntries: Array.from({ length: 8 }, (C, U) => ({ index: U, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return u;
  const d = ((z = t.find((C) => i(e.paintColor, C.color))) == null ? void 0 : z.id) || "", f = !d, h = o(e.customPaintColor), g = Math.round(Math.max(0, Math.min(1, Number(((L = e.customPaintColor) == null ? void 0 : L.a) ?? 1))) * 100), m = s(e.primaryTool === "paint" ? e.paintTool : e.maskTool), y = e.brushSizes[m] ?? 10, F = l(), K = Array.from({ length: 8 }, (C, U) => e.customPaintHistory[U] || null);
  return {
    ...u,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: d,
    customColorActive: f,
    customColorCss: n(e.customPaintColor, 1),
    pickerHueColor: n({ ...a(h.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, h.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, h.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, h.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, h.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, h.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, h.h)) * 100}%`,
    alphaValue: g,
    alphaText: `${g}%`,
    historyEntries: K.map((C, U) => ({
      index: U,
      color: C ? { cssColor: n(C, 1) } : null
    })),
    sizeValue: y,
    sizeText: String(y),
    sizeFill: `${Math.max(0, Math.min(100, (y - 1) / 119 * 100))}%`,
    sizeDisabled: F,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function yN({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
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
const bN = {
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
function vN(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = bN[r.key] || [], a = t[t.length - 1];
    n && (a != null && a.grouped) && a.label === n ? a.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function dc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function _N({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
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
function SN({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function wN(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const Zi = "erp", xN = ["1:1", "4:3", "3:2", "16:9"];
function Vg(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...xN.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: Zi, label: Number(r) === 180 ? "180°" : "360°", active: e === Zi }] : []
  ];
}
function kN({
  coverage: e,
  readOnly: t,
  selectionPicker: r,
  enabled: n,
  selectedKind: i,
  selectedItems: o,
  params: a,
  notes: s,
  uiSettings: l,
  normalizeCoverageValue: c
}) {
  return {
    coverage: { value: c(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: r,
    copyStateButton: {
      disabled: !n || i === "stroke" || i === "camera" || i === "world" || o.length > 1,
      label: "Copy State"
    },
    params: a,
    rows: vN(a),
    notes: s,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function MN({
  type: e,
  selected: t,
  selectedItems: r,
  selectedKind: n,
  geom: i,
  allLocked: o,
  anyLocked: a,
  selectedLocked: s,
  activeAspect: l,
  cutoutAspectOpen: c,
  isExternalSticker: u,
  isStickerHidden: d,
  canRestoreSelectedToInitial: f,
  iconSet: h,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: g = !1,
  cameraDeletable: m = !1,
  erpChoice: y = !1,
  coverage: F = 360
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let K = [];
  if (r.length > 1)
    K = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: h.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: h.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? h.lock_open : h.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete, disabled: !!a }
    ];
  else if (n === "stroke")
    K = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: h.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: h.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? h.lock_open : h.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete, disabled: !!s }
    ];
  else if (n === "image") {
    if (K = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: h.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: h.send_back, disabled: !!s }
    ], u(t) || (K.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: h.duplicate }), K.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: h.replace_image })), u(t)) {
      const z = f(), L = d(t);
      K.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: z ? "Back to initial position" : "Already at initial position",
        icon: h.back_initial,
        disabled: !z
      }), K.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: L ? "Show" : "Hide",
        tip: L ? "Show input image" : "Hide input image",
        icon: L ? h.eye : h.eye_dashed
      });
    }
    K.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? h.lock_open : h.lock_closed }), u(t) || K.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete, disabled: !!s });
  } else
    K = [
      {
        key: "aspect",
        kind: "aspect",
        icon: h.aspect,
        open: !!c,
        choices: Vg(l, { erp: y, coverage: F })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: h.rotate_90, disabled: l === Zi }
    ], g ? m && K.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete }) : K.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? h.lock_open : h.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete, disabled: !!s }
    );
  return Rg(i.corners, K);
}
const sp = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function PN({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1, deletable: i = !1 }) {
  const o = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], a = n ? sp.filter((s) => s.cameraTip) : sp;
  return Rg([...e, ...o], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: a.map(({ key: s, label: l, tip: c, cameraTip: u }) => ({ key: s, label: l, tip: n ? u : c, pressed: s === r ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...i ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: ze.delete }] : []
  ]);
}
function NN(e, t, r, n, i) {
  const { minX: s, maxX: l, minY: c, maxY: u } = e || {};
  if (![s, l, c, u].every(Number.isFinite)) return null;
  const d = Math.min(Math.max((s + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), h = u + 18, g = c - 18 - r;
  let m;
  return h <= f ? m = Math.max(h, 14) : g >= 14 ? m = Math.min(g, f) : m = Math.min(Math.max(h, 14), f), { left: d, top: m };
}
function Rg(e, t) {
  const r = e.map((c) => ({ x: Number(c == null ? void 0 : c.x), y: Number(c == null ? void 0 : c.y) })).filter((c) => Number.isFinite(c.x) && Number.isFinite(c.y));
  if (!r.length) return { visible: !1, left: 0, top: 0, items: [] };
  const n = r.map((c) => c.x), i = r.map((c) => c.y), o = Math.min(...n), a = Math.max(...n), s = Math.min(...i), l = Math.max(...i);
  return {
    visible: !0,
    left: (o + a) * 0.5,
    top: l + 18,
    items: t,
    anchor: { minX: o, maxX: a, minY: s, maxY: l }
  };
}
const $g = "painting";
function CN(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const AN = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function IN(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: a = null, fpsLocked: s = !1, camera: l = !1, cameraHideable: c = !1, stickers: u = !0, scene: d = !1, sceneLocked: f = !1 }) {
  const h = (K, z, L, C, U, q, { keyable: ce = !0, hideable: $ = !0 } = {}) => {
    const me = (P) => (r == null ? void 0 : r.owner) === K && r.lane === P ? r.frames.map((T) => T + q) : [];
    return {
      id: K,
      label: L,
      icon: C,
      clip: U,
      selected: K === n,
      hideable: $,
      visible: z.visible,
      keyable: ce,
      open: ce && o.has(K),
      keys: Ev(z).map((P) => ({ frame: P.frame + q, full: P.full })),
      selectedFrames: me(null),
      lanes: (ce ? io(z) : []).map((P) => ({
        key: `${K}:${P}`,
        lane: P,
        label: AN[P],
        frames: z[P].keyframes.map((T) => T.frame + q),
        selectedFrames: me(P)
      }))
    };
  }, g = u ? e.stickers : [], m = g.filter((K) => K.placement === "sky").sort((K, z) => z.z_index - K.z_index), y = g.filter((K) => K.placement === "world"), F = ({ start: K, in: z, duration: L }) => ({ clip: { start: K, end: L === null ? null : K + L }, offset: K - z });
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
      ...l ? [h("camera", e.camera, "Camera", ze.camera, null, 0, { hideable: c })] : [],
      ...[...m, ...y].map((K) => {
        const { clip: z, offset: L } = F(K.clip);
        return h(K.id, K, Oc(K), ze.image, z, L);
      }),
      ...u && (CN(e.painting) || !e.painting_visible) ? [{
        id: $g,
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
      ...u && (d || Vs(e.scene)) ? [(() => {
        const { clip: K, offset: z } = F(e.scene.clip);
        return h("scene", e.scene, "Scene", ze.box, K, z, { keyable: !1 });
      })()] : []
    ]
  };
}
function EN(e, t, r, n) {
  const i = Dv(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, a = Math.max(...r) + n;
  return { label: o === a ? `Frame ${o}` : `${o} – ${a}`, ...i };
}
function ON(e) {
  const {
    cameraV2: t,
    editor: r,
    hideSidebar: n,
    paintColorPop: i,
    paintColorRow: o,
    paintColorSvCursor: a,
    paintHueHandle: s,
    previewMode: l,
    readOnly: c,
    runtime: u,
    sceneV2: d,
    shotEditor: f,
    state: h,
    studio: g,
    type: m,
    uiState: y
  } = e;
  let F, K, z, L, C, U, q, ce, $, me, P, T, ne, Z, le, ae, Y, S, D, oe, X, fe, xe, Q, O, J, ie, Se, _e, I, re, _, w = 0;
  function H() {
    y.toolButtons.forEach((W) => {
      const pe = W.attr === "data-tool-mode", we = W.attr === "data-paint-tool", Pe = W.attr === "data-mask-tool";
      W.active = pe ? W.value === r.primaryTool : we ? W.key === r.paintTool : Pe ? W.key === r.maskTool : !1, W.pressed = W.active ? "true" : W.pressed == null ? null : "false";
    });
  }
  function G() {
    if (g && Fi(y.toolButtons, "value", "add-camera", { disabled: ne() }), m !== "cutout") return;
    const W = z();
    Fi(y.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: W ? "Look At Frame" : "Add Frame",
      tip: W ? "Look at frame" : "Add frame",
      icon: W ? ze.camera : ze.plus_circle
    });
  }
  function v() {
    const W = _N({
      spaceView: fe(),
      spaceMode: Qs(r.spaceMode, r.viewTransition),
      readOnly: c,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    y.space && Object.assign(y.space, W.space);
    for (const [pe, we] of Object.entries(W.buttons)) Fi(y.floatingButtons, "action", pe, we);
  }
  function x() {
    var we;
    const W = SN({ hasShot: !!z(), erp: ae(), hidden: ne() && !K(), studio: g });
    r.mode === "frame" && W.disabled && (g ? Q(z()) : r.mode = "pano"), r.outputPreviewRect = null, y.viewButtons.forEach((Pe) => {
      const ue = Pe.key === r.mode;
      Pe.pressed = ue ? "true" : "false", Pe.visible = !(Pe.key === "frame" && !f), Pe.key === "frame" ? Object.assign(Pe, W) : Pe.disabled = !1;
    });
    const pe = f && r.mode === "frame" ? z() : null;
    y.frameRail.visible = !!pe, y.frameRail.disabled = c || (pe == null ? void 0 : pe.locked) === !0, y.frameRollKnob.visible = !!pe && !c && pe.locked !== !0, y.frameRollKnob.disabled = c || (pe == null ? void 0 : pe.locked) === !0, y.frameRollKnob.rollDeg = Number((pe == null ? void 0 : pe.roll_deg) ?? (pe == null ? void 0 : pe.rot_deg) ?? 0), y.frameRollKnob.displayValue = Ki(y.frameRollKnob.rollDeg), y.frameRollKnob.dragging = ((we = r.interaction) == null ? void 0 : we.kind) === "roll_frame", y.frameRollKnob.armed = !!pe && r.altModifier === !0, y.frameRail.rollKnob = y.frameRollKnob, y.frameRail.aspectLabel = pe ? Cr(pe) : "", y.frameRail.aspectChoices = Vg(pe ? String(Cr(pe)) : null, { erp: g, coverage: h.coverage }), pe || (y.frameRail.aspectOpen = !1), y.outputPreviewToggle.visible = m === "cutout" && r.mode !== "frame" && !!z(), f && y.cameraPreview && (y.cameraPreview.visible = r.mode !== "frame" && F(), y.cameraPreview.expanded = !!r.outputPreviewExpanded, y.cameraPreview.settled = y.cameraPreview.settled === !0 && u.pendingStableLayoutFrames <= 0 && u.hasPresentedFrame), v(), D() ? re(r.pointerPos) : ie(r.mode === "pano" ? "grab" : "default");
  }
  function V() {
    var pe;
    const W = r.mode === "frame" ? z() : null;
    y.frameRollKnob.visible = !!W && !c && W.locked !== !0, y.frameRollKnob.rollDeg = Number((W == null ? void 0 : W.roll_deg) ?? (W == null ? void 0 : W.rot_deg) ?? 0), y.frameRollKnob.displayValue = Ki(y.frameRollKnob.rollDeg), y.frameRollKnob.dragging = ((pe = r.interaction) == null ? void 0 : pe.kind) === "roll_frame", y.frameRollKnob.armed = !!W && r.altModifier === !0;
  }
  function k() {
    H();
    const W = gN({
      editor: r,
      swatches: _l,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: cr,
      colorsApproximatelyEqual: Zs,
      rgb01ToHsv: iu,
      hsv01ToRgb: ru,
      getBrushPresetIdForTool: L,
      isActiveLassoTool: le
    });
    if (Object.assign(y.paintDock, W), I(), !W.visible) {
      i && (i.hidden = !0);
      return;
    }
    w && (clearTimeout(w), w = 0), o && (!W.colorEnabled && i && !i.hidden && (w = window.setTimeout(() => {
      i.hidden = !0, y.paintDock.colorPopOpen = !1, w = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", W.pickerHueColor), i.style.setProperty("--picker-sat", W.pickerSat), i.style.setProperty("--picker-val", W.pickerVal), i.style.setProperty("--picker-hue", W.pickerHue)), a && (a.style.left = W.pickerSvLeft, a.style.top = W.pickerSvTop), s && (s.style.left = W.pickerHueLeft));
  }
  function M() {
    const W = O(f && r.mode === "frame" ? z() : ce());
    W && (r.panelLastValues = {
      yaw_deg: Number(W.yaw_deg || 0),
      pitch_deg: Number(W.pitch_deg || 0),
      hFOV_deg: Number(W.hFOV_deg || (m === "stickers" ? 30 : 90)),
      vFOV_deg: Number(W.vFOV_deg || (m === "stickers" ? 30 : 60)),
      rot_deg: Number(W.rot_deg || 0),
      roll_deg: Number(W.roll_deg || 0),
      aspect_id: Cr(W)
    }, A());
  }
  function A() {
    Se(), _e(), te();
  }
  function B() {
    const W = f && r.mode === "frame" ? z() : null;
    return [...$(), J(), W].some((pe) => oe(pe) ? Vs(pe) : X(pe) && ne() && Vs(h.camera));
  }
  function te() {
    if (n) return;
    h.ui_settings = h.ui_settings || {};
    const W = mN(h.ui_settings);
    if (l) {
      y.sidePanel = yN({
        coverage: h.coverage,
        uiSettings: W,
        normalizeCoverageValue: vn
      });
      return;
    }
    const pe = ce(), we = f && r.mode === "frame" ? z() : null, Pe = we || pe, ue = we ? [we] : $(), ve = we ? "shot" : me();
    if (ue.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), Pe && ve !== "stroke") {
      const be = O(Pe);
      r.panelLastValues = {
        yaw_deg: Number(be.yaw_deg || 0),
        pitch_deg: Number(be.pitch_deg || 0),
        hFOV_deg: Number(be.hFOV_deg || (ve === "image" ? 30 : 90)),
        vFOV_deg: Number(be.vFOV_deg || (ve === "image" ? 30 : 60)),
        rot_deg: Number(be.rot_deg || 0),
        roll_deg: Number(be.roll_deg || 0),
        aspect_id: Cr(be)
      }, oe(Pe) && (r.panelLastValues.opacity = hi(Pe, r.frame).opacity * 100);
    }
    const Ne = r.panelLastValues || (m === "stickers" || ve === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), p = ve === "stroke" ? null : Pe, j = J(), N = t && (ve === "shot" || ve === "frame") && Z(), b = j ? d1(j, r.frame) : N ? { ...p, ...l1(h.camera, r.frame), vFOV_deg: p.vFOV_deg } : oe(p) ? r.panelLastValues : p || Ne, R = j ? _(j) : !!p && !S(p);
    r.panelWasEnabled = R, G();
    let se = null;
    if (we) {
      const be = T({ item: we, kind: "shot", label: "Frame" });
      se = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: be.label,
        currentIcon: be.icon || null,
        items: [{
          id: String(we.id || ""),
          label: be.label,
          icon: be.icon || null,
          active: !0
        }]
      };
    } else if (m === "stickers" || m === "cutout") {
      const be = [{
        id: "",
        label: m === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (m === "stickers") {
        const Me = z();
        Me && be.push({ id: Me.id, label: "Camera", icon: P("frame"), item: Me, kind: "frame" }), q().forEach((Ae, Te) => {
          var Be, $e;
          if (!Ae || oe(Ae) && !Ae.visible) return;
          const Ie = d ? Oc(Ae) : Y(Ae) ? String(Ae.id || vd) : String((($e = (Be = h.assets) == null ? void 0 : Be[Ae.asset_id]) == null ? void 0 : $e.name) || Ae.asset_id || Ae.id), Le = `${Te + 1}. ${Ie}${Y(Ae) && xe(Ae) ? " (hidden)" : ""}`, je = T({ item: Ae, label: Le, kind: "image" });
          be.push({ id: Ae.id, label: je.label, icon: je.icon, item: Ae, kind: "image" });
        });
      } else
        C().forEach((Me) => {
          if (!(Me != null && Me.item)) return;
          const Ae = T(Me);
          be.push({ id: Me.item.id, label: Ae.label, icon: Ae.icon, item: Me.item, kind: Me.kind });
        });
      const E = (p == null ? void 0 : p.id) || "", de = j ? { label: Oc(j), icon: ze.globe } : be.find((Me) => Me.id === E) || be[0];
      se = {
        label: "Selection",
        open: !1,
        disabled: be.length <= 1,
        currentLabel: de.label,
        currentIcon: de.icon || null,
        items: be.map((Me) => ({
          id: Me.id,
          label: Me.label,
          icon: Me.icon || null,
          active: Me.id === E
        }))
      };
    }
    const ye = [], he = (be, E, de, Me, Ae) => {
      const Te = Ee(Number(b[be] || 0), de, Me);
      ye.push({
        key: be,
        label: E,
        min: de,
        max: Me,
        step: Ae,
        value: Te,
        displayValue: Ki(Te),
        fillPct: Ee((Te - de) / Math.max(1e-6, Me - de) * 100, 0, 100),
        enabled: R && !c
      });
    }, ee = [];
    if (j) {
      for (const [be, E] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const de = dc(b[be]);
        he(be, E, -de, de, 0.01);
      }
      he("yaw_deg", "Yaw", -180, 180, 0.1), he("pitch_deg", "Pitch", -90, 90, 0.1), he("roll_deg", "Roll", -180, 180, 0.1), he("scale", "Scale", kg, dc(b.scale), 0.01), he("opacity", "Opacity", 0, 100, 1);
    } else if (ue.length > 1)
      ee.push(`Selected objects: ${ue.length}`), ee.push("Multi-selection supports z-order and delete.");
    else {
      const be = ve === "shot" || ve === "frame";
      if (N)
        for (const [E, de] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Me = dc(b[E]);
          he(E, de, -Me, Me, 0.01);
        }
      he("yaw_deg", "Yaw", -180, 180, 0.1), he("pitch_deg", "Pitch", -90, 90, 0.1), he(ve === "image" || m === "stickers" && !be ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), he("hFOV_deg", "H FOV", 1, 179, 0.1), he("vFOV_deg", "V FOV", 1, 179, 0.1), be && ye.forEach((E) => {
        E.enabled = E.enabled && wN(E.key, { erp: ae() });
      }), d && !be && he("opacity", "Opacity", 0, 100, 1);
    }
    y.sidePanel = kN({
      coverage: h.coverage,
      readOnly: c,
      selectionPicker: se,
      enabled: R,
      selectedKind: j ? "world" : ve,
      selectedItems: ue,
      params: ye,
      notes: ee,
      uiSettings: W,
      normalizeCoverageValue: vn
    });
  }
  function ge() {
    const { canUndo: W, canRedo: pe } = U();
    Fi(y.toolButtons, "value", "undo", { disabled: !W }), Fi(y.toolButtons, "value", "redo", { disabled: !pe });
  }
  return {
    connect(W) {
      ({
        cameraPreviewShown: F,
        cameraShoots: K,
        getActiveCutoutShot: z,
        getBrushPresetIdForTool: L,
        getCutoutInspectorItems: C,
        getHistoryCapabilities: U,
        getList: q,
        getSelected: ce,
        getSelectedItems: $,
        getSelectedKind: me,
        getSelectionItemIcon: P,
        getSelectionItemLabelData: T,
        hasCamera: ne,
        hasSpaceContent: Z,
        isActiveLassoTool: le,
        isErpCamera: ae,
        isExternalSticker: Y,
        isItemLocked: S,
        isPaintCursorEnabled: D,
        isSceneSticker: oe,
        isShotItem: X,
        isSpaceView: fe,
        isStickerHidden: xe,
        leaveFrameView: Q,
        poseOf: O,
        selectedWorldSticker: J,
        setCanvasCursor: ie,
        syncCutoutShot: Se,
        syncTimeline: _e,
        syncVideoTransportVisibility: I,
        updateCursor: re,
        worldStickerEditable: _
      } = W);
    },
    syncLookAtFrameButtonState: G,
    syncFloatingViewButtonState: v,
    syncViewToggleState: x,
    syncFrameRollKnob: V,
    syncPaintUi: k,
    syncSidePanelControls: M,
    updateSidePanel: A,
    inspectorTimed: B,
    syncSidePanelModel: te,
    syncUndoRedoButtons: ge
  };
}
function FN(e) {
  const {
    capture: t,
    cutoutV2: r,
    editor: n,
    node: i,
    readOnly: o,
    sceneV2: a,
    state: s,
    stateV2: l,
    studio: c,
    timeline: u,
    timelinePlayhead: d,
    uiState: f,
    videoEl: h,
    videoTimelineFps: g
  } = e;
  let m, y, F, K, z, L, C, U, q, ce, $, me, P, T, ne, Z, le, ae;
  function Y() {
    if (!l || o) return;
    const G = D(), v = u.selection, x = v && oe(v.owner);
    if (v) {
      const V = x ? X(v) : [];
      v.frames = v.frames.filter((k) => V.some((M) => x[M].keyframes.some((A) => A.frame === k))), v.frames.length || (u.selection = null);
    }
    f.timeline = IN(s, {
      span: G,
      selection: u.selection,
      selectedId: n.worldSelectedId || n.selectedId,
      expanded: u.expanded ?? S(),
      openRows: u.openRows,
      audio: J() && f.videoTransport.hasAudio ? { muted: h.muted } : null,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: g(i) !== null || Z1(i, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: F(),
      cameraHideable: c,
      stickers: !r,
      // Another Studio's Scene on `scene` is upstream: its elements stay off this Timeline (#90).
      scene: a && !!Qu(i).scene && !le(),
      sceneLocked: !!t
    }), f.easing = u.selection ? EN(x, X(u.selection), u.selection.frames, fe(u.selection.owner)) : null;
  }
  function S() {
    return jv(s, { cameraOnly: r, camera: c });
  }
  function D(G = null) {
    if (t != null && t.frames) return t.frames;
    const v = s.timeline.fps, x = s.stickers.find(z), V = x ? y() : null, k = Math.max(
      f.videoTransport.ready && !Z() ? Math.round(Number(f.videoTransport.duration || 0) * v) : 0,
      V ? Lm(x.clip, v, V.meta) : 0,
      ae()
    );
    return qh(s, { minimum: Math.round(v * 5), frames: k, openClip: G, camera: r && !t || c });
  }
  function oe(G) {
    return G === "camera" ? F() ? s.camera : null : G === "scene" ? a ? s.scene : null : s.stickers.find((v) => v.id === G) || null;
  }
  function X(G) {
    return G.lane ? [G.lane] : io(oe(G.owner));
  }
  function fe(G) {
    if (G === "camera") return 0;
    const { clip: v } = oe(G);
    return v.start - v.in;
  }
  function xe(G) {
    return `${no(G, n.frame)}:${G.start - G.in}`;
  }
  function Q(G) {
    const v = oe(G);
    return !!v && v.locked !== !0;
  }
  function O(G) {
    const v = Math.max(0, Math.round(G));
    if (v === n.frame) return;
    me(), n.frame = v, d.frame.value = v, me();
    const x = [n.selectedId, n.worldSelectedId];
    ce(), L(), x[0] !== n.selectedId || x[1] !== n.worldSelectedId ? ne() : K() && P(), T(), $({ reason: lt.PLAYHEAD });
  }
  function J() {
    return h instanceof HTMLVideoElement && !!h.getAttribute("src");
  }
  function ie(G) {
    q(), C.seek(G);
  }
  function Se() {
    l && C.stop();
  }
  function _e() {
    q(), C.toggle();
  }
  function I() {
    me(), L(), ne(), T(), $();
  }
  function re() {
    U(), m(), I();
  }
  function _() {
    const { selection: G } = u;
    Q(G.owner) && (Se(), Fv(oe(G.owner), X(G), G.frames, n.frame - fe(G.owner)), u.selection = null, re());
  }
  function w(G) {
    const v = ro(G);
    if (v === null || v === s.timeline.fps) return;
    Se();
    const x = Math.round(n.frame * v / s.timeline.fps);
    n1(s, v), u.selection = null, C.seek(x), re();
  }
  function H() {
    const G = g(i);
    G !== null && G !== s.timeline.fps && w(G);
  }
  return {
    connect(G) {
      ({
        commitAndRefreshNode: m,
        getPortMedia: y,
        hasCamera: F,
        inspectorTimed: K,
        isExternalSticker: z,
        markObjectVisualsDirty: L,
        playback: C,
        pushHistory: U,
        refreshModalVideoSource: q,
        releaseHiddenSelection: ce,
        requestDraw: $,
        syncCutoutShot: me,
        syncSidePanelModel: P,
        updateSelectionMenu: T,
        updateSidePanel: ne,
        upstreamBackground: Z,
        upstreamLinked: le,
        upstreamSpanFrames: ae
      } = G);
    },
    syncTimeline: Y,
    timelineTimed: S,
    timelineSpanFrames: D,
    timelineOwner: oe,
    selectedLanes: X,
    timelineOffset: fe,
    clipView: xe,
    timelineEditable: Q,
    setTimelineFrame: O,
    jumpTimelineTo: ie,
    stopTimelinePlayback: Se,
    togglePlayback: _e,
    refreshTimelineEdit: I,
    commitTimelineEdit: re,
    deleteSelectedKeyframes: _,
    changeTimelineFps: w,
    applyVideoTimelineFps: H
  };
}
function TN(e) {
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
  let c, u, d, f, h, g, m, y, F, K, z, L, C, U, q, ce, $, me, P, T, ne, Z, le, ae, Y, S, D;
  function oe(X) {
    if (!(n || !o)) {
      if (X.type === "seek") {
        if (X.phase === "move") {
          s.scrubFrame = X.frame, t.request("seek");
          return;
        }
        t.cancel(), X.phase === "start" && F(), y.seek(X.frame);
        return;
      }
      if (X.type === "play") {
        ae();
        return;
      }
      if (X.type === "mute") {
        Y(), me();
        return;
      }
      if (X.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? le()), s.selection = null, me();
        return;
      }
      if (X.type === "toggle-row") {
        s.openRows.has(X.id) ? s.openRows.delete(X.id) : s.openRows.add(X.id), me();
        return;
      }
      if (X.type === "toggle-visible") {
        if (X.id === $g) i.painting_visible = !i.painting_visible;
        else {
          const fe = ne(X.id);
          if (!fe || X.id === "camera" && !a) return;
          fe.visible = !fe.visible;
        }
        z(), f();
        return;
      }
      if (X.type === "select-row") {
        const fe = i.stickers.find((xe) => xe.id === X.id);
        if (fe && !fe.visible || X.id === "camera" && !c()) return;
        fe && !no(fe.clip, r.frame) && m(fe.clip.start), (fe == null ? void 0 : fe.placement) === "world" ? C(fe.id) : X.id === "camera" ? q(h()) : q(g().find((xe) => xe.id === X.id) || null), $(), s.selection = null, D(), S(), L();
        return;
      }
      if (X.type === "select-keys") {
        const fe = T(X.owner), xe = X.frames.map((J) => J - fe), Q = s.selection, O = (Q == null ? void 0 : Q.owner) === X.owner && Q.lane === X.lane;
        if (X.additive && O) {
          const J = new Set(Q.frames);
          for (const ie of xe)
            J.has(ie) ? J.delete(ie) : J.add(ie);
          Q.frames = [...J].sort((ie, Se) => ie - Se);
        } else
          s.selection = xe.length ? { owner: X.owner, lane: X.lane, frames: xe } : null;
        me();
        return;
      }
      if (X.type === "move-keys") {
        const fe = s.selection;
        if (!fe || !P(fe.owner)) return;
        const xe = ne(fe.owner), Q = U(fe);
        if (X.phase === "start") {
          ce(), s.drag = { keyframes: Q.map((ie) => structuredClone(xe[ie].keyframes)), frames: fe.frames };
          return;
        }
        const { drag: O } = s;
        if (!(O != null && O.keyframes)) return;
        Q.forEach((ie, Se) => {
          xe[ie].keyframes = structuredClone(O.keyframes[Se]);
        });
        const J = Tv(xe, Q, O.frames, X.delta, -T(fe.owner));
        if (fe.frames = O.frames.map((ie) => ie + J), X.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, J ? f() : K();
        return;
      }
      if (X.type === "clip") {
        const fe = X.id === "scene" ? ne("scene") : i.stickers.find((J) => J.id === X.id);
        if (!fe || fe.locked) return;
        if (X.phase === "start") {
          ce(), s.drag = { clip: { ...fe.clip }, span: Z(fe.clip) };
          return;
        }
        const { drag: xe } = s;
        if (!(xe != null && xe.clip)) return;
        const Q = xe.clip, O = d(fe.clip);
        if (fe.clip = { ...Q }, X.delta && X.mode === "move" ? Vv(fe.clip, X.delta) : X.delta && X.mode === "start" ? Rv(fe.clip, Q.start + X.delta) : X.delta && $v(fe.clip, (Q.duration === null ? xe.span : Q.start + Q.duration) + X.delta, xe.span), X.phase !== "end") {
          t.request("timeline"), d(fe.clip) !== O && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, z(), JSON.stringify(fe.clip) !== JSON.stringify(Q) ? f() : K();
        return;
      }
      if (X.type === "key-row") {
        if (X.owner === "scene" || !P(X.owner)) return;
        ce(), Iv(ne(X.owner), r.frame - T(X.owner)), f();
        return;
      }
      if (X.type === "fps") {
        const fe = Gv(X.fps);
        if (fe === null || fe === i.timeline.fps || l.timeline.fpsLocked) {
          me();
          return;
        }
        u(fe);
        return;
      }
      if (X.type === "length") {
        const fe = Wv(X.length);
        if (fe === void 0 || fe === i.timeline.length) {
          me();
          return;
        }
        ce(), i.timeline.length = fe, f();
        return;
      }
      if (X.type === "easing") {
        const fe = s.selection;
        if (!fe || !P(fe.owner)) return;
        ce(), Lv(ne(fe.owner), U(fe), fe.frames, X.easing), X.commit ? f() : K();
      }
    }
  }
  return {
    connect(X) {
      ({
        cameraShoots: c,
        changeTimelineFps: u,
        clipView: d,
        commitTimelineEdit: f,
        getActiveCutoutShot: h,
        getList: g,
        jumpTimelineTo: m,
        playback: y,
        refreshModalVideoSource: F,
        refreshTimelineEdit: K,
        releaseHiddenSelection: z,
        requestDraw: L,
        selectWorldSticker: C,
        selectedLanes: U,
        setSelectedItem: q,
        stopTimelinePlayback: ce,
        syncFloatingViewButtonState: $,
        syncTimeline: me,
        timelineEditable: P,
        timelineOffset: T,
        timelineOwner: ne,
        timelineSpanFrames: Z,
        timelineTimed: le,
        togglePlayback: ae,
        toggleVideoMuted: Y,
        updateSelectionMenu: S,
        updateSidePanel: D
      } = X);
    },
    onTimelineAction: oe
  };
}
function DN(e) {
  const {
    app: t,
    bgWidget: r,
    cameraV2: n,
    coverageWidget: i,
    node: o,
    presetWidget: a,
    readOnly: s,
    state: l,
    stateWidget: c
  } = e;
  let u, d, f, h;
  function g() {
    s || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", a && (l.output_preset = d(Number(l.output_preset || 2048))), i && (l.coverage = vn(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), m(), o.setDirtyCanvas(!0, !0));
  }
  function m() {
    var C;
    if (s) return;
    f(), rm(l), l.coverage = vn(l.coverage), nm(o, l.active);
    const L = im(o, l);
    c && !om(o, L, String(c.value ?? ""), { rebased: n }) && (c.value = L, (C = c.callback) == null || C.call(c, L));
  }
  function y() {
    l.ui_settings = kP(l.ui_settings), s || m();
  }
  function F() {
    var L;
    s || (m(), (L = o.setDirtyCanvas) == null || L.call(o, !0, !0));
  }
  function K() {
    s || u() && h().catch((L) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", L);
    });
  }
  function z(L = {}) {
    var q, ce, $, me, P, T, ne, Z, le;
    const C = L.syncPreview !== !1, U = L.syncGraph !== !1;
    C && ((ce = (q = o.__panoPreviewNodeRuntime) == null ? void 0 : q.requestDraw) == null || ce.call(q), (me = ($ = o.__panoDomPreview) == null ? void 0 : $.requestDraw) == null || me.call($), (P = o.setDirtyCanvas) == null || P.call(o, !0, !1)), U && ((ne = (T = o.graph) == null ? void 0 : T.setDirtyCanvas) == null || ne.call(T, !0, !0), (le = (Z = t == null ? void 0 : t.canvas) == null ? void 0 : Z.setDirty) == null || le.call(Z, !0, !0));
  }
  return {
    connect(L) {
      ({
        needsPaintingLayerSync: u,
        resolveEditorOutputPresetWidth: d,
        syncCutoutShot: f,
        syncPaintingLayerAsync: h
      } = L);
    },
    apply: g,
    commitState: m,
    persistUiSettings: y,
    commitAndRefreshNode: F,
    triggerBackgroundPersistenceOnClose: K,
    syncCoverageChangeToNodePreviews: z
  };
}
function LN(e) {
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
  let c, u, d, f, h, g, m, y, F, K, z, L, C, U, q, ce, $, me, P, T, ne, Z, le, ae, Y, S, D, oe, X, fe, xe, Q, O, J, ie;
  function Se(G, v, x = "Clear") {
    return new Promise((V) => {
      l.confirmDialog = {
        visible: !0,
        title: String(G || ""),
        text: String(v || ""),
        confirmLabel: String(x || "Confirm"),
        resolve: V
      };
    });
  }
  async function _e() {
    var x, V;
    if (n || !await Se(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    o.painting = to(null), ae();
    const v = d();
    if (s === "stickers")
      o.stickers = i ? o.stickers.filter((k) => k.placement === "world" || v.includes(k)) : v, i || (o.assets = {}), r.selectedId = ((x = v[0]) == null ? void 0 : x.id) || null, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = ((V = v[0]) == null ? void 0 : V.id) || null, S();
    else {
      const k = Zv(o.shots, o.active.selected_shot_id);
      o.stickers = v, o.assets = {}, o.shots = k.shots, r.selectedId = k.selectedShotId, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = null, o.active.selected_shot_id = k.selectedShotId, !k.selectedShotId && r.mode === "frame" && (r.mode = "pano"), r.cutoutAspectOpen = !1, S();
    }
    D(), f(), J(), O(), oe();
  }
  async function I(G) {
    var M, A, B, te;
    if (n) return;
    const v = G === "mask" ? "mask" : "paint", x = v === "mask" ? "Mask" : "Paint", V = K(v);
    if (!(!V.length && !(((M = r.interaction) == null ? void 0 : M.kind) === "draw" && ((A = r.interaction) == null ? void 0 : A.layerKind) === v) || !await Se(
      `Clear ${x}`,
      `This will remove all ${v} strokes in the current node.`,
      `Clear ${x}`
    ))) {
      if (((B = r.interaction) == null ? void 0 : B.kind) === "draw" && ((te = r.interaction) == null ? void 0 : te.layerKind) === v) {
        const ge = g(r.interaction);
        ge && r.paintEngine.cancelActiveStroke(ge), r.interaction = null;
      }
      V.length = 0, o.painting.raster_objects = z().filter((ge) => String((ge == null ? void 0 : ge.layerKind) || "paint") !== v), v === "paint" && (F().length = 0), ae(), D(), f(), J(), O(), Q(), oe();
    }
  }
  function re() {
    if (n) return;
    const G = L();
    if (!G || !P(G) || U(G) || i && ne(G)) return;
    let v;
    i ? v = g1(G, ii("st"), y()) : (v = JSON.parse(JSON.stringify(G)), v.id = ii("st"), v.yaw_deg = $t((v.yaw_deg || 0) + 8), v.z_index = y()), o.stickers.push(v), o.active.selected_sticker_id = v.id, r.selectedId = v.id, r.selectedIds = [v.id], Z(), D(), f(), O(), J(), oe();
  }
  function _() {
    const G = X();
    return G ? (ie(G) && (fe(), h1(o, G.id), u(), Z(), D(), f(), J(), O(), xe(), oe()), !0) : !1;
  }
  function w() {
    var x, V, k, M, A;
    if (n || t) return;
    const G = C(), v = L();
    if (!(!v && G.length === 0) && !G.some((B) => q(B))) {
      if (fe(), G.length > 1) {
        const B = new Set(G.filter((W) => T(W)).map((W) => String(W.actionGroupId || W.id || ""))), te = new Set(G.filter((W) => ce(W)).map((W) => Y(W.rasterObjectId || W.id || ""))), ge = new Set(G.filter(P).map((W) => String(W.id || "")));
        B.size > 0 && (o.painting.paint.strokes = (Array.isArray((V = (x = o.painting) == null ? void 0 : x.paint) == null ? void 0 : V.strokes) ? o.painting.paint.strokes : []).filter((W) => !B.has(String((W == null ? void 0 : W.actionGroupId) || ""))), o.painting.groups = F().filter((W) => !B.has(String((W == null ? void 0 : W.actionGroupId) || (W == null ? void 0 : W.id) || ""))), ae()), te.size > 0 && (o.painting.raster_objects = z().filter((W) => !te.has(String((W == null ? void 0 : W.id) || ""))), le()), ge.size > 0 && (o.stickers = (Array.isArray(o.stickers) ? o.stickers : []).filter((W) => ge.has(String((W == null ? void 0 : W.id) || "")) ? U(W) ? (me(W) || (W.visible = !1), !0) : !1 : !0), S(), Z()), r.selectedId = null, r.selectedIds = [], D(), f(), J(), O(), oe();
        return;
      }
      if (T(v)) {
        const B = String(v.actionGroupId || v.id || "").trim();
        o.painting.paint.strokes = (Array.isArray((M = (k = o.painting) == null ? void 0 : k.paint) == null ? void 0 : M.strokes) ? o.painting.paint.strokes : []).filter((te) => String((te == null ? void 0 : te.actionGroupId) || "").trim() !== B), o.painting.groups = F().filter((te) => String((te == null ? void 0 : te.actionGroupId) || (te == null ? void 0 : te.id) || "").trim() !== B), ae(), r.selectedId = null, r.selectedIds = [], D(), f(), J(), O(), oe();
        return;
      }
      if (ce(v)) {
        const B = Y(v.rasterObjectId || v.id || "");
        o.painting.raster_objects = z().filter((te) => String((te == null ? void 0 : te.id) || "").trim() !== B), le(), r.selectedId = null, r.selectedIds = [], D(), f(), J(), O(), oe();
        return;
      }
      if (a && $(v)) {
        h();
        return;
      }
      if (s === "stickers" || P(v)) {
        if (U(v)) {
          if (me(v)) return;
          v.visible = !1, Z(), D(), f(), J(), O(), oe();
          return;
        }
        o.stickers = o.stickers.filter((B) => B.id !== v.id), S(), Z(), r.selectedId = ((A = m()[0]) == null ? void 0 : A.id) || null, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = r.selectedId, D(), f(), J(), O(), oe();
        return;
      }
      c();
    }
  }
  function H() {
    r.primaryTool !== "cursor" && (r.primaryTool = "cursor", Q(), J());
  }
  return {
    connect(G) {
      ({
        clearCutoutFrame: c,
        clearWorldSelection: u,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: f,
        deleteStudioCamera: h,
        getActivePaintTargetDescriptor: g,
        getList: m,
        getNextStickerZIndex: y,
        getPaintingGroupList: F,
        getPaintingLayerList: K,
        getRasterObjectList: z,
        getSelected: L,
        getSelectedItems: C,
        isExternalSticker: U,
        isItemLocked: q,
        isRasterObjectItem: ce,
        isShotItem: $,
        isStickerHidden: me,
        isStickerItem: P,
        isStrokeGroupItem: T,
        isUploadingSticker: ne,
        markObjectVisualsDirty: Z,
        markPaintCompositeVisualsDirty: le,
        markPaintStrokeVisualsDirty: ae,
        parseRasterObjectSelectionId: Y,
        pruneUnusedAssets: S,
        pushHistory: D,
        requestDraw: oe,
        selectedWorldSticker: X,
        stopTimelinePlayback: fe,
        syncFloatingViewButtonState: xe,
        syncPaintUi: Q,
        updateSelectionMenu: O,
        updateSidePanel: J,
        worldStickerEditable: ie
      } = G);
    },
    clearAll: _e,
    clearPaintingLayer: I,
    duplicateSelected: re,
    deleteSelectedWorldSticker: _,
    deleteSelected: w,
    forceCursorTool: H
  };
}
function VN(e) {
  const {
    api: t,
    canvas: r,
    cutoutV2: n,
    dragCue: i,
    editor: o,
    editorView: a,
    imageCache: s,
    node: l,
    readOnly: c,
    sceneV2: u,
    stageWrap: d,
    state: f,
    type: h,
    vueModal: g
  } = e;
  let m, y, F, K, z, L, C, U, q, ce, $, me, P, T, ne, Z, le, ae, Y, S, D;
  function oe(M) {
    return hd(M == null ? void 0 : M.dataTransfer);
  }
  function X(M) {
    const A = !!M;
    i.active !== A && (i.active = A, d.classList.toggle("drop-active", A));
  }
  function fe() {
    const M = new Set(
      (f.stickers || []).map((A) => String((A == null ? void 0 : A.asset_id) || "")).filter((A) => !!A)
    );
    Object.keys(f.assets || {}).forEach((A) => {
      M.has(A) || (delete f.assets[A], s.delete(A));
    });
  }
  async function xe(M) {
    if (c || n || h !== "stickers" && h !== "cutout" || !qn(M)) return;
    if (u) {
      Y(), await Se(M);
      return;
    }
    const A = ii("asset"), B = Eo(l, `add:${A}`, async () => {
      try {
        const { image: te } = await Oo(M);
        s.set(A, te);
        const ge = ii("st");
        f.stickers.push({
          id: ge,
          asset_id: A,
          yaw_deg: o.viewYaw,
          pitch_deg: o.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: F(30, Number(te.naturalWidth || te.width || 1), Number(te.naturalHeight || te.height || 1)),
          rot_deg: 0,
          z_index: C()
        }), Z(f.stickers[f.stickers.length - 1]), L(), D(), S(), T();
        const W = await ri(M, {
          fetchApi: (Pe, ue) => t.fetchApi(Pe, ue)
        });
        if (!(Array.isArray(f.stickers) ? f.stickers : []).filter((Pe) => String((Pe == null ? void 0 : Pe.asset_id) || "") === A).length) return;
        f.assets[A] = W, fe(), P(), y(), D(), S(), T();
      } catch (te) {
        delete f.assets[A], s.delete(A);
        const ge = Array.isArray(f.stickers) ? f.stickers : [], W = ge.filter((pe) => String((pe == null ? void 0 : pe.asset_id) || "") === A);
        throw W.length && (f.stickers = ge.filter((pe) => String((pe == null ? void 0 : pe.asset_id) || "") !== A), W.some((pe) => String((pe == null ? void 0 : pe.id) || "") === String(o.selectedId || "")) && Z(null), D(), S(), T(), y()), te;
      }
    });
    try {
      await B;
    } catch {
    }
  }
  function Q() {
    var M;
    c || h !== "stickers" && h !== "cutout" || (M = g == null ? void 0 : g.openImagePicker) == null || M.call(g, "add");
  }
  function O() {
    var M;
    c || !u || (M = g == null ? void 0 : g.openImagePicker) == null || M.call(g, "add-world");
  }
  async function J(M) {
    c || !u || !qn(M) || (Y(), await Se(M, "world"));
  }
  function ie() {
    const M = { x: r.width / 2, y: r.height / 2 }, A = ce() ? a.pick(z(), M.x, M.y, r.width, r.height) : null;
    return L1(le(), A, K());
  }
  async function Se(M, A = "sky") {
    const B = ii("st"), te = Eo(l, `add:${B}`, async () => {
      const { image: ge } = await Oo(M), W = {
        yaw_deg: o.viewYaw,
        pitch_deg: o.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: F(30, Number(ge.naturalWidth || ge.width || 1), Number(ge.naturalHeight || ge.height || 1)),
        rot_deg: 0
      }, pe = { kind: "file", filename: "" }, we = A === "world" ? m1(B, pe, ie()) : Ku(B, pe, W, C());
      s.set(ae(we), ge), f.stickers.push(we), A === "world" ? ne(B) : Z(we), L(), D(), S(), T();
      try {
        const Pe = await ri(M, {
          fetchApi: (ve, Ne) => t.fetchApi(ve, Ne)
        }), ue = f.stickers.find((ve) => ve.id === B);
        if (!ue) return;
        ue.source = cs(Pe), s.set(ae(ue), ge), P(), y();
      } catch (Pe) {
        throw f.stickers = f.stickers.filter((ue) => ue.id !== B), o.selectedId === B && Z(null), o.worldSelectedId === B && m(), P(), y(), Pe;
      } finally {
        D(), S(), T();
      }
    });
    try {
      await te;
    } catch {
    }
  }
  async function _e(M, A) {
    const B = Eo(l, `replace:${A}:${ii("asset")}`, async () => {
      const { image: te } = await Oo(M), ge = await ri(M, {
        fetchApi: (pe, we) => t.fetchApi(pe, we)
      }), W = f.stickers.find((pe) => pe.id === A);
      if (W) {
        W.source = cs(ge), W.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const pe of [W.size.value, ...W.size.keyframes.map((we) => we.value)])
          pe.vFOV_deg = F(pe.hFOV_deg, Number(te.naturalWidth || te.width || 1), Number(te.naturalHeight || te.height || 1));
        s.set(ae(W), te), me(), P(), y(), D(), S(), T();
      }
    });
    try {
      await B;
    } catch {
    }
  }
  async function I(M) {
    if (c || h !== "stickers" && h !== "cutout") return;
    const A = U();
    if (!A || !$(A) || q(A) || !qn(M)) return;
    if (u) {
      await _e(M, A.id);
      return;
    }
    const B = String(A.id || ""), te = ii("asset"), ge = Eo(l, `replace:${B}:${te}`, async () => {
      var ve;
      const W = (Array.isArray(f.stickers) ? f.stickers : []).find((Ne) => String((Ne == null ? void 0 : Ne.id) || "") === B) || null;
      if (!W || !$(W) || q(W)) return;
      const pe = String(W.asset_id || ""), we = pe ? ln(((ve = f.assets) == null ? void 0 : ve[pe]) || null) : null, Pe = Number(W.vFOV_deg || 0), ue = W.crop && typeof W.crop == "object" ? { ...W.crop } : null;
      try {
        const { image: Ne } = await Oo(M);
        s.set(te, Ne), W.asset_id = te, W.vFOV_deg = F(
          Number(W.hFOV_deg || 30),
          Number(Ne.naturalWidth || Ne.width || 1),
          Number(Ne.naturalHeight || Ne.height || 1)
        ), W.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, me(), D(), S(), T();
        const p = await ri(M, {
          fetchApi: (N, b) => t.fetchApi(N, b)
        }), j = (Array.isArray(f.stickers) ? f.stickers : []).find((N) => String((N == null ? void 0 : N.id) || "") === B) || null;
        if (!j || String(j.asset_id || "") !== te) return;
        f.assets[te] = p, fe(), P(), y(), D(), S(), T();
      } catch (Ne) {
        delete f.assets[te], s.delete(te);
        const p = (Array.isArray(f.stickers) ? f.stickers : []).find((j) => String((j == null ? void 0 : j.id) || "") === B) || null;
        throw p && String(p.asset_id || "") === te && (pe && we && (f.assets[pe] = we), p.asset_id = pe, p.vFOV_deg = Pe, p.crop = ue ? { ...ue } : null), me(), y(), D(), S(), T(), Ne;
      }
    });
    try {
      await ge;
    } catch {
    }
  }
  function re() {
    var A;
    if (c) return;
    const M = U();
    !M || !$(M) || q(M) || (A = g == null ? void 0 : g.openImagePicker) == null || A.call(g, "replace");
  }
  async function _() {
    if (c || h !== "stickers") return;
    if (u) {
      await w();
      return;
    }
    const M = f.assets && typeof f.assets == "object" ? f.assets : {}, A = Object.entries(M).filter(([, te]) => {
      const ge = String((te == null ? void 0 : te.type) || "").toLowerCase(), W = String((te == null ? void 0 : te.value) || "");
      return ge === "dataurl" && W.startsWith("data:image");
    });
    if (!A.length) return;
    let B = !1;
    for (const [te, ge] of A)
      try {
        const W = String((ge == null ? void 0 : ge.value) || "");
        if (!W) continue;
        const pe = await fetch(W).then((Ne) => Ne.blob()), we = String(pe.type || "image/png").split("/")[1] || "png", Pe = String((ge == null ? void 0 : ge.name) || `${te}.${we}`), ue = new File([pe], Pe, { type: pe.type || "image/png" }), ve = await ri(ue, {
          fetchApi: (Ne, p) => t.fetchApi(Ne, p)
        });
        f.assets[te] = {
          ...ve,
          w: Number((ge == null ? void 0 : ge.w) || 0),
          h: Number((ge == null ? void 0 : ge.h) || 0)
        }, B = !0;
      } catch {
      }
    B && (y(), T());
  }
  async function w() {
    let M = !1;
    for (const A of f.stickers) {
      const B = A.source.data_url;
      if (B)
        try {
          const te = await fetch(B).then((we) => we.blob()), ge = String(te.type || "image/png").split("/")[1] || "png", W = new File([te], `${A.id}.${ge}`, { type: te.type || "image/png" }), pe = await ri(W, {
            fetchApi: (we, Pe) => t.fetchApi(we, Pe)
          });
          A.source = cs(pe), M = !0;
        } catch {
        }
    }
    M && (y(), T());
  }
  function H(M) {
    h !== "stickers" && h !== "cutout" || c || (M.preventDefault(), X(!0));
  }
  function G(M) {
    var te;
    if (h !== "stickers" && h !== "cutout" || c) return;
    M.preventDefault(), M.stopPropagation(), i.depth = 0, X(!1);
    const B = Array.from(((te = M.dataTransfer) == null ? void 0 : te.files) || []).find((ge) => qn(ge));
    B && xe(B);
  }
  function v(M) {
    h !== "stickers" && h !== "cutout" || c || oe(M) && (i.depth += 1, X(!0), M.preventDefault());
  }
  function x(M) {
    h !== "stickers" && h !== "cutout" || c || (!i.active && oe(M) && X(!0), i.active && M.preventDefault());
  }
  function V(M) {
    if (h !== "stickers" && h !== "cutout" || c || !i.active) return;
    i.depth = Math.max(0, i.depth - 1);
    const A = Number(M.clientX) <= 0 && Number(M.clientY) <= 0;
    (i.depth === 0 || A) && X(!1);
  }
  function k(M) {
    h !== "stickers" && h !== "cutout" || c || (i.depth = 0, X(!1), oe(M) && M.preventDefault());
  }
  return {
    connect(M) {
      ({
        clearWorldSelection: m,
        commitAndRefreshNode: y,
        computeStickerVFov: F,
        contentSphere: K,
        currentSpaceCamera: z,
        forceCursorTool: L,
        getNextStickerZIndex: C,
        getSelected: U,
        isExternalSticker: q,
        isSpaceView: ce,
        isStickerItem: $,
        markObjectVisualsDirty: me,
        pushHistory: P,
        requestDraw: T,
        selectWorldSticker: ne,
        setSelectedItem: Z,
        spaceViewState: le,
        stickerImageKey: ae,
        stopTimelinePlayback: Y,
        updateSelectionMenu: S,
        updateSidePanel: D
      } = M);
    },
    addImageStickerFromFile: xe,
    addImageSticker: Q,
    addWorldImageSticker: O,
    addWorldStickerFromFile: J,
    replaceSelectedImageFromFile: I,
    replaceSelectedImage: re,
    migrateLegacyEmbeddedAssets: _,
    pruneUnusedAssets: fe,
    setDropCue: X,
    onCanvasDragOver: H,
    onCanvasDrop: G,
    onWindowDragEnter: v,
    onWindowDragOver: x,
    onWindowDragLeave: V,
    onWindowDrop: k
  };
}
function RN(e) {
  const {
    cameraV2: t,
    canvas: r,
    cutoutV2: n,
    editor: i,
    frameRollKnobEl: o,
    initialShotBase: a,
    readOnly: s,
    runtime: l,
    shotEditor: c,
    stageWrap: u,
    state: d,
    studio: f,
    tooltip: h,
    type: g,
    uiState: m
  } = e;
  let y, F, K, z, L, C, U, q, ce, $, me, P, T, ne, Z, le, ae, Y, S, D, oe, X, fe, xe, Q, O, J, ie, Se, _e, I, re, _, w = a;
  function H(b, R) {
    var he;
    const se = (he = q().space) == null ? void 0 : he.gizmo;
    if (ne() && se && _("hover", R) !== null && _("down", R))
      return i.interaction = { kind: "world_gizmo", camera: !0, mode: se.mode, start: se.transform, base: U(), changed: !1 }, r.setPointerCapture(b.pointerId), _e(R), !0;
    const ye = ym(U(), F(fe()));
    return W1(C(), ye, R, r.width, r.height) ? (ne() || (X(pe()), re(), I(), D()), i.interaction = { kind: "world_select" }, r.setPointerCapture(b.pointerId), !0) : !1;
  }
  function G() {
    if (s || g !== "cutout") return;
    const b = pe();
    if (b) {
      X(b), i.mode = "pano", n && Z() ? ie(dm(Y(xe(), b.position), z(), r.width, r.height)) : Se($t(Number(b.yaw_deg || 0)), Ee(Number(b.pitch_deg || 0), -89.9, 89.9)), re(), I(), D({ cause: "cutout_frame" });
      return;
    }
    const R = Mh({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: $t(Number(i.viewYaw || 0)),
      pitchDeg: Number(i.viewPitch || 0),
      viewFovDeg: Number(i.viewFov || 90)
    });
    d.shots = [R], X(R), ce(), i.mode = "pano", S(), L(), re(), I(), D({ cause: "cutout_frame" });
  }
  function v() {
    s || !f || me() || (Q(), d.camera = o1(xe()), ge(), X(pe()), ce(), S(), L(), re(), I(), D({ cause: "cutout_frame" }));
  }
  function x() {
    Q(), d.camera = null, X(null), ge(), S(), L(), re(), I(), D({ cause: "cutout_frame" });
  }
  function V(b, R) {
    f && le(b) && (d.camera.projection = R === Zi ? "erp" : "perspective", R === Zi) || A(b, R);
  }
  function k() {
    s || g !== "cutout" || (d.shots = [], i.selectedId = null, i.selectedIds = [], i.mode === "frame" && (i.mode = "pano"), i.cutoutAspectOpen = !1, d.active.selected_shot_id = null, S(), L(), re(), I(), D());
  }
  function M(b, R) {
    const se = l.frameSafeRect;
    if (!b || !se || i.mode !== "frame") return !1;
    const ye = nu * pi(se, b), he = Ou(Eu(se, R), ye);
    return b.hFOV_deg = he.hFOV_deg, b.vFOV_deg = he.vFOV_deg, !0;
  }
  function A(b, R) {
    if (!b || b.locked === !0) return;
    const se = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, ye = (() => {
      const E = String(b.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(E)) {
        const [Ae, Te] = E.split(":").map((Ie) => Number(Ie));
        if (Number.isFinite(Ae) && Number.isFinite(Te)) return Ae >= Te;
      }
      const de = Number(b.hFOV_deg || 64), Me = Number(b.vFOV_deg || 40);
      return Math.abs(de - Me) > 1e-6 ? de >= Me : yi(b) >= 1;
    })();
    let [he, ee] = se[String(R)] || se["1:1"];
    he >= ee !== ye && ([he, ee] = [ee, he]);
    const be = he / ee;
    if (!M(b, be)) {
      const E = Ee(Number(b.vFOV_deg || 40), 1, 179);
      b.vFOV_deg = E, b.hFOV_deg = as(E, be);
    }
    b.aspect_id = `${he}:${ee}`;
  }
  function B(b, R, se) {
    if (!b || b.locked === !0) return !1;
    const ye = aa(R, se);
    if (!ye) return !1;
    const he = ye.ratio;
    if (!M(b, he)) {
      const ee = Ee(Number(b.vFOV_deg || 40), 1, 179);
      b.vFOV_deg = ee, b.hFOV_deg = as(ee, he);
    }
    return b.aspect_id = ye.label, !0;
  }
  function te(b) {
    if (!b || b.locked === !0) return;
    const R = String(b.aspect_id || "").trim(), se = Kr(b), ye = se.tanHalfX / Math.max(1e-12, se.tanHalfY), he = 1 / Math.max(1e-12, ye);
    if (!M(b, he)) {
      const ee = Ee(Number(b.vFOV_deg || 60), 1, 179);
      b.vFOV_deg = ee, b.hFOV_deg = as(ee, he);
    }
    if (/^\d+:\d+$/.test(R)) {
      const [ee, be] = R.split(":");
      b.aspect_id = `${be}:${ee}`;
    } else
      b.aspect_id = ui(b);
  }
  function ge(b = !0) {
    var ye, he;
    if (!t) return;
    const R = w;
    if (!K()) {
      w = null, (ye = d.shots) != null && ye.length && (d.shots = []), R && W(R, null);
      return;
    }
    const se = (he = d.shots) == null ? void 0 : he[0];
    b && se && w && s1(d.camera, i.frame, se, w), w = em(d.camera, i.frame), se ? Object.assign(se, w, { position: [...w.position] }) : d.shots = [{ ...w, position: [...w.position] }], R || W(null, w);
  }
  function W(b, R) {
    var ee, be;
    !R && i.mode === "frame" && ae(b);
    const se = (R == null ? void 0 : R.position) ?? [0, 0, 0];
    if (((be = (ee = i.viewTransition) == null ? void 0 : ee.end) == null ? void 0 : be.mode) === "3dof") {
      ie({ ...xe(), position: se }, i.viewTransition.end);
      return;
    }
    if (i.mode !== "pano" || i.spaceMode !== "3dof" || !P()) return;
    const ye = (b == null ? void 0 : b.position) ?? [0, 0, 0];
    if (ye.every((E, de) => E === se[de])) return;
    const he = { ...xe(), position: ye };
    y({ mode: "6dof", position: ye, moved: !0 }), i.viewDistance = he.distance, ie({ ...he, position: se }, { mode: "3dof", moved: !1 });
  }
  function pe() {
    if (!c) return null;
    const b = Array.isArray(d.shots) ? d.shots : [];
    if (!b.length) return null;
    const R = String(d.active.selected_shot_id || "");
    return b.find((se) => String((se == null ? void 0 : se.id) || "") === R) || b[0] || null;
  }
  function we(b, R, se = {}) {
    var ee;
    if ((b == null ? void 0 : b.kind) !== "roll_frame" || !b.shot) return;
    b.accumulatedRad += wh(R, b.lastAngle), b.lastAngle = R;
    const ye = xh(b.start.roll_deg, b.accumulatedRad, {
      shiftKey: se.shiftKey,
      altKey: b.altStarted ? !1 : se.altKey
    });
    b.shot.roll_deg = ye, b.changed = b.changed || Math.abs(b.accumulatedRad) > 1e-9;
    const he = (((ee = m.sidePanel) == null ? void 0 : ee.params) || []).find((be) => be.key === "roll_deg");
    he && (he.value = ye, he.displayValue = Ki(ye), he.fillPct = (ye + 180) / 360 * 100), O(), ve(b), D({ localOnly: !0 });
  }
  function Pe(b, R, se = {}) {
    var ee;
    if ((b == null ? void 0 : b.kind) !== "roll_frame" || !b.shot || !b.rollGesture) return;
    const ye = eg(b.rollGesture, R, se);
    if (!ye) return;
    b.rollGesture = ye.gesture, b.center = ye.gesture.center, b.lastAngle = ye.gesture.lastAngle, b.accumulatedRad = ye.gesture.accumulatedRad, b.shot.roll_deg = ye.rollDeg, b.changed = b.changed || Math.abs(ye.gesture.accumulatedRad) > 1e-9;
    const he = (((ee = m.sidePanel) == null ? void 0 : ee.params) || []).find((be) => be.key === "roll_deg");
    he && (he.value = ye.rollDeg, he.displayValue = Ki(ye.rollDeg), he.fillPct = (ye.rollDeg + 180) / 360 * 100), O(), ve(b), D({ localOnly: !0 });
  }
  function ue(b, R) {
    const se = oe(b);
    return Math.atan2(se.y - R.y, se.x - R.x);
  }
  function ve(b) {
    var be, E;
    if ((b == null ? void 0 : b.kind) !== "roll_frame" || !b.shot) return;
    h.timer && (clearTimeout(h.timer), h.timer = 0), h.target = null;
    const R = $(b.shot), se = (be = r.getBoundingClientRect) == null ? void 0 : be.call(r), ye = (E = u.getBoundingClientRect) == null ? void 0 : E.call(u);
    if (!R || !se || !ye || r.width <= 0 || r.height <= 0) return;
    const he = se.width / r.width, ee = se.height / r.height;
    m.tooltip.text = `${Ki(b.shot.roll_deg)}°`, m.tooltip.left = se.left - ye.left + (R.x + R.w * 0.5) * he, m.tooltip.top = se.top - ye.top + (R.y + R.h * 0.5) * ee + 12, m.tooltip.variant = "roll", m.tooltip.visible = !0;
  }
  function Ne(b) {
    var ee;
    if (b.button !== 0 || s || i.mode !== "frame") return;
    const R = pe();
    if (!R || R.locked === !0) return;
    const se = $(R);
    if (!se) return;
    const ye = { x: se.x + se.w * 0.5, y: se.y + se.h * 0.5 }, he = ue(b, ye);
    i.interaction = {
      kind: "roll_frame",
      shot: R,
      center: ye,
      lastAngle: he,
      accumulatedRad: 0,
      start: { roll_deg: Number(R.roll_deg ?? R.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (ee = o.setPointerCapture) == null || ee.call(o, b.pointerId), b.preventDefault(), O(), ve(i.interaction), D({ localOnly: !0 });
  }
  function p(b) {
    var R;
    ((R = i.interaction) == null ? void 0 : R.kind) !== "roll_frame" || i.interaction.source !== "knob" || we(
      i.interaction,
      ue(b, i.interaction.center),
      b
    );
  }
  function j() {
    const b = i.interaction;
    (b == null ? void 0 : b.kind) !== "roll_frame" || b.source !== "knob" || (b.changed && (S(), L(), re()), i.interaction = null, T(), J(), O(), D());
  }
  function N(b) {
    const R = i.mode === "frame" && !s ? pe() : null;
    !R || R.locked === !0 || Math.abs(Number(R.roll_deg ?? R.rot_deg ?? 0)) <= 1e-9 || (R.roll_deg = 0, S(), L(), re(), O(), D(), b.preventDefault());
  }
  return {
    connect(b) {
      ({
        applySpaceMode: y,
        cameraFrustumLength: F,
        cameraShoots: K,
        cameraSphere: z,
        commitAndRefreshNode: L,
        currentSpaceCamera: C,
        cutoutCamera: U,
        editorViewInput: q,
        forceCursorTool: ce,
        getFrameViewRect: $,
        hasCamera: me,
        hasSpaceContent: P,
        hideTooltip: T,
        isCameraSelected: ne,
        isFreeSpaceView: Z,
        isShotItem: le,
        leaveFrameView: ae,
        lookingAt: Y,
        pushHistory: S,
        requestDraw: D,
        screenPos: oe,
        setSelectedItem: X,
        spaceScale: fe,
        spaceViewState: xe,
        stopTimelinePlayback: Q,
        syncFrameRollKnob: O,
        syncViewToggleState: J,
        transitionView: ie,
        turnViewTo: Se,
        updateCursor: _e,
        updateSelectionMenu: I,
        updateSidePanel: re,
        worldGizmoPointer: _
      } = b);
    },
    addCutoutFrame: G,
    addStudioCamera: v,
    deleteStudioCamera: x,
    setShotAspect: V,
    clearCutoutFrame: k,
    applyCutoutAspectCustom: B,
    rotateCutoutAspect90: te,
    syncCutoutShot: ge,
    getActiveCutoutShot: pe,
    startCameraPress: H,
    applySharedRollInteractionPoint: Pe,
    onFrameRollKnobPointerDown: Ne,
    onFrameRollKnobPointerMove: p,
    finishKnobRoll: j,
    onFrameRollKnobDoubleClick: N
  };
}
function $N(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    editorView: i,
    floatingRightEl: o,
    floatingTopEl: a,
    frameRailEl: s,
    paintDockEl: l,
    readOnly: c,
    runtime: u,
    shotEditor: d,
    toolRailEl: f,
    uiState: h,
    videoTransportEl: g
  } = e;
  let m, y, F, K, z, L, C, U, q, ce, $, me, P, T, ne, Z, le = null;
  function ae(x) {
    if (n.mode = "pano", !x) return;
    y();
    const V = P().distance;
    n.viewYaw = $t(x.yaw_deg), n.viewPitch = Ee(x.pitch_deg, -89.9, 89.9), n.viewFov = Ee(x.hFOV_deg, 35, 140), n.spaceMode === "6dof" && m({ mode: "6dof", position: [...x.position], moved: !0 }), n.viewDistance = V, u.backgroundDirty = !0;
  }
  function Y() {
    var ve, Ne, p, j, N;
    if (!r) return null;
    const x = (ve = r.getBoundingClientRect) == null ? void 0 : ve.call(r), V = Number((x == null ? void 0 : x.width) || 0) > 0 ? r.width / x.width : 1, k = Number((x == null ? void 0 : x.height) || 0) > 0 ? r.height / x.height : 1;
    u.frameCanvasScale = Math.min(V, k);
    let M = 24, A = 24;
    const B = Math.max(M + 1, r.width - 24);
    let te = Math.max(A + 1, r.height - 24);
    const ge = (Ne = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : Ne.call(f), W = (p = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : p.call(s);
    let pe = 24;
    ge && x && ge.width > 0 && ge.height > 0 && (pe = Math.max(pe, (ge.right - x.left) * V + tp)), W && x && W.width > 0 && W.height > 0 && ((j = h.frameRail) == null ? void 0 : j.visible) === !0 && (pe = Math.max(pe, (x.right - W.left) * V + tp)), M = Math.max(M, pe);
    const we = Math.min(B, r.width - pe);
    let Pe = 24;
    const ue = (N = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : N.call(a);
    if (ue && x && ue.width > 0 && ue.height > 0 && (Pe = Math.max(Pe, (ue.bottom - x.top) * k + ac)), [l, g].forEach((b) => {
      var ye;
      if (!b || !x) return;
      const R = getComputedStyle(b);
      if (R.display === "none" || R.visibility === "hidden" || Number(R.opacity) <= 0) return;
      const se = (ye = b.getBoundingClientRect) == null ? void 0 : ye.call(b);
      !se || se.width <= 0 || se.height <= 0 || (Pe = Math.max(Pe, (x.bottom - se.top) * k + ac));
    }), o && x) {
      const b = getComputedStyle(o);
      b.display !== "none" && b.visibility !== "hidden" && Number(b.opacity) > 0 && (Pe = Math.max(Pe, (oP + ac) * k));
    }
    return A = Math.max(A, Pe), te = Math.max(A + 1, Math.min(te, r.height - Pe)), {
      x: M,
      y: A,
      w: Math.max(1, we - M),
      h: Math.max(1, te - A)
    };
  }
  function S(x = z()) {
    if (!x || !r) return null;
    const V = u.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return Xb(V, x, nu * pi(V, x));
  }
  function D(x = z()) {
    const V = S(x);
    return V ? { x: V.x, y: V.y, w: V.w, h: V.h } : null;
  }
  function oe() {
    return d && !!z();
  }
  function X(x, V) {
    const k = z();
    if (!k || k.locked === !0) return !1;
    const M = Number(V) > 0, A = Nh(k, V);
    if (!A) return !1;
    if (M) {
      const B = nu * pi(
        u.frameSafeRect || { w: r.width, h: r.height },
        A
      ), te = Fu({ width: r.width, height: r.height }, B);
      if (te.halfW < r.width * 0.5 - 1e-6 || te.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return k.hFOV_deg = A.hFOV_deg, k.vFOV_deg = A.vFOV_deg, fe(), Z(), !0;
  }
  function fe() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, q(), F(), Z());
    }, 180);
  }
  function xe() {
    return t && n.mode === "frame" && L();
  }
  function Q() {
    const x = z(), V = S(x);
    return x && V ? _m(x, V, { width: r.width, height: r.height }) : null;
  }
  function O() {
    var x;
    return ((x = K()) == null ? void 0 : x.radius) || Qn;
  }
  function J(x) {
    const { position: V, yaw_deg: k, pitch_deg: M, roll_deg: A, hFOV_deg: B } = x.shot;
    return { position: V, yaw_deg: k, pitch_deg: M, roll_deg: A, hFOV_deg: B, distance: O() };
  }
  function ie(x, V) {
    const { rect: k } = x;
    return i.pickSurface($(x.shot), V.x - k.x, V.y - k.y, k.w, k.h);
  }
  function Se(x, V, k) {
    return Tc(V, ie(x, k), null, me());
  }
  function _e(x) {
    return JSON.stringify([J(x), x.rect]);
  }
  function I(x) {
    const V = z();
    V.position = [...x.position], V.yaw_deg = x.yaw_deg, V.pitch_deg = x.pitch_deg;
  }
  function re(x, V) {
    const k = z();
    !k || c || k.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: k,
      last: x,
      start: { yaw_deg: Number(k.yaw_deg || 0), pitch_deg: Number(k.pitch_deg || 0) },
      changed: !1
    }, ne(x), r.setPointerCapture(V));
  }
  function _(x, V, k) {
    const M = Q();
    if (!M || c) return;
    const A = J(M);
    n.interaction = x === "orbit" ? { kind: "frame_orbit", last: V, pivot: Se(M, A, V), changed: !1 } : { kind: "frame_pan", last: V, depth: am(A, me()), changed: !1 }, ne(V), r.setPointerCapture(k);
  }
  function w(x, V) {
    const k = Q();
    if (!k) return;
    const M = J(k), A = V.x - x.last.x, B = V.y - x.last.y;
    I(x.kind === "frame_pan" ? cm(M, A, B, k.rect.w, k.rect.h, x.depth) : lm(M, A, B, r.height, x.pivot)), x.changed = x.changed || A !== 0 || B !== 0, x.last = V, ce({ localOnly: !0, cause: "frame_view" });
  }
  function H(x, V) {
    const k = Q();
    if (!k || c) return;
    const M = J(k), A = performance.now(), B = { x: x.x, y: x.y, time: A, key: i.contentRevision(), view: _e(k) };
    if (!sm(le, B)) {
      const te = ie(k, x);
      le = { ...B, cost: performance.now() - A, hit: te };
    }
    I(um(M, Tc(M, le.hit, null, me()), V, me())), le.view = _e(Q() ?? k), le.wheelTime = A, fe(), Z(), ce({ localOnly: !0, cause: "frame_view" });
  }
  function G() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, q(), F(), Z(), !0) : !1;
  }
  function v() {
    const x = n.interaction;
    if (!(x != null && x.shot) || !x.start || x.kind !== "pan_frame" && x.kind !== "roll_frame") return !1;
    const V = x.kind === "roll_frame";
    return x.kind === "pan_frame" ? (x.shot.yaw_deg = x.start.yaw_deg, x.shot.pitch_deg = x.start.pitch_deg) : x.shot.roll_deg = x.start.roll_deg, V && C(), n.interaction = null, U(), T(), Z(), ne(n.pointerPos), ce({ localOnly: !0 }), !0;
  }
  return {
    connect(x) {
      ({
        applySpaceMode: m,
        cancelViewTransition: y,
        commitAndRefreshNode: F,
        contentSphere: K,
        getActiveCutoutShot: z,
        hasSpaceContent: L,
        hideTooltip: C,
        invalidateLivePaintPreviewCaches: U,
        pushHistory: q,
        requestDraw: ce,
        shotViewCamera: $,
        spaceScale: me,
        spaceViewState: P,
        syncViewToggleState: T,
        updateCursor: ne,
        updateSidePanel: Z
      } = x);
    },
    leaveFrameView: ae,
    measureFrameSafeRect: Y,
    getFrameViewLayout: S,
    getFrameViewRect: D,
    supportsFramePainting: oe,
    zoomFrameViewAt: X,
    isFreeFrameView: xe,
    frameContext: Q,
    frameViewDistance: O,
    frameSpaceView: J,
    frameTarget: Se,
    startPanFrame: re,
    startFrameDrag: _,
    dragFrame: w,
    zoomFrameAt: H,
    flushFrameWheelCommit: G,
    cancelFrameCameraGesture: v
  };
}
function zN(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let a, s, l, c, u, d, f, h, g, m, y, F, K, z, L, C, U, q, ce = 0;
  function $() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function me() {
    return String($() || "") === "lasso_fill";
  }
  function P() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function T(I, re) {
    const _ = Number(re || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, _ / 2048)
    };
  }
  function ne(I) {
    const re = String(I || "").trim();
    return re === "eraser" ? kr : Mn[re] ? re : t.activeBrushPresetId || kr;
  }
  function Z() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (P() || q());
  }
  function le() {
    var I;
    return Z() && ((I = t.pointerPos) == null ? void 0 : I.inside) === !0;
  }
  function ae(I, re = !0) {
    const _ = Number((I == null ? void 0 : I.x) || 0), w = Number((I == null ? void 0 : I.y) || 0), H = re !== !1, G = t.pointerPos || { x: 0, y: 0, inside: !1 }, v = G.inside !== H || Math.abs(G.x - _) > 0.01 || Math.abs(G.y - w) > 0.01;
    return t.pointerPos = { x: _, y: w, inside: H }, v;
  }
  function Y() {
    var M, A;
    if (!le()) return null;
    const I = t.primaryTool === "mask" ? "mask" : "paint", re = I === "mask" ? t.maskTool : t.paintTool, _ = ne(re), w = Mn[_] || Mn[kr], H = Number(t.brushSizes[_] ?? 10), G = Math.max(1, H) * Math.max(0.1, Number(w.sizeScale ?? 1)), v = Math.max(3, G * 0.5), x = I === "mask" ? re === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : re === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Tn(t.paintColor), V = I === "mask" ? re === "lasso_fill" ? 0.18 : 0.2 : re === "eraser" ? 0.06 : Ee(Math.max(0.16, Number(x.a ?? 1) * 0.3), 0.16, 0.52), k = I === "mask" ? 0.95 : re === "eraser" ? 0.75 : Ee(Math.max(0.46, Number(x.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: I,
      toolKind: re,
      preset: w,
      radius: v,
      fillStyle: cr(x, V),
      strokeStyle: cr(x, k),
      x: Number(((M = t.pointerPos) == null ? void 0 : M.x) || 0),
      y: Number(((A = t.pointerPos) == null ? void 0 : A.y) || 0),
      hotspotX: v,
      hotspotY: v
    };
  }
  function S() {
    var B, te, ge;
    const I = Y();
    if (!r) return;
    if (!I) {
      r.style.display = "none";
      return;
    }
    let re = I.radius * 2, _ = I.radius * 2, w = "999px", H = 0, G = I.fillStyle, v = "1px solid rgba(222, 222, 222, 0.72)", x = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const V = "rgba(222, 222, 222, 0.72)", k = "rgba(52, 52, 52, 0.72)";
    let M = Number(I.hotspotX ?? re * 0.5), A = Number(I.hotspotY ?? _ * 0.5);
    if (I.toolKind === "lasso_fill")
      re = Js, _ = Js, w = "0", v = "0", x = "none", M = lP, A = cP, G = gP(I.fillStyle, k, V);
    else if (I.layerKind === "mask")
      G = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (I.toolKind === "marker") {
      const W = Math.max(1, Number(((B = I.preset) == null ? void 0 : B.aspect) ?? 1));
      re = Math.max(10, I.radius * 2 * W), _ = Math.max(6, I.radius * 2), w = `${Math.min(6, _ * 0.42)}px`, H = Number(((ge = (te = I.preset) == null ? void 0 : te.angle) == null ? void 0 : ge.value) || 0) * mi;
    } else I.toolKind === "brush" ? G = `radial-gradient(circle at 50% 50%, ${I.strokeStyle} 0%, ${I.fillStyle} 45%, rgba(0,0,0,0) 100%)` : I.toolKind === "eraser" && (G = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(re)}px`, r.style.height = `${Math.round(_)}px`, r.style.borderRadius = w, r.style.border = v, r.style.boxShadow = x, r.style.background = G, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(I.x - M)}px, ${Math.round(I.y - A)}px) rotate(${H}deg)`;
  }
  function D() {
    var Pe;
    if (!n || !i) return;
    const I = t.primaryTool === "mask" ? "mask" : "paint", re = I === "mask" ? t.maskTool : t.paintTool;
    if (re === "lasso_fill") return;
    const _ = ne(re), w = Mn[_] || Mn[kr], H = Number(t.brushSizes[_] ?? 10), G = Math.max(1, H) * Math.max(0.1, Number(w.sizeScale ?? 1)), v = Math.max(6, G * 0.5), x = re === "eraser", V = I === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : x ? { r: 1, g: 1, b: 1, a: 0.22 } : Tn(t.paintColor), k = I === "mask" ? cr(V, 0.22) : x ? "rgba(255,255,255,0.14)" : cr(V, Ee(Math.max(0.18, Number(V.a ?? 1) * 0.34), 0.18, 0.56)), M = I === "mask" ? cr(V, 0.96) : x ? "rgba(255,255,255,0.72)" : cr(V, Ee(Math.max(0.56, Number(V.a ?? 1) * 0.96), 0.56, 1));
    let A = v * 2, B = v * 2, te = "999px", ge = 0, W = k;
    const pe = "rgba(222, 222, 222, 0.72)", we = "rgba(52, 52, 52, 0.72)";
    if (I === "mask")
      W = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (re === "marker") {
      const ue = Math.max(1, Number((w == null ? void 0 : w.aspect) ?? 1));
      A = Math.max(16, v * 2 * ue), B = Math.max(10, v * 2), te = `${Math.min(8, B * 0.42)}px`, ge = Number(((Pe = w == null ? void 0 : w.angle) == null ? void 0 : Pe.value) || 0) * mi;
    } else re === "brush" ? W = `radial-gradient(circle at 50% 50%, ${M} 0%, ${k} 48%, rgba(0,0,0,0) 100%)` : re === "lasso_fill" ? (A = Math.max(18, v * 1.8), B = A, W = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${M} 43%, ${M} 58%, rgba(0,0,0,0) 59%)`) : x && (W = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(A)}px`, i.style.height = `${Math.round(B)}px`, i.style.borderRadius = te, i.style.background = W, i.style.border = `1px solid ${pe}`, i.style.boxShadow = `0 0 0 1px ${we}`, i.style.transform = `rotate(${ge}deg)`, ce && (clearTimeout(ce), ce = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function oe() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), ce && clearTimeout(ce), ce = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), ce = 0;
    }, 180));
  }
  function X(I, re, _, w) {
    const H = ne(re), G = Mn[H] || Mn[kr], v = t.brushSizes[H] ?? 10, x = Math.max(1, v) * Math.max(0.1, G.sizeScale ?? 1), V = T(w, x), k = _.map((A) => ({
      ...A,
      t: Number((A == null ? void 0 : A.t) || 0),
      widthScale: Number.isFinite(Number(A == null ? void 0 : A.widthScale)) ? Math.max(0, Number(A.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(A == null ? void 0 : A.pressureLike)) ? Math.max(0, Number(A.pressureLike)) : 1
    })), M = {
      id: Di(I),
      actionGroupId: Di("ag"),
      targetSpace: w && typeof w == "object" ? { ...w, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: I,
      toolKind: re,
      size: x,
      createdAt: Date.now(),
      color: I === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: V.radiusModel,
      radiusValue: V.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: k.map((A) => ({ ...A })),
        points: k.map((A) => ({ ...A }))
      }
    };
    return ep(M, G), t.mode, Number(G.aspect ?? 1), Number(M.aspect ?? 1), String(M.stampKind || ""), Number(M.size || 0), String(M.radiusModel || ""), Number(M.radiusValue || 0), { ...M.targetSpace }, M;
  }
  function fe(I, re, _, w) {
    const H = _.map((V) => ({
      ...V,
      t: Number((V == null ? void 0 : V.t) || 0),
      widthScale: Number.isFinite(Number(V == null ? void 0 : V.widthScale)) ? Math.max(0, Number(V.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(V == null ? void 0 : V.pressureLike)) ? Math.max(0, Number(V.pressureLike)) : 1
    })), G = ne(re), v = Mn[G] || Mn[kr], x = {
      id: Di(I),
      actionGroupId: Di("ag"),
      targetSpace: w && typeof w == "object" ? { ...w, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: I,
      toolKind: re,
      size: 10,
      createdAt: Date.now(),
      color: I === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: H.map((V) => ({ ...V }))
      }
    };
    return ep(x, v), t.mode, Number(v.aspect ?? 1), Number(x.aspect ?? 1), String(x.stampKind || ""), { ...x.targetSpace }, x;
  }
  function xe(I) {
    const re = o.painting || (o.painting = to(null)), _ = re[I] || (re[I] = { strokes: [] });
    return Array.isArray(_.strokes) || (_.strokes = []), _.strokes;
  }
  function Q(I, re, _ = performance.now()) {
    let w;
    if (t.mode === "frame") {
      const k = f();
      if (!k || (w = U(re, k, _), !w)) return !1;
    } else
      w = C(re, _);
    if (!w) return !1;
    const H = I.stroke.geometry.rawPoints || I.stroke.geometry.points, G = I.stroke.geometry.points, v = H[H.length - 1];
    if (v) {
      const k = Math.abs(Number(w.u ?? w.x ?? 0) - Number(v.u ?? v.x ?? 0)), M = Math.abs(Number(w.v ?? w.y ?? 0) - Number(v.v ?? v.y ?? 0));
      if (k < 15e-4 && M < 15e-4) return !1;
    }
    const x = {
      ...w,
      t: Number((w == null ? void 0 : w.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    H.push({ ...x }), G.push({ ...x });
    const V = h(I);
    if (V) {
      const k = t.paintEngine.ensureTarget(V);
      t.paintEngine.appendStrokePoint(k, Number(x.u ?? 0), Number(x.v ?? 0), I.stroke);
    }
    return !0;
  }
  function O(I, re, _ = performance.now()) {
    var v, x;
    let w;
    if (t.mode === "frame") {
      const V = f();
      if (!V) return !1;
      w = U(re, V, _);
    } else
      w = C(re, _);
    const H = (x = (v = I == null ? void 0 : I.stroke) == null ? void 0 : v.geometry) == null ? void 0 : x.points;
    if (!w || !Array.isArray(H)) return !1;
    const G = H[H.length - 1];
    if (G) {
      const V = Math.abs(Number(w.u ?? w.x ?? 0) - Number(G.u ?? G.x ?? 0)), k = Math.abs(Number(w.v ?? w.y ?? 0) - Number(G.v ?? G.y ?? 0));
      if (V < 15e-4 && k < 15e-4) return !1;
    }
    return H.push({
      ...w,
      t: Number((w == null ? void 0 : w.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function J(I) {
    var ue, ve, Ne, p, j;
    const re = (I == null ? void 0 : I.stroke) || null;
    if (!re || (I == null ? void 0 : I.layerKind) !== "paint" || String((re == null ? void 0 : re.toolKind) || "") !== "eraser") return !1;
    L();
    const _ = h(), w = c(_.width, _.height);
    if (!z(w, re, { w: _.width, h: _.height })) return !1;
    const H = ((ve = (ue = w.ctx) == null ? void 0 : ue.getImageData(0, 0, _.width, _.height)) == null ? void 0 : ve.data) || null;
    if (!H) return !1;
    const G = new Map(m().map((N) => [String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || "").trim(), N ? { ...N } : null])), v = [], x = [], V = [...y().filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") !== "paint")];
    let k = !1, M = g().reduce((N, b) => Math.max(N, Number((b == null ? void 0 : b.z_index) || 0)), -1) + 1;
    function A(N, b, R, se = 8) {
      let ye = b, he = R, ee = -1, be = -1;
      for (let E = 0; E < R; E += 1)
        for (let de = 0; de < b; de += 1)
          N[(E * b + de) * 4 + 3] <= se || (de < ye && (ye = de), E < he && (he = E), de > ee && (ee = de), E > be && (be = E));
      return ee < ye || be < he ? null : { minX: ye, minY: he, maxX: ee, maxY: be };
    }
    const B = A(H, _.width, _.height, 8);
    if (!B) return !1;
    function te(N, b) {
      return !N || !b ? !1 : !(N.maxX < b.minX || b.maxX < N.minX || N.maxY < b.minY || b.maxY < N.minY);
    }
    function ge(N, b) {
      const R = u((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || "", "paint", b);
      if (!R) return null;
      const se = R.centerUv.u - R.halfW, ye = R.centerUv.u + R.halfW, he = R.centerUv.v - R.halfH, ee = R.centerUv.v + R.halfH, be = _.width, E = _.height;
      return {
        minX: Math.floor((se % 1 + 1) % 1 * be),
        maxX: Math.ceil((ye % 1 + 1) % 1 * be),
        minY: Math.floor(Ee(he, 0, 1) * E),
        maxY: Math.ceil(Ee(ee, 0, 1) * E),
        wraps: ye - se >= 1 || se < 0 || ye > 1
      };
    }
    function W(N) {
      const b = (N == null ? void 0 : N.bbox) || null;
      if (!b) return null;
      const R = (N == null ? void 0 : N.transform) || {}, se = _.width, ye = _.height, he = Number(b.u0 || 0) + Number(R.du || 0), ee = Number(b.u1 || 0) + Number(R.du || 0), be = Number(b.v0 || 0) + Number(R.dv || 0), E = Number(b.v1 || 0) + Number(R.dv || 0);
      return {
        minX: Math.floor((he % 1 + 1) % 1 * se),
        maxX: Math.ceil((ee % 1 + 1) % 1 * se),
        minY: Math.floor(Ee(be, 0, 1) * ye),
        maxY: Math.ceil(Ee(E, 0, 1) * ye),
        wraps: ee - he >= 1 || he < 0 || ee > 1
      };
    }
    function pe(N) {
      return N ? N.wraps ? te(B, { minX: 0, maxX: N.maxX, minY: N.minY, maxY: N.maxY }) || te(B, { minX: N.minX, maxX: _.width - 1, minY: N.minY, maxY: N.maxY }) : te(B, N) : !0;
    }
    function we(N) {
      if (!N) return { touched: !1, canvas: null };
      const b = c(_.width, _.height, { readback: !0 });
      b.ctx.drawImage(N, 0, 0);
      const R = b.ctx.getImageData(0, 0, _.width, _.height);
      b.ctx.save(), b.ctx.globalCompositeOperation = "destination-out", b.ctx.drawImage(w.canvas, 0, 0), b.ctx.restore();
      const se = b.ctx.getImageData(0, 0, _.width, _.height);
      for (let ye = 0; ye < _.width * _.height; ye += 1) {
        if (H[ye * 4 + 3] <= 8) continue;
        const ee = R.data[ye * 4 + 3], be = se.data[ye * 4 + 3];
        if (ee > be)
          return { touched: !0, canvas: b.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function Pe(N, b, R) {
      const se = Number(R == null ? void 0 : R.z_index), ye = l(N, b, R).map((he, ee) => ({
        ...he,
        z_index: Number.isFinite(se) ? se + ee * 1e-3 : M + ee * 1e-3
      }));
      return ye.length && (M = Math.max(M, ...ye.map((he) => Number((he == null ? void 0 : he.z_index) || 0))) + 1), ye;
    }
    for (const N of m()) {
      const b = String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || "").trim();
      if (!b) continue;
      const R = F(b, "paint");
      if (!pe(ge(N, R))) {
        x.push(N), v.push(...R);
        continue;
      }
      const se = ((p = (Ne = t.paintEngine) == null ? void 0 : Ne.getGroupTarget) == null ? void 0 : p.call(Ne, b)) || null, ye = ((j = se == null ? void 0 : se.committedPaint) == null ? void 0 : j.canvas) || null;
      if (!ye) {
        x.push(N), v.push(...R);
        continue;
      }
      const he = we(ye);
      if (!he.touched || !he.canvas) {
        x.push(N), v.push(...R);
        continue;
      }
      k = !0;
      const ee = Pe(he.canvas, "paint", G.get(b) || N || {});
      V.push(...ee);
    }
    for (const N of y().filter((b) => String((b == null ? void 0 : b.layerKind) || "paint") === "paint")) {
      if (!pe(W(N))) {
        V.push(N);
        continue;
      }
      const b = a(N, null);
      if (!b) {
        V.push(N);
        continue;
      }
      const R = we(b);
      if (!R.touched || !R.canvas) {
        V.push(N);
        continue;
      }
      k = !0;
      const se = Pe(R.canvas, "paint", N);
      V.push(...se);
    }
    return k ? (o.painting.paint.strokes = v, o.painting.groups = x.sort((N, b) => Number((N == null ? void 0 : N.z_index) || 0) - Number((b == null ? void 0 : b.z_index) || 0)), o.painting.raster_objects = V.sort((N, b) => Number((N == null ? void 0 : N.z_index) || 0) - Number((b == null ? void 0 : b.z_index) || 0)), s({ preservePanelValues: !1 }), !0) : !1;
  }
  function ie(I) {
    var v, x, V, k, M;
    if ((((x = (v = I.stroke) == null ? void 0 : v.geometry) == null ? void 0 : x.rawPoints) || ((k = (V = I.stroke) == null ? void 0 : V.geometry) == null ? void 0 : k.points) || []).length >= 1) {
      _e(I);
      const A = h(I);
      A && (String(((M = I.stroke) == null ? void 0 : M.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(A) : t.paintEngine.commitActiveStroke(I.stroke, A)), I._hasCommittedSegments = !0;
    }
    const _ = I.stroke, w = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, H = X(I.layerKind, _.toolKind, [], w);
    H.actionGroupId = _.actionGroupId, I.stroke = H;
    const G = h(I);
    G && t.paintEngine.beginStroke(H, G);
  }
  function Se(I) {
    var v, x;
    if ((((x = (v = I.stroke) == null ? void 0 : v.geometry) == null ? void 0 : x.points) || []).length >= 3) {
      _e(I);
      const V = h(I);
      V && t.paintEngine.commitActiveStroke(I.stroke, V), I._hasCommittedSegments = !0;
    }
    const _ = I.stroke, w = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, H = fe(I.layerKind, _.toolKind, [], w);
    H.actionGroupId = _.actionGroupId, I.stroke = H;
    const G = h(I);
    G && t.paintEngine.beginStroke(H, G);
  }
  function _e(I) {
    var G, v, x, V;
    const re = ((G = I == null ? void 0 : I.stroke) == null ? void 0 : G.geometry) || null;
    if (!re) return !1;
    const _ = String(((v = I == null ? void 0 : I.stroke) == null ? void 0 : v.toolKind) || "pen");
    if (I.layerKind === "paint" && _ === "eraser")
      return re.geometryKind !== "lasso_fill" && (re.processedPoints = K(re.rawPoints || re.points || [], I.stroke.targetSpace, !0)), J(I);
    const w = I.layerKind === "paint" && _ !== "eraser";
    if (re.geometryKind === "lasso_fill")
      return (Array.isArray(re.points) ? re.points : []).length < 3 ? !1 : (w && d((x = I.stroke) == null ? void 0 : x.actionGroupId), xe(I.layerKind).push(I.stroke), !0);
    const H = re.rawPoints || re.points || [];
    return H.length < 1 ? !1 : (re.processedPoints = K(H, I.stroke.targetSpace, !0), w && d((V = I.stroke) == null ? void 0 : V.actionGroupId), xe(I.layerKind).push(I.stroke), !0);
  }
  return {
    connect(I) {
      ({
        buildRasterObjectEditCanvas: a,
        clearSelection: s,
        createRasterFrozenObjectsFromCanvas: l,
        createRasterSurface: c,
        ensureGroupFrame: u,
        ensurePaintingGroupEntry: d,
        getActiveCutoutShot: f,
        getActivePaintTargetDescriptor: h,
        getDisplayListObjects: g,
        getPaintingGroupList: m,
        getRasterObjectList: y,
        getStrokeGroupStrokes: F,
        processFreehandPoints: K,
        rasterizeStrokeToSurface: z,
        rebuildPaintEngineIfNeeded: L,
        screenPosToErpPoint: C,
        screenPosToFrameAsErpPoint: U,
        supportsFramePainting: q
      } = I);
    },
    isActiveLassoTool: me,
    supportsErpPainting: P,
    getBrushPresetIdForTool: ne,
    isPaintCursorEnabled: Z,
    isActivePaintCursorVisible: le,
    setPointerPos: ae,
    syncPaintCursorElement: S,
    showPaintSizePreview: D,
    hidePaintSizePreview: oe,
    buildFreehandStrokeRecord: X,
    buildLassoFillStrokeRecord: fe,
    getPaintingLayerList: xe,
    appendPaintPoint: Q,
    appendLassoPoint: O,
    _segmentFrameStroke: ie,
    _segmentFrameLassoFill: Se,
    commitPaintInteraction: _e
  };
}
function jN(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, a, s, l, c, u, d, f, h, g, m, y, F, K, z, L, C, U, q, ce, $, me, P;
  function T(S) {
    var oe;
    if (n && t.mode === "frame") {
      const X = a(), fe = l(X);
      if (!X || !fe || !(Number((S == null ? void 0 : S.x) || 0) >= Number(fe.x || 0) && Number((S == null ? void 0 : S.x) || 0) <= Number(fe.x || 0) + Number(fe.w || 0) && Number((S == null ? void 0 : S.y) || 0) >= Number(fe.y || 0) && Number((S == null ? void 0 : S.y) || 0) <= Number(fe.y || 0) + Number(fe.h || 0))) return null;
      const Q = ce(S, X, performance.now()), O = Q ? o(Q) : null;
      if (O)
        for (const ie of s()) {
          if (!z(ie)) continue;
          const Se = P(ie, O);
          if (Se && Number(Se.x) >= 0 && Number(Se.x) <= 1 && Number(Se.y) >= 0 && Number(Se.y) <= 1) {
            const _e = q(ie);
            if (_e != null && _e.visible) return { item: ie, geom: _e };
          }
        }
      const J = c(!1).slice().sort((ie, Se) => Number((Se == null ? void 0 : Se.z_index) || 0) - Number((ie == null ? void 0 : ie.z_index) || 0));
      for (const ie of J) {
        if (ie.type === "strokeGroup") {
          const I = f(U("paint", ie.actionGroupId || ie.id || ""));
          if (!I) continue;
          const re = q(I);
          if (!(re != null && re.visible)) continue;
          const _ = Array.isArray(re.strokePaths) ? re.strokePaths : [];
          for (const w of _) {
            const H = Array.isArray(w == null ? void 0 : w.points) ? w.points : [];
            if (!H.length) continue;
            if (w.closed && H.length >= 3 && Rr(S, H)) return { item: I, geom: re };
            const G = Math.max(8, Number((w == null ? void 0 : w.lineWidth) || 0) * 0.5 + 6);
            for (let v = 0; v < H.length - 1; v += 1)
              if (cc(S, H[v], H[v + 1]) <= G * G) return { item: I, geom: re };
            if (H.length === 1 && To(S, H[0]) <= G * G) return { item: I, geom: re };
          }
          continue;
        }
        if (ie.type === "rasterObject") {
          const I = u(C(((oe = ie.item) == null ? void 0 : oe.id) || ie.id || ""));
          if (!I) continue;
          const re = q(I);
          if (h(I, re, S, Q)) return { item: I, geom: re };
          continue;
        }
        const Se = ie.item;
        if (!Se || !z(Se) || !O) continue;
        const _e = P(Se, O);
        if (_e && Number(_e.x) >= 0 && Number(_e.x) <= 1 && Number(_e.y) >= 0 && Number(_e.y) <= 1) {
          const I = q(Se);
          if (I != null && I.visible) return { item: Se, geom: I };
        }
      }
      return null;
    }
    const D = [
      ...c(!1).slice().sort((X, fe) => Number((fe == null ? void 0 : fe.z_index) || 0) - Number((X == null ? void 0 : X.z_index) || 0)).map((X) => {
        var fe;
        return X.type === "strokeGroup" ? f(U("paint", X.actionGroupId || X.id || "")) : X.type === "rasterObject" ? u(C(((fe = X.item) == null ? void 0 : fe.id) || X.id || "")) : X.item;
      }).filter(Boolean),
      ...n ? s().filter((X) => K(X)) : []
    ];
    for (const X of D) {
      if (L(X)) {
        const xe = q(X);
        if (!(xe != null && xe.visible)) continue;
        const Q = Array.isArray(xe.strokePaths) ? xe.strokePaths : [];
        for (const O of Q) {
          const J = Array.isArray(O == null ? void 0 : O.points) ? O.points : [];
          if (!J.length) continue;
          if (O.closed && J.length >= 3 && Rr(S, J)) return { item: X, geom: xe };
          const ie = Math.max(8, Number((O == null ? void 0 : O.lineWidth) || 0) * 0.5 + 6);
          for (let Se = 0; Se < J.length - 1; Se += 1)
            if (cc(S, J[Se], J[Se + 1]) <= ie * ie) return { item: X, geom: xe };
          if (J.length === 1 && To(S, J[0]) <= ie * ie) return { item: X, geom: xe };
        }
        continue;
      }
      if (F(X)) {
        const xe = q(X);
        if (!(xe != null && xe.visible)) continue;
        if (h(X, xe, S)) return { item: X, geom: xe };
        continue;
      }
      const fe = q(X);
      if (fe.visible && Rr(S, fe.corners))
        return { item: X, geom: fe };
    }
    return null;
  }
  function ne(S, D, oe = null) {
    if (!S || !S.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (z(oe)) return Wc(S, D);
    if (S.kind === "strokeGroup") {
      const X = S.corners.findIndex((xe) => To(xe, D) <= 121);
      if (X >= 0) {
        const xe = S.corners[X], Q = xe.x - S.center.x, O = xe.y - S.center.y, J = Q * O >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: X, cursor: J };
      }
      const fe = Array.isArray(S.strokePaths) ? S.strokePaths : [];
      for (const xe of fe) {
        const Q = Array.isArray(xe == null ? void 0 : xe.points) ? xe.points : [];
        if (xe.closed && Q.length >= 3 && Rr(D, Q)) return { kind: "move", cursor: "default" };
        const O = Math.max(8, Number((xe == null ? void 0 : xe.lineWidth) || 0) * 0.5 + 6);
        for (let J = 0; J < Q.length - 1; J += 1)
          if (cc(D, Q[J], Q[J + 1]) <= O * O) return { kind: "move", cursor: "default" };
      }
      return Rr(D, S.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (S.kind === "rasterObject") {
      const X = S.corners.findIndex((fe) => To(fe, D) <= 121);
      if (X >= 0) {
        const fe = S.corners[X], xe = fe.x - S.center.x, Q = fe.y - S.center.y, O = xe * Q >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: X, cursor: O };
      }
      return Rr(D, S.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return oS(S, D, {
      edges: i === "cutout" || K(oe),
      resize: !(K(oe) && m()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function Z(S, D) {
    return {
      x0: Math.min(Number((S == null ? void 0 : S.x) || 0), Number((D == null ? void 0 : D.x) || 0)),
      y0: Math.min(Number((S == null ? void 0 : S.y) || 0), Number((D == null ? void 0 : D.y) || 0)),
      x1: Math.max(Number((S == null ? void 0 : S.x) || 0), Number((D == null ? void 0 : D.x) || 0)),
      y1: Math.max(Number((S == null ? void 0 : S.y) || 0), Number((D == null ? void 0 : D.y) || 0))
    };
  }
  function le(S, D) {
    return !!S && !!D && Number(D.x) >= Number(S.x0) && Number(D.x) <= Number(S.x1) && Number(D.y) >= Number(S.y0) && Number(D.y) <= Number(S.y1);
  }
  function ae(S, D) {
    if (!S || !(D != null && D.visible) || !Array.isArray(D.corners)) return !1;
    if (D.corners.some((fe) => le(S, fe))) return !0;
    const oe = (Number(S.x0) + Number(S.x1)) * 0.5, X = (Number(S.y0) + Number(S.y1)) * 0.5;
    return !!Rr({ x: oe, y: X }, D.corners);
  }
  function Y(S) {
    if (me(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? $("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? $("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? $("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? $("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? $("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? $(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? $("grabbing") : $("default");
      return;
    }
    if (g()) {
      $("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        $(iP);
        return;
      }
      if (t.primaryTool !== "cursor") {
        $("default");
        return;
      }
      $("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      $("default");
      return;
    }
    if (t.gizmoAxis) {
      $("grab");
      return;
    }
    const D = d(), oe = D ? q(D) : null, X = D ? y(D) : !1, fe = X ? { kind: "none", cursor: "default" } : ne(oe, S, D);
    if (!X && fe.kind !== "none") {
      $(fe.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && T(S)) {
      $("default");
      return;
    }
    $(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(S) {
      ({
        erpPointToWorldDir: o,
        getActiveCutoutShot: a,
        getCutoutSelectableItemsForHit: s,
        getFrameViewRect: l,
        getOrderedDisplayListObjects: c,
        getRasterObjectItem: u,
        getSelected: d,
        getStrokeGroupItem: f,
        hitRasterObjectAt: h,
        isActivePaintCursorVisible: g,
        isErpCamera: m,
        isItemLocked: y,
        isRasterObjectItem: F,
        isShotItem: K,
        isStickerItem: z,
        isStrokeGroupItem: L,
        makeRasterObjectSelectionId: C,
        makeStrokeGroupSelectionId: U,
        objectGeom: q,
        screenPosToFrameAsErpPoint: ce,
        setCanvasCursor: $,
        syncPaintCursorElement: me,
        worldDirToFrameLocalPoint: P
      } = S);
    },
    hitObjectAt: T,
    handleHit: ne,
    rectFromPoints: Z,
    rectIntersectsGeom: ae,
    updateCursor: Y
  };
}
function HN(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    scheduler: i,
    selectionMenu: o,
    stageWrap: a,
    state: s,
    studio: l,
    tooltip: c,
    tooltipEl: u,
    type: d,
    uiState: f
  } = e;
  let h, g, m, y, F, K, z, L, C, U, q, ce, $, me, P, T, ne, Z = !1;
  function le() {
    return Z;
  }
  function ae() {
    if (!o) return;
    if (Z = !1, n.mode === "frame") {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || C() && ce()) {
      const O = Y();
      Z = O.visible, S(O);
      return;
    }
    const X = K(), fe = z();
    if (!X && fe.length === 0 || n.interaction) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const xe = L(), Q = MN({
      type: d,
      selected: X,
      selectedItems: fe,
      selectedKind: xe,
      geom: fe.length > 1 ? F(fe) : ne(X),
      allLocked: h(fe),
      anyLocked: fe.some((O) => $(O)),
      selectedLocked: $(X),
      activeAspect: me(X) && U() ? Zi : Cr(X),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: q,
      isStickerHidden: T,
      canRestoreSelectedToInitial: g,
      iconSet: ze,
      cameraShot: t,
      cameraDeletable: l,
      erpChoice: l,
      coverage: s.coverage
    });
    S(Q);
  }
  function Y() {
    const X = P() && !n.interaction ? y().space : null;
    if (!(X != null && X.gizmo)) return { visible: !1 };
    const fe = m(), xe = X.stickers.find((ie) => ie.id === n.worldSelectedId), O = (xe ? Ju(xe) : [X.gizmo.transform.position]).map((ie) => oa(fe, ie, r.width, r.height)).filter(Boolean), J = j1(fe, X.gizmo.transform.position, X.gizmo.mode, r.width, r.height);
    return PN({ corners: O, gizmoBox: J, gizmoMode: X.gizmo.mode, camera: C(), deletable: l && C() });
  }
  function S(X) {
    var J, ie;
    if (!X.visible) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const fe = (Se, _e) => NN(X.anchor, Se, _e, r.width, r.height), xe = Math.max(1, Number(((J = n.menuSize) == null ? void 0 : J.w) || 220)), Q = Math.max(1, Number(((ie = n.menuSize) == null ? void 0 : ie.h) || 40)), O = fe(xe, Q);
    if (!O) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    f.selectionMenu = {
      visible: !0,
      left: O.left,
      top: O.top,
      items: X.items
    }, i.requestFrame(() => {
      if (!o || f.selectionMenu.visible !== !0) return;
      const Se = o.getBoundingClientRect(), _e = Math.round(Number((Se == null ? void 0 : Se.width) || 0)) || 220, I = Math.round(Number((Se == null ? void 0 : Se.height) || 0)) || 40;
      n.menuSize = { w: _e, h: I, measured: !0 };
      const re = fe(_e, I);
      re && (f.selectionMenu.left = re.left, f.selectionMenu.top = re.top);
    });
  }
  function D() {
    c.timer && (clearTimeout(c.timer), c.timer = 0), c.target = null, f.tooltip.visible = !1;
  }
  function oe(X) {
    if (!u || !X || !X.isConnected) return;
    const fe = String(X.getAttribute("data-tip") || "").trim();
    if (!fe) return;
    f.tooltip.text = fe, f.tooltip.visible = !0;
    const xe = X;
    i.requestFrame(() => {
      var v, x;
      if (c.target !== xe || !u || !(xe != null && xe.isConnected)) return;
      const Q = a.getBoundingClientRect(), O = xe.getBoundingClientRect(), J = 8, ie = 12, Se = Math.round(Number(((v = u.getBoundingClientRect()) == null ? void 0 : v.width) || 0)) || 100, _e = Math.round(Number(((x = u.getBoundingClientRect()) == null ? void 0 : x.height) || 0)) || 24, I = !!xe.closest(".pano-floating-left"), re = !!xe.closest(".pano-frame-rail"), _ = !!xe.closest(".pano-paint-footer") || !!xe.closest(".pano-paint-color-float");
      let w = "", H = O.left - Q.left + O.width * 0.5 - Se * 0.5, G = O.top - Q.top - _e - ie;
      if (xe.closest(".pano-floating-top") && (G = O.bottom - Q.top + ie), I)
        w = "tool-rail", H = O.right - Q.left + 10, G = O.top - Q.top + O.height * 0.5 - _e * 0.5, H = Ee(H, J, Math.max(J, Q.width - Se - J)), G = Ee(G, J, Math.max(J, Q.height - _e - J));
      else if (re)
        w = "frame-rail", H = O.left - Q.left - Se - 10, G = O.top - Q.top + O.height * 0.5 - _e * 0.5, H = Ee(H, J, Math.max(J, Q.width - Se - J)), G = Ee(G, J, Math.max(J, Q.height - _e - J));
      else if (_) {
        w = "footer";
        const V = xe.closest(".pano-paint-footer"), k = V ? V.getBoundingClientRect() : O;
        H = k.left - Q.left + k.width * 0.5 - Se * 0.5, G = k.bottom - Q.top + 5, H = Ee(H, J, Math.max(J, Q.width - Se - J)), G = Math.max(J, G);
      }
      H = Ee(H, J, Math.max(J, Q.width - Se - J)), G = Math.max(J, G), f.tooltip.left = H, f.tooltip.top = G, f.tooltip.variant = w, f.tooltip.visible = !0;
    });
  }
  return {
    connect(X) {
      ({
        areAllSelectedItemsLocked: h,
        canRestoreSelectedToInitial: g,
        currentSpaceCamera: m,
        editorViewInput: y,
        getMultiSelectionGeom: F,
        getSelected: K,
        getSelectedItems: z,
        getSelectedKind: L,
        isCameraSelected: C,
        isErpCamera: U,
        isExternalSticker: q,
        isFreeSpaceView: ce,
        isItemLocked: $,
        isShotItem: me,
        isSpaceView: P,
        isStickerHidden: T,
        objectGeom: ne
      } = X);
    },
    isWorldMenuShown: le,
    updateSelectionMenu: ae,
    hideTooltip: D,
    showTooltipFor: oe
  };
}
function GN(e) {
  const {
    canvas: t,
    dragFrames: r,
    editor: n,
    editorView: i,
    node: o,
    paintColorPop: a,
    readOnly: s,
    runtime: l,
    sceneV2: c,
    shotEditor: u,
    state: d,
    stateV2: f,
    timeline: h,
    type: g,
    viewController: m
  } = e;
  let y, F, K, z, L, C, U, q, ce, $, me, P, T, ne, Z, le, ae, Y, S, D, oe, X, fe, xe, Q, O, J, ie, Se, _e, I, re, _, w, H, G, v, x, V, k, M, A, B, te, ge, W, pe, we, Pe, ue, ve, Ne, p, j, N, b, R, se, ye, he, ee, be, E, de, Me, Ae, Te, Ie, Le, je, Be, $e, He, Tt, Dt, Pt, Et, Gt, Qt, zt, wt, Ge, In, En, nr, ao, ga, ya, so, lo, co, ba, uo, va, fo, po, _a, Sa, ho, Nt, _n, rr, mo, On, wa, xa, ka, Lr = null;
  function wl(Oe) {
    h.selection && (h.selection = null, Sa());
    const Fe = He(Oe);
    Lr = Fe, zt(Fe, !0), ne(), m.state.inertia.active = !1, m.state.inertia.vx = 0, m.state.inertia.vy = 0;
    const ke = Ne(), ht = ve(), at = ke || ht ? vS(mo(), Oe) : null;
    if (ht && at) {
      Oe.preventDefault(), at === "look" ? so(Fe, Oe.pointerId) : ya(at, Fe, Oe.pointerId);
      return;
    }
    if (at === "look") {
      Oe.preventDefault();
      const Ue = Tt(Oe);
      n.interaction = { kind: "view", last: Ue, lastTs: performance.now() }, m.startDrag(Ue.x, Ue.y, Oe.pointerId, performance.now()), Nt(Fe), t.setPointerCapture(Oe.pointerId);
      return;
    }
    if (at) {
      Oe.preventDefault(), lo(at, Fe, Oe.pointerId);
      return;
    }
    if ((ke || ht) && Oe.button !== 0) {
      Oe.preventDefault();
      return;
    }
    if (Oe.button === 1) {
      if (Oe.preventDefault(), n.mode === "frame") {
        const Ue = ie();
        if (!Ue || s || Ue.locked === !0) return;
        n.interaction = {
          kind: "pan_frame",
          shot: Ue,
          last: Fe,
          start: {
            yaw_deg: Number(Ue.yaw_deg || 0),
            pitch_deg: Number(Ue.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const Ue = n.mode === "unwrap" ? Fe : Tt(Oe);
        n.interaction = { kind: "view", last: Ue, lastTs: performance.now() }, m.startDrag(Ue.x, Ue.y, Oe.pointerId, performance.now());
      }
      Nt(Fe), t.setPointerCapture(Oe.pointerId);
      return;
    }
    if (Oe.button !== 0) return;
    if (n.mode === "frame" && (Oe.altKey || Oe.shiftKey) && !s) {
      const Ue = ie(), We = _(Ue);
      if (!Ue || Ue.locked === !0 || !We) return;
      const qe = Qm({
        frame: We,
        point: Fe,
        startRollDeg: Number(Ue.roll_deg ?? Ue.rot_deg ?? 0),
        shiftKey: Oe.shiftKey,
        altKey: Oe.altKey,
        allowAlt: !0
      });
      if (!qe) return;
      n.interaction = {
        kind: "roll_frame",
        shot: Ue,
        center: qe.center,
        lastAngle: qe.lastAngle,
        accumulatedRad: qe.accumulatedRad,
        rollGesture: qe,
        start: { roll_deg: Number(Ue.roll_deg ?? Ue.rot_deg ?? 0) },
        changed: !1,
        altStarted: qe.source === "alt",
        source: qe.source
      }, t.setPointerCapture(Oe.pointerId), Oe.preventDefault(), po(), $e({ localOnly: !0 });
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      so(Fe, Oe.pointerId), Oe.preventDefault();
      return;
    }
    if (s) {
      n.mode === "pano" && yo(Oe, Fe);
      return;
    }
    if (a && !a.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (ba() || uo())) {
      if (!de()) return;
      co();
      const Ue = n.primaryTool === "mask" ? "mask" : "paint", We = n.primaryTool === "mask" ? n.maskTool : n.paintTool, qe = n.mode === "frame" && uo() ? ie() : null, Xt = { kind: "ERP_GLOBAL" }, _t = qe ? Pt(Fe, qe, performance.now()) : Dt(Fe, performance.now());
      if (!_t) {
        Nt(Fe);
        return;
      }
      n.interaction = {
        kind: We === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: Ue,
        _livePreviewToken: Di("live"),
        stroke: We === "lasso_fill" ? me(Ue, We, [_t], Xt) : $(Ue, We, [_t], Xt)
      }, Pe();
      const br = Se(n.interaction);
      if (br)
        if (n.paintEngine.beginStroke(n.interaction.stroke, br), n.interaction.kind === "paint_stroke") {
          const vi = n.paintEngine.ensureTarget(br), _i = Number((_t == null ? void 0 : _t.u) ?? (_t == null ? void 0 : _t.x) ?? 0), Si = Number((_t == null ? void 0 : _t.v) ?? (_t == null ? void 0 : _t.y) ?? 0);
          n.paintEngine.appendStrokePoint(vi, _i, Si, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, br);
      Nt(Fe), t.setPointerCapture(Oe.pointerId), $e();
      return;
    }
    const mt = A(), Ye = M(), Je = mt.length > 1 ? H(mt) : Ye ? E(Ye) : null;
    if (n.primaryTool === "cursor" && (Oe.ctrlKey || Oe.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Fe, current: Fe }, Nt(Fe), t.setPointerCapture(Oe.pointerId), $e({ localOnly: !0, reason: lt.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && P() && Ne() && ga(Oe, Fe) || n.primaryTool === "cursor" && c && R() && Ma(Oe, Fe)) return;
    if (mt.length > 1 && (Je != null && Je.visible)) {
      if ((mt.some((We) => p(We)) ? { kind: "none" } : W(Je, Fe)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: mt.map((We) => We),
          offset: { x: Fe.x - Je.center.x, y: Fe.y - Je.center.y },
          startCenter: { x: Je.center.x, y: Je.center.y },
          stickerSnapshots: mt.filter((We) => se(We)).map((We) => ({
            id: String(We.id || ""),
            yaw_deg: Number(Te(We).yaw_deg || 0),
            pitch_deg: Number(Te(We).pitch_deg || 0),
            center: (() => {
              var Xt, _t;
              const qe = E(We);
              return qe != null && qe.visible ? { x: Number(((Xt = qe.center) == null ? void 0 : Xt.x) || 0), y: Number(((_t = qe.center) == null ? void 0 : _t.y) || 0) } : { x: Fe.x, y: Fe.y };
            })()
          })),
          strokeSnapshots: mt.filter((We) => ye(We)).map((We) => ({
            id: String(We.actionGroupId || We.id || ""),
            layerKind: String(We.layerKind || "paint"),
            snapshot: ln(te(We.actionGroupId, We.layerKind)),
            frameSnapshot: ln(fe(We.actionGroupId, We.layerKind)),
            center: (() => {
              var Xt, _t;
              const qe = E(We);
              return qe != null && qe.visible ? { x: Number(((Xt = qe.center) == null ? void 0 : Xt.x) || 0), y: Number(((_t = qe.center) == null ? void 0 : _t.y) || 0) } : { x: Fe.x, y: Fe.y };
            })(),
            centerUv: B(We.actionGroupId, We.layerKind)
          })),
          rasterSnapshots: mt.filter((We) => j(We)).map((We) => ({
            id: Me(We.rasterObjectId || We.id || ""),
            snapshot: ln(x().find((qe) => String((qe == null ? void 0 : qe.id) || "") === Me(We.rasterObjectId || We.id || ""))),
            center: (() => {
              var Xt, _t;
              const qe = E(We);
              return qe != null && qe.visible ? { x: Number(((Xt = qe.center) == null ? void 0 : Xt.x) || 0), y: Number(((_t = qe.center) == null ? void 0 : _t.y) || 0) } : { x: Fe.x, y: Fe.y };
            })(),
            centerUv: v(We)
          }))
        }, Nt(Fe), t.setPointerCapture(Oe.pointerId);
        return;
      }
    } else if (Ye && (Je != null && Je.visible)) {
      const Ue = p(Ye) ? { kind: "none" } : W(Je, Fe, Ye);
      if (Ue.kind === "scale") {
        n.interaction = ye(Ye) ? {
          kind: "scale_stroke_group",
          item: Ye,
          center: Je.center,
          startDist: Math.max(1, Math.hypot(Fe.x - Je.center.x, Fe.y - Je.center.y)),
          snapshot: ln(te(Ye.actionGroupId, Ye.layerKind)),
          frameSnapshot: ln(fe(Ye.actionGroupId, Ye.layerKind)),
          cursor: Ue.cursor
        } : j(Ye) ? {
          kind: "scale_raster_object",
          item: Ye,
          center: Je.center,
          startDist: Math.max(1, Math.hypot(Fe.x - Je.center.x, Fe.y - Je.center.y)),
          snapshot: ln(x().find((We) => String((We == null ? void 0 : We.id) || "") === Me(Ye.rasterObjectId || Ye.id || ""))),
          cursor: Ue.cursor
        } : {
          kind: "scale",
          item: Ye,
          center: Je.center,
          startDist: Math.max(1, Math.hypot(Fe.x - Je.center.x, Fe.y - Je.center.y)),
          startHFOV: Number(Te(Ye).hFOV_deg || 20),
          startVFOV: Number(Te(Ye).vFOV_deg || 20),
          cursor: Ue.cursor
        }, Nt(Fe), t.setPointerCapture(Oe.pointerId);
        return;
      }
      if (Ue.kind === "scale_x" || Ue.kind === "scale_y") {
        n.interaction = {
          kind: Ue.kind,
          item: Ye,
          center: Je.center,
          startDist: Math.max(1, Math.hypot(Fe.x - Je.center.x, Fe.y - Je.center.y)),
          startHFOV: Number(Te(Ye).hFOV_deg || 20),
          startVFOV: Number(Te(Ye).vFOV_deg || 20),
          cursor: Ue.cursor,
          edge: Ue.edge
        }, Nt(Fe), t.setPointerCapture(Oe.pointerId);
        return;
      }
      if (Ue.kind === "rotate") {
        n.interaction = ye(Ye) ? {
          kind: "rotate_stroke_group",
          item: Ye,
          center: Je.center,
          startAng: Math.atan2(Fe.y - Je.center.y, Fe.x - Je.center.x),
          snapshot: ln(te(Ye.actionGroupId, Ye.layerKind)),
          frameSnapshot: ln(fe(Ye.actionGroupId, Ye.layerKind))
        } : {
          kind: "rotate",
          item: Ye,
          center: Je.center,
          startRot: Number(Te(Ye).rot_deg || Te(Ye).roll_deg || 0),
          startAng: Math.atan2(Fe.y - Je.center.y, Fe.x - Je.center.x)
        }, Nt(Fe), t.setPointerCapture(Oe.pointerId);
        return;
      }
      if (Ue.kind === "move") {
        if (ye(Ye)) {
          const We = n.mode === "frame" ? (() => {
            const qe = ie();
            return qe ? Pt(Fe, qe, performance.now()) : null;
          })() : Dt(Fe, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Ye,
            startUv: We,
            snapshot: ln(te(Ye.actionGroupId, Ye.layerKind)),
            frameSnapshot: ln(fe(Ye.actionGroupId, Ye.layerKind))
          }, Nt(Fe), t.setPointerCapture(Oe.pointerId);
          return;
        }
        if (j(Ye)) {
          const We = n.mode === "frame" ? (() => {
            const qe = ie();
            return qe ? Pt(Fe, qe, performance.now()) : null;
          })() : Dt(Fe, performance.now());
          n.interaction = {
            kind: "move_raster_object",
            item: Ye,
            startUv: We,
            snapshot: ln(x().find((qe) => String((qe == null ? void 0 : qe.id) || "") === Me(Ye.rasterObjectId || Ye.id || "")))
          }, Nt(Fe), t.setPointerCapture(Oe.pointerId);
          return;
        }
        n.interaction = {
          kind: "move",
          item: Ye,
          offset: { x: Fe.x - Je.center.x, y: Fe.y - Je.center.y }
        }, Nt(Fe), t.setPointerCapture(Oe.pointerId);
        return;
      }
    }
    const et = we(Fe);
    if (et) {
      const Ue = n.selectedId !== et.item.id;
      if (Ue && n.selectedId && (Ie(), Y()), wt(et.item), u && Ue && (n.cutoutAspectOpen = !1), Ue && rr(), _n(), $e(), p(et.item)) {
        Nt(Fe);
        return;
      }
      n.interaction = {
        kind: ye(et.item) ? "move_stroke_group" : j(et.item) ? "move_raster_object" : "move",
        item: et.item,
        offset: { x: Fe.x - et.geom.center.x, y: Fe.y - et.geom.center.y },
        startUv: ye(et.item) || j(et.item) ? n.mode === "frame" ? (() => {
          const We = ie();
          return We ? Pt(Fe, We, performance.now()) : null;
        })() : Dt(Fe, performance.now()) : null,
        snapshot: ye(et.item) ? ln(te(et.item.actionGroupId, et.item.layerKind)) : j(et.item) ? ln(x().find((We) => String((We == null ? void 0 : We.id) || "") === Me(et.item.rasterObjectId || et.item.id || ""))) : null,
        frameSnapshot: ye(et.item) ? ln(fe(et.item.actionGroupId, et.item.layerKind)) : null
      }, Nt(Fe), t.setPointerCapture(Oe.pointerId);
      return;
    }
    const Fn = !!n.selectedId;
    Fn && (Ie(), Y()), Z(), Fn && rr(), _n(), $e(), n.mode === "pano" && yo(Oe, Fe);
  }
  function yr(Oe, Fe) {
    return i.gizmoPointer(Oe, S(), Fe.x, Fe.y, t.width, t.height);
  }
  function Ma(Oe, Fe) {
    var Je;
    const ke = (Je = X().space) == null ? void 0 : Je.gizmo;
    if (ke && yr("hover", Fe) !== null && yr("down", Fe))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: ke.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: ke.transform,
        base: hi(Qt(), n.frame),
        changed: !1
      }, t.setPointerCapture(Oe.pointerId), Nt(Fe), !0;
    const ht = A(), at = M(), mt = ht.length > 1 ? ht.some((et) => p(et)) ? "none" : W(H(ht), Fe).kind : at && !p(at) ? W(E(at), Fe, at).kind : "none";
    if (mt !== "none" && mt !== "move") return !1;
    const Ye = i.pickSticker(S(), Fe.x, Fe.y, t.width, t.height);
    return d.stickers.some((et) => et.id === Ye && et.placement === "world") ? (n.worldSelectedId !== Ye && (n.selectedId && (Ie(), Y()), Gt(Ye), rr(), _n(), fo(), $e()), n.interaction = { kind: "world_select" }, t.setPointerCapture(Oe.pointerId), !0) : !1;
  }
  function Pa(Oe) {
    var ht;
    const ke = !!(n.worldSelectedId || ue()) && n.primaryTool === "cursor" && R() && !!((ht = X().space) != null && ht.gizmo) ? yr("hover", Oe) : null;
    ke !== n.gizmoAxis && (n.gizmoAxis = ke, l.backgroundDirty = !0, $e({ localOnly: !0, reason: lt.VIEW }));
  }
  function Na(Oe, Fe) {
    const ke = yr("move", Fe);
    if (ke && Oe.camera) {
      for (const [at, mt] of Object.entries(vf(Oe.mode, Oe.base, Oe.start, ke))) fn(d.camera, at, n.frame, mt);
      va(), Oe.changed = !0, r.request("sidePanel"), $e({ localOnly: !0 });
      return;
    }
    const ht = d.stickers.find((at) => at.id === Oe.id);
    !ke || !ht || (p1(ht, n.frame, vf(Oe.mode, Oe.base, Oe.start, ke)), Oe.changed = !0, he(), r.request("sidePanel"), $e({ localOnly: !0 }));
  }
  function go(Oe) {
    n.interaction = null, n.gizmoAxis = null, Oe.kind === "world_gizmo" && (yr("up", n.pointerPos), l.backgroundDirty = !0, Oe.changed && (Ie(), le(), rr())), Nt(n.pointerPos), $e();
  }
  function yo(Oe, Fe) {
    if (Ne()) {
      const ht = mo().emptyLeft;
      ht && lo(ht, Fe, Oe.pointerId);
      return;
    }
    const ke = Tt(Oe);
    n.interaction = { kind: "view", last: ke, lastTs: performance.now() }, m.startDrag(ke.x, ke.y, Oe.pointerId, performance.now()), Nt(Fe), t.setPointerCapture(Oe.pointerId);
  }
  function Ca(Oe, Fe) {
    if (!f || !Ae.playing || (Ae.stop(), Oe.kind === "frame_pan")) return;
    if (Oe.kind === "frame_orbit") {
      const at = xe();
      at && (Oe.pivot = J(at, O(at), Fe));
      return;
    }
    if (Oe.kind === "world_gizmo") {
      const at = d.stickers.find((mt) => mt.id === Oe.id);
      Oe.camera ? Oe.base = D() : at && (Oe.base = hi(at, n.frame));
      return;
    }
    if (Oe.kind === "move_multi") {
      const at = H(Oe.items);
      if (!(at != null && at.visible)) return;
      Oe.offset = { x: Fe.x - at.center.x, y: Fe.y - at.center.y }, Oe.startCenter = { x: at.center.x, y: at.center.y };
      for (const mt of Oe.stickerSnapshots) {
        const Ye = Oe.items.find((et) => String((et == null ? void 0 : et.id) || "") === mt.id), Je = Ye ? E(Ye) : null;
        Je != null && Je.visible && (mt.yaw_deg = Number(Te(Ye).yaw_deg || 0), mt.pitch_deg = Number(Te(Ye).pitch_deg || 0), mt.center = { x: Je.center.x, y: Je.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(Oe.kind)) return;
    const ke = E(Oe.item);
    if (!(ke != null && ke.visible)) return;
    const ht = Te(Oe.item);
    if (Oe.kind === "move") {
      Oe.offset = { x: Fe.x - ke.center.x, y: Fe.y - ke.center.y };
      return;
    }
    if (Oe.center = ke.center, Oe.kind === "rotate") {
      Oe.startRot = Number(ht.rot_deg || ht.roll_deg || 0), Oe.startAng = Math.atan2(Fe.y - ke.center.y, Fe.x - ke.center.x);
      return;
    }
    Oe.startDist = Math.max(1, Math.hypot(Fe.x - ke.center.x, Fe.y - ke.center.y)), Oe.startHFOV = Number(ht.hFOV_deg || 20), Oe.startVFOV = Number(ht.vFOV_deg || 20);
  }
  function Aa(Oe) {
    var ht, at, mt, Ye, Je, et, Fn, Ue, We, qe, Xt, _t, br, vi, _i, Si, Oa, Fa, bo, Ta, Da, La;
    const Fe = He(Oe);
    if (zt(Fe, !0), !n.interaction) {
      Pa(Fe), Nt(Fe);
      return;
    }
    Nt(Fe);
    const ke = n.interaction;
    if (Lr && (Fe.x !== Lr.x || Fe.y !== Lr.y)) {
      const it = Lr;
      Lr = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(ke.kind) || Ca(ke, it);
    }
    if (ke.kind !== "world_select") {
      if (ke.kind === "world_gizmo") {
        Na(ke, Fe);
        return;
      }
      if (ke.kind === "paint_stroke") {
        const it = typeof Oe.getCoalescedEvents == "function" ? Oe.getCoalescedEvents() : [Oe];
        let ct = !1;
        it.forEach((ft) => {
          const pt = He(ft);
          if (n.mode === "frame") {
            const on = ie(), Wt = on ? _(on) : null;
            if (Wt) {
              const mn = (pt.x - Wt.x) / Math.max(1, Wt.w), gt = (pt.y - Wt.y) / Math.max(1, Wt.h);
              if (!(mn >= 0 && mn <= 1 && gt >= 0 && gt <= 1)) {
                ke._outOfFrame = !0;
                return;
              }
              ke._outOfFrame && (ke._outOfFrame = !1, F(ke));
            }
          }
          z(ke, pt, performance.now()) && (ct = !0);
        }), ct && $e({ localOnly: !0, reason: lt.PAINT });
        return;
      }
      if (ke.kind === "paint_lasso_fill") {
        const it = typeof Oe.getCoalescedEvents == "function" ? Oe.getCoalescedEvents() : [Oe];
        let ct = !1;
        if (it.forEach((ft) => {
          const pt = He(ft);
          if (n.mode === "frame") {
            const on = ie(), Wt = on ? _(on) : null;
            if (Wt) {
              const mn = (pt.x - Wt.x) / Math.max(1, Wt.w), gt = (pt.y - Wt.y) / Math.max(1, Wt.h);
              if (!(mn >= 0 && mn <= 1 && gt >= 0 && gt <= 1)) {
                ke._outOfFrame = !0;
                return;
              }
              ke._outOfFrame && (ke._outOfFrame = !1, y(ke));
            }
          }
          K(ke, pt, performance.now()) && (ct = !0);
        }), ct) {
          const ft = Se(ke);
          ft && n.paintEngine.updateActiveStroke(ke.stroke, ft), $e({ localOnly: !0, reason: lt.PAINT });
        }
        return;
      }
      if (ke.kind === "view") {
        const it = performance.now(), ct = n.mode === "unwrap" ? Fe : Tt(Oe);
        m.moveDrag(ct.x, ct.y, n.mode === "unwrap" ? "unwrap" : "pano", it), ke.lastTs = it, ke.last = ct, $e({ localOnly: !0, reason: lt.VIEW });
        return;
      }
      if (ke.kind === "frame_pan" || ke.kind === "frame_orbit") {
        oe(ke, Fe);
        return;
      }
      if (ke.kind === "space_pan" || ke.kind === "space_orbit") {
        const it = nr();
        In(ke.kind === "space_pan" ? cm(it, Fe.x - ke.last.x, Fe.y - ke.last.y, t.width, t.height, ke.depth) : lm(it, Fe.x - ke.last.x, Fe.y - ke.last.y, t.height, ke.pivot)), ke.last = Fe;
        return;
      }
      if (ke.kind === "pan_frame") {
        const it = re(ke.shot);
        if (!it || !ke.shot) return;
        const ct = Fe.x - ke.last.x, ft = Fe.y - ke.last.y, pt = tg(ke.shot, {
          dx: ct,
          dy: ft,
          focalPx: it.focalPx,
          invertX: ((ht = d.ui_settings) == null ? void 0 : ht.invert_view_x) === !0,
          invertY: ((at = d.ui_settings) == null ? void 0 : at.invert_view_y) === !0
        });
        ke.shot.yaw_deg = pt.yaw_deg, ke.shot.pitch_deg = pt.pitch_deg, ke.changed = ke.changed || Math.abs(ct) > 0 || Math.abs(ft) > 0, ke.last = Fe, $e({ localOnly: !0 });
        return;
      }
      if (ke.kind === "roll_frame") {
        if (ke.source === "knob") return;
        U(ke, Fe, Oe);
        return;
      }
      if (ke.kind === "move") {
        const it = Fe.x - ke.offset.x, ct = Fe.y - ke.offset.y;
        if (n.mode === "frame" && u) {
          const ft = ie(), pt = _(ft);
          if (!ft || !pt) return;
          const on = {
            x: Ee((it - pt.x) / Math.max(1, pt.w), 0, 1),
            y: Ee((ct - pt.y) / Math.max(1, pt.h), 0, 1)
          }, Wt = Q(ft, on);
          if (!Wt) return;
          const mn = Xa(Wt);
          On(ke.item, { yaw_deg: mn.yaw, pitch_deg: mn.pitch });
        } else if (n.mode === "unwrap") {
          const ft = ge(), pt = Ee((it - ft.x) / Math.max(ft.w, 1), 0, 1), on = Ee((ct - ft.y) / Math.max(ft.h, 1), 0, 1);
          On(ke.item, { yaw_deg: $t(pt * 360 - 180), pitch_deg: Ee(90 - on * 180, -90, 90) });
        } else {
          const ft = Et(it, ct), pt = Xa(ft);
          On(ke.item, { yaw_deg: pt.yaw, pitch_deg: pt.pitch });
        }
        se(ke.item) && he(), $e({ localOnly: !0 });
        return;
      }
      if (ke.kind === "move_stroke_group") {
        const it = n.mode === "frame" ? (() => {
          const pt = ie();
          return pt ? Pt(Fe, pt, performance.now()) : null;
        })() : Dt(Fe, performance.now());
        if (!it || !ke.startUv) return;
        const ct = En(Number(it.u || 0), Number(ke.startUv.u || 0)), ft = Number(it.v || 0) - Number(ke.startUv.v || 0);
        q((mt = ke.item) == null ? void 0 : mt.actionGroupId, ct, ft, ke.snapshot, (Ye = ke.item) == null ? void 0 : Ye.layerKind, ke.frameSnapshot) && (be({ rebuildPaintEngine: !1 }), $e({ localOnly: !0, reason: lt.PAINT }));
        return;
      }
      if (ke.kind === "move_raster_object") {
        const it = n.mode === "frame" ? (() => {
          const pt = ie();
          return pt ? Pt(Fe, pt, performance.now()) : null;
        })() : Dt(Fe, performance.now());
        if (!it || !ke.startUv) return;
        const ct = En(Number(it.u || 0), Number(ke.startUv.u || 0)), ft = Number(it.v || 0) - Number(ke.startUv.v || 0);
        L(((Je = ke.item) == null ? void 0 : Je.rasterObjectId) || ((et = ke.item) == null ? void 0 : et.id) || "", ct, ft, ke.snapshot) && (ee(), $e({ localOnly: !0, reason: lt.PAINT }));
        return;
      }
      if (ke.kind === "scale_raster_object") {
        const ct = Math.max(1, Math.hypot(Fe.x - ke.center.x, Fe.y - ke.center.y)) / Math.max(1, Number(ke.startDist || 1));
        C(((Fn = ke.item) == null ? void 0 : Fn.rasterObjectId) || ((Ue = ke.item) == null ? void 0 : Ue.id) || "", ct, ke.snapshot) && (ee(), $e({ localOnly: !0, reason: lt.PAINT }));
        return;
      }
      if (ke.kind === "move_multi") {
        const it = Fe.x - Number(((We = ke.offset) == null ? void 0 : We.x) || 0), ct = Fe.y - Number(((qe = ke.offset) == null ? void 0 : qe.y) || 0);
        let ft = !1, pt = !1, on = !1;
        const Wt = it - Number(((Xt = ke.startCenter) == null ? void 0 : Xt.x) || it), mn = ct - Number(((_t = ke.startCenter) == null ? void 0 : _t.y) || ct);
        for (const gt of Array.isArray(ke.stickerSnapshots) ? ke.stickerSnapshots : []) {
          const rn = (g === "cutout" ? _e() : w()).find((Ft) => String((Ft == null ? void 0 : Ft.id) || "") === String(gt.id || ""));
          if (!rn || !se(rn)) continue;
          const Ot = {
            x: Number(((br = gt.center) == null ? void 0 : br.x) || 0) + Wt,
            y: Number(((vi = gt.center) == null ? void 0 : vi.y) || 0) + mn
          };
          if (n.mode === "frame" && u) {
            const Ft = ie(), jt = _(Ft);
            if (!Ft || !jt) continue;
            const Re = {
              x: Ee((Ot.x - jt.x) / Math.max(1, jt.w), 0, 1),
              y: Ee((Ot.y - jt.y) / Math.max(1, jt.h), 0, 1)
            }, Ze = Q(Ft, Re);
            if (!Ze) continue;
            const Sn = Xa(Ze);
            On(rn, { yaw_deg: Sn.yaw, pitch_deg: Sn.pitch });
          } else if (n.mode === "unwrap") {
            const Ft = ge(), jt = Ee((Ot.x - Ft.x) / Math.max(Ft.w, 1), 0, 1), Re = Ee((Ot.y - Ft.y) / Math.max(Ft.h, 1), 0, 1);
            On(rn, { yaw_deg: $t(jt * 360 - 180), pitch_deg: Ee(90 - Re * 180, -90, 90) });
          } else {
            const Ft = Et(Ot.x, Ot.y), jt = Xa(Ft);
            On(rn, { yaw_deg: jt.yaw, pitch_deg: jt.pitch });
          }
          ft = !0;
        }
        for (const gt of Array.isArray(ke.strokeSnapshots) ? ke.strokeSnapshots : []) {
          const rn = {
            x: Number(((_i = gt.center) == null ? void 0 : _i.x) || 0) + Wt,
            y: Number(((Si = gt.center) == null ? void 0 : Si.y) || 0) + mn
          }, Ot = n.mode === "frame" ? (() => {
            const jt = ie();
            return jt ? Pt(rn, jt, performance.now()) : null;
          })() : Dt(rn, performance.now()), Ft = gt.centerUv || null;
          if (Ot && Ft) {
            const jt = En(Number(Ot.u || 0), Number(Ft.u || 0)), Re = Number(Ot.v || 0) - Number(Ft.v || 0);
            q(gt.id, jt, Re, gt.snapshot, gt.layerKind, gt.frameSnapshot) && (ft = !0, pt = !0);
          }
        }
        for (const gt of Array.isArray(ke.rasterSnapshots) ? ke.rasterSnapshots : []) {
          const rn = {
            x: Number(((Oa = gt.center) == null ? void 0 : Oa.x) || 0) + Wt,
            y: Number(((Fa = gt.center) == null ? void 0 : Fa.y) || 0) + mn
          }, Ot = n.mode === "frame" ? (() => {
            const jt = ie();
            return jt ? Pt(rn, jt, performance.now()) : null;
          })() : Dt(rn, performance.now()), Ft = gt.centerUv || null;
          if (Ot && Ft) {
            const jt = En(Number(Ot.u || 0), Number(Ft.u || 0)), Re = Number(Ot.v || 0) - Number(Ft.v || 0);
            L(gt.id, jt, Re, gt.snapshot) && (ft = !0, on = !0);
          }
        }
        ft && (pt ? be({ rebuildPaintEngine: !1 }) : on ? ee() : he(), $e({ localOnly: !0 }));
        return;
      }
      if (ke.kind === "scale_stroke_group") {
        const ct = Math.max(1, Math.hypot(Fe.x - ke.center.x, Fe.y - ke.center.y)) / Math.max(1, Number(ke.startDist || 1));
        ce((bo = ke.item) == null ? void 0 : bo.actionGroupId, ct, 0, ke.snapshot, (Ta = ke.item) == null ? void 0 : Ta.layerKind, ke.frameSnapshot) && (be({ rebuildPaintEngine: !1 }), $e({ localOnly: !0, reason: lt.PAINT }));
        return;
      }
      if (ke.kind === "rotate_stroke_group") {
        let it = (Math.atan2(Fe.y - ke.center.y, Fe.x - ke.center.x) - Number(ke.startAng || 0)) * mi;
        Oe.shiftKey && (it = Math.round(it / 45) * 45), ce((Da = ke.item) == null ? void 0 : Da.actionGroupId, 1, it, ke.snapshot, (La = ke.item) == null ? void 0 : La.layerKind, ke.frameSnapshot) && (be({ rebuildPaintEngine: !1 }), $e({ localOnly: !0, reason: lt.PAINT }));
        return;
      }
      if (ke.kind === "marquee_select") {
        ke.current = Fe, $e({ localOnly: !0, reason: lt.OVERLAY });
        return;
      }
      if (ke.kind === "scale") {
        const ct = Math.max(1, Math.hypot(Fe.x - ke.center.x, Fe.y - ke.center.y)) / ke.startDist;
        On(ke.item, { hFOV_deg: Ee(ke.startHFOV * ct, 1, 179), vFOV_deg: Ee(ke.startVFOV * ct, 1, 179) }), N(ke.item) || (ke.item.aspect_id = ui(ke.item)), se(ke.item) && he(), $e({ localOnly: !0 });
        return;
      }
      if (ke.kind === "scale_x") {
        const ct = Math.max(1, Math.hypot(Fe.x - ke.center.x, Fe.y - ke.center.y)) / ke.startDist;
        On(ke.item, { hFOV_deg: Ee(ke.startHFOV * ct, 1, 179) }), N(ke.item) || (ke.item.aspect_id = ui(ke.item)), se(ke.item) && he(), $e({ localOnly: !0 });
        return;
      }
      if (ke.kind === "scale_y") {
        const ct = Math.max(1, Math.hypot(Fe.x - ke.center.x, Fe.y - ke.center.y)) / ke.startDist;
        On(ke.item, { vFOV_deg: Ee(ke.startVFOV * ct, 1, 179) }), N(ke.item) || (ke.item.aspect_id = ui(ke.item)), se(ke.item) && he(), $e({ localOnly: !0 });
        return;
      }
      if (ke.kind === "rotate") {
        let ct = (Math.atan2(Fe.y - ke.center.y, Fe.x - ke.center.x) - ke.startAng) * mi, ft = ke.startRot - ct;
        Oe.shiftKey && (ft = Math.round(ft / 45) * 45), On(ke.item, { [se(ke.item) ? "rot_deg" : "roll_deg"]: ft }), se(ke.item) && he(), $e({ localOnly: !0 });
      }
    }
  }
  function Ia() {
    var Fe, ke, ht, at, mt, Ye, Je;
    const Oe = n.interaction;
    if (!((Oe == null ? void 0 : Oe.kind) === "roll_frame" && Oe.source === "knob")) {
      if ((Oe == null ? void 0 : Oe.kind) === "space_pan" || (Oe == null ? void 0 : Oe.kind) === "space_orbit") {
        n.interaction = null, Nt(n.pointerPos), _n();
        return;
      }
      if ((Oe == null ? void 0 : Oe.kind) === "world_select" || (Oe == null ? void 0 : Oe.kind) === "world_gizmo") {
        go(Oe);
        return;
      }
      if (((Fe = n.interaction) == null ? void 0 : Fe.kind) === "paint_stroke" || ((ke = n.interaction) == null ? void 0 : ke.kind) === "paint_lasso_fill") {
        Pe();
        const et = ae(n.interaction), Fn = !!n.interaction._hasCommittedSegments;
        if (et || Fn) {
          be();
          const Ue = String(((ht = n.interaction.stroke) == null ? void 0 : ht.actionGroupId) || "").trim();
          if (Ue) {
            const qe = G().find((Xt) => String((Xt == null ? void 0 : Xt.actionGroupId) || "") === Ue);
            qe && (qe.frame = null);
          }
          const We = Se(n.interaction);
          We && (et ? String(((at = n.interaction.stroke) == null ? void 0 : at.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(We), Be()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, We) : n.paintEngine.cancelActiveStroke(We)), Ie(), Y(), rr(), _n(), o.setDirtyCanvas(!0, !0), $e();
        } else {
          const Ue = Se(n.interaction);
          Ue && n.paintEngine.cancelActiveStroke(Ue);
        }
      } else if (((mt = n.interaction) == null ? void 0 : mt.kind) === "marquee_select") {
        const et = Le(n.interaction.start, n.interaction.current), Ue = [
          ...g === "cutout" ? I().filter((We) => !b(We)) : [...w()],
          ...k(),
          ...V()
        ].filter((We) => je(et, E(We)));
        Ge(Ue, ((Ye = Ue[Ue.length - 1]) == null ? void 0 : Ye.id) || null), u && Ue.length && (n.cutoutAspectOpen = !1), rr(), _n(), $e();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((Je = n.interaction) == null ? void 0 : Je.kind))
        n.interaction.changed && (Ie(), le(), rr());
      else if (n.interaction && n.interaction.kind !== "view") {
        let et = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (et = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (et = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (et = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (et = !0), et && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? be({ rebuildPaintEngine: !0 }) : ee()), Ie(), Y(), o.setDirtyCanvas(!0, !0), _a(), _n(), $e();
      }
      n.interaction = null, (Oe == null ? void 0 : Oe.kind) === "roll_frame" && pe(), Pe(), Oe && Oe.kind === "view" && ao(() => m.endDrag(performance.now())), ho(), _n(), Nt(n.pointerPos), $e();
    }
  }
  function xl() {
    var Oe, Fe, ke, ht, at;
    if (!T()) {
      if (((Oe = n.interaction) == null ? void 0 : Oe.kind) === "world_select" || ((Fe = n.interaction) == null ? void 0 : Fe.kind) === "world_gizmo") {
        go(n.interaction);
        return;
      }
      if (((ke = n.interaction) == null ? void 0 : ke.kind) === "view" && ao(() => m.endDrag(performance.now())), ((ht = n.interaction) == null ? void 0 : ht.kind) === "paint_stroke" || ((at = n.interaction) == null ? void 0 : at.kind) === "paint_lasso_fill") {
        Pe();
        const mt = Se(n.interaction);
        mt && n.paintEngine.cancelActiveStroke(mt);
      }
      n.interaction = null, Pe(), ho(), Nt(n.pointerPos), $e({ localOnly: !0 });
    }
  }
  function kl(Oe) {
    const Fe = He(Oe), ke = zt(Fe, !0);
    n.interaction || (Nt(Fe), ke && n.mode === "frame" && n.primaryTool === "cursor" && $e({ localOnly: !0, reason: lt.OVERLAY }));
  }
  function Ea(Oe) {
    if (n.mode === "frame") {
      const Fe = He(Oe), ke = Cs(Oe);
      ke && co(), ke && ve() ? wa(Fe, -ke) : ke && xa(Fe, ke) && $e({ localOnly: !0 }), Oe.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (ne(), Ne()) {
        const Fe = Cs(Oe);
        Fe && ka(He(Oe), -Fe);
      } else m.applyWheelEvent(Oe) && $e({ localOnly: !0, reason: lt.VIEW });
      Oe.preventDefault();
    }
  }
  return {
    connect(Oe) {
      ({
        _segmentFrameLassoFill: y,
        _segmentFrameStroke: F,
        appendLassoPoint: K,
        appendPaintPoint: z,
        applyRasterObjectOffset: L,
        applyRasterObjectTransform: C,
        applySharedRollInteractionPoint: U,
        applyStrokeGroupOffset: q,
        applyStrokeGroupTransform: ce,
        buildFreehandStrokeRecord: $,
        buildLassoFillStrokeRecord: me,
        cameraShoots: P,
        cancelFrameCameraGesture: T,
        cancelViewTransition: ne,
        clearSelection: Z,
        commitAndRefreshNode: le,
        commitPaintInteraction: ae,
        commitState: Y,
        currentSpaceCamera: S,
        cutoutCamera: D,
        dragFrame: oe,
        editorViewInput: X,
        ensureGroupFrame: fe,
        frameContext: xe,
        frameLocalPointToWorldDir: Q,
        frameSpaceView: O,
        frameTarget: J,
        getActiveCutoutShot: ie,
        getActivePaintTargetDescriptor: Se,
        getCutoutSelectableItems: _e,
        getCutoutSelectableItemsForHit: I,
        getFrameViewLayout: re,
        getFrameViewRect: _,
        getList: w,
        getMultiSelectionGeom: H,
        getPaintingGroupList: G,
        getRasterObjectCenterUv: v,
        getRasterObjectList: x,
        getSelectableRasterObjectItems: V,
        getSelectableStrokeGroupItems: k,
        getSelected: M,
        getSelectedItems: A,
        getStrokeGroupCenterUv: B,
        getStrokeGroupStrokes: te,
        getUnwrapRect: ge,
        handleHit: W,
        hideTooltip: pe,
        hitObjectAt: we,
        invalidateLivePaintPreviewCaches: Pe,
        isCameraSelected: ue,
        isFreeFrameView: ve,
        isFreeSpaceView: Ne,
        isItemLocked: p,
        isRasterObjectItem: j,
        isSceneSticker: N,
        isShotItem: b,
        isSpaceView: R,
        isStickerItem: se,
        isStrokeGroupItem: ye,
        markObjectVisualsDirty: he,
        markPaintCompositeVisualsDirty: ee,
        markPaintStrokeVisualsDirty: be,
        objectGeom: E,
        paintingShown: de,
        parseRasterObjectSelectionId: Me,
        playback: Ae,
        poseOf: Te,
        pushHistory: Ie,
        rectFromPoints: Le,
        rectIntersectsGeom: je,
        refreshPaintEngineRevisionCache: Be,
        requestDraw: $e,
        screenPos: He,
        screenPosCss: Tt,
        screenPosToErpPoint: Dt,
        screenPosToFrameAsErpPoint: Pt,
        screenToWorldDir: Et,
        selectWorldSticker: Gt,
        selectedWorldSticker: Qt,
        setPointerPos: zt,
        setSelectedItem: wt,
        setSelectedItems: Ge,
        setSpaceView: In,
        shortestWrappedDelta: En,
        spaceViewState: nr,
        startAnimation: ao,
        startCameraPress: ga,
        startFrameDrag: ya,
        startPanFrame: so,
        startSpaceDrag: lo,
        stopTimelinePlayback: co,
        supportsErpPainting: ba,
        supportsFramePainting: uo,
        syncCutoutShot: va,
        syncFloatingViewButtonState: fo,
        syncFrameRollKnob: po,
        syncSidePanelControls: _a,
        syncTimeline: Sa,
        syncViewToggleState: ho,
        updateCursor: Nt,
        updateSelectionMenu: _n,
        updateSidePanel: rr,
        viewControls: mo,
        writePose: On,
        zoomFrameAt: wa,
        zoomFrameViewAt: xa,
        zoomSpaceAt: ka
      } = Oe);
    },
    onCanvasPointerDown: wl,
    worldGizmoPointer: yr,
    hoverWorldGizmo: Pa,
    onCanvasPointerMove: Aa,
    onCanvasPointerUp: Ia,
    onCanvasPointerCancel: xl,
    onCanvasMouseMove: kl,
    onCanvasWheel: Ea
  };
}
function WN(e) {
  const {
    cameraV2: t,
    coverageWidget: r,
    editor: n,
    node: i,
    previewMode: o,
    runtime: a,
    shotEditor: s,
    state: l,
    studio: c,
    type: u,
    uiState: d
  } = e;
  let f, h, g, m, y, F, K, z, L, C, U, q, ce, $, me, P, T, ne, Z, le, ae, Y, S, D, oe, X, fe, xe, Q;
  function O(_e, I, re = !1) {
    var V;
    Y();
    const _ = s && n.mode === "frame" ? F() : null, w = _ || L(), H = _ ? "shot" : U(), G = le();
    if (G && !xe(G) || !G && (!w || H === "stroke" || q(w))) return;
    const v = (((V = d.sidePanel) == null ? void 0 : V.params) || []).find((k) => k.key === _e);
    if (!v || v.enabled === !1) return;
    let x = Number(I);
    if (Number.isNaN(x) && (x = 0), (G || t) && QM.has(_e) ? x = _e === "scale" ? Math.max(x, kg) : x : x = Ee(x, Number(v.min), Number(v.max)), _e === "yaw_deg" && (x = $t(x)), !G && t && _e.startsWith("position_")) {
      D(), c1(l.camera, n.frame, _e, x), fe(), Z(), re && ne();
      return;
    }
    if (G) {
      f1(G, n.frame, _e, x), me(), fe(), Z(), re && ne();
      return;
    }
    _e === "opacity" ? u1(w, n.frame, x / 100) : Q(w, { [_e]: x }), s && !ce(w) && (_e === "hFOV_deg" || _e === "vFOV_deg") && (w.aspect_id = ui(w)), fe(), Z(), re && ne();
  }
  async function J(_e) {
    var _, w, H, G, v, x, V;
    const I = _e.target.closest("[data-action]");
    if (!I) return;
    const re = String(I.getAttribute("data-action") || "");
    if (re === "coverage-set") {
      const k = vn(I.getAttribute("data-coverage"));
      if (k === vn(l.coverage)) return;
      l.coverage = k, n.coverage = k, r && (r.value = String(k)), o ? a.backgroundDirty = !0 : (y(), S({
        syncPreview: u !== "cutout",
        syncGraph: u !== "cutout"
      })), fe(), X(), Z();
      return;
    }
    if (re === "toggle-selection-picker") {
      if ((w = (_ = d.sidePanel) == null ? void 0 : _.selectionPicker) != null && w.disabled) return;
      d.sidePanel.selectionPicker.open = !d.sidePanel.selectionPicker.open;
      return;
    }
    if (re === "select-picker-item") {
      d.sidePanel.selectionPicker.open = !1;
      const k = String(I.getAttribute("data-selection-id") || "");
      let M = null;
      if (k && (u === "stickers" ? M = [...z(), ...c ? l.shots : []].find((A) => String((A == null ? void 0 : A.id) || "") === k) || null : M = ((H = K().find((A) => {
        var B;
        return String(((B = A == null ? void 0 : A.item) == null ? void 0 : B.id) || "") === k;
      })) == null ? void 0 : H.item) || null), ae(M || null), M && !$(M)) {
        const A = T(M);
        oe($t(Number(A.yaw_deg || 0)), Ee(Number(A.pitch_deg || 0), -89.9, 89.9));
      }
      fe(), X(), Z();
      return;
    }
    if (re === "copy-state-inline") {
      const k = L(), M = U();
      if (!k || M === "stroke" || C().length > 1) return;
      const A = JSON.stringify(s && M !== "image" ? h(k) : g(T(k)));
      try {
        await navigator.clipboard.writeText(A), (G = d.sidePanel) != null && G.copyStateButton && (d.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var B;
          (B = d.sidePanel) != null && B.copyStateButton && (d.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (re === "set-invert-x") {
      l.ui_settings.invert_view_x = I.getAttribute("data-value") === "1", P(), fe(), (v = i.setDirtyCanvas) == null || v.call(i, !0, !0), Z();
      return;
    }
    if (re === "set-invert-y") {
      l.ui_settings.invert_view_y = I.getAttribute("data-value") === "1", P(), fe(), (x = i.setDirtyCanvas) == null || x.call(i, !0, !0), Z();
      return;
    }
    if (re === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, P(), fe(), (V = i.setDirtyCanvas) == null || V.call(i, !0, !0), Z();
      return;
    }
    if (re === "close-preview") {
      m();
      return;
    }
    if (re === "cancel-close") {
      m();
      return;
    }
    re === "save-close" && (f(), m());
  }
  function ie(_e) {
    const I = _e.target.closest("[data-action='param-input']");
    I && O(String(I.getAttribute("data-param-key") || ""), I.value, !1);
  }
  function Se(_e) {
    const I = _e.target.closest("[data-action='param-input']");
    I && O(String(I.getAttribute("data-param-key") || ""), I.value, !0);
  }
  return {
    connect(_e) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: h,
        buildCanonicalSelectedStickerState: g,
        closeEditor: m,
        commitState: y,
        getActiveCutoutShot: F,
        getCutoutInspectorItems: K,
        getList: z,
        getSelected: L,
        getSelectedItems: C,
        getSelectedKind: U,
        isItemLocked: q,
        isSceneSticker: ce,
        isStrokeGroupItem: $,
        markObjectVisualsDirty: me,
        persistUiSettings: P,
        poseOf: T,
        pushHistory: ne,
        requestDraw: Z,
        selectedWorldSticker: le,
        setSelectedItem: ae,
        stopTimelinePlayback: Y,
        syncCoverageChangeToNodePreviews: S,
        syncCutoutShot: D,
        turnViewTo: oe,
        updateSelectionMenu: X,
        updateSidePanel: fe,
        worldStickerEditable: xe,
        writePose: Q
      } = _e);
    },
    onSidePanelClick: J,
    onSidePanelInput: ie,
    onSidePanelChange: Se
  };
}
function KN(e) {
  const {
    editor: t,
    node: r,
    overlay: n,
    paintColorPop: i,
    paintColorSv: o,
    paintHueStrip: a,
    readOnly: s,
    root: l,
    runtime: c,
    shotEditor: u,
    tooltip: d,
    uiState: f,
    videoEl: h
  } = e;
  let g, m, y, F, K, z, L, C, U, q, ce, $, me, P, T, ne, Z, le, ae, Y, S, D, oe, X, fe, xe, Q, O, J, ie, Se, _e, I, re, _, w, H, G, v, x, V, k, M, A, B, te, ge, W, pe, we, Pe;
  const ue = () => {
    if (!t.customPaintSessionStart) return;
    if (Zs(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (yP(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const Ie = [
      Tn(t.customPaintColor),
      ...t.customPaintHistory.filter((Le) => !Zs(Le, t.customPaintColor))
    ];
    t.customPaintHistory = Ie.slice(0, 8), t.customPaintSessionStart = null;
  }, ve = (Ie = !1) => {
    !i || i.hidden || (Ie ? ue() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, Ne = () => {
    i && (i.hidden && (t.customPaintSessionStart = Tn(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function p() {
    v();
  }
  function j(Ie) {
    var Et, Gt, Qt, zt, wt;
    if ((Gt = (Et = Ie.target) == null ? void 0 : Et.matches) != null && Gt.call(Et, "[data-confirm-overlay]")) {
      const Ge = (Qt = f.confirmDialog) == null ? void 0 : Qt.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Ge == null || Ge(!1);
      return;
    }
    const Le = Ie.target.closest("[data-space-mode]");
    if (Le) {
      re(Le.getAttribute("data-space-mode"));
      return;
    }
    const je = Ie.target.closest("[data-gizmo-mode]");
    if (je) {
      t.gizmoMode = je.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, pe(), O({ localOnly: !0, reason: lt.VIEW });
      return;
    }
    const Be = Ie.target.closest("[data-view]");
    if (Be) {
      if (Be.getAttribute("aria-disabled") === "true") return;
      const Ge = t.mode;
      t.mode = String(Be.getAttribute("data-view") || "pano"), u && t.mode === "frame" && (Ge !== "frame" && (c.frameSafeRect = null), we(), pe()), P(), M(), O();
      return;
    }
    const $e = Ie.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if ($e && !s) {
      if ($e.matches("[data-tool-mode]")) {
        const Ge = String($e.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = Ge, (Ge === "paint" || Ge === "mask") && U({ preservePanelValues: !0 }), x(), we(), pe(), O();
        return;
      }
      if ($e.matches("[data-tool-ui-action]")) {
        const Ge = String($e.getAttribute("data-tool-ui-action") || "");
        if ((Ge === "undo" || Ge === "redo") && $e.disabled) return;
        Ge === "undo" ? J(-1) : Ge === "redo" ? J(1) : Ge === "clear" ? L() : Ge === "add" || Ge === "add-image" ? m() : Ge === "add-world" ? F() : Ge === "add-or-look" ? g() : Ge === "add-camera" && y();
        return;
      }
      if ($e.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const Ge = String($e.getAttribute("data-paint-tool") || "pen");
        t.paintTool = Ge, U({ preservePanelValues: !0 }), Mn[Ge] && (t.activeBrushPresetId = Ge), x(), we(), pe(), O();
        return;
      }
      if ($e.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String($e.getAttribute("data-mask-tool") || "pen"), U({ preservePanelValues: !0 }), x(), we(), pe(), O();
        return;
      }
      if ($e.matches("[data-paint-layer-clear-current]")) {
        const Ge = String($e.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        C(Ge);
        return;
      }
      if ($e.matches("[data-paint-color-swatch]")) {
        const Ge = _l.find((In) => In.id === $e.getAttribute("data-paint-color-swatch"));
        if (!Ge) return;
        t.paintColor = Tn(Ge.color), ve(!0), x();
        return;
      }
      if ($e.matches("[data-paint-color-custom]")) {
        Ie.preventDefault(), Ie.stopPropagation(), i && !i.hidden ? ve(!0) : Ne(), x();
        return;
      }
    }
    const He = String(((zt = $e == null ? void 0 : $e.getAttribute) == null ? void 0 : zt.call($e, "data-action")) || "");
    if (He === "video-play-toggle") {
      if (Ie.preventDefault(), Ie.stopPropagation(), !(h instanceof HTMLVideoElement)) return;
      Pe.resumeAfterScrub = !1, A();
      return;
    }
    if (He === "video-audio-toggle") {
      Ie.preventDefault(), Ie.stopPropagation(), ge(), typeof ($e == null ? void 0 : $e.blur) == "function" && $e.blur();
      return;
    }
    if (He === "video-loop-toggle") {
      if (Ie.preventDefault(), Ie.stopPropagation(), !(h instanceof HTMLVideoElement)) return;
      const Ge = !f.videoTransport.loop;
      f.videoTransport.loop = Ge, h.loop = Ge, k({
        hasAudio: f.videoTransport.hasAudio,
        loop: Ge,
        muted: h.muted,
        volume: Number(h.volume ?? f.videoTransport.volume ?? 1)
      }), typeof ($e == null ? void 0 : $e.blur) == "function" && $e.blur();
      return;
    }
    if (!s) {
      if (He === "frame-aspect") {
        f.frameRail.aspectOpen = !f.frameRail.aspectOpen;
        return;
      }
      if (He === "frame-aspect-set") {
        const Ge = t.mode === "frame" ? ne() : null;
        if (!Ge || Ge.locked === !0) return;
        I(Ge, String($e.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, V(), fe(), q(), M(), we(), pe(), O();
        return;
      }
      if (He === "frame-aspect-custom") {
        const Ge = t.mode === "frame" ? ne() : null, In = $e.getAttribute("data-custom-width"), En = $e.getAttribute("data-custom-height");
        if (!Ge || !K(Ge, In, En)) return;
        f.frameRail.aspectOpen = !1, V(), fe(), q(), M(), O();
        return;
      }
      if (He === "frame-rotate-90") {
        const Ge = t.mode === "frame" ? ne() : null;
        if (!Ge || Ge.locked === !0) return;
        Se(Ge), f.frameRail.aspectOpen = !1, V(), fe(), q(), M(), O();
        return;
      }
      if (He === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, pe(), O();
        return;
      }
      if (He === "aspect-set") {
        const Ge = le();
        if (!Ge) return;
        const In = String($e.getAttribute("data-aspect") || "1:1");
        I(Ge, In), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, V(), fe(), q(), pe(), O();
        return;
      }
      if (He === "rotate-90") {
        const Ge = le();
        if (!Ge || S()) return;
        Se(Ge), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, V(), fe(), q(), pe(), O();
        return;
      }
      if (He === "bring-front") {
        z();
        return;
      }
      if (He === "send-back") {
        _e();
        return;
      }
      if (He === "duplicate") {
        me();
        return;
      }
      if (He === "replace-image") {
        Q();
        return;
      }
      if (He === "toggle-lock") {
        te();
        return;
      }
      if (He === "back-initial") {
        ie();
        return;
      }
      if (He === "toggle-visible") {
        B();
        return;
      }
      if (He === "delete") {
        $();
        return;
      }
    }
    if (He === "reset-view") {
      if (t.mode === "frame") return;
      W(
        { position: H(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((wt = ce()) == null ? void 0 : wt.radius) || Qn },
        { mode: Qs(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (He === "frame-view") {
      if (!D() || Qs(t.spaceMode, t.viewTransition) !== "6dof") return;
      T();
      return;
    }
    if (He === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, PP(r == null ? void 0 : r.id, t.showGrid), p(), O();
      return;
    }
    if (He === "toggle-fullscreen") {
      Ie.preventDefault(), Ie.stopPropagation(), Me();
      return;
    }
    if (He === "toggle-output-preview-size") {
      Ie.preventDefault(), Ie.stopPropagation();
      const Ge = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = Ge, G(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = Ge ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), Te(), O();
      return;
    }
    const Tt = Ie.target.closest("[data-paint-history-index]");
    if (!Tt) return;
    const Dt = Number(Tt.getAttribute("data-paint-history-index")), Pt = t.customPaintHistory[Dt];
    Pt && (t.customPaintColor = Tn(Pt), t.paintColor = Tn(Pt), x());
  }
  function N(Ie) {
    const Le = Ie.target.closest("[data-video-seek]");
    if (Le) {
      if (!(h instanceof HTMLVideoElement)) return;
      oe.playing && (Pe.resumeAfterScrub = !0), oe.seek(ni(Number(Le.value || 0), X()));
      return;
    }
    const je = Ie.target.closest("[data-video-volume]");
    if (je) {
      if (!(h instanceof HTMLVideoElement)) return;
      const He = Ee(Number(je.value || 0), 0, 1);
      h.volume = He, h.muted = He <= 1e-4, k({
        hasAudio: f.videoTransport.hasAudio,
        muted: h.muted,
        volume: He
      });
      return;
    }
    const Be = Ie.target.closest("[data-paint-size-slider]");
    if (Be) {
      if (Be.disabled) return;
      const He = Math.max(1, Math.min(120, Math.round(Number(Be.value)))), Tt = Z(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[Tt] = He, x(), _();
      return;
    }
    const $e = Ie.target.closest("[data-paint-alpha-slider]");
    if ($e) {
      const He = { ...t.customPaintColor, a: Ee(Number($e.value) / 100, 0, 1) };
      t.customPaintColor = Tn(He), t.paintColor = Tn(He), x();
    }
  }
  function b(Ie) {
    var Le;
    if (Ie.target.closest("[data-video-seek]")) {
      if (!(h instanceof HTMLVideoElement)) return;
      Pe.resumeAfterScrub && oe.play(), Pe.resumeAfterScrub = !1;
      return;
    }
    if (Ie.target.closest("[data-video-volume]")) {
      typeof ((Le = Ie.target) == null ? void 0 : Le.blur) == "function" && Ie.target.blur();
      return;
    }
    Ie.target.closest("[data-paint-size-slider]") && ae();
  }
  function R(Ie) {
    const Le = Ie.target.closest("[data-tip]");
    !Le || !l.contains(Le) || d.target !== Le && (d.target = Le, d.timer && clearTimeout(d.timer), d.timer = window.setTimeout(() => {
      d.target === Le && w(Le);
    }, 220));
  }
  function se(Ie) {
    var Be, $e;
    const Le = Ie.target.closest("[data-tip]");
    !Le || d.target !== Le || (Ie.relatedTarget instanceof Element ? ($e = (Be = Ie.relatedTarget).closest) == null ? void 0 : $e.call(Be, "[data-tip]") : null) === Le || Y();
  }
  function ye(Ie, Le) {
    var Dt;
    if (!o) return;
    const je = o.getBoundingClientRect(), Be = Ee((Ie - je.left) / Math.max(1, je.width), 0, 1), $e = 1 - Ee((Le - je.top) / Math.max(1, je.height), 0, 1), He = iu(t.customPaintColor), Tt = { ...ru(He.h, Be, $e), a: Number(((Dt = t.customPaintColor) == null ? void 0 : Dt.a) ?? 1) };
    t.customPaintColor = Tn(Tt), t.paintColor = Tn(Tt), x();
  }
  function he(Ie) {
    var He;
    if (!a) return;
    const Le = a.getBoundingClientRect(), je = Ee((Ie - Le.left) / Math.max(1, Le.width), 0, 1), Be = iu(t.customPaintColor), $e = { ...ru(je, Be.s, Be.v), a: Number(((He = t.customPaintColor) == null ? void 0 : He.a) ?? 1) };
    t.customPaintColor = Tn($e), t.paintColor = Tn($e), x();
  }
  function ee(Ie, Le) {
    const je = Ie.pointerId;
    Le(Ie);
    const Be = (He) => {
      He.pointerId === je && Le(He);
    }, $e = (He) => {
      He.pointerId === je && (window.removeEventListener("pointermove", Be), window.removeEventListener("pointerup", $e), window.removeEventListener("pointercancel", $e));
    };
    window.addEventListener("pointermove", Be), window.addEventListener("pointerup", $e), window.addEventListener("pointercancel", $e);
  }
  function be() {
    const Ie = !!t.fullscreen;
    Fi(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: Ie ? ze.fullscreen_close : ze.fullscreen,
      label: Ie ? "Exit Fullscreen" : "Fullscreen",
      tip: Ie ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function E(Ie) {
    const Le = !!Ie;
    t.fullscreen !== Le && (t.fullscreen = Le, l.classList.toggle("pano-modal-fullscreen", Le), Le ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), p(), be(), xe(), O());
  }
  function de() {
    return document.fullscreenElement === n;
  }
  async function Me() {
    var Ie, Le;
    try {
      if (!document.fullscreenEnabled) {
        E(!t.fullscreen);
        return;
      }
      de() ? await ((Le = document.exitFullscreen) == null ? void 0 : Le.call(document)) : await ((Ie = n.requestFullscreen) == null ? void 0 : Ie.call(n));
    } catch {
      E(!t.fullscreen);
    }
  }
  function Ae() {
    document.fullscreenEnabled && E(de());
  }
  function Te() {
    const Ie = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = Ie ? ze.fullscreen_close : ze.fullscreen, f.outputPreviewToggle.label = Ie ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = Ie ? "Reduce preview" : "Expand preview";
  }
  return {
    connect(Ie) {
      ({
        addCutoutFrame: g,
        addImageSticker: m,
        addStudioCamera: y,
        addWorldImageSticker: F,
        applyCutoutAspectCustom: K,
        bringSelectedToFront: z,
        clearAll: L,
        clearPaintingLayer: C,
        clearSelection: U,
        commitAndRefreshNode: q,
        contentSphere: ce,
        deleteSelected: $,
        duplicateSelected: me,
        forceCursorTool: P,
        frameSpaceContent: T,
        getActiveCutoutShot: ne,
        getBrushPresetIdForTool: Z,
        getSelected: le,
        hidePaintSizePreview: ae,
        hideTooltip: Y,
        isErpCamera: S,
        isFreeSpaceView: D,
        playback: oe,
        playbackFps: X,
        pushHistory: fe,
        queueVideoTransportLayout: xe,
        replaceSelectedImage: Q,
        requestDraw: O,
        restoreHistory: J,
        restoreSelectedToInitialPose: ie,
        rotateCutoutAspect90: Se,
        sendSelectedToBack: _e,
        setShotAspect: I,
        setSpaceMode: re,
        showPaintSizePreview: _,
        showTooltipFor: w,
        spaceOrigin: H,
        startAnimation: G,
        syncFloatingViewButtonState: v,
        syncPaintUi: x,
        syncSidePanelControls: V,
        syncVideoTransportState: k,
        syncViewToggleState: M,
        togglePlayback: A,
        toggleSelectedExternalStickerVisibility: B,
        toggleSelectedLock: te,
        toggleVideoMuted: ge,
        transitionView: W,
        updateSelectionMenu: pe,
        updateSidePanel: we,
        videoState: Pe
      } = Ie);
    },
    closePaintColorPop: ve,
    syncGridToggleButton: p,
    onRootClick: j,
    onRootInput: N,
    onRootChange: b,
    onRootPointerOver: R,
    onRootPointerOut: se,
    updatePaintColorFromSv: ye,
    updatePaintColorFromHue: he,
    bindDrag: ee,
    syncFullscreenButton: be,
    setFullscreenState: E,
    onFullscreenChange: Ae,
    syncOutputPreviewToggleButton: Te
  };
}
function BN(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: a
  } = e;
  let s, l, c, u, d, f, h, g, m, y, F, K;
  function z(P) {
    var T, ne, Z, le, ae;
    if (P.key === "Escape") {
      if (s()) {
        P.preventDefault(), P.stopPropagation(), (T = P.stopImmediatePropagation) == null || T.call(P);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        P.preventDefault(), P.stopPropagation(), (ne = P.stopImmediatePropagation) == null || ne.call(P), (Z = document.exitFullscreen) == null || Z.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        P.preventDefault(), P.stopPropagation(), (le = P.stopImmediatePropagation) == null || le.call(P), m(!1);
        return;
      }
      P.preventDefault(), P.stopPropagation(), (ae = P.stopImmediatePropagation) == null || ae.call(P), l();
    }
  }
  function L(P) {
    const T = String(P.key || ""), ne = String(P.code || ""), Z = Number(P.keyCode || 0);
    if (!(T === "Delete" || ne === "Delete" || Z === 46) && !(T === "Backspace" || ne === "Backspace" || Z === 8)) return;
    const Y = P.target, S = ((Y == null ? void 0 : Y.tagName) || "").toUpperCase();
    if (S === "INPUT" || S === "TEXTAREA" || Y != null && Y.isContentEditable) return;
    if (o.selection) {
      u(), P.preventDefault(), P.stopPropagation();
      return;
    }
    if (d()) {
      P.preventDefault(), P.stopPropagation();
      return;
    }
    h() && (c(), P.preventDefault(), P.stopPropagation());
  }
  function C(P) {
    if (P.code !== "Space" || P.ctrlKey || P.metaKey || P.altKey || n || !i || !a.timeline.visible || a.confirmDialog.visible) return !1;
    const T = P.composedPath()[0];
    if (T !== document.body && T !== document.documentElement && !r.contains(T)) return !1;
    const ne = ((T == null ? void 0 : T.tagName) || "").toUpperCase();
    return ne === "INPUT" ? !ZM.has(String(T.type || "text").toLowerCase()) : ne !== "TEXTAREA" && ne !== "SELECT" && !(T != null && T.isContentEditable);
  }
  function U(P) {
    C(P) && (P.preventDefault(), P.stopPropagation(), P.repeat || F());
  }
  function q(P) {
    C(P) && (P.preventDefault(), P.stopPropagation());
  }
  function ce(P) {
    const T = !!(P.ctrlKey || P.metaKey), ne = !!P.altKey;
    t.marqueeModifier === T && t.altModifier === ne || (t.marqueeModifier = T, t.altModifier = ne, y(), K(t.pointerPos));
  }
  function $() {
    t.marqueeModifier = !1, t.altModifier = !1, y(), K(t.pointerPos);
  }
  function me(P) {
    if (n || !P.ctrlKey && !P.metaKey) return;
    const T = String(P.key || "").toLowerCase(), ne = String(P.code || "");
    if (T !== "z" && ne !== "KeyZ") return;
    const Z = P.target, le = ((Z == null ? void 0 : Z.tagName) || "").toUpperCase();
    if (le === "INPUT" || le === "TEXTAREA" || Z != null && Z.isContentEditable) return;
    const { canUndo: ae, canRedo: Y } = f();
    P.shiftKey && !Y || !P.shiftKey && !ae || (g(P.shiftKey ? 1 : -1), P.preventDefault(), P.stopPropagation());
  }
  return {
    connect(P) {
      ({
        cancelFrameCameraGesture: s,
        closeEditor: l,
        deleteSelected: c,
        deleteSelectedKeyframes: u,
        deleteSelectedWorldSticker: d,
        getHistoryCapabilities: f,
        getSelected: h,
        restoreHistory: g,
        setFullscreenState: m,
        syncFrameRollKnob: y,
        togglePlayback: F,
        updateCursor: K
      } = P);
    },
    onEscClose: z,
    onDeleteKey: L,
    onSpaceKey: U,
    onSpaceKeyUp: q,
    onModifierKeyChange: ce,
    onWindowBlur: $,
    onUndoRedoKey: me
  };
}
const lp = /* @__PURE__ */ new Map(), er = Dm({
  app: Xn,
  api: dn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: tu,
    markImageFailed: xg,
    markImageLoading: Sg,
    markImageReady: wg
  }
});
function cp(e) {
  if (!en(e, "background") || !en(e, "external-sticker")) return null;
  const t = er.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? ro(t[0]) : null;
}
function UN(e) {
  if (!en(e, "background")) return null;
  const [t] = er.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [r] = er.uiValue(e, "pano_timeline_frames") || [], [n] = er.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(r) > 0 ? Number(r) : null, coverage: vn(n) };
}
const YN = er.assetSource, qN = er.source, XN = er.uiImage, JN = er.invalidateUiImage, up = er.loadPreferredExactLinkedImage;
async function ZN(e, t, r = {}) {
  var Ft, jt;
  await lg(e, { tolerateOperationFailure: !0 }), er.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, a = vP(e, t);
  await fd();
  const s = Za(e, "output_preset"), l = Za(e, "coverage"), c = Za(e, "bg_color"), u = Za(e, JM), d = () => {
    const Re = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return up(
      e,
      Re,
      () => ke(),
      `background:size:${Re.join("|")}`
    );
  }, f = () => {
    const Re = d();
    return wP(Re);
  }, h = (Re = 2048) => {
    const Ze = s == null ? void 0 : s.value;
    return SP(Ze) ? f() || Math.max(1, Math.round(Number(Re || 2048))) : _P(Ze, Re);
  }, g = e.__panoSceneStateV2 === !0, m = t === "stickers" && g, y = t === "cutout" && g, F = m && e.__panoStudio === !0, K = y || F, z = t === "cutout" || F, L = y ? UN(e) : null, C = (g ? Zh : Jh)(String((u == null ? void 0 : u.value) || ""), {
    outputPreset: h(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: L ? L.coverage : vn(l == null ? void 0 : l.value),
    sharedUiSettings: xP(),
    active: tm(e),
    fps: g ? cp(e) : null,
    scene: (L == null ? void 0 : L.state) ?? null,
    camera: y
  });
  e.__panoLiveStateOverride = C, e.__panoLiveStateVersion = 0;
  let U = null;
  K ? (U = C.camera && (!F || C.camera.visible !== !1) ? em(C.camera, 0) : null, C.shots = U ? [{ ...U, position: [...U.position] }] : [], C.active.selected_shot_id = U && y ? bl : null) : t === "cutout" && (C.shots = Array.isArray(C.shots) ? C.shots.slice(0, 1) : [], C.shots.length || (C.active.selected_shot_id = null));
  const q = t === "cutout" ? (() => {
    var Sn;
    const Re = Array.isArray(C.shots) ? C.shots : [], Ze = String(((Sn = C == null ? void 0 : C.active) == null ? void 0 : Sn.selected_shot_id) || "");
    return Re.find((an) => String((an == null ? void 0 : an.id) || "") === Ze) || Re[0] || null;
  })() : null, ce = q ? Lg(q, !1) : { width: 220, height: 132 }, $ = _g(F ? "studio" : t), me = /* @__PURE__ */ Qi({
    stageStatus: Yn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: ($.viewButtons || []).map((Re) => ({ ...Re, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Ft = $.spaceButtons) != null && Ft.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: $.spaceButtons, frame: $.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: ($.toolButtons || []).map((Re) => ({
      ...Re,
      disabled: !1,
      ...Re.key === "add-world" ? { visible: m } : {},
      ...y && uP.has(Re.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...($.floatingButtons || []).map((Re) => ({ ...Re, disabled: !1 })),
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
      customColorCss: cr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: cr({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (Re, Ze) => ({ index: Ze, color: null })),
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
      label: q ? "Loading preview" : "Add Frame to preview"
    }
  }), P = { frame: /* @__PURE__ */ vs(0), playing: /* @__PURE__ */ vs(!1) }, T = document.createElement("div");
  document.body.appendChild(T);
  const ne = ({ intent: Re, file: Ze } = {}) => {
    if (qn(Ze)) {
      if (Re === "add") {
        Ae(Ze);
        return;
      }
      if (Re === "add-world") {
        Te(Ze);
        return;
      }
      Re === "replace" && Fe(Ze);
    }
  }, Z = ({ intent: Re } = {}) => {
  }, le = ku(qM, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: a,
    shellPreset: $,
    paintSwatches: _l.map((Re) => ({
      id: Re.id,
      label: Re.label,
      cssColor: cr(Re.color, 1)
    })),
    uiState: me,
    playhead: P,
    onClose: () => {
      rn();
    },
    onTimeline: (Re) => Pa(Re),
    onImageFileSelected: ne,
    onImageFileCancelled: Z
  });
  let ae = null;
  try {
    ae = le.mount(T);
  } catch (Re) {
    try {
      le.unmount();
    } catch {
    }
    throw T.remove(), Re;
  }
  const Y = T.querySelector(".pano-modal-overlay"), S = T.querySelector(".pano-modal"), D = S == null ? void 0 : S.querySelector("[data-stage-overlay]"), oe = S == null ? void 0 : S.querySelector("[data-stage-background]"), X = S == null ? void 0 : S.querySelector(".pano-stage-wrap"), fe = ((jt = ae == null ? void 0 : ae.getPaintOverlayRefs) == null ? void 0 : jt.call(ae)) || {}, xe = fe.cursor || null, Q = fe.sizePreview || null, O = fe.sizeSample || null;
  if (!Y || !S || !D || !oe || !X || !xe || !Q || !O)
    throw le.unmount(), T.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const J = D.getContext("2d"), ie = S.querySelector("[data-side]"), Se = S.querySelector("[data-video-element]"), _e = S.querySelector("[data-port-video-element]");
  Vl(D, "editor.stage-overlay"), Vl(oe, "editor.stage-background"), nf(Se, "editor.video"), nf(_e, "editor.port-video");
  const I = S.querySelector(".pano-floating-right"), re = S.querySelector(".pano-floating-top"), _ = S.querySelector("[data-tool-rail]"), w = S.querySelector("[data-frame-rail]"), H = S.querySelector("[data-frame-roll-knob]"), G = S.querySelector("[data-paint-dock]"), v = S.querySelector(".pano-video-transport"), x = S.querySelector("[data-selection-menu]"), V = S.querySelector("[data-tooltip]"), k = S.querySelector("[data-camera-preview-host]"), M = S.querySelector("[data-camera-preview-canvas]");
  Vl(M, "editor.camera-preview");
  const A = S.querySelector("[data-paint-color-row]"), B = S.querySelector("[data-paint-color-pop]"), te = S.querySelector("[data-paint-color-sv]"), ge = S.querySelector("[data-paint-color-sv-cursor]"), W = S.querySelector("[data-paint-hue-strip]"), pe = S.querySelector("[data-paint-hue-handle]");
  X == null || X.removeAttribute("data-stage-ready"), X == null || X.setAttribute("data-stage-loading-kind", "boot"), D.style.opacity = "1", oe.style.opacity = "0", i && (ie == null || ie.remove(), S.classList.add("pano-modal-readonly")), S.addEventListener("pointerdown", () => se.wake(), !0), S.addEventListener("pointerdown", (Re) => {
    var Ze;
    Re.target.closest("[data-frame-roll-knob]") || Ge(), !Re.target.closest(".pano-picker") && (Re.target.closest("[data-paint-color-row]") || (S.querySelectorAll(".pano-picker-pop").forEach((Sn) => {
      Sn.hidden = !0;
    }), $e(!0), z && Pe.cutoutAspectOpen && !Re.target.closest(".pano-aspect-popover") && !Re.target.closest("[data-action='aspect']") && (Pe.cutoutAspectOpen = !1, Pe.menuMode = "", Pe.menuSize.measured = !1, La(), ke()), (Ze = me.frameRail) != null && Ze.aspectOpen && !Re.target.closest(".pano-frame-aspect-control") && (me.frameRail.aspectOpen = !1)));
  });
  const Pe = {
    mode: "pano",
    selectedId: Dg(t, C),
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: Qn,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: vn(C.coverage),
    historyController: jP(C),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: kr,
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
    showGrid: MP(e == null ? void 0 : e.id, !0),
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
    paintEngine: pl(),
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
  }, ue = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (Pe.selectedId = null, C.active.selected_sticker_id = null), Pe.selectedIds = Pe.selectedId ? [Pe.selectedId] : [];
  const ve = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), N = nn({ label: "editor.still" });
  N.__panoFrameIdx = 0;
  const b = nn({ label: "editor.port-still" });
  b.__panoFrameIdx = 0;
  const R = {
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
  }, se = Yw({
    requestAnimationFrame: (Re) => requestAnimationFrame(Re),
    cancelAnimationFrame: (Re) => cancelAnimationFrame(Re),
    draw: (Re, Ze) => Oa(Re, Ze),
    animating: () => Pt()
  }), ye = Bw({
    requestFrame: (Re) => se.requestFrame(Re),
    cancelFrame: (Re) => se.cancelFrame(Re),
    tasks: {
      seek: () => xl.seek(ue.scrubFrame),
      timeline: () => _i(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        Ue(), ke({ localOnly: !0, reason: lt.STATE });
      },
      sidePanel: () => it()
    }
  }), he = q1({
    canvas: oe,
    onReady: () => {
      Fn(), ke({ reason: lt.CONTEXT });
    },
    onFailed: () => ke(),
    onUpdate: () => ke({ localOnly: !0, reason: lt.MEDIA }),
    onSplats: (Re) => ke({ localOnly: !0, reason: uN(Re) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      Qt(), Fn(), ke({ reason: lt.CONTEXT });
    }
  }), ee = Number.parseFloat(
    getComputedStyle(S).getPropertyValue("--pano-float-radius")
  ) || 10, be = (Re) => {
    const Ze = String(Re || "default");
    D.style.cursor !== Ze && (D.style.cursor = Ze);
  }, E = {
    timer: 0,
    target: null
  }, de = {
    active: !1,
    depth: 0
  }, Me = Au({
    getView: () => ({ yaw: Pe.viewYaw, pitch: Pe.viewPitch, fov: Pe.viewFov }),
    setView: (Re) => {
      Pe.viewYaw = $t(Number(Re.yaw || 0)), Pe.viewPitch = Ee(Number(Re.pitch || 0), -89.9, 89.9), Pe.viewFov = Ee(Number(Re.fov || Pe.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const Re = D.getBoundingClientRect();
      return {
        w: Math.max(1, Number(Re.width || D.clientWidth || 0)),
        h: Math.max(1, Number(Re.height || D.clientHeight || 0))
      };
    },
    getInvert: () => {
      var Re, Ze;
      return {
        x: (Re = C.ui_settings) != null && Re.invert_view_x ? -1 : 1,
        y: (Ze = C.ui_settings) != null && Ze.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => zt(),
    onInteraction: () => se.requestDraw(lt.VIEW)
  }), {
    addImageStickerFromFile: Ae,
    addWorldStickerFromFile: Te,
    applyInitialCutoutFocus: Ie,
    applyVideoTimelineFps: Le,
    bindDrag: je,
    cancelFrameCameraGesture: Be,
    closePaintColorPop: $e,
    commitState: He,
    disposeMediaSession: Tt,
    disposeUpstream: Dt,
    editorAnimating: Pt,
    finishKnobRoll: Et,
    flushFrameWheelCommit: Gt,
    forgetCameraPreviewFrame: Qt,
    getUnwrapRect: zt,
    hidePaintSizePreview: wt,
    hideTooltip: Ge,
    hoverWorldGizmo: In,
    isFreeFrameView: En,
    isFreeSpaceView: nr,
    migrateLegacyEmbeddedAssets: ao,
    onCanvasDragOver: ga,
    onCanvasDrop: ya,
    onCanvasMouseMove: so,
    onCanvasPointerCancel: lo,
    onCanvasPointerDown: co,
    onCanvasPointerMove: ba,
    onCanvasPointerUp: uo,
    onCanvasWheel: va,
    onDeleteKey: fo,
    onEscClose: po,
    onFrameRollKnobDoubleClick: _a,
    onFrameRollKnobPointerDown: Sa,
    onFrameRollKnobPointerMove: ho,
    onFullscreenChange: Nt,
    onModifierKeyChange: _n,
    onRootChange: rr,
    onRootClick: mo,
    onRootInput: On,
    onRootPointerOut: wa,
    onRootPointerOver: xa,
    onSidePanelChange: ka,
    onSidePanelClick: Lr,
    onSidePanelInput: wl,
    onSpaceKey: yr,
    onSpaceKeyUp: Ma,
    onTimelineAction: Pa,
    onUndoRedoKey: Na,
    onWindowBlur: go,
    onWindowDragEnter: yo,
    onWindowDragLeave: Ca,
    onWindowDragOver: Aa,
    onWindowDrop: Ia,
    playback: xl,
    pushHistory: kl,
    reconcileExternalStickerFromInputs: Ea,
    refreshModalVideoSource: Oe,
    replaceSelectedImageFromFile: Fe,
    requestDraw: ke,
    sampleEditorDiagnostics: ht,
    setDropCue: at,
    setPointerPos: mt,
    stageResizeObserver: Ye,
    stickerCornerOrderSanity: Je,
    stopRenderLoop: et,
    syncCanvasSize: Fn,
    syncCutoutShot: Ue,
    syncFullscreenButton: We,
    syncGridToggleButton: qe,
    syncLookAtFrameButtonState: Xt,
    syncOutputPreviewToggleButton: _t,
    syncPaintUi: br,
    syncPaintingLayerAsync: vi,
    syncTimeline: _i,
    syncUndoRedoButtons: Si,
    tick: Oa,
    triggerBackgroundPersistenceOnClose: Fa,
    updateCursor: bo,
    updatePaintColorFromHue: Ta,
    updatePaintColorFromSv: Da,
    updateSelectionMenu: La,
    updateSidePanel: it,
    viewControls: ct,
    watchPixelRatio: ft
  } = NP({
    api: dn,
    app: Xn,
    backgroundCanvas: oe,
    bgWidget: c,
    cameraV2: K,
    canvas: D,
    capture: L,
    closeEditor: rn,
    comfyMedia: er,
    coverageWidget: l,
    ctx: J,
    cutoutPreviewCanvas: M,
    cutoutPreviewHost: k,
    cutoutV2: y,
    dragCue: de,
    dragFrames: ye,
    editor: Pe,
    editorView: he,
    floatingRightEl: I,
    floatingTopEl: re,
    frameGateCssRadius: ee,
    frameRailEl: w,
    frameRollKnobEl: H,
    hideSidebar: i,
    imageCache: ve,
    initialShotBase: U,
    loadPreferredExactLinkedImage: up,
    mediaAssetSource: YN,
    mediaSource: qN,
    mediaUiImage: XN,
    node: e,
    overlay: Y,
    paintColorPop: B,
    paintColorRow: A,
    paintColorSv: te,
    paintColorSvCursor: ge,
    paintCursorEl: xe,
    paintDockEl: G,
    paintHueHandle: pe,
    paintHueStrip: W,
    paintSizePreviewEl: Q,
    paintSizePreviewSampleEl: O,
    portStillCanvas: b,
    portVideoEl: _e,
    presetWidget: s,
    previewMode: o,
    rasterErpCanvasCache: j,
    rasterImageAlphaCache: p,
    rasterImageCache: Ne,
    readOnly: n,
    resolveEditorOutputPresetWidth: h,
    root: S,
    runtime: R,
    sceneV2: m,
    scheduler: se,
    selectionMenu: x,
    setCanvasCursor: be,
    shotEditor: z,
    stageWrap: X,
    state: C,
    stateV2: g,
    stateWidget: u,
    stillCanvas: N,
    studio: F,
    timeline: ue,
    timelinePlayhead: P,
    toolRailEl: _,
    tooltip: E,
    tooltipEl: V,
    type: t,
    uiState: me,
    videoEl: Se,
    videoTimelineFps: cp,
    videoTransportEl: v,
    viewController: Me,
    vueModal: ae
  }, [
    RP,
    HP,
    GP,
    WP,
    KP,
    BP,
    UP,
    YP,
    qP,
    sN,
    lN,
    cN,
    fN,
    pN,
    hN,
    ON,
    FN,
    TN,
    DN,
    LN,
    VN,
    RN,
    $N,
    zN,
    jN,
    HN,
    GN,
    WN,
    KN,
    BN
  ]);
  Je(), Ye.observe(D), ft();
  const pt = () => He();
  n || (e.__panoFlushStateBeforeQueue = pt), H == null || H.addEventListener("pointerdown", Sa), H == null || H.addEventListener("pointermove", ho), H == null || H.addEventListener("pointerup", Et), H == null || H.addEventListener("pointercancel", () => Be()), H == null || H.addEventListener("lostpointercapture", () => {
    var Re;
    ((Re = Pe.interaction) == null ? void 0 : Re.source) === "knob" && Be();
  }), H == null || H.addEventListener("dblclick", _a), D.onpointerdown = co, D.onpointermove = ba, D.onpointerup = uo, D.onpointercancel = lo, D.onlostpointercapture = () => {
    Be();
  }, D.onauxclick = (Re) => {
    Re.button === 1 && Re.preventDefault();
  }, D.oncontextmenu = (Re) => {
    (nr() || En()) && _S(ct(), 2) && Re.preventDefault();
  }, D.onmousemove = so, D.onpointerleave = () => {
    Pe.interaction || In({ x: -1e6, y: -1e6 });
  }, D.onmouseleave = () => {
    mt(Pe.pointerPos, !1), bo(Pe.pointerPos), Pe.mode === "frame" && Pe.primaryTool === "cursor" && ke({ localOnly: !0, reason: lt.OVERLAY });
  }, D.onwheel = va, D.ondragover = ga, D.ondrop = ya, window.addEventListener("dragenter", yo, !0), window.addEventListener("dragover", Aa, !0), window.addEventListener("dragleave", Ca, !0), window.addEventListener("drop", Ia, !0), ie == null || ie.addEventListener("click", Lr), ie == null || ie.addEventListener("input", wl), ie == null || ie.addEventListener("change", ka), qe(), S.addEventListener("click", mo), S.addEventListener("input", On), S.addEventListener("change", rr), S.addEventListener("pointerup", (Re) => {
    var Ze;
    if (Re.target.closest("[data-video-volume]")) {
      typeof ((Ze = Re.target) == null ? void 0 : Ze.blur) == "function" && Re.target.blur();
      return;
    }
    Re.target.closest("[data-paint-size-slider]") && wt();
  }), S.addEventListener("pointercancel", (Re) => {
    var Ze;
    if (Re.target.closest("[data-video-volume]")) {
      typeof ((Ze = Re.target) == null ? void 0 : Ze.blur) == "function" && Re.target.blur();
      return;
    }
    Re.target.closest("[data-paint-size-slider]") && wt();
  }), S.addEventListener("focusout", (Re) => {
    Re.target.closest("[data-paint-size-slider]") && wt();
  }), S.addEventListener("pointerover", xa), S.addEventListener("pointerout", wa), S.addEventListener("pointerdown", (Re) => {
    Re.target.closest("[data-frame-roll-knob]") || Ge();
  }), te && (te.onpointerdown = (Re) => {
    Re.preventDefault(), Re.stopPropagation(), je(Re, (Ze) => Da(Ze.clientX, Ze.clientY));
  }), W && (W.onpointerdown = (Re) => {
    Re.preventDefault(), Re.stopPropagation(), je(Re, (Ze) => Ta(Ze.clientX));
  }), S.addEventListener("click", (Re) => {
    var Yr;
    const Ze = Re.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!Ze) return;
    const Sn = Ze.getAttribute("data-action") === "confirm-accept", an = (Yr = me.confirmDialog) == null ? void 0 : Yr.resolve;
    me.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, an == null || an(Sn);
  }), document.addEventListener("fullscreenchange", Nt), We(), _t();
  const on = e.onConnectionsChange;
  let Wt = null, mn = () => {
  };
  !n && t === "stickers" && (mn = ag(e, (Re = "sync") => {
    Re === "executed" && (JN(ve, Ji), Oe(), m && Le()), Ea(Re);
  }, { editor: !0 }), Wt = function(...Ze) {
    typeof on == "function" && on.apply(this, Ze), Oe(), Er(this, "connections");
  }, e.onConnectionsChange = Wt), !n && !y && lp.set(String(e.id ?? "0"), () => vi());
  let gt = null;
  async function rn() {
    return gt || (gt = (async () => {
      var Re, Ze, Sn, an, Yr, wi, xi, _d;
      return lp.delete(String(e.id ?? "0")), Gt(), n || He(), document.fullscreenElement === Y && ((Re = document.exitFullscreen) == null || Re.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Nt), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === pt && (e.__panoFlushStateBeforeQueue = null), (Sn = (Ze = e.__panoDomPreview) == null ? void 0 : Ze.requestDraw) == null || Sn.call(Ze), (Yr = (an = e.graph) == null ? void 0 : an.setDirtyCanvas) == null || Yr.call(an, !0, !0), (_d = (xi = (wi = Xn) == null ? void 0 : wi.canvas) == null ? void 0 : xi.setDirty) == null || _d.call(xi, !0, !0), Ge(), ye.cancel(), et(), Tt(), Dt(), he.dispose(), at(!1), window.removeEventListener("keydown", po, !0), window.removeEventListener("keydown", fo, !0), window.removeEventListener("keydown", yr, !0), window.removeEventListener("keyup", Ma, !0), window.removeEventListener("keydown", _n, !0), window.removeEventListener("keyup", _n, !0), window.removeEventListener("blur", go), window.removeEventListener("keydown", Na, !0), window.removeEventListener("dragenter", yo, !0), window.removeEventListener("dragover", Aa, !0), window.removeEventListener("dragleave", Ca, !0), window.removeEventListener("drop", Ia, !0), !n && t === "stickers" && (e.onConnectionsChange === Wt && (e.onConnectionsChange = on), mn()), le.unmount(), T.remove(), Fa(), gt = null, !0;
    })().catch((Re) => (console.error("[PanoramaCutoutSync] closeEditor failed", Re), gt = null, !1)), gt);
  }
  window.addEventListener("keydown", po, !0), window.addEventListener("keydown", fo, !0), window.addEventListener("keydown", yr, !0), window.addEventListener("keyup", Ma, !0), window.addEventListener("keydown", _n, !0), window.addEventListener("keyup", _n, !0), window.addEventListener("blur", go), window.addEventListener("keydown", Na, !0), Y.addEventListener("pointerdown", (Re) => {
    Re.target === Y && rn();
  });
  function Ot(Re, Ze, { rollbackState: Sn = !1 } = {}) {
    let an = "";
    try {
      Sn && (an = JSON.stringify(C)), Ze();
    } catch (Yr) {
      if (an)
        try {
          const wi = JSON.parse(an);
          Object.keys(C).forEach((xi) => delete C[xi]), Object.assign(C, wi), n || He();
        } catch (wi) {
          console.error(`[PanoramaStickers] editor boot step "${Re}" rollback failed`, wi);
        }
      me.stageWarningDetail = `boot:${Re}`, console.error(`[PanoramaStickers] editor boot step "${Re}" failed`, Yr);
    }
  }
  Ot("cutout-focus", Ie), !n && t === "stickers" && Ot("external-sticker-sync", () => Ea("open"), { rollbackState: !0 }), ao().catch((Re) => {
    me.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', Re);
  }), Ot("history", kl), Ot("undo-redo", Si), Ot("paint-ui", br), Ot("side-panel", it), Ot("look-at-frame", Xt), Ot("video-source", Oe), Ot("canvas-size", Fn), Ot("cursor", () => bo(Pe.pointerPos)), ke(), ht();
}
Xn.registerExtension(IS({
  app: Xn,
  openEditor: ZN,
  attachStickers: Ww,
  attachCutout: Kw,
  attachPreview: Gw,
  restoreOutput: Iw,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: tP
}));
