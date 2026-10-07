import * as ba from "../../scripts/app.js";
import { app as cr } from "../../scripts/app.js";
import { api as hn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function $u(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Tt = {}, oo = [], kr = () => {
}, Yp = () => !1, kl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ml = (e) => e.startsWith("onUpdate:"), yn = Object.assign, zu = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, K0 = Object.prototype.hasOwnProperty, xt = (e, t) => K0.call(e, t), it = Array.isArray, so = (e) => Ps(e) === "[object Map]", qp = (e) => Ps(e) === "[object Set]", rf = (e) => Ps(e) === "[object Date]", ut = (e) => typeof e == "function", Qt = (e) => typeof e == "string", Pr = (e) => typeof e == "symbol", Ot = (e) => e !== null && typeof e == "object", Xp = (e) => (Ot(e) || ut(e)) && ut(e.then) && ut(e.catch), Jp = Object.prototype.toString, Ps = (e) => Jp.call(e), W0 = (e) => Ps(e).slice(8, -1), Zp = (e) => Ps(e) === "[object Object]", ju = (e) => Qt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Zo = /* @__PURE__ */ $u(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Nl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, U0 = /-\w/g, Mn = Nl(
  (e) => e.replace(U0, (t) => t.slice(1).toUpperCase())
), B0 = /\B([A-Z])/g, Ri = Nl(
  (e) => e.replace(B0, "-$1").toLowerCase()
), Pl = Nl((e) => e.charAt(0).toUpperCase() + e.slice(1)), tc = Nl(
  (e) => e ? `on${Pl(e)}` : ""
), _r = (e, t) => !Object.is(e, t), va = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Qp = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Hu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let of;
const Al = () => of || (of = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Et(e) {
  if (it(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Qt(n) ? J0(n) : Et(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Qt(e) || Ot(e))
    return e;
}
const Y0 = /;(?![^(]*\))/g, q0 = /:([^]+)/, X0 = /\/\*[^]*?\*\//g;
function J0(e) {
  const t = {};
  return e.replace(X0, "").split(Y0).forEach((r) => {
    if (r) {
      const n = r.split(q0);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function mt(e) {
  let t = "";
  if (Qt(e))
    t = e;
  else if (it(e))
    for (let r = 0; r < e.length; r++) {
      const n = mt(e[r]);
      n && (t += n + " ");
    }
  else if (Ot(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Z0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Q0 = /* @__PURE__ */ $u(Z0);
function eh(e) {
  return !!e || e === "";
}
function ey(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = Gu(e[n], t[n]);
  return r;
}
function Gu(e, t) {
  if (e === t) return !0;
  let r = rf(e), n = rf(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Pr(e), n = Pr(t), r || n)
    return e === t;
  if (r = it(e), n = it(t), r || n)
    return r && n ? ey(e, t) : !1;
  if (r = Ot(e), n = Ot(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (a && !l || !a && l || !Gu(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const th = (e) => !!(e && e.__v_isRef === !0), nt = (e) => Qt(e) ? e : e == null ? "" : it(e) || Ot(e) && (e.toString === Jp || !ut(e.toString)) ? th(e) ? nt(e.value) : JSON.stringify(e, nh, 2) : String(e), nh = (e, t) => th(t) ? nh(e, t.value) : so(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[nc(n, o) + " =>"] = i, r),
    {}
  )
} : qp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => nc(r))
} : Pr(t) ? nc(t) : Ot(t) && !it(t) && !Zp(t) ? String(t) : t, nc = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Pr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let On;
class ty {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = On, !t && On && (this.index = (On.scopes || (On.scopes = [])).push(
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
      const r = On;
      try {
        return On = this, t();
      } finally {
        On = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = On, On = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (On = this.prevScope, this.prevScope = void 0);
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
function ny() {
  return On;
}
let Rt;
const rc = /* @__PURE__ */ new WeakSet();
class rh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, On && On.active && On.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, rc.has(this) && (rc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || oh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, sf(this), sh(this);
    const t = Rt, r = ur;
    Rt = this, ur = !0;
    try {
      return this.fn();
    } finally {
      ah(this), Rt = t, ur = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Uu(t);
      this.deps = this.depsTail = void 0, sf(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? rc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Kc(this) && this.run();
  }
  get dirty() {
    return Kc(this);
  }
}
let ih = 0, Qo, es;
function oh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = es, es = e;
    return;
  }
  e.next = Qo, Qo = e;
}
function Ku() {
  ih++;
}
function Wu() {
  if (--ih > 0)
    return;
  if (es) {
    let t = es;
    for (es = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; Qo; ) {
    let t = Qo;
    for (Qo = void 0; t; ) {
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
function sh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ah(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Uu(n), ry(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function Kc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (lh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function lh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === cs) || (e.globalVersion = cs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Kc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Rt, n = ur;
  Rt = e, ur = !0;
  try {
    sh(e);
    const i = e.fn(e._value);
    (t.version === 0 || _r(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Rt = r, ur = n, ah(e), e.flags &= -3;
  }
}
function Uu(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      Uu(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function ry(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let ur = !0;
const ch = [];
function Hr() {
  ch.push(ur), ur = !1;
}
function Gr() {
  const e = ch.pop();
  ur = e === void 0 ? !0 : e;
}
function sf(e) {
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
let cs = 0;
class iy {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Bu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Rt || !ur || Rt === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Rt)
      r = this.activeLink = new iy(Rt, this), Rt.deps ? (r.prevDep = Rt.depsTail, Rt.depsTail.nextDep = r, Rt.depsTail = r) : Rt.deps = Rt.depsTail = r, uh(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Rt.depsTail, r.nextDep = void 0, Rt.depsTail.nextDep = r, Rt.depsTail = r, Rt.deps === r && (Rt.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, cs++, this.notify(t);
  }
  notify(t) {
    Ku();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Wu();
    }
  }
}
function uh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        uh(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Wc = /* @__PURE__ */ new WeakMap(), Pi = /* @__PURE__ */ Symbol(
  ""
), Uc = /* @__PURE__ */ Symbol(
  ""
), us = /* @__PURE__ */ Symbol(
  ""
);
function fn(e, t, r) {
  if (ur && Rt) {
    let n = Wc.get(e);
    n || Wc.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new Bu()), i.map = n, i.key = r), i.track();
  }
}
function Lr(e, t, r, n, i, o) {
  const s = Wc.get(e);
  if (!s) {
    cs++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Ku(), t === "clear")
    s.forEach(a);
  else {
    const l = it(e), c = l && ju(r);
    if (l && r === "length") {
      const d = Number(n);
      s.forEach((u, f) => {
        (f === "length" || f === us || !Pr(f) && f >= d) && a(u);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && a(s.get(r)), c && a(s.get(us)), t) {
        case "add":
          l ? c && a(s.get("length")) : (a(s.get(Pi)), so(e) && a(s.get(Uc)));
          break;
        case "delete":
          l || (a(s.get(Pi)), so(e) && a(s.get(Uc)));
          break;
        case "set":
          so(e) && a(s.get(Pi));
          break;
      }
  }
  Wu();
}
function Bi(e) {
  const t = /* @__PURE__ */ wt(e);
  return t === e ? t : (fn(t, "iterate", us), /* @__PURE__ */ Jn(e) ? t : t.map(pr));
}
function Cl(e) {
  return fn(e = /* @__PURE__ */ wt(e), "iterate", us), e;
}
function br(e, t) {
  return /* @__PURE__ */ Kr(e) ? ho(/* @__PURE__ */ Ai(e) ? pr(t) : t) : pr(t);
}
const oy = {
  __proto__: null,
  [Symbol.iterator]() {
    return ic(this, Symbol.iterator, (e) => br(this, e));
  },
  concat(...e) {
    return Bi(this).concat(
      ...e.map((t) => it(t) ? Bi(t) : t)
    );
  },
  entries() {
    return ic(this, "entries", (e) => (e[1] = br(this, e[1]), e));
  },
  every(e, t) {
    return Ir(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ir(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => br(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Ir(
      this,
      "find",
      e,
      t,
      (r) => br(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Ir(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ir(
      this,
      "findLast",
      e,
      t,
      (r) => br(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ir(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ir(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return oc(this, "includes", e);
  },
  indexOf(...e) {
    return oc(this, "indexOf", e);
  },
  join(e) {
    return Bi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return oc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ir(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return To(this, "pop");
  },
  push(...e) {
    return To(this, "push", e);
  },
  reduce(e, ...t) {
    return af(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return af(this, "reduceRight", e, t);
  },
  shift() {
    return To(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ir(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return To(this, "splice", e);
  },
  toReversed() {
    return Bi(this).toReversed();
  },
  toSorted(e) {
    return Bi(this).toSorted(e);
  },
  toSpliced(...e) {
    return Bi(this).toSpliced(...e);
  },
  unshift(...e) {
    return To(this, "unshift", e);
  },
  values() {
    return ic(this, "values", (e) => br(this, e));
  }
};
function ic(e, t, r) {
  const n = Cl(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Jn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const sy = Array.prototype;
function Ir(e, t, r, n, i, o) {
  const s = Cl(e), a = s !== e && !/* @__PURE__ */ Jn(e), l = s[t];
  if (l !== sy[t]) {
    const u = l.apply(e, o);
    return a ? pr(u) : u;
  }
  let c = r;
  s !== e && (a ? c = function(u, f) {
    return r.call(this, br(e, u), f, e);
  } : r.length > 2 && (c = function(u, f) {
    return r.call(this, u, f, e);
  }));
  const d = l.call(s, c, n);
  return a && i ? i(d) : d;
}
function af(e, t, r, n) {
  const i = Cl(e), o = i !== e && !/* @__PURE__ */ Jn(e);
  let s = r, a = !1;
  i !== e && (o ? (a = n.length === 0, s = function(c, d, u) {
    return a && (a = !1, c = br(e, c)), r.call(this, c, br(e, d), u, e);
  }) : r.length > 3 && (s = function(c, d, u) {
    return r.call(this, c, d, u, e);
  }));
  const l = i[t](s, ...n);
  return a ? br(e, l) : l;
}
function oc(e, t, r) {
  const n = /* @__PURE__ */ wt(e);
  fn(n, "iterate", us);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Xu(r[0]) ? (r[0] = /* @__PURE__ */ wt(r[0]), n[t](...r)) : i;
}
function To(e, t, r = []) {
  Hr(), Ku();
  const n = (/* @__PURE__ */ wt(e))[t].apply(e, r);
  return Wu(), Gr(), n;
}
const ay = /* @__PURE__ */ $u("__proto__,__v_isRef,__isVue"), dh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pr)
);
function ly(e) {
  Pr(e) || (e = String(e));
  const t = /* @__PURE__ */ wt(this);
  return fn(t, "has", e), t.hasOwnProperty(e);
}
class fh {
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
      return n === (i ? o ? by : gh : o ? mh : hh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = it(t);
    if (!i) {
      let l;
      if (s && (l = oy[r]))
        return l;
      if (r === "hasOwnProperty")
        return ly;
    }
    const a = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ gn(t) ? t : n
    );
    if ((Pr(r) ? dh.has(r) : ay(r)) || (i || fn(t, "get", r), o))
      return a;
    if (/* @__PURE__ */ gn(a)) {
      const l = s && ju(r) ? a : a.value;
      return i && Ot(l) ? /* @__PURE__ */ Yc(l) : l;
    }
    return Ot(a) ? i ? /* @__PURE__ */ Yc(a) : /* @__PURE__ */ _o(a) : a;
  }
}
class ph extends fh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const s = it(t) && ju(r);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Kr(o);
      if (!/* @__PURE__ */ Jn(n) && !/* @__PURE__ */ Kr(n) && (o = /* @__PURE__ */ wt(o), n = /* @__PURE__ */ wt(n)), !s && /* @__PURE__ */ gn(o) && !/* @__PURE__ */ gn(n))
        return c || (o.value = n), !0;
    }
    const a = s ? Number(r) < t.length : xt(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ gn(t) ? t : i
    );
    return t === /* @__PURE__ */ wt(i) && (a ? _r(n, o) && Lr(t, "set", r, n) : Lr(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = xt(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Lr(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Pr(r) || !dh.has(r)) && fn(t, "has", r), n;
  }
  ownKeys(t) {
    return fn(
      t,
      "iterate",
      it(t) ? "length" : Pi
    ), Reflect.ownKeys(t);
  }
}
class cy extends fh {
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
const uy = /* @__PURE__ */ new ph(), dy = /* @__PURE__ */ new cy(), fy = /* @__PURE__ */ new ph(!0);
const Bc = (e) => e, ta = (e) => Reflect.getPrototypeOf(e);
function py(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ wt(i), s = so(o), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = i[e](...n), d = r ? Bc : t ? ho : pr;
    return !t && fn(
      o,
      "iterate",
      l ? Uc : Pi
    ), yn(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: u, done: f } = c.next();
          return f ? { value: u, done: f } : {
            value: a ? [d(u[0]), d(u[1])] : d(u),
            done: f
          };
        }
      }
    );
  };
}
function na(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function hy(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ wt(o), a = /* @__PURE__ */ wt(i);
      e || (_r(i, a) && fn(s, "get", i), fn(s, "get", a));
      const { has: l } = ta(s), c = t ? Bc : e ? ho : pr;
      if (l.call(s, i))
        return c(o.get(i));
      if (l.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && fn(/* @__PURE__ */ wt(i), "iterate", Pi), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ wt(o), a = /* @__PURE__ */ wt(i);
      return e || (_r(i, a) && fn(s, "has", i), fn(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, l = /* @__PURE__ */ wt(a), c = t ? Bc : e ? ho : pr;
      return !e && fn(l, "iterate", Pi), a.forEach((d, u) => i.call(o, c(d), c(u), s));
    }
  };
  return yn(
    r,
    e ? {
      add: na("add"),
      set: na("set"),
      delete: na("delete"),
      clear: na("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ wt(this), s = ta(o), a = /* @__PURE__ */ wt(i), l = !t && !/* @__PURE__ */ Jn(i) && !/* @__PURE__ */ Kr(i) ? a : i;
        return s.has.call(o, l) || _r(i, l) && s.has.call(o, i) || _r(a, l) && s.has.call(o, a) || (o.add(l), Lr(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Jn(o) && !/* @__PURE__ */ Kr(o) && (o = /* @__PURE__ */ wt(o));
        const s = /* @__PURE__ */ wt(this), { has: a, get: l } = ta(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ wt(i), c = a.call(s, i));
        const d = l.call(s, i);
        return s.set(i, o), c ? _r(o, d) && Lr(s, "set", i, o) : Lr(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ wt(this), { has: s, get: a } = ta(o);
        let l = s.call(o, i);
        l || (i = /* @__PURE__ */ wt(i), l = s.call(o, i)), a && a.call(o, i);
        const c = o.delete(i);
        return l && Lr(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ wt(this), o = i.size !== 0, s = i.clear();
        return o && Lr(
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
    r[i] = py(i, e, t);
  }), r;
}
function Yu(e, t) {
  const r = hy(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    xt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const my = {
  get: /* @__PURE__ */ Yu(!1, !1)
}, gy = {
  get: /* @__PURE__ */ Yu(!1, !0)
}, yy = {
  get: /* @__PURE__ */ Yu(!0, !1)
};
const hh = /* @__PURE__ */ new WeakMap(), mh = /* @__PURE__ */ new WeakMap(), gh = /* @__PURE__ */ new WeakMap(), by = /* @__PURE__ */ new WeakMap();
function vy(e) {
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
function Sy(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vy(W0(e));
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  return /* @__PURE__ */ Kr(e) ? e : qu(
    e,
    !1,
    uy,
    my,
    hh
  );
}
// @__NO_SIDE_EFFECTS__
function _y(e) {
  return qu(
    e,
    !1,
    fy,
    gy,
    mh
  );
}
// @__NO_SIDE_EFFECTS__
function Yc(e) {
  return qu(
    e,
    !0,
    dy,
    yy,
    gh
  );
}
function qu(e, t, r, n, i) {
  if (!Ot(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = Sy(e);
  if (o === 0)
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const a = new Proxy(
    e,
    o === 2 ? n : r
  );
  return i.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function Ai(e) {
  return /* @__PURE__ */ Kr(e) ? /* @__PURE__ */ Ai(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Kr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Jn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Xu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function wt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ wt(t) : e;
}
function wy(e) {
  return !xt(e, "__v_skip") && Object.isExtensible(e) && Qp(e, "__v_skip", !0), e;
}
const pr = (e) => Ot(e) ? /* @__PURE__ */ _o(e) : e, ho = (e) => Ot(e) ? /* @__PURE__ */ Yc(e) : e;
// @__NO_SIDE_EFFECTS__
function gn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
  return yh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function $a(e) {
  return yh(e, !0);
}
function yh(e, t) {
  return /* @__PURE__ */ gn(e) ? e : new xy(e, t);
}
class xy {
  constructor(t, r) {
    this.dep = new Bu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ wt(t), this._value = r ? t : pr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Jn(t) || /* @__PURE__ */ Kr(t);
    t = n ? t : /* @__PURE__ */ wt(t), _r(t, r) && (this._rawValue = t, this._value = n ? t : pr(t), this.dep.trigger());
  }
}
function rt(e) {
  return /* @__PURE__ */ gn(e) ? e.value : e;
}
const ky = {
  get: (e, t, r) => t === "__v_raw" ? e : rt(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ gn(i) && !/* @__PURE__ */ gn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function bh(e) {
  return /* @__PURE__ */ Ai(e) ? e : new Proxy(e, ky);
}
class My {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Bu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = cs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Rt !== this)
      return oh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return lh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ny(e, t, r = !1) {
  let n, i;
  return ut(e) ? n = e : (n = e.get, i = e.set), new My(n, i, r);
}
const ra = {}, za = /* @__PURE__ */ new WeakMap();
let xi;
function Py(e, t = !1, r = xi) {
  if (r) {
    let n = za.get(r);
    n || za.set(r, n = []), n.push(e);
  }
}
function Ay(e, t, r = Tt) {
  const { immediate: n, deep: i, once: o, scheduler: s, augmentJob: a, call: l } = r, c = (ee) => i ? ee : /* @__PURE__ */ Jn(ee) || i === !1 || i === 0 ? Rr(ee, 1) : Rr(ee);
  let d, u, f, p, w = !1, h = !1;
  if (/* @__PURE__ */ gn(e) ? (u = () => e.value, w = /* @__PURE__ */ Jn(e)) : /* @__PURE__ */ Ai(e) ? (u = () => c(e), w = !0) : it(e) ? (h = !0, w = e.some((ee) => /* @__PURE__ */ Ai(ee) || /* @__PURE__ */ Jn(ee)), u = () => e.map((ee) => {
    if (/* @__PURE__ */ gn(ee))
      return ee.value;
    if (/* @__PURE__ */ Ai(ee))
      return c(ee);
    if (ut(ee))
      return l ? l(ee, 2) : ee();
  })) : ut(e) ? t ? u = l ? () => l(e, 2) : e : u = () => {
    if (f) {
      Hr();
      try {
        f();
      } finally {
        Gr();
      }
    }
    const ee = xi;
    xi = d;
    try {
      return l ? l(e, 3, [p]) : e(p);
    } finally {
      xi = ee;
    }
  } : u = kr, t && i) {
    const ee = u, I = i === !0 ? 1 / 0 : i;
    u = () => Rr(ee(), I);
  }
  const m = ny(), b = () => {
    d.stop(), m && m.active && zu(m.effects, d);
  };
  if (o && t) {
    const ee = t;
    t = (...I) => {
      ee(...I), b();
    };
  }
  let V = h ? new Array(e.length).fill(ra) : ra;
  const T = (ee) => {
    if (!(!(d.flags & 1) || !d.dirty && !ee))
      if (t) {
        const I = d.run();
        if (i || w || (h ? I.some((X, $) => _r(X, V[$])) : _r(I, V))) {
          f && f();
          const X = xi;
          xi = d;
          try {
            const $ = [
              I,
              // pass undefined as the old value when it's changed for the first time
              V === ra ? void 0 : h && V[0] === ra ? [] : V,
              p
            ];
            V = I, l ? l(t, 3, $) : (
              // @ts-expect-error
              t(...$)
            );
          } finally {
            xi = X;
          }
        }
      } else
        d.run();
  };
  return a && a(T), d = new rh(u), d.scheduler = s ? () => s(T, !1) : T, p = (ee) => Py(ee, !1, d), f = d.onStop = () => {
    const ee = za.get(d);
    if (ee) {
      if (l)
        l(ee, 4);
      else
        for (const I of ee) I();
      za.delete(d);
    }
  }, t ? n ? T(!0) : V = d.run() : s ? s(T.bind(null, !0), !0) : d.run(), b.pause = d.pause.bind(d), b.resume = d.resume.bind(d), b.stop = b, b;
}
function Rr(e, t = 1 / 0, r) {
  if (t <= 0 || !Ot(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ gn(e))
    Rr(e.value, t, r);
  else if (it(e))
    for (let n = 0; n < e.length; n++)
      Rr(e[n], t, r);
  else if (qp(e) || so(e))
    e.forEach((n) => {
      Rr(n, t, r);
    });
  else if (Zp(e)) {
    for (const n in e)
      Rr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Rr(e[n], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function As(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Il(i, t, r);
  }
}
function Ar(e, t, r, n) {
  if (ut(e)) {
    const i = As(e, t, r, n);
    return i && Xp(i) && i.catch((o) => {
      Il(o, t, r);
    }), i;
  }
  if (it(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Ar(e[o], t, r, n));
    return i;
  }
}
function Il(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Tt;
  if (t) {
    let a = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; a; ) {
      const d = a.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, l, c) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      Hr(), As(o, null, 10, [
        e,
        l,
        c
      ]), Gr();
      return;
    }
  }
  Cy(e, r, i, n, s);
}
function Cy(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const wn = [];
let yr = -1;
const ao = [];
let ei = null, Xi = 0;
const vh = /* @__PURE__ */ Promise.resolve();
let ja = null;
function El(e) {
  const t = ja || vh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Iy(e) {
  let t = yr + 1, r = wn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = wn[n], o = ds(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Ju(e) {
  if (!(e.flags & 1)) {
    const t = ds(e), r = wn[wn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ds(r) ? wn.push(e) : wn.splice(Iy(t), 0, e), e.flags |= 1, Sh();
  }
}
function Sh() {
  ja || (ja = vh.then(wh));
}
function Ey(e) {
  it(e) ? ao.push(...e) : ei && e.id === -1 ? ei.splice(Xi + 1, 0, e) : e.flags & 1 || (ao.push(e), e.flags |= 1), Sh();
}
function lf(e, t, r = yr + 1) {
  for (; r < wn.length; r++) {
    const n = wn[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      wn.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function _h(e) {
  if (ao.length) {
    const t = [...new Set(ao)].sort(
      (r, n) => ds(r) - ds(n)
    );
    if (ao.length = 0, ei) {
      ei.push(...t);
      return;
    }
    for (ei = t, Xi = 0; Xi < ei.length; Xi++) {
      const r = ei[Xi];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    ei = null, Xi = 0;
  }
}
const ds = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function wh(e) {
  try {
    for (yr = 0; yr < wn.length; yr++) {
      const t = wn[yr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), As(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; yr < wn.length; yr++) {
      const t = wn[yr];
      t && (t.flags &= -2);
    }
    yr = -1, wn.length = 0, _h(), ja = null, (wn.length || ao.length) && wh();
  }
}
let jn = null, xh = null;
function Ha(e) {
  const t = jn;
  return jn = e, xh = e && e.type.__scopeId || null, t;
}
function kh(e, t = jn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Sf(-1);
    const o = Ha(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Ha(o), n._d && Sf(1);
    }
    return s;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function jr(e, t) {
  if (jn === null)
    return e;
  const r = Ll(jn), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, l = Tt] = t[i];
    o && (ut(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Rr(s), n.push({
      dir: o,
      instance: r,
      value: s,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function yi(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let l = a.dir[n];
    l && (Hr(), Ar(l, r, 8, [
      e.el,
      a,
      e,
      t
    ]), Gr());
  }
}
function Oy(e, t) {
  if (pn) {
    let r = pn.provides;
    const n = pn.parent && pn.parent.provides;
    n === r && (r = pn.provides = Object.create(n)), r[e] = t;
  }
}
function Sa(e, t, r = !1) {
  const n = Ib();
  if (n || lo) {
    let i = lo ? lo._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && ut(t) ? t.call(n && n.proxy) : t;
  }
}
const Fy = /* @__PURE__ */ Symbol.for("v-scx"), Ty = () => Sa(Fy);
function Ci(e, t, r) {
  return Mh(e, t, r);
}
function Mh(e, t, r = Tt) {
  const { immediate: n, deep: i, flush: o, once: s } = r, a = yn({}, r), l = t && n || !t && o !== "post";
  let c;
  if (ps) {
    if (o === "sync") {
      const p = Ty();
      c = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {
      };
      return p.stop = kr, p.resume = kr, p.pause = kr, p;
    }
  }
  const d = pn;
  a.call = (p, w, h) => Ar(p, d, w, h);
  let u = !1;
  o === "post" ? a.scheduler = (p) => {
    En(p, d && d.suspense);
  } : o !== "sync" && (u = !0, a.scheduler = (p, w) => {
    w ? p() : Ju(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), u && (p.flags |= 2, d && (p.id = d.uid, p.i = d));
  };
  const f = Ay(e, t, a);
  return ps && (c ? c.push(f) : l && f()), f;
}
function Dy(e, t, r) {
  const n = this.proxy, i = Qt(e) ? e.includes(".") ? Nh(n, e) : () => n[e] : e.bind(n, n);
  let o;
  ut(t) ? o = t : (o = t.handler, r = t);
  const s = Is(this), a = Mh(i, o.bind(n), r);
  return s(), a;
}
function Nh(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const Ly = /* @__PURE__ */ Symbol("_vte"), Ry = (e) => e.__isTeleport, Vy = /* @__PURE__ */ Symbol("_leaveCb");
function Zu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Zu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ph(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function cf(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Ga = /* @__PURE__ */ new WeakMap();
function ts(e, t, r, n, i = !1) {
  if (it(e)) {
    e.forEach(
      (h, m) => ts(
        h,
        t && (it(t) ? t[m] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (ns(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && ts(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? Ll(n.component) : n.el, s = i ? null : o, { i: a, r: l } = e, c = t && t.r, d = a.refs === Tt ? a.refs = {} : a.refs, u = a.setupState, f = /* @__PURE__ */ wt(u), p = u === Tt ? Yp : (h) => cf(d, h) ? !1 : xt(f, h), w = (h, m) => !(m && cf(d, m));
  if (c != null && c !== l) {
    if (uf(t), Qt(c))
      d[c] = null, p(c) && (u[c] = null);
    else if (/* @__PURE__ */ gn(c)) {
      const h = t;
      w(c, h.k) && (c.value = null), h.k && (d[h.k] = null);
    }
  }
  if (ut(l))
    As(l, a, 12, [s, d]);
  else {
    const h = Qt(l), m = /* @__PURE__ */ gn(l);
    if (h || m) {
      const b = () => {
        if (e.f) {
          const V = h ? p(l) ? u[l] : d[l] : w() || !e.k ? l.value : d[e.k];
          if (i)
            it(V) && zu(V, o);
          else if (it(V))
            V.includes(o) || V.push(o);
          else if (h)
            d[l] = [o], p(l) && (u[l] = d[l]);
          else {
            const T = [o];
            w(l, e.k) && (l.value = T), e.k && (d[e.k] = T);
          }
        } else h ? (d[l] = s, p(l) && (u[l] = s)) : m && (w(l, e.k) && (l.value = s), e.k && (d[e.k] = s));
      };
      if (s) {
        const V = () => {
          b(), Ga.delete(e);
        };
        V.id = -1, Ga.set(e, V), En(V, r);
      } else
        uf(e), b();
    }
  }
}
function uf(e) {
  const t = Ga.get(e);
  t && (t.flags |= 8, Ga.delete(e));
}
Al().requestIdleCallback;
Al().cancelIdleCallback;
const ns = (e) => !!e.type.__asyncLoader, Ah = (e) => e.type.__isKeepAlive;
function $y(e, t) {
  Ch(e, "a", t);
}
function zy(e, t) {
  Ch(e, "da", t);
}
function Ch(e, t, r = pn) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Ol(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Ah(i.parent.vnode) && jy(n, t, r, i), i = i.parent;
  }
}
function jy(e, t, r, n) {
  const i = Ol(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Ih(() => {
    zu(n[t], i);
  }, r);
}
function Ol(e, t, r = pn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...s) => {
      Hr();
      const a = Is(r), l = Ar(t, r, e, s);
      return a(), Gr(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Ur = (e) => (t, r = pn) => {
  (!ps || e === "sp") && Ol(e, (...n) => t(...n), r);
}, Hy = Ur("bm"), Fl = Ur("m"), Gy = Ur(
  "bu"
), Ky = Ur("u"), Cs = Ur(
  "bum"
), Ih = Ur("um"), Wy = Ur(
  "sp"
), Uy = Ur("rtg"), By = Ur("rtc");
function Yy(e, t = pn) {
  Ol("ec", e, t);
}
const qy = "components", Eh = /* @__PURE__ */ Symbol.for("v-ndc");
function Xy(e) {
  return Qt(e) ? Jy(qy, e, !1) || e : e || Eh;
}
function Jy(e, t, r = !0, n = !1) {
  const i = jn || pn;
  if (i) {
    const o = i.type;
    {
      const a = Db(
        o,
        !1
      );
      if (a && (a === t || a === Mn(t) || a === Pl(Mn(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      df(i[e] || o[e], t) || // global registration
      df(i.appContext[e], t)
    );
    return !s && n ? o : s;
  }
}
function df(e, t) {
  return e && (e[t] || e[Mn(t)] || e[Pl(Mn(t))]);
}
function kt(e, t, r, n) {
  let i;
  const o = r, s = it(e);
  if (s || Qt(e)) {
    const a = s && /* @__PURE__ */ Ai(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ Jn(e), c = /* @__PURE__ */ Kr(e), e = Cl(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? c ? ho(pr(e[d])) : pr(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (Ot(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (a, l) => t(a, l, void 0, o)
      );
    else {
      const a = Object.keys(e);
      i = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const d = a[l];
        i[l] = t(e[d], d, l, o);
      }
    }
  else
    i = [];
  return i;
}
const qc = (e) => e ? Zh(e) ? Ll(e) : qc(e.parent) : null, rs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ yn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => qc(e.parent),
    $root: (e) => qc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Fh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ju(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = El.bind(e.proxy)),
    $watch: (e) => Dy.bind(e)
  })
), sc = (e, t) => e !== Tt && !e.__isScriptSetup && xt(e, t), Zy = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: o, accessCache: s, type: a, appContext: l } = e;
    if (t[0] !== "$") {
      const f = s[t];
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
        if (sc(n, t))
          return s[t] = 1, n[t];
        if (i !== Tt && xt(i, t))
          return s[t] = 2, i[t];
        if (xt(o, t))
          return s[t] = 3, o[t];
        if (r !== Tt && xt(r, t))
          return s[t] = 4, r[t];
        Xc && (s[t] = 0);
      }
    }
    const c = rs[t];
    let d, u;
    if (c)
      return t === "$attrs" && fn(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (r !== Tt && xt(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      u = l.config.globalProperties, xt(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return sc(i, t) ? (i[t] = r, !0) : n !== Tt && xt(n, t) ? (n[t] = r, !0) : xt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: s }
  }, a) {
    let l;
    return !!(r[a] || e !== Tt && a[0] !== "$" && xt(e, a) || sc(t, a) || xt(o, a) || xt(n, a) || xt(rs, a) || xt(i.config.globalProperties, a) || (l = s.__cssModules) && l[a]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : xt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function ff(e) {
  return it(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Xc = !0;
function Qy(e) {
  const t = Fh(e), r = e.proxy, n = e.ctx;
  Xc = !1, t.beforeCreate && pf(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: s,
    watch: a,
    provide: l,
    inject: c,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: f,
    beforeUpdate: p,
    updated: w,
    activated: h,
    deactivated: m,
    beforeDestroy: b,
    beforeUnmount: V,
    destroyed: T,
    unmounted: ee,
    render: I,
    renderTracked: X,
    renderTriggered: $,
    errorCaptured: J,
    serverPrefetch: ye,
    // public API
    expose: _e,
    inheritAttrs: me,
    // assets
    components: ve,
    directives: ue,
    filters: we
  } = t;
  if (c && eb(c, n, null), s)
    for (const ie in s) {
      const le = s[ie];
      ut(le) && (n[ie] = le.bind(r));
    }
  if (i) {
    const ie = i.call(r, r);
    Ot(ie) && (e.data = /* @__PURE__ */ _o(ie));
  }
  if (Xc = !0, o)
    for (const ie in o) {
      const le = o[ie], z = ut(le) ? le.bind(r, r) : ut(le.get) ? le.get.bind(r, r) : kr, C = !ut(le) && ut(le.set) ? le.set.bind(r) : kr, R = dt({
        get: z,
        set: C
      });
      Object.defineProperty(n, ie, {
        enumerable: !0,
        configurable: !0,
        get: () => R.value,
        set: (E) => R.value = E
      });
    }
  if (a)
    for (const ie in a)
      Oh(a[ie], n, r, ie);
  if (l) {
    const ie = ut(l) ? l.call(r) : l;
    Reflect.ownKeys(ie).forEach((le) => {
      Oy(le, ie[le]);
    });
  }
  d && pf(d, e, "c");
  function ne(ie, le) {
    it(le) ? le.forEach((z) => ie(z.bind(r))) : le && ie(le.bind(r));
  }
  if (ne(Hy, u), ne(Fl, f), ne(Gy, p), ne(Ky, w), ne($y, h), ne(zy, m), ne(Yy, J), ne(By, X), ne(Uy, $), ne(Cs, V), ne(Ih, ee), ne(Wy, ye), it(_e))
    if (_e.length) {
      const ie = e.exposed || (e.exposed = {});
      _e.forEach((le) => {
        Object.defineProperty(ie, le, {
          get: () => r[le],
          set: (z) => r[le] = z,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  I && e.render === kr && (e.render = I), me != null && (e.inheritAttrs = me), ve && (e.components = ve), ue && (e.directives = ue), ye && Ph(e);
}
function eb(e, t, r = kr) {
  it(e) && (e = Jc(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Ot(i) ? "default" in i ? o = Sa(
      i.from || n,
      i.default,
      !0
    ) : o = Sa(i.from || n) : o = Sa(i), /* @__PURE__ */ gn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[n] = o;
  }
}
function pf(e, t, r) {
  Ar(
    it(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Oh(e, t, r, n) {
  let i = n.includes(".") ? Nh(r, n) : () => r[n];
  if (Qt(e)) {
    const o = t[e];
    ut(o) && Ci(i, o);
  } else if (ut(e))
    Ci(i, e.bind(r));
  else if (Ot(e))
    if (it(e))
      e.forEach((o) => Oh(o, t, r, n));
    else {
      const o = ut(e.handler) ? e.handler.bind(r) : t[e.handler];
      ut(o) && Ci(i, o, e);
    }
}
function Fh(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (c) => Ka(l, c, s, !0)
  ), Ka(l, t, s)), Ot(t) && o.set(t, l), l;
}
function Ka(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Ka(e, o, r, !0), i && i.forEach(
    (s) => Ka(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const a = tb[s] || r && r[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const tb = {
  data: hf,
  props: mf,
  emits: mf,
  // objects
  methods: Ho,
  computed: Ho,
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
  components: Ho,
  directives: Ho,
  // watch
  watch: rb,
  // provide / inject
  provide: hf,
  inject: nb
};
function hf(e, t) {
  return t ? e ? function() {
    return yn(
      ut(e) ? e.call(this, this) : e,
      ut(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function nb(e, t) {
  return Ho(Jc(e), Jc(t));
}
function Jc(e) {
  if (it(e)) {
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
function Ho(e, t) {
  return e ? yn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function mf(e, t) {
  return e ? it(e) && it(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yn(
    /* @__PURE__ */ Object.create(null),
    ff(e),
    ff(t ?? {})
  ) : t;
}
function rb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = yn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = Sn(e[n], t[n]);
  return r;
}
function Th() {
  return {
    app: null,
    config: {
      isNativeTag: Yp,
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
let ib = 0;
function ob(e, t) {
  return function(n, i = null) {
    ut(n) || (n = yn({}, n)), i != null && !Ot(i) && (i = null);
    const o = Th(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: ib++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Rb,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...u) {
        return s.has(d) || (d && ut(d.install) ? (s.add(d), d.install(c, ...u)) : ut(d) && (s.add(d), d(c, ...u))), c;
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), c;
      },
      component(d, u) {
        return u ? (o.components[d] = u, c) : o.components[d];
      },
      directive(d, u) {
        return u ? (o.directives[d] = u, c) : o.directives[d];
      },
      mount(d, u, f) {
        if (!l) {
          const p = c._ceVNode || Be(n, i);
          return p.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(p, d, f), l = !0, c._container = d, d.__vue_app__ = c, Ll(p.component);
        }
      },
      onUnmount(d) {
        a.push(d);
      },
      unmount() {
        l && (Ar(
          a,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, u) {
        return o.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = lo;
        lo = c;
        try {
          return d();
        } finally {
          lo = u;
        }
      }
    };
    return c;
  };
}
let lo = null;
const sb = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Mn(t)}Modifiers`] || e[`${Ri(t)}Modifiers`];
function ab(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Tt;
  let i = r;
  const o = t.startsWith("update:"), s = o && sb(n, t.slice(7));
  s && (s.trim && (i = r.map((d) => Qt(d) ? d.trim() : d)), s.number && (i = r.map(Hu)));
  let a, l = n[a = tc(t)] || // also try camelCase event handler (#2249)
  n[a = tc(Mn(t))];
  !l && o && (l = n[a = tc(Ri(t))]), l && Ar(
    l,
    e,
    6,
    i
  );
  const c = n[a + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, Ar(
      c,
      e,
      6,
      i
    );
  }
}
const lb = /* @__PURE__ */ new WeakMap();
function Dh(e, t, r = !1) {
  const n = r ? lb : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!ut(e)) {
    const l = (c) => {
      const d = Dh(c, t, !0);
      d && (a = !0, yn(s, d));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (Ot(e) && n.set(e, null), null) : (it(o) ? o.forEach((l) => s[l] = null) : yn(s, o), Ot(e) && n.set(e, s), s);
}
function Tl(e, t) {
  return !e || !kl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), xt(e, t[0].toLowerCase() + t.slice(1)) || xt(e, Ri(t)) || xt(e, t));
}
function gf(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: s,
    attrs: a,
    emit: l,
    render: c,
    renderCache: d,
    props: u,
    data: f,
    setupState: p,
    ctx: w,
    inheritAttrs: h
  } = e, m = Ha(e);
  let b, V;
  try {
    if (r.shapeFlag & 4) {
      const ee = i || n, I = ee;
      b = vr(
        c.call(
          I,
          ee,
          d,
          u,
          p,
          f,
          w
        )
      ), V = a;
    } else {
      const ee = t;
      b = vr(
        ee.length > 1 ? ee(
          u,
          { attrs: a, slots: s, emit: l }
        ) : ee(
          u,
          null
        )
      ), V = t.props ? a : cb(a);
    }
  } catch (ee) {
    is.length = 0, Il(ee, e, 1), b = Be(oi);
  }
  let T = b;
  if (V && h !== !1) {
    const ee = Object.keys(V), { shapeFlag: I } = T;
    ee.length && I & 7 && (o && ee.some(Ml) && (V = ub(
      V,
      o
    )), T = mo(T, V, !1, !0));
  }
  return r.dirs && (T = mo(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(r.dirs) : r.dirs), r.transition && Zu(T, r.transition), b = T, Ha(m), b;
}
const cb = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || kl(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, ub = (e, t) => {
  const r = {};
  for (const n in e)
    (!Ml(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function db(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: s, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? yf(n, s, c) : !!s;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (Lh(s, n, f) && !Tl(c, f))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : n === s ? !1 : n ? s ? yf(n, s, c) : !0 : !!s;
  return !1;
}
function yf(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (Lh(t, e, o) && !Tl(r, o))
      return !0;
  }
  return !1;
}
function Lh(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Ot(n) && Ot(i) ? !Gu(n, i) : n !== i;
}
function fb({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const Rh = {}, Vh = () => Object.create(Rh), $h = (e) => Object.getPrototypeOf(e) === Rh;
function pb(e, t, r, n = !1) {
  const i = {}, o = Vh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), zh(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ _y(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function hb(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, a = /* @__PURE__ */ wt(i), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let f = d[u];
        if (Tl(e.emitsOptions, f))
          continue;
        const p = t[f];
        if (l)
          if (xt(o, f))
            p !== o[f] && (o[f] = p, c = !0);
          else {
            const w = Mn(f);
            i[w] = Zc(
              l,
              a,
              w,
              p,
              e,
              !1
            );
          }
        else
          p !== o[f] && (o[f] = p, c = !0);
      }
    }
  } else {
    zh(e, t, i, o) && (c = !0);
    let d;
    for (const u in a)
      (!t || // for camelCase
      !xt(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ri(u)) === u || !xt(t, d))) && (l ? r && // for camelCase
      (r[u] !== void 0 || // for kebab-case
      r[d] !== void 0) && (i[u] = Zc(
        l,
        a,
        u,
        void 0,
        e,
        !0
      )) : delete i[u]);
    if (o !== a)
      for (const u in o)
        (!t || !xt(t, u)) && (delete o[u], c = !0);
  }
  c && Lr(e.attrs, "set", "");
}
function zh(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let l in t) {
      if (Zo(l))
        continue;
      const c = t[l];
      let d;
      i && xt(i, d = Mn(l)) ? !o || !o.includes(d) ? r[d] = c : (a || (a = {}))[d] = c : Tl(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, s = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ wt(r), c = a || Tt;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      r[u] = Zc(
        i,
        l,
        u,
        c[u],
        e,
        !xt(c, u)
      );
    }
  }
  return s;
}
function Zc(e, t, r, n, i, o) {
  const s = e[r];
  if (s != null) {
    const a = xt(s, "default");
    if (a && n === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && ut(l)) {
        const { propsDefaults: c } = i;
        if (r in c)
          n = c[r];
        else {
          const d = Is(i);
          n = c[r] = l.call(
            null,
            t
          ), d();
        }
      } else
        n = l;
      i.ce && i.ce._setProp(r, n);
    }
    s[
      0
      /* shouldCast */
    ] && (o && !a ? n = !1 : s[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Ri(r)) && (n = !0));
  }
  return n;
}
const mb = /* @__PURE__ */ new WeakMap();
function jh(e, t, r = !1) {
  const n = r ? mb : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let l = !1;
  if (!ut(e)) {
    const d = (u) => {
      l = !0;
      const [f, p] = jh(u, t, !0);
      yn(s, f), p && a.push(...p);
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return Ot(e) && n.set(e, oo), oo;
  if (it(o))
    for (let d = 0; d < o.length; d++) {
      const u = Mn(o[d]);
      bf(u) && (s[u] = Tt);
    }
  else if (o)
    for (const d in o) {
      const u = Mn(d);
      if (bf(u)) {
        const f = o[d], p = s[u] = it(f) || ut(f) ? { type: f } : yn({}, f), w = p.type;
        let h = !1, m = !0;
        if (it(w))
          for (let b = 0; b < w.length; ++b) {
            const V = w[b], T = ut(V) && V.name;
            if (T === "Boolean") {
              h = !0;
              break;
            } else T === "String" && (m = !1);
          }
        else
          h = ut(w) && w.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = h, p[
          1
          /* shouldCastTrue */
        ] = m, (h || xt(p, "default")) && a.push(u);
      }
    }
  const c = [s, a];
  return Ot(e) && n.set(e, c), c;
}
function bf(e) {
  return e[0] !== "$" && !Zo(e);
}
const Qu = (e) => e === "_" || e === "_ctx" || e === "$stable", ed = (e) => it(e) ? e.map(vr) : [vr(e)], gb = (e, t, r) => {
  if (t._n)
    return t;
  const n = kh((...i) => ed(t(...i)), r);
  return n._c = !1, n;
}, Hh = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (Qu(i)) continue;
    const o = e[i];
    if (ut(o))
      t[i] = gb(i, o, n);
    else if (o != null) {
      const s = ed(o);
      t[i] = () => s;
    }
  }
}, Gh = (e, t) => {
  const r = ed(t);
  e.slots.default = () => r;
}, Kh = (e, t, r) => {
  for (const n in t)
    (r || !Qu(n)) && (e[n] = t[n]);
}, yb = (e, t, r) => {
  const n = e.slots = Vh();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Kh(n, t, r), r && Qp(n, "_", i, !0)) : Hh(t, n);
  } else t && Gh(e, t);
}, bb = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, s = Tt;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? r && a === 1 ? o = !1 : Kh(i, t, r) : (o = !t.$stable, Hh(t, i)), s = t;
  } else t && (Gh(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !Qu(a) && s[a] == null && delete i[a];
}, En = xb;
function vb(e) {
  return Sb(e);
}
function Sb(e, t) {
  const r = Al();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: s,
    createText: a,
    createComment: l,
    setText: c,
    setElementText: d,
    parentNode: u,
    nextSibling: f,
    setScopeId: p = kr,
    insertStaticContent: w
  } = e, h = (g, S, O, v = null, j = null, H = null, D = void 0, A = null, F = !!S.dynamicChildren) => {
    if (g === S)
      return;
    g && !Do(g, S) && (v = Z(g), E(g, j, H, !0), g = null), S.patchFlag === -2 && (F = !1, S.dynamicChildren = null);
    const { type: x, ref: G, shapeFlag: Y } = S;
    switch (x) {
      case Dl:
        m(g, S, O, v);
        break;
      case oi:
        b(g, S, O, v);
        break;
      case lc:
        g == null && V(S, O, v, D);
        break;
      case Ze:
        ve(
          g,
          S,
          O,
          v,
          j,
          H,
          D,
          A,
          F
        );
        break;
      default:
        Y & 1 ? I(
          g,
          S,
          O,
          v,
          j,
          H,
          D,
          A,
          F
        ) : Y & 6 ? ue(
          g,
          S,
          O,
          v,
          j,
          H,
          D,
          A,
          F
        ) : (Y & 64 || Y & 128) && x.process(
          g,
          S,
          O,
          v,
          j,
          H,
          D,
          A,
          F,
          P
        );
    }
    G != null && j ? ts(G, g && g.ref, H, S || g, !S) : G == null && g && g.ref != null && ts(g.ref, null, H, g, !0);
  }, m = (g, S, O, v) => {
    if (g == null)
      n(
        S.el = a(S.children),
        O,
        v
      );
    else {
      const j = S.el = g.el;
      S.children !== g.children && c(j, S.children);
    }
  }, b = (g, S, O, v) => {
    g == null ? n(
      S.el = l(S.children || ""),
      O,
      v
    ) : S.el = g.el;
  }, V = (g, S, O, v) => {
    [g.el, g.anchor] = w(
      g.children,
      S,
      O,
      v,
      g.el,
      g.anchor
    );
  }, T = ({ el: g, anchor: S }, O, v) => {
    let j;
    for (; g && g !== S; )
      j = f(g), n(g, O, v), g = j;
    n(S, O, v);
  }, ee = ({ el: g, anchor: S }) => {
    let O;
    for (; g && g !== S; )
      O = f(g), i(g), g = O;
    i(S);
  }, I = (g, S, O, v, j, H, D, A, F) => {
    if (S.type === "svg" ? D = "svg" : S.type === "math" && (D = "mathml"), g == null)
      X(
        S,
        O,
        v,
        j,
        H,
        D,
        A,
        F
      );
    else {
      const x = g.el && g.el._isVueCE ? g.el : null;
      try {
        x && x._beginPatch(), ye(
          g,
          S,
          j,
          H,
          D,
          A,
          F
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, X = (g, S, O, v, j, H, D, A) => {
    let F, x;
    const { props: G, shapeFlag: Y, transition: fe, dirs: Se } = g;
    if (F = g.el = s(
      g.type,
      H,
      G && G.is,
      G
    ), Y & 8 ? d(F, g.children) : Y & 16 && J(
      g.children,
      F,
      null,
      v,
      j,
      ac(g, H),
      D,
      A
    ), Se && yi(g, null, v, "created"), $(F, g, g.scopeId, D, v), G) {
      for (const ce in G)
        ce !== "value" && !Zo(ce) && o(F, ce, null, G[ce], H, v);
      "value" in G && o(F, "value", null, G.value, H), (x = G.onVnodeBeforeMount) && mr(x, v, g);
    }
    Se && yi(g, null, v, "beforeMount");
    const ke = _b(j, fe);
    ke && fe.beforeEnter(F), n(F, S, O), ((x = G && G.onVnodeMounted) || ke || Se) && En(() => {
      try {
        x && mr(x, v, g), ke && fe.enter(F), Se && yi(g, null, v, "mounted");
      } finally {
      }
    }, j);
  }, $ = (g, S, O, v, j) => {
    if (O && p(g, O), v)
      for (let H = 0; H < v.length; H++)
        p(g, v[H]);
    if (j) {
      let H = j.subTree;
      if (S === H || Yh(H.type) && (H.ssContent === S || H.ssFallback === S)) {
        const D = j.vnode;
        $(
          g,
          D,
          D.scopeId,
          D.slotScopeIds,
          j.parent
        );
      }
    }
  }, J = (g, S, O, v, j, H, D, A, F = 0) => {
    for (let x = F; x < g.length; x++) {
      const G = g[x] = A ? Fr(g[x]) : vr(g[x]);
      h(
        null,
        G,
        S,
        O,
        v,
        j,
        H,
        D,
        A
      );
    }
  }, ye = (g, S, O, v, j, H, D) => {
    const A = S.el = g.el;
    let { patchFlag: F, dynamicChildren: x, dirs: G } = S;
    F |= g.patchFlag & 16;
    const Y = g.props || Tt, fe = S.props || Tt;
    let Se;
    if (O && bi(O, !1), (Se = fe.onVnodeBeforeUpdate) && mr(Se, O, S, g), G && yi(S, g, O, "beforeUpdate"), O && bi(O, !0), (Y.innerHTML && fe.innerHTML == null || Y.textContent && fe.textContent == null) && d(A, ""), x ? _e(
      g.dynamicChildren,
      x,
      A,
      O,
      v,
      ac(S, j),
      H
    ) : D || le(
      g,
      S,
      A,
      null,
      O,
      v,
      ac(S, j),
      H,
      !1
    ), F > 0) {
      if (F & 16)
        me(A, Y, fe, O, j);
      else if (F & 2 && Y.class !== fe.class && o(A, "class", null, fe.class, j), F & 4 && o(A, "style", Y.style, fe.style, j), F & 8) {
        const ke = S.dynamicProps;
        for (let ce = 0; ce < ke.length; ce++) {
          const xe = ke[ce], B = Y[xe], pe = fe[xe];
          (pe !== B || xe === "value") && o(A, xe, B, pe, j, O);
        }
      }
      F & 1 && g.children !== S.children && d(A, S.children);
    } else !D && x == null && me(A, Y, fe, O, j);
    ((Se = fe.onVnodeUpdated) || G) && En(() => {
      Se && mr(Se, O, S, g), G && yi(S, g, O, "updated");
    }, v);
  }, _e = (g, S, O, v, j, H, D) => {
    for (let A = 0; A < S.length; A++) {
      const F = g[A], x = S[A], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        F.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (F.type === Ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Do(F, x) || // - In the case of a component, it could contain anything.
        F.shapeFlag & 198) ? u(F.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          O
        )
      );
      h(
        F,
        x,
        G,
        null,
        v,
        j,
        H,
        D,
        !0
      );
    }
  }, me = (g, S, O, v, j) => {
    if (S !== O) {
      if (S !== Tt)
        for (const H in S)
          !Zo(H) && !(H in O) && o(
            g,
            H,
            S[H],
            null,
            j,
            v
          );
      for (const H in O) {
        if (Zo(H)) continue;
        const D = O[H], A = S[H];
        D !== A && H !== "value" && o(g, H, A, D, j, v);
      }
      "value" in O && o(g, "value", S.value, O.value, j);
    }
  }, ve = (g, S, O, v, j, H, D, A, F) => {
    const x = S.el = g ? g.el : a(""), G = S.anchor = g ? g.anchor : a("");
    let { patchFlag: Y, dynamicChildren: fe, slotScopeIds: Se } = S;
    Se && (A = A ? A.concat(Se) : Se), g == null ? (n(x, O, v), n(G, O, v), J(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      S.children || [],
      O,
      G,
      j,
      H,
      D,
      A,
      F
    )) : Y > 0 && Y & 64 && fe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren && g.dynamicChildren.length === fe.length ? (_e(
      g.dynamicChildren,
      fe,
      O,
      j,
      H,
      D,
      A
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (S.key != null || j && S === j.subTree) && Wh(
      g,
      S,
      !0
      /* shallow */
    )) : le(
      g,
      S,
      O,
      G,
      j,
      H,
      D,
      A,
      F
    );
  }, ue = (g, S, O, v, j, H, D, A, F) => {
    S.slotScopeIds = A, g == null ? S.shapeFlag & 512 ? j.ctx.activate(
      S,
      O,
      v,
      D,
      F
    ) : we(
      S,
      O,
      v,
      j,
      H,
      D,
      F
    ) : de(g, S, F);
  }, we = (g, S, O, v, j, H, D) => {
    const A = g.component = Cb(
      g,
      v,
      j
    );
    if (Ah(g) && (A.ctx.renderer = P), Eb(A, !1, D), A.asyncDep) {
      if (j && j.registerDep(A, ne, D), !g.el) {
        const F = A.subTree = Be(oi);
        b(null, F, S, O), g.placeholder = F.el;
      }
    } else
      ne(
        A,
        g,
        S,
        O,
        j,
        H,
        D
      );
  }, de = (g, S, O) => {
    const v = S.component = g.component;
    if (db(g, S, O))
      if (v.asyncDep && !v.asyncResolved) {
        ie(v, S, O);
        return;
      } else
        v.next = S, v.update();
    else
      S.el = g.el, v.vnode = S;
  }, ne = (g, S, O, v, j, H, D) => {
    const A = () => {
      if (g.isMounted) {
        let { next: Y, bu: fe, u: Se, parent: ke, vnode: ce } = g;
        {
          const se = Uh(g);
          if (se) {
            Y && (Y.el = ce.el, ie(g, Y, D)), se.asyncDep.then(() => {
              En(() => {
                g.isUnmounted || x();
              }, j);
            });
            return;
          }
        }
        let xe = Y, B;
        bi(g, !1), Y ? (Y.el = ce.el, ie(g, Y, D)) : Y = ce, fe && va(fe), (B = Y.props && Y.props.onVnodeBeforeUpdate) && mr(B, ke, Y, ce), bi(g, !0);
        const pe = gf(g), W = g.subTree;
        g.subTree = pe, h(
          W,
          pe,
          // parent may have changed if it's in a teleport
          u(W.el),
          // anchor may have changed if it's in a fragment
          Z(W),
          g,
          j,
          H
        ), Y.el = pe.el, xe === null && fb(g, pe.el), Se && En(Se, j), (B = Y.props && Y.props.onVnodeUpdated) && En(
          () => mr(B, ke, Y, ce),
          j
        );
      } else {
        let Y;
        const { el: fe, props: Se } = S, { bm: ke, m: ce, parent: xe, root: B, type: pe } = g, W = ns(S);
        bi(g, !1), ke && va(ke), !W && (Y = Se && Se.onVnodeBeforeMount) && mr(Y, xe, S), bi(g, !0);
        {
          B.ce && B.ce._hasShadowRoot() && B.ce._injectChildStyle(
            pe,
            g.parent ? g.parent.type : void 0
          );
          const se = g.subTree = gf(g);
          h(
            null,
            se,
            O,
            v,
            g,
            j,
            H
          ), S.el = se.el;
        }
        if (ce && En(ce, j), !W && (Y = Se && Se.onVnodeMounted)) {
          const se = S;
          En(
            () => mr(Y, xe, se),
            j
          );
        }
        (S.shapeFlag & 256 || xe && ns(xe.vnode) && xe.vnode.shapeFlag & 256) && g.a && En(g.a, j), g.isMounted = !0, S = O = v = null;
      }
    };
    g.scope.on();
    const F = g.effect = new rh(A);
    g.scope.off();
    const x = g.update = F.run.bind(F), G = g.job = F.runIfDirty.bind(F);
    G.i = g, G.id = g.uid, F.scheduler = () => Ju(G), bi(g, !0), x();
  }, ie = (g, S, O) => {
    S.component = g;
    const v = g.vnode.props;
    g.vnode = S, g.next = null, hb(g, S.props, v, O), bb(g, S.children, O), Hr(), lf(g), Gr();
  }, le = (g, S, O, v, j, H, D, A, F = !1) => {
    const x = g && g.children, G = g ? g.shapeFlag : 0, Y = S.children, { patchFlag: fe, shapeFlag: Se } = S;
    if (fe > 0) {
      if (fe & 128) {
        C(
          x,
          Y,
          O,
          v,
          j,
          H,
          D,
          A,
          F
        );
        return;
      } else if (fe & 256) {
        z(
          x,
          Y,
          O,
          v,
          j,
          H,
          D,
          A,
          F
        );
        return;
      }
    }
    Se & 8 ? (G & 16 && L(x, j, H), Y !== x && d(O, Y)) : G & 16 ? Se & 16 ? C(
      x,
      Y,
      O,
      v,
      j,
      H,
      D,
      A,
      F
    ) : L(x, j, H, !0) : (G & 8 && d(O, ""), Se & 16 && J(
      Y,
      O,
      v,
      j,
      H,
      D,
      A,
      F
    ));
  }, z = (g, S, O, v, j, H, D, A, F) => {
    g = g || oo, S = S || oo;
    const x = g.length, G = S.length, Y = Math.min(x, G);
    let fe;
    for (fe = 0; fe < Y; fe++) {
      const Se = S[fe] = F ? Fr(S[fe]) : vr(S[fe]);
      h(
        g[fe],
        Se,
        O,
        null,
        j,
        H,
        D,
        A,
        F
      );
    }
    x > G ? L(
      g,
      j,
      H,
      !0,
      !1,
      Y
    ) : J(
      S,
      O,
      v,
      j,
      H,
      D,
      A,
      F,
      Y
    );
  }, C = (g, S, O, v, j, H, D, A, F) => {
    let x = 0;
    const G = S.length;
    let Y = g.length - 1, fe = G - 1;
    for (; x <= Y && x <= fe; ) {
      const Se = g[x], ke = S[x] = F ? Fr(S[x]) : vr(S[x]);
      if (Do(Se, ke))
        h(
          Se,
          ke,
          O,
          null,
          j,
          H,
          D,
          A,
          F
        );
      else
        break;
      x++;
    }
    for (; x <= Y && x <= fe; ) {
      const Se = g[Y], ke = S[fe] = F ? Fr(S[fe]) : vr(S[fe]);
      if (Do(Se, ke))
        h(
          Se,
          ke,
          O,
          null,
          j,
          H,
          D,
          A,
          F
        );
      else
        break;
      Y--, fe--;
    }
    if (x > Y) {
      if (x <= fe) {
        const Se = fe + 1, ke = Se < G ? S[Se].el : v;
        for (; x <= fe; )
          h(
            null,
            S[x] = F ? Fr(S[x]) : vr(S[x]),
            O,
            ke,
            j,
            H,
            D,
            A,
            F
          ), x++;
      }
    } else if (x > fe)
      for (; x <= Y; )
        E(g[x], j, H, !0), x++;
    else {
      const Se = x, ke = x, ce = /* @__PURE__ */ new Map();
      for (x = ke; x <= fe; x++) {
        const U = S[x] = F ? Fr(S[x]) : vr(S[x]);
        U.key != null && ce.set(U.key, x);
      }
      let xe, B = 0;
      const pe = fe - ke + 1;
      let W = !1, se = 0;
      const K = new Array(pe);
      for (x = 0; x < pe; x++) K[x] = 0;
      for (x = Se; x <= Y; x++) {
        const U = g[x];
        if (B >= pe) {
          E(U, j, H, !0);
          continue;
        }
        let N;
        if (U.key != null)
          N = ce.get(U.key);
        else
          for (xe = ke; xe <= fe; xe++)
            if (K[xe - ke] === 0 && Do(U, S[xe])) {
              N = xe;
              break;
            }
        N === void 0 ? E(U, j, H, !0) : (K[N - ke] = x + 1, N >= se ? se = N : W = !0, h(
          U,
          S[N],
          O,
          null,
          j,
          H,
          D,
          A,
          F
        ), B++);
      }
      const q = W ? wb(K) : oo;
      for (xe = q.length - 1, x = pe - 1; x >= 0; x--) {
        const U = ke + x, N = S[U], Q = S[U + 1], M = U + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Q.el || Bh(Q)
        ) : v;
        K[x] === 0 ? h(
          null,
          N,
          O,
          M,
          j,
          H,
          D,
          A,
          F
        ) : W && (xe < 0 || x !== q[xe] ? R(N, O, M, 2) : xe--);
      }
    }
  }, R = (g, S, O, v, j = null) => {
    const { el: H, type: D, transition: A, children: F, shapeFlag: x } = g;
    if (x & 6) {
      R(g.component.subTree, S, O, v);
      return;
    }
    if (x & 128) {
      g.suspense.move(S, O, v);
      return;
    }
    if (x & 64) {
      D.move(g, S, O, P);
      return;
    }
    if (D === Ze) {
      n(H, S, O);
      for (let Y = 0; Y < F.length; Y++)
        R(F[Y], S, O, v);
      n(g.anchor, S, O);
      return;
    }
    if (D === lc) {
      T(g, S, O);
      return;
    }
    if (v !== 2 && x & 1 && A)
      if (v === 0)
        A.beforeEnter(H), n(H, S, O), En(() => A.enter(H), j);
      else {
        const { leave: Y, delayLeave: fe, afterLeave: Se } = A, ke = () => {
          g.ctx.isUnmounted ? i(H) : n(H, S, O);
        }, ce = () => {
          H._isLeaving && H[Vy](
            !0
            /* cancelled */
          ), Y(H, () => {
            ke(), Se && Se();
          });
        };
        fe ? fe(H, ke, ce) : ce();
      }
    else
      n(H, S, O);
  }, E = (g, S, O, v = !1, j = !1) => {
    const {
      type: H,
      props: D,
      ref: A,
      children: F,
      dynamicChildren: x,
      shapeFlag: G,
      patchFlag: Y,
      dirs: fe,
      cacheIndex: Se,
      memo: ke
    } = g;
    if (Y === -2 && (j = !1), A != null && (Hr(), ts(A, null, O, g, !0), Gr()), Se != null && (S.renderCache[Se] = void 0), G & 256) {
      S.ctx.deactivate(g);
      return;
    }
    const ce = G & 1 && fe, xe = !ns(g);
    let B;
    if (xe && (B = D && D.onVnodeBeforeUnmount) && mr(B, S, g), G & 6)
      y(g.component, O, v);
    else {
      if (G & 128) {
        g.suspense.unmount(O, v);
        return;
      }
      ce && yi(g, null, S, "beforeUnmount"), G & 64 ? g.type.remove(
        g,
        S,
        O,
        P,
        v
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (H !== Ze || Y > 0 && Y & 64) ? L(
        x,
        S,
        O,
        !1,
        !0
      ) : (H === Ze && Y & 384 || !j && G & 16) && L(F, S, O), v && k(g);
    }
    const pe = ke != null && Se == null;
    (xe && (B = D && D.onVnodeUnmounted) || ce || pe) && En(() => {
      B && mr(B, S, g), ce && yi(g, null, S, "unmounted"), pe && (g.el = null);
    }, O);
  }, k = (g) => {
    const { type: S, el: O, anchor: v, transition: j } = g;
    if (S === Ze) {
      _(O, v);
      return;
    }
    if (S === lc) {
      ee(g);
      return;
    }
    const H = () => {
      i(O), j && !j.persisted && j.afterLeave && j.afterLeave();
    };
    if (g.shapeFlag & 1 && j && !j.persisted) {
      const { leave: D, delayLeave: A } = j, F = () => D(O, H);
      A ? A(g.el, H, F) : F();
    } else
      H();
  }, _ = (g, S) => {
    let O;
    for (; g !== S; )
      O = f(g), i(g), g = O;
    i(S);
  }, y = (g, S, O) => {
    const { bum: v, scope: j, job: H, subTree: D, um: A, m: F, a: x } = g;
    vf(F), vf(x), v && va(v), j.stop(), H && (H.flags |= 8, E(D, g, S, O)), A && En(A, S), En(() => {
      g.isUnmounted = !0;
    }, S);
  }, L = (g, S, O, v = !1, j = !1, H = 0) => {
    for (let D = H; D < g.length; D++)
      E(g[D], S, O, v, j);
  }, Z = (g) => {
    if (g.shapeFlag & 6)
      return Z(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const S = f(g.anchor || g.el), O = S && S[Ly];
    return O ? f(O) : S;
  };
  let he = !1;
  const ge = (g, S, O) => {
    let v;
    g == null ? S._vnode && (E(S._vnode, null, null, !0), v = S._vnode.component) : h(
      S._vnode || null,
      g,
      S,
      null,
      null,
      null,
      O
    ), S._vnode = g, he || (he = !0, lf(v), _h(), he = !1);
  }, P = {
    p: h,
    um: E,
    m: R,
    r: k,
    mt: we,
    mc: J,
    pc: le,
    pbc: _e,
    n: Z,
    o: e
  };
  return {
    render: ge,
    hydrate: void 0,
    createApp: ob(ge)
  };
}
function ac({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function bi({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function _b(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Wh(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (it(n) && it(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = Fr(i[o]), a.el = s.el), !r && a.patchFlag !== -2 && Wh(s, a)), a.type === Dl && (a.patchFlag === -1 && (a = i[o] = Fr(a)), a.el = s.el), a.type === oi && !a.el && (a.el = s.el);
    }
}
function wb(e) {
  const t = e.slice(), r = [0];
  let n, i, o, s, a;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const c = e[n];
    if (c !== 0) {
      if (i = r[r.length - 1], e[i] < c) {
        t[n] = i, r.push(n);
        continue;
      }
      for (o = 0, s = r.length - 1; o < s; )
        a = o + s >> 1, e[r[a]] < c ? o = a + 1 : s = a;
      c < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), r[o] = n);
    }
  }
  for (o = r.length, s = r[o - 1]; o-- > 0; )
    r[o] = s, s = t[s];
  return r;
}
function Uh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Uh(t);
}
function vf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Bh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Bh(t.subTree) : null;
}
const Yh = (e) => e.__isSuspense;
function xb(e, t) {
  t && t.pendingBranch ? it(e) ? t.effects.push(...e) : t.effects.push(e) : Ey(e);
}
const Ze = /* @__PURE__ */ Symbol.for("v-fgt"), Dl = /* @__PURE__ */ Symbol.for("v-txt"), oi = /* @__PURE__ */ Symbol.for("v-cmt"), lc = /* @__PURE__ */ Symbol.for("v-stc"), is = [];
let Hn = null;
function Le(e = !1) {
  is.push(Hn = e ? null : []);
}
function kb() {
  is.pop(), Hn = is[is.length - 1] || null;
}
let fs = 1;
function Sf(e, t = !1) {
  fs += e, e < 0 && Hn && t && (Hn.hasOnce = !0);
}
function qh(e) {
  return e.dynamicChildren = fs > 0 ? Hn || oo : null, kb(), fs > 0 && Hn && Hn.push(e), e;
}
function Re(e, t, r, n, i, o) {
  return qh(
    Me(
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
function Ln(e, t, r, n, i) {
  return qh(
    Be(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function Xh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Do(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Jh = ({ key: e }) => e ?? null, _a = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Qt(e) || /* @__PURE__ */ gn(e) || ut(e) ? { i: jn, r: e, k: t, f: !!r } : e : null);
function Me(e, t = null, r = null, n = 0, i = null, o = e === Ze ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Jh(t),
    ref: t && _a(t),
    scopeId: xh,
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
  return a ? (td(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Qt(r) ? 8 : 16), fs > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Hn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Hn.push(l), l;
}
const Be = Mb;
function Mb(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === Eh) && (e = oi), Xh(e)) {
    const a = mo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && td(a, r), fs > 0 && !o && Hn && (a.shapeFlag & 6 ? Hn[Hn.indexOf(e)] = a : Hn.push(a)), a.patchFlag = -2, a;
  }
  if (Lb(e) && (e = e.__vccOpts), t) {
    t = Nb(t);
    let { class: a, style: l } = t;
    a && !Qt(a) && (t.class = mt(a)), Ot(l) && (/* @__PURE__ */ Xu(l) && !it(l) && (l = yn({}, l)), t.style = Et(l));
  }
  const s = Qt(e) ? 1 : Yh(e) ? 128 : Ry(e) ? 64 : Ot(e) ? 4 : ut(e) ? 2 : 0;
  return Me(
    e,
    t,
    r,
    n,
    i,
    s,
    o,
    !0
  );
}
function Nb(e) {
  return e ? /* @__PURE__ */ Xu(e) || $h(e) ? yn({}, e) : e : null;
}
function mo(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: l } = e, c = t ? Tr(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Jh(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? it(o) ? o.concat(_a(t)) : [o, _a(t)] : _a(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ze ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && mo(e.ssContent),
    ssFallback: e.ssFallback && mo(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && Zu(
    d,
    l.clone(d)
  ), d;
}
function Go(e = " ", t = 0) {
  return Be(Dl, null, e, t);
}
function ot(e = "", t = !1) {
  return t ? (Le(), Ln(oi, null, e)) : Be(oi, null, e);
}
function vr(e) {
  return e == null || typeof e == "boolean" ? Be(oi) : it(e) ? Be(
    Ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Xh(e) ? Fr(e) : Be(Dl, null, String(e));
}
function Fr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : mo(e);
}
function td(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (it(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), td(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !$h(t) ? t._ctx = jn : i === 3 && jn && (jn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ut(t) ? (t = { default: t, _ctx: jn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Go(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Tr(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = mt([t.class, n.class]));
      else if (i === "style")
        t.style = Et([t.style, n.style]);
      else if (kl(i)) {
        const o = t[i], s = n[i];
        s && o !== s && !(it(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ml(i) && (t[i] = s);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function mr(e, t, r, n = null) {
  Ar(e, t, 7, [
    r,
    n
  ]);
}
const Pb = Th();
let Ab = 0;
function Cb(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Pb, o = {
    uid: Ab++,
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
    scope: new ty(
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
    propsOptions: jh(n, i),
    emitsOptions: Dh(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Tt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Tt,
    data: Tt,
    props: Tt,
    attrs: Tt,
    slots: Tt,
    refs: Tt,
    setupState: Tt,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ab.bind(null, o), e.ce && e.ce(o), o;
}
let pn = null;
const Ib = () => pn || jn;
let Wa, Qc;
{
  const e = Al(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  Wa = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => pn = r
  ), Qc = t(
    "__VUE_SSR_SETTERS__",
    (r) => ps = r
  );
}
const Is = (e) => {
  const t = pn;
  return Wa(e), e.scope.on(), () => {
    e.scope.off(), Wa(t);
  };
}, _f = () => {
  pn && pn.scope.off(), Wa(null);
};
function Zh(e) {
  return e.vnode.shapeFlag & 4;
}
let ps = !1;
function Eb(e, t = !1, r = !1) {
  t && Qc(t);
  const { props: n, children: i } = e.vnode, o = Zh(e);
  pb(e, n, o, t), yb(e, i, r || t);
  const s = o ? Ob(e, t) : void 0;
  return t && Qc(!1), s;
}
function Ob(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Zy);
  const { setup: n } = r;
  if (n) {
    Hr();
    const i = e.setupContext = n.length > 1 ? Tb(e) : null, o = Is(e), s = As(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = Xp(s);
    if (Gr(), o(), (a || e.sp) && !ns(e) && Ph(e), a) {
      if (s.then(_f, _f), t)
        return s.then((l) => {
          wf(e, l);
        }).catch((l) => {
          Il(l, e, 0);
        });
      e.asyncDep = s;
    } else
      wf(e, s);
  } else
    Qh(e);
}
function wf(e, t, r) {
  ut(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ot(t) && (e.setupState = bh(t)), Qh(e);
}
function Qh(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || kr);
  {
    const i = Is(e);
    Hr();
    try {
      Qy(e);
    } finally {
      Gr(), i();
    }
  }
}
const Fb = {
  get(e, t) {
    return fn(e, "get", ""), e[t];
  }
};
function Tb(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Fb),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ll(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bh(wy(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in rs)
        return rs[r](e);
    },
    has(t, r) {
      return r in t || r in rs;
    }
  })) : e.proxy;
}
function Db(e, t = !0) {
  return ut(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Lb(e) {
  return ut(e) && "__vccOpts" in e;
}
const dt = (e, t) => /* @__PURE__ */ Ny(e, t, ps), Rb = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let eu;
const xf = typeof window < "u" && window.trustedTypes;
if (xf)
  try {
    eu = /* @__PURE__ */ xf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const em = eu ? (e) => eu.createHTML(e) : (e) => e, Vb = "http://www.w3.org/2000/svg", $b = "http://www.w3.org/1998/Math/MathML", Or = typeof document < "u" ? document : null, kf = Or && /* @__PURE__ */ Or.createElement("template"), zb = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Or.createElementNS(Vb, e) : t === "mathml" ? Or.createElementNS($b, e) : r ? Or.createElement(e, { is: r }) : Or.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Or.createTextNode(e),
  createComment: (e) => Or.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Or.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, i, o) {
    const s = r ? r.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), r), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      kf.innerHTML = em(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const a = kf.content;
      if (n === "svg" || n === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, r);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, jb = /* @__PURE__ */ Symbol("_vtc");
function Hb(e, t, r) {
  const n = e[jb];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Ua = /* @__PURE__ */ Symbol("_vod"), tm = /* @__PURE__ */ Symbol("_vsh"), Ti = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[Ua] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Lo(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), Lo(e, !0), n.enter(e)) : n.leave(e, () => {
      Lo(e, !1);
    }) : Lo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Lo(e, t);
  }
};
function Lo(e, t) {
  e.style.display = t ? e[Ua] : "none", e[tm] = !t;
}
const Gb = /* @__PURE__ */ Symbol(""), Kb = /(?:^|;)\s*display\s*:/;
function Wb(e, t, r) {
  const n = e.style, i = Qt(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Qt(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          r[a] == null && wa(n, a, "");
        }
      else
        for (const s in t)
          r[s] == null && wa(n, s, "");
    for (const s in r)
      s === "display" && (o = !0), wa(n, s, r[s]);
  } else if (i) {
    if (t !== r) {
      const s = n[Gb];
      s && (r += ";" + s), n.cssText = r, o = Kb.test(r);
    }
  } else t && e.removeAttribute("style");
  Ua in e && (e[Ua] = o ? n.display : "", e[tm] && (n.display = "none"));
}
const Mf = /\s*!important$/;
function wa(e, t, r) {
  if (it(r))
    r.forEach((n) => wa(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = Ub(e, t);
    Mf.test(r) ? e.setProperty(
      Ri(n),
      r.replace(Mf, ""),
      "important"
    ) : e[n] = r;
  }
}
const Nf = ["Webkit", "Moz", "ms"], cc = {};
function Ub(e, t) {
  const r = cc[t];
  if (r)
    return r;
  let n = Mn(t);
  if (n !== "filter" && n in e)
    return cc[t] = n;
  n = Pl(n);
  for (let i = 0; i < Nf.length; i++) {
    const o = Nf[i] + n;
    if (o in e)
      return cc[t] = o;
  }
  return t;
}
const Pf = "http://www.w3.org/1999/xlink";
function Af(e, t, r, n, i, o = Q0(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Pf, t.slice(6, t.length)) : e.setAttributeNS(Pf, t, r) : r == null || o && !eh(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Pr(r) ? String(r) : r
  );
}
function Cf(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? em(r) : r);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (a !== l || !("_value" in e)) && (e.value = l), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let s = !1;
  if (r === "" || r == null) {
    const a = typeof e[t];
    a === "boolean" ? r = eh(r) : r == null && a === "string" ? (r = "", s = !0) : a === "number" && (r = 0, s = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function Ji(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Bb(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const If = /* @__PURE__ */ Symbol("_vei");
function Yb(e, t, r, n, i = null) {
  const o = e[If] || (e[If] = {}), s = o[t];
  if (n && s)
    s.value = n;
  else {
    const [a, l] = qb(t);
    if (n) {
      const c = o[t] = Zb(
        n,
        i
      );
      Ji(e, a, c, l);
    } else s && (Bb(e, a, s, l), o[t] = void 0);
  }
}
const Ef = /(?:Once|Passive|Capture)$/;
function qb(e) {
  let t;
  if (Ef.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Ef); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ri(e.slice(2)), t];
}
let uc = 0;
const Xb = /* @__PURE__ */ Promise.resolve(), Jb = () => uc || (Xb.then(() => uc = 0), uc = Date.now());
function Zb(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    Ar(
      Qb(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = Jb(), r;
}
function Qb(e, t) {
  if (it(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const Of = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ev = (e, t, r, n, i, o) => {
  const s = i === "svg";
  t === "class" ? Hb(e, n, s) : t === "style" ? Wb(e, r, n) : kl(t) ? Ml(t) || Yb(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tv(e, t, n, s)) ? (Cf(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Af(e, t, n, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (nv(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Qt(n))) ? Cf(e, Mn(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Af(e, t, n, s));
};
function tv(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Of(t) && ut(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Of(t) && Qt(r) ? !1 : t in e;
}
function nv(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Mn(t);
  return Array.isArray(r) ? r.some((i) => Mn(i) === n) : Object.keys(r).some((i) => Mn(i) === n);
}
const Ff = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return it(t) ? (r) => va(t, r) : t;
};
function rv(e) {
  e.target.composing = !0;
}
function Tf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const dc = /* @__PURE__ */ Symbol("_assign");
function Df(e, t, r) {
  return t && (e = e.trim()), r && (e = Hu(e)), e;
}
const Lf = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[dc] = Ff(i);
    const o = n || i.props && i.props.type === "number";
    Ji(e, t ? "change" : "input", (s) => {
      s.target.composing || e[dc](Df(e.value, r, o));
    }), (r || o) && Ji(e, "change", () => {
      e.value = Df(e.value, r, o);
    }), t || (Ji(e, "compositionstart", rv), Ji(e, "compositionend", Tf), Ji(e, "change", Tf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, s) {
    if (e[dc] = Ff(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Hu(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, iv = ["ctrl", "shift", "alt", "meta"], ov = {
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
  exact: (e, t) => iv.some((r) => e[`${r}Key`] && !t.includes(r))
}, Ct = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = ov[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  }));
}, sv = /* @__PURE__ */ yn({ patchProp: ev }, zb);
let Rf;
function av() {
  return Rf || (Rf = vb(sv));
}
const nd = ((...e) => {
  const t = av().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = cv(n);
    if (!i) return;
    const o = t._component;
    !ut(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = r(i, !1, lv(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function lv(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function cv(e) {
  return Qt(e) ? document.querySelector(e) : e;
}
const uv = "PanoramaSuite.Debug.Diagnostics", dv = "PanoramaSuite.Debug.ExportDiagnostics", fc = "pano_suite.diagnostics.v1", Vf = "pano_suite.diagnostics.previous.v1", fv = 300, pv = 2e5, hv = 100, mv = 20, gv = 1e3, yv = 2, ia = 1024 * 1024;
function Zr(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function bv() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function vv() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: bv,
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
function Sv(e = {}) {
  const t = { ...vv(), ...e };
  let r = !1, n = !1, i = null, o = null, s = 0, a = null, l = 0, c = 0;
  const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, p = { created: 0, collected: 0 }, w = t.FinalizationRegistry ? new t.FinalizationRegistry((P) => {
    d.delete(P), f.collected += 1;
  }) : null, h = t.FinalizationRegistry ? new t.FinalizationRegistry((P) => {
    u.delete(P), p.collected += 1;
  }) : null, m = /* @__PURE__ */ new Set(), b = { created: 0, lost: 0, restored: 0, disposed: 0 }, V = [], T = /* @__PURE__ */ new Map();
  let ee = { count: 0, maxMs: 0 }, I = /* @__PURE__ */ new Map(), X = { count: 0, maxMs: 0 };
  const $ = [];
  function J(P, ae, g = void 0) {
    V.push(g === void 0 ? { t: t.clock(), type: P, label: ae } : { t: t.clock(), type: P, label: ae, detail: g }), V.length > hv && V.shift();
  }
  function ye(P, ae, g, S, O) {
    if (!r || !S || !t.WeakRef) return S;
    const v = { ref: new t.WeakRef(S), label: O };
    return P.add(v), ae == null || ae.register(S, v), g.created += 1, S;
  }
  function _e(P, ae = "") {
    return ye(d, w, f, P, ae);
  }
  function me(P, ae = "") {
    return ye(u, h, p, P, ae);
  }
  function ve({ label: P = "", width: ae, height: g, offscreen: S = !1 } = {}) {
    const O = globalThis.OffscreenCanvas;
    let v;
    return S && typeof O < "u" ? v = new O(ae, g) : (v = t.document().createElement("canvas"), ae !== void 0 && g !== void 0 && (v.width = ae, v.height = g)), _e(v, P);
  }
  function ue(P) {
    P.width = 0, P.height = 0, r && (f.released += 1);
  }
  function we(P = t.document(), ae = "") {
    var g;
    return me(((g = P == null ? void 0 : P.createElement) == null ? void 0 : g.call(P, "video")) || null, ae);
  }
  function de(P, ae) {
    if (!r || !P) return () => {
    };
    const g = { label: ae, lost: !1, disposed: !1 };
    m.add(g), b.created += 1, J("webgl-created", ae);
    const S = () => {
      g.disposed || (g.lost = !0, b.lost += 1, J("webglcontextlost", ae));
    }, O = () => {
      g.disposed || (g.lost = !1, b.restored += 1, J("webglcontextrestored", ae));
    };
    return P.addEventListener("webglcontextlost", S), P.addEventListener("webglcontextrestored", O), () => {
      g.disposed || (g.disposed = !0, m.delete(g), b.disposed += 1, J("webgl-disposed", ae));
    };
  }
  function ne(P, ae) {
    return T.set(P, ae), () => {
      T.get(P) === ae && T.delete(P);
    };
  }
  function ie() {
    return r ? t.now() : -1;
  }
  function le(P) {
    if (P < 0 || !r) return;
    const ae = t.now() - P;
    ee.count += 1, ee.maxMs = Math.max(ee.maxMs, ae);
  }
  function z(P, ae) {
    if (ae < 0 || !r) return;
    const g = t.now() - ae, S = I.get(P) ?? { count: 0, maxMs: 0 };
    S.count += 1, S.maxMs = Math.max(S.maxMs, g), I.set(P, S);
  }
  function C() {
    let P = 0, ae = 0, g = 0, S = [0, 0];
    const O = {};
    for (const v of d) {
      const j = v.ref.deref();
      if (!j) continue;
      P += 1;
      const H = j.width * j.height;
      H > 0 && (ae += 1), g += H, H > S[0] * S[1] && (S = [j.width, j.height]);
      const D = O[v.label] ?? (O[v.label] = [0, 0]);
      D[0] += 1, D[1] += H;
    }
    return { ...f, alive: P, sized: ae, pixels: g, mb: Zr(g * 4 / ia, 1), largest: S, byLabel: O };
  }
  function R() {
    const P = [];
    let ae = 0, g = 0;
    for (const S of u) {
      const O = S.ref.deref();
      if (!O) continue;
      ae += 1;
      const v = !O.paused && !O.ended;
      v && (g += 1), P.length < mv && P.push({
        label: S.label,
        playing: v,
        src: !!(O.currentSrc || O.src),
        size: [O.videoWidth || 0, O.videoHeight || 0],
        ready: O.readyState ?? 0,
        connected: !!O.isConnected
      });
    }
    return { ...p, alive: ae, playing: g, list: P };
  }
  function E() {
    const P = t.now(), ae = t.memory(), g = {
      t: t.clock(),
      heap: ae ? { used: Zr(ae.usedJSHeapSize / ia, 1), total: Zr(ae.totalJSHeapSize / ia, 1), limit: Zr(ae.jsHeapSizeLimit / ia, 1) } : null,
      canvas: C(),
      webgl: { ...b, alive: [...m].filter((S) => !S.lost).length },
      video: R(),
      frame: { count: ee.count, maxMs: Zr(ee.maxMs), longTasks: X.count, longTaskMaxMs: Zr(X.maxMs) },
      renders: Object.fromEntries([...I].map(([S, O]) => [S, { count: O.count, maxMs: Zr(O.maxMs) }])),
      sources: Object.fromEntries([...T].map(([S, O]) => [S, O()])),
      costMs: Zr(c, 3)
    };
    return ee = { count: 0, maxMs: 0 }, I = /* @__PURE__ */ new Map(), X = { count: 0, maxMs: 0 }, $.push({ record: g, text: JSON.stringify(g) }), $.length > fv && $.shift(), l += 1, l % yv === 0 && _(), c = t.now() - P, g;
  }
  function k(P = pv) {
    const ae = JSON.stringify({ ...o, events: V }).slice(0, -1);
    let g = P - ae.length - 14, S = $.length;
    for (; S > 0 && g - $[S - 1].text.length - 1 >= 0; )
      S -= 1, g -= $[S].text.length + 1;
    return `${ae},"records":[${$.slice(S).map((O) => O.text).join(",")}]}`;
  }
  function _() {
    if (!o) return;
    const P = t.storage();
    if (P) {
      o.savedAt = t.clock();
      try {
        P.setItem(fc, k());
      } catch {
      }
    }
  }
  function y() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", _();
  }
  function L() {
    var O;
    if (n) return i;
    n = !0;
    const P = t.storage();
    if (!P) return null;
    let ae = null;
    try {
      if (ae = P.getItem(fc), ae === null) {
        const v = P.getItem(Vf);
        return i = v === null ? null : JSON.parse(v), i;
      }
      P.setItem(Vf, ae), P.removeItem(fc), i = JSON.parse(ae);
    } catch {
      return i;
    }
    const g = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], S = g.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${g.length} records kept. Its last records:`,
      JSON.stringify(S)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((O = g.at(-1)) == null ? void 0 : O.t) || 0).toISOString()}; ${g.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(S)
    ), i;
  }
  function Z(P) {
    const ae = P === !0;
    if (L(), ae !== r) {
      if (r = ae, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, $.length = 0, a = t.observeLongTasks((g) => {
          for (const S of g)
            X.count += 1, X.maxMs = Math.max(X.maxMs, S.duration);
        }), t.addUnload(y), s = t.setInterval(E, gv), _();
        return;
      }
      t.clearInterval(s), s = 0, a == null || a(), a = null, t.removeUnload(y), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", _();
    }
  }
  function he() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...V], records: $.map((P) => P.record) } : null,
      previous: i
    };
  }
  function ge() {
    const P = t.document(), ae = new Blob([JSON.stringify(he(), null, 1)], { type: "application/json" }), g = URL.createObjectURL(ae), S = P.createElement("a");
    S.href = g, S.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, S.click(), setTimeout(() => URL.revokeObjectURL(g), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: ve,
    releaseCanvas: ue,
    trackCanvas: _e,
    createVideo: we,
    trackVideo: me,
    watchContext: de,
    addSource: ne,
    frameStart: ie,
    frameEnd: le,
    renderEnd: z,
    sample: E,
    serialize: k,
    recoverPrevious: L,
    setEnabled: Z,
    exportData: he,
    download: ge
  };
}
const Dn = Sv(), on = Dn.createCanvas, hs = Dn.releaseCanvas, pc = Dn.trackCanvas, Es = Dn.createVideo, $f = Dn.trackVideo, _v = Dn.addSource, wv = Dn.frameStart, xv = Dn.frameEnd;
function nm(e, t) {
  const r = Dn.watchContext(e.canvas, t), n = Dn.addSource(`three.${t}`, () => e.stats()), i = (o) => (s) => {
    const a = Dn.frameStart(), l = o(s);
    return Dn.renderEnd(t, a), l;
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
const kv = {
  id: uv,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Dn.setEnabled(e === !0)
}, zf = {
  id: dv,
  label: "Export Panorama Suite diagnostics",
  function: () => Dn.download()
};
function Zi(e, t) {
  const r = on({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function Mv() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function jf(e, t = 8) {
  var d;
  const r = (d = e == null ? void 0 : e.getContext) == null ? void 0 : d.call(e, "2d"), n = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!r || n < 1 || i < 1) return null;
  const o = r.getImageData(0, 0, n, i).data;
  let s = n, a = i, l = -1, c = -1;
  for (let u = 0; u < i; u += 1)
    for (let f = 0; f < n; f += 1)
      o[(u * n + f) * 4 + 3] <= t || (f < s && (s = f), u < a && (a = u), f > l && (l = f), u > c && (c = u));
  return l < s || c < a ? null : {
    minX: s,
    minY: a,
    maxX: l,
    maxY: c,
    width: l - s + 1,
    height: c - a + 1,
    aspect: Number(((l - s + 1) / Math.max(1, c - a + 1)).toFixed(4))
  };
}
function rd(e, t) {
  return on({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function ti(e, t, r) {
  if (!e) return Zi(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function qt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function un(e) {
  e.displayDirty = !0, e.revision += 1;
}
let hc = null, mc = null, Hf = null, Gf = null, Yt = null, Ro = null;
function Nv() {
  if (mc) return mc;
  const e = 6, t = 17, r = on({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), mc = r, r;
}
function gc(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  hc = ti(hc, r, n);
  const i = hc;
  qt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", Gf !== i.ctx && (Hf = i.ctx.createPattern(Nv(), "repeat"), Gf = i.ctx), i.ctx.fillStyle = Hf, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function Pv(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function Av(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Cv(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Iv(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const jt = /* @__PURE__ */ new Map(), id = 128;
function Ev(e, t, r, n, i, o) {
  const s = Math.max(1, Math.round(e)), a = Math.max(0, Math.min(1, t)), l = `${s}:${a.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if (jt.has(l)) {
    const V = jt.get(l);
    return jt.delete(l), jt.set(l, V), V;
  }
  jt.size >= id && jt.delete(jt.keys().next().value);
  const c = s * 2 + 2, d = s + 1, u = rd(c, c), f = u.getContext("2d"), p = a * s, w = s + 1, h = `rgba(${r},${n},${i},${o})`, m = `rgba(${r},${n},${i},0)`, b = f.createRadialGradient(d, d, p, d, d, w);
  return b.addColorStop(0, h), b.addColorStop(1, m), f.fillStyle = b, f.fillRect(0, 0, c, c), jt.set(l, u), u;
}
function Ov(e, t, r, n, i, o, s) {
  const { r: a, g: l, b: c, a: d } = n, u = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), p = Math.max(0, i), w = Math.max(0, Math.min(0.99, o)), h = Math.max(0, Math.min(1, s ?? 0)), m = `chisel:${u}:${f}:${r.toFixed(2)}:${a}:${l}:${c}:${d.toFixed(3)}:${p.toFixed(2)}:${w.toFixed(2)}:${h.toFixed(2)}`;
  if (jt.has(m)) {
    const J = jt.get(m);
    return jt.delete(m), jt.set(m, J), J;
  }
  jt.size >= id && jt.delete(jt.keys().next().value);
  const b = rd(u, f), V = b.getContext("2d"), T = V.createImageData(u, f), ee = T.data, I = Math.max(0, e - t), X = Math.max(0, Math.min(1, r)), $ = 1 + p;
  for (let J = 0; J < f; J++)
    for (let ye = 0; ye < u; ye++) {
      const _e = ye + 0.5 - e, me = J + 0.5 - t, ve = Math.max(Math.abs(_e) - I, 0), we = Math.hypot(ve, me) / t;
      if (we >= 1) continue;
      const de = we <= X ? 1 : Math.max(0, (1 - we) / Math.max(1e-4, 1 - X)), ne = 1 - we, ie = 1 + p * (1 - ne) * (1 - ne), le = 1 - w * ne * ne, z = ie * le / $;
      let C = 1;
      if (h > 0) {
        const k = Math.floor((me + t) / 1.5), _ = Math.floor((_e + e) / 8), y = Ii(co(k * 41 + 500, _ * 19 + 300));
        C = 1 - h * 0.42 * y;
      }
      const R = Math.round(255 * Math.min(1, d * de * z * C));
      if (R <= 0) continue;
      const E = (J * u + ye) * 4;
      ee[E] = a, ee[E + 1] = l, ee[E + 2] = c, ee[E + 3] = R;
    }
  return V.putImageData(T, 0, 0), jt.set(m, b), b;
}
function co(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function Ii(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Fv(e, t, r, n, i, o, s) {
  const a = e + 0.5 - r, l = t + 0.5 - n, c = Math.max(0, r - n), d = Math.max(Math.abs(a) - c, 0), u = Math.hypot(d, l) / n;
  if (u >= 1) return 0;
  const f = Ii(co(e * 17 + 3, t * 13 + 7)), p = u + o * 0.22 * (f - 0.5);
  if (p >= 1) return 0;
  const w = p <= i ? 1 : Math.max(0, (1 - p) / Math.max(1e-4, 1 - i)), h = Tv(e, t, a, l, r, n), m = o * 0.55;
  if (h < m) return 0;
  const V = 0.45 + 0.55 * ((h - m) / Math.max(1e-4, 1 - m));
  return Math.round(255 * Math.min(1, s * w * V));
}
function Tv(e, t, r, n, i, o) {
  const s = Math.floor((r + i) / 3), a = Math.floor((n + o) / 2), l = Ii(co(s * 13 + 700, a * 17 + 400)), c = Math.floor((r + i) / 1.5), d = Math.floor((n + o) / 1.5), u = Ii(co(c * 23 + 800, d * 29 + 500)), f = Ii(co(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + u * 0.3 + f * 0.15;
}
function Dv(e, t, r, n, i) {
  const { r: o, g: s, b: a, a: l } = n, c = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), u = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${d}:${r.toFixed(2)}:${o}:${s}:${a}:${l.toFixed(3)}:${u.toFixed(2)}`;
  if (jt.has(f)) {
    const V = jt.get(f);
    return jt.delete(f), jt.set(f, V), V;
  }
  jt.size >= id && jt.delete(jt.keys().next().value);
  const p = rd(c, d), w = p.getContext("2d"), h = w.createImageData(c, d), m = h.data, b = Math.max(0, Math.min(1, r));
  for (let V = 0; V < d; V++)
    for (let T = 0; T < c; T++) {
      const ee = Fv(T, V, e, t, b, u, l);
      if (ee <= 0) continue;
      const I = (V * c + T) * 4;
      m[I] = o, m[I + 1] = s, m[I + 2] = a, m[I + 3] = ee;
    }
  return w.putImageData(h, 0, 0), jt.set(f, p), p;
}
function rm(e, t, r) {
  var h, m;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = Cv(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), s = Lv(t), a = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((h = t == null ? void 0 : t.angle) == null ? void 0 : h.value) ?? 0), c = Iv(t, i), d = String(((m = t == null ? void 0 : t.targetSpace) == null ? void 0 : m.viewMode) || ""), u = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, p = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let w;
  if (n === "chisel") {
    const b = i * a, V = i, T = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), ee = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), I = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    w = Ov(b, V, o, s, T, ee, I);
  } else if (n === "crayon") {
    const b = i * a, V = i, T = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    w = Dv(b, V, o, s, T);
  } else
    w = Ev(i, o, s.r, s.g, s.b, s.a);
  return { ctx: e, stampTex: w, radiusPx: i, spacingPx: c, desc: r, aspect: a, angle: l, stampKind: n, scatter: p, latitudeCorrection: u };
}
function Lv(e) {
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
function Rv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function Kf(e, t, r, n, i) {
  const o = e.angle, s = e.desc.width;
  function a(c, d) {
    o === 0 ? e.ctx.drawImage(e.stampTex, c - i, d - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(c, d), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  a(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && a(t + s, r), t + l > s && a(t - s, r);
}
function od(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: c, count: d } = e.scatter, u = c * e.radiusPx * i, f = co(t, r);
    for (let p = 0; p < d; p++) {
      const w = Ii(f + p * 2) * Math.PI * 2, h = Math.sqrt(Ii(f + p * 2 + 1)) * u, m = t + Math.cos(w) * h, b = r + Math.sin(w) * h, V = Math.max(0.5, e.radiusPx * i * 0.48), T = (0.5 - b / Math.max(1, e.desc.height)) * Math.PI, ee = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(T)) : 1, I = V * e.aspect * ee;
      Kf(e, m, b, V, I);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), s = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, a = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(s)) : 1, l = o * e.aspect * a;
  Kf(e, t, r, o, l);
}
function Wf(e, t, r) {
  const n = Av(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, s = rm(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const a = [];
  for (let f = 0; f < n.length; f++) {
    let p = Number(n[f].u || 0) * i;
    const w = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(p - a[f - 1].x) > i * 0.5 && (p += p < a[f - 1].x ? i : -i), a.push({ x: p, y: w });
  }
  if (od(s, a[0].x, a[0].y, 1), a.length === 1) {
    e.restore();
    return;
  }
  let l = a[0], c = a[0], d = a[0], u = 0;
  for (let f = 1; f < a.length; f++) {
    const p = a[f], w = { x: (c.x + p.x) * 0.5, y: (c.y + p.y) * 0.5 };
    f === 1 ? u = ms(s, d.x, d.y, w.x, w.y, u) : u = Ba(s, l, d, w, p, u), l = c, c = p, d = w;
  }
  a.length === 2 ? ms(s, d.x, d.y, c.x, c.y, u) : Ba(s, l, d, c, c, u), e.restore();
}
function xa(e, t, r) {
  var u;
  const n = Array.isArray((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, s = Rv(t), a = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const p = Pv(n[f]);
    let w = Number(p.x || 0) * i;
    f > 0 && Math.abs(w - a[f - 1].x) > i * 0.5 && (w += w < a[f - 1].x ? i : -i), a.push({ x: w, y: Number(p.y || 0) * o }), w < l && (l = w), w > c && (c = w);
  }
  function d(f) {
    e.beginPath(), e.moveTo(a[0].x + f, a[0].y);
    for (let p = 1; p < a.length; p++) e.lineTo(a[p].x + f, a[p].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = s, d(0), l < 0 && d(i), c > i && d(-i), e.restore();
}
function oa(e, t, r) {
  var s;
  if (String(((s = t == null ? void 0 : t.geometry) == null ? void 0 : s.geometryKind) || "") === "lasso_fill") {
    xa(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? Wf(e, t, r) : (Ro = ti(Ro, r.width, r.height), qt(Ro), Wf(Ro.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(Ro.canvas, 0, 0), e.restore());
}
function vi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ms(e, t, r, n, i, o) {
  const s = n - t, a = i - r, l = Math.hypot(s, a);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const d = c / l;
    od(e, t + s * d, r + a * d, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function Ba(e, t, r, n, i, o) {
  const a = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, d = 0, u = a, f = u + l, p = f + c, w = f - u, h = 16;
  let m = o, b = r.x, V = r.y;
  for (let T = 1; T <= h; T++) {
    const ee = u + w * T / h, I = ((u - ee) * t.x + (ee - d) * r.x) / (u - d), X = ((u - ee) * t.y + (ee - d) * r.y) / (u - d), $ = ((f - ee) * r.x + (ee - u) * n.x) / (f - u), J = ((f - ee) * r.y + (ee - u) * n.y) / (f - u), ye = ((p - ee) * n.x + (ee - f) * i.x) / (p - f), _e = ((p - ee) * n.y + (ee - f) * i.y) / (p - f), me = ((f - ee) * I + (ee - d) * $) / (f - d), ve = ((f - ee) * X + (ee - d) * J) / (f - d), ue = ((p - ee) * $ + (ee - u) * ye) / (p - u), we = ((p - ee) * J + (ee - u) * _e) / (p - u), de = ((f - ee) * me + (ee - u) * ue) / (f - u), ne = ((f - ee) * ve + (ee - u) * we) / (f - u);
    m = ms(e, b, V, de, ne, m), b = de, V = ne;
  }
  return m;
}
function Vv(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, s = o.width, a = r * o.height, l = e.activeStroke;
  let c = t * s;
  if (l && Math.abs(c - l.prev.x) > s * 0.5 && (c += c < l.prev.x ? s : -s), !l) {
    const p = rm(i, n, o), w = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), h = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), m = String((n == null ? void 0 : n.toolKind) || "") === "eraser", b = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", od(p, c, a, 1), e.activeStroke = {
      pprev: { x: c, y: a },
      prev: { x: c, y: a },
      lastMidX: c,
      lastMidY: a,
      stampTex: p.stampTex,
      radiusPx: p.radiusPx,
      spacingPx: p.spacingPx,
      aspect: p.aspect,
      angle: p.angle,
      stampKind: p.stampKind,
      scatter: p.scatter,
      latitudeCorrection: p.latitudeCorrection,
      strokeOpacity: w,
      velocityWidthFactor: h,
      distSinceStamp: 0,
      isEraser: m,
      layerKind: b,
      pointCount: 1
    }, un(e);
    return;
  }
  const d = (l.prev.x + c) * 0.5, u = (l.prev.y + a) * 0.5;
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
  l.pointCount === 1 ? l.distSinceStamp = ms(f, l.lastMidX, l.lastMidY, d, u, l.distSinceStamp) : l.distSinceStamp = Ba(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: d, y: u },
    { x: c, y: a },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: a }, l.lastMidX = d, l.lastMidY = u, l.pointCount++, un(e);
}
function Rl(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), r = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), n = { kind: "ERP_GLOBAL", width: t, height: r }, i = /* @__PURE__ */ new Map(), o = Zi(t, r), s = {
    descriptor: n,
    committedMask: Zi(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    // Whether a mask stroke was drawn since the last rebuild; until then the committed mask is empty.
    painted: !1,
    lassoPreviewActive: !1
  }, a = {
    actionGroupId: "__eraser__",
    descriptor: n,
    committedPaint: Zi(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = Zi(t, r);
  let c = null, d = "", u = null;
  const f = /* @__PURE__ */ new Map();
  let p = null;
  function w(ue) {
    return {
      actionGroupId: ue,
      descriptor: n,
      committedPaint: Zi(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function h(ue) {
    let we = i.get(ue);
    return we || (we = w(ue), i.set(ue, we)), we;
  }
  function m(ue) {
    return d === "mask" ? s : c ? h(c) : a;
  }
  function b(ue) {
    var z;
    const we = !u || u.length !== ue.length || ue.some((C, R) => C !== u[R]), de = d === "paint" && ((z = c ? i.get(c) : a) == null ? void 0 : z.activeStroke) || null;
    let ne = s.displayDirty || a.displayDirty || we;
    for (const C of ue) {
      const R = i.get(C);
      if (R != null && R.displayDirty) {
        ne = !0;
        break;
      }
    }
    if (de && (ne = !0), !ne) return;
    s.displayDirty = !1, a.displayDirty = !1;
    for (const C of ue) {
      const R = i.get(C);
      R && (R.displayDirty = !1);
    }
    u = [...ue];
    const ie = l.ctx;
    qt(l);
    const le = !!(de != null && de.isEraser);
    for (const C of ue) {
      const R = i.get(C);
      if (!R) continue;
      const k = c === R.actionGroupId && d === "paint" ? R.activeStroke : null;
      if (le)
        Yt = ti(Yt, t, r), qt(Yt), Yt.ctx.drawImage(R.committedPaint.canvas, 0, 0), vi(Yt.ctx, o.canvas), ie.drawImage(Yt.canvas, 0, 0);
      else if (ie.drawImage(R.committedPaint.canvas, 0, 0), k) {
        const _ = R.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, k.strokeOpacity ?? 1));
        ie.save(), ie.globalAlpha = _, ie.drawImage(o.canvas, 0, 0), ie.restore();
      }
    }
  }
  function V(ue) {
    var de, ne, ie, le, z;
    for (const C of i.values())
      qt(C.committedPaint), qt(C.currentStroke), C.activeStroke = null, un(C);
    qt(s.committedMask), qt(s.currentStroke), s.activeStroke = null, s.painted = !1, f.clear(), un(s), un(a), u = null;
    const we = [
      ...Array.isArray((ne = (de = ue == null ? void 0 : ue.painting) == null ? void 0 : de.paint) == null ? void 0 : ne.strokes) ? ue.painting.paint.strokes : [],
      ...Array.isArray((le = (ie = ue == null ? void 0 : ue.painting) == null ? void 0 : ie.mask) == null ? void 0 : le.strokes) ? ue.painting.mask.strokes : []
    ];
    for (const C of we) {
      if (((z = C == null ? void 0 : C.targetSpace) == null ? void 0 : z.kind) !== "ERP_GLOBAL") continue;
      const R = String((C == null ? void 0 : C.layerKind) || "paint"), k = String((C == null ? void 0 : C.toolKind) || "pen") === "eraser";
      if (R === "mask") {
        const _ = s.descriptor;
        k ? (Yt = ti(Yt, _.width, _.height), qt(Yt), oa(Yt.ctx, C, _), vi(s.committedMask.ctx, Yt.canvas)) : (oa(s.committedMask.ctx, C, _), s.painted = !0);
        continue;
      }
      if (k) {
        Yt = ti(Yt, n.width, n.height), qt(Yt), oa(Yt.ctx, C, n);
        for (const _ of i.values())
          vi(_.committedPaint.ctx, Yt.canvas), un(_);
      } else {
        const _ = String((C == null ? void 0 : C.actionGroupId) || "__default__"), y = h(_), L = y.descriptor;
        oa(y.committedPaint.ctx, C, L), un(y);
      }
    }
    b([...i.keys()]);
  }
  function T(ue, we) {
    d = String((ue == null ? void 0 : ue.layerKind) || "");
    const de = String((ue == null ? void 0 : ue.toolKind) || "") === "eraser";
    if (d === "mask")
      c = null, qt(s.currentStroke), s.activeStroke = null, un(s);
    else {
      const ne = de ? a : h(String((ue == null ? void 0 : ue.actionGroupId) || "__default__"));
      c = de ? "" : String((ue == null ? void 0 : ue.actionGroupId) || "__default__"), qt(ne.currentStroke), ne.activeStroke = null, un(ne);
    }
  }
  function ee(ue, we) {
    var R;
    const de = String((ue == null ? void 0 : ue.layerKind) || "paint"), ne = String((ue == null ? void 0 : ue.toolKind) || "") === "eraser", ie = de === "mask" ? s : ne ? a : h(String((ue == null ? void 0 : ue.actionGroupId) || c || "__default__")), le = ie.activeStroke, z = ie.descriptor;
    if (le && le.pointCount > 1) {
      const E = ie.currentStroke.ctx;
      E.globalCompositeOperation = "source-over";
      const k = {
        ctx: E,
        stampTex: le.stampTex,
        radiusPx: le.radiusPx,
        spacingPx: le.spacingPx,
        desc: z,
        aspect: le.aspect,
        angle: le.angle,
        stampKind: le.stampKind,
        scatter: le.scatter,
        latitudeCorrection: le.latitudeCorrection
      };
      le.pointCount === 2 ? ms(k, le.lastMidX, le.lastMidY, le.prev.x, le.prev.y, le.distSinceStamp) : Ba(k, le.pprev, { x: le.lastMidX, y: le.lastMidY }, le.prev, le.prev, le.distSinceStamp);
    }
    ie.lassoPreviewActive && (qt(ie.currentStroke), xa(ie.currentStroke.ctx, ue, z), ie.lassoPreviewActive = !1);
    const C = de === "mask" ? s.committedMask : ie.committedPaint;
    if (ne && de === "paint")
      for (const E of i.values())
        vi(E.committedPaint.ctx, ie.currentStroke.canvas), un(E);
    else if (ne)
      vi(C.ctx, ie.currentStroke.canvas);
    else {
      de === "mask" && (s.painted = !0);
      const E = Math.max(0, Math.min(1, (le == null ? void 0 : le.strokeOpacity) ?? 1));
      C.ctx.save(), C.ctx.globalAlpha = E, C.ctx.drawImage(ie.currentStroke.canvas, 0, 0), C.ctx.restore();
    }
    Mv() && (String((ue == null ? void 0 : ue.toolKind) || ""), String((z == null ? void 0 : z.kind) || ""), Number((z == null ? void 0 : z.width) || 0), Number((z == null ? void 0 : z.height) || 0), String(((R = ue == null ? void 0 : ue.targetSpace) == null ? void 0 : R.viewMode) || ""), Number((ue == null ? void 0 : ue.aspect) ?? 1), jf(ie.currentStroke.canvas), jf(C.canvas), void 0), qt(ie.currentStroke), ie.activeStroke = null, un(ie), f.clear(), c = null, d = "", b([...i.keys()]);
  }
  function I(ue) {
    if (d === "mask")
      qt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, un(s);
    else if (d === "paint" && !c)
      qt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, un(a);
    else if (c) {
      const we = i.get(c);
      we && (qt(we.currentStroke), we.activeStroke = null, we.lassoPreviewActive = !1, un(we));
    }
    f.clear(), c = null, d = "", b([...i.keys()]);
  }
  function X(ue, we) {
    var ne;
    if (d = String((ue == null ? void 0 : ue.layerKind) || ""), String(((ne = ue == null ? void 0 : ue.geometry) == null ? void 0 : ne.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        qt(s.currentStroke), xa(s.currentStroke.ctx, ue, s.descriptor), s.lassoPreviewActive = !0, un(s);
      else {
        const ie = String((ue == null ? void 0 : ue.toolKind) || "") === "eraser", le = ie ? a : h(String((ue == null ? void 0 : ue.actionGroupId) || c || "__default__"));
        c = ie ? "" : String((ue == null ? void 0 : ue.actionGroupId) || c || "__default__"), qt(le.currentStroke), xa(le.currentStroke.ctx, ue, le.descriptor), le.lassoPreviewActive = !0, un(le);
      }
      b([...i.keys()]);
    }
  }
  function $(ue) {
    return b(ue ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: s.committedMask,
      descriptor: n
    };
  }
  function J(ue) {
    return i.get(String(ue)) ?? null;
  }
  function ye() {
    return [...i.keys()];
  }
  function _e(ue) {
    var E;
    const we = i.get(String(ue));
    if (!we) return null;
    const de = d === "paint" && c === we.actionGroupId, ne = d === "paint" && ((E = c ? i.get(c) : a) == null ? void 0 : E.activeStroke) || null, ie = !!(ne != null && ne.isEraser), le = de ? we.activeStroke : null;
    if (!ie && !le) return we.committedPaint.canvas;
    const z = `${we.revision}:${a.revision}:${ie}`, C = f.get(we.actionGroupId);
    if ((C == null ? void 0 : C.key) === z) return C.surface.canvas;
    const R = ti((C == null ? void 0 : C.surface) ?? null, t, r);
    return qt(R), R.ctx.drawImage(we.committedPaint.canvas, 0, 0), ie ? vi(R.ctx, o.canvas) : (R.ctx.save(), R.ctx.globalAlpha = we.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, le.strokeOpacity ?? 1)), R.ctx.drawImage(o.canvas, 0, 0), R.ctx.restore()), f.set(we.actionGroupId, { key: z, surface: R }), R.canvas;
  }
  function me() {
    const ue = d === "mask" ? s.activeStroke : null;
    return !s.painted && (!ue || ue.isEraser) ? null : `${s.revision}:${!!ue}`;
  }
  function ve() {
    const ue = me();
    if (ue === null)
      return p = null, null;
    if ((p == null ? void 0 : p.key) === ue) return p.surface.canvas;
    const we = ti((p == null ? void 0 : p.surface) ?? null, t, r);
    qt(we);
    const de = d === "mask" ? s.activeStroke : null;
    return de != null && de.isEraser ? (Yt = ti(Yt, t, r), qt(Yt), Yt.ctx.drawImage(s.committedMask.canvas, 0, 0), vi(Yt.ctx, o.canvas), gc(we.ctx, Yt.canvas)) : (gc(we.ctx, s.committedMask.canvas), de && gc(we.ctx, o.canvas)), p = { key: ue, surface: we }, we.canvas;
  }
  return {
    rebuildCommitted: V,
    beginStroke: T,
    appendStrokePoint: Vv,
    updateActiveStroke: X,
    commitActiveStroke: ee,
    cancelActiveStroke: I,
    getErpTarget: $,
    ensureTarget: m,
    getGroupTarget: J,
    getGroupDisplayCanvas: _e,
    getMaskDisplayCanvas: ve,
    getMaskDisplayRevision: me,
    getAllGroupIds: ye
  };
}
function Oe(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Gt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function sd(e, t) {
  let r = Gt(t) - Gt(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const tu = 3;
function Vo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Ya(e, t = 0) {
  const r = Vo(e == null ? void 0 : e.deltaY);
  if (r != null) return Math.sign(r);
  const n = Vo(e == null ? void 0 : e.wheelDeltaY);
  if (n != null) return Math.sign(-n);
  const i = Vo(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = Vo(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(Vo(t) || 0);
}
function im(e) {
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
const Uf = Math.PI / 180, Bf = 0.12, $v = tu, zv = 35, jv = 140, Ko = 100, Hv = 20, Yf = 0.8;
function Gv(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Oe(Number(e || Ko), 1, 179) * Uf;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / Uf;
}
function ad(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Ko })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), s = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), a = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(V, T = null) {
    a && a(V, T);
  }
  function d(V, T, ee = null, I = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(V || 0), l.drag.lastY = Number(T || 0), l.drag.lastTs = Number(I || performance.now()), l.drag.pointerId = ee, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: ee }), !0;
  }
  function u(V, T, ee = "pano", I = performance.now()) {
    if (!l.drag.active) return !1;
    const X = Number(I || performance.now()), $ = Number(V), J = Number(T), ye = $ - l.drag.lastX, _e = J - l.drag.lastY;
    l.drag.lastX = $, l.drag.lastY = J, l.drag.lastTs = X;
    const me = n() || { x: 1, y: 1 }, ve = Number(me.x || 1), ue = Number(me.y || 1), we = { ...t() };
    let de = 0, ne = 0;
    if (ee === "unwrap") {
      const le = i() || { w: 1, h: 1 }, z = Math.max(1, Number(le.w || 1)), C = Math.max(1, Number(le.h || 1)), R = ye / z, E = _e / C;
      de = -R * 360 * ve, ne = E * 180 * ue;
    } else {
      const le = o() || { w: 0, h: 0 }, z = Math.max(1, Number(le.w || 0)), C = Math.max(1, Number(le.h || 0));
      if (z > 1 && C > 1) {
        const R = Oe(Number(we.fov || Ko), 1, 179), E = Oe(Gv(R, z, C), 0.1, 179);
        de = -(ye / z) * R * ve, ne = _e / C * E * ue;
      } else
        de = -ye * Bf * ve, ne = _e * Bf * ue;
    }
    we.yaw = Gt(Number(we.yaw || 0) + de), we.pitch = Oe(Number(we.pitch || 0) + ne, -89.9, 89.9), r(we), l.velHistory.push({ ts: X, yaw: we.yaw, pitch: we.pitch });
    let ie = 0;
    for (; ie < l.velHistory.length - 1 && l.velHistory[ie].ts < X - 100; ) ie++;
    return ie > 0 && l.velHistory.splice(0, ie), l.inertia.active = !1, l.inertia.lastTs = X, s(), c("drag", { phase: "move", dx: ye, dy: _e, dYaw: de, dPitch: ne }), !0;
  }
  function f(V = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const T = Number(V || performance.now());
    l.drag.lastTs = T;
    const ee = l.velHistory.filter((X) => T - X.ts <= 80);
    if (ee.length >= 2) {
      const X = ee[0], $ = ee.at(-1), J = Math.max(1e-3, ($.ts - X.ts) / 1e3);
      let ye = $.yaw - X.yaw;
      ye > 180 && (ye -= 360), ye < -180 && (ye += 360), l.inertia.vx = ye / J, l.inertia.vy = ($.pitch - X.pitch) / J;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const I = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = I > Hv, l.inertia.lastTs = T, c("drag", { phase: "end", speed: I, inertiaActive: l.inertia.active }), !0;
  }
  function p(V = performance.now()) {
    if (!l.inertia.active) return !1;
    const T = Number(V || performance.now()), ee = Math.max(1e-3, (T - (l.inertia.lastTs || T)) / 1e3);
    l.inertia.lastTs = T;
    const I = { ...t() };
    I.yaw = Gt(Number(I.yaw || 0) + l.inertia.vx * ee), I.pitch = Oe(Number(I.pitch || 0) + l.inertia.vy * ee, -89.9, 89.9);
    const X = Math.exp(-5.5 * ee);
    return l.inertia.vx *= X, l.inertia.vy *= X, Math.abs(l.inertia.vx) < Yf && Math.abs(l.inertia.vy) < Yf && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(I), s(), l.inertia.active;
  }
  function w() {
    const V = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], V;
  }
  function h(V) {
    const T = Math.sign(Number(V || 0));
    if (!T) return !1;
    const ee = { ...t() }, I = Number(ee.fov || Ko);
    return ee.fov = Oe(I + T * $v, zv, jv), r(ee), s(), c("wheel", { deltaSign: T, fovBefore: I, fovAfter: ee.fov }), !0;
  }
  function m(V, T = 0) {
    return h(Ya(V, T));
  }
  function b() {
    r({ yaw: 0, pitch: 0, fov: Ko }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, s();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: u,
    endDrag: f,
    stepInertia: p,
    stopMotion: w,
    applyWheel: h,
    applyWheelEvent: m,
    resetView: b
  };
}
const _t = Math.PI / 180, nn = 180 / Math.PI;
function Zn(e, t, r) {
  return { x: e, y: t, z: r };
}
function qa(e, t) {
  return Zn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Xa(e, t) {
  return Zn(e.x * t, e.y * t, e.z * t);
}
function yc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function ld(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Zn(e.x / t, e.y / t, e.z / t);
}
function Tn(e, t) {
  const r = e * _t, n = t * _t, i = Math.cos(n);
  return Zn(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function wo(e, t, r = 0) {
  const n = Number(e || 0) * _t, i = Number(t || 0) * _t, o = r * _t, s = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), d = Math.cos(o), u = Math.sin(o);
  return {
    right: Zn(
      s * d - a * c * u,
      l * u,
      -a * d - s * c * u
    ),
    up: Zn(
      -s * u - a * c * d,
      l * d,
      a * u - s * c * d
    ),
    fwd: Zn(a * l, c, s * l)
  };
}
function Ja(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function It(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function Kv() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Wv(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const i = String(n.actionGroupId || n.id || "").trim();
    if (!i || r.has(i)) continue;
    r.add(i);
    const o = It(n.z_index ?? n.zIndex, t.length);
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
function Uv(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function Bv(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const r = It(e.t, 0), n = It(e.widthScale, null), i = It(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = It(e.u, null), s = It(e.v, null);
    if (o == null || s == null) return null;
    const a = {
      targetKind: "ERP_GLOBAL",
      u: (o % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, s)),
      t: r
    };
    return n != null && (a.widthScale = Math.max(0, n)), i != null && (a.pressureLike = Math.max(0, i)), a;
  }
  if (t.kind === "FRAME_LOCAL") {
    const o = It(e.u, null), s = It(e.v, null);
    if (o == null || s == null) return null;
    const a = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: o,
      v: s,
      t: r
    };
    return n != null && (a.widthScale = Math.max(0, n)), i != null && (a.pressureLike = Math.max(0, i)), a;
  }
  return null;
}
function sa(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = Bv(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function Yv(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const l = sa(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = sa(e.points, t, 1);
  if (!o) return null;
  const s = sa(e.rawPoints, t, 1), a = sa(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: s || o.map((l) => ({ ...l })),
    processedPoints: a || o.map((l) => ({ ...l }))
  };
}
function qv(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = Uv(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = Yv(e.geometry, r, n, t === "paint");
  if (!i) return null;
  const o = It(e.size, null), s = It(e.opacity, null);
  if (o == null || s == null) return null;
  const a = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!a || !l) return null;
  const c = It(e.radiusValue, null), d = String(e.radiusModel || "").trim() || null;
  let u = null;
  if (t === "paint") {
    const f = e.color;
    if (!f || typeof f != "object") return null;
    u = {
      r: Math.max(0, Math.min(1, It(f.r, 0))),
      g: Math.max(0, Math.min(1, It(f.g, 0))),
      b: Math.max(0, Math.min(1, It(f.b, 0))),
      a: Math.max(0, Math.min(1, It(f.a, 1)))
    };
  }
  return {
    id: a,
    actionGroupId: l,
    targetSpace: r,
    layerKind: t,
    toolKind: n,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, o),
    opacity: Math.max(0, Math.min(1, s)),
    hardness: It(e.hardness, null),
    flow: It(e.flow, null),
    spacing: It(e.spacing, null),
    createdAt: Math.trunc(It(e.createdAt, 0)),
    color: u,
    radiusModel: d,
    radiusValue: c == null ? null : Math.max(0, c),
    geometry: i
  };
}
function qf(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = qv(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function Xv(e) {
  if (!e || typeof e != "object") return null;
  const t = It(e.u0, null), r = It(e.v0, null), n = It(e.u1, null), i = It(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (a) => Math.max(0, Math.min(1, a)), s = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return s.u1 <= s.u0 || s.v1 <= s.v0 ? null : s;
}
function Jv(e) {
  const t = e || {};
  return {
    du: It(t.du, 0) ?? 0,
    dv: It(t.dv, 0) ?? 0,
    rot_deg: It(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, It(t.scale, 1) ?? 1)
  };
}
function Zv(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = Xv(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, It(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: Jv(e.transform)
  } : null;
}
function Qv(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = Zv(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function xo(e) {
  const t = Kv();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Wv(e.groups),
    paint: qf(e.paint, "paint"),
    mask: qf(e.mask, "mask"),
    raster_objects: Qv(e.raster_objects)
  };
}
const Qn = 1, er = 179, nu = 85;
function Vl(e) {
  const t = ((st(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function om(e, t) {
  let r = st(e, 0) - st(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function sm(e, t, { shiftKey: r = !1 } = {}) {
  let n = st(e, 0) + st(t, 0) * nn;
  return r && (n = Math.round(n / 15) * 15), Vl(n);
}
function st(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function ui(e = {}) {
  const t = Oe(st(e.hFOV_deg || 90, 90), Qn, er), r = Oe(st(e.vFOV_deg || 60, 60), Qn, er), n = Math.tan(t * _t * 0.5), i = Math.tan(r * _t * 0.5);
  return {
    yawDeg: st(e.yaw_deg, 0),
    pitchDeg: st(e.pitch_deg, 0),
    rollDeg: st(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: r,
    tanHalfX: n,
    tanHalfY: i,
    aspect: n / Math.max(1e-12, i)
  };
}
function Di(e, t) {
  const r = Math.max(1, st((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, st((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = ui(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function cd(e, t) {
  const r = Math.max(1, st((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, st((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, st(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function ud(e, t) {
  const r = Math.max(1e-12, st(t, 1)), n = Math.max(1e-6, st((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, st((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Oe(2 * Math.atan(n / (2 * r)) * nn, Qn, er), s = Oe(2 * Math.atan(i / (2 * r)) * nn, Qn, er);
  return { hFOV_deg: o, vFOV_deg: s };
}
function e1(e, t, r) {
  const n = st(e == null ? void 0 : e.x, 0), i = st(e == null ? void 0 : e.y, 0), o = Math.max(1, st((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), s = Math.max(1, st((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = ui(t), l = Math.max(1e-12, st(r, 1)), c = 2 * l * a.tanHalfX, d = 2 * l * a.tanHalfY;
  return {
    x: n + (o - c) * 0.5,
    y: i + (s - d) * 0.5,
    w: c,
    h: d,
    focalPx: l
  };
}
function dd(e, t, r = nu) {
  const n = Math.max(1e-12, st(t, 1)), i = Oe(st(r, nu), 1, 89.999), o = n * Math.tan(i * _t), s = Math.max(1, st((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1, st((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(s * 0.5, o),
    halfH: Math.min(a * 0.5, o)
  };
}
function am(e, t, r) {
  const n = Math.max(1e-12, st(t, 1));
  return {
    x: (st(r == null ? void 0 : r.x, 0) - st(e == null ? void 0 : e.x, 0)) / n,
    y: -(st(r == null ? void 0 : r.y, 0) - st(e == null ? void 0 : e.y, 0)) / n
  };
}
function t1(e, t) {
  const r = Oe(st(e, 90), Qn, er), n = Math.max(1e-6, st(t, 1));
  return Oe(
    2 * Math.atan(Math.tan(r * _t * 0.5) / n) * nn,
    Qn,
    er
  );
}
function ka(e, t) {
  const r = Oe(st(e, 60), Qn, er), n = Math.max(1e-6, st(t, 1));
  return Oe(
    2 * Math.atan(Math.tan(r * _t * 0.5) * n) * nn,
    Qn,
    er
  );
}
function Xf(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function n1(e, t) {
  const r = Xf(e, 1), n = Xf(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), s = Math.max(1, Math.round(n * i)), a = (c, d) => d ? a(d, c % d) : c, l = a(o, s) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(s / l))}`;
}
function Vi(e) {
  const t = Oe(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * _t, r = Oe(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * _t;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function Ei(e) {
  const t = Vi(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || n1(t, 1);
}
function fd(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Ei(t), t;
}
function lm({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const s = o == null || String(o).trim() === "" ? NaN : Number(o), a = Number.isFinite(s) ? Oe(s, Qn, er) : Oe(Math.min(42, st(i, 100) * 0.42), 8, 96);
  return fd({
    id: String(e),
    label: "Frame 1",
    yaw_deg: st(t, 0),
    pitch_deg: Oe(st(r, 0), -89.9, 89.9),
    roll_deg: Vl(n),
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function Vr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Ei(e);
}
function cm(e, t) {
  const r = ui(e), n = st(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * nn, o = 2 * Math.atan(r.tanHalfY * n) * nn;
  return i < Qn || i > er || o < Qn || o > er ? null : { hFOV_deg: i, vFOV_deg: o };
}
function um(e, t, r = tu) {
  const n = Math.sign(st(t, 0)), i = Math.abs(st(r, tu));
  if (!n || !(i > 0)) return null;
  const o = ui(e), s = o.hFovDeg + n * i;
  if (s < Qn || s > er) return null;
  const a = Math.tan(s * _t * 0.5);
  return cm(e, a / o.tanHalfX);
}
function dm(e, t) {
  const r = ui(e), n = wo(r.yawDeg, r.pitchDeg, r.rollDeg), i = st(t == null ? void 0 : t.x, 0), o = st(t == null ? void 0 : t.y, 0);
  return ld(qa(qa(n.fwd, Xa(n.right, i)), Xa(n.up, o)));
}
function r1(e) {
  return Zn(e.x, e.y, -e.z);
}
function Ma(e) {
  return Zn(e.x, e.y, -e.z);
}
function Nn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = wo(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function fm(e) {
  const t = Ma(Zn(e[0][0], e[1][0], e[2][0])), r = Ma(Zn(e[0][1], e[1][1], e[2][1])), n = Ma(Zn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), s = Math.cos(i), a = Math.sin(i), l = Math.atan2(a * r.z - s * r.x, s * t.x - a * t.z);
  return { yawDeg: i * nn, pitchDeg: o * nn, rollDeg: l * nn };
}
function gs(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), r = e.x / t, n = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (n * n + i * i), 2 * (r * n - i * o), 2 * (r * i + n * o)],
    [2 * (r * n + i * o), 1 - 2 * (r * r + i * i), 2 * (n * i - r * o)],
    [2 * (r * i - n * o), 2 * (n * i + r * o), 1 - 2 * (r * r + n * n)]
  ];
}
function di(e) {
  const [[t, r, n], [i, o, s], [a, l, c]] = e, d = t + o + c;
  if (d > 0) {
    const f = 0.5 / Math.sqrt(d + 1);
    return { x: (l - s) * f, y: (n - a) * f, z: (i - r) * f, w: 0.25 / f };
  }
  if (t > o && t > c) {
    const f = 2 * Math.sqrt(1 + t - o - c);
    return { x: 0.25 * f, y: (r + i) / f, z: (n + a) / f, w: (l - s) / f };
  }
  if (o > c) {
    const f = 2 * Math.sqrt(1 + o - t - c);
    return { x: (r + i) / f, y: 0.25 * f, z: (s + l) / f, w: (n - a) / f };
  }
  const u = 2 * Math.sqrt(1 + c - t - o);
  return { x: (n + a) / u, y: (s + l) / u, z: 0.25 * u, w: (i - r) / u };
}
function aa(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const Ni = 1e-6, ru = 1e-6, i1 = 1e-9;
function ys(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function o1(e, t) {
  if (e === "auto") return t;
  const [r, n, i, o] = e;
  let s = 0, a = 1;
  for (let l = 0; l < 50; l += 1) {
    const c = 0.5 * (s + a);
    ys(0, r, i, 1, c) < t ? s = c : a = c;
  }
  return ys(0, n, o, 1, 0.5 * (s + a));
}
function go(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function yo(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], s = r.map((f) => -f / i), a = n.map((f) => f / o);
  if (s.reduce((f, p, w) => f + p * a[w], 0) < 0) return r.map(() => 0);
  const l = s.map((f, p) => (f * o + a[p] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((p, w) => p + w * w, 0)), d = 3 * Math.min(c(s), c(a)), u = c(l);
  return u <= d ? l : l.map((f) => f * d / u);
}
function pm(e, t, r, n) {
  const i = r[n], o = r[n + 1], s = t[n + 1] - t[n], a = i.map((d, u) => o[u] - d);
  let l = a;
  go(e, n) && (l = yo(t, n, r[n - 1].map((d, u) => d - i[u]), a).map((d) => d * s));
  let c = a;
  return go(e, n + 1) && (c = yo(t, n + 1, a.map((d) => -d), r[n + 2].map((d, u) => d - o[u])).map((d) => d * s)), [l.map((d) => d / 3), c.map((d) => -d / 3)];
}
function hm(e, t, r, n, i) {
  const [[o], [s]] = pm(e, t, r.map((a) => [a]), n);
  return ys(r[n], r[n] + o, r[n + 1] + s, r[n + 1], i);
}
function s1(e, t, r, n) {
  var c, d;
  const i = e.map((u) => u.value);
  let [o, s] = pm(e, t, i, r);
  o = ((c = e[r].handles) == null ? void 0 : c.out) ?? o, s = ((d = e[r + 1].handles) == null ? void 0 : d.in) ?? s;
  const a = i[r], l = i[r + 1];
  return [0, 1, 2].map((u) => ys(a[u], a[u] + o[u], l[u] + s[u], l[u], n));
}
function Za([e, t, r, n], [i, o, s, a]) {
  return [
    n * i + e * a + t * s - r * o,
    n * o - e * s + t * a + r * i,
    n * s + e * o - t * i + r * a,
    n * a - e * i - t * o - r * s
  ];
}
function a1(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function bc(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function l1([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function iu(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function ro(e, t) {
  return l1(Za([-e[0], -e[1], -e[2], e[3]], t));
}
function vc(e, t, r) {
  return Za(e, iu(ro(e, t).map((n) => r * n)));
}
function Sc(e, t) {
  const r = a1(e, t);
  if (Math.abs(r) > ru) return r < 0;
  const [n, i, o] = ro(e, t);
  for (const s of [-i, n, o])
    if (Math.abs(s) > ru) return s < 0;
  return !1;
}
function la(e) {
  const { x: t, y: r, z: n, w: i } = di(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function ou(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function c1(e, t, r, n) {
  const i = la(e[r].value);
  let o = la(e[r + 1].value);
  Sc(i, o) && (o = bc(o));
  const s = t[r + 1] - t[r], a = ro(i, o);
  let l = a;
  if (go(e, r)) {
    let I = la(e[r - 1].value);
    Sc(I, i) && (I = bc(I)), l = yo(t, r, ro(i, I), a).map((X) => X * s);
  }
  let c = a;
  if (go(e, r + 1)) {
    let I = la(e[r + 2].value);
    Sc(o, I) && (I = bc(I)), c = yo(t, r + 1, ro(o, i), ro(o, I)).map((X) => X * s);
  }
  const d = Za(i, iu(l.map((I, X) => 0.5 * (I - a[X])))), u = Za(o, iu(a.map((I, X) => 0.5 * (I - c[X])))), [f, p, w, h] = vc(vc(i, o, n), vc(d, u, n), 2 * n * (1 - n)), { yawDeg: m, pitchDeg: b, rollDeg: V } = fm(gs({ x: f, y: p, z: w, w: h })), T = e[r].value, ee = e[r + 1].value;
  return {
    yaw_deg: ou(m, T.yaw_deg, ee.yaw_deg, n),
    pitch_deg: b,
    roll_deg: ou(V, T.roll_deg, ee.roll_deg, n)
  };
}
function bs(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function Qa(e) {
  return Math.sqrt(bs(e, e));
}
function el(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function mm(e, t) {
  const r = bs(e, t), n = t.map((s, a) => s - r * e[a]), i = Qa(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((s) => s * o);
}
function Qi(e, t) {
  const r = Qa(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function ca(e, t, r) {
  return Qi(e, mm(e, t).map((n) => r * n));
}
function _c(e, t) {
  const r = el(e[t].value), n = el(e[t + 1].value), i = bs(r, n), o = i < 0 && Qa(n.map((l, c) => l - i * r[c])) <= ru;
  let s;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    s = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    s = mm(r, n);
  const a = Qa(s);
  return [s, s.map((l, c) => Math.cos(a) * l - a * Math.sin(a) * r[c]), o];
}
function u1(e, t, r, n) {
  const i = el(e[r].value), o = el(e[r + 1].value), [s, a, l] = _c(e, r);
  let c = s, d = a;
  const u = t[r + 1] - t[r];
  go(e, r) && (c = yo(t, r, _c(e, r - 1)[1].map((T) => -T), c).map((T) => T * u)), go(e, r + 1) && (d = yo(t, r + 1, d.map((T) => -T), _c(e, r + 1)[0]).map((T) => T * u));
  let f, p, w;
  if (l) {
    const T = Math.PI, ee = ys(0, bs(c, s) / T / 3, T - bs(d, a) / T / 3, T, n);
    [f, p, w] = Qi(i, s.map((I) => ee * I / T));
  } else {
    const T = ca(Qi(i, c.map((X) => X / 3)), Qi(o, d.map((X) => -X / 3)), n), ee = ca(Qi(i, c.map((X) => n * X / 3)), T, n), I = ca(T, Qi(o, d.map((X) => -(1 - n) * X / 3)), n);
    [f, p, w] = ca(ee, I, n);
  }
  const h = Math.hypot(f, w), m = e[r].value.yaw_deg, b = e[r + 1].value.yaw_deg;
  return { yaw_deg: h <= i1 ? m + (b - m) * n : ou(Math.atan2(f, w) * 180 / Math.PI, m, b, n), pitch_deg: Math.atan2(p, h) * 180 / Math.PI };
}
function d1(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = hm(e, t, e.map((s) => s.value[o]), r, n);
  return i;
}
function f1(e, t, r, n) {
  return hm(e, t, e.map((i) => i.value), r, n);
}
const p1 = { position: s1, rotation: c1, direction: u1, size: d1 };
function Wt(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return aa(e[t].value);
  if (r <= n[0].frame + Ni) return aa(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - Ni) return aa(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + Ni; ) o += 1;
  const s = n[o];
  if (Math.abs(r - s.frame) <= Ni || s.easing === "hold") return aa(s.value);
  const a = n.map((c) => c.frame), l = o1(s.easing, (r - a[o]) / (a[o + 1] - a[o]));
  return (p1[t] ?? f1)(n, a, o, l);
}
function su(e) {
  return Math.min(179, Math.max(0.1, e));
}
function h1(e) {
  return Math.min(1, Math.max(0, e));
}
function gm(e) {
  return Math.max(1e-6, e);
}
function ym(e, t) {
  return t - (e.start - e.in);
}
function ko(e, t) {
  return t >= e.start - Ni && (e.duration === null || t < e.start + e.duration - Ni);
}
function $l(e, t) {
  return {
    position: Wt(e, "position", t),
    ...Wt(e, "rotation", t),
    hFOV_deg: su(Wt(e, "fov", t)),
    aspect: e.aspect
  };
}
function Os(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = ym(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : $l(n, r),
    scene: {
      active: i.visible && ko(i.clip, r),
      clip_frame: o,
      position: Wt(i, "position", o),
      ...Wt(i, "rotation", o),
      scale: gm(Wt(i, "scale", o))
    },
    stickers: e.stickers.map((s) => Wr(s, r))
  };
}
function m1(e, t) {
  if (e.placement === "world")
    return {
      position: Wt(e, "position", t),
      ...Wt(e, "rotation", t),
      scale: gm(Wt(e, "scale", t))
    };
  const r = Wt(e, "size", t);
  return {
    ...Wt(e, "direction", t),
    roll_deg: Wt(e, "roll", t),
    hFOV_deg: su(r.hFOV_deg),
    vFOV_deg: su(r.vFOV_deg)
  };
}
function Wr(e, t) {
  const r = ym(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && ko(e.clip, t),
    clip_frame: r,
    ...m1(e, r),
    opacity: h1(Wt(e, "opacity", r))
  };
}
const g1 = 2, bm = ["sky", "world"], au = ["perspective", "erp"], y1 = ["input", "output", "temp"], vm = [0.42, 0, 0.58, 1], Sm = 1, pd = 1e3, lu = 1e7, hd = lu, md = Number.MAX_SAFE_INTEGER, b1 = /^sticker_([0-9]{1,16})$/;
function Vt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Zt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function gd(e, t) {
  const r = Zt(e, t);
  return r !== null && r > 0 ? r : t;
}
function kn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function si(e) {
  const t = Zt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Na(e) {
  const t = si(e);
  return t === null ? null : kn(t, -lu, lu);
}
function fi(e) {
  const t = gd(e, null);
  return t === null ? null : kn(t, Sm, pd);
}
function _m(e) {
  const t = si(e);
  return t !== null && t >= 1 ? Math.min(t, hd) : null;
}
function vs(e, t) {
  return typeof e == "boolean" ? e : t;
}
function wm(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => Zt(r, null));
  return t.includes(null) ? null : t;
}
function xm(e) {
  return wm(e) || [0, 0, 0];
}
function km(e) {
  const t = Vt(e) ? e : {};
  return {
    yaw_deg: Zt(t.yaw_deg, 0),
    pitch_deg: kn(Zt(t.pitch_deg, 0), -90, 90),
    roll_deg: Zt(t.roll_deg, 0)
  };
}
function v1(e) {
  return kn(Zt(e, 90), 0.1, 179);
}
function S1(e) {
  return gd(e, 1);
}
function _1(e) {
  const t = Vt(e) ? e : {};
  return {
    yaw_deg: Zt(t.yaw_deg, 0),
    pitch_deg: kn(Zt(t.pitch_deg, 0), -90, 90)
  };
}
function w1(e) {
  return Zt(e, 0);
}
function x1(e) {
  const t = Vt(e) ? e : {};
  return {
    hFOV_deg: kn(Zt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: kn(Zt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Mm(e) {
  return kn(Zt(e, 1), 0, 1);
}
const zl = [["position", xm], ["rotation", km], ["fov", v1]], jl = [["position", xm], ["rotation", km], ["scale", S1]], $i = [["direction", _1], ["roll", w1], ["size", x1], ["opacity", Mm]], zi = [...jl, ["opacity", Mm]];
function k1(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => Zt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...vm];
}
function M1(e) {
  if (!Vt(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = wm(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function N1(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!Vt(i)) continue;
    const o = Na(i.frame);
    if (o === null) continue;
    const s = { frame: o, value: t(i.value), easing: k1(i.easing) }, a = r ? M1(i.handles) : null;
    a && (s.handles = a), n.set(o, s);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function Hl(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = Vt(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: N1(o.keyframes, i, n === "position") };
  }
  return r;
}
function Gl(e) {
  const t = Vt(e) ? e : {}, r = Na(t.start), n = Na(t.in), i = Na(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function Nm(e) {
  const t = Vt(e) ? e : {}, r = kn(Zt(t.x0, 0), 0, 1), n = kn(Zt(t.y0, 0), 0, 1), i = kn(Zt(t.x1, 1), 0, 1), o = kn(Zt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function P1(e) {
  if (!Vt(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: y1.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function A1(e) {
  const t = P1(e.source);
  if (!t) return null;
  const r = bm.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: Gl(e.clip),
    visible: vs(e.visible, !0),
    locked: vs(e.locked, !1),
    crop: Nm(e.crop),
    ...Hl(e, n ? zi : $i)
  };
  return n || (i.z_index = si(e.z_index) ?? 0), t.kind === "port" && (i.handoff_overrides = C1(e.handoff_overrides, r)), i;
}
function C1(e, t) {
  const r = Array.isArray(e) ? e : [];
  return (t === "world" ? zi : $i).map(([n]) => n).filter((n) => r.includes(n));
}
function I1(e, t) {
  const r = [];
  let n = !1;
  for (const s of Array.isArray(e) ? e : []) {
    const a = Vt(s) ? A1(s) : null;
    if (a) {
      if (a.source.kind === "port") {
        if (n) continue;
        n = !0;
      }
      r.push(a);
    }
  }
  const i = /* @__PURE__ */ new Set();
  for (const s of r)
    typeof s.id == "string" && s.id && !i.has(s.id) ? i.add(s.id) : s.id = null;
  let o = O1(t, r);
  for (const s of r)
    if (s.id === null) {
      for (; i.has(`sticker_${o}`); ) o += 1;
      s.id = `sticker_${o}`, o += 1;
    }
  return { stickers: r, next: Math.min(o, md) };
}
function E1(e) {
  const t = typeof e == "string" ? b1.exec(e) : null, r = t ? Number(t[1]) : 0;
  return r < md ? r : 0;
}
function Pm(e) {
  return e.reduce((t, r) => Math.max(t, E1(r.id)), 0) + 1;
}
function O1(e, t) {
  const r = si(e), n = Pm(t);
  return kn(r === null ? n : Math.max(r, n), 1, md);
}
function F1(e) {
  if (!Vt(e)) return null;
  const t = au.includes(e.projection) ? e.projection : au[0];
  return { aspect: gd(e.aspect, 1), projection: t, visible: vs(e.visible, !0), ...Hl(e, zl) };
}
function tl(e) {
  return typeof e == "string" && e ? e : null;
}
function Am(e, t) {
  const r = new Map(e.map((n, i) => [t(n), i]));
  return e.filter((n, i) => r.get(t(n)) === i);
}
function T1(e) {
  if (!Vt(e) || tl(e.id) === null || !bm.includes(e.placement)) return null;
  const t = e.placement === "world", r = {};
  Vt(e.clip) && (r.clip = Gl(e.clip));
  for (const i of ["visible", "locked"])
    typeof e[i] == "boolean" && (r[i] = e[i]);
  Vt(e.crop) && (r.crop = Nm(e.crop)), Object.assign(r, Hl(e, (t ? zi : $i).filter(([i]) => Vt(e[i]))));
  const n = t ? null : si(e.z_index);
  return n !== null && (r.z_index = n), Object.keys(r).length ? { id: e.id, placement: e.placement, ...r } : null;
}
function Cm(e) {
  const t = Vt(e) ? fi(e.fps) : null;
  if (t === null || tl(e.layer) === null) return null;
  const r = Array.isArray(e.deleted) ? [...new Set(e.deleted.filter((c) => tl(c) !== null))] : [], n = (Array.isArray(e.stickers) ? e.stickers : []).map(T1).filter((c) => c !== null), i = Am(n, (c) => c.id).filter((c) => !r.includes(c.id)), o = Vt(e.scene) ? e.scene : {}, s = {};
  typeof o.visible == "boolean" && (s.visible = o.visible), Vt(o.clip) && (s.clip = Gl(o.clip));
  const a = { layer: e.layer, fps: t, deleted: r, stickers: i, scene: s };
  return typeof e.painting_visible == "boolean" && (a.painting_visible = e.painting_visible), !r.length && !i.length && !Object.keys(s).length && !("painting_visible" in a) ? null : a;
}
function D1(e) {
  const t = (Array.isArray(e) ? e : []).map(Cm).filter((r) => r !== null);
  return Am(t, (r) => r.layer);
}
function nl(e) {
  const t = Vt(e.timeline) ? e.timeline : {}, r = Vt(e.scene) ? e.scene : {}, { stickers: n, next: i } = I1(e.stickers, e.next_sticker_id);
  return {
    version: g1,
    id: tl(e.id),
    timeline: {
      fps: fi(t.fps) ?? 24,
      length: _m(t.length)
    },
    camera: F1(e.camera),
    scene: { clip: Gl(r.clip), visible: vs(r.visible, !0), ...Hl(r, jl) },
    stickers: n,
    next_sticker_id: i,
    painting: xo(e.painting),
    painting_layer: Vt(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: vs(e.painting_visible, !0),
    upstream: D1(e.upstream)
  };
}
function L1(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const r = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!Vt(r)) return null;
  const n = String(r.type || "").trim().toLowerCase();
  return n === "comfy_image" ? {
    kind: "file",
    filename: String(r.filename || "").trim(),
    subfolder: String(r.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(r.storage || "input").trim().toLowerCase()
  } : n === "dataurl" ? { kind: "file", data_url: r.value } : null;
}
function R1(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!Vt(t)) return null;
  const r = kn(Zt(t.hFOV_deg, 90), 1, 179), n = kn(Zt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function V1(e) {
  const t = Vt(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(Vt) : [];
  return r.sort((n, i) => Zt(n.z_index, 0) - Zt(i.z_index, 0)), nl({
    camera: R1(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: L1(n, t),
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
function tr(e) {
  if (e == null || typeof e == "string" && !e.trim()) return nl({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!Vt(t)) throw new Error("state_json is not a JSON object.");
  const r = Object.hasOwn(t, "version") ? t.version : 1;
  if (r !== 1 && r !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(r)}; supported versions are 1 and 2.`);
  return r === 1 ? V1(t) : nl(t);
}
const wc = {
  state: { painting_visible: !0 },
  camera: { projection: au[0], visible: !0 },
  scene: { visible: !0 }
};
function xc(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function cu(e) {
  const t = xc(e, wc.state);
  return t.id === null && delete t.id, t.next_sticker_id === Pm(e.stickers) && delete t.next_sticker_id, t.upstream.length || delete t.upstream, JSON.stringify({
    ...t,
    camera: e.camera && xc(e.camera, wc.camera),
    scene: xc(e.scene, wc.scene),
    stickers: e.stickers.map((r) => Object.fromEntries(Object.entries(r).filter(([n, i]) => n !== "handoff_overrides" || i.length)))
  });
}
function os(e, t, r, n, i) {
  const o = {};
  for (const [s] of t)
    o[s] = {
      value: e[s].value,
      keyframes: e[s].keyframes.map((a) => ({ ...a, frame: r(n + a.frame) - i }))
    };
  return o;
}
function rl(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function Mo(e, t) {
  const r = fi(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (a) => si(a * n), { length: o } = e.timeline, s = rl(e.scene.clip, i);
  return nl({
    id: e.id,
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...os(e.camera, zl, i, 0, 0) },
    scene: { clip: s.clip, visible: e.scene.visible, ...os(e.scene, jl, i, s.anchor, s.newAnchor) },
    stickers: e.stickers.map((a) => {
      const { clip: l, anchor: c, newAnchor: d } = rl(a.clip, i), u = a.placement === "world" ? zi : $i;
      return { ...a, clip: l, ...os(a, u, i, c, d) };
    }),
    next_sticker_id: e.next_sticker_id,
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible,
    // The override records keep their own fps (docs/scene-state-v2.md "上流の上書き").
    upstream: e.upstream
  });
}
function Im(e, t) {
  const { fps: r } = t.timeline, n = r / e.fps, i = (l) => si(l * n), o = new Map(t.stickers.map((l) => [l.id, l.clip.start - l.clip.in])), s = e.stickers.map((l) => {
    const c = (l.placement === "world" ? zi : $i).filter(([p]) => Object.hasOwn(l, p));
    if (!Object.hasOwn(l, "clip")) {
      const p = o.get(l.id) ?? 0, w = si(p * (e.fps / r));
      return { ...l, ...os(l, c, i, w, p) };
    }
    const { clip: d, anchor: u, newAnchor: f } = rl(l.clip, i);
    return { ...l, clip: d, ...os(l, c, i, u, f) };
  }), a = Object.hasOwn(e.scene, "clip") ? { ...e.scene, clip: rl(e.scene.clip, i).clip } : e.scene;
  return Cm({ ...e, fps: r, stickers: s, scene: a });
}
function kc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Em(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Om(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= Ni);
}
function Fm(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? Em(e.keyframes[n - 1].easing) : [...vm];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function mn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = kc(i.value, n);
    return;
  }
  const o = Om(i, r);
  o ? o.value = kc(o.value, n) : Fm(i, r, kc(Wt(e, t, r), n));
}
function No(e) {
  return e.placement === "world" ? zi.map(([t]) => t) : e.placement === "sky" ? $i.map(([t]) => t) : (e.clip ? jl : zl).map(([t]) => t);
}
function $1(e, t) {
  for (const r of No(e))
    Om(e[r], t) || Fm(e[r], t, Wt(e, r, t));
}
function z1(e) {
  const t = No(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function Mc(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function j1(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function H1(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const s = e[o];
    if (!s.keyframes.some((l) => i.has(l.frame))) continue;
    const a = Wt(e, o, n);
    s.keyframes = s.keyframes.filter((l) => !i.has(l.frame)), s.keyframes.length || (s.value = a);
  }
}
function G1(e, t, r, n, i) {
  n = Math.max(n, Math.min(0, i - Math.min(...r)));
  const o = new Set(r);
  for (const s of t) {
    const a = e[s], l = a.keyframes.filter((d) => o.has(d.frame)).map((d) => ({ ...d, frame: d.frame + n })), c = new Set(l.map((d) => d.frame));
    a.keyframes = [
      ...a.keyframes.filter((d) => !o.has(d.frame) && !c.has(d.frame)),
      ...l
    ].sort((d, u) => d.frame - u.frame);
  }
  return n;
}
function Tm(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((s) => r.length > 1 ? s.frame >= n && s.frame < i : s.frame === n));
}
function K1(e, t, r) {
  const n = Tm(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function W1(e, t, r, n) {
  for (const i of Tm(e, t, r)) i.easing = Em(n);
}
function U1(e, t) {
  e.start = Math.max(0, e.start + t);
}
function B1(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function Y1(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function q1(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function yd(e) {
  return No(e).map((t) => e[t]);
}
function il(e) {
  return yd(e).some((t) => t.keyframes.length > 0) || !!e.clip && !q1(e.clip);
}
function Dm(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(il);
}
const X1 = 1e5;
function Lm(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, r);
  if (i && e.camera)
    for (const s of yd(e.camera))
      for (const a of s.keyframes) o = Math.max(o, a.frame + 1);
  return o = Math.max(o, Rm([e.scene, ...e.stickers], n)), Number.isFinite(o) ? o : X1;
}
function Rm(e, t = null) {
  let r = 0;
  for (const n of e) {
    const { clip: i } = n;
    r = Math.max(r, i.duration === null || i === t ? i.start + 1 : i.start + i.duration);
    for (const o of yd(n))
      for (const s of o.keyframes) r = Math.max(r, i.start - i.in + s.frame + 1);
  }
  return r;
}
function J1(e) {
  return e > 0 ? fi(Math.min(e, pd)) : null;
}
function Z1(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : _m(Math.max(1, Math.min(e, hd)));
}
const Nc = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], Q1 = 2e3;
function eS(e, t, r = 56) {
  const n = Nc.find((o) => o * t >= r) || Nc[Nc.length - 1], i = [];
  for (let o = 0; o < e && i.length < Q1; o += n) i.push(o);
  return i;
}
function tS(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let ua = { text: null, parsed: null };
function Rn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function ol(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function nS({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Rn(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: xo(null),
    painting_layer: null,
    ui_settings: ol(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Vm(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function rS(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function iS(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function oS(e) {
  return Array.isArray(e) ? e.map((t) => fd(t)) : [];
}
function sS(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((s) => String((s == null ? void 0 : s.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function $m(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = nS(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (ua.text === i ? o = ua.parsed : (o = JSON.parse(i), ua = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const s = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, a = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: rS(o.assets),
      stickers: iS(o.stickers),
      shots: oS(o.shots),
      painting: xo(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: ol(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return s && (a.ui_settings = ol({ ...a.ui_settings, ...s })), a.output_preset = Vm(
      r.outputPreset,
      Number(a.output_preset || n.output_preset)
    ), a.bg_color = String(r.backgroundColor || a.bg_color || n.bg_color), a.coverage = Rn(r.coverage), delete a.editor_history, a;
  } catch {
    return ua = { text: i, parsed: null }, n;
  }
}
function aS(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function lS(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), e.next_sticker_id > r.next_sticker_id && (r.next_sticker_id = e.next_sticker_id), e.id && !r.id && (r.id = e.id), { state: r, paintingChanged: n };
}
function cS(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function zm(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: s } = t, a = fi(t.fps);
  let l;
  try {
    l = tr(e);
  } catch {
    l = tr(null);
  }
  return a && a !== l.timeline.fps && (l = Mo(l, a)), {
    ...l,
    coverage: Rn(i),
    bg_color: n,
    output_preset: Vm(r),
    ui_settings: ol(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...s }
  };
}
function uS(e, t) {
  const r = Mo(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, s] of i)
    if (s) {
      o.clip && (o.clip = s.clip);
      for (const a of No(o)) o[a].keyframes = s[a].keyframes;
    }
}
function jm(e, t, r) {
  if (e.source.kind !== "port" || !((r == null ? void 0 : r.width) > 0 && (r == null ? void 0 : r.height) > 0)) return t.vFOV_deg;
  const n = Math.min(179, Math.max(0.1, t.hFOV_deg)) * _t, i = 2 * Math.atan(Math.tan(n * 0.5) * (r.height / r.width)) / _t;
  return Math.min(179, Math.max(0.1, i));
}
function bd(e, t, r = null) {
  const n = Wr(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: jm(e, n, r), rot_deg: n.roll_deg };
}
const dS = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Jf(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function fS(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[dS[r]].keyframes.length));
}
function Hm(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = Jf(r, ["yaw_deg", "pitch_deg"]), o = Jf(r, e.source.kind === "port" ? ["hFOV_deg"] : ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && mn(e, "direction", n, i), r.rot_deg !== void 0 && mn(e, "roll", n, r.rot_deg), Object.keys(o).length && mn(e, "size", n, o);
}
const Kl = ["position_x", "position_y", "position_z"], vd = "camera";
function Gm(e, t) {
  const r = $l(e, t);
  return fd({
    id: vd,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: t1(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function pS(e) {
  return tr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Gt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function hS(e) {
  return e - 360 * Math.round(e / 360);
}
function mS(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + hS(r[o] - n[o]));
  Object.keys(i).length && mn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && mn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * _t * 0.5) / Math.tan(r.vFOV_deg * _t * 0.5)), r.position.some((o, s) => o !== n.position[s]) && mn(e, "position", t, [...r.position]);
}
function gS(e, t) {
  const r = Wt(e, "position", t), n = Wt(e, "rotation", t);
  return {
    ...Object.fromEntries(Kl.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Wt(e, "fov", t)
  };
}
function yS(e, t, r, n) {
  const i = Kl.indexOf(r);
  if (i >= 0) {
    const o = Wt(e, "position", t);
    o[i] = n, mn(e, "position", t, o);
  } else r === "hFOV_deg" ? mn(e, "fov", t, n) : mn(e, "rotation", t, { [r]: n });
}
function bS(e, t, r) {
  mn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function vS(e, t) {
  const r = Wr(e, t);
  return {
    ...Object.fromEntries(Kl.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function SS(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = Kl.indexOf(r);
  if (o >= 0) {
    const s = Wt(e, "position", i);
    s[o] = n, mn(e, "position", i, s);
  } else r === "scale" ? mn(e, "scale", i, n) : r === "opacity" ? mn(e, "opacity", i, n / 100) : mn(e, "rotation", i, { [r]: n });
}
function _S(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && mn(e, i, n, r[i]);
}
function wS(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function xS(e, t, r) {
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
function Pa(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function sl(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Wl(e) {
  const t = `sticker_${e.next_sticker_id}`;
  return e.next_sticker_id += 1, t;
}
function Sd(e, t, r, n) {
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
function kS(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = Gt(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function Km(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Wm(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Um(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Zf(e, t) {
  return e != null && e.__panoSceneStateV2 ? cu(tr(t)) : JSON.stringify(t);
}
const MS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function NS() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (e) => MS[e & 63]).join("");
}
function Bm(e, t, r, n) {
  const i = Zf(e, t);
  return PS(e, i, r, n) ? null : !(e != null && e.__panoSceneStateV2) || t.id ? i : (t.id = NS(), Zf(e, t));
}
function PS(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = tr(r);
    if (cu(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && cu(Mo(i, o)) === t;
  } catch {
    return !1;
  }
}
const Pc = 0.15, AS = 0.01, CS = 1e-3, IS = 0.05, ES = 4, Qf = 250, OS = 16, dr = 1, FS = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Kn(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function Mr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Ul(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function ji(e, t, r = 0) {
  const n = Nn(e, t, r), i = Mr(n, 2);
  return { right: Mr(n, 0), up: Mr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function TS(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function uu(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function DS(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : uu(e, "3dof", r);
}
function LS(e) {
  return ji(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function RS(e) {
  return Kn(e.position, ji(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function pi(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function ss(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function _d(e, t) {
  return ss(pi(t, e.position), ji(e.yaw_deg, e.pitch_deg).forward);
}
function wd(e) {
  return Math.max(e, 1e-6) * IS;
}
function du(e, t, r = null, n = dr) {
  if (t) return t;
  const i = wd(n);
  if (r && _d(e, r) > 0) {
    const o = pi(r, e.position), s = Math.hypot(...o);
    return s >= i ? r : Kn(e.position, o, i / s);
  }
  return Kn(e.position, ji(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function Ym(e, t = dr) {
  return Math.max(e.distance, wd(t));
}
function qm(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > ES ? !1 : t.time - e.time < Qf || e.cost > OS && t.time - e.wheelTime < Qf;
}
function xd(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * _t);
  return { tanX: n, tanY: n * r / t };
}
function Xm(e, t, r, n, i = RS(e)) {
  const o = e.roll_deg ?? 0, [s, a] = VS(t, r, o), l = Gt(e.yaw_deg + s / n * 360), c = Oe(e.pitch_deg - a / n * 360, -89.9, 89.9), d = Nn(e.yaw_deg, e.pitch_deg, o), u = Nn(l, c, o), f = pi(e.position, i), p = [0, 1, 2].map((h) => ss(Mr(d, h), f)), w = { ...e, yaw_deg: l, pitch_deg: c, position: Kn(i, Ul(u, p)) };
  return { ...w, distance: _d(w, i) };
}
function VS(e, t, r) {
  const n = Math.cos(r * _t), i = Math.sin(r * _t);
  return [e * n + t * i, t * n - e * i];
}
function Jm(e, t, r, n, i, o = e.distance) {
  const { right: s, up: a } = LS(e), l = 2 * o * xd(e, n, i).tanY / i;
  return { ...e, position: Kn(Kn(e.position, s, -t * l), a, r * l), distance: o };
}
function Zm(e, t, r, n = dr) {
  const i = pi(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const s = Math.max(n, 1e-6), a = s * AS, l = r > 0 ? Math.min(Math.max(o * Pc, a), o - s * CS) : -Math.max(o * Pc / (1 - Pc), a);
  if (r > 0 && l <= 0) return e;
  const c = { ...e, position: Kn(e.position, i, l / o) };
  return { ...c, distance: Math.max(_d(c, t), wd(n)) };
}
function $S(e, t, r, n) {
  const { tanX: i, tanY: o } = xd(e, r, n), s = Math.atan(Math.min(i, o)), a = Math.max(t.radius, 1e-6) / Math.sin(s) * 1.1, { forward: l } = ji(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Kn(t.center, l, -a), distance: a };
}
function kd(e, t, r, n = null) {
  return Qm({
    quaternion: di(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(xd(e, t, r).tanY) * nn,
    aspect: t / r
  }, e.position, e.distance, n);
}
function Qm(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: dr }, s = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), a = Math.max(s + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: a * 2
  };
}
function Ss(e, t, r, n) {
  const { right: i, up: o, forward: s } = eg(e), a = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = a[0] * s[0] + a[1] * s[1] + a[2] * s[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * _t), d = c * e.aspect, u = a[0] * i[0] + a[1] * i[1] + a[2] * i[2], f = a[0] * o[0] + a[1] * o[1] + a[2] * o[2];
  return { x: r * 0.5 * (1 + u / l / d), y: n * 0.5 * (1 - f / l / c), z: l };
}
function eg(e) {
  const t = gs(e.quaternion), r = Mr(t, 2);
  return { right: Mr(t, 0), up: Mr(t, 1), forward: r.map((n) => -n) };
}
function al(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function zS({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function Md(e, t) {
  if (!e || !t.active) return null;
  const r = jS(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: fu(t),
    itemQuaternion: e.kind === "splat" ? FS : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function tg(e, t, r) {
  const n = t.stickers.findIndex((a) => a.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], s = Md(e, o);
  return s && { ...s, id: i.id, opacity: o.opacity, value: o };
}
function ng(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function jS(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function fu(e) {
  return {
    position: [...e.position],
    quaternion: di(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function pu(e, t) {
  return Kn(e.position, Ul(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function Aa(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function hu({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function mu(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((s) => s[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((s) => s[o]))), n = t.map((o, s) => (o + r[s]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function HS(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...hu(t).map((o) => pu(e.scene, o)));
  for (const o of r) i.push(...Nd(o));
  for (const { box: o, value: s } of n) i.push(...hu(o).map((a) => pu(s, a)));
  return i;
}
function GS(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: di(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Nn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function Nd(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Kn(e.position, Ul(e.rotation, [n, i, 0])));
}
function KS(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? mu(Nd(i)) : o != null && o.box ? mu(hu(Aa(o.kind, o.box)).map((s) => pu(n, s))) : { center: [...n.position], radius: n.scale };
}
const WS = 2, US = 0.5, BS = 30;
function rg(e, t) {
  const r = pi(t, e), n = Math.atan2(r[0], -r[2]) * nn, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * nn;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function YS(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * US : WS, o = t ? [...t] : Kn(e.position, ji(e.yaw_deg, e.pitch_deg).forward, i), s = Math.hypot(...pi(o, e.position)), a = s > 0 ? rg(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(s, 1e-3) * Math.tan(BS * 0.5 * _t);
  return { position: o, rotation: a, scale: l };
}
function ep(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function qS(e) {
  return [0, 1, 2].map((t) => Mr(e, t));
}
function tp(e, t, r, n) {
  if (e === "translate") return { position: Kn(t.position, pi(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * e_(r.scale, n.scale) / r.scale };
  const i = ep(gs(n.quaternion), qS(gs(r.quaternion))), o = ep(i, Nn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: s, pitchDeg: a, rollDeg: l } = fm(o);
  return Math.abs(a) <= XS ? { rotation: { yaw_deg: s + 0, pitch_deg: a, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: a, roll_deg: JS(o, t.yaw_deg) } };
}
const XS = 89.9;
function JS(e, t) {
  const r = Mr(e, 0), n = Mr(e, 1), i = Math.cos(t * _t), o = Math.sin(t * _t);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * nn + 0;
}
const ZS = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function QS(e, t, r, n, i) {
  if (!Ss(e, t, n, i)) return null;
  const { right: o, up: s, forward: a } = eg(e), l = pi(t, e.position), c = ss(l, o), d = ss(l, s), u = ss(l, a), f = Math.tan(e.fovY_deg * 0.5 * _t), p = f * e.aspect, w = Math.hypot(c, d, u) * ZS[r] * Math.min(1.9 * f, 7) / 4;
  if (!(u > w)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const h = (ee) => {
    const I = w * Math.sqrt(ee * ee + u * u - w * w);
    return [(ee * u - I) / (u * u - w * w), (ee * u + I) / (u * u - w * w)];
  }, [m, b] = h(c), [V, T] = h(d);
  return {
    minX: n * 0.5 * (1 + m / p),
    maxX: n * 0.5 * (1 + b / p),
    minY: i * 0.5 * (1 - T / f),
    maxY: i * 0.5 * (1 - V / f)
  };
}
function e_(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, s) => Math.abs(s - e) > Math.abs(o - e) ? s : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function t_(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function ig(e, t) {
  const r = Nn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * _t) * t, i = n / e.aspect, o = (c, d, u) => Kn(e.position, Ul(r, [c, d, u])), s = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], a = s.map((c) => [e.position, c]);
  s.forEach((c, d) => a.push([c, s[(d + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return a.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), a;
}
function n_(e, t, r, n, i, o = 6) {
  return t.some(([s, a]) => {
    const l = Ss(e, s, n, i), c = Ss(e, a, n, i);
    if (!l || !c) return !1;
    const d = c.x - l.x, u = c.y - l.y, f = Oe(((r.x - l.x) * d + (r.y - l.y) * u) / Math.max(d * d + u * u, 1e-12), 0, 1);
    return Math.hypot(l.x + d * f - r.x, l.y + u * f - r.y) <= o;
  });
}
function r_(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function i_(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Wt(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (s, a) => {
    const l = o === 1 ? 0 : a * i / (o - 1);
    return Wt(n, "position", l);
  });
}
function o_(e, t, r, n, i) {
  const o = Math.max(0, e) * r, s = Math.max(0, t) * r, a = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(s, 1));
  return {
    width: Math.max(1, Math.round(o * a)),
    height: Math.max(1, Math.round(s * a))
  };
}
const og = 0.28;
function sg(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * _t);
  return {
    quaternion: di(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * nn,
    aspect: n
  };
}
function as(e) {
  const t = ui(e);
  return {
    quaternion: di(Nn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function ag(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = dd(r, n), s = t.x + t.w * 0.5, a = t.y + t.h * 0.5;
  return {
    rect: { x: s - i, y: a - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * nn,
      vFOV_deg: 2 * Math.atan(o / n) * nn
    }
  };
}
function lg(e, t, r) {
  const [[n, i, o], [s, a, l], [c, d, u]] = gs(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * _t), p = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(w, h = 1e-4) {
      const m = r1(w), b = n * m.x + s * m.y + c * m.z, V = i * m.x + a * m.y + d * m.z, T = -(o * m.x + l * m.y + u * m.z), ee = Math.max(T, h);
      return {
        x: t * 0.5 * (1 + b / ee / p),
        y: r * 0.5 * (1 - V / ee / f),
        z: T
      };
    },
    // The unit direction seen at the point (x, y).
    ray(w, h) {
      const m = (w / t * 2 - 1) * p, b = (1 - h / r * 2) * f;
      return ld(Ma({
        x: n * m + i * b - o,
        y: s * m + a * b - l,
        z: c * m + d * b - u
      }));
    }
  };
}
function cg(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = Os(e, t) }) {
  const s = [];
  e.stickers.forEach((a, l) => {
    const c = o.stickers[l];
    if (a.placement !== "sky") return;
    const d = a.source.kind === "port" && !a.visible;
    if (!c.active && !d) return;
    const u = r(a);
    if (!u) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * _t), p = Math.tan(jm(a, c, dg(u.media)) * 0.5 * _t), { crop: w } = a;
    s.push({
      kind: "sticker",
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: d ? og : c.opacity,
      zIndex: n(a),
      quaternion: di(Nn(c.yaw_deg, c.pitch_deg, c.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * w.x0 - 1) * f,
        x1: (2 * w.x1 - 1) * f,
        y0: (1 - 2 * w.y1) * p,
        y1: (1 - 2 * w.y0) * p
      }
    });
  });
  for (const a of i) s.push({ kind: "erp", ...a });
  return s.sort((a, l) => a.zIndex - l.zIndex);
}
function ug(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const s = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !s.has(a.id) && s.set(a.id, a);
  return cg(e, t, {
    media: (a) => {
      const l = s.get(a.id);
      return l ? n(l) : null;
    },
    zIndex: (a) => {
      var l;
      return Number(((l = s.get(a.id)) == null ? void 0 : l.z_index) || 0);
    },
    paintLayers: i,
    evaluated: o
  });
}
function dg(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function fg(e, t, r, { media: n, evaluated: i = Os(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !o.has(a.id) && o.set(a.id, a);
  const s = [];
  return e.stickers.forEach((a, l) => {
    const c = i.stickers[l];
    if (a.placement !== "world" || !c.active) return;
    const d = o.get(a.id), u = d ? n(d) : null;
    if (!u) return;
    const { width: f, height: p } = dg(u.media), w = GS(c, a.crop, f, p);
    w && s.push({
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: c.opacity,
      position: w.position,
      quaternion: w.quaternion,
      rotation: w.rotation,
      width: w.width,
      height: w.height,
      crop: a.crop
    });
  }), s;
}
function s_({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: s = () => import("./.lazy/pano_three_view-BVorUOAb.js").then((a) => a.$) }) {
  let a = null, l = null, c = !1, d = 0;
  const u = () => {
    l = nm(a.createThreeView({ onUpdate: n, onSplats: i, createCanvas: () => e }), "editor");
  }, f = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(h) {
      return l && !f.lost ? l.render(h) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(h) {
      return l && !f.lost ? l.renderUnwrap(h) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(h, m) {
      return l && !f.lost ? l.resize(h, m) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(h, m) {
      l && !f.lost && l.clear(h, m);
    },
    // Frees the Spark renderer of an owner that stops drawing SPLATs for now (pano_three_view.js
    // releaseSplats).
    releaseSplats(h) {
      l && !f.lost && l.releaseSplats(h);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(h) {
      return l ? l.sceneBox(h) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(h, m, b, V, T) {
      return l && !f.lost ? l.pick(h, m, b, V, T) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(h, m, b, V, T) {
      return l && !f.lost ? l.pickSurface(h, m, b, V, T) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(h, m, b, V, T) {
      return l && !f.lost ? l.pickSticker(h, m, b, V, T) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(h, m, b, V, T, ee) {
      return l && !f.lost ? l.gizmoPointer(h, m, b, V, T, ee) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (l ? l.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", p), e.removeEventListener("webglcontextrestored", w), l == null || l.dispose(), l = null;
    }
  };
  function p(h) {
    h.preventDefault(), !(c || f.lost) && (f.lost = !0, f.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function w() {
    c || !f.lost || queueMicrotask(() => {
      c || !f.lost || (l && (d += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, a && (u(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", p), e.addEventListener("webglcontextrestored", w), s().then((h) => {
    c || (a = h, !f.lost && (u(), f.ready = !0, t()));
  }).catch((h) => {
    console.error("[PanoramaStickers] three.js view is unavailable", h), f.failed = !0, r();
  }), f;
}
const pg = "3D view unavailable. Check the browser console.";
function ll(e, t, r) {
  return sg({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function a_(e) {
  let t = null, r = !1, n = !1;
  const i = /* @__PURE__ */ new Set();
  function o() {
    t || r || n || (r = !0, e().then((s) => {
      if (r = !1, !i.size) {
        s.dispose();
        return;
      }
      t = s, i.forEach((a) => a.onChange());
    }).catch((s) => {
      r = !1, i.size && (n = !0, console.error("[PanoramaStickers] three.js view is unavailable", s), i.forEach((a) => a.onChange()));
    }));
  }
  return function(a) {
    const l = { onChange: a };
    let c = !1;
    return i.add(l), {
      get failed() {
        return n;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(d) {
        return c ? null : (o(), t ? t.render({ ...d, owner: l }) : null);
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
const hg = a_(
  () => import("./.lazy/pano_three_view-BVorUOAb.js").then((e) => e.$).then((e) => nm(e.createThreeView({ createCanvas: () => on({ label: "three.node" }) }), "node"))
), fr = ["erp_image", "bg_erp", "bg_media"], Pd = ["sticker_image", "sticker"], mg = ["scene"], Ad = ["sticker", "sticker_state"], l_ = {
  background: fr,
  "external-sticker": Pd,
  scene: mg,
  "sticker-handoff": Ad
};
function gg(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Bl(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = gg(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function yg(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function np(e, t) {
  var o, s;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((a) => (a == null ? void 0 : a.name) === t);
  let n = r >= 0 && e.graph ? e.getInputLink(r) : null;
  const i = /* @__PURE__ */ new Set();
  for (; n; ) {
    if (n.type && n.type !== "*") return String(n.type);
    const a = e.graph.getNodeById(n.origin_id);
    if (!a || i.has(a)) return "";
    i.add(a);
    const l = (s = (o = a.outputs) == null ? void 0 : o[n.origin_slot ?? 0]) == null ? void 0 : s.type;
    if (l && l !== "*") return String(l);
    if (a.type !== "Reroute") return "";
    n = a.getInputLink(0);
  }
  return "";
}
function bg(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const s = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((a) => String(a == null ? void 0 : a.id) === r[o]);
    if (!s || o === r.length - 1) return { graph: n, entry: s };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((a) => (a == null ? void 0 : a.id) === s.type);
  }
}
function c_(e, t) {
  const { graph: r, entry: n } = bg(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((s) => Array.isArray(s) ? [s[0], { origin_id: s[1], origin_slot: s[2] }] : [s == null ? void 0 : s.id, s])), o = {};
  for (const s of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const a = gg(i.get(s == null ? void 0 : s.link));
    a && (o[String((s == null ? void 0 : s.name) || "")] = a);
  }
  return o;
}
const vg = [...fr, ...Pd, ...mg, ...Ad], u_ = 256, eo = /* @__PURE__ */ new Map(), Ac = /* @__PURE__ */ new WeakMap();
let Sg = () => null;
function _g(e) {
  return Ac.has(e) || Ac.set(e, JSON.stringify(e)), Ac.get(e);
}
function d_(e) {
  Sg = e;
}
function cl(e, t) {
  const r = _g(e);
  eo.delete(r), eo.set(r, t), eo.size > u_ && eo.delete(eo.keys().next().value);
}
function Kt(e, t) {
  var o;
  const r = e ? Sg(e) : null;
  if (!r) return !0;
  const n = Bl(e);
  let i = eo.get(_g(r));
  if (i)
    cl(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((s) => vg.includes(s == null ? void 0 : s.name)))) return !0;
    cl(r, n), i = n;
  }
  return l_[t].every((s) => i[s] === n[s]);
}
const ul = /* @__PURE__ */ new WeakSet();
async function gu(e, t) {
  if (ul.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && ul.add(e), r.ok && n !== void 0 ? n : null;
}
function wg(e, t) {
  var o, s, a, l, c;
  const r = (a = (s = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : s.extra_pnginfo) == null ? void 0 : a.workflow, { entry: n } = bg(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = n == null ? void 0 : n.inputs) != null && c.some((d) => vg.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: c_(r, t) };
}
const Ca = /* @__PURE__ */ new Map();
function f_(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && Ca.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await gu(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const s = wg(i, o);
        s && cl(s.output, s.inputs);
      }
    });
}
const p_ = 5;
function h_(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${p_}`, n = gu(e, `/jobs?${r}`).then((s) => (s == null ? void 0 : s.jobs) || []), i = /* @__PURE__ */ new Map(), o = (s) => (i.has(s) || i.set(s, gu(e, `/jobs/${encodeURIComponent(s)}`)), i.get(s));
  return {
    async lastNodeOutput(s, a) {
      var c, d, u, f;
      const l = String(s.id);
      for (const { id: p } of await n) {
        if (!a()) return null;
        const w = await o(p);
        if ((c = w == null ? void 0 : w.outputs) != null && c[l])
          return ((f = (u = (d = w.workflow) == null ? void 0 : d.prompt) == null ? void 0 : u[l]) == null ? void 0 : f.class_type) !== s.comfyClass ? null : wg(w, l);
      }
      return null;
    }
  };
}
function m_(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, s;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((s = i.changeTracker) == null ? void 0 : s.nodeOutputs);
  });
}
let Yi = null;
async function g_(e, t, r) {
  var a;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || ul.has(r) || (a = Ca.get(i)) != null && a.has(n) || m_(t)) return null;
  (Yi == null ? void 0 : Yi.workflowId) !== i && (Yi = { workflowId: i, history: h_(r, i) }, queueMicrotask(() => {
    Yi = null;
  }));
  const s = await Yi.history.lastNodeOutput(e, o);
  return o() ? s ? (cl(s.output, s.inputs), t.nodeOutputs[n] = s.output, s.output) : (ul.has(r) || Ca.set(i, (Ca.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function rp(e, t, r, n = fr) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((s == null ? void 0 : s.name) || ""));
}
const ip = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Ia(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return ip.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return ip.test(String((e == null ? void 0 : e.filename) || ""));
}
const Cc = /* @__PURE__ */ new WeakMap();
function y_(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function yu(e) {
  return y_(e) ? (Cc.has(e) || Cc.set(e, Math.random().toString(36).slice(2, 10)), Cc.get(e)) : "run";
}
function xg(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function b_(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, s) => {
    for (const a of s) {
      const l = r(o, a);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, d) => d)));
    }
  };
  return i(e, t), n;
}
function Cd(e, t = [], r = null) {
  var i;
  const n = typeof r == "function" ? r : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const s = [(i = e == null ? void 0 : e.ui) == null ? void 0 : i[o], e == null ? void 0 : e[o]];
    for (const a of s)
      if (Array.isArray(a))
        for (const l of a) {
          const c = n(l);
          if (c && (/\.mp4(\?|$)/i.test(c) || String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4"))
            return c;
        }
  }
  return "";
}
function v_({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: r = null
} = {}) {
  const n = Es(e, "looping-preview");
  if (!n || !t) return null;
  const i = typeof r == "function" ? r : () => {
  };
  let o = !1, s = 0;
  const a = typeof n.requestVideoFrameCallback == "function", l = () => {
    o || !a || s || n.paused || n.ended || (s = n.requestVideoFrameCallback(() => {
      s = 0, !o && (i(), l());
    }));
  }, c = () => {
    o || i();
  }, d = () => i(), u = () => {
    i(), l();
  }, f = () => i();
  let p = !1;
  const w = () => {
    p = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", c, { once: !0 }), n.addEventListener("loadeddata", c, { once: !0 }), a || n.addEventListener("timeupdate", d), n.addEventListener("play", u), n.addEventListener("pause", f), n.addEventListener("error", w), n.src = t, n.load();
  const h = () => {
    o || p || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, m = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var V, T;
      o || (o = !0, s && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(s), s = 0), n.removeEventListener("loadedmetadata", c), n.removeEventListener("loadeddata", c), n.removeEventListener("timeupdate", d), n.removeEventListener("play", u), n.removeEventListener("pause", f), n.removeEventListener("error", w), n.pause(), (V = n.removeAttribute) == null || V.call(n, "src"), (T = n.load) == null || T.call(n));
    },
    failed: () => p,
    play: h,
    pause: m,
    toggle() {
      n.paused ? h() : m();
    },
    get playing() {
      return !o && !n.paused && !n.ended;
    }
  };
}
const _s = /* @__PURE__ */ new WeakMap(), kg = {
  editorSession: () => ({
    // Writes the modal's state to state_json before the prompt is queued.
    flushBeforeQueue: null,
    // The view the editor was closed with (pano_view_memory.js viewMemory), which the next opening restores.
    view: null
  }),
  nodeSurface: () => ({
    attached: !1,
    mountKey: null,
    controller: null,
    // "stickers" or "cutout" once attached.
    mode: "",
    noPreview: !1,
    openEditor: null,
    // { widget, root, canvas, requestDraw, state, emptyHintEl, nodeSurface }
    dom: null,
    // Undoes the attach of `dom`.
    restore: null,
    cutout: null,
    stickers: null,
    cutoutState: null,
    stickersState: null,
    cutoutFrame: null,
    lastCutoutShot: null,
    view: null,
    playback: null,
    scene: null,
    renderCache: null,
    paintEngine: null,
    paintDescriptorKey: "",
    paintRevision: null,
    paintRevisionKey: "",
    rasterCache: null,
    rasterReady: null,
    bootMinHeightActive: !1,
    bootMinHeightTimer: null,
    resizeSettleTimer: null,
    userResized: !1,
    standaloneBootSized: !1,
    debugLastTs: 0
  }),
  previewNode: () => ({
    runtime: null,
    surface: null,
    installDone: !1,
    installProbeActive: !1,
    installProbeTries: 0
  }),
  mediaCache: () => ({
    // Shared by the node surface and the editor (pano_comfy_media.js), each under its own keys.
    linkedImages: /* @__PURE__ */ new Map(),
    // { key, player } of createLoopingPreviewVideo.
    ownOutputVideo: null,
    ownOutputRev: 0,
    // { src, image, ready, failed } of Panorama Studio's last run output (an ERP or a first frame).
    studioRunImage: null,
    executedOutputs: /* @__PURE__ */ new Map(),
    outputFromRun: !1
  }),
  stateSync: () => ({
    liveState: null,
    liveStateVersion: 0,
    parsedState: null,
    flushers: /* @__PURE__ */ new Set(),
    pendingStickerUploads: /* @__PURE__ */ new Map(),
    stickerOperationTail: null,
    coverageSyncInstalled: !1
  })
};
function Fs(e, t) {
  if (!e || typeof e != "object") return null;
  let r = _s.get(e);
  return r || (r = {}, _s.set(e, r)), r[t] ?? (r[t] = kg[t]());
}
function Yl(e, t) {
  var r;
  return e && typeof e == "object" && ((r = _s.get(e)) == null ? void 0 : r[t]) || null;
}
const dl = (e) => Fs(e, "editorSession"), bt = (e) => Fs(e, "nodeSurface"), $r = (e) => Fs(e, "previewNode"), Pn = (e) => Fs(e, "mediaCache"), Gn = (e) => Fs(e, "stateSync"), S_ = (e) => Yl(e, "editorSession"), Mg = (e) => Yl(e, "nodeSurface"), Ng = (e) => Yl(e, "previewNode");
function Ic(e) {
  var t;
  e && (e.onload = null, e.onerror = null, (t = e.removeAttribute) == null || t.call(e, "src"));
}
const __ = {
  editorSession() {
  },
  nodeSurface(e) {
    var t, r, n;
    try {
      (t = e.restore) == null || t.call(e);
    } catch {
    }
    clearTimeout(e.bootMinHeightTimer), clearTimeout(e.resizeSettleTimer), (n = (r = e.rasterCache) == null ? void 0 : r.dispose) == null || n.call(r);
  },
  previewNode(e) {
    var t, r;
    (r = (t = e.runtime) == null ? void 0 : t.teardown) == null || r.call(t);
  },
  mediaCache(e) {
    var t, r, n, i;
    e.linkedImages.forEach((o) => {
      Ic(o == null ? void 0 : o.img), Ic(o == null ? void 0 : o.pendingImg);
    }), (n = (r = (t = e.ownOutputVideo) == null ? void 0 : t.player) == null ? void 0 : r.destroy) == null || n.call(r), Ic((i = e.studioRunImage) == null ? void 0 : i.image);
  },
  stateSync() {
  }
};
function w_(e, t) {
  const r = Yl(e, t);
  if (r)
    try {
      __[t](r);
    } finally {
      delete _s.get(e)[t];
    }
}
function x_(e) {
  for (const t of Object.keys(kg))
    try {
      w_(e, t);
    } catch (r) {
      console.error(`[PanoramaSuite] disposing ${t} of a node failed`, r);
    }
  e && typeof e == "object" && _s.delete(e);
}
function Si(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function k_(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function op(e, t, r = null) {
  var i, o;
  let n = null;
  try {
    n = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    n = null;
  }
  if ((i = n == null ? void 0 : n.isSubgraphNode) != null && i.call(n))
    try {
      const s = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, a = s ? (o = n.resolveSubgraphOutputLink) == null ? void 0 : o.call(n, Number(s.origin_slot ?? 0)) : null;
      a != null && a.outputNode && (n = a.outputNode);
    } catch {
    }
  return !n && r != null && (n = k_(e == null ? void 0 : e.graph, r)), n;
}
function M_(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function N_(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function P_(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function Pg({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (I) => {
    if (!I) return "";
    if (typeof I == "string") return String(I || "").trim();
    if (Array.isArray(I)) {
      if (I.length === 0) return "";
      if (I.length === 1) return i(I[0]);
      const X = String(I[0] || "").trim();
      if (X)
        return Si(t, {
          filename: X,
          subfolder: String(I[1] || "").trim(),
          type: String(I[2] || "output").trim() || "output"
        });
      for (const $ of I) {
        const J = i($);
        if (J) return J;
      }
      return "";
    }
    return typeof (I == null ? void 0 : I.src) == "string" && I.src ? I.src : typeof (I == null ? void 0 : I.url) == "string" && I.url ? I.url : Si(t, I);
  }, o = (I) => {
    if (!I || typeof I != "object") return "";
    const X = String(I.type || "").trim().toLowerCase();
    if (X === "dataurl") return String(I.value || "");
    if (X !== "comfy_image") return "";
    const $ = String(I.filename || "").trim();
    return $ ? Si(t, {
      filename: $,
      subfolder: String(I.subfolder || ""),
      type: String(I.storage || "input")
    }) : "";
  }, s = (I) => {
    const X = e == null ? void 0 : e.nodeOutputs;
    if (!X || I == null) return null;
    const $ = String(I);
    return X instanceof Map ? X.get(I) || X.get($) || X.get(Number($)) || null : X[I] || X[$] || null;
  }, a = (I, X) => {
    var J;
    const $ = s(I == null ? void 0 : I.id);
    return Array.isArray((J = $ == null ? void 0 : $.ui) == null ? void 0 : J[X]) ? $.ui[X] : Array.isArray($ == null ? void 0 : $[X]) ? $[X] : [];
  }, l = (I, X) => {
    const $ = s(I == null ? void 0 : I.id);
    return $ != null && $.ui && Object.prototype.hasOwnProperty.call($.ui, X) ? $.ui[X] : $ && Object.prototype.hasOwnProperty.call($, X) ? $[X] : null;
  }, c = (I, X) => {
    const $ = l(I, "pano_sticker_input_state_hash"), J = Array.isArray($) ? $[0] : $;
    return String(J ?? "").trim() || P_(X);
  }, d = (I) => {
    const X = [], $ = /* @__PURE__ */ new Set();
    for (const J of I || []) {
      const ye = i(J);
      !ye || $.has(ye) || ($.add(ye), X.push(ye));
    }
    return X;
  }, u = (I, X) => {
    var ye;
    const $ = [];
    Array.isArray(I == null ? void 0 : I.images) && I.images.length && $.push(I.images), Array.isArray((ye = I == null ? void 0 : I.ui) == null ? void 0 : ye.images) && I.ui.images.length && $.push(I.ui.images);
    const J = [];
    for (const _e of $)
      X >= 0 && X < _e.length && J.push(_e[X]), J.push(..._e);
    return J;
  }, f = (I, X) => {
    var z;
    const $ = String(X || "").trim();
    if (!$) return { src: "", sourceType: "", inputName: "" };
    const ye = (Array.isArray(I == null ? void 0 : I.inputs) ? I.inputs : []).findIndex((C) => String((C == null ? void 0 : C.name) || "") === $);
    if (ye < 0) return { src: "", sourceType: "", inputName: $ };
    const _e = I.graph ? I.getInputLink(ye) : null;
    if ((_e == null ? void 0 : _e.origin_id) == null) return { src: "", sourceType: "", inputName: $ };
    const me = _e.origin_id, ve = op(I, ye, me);
    if (!ve) return { src: "", sourceType: "", inputName: $ };
    const ue = Number(_e.origin_slot ?? 0);
    let we = [];
    try {
      we = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(ve) || [] : [];
    } catch {
      we = [];
    }
    if (Array.isArray(we) && we.length) {
      const C = [];
      ue >= 0 && ue < we.length && C.push(we[ue]), C.push(...we);
      const R = d(C.filter((E) => !Ia(E)));
      if (R.length)
        return { src: R[0], srcCandidates: R, sourceType: "appNodeImageUrls", inputName: $ };
    }
    const de = s((ve == null ? void 0 : ve.id) ?? me), ne = d(u(de, ue).filter((C) => !Ia(C))).map((C) => `${C}&pano_src=${yu(de)}`);
    if (ne.length)
      return { src: ne[0], srcCandidates: ne, sourceType: "nodeOutputs", inputName: $ };
    const ie = Array.isArray(ve == null ? void 0 : ve.imgs) ? ve.imgs : [];
    if (ie.length) {
      const C = [];
      ue >= 0 && ue < ie.length && C.push(ie[ue]), C.push(...ie);
      const R = d(C);
      if (R.length)
        return { src: R[0], srcCandidates: R, sourceType: "nodeImgs", inputName: $ };
    }
    const le = (z = ve == null ? void 0 : ve.widgets) == null ? void 0 : z.find((C) => String((C == null ? void 0 : C.name) || "").toLowerCase() === "image");
    if (le) {
      let C = i(le.value);
      if (C && !C.includes("/") && !C.includes(":") && (ve.comfyClass === "LoadImage" || ve.type === "LoadImage") && (C = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(C)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(C)}&type=input&subfolder=`), C) return { src: C, sourceType: "widget", inputName: $ };
    }
    return { src: "", sourceType: "", inputName: $ };
  }, p = (I, X = []) => {
    var J;
    const $ = Array.isArray(I == null ? void 0 : I.inputs) ? I.inputs : [];
    for (const ye of X) {
      const _e = $.findIndex((we) => String((we == null ? void 0 : we.name) || "") === ye), me = _e >= 0 && I.graph ? I.getInputLink(_e) : null;
      if ((me == null ? void 0 : me.origin_id) == null) continue;
      const ve = s(((J = op(I, _e, me.origin_id)) == null ? void 0 : J.id) ?? me.origin_id), ue = (Array.isArray(ve == null ? void 0 : ve.images) ? ve.images : []).find(Ia);
      return ue ? `${Si(t, ue)}&pano_src=${yu(ve)}` : "";
    }
    return "";
  }, w = (I, X = []) => {
    const $ = Array.isArray(X) ? X : [X];
    for (const J of $) {
      const ye = f(I, J);
      if (String((ye == null ? void 0 : ye.src) || "").trim()) return ye;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, h = (I) => {
    const X = String(I || "").trim();
    if (!X) return [];
    if (M_(X)) return [X];
    const { filename: $, subfolder: J } = N_(X);
    return $ ? d([
      Si(t, { filename: $, subfolder: J, type: "temp" }),
      Si(t, { filename: $, subfolder: J, type: "output" }),
      Si(t, { filename: $, subfolder: J, type: "input" }),
      X
    ]) : [X];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (I) => {
      var X;
      try {
        (X = Pn(I)) == null || X.linkedImages.forEach(($, J, ye) => {
          var _e;
          $ != null && $.img && ((_e = n == null ? void 0 : n.isImageLoadFailed) != null && _e.call(n, $.img)) && ye.delete(J);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (I, X) => {
      var $;
      ($ = I == null ? void 0 : I.delete) == null || $.call(I, `__ui__${String(X || "")}`);
    },
    linkedValue: (I, X) => {
      var me, ve, ue, we;
      const $ = String(X || ""), J = Array.isArray(I == null ? void 0 : I.inputs) ? I.inputs.findIndex((de) => String((de == null ? void 0 : de.name) || "") === $) : -1, ye = J >= 0 && I.graph ? I.getInputLink(J) : null;
      if (ye) {
        const de = s(ye.origin_id), ne = [
          de == null ? void 0 : de.output,
          de == null ? void 0 : de.result,
          (me = de == null ? void 0 : de.data) == null ? void 0 : me.output,
          (ve = de == null ? void 0 : de.data) == null ? void 0 : ve.result,
          (ue = de == null ? void 0 : de.ui) == null ? void 0 : ue.output,
          (we = de == null ? void 0 : de.ui) == null ? void 0 : we.result
        ];
        for (const ie of ne) {
          if (!Array.isArray(ie)) continue;
          const le = ie[Number(ye.origin_slot || 0)];
          if (typeof le == "string" && le.trim()) return le;
        }
      }
      const _e = Array.isArray(I == null ? void 0 : I.widgets) ? I.widgets.find((de) => String((de == null ? void 0 : de.name) || "") === $) : null;
      return String((_e == null ? void 0 : _e.value) || "");
    },
    linkedVideoFile: p,
    loadPreferredExactLinkedImage: (I, X = [], $ = null, J = "") => {
      var _;
      const ye = Array.isArray(X) ? X : [X], _e = w(I, ye), ve = (Array.isArray(_e == null ? void 0 : _e.srcCandidates) && _e.srcCandidates.length ? _e.srcCandidates : [_e == null ? void 0 : _e.src]).map((y) => String(y || "").trim()).filter(Boolean);
      if (!ve.length) return null;
      const ue = d(ve.flatMap((y) => h(y)));
      if (!ue.length) return null;
      const we = Pn(I).linkedImages, de = String(J || ye.join("|") || "image_exact"), ne = ve.join(`
`), ie = we.get(de);
      if (ie && ie.srcRaw === ne && ie.img) return ie.img;
      const le = r || globalThis.Image;
      if (typeof le != "function") return null;
      const z = new le();
      (_ = n == null ? void 0 : n.markImageLoading) == null || _.call(n, z, ne);
      const C = { srcRaw: ne, resolvedSrc: "", img: z };
      we.set(de, C);
      let R = -1;
      const E = (y) => {
        var L, Z, he;
        y === "ready" ? (L = n == null ? void 0 : n.markImageReady) == null || L.call(n, z, ne) : (Z = n == null ? void 0 : n.markImageFailed) == null || Z.call(n, z, ne), $ == null || $(z), (he = I.setDirtyCanvas) == null || he.call(I, !0, !0);
      }, k = () => {
        if (R += 1, R >= ue.length) {
          E("failed");
          return;
        }
        C.resolvedSrc = ue[R], z.src = C.resolvedSrc;
      };
      return z.onload = () => E("ready"), z.onerror = () => {
        if (R + 1 < ue.length) {
          k();
          return;
        }
        E("failed");
      }, k(), z;
    },
    output: s,
    resolvePreferredExactLinkedSource: w,
    source: i,
    uiImage: (I, X, $, J = null) => {
      var de, ne, ie;
      const ye = a(I, X)[0] || null, _e = i(ye);
      if (!_e) return null;
      const me = `__ui__${X}`, ve = (de = $ == null ? void 0 : $.get) == null ? void 0 : de.call($, me);
      if (ve && ve.__panoSrc === _e) return ve;
      const ue = r || globalThis.Image;
      if (typeof ue != "function") return null;
      const we = new ue();
      return we.__panoSrc = _e, (ne = n == null ? void 0 : n.markImageLoading) == null || ne.call(n, we, _e), we.onload = () => {
        var le;
        (le = n == null ? void 0 : n.markImageReady) == null || le.call(n, we, _e), J == null || J(we);
      }, we.onerror = () => {
        var le;
        (le = n == null ? void 0 : n.markImageFailed) == null || le.call(n, we, _e), J == null || J(we);
      }, we.src = _e, (ie = $ == null ? void 0 : $.set) == null || ie.call($, me, we), we;
    },
    uiList: a,
    uiValue: l
  };
}
const A_ = 1e-3;
function Id(e, t, r, n) {
  if (!ko(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const s = Math.floor(i + 0.5);
    return s >= 0 && s < n.frames ? (s + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(A_ / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function Ed(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function C_(e, t) {
  return Math.floor(e * t.fps);
}
function Od(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const sp = 4;
function Fd({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(s) {
    return n.has(s) || n.set(s, e(r[s], t)), n.get(s);
  }
  return {
    picture(s, a, l, c) {
      if ((s.length !== r.length || s.some((f, p) => f !== r[p])) && (r = s, n.clear(), i = null), a === null) return null;
      const d = C_(a, l);
      for (let f = d; f < Math.min(r.length, d + sp + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < d || f > d + sp) && f !== i && n.delete(f);
      const u = n.get(d);
      return u != null && u.complete && u.naturalWidth > 0 && (i !== null && i !== d && n.delete(i), i = d), i === null ? c : n.get(i);
    }
  };
}
function Ag({
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
  let s = null, a = !1, l = !1;
  const c = () => s || e(), d = () => o(r(c()));
  return {
    model: () => r(c()),
    refresh() {
      return l ? this.model() : (d(), this.model());
    },
    beginGesture() {
      return l || s ? !1 : (s = e(), a = !1, d(), !0);
    },
    updateGesture(u) {
      if (l) return !1;
      s || this.beginGesture();
      const f = t(s, u);
      return f.changed ? (s = f.state, a = !0, n(s), d(), !0) : !1;
    },
    hasGestureChanges() {
      return s != null && a;
    },
    commitGesture() {
      if (l || !s) return !1;
      const u = a;
      return u && i(s), s = null, a = !1, n(null), d(), u;
    },
    cancelGesture() {
      return l || !s ? !1 : (s = null, a = !1, n(null), d(), !0);
    },
    apply(u) {
      if (l) return !1;
      s && this.commitGesture();
      const f = t(e(), u);
      return f.changed ? (i(f.state), d(), !0) : !1;
    },
    destroy() {
      if (l) return;
      l = !0;
      const u = s != null;
      s = null, a = !1, u && n(null);
    }
  };
}
const bo = { sky: ["direction", "roll", "size"], world: ["position", "rotation", "scale"] }, I_ = ["id", "source", "clip", "visible", "locked", "crop", "opacity", "handoff_overrides"];
function Cg(e) {
  const t = Array.isArray(e) ? e[0] : e;
  return !t || typeof t != "object" || !bo[t.placement] || !t.lanes || typeof t.lanes != "object" ? null : { placement: t.placement, lanes: t.lanes, fps: fi(t.fps) };
}
function ni(e) {
  return structuredClone(e);
}
function E_(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function O_(e, t, r) {
  const n = e.fps ?? t;
  if (n === t) return e.lanes;
  const i = r.start - r.in, o = Math.floor(i * n / t + 0.5);
  return Object.fromEntries(Object.entries(e.lanes).map(([s, a]) => [s, {
    value: a.value,
    keyframes: (a.keyframes ?? []).map((l) => ({ ...l, frame: Math.floor((o + l.frame) * t / n + 0.5) - i }))
  }]));
}
function Td(e, t, r) {
  const n = O_(r, e.timeline.fps, t.clip);
  let i;
  if (t.placement === r.placement) {
    i = { ...t };
    for (const o of bo[r.placement]) t.handoff_overrides.includes(o) || (i[o] = n[o]);
  } else
    i = { ...Object.fromEntries(I_.map((o) => [o, t[o]])), placement: r.placement, ...n }, r.placement === "sky" && (i.z_index = e.stickers.reduce((o, s) => s.id !== t.id && s.placement === "sky" ? Math.max(o, s.z_index) : o, -1) + 1);
  return ni(tr({ version: 2, stickers: [i] }).stickers[0]);
}
function F_(e, t) {
  const r = e.stickers.findIndex((n) => n.source.kind === "port");
  return !t || r < 0 ? e : { ...e, stickers: e.stickers.map((n, i) => i === r ? Td(e, n, t) : n) };
}
function T_(e, t) {
  const r = bo[e.placement];
  if (t.id !== e.id || t.placement !== e.placement) return e.handoff_overrides;
  const n = r.filter((i) => !E_(e[i], t[i]));
  if (n.length) {
    const i = /* @__PURE__ */ new Set([...e.handoff_overrides, ...n]);
    e.handoff_overrides = [...r, "opacity"].filter((o) => i.has(o));
  }
  return e.handoff_overrides;
}
function D_(e, t) {
  if (!t || t.id !== e.id) return ni(e);
  if (e.placement === t.placement) {
    const n = ni(e);
    for (const i of bo[e.placement]) e.handoff_overrides.includes(i) || (n[i] = ni(t[i]));
    return n;
  }
  if (e.handoff_overrides.some((n) => bo[e.placement].includes(n))) return ni(e);
  const r = ni(t);
  for (const n of ["clip", "visible", "locked", "crop", "opacity"]) r[n] = ni(e[n]);
  return r;
}
function L_(e, t, r, n) {
  return !t.handoff_overrides.includes(n) || t.placement !== r.placement ? !1 : (t.handoff_overrides = t.handoff_overrides.filter((i) => i !== n), t[n] = ni(Td(e, t, r)[n]), !0);
}
const Ea = "sticker_image_1", Ig = "external_image", vo = 0;
function Oa(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function Ec(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function ai(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function bu(e, t = vo) {
  return (e == null ? void 0 : e.version) !== 2 ? ai(e) : ai(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: Wr(r, t).active,
    external: r.source.kind === "port",
    ...bd(r, t)
  }));
}
function Dd(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && ai(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function Eg(e) {
  return String((e == null ? void 0 : e.id) || "") === Ea || String((e == null ? void 0 : e.source_kind) || "") === Ig;
}
function Ld(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Eg(t);
}
const Og = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Fg(e) {
  return !Eg(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Og.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function Tg(e) {
  const t = Fg(e);
  return t ? Og.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function Dg(e, t = {}) {
  var ee, I, X;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex(($) => String(($ == null ? void 0 : $.id) || "") === Ea);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const $ = String(((ee = e.active) == null ? void 0 : ee.selected_sticker_id) || "") === Ea;
    return {
      state: {
        ...e,
        stickers: r.filter((J, ye) => ye !== n),
        active: $ ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), s = n >= 0 ? r[n] : null, a = !s || Number(s.source_link_id ?? -1) !== i || String(s.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), d = l > 0 && c > 0, u = Math.max(1, l), f = Math.max(1, c), p = t.pose && typeof t.pose == "object" ? t.pose : {}, w = a ? p.hFOV_deg || (s == null ? void 0 : s.hFOV_deg) || 30 : (s == null ? void 0 : s.hFOV_deg) || p.hFOV_deg || 30, h = Math.min(179, Math.max(0.1, Number(w)));
  if (!a) {
    if (!d) return { state: e, changed: !1 };
    const $ = Oa(h, u, f), J = Number(((I = s == null ? void 0 : s.initial_pose) == null ? void 0 : I.hFOV_deg) ?? h), ye = Oa(J, u, f), _e = Number(((X = s == null ? void 0 : s.initial_pose) == null ? void 0 : X.vFOV_deg) ?? ye);
    return Math.abs(Number((s == null ? void 0 : s.vFOV_deg) || 0) - $) <= 1e-6 && Math.abs(_e - ye) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((me, ve) => ve === n ? {
          ...me,
          vFOV_deg: $,
          initial_pose: me.initial_pose && typeof me.initial_pose == "object" ? { ...me.initial_pose, vFOV_deg: ye } : me.initial_pose
        } : me)
      },
      changed: !0
    };
  }
  const m = r.reduce(($, J) => Math.max($, Number((J == null ? void 0 : J.z_index) || 0)), -1), b = {
    yaw_deg: Number(p.yaw_deg || 0),
    pitch_deg: Number(p.pitch_deg || 0),
    hFOV_deg: h,
    vFOV_deg: d ? Oa(h, u, f) : Number(p.vFOV_deg || (s == null ? void 0 : s.vFOV_deg) || h),
    rot_deg: Number(p.rot_deg ?? p.roll_deg ?? 0)
  }, V = {
    ...s || {},
    id: Ea,
    source_kind: Ig,
    source_link_id: i,
    source_state_hash: o,
    ...b,
    initial_pose: { ...b },
    visible: !0,
    z_index: m + 1
  }, T = n >= 0 ? r.map(($, J) => J === n ? V : $) : [...r, V];
  return { state: { ...e, stickers: T }, changed: !0 };
}
function fl(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const R_ = ["IMAGE", "VIDEO"];
function ap(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => R_.includes(r)) ? "2d" : null;
}
function V_(e, t) {
  var i, o, s, a, l, c;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? ap(n.type) ?? ap((c = (l = (a = (s = (o = e.graph).getNodeById) == null ? void 0 : s.call(o, n.origin_id)) == null ? void 0 : a.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : c.type) : null;
}
function Lg(e, { pose: t = null, handoff: r = null } = {}) {
  return {
    connected: fl(e, "sticker"),
    awaitingPose: !t && (fl(e, "sticker_state") || V_(e, "sticker") !== "2d"),
    pose: t,
    handoff: !!r
  };
}
function Rg(e) {
  return fl(e, "sticker") && fl(e, "sticker_state");
}
function $_(e, t) {
  return Rg(e) ? Cg(t) : null;
}
function z_(e, t, r) {
  return F_(zm(e, t), Cg(r));
}
function lp(e, t, r = {}) {
  const n = t.keyframes ?? {}, i = {
    ...r,
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position, keyframes: n.position ?? [] },
    rotation: { value: t.rotation, keyframes: n.rotation ?? [] },
    scale: { value: t.scale, keyframes: n.scale ?? [] }
  };
  return tr({ version: 2, stickers: [i] }).stickers[0];
}
function Vg(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null, handoff: i = !1 } = {}) {
  var f;
  const o = e.stickers.findIndex((p) => Ld(e, p)), s = o >= 0 ? e.stickers[o] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const p = ((f = e.active) == null ? void 0 : f.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((w, h) => h !== o),
        active: p ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  if (s && (n == null ? void 0 : n.placement) === "world" && n.replace && s.placement === "sky" && !i) {
    const p = Object.fromEntries(["clip", "visible", "locked", "crop", "opacity", "handoff_overrides"].map((h) => [h, s[h]])), w = lp(s.id, n, p);
    return { state: { ...e, stickers: e.stickers.map((h, m) => m === o ? w : h) }, changed: !0 };
  }
  if (s || r) return { state: e, changed: !1 };
  const a = { ...e }, l = Wl(a);
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...a, stickers: [...e.stickers, lp(l, n)] }, changed: !0 };
  const c = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), d = Sd(l, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: c,
    vFOV_deg: c
  }, ai(e).reduce((p, w) => Math.max(p, w.z_index), -1) + 1), u = (n == null ? void 0 : n.keyframes) ?? {};
  return d.direction.keyframes = u.direction ?? [], d.roll.keyframes = u.roll ?? [], d.size.keyframes = (u.size ?? []).map((p) => ({ ...p, value: { ...p.value, vFOV_deg: p.value.hFOV_deg } })), d.handoff_overrides = [], { state: { ...a, stickers: [...e.stickers, d] }, changed: !0 };
}
function Rd(e) {
  const t = ai(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: Ec(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: Ec(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: Ec(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, s) => o.z_index - s.z_index);
}
function $g(e) {
  const t = Dd(e), r = Ld(e, t), n = ai(e).some((a) => a && a.visible !== !1), i = Rd(e), o = t ? i.findIndex((a) => a.type === "sticker" && a.item === t) : -1, s = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: Tg(t),
    selectedId: t ? String(t.id || "") : null,
    locked: s,
    canDelete: !!t && !s,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function j_(e) {
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
function cp(e, t) {
  const r = Dd(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = j_(e), i = String(r.id || ""), o = Rd(n), s = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (s < 0) return { state: e, changed: !1 };
  if (t === "front" && s === o.length - 1 || t === "back" && s === 0)
    return { state: e, changed: !1 };
  const [a] = o.splice(s, 1);
  return t === "front" ? o.push(a) : o.unshift(a), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: n, changed: !0 };
}
function H_(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function G_(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Dg(e, t.value);
  if (t.type === "sync-port") return Vg(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), s = String(i.assetId || "").trim();
    if (!o || !s || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = Rd(e).reduce((f, p) => Math.max(f, Number(p.z_index || 0)), -1), c = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: c,
      vFOV_deg: Oa(c, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2) {
      const f = { ...e }, p = Wl(f);
      return {
        state: {
          ...f,
          stickers: [...e.stickers, Sd(p, Pa(i.asset), d, l + 1)],
          active: { ...e.active || {}, selected_sticker_id: p }
        },
        changed: !0
      };
    }
    const u = { id: o, asset_id: s, ...d, z_index: l + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [s]: i.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], u],
        active: { ...e.active || {}, selected_sticker_id: o }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const i = String(t.id || "");
    return !i || !ai(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = Dd(e);
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
    const i = Fg(r);
    return !i || !Tg(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return cp(e, "front");
  if (t.type === "send-back") return cp(e, "back");
  if (t.type === "delete-selected") {
    if (Ld(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = ai({ ...e, stickers: i })[0], s = (o == null ? void 0 : o.id) == null ? null : String(o.id), a = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: s }
    };
    return e.version !== 2 && (a.assets = H_(a)), { state: a, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], s = e.version === 2 ? bd(r, vo) : r, a = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(s[l] || 0)) > 1e-12 && (a[l] = c);
    }), !Object.keys(a).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = fS(r, a);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(r);
      return Hm(c, vo, l), { state: { ...e, stickers: e.stickers.map((d) => d === r ? c : d) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((l) => l === r ? { ...l, ...a } : l)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function K_(e = {}) {
  return Ag({
    ...e,
    reduce: G_,
    projectModel: $g
  });
}
const vu = 2;
function ki(e, t) {
  return Math.floor(e * t + 0.5);
}
function W_(e, t) {
  return Math.floor(e * t + 1e-3);
}
function zg({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: s, onChange: a }) {
  let l = 0, c = !1, d = !1, u = { name: "idle" }, f = [];
  const p = () => c && !d, w = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function h() {
    for (const z of f) z();
    f = [];
  }
  function m(z, C = {}) {
    return h(), u = { name: z, ...C }, a(), u;
  }
  function b(z, C, R) {
    const E = () => {
      u === z && R();
    };
    e.addEventListener(C, E), f.push(() => e.removeEventListener(C, E));
  }
  function V(z, C) {
    let R = t.requestFrame(function E(k) {
      u === z && (C(k), u === z && (R = t.requestFrame(E)));
    });
    f.push(() => t.cancelFrame(R));
  }
  function T(z) {
    l = z, o(l);
  }
  function ee() {
    return m(d ? "error" : "idle");
  }
  function I() {
    d = !0, ee();
  }
  function X() {
    const { seekable: z } = e, C = z != null && z.length ? z.end(z.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(C) ? C : 1 / 0));
  }
  function $(z) {
    if (!p()) return z === "play" ? ve() : ee();
    if (e.readyState < vu) {
      const C = m("loading", { then: z });
      return b(C, "loadeddata", () => $(C.then)), b(C, "error", I), C;
    }
    return z === "play" && l / r() >= Number(e.duration) ? ve() : J(z, !1);
  }
  function J(z, C) {
    const R = X();
    if (!e.ended && ki(Number(e.currentTime), r()) === ki(R, r())) return ye(z);
    const E = m("seeking", { then: z, frame: l, retried: C });
    return b(E, "seeked", () => {
      const k = ki(Number(e.currentTime), r()) === ki(X(), r()), _ = l === E.frame;
      k || _ && E.retried ? ye(E.then) : J(E.then, _);
    }), b(E, "error", I), e.currentTime = R, E;
  }
  function ye(z) {
    return z === "play" ? _e() : (s(), ee());
  }
  function _e() {
    const z = m("playingVideo", { shown: !1 });
    if (b(z, "pause", () => e.ended ? me() : de()), b(z, "ended", me), b(z, "error", I), i() && ki(Number(e.duration), r()) >= n()) {
      const R = e.loop;
      e.loop = !0, f.push(() => {
        e.loop = R;
      });
    }
    const C = (R, E) => {
      E && !z.shown && (z.shown = !0, a()), ue(ki(R, r()));
    };
    if (w()) {
      let R = e.requestVideoFrameCallback(function E(k, _) {
        u === z && (C(Number(_.mediaTime), !0), u === z && (R = e.requestVideoFrameCallback(E)));
      });
      f.push(() => {
        var E;
        return (E = e.cancelVideoFrameCallback) == null ? void 0 : E.call(e, R);
      });
    } else
      V(z, () => C(Number(e.currentTime), e.readyState >= vu));
    return Promise.resolve(e.play()).catch(() => {
      u === z && de();
    }), z;
  }
  function me() {
    s(), ve();
  }
  function ve() {
    const z = m("playingClock", { startTs: t.now(), startFrame: l });
    return V(z, (C) => ue(z.startFrame + Math.floor((C - z.startTs) / 1e3 * r()))), z;
  }
  function ue(z) {
    if (z < n()) {
      T(z);
      return;
    }
    if (!i()) {
      we(n() - 1);
      return;
    }
    u.name === "playingVideo" && (h(), e.pause()), T(0), $("play");
  }
  function we(z) {
    u.name === "playingVideo" ? (h(), e.pause(), T(Math.max(0, z)), s()) : T(Math.max(0, z)), $("still");
  }
  function de() {
    if (u.name === "loading" || u.name === "seeking")
      u.then = "still", a();
    else if (u.name === "playingVideo") {
      h(), e.pause();
      const z = W_(Number(e.currentTime), r());
      T(Math.min(z, n() - 1)), s(), l === z ? ee() : $("still");
    } else u.name === "playingClock" && we(Math.min(l, n() - 1));
  }
  function ne() {
    if (!le()) {
      if (l >= n() - 1 && T(0), u.name === "loading" || u.name === "seeking") {
        u.then = "play", a();
        return;
      }
      $("play");
    }
  }
  function ie(z) {
    const C = Math.max(0, Math.round(z));
    if (u.name === "loading" || u.name === "seeking") {
      u.then = "still", T(C), a();
      return;
    }
    u.name === "playingVideo" && (h(), e.pause()), T(C), $("still");
  }
  function le() {
    return u.name === "playingVideo" || u.name === "playingClock" || u.then === "play";
  }
  return {
    get frame() {
      return l;
    },
    get state() {
      return u.name;
    },
    get playing() {
      return le();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return u.name === "playingVideo" || u.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return u.name === "playingVideo" && u.shown;
    },
    play: ne,
    stop: de,
    seek: ie,
    toggle() {
      le() ? de() : ne();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(z) {
      h(), c = !!z, d = !1, $("still");
    },
    dispose() {
      h(), c = !1, u = { name: "idle" };
    }
  };
}
function Vd({ video: e, onCapture: t, onChange: r }) {
  let n = "", i = !1, o = { time: null, playing: !1, fps: 1 }, s = null, a = null, l = !1;
  function c(h) {
    a = h, t();
  }
  function d(h) {
    s = h, e.currentTime = h;
  }
  function u() {
    const h = l;
    f(), l !== h && r();
  }
  function f() {
    if (!n || i || e.readyState < vu) return;
    const { time: h, playing: m, fps: b } = o;
    if (h === null) {
      e.pause(), l = !1;
      return;
    }
    if (m) {
      if (s !== null) return;
      const V = Number(e.duration), T = Number.isFinite(V) ? Math.min(h, V) : h, ee = Math.abs(Number(e.currentTime) - T) > 1.5 / b;
      if (e.ended && !ee) return;
      ee && d(T), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, c(NaN)), !(s !== null || a === h) && (Number(e.currentTime) === h ? c(h) : d(h));
  }
  const p = {
    loadeddata: u,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: u,
    seeked: () => {
      const h = s;
      s = null, !o.playing && h === o.time ? c(h) : u();
    },
    playing: () => {
      !o.playing || l || (l = !0, r());
    },
    error: () => {
      n && (i = !0, r());
    }
  };
  e.muted = !0;
  for (const [h, m] of Object.entries(p)) e.addEventListener(h, m);
  function w(h) {
    n = h, i = !1, s = null, a = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: h = "", time: m = null, playing: b = !1, fps: V }) {
      h !== n && (w(h), r()), o = { time: m, playing: b, fps: V }, u();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(h, m) {
      return !n || i ? m : o.time === null ? null : o.playing && l ? e : a === null ? m : h;
    },
    dispose() {
      for (const [h, m] of Object.entries(p)) e.removeEventListener(h, m);
      w("");
    }
  };
}
function Fa(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function U_({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: s, onStickerCapture: a, onChange: l, camera: c = !1 }) {
  let d = "", u = "", f = 0;
  const p = /* @__PURE__ */ new Set();
  let w = null, h = null;
  const m = () => i().timeline.fps, b = (me) => me.stickers.find((ve) => ve.source.kind === "port"), V = () => {
    const me = i(), ve = b(me);
    return Lm(me, {
      minimum: Math.round(m() * 5),
      frames: Math.max(
        d ? Math.round(f * m()) : 0,
        w && ve ? Ed(ve.clip, m(), w.meta) : 0
      ),
      camera: c
    });
  }, T = zg({
    video: e,
    clock: n,
    fps: m,
    span: V,
    loop: () => !0,
    onFrame: o,
    onCapture: s,
    onChange: l
  }), ee = () => {
    u === d && Number.isFinite(e.duration) && (f = e.duration);
  }, I = () => {
    u && (p.add(u), l());
  }, X = Vd({ video: t, onCapture: a, onChange: l }), $ = Fd({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", ee), e.addEventListener("error", I);
  function J(me) {
    me !== u && (u = me, e.pause(), me ? e.src = me : e.removeAttribute("src"), e.load(), T.setSource(!!me));
  }
  function ye() {
    T.playing && T.stop();
  }
  function _e(me) {
    const ve = b(me);
    h = w && ve ? Id(ve.clip, T.frame, me.timeline.fps, w.meta) : null, X.follow({
      src: (w == null ? void 0 : w.src) || "",
      time: h,
      playing: T.advancing,
      fps: me.timeline.fps
    });
  }
  return {
    get frame() {
      return T.frame;
    },
    get playing() {
      return T.playing;
    },
    get showsVideo() {
      return T.showsVideo;
    },
    get source() {
      return u;
    },
    pause: ye,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return w;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(me, ve) {
      return w != null && w.frames ? $.picture(w.frames, h, w.meta, ve) : X.picture(me, ve);
    },
    toggle() {
      T.playing ? T.stop() : T.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: me, sources: ve, state: ue, sticker: we = null }) {
      if (w = me ? we : null, !me)
        return ye(), J(""), _e(ue), !1;
      for (const z of p)
        ve.includes(z) || p.delete(z);
      const de = ve.find((z) => z && !p.has(z)) || "", ne = de !== d;
      ne && (d = de, f = 0), J(d);
      const ie = Dm(ue, { camera: c }) || !!d && T.state !== "error" || !!w;
      return ie || ye(), (ne || !ie || !T.playing && T.frame >= V()) && T.frame !== vo && T.seek(vo), _e(ue), ie;
    },
    dispose() {
      T.dispose(), X.dispose(), e.removeEventListener("loadedmetadata", ee), e.removeEventListener("error", I), e.pause(), e.removeAttribute("src"), e.load(), u = "";
    }
  };
}
const pl = Math.PI / 180, wr = 180 / Math.PI, B_ = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), Y_ = 260;
function up(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function jg(e, t) {
  return t ? jg(t, e % t) : e;
}
function q_(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), s = Math.max(1, Math.round(e / o * i)), a = Math.max(1, Math.round(t / o * i)), l = jg(s, a) || 1;
  return `${Math.round(s / l)}:${Math.round(a / l)}`;
}
function ws(e, t) {
  const r = up(e), n = up(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: q_(r, n) };
}
function Oi(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function Hg(e) {
  const t = Oi(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Vr(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function $d(e, t, r = B_) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), c = (m, b, V) => {
    const T = m + b, ee = Math.max(0, V - 1), I = T > ee && T > 0 ? ee / T : 1;
    return [m * I, b * I];
  }, [d, u] = c(l, s, n), [f, p] = c(o, a, i), w = {
    x: d,
    y: f,
    w: Math.max(1, n - d - u),
    h: Math.max(1, i - f - p)
  }, h = cd(w, t);
  return {
    x: w.x + (w.w - h.width) * 0.5,
    y: w.y + (w.h - h.height) * 0.5,
    w: h.width,
    h: h.height,
    safeRect: w
  };
}
function X_(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = $d({ width: r, height: n }, 1), o = Oe(Number((e == null ? void 0 : e.fov) || 100), 1, 179), s = r / (2 * Math.tan(o * pl * 0.5)), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = dm(l, am(
    { x: r * 0.5, y: n * 0.5 },
    s,
    a
  )), d = J_(c, wo(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), u = ud({ width: i.w, height: i.h }, s);
  return {
    type: "add-frame",
    yawDeg: d.yaw,
    pitchDeg: d.pitch,
    rollDeg: d.roll,
    frameFovDeg: u.hFOV_deg
  };
}
function Gg(e) {
  return {
    yaw: Gt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * wr),
    pitch: Oe(Math.asin(Oe(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * wr, -89.9, 89.9)
  };
}
function J_(e, t) {
  const r = Gg(e), n = wo(r.yaw, r.pitch, 0), i = yc(t, e), o = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * i,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * i,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * i
  }, s = Math.hypot(o.x, o.y, o.z);
  if (!(s > 1e-8)) return { ...r, roll: 0 };
  const a = {
    x: o.x / s,
    y: o.y / s,
    z: o.z / s
  };
  return {
    ...r,
    roll: Vl(Math.atan2(
      yc(a, n.up),
      yc(a, n.right)
    ) * wr)
  };
}
function Kg(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = $d({ width: r, height: n }, Vi(e)), o = Di(i, e), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, a = dm(e, am(
    s,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = Gg(a);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Oe(2 * Math.atan(r / (2 * o)) * wr, 1, 179)
  };
}
function Z_(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, s = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, a = Di(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(s, i - s) * 2
  }, { halfW: c, halfH: d } = dd(l, a), u = {
    x: o - c,
    y: s - d,
    w: c * 2,
    h: d * 2
  }, f = u.x <= 0 && u.y <= 0 && u.x + u.w >= n && u.y + u.h >= i, p = n / i, w = Math.tan(nu * pl), h = p >= 1 ? w : w * p, m = p >= 1 ? w / p : w;
  return {
    focalPx: a,
    rect: u,
    shot: {
      ...r,
      hFOV_deg: 2 * Math.atan(c / a) * wr,
      vFOV_deg: 2 * Math.atan(d / a) * wr
    },
    fallback: f ? null : {
      rect: { x: 0, y: 0, w: n, h: i },
      shot: {
        ...r,
        hFOV_deg: 2 * Math.atan(h) * wr,
        vFOV_deg: 2 * Math.atan(m) * wr
      }
    }
  };
}
function qi(e, t) {
  const r = Oi(e);
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
function Q_(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const s = Di(r, e);
    return ud(cd(r, t), s);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: ka(o, t) };
}
function dp(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = ws(t, r);
  if (!o) return e;
  const s = Vi(e) >= 1;
  n && o.ratio >= 1 !== s && (o = ws(o.height, o.width));
  const a = Q_(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - a.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - a.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...a, aspect_id: o.label };
}
function Wg(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Oi(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = lm({
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
    const n = Oi(e);
    if (!n) return { state: e, changed: !1 };
    const i = (Array.isArray(e.shots) ? e.shots : []).filter((s) => s !== n), o = ((r = i[0]) == null ? void 0 : r.id) == null ? null : String(i[0].id);
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
    return qi(e, (n) => dp(
      n,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return qi(e, (n) => {
      const o = String(Vr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), s = o ? ws(o[1], o[2]) : ws(Vi(n), 1);
      return s ? dp(n, s.height, s.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? qi(e, (i) => {
      const o = Vl(n), s = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(s - o) <= 1e-12) return i;
      const a = { ...i, roll_deg: o };
      return delete a.rot_deg, a;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? qi(e, (n) => {
    const i = cm(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? qi(e, (n) => {
    const i = um(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? qi(e, (n) => {
    const i = Yg(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function Ug({
  frame: e,
  point: t,
  startRollDeg: r = 0,
  shiftKey: n = !1,
  altKey: i = !1,
  allowAlt: o = !1,
  deadZoneRatio: s = 0.05
} = {}) {
  const a = o && i ? "alt" : n ? "shift" : "";
  if (!a || !e || !t) return null;
  const l = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, c = {
    x: l.x + l.w * 0.5,
    y: l.y + l.h * 0.5
  }, d = Math.hypot(Number(t.x || 0) - c.x, Number(t.y || 0) - c.y);
  if (a === "shift" && d < Math.min(l.w, l.h) * s) return null;
  const u = Math.atan2(Number(t.y || 0) - c.y, Number(t.x || 0) - c.x);
  return {
    source: a,
    frame: l,
    center: c,
    startRollDeg: Number(r || 0),
    lastAngle: u,
    accumulatedRad: 0
  };
}
function Bg(e, t, r = {}) {
  var s, a;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((s = e.center) == null ? void 0 : s.y) || 0),
    Number(t.x || 0) - Number(((a = e.center) == null ? void 0 : a.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + om(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: sm(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function Yg(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, s = Number(t.dy || 0) * i, a = Number(e.roll_deg ?? e.rot_deg ?? 0) * pl, l = Math.cos(a), c = Math.sin(a), d = o / r, u = -s / r, f = d * l - u * c, p = d * c + u * l, w = Number(e.pitch_deg || 0) * pl, h = Math.max(0.25, Math.abs(Math.cos(w)));
  return {
    ...e,
    yaw_deg: Gt(Number(e.yaw_deg || 0) - Math.atan(f) / h * wr),
    pitch_deg: Oe(Number(e.pitch_deg || 0) - Math.atan(p) * wr, -90, 90)
  };
}
function ew({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return Ag({
    readState: e,
    reduce: Wg,
    projectModel: Hg,
    publishLiveState: t,
    commitState: r,
    onChange: n
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
}), tw = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, nw = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: tw(t[2])
})), rw = {
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
}, fp = Object.fromEntries(
  Object.entries(rw).map(([e, t]) => [e, {
    name: t.name,
    elements: nw(t.body)
  }])
), zt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, r = dt(() => {
      const n = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(fp, n) ? fp[n] : null;
    });
    return (n, i) => r.value ? (Le(), Re("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: mt(["icon icon-tabler icons-tabler-outline", [
        r.value.name ? `icon-tabler-${r.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Le(!0), Re(Ze, null, kt(r.value.elements, (o, s) => (Le(), Re(Ze, {
        key: `${r.value.name || e.icon || "icon"}-${o.tag}-${s}`
      }, [
        o.tag === "path" ? (Le(), Re("path", Tr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Le(), Re("circle", Tr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Le(), Re("rect", Tr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Le(), Re("line", Tr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Le(), Re("polyline", Tr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Le(), Re("polygon", Tr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : ot("", !0)
      ], 64))), 128))
    ], 2)) : ot("", !0);
  }
}, tn = {
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
    const t = e, r = dt(() => {
      const n = { ...t.attrs };
      return t.tag === "button" && n.type == null && (n.type = t.type), t.label && (n["aria-label"] = t.label), t.tip && (n["data-tip"] = t.tip), t.pressed != null && (n["aria-pressed"] = t.pressed), n;
    });
    return (n, i) => (Le(), Ln(Xy(e.tag), Tr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: kh(() => [
        Be(zt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, iw = ["aria-expanded", "disabled"], ow = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, sw = ["data-aspect", "disabled", "onClick"], aw = { class: "pano-cutout-aspect-custom" }, lw = ["disabled"], cw = ["disabled"], uw = ["data-custom-width", "data-custom-height", "disabled"], qg = {
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
    ]), o = /* @__PURE__ */ Jt("1"), s = /* @__PURE__ */ Jt("1"), a = /* @__PURE__ */ Jt(null), l = dt(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), c = dt(() => {
      const h = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], m = String(r.model.aspectLabel || "");
      return h.length ? h.map((b) => {
        const V = typeof b == "string" ? b : String((b == null ? void 0 : b.value) || ""), T = typeof b == "string" ? b : String((b == null ? void 0 : b.label) || V);
        return {
          ...typeof b == "object" && b ? b : {},
          value: V,
          label: T,
          active: m ? V === m : (b == null ? void 0 : b.active) === !0
        };
      }) : i.map((b) => ({
        ...b,
        active: b.value === m
      }));
    }), d = dt(() => {
      var m;
      const h = String(r.model.aspectLabel || "").trim();
      return h || String(((m = c.value.find((b) => b.active === !0)) == null ? void 0 : m.label) || "Aspect");
    });
    Ci(d, (h) => {
      const m = String(h || "").match(/^([0-9.]+):([0-9.]+)$/);
      m && (o.value = m[1], s.value = m[2]);
    }, { immediate: !0 });
    function u(h) {
      n("action", h);
    }
    function f(h) {
      var m;
      r.model.aspectOpen === !0 && ((m = a.value) != null && m.contains(h.target) || u({ type: "close-aspect" }));
    }
    Fl(() => {
      document.addEventListener("pointerdown", f, !0);
    }), Cs(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function p(h) {
      const [m, b] = String(h.value || "").split(":");
      u({
        type: "set-aspect",
        width: m,
        height: b,
        preserveOrientation: !0
      });
    }
    function w() {
      u({
        type: "set-aspect",
        width: o.value,
        height: s.value,
        preserveOrientation: !1
      });
    }
    return (h, m) => (Le(), Re("div", {
      ref_key: "rootElement",
      ref: a,
      class: mt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Le(), Ln(tn, {
        key: 0,
        icon: e.model.aspectIcon || rt(Ke).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: m[0] || (m[0] = (b) => u({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Le(), Re("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: m[1] || (m[1] = (b) => u({ type: "toggle-aspect" }))
      }, [
        Be(zt, {
          icon: e.model.aspectIcon || rt(Ke).aspect
        }, null, 8, ["icon"]),
        Me("span", null, nt(d.value), 1),
        Be(zt, {
          icon: rt(Ke).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, iw)),
      jr(Me("div", ow, [
        (Le(!0), Re(Ze, null, kt(c.value, (b) => (Le(), Re("button", {
          key: b.value,
          class: mt(["pano-btn pano-frame-aspect-choice", { active: b.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": b.value,
          disabled: l.value,
          onClick: (V) => p(b)
        }, nt(b.label), 11, sw))), 128)),
        Me("div", aw, [
          jr(Me("input", {
            "onUpdate:modelValue": m[2] || (m[2] = (b) => o.value = b),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, lw), [
            [Lf, o.value]
          ]),
          m[4] || (m[4] = Me("span", { "aria-hidden": "true" }, ":", -1)),
          jr(Me("input", {
            "onUpdate:modelValue": m[3] || (m[3] = (b) => s.value = b),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, cw), [
            [Lf, s.value]
          ]),
          Me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": s.value,
            disabled: l.value,
            onClick: w
          }, "Apply", 8, uw)
        ])
      ], 512), [
        [Ti, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, dw = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, fw = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Jt(!1), r = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (n, i) => (Le(), Re("div", {
      class: mt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Ct(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Ct(() => {
      }, ["stop"]))
    }, [
      Be(tn, {
        icon: rt(Ke).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Ct((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", dw, [
        i[3] || (i[3] = Me("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Le(!0), Re(Ze, null, kt(rt(r), (o) => (Le(), Re("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Me("kbd", null, nt(o[0]), 1),
          Me("span", null, nt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, pw = {
  class: "pano-view-unavailable",
  role: "status"
}, ql = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Le(), Re("div", pw, nt(rt(pg)), 1));
  }
}, hw = { class: "pano-cutout-node-surface" }, mw = ["title", "disabled"], gw = { class: "value" }, yw = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, bw = {
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
    return (n, i) => (Le(), Re("div", hw, [
      Me("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = Ct(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = Ct(() => {
        }, ["stop"]))
      }, [
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          Be(zt, {
            icon: rt(Ke).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Me("span", { class: "label" }, "Full Editor", -1))
        ]),
        Be(tn, {
          icon: e.model.hasShot ? rt(Ke).delete : rt(Ke).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(qg, {
          model: e.model,
          mode: "node",
          onAction: r
        }, null, 8, ["model"]),
        Me("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = Ct((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Be(zt, {
            icon: rt(Ke).roll
          }, null, 8, ["icon"]),
          Me("span", gw, nt(e.model.rollLabel || "0.0°"), 1)
        ], 40, mw),
        Be(tn, {
          icon: rt(Ke).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => r({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Be(fw)
      ], 32),
      e.model.hasShot === !1 ? (Le(), Re("div", yw, " Choose a view · + Add Frame ")) : ot("", !0),
      e.model.viewUnavailable ? (Le(), Ln(ql, { key: 1 })) : ot("", !0)
    ]));
  }
}, Xg = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: r }) {
    const n = r, i = /* @__PURE__ */ Jt(null);
    let o, s = !1;
    function a() {
      if (!s) return { active: !1, intent: void 0 };
      const u = o;
      return o = void 0, s = !1, { active: !0, intent: u };
    }
    function l(u) {
      const f = i.value;
      return f instanceof HTMLInputElement ? (o = u, s = !0, f.value = "", f.click(), !0) : !1;
    }
    function c(u) {
      var h, m;
      const { active: f, intent: p } = a();
      if (!f) return;
      const w = ((m = (h = u.target) == null ? void 0 : h.files) == null ? void 0 : m[0]) || null;
      if (w) {
        n("file-selected", { intent: p, file: w });
        return;
      }
      n("file-cancelled", { intent: p });
    }
    function d() {
      const { active: u, intent: f } = a();
      u && n("file-cancelled", { intent: f });
    }
    return t({ open: l }), (u, f) => (Le(), Re("input", {
      ref_key: "inputRef",
      ref: i,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: c,
      onCancel: d
    }, null, 544));
  }
}, vw = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, Sw = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Jt(!1), r = Object.freeze([
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
    return (n, i) => (Le(), Re("div", {
      class: mt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Ct(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Ct(() => {
      }, ["stop"]))
    }, [
      Be(tn, {
        icon: rt(Ke).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Ct((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", vw, [
        i[3] || (i[3] = Me("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Le(!0), Re(Ze, null, kt(rt(r), (o) => (Le(), Re("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Me("kbd", null, nt(o[0]), 1),
          Me("span", null, nt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, _w = { class: "pano-stickers-node-surface" }, ww = ["disabled"], xw = ["aria-label", "data-tip"], kw = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, Mw = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, Nw = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Jt(null);
    function n(s) {
      var a;
      (a = t.onAction) == null || a.call(t, s);
    }
    function i() {
      var s, a;
      (a = (s = r.value) == null ? void 0 : s.open) == null || a.call(s, "add");
    }
    function o(s) {
      n({ type: "add-image-file", file: (s == null ? void 0 : s.file) || null });
    }
    return (s, a) => (Le(), Re("div", _w, [
      Me("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: a[5] || (a[5] = Ct(() => {
        }, ["stop"])),
        onWheel: a[6] || (a[6] = Ct(() => {
        }, ["stop"]))
      }, [
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (l) => n({ type: "open-editor" }))
        }, [
          Be(zt, {
            icon: rt(Ke).fullscreen
          }, null, 8, ["icon"]),
          a[10] || (a[10] = Me("span", { class: "label" }, "Full Editor", -1))
        ]),
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          Be(zt, {
            icon: rt(Ke).image
          }, null, 8, ["icon"]),
          a[11] || (a[11] = Me("span", { class: "label" }, "Add Image", -1))
        ], 8, ww),
        Be(tn, {
          icon: e.model.locked ? rt(Ke).lock_closed : rt(Ke).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: a[1] || (a[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Be(tn, {
          icon: rt(Ke).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: a[2] || (a[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Be(tn, {
          icon: rt(Ke).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: a[3] || (a[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Be(tn, {
          icon: e.model.isExternalSelection ? rt(Ke).back_initial : rt(Ke).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: a[4] || (a[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(Sw)
      ], 32),
      e.model.playable === !0 ? (Le(), Re("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: a[7] || (a[7] = Ct(() => {
        }, ["stop"])),
        onWheel: a[8] || (a[8] = Ct(() => {
        }, ["stop"])),
        onClick: a[9] || (a[9] = (l) => n({ type: "toggle-playback" }))
      }, [
        Be(zt, {
          icon: e.model.playing ? rt(Ke).pause : rt(Ke).play
        }, null, 8, ["icon"])
      ], 40, xw)) : ot("", !0),
      e.model.hasStickers === !1 ? (Le(), Re("div", kw, " Add Image to place a sticker ")) : ot("", !0),
      e.model.dropActive === !0 ? (Le(), Re("div", Mw, "Drop image to add")) : ot("", !0),
      Be(Xg, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Le(), Ln(ql, { key: 3 })) : ot("", !0)
    ]));
  }
}, Pw = { class: "pano-studio-node-surface" }, Aw = {
  class: "pano-studio-node-status",
  role: "status"
}, Cw = { class: "pano-studio-node-shot" }, Iw = { class: "pano-studio-node-size" }, Ew = { class: "pano-studio-node-note" }, Ow = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Le(), Re("div", Pw, [
      Me("div", {
        class: "pano-studio-node-bar",
        onPointerdown: n[1] || (n[1] = Ct(() => {
        }, ["stop"])),
        onWheel: n[2] || (n[2] = Ct(() => {
        }, ["stop"]))
      }, [
        Me("div", Aw, [
          Me("span", Cw, nt(e.model.status.shot), 1),
          Me("span", Iw, nt(e.model.status.size), 1),
          Me("span", Ew, nt(e.model.status.note), 1)
        ]),
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-studio-node-open",
          type: "button",
          "data-action": "open-editor",
          onClick: n[0] || (n[0] = (i) => {
            var o;
            return (o = t.onAction) == null ? void 0 : o.call(t, { type: "open-editor" });
          })
        }, [
          Be(zt, {
            icon: rt(Ke).fullscreen
          }, null, 8, ["icon"]),
          n[3] || (n[3] = Me("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Le(), Ln(ql, { key: 0 })) : ot("", !0)
    ]));
  }
}, Fw = 2048, Su = 4096, Ta = (e) => Math.floor(e + 0.5), da = (e) => Math.max(2, 2 * Ta(e / 2));
function Jg(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function Tw(e) {
  const t = [e.scene.clip, ...e.stickers.map((i) => i.clip)].filter((i) => i.duration !== null).map((i) => i.start + i.duration), r = e.camera ? zl.flatMap(([i]) => e.camera[i].keyframes.map((o) => o.frame)) : [];
  let n = 1;
  return e.timeline.length ? n = Math.max(1, Ta(e.timeline.length)) : t.length ? n = Math.max(1, Ta(Math.max(...t))) : r.length && (n = Math.max(1, Ta(Math.max(...r)) + 1)), Array.from({ length: n }, (i, o) => o);
}
function Dw(e, t, r, n, i) {
  const o = r === "auto" && i == null;
  let s;
  r !== "auto" ? s = Number(r) : o ? s = Fw : s = Math.floor(i * 360 / n);
  const a = Jg(e);
  if (!a || a.projection === "erp")
    return { width: Math.floor(s * n / 360), height: Math.floor(s / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((p) => $l(a, p).hFOV_deg)), c = s / Math.PI * Math.tan(l * Math.PI / 360), d = c / a.aspect, u = [da(c), da(d)];
  if (Math.max(...u) <= Su) return { width: u[0], height: u[1], reducedFrom: null, defaulted: o };
  const f = Su / Math.max(c, d);
  return { width: da(c * f), height: da(d * f), reducedFrom: u, defaulted: o };
}
function Zg(e, t, r, n) {
  let i = 2166136261;
  for (const o of `${e}\0${t}\0${r}\0${n}`)
    i = Math.imul(i ^ o.codePointAt(0), 16777619) >>> 0;
  return i.toString(16).padStart(8, "0");
}
function Lw({ stateText: e = "", outputSize: t, coverage: r, bgColor: n = "", run: i = null, erp: o = null, frame: s = null }) {
  const a = o || s;
  return a ? { kind: o ? "erp" : "frame", entry: a, current: !!i && i.key === Zg(e, t, String(r), n) } : null;
}
function Rw(e) {
  return e ? di(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg)) : { x: 0, y: 0, z: 0, w: 1 };
}
const Oc = {
  run: "",
  edited: "Edited — run to update",
  "not-run": "Not run yet",
  unavailable: "Run output unavailable — run again"
};
function Vw(e, { stateText: t = "", outputSize: r, coverage: n, bgColor: i = "", bgWidth: o, run: s = null, display: a = "run" }) {
  const l = Jg(e);
  let c = "ERP";
  l && (c = l.projection === "erp" ? `Camera · ${n}°` : "Camera · Perspective");
  let d;
  if (s && s.key === Zg(t, r, String(n), i))
    d = { width: s.width, height: s.height, reducedFrom: s.reduced_from, defaulted: r === "auto" && o === null };
  else {
    if (r === "auto" && o === void 0)
      return { shot: c, size: "auto", note: Oc[a] };
    d = Dw(e, Tw(e), r, n, o);
  }
  const u = Oc[a] ? [Oc[a]] : [];
  return d.reducedFrom ? u.push(`Capped at ${Su} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && u.push("auto: no bg_media"), { shot: c, size: `${d.width} × ${d.height}`, note: u.join(" · ") };
}
function $w() {
  let e = null;
  return (t, r) => {
    const n = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", n === void 0 ? "pending" : n, t.run ?? null, t.display ?? "run"]);
    return i === e ? null : (e = i, Vw(r(), { ...t, bgWidth: n }));
  };
}
const pp = 24;
function zw(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function ls(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function Qg(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], s = t[i];
    o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function _u(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const r = e.corners.findIndex((n) => ls(n, t) <= 121);
  if (r >= 0) {
    const n = e.corners[r], i = n.x - e.center.x, o = n.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: r,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return ls(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Qg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function jw(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
  if (n && r && Array.isArray(e.edgeMidpoints)) {
    const s = e.edgeMidpoints.find((a) => ls(a, t) <= 169);
    if (s) {
      const a = s.edge === "left" || s.edge === "right";
      return { kind: a ? "scale_x" : "scale_y", cursor: a ? "ew-resize" : "ns-resize", edge: s.edge, mid: s };
    }
  }
  const o = n ? e.corners.findIndex((s) => ls(s, t) <= 121) : -1;
  if (o >= 0) {
    const s = e.corners[o], a = s.x - e.center.x, l = s.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: a * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return ls(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Qg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function zd(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function e0(e, t, { accent: r = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = r, t.corners.forEach((n) => {
    e.beginPath(), e.arc(n.x, n.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = r, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function $o(e, t) {
  const r = t.project(e);
  if (!Number.isFinite(r.z)) return null;
  const n = Math.max(t.width, t.height) * 2;
  return {
    x: Oe(r.x, -n, t.width + n),
    y: Oe(r.y, -n, t.height + n),
    rawZ: r.z
  };
}
function Hw(e) {
  const t = wo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Oe(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * _t * 0.5),
    tanY: Math.tan(Oe(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * _t * 0.5)
  };
}
function _i(e, t, r) {
  return ld(qa(
    qa(e.centerDir, Xa(e.right, t)),
    Xa(e.up, r)
  ));
}
function jd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = Hw(e), n = $o(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    _i(r, -r.tanX, r.tanY),
    _i(r, r.tanX, r.tanY),
    _i(r, r.tanX, -r.tanY),
    _i(r, -r.tanX, -r.tanY)
  ].map((f) => $o(f, t)), o = Array.from({ length: 4 }, (f, p) => {
    const w = [];
    for (let h = 0; h <= 28; h += 1) {
      const m = h / 28;
      let b, V;
      p === 0 ? (b = -r.tanX + 2 * r.tanX * m, V = r.tanY) : p === 1 ? (b = r.tanX, V = r.tanY - 2 * r.tanY * m) : p === 2 ? (b = r.tanX - 2 * r.tanX * m, V = -r.tanY) : (b = -r.tanX, V = -r.tanY + 2 * r.tanY * m);
      const T = $o(_i(r, b, V), t);
      T && w.push({ x: T.x, y: T.y });
    }
    return w;
  }), s = $o(_i(r, 0, r.tanY), t), a = $o(
    _i(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t
  ), l = [n, ...i, s, a];
  if (l.some((f) => !f || !Number.isFinite(f.x) || !Number.isFinite(f.y)))
    return { visible: !1 };
  if (!l.some((f) => f.rawZ > 1e-4)) return { visible: !1 };
  const c = a.x - s.x, d = a.y - s.y, u = Math.hypot(c, d) || 1;
  return {
    center: { x: n.x, y: n.y },
    corners: i.map((f) => ({ x: f.x, y: f.y })),
    boundaryEdges: o,
    rotateStemBase: { x: s.x, y: s.y },
    rotateHandle: {
      x: s.x + c / u * pp,
      y: s.y + d / u * pp
    },
    visible: !0
  };
}
function hp(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((s) => s && s.visible !== !1).map((s) => ({ item: s, geometry: jd(s, n) })).filter((s) => s.geometry.visible).sort((s, a) => {
    var l, c;
    return Number(((l = a.item) == null ? void 0 : l.z_index) || 0) - Number(((c = s.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((s) => {
    var a;
    return String(((a = s.item) == null ? void 0 : a.id) || "") === String(t || "");
  });
  if (o) {
    const s = _u(o.geometry, r);
    if (s.kind === "scale" || s.kind === "rotate") return { ...o, hit: s };
  }
  for (const s of i) {
    const a = _u(s.geometry, r);
    if (a.kind !== "none") return { ...s, hit: a };
  }
  return null;
}
function Gw(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Gt(Math.atan2(n.x, n.z) * nn),
    pitch_deg: Math.asin(Oe(n.y, -1, 1)) * nn
  };
}
function Kw(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Oe(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Oe(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function Ww(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * nn;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let fa = null;
function Hd() {
  return fa || (fa = new Promise((e) => {
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
  }), fa);
}
function Bn(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function Uw(e, t = 1024) {
  const r = Math.max(1, Math.round(Bn(e, 2048))), n = Math.min(r, Math.max(1, Math.round(Bn(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function Bw(e, t, r) {
  const n = Bn(t), i = Bn(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const s = Bn(o.u0), a = Bn(o.v0), l = Bn(o.u1), c = Bn(o.v1);
  if (l <= s || c <= a) return null;
  const d = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((s + l) * 0.5 + Bn(d.du)) * n,
    centerY: ((a + c) * 0.5 + Bn(d.dv)) * i,
    width: (l - s) * n,
    height: (c - a) * i,
    rotationRad: Bn(d.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Bn(d.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function Yw(e, t, r) {
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
function qw() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function r() {
    if (!(e.size <= 16))
      for (const [o, s] of e) {
        if (e.size <= 16) break;
        s.settled && (s.image.onload = null, s.image.onerror = null, e.delete(o));
      }
  }
  function n(o, s) {
    let a = e.get(o);
    if (a)
      return e.delete(o), e.set(o, a), !a.settled && typeof s == "function" && a.listeners.add(s), a.image;
    const l = new Image();
    a = { image: l, listeners: new Set(typeof s == "function" ? [s] : []), settled: !1 }, e.set(o, a);
    const c = () => {
      a.settled = !0;
      const d = [...a.listeners];
      a.listeners.clear(), d.forEach((u) => u()), r();
    };
    return l.onload = c, l.onerror = c, l.src = o, r(), l;
  }
  function i(o, s, a, l = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const c = String(o.rasterDataUrl || "").trim(), d = Bw(o, s, a);
    if (!c.startsWith("data:") || !d) return null;
    const u = Yw(o, s, a), f = String((o == null ? void 0 : o.id) || "").trim() || u, p = t.get(f);
    if ((p == null ? void 0 : p.revision) === u) return { source: p.source, revision: u };
    const w = n(c, l), h = Number(w.naturalWidth || w.width || 0), m = Number(w.naturalHeight || w.height || 0);
    if (!w.complete || h < 1 || m < 1) return null;
    const b = on({ label: "raster-object" });
    b.width = Math.max(1, Math.round(s)), b.height = Math.max(1, Math.round(a));
    const V = b.getContext("2d");
    return V ? (d.wrapOffsets.forEach((T) => {
      V.save(), V.translate(d.centerX + T, d.centerY), V.rotate(d.rotationRad), V.scale(d.scale, d.scale), V.drawImage(
        w,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), V.restore();
    }), t.set(f, { revision: u, source: b }), { source: b, revision: u }) : null;
  }
  return {
    get: i,
    retain(o = []) {
      const s = new Set(Array.from(o, (a) => String(a || "").trim()).filter(Boolean));
      for (const a of t.keys())
        s.has(a) || t.delete(a);
    },
    dispose() {
      e.forEach((o) => {
        o.listeners.clear(), o.image.onload = null, o.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function Xw(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function Jw(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function Zw({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(u) {
    if (!u) return;
    u.entry.listeners.delete(u);
    const f = n.get(u.owner);
    (f == null ? void 0 : f.get(u.key)) === u && f.delete(u.key);
  }
  function s(u, f, p, w) {
    if (!u || typeof w != "function" || p.settled) return;
    let h = n.get(u);
    h || (h = /* @__PURE__ */ new Map(), n.set(u, h));
    const m = h.get(f);
    if ((m == null ? void 0 : m.entry) === p) {
      m.callback = w;
      return;
    }
    o(m);
    const b = { owner: u, key: f, entry: p, callback: w };
    h.set(f, b), p.listeners.add(b);
  }
  function a(u, f) {
    u.settled || (u.settled = !0, u.image.onload = null, u.image.onerror = null, !f && r.get(u.key) === u && r.delete(u.key), [...u.listeners].forEach((p) => {
      o(p);
      try {
        p.callback(u.image, f);
      } catch {
      }
    }), l(i));
  }
  function l(u) {
    if (!(r.size <= u))
      for (const [f, p] of r) {
        if (r.size <= u) break;
        !p.settled || p.listeners.size > 0 || (p.image.onload = null, p.image.onerror = null, r.delete(f));
      }
  }
  function c(u, f, p, w = null) {
    const h = String(f || ""), m = String(p || "");
    if (!h || !m) return null;
    let b = r.get(h);
    if (b)
      r.delete(h), r.set(h, b);
    else {
      l(i - 1);
      const T = e || globalThis.Image;
      if (typeof T != "function") return null;
      const ee = new T();
      b = { key: h, image: ee, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(h, b), ee.onload = () => a(b, !0), ee.onerror = () => a(b, !1), ee.src = m;
    }
    return b.settled || b.image.complete && Number(b.image.naturalWidth || b.image.width || 0) > 0 || s(u, h, b, w), b.image;
  }
  function d(u) {
    const f = n.get(u);
    f && ([...f.values()].forEach(o), n.delete(u), l(i));
  }
  return { get: c, disposeOwner: d };
}
const Wo = /* @__PURE__ */ new WeakMap();
function t0(e, t, { editor: r = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let n = Wo.get(e);
  n || (n = [], Wo.set(e, n));
  const i = { handler: t, editor: r };
  n.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const s = Wo.get(e);
    if (!s) return;
    const a = s.indexOf(i);
    a >= 0 && s.splice(a, 1), s.length === 0 && Wo.delete(e);
  };
}
function ii(e, ...t) {
  const r = Wo.get(e), n = (r == null ? void 0 : r.findLast((i) => i.editor)) || (r == null ? void 0 : r.at(-1));
  return n ? (n.handler(...t), !0) : !1;
}
const Da = Object.freeze({
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
}), n0 = "PanoramaSuite.Editor.ViewControls", Qw = {
  id: n0,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Da).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function ex(e) {
  return Object.hasOwn(Da, e) ? Da[e] : Da.default;
}
function tx(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const s = e.bindings.find((a) => a.button === t && !!a.shift === r && !!a.alt === n);
  return (s == null ? void 0 : s.action) ?? null;
}
function nx(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const hl = "state_json";
function zr(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function rx(e) {
  var s, a;
  const t = zr(e, hl);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = $m(r, {
    coverage: (s = zr(e, "coverage")) == null ? void 0 : s.value
  }), i = Wg(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (a = t.callback) == null || a.call(t, o), !0;
}
function Gd(e, t) {
  if (!e || Gn(e).coverageSyncInstalled) return;
  const r = zr(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, l, c, d, u, f, p, w, h;
    const o = n ? n(...i) : void 0, s = Gn(e);
    return s.parsedState = null, s.liveState = null, (l = (a = $r(e).runtime) == null ? void 0 : a.requestDraw) == null || l.call(a), (d = (c = bt(e).dom) == null ? void 0 : c.requestDraw) == null || d.call(c), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (p = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || p.call(f, !0, !0), (h = (w = t == null ? void 0 : t.canvas) == null ? void 0 : w.setDirty) == null || h.call(w, !0, !0), o;
  }, Gn(e).coverageSyncInstalled = !0;
}
function ix(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function mp(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function ox(e) {
  var d, u, f, p, w, h;
  if (!e) return;
  const t = zr(e, "coverage"), r = zr(e, "bg_color"), n = zr(e, hl), i = zr(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), s = String(r.value ?? "").trim(), a = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && ix(o) && (mp(s) || s === ""))) return;
  let c = "360";
  if (mp(s))
    try {
      c = String(Rn((d = JSON.parse(s)) == null ? void 0 : d.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (u = t.callback) == null || u.call(t, c), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = s, (p = n.callback) == null || p.call(n, s), i && (i.value = a, (w = i.callback) == null || w.call(i, a)), (h = e.setDirtyCanvas) == null || h.call(e, !0, !0);
}
function La(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, s;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (s = n.parentEl) != null && s.style && (n.parentEl.style.display = "none")));
  });
}
function wu(e, t, r) {
  var o, s;
  if (!e || typeof e.addWidget != "function") return null;
  let i = (Array.isArray(e.widgets) ? e.widgets : []).find((a) => String((a == null ? void 0 : a.name) || "") === String(t));
  if (i) {
    i.callback = r, i.hidden = !1, i.__panoHidden = !1, i.type = "button", i.options = { ...i.options || {}, hidden: !1 }, typeof i.__panoComputeSizeBeforeHide == "function" && (i.computeSize = i.__panoComputeSizeBeforeHide), delete i.__panoComputeSizeBeforeHide, (o = i.element) != null && o.style && (i.element.style.display = ""), (s = i.parentEl) != null && s.style && (i.parentEl.style.display = "");
    const a = typeof i.computeSize == "function" ? i.computeSize() : null;
    return (!Array.isArray(a) || Number(a[0] || 0) <= 0 || Number(a[1] || 0) <= 0) && (i.computeSize = () => {
      var l;
      return [Math.max(120, Number(((l = e == null ? void 0 : e.size) == null ? void 0 : l[0]) || 0) - 20), 30];
    }), i;
  }
  return i = e.addWidget("button", t, null, r), i && (i.serialize = !1), i;
}
async function sx(e, { tolerateOperationFailure: t = !1 } = {}) {
  var n;
  const r = (n = Gn(e)) == null ? void 0 : n.pendingStickerUploads;
  if (r)
    for (; r.size > 0; ) {
      const i = Array.from(r.entries());
      t ? await Promise.allSettled(i.map(([, o]) => o)) : await Promise.all(i.map(([, o]) => o)), i.forEach(([o, s]) => {
        r.get(o) === s && r.delete(o);
      });
    }
}
function Uo(e, t, r) {
  if (!e || typeof r != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  const n = Gn(e), i = n.stickerOperationTail, s = (i && typeof i.then == "function" ? i.catch(() => {
  }) : Promise.resolve()).then(() => r()), a = s.catch(() => {
  });
  n.stickerOperationTail = a, n.pendingStickerUploads.set(t, s);
  const l = () => {
    n.pendingStickerUploads.get(t) === s && n.pendingStickerUploads.delete(t);
  };
  return s.then(l, l), a.then(() => {
    n.stickerOperationTail === a && (n.stickerOperationTail = null);
  }), s;
}
async function r0(e, t = {}) {
  var n, i, o;
  await sx(e, t);
  const r = Array.from(((n = Gn(e)) == null ? void 0 : n.flushers) ?? []);
  for (const s of r) await s();
  await ((o = (i = dl(e)) == null ? void 0 : i.flushBeforeQueue) == null ? void 0 : o.call(i));
}
function ax(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await r0(e), r ? r.apply(this, n) : this.value;
  };
}
function lx(e) {
  var r;
  const t = bt(e);
  try {
    (r = t.restore) == null || r.call(t);
  } catch {
  }
  t.dom = null, t.attached = !1, t.mountKey = null;
}
function i0(e) {
  const t = e.prototype.onRemoved;
  e.prototype.onRemoved = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return x_(this), r;
  };
}
function cx(e) {
  var n;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (n = e == null ? void 0 : e.addOutput) == null || n.call(e, "image", "IMAGE");
}
function Fc(e, {
  app: t,
  matchType: r,
  buttonText: n,
  openEditor: i,
  attachStickers: o,
  attachCutout: s,
  enableStickersPreview: a,
  sceneStateV2: l = !1,
  studio: c = !1
}) {
  if (!(e != null && e.prototype)) return;
  function d(u) {
    var h;
    const f = `editor_btn|${r}`, p = bt(u);
    if (p.attached === !0 && p.mountKey === f) return;
    lx(u), Gd(u, t), La(u, hl);
    const w = zr(u, hl);
    if (ax(u, w), w && !w.__panoPreviewPatchedCb) {
      w.__panoPreviewPatchedCb = !0;
      const m = w.callback;
      w.callback = (b) => {
        var T;
        const V = m ? m(b) : void 0;
        return (T = u.setDirtyCanvas) == null || T.call(u, !0, !1), V;
      };
    }
    if (r === "PanoramaStickers") {
      u.__panoSceneStateV2 = l, u.__panoStudio = c;
      const m = zr(u, "bg_color");
      !l && m && (m.value == null || String(m.value).trim() === "" || String(m.value).toLowerCase() === "#000000") && (m.value = "#00ff00", (h = m.callback) == null || h.call(m, "#00ff00")), wu(u, n, () => i(u, "stickers")), a && (o(u, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(u, "stickers")
      }), p.stickers && La(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260])), p.attached = !0, p.mountKey = f;
      return;
    }
    u.__panoSceneStateV2 = !1, wu(u, n, () => i(u, "cutout")), s(u, {
      buttonText: n,
      onOpen: () => i(u, "cutout")
    }), p.cutout && La(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260]), p.attached = !0, p.mountKey = f;
  }
  for (const u of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[u];
    e.prototype[u] = function() {
      const p = f ? f.apply(this, arguments) : void 0;
      u === "onNodeCreated" && r === "PanoramaCutout" && rx(this), u === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && ox(this);
      const w = bt(this).attached;
      return (u === "onNodeCreated" || this.widgets) && d(this), u === "onAdded" && w && ii(this, "attach"), p;
    };
  }
  i0(e);
}
function ux(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return cx(this), n;
  }, i0(e);
}
function dx(e, {
  app: t,
  openEditor: r,
  attachPreview: n,
  requestFrame: i
}) {
  const o = $r(e);
  if (!o || o.installDone || o.installProbeActive) return;
  o.installProbeActive = !0;
  const s = () => {
    if ($r(e) !== o) return;
    const a = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), l = o.installProbeTries + 1;
    if (o.installProbeTries = l, !a && l < 40) {
      i(s);
      return;
    }
    Gd(e, t);
    const c = (d = e) => r(d, "stickers", { readOnly: !0, hideSidebar: !1 });
    wu(e, "Open Preview", () => c(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: c
    }), o.surface && La(e, "Open Preview"), o.installDone = !0, o.installProbeActive = !1;
  };
  i(s);
}
function fx({
  app: e,
  openEditor: t,
  attachStickers: r,
  attachCutout: n,
  attachPreview: i,
  restoreOutput: o,
  requestFrame: s,
  enableStickersPreview: a = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [Qw, kv],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [zf],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [zf.id] }],
    beforeRegisterNodeDef(l, c) {
      const d = String((c == null ? void 0 : c.name) || "");
      (d === "PanoramaStickers" || d === "Panorama Stickers") && Fc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), d === "PanoramaStudio" && Fc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && Fc(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), Ja(d) && ux(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      bt(l).attached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      Gd(l, e), Ja(c) && dx(l, { app: e, openEditor: t, attachPreview: i, requestFrame: s });
    }
  };
}
const px = /\.(png|jpe?g|webp|gif|bmp)$/i;
function ar(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : px.test(String(e.name || "")) : !1;
}
function Kd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => ar(r)) : !1;
}
function hx(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var c, d, u;
    (c = l == null ? void 0 : l.preventDefault) == null || c.call(l), (d = l == null ? void 0 : l.stopPropagation) == null || d.call(l), (u = l == null ? void 0 : l.stopImmediatePropagation) == null || u.call(l);
  }, o = (l) => {
    if (Kd(l == null ? void 0 : l.dataTransfer)) {
      i(l);
      try {
        l.dataTransfer.dropEffect = "copy";
      } catch {
      }
      r(!0);
    }
  }, s = (l) => {
    var c;
    l != null && l.relatedTarget && ((c = e.contains) != null && c.call(e, l.relatedTarget)) || r(!1);
  }, a = (l) => {
    var d;
    const c = Array.from(((d = l == null ? void 0 : l.dataTransfer) == null ? void 0 : d.files) || []).find((u) => ar(u));
    if (!c) {
      r(!1);
      return;
    }
    i(l), r(!1), n(c);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", s, !0), e.addEventListener("drop", a, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", s, !0), e.removeEventListener("drop", a, !0), r(!1);
  };
}
async function Bo(e, t = {}) {
  var s, a, l, c;
  if (!ar(e)) throw new TypeError("A supported image file is required.");
  const r = t.ImageCtor || globalThis.Image, n = t.createObjectURL || ((a = (s = globalThis.URL) == null ? void 0 : s.createObjectURL) == null ? void 0 : a.bind(globalThis.URL)), i = t.revokeObjectURL || ((c = (l = globalThis.URL) == null ? void 0 : l.revokeObjectURL) == null ? void 0 : c.bind(globalThis.URL));
  if (typeof r != "function" || typeof n != "function")
    throw new Error("Image decoding is unavailable.");
  const o = n(e);
  try {
    const d = await new Promise((u, f) => {
      const p = new r();
      p.onload = () => u(p), p.onerror = () => f(new Error("image load failed")), p.src = o;
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
async function Mi(e, { fetchApi: t } = {}) {
  if (!ar(e)) throw new TypeError("A supported image file is required.");
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
const gp = /* @__PURE__ */ new WeakSet(), yp = /* @__PURE__ */ new WeakSet();
let bp = 0;
function xu(e) {
  if (!e || typeof e != "object" || yp.has(e)) return e;
  const t = String(e.type || "preview");
  return bp += 1, e.type = `${t}:pano-${bp}`, yp.add(e), e;
}
function ml(e) {
  if (!e || typeof e != "object" || gp.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, gp.add(e), e;
}
function o0(e, t) {
  var n, i;
  if (!t || ((i = (n = ml(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function mx({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const c = i;
    i = null, o || r == null || r(c);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: Ht } = ba;
d_((e) => li(e.id));
f_(hn);
const Wd = Zw(), { linkedVideoFile: s0 } = Pg({ app: Ht, api: hn });
function ku() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (ba == null ? void 0 : ba.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const gx = "pano_suite.ui_settings.v1", yx = 120, bx = 2048;
function vp() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(gx)) || "").trim();
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
function vx() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function zo(e) {
  var r, n, i, o, s;
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
    styleTransform: String(((s = e.style) == null ? void 0 : s.transform) || "")
  };
}
function Sx() {
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
function Mu(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const r = (n, i) => {
    const o = Number(n), s = Number(i);
    return !Number.isFinite(o) || !Number.isFinite(s) ? null : [o, s];
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
function a0(e) {
  const t = Mu(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function _x(e, t, r) {
  a0(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function Nu(e) {
  var t, r;
  return (r = (t = bt(e)) == null ? void 0 : t.dom) != null && r.widget ? "dom" : "none";
}
function Ud(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function l0(e) {
  return Ja(Ud(e));
}
function Sp(e = null) {
  var o, s;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((s = (o = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : o.constructor) == null ? void 0 : s.name) || "");
  return [t, n, r, i].join("|");
}
function c0(e) {
  const t = bt(e);
  if (t.controller) return t.controller;
  const r = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", s = Nu(e);
      this.activeBackend = s;
      const a = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", l = t.noPreview === !0, c = n.noPreview === !0;
      if (s === o && s !== "none" && a === i && l === c) {
        t.mode = i, t.noPreview = c, t.openEditor = typeof n.onOpen == "function" ? n.onOpen : t.openEditor;
        return;
      }
      s !== "none" && Tc(e), gk(e, { ...n, mode: i }), this.activeBackend = Nu(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || bt(e).mode || "stickers") === "cutout" ? "cutout" : "stickers";
      Tc(e), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Tc(e), this.activeBackend = "none";
    }
  };
  return t.controller = r, r;
}
function Tc(e, t = {}) {
  var i, o, s, a;
  if (!e) return;
  Pu.unregister(e);
  const r = bt(e);
  r.dom, r.restore;
  const n = r.dom;
  try {
    (i = r.restore) == null || i.call(r);
  } catch {
  }
  if (r.restore = null, n) {
    try {
      (o = n.state) != null && o.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (a = (s = n.root) == null ? void 0 : s.remove) == null || a.call(s);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((c) => {
      if (c === (n == null ? void 0 : n.widget)) return !0;
      const d = String((c == null ? void 0 : c.name) || ""), u = String((c == null ? void 0 : c.type) || ""), f = ku();
      return d === f || u === f || d === "pano_preview" || u === "pano_preview" ? !0 : d === "preview" && u === "pano_preview";
    }).forEach((c) => jx(e, c));
  } catch {
  }
  r.dom = null, r.noPreview = !1, r.bootMinHeightTimer && (clearTimeout(r.bootMinHeightTimer), r.bootMinHeightTimer = null), r.bootMinHeightActive = !1, String(t.reason || ""), t.keepMonitor;
}
function wx(e, t = "#00ff00") {
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
function xx(e) {
  var r, n;
  const t = (r = Gn(e)) == null ? void 0 : r.liveState;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = xr(e, "state_json")) == null ? void 0 : n.value) || "");
}
function _n(e) {
  var d, u;
  const t = Gn(e), r = xx(e), n = t.liveStateVersion, i = String(((d = xr(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), o = Number(((u = xr(e, "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, s = e.__panoSceneStateV2 && typeof r == "string", a = s && Rg(e) && Kt(e, "sticker-handoff") ? lr(e, "pano_sticker_handoff") ?? null : null, l = t.parsedState;
  if (l && l.source === r && l.liveVersion === n && l.bg === i && l.coverage === o && l.handoff === a)
    return l.parsed;
  const c = s ? z_(r, { backgroundColor: i, coverage: o, active: Wm(e) }, a) : wx(r, i);
  return c.coverage = o, t.parsedState = { source: r, liveVersion: n, bg: i, coverage: o, handoff: a, parsed: c }, c;
}
function xr(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function kx(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function u0(e, t, r = null) {
  var i, o;
  let n = null;
  try {
    n = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    n = null;
  }
  if ((i = n == null ? void 0 : n.isSubgraphNode) != null && i.call(n))
    try {
      const s = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, a = s ? (o = n.resolveSubgraphOutputLink) == null ? void 0 : o.call(n, Number(s.origin_slot ?? 0)) : null;
      a != null && a.outputNode && (n = a.outputNode);
    } catch {
    }
  return !n && r != null && (n = kx(e == null ? void 0 : e.graph, r)), n;
}
function Mx(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function d0(e, t = []) {
  const r = Mx(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    fr.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function _p(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function gl(e, t) {
  const r = _p(e), n = _p(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function Nx(e, t) {
  var r;
  return u0(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function Px(e, t = fr) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = d0(e, t).map((a) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(a))).filter((a) => a >= 0), o = r.map((a, l) => ({ input: a, idx: l })).filter(({ input: a }) => String((a == null ? void 0 : a.type) || "").toUpperCase() === "IMAGE").map(({ idx: a }) => a), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  return b_(e, s, Nx);
}
const Pu = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = hn) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, d, u, f, p, w;
        if (!o) return;
        const s = gl(n, o == null ? void 0 : o.id);
        String(bt(o).mode || "") === "cutout" && !s || !s && ![...Px(o)].some((h) => gl(n, h)) || (s && (Yd(o), (c = (l = bt(o).dom) == null ? void 0 : l.requestDraw) == null || c.call(l)), !xg(Pn(o).executedOutputs, n, r.output) && (p0(o), (u = (d = bt(o).dom) == null ? void 0 : d.requestDraw) == null || u.call(d), (f = o.setDirtyCanvas) == null || f.call(o, !0, !0), (w = (p = o.graph) == null ? void 0 : p.setDirtyCanvas) == null || w.call(p, !0, !0), String(bt(o).mode || ""), String(bt(o).mode || ""), void 0));
      });
    }, hn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = hn) != null && e.removeEventListener) || (hn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function yl(e) {
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
  return typeof ((o = hn) == null ? void 0 : o.apiURL) == "function" ? hn.apiURL(i) : i;
}
function Ax(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Cx(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function Ix(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function Ex(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Ax(t)) return [t];
  const { filename: r, subfolder: n } = Cx(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => yl({
    filename: r,
    subfolder: n,
    type: o
  }));
  return Ix([...i, t]);
}
function Ox(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? yl({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function li(e) {
  const t = Ht == null ? void 0 : Ht.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (gl(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const s of o)
      if (gl(s, i)) return t[s];
  }
  return null;
}
function lr(e, t, r = null) {
  const n = r || li(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
}
function xn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return xn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return yl({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = xn(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : yl(e);
}
function xs(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Ra(e) {
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
function Bd(e, t) {
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
function Fx(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((s) => t.push(s));
  }, i = (o, s = 0) => {
    !o || s > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, s + 1), i(o.ui, s + 1), i(o.data, s + 1), i(o.result, s + 1));
  };
  return i(e, 0), t;
}
function Tx(e, t) {
  try {
    const r = Pn(e);
    r.ownOutputRev = Xw(r.ownOutputRev);
    const n = Fx(t);
    let i = "";
    for (const o of n)
      if (i = xn(o), i) break;
    i ? (Bd(String(i || ""), r.ownOutputRev), r.ownOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function uo(e) {
  var r;
  const t = Pn(e);
  t && ((r = t.ownOutputVideo) == null || r.player.destroy(), t.ownOutputVideo = null);
}
function Dx(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!Kt(e, "background"))
    return uo(e), null;
  const i = li(n), o = Cd(i, t, xn);
  if (!o)
    return uo(e), null;
  const s = Pn(e), a = Bd(o, s.ownOutputRev), l = `${t.join("|")}:${a}`, c = s.ownOutputVideo;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  uo(e);
  const d = v_({
    documentRef: document,
    src: a,
    onFrame: r
  });
  return d ? (s.ownOutputVideo = { key: l, player: d }, d.video) : null;
}
function Lx(e, t = []) {
  var c, d;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = d0(e, t).map((u) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(u))).filter((u) => u >= 0), o = r.map((u, f) => ({ input: u, idx: f })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const u of s) {
    const f = r[u], p = e.graph ? e.getInputLink(u) : null;
    if ((p == null ? void 0 : p.origin_id) == null) continue;
    const w = p.origin_id, h = u0(e, u, w);
    if (!h) continue;
    const m = Number(p.origin_slot ?? 0), b = li((h == null ? void 0 : h.id) ?? w), V = Array.isArray(b == null ? void 0 : b.images) ? b.images : [];
    if (V.length) {
      const X = [];
      m >= 0 && m < V.length && X.push(V[m]), X.push(...V);
      for (const $ of X.filter((J) => !Ia(J))) {
        const J = xn($);
        if (J)
          return String((f == null ? void 0 : f.name) || ""), { src: `${J}&pano_src=${yu(b)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let T = [];
    try {
      T = typeof (Ht == null ? void 0 : Ht.getNodeImageUrls) == "function" ? Ht.getNodeImageUrls(h) || [] : [];
    } catch {
      T = [];
    }
    if (Array.isArray(T) && T.length) {
      const X = [];
      m >= 0 && m < T.length && X.push(T[m]), X.push(...T);
      for (const $ of X) {
        const J = xn($);
        if (J)
          return String((f == null ? void 0 : f.name) || ""), { src: J, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const ee = Array.isArray(h == null ? void 0 : h.imgs) ? h.imgs : [];
    if (ee.length) {
      const X = [];
      m >= 0 && m < ee.length && X.push(ee[m]), X.push(...ee);
      for (const $ of X) {
        const J = xn($);
        if (J)
          return String((f == null ? void 0 : f.name) || ""), { src: J, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const I = (c = h == null ? void 0 : h.widgets) == null ? void 0 : c.find((X) => String((X == null ? void 0 : X.name) || "").toLowerCase() === "image");
    if (I) {
      let X = xn(I.value);
      if (X && !X.includes("/") && !X.includes(":") && (h.comfyClass === "LoadImage" || h.type === "LoadImage") && (X = hn.apiURL(`/view?filename=${encodeURIComponent(X)}&type=input&subfolder=`)), X)
        return String((f == null ? void 0 : f.name) || ""), { src: X, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const a = Kt(e, "background") ? li(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(a == null ? void 0 : a.pano_input_images) && l.push(...a.pano_input_images), Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d.pano_input_images) && l.push(...a.ui.pano_input_images), l.length > 0)
    for (const u of l) {
      const f = xn(u);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Rx(e, t = [], r = {}) {
  const n = Lx(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = Ex(i);
  if (!o.length) return null;
  const s = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1, a = Pn(e).linkedImages, l = t.join("|") || "image", c = a.get(l);
  if (c && c.srcRaw === i && c.img) return c.img;
  if (c && c.pendingSrcRaw === i && c.pendingImg)
    return s && c.img && (c.img.complete || c.img.naturalWidth || c.img.width) ? c.img : c.pendingImg;
  const d = new Image(), u = c || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  u.pendingSrcRaw = i, u.pendingResolvedSrc = "", u.pendingImg = d, a.set(l, u);
  let f = -1;
  const p = () => {
    if (f += 1, f >= o.length) {
      a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String((n == null ? void 0 : n.sourceType) || ""), o.length;
      return;
    }
    const w = o[f];
    u.pendingResolvedSrc = w, d.src = w;
  };
  return d.onload = () => {
    var w;
    a.get(l) === u && u.pendingImg === d && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || d.src || ""), u.img = d, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || d.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0);
  }, d.onerror = (w) => {
    if (f + 1 < o.length) {
      p();
      return;
    }
    a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((w == null ? void 0 : w.type) || "error");
  }, p(), s && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : d;
}
function f0(e, t = [], r = null, n = {}) {
  const i = Rx(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function p0(e) {
  e && (Wd.disposeOwner(e), Pn(e).linkedImages.clear(), uo(e));
}
function Vx(e) {
  e && (Pn(e).linkedImages.clear(), uo(e));
}
function h0(e, t) {
  const r = bt(e);
  r.renderCache ?? (r.renderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = r.renderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function jo(e, t, r = "") {
  var s;
  const n = h0(e, ((s = bt(e)) == null ? void 0 : s.mode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < yx ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function wp(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), s = r / i, a = n / o, l = Math.min(s, a);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function $x(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), s = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || s <= 0) return;
  const a = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), c = Math.max(Math.round(34 * r), a + Math.round(14 * r)), d = n + (o - l) * 0.5, u = i + (s - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, u, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, u + c * 0.5 + 0.5), e.restore();
}
function Dc(e, t) {
  var n, i;
  const r = (i = (n = bt(e)) == null ? void 0 : n.dom) == null ? void 0 : i.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function zx(e) {
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
function jx(e, t) {
  return o0(e, t);
}
function bl(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = Ox(r);
  if (!o && (n != null && n.external)) {
    if (!Kt(e, "external-sticker")) return null;
    const p = li(e == null ? void 0 : e.id), w = ((f = p == null ? void 0 : p.ui) == null ? void 0 : f.pano_sticker_input_images) || (p == null ? void 0 : p.pano_sticker_input_images) || [];
    for (const h of Array.isArray(w) ? w : [w])
      if (o = xn(h), o) break;
  }
  if (!o) return null;
  const s = lr(e, "pano_sticker_input_state_hash"), a = n != null && n.external ? String(s ?? "") : "", l = n != null && n.external ? Pn(e).ownOutputRev : 0, c = n != null && n.external ? Bd(o, l) : o, d = Jw(o, a, l);
  return Wd.get(e, d, c, (p, w) => {
    var h, m;
    w && (n != null && n.external && Pn(e).outputFromRun && ii(e, "image-loaded"), (m = (h = bt(e).dom) == null ? void 0 : h.requestDraw) == null || m.call(h));
  }) || null;
}
function Hx(e, t) {
  var f, p, w, h;
  const r = bt(e), n = Bx(e, t), i = Yx(t), o = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.groups) ? t.painting.groups : [], s = new Map(
    o.filter((m) => m && typeof m == "object").map((m) => [String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim(), Number((m == null ? void 0 : m.z_index) || 0)])
  ), a = n ? i.map((m) => {
    const b = n.getGroupDisplayCanvas(m);
    return b ? {
      id: `paint_group:${m}`,
      source: b,
      revision: `${String(r.paintRevisionKey || "")}:${m}`,
      zIndex: Number(s.get(m) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], l = Array.isArray((p = t == null ? void 0 : t.painting) == null ? void 0 : p.raster_objects) ? t.painting.raster_objects : [];
  if (l.length === 0)
    return (h = (w = r.rasterCache) == null ? void 0 : w.retain) == null || h.call(w, []), a;
  r.rasterCache || (r.rasterCache = qw()), r.rasterReady || (r.rasterReady = () => {
    var m, b;
    return (b = (m = r.dom) == null ? void 0 : m.requestDraw) == null ? void 0 : b.call(m);
  });
  const c = Uw(t == null ? void 0 : t.output_preset), d = l.filter((m) => (m == null ? void 0 : m.visible) !== !1 && String((m == null ? void 0 : m.layerKind) || "paint") === "paint").map((m) => String((m == null ? void 0 : m.id) || ""));
  r.rasterCache.retain(d);
  const u = l.map((m) => {
    const b = r.rasterCache.get(
      m,
      c.width,
      c.height,
      r.rasterReady
    );
    return b ? {
      id: `raster:${String((m == null ? void 0 : m.id) || "")}`,
      source: b.source,
      revision: b.revision,
      zIndex: Number((m == null ? void 0 : m.z_index) || 0),
      opacity: 1,
      visible: (m == null ? void 0 : m.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...u];
}
function Gx(e, t, r, n) {
  var o, s, a, l, c, d;
  if (Array.isArray(r) && r.length >= 2) return { x: r[0], y: r[1] };
  if (r && typeof r == "object" && Number.isFinite(Number(r.x)) && Number.isFinite(Number(r.y)))
    return { x: Number(r.x), y: Number(r.y) };
  if (n && Array.isArray(n.graph_mouse) && n.graph_mouse.length >= 2)
    return {
      x: Number(n.graph_mouse[0]) - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
      y: Number(n.graph_mouse[1]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[1]) || 0)
    };
  if (n && typeof n.convertEventToCanvasOffset == "function" && t)
    try {
      const u = n.convertEventToCanvasOffset(t);
      if (Array.isArray(u) && u.length >= 2)
        return {
          x: Number(u[0]) - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
          y: Number(u[1]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[0]) || 0),
      y: Number(t.canvasY) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
    };
  const i = Wx(e, t, n);
  return i || null;
}
function Kx(e, t) {
  var u, f;
  const r = Number(e == null ? void 0 : e.clientX), n = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(n)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (u = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : u.call(i), s = (t == null ? void 0 : t.ds) || ((f = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : f.ds);
  if (!o || !s) return null;
  const a = Number(s.scale || 1);
  if (!Number.isFinite(a) || Math.abs(a) < 1e-6) return null;
  const l = Array.isArray(s.offset) ? s.offset : [0, 0], c = (r - Number(o.left || 0)) / a - Number(l[0] || 0), d = (n - Number(o.top || 0)) / a - Number(l[1] || 0);
  return !Number.isFinite(c) || !Number.isFinite(d) ? null : { x: c, y: d };
}
function Wx(e, t, r) {
  var i, o;
  const n = Kx(t, r || (Ht == null ? void 0 : Ht.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function Ux(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function Bx(e, t) {
  var d, u, f, p, w, h, m, b, V, T, ee, I;
  const r = (u = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.paint) == null ? void 0 : u.strokes, n = (p = (f = t == null ? void 0 : t.painting) == null ? void 0 : f.mask) == null ? void 0 : p.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const s = bt(e), a = Ux(e, t), l = `${a.width}x${a.height}`;
  (!s.paintEngine || s.paintDescriptorKey !== l) && (s.paintEngine = Rl(a), s.paintDescriptorKey = l, s.paintRevision = null, s.paintRevisionKey = "");
  const c = {
    paint: r || null,
    mask: n || null,
    groups: ((w = t == null ? void 0 : t.painting) == null ? void 0 : w.groups) || null,
    rasterObjects: ((h = t == null ? void 0 : t.painting) == null ? void 0 : h.raster_objects) || null
  };
  return (((m = s.paintRevision) == null ? void 0 : m.paint) !== c.paint || ((b = s.paintRevision) == null ? void 0 : b.mask) !== c.mask || ((V = s.paintRevision) == null ? void 0 : V.groups) !== c.groups || ((T = s.paintRevision) == null ? void 0 : T.rasterObjects) !== c.rasterObjects) && (s.paintRevision = c, s.paintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((ee = t == null ? void 0 : t.painting) == null ? void 0 : ee.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((I = t == null ? void 0 : t.painting) == null ? void 0 : I.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), s.paintEngine.rebuildCommitted(t)), s.paintEngine;
}
function Yx(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function xp(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function qx(e, t, r) {
  const n = jd(t, r);
  n.visible && zd(e, n.boundaryEdges, { selected: !1 });
}
function Xx(e, t, r) {
  const n = jd(t, r);
  n.visible && (e.save(), zd(e, n.boundaryEdges, { selected: !0 }), e0(e, n, { accent: zw(t) }), e.restore());
}
function Au(e, t, r) {
  return lg(ll(bt(e).view || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function vl(e) {
  var t;
  return ((t = bt(e).playback) == null ? void 0 : t.playback.frame) ?? vo;
}
function Jx(e) {
  return [Kt(e, "background") ? Cd(li(e.id), ["pano_input_videos"], xn) : "", s0(e, fr)];
}
function Zx(e) {
  var o;
  if (!Kt(e, "external-sticker")) return null;
  const t = li(e.id), r = lr(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(xn), meta: r };
  const i = Cd(t, ["pano_sticker_input_videos"], xn);
  return i ? { src: i, meta: r } : null;
}
function Qx({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function m0(e, t) {
  var n;
  const r = bt(e);
  return ((n = r.scene) == null ? void 0 : n.state) !== t && (r.scene = { state: t, sceneState: tr({ ...t, painting: null }) }), r.scene.sceneState;
}
function ek(e, t) {
  const r = Bl(e), n = !!r.bg_media;
  if (!n && !r.scene) return null;
  if (Kt(e, "background")) {
    const o = lr(e, "pano_bg_width");
    if (o !== void 0) return o;
  }
  if (!n) return;
  if (yg(e, fr)) {
    const { playback: o, video: s } = t;
    return o.source && o.source === s0(e, fr) && s.videoWidth > 0 ? s.videoWidth : void 0;
  }
  const i = f0(e, fr, null, { preserveReadyWhilePending: !1 });
  return xs(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
}
function tk(e, t) {
  var i, o, s;
  const r = String(((i = xr(e, "output_size")) == null ? void 0 : i.value) ?? ""), n = ["background", "external-sticker", "scene"].every((a) => Kt(e, a));
  return {
    stateText: String(((o = xr(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: r,
    coverage: _n(e).coverage,
    bgColor: String(((s = xr(e, "bg_color")) == null ? void 0 : s.value) ?? ""),
    bgWidth: r === "auto" ? ek(e, t) : null,
    run: n && lr(e, "pano_output_size") || null,
    erp: lr(e, "pano_output_erp") || null,
    frame: lr(e, "pano_output_frame") || null
  };
}
const nk = 38;
function Yd(e) {
  const t = Pn(e);
  t != null && t.studioRunImage && (t.studioRunImage.image.removeAttribute("src"), t.studioRunImage = null);
}
function rk(e, t) {
  const r = Pn(e).studioRunImage;
  return t && (r == null ? void 0 : r.src) === xn(t.entry) ? r : null;
}
function ik(e, t) {
  const r = Pn(e), n = bt(e), i = t ? xn(t.entry) : "";
  if (r.studioRunImage && r.studioRunImage.src !== i && Yd(e), !i) return null;
  let o = r.studioRunImage;
  if (!o) {
    const s = new Image(), a = { src: i, image: s, ready: !1, failed: !1 };
    s.src = i, s.decode().then(() => {
      var l, c;
      r.studioRunImage === a && (a.ready = !0, (c = (l = n.dom) == null ? void 0 : l.requestDraw) == null || c.call(l));
    }, () => {
      var l, c;
      r.studioRunImage === a && (a.failed = !0, (c = (l = n.dom) == null ? void 0 : l.requestDraw) == null || c.call(l));
    }), r.studioRunImage = o = a;
  }
  return o.ready ? t.kind === "frame" ? { frame: o.image } : {
    background: {
      media: o.image,
      revision: Ra(o.image),
      coverage: Number(t.entry.coverage) === 180 ? 180 : 360,
      quaternion: Rw(t.entry.rotation)
    }
  } : null;
}
function ok(e, t) {
  var r;
  return t ? (r = rk(e, t)) != null && r.failed ? "unavailable" : t.current ? "run" : "edited" : "not-run";
}
function sk(e, t, r) {
  const n = m0(e, t), i = (s) => {
    var l;
    if (s.visible === !1) return null;
    let a;
    if (t.version === 2) {
      a = bl(e, s.id, sl(s.source), { external: s.source.kind === "port" });
      const c = bt(e).playback;
      if (s.source.kind === "port" && c) {
        const d = c.playback.stickerPicture(c.stickerStill, a), u = Od(c.playback.stickerMedia, a);
        return d ? { media: d, revision: Ra(d), source: u } : null;
      }
    } else {
      const c = s.type === "external_image" || s.source_kind === "external_image", d = String(s.asset_id || "") || (c ? String(s.id || "") : "");
      a = bl(e, d, (l = t.assets) == null ? void 0 : l[s.asset_id], { external: c });
    }
    return xs(a) ? { media: a, revision: Ra(a) } : null;
  }, o = (t.painting_visible === !1 ? [] : Hx(e, t)).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  return {
    background: xs(r) ? { media: r, revision: Ra(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: ug(n, vl(e), t.stickers, { media: i, paintLayers: o })
  };
}
function ak(e, t, r, n = null) {
  var J, ye, _e, me, ve, ue, we;
  const i = bt(e), o = String(i.mode || "stickers");
  h0(e, o);
  const s = _n(e);
  o === "cutout" && i.cutoutState !== s ? (i.cutoutState = s, (_e = (ye = (J = i.cutout) == null ? void 0 : J.session) == null ? void 0 : ye.refresh) == null || _e.call(ye)) : o === "stickers" && i.stickersState !== s && (i.stickersState = s, (ue = (ve = (me = i.stickers) == null ? void 0 : me.session) == null ? void 0 : ve.refresh) == null || ue.call(ve));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== c) && (t.width = l, t.height = c);
  const u = { x: 0, y: 0, w: l, h: c };
  if (d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, c), n != null && n.frame) {
    r.release(), jo(e, !1, "");
    const { width: de, height: ne } = xp(n.frame), ie = nk, le = Math.min(l / de, (c - ie) / ne);
    d.drawImage(n.frame, (l - de * le) / 2, ie + (c - ie - ne * le) / 2, de * le, ne * le);
    return;
  }
  const f = (n == null ? void 0 : n.background) || null, p = (f == null ? void 0 : f.media) || (i.playback ? Qx(i.playback) : Dx(e, ["pano_input_videos"], () => {
    var de, ne;
    return (ne = (de = i.dom) == null ? void 0 : de.requestDraw) == null ? void 0 : ne.call(de);
  })) || f0(
    e,
    fr,
    () => {
      var de, ne;
      return (ne = (de = i.dom) == null ? void 0 : de.requestDraw) == null ? void 0 : ne.call(de);
    },
    { preserveReadyWhilePending: !1 }
  ), w = xs(p);
  let h = null;
  const m = () => f ? { background: f, layers: [] } : sk(e, s, p), b = (de, ne) => {
    h || (h = m());
    const ie = r.render({ width: de.w, height: de.h, camera: ne, ...h });
    return ie && d.drawImage(ie.canvas, ie.x, ie.y, ie.width, ie.height, de.x, de.y, de.w, de.h), !!ie;
  };
  if (o === "cutout") {
    const de = zx(s), ne = xp(p), ie = de ? Oe(ui(de).aspect, 0.1, 10) : w ? Oe(Number(ne.width / ne.height), 0.05, 20) : 1, le = $d(u, ie);
    i.cutoutFrame = le;
    let z = "none";
    const C = String((p == null ? void 0 : p.currentSrc) || (p == null ? void 0 : p.src) || "");
    if (de)
      if (p && !w)
        z = "loading";
      else if (w) {
        const R = Z_({ width: l, height: c }, le, de);
        [
          !R.fallback || b(R.fallback.rect, as(R.fallback.shot)),
          b(R.rect, as(R.shot)),
          !R.fallback || b(le, as(de))
        ].every(Boolean) || (z = "loading");
      } else
        z = "empty";
    else {
      const R = i.lastCutoutShot;
      R ? (i.view = Kg(R, { width: l, height: c }), i.lastCutoutShot = null) : i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 }), w ? b(u, ll(i.view, l, c)) || (z = "loading") : p ? z = "loading" : z = "empty";
    }
    w || r.release(), r.failed && z === "loading" && (z = "none"), de && (i.lastCutoutShot = { ...de }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, c), d.rect(le.x, le.y, le.w, le.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(le.x + 0.5, le.y + 0.5, Math.max(0, le.w - 1), Math.max(0, le.h - 1)), d.restore()), z === "loading" ? (Dc(e, !1), jo(e, !0, C)) : z === "empty" ? (Dc(e, !0), jo(e, !1, "")) : (Dc(e, !1), jo(e, !1, ""));
    return;
  }
  i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 });
  let V = !1;
  (!p || w) && (h = m(), !h.background && !h.layers.length ? (r.release(), V = !0) : V = b(u, ll(i.view, l, c)));
  const T = !V && !r.failed;
  jo(e, T, T ? String((p == null ? void 0 : p.currentSrc) || (p == null ? void 0 : p.src) || "") : ""), T && $x(d, u, wp(t, u));
  const ee = Au(e, l, c);
  !p && V && lk(d, ee, wp(t, u));
  const I = String(((we = s == null ? void 0 : s.active) == null ? void 0 : we.selected_sticker_id) || ""), X = bu(s, vl(e)), $ = V && e.__panoStudio !== !0 ? X.find((de) => String((de == null ? void 0 : de.id) || "") === I && (de == null ? void 0 : de.visible) !== !1) : null;
  V && !f && X.filter((de) => de !== $ && (de == null ? void 0 : de.visible) !== !1 && (de.external || de.source_kind === "external_image")).filter((de) => !xs(bl(e, de.id, null, { external: !0 }))).forEach((de) => qx(d, de, ee)), $ && Xx(d, $, ee);
}
function kp(e, t, r, n, i = 1) {
  let o = !1;
  e.strokeStyle = n, e.lineWidth = i, e.beginPath();
  for (const s of t) {
    const a = r.project(s);
    if (a.z <= 1e-4) {
      o = !1;
      continue;
    }
    o ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), o = !0);
  }
  e.stroke();
}
function lk(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let a = -75; a <= 75; a += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(Tn(c, a));
    kp(e, l, t, a === 0 ? i : n, a === 0 ? 1.5 : 1);
  }
  for (let a = -180; a <= 180; a += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(Tn(a, c));
    kp(e, l, t, n, a % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: Tn(0, 0) },
    { name: "Right", dir: Tn(90, 0) },
    { name: "Back", dir: Tn(180, 0) },
    { name: "Left", dir: Tn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const s = Math.max(9, Math.round(11 * r));
  e.font = `500 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((a) => {
    const l = t.project(a.dir);
    l.z > 1e-4 && e.fillText(a.name, l.x, l.y + 24 * r);
  }), e.restore();
}
function Cu(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function ck(e, t, r = 20) {
  var s;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (s = t.getBoundingClientRect) == null ? void 0 : s.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function Un(e, t) {
  return ck(e, t) ? !1 : (Cu(e), !0);
}
function Mp() {
  var r;
  const e = (r = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function uk(e) {
  var r;
  if (!e) return;
  const t = (r = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function dk(e, t = 360, r = 260) {
  const n = bt(e);
  if (!n || n.userResized === !0 || n.standaloneBootSized === !0 || !a0(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, n.standaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function fk(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0)), o = bt(e);
  o.bootMinHeightTimer && (clearTimeout(o.bootMinHeightTimer), o.bootMinHeightTimer = null), o.bootMinHeightActive = i > 0, !(i <= 0) && (o.bootMinHeightTimer = setTimeout(() => {
    var s, a;
    o.bootMinHeightTimer = null, (s = o.dom) != null && s.widget && o.bootMinHeightActive && (o.bootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function Np(e, t = null, r = 0, n = 0, i = !0) {
  const o = Math.max(0, Number(n || 0)), s = bt(e);
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return s.bootMinHeightActive ? Math.max(o, Math.max(0, Number(r || 0))) : o;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return s.bootMinHeightActive ? Math.max(o, Math.max(0, Number(r || 0))) : o > 0 ? o : "auto";
    },
    afterResize() {
      s.userResized = !0, t == null || t(), i && pk(e, 180, t);
    }
  };
}
function pk(e, t = 180, r = null) {
  if (!e) return;
  const n = bt(e);
  n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.resizeSettleTimer = setTimeout(() => {
    var i;
    n.resizeSettleTimer = null, r == null || r(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0)));
}
function Yo(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const hk = /* @__PURE__ */ new WeakMap();
function g0(e, t) {
  return xg(hk, e, t) ? !1 : (Tx(e, t), p0(e), Yo(e), !0);
}
async function mk(e) {
  var r, n;
  const t = await g_(e, Ht, hn);
  t && (g0(e, t), (n = (r = bt(e).dom) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function gk(e, t = {}) {
  var ze;
  const r = t.__allowStandalone === !0, n = bt(e), i = Pn(e), o = Gn(e), s = l0(e);
  if (s && !r) {
    Ud(e);
    return;
  }
  s && dk(e), n.mode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = n.mode === "stickers", l = a && e.__panoStudio === !0, c = a && !l, d = n.mode !== "cutout";
  if (n.noPreview = t.noPreview === !0, n.openEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), {
    signature: Sp(e)
  }.signature || Sp(e), Nu(e), e == null || e.id, n.mode, e.addDOMWidget, Mu(e), (ze = n.dom) != null && ze.widget || typeof e.addDOMWidget != "function")
    return;
  const f = t.noPreview === !0, p = f ? 0 : 56, w = f ? 0 : Y_, h = document.createElement("div");
  if (Sx(), h.className = "pano-node-preview-dom", h.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), f && h.classList.add("pano-node-preview--no-preview"), h.setAttribute("data-capture-wheel", "true"), h.tabIndex = 0, h.style.cssText = [
    "width:100%",
    f ? "height:auto" : "height:100%",
    w > 0 ? `min-height:${w}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), f) {
    const oe = ml(xu(
      e.addDOMWidget(ku(), "preview", h, Np(e, null))
    ));
    Yo(e), n.dom = { widget: oe, root: h, requestDraw: () => {
    } };
    return;
  }
  const m = document.createElement("div");
  m.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const b = on({ label: "node.surface" });
  b.style.cssText = [
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
  const V = document.createElement("div");
  V.style.cssText = [
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
  ].join(";"), V.textContent = "Connect ERP image", m.appendChild(b), m.appendChild(V), h.appendChild(m);
  const T = im(h), ee = document.createElement("div");
  ee && (ee.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", ee.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", h.appendChild(ee)), _x(e, 120, 120), Yo(e);
  let I = null;
  try {
    fk(e, p, () => {
      var oe, Ie;
      return (Ie = (oe = n.dom) == null ? void 0 : oe.requestDraw) == null ? void 0 : Ie.call(oe);
    }), I = ml(xu(e.addDOMWidget(
      ku(),
      "preview",
      h,
      Np(
        e,
        () => {
          var oe, Ie;
          return (Ie = (oe = n.dom) == null ? void 0 : oe.requestDraw) == null ? void 0 : Ie.call(oe);
        },
        p,
        w,
        !1
      )
    )));
  } catch {
    return;
  }
  const X = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, $ = $w(), J = () => {
    X.destroyed || (X.needsDraw = !0, !X.inTick && !X.raf && (X.raf = requestAnimationFrame(g)));
  }, ye = hg(J), _e = /* @__PURE__ */ _o(a ? {
    ...$g(_n(e)),
    importing: !1,
    dropActive: !1,
    viewUnavailable: !1,
    playable: !1,
    playing: !1,
    ...l ? { status: { shot: "", size: "", note: "" } } : {}
  } : {
    ...Hg(_n(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((oe) => ({ value: oe, label: oe }))
  });
  let me = null;
  if (a && e.__panoSceneStateV2) {
    const [oe, Ie] = [0, 1].map(() => {
      const He = Es(document, "node.playback");
      return He.playsInline = !0, He.preload = "auto", He.crossOrigin = "anonymous", He.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", m.appendChild(He), He;
    }), Ae = on({ label: "node.still" });
    Ae.__panoFrameIdx = 0;
    const Fe = on({ label: "node.port-still" });
    Fe.__panoFrameIdx = 0;
    const je = U_({
      video: oe,
      stickerVideo: Ie,
      createImage: (He, Ue) => {
        const ft = new Image();
        return ft.onload = Ue, ft.onerror = Ue, ft.src = He, ft;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (He) => requestAnimationFrame(He),
        cancelFrame: (He) => cancelAnimationFrame(He)
      },
      readState: () => _n(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: J,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ue;
        if (!(oe.videoWidth > 0 && oe.videoHeight > 0)) return;
        const He = Math.min(1, bx / oe.videoWidth);
        Ae.width = Math.round(oe.videoWidth * He), Ae.height = Math.round(oe.videoHeight * He), (Ue = Ae.getContext("2d")) == null || Ue.drawImage(oe, 0, 0, Ae.width, Ae.height), Ae.__panoFrameIdx += 1, J();
      },
      onStickerCapture: () => {
        var He;
        Ie.videoWidth > 0 && Ie.videoHeight > 0 && (Fe.width = Ie.videoWidth, Fe.height = Ie.videoHeight, (He = Fe.getContext("2d")) == null || He.drawImage(Ie, 0, 0), Fe.__panoFrameIdx += 1, J());
      },
      onChange: () => {
        _e.playing = je.playing, J();
      }
    });
    me = { playback: je, video: oe, still: Ae, stickerVideo: Ie, stickerStill: Fe, stickerSource: "" }, n.playback = me;
  }
  const ve = () => {
    var ft;
    const { playback: oe, still: Ie, stickerStill: Ae } = me, Fe = Fa(m, !!((ft = e.flags) != null && ft.collapsed)), je = oe.source, He = Fe ? Zx(e) : null, Ue = oe.follow({
      shown: Fe,
      sources: Fe ? Jx(e) : [],
      state: _n(e),
      sticker: He
    });
    ((He == null ? void 0 : He.src) || "") !== me.stickerSource && (me.stickerSource = (He == null ? void 0 : He.src) || "", hs(Ae)), oe.source !== je && (hs(Ie), Ie.__panoFrameIdx = 0), _e.playable = Ue, _e.playing = oe.playing;
  }, ue = () => {
    var Ie, Ae;
    const oe = ((Ie = i.ownOutputVideo) == null ? void 0 : Ie.player) ?? null;
    oe && !Fa(m, !!((Ae = e.flags) != null && Ae.collapsed)) && oe.pause(), a && (_e.playable = !!oe && !oe.failed(), _e.playing = !!(oe != null && oe.playing));
  }, we = () => {
    var oe;
    me == null || me.playback.pause(), (oe = i.ownOutputVideo) == null || oe.player.pause();
  };
  let de = null;
  const ne = (a ? K_ : ew)({
    readState: () => _n(e),
    publishLiveState: (oe) => {
      oe ? (de = oe, o.liveState = oe) : (o.liveState === de && (o.liveState = null), de = null), o.liveStateVersion += 1, o.parsedState = null, J();
    },
    commitState: (oe) => {
      var Fe, je, He, Ue;
      const Ie = xr(e, "state_json");
      if (!Ie) return;
      Um(e, oe.active);
      const Ae = Bm(e, oe, String(Ie.value ?? ""));
      Ae !== null && (Ie.value = Ae, (Fe = Ie.callback) == null || Fe.call(Ie, Ae), o.parsedState = null, (je = e.setDirtyCanvas) == null || je.call(e, !0, !0), (Ue = (He = e.graph) == null ? void 0 : He.setDirtyCanvas) == null || Ue.call(He, !0, !0));
    },
    onChange: (oe) => Object.assign(_e, oe)
  }), le = a ? t0(e, (oe = "sync", Ie = null) => {
    var ln;
    if (!a || !e.graph || !ne || ne.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Ut = Kt(e, "external-sticker");
      return ne.apply({
        type: "sync-port",
        value: Lg(e, {
          pose: Ut ? lr(e, "pano_sticker_input_pose", Ie) : null,
          handoff: Kt(e, "sticker-handoff") ? lr(e, "pano_sticker_handoff", Ie) : null
        })
      });
    }
    const Ae = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Ut) => String((Ut == null ? void 0 : Ut.name) || "") === "sticker_image") : -1, Fe = Ae >= 0 ? ((ln = e.getInputLink(Ae)) == null ? void 0 : ln.id) ?? null : null;
    if (Fe == null)
      return ne.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Kt(e, "external-sticker")) return !1;
    const je = lr(e, "pano_sticker_input_pose", Ie), He = Array.isArray(je) ? je[0] : je, Ue = String(lr(e, "pano_sticker_input_state_hash", Ie) ?? ""), ft = n.view || { yaw: 0, pitch: 0 }, yt = _n(e), Dt = (Array.isArray(yt == null ? void 0 : yt.stickers) ? yt.stickers : []).find((Ut) => String((Ut == null ? void 0 : Ut.id) || "") === "sticker_image_1"), At = bl(e, "sticker_image_1", null, { external: !0 }), An = He && typeof He == "object" ? He : Dt || { yaw_deg: ft.yaw, pitch_deg: ft.pitch, hFOV_deg: 30, rot_deg: 0 };
    return ne.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Fe,
        stateHash: Ue,
        pose: An,
        imageWidth: Number((At == null ? void 0 : At.naturalWidth) || (At == null ? void 0 : At.width) || 0),
        imageHeight: Number((At == null ? void 0 : At.naturalHeight) || (At == null ? void 0 : At.height) || 0)
      }
    });
  }) : () => {
  };
  let z = 0;
  const C = async (oe) => {
    if (!a || !ne || !ar(oe)) return !1;
    we();
    const Ie = `asset_${Math.random().toString(16).slice(2, 10)}`, Ae = `st_${Math.random().toString(16).slice(2, 10)}`, Fe = { ...n.view || { yaw: 0, pitch: 0 } };
    z += 1, _e.importing = !0;
    const je = Uo(e, `add:${Ie}`, async () => {
      const He = await Bo(oe), Ue = await Mi(oe, {
        fetchApi: (ft, yt) => hn.fetchApi(ft, yt)
      });
      return L(), ne.apply({
        type: "add-sticker",
        value: {
          stickerId: Ae,
          assetId: Ie,
          asset: Ue,
          imageWidth: He.width,
          imageHeight: He.height,
          yaw_deg: Number(Fe.yaw || 0),
          pitch_deg: Number(Fe.pitch || 0)
        }
      });
    });
    try {
      return await je;
    } catch {
      return !1;
    } finally {
      z = Math.max(0, z - 1), _e.importing = z > 0, J();
    }
  };
  let R = null, E = null, k = null, _ = !1;
  const y = () => {
    var oe;
    return k && (clearTimeout(k), k = null), _ ? (_ = !1, ((oe = ne == null ? void 0 : ne.commitGesture) == null ? void 0 : oe.call(ne)) ?? !1) : !1;
  }, L = () => {
    var Fe, je, He;
    const oe = y(), Ie = (R == null ? void 0 : R.pointerId) ?? (E == null ? void 0 : E.pointerId);
    if (R = null, E = null, Ie != null) {
      try {
        (Fe = b.hasPointerCapture) != null && Fe.call(b, Ie) && ((je = b.releasePointerCapture) == null || je.call(b, Ie));
      } catch {
      }
      b.style.cursor = "grab";
    }
    const Ae = ((He = ne == null ? void 0 : ne.commitGesture) == null ? void 0 : He.call(ne)) ?? !1;
    return oe || Ae;
  }, Z = () => {
    var Fe, je, He;
    const oe = y(), Ie = R == null ? void 0 : R.pointerId;
    if (R = null, Ie != null) {
      try {
        (Fe = b.hasPointerCapture) != null && Fe.call(b, Ie) && ((je = b.releasePointerCapture) == null || je.call(b, Ie));
      } catch {
      }
      b.style.cursor = "grab";
    }
    const Ae = ((He = ne == null ? void 0 : ne.cancelGesture) == null ? void 0 : He.call(ne)) ?? !1;
    return oe || Ae;
  }, he = () => L();
  ne && o.flushers.add(he);
  let ge = null, P = !1;
  if (ee && ne)
    try {
      Hd(), ge = nd(l ? Ow : a ? Nw : bw, {
        model: _e,
        onAction: (oe) => {
          var Fe, je, He;
          if ((oe == null ? void 0 : oe.type) === "toggle-playback") {
            L(), me ? me.playback.toggle() : (Fe = i.ownOutputVideo) == null || Fe.player.toggle(), J();
            return;
          }
          if (we(), (oe == null ? void 0 : oe.type) === "open-editor") {
            L(), a || (_e.aspectOpen = !1), (je = n.openEditor) == null || je.call(n);
            return;
          }
          if (a) {
            if ((oe == null ? void 0 : oe.type) === "add-image-file") {
              C(oe.file);
              return;
            }
            ne.apply(oe) && J();
            return;
          }
          if ((oe == null ? void 0 : oe.type) === "toggle-aspect") {
            _e.aspectOpen = !_e.aspectOpen;
            return;
          }
          if ((oe == null ? void 0 : oe.type) === "close-aspect") {
            _e.aspectOpen = !1;
            return;
          }
          let Ie = oe;
          if ((oe == null ? void 0 : oe.type) === "add-frame") {
            const Ue = n.view || { yaw: 0, pitch: 0, fov: 100 };
            Ie = {
              ...oe,
              ...X_(Ue, {
                width: b.width,
                height: b.height
              })
            };
          } else if ((oe == null ? void 0 : oe.type) === "delete-frame") {
            const Ue = Oi(_n(e));
            Ue && (n.view = Kg(Ue, {
              width: b.width,
              height: b.height
            }));
          }
          const Ae = ((He = n.cutoutFrame) == null ? void 0 : He.safeRect) || null;
          _e.aspectOpen = !1, ne.apply({ ...Ie, safeRect: Ae }) && J();
        }
      }), ge.mount(ee), P = !0;
    } catch {
      ge = null, P = !1;
    }
  const ae = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    me && ve(), J();
  }) : null;
  ae == null || ae.observe(m);
  const g = (oe) => {
    var Ae, Fe, je;
    X.raf = 0, X.inTick = !0;
    let Ie = !1;
    try {
      if (Ie = S.stepInertia(oe), X.needsDraw || Ie) {
        X.needsDraw = !1, me ? ve() : ue();
        const He = l ? tk(e, me) : null, Ue = He ? Lw(He) : null, ft = () => m0(e, _n(e)), yt = He && Fa(m, !!((Ae = e.flags) != null && Ae.collapsed)) ? ik(e, Ue) : null;
        if ((Fe = e.flags) != null && Fe.collapsed || ak(e, b, ye, yt), _e.viewUnavailable = ye.failed, l) {
          const Dt = $({ ...He, display: ok(e, Ue) }, ft);
          Dt && (_e.status = Dt);
        }
      }
    } finally {
      X.inTick = !1;
    }
    (Ie || X.needsDraw) && !X.raf && (X.raf = requestAnimationFrame(g)), vx() && (!n.debugLastTs || oe - n.debugLastTs > 1200) && (n.debugLastTs = oe, n.mode, Mu(e), zo(h), zo(m), zo(b), zo(h.parentElement), zo((je = h.parentElement) == null ? void 0 : je.parentElement), Number(b.width || 0), Number(b.height || 0), void 0);
  }, S = ad({
    getView: () => (n.view || (n.view = { yaw: 0, pitch: 0, fov: 100 }), n.view),
    setView: (oe) => {
      n.view = oe;
    },
    getViewportSize: () => {
      const oe = b.getBoundingClientRect();
      return {
        w: Math.max(1, Number(oe.width || b.clientWidth || 0)),
        h: Math.max(1, Number(oe.height || b.clientHeight || 0))
      };
    },
    getInvert: () => {
      const oe = vp();
      return {
        x: oe.invert_view_x ? -1 : 1,
        y: oe.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      J();
    }
  }), O = a ? m : h, v = (oe) => {
    const Ie = b.getBoundingClientRect();
    return {
      x: (Number(oe.clientX) - Ie.left) * (b.width / Math.max(1, Ie.width)),
      y: (Number(oe.clientY) - Ie.top) * (b.height / Math.max(1, Ie.height))
    };
  }, j = (oe) => {
    var Fe, je;
    if (!a || l || !d) return;
    const Ie = _n(e), Ae = hp(
      bu(Ie, vl(e)),
      String(((Fe = Ie == null ? void 0 : Ie.active) == null ? void 0 : Fe.selected_sticker_id) || ""),
      v(oe),
      Au(e, b.width, b.height)
    );
    if (!Ae) {
      b.style.cursor = "grab";
      return;
    }
    if (((je = Ae.item) == null ? void 0 : je.locked) === !0) {
      b.style.cursor = "default";
      return;
    }
    b.style.cursor = Ae.hit.cursor || "default";
  };
  b.addEventListener("pointerdown", (oe) => {
    var ft, yt, Dt, At, An, qe, ln, Ut, hi, Br, mi;
    if (!Un(oe, O) || oe.button !== 0) return;
    if (!a) {
      const sn = Oi(_n(e)), bn = n.cutoutFrame;
      if (!sn) {
        (ft = h.focus) == null || ft.call(h, { preventScroll: !0 }), (yt = b.setPointerCapture) == null || yt.call(b, oe.pointerId), b.style.cursor = "grabbing", S.startDrag(oe.clientX, oe.clientY, oe.pointerId);
        return;
      }
      if (sn.locked === !0 || !bn || !ne) return;
      const Yr = v(oe);
      let hr;
      if (oe.shiftKey) {
        const nr = Ug({
          frame: bn,
          point: Yr,
          startRollDeg: Number(sn.roll_deg ?? sn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!nr) return;
        hr = { kind: "roll", pointerId: oe.pointerId, rollGesture: nr };
      } else {
        const nr = ((Dt = _n(e)) == null ? void 0 : Dt.ui_settings) || vp();
        hr = {
          kind: "pan",
          pointerId: oe.pointerId,
          startPoint: Yr,
          startShot: { ...sn },
          focalPx: Di(bn, sn),
          invertX: nr.invert_view_x === !0,
          invertY: nr.invert_view_y === !0
        };
      }
      L(), (At = h.focus) == null || At.call(h, { preventScroll: !0 }), (An = b.setPointerCapture) == null || An.call(b, oe.pointerId), b.style.cursor = "grabbing", ne.beginGesture(), R = hr;
      return;
    }
    if (!d) return;
    const Ie = v(oe), Ae = _n(e), Fe = String(((qe = Ae == null ? void 0 : Ae.active) == null ? void 0 : qe.selected_sticker_id) || ""), je = Au(e, b.width, b.height);
    (ln = h.focus) == null || ln.call(h, { preventScroll: !0 });
    const He = () => hp(bu(Ae, vl(e)), Fe, Ie, je);
    let Ue = l ? null : He();
    if (Ue && (me != null && me.playback.playing) && (we(), Ue = He()), Ue && ne) {
      if (S.stopMotion(), L(), String(((Ut = Ue.item) == null ? void 0 : Ut.id) || "") !== Fe && ne.apply({ type: "select-sticker", id: Ue.item.id }), ((hi = Ue.item) == null ? void 0 : hi.locked) === !0) {
        J();
        return;
      }
      const sn = Ie, bn = Ue.geometry.center;
      E = {
        active: !0,
        kind: Ue.hit.kind,
        pointerId: oe.pointerId,
        startPoint: sn,
        startCenter: { ...bn },
        startSticker: { ...Ue.item },
        startDistance: Math.max(1, Math.hypot(sn.x - bn.x, sn.y - bn.y)),
        startAngle: Math.atan2(sn.y - bn.y, sn.x - bn.x),
        projection: je
      }, ne.beginGesture(), (Br = b.setPointerCapture) == null || Br.call(b, oe.pointerId), b.style.cursor = Ue.hit.kind === "rotate" ? "grabbing" : Ue.hit.kind === "move" ? "move" : Ue.hit.cursor, J();
      return;
    }
    (mi = b.setPointerCapture) == null || mi.call(b, oe.pointerId), b.style.cursor = "grabbing", S.startDrag(oe.clientX, oe.clientY, oe.pointerId);
  }), b.addEventListener("pointermove", (oe) => {
    if (!a) {
      if (!R) {
        if (!S.state.drag.active) return;
        Un(oe, O), S.moveDrag(oe.clientX, oe.clientY, "pano");
        return;
      }
      if (R.pointerId !== oe.pointerId || !ne) return;
      if (Un(oe, O), R.kind === "pan") {
        const Ae = v(oe);
        ne.updateGesture({
          type: "pan-camera",
          startShot: R.startShot,
          dx: Ae.x - R.startPoint.x,
          dy: Ae.y - R.startPoint.y,
          focalPx: R.focalPx,
          invertX: R.invertX,
          invertY: R.invertY
        });
        return;
      }
      const Ie = Bg(R.rollGesture, v(oe), oe);
      if (!Ie) return;
      R.rollGesture = Ie.gesture, ne.updateGesture({ type: "set-roll", value: Ie.rollDeg });
      return;
    }
    if (!E && !S.state.drag.active) {
      j(oe);
      return;
    }
    if (E) {
      if (E.pointerId !== oe.pointerId || !ne) return;
      Un(oe, O);
      const Ie = v(oe);
      let Ae = E.startSticker;
      if (E.kind === "move")
        Ae = Gw(
          E.startSticker,
          {
            x: E.startCenter.x + Ie.x - E.startPoint.x,
            y: E.startCenter.y + Ie.y - E.startPoint.y
          },
          E.projection
        );
      else if (E.kind === "scale") {
        const Fe = Math.hypot(Ie.x - E.startCenter.x, Ie.y - E.startCenter.y);
        Ae = Kw(E.startSticker, E.startDistance, Fe);
      } else if (E.kind === "rotate") {
        const Fe = Math.atan2(Ie.y - E.startCenter.y, Ie.x - E.startCenter.x);
        Ae = Ww(E.startSticker, E.startAngle, Fe, oe.shiftKey === !0);
      }
      ne.updateGesture({ type: "set-transform", value: Ae }), J();
      return;
    }
    !d || !S.state.drag.active || (Un(oe, O), S.moveDrag(oe.clientX, oe.clientY, "pano"));
  });
  const H = () => {
    var Ie, Ae;
    if (!R && !E) {
      if (!S.state.drag.active) return;
      S.endDrag(), b.style.cursor = "grab", J();
      return;
    }
    if (!ne) return;
    const oe = (R == null ? void 0 : R.pointerId) ?? (E == null ? void 0 : E.pointerId);
    R = null, E = null;
    try {
      (Ie = b.hasPointerCapture) != null && Ie.call(b, oe) && ((Ae = b.releasePointerCapture) == null || Ae.call(b, oe));
    } catch {
    }
    ne.cancelGesture(), b.style.cursor = "grab", J();
  }, D = (oe, Ie = !1) => {
    var Ae, Fe, je, He;
    if (!a) {
      if (!R) {
        if (!S.state.drag.active) return;
        Un(oe, O), (Ae = b.releasePointerCapture) == null || Ae.call(b, oe.pointerId), b.style.cursor = "grab", S.endDrag(), J();
        return;
      }
      if (R.pointerId !== oe.pointerId || !ne) return;
      Un(oe, O), R = null, (Fe = b.releasePointerCapture) == null || Fe.call(b, oe.pointerId), b.style.cursor = "grab", Ie ? ne.cancelGesture() : ne.commitGesture(), j(oe), J();
      return;
    }
    if (E) {
      if (E.pointerId !== oe.pointerId || !ne) return;
      Un(oe, O), E = null, (je = b.releasePointerCapture) == null || je.call(b, oe.pointerId), b.style.cursor = "grab", Ie ? ne.cancelGesture() : ne.commitGesture(), J();
      return;
    }
    !d || !S.state.drag.active || (Un(oe, O), (He = b.releasePointerCapture) == null || He.call(b, oe.pointerId), b.style.cursor = "grab", S.endDrag(), J());
  };
  b.addEventListener("pointerup", D), b.addEventListener("pointercancel", (oe) => D(oe, !0)), b.addEventListener("lostpointercapture", H), b.addEventListener("pointerleave", (oe) => {
    !a && R || E || S.state.drag.active && D(oe);
  });
  const A = (oe) => {
    const Ie = document.activeElement;
    if (Ie !== h && !h.contains(Ie)) return;
    if (oe.key === "Escape" && (R || E) && ne) {
      H(), Cu(oe);
      return;
    }
    if (!a || l || oe.key !== "Delete" && oe.key !== "Backspace" || !ne) return;
    const Ae = oe.target, Fe = String((Ae == null ? void 0 : Ae.tagName) || "").toUpperCase();
    Fe === "INPUT" || Fe === "TEXTAREA" || Ae != null && Ae.isContentEditable || _e.canDelete === !0 && (we(), L(), ne.apply({ type: "delete-selected" }) && J(), Cu(oe));
  };
  window.addEventListener("keydown", A, !0);
  const F = mx({
    requestFrame: (oe) => requestAnimationFrame(oe),
    cancelFrame: (oe) => cancelAnimationFrame(oe),
    restore: (oe) => uk(oe)
  }), x = (oe) => {
    var Ae, Fe, je, He, Ue, ft;
    if (!Un(oe, O)) return;
    if (!a) {
      const yt = Oi(_n(e));
      if (yt && yt.locked !== !0 && ne) {
        const Dt = Ya(oe);
        Dt !== 0 && (_ || (L(), ne.beginGesture(), _ = !0), ne.updateGesture({
          type: "step-fov",
          direction: Dt
        }) ? (k && clearTimeout(k), k = setTimeout(y, 180), J()) : ne.hasGestureChanges() || (ne.cancelGesture(), _ = !1));
      } else if (!yt) {
        const Dt = Mp();
        S.applyWheelEvent(oe) && J(), F.schedule(Dt);
      }
      (Ae = oe.preventDefault) == null || Ae.call(oe), (Fe = oe.stopPropagation) == null || Fe.call(oe), (je = oe.stopImmediatePropagation) == null || je.call(oe);
      return;
    }
    if (!d) return;
    const Ie = Mp();
    S.applyWheelEvent(oe) && J(), (He = oe.preventDefault) == null || He.call(oe), (Ue = oe.stopPropagation) == null || Ue.call(oe), (ft = oe.stopImmediatePropagation) == null || ft.call(oe), F.schedule(Ie);
  }, G = a ? [m, b] : [m];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((oe) => {
    G.forEach((Ie) => Ie.addEventListener(oe, x, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((oe) => {
    b.addEventListener(oe, (Ie) => Un(Ie, O)), m.addEventListener(oe, (Ie) => Un(Ie, O));
  });
  const Y = xr(e, "state_json");
  let fe = null, Se = null;
  Y && !Y.__panoPreviewPatchedCb && (fe = Y.callback, Se = (oe) => {
    const Ie = fe ? fe(oe) : void 0;
    return J(), Ie;
  }, Y.callback = Se, Y.__panoPreviewPatchedCb = Se);
  const ke = xr(e, "bg_color");
  let ce = null, xe = null;
  ke && !ke.__panoPreviewPatchedCb && (ce = ke.callback, xe = (oe) => {
    const Ie = ce ? ce(oe) : void 0;
    return J(), Ie;
  }, ke.callback = xe, ke.__panoPreviewPatchedCb = xe);
  const B = l ? xr(e, "output_size") : null, pe = B == null ? void 0 : B.callback, W = B ? (oe) => {
    const Ie = pe ? pe(oe) : void 0;
    return J(), Ie;
  } : null;
  B && (B.callback = W);
  const se = e.onRemoved, K = e.onResize, q = e.onExecuted, U = e.onDragOver, N = e.onDragDrop;
  let Q = null;
  const M = () => {
    a && (_e.dropActive = !0, Q && clearTimeout(Q), Q = setTimeout(() => {
      Q = null, _e.dropActive = !1;
    }, 140));
  }, re = c ? function(oe) {
    return (U ? U.apply(this, arguments) : !1) === !0 ? !0 : Kd(oe == null ? void 0 : oe.dataTransfer) ? (M(), !0) : !1;
  } : null, te = c ? function(oe) {
    var Fe;
    if ((N ? N.apply(this, arguments) : !1) === !0) return !0;
    const Ae = Array.from(((Fe = oe == null ? void 0 : oe.dataTransfer) == null ? void 0 : Fe.files) || []).find((je) => ar(je));
    return Ae ? (Q && clearTimeout(Q), Q = null, _e.dropActive = !1, C(Ae), !0) : !1;
  } : null;
  c && (e.onDragOver = re, e.onDragDrop = te);
  const be = c ? hx(h, {
    onActive: (oe) => {
      if (oe) {
        M();
        return;
      }
      Q && clearTimeout(Q), Q = null, _e.dropActive = !1;
    },
    onDrop: (oe) => {
      C(oe);
    }
  }) : () => {
  }, Ne = function(oe) {
    i.outputFromRun = !0;
    const Ie = g0(e, oe);
    ii(e, Ie ? "executed" : "sync", oe), J();
    const Ae = q ? q.apply(this, arguments) : void 0;
    return Yo(e), Ae;
  };
  e.onExecuted = Ne;
  const Ee = e.onConnectionsChange, Ve = function(oe, Ie) {
    const Ae = rp(e, oe, Ie, [...Pd, ...Ad]), Fe = rp(e, oe, Ie, fr), je = arguments, He = Ee ? Ee.apply(this, je) : void 0, Ue = () => {
      X.destroyed || (Fe && Vx(e), Ae && ii(e, "connection-change"), Yo(e), J());
    };
    return Ue(), queueMicrotask(Ue), He;
  };
  e.onConnectionsChange = Ve;
  const We = function() {
    const oe = K ? K.apply(this, arguments) : void 0;
    return bt(this).userResized = !0, J(), oe;
  };
  e.onResize = We;
  const Ge = function() {
    return Ce(), Pu.unregister(this), se ? se.apply(this, arguments) : void 0;
  };
  e.onRemoved = Ge;
  const Ce = () => {
    var oe, Ie, Ae, Fe, je, He, Ue;
    X.destroyed = !0, (oe = ae == null ? void 0 : ae.disconnect) == null || oe.call(ae), a ? L() : Z(), b.removeEventListener("lostpointercapture", H), be(), T(), window.removeEventListener("keydown", A, !0), o.flushers.delete(he), (Ie = ne == null ? void 0 : ne.destroy) == null || Ie.call(ne), (Ae = ge == null ? void 0 : ge.unmount) == null || Ae.call(ge), me && (me.playback.dispose(), me.video.remove(), me.stickerVideo.remove(), n.playback === me && (n.playback = null)), ye.dispose(), n.scene = null, (je = (Fe = n.rasterCache) == null ? void 0 : Fe.dispose) == null || je.call(Fe), n.rasterCache = null, n.rasterReady = null, le(), F.dispose(), Q && clearTimeout(Q), Q = null, Wd.disposeOwner(e), uo(e), Yd(e), X.raf && cancelAnimationFrame(X.raf), X.raf = 0, ((He = n.cutout) == null ? void 0 : He.session) === ne && (n.cutout = null), ((Ue = n.stickers) == null ? void 0 : Ue.session) === ne && (n.stickers = null), n.cutoutState = null, n.stickersState = null, n.cutoutFrame = null, n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.dom = null, n.restore = null, e.onResize === We && (e.onResize = K), e.onExecuted === Ne && (e.onExecuted = q), e.onConnectionsChange === Ve && (e.onConnectionsChange = Ee), Se && (Y == null ? void 0 : Y.callback) === Se && (Y.callback = fe), Se && (Y == null ? void 0 : Y.__panoPreviewPatchedCb) === Se && delete Y.__panoPreviewPatchedCb, xe && (ke == null ? void 0 : ke.callback) === xe && (ke.callback = ce), xe && (ke == null ? void 0 : ke.__panoPreviewPatchedCb) === xe && delete ke.__panoPreviewPatchedCb, W && B.callback === W && (B.callback = pe), e.onDragOver === re && (e.onDragOver = U), e.onDragDrop === te && (e.onDragDrop = N), e.onRemoved === Ge && (e.onRemoved = se);
  };
  n.restore = Ce, n.cutout = ne && P && !a ? { session: ne, model: _e } : null, n.stickers = ne && P && a ? { session: ne, model: _e } : null, n.dom = {
    widget: I,
    root: h,
    canvas: b,
    requestDraw: J,
    state: X,
    emptyHintEl: V,
    nodeSurface: n.cutout
  }, Pu.register(e), e.graph && ii(e, "attach"), J();
}
function Pp(e, t = {}) {
  c0(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Ap(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (l0(e) && !r) {
    Ud(e);
    return;
  }
  c0(e).attach(t);
}
function yk(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function bk(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, s = Number(e == null ? void 0 : e.width), a = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(s) ? s : 0) * o, c = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Number(r), u = d > 0 ? d : 1 / 0, f = Math.max(l, c);
  let p = f > 0 ? Math.min(1, u / f) : 1;
  return n && l > 0 && c > 0 && (p = Math.min(p, n.width * o / l, n.height * o / c)), {
    width: Math.max(1, Math.round(l * p)),
    height: Math.max(1, Math.round(c * p))
  };
}
function vk({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: r = null,
  onFallback: n = null
} = {}) {
  var p;
  const i = typeof r == "function" ? r : () => {
  }, o = typeof n == "function" ? n : () => {
  };
  let s = !1, a = null;
  const l = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, c = () => {
    const w = l();
    return w === a || (a = w, i(w)), w;
  }, d = () => c();
  return (p = t == null ? void 0 : t.addEventListener) == null || p.call(t, "fullscreenchange", d), c(), { toggle: async () => {
    var w;
    if (s || !e || !t) return !1;
    if (l()) {
      try {
        await ((w = t.exitFullscreen) == null ? void 0 : w.call(t));
      } catch {
      }
      return s ? !1 : (c(), l());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), s) return !1;
        if (l())
          return c(), !0;
      } catch {
      }
    return s || (o(), c()), !1;
  }, isActive: l, destroy: () => {
    var w, h, m;
    if (!s) {
      if (s = !0, (w = t == null ? void 0 : t.removeEventListener) == null || w.call(t, "fullscreenchange", d), l())
        try {
          const b = (h = t.exitFullscreen) == null ? void 0 : h.call(t);
          (m = b == null ? void 0 : b.catch) == null || m.call(b, () => {
          });
        } catch {
        }
      a = !1, i(!1);
    }
  } };
}
const Sk = { class: "pano-preview-node-surface" }, _k = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Le(), Re("div", Sk, [
      Be(tn, {
        icon: e.model.fullscreen ? rt(Ke).fullscreen_close : rt(Ke).fullscreen,
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
      e.model.viewUnavailable ? (Le(), Ln(ql, { key: 0 })) : ot("", !0)
    ]));
  }
}, pa = 140, wk = 180, Cp = 40, Lc = 10;
function Ip(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function Ep(e, t) {
  const r = Ip(e), n = Ip(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function Op(e) {
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
  return typeof ((o = hn) == null ? void 0 : o.apiURL) == "function" ? hn.apiURL(i) : i;
}
function fo(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return fo(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Op({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const r of e) {
      const n = fo(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Op(e);
}
function y0(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function xk(e) {
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
function Iu(e) {
  var i;
  const t = (i = cr) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Ep(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (Ep(o, r)) return t[o];
  return null;
}
function kk(e) {
  var n, i;
  const t = Iu(e == null ? void 0 : e.id), r = [
    (n = t == null ? void 0 : t.ui) == null ? void 0 : n.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of r)
    if (Array.isArray(o))
      for (const s of o) {
        const a = fo(s);
        if (a && /\.mp4(\?|$)/i.test(a) || a && String((s == null ? void 0 : s.format) || "").toLowerCase() === "video/mp4") return a;
      }
  return "";
}
function Mk(e, t = "erp_image") {
  var p, w, h, m, b, V, T;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((ee) => String((ee == null ? void 0 : ee.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((ee, I) => String((ee == null ? void 0 : ee.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(I))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const s = (h = (w = (p = cr) == null ? void 0 : p.graph) == null ? void 0 : w.getNodeById) == null ? void 0 : h.call(w, o), a = Iu(o), l = Iu(e == null ? void 0 : e.id), c = [
    (m = l == null ? void 0 : l.ui) == null ? void 0 : m.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    a == null ? void 0 : a.images,
    (b = a == null ? void 0 : a.ui) == null ? void 0 : b.pano_input_images,
    a == null ? void 0 : a.pano_input_images
  ];
  for (const ee of c)
    if (Array.isArray(ee))
      for (const I of ee) {
        const X = fo(I);
        if (X) return X;
      }
  let d = [];
  try {
    d = typeof ((V = cr) == null ? void 0 : V.getNodeImageUrls) == "function" ? cr.getNodeImageUrls(s) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const ee of d) {
      const I = fo(ee);
      if (I) return I;
    }
  if (s) {
    const ee = Array.isArray(s == null ? void 0 : s.imgs) ? s.imgs : [];
    for (const I of ee) {
      const X = fo(I);
      if (X) return X;
    }
  }
  const u = (T = s == null ? void 0 : s.widgets) == null ? void 0 : T.find((ee) => String((ee == null ? void 0 : ee.name) || "").toLowerCase() === "image"), f = String((u == null ? void 0 : u.value) || "").trim();
  return f ? hn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function Rc(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function Fp(e, t, r, n, i, o, s) {
  var c, d, u;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !y0(o) || r <= 1 || n <= 1) {
    Rc(t, r, n);
    return;
  }
  if (s.failed) {
    Rc(t, r, n);
    return;
  }
  const a = Number(((u = (d = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : d.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, l = s.render({
    width: r,
    height: n,
    camera: ll(i, r, n),
    background: { media: o, revision: xk(o), coverage: a },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : Rc(t, r, n);
}
function Tp(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class Nk {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = hg(() => this.requestDraw()), this.controller = ad({
      getView: () => this.view,
      setView: (n) => {
        this.view = {
          yaw: Gt(Number((n == null ? void 0 : n.yaw) || 0)),
          pitch: Oe(Number((n == null ? void 0 : n.pitch) || 0), -89.9, 89.9),
          fov: Oe(Number((n == null ? void 0 : n.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var i, o, s, a;
        const n = (o = (i = this.canvas) == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : o.call(i);
        return {
          w: Math.max(1, Number((n == null ? void 0 : n.width) || ((s = this.canvas) == null ? void 0 : s.clientWidth) || 0)),
          h: Math.max(1, Number((n == null ? void 0 : n.height) || ((a = this.canvas) == null ? void 0 : a.clientHeight) || 0))
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
    const r = ((o = (i = (n = this.node) == null ? void 0 : n.widgets) == null ? void 0 : i.find) == null ? void 0 : o.call(i, (s) => (s == null ? void 0 : s.name) === "coverage")) || null;
    r && (this.orig.coverageWidgetCallback = typeof r.callback == "function" ? r.callback.bind(r) : null, r.callback = (...s) => {
      const a = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...s) : void 0;
      return t.requestDraw(), a;
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
        `min-height:${pa}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = on({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const r = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return pa;
        },
        getHeight() {
          return pa;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = ml(xu(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(pa, Number(o.minHeight || 0)),
            minWidth: Math.max(wk, Number(o.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, r, n, i, o, s;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return Hd(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ _o({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = vk({
        root: this.root,
        documentRef: document,
        onChange: (a) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = a), this.requestDraw();
        },
        onFallback: () => {
          var a, l;
          return (l = (a = this.options).onOpen) == null ? void 0 : l.call(a, this.node);
        }
      }), this.surfaceApp = nd(_k, {
        model: this.surfaceModel,
        onAction: (a) => {
          var l, c;
          (a == null ? void 0 : a.type) === "toggle-fullscreen" && ((c = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null || c.call(l));
        }
      }), this.surfaceApp.mount(this.surfaceHost), $r(this.node).surface = {
        mounted: !0,
        toggleFullscreen: () => {
          var a, l;
          return (l = (a = this.fullscreenController) == null ? void 0 : a.toggle) == null ? void 0 : l.call(a);
        }
      }, !0;
    } catch {
      return (r = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || r.call(t), this.fullscreenController = null, (i = (n = this.surfaceApp) == null ? void 0 : n.unmount) == null || i.call(n), this.surfaceApp = null, (s = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || s.call(o), this.surfaceHost = null, this.surfaceModel = null, $r(this.node).surface = null, !1;
    }
  }
  bindDomInput(t, r) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = im(r), t.addEventListener("pointerdown", (o) => {
      var s, a, l;
      o.button === 0 && ((s = r.focus) == null || s.call(r, { preventScroll: !0 }), (a = t.setPointerCapture) == null || a.call(t, o.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (l = o.stopImmediatePropagation) == null || l.call(o));
    }), t.addEventListener("pointermove", (o) => {
      var s;
      this.controller.state.drag.active && (this.controller.moveDrag(o.clientX, o.clientY, "pano"), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
    const n = (o) => {
      var s, a;
      this.controller.state.drag.active && ((s = t.releasePointerCapture) == null || s.call(t, o.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    };
    t.addEventListener("pointerup", n), t.addEventListener("pointercancel", n), r.addEventListener("wheel", (o) => {
      var s;
      this.controller.applyWheelEvent(o), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (o) => {
      var s;
      this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o);
    }), r.addEventListener("keydown", (o) => {
      var s;
      yk(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !y0(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? Fa(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = cr.canvas) != null && n.graph) || this.node.graph === cr.canvas.graph);
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(r) {
      const n = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(r), n;
    }, this.node.onMouseDown = function(r, n) {
      var s;
      const i = t.localPoint(n);
      if (!i) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const o = t.getLegacyPreviewRect();
      return Tp(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(r, n) {
      var s;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const i = t.localPoint(n);
      if (!i) return !0;
      const o = t.getLegacyPreviewRect();
      return t.controller.moveDrag(i.x - o.x, i.y - o.y, "pano"), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var r;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (r = this.setDirtyCanvas) == null || r.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(r, n, i) {
      var l, c, d, u, f, p;
      const o = Gx(this, r, n, i), s = t.getLegacyPreviewRect();
      if (!o || !Tp(o.x, o.y, s))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const a = t.controller.applyWheelEvent(r, typeof n == "number" ? n : 0);
      return Number(((c = t.view) == null ? void 0 : c.fov) || 100), a && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (u = r == null ? void 0 : r.preventDefault) == null || u.call(r), (f = r == null ? void 0 : r.stopPropagation) == null || f.call(r), (p = r == null ? void 0 : r.stopImmediatePropagation) == null || p.call(r), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var n, i, o, s;
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - Lc * 2), r = Math.max(60, Number(((s = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : s[1]) || 0) - Cp - Lc);
    return { x: Lc, y: Cp, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), Fp(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? pg : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = bk(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, s;
    const t = kk(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const a = Es(document, "preview-node.video");
      a.muted = !0, a.loop = !0, a.preload = "auto", a.playsInline = !0, a.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = a, this.requestDraw());
      }, c = () => this.requestDraw();
      a.addEventListener("loadedmetadata", l), a.addEventListener("loadeddata", l), a.addEventListener("timeupdate", c), a.addEventListener("play", c), a.addEventListener("pause", c), a.src = t, a.load(), this.mediaCleanup = () => {
        a.pause(), a.removeEventListener("loadedmetadata", l), a.removeEventListener("loadeddata", l), a.removeEventListener("timeupdate", c), a.removeEventListener("play", c), a.removeEventListener("pause", c), a.removeAttribute("src"), a.load();
      };
      return;
    }
    const r = Mk(this.node, this.imageInputName);
    if (!r) {
      (o = this.mediaCleanup) == null || o.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
      return;
    }
    if (r === this.imgSrc && this.img) return;
    (s = this.mediaCleanup) == null || s.call(this), this.mediaCleanup = null, this.imgSrc = r;
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), Fp(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, s, a, l, c, d, u, f, p, w, h, m, b;
    if (((r = Ng(this.node)) == null ? void 0 : r.runtime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (s = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || s.call(o), this.fullscreenController = null, (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (u = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || u.call(d), this.surfaceHost = null, this.surfaceModel = null, $r(this.node).surface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (w = (p = this.root) == null ? void 0 : p.remove) == null || w.call(p);
    } catch {
    }
    try {
      o0(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((b = (m = (h = this.node) == null ? void 0 : h.widgets) == null ? void 0 : m.find) == null ? void 0 : b.call(m, (V) => (V == null ? void 0 : V.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), $r(this.node).runtime = null;
  }
}
function Pk(e, t = {}) {
  if (!e || $r(e).runtime) return;
  const r = new Nk(e, t);
  $r(e).runtime = r, r.attach();
}
function b0(e, t, r) {
  if (!(e != null && e.prototype) || typeof r != "function") return;
  const n = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[n]) return;
  e[n] = !0;
  const i = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const a = i ? i.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return a;
  };
  const o = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const a = o ? o.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return a;
  };
  const s = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const a = s ? s.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return a;
  };
}
function qd(e) {
  return !!(e != null && e.prototype);
}
function ks(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function Ak(e, t = {}) {
  qd(e) || Pk(e, {
    ...t,
    onOpen: ks(e, t.onOpen)
  });
}
function Ck(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!qd(e)) {
    Ap(e, {
      ...n,
      onOpen: ks(e, t.onOpen)
    });
    return;
  }
  b0(e, "stickers_node_preview", (i) => {
    Ap(i, {
      ...n,
      onOpen: ks(i, t.onOpen)
    });
  });
}
function Ik(e, t = {}) {
  if (!qd(e)) {
    Pp(e, {
      ...t,
      onOpen: ks(e, t.onOpen)
    });
    return;
  }
  b0(e, "cutout_preview", (r) => {
    Pp(r, {
      ...t,
      onOpen: ks(r, t.onOpen)
    });
  });
}
const Fn = {
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
}, Dr = "pen";
function Dp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function Ek({ requestFrame: e, cancelFrame: t, tasks: r }) {
  const n = /* @__PURE__ */ new Set();
  let i = null;
  function o() {
    i = null;
    for (const [s, a] of Object.entries(r))
      n.delete(s) && a();
  }
  return {
    request(s) {
      n.add(s), i ?? (i = e(o));
    },
    cancel() {
      n.clear(), i !== null && t(i), i = null;
    }
  };
}
const pt = Object.freeze({
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
}), Ok = new Set(Object.values(pt));
function Fk({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, s = !1, a = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), d = 1, u = 0;
  function f(h) {
    try {
      h();
    } catch (m) {
      i(m);
    }
  }
  function p() {
    !o && !s && !a && (o = e(w));
  }
  function w(h) {
    o = 0, s = !0;
    try {
      const m = c;
      c = /* @__PURE__ */ new Map();
      for (const V of m.values()) f(() => V(h));
      if (a) return;
      const b = l;
      l = /* @__PURE__ */ new Set(), (b.size || n()) && f(() => r(h, b));
    } finally {
      s = !1;
    }
    (l.size || c.size || n()) && p();
  }
  return {
    requestDraw(h) {
      if (!Ok.has(h)) throw new Error(`Unknown draw reason: ${h}`);
      h === pt.STATE && (u += 1), l.add(h), p();
    },
    requestFrame(h) {
      const m = d++;
      return c.set(m, h), p(), m;
    },
    cancelFrame(h) {
      c.delete(h);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      p();
    },
    get stateRevision() {
      return u;
    },
    // Whether a frame is pending.
    get pending() {
      return o !== 0;
    },
    stop() {
      a = !0, o && t(o), o = 0, c.clear(), l.clear();
    }
  };
}
const Tk = { class: "pano-floating-right" }, Dk = {
  key: 0,
  class: "pano-floating-space"
}, Lk = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, Rk = ["data-settled"], Vk = ["data-ready", "data-settled"], $k = ["aria-label", "data-tip"], zk = {
  key: 1,
  class: "pano-camera-preview-label"
}, jk = {
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
    return (t, r) => (Le(), Re(Ze, null, [
      Me("div", Tk, [
        e.space ? jr((Le(), Re("div", Dk, [
          Me("div", Lk, [
            (Le(!0), Re(Ze, null, kt(e.space.modes, (n) => (Le(), Ln(tn, {
              key: n.key,
              "extra-class": { active: n.key === e.space.mode },
              icon: n.icon,
              label: n.label,
              tip: n.tip,
              pressed: n.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": n.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Be(tn, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Ti, e.space.visible]
        ]) : ot("", !0),
        (Le(!0), Re(Ze, null, kt(e.buttons, (n) => (Le(), Ln(tn, {
          key: n.action,
          icon: n.icon,
          label: n.label,
          tip: n.tip,
          pressed: n.pressed,
          attrs: { "data-action": n.action, disabled: n.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      jr(Me("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Me("div", {
          class: mt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Et({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          r[0] || (r[0] = Me("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            Me("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (Le(), Re("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Be(zt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, $k)) : ot("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Le(), Re("div", zk, nt(e.preview.label || "Preview unavailable"), 1)) : ot("", !0)
        ], 14, Vk)
      ], 8, Rk), [
        [Ti, e.preview.visible]
      ])
    ], 64));
  }
}, Hk = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, Gk = ["y2", "transform"], Kk = ["transform"], Wk = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = dt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => jr((Le(), Re("div", {
      class: mt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Le(), Re("svg", Hk, [
        o[1] || (o[1] = Me("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Le(!0), Re(Ze, null, kt(rt(r), (s) => (Le(), Re("line", {
          key: s,
          class: mt(["pano-frame-roll-knob-tick", { zero: s === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: s % 45 === 0 ? 7 : 6,
          transform: `rotate(${s} 20 20)`
        }, null, 10, Gk))), 128)),
        Me("g", { transform: n.value }, [...o[0] || (o[0] = [
          Me("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, Kk),
        o[2] || (o[2] = Me("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Ti, e.model.visible === !0]
    ]);
  }
}, Uk = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Le(), Re("div", {
      class: mt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Be(qg, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Be(tn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Be(Wk, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, Bk = ["aria-label"], Yk = { class: "pano-canvas-confirm-title" }, qk = { class: "pano-canvas-confirm-text" }, Xk = { class: "pano-canvas-confirm-actions" }, Jk = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Zk = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Jt(null), n = /* @__PURE__ */ Jt(null);
    let i = null;
    function o() {
      const u = n.value;
      return u ? Array.from(u.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((f) => f instanceof HTMLElement ? !f.hidden && f.tabIndex >= 0 && f.offsetParent !== null : !1) : [];
    }
    function s(u) {
      const f = n.value;
      if (!f) return;
      const p = f.querySelector(`[data-action='${u}']`);
      p instanceof HTMLButtonElement && p.click();
    }
    function a() {
      var h;
      const u = n.value;
      if (!u) return;
      const f = u.querySelector("[data-action='confirm-accept']");
      if (f instanceof HTMLElement) {
        f.focus();
        return;
      }
      const w = o()[0] || u;
      (h = w == null ? void 0 : w.focus) == null || h.call(w);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function c(u) {
      var b;
      if (u.defaultPrevented) return;
      if (u.key === "Escape") {
        u.preventDefault(), u.stopPropagation(), s("confirm-cancel");
        return;
      }
      if (u.key !== "Tab") return;
      const f = o(), p = n.value;
      if (!f.length) {
        u.preventDefault(), (b = p == null ? void 0 : p.focus) == null || b.call(p);
        return;
      }
      const w = f[0], h = f[f.length - 1], m = document.activeElement;
      if (u.shiftKey) {
        (m === w || m === p || !(p != null && p.contains(m))) && (u.preventDefault(), h.focus());
        return;
      }
      (m === h || !(p != null && p.contains(m))) && (u.preventDefault(), w.focus());
    }
    function d(u) {
      u.target === r.value && s("confirm-cancel");
    }
    return Ci(() => t.model.visible, (u, f) => {
      if (u) {
        i = document.activeElement, El(() => {
          a();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), Cs(() => {
      l();
    }), (u, f) => e.model.visible === !0 ? (Le(), Re("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Ct(d, ["self"])
    }, [
      Me("div", {
        ref_key: "cardRef",
        ref: n,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: c
      }, [
        Me("div", Yk, nt(e.model.title), 1),
        Me("div", qk, nt(e.model.text), 1),
        Me("div", Xk, [
          f[0] || (f[0] = Me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Me("button", Jk, nt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, Bk)
    ], 512)) : ot("", !0);
  }
}, Qk = ["data-paint-pane"], eM = ["hidden"], tM = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], nM = ["aria-pressed", "disabled"], rM = ["hidden"], iM = { class: "pano-paint-color-pop-head" }, oM = { class: "pano-paint-color-field" }, sM = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, aM = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, lM = { class: "pano-paint-color-field" }, cM = { class: "pano-paint-alpha-wrap" }, uM = ["value"], dM = { "data-paint-alpha-value": "" }, fM = ["hidden"], pM = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, hM = ["data-paint-history-index", "aria-label", "disabled"], mM = ["data-paint-footer"], gM = ["data-paint-group"], yM = ["hidden"], bM = ["value", "disabled"], vM = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, SM = ["hidden"], _M = {
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
    return (n, i) => (Le(), Re("div", {
      class: mt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Le(!0), Re(Ze, null, kt(e.panes, (o) => {
        var s;
        return Le(), Re("div", {
          key: o.key,
          class: mt(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Le(), Re("div", {
            key: 0,
            class: mt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Le(!0), Re(Ze, null, kt(e.paintSwatches, (a) => (Le(), Re("button", {
              key: a.id,
              class: mt(["pano-paint-color-dot", { active: e.state.activeSwatchId === a.id }]),
              type: "button",
              "data-paint-color-swatch": a.id,
              "aria-label": a.label,
              style: Et(t(a)),
              "aria-pressed": e.state.activeSwatchId === a.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, tM))), 128)),
            Me("button", {
              class: mt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Et({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, nM),
            Me("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Et({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              Me("div", iM, [
                Me("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Et({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Me("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Me("div", oM, [
                Me("div", sM, [
                  Me("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Et({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Me("div", aM, [
                  Me("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Et({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Me("label", lM, [
                i[1] || (i[1] = Me("span", null, "Opacity", -1)),
                Me("div", cM, [
                  Me("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, uM),
                  Me("span", dM, nt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Me("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Me("div", pM, [
                  (Le(!0), Re(Ze, null, kt(e.state.historyEntries || [], (a) => (Le(), Re("button", {
                    key: a.index,
                    class: mt(["pano-paint-color-history-dot", { empty: !a.color }]),
                    type: "button",
                    "data-paint-history-index": a.index,
                    "aria-label": `Recent color ${a.index + 1}`,
                    disabled: !a.color,
                    style: Et(r(a.color))
                  }, null, 14, hM))), 128))
                ])
              ], 8, fM)
            ], 12, rM)
          ], 10, eM)) : ot("", !0),
          Me("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Me("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Le(!0), Re(Ze, null, kt(o.tools, (a) => {
                var l;
                return Le(), Ln(tn, {
                  key: `${o.key}-${a.key}`,
                  icon: a.icon,
                  label: a.label,
                  tip: a.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === a.key },
                  attrs: { [a.attr]: a.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, gM),
            Me("div", {
              class: mt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              Me("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Et({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, bM),
              Me("span", vM, nt(e.state.sizeText || "10"), 1)
            ], 10, yM),
            Me("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((s = e.state.clearVisible) == null ? void 0 : s[o.key]) ?? !o.clearHidden)
            }, [
              Be(tn, {
                icon: rt(Ke).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, SM)
          ], 8, mM)
        ], 10, Qk);
      }), 128))
    ], 2));
  }
}, wM = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const r = /* @__PURE__ */ Jt(null), n = /* @__PURE__ */ Jt(null), i = /* @__PURE__ */ Jt(null);
    function o() {
      return {
        cursor: r.value,
        sizePreview: n.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (s, a) => (Le(), Re(Ze, null, [
      Me("div", {
        ref_key: "cursorRef",
        ref: r,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      Me("div", {
        ref_key: "sizePreviewRef",
        ref: n,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        Me("div", {
          ref_key: "sizeSampleRef",
          ref: i,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, xM = ["aria-label"], kM = ["data-tip", "aria-pressed"], MM = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = dt(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => (Le(), Re("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Et({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (Le(!0), Re(Ze, null, kt(e.buttons, (o) => (Le(), Re("button", Tr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), nt(o.label), 17, kM))), 128))
    ], 12, xM));
  }
}, NM = {
  key: 0,
  class: "pano-cutout-menu"
}, PM = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, AM = ["data-aspect"], CM = ["data-action", "aria-label", "data-tip", "disabled"], IM = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Le(), Re("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Et({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Le(!0), Re(Ze, null, kt(e.model.items || [], (n) => (Le(), Re(Ze, {
        key: n.key
      }, [
        n.kind === "aspect" ? (Le(), Re("div", NM, [
          Me("button", PM, [
            Be(zt, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          Me("div", {
            class: mt(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Le(!0), Re(Ze, null, kt(n.choices || [], (i) => (Le(), Re("button", {
              key: i.value,
              class: mt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, nt(i.label), 11, AM))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (Le(), Ln(MM, {
          key: 1,
          buttons: n.buttons || [],
          attr: n.attr,
          label: n.label
        }, null, 8, ["buttons", "attr", "label"])) : (Le(), Re("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": n.action,
          "aria-label": n.label,
          "data-tip": n.tip,
          disabled: n.disabled === !0
        }, [
          Be(zt, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, CM))
      ], 64))), 128))
    ], 4));
  }
}, EM = {
  key: 0,
  class: "pano-easing"
}, OM = { class: "pano-section-title" }, FM = { class: "pano-easing-range" }, TM = { class: "pano-easing-modes" }, DM = ["aria-pressed", "onClick"], LM = ["viewBox"], RM = ["x", "y"], VM = ["x1", "y1", "x2", "y2"], $M = ["d"], zM = ["x1", "y1", "x2", "y2"], jM = ["x1", "y1", "x2", "y2"], HM = ["cx", "cy"], GM = ["cx", "cy"], KM = { class: "pano-easing-note" }, Er = 132, wi = 14, WM = {
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
    ], o = /* @__PURE__ */ Jt(null), s = dt(() => {
      var w;
      return Array.isArray((w = r.model) == null ? void 0 : w.easing) ? r.model.easing : null;
    }), a = (w) => wi + w * Er, l = (w) => wi + (1 - w) * Er, c = dt(() => {
      var V;
      if (((V = r.model) == null ? void 0 : V.easing) === "hold") return `M${a(0)} ${l(0)} H${a(1)} V${l(1)}`;
      const [w, h, m, b] = s.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${a(0)} ${l(0)} C${a(w)} ${l(h)} ${a(m)} ${l(b)} ${a(1)} ${l(1)}`;
    }), d = dt(() => s.value ? s.value.map((w) => w.toFixed(2)).join(", ") : "");
    function u(w) {
      var h;
      return JSON.stringify(w.easing) === JSON.stringify((h = r.model) == null ? void 0 : h.easing);
    }
    function f(w, h) {
      n("timeline", { type: "easing", easing: w, commit: h });
    }
    function p(w, h) {
      var ee;
      if (w.button !== 0 || !s.value) return;
      const m = w.currentTarget;
      (ee = m.setPointerCapture) == null || ee.call(m, w.pointerId);
      let b = null;
      const V = (I) => {
        const X = o.value.getBoundingClientRect(), $ = X.width / (Er + wi * 2), J = ((I.clientX - X.left) / $ - wi) / Er, ye = 1 - ((I.clientY - X.top) / $ - wi) / Er;
        b = [...b || s.value], b[h] = Math.round(Math.min(1, Math.max(0, J)) * 100) / 100, b[h + 1] = Math.round(Math.min(1, Math.max(0, ye)) * 100) / 100, f(b, !1);
      }, T = () => {
        m.removeEventListener("pointermove", V), m.removeEventListener("pointerup", T), m.removeEventListener("pointercancel", T), b && f(b, !0);
      };
      m.addEventListener("pointermove", V), m.addEventListener("pointerup", T), m.addEventListener("pointercancel", T);
    }
    return (w, h) => e.model ? (Le(), Re("div", EM, [
      Me("div", OM, [
        h[2] || (h[2] = Me("span", null, "Easing", -1)),
        Me("span", FM, nt(e.model.label), 1)
      ]),
      Me("div", TM, [
        (Le(), Re(Ze, null, kt(i, (m) => Me("button", {
          key: m.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": u(m) ? "true" : "false",
          onClick: (b) => f(m.easing, !0)
        }, nt(m.label), 9, DM)), 64))
      ]),
      s.value || e.model.easing === "hold" ? (Le(), Re("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Er + wi * 2} ${Er + wi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Me("rect", {
          class: "pano-easing-square",
          x: a(0),
          y: l(1),
          width: Er,
          height: Er
        }, null, 8, RM),
        Me("line", {
          class: "pano-easing-diagonal",
          x1: a(0),
          y1: l(0),
          x2: a(1),
          y2: l(1)
        }, null, 8, VM),
        Me("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, $M),
        s.value ? (Le(), Re(Ze, { key: 0 }, [
          Me("line", {
            class: "pano-easing-arm",
            x1: a(0),
            y1: l(0),
            x2: a(s.value[0]),
            y2: l(s.value[1])
          }, null, 8, zM),
          Me("line", {
            class: "pano-easing-arm",
            x1: a(1),
            y1: l(1),
            x2: a(s.value[2]),
            y2: l(s.value[3])
          }, null, 8, jM),
          Me("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[0]),
            cy: l(s.value[1]),
            r: "6",
            onPointerdown: h[0] || (h[0] = (m) => p(m, 0))
          }, null, 40, HM),
          Me("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[2]),
            cy: l(s.value[3]),
            r: "6",
            onPointerdown: h[1] || (h[1] = (m) => p(m, 2))
          }, null, 40, GM)
        ], 64)) : ot("", !0)
      ], 8, LM)) : ot("", !0),
      Me("div", KM, [
        e.model.mixed ? (Le(), Re(Ze, { key: 0 }, [
          Go("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Le(), Re(Ze, { key: 1 }, [
          Go("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Le(), Re(Ze, { key: 2 }, [
          Go("Holds the value, then jumps to the next keyframe.")
        ], 64)) : s.value ? (Le(), Re(Ze, { key: 3 }, [
          Go("cubic-bezier(" + nt(d.value) + ")", 1)
        ], 64)) : ot("", !0)
      ])
    ])) : ot("", !0);
  }
}, UM = {
  key: 0,
  class: "pano-field-wide pano-handoff-row"
}, BM = { class: "pano-handoff-lanes" }, YM = ["data-lane", "disabled", "title"], qM = {
  __name: "PanoHandoffRevert",
  props: {
    model: { type: Object, default: null }
  },
  setup(e) {
    return (t, r) => e.model ? (Le(), Re("div", UM, [
      r[0] || (r[0] = Me("label", null, "Upstream", -1)),
      Me("div", BM, [
        (Le(!0), Re(Ze, null, kt(e.model.lanes, (n) => (Le(), Re("button", {
          key: n.name,
          class: "pano-btn subtle pano-btn-tight",
          type: "button",
          "data-action": "revert-handoff-lane",
          "data-lane": n.name,
          disabled: n.disabled,
          title: `Revert ${n.label} to upstream`
        }, nt(n.label), 9, YM))), 128))
      ])
    ])) : ot("", !0);
  }
}, XM = ["title"], JM = { class: "pano-ui-row" }, ZM = ["data-selected"], QM = ["aria-pressed", "disabled"], eN = ["aria-pressed", "disabled"], tN = { class: "pano-ui-row" }, nN = ["data-selected"], rN = ["aria-pressed", "disabled"], iN = ["aria-pressed", "disabled"], oN = {
  __name: "PanoUpstreamOrigin",
  props: {
    model: { type: Object, default: null }
  },
  setup(e) {
    return (t, r) => e.model ? (Le(), Re("div", {
      key: 0,
      class: "pano-upstream-origin",
      title: e.model.note || null
    }, [
      Me("div", JM, [
        r[0] || (r[0] = Me("label", null, "Visible", -1)),
        Me("div", {
          class: "pano-segment",
          "data-selected": e.model.visible ? "0" : "1"
        }, [
          Me("button", {
            class: "pano-segment-btn",
            type: "button",
            "data-action": "upstream-visible",
            "data-value": "1",
            "aria-pressed": e.model.visible ? "true" : "false",
            disabled: e.model.disabled
          }, "Shown", 8, QM),
          Me("button", {
            class: "pano-segment-btn",
            type: "button",
            "data-action": "upstream-visible",
            "data-value": "0",
            "aria-pressed": e.model.visible ? "false" : "true",
            disabled: e.model.disabled
          }, "Hidden", 8, eN)
        ], 8, ZM)
      ]),
      Me("div", tN, [
        r[1] || (r[1] = Me("label", null, "Lock", -1)),
        Me("div", {
          class: "pano-segment",
          "data-selected": e.model.locked ? "1" : "0"
        }, [
          Me("button", {
            class: "pano-segment-btn",
            type: "button",
            "data-action": "upstream-locked",
            "data-value": "0",
            "aria-pressed": e.model.locked ? "false" : "true",
            disabled: e.model.disabled
          }, "Unlocked", 8, rN),
          Me("button", {
            class: "pano-segment-btn",
            type: "button",
            "data-action": "upstream-locked",
            "data-value": "1",
            "aria-pressed": e.model.locked ? "true" : "false",
            disabled: e.model.disabled
          }, "Locked", 8, iN)
        ], 8, nN)
      ])
    ], 8, XM)) : ot("", !0);
  }
}, sN = {
  class: "pano-side",
  "data-side": ""
}, aN = { class: "pano-side-head" }, lN = { class: "pano-side-title" }, cN = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, uN = {
  key: 0,
  class: "pano-side-scroll"
}, dN = { class: "pano-inspector" }, fN = { class: "pano-ui-row pano-coverage-row" }, pN = ["data-selected"], hN = ["aria-pressed", "disabled"], mN = ["aria-pressed", "disabled"], gN = {
  key: 0,
  class: "pano-section-title"
}, yN = { class: "meta" }, bN = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, vN = {
  class: "pano-picker",
  "data-picker": "selection"
}, SN = ["disabled"], _N = { class: "pano-picker-label" }, wN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, xN = ["hidden"], kN = ["data-selection-id"], MN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, NN = {
  key: 2,
  class: "pano-state-actions"
}, PN = ["disabled"], AN = ["data-key"], CN = { class: "pano-field-group-values" }, IN = ["title", "onPointerdown"], EN = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], ON = ["data-key"], FN = ["min", "max", "step", "value", "disabled", "data-param-key"], TN = ["min", "max", "step", "value", "disabled", "data-param-key"], DN = ["open"], LN = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, RN = { class: "pano-ui-settings-body" }, VN = { class: "pano-ui-row" }, $N = ["data-selected"], zN = ["aria-pressed"], jN = ["aria-pressed"], HN = { class: "pano-ui-row" }, GN = ["data-selected"], KN = ["aria-pressed"], WN = ["aria-pressed"], UN = {
  key: 1,
  class: "pano-side-footer"
}, BN = ["data-action"], YN = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = dt(() => {
      const c = r.model;
      return !c || typeof c != "object" ? !1 : Object.keys(c).length > 0 && !!c.coverage;
    });
    function o(c) {
      return { "--v": `${Number((c == null ? void 0 : c.fillPct) || 0)}%` };
    }
    function s(c, d) {
      return (d == null ? void 0 : d.paramsDisabled) === !0 || (c == null ? void 0 : c.enabled) === !1;
    }
    const a = {};
    function l(c, d) {
      const u = a[d.key];
      if (c.button !== 0 || !u || s(d, r.model)) return;
      c.preventDefault();
      const f = c.currentTarget, p = c.clientX, w = Number(u.value) || 0;
      let h = !1;
      f.setPointerCapture(c.pointerId);
      const m = (V) => {
        if (!h && Math.abs(V.clientX - p) < 3) return;
        h = !0;
        const T = w + (V.clientX - p) * d.drag * (V.shiftKey ? 0.1 : 1);
        u.value = String(Number(T.toFixed(3))), u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, b = () => {
        f.removeEventListener("pointermove", m), f.removeEventListener("pointerup", b), f.removeEventListener("pointercancel", b), f.removeEventListener("lostpointercapture", b), h ? u.dispatchEvent(new Event("change", { bubbles: !0 })) : u.focus();
      };
      f.addEventListener("pointermove", m), f.addEventListener("pointerup", b), f.addEventListener("pointercancel", b), f.addEventListener("lostpointercapture", b);
    }
    return (c, d) => {
      var u, f, p, w, h, m;
      return Le(), Re("div", sN, [
        Me("div", aN, [
          Me("div", lN, [
            Me("span", cN, [
              Be(zt, {
                icon: rt(Ke).globe
              }, null, 8, ["icon"])
            ]),
            Me("span", null, nt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = Me("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = Me("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Le(), Re("div", uN, [
          Me("div", dN, [
            d[9] || (d[9] = Me("div", { class: "pano-section-title" }, [
              Me("span", null, "Scene")
            ], -1)),
            Me("div", fN, [
              d[2] || (d[2] = Me("label", null, "Coverage", -1)),
              Me("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((u = e.model.coverage) == null ? void 0 : u.value) === 180 ? "1" : "0"
              }, [
                Me("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((f = e.model.coverage) == null ? void 0 : f.value) === 360 ? "true" : "false",
                  disabled: ((p = e.model.coverage) == null ? void 0 : p.disabled) === !0
                }, "360", 8, hN),
                Me("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((w = e.model.coverage) == null ? void 0 : w.value) === 180 ? "true" : "false",
                  disabled: ((h = e.model.coverage) == null ? void 0 : h.disabled) === !0
                }, "180", 8, mN)
              ], 8, pN)
            ]),
            e.model.transformTitle !== !1 ? (Le(), Re("div", gN, [
              d[3] || (d[3] = Me("span", null, "Transform", -1)),
              Me("span", yN, nt(((m = e.model.upstream) == null ? void 0 : m.origin) || ""), 1)
            ])) : ot("", !0),
            e.model.selectionPicker ? (Le(), Re("div", bN, [
              Me("label", null, nt(e.model.selectionPicker.label), 1),
              Me("div", vN, [
                Me("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Me("span", _N, [
                    e.model.selectionPicker.currentIcon ? (Le(), Re("span", wN, [
                      Be(zt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ot("", !0),
                    Me("span", null, nt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = Me("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, SN),
                Me("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Le(!0), Re(Ze, null, kt(e.model.selectionPicker.items || [], (b) => (Le(), Re("button", {
                    key: b.id,
                    type: "button",
                    class: mt(["pano-picker-item", { active: b.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": b.id
                  }, [
                    b.icon ? (Le(), Re("span", MN, [
                      Be(zt, {
                        icon: b.icon
                      }, null, 8, ["icon"])
                    ])) : ot("", !0),
                    Me("span", null, nt(b.label), 1)
                  ], 10, kN))), 128))
                ], 8, xN)
              ])
            ])) : ot("", !0),
            e.model.copyStateButton ? (Le(), Re("div", NN, [
              Me("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Be(zt, {
                  icon: rt(Ke).copy
                }, null, 8, ["icon"]),
                Me("span", null, nt(e.model.copyStateButton.label), 1)
              ], 8, PN)
            ])) : ot("", !0),
            Me("div", {
              class: mt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Le(!0), Re(Ze, { key: 0 }, kt(e.model.notes, (b) => (Le(), Re("div", {
                key: b,
                class: "pano-param-note"
              }, nt(b), 1))), 128)) : (Le(!0), Re(Ze, { key: 1 }, kt(e.model.rows || [], (b) => (Le(), Re(Ze, {
                key: b.key
              }, [
                b.grouped ? (Le(), Re("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": b.key
                }, [
                  Me("label", null, nt(b.label), 1),
                  Me("div", CN, [
                    (Le(!0), Re(Ze, null, kt(b.fields, (V) => (Le(), Re("div", {
                      key: V.key,
                      class: "pano-axis-field"
                    }, [
                      Me("span", {
                        class: mt(["pano-axis", { disabled: s(V, e.model) }]),
                        title: V.label,
                        onPointerdown: (T) => l(T, V)
                      }, nt(V.short), 43, IN),
                      Me("input", {
                        ref_for: !0,
                        ref: (T) => {
                          a[V.key] = T;
                        },
                        type: "number",
                        min: V.min,
                        max: V.max,
                        step: V.step,
                        value: V.displayValue,
                        disabled: s(V, e.model),
                        "aria-label": `${b.label} ${V.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": V.key
                      }, null, 8, EN)
                    ]))), 128))
                  ])
                ], 8, AN)) : (Le(), Re("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": b.key
                }, [
                  Me("label", null, nt(b.label), 1),
                  Me("input", {
                    type: "range",
                    min: b.fields[0].min,
                    max: b.fields[0].max,
                    step: b.fields[0].step,
                    value: b.fields[0].value,
                    disabled: s(b.fields[0], e.model),
                    style: Et(o(b.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": b.fields[0].key
                  }, null, 12, FN),
                  Me("input", {
                    type: "number",
                    min: b.fields[0].min,
                    max: b.fields[0].max,
                    step: b.fields[0].step,
                    value: b.fields[0].displayValue,
                    disabled: s(b.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": b.fields[0].key
                  }, null, 8, TN)
                ], 8, ON))
              ], 64))), 128))
            ], 2),
            Be(qM, {
              model: e.model.handoff
            }, null, 8, ["model"]),
            Be(oN, {
              model: e.model.upstream
            }, null, 8, ["model"]),
            Be(WM, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (b) => n("timeline", b))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Le(), Re("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Me("summary", null, [
                d[5] || (d[5] = Me("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Me("span", LN, [
                  Be(zt, {
                    icon: rt(Ke).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Me("div", RN, [
                Me("div", VN, [
                  d[6] || (d[6] = Me("label", null, "Drag X", -1)),
                  Me("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, zN),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, jN)
                  ], 8, $N)
                ]),
                Me("div", HN, [
                  d[7] || (d[7] = Me("label", null, "Drag Y", -1)),
                  Me("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, KN),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, WN)
                  ], 8, GN)
                ]),
                d[8] || (d[8] = Me("div", { class: "pano-ui-row" }, [
                  Me("span"),
                  Me("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, DN)) : ot("", !0)
          ])
        ])) : ot("", !0),
        (e.model.footerButtons || []).length ? (Le(), Re("div", UN, [
          (Le(!0), Re(Ze, null, kt(e.model.footerButtons, (b) => (Le(), Re("button", {
            key: b.action,
            class: mt(["pano-btn", { "pano-btn-primary": b.primary === !0 }]),
            type: "button",
            "data-action": b.action
          }, nt(b.label), 11, BN))), 128))
        ])) : ot("", !0)
      ]);
    };
  }
}, qN = ["title"], XN = {
  __name: "PanoTimelineGroup",
  props: {
    group: { type: Object, required: !0 }
  },
  setup(e) {
    return (t, r) => (Le(), Re("div", {
      class: "pano-timeline-group",
      title: e.group.label
    }, nt(e.group.label), 9, qN));
  }
}, JN = { class: "pano-timeline-bar" }, ZN = ["aria-label", "data-tip"], QN = ["aria-label", "data-tip"], eP = { class: "pano-timeline-time" }, tP = ["data-tip"], nP = { key: 0 }, rP = ["min", "max", "value"], iP = {
  class: "pano-timeline-setting",
  "data-tip": "Output length in frames; empty follows the inputs"
}, oP = ["max", "value"], sP = ["aria-expanded"], aP = ["inert"], lP = { class: "pano-timeline-name" }, cP = ["aria-pressed", "disabled", "aria-label", "data-tip", "onClick"], uP = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, dP = ["disabled", "aria-expanded", "aria-label", "onClick"], fP = ["title", "aria-current", "onClick"], pP = ["role", "aria-label", "data-tip"], hP = ["disabled", "data-keyed", "aria-label", "onClick"], mP = ["onPointerdown"], gP = ["onPointerdown"], yP = ["onPointerdown"], bP = ["onPointerdown"], vP = ["aria-label", "data-tip", "onPointerdown"], SP = { key: 0 }, _P = ["onPointerdown"], wP = ["aria-label", "data-tip", "onPointerdown"], xP = { key: 0 }, kP = 10, MP = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ $a(0), playing: /* @__PURE__ */ $a(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Jt(null), o = /* @__PURE__ */ Jt(null), s = /* @__PURE__ */ Jt(1), a = /* @__PURE__ */ Jt(0), l = /* @__PURE__ */ Jt(!1);
    let c = null, d = null, u = null;
    Fl(() => {
      c = new ResizeObserver(([ie]) => {
        s.value = Math.max(1, ie.contentRect.width);
      }), i.value && c.observe(i.value), d = new ResizeObserver(([ie]) => {
        a.value = ie.contentRect.height;
      }), o.value && d.observe(o.value);
    }), Cs(() => {
      c == null || c.disconnect(), d == null || d.disconnect(), u == null || u();
    });
    const f = dt(() => Math.max(1, Number(r.model.span || 1))), p = dt(() => r.playhead.frame.value), w = dt(() => r.playhead.playing.value), h = dt(() => j1(p.value, Number(r.model.fps || 1))), m = dt(() => s.value / f.value), b = (ie) => `${ie / f.value * 100}%`, V = dt(() => eS(f.value, m.value));
    function T(ie) {
      const le = i.value.getBoundingClientRect(), z = Math.floor((ie - le.left) / Math.max(1, le.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, z));
    }
    function ee(ie, le, z) {
      const C = Math.ceil(kP / Math.max(1e-6, m.value)), R = new Map(le.map((E) => [E.frame, E.full]));
      return tS(le.map((E) => E.frame), C).map((E, k) => ({
        ...E,
        key: `${ie}:${k}`,
        partial: E.frames.some((_) => !R.get(_)),
        selected: E.frames.some((_) => z.includes(_))
      }));
    }
    const I = dt(() => [
      ...(r.model.rows || []).map((ie) => ({ key: ie.id, row: ie })),
      ...(r.model.groups || []).flatMap((ie) => [
        { key: `group:${ie.key}`, group: ie },
        ...ie.rows.map((le) => ({ key: le.id, row: le }))
      ])
    ]), X = dt(() => {
      const ie = /* @__PURE__ */ new Map();
      for (const { row: le } of I.value)
        if (le) {
          ie.set(le.id, ee(le.id, le.keys, le.selectedFrames));
          for (const z of le.lanes) ie.set(z.key, ee(z.key, z.frames.map((C) => ({ frame: C, full: !0 })), z.selectedFrames));
        }
      return ie;
    });
    function $(ie) {
      const le = ie.end === null ? f.value : ie.end;
      return { left: b(ie.start), width: b(Math.max(0, le - ie.start)) };
    }
    function J(ie, le) {
      const z = ie.clientX, C = Math.max(1e-6, m.value);
      let R = 0;
      le("start", 0, ie);
      const E = (_) => {
        if (_.pointerId !== ie.pointerId) return;
        const y = Math.round((_.clientX - z) / C);
        y !== R && (R = y, le("move", R, _));
      }, k = (_) => {
        _.pointerId === ie.pointerId && (u(), le("end", R, _));
      };
      u == null || u(), u = () => {
        window.removeEventListener("pointermove", E), window.removeEventListener("pointerup", k), window.removeEventListener("pointercancel", k), u = null;
      }, window.addEventListener("pointermove", E), window.addEventListener("pointerup", k), window.addEventListener("pointercancel", k);
    }
    function ye(ie) {
      ie.button === 0 && J(ie, (le, z, C) => n("action", { type: "seek", frame: T(C.clientX), phase: le }));
    }
    function _e(ie, le, z) {
      ie.button === 0 && (n("action", { type: "select-row", id: le.id }), J(ie, (C, R) => n("action", { type: "clip", id: le.id, mode: z, delta: R, phase: C })));
    }
    function me(ie, le, z, C, R) {
      if (ie.button === 0) {
        if (ie.shiftKey) {
          n("action", { type: "select-keys", owner: le.id, lane: z, frames: C.frames, additive: !0 });
          return;
        }
        C.frames.every((E) => R.includes(E)) || n("action", { type: "select-keys", owner: le.id, lane: z, frames: C.frames, additive: !1 }), J(ie, (E, k) => n("action", { type: "move-keys", delta: k, phase: E }));
      }
    }
    const ve = dt(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function ue(ie, le, z) {
      n("action", le), await El(), ie.target.value = z();
    }
    function we(ie) {
      ue(ie, { type: "fps", fps: Number(ie.target.value) }, () => ve.value);
    }
    function de(ie) {
      const le = ie.target.value.trim();
      ue(ie, { type: "length", length: le ? Number(le) : null }, () => r.model.length ?? "");
    }
    function ne(ie, le, z) {
      ie.button !== 0 || ie.target !== ie.currentTarget || n("action", { type: "select-keys", owner: le.id, lane: z, frames: [], additive: !1 });
    }
    return (ie, le) => jr((Le(), Re("section", {
      class: mt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Me("div", JN, [
        Me("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": w.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": w.value ? "Pause (Space)" : "Play (Space)",
          onClick: le[0] || (le[0] = (z) => n("action", { type: "play" }))
        }, [
          Be(zt, {
            icon: w.value ? rt(Ke).pause : rt(Ke).play
          }, null, 8, ["icon"])
        ], 8, ZN),
        e.model.hasAudio ? (Le(), Re("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: le[1] || (le[1] = (z) => n("action", { type: "mute" }))
        }, [
          Be(zt, {
            icon: e.model.muted ? rt(Ke).volume_muted : rt(Ke).volume2
          }, null, 8, ["icon"])
        ], 8, QN)) : ot("", !0),
        Me("span", eP, nt(h.value), 1),
        Me("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Le(), Re("span", nP, nt(ve.value), 1)) : (Le(), Re("input", {
            key: 1,
            type: "number",
            min: rt(Sm),
            max: rt(pd),
            step: "any",
            value: ve.value,
            "aria-label": "Timeline fps",
            onChange: we
          }, null, 40, rP)),
          le[6] || (le[6] = Me("span", null, "fps", -1))
        ], 8, tP),
        Me("label", iP, [
          le[7] || (le[7] = Me("span", null, "Length", -1)),
          Me("input", {
            type: "number",
            min: "1",
            max: rt(hd),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: de
          }, null, 40, oP)
        ]),
        Me("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: le[2] || (le[2] = (z) => n("action", { type: "toggle-expanded" }))
        }, [
          le[8] || (le[8] = Me("span", null, "Timeline", -1)),
          Be(zt, {
            icon: rt(Ke).chevron
          }, null, 8, ["icon"])
        ], 8, sP)
      ]),
      Me("div", {
        class: mt(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: Et({ "--pano-timeline-rows": `${a.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: le[3] || (le[3] = Ct((z) => l.value = !0, ["self"])),
        onTransitionend: le[4] || (le[4] = Ct((z) => l.value = !1, ["self"])),
        onTransitioncancel: le[5] || (le[5] = Ct((z) => l.value = !1, ["self"]))
      }, [
        Me("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          le[9] || (le[9] = Me("div", { class: "pano-timeline-corner" }, null, -1)),
          Me("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: ye
          }, [
            (Le(!0), Re(Ze, null, kt(V.value, (z) => (Le(), Re("span", {
              key: z,
              class: "pano-timeline-tick",
              style: Et({ left: b(z) })
            }, nt(z), 5))), 128)),
            Me("span", {
              class: "pano-timeline-playhead",
              style: Et({ left: b(p.value + 0.5) })
            }, null, 4)
          ], 544),
          (Le(!0), Re(Ze, null, kt(I.value, ({ key: z, row: C, group: R }) => (Le(), Re(Ze, { key: z }, [
            R ? (Le(), Ln(XN, {
              key: 0,
              group: R
            }, null, 8, ["group"])) : ot("", !0),
            C ? (Le(), Re("div", {
              key: 1,
              class: mt(["pano-timeline-head", { selected: C.selected, "is-hidden": !C.visible }])
            }, [
              Me("div", lP, [
                C.hideable ? (Le(), Re("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": C.visible ? "true" : "false",
                  disabled: !C.editable,
                  "aria-label": `${C.label} visible`,
                  "data-tip": C.editable ? C.visible ? "Hide" : "Show" : "Inherited only: this node keeps no overrides of it",
                  onClick: Ct((E) => n("action", { type: "toggle-visible", id: C.id }), ["stop"])
                }, [
                  Be(zt, {
                    icon: C.visible ? rt(Ke).eye : rt(Ke).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, cP)) : (Le(), Re("span", uP)),
                Me("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !C.keyable,
                  "aria-expanded": C.open ? "true" : "false",
                  "aria-label": C.open ? `Hide ${C.label} parameters` : `Show ${C.label} parameters`,
                  onClick: Ct((E) => n("action", { type: "toggle-row", id: C.id }), ["stop"])
                }, [
                  Be(zt, {
                    icon: rt(Ke).chevron
                  }, null, 8, ["icon"])
                ], 8, dP),
                Me("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: C.label,
                  "aria-current": C.selected ? "true" : void 0,
                  onClick: (E) => n("action", { type: "select-row", id: C.id })
                }, [
                  Be(zt, {
                    icon: C.icon
                  }, null, 8, ["icon"]),
                  Me("span", null, nt(C.label), 1)
                ], 8, fP),
                C.upstream ? (Le(), Re("span", {
                  key: 2,
                  class: mt(["pano-timeline-override", { on: C.overridden }]),
                  role: C.overridden ? "img" : void 0,
                  "aria-label": C.overridden ? "Overridden in this node" : void 0,
                  "data-tip": C.overridden ? "Overridden in this node" : null
                }, null, 10, pP)) : ot("", !0),
                C.keyable ? (Le(), Re("button", {
                  key: 3,
                  class: mt(["pano-timeline-key", { keyed: rt(Mc)(C.keys, p.value) }]),
                  type: "button",
                  disabled: !C.editable,
                  "data-keyed": rt(Mc)(C.keys, p.value) ? "true" : "false",
                  "aria-label": rt(Mc)(C.keys, p.value) ? `Every ${C.label} parameter has a keyframe here; update them` : `Add keyframes for every ${C.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Ct((E) => n("action", { type: "key-row", owner: C.id }), ["stop"])
                }, [
                  Be(zt, {
                    icon: rt(Ke).keyframe
                  }, null, 8, ["icon"])
                ], 10, hP)) : ot("", !0)
              ]),
              C.open ? (Le(!0), Re(Ze, { key: 0 }, kt(C.lanes, (E) => (Le(), Re("div", {
                key: E.key,
                class: "pano-timeline-lane-head"
              }, nt(E.label), 1))), 128)) : ot("", !0)
            ], 2)) : ot("", !0),
            C ? (Le(), Re("div", {
              key: 2,
              class: mt(["pano-timeline-track", { selected: C.selected }])
            }, [
              Me("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (E) => ne(E, C, null)
              }, [
                C.clip ? (Le(), Re("div", {
                  key: 0,
                  class: mt(["pano-timeline-clip", { open: C.clip.end === null }]),
                  style: Et($(C.clip)),
                  onPointerdown: Ct((E) => _e(E, C, "move"), ["stop"])
                }, [
                  Me("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Ct((E) => _e(E, C, "start"), ["stop"])
                  }, null, 40, yP),
                  Me("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Ct((E) => _e(E, C, "end"), ["stop"])
                  }, null, 40, bP)
                ], 46, gP)) : ot("", !0),
                (Le(!0), Re(Ze, null, kt(X.value.get(C.id), (E) => (Le(), Re("button", {
                  key: E.key,
                  type: "button",
                  class: mt(["pano-timeline-pin", { selected: E.selected, cluster: E.frames.length > 1, partial: E.partial }]),
                  style: Et({ left: b(E.frame + 0.5) }),
                  "aria-label": `${C.label}: ${E.frames.length > 1 ? `${E.frames.length} keyframes` : `keyframe at frame ${E.frames[0]}`}`,
                  "data-tip": E.frames.length > 1 ? `${E.frames.length} keyframes` : `Frame ${E.frames[0]}`,
                  onPointerdown: Ct((k) => me(k, C, null, E, C.selectedFrames), ["stop"])
                }, [
                  E.frames.length > 1 ? (Le(), Re("span", SP, nt(E.frames.length), 1)) : ot("", !0)
                ], 46, vP))), 128))
              ], 40, mP),
              C.open ? (Le(!0), Re(Ze, { key: 0 }, kt(C.lanes, (E) => (Le(), Re("div", {
                key: E.key,
                class: "pano-timeline-lane",
                onPointerdown: (k) => ne(k, C, E.lane)
              }, [
                (Le(!0), Re(Ze, null, kt(X.value.get(E.key), (k) => (Le(), Re("button", {
                  key: k.key,
                  type: "button",
                  class: mt(["pano-timeline-pin", { selected: k.selected, cluster: k.frames.length > 1 }]),
                  style: Et({ left: b(k.frame + 0.5) }),
                  "aria-label": `${E.label}: ${k.frames.length > 1 ? `${k.frames.length} keyframes` : `keyframe at frame ${k.frames[0]}`}`,
                  "data-tip": k.frames.length > 1 ? `${k.frames.length} keyframes` : `Frame ${k.frames[0]}`,
                  onPointerdown: Ct((_) => me(_, C, E.lane, k, E.selectedFrames), ["stop"])
                }, [
                  k.frames.length > 1 ? (Le(), Re("span", xP, nt(k.frames.length), 1)) : ot("", !0)
                ], 46, wP))), 128))
              ], 40, _P))), 128)) : ot("", !0),
              Me("span", {
                class: "pano-timeline-playhead",
                style: Et({ left: b(p.value + 0.5) })
              }, null, 4)
            ], 2)) : ot("", !0)
          ], 64))), 128))
        ], 512)
      ], 46, aP)
    ], 2)), [
      [Ti, e.model.visible]
    ]);
  }
}, NP = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Le(), Re("div", {
      class: mt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Et({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, nt(e.model.text || ""), 7));
  }
}, PP = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, AP = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Le(), Re("div", PP, [
      (Le(!0), Re(Ze, null, kt(e.buttons, (n) => jr((Le(), Ln(tn, {
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
        [Ti, n.visible !== !1]
      ])), 128))
    ]));
  }
}, CP = ["data-video-ready"], IP = { class: "pano-video-transport-shell" }, EP = { class: "pano-video-controls-left" }, OP = { class: "pano-video-filmstrip" }, FP = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, TP = ["src", "onLoad"], DP = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, LP = ["max", "value", "disabled"], RP = { class: "pano-video-controls-right" }, VP = ["data-has-audio"], $P = { class: "pano-video-volume-pop" }, zP = ["value", "disabled"], jP = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = dt(() => {
      var I;
      return ((I = t.state) == null ? void 0 : I.playing) === !0 ? "Pause" : "Play";
    }), n = dt(() => {
      var I;
      return ((I = t.state) == null ? void 0 : I.playing) === !0 ? "Pause video" : "Play video";
    }), i = dt(() => {
      var I;
      return ((I = t.state) == null ? void 0 : I.playing) === !0 ? Ke.pause : Ke.play;
    }), o = dt(() => {
      var I;
      return ((I = t.state) == null ? void 0 : I.loop) === !1 ? "Enable loop" : "Disable loop";
    }), s = dt(() => {
      var I;
      return ((I = t.state) == null ? void 0 : I.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), a = dt(() => {
      var I;
      return ((I = t.state) == null ? void 0 : I.loop) === !1 ? Ke.loop_off : Ke.loop;
    }), l = dt(() => {
      var I, X;
      return ((I = t.state) == null ? void 0 : I.muted) === !0 || Number(((X = t.state) == null ? void 0 : X.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = dt(() => {
      var I, X, $;
      return ((I = t.state) == null ? void 0 : I.hasAudio) !== !0 ? Ke.volume : ((X = t.state) == null ? void 0 : X.muted) === !0 || Number((($ = t.state) == null ? void 0 : $.volume) ?? 1) <= 0 ? Ke.volume_muted : Ke.volume2;
    }), d = dt(() => {
      var I;
      return Math.max(0, Math.min(100, Number(((I = t.state) == null ? void 0 : I.progressPct) || 0)));
    }), u = dt(() => ({ left: `${d.value}%` })), f = dt(() => {
      var J, ye;
      const I = (J = t.state) == null ? void 0 : J.volumePct, X = Number(((ye = t.state) == null ? void 0 : ye.volume) ?? 1) * 100, $ = Number(I ?? X ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, $))}%`
      };
    }), p = dt(() => {
      var $, J;
      const X = [
        String((($ = t.state) == null ? void 0 : $.currentTimeLabel) || "0:00"),
        String(((J = t.state) == null ? void 0 : J.durationLabel) || "0:00")
      ].reduce((ye, _e) => Math.max(ye, _e.length), 4);
      return `${Math.max(4, X)}ch`;
    }), w = dt(() => ({ "--pano-video-time-ch": p.value })), h = dt(() => {
      var $, J;
      const I = Array.isArray(($ = t.state) == null ? void 0 : $.thumbnails) ? t.state.thumbnails : [];
      if (I.length) return I;
      const X = Math.max(7, Number(((J = t.state) == null ? void 0 : J.thumbnailCount) || 9));
      return Array.from({ length: X }, (ye, _e) => ({
        id: `placeholder-${_e}`,
        src: "",
        label: ""
      }));
    }), m = /* @__PURE__ */ Jt(/* @__PURE__ */ new Set()), b = (I) => String((I == null ? void 0 : I.id) || (I == null ? void 0 : I.src) || (I == null ? void 0 : I.label) || ""), V = (I) => m.value.has(b(I)), T = (I) => {
      const X = new Set(m.value);
      X.add(b(I)), m.value = X;
    };
    Ci(h, (I) => {
      const X = new Set(I.map(b)), $ = /* @__PURE__ */ new Set();
      for (const J of m.value)
        X.has(J) && $.add(J);
      m.value = $;
    }, { immediate: !0 });
    const ee = dt(() => {
      var I;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((I = t.state) == null ? void 0 : I.shellMaxWidthPx) || 640))}px`
      };
    });
    return (I, X) => (Le(), Re("div", {
      class: mt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Et(ee.value)
    }, [
      X[1] || (X[1] = Me("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      X[2] || (X[2] = Me("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Me("div", IP, [
        Me("div", EP, [
          Be(tn, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: r.value,
            tip: n.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          Me("div", {
            class: "pano-video-time pano-video-time-start",
            style: Et(w.value)
          }, nt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Me("div", OP, [
          Me("div", FP, [
            (Le(!0), Re(Ze, null, kt(h.value, ($) => (Le(), Re("div", {
              key: b($),
              class: mt(["pano-video-thumb", {
                "is-placeholder": !$.src,
                "is-loaded": $.src && V($)
              }])
            }, [
              $.src ? (Le(), Re("img", {
                key: 0,
                src: $.src,
                alt: "",
                draggable: "false",
                onLoad: (J) => T($)
              }, null, 40, TP)) : (Le(), Re("span", DP))
            ], 2))), 128))
          ]),
          Me("div", {
            class: "pano-video-playhead",
            style: Et(u.value),
            "aria-hidden": "true"
          }, [...X[0] || (X[0] = [
            Me("span", { class: "pano-video-playhead-line" }, null, -1),
            Me("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          Me("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, LP)
        ]),
        Me("div", RP, [
          Me("div", {
            class: "pano-video-time pano-video-time-end",
            style: Et(w.value)
          }, nt(e.state.durationLabel || "0:00"), 5),
          Be(tn, {
            "extra-class": "pano-video-control",
            icon: a.value,
            label: o.value,
            tip: s.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          Me("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            Me("div", $P, [
              Me("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Et(f.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, zP)
            ]),
            Be(tn, {
              "extra-class": "pano-video-control",
              icon: c.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, VP)
        ])
      ])
    ], 14, CP));
  }
}, HP = { class: "pano-floating-top" }, GP = ["data-selected", "data-view-count"], KP = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], WP = { class: "label" }, UP = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return Le(), Re("div", HP, [
        Me("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Le(!0), Re(Ze, null, kt(e.buttons, (i) => jr((Le(), Re("button", {
            key: i.key,
            class: mt(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Be(zt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            Me("span", WP, nt(i.label), 1)
          ], 10, KP)), [
            [Ti, i.visible !== !1]
          ])), 128))
        ], 8, GP)
      ]);
    };
  }
};
function v0(e = "stickers") {
  const t = String(e || "stickers") === "cutout", r = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Ke.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Ke.unwrap, pressed: "false", extraClass: "" },
      ...t || r ? [{ key: "frame", label: "Frame", icon: Ke.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue).
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
        // Panorama Studio only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: Ke.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...r ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: Ke.camera_plus, pressed: null }] : []
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
const BP = ["aria-label"], YP = { class: "pano-stage-column" }, qP = { class: "pano-stage-wrap" }, XP = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, JP = {
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
    let o = "", s = !1, a = null;
    const l = /* @__PURE__ */ Jt(null), c = /* @__PURE__ */ Jt(null), d = /* @__PURE__ */ Jt(null);
    function u() {
      var me, ve;
      return ((ve = (me = d.value) == null ? void 0 : me.getRefs) == null ? void 0 : ve.call(me)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(me) {
      var ve, ue;
      return ((ue = (ve = c.value) == null ? void 0 : ve.open) == null ? void 0 : ue.call(ve, me)) === !0;
    }
    function p(me) {
      i("image-file-selected", me);
    }
    function w(me) {
      i("image-file-cancelled", me);
    }
    t({ getPaintOverlayRefs: u, openImagePicker: f });
    const h = dt(() => n.readOnly === !0), m = dt(() => n.shellPreset || v0(n.type)), b = dt(() => {
      var ve, ue, we;
      const me = String((((ve = n.uiState) == null ? void 0 : ve.stageStatus) === "failed" ? (ue = n.uiState) == null ? void 0 : ue.stageStatusDetail : (we = n.uiState) == null ? void 0 : we.stageWarningDetail) ?? "");
      return me === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : me === "stickers" ? "One or more sticker previews are unavailable." : me === "frame" ? "The editor hit a rendering error. Check the browser console for details." : me === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : me.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), V = dt(() => {
      var me, ve, ue;
      return ((me = n.uiState) == null ? void 0 : me.stageStatus) === "failed" || (ve = n.uiState) != null && ve.stageWarningDetail ? b.value : (ue = n.uiState) == null ? void 0 : ue.stageNotice;
    }), T = dt(() => {
      var ve;
      const me = Array.isArray((ve = m.value) == null ? void 0 : ve.floatingButtons) ? m.value.floatingButtons.slice() : [];
      return h.value && me.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ke.fullscreen
      }), me;
    });
    function ee() {
      const me = l.value;
      return me ? Array.from(me.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((ve) => ve instanceof HTMLElement ? !ve.hidden && ve.tabIndex >= 0 && ve.offsetParent !== null : !1) : [];
    }
    function I() {
      var ue;
      const ve = ee()[0] || l.value;
      (ue = ve == null ? void 0 : ve.focus) == null || ue.call(ve);
    }
    function X() {
      var me;
      a != null && a.isConnected && ((me = a.focus) == null || me.call(a)), a = null;
    }
    function $(me) {
      var ve, ue, we, de;
      if (!me.defaultPrevented) {
        if (me.key === "Tab") {
          const ne = ee();
          if (!ne.length) {
            me.preventDefault(), (ue = (ve = l.value) == null ? void 0 : ve.focus) == null || ue.call(ve);
            return;
          }
          const ie = ne[0], le = ne[ne.length - 1], z = document.activeElement;
          if (me.shiftKey) {
            (z === ie || z === l.value || !((we = l.value) != null && we.contains(z))) && (me.preventDefault(), le.focus());
            return;
          }
          (z === le || !((de = l.value) != null && de.contains(z))) && (me.preventDefault(), ie.focus());
          return;
        }
        me.key === "Escape" && i("close");
      }
    }
    function J() {
      s || (o = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function ye() {
      s && (document.body.style.overflow = o, s = !1);
    }
    function _e(me) {
      document.removeEventListener("keydown", $), me ? (a || (a = document.activeElement), J(), document.addEventListener("keydown", $), El(() => {
        I();
      })) : (ye(), X());
    }
    return Fl(() => {
      _e(n.open);
    }), Cs(() => {
      ye(), document.removeEventListener("keydown", $), X();
    }), Ci(() => n.open, (me) => {
      _e(me);
    }), (me, ve) => e.open ? (Le(), Re("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: ve[2] || (ve[2] = Ct((ue) => i("close"), ["self"]))
    }, [
      Me("section", {
        ref_key: "modalRef",
        ref: l,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        Me("div", YP, [
          Me("div", qP, [
            ve[3] || (ve[3] = Me("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            ve[4] || (ve[4] = Me("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            ve[5] || (ve[5] = Me("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Le(), Re("div", XP, nt(V.value), 1)) : ot("", !0),
            ve[6] || (ve[6] = Me("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Me("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Be(wM, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            Be(Xg, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: p,
              onFileCancelled: w
            }, null, 512),
            h.value ? ot("", !0) : (Le(), Re(Ze, { key: 1 }, [
              Be(AP, {
                buttons: e.uiState.toolButtons || m.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Be(Uk, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Be(_M, {
                "paint-swatches": e.paintSwatches,
                panes: m.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Be(jP, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Be(UP, {
              buttons: e.uiState.viewButtons || m.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Be(jk, {
              buttons: e.uiState.floatingButtons || T.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Be(IM, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Be(NP, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Be(Zk, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Be(MP, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: ve[0] || (ve[0] = (ue) => i("timeline", ue))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? ot("", !0) : (Le(), Ln(YN, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: ve[1] || (ve[1] = (ue) => i("timeline", ue))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, BP)
    ])) : ot("", !0);
  }
}, sr = "loading", Ms = "ready", Xn = "failed";
function S0(e, t = "") {
  return e && (e.__panoLoadState = sr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function _0(e, t = "") {
  return e && (e.__panoLoadState = Ms, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function w0(e, t = "") {
  return e && (e.__panoLoadState = Xn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Eu(e, t) {
  return e ? e.__panoLoadState === Xn ? Xn : typeof t == "function" && t(e) ? Ms : sr : Ms;
}
function Ou(e) {
  return Eu(e) === Xn;
}
function ZP({ presented: e, background: t = Ms, stickers: r = [] } = {}) {
  if (!e) return { status: sr, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === sr, o = n.includes(sr);
  if (i && o) return { status: sr, detail: "mixed" };
  if (i) return { status: sr, detail: "background" };
  if (o) return { status: sr, detail: "stickers" };
  const s = t === Xn, a = n.includes(Xn);
  return s && a ? { status: Xn, detail: "mixed" } : s ? { status: Xn, detail: "background" } : a ? { status: Xn, detail: "stickers" } : { status: Ms, detail: "" };
}
const QP = "state_json", e2 = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Xd = "sticker_image_1", t2 = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), x0 = 0.01, n2 = "external_image", Fi = "pano_sticker_input_images", k0 = "pano_sticker_input_videos", M0 = "pano_sticker_input_frames", Fu = "pano_sticker_input_video_meta", r2 = !0, Xl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Nr = Math.PI / 180, Li = 180 / Math.PI, Tu = 1, N0 = "rgb(255, 221, 87)", i2 = "rgb(228, 228, 231)", o2 = "rgb(180, 150, 60)", s2 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, a2 = 64, Lp = 40, Vc = 16, l2 = 0.45, Rp = 180, c2 = 160, Sl = 24, u2 = 4, d2 = 4;
function $c(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function f2(e) {
  return 1 - Math.pow(1 - e, 3);
}
function p2(e, t, r) {
  const n = Oe((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function h2(e) {
  return e * e * e;
}
function Jl(e, t, r) {
  return { x: e, y: t, z: r };
}
function Vp(e, t) {
  return Jl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function $p(e, t) {
  return Jl(e.x * t, e.y * t, e.z * t);
}
function zc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function m2(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Jl(e.x / t, e.y / t, e.z / t);
}
function ha(e) {
  return {
    yaw: Gt(Math.atan2(e.x, e.z) * Li),
    pitch: Oe(Math.asin(Oe(e.y, -1, 1)) * Li, -90, 90)
  };
}
function Qr(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n++) {
    const o = t[n].x, s = t[n].y, a = t[i].x, l = t[i].y;
    s > e.y != l > e.y && e.x < (a - o) * (e.y - s) / (l - s || 1e-6) + o && (r = !r);
  }
  return r;
}
function qo(e, t) {
  const r = e.x - t.x, n = e.y - t.y;
  return r * r + n * n;
}
function jc(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), s = Number(e.y || 0) - Number(t.y || 0), a = n * n + i * i;
  if (a <= 1e-6) return qo(e, t);
  const l = Oe((o * n + s * i) / a, 0, 1), c = Number(t.x || 0) + n * l, d = Number(t.y || 0) + i * l, u = Number(e.x || 0) - c, f = Number(e.y || 0) - d;
  return u * u + f * f;
}
function Yn(e, t, r) {
  return e + (t - e) * r;
}
function Sr(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Oe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Oe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Oe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Oe(r, 0, 1)})`;
}
function g2(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let ma = { fillStyle: "", url: "" };
function y2(e, t, r) {
  if (ma.url && ma.fillStyle === String(e || ""))
    return ma.url;
  const n = g2(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Sl}" height="${Sl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return ma = { fillStyle: String(e || ""), url: n }, n;
}
function _l(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function zn(e) {
  return {
    r: Oe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Oe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Oe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Oe(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function dn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function b2(e) {
  return Xl.some((t) => _l(e, t.color));
}
function Du(e, t, r) {
  const n = (Number(e) % 1 + 1) % 1, i = Oe(Number(t), 0, 1), o = Oe(Number(r), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const s = Math.floor(n * 6), a = n * 6 - s, l = o * (1 - i), c = o * (1 - a * i), d = o * (1 - (1 - a) * i);
  switch (s % 6) {
    case 0:
      return { r: o, g: d, b: l };
    case 1:
      return { r: c, g: o, b: l };
    case 2:
      return { r: l, g: o, b: d };
    case 3:
      return { r: l, g: c, b: o };
    case 4:
      return { r: d, g: l, b: o };
    default:
      return { r: o, g: l, b: c };
  }
}
function Lu(e) {
  const t = Oe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = Oe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), n = Oe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, r, n), o = Math.min(t, r, n), s = i - o;
  let a = 0;
  s > 1e-6 && (i === t ? a = ((r - n) / s + (r < n ? 6 : 0)) / 6 : i === r ? a = ((n - t) / s + 2) / 6 : a = ((t - r) / s + 4) / 6);
  const l = i <= 1e-6 ? 0 : s / i;
  return { h: a, s: l, v: i };
}
function po(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function v2(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function zp(e) {
  const { paintCount: t, maskCount: r } = v2(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let i = 0, o = 0;
  return n.forEach((s) => {
    String((s == null ? void 0 : s.layerKind) || "paint") === "mask" ? o += 1 : i += 1;
  }), {
    paintCount: t,
    maskCount: r,
    paintRasterCount: i,
    maskRasterCount: o,
    totalPaintCount: t + i,
    totalMaskCount: r + o
  };
}
function P0(e, t, r, n, i) {
  const o = r.bbox, s = r.transform || {}, a = Number(o.u0 || 0) * n, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * n), d = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), u = a + c * 0.5 + Number(s.du || 0) * n, f = l + d * 0.5 + Number(s.dv || 0) * i, p = Number(s.rot_deg || 0) * Nr, w = Math.max(0.01, Number(s.scale || 1));
  for (const h of [-n, 0, n])
    e.save(), e.translate(u + h, f), e.rotate(p), e.scale(w, w), e.drawImage(t, -c * 0.5, -d * 0.5, c, d), e.restore();
}
function io(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function ga(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function S2(e, t) {
  const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), n = {
    PanoramaStickers: "Panorama Stickers",
    PanoramaStudio: "Panorama Studio",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return n[r] ? n[r] : r || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function Xo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function _2(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function w2(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function x2(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const A0 = "pano_suite.ui_settings.v1", C0 = "pano_suite.node_grid_visibility.v1";
let to = null, gr = null;
function Va(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function k2() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(A0)) || "").trim();
    if (!t) return to ? Va(to) : null;
    const r = JSON.parse(t), n = Va(r);
    return to = n, n;
  } catch {
    return to ? Va(to) : null;
  }
}
function M2(e) {
  var r;
  const t = Va(e);
  to = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(A0, JSON.stringify(t));
  } catch {
  }
  return t;
}
function I0() {
  var e;
  if (gr && typeof gr == "object")
    return gr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(C0)) || "").trim();
    if (!t)
      return gr = {}, gr;
    const r = JSON.parse(t);
    return gr = r && typeof r == "object" ? r : {}, gr;
  } catch {
    return gr = {}, gr;
  }
}
function N2(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = I0()[r];
  return typeof i == "boolean" ? i : !!t;
}
function P2(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = I0();
  n[r] = !!t, gr = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(C0, JSON.stringify(n));
  } catch {
  }
}
function A2(e, t) {
  const r = { ...e }, n = t.map((i) => i(Hc(e, i.name)));
  for (const { connect: i, ...o } of n) {
    for (const s of Object.keys(o))
      if (s in r) throw new Error(`Panorama editor: ${s} is provided twice`);
    Object.assign(r, o);
  }
  return n.forEach((i, o) => i.connect(Hc(r, t[o].name))), Hc(r, "showEditor");
}
function Hc(e, t) {
  return new Proxy(e, {
    get(r, n) {
      if (!(n in r)) throw new Error(`Panorama editor: ${t} takes ${String(n)}, which nothing provides`);
      return r[n];
    }
  });
}
function C2(e, t) {
  if (t == null || t.layer !== e.id) return e;
  const r = t.fps === e.timeline.fps ? t : Im(t, e), n = new Set(r.deleted), i = new Map(r.stickers.map((a) => [a.id, a]));
  let o = Object.keys(r.scene).length > 0 || Object.hasOwn(r, "painting_visible");
  const s = [];
  for (const a of e.stickers) {
    if (n.has(a.id)) {
      o = !0;
      continue;
    }
    const l = i.get(a.id);
    l !== void 0 && l.placement === a.placement ? (s.push({ ...a, ...l }), o = !0) : s.push(a);
  }
  return o ? {
    ...e,
    scene: { ...e.scene, ...r.scene },
    stickers: s,
    painting_visible: Object.hasOwn(r, "painting_visible") ? r.painting_visible : e.painting_visible,
    upstream: []
  } : e;
}
const E0 = "PANO_SCENE";
function I2(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: tr(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function E2(e) {
  return !e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length ? null : {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: Rn(e("pano_upstream_coverage")[0])
  };
}
const O2 = "bg_media is not used";
function F2(e, t) {
  return e === E0 && t === null;
}
function T2(e, t, r) {
  if (!e.painting_visible) return [];
  const { groups: n, raster_objects: i } = e.painting, o = [
    ...n.map((l) => ({ kind: "group", id: l.actionGroupId, zIndex: l.z_index })),
    ...i.filter((l) => l.layerKind === "paint").map((l) => ({ kind: "raster", id: l.id, zIndex: l.z_index, item: l }))
  ], s = Math.max(-1, ...o.map((l) => l.zIndex), ...e.stickers.map((l) => l.z_index ?? 0)) + 1, a = new Set(n.map((l) => l.actionGroupId));
  for (const l of t) a.has(l) || o.push({ kind: "group", id: l, zIndex: s });
  return r && o.push({ kind: "mask", id: "mask", zIndex: s }), o;
}
function qn(e, t) {
  return Array.isArray(e[t]) ? e[t] : [];
}
function D2(e) {
  return e.map(({ sceneState: { id: t } }, r) => t && !e.slice(r + 1).some((n) => n.sceneState.id === t) ? t : `#${r}`);
}
function L2(e, t, r) {
  const n = D2(e);
  return e.map(({ sceneState: i, ui: o }, s) => {
    const l = i.id !== null && n[s] === i.id ? t.find((p) => p.layer === i.id) ?? null : null, c = C2(i, l), { painting: d } = c, u = { ...structuredClone({ ...c, painting: null }), painting: d }, f = u.timeline.fps === r ? u : { ...Mo(u, r), painting: d };
    for (const p of f.stickers)
      p.origin = { layer: n[s], id: p.id }, p.id = Jd(n[s], p.id);
    return { key: n[s], sceneState: f, ui: o };
  });
}
function Jd(e, t) {
  return `upstream:${e}:${t}`;
}
function Ru(e, t) {
  return Jd(e, t);
}
function Xt(e) {
  return !!e && typeof e == "object" && !!e.origin;
}
function wl(e) {
  return Ns(e.origin.layer);
}
function Ns(e) {
  return !e.startsWith("#");
}
function O0(e) {
  const t = e.placement === "world";
  return ["clip", "visible", "locked", "crop", ...(t ? zi : $i).map(([n]) => n), ...t ? [] : ["z_index"]];
}
function R2(e) {
  return Object.fromEntries(O0(e).map((t) => [t, JSON.stringify(e[t])]));
}
function F0(e) {
  return {
    visible: JSON.stringify(e.scene.visible),
    clip: JSON.stringify(e.scene.clip),
    painting_visible: JSON.stringify(e.painting_visible)
  };
}
function Zd(e) {
  return `layer:${e}`;
}
function jp(e) {
  return new Map(e.flatMap(({ key: t, sceneState: r }) => [
    [Zd(t), F0(r)],
    ...r.stickers.map((n) => [n.id, R2(n)])
  ]));
}
function V2(e, t, r, n, i) {
  const o = [...e];
  let s = !1;
  const a = (l, c) => {
    s = !0;
    let d = o.findIndex((u) => u.layer === l);
    if (d < 0 && (d = o.push({ layer: l, fps: i, deleted: [], stickers: [], scene: {} }) - 1), o[d].fps !== i) {
      const u = t[c].sceneState;
      o[d] = Im(o[d], u.timeline.fps === i ? u : Mo(u, i));
    }
    return d;
  };
  return r.forEach(({ key: l, sceneState: c }, d) => {
    if (!Ns(l)) return;
    const u = n.get(Zd(l));
    if (u) {
      const f = F0(c), p = ["visible", "clip"].filter((w) => f[w] !== u[w]);
      if (p.length) {
        const w = a(l, d), h = { ...o[w].scene };
        for (const m of p) h[m] = structuredClone(c.scene[m]);
        o[w] = { ...o[w], scene: h };
      }
      if (f.painting_visible !== u.painting_visible) {
        const w = a(l, d);
        o[w] = { ...o[w], painting_visible: c.painting_visible };
      }
    }
    for (const f of c.stickers) {
      const p = n.get(f.id);
      if (!p) continue;
      const w = O0(f).filter((ee) => JSON.stringify(f[ee]) !== p[ee]);
      if (!w.length) continue;
      const h = a(l, d), { id: m } = f.origin, b = [...o[h].stickers], V = b.findIndex((ee) => ee.id === m), T = V >= 0 && b[V].placement === f.placement ? { ...b[V] } : { id: m, placement: f.placement };
      for (const ee of w) T[ee] = structuredClone(f[ee]);
      V >= 0 ? b[V] = T : b.push(T), o[h] = { ...o[h], stickers: b };
    }
  }), s ? tr({ version: 2, upstream: o }).upstream : e;
}
function $2(e, t, r) {
  const n = [];
  return e.forEach(({ key: i, sceneState: o }, s) => {
    if (!Ns(i)) return;
    const a = t.find((d) => d.layer === i), l = r.get(Zd(i)), c = o.scene.clip;
    (a && Object.hasOwn(a.scene, "clip") || l && l.clip !== JSON.stringify(c)) && n.push({ index: s, clip: c, sticker: null });
    for (const d of o.stickers) {
      const u = a == null ? void 0 : a.stickers.some((p) => p.id === d.origin.id && p.placement === d.placement && Object.hasOwn(p, "clip")), f = r.has(d.id) && r.get(d.id).clip !== JSON.stringify(d.clip);
      (u || f) && n.push({ index: s, clip: d.clip, sticker: d });
    }
  }), n;
}
function z2(e, t, r, { media: n, paintLayers: i, source: o }) {
  const { sceneState: s, ui: a } = e, l = Os(s, r), c = (h) => h.visible ? n(h) : null, d = cg(s, r, { media: c, zIndex: (h) => h.z_index, paintLayers: i, evaluated: l }).map((h) => h.kind === "erp" ? { ...h, id: Jd(t, h.id) } : h), u = fg(s, r, s.stickers, { media: c, evaluated: l }), f = [], p = al(qn(a, "pano_scene_files"), qn(a, "pano_scene_meta"), o);
  p && f.push({ slot: `${t}:scene`, urls: p.urls.filter(Boolean), request: Md(p, l.scene), value: l.scene, opacity: 1 });
  const w = al(qn(a, "pano_sticker_files"), qn(a, "pano_sticker_meta"), o);
  if (w) {
    const h = tg(w, s, l);
    f.push({ slot: `${t}:sticker`, urls: ng(w, s), request: h, value: (h == null ? void 0 : h.value) ?? null, opacity: (h == null ? void 0 : h.opacity) ?? 1 });
  }
  return { evaluated: l, sky: d, stickers: u, items: f };
}
const ri = /* @__PURE__ */ new Map(), j2 = 12;
function H2(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = ri.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (ri.delete(t), ri.set(t, r), r);
}
function G2(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (ri.delete(r), ri.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); ri.size > j2; ) {
      const i = ri.keys().next().value;
      if (!i) break;
      ri.delete(i);
    }
}
function K2(e) {
  const {
    comfyMedia: t,
    editor: r,
    editorView: n,
    floatingRightEl: i,
    imageCache: o,
    loadPreferredExactLinkedImage: s,
    mediaAssetSource: a,
    mediaSource: l,
    mediaUiImage: c,
    node: d,
    portStillCanvas: u,
    portVideoEl: f,
    readOnly: p,
    runtime: w,
    scheduler: h,
    stageWrap: m,
    state: b,
    stateV2: V,
    stillCanvas: T,
    studio: ee,
    timelinePlayhead: I,
    type: X,
    uiState: $,
    videoEl: J
  } = e;
  let ye, _e, me, ve, ue, we;
  const de = {
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
  }, ne = 9, ie = [];
  let le = 0;
  const z = () => {
    var Ce, ze;
    const M = (Ce = m == null ? void 0 : m.getBoundingClientRect) == null ? void 0 : Ce.call(m), re = (ze = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : ze.call(i), te = Math.max(0, Number((M == null ? void 0 : M.width) || 0)), be = re ? Math.max(0, Number(re.width || 0)) : 0, Ve = be > 0 ? be + 14 + 12 : 72, We = Math.max(280, Math.floor(te - Ve * 2)), Ge = r.fullscreen ? Math.min(1200, We) : We;
    $.videoTransport.shellMaxWidthPx = Ge;
  }, C = () => {
    le || (le = h.requestFrame(() => {
      le = 0, z();
    }));
  }, R = (M) => {
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
  }, E = typeof ResizeObserver < "u" ? new ResizeObserver(() => C()) : null;
  E == null || E.observe(m), i && (E == null || E.observe(i)), ie.push(() => {
    var M;
    le && (h.cancelFrame(le), le = 0), (M = E == null ? void 0 : E.disconnect) == null || M.call(E);
  }), C();
  const k = () => {
    de.thumbnailJobId += 1, de.thumbnailSrc = "", $.videoTransport.thumbnails = [], $.videoTransport.thumbnailCount = ne;
  }, _ = async (M, re, te) => {
    const be = String(M || "").trim();
    if (!be) {
      k();
      return;
    }
    const Ne = H2(be);
    if (Ne) {
      de.thumbnailSrc = be, $.videoTransport.thumbnails = Ne.thumbnails, $.videoTransport.thumbnailCount = Ne.thumbnailCount;
      return;
    }
    const Ee = ++de.thumbnailJobId;
    de.thumbnailSrc = be, $.videoTransport.thumbnails = [], $.videoTransport.thumbnailCount = ne;
    const Ve = Es(document, "editor.thumbnails");
    Ve.preload = "auto", Ve.muted = !0, Ve.playsInline = !0, Ve.crossOrigin = "anonymous";
    const We = on({ label: "editor.thumbnail" });
    try {
      const Ge = await new Promise((Ue) => {
        let ft = !1;
        const yt = (Dt) => {
          ft || (ft = !0, Ue(Dt));
        };
        Ve.addEventListener("loadedmetadata", () => yt(!0), { once: !0 }), Ve.addEventListener("canplay", () => yt(!0), { once: !0 }), Ve.addEventListener("error", () => yt(!1), { once: !0 }), Ve.src = be, Ve.load();
      });
      if (de.thumbnailJobId !== Ee) return;
      const Ce = Number(Ve.videoWidth || 0), ze = Number(Ve.videoHeight || 0);
      if (!Ge || Ce < 1 || ze < 1) {
        de.thumbnailFailedSrcs.add(be);
        return;
      }
      const oe = Math.max(0, Number(Ve.duration || re || 0)), Ie = 46, Ae = Math.max(72, Math.round(Ce / ze * Ie));
      We.width = Ae, We.height = Ie;
      const Fe = We.getContext("2d");
      if (!Fe) return;
      const je = [], He = (Ue) => new Promise((ft) => {
        let yt = !1;
        const Dt = () => {
          yt || (yt = !0, ft());
        };
        Ve.addEventListener("seeked", Dt, { once: !0 }), Ve.addEventListener("error", Dt, { once: !0 });
        try {
          Ve.currentTime = Ue;
        } catch {
          Dt();
        }
      });
      for (let Ue = 0; Ue < ne; Ue += 1) {
        if (de.thumbnailJobId !== Ee) return;
        const ft = ne <= 1 ? 0 : Ue / (ne - 1), yt = oe > 0 ? Math.max(0, Math.min(oe - Math.max(1e-3, 0.5 / Math.max(1, Number(te || 24))), oe * ft)) : 0;
        if (await He(yt), de.thumbnailJobId !== Ee) return;
        Fe.clearRect(0, 0, Ae, Ie), Fe.drawImage(Ve, 0, 0, Ae, Ie), je.push({
          id: `thumb-${Ue}`,
          src: We.toDataURL("image/jpeg", 0.72),
          time: yt,
          label: S(yt)
        });
      }
      if (de.thumbnailJobId !== Ee) return;
      $.videoTransport.thumbnails = je, $.videoTransport.thumbnailCount = je.length || ne, G2(be, {
        thumbnails: je,
        thumbnailCount: je.length || ne,
        duration: oe,
        fps: te
      });
    } finally {
      Ve.removeAttribute("src"), Ve.load(), hs(We);
    }
  };
  ie.push(() => {
    k();
  });
  const y = zg({
    video: J instanceof HTMLVideoElement ? J : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (M) => h.requestFrame(M),
      cancelFrame: (M) => h.cancelFrame(M)
    },
    fps: O,
    span: () => {
      if (V) return we();
      const M = Math.round(Number($.videoTransport.duration || 0) * O());
      return J.loop || !(M > 0) ? 1 / 0 : M;
    },
    loop: () => V,
    onFrame: (M) => {
      V ? me(M) : v(), _e({ cause: "frame_view", localOnly: !0, reason: pt.PLAYHEAD });
    },
    onCapture: () => {
      A() && (w.backgroundDirty = !0);
    },
    onChange: () => {
      v(), I.playing.value = y.playing, ue(), _e({ cause: "frame_view", localOnly: !0, reason: pt.PLAYHEAD });
    }
  });
  ie.push(() => y.dispose());
  const L = V && f instanceof HTMLVideoElement ? Vd({
    video: f,
    onCapture: () => {
      var te;
      const M = Number(f.videoWidth || 0), re = Number(f.videoHeight || 0);
      M < 1 || re < 1 || (u.width = M, u.height = re, (te = u.getContext("2d")) == null || te.drawImage(f, 0, 0), u.__panoFrameIdx += 1, _e({ cause: "frame_view", localOnly: !0, reason: pt.MEDIA }));
    },
    onChange: () => _e({ cause: "frame_view", localOnly: !0, reason: pt.MEDIA })
  }) : null;
  L && ie.push(() => L.dispose());
  const Z = V ? Fd({
    createImage: (M, re) => {
      const te = new Image();
      return te.onload = re, te.onerror = re, te.src = M, te;
    },
    onLoad: () => _e({ cause: "frame_view", localOnly: !0, reason: pt.MEDIA })
  }) : null;
  if (J instanceof HTMLVideoElement) {
    const M = () => {
      G(), _e({ cause: "frame_view", localOnly: !0 });
    }, re = () => {
      v({
        hasAudio: $.videoTransport.hasAudio,
        muted: J.muted,
        volume: Number(J.volume ?? $.videoTransport.volume ?? 1)
      });
    }, te = () => {
      const be = J.dataset.panoSrc;
      be && (de.failedSrcs.add(be), G(), _e());
    };
    for (const [be, Ne] of [
      ["loadedmetadata", M],
      ["loadeddata", M],
      ["canplay", M],
      ["volumechange", re],
      ["error", te]
    ])
      J.addEventListener(be, Ne), ie.push(() => J.removeEventListener(be, Ne));
  }
  function he(M) {
    return t.uiList(d, M);
  }
  function ge(M) {
    return t.uiValue(d, M);
  }
  function P() {
    const M = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
    if (Ja(M))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const re = se();
    return re ? { videoKey: re.videoKey, metaKey: re.metaKey } : X === "stickers" || X === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function ae() {
    const { metaKey: M } = P(), re = ge(M);
    return Array.isArray(re) && re.length > 0 && re[0] && typeof re[0] == "object" ? re[0] : re && typeof re == "object" ? re : null;
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
  function S(M) {
    const re = Math.max(0, Math.floor(Number(M || 0))), te = Math.floor(re / 60), be = re % 60;
    return `${te}:${String(be).padStart(2, "0")}`;
  }
  function O() {
    return V ? b.timeline.fps : de.metaFps || 1e3;
  }
  function v(M = {}) {
    const re = Number(M.duration ?? $.videoTransport.duration ?? 0), te = Math.max(1, Number(M.fps ?? $.videoTransport.fps ?? 24)), be = y.frame / O(), Ne = Object.prototype.hasOwnProperty.call(M, "ready") ? !!M.ready : !!$.videoTransport.ready, Ee = y.playing, Ve = Object.prototype.hasOwnProperty.call(M, "visible") ? !!M.visible : !!$.videoTransport.visible, We = Object.prototype.hasOwnProperty.call(M, "muted") ? !!M.muted : !!(J instanceof HTMLVideoElement ? J.muted : $.videoTransport.muted), Ge = Number(
      Object.prototype.hasOwnProperty.call(M, "volume") ? M.volume : J instanceof HTMLVideoElement ? J.volume : $.videoTransport.volume
    ), Ce = Object.prototype.hasOwnProperty.call(M, "hasAudio") ? !!M.hasAudio : R(J), ze = Object.prototype.hasOwnProperty.call(M, "loop") ? !!M.loop : !!$.videoTransport.loop;
    Object.assign($.videoTransport, {
      ready: Ne,
      playing: Ee,
      visible: Ve,
      loop: ze,
      currentTime: Number.isFinite(be) ? be : 0,
      duration: Number.isFinite(re) ? re : 0,
      progressPct: re > 1e-6 ? Math.max(0, Math.min(100, be / re * 100)) : 0,
      currentTimeLabel: S(be),
      durationLabel: S(re),
      frameCount: Math.max(0, Number(M.frameCount ?? $.videoTransport.frameCount ?? 0)),
      fps: te,
      hasAudio: Ce,
      muted: We,
      volume: Math.max(0, Math.min(1, Number.isFinite(Ge) ? Ge : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(Ge) ? Ge : 1)) * 100),
      thumbnails: Array.isArray(M.thumbnails) ? M.thumbnails : $.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(M.thumbnailCount ?? $.videoTransport.thumbnailCount ?? ne))
    });
  }
  function j() {
    return !!(J instanceof HTMLVideoElement && !V && J.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function H() {
    if (!(J instanceof HTMLVideoElement) || !$.videoTransport.hasAudio) return;
    const M = !J.muted;
    J.muted = M, !M && Number(J.volume || 0) <= 0 && (J.volume = Math.max(0.01, Number($.videoTransport.volume || 1))), v({
      hasAudio: $.videoTransport.hasAudio,
      muted: J.muted,
      volume: Number(J.volume ?? $.videoTransport.volume ?? 1)
    });
  }
  function D() {
    v({
      visible: j()
    });
  }
  function A() {
    if (!(J instanceof HTMLVideoElement) || Number(J.videoWidth || 0) < 1 || Number(J.videoHeight || 0) < 1) return !1;
    const M = Number(J.videoWidth || 0), re = Number(J.videoHeight || 0);
    (T.width !== M || T.height !== re) && (T.width = M, T.height = re);
    const te = T.getContext("2d");
    return te ? (te.clearRect(0, 0, M, re), te.drawImage(J, 0, 0, M, re), T.__panoFrameIdx = Number(T.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function F() {
    return !y.showsVideo && Number(T.width || 0) > 0 && Number(T.height || 0) > 0 && Number(T.__panoFrameIdx || 0) > 0 ? T : J instanceof HTMLVideoElement && Number(J.videoWidth || 0) > 0 && Number(J.videoHeight || 0) > 0 && Number(J.readyState || 0) >= 2 ? J : null;
  }
  function x() {
    T.__panoFrameIdx = 0, w.backgroundDirty = !0;
  }
  function G() {
    if (!(J instanceof HTMLVideoElement)) return null;
    const { videoKey: M } = P(), re = (se() || Kt(d, "background")) && he(M)[0] || null, te = l(re), be = [te, t.linkedVideoFile(d, q())].filter(Boolean), Ne = be.find((oe) => !de.failedSrcs.has(oe)) || "";
    de.videoFailed = !Ne && be.length > 0;
    const Ee = Ne && Ne === te ? ae() : null;
    de.metaFps = Number(Ee == null ? void 0 : Ee.fps) > 0 ? Number(Ee.fps) : 0;
    const Ve = Math.max(1, Number((Ee == null ? void 0 : Ee.fps) || (V ? b.timeline.fps : 24))), We = J.dataset.panoSrc === Ne && Number.isFinite(J.duration) ? J.duration : 0, Ge = Number((Ee == null ? void 0 : Ee.duration) || ((Ee == null ? void 0 : Ee.frames) > 0 ? Ee.frames / Ve : We)), Ce = Math.max(0, Number((Ee == null ? void 0 : Ee.frames) || Math.round(Ge * Ve))), ze = !!(Ee != null && Ee.has_audio) || R(J);
    return Ne && J.dataset.panoSrc !== Ne ? (J.pause(), x(), J.dataset.panoSrc = Ne, J.loop = !V && !!$.videoTransport.loop, J.muted = !!$.videoTransport.muted, J.volume = Math.max(0, Math.min(1, Number($.videoTransport.volume ?? 1))), J.src = Ne, J.load(), y.setSource(!0), V || y.seek(0)) : !Ne && J.getAttribute("src") && (J.pause(), J.removeAttribute("src"), delete J.dataset.panoSrc, J.load(), x(), k(), y.setSource(!1)), V || (J.loop = !!$.videoTransport.loop), Ne && !V && de.thumbnailSrc !== Ne && !de.thumbnailFailedSrcs.has(Ne) && _(Ne, Ge, Ve), Ne || k(), v({
      ready: !!Ne,
      visible: !!Ne && j(),
      duration: Ge,
      frameCount: Ce,
      fps: Ve,
      hasAudio: ze,
      loop: !!J.loop,
      muted: !!J.muted,
      volume: Number(J.volume ?? $.videoTransport.volume ?? 1),
      thumbnailCount: $.videoTransport.thumbnailCount
    }), Ne || null;
  }
  function Y(M, re = null) {
    return c(d, M, o, re || (() => _e()));
  }
  function fe(M = null) {
    return Kt(d, "external-sticker") ? Y(Fi, M) : null;
  }
  function Se() {
    if (!Kt(d, "external-sticker")) return null;
    const M = he(Fu)[0];
    if (!M || typeof M != "object") return null;
    const re = he(M0).map(l).filter(Boolean);
    if (re.length) return { frames: re, meta: M };
    const te = l(he(k0)[0] || null);
    return te ? { src: te, meta: M } : null;
  }
  function ke() {
    const M = b.stickers.find(ye), re = M ? Se() : null, te = re ? Id(M.clip, r.frame, b.timeline.fps, re.meta) : null;
    L.follow({ src: (re == null ? void 0 : re.src) || "", time: te, playing: y.advancing, fps: b.timeline.fps });
    const be = M ? B(M) : null, Ne = re != null && re.frames ? Z.picture(re.frames, te, re.meta, be) : L.picture(u, be);
    return Ne ? { media: Ne, revision: g(Ne), source: Od(re, be) } : null;
  }
  function ce() {
    return !V || !Kt(d, "scene") ? null : al(he("pano_scene_files"), he("pano_scene_meta"), l);
  }
  function xe() {
    return !V || !Kt(d, "external-sticker") ? null : al(he("pano_sticker_files"), he("pano_sticker_meta"), l);
  }
  function B(M) {
    var Ve;
    if (M && typeof M == "object" && (ye(M) || M.external === !0))
      return fe(() => {
        ii(d, "image-loaded");
      });
    const re = V ? pe(M) : String(M && typeof M == "object" ? M.asset_id || M.assetId || "" : M || "");
    if (!re) return null;
    const te = o.get(re);
    if (te) return te;
    const be = V ? sl(M.source) : (Ve = b.assets) == null ? void 0 : Ve[re], Ne = a(be);
    if (!Ne) return null;
    const Ee = new Image();
    return S0(Ee, Ne), Ee.onload = () => {
      _0(Ee, Ne), _e();
    }, Ee.onerror = () => {
      w0(Ee, Ne), _e();
    }, Ee.src = Ne, o.set(re, Ee), Ee;
  }
  function pe(M) {
    const { source: re } = M;
    return re.filename ? `file:${re.storage}:${re.subfolder}:${re.filename}` : `sticker:${M.id}`;
  }
  function W() {
    if (X === "cutout") {
      const Ee = F();
      if (Ee) return Ee;
      const Ve = s(
        d,
        ["erp_image", "bg_erp"],
        () => _e(),
        "background:cutout:erp_image|bg_erp"
      );
      return Ve && !Ou(Ve) ? Ve : c(d, "pano_input_images", o, () => _e()) || Ve || null;
    }
    const M = F();
    if (M) return M;
    const re = se(), te = re || Kt(d, "background") ? c(d, (re == null ? void 0 : re.imageKey) ?? "pano_input_images", o, () => _e()) : null;
    if (te && !Ou(te)) return te;
    if (J instanceof HTMLVideoElement && J.dataset.panoSrc) return J;
    if (re) return te;
    const be = q();
    return s(d, be, () => _e(), `background:${be.join("|")}`) || te || null;
  }
  function se() {
    return !ee || !Kt(d, "scene") ? null : E2(he);
  }
  function K() {
    var M;
    return ((M = se()) == null ? void 0 : M.coverage) ?? Rn(b.coverage);
  }
  function q() {
    if (se()) return [];
    if (X === "cutout") return ["erp_image", "bg_erp"];
    const M = Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs.map((be) => String((be == null ? void 0 : be.name) || "")) : [], re = M.includes("erp_image"), te = M.includes("bg_erp");
    return p && (re || te) ? re ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : X === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function U(M) {
    return M ? M instanceof HTMLImageElement ? !!M.complete && Number(M.naturalWidth || M.width || 0) > 0 && Number(M.naturalHeight || M.height || 0) > 0 : M instanceof HTMLVideoElement ? Number(M.videoWidth || 0) > 0 && Number(M.videoHeight || 0) > 0 && Number(M.readyState || 0) >= 2 : Number(M.width || M.naturalWidth || 0) > 0 && Number(M.height || M.naturalHeight || 0) > 0 : !1;
  }
  function N() {
    if (n.failed) return { status: Xn, detail: "renderer" };
    if (!n.ready) return { status: sr, detail: "boot" };
    const M = W(), re = de.videoFailed ? Xn : Eu(M, U), te = [];
    for (const be of ve()) {
      if ((be == null ? void 0 : be.visible) === !1) continue;
      const Ne = B(be);
      te.push(Eu(Ne, U));
    }
    return ZP({
      presented: w.hasPresentedFrame,
      background: re,
      stickers: te
    });
  }
  function Q() {
    J instanceof HTMLVideoElement && J.pause(), ie.forEach((M) => {
      try {
        M();
      } catch {
      }
    });
  }
  return {
    connect(M) {
      ({
        isExternalSticker: ye,
        requestDraw: _e,
        setTimelineFrame: me,
        skyStickers: ve,
        syncTimeline: ue,
        timelineSpanFrames: we
      } = M);
    },
    videoState: de,
    queueVideoTransportLayout: C,
    playback: y,
    portVideo: L,
    getNodeUiValue: ge,
    getMediaRevisionToken: g,
    playbackFps: O,
    syncVideoTransportState: v,
    toggleVideoMuted: H,
    syncVideoTransportVisibility: D,
    refreshModalVideoSource: G,
    getStickerUiImage: Y,
    getExternalStickerPreviewImage: fe,
    getPortMedia: Se,
    followPortSticker: ke,
    getStickerImage: B,
    stickerImageKey: pe,
    getConnectedErpImage: W,
    backgroundCoverage: K,
    upstreamBackground: se,
    isDecodedImageReady: U,
    getStageImageStatus: N,
    sceneFiles: ce,
    stickerFiles: xe,
    disposeMediaSession: Q
  };
}
function W2(e = 80, t = null, r = 8) {
  const n = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), s = Math.max(1, Number(r || 8));
  function a(c) {
    if (n.splice(0, n.length), i = -1, !c || typeof c != "object" || !Array.isArray(c.entries) || (c.entries.forEach((u) => {
      n.push(String(u || ""));
    }), !n.length)) return;
    const d = Number(c.index);
    Number.isInteger(d) ? d === -1 ? i = -1 : i = Math.max(0, Math.min(n.length - 1, d)) : i = n.length - 1;
  }
  function l(c) {
    n[i] !== c && (n.splice(i + 1), n.push(c), n.length > o && n.shift(), i = n.length - 1);
  }
  return a(t), {
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
      const c = n.length, d = Math.max(0, c - s), u = i >= 0 ? Math.max(0, Math.min(i, d)) : d, f = n.slice(u, u + s), p = i < 0 ? -1 : Math.max(-1, Math.min(f.length - 1, i - u));
      return {
        version: 1,
        entries: f,
        index: p
      };
    },
    hydrate: a
  };
}
const U2 = 80;
function T0(e) {
  return JSON.stringify(aS(e));
}
function B2(e) {
  return W2(U2, { entries: [T0(e)], index: 0 });
}
function D0(e, t) {
  var r, n;
  return (e === "stickers" ? (r = t.active) == null ? void 0 : r.selected_sticker_id : (n = t.active) == null ? void 0 : n.selected_shot_id) ?? null;
}
function Y2(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: s,
    type: a
  } = e;
  let l, c, d, u, f, p, w, h, m, b, V, T, ee, I, X, $, J, ye;
  function _e() {
    r || (ee(), X(), J(), !(o && i.stickers.some(u)) && (t.historyController.commitActionGroup(T0(T())), $()));
  }
  function me(ue) {
    var ie, le;
    if (r) return;
    V();
    const we = ue < 0 ? t.historyController.undo() : t.historyController.redo();
    if ($(), !we) return;
    const de = lS(i, we), ne = (ie = i.timeline) == null ? void 0 : ie.fps;
    Object.keys(i).forEach((z) => delete i[z]), Object.assign(i, de.state), ee(!1), X({ restored: !0 }), o && h(), o && i.timeline.fps !== ne && w.seek(Math.round(t.frame * i.timeline.fps / ne)), t.selectedId = D0(a, i), s && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((le = d()) == null ? void 0 : le.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), m(), n.backgroundDirty = !0, de.paintingChanged ? p() : f(), I(), ye(), c(), b({ cause: "cutout_frame" });
  }
  function ve() {
    var de, ne;
    const ue = Array.isArray((de = t.historyController) == null ? void 0 : de.entries) ? t.historyController.entries : [], we = Number((ne = t.historyController) == null ? void 0 : ne.index);
    return {
      canUndo: !r && ue.length > 1 && we > 0,
      canRedo: !r && ue.length > 1 && we >= 0 && we < ue.length - 1
    };
  }
  return {
    connect(ue) {
      ({
        clearWorldSelection: l,
        commitState: c,
        getActiveCutoutShot: d,
        isUploadingSticker: u,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: p,
        playback: w,
        rebuildUpstreamWorking: h,
        releaseHiddenSelection: m,
        requestDraw: b,
        stopTimelinePlayback: V,
        storedEditorState: T,
        syncCutoutShot: ee,
        syncPaintUi: I,
        syncPortHandoff: X,
        syncUndoRedoButtons: $,
        syncUpstreamEdits: J,
        updateSidePanel: ye
      } = ue);
    },
    pushHistory: _e,
    restoreHistory: me,
    getHistoryCapabilities: ve
  };
}
function q2(e) {
  const {
    canvas: t,
    editor: r,
    sceneV2: n,
    state: i,
    stateV2: o,
    type: s
  } = e;
  let a, l, c, d, u, f, p, w, h, m;
  function b() {
    return s !== "stickers" ? i.shots : n ? [...V(), ...T()] : V();
  }
  function V() {
    return n ? i.stickers.filter((N) => N.placement === "sky") : i.stickers;
  }
  function T() {
    if (!n) return [];
    const N = m(), Q = [...new Set(N.map((M) => M.origin.layer))];
    return N.filter((M) => M.placement === "sky").sort((M, re) => Q.indexOf(M.origin.layer) - Q.indexOf(re.origin.layer) || M.z_index - re.z_index);
  }
  function ee(N) {
    return i.stickers.find((Q) => Q.id === N) || m().find((Q) => Q.id === N) || null;
  }
  function I(N) {
    return n && P(N);
  }
  function X(N) {
    return N.source.kind === "file" && !N.source.filename && !N.source.data_url;
  }
  function $(N) {
    if (!I(N)) return N;
    const Q = ce(N) ? Xt(N) ? h(N) : p(N) : null;
    return bd(N, r.frame, Q && { width: Q.naturalWidth || Q.width, height: Q.naturalHeight || Q.height });
  }
  function J(N, Q) {
    I(N) ? Hm(N, r.frame, Q) : Object.assign(N, Q);
  }
  function ye() {
    const N = i.painting || (i.painting = xo(null));
    return Array.isArray(N.groups) || (N.groups = []), N.groups;
  }
  function _e(N = "paint") {
    var te, be;
    const Q = Array.isArray((be = (te = i.painting) == null ? void 0 : te[N]) == null ? void 0 : be.strokes) ? i.painting[N].strokes : [], M = [], re = /* @__PURE__ */ new Set();
    for (const Ne of Q) {
      const Ee = String((Ne == null ? void 0 : Ne.actionGroupId) || "").trim();
      !Ee || re.has(Ee) || (re.add(Ee), M.push(Ee));
    }
    return M;
  }
  function me() {
    return _e("paint");
  }
  function ve(N, Q) {
    const M = String(Q || "").trim();
    return M ? `${N === "mask" ? "mask" : "paint"}:${M}` : "";
  }
  function ue(N) {
    const Q = String(N || "").trim();
    return Q ? `raster:${Q}` : "";
  }
  function we(N) {
    const Q = String(N || "").trim();
    if (!Q) return "";
    const M = Q.match(/^raster:(.*)$/);
    return String(M ? M[1] || "" : Q).trim();
  }
  function de(N, Q = null) {
    const M = String(N || "").trim();
    if (!M) return { layerKind: "paint", actionGroupId: "" };
    const re = M.match(/^(paint|mask):(.*)$/);
    return re ? { layerKind: re[1] === "mask" ? "mask" : "paint", actionGroupId: String(re[2] || "").trim() } : { layerKind: Q === "mask" ? "mask" : "paint", actionGroupId: M };
  }
  function ne() {
    var Q;
    let N = -1;
    for (const M of V())
      N = Math.max(N, Number((M == null ? void 0 : M.z_index) || 0));
    for (const M of ye())
      N = Math.max(N, Number((M == null ? void 0 : M.z_index) || 0));
    for (const M of Array.isArray((Q = i.painting) == null ? void 0 : Q.raster_objects) ? i.painting.raster_objects : [])
      String((M == null ? void 0 : M.layerKind) || "paint") === "paint" && (N = Math.max(N, Number((M == null ? void 0 : M.z_index) || 0)));
    return N + 1;
  }
  function ie(N, Q = null) {
    const M = String(N || "").trim();
    if (!M) return null;
    const re = ye();
    let te = re.find((be) => String((be == null ? void 0 : be.actionGroupId) || "") === M);
    return te ? Q != null && (te.z_index = Math.max(0, Number(Q || 0))) : (te = {
      id: M,
      type: "strokeGroup",
      actionGroupId: M,
      z_index: Q == null ? ne() : Math.max(0, Number(Q || 0)),
      locked: !1,
      frame: null
    }, re.push(te)), te;
  }
  function le(N) {
    if (!(N != null && N.centerUv)) return [];
    const Q = Number(N.centerUv.u || 0), M = Number(N.centerUv.v || 0), re = Number(N.halfW || 0), te = Number(N.halfH || 0);
    return [
      {
        u: ((Q - re) % 1 + 1) % 1,
        v: Oe(M - te, 0, 1)
      },
      {
        u: ((Q + re) % 1 + 1) % 1,
        v: Oe(M - te, 0, 1)
      },
      {
        u: ((Q + re) % 1 + 1) % 1,
        v: Oe(M + te, 0, 1)
      },
      {
        u: ((Q - re) % 1 + 1) % 1,
        v: Oe(M + te, 0, 1)
      }
    ];
  }
  function z() {
    const N = new Set(me()), M = ye().filter((re) => N.has(String((re == null ? void 0 : re.actionGroupId) || "")));
    return N.forEach((re) => {
      M.some((te) => String((te == null ? void 0 : te.actionGroupId) || "") === re) || M.push({
        id: re,
        type: "strokeGroup",
        actionGroupId: re,
        z_index: ne(),
        locked: !1,
        frame: null
      });
    }), M.sort((re, te) => Number((re == null ? void 0 : re.z_index) || 0) - Number((te == null ? void 0 : te.z_index) || 0)), i.painting.groups = M, M;
  }
  function C(N, Q, M) {
    var Ae;
    const re = (Fe) => (Number(Fe || 0) % 1 + 1) % 1, te = [];
    for (const Fe of M) {
      const je = Fe == null ? void 0 : Fe.geometry, He = (je == null ? void 0 : je.geometryKind) === "lasso_fill" ? je == null ? void 0 : je.points : (je == null ? void 0 : je.processedPoints) || (je == null ? void 0 : je.rawPoints) || (je == null ? void 0 : je.points) || [];
      Array.isArray(He) && te.push(...He);
    }
    if (!te.length) return null;
    const be = re(((Ae = te[0]) == null ? void 0 : Ae.u) || 0);
    let Ne = 0, Ee = 0;
    te.forEach((Fe) => {
      const je = re((Fe == null ? void 0 : Fe.u) || 0);
      Ne += be + A(je, be), Ee += Number((Fe == null ? void 0 : Fe.v) || 0);
    });
    const Ve = (Ne / te.length % 1 + 1) % 1;
    let We = 1 / 0, Ge = -1 / 0, Ce = 1 / 0, ze = -1 / 0;
    te.forEach((Fe) => {
      const je = re((Fe == null ? void 0 : Fe.u) || 0), He = A(je, Ve);
      We = Math.min(We, He), Ge = Math.max(Ge, He);
      const Ue = Number((Fe == null ? void 0 : Fe.v) || 0);
      Ce = Math.min(Ce, Ue), ze = Math.max(ze, Ue);
    });
    const oe = M.reduce((Fe, je) => {
      const He = l(String((je == null ? void 0 : je.toolKind) || "pen")), Ue = Fn[He] || Fn[Dr], ft = Math.max(1, Number((je == null ? void 0 : je.size) || 10)) * Math.max(0.1, Number((Ue == null ? void 0 : Ue.sizeScale) ?? 1));
      return Math.max(Fe, ft);
    }, 0), Ie = Math.max(35e-4, oe / 2048);
    return {
      centerUv: { u: ((Ve + (We + Ge) * 0.5) % 1 + 1) % 1, v: Oe((Ce + ze) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (Ge - We) * 0.5 + Ie,
      halfH: (ze - Ce) * 0.5 + Ie,
      uvPad: Ie
    };
  }
  function R(N, Q, M) {
    const re = String(N || "").trim();
    if (!re) return null;
    const te = ye().find((Ne) => String((Ne == null ? void 0 : Ne.actionGroupId) || "") === re);
    if (!te) return null;
    const be = M || j(re, Q);
    return te.frame = C(re, Q, be), te.frame;
  }
  function E() {
    var re;
    const N = V().map((te) => ({
      type: "sticker",
      id: String((te == null ? void 0 : te.id) || ""),
      z_index: Number((te == null ? void 0 : te.z_index) || 0),
      item: te
    })), Q = z().map((te) => ({
      type: "strokeGroup",
      id: String((te == null ? void 0 : te.id) || (te == null ? void 0 : te.actionGroupId) || ""),
      actionGroupId: String((te == null ? void 0 : te.actionGroupId) || ""),
      z_index: Number((te == null ? void 0 : te.z_index) || 0),
      item: te
    })), M = (Array.isArray((re = i.painting) == null ? void 0 : re.raster_objects) ? i.painting.raster_objects : []).filter((te) => String((te == null ? void 0 : te.layerKind) || "paint") === "paint").map((te) => ({
      type: "rasterObject",
      id: String((te == null ? void 0 : te.id) || ""),
      z_index: Number((te == null ? void 0 : te.z_index) || 0),
      item: te
    }));
    return [...N, ...Q, ...M].sort((te, be) => Number(te.z_index || 0) - Number(be.z_index || 0));
  }
  function k(N = !0) {
    var M, re, te, be, Ne, Ee;
    const Q = E().filter((Ve) => Ve.type === "strokeGroup").map((Ve) => String(Ve.actionGroupId || "")).filter((Ve) => !!Ve);
    if (N) {
      const Ve = String(((re = (M = r.interaction) == null ? void 0 : M.stroke) == null ? void 0 : re.actionGroupId) || "").trim(), We = String(((be = (te = r.interaction) == null ? void 0 : te.stroke) == null ? void 0 : be.layerKind) || "").trim(), Ge = String(((Ee = (Ne = r.interaction) == null ? void 0 : Ne.stroke) == null ? void 0 : Ee.toolKind) || "").trim();
      Ve && We === "paint" && Ge !== "eraser" && !Q.includes(Ve) && Q.push(Ve);
    }
    return Q;
  }
  function _(N = !0) {
    var Ee, Ve, We, Ge, Ce, ze;
    const Q = E();
    if (!N) return Q;
    const M = String(((Ve = (Ee = r.interaction) == null ? void 0 : Ee.stroke) == null ? void 0 : Ve.actionGroupId) || "").trim(), re = String(((Ge = (We = r.interaction) == null ? void 0 : We.stroke) == null ? void 0 : Ge.layerKind) || "").trim(), te = String(((ze = (Ce = r.interaction) == null ? void 0 : Ce.stroke) == null ? void 0 : ze.toolKind) || "").trim();
    if (!M || re !== "paint" || te === "eraser" || Q.some((oe) => oe.type === "strokeGroup" && String(oe.actionGroupId || "") === M))
      return Q;
    const be = f();
    let Ne = Q.reduce((oe, Ie) => Math.max(oe, Number((Ie == null ? void 0 : Ie.z_index) || 0)), -1) + 1;
    return be && v(be) && String(be.actionGroupId || "") === M && (Ne = Number(be.z_index || 0)), [
      ...Q,
      {
        type: "strokeGroup",
        id: M,
        actionGroupId: M,
        z_index: Ne,
        item: null
      }
    ].sort((oe, Ie) => Number((oe == null ? void 0 : oe.z_index) || 0) - Number((Ie == null ? void 0 : Ie.z_index) || 0));
  }
  function y() {
    return ye().slice().sort((N, Q) => Number((N == null ? void 0 : N.z_index) || 0) - Number((Q == null ? void 0 : Q.z_index) || 0)).map((N) => O(ve("paint", (N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || ""))).filter(Boolean);
  }
  function L() {
    var N;
    return (Array.isArray((N = i.painting) == null ? void 0 : N.raster_objects) ? i.painting.raster_objects : []).filter((Q) => String((Q == null ? void 0 : Q.layerKind) || "paint") === "paint").slice().sort((Q, M) => Number((Q == null ? void 0 : Q.z_index) || 0) - Number((M == null ? void 0 : M.z_index) || 0)).map((Q) => g(ue((Q == null ? void 0 : Q.id) || ""))).filter(Boolean);
  }
  function Z() {
    return Array.isArray(i.stickers) ? V() : [];
  }
  function he() {
    return [...Array.isArray(i.shots) ? i.shots : [], ...Z(), ...T()];
  }
  function ge(N) {
    return !!N && Array.isArray(i.shots) && i.shots.includes(N);
  }
  function P(N) {
    return !!N && (Array.isArray(i.stickers) && i.stickers.includes(N) || Xt(N));
  }
  function ae() {
    var N;
    return Array.isArray((N = i.painting) == null ? void 0 : N.raster_objects) ? i.painting.raster_objects : [];
  }
  function g(N) {
    const Q = we(N);
    if (!Q) return null;
    const M = ae().find((re) => String((re == null ? void 0 : re.id) || "").trim() === Q);
    return !M || String((M == null ? void 0 : M.layerKind) || "paint") !== "paint" ? null : {
      ...M,
      id: ue(Q),
      type: "rasterObject",
      rasterObjectId: Q
    };
  }
  function S(N) {
    if (!N || typeof N != "object" || String(N.type || "") !== "rasterObject") return !1;
    const Q = we(N.rasterObjectId || N.id || "");
    return !!Q && !!g(ue(Q));
  }
  function O(N) {
    const Q = de(N), M = String(Q.actionGroupId || "").trim();
    if (!M) return null;
    const re = ye().find((te) => String((te == null ? void 0 : te.id) || (te == null ? void 0 : te.actionGroupId) || "") === M || String((te == null ? void 0 : te.actionGroupId) || "") === M);
    return re ? {
      ...re,
      id: ve("paint", M),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: M
    } : null;
  }
  function v(N) {
    if (!N || typeof N != "object" || String(N.type || "") !== "strokeGroup") return !1;
    const Q = String(N.actionGroupId || "").trim(), M = String(N.layerKind || "paint").trim() || "paint";
    return !!Q && !!O(ve(M, Q));
  }
  function j(N, Q = null) {
    const M = de(N, Q), re = String(M.actionGroupId || "").trim();
    return re ? d(M.layerKind).filter((te) => String((te == null ? void 0 : te.actionGroupId) || "").trim() === re) : [];
  }
  function H(N, Q = "paint") {
    const M = String(N || "").trim(), te = `geomv5:${String(Q || "paint").trim() || "paint"}:${M}:${r.mode}:${u()}`;
    if (r.mode === "frame") {
      const be = a(), Ne = String((be == null ? void 0 : be.id) || ""), Ee = be ? c(be) : null;
      return `${te}:frame:${Ne}:${Math.round(Number((be == null ? void 0 : be.yaw_deg) || 0) * 1e3)}:${Math.round(Number((be == null ? void 0 : be.pitch_deg) || 0) * 1e3)}:${Math.round(Number((be == null ? void 0 : be.roll_deg) ?? (be == null ? void 0 : be.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((be == null ? void 0 : be.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((be == null ? void 0 : be.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((Ee == null ? void 0 : Ee.x) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.y) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.w) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.h) || 0))}`;
    }
    return `${te}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function D(N, Q, M) {
    return !N || typeof N != "object" ? N : {
      ...N,
      u: ((Number(N.u || 0) + Number(Q || 0)) % 1 + 1) % 1,
      v: Oe(Number(N.v || 0) + Number(M || 0), 0, 1)
    };
  }
  function A(N, Q) {
    let M = Number(N || 0) - Number(Q || 0);
    for (; M > 0.5; ) M -= 1;
    for (; M < -0.5; ) M += 1;
    return M;
  }
  function F(N, Q = null, M = null) {
    var We;
    const re = de(N, Q), te = Array.isArray(M) ? M : j(re.actionGroupId, re.layerKind), be = [];
    if (te.forEach((Ge) => {
      const Ce = (Ge == null ? void 0 : Ge.geometry) || null, ze = (Ce == null ? void 0 : Ce.geometryKind) === "lasso_fill" ? Ce == null ? void 0 : Ce.points : (Ce == null ? void 0 : Ce.processedPoints) || (Ce == null ? void 0 : Ce.rawPoints) || (Ce == null ? void 0 : Ce.points) || [];
      Array.isArray(ze) && be.push(...ze);
    }), !be.length) return { u: 0.5, v: 0.5 };
    const Ne = Number(((We = be[0]) == null ? void 0 : We.u) || 0);
    let Ee = 0, Ve = 0;
    return be.forEach((Ge) => {
      Ee += Ne + A(Number((Ge == null ? void 0 : Ge.u) || 0), Ne), Ve += Number((Ge == null ? void 0 : Ge.v) || 0);
    }), {
      u: (Ee / be.length % 1 + 1) % 1,
      v: Oe(Ve / be.length, 0, 1)
    };
  }
  function x(N, Q, M = 1, re = 0) {
    if (!N || typeof N != "object") return N;
    const te = Number((Q == null ? void 0 : Q.u) || 0), be = Number((Q == null ? void 0 : Q.v) || 0), Ne = A(Number(N.u || 0), te), Ee = Number(N.v || 0) - be, Ve = Number(re || 0) * Nr, We = Math.cos(Ve), Ge = Math.sin(Ve), Ce = Math.max(0.02, Number(M || 1)), ze = (Ne * We - Ee * Ge) * Ce, oe = (Ne * Ge + Ee * We) * Ce;
    return {
      ...N,
      u: ((te + ze) % 1 + 1) % 1,
      v: Oe(be + oe, 0, 1)
    };
  }
  function G(N, Q, M, re = null, te = null, be = null) {
    const Ne = de(N, te), Ee = String(Ne.actionGroupId || "").trim();
    if (!Ee) return !1;
    const Ve = d(Ne.layerKind), We = Array.isArray(re) ? new Map(re.map((Ce) => [String((Ce == null ? void 0 : Ce.id) || ""), Ce])) : null;
    let Ge = !1;
    if (Ve.forEach((Ce) => {
      if (String((Ce == null ? void 0 : Ce.actionGroupId) || "").trim() !== Ee) return;
      const ze = (We == null ? void 0 : We.get(String((Ce == null ? void 0 : Ce.id) || ""))) || Ce, oe = Ce == null ? void 0 : Ce.geometry, Ie = ze == null ? void 0 : ze.geometry;
      !oe || !Ie || (Array.isArray(Ie.points) && (oe.points = Ie.points.map((Ae) => D(Ae, Q, M)), Ge = !0), Array.isArray(Ie.rawPoints) && (oe.rawPoints = Ie.rawPoints.map((Ae) => D(Ae, Q, M)), Ge = !0), Array.isArray(Ie.processedPoints) && (oe.processedPoints = Ie.processedPoints.map((Ae) => D(Ae, Q, M)), Ge = !0));
    }), Ge && be) {
      const Ce = ye().find((ze) => String((ze == null ? void 0 : ze.actionGroupId) || "") === Ee);
      Ce && (Ce.frame = null);
    }
    return Ge;
  }
  function Y(N, Q = 1, M = 0, re = null, te = null, be = null) {
    const Ne = de(N, te), Ee = String(Ne.actionGroupId || "").trim();
    if (!Ee) return !1;
    const Ve = d(Ne.layerKind), We = Array.isArray(re) ? re : j(Ee, Ne.layerKind), Ge = Array.isArray(We) ? new Map(We.map((oe) => [String((oe == null ? void 0 : oe.id) || ""), oe])) : null, Ce = (be == null ? void 0 : be.centerUv) ?? F(Ee, Ne.layerKind, We);
    let ze = !1;
    if (Ve.forEach((oe) => {
      if (String((oe == null ? void 0 : oe.actionGroupId) || "").trim() !== Ee) return;
      const Ie = (Ge == null ? void 0 : Ge.get(String((oe == null ? void 0 : oe.id) || ""))) || oe, Ae = oe == null ? void 0 : oe.geometry, Fe = Ie == null ? void 0 : Ie.geometry;
      !Ae || !Fe || (Array.isArray(Fe.points) && (Ae.points = Fe.points.map((je) => x(je, Ce, Q, M)), ze = !0), Array.isArray(Fe.rawPoints) && (Ae.rawPoints = Fe.rawPoints.map((je) => x(je, Ce, Q, M)), ze = !0), Array.isArray(Fe.processedPoints) && (Ae.processedPoints = Fe.processedPoints.map((je) => x(je, Ce, Q, M)), ze = !0));
    }), ze && be) {
      const oe = ye().find((Ie) => String((Ie == null ? void 0 : Ie.actionGroupId) || "") === Ee);
      oe && (oe.frame = null);
    }
    return ze;
  }
  function fe(N, Q, M, re = null) {
    const te = we(N);
    if (!te) return !1;
    const be = ae().find((Ge) => String((Ge == null ? void 0 : Ge.id) || "").trim() === te);
    if (!be) return !1;
    const Ne = re && typeof re == "object" ? re : be, Ee = (Ne == null ? void 0 : Ne.transform) || {}, Ve = Number(Ee.du || 0) + Number(Q || 0), We = Oe(Number(Ee.dv || 0) + Number(M || 0), -1, 1);
    return be.transform || (be.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), be.transform.du = Ve, be.transform.dv = We, !0;
  }
  function Se(N, Q = 1, M = null) {
    const re = we(N);
    if (!re) return !1;
    const te = ae().find((We) => String((We == null ? void 0 : We.id) || "").trim() === re);
    if (!te) return !1;
    const be = M && typeof M == "object" ? M : te, Ne = (be == null ? void 0 : be.transform) || {}, Ee = Math.max(0.01, Number(Ne.scale || 1)), Ve = Oe(Ee * Math.max(0.01, Number(Q || 1)), 0.01, 100);
    return te.transform || (te.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), te.transform.scale = Ve, !0;
  }
  function ke() {
    return ne();
  }
  function ce(N) {
    var Q;
    return !N || typeof N != "object" ? !1 : o ? ((Q = N.source) == null ? void 0 : Q.kind) === "port" : String(N.id || "") === Xd || String(N.source_kind || "") === n2;
  }
  function xe(N) {
    return !!(N && typeof N == "object" && N.visible === !1);
  }
  function B(N) {
    return ce(N) && xe(N) ? og : 1;
  }
  function pe(N, Q, M = 1, re = 0) {
    if (!N || typeof N != "object") return N;
    const te = Number((Q == null ? void 0 : Q.u) || 0), be = Number((Q == null ? void 0 : Q.v) || 0), Ne = A(Number(N.u || 0), te), Ee = Number(N.v || 0) - be, Ve = Math.max(0.02, Number(M || 1)), We = Number(re || 0) * Nr, Ge = Math.cos(We), Ce = Math.sin(We), ze = Ne / Ve, oe = Ee / Ve, Ie = ze * Ge + oe * Ce, Ae = -ze * Ce + oe * Ge;
    return {
      ...N,
      u: ((te + Ie) % 1 + 1) % 1,
      v: be + Ae
    };
  }
  function W(N) {
    const Q = (N == null ? void 0 : N.bbox) || null, M = (N == null ? void 0 : N.transform) || {};
    return Q ? {
      u: (((Number(Q.u0 || 0) + Number(Q.u1 || 0)) * 0.5 + Number(M.du || 0)) % 1 + 1) % 1,
      v: Oe((Number(Q.v0 || 0) + Number(Q.v1 || 0)) * 0.5 + Number(M.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function se(N) {
    var Ve, We, Ge, Ce;
    const Q = (N == null ? void 0 : N.bbox) || null;
    if (!Q) return [];
    const M = {
      u: (Number(Q.u0 || 0) + Number(Q.u1 || 0)) * 0.5,
      v: (Number(Q.v0 || 0) + Number(Q.v1 || 0)) * 0.5
    }, re = Math.max(0.01, Number(((Ve = N == null ? void 0 : N.transform) == null ? void 0 : Ve.scale) || 1)), te = Number(((We = N == null ? void 0 : N.transform) == null ? void 0 : We.rot_deg) || 0), be = Number(((Ge = N == null ? void 0 : N.transform) == null ? void 0 : Ge.du) || 0), Ne = Number(((Ce = N == null ? void 0 : N.transform) == null ? void 0 : Ce.dv) || 0);
    return [
      { u: Number(Q.u0 || 0), v: Number(Q.v0 || 0) },
      { u: Number(Q.u1 || 0), v: Number(Q.v0 || 0) },
      { u: Number(Q.u1 || 0), v: Number(Q.v1 || 0) },
      { u: Number(Q.u0 || 0), v: Number(Q.v1 || 0) }
    ].map((ze) => D(x(ze, M, re, te), be, Ne));
  }
  function K(N) {
    const Q = we((N == null ? void 0 : N.rasterObjectId) || (N == null ? void 0 : N.id) || ""), M = (N == null ? void 0 : N.transform) || {}, re = (N == null ? void 0 : N.bbox) || {}, te = `${Q}:${r.mode}:${u()}:${re.u0}:${re.v0}:${re.u1}:${re.v1}:${M.du}:${M.dv}:${M.rot_deg}:${M.scale}`;
    if (r.mode === "frame") {
      const be = a(), Ne = be ? c(be) : null;
      return `${te}:frame:${String((be == null ? void 0 : be.id) || "")}:${Math.round(Number((Ne == null ? void 0 : Ne.x) || 0))}:${Math.round(Number((Ne == null ? void 0 : Ne.y) || 0))}:${Math.round(Number((Ne == null ? void 0 : Ne.w) || 0))}:${Math.round(Number((Ne == null ? void 0 : Ne.h) || 0))}`;
    }
    return `${te}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function q(N) {
    const Q = String((N == null ? void 0 : N.id) || ""), M = ge(N) ? "frame" : P(N) ? "sticker" : "item", re = $(N), te = [
      M,
      Q,
      r.mode,
      Number((re == null ? void 0 : re.yaw_deg) || 0).toFixed(4),
      Number((re == null ? void 0 : re.pitch_deg) || 0).toFixed(4),
      Number((re == null ? void 0 : re.hFOV_deg) || 0).toFixed(4),
      Number((re == null ? void 0 : re.vFOV_deg) || 0).toFixed(4),
      Number((re == null ? void 0 : re.rot_deg) || 0).toFixed(4),
      Number((re == null ? void 0 : re.roll_deg) || 0).toFixed(4),
      Vr(re),
      I(N) && w(N)
    ].join(":");
    if (r.mode === "frame") {
      const be = a(), Ne = be ? c(be) : null;
      return `${te}:frame:${String((be == null ? void 0 : be.id) || "")}:${Math.round(Number((Ne == null ? void 0 : Ne.x) || 0))}:${Math.round(Number((Ne == null ? void 0 : Ne.y) || 0))}:${Math.round(Number((Ne == null ? void 0 : Ne.w) || 0))}:${Math.round(Number((Ne == null ? void 0 : Ne.h) || 0))}`;
    }
    return `${te}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function U() {
    E().forEach((Q, M) => {
      Q.type === "sticker" && Q.item && (Q.item.z_index = M), Q.type === "strokeGroup" && Q.item && (Q.item.z_index = M), Q.type === "rasterObject" && Q.item && (Q.item.z_index = M);
    });
  }
  return {
    connect(N) {
      ({
        getActiveCutoutShot: a,
        getBrushPresetIdForTool: l,
        getFrameViewRect: c,
        getPaintingLayerList: d,
        getPaintingRevisionKey: u,
        getSelected: f,
        getStickerImage: p,
        sceneStickerShown: w,
        upstreamStickerImage: h,
        upstreamStickers: m
      } = N);
    },
    getList: b,
    skyStickers: V,
    upstreamSkyStickers: T,
    stickerById: ee,
    isSceneSticker: I,
    isUploadingSticker: X,
    poseOf: $,
    writePose: J,
    getPaintingGroupList: ye,
    makeStrokeGroupSelectionId: ve,
    makeRasterObjectSelectionId: ue,
    parseRasterObjectSelectionId: we,
    ensurePaintingGroupEntry: ie,
    getFrameCornersUv: le,
    ensureGroupFrame: R,
    getDisplayListObjects: E,
    getOrderedPaintGroupIds: k,
    getOrderedDisplayListObjects: _,
    getSelectableStrokeGroupItems: y,
    getSelectableRasterObjectItems: L,
    cutoutStickers: Z,
    getCutoutSelectableItems: he,
    isShotItem: ge,
    isStickerItem: P,
    getRasterObjectList: ae,
    getRasterObjectItem: g,
    isRasterObjectItem: S,
    getStrokeGroupItem: O,
    isStrokeGroupItem: v,
    getStrokeGroupStrokes: j,
    getStrokeGeomCacheKey: H,
    shortestWrappedDelta: A,
    getStrokeGroupCenterUv: F,
    applyStrokeGroupOffset: G,
    applyStrokeGroupTransform: Y,
    applyRasterObjectOffset: fe,
    applyRasterObjectTransform: Se,
    getNextStickerZIndex: ke,
    isExternalSticker: ce,
    isStickerHidden: xe,
    getStickerDisplayAlpha: B,
    inverseTransformErpPointAround: pe,
    getRasterObjectCenterUv: W,
    getRasterObjectTransformedErpPoints: se,
    getRasterObjectGeomCacheKey: K,
    getSceneItemGeomCacheKey: q,
    normalizeDisplayZIndices: U
  };
}
function X2(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    sceneV2: i,
    shotEditor: o,
    state: s,
    timeline: a,
    type: l
  } = e;
  let c, d, u, f, p, w, h, m, b, V, T, ee, I, X, $, J, ye, _e, me, ve, ue, we, de, ne, ie, le, z, C, R, E, k, _, y;
  function L() {
    const K = String(t.selectedId || "");
    if (!K) return null;
    const q = I(K);
    if (q) return q;
    const U = V(K);
    return U || (o ? w().find((N) => String((N == null ? void 0 : N.id) || "") === K) || null : m().find((N) => String((N == null ? void 0 : N.id) || "") === K) || null);
  }
  function Z() {
    const K = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], q = [], U = /* @__PURE__ */ new Set();
    return K.forEach((N) => {
      const Q = String(N || "").trim();
      if (!Q || U.has(Q)) return;
      U.add(Q);
      const M = Q === String(t.selectedId || "") ? L() : I(Q) || V(Q) || (o ? w().find((re) => String((re == null ? void 0 : re.id) || "") === Q) : m().find((re) => String((re == null ? void 0 : re.id) || "") === Q));
      M && q.push(M);
    }), q;
  }
  function he(K = null) {
    const q = Array.isArray(K) ? K : Z();
    if (!q || q.length < 2) return null;
    const U = q.map((Ne) => ne(Ne)).filter((Ne) => (Ne == null ? void 0 : Ne.visible) && Array.isArray(Ne.corners) && Ne.corners.length);
    if (!U.length) return null;
    const N = U.flatMap((Ne) => Ne.corners.map((Ee) => Number((Ee == null ? void 0 : Ee.x) || 0))), Q = U.flatMap((Ne) => Ne.corners.map((Ee) => Number((Ee == null ? void 0 : Ee.y) || 0))), M = Math.min(...N), re = Math.max(...N), te = Math.min(...Q), be = Math.max(...Q);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (M + re) * 0.5, y: (te + be) * 0.5 },
      corners: [
        { x: M, y: te },
        { x: re, y: te },
        { x: re, y: be },
        { x: M, y: be }
      ],
      edgeMidpoints: [
        { edge: "top", x: (M + re) * 0.5, y: te, a: { x: M, y: te }, b: { x: re, y: te } },
        { edge: "right", x: re, y: (te + be) * 0.5, a: { x: re, y: te }, b: { x: re, y: be } },
        { edge: "bottom", x: (M + re) * 0.5, y: be, a: { x: re, y: be }, b: { x: M, y: be } },
        { edge: "left", x: M, y: (te + be) * 0.5, a: { x: M, y: be }, b: { x: M, y: te } }
      ],
      rotateStemBase: { x: (M + re) * 0.5, y: te },
      rotateHandle: { x: (M + re) * 0.5, y: te - 30 }
    };
  }
  function ge(K) {
    const q = String((K == null ? void 0 : K.id) || "").trim();
    return !!q && Array.isArray(t.selectedIds) && t.selectedIds.includes(q);
  }
  function P() {
    const K = L();
    return K ? ue(K) || J(K) ? "stroke" : _e(K) ? "frame" : "image" : null;
  }
  function ae(K) {
    if (!K || typeof K != "object") return !1;
    if (ue(K)) {
      const q = String(K.actionGroupId || K.id || "").trim(), U = b().find((N) => String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || "").trim() === q);
      return (U == null ? void 0 : U.locked) === !0;
    }
    if (J(K)) {
      const q = le(K.rasterObjectId || K.id || ""), U = T().find((N) => String((N == null ? void 0 : N.id) || "").trim() === q);
      return (U == null ? void 0 : U.locked) === !0;
    }
    return Xt(K) && !wl(K) ? !0 : K.locked === !0;
  }
  function g(K = null) {
    const q = Array.isArray(K) ? K : Z();
    return q.length > 0 && q.every((U) => ae(U));
  }
  function S(K, q) {
    const U = q === !0;
    if (!K || typeof K != "object") return !1;
    if (ue(K)) {
      const N = String(K.actionGroupId || K.id || "").trim(), Q = b().find((M) => String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || "").trim() === N);
      return !Q || Q.locked === U ? !1 : (Q.locked = U, !0);
    }
    if (J(K)) {
      const N = le(K.rasterObjectId || K.id || ""), Q = T().find((M) => String((M == null ? void 0 : M.id) || "").trim() === N);
      return !Q || Q.locked === U ? !1 : (Q.locked = U, !0);
    }
    return K.locked === U || Xt(K) && !wl(K) ? !1 : (K.locked = U, !0);
  }
  function O() {
    if (r) return;
    const K = Z();
    if (!K.length) return;
    const q = !g(K);
    let U = !1;
    K.forEach((N) => {
      S(N, q) && (U = !0);
    }), U && (C(), d(), _(), y(), R());
  }
  function v(K) {
    ce(), a.selection = null, t.selectedId = (K == null ? void 0 : K.id) || null, t.selectedIds = K != null && K.id ? [K.id] : [], K && ve(K) && !Xt(K) ? s.active.selected_sticker_id = K.id || null : s.active.selected_sticker_id = null, K && _e(K) ? s.active.selected_shot_id = K.id || null : K ? _e(K) || (s.active.selected_shot_id = s.active.selected_shot_id) : s.active.selected_shot_id = null;
  }
  function j(K, q = null) {
    const U = [], N = /* @__PURE__ */ new Set();
    (Array.isArray(K) ? K : []).forEach((re) => {
      const te = String((re == null ? void 0 : re.id) || "").trim();
      !te || N.has(te) || (N.add(te), U.push(te));
    }), t.selectedIds = U, ce(), a.selection = null;
    const Q = String(q || "").trim();
    t.selectedId = Q && U.includes(Q) ? Q : U[U.length - 1] || null;
    const M = L();
    s.active.selected_sticker_id = M && ve(M) && !Xt(M) && M.id || null, M && _e(M) ? s.active.selected_shot_id = M.id || null : U.length || (s.active.selected_shot_id = null);
  }
  function H() {
    const K = (Array.isArray(s.shots) ? s.shots : []).map((U, N) => ({
      kind: "frame",
      item: U,
      label: String((U == null ? void 0 : U.label) || `Frame ${N + 1}`)
    })), q = f().map((U, N) => {
      var M, re;
      const Q = $(U) ? String(U.id || Xd) : String(((re = (M = s.assets) == null ? void 0 : M[U.asset_id]) == null ? void 0 : re.name) || U.asset_id || U.id || `Image ${N + 1}`);
      return {
        kind: "image",
        item: U,
        label: Q
      };
    });
    return [...K, ...q];
  }
  function D(K) {
    return K === "frame" ? Ke.camera : K === "stroke" ? Ke.paintbrush_vertical_tool : Ke.image;
  }
  function A(K) {
    return !K || !K.item ? {
      label: String((K == null ? void 0 : K.label) || ""),
      icon: null
    } : {
      label: String(K.label || ""),
      icon: D(K.kind)
    };
  }
  function F() {
    if (r) return;
    const K = L();
    !K || !$(K) || (K.visible = me(K), pe(), we(), C(), d(), y(), _(), R());
  }
  function x() {
    if (r || l !== "stickers") return;
    const K = L();
    if (!K || !$(K)) return;
    const q = K.initial_pose;
    if (!q || typeof q != "object") return;
    K.yaw_deg = Number(q.yaw_deg ?? K.yaw_deg ?? 0), K.pitch_deg = Number(q.pitch_deg ?? K.pitch_deg ?? 0), K.hFOV_deg = Number(q.hFOV_deg ?? K.hFOV_deg ?? 30);
    const U = ee(Fi, () => {
      R();
    });
    U && (U.complete || U.naturalWidth || U.width) ? K.vFOV_deg = u(
      Number(q.hFOV_deg ?? K.hFOV_deg ?? 30),
      Number(U.naturalWidth || U.width || 1),
      Number(U.naturalHeight || U.height || 1)
    ) : K.vFOV_deg = Number(q.vFOV_deg ?? K.vFOV_deg ?? 30), K.rot_deg = Number(q.rot_deg ?? K.rot_deg ?? 0), C(), d(), y(), _(), R();
  }
  function G(K) {
    if (!K || !$(K)) return null;
    const q = K.initial_pose;
    if (!q || typeof q != "object") return null;
    const U = {
      yaw_deg: Number(q.yaw_deg ?? K.yaw_deg ?? 0),
      pitch_deg: Number(q.pitch_deg ?? K.pitch_deg ?? 0),
      hFOV_deg: Number(q.hFOV_deg ?? K.hFOV_deg ?? 30),
      vFOV_deg: Number(q.vFOV_deg ?? K.vFOV_deg ?? 30),
      rot_deg: Number(q.rot_deg ?? K.rot_deg ?? 0)
    }, N = ee(Fi, () => {
      R();
    });
    return N && (N.complete || N.naturalWidth || N.width) && (U.vFOV_deg = u(
      U.hFOV_deg,
      Number(N.naturalWidth || N.width || 1),
      Number(N.naturalHeight || N.height || 1)
    )), U;
  }
  function Y() {
    const K = L();
    if (!K || !$(K)) return !1;
    const q = G(K);
    if (!q) return !1;
    const U = (N, Q) => Math.abs(Number(N || 0) - Number(Q || 0)) <= 1e-4;
    return !(U(K.yaw_deg, q.yaw_deg) && U(K.pitch_deg, q.pitch_deg) && U(K.hFOV_deg, q.hFOV_deg) && U(K.vFOV_deg, q.vFOV_deg) && U(K.rot_deg, q.rot_deg));
  }
  function fe(K = {}) {
    const U = K.preservePanelValues !== !1 ? z(L()) : null;
    U && (t.panelLastValues = {
      yaw_deg: Number(U.yaw_deg || 0),
      pitch_deg: Number(U.pitch_deg || 0),
      hFOV_deg: Number(U.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(U.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(U.rot_deg || 0),
      roll_deg: Number(U.roll_deg || 0),
      aspect_id: Vr(U)
    }), t.selectedId = null, t.selectedIds = [], ce(), t.cutoutAspectOpen = !1, s.active.selected_sticker_id = null, s.active.selected_shot_id = null;
  }
  function Se() {
    if (!i || !t.worldSelectedId) return null;
    const K = k(t.worldSelectedId);
    return (K == null ? void 0 : K.placement) === "world" ? K : null;
  }
  function ke(K) {
    v(null), t.worldSelectedId = K, n.backgroundDirty = !0;
  }
  function ce() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function xe(K) {
    return !!K && !r && !ae(K);
  }
  function B() {
    if (l !== "cutout") return;
    const K = p();
    K && (t.selectedId = String(K.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function pe() {
    var q;
    const K = L();
    (ye(K) && !E(K) || t.selectedId === vd && X() && !c() || P() === "stroke" && !ie()) && v(null), ((q = Se()) == null ? void 0 : q.visible) === !1 && ce();
  }
  function W() {
    if (r) return;
    const K = Z();
    if (!L() || K.length === 0 || K.some(Xt) || K.some((te) => ae(te))) return;
    de();
    const U = h(), N = new Set(K.map((te) => ve(te) ? `sticker:${String(te.id || "")}` : J(te) ? `rasterObject:${le(te.rasterObjectId || te.id || "")}` : `strokeGroup:${String(te.actionGroupId || te.id || "")}`)), Q = [], M = [];
    if (U.forEach((te) => {
      var Ne, Ee;
      const be = te.type === "sticker" ? `sticker:${String(((Ne = te.item) == null ? void 0 : Ne.id) || "")}` : te.type === "rasterObject" ? `rasterObject:${String(((Ee = te.item) == null ? void 0 : Ee.id) || te.id || "")}` : `strokeGroup:${String(te.actionGroupId || "")}`;
      N.has(be) ? Q.push(te) : M.push(te);
    }), !Q.length || Q[Q.length - 1] === U[U.length - 1]) return;
    [...M, ...Q].forEach((te, be) => {
      te.type === "sticker" && te.item && (te.item.z_index = be), te.type === "strokeGroup" && te.item && (te.item.z_index = be), te.type === "rasterObject" && te.item && (te.item.z_index = be);
    }), we(), C(), d(), _(), R();
  }
  function se() {
    if (r) return;
    const K = Z();
    if (!L() || K.length === 0 || K.some(Xt) || K.some((te) => ae(te))) return;
    de();
    const U = h(), N = new Set(K.map((te) => ve(te) ? `sticker:${String(te.id || "")}` : J(te) ? `rasterObject:${le(te.rasterObjectId || te.id || "")}` : `strokeGroup:${String(te.actionGroupId || te.id || "")}`)), Q = [], M = [];
    if (U.forEach((te) => {
      var Ne, Ee;
      const be = te.type === "sticker" ? `sticker:${String(((Ne = te.item) == null ? void 0 : Ne.id) || "")}` : te.type === "rasterObject" ? `rasterObject:${String(((Ee = te.item) == null ? void 0 : Ee.id) || te.id || "")}` : `strokeGroup:${String(te.actionGroupId || "")}`;
      N.has(be) ? Q.push(te) : M.push(te);
    }), !Q.length || Q[0] === U[0]) return;
    [...Q, ...M].forEach((te, be) => {
      te.type === "sticker" && te.item && (te.item.z_index = be), te.type === "strokeGroup" && te.item && (te.item.z_index = be), te.type === "rasterObject" && te.item && (te.item.z_index = be);
    }), we(), C(), d(), _(), R();
  }
  return {
    connect(K) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: d,
        computeStickerVFov: u,
        cutoutStickers: f,
        getActiveCutoutShot: p,
        getCutoutSelectableItems: w,
        getDisplayListObjects: h,
        getList: m,
        getPaintingGroupList: b,
        getRasterObjectItem: V,
        getRasterObjectList: T,
        getStickerUiImage: ee,
        getStrokeGroupItem: I,
        hasCamera: X,
        isExternalSticker: $,
        isRasterObjectItem: J,
        isSceneSticker: ye,
        isShotItem: _e,
        isStickerHidden: me,
        isStickerItem: ve,
        isStrokeGroupItem: ue,
        markObjectVisualsDirty: we,
        normalizeDisplayZIndices: de,
        objectGeom: ne,
        paintingShown: ie,
        parseRasterObjectSelectionId: le,
        poseOf: z,
        pushHistory: C,
        requestDraw: R,
        sceneStickerShown: E,
        stickerById: k,
        updateSelectionMenu: _,
        updateSidePanel: y
      } = K);
    },
    getSelected: L,
    getSelectedItems: Z,
    getMultiSelectionGeom: he,
    isItemSelected: ge,
    getSelectedKind: P,
    isItemLocked: ae,
    areAllSelectedItemsLocked: g,
    toggleSelectedLock: O,
    setSelectedItem: v,
    setSelectedItems: j,
    getCutoutInspectorItems: H,
    getSelectionItemIcon: D,
    getSelectionItemLabelData: A,
    toggleSelectedExternalStickerVisibility: F,
    restoreSelectedToInitialPose: x,
    canRestoreSelectedToInitial: Y,
    clearSelection: fe,
    selectedWorldSticker: Se,
    selectWorldSticker: ke,
    clearWorldSelection: ce,
    worldStickerEditable: xe,
    applyInitialCutoutFocus: B,
    releaseHiddenSelection: pe,
    bringSelectedToFront: W,
    sendSelectedToBack: se
  };
}
function J2(e) {
  const {
    backgroundCanvas: t,
    canvas: r,
    editor: n,
    state: i,
    studio: o
  } = e;
  let s, a, l, c, d, u, f = { key: [], projection: null };
  function p() {
    return o && s() && i.camera.projection === "erp";
  }
  function w() {
    const L = J({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !L || L.length !== 4 ? !1 : L[0].y >= L[3].y;
  }
  function h() {
    return sg({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function m() {
    const y = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return y.some((L, Z) => L !== f.key[Z]) && (f = { key: y, projection: lg(h(), r.width, r.height) }), f.projection;
  }
  function b(y) {
    const L = m().project(y);
    return L.z > 1e-4 ? L : null;
  }
  function V(y, L) {
    return m().ray(y, L);
  }
  function T() {
    const y = r.width, L = r.height, Z = 2;
    if (y / Math.max(L, 1) >= Z) {
      const g = L, S = g * Z;
      return { x: (y - S) * 0.5, y: 0, w: S, h: g };
    }
    const ge = y, P = ge / Z;
    return { x: 0, y: (L - P) * 0.5, w: ge, h: P };
  }
  function ee(y) {
    return {
      lon: Math.atan2(y.x, y.z),
      lat: Math.asin(Oe(y.y, -1, 1))
    };
  }
  function I(y, L = null) {
    const { lon: Z, lat: he } = ee(y), ge = T();
    let P = ge.x + (Z / (2 * Math.PI) + 0.5) * ge.w;
    const ae = ge.y + (0.5 - he / Math.PI) * ge.h;
    if (L !== null) {
      for (; P - L > ge.w / 2; ) P -= ge.w;
      for (; P - L < -ge.w / 2; ) P += ge.w;
    }
    return { x: P, y: ae, z: 1 };
  }
  function X(y) {
    const L = c(y), Z = wo(
      Number(L.yaw_deg || 0),
      Number(L.pitch_deg || 0),
      Number(L.rot_deg || L.roll_deg || 0)
    ), he = Math.tan(Oe(Number(L.hFOV_deg || 20), 0.1, 179) * 0.5 * Nr), ge = Math.tan(Oe(Number(L.vFOV_deg || 20), 0.1, 179) * 0.5 * Nr);
    return {
      centerDir: Z.fwd,
      right: Z.right,
      up: Z.up,
      tanX: he,
      tanY: ge
    };
  }
  function $(y, L, Z) {
    return m2(Vp(Vp(y.centerDir, $p(y.right, L)), $p(y.up, Z)));
  }
  function J(y) {
    const L = X(y);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: he, v: ge }) => $(L, he * L.tanX, ge * L.tanY));
  }
  function ye(y, L, Z) {
    const he = X(y), ge = (L * 2 - 1) * he.tanX, P = (1 - Z * 2) * he.tanY;
    return $(he, ge, P);
  }
  function _e(y) {
    const L = t.width / Math.max(1, r.width), Z = t.height / Math.max(1, r.height);
    return { x: y.x * L, y: y.y * Z, w: y.w * L, h: y.h * Z };
  }
  function me(y, L = null, Z = null, he = null) {
    if (n.mode === "frame") {
      const ge = L || a();
      if (!ge) return [];
      const P = Z || l(ge);
      return C(y, ge, P);
    }
    return ie(y, he);
  }
  function ve(y, L = null, Z = null, he = null, ge = null) {
    if (!y) return null;
    if (n.mode === "unwrap") {
      const ae = ie([y], ge);
      return ae[0] ? { x: ae[0].x, y: ae[0].y, z: 1 } : null;
    }
    const P = we(y);
    return P ? d(P, L, Z, he) : null;
  }
  function ue(y, L) {
    if (!y || !L) return null;
    const Z = Number(L.x || 0), he = Number(L.y || 0);
    return ye(y, Z, he);
  }
  function we(y) {
    if (!y) return null;
    const L = (Number(y.u || 0) - 0.5) * (2 * Math.PI), Z = (0.5 - Number(y.v || 0)) * Math.PI, he = Math.cos(Z);
    return Jl(he * Math.sin(L), Math.sin(Z), he * Math.cos(L));
  }
  function de(y, L) {
    if (!y || !L) return null;
    const Z = X(y), he = zc(L, Z.centerDir);
    if (!Number.isFinite(he) || he <= 1e-6) return null;
    const ge = zc(L, Z.right) / he, P = zc(L, Z.up) / he;
    return {
      x: (ge / Math.max(1e-6, Z.tanX) + 1) * 0.5,
      y: (1 - P / Math.max(1e-6, Z.tanY)) * 0.5
    };
  }
  function ne(y) {
    if (!Array.isArray(y) || y.length < 3) return [];
    if (n.mode === "unwrap") {
      const Z = T();
      return y.map((he) => ({
        x: Z.x + Number(he.u || 0) * Z.w,
        y: Z.y + Number(he.v || 0) * Z.h
      }));
    }
    const L = y.map((Z) => b(we(Z))).filter(Boolean);
    return L.every((Z) => Number(Z.z || 0) > 0) ? L.map((Z) => ({ x: Number(Z.x || 0), y: Number(Z.y || 0) })) : [];
  }
  function ie(y, L = null) {
    if (!Array.isArray(y) || y.length < 1) return [];
    if (n.mode === "unwrap") {
      const he = T();
      return y.map((ge) => {
        const P = (Number(ge.u || 0) % 1 + 1) % 1, ae = L == null ? P : Number(L || 0) + u(P, L);
        return {
          x: he.x + ae * he.w,
          y: he.y + Number(ge.v || 0) * he.h
        };
      });
    }
    const Z = y.map((he) => b(we(he))).filter(Boolean);
    return Z.every((he) => Number(he.z || 0) > 0) ? Z.map((he) => ({ x: Number(he.x || 0), y: Number(he.y || 0) })) : [];
  }
  function le(y, L = 160) {
    if (!Array.isArray(y) || y.length < 3) return !1;
    for (let Z = 0; Z < y.length; Z += 1) {
      const he = y[Z], ge = y[(Z + 1) % y.length];
      if (!he || !ge || !Number.isFinite(he.x) || !Number.isFinite(he.y) || !Number.isFinite(ge.x) || !Number.isFinite(ge.y) || Math.hypot(Number(ge.x) - Number(he.x), Number(ge.y) - Number(he.y)) > L) return !1;
    }
    return !0;
  }
  function z(y, L, Z) {
    if (!Array.isArray(y) || y.length < 3 || !L || !Z) return [];
    const he = [];
    for (const ge of y) {
      const P = we(ge), ae = de(L, P);
      if (!ae) return [];
      he.push({
        x: Number(Z.x || 0) + Number(ae.x || 0) * Number(Z.w || 0),
        y: Number(Z.y || 0) + Number(ae.y || 0) * Number(Z.h || 0)
      });
    }
    return le(he, Math.max(80, Math.max(Z.w, Z.h) * 0.75)) ? he : [];
  }
  function C(y, L, Z) {
    if (!Array.isArray(y) || y.length < 1 || !L || !Z) return [];
    const he = [];
    for (const ge of y) {
      const P = we(ge), ae = de(L, P);
      ae && he.push({
        x: Number(Z.x || 0) + Number(ae.x || 0) * Number(Z.w || 0),
        y: Number(Z.y || 0) + Number(ae.y || 0) * Number(Z.h || 0)
      });
    }
    return he;
  }
  function R(y) {
    const L = r.getBoundingClientRect();
    return {
      x: (y.clientX - L.left) / L.width * r.width,
      y: (y.clientY - L.top) / L.height * r.height
    };
  }
  function E(y) {
    const L = r.getBoundingClientRect();
    return {
      x: Number(y.clientX) - Number(L.left || 0),
      y: Number(y.clientY) - Number(L.top || 0)
    };
  }
  function k(y, L = performance.now()) {
    if (n.mode === "unwrap") {
      const P = T(), ae = (y.x - P.x) / Math.max(1, P.w), g = (y.y - P.y) / Math.max(1, P.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (ae % 1 + 1) % 1,
        v: Oe(g, 0, 1),
        t: Number(L || 0)
      };
    }
    const Z = V(y.x, y.y), { lon: he, lat: ge } = ee(Z);
    return {
      targetKind: "ERP_GLOBAL",
      u: (he / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Oe(0.5 - ge / Math.PI, 0, 1),
      t: Number(L || 0)
    };
  }
  function _(y, L, Z = performance.now()) {
    const he = l(L);
    if (!he) return null;
    const ge = {
      x: (Number(y.x) - he.x) / Math.max(1, he.w),
      y: (Number(y.y) - he.y) / Math.max(1, he.h)
    };
    if (ge.x < 0 || ge.x > 1 || ge.y < 0 || ge.y > 1) return null;
    const P = ue(L, ge);
    if (!P) return null;
    const { lon: ae, lat: g } = ee(P);
    return {
      targetKind: "ERP_GLOBAL",
      u: (ae / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Oe(0.5 - g / Math.PI, 0, 1),
      t: Number(Z || 0)
    };
  }
  return {
    connect(y) {
      ({
        cameraShoots: s,
        getActiveCutoutShot: a,
        getFrameViewRect: l,
        poseOf: c,
        projectSceneItemDir: d,
        shortestWrappedDelta: u
      } = y);
    },
    isErpCamera: p,
    currentViewCamera: h,
    currentViewProjection: m,
    projectDir: b,
    screenToWorldDir: V,
    getUnwrapRect: T,
    projectDirUnwrap: I,
    getStickerFrame: X,
    stickerDirFromFrame: $,
    stickerCornersDir: J,
    stickerSampleDir: ye,
    stickerCornerOrderSanity: w,
    projectEditorPoints: me,
    projectErpPointToEditor: ve,
    frameLocalPointToWorldDir: ue,
    erpPointToWorldDir: we,
    worldDirToFrameLocalPoint: de,
    projectLassoPointsToCurrentView: ne,
    projectErpLassoPointsToFrameRect: z,
    screenPos: R,
    screenPosCss: E,
    screenPosToErpPoint: k,
    screenPosToFrameAsErpPoint: _,
    deviceRect: _e
  };
}
function Z2(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, s, a, l, c, d, u, f, p, w, h, m, b, V, T, ee, I, X, $, J, ye, _e, me, ve, ue, we, de, ne, ie, le, z, C;
  function R(P, ae) {
    const g = String(P.actionGroupId || P.id || "").trim(), S = T(g, P.layerKind), O = a(g, P.layerKind, S), v = (O == null ? void 0 : O.centerUv) || V(g, P.layerKind, S), j = n.mode === "unwrap" ? Number((v == null ? void 0 : v.u) || 0) : null, H = [], D = n.mode === "frame" ? l() : null, A = D ? u(D) : null;
    for (const B of S) {
      const pe = (B == null ? void 0 : B.geometry) || null, W = (pe == null ? void 0 : pe.geometryKind) === "lasso_fill" ? pe == null ? void 0 : pe.points : (pe == null ? void 0 : pe.processedPoints) || (pe == null ? void 0 : pe.rawPoints) || (pe == null ? void 0 : pe.points) || [], se = we(W, D, A, j).filter((U) => Number.isFinite(U == null ? void 0 : U.x) && Number.isFinite(U == null ? void 0 : U.y));
      if (!se.length) continue;
      const K = c(String((B == null ? void 0 : B.toolKind) || "pen")), q = Fn[K] || Fn[Dr];
      H.push({
        points: se,
        closed: String((pe == null ? void 0 : pe.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((B == null ? void 0 : B.size) || 10) * Math.max(0.1, Number((q == null ? void 0 : q.sizeScale) ?? 1)) + 10),
        layerKind: String((B == null ? void 0 : B.layerKind) || P.layerKind || "paint")
      });
    }
    const F = de(v, null, D, A, j);
    if (!F) {
      const B = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(ae, B), B;
    }
    const G = d(O).map((B) => de(B, F.x, D, A, j)).filter((B) => Number.isFinite(B == null ? void 0 : B.x) && Number.isFinite(B == null ? void 0 : B.y)).map((B) => ({ x: Number(B.x || 0), y: Number(B.y || 0) }));
    if (G.length < 4) {
      const B = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(ae, B), B;
    }
    const Y = (B, pe) => ({
      x: (Number((B == null ? void 0 : B.x) || 0) + Number((pe == null ? void 0 : pe.x) || 0)) * 0.5,
      y: (Number((B == null ? void 0 : B.y) || 0) + Number((pe == null ? void 0 : pe.y) || 0)) * 0.5,
      a: B,
      b: pe
    }), fe = Y(G[0], G[1]), Se = Y(G[1], G[2]), ke = Y(G[2], G[3]), ce = Y(G[3], G[0]), xe = {
      kind: "strokeGroup",
      center: { x: Number(F.x || 0), y: Number(F.y || 0) },
      corners: G,
      edgeMidpoints: [
        { edge: "top", ...fe },
        { edge: "right", ...Se },
        { edge: "bottom", ...ke },
        { edge: "left", ...ce }
      ],
      rotateStemBase: { x: fe.x, y: fe.y },
      rotateHandle: { x: fe.x, y: fe.y - 30 },
      strokePaths: H,
      visible: !0
    };
    return n._strokeGeomCache.set(ae, xe), xe;
  }
  function E(P, ae) {
    const g = n.mode === "frame" ? l() : null, S = g ? u(g) : null, O = f(P), v = n.mode === "unwrap" ? Number((O == null ? void 0 : O.u) || 0) : null, j = de(O, null, g, S, v), D = w(P).map((G) => de(G, (j == null ? void 0 : j.x) ?? null, g, S, v)).filter((G) => Number.isFinite(G == null ? void 0 : G.x) && Number.isFinite(G == null ? void 0 : G.y));
    if (!Array.isArray(D) || D.length < 4) {
      const G = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(ae, G), G;
    }
    const A = D.slice(0, 4).map((G) => ({ x: Number((G == null ? void 0 : G.x) || 0), y: Number((G == null ? void 0 : G.y) || 0) })), x = {
      kind: "rasterObject",
      center: {
        x: A.reduce((G, Y) => G + Number(Y.x || 0), 0) / A.length,
        y: A.reduce((G, Y) => G + Number(Y.y || 0), 0) / A.length
      },
      corners: A,
      visible: !0
    };
    return n._strokeGeomCache.set(ae, x), x;
  }
  function k(P, ae = null, g = null, S = null, O = {}) {
    if (n.mode === "frame") {
      const F = g || l(), x = S || u(F);
      if (!F || !x) return null;
      const G = F ? C(F, P) : null;
      return G ? {
        x: Number(x.x || 0) + Number(G.x || 0) * Number(x.w || 0),
        y: Number(x.y || 0) + Number(G.y || 0) * Number(x.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return ue(P, ae);
    const v = 1e-4, j = o().project(P, v);
    if (!Number.isFinite(j.z) || j.z <= v && !(O != null && O.clipBehind)) return null;
    const H = r.width, D = r.height, A = Math.max(H, D) * 2;
    return {
      x: Oe(j.x, -A, H + A),
      y: Oe(j.y, -A, D + A),
      z: Math.max(j.z, v),
      rawZ: j.z,
      clipped: j.z <= v
    };
  }
  function _(P, ae = []) {
    if (n.mode !== "pano" || J(P)) return 1;
    const g = ae.map((S) => Number((S == null ? void 0 : S.rawZ) ?? (S == null ? void 0 : S.z))).filter((S) => Number.isFinite(S));
    return g.length ? p2(0.035, 0.2, Math.min(...g)) : 1;
  }
  function y(P) {
    if (X(P) && !ne(P)) return { visible: !1 };
    const ae = me(P), g = Tn(Number(ae.yaw_deg || 0), Number(ae.pitch_deg || 0)), S = n.mode === "frame" ? l() : null, O = S ? u(S) : null, v = n.mode === "pano" && (J(P) || $(P)), j = v ? { clipBehind: !0 } : null, H = k(g, null, S, O, j);
    if (!H) return { visible: !1 };
    const D = m(P), F = ie(P).map((N) => k(N, H.x, S, O, j)).filter((N) => Number.isFinite(N == null ? void 0 : N.x) && Number.isFinite(N == null ? void 0 : N.y));
    if (F.length < 4) return { visible: !1 };
    const x = le(D, 0, D.tanY), G = le(D, 0, D.tanY + Math.max(D.tanY * 0.43, 0.053)), Y = k(x, H.x, S, O, j);
    if (!Y) return { visible: !1 };
    const fe = k(G, (Y == null ? void 0 : Y.x) ?? H.x, S, O, j), Se = ((fe == null ? void 0 : fe.x) ?? Y.x) - Y.x, ke = ((fe == null ? void 0 : fe.y) ?? Y.y) - Y.y, ce = Math.hypot(Se, ke) || 1, xe = {
      x: Y.x + Se / ce * 30,
      y: Y.y + ke / ce * 30
    }, B = k(le(D, 0, D.tanY), H.x, S, O, j), pe = k(le(D, D.tanX, 0), H.x, S, O, j), W = k(le(D, 0, -D.tanY), H.x, S, O, j), se = k(le(D, -D.tanX, 0), H.x, S, O, j);
    if (!B || !pe || !W || !se) return { visible: !1 };
    const K = [
      H,
      ...F,
      Y,
      fe,
      B,
      pe,
      W,
      se
    ];
    if (v && !K.some((N) => Number((N == null ? void 0 : N.rawZ) ?? (N == null ? void 0 : N.z)) > 1e-4)) return { visible: !1 };
    const q = _(P, K), U = [
      {
        edge: "top",
        x: B.x,
        y: B.y,
        a: { x: F[0].x, y: F[0].y },
        b: { x: F[1].x, y: F[1].y }
      },
      {
        edge: "right",
        x: pe.x,
        y: pe.y,
        a: { x: F[1].x, y: F[1].y },
        b: { x: F[2].x, y: F[2].y }
      },
      {
        edge: "bottom",
        x: W.x,
        y: W.y,
        a: { x: F[2].x, y: F[2].y },
        b: { x: F[3].x, y: F[3].y }
      },
      {
        edge: "left",
        x: se.x,
        y: se.y,
        a: { x: F[3].x, y: F[3].y },
        b: { x: F[0].x, y: F[0].y }
      }
    ];
    return {
      center: { x: H.x, y: H.y },
      corners: F.map((N) => ({ x: N.x, y: N.y })),
      edgeMidpoints: U,
      rotateStemBase: { x: Y.x, y: Y.y },
      rotateHandle: xe,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: q,
      visible: !0
    };
  }
  function L(P) {
    if (t && $(P) && ee()) return { visible: !1 };
    if (!_e() && (ye(P) || I(P))) return { visible: !1 };
    if (ye(P)) {
      const O = String(P.actionGroupId || P.id || "").trim(), v = b(O, P.layerKind), j = n._strokeGeomCache.get(v);
      return j || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), R(P, v));
    }
    if (I(P)) {
      const O = p(P), v = n._strokeGeomCache.get(O);
      return v || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), E(P, O));
    }
    const ae = h(P), g = n._strokeGeomCache.get(ae);
    if (g) return g;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const S = y(P);
    return n._strokeGeomCache.set(ae, S), S;
  }
  function Z(P, ae, g, S = null) {
    const O = [];
    for (let v = 0; v <= g; v += 1) {
      const j = v / g;
      let H = 0, D = 0;
      ae === 0 ? (H = j, D = 0) : ae === 1 ? (H = 1, D = j) : ae === 2 ? (H = 1 - j, D = 1) : (H = 0, D = 1 - j);
      const A = z(P, H, D), F = n.mode === "unwrap" ? ue(A, S) : ve(A);
      F && O.push(F);
    }
    return O;
  }
  function he() {
    const P = [...Array.isArray(i.shots) ? i.shots : []], ae = [...s()].sort((g, S) => Number(g.z_index || 0) - Number(S.z_index || 0));
    return [...P, ...ae];
  }
  function ge() {
    const P = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...s()].sort((g, S) => Number(S.z_index || 0) - Number(g.z_index || 0)), ...P];
  }
  return {
    connect(P) {
      ({
        currentViewProjection: o,
        cutoutStickers: s,
        ensureGroupFrame: a,
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: c,
        getFrameCornersUv: d,
        getFrameViewRect: u,
        getRasterObjectCenterUv: f,
        getRasterObjectGeomCacheKey: p,
        getRasterObjectTransformedErpPoints: w,
        getSceneItemGeomCacheKey: h,
        getStickerFrame: m,
        getStrokeGeomCacheKey: b,
        getStrokeGroupCenterUv: V,
        getStrokeGroupStrokes: T,
        isFreeSpaceView: ee,
        isRasterObjectItem: I,
        isSceneSticker: X,
        isShotItem: $,
        isStickerItem: J,
        isStrokeGroupItem: ye,
        paintingShown: _e,
        poseOf: me,
        projectDir: ve,
        projectDirUnwrap: ue,
        projectEditorPoints: we,
        projectErpPointToEditor: de,
        sceneStickerShown: ne,
        stickerCornersDir: ie,
        stickerDirFromFrame: le,
        stickerSampleDir: z,
        worldDirToFrameLocalPoint: C
      } = P);
    },
    projectSceneItemDir: k,
    objectGeom: L,
    sampleStickerEdge: Z,
    getCutoutSelectableItemsForDisplay: he,
    getCutoutSelectableItemsForHit: ge
  };
}
const ya = /* @__PURE__ */ new Map();
function Q2(e) {
  const {
    api: t,
    editor: r,
    node: n,
    rasterErpCanvasCache: i,
    rasterImageAlphaCache: o,
    rasterImageCache: s,
    state: a
  } = e;
  let l, c, d, u, f, p, w, h, m, b, V, T, ee, I, X, $, J, ye, _e, me;
  function ve(v = r.interaction) {
    const j = String((v == null ? void 0 : v.kind) || "");
    if (j === "paint_stroke" || j === "paint_lasso_fill" || j === "move_stroke_group" || j === "scale_stroke_group" || j === "rotate_stroke_group" || j === "move_raster_object" || j === "scale_raster_object") return !0;
    if (j === "move_multi") {
      const H = Array.isArray(v == null ? void 0 : v.strokeSnapshots) && v.strokeSnapshots.length > 0, D = Array.isArray(v == null ? void 0 : v.rasterSnapshots) && v.rasterSnapshots.length > 0;
      return H || D;
    }
    return !1;
  }
  function ue() {
    var j, H, D, A;
    let v = null;
    try {
      const F = h(), x = ((A = (D = (H = (j = r.paintEngine) == null ? void 0 : j.getErpTarget) == null ? void 0 : H.call(j, F)) == null ? void 0 : D.displayPaint) == null ? void 0 : A.canvas) || null;
      x && (v = {
        source: x,
        revision: `${m()}:${we()}`
      });
    } catch {
      v = null;
    }
    return v;
  }
  function we() {
    var A, F, x, G, Y, fe, Se;
    const v = r.interaction, j = String((v == null ? void 0 : v.kind) || "");
    if (!ve(v)) return "";
    if (j === "paint_stroke" || j === "paint_lasso_fill") {
      const ke = ((A = v == null ? void 0 : v.stroke) == null ? void 0 : A.geometry) || null, ce = String(((F = v == null ? void 0 : v.stroke) == null ? void 0 : F.layerKind) || ""), xe = ((x = ke == null ? void 0 : ke.rawPoints) == null ? void 0 : x.length) ?? ((G = ke == null ? void 0 : ke.points) == null ? void 0 : G.length) ?? 0, B = String((v == null ? void 0 : v._livePreviewToken) || "");
      return `_${ce || "paint"}_${j}_live${B}_${xe}_${r.livePaintInteractionRevision}`;
    }
    const H = String(((Y = v == null ? void 0 : v.item) == null ? void 0 : Y.actionGroupId) || ""), D = String(((fe = v == null ? void 0 : v.item) == null ? void 0 : fe.rasterObjectId) || ((Se = v == null ? void 0 : v.item) == null ? void 0 : Se.id) || "");
    return `_${j}_${H || D || "active"}_${r.livePaintInteractionRevision}`;
  }
  function de(v, j = null) {
    const H = String((v == null ? void 0 : v.rasterDataUrl) || "").trim();
    if (!H) return null;
    const D = s.get(H);
    if (D)
      return D.complete || D.width || D.naturalWidth, D;
    const A = new Image();
    return A.onload = () => {
      typeof j == "function" && j();
    }, A.src = H, s.set(H, A), A;
  }
  function ne(v) {
    const j = String((v == null ? void 0 : v.rasterDataUrl) || "").trim();
    if (!j) return null;
    const H = o.get(j);
    if (H) return H.ready ? H : null;
    const D = de(v, () => {
      const Se = o.get(j);
      Se && (Se.ready = !1), ye({ localOnly: !0 });
    });
    if (!D || !(D.complete || D.width || D.naturalWidth)) return null;
    const A = Number(D.naturalWidth || D.width || 0), F = Number(D.naturalHeight || D.height || 0);
    if (A < 1 || F < 1) return null;
    const x = on({ label: "editor.image-pixels" });
    x.width = A, x.height = F;
    const G = x.getContext("2d", { willReadFrequently: !0 });
    if (!G) return null;
    G.clearRect(0, 0, A, F), G.drawImage(D, 0, 0, A, F);
    const Y = G.getImageData(0, 0, A, F).data, fe = { canvas: x, width: A, height: F, alpha: Y, ready: !0 };
    return o.set(j, fe), fe;
  }
  function ie(v, j) {
    if (!v || !j) return null;
    const H = (v == null ? void 0 : v.bbox) || null;
    if (!H) return null;
    const D = (v == null ? void 0 : v.transform) || {}, A = {
      u: (Number(H.u0 || 0) + Number(H.u1 || 0)) * 0.5,
      v: (Number(H.v0 || 0) + Number(H.v1 || 0)) * 0.5
    }, F = {
      u: ((Number(j.u || 0) - Number(D.du || 0)) % 1 + 1) % 1,
      v: Number(j.v || 0) - Number(D.dv || 0)
    }, x = T(
      F,
      A,
      Number(D.scale || 1),
      Number(D.rot_deg || 0)
    ), G = Number(H.u1 || 0) - Number(H.u0 || 0), Y = Number(H.v1 || 0) - Number(H.v0 || 0);
    if (!(G > 1e-6) || !(Y > 1e-6)) return null;
    const fe = me(Number(x.u || 0), Number(H.u0 || 0)) / G, Se = (Number(x.v || 0) - Number(H.v0 || 0)) / Y;
    if (fe < 0 || fe > 1 || Se < 0 || Se > 1) return 0;
    const ke = ne(v);
    if (!ke) return null;
    const ce = Oe(Math.floor(fe * ke.width), 0, ke.width - 1), xe = Oe(Math.floor(Se * ke.height), 0, ke.height - 1);
    return Number(ke.alpha[(xe * ke.width + ce) * 4 + 3] || 0);
  }
  function le(v, j, H, D = null) {
    if (!(j != null && j.visible) || !Qr(H, j.corners)) return !1;
    const A = D || _e(H, performance.now()), F = ie(v, A);
    return F === null ? !0 : F > 8;
  }
  function z() {
    var D, A, F, x, G, Y, fe, Se;
    const v = ((A = (D = r.paintEngine) == null ? void 0 : D.getErpTarget) == null ? void 0 : A.call(D, h(!1))) || null, j = Math.max(1, Number(((F = v == null ? void 0 : v.descriptor) == null ? void 0 : F.width) || ((G = (x = v == null ? void 0 : v.displayPaint) == null ? void 0 : x.canvas) == null ? void 0 : G.width) || 2048)), H = Math.max(1, Number(((Y = v == null ? void 0 : v.descriptor) == null ? void 0 : Y.height) || ((Se = (fe = v == null ? void 0 : v.displayPaint) == null ? void 0 : fe.canvas) == null ? void 0 : Se.height) || 1024));
    return { width: j, height: H };
  }
  function C() {
    var xe, B, pe;
    const v = r.interaction;
    if ((v == null ? void 0 : v.kind) !== "paint_stroke") return null;
    const j = (v == null ? void 0 : v.stroke) || null;
    if (!j || String((j == null ? void 0 : j.layerKind) || "") !== "paint" || String((j == null ? void 0 : j.toolKind) || "") !== "eraser") return null;
    const H = u(), D = `${we()}:${H.width}:${H.height}`;
    if (((xe = r._activePaintEraserPreviewInfo) == null ? void 0 : xe.cacheKey) === D)
      return r._activePaintEraserPreviewInfo.value || null;
    const A = dn(j), F = (A == null ? void 0 : A.geometry) || null;
    if (F && String(F.geometryKind || "") !== "lasso_fill") {
      const W = Array.isArray(F.rawPoints) && F.rawPoints.length ? F.rawPoints : Array.isArray(F.points) ? F.points : [];
      F.processedPoints = X(W, A.targetSpace, !0);
    }
    const x = c(H.width, H.height, { readback: !0 });
    if (!$(x, A, { w: H.width, h: H.height })) return null;
    const G = ((pe = (B = x.ctx) == null ? void 0 : B.getImageData(0, 0, H.width, H.height)) == null ? void 0 : pe.data) || null;
    if (!G) return null;
    let Y = H.width, fe = H.height, Se = -1, ke = -1;
    for (let W = 0; W < H.height; W += 1)
      for (let se = 0; se < H.width; se += 1)
        G[(W * H.width + se) * 4 + 3] <= 8 || (se < Y && (Y = se), W < fe && (fe = W), se > Se && (Se = se), W > ke && (ke = W));
    if (Se < Y || ke < fe)
      return r._activePaintEraserPreviewInfo = { cacheKey: D, value: null }, null;
    const ce = {
      surface: x,
      bounds: { minX: Y, minY: fe, maxX: Se, maxY: ke },
      key: `${D}:${Y}:${fe}:${Se}:${ke}`
    };
    return r._activePaintEraserPreviewInfo = { cacheKey: D, value: ce }, r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), ce;
  }
  function R() {
    r._activePaintEraserPreviewInfo = null, r._liveEraserPreviewCanvasCache = null;
  }
  function E(v, j, H) {
    var D, A;
    if (!v) return null;
    if (v.type === "rasterObject" && ((D = v.item) != null && D.bbox)) {
      const F = v.item.bbox, x = ((A = v.item) == null ? void 0 : A.transform) || {}, G = Number(F.u0 || 0) + Number(x.du || 0), Y = Number(F.u1 || 0) + Number(x.du || 0), fe = Number(F.v0 || 0) + Number(x.dv || 0), Se = Number(F.v1 || 0) + Number(x.dv || 0);
      return {
        minX: Math.floor((G % 1 + 1) % 1 * j),
        maxX: Math.ceil((Y % 1 + 1) % 1 * j),
        minY: Math.floor(Oe(fe, 0, 1) * H),
        maxY: Math.ceil(Oe(Se, 0, 1) * H),
        wraps: Y - G >= 1 || G < 0 || Y > 1
      };
    }
    if (v.type === "strokeGroup") {
      const F = V(v.actionGroupId, "paint"), x = d(v.actionGroupId, "paint", F);
      if (!x) return null;
      const G = x.centerUv.u - x.halfW, Y = x.centerUv.u + x.halfW, fe = x.centerUv.v - x.halfH, Se = x.centerUv.v + x.halfH;
      return {
        minX: Math.floor((G % 1 + 1) % 1 * j),
        maxX: Math.ceil((Y % 1 + 1) % 1 * j),
        minY: Math.floor(Oe(fe, 0, 1) * H),
        maxY: Math.ceil(Oe(Se, 0, 1) * H),
        wraps: Y - G >= 1 || G < 0 || Y > 1
      };
    }
    return null;
  }
  function k(v, j, H) {
    if (!v || !j) return !1;
    const D = (x) => x.wraps ? [
      { minX: 0, maxX: x.maxX, minY: x.minY, maxY: x.maxY, wraps: !1 },
      { minX: x.minX, maxX: H - 1, minY: x.minY, maxY: x.maxY, wraps: !1 }
    ] : [x], A = D(v), F = D(j);
    return A.some((x) => F.some((G) => !(x.maxX < G.minX || G.maxX < x.minX || x.maxY < G.minY || G.maxY < x.minY)));
  }
  function _(v, j, H) {
    var U, N, Q, M, re, te, be;
    if (!v || !j || !((U = H == null ? void 0 : H.surface) != null && U.canvas) || j.type !== "rasterObject") return v;
    const D = Number(v.width || H.surface.canvas.width || 0), A = Number(v.height || H.surface.canvas.height || 0);
    if (D < 1 || A < 1) return v;
    const F = E(j, D, A);
    if (F && !k(F, H.bounds, D)) return v;
    const x = String(((N = j.item) == null ? void 0 : N.id) || j.id || ""), G = ((Q = j.item) == null ? void 0 : Q.transform) || {}, Y = `${H.key}:${x}:${D}:${A}:${Number(G.du || 0).toFixed(6)}:${Number(G.dv || 0).toFixed(6)}:${Number(G.rot_deg || 0).toFixed(3)}:${Number(G.scale || 1).toFixed(4)}`, fe = r._liveEraserPreviewCanvasCache instanceof Map ? r._liveEraserPreviewCanvasCache : r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (fe.has(Y)) return fe.get(Y);
    const Se = Oe(Math.floor(Number(((M = H.bounds) == null ? void 0 : M.minX) || 0)), 0, Math.max(0, D - 1)), ke = Oe(Math.floor(Number(((re = H.bounds) == null ? void 0 : re.minY) || 0)), 0, Math.max(0, A - 1)), ce = Oe(Math.ceil(Number(((te = H.bounds) == null ? void 0 : te.maxX) || 0)), Se, Math.max(0, D - 1)), xe = Oe(Math.ceil(Number(((be = H.bounds) == null ? void 0 : be.maxY) || 0)), ke, Math.max(0, A - 1)), B = Math.max(1, ce - Se + 1), pe = Math.max(1, xe - ke + 1), W = c(D, A, { readback: !0 });
    W.ctx.clearRect(0, 0, D, A), W.ctx.drawImage(v, 0, 0);
    const se = W.ctx.getImageData(Se, ke, B, pe);
    W.ctx.save(), W.ctx.globalCompositeOperation = "destination-out", W.ctx.drawImage(H.surface.canvas, 0, 0), W.ctx.restore();
    const K = W.ctx.getImageData(Se, ke, B, pe);
    let q = !1;
    for (let Ne = 0; Ne < B * pe; Ne += 1) {
      const Ee = se.data[Ne * 4 + 3], Ve = K.data[Ne * 4 + 3];
      if (Ee > Ve) {
        q = !0;
        break;
      }
    }
    return q ? (fe.size > 64 && fe.clear(), fe.set(Y, W.canvas), W.canvas) : (fe.set(Y, v), v);
  }
  function y(v, j = null) {
    const H = I((v == null ? void 0 : v.rasterObjectId) || (v == null ? void 0 : v.id) || ""), D = (v == null ? void 0 : v.bbox) || null;
    if (!H || !D) return null;
    const A = de(v, j);
    if (!A || !(A.complete || A.width || A.naturalWidth)) return null;
    const { width: F, height: x } = z(), G = (v == null ? void 0 : v.transform) || {}, Y = [
      H,
      F,
      x,
      D.u0,
      D.v0,
      D.u1,
      D.v1,
      G.du,
      G.dv,
      G.rot_deg,
      G.scale,
      b()
    ].join(":"), fe = i.get(Y);
    if (fe) return fe;
    i.size > 64 && i.clear();
    const Se = on({ label: "editor.raster-erp" });
    Se.width = F, Se.height = x;
    const ke = Se.getContext("2d");
    return ke ? (P0(ke, A, v, F, x), i.set(Y, Se), Se) : null;
  }
  async function L(v, j) {
    const H = await new Promise((G) => v.toBlob(G, "image/png")), D = new FormData();
    D.append("image", H, j), D.append("type", "input"), D.append("subfolder", "panorama_stickers"), D.append("overwrite", "1");
    const A = await t.fetchApi("/upload/image", { method: "POST", body: D });
    if (!A || A.status !== 200) throw new Error(`upload failed (${A == null ? void 0 : A.status})`);
    const F = await A.json(), x = String((F == null ? void 0 : F.name) || "").trim();
    if (!x) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: x,
      subfolder: String((F == null ? void 0 : F.subfolder) || "panorama_stickers"),
      storage: String((F == null ? void 0 : F.type) || "input")
    };
  }
  let Z = null, he = !1;
  function ge() {
    const v = zp(a.painting), { width: j, height: H } = f();
    return cS(a.painting_layer, { paintCount: v.totalPaintCount, maskCount: v.totalMaskCount, width: j, height: H, nodeId: String(n.id ?? "0") });
  }
  function P() {
    const v = String(n.id ?? "0"), j = ya.get(v);
    if (he && j) return j;
    const H = (async () => {
      var F, x, G, Y, fe, Se, ke, ce, xe, B, pe, W;
      const D = m(), A = zp(a.painting);
      if (A.totalPaintCount <= 0 && A.totalMaskCount <= 0) {
        a.painting_layer !== null && (a.painting_layer = null, Z = D, l());
        return;
      }
      if (Z !== D && !he) {
        he = !0;
        try {
          J();
          const se = h(!1), K = ((x = (F = r.paintEngine) == null ? void 0 : F.getErpTarget) == null ? void 0 : x.call(F, se)) || null, q = ((G = K == null ? void 0 : K.displayPaint) == null ? void 0 : G.canvas) || null, U = ((Y = K == null ? void 0 : K.committedMask) == null ? void 0 : Y.canvas) || null, N = Math.max(1, Number(((fe = K == null ? void 0 : K.descriptor) == null ? void 0 : fe.width) || (q == null ? void 0 : q.width) || (U == null ? void 0 : U.width) || 2048)), Q = Math.max(1, Number(((Se = K == null ? void 0 : K.descriptor) == null ? void 0 : Se.height) || (q == null ? void 0 : q.height) || (U == null ? void 0 : U.height) || 1024));
          (!q && A.totalPaintCount > 0 || !U && A.totalMaskCount > 0) && ((!r._paintLayerSyncBlankSurface || Number(((ke = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : ke.width) || 0) !== N || Number(((ce = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : ce.height) || 0) !== Q) && (r._paintLayerSyncBlankSurface = c(N, Q)), r._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, N, Q));
          const M = q || A.totalPaintCount > 0 && ((xe = r._paintLayerSyncBlankSurface) == null ? void 0 : xe.canvas) || null, re = U || A.totalMaskCount > 0 && ((B = r._paintLayerSyncBlankSurface) == null ? void 0 : B.canvas) || null;
          if (!M && !re) return;
          let te = null, be = null;
          const Ne = [];
          if (A.totalPaintCount > 0) {
            te = await L(M, `pano_paint_${v}.png`);
            for (const Ee of se) {
              const Ve = String(Ee || "").trim();
              if (!Ve) continue;
              const We = ((W = (pe = r.paintEngine) == null ? void 0 : pe.getGroupDisplayCanvas) == null ? void 0 : W.call(pe, Ve)) || null;
              if (!We) continue;
              const Ge = Ve.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ce = await L(We, `pano_group_${v}_${Ge}.png`);
              Ce && Ne.push({
                id: Ve,
                actionGroupId: Ve,
                image: Ce
              });
            }
          }
          A.totalMaskCount > 0 && (be = await L(re, `pano_mask_${v}.png`)), D === m() && (a.painting_layer = {
            paint: te,
            mask: be,
            groups: Ne,
            revision: D
          }, Z = D, l());
        } catch (se) {
          throw se;
        } finally {
          he = !1;
        }
      }
    })();
    return ya.set(v, H), H.finally(() => {
      ya.get(v) === H && ya.delete(v);
    }), H;
  }
  function ae(v) {
    var x;
    const j = ((x = r.paintEngine) == null ? void 0 : x.getMaskDisplayCanvas()) || null;
    if (!j) return v;
    const H = `mask_display:${r.paintEngine.getMaskDisplayRevision()}`, D = v.reduce((G, Y) => Math.max(G, Number((Y == null ? void 0 : Y.zIndex) || 0)), -1), A = (Array.isArray(a.stickers) ? a.stickers : []).reduce((G, Y) => Math.max(G, Number((Y == null ? void 0 : Y.z_index) || 0)), -1), F = Math.max(D, A);
    return v.push({
      id: "mask_display",
      source: j,
      revision: H,
      zIndex: F + 1,
      opacity: 1,
      visible: !0
    }), v;
  }
  function g() {
    var D, A;
    const v = w(!0), j = C(), H = [];
    for (const F of v) {
      if ((F == null ? void 0 : F.type) === "strokeGroup") {
        const x = String(F.actionGroupId || F.id || "");
        if (!x) continue;
        const G = ((A = (D = r.paintEngine) == null ? void 0 : D.getGroupDisplayCanvas) == null ? void 0 : A.call(D, x)) || null;
        if (!G) continue;
        H.push({
          id: `paint_group:${x}`,
          source: G,
          revision: `${p()}:${x}`,
          zIndex: Number((F == null ? void 0 : F.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((F == null ? void 0 : F.type) === "rasterObject") {
        const x = F.item || null, G = I((x == null ? void 0 : x.id) || F.id || "");
        if (!G) continue;
        const Y = y(x, () => ye());
        if (!Y) continue;
        const fe = _(Y, F, j), Se = (x == null ? void 0 : x.transform) || {};
        H.push({
          id: `raster:${G}`,
          source: fe,
          revision: [
            m(),
            (j == null ? void 0 : j.key) || "",
            G,
            Number(Se.du || 0).toFixed(6),
            Number(Se.dv || 0).toFixed(6),
            Number(Se.rot_deg || 0).toFixed(3),
            Number(Se.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((F == null ? void 0 : F.z_index) || 0),
          opacity: 1,
          visible: (x == null ? void 0 : x.visible) !== !1
        });
      }
    }
    return ae(H);
  }
  function S() {
    return ee() ? g().filter((v) => v.visible !== !1).map((v) => ({ id: v.id, media: v.source, revision: v.revision, opacity: v.opacity, zIndex: v.zIndex })) : [];
  }
  function O() {
    a.painting_layer !== null && (a.painting_layer = null), Z = "";
  }
  return {
    connect(v) {
      ({
        commitState: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        getActivePaintTargetDescriptor: u,
        getDesiredPaintTargetDescriptor: f,
        getDisplayPaintRevisionKey: p,
        getOrderedDisplayListObjects: w,
        getOrderedPaintGroupIds: h,
        getPaintingCompositeRevisionKey: m,
        getPaintingRevisionKey: b,
        getStrokeGroupStrokes: V,
        inverseTransformErpPointAround: T,
        paintingShown: ee,
        parseRasterObjectSelectionId: I,
        processFreehandPoints: X,
        rasterizeStrokeToSurface: $,
        rebuildPaintEngineIfNeeded: J,
        requestDraw: ye,
        screenPosToErpPoint: _e,
        shortestWrappedDelta: me
      } = v);
    },
    getSharedLivePaintSurface: ue,
    getLivePaintRevisionSuffix: we,
    isPaintCompositeInteraction: ve,
    hitRasterObjectAt: le,
    invalidateLivePaintPreviewCaches: R,
    buildRasterObjectEditCanvas: y,
    needsPaintingLayerSync: ge,
    syncPaintingLayerAsync: P,
    invalidatePaintingLayerState: O,
    buildEditorViewPaintLayers: S
  };
}
function eA(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, s, a;
  function l(_) {
    return !_ || typeof _ != "object" ? { x: 0, y: 0 } : { x: Number((_ == null ? void 0 : _.u) || 0), y: Number((_ == null ? void 0 : _.v) || 0) };
  }
  function c(_, y, L, Z = {}) {
    return { ...{
      ..._,
      t: Number((_ == null ? void 0 : _.t) || 0),
      widthScale: f(_, "widthScale", 1),
      pressureLike: f(_, "pressureLike", 1)
    }, ...Z, u: y, v: L };
  }
  function d(_, y = !1) {
    return y ? 12e-4 : 18e-4;
  }
  function u(_, y, L = !1) {
    if (!Array.isArray(_) || !_.length) return [];
    const Z = String((y == null ? void 0 : y.kind) || "") === "ERP_GLOBAL", he = /* @__PURE__ */ new WeakMap();
    if (Z) {
      let A = null;
      _.forEach((F) => {
        const x = Number((F == null ? void 0 : F.u) || 0), G = Number((F == null ? void 0 : F.v) || 0), Y = (x % 1 + 1) % 1, fe = A == null ? Y : A + a(Y, (A % 1 + 1) % 1);
        he.set(F, { x: fe, y: G }), A = fe;
      });
    }
    const ge = (A) => !A || typeof A != "object" ? { x: 0, y: 0 } : he.get(A) || l(A), P = (A, F, x, G = {}) => {
      const Y = Z ? (Number(F) % 1 + 1) % 1 : Number(F), fe = c(A, Y, x, G);
      return he.set(fe, { x: Number(F), y: Number(x) }), fe;
    }, ae = (A, F, x) => {
      const G = ge(A), Y = ge(F);
      return P(A, Yn(G.x, Y.x, x), Yn(G.y, Y.y, x), {
        t: Yn(Number((A == null ? void 0 : A.t) || 0), Number((F == null ? void 0 : F.t) || 0), x),
        widthScale: Yn(f(A, "widthScale", 1), f(F, "widthScale", 1), x),
        pressureLike: Yn(f(A, "pressureLike", 1), f(F, "pressureLike", 1), x)
      });
    };
    if (_.length === 1) {
      const A = ge(_[0]);
      return [P(_[0], A.x, A.y)];
    }
    const g = d(y, L), S = (A, F) => {
      const x = [0];
      for (let B = 1; B < A.length; B += 1) {
        const pe = ge(A[B - 1]), W = ge(A[B]);
        x.push(x[B - 1] + Math.hypot(W.x - pe.x, W.y - pe.y));
      }
      const G = x[x.length - 1] || 0;
      if (G <= 1e-8) {
        const B = A[0], pe = ge(B);
        return [P(B, pe.x, pe.y)];
      }
      const Y = [];
      let fe = 0;
      for (let B = 0; B <= G + 1e-9; B += F) {
        for (; fe < x.length - 2 && x[fe + 1] < B; ) fe += 1;
        const pe = x[fe], W = x[fe + 1], se = Math.max(1e-8, W - pe);
        Y.push(ae(A[fe], A[fe + 1], Oe((B - pe) / se, 0, 1)));
      }
      const Se = A[A.length - 1], ke = ge(Se), ce = Y[Y.length - 1], xe = ce ? ge(ce) : null;
      return (!xe || Math.hypot(xe.x - ke.x, xe.y - ke.y) > F * 0.35) && Y.push(P(Se, ke.x, ke.y)), Y;
    }, O = (A) => {
      if (!Array.isArray(A) || A.length < 3) return A ? A.slice() : [];
      const F = ge(A[0]), x = [P(A[0], F.x, F.y)];
      for (let fe = 0; fe < A.length - 1; fe += 1) {
        const Se = A[fe], ke = A[fe + 1], ce = ge(Se), xe = ge(ke), B = P(
          Se,
          ce.x * 0.75 + xe.x * 0.25,
          ce.y * 0.75 + xe.y * 0.25,
          {
            t: Number(Se.t || 0) * 0.75 + Number(ke.t || 0) * 0.25,
            widthScale: f(Se, "widthScale", 1) * 0.75 + f(ke, "widthScale", 1) * 0.25,
            pressureLike: f(Se, "pressureLike", 1) * 0.75 + f(ke, "pressureLike", 1) * 0.25
          }
        ), pe = P(
          Se,
          ce.x * 0.25 + xe.x * 0.75,
          ce.y * 0.25 + xe.y * 0.75,
          {
            t: Number(Se.t || 0) * 0.25 + Number(ke.t || 0) * 0.75,
            widthScale: f(Se, "widthScale", 1) * 0.25 + f(ke, "widthScale", 1) * 0.75,
            pressureLike: f(Se, "pressureLike", 1) * 0.25 + f(ke, "pressureLike", 1) * 0.75
          }
        );
        x.push(B, pe);
      }
      const G = A[A.length - 1], Y = ge(G);
      return x.push(P(G, Y.x, Y.y)), x;
    }, v = S(_, g);
    if (v.length < 3) return v;
    const j = L ? 2 : 1;
    let H = v.slice();
    for (let A = 0; A < j; A += 1) H = O(H);
    return S(H, Math.max(g * 0.75, 55e-5));
  }
  function f(_, y, L = 1) {
    const Z = Number(_ == null ? void 0 : _[y]);
    return Number.isFinite(Z) ? Math.max(0, Z) : L;
  }
  function p(_) {
    const y = Number(_ == null ? void 0 : _.radiusValue);
    if (Number.isFinite(y) && y > 0) {
      const L = String((_ == null ? void 0 : _.radiusModel) || "").trim() || "erp_uv_norm";
      return L === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((_ == null ? void 0 : _.size) || 10) * 0.5 / 2048)
      } : {
        model: L,
        value: y
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((_ == null ? void 0 : _.size) || 10) * 0.5 / 2048)
    };
  }
  function w(_, y, L = {}) {
    const Z = on({ label: "editor.raster-surface" });
    Z.width = Math.max(1, Math.round(_)), Z.height = Math.max(1, Math.round(y));
    const he = Z.getContext("2d", L.readback ? { willReadFrequently: !0 } : void 0);
    return he && (he.clearRect(0, 0, Z.width, Z.height), he.imageSmoothingEnabled = !0), { canvas: Z, ctx: he };
  }
  function h() {
    const _ = _e();
    return `${String(t.paintStrokeRevision)}:${_.width}x${_.height}`;
  }
  function m() {
    const _ = _e();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${_.width}x${_.height}`;
  }
  function b() {
    const _ = i(), y = m();
    return _ ? `${y}:${_}` : y;
  }
  function V() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function T() {
    t.paintCompositeRevision += 1;
  }
  function ee() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function I() {
    var _, y;
    t.paintEngineRevisionKey = null, (y = (_ = t.paintEngine) == null ? void 0 : _.rebuildCommitted) == null || y.call(_, n), t.paintEngineRevisionKey = h();
  }
  function X() {
    ee(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function $({ rebuildPaintEngine: _ = !1 } = {}) {
    o(), V(), X(), _ && I();
  }
  function J() {
    o(), T(), X();
  }
  function ye() {
    var Z;
    const _ = _e(), y = `${_.width}x${_.height}`;
    t.paintEngineDescriptorKey !== y && (t.paintEngine = Rl(_), t.paintEngineDescriptorKey = y, t.paintEngineRevisionKey = "");
    const L = h();
    t.paintEngineRevisionKey !== L && (t.paintEngineRevisionKey = L, (Z = t.paintEngine) == null || Z.rebuildCommitted(n));
  }
  function _e() {
    const _ = Math.max(1, s(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: _,
      height: Math.max(1, Math.round(_ * 0.5))
    };
  }
  function me() {
    return _e();
  }
  function ve(_, y, L, Z, he = null) {
    const ge = p(_), P = f(y, "widthScale", 1) * f(y, "pressureLike", 1);
    return ge.model === "erp_uv_norm" ? Math.max(0.5, ge.value * L * P) : ge.model === "world_angle" ? he ? Math.max(0.5, ge.value / Math.max(1e-6, Number(he.hFOV_deg || 90) * Nr) * L * P) : Math.max(0.5, ge.value / (2 * Math.PI) * L * P) : Math.max(0.5, Number((_ == null ? void 0 : _.size) || 10) * 0.5 * P);
  }
  function ue(_, y, L = {}) {
    const Z = String((y == null ? void 0 : y.layerKind) || "paint"), he = String((y == null ? void 0 : y.toolKind) || "pen"), ge = L.preview === !0, P = ge ? 0.78 : 1;
    if (_.globalAlpha = he === "marker" ? 0.7 * P : 1, Z === "mask") {
      _.fillStyle = ge ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (he === "eraser") {
      _.globalCompositeOperation = "destination-out", _.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const ae = String((y == null ? void 0 : y.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (y == null ? void 0 : y.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, g = ge ? Math.max(0.28, Number(ae.a ?? 1) * 0.88) : Math.max(0.12, Number(ae.a ?? 1));
    _.fillStyle = `rgba(${Math.round(Number(ae.r || 0) * 255)}, ${Math.round(Number(ae.g || 0) * 255)}, ${Math.round(Number(ae.b || 0) * 255)}, ${g})`;
  }
  function we(_, y, L) {
    const Z = Math.max(0.5, Math.min(L, Number((y == null ? void 0 : y.radiusPx) || 0.5)));
    !Number.isFinite(y == null ? void 0 : y.x) || !Number.isFinite(y == null ? void 0 : y.y) || !Number.isFinite(Z) || (_.beginPath(), _.arc(Number(y.x || 0), Number(y.y || 0), Z, 0, Math.PI * 2), _.fill());
  }
  function de(_, y, L, Z, he = {}) {
    if (!_ || !Array.isArray(y) || !y.length) return;
    const ge = Math.max(Z.w, Z.h) * 0.25;
    _.save(), ue(_, L, he);
    const P = (ae) => we(_, ae, ge);
    if (y.length === 1) {
      P(y[0]), _.restore();
      return;
    }
    for (let ae = 0; ae < y.length - 1; ae += 1) {
      const g = y[ae], S = y[ae + 1];
      if (!g || !S) continue;
      const O = Number(g.x || 0), v = Number(g.y || 0), j = Number(S.x || 0), H = Number(S.y || 0), D = Math.max(0.5, Math.min(ge, Number(g.radiusPx || 0.5))), A = Math.max(0.5, Math.min(ge, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite(O) || !Number.isFinite(v) || !Number.isFinite(j) || !Number.isFinite(H) || !Number.isFinite(D) || !Number.isFinite(A)) continue;
      const F = j - O, x = H - v, G = Math.hypot(F, x);
      if (!Number.isFinite(G) || G < 1e-6) {
        P(g);
        continue;
      }
      if (G > Math.max(Z.w, Z.h) * 0.5) continue;
      const Y = Math.max(0.5, Math.min(D, A)), fe = Math.max(0.35, Math.min(Y * 0.4, 2.25)), Se = Math.max(1, Math.ceil(G / fe));
      for (let ke = 0; ke <= Se; ke += 1) {
        const ce = ke / Se;
        P({
          x: Yn(O, j, ce),
          y: Yn(v, H, ce),
          radiusPx: Yn(D, A, ce)
        });
      }
    }
    P(y[y.length - 1]), _.restore();
  }
  function ne(_, y, L, Z) {
    de(_, y, L, Z, { preview: !1 });
  }
  function ie(_, y, L, Z, he) {
    var ae, g, S, O;
    if (!_ || !Array.isArray(y) || y.length < 3) return;
    const ge = "u", P = "v";
    if (_.save(), String((L == null ? void 0 : L.layerKind) || "") === "mask")
      _.fillStyle = "rgba(255,255,255,1)";
    else if (String((L == null ? void 0 : L.toolKind) || "") === "eraser")
      _.globalCompositeOperation = "destination-out", _.fillStyle = "rgba(0,0,0,1)";
    else {
      const v = (L == null ? void 0 : L.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      _.fillStyle = `rgba(${Math.round(Number(v.r || 0) * 255)}, ${Math.round(Number(v.g || 0) * 255)}, ${Math.round(Number(v.b || 0) * 255)}, ${Number(v.a ?? 1)})`;
    }
    _.beginPath(), _.moveTo(Number(((ae = y[0]) == null ? void 0 : ae[ge]) || 0) * Z.w, Number(((g = y[0]) == null ? void 0 : g[P]) || 0) * Z.h);
    for (let v = 1; v < y.length; v += 1)
      _.lineTo(Number(((S = y[v]) == null ? void 0 : S[ge]) || 0) * Z.w, Number(((O = y[v]) == null ? void 0 : O[P]) || 0) * Z.h);
    _.closePath(), _.fill(), _.restore();
  }
  function le(_) {
    const y = (_ == null ? void 0 : _.geometry) || null;
    return y ? String(y.geometryKind || "") === "lasso_fill" ? Array.isArray(y.points) ? y.points : [] : Array.isArray(y.processedPoints) && y.processedPoints.length ? y.processedPoints : Array.isArray(y.rawPoints) && y.rawPoints.length ? y.rawPoints : Array.isArray(y.points) ? y.points : [] : [];
  }
  function z(_, y) {
    const L = le(_);
    return !Array.isArray(L) || !L.length ? [] : L.map((Z) => ({
      x: Number((Z == null ? void 0 : Z.u) || 0) * Number((y == null ? void 0 : y.w) || 1),
      y: Number((Z == null ? void 0 : Z.v) || 0) * Number((y == null ? void 0 : y.h) || 1),
      radiusPx: ve(_, Z, Number((y == null ? void 0 : y.w) || 1), Number((y == null ? void 0 : y.h) || 1))
    }));
  }
  function C(_, y, L = null) {
    var ae, g, S, O;
    if (!(_ != null && _.ctx) || !y) return !1;
    const Z = L || { w: Number(((ae = _.canvas) == null ? void 0 : ae.width) || 0), h: Number(((g = _.canvas) == null ? void 0 : g.height) || 0) }, he = String((y == null ? void 0 : y.toolKind) || "") === "eraser" ? {
      ...y,
      layerKind: "mask",
      toolKind: String(((S = y == null ? void 0 : y.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : y;
    if (String(((O = y == null ? void 0 : y.geometry) == null ? void 0 : O.geometryKind) || "") === "lasso_fill")
      return ie(_.ctx, le(he), he, Z), !0;
    const P = z(he, Z);
    return P.length ? (ne(_.ctx, P, he, Z), !0) : !1;
  }
  function R(_, y, L, Z = 8) {
    const he = new Uint8Array(y * L), ge = [], P = new Int32Array(y * L), ae = new Int32Array(y * L);
    for (let g = 0; g < L; g += 1)
      for (let S = 0; S < y; S += 1) {
        const O = g * y + S;
        if (he[O] || _[O] <= Z) continue;
        let v = 0, j = 0;
        P[j] = S, ae[j] = g, j += 1, he[O] = 1;
        const H = [];
        let D = S, A = g, F = S, x = g;
        for (; v < j; ) {
          const G = P[v], Y = ae[v];
          v += 1, H.push({ x: G, y: Y }), G < D && (D = G), Y < A && (A = Y), G > F && (F = G), Y > x && (x = Y);
          const fe = [
            [(G - 1 + y) % y, Y],
            [(G + 1) % y, Y],
            [G, Y - 1],
            [G, Y + 1]
          ];
          for (const [Se, ke] of fe) {
            if (ke < 0 || ke >= L) continue;
            const ce = ke * y + Se;
            he[ce] || _[ce] <= Z || (he[ce] = 1, P[j] = Se, ae[j] = ke, j += 1);
          }
        }
        ge.push({ pixels: H, minX: D, minY: A, maxX: F, maxY: x });
      }
    return ge;
  }
  function E(_, y) {
    const L = [...new Set((Array.isArray(_ == null ? void 0 : _.pixels) ? _.pixels : []).map((g) => Number((g == null ? void 0 : g.x) || 0)).filter((g) => Number.isFinite(g)))].sort((g, S) => g - S);
    if (!L.length) return null;
    if (L.length === 1)
      return { startX: L[0], widthPx: 1 };
    let Z = -1, he = 0;
    for (let g = 0; g < L.length; g += 1) {
      const S = L[g], v = (g === L.length - 1 ? L[0] + y : L[g + 1]) - S - 1;
      v > Z && (Z = v, he = g);
    }
    const ge = (L[(he + 1) % L.length] + y) % y;
    let P = 1 / 0, ae = -1 / 0;
    for (const g of L) {
      const S = (g - ge + y) % y;
      P = Math.min(P, S), ae = Math.max(ae, S);
    }
    return {
      startX: ge,
      widthPx: Math.max(1, ae - P + 1)
    };
  }
  function k(_, y, L = {}) {
    var S;
    const Z = Number((_ == null ? void 0 : _.width) || 0), he = Number((_ == null ? void 0 : _.height) || 0), ge = (S = _ == null ? void 0 : _.getContext) == null ? void 0 : S.call(_, "2d");
    if (!ge || Z < 1 || he < 1) return [];
    const P = ge.getImageData(0, 0, Z, he), ae = new Uint8Array(Z * he);
    for (let O = 0; O < ae.length; O += 1) ae[O] = P.data[O * 4 + 3];
    return R(ae, Z, he, 8).map((O, v) => {
      const j = E(O, Z);
      if (!j) return null;
      const H = Number(j.widthPx || 0), D = O.maxY - O.minY + 1, A = Number(j.startX || 0), F = on({ label: "editor.lasso-fill" });
      F.width = H, F.height = D;
      const x = F.getContext("2d");
      if (!x) return null;
      const G = x.createImageData(H, D);
      return O.pixels.forEach(({ x: Y, y: fe }) => {
        const Se = (fe * Z + Y) * 4, ke = (Number(Y || 0) - A + Z) % Z, ce = ((fe - O.minY) * H + ke) * 4;
        G.data[ce + 0] = P.data[Se + 0], G.data[ce + 1] = P.data[Se + 1], G.data[ce + 2] = P.data[Se + 2], G.data[ce + 3] = P.data[Se + 3];
      }), x.putImageData(G, 0, 0), {
        id: io("raster"),
        type: "raster_frozen",
        layerKind: y === "mask" ? "mask" : "paint",
        z_index: Number((L == null ? void 0 : L.z_index) || 0) + v * 1e-3,
        locked: (L == null ? void 0 : L.locked) === !0,
        bbox: {
          u0: 0,
          v0: O.minY / he,
          u1: H / Z,
          v1: (O.maxY + 1) / he
        },
        rasterDataUrl: F.toDataURL("image/png"),
        transform: {
          du: A / Z,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(_) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: s,
        shortestWrappedDelta: a
      } = _);
    },
    processFreehandPoints: u,
    createRasterSurface: w,
    getPaintingRevisionKey: h,
    getPaintingCompositeRevisionKey: m,
    getDisplayPaintRevisionKey: b,
    refreshPaintEngineRevisionCache: I,
    markObjectVisualsDirty: X,
    markPaintStrokeVisualsDirty: $,
    markPaintCompositeVisualsDirty: J,
    rebuildPaintEngineIfNeeded: ye,
    getDesiredPaintTargetDescriptor: _e,
    getActivePaintTargetDescriptor: me,
    rasterizeStrokeToSurface: C,
    createRasterFrozenObjectsFromCanvas: k
  };
}
function tA(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: s
  } = e;
  let a, l, c, d, u, f, p, w, h, m = { stored: null, shown: null, handoff: null, fps: null };
  function b(z, C = null) {
    var R;
    if (z && typeof z == "object" && !Array.isArray(z)) return z;
    if (Array.isArray(z) && z.length > 0) {
      const E = z[0];
      if (E && typeof E == "object" && !Array.isArray(E)) return E;
    }
    if (Array.isArray(C) && C.length > 0) {
      const E = (R = C[0]) == null ? void 0 : R.parsed_state;
      if (E && typeof E == "object" && !Array.isArray(E))
        return {
          yaw_deg: Number(E.yaw_deg || 0),
          pitch_deg: Number(E.pitch_deg || 0),
          hFOV_deg: Number(E.hFOV_deg || 30),
          rot_deg: Number(E.roll_deg || 0)
        };
    }
    return null;
  }
  function V(z, C, R) {
    const E = Math.max(1, Number(C || 1)), k = Math.max(1, Number(R || 1)), _ = Oe(Number(z || 30), 0.1, 179) * Nr, y = 2 * Math.atan(Math.tan(_ * 0.5) * (k / E));
    return Oe(y * Li, 0.1, 179);
  }
  function T(z) {
    const C = String(z || "").trim();
    if (!C) return null;
    try {
      const R = JSON.parse(C);
      if (!R || typeof R != "object" || String(R.kind || "") !== "pano_sticker_state") return null;
      const E = R.version;
      let k = null;
      if (typeof E == "number" && Number.isInteger(E) ? k = E : typeof E == "string" && /^\d+$/.test(E) && (k = Number.parseInt(E, 10)), k !== 1) return null;
      const _ = R.pose;
      if (!_ || typeof _ != "object") return null;
      const y = Number(_.yaw_deg), L = Number(_.pitch_deg), Z = Number(_.roll_deg), he = Number(_.hFOV_deg);
      if (![y, L, Z, he].every((g) => Number.isFinite(g))) return null;
      let ge = ((y + 180) % 360 + 360) % 360 - 180;
      Object.is(ge, -0) && (ge = 0);
      const P = {
        yaw_deg: ge,
        pitch_deg: Oe(L, -89.9, 89.9),
        roll_deg: Z,
        hFOV_deg: Oe(he, 0.1, 179)
      }, ae = Number(R.source_aspect);
      return Number.isFinite(ae) && ae > 0 && (P.source_aspect = ae), P;
    } catch {
      return null;
    }
  }
  function ee(z) {
    const C = Number(z == null ? void 0 : z.yaw_deg), R = Number(z == null ? void 0 : z.pitch_deg), E = Number((z == null ? void 0 : z.roll_deg) ?? (z == null ? void 0 : z.rot_deg)), k = Number(z == null ? void 0 : z.hFOV_deg), _ = Vi(z);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Gt(Number.isFinite(C) ? C : 0),
        pitch_deg: Oe(Number.isFinite(R) ? R : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(E) ? E : 0,
        hFOV_deg: Oe(Number.isFinite(k) ? k : 90, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function I(z) {
    var L;
    if (!z || typeof z != "object") return ee(null);
    const C = Number(z == null ? void 0 : z.yaw_deg), R = Number(z == null ? void 0 : z.pitch_deg), E = Number((z == null ? void 0 : z.roll_deg) ?? (z == null ? void 0 : z.rot_deg)), k = Number(z == null ? void 0 : z.hFOV_deg), _ = Number(z == null ? void 0 : z.vFOV_deg);
    let y = 1;
    if (Number.isFinite(k) && Number.isFinite(_)) {
      const Z = Oe(k, 0.1, 179) * Nr, he = Oe(_, 0.1, 179) * Nr, ge = Math.tan(he * 0.5);
      if (Math.abs(ge) > 1e-6) {
        const P = Math.tan(Z * 0.5) / ge;
        Number.isFinite(P) && P > 0 && (y = P);
      }
    }
    if (z != null && z.asset_id && ((L = o == null ? void 0 : o.assets) != null && L[z.asset_id])) {
      const Z = o.assets[z.asset_id], he = Number((Z == null ? void 0 : Z.w) || 0), ge = Number((Z == null ? void 0 : Z.h) || 0);
      he > 0 && ge > 0 && (y = he / ge);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Gt(Number.isFinite(C) ? C : 0),
        pitch_deg: Oe(Number.isFinite(R) ? R : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(E) ? E : 0,
        hFOV_deg: Oe(Number.isFinite(k) ? k : 30, 0.1, 179)
      },
      source_aspect: y
    };
  }
  function X(z) {
    return t.linkedValue(n, z);
  }
  function $(z, C, R) {
    const E = z && typeof z == "object" ? {
      yaw_deg: Number(z.yaw_deg || 0),
      pitch_deg: Number(z.pitch_deg || 0),
      roll_deg: Number(z.rot_deg ?? z.roll_deg ?? 0),
      hFOV_deg: Number(z.hFOV_deg || 30)
    } : T(C);
    if (E) {
      const y = Number((R == null ? void 0 : R.naturalWidth) || (R == null ? void 0 : R.width) || E.source_aspect || 1), L = Number((R == null ? void 0 : R.naturalHeight) || (R == null ? void 0 : R.height) || 1);
      return {
        yaw_deg: Number(E.yaw_deg || 0),
        pitch_deg: Number(E.pitch_deg || 0),
        hFOV_deg: Number(E.hFOV_deg || 30),
        vFOV_deg: V(E.hFOV_deg, y, L),
        rot_deg: Number(E.roll_deg || 0)
      };
    }
    const k = Number((R == null ? void 0 : R.naturalWidth) || (R == null ? void 0 : R.width) || 1), _ = Number((R == null ? void 0 : R.naturalHeight) || (R == null ? void 0 : R.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: V(30, k, _),
      rot_deg: 0
    };
  }
  function J() {
    const z = Kt(n, "external-sticker") ? b(c("pano_sticker_input_pose"), null) : null;
    return Vg(o, Lg(n, { pose: z, handoff: ye() }));
  }
  function ye() {
    return Kt(n, "sticker-handoff") ? $_(n, c("pano_sticker_handoff")) : null;
  }
  function _e() {
    return s === "stickers" && !i && n.__panoSceneStateV2 === !0;
  }
  function me(z, C, R) {
    return structuredClone(Mo(tr({ version: 2, timeline: { fps: C }, stickers: [z] }), R).stickers[0]);
  }
  function ve({ record: z = !0, restored: C = !1 } = {}) {
    var Z;
    if (!_e()) return !1;
    const R = o.stickers.find((he) => {
      var ge;
      return ((ge = he.source) == null ? void 0 : ge.kind) === "port";
    });
    if (!R)
      return m = { stored: null, shown: null, handoff: null, fps: null }, !1;
    const { fps: E } = o.timeline;
    let k;
    if (C || !m.handoff || ((Z = m.stored) == null ? void 0 : Z.id) !== R.id)
      k = structuredClone(R);
    else {
      const he = (ge) => m.fps === E ? ge : me(ge, m.fps, E);
      z && T_(R, he(m.shown)), k = D_(R, he(m.stored));
    }
    const _ = ye(), y = _ ? Td(o, k, _) : structuredClone(k), L = JSON.stringify(y) !== JSON.stringify(R);
    if (L) {
      for (const he of Object.keys(R)) delete R[he];
      Object.assign(R, y);
    }
    return m = { stored: k, shown: structuredClone(y), handoff: _, fps: E }, L;
  }
  function ue() {
    return m.handoff ? { ...o, stickers: o.stickers.map((z) => {
      var C;
      return ((C = z.source) == null ? void 0 : C.kind) === "port" ? m.stored : z;
    }) } : o;
  }
  function we(z) {
    var E;
    if (!_e() || ((E = z == null ? void 0 : z.source) == null ? void 0 : E.kind) !== "port") return null;
    const { handoff: C } = m, R = !!C && C.placement === z.placement;
    return bo[z.placement].map((k) => ({ name: k, overridden: R && z.handoff_overrides.includes(k) }));
  }
  function de(z) {
    ve();
    const C = o.stickers.find((R) => {
      var E;
      return ((E = R.source) == null ? void 0 : E.kind) === "port";
    });
    !C || C.locked || !m.handoff || !L_(o, C, m.handoff, z) || (m.shown = structuredClone(C), m.stored[z] = structuredClone(C[z]), f(), a(), u(), h(), p());
  }
  function ne() {
    var L;
    const z = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((Z) => String((Z == null ? void 0 : Z.name) || "") === "sticker_image") : -1, C = z >= 0 ? ((L = n.getInputLink(z)) == null ? void 0 : L.id) ?? null : null, R = l(() => {
      ii(n, "image-loaded");
    }), E = b(c("pano_sticker_input_pose"), null), k = X("sticker_state"), _ = t.externalStateHash(n, k), y = C == null ? null : $(E, k, R);
    return Dg(o, {
      connected: C != null,
      linkId: C,
      stateHash: _,
      pose: y,
      imageWidth: Number((R == null ? void 0 : R.naturalWidth) || (R == null ? void 0 : R.width) || 0),
      imageHeight: Number((R == null ? void 0 : R.naturalHeight) || (R == null ? void 0 : R.height) || 0)
    });
  }
  function ie(z = "sync") {
    if (s !== "stickers" || i) return;
    const C = n.__panoSceneStateV2 ? J() : ne();
    if (C.changed) {
      const R = o.stickers.find(d);
      o.stickers = C.state.stickers, o.active = C.state.active, R && r.selectedId === R.id && !o.stickers.some((E) => E.id === R.id) && (r.selectedId = null, r.selectedIds = []), a(), h(), w();
    } else ve({ restored: z === "open" }) ? (u(), h()) : z === "image-loaded" && h();
    p();
  }
  function le() {
    const z = Array.isArray(o.stickers) ? o.stickers : [], C = [];
    for (const R of z)
      d(R) && (R.visible = !1, C.push(R));
    return C;
  }
  return {
    connect(z) {
      ({
        commitAndRefreshNode: a,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: d,
        markObjectVisualsDirty: u,
        pushHistory: f,
        requestDraw: p,
        updateSelectionMenu: w,
        updateSidePanel: h
      } = z);
    },
    computeStickerVFov: V,
    buildCanonicalCutoutStickerState: ee,
    buildCanonicalSelectedStickerState: I,
    reconcileExternalStickerFromInputs: ie,
    collectExternalStickersForClearAll: le,
    syncPortHandoff: ve,
    storedEditorState: ue,
    portHandoffLanes: we,
    revertPortHandoffLane: de
  };
}
function no(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function nA(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function rA({
  editor: e,
  swatches: t,
  paintColorPopOpen: r,
  colorToCss: n,
  colorsApproximatelyEqual: i,
  rgb01ToHsv: o,
  hsv01ToRgb: s,
  getBrushPresetIdForTool: a,
  isActiveLassoTool: l
}) {
  var T, ee;
  const c = e.primaryTool === "paint" || e.primaryTool === "mask", d = {
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
    historyEntries: Array.from({ length: 8 }, (I, X) => ({ index: X, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return d;
  const u = ((T = t.find((I) => i(e.paintColor, I.color))) == null ? void 0 : T.id) || "", f = !u, p = o(e.customPaintColor), w = Math.round(Math.max(0, Math.min(1, Number(((ee = e.customPaintColor) == null ? void 0 : ee.a) ?? 1))) * 100), h = a(e.primaryTool === "paint" ? e.paintTool : e.maskTool), m = e.brushSizes[h] ?? 10, b = l(), V = Array.from({ length: 8 }, (I, X) => e.customPaintHistory[X] || null);
  return {
    ...d,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: u,
    customColorActive: f,
    customColorCss: n(e.customPaintColor, 1),
    pickerHueColor: n({ ...s(p.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, p.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, p.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, p.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, p.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, p.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, p.h)) * 100}%`,
    alphaValue: w,
    alphaText: `${w}%`,
    historyEntries: V.map((I, X) => ({
      index: X,
      color: I ? { cssColor: n(I, 1) } : null
    })),
    sizeValue: m,
    sizeText: String(m),
    sizeFill: `${Math.max(0, Math.min(100, (m - 1) / 119 * 100))}%`,
    sizeDisabled: b,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function iA({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
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
const oA = {
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
function sA(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = oA[r.key] || [], s = t[t.length - 1];
    n && (s != null && s.grouped) && s.label === n ? s.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function Gc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function aA({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
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
        icon: o ? Ke.eye : Ke.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!r || !!n
      }
    }
  };
}
function L0({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function lA(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
function cA(e, { port: t = !1 } = {}) {
  return !(t && e === "vFOV_deg");
}
const So = "erp", uA = ["1:1", "4:3", "3:2", "16:9"];
function R0(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...uA.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: So, label: Number(r) === 180 ? "180°" : "360°", active: e === So }] : []
  ];
}
const dA = { direction: "Direction", roll: "Roll", size: "Size", position: "Position", rotation: "Rotation", scale: "Scale" };
function fA(e, { enabled: t = !0 } = {}) {
  return e ? { lanes: e.map(({ name: r, overridden: n }) => ({ name: r, label: dA[r], disabled: !t || !n })) } : null;
}
function Qd(e) {
  return `Upstream · ${e}`;
}
function pA({ layer: e, editable: t, visible: r, locked: n, readOnly: i }) {
  const o = e !== null && !t;
  return {
    origin: e === null ? "" : `${Qd(e)}${o ? " · inherited only" : ""}`,
    note: o ? "Inherited only: edits of this upstream scene cannot be kept here. Edit it in its own Panorama Studio." : "",
    visible: r,
    locked: n,
    disabled: e === null || i || !t
  };
}
function hA({
  coverage: e,
  readOnly: t,
  selectionPicker: r,
  enabled: n,
  selectedKind: i,
  selectedItems: o,
  params: s,
  notes: a,
  uiSettings: l,
  normalizeCoverageValue: c,
  handoff: d = null,
  upstream: u = null
}) {
  return {
    coverage: { value: c(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: r,
    copyStateButton: {
      disabled: !n || i === "stroke" || i === "camera" || i === "world" || o.length > 1,
      label: "Copy State"
    },
    params: s,
    rows: sA(s),
    notes: a,
    handoff: d,
    upstream: u,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function mA({
  type: e,
  selected: t,
  selectedItems: r,
  selectedKind: n,
  geom: i,
  allLocked: o,
  anyLocked: s,
  selectedLocked: a,
  activeAspect: l,
  cutoutAspectOpen: c,
  isExternalSticker: d,
  isStickerHidden: u,
  canRestoreSelectedToInitial: f,
  iconSet: p,
  // Panorama Studio's shot is its Camera (#89), which is not locked, is deleted from its menu and has
  // the 360° preset.
  cameraShot: w = !1,
  coverage: h = 360,
  // Upstream elements in the selection (ADR 0030): null, or { lockable }. Only Lock acts on them, while their
  // layer keeps overrides; the other buttons stay in place, disabled.
  upstream: m = null
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let b = [];
  if (r.length > 1)
    b = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: p.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: p.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!s }
    ];
  else if (n === "stroke")
    b = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: p.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: p.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!a }
    ];
  else if (n === "image") {
    if (b = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: p.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: p.send_back, disabled: !!a }
    ], d(t) || (b.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: p.duplicate }), b.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: p.replace_image })), d(t)) {
      const V = f(), T = u(t);
      b.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: V ? "Back to initial position" : "Already at initial position",
        icon: p.back_initial,
        disabled: !V
      }), b.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: T ? "Show" : "Hide",
        tip: T ? "Show input image" : "Hide input image",
        icon: T ? p.eye : p.eye_dashed
      });
    }
    b.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? p.lock_open : p.lock_closed }), d(t) || b.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!a });
  } else
    b = [
      {
        key: "aspect",
        kind: "aspect",
        icon: p.aspect,
        open: !!c,
        choices: R0(l, { erp: w, coverage: h })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: p.rotate_90, disabled: l === So }
    ], w ? b.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete }) : b.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!a }
    );
  return m && (b = b.map((V) => ({ ...V, disabled: V.key === "toggle-lock" ? !m.lockable : !0 }))), V0(i.corners, b);
}
const Hp = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function gA({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1 }) {
  const i = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], o = n ? Hp.filter((s) => s.cameraTip) : Hp;
  return V0([...e, ...i], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: o.map(({ key: s, label: a, tip: l, cameraTip: c }) => ({ key: s, label: a, tip: n ? c : l, pressed: s === r ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...n ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: Ke.delete }] : []
  ]);
}
function yA(e, t, r, n, i) {
  const { minX: a, maxX: l, minY: c, maxY: d } = e || {};
  if (![a, l, c, d].every(Number.isFinite)) return null;
  const u = Math.min(Math.max((a + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), p = d + 18, w = c - 18 - r;
  let h;
  return p <= f ? h = Math.max(p, 14) : w >= 14 ? h = Math.min(w, f) : h = Math.min(Math.max(p, 14), f), { left: u, top: h };
}
function V0(e, t) {
  const r = e.map((c) => ({ x: Number(c == null ? void 0 : c.x), y: Number(c == null ? void 0 : c.y) })).filter((c) => Number.isFinite(c.x) && Number.isFinite(c.y));
  if (!r.length) return { visible: !1, left: 0, top: 0, items: [] };
  const n = r.map((c) => c.x), i = r.map((c) => c.y), o = Math.min(...n), s = Math.max(...n), a = Math.min(...i), l = Math.max(...i);
  return {
    visible: !0,
    left: (o + s) * 0.5,
    top: l + 18,
    items: t,
    anchor: { minX: o, maxX: s, minY: a, maxY: l }
  };
}
const $0 = "painting";
function bA(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const vA = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function SA(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: s = null, fpsLocked: a = !1, camera: l = !1, cameraHideable: c = !1, scene: d = !1, upstream: u = [] }) {
  const f = (h, m, b, V, T, ee, { keyable: I = !0, hideable: X = !0, origin: $ = null } = {}) => {
    const J = (ye) => (r == null ? void 0 : r.owner) === h && r.lane === ye ? r.frames.map((_e) => _e + ee) : [];
    return {
      id: h,
      label: b,
      icon: V,
      clip: T,
      selected: h === n,
      hideable: X,
      visible: m.visible,
      ...Gp($),
      keyable: I,
      open: I && o.has(h),
      keys: z1(m).map((ye) => ({ frame: ye.frame + ee, full: ye.full })),
      selectedFrames: J(null),
      lanes: (I ? No(m) : []).map((ye) => ({
        key: `${h}:${ye}`,
        lane: ye,
        label: vA[ye],
        frames: m[ye].keyframes.map((_e) => _e.frame + ee),
        selectedFrames: J(ye)
      }))
    };
  }, p = ({ start: h, in: m, duration: b }) => ({ clip: { start: h, end: b === null ? null : h + b }, offset: h - m }), w = (h, { idOf: m = (T) => T, sceneRow: b, origin: V = null }) => {
    const T = h.stickers.filter((I) => I.placement === "sky").sort((I, X) => X.z_index - I.z_index), ee = h.stickers.filter((I) => I.placement === "world");
    return [
      ...[...T, ...ee].map((I) => {
        const { clip: X, offset: $ } = p(I.clip), J = Km(V ? { ...I, id: I.origin.id } : I);
        return f(I.id, I, J, Ke.image, X, $, { origin: V && { ...V, overridden: V.stickerOverridden(I) } });
      }),
      ...bA(h.painting) || !h.painting_visible ? [{
        id: m($0),
        label: "Paint",
        icon: Ke.paintbrush_vertical_tool,
        clip: null,
        selected: !1,
        hideable: !0,
        visible: h.painting_visible,
        ...Gp(V && { ...V, overridden: V.paintingOverridden }),
        keyable: !1,
        open: !1,
        keys: [],
        selectedFrames: [],
        lanes: []
      }] : [],
      ...b || il(h.scene) ? [(() => {
        const { clip: I, offset: X } = p(h.scene.clip);
        return f(m("scene"), h.scene, "Scene", Ke.box, I, X, {
          keyable: !1,
          origin: V && { ...V, overridden: V.sceneOverridden }
        });
      })()] : []
    ];
  };
  return {
    visible: !0,
    expanded: i,
    hasAudio: !!s,
    muted: !!(s != null && s.muted),
    span: t,
    fps: e.timeline.fps,
    fpsLocked: a,
    length: e.timeline.length,
    rows: [
      ...l ? [f("camera", e.camera, "Camera", Ke.camera, null, 0, { hideable: c })] : [],
      ...w(e, { sceneRow: d })
    ],
    groups: u.map(({ key: h, sceneState: m, editable: b, record: V, scene: T }) => ({
      key: h,
      label: `${Qd(h)}${b ? "" : " · inherited only"}`,
      rows: w(m, {
        idOf: (ee) => Ru(h, ee),
        sceneRow: T || !m.scene.visible,
        origin: {
          editable: b,
          stickerOverridden: (ee) => !!(V != null && V.stickers.some((I) => I.id === ee.origin.id && I.placement === ee.placement)),
          paintingOverridden: !!V && Object.hasOwn(V, "painting_visible"),
          sceneOverridden: !!V && Object.keys(V.scene).length > 0
        }
      })
    }))
  };
}
function Gp(e) {
  return e ? { upstream: !0, overridden: e.overridden, editable: e.editable } : { upstream: !1, overridden: !1, editable: !0 };
}
function _A(e, t, r, n) {
  const i = K1(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, s = Math.max(...r) + n;
  return { label: o === s ? `Frame ${o}` : `${o} – ${s}`, ...i };
}
const wA = 4, xA = 0.25, z0 = {
  KeyW: ["forward", 1],
  KeyS: ["forward", -1],
  KeyD: ["right", 1],
  KeyA: ["right", -1],
  KeyE: ["up", 1],
  KeyQ: ["up", -1]
};
function j0(e) {
  return Object.hasOwn(z0, e);
}
function H0(e, t, r) {
  const { forward: n, right: i } = ji(e.yaw_deg, 0), o = [0, 1, 2].map((a) => n[a] * t.forward + i[a] * t.right + (a === 1 ? t.up : 0)), s = Math.hypot(...o);
  return !(s > 0) || !(r > 0) ? e : { ...e, position: e.position.map((a, l) => a + o[l] * r / s) };
}
function kA() {
  const e = /* @__PURE__ */ new Set();
  let t = !1, r = !1, n = 0;
  function i() {
    e.clear(), t = !1, r = !1;
  }
  return {
    // Holds a movement key down at time ts (ms); false for another key. The first one starts the clock.
    press(o, s) {
      return j0(o) ? (e.size || (n = s), e.add(o), !0) : !1;
    },
    // Lets a held key go; false when it was not held.
    release(o) {
      return e.delete(o);
    },
    releaseAll: i,
    // Shift and Alt as a key event has them.
    modifiers(o) {
      t = !!o.shiftKey, r = !!o.altKey;
    },
    get held() {
      return e.size > 0;
    },
    direction() {
      const o = { forward: 0, right: 0, up: 0 };
      for (const s of e) {
        const [a, l] = z0[s];
        o[a] += l;
      }
      return o;
    },
    // How far a second takes the view for content of size `scale`.
    speed(o) {
      return o * (t ? wA : 1) * (r ? xA : 1);
    },
    // The seconds since the last call, or since the first key went down; 0 with no key held.
    elapsed(o) {
      if (!e.size) return 0;
      const s = Math.max(0, o - n) / 1e3;
      return n = Math.max(n, o), s;
    }
  };
}
const MA = /* @__PURE__ */ new Set(["pano", "unwrap", "frame"]), NA = /* @__PURE__ */ new Set(["3dof", "6dof"]);
function PA(e) {
  var n;
  const t = e.viewTransition, r = (t == null ? void 0 : t.to) ?? {
    position: e.viewPosition,
    yaw_deg: e.viewYaw,
    pitch_deg: e.viewPitch,
    hFOV_deg: e.viewFov,
    distance: e.viewDistance
  };
  return {
    mode: e.mode,
    spaceMode: ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e.spaceMode,
    position: [...r.position],
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    hFOV_deg: r.hFOV_deg,
    distance: r.distance,
    moved: t != null && t.end ? t.end.moved : e.viewMoved
  };
}
function Kp(e, t, r) {
  return Number.isFinite(e) && e >= t && e <= r;
}
function AA(e, { frame: t }) {
  if (!e) return null;
  const { mode: r, spaceMode: n, position: i, yaw_deg: o, pitch_deg: s, hFOV_deg: a, distance: l, moved: c } = e;
  return MA.has(r) && (r !== "frame" || t) && NA.has(n) && Array.isArray(i) && i.length === 3 && i.every(Number.isFinite) && Number.isFinite(o) && Kp(s, -89.9, 89.9) && Kp(a, 35, 140) && Number.isFinite(l) && l > 0 && typeof c == "boolean" ? {
    mode: r,
    spaceMode: n,
    viewPosition: [...i],
    viewYaw: o,
    viewPitch: s,
    viewFov: a,
    viewDistance: l,
    viewMoved: c
  } : null;
}
const CA = 250, IA = 600, EA = 180, OA = 2;
function FA(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Jo(e, t, r) {
  return e + (t - e) * r;
}
function TA(e, t, r = 1) {
  const n = Math.max(
    Math.abs(sd(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((s, a) => s - e.position[a])) / Math.max(r, 1e-6), o = Math.min(1, n / EA + i / OA);
  return Math.round(Jo(CA, IA, o));
}
function DA(e, t, r) {
  const n = FA(Oe(r, 0, 1));
  return {
    position: e.position.map((i, o) => Jo(i, t.position[o], n)),
    yaw_deg: Gt(e.yaw_deg + sd(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Jo(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Jo(e.hFOV_deg, t.hFOV_deg, n),
    distance: Jo(e.distance, t.distance, n)
  };
}
function LA(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(sd(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function RA(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return LA(e, t) ? null : { from: e, to: t, startTs: r, durationMs: TA(e, t, n), end: i };
}
function VA(e, t) {
  const r = Oe((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: DA(e.from, e.to, r), done: !1 };
}
function xl(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function $A(e, t, r) {
  const n = xl(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function zA(e) {
  const {
    app: t,
    cameraV2: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: s,
    runtime: a,
    sceneV2: l,
    shotEditor: c,
    state: d,
    stateV2: u,
    studio: f,
    viewController: p
  } = e;
  let w, h, m, b, V, T, ee, I, X, $, J, ye, _e, me, ve = null;
  function ue(B, pe = null) {
    const W = y();
    J(() => {
      i.viewTransition = RA(W, B, performance.now(), { scale: O(), end: pe });
    }), !i.viewTransition && pe && we(pe), p.state.inertia.active = !1, p.state.inertia.vx = 0, p.state.inertia.vy = 0, _e(), X({ localOnly: !0, reason: pt.VIEW });
  }
  function we(B) {
    k(uu({ ...E(), moved: B.moved }, B.mode, L())), a.backgroundDirty = !0;
  }
  function de() {
    i.viewTransition && (i.viewTransition = null, _e());
  }
  function ne(B, pe) {
    ue({ ...y(), yaw_deg: B, pitch_deg: pe });
  }
  function ie() {
    return !f || he() && !V();
  }
  function le() {
    return i.mode === "pano" && z();
  }
  function z() {
    return u && zS({ sceneLinked: l && !!Bl(s).scene, files: $(), stickers: d.stickers });
  }
  function C() {
    return i.spaceMode === "6dof" && le();
  }
  function R() {
    var B, pe, W;
    return ex((W = (pe = (B = t.ui) == null ? void 0 : B.settings) == null ? void 0 : pe.getSettingValue) == null ? void 0 : W.call(pe, n0));
  }
  function E() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function k(B) {
    i.spaceMode = B.mode, i.viewPosition = B.position, i.viewMoved = B.moved;
  }
  function _(B) {
    var W;
    const pe = $A(i.spaceMode, i.viewTransition, B);
    if (pe !== "keep") {
      if (pe === "return") {
        ue({ ...y(), position: L(), distance: ((W = g()) == null ? void 0 : W.radius) || dr }, { mode: B, moved: !1 });
        return;
      }
      de(), k(uu({ ...E(), position: y().position }, B, L())), a.backgroundDirty = !0, _e(), X({ localOnly: !0, reason: pt.VIEW });
    }
  }
  function y() {
    var W;
    const B = i.viewMoved ? i.viewDistance : ((W = g()) == null ? void 0 : W.radius) || dr, pe = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: B };
    return TS(i.spaceMode, pe, L());
  }
  function L() {
    return he() ? ae().position : [0, 0, 0];
  }
  function Z() {
    return r && d.camera !== null;
  }
  function he() {
    return Z() && d.camera.visible;
  }
  function ge() {
    return d.painting_visible !== !1;
  }
  function P(B) {
    return B.visible && ko(B.clip, i.frame);
  }
  function ae() {
    return $l(d.camera, i.frame);
  }
  function g() {
    var pe;
    const B = w();
    return ((pe = B.space ?? B.content) == null ? void 0 : pe.sphere) ?? null;
  }
  function S(B) {
    i.viewPosition = B.position, i.viewYaw = B.yaw_deg, i.viewPitch = B.pitch_deg, i.viewDistance = B.distance, i.viewMoved = !0, a.backgroundDirty = !0, X({ localOnly: !0, reason: pt.VIEW });
  }
  function O() {
    var B;
    return ((B = g()) == null ? void 0 : B.radius) || dr;
  }
  function v() {
    var M;
    const B = w().space, pe = h(), W = i.worldSelectedId || i.selectedId, se = pe.stickers.findIndex((re) => re.id === W), K = se < 0 ? ye(W) : null, q = se < 0 ? (M = B.upstreamItems.find((re) => {
      var te;
      return ((te = re.request) == null ? void 0 : te.id) === W;
    })) == null ? void 0 : M.request : B.sticker, U = se < 0 && !Xt(K) ? null : {
      sticker: K ?? pe.stickers[se],
      value: K ? Wr(K, i.frame) : Os(pe, i.frame).stickers[se],
      plane: [...B.stickers, ...B.upstreamStickers].find((re) => re.id === W) ?? null,
      item: (q == null ? void 0 : q.id) === W && q.url ? { kind: q.kind, box: o.sceneBox(q.url) } : null
    }, N = b() ? ke() : KS(g(), U);
    if (!N) return;
    const Q = y();
    i.viewDistance = Q.distance, i.viewMoved = !0, ue($S(Q, N, n.width, n.height));
  }
  function j(B) {
    return o.pickSurface(xe(), B.x, B.y, n.width, n.height);
  }
  function H(B, pe) {
    var W;
    return du(B, pe, i.viewMoved ? null : (W = g()) == null ? void 0 : W.center, O());
  }
  function D() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function A(B, pe) {
    const W = performance.now(), se = { x: B.x, y: B.y, time: W, key: o.contentRevision(), view: D() };
    if (!qm(ve, se)) {
      const q = j(B);
      ve = { ...se, cost: performance.now() - W, hit: q };
    }
    const K = y();
    S(Zm(K, H(K, ve.hit), pe, O())), ve.view = D(), ve.wheelTime = W;
  }
  function F(B, pe, W) {
    const se = y();
    i.interaction = B === "orbit" ? { kind: "space_orbit", last: pe, pivot: H(se, j(pe)) } : { kind: "space_pan", last: pe, depth: Ym(se, O()) }, me(pe), n.setPointerCapture(W);
  }
  function x() {
    return C() || T();
  }
  function G(B) {
    const pe = I.elapsed(B);
    if (!pe || i.viewTransition) return !1;
    const W = I.speed(O()) * pe;
    if (T()) return ee(I.direction(), W);
    if (!C()) return !1;
    const se = y(), K = H0(se, I.direction(), W);
    return K === se ? !1 : (i.viewPosition = K.position, i.viewDistance = se.distance, i.viewMoved = !0, !0);
  }
  function Y() {
    dl(s).view = PA(i);
  }
  function fe() {
    const B = c && !L0({ hasShot: !!m(), erp: V() }).disabled, pe = AA(dl(s).view, { frame: B });
    pe && Object.assign(i, pe);
  }
  function Se(B) {
    return B * 0.2;
  }
  function ke() {
    return { center: ae().position, radius: Se(O()) };
  }
  function ce(B, pe) {
    const { yaw_deg: W, pitch_deg: se } = rg(B.position, pe);
    return { ...B, yaw_deg: W, pitch_deg: se };
  }
  function xe() {
    return kd(y(), n.width, n.height, g());
  }
  return {
    connect(B) {
      ({
        editorViewInput: w,
        editorViewSceneState: h,
        getActiveCutoutShot: m,
        isCameraSelected: b,
        isErpCamera: V,
        isFreeFrameView: T,
        moveFrameByKeys: ee,
        moveKeys: I,
        requestDraw: X,
        sceneFiles: $,
        startAnimation: J,
        stickerById: ye,
        syncFloatingViewButtonState: _e,
        updateCursor: me
      } = B);
    },
    transitionView: ue,
    applyViewTransitionEnd: we,
    cancelViewTransition: de,
    turnViewTo: ne,
    cameraPreviewShown: ie,
    isSpaceView: le,
    hasSpaceContent: z,
    isFreeSpaceView: C,
    viewControls: R,
    spaceModeState: E,
    applySpaceMode: k,
    setSpaceMode: _,
    spaceViewState: y,
    spaceOrigin: L,
    hasCamera: Z,
    cameraShoots: he,
    paintingShown: ge,
    sceneStickerShown: P,
    cutoutCamera: ae,
    contentSphere: g,
    setSpaceView: S,
    spaceScale: O,
    frameSpaceContent: v,
    zoomSpaceAt: A,
    startSpaceDrag: F,
    canKeyMove: x,
    stepKeyMove: G,
    saveView: Y,
    restoreView: fe,
    currentSpaceCamera: xe,
    cameraFrustumLength: Se,
    cameraSphere: ke,
    lookingAt: ce
  };
}
function jA(e) {
  const {
    canvas: t,
    editor: r,
    editorView: n,
    imageCache: i,
    readOnly: o,
    scheduler: s,
    state: a,
    stateV2: l,
    stillCanvas: c,
    videoEl: d
  } = e;
  let u, f, p, w, h, m, b, V, T, ee, I, X, $, J, ye, _e, me, ve, ue, we, de, ne, ie, le, z, C, R, E, k, _, y, L, Z, he, ge = { revision: -1, sceneState: null }, P = null;
  function ae() {
    return P || (P = O()), P;
  }
  function g() {
    P = null;
  }
  function S() {
    return ge.sceneState;
  }
  function O() {
    const ce = X(), xe = p(), B = { ...a.assets };
    for (const Ne of l ? [] : a.stickers) {
      const Ee = String((Ne == null ? void 0 : Ne.asset_id) || "");
      Ee && !B[Ee] && i.has(Ee) && (B[Ee] = { type: "comfy_image", filename: Ee });
    }
    const pe = l ? a.stickers.map((Ne) => we(Ne) ? { ...Ne, source: { kind: "file", filename: k(Ne) } } : Ne) : a.stickers;
    ge.revision !== s.stateRevision && (ge = { revision: s.stateRevision, sceneState: tr({ ...a, stickers: pe, assets: B, painting: null }) }), l && v(ge.sceneState);
    const W = Os(ge.sceneState, r.frame), se = ne ? ee() : null, K = (Ne) => {
      if (l && !Ne.visible) return null;
      if (ne && me(Ne)) return se;
      const Ee = J(Ne);
      return Ee ? { media: Ee, revision: $(Ee) } : null;
    }, q = Z(), U = [...q.sky, ...ug(ge.sceneState, r.frame, a.stickers, { media: K, paintLayers: xe, evaluated: W })], N = ce && (ce === d || ce === c) ? d.dataset.panoSrc : ce, Q = _e(ce) ? { media: ce, revision: $(ce), coverage: f(), source: N } : null, M = ye(), re = DS(z(), M, C());
    re.mode !== r.spaceMode && m(), u(re);
    const te = M ? j(ge.sceneState, W, K, q) : null, be = ue() ? { ...te, ...H(te) } : null;
    return { background: Q, layers: U, space: be, content: te };
  }
  function v(ce) {
    const xe = new Map(a.stickers.map((B) => [B.id, B.clip]));
    ce.scene.clip = { ...a.scene.clip };
    for (const B of ce.stickers) {
      const pe = xe.get(B.id);
      pe && (B.clip = { ...pe });
    }
  }
  function j(ce, xe, B, pe) {
    const W = ie(), se = Md(W, xe.scene), K = se != null && se.url ? n.sceneBox(se.url) : null, q = K && Aa(se.kind, K), U = E(), N = tg(U, ce, xe), Q = N != null && N.url ? n.sceneBox(N.url) : null, M = Q ? [{ box: Aa(N.kind, Q), value: N.value }] : [], re = fg(ce, r.frame, a.stickers, { media: B, evaluated: xe });
    for (const { request: be, value: Ne } of pe.items) {
      const Ee = be != null && be.url ? n.sceneBox(be.url) : null;
      Ee && M.push({ box: Aa(be.kind, Ee), value: Ne });
    }
    const te = mu(HS(xe, q, [...re, ...pe.stickers], M));
    return {
      evaluated: xe,
      sceneUrls: W ? W.urls.filter(Boolean) : [],
      scene: se,
      stickerUrls: ng(U, ce),
      sticker: N,
      stickers: re,
      upstreamStickers: pe.stickers,
      upstreamItems: pe.items,
      sphere: te
    };
  }
  function H(ce) {
    var B;
    const xe = ((B = ce.sphere) == null ? void 0 : B.radius) || dr;
    return {
      gizmo: A() ? G() : D(ce.evaluated),
      grid: r.showGrid && !r.fullscreen ? t_(xe) : null,
      lines: h() ? x(xe) : []
    };
  }
  function D(ce) {
    const xe = le(), B = Xt(xe) ? Wr(xe, r.frame) : ce.stickers.find((pe) => pe.id === (xe == null ? void 0 : xe.id));
    return !he(xe) || !(B != null && B.active) ? null : { mode: r.gizmoMode, transform: fu(B) };
  }
  function A() {
    return h() && r.selectedId === vd;
  }
  let F = { revision: -1, span: -1, segments: [] };
  function x(ce) {
    const xe = y();
    (F.revision !== s.stateRevision || F.span !== xe) && (F = { revision: s.stateRevision, span: xe, segments: r_(i_(a, xe)) });
    const { segments: B } = F, pe = B.length ? [{ segments: B, color: o2 }] : [];
    if (!ve()) return pe;
    const W = A() ? N0 : i2;
    return [...pe, { segments: ig(V(), w(ce)), color: W }];
  }
  function G() {
    return !ve() || !A() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: fu({ ...V(), scale: 1 }) };
  }
  function Y() {
    const { background: ce, layers: xe, space: B } = ae(), pe = t.width, W = t.height, se = T({ x: 0, y: 0, w: pe, h: W });
    let K = !1;
    return !ce && !xe.length && !B ? (n.clear(460551), K = n.ready) : (n.clear(), K = !!n.render({
      rect: se,
      camera: B ? kd(R(), pe, W, B.sphere) : b(),
      background: ce,
      layers: xe,
      space: B
    })), _(), (r.worldSelectedId || A() || de()) && L(), K;
  }
  function fe(ce) {
    const { content: xe } = ae();
    return !xe || !ce.position ? as(ce) : Qm(as(ce), ce.position, I(), xe.sphere);
  }
  function Se(ce, xe, B, pe = null) {
    const { background: W, layers: se, content: K } = ae();
    if (!W && !se.length && !K) return null;
    const q = K && xe.position ? K : null;
    return n.render({ rect: ce, camera: fe(xe), background: W, layers: se, space: q, owner: B, clearColor: pe });
  }
  function ke(ce) {
    return n.clear(460551), !!n.renderUnwrap({ rect: T(ce), ...ae() });
  }
  return {
    connect(ce) {
      ({
        applySpaceMode: u,
        backgroundCoverage: f,
        buildEditorViewPaintLayers: p,
        cameraFrustumLength: w,
        cameraShoots: h,
        cancelViewTransition: m,
        currentViewCamera: b,
        cutoutCamera: V,
        deviceRect: T,
        followPortSticker: ee,
        frameViewDistance: I,
        getConnectedErpImage: X,
        getMediaRevisionToken: $,
        getStickerImage: J,
        hasSpaceContent: ye,
        isDecodedImageReady: _e,
        isExternalSticker: me,
        isFreeSpaceView: ve,
        isSpaceView: ue,
        isUploadingSticker: we,
        isWorldMenuShown: de,
        portVideo: ne,
        sceneFiles: ie,
        selectedWorldSticker: le,
        spaceModeState: z,
        spaceOrigin: C,
        spaceViewState: R,
        stickerFiles: E,
        stickerImageKey: k,
        syncFloatingViewButtonState: _,
        timelineSpanFrames: y,
        updateSelectionMenu: L,
        upstreamViewInput: Z,
        worldStickerEditable: he
      } = ce);
    },
    editorViewInput: ae,
    endEditorViewFrame: g,
    editorViewSceneState: S,
    isCameraSelected: A,
    renderEditorView: Y,
    shotViewCamera: fe,
    drawEditorViewShot: Se,
    renderEditorViewUnwrap: ke
  };
}
function HA(e) {
  const {
    comfyMedia: t,
    editor: r,
    mediaAssetSource: n,
    mediaSource: i,
    node: o,
    state: s,
    studio: a
  } = e;
  let l, c, d, u, f = { list: null, entries: [], fps: null }, p = /* @__PURE__ */ new Map();
  const w = /* @__PURE__ */ new Map(), h = () => u({ cause: "frame_view", localOnly: !0, reason: pt.MEDIA });
  function m(E) {
    if (!E) return null;
    let k = w.get(E);
    return k || (k = new Image(), k.onload = h, k.onerror = h, k.src = E, w.set(E, k)), k;
  }
  function b({ sceneState: E, ui: k }) {
    return [
      ...E.stickers.filter((_) => _.source.kind !== "port").map((_) => n(sl(_.source))),
      i(qn(k, Fi)[0] || null),
      ...E.painting.raster_objects.map((_) => _.rasterDataUrl)
    ].filter(Boolean);
  }
  function V() {
    return a && (np(o, "scene") === E0 || !!T());
  }
  function T() {
    const E = a && Kt(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, k = Array.isArray(E) ? E : null;
    if (f.list !== k) {
      f.entries.forEach(C), f = { list: k, entries: k ? I2(k).map((y) => ({ layer: y })) : [], fps: null };
      const _ = new Set(f.entries.flatMap((y) => b(y.layer)));
      for (const y of [...w.keys()]) _.has(y) || w.delete(y);
    }
    return k && f.fps !== s.timeline.fps && ee(), k && f.entries;
  }
  function ee() {
    if (!f.list) return;
    const E = L2(f.entries.map((k) => k.layer), s.upstream, s.timeline.fps);
    f.entries.forEach((k, _) => {
      k.working = E[_];
    }), f.fps = s.timeline.fps, p = jp(E);
  }
  function I() {
    if (!f.list) return;
    const E = f.entries.map((_) => _.working), k = V2(s.upstream, f.entries.map((_) => _.layer), E, p, f.fps);
    k !== s.upstream && (s.upstream = k, p = jp(E));
  }
  function X() {
    return (T() ?? []).flatMap((E) => E.working.sceneState.stickers);
  }
  function $(E) {
    const k = f.entries.find((_) => {
      var y;
      return ((y = _.working) == null ? void 0 : y.key) === E.origin.layer;
    });
    return k ? m(i(qn(k.layer.ui, Fi)[0] || null)) : null;
  }
  function J(E = null) {
    const k = T();
    if (!k) return 0;
    const [_] = t.uiValue(o, "pano_timeline_frames") || [];
    let y = Number(_) > 0 ? Number(_) : 0;
    const L = k.map((Z) => Z.working);
    for (const { index: Z, clip: he, sticker: ge } of $2(L, s.upstream, p)) {
      const P = qn(k[Z].layer.ui, Fu)[0], ae = he === E ? he.start + 1 : he.duration !== null ? he.start + he.duration : (ge == null ? void 0 : ge.source.kind) === "port" && P && typeof P == "object" ? Ed(he, s.timeline.fps, P) : 0;
      y = Math.max(y, ae);
    }
    return y;
  }
  function ye() {
    return (T() ?? []).flatMap(({ working: E }) => [E.sceneState.scene, ...E.sceneState.stickers]);
  }
  function _e() {
    return (T() ?? []).map(({ layer: E, working: k }) => {
      const _ = Ns(k.key);
      return {
        key: k.key,
        sceneState: k.sceneState,
        editable: _,
        record: _ ? s.upstream.find((y) => y.layer === k.key) ?? null : null,
        scene: qn(E.ui, "pano_scene_files").length > 0
      };
    });
  }
  function me(E) {
    for (const { working: k } of T() ?? []) {
      const { key: _, sceneState: y } = k, L = Ns(_);
      if (E === Ru(_, "scene")) return { editable: L, part: "scene", owner: y.scene, sceneState: y };
      if (E === Ru(_, "painting")) return { editable: L, part: "painting", owner: null, sceneState: y };
      const Z = y.stickers.find((he) => he.id === E);
      if (Z) return { editable: L, part: "sticker", owner: Z, sceneState: y };
    }
    return null;
  }
  function ve() {
    if (!a) return "";
    const E = T();
    if (F2(np(o, "scene"), E)) return "Run the workflow to show the upstream scene.";
    if (!E) return "";
    const k = t.uiList(o, "pano_sticker_warnings");
    return String(k.find((_) => String(_).startsWith(O2)) ?? "");
  }
  function ue(E, k, _) {
    const { ui: y } = E.layer, L = s.timeline.fps, Z = qn(y, Fu)[0], he = qn(y, M0).map(i).filter(Boolean), ge = i(qn(y, k0)[0] || null), P = Z && typeof Z == "object" ? he.length ? { frames: he, meta: Z } : ge ? { src: ge, meta: Z } : null : null, ae = m(i(qn(y, Fi)[0] || null)), g = P ? Id(k.clip, _, L, P.meta) : null;
    let S = ae;
    if (P != null && P.frames)
      E.frames || (E.frames = Fd({
        createImage: (O, v) => {
          const j = new Image();
          return j.onload = v, j.onerror = v, j.src = O, j;
        },
        onLoad: h
      })), S = E.frames.picture(P.frames, g, P.meta, ae);
    else if (P != null && P.src) {
      const O = we(E);
      O.follow({ src: P.src, time: g, playing: d.advancing, fps: L }), S = O.picture(E.still, ae);
    }
    return S ? { media: S, revision: c(S), source: Od(P, ae) } : null;
  }
  function we(E) {
    if (E.follower) return E.follower;
    const k = Es(document, "editor.upstream-port-video");
    k.playsInline = !0, k.preload = "auto";
    const _ = on({ label: "editor.upstream-port-still" });
    return _.__panoFrameIdx = 0, E.video = k, E.still = _, E.follower = Vd({
      video: k,
      onCapture: () => {
        var Z;
        const y = Number(k.videoWidth || 0), L = Number(k.videoHeight || 0);
        y < 1 || L < 1 || (_.width = y, _.height = L, (Z = _.getContext("2d")) == null || Z.drawImage(k, 0, 0), _.__panoFrameIdx += 1, h());
      },
      onChange: h
    }), E.follower;
  }
  function de(E, k, _) {
    if (k.source.kind === "port") return ue(E, k, _);
    const y = m(n(sl(k.source)));
    return y ? { media: y, revision: c(y) } : null;
  }
  function ne(E) {
    var ae;
    const { sceneState: k } = E.working, { painting: _ } = k, y = _.paint.strokes.length + _.mask.strokes.length;
    if (!k.painting_visible || !y && !_.raster_objects.length) return [];
    const L = l(), Z = `${L.width}x${L.height}`;
    E.paintSize !== Z && (le(E), E.paintSize = Z, E.paintEngine = y ? Rl(L) : null, (ae = E.paintEngine) == null || ae.rebuildCommitted({ painting: _ }), E.rasters = /* @__PURE__ */ new Map());
    const he = E.paintEngine, ge = (he == null ? void 0 : he.getMaskDisplayCanvas()) || null, P = [];
    for (const g of T2(k, he ? he.getAllGroupIds() : [], !!ge)) {
      const S = g.kind === "group" ? he == null ? void 0 : he.getGroupDisplayCanvas(g.id) : g.kind === "mask" ? ge : ie(E, g.item, L);
      S && P.push({ id: `${g.kind}:${g.id}`, media: S, revision: Z, opacity: 1, zIndex: g.zIndex });
    }
    return P;
  }
  function ie(E, k, { width: _, height: y }) {
    if (E.rasters.has(k.id)) return E.rasters.get(k.id);
    const L = m(k.rasterDataUrl);
    if (!L.complete || !L.naturalWidth) return null;
    const Z = on({ label: "editor.upstream-raster-erp", width: _, height: y }), he = Z.getContext("2d");
    return he ? (P0(he, L, k, _, y), E.rasters.set(k.id, Z), Z) : null;
  }
  function le(E) {
    var k;
    (k = E.rasters) == null || k.forEach((_) => hs(_)), E.rasters = null, E.paintEngine = null, E.paintSize = null;
  }
  function z() {
    const E = T() ?? [], k = { sky: [], stickers: [], items: [] }, _ = r.frame;
    return E.forEach((y) => {
      const L = z2(y.working, y.working.key, _, {
        media: (Z) => de(y, Z, _),
        paintLayers: ne(y),
        source: i
      });
      k.sky.push(...L.sky), k.stickers.push(...L.stickers), k.items.push(...L.items);
    }), k;
  }
  function C(E) {
    var k;
    (k = E.follower) == null || k.dispose(), E.still && hs(E.still), le(E);
  }
  function R() {
    f.entries.forEach(C), f = { list: null, entries: [], fps: null }, p = /* @__PURE__ */ new Map(), w.clear();
  }
  return {
    connect(E) {
      ({ getDesiredPaintTargetDescriptor: l, getMediaRevisionToken: c, playback: d, requestDraw: u } = E);
    },
    upstreamEntries: T,
    upstreamLinked: V,
    upstreamNotice: ve,
    upstreamSpanFrames: J,
    upstreamViewInput: z,
    rebuildUpstreamWorking: ee,
    syncUpstreamEdits: I,
    upstreamStickers: X,
    upstreamStickerImage: $,
    upstreamTimelineLayers: _e,
    upstreamTimelineOwners: ye,
    upstreamRow: me,
    disposeUpstream: R
  };
}
const Vu = "camera_preview";
function GA(e) {
  return e === Vu ? pt.SPLAT_PREVIEW : pt.SPLAT_STAGE;
}
function KA(e) {
  return [...e].some((t) => t !== pt.VIEW && t !== pt.OVERLAY && t !== pt.SPLAT_STAGE);
}
function G0(e, t = !1) {
  const r = Oe(Vi(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function WA(e) {
  const {
    backgroundCanvas: t,
    cutoutPreviewCanvas: r,
    cutoutPreviewHost: n,
    editor: i,
    editorView: o,
    runtime: s,
    shotEditor: a,
    studio: l,
    uiState: c
  } = e;
  let d, u, f, p, w = null, h = !1, m = !1;
  function b() {
    h && (h = !1, o.releaseSplats(Vu));
  }
  function V() {
    w = null, m = !1, b();
  }
  function T(ye) {
    if (!n || !ye) return !1;
    const _e = n.closest(".pano-camera-preview");
    if (!_e) return !1;
    const me = Math.round(Number(_e.clientWidth || n.clientWidth || 0)), ve = Math.round(Number(_e.clientHeight || n.clientHeight || 0));
    return Math.abs(me - Number(ye.width || 0)) <= 1 && Math.abs(ve - Number(ye.height || 0)) <= 1;
  }
  function ee(ye, _e) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !a || !c.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, V();
      return;
    }
    const me = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !me || !r) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = me ? "Preview unavailable" : "Add Frame to preview", V();
      return;
    }
    const ve = G0(me, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = ve.width, c.cameraPreview.height = ve.height, m) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, b();
      return;
    }
    const ue = window.devicePixelRatio || 1, we = Math.max(1, ve.width * ue), de = Math.max(1, ve.height * ue), ne = Math.min(1, t.width / we, t.height / de), ie = { width: Math.max(1, Math.floor(we * ne)), height: Math.max(1, Math.floor(de * ne)) }, le = !w || w.width !== ie.width || w.height !== ie.height || KA(_e);
    if (ye && le) {
      h = !0;
      const C = u({ x: 0, y: t.height - ie.height, w: ie.width, h: ie.height }, me, Vu);
      w = C ? ie : null, C && J(C);
    }
    if (!w) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = p() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const z = T(ve);
    c.cameraPreview.ready = !0, c.cameraPreview.label = z ? "" : "Loading preview", c.cameraPreview.settled = z && s.pendingStableLayoutFrames <= 0 && s.hasPresentedFrame;
  }
  function I() {
    w = null, m = !1;
  }
  let X = 0, $ = !1;
  function J(ye) {
    const _e = ++X;
    createImageBitmap(ye.canvas, ye.x, ye.y, ye.width, ye.height).then((me) => {
      var ve;
      if (_e !== X || !s.running) {
        me.close();
        return;
      }
      (ve = r.getContext("bitmaprenderer")) == null || ve.transferFromImageBitmap(me);
    }).catch((me) => {
      _e !== X || !s.running || (m = !0, w = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !$ && ($ = !0, console.error("[PanoramaStickers] camera preview frame failed", me)));
    });
  }
  return {
    connect(ye) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: p
      } = ye);
    },
    drawCutoutOutputPreview: ee,
    forgetCameraPreviewFrame: I
  };
}
function UA(e) {
  const {
    cameraV2: t,
    canvas: r,
    ctx: n,
    editor: i,
    editorView: o,
    frameGateCssRadius: s,
    runtime: a,
    shotEditor: l,
    studio: c,
    type: d
  } = e;
  let u, f, p, w, h, m, b, V, T, ee, I, X, $, J, ye, _e, me, ve, ue, we, de, ne, ie, le, z, C, R, E, k, _, y, L, Z, he, ge, P, ae, g;
  function S(B) {
    const pe = r.width, W = r.height, se = J();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, pe, W), L(), B && (a.backgroundDirty = !ge(se)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let q = 0; q <= 16; q += 1) {
        const U = se.x + se.w * q / 16;
        n.beginPath(), n.moveTo(U, se.y), n.lineTo(U, se.y + se.h), n.stroke();
      }
      for (let q = 0; q <= 8; q += 1) {
        const U = se.y + se.h * q / 8;
        n.beginPath(), n.moveTo(se.x, U), n.lineTo(se.x + se.w, U), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(se.x, se.y + se.h / 2), n.lineTo(se.x + se.w, se.y + se.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const K = se.y + se.h * 0.57;
      n.fillText("Left", se.x + se.w * 0.25, K), n.fillText("Front", se.x + se.w * 0.5, K), n.fillText("Right", se.x + se.w * 0.75, K), n.fillText("Back", se.x + 38, K), n.fillText("Back", se.x + se.w - 38, K);
    }
  }
  function O(B, pe, W = 1) {
    let se = !1;
    n.strokeStyle = pe, n.lineWidth = W, n.beginPath();
    for (const K of B) {
      const q = E(K);
      if (!q) {
        se = !1;
        continue;
      }
      se ? n.lineTo(q.x, q.y) : (n.moveTo(q.x, q.y), se = !0);
    }
    n.stroke();
  }
  function v(B) {
    const pe = r.width, W = r.height;
    if (n.clearRect(0, 0, pe, W), L(), B && (a.backgroundDirty = !he()), i.showGrid && !i.fullscreen && h().space)
      j();
    else if (i.showGrid && !i.fullscreen) {
      for (let K = -180; K <= 180; K += 15) {
        const q = [];
        for (let U = -89; U <= 89; U += 4) q.push(Tn(K, U));
        O(q, "#3f3f46", K % 90 === 0 ? 1.3 : 1);
      }
      for (let K = -75; K <= 75; K += 15) {
        const q = [];
        for (let U = -180; U <= 180; U += 4) q.push(Tn(U, K));
        O(q, K === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", K === 0 ? 1.5 : 1);
      }
      const se = [
        { name: "Left", dir: Tn(-90, 0) },
        { name: "Front", dir: Tn(0, 0) },
        { name: "Right", dir: Tn(90, 0) },
        { name: "Back", dir: Tn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", se.forEach((K) => {
        const q = E(K.dir);
        q && n.fillText(K.name, q.x, q.y + 24);
      });
    }
  }
  function j() {
    const B = kd(g(), r.width, r.height, f()), pe = Ss(B, [0, 0, 0], r.width, r.height);
    pe && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", pe.x, pe.y - 12));
  }
  function H(B, pe) {
    const W = R(B), se = Tn(Number(W.yaw_deg || 0), Number(W.pitch_deg || 0)), K = i.mode === "unwrap" ? k(se) : null, q = K ? K.x : null, U = i.mode === "pano" ? 28 : 20, N = [
      P(B, 0, U, q),
      P(B, 1, U, q),
      P(B, 2, U, q),
      P(B, 3, U, q)
    ];
    zd(n, N, { selected: pe });
  }
  function D(B, pe = []) {
    if (!(!B || !Array.isArray(pe) || pe.length < 4)) {
      B.beginPath(), B.moveTo(pe[0].x, pe[0].y);
      for (let W = 1; W < 4; W += 1) B.lineTo(pe[W].x, pe[W].y);
      B.closePath();
    }
  }
  function A(B, pe, W) {
    const se = Array.isArray(B == null ? void 0 : B.corners) ? B.corners : [];
    if (se.length < 4) return;
    const K = Oe(Number((B == null ? void 0 : B.visibilityAlpha) ?? 1), 0, 1);
    if (K <= 0.01) return;
    const q = n.globalAlpha;
    n.globalAlpha = q * K;
    const U = W ? "rgba(255, 116, 116, 0.96)" : pe ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", N = W ? "rgba(255, 89, 89, 0.08)" : pe ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", Q = pe ? 3.2 : 2.6;
    D(n, se), n.fillStyle = N, n.fill(), n.strokeStyle = U, n.lineWidth = Q, n.stroke(), n.save(), n.strokeStyle = U, n.lineWidth = pe ? 3.2 : 2.6, n.lineCap = "round";
    const M = Array.isArray(B == null ? void 0 : B.edgeMidpoints) && B.edgeMidpoints.length >= 4 ? B.edgeMidpoints : [
      { edge: "top", x: (se[0].x + se[1].x) * 0.5, y: (se[0].y + se[1].y) * 0.5 },
      { edge: "right", x: (se[1].x + se[2].x) * 0.5, y: (se[1].y + se[2].y) * 0.5 },
      { edge: "bottom", x: (se[2].x + se[3].x) * 0.5, y: (se[2].y + se[3].y) * 0.5 },
      { edge: "left", x: (se[3].x + se[0].x) * 0.5, y: (se[3].y + se[0].y) * 0.5 }
    ], re = { top: "bottom", right: "left", bottom: "top", left: "right" }, te = pe ? 12 : 9;
    M.forEach((be) => {
      const Ee = M.find((Ce) => (Ce == null ? void 0 : Ce.edge) === re[be == null ? void 0 : be.edge]) || {
        x: (se[0].x + se[1].x + se[2].x + se[3].x) * 0.25,
        y: (se[0].y + se[1].y + se[2].y + se[3].y) * 0.25
      }, Ve = Ee.x - be.x, We = Ee.y - be.y, Ge = Math.hypot(Ve, We) || 1;
      n.beginPath(), n.moveTo(be.x, be.y), n.lineTo(be.x + Ve / Ge * te, be.y + We / Ge * te), n.stroke();
    }), n.restore(), n.globalAlpha = q;
  }
  function F(B, pe, W, se) {
    const K = Oe(Number((pe == null ? void 0 : pe.visibilityAlpha) ?? 1), 0, 1);
    if (K <= 0.01) return;
    if (ie(B)) {
      A(pe, W, se);
      return;
    }
    if (le(B)) {
      const U = n.globalAlpha;
      n.globalAlpha = U * $(B) * K, i.mode === "frame" ? (n.strokeStyle = W ? "rgba(250, 250, 250, 0.9)" : se ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = W ? 2 : 1, D(n, pe.corners), n.stroke()) : H(B, W), n.globalAlpha = U;
      return;
    }
    const q = n.globalAlpha;
    n.globalAlpha = q * K, n.fillStyle = W ? "rgba(0, 112, 243, 0.24)" : se ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", D(n, pe.corners), n.fill(), n.strokeStyle = W ? "rgba(255, 255, 255, 1)" : se ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = W ? 2.8 : 1.9, D(n, pe.corners), n.stroke(), n.globalAlpha = q;
  }
  function x(B, pe, W) {
    if (le(B)) {
      e0(n, pe, { accent: W });
      return;
    }
    const se = !(ie(B) && _e());
    n.fillStyle = W, se && pe.corners.forEach((K) => {
      n.beginPath(), n.arc(K.x, K.y, 6.5, 0, Math.PI * 2), n.fill();
    }), se && ie(B) && (n.strokeStyle = W, n.lineCap = "round", n.lineWidth = 4, pe.edgeMidpoints.forEach((K) => {
      var te, be, Ne, Ee;
      const q = (((te = K.b) == null ? void 0 : te.x) ?? K.x) - (((be = K.a) == null ? void 0 : be.x) ?? K.x), U = (((Ne = K.b) == null ? void 0 : Ne.y) ?? K.y) - (((Ee = K.a) == null ? void 0 : Ee.y) ?? K.y), N = Math.hypot(q, U) || 1, Q = q / N, M = U / N, re = 10;
      n.beginPath(), n.moveTo(K.x - Q * re, K.y - M * re), n.lineTo(K.x + Q * re, K.y + M * re), n.stroke();
    }), n.lineCap = "butt"), z(B) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(pe.rotateStemBase.x, pe.rotateStemBase.y), n.lineTo(pe.rotateHandle.x, pe.rotateHandle.y), n.stroke(), n.fillStyle = W, n.beginPath(), n.arc(pe.rotateHandle.x, pe.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function G() {
    var q;
    const B = i.mode === "frame" ? [] : X(), pe = B.length > 1, W = l ? b() : ee(), se = W.map((U) => `${String((U == null ? void 0 : U.id) || "")}:${ie(U) ? "frame" : Number((U == null ? void 0 : U.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== W || i._sortedItemsCache.orderKey !== se) && (i._sortedItemsCache = {
      src: W,
      orderKey: se,
      sorted: [...W]
    });
    const K = [...B.filter(Xt), ...i._sortedItemsCache.sorted];
    for (const U of K) {
      const N = i.mode !== "frame" && !pe && we(U);
      if (i.mode === "frame" && !N) continue;
      const Q = le(U), M = ie(U), re = ue(U);
      if (!Q && !M || ne(U) && !ae(U)) continue;
      const te = C(U);
      if (d !== "stickers" && !te.visible)
        continue;
      const be = Oe(Number((te == null ? void 0 : te.visibilityAlpha) ?? 1), 0, 1);
      if (be <= 0.01) continue;
      const Ne = M && l && i.mode === "pano" ? Oe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= Ne, F(U, te, N, re), N && te.visible) {
        const Ee = re ? "#ff4d4f" : Q && me(U) ? "#f59e0b" : "#0070f3", Ve = n.globalAlpha;
        n.globalAlpha = Ve * be, x(U, te, Ee), n.globalAlpha = Ve;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !m() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const U = i.cutoutPanoFrameVisual, N = Oe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= N, A(U.geom, U.selected, U.locked), U.selected && x(
        U.item,
        U.geom,
        U.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (pe) {
      const U = I(B);
      if (U != null && U.visible) {
        const N = u(B) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(U.corners[0].x, U.corners[0].y);
        for (let Q = 1; Q < U.corners.length; Q += 1) n.lineTo(U.corners[Q].x, U.corners[Q].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = N, U.corners.forEach((Q) => {
          n.beginPath(), n.arc(Q.x, Q.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      B.forEach((U) => {
        if (!z(U) && !de(U)) return;
        const N = C(U);
        if (!(N != null && N.visible)) return;
        const Q = ue(U) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(N.corners[0].x, N.corners[0].y);
        for (let M = 1; M < N.corners.length; M += 1) n.lineTo(N.corners[M].x, N.corners[M].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = Q, N.corners.forEach((M) => {
          n.beginPath(), n.arc(M.x, M.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((q = i.interaction) == null ? void 0 : q.kind) === "marquee_select") {
      const U = Z(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(U.x0, U.y0, U.x1 - U.x0, U.y1 - U.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function Y(B) {
    const pe = m(), W = V(pe);
    if (!pe || !W)
      return n.clearRect(0, 0, r.width, r.height), B && o.clear(657930), !1;
    const se = { x: W.x, y: W.y, w: W.w, h: W.h }, { rect: K, shot: q } = ag(pe, W, { width: r.width, height: r.height }), U = fe(se);
    if (n.clearRect(0, 0, r.width, r.height), B) {
      o.clear(657930);
      const N = p(K), Q = !!w(N, q, void 0, 657930);
      Q || o.clear(1118481, N), a.backgroundDirty = !Q;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(se.x, se.y, se.w, se.h, U), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = N0, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(se.x + 1, se.y + 1, se.w - 2, se.h - 2, Math.max(0, U - 1)), n.stroke(), n.restore(), !0;
  }
  function fe(B) {
    const pe = Math.max(1e-6, Number(a.frameCanvasScale || 1));
    return Math.min(s * pe, Number((B == null ? void 0 : B.w) || 0) * 0.5, Number((B == null ? void 0 : B.h) || 0) * 0.5);
  }
  function Se() {
    var Q, M;
    if (((Q = i.interaction) == null ? void 0 : Q.kind) !== "paint_lasso_fill") return;
    const B = i.interaction.stroke, pe = (M = B == null ? void 0 : B.geometry) == null ? void 0 : M.points;
    let W;
    if (i.mode === "frame") {
      const re = m(), te = T(re);
      W = _(pe, re, te);
    } else
      W = y(pe);
    if (!Array.isArray(W) || W.length < 3) return;
    const se = String((B == null ? void 0 : B.layerKind) || "") === "mask", K = (B == null ? void 0 : B.color) || { r: 1, g: 0.25, b: 0.25 }, q = Math.round(Number(K.r || 0) * 255), U = Math.round(Number(K.g || 0) * 255), N = Math.round(Number(K.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(W[0].x || 0), Number(W[0].y || 0));
    for (let re = 1; re < W.length; re++) n.lineTo(Number(W[re].x || 0), Number(W[re].y || 0));
    n.closePath(), se ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${q},${U},${N},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function ke() {
    const B = i.frameRollOverlayVisual, pe = Oe(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(B != null && B.shot) || pe <= 1e-4) return;
    const W = T(B.shot);
    if (!W) return;
    const se = { x: W.x + W.w * 0.5, y: W.y + W.h * 0.5 }, K = Number(B.shot.roll_deg ?? B.shot.rot_deg ?? 0) * Nr, q = Math.hypot(W.w, W.h) * 0.55, U = Math.cos(K) * q, N = Math.sin(K) * q;
    n.save(), n.globalAlpha *= pe, n.beginPath(), n.rect(W.x, W.y, W.w, W.h), n.clip(), n.translate(se.x, se.y), n.rotate(K);
    const Q = Math.max(12, Math.min(W.w, W.h) / 6);
    n.beginPath();
    for (let M = -q; M <= q; M += Q)
      n.moveTo(M, -q), n.lineTo(M, q);
    for (let M = -q; M <= q; M += Q)
      n.moveTo(-q, M), n.lineTo(q, M);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(se.x - U, se.y - N), n.lineTo(se.x + U, se.y + N), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function ce() {
    return !l || !m() || t && ve() || c && !ye() ? 0 : l2;
  }
  function xe() {
    const B = Oe(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (B <= 1e-4 || !l || i.mode !== "pano") return;
    const pe = m(), W = pe ? C(pe) : null, se = Array.isArray(W == null ? void 0 : W.corners) && W.corners.length >= 4 ? W.corners.map((U) => ({ x: Number(U.x || 0), y: Number(U.y || 0) })) : null;
    W != null && W.visible && se && (i.cutoutPanoDimCorners = se), pe && (W != null && W.visible) && se && (i.cutoutPanoFrameVisual = {
      item: pe,
      geom: W,
      selected: we(pe),
      locked: ue(pe)
    });
    const K = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, q = W != null && W.visible ? se : K ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${B})`, n.beginPath(), n.rect(0, 0, r.width, r.height), q.length >= 4) {
      n.moveTo(q[0].x, q[0].y);
      for (let U = 1; U < 4; U += 1) n.lineTo(q[U].x, q[U].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(B) {
      ({
        areAllSelectedItemsLocked: u,
        contentSphere: f,
        deviceRect: p,
        drawEditorViewShot: w,
        editorViewInput: h,
        getActiveCutoutShot: m,
        getCutoutSelectableItemsForDisplay: b,
        getFrameViewLayout: V,
        getFrameViewRect: T,
        getList: ee,
        getMultiSelectionGeom: I,
        getSelectedItems: X,
        getStickerDisplayAlpha: $,
        getUnwrapRect: J,
        isCameraSelected: ye,
        isErpCamera: _e,
        isExternalSticker: me,
        isFreeSpaceView: ve,
        isItemLocked: ue,
        isItemSelected: we,
        isRasterObjectItem: de,
        isSceneSticker: ne,
        isShotItem: ie,
        isStickerItem: le,
        isStrokeGroupItem: z,
        objectGeom: C,
        poseOf: R,
        projectDir: E,
        projectDirUnwrap: k,
        projectErpLassoPointsToFrameRect: _,
        projectLassoPointsToCurrentView: y,
        rebuildPaintEngineIfNeeded: L,
        rectFromPoints: Z,
        renderEditorView: he,
        renderEditorViewUnwrap: ge,
        sampleStickerEdge: P,
        sceneStickerShown: ae,
        spaceViewState: g
      } = B);
    },
    drawGridUnwrap: S,
    drawGridPano: v,
    drawObjects: G,
    drawFrameViewBackground: Y,
    drawLassoOutlineOverlay: Se,
    drawFrameRollOverlay: ke,
    getCutoutPanoDimTarget: ce,
    drawCutoutPanoPassepartout: xe
  };
}
function BA(e) {
  const {
    app: t,
    backgroundCanvas: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: s,
    readOnly: a,
    runtime: l,
    scheduler: c,
    shotEditor: d,
    stageWrap: u,
    state: f,
    timeline: p,
    type: w,
    uiState: h,
    viewController: m
  } = e;
  let b, V, T, ee, I, X, $, J, ye, _e, me, ve, ue, we, de, ne, ie, le, z, C, R, E, k, _, y, L, Z, he = () => {
  };
  function ge(ce = /* @__PURE__ */ new Set()) {
    _e();
    const xe = l.backgroundDirty;
    d && (z(), V(xe, ce)), i.mode === "frame" ? (l.frameSafeRect = ne(), I(xe)) : i.mode === "unwrap" ? $(xe) : X(xe), T(), ye(), k(), J(), ee(), h.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && L(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), d && h.cameraPreview && (h.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const B = we();
    h.stageStatus = B.status, h.stageStatusDetail = B.detail, h.stageNotice = Z(), B.status === sr ? (u == null || u.removeAttribute("data-stage-ready"), u == null || u.setAttribute("data-stage-loading-kind", B.detail)) : (u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind"));
  }
  function P(ce = i.interaction) {
    if (w !== "stickers" || i.mode !== "pano") return !1;
    const xe = String((ce == null ? void 0 : ce.kind) || "");
    return xe === "move" || xe === "scale" || xe === "scale_x" || xe === "scale_y" || xe === "rotate" ? !0 : xe === "move_multi" ? Array.isArray(ce == null ? void 0 : ce.stickerSnapshots) && ce.stickerSnapshots.length > 0 : !1;
  }
  function ae() {
    return !!i.interaction || !!p.drag;
  }
  function g() {
    l.nodePreviewPending = !1;
    const ce = Gn(s);
    ce.liveState = f, ce.liveStateVersion += 1, ue();
  }
  function S(ce = {}) {
    var U, N, Q, M, re, te, be, Ne;
    const xe = ce.reason ?? pt.STATE, B = !!ce.localOnly, pe = ce.externalSync === !0, W = String(ce.cause || ""), se = String(((U = i.interaction) == null ? void 0 : U.kind) || "");
    (!B || se === "view" || se === "pan_frame" || P() || !!i.viewTransition || W === "mode" || W === "frame_view" || W === "cutout_frame") && (l.backgroundDirty = !0), B && de() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!B || W === "selection" || W === "mode" || W === "cutout_frame") && (_(), y()), ae() ? l.nodePreviewPending = !0 : g(), pe && ((Q = (N = bt(s).dom) == null ? void 0 : N.requestDraw) == null || Q.call(N), (M = s.setDirtyCanvas) == null || M.call(s, !0, !1)), pe && !B && ((te = (re = s.graph) == null ? void 0 : re.setDirtyCanvas) == null || te.call(re, !0, !0), (Ne = (be = t == null ? void 0 : t.canvas) == null ? void 0 : be.setDirty) == null || Ne.call(be, !0, !0)), c.requestDraw(xe);
  }
  function O() {
    const ce = n.getBoundingClientRect(), xe = Math.max(2, Math.round(ce.width)), B = Math.max(2, Math.round(ce.height)), pe = window.devicePixelRatio || 1, W = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== xe || n.height !== B) && (n.width = xe, n.height = B);
    const se = o_(ce.width || xe, ce.height || B, pe, window.innerWidth || ce.width, window.innerHeight || ce.height);
    return o.resize(se.width, se.height), [n.width, n.height, r.width, r.height].join("x") === W ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && v(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function v(ce) {
    ce(), c.wake();
  }
  function j() {
    return !!i.viewTransition || ie.held || !!m.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || ae();
  }
  function H(ce = performance.now(), xe = /* @__PURE__ */ new Set()) {
    var K;
    l.nodePreviewPending && !ae() && g(), xe.forEach((q) => l.reasons.add(q)), xe.size && (l.dirty = !0), [...xe].some((q) => q !== pt.OVERLAY) && (l.backgroundDirty = !0), R(), l.lastTickTs > 0 ? Math.max(1e-3, (ce - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = ce;
    const B = i.mode === "frame" && ((K = i.interaction) == null ? void 0 : K.kind) === "roll_frame" ? i.interaction : null;
    B != null && B.shot && (i.frameRollOverlayVisual = { shot: B.shot });
    const pe = B ? 1 : 0;
    if (Math.abs(pe - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = pe, i.frameRollOverlayStartTs = ce), Math.abs(Number(i.frameRollOverlayAlpha || 0) - pe) > 1e-6) {
      const q = Oe(
        (ce - Number(i.frameRollOverlayStartTs || ce)) / c2,
        0,
        1
      );
      i.frameRollOverlayAlpha = Yn(
        Number(i.frameRollOverlayFrom || 0),
        pe,
        $c(q)
      ), q >= 1 && (i.frameRollOverlayAlpha = pe, pe === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const W = ve();
    if (Math.abs(W - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = W, i.cutoutPanoDimStartTs = ce), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - W) > 1e-6) {
      const q = Oe(
        (ce - Number(i.cutoutPanoDimStartTs || ce)) / Rp,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Yn(
        Number(i.cutoutPanoDimFrom || 0),
        W,
        $c(q)
      ), q >= 1 && (i.cutoutPanoDimAlpha = W), q >= 1 && W === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const se = d && me() ? 1 : 0;
    if (Math.abs(se - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = se, i.cutoutPanoFrameStartTs = ce), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - se) > 1e-6) {
      const q = Oe(
        (ce - Number(i.cutoutPanoFrameStartTs || ce)) / Rp,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Yn(
        Number(i.cutoutPanoFrameFrom || 0),
        se,
        $c(q)
      ), q >= 1 && (i.cutoutPanoFrameAlpha = se, se === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const q = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), U = Oe((ce - Number(i.outputPreviewAnimStartTs || 0)) / q, 0, 1), Q = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? f2(U) : h2(U);
      i.outputPreviewAnim = Yn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, Q), l.dirty = !0, U >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: q, done: U } = VA(i.viewTransition, ce);
      if (i.viewPosition = q.position, i.viewYaw = q.yaw_deg, i.viewPitch = q.pitch_deg, i.viewFov = q.hFOV_deg, i.viewDistance = q.distance, U) {
        const { end: N } = i.viewTransition;
        i.viewTransition = null, N && b(N), E();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (C(ce) && (l.backgroundDirty = !0, l.dirty = !0), i.viewInertia.vx = Number(m.state.inertia.vx || 0), i.viewInertia.vy = Number(m.state.inertia.vy || 0), i.viewInertia.active = !!m.state.inertia.active, m.stepInertia(ce) && (i.viewInertia.vx = Number(m.state.inertia.vx || 0), i.viewInertia.vy = Number(m.state.inertia.vy || 0), i.viewInertia.active = !!m.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const q = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), ge(q);
    }
  }
  function D(ce) {
    try {
      ce();
    } catch (xe) {
      const B = String((xe == null ? void 0 : xe.stack) || (xe == null ? void 0 : xe.message) || xe || "unknown editor frame error");
      l.tickErrorSignature !== B && (l.tickErrorSignature = B, console.error("[PanoramaStickers] editor frame failed", xe)), h.stageStatus = Xn, h.stageStatusDetail = "frame", u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind");
    }
  }
  function A(ce = performance.now(), xe = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const B = wv();
    D(() => H(ce, xe)), xv(B);
  }
  function F() {
    !l.running || !O() || D(() => {
      l.dirty = !1, ge(/* @__PURE__ */ new Set([pt.RESIZE]));
    });
  }
  const x = new ResizeObserver(F);
  let G = null;
  function Y() {
    G == null || G.removeEventListener("change", fe), G = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), G.addEventListener("change", fe);
  }
  function fe() {
    Y(), F();
  }
  function Se() {
    he = _v("editor", () => {
      var ce;
      return {
        type: w,
        readOnly: a,
        mode: i.mode,
        interaction: ((ce = i.interaction) == null ? void 0 : ce.kind) ?? null,
        timelineDrag: !!p.drag,
        playing: !!le.playing
      };
    });
  }
  function ke() {
    he(), l.running = !1, c.stop(), x.disconnect(), G.removeEventListener("change", fe);
  }
  return {
    connect(ce) {
      ({
        applyViewTransitionEnd: b,
        drawCutoutOutputPreview: V,
        drawCutoutPanoPassepartout: T,
        drawFrameRollOverlay: ee,
        drawFrameViewBackground: I,
        drawGridPano: X,
        drawGridUnwrap: $,
        drawLassoOutlineOverlay: J,
        drawObjects: ye,
        endEditorViewFrame: _e,
        getActiveCutoutShot: me,
        getCutoutPanoDimTarget: ve,
        getSharedLivePaintSurface: ue,
        getStageImageStatus: we,
        isPaintCompositeInteraction: de,
        measureFrameSafeRect: ne,
        moveKeys: ie,
        playback: le,
        rebuildPaintEngineIfNeeded: z,
        stepKeyMove: C,
        syncCutoutShot: R,
        syncFloatingViewButtonState: E,
        syncFrameRollKnob: k,
        syncLookAtFrameButtonState: _,
        syncViewToggleState: y,
        updateSelectionMenu: L,
        upstreamNotice: Z
      } = ce);
    },
    requestDraw: S,
    syncCanvasSize: O,
    startAnimation: v,
    editorAnimating: j,
    tick: A,
    stageResizeObserver: x,
    watchPixelRatio: Y,
    sampleEditorDiagnostics: Se,
    stopRenderLoop: ke
  };
}
function YA(e) {
  const {
    cameraV2: t,
    editor: r,
    hideSidebar: n,
    paintColorPop: i,
    paintColorRow: o,
    paintColorSvCursor: s,
    paintHueHandle: a,
    previewMode: l,
    readOnly: c,
    runtime: d,
    sceneV2: u,
    shotEditor: f,
    state: p,
    studio: w,
    type: h,
    uiState: m
  } = e;
  let b, V, T, ee, I, X, $, J, ye, _e, me, ve, ue, we, de, ne, ie, le, z, C, R, E, k, _, y, L, Z, he, ge, P, ae, g, S, O = 0;
  function v() {
    m.toolButtons.forEach((ce) => {
      const xe = ce.attr === "data-tool-mode", B = ce.attr === "data-paint-tool", pe = ce.attr === "data-mask-tool";
      ce.active = xe ? ce.value === r.primaryTool : B ? ce.key === r.paintTool : pe ? ce.key === r.maskTool : !1, ce.pressed = ce.active ? "true" : ce.pressed == null ? null : "false";
    });
  }
  function j() {
    if (w && no(m.toolButtons, "value", "add-camera", { disabled: ue() }), h !== "cutout") return;
    const ce = T();
    no(m.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: ce ? "Look At Frame" : "Add Frame",
      tip: ce ? "Look at frame" : "Add frame",
      icon: ce ? Ke.camera : Ke.plus_circle
    });
  }
  function H() {
    const ce = aA({
      spaceView: E(),
      spaceMode: xl(r.spaceMode, r.viewTransition),
      readOnly: c,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    m.space && Object.assign(m.space, ce.space);
    for (const [xe, B] of Object.entries(ce.buttons)) no(m.floatingButtons, "action", xe, B);
  }
  function D() {
    var B;
    const ce = L0({ hasShot: !!T(), erp: ne(), hidden: ue() && !V(), studio: w });
    r.mode === "frame" && ce.disabled && (w ? _(T()) : r.mode = "pano"), r.outputPreviewRect = null, m.viewButtons.forEach((pe) => {
      const W = pe.key === r.mode;
      pe.pressed = W ? "true" : "false", pe.visible = !(pe.key === "frame" && !f), pe.key === "frame" ? Object.assign(pe, ce) : pe.disabled = !1;
    });
    const xe = f && r.mode === "frame" ? T() : null;
    m.frameRail.visible = !!xe, m.frameRail.disabled = c || (xe == null ? void 0 : xe.locked) === !0, m.frameRollKnob.visible = !!xe && !c && xe.locked !== !0, m.frameRollKnob.disabled = c || (xe == null ? void 0 : xe.locked) === !0, m.frameRollKnob.rollDeg = Number((xe == null ? void 0 : xe.roll_deg) ?? (xe == null ? void 0 : xe.rot_deg) ?? 0), m.frameRollKnob.displayValue = po(m.frameRollKnob.rollDeg), m.frameRollKnob.dragging = ((B = r.interaction) == null ? void 0 : B.kind) === "roll_frame", m.frameRollKnob.armed = !!xe && r.altModifier === !0, m.frameRail.rollKnob = m.frameRollKnob, m.frameRail.aspectLabel = xe ? Vr(xe) : "", m.frameRail.aspectChoices = R0(xe ? String(Vr(xe)) : null, { erp: w, coverage: p.coverage }), xe || (m.frameRail.aspectOpen = !1), m.outputPreviewToggle.visible = h === "cutout" && r.mode !== "frame" && !!T(), f && m.cameraPreview && (m.cameraPreview.visible = r.mode !== "frame" && b(), m.cameraPreview.expanded = !!r.outputPreviewExpanded, m.cameraPreview.settled = m.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), H(), z() ? g(r.pointerPos) : he(r.mode === "pano" ? "grab" : "default");
  }
  function A() {
    var xe;
    const ce = r.mode === "frame" ? T() : null;
    m.frameRollKnob.visible = !!ce && !c && ce.locked !== !0, m.frameRollKnob.rollDeg = Number((ce == null ? void 0 : ce.roll_deg) ?? (ce == null ? void 0 : ce.rot_deg) ?? 0), m.frameRollKnob.displayValue = po(m.frameRollKnob.rollDeg), m.frameRollKnob.dragging = ((xe = r.interaction) == null ? void 0 : xe.kind) === "roll_frame", m.frameRollKnob.armed = !!ce && r.altModifier === !0;
  }
  function F() {
    v();
    const ce = rA({
      editor: r,
      swatches: Xl,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: Sr,
      colorsApproximatelyEqual: _l,
      rgb01ToHsv: Lu,
      hsv01ToRgb: Du,
      getBrushPresetIdForTool: ee,
      isActiveLassoTool: de
    });
    if (Object.assign(m.paintDock, ce), ae(), !ce.visible) {
      i && (i.hidden = !0);
      return;
    }
    O && (clearTimeout(O), O = 0), o && (!ce.colorEnabled && i && !i.hidden && (O = window.setTimeout(() => {
      i.hidden = !0, m.paintDock.colorPopOpen = !1, O = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", ce.pickerHueColor), i.style.setProperty("--picker-sat", ce.pickerSat), i.style.setProperty("--picker-val", ce.pickerVal), i.style.setProperty("--picker-hue", ce.pickerHue)), s && (s.style.left = ce.pickerSvLeft, s.style.top = ce.pickerSvTop), a && (a.style.left = ce.pickerHueLeft));
  }
  function x() {
    const ce = L(f && r.mode === "frame" ? T() : J());
    ce && (r.panelLastValues = {
      yaw_deg: Number(ce.yaw_deg || 0),
      pitch_deg: Number(ce.pitch_deg || 0),
      hFOV_deg: Number(ce.hFOV_deg || (h === "stickers" ? 30 : 90)),
      vFOV_deg: Number(ce.vFOV_deg || (h === "stickers" ? 30 : 60)),
      rot_deg: Number(ce.rot_deg || 0),
      roll_deg: Number(ce.roll_deg || 0),
      aspect_id: Vr(ce)
    }, G());
  }
  function G() {
    ge(), P(), fe();
  }
  function Y() {
    const ce = f && r.mode === "frame" ? T() : null;
    return [...ye(), Z(), ce].some((xe) => C(xe) ? il(xe) : R(xe) && ue() && il(p.camera));
  }
  function fe() {
    if (n) return;
    p.ui_settings = p.ui_settings || {};
    const ce = nA(p.ui_settings);
    if (l) {
      m.sidePanel = iA({
        coverage: p.coverage,
        uiSettings: ce,
        normalizeCoverageValue: Rn
      });
      return;
    }
    const xe = J(), B = f && r.mode === "frame" ? T() : null, pe = B || xe, W = B ? [B] : ye(), se = B ? "shot" : _e();
    if (W.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), pe && se !== "stroke") {
      const Ve = L(pe);
      r.panelLastValues = {
        yaw_deg: Number(Ve.yaw_deg || 0),
        pitch_deg: Number(Ve.pitch_deg || 0),
        hFOV_deg: Number(Ve.hFOV_deg || (se === "image" ? 30 : 90)),
        vFOV_deg: Number(Ve.vFOV_deg || (se === "image" ? 30 : 60)),
        rot_deg: Number(Ve.rot_deg || 0),
        roll_deg: Number(Ve.roll_deg || 0),
        aspect_id: Vr(Ve)
      }, C(pe) && (r.panelLastValues.opacity = Wr(pe, r.frame).opacity * 100);
    }
    const K = r.panelLastValues || (h === "stickers" || se === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), q = se === "stroke" ? null : pe, U = Z(), N = t && (se === "shot" || se === "frame") && we(), Q = U ? vS(U, r.frame) : N ? { ...q, ...gS(p.camera, r.frame), vFOV_deg: q.vFOV_deg } : C(q) ? r.panelLastValues : q || K, M = U ? S(U) : !!q && !le(q);
    r.panelWasEnabled = M, j();
    let re = null;
    if (B) {
      const Ve = ve({ item: B, kind: "shot", label: "Frame" });
      re = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: Ve.label,
        currentIcon: Ve.icon || null,
        items: [{
          id: String(B.id || ""),
          label: Ve.label,
          icon: Ve.icon || null,
          active: !0
        }]
      };
    } else if (h === "stickers" || h === "cutout") {
      const Ve = [{
        id: "",
        label: h === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (h === "stickers") {
        const Ce = T();
        Ce && Ve.push({ id: Ce.id, label: "Camera", icon: me("frame"), item: Ce, kind: "frame" }), $().forEach((ze, oe) => {
          var je, He;
          if (!ze || C(ze) && !ze.visible) return;
          const Ie = u ? Se(ze) : ie(ze) ? String(ze.id || Xd) : String(((He = (je = p.assets) == null ? void 0 : je[ze.asset_id]) == null ? void 0 : He.name) || ze.asset_id || ze.id), Ae = `${oe + 1}. ${Ie}${ie(ze) && k(ze) ? " (hidden)" : ""}`, Fe = ve({ item: ze, label: Ae, kind: "image" });
          Ve.push({ id: ze.id, label: Fe.label, icon: Fe.icon, item: ze, kind: "image" });
        });
      } else
        I().forEach((Ce) => {
          if (!(Ce != null && Ce.item)) return;
          const ze = ve(Ce);
          Ve.push({ id: Ce.item.id, label: ze.label, icon: ze.icon, item: Ce.item, kind: Ce.kind });
        });
      const We = (q == null ? void 0 : q.id) || "", Ge = U ? { label: Se(U), icon: Ke.globe } : Ve.find((Ce) => Ce.id === We) || Ve[0];
      re = {
        label: "Selection",
        open: !1,
        disabled: Ve.length <= 1,
        currentLabel: Ge.label,
        currentIcon: Ge.icon || null,
        items: Ve.map((Ce) => ({
          id: Ce.id,
          label: Ce.label,
          icon: Ce.icon || null,
          active: Ce.id === We
        }))
      };
    }
    const te = [], be = (Ve, We, Ge, Ce, ze) => {
      const oe = Oe(Number(Q[Ve] || 0), Ge, Ce);
      te.push({
        key: Ve,
        label: We,
        min: Ge,
        max: Ce,
        step: ze,
        value: oe,
        displayValue: po(oe),
        fillPct: Oe((oe - Ge) / Math.max(1e-6, Ce - Ge) * 100, 0, 100),
        enabled: M && !c
      });
    }, Ne = [];
    if (U) {
      for (const [Ve, We] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Ge = Gc(Q[Ve]);
        be(Ve, We, -Ge, Ge, 0.01);
      }
      be("yaw_deg", "Yaw", -180, 180, 0.1), be("pitch_deg", "Pitch", -90, 90, 0.1), be("roll_deg", "Roll", -180, 180, 0.1), be("scale", "Scale", x0, Gc(Q.scale), 0.01), be("opacity", "Opacity", 0, 100, 1);
    } else if (W.length > 1)
      Ne.push(`Selected objects: ${W.length}`), Ne.push("Multi-selection supports z-order and delete.");
    else {
      const Ve = se === "shot" || se === "frame";
      if (N)
        for (const [We, Ge] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Ce = Gc(Q[We]);
          be(We, Ge, -Ce, Ce, 0.01);
        }
      be("yaw_deg", "Yaw", -180, 180, 0.1), be("pitch_deg", "Pitch", -90, 90, 0.1), be(se === "image" || h === "stickers" && !Ve ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), be("hFOV_deg", "H FOV", 1, 179, 0.1), be("vFOV_deg", "V FOV", 1, 179, 0.1), Ve && te.forEach((We) => {
        We.enabled = We.enabled && lA(We.key, { erp: ne() });
      }), C(q) && !Ve && te.forEach((We) => {
        We.enabled = We.enabled && cA(We.key, { port: ie(q) });
      }), u && !Ve && be("opacity", "Opacity", 0, 100, 1);
    }
    const Ee = W.length > 1 ? null : U || q;
    m.sidePanel = hA({
      coverage: p.coverage,
      readOnly: c,
      selectionPicker: re,
      enabled: M,
      selectedKind: U ? "world" : se,
      selectedItems: W,
      params: te,
      notes: Ne,
      uiSettings: ce,
      normalizeCoverageValue: Rn,
      // An upstream element's port Sticker is not the node's own, whose Pose handoff this is.
      handoff: !Ee || Xt(Ee) ? null : fA(y(Ee), { enabled: M && !c }),
      // Every Sticker of Panorama Studio has the rows, so selecting an upstream one does not move the panel.
      upstream: w && Ee && (Ee === U || C(Ee)) ? pA({
        layer: Xt(Ee) ? Ee.origin.layer : null,
        editable: Xt(Ee) && wl(Ee),
        visible: Ee.visible,
        locked: Ee.locked === !0,
        readOnly: c
      }) : null
    });
  }
  function Se(ce) {
    const xe = Km(ce);
    return Xt(ce) ? `${Qd(ce.origin.layer)} · ${xe}` : xe;
  }
  function ke() {
    const { canUndo: ce, canRedo: xe } = X();
    no(m.toolButtons, "value", "undo", { disabled: !ce }), no(m.toolButtons, "value", "redo", { disabled: !xe });
  }
  return {
    connect(ce) {
      ({
        cameraPreviewShown: b,
        cameraShoots: V,
        getActiveCutoutShot: T,
        getBrushPresetIdForTool: ee,
        getCutoutInspectorItems: I,
        getHistoryCapabilities: X,
        getList: $,
        getSelected: J,
        getSelectedItems: ye,
        getSelectedKind: _e,
        getSelectionItemIcon: me,
        getSelectionItemLabelData: ve,
        hasCamera: ue,
        hasSpaceContent: we,
        isActiveLassoTool: de,
        isErpCamera: ne,
        isExternalSticker: ie,
        isItemLocked: le,
        isPaintCursorEnabled: z,
        isSceneSticker: C,
        isShotItem: R,
        isSpaceView: E,
        isStickerHidden: k,
        leaveFrameView: _,
        portHandoffLanes: y,
        poseOf: L,
        selectedWorldSticker: Z,
        setCanvasCursor: he,
        syncCutoutShot: ge,
        syncTimeline: P,
        syncVideoTransportVisibility: ae,
        updateCursor: g,
        worldStickerEditable: S
      } = ce);
    },
    syncLookAtFrameButtonState: j,
    syncFloatingViewButtonState: H,
    syncViewToggleState: D,
    syncFrameRollKnob: A,
    syncPaintUi: F,
    syncSidePanelControls: x,
    updateSidePanel: G,
    inspectorTimed: Y,
    syncSidePanelModel: fe,
    syncUndoRedoButtons: ke
  };
}
function qA(e) {
  const {
    editor: t,
    node: r,
    readOnly: n,
    sceneV2: i,
    state: o,
    stateV2: s,
    studio: a,
    timeline: l,
    timelinePlayhead: c,
    uiState: d,
    videoEl: u,
    videoTimelineFps: f
  } = e;
  let p, w, h, m, b, V, T, ee, I, X, $, J, ye, _e, me, ve, ue, we, de, ne, ie, le;
  function z() {
    if (!s || n) return;
    const D = R(), A = l.selection, F = A && E(A.owner);
    if (A) {
      const x = F ? _(A) : [];
      A.frames = A.frames.filter((G) => x.some((Y) => F[Y].keyframes.some((fe) => fe.frame === G))), A.frames.length || (l.selection = null);
    }
    d.timeline = SA(o, {
      span: D,
      selection: l.selection,
      selectedId: t.worldSelectedId || t.selectedId,
      expanded: l.expanded ?? C(),
      openRows: l.openRows,
      audio: ge() && d.videoTransport.hasAudio ? { muted: u.muted } : null,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: f(r) !== null || yg(r, ["bg_media", "sticker"]),
      // Panorama Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: h(),
      cameraHideable: a,
      // Another Studio's Scene on `scene` is upstream: its own `scene` is not drawn (#90), and its elements have
      // rows of their own below (ADR 0030).
      scene: i && !!Bl(r).scene && !we(),
      upstream: ie()
    }), d.easing = l.selection && Z(l.selection.owner) ? _A(F, _(l.selection), l.selection.frames, y(l.selection.owner)) : null;
  }
  function C() {
    return Dm(o, { camera: a });
  }
  function R(D = null) {
    const A = o.timeline.fps, F = o.stickers.find(b), x = F ? w() : null, G = Math.max(
      d.videoTransport.ready && !ue() ? Math.round(Number(d.videoTransport.duration || 0) * A) : 0,
      x ? Ed(F.clip, A, x.meta) : 0,
      ne(D)
    ), Y = Lm(o, { minimum: Math.round(A * 5), frames: G, openClip: D, camera: a });
    return Math.max(Y, Rm(le(), D));
  }
  function E(D) {
    if (D === "camera") return h() ? o.camera : null;
    if (D === "scene") return i ? o.scene : null;
    const A = de(D);
    return A ? A.owner : ye(D);
  }
  function k(D) {
    var A;
    return ((A = de(D)) == null ? void 0 : A.editable) ?? !0;
  }
  function _(D) {
    return D.lane ? [D.lane] : No(E(D.owner));
  }
  function y(D) {
    var F;
    if (D === "camera") return 0;
    const A = (F = E(D)) == null ? void 0 : F.clip;
    return A ? A.start - A.in : 0;
  }
  function L(D) {
    return `${ko(D, t.frame)}:${D.start - D.in}`;
  }
  function Z(D) {
    var F;
    const A = E(D);
    return !!A && A.locked !== !0 && k(D) && ((F = de(D)) == null ? void 0 : F.part) !== "scene";
  }
  function he(D) {
    const A = Math.max(0, Math.round(D));
    if (A === t.frame) return;
    J(), t.frame = A, c.frame.value = A, J();
    const F = [t.selectedId, t.worldSelectedId];
    X(), V(), F[0] !== t.selectedId || F[1] !== t.worldSelectedId ? ve() : m() && _e(), me(), $({ reason: pt.PLAYHEAD });
  }
  function ge() {
    return u instanceof HTMLVideoElement && !!u.getAttribute("src");
  }
  function P(D) {
    I(), T.seek(D);
  }
  function ae() {
    s && T.stop();
  }
  function g() {
    I(), T.toggle();
  }
  function S() {
    J(), V(), ve(), me(), $();
  }
  function O() {
    ee(), p(), S();
  }
  function v() {
    const { selection: D } = l;
    Z(D.owner) && (ae(), H1(E(D.owner), _(D), D.frames, t.frame - y(D.owner)), l.selection = null, O());
  }
  function j(D) {
    const A = fi(D);
    if (A === null || A === o.timeline.fps) return;
    ae();
    const F = Math.round(t.frame * A / o.timeline.fps);
    uS(o, A), l.selection = null, T.seek(F), O();
  }
  function H() {
    const D = f(r);
    D !== null && D !== o.timeline.fps && j(D);
  }
  return {
    connect(D) {
      ({
        commitAndRefreshNode: p,
        getPortMedia: w,
        hasCamera: h,
        inspectorTimed: m,
        isExternalSticker: b,
        markObjectVisualsDirty: V,
        playback: T,
        pushHistory: ee,
        refreshModalVideoSource: I,
        releaseHiddenSelection: X,
        requestDraw: $,
        syncCutoutShot: J,
        stickerById: ye,
        syncSidePanelModel: _e,
        updateSelectionMenu: me,
        updateSidePanel: ve,
        upstreamBackground: ue,
        upstreamLinked: we,
        upstreamRow: de,
        upstreamSpanFrames: ne,
        upstreamTimelineLayers: ie,
        upstreamTimelineOwners: le
      } = D);
    },
    syncTimeline: z,
    timelineTimed: C,
    timelineSpanFrames: R,
    timelineOwner: E,
    selectedLanes: _,
    timelineOffset: y,
    clipView: L,
    timelineEditable: Z,
    rowEditable: k,
    setTimelineFrame: he,
    jumpTimelineTo: P,
    stopTimelinePlayback: ae,
    togglePlayback: g,
    refreshTimelineEdit: S,
    commitTimelineEdit: O,
    deleteSelectedKeyframes: v,
    changeTimelineFps: j,
    applyVideoTimelineFps: H
  };
}
function XA(e) {
  const {
    dragFrames: t,
    editor: r,
    readOnly: n,
    state: i,
    stateV2: o,
    timeline: s,
    uiState: a
  } = e;
  let l, c, d, u, f, p, w, h, m, b, V, T, ee, I, X, $, J, ye, _e, me, ve, ue, we, de, ne, ie, le, z, C, R;
  function E(k) {
    if (!(n || !o)) {
      if (k.type === "seek") {
        if (k.phase === "move") {
          s.scrubFrame = k.frame, t.request("seek");
          return;
        }
        t.cancel(), k.phase === "start" && m(), h.seek(k.frame);
        return;
      }
      if (k.type === "play") {
        ie();
        return;
      }
      if (k.type === "mute") {
        le(), me();
        return;
      }
      if (k.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? ne()), s.selection = null, me();
        return;
      }
      if (k.type === "toggle-row") {
        s.openRows.has(k.id) ? s.openRows.delete(k.id) : s.openRows.add(k.id), me();
        return;
      }
      if (k.type === "toggle-visible") {
        if (!ee(k.id)) return;
        const _ = R(k.id);
        if (k.id === $0) i.painting_visible = !i.painting_visible;
        else if ((_ == null ? void 0 : _.part) === "painting") _.sceneState.painting_visible = !_.sceneState.painting_visible;
        else {
          const y = we(k.id);
          if (!y) return;
          y.visible = !y.visible;
        }
        V(), u();
        return;
      }
      if (k.type === "select-row") {
        const _ = J(k.id);
        if (_ && !_.visible || k.id === "camera" && !l()) return;
        _ && !ko(_.clip, r.frame) && w(_.clip.start), (_ == null ? void 0 : _.placement) === "world" ? I(_.id) : k.id === "camera" ? $(f()) : $(p().find((y) => y.id === k.id) || null), _e(), s.selection = null, C(), z(), T();
        return;
      }
      if (k.type === "select-keys") {
        const _ = ue(k.owner), y = k.frames.map((he) => he - _), L = s.selection, Z = (L == null ? void 0 : L.owner) === k.owner && L.lane === k.lane;
        if (k.additive && Z) {
          const he = new Set(L.frames);
          for (const ge of y)
            he.has(ge) ? he.delete(ge) : he.add(ge);
          L.frames = [...he].sort((ge, P) => ge - P);
        } else
          s.selection = y.length ? { owner: k.owner, lane: k.lane, frames: y } : null;
        me();
        return;
      }
      if (k.type === "move-keys") {
        const _ = s.selection;
        if (!_ || !ve(_.owner)) return;
        const y = we(_.owner), L = X(_);
        if (k.phase === "start") {
          ye(), s.drag = { keyframes: L.map((ge) => structuredClone(y[ge].keyframes)), frames: _.frames };
          return;
        }
        const { drag: Z } = s;
        if (!(Z != null && Z.keyframes)) return;
        L.forEach((ge, P) => {
          y[ge].keyframes = structuredClone(Z.keyframes[P]);
        });
        const he = G1(y, L, Z.frames, k.delta, -ue(_.owner));
        if (_.frames = Z.frames.map((ge) => ge + he), k.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, he ? u() : b();
        return;
      }
      if (k.type === "clip") {
        const _ = we(k.id);
        if (!(_ != null && _.clip) || _.locked || !ee(k.id)) return;
        if (k.phase === "start") {
          ye(), s.drag = { clip: { ..._.clip }, span: de(_.clip) };
          return;
        }
        const { drag: y } = s;
        if (!(y != null && y.clip)) return;
        const L = y.clip, Z = d(_.clip);
        if (_.clip = { ...L }, k.delta && k.mode === "move" ? U1(_.clip, k.delta) : k.delta && k.mode === "start" ? B1(_.clip, L.start + k.delta) : k.delta && Y1(_.clip, (L.duration === null ? y.span : L.start + L.duration) + k.delta, y.span), k.phase !== "end") {
          t.request("timeline"), d(_.clip) !== Z && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, V(), JSON.stringify(_.clip) !== JSON.stringify(L) ? u() : b();
        return;
      }
      if (k.type === "key-row") {
        if (k.owner === "scene" || !ve(k.owner)) return;
        ye(), $1(we(k.owner), r.frame - ue(k.owner)), u();
        return;
      }
      if (k.type === "fps") {
        const _ = J1(k.fps);
        if (_ === null || _ === i.timeline.fps || a.timeline.fpsLocked) {
          me();
          return;
        }
        c(_);
        return;
      }
      if (k.type === "length") {
        const _ = Z1(k.length);
        if (_ === void 0 || _ === i.timeline.length) {
          me();
          return;
        }
        ye(), i.timeline.length = _, u();
        return;
      }
      if (k.type === "easing") {
        const _ = s.selection;
        if (!_ || !ve(_.owner)) return;
        ye(), W1(we(_.owner), X(_), _.frames, k.easing), k.commit ? u() : b();
      }
    }
  }
  return {
    connect(k) {
      ({
        cameraShoots: l,
        changeTimelineFps: c,
        clipView: d,
        commitTimelineEdit: u,
        getActiveCutoutShot: f,
        getList: p,
        jumpTimelineTo: w,
        playback: h,
        refreshModalVideoSource: m,
        refreshTimelineEdit: b,
        releaseHiddenSelection: V,
        requestDraw: T,
        rowEditable: ee,
        selectWorldSticker: I,
        selectedLanes: X,
        setSelectedItem: $,
        stickerById: J,
        stopTimelinePlayback: ye,
        syncFloatingViewButtonState: _e,
        syncTimeline: me,
        timelineEditable: ve,
        timelineOffset: ue,
        timelineOwner: we,
        timelineSpanFrames: de,
        timelineTimed: ne,
        togglePlayback: ie,
        toggleVideoMuted: le,
        updateSelectionMenu: z,
        updateSidePanel: C,
        upstreamRow: R
      } = k);
    },
    onTimelineAction: E
  };
}
function JA(e) {
  const {
    app: t,
    bgWidget: r,
    cameraV2: n,
    coverageWidget: i,
    node: o,
    presetWidget: s,
    readOnly: a,
    state: l,
    stateWidget: c
  } = e;
  let d, u, f, p, w, h, m;
  function b() {
    a || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", s && (l.output_preset = u(Number(l.output_preset || 2048))), i && (l.coverage = Rn(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), V(), o.setDirtyCanvas(!0, !0));
  }
  function V() {
    var ye;
    if (a || (p(), h(), m(), l.coverage = Rn(l.coverage), Um(o, l.active), !c)) return;
    const $ = f(), J = Bm(o, $, String(c.value ?? ""), { rebased: n });
    J !== null && ($ !== l && (l.id = $.id), c.value = J, (ye = c.callback) == null || ye.call(c, J));
  }
  function T() {
    l.ui_settings = M2(l.ui_settings), a || V();
  }
  function ee() {
    var $;
    a || (V(), ($ = o.setDirtyCanvas) == null || $.call(o, !0, !0));
  }
  function I() {
    a || d() && w().catch(($) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", $);
    });
  }
  function X($ = {}) {
    var _e, me, ve, ue, we, de, ne, ie, le, z, C;
    const J = $.syncPreview !== !1, ye = $.syncGraph !== !1;
    J && ((ve = (me = (_e = Ng(o)) == null ? void 0 : _e.runtime) == null ? void 0 : me.requestDraw) == null || ve.call(me), (de = (we = (ue = Mg(o)) == null ? void 0 : ue.dom) == null ? void 0 : we.requestDraw) == null || de.call(we), (ne = o.setDirtyCanvas) == null || ne.call(o, !0, !1)), ye && ((le = (ie = o.graph) == null ? void 0 : ie.setDirtyCanvas) == null || le.call(ie, !0, !0), (C = (z = t == null ? void 0 : t.canvas) == null ? void 0 : z.setDirty) == null || C.call(z, !0, !0));
  }
  return {
    connect($) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: u,
        storedEditorState: f,
        syncCutoutShot: p,
        syncPaintingLayerAsync: w,
        syncPortHandoff: h,
        syncUpstreamEdits: m
      } = $);
    },
    apply: b,
    commitState: V,
    persistUiSettings: T,
    commitAndRefreshNode: ee,
    triggerBackgroundPersistenceOnClose: I,
    syncCoverageChangeToNodePreviews: X
  };
}
function ZA(e) {
  const {
    editor: t,
    readOnly: r,
    sceneV2: n,
    state: i,
    studio: o,
    type: s,
    uiState: a
  } = e;
  let l, c, d, u, f, p, w, h, m, b, V, T, ee, I, X, $, J, ye, _e, me, ve, ue, we, de, ne, ie, le, z, C, R, E, k, _, y, L;
  function Z(O, v, j = "Clear") {
    return new Promise((H) => {
      a.confirmDialog = {
        visible: !0,
        title: String(O || ""),
        text: String(v || ""),
        confirmLabel: String(j || "Confirm"),
        resolve: H
      };
    });
  }
  async function he() {
    var j, H;
    if (r || !await Z(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    i.painting = xo(null), de();
    const v = d();
    if (s === "stickers")
      i.stickers = n ? i.stickers.filter((D) => D.placement === "world" || v.includes(D)) : v, n || (i.assets = {}), t.selectedId = ((j = v[0]) == null ? void 0 : j.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = ((H = v[0]) == null ? void 0 : H.id) || null, ie();
    else {
      const D = sS(i.shots, i.active.selected_shot_id);
      i.stickers = v, i.assets = {}, i.shots = D.shots, t.selectedId = D.selectedShotId, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = null, i.active.selected_shot_id = D.selectedShotId, !D.selectedShotId && t.mode === "frame" && (t.mode = "pano"), t.cutoutAspectOpen = !1, ie();
    }
    le(), u(), y(), _(), z();
  }
  async function ge(O) {
    var A, F, x, G;
    if (r) return;
    const v = O === "mask" ? "mask" : "paint", j = v === "mask" ? "Mask" : "Paint", H = b(v);
    if (!(!H.length && !(((A = t.interaction) == null ? void 0 : A.kind) === "draw" && ((F = t.interaction) == null ? void 0 : F.layerKind) === v) || !await Z(
      `Clear ${j}`,
      `This will remove all ${v} strokes in the current node.`,
      `Clear ${j}`
    ))) {
      if (((x = t.interaction) == null ? void 0 : x.kind) === "draw" && ((G = t.interaction) == null ? void 0 : G.layerKind) === v) {
        const Y = p(t.interaction);
        Y && t.paintEngine.cancelActiveStroke(Y), t.interaction = null;
      }
      H.length = 0, i.painting.raster_objects = V().filter((Y) => String((Y == null ? void 0 : Y.layerKind) || "paint") !== v), v === "paint" && (m().length = 0), de(), le(), u(), y(), _(), k(), z();
    }
  }
  function P() {
    if (r) return;
    const O = T();
    if (!O || !_e(O) || I(O) || Xt(O) || n && ve(O)) return;
    let v;
    n ? v = kS(O, Wl(i), h()) : (v = JSON.parse(JSON.stringify(O)), v.id = Xo("st"), v.yaw_deg = Gt((v.yaw_deg || 0) + 8), v.z_index = h()), i.stickers.push(v), i.active.selected_sticker_id = v.id, t.selectedId = v.id, t.selectedIds = [v.id], ue(), le(), u(), _(), y(), z();
  }
  function ae() {
    const O = C();
    return O ? (!L(O) || Xt(O) || (R(), wS(i, O.id), c(), ue(), le(), u(), y(), _(), E(), z()), !0) : !1;
  }
  function g() {
    var j, H, D, A, F;
    if (r) return;
    const O = ee(), v = T();
    if (!(!v && O.length === 0) && !O.some(Xt) && !O.some((x) => X(x))) {
      if (R(), O.length > 1) {
        const x = new Set(O.filter((fe) => me(fe)).map((fe) => String(fe.actionGroupId || fe.id || ""))), G = new Set(O.filter((fe) => $(fe)).map((fe) => ne(fe.rasterObjectId || fe.id || ""))), Y = new Set(O.filter(_e).map((fe) => String(fe.id || "")));
        x.size > 0 && (i.painting.paint.strokes = (Array.isArray((H = (j = i.painting) == null ? void 0 : j.paint) == null ? void 0 : H.strokes) ? i.painting.paint.strokes : []).filter((fe) => !x.has(String((fe == null ? void 0 : fe.actionGroupId) || ""))), i.painting.groups = m().filter((fe) => !x.has(String((fe == null ? void 0 : fe.actionGroupId) || (fe == null ? void 0 : fe.id) || ""))), de()), G.size > 0 && (i.painting.raster_objects = V().filter((fe) => !G.has(String((fe == null ? void 0 : fe.id) || ""))), we()), Y.size > 0 && (i.stickers = (Array.isArray(i.stickers) ? i.stickers : []).filter((fe) => Y.has(String((fe == null ? void 0 : fe.id) || "")) ? I(fe) ? (ye(fe) || (fe.visible = !1), !0) : !1 : !0), ie(), ue()), t.selectedId = null, t.selectedIds = [], le(), u(), y(), _(), z();
        return;
      }
      if (me(v)) {
        const x = String(v.actionGroupId || v.id || "").trim();
        i.painting.paint.strokes = (Array.isArray((A = (D = i.painting) == null ? void 0 : D.paint) == null ? void 0 : A.strokes) ? i.painting.paint.strokes : []).filter((G) => String((G == null ? void 0 : G.actionGroupId) || "").trim() !== x), i.painting.groups = m().filter((G) => String((G == null ? void 0 : G.actionGroupId) || (G == null ? void 0 : G.id) || "").trim() !== x), de(), t.selectedId = null, t.selectedIds = [], le(), u(), y(), _(), z();
        return;
      }
      if ($(v)) {
        const x = ne(v.rasterObjectId || v.id || "");
        i.painting.raster_objects = V().filter((G) => String((G == null ? void 0 : G.id) || "").trim() !== x), we(), t.selectedId = null, t.selectedIds = [], le(), u(), y(), _(), z();
        return;
      }
      if (o && J(v)) {
        f();
        return;
      }
      if (s === "stickers" || _e(v)) {
        if (I(v)) {
          if (ye(v)) return;
          v.visible = !1, ue(), le(), u(), y(), _(), z();
          return;
        }
        i.stickers = i.stickers.filter((x) => x.id !== v.id), ie(), ue(), t.selectedId = ((F = w()[0]) == null ? void 0 : F.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = t.selectedId, le(), u(), y(), _(), z();
        return;
      }
      l();
    }
  }
  function S() {
    t.primaryTool !== "cursor" && (t.primaryTool = "cursor", k(), y());
  }
  return {
    connect(O) {
      ({
        clearCutoutFrame: l,
        clearWorldSelection: c,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: u,
        deleteStudioCamera: f,
        getActivePaintTargetDescriptor: p,
        getList: w,
        getNextStickerZIndex: h,
        getPaintingGroupList: m,
        getPaintingLayerList: b,
        getRasterObjectList: V,
        getSelected: T,
        getSelectedItems: ee,
        isExternalSticker: I,
        isItemLocked: X,
        isRasterObjectItem: $,
        isShotItem: J,
        isStickerHidden: ye,
        isStickerItem: _e,
        isStrokeGroupItem: me,
        isUploadingSticker: ve,
        markObjectVisualsDirty: ue,
        markPaintCompositeVisualsDirty: we,
        markPaintStrokeVisualsDirty: de,
        parseRasterObjectSelectionId: ne,
        pruneUnusedAssets: ie,
        pushHistory: le,
        requestDraw: z,
        selectedWorldSticker: C,
        stopTimelinePlayback: R,
        syncFloatingViewButtonState: E,
        syncPaintUi: k,
        updateSelectionMenu: _,
        updateSidePanel: y,
        worldStickerEditable: L
      } = O);
    },
    clearAll: he,
    clearPaintingLayer: ge,
    duplicateSelected: P,
    deleteSelectedWorldSticker: ae,
    deleteSelected: g,
    forceCursorTool: S
  };
}
function QA(e) {
  const {
    api: t,
    canvas: r,
    dragCue: n,
    editor: i,
    editorView: o,
    imageCache: s,
    node: a,
    readOnly: l,
    sceneV2: c,
    stageWrap: d,
    state: u,
    type: f,
    vueModal: p
  } = e;
  let w, h, m, b, V, T, ee, I, X, $, J, ye, _e, me, ve, ue, we, de, ne, ie, le;
  function z(A) {
    return Kd(A == null ? void 0 : A.dataTransfer);
  }
  function C(A) {
    const F = !!A;
    n.active !== F && (n.active = F, d.classList.toggle("drop-active", F));
  }
  function R() {
    const A = new Set(
      (u.stickers || []).map((F) => String((F == null ? void 0 : F.asset_id) || "")).filter((F) => !!F)
    );
    Object.keys(u.assets || {}).forEach((F) => {
      A.has(F) || (delete u.assets[F], s.delete(F));
    });
  }
  async function E(A) {
    if (l || f !== "stickers" && f !== "cutout" || !ar(A)) return;
    if (c) {
      ne(), await Z(A);
      return;
    }
    const F = Xo("asset"), x = Uo(a, `add:${F}`, async () => {
      try {
        const { image: G } = await Bo(A);
        s.set(F, G);
        const Y = Xo("st");
        u.stickers.push({
          id: Y,
          asset_id: F,
          yaw_deg: i.viewYaw,
          pitch_deg: i.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: m(30, Number(G.naturalWidth || G.width || 1), Number(G.naturalHeight || G.height || 1)),
          rot_deg: 0,
          z_index: ee()
        }), ue(u.stickers[u.stickers.length - 1]), T(), le(), ie(), me();
        const fe = await Mi(A, {
          fetchApi: (ce, xe) => t.fetchApi(ce, xe)
        });
        if (!(Array.isArray(u.stickers) ? u.stickers : []).filter((ce) => String((ce == null ? void 0 : ce.asset_id) || "") === F).length) return;
        u.assets[F] = fe, R(), _e(), h(), le(), ie(), me();
      } catch (G) {
        delete u.assets[F], s.delete(F);
        const Y = Array.isArray(u.stickers) ? u.stickers : [], fe = Y.filter((Se) => String((Se == null ? void 0 : Se.asset_id) || "") === F);
        throw fe.length && (u.stickers = Y.filter((Se) => String((Se == null ? void 0 : Se.asset_id) || "") !== F), fe.some((Se) => String((Se == null ? void 0 : Se.id) || "") === String(i.selectedId || "")) && ue(null), le(), ie(), me(), h()), G;
      }
    });
    try {
      await x;
    } catch {
    }
  }
  function k() {
    var A;
    l || f !== "stickers" && f !== "cutout" || (A = p == null ? void 0 : p.openImagePicker) == null || A.call(p, "add");
  }
  function _() {
    var A;
    l || !c || (A = p == null ? void 0 : p.openImagePicker) == null || A.call(p, "add-world");
  }
  async function y(A) {
    l || !c || !ar(A) || (ne(), await Z(A, "world"));
  }
  function L() {
    const A = { x: r.width / 2, y: r.height / 2 }, F = $() ? o.pick(V(), A.x, A.y, r.width, r.height) : null;
    return YS(we(), F, b());
  }
  async function Z(A, F = "sky") {
    const x = Wl(u), G = Uo(a, `add:${x}`, async () => {
      const { image: Y } = await Bo(A), fe = {
        yaw_deg: i.viewYaw,
        pitch_deg: i.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: m(30, Number(Y.naturalWidth || Y.width || 1), Number(Y.naturalHeight || Y.height || 1)),
        rot_deg: 0
      }, Se = { kind: "file", filename: "" }, ke = F === "world" ? xS(x, Se, L()) : Sd(x, Se, fe, ee());
      s.set(de(ke), Y), u.stickers.push(ke), F === "world" ? ve(x) : ue(ke), T(), le(), ie(), me();
      try {
        const ce = await Mi(A, {
          fetchApi: (B, pe) => t.fetchApi(B, pe)
        }), xe = u.stickers.find((B) => B.id === x);
        if (!xe) return;
        xe.source = Pa(ce), s.set(de(xe), Y), _e(), h();
      } catch (ce) {
        throw u.stickers = u.stickers.filter((xe) => xe.id !== x), i.selectedId === x && ue(null), i.worldSelectedId === x && w(), _e(), h(), ce;
      } finally {
        le(), ie(), me();
      }
    });
    try {
      await G;
    } catch {
    }
  }
  async function he(A, F) {
    const x = Uo(a, `replace:${F}:${Xo("asset")}`, async () => {
      const { image: G } = await Bo(A), Y = await Mi(A, {
        fetchApi: (Se, ke) => t.fetchApi(Se, ke)
      }), fe = u.stickers.find((Se) => Se.id === F);
      if (fe) {
        fe.source = Pa(Y), fe.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const Se of [fe.size.value, ...fe.size.keyframes.map((ke) => ke.value)])
          Se.vFOV_deg = m(Se.hFOV_deg, Number(G.naturalWidth || G.width || 1), Number(G.naturalHeight || G.height || 1));
        s.set(de(fe), G), ye(), _e(), h(), le(), ie(), me();
      }
    });
    try {
      await x;
    } catch {
    }
  }
  async function ge(A) {
    if (l || f !== "stickers" && f !== "cutout") return;
    const F = I();
    if (!F || !J(F) || X(F) || Xt(F) || !ar(A)) return;
    if (c) {
      await he(A, F.id);
      return;
    }
    const x = String(F.id || ""), G = Xo("asset"), Y = Uo(a, `replace:${x}:${G}`, async () => {
      var B;
      const fe = (Array.isArray(u.stickers) ? u.stickers : []).find((pe) => String((pe == null ? void 0 : pe.id) || "") === x) || null;
      if (!fe || !J(fe) || X(fe)) return;
      const Se = String(fe.asset_id || ""), ke = Se ? dn(((B = u.assets) == null ? void 0 : B[Se]) || null) : null, ce = Number(fe.vFOV_deg || 0), xe = fe.crop && typeof fe.crop == "object" ? { ...fe.crop } : null;
      try {
        const { image: pe } = await Bo(A);
        s.set(G, pe), fe.asset_id = G, fe.vFOV_deg = m(
          Number(fe.hFOV_deg || 30),
          Number(pe.naturalWidth || pe.width || 1),
          Number(pe.naturalHeight || pe.height || 1)
        ), fe.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, ye(), le(), ie(), me();
        const W = await Mi(A, {
          fetchApi: (K, q) => t.fetchApi(K, q)
        }), se = (Array.isArray(u.stickers) ? u.stickers : []).find((K) => String((K == null ? void 0 : K.id) || "") === x) || null;
        if (!se || String(se.asset_id || "") !== G) return;
        u.assets[G] = W, R(), _e(), h(), le(), ie(), me();
      } catch (pe) {
        delete u.assets[G], s.delete(G);
        const W = (Array.isArray(u.stickers) ? u.stickers : []).find((se) => String((se == null ? void 0 : se.id) || "") === x) || null;
        throw W && String(W.asset_id || "") === G && (Se && ke && (u.assets[Se] = ke), W.asset_id = Se, W.vFOV_deg = ce, W.crop = xe ? { ...xe } : null), ye(), h(), le(), ie(), me(), pe;
      }
    });
    try {
      await Y;
    } catch {
    }
  }
  function P() {
    var F;
    if (l) return;
    const A = I();
    !A || !J(A) || X(A) || Xt(A) || (F = p == null ? void 0 : p.openImagePicker) == null || F.call(p, "replace");
  }
  async function ae() {
    if (l || f !== "stickers") return;
    if (c) {
      await g();
      return;
    }
    const A = u.assets && typeof u.assets == "object" ? u.assets : {}, F = Object.entries(A).filter(([, G]) => {
      const Y = String((G == null ? void 0 : G.type) || "").toLowerCase(), fe = String((G == null ? void 0 : G.value) || "");
      return Y === "dataurl" && fe.startsWith("data:image");
    });
    if (!F.length) return;
    let x = !1;
    for (const [G, Y] of F)
      try {
        const fe = String((Y == null ? void 0 : Y.value) || "");
        if (!fe) continue;
        const Se = await fetch(fe).then((pe) => pe.blob()), ke = String(Se.type || "image/png").split("/")[1] || "png", ce = String((Y == null ? void 0 : Y.name) || `${G}.${ke}`), xe = new File([Se], ce, { type: Se.type || "image/png" }), B = await Mi(xe, {
          fetchApi: (pe, W) => t.fetchApi(pe, W)
        });
        u.assets[G] = {
          ...B,
          w: Number((Y == null ? void 0 : Y.w) || 0),
          h: Number((Y == null ? void 0 : Y.h) || 0)
        }, x = !0;
      } catch {
      }
    x && (h(), me());
  }
  async function g() {
    let A = !1;
    for (const F of u.stickers) {
      const x = F.source.data_url;
      if (x)
        try {
          const G = await fetch(x).then((ke) => ke.blob()), Y = String(G.type || "image/png").split("/")[1] || "png", fe = new File([G], `${F.id}.${Y}`, { type: G.type || "image/png" }), Se = await Mi(fe, {
            fetchApi: (ke, ce) => t.fetchApi(ke, ce)
          });
          F.source = Pa(Se), A = !0;
        } catch {
        }
    }
    A && (h(), me());
  }
  function S(A) {
    f !== "stickers" && f !== "cutout" || l || (A.preventDefault(), C(!0));
  }
  function O(A) {
    var G;
    if (f !== "stickers" && f !== "cutout" || l) return;
    A.preventDefault(), A.stopPropagation(), n.depth = 0, C(!1);
    const x = Array.from(((G = A.dataTransfer) == null ? void 0 : G.files) || []).find((Y) => ar(Y));
    x && E(x);
  }
  function v(A) {
    f !== "stickers" && f !== "cutout" || l || z(A) && (n.depth += 1, C(!0), A.preventDefault());
  }
  function j(A) {
    f !== "stickers" && f !== "cutout" || l || (!n.active && z(A) && C(!0), n.active && A.preventDefault());
  }
  function H(A) {
    if (f !== "stickers" && f !== "cutout" || l || !n.active) return;
    n.depth = Math.max(0, n.depth - 1);
    const F = Number(A.clientX) <= 0 && Number(A.clientY) <= 0;
    (n.depth === 0 || F) && C(!1);
  }
  function D(A) {
    f !== "stickers" && f !== "cutout" || l || (n.depth = 0, C(!1), z(A) && A.preventDefault());
  }
  return {
    connect(A) {
      ({
        clearWorldSelection: w,
        commitAndRefreshNode: h,
        computeStickerVFov: m,
        contentSphere: b,
        currentSpaceCamera: V,
        forceCursorTool: T,
        getNextStickerZIndex: ee,
        getSelected: I,
        isExternalSticker: X,
        isSpaceView: $,
        isStickerItem: J,
        markObjectVisualsDirty: ye,
        pushHistory: _e,
        requestDraw: me,
        selectWorldSticker: ve,
        setSelectedItem: ue,
        spaceViewState: we,
        stickerImageKey: de,
        stopTimelinePlayback: ne,
        updateSelectionMenu: ie,
        updateSidePanel: le
      } = A);
    },
    addImageStickerFromFile: E,
    addImageSticker: k,
    addWorldImageSticker: _,
    addWorldStickerFromFile: y,
    replaceSelectedImageFromFile: ge,
    replaceSelectedImage: P,
    migrateLegacyEmbeddedAssets: ae,
    pruneUnusedAssets: R,
    setDropCue: C,
    onCanvasDragOver: S,
    onCanvasDrop: O,
    onWindowDragEnter: v,
    onWindowDragOver: j,
    onWindowDragLeave: H,
    onWindowDrop: D
  };
}
function eC(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    frameRollKnobEl: i,
    initialShotBase: o,
    readOnly: s,
    runtime: a,
    shotEditor: l,
    stageWrap: c,
    state: d,
    studio: u,
    tooltip: f,
    type: p,
    uiState: w
  } = e;
  let h, m, b, V, T, ee, I, X, $, J, ye, _e, me, ve, ue, we, de, ne, ie, le, z, C, R, E, k, _, y, L, Z, he, ge = o;
  function P(W, se) {
    var U;
    const K = (U = I().space) == null ? void 0 : U.gizmo;
    if (me() && K && he("hover", se) !== null && he("down", se))
      return n.interaction = { kind: "world_gizmo", camera: !0, mode: K.mode, start: K.transform, base: ee(), changed: !1 }, r.setPointerCapture(W.pointerId), y(se), !0;
    const q = ig(ee(), m(le()));
    return n_(T(), q, se, r.width, r.height) ? (me() || (ie(G()), Z(), L(), de()), n.interaction = { kind: "world_select" }, r.setPointerCapture(W.pointerId), !0) : !1;
  }
  function ae() {
    if (s || p !== "cutout") return;
    const W = G();
    if (W) {
      ie(W), n.mode = "pano", _(Gt(Number(W.yaw_deg || 0)), Oe(Number(W.pitch_deg || 0), -89.9, 89.9)), Z(), L(), de({ cause: "cutout_frame" });
      return;
    }
    const se = lm({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Gt(Number(n.viewYaw || 0)),
      pitchDeg: Number(n.viewPitch || 0),
      viewFovDeg: Number(n.viewFov || 90)
    });
    d.shots = [se], ie(se), X(), n.mode = "pano", we(), V(), Z(), L(), de({ cause: "cutout_frame" });
  }
  function g() {
    s || !u || J() || (C(), d.camera = pS(z()), F(), ie(G()), X(), we(), V(), Z(), L(), de({ cause: "cutout_frame" }));
  }
  function S() {
    C(), d.camera = null, ie(null), F(), we(), V(), Z(), L(), de({ cause: "cutout_frame" });
  }
  function O(W, se) {
    u && ve(W) && (d.camera.projection = se === So ? "erp" : "perspective", se === So) || H(W, se);
  }
  function v() {
    s || p !== "cutout" || (d.shots = [], n.selectedId = null, n.selectedIds = [], n.mode === "frame" && (n.mode = "pano"), n.cutoutAspectOpen = !1, d.active.selected_shot_id = null, we(), V(), Z(), L(), de());
  }
  function j(W, se) {
    const K = a.frameSafeRect;
    if (!W || !K || n.mode !== "frame") return !1;
    const q = Tu * Di(K, W), U = ud(cd(K, se), q);
    return W.hFOV_deg = U.hFOV_deg, W.vFOV_deg = U.vFOV_deg, !0;
  }
  function H(W, se) {
    if (!W || W.locked === !0) return;
    const K = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, q = (() => {
      const M = String(W.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(M)) {
        const [be, Ne] = M.split(":").map((Ee) => Number(Ee));
        if (Number.isFinite(be) && Number.isFinite(Ne)) return be >= Ne;
      }
      const re = Number(W.hFOV_deg || 64), te = Number(W.vFOV_deg || 40);
      return Math.abs(re - te) > 1e-6 ? re >= te : Vi(W) >= 1;
    })();
    let [U, N] = K[String(se)] || K["1:1"];
    U >= N !== q && ([U, N] = [N, U]);
    const Q = U / N;
    if (!j(W, Q)) {
      const M = Oe(Number(W.vFOV_deg || 40), 1, 179);
      W.vFOV_deg = M, W.hFOV_deg = ka(M, Q);
    }
    W.aspect_id = `${U}:${N}`;
  }
  function D(W, se, K) {
    if (!W || W.locked === !0) return !1;
    const q = ws(se, K);
    if (!q) return !1;
    const U = q.ratio;
    if (!j(W, U)) {
      const N = Oe(Number(W.vFOV_deg || 40), 1, 179);
      W.vFOV_deg = N, W.hFOV_deg = ka(N, U);
    }
    return W.aspect_id = q.label, !0;
  }
  function A(W) {
    if (!W || W.locked === !0) return;
    const se = String(W.aspect_id || "").trim(), K = ui(W), q = K.tanHalfX / Math.max(1e-12, K.tanHalfY), U = 1 / Math.max(1e-12, q);
    if (!j(W, U)) {
      const N = Oe(Number(W.vFOV_deg || 60), 1, 179);
      W.vFOV_deg = N, W.hFOV_deg = ka(N, U);
    }
    if (/^\d+:\d+$/.test(se)) {
      const [N, Q] = se.split(":");
      W.aspect_id = `${Q}:${N}`;
    } else
      W.aspect_id = Ei(W);
  }
  function F(W = !0) {
    var q, U;
    if (!t) return;
    const se = ge;
    if (!b()) {
      ge = null, (q = d.shots) != null && q.length && (d.shots = []), se && x(se, null);
      return;
    }
    const K = (U = d.shots) == null ? void 0 : U[0];
    W && K && ge && mS(d.camera, n.frame, K, ge), ge = Gm(d.camera, n.frame), K ? Object.assign(K, ge, { position: [...ge.position] }) : d.shots = [{ ...ge, position: [...ge.position] }], se || x(null, ge);
  }
  function x(W, se) {
    var N, Q;
    !se && n.mode === "frame" && ue(W);
    const K = (se == null ? void 0 : se.position) ?? [0, 0, 0];
    if (((Q = (N = n.viewTransition) == null ? void 0 : N.end) == null ? void 0 : Q.mode) === "3dof") {
      k({ ...z(), position: K }, n.viewTransition.end);
      return;
    }
    if (n.mode !== "pano" || n.spaceMode !== "3dof" || !ye()) return;
    const q = (W == null ? void 0 : W.position) ?? [0, 0, 0];
    if (q.every((M, re) => M === K[re])) return;
    const U = { ...z(), position: q };
    h({ mode: "6dof", position: q, moved: !0 }), n.viewDistance = U.distance, k({ ...U, position: K }, { mode: "3dof", moved: !1 });
  }
  function G() {
    if (!l) return null;
    const W = Array.isArray(d.shots) ? d.shots : [];
    if (!W.length) return null;
    const se = String(d.active.selected_shot_id || "");
    return W.find((K) => String((K == null ? void 0 : K.id) || "") === se) || W[0] || null;
  }
  function Y(W, se, K = {}) {
    var N;
    if ((W == null ? void 0 : W.kind) !== "roll_frame" || !W.shot) return;
    W.accumulatedRad += om(se, W.lastAngle), W.lastAngle = se;
    const q = sm(W.start.roll_deg, W.accumulatedRad, {
      shiftKey: K.shiftKey,
      altKey: W.altStarted ? !1 : K.altKey
    });
    W.shot.roll_deg = q, W.changed = W.changed || Math.abs(W.accumulatedRad) > 1e-9;
    const U = (((N = w.sidePanel) == null ? void 0 : N.params) || []).find((Q) => Q.key === "roll_deg");
    U && (U.value = q, U.displayValue = po(q), U.fillPct = (q + 180) / 360 * 100), R(), ke(W), de({ localOnly: !0 });
  }
  function fe(W, se, K = {}) {
    var N;
    if ((W == null ? void 0 : W.kind) !== "roll_frame" || !W.shot || !W.rollGesture) return;
    const q = Bg(W.rollGesture, se, K);
    if (!q) return;
    W.rollGesture = q.gesture, W.center = q.gesture.center, W.lastAngle = q.gesture.lastAngle, W.accumulatedRad = q.gesture.accumulatedRad, W.shot.roll_deg = q.rollDeg, W.changed = W.changed || Math.abs(q.gesture.accumulatedRad) > 1e-9;
    const U = (((N = w.sidePanel) == null ? void 0 : N.params) || []).find((Q) => Q.key === "roll_deg");
    U && (U.value = q.rollDeg, U.displayValue = po(q.rollDeg), U.fillPct = (q.rollDeg + 180) / 360 * 100), R(), ke(W), de({ localOnly: !0 });
  }
  function Se(W, se) {
    const K = ne(W);
    return Math.atan2(K.y - se.y, K.x - se.x);
  }
  function ke(W) {
    var Q, M;
    if ((W == null ? void 0 : W.kind) !== "roll_frame" || !W.shot) return;
    f.timer && (clearTimeout(f.timer), f.timer = 0), f.target = null;
    const se = $(W.shot), K = (Q = r.getBoundingClientRect) == null ? void 0 : Q.call(r), q = (M = c.getBoundingClientRect) == null ? void 0 : M.call(c);
    if (!se || !K || !q || r.width <= 0 || r.height <= 0) return;
    const U = K.width / r.width, N = K.height / r.height;
    w.tooltip.text = `${po(W.shot.roll_deg)}°`, w.tooltip.left = K.left - q.left + (se.x + se.w * 0.5) * U, w.tooltip.top = K.top - q.top + (se.y + se.h * 0.5) * N + 12, w.tooltip.variant = "roll", w.tooltip.visible = !0;
  }
  function ce(W) {
    var N;
    if (W.button !== 0 || s || n.mode !== "frame") return;
    const se = G();
    if (!se || se.locked === !0) return;
    const K = $(se);
    if (!K) return;
    const q = { x: K.x + K.w * 0.5, y: K.y + K.h * 0.5 }, U = Se(W, q);
    n.interaction = {
      kind: "roll_frame",
      shot: se,
      center: q,
      lastAngle: U,
      accumulatedRad: 0,
      start: { roll_deg: Number(se.roll_deg ?? se.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (N = i.setPointerCapture) == null || N.call(i, W.pointerId), W.preventDefault(), R(), ke(n.interaction), de({ localOnly: !0 });
  }
  function xe(W) {
    var se;
    ((se = n.interaction) == null ? void 0 : se.kind) !== "roll_frame" || n.interaction.source !== "knob" || Y(
      n.interaction,
      Se(W, n.interaction.center),
      W
    );
  }
  function B() {
    const W = n.interaction;
    (W == null ? void 0 : W.kind) !== "roll_frame" || W.source !== "knob" || (W.changed && (we(), V(), Z()), n.interaction = null, _e(), E(), R(), de());
  }
  function pe(W) {
    const se = n.mode === "frame" && !s ? G() : null;
    !se || se.locked === !0 || Math.abs(Number(se.roll_deg ?? se.rot_deg ?? 0)) <= 1e-9 || (se.roll_deg = 0, we(), V(), Z(), R(), de(), W.preventDefault());
  }
  return {
    connect(W) {
      ({
        applySpaceMode: h,
        cameraFrustumLength: m,
        cameraShoots: b,
        commitAndRefreshNode: V,
        currentSpaceCamera: T,
        cutoutCamera: ee,
        editorViewInput: I,
        forceCursorTool: X,
        getFrameViewRect: $,
        hasCamera: J,
        hasSpaceContent: ye,
        hideTooltip: _e,
        isCameraSelected: me,
        isShotItem: ve,
        leaveFrameView: ue,
        pushHistory: we,
        requestDraw: de,
        screenPos: ne,
        setSelectedItem: ie,
        spaceScale: le,
        spaceViewState: z,
        stopTimelinePlayback: C,
        syncFrameRollKnob: R,
        syncViewToggleState: E,
        transitionView: k,
        turnViewTo: _,
        updateCursor: y,
        updateSelectionMenu: L,
        updateSidePanel: Z,
        worldGizmoPointer: he
      } = W);
    },
    addCutoutFrame: ae,
    addStudioCamera: g,
    deleteStudioCamera: S,
    setShotAspect: O,
    clearCutoutFrame: v,
    applyCutoutAspectCustom: D,
    rotateCutoutAspect90: A,
    syncCutoutShot: F,
    getActiveCutoutShot: G,
    startCameraPress: P,
    applySharedRollInteractionPoint: fe,
    onFrameRollKnobPointerDown: ce,
    onFrameRollKnobPointerMove: xe,
    finishKnobRoll: B,
    onFrameRollKnobDoubleClick: pe
  };
}
function tC(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    editorView: i,
    floatingRightEl: o,
    floatingTopEl: s,
    frameRailEl: a,
    paintDockEl: l,
    readOnly: c,
    runtime: d,
    shotEditor: u,
    toolRailEl: f,
    uiState: p,
    videoTransportEl: w
  } = e;
  let h, m, b, V, T, ee, I, X, $, J, ye, _e, me, ve, ue, we, de, ne = null, ie = !1;
  function le(x) {
    if (n.mode = "pano", !x) return;
    m();
    const G = me().distance;
    n.viewYaw = Gt(x.yaw_deg), n.viewPitch = Oe(x.pitch_deg, -89.9, 89.9), n.viewFov = Oe(x.hFOV_deg, 35, 140), n.spaceMode === "6dof" && h({ mode: "6dof", position: [...x.position], moved: !0 }), n.viewDistance = G, d.backgroundDirty = !0;
  }
  function z() {
    var q, U, N, Q, M;
    if (!r) return null;
    const x = (q = r.getBoundingClientRect) == null ? void 0 : q.call(r), G = Number((x == null ? void 0 : x.width) || 0) > 0 ? r.width / x.width : 1, Y = Number((x == null ? void 0 : x.height) || 0) > 0 ? r.height / x.height : 1;
    d.frameCanvasScale = Math.min(G, Y);
    let fe = 24, Se = 24;
    const ke = Math.max(fe + 1, r.width - 24);
    let ce = Math.max(Se + 1, r.height - 24);
    const xe = (U = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : U.call(f), B = (N = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : N.call(a);
    let pe = 24;
    xe && x && xe.width > 0 && xe.height > 0 && (pe = Math.max(pe, (xe.right - x.left) * G + Lp)), B && x && B.width > 0 && B.height > 0 && ((Q = p.frameRail) == null ? void 0 : Q.visible) === !0 && (pe = Math.max(pe, (x.right - B.left) * G + Lp)), fe = Math.max(fe, pe);
    const W = Math.min(ke, r.width - pe);
    let se = 24;
    const K = (M = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : M.call(s);
    if (K && x && K.width > 0 && K.height > 0 && (se = Math.max(se, (K.bottom - x.top) * Y + Vc)), [l, w].forEach((re) => {
      var Ne;
      if (!re || !x) return;
      const te = getComputedStyle(re);
      if (te.display === "none" || te.visibility === "hidden" || Number(te.opacity) <= 0) return;
      const be = (Ne = re.getBoundingClientRect) == null ? void 0 : Ne.call(re);
      !be || be.width <= 0 || be.height <= 0 || (se = Math.max(se, (x.bottom - be.top) * Y + Vc));
    }), o && x) {
      const re = getComputedStyle(o);
      re.display !== "none" && re.visibility !== "hidden" && Number(re.opacity) > 0 && (se = Math.max(se, (a2 + Vc) * Y));
    }
    return Se = Math.max(Se, se), ce = Math.max(Se + 1, Math.min(ce, r.height - se)), {
      x: fe,
      y: Se,
      w: Math.max(1, W - fe),
      h: Math.max(1, ce - Se)
    };
  }
  function C(x = T()) {
    if (!x || !r) return null;
    const G = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return e1(G, x, Tu * Di(G, x));
  }
  function R(x = T()) {
    const G = C(x);
    return G ? { x: G.x, y: G.y, w: G.w, h: G.h } : null;
  }
  function E() {
    return u && !!T();
  }
  function k(x, G) {
    const Y = T();
    if (!Y || Y.locked === !0) return !1;
    const fe = Number(G) > 0, Se = um(Y, G);
    if (!Se) return !1;
    if (fe) {
      const ke = Tu * Di(
        d.frameSafeRect || { w: r.width, h: r.height },
        Se
      ), ce = dd({ width: r.width, height: r.height }, ke);
      if (ce.halfW < r.width * 0.5 - 1e-6 || ce.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return Y.hFOV_deg = Se.hFOV_deg, Y.vFOV_deg = Se.vFOV_deg, _(), de(), !0;
  }
  function _() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, $(), b(), de());
    }, 180);
  }
  function y() {
    return t && n.mode === "frame" && ee();
  }
  function L() {
    const x = T(), G = C(x);
    return x && G ? ag(x, G, { width: r.width, height: r.height }) : null;
  }
  function Z() {
    var x;
    return ((x = V()) == null ? void 0 : x.radius) || dr;
  }
  function he(x) {
    const { position: G, yaw_deg: Y, pitch_deg: fe, roll_deg: Se, hFOV_deg: ke } = x.shot;
    return { position: G, yaw_deg: Y, pitch_deg: fe, roll_deg: Se, hFOV_deg: ke, distance: Z() };
  }
  function ge(x, G) {
    const { rect: Y } = x;
    return i.pickSurface(ye(x.shot), G.x - Y.x, G.y - Y.y, Y.w, Y.h);
  }
  function P(x, G, Y) {
    return du(G, ge(x, Y), null, _e());
  }
  function ae(x) {
    return JSON.stringify([he(x), x.rect]);
  }
  function g(x) {
    const G = T();
    G.position = [...x.position], G.yaw_deg = x.yaw_deg, G.pitch_deg = x.pitch_deg;
  }
  function S(x, G) {
    const Y = T();
    !Y || c || Y.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: Y,
      last: x,
      start: { yaw_deg: Number(Y.yaw_deg || 0), pitch_deg: Number(Y.pitch_deg || 0) },
      changed: !1
    }, we(x), r.setPointerCapture(G));
  }
  function O(x, G, Y) {
    const fe = L();
    if (!fe || c) return;
    const Se = he(fe);
    n.interaction = x === "orbit" ? { kind: "frame_orbit", last: G, pivot: P(fe, Se, G), changed: !1 } : { kind: "frame_pan", last: G, depth: Ym(Se, _e()), changed: !1 }, we(G), r.setPointerCapture(Y);
  }
  function v(x, G) {
    const Y = L();
    if (!Y) return;
    const fe = he(Y), Se = G.x - x.last.x, ke = G.y - x.last.y;
    g(x.kind === "frame_pan" ? Jm(fe, Se, ke, Y.rect.w, Y.rect.h, x.depth) : Xm(fe, Se, ke, r.height, x.pivot)), x.changed = x.changed || Se !== 0 || ke !== 0, x.last = G, J({ localOnly: !0, cause: "frame_view" });
  }
  function j(x, G) {
    const Y = L();
    if (!Y || c) return;
    const fe = he(Y), Se = performance.now(), ke = { x: x.x, y: x.y, time: Se, key: i.contentRevision(), view: ae(Y) };
    if (!qm(ne, ke)) {
      const ce = ge(Y, x);
      ne = { ...ke, cost: performance.now() - Se, hit: ce };
    }
    g(Zm(fe, du(fe, ne.hit, null, _e()), G, _e())), ne.view = ae(L() ?? Y), ne.wheelTime = Se, _(), de(), J({ localOnly: !0, cause: "frame_view" });
  }
  function H(x, G) {
    const Y = T();
    if (!Y || c || Y.locked === !0) return !1;
    const fe = H0(Y, x, G);
    return fe === Y ? !1 : (ve(), Y.position = fe.position, ie = !0, !0);
  }
  function D() {
    return ie ? (ie = !1, $(), b(), de(), !0) : !1;
  }
  function A() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, $(), b(), de(), !0) : !1;
  }
  function F() {
    const x = n.interaction;
    if (!(x != null && x.shot) || !x.start || x.kind !== "pan_frame" && x.kind !== "roll_frame") return !1;
    const G = x.kind === "roll_frame";
    return x.kind === "pan_frame" ? (x.shot.yaw_deg = x.start.yaw_deg, x.shot.pitch_deg = x.start.pitch_deg) : x.shot.roll_deg = x.start.roll_deg, G && I(), n.interaction = null, X(), ue(), de(), we(n.pointerPos), J({ localOnly: !0 }), !0;
  }
  return {
    connect(x) {
      ({
        applySpaceMode: h,
        cancelViewTransition: m,
        commitAndRefreshNode: b,
        contentSphere: V,
        getActiveCutoutShot: T,
        hasSpaceContent: ee,
        hideTooltip: I,
        invalidateLivePaintPreviewCaches: X,
        pushHistory: $,
        requestDraw: J,
        shotViewCamera: ye,
        spaceScale: _e,
        spaceViewState: me,
        stopTimelinePlayback: ve,
        syncViewToggleState: ue,
        updateCursor: we,
        updateSidePanel: de
      } = x);
    },
    leaveFrameView: le,
    measureFrameSafeRect: z,
    getFrameViewLayout: C,
    getFrameViewRect: R,
    supportsFramePainting: E,
    zoomFrameViewAt: k,
    isFreeFrameView: y,
    frameContext: L,
    frameViewDistance: Z,
    frameSpaceView: he,
    frameTarget: P,
    startPanFrame: S,
    startFrameDrag: O,
    dragFrame: v,
    zoomFrameAt: j,
    flushFrameWheelCommit: A,
    cancelFrameCameraGesture: F,
    moveFrameByKeys: H,
    endFrameKeyMove: D
  };
}
function nC(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let s, a, l, c, d, u, f, p, w, h, m, b, V, T, ee, I, X, $, J = 0;
  function ye() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function _e() {
    return String(ye() || "") === "lasso_fill";
  }
  function me() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function ve(P, ae) {
    const g = Number(ae || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, g / 2048)
    };
  }
  function ue(P) {
    const ae = String(P || "").trim();
    return ae === "eraser" ? Dr : Fn[ae] ? ae : t.activeBrushPresetId || Dr;
  }
  function we() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (me() || $());
  }
  function de() {
    var P;
    return we() && ((P = t.pointerPos) == null ? void 0 : P.inside) === !0;
  }
  function ne(P, ae = !0) {
    const g = Number((P == null ? void 0 : P.x) || 0), S = Number((P == null ? void 0 : P.y) || 0), O = ae !== !1, v = t.pointerPos || { x: 0, y: 0, inside: !1 }, j = v.inside !== O || Math.abs(v.x - g) > 0.01 || Math.abs(v.y - S) > 0.01;
    return t.pointerPos = { x: g, y: S, inside: O }, j;
  }
  function ie() {
    var F, x;
    if (!de()) return null;
    const P = t.primaryTool === "mask" ? "mask" : "paint", ae = P === "mask" ? t.maskTool : t.paintTool, g = ue(ae), S = Fn[g] || Fn[Dr], O = Number(t.brushSizes[g] ?? 10), v = Math.max(1, O) * Math.max(0.1, Number(S.sizeScale ?? 1)), j = Math.max(3, v * 0.5), H = P === "mask" ? ae === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : ae === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : zn(t.paintColor), D = P === "mask" ? ae === "lasso_fill" ? 0.18 : 0.2 : ae === "eraser" ? 0.06 : Oe(Math.max(0.16, Number(H.a ?? 1) * 0.3), 0.16, 0.52), A = P === "mask" ? 0.95 : ae === "eraser" ? 0.75 : Oe(Math.max(0.46, Number(H.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: P,
      toolKind: ae,
      preset: S,
      radius: j,
      fillStyle: Sr(H, D),
      strokeStyle: Sr(H, A),
      x: Number(((F = t.pointerPos) == null ? void 0 : F.x) || 0),
      y: Number(((x = t.pointerPos) == null ? void 0 : x.y) || 0),
      hotspotX: j,
      hotspotY: j
    };
  }
  function le() {
    var G, Y, fe;
    const P = ie();
    if (!r) return;
    if (!P) {
      r.style.display = "none";
      return;
    }
    let ae = P.radius * 2, g = P.radius * 2, S = "999px", O = 0, v = P.fillStyle, j = "1px solid rgba(222, 222, 222, 0.72)", H = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const D = "rgba(222, 222, 222, 0.72)", A = "rgba(52, 52, 52, 0.72)";
    let F = Number(P.hotspotX ?? ae * 0.5), x = Number(P.hotspotY ?? g * 0.5);
    if (P.toolKind === "lasso_fill")
      ae = Sl, g = Sl, S = "0", j = "0", H = "none", F = u2, x = d2, v = y2(P.fillStyle, A, D);
    else if (P.layerKind === "mask")
      v = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (P.toolKind === "marker") {
      const Se = Math.max(1, Number(((G = P.preset) == null ? void 0 : G.aspect) ?? 1));
      ae = Math.max(10, P.radius * 2 * Se), g = Math.max(6, P.radius * 2), S = `${Math.min(6, g * 0.42)}px`, O = Number(((fe = (Y = P.preset) == null ? void 0 : Y.angle) == null ? void 0 : fe.value) || 0) * Li;
    } else P.toolKind === "brush" ? v = `radial-gradient(circle at 50% 50%, ${P.strokeStyle} 0%, ${P.fillStyle} 45%, rgba(0,0,0,0) 100%)` : P.toolKind === "eraser" && (v = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(ae)}px`, r.style.height = `${Math.round(g)}px`, r.style.borderRadius = S, r.style.border = j, r.style.boxShadow = H, r.style.background = v, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(P.x - F)}px, ${Math.round(P.y - x)}px) rotate(${O}deg)`;
  }
  function z() {
    var xe;
    if (!n || !i) return;
    const P = t.primaryTool === "mask" ? "mask" : "paint", ae = P === "mask" ? t.maskTool : t.paintTool;
    if (ae === "lasso_fill") return;
    const g = ue(ae), S = Fn[g] || Fn[Dr], O = Number(t.brushSizes[g] ?? 10), v = Math.max(1, O) * Math.max(0.1, Number(S.sizeScale ?? 1)), j = Math.max(6, v * 0.5), H = ae === "eraser", D = P === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : H ? { r: 1, g: 1, b: 1, a: 0.22 } : zn(t.paintColor), A = P === "mask" ? Sr(D, 0.22) : H ? "rgba(255,255,255,0.14)" : Sr(D, Oe(Math.max(0.18, Number(D.a ?? 1) * 0.34), 0.18, 0.56)), F = P === "mask" ? Sr(D, 0.96) : H ? "rgba(255,255,255,0.72)" : Sr(D, Oe(Math.max(0.56, Number(D.a ?? 1) * 0.96), 0.56, 1));
    let x = j * 2, G = j * 2, Y = "999px", fe = 0, Se = A;
    const ke = "rgba(222, 222, 222, 0.72)", ce = "rgba(52, 52, 52, 0.72)";
    if (P === "mask")
      Se = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (ae === "marker") {
      const B = Math.max(1, Number((S == null ? void 0 : S.aspect) ?? 1));
      x = Math.max(16, j * 2 * B), G = Math.max(10, j * 2), Y = `${Math.min(8, G * 0.42)}px`, fe = Number(((xe = S == null ? void 0 : S.angle) == null ? void 0 : xe.value) || 0) * Li;
    } else ae === "brush" ? Se = `radial-gradient(circle at 50% 50%, ${F} 0%, ${A} 48%, rgba(0,0,0,0) 100%)` : ae === "lasso_fill" ? (x = Math.max(18, j * 1.8), G = x, Se = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${F} 43%, ${F} 58%, rgba(0,0,0,0) 59%)`) : H && (Se = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(x)}px`, i.style.height = `${Math.round(G)}px`, i.style.borderRadius = Y, i.style.background = Se, i.style.border = `1px solid ${ke}`, i.style.boxShadow = `0 0 0 1px ${ce}`, i.style.transform = `rotate(${fe}deg)`, J && (clearTimeout(J), J = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function C() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), J && clearTimeout(J), J = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), J = 0;
    }, 180));
  }
  function R(P, ae, g, S) {
    const O = ue(ae), v = Fn[O] || Fn[Dr], j = t.brushSizes[O] ?? 10, H = Math.max(1, j) * Math.max(0.1, v.sizeScale ?? 1), D = ve(S, H), A = g.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), F = {
      id: io(P),
      actionGroupId: io("ag"),
      targetSpace: S && typeof S == "object" ? { ...S, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: P,
      toolKind: ae,
      size: H,
      createdAt: Date.now(),
      color: P === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: D.radiusModel,
      radiusValue: D.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: A.map((x) => ({ ...x })),
        points: A.map((x) => ({ ...x }))
      }
    };
    return Dp(F, v), t.mode, Number(v.aspect ?? 1), Number(F.aspect ?? 1), String(F.stampKind || ""), Number(F.size || 0), String(F.radiusModel || ""), Number(F.radiusValue || 0), { ...F.targetSpace }, F;
  }
  function E(P, ae, g, S) {
    const O = g.map((D) => ({
      ...D,
      t: Number((D == null ? void 0 : D.t) || 0),
      widthScale: Number.isFinite(Number(D == null ? void 0 : D.widthScale)) ? Math.max(0, Number(D.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(D == null ? void 0 : D.pressureLike)) ? Math.max(0, Number(D.pressureLike)) : 1
    })), v = ue(ae), j = Fn[v] || Fn[Dr], H = {
      id: io(P),
      actionGroupId: io("ag"),
      targetSpace: S && typeof S == "object" ? { ...S, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: P,
      toolKind: ae,
      size: 10,
      createdAt: Date.now(),
      color: P === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: O.map((D) => ({ ...D }))
      }
    };
    return Dp(H, j), t.mode, Number(j.aspect ?? 1), Number(H.aspect ?? 1), String(H.stampKind || ""), { ...H.targetSpace }, H;
  }
  function k(P) {
    const ae = o.painting || (o.painting = xo(null)), g = ae[P] || (ae[P] = { strokes: [] });
    return Array.isArray(g.strokes) || (g.strokes = []), g.strokes;
  }
  function _(P, ae, g = performance.now()) {
    let S;
    if (t.mode === "frame") {
      const A = f();
      if (!A || (S = X(ae, A, g), !S)) return !1;
    } else
      S = I(ae, g);
    if (!S) return !1;
    const O = P.stroke.geometry.rawPoints || P.stroke.geometry.points, v = P.stroke.geometry.points, j = O[O.length - 1];
    if (j) {
      const A = Math.abs(Number(S.u ?? S.x ?? 0) - Number(j.u ?? j.x ?? 0)), F = Math.abs(Number(S.v ?? S.y ?? 0) - Number(j.v ?? j.y ?? 0));
      if (A < 15e-4 && F < 15e-4) return !1;
    }
    const H = {
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    O.push({ ...H }), v.push({ ...H });
    const D = p(P);
    if (D) {
      const A = t.paintEngine.ensureTarget(D);
      t.paintEngine.appendStrokePoint(A, Number(H.u ?? 0), Number(H.v ?? 0), P.stroke);
    }
    return !0;
  }
  function y(P, ae, g = performance.now()) {
    var j, H;
    let S;
    if (t.mode === "frame") {
      const D = f();
      if (!D) return !1;
      S = X(ae, D, g);
    } else
      S = I(ae, g);
    const O = (H = (j = P == null ? void 0 : P.stroke) == null ? void 0 : j.geometry) == null ? void 0 : H.points;
    if (!S || !Array.isArray(O)) return !1;
    const v = O[O.length - 1];
    if (v) {
      const D = Math.abs(Number(S.u ?? S.x ?? 0) - Number(v.u ?? v.x ?? 0)), A = Math.abs(Number(S.v ?? S.y ?? 0) - Number(v.v ?? v.y ?? 0));
      if (D < 15e-4 && A < 15e-4) return !1;
    }
    return O.push({
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function L(P) {
    var B, pe, W, se, K;
    const ae = (P == null ? void 0 : P.stroke) || null;
    if (!ae || (P == null ? void 0 : P.layerKind) !== "paint" || String((ae == null ? void 0 : ae.toolKind) || "") !== "eraser") return !1;
    ee();
    const g = p(), S = c(g.width, g.height);
    if (!T(S, ae, { w: g.width, h: g.height })) return !1;
    const O = ((pe = (B = S.ctx) == null ? void 0 : B.getImageData(0, 0, g.width, g.height)) == null ? void 0 : pe.data) || null;
    if (!O) return !1;
    const v = new Map(h().map((q) => [String((q == null ? void 0 : q.actionGroupId) || (q == null ? void 0 : q.id) || "").trim(), q ? { ...q } : null])), j = [], H = [], D = [...m().filter((q) => String((q == null ? void 0 : q.layerKind) || "paint") !== "paint")];
    let A = !1, F = w().reduce((q, U) => Math.max(q, Number((U == null ? void 0 : U.z_index) || 0)), -1) + 1;
    function x(q, U, N, Q = 8) {
      let M = U, re = N, te = -1, be = -1;
      for (let Ne = 0; Ne < N; Ne += 1)
        for (let Ee = 0; Ee < U; Ee += 1)
          q[(Ne * U + Ee) * 4 + 3] <= Q || (Ee < M && (M = Ee), Ne < re && (re = Ne), Ee > te && (te = Ee), Ne > be && (be = Ne));
      return te < M || be < re ? null : { minX: M, minY: re, maxX: te, maxY: be };
    }
    const G = x(O, g.width, g.height, 8);
    if (!G) return !1;
    function Y(q, U) {
      return !q || !U ? !1 : !(q.maxX < U.minX || U.maxX < q.minX || q.maxY < U.minY || U.maxY < q.minY);
    }
    function fe(q, U) {
      const N = d((q == null ? void 0 : q.actionGroupId) || (q == null ? void 0 : q.id) || "", "paint", U);
      if (!N) return null;
      const Q = N.centerUv.u - N.halfW, M = N.centerUv.u + N.halfW, re = N.centerUv.v - N.halfH, te = N.centerUv.v + N.halfH, be = g.width, Ne = g.height;
      return {
        minX: Math.floor((Q % 1 + 1) % 1 * be),
        maxX: Math.ceil((M % 1 + 1) % 1 * be),
        minY: Math.floor(Oe(re, 0, 1) * Ne),
        maxY: Math.ceil(Oe(te, 0, 1) * Ne),
        wraps: M - Q >= 1 || Q < 0 || M > 1
      };
    }
    function Se(q) {
      const U = (q == null ? void 0 : q.bbox) || null;
      if (!U) return null;
      const N = (q == null ? void 0 : q.transform) || {}, Q = g.width, M = g.height, re = Number(U.u0 || 0) + Number(N.du || 0), te = Number(U.u1 || 0) + Number(N.du || 0), be = Number(U.v0 || 0) + Number(N.dv || 0), Ne = Number(U.v1 || 0) + Number(N.dv || 0);
      return {
        minX: Math.floor((re % 1 + 1) % 1 * Q),
        maxX: Math.ceil((te % 1 + 1) % 1 * Q),
        minY: Math.floor(Oe(be, 0, 1) * M),
        maxY: Math.ceil(Oe(Ne, 0, 1) * M),
        wraps: te - re >= 1 || re < 0 || te > 1
      };
    }
    function ke(q) {
      return q ? q.wraps ? Y(G, { minX: 0, maxX: q.maxX, minY: q.minY, maxY: q.maxY }) || Y(G, { minX: q.minX, maxX: g.width - 1, minY: q.minY, maxY: q.maxY }) : Y(G, q) : !0;
    }
    function ce(q) {
      if (!q) return { touched: !1, canvas: null };
      const U = c(g.width, g.height, { readback: !0 });
      U.ctx.drawImage(q, 0, 0);
      const N = U.ctx.getImageData(0, 0, g.width, g.height);
      U.ctx.save(), U.ctx.globalCompositeOperation = "destination-out", U.ctx.drawImage(S.canvas, 0, 0), U.ctx.restore();
      const Q = U.ctx.getImageData(0, 0, g.width, g.height);
      for (let M = 0; M < g.width * g.height; M += 1) {
        if (O[M * 4 + 3] <= 8) continue;
        const te = N.data[M * 4 + 3], be = Q.data[M * 4 + 3];
        if (te > be)
          return { touched: !0, canvas: U.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function xe(q, U, N) {
      const Q = Number(N == null ? void 0 : N.z_index), M = l(q, U, N).map((re, te) => ({
        ...re,
        z_index: Number.isFinite(Q) ? Q + te * 1e-3 : F + te * 1e-3
      }));
      return M.length && (F = Math.max(F, ...M.map((re) => Number((re == null ? void 0 : re.z_index) || 0))) + 1), M;
    }
    for (const q of h()) {
      const U = String((q == null ? void 0 : q.actionGroupId) || (q == null ? void 0 : q.id) || "").trim();
      if (!U) continue;
      const N = b(U, "paint");
      if (!ke(fe(q, N))) {
        H.push(q), j.push(...N);
        continue;
      }
      const Q = ((se = (W = t.paintEngine) == null ? void 0 : W.getGroupTarget) == null ? void 0 : se.call(W, U)) || null, M = ((K = Q == null ? void 0 : Q.committedPaint) == null ? void 0 : K.canvas) || null;
      if (!M) {
        H.push(q), j.push(...N);
        continue;
      }
      const re = ce(M);
      if (!re.touched || !re.canvas) {
        H.push(q), j.push(...N);
        continue;
      }
      A = !0;
      const te = xe(re.canvas, "paint", v.get(U) || q || {});
      D.push(...te);
    }
    for (const q of m().filter((U) => String((U == null ? void 0 : U.layerKind) || "paint") === "paint")) {
      if (!ke(Se(q))) {
        D.push(q);
        continue;
      }
      const U = s(q, null);
      if (!U) {
        D.push(q);
        continue;
      }
      const N = ce(U);
      if (!N.touched || !N.canvas) {
        D.push(q);
        continue;
      }
      A = !0;
      const Q = xe(N.canvas, "paint", q);
      D.push(...Q);
    }
    return A ? (o.painting.paint.strokes = j, o.painting.groups = H.sort((q, U) => Number((q == null ? void 0 : q.z_index) || 0) - Number((U == null ? void 0 : U.z_index) || 0)), o.painting.raster_objects = D.sort((q, U) => Number((q == null ? void 0 : q.z_index) || 0) - Number((U == null ? void 0 : U.z_index) || 0)), a({ preservePanelValues: !1 }), !0) : !1;
  }
  function Z(P) {
    var j, H, D, A, F;
    if ((((H = (j = P.stroke) == null ? void 0 : j.geometry) == null ? void 0 : H.rawPoints) || ((A = (D = P.stroke) == null ? void 0 : D.geometry) == null ? void 0 : A.points) || []).length >= 1) {
      ge(P);
      const x = p(P);
      x && (String(((F = P.stroke) == null ? void 0 : F.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(x) : t.paintEngine.commitActiveStroke(P.stroke, x)), P._hasCommittedSegments = !0;
    }
    const g = P.stroke, S = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, O = R(P.layerKind, g.toolKind, [], S);
    O.actionGroupId = g.actionGroupId, P.stroke = O;
    const v = p(P);
    v && t.paintEngine.beginStroke(O, v);
  }
  function he(P) {
    var j, H;
    if ((((H = (j = P.stroke) == null ? void 0 : j.geometry) == null ? void 0 : H.points) || []).length >= 3) {
      ge(P);
      const D = p(P);
      D && t.paintEngine.commitActiveStroke(P.stroke, D), P._hasCommittedSegments = !0;
    }
    const g = P.stroke, S = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, O = E(P.layerKind, g.toolKind, [], S);
    O.actionGroupId = g.actionGroupId, P.stroke = O;
    const v = p(P);
    v && t.paintEngine.beginStroke(O, v);
  }
  function ge(P) {
    var v, j, H, D;
    const ae = ((v = P == null ? void 0 : P.stroke) == null ? void 0 : v.geometry) || null;
    if (!ae) return !1;
    const g = String(((j = P == null ? void 0 : P.stroke) == null ? void 0 : j.toolKind) || "pen");
    if (P.layerKind === "paint" && g === "eraser")
      return ae.geometryKind !== "lasso_fill" && (ae.processedPoints = V(ae.rawPoints || ae.points || [], P.stroke.targetSpace, !0)), L(P);
    const S = P.layerKind === "paint" && g !== "eraser";
    if (ae.geometryKind === "lasso_fill")
      return (Array.isArray(ae.points) ? ae.points : []).length < 3 ? !1 : (S && u((H = P.stroke) == null ? void 0 : H.actionGroupId), k(P.layerKind).push(P.stroke), !0);
    const O = ae.rawPoints || ae.points || [];
    return O.length < 1 ? !1 : (ae.processedPoints = V(O, P.stroke.targetSpace, !0), S && u((D = P.stroke) == null ? void 0 : D.actionGroupId), k(P.layerKind).push(P.stroke), !0);
  }
  return {
    connect(P) {
      ({
        buildRasterObjectEditCanvas: s,
        clearSelection: a,
        createRasterFrozenObjectsFromCanvas: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        ensurePaintingGroupEntry: u,
        getActiveCutoutShot: f,
        getActivePaintTargetDescriptor: p,
        getDisplayListObjects: w,
        getPaintingGroupList: h,
        getRasterObjectList: m,
        getStrokeGroupStrokes: b,
        processFreehandPoints: V,
        rasterizeStrokeToSurface: T,
        rebuildPaintEngineIfNeeded: ee,
        screenPosToErpPoint: I,
        screenPosToFrameAsErpPoint: X,
        supportsFramePainting: $
      } = P);
    },
    isActiveLassoTool: _e,
    supportsErpPainting: me,
    getBrushPresetIdForTool: ue,
    isPaintCursorEnabled: we,
    isActivePaintCursorVisible: de,
    setPointerPos: ne,
    syncPaintCursorElement: le,
    showPaintSizePreview: z,
    hidePaintSizePreview: C,
    buildFreehandStrokeRecord: R,
    buildLassoFillStrokeRecord: E,
    getPaintingLayerList: k,
    appendPaintPoint: _,
    appendLassoPoint: y,
    _segmentFrameStroke: Z,
    _segmentFrameLassoFill: he,
    commitPaintInteraction: ge
  };
}
function rC(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, s, a, l, c, d, u, f, p, w, h, m, b, V, T, ee, I, X, $, J, ye, _e, me, ve;
  function ue() {
    return me().reverse();
  }
  function we(C) {
    var E;
    if (n && t.mode === "frame") {
      const k = s(), _ = l(k);
      if (!k || !_ || !(Number((C == null ? void 0 : C.x) || 0) >= Number(_.x || 0) && Number((C == null ? void 0 : C.x) || 0) <= Number(_.x || 0) + Number(_.w || 0) && Number((C == null ? void 0 : C.y) || 0) >= Number(_.y || 0) && Number((C == null ? void 0 : C.y) || 0) <= Number(_.y || 0) + Number(_.h || 0))) return null;
      const L = J(C, k, performance.now()), Z = L ? o(L) : null;
      if (Z)
        for (const ge of a()) {
          if (!T(ge)) continue;
          const P = ve(ge, Z);
          if (P && Number(P.x) >= 0 && Number(P.x) <= 1 && Number(P.y) >= 0 && Number(P.y) <= 1) {
            const ae = $(ge);
            if (ae != null && ae.visible) return { item: ge, geom: ae };
          }
        }
      const he = c(!1).slice().sort((ge, P) => Number((P == null ? void 0 : P.z_index) || 0) - Number((ge == null ? void 0 : ge.z_index) || 0));
      for (const ge of he) {
        if (ge.type === "strokeGroup") {
          const g = f(X("paint", ge.actionGroupId || ge.id || ""));
          if (!g) continue;
          const S = $(g);
          if (!(S != null && S.visible)) continue;
          const O = Array.isArray(S.strokePaths) ? S.strokePaths : [];
          for (const v of O) {
            const j = Array.isArray(v == null ? void 0 : v.points) ? v.points : [];
            if (!j.length) continue;
            if (v.closed && j.length >= 3 && Qr(C, j)) return { item: g, geom: S };
            const H = Math.max(8, Number((v == null ? void 0 : v.lineWidth) || 0) * 0.5 + 6);
            for (let D = 0; D < j.length - 1; D += 1)
              if (jc(C, j[D], j[D + 1]) <= H * H) return { item: g, geom: S };
            if (j.length === 1 && qo(C, j[0]) <= H * H) return { item: g, geom: S };
          }
          continue;
        }
        if (ge.type === "rasterObject") {
          const g = d(I(((E = ge.item) == null ? void 0 : E.id) || ge.id || ""));
          if (!g) continue;
          const S = $(g);
          if (p(g, S, C, L)) return { item: g, geom: S };
          continue;
        }
        const P = ge.item;
        if (!P || !T(P) || !Z) continue;
        const ae = ve(P, Z);
        if (ae && Number(ae.x) >= 0 && Number(ae.x) <= 1 && Number(ae.y) >= 0 && Number(ae.y) <= 1) {
          const g = $(P);
          if (g != null && g.visible) return { item: P, geom: g };
        }
      }
      if (!Z) return null;
      for (const ge of ue()) {
        const P = ve(ge, Z);
        if (!P || !(Number(P.x) >= 0 && Number(P.x) <= 1 && Number(P.y) >= 0 && Number(P.y) <= 1)) continue;
        const ae = $(ge);
        if (ae != null && ae.visible) return { item: ge, geom: ae };
      }
      return null;
    }
    const R = [
      ...c(!1).slice().sort((k, _) => Number((_ == null ? void 0 : _.z_index) || 0) - Number((k == null ? void 0 : k.z_index) || 0)).map((k) => {
        var _;
        return k.type === "strokeGroup" ? f(X("paint", k.actionGroupId || k.id || "")) : k.type === "rasterObject" ? d(I(((_ = k.item) == null ? void 0 : _.id) || k.id || "")) : k.item;
      }).filter(Boolean),
      ...ue(),
      ...n ? a().filter((k) => V(k)) : []
    ];
    for (const k of R) {
      if (ee(k)) {
        const y = $(k);
        if (!(y != null && y.visible)) continue;
        const L = Array.isArray(y.strokePaths) ? y.strokePaths : [];
        for (const Z of L) {
          const he = Array.isArray(Z == null ? void 0 : Z.points) ? Z.points : [];
          if (!he.length) continue;
          if (Z.closed && he.length >= 3 && Qr(C, he)) return { item: k, geom: y };
          const ge = Math.max(8, Number((Z == null ? void 0 : Z.lineWidth) || 0) * 0.5 + 6);
          for (let P = 0; P < he.length - 1; P += 1)
            if (jc(C, he[P], he[P + 1]) <= ge * ge) return { item: k, geom: y };
          if (he.length === 1 && qo(C, he[0]) <= ge * ge) return { item: k, geom: y };
        }
        continue;
      }
      if (b(k)) {
        const y = $(k);
        if (!(y != null && y.visible)) continue;
        if (p(k, y, C)) return { item: k, geom: y };
        continue;
      }
      const _ = $(k);
      if (_.visible && Qr(C, _.corners))
        return { item: k, geom: _ };
    }
    return null;
  }
  function de(C, R, E = null) {
    if (!C || !C.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (T(E)) return _u(C, R);
    if (C.kind === "strokeGroup") {
      const k = C.corners.findIndex((y) => qo(y, R) <= 121);
      if (k >= 0) {
        const y = C.corners[k], L = y.x - C.center.x, Z = y.y - C.center.y, he = L * Z >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: k, cursor: he };
      }
      const _ = Array.isArray(C.strokePaths) ? C.strokePaths : [];
      for (const y of _) {
        const L = Array.isArray(y == null ? void 0 : y.points) ? y.points : [];
        if (y.closed && L.length >= 3 && Qr(R, L)) return { kind: "move", cursor: "default" };
        const Z = Math.max(8, Number((y == null ? void 0 : y.lineWidth) || 0) * 0.5 + 6);
        for (let he = 0; he < L.length - 1; he += 1)
          if (jc(R, L[he], L[he + 1]) <= Z * Z) return { kind: "move", cursor: "default" };
      }
      return Qr(R, C.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (C.kind === "rasterObject") {
      const k = C.corners.findIndex((_) => qo(_, R) <= 121);
      if (k >= 0) {
        const _ = C.corners[k], y = _.x - C.center.x, L = _.y - C.center.y, Z = y * L >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: k, cursor: Z };
      }
      return Qr(R, C.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return jw(C, R, {
      edges: i === "cutout" || V(E),
      resize: !(V(E) && h()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function ne(C, R) {
    return {
      x0: Math.min(Number((C == null ? void 0 : C.x) || 0), Number((R == null ? void 0 : R.x) || 0)),
      y0: Math.min(Number((C == null ? void 0 : C.y) || 0), Number((R == null ? void 0 : R.y) || 0)),
      x1: Math.max(Number((C == null ? void 0 : C.x) || 0), Number((R == null ? void 0 : R.x) || 0)),
      y1: Math.max(Number((C == null ? void 0 : C.y) || 0), Number((R == null ? void 0 : R.y) || 0))
    };
  }
  function ie(C, R) {
    return !!C && !!R && Number(R.x) >= Number(C.x0) && Number(R.x) <= Number(C.x1) && Number(R.y) >= Number(C.y0) && Number(R.y) <= Number(C.y1);
  }
  function le(C, R) {
    if (!C || !(R != null && R.visible) || !Array.isArray(R.corners)) return !1;
    if (R.corners.some((_) => ie(C, _))) return !0;
    const E = (Number(C.x0) + Number(C.x1)) * 0.5, k = (Number(C.y0) + Number(C.y1)) * 0.5;
    return !!Qr({ x: E, y: k }, R.corners);
  }
  function z(C) {
    if (_e(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? ye("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? ye("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? ye("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? ye("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? ye("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? ye(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? ye("grabbing") : ye("default");
      return;
    }
    if (w()) {
      ye("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        ye(s2);
        return;
      }
      if (t.primaryTool !== "cursor") {
        ye("default");
        return;
      }
      ye("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      ye("default");
      return;
    }
    if (t.gizmoAxis) {
      ye("grab");
      return;
    }
    const R = u(), E = R ? $(R) : null, k = R ? m(R) : !1, _ = k ? { kind: "none", cursor: "default" } : de(E, C, R);
    if (!k && _.kind !== "none") {
      ye(_.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && we(C)) {
      ye("default");
      return;
    }
    ye(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(C) {
      ({
        erpPointToWorldDir: o,
        getActiveCutoutShot: s,
        getCutoutSelectableItemsForHit: a,
        getFrameViewRect: l,
        getOrderedDisplayListObjects: c,
        getRasterObjectItem: d,
        getSelected: u,
        getStrokeGroupItem: f,
        hitRasterObjectAt: p,
        isActivePaintCursorVisible: w,
        isErpCamera: h,
        isItemLocked: m,
        isRasterObjectItem: b,
        isShotItem: V,
        isStickerItem: T,
        isStrokeGroupItem: ee,
        makeRasterObjectSelectionId: I,
        makeStrokeGroupSelectionId: X,
        objectGeom: $,
        screenPosToFrameAsErpPoint: J,
        setCanvasCursor: ye,
        syncPaintCursorElement: _e,
        upstreamSkyStickers: me,
        worldDirToFrameLocalPoint: ve
      } = C);
    },
    hitObjectAt: we,
    handleHit: de,
    rectFromPoints: ne,
    rectIntersectsGeom: le,
    updateCursor: z
  };
}
function iC(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    scheduler: i,
    selectionMenu: o,
    stageWrap: s,
    state: a,
    tooltip: l,
    tooltipEl: c,
    type: d,
    uiState: u
  } = e;
  let f, p, w, h, m, b, V, T, ee, I, X, $, J, ye, _e, me, ve, ue = !1;
  function we() {
    return ue;
  }
  function de() {
    if (!o) return;
    if (ue = !1, n.mode === "frame") {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || ee() && $()) {
      const y = ie();
      ue = y.visible, le(y);
      return;
    }
    const R = b(), E = V();
    if (!R && E.length === 0 || n.interaction) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const k = T(), _ = mA({
      type: d,
      selected: R,
      selectedItems: E,
      selectedKind: k,
      geom: E.length > 1 ? m(E) : ve(R),
      allLocked: f(E),
      anyLocked: E.some((y) => J(y)),
      selectedLocked: J(R),
      activeAspect: ye(R) && I() ? So : Vr(R),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: X,
      isStickerHidden: me,
      canRestoreSelectedToInitial: p,
      iconSet: Ke,
      cameraShot: t,
      coverage: a.coverage,
      upstream: ne(E)
    });
    le(_);
  }
  function ne(R) {
    const E = R.filter(Xt);
    return E.length ? { lockable: E.every(wl) } : null;
  }
  function ie() {
    const R = _e() && !n.interaction ? h().space : null;
    if (!(R != null && R.gizmo)) return { visible: !1 };
    const E = w(), k = [...R.stickers, ...R.upstreamStickers].find((Z) => Z.id === n.worldSelectedId), y = (k ? Nd(k) : [R.gizmo.transform.position]).map((Z) => Ss(E, Z, r.width, r.height)).filter(Boolean), L = QS(E, R.gizmo.transform.position, R.gizmo.mode, r.width, r.height);
    return gA({ corners: y, gizmoBox: L, gizmoMode: R.gizmo.mode, camera: ee() });
  }
  function le(R) {
    var L, Z;
    if (!R.visible) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const E = (he, ge) => yA(R.anchor, he, ge, r.width, r.height), k = Math.max(1, Number(((L = n.menuSize) == null ? void 0 : L.w) || 220)), _ = Math.max(1, Number(((Z = n.menuSize) == null ? void 0 : Z.h) || 40)), y = E(k, _);
    if (!y) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    u.selectionMenu = {
      visible: !0,
      left: y.left,
      top: y.top,
      items: R.items
    }, i.requestFrame(() => {
      if (!o || u.selectionMenu.visible !== !0) return;
      const he = o.getBoundingClientRect(), ge = Math.round(Number((he == null ? void 0 : he.width) || 0)) || 220, P = Math.round(Number((he == null ? void 0 : he.height) || 0)) || 40;
      n.menuSize = { w: ge, h: P, measured: !0 };
      const ae = E(ge, P);
      ae && (u.selectionMenu.left = ae.left, u.selectionMenu.top = ae.top);
    });
  }
  function z() {
    l.timer && (clearTimeout(l.timer), l.timer = 0), l.target = null, u.tooltip.visible = !1;
  }
  function C(R) {
    if (!c || !R || !R.isConnected) return;
    const E = String(R.getAttribute("data-tip") || "").trim();
    if (!E) return;
    u.tooltip.text = E, u.tooltip.visible = !0;
    const k = R;
    i.requestFrame(() => {
      var j, H;
      if (l.target !== k || !c || !(k != null && k.isConnected)) return;
      const _ = s.getBoundingClientRect(), y = k.getBoundingClientRect(), L = 8, Z = 12, he = Math.round(Number(((j = c.getBoundingClientRect()) == null ? void 0 : j.width) || 0)) || 100, ge = Math.round(Number(((H = c.getBoundingClientRect()) == null ? void 0 : H.height) || 0)) || 24, P = !!k.closest(".pano-floating-left"), ae = !!k.closest(".pano-frame-rail"), g = !!k.closest(".pano-paint-footer") || !!k.closest(".pano-paint-color-float");
      let S = "", O = y.left - _.left + y.width * 0.5 - he * 0.5, v = y.top - _.top - ge - Z;
      if (k.closest(".pano-floating-top") && (v = y.bottom - _.top + Z), P)
        S = "tool-rail", O = y.right - _.left + 10, v = y.top - _.top + y.height * 0.5 - ge * 0.5, O = Oe(O, L, Math.max(L, _.width - he - L)), v = Oe(v, L, Math.max(L, _.height - ge - L));
      else if (ae)
        S = "frame-rail", O = y.left - _.left - he - 10, v = y.top - _.top + y.height * 0.5 - ge * 0.5, O = Oe(O, L, Math.max(L, _.width - he - L)), v = Oe(v, L, Math.max(L, _.height - ge - L));
      else if (g) {
        S = "footer";
        const D = k.closest(".pano-paint-footer"), A = D ? D.getBoundingClientRect() : y;
        O = A.left - _.left + A.width * 0.5 - he * 0.5, v = A.bottom - _.top + 5, O = Oe(O, L, Math.max(L, _.width - he - L)), v = Math.max(L, v);
      }
      O = Oe(O, L, Math.max(L, _.width - he - L)), v = Math.max(L, v), u.tooltip.left = O, u.tooltip.top = v, u.tooltip.variant = S, u.tooltip.visible = !0;
    });
  }
  return {
    connect(R) {
      ({
        areAllSelectedItemsLocked: f,
        canRestoreSelectedToInitial: p,
        currentSpaceCamera: w,
        editorViewInput: h,
        getMultiSelectionGeom: m,
        getSelected: b,
        getSelectedItems: V,
        getSelectedKind: T,
        isCameraSelected: ee,
        isErpCamera: I,
        isExternalSticker: X,
        isFreeSpaceView: $,
        isItemLocked: J,
        isShotItem: ye,
        isSpaceView: _e,
        isStickerHidden: me,
        objectGeom: ve
      } = R);
    },
    isWorldMenuShown: we,
    updateSelectionMenu: de,
    hideTooltip: z,
    showTooltipFor: C
  };
}
function oC(e) {
  const {
    canvas: t,
    dragFrames: r,
    editor: n,
    editorView: i,
    node: o,
    paintColorPop: s,
    readOnly: a,
    runtime: l,
    sceneV2: c,
    shotEditor: d,
    state: u,
    stateV2: f,
    timeline: p,
    type: w,
    viewController: h
  } = e;
  let m, b, V, T, ee, I, X, $, J, ye, _e, me, ve, ue, we, de, ne, ie, le, z, C, R, E, k, _, y, L, Z, he, ge, P, ae, g, S, O, v, j, H, D, A, F, x, G, Y, fe, Se, ke, ce, xe, B, pe, W, se, K, q, U, N, Q, M, re, te, be, Ne, Ee, Ve, We, Ge, Ce, ze, oe, Ie, Ae, Fe, je, He, Ue, ft, yt, Dt, At, An, qe, ln, Ut, hi, Br, mi, sn, bn, Yr, hr, nr, Ts, Hi, Po, Ao, Ds, Ls, Rs, Gi, Mt, Wn, rr, Co, Vn, Vs, $s, zs, qr = null;
  function Zl(De) {
    p.selection && (p.selection = null, Rs());
    const Te = Fe(De);
    qr = Te, At(Te, !0), ue(), h.state.inertia.active = !1, h.state.inertia.vx = 0, h.state.inertia.vy = 0;
    const Pe = W(), vt = pe(), tt = Pe || vt ? tx(Co(), De) : null;
    if (vt && tt) {
      De.preventDefault(), tt === "look" ? bn(Te, De.pointerId) : sn(tt, Te, De.pointerId);
      return;
    }
    if (tt === "look") {
      De.preventDefault();
      const Xe = je(De);
      n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, h.startDrag(Xe.x, Xe.y, De.pointerId, performance.now()), Mt(Te), t.setPointerCapture(De.pointerId);
      return;
    }
    if (tt) {
      De.preventDefault(), Yr(tt, Te, De.pointerId);
      return;
    }
    if ((Pe || vt) && De.button !== 0) {
      De.preventDefault();
      return;
    }
    if (De.button === 1) {
      if (De.preventDefault(), n.mode === "frame") {
        const Xe = Z();
        if (!Xe || a || Xe.locked === !0) return;
        n.interaction = {
          kind: "pan_frame",
          shot: Xe,
          last: Te,
          start: {
            yaw_deg: Number(Xe.yaw_deg || 0),
            pitch_deg: Number(Xe.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const Xe = n.mode === "unwrap" ? Te : je(De);
        n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, h.startDrag(Xe.x, Xe.y, De.pointerId, performance.now());
      }
      Mt(Te), t.setPointerCapture(De.pointerId);
      return;
    }
    if (De.button !== 0) return;
    if (n.mode === "frame" && (De.altKey || De.shiftKey) && !a) {
      const Xe = Z(), Ye = g(Xe);
      if (!Xe || Xe.locked === !0 || !Ye) return;
      const Qe = Ug({
        frame: Ye,
        point: Te,
        startRollDeg: Number(Xe.roll_deg ?? Xe.rot_deg ?? 0),
        shiftKey: De.shiftKey,
        altKey: De.altKey,
        allowAlt: !0
      });
      if (!Qe) return;
      n.interaction = {
        kind: "roll_frame",
        shot: Xe,
        center: Qe.center,
        lastAngle: Qe.lastAngle,
        accumulatedRad: Qe.accumulatedRad,
        rollGesture: Qe,
        start: { roll_deg: Number(Xe.roll_deg ?? Xe.rot_deg ?? 0) },
        changed: !1,
        altStarted: Qe.source === "alt",
        source: Qe.source
      }, t.setPointerCapture(De.pointerId), De.preventDefault(), Ds(), Ae({ localOnly: !0 });
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      bn(Te, De.pointerId), De.preventDefault();
      return;
    }
    if (a) {
      n.mode === "pano" && Oo(De, Te);
      return;
    }
    if (s && !s.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (Ts() || Hi())) {
      if (!Ee()) return;
      nr();
      const Xe = n.primaryTool === "mask" ? "mask" : "paint", Ye = n.primaryTool === "mask" ? n.maskTool : n.paintTool, Qe = n.mode === "frame" && Hi() ? Z() : null, Bt = { kind: "ERP_GLOBAL" }, Pt = Qe ? Ue(Te, Qe, performance.now()) : He(Te, performance.now());
      if (!Pt) {
        Mt(Te);
        return;
      }
      n.interaction = {
        kind: Ye === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: Xe,
        _livePreviewToken: io("live"),
        stroke: Ye === "lasso_fill" ? _e(Xe, Ye, [Pt], Bt) : ye(Xe, Ye, [Pt], Bt)
      }, xe();
      const Cr = he(n.interaction);
      if (Cr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, Cr), n.interaction.kind === "paint_stroke") {
          const Ki = n.paintEngine.ensureTarget(Cr), Wi = Number((Pt == null ? void 0 : Pt.u) ?? (Pt == null ? void 0 : Pt.x) ?? 0), Ui = Number((Pt == null ? void 0 : Pt.v) ?? (Pt == null ? void 0 : Pt.y) ?? 0);
          n.paintEngine.appendStrokePoint(Ki, Wi, Ui, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, Cr);
      Mt(Te), t.setPointerCapture(De.pointerId), Ae();
      return;
    }
    const Nt = x(), Je = F(), et = Nt.length > 1 ? O(Nt) : Je ? Ne(Je) : null;
    if (n.primaryTool === "cursor" && (De.ctrlKey || De.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Te, current: Te }, Mt(Te), t.setPointerCapture(De.pointerId), Ae({ localOnly: !0, reason: pt.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && me() && W() && mi(De, Te) || n.primaryTool === "cursor" && c && N() && js(De, Te)) return;
    if (Nt.length > 1 && (et != null && et.visible)) {
      if ((Nt.some((Ye) => se(Ye)) ? { kind: "none" } : Se(et, Te)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: Nt.map((Ye) => Ye),
          offset: { x: Te.x - et.center.x, y: Te.y - et.center.y },
          startCenter: { x: et.center.x, y: et.center.y },
          stickerSnapshots: Nt.filter((Ye) => Q(Ye)).map((Ye) => ({
            id: String(Ye.id || ""),
            yaw_deg: Number(Ge(Ye).yaw_deg || 0),
            pitch_deg: Number(Ge(Ye).pitch_deg || 0),
            center: (() => {
              var Bt, Pt;
              const Qe = Ne(Ye);
              return Qe != null && Qe.visible ? { x: Number(((Bt = Qe.center) == null ? void 0 : Bt.x) || 0), y: Number(((Pt = Qe.center) == null ? void 0 : Pt.y) || 0) } : { x: Te.x, y: Te.y };
            })()
          })),
          strokeSnapshots: Nt.filter((Ye) => M(Ye)).map((Ye) => ({
            id: String(Ye.actionGroupId || Ye.id || ""),
            layerKind: String(Ye.layerKind || "paint"),
            snapshot: dn(Y(Ye.actionGroupId, Ye.layerKind)),
            frameSnapshot: dn(E(Ye.actionGroupId, Ye.layerKind)),
            center: (() => {
              var Bt, Pt;
              const Qe = Ne(Ye);
              return Qe != null && Qe.visible ? { x: Number(((Bt = Qe.center) == null ? void 0 : Bt.x) || 0), y: Number(((Pt = Qe.center) == null ? void 0 : Pt.y) || 0) } : { x: Te.x, y: Te.y };
            })(),
            centerUv: G(Ye.actionGroupId, Ye.layerKind)
          })),
          rasterSnapshots: Nt.filter((Ye) => K(Ye)).map((Ye) => ({
            id: Ve(Ye.rasterObjectId || Ye.id || ""),
            snapshot: dn(H().find((Qe) => String((Qe == null ? void 0 : Qe.id) || "") === Ve(Ye.rasterObjectId || Ye.id || ""))),
            center: (() => {
              var Bt, Pt;
              const Qe = Ne(Ye);
              return Qe != null && Qe.visible ? { x: Number(((Bt = Qe.center) == null ? void 0 : Bt.x) || 0), y: Number(((Pt = Qe.center) == null ? void 0 : Pt.y) || 0) } : { x: Te.x, y: Te.y };
            })(),
            centerUv: j(Ye)
          }))
        }, Mt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
    } else if (Je && (et != null && et.visible)) {
      const Xe = se(Je) ? { kind: "none" } : Se(et, Te, Je);
      if (Xe.kind === "scale") {
        n.interaction = M(Je) ? {
          kind: "scale_stroke_group",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          snapshot: dn(Y(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: dn(E(Je.actionGroupId, Je.layerKind)),
          cursor: Xe.cursor
        } : K(Je) ? {
          kind: "scale_raster_object",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          snapshot: dn(H().find((Ye) => String((Ye == null ? void 0 : Ye.id) || "") === Ve(Je.rasterObjectId || Je.id || ""))),
          cursor: Xe.cursor
        } : {
          kind: "scale",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          startHFOV: Number(Ge(Je).hFOV_deg || 20),
          startVFOV: Number(Ge(Je).vFOV_deg || 20),
          cursor: Xe.cursor
        }, Mt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
      if (Xe.kind === "scale_x" || Xe.kind === "scale_y") {
        n.interaction = {
          kind: Xe.kind,
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          startHFOV: Number(Ge(Je).hFOV_deg || 20),
          startVFOV: Number(Ge(Je).vFOV_deg || 20),
          cursor: Xe.cursor,
          edge: Xe.edge
        }, Mt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
      if (Xe.kind === "rotate") {
        n.interaction = M(Je) ? {
          kind: "rotate_stroke_group",
          item: Je,
          center: et.center,
          startAng: Math.atan2(Te.y - et.center.y, Te.x - et.center.x),
          snapshot: dn(Y(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: dn(E(Je.actionGroupId, Je.layerKind))
        } : {
          kind: "rotate",
          item: Je,
          center: et.center,
          startRot: Number(Ge(Je).rot_deg || Ge(Je).roll_deg || 0),
          startAng: Math.atan2(Te.y - et.center.y, Te.x - et.center.x)
        }, Mt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
      if (Xe.kind === "move") {
        if (M(Je)) {
          const Ye = n.mode === "frame" ? (() => {
            const Qe = Z();
            return Qe ? Ue(Te, Qe, performance.now()) : null;
          })() : He(Te, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Je,
            startUv: Ye,
            snapshot: dn(Y(Je.actionGroupId, Je.layerKind)),
            frameSnapshot: dn(E(Je.actionGroupId, Je.layerKind))
          }, Mt(Te), t.setPointerCapture(De.pointerId);
          return;
        }
        if (K(Je)) {
          const Ye = n.mode === "frame" ? (() => {
            const Qe = Z();
            return Qe ? Ue(Te, Qe, performance.now()) : null;
          })() : He(Te, performance.now());
          n.interaction = {
            kind: "move_raster_object",
            item: Je,
            startUv: Ye,
            snapshot: dn(H().find((Qe) => String((Qe == null ? void 0 : Qe.id) || "") === Ve(Je.rasterObjectId || Je.id || "")))
          }, Mt(Te), t.setPointerCapture(De.pointerId);
          return;
        }
        n.interaction = {
          kind: "move",
          item: Je,
          offset: { x: Te.x - et.center.x, y: Te.y - et.center.y }
        }, Mt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
    }
    const at = ce(Te);
    if (at) {
      const Xe = n.selectedId !== at.item.id;
      if (Xe && n.selectedId && (Ce(), ie()), An(at.item), d && Xe && (n.cutoutAspectOpen = !1), Xe && rr(), Wn(), Ae(), se(at.item)) {
        Mt(Te);
        return;
      }
      n.interaction = {
        kind: M(at.item) ? "move_stroke_group" : K(at.item) ? "move_raster_object" : "move",
        item: at.item,
        offset: { x: Te.x - at.geom.center.x, y: Te.y - at.geom.center.y },
        startUv: M(at.item) || K(at.item) ? n.mode === "frame" ? (() => {
          const Ye = Z();
          return Ye ? Ue(Te, Ye, performance.now()) : null;
        })() : He(Te, performance.now()) : null,
        snapshot: M(at.item) ? dn(Y(at.item.actionGroupId, at.item.layerKind)) : K(at.item) ? dn(H().find((Ye) => String((Ye == null ? void 0 : Ye.id) || "") === Ve(at.item.rasterObjectId || at.item.id || ""))) : null,
        frameSnapshot: M(at.item) ? dn(E(at.item.actionGroupId, at.item.layerKind)) : null
      }, Mt(Te), t.setPointerCapture(De.pointerId);
      return;
    }
    const $n = !!n.selectedId;
    $n && (Ce(), ie()), we(), $n && rr(), Wn(), Ae(), n.mode === "pano" && Oo(De, Te);
  }
  function Xr(De, Te) {
    return i.gizmoPointer(De, le(), Te.x, Te.y, t.width, t.height);
  }
  function js(De, Te) {
    var et, at;
    const Pe = (et = R().space) == null ? void 0 : et.gizmo;
    if (Pe && Xr("hover", Te) !== null && Xr("down", Te))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: Pe.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: Pe.transform,
        base: Wr(Dt(), n.frame),
        changed: !1
      }, t.setPointerCapture(De.pointerId), Mt(Te), !0;
    const vt = x(), tt = F(), Nt = vt.length > 1 ? vt.some(($n) => se($n)) ? "none" : Se(O(vt), Te).kind : tt && !se(tt) ? Se(Ne(tt), Te, tt).kind : "none";
    if (Nt !== "none" && Nt !== "move") return !1;
    const Je = i.pickSticker(le(), Te.x, Te.y, t.width, t.height);
    return ((at = hr(Je)) == null ? void 0 : at.placement) !== "world" ? !1 : (n.worldSelectedId !== Je && (n.selectedId && (Ce(), ie()), yt(Je), rr(), Wn(), Ao(), Ae()), n.interaction = { kind: "world_select" }, t.setPointerCapture(De.pointerId), !0);
  }
  function Io(De) {
    var vt;
    const Pe = !!(n.worldSelectedId || B()) && n.primaryTool === "cursor" && N() && !!((vt = R().space) != null && vt.gizmo) ? Xr("hover", De) : null;
    Pe !== n.gizmoAxis && (n.gizmoAxis = Pe, l.backgroundDirty = !0, Ae({ localOnly: !0, reason: pt.VIEW }));
  }
  function Ql(De, Te) {
    const Pe = Xr("move", Te);
    if (Pe && De.camera) {
      for (const [tt, Nt] of Object.entries(tp(De.mode, De.base, De.start, Pe))) mn(u.camera, tt, n.frame, Nt);
      Po(), De.changed = !0, r.request("sidePanel"), Ae({ localOnly: !0 });
      return;
    }
    const vt = hr(De.id);
    !Pe || !vt || (_S(vt, n.frame, tp(De.mode, De.base, De.start, Pe)), De.changed = !0, re(), r.request("sidePanel"), Ae({ localOnly: !0 }));
  }
  function Eo(De) {
    n.interaction = null, n.gizmoAxis = null, De.kind === "world_gizmo" && (Xr("up", n.pointerPos), l.backgroundDirty = !0, De.changed && (Ce(), de(), rr())), Mt(n.pointerPos), Ae();
  }
  function Oo(De, Te) {
    if (W()) {
      const vt = Co().emptyLeft;
      vt && Yr(vt, Te, De.pointerId);
      return;
    }
    const Pe = je(De);
    n.interaction = { kind: "view", last: Pe, lastTs: performance.now() }, h.startDrag(Pe.x, Pe.y, De.pointerId, performance.now()), Mt(Te), t.setPointerCapture(De.pointerId);
  }
  function Hs(De, Te) {
    if (!f || !We.playing || (We.stop(), De.kind === "frame_pan")) return;
    if (De.kind === "frame_orbit") {
      const tt = k();
      tt && (De.pivot = L(tt, y(tt), Te));
      return;
    }
    if (De.kind === "world_gizmo") {
      const tt = hr(De.id);
      De.camera ? De.base = z() : tt && (De.base = Wr(tt, n.frame));
      return;
    }
    if (De.kind === "move_multi") {
      const tt = O(De.items);
      if (!(tt != null && tt.visible)) return;
      De.offset = { x: Te.x - tt.center.x, y: Te.y - tt.center.y }, De.startCenter = { x: tt.center.x, y: tt.center.y };
      for (const Nt of De.stickerSnapshots) {
        const Je = De.items.find((at) => String((at == null ? void 0 : at.id) || "") === Nt.id), et = Je ? Ne(Je) : null;
        et != null && et.visible && (Nt.yaw_deg = Number(Ge(Je).yaw_deg || 0), Nt.pitch_deg = Number(Ge(Je).pitch_deg || 0), Nt.center = { x: et.center.x, y: et.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(De.kind)) return;
    const Pe = Ne(De.item);
    if (!(Pe != null && Pe.visible)) return;
    const vt = Ge(De.item);
    if (De.kind === "move") {
      De.offset = { x: Te.x - Pe.center.x, y: Te.y - Pe.center.y };
      return;
    }
    if (De.center = Pe.center, De.kind === "rotate") {
      De.startRot = Number(vt.rot_deg || vt.roll_deg || 0), De.startAng = Math.atan2(Te.y - Pe.center.y, Te.x - Pe.center.x);
      return;
    }
    De.startDist = Math.max(1, Math.hypot(Te.x - Pe.center.x, Te.y - Pe.center.y)), De.startHFOV = Number(vt.hFOV_deg || 20), De.startVFOV = Number(vt.vFOV_deg || 20);
  }
  function Gs(De) {
    var vt, tt, Nt, Je, et, at, $n, Xe, Ye, Qe, Bt, Pt, Cr, Ki, Wi, Ui, Bs, Ys, qs, Xs, Js, Zs;
    const Te = Fe(De);
    if (At(Te, !0), !n.interaction) {
      Io(Te), Mt(Te);
      return;
    }
    Mt(Te);
    const Pe = n.interaction;
    if (qr && (Te.x !== qr.x || Te.y !== qr.y)) {
      const ct = qr;
      qr = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(Pe.kind) || Hs(Pe, ct);
    }
    if (Pe.kind !== "world_select") {
      if (Pe.kind === "world_gizmo") {
        Ql(Pe, Te);
        return;
      }
      if (Pe.kind === "paint_stroke") {
        const ct = typeof De.getCoalescedEvents == "function" ? De.getCoalescedEvents() : [De];
        let ht = !1;
        ct.forEach((gt) => {
          const St = Fe(gt);
          if (n.mode === "frame") {
            const vn = Z(), en = vn ? g(vn) : null;
            if (en) {
              const Cn = (St.x - en.x) / Math.max(1, en.w), Lt = (St.y - en.y) / Math.max(1, en.h);
              if (!(Cn >= 0 && Cn <= 1 && Lt >= 0 && Lt <= 1)) {
                Pe._outOfFrame = !0;
                return;
              }
              Pe._outOfFrame && (Pe._outOfFrame = !1, b(Pe));
            }
          }
          T(Pe, St, performance.now()) && (ht = !0);
        }), ht && Ae({ localOnly: !0, reason: pt.PAINT });
        return;
      }
      if (Pe.kind === "paint_lasso_fill") {
        const ct = typeof De.getCoalescedEvents == "function" ? De.getCoalescedEvents() : [De];
        let ht = !1;
        if (ct.forEach((gt) => {
          const St = Fe(gt);
          if (n.mode === "frame") {
            const vn = Z(), en = vn ? g(vn) : null;
            if (en) {
              const Cn = (St.x - en.x) / Math.max(1, en.w), Lt = (St.y - en.y) / Math.max(1, en.h);
              if (!(Cn >= 0 && Cn <= 1 && Lt >= 0 && Lt <= 1)) {
                Pe._outOfFrame = !0;
                return;
              }
              Pe._outOfFrame && (Pe._outOfFrame = !1, m(Pe));
            }
          }
          V(Pe, St, performance.now()) && (ht = !0);
        }), ht) {
          const gt = he(Pe);
          gt && n.paintEngine.updateActiveStroke(Pe.stroke, gt), Ae({ localOnly: !0, reason: pt.PAINT });
        }
        return;
      }
      if (Pe.kind === "view") {
        const ct = performance.now(), ht = n.mode === "unwrap" ? Te : je(De);
        h.moveDrag(ht.x, ht.y, n.mode === "unwrap" ? "unwrap" : "pano", ct), Pe.lastTs = ct, Pe.last = ht, Ae({ localOnly: !0, reason: pt.VIEW });
        return;
      }
      if (Pe.kind === "frame_pan" || Pe.kind === "frame_orbit") {
        C(Pe, Te);
        return;
      }
      if (Pe.kind === "space_pan" || Pe.kind === "space_orbit") {
        const ct = hi();
        ln(Pe.kind === "space_pan" ? Jm(ct, Te.x - Pe.last.x, Te.y - Pe.last.y, t.width, t.height, Pe.depth) : Xm(ct, Te.x - Pe.last.x, Te.y - Pe.last.y, t.height, Pe.pivot)), Pe.last = Te;
        return;
      }
      if (Pe.kind === "pan_frame") {
        const ct = ae(Pe.shot);
        if (!ct || !Pe.shot) return;
        const ht = Te.x - Pe.last.x, gt = Te.y - Pe.last.y, St = Yg(Pe.shot, {
          dx: ht,
          dy: gt,
          focalPx: ct.focalPx,
          invertX: ((vt = u.ui_settings) == null ? void 0 : vt.invert_view_x) === !0,
          invertY: ((tt = u.ui_settings) == null ? void 0 : tt.invert_view_y) === !0
        });
        Pe.shot.yaw_deg = St.yaw_deg, Pe.shot.pitch_deg = St.pitch_deg, Pe.changed = Pe.changed || Math.abs(ht) > 0 || Math.abs(gt) > 0, Pe.last = Te, Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "roll_frame") {
        if (Pe.source === "knob") return;
        X(Pe, Te, De);
        return;
      }
      if (Pe.kind === "move") {
        const ct = Te.x - Pe.offset.x, ht = Te.y - Pe.offset.y;
        if (n.mode === "frame" && d) {
          const gt = Z(), St = g(gt);
          if (!gt || !St) return;
          const vn = {
            x: Oe((ct - St.x) / Math.max(1, St.w), 0, 1),
            y: Oe((ht - St.y) / Math.max(1, St.h), 0, 1)
          }, en = _(gt, vn);
          if (!en) return;
          const Cn = ha(en);
          Vn(Pe.item, { yaw_deg: Cn.yaw, pitch_deg: Cn.pitch });
        } else if (n.mode === "unwrap") {
          const gt = fe(), St = Oe((ct - gt.x) / Math.max(gt.w, 1), 0, 1), vn = Oe((ht - gt.y) / Math.max(gt.h, 1), 0, 1);
          Vn(Pe.item, { yaw_deg: Gt(St * 360 - 180), pitch_deg: Oe(90 - vn * 180, -90, 90) });
        } else {
          const gt = ft(ct, ht), St = ha(gt);
          Vn(Pe.item, { yaw_deg: St.yaw, pitch_deg: St.pitch });
        }
        Q(Pe.item) && re(), Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "move_stroke_group") {
        const ct = n.mode === "frame" ? (() => {
          const St = Z();
          return St ? Ue(Te, St, performance.now()) : null;
        })() : He(Te, performance.now());
        if (!ct || !Pe.startUv) return;
        const ht = Ut(Number(ct.u || 0), Number(Pe.startUv.u || 0)), gt = Number(ct.v || 0) - Number(Pe.startUv.v || 0);
        $((Nt = Pe.item) == null ? void 0 : Nt.actionGroupId, ht, gt, Pe.snapshot, (Je = Pe.item) == null ? void 0 : Je.layerKind, Pe.frameSnapshot) && (be({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: pt.PAINT }));
        return;
      }
      if (Pe.kind === "move_raster_object") {
        const ct = n.mode === "frame" ? (() => {
          const St = Z();
          return St ? Ue(Te, St, performance.now()) : null;
        })() : He(Te, performance.now());
        if (!ct || !Pe.startUv) return;
        const ht = Ut(Number(ct.u || 0), Number(Pe.startUv.u || 0)), gt = Number(ct.v || 0) - Number(Pe.startUv.v || 0);
        ee(((et = Pe.item) == null ? void 0 : et.rasterObjectId) || ((at = Pe.item) == null ? void 0 : at.id) || "", ht, gt, Pe.snapshot) && (te(), Ae({ localOnly: !0, reason: pt.PAINT }));
        return;
      }
      if (Pe.kind === "scale_raster_object") {
        const ht = Math.max(1, Math.hypot(Te.x - Pe.center.x, Te.y - Pe.center.y)) / Math.max(1, Number(Pe.startDist || 1));
        I((($n = Pe.item) == null ? void 0 : $n.rasterObjectId) || ((Xe = Pe.item) == null ? void 0 : Xe.id) || "", ht, Pe.snapshot) && (te(), Ae({ localOnly: !0, reason: pt.PAINT }));
        return;
      }
      if (Pe.kind === "move_multi") {
        const ct = Te.x - Number(((Ye = Pe.offset) == null ? void 0 : Ye.x) || 0), ht = Te.y - Number(((Qe = Pe.offset) == null ? void 0 : Qe.y) || 0);
        let gt = !1, St = !1, vn = !1;
        const en = ct - Number(((Bt = Pe.startCenter) == null ? void 0 : Bt.x) || ct), Cn = ht - Number(((Pt = Pe.startCenter) == null ? void 0 : Pt.y) || ht);
        for (const Lt of Array.isArray(Pe.stickerSnapshots) ? Pe.stickerSnapshots : []) {
          const an = (w === "cutout" ? ge() : S()).find(($t) => String(($t == null ? void 0 : $t.id) || "") === String(Lt.id || ""));
          if (!an || !Q(an)) continue;
          const rn = {
            x: Number(((Cr = Lt.center) == null ? void 0 : Cr.x) || 0) + en,
            y: Number(((Ki = Lt.center) == null ? void 0 : Ki.y) || 0) + Cn
          };
          if (n.mode === "frame" && d) {
            const $t = Z(), Ft = g($t);
            if (!$t || !Ft) continue;
            const ir = {
              x: Oe((rn.x - Ft.x) / Math.max(1, Ft.w), 0, 1),
              y: Oe((rn.y - Ft.y) / Math.max(1, Ft.h), 0, 1)
            }, In = _($t, ir);
            if (!In) continue;
            const Fo = ha(In);
            Vn(an, { yaw_deg: Fo.yaw, pitch_deg: Fo.pitch });
          } else if (n.mode === "unwrap") {
            const $t = fe(), Ft = Oe((rn.x - $t.x) / Math.max($t.w, 1), 0, 1), ir = Oe((rn.y - $t.y) / Math.max($t.h, 1), 0, 1);
            Vn(an, { yaw_deg: Gt(Ft * 360 - 180), pitch_deg: Oe(90 - ir * 180, -90, 90) });
          } else {
            const $t = ft(rn.x, rn.y), Ft = ha($t);
            Vn(an, { yaw_deg: Ft.yaw, pitch_deg: Ft.pitch });
          }
          gt = !0;
        }
        for (const Lt of Array.isArray(Pe.strokeSnapshots) ? Pe.strokeSnapshots : []) {
          const an = {
            x: Number(((Wi = Lt.center) == null ? void 0 : Wi.x) || 0) + en,
            y: Number(((Ui = Lt.center) == null ? void 0 : Ui.y) || 0) + Cn
          }, rn = n.mode === "frame" ? (() => {
            const Ft = Z();
            return Ft ? Ue(an, Ft, performance.now()) : null;
          })() : He(an, performance.now()), $t = Lt.centerUv || null;
          if (rn && $t) {
            const Ft = Ut(Number(rn.u || 0), Number($t.u || 0)), ir = Number(rn.v || 0) - Number($t.v || 0);
            $(Lt.id, Ft, ir, Lt.snapshot, Lt.layerKind, Lt.frameSnapshot) && (gt = !0, St = !0);
          }
        }
        for (const Lt of Array.isArray(Pe.rasterSnapshots) ? Pe.rasterSnapshots : []) {
          const an = {
            x: Number(((Bs = Lt.center) == null ? void 0 : Bs.x) || 0) + en,
            y: Number(((Ys = Lt.center) == null ? void 0 : Ys.y) || 0) + Cn
          }, rn = n.mode === "frame" ? (() => {
            const Ft = Z();
            return Ft ? Ue(an, Ft, performance.now()) : null;
          })() : He(an, performance.now()), $t = Lt.centerUv || null;
          if (rn && $t) {
            const Ft = Ut(Number(rn.u || 0), Number($t.u || 0)), ir = Number(rn.v || 0) - Number($t.v || 0);
            ee(Lt.id, Ft, ir, Lt.snapshot) && (gt = !0, vn = !0);
          }
        }
        gt && (St ? be({ rebuildPaintEngine: !1 }) : vn ? te() : re(), Ae({ localOnly: !0 }));
        return;
      }
      if (Pe.kind === "scale_stroke_group") {
        const ht = Math.max(1, Math.hypot(Te.x - Pe.center.x, Te.y - Pe.center.y)) / Math.max(1, Number(Pe.startDist || 1));
        J((qs = Pe.item) == null ? void 0 : qs.actionGroupId, ht, 0, Pe.snapshot, (Xs = Pe.item) == null ? void 0 : Xs.layerKind, Pe.frameSnapshot) && (be({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: pt.PAINT }));
        return;
      }
      if (Pe.kind === "rotate_stroke_group") {
        let ct = (Math.atan2(Te.y - Pe.center.y, Te.x - Pe.center.x) - Number(Pe.startAng || 0)) * Li;
        De.shiftKey && (ct = Math.round(ct / 45) * 45), J((Js = Pe.item) == null ? void 0 : Js.actionGroupId, 1, ct, Pe.snapshot, (Zs = Pe.item) == null ? void 0 : Zs.layerKind, Pe.frameSnapshot) && (be({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: pt.PAINT }));
        return;
      }
      if (Pe.kind === "marquee_select") {
        Pe.current = Te, Ae({ localOnly: !0, reason: pt.OVERLAY });
        return;
      }
      if (Pe.kind === "scale") {
        const ht = Math.max(1, Math.hypot(Te.x - Pe.center.x, Te.y - Pe.center.y)) / Pe.startDist;
        Vn(Pe.item, { hFOV_deg: Oe(Pe.startHFOV * ht, 1, 179), vFOV_deg: Oe(Pe.startVFOV * ht, 1, 179) }), q(Pe.item) || (Pe.item.aspect_id = Ei(Pe.item)), Q(Pe.item) && re(), Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "scale_x") {
        const ht = Math.max(1, Math.hypot(Te.x - Pe.center.x, Te.y - Pe.center.y)) / Pe.startDist;
        Vn(Pe.item, { hFOV_deg: Oe(Pe.startHFOV * ht, 1, 179) }), q(Pe.item) || (Pe.item.aspect_id = Ei(Pe.item)), Q(Pe.item) && re(), Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "scale_y") {
        const ht = Math.max(1, Math.hypot(Te.x - Pe.center.x, Te.y - Pe.center.y)) / Pe.startDist;
        Vn(Pe.item, { vFOV_deg: Oe(Pe.startVFOV * ht, 1, 179) }), q(Pe.item) || (Pe.item.aspect_id = Ei(Pe.item)), Q(Pe.item) && re(), Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "rotate") {
        let ht = (Math.atan2(Te.y - Pe.center.y, Te.x - Pe.center.x) - Pe.startAng) * Li, gt = Pe.startRot - ht;
        De.shiftKey && (gt = Math.round(gt / 45) * 45), Vn(Pe.item, { [Q(Pe.item) ? "rot_deg" : "roll_deg"]: gt }), Q(Pe.item) && re(), Ae({ localOnly: !0 });
      }
    }
  }
  function Ks() {
    var Te, Pe, vt, tt, Nt, Je, et;
    const De = n.interaction;
    if (!((De == null ? void 0 : De.kind) === "roll_frame" && De.source === "knob")) {
      if ((De == null ? void 0 : De.kind) === "space_pan" || (De == null ? void 0 : De.kind) === "space_orbit") {
        n.interaction = null, Mt(n.pointerPos), Wn();
        return;
      }
      if ((De == null ? void 0 : De.kind) === "world_select" || (De == null ? void 0 : De.kind) === "world_gizmo") {
        Eo(De);
        return;
      }
      if (((Te = n.interaction) == null ? void 0 : Te.kind) === "paint_stroke" || ((Pe = n.interaction) == null ? void 0 : Pe.kind) === "paint_lasso_fill") {
        xe();
        const at = ne(n.interaction), $n = !!n.interaction._hasCommittedSegments;
        if (at || $n) {
          be();
          const Xe = String(((vt = n.interaction.stroke) == null ? void 0 : vt.actionGroupId) || "").trim();
          if (Xe) {
            const Qe = v().find((Bt) => String((Bt == null ? void 0 : Bt.actionGroupId) || "") === Xe);
            Qe && (Qe.frame = null);
          }
          const Ye = he(n.interaction);
          Ye && (at ? String(((tt = n.interaction.stroke) == null ? void 0 : tt.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(Ye), Ie()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, Ye) : n.paintEngine.cancelActiveStroke(Ye)), Ce(), ie(), rr(), Wn(), o.setDirtyCanvas(!0, !0), Ae();
        } else {
          const Xe = he(n.interaction);
          Xe && n.paintEngine.cancelActiveStroke(Xe);
        }
      } else if (((Nt = n.interaction) == null ? void 0 : Nt.kind) === "marquee_select") {
        const at = ze(n.interaction.start, n.interaction.current), Xe = [
          ...w === "cutout" ? P().filter((Ye) => !U(Ye)) : [...S()],
          ...A(),
          ...D()
        ].filter((Ye) => oe(at, Ne(Ye)));
        qe(Xe, ((Je = Xe[Xe.length - 1]) == null ? void 0 : Je.id) || null), d && Xe.length && (n.cutoutAspectOpen = !1), rr(), Wn(), Ae();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((et = n.interaction) == null ? void 0 : et.kind))
        n.interaction.changed && (Ce(), de(), rr());
      else if (n.interaction && n.interaction.kind !== "view") {
        let at = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (at = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (at = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (at = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (at = !0), at && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? be({ rebuildPaintEngine: !0 }) : te()), Ce(), ie(), o.setDirtyCanvas(!0, !0), Ls(), Wn(), Ae();
      }
      n.interaction = null, (De == null ? void 0 : De.kind) === "roll_frame" && ke(), xe(), De && De.kind === "view" && Br(() => h.endDrag(performance.now())), Gi(), Wn(), Mt(n.pointerPos), Ae();
    }
  }
  function Ws() {
    var De, Te, Pe, vt, tt;
    if (!ve()) {
      if (((De = n.interaction) == null ? void 0 : De.kind) === "world_select" || ((Te = n.interaction) == null ? void 0 : Te.kind) === "world_gizmo") {
        Eo(n.interaction);
        return;
      }
      if (((Pe = n.interaction) == null ? void 0 : Pe.kind) === "view" && Br(() => h.endDrag(performance.now())), ((vt = n.interaction) == null ? void 0 : vt.kind) === "paint_stroke" || ((tt = n.interaction) == null ? void 0 : tt.kind) === "paint_lasso_fill") {
        xe();
        const Nt = he(n.interaction);
        Nt && n.paintEngine.cancelActiveStroke(Nt);
      }
      n.interaction = null, xe(), Gi(), Mt(n.pointerPos), Ae({ localOnly: !0 });
    }
  }
  function Us(De) {
    const Te = Fe(De), Pe = At(Te, !0);
    n.interaction || (Mt(Te), Pe && n.mode === "frame" && n.primaryTool === "cursor" && Ae({ localOnly: !0, reason: pt.OVERLAY }));
  }
  function ec(De) {
    if (n.mode === "frame") {
      const Te = Fe(De), Pe = Ya(De);
      Pe && nr(), Pe && pe() ? Vs(Te, -Pe) : Pe && $s(Te, Pe) && Ae({ localOnly: !0 }), De.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (ue(), W()) {
        const Te = Ya(De);
        Te && zs(Fe(De), -Te);
      } else h.applyWheelEvent(De) && Ae({ localOnly: !0, reason: pt.VIEW });
      De.preventDefault();
    }
  }
  return {
    connect(De) {
      ({
        _segmentFrameLassoFill: m,
        _segmentFrameStroke: b,
        appendLassoPoint: V,
        appendPaintPoint: T,
        applyRasterObjectOffset: ee,
        applyRasterObjectTransform: I,
        applySharedRollInteractionPoint: X,
        applyStrokeGroupOffset: $,
        applyStrokeGroupTransform: J,
        buildFreehandStrokeRecord: ye,
        buildLassoFillStrokeRecord: _e,
        cameraShoots: me,
        cancelFrameCameraGesture: ve,
        cancelViewTransition: ue,
        clearSelection: we,
        commitAndRefreshNode: de,
        commitPaintInteraction: ne,
        commitState: ie,
        currentSpaceCamera: le,
        cutoutCamera: z,
        dragFrame: C,
        editorViewInput: R,
        ensureGroupFrame: E,
        frameContext: k,
        frameLocalPointToWorldDir: _,
        frameSpaceView: y,
        frameTarget: L,
        getActiveCutoutShot: Z,
        getActivePaintTargetDescriptor: he,
        getCutoutSelectableItems: ge,
        getCutoutSelectableItemsForHit: P,
        getFrameViewLayout: ae,
        getFrameViewRect: g,
        getList: S,
        getMultiSelectionGeom: O,
        getPaintingGroupList: v,
        getRasterObjectCenterUv: j,
        getRasterObjectList: H,
        getSelectableRasterObjectItems: D,
        getSelectableStrokeGroupItems: A,
        getSelected: F,
        getSelectedItems: x,
        getStrokeGroupCenterUv: G,
        getStrokeGroupStrokes: Y,
        getUnwrapRect: fe,
        handleHit: Se,
        hideTooltip: ke,
        hitObjectAt: ce,
        invalidateLivePaintPreviewCaches: xe,
        isCameraSelected: B,
        isFreeFrameView: pe,
        isFreeSpaceView: W,
        isItemLocked: se,
        isRasterObjectItem: K,
        isSceneSticker: q,
        isShotItem: U,
        isSpaceView: N,
        isStickerItem: Q,
        isStrokeGroupItem: M,
        markObjectVisualsDirty: re,
        markPaintCompositeVisualsDirty: te,
        markPaintStrokeVisualsDirty: be,
        objectGeom: Ne,
        paintingShown: Ee,
        parseRasterObjectSelectionId: Ve,
        playback: We,
        poseOf: Ge,
        pushHistory: Ce,
        rectFromPoints: ze,
        rectIntersectsGeom: oe,
        refreshPaintEngineRevisionCache: Ie,
        requestDraw: Ae,
        screenPos: Fe,
        screenPosCss: je,
        screenPosToErpPoint: He,
        screenPosToFrameAsErpPoint: Ue,
        screenToWorldDir: ft,
        selectWorldSticker: yt,
        selectedWorldSticker: Dt,
        setPointerPos: At,
        setSelectedItem: An,
        setSelectedItems: qe,
        setSpaceView: ln,
        shortestWrappedDelta: Ut,
        spaceViewState: hi,
        startAnimation: Br,
        startCameraPress: mi,
        startFrameDrag: sn,
        startPanFrame: bn,
        startSpaceDrag: Yr,
        stickerById: hr,
        stopTimelinePlayback: nr,
        supportsErpPainting: Ts,
        supportsFramePainting: Hi,
        syncCutoutShot: Po,
        syncFloatingViewButtonState: Ao,
        syncFrameRollKnob: Ds,
        syncSidePanelControls: Ls,
        syncTimeline: Rs,
        syncViewToggleState: Gi,
        updateCursor: Mt,
        updateSelectionMenu: Wn,
        updateSidePanel: rr,
        viewControls: Co,
        writePose: Vn,
        zoomFrameAt: Vs,
        zoomFrameViewAt: $s,
        zoomSpaceAt: zs
      } = De);
    },
    onCanvasPointerDown: Zl,
    worldGizmoPointer: Xr,
    hoverWorldGizmo: Io,
    onCanvasPointerMove: Gs,
    onCanvasPointerUp: Ks,
    onCanvasPointerCancel: Ws,
    onCanvasMouseMove: Us,
    onCanvasWheel: ec
  };
}
function sC(e) {
  const {
    cameraV2: t,
    coverageWidget: r,
    editor: n,
    node: i,
    previewMode: o,
    runtime: s,
    shotEditor: a,
    state: l,
    studio: c,
    type: d,
    uiState: u
  } = e;
  let f, p, w, h, m, b, V, T, ee, I, X, $, J, ye, _e, me, ve, ue, we, de, ne, ie, le, z, C, R, E, k, _, y, L, Z;
  function he(S, O, v = !1) {
    var G;
    C();
    const j = a && n.mode === "frame" ? V() : null, H = j || I(), D = j ? "shot" : $(), A = le();
    if (A && !L(A) || !A && (!H || D === "stroke" || J(H))) return;
    const F = (((G = u.sidePanel) == null ? void 0 : G.params) || []).find((Y) => Y.key === S);
    if (!F || F.enabled === !1) return;
    let x = Number(O);
    if (Number.isNaN(x) && (x = 0), (A || t) && t2.has(S) ? x = S === "scale" ? Math.max(x, x0) : x : x = Oe(x, Number(F.min), Number(F.max)), S === "yaw_deg" && (x = Gt(x)), !A && t && S.startsWith("position_")) {
      E(), yS(l.camera, n.frame, S, x), y(), ne(), v && we();
      return;
    }
    if (A) {
      SS(A, n.frame, S, x), me(), y(), ne(), v && we();
      return;
    }
    S === "opacity" ? bS(H, n.frame, x / 100) : Z(H, { [S]: x }), a && !ye(H) && (S === "hFOV_deg" || S === "vFOV_deg") && (H.aspect_id = Ei(H)), y(), ne(), v && we();
  }
  function ge(S, O) {
    var j, H;
    const v = le() || I();
    !Xt(v) || ((H = (j = u.sidePanel) == null ? void 0 : j.upstream) == null ? void 0 : H.disabled) !== !1 || v[S] === O || (C(), v[S] = O, de(), me(), we(), m(), y(), _(), ne());
  }
  async function P(S) {
    var j, H, D, A, F, x, G;
    const O = S.target.closest("[data-action]");
    if (!O) return;
    const v = String(O.getAttribute("data-action") || "");
    if (v === "coverage-set") {
      const Y = Rn(O.getAttribute("data-coverage"));
      if (Y === Rn(l.coverage)) return;
      l.coverage = Y, n.coverage = Y, r && (r.value = String(Y)), o ? s.backgroundDirty = !0 : (b(), R({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), y(), _(), ne();
      return;
    }
    if (v === "revert-handoff-lane") {
      C(), ie(String(O.getAttribute("data-lane") || ""));
      return;
    }
    if (v === "upstream-visible" || v === "upstream-locked") {
      ge(v === "upstream-visible" ? "visible" : "locked", O.getAttribute("data-value") === "1");
      return;
    }
    if (v === "toggle-selection-picker") {
      if ((H = (j = u.sidePanel) == null ? void 0 : j.selectionPicker) != null && H.disabled) return;
      u.sidePanel.selectionPicker.open = !u.sidePanel.selectionPicker.open;
      return;
    }
    if (v === "select-picker-item") {
      u.sidePanel.selectionPicker.open = !1;
      const Y = String(O.getAttribute("data-selection-id") || "");
      let fe = null;
      if (Y && (d === "stickers" ? fe = [...ee(), ...c ? l.shots : []].find((Se) => String((Se == null ? void 0 : Se.id) || "") === Y) || null : fe = ((D = T().find((Se) => {
        var ke;
        return String(((ke = Se == null ? void 0 : Se.item) == null ? void 0 : ke.id) || "") === Y;
      })) == null ? void 0 : D.item) || null), z(fe || null), fe && !_e(fe)) {
        const Se = ue(fe);
        k(Gt(Number(Se.yaw_deg || 0)), Oe(Number(Se.pitch_deg || 0), -89.9, 89.9));
      }
      y(), _(), ne();
      return;
    }
    if (v === "copy-state-inline") {
      const Y = I(), fe = $();
      if (!Y || fe === "stroke" || X().length > 1) return;
      const Se = JSON.stringify(a && fe !== "image" ? p(Y) : w(ue(Y)));
      try {
        await navigator.clipboard.writeText(Se), (A = u.sidePanel) != null && A.copyStateButton && (u.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var ke;
          (ke = u.sidePanel) != null && ke.copyStateButton && (u.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (v === "set-invert-x") {
      l.ui_settings.invert_view_x = O.getAttribute("data-value") === "1", ve(), y(), (F = i.setDirtyCanvas) == null || F.call(i, !0, !0), ne();
      return;
    }
    if (v === "set-invert-y") {
      l.ui_settings.invert_view_y = O.getAttribute("data-value") === "1", ve(), y(), (x = i.setDirtyCanvas) == null || x.call(i, !0, !0), ne();
      return;
    }
    if (v === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, ve(), y(), (G = i.setDirtyCanvas) == null || G.call(i, !0, !0), ne();
      return;
    }
    if (v === "close-preview") {
      h();
      return;
    }
    if (v === "cancel-close") {
      h();
      return;
    }
    v === "save-close" && (f(), h());
  }
  function ae(S) {
    const O = S.target.closest("[data-action='param-input']");
    O && he(String(O.getAttribute("data-param-key") || ""), O.value, !1);
  }
  function g(S) {
    const O = S.target.closest("[data-action='param-input']");
    O && he(String(O.getAttribute("data-param-key") || ""), O.value, !0);
  }
  return {
    connect(S) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: p,
        buildCanonicalSelectedStickerState: w,
        closeEditor: h,
        commitAndRefreshNode: m,
        commitState: b,
        getActiveCutoutShot: V,
        getCutoutInspectorItems: T,
        getList: ee,
        getSelected: I,
        getSelectedItems: X,
        getSelectedKind: $,
        isItemLocked: J,
        isSceneSticker: ye,
        isStrokeGroupItem: _e,
        markObjectVisualsDirty: me,
        persistUiSettings: ve,
        poseOf: ue,
        pushHistory: we,
        releaseHiddenSelection: de,
        requestDraw: ne,
        revertPortHandoffLane: ie,
        selectedWorldSticker: le,
        setSelectedItem: z,
        stopTimelinePlayback: C,
        syncCoverageChangeToNodePreviews: R,
        syncCutoutShot: E,
        turnViewTo: k,
        updateSelectionMenu: _,
        updateSidePanel: y,
        worldStickerEditable: L,
        writePose: Z
      } = S);
    },
    onSidePanelClick: P,
    onSidePanelInput: ae,
    onSidePanelChange: g
  };
}
function aC(e) {
  const {
    editor: t,
    node: r,
    overlay: n,
    paintColorPop: i,
    paintColorSv: o,
    paintHueStrip: s,
    readOnly: a,
    root: l,
    runtime: c,
    shotEditor: d,
    tooltip: u,
    uiState: f,
    videoEl: p
  } = e;
  let w, h, m, b, V, T, ee, I, X, $, J, ye, _e, me, ve, ue, we, de, ne, ie, le, z, C, R, E, k, _, y, L, Z, he, ge, P, ae, g, S, O, v, j, H, D, A, F, x, G, Y, fe, Se, ke, ce, xe;
  const B = () => {
    if (!t.customPaintSessionStart) return;
    if (_l(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (b2(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const Ce = [
      zn(t.customPaintColor),
      ...t.customPaintHistory.filter((ze) => !_l(ze, t.customPaintColor))
    ];
    t.customPaintHistory = Ce.slice(0, 8), t.customPaintSessionStart = null;
  }, pe = (Ce = !1) => {
    !i || i.hidden || (Ce ? B() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, W = () => {
    i && (i.hidden && (t.customPaintSessionStart = zn(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function se() {
    j();
  }
  function K(Ce) {
    var ft, yt, Dt, At, An;
    if ((yt = (ft = Ce.target) == null ? void 0 : ft.matches) != null && yt.call(ft, "[data-confirm-overlay]")) {
      const qe = (Dt = f.confirmDialog) == null ? void 0 : Dt.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, qe == null || qe(!1);
      return;
    }
    const ze = Ce.target.closest("[data-space-mode]");
    if (ze) {
      ae(ze.getAttribute("data-space-mode"));
      return;
    }
    const oe = Ce.target.closest("[data-gizmo-mode]");
    if (oe) {
      t.gizmoMode = oe.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, ke(), y({ localOnly: !0, reason: pt.VIEW });
      return;
    }
    const Ie = Ce.target.closest("[data-view]");
    if (Ie) {
      if (Ie.getAttribute("aria-disabled") === "true") return;
      const qe = t.mode;
      t.mode = String(Ie.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (qe !== "frame" && (c.frameSafeRect = null), ce(), ke()), me(), F(), y();
      return;
    }
    const Ae = Ce.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ae && !a) {
      if (Ae.matches("[data-tool-mode]")) {
        const qe = String(Ae.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = qe, (qe === "paint" || qe === "mask") && X({ preservePanelValues: !0 }), H(), ce(), ke(), y();
        return;
      }
      if (Ae.matches("[data-tool-ui-action]")) {
        const qe = String(Ae.getAttribute("data-tool-ui-action") || "");
        if ((qe === "undo" || qe === "redo") && Ae.disabled) return;
        qe === "undo" ? L(-1) : qe === "redo" ? L(1) : qe === "clear" ? ee() : qe === "add" || qe === "add-image" ? h() : qe === "add-world" ? b() : qe === "add-or-look" ? w() : qe === "add-camera" && m();
        return;
      }
      if (Ae.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const qe = String(Ae.getAttribute("data-paint-tool") || "pen");
        t.paintTool = qe, X({ preservePanelValues: !0 }), Fn[qe] && (t.activeBrushPresetId = qe), H(), ce(), ke(), y();
        return;
      }
      if (Ae.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ae.getAttribute("data-mask-tool") || "pen"), X({ preservePanelValues: !0 }), H(), ce(), ke(), y();
        return;
      }
      if (Ae.matches("[data-paint-layer-clear-current]")) {
        const qe = String(Ae.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        I(qe);
        return;
      }
      if (Ae.matches("[data-paint-color-swatch]")) {
        const qe = Xl.find((ln) => ln.id === Ae.getAttribute("data-paint-color-swatch"));
        if (!qe) return;
        t.paintColor = zn(qe.color), pe(!0), H();
        return;
      }
      if (Ae.matches("[data-paint-color-custom]")) {
        Ce.preventDefault(), Ce.stopPropagation(), i && !i.hidden ? pe(!0) : W(), H();
        return;
      }
    }
    const Fe = String(((At = Ae == null ? void 0 : Ae.getAttribute) == null ? void 0 : At.call(Ae, "data-action")) || "");
    if (Fe === "video-play-toggle") {
      if (Ce.preventDefault(), Ce.stopPropagation(), !(p instanceof HTMLVideoElement)) return;
      xe.resumeAfterScrub = !1, x();
      return;
    }
    if (Fe === "video-audio-toggle") {
      Ce.preventDefault(), Ce.stopPropagation(), fe(), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (Fe === "video-loop-toggle") {
      if (Ce.preventDefault(), Ce.stopPropagation(), !(p instanceof HTMLVideoElement)) return;
      const qe = !f.videoTransport.loop;
      f.videoTransport.loop = qe, p.loop = qe, A({
        hasAudio: f.videoTransport.hasAudio,
        loop: qe,
        muted: p.muted,
        volume: Number(p.volume ?? f.videoTransport.volume ?? 1)
      }), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (!a) {
      if (Fe === "frame-aspect") {
        f.frameRail.aspectOpen = !f.frameRail.aspectOpen;
        return;
      }
      if (Fe === "frame-aspect-set") {
        const qe = t.mode === "frame" ? ue() : null;
        if (!qe || qe.locked === !0) return;
        P(qe, String(Ae.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, D(), E(), $(), F(), ce(), ke(), y();
        return;
      }
      if (Fe === "frame-aspect-custom") {
        const qe = t.mode === "frame" ? ue() : null, ln = Ae.getAttribute("data-custom-width"), Ut = Ae.getAttribute("data-custom-height");
        if (!qe || !V(qe, ln, Ut)) return;
        f.frameRail.aspectOpen = !1, D(), E(), $(), F(), y();
        return;
      }
      if (Fe === "frame-rotate-90") {
        const qe = t.mode === "frame" ? ue() : null;
        if (!qe || qe.locked === !0) return;
        he(qe), f.frameRail.aspectOpen = !1, D(), E(), $(), F(), y();
        return;
      }
      if (Fe === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, ke(), y();
        return;
      }
      if (Fe === "aspect-set") {
        const qe = de();
        if (!qe) return;
        const ln = String(Ae.getAttribute("data-aspect") || "1:1");
        P(qe, ln), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, D(), E(), $(), ke(), y();
        return;
      }
      if (Fe === "rotate-90") {
        const qe = de();
        if (!qe || le()) return;
        he(qe), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, D(), E(), $(), ke(), y();
        return;
      }
      if (Fe === "bring-front") {
        T();
        return;
      }
      if (Fe === "send-back") {
        ge();
        return;
      }
      if (Fe === "duplicate") {
        _e();
        return;
      }
      if (Fe === "replace-image") {
        _();
        return;
      }
      if (Fe === "toggle-lock") {
        Y();
        return;
      }
      if (Fe === "back-initial") {
        Z();
        return;
      }
      if (Fe === "toggle-visible") {
        G();
        return;
      }
      if (Fe === "delete") {
        ye();
        return;
      }
    }
    if (Fe === "reset-view") {
      if (t.mode === "frame") return;
      Se(
        { position: O(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((An = J()) == null ? void 0 : An.radius) || dr },
        { mode: xl(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (Fe === "frame-view") {
      if (!z() || xl(t.spaceMode, t.viewTransition) !== "6dof") return;
      ve();
      return;
    }
    if (Fe === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, P2(r == null ? void 0 : r.id, t.showGrid), se(), y();
      return;
    }
    if (Fe === "toggle-fullscreen") {
      Ce.preventDefault(), Ce.stopPropagation(), Ve();
      return;
    }
    if (Fe === "toggle-output-preview-size") {
      Ce.preventDefault(), Ce.stopPropagation();
      const qe = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = qe, v(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = qe ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), Ge(), y();
      return;
    }
    const je = Ce.target.closest("[data-paint-history-index]");
    if (!je) return;
    const He = Number(je.getAttribute("data-paint-history-index")), Ue = t.customPaintHistory[He];
    Ue && (t.customPaintColor = zn(Ue), t.paintColor = zn(Ue), H());
  }
  function q(Ce) {
    const ze = Ce.target.closest("[data-video-seek]");
    if (ze) {
      if (!(p instanceof HTMLVideoElement)) return;
      C.playing && (xe.resumeAfterScrub = !0), C.seek(ki(Number(ze.value || 0), R()));
      return;
    }
    const oe = Ce.target.closest("[data-video-volume]");
    if (oe) {
      if (!(p instanceof HTMLVideoElement)) return;
      const Fe = Oe(Number(oe.value || 0), 0, 1);
      p.volume = Fe, p.muted = Fe <= 1e-4, A({
        hasAudio: f.videoTransport.hasAudio,
        muted: p.muted,
        volume: Fe
      });
      return;
    }
    const Ie = Ce.target.closest("[data-paint-size-slider]");
    if (Ie) {
      if (Ie.disabled) return;
      const Fe = Math.max(1, Math.min(120, Math.round(Number(Ie.value)))), je = we(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[je] = Fe, H(), g();
      return;
    }
    const Ae = Ce.target.closest("[data-paint-alpha-slider]");
    if (Ae) {
      const Fe = { ...t.customPaintColor, a: Oe(Number(Ae.value) / 100, 0, 1) };
      t.customPaintColor = zn(Fe), t.paintColor = zn(Fe), H();
    }
  }
  function U(Ce) {
    var ze;
    if (Ce.target.closest("[data-video-seek]")) {
      if (!(p instanceof HTMLVideoElement)) return;
      xe.resumeAfterScrub && C.play(), xe.resumeAfterScrub = !1;
      return;
    }
    if (Ce.target.closest("[data-video-volume]")) {
      typeof ((ze = Ce.target) == null ? void 0 : ze.blur) == "function" && Ce.target.blur();
      return;
    }
    Ce.target.closest("[data-paint-size-slider]") && ne();
  }
  function N(Ce) {
    const ze = Ce.target.closest("[data-tip]");
    !ze || !l.contains(ze) || u.target !== ze && (u.target = ze, u.timer && clearTimeout(u.timer), u.timer = window.setTimeout(() => {
      u.target === ze && S(ze);
    }, 220));
  }
  function Q(Ce) {
    var Ie, Ae;
    const ze = Ce.target.closest("[data-tip]");
    !ze || u.target !== ze || (Ce.relatedTarget instanceof Element ? (Ae = (Ie = Ce.relatedTarget).closest) == null ? void 0 : Ae.call(Ie, "[data-tip]") : null) === ze || ie();
  }
  function M(Ce, ze) {
    var He;
    if (!o) return;
    const oe = o.getBoundingClientRect(), Ie = Oe((Ce - oe.left) / Math.max(1, oe.width), 0, 1), Ae = 1 - Oe((ze - oe.top) / Math.max(1, oe.height), 0, 1), Fe = Lu(t.customPaintColor), je = { ...Du(Fe.h, Ie, Ae), a: Number(((He = t.customPaintColor) == null ? void 0 : He.a) ?? 1) };
    t.customPaintColor = zn(je), t.paintColor = zn(je), H();
  }
  function re(Ce) {
    var Fe;
    if (!s) return;
    const ze = s.getBoundingClientRect(), oe = Oe((Ce - ze.left) / Math.max(1, ze.width), 0, 1), Ie = Lu(t.customPaintColor), Ae = { ...Du(oe, Ie.s, Ie.v), a: Number(((Fe = t.customPaintColor) == null ? void 0 : Fe.a) ?? 1) };
    t.customPaintColor = zn(Ae), t.paintColor = zn(Ae), H();
  }
  function te(Ce, ze) {
    const oe = Ce.pointerId;
    ze(Ce);
    const Ie = (Fe) => {
      Fe.pointerId === oe && ze(Fe);
    }, Ae = (Fe) => {
      Fe.pointerId === oe && (window.removeEventListener("pointermove", Ie), window.removeEventListener("pointerup", Ae), window.removeEventListener("pointercancel", Ae));
    };
    window.addEventListener("pointermove", Ie), window.addEventListener("pointerup", Ae), window.addEventListener("pointercancel", Ae);
  }
  function be() {
    const Ce = !!t.fullscreen;
    no(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: Ce ? Ke.fullscreen_close : Ke.fullscreen,
      label: Ce ? "Exit Fullscreen" : "Fullscreen",
      tip: Ce ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Ne(Ce) {
    const ze = !!Ce;
    t.fullscreen !== ze && (t.fullscreen = ze, l.classList.toggle("pano-modal-fullscreen", ze), ze ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), se(), be(), k(), y());
  }
  function Ee() {
    return document.fullscreenElement === n;
  }
  async function Ve() {
    var Ce, ze;
    try {
      if (!document.fullscreenEnabled) {
        Ne(!t.fullscreen);
        return;
      }
      Ee() ? await ((ze = document.exitFullscreen) == null ? void 0 : ze.call(document)) : await ((Ce = n.requestFullscreen) == null ? void 0 : Ce.call(n));
    } catch {
      Ne(!t.fullscreen);
    }
  }
  function We() {
    document.fullscreenEnabled && Ne(Ee());
  }
  function Ge() {
    const Ce = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = Ce ? Ke.fullscreen_close : Ke.fullscreen, f.outputPreviewToggle.label = Ce ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = Ce ? "Reduce preview" : "Expand preview";
  }
  return {
    connect(Ce) {
      ({
        addCutoutFrame: w,
        addImageSticker: h,
        addStudioCamera: m,
        addWorldImageSticker: b,
        applyCutoutAspectCustom: V,
        bringSelectedToFront: T,
        clearAll: ee,
        clearPaintingLayer: I,
        clearSelection: X,
        commitAndRefreshNode: $,
        contentSphere: J,
        deleteSelected: ye,
        duplicateSelected: _e,
        forceCursorTool: me,
        frameSpaceContent: ve,
        getActiveCutoutShot: ue,
        getBrushPresetIdForTool: we,
        getSelected: de,
        hidePaintSizePreview: ne,
        hideTooltip: ie,
        isErpCamera: le,
        isFreeSpaceView: z,
        playback: C,
        playbackFps: R,
        pushHistory: E,
        queueVideoTransportLayout: k,
        replaceSelectedImage: _,
        requestDraw: y,
        restoreHistory: L,
        restoreSelectedToInitialPose: Z,
        rotateCutoutAspect90: he,
        sendSelectedToBack: ge,
        setShotAspect: P,
        setSpaceMode: ae,
        showPaintSizePreview: g,
        showTooltipFor: S,
        spaceOrigin: O,
        startAnimation: v,
        syncFloatingViewButtonState: j,
        syncPaintUi: H,
        syncSidePanelControls: D,
        syncVideoTransportState: A,
        syncViewToggleState: F,
        togglePlayback: x,
        toggleSelectedExternalStickerVisibility: G,
        toggleSelectedLock: Y,
        toggleVideoMuted: fe,
        transitionView: Se,
        updateSelectionMenu: ke,
        updateSidePanel: ce,
        videoState: xe
      } = Ce);
    },
    closePaintColorPop: pe,
    syncGridToggleButton: se,
    onRootClick: K,
    onRootInput: q,
    onRootChange: U,
    onRootPointerOver: N,
    onRootPointerOut: Q,
    updatePaintColorFromSv: M,
    updatePaintColorFromHue: re,
    bindDrag: te,
    syncFullscreenButton: be,
    setFullscreenState: Ne,
    onFullscreenChange: We,
    syncOutputPreviewToggleButton: Ge
  };
}
function lC(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: s
  } = e;
  let a, l, c, d, u, f, p, w, h, m, b, V, T, ee, I, X;
  const $ = kA();
  function J(k) {
    var _, y, L, Z, he;
    if (k.key === "Escape") {
      if (l()) {
        k.preventDefault(), k.stopPropagation(), (_ = k.stopImmediatePropagation) == null || _.call(k);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        k.preventDefault(), k.stopPropagation(), (y = k.stopImmediatePropagation) == null || y.call(k), (L = document.exitFullscreen) == null || L.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        k.preventDefault(), k.stopPropagation(), (Z = k.stopImmediatePropagation) == null || Z.call(k), V(!1);
        return;
      }
      k.preventDefault(), k.stopPropagation(), (he = k.stopImmediatePropagation) == null || he.call(k), d();
    }
  }
  function ye(k) {
    const _ = String(k.key || ""), y = String(k.code || ""), L = Number(k.keyCode || 0);
    if (!(_ === "Delete" || y === "Delete" || L === 46) && !(_ === "Backspace" || y === "Backspace" || L === 8)) return;
    const ge = k.target, P = ((ge == null ? void 0 : ge.tagName) || "").toUpperCase();
    if (P === "INPUT" || P === "TEXTAREA" || ge != null && ge.isContentEditable) return;
    if (o.selection) {
      f(), k.preventDefault(), k.stopPropagation();
      return;
    }
    if (p()) {
      k.preventDefault(), k.stopPropagation();
      return;
    }
    m() && (u(), k.preventDefault(), k.stopPropagation());
  }
  function _e(k) {
    if (s.confirmDialog.visible) return !1;
    const _ = k.composedPath()[0];
    if (_ !== document.body && _ !== document.documentElement && !r.contains(_)) return !1;
    const y = ((_ == null ? void 0 : _.tagName) || "").toUpperCase();
    return y === "INPUT" ? !e2.has(String(_.type || "text").toLowerCase()) : y !== "TEXTAREA" && y !== "SELECT" && !(_ != null && _.isContentEditable);
  }
  function me(k) {
    return k.code !== "Space" || k.ctrlKey || k.metaKey || k.altKey || n || !i || !s.timeline.visible ? !1 : _e(k);
  }
  function ve(k) {
    me(k) && (k.preventDefault(), k.stopPropagation(), k.repeat || I());
  }
  function ue(k) {
    me(k) && (k.preventDefault(), k.stopPropagation());
  }
  function we(k) {
    if ($.modifiers(k), !!j0(k.code)) {
      if (!_e(k)) {
        ne(k.code);
        return;
      }
      k.ctrlKey || k.metaKey || (k.preventDefault(), k.stopPropagation(), a() && ($.press(k.code, k.timeStamp), k.repeat || c(), T(() => {
      })));
    }
  }
  function de(k) {
    $.modifiers(k), k.key === "Meta" && ie(), ne(k.code) && (k.preventDefault(), k.stopPropagation());
  }
  function ne(k) {
    return $.release(k) ? ($.held || w(), !0) : !1;
  }
  function ie() {
    $.held && ($.releaseAll(), w());
  }
  function le() {
    document.hidden && ie();
  }
  function z() {
    ie();
  }
  function C(k) {
    const _ = !!(k.ctrlKey || k.metaKey), y = !!k.altKey;
    t.marqueeModifier === _ && t.altModifier === y || (t.marqueeModifier = _, t.altModifier = y, ee(), X(t.pointerPos));
  }
  function R() {
    ie(), t.marqueeModifier = !1, t.altModifier = !1, ee(), X(t.pointerPos);
  }
  function E(k) {
    if (n || !k.ctrlKey && !k.metaKey) return;
    const _ = String(k.key || "").toLowerCase(), y = String(k.code || "");
    if (_ !== "z" && y !== "KeyZ") return;
    const L = k.target, Z = ((L == null ? void 0 : L.tagName) || "").toUpperCase();
    if (Z === "INPUT" || Z === "TEXTAREA" || L != null && L.isContentEditable) return;
    const { canUndo: he, canRedo: ge } = h();
    k.shiftKey && !ge || !k.shiftKey && !he || (b(k.shiftKey ? 1 : -1), k.preventDefault(), k.stopPropagation());
  }
  return {
    connect(k) {
      ({
        canKeyMove: a,
        cancelFrameCameraGesture: l,
        cancelViewTransition: c,
        closeEditor: d,
        deleteSelected: u,
        deleteSelectedKeyframes: f,
        deleteSelectedWorldSticker: p,
        endFrameKeyMove: w,
        getHistoryCapabilities: h,
        getSelected: m,
        restoreHistory: b,
        setFullscreenState: V,
        startAnimation: T,
        syncFrameRollKnob: ee,
        togglePlayback: I,
        updateCursor: X
      } = k);
    },
    moveKeys: $,
    onEscClose: J,
    onDeleteKey: ye,
    onSpaceKey: ve,
    onSpaceKeyUp: ue,
    onMoveKeyDown: we,
    onMoveKeyUp: de,
    onVisibilityChange: le,
    onContextMenu: z,
    onModifierKeyChange: C,
    onWindowBlur: R,
    onUndoRedoKey: E
  };
}
const Wp = /* @__PURE__ */ new Map(), ci = Pg({
  app: cr,
  api: hn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Ou,
    markImageFailed: w0,
    markImageLoading: S0,
    markImageReady: _0
  }
});
function Up(e) {
  if (!Kt(e, "background") || !Kt(e, "external-sticker")) return null;
  const t = ci.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? fi(t[0]) : null;
}
const cC = ci.assetSource, uC = ci.source, dC = ci.uiImage, fC = ci.invalidateUiImage, Bp = ci.loadPreferredExactLinkedImage;
async function pC(e, t, r = {}) {
  var Fo, ef;
  await r0(e, { tolerateOperationFailure: !0 }), ci.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, s = S2(e, t);
  await Hd();
  const a = ga(e, "output_preset"), l = ga(e, "coverage"), c = ga(e, "bg_color"), d = ga(e, QP), u = () => {
    const $e = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Bp(
      e,
      $e,
      () => tt(),
      `background:size:${$e.join("|")}`
    );
  }, f = () => {
    const $e = u();
    return x2($e);
  }, p = ($e = 2048) => {
    const lt = a == null ? void 0 : a.value;
    return w2(lt) ? f() || Math.max(1, Math.round(Number($e || 2048))) : _2(lt, $e);
  }, w = e.__panoSceneStateV2 === !0, h = t === "stickers" && w, m = h && e.__panoStudio === !0, b = m, V = t === "cutout" || m, T = (w ? zm : $m)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: p(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: Rn(l == null ? void 0 : l.value),
    sharedUiSettings: k2(),
    active: Wm(e),
    fps: w ? Up(e) : null
  });
  Gn(e).liveState = T, Gn(e).liveStateVersion = 0;
  let ee = null;
  b ? (ee = T.camera && T.camera.visible !== !1 ? Gm(T.camera, 0) : null, T.shots = ee ? [{ ...ee, position: [...ee.position] }] : [], T.active.selected_shot_id = null) : t === "cutout" && (T.shots = Array.isArray(T.shots) ? T.shots.slice(0, 1) : [], T.shots.length || (T.active.selected_shot_id = null));
  const I = t === "cutout" ? (() => {
    var or;
    const $e = Array.isArray(T.shots) ? T.shots : [], lt = String(((or = T == null ? void 0 : T.active) == null ? void 0 : or.selected_shot_id) || "");
    return $e.find((cn) => String((cn == null ? void 0 : cn.id) || "") === lt) || $e[0] || null;
  })() : null, X = I ? G0(I, !1) : { width: 220, height: 132 }, $ = v0(m ? "studio" : t), J = /* @__PURE__ */ _o({
    stageStatus: sr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: ($.viewButtons || []).map(($e) => ({ ...$e, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Fo = $.spaceButtons) != null && Fo.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: $.spaceButtons, frame: $.spaceFrameButton } : null,
    // Only the Stickers editor of state v2 places images in space.
    toolButtons: ($.toolButtons || []).map(($e) => ({
      ...$e,
      disabled: !1,
      ...$e.key === "add-world" ? { visible: h } : {}
    })),
    floatingButtons: [
      ...($.floatingButtons || []).map(($e) => ({ ...$e, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Ke.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: n,
      aspectOpen: !1,
      aspectIcon: Ke.aspect,
      rotateIcon: Ke.rotate_90,
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
      historyEntries: Array.from({ length: 8 }, ($e, lt) => ({ index: lt, color: null })),
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
      width: X.width,
      height: X.height,
      label: I ? "Loading preview" : "Add Frame to preview"
    }
  }), ye = { frame: /* @__PURE__ */ $a(0), playing: /* @__PURE__ */ $a(!1) }, _e = document.createElement("div");
  document.body.appendChild(_e);
  const me = ({ intent: $e, file: lt } = {}) => {
    if (ar(lt)) {
      if ($e === "add") {
        Ee(lt);
        return;
      }
      if ($e === "add-world") {
        Ve(lt);
        return;
      }
      $e === "replace" && vt(lt);
    }
  }, ve = ({ intent: $e } = {}) => {
  }, ue = nd(JP, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: s,
    shellPreset: $,
    paintSwatches: Xl.map(($e) => ({
      id: $e.id,
      label: $e.label,
      cssColor: Sr($e.color, 1)
    })),
    uiState: J,
    playhead: ye,
    onClose: () => {
      ir();
    },
    onTimeline: ($e) => Ql($e),
    onImageFileSelected: me,
    onImageFileCancelled: ve
  });
  let we = null;
  try {
    we = ue.mount(_e);
  } catch ($e) {
    try {
      ue.unmount();
    } catch {
    }
    throw _e.remove(), $e;
  }
  const de = _e.querySelector(".pano-modal-overlay"), ne = _e.querySelector(".pano-modal"), ie = ne == null ? void 0 : ne.querySelector("[data-stage-overlay]"), le = ne == null ? void 0 : ne.querySelector("[data-stage-background]"), z = ne == null ? void 0 : ne.querySelector(".pano-stage-wrap"), C = ((ef = we == null ? void 0 : we.getPaintOverlayRefs) == null ? void 0 : ef.call(we)) || {}, R = C.cursor || null, E = C.sizePreview || null, k = C.sizeSample || null;
  if (!de || !ne || !ie || !le || !z || !R || !E || !k)
    throw ue.unmount(), _e.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const _ = ie.getContext("2d"), y = ne.querySelector("[data-side]"), L = ne.querySelector("[data-video-element]"), Z = ne.querySelector("[data-port-video-element]");
  pc(ie, "editor.stage-overlay"), pc(le, "editor.stage-background"), $f(L, "editor.video"), $f(Z, "editor.port-video");
  const he = ne.querySelector(".pano-floating-right"), ge = ne.querySelector(".pano-floating-top"), P = ne.querySelector("[data-tool-rail]"), ae = ne.querySelector("[data-frame-rail]"), g = ne.querySelector("[data-frame-roll-knob]"), S = ne.querySelector("[data-paint-dock]"), O = ne.querySelector(".pano-video-transport"), v = ne.querySelector("[data-selection-menu]"), j = ne.querySelector("[data-tooltip]"), H = ne.querySelector("[data-camera-preview-host]"), D = ne.querySelector("[data-camera-preview-canvas]");
  pc(D, "editor.camera-preview");
  const A = ne.querySelector("[data-paint-color-row]"), F = ne.querySelector("[data-paint-color-pop]"), x = ne.querySelector("[data-paint-color-sv]"), G = ne.querySelector("[data-paint-color-sv-cursor]"), Y = ne.querySelector("[data-paint-hue-strip]"), fe = ne.querySelector("[data-paint-hue-handle]");
  z == null || z.removeAttribute("data-stage-ready"), z == null || z.setAttribute("data-stage-loading-kind", "boot"), ie.style.opacity = "1", le.style.opacity = "0", i && (y == null || y.remove(), ne.classList.add("pano-modal-readonly")), ne.addEventListener("pointerdown", () => U.wake(), !0), ne.addEventListener("pointerdown", ($e) => {
    var lt;
    $e.target.closest("[data-frame-roll-knob]") || An(), !$e.target.closest(".pano-picker") && ($e.target.closest("[data-paint-color-row]") || (ne.querySelectorAll(".pano-picker-pop").forEach((or) => {
      or.hidden = !0;
    }), oe(!0), V && ke.cutoutAspectOpen && !$e.target.closest(".pano-aspect-popover") && !$e.target.closest("[data-action='aspect']") && (ke.cutoutAspectOpen = !1, ke.menuMode = "", ke.menuSize.measured = !1, St(), tt()), (lt = J.frameRail) != null && lt.aspectOpen && !$e.target.closest(".pano-frame-aspect-control") && (J.frameRail.aspectOpen = !1)));
  });
  const ke = {
    mode: "pano",
    selectedId: D0(t, T),
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // Panorama Studio with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // or where the editor was last closed on this page (restoreView), and is not saved. Until it moves
    // (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: dr,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // The editor opens in 3DoF, or as it was last closed on this page (restoreView); it is not saved.
    spaceMode: "3dof",
    coverage: Rn(T.coverage),
    historyController: B2(T),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Dr,
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
    showGrid: N2(e == null ? void 0 : e.id, !0),
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
    paintEngine: Rl(),
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
    // Panorama Studio: the id of the world Sticker selected in the space view or on its Timeline row
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
    // The editor's current time, a Timeline frame. Panorama Studio shows and edits its state v2 here.
    frame: 0
  }, ce = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (ke.selectedId = null, T.active.selected_sticker_id = null), ke.selectedIds = ke.selectedId ? [ke.selectedId] : [];
  const xe = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), se = on({ label: "editor.still" });
  se.__panoFrameIdx = 0;
  const K = on({ label: "editor.port-still" });
  K.__panoFrameIdx = 0;
  const q = {
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
  }, U = Fk({
    requestAnimationFrame: ($e) => requestAnimationFrame($e),
    cancelAnimationFrame: ($e) => cancelAnimationFrame($e),
    draw: ($e, lt) => Js($e, lt),
    animating: () => je()
  }), N = Ek({
    requestFrame: ($e) => U.requestFrame($e),
    cancelFrame: ($e) => U.cancelFrame($e),
    tasks: {
      seek: () => ec.seek(ce.scrubFrame),
      timeline: () => qs(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        Pt(), tt({ localOnly: !0, reason: pt.STATE });
      },
      sidePanel: () => vn()
    }
  }), Q = s_({
    canvas: le,
    onReady: () => {
      Bt(), tt({ reason: pt.CONTEXT });
    },
    onFailed: () => tt(),
    onUpdate: () => tt({ localOnly: !0, reason: pt.MEDIA }),
    onSplats: ($e) => tt({ localOnly: !0, reason: GA($e) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      yt(), Bt(), tt({ reason: pt.CONTEXT });
    }
  }), M = Number.parseFloat(
    getComputedStyle(ne).getPropertyValue("--pano-float-radius")
  ) || 10, re = ($e) => {
    const lt = String($e || "default");
    ie.style.cursor !== lt && (ie.style.cursor = lt);
  }, te = {
    timer: 0,
    target: null
  }, be = {
    active: !1,
    depth: 0
  }, Ne = ad({
    getView: () => ({ yaw: ke.viewYaw, pitch: ke.viewPitch, fov: ke.viewFov }),
    setView: ($e) => {
      ke.viewYaw = Gt(Number($e.yaw || 0)), ke.viewPitch = Oe(Number($e.pitch || 0), -89.9, 89.9), ke.viewFov = Oe(Number($e.fov || ke.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const $e = ie.getBoundingClientRect();
      return {
        w: Math.max(1, Number($e.width || ie.clientWidth || 0)),
        h: Math.max(1, Number($e.height || ie.clientHeight || 0))
      };
    },
    getInvert: () => {
      var $e, lt;
      return {
        x: ($e = T.ui_settings) != null && $e.invert_view_x ? -1 : 1,
        y: (lt = T.ui_settings) != null && lt.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => Dt(),
    onInteraction: () => U.requestDraw(pt.VIEW)
  }), {
    addImageStickerFromFile: Ee,
    addWorldStickerFromFile: Ve,
    applyInitialCutoutFocus: We,
    applyVideoTimelineFps: Ge,
    bindDrag: Ce,
    cancelFrameCameraGesture: ze,
    closePaintColorPop: oe,
    commitState: Ie,
    disposeMediaSession: Ae,
    disposeUpstream: Fe,
    editorAnimating: je,
    endFrameKeyMove: He,
    finishKnobRoll: Ue,
    flushFrameWheelCommit: ft,
    forgetCameraPreviewFrame: yt,
    getUnwrapRect: Dt,
    hidePaintSizePreview: At,
    hideTooltip: An,
    hoverWorldGizmo: qe,
    isFreeFrameView: ln,
    isFreeSpaceView: Ut,
    migrateLegacyEmbeddedAssets: hi,
    onCanvasDragOver: Br,
    onCanvasDrop: mi,
    onCanvasMouseMove: sn,
    onCanvasPointerCancel: bn,
    onCanvasPointerDown: Yr,
    onCanvasPointerMove: hr,
    onCanvasPointerUp: nr,
    onCanvasWheel: Ts,
    onContextMenu: Hi,
    onDeleteKey: Po,
    onEscClose: Ao,
    onFrameRollKnobDoubleClick: Ds,
    onFrameRollKnobPointerDown: Ls,
    onFrameRollKnobPointerMove: Rs,
    onFullscreenChange: Gi,
    onModifierKeyChange: Mt,
    onMoveKeyDown: Wn,
    onMoveKeyUp: rr,
    onRootChange: Co,
    onRootClick: Vn,
    onRootInput: Vs,
    onRootPointerOut: $s,
    onRootPointerOver: zs,
    onSidePanelChange: qr,
    onSidePanelClick: Zl,
    onSidePanelInput: Xr,
    onSpaceKey: js,
    onSpaceKeyUp: Io,
    onTimelineAction: Ql,
    onUndoRedoKey: Eo,
    onVisibilityChange: Oo,
    onWindowBlur: Hs,
    onWindowDragEnter: Gs,
    onWindowDragLeave: Ks,
    onWindowDragOver: Ws,
    onWindowDrop: Us,
    playback: ec,
    pushHistory: De,
    reconcileExternalStickerFromInputs: Te,
    refreshModalVideoSource: Pe,
    replaceSelectedImageFromFile: vt,
    requestDraw: tt,
    restoreView: Nt,
    sampleEditorDiagnostics: Je,
    saveView: et,
    setDropCue: at,
    setPointerPos: $n,
    stageResizeObserver: Xe,
    stickerCornerOrderSanity: Ye,
    stopRenderLoop: Qe,
    syncCanvasSize: Bt,
    syncCutoutShot: Pt,
    syncFullscreenButton: Cr,
    syncGridToggleButton: Ki,
    syncLookAtFrameButtonState: Wi,
    syncOutputPreviewToggleButton: Ui,
    syncPaintUi: Bs,
    syncPaintingLayerAsync: Ys,
    syncTimeline: qs,
    syncUndoRedoButtons: Xs,
    tick: Js,
    triggerBackgroundPersistenceOnClose: Zs,
    updateCursor: ct,
    updatePaintColorFromHue: ht,
    updatePaintColorFromSv: gt,
    updateSelectionMenu: St,
    updateSidePanel: vn,
    viewControls: en,
    watchPixelRatio: Cn
  } = A2({
    api: hn,
    app: cr,
    backgroundCanvas: le,
    bgWidget: c,
    cameraV2: b,
    canvas: ie,
    closeEditor: ir,
    comfyMedia: ci,
    coverageWidget: l,
    ctx: _,
    cutoutPreviewCanvas: D,
    cutoutPreviewHost: H,
    dragCue: be,
    dragFrames: N,
    editor: ke,
    editorView: Q,
    floatingRightEl: he,
    floatingTopEl: ge,
    frameGateCssRadius: M,
    frameRailEl: ae,
    frameRollKnobEl: g,
    hideSidebar: i,
    imageCache: xe,
    initialShotBase: ee,
    loadPreferredExactLinkedImage: Bp,
    mediaAssetSource: cC,
    mediaSource: uC,
    mediaUiImage: dC,
    node: e,
    overlay: de,
    paintColorPop: F,
    paintColorRow: A,
    paintColorSv: x,
    paintColorSvCursor: G,
    paintCursorEl: R,
    paintDockEl: S,
    paintHueHandle: fe,
    paintHueStrip: Y,
    paintSizePreviewEl: E,
    paintSizePreviewSampleEl: k,
    portStillCanvas: K,
    portVideoEl: Z,
    presetWidget: a,
    previewMode: o,
    rasterErpCanvasCache: W,
    rasterImageAlphaCache: pe,
    rasterImageCache: B,
    readOnly: n,
    resolveEditorOutputPresetWidth: p,
    root: ne,
    runtime: q,
    sceneV2: h,
    scheduler: U,
    selectionMenu: v,
    setCanvasCursor: re,
    shotEditor: V,
    stageWrap: z,
    state: T,
    stateV2: w,
    stateWidget: d,
    stillCanvas: se,
    studio: m,
    timeline: ce,
    timelinePlayhead: ye,
    toolRailEl: P,
    tooltip: te,
    tooltipEl: j,
    type: t,
    uiState: J,
    videoEl: L,
    videoTimelineFps: Up,
    videoTransportEl: O,
    viewController: Ne,
    vueModal: we
  }, [
    K2,
    Y2,
    q2,
    X2,
    J2,
    Z2,
    Q2,
    eA,
    tA,
    zA,
    jA,
    HA,
    WA,
    UA,
    BA,
    YA,
    qA,
    XA,
    JA,
    ZA,
    QA,
    eC,
    tC,
    nC,
    rC,
    iC,
    oC,
    sC,
    aC,
    lC
  ]);
  Ye(), Xe.observe(ie), Cn();
  const Lt = () => Ie();
  n || (dl(e).flushBeforeQueue = Lt), g == null || g.addEventListener("pointerdown", Ls), g == null || g.addEventListener("pointermove", Rs), g == null || g.addEventListener("pointerup", Ue), g == null || g.addEventListener("pointercancel", () => ze()), g == null || g.addEventListener("lostpointercapture", () => {
    var $e;
    (($e = ke.interaction) == null ? void 0 : $e.source) === "knob" && ze();
  }), g == null || g.addEventListener("dblclick", Ds), ie.onpointerdown = Yr, ie.onpointermove = hr, ie.onpointerup = nr, ie.onpointercancel = bn, ie.onlostpointercapture = () => {
    ze();
  }, ie.onauxclick = ($e) => {
    $e.button === 1 && $e.preventDefault();
  }, ie.oncontextmenu = ($e) => {
    (Ut() || ln()) && nx(en(), 2) && $e.preventDefault();
  }, ie.onmousemove = sn, ie.onpointerleave = () => {
    ke.interaction || qe({ x: -1e6, y: -1e6 });
  }, ie.onmouseleave = () => {
    $n(ke.pointerPos, !1), ct(ke.pointerPos), ke.mode === "frame" && ke.primaryTool === "cursor" && tt({ localOnly: !0, reason: pt.OVERLAY });
  }, ie.onwheel = Ts, ie.ondragover = Br, ie.ondrop = mi, window.addEventListener("dragenter", Gs, !0), window.addEventListener("dragover", Ws, !0), window.addEventListener("dragleave", Ks, !0), window.addEventListener("drop", Us, !0), y == null || y.addEventListener("click", Zl), y == null || y.addEventListener("input", Xr), y == null || y.addEventListener("change", qr), Ki(), ne.addEventListener("click", Vn), ne.addEventListener("input", Vs), ne.addEventListener("change", Co), ne.addEventListener("pointerup", ($e) => {
    var lt;
    if ($e.target.closest("[data-video-volume]")) {
      typeof ((lt = $e.target) == null ? void 0 : lt.blur) == "function" && $e.target.blur();
      return;
    }
    $e.target.closest("[data-paint-size-slider]") && At();
  }), ne.addEventListener("pointercancel", ($e) => {
    var lt;
    if ($e.target.closest("[data-video-volume]")) {
      typeof ((lt = $e.target) == null ? void 0 : lt.blur) == "function" && $e.target.blur();
      return;
    }
    $e.target.closest("[data-paint-size-slider]") && At();
  }), ne.addEventListener("focusout", ($e) => {
    $e.target.closest("[data-paint-size-slider]") && At();
  }), ne.addEventListener("pointerover", zs), ne.addEventListener("pointerout", $s), ne.addEventListener("pointerdown", ($e) => {
    $e.target.closest("[data-frame-roll-knob]") || An();
  }), x && (x.onpointerdown = ($e) => {
    $e.preventDefault(), $e.stopPropagation(), Ce($e, (lt) => gt(lt.clientX, lt.clientY));
  }), Y && (Y.onpointerdown = ($e) => {
    $e.preventDefault(), $e.stopPropagation(), Ce($e, (lt) => ht(lt.clientX));
  }), ne.addEventListener("click", ($e) => {
    var gi;
    const lt = $e.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!lt) return;
    const or = lt.getAttribute("data-action") === "confirm-accept", cn = (gi = J.confirmDialog) == null ? void 0 : gi.resolve;
    J.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, cn == null || cn(or);
  }), document.addEventListener("fullscreenchange", Gi), Cr(), Ui();
  const an = e.onConnectionsChange;
  let rn = null, $t = () => {
  };
  !n && t === "stickers" && ($t = t0(e, ($e = "sync") => {
    $e === "executed" && (fC(xe, Fi), Pe(), h && Ge()), Te($e);
  }, { editor: !0 }), rn = function(...lt) {
    typeof an == "function" && an.apply(this, lt), Pe(), ii(this, "connections");
  }, e.onConnectionsChange = rn), n || Wp.set(String(e.id ?? "0"), () => Ys());
  let Ft = null;
  async function ir() {
    return Ft || (Ft = (async () => {
      var lt, or, cn, gi, Jr, Qs, tf, ea, nf;
      Wp.delete(String(e.id ?? "0")), ft(), He(), n || Ie(), et(), document.fullscreenElement === de && ((lt = document.exitFullscreen) == null || lt.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Gi), Gn(e).liveState = null;
      const $e = S_(e);
      return ($e == null ? void 0 : $e.flushBeforeQueue) === Lt && ($e.flushBeforeQueue = null), (gi = (cn = (or = Mg(e)) == null ? void 0 : or.dom) == null ? void 0 : cn.requestDraw) == null || gi.call(cn), (Qs = (Jr = e.graph) == null ? void 0 : Jr.setDirtyCanvas) == null || Qs.call(Jr, !0, !0), (nf = (ea = (tf = cr) == null ? void 0 : tf.canvas) == null ? void 0 : ea.setDirty) == null || nf.call(ea, !0, !0), An(), N.cancel(), Qe(), Ae(), Fe(), Q.dispose(), at(!1), window.removeEventListener("keydown", Ao, !0), window.removeEventListener("keydown", Po, !0), window.removeEventListener("keydown", js, !0), window.removeEventListener("keyup", Io, !0), window.removeEventListener("keydown", Wn, !0), window.removeEventListener("keyup", rr, !0), document.removeEventListener("visibilitychange", Oo), window.removeEventListener("contextmenu", Hi, !0), window.removeEventListener("keydown", Mt, !0), window.removeEventListener("keyup", Mt, !0), window.removeEventListener("blur", Hs), window.removeEventListener("keydown", Eo, !0), window.removeEventListener("dragenter", Gs, !0), window.removeEventListener("dragover", Ws, !0), window.removeEventListener("dragleave", Ks, !0), window.removeEventListener("drop", Us, !0), !n && t === "stickers" && (e.onConnectionsChange === rn && (e.onConnectionsChange = an), $t()), ue.unmount(), _e.remove(), Zs(), Ft = null, !0;
    })().catch(($e) => (console.error("[PanoramaCutoutSync] closeEditor failed", $e), Ft = null, !1)), Ft);
  }
  window.addEventListener("keydown", Ao, !0), window.addEventListener("keydown", Po, !0), window.addEventListener("keydown", js, !0), window.addEventListener("keyup", Io, !0), window.addEventListener("keydown", Wn, !0), window.addEventListener("keyup", rr, !0), document.addEventListener("visibilitychange", Oo), window.addEventListener("contextmenu", Hi, !0), window.addEventListener("keydown", Mt, !0), window.addEventListener("keyup", Mt, !0), window.addEventListener("blur", Hs), window.addEventListener("keydown", Eo, !0), de.addEventListener("pointerdown", ($e) => {
    $e.target === de && ir();
  });
  function In($e, lt, { rollbackState: or = !1 } = {}) {
    let cn = "";
    try {
      or && (cn = JSON.stringify(T)), lt();
    } catch (gi) {
      if (cn)
        try {
          const Jr = JSON.parse(cn);
          Object.keys(T).forEach((Qs) => delete T[Qs]), Object.assign(T, Jr), n || Ie();
        } catch (Jr) {
          console.error(`[PanoramaStickers] editor boot step "${$e}" rollback failed`, Jr);
        }
      J.stageWarningDetail = `boot:${$e}`, console.error(`[PanoramaStickers] editor boot step "${$e}" failed`, gi);
    }
  }
  In("view", Nt), In("cutout-focus", We), !n && t === "stickers" && In("external-sticker-sync", () => Te("open"), { rollbackState: !0 }), hi().catch(($e) => {
    J.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', $e);
  }), In("history", De), In("undo-redo", Xs), In("paint-ui", Bs), In("side-panel", vn), In("look-at-frame", Wi), In("video-source", Pe), In("canvas-size", Bt), In("cursor", () => ct(ke.pointerPos)), tt(), Je();
}
cr.registerExtension(fx({
  app: cr,
  openEditor: pC,
  attachStickers: Ck,
  attachCutout: Ik,
  attachPreview: Ak,
  restoreOutput: mk,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: r2
}));
