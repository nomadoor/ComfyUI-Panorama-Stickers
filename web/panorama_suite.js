import * as ba from "../../scripts/app.js";
import { app as cr } from "../../scripts/app.js";
import { api as hn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function zu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Tt = {}, oo = [], xr = () => {
}, qp = () => !1, xl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ml = (e) => e.startsWith("onUpdate:"), yn = Object.assign, ju = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, Y0 = Object.prototype.hasOwnProperty, kt = (e, t) => Y0.call(e, t), it = Array.isArray, so = (e) => Ps(e) === "[object Map]", Xp = (e) => Ps(e) === "[object Set]", of = (e) => Ps(e) === "[object Date]", ut = (e) => typeof e == "function", Qt = (e) => typeof e == "string", Pr = (e) => typeof e == "symbol", Ot = (e) => e !== null && typeof e == "object", Jp = (e) => (Ot(e) || ut(e)) && ut(e.then) && ut(e.catch), Zp = Object.prototype.toString, Ps = (e) => Zp.call(e), q0 = (e) => Ps(e).slice(8, -1), Qp = (e) => Ps(e) === "[object Object]", Hu = (e) => Qt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Zo = /* @__PURE__ */ zu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Nl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, X0 = /-\w/g, Mn = Nl(
  (e) => e.replace(X0, (t) => t.slice(1).toUpperCase())
), J0 = /\B([A-Z])/g, $i = Nl(
  (e) => e.replace(J0, "-$1").toLowerCase()
), Pl = Nl((e) => e.charAt(0).toUpperCase() + e.slice(1)), nc = Nl(
  (e) => e ? `on${Pl(e)}` : ""
), _r = (e, t) => !Object.is(e, t), va = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, eh = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Gu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let sf;
const Al = () => sf || (sf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Et(e) {
  if (it(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Qt(n) ? ty(n) : Et(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Qt(e) || Ot(e))
    return e;
}
const Z0 = /;(?![^(]*\))/g, Q0 = /:([^]+)/, ey = /\/\*[^]*?\*\//g;
function ty(e) {
  const t = {};
  return e.replace(ey, "").split(Z0).forEach((r) => {
    if (r) {
      const n = r.split(Q0);
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
const ny = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ry = /* @__PURE__ */ zu(ny);
function th(e) {
  return !!e || e === "";
}
function iy(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = Ku(e[n], t[n]);
  return r;
}
function Ku(e, t) {
  if (e === t) return !0;
  let r = of(e), n = of(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Pr(e), n = Pr(t), r || n)
    return e === t;
  if (r = it(e), n = it(t), r || n)
    return r && n ? iy(e, t) : !1;
  if (r = Ot(e), n = Ot(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (a && !l || !a && l || !Ku(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const nh = (e) => !!(e && e.__v_isRef === !0), tt = (e) => Qt(e) ? e : e == null ? "" : it(e) || Ot(e) && (e.toString === Zp || !ut(e.toString)) ? nh(e) ? tt(e.value) : JSON.stringify(e, rh, 2) : String(e), rh = (e, t) => nh(t) ? rh(e, t.value) : so(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[rc(n, o) + " =>"] = i, r),
    {}
  )
} : Xp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => rc(r))
} : Pr(t) ? rc(t) : Ot(t) && !it(t) && !Qp(t) ? String(t) : t, rc = (e, t = "") => {
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
class oy {
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
function sy() {
  return On;
}
let Lt;
const ic = /* @__PURE__ */ new WeakSet();
class ih {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, On && On.active && On.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ic.has(this) && (ic.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || sh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, af(this), ah(this);
    const t = Lt, r = ur;
    Lt = this, ur = !0;
    try {
      return this.fn();
    } finally {
      lh(this), Lt = t, ur = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Bu(t);
      this.deps = this.depsTail = void 0, af(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ic.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Wc(this) && this.run();
  }
  get dirty() {
    return Wc(this);
  }
}
let oh = 0, Qo, es;
function sh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = es, es = e;
    return;
  }
  e.next = Qo, Qo = e;
}
function Wu() {
  oh++;
}
function Uu() {
  if (--oh > 0)
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
function ah(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function lh(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Bu(n), ay(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function Wc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ch(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ch(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === cs) || (e.globalVersion = cs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Wc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Lt, n = ur;
  Lt = e, ur = !0;
  try {
    ah(e);
    const i = e.fn(e._value);
    (t.version === 0 || _r(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Lt = r, ur = n, lh(e), e.flags &= -3;
  }
}
function Bu(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      Bu(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function ay(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let ur = !0;
const uh = [];
function Hr() {
  uh.push(ur), ur = !1;
}
function Gr() {
  const e = uh.pop();
  ur = e === void 0 ? !0 : e;
}
function af(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = Lt;
    Lt = void 0;
    try {
      t();
    } finally {
      Lt = r;
    }
  }
}
let cs = 0;
class ly {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Yu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Lt || !ur || Lt === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Lt)
      r = this.activeLink = new ly(Lt, this), Lt.deps ? (r.prevDep = Lt.depsTail, Lt.depsTail.nextDep = r, Lt.depsTail = r) : Lt.deps = Lt.depsTail = r, dh(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Lt.depsTail, r.nextDep = void 0, Lt.depsTail.nextDep = r, Lt.depsTail = r, Lt.deps === r && (Lt.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, cs++, this.notify(t);
  }
  notify(t) {
    Wu();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Uu();
    }
  }
}
function dh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        dh(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Uc = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ Symbol(
  ""
), Bc = /* @__PURE__ */ Symbol(
  ""
), us = /* @__PURE__ */ Symbol(
  ""
);
function fn(e, t, r) {
  if (ur && Lt) {
    let n = Uc.get(e);
    n || Uc.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new Yu()), i.map = n, i.key = r), i.track();
  }
}
function Rr(e, t, r, n, i, o) {
  const s = Uc.get(e);
  if (!s) {
    cs++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Wu(), t === "clear")
    s.forEach(a);
  else {
    const l = it(e), c = l && Hu(r);
    if (l && r === "length") {
      const d = Number(n);
      s.forEach((u, f) => {
        (f === "length" || f === us || !Pr(f) && f >= d) && a(u);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && a(s.get(r)), c && a(s.get(us)), t) {
        case "add":
          l ? c && a(s.get("length")) : (a(s.get(Ci)), so(e) && a(s.get(Bc)));
          break;
        case "delete":
          l || (a(s.get(Ci)), so(e) && a(s.get(Bc)));
          break;
        case "set":
          so(e) && a(s.get(Ci));
          break;
      }
  }
  Uu();
}
function Bi(e) {
  const t = /* @__PURE__ */ wt(e);
  return t === e ? t : (fn(t, "iterate", us), /* @__PURE__ */ Zn(e) ? t : t.map(pr));
}
function Cl(e) {
  return fn(e = /* @__PURE__ */ wt(e), "iterate", us), e;
}
function br(e, t) {
  return /* @__PURE__ */ Kr(e) ? ho(/* @__PURE__ */ Ii(e) ? pr(t) : t) : pr(t);
}
const cy = {
  __proto__: null,
  [Symbol.iterator]() {
    return oc(this, Symbol.iterator, (e) => br(this, e));
  },
  concat(...e) {
    return Bi(this).concat(
      ...e.map((t) => it(t) ? Bi(t) : t)
    );
  },
  entries() {
    return oc(this, "entries", (e) => (e[1] = br(this, e[1]), e));
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
    return sc(this, "includes", e);
  },
  indexOf(...e) {
    return sc(this, "indexOf", e);
  },
  join(e) {
    return Bi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return sc(this, "lastIndexOf", e);
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
    return lf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return lf(this, "reduceRight", e, t);
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
    return oc(this, "values", (e) => br(this, e));
  }
};
function oc(e, t, r) {
  const n = Cl(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Zn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const uy = Array.prototype;
function Ir(e, t, r, n, i, o) {
  const s = Cl(e), a = s !== e && !/* @__PURE__ */ Zn(e), l = s[t];
  if (l !== uy[t]) {
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
function lf(e, t, r, n) {
  const i = Cl(e), o = i !== e && !/* @__PURE__ */ Zn(e);
  let s = r, a = !1;
  i !== e && (o ? (a = n.length === 0, s = function(c, d, u) {
    return a && (a = !1, c = br(e, c)), r.call(this, c, br(e, d), u, e);
  }) : r.length > 3 && (s = function(c, d, u) {
    return r.call(this, c, d, u, e);
  }));
  const l = i[t](s, ...n);
  return a ? br(e, l) : l;
}
function sc(e, t, r) {
  const n = /* @__PURE__ */ wt(e);
  fn(n, "iterate", us);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Ju(r[0]) ? (r[0] = /* @__PURE__ */ wt(r[0]), n[t](...r)) : i;
}
function To(e, t, r = []) {
  Hr(), Wu();
  const n = (/* @__PURE__ */ wt(e))[t].apply(e, r);
  return Uu(), Gr(), n;
}
const dy = /* @__PURE__ */ zu("__proto__,__v_isRef,__isVue"), fh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pr)
);
function fy(e) {
  Pr(e) || (e = String(e));
  const t = /* @__PURE__ */ wt(this);
  return fn(t, "has", e), t.hasOwnProperty(e);
}
class ph {
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
      return n === (i ? o ? wy : yh : o ? gh : mh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = it(t);
    if (!i) {
      let l;
      if (s && (l = cy[r]))
        return l;
      if (r === "hasOwnProperty")
        return fy;
    }
    const a = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ gn(t) ? t : n
    );
    if ((Pr(r) ? fh.has(r) : dy(r)) || (i || fn(t, "get", r), o))
      return a;
    if (/* @__PURE__ */ gn(a)) {
      const l = s && Hu(r) ? a : a.value;
      return i && Ot(l) ? /* @__PURE__ */ qc(l) : l;
    }
    return Ot(a) ? i ? /* @__PURE__ */ qc(a) : /* @__PURE__ */ _o(a) : a;
  }
}
class hh extends ph {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const s = it(t) && Hu(r);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Kr(o);
      if (!/* @__PURE__ */ Zn(n) && !/* @__PURE__ */ Kr(n) && (o = /* @__PURE__ */ wt(o), n = /* @__PURE__ */ wt(n)), !s && /* @__PURE__ */ gn(o) && !/* @__PURE__ */ gn(n))
        return c || (o.value = n), !0;
    }
    const a = s ? Number(r) < t.length : kt(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ gn(t) ? t : i
    );
    return t === /* @__PURE__ */ wt(i) && (a ? _r(n, o) && Rr(t, "set", r, n) : Rr(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = kt(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Rr(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Pr(r) || !fh.has(r)) && fn(t, "has", r), n;
  }
  ownKeys(t) {
    return fn(
      t,
      "iterate",
      it(t) ? "length" : Ci
    ), Reflect.ownKeys(t);
  }
}
class py extends ph {
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
const hy = /* @__PURE__ */ new hh(), my = /* @__PURE__ */ new py(), gy = /* @__PURE__ */ new hh(!0);
const Yc = (e) => e, ta = (e) => Reflect.getPrototypeOf(e);
function yy(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ wt(i), s = so(o), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = i[e](...n), d = r ? Yc : t ? ho : pr;
    return !t && fn(
      o,
      "iterate",
      l ? Bc : Ci
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
function by(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ wt(o), a = /* @__PURE__ */ wt(i);
      e || (_r(i, a) && fn(s, "get", i), fn(s, "get", a));
      const { has: l } = ta(s), c = t ? Yc : e ? ho : pr;
      if (l.call(s, i))
        return c(o.get(i));
      if (l.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && fn(/* @__PURE__ */ wt(i), "iterate", Ci), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ wt(o), a = /* @__PURE__ */ wt(i);
      return e || (_r(i, a) && fn(s, "has", i), fn(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, l = /* @__PURE__ */ wt(a), c = t ? Yc : e ? ho : pr;
      return !e && fn(l, "iterate", Ci), a.forEach((d, u) => i.call(o, c(d), c(u), s));
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
        const o = /* @__PURE__ */ wt(this), s = ta(o), a = /* @__PURE__ */ wt(i), l = !t && !/* @__PURE__ */ Zn(i) && !/* @__PURE__ */ Kr(i) ? a : i;
        return s.has.call(o, l) || _r(i, l) && s.has.call(o, i) || _r(a, l) && s.has.call(o, a) || (o.add(l), Rr(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Zn(o) && !/* @__PURE__ */ Kr(o) && (o = /* @__PURE__ */ wt(o));
        const s = /* @__PURE__ */ wt(this), { has: a, get: l } = ta(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ wt(i), c = a.call(s, i));
        const d = l.call(s, i);
        return s.set(i, o), c ? _r(o, d) && Rr(s, "set", i, o) : Rr(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ wt(this), { has: s, get: a } = ta(o);
        let l = s.call(o, i);
        l || (i = /* @__PURE__ */ wt(i), l = s.call(o, i)), a && a.call(o, i);
        const c = o.delete(i);
        return l && Rr(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ wt(this), o = i.size !== 0, s = i.clear();
        return o && Rr(
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
    r[i] = yy(i, e, t);
  }), r;
}
function qu(e, t) {
  const r = by(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    kt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const vy = {
  get: /* @__PURE__ */ qu(!1, !1)
}, Sy = {
  get: /* @__PURE__ */ qu(!1, !0)
}, _y = {
  get: /* @__PURE__ */ qu(!0, !1)
};
const mh = /* @__PURE__ */ new WeakMap(), gh = /* @__PURE__ */ new WeakMap(), yh = /* @__PURE__ */ new WeakMap(), wy = /* @__PURE__ */ new WeakMap();
function ky(e) {
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
function xy(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ky(q0(e));
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  return /* @__PURE__ */ Kr(e) ? e : Xu(
    e,
    !1,
    hy,
    vy,
    mh
  );
}
// @__NO_SIDE_EFFECTS__
function My(e) {
  return Xu(
    e,
    !1,
    gy,
    Sy,
    gh
  );
}
// @__NO_SIDE_EFFECTS__
function qc(e) {
  return Xu(
    e,
    !0,
    my,
    _y,
    yh
  );
}
function Xu(e, t, r, n, i) {
  if (!Ot(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = xy(e);
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
function Ii(e) {
  return /* @__PURE__ */ Kr(e) ? /* @__PURE__ */ Ii(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Kr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Zn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ju(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function wt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ wt(t) : e;
}
function Ny(e) {
  return !kt(e, "__v_skip") && Object.isExtensible(e) && eh(e, "__v_skip", !0), e;
}
const pr = (e) => Ot(e) ? /* @__PURE__ */ _o(e) : e, ho = (e) => Ot(e) ? /* @__PURE__ */ qc(e) : e;
// @__NO_SIDE_EFFECTS__
function gn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
  return bh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function $a(e) {
  return bh(e, !0);
}
function bh(e, t) {
  return /* @__PURE__ */ gn(e) ? e : new Py(e, t);
}
class Py {
  constructor(t, r) {
    this.dep = new Yu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ wt(t), this._value = r ? t : pr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Zn(t) || /* @__PURE__ */ Kr(t);
    t = n ? t : /* @__PURE__ */ wt(t), _r(t, r) && (this._rawValue = t, this._value = n ? t : pr(t), this.dep.trigger());
  }
}
function rt(e) {
  return /* @__PURE__ */ gn(e) ? e.value : e;
}
const Ay = {
  get: (e, t, r) => t === "__v_raw" ? e : rt(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ gn(i) && !/* @__PURE__ */ gn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function vh(e) {
  return /* @__PURE__ */ Ii(e) ? e : new Proxy(e, Ay);
}
class Cy {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Yu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = cs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Lt !== this)
      return sh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ch(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Iy(e, t, r = !1) {
  let n, i;
  return ut(e) ? n = e : (n = e.get, i = e.set), new Cy(n, i, r);
}
const ra = {}, za = /* @__PURE__ */ new WeakMap();
let Mi;
function Ey(e, t = !1, r = Mi) {
  if (r) {
    let n = za.get(r);
    n || za.set(r, n = []), n.push(e);
  }
}
function Oy(e, t, r = Tt) {
  const { immediate: n, deep: i, once: o, scheduler: s, augmentJob: a, call: l } = r, c = (ie) => i ? ie : /* @__PURE__ */ Zn(ie) || i === !1 || i === 0 ? Lr(ie, 1) : Lr(ie);
  let d, u, f, p, w = !1, m = !1;
  if (/* @__PURE__ */ gn(e) ? (u = () => e.value, w = /* @__PURE__ */ Zn(e)) : /* @__PURE__ */ Ii(e) ? (u = () => c(e), w = !0) : it(e) ? (m = !0, w = e.some((ie) => /* @__PURE__ */ Ii(ie) || /* @__PURE__ */ Zn(ie)), u = () => e.map((ie) => {
    if (/* @__PURE__ */ gn(ie))
      return ie.value;
    if (/* @__PURE__ */ Ii(ie))
      return c(ie);
    if (ut(ie))
      return l ? l(ie, 2) : ie();
  })) : ut(e) ? t ? u = l ? () => l(e, 2) : e : u = () => {
    if (f) {
      Hr();
      try {
        f();
      } finally {
        Gr();
      }
    }
    const ie = Mi;
    Mi = d;
    try {
      return l ? l(e, 3, [p]) : e(p);
    } finally {
      Mi = ie;
    }
  } : u = xr, t && i) {
    const ie = u, P = i === !0 ? 1 / 0 : i;
    u = () => Lr(ie(), P);
  }
  const h = sy(), y = () => {
    d.stop(), h && h.active && ju(h.effects, d);
  };
  if (o && t) {
    const ie = t;
    t = (...P) => {
      ie(...P), y();
    };
  }
  let z = m ? new Array(e.length).fill(ra) : ra;
  const T = (ie) => {
    if (!(!(d.flags & 1) || !d.dirty && !ie))
      if (t) {
        const P = d.run();
        if (i || w || (m ? P.some((X, j) => _r(X, z[j])) : _r(P, z))) {
          f && f();
          const X = Mi;
          Mi = d;
          try {
            const j = [
              P,
              // pass undefined as the old value when it's changed for the first time
              z === ra ? void 0 : m && z[0] === ra ? [] : z,
              p
            ];
            z = P, l ? l(t, 3, j) : (
              // @ts-expect-error
              t(...j)
            );
          } finally {
            Mi = X;
          }
        }
      } else
        d.run();
  };
  return a && a(T), d = new ih(u), d.scheduler = s ? () => s(T, !1) : T, p = (ie) => Ey(ie, !1, d), f = d.onStop = () => {
    const ie = za.get(d);
    if (ie) {
      if (l)
        l(ie, 4);
      else
        for (const P of ie) P();
      za.delete(d);
    }
  }, t ? n ? T(!0) : z = d.run() : s ? s(T.bind(null, !0), !0) : d.run(), y.pause = d.pause.bind(d), y.resume = d.resume.bind(d), y.stop = y, y;
}
function Lr(e, t = 1 / 0, r) {
  if (t <= 0 || !Ot(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ gn(e))
    Lr(e.value, t, r);
  else if (it(e))
    for (let n = 0; n < e.length; n++)
      Lr(e[n], t, r);
  else if (Xp(e) || so(e))
    e.forEach((n) => {
      Lr(n, t, r);
    });
  else if (Qp(e)) {
    for (const n in e)
      Lr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Lr(e[n], t, r);
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
    return i && Jp(i) && i.catch((o) => {
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
  Fy(e, r, i, n, s);
}
function Fy(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const wn = [];
let yr = -1;
const ao = [];
let ei = null, Xi = 0;
const Sh = /* @__PURE__ */ Promise.resolve();
let ja = null;
function El(e) {
  const t = ja || Sh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ty(e) {
  let t = yr + 1, r = wn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = wn[n], o = ds(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Zu(e) {
  if (!(e.flags & 1)) {
    const t = ds(e), r = wn[wn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ds(r) ? wn.push(e) : wn.splice(Ty(t), 0, e), e.flags |= 1, _h();
  }
}
function _h() {
  ja || (ja = Sh.then(kh));
}
function Dy(e) {
  it(e) ? ao.push(...e) : ei && e.id === -1 ? ei.splice(Xi + 1, 0, e) : e.flags & 1 || (ao.push(e), e.flags |= 1), _h();
}
function cf(e, t, r = yr + 1) {
  for (; r < wn.length; r++) {
    const n = wn[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      wn.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function wh(e) {
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
function kh(e) {
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
    yr = -1, wn.length = 0, wh(), ja = null, (wn.length || ao.length) && kh();
  }
}
let Hn = null, xh = null;
function Ha(e) {
  const t = Hn;
  return Hn = e, xh = e && e.type.__scopeId || null, t;
}
function Mh(e, t = Hn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && _f(-1);
    const o = Ha(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Ha(o), n._d && _f(1);
    }
    return s;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function jr(e, t) {
  if (Hn === null)
    return e;
  const r = Rl(Hn), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, l = Tt] = t[i];
    o && (ut(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Lr(s), n.push({
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
function vi(e, t, r, n) {
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
function Ry(e, t) {
  if (pn) {
    let r = pn.provides;
    const n = pn.parent && pn.parent.provides;
    n === r && (r = pn.provides = Object.create(n)), r[e] = t;
  }
}
function Sa(e, t, r = !1) {
  const n = Tb();
  if (n || lo) {
    let i = lo ? lo._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && ut(t) ? t.call(n && n.proxy) : t;
  }
}
const Ly = /* @__PURE__ */ Symbol.for("v-scx"), Vy = () => Sa(Ly);
function Ei(e, t, r) {
  return Nh(e, t, r);
}
function Nh(e, t, r = Tt) {
  const { immediate: n, deep: i, flush: o, once: s } = r, a = yn({}, r), l = t && n || !t && o !== "post";
  let c;
  if (ps) {
    if (o === "sync") {
      const p = Vy();
      c = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {
      };
      return p.stop = xr, p.resume = xr, p.pause = xr, p;
    }
  }
  const d = pn;
  a.call = (p, w, m) => Ar(p, d, w, m);
  let u = !1;
  o === "post" ? a.scheduler = (p) => {
    En(p, d && d.suspense);
  } : o !== "sync" && (u = !0, a.scheduler = (p, w) => {
    w ? p() : Zu(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), u && (p.flags |= 2, d && (p.id = d.uid, p.i = d));
  };
  const f = Oy(e, t, a);
  return ps && (c ? c.push(f) : l && f()), f;
}
function $y(e, t, r) {
  const n = this.proxy, i = Qt(e) ? e.includes(".") ? Ph(n, e) : () => n[e] : e.bind(n, n);
  let o;
  ut(t) ? o = t : (o = t.handler, r = t);
  const s = Is(this), a = Nh(i, o.bind(n), r);
  return s(), a;
}
function Ph(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const zy = /* @__PURE__ */ Symbol("_vte"), jy = (e) => e.__isTeleport, Hy = /* @__PURE__ */ Symbol("_leaveCb");
function Qu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Qu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ah(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function uf(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Ga = /* @__PURE__ */ new WeakMap();
function ts(e, t, r, n, i = !1) {
  if (it(e)) {
    e.forEach(
      (m, h) => ts(
        m,
        t && (it(t) ? t[h] : t),
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
  const o = n.shapeFlag & 4 ? Rl(n.component) : n.el, s = i ? null : o, { i: a, r: l } = e, c = t && t.r, d = a.refs === Tt ? a.refs = {} : a.refs, u = a.setupState, f = /* @__PURE__ */ wt(u), p = u === Tt ? qp : (m) => uf(d, m) ? !1 : kt(f, m), w = (m, h) => !(h && uf(d, h));
  if (c != null && c !== l) {
    if (df(t), Qt(c))
      d[c] = null, p(c) && (u[c] = null);
    else if (/* @__PURE__ */ gn(c)) {
      const m = t;
      w(c, m.k) && (c.value = null), m.k && (d[m.k] = null);
    }
  }
  if (ut(l))
    As(l, a, 12, [s, d]);
  else {
    const m = Qt(l), h = /* @__PURE__ */ gn(l);
    if (m || h) {
      const y = () => {
        if (e.f) {
          const z = m ? p(l) ? u[l] : d[l] : w() || !e.k ? l.value : d[e.k];
          if (i)
            it(z) && ju(z, o);
          else if (it(z))
            z.includes(o) || z.push(o);
          else if (m)
            d[l] = [o], p(l) && (u[l] = d[l]);
          else {
            const T = [o];
            w(l, e.k) && (l.value = T), e.k && (d[e.k] = T);
          }
        } else m ? (d[l] = s, p(l) && (u[l] = s)) : h && (w(l, e.k) && (l.value = s), e.k && (d[e.k] = s));
      };
      if (s) {
        const z = () => {
          y(), Ga.delete(e);
        };
        z.id = -1, Ga.set(e, z), En(z, r);
      } else
        df(e), y();
    }
  }
}
function df(e) {
  const t = Ga.get(e);
  t && (t.flags |= 8, Ga.delete(e));
}
Al().requestIdleCallback;
Al().cancelIdleCallback;
const ns = (e) => !!e.type.__asyncLoader, Ch = (e) => e.type.__isKeepAlive;
function Gy(e, t) {
  Ih(e, "a", t);
}
function Ky(e, t) {
  Ih(e, "da", t);
}
function Ih(e, t, r = pn) {
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
      Ch(i.parent.vnode) && Wy(n, t, r, i), i = i.parent;
  }
}
function Wy(e, t, r, n) {
  const i = Ol(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Eh(() => {
    ju(n[t], i);
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
}, Uy = Ur("bm"), Fl = Ur("m"), By = Ur(
  "bu"
), Yy = Ur("u"), Cs = Ur(
  "bum"
), Eh = Ur("um"), qy = Ur(
  "sp"
), Xy = Ur("rtg"), Jy = Ur("rtc");
function Zy(e, t = pn) {
  Ol("ec", e, t);
}
const Qy = "components", Oh = /* @__PURE__ */ Symbol.for("v-ndc");
function eb(e) {
  return Qt(e) ? tb(Qy, e, !1) || e : e || Oh;
}
function tb(e, t, r = !0, n = !1) {
  const i = Hn || pn;
  if (i) {
    const o = i.type;
    {
      const a = $b(
        o,
        !1
      );
      if (a && (a === t || a === Mn(t) || a === Pl(Mn(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      ff(i[e] || o[e], t) || // global registration
      ff(i.appContext[e], t)
    );
    return !s && n ? o : s;
  }
}
function ff(e, t) {
  return e && (e[t] || e[Mn(t)] || e[Pl(Mn(t))]);
}
function Mt(e, t, r, n) {
  let i;
  const o = r, s = it(e);
  if (s || Qt(e)) {
    const a = s && /* @__PURE__ */ Ii(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ Zn(e), c = /* @__PURE__ */ Kr(e), e = Cl(e)), i = new Array(e.length);
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
const Xc = (e) => e ? Qh(e) ? Rl(e) : Xc(e.parent) : null, rs = (
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
    $parent: (e) => Xc(e.parent),
    $root: (e) => Xc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Th(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Zu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = El.bind(e.proxy)),
    $watch: (e) => $y.bind(e)
  })
), ac = (e, t) => e !== Tt && !e.__isScriptSetup && kt(e, t), nb = {
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
        if (ac(n, t))
          return s[t] = 1, n[t];
        if (i !== Tt && kt(i, t))
          return s[t] = 2, i[t];
        if (kt(o, t))
          return s[t] = 3, o[t];
        if (r !== Tt && kt(r, t))
          return s[t] = 4, r[t];
        Jc && (s[t] = 0);
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
    if (r !== Tt && kt(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      u = l.config.globalProperties, kt(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return ac(i, t) ? (i[t] = r, !0) : n !== Tt && kt(n, t) ? (n[t] = r, !0) : kt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: s }
  }, a) {
    let l;
    return !!(r[a] || e !== Tt && a[0] !== "$" && kt(e, a) || ac(t, a) || kt(o, a) || kt(n, a) || kt(rs, a) || kt(i.config.globalProperties, a) || (l = s.__cssModules) && l[a]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : kt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function pf(e) {
  return it(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Jc = !0;
function rb(e) {
  const t = Th(e), r = e.proxy, n = e.ctx;
  Jc = !1, t.beforeCreate && hf(t.beforeCreate, e, "bc");
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
    activated: m,
    deactivated: h,
    beforeDestroy: y,
    beforeUnmount: z,
    destroyed: T,
    unmounted: ie,
    render: P,
    renderTracked: X,
    renderTriggered: j,
    errorCaptured: J,
    serverPrefetch: _e,
    // public API
    expose: ke,
    inheritAttrs: ge,
    // assets
    components: ve,
    directives: he,
    filters: Se
  } = t;
  if (c && ib(c, n, null), s)
    for (const ae in s) {
      const fe = s[ae];
      ut(fe) && (n[ae] = fe.bind(r));
    }
  if (i) {
    const ae = i.call(r, r);
    Ot(ae) && (e.data = /* @__PURE__ */ _o(ae));
  }
  if (Jc = !0, o)
    for (const ae in o) {
      const fe = o[ae], $ = ut(fe) ? fe.bind(r, r) : ut(fe.get) ? fe.get.bind(r, r) : xr, A = !ut(fe) && ut(fe.set) ? fe.set.bind(r) : xr, D = dt({
        get: $,
        set: A
      });
      Object.defineProperty(n, ae, {
        enumerable: !0,
        configurable: !0,
        get: () => D.value,
        set: (ee) => D.value = ee
      });
    }
  if (a)
    for (const ae in a)
      Fh(a[ae], n, r, ae);
  if (l) {
    const ae = ut(l) ? l.call(r) : l;
    Reflect.ownKeys(ae).forEach((fe) => {
      Ry(fe, ae[fe]);
    });
  }
  d && hf(d, e, "c");
  function ne(ae, fe) {
    it(fe) ? fe.forEach(($) => ae($.bind(r))) : fe && ae(fe.bind(r));
  }
  if (ne(Uy, u), ne(Fl, f), ne(By, p), ne(Yy, w), ne(Gy, m), ne(Ky, h), ne(Zy, J), ne(Jy, X), ne(Xy, j), ne(Cs, z), ne(Eh, ie), ne(qy, _e), it(ke))
    if (ke.length) {
      const ae = e.exposed || (e.exposed = {});
      ke.forEach((fe) => {
        Object.defineProperty(ae, fe, {
          get: () => r[fe],
          set: ($) => r[fe] = $,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  P && e.render === xr && (e.render = P), ge != null && (e.inheritAttrs = ge), ve && (e.components = ve), he && (e.directives = he), _e && Ah(e);
}
function ib(e, t, r = xr) {
  it(e) && (e = Zc(e));
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
function hf(e, t, r) {
  Ar(
    it(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Fh(e, t, r, n) {
  let i = n.includes(".") ? Ph(r, n) : () => r[n];
  if (Qt(e)) {
    const o = t[e];
    ut(o) && Ei(i, o);
  } else if (ut(e))
    Ei(i, e.bind(r));
  else if (Ot(e))
    if (it(e))
      e.forEach((o) => Fh(o, t, r, n));
    else {
      const o = ut(e.handler) ? e.handler.bind(r) : t[e.handler];
      ut(o) && Ei(i, o, e);
    }
}
function Th(e) {
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
      const a = ob[s] || r && r[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const ob = {
  data: mf,
  props: gf,
  emits: gf,
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
  watch: ab,
  // provide / inject
  provide: mf,
  inject: sb
};
function mf(e, t) {
  return t ? e ? function() {
    return yn(
      ut(e) ? e.call(this, this) : e,
      ut(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function sb(e, t) {
  return Ho(Zc(e), Zc(t));
}
function Zc(e) {
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
function gf(e, t) {
  return e ? it(e) && it(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yn(
    /* @__PURE__ */ Object.create(null),
    pf(e),
    pf(t ?? {})
  ) : t;
}
function ab(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = yn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = Sn(e[n], t[n]);
  return r;
}
function Dh() {
  return {
    app: null,
    config: {
      isNativeTag: qp,
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
let lb = 0;
function cb(e, t) {
  return function(n, i = null) {
    ut(n) || (n = yn({}, n)), i != null && !Ot(i) && (i = null);
    const o = Dh(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: lb++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: jb,
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
          const p = c._ceVNode || Ye(n, i);
          return p.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(p, d, f), l = !0, c._container = d, d.__vue_app__ = c, Rl(p.component);
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
const ub = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Mn(t)}Modifiers`] || e[`${$i(t)}Modifiers`];
function db(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Tt;
  let i = r;
  const o = t.startsWith("update:"), s = o && ub(n, t.slice(7));
  s && (s.trim && (i = r.map((d) => Qt(d) ? d.trim() : d)), s.number && (i = r.map(Gu)));
  let a, l = n[a = nc(t)] || // also try camelCase event handler (#2249)
  n[a = nc(Mn(t))];
  !l && o && (l = n[a = nc($i(t))]), l && Ar(
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
const fb = /* @__PURE__ */ new WeakMap();
function Rh(e, t, r = !1) {
  const n = r ? fb : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!ut(e)) {
    const l = (c) => {
      const d = Rh(c, t, !0);
      d && (a = !0, yn(s, d));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (Ot(e) && n.set(e, null), null) : (it(o) ? o.forEach((l) => s[l] = null) : yn(s, o), Ot(e) && n.set(e, s), s);
}
function Tl(e, t) {
  return !e || !xl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), kt(e, t[0].toLowerCase() + t.slice(1)) || kt(e, $i(t)) || kt(e, t));
}
function yf(e) {
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
    inheritAttrs: m
  } = e, h = Ha(e);
  let y, z;
  try {
    if (r.shapeFlag & 4) {
      const ie = i || n, P = ie;
      y = vr(
        c.call(
          P,
          ie,
          d,
          u,
          p,
          f,
          w
        )
      ), z = a;
    } else {
      const ie = t;
      y = vr(
        ie.length > 1 ? ie(
          u,
          { attrs: a, slots: s, emit: l }
        ) : ie(
          u,
          null
        )
      ), z = t.props ? a : pb(a);
    }
  } catch (ie) {
    is.length = 0, Il(ie, e, 1), y = Ye(oi);
  }
  let T = y;
  if (z && m !== !1) {
    const ie = Object.keys(z), { shapeFlag: P } = T;
    ie.length && P & 7 && (o && ie.some(Ml) && (z = hb(
      z,
      o
    )), T = mo(T, z, !1, !0));
  }
  return r.dirs && (T = mo(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(r.dirs) : r.dirs), r.transition && Qu(T, r.transition), y = T, Ha(h), y;
}
const pb = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || xl(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, hb = (e, t) => {
  const r = {};
  for (const n in e)
    (!Ml(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function mb(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: s, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? bf(n, s, c) : !!s;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (Lh(s, n, f) && !Tl(c, f))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : n === s ? !1 : n ? s ? bf(n, s, c) : !0 : !!s;
  return !1;
}
function bf(e, t, r) {
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
  return r === "style" && Ot(n) && Ot(i) ? !Ku(n, i) : n !== i;
}
function gb({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const Vh = {}, $h = () => Object.create(Vh), zh = (e) => Object.getPrototypeOf(e) === Vh;
function yb(e, t, r, n = !1) {
  const i = {}, o = $h();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), jh(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ My(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function bb(e, t, r, n) {
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
          if (kt(o, f))
            p !== o[f] && (o[f] = p, c = !0);
          else {
            const w = Mn(f);
            i[w] = Qc(
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
    jh(e, t, i, o) && (c = !0);
    let d;
    for (const u in a)
      (!t || // for camelCase
      !kt(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = $i(u)) === u || !kt(t, d))) && (l ? r && // for camelCase
      (r[u] !== void 0 || // for kebab-case
      r[d] !== void 0) && (i[u] = Qc(
        l,
        a,
        u,
        void 0,
        e,
        !0
      )) : delete i[u]);
    if (o !== a)
      for (const u in o)
        (!t || !kt(t, u)) && (delete o[u], c = !0);
  }
  c && Rr(e.attrs, "set", "");
}
function jh(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let l in t) {
      if (Zo(l))
        continue;
      const c = t[l];
      let d;
      i && kt(i, d = Mn(l)) ? !o || !o.includes(d) ? r[d] = c : (a || (a = {}))[d] = c : Tl(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, s = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ wt(r), c = a || Tt;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      r[u] = Qc(
        i,
        l,
        u,
        c[u],
        e,
        !kt(c, u)
      );
    }
  }
  return s;
}
function Qc(e, t, r, n, i, o) {
  const s = e[r];
  if (s != null) {
    const a = kt(s, "default");
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
    ] && (n === "" || n === $i(r)) && (n = !0));
  }
  return n;
}
const vb = /* @__PURE__ */ new WeakMap();
function Hh(e, t, r = !1) {
  const n = r ? vb : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let l = !1;
  if (!ut(e)) {
    const d = (u) => {
      l = !0;
      const [f, p] = Hh(u, t, !0);
      yn(s, f), p && a.push(...p);
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return Ot(e) && n.set(e, oo), oo;
  if (it(o))
    for (let d = 0; d < o.length; d++) {
      const u = Mn(o[d]);
      vf(u) && (s[u] = Tt);
    }
  else if (o)
    for (const d in o) {
      const u = Mn(d);
      if (vf(u)) {
        const f = o[d], p = s[u] = it(f) || ut(f) ? { type: f } : yn({}, f), w = p.type;
        let m = !1, h = !0;
        if (it(w))
          for (let y = 0; y < w.length; ++y) {
            const z = w[y], T = ut(z) && z.name;
            if (T === "Boolean") {
              m = !0;
              break;
            } else T === "String" && (h = !1);
          }
        else
          m = ut(w) && w.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = m, p[
          1
          /* shouldCastTrue */
        ] = h, (m || kt(p, "default")) && a.push(u);
      }
    }
  const c = [s, a];
  return Ot(e) && n.set(e, c), c;
}
function vf(e) {
  return e[0] !== "$" && !Zo(e);
}
const ed = (e) => e === "_" || e === "_ctx" || e === "$stable", td = (e) => it(e) ? e.map(vr) : [vr(e)], Sb = (e, t, r) => {
  if (t._n)
    return t;
  const n = Mh((...i) => td(t(...i)), r);
  return n._c = !1, n;
}, Gh = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (ed(i)) continue;
    const o = e[i];
    if (ut(o))
      t[i] = Sb(i, o, n);
    else if (o != null) {
      const s = td(o);
      t[i] = () => s;
    }
  }
}, Kh = (e, t) => {
  const r = td(t);
  e.slots.default = () => r;
}, Wh = (e, t, r) => {
  for (const n in t)
    (r || !ed(n)) && (e[n] = t[n]);
}, _b = (e, t, r) => {
  const n = e.slots = $h();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Wh(n, t, r), r && eh(n, "_", i, !0)) : Gh(t, n);
  } else t && Kh(e, t);
}, wb = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, s = Tt;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? r && a === 1 ? o = !1 : Wh(i, t, r) : (o = !t.$stable, Gh(t, i)), s = t;
  } else t && (Kh(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !ed(a) && s[a] == null && delete i[a];
}, En = Pb;
function kb(e) {
  return xb(e);
}
function xb(e, t) {
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
    setScopeId: p = xr,
    insertStaticContent: w
  } = e, m = (g, S, R, x = null, F = null, L = null, I = void 0, N = null, E = !!S.dynamicChildren) => {
    if (g === S)
      return;
    g && !Do(g, S) && (x = ue(g), ee(g, F, L, !0), g = null), S.patchFlag === -2 && (E = !1, S.dynamicChildren = null);
    const { type: _, ref: O, shapeFlag: Q } = S;
    switch (_) {
      case Dl:
        h(g, S, R, x);
        break;
      case oi:
        y(g, S, R, x);
        break;
      case cc:
        g == null && z(S, R, x, I);
        break;
      case Ze:
        ve(
          g,
          S,
          R,
          x,
          F,
          L,
          I,
          N,
          E
        );
        break;
      default:
        Q & 1 ? P(
          g,
          S,
          R,
          x,
          F,
          L,
          I,
          N,
          E
        ) : Q & 6 ? he(
          g,
          S,
          R,
          x,
          F,
          L,
          I,
          N,
          E
        ) : (Q & 64 || Q & 128) && _.process(
          g,
          S,
          R,
          x,
          F,
          L,
          I,
          N,
          E,
          v
        );
    }
    O != null && F ? ts(O, g && g.ref, L, S || g, !S) : O == null && g && g.ref != null && ts(g.ref, null, L, g, !0);
  }, h = (g, S, R, x) => {
    if (g == null)
      n(
        S.el = a(S.children),
        R,
        x
      );
    else {
      const F = S.el = g.el;
      S.children !== g.children && c(F, S.children);
    }
  }, y = (g, S, R, x) => {
    g == null ? n(
      S.el = l(S.children || ""),
      R,
      x
    ) : S.el = g.el;
  }, z = (g, S, R, x) => {
    [g.el, g.anchor] = w(
      g.children,
      S,
      R,
      x,
      g.el,
      g.anchor
    );
  }, T = ({ el: g, anchor: S }, R, x) => {
    let F;
    for (; g && g !== S; )
      F = f(g), n(g, R, x), g = F;
    n(S, R, x);
  }, ie = ({ el: g, anchor: S }) => {
    let R;
    for (; g && g !== S; )
      R = f(g), i(g), g = R;
    i(S);
  }, P = (g, S, R, x, F, L, I, N, E) => {
    if (S.type === "svg" ? I = "svg" : S.type === "math" && (I = "mathml"), g == null)
      X(
        S,
        R,
        x,
        F,
        L,
        I,
        N,
        E
      );
    else {
      const _ = g.el && g.el._isVueCE ? g.el : null;
      try {
        _ && _._beginPatch(), _e(
          g,
          S,
          F,
          L,
          I,
          N,
          E
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, X = (g, S, R, x, F, L, I, N) => {
    let E, _;
    const { props: O, shapeFlag: Q, transition: me, dirs: ye } = g;
    if (E = g.el = s(
      g.type,
      L,
      O && O.is,
      O
    ), Q & 8 ? d(E, g.children) : Q & 16 && J(
      g.children,
      E,
      null,
      x,
      F,
      lc(g, L),
      I,
      N
    ), ye && vi(g, null, x, "created"), j(E, g, g.scopeId, I, x), O) {
      for (const de in O)
        de !== "value" && !Zo(de) && o(E, de, null, O[de], L, x);
      "value" in O && o(E, "value", null, O.value, L), (_ = O.onVnodeBeforeMount) && mr(_, x, g);
    }
    ye && vi(g, null, x, "beforeMount");
    const xe = Mb(F, me);
    xe && me.beforeEnter(E), n(E, S, R), ((_ = O && O.onVnodeMounted) || xe || ye) && En(() => {
      try {
        _ && mr(_, x, g), xe && me.enter(E), ye && vi(g, null, x, "mounted");
      } finally {
      }
    }, F);
  }, j = (g, S, R, x, F) => {
    if (R && p(g, R), x)
      for (let L = 0; L < x.length; L++)
        p(g, x[L]);
    if (F) {
      let L = F.subTree;
      if (S === L || qh(L.type) && (L.ssContent === S || L.ssFallback === S)) {
        const I = F.vnode;
        j(
          g,
          I,
          I.scopeId,
          I.slotScopeIds,
          F.parent
        );
      }
    }
  }, J = (g, S, R, x, F, L, I, N, E = 0) => {
    for (let _ = E; _ < g.length; _++) {
      const O = g[_] = N ? Fr(g[_]) : vr(g[_]);
      m(
        null,
        O,
        S,
        R,
        x,
        F,
        L,
        I,
        N
      );
    }
  }, _e = (g, S, R, x, F, L, I) => {
    const N = S.el = g.el;
    let { patchFlag: E, dynamicChildren: _, dirs: O } = S;
    E |= g.patchFlag & 16;
    const Q = g.props || Tt, me = S.props || Tt;
    let ye;
    if (R && Si(R, !1), (ye = me.onVnodeBeforeUpdate) && mr(ye, R, S, g), O && vi(S, g, R, "beforeUpdate"), R && Si(R, !0), (Q.innerHTML && me.innerHTML == null || Q.textContent && me.textContent == null) && d(N, ""), _ ? ke(
      g.dynamicChildren,
      _,
      N,
      R,
      x,
      lc(S, F),
      L
    ) : I || fe(
      g,
      S,
      N,
      null,
      R,
      x,
      lc(S, F),
      L,
      !1
    ), E > 0) {
      if (E & 16)
        ge(N, Q, me, R, F);
      else if (E & 2 && Q.class !== me.class && o(N, "class", null, me.class, F), E & 4 && o(N, "style", Q.style, me.style, F), E & 8) {
        const xe = S.dynamicProps;
        for (let de = 0; de < xe.length; de++) {
          const we = xe[de], V = Q[we], ce = me[we];
          (ce !== V || we === "value") && o(N, we, V, ce, F, R);
        }
      }
      E & 1 && g.children !== S.children && d(N, S.children);
    } else !I && _ == null && ge(N, Q, me, R, F);
    ((ye = me.onVnodeUpdated) || O) && En(() => {
      ye && mr(ye, R, S, g), O && vi(S, g, R, "updated");
    }, x);
  }, ke = (g, S, R, x, F, L, I) => {
    for (let N = 0; N < S.length; N++) {
      const E = g[N], _ = S[N], O = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === Ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Do(E, _) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 198) ? u(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          R
        )
      );
      m(
        E,
        _,
        O,
        null,
        x,
        F,
        L,
        I,
        !0
      );
    }
  }, ge = (g, S, R, x, F) => {
    if (S !== R) {
      if (S !== Tt)
        for (const L in S)
          !Zo(L) && !(L in R) && o(
            g,
            L,
            S[L],
            null,
            F,
            x
          );
      for (const L in R) {
        if (Zo(L)) continue;
        const I = R[L], N = S[L];
        I !== N && L !== "value" && o(g, L, N, I, F, x);
      }
      "value" in R && o(g, "value", S.value, R.value, F);
    }
  }, ve = (g, S, R, x, F, L, I, N, E) => {
    const _ = S.el = g ? g.el : a(""), O = S.anchor = g ? g.anchor : a("");
    let { patchFlag: Q, dynamicChildren: me, slotScopeIds: ye } = S;
    ye && (N = N ? N.concat(ye) : ye), g == null ? (n(_, R, x), n(O, R, x), J(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      S.children || [],
      R,
      O,
      F,
      L,
      I,
      N,
      E
    )) : Q > 0 && Q & 64 && me && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren && g.dynamicChildren.length === me.length ? (ke(
      g.dynamicChildren,
      me,
      R,
      F,
      L,
      I,
      N
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (S.key != null || F && S === F.subTree) && Uh(
      g,
      S,
      !0
      /* shallow */
    )) : fe(
      g,
      S,
      R,
      O,
      F,
      L,
      I,
      N,
      E
    );
  }, he = (g, S, R, x, F, L, I, N, E) => {
    S.slotScopeIds = N, g == null ? S.shapeFlag & 512 ? F.ctx.activate(
      S,
      R,
      x,
      I,
      E
    ) : Se(
      S,
      R,
      x,
      F,
      L,
      I,
      E
    ) : pe(g, S, E);
  }, Se = (g, S, R, x, F, L, I) => {
    const N = g.component = Fb(
      g,
      x,
      F
    );
    if (Ch(g) && (N.ctx.renderer = v), Db(N, !1, I), N.asyncDep) {
      if (F && F.registerDep(N, ne, I), !g.el) {
        const E = N.subTree = Ye(oi);
        y(null, E, S, R), g.placeholder = E.el;
      }
    } else
      ne(
        N,
        g,
        S,
        R,
        F,
        L,
        I
      );
  }, pe = (g, S, R) => {
    const x = S.component = g.component;
    if (mb(g, S, R))
      if (x.asyncDep && !x.asyncResolved) {
        ae(x, S, R);
        return;
      } else
        x.next = S, x.update();
    else
      S.el = g.el, x.vnode = S;
  }, ne = (g, S, R, x, F, L, I) => {
    const N = () => {
      if (g.isMounted) {
        let { next: Q, bu: me, u: ye, parent: xe, vnode: de } = g;
        {
          const Z = Bh(g);
          if (Z) {
            Q && (Q.el = de.el, ae(g, Q, I)), Z.asyncDep.then(() => {
              En(() => {
                g.isUnmounted || _();
              }, F);
            });
            return;
          }
        }
        let we = Q, V;
        Si(g, !1), Q ? (Q.el = de.el, ae(g, Q, I)) : Q = de, me && va(me), (V = Q.props && Q.props.onVnodeBeforeUpdate) && mr(V, xe, Q, de), Si(g, !0);
        const ce = yf(g), H = g.subTree;
        g.subTree = ce, m(
          H,
          ce,
          // parent may have changed if it's in a teleport
          u(H.el),
          // anchor may have changed if it's in a fragment
          ue(H),
          g,
          F,
          L
        ), Q.el = ce.el, we === null && gb(g, ce.el), ye && En(ye, F), (V = Q.props && Q.props.onVnodeUpdated) && En(
          () => mr(V, xe, Q, de),
          F
        );
      } else {
        let Q;
        const { el: me, props: ye } = S, { bm: xe, m: de, parent: we, root: V, type: ce } = g, H = ns(S);
        Si(g, !1), xe && va(xe), !H && (Q = ye && ye.onVnodeBeforeMount) && mr(Q, we, S), Si(g, !0);
        {
          V.ce && V.ce._hasShadowRoot() && V.ce._injectChildStyle(
            ce,
            g.parent ? g.parent.type : void 0
          );
          const Z = g.subTree = yf(g);
          m(
            null,
            Z,
            R,
            x,
            g,
            F,
            L
          ), S.el = Z.el;
        }
        if (de && En(de, F), !H && (Q = ye && ye.onVnodeMounted)) {
          const Z = S;
          En(
            () => mr(Q, we, Z),
            F
          );
        }
        (S.shapeFlag & 256 || we && ns(we.vnode) && we.vnode.shapeFlag & 256) && g.a && En(g.a, F), g.isMounted = !0, S = R = x = null;
      }
    };
    g.scope.on();
    const E = g.effect = new ih(N);
    g.scope.off();
    const _ = g.update = E.run.bind(E), O = g.job = E.runIfDirty.bind(E);
    O.i = g, O.id = g.uid, E.scheduler = () => Zu(O), Si(g, !0), _();
  }, ae = (g, S, R) => {
    S.component = g;
    const x = g.vnode.props;
    g.vnode = S, g.next = null, bb(g, S.props, x, R), wb(g, S.children, R), Hr(), cf(g), Gr();
  }, fe = (g, S, R, x, F, L, I, N, E = !1) => {
    const _ = g && g.children, O = g ? g.shapeFlag : 0, Q = S.children, { patchFlag: me, shapeFlag: ye } = S;
    if (me > 0) {
      if (me & 128) {
        A(
          _,
          Q,
          R,
          x,
          F,
          L,
          I,
          N,
          E
        );
        return;
      } else if (me & 256) {
        $(
          _,
          Q,
          R,
          x,
          F,
          L,
          I,
          N,
          E
        );
        return;
      }
    }
    ye & 8 ? (O & 16 && Y(_, F, L), Q !== _ && d(R, Q)) : O & 16 ? ye & 16 ? A(
      _,
      Q,
      R,
      x,
      F,
      L,
      I,
      N,
      E
    ) : Y(_, F, L, !0) : (O & 8 && d(R, ""), ye & 16 && J(
      Q,
      R,
      x,
      F,
      L,
      I,
      N,
      E
    ));
  }, $ = (g, S, R, x, F, L, I, N, E) => {
    g = g || oo, S = S || oo;
    const _ = g.length, O = S.length, Q = Math.min(_, O);
    let me;
    for (me = 0; me < Q; me++) {
      const ye = S[me] = E ? Fr(S[me]) : vr(S[me]);
      m(
        g[me],
        ye,
        R,
        null,
        F,
        L,
        I,
        N,
        E
      );
    }
    _ > O ? Y(
      g,
      F,
      L,
      !0,
      !1,
      Q
    ) : J(
      S,
      R,
      x,
      F,
      L,
      I,
      N,
      E,
      Q
    );
  }, A = (g, S, R, x, F, L, I, N, E) => {
    let _ = 0;
    const O = S.length;
    let Q = g.length - 1, me = O - 1;
    for (; _ <= Q && _ <= me; ) {
      const ye = g[_], xe = S[_] = E ? Fr(S[_]) : vr(S[_]);
      if (Do(ye, xe))
        m(
          ye,
          xe,
          R,
          null,
          F,
          L,
          I,
          N,
          E
        );
      else
        break;
      _++;
    }
    for (; _ <= Q && _ <= me; ) {
      const ye = g[Q], xe = S[me] = E ? Fr(S[me]) : vr(S[me]);
      if (Do(ye, xe))
        m(
          ye,
          xe,
          R,
          null,
          F,
          L,
          I,
          N,
          E
        );
      else
        break;
      Q--, me--;
    }
    if (_ > Q) {
      if (_ <= me) {
        const ye = me + 1, xe = ye < O ? S[ye].el : x;
        for (; _ <= me; )
          m(
            null,
            S[_] = E ? Fr(S[_]) : vr(S[_]),
            R,
            xe,
            F,
            L,
            I,
            N,
            E
          ), _++;
      }
    } else if (_ > me)
      for (; _ <= Q; )
        ee(g[_], F, L, !0), _++;
    else {
      const ye = _, xe = _, de = /* @__PURE__ */ new Map();
      for (_ = xe; _ <= me; _++) {
        const K = S[_] = E ? Fr(S[_]) : vr(S[_]);
        K.key != null && de.set(K.key, _);
      }
      let we, V = 0;
      const ce = me - xe + 1;
      let H = !1, Z = 0;
      const G = new Array(ce);
      for (_ = 0; _ < ce; _++) G[_] = 0;
      for (_ = ye; _ <= Q; _++) {
        const K = g[_];
        if (V >= ce) {
          ee(K, F, L, !0);
          continue;
        }
        let M;
        if (K.key != null)
          M = de.get(K.key);
        else
          for (we = xe; we <= me; we++)
            if (G[we - xe] === 0 && Do(K, S[we])) {
              M = we;
              break;
            }
        M === void 0 ? ee(K, F, L, !0) : (G[M - xe] = _ + 1, M >= Z ? Z = M : H = !0, m(
          K,
          S[M],
          R,
          null,
          F,
          L,
          I,
          N,
          E
        ), V++);
      }
      const q = H ? Nb(G) : oo;
      for (we = q.length - 1, _ = ce - 1; _ >= 0; _--) {
        const K = xe + _, M = S[K], te = S[K + 1], k = K + 1 < O ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          te.el || Yh(te)
        ) : x;
        G[_] === 0 ? m(
          null,
          M,
          R,
          k,
          F,
          L,
          I,
          N,
          E
        ) : H && (we < 0 || _ !== q[we] ? D(M, R, k, 2) : we--);
      }
    }
  }, D = (g, S, R, x, F = null) => {
    const { el: L, type: I, transition: N, children: E, shapeFlag: _ } = g;
    if (_ & 6) {
      D(g.component.subTree, S, R, x);
      return;
    }
    if (_ & 128) {
      g.suspense.move(S, R, x);
      return;
    }
    if (_ & 64) {
      I.move(g, S, R, v);
      return;
    }
    if (I === Ze) {
      n(L, S, R);
      for (let Q = 0; Q < E.length; Q++)
        D(E[Q], S, R, x);
      n(g.anchor, S, R);
      return;
    }
    if (I === cc) {
      T(g, S, R);
      return;
    }
    if (x !== 2 && _ & 1 && N)
      if (x === 0)
        N.beforeEnter(L), n(L, S, R), En(() => N.enter(L), F);
      else {
        const { leave: Q, delayLeave: me, afterLeave: ye } = N, xe = () => {
          g.ctx.isUnmounted ? i(L) : n(L, S, R);
        }, de = () => {
          L._isLeaving && L[Hy](
            !0
            /* cancelled */
          ), Q(L, () => {
            xe(), ye && ye();
          });
        };
        me ? me(L, xe, de) : de();
      }
    else
      n(L, S, R);
  }, ee = (g, S, R, x = !1, F = !1) => {
    const {
      type: L,
      props: I,
      ref: N,
      children: E,
      dynamicChildren: _,
      shapeFlag: O,
      patchFlag: Q,
      dirs: me,
      cacheIndex: ye,
      memo: xe
    } = g;
    if (Q === -2 && (F = !1), N != null && (Hr(), ts(N, null, R, g, !0), Gr()), ye != null && (S.renderCache[ye] = void 0), O & 256) {
      S.ctx.deactivate(g);
      return;
    }
    const de = O & 1 && me, we = !ns(g);
    let V;
    if (we && (V = I && I.onVnodeBeforeUnmount) && mr(V, S, g), O & 6)
      b(g.component, R, x);
    else {
      if (O & 128) {
        g.suspense.unmount(R, x);
        return;
      }
      de && vi(g, null, S, "beforeUnmount"), O & 64 ? g.type.remove(
        g,
        S,
        R,
        v,
        x
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (L !== Ze || Q > 0 && Q & 64) ? Y(
        _,
        S,
        R,
        !1,
        !0
      ) : (L === Ze && Q & 384 || !F && O & 16) && Y(E, S, R), x && se(g);
    }
    const ce = xe != null && ye == null;
    (we && (V = I && I.onVnodeUnmounted) || de || ce) && En(() => {
      V && mr(V, S, g), de && vi(g, null, S, "unmounted"), ce && (g.el = null);
    }, R);
  }, se = (g) => {
    const { type: S, el: R, anchor: x, transition: F } = g;
    if (S === Ze) {
      U(R, x);
      return;
    }
    if (S === cc) {
      ie(g);
      return;
    }
    const L = () => {
      i(R), F && !F.persisted && F.afterLeave && F.afterLeave();
    };
    if (g.shapeFlag & 1 && F && !F.persisted) {
      const { leave: I, delayLeave: N } = F, E = () => I(R, L);
      N ? N(g.el, L, E) : E();
    } else
      L();
  }, U = (g, S) => {
    let R;
    for (; g !== S; )
      R = f(g), i(g), g = R;
    i(S);
  }, b = (g, S, R) => {
    const { bum: x, scope: F, job: L, subTree: I, um: N, m: E, a: _ } = g;
    Sf(E), Sf(_), x && va(x), F.stop(), L && (L.flags |= 8, ee(I, g, S, R)), N && En(N, S), En(() => {
      g.isUnmounted = !0;
    }, S);
  }, Y = (g, S, R, x = !1, F = !1, L = 0) => {
    for (let I = L; I < g.length; I++)
      ee(g[I], S, R, x, F);
  }, ue = (g) => {
    if (g.shapeFlag & 6)
      return ue(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const S = f(g.anchor || g.el), R = S && S[zy];
    return R ? f(R) : S;
  };
  let C = !1;
  const W = (g, S, R) => {
    let x;
    g == null ? S._vnode && (ee(S._vnode, null, null, !0), x = S._vnode.component) : m(
      S._vnode || null,
      g,
      S,
      null,
      null,
      null,
      R
    ), S._vnode = g, C || (C = !0, cf(x), wh(), C = !1);
  }, v = {
    p: m,
    um: ee,
    m: D,
    r: se,
    mt: Se,
    mc: J,
    pc: fe,
    pbc: ke,
    n: ue,
    o: e
  };
  return {
    render: W,
    hydrate: void 0,
    createApp: cb(W)
  };
}
function lc({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Si({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Mb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Uh(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (it(n) && it(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = Fr(i[o]), a.el = s.el), !r && a.patchFlag !== -2 && Uh(s, a)), a.type === Dl && (a.patchFlag === -1 && (a = i[o] = Fr(a)), a.el = s.el), a.type === oi && !a.el && (a.el = s.el);
    }
}
function Nb(e) {
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
function Bh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Bh(t);
}
function Sf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Yh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Yh(t.subTree) : null;
}
const qh = (e) => e.__isSuspense;
function Pb(e, t) {
  t && t.pendingBranch ? it(e) ? t.effects.push(...e) : t.effects.push(e) : Dy(e);
}
const Ze = /* @__PURE__ */ Symbol.for("v-fgt"), Dl = /* @__PURE__ */ Symbol.for("v-txt"), oi = /* @__PURE__ */ Symbol.for("v-cmt"), cc = /* @__PURE__ */ Symbol.for("v-stc"), is = [];
let Gn = null;
function Re(e = !1) {
  is.push(Gn = e ? null : []);
}
function Ab() {
  is.pop(), Gn = is[is.length - 1] || null;
}
let fs = 1;
function _f(e, t = !1) {
  fs += e, e < 0 && Gn && t && (Gn.hasOnce = !0);
}
function Xh(e) {
  return e.dynamicChildren = fs > 0 ? Gn || oo : null, Ab(), fs > 0 && Gn && Gn.push(e), e;
}
function Le(e, t, r, n, i, o) {
  return Xh(
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
function Rn(e, t, r, n, i) {
  return Xh(
    Ye(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function Jh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Do(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Zh = ({ key: e }) => e ?? null, _a = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Qt(e) || /* @__PURE__ */ gn(e) || ut(e) ? { i: Hn, r: e, k: t, f: !!r } : e : null);
function Me(e, t = null, r = null, n = 0, i = null, o = e === Ze ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Zh(t),
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
    ctx: Hn
  };
  return a ? (nd(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Qt(r) ? 8 : 16), fs > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Gn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Gn.push(l), l;
}
const Ye = Cb;
function Cb(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === Oh) && (e = oi), Jh(e)) {
    const a = mo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && nd(a, r), fs > 0 && !o && Gn && (a.shapeFlag & 6 ? Gn[Gn.indexOf(e)] = a : Gn.push(a)), a.patchFlag = -2, a;
  }
  if (zb(e) && (e = e.__vccOpts), t) {
    t = Ib(t);
    let { class: a, style: l } = t;
    a && !Qt(a) && (t.class = mt(a)), Ot(l) && (/* @__PURE__ */ Ju(l) && !it(l) && (l = yn({}, l)), t.style = Et(l));
  }
  const s = Qt(e) ? 1 : qh(e) ? 128 : jy(e) ? 64 : Ot(e) ? 4 : ut(e) ? 2 : 0;
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
function Ib(e) {
  return e ? /* @__PURE__ */ Ju(e) || zh(e) ? yn({}, e) : e : null;
}
function mo(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: l } = e, c = t ? Tr(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Zh(c),
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
  return l && n && Qu(
    d,
    l.clone(d)
  ), d;
}
function Go(e = " ", t = 0) {
  return Ye(Dl, null, e, t);
}
function lt(e = "", t = !1) {
  return t ? (Re(), Rn(oi, null, e)) : Ye(oi, null, e);
}
function vr(e) {
  return e == null || typeof e == "boolean" ? Ye(oi) : it(e) ? Ye(
    Ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Jh(e) ? Fr(e) : Ye(Dl, null, String(e));
}
function Fr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : mo(e);
}
function nd(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (it(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), nd(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !zh(t) ? t._ctx = Hn : i === 3 && Hn && (Hn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ut(t) ? (t = { default: t, _ctx: Hn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Go(t)]) : r = 8);
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
      else if (xl(i)) {
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
const Eb = Dh();
let Ob = 0;
function Fb(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Eb, o = {
    uid: Ob++,
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
    scope: new oy(
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
    propsOptions: Hh(n, i),
    emitsOptions: Rh(n, i),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = db.bind(null, o), e.ce && e.ce(o), o;
}
let pn = null;
const Tb = () => pn || Hn;
let Wa, eu;
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
  ), eu = t(
    "__VUE_SSR_SETTERS__",
    (r) => ps = r
  );
}
const Is = (e) => {
  const t = pn;
  return Wa(e), e.scope.on(), () => {
    e.scope.off(), Wa(t);
  };
}, wf = () => {
  pn && pn.scope.off(), Wa(null);
};
function Qh(e) {
  return e.vnode.shapeFlag & 4;
}
let ps = !1;
function Db(e, t = !1, r = !1) {
  t && eu(t);
  const { props: n, children: i } = e.vnode, o = Qh(e);
  yb(e, n, o, t), _b(e, i, r || t);
  const s = o ? Rb(e, t) : void 0;
  return t && eu(!1), s;
}
function Rb(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, nb);
  const { setup: n } = r;
  if (n) {
    Hr();
    const i = e.setupContext = n.length > 1 ? Vb(e) : null, o = Is(e), s = As(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = Jp(s);
    if (Gr(), o(), (a || e.sp) && !ns(e) && Ah(e), a) {
      if (s.then(wf, wf), t)
        return s.then((l) => {
          kf(e, l);
        }).catch((l) => {
          Il(l, e, 0);
        });
      e.asyncDep = s;
    } else
      kf(e, s);
  } else
    em(e);
}
function kf(e, t, r) {
  ut(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ot(t) && (e.setupState = vh(t)), em(e);
}
function em(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || xr);
  {
    const i = Is(e);
    Hr();
    try {
      rb(e);
    } finally {
      Gr(), i();
    }
  }
}
const Lb = {
  get(e, t) {
    return fn(e, "get", ""), e[t];
  }
};
function Vb(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Lb),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Rl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vh(Ny(e.exposed)), {
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
function $b(e, t = !0) {
  return ut(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function zb(e) {
  return ut(e) && "__vccOpts" in e;
}
const dt = (e, t) => /* @__PURE__ */ Iy(e, t, ps), jb = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let tu;
const xf = typeof window < "u" && window.trustedTypes;
if (xf)
  try {
    tu = /* @__PURE__ */ xf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const tm = tu ? (e) => tu.createHTML(e) : (e) => e, Hb = "http://www.w3.org/2000/svg", Gb = "http://www.w3.org/1998/Math/MathML", Or = typeof document < "u" ? document : null, Mf = Or && /* @__PURE__ */ Or.createElement("template"), Kb = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Or.createElementNS(Hb, e) : t === "mathml" ? Or.createElementNS(Gb, e) : r ? Or.createElement(e, { is: r }) : Or.createElement(e);
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
      Mf.innerHTML = tm(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Mf.content;
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
}, Wb = /* @__PURE__ */ Symbol("_vtc");
function Ub(e, t, r) {
  const n = e[Wb];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Ua = /* @__PURE__ */ Symbol("_vod"), nm = /* @__PURE__ */ Symbol("_vsh"), Ri = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[Ua] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Ro(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), Ro(e, !0), n.enter(e)) : n.leave(e, () => {
      Ro(e, !1);
    }) : Ro(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ro(e, t);
  }
};
function Ro(e, t) {
  e.style.display = t ? e[Ua] : "none", e[nm] = !t;
}
const Bb = /* @__PURE__ */ Symbol(""), Yb = /(?:^|;)\s*display\s*:/;
function qb(e, t, r) {
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
      const s = n[Bb];
      s && (r += ";" + s), n.cssText = r, o = Yb.test(r);
    }
  } else t && e.removeAttribute("style");
  Ua in e && (e[Ua] = o ? n.display : "", e[nm] && (n.display = "none"));
}
const Nf = /\s*!important$/;
function wa(e, t, r) {
  if (it(r))
    r.forEach((n) => wa(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = Xb(e, t);
    Nf.test(r) ? e.setProperty(
      $i(n),
      r.replace(Nf, ""),
      "important"
    ) : e[n] = r;
  }
}
const Pf = ["Webkit", "Moz", "ms"], uc = {};
function Xb(e, t) {
  const r = uc[t];
  if (r)
    return r;
  let n = Mn(t);
  if (n !== "filter" && n in e)
    return uc[t] = n;
  n = Pl(n);
  for (let i = 0; i < Pf.length; i++) {
    const o = Pf[i] + n;
    if (o in e)
      return uc[t] = o;
  }
  return t;
}
const Af = "http://www.w3.org/1999/xlink";
function Cf(e, t, r, n, i, o = ry(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Af, t.slice(6, t.length)) : e.setAttributeNS(Af, t, r) : r == null || o && !th(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Pr(r) ? String(r) : r
  );
}
function If(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? tm(r) : r);
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
    a === "boolean" ? r = th(r) : r == null && a === "string" ? (r = "", s = !0) : a === "number" && (r = 0, s = !0);
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
function Jb(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Ef = /* @__PURE__ */ Symbol("_vei");
function Zb(e, t, r, n, i = null) {
  const o = e[Ef] || (e[Ef] = {}), s = o[t];
  if (n && s)
    s.value = n;
  else {
    const [a, l] = Qb(t);
    if (n) {
      const c = o[t] = nv(
        n,
        i
      );
      Ji(e, a, c, l);
    } else s && (Jb(e, a, s, l), o[t] = void 0);
  }
}
const Of = /(?:Once|Passive|Capture)$/;
function Qb(e) {
  let t;
  if (Of.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Of); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : $i(e.slice(2)), t];
}
let dc = 0;
const ev = /* @__PURE__ */ Promise.resolve(), tv = () => dc || (ev.then(() => dc = 0), dc = Date.now());
function nv(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    Ar(
      rv(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = tv(), r;
}
function rv(e, t) {
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
const Ff = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, iv = (e, t, r, n, i, o) => {
  const s = i === "svg";
  t === "class" ? Ub(e, n, s) : t === "style" ? qb(e, r, n) : xl(t) ? Ml(t) || Zb(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ov(e, t, n, s)) ? (If(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Cf(e, t, n, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (sv(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Qt(n))) ? If(e, Mn(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Cf(e, t, n, s));
};
function ov(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ff(t) && ut(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Ff(t) && Qt(r) ? !1 : t in e;
}
function sv(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Mn(t);
  return Array.isArray(r) ? r.some((i) => Mn(i) === n) : Object.keys(r).some((i) => Mn(i) === n);
}
const Tf = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return it(t) ? (r) => va(t, r) : t;
};
function av(e) {
  e.target.composing = !0;
}
function Df(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const fc = /* @__PURE__ */ Symbol("_assign");
function Rf(e, t, r) {
  return t && (e = e.trim()), r && (e = Gu(e)), e;
}
const Lf = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[fc] = Tf(i);
    const o = n || i.props && i.props.type === "number";
    Ji(e, t ? "change" : "input", (s) => {
      s.target.composing || e[fc](Rf(e.value, r, o));
    }), (r || o) && Ji(e, "change", () => {
      e.value = Rf(e.value, r, o);
    }), t || (Ji(e, "compositionstart", av), Ji(e, "compositionend", Df), Ji(e, "change", Df));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, s) {
    if (e[fc] = Tf(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Gu(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, lv = ["ctrl", "shift", "alt", "meta"], cv = {
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
  exact: (e, t) => lv.some((r) => e[`${r}Key`] && !t.includes(r))
}, xt = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = cv[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  }));
}, uv = /* @__PURE__ */ yn({ patchProp: iv }, Kb);
let Vf;
function dv() {
  return Vf || (Vf = kb(uv));
}
const rd = ((...e) => {
  const t = dv().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = pv(n);
    if (!i) return;
    const o = t._component;
    !ut(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = r(i, !1, fv(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function fv(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function pv(e) {
  return Qt(e) ? document.querySelector(e) : e;
}
const hv = "PanoramaSuite.Debug.Diagnostics", mv = "PanoramaSuite.Debug.ExportDiagnostics", pc = "pano_suite.diagnostics.v1", $f = "pano_suite.diagnostics.previous.v1", gv = 300, yv = 2e5, bv = 100, vv = 20, Sv = 1e3, _v = 2, ia = 1024 * 1024;
function Zr(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function wv() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function kv() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: wv,
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
function xv(e = {}) {
  const t = { ...kv(), ...e };
  let r = !1, n = !1, i = null, o = null, s = 0, a = null, l = 0, c = 0;
  const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, p = { created: 0, collected: 0 }, w = t.FinalizationRegistry ? new t.FinalizationRegistry((v) => {
    d.delete(v), f.collected += 1;
  }) : null, m = t.FinalizationRegistry ? new t.FinalizationRegistry((v) => {
    u.delete(v), p.collected += 1;
  }) : null, h = /* @__PURE__ */ new Set(), y = { created: 0, lost: 0, restored: 0, disposed: 0 }, z = [], T = /* @__PURE__ */ new Map();
  let ie = { count: 0, maxMs: 0 }, P = /* @__PURE__ */ new Map(), X = { count: 0, maxMs: 0 };
  const j = [];
  function J(v, B, g = void 0) {
    z.push(g === void 0 ? { t: t.clock(), type: v, label: B } : { t: t.clock(), type: v, label: B, detail: g }), z.length > bv && z.shift();
  }
  function _e(v, B, g, S, R) {
    if (!r || !S || !t.WeakRef) return S;
    const x = { ref: new t.WeakRef(S), label: R };
    return v.add(x), B == null || B.register(S, x), g.created += 1, S;
  }
  function ke(v, B = "") {
    return _e(d, w, f, v, B);
  }
  function ge(v, B = "") {
    return _e(u, m, p, v, B);
  }
  function ve({ label: v = "", width: B, height: g, offscreen: S = !1 } = {}) {
    const R = globalThis.OffscreenCanvas;
    let x;
    return S && typeof R < "u" ? x = new R(B, g) : (x = t.document().createElement("canvas"), B !== void 0 && g !== void 0 && (x.width = B, x.height = g)), ke(x, v);
  }
  function he(v) {
    v.width = 0, v.height = 0, r && (f.released += 1);
  }
  function Se(v = t.document(), B = "") {
    var g;
    return ge(((g = v == null ? void 0 : v.createElement) == null ? void 0 : g.call(v, "video")) || null, B);
  }
  function pe(v, B) {
    if (!r || !v) return () => {
    };
    const g = { label: B, lost: !1, disposed: !1 };
    h.add(g), y.created += 1, J("webgl-created", B);
    const S = () => {
      g.disposed || (g.lost = !0, y.lost += 1, J("webglcontextlost", B));
    }, R = () => {
      g.disposed || (g.lost = !1, y.restored += 1, J("webglcontextrestored", B));
    };
    return v.addEventListener("webglcontextlost", S), v.addEventListener("webglcontextrestored", R), () => {
      g.disposed || (g.disposed = !0, h.delete(g), y.disposed += 1, J("webgl-disposed", B));
    };
  }
  function ne(v, B) {
    return T.set(v, B), () => {
      T.get(v) === B && T.delete(v);
    };
  }
  function ae() {
    return r ? t.now() : -1;
  }
  function fe(v) {
    if (v < 0 || !r) return;
    const B = t.now() - v;
    ie.count += 1, ie.maxMs = Math.max(ie.maxMs, B);
  }
  function $(v, B) {
    if (B < 0 || !r) return;
    const g = t.now() - B, S = P.get(v) ?? { count: 0, maxMs: 0 };
    S.count += 1, S.maxMs = Math.max(S.maxMs, g), P.set(v, S);
  }
  function A() {
    let v = 0, B = 0, g = 0, S = [0, 0];
    const R = {};
    for (const x of d) {
      const F = x.ref.deref();
      if (!F) continue;
      v += 1;
      const L = F.width * F.height;
      L > 0 && (B += 1), g += L, L > S[0] * S[1] && (S = [F.width, F.height]);
      const I = R[x.label] ?? (R[x.label] = [0, 0]);
      I[0] += 1, I[1] += L;
    }
    return { ...f, alive: v, sized: B, pixels: g, mb: Zr(g * 4 / ia, 1), largest: S, byLabel: R };
  }
  function D() {
    const v = [];
    let B = 0, g = 0;
    for (const S of u) {
      const R = S.ref.deref();
      if (!R) continue;
      B += 1;
      const x = !R.paused && !R.ended;
      x && (g += 1), v.length < vv && v.push({
        label: S.label,
        playing: x,
        src: !!(R.currentSrc || R.src),
        size: [R.videoWidth || 0, R.videoHeight || 0],
        ready: R.readyState ?? 0,
        connected: !!R.isConnected
      });
    }
    return { ...p, alive: B, playing: g, list: v };
  }
  function ee() {
    const v = t.now(), B = t.memory(), g = {
      t: t.clock(),
      heap: B ? { used: Zr(B.usedJSHeapSize / ia, 1), total: Zr(B.totalJSHeapSize / ia, 1), limit: Zr(B.jsHeapSizeLimit / ia, 1) } : null,
      canvas: A(),
      webgl: { ...y, alive: [...h].filter((S) => !S.lost).length },
      video: D(),
      frame: { count: ie.count, maxMs: Zr(ie.maxMs), longTasks: X.count, longTaskMaxMs: Zr(X.maxMs) },
      renders: Object.fromEntries([...P].map(([S, R]) => [S, { count: R.count, maxMs: Zr(R.maxMs) }])),
      sources: Object.fromEntries([...T].map(([S, R]) => [S, R()])),
      costMs: Zr(c, 3)
    };
    return ie = { count: 0, maxMs: 0 }, P = /* @__PURE__ */ new Map(), X = { count: 0, maxMs: 0 }, j.push({ record: g, text: JSON.stringify(g) }), j.length > gv && j.shift(), l += 1, l % _v === 0 && U(), c = t.now() - v, g;
  }
  function se(v = yv) {
    const B = JSON.stringify({ ...o, events: z }).slice(0, -1);
    let g = v - B.length - 14, S = j.length;
    for (; S > 0 && g - j[S - 1].text.length - 1 >= 0; )
      S -= 1, g -= j[S].text.length + 1;
    return `${B},"records":[${j.slice(S).map((R) => R.text).join(",")}]}`;
  }
  function U() {
    if (!o) return;
    const v = t.storage();
    if (v) {
      o.savedAt = t.clock();
      try {
        v.setItem(pc, se());
      } catch {
      }
    }
  }
  function b() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", U();
  }
  function Y() {
    var R;
    if (n) return i;
    n = !0;
    const v = t.storage();
    if (!v) return null;
    let B = null;
    try {
      if (B = v.getItem(pc), B === null) {
        const x = v.getItem($f);
        return i = x === null ? null : JSON.parse(x), i;
      }
      v.setItem($f, B), v.removeItem(pc), i = JSON.parse(B);
    } catch {
      return i;
    }
    const g = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], S = g.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${g.length} records kept. Its last records:`,
      JSON.stringify(S)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((R = g.at(-1)) == null ? void 0 : R.t) || 0).toISOString()}; ${g.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(S)
    ), i;
  }
  function ue(v) {
    const B = v === !0;
    if (Y(), B !== r) {
      if (r = B, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, j.length = 0, a = t.observeLongTasks((g) => {
          for (const S of g)
            X.count += 1, X.maxMs = Math.max(X.maxMs, S.duration);
        }), t.addUnload(b), s = t.setInterval(ee, Sv), U();
        return;
      }
      t.clearInterval(s), s = 0, a == null || a(), a = null, t.removeUnload(b), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", U();
    }
  }
  function C() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...z], records: j.map((v) => v.record) } : null,
      previous: i
    };
  }
  function W() {
    const v = t.document(), B = new Blob([JSON.stringify(C(), null, 1)], { type: "application/json" }), g = URL.createObjectURL(B), S = v.createElement("a");
    S.href = g, S.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, S.click(), setTimeout(() => URL.revokeObjectURL(g), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: ve,
    releaseCanvas: he,
    trackCanvas: ke,
    createVideo: Se,
    trackVideo: ge,
    watchContext: pe,
    addSource: ne,
    frameStart: ae,
    frameEnd: fe,
    renderEnd: $,
    sample: ee,
    serialize: se,
    recoverPrevious: Y,
    setEnabled: ue,
    exportData: C,
    download: W
  };
}
const Dn = xv(), on = Dn.createCanvas, hs = Dn.releaseCanvas, hc = Dn.trackCanvas, Es = Dn.createVideo, zf = Dn.trackVideo, Mv = Dn.addSource, Nv = Dn.frameStart, Pv = Dn.frameEnd;
function rm(e, t) {
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
const Av = {
  id: hv,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Dn.setEnabled(e === !0)
}, jf = {
  id: mv,
  label: "Export Panorama Suite diagnostics",
  function: () => Dn.download()
};
function Zi(e, t) {
  const r = on({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function Cv() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Hf(e, t = 8) {
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
function id(e, t) {
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
function Xt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function un(e) {
  e.displayDirty = !0, e.revision += 1;
}
let mc = null, gc = null, Gf = null, Kf = null, qt = null, Lo = null;
function Iv() {
  if (gc) return gc;
  const e = 6, t = 17, r = on({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), gc = r, r;
}
function yc(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  mc = ti(mc, r, n);
  const i = mc;
  Xt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", Kf !== i.ctx && (Gf = i.ctx.createPattern(Iv(), "repeat"), Kf = i.ctx), i.ctx.fillStyle = Gf, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function Ev(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function Ov(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Fv(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Tv(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const jt = /* @__PURE__ */ new Map(), od = 128;
function Dv(e, t, r, n, i, o) {
  const s = Math.max(1, Math.round(e)), a = Math.max(0, Math.min(1, t)), l = `${s}:${a.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if (jt.has(l)) {
    const z = jt.get(l);
    return jt.delete(l), jt.set(l, z), z;
  }
  jt.size >= od && jt.delete(jt.keys().next().value);
  const c = s * 2 + 2, d = s + 1, u = id(c, c), f = u.getContext("2d"), p = a * s, w = s + 1, m = `rgba(${r},${n},${i},${o})`, h = `rgba(${r},${n},${i},0)`, y = f.createRadialGradient(d, d, p, d, d, w);
  return y.addColorStop(0, m), y.addColorStop(1, h), f.fillStyle = y, f.fillRect(0, 0, c, c), jt.set(l, u), u;
}
function Rv(e, t, r, n, i, o, s) {
  const { r: a, g: l, b: c, a: d } = n, u = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), p = Math.max(0, i), w = Math.max(0, Math.min(0.99, o)), m = Math.max(0, Math.min(1, s ?? 0)), h = `chisel:${u}:${f}:${r.toFixed(2)}:${a}:${l}:${c}:${d.toFixed(3)}:${p.toFixed(2)}:${w.toFixed(2)}:${m.toFixed(2)}`;
  if (jt.has(h)) {
    const J = jt.get(h);
    return jt.delete(h), jt.set(h, J), J;
  }
  jt.size >= od && jt.delete(jt.keys().next().value);
  const y = id(u, f), z = y.getContext("2d"), T = z.createImageData(u, f), ie = T.data, P = Math.max(0, e - t), X = Math.max(0, Math.min(1, r)), j = 1 + p;
  for (let J = 0; J < f; J++)
    for (let _e = 0; _e < u; _e++) {
      const ke = _e + 0.5 - e, ge = J + 0.5 - t, ve = Math.max(Math.abs(ke) - P, 0), Se = Math.hypot(ve, ge) / t;
      if (Se >= 1) continue;
      const pe = Se <= X ? 1 : Math.max(0, (1 - Se) / Math.max(1e-4, 1 - X)), ne = 1 - Se, ae = 1 + p * (1 - ne) * (1 - ne), fe = 1 - w * ne * ne, $ = ae * fe / j;
      let A = 1;
      if (m > 0) {
        const se = Math.floor((ge + t) / 1.5), U = Math.floor((ke + e) / 8), b = Oi(co(se * 41 + 500, U * 19 + 300));
        A = 1 - m * 0.42 * b;
      }
      const D = Math.round(255 * Math.min(1, d * pe * $ * A));
      if (D <= 0) continue;
      const ee = (J * u + _e) * 4;
      ie[ee] = a, ie[ee + 1] = l, ie[ee + 2] = c, ie[ee + 3] = D;
    }
  return z.putImageData(T, 0, 0), jt.set(h, y), y;
}
function co(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function Oi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Lv(e, t, r, n, i, o, s) {
  const a = e + 0.5 - r, l = t + 0.5 - n, c = Math.max(0, r - n), d = Math.max(Math.abs(a) - c, 0), u = Math.hypot(d, l) / n;
  if (u >= 1) return 0;
  const f = Oi(co(e * 17 + 3, t * 13 + 7)), p = u + o * 0.22 * (f - 0.5);
  if (p >= 1) return 0;
  const w = p <= i ? 1 : Math.max(0, (1 - p) / Math.max(1e-4, 1 - i)), m = Vv(e, t, a, l, r, n), h = o * 0.55;
  if (m < h) return 0;
  const z = 0.45 + 0.55 * ((m - h) / Math.max(1e-4, 1 - h));
  return Math.round(255 * Math.min(1, s * w * z));
}
function Vv(e, t, r, n, i, o) {
  const s = Math.floor((r + i) / 3), a = Math.floor((n + o) / 2), l = Oi(co(s * 13 + 700, a * 17 + 400)), c = Math.floor((r + i) / 1.5), d = Math.floor((n + o) / 1.5), u = Oi(co(c * 23 + 800, d * 29 + 500)), f = Oi(co(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + u * 0.3 + f * 0.15;
}
function $v(e, t, r, n, i) {
  const { r: o, g: s, b: a, a: l } = n, c = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), u = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${d}:${r.toFixed(2)}:${o}:${s}:${a}:${l.toFixed(3)}:${u.toFixed(2)}`;
  if (jt.has(f)) {
    const z = jt.get(f);
    return jt.delete(f), jt.set(f, z), z;
  }
  jt.size >= od && jt.delete(jt.keys().next().value);
  const p = id(c, d), w = p.getContext("2d"), m = w.createImageData(c, d), h = m.data, y = Math.max(0, Math.min(1, r));
  for (let z = 0; z < d; z++)
    for (let T = 0; T < c; T++) {
      const ie = Lv(T, z, e, t, y, u, l);
      if (ie <= 0) continue;
      const P = (z * c + T) * 4;
      h[P] = o, h[P + 1] = s, h[P + 2] = a, h[P + 3] = ie;
    }
  return w.putImageData(m, 0, 0), jt.set(f, p), p;
}
function im(e, t, r) {
  var m, h;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = Fv(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), s = zv(t), a = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((m = t == null ? void 0 : t.angle) == null ? void 0 : m.value) ?? 0), c = Tv(t, i), d = String(((h = t == null ? void 0 : t.targetSpace) == null ? void 0 : h.viewMode) || ""), u = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, p = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let w;
  if (n === "chisel") {
    const y = i * a, z = i, T = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), ie = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), P = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    w = Rv(y, z, o, s, T, ie, P);
  } else if (n === "crayon") {
    const y = i * a, z = i, T = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    w = $v(y, z, o, s, T);
  } else
    w = Dv(i, o, s.r, s.g, s.b, s.a);
  return { ctx: e, stampTex: w, radiusPx: i, spacingPx: c, desc: r, aspect: a, angle: l, stampKind: n, scatter: p, latitudeCorrection: u };
}
function zv(e) {
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
function jv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function Wf(e, t, r, n, i) {
  const o = e.angle, s = e.desc.width;
  function a(c, d) {
    o === 0 ? e.ctx.drawImage(e.stampTex, c - i, d - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(c, d), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  a(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && a(t + s, r), t + l > s && a(t - s, r);
}
function sd(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: c, count: d } = e.scatter, u = c * e.radiusPx * i, f = co(t, r);
    for (let p = 0; p < d; p++) {
      const w = Oi(f + p * 2) * Math.PI * 2, m = Math.sqrt(Oi(f + p * 2 + 1)) * u, h = t + Math.cos(w) * m, y = r + Math.sin(w) * m, z = Math.max(0.5, e.radiusPx * i * 0.48), T = (0.5 - y / Math.max(1, e.desc.height)) * Math.PI, ie = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(T)) : 1, P = z * e.aspect * ie;
      Wf(e, h, y, z, P);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), s = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, a = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(s)) : 1, l = o * e.aspect * a;
  Wf(e, t, r, o, l);
}
function Uf(e, t, r) {
  const n = Ov(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, s = im(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const a = [];
  for (let f = 0; f < n.length; f++) {
    let p = Number(n[f].u || 0) * i;
    const w = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(p - a[f - 1].x) > i * 0.5 && (p += p < a[f - 1].x ? i : -i), a.push({ x: p, y: w });
  }
  if (sd(s, a[0].x, a[0].y, 1), a.length === 1) {
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
function ka(e, t, r) {
  var u;
  const n = Array.isArray((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, s = jv(t), a = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const p = Ev(n[f]);
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
    ka(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? Uf(e, t, r) : (Lo = ti(Lo, r.width, r.height), Xt(Lo), Uf(Lo.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(Lo.canvas, 0, 0), e.restore());
}
function _i(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ms(e, t, r, n, i, o) {
  const s = n - t, a = i - r, l = Math.hypot(s, a);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const d = c / l;
    sd(e, t + s * d, r + a * d, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function Ba(e, t, r, n, i, o) {
  const a = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, d = 0, u = a, f = u + l, p = f + c, w = f - u, m = 16;
  let h = o, y = r.x, z = r.y;
  for (let T = 1; T <= m; T++) {
    const ie = u + w * T / m, P = ((u - ie) * t.x + (ie - d) * r.x) / (u - d), X = ((u - ie) * t.y + (ie - d) * r.y) / (u - d), j = ((f - ie) * r.x + (ie - u) * n.x) / (f - u), J = ((f - ie) * r.y + (ie - u) * n.y) / (f - u), _e = ((p - ie) * n.x + (ie - f) * i.x) / (p - f), ke = ((p - ie) * n.y + (ie - f) * i.y) / (p - f), ge = ((f - ie) * P + (ie - d) * j) / (f - d), ve = ((f - ie) * X + (ie - d) * J) / (f - d), he = ((p - ie) * j + (ie - u) * _e) / (p - u), Se = ((p - ie) * J + (ie - u) * ke) / (p - u), pe = ((f - ie) * ge + (ie - u) * he) / (f - u), ne = ((f - ie) * ve + (ie - u) * Se) / (f - u);
    h = ms(e, y, z, pe, ne, h), y = pe, z = ne;
  }
  return h;
}
function Hv(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, s = o.width, a = r * o.height, l = e.activeStroke;
  let c = t * s;
  if (l && Math.abs(c - l.prev.x) > s * 0.5 && (c += c < l.prev.x ? s : -s), !l) {
    const p = im(i, n, o), w = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), m = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), h = String((n == null ? void 0 : n.toolKind) || "") === "eraser", y = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", sd(p, c, a, 1), e.activeStroke = {
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
      velocityWidthFactor: m,
      distSinceStamp: 0,
      isEraser: h,
      layerKind: y,
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
function Ll(e = {}) {
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
  function w(he) {
    return {
      actionGroupId: he,
      descriptor: n,
      committedPaint: Zi(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function m(he) {
    let Se = i.get(he);
    return Se || (Se = w(he), i.set(he, Se)), Se;
  }
  function h(he) {
    return d === "mask" ? s : c ? m(c) : a;
  }
  function y(he) {
    var $;
    const Se = !u || u.length !== he.length || he.some((A, D) => A !== u[D]), pe = d === "paint" && (($ = c ? i.get(c) : a) == null ? void 0 : $.activeStroke) || null;
    let ne = s.displayDirty || a.displayDirty || Se;
    for (const A of he) {
      const D = i.get(A);
      if (D != null && D.displayDirty) {
        ne = !0;
        break;
      }
    }
    if (pe && (ne = !0), !ne) return;
    s.displayDirty = !1, a.displayDirty = !1;
    for (const A of he) {
      const D = i.get(A);
      D && (D.displayDirty = !1);
    }
    u = [...he];
    const ae = l.ctx;
    Xt(l);
    const fe = !!(pe != null && pe.isEraser);
    for (const A of he) {
      const D = i.get(A);
      if (!D) continue;
      const se = c === D.actionGroupId && d === "paint" ? D.activeStroke : null;
      if (fe)
        qt = ti(qt, t, r), Xt(qt), qt.ctx.drawImage(D.committedPaint.canvas, 0, 0), _i(qt.ctx, o.canvas), ae.drawImage(qt.canvas, 0, 0);
      else if (ae.drawImage(D.committedPaint.canvas, 0, 0), se) {
        const U = D.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, se.strokeOpacity ?? 1));
        ae.save(), ae.globalAlpha = U, ae.drawImage(o.canvas, 0, 0), ae.restore();
      }
    }
  }
  function z(he) {
    var pe, ne, ae, fe, $;
    for (const A of i.values())
      Xt(A.committedPaint), Xt(A.currentStroke), A.activeStroke = null, un(A);
    Xt(s.committedMask), Xt(s.currentStroke), s.activeStroke = null, s.painted = !1, f.clear(), un(s), un(a), u = null;
    const Se = [
      ...Array.isArray((ne = (pe = he == null ? void 0 : he.painting) == null ? void 0 : pe.paint) == null ? void 0 : ne.strokes) ? he.painting.paint.strokes : [],
      ...Array.isArray((fe = (ae = he == null ? void 0 : he.painting) == null ? void 0 : ae.mask) == null ? void 0 : fe.strokes) ? he.painting.mask.strokes : []
    ];
    for (const A of Se) {
      if ((($ = A == null ? void 0 : A.targetSpace) == null ? void 0 : $.kind) !== "ERP_GLOBAL") continue;
      const D = String((A == null ? void 0 : A.layerKind) || "paint"), se = String((A == null ? void 0 : A.toolKind) || "pen") === "eraser";
      if (D === "mask") {
        const U = s.descriptor;
        se ? (qt = ti(qt, U.width, U.height), Xt(qt), oa(qt.ctx, A, U), _i(s.committedMask.ctx, qt.canvas)) : (oa(s.committedMask.ctx, A, U), s.painted = !0);
        continue;
      }
      if (se) {
        qt = ti(qt, n.width, n.height), Xt(qt), oa(qt.ctx, A, n);
        for (const U of i.values())
          _i(U.committedPaint.ctx, qt.canvas), un(U);
      } else {
        const U = String((A == null ? void 0 : A.actionGroupId) || "__default__"), b = m(U), Y = b.descriptor;
        oa(b.committedPaint.ctx, A, Y), un(b);
      }
    }
    y([...i.keys()]);
  }
  function T(he, Se) {
    d = String((he == null ? void 0 : he.layerKind) || "");
    const pe = String((he == null ? void 0 : he.toolKind) || "") === "eraser";
    if (d === "mask")
      c = null, Xt(s.currentStroke), s.activeStroke = null, un(s);
    else {
      const ne = pe ? a : m(String((he == null ? void 0 : he.actionGroupId) || "__default__"));
      c = pe ? "" : String((he == null ? void 0 : he.actionGroupId) || "__default__"), Xt(ne.currentStroke), ne.activeStroke = null, un(ne);
    }
  }
  function ie(he, Se) {
    var D;
    const pe = String((he == null ? void 0 : he.layerKind) || "paint"), ne = String((he == null ? void 0 : he.toolKind) || "") === "eraser", ae = pe === "mask" ? s : ne ? a : m(String((he == null ? void 0 : he.actionGroupId) || c || "__default__")), fe = ae.activeStroke, $ = ae.descriptor;
    if (fe && fe.pointCount > 1) {
      const ee = ae.currentStroke.ctx;
      ee.globalCompositeOperation = "source-over";
      const se = {
        ctx: ee,
        stampTex: fe.stampTex,
        radiusPx: fe.radiusPx,
        spacingPx: fe.spacingPx,
        desc: $,
        aspect: fe.aspect,
        angle: fe.angle,
        stampKind: fe.stampKind,
        scatter: fe.scatter,
        latitudeCorrection: fe.latitudeCorrection
      };
      fe.pointCount === 2 ? ms(se, fe.lastMidX, fe.lastMidY, fe.prev.x, fe.prev.y, fe.distSinceStamp) : Ba(se, fe.pprev, { x: fe.lastMidX, y: fe.lastMidY }, fe.prev, fe.prev, fe.distSinceStamp);
    }
    ae.lassoPreviewActive && (Xt(ae.currentStroke), ka(ae.currentStroke.ctx, he, $), ae.lassoPreviewActive = !1);
    const A = pe === "mask" ? s.committedMask : ae.committedPaint;
    if (ne && pe === "paint")
      for (const ee of i.values())
        _i(ee.committedPaint.ctx, ae.currentStroke.canvas), un(ee);
    else if (ne)
      _i(A.ctx, ae.currentStroke.canvas);
    else {
      pe === "mask" && (s.painted = !0);
      const ee = Math.max(0, Math.min(1, (fe == null ? void 0 : fe.strokeOpacity) ?? 1));
      A.ctx.save(), A.ctx.globalAlpha = ee, A.ctx.drawImage(ae.currentStroke.canvas, 0, 0), A.ctx.restore();
    }
    Cv() && (String((he == null ? void 0 : he.toolKind) || ""), String(($ == null ? void 0 : $.kind) || ""), Number(($ == null ? void 0 : $.width) || 0), Number(($ == null ? void 0 : $.height) || 0), String(((D = he == null ? void 0 : he.targetSpace) == null ? void 0 : D.viewMode) || ""), Number((he == null ? void 0 : he.aspect) ?? 1), Hf(ae.currentStroke.canvas), Hf(A.canvas), void 0), Xt(ae.currentStroke), ae.activeStroke = null, un(ae), f.clear(), c = null, d = "", y([...i.keys()]);
  }
  function P(he) {
    if (d === "mask")
      Xt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, un(s);
    else if (d === "paint" && !c)
      Xt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, un(a);
    else if (c) {
      const Se = i.get(c);
      Se && (Xt(Se.currentStroke), Se.activeStroke = null, Se.lassoPreviewActive = !1, un(Se));
    }
    f.clear(), c = null, d = "", y([...i.keys()]);
  }
  function X(he, Se) {
    var ne;
    if (d = String((he == null ? void 0 : he.layerKind) || ""), String(((ne = he == null ? void 0 : he.geometry) == null ? void 0 : ne.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        Xt(s.currentStroke), ka(s.currentStroke.ctx, he, s.descriptor), s.lassoPreviewActive = !0, un(s);
      else {
        const ae = String((he == null ? void 0 : he.toolKind) || "") === "eraser", fe = ae ? a : m(String((he == null ? void 0 : he.actionGroupId) || c || "__default__"));
        c = ae ? "" : String((he == null ? void 0 : he.actionGroupId) || c || "__default__"), Xt(fe.currentStroke), ka(fe.currentStroke.ctx, he, fe.descriptor), fe.lassoPreviewActive = !0, un(fe);
      }
      y([...i.keys()]);
    }
  }
  function j(he) {
    return y(he ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: s.committedMask,
      descriptor: n
    };
  }
  function J(he) {
    return i.get(String(he)) ?? null;
  }
  function _e() {
    return [...i.keys()];
  }
  function ke(he) {
    var ee;
    const Se = i.get(String(he));
    if (!Se) return null;
    const pe = d === "paint" && c === Se.actionGroupId, ne = d === "paint" && ((ee = c ? i.get(c) : a) == null ? void 0 : ee.activeStroke) || null, ae = !!(ne != null && ne.isEraser), fe = pe ? Se.activeStroke : null;
    if (!ae && !fe) return Se.committedPaint.canvas;
    const $ = `${Se.revision}:${a.revision}:${ae}`, A = f.get(Se.actionGroupId);
    if ((A == null ? void 0 : A.key) === $) return A.surface.canvas;
    const D = ti((A == null ? void 0 : A.surface) ?? null, t, r);
    return Xt(D), D.ctx.drawImage(Se.committedPaint.canvas, 0, 0), ae ? _i(D.ctx, o.canvas) : (D.ctx.save(), D.ctx.globalAlpha = Se.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, fe.strokeOpacity ?? 1)), D.ctx.drawImage(o.canvas, 0, 0), D.ctx.restore()), f.set(Se.actionGroupId, { key: $, surface: D }), D.canvas;
  }
  function ge() {
    const he = d === "mask" ? s.activeStroke : null;
    return !s.painted && (!he || he.isEraser) ? null : `${s.revision}:${!!he}`;
  }
  function ve() {
    const he = ge();
    if (he === null)
      return p = null, null;
    if ((p == null ? void 0 : p.key) === he) return p.surface.canvas;
    const Se = ti((p == null ? void 0 : p.surface) ?? null, t, r);
    Xt(Se);
    const pe = d === "mask" ? s.activeStroke : null;
    return pe != null && pe.isEraser ? (qt = ti(qt, t, r), Xt(qt), qt.ctx.drawImage(s.committedMask.canvas, 0, 0), _i(qt.ctx, o.canvas), yc(Se.ctx, qt.canvas)) : (yc(Se.ctx, s.committedMask.canvas), pe && yc(Se.ctx, o.canvas)), p = { key: he, surface: Se }, Se.canvas;
  }
  return {
    rebuildCommitted: z,
    beginStroke: T,
    appendStrokePoint: Hv,
    updateActiveStroke: X,
    commitActiveStroke: ie,
    cancelActiveStroke: P,
    getErpTarget: j,
    ensureTarget: h,
    getGroupTarget: J,
    getGroupDisplayCanvas: ke,
    getMaskDisplayCanvas: ve,
    getMaskDisplayRevision: ge,
    getAllGroupIds: _e
  };
}
function Oe(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Kt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function ad(e, t) {
  let r = Kt(t) - Kt(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const nu = 3;
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
function om(e) {
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
const Bf = Math.PI / 180, Yf = 0.12, Gv = nu, Kv = 35, Wv = 140, Ko = 100, Uv = 20, qf = 0.8;
function Bv(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Oe(Number(e || Ko), 1, 179) * Bf;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / Bf;
}
function ld(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Ko })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), s = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), a = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(z, T = null) {
    a && a(z, T);
  }
  function d(z, T, ie = null, P = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(z || 0), l.drag.lastY = Number(T || 0), l.drag.lastTs = Number(P || performance.now()), l.drag.pointerId = ie, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: ie }), !0;
  }
  function u(z, T, ie = "pano", P = performance.now()) {
    if (!l.drag.active) return !1;
    const X = Number(P || performance.now()), j = Number(z), J = Number(T), _e = j - l.drag.lastX, ke = J - l.drag.lastY;
    l.drag.lastX = j, l.drag.lastY = J, l.drag.lastTs = X;
    const ge = n() || { x: 1, y: 1 }, ve = Number(ge.x || 1), he = Number(ge.y || 1), Se = { ...t() };
    let pe = 0, ne = 0;
    if (ie === "unwrap") {
      const fe = i() || { w: 1, h: 1 }, $ = Math.max(1, Number(fe.w || 1)), A = Math.max(1, Number(fe.h || 1)), D = _e / $, ee = ke / A;
      pe = -D * 360 * ve, ne = ee * 180 * he;
    } else {
      const fe = o() || { w: 0, h: 0 }, $ = Math.max(1, Number(fe.w || 0)), A = Math.max(1, Number(fe.h || 0));
      if ($ > 1 && A > 1) {
        const D = Oe(Number(Se.fov || Ko), 1, 179), ee = Oe(Bv(D, $, A), 0.1, 179);
        pe = -(_e / $) * D * ve, ne = ke / A * ee * he;
      } else
        pe = -_e * Yf * ve, ne = ke * Yf * he;
    }
    Se.yaw = Kt(Number(Se.yaw || 0) + pe), Se.pitch = Oe(Number(Se.pitch || 0) + ne, -89.9, 89.9), r(Se), l.velHistory.push({ ts: X, yaw: Se.yaw, pitch: Se.pitch });
    let ae = 0;
    for (; ae < l.velHistory.length - 1 && l.velHistory[ae].ts < X - 100; ) ae++;
    return ae > 0 && l.velHistory.splice(0, ae), l.inertia.active = !1, l.inertia.lastTs = X, s(), c("drag", { phase: "move", dx: _e, dy: ke, dYaw: pe, dPitch: ne }), !0;
  }
  function f(z = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const T = Number(z || performance.now());
    l.drag.lastTs = T;
    const ie = l.velHistory.filter((X) => T - X.ts <= 80);
    if (ie.length >= 2) {
      const X = ie[0], j = ie.at(-1), J = Math.max(1e-3, (j.ts - X.ts) / 1e3);
      let _e = j.yaw - X.yaw;
      _e > 180 && (_e -= 360), _e < -180 && (_e += 360), l.inertia.vx = _e / J, l.inertia.vy = (j.pitch - X.pitch) / J;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const P = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = P > Uv, l.inertia.lastTs = T, c("drag", { phase: "end", speed: P, inertiaActive: l.inertia.active }), !0;
  }
  function p(z = performance.now()) {
    if (!l.inertia.active) return !1;
    const T = Number(z || performance.now()), ie = Math.max(1e-3, (T - (l.inertia.lastTs || T)) / 1e3);
    l.inertia.lastTs = T;
    const P = { ...t() };
    P.yaw = Kt(Number(P.yaw || 0) + l.inertia.vx * ie), P.pitch = Oe(Number(P.pitch || 0) + l.inertia.vy * ie, -89.9, 89.9);
    const X = Math.exp(-5.5 * ie);
    return l.inertia.vx *= X, l.inertia.vy *= X, Math.abs(l.inertia.vx) < qf && Math.abs(l.inertia.vy) < qf && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(P), s(), l.inertia.active;
  }
  function w() {
    const z = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], z;
  }
  function m(z) {
    const T = Math.sign(Number(z || 0));
    if (!T) return !1;
    const ie = { ...t() }, P = Number(ie.fov || Ko);
    return ie.fov = Oe(P + T * Gv, Kv, Wv), r(ie), s(), c("wheel", { deltaSign: T, fovBefore: P, fovAfter: ie.fov }), !0;
  }
  function h(z, T = 0) {
    return m(Ya(z, T));
  }
  function y() {
    r({ yaw: 0, pitch: 0, fov: Ko }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, s();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: u,
    endDrag: f,
    stepInertia: p,
    stopMotion: w,
    applyWheel: m,
    applyWheelEvent: h,
    resetView: y
  };
}
const _t = Math.PI / 180, nn = 180 / Math.PI;
function Qn(e, t, r) {
  return { x: e, y: t, z: r };
}
function qa(e, t) {
  return Qn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Xa(e, t) {
  return Qn(e.x * t, e.y * t, e.z * t);
}
function bc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function cd(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Qn(e.x / t, e.y / t, e.z / t);
}
function Tn(e, t) {
  const r = e * _t, n = t * _t, i = Math.cos(n);
  return Qn(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function wo(e, t, r = 0) {
  const n = Number(e || 0) * _t, i = Number(t || 0) * _t, o = r * _t, s = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), d = Math.cos(o), u = Math.sin(o);
  return {
    right: Qn(
      s * d - a * c * u,
      l * u,
      -a * d - s * c * u
    ),
    up: Qn(
      -s * u - a * c * d,
      l * d,
      a * u - s * c * d
    ),
    fwd: Qn(a * l, c, s * l)
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
function Yv() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function qv(e) {
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
function Xv(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function Jv(e, t) {
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
    const o = Jv(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function Zv(e, t, r, n) {
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
function Qv(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = Xv(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = Zv(e.geometry, r, n, t === "paint");
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
function Xf(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = Qv(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function e1(e) {
  if (!e || typeof e != "object") return null;
  const t = It(e.u0, null), r = It(e.v0, null), n = It(e.u1, null), i = It(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (a) => Math.max(0, Math.min(1, a)), s = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return s.u1 <= s.u0 || s.v1 <= s.v0 ? null : s;
}
function t1(e) {
  const t = e || {};
  return {
    du: It(t.du, 0) ?? 0,
    dv: It(t.dv, 0) ?? 0,
    rot_deg: It(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, It(t.scale, 1) ?? 1)
  };
}
function n1(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = e1(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, It(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: t1(e.transform)
  } : null;
}
function r1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = n1(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function ko(e) {
  const t = Yv();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: qv(e.groups),
    paint: Xf(e.paint, "paint"),
    mask: Xf(e.mask, "mask"),
    raster_objects: r1(e.raster_objects)
  };
}
const er = 1, tr = 179, ru = 85;
function Vl(e) {
  const t = ((ot(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function sm(e, t) {
  let r = ot(e, 0) - ot(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function am(e, t, { shiftKey: r = !1 } = {}) {
  let n = ot(e, 0) + ot(t, 0) * nn;
  return r && (n = Math.round(n / 15) * 15), Vl(n);
}
function ot(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function ui(e = {}) {
  const t = Oe(ot(e.hFOV_deg || 90, 90), er, tr), r = Oe(ot(e.vFOV_deg || 60, 60), er, tr), n = Math.tan(t * _t * 0.5), i = Math.tan(r * _t * 0.5);
  return {
    yawDeg: ot(e.yaw_deg, 0),
    pitchDeg: ot(e.pitch_deg, 0),
    rollDeg: ot(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: r,
    tanHalfX: n,
    tanHalfY: i,
    aspect: n / Math.max(1e-12, i)
  };
}
function Li(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = ui(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function ud(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, ot(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function dd(e, t) {
  const r = Math.max(1e-12, ot(t, 1)), n = Math.max(1e-6, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Oe(2 * Math.atan(n / (2 * r)) * nn, er, tr), s = Oe(2 * Math.atan(i / (2 * r)) * nn, er, tr);
  return { hFOV_deg: o, vFOV_deg: s };
}
function i1(e, t, r) {
  const n = ot(e == null ? void 0 : e.x, 0), i = ot(e == null ? void 0 : e.y, 0), o = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), s = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = ui(t), l = Math.max(1e-12, ot(r, 1)), c = 2 * l * a.tanHalfX, d = 2 * l * a.tanHalfY;
  return {
    x: n + (o - c) * 0.5,
    y: i + (s - d) * 0.5,
    w: c,
    h: d,
    focalPx: l
  };
}
function fd(e, t, r = ru) {
  const n = Math.max(1e-12, ot(t, 1)), i = Oe(ot(r, ru), 1, 89.999), o = n * Math.tan(i * _t), s = Math.max(1, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(s * 0.5, o),
    halfH: Math.min(a * 0.5, o)
  };
}
function lm(e, t, r) {
  const n = Math.max(1e-12, ot(t, 1));
  return {
    x: (ot(r == null ? void 0 : r.x, 0) - ot(e == null ? void 0 : e.x, 0)) / n,
    y: -(ot(r == null ? void 0 : r.y, 0) - ot(e == null ? void 0 : e.y, 0)) / n
  };
}
function o1(e, t) {
  const r = Oe(ot(e, 90), er, tr), n = Math.max(1e-6, ot(t, 1));
  return Oe(
    2 * Math.atan(Math.tan(r * _t * 0.5) / n) * nn,
    er,
    tr
  );
}
function xa(e, t) {
  const r = Oe(ot(e, 60), er, tr), n = Math.max(1e-6, ot(t, 1));
  return Oe(
    2 * Math.atan(Math.tan(r * _t * 0.5) * n) * nn,
    er,
    tr
  );
}
function Jf(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function s1(e, t) {
  const r = Jf(e, 1), n = Jf(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), s = Math.max(1, Math.round(n * i)), a = (c, d) => d ? a(d, c % d) : c, l = a(o, s) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(s / l))}`;
}
function zi(e) {
  const t = Oe(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * _t, r = Oe(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * _t;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function Fi(e) {
  const t = zi(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || s1(t, 1);
}
function pd(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Fi(t), t;
}
function cm({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const s = o == null || String(o).trim() === "" ? NaN : Number(o), a = Number.isFinite(s) ? Oe(s, er, tr) : Oe(Math.min(42, ot(i, 100) * 0.42), 8, 96);
  return pd({
    id: String(e),
    label: "Frame 1",
    yaw_deg: ot(t, 0),
    pitch_deg: Oe(ot(r, 0), -89.9, 89.9),
    roll_deg: Vl(n),
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function Vr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Fi(e);
}
function um(e, t) {
  const r = ui(e), n = ot(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * nn, o = 2 * Math.atan(r.tanHalfY * n) * nn;
  return i < er || i > tr || o < er || o > tr ? null : { hFOV_deg: i, vFOV_deg: o };
}
function dm(e, t, r = nu) {
  const n = Math.sign(ot(t, 0)), i = Math.abs(ot(r, nu));
  if (!n || !(i > 0)) return null;
  const o = ui(e), s = o.hFovDeg + n * i;
  if (s < er || s > tr) return null;
  const a = Math.tan(s * _t * 0.5);
  return um(e, a / o.tanHalfX);
}
function fm(e, t) {
  const r = ui(e), n = wo(r.yawDeg, r.pitchDeg, r.rollDeg), i = ot(t == null ? void 0 : t.x, 0), o = ot(t == null ? void 0 : t.y, 0);
  return cd(qa(qa(n.fwd, Xa(n.right, i)), Xa(n.up, o)));
}
function a1(e) {
  return Qn(e.x, e.y, -e.z);
}
function Ma(e) {
  return Qn(e.x, e.y, -e.z);
}
function Nn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = wo(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function pm(e) {
  const t = Ma(Qn(e[0][0], e[1][0], e[2][0])), r = Ma(Qn(e[0][1], e[1][1], e[2][1])), n = Ma(Qn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), s = Math.cos(i), a = Math.sin(i), l = Math.atan2(a * r.z - s * r.x, s * t.x - a * t.z);
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
const Ai = 1e-6, iu = 1e-6, l1 = 1e-9;
function ys(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function c1(e, t) {
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
function hm(e, t, r, n) {
  const i = r[n], o = r[n + 1], s = t[n + 1] - t[n], a = i.map((d, u) => o[u] - d);
  let l = a;
  go(e, n) && (l = yo(t, n, r[n - 1].map((d, u) => d - i[u]), a).map((d) => d * s));
  let c = a;
  return go(e, n + 1) && (c = yo(t, n + 1, a.map((d) => -d), r[n + 2].map((d, u) => d - o[u])).map((d) => d * s)), [l.map((d) => d / 3), c.map((d) => -d / 3)];
}
function mm(e, t, r, n, i) {
  const [[o], [s]] = hm(e, t, r.map((a) => [a]), n);
  return ys(r[n], r[n] + o, r[n + 1] + s, r[n + 1], i);
}
function u1(e, t, r, n) {
  var c, d;
  const i = e.map((u) => u.value);
  let [o, s] = hm(e, t, i, r);
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
function d1(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function vc(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function f1([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function ou(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function ro(e, t) {
  return f1(Za([-e[0], -e[1], -e[2], e[3]], t));
}
function Sc(e, t, r) {
  return Za(e, ou(ro(e, t).map((n) => r * n)));
}
function _c(e, t) {
  const r = d1(e, t);
  if (Math.abs(r) > iu) return r < 0;
  const [n, i, o] = ro(e, t);
  for (const s of [-i, n, o])
    if (Math.abs(s) > iu) return s < 0;
  return !1;
}
function la(e) {
  const { x: t, y: r, z: n, w: i } = di(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function su(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function p1(e, t, r, n) {
  const i = la(e[r].value);
  let o = la(e[r + 1].value);
  _c(i, o) && (o = vc(o));
  const s = t[r + 1] - t[r], a = ro(i, o);
  let l = a;
  if (go(e, r)) {
    let P = la(e[r - 1].value);
    _c(P, i) && (P = vc(P)), l = yo(t, r, ro(i, P), a).map((X) => X * s);
  }
  let c = a;
  if (go(e, r + 1)) {
    let P = la(e[r + 2].value);
    _c(o, P) && (P = vc(P)), c = yo(t, r + 1, ro(o, i), ro(o, P)).map((X) => X * s);
  }
  const d = Za(i, ou(l.map((P, X) => 0.5 * (P - a[X])))), u = Za(o, ou(a.map((P, X) => 0.5 * (P - c[X])))), [f, p, w, m] = Sc(Sc(i, o, n), Sc(d, u, n), 2 * n * (1 - n)), { yawDeg: h, pitchDeg: y, rollDeg: z } = pm(gs({ x: f, y: p, z: w, w: m })), T = e[r].value, ie = e[r + 1].value;
  return {
    yaw_deg: su(h, T.yaw_deg, ie.yaw_deg, n),
    pitch_deg: y,
    roll_deg: su(z, T.roll_deg, ie.roll_deg, n)
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
function gm(e, t) {
  const r = bs(e, t), n = t.map((s, a) => s - r * e[a]), i = Qa(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((s) => s * o);
}
function Qi(e, t) {
  const r = Qa(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function ca(e, t, r) {
  return Qi(e, gm(e, t).map((n) => r * n));
}
function wc(e, t) {
  const r = el(e[t].value), n = el(e[t + 1].value), i = bs(r, n), o = i < 0 && Qa(n.map((l, c) => l - i * r[c])) <= iu;
  let s;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    s = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    s = gm(r, n);
  const a = Qa(s);
  return [s, s.map((l, c) => Math.cos(a) * l - a * Math.sin(a) * r[c]), o];
}
function h1(e, t, r, n) {
  const i = el(e[r].value), o = el(e[r + 1].value), [s, a, l] = wc(e, r);
  let c = s, d = a;
  const u = t[r + 1] - t[r];
  go(e, r) && (c = yo(t, r, wc(e, r - 1)[1].map((T) => -T), c).map((T) => T * u)), go(e, r + 1) && (d = yo(t, r + 1, d.map((T) => -T), wc(e, r + 1)[0]).map((T) => T * u));
  let f, p, w;
  if (l) {
    const T = Math.PI, ie = ys(0, bs(c, s) / T / 3, T - bs(d, a) / T / 3, T, n);
    [f, p, w] = Qi(i, s.map((P) => ie * P / T));
  } else {
    const T = ca(Qi(i, c.map((X) => X / 3)), Qi(o, d.map((X) => -X / 3)), n), ie = ca(Qi(i, c.map((X) => n * X / 3)), T, n), P = ca(T, Qi(o, d.map((X) => -(1 - n) * X / 3)), n);
    [f, p, w] = ca(ie, P, n);
  }
  const m = Math.hypot(f, w), h = e[r].value.yaw_deg, y = e[r + 1].value.yaw_deg;
  return { yaw_deg: m <= l1 ? h + (y - h) * n : su(Math.atan2(f, w) * 180 / Math.PI, h, y, n), pitch_deg: Math.atan2(p, m) * 180 / Math.PI };
}
function m1(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = mm(e, t, e.map((s) => s.value[o]), r, n);
  return i;
}
function g1(e, t, r, n) {
  return mm(e, t, e.map((i) => i.value), r, n);
}
const y1 = { position: u1, rotation: p1, direction: h1, size: m1 };
function Ut(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return aa(e[t].value);
  if (r <= n[0].frame + Ai) return aa(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - Ai) return aa(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + Ai; ) o += 1;
  const s = n[o];
  if (Math.abs(r - s.frame) <= Ai || s.easing === "hold") return aa(s.value);
  const a = n.map((c) => c.frame), l = c1(s.easing, (r - a[o]) / (a[o + 1] - a[o]));
  return (y1[t] ?? g1)(n, a, o, l);
}
function au(e) {
  return Math.min(179, Math.max(0.1, e));
}
function b1(e) {
  return Math.min(1, Math.max(0, e));
}
function ym(e) {
  return Math.max(1e-6, e);
}
function bm(e, t) {
  return t - (e.start - e.in);
}
function xo(e, t) {
  return t >= e.start - Ai && (e.duration === null || t < e.start + e.duration - Ai);
}
function $l(e, t) {
  return {
    position: Ut(e, "position", t),
    ...Ut(e, "rotation", t),
    hFOV_deg: au(Ut(e, "fov", t)),
    aspect: e.aspect
  };
}
function Os(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = bm(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : $l(n, r),
    scene: {
      active: i.visible && xo(i.clip, r),
      clip_frame: o,
      position: Ut(i, "position", o),
      ...Ut(i, "rotation", o),
      scale: ym(Ut(i, "scale", o))
    },
    stickers: e.stickers.map((s) => Wr(s, r))
  };
}
function v1(e, t) {
  if (e.placement === "world")
    return {
      position: Ut(e, "position", t),
      ...Ut(e, "rotation", t),
      scale: ym(Ut(e, "scale", t))
    };
  const r = Ut(e, "size", t);
  return {
    ...Ut(e, "direction", t),
    roll_deg: Ut(e, "roll", t),
    hFOV_deg: au(r.hFOV_deg),
    vFOV_deg: au(r.vFOV_deg)
  };
}
function Wr(e, t) {
  const r = bm(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && xo(e.clip, t),
    clip_frame: r,
    ...v1(e, r),
    opacity: b1(Ut(e, "opacity", r))
  };
}
const S1 = 2, vm = ["sky", "world"], lu = ["perspective", "erp"], _1 = ["input", "output", "temp"], Sm = [0.42, 0, 0.58, 1], _m = 1, hd = 1e3, cu = 1e7, md = cu, gd = Number.MAX_SAFE_INTEGER, w1 = /^sticker_([0-9]{1,16})$/;
function Vt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Zt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function yd(e, t) {
  const r = Zt(e, t);
  return r !== null && r > 0 ? r : t;
}
function xn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function si(e) {
  const t = Zt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Na(e) {
  const t = si(e);
  return t === null ? null : xn(t, -cu, cu);
}
function fi(e) {
  const t = yd(e, null);
  return t === null ? null : xn(t, _m, hd);
}
function wm(e) {
  const t = si(e);
  return t !== null && t >= 1 ? Math.min(t, md) : null;
}
function vs(e, t) {
  return typeof e == "boolean" ? e : t;
}
function km(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => Zt(r, null));
  return t.includes(null) ? null : t;
}
function xm(e) {
  return km(e) || [0, 0, 0];
}
function Mm(e) {
  const t = Vt(e) ? e : {};
  return {
    yaw_deg: Zt(t.yaw_deg, 0),
    pitch_deg: xn(Zt(t.pitch_deg, 0), -90, 90),
    roll_deg: Zt(t.roll_deg, 0)
  };
}
function k1(e) {
  return xn(Zt(e, 90), 0.1, 179);
}
function x1(e) {
  return yd(e, 1);
}
function M1(e) {
  const t = Vt(e) ? e : {};
  return {
    yaw_deg: Zt(t.yaw_deg, 0),
    pitch_deg: xn(Zt(t.pitch_deg, 0), -90, 90)
  };
}
function N1(e) {
  return Zt(e, 0);
}
function P1(e) {
  const t = Vt(e) ? e : {};
  return {
    hFOV_deg: xn(Zt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: xn(Zt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Nm(e) {
  return xn(Zt(e, 1), 0, 1);
}
const zl = [["position", xm], ["rotation", Mm], ["fov", k1]], jl = [["position", xm], ["rotation", Mm], ["scale", x1]], pi = [["direction", M1], ["roll", N1], ["size", P1], ["opacity", Nm]], hi = [...jl, ["opacity", Nm]];
function A1(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => Zt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...Sm];
}
function C1(e) {
  if (!Vt(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = km(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function I1(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!Vt(i)) continue;
    const o = Na(i.frame);
    if (o === null) continue;
    const s = { frame: o, value: t(i.value), easing: A1(i.easing) }, a = r ? C1(i.handles) : null;
    a && (s.handles = a), n.set(o, s);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function Hl(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = Vt(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: I1(o.keyframes, i, n === "position") };
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
function Pm(e) {
  const t = Vt(e) ? e : {}, r = xn(Zt(t.x0, 0), 0, 1), n = xn(Zt(t.y0, 0), 0, 1), i = xn(Zt(t.x1, 1), 0, 1), o = xn(Zt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function E1(e) {
  if (!Vt(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: _1.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function O1(e) {
  const t = E1(e.source);
  if (!t) return null;
  const r = vm.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: Gl(e.clip),
    visible: vs(e.visible, !0),
    locked: vs(e.locked, !1),
    crop: Pm(e.crop),
    ...Hl(e, n ? hi : pi)
  };
  return n || (i.z_index = si(e.z_index) ?? 0), t.kind === "port" && (i.handoff_overrides = F1(e.handoff_overrides, r)), i;
}
function F1(e, t) {
  const r = Array.isArray(e) ? e : [];
  return (t === "world" ? hi : pi).map(([n]) => n).filter((n) => r.includes(n));
}
function T1(e, t) {
  const r = [];
  let n = !1;
  for (const s of Array.isArray(e) ? e : []) {
    const a = Vt(s) ? O1(s) : null;
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
  let o = R1(t, r);
  for (const s of r)
    if (s.id === null) {
      for (; i.has(`sticker_${o}`); ) o += 1;
      s.id = `sticker_${o}`, o += 1;
    }
  return { stickers: r, next: Math.min(o, gd) };
}
function D1(e) {
  const t = typeof e == "string" ? w1.exec(e) : null, r = t ? Number(t[1]) : 0;
  return r < gd ? r : 0;
}
function Am(e) {
  return e.reduce((t, r) => Math.max(t, D1(r.id)), 0) + 1;
}
function R1(e, t) {
  const r = si(e), n = Am(t);
  return xn(r === null ? n : Math.max(r, n), 1, gd);
}
function L1(e) {
  if (!Vt(e)) return null;
  const t = lu.includes(e.projection) ? e.projection : lu[0];
  return { aspect: yd(e.aspect, 1), projection: t, visible: vs(e.visible, !0), ...Hl(e, zl) };
}
function tl(e) {
  return typeof e == "string" && e ? e : null;
}
function Cm(e, t) {
  const r = new Map(e.map((n, i) => [t(n), i]));
  return e.filter((n, i) => r.get(t(n)) === i);
}
function V1(e) {
  if (!Vt(e) || tl(e.id) === null || !vm.includes(e.placement)) return null;
  const t = e.placement === "world", r = {};
  Vt(e.clip) && (r.clip = Gl(e.clip));
  for (const i of ["visible", "locked"])
    typeof e[i] == "boolean" && (r[i] = e[i]);
  Vt(e.crop) && (r.crop = Pm(e.crop)), Object.assign(r, Hl(e, (t ? hi : pi).filter(([i]) => Vt(e[i]))));
  const n = t ? null : si(e.z_index);
  return n !== null && (r.z_index = n), Object.keys(r).length ? { id: e.id, placement: e.placement, ...r } : null;
}
function Im(e) {
  const t = Vt(e) ? fi(e.fps) : null;
  if (t === null || tl(e.layer) === null) return null;
  const r = Array.isArray(e.deleted) ? [...new Set(e.deleted.filter((c) => tl(c) !== null))] : [], n = (Array.isArray(e.stickers) ? e.stickers : []).map(V1).filter((c) => c !== null), i = Cm(n, (c) => c.id).filter((c) => !r.includes(c.id)), o = Vt(e.scene) ? e.scene : {}, s = {};
  typeof o.visible == "boolean" && (s.visible = o.visible), Vt(o.clip) && (s.clip = Gl(o.clip));
  const a = { layer: e.layer, fps: t, deleted: r, stickers: i, scene: s };
  return typeof e.painting_visible == "boolean" && (a.painting_visible = e.painting_visible), !r.length && !i.length && !Object.keys(s).length && !("painting_visible" in a) ? null : a;
}
function $1(e) {
  const t = (Array.isArray(e) ? e : []).map(Im).filter((r) => r !== null);
  return Cm(t, (r) => r.layer);
}
function nl(e) {
  const t = Vt(e.timeline) ? e.timeline : {}, r = Vt(e.scene) ? e.scene : {}, { stickers: n, next: i } = T1(e.stickers, e.next_sticker_id);
  return {
    version: S1,
    id: tl(e.id),
    timeline: {
      fps: fi(t.fps) ?? 24,
      length: wm(t.length)
    },
    camera: L1(e.camera),
    scene: { clip: Gl(r.clip), visible: vs(r.visible, !0), ...Hl(r, jl) },
    stickers: n,
    next_sticker_id: i,
    painting: ko(e.painting),
    painting_layer: Vt(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: vs(e.painting_visible, !0),
    upstream: $1(e.upstream)
  };
}
function z1(e, t) {
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
function j1(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!Vt(t)) return null;
  const r = xn(Zt(t.hFOV_deg, 90), 1, 179), n = xn(Zt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function H1(e) {
  const t = Vt(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(Vt) : [];
  return r.sort((n, i) => Zt(n.z_index, 0) - Zt(i.z_index, 0)), nl({
    camera: j1(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: z1(n, t),
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
function Ln(e) {
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
  return r === 1 ? H1(t) : nl(t);
}
const kc = {
  state: { painting_visible: !0 },
  camera: { projection: lu[0], visible: !0 },
  scene: { visible: !0 }
};
function xc(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function uu(e) {
  const t = xc(e, kc.state);
  return t.id === null && delete t.id, t.next_sticker_id === Am(e.stickers) && delete t.next_sticker_id, t.upstream.length || delete t.upstream, JSON.stringify({
    ...t,
    camera: e.camera && xc(e.camera, kc.camera),
    scene: xc(e.scene, kc.scene),
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
      const { clip: l, anchor: c, newAnchor: d } = rl(a.clip, i), u = a.placement === "world" ? hi : pi;
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
function Em(e, t) {
  const { fps: r } = t.timeline, n = r / e.fps, i = (l) => si(l * n), o = new Map(t.stickers.map((l) => [l.id, l.clip.start - l.clip.in])), s = e.stickers.map((l) => {
    const c = (l.placement === "world" ? hi : pi).filter(([p]) => Object.hasOwn(l, p));
    if (!Object.hasOwn(l, "clip")) {
      const p = o.get(l.id) ?? 0, w = si(p * (e.fps / r));
      return { ...l, ...os(l, c, i, w, p) };
    }
    const { clip: d, anchor: u, newAnchor: f } = rl(l.clip, i);
    return { ...l, clip: d, ...os(l, c, i, u, f) };
  }), a = Object.hasOwn(e.scene, "clip") ? { ...e.scene, clip: rl(e.scene.clip, i).clip } : e.scene;
  return Im({ ...e, fps: r, stickers: s, scene: a });
}
function Mc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Om(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Fm(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= Ai);
}
function Tm(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? Om(e.keyframes[n - 1].easing) : [...Sm];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function mn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = Mc(i.value, n);
    return;
  }
  const o = Fm(i, r);
  o ? o.value = Mc(o.value, n) : Tm(i, r, Mc(Ut(e, t, r), n));
}
function No(e) {
  return e.placement === "world" ? hi.map(([t]) => t) : e.placement === "sky" ? pi.map(([t]) => t) : (e.clip ? jl : zl).map(([t]) => t);
}
function G1(e, t) {
  for (const r of No(e))
    Fm(e[r], t) || Tm(e[r], t, Ut(e, r, t));
}
function K1(e) {
  const t = No(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function Nc(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function W1(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function U1(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const s = e[o];
    if (!s.keyframes.some((l) => i.has(l.frame))) continue;
    const a = Ut(e, o, n);
    s.keyframes = s.keyframes.filter((l) => !i.has(l.frame)), s.keyframes.length || (s.value = a);
  }
}
function B1(e, t, r, n, i) {
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
function Dm(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((s) => r.length > 1 ? s.frame >= n && s.frame < i : s.frame === n));
}
function Y1(e, t, r) {
  const n = Dm(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function q1(e, t, r, n) {
  for (const i of Dm(e, t, r)) i.easing = Om(n);
}
function X1(e, t) {
  e.start = Math.max(0, e.start + t);
}
function J1(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function Z1(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function Q1(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function bd(e) {
  return No(e).map((t) => e[t]);
}
function il(e) {
  return bd(e).some((t) => t.keyframes.length > 0) || !!e.clip && !Q1(e.clip);
}
function Rm(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(il);
}
const eS = 1e5;
function Lm(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, r);
  if (i && e.camera)
    for (const s of bd(e.camera))
      for (const a of s.keyframes) o = Math.max(o, a.frame + 1);
  return o = Math.max(o, Vm([e.scene, ...e.stickers], n)), Number.isFinite(o) ? o : eS;
}
function Vm(e, t = null) {
  let r = 0;
  for (const n of e) {
    const { clip: i } = n;
    r = Math.max(r, i.duration === null || i === t ? i.start + 1 : i.start + i.duration);
    for (const o of bd(n))
      for (const s of o.keyframes) r = Math.max(r, i.start - i.in + s.frame + 1);
  }
  return r;
}
function tS(e) {
  return e > 0 ? fi(Math.min(e, hd)) : null;
}
function nS(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : wm(Math.max(1, Math.min(e, md)));
}
const Pc = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], rS = 2e3;
function iS(e, t, r = 56) {
  const n = Pc.find((o) => o * t >= r) || Pc[Pc.length - 1], i = [];
  for (let o = 0; o < e && i.length < rS; o += n) i.push(o);
  return i;
}
function oS(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let ua = { text: null, parsed: null };
function Vn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function ol(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function sS({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Vn(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: ko(null),
    painting_layer: null,
    ui_settings: ol(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function $m(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function aS(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function lS(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function cS(e) {
  return Array.isArray(e) ? e.map((t) => pd(t)) : [];
}
function uS(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((s) => String((s == null ? void 0 : s.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function zm(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = sS(r), i = String(e || "").trim();
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
      assets: aS(o.assets),
      stickers: lS(o.stickers),
      shots: cS(o.shots),
      painting: ko(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: ol(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return s && (a.ui_settings = ol({ ...a.ui_settings, ...s })), a.output_preset = $m(
      r.outputPreset,
      Number(a.output_preset || n.output_preset)
    ), a.bg_color = String(r.backgroundColor || a.bg_color || n.bg_color), a.coverage = Vn(r.coverage), delete a.editor_history, a;
  } catch {
    return ua = { text: i, parsed: null }, n;
  }
}
function dS(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function fS(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), e.next_sticker_id > r.next_sticker_id && (r.next_sticker_id = e.next_sticker_id), e.id && !r.id && (r.id = e.id), { state: r, paintingChanged: n };
}
function pS(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function jm(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: s } = t, a = fi(t.fps);
  let l;
  try {
    l = Ln(e);
  } catch {
    l = Ln(null);
  }
  return a && a !== l.timeline.fps && (l = Mo(l, a)), {
    ...l,
    coverage: Vn(i),
    bg_color: n,
    output_preset: $m(r),
    ui_settings: ol(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...s }
  };
}
function hS(e, t) {
  const r = Mo(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, s] of i)
    if (s) {
      o.clip && (o.clip = s.clip);
      for (const a of No(o)) o[a].keyframes = s[a].keyframes;
    }
}
function Hm(e, t, r) {
  if (e.source.kind !== "port" || !((r == null ? void 0 : r.width) > 0 && (r == null ? void 0 : r.height) > 0)) return t.vFOV_deg;
  const n = Math.min(179, Math.max(0.1, t.hFOV_deg)) * _t, i = 2 * Math.atan(Math.tan(n * 0.5) * (r.height / r.width)) / _t;
  return Math.min(179, Math.max(0.1, i));
}
function vd(e, t, r = null) {
  const n = Wr(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: Hm(e, n, r), rot_deg: n.roll_deg };
}
const mS = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Zf(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function gS(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[mS[r]].keyframes.length));
}
function Gm(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = Zf(r, ["yaw_deg", "pitch_deg"]), o = Zf(r, e.source.kind === "port" ? ["hFOV_deg"] : ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && mn(e, "direction", n, i), r.rot_deg !== void 0 && mn(e, "roll", n, r.rot_deg), Object.keys(o).length && mn(e, "size", n, o);
}
const Kl = ["position_x", "position_y", "position_z"], Sd = "camera";
function Km(e, t) {
  const r = $l(e, t);
  return pd({
    id: Sd,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: o1(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function yS(e) {
  return Ln({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Kt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function bS(e) {
  return e - 360 * Math.round(e / 360);
}
function vS(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + bS(r[o] - n[o]));
  Object.keys(i).length && mn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && mn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * _t * 0.5) / Math.tan(r.vFOV_deg * _t * 0.5)), r.position.some((o, s) => o !== n.position[s]) && mn(e, "position", t, [...r.position]);
}
function SS(e, t) {
  const r = Ut(e, "position", t), n = Ut(e, "rotation", t);
  return {
    ...Object.fromEntries(Kl.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Ut(e, "fov", t)
  };
}
function _S(e, t, r, n) {
  const i = Kl.indexOf(r);
  if (i >= 0) {
    const o = Ut(e, "position", t);
    o[i] = n, mn(e, "position", t, o);
  } else r === "hFOV_deg" ? mn(e, "fov", t, n) : mn(e, "rotation", t, { [r]: n });
}
function wS(e, t, r) {
  mn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function kS(e, t) {
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
function xS(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = Kl.indexOf(r);
  if (o >= 0) {
    const s = Ut(e, "position", i);
    s[o] = n, mn(e, "position", i, s);
  } else r === "scale" ? mn(e, "scale", i, n) : r === "opacity" ? mn(e, "opacity", i, n / 100) : mn(e, "rotation", i, { [r]: n });
}
function MS(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && mn(e, i, n, r[i]);
}
function NS(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function PS(e, t, r) {
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
function _d(e, t, r, n) {
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
function AS(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = Kt(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function Wm(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Um(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Bm(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Qf(e, t) {
  return e != null && e.__panoSceneStateV2 ? uu(Ln(t)) : JSON.stringify(t);
}
const CS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function IS() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (e) => CS[e & 63]).join("");
}
function Ym(e, t, r, n) {
  const i = Qf(e, t);
  return ES(e, i, r, n) ? null : !(e != null && e.__panoSceneStateV2) || t.id ? i : (t.id = IS(), Qf(e, t));
}
function ES(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = Ln(r);
    if (uu(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && uu(Mo(i, o)) === t;
  } catch {
    return !1;
  }
}
const Ac = 0.15, OS = 0.01, FS = 1e-3, TS = 0.05, DS = 4, ep = 250, RS = 16, dr = 1, LS = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Wn(e, t, r = 1) {
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
function VS(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function du(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function $S(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : du(e, "3dof", r);
}
function zS(e) {
  return ji(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function jS(e) {
  return Wn(e.position, ji(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function mi(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function ss(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function wd(e, t) {
  return ss(mi(t, e.position), ji(e.yaw_deg, e.pitch_deg).forward);
}
function kd(e) {
  return Math.max(e, 1e-6) * TS;
}
function fu(e, t, r = null, n = dr) {
  if (t) return t;
  const i = kd(n);
  if (r && wd(e, r) > 0) {
    const o = mi(r, e.position), s = Math.hypot(...o);
    return s >= i ? r : Wn(e.position, o, i / s);
  }
  return Wn(e.position, ji(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function qm(e, t = dr) {
  return Math.max(e.distance, kd(t));
}
function Xm(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > DS ? !1 : t.time - e.time < ep || e.cost > RS && t.time - e.wheelTime < ep;
}
function xd(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * _t);
  return { tanX: n, tanY: n * r / t };
}
function Jm(e, t, r, n, i = jS(e)) {
  const o = e.roll_deg ?? 0, [s, a] = HS(t, r, o), l = Kt(e.yaw_deg + s / n * 360), c = Oe(e.pitch_deg - a / n * 360, -89.9, 89.9), d = Nn(e.yaw_deg, e.pitch_deg, o), u = Nn(l, c, o), f = mi(e.position, i), p = [0, 1, 2].map((m) => ss(Mr(d, m), f)), w = { ...e, yaw_deg: l, pitch_deg: c, position: Wn(i, Ul(u, p)) };
  return { ...w, distance: wd(w, i) };
}
function HS(e, t, r) {
  const n = Math.cos(r * _t), i = Math.sin(r * _t);
  return [e * n + t * i, t * n - e * i];
}
function Zm(e, t, r, n, i, o = e.distance) {
  const { right: s, up: a } = zS(e), l = 2 * o * xd(e, n, i).tanY / i;
  return { ...e, position: Wn(Wn(e.position, s, -t * l), a, r * l), distance: o };
}
function Qm(e, t, r, n = dr) {
  const i = mi(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const s = Math.max(n, 1e-6), a = s * OS, l = r > 0 ? Math.min(Math.max(o * Ac, a), o - s * FS) : -Math.max(o * Ac / (1 - Ac), a);
  if (r > 0 && l <= 0) return e;
  const c = { ...e, position: Wn(e.position, i, l / o) };
  return { ...c, distance: Math.max(wd(c, t), kd(n)) };
}
function GS(e, t, r, n) {
  const { tanX: i, tanY: o } = xd(e, r, n), s = Math.atan(Math.min(i, o)), a = Math.max(t.radius, 1e-6) / Math.sin(s) * 1.1, { forward: l } = ji(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Wn(t.center, l, -a), distance: a };
}
function Md(e, t, r, n = null) {
  return eg({
    quaternion: di(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(xd(e, t, r).tanY) * nn,
    aspect: t / r
  }, e.position, e.distance, n);
}
function eg(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: dr }, s = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), a = Math.max(s + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: a * 2
  };
}
function Ss(e, t, r, n) {
  const { right: i, up: o, forward: s } = tg(e), a = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = a[0] * s[0] + a[1] * s[1] + a[2] * s[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * _t), d = c * e.aspect, u = a[0] * i[0] + a[1] * i[1] + a[2] * i[2], f = a[0] * o[0] + a[1] * o[1] + a[2] * o[2];
  return { x: r * 0.5 * (1 + u / l / d), y: n * 0.5 * (1 - f / l / c), z: l };
}
function tg(e) {
  const t = gs(e.quaternion), r = Mr(t, 2);
  return { right: Mr(t, 0), up: Mr(t, 1), forward: r.map((n) => -n) };
}
function al(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function KS({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function Nd(e, t) {
  if (!e || !t.active) return null;
  const r = WS(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: pu(t),
    itemQuaternion: e.kind === "splat" ? LS : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function ng(e, t, r) {
  const n = t.stickers.findIndex((a) => a.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], s = Nd(e, o);
  return s && { ...s, id: i.id, opacity: o.opacity, value: o };
}
function rg(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function WS(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function pu(e) {
  return {
    position: [...e.position],
    quaternion: di(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function hu(e, t) {
  return Wn(e.position, Ul(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function Aa(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function mu({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function gu(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((s) => s[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((s) => s[o]))), n = t.map((o, s) => (o + r[s]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function US(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...mu(t).map((o) => hu(e.scene, o)));
  for (const o of r) i.push(...Pd(o));
  for (const { box: o, value: s } of n) i.push(...mu(o).map((a) => hu(s, a)));
  return i;
}
function BS(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: di(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Nn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function Pd(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Wn(e.position, Ul(e.rotation, [n, i, 0])));
}
function YS(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? gu(Pd(i)) : o != null && o.box ? gu(mu(Aa(o.kind, o.box)).map((s) => hu(n, s))) : { center: [...n.position], radius: n.scale };
}
const qS = 2, XS = 0.5, JS = 30;
function ig(e, t) {
  const r = mi(t, e), n = Math.atan2(r[0], -r[2]) * nn, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * nn;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function ZS(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * XS : qS, o = t ? [...t] : Wn(e.position, ji(e.yaw_deg, e.pitch_deg).forward, i), s = Math.hypot(...mi(o, e.position)), a = s > 0 ? ig(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(s, 1e-3) * Math.tan(JS * 0.5 * _t);
  return { position: o, rotation: a, scale: l };
}
function tp(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function QS(e) {
  return [0, 1, 2].map((t) => Mr(e, t));
}
function np(e, t, r, n) {
  if (e === "translate") return { position: Wn(t.position, mi(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * i_(r.scale, n.scale) / r.scale };
  const i = tp(gs(n.quaternion), QS(gs(r.quaternion))), o = tp(i, Nn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: s, pitchDeg: a, rollDeg: l } = pm(o);
  return Math.abs(a) <= e_ ? { rotation: { yaw_deg: s + 0, pitch_deg: a, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: a, roll_deg: t_(o, t.yaw_deg) } };
}
const e_ = 89.9;
function t_(e, t) {
  const r = Mr(e, 0), n = Mr(e, 1), i = Math.cos(t * _t), o = Math.sin(t * _t);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * nn + 0;
}
const n_ = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function r_(e, t, r, n, i) {
  if (!Ss(e, t, n, i)) return null;
  const { right: o, up: s, forward: a } = tg(e), l = mi(t, e.position), c = ss(l, o), d = ss(l, s), u = ss(l, a), f = Math.tan(e.fovY_deg * 0.5 * _t), p = f * e.aspect, w = Math.hypot(c, d, u) * n_[r] * Math.min(1.9 * f, 7) / 4;
  if (!(u > w)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const m = (ie) => {
    const P = w * Math.sqrt(ie * ie + u * u - w * w);
    return [(ie * u - P) / (u * u - w * w), (ie * u + P) / (u * u - w * w)];
  }, [h, y] = m(c), [z, T] = m(d);
  return {
    minX: n * 0.5 * (1 + h / p),
    maxX: n * 0.5 * (1 + y / p),
    minY: i * 0.5 * (1 - T / f),
    maxY: i * 0.5 * (1 - z / f)
  };
}
function i_(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, s) => Math.abs(s - e) > Math.abs(o - e) ? s : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function o_(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function og(e, t) {
  const r = Nn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * _t) * t, i = n / e.aspect, o = (c, d, u) => Wn(e.position, Ul(r, [c, d, u])), s = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], a = s.map((c) => [e.position, c]);
  s.forEach((c, d) => a.push([c, s[(d + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return a.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), a;
}
function s_(e, t, r, n, i, o = 6) {
  return t.some(([s, a]) => {
    const l = Ss(e, s, n, i), c = Ss(e, a, n, i);
    if (!l || !c) return !1;
    const d = c.x - l.x, u = c.y - l.y, f = Oe(((r.x - l.x) * d + (r.y - l.y) * u) / Math.max(d * d + u * u, 1e-12), 0, 1);
    return Math.hypot(l.x + d * f - r.x, l.y + u * f - r.y) <= o;
  });
}
function a_(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function l_(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Ut(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (s, a) => {
    const l = o === 1 ? 0 : a * i / (o - 1);
    return Ut(n, "position", l);
  });
}
function c_(e, t, r, n, i) {
  const o = Math.max(0, e) * r, s = Math.max(0, t) * r, a = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(s, 1));
  return {
    width: Math.max(1, Math.round(o * a)),
    height: Math.max(1, Math.round(s * a))
  };
}
const sg = 0.28;
function ag(e, t, r) {
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
function lg(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = fd(r, n), s = t.x + t.w * 0.5, a = t.y + t.h * 0.5;
  return {
    rect: { x: s - i, y: a - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * nn,
      vFOV_deg: 2 * Math.atan(o / n) * nn
    }
  };
}
function cg(e, t, r) {
  const [[n, i, o], [s, a, l], [c, d, u]] = gs(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * _t), p = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(w, m = 1e-4) {
      const h = a1(w), y = n * h.x + s * h.y + c * h.z, z = i * h.x + a * h.y + d * h.z, T = -(o * h.x + l * h.y + u * h.z), ie = Math.max(T, m);
      return {
        x: t * 0.5 * (1 + y / ie / p),
        y: r * 0.5 * (1 - z / ie / f),
        z: T
      };
    },
    // The unit direction seen at the point (x, y).
    ray(w, m) {
      const h = (w / t * 2 - 1) * p, y = (1 - m / r * 2) * f;
      return cd(Ma({
        x: n * h + i * y - o,
        y: s * h + a * y - l,
        z: c * h + d * y - u
      }));
    }
  };
}
function ug(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = Os(e, t) }) {
  const s = [];
  e.stickers.forEach((a, l) => {
    const c = o.stickers[l];
    if (a.placement !== "sky") return;
    const d = a.source.kind === "port" && !a.visible;
    if (!c.active && !d) return;
    const u = r(a);
    if (!u) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * _t), p = Math.tan(Hm(a, c, fg(u.media)) * 0.5 * _t), { crop: w } = a;
    s.push({
      kind: "sticker",
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: d ? sg : c.opacity,
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
function dg(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const s = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !s.has(a.id) && s.set(a.id, a);
  return ug(e, t, {
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
function fg(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function pg(e, t, r, { media: n, evaluated: i = Os(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !o.has(a.id) && o.set(a.id, a);
  const s = [];
  return e.stickers.forEach((a, l) => {
    const c = i.stickers[l];
    if (a.placement !== "world" || !c.active) return;
    const d = o.get(a.id), u = d ? n(d) : null;
    if (!u) return;
    const { width: f, height: p } = fg(u.media), w = BS(c, a.crop, f, p);
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
function u_({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: s = () => import("./.lazy/pano_three_view-BVorUOAb.js").then((a) => a.$) }) {
  let a = null, l = null, c = !1, d = 0;
  const u = () => {
    l = rm(a.createThreeView({ onUpdate: n, onSplats: i, createCanvas: () => e }), "editor");
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
    resize(m, h) {
      return l && !f.lost ? l.resize(m, h) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(m, h) {
      l && !f.lost && l.clear(m, h);
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
    pick(m, h, y, z, T) {
      return l && !f.lost ? l.pick(m, h, y, z, T) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(m, h, y, z, T) {
      return l && !f.lost ? l.pickSurface(m, h, y, z, T) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(m, h, y, z, T) {
      return l && !f.lost ? l.pickSticker(m, h, y, z, T) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(m, h, y, z, T, ie) {
      return l && !f.lost ? l.gizmoPointer(m, h, y, z, T, ie) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (l ? l.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", p), e.removeEventListener("webglcontextrestored", w), l == null || l.dispose(), l = null;
    }
  };
  function p(m) {
    m.preventDefault(), !(c || f.lost) && (f.lost = !0, f.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function w() {
    c || !f.lost || queueMicrotask(() => {
      c || !f.lost || (l && (d += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, a && (u(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", p), e.addEventListener("webglcontextrestored", w), s().then((m) => {
    c || (a = m, !f.lost && (u(), f.ready = !0, t()));
  }).catch((m) => {
    console.error("[PanoramaStickers] three.js view is unavailable", m), f.failed = !0, r();
  }), f;
}
const hg = "3D view unavailable. Check the browser console.";
function ll(e, t, r) {
  return ag({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function d_(e) {
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
const mg = d_(
  () => import("./.lazy/pano_three_view-BVorUOAb.js").then((e) => e.$).then((e) => rm(e.createThreeView({ createCanvas: () => on({ label: "three.node" }) }), "node"))
), fr = ["erp_image", "bg_erp", "bg_media"], Ad = ["sticker_image", "sticker"], gg = ["scene"], Cd = ["sticker", "sticker_state"], f_ = {
  background: fr,
  "external-sticker": Ad,
  scene: gg,
  "sticker-handoff": Cd
};
function yg(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Bl(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = yg(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function bg(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function rp(e, t) {
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
function vg(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const s = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((a) => String(a == null ? void 0 : a.id) === r[o]);
    if (!s || o === r.length - 1) return { graph: n, entry: s };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((a) => (a == null ? void 0 : a.id) === s.type);
  }
}
function p_(e, t) {
  const { graph: r, entry: n } = vg(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((s) => Array.isArray(s) ? [s[0], { origin_id: s[1], origin_slot: s[2] }] : [s == null ? void 0 : s.id, s])), o = {};
  for (const s of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const a = yg(i.get(s == null ? void 0 : s.link));
    a && (o[String((s == null ? void 0 : s.name) || "")] = a);
  }
  return o;
}
const Sg = [...fr, ...Ad, ...gg, ...Cd], h_ = 256, eo = /* @__PURE__ */ new Map(), Cc = /* @__PURE__ */ new WeakMap();
let _g = () => null;
function wg(e) {
  return Cc.has(e) || Cc.set(e, JSON.stringify(e)), Cc.get(e);
}
function m_(e) {
  _g = e;
}
function cl(e, t) {
  const r = wg(e);
  eo.delete(r), eo.set(r, t), eo.size > h_ && eo.delete(eo.keys().next().value);
}
function Wt(e, t) {
  var o;
  const r = e ? _g(e) : null;
  if (!r) return !0;
  const n = Bl(e);
  let i = eo.get(wg(r));
  if (i)
    cl(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((s) => Sg.includes(s == null ? void 0 : s.name)))) return !0;
    cl(r, n), i = n;
  }
  return f_[t].every((s) => i[s] === n[s]);
}
const ul = /* @__PURE__ */ new WeakSet();
async function yu(e, t) {
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
function kg(e, t) {
  var o, s, a, l, c;
  const r = (a = (s = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : s.extra_pnginfo) == null ? void 0 : a.workflow, { entry: n } = vg(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = n == null ? void 0 : n.inputs) != null && c.some((d) => Sg.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: p_(r, t) };
}
const Ca = /* @__PURE__ */ new Map();
function g_(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && Ca.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await yu(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const s = kg(i, o);
        s && cl(s.output, s.inputs);
      }
    });
}
const y_ = 5;
function b_(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${y_}`, n = yu(e, `/jobs?${r}`).then((s) => (s == null ? void 0 : s.jobs) || []), i = /* @__PURE__ */ new Map(), o = (s) => (i.has(s) || i.set(s, yu(e, `/jobs/${encodeURIComponent(s)}`)), i.get(s));
  return {
    async lastNodeOutput(s, a) {
      var c, d, u, f;
      const l = String(s.id);
      for (const { id: p } of await n) {
        if (!a()) return null;
        const w = await o(p);
        if ((c = w == null ? void 0 : w.outputs) != null && c[l])
          return ((f = (u = (d = w.workflow) == null ? void 0 : d.prompt) == null ? void 0 : u[l]) == null ? void 0 : f.class_type) !== s.comfyClass ? null : kg(w, l);
      }
      return null;
    }
  };
}
function v_(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, s;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((s = i.changeTracker) == null ? void 0 : s.nodeOutputs);
  });
}
let Yi = null;
async function S_(e, t, r) {
  var a;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || ul.has(r) || (a = Ca.get(i)) != null && a.has(n) || v_(t)) return null;
  (Yi == null ? void 0 : Yi.workflowId) !== i && (Yi = { workflowId: i, history: b_(r, i) }, queueMicrotask(() => {
    Yi = null;
  }));
  const s = await Yi.history.lastNodeOutput(e, o);
  return o() ? s ? (cl(s.output, s.inputs), t.nodeOutputs[n] = s.output, s.output) : (ul.has(r) || Ca.set(i, (Ca.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function ip(e, t, r, n = fr) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((s == null ? void 0 : s.name) || ""));
}
const op = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Ia(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return op.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return op.test(String((e == null ? void 0 : e.filename) || ""));
}
const Ic = /* @__PURE__ */ new WeakMap();
function __(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function bu(e) {
  return __(e) ? (Ic.has(e) || Ic.set(e, Math.random().toString(36).slice(2, 10)), Ic.get(e)) : "run";
}
function xg(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function w_(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, s) => {
    for (const a of s) {
      const l = r(o, a);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, d) => d)));
    }
  };
  return i(e, t), n;
}
function Id(e, t = [], r = null) {
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
function k_({
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
  const m = () => {
    o || p || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, h = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var z, T;
      o || (o = !0, s && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(s), s = 0), n.removeEventListener("loadedmetadata", c), n.removeEventListener("loadeddata", c), n.removeEventListener("timeupdate", d), n.removeEventListener("play", u), n.removeEventListener("pause", f), n.removeEventListener("error", w), n.pause(), (z = n.removeAttribute) == null || z.call(n, "src"), (T = n.load) == null || T.call(n));
    },
    failed: () => p,
    play: m,
    pause: h,
    toggle() {
      n.paused ? m() : h();
    },
    get playing() {
      return !o && !n.paused && !n.ended;
    }
  };
}
const _s = /* @__PURE__ */ new WeakMap(), Mg = {
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
  return r || (r = {}, _s.set(e, r)), r[t] ?? (r[t] = Mg[t]());
}
function Yl(e, t) {
  var r;
  return e && typeof e == "object" && ((r = _s.get(e)) == null ? void 0 : r[t]) || null;
}
const dl = (e) => Fs(e, "editorSession"), bt = (e) => Fs(e, "nodeSurface"), $r = (e) => Fs(e, "previewNode"), Pn = (e) => Fs(e, "mediaCache"), Kn = (e) => Fs(e, "stateSync"), x_ = (e) => Yl(e, "editorSession"), Ng = (e) => Yl(e, "nodeSurface"), Pg = (e) => Yl(e, "previewNode");
function Ec(e) {
  var t;
  e && (e.onload = null, e.onerror = null, (t = e.removeAttribute) == null || t.call(e, "src"));
}
const M_ = {
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
      Ec(o == null ? void 0 : o.img), Ec(o == null ? void 0 : o.pendingImg);
    }), (n = (r = (t = e.ownOutputVideo) == null ? void 0 : t.player) == null ? void 0 : r.destroy) == null || n.call(r), Ec((i = e.studioRunImage) == null ? void 0 : i.image);
  },
  stateSync() {
  }
};
function N_(e, t) {
  const r = Yl(e, t);
  if (r)
    try {
      M_[t](r);
    } finally {
      delete _s.get(e)[t];
    }
}
function P_(e) {
  for (const t of Object.keys(Mg))
    try {
      N_(e, t);
    } catch (r) {
      console.error(`[PanoramaSuite] disposing ${t} of a node failed`, r);
    }
  e && typeof e == "object" && _s.delete(e);
}
function wi(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function A_(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function sp(e, t, r = null) {
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
  return !n && r != null && (n = A_(e == null ? void 0 : e.graph, r)), n;
}
function C_(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function I_(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function E_(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function Ag({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (P) => {
    if (!P) return "";
    if (typeof P == "string") return String(P || "").trim();
    if (Array.isArray(P)) {
      if (P.length === 0) return "";
      if (P.length === 1) return i(P[0]);
      const X = String(P[0] || "").trim();
      if (X)
        return wi(t, {
          filename: X,
          subfolder: String(P[1] || "").trim(),
          type: String(P[2] || "output").trim() || "output"
        });
      for (const j of P) {
        const J = i(j);
        if (J) return J;
      }
      return "";
    }
    return typeof (P == null ? void 0 : P.src) == "string" && P.src ? P.src : typeof (P == null ? void 0 : P.url) == "string" && P.url ? P.url : wi(t, P);
  }, o = (P) => {
    if (!P || typeof P != "object") return "";
    const X = String(P.type || "").trim().toLowerCase();
    if (X === "dataurl") return String(P.value || "");
    if (X !== "comfy_image") return "";
    const j = String(P.filename || "").trim();
    return j ? wi(t, {
      filename: j,
      subfolder: String(P.subfolder || ""),
      type: String(P.storage || "input")
    }) : "";
  }, s = (P) => {
    const X = e == null ? void 0 : e.nodeOutputs;
    if (!X || P == null) return null;
    const j = String(P);
    return X instanceof Map ? X.get(P) || X.get(j) || X.get(Number(j)) || null : X[P] || X[j] || null;
  }, a = (P, X) => {
    var J;
    const j = s(P == null ? void 0 : P.id);
    return Array.isArray((J = j == null ? void 0 : j.ui) == null ? void 0 : J[X]) ? j.ui[X] : Array.isArray(j == null ? void 0 : j[X]) ? j[X] : [];
  }, l = (P, X) => {
    const j = s(P == null ? void 0 : P.id);
    return j != null && j.ui && Object.prototype.hasOwnProperty.call(j.ui, X) ? j.ui[X] : j && Object.prototype.hasOwnProperty.call(j, X) ? j[X] : null;
  }, c = (P, X) => {
    const j = l(P, "pano_sticker_input_state_hash"), J = Array.isArray(j) ? j[0] : j;
    return String(J ?? "").trim() || E_(X);
  }, d = (P) => {
    const X = [], j = /* @__PURE__ */ new Set();
    for (const J of P || []) {
      const _e = i(J);
      !_e || j.has(_e) || (j.add(_e), X.push(_e));
    }
    return X;
  }, u = (P, X) => {
    var _e;
    const j = [];
    Array.isArray(P == null ? void 0 : P.images) && P.images.length && j.push(P.images), Array.isArray((_e = P == null ? void 0 : P.ui) == null ? void 0 : _e.images) && P.ui.images.length && j.push(P.ui.images);
    const J = [];
    for (const ke of j)
      X >= 0 && X < ke.length && J.push(ke[X]), J.push(...ke);
    return J;
  }, f = (P, X) => {
    var $;
    const j = String(X || "").trim();
    if (!j) return { src: "", sourceType: "", inputName: "" };
    const _e = (Array.isArray(P == null ? void 0 : P.inputs) ? P.inputs : []).findIndex((A) => String((A == null ? void 0 : A.name) || "") === j);
    if (_e < 0) return { src: "", sourceType: "", inputName: j };
    const ke = P.graph ? P.getInputLink(_e) : null;
    if ((ke == null ? void 0 : ke.origin_id) == null) return { src: "", sourceType: "", inputName: j };
    const ge = ke.origin_id, ve = sp(P, _e, ge);
    if (!ve) return { src: "", sourceType: "", inputName: j };
    const he = Number(ke.origin_slot ?? 0);
    let Se = [];
    try {
      Se = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(ve) || [] : [];
    } catch {
      Se = [];
    }
    if (Array.isArray(Se) && Se.length) {
      const A = [];
      he >= 0 && he < Se.length && A.push(Se[he]), A.push(...Se);
      const D = d(A.filter((ee) => !Ia(ee)));
      if (D.length)
        return { src: D[0], srcCandidates: D, sourceType: "appNodeImageUrls", inputName: j };
    }
    const pe = s((ve == null ? void 0 : ve.id) ?? ge), ne = d(u(pe, he).filter((A) => !Ia(A))).map((A) => `${A}&pano_src=${bu(pe)}`);
    if (ne.length)
      return { src: ne[0], srcCandidates: ne, sourceType: "nodeOutputs", inputName: j };
    const ae = Array.isArray(ve == null ? void 0 : ve.imgs) ? ve.imgs : [];
    if (ae.length) {
      const A = [];
      he >= 0 && he < ae.length && A.push(ae[he]), A.push(...ae);
      const D = d(A);
      if (D.length)
        return { src: D[0], srcCandidates: D, sourceType: "nodeImgs", inputName: j };
    }
    const fe = ($ = ve == null ? void 0 : ve.widgets) == null ? void 0 : $.find((A) => String((A == null ? void 0 : A.name) || "").toLowerCase() === "image");
    if (fe) {
      let A = i(fe.value);
      if (A && !A.includes("/") && !A.includes(":") && (ve.comfyClass === "LoadImage" || ve.type === "LoadImage") && (A = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(A)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(A)}&type=input&subfolder=`), A) return { src: A, sourceType: "widget", inputName: j };
    }
    return { src: "", sourceType: "", inputName: j };
  }, p = (P, X = []) => {
    var J;
    const j = Array.isArray(P == null ? void 0 : P.inputs) ? P.inputs : [];
    for (const _e of X) {
      const ke = j.findIndex((Se) => String((Se == null ? void 0 : Se.name) || "") === _e), ge = ke >= 0 && P.graph ? P.getInputLink(ke) : null;
      if ((ge == null ? void 0 : ge.origin_id) == null) continue;
      const ve = s(((J = sp(P, ke, ge.origin_id)) == null ? void 0 : J.id) ?? ge.origin_id), he = (Array.isArray(ve == null ? void 0 : ve.images) ? ve.images : []).find(Ia);
      return he ? `${wi(t, he)}&pano_src=${bu(ve)}` : "";
    }
    return "";
  }, w = (P, X = []) => {
    const j = Array.isArray(X) ? X : [X];
    for (const J of j) {
      const _e = f(P, J);
      if (String((_e == null ? void 0 : _e.src) || "").trim()) return _e;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, m = (P) => {
    const X = String(P || "").trim();
    if (!X) return [];
    if (C_(X)) return [X];
    const { filename: j, subfolder: J } = I_(X);
    return j ? d([
      wi(t, { filename: j, subfolder: J, type: "temp" }),
      wi(t, { filename: j, subfolder: J, type: "output" }),
      wi(t, { filename: j, subfolder: J, type: "input" }),
      X
    ]) : [X];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (P) => {
      var X;
      try {
        (X = Pn(P)) == null || X.linkedImages.forEach((j, J, _e) => {
          var ke;
          j != null && j.img && ((ke = n == null ? void 0 : n.isImageLoadFailed) != null && ke.call(n, j.img)) && _e.delete(J);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (P, X) => {
      var j;
      (j = P == null ? void 0 : P.delete) == null || j.call(P, `__ui__${String(X || "")}`);
    },
    linkedValue: (P, X) => {
      var ge, ve, he, Se;
      const j = String(X || ""), J = Array.isArray(P == null ? void 0 : P.inputs) ? P.inputs.findIndex((pe) => String((pe == null ? void 0 : pe.name) || "") === j) : -1, _e = J >= 0 && P.graph ? P.getInputLink(J) : null;
      if (_e) {
        const pe = s(_e.origin_id), ne = [
          pe == null ? void 0 : pe.output,
          pe == null ? void 0 : pe.result,
          (ge = pe == null ? void 0 : pe.data) == null ? void 0 : ge.output,
          (ve = pe == null ? void 0 : pe.data) == null ? void 0 : ve.result,
          (he = pe == null ? void 0 : pe.ui) == null ? void 0 : he.output,
          (Se = pe == null ? void 0 : pe.ui) == null ? void 0 : Se.result
        ];
        for (const ae of ne) {
          if (!Array.isArray(ae)) continue;
          const fe = ae[Number(_e.origin_slot || 0)];
          if (typeof fe == "string" && fe.trim()) return fe;
        }
      }
      const ke = Array.isArray(P == null ? void 0 : P.widgets) ? P.widgets.find((pe) => String((pe == null ? void 0 : pe.name) || "") === j) : null;
      return String((ke == null ? void 0 : ke.value) || "");
    },
    linkedVideoFile: p,
    loadPreferredExactLinkedImage: (P, X = [], j = null, J = "") => {
      var U;
      const _e = Array.isArray(X) ? X : [X], ke = w(P, _e), ve = (Array.isArray(ke == null ? void 0 : ke.srcCandidates) && ke.srcCandidates.length ? ke.srcCandidates : [ke == null ? void 0 : ke.src]).map((b) => String(b || "").trim()).filter(Boolean);
      if (!ve.length) return null;
      const he = d(ve.flatMap((b) => m(b)));
      if (!he.length) return null;
      const Se = Pn(P).linkedImages, pe = String(J || _e.join("|") || "image_exact"), ne = ve.join(`
`), ae = Se.get(pe);
      if (ae && ae.srcRaw === ne && ae.img) return ae.img;
      const fe = r || globalThis.Image;
      if (typeof fe != "function") return null;
      const $ = new fe();
      (U = n == null ? void 0 : n.markImageLoading) == null || U.call(n, $, ne);
      const A = { srcRaw: ne, resolvedSrc: "", img: $ };
      Se.set(pe, A);
      let D = -1;
      const ee = (b) => {
        var Y, ue, C;
        b === "ready" ? (Y = n == null ? void 0 : n.markImageReady) == null || Y.call(n, $, ne) : (ue = n == null ? void 0 : n.markImageFailed) == null || ue.call(n, $, ne), j == null || j($), (C = P.setDirtyCanvas) == null || C.call(P, !0, !0);
      }, se = () => {
        if (D += 1, D >= he.length) {
          ee("failed");
          return;
        }
        A.resolvedSrc = he[D], $.src = A.resolvedSrc;
      };
      return $.onload = () => ee("ready"), $.onerror = () => {
        if (D + 1 < he.length) {
          se();
          return;
        }
        ee("failed");
      }, se(), $;
    },
    output: s,
    resolvePreferredExactLinkedSource: w,
    source: i,
    uiImage: (P, X, j, J = null) => {
      var pe, ne, ae;
      const _e = a(P, X)[0] || null, ke = i(_e);
      if (!ke) return null;
      const ge = `__ui__${X}`, ve = (pe = j == null ? void 0 : j.get) == null ? void 0 : pe.call(j, ge);
      if (ve && ve.__panoSrc === ke) return ve;
      const he = r || globalThis.Image;
      if (typeof he != "function") return null;
      const Se = new he();
      return Se.__panoSrc = ke, (ne = n == null ? void 0 : n.markImageLoading) == null || ne.call(n, Se, ke), Se.onload = () => {
        var fe;
        (fe = n == null ? void 0 : n.markImageReady) == null || fe.call(n, Se, ke), J == null || J(Se);
      }, Se.onerror = () => {
        var fe;
        (fe = n == null ? void 0 : n.markImageFailed) == null || fe.call(n, Se, ke), J == null || J(Se);
      }, Se.src = ke, (ae = j == null ? void 0 : j.set) == null || ae.call(j, ge, Se), Se;
    },
    uiList: a,
    uiValue: l
  };
}
const O_ = 1e-3;
function Ed(e, t, r, n) {
  if (!xo(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const s = Math.floor(i + 0.5);
    return s >= 0 && s < n.frames ? (s + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(O_ / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function Od(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function F_(e, t) {
  return Math.floor(e * t.fps);
}
function Fd(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const ap = 4;
function Td({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(s) {
    return n.has(s) || n.set(s, e(r[s], t)), n.get(s);
  }
  return {
    picture(s, a, l, c) {
      if ((s.length !== r.length || s.some((f, p) => f !== r[p])) && (r = s, n.clear(), i = null), a === null) return null;
      const d = F_(a, l);
      for (let f = d; f < Math.min(r.length, d + ap + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < d || f > d + ap) && f !== i && n.delete(f);
      const u = n.get(d);
      return u != null && u.complete && u.naturalWidth > 0 && (i !== null && i !== d && n.delete(i), i = d), i === null ? c : n.get(i);
    }
  };
}
function Cg({
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
const bo = { sky: ["direction", "roll", "size"], world: ["position", "rotation", "scale"] }, T_ = ["id", "source", "clip", "visible", "locked", "crop", "opacity", "handoff_overrides"];
function Ig(e) {
  const t = Array.isArray(e) ? e[0] : e;
  return !t || typeof t != "object" || !bo[t.placement] || !t.lanes || typeof t.lanes != "object" ? null : { placement: t.placement, lanes: t.lanes, fps: fi(t.fps) };
}
function ni(e) {
  return structuredClone(e);
}
function D_(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function R_(e, t, r) {
  const n = e.fps ?? t;
  if (n === t) return e.lanes;
  const i = r.start - r.in, o = Math.floor(i * n / t + 0.5);
  return Object.fromEntries(Object.entries(e.lanes).map(([s, a]) => [s, {
    value: a.value,
    keyframes: (a.keyframes ?? []).map((l) => ({ ...l, frame: Math.floor((o + l.frame) * t / n + 0.5) - i }))
  }]));
}
function Dd(e, t, r) {
  const n = R_(r, e.timeline.fps, t.clip);
  let i;
  if (t.placement === r.placement) {
    i = { ...t };
    for (const o of bo[r.placement]) t.handoff_overrides.includes(o) || (i[o] = n[o]);
  } else
    i = { ...Object.fromEntries(T_.map((o) => [o, t[o]])), placement: r.placement, ...n }, r.placement === "sky" && (i.z_index = e.stickers.reduce((o, s) => s.id !== t.id && s.placement === "sky" ? Math.max(o, s.z_index) : o, -1) + 1);
  return ni(Ln({ version: 2, stickers: [i] }).stickers[0]);
}
function L_(e, t) {
  const r = e.stickers.findIndex((n) => n.source.kind === "port");
  return !t || r < 0 ? e : { ...e, stickers: e.stickers.map((n, i) => i === r ? Dd(e, n, t) : n) };
}
function V_(e, t) {
  const r = bo[e.placement];
  if (t.id !== e.id || t.placement !== e.placement) return e.handoff_overrides;
  const n = r.filter((i) => !D_(e[i], t[i]));
  if (n.length) {
    const i = /* @__PURE__ */ new Set([...e.handoff_overrides, ...n]);
    e.handoff_overrides = [...r, "opacity"].filter((o) => i.has(o));
  }
  return e.handoff_overrides;
}
function $_(e, t) {
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
function z_(e, t, r, n) {
  return !t.handoff_overrides.includes(n) || t.placement !== r.placement ? !1 : (t.handoff_overrides = t.handoff_overrides.filter((i) => i !== n), t[n] = ni(Dd(e, t, r)[n]), !0);
}
const Ea = "sticker_image_1", Eg = "external_image", vo = 0;
function Oa(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function Oc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function ai(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function vu(e, t = vo) {
  return (e == null ? void 0 : e.version) !== 2 ? ai(e) : ai(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: Wr(r, t).active,
    external: r.source.kind === "port",
    ...vd(r, t)
  }));
}
function Rd(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && ai(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function Og(e) {
  return String((e == null ? void 0 : e.id) || "") === Ea || String((e == null ? void 0 : e.source_kind) || "") === Eg;
}
function Ld(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Og(t);
}
const Fg = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Tg(e) {
  return !Og(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Fg.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function Dg(e) {
  const t = Tg(e);
  return t ? Fg.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function Rg(e, t = {}) {
  var ie, P, X;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((j) => String((j == null ? void 0 : j.id) || "") === Ea);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const j = String(((ie = e.active) == null ? void 0 : ie.selected_sticker_id) || "") === Ea;
    return {
      state: {
        ...e,
        stickers: r.filter((J, _e) => _e !== n),
        active: j ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), s = n >= 0 ? r[n] : null, a = !s || Number(s.source_link_id ?? -1) !== i || String(s.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), d = l > 0 && c > 0, u = Math.max(1, l), f = Math.max(1, c), p = t.pose && typeof t.pose == "object" ? t.pose : {}, w = a ? p.hFOV_deg || (s == null ? void 0 : s.hFOV_deg) || 30 : (s == null ? void 0 : s.hFOV_deg) || p.hFOV_deg || 30, m = Math.min(179, Math.max(0.1, Number(w)));
  if (!a) {
    if (!d) return { state: e, changed: !1 };
    const j = Oa(m, u, f), J = Number(((P = s == null ? void 0 : s.initial_pose) == null ? void 0 : P.hFOV_deg) ?? m), _e = Oa(J, u, f), ke = Number(((X = s == null ? void 0 : s.initial_pose) == null ? void 0 : X.vFOV_deg) ?? _e);
    return Math.abs(Number((s == null ? void 0 : s.vFOV_deg) || 0) - j) <= 1e-6 && Math.abs(ke - _e) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((ge, ve) => ve === n ? {
          ...ge,
          vFOV_deg: j,
          initial_pose: ge.initial_pose && typeof ge.initial_pose == "object" ? { ...ge.initial_pose, vFOV_deg: _e } : ge.initial_pose
        } : ge)
      },
      changed: !0
    };
  }
  const h = r.reduce((j, J) => Math.max(j, Number((J == null ? void 0 : J.z_index) || 0)), -1), y = {
    yaw_deg: Number(p.yaw_deg || 0),
    pitch_deg: Number(p.pitch_deg || 0),
    hFOV_deg: m,
    vFOV_deg: d ? Oa(m, u, f) : Number(p.vFOV_deg || (s == null ? void 0 : s.vFOV_deg) || m),
    rot_deg: Number(p.rot_deg ?? p.roll_deg ?? 0)
  }, z = {
    ...s || {},
    id: Ea,
    source_kind: Eg,
    source_link_id: i,
    source_state_hash: o,
    ...y,
    initial_pose: { ...y },
    visible: !0,
    z_index: h + 1
  }, T = n >= 0 ? r.map((j, J) => J === n ? z : j) : [...r, z];
  return { state: { ...e, stickers: T }, changed: !0 };
}
function fl(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const j_ = ["IMAGE", "VIDEO"];
function lp(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => j_.includes(r)) ? "2d" : null;
}
function H_(e, t) {
  var i, o, s, a, l, c;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? lp(n.type) ?? lp((c = (l = (a = (s = (o = e.graph).getNodeById) == null ? void 0 : s.call(o, n.origin_id)) == null ? void 0 : a.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : c.type) : null;
}
function Lg(e, { pose: t = null, handoff: r = null } = {}) {
  return {
    connected: fl(e, "sticker"),
    awaitingPose: !t && (fl(e, "sticker_state") || H_(e, "sticker") !== "2d"),
    pose: t,
    handoff: !!r
  };
}
function Vg(e) {
  return fl(e, "sticker") && fl(e, "sticker_state");
}
function G_(e, t) {
  return Vg(e) ? Ig(t) : null;
}
function K_(e, t, r) {
  return L_(jm(e, t), Ig(r));
}
function cp(e, t, r = {}) {
  const n = t.keyframes ?? {}, i = {
    ...r,
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position, keyframes: n.position ?? [] },
    rotation: { value: t.rotation, keyframes: n.rotation ?? [] },
    scale: { value: t.scale, keyframes: n.scale ?? [] }
  };
  return Ln({ version: 2, stickers: [i] }).stickers[0];
}
function $g(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null, handoff: i = !1 } = {}) {
  var f;
  const o = e.stickers.findIndex((p) => Ld(e, p)), s = o >= 0 ? e.stickers[o] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const p = ((f = e.active) == null ? void 0 : f.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((w, m) => m !== o),
        active: p ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  if (s && (n == null ? void 0 : n.placement) === "world" && n.replace && s.placement === "sky" && !i) {
    const p = Object.fromEntries(["clip", "visible", "locked", "crop", "opacity", "handoff_overrides"].map((m) => [m, s[m]])), w = cp(s.id, n, p);
    return { state: { ...e, stickers: e.stickers.map((m, h) => h === o ? w : m) }, changed: !0 };
  }
  if (s || r) return { state: e, changed: !1 };
  const a = { ...e }, l = Wl(a);
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...a, stickers: [...e.stickers, cp(l, n)] }, changed: !0 };
  const c = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), d = _d(l, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: c,
    vFOV_deg: c
  }, ai(e).reduce((p, w) => Math.max(p, w.z_index), -1) + 1), u = (n == null ? void 0 : n.keyframes) ?? {};
  return d.direction.keyframes = u.direction ?? [], d.roll.keyframes = u.roll ?? [], d.size.keyframes = (u.size ?? []).map((p) => ({ ...p, value: { ...p.value, vFOV_deg: p.value.hFOV_deg } })), d.handoff_overrides = [], { state: { ...a, stickers: [...e.stickers, d] }, changed: !0 };
}
function Vd(e) {
  const t = ai(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: Oc(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: Oc(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: Oc(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, s) => o.z_index - s.z_index);
}
function zg(e) {
  const t = Rd(e), r = Ld(e, t), n = ai(e).some((a) => a && a.visible !== !1), i = Vd(e), o = t ? i.findIndex((a) => a.type === "sticker" && a.item === t) : -1, s = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: Dg(t),
    selectedId: t ? String(t.id || "") : null,
    locked: s,
    canDelete: !!t && !s,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function W_(e) {
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
function up(e, t) {
  const r = Rd(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = W_(e), i = String(r.id || ""), o = Vd(n), s = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (s < 0) return { state: e, changed: !1 };
  if (t === "front" && s === o.length - 1 || t === "back" && s === 0)
    return { state: e, changed: !1 };
  const [a] = o.splice(s, 1);
  return t === "front" ? o.push(a) : o.unshift(a), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: n, changed: !0 };
}
function U_(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function B_(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Rg(e, t.value);
  if (t.type === "sync-port") return $g(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), s = String(i.assetId || "").trim();
    if (!o || !s || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = Vd(e).reduce((f, p) => Math.max(f, Number(p.z_index || 0)), -1), c = 30, d = {
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
          stickers: [...e.stickers, _d(p, Pa(i.asset), d, l + 1)],
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
  const r = Rd(e);
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
    const i = Tg(r);
    return !i || !Dg(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return up(e, "front");
  if (t.type === "send-back") return up(e, "back");
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
    return e.version !== 2 && (a.assets = U_(a)), { state: a, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], s = e.version === 2 ? vd(r, vo) : r, a = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(s[l] || 0)) > 1e-12 && (a[l] = c);
    }), !Object.keys(a).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = gS(r, a);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(r);
      return Gm(c, vo, l), { state: { ...e, stickers: e.stickers.map((d) => d === r ? c : d) }, changed: !0 };
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
function Y_(e = {}) {
  return Cg({
    ...e,
    reduce: B_,
    projectModel: zg
  });
}
const Su = 2;
function Ni(e, t) {
  return Math.floor(e * t + 0.5);
}
function q_(e, t) {
  return Math.floor(e * t + 1e-3);
}
function jg({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: s, onChange: a }) {
  let l = 0, c = !1, d = !1, u = { name: "idle" }, f = [];
  const p = () => c && !d, w = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function m() {
    for (const $ of f) $();
    f = [];
  }
  function h($, A = {}) {
    return m(), u = { name: $, ...A }, a(), u;
  }
  function y($, A, D) {
    const ee = () => {
      u === $ && D();
    };
    e.addEventListener(A, ee), f.push(() => e.removeEventListener(A, ee));
  }
  function z($, A) {
    let D = t.requestFrame(function ee(se) {
      u === $ && (A(se), u === $ && (D = t.requestFrame(ee)));
    });
    f.push(() => t.cancelFrame(D));
  }
  function T($) {
    l = $, o(l);
  }
  function ie() {
    return h(d ? "error" : "idle");
  }
  function P() {
    d = !0, ie();
  }
  function X() {
    const { seekable: $ } = e, A = $ != null && $.length ? $.end($.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(A) ? A : 1 / 0));
  }
  function j($) {
    if (!p()) return $ === "play" ? ve() : ie();
    if (e.readyState < Su) {
      const A = h("loading", { then: $ });
      return y(A, "loadeddata", () => j(A.then)), y(A, "error", P), A;
    }
    return $ === "play" && l / r() >= Number(e.duration) ? ve() : J($, !1);
  }
  function J($, A) {
    const D = X();
    if (!e.ended && Ni(Number(e.currentTime), r()) === Ni(D, r())) return _e($);
    const ee = h("seeking", { then: $, frame: l, retried: A });
    return y(ee, "seeked", () => {
      const se = Ni(Number(e.currentTime), r()) === Ni(X(), r()), U = l === ee.frame;
      se || U && ee.retried ? _e(ee.then) : J(ee.then, U);
    }), y(ee, "error", P), e.currentTime = D, ee;
  }
  function _e($) {
    return $ === "play" ? ke() : (s(), ie());
  }
  function ke() {
    const $ = h("playingVideo", { shown: !1 });
    if (y($, "pause", () => e.ended ? ge() : pe()), y($, "ended", ge), y($, "error", P), i() && Ni(Number(e.duration), r()) >= n()) {
      const D = e.loop;
      e.loop = !0, f.push(() => {
        e.loop = D;
      });
    }
    const A = (D, ee) => {
      ee && !$.shown && ($.shown = !0, a()), he(Ni(D, r()));
    };
    if (w()) {
      let D = e.requestVideoFrameCallback(function ee(se, U) {
        u === $ && (A(Number(U.mediaTime), !0), u === $ && (D = e.requestVideoFrameCallback(ee)));
      });
      f.push(() => {
        var ee;
        return (ee = e.cancelVideoFrameCallback) == null ? void 0 : ee.call(e, D);
      });
    } else
      z($, () => A(Number(e.currentTime), e.readyState >= Su));
    return Promise.resolve(e.play()).catch(() => {
      u === $ && pe();
    }), $;
  }
  function ge() {
    s(), ve();
  }
  function ve() {
    const $ = h("playingClock", { startTs: t.now(), startFrame: l });
    return z($, (A) => he($.startFrame + Math.floor((A - $.startTs) / 1e3 * r()))), $;
  }
  function he($) {
    if ($ < n()) {
      T($);
      return;
    }
    if (!i()) {
      Se(n() - 1);
      return;
    }
    u.name === "playingVideo" && (m(), e.pause()), T(0), j("play");
  }
  function Se($) {
    u.name === "playingVideo" ? (m(), e.pause(), T(Math.max(0, $)), s()) : T(Math.max(0, $)), j("still");
  }
  function pe() {
    if (u.name === "loading" || u.name === "seeking")
      u.then = "still", a();
    else if (u.name === "playingVideo") {
      m(), e.pause();
      const $ = q_(Number(e.currentTime), r());
      T(Math.min($, n() - 1)), s(), l === $ ? ie() : j("still");
    } else u.name === "playingClock" && Se(Math.min(l, n() - 1));
  }
  function ne() {
    if (!fe()) {
      if (l >= n() - 1 && T(0), u.name === "loading" || u.name === "seeking") {
        u.then = "play", a();
        return;
      }
      j("play");
    }
  }
  function ae($) {
    const A = Math.max(0, Math.round($));
    if (u.name === "loading" || u.name === "seeking") {
      u.then = "still", T(A), a();
      return;
    }
    u.name === "playingVideo" && (m(), e.pause()), T(A), j("still");
  }
  function fe() {
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
      return fe();
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
    stop: pe,
    seek: ae,
    toggle() {
      fe() ? pe() : ne();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource($) {
      m(), c = !!$, d = !1, j("still");
    },
    dispose() {
      m(), c = !1, u = { name: "idle" };
    }
  };
}
function $d({ video: e, onCapture: t, onChange: r }) {
  let n = "", i = !1, o = { time: null, playing: !1, fps: 1 }, s = null, a = null, l = !1;
  function c(m) {
    a = m, t();
  }
  function d(m) {
    s = m, e.currentTime = m;
  }
  function u() {
    const m = l;
    f(), l !== m && r();
  }
  function f() {
    if (!n || i || e.readyState < Su) return;
    const { time: m, playing: h, fps: y } = o;
    if (m === null) {
      e.pause(), l = !1;
      return;
    }
    if (h) {
      if (s !== null) return;
      const z = Number(e.duration), T = Number.isFinite(z) ? Math.min(m, z) : m, ie = Math.abs(Number(e.currentTime) - T) > 1.5 / y;
      if (e.ended && !ie) return;
      ie && d(T), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, c(NaN)), !(s !== null || a === m) && (Number(e.currentTime) === m ? c(m) : d(m));
  }
  const p = {
    loadeddata: u,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: u,
    seeked: () => {
      const m = s;
      s = null, !o.playing && m === o.time ? c(m) : u();
    },
    playing: () => {
      !o.playing || l || (l = !0, r());
    },
    error: () => {
      n && (i = !0, r());
    }
  };
  e.muted = !0;
  for (const [m, h] of Object.entries(p)) e.addEventListener(m, h);
  function w(m) {
    n = m, i = !1, s = null, a = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: m = "", time: h = null, playing: y = !1, fps: z }) {
      m !== n && (w(m), r()), o = { time: h, playing: y, fps: z }, u();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(m, h) {
      return !n || i ? h : o.time === null ? null : o.playing && l ? e : a === null ? h : m;
    },
    dispose() {
      for (const [m, h] of Object.entries(p)) e.removeEventListener(m, h);
      w("");
    }
  };
}
function Fa(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function X_({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: s, onStickerCapture: a, onChange: l, camera: c = !1 }) {
  let d = "", u = "", f = 0;
  const p = /* @__PURE__ */ new Set();
  let w = null, m = null;
  const h = () => i().timeline.fps, y = (ge) => ge.stickers.find((ve) => ve.source.kind === "port"), z = () => {
    const ge = i(), ve = y(ge);
    return Lm(ge, {
      minimum: Math.round(h() * 5),
      frames: Math.max(
        d ? Math.round(f * h()) : 0,
        w && ve ? Od(ve.clip, h(), w.meta) : 0
      ),
      camera: c
    });
  }, T = jg({
    video: e,
    clock: n,
    fps: h,
    span: z,
    loop: () => !0,
    onFrame: o,
    onCapture: s,
    onChange: l
  }), ie = () => {
    u === d && Number.isFinite(e.duration) && (f = e.duration);
  }, P = () => {
    u && (p.add(u), l());
  }, X = $d({ video: t, onCapture: a, onChange: l }), j = Td({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", ie), e.addEventListener("error", P);
  function J(ge) {
    ge !== u && (u = ge, e.pause(), ge ? e.src = ge : e.removeAttribute("src"), e.load(), T.setSource(!!ge));
  }
  function _e() {
    T.playing && T.stop();
  }
  function ke(ge) {
    const ve = y(ge);
    m = w && ve ? Ed(ve.clip, T.frame, ge.timeline.fps, w.meta) : null, X.follow({
      src: (w == null ? void 0 : w.src) || "",
      time: m,
      playing: T.advancing,
      fps: ge.timeline.fps
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
    pause: _e,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return w;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(ge, ve) {
      return w != null && w.frames ? j.picture(w.frames, m, w.meta, ve) : X.picture(ge, ve);
    },
    toggle() {
      T.playing ? T.stop() : T.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: ge, sources: ve, state: he, sticker: Se = null }) {
      if (w = ge ? Se : null, !ge)
        return _e(), J(""), ke(he), !1;
      for (const $ of p)
        ve.includes($) || p.delete($);
      const pe = ve.find(($) => $ && !p.has($)) || "", ne = pe !== d;
      ne && (d = pe, f = 0), J(d);
      const ae = Rm(he, { camera: c }) || !!d && T.state !== "error" || !!w;
      return ae || _e(), (ne || !ae || !T.playing && T.frame >= z()) && T.frame !== vo && T.seek(vo), ke(he), ae;
    },
    dispose() {
      T.dispose(), X.dispose(), e.removeEventListener("loadedmetadata", ie), e.removeEventListener("error", P), e.pause(), e.removeAttribute("src"), e.load(), u = "";
    }
  };
}
const pl = Math.PI / 180, wr = 180 / Math.PI, J_ = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), Z_ = 260;
function dp(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function Hg(e, t) {
  return t ? Hg(t, e % t) : e;
}
function Q_(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), s = Math.max(1, Math.round(e / o * i)), a = Math.max(1, Math.round(t / o * i)), l = Hg(s, a) || 1;
  return `${Math.round(s / l)}:${Math.round(a / l)}`;
}
function ws(e, t) {
  const r = dp(e), n = dp(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: Q_(r, n) };
}
function Ti(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function Gg(e) {
  const t = Ti(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Vr(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function zd(e, t, r = J_) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), c = (h, y, z) => {
    const T = h + y, ie = Math.max(0, z - 1), P = T > ie && T > 0 ? ie / T : 1;
    return [h * P, y * P];
  }, [d, u] = c(l, s, n), [f, p] = c(o, a, i), w = {
    x: d,
    y: f,
    w: Math.max(1, n - d - u),
    h: Math.max(1, i - f - p)
  }, m = ud(w, t);
  return {
    x: w.x + (w.w - m.width) * 0.5,
    y: w.y + (w.h - m.height) * 0.5,
    w: m.width,
    h: m.height,
    safeRect: w
  };
}
function ew(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = zd({ width: r, height: n }, 1), o = Oe(Number((e == null ? void 0 : e.fov) || 100), 1, 179), s = r / (2 * Math.tan(o * pl * 0.5)), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = fm(l, lm(
    { x: r * 0.5, y: n * 0.5 },
    s,
    a
  )), d = tw(c, wo(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), u = dd({ width: i.w, height: i.h }, s);
  return {
    type: "add-frame",
    yawDeg: d.yaw,
    pitchDeg: d.pitch,
    rollDeg: d.roll,
    frameFovDeg: u.hFOV_deg
  };
}
function Kg(e) {
  return {
    yaw: Kt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * wr),
    pitch: Oe(Math.asin(Oe(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * wr, -89.9, 89.9)
  };
}
function tw(e, t) {
  const r = Kg(e), n = wo(r.yaw, r.pitch, 0), i = bc(t, e), o = {
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
      bc(a, n.up),
      bc(a, n.right)
    ) * wr)
  };
}
function Wg(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = zd({ width: r, height: n }, zi(e)), o = Li(i, e), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, a = fm(e, lm(
    s,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = Kg(a);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Oe(2 * Math.atan(r / (2 * o)) * wr, 1, 179)
  };
}
function nw(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, s = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, a = Li(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(s, i - s) * 2
  }, { halfW: c, halfH: d } = fd(l, a), u = {
    x: o - c,
    y: s - d,
    w: c * 2,
    h: d * 2
  }, f = u.x <= 0 && u.y <= 0 && u.x + u.w >= n && u.y + u.h >= i, p = n / i, w = Math.tan(ru * pl), m = p >= 1 ? w : w * p, h = p >= 1 ? w / p : w;
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
        hFOV_deg: 2 * Math.atan(m) * wr,
        vFOV_deg: 2 * Math.atan(h) * wr
      }
    }
  };
}
function qi(e, t) {
  const r = Ti(e);
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
function rw(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const s = Li(r, e);
    return dd(ud(r, t), s);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: xa(o, t) };
}
function fp(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = ws(t, r);
  if (!o) return e;
  const s = zi(e) >= 1;
  n && o.ratio >= 1 !== s && (o = ws(o.height, o.width));
  const a = rw(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - a.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - a.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...a, aspect_id: o.label };
}
function Ug(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Ti(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = cm({
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
    const n = Ti(e);
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
    return qi(e, (n) => fp(
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
      const o = String(Vr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), s = o ? ws(o[1], o[2]) : ws(zi(n), 1);
      return s ? fp(n, s.height, s.width, { safeRect: t.safeRect }) : n;
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
    const i = um(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? qi(e, (n) => {
    const i = dm(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? qi(e, (n) => {
    const i = qg(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function Bg({
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
function Yg(e, t, r = {}) {
  var s, a;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((s = e.center) == null ? void 0 : s.y) || 0),
    Number(t.x || 0) - Number(((a = e.center) == null ? void 0 : a.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + sm(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: am(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function qg(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, s = Number(t.dy || 0) * i, a = Number(e.roll_deg ?? e.rot_deg ?? 0) * pl, l = Math.cos(a), c = Math.sin(a), d = o / r, u = -s / r, f = d * l - u * c, p = d * c + u * l, w = Number(e.pitch_deg || 0) * pl, m = Math.max(0.25, Math.abs(Math.cos(w)));
  return {
    ...e,
    yaw_deg: Kt(Number(e.yaw_deg || 0) - Math.atan(f) / m * wr),
    pitch_deg: Oe(Number(e.pitch_deg || 0) - Math.atan(p) * wr, -90, 90)
  };
}
function iw({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return Cg({
    readState: e,
    reduce: Ug,
    projectModel: Gg,
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
}), ow = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, sw = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: ow(t[2])
})), aw = {
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
}, pp = Object.fromEntries(
  Object.entries(aw).map(([e, t]) => [e, {
    name: t.name,
    elements: sw(t.body)
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
      return Object.prototype.hasOwnProperty.call(pp, n) ? pp[n] : null;
    });
    return (n, i) => r.value ? (Re(), Le("svg", {
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
      (Re(!0), Le(Ze, null, Mt(r.value.elements, (o, s) => (Re(), Le(Ze, {
        key: `${r.value.name || e.icon || "icon"}-${o.tag}-${s}`
      }, [
        o.tag === "path" ? (Re(), Le("path", Tr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Re(), Le("circle", Tr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Re(), Le("rect", Tr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Re(), Le("line", Tr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Re(), Le("polyline", Tr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Re(), Le("polygon", Tr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : lt("", !0)
      ], 64))), 128))
    ], 2)) : lt("", !0);
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
    return (n, i) => (Re(), Rn(eb(e.tag), Tr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: Mh(() => [
        Ye(zt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, lw = ["aria-expanded", "disabled"], cw = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, uw = ["data-aspect", "disabled", "onClick"], dw = { class: "pano-cutout-aspect-custom" }, fw = ["disabled"], pw = ["disabled"], hw = ["data-custom-width", "data-custom-height", "disabled"], Xg = {
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
      const m = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], h = String(r.model.aspectLabel || "");
      return m.length ? m.map((y) => {
        const z = typeof y == "string" ? y : String((y == null ? void 0 : y.value) || ""), T = typeof y == "string" ? y : String((y == null ? void 0 : y.label) || z);
        return {
          ...typeof y == "object" && y ? y : {},
          value: z,
          label: T,
          active: h ? z === h : (y == null ? void 0 : y.active) === !0
        };
      }) : i.map((y) => ({
        ...y,
        active: y.value === h
      }));
    }), d = dt(() => {
      var h;
      const m = String(r.model.aspectLabel || "").trim();
      return m || String(((h = c.value.find((y) => y.active === !0)) == null ? void 0 : h.label) || "Aspect");
    });
    Ei(d, (m) => {
      const h = String(m || "").match(/^([0-9.]+):([0-9.]+)$/);
      h && (o.value = h[1], s.value = h[2]);
    }, { immediate: !0 });
    function u(m) {
      n("action", m);
    }
    function f(m) {
      var h;
      r.model.aspectOpen === !0 && ((h = a.value) != null && h.contains(m.target) || u({ type: "close-aspect" }));
    }
    Fl(() => {
      document.addEventListener("pointerdown", f, !0);
    }), Cs(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function p(m) {
      const [h, y] = String(m.value || "").split(":");
      u({
        type: "set-aspect",
        width: h,
        height: y,
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
    return (m, h) => (Re(), Le("div", {
      ref_key: "rootElement",
      ref: a,
      class: mt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Re(), Rn(tn, {
        key: 0,
        icon: e.model.aspectIcon || rt(Ke).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: h[0] || (h[0] = (y) => u({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Re(), Le("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: h[1] || (h[1] = (y) => u({ type: "toggle-aspect" }))
      }, [
        Ye(zt, {
          icon: e.model.aspectIcon || rt(Ke).aspect
        }, null, 8, ["icon"]),
        Me("span", null, tt(d.value), 1),
        Ye(zt, {
          icon: rt(Ke).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, lw)),
      jr(Me("div", cw, [
        (Re(!0), Le(Ze, null, Mt(c.value, (y) => (Re(), Le("button", {
          key: y.value,
          class: mt(["pano-btn pano-frame-aspect-choice", { active: y.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": y.value,
          disabled: l.value,
          onClick: (z) => p(y)
        }, tt(y.label), 11, uw))), 128)),
        Me("div", dw, [
          jr(Me("input", {
            "onUpdate:modelValue": h[2] || (h[2] = (y) => o.value = y),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, fw), [
            [Lf, o.value]
          ]),
          h[4] || (h[4] = Me("span", { "aria-hidden": "true" }, ":", -1)),
          jr(Me("input", {
            "onUpdate:modelValue": h[3] || (h[3] = (y) => s.value = y),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, pw), [
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
          }, "Apply", 8, hw)
        ])
      ], 512), [
        [Ri, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, mw = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, gw = {
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
    return (n, i) => (Re(), Le("div", {
      class: mt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = xt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = xt(() => {
      }, ["stop"]))
    }, [
      Ye(tn, {
        icon: rt(Ke).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = xt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", mw, [
        i[3] || (i[3] = Me("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Re(!0), Le(Ze, null, Mt(rt(r), (o) => (Re(), Le("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Me("kbd", null, tt(o[0]), 1),
          Me("span", null, tt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, yw = {
  class: "pano-view-unavailable",
  role: "status"
}, ql = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Re(), Le("div", yw, tt(rt(hg)), 1));
  }
}, bw = { class: "pano-cutout-node-surface" }, vw = ["title", "disabled"], Sw = { class: "value" }, _w = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, ww = {
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
    return (n, i) => (Re(), Le("div", bw, [
      Me("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = xt(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = xt(() => {
        }, ["stop"]))
      }, [
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          Ye(zt, {
            icon: rt(Ke).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Me("span", { class: "label" }, "Full Editor", -1))
        ]),
        Ye(tn, {
          icon: e.model.hasShot ? rt(Ke).delete : rt(Ke).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ye(Xg, {
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
          onDblclick: i[2] || (i[2] = xt((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Ye(zt, {
            icon: rt(Ke).roll
          }, null, 8, ["icon"]),
          Me("span", Sw, tt(e.model.rollLabel || "0.0°"), 1)
        ], 40, vw),
        Ye(tn, {
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
        Ye(gw)
      ], 32),
      e.model.hasShot === !1 ? (Re(), Le("div", _w, " Choose a view · + Add Frame ")) : lt("", !0),
      e.model.viewUnavailable ? (Re(), Rn(ql, { key: 1 })) : lt("", !0)
    ]));
  }
}, Jg = {
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
      var m, h;
      const { active: f, intent: p } = a();
      if (!f) return;
      const w = ((h = (m = u.target) == null ? void 0 : m.files) == null ? void 0 : h[0]) || null;
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
    return t({ open: l }), (u, f) => (Re(), Le("input", {
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
}, kw = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, xw = {
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
    return (n, i) => (Re(), Le("div", {
      class: mt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = xt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = xt(() => {
      }, ["stop"]))
    }, [
      Ye(tn, {
        icon: rt(Ke).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = xt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", kw, [
        i[3] || (i[3] = Me("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Re(!0), Le(Ze, null, Mt(rt(r), (o) => (Re(), Le("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Me("kbd", null, tt(o[0]), 1),
          Me("span", null, tt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Mw = { class: "pano-stickers-node-surface" }, Nw = ["disabled"], Pw = ["aria-label", "data-tip"], Aw = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, Cw = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, Iw = {
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
    return (s, a) => (Re(), Le("div", Mw, [
      Me("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: a[5] || (a[5] = xt(() => {
        }, ["stop"])),
        onWheel: a[6] || (a[6] = xt(() => {
        }, ["stop"]))
      }, [
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (l) => n({ type: "open-editor" }))
        }, [
          Ye(zt, {
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
          Ye(zt, {
            icon: rt(Ke).image
          }, null, 8, ["icon"]),
          a[11] || (a[11] = Me("span", { class: "label" }, "Add Image", -1))
        ], 8, Nw),
        Ye(tn, {
          icon: e.model.locked ? rt(Ke).lock_closed : rt(Ke).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: a[1] || (a[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Ye(tn, {
          icon: rt(Ke).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: a[2] || (a[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Ye(tn, {
          icon: rt(Ke).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: a[3] || (a[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Ye(tn, {
          icon: e.model.isExternalSelection ? rt(Ke).back_initial : rt(Ke).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: a[4] || (a[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ye(xw)
      ], 32),
      e.model.playable === !0 ? (Re(), Le("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: a[7] || (a[7] = xt(() => {
        }, ["stop"])),
        onWheel: a[8] || (a[8] = xt(() => {
        }, ["stop"])),
        onClick: a[9] || (a[9] = (l) => n({ type: "toggle-playback" }))
      }, [
        Ye(zt, {
          icon: e.model.playing ? rt(Ke).pause : rt(Ke).play
        }, null, 8, ["icon"])
      ], 40, Pw)) : lt("", !0),
      e.model.hasStickers === !1 ? (Re(), Le("div", Aw, " Add Image to place a sticker ")) : lt("", !0),
      e.model.dropActive === !0 ? (Re(), Le("div", Cw, "Drop image to add")) : lt("", !0),
      Ye(Jg, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Re(), Rn(ql, { key: 3 })) : lt("", !0)
    ]));
  }
}, Ew = { class: "pano-studio-node-surface" }, Ow = {
  class: "pano-studio-node-status",
  role: "status"
}, Fw = { class: "pano-studio-node-shot" }, Tw = { class: "pano-studio-node-size" }, Dw = { class: "pano-studio-node-note" }, Rw = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Re(), Le("div", Ew, [
      Me("div", {
        class: "pano-studio-node-bar",
        onPointerdown: n[1] || (n[1] = xt(() => {
        }, ["stop"])),
        onWheel: n[2] || (n[2] = xt(() => {
        }, ["stop"]))
      }, [
        Me("div", Ow, [
          Me("span", Fw, tt(e.model.status.shot), 1),
          Me("span", Tw, tt(e.model.status.size), 1),
          Me("span", Dw, tt(e.model.status.note), 1)
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
          Ye(zt, {
            icon: rt(Ke).fullscreen
          }, null, 8, ["icon"]),
          n[3] || (n[3] = Me("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Re(), Rn(ql, { key: 0 })) : lt("", !0)
    ]));
  }
}, Lw = 2048, _u = 4096, Ta = (e) => Math.floor(e + 0.5), da = (e) => Math.max(2, 2 * Ta(e / 2));
function Zg(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function Vw(e) {
  const t = [e.scene.clip, ...e.stickers.map((i) => i.clip)].filter((i) => i.duration !== null).map((i) => i.start + i.duration), r = e.camera ? zl.flatMap(([i]) => e.camera[i].keyframes.map((o) => o.frame)) : [];
  let n = 1;
  return e.timeline.length ? n = Math.max(1, Ta(e.timeline.length)) : t.length ? n = Math.max(1, Ta(Math.max(...t))) : r.length && (n = Math.max(1, Ta(Math.max(...r)) + 1)), Array.from({ length: n }, (i, o) => o);
}
function $w(e, t, r, n, i) {
  const o = r === "auto" && i == null;
  let s;
  r !== "auto" ? s = Number(r) : o ? s = Lw : s = Math.floor(i * 360 / n);
  const a = Zg(e);
  if (!a || a.projection === "erp")
    return { width: Math.floor(s * n / 360), height: Math.floor(s / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((p) => $l(a, p).hFOV_deg)), c = s / Math.PI * Math.tan(l * Math.PI / 360), d = c / a.aspect, u = [da(c), da(d)];
  if (Math.max(...u) <= _u) return { width: u[0], height: u[1], reducedFrom: null, defaulted: o };
  const f = _u / Math.max(c, d);
  return { width: da(c * f), height: da(d * f), reducedFrom: u, defaulted: o };
}
function Qg(e, t, r, n) {
  let i = 2166136261;
  for (const o of `${e}\0${t}\0${r}\0${n}`)
    i = Math.imul(i ^ o.codePointAt(0), 16777619) >>> 0;
  return i.toString(16).padStart(8, "0");
}
function zw({ stateText: e = "", outputSize: t, coverage: r, bgColor: n = "", run: i = null, erp: o = null, frame: s = null }) {
  const a = o || s;
  return a ? { kind: o ? "erp" : "frame", entry: a, current: !!i && i.key === Qg(e, t, String(r), n) } : null;
}
function jw(e) {
  return e ? di(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg)) : { x: 0, y: 0, z: 0, w: 1 };
}
const Fc = {
  run: "",
  edited: "Edited — run to update",
  "not-run": "Not run yet",
  unavailable: "Run output unavailable — run again"
};
function Hw(e, { stateText: t = "", outputSize: r, coverage: n, bgColor: i = "", bgWidth: o, run: s = null, display: a = "run" }) {
  const l = Zg(e);
  let c = "ERP";
  l && (c = l.projection === "erp" ? `Camera · ${n}°` : "Camera · Perspective");
  let d;
  if (s && s.key === Qg(t, r, String(n), i))
    d = { width: s.width, height: s.height, reducedFrom: s.reduced_from, defaulted: r === "auto" && o === null };
  else {
    if (r === "auto" && o === void 0)
      return { shot: c, size: "auto", note: Fc[a] };
    d = $w(e, Vw(e), r, n, o);
  }
  const u = Fc[a] ? [Fc[a]] : [];
  return d.reducedFrom ? u.push(`Capped at ${_u} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && u.push("auto: no bg_media"), { shot: c, size: `${d.width} × ${d.height}`, note: u.join(" · ") };
}
function Gw() {
  let e = null;
  return (t, r) => {
    const n = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", n === void 0 ? "pending" : n, t.run ?? null, t.display ?? "run"]);
    return i === e ? null : (e = i, Hw(r(), { ...t, bgWidth: n }));
  };
}
const hp = 24;
function Kw(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function ls(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function e0(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], s = t[i];
    o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function wu(e, t) {
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
  return ls(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : e0(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function Ww(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
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
  return ls(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : e0(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function jd(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function t0(e, t, { accent: r = "#0070f3" } = {}) {
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
function Uw(e) {
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
function ki(e, t, r) {
  return cd(qa(
    qa(e.centerDir, Xa(e.right, t)),
    Xa(e.up, r)
  ));
}
function Hd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = Uw(e), n = $o(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    ki(r, -r.tanX, r.tanY),
    ki(r, r.tanX, r.tanY),
    ki(r, r.tanX, -r.tanY),
    ki(r, -r.tanX, -r.tanY)
  ].map((f) => $o(f, t)), o = Array.from({ length: 4 }, (f, p) => {
    const w = [];
    for (let m = 0; m <= 28; m += 1) {
      const h = m / 28;
      let y, z;
      p === 0 ? (y = -r.tanX + 2 * r.tanX * h, z = r.tanY) : p === 1 ? (y = r.tanX, z = r.tanY - 2 * r.tanY * h) : p === 2 ? (y = r.tanX - 2 * r.tanX * h, z = -r.tanY) : (y = -r.tanX, z = -r.tanY + 2 * r.tanY * h);
      const T = $o(ki(r, y, z), t);
      T && w.push({ x: T.x, y: T.y });
    }
    return w;
  }), s = $o(ki(r, 0, r.tanY), t), a = $o(
    ki(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
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
      x: s.x + c / u * hp,
      y: s.y + d / u * hp
    },
    visible: !0
  };
}
function mp(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((s) => s && s.visible !== !1).map((s) => ({ item: s, geometry: Hd(s, n) })).filter((s) => s.geometry.visible).sort((s, a) => {
    var l, c;
    return Number(((l = a.item) == null ? void 0 : l.z_index) || 0) - Number(((c = s.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((s) => {
    var a;
    return String(((a = s.item) == null ? void 0 : a.id) || "") === String(t || "");
  });
  if (o) {
    const s = wu(o.geometry, r);
    if (s.kind === "scale" || s.kind === "rotate") return { ...o, hit: s };
  }
  for (const s of i) {
    const a = wu(s.geometry, r);
    if (a.kind !== "none") return { ...s, hit: a };
  }
  return null;
}
function Bw(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Kt(Math.atan2(n.x, n.z) * nn),
    pitch_deg: Math.asin(Oe(n.y, -1, 1)) * nn
  };
}
function Yw(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Oe(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Oe(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function qw(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * nn;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let fa = null;
function Gd() {
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
function Yn(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function Xw(e, t = 1024) {
  const r = Math.max(1, Math.round(Yn(e, 2048))), n = Math.min(r, Math.max(1, Math.round(Yn(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function Jw(e, t, r) {
  const n = Yn(t), i = Yn(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const s = Yn(o.u0), a = Yn(o.v0), l = Yn(o.u1), c = Yn(o.v1);
  if (l <= s || c <= a) return null;
  const d = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((s + l) * 0.5 + Yn(d.du)) * n,
    centerY: ((a + c) * 0.5 + Yn(d.dv)) * i,
    width: (l - s) * n,
    height: (c - a) * i,
    rotationRad: Yn(d.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Yn(d.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function Zw(e, t, r) {
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
function Qw() {
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
    const c = String(o.rasterDataUrl || "").trim(), d = Jw(o, s, a);
    if (!c.startsWith("data:") || !d) return null;
    const u = Zw(o, s, a), f = String((o == null ? void 0 : o.id) || "").trim() || u, p = t.get(f);
    if ((p == null ? void 0 : p.revision) === u) return { source: p.source, revision: u };
    const w = n(c, l), m = Number(w.naturalWidth || w.width || 0), h = Number(w.naturalHeight || w.height || 0);
    if (!w.complete || m < 1 || h < 1) return null;
    const y = on({ label: "raster-object" });
    y.width = Math.max(1, Math.round(s)), y.height = Math.max(1, Math.round(a));
    const z = y.getContext("2d");
    return z ? (d.wrapOffsets.forEach((T) => {
      z.save(), z.translate(d.centerX + T, d.centerY), z.rotate(d.rotationRad), z.scale(d.scale, d.scale), z.drawImage(
        w,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), z.restore();
    }), t.set(f, { revision: u, source: y }), { source: y, revision: u }) : null;
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
function ek(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function tk(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function nk({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(u) {
    if (!u) return;
    u.entry.listeners.delete(u);
    const f = n.get(u.owner);
    (f == null ? void 0 : f.get(u.key)) === u && f.delete(u.key);
  }
  function s(u, f, p, w) {
    if (!u || typeof w != "function" || p.settled) return;
    let m = n.get(u);
    m || (m = /* @__PURE__ */ new Map(), n.set(u, m));
    const h = m.get(f);
    if ((h == null ? void 0 : h.entry) === p) {
      h.callback = w;
      return;
    }
    o(h);
    const y = { owner: u, key: f, entry: p, callback: w };
    m.set(f, y), p.listeners.add(y);
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
    const m = String(f || ""), h = String(p || "");
    if (!m || !h) return null;
    let y = r.get(m);
    if (y)
      r.delete(m), r.set(m, y);
    else {
      l(i - 1);
      const T = e || globalThis.Image;
      if (typeof T != "function") return null;
      const ie = new T();
      y = { key: m, image: ie, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(m, y), ie.onload = () => a(y, !0), ie.onerror = () => a(y, !1), ie.src = h;
    }
    return y.settled || y.image.complete && Number(y.image.naturalWidth || y.image.width || 0) > 0 || s(u, m, y, w), y.image;
  }
  function d(u) {
    const f = n.get(u);
    f && ([...f.values()].forEach(o), n.delete(u), l(i));
  }
  return { get: c, disposeOwner: d };
}
const Wo = /* @__PURE__ */ new WeakMap();
function n0(e, t, { editor: r = !1 } = {}) {
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
}), r0 = "PanoramaSuite.Editor.ViewControls", rk = {
  id: r0,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Da).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function ik(e) {
  return Object.hasOwn(Da, e) ? Da[e] : Da.default;
}
function ok(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const s = e.bindings.find((a) => a.button === t && !!a.shift === r && !!a.alt === n);
  return (s == null ? void 0 : s.action) ?? null;
}
function sk(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const hl = "state_json";
function zr(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function ak(e) {
  var s, a;
  const t = zr(e, hl);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = zm(r, {
    coverage: (s = zr(e, "coverage")) == null ? void 0 : s.value
  }), i = Ug(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (a = t.callback) == null || a.call(t, o), !0;
}
function Kd(e, t) {
  if (!e || Kn(e).coverageSyncInstalled) return;
  const r = zr(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, l, c, d, u, f, p, w, m;
    const o = n ? n(...i) : void 0, s = Kn(e);
    return s.parsedState = null, s.liveState = null, (l = (a = $r(e).runtime) == null ? void 0 : a.requestDraw) == null || l.call(a), (d = (c = bt(e).dom) == null ? void 0 : c.requestDraw) == null || d.call(c), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (p = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || p.call(f, !0, !0), (m = (w = t == null ? void 0 : t.canvas) == null ? void 0 : w.setDirty) == null || m.call(w, !0, !0), o;
  }, Kn(e).coverageSyncInstalled = !0;
}
function lk(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function gp(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function ck(e) {
  var d, u, f, p, w, m;
  if (!e) return;
  const t = zr(e, "coverage"), r = zr(e, "bg_color"), n = zr(e, hl), i = zr(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), s = String(r.value ?? "").trim(), a = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && lk(o) && (gp(s) || s === ""))) return;
  let c = "360";
  if (gp(s))
    try {
      c = String(Vn((d = JSON.parse(s)) == null ? void 0 : d.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (u = t.callback) == null || u.call(t, c), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = s, (p = n.callback) == null || p.call(n, s), i && (i.value = a, (w = i.callback) == null || w.call(i, a)), (m = e.setDirtyCanvas) == null || m.call(e, !0, !0);
}
function Ra(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, s;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (s = n.parentEl) != null && s.style && (n.parentEl.style.display = "none")));
  });
}
function ku(e, t, r) {
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
async function uk(e, { tolerateOperationFailure: t = !1 } = {}) {
  var n;
  const r = (n = Kn(e)) == null ? void 0 : n.pendingStickerUploads;
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
  const n = Kn(e), i = n.stickerOperationTail, s = (i && typeof i.then == "function" ? i.catch(() => {
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
async function i0(e, t = {}) {
  var n, i, o;
  await uk(e, t);
  const r = Array.from(((n = Kn(e)) == null ? void 0 : n.flushers) ?? []);
  for (const s of r) await s();
  await ((o = (i = dl(e)) == null ? void 0 : i.flushBeforeQueue) == null ? void 0 : o.call(i));
}
function dk(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await i0(e), r ? r.apply(this, n) : this.value;
  };
}
function fk(e) {
  var r;
  const t = bt(e);
  try {
    (r = t.restore) == null || r.call(t);
  } catch {
  }
  t.dom = null, t.attached = !1, t.mountKey = null;
}
function o0(e) {
  const t = e.prototype.onRemoved;
  e.prototype.onRemoved = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return P_(this), r;
  };
}
function pk(e) {
  var n;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (n = e == null ? void 0 : e.addOutput) == null || n.call(e, "image", "IMAGE");
}
function Tc(e, {
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
    var m;
    const f = `editor_btn|${r}`, p = bt(u);
    if (p.attached === !0 && p.mountKey === f) return;
    fk(u), Kd(u, t), Ra(u, hl);
    const w = zr(u, hl);
    if (dk(u, w), w && !w.__panoPreviewPatchedCb) {
      w.__panoPreviewPatchedCb = !0;
      const h = w.callback;
      w.callback = (y) => {
        var T;
        const z = h ? h(y) : void 0;
        return (T = u.setDirtyCanvas) == null || T.call(u, !0, !1), z;
      };
    }
    if (r === "PanoramaStickers") {
      u.__panoSceneStateV2 = l, u.__panoStudio = c;
      const h = zr(u, "bg_color");
      !l && h && (h.value == null || String(h.value).trim() === "" || String(h.value).toLowerCase() === "#000000") && (h.value = "#00ff00", (m = h.callback) == null || m.call(h, "#00ff00")), ku(u, n, () => i(u, "stickers")), a && (o(u, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(u, "stickers")
      }), p.stickers && Ra(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260])), p.attached = !0, p.mountKey = f;
      return;
    }
    u.__panoSceneStateV2 = !1, ku(u, n, () => i(u, "cutout")), s(u, {
      buttonText: n,
      onOpen: () => i(u, "cutout")
    }), p.cutout && Ra(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260]), p.attached = !0, p.mountKey = f;
  }
  for (const u of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[u];
    e.prototype[u] = function() {
      const p = f ? f.apply(this, arguments) : void 0;
      u === "onNodeCreated" && r === "PanoramaCutout" && ak(this), u === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && ck(this);
      const w = bt(this).attached;
      return (u === "onNodeCreated" || this.widgets) && d(this), u === "onAdded" && w && ii(this, "attach"), p;
    };
  }
  o0(e);
}
function hk(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return pk(this), n;
  }, o0(e);
}
function mk(e, {
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
    Kd(e, t);
    const c = (d = e) => r(d, "stickers", { readOnly: !0, hideSidebar: !1 });
    ku(e, "Open Preview", () => c(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: c
    }), o.surface && Ra(e, "Open Preview"), o.installDone = !0, o.installProbeActive = !1;
  };
  i(s);
}
function gk({
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
    settings: [rk, Av],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [jf],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [jf.id] }],
    beforeRegisterNodeDef(l, c) {
      const d = String((c == null ? void 0 : c.name) || "");
      (d === "PanoramaStickers" || d === "Panorama Stickers") && Tc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), d === "PanoramaStudio" && Tc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && Tc(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), Ja(d) && hk(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      bt(l).attached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      Kd(l, e), Ja(c) && mk(l, { app: e, openEditor: t, attachPreview: i, requestFrame: s });
    }
  };
}
const yk = /\.(png|jpe?g|webp|gif|bmp)$/i;
function ar(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : yk.test(String(e.name || "")) : !1;
}
function Wd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => ar(r)) : !1;
}
function bk(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var c, d, u;
    (c = l == null ? void 0 : l.preventDefault) == null || c.call(l), (d = l == null ? void 0 : l.stopPropagation) == null || d.call(l), (u = l == null ? void 0 : l.stopImmediatePropagation) == null || u.call(l);
  }, o = (l) => {
    if (Wd(l == null ? void 0 : l.dataTransfer)) {
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
async function Pi(e, { fetchApi: t } = {}) {
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
const yp = /* @__PURE__ */ new WeakSet(), bp = /* @__PURE__ */ new WeakSet();
let vp = 0;
function xu(e) {
  if (!e || typeof e != "object" || bp.has(e)) return e;
  const t = String(e.type || "preview");
  return vp += 1, e.type = `${t}:pano-${vp}`, bp.add(e), e;
}
function ml(e) {
  if (!e || typeof e != "object" || yp.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, yp.add(e), e;
}
function s0(e, t) {
  var n, i;
  if (!t || ((i = (n = ml(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function vk({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const c = i;
    i = null, o || r == null || r(c);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: Gt } = ba;
m_((e) => li(e.id));
g_(hn);
const Ud = nk(), { linkedVideoFile: a0 } = Ag({ app: Gt, api: hn });
function Mu() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (ba == null ? void 0 : ba.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Sk = "pano_suite.ui_settings.v1", _k = 120, wk = 2048;
function Sp() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Sk)) || "").trim();
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
function kk() {
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
function xk() {
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
function Nu(e) {
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
function l0(e) {
  const t = Nu(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function Mk(e, t, r) {
  l0(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function Pu(e) {
  var t, r;
  return (r = (t = bt(e)) == null ? void 0 : t.dom) != null && r.widget ? "dom" : "none";
}
function Bd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function c0(e) {
  return Ja(Bd(e));
}
function _p(e = null) {
  var o, s;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((s = (o = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : s.name) || "");
  return [t, n, r, i].join("|");
}
function u0(e) {
  const t = bt(e);
  if (t.controller) return t.controller;
  const r = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", s = Pu(e);
      this.activeBackend = s;
      const a = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", l = t.noPreview === !0, c = n.noPreview === !0;
      if (s === o && s !== "none" && a === i && l === c) {
        t.mode = i, t.noPreview = c, t.openEditor = typeof n.onOpen == "function" ? n.onOpen : t.openEditor;
        return;
      }
      s !== "none" && Dc(e), Sx(e, { ...n, mode: i }), this.activeBackend = Pu(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || bt(e).mode || "stickers") === "cutout" ? "cutout" : "stickers";
      Dc(e), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Dc(e), this.activeBackend = "none";
    }
  };
  return t.controller = r, r;
}
function Dc(e, t = {}) {
  var i, o, s, a;
  if (!e) return;
  Au.unregister(e);
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
      const d = String((c == null ? void 0 : c.name) || ""), u = String((c == null ? void 0 : c.type) || ""), f = Mu();
      return d === f || u === f || d === "pano_preview" || u === "pano_preview" ? !0 : d === "preview" && u === "pano_preview";
    }).forEach((c) => Wk(e, c));
  } catch {
  }
  r.dom = null, r.noPreview = !1, r.bootMinHeightTimer && (clearTimeout(r.bootMinHeightTimer), r.bootMinHeightTimer = null), r.bootMinHeightActive = !1, String(t.reason || ""), t.keepMonitor;
}
function Nk(e, t = "#00ff00") {
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
function Pk(e) {
  var r, n;
  const t = (r = Kn(e)) == null ? void 0 : r.liveState;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = kr(e, "state_json")) == null ? void 0 : n.value) || "");
}
function _n(e) {
  var d, u;
  const t = Kn(e), r = Pk(e), n = t.liveStateVersion, i = String(((d = kr(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), o = Number(((u = kr(e, "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, s = e.__panoSceneStateV2 && typeof r == "string", a = s && Vg(e) && Wt(e, "sticker-handoff") ? lr(e, "pano_sticker_handoff") ?? null : null, l = t.parsedState;
  if (l && l.source === r && l.liveVersion === n && l.bg === i && l.coverage === o && l.handoff === a)
    return l.parsed;
  const c = s ? K_(r, { backgroundColor: i, coverage: o, active: Um(e) }, a) : Nk(r, i);
  return c.coverage = o, t.parsedState = { source: r, liveVersion: n, bg: i, coverage: o, handoff: a, parsed: c }, c;
}
function kr(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function Ak(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function d0(e, t, r = null) {
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
  return !n && r != null && (n = Ak(e == null ? void 0 : e.graph, r)), n;
}
function Ck(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function f0(e, t = []) {
  const r = Ck(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    fr.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function wp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function gl(e, t) {
  const r = wp(e), n = wp(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function Ik(e, t) {
  var r;
  return d0(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function Ek(e, t = fr) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = f0(e, t).map((a) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(a))).filter((a) => a >= 0), o = r.map((a, l) => ({ input: a, idx: l })).filter(({ input: a }) => String((a == null ? void 0 : a.type) || "").toUpperCase() === "IMAGE").map(({ idx: a }) => a), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  return w_(e, s, Ik);
}
const Au = {
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
        String(bt(o).mode || "") === "cutout" && !s || !s && ![...Ek(o)].some((m) => gl(n, m)) || (s && (qd(o), (c = (l = bt(o).dom) == null ? void 0 : l.requestDraw) == null || c.call(l)), !xg(Pn(o).executedOutputs, n, r.output) && (h0(o), (u = (d = bt(o).dom) == null ? void 0 : d.requestDraw) == null || u.call(d), (f = o.setDirtyCanvas) == null || f.call(o, !0, !0), (w = (p = o.graph) == null ? void 0 : p.setDirtyCanvas) == null || w.call(p, !0, !0), String(bt(o).mode || ""), String(bt(o).mode || ""), void 0));
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
function Ok(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Fk(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function Tk(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function Dk(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Ok(t)) return [t];
  const { filename: r, subfolder: n } = Fk(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => yl({
    filename: r,
    subfolder: n,
    type: o
  }));
  return Tk([...i, t]);
}
function Rk(e) {
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
  const t = Gt == null ? void 0 : Gt.nodeOutputs;
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
function kn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return kn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return yl({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = kn(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : yl(e);
}
function ks(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function La(e) {
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
function Yd(e, t) {
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
function Lk(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((s) => t.push(s));
  }, i = (o, s = 0) => {
    !o || s > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, s + 1), i(o.ui, s + 1), i(o.data, s + 1), i(o.result, s + 1));
  };
  return i(e, 0), t;
}
function Vk(e, t) {
  try {
    const r = Pn(e);
    r.ownOutputRev = ek(r.ownOutputRev);
    const n = Lk(t);
    let i = "";
    for (const o of n)
      if (i = kn(o), i) break;
    i ? (Yd(String(i || ""), r.ownOutputRev), r.ownOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function uo(e) {
  var r;
  const t = Pn(e);
  t && ((r = t.ownOutputVideo) == null || r.player.destroy(), t.ownOutputVideo = null);
}
function $k(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!Wt(e, "background"))
    return uo(e), null;
  const i = li(n), o = Id(i, t, kn);
  if (!o)
    return uo(e), null;
  const s = Pn(e), a = Yd(o, s.ownOutputRev), l = `${t.join("|")}:${a}`, c = s.ownOutputVideo;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  uo(e);
  const d = k_({
    documentRef: document,
    src: a,
    onFrame: r
  });
  return d ? (s.ownOutputVideo = { key: l, player: d }, d.video) : null;
}
function zk(e, t = []) {
  var c, d;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = f0(e, t).map((u) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(u))).filter((u) => u >= 0), o = r.map((u, f) => ({ input: u, idx: f })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const u of s) {
    const f = r[u], p = e.graph ? e.getInputLink(u) : null;
    if ((p == null ? void 0 : p.origin_id) == null) continue;
    const w = p.origin_id, m = d0(e, u, w);
    if (!m) continue;
    const h = Number(p.origin_slot ?? 0), y = li((m == null ? void 0 : m.id) ?? w), z = Array.isArray(y == null ? void 0 : y.images) ? y.images : [];
    if (z.length) {
      const X = [];
      h >= 0 && h < z.length && X.push(z[h]), X.push(...z);
      for (const j of X.filter((J) => !Ia(J))) {
        const J = kn(j);
        if (J)
          return String((f == null ? void 0 : f.name) || ""), { src: `${J}&pano_src=${bu(y)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let T = [];
    try {
      T = typeof (Gt == null ? void 0 : Gt.getNodeImageUrls) == "function" ? Gt.getNodeImageUrls(m) || [] : [];
    } catch {
      T = [];
    }
    if (Array.isArray(T) && T.length) {
      const X = [];
      h >= 0 && h < T.length && X.push(T[h]), X.push(...T);
      for (const j of X) {
        const J = kn(j);
        if (J)
          return String((f == null ? void 0 : f.name) || ""), { src: J, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const ie = Array.isArray(m == null ? void 0 : m.imgs) ? m.imgs : [];
    if (ie.length) {
      const X = [];
      h >= 0 && h < ie.length && X.push(ie[h]), X.push(...ie);
      for (const j of X) {
        const J = kn(j);
        if (J)
          return String((f == null ? void 0 : f.name) || ""), { src: J, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const P = (c = m == null ? void 0 : m.widgets) == null ? void 0 : c.find((X) => String((X == null ? void 0 : X.name) || "").toLowerCase() === "image");
    if (P) {
      let X = kn(P.value);
      if (X && !X.includes("/") && !X.includes(":") && (m.comfyClass === "LoadImage" || m.type === "LoadImage") && (X = hn.apiURL(`/view?filename=${encodeURIComponent(X)}&type=input&subfolder=`)), X)
        return String((f == null ? void 0 : f.name) || ""), { src: X, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const a = Wt(e, "background") ? li(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(a == null ? void 0 : a.pano_input_images) && l.push(...a.pano_input_images), Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d.pano_input_images) && l.push(...a.ui.pano_input_images), l.length > 0)
    for (const u of l) {
      const f = kn(u);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function jk(e, t = [], r = {}) {
  const n = zk(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = Dk(i);
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
function p0(e, t = [], r = null, n = {}) {
  const i = jk(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function h0(e) {
  e && (Ud.disposeOwner(e), Pn(e).linkedImages.clear(), uo(e));
}
function Hk(e) {
  e && (Pn(e).linkedImages.clear(), uo(e));
}
function m0(e, t) {
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
  const n = m0(e, ((s = bt(e)) == null ? void 0 : s.mode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < _k ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function kp(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), s = r / i, a = n / o, l = Math.min(s, a);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function Gk(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), s = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || s <= 0) return;
  const a = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), c = Math.max(Math.round(34 * r), a + Math.round(14 * r)), d = n + (o - l) * 0.5, u = i + (s - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, u, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, u + c * 0.5 + 0.5), e.restore();
}
function Rc(e, t) {
  var n, i;
  const r = (i = (n = bt(e)) == null ? void 0 : n.dom) == null ? void 0 : i.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function Kk(e) {
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
function Wk(e, t) {
  return s0(e, t);
}
function bl(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = Rk(r);
  if (!o && (n != null && n.external)) {
    if (!Wt(e, "external-sticker")) return null;
    const p = li(e == null ? void 0 : e.id), w = ((f = p == null ? void 0 : p.ui) == null ? void 0 : f.pano_sticker_input_images) || (p == null ? void 0 : p.pano_sticker_input_images) || [];
    for (const m of Array.isArray(w) ? w : [w])
      if (o = kn(m), o) break;
  }
  if (!o) return null;
  const s = lr(e, "pano_sticker_input_state_hash"), a = n != null && n.external ? String(s ?? "") : "", l = n != null && n.external ? Pn(e).ownOutputRev : 0, c = n != null && n.external ? Yd(o, l) : o, d = tk(o, a, l);
  return Ud.get(e, d, c, (p, w) => {
    var m, h;
    w && (n != null && n.external && Pn(e).outputFromRun && ii(e, "image-loaded"), (h = (m = bt(e).dom) == null ? void 0 : m.requestDraw) == null || h.call(m));
  }) || null;
}
function Uk(e, t) {
  var f, p, w, m;
  const r = bt(e), n = Jk(e, t), i = Zk(t), o = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.groups) ? t.painting.groups : [], s = new Map(
    o.filter((h) => h && typeof h == "object").map((h) => [String((h == null ? void 0 : h.actionGroupId) || (h == null ? void 0 : h.id) || "").trim(), Number((h == null ? void 0 : h.z_index) || 0)])
  ), a = n ? i.map((h) => {
    const y = n.getGroupDisplayCanvas(h);
    return y ? {
      id: `paint_group:${h}`,
      source: y,
      revision: `${String(r.paintRevisionKey || "")}:${h}`,
      zIndex: Number(s.get(h) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], l = Array.isArray((p = t == null ? void 0 : t.painting) == null ? void 0 : p.raster_objects) ? t.painting.raster_objects : [];
  if (l.length === 0)
    return (m = (w = r.rasterCache) == null ? void 0 : w.retain) == null || m.call(w, []), a;
  r.rasterCache || (r.rasterCache = Qw()), r.rasterReady || (r.rasterReady = () => {
    var h, y;
    return (y = (h = r.dom) == null ? void 0 : h.requestDraw) == null ? void 0 : y.call(h);
  });
  const c = Xw(t == null ? void 0 : t.output_preset), d = l.filter((h) => (h == null ? void 0 : h.visible) !== !1 && String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => String((h == null ? void 0 : h.id) || ""));
  r.rasterCache.retain(d);
  const u = l.map((h) => {
    const y = r.rasterCache.get(
      h,
      c.width,
      c.height,
      r.rasterReady
    );
    return y ? {
      id: `raster:${String((h == null ? void 0 : h.id) || "")}`,
      source: y.source,
      revision: y.revision,
      zIndex: Number((h == null ? void 0 : h.z_index) || 0),
      opacity: 1,
      visible: (h == null ? void 0 : h.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...u];
}
function Bk(e, t, r, n) {
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
  const i = qk(e, t, n);
  return i || null;
}
function Yk(e, t) {
  var u, f;
  const r = Number(e == null ? void 0 : e.clientX), n = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(n)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (u = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : u.call(i), s = (t == null ? void 0 : t.ds) || ((f = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : f.ds);
  if (!o || !s) return null;
  const a = Number(s.scale || 1);
  if (!Number.isFinite(a) || Math.abs(a) < 1e-6) return null;
  const l = Array.isArray(s.offset) ? s.offset : [0, 0], c = (r - Number(o.left || 0)) / a - Number(l[0] || 0), d = (n - Number(o.top || 0)) / a - Number(l[1] || 0);
  return !Number.isFinite(c) || !Number.isFinite(d) ? null : { x: c, y: d };
}
function qk(e, t, r) {
  var i, o;
  const n = Yk(t, r || (Gt == null ? void 0 : Gt.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function Xk(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function Jk(e, t) {
  var d, u, f, p, w, m, h, y, z, T, ie, P;
  const r = (u = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.paint) == null ? void 0 : u.strokes, n = (p = (f = t == null ? void 0 : t.painting) == null ? void 0 : f.mask) == null ? void 0 : p.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const s = bt(e), a = Xk(e, t), l = `${a.width}x${a.height}`;
  (!s.paintEngine || s.paintDescriptorKey !== l) && (s.paintEngine = Ll(a), s.paintDescriptorKey = l, s.paintRevision = null, s.paintRevisionKey = "");
  const c = {
    paint: r || null,
    mask: n || null,
    groups: ((w = t == null ? void 0 : t.painting) == null ? void 0 : w.groups) || null,
    rasterObjects: ((m = t == null ? void 0 : t.painting) == null ? void 0 : m.raster_objects) || null
  };
  return (((h = s.paintRevision) == null ? void 0 : h.paint) !== c.paint || ((y = s.paintRevision) == null ? void 0 : y.mask) !== c.mask || ((z = s.paintRevision) == null ? void 0 : z.groups) !== c.groups || ((T = s.paintRevision) == null ? void 0 : T.rasterObjects) !== c.rasterObjects) && (s.paintRevision = c, s.paintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((ie = t == null ? void 0 : t.painting) == null ? void 0 : ie.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((P = t == null ? void 0 : t.painting) == null ? void 0 : P.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), s.paintEngine.rebuildCommitted(t)), s.paintEngine;
}
function Zk(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function xp(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Qk(e, t, r) {
  const n = Hd(t, r);
  n.visible && jd(e, n.boundaryEdges, { selected: !1 });
}
function ex(e, t, r) {
  const n = Hd(t, r);
  n.visible && (e.save(), jd(e, n.boundaryEdges, { selected: !0 }), t0(e, n, { accent: Kw(t) }), e.restore());
}
function Cu(e, t, r) {
  return cg(ll(bt(e).view || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function vl(e) {
  var t;
  return ((t = bt(e).playback) == null ? void 0 : t.playback.frame) ?? vo;
}
function tx(e) {
  return [Wt(e, "background") ? Id(li(e.id), ["pano_input_videos"], kn) : "", a0(e, fr)];
}
function nx(e) {
  var o;
  if (!Wt(e, "external-sticker")) return null;
  const t = li(e.id), r = lr(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(kn), meta: r };
  const i = Id(t, ["pano_sticker_input_videos"], kn);
  return i ? { src: i, meta: r } : null;
}
function rx({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function g0(e, t) {
  var n;
  const r = bt(e);
  return ((n = r.scene) == null ? void 0 : n.state) !== t && (r.scene = { state: t, sceneState: Ln({ ...t, painting: null }) }), r.scene.sceneState;
}
function ix(e, t) {
  const r = Bl(e), n = !!r.bg_media;
  if (!n && !r.scene) return null;
  if (Wt(e, "background")) {
    const o = lr(e, "pano_bg_width");
    if (o !== void 0) return o;
  }
  if (!n) return;
  if (bg(e, fr)) {
    const { playback: o, video: s } = t;
    return o.source && o.source === a0(e, fr) && s.videoWidth > 0 ? s.videoWidth : void 0;
  }
  const i = p0(e, fr, null, { preserveReadyWhilePending: !1 });
  return ks(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
}
function ox(e, t) {
  var i, o, s;
  const r = String(((i = kr(e, "output_size")) == null ? void 0 : i.value) ?? ""), n = ["background", "external-sticker", "scene"].every((a) => Wt(e, a));
  return {
    stateText: String(((o = kr(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: r,
    coverage: _n(e).coverage,
    bgColor: String(((s = kr(e, "bg_color")) == null ? void 0 : s.value) ?? ""),
    bgWidth: r === "auto" ? ix(e, t) : null,
    run: n && lr(e, "pano_output_size") || null,
    erp: lr(e, "pano_output_erp") || null,
    frame: lr(e, "pano_output_frame") || null
  };
}
const sx = 38;
function qd(e) {
  const t = Pn(e);
  t != null && t.studioRunImage && (t.studioRunImage.image.removeAttribute("src"), t.studioRunImage = null);
}
function ax(e, t) {
  const r = Pn(e).studioRunImage;
  return t && (r == null ? void 0 : r.src) === kn(t.entry) ? r : null;
}
function lx(e, t) {
  const r = Pn(e), n = bt(e), i = t ? kn(t.entry) : "";
  if (r.studioRunImage && r.studioRunImage.src !== i && qd(e), !i) return null;
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
      revision: La(o.image),
      coverage: Number(t.entry.coverage) === 180 ? 180 : 360,
      quaternion: jw(t.entry.rotation)
    }
  } : null;
}
function cx(e, t) {
  var r;
  return t ? (r = ax(e, t)) != null && r.failed ? "unavailable" : t.current ? "run" : "edited" : "not-run";
}
function ux(e, t, r) {
  const n = g0(e, t), i = (s) => {
    var l;
    if (s.visible === !1) return null;
    let a;
    if (t.version === 2) {
      a = bl(e, s.id, sl(s.source), { external: s.source.kind === "port" });
      const c = bt(e).playback;
      if (s.source.kind === "port" && c) {
        const d = c.playback.stickerPicture(c.stickerStill, a), u = Fd(c.playback.stickerMedia, a);
        return d ? { media: d, revision: La(d), source: u } : null;
      }
    } else {
      const c = s.type === "external_image" || s.source_kind === "external_image", d = String(s.asset_id || "") || (c ? String(s.id || "") : "");
      a = bl(e, d, (l = t.assets) == null ? void 0 : l[s.asset_id], { external: c });
    }
    return ks(a) ? { media: a, revision: La(a) } : null;
  }, o = (t.painting_visible === !1 ? [] : Uk(e, t)).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  return {
    background: ks(r) ? { media: r, revision: La(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: dg(n, vl(e), t.stickers, { media: i, paintLayers: o })
  };
}
function dx(e, t, r, n = null) {
  var J, _e, ke, ge, ve, he, Se;
  const i = bt(e), o = String(i.mode || "stickers");
  m0(e, o);
  const s = _n(e);
  o === "cutout" && i.cutoutState !== s ? (i.cutoutState = s, (ke = (_e = (J = i.cutout) == null ? void 0 : J.session) == null ? void 0 : _e.refresh) == null || ke.call(_e)) : o === "stickers" && i.stickersState !== s && (i.stickersState = s, (he = (ve = (ge = i.stickers) == null ? void 0 : ge.session) == null ? void 0 : ve.refresh) == null || he.call(ve));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== c) && (t.width = l, t.height = c);
  const u = { x: 0, y: 0, w: l, h: c };
  if (d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, c), n != null && n.frame) {
    r.release(), jo(e, !1, "");
    const { width: pe, height: ne } = xp(n.frame), ae = sx, fe = Math.min(l / pe, (c - ae) / ne);
    d.drawImage(n.frame, (l - pe * fe) / 2, ae + (c - ae - ne * fe) / 2, pe * fe, ne * fe);
    return;
  }
  const f = (n == null ? void 0 : n.background) || null, p = (f == null ? void 0 : f.media) || (i.playback ? rx(i.playback) : $k(e, ["pano_input_videos"], () => {
    var pe, ne;
    return (ne = (pe = i.dom) == null ? void 0 : pe.requestDraw) == null ? void 0 : ne.call(pe);
  })) || p0(
    e,
    fr,
    () => {
      var pe, ne;
      return (ne = (pe = i.dom) == null ? void 0 : pe.requestDraw) == null ? void 0 : ne.call(pe);
    },
    { preserveReadyWhilePending: !1 }
  ), w = ks(p);
  let m = null;
  const h = () => f ? { background: f, layers: [] } : ux(e, s, p), y = (pe, ne) => {
    m || (m = h());
    const ae = r.render({ width: pe.w, height: pe.h, camera: ne, ...m });
    return ae && d.drawImage(ae.canvas, ae.x, ae.y, ae.width, ae.height, pe.x, pe.y, pe.w, pe.h), !!ae;
  };
  if (o === "cutout") {
    const pe = Kk(s), ne = xp(p), ae = pe ? Oe(ui(pe).aspect, 0.1, 10) : w ? Oe(Number(ne.width / ne.height), 0.05, 20) : 1, fe = zd(u, ae);
    i.cutoutFrame = fe;
    let $ = "none";
    const A = String((p == null ? void 0 : p.currentSrc) || (p == null ? void 0 : p.src) || "");
    if (pe)
      if (p && !w)
        $ = "loading";
      else if (w) {
        const D = nw({ width: l, height: c }, fe, pe);
        [
          !D.fallback || y(D.fallback.rect, as(D.fallback.shot)),
          y(D.rect, as(D.shot)),
          !D.fallback || y(fe, as(pe))
        ].every(Boolean) || ($ = "loading");
      } else
        $ = "empty";
    else {
      const D = i.lastCutoutShot;
      D ? (i.view = Wg(D, { width: l, height: c }), i.lastCutoutShot = null) : i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 }), w ? y(u, ll(i.view, l, c)) || ($ = "loading") : p ? $ = "loading" : $ = "empty";
    }
    w || r.release(), r.failed && $ === "loading" && ($ = "none"), pe && (i.lastCutoutShot = { ...pe }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, c), d.rect(fe.x, fe.y, fe.w, fe.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(fe.x + 0.5, fe.y + 0.5, Math.max(0, fe.w - 1), Math.max(0, fe.h - 1)), d.restore()), $ === "loading" ? (Rc(e, !1), jo(e, !0, A)) : $ === "empty" ? (Rc(e, !0), jo(e, !1, "")) : (Rc(e, !1), jo(e, !1, ""));
    return;
  }
  i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 });
  let z = !1;
  (!p || w) && (m = h(), !m.background && !m.layers.length ? (r.release(), z = !0) : z = y(u, ll(i.view, l, c)));
  const T = !z && !r.failed;
  jo(e, T, T ? String((p == null ? void 0 : p.currentSrc) || (p == null ? void 0 : p.src) || "") : ""), T && Gk(d, u, kp(t, u));
  const ie = Cu(e, l, c);
  !p && z && fx(d, ie, kp(t, u));
  const P = String(((Se = s == null ? void 0 : s.active) == null ? void 0 : Se.selected_sticker_id) || ""), X = vu(s, vl(e)), j = z && e.__panoStudio !== !0 ? X.find((pe) => String((pe == null ? void 0 : pe.id) || "") === P && (pe == null ? void 0 : pe.visible) !== !1) : null;
  z && !f && X.filter((pe) => pe !== j && (pe == null ? void 0 : pe.visible) !== !1 && (pe.external || pe.source_kind === "external_image")).filter((pe) => !ks(bl(e, pe.id, null, { external: !0 }))).forEach((pe) => Qk(d, pe, ie)), j && ex(d, j, ie);
}
function Mp(e, t, r, n, i = 1) {
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
function fx(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let a = -75; a <= 75; a += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(Tn(c, a));
    Mp(e, l, t, a === 0 ? i : n, a === 0 ? 1.5 : 1);
  }
  for (let a = -180; a <= 180; a += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(Tn(a, c));
    Mp(e, l, t, n, a % 90 === 0 ? 1.3 : 1);
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
function Iu(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function px(e, t, r = 20) {
  var s;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (s = t.getBoundingClientRect) == null ? void 0 : s.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function Bn(e, t) {
  return px(e, t) ? !1 : (Iu(e), !0);
}
function Np() {
  var r;
  const e = (r = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function hx(e) {
  var r;
  if (!e) return;
  const t = (r = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function mx(e, t = 360, r = 260) {
  const n = bt(e);
  if (!n || n.userResized === !0 || n.standaloneBootSized === !0 || !l0(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, n.standaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function gx(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0)), o = bt(e);
  o.bootMinHeightTimer && (clearTimeout(o.bootMinHeightTimer), o.bootMinHeightTimer = null), o.bootMinHeightActive = i > 0, !(i <= 0) && (o.bootMinHeightTimer = setTimeout(() => {
    var s, a;
    o.bootMinHeightTimer = null, (s = o.dom) != null && s.widget && o.bootMinHeightActive && (o.bootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function Pp(e, t = null, r = 0, n = 0, i = !0) {
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
      s.userResized = !0, t == null || t(), i && yx(e, 180, t);
    }
  };
}
function yx(e, t = 180, r = null) {
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
const bx = /* @__PURE__ */ new WeakMap();
function y0(e, t) {
  return xg(bx, e, t) ? !1 : (Vk(e, t), h0(e), Yo(e), !0);
}
async function vx(e) {
  var r, n;
  const t = await S_(e, Gt, hn);
  t && (y0(e, t), (n = (r = bt(e).dom) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function Sx(e, t = {}) {
  var ze;
  const r = t.__allowStandalone === !0, n = bt(e), i = Pn(e), o = Kn(e), s = c0(e);
  if (s && !r) {
    Bd(e);
    return;
  }
  s && mx(e), n.mode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = n.mode === "stickers", l = a && e.__panoStudio === !0, c = a && !l, d = n.mode !== "cutout";
  if (n.noPreview = t.noPreview === !0, n.openEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), {
    signature: _p(e)
  }.signature || _p(e), Pu(e), e == null || e.id, n.mode, e.addDOMWidget, Nu(e), (ze = n.dom) != null && ze.widget || typeof e.addDOMWidget != "function")
    return;
  const f = t.noPreview === !0, p = f ? 0 : 56, w = f ? 0 : Z_, m = document.createElement("div");
  if (xk(), m.className = "pano-node-preview-dom", m.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), f && m.classList.add("pano-node-preview--no-preview"), m.setAttribute("data-capture-wheel", "true"), m.tabIndex = 0, m.style.cssText = [
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
    const le = ml(xu(
      e.addDOMWidget(Mu(), "preview", m, Pp(e, null))
    ));
    Yo(e), n.dom = { widget: le, root: m, requestDraw: () => {
    } };
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
  const y = on({ label: "node.surface" });
  y.style.cssText = [
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
  const z = document.createElement("div");
  z.style.cssText = [
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
  ].join(";"), z.textContent = "Connect ERP image", h.appendChild(y), h.appendChild(z), m.appendChild(h);
  const T = om(m), ie = document.createElement("div");
  ie && (ie.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", ie.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", m.appendChild(ie)), Mk(e, 120, 120), Yo(e);
  let P = null;
  try {
    gx(e, p, () => {
      var le, Ie;
      return (Ie = (le = n.dom) == null ? void 0 : le.requestDraw) == null ? void 0 : Ie.call(le);
    }), P = ml(xu(e.addDOMWidget(
      Mu(),
      "preview",
      m,
      Pp(
        e,
        () => {
          var le, Ie;
          return (Ie = (le = n.dom) == null ? void 0 : le.requestDraw) == null ? void 0 : Ie.call(le);
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
  }, j = Gw(), J = () => {
    X.destroyed || (X.needsDraw = !0, !X.inTick && !X.raf && (X.raf = requestAnimationFrame(g)));
  }, _e = mg(J), ke = /* @__PURE__ */ _o(a ? {
    ...zg(_n(e)),
    importing: !1,
    dropActive: !1,
    viewUnavailable: !1,
    playable: !1,
    playing: !1,
    ...l ? { status: { shot: "", size: "", note: "" } } : {}
  } : {
    ...Gg(_n(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((le) => ({ value: le, label: le }))
  });
  let ge = null;
  if (a && e.__panoSceneStateV2) {
    const [le, Ie] = [0, 1].map(() => {
      const He = Es(document, "node.playback");
      return He.playsInline = !0, He.preload = "auto", He.crossOrigin = "anonymous", He.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", h.appendChild(He), He;
    }), Ae = on({ label: "node.still" });
    Ae.__panoFrameIdx = 0;
    const Fe = on({ label: "node.port-still" });
    Fe.__panoFrameIdx = 0;
    const je = X_({
      video: le,
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
        if (!(le.videoWidth > 0 && le.videoHeight > 0)) return;
        const He = Math.min(1, wk / le.videoWidth);
        Ae.width = Math.round(le.videoWidth * He), Ae.height = Math.round(le.videoHeight * He), (Ue = Ae.getContext("2d")) == null || Ue.drawImage(le, 0, 0, Ae.width, Ae.height), Ae.__panoFrameIdx += 1, J();
      },
      onStickerCapture: () => {
        var He;
        Ie.videoWidth > 0 && Ie.videoHeight > 0 && (Fe.width = Ie.videoWidth, Fe.height = Ie.videoHeight, (He = Fe.getContext("2d")) == null || He.drawImage(Ie, 0, 0), Fe.__panoFrameIdx += 1, J());
      },
      onChange: () => {
        ke.playing = je.playing, J();
      }
    });
    ge = { playback: je, video: le, still: Ae, stickerVideo: Ie, stickerStill: Fe, stickerSource: "" }, n.playback = ge;
  }
  const ve = () => {
    var ft;
    const { playback: le, still: Ie, stickerStill: Ae } = ge, Fe = Fa(h, !!((ft = e.flags) != null && ft.collapsed)), je = le.source, He = Fe ? nx(e) : null, Ue = le.follow({
      shown: Fe,
      sources: Fe ? tx(e) : [],
      state: _n(e),
      sticker: He
    });
    ((He == null ? void 0 : He.src) || "") !== ge.stickerSource && (ge.stickerSource = (He == null ? void 0 : He.src) || "", hs(Ae)), le.source !== je && (hs(Ie), Ie.__panoFrameIdx = 0), ke.playable = Ue, ke.playing = le.playing;
  }, he = () => {
    var Ie, Ae;
    const le = ((Ie = i.ownOutputVideo) == null ? void 0 : Ie.player) ?? null;
    le && !Fa(h, !!((Ae = e.flags) != null && Ae.collapsed)) && le.pause(), a && (ke.playable = !!le && !le.failed(), ke.playing = !!(le != null && le.playing));
  }, Se = () => {
    var le;
    ge == null || ge.playback.pause(), (le = i.ownOutputVideo) == null || le.player.pause();
  };
  let pe = null;
  const ne = (a ? Y_ : iw)({
    readState: () => _n(e),
    publishLiveState: (le) => {
      le ? (pe = le, o.liveState = le) : (o.liveState === pe && (o.liveState = null), pe = null), o.liveStateVersion += 1, o.parsedState = null, J();
    },
    commitState: (le) => {
      var Fe, je, He, Ue;
      const Ie = kr(e, "state_json");
      if (!Ie) return;
      Bm(e, le.active);
      const Ae = Ym(e, le, String(Ie.value ?? ""));
      Ae !== null && (Ie.value = Ae, (Fe = Ie.callback) == null || Fe.call(Ie, Ae), o.parsedState = null, (je = e.setDirtyCanvas) == null || je.call(e, !0, !0), (Ue = (He = e.graph) == null ? void 0 : He.setDirtyCanvas) == null || Ue.call(He, !0, !0));
    },
    onChange: (le) => Object.assign(ke, le)
  }), fe = a ? n0(e, (le = "sync", Ie = null) => {
    var ln;
    if (!a || !e.graph || !ne || ne.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Bt = Wt(e, "external-sticker");
      return ne.apply({
        type: "sync-port",
        value: Lg(e, {
          pose: Bt ? lr(e, "pano_sticker_input_pose", Ie) : null,
          handoff: Wt(e, "sticker-handoff") ? lr(e, "pano_sticker_handoff", Ie) : null
        })
      });
    }
    const Ae = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Bt) => String((Bt == null ? void 0 : Bt.name) || "") === "sticker_image") : -1, Fe = Ae >= 0 ? ((ln = e.getInputLink(Ae)) == null ? void 0 : ln.id) ?? null : null;
    if (Fe == null)
      return ne.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Wt(e, "external-sticker")) return !1;
    const je = lr(e, "pano_sticker_input_pose", Ie), He = Array.isArray(je) ? je[0] : je, Ue = String(lr(e, "pano_sticker_input_state_hash", Ie) ?? ""), ft = n.view || { yaw: 0, pitch: 0 }, yt = _n(e), Dt = (Array.isArray(yt == null ? void 0 : yt.stickers) ? yt.stickers : []).find((Bt) => String((Bt == null ? void 0 : Bt.id) || "") === "sticker_image_1"), Ct = bl(e, "sticker_image_1", null, { external: !0 }), An = He && typeof He == "object" ? He : Dt || { yaw_deg: ft.yaw, pitch_deg: ft.pitch, hFOV_deg: 30, rot_deg: 0 };
    return ne.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Fe,
        stateHash: Ue,
        pose: An,
        imageWidth: Number((Ct == null ? void 0 : Ct.naturalWidth) || (Ct == null ? void 0 : Ct.width) || 0),
        imageHeight: Number((Ct == null ? void 0 : Ct.naturalHeight) || (Ct == null ? void 0 : Ct.height) || 0)
      }
    });
  }) : () => {
  };
  let $ = 0;
  const A = async (le) => {
    if (!a || !ne || !ar(le)) return !1;
    Se();
    const Ie = `asset_${Math.random().toString(16).slice(2, 10)}`, Ae = `st_${Math.random().toString(16).slice(2, 10)}`, Fe = { ...n.view || { yaw: 0, pitch: 0 } };
    $ += 1, ke.importing = !0;
    const je = Uo(e, `add:${Ie}`, async () => {
      const He = await Bo(le), Ue = await Pi(le, {
        fetchApi: (ft, yt) => hn.fetchApi(ft, yt)
      });
      return Y(), ne.apply({
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
      $ = Math.max(0, $ - 1), ke.importing = $ > 0, J();
    }
  };
  let D = null, ee = null, se = null, U = !1;
  const b = () => {
    var le;
    return se && (clearTimeout(se), se = null), U ? (U = !1, ((le = ne == null ? void 0 : ne.commitGesture) == null ? void 0 : le.call(ne)) ?? !1) : !1;
  }, Y = () => {
    var Fe, je, He;
    const le = b(), Ie = (D == null ? void 0 : D.pointerId) ?? (ee == null ? void 0 : ee.pointerId);
    if (D = null, ee = null, Ie != null) {
      try {
        (Fe = y.hasPointerCapture) != null && Fe.call(y, Ie) && ((je = y.releasePointerCapture) == null || je.call(y, Ie));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const Ae = ((He = ne == null ? void 0 : ne.commitGesture) == null ? void 0 : He.call(ne)) ?? !1;
    return le || Ae;
  }, ue = () => {
    var Fe, je, He;
    const le = b(), Ie = D == null ? void 0 : D.pointerId;
    if (D = null, Ie != null) {
      try {
        (Fe = y.hasPointerCapture) != null && Fe.call(y, Ie) && ((je = y.releasePointerCapture) == null || je.call(y, Ie));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const Ae = ((He = ne == null ? void 0 : ne.cancelGesture) == null ? void 0 : He.call(ne)) ?? !1;
    return le || Ae;
  }, C = () => Y();
  ne && o.flushers.add(C);
  let W = null, v = !1;
  if (ie && ne)
    try {
      Gd(), W = rd(l ? Rw : a ? Iw : ww, {
        model: ke,
        onAction: (le) => {
          var Fe, je, He;
          if ((le == null ? void 0 : le.type) === "toggle-playback") {
            Y(), ge ? ge.playback.toggle() : (Fe = i.ownOutputVideo) == null || Fe.player.toggle(), J();
            return;
          }
          if (Se(), (le == null ? void 0 : le.type) === "open-editor") {
            Y(), a || (ke.aspectOpen = !1), (je = n.openEditor) == null || je.call(n);
            return;
          }
          if (a) {
            if ((le == null ? void 0 : le.type) === "add-image-file") {
              A(le.file);
              return;
            }
            ne.apply(le) && J();
            return;
          }
          if ((le == null ? void 0 : le.type) === "toggle-aspect") {
            ke.aspectOpen = !ke.aspectOpen;
            return;
          }
          if ((le == null ? void 0 : le.type) === "close-aspect") {
            ke.aspectOpen = !1;
            return;
          }
          let Ie = le;
          if ((le == null ? void 0 : le.type) === "add-frame") {
            const Ue = n.view || { yaw: 0, pitch: 0, fov: 100 };
            Ie = {
              ...le,
              ...ew(Ue, {
                width: y.width,
                height: y.height
              })
            };
          } else if ((le == null ? void 0 : le.type) === "delete-frame") {
            const Ue = Ti(_n(e));
            Ue && (n.view = Wg(Ue, {
              width: y.width,
              height: y.height
            }));
          }
          const Ae = ((He = n.cutoutFrame) == null ? void 0 : He.safeRect) || null;
          ke.aspectOpen = !1, ne.apply({ ...Ie, safeRect: Ae }) && J();
        }
      }), W.mount(ie), v = !0;
    } catch {
      W = null, v = !1;
    }
  const B = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    ge && ve(), J();
  }) : null;
  B == null || B.observe(h);
  const g = (le) => {
    var Ae, Fe, je;
    X.raf = 0, X.inTick = !0;
    let Ie = !1;
    try {
      if (Ie = S.stepInertia(le), X.needsDraw || Ie) {
        X.needsDraw = !1, ge ? ve() : he();
        const He = l ? ox(e, ge) : null, Ue = He ? zw(He) : null, ft = () => g0(e, _n(e)), yt = He && Fa(h, !!((Ae = e.flags) != null && Ae.collapsed)) ? lx(e, Ue) : null;
        if ((Fe = e.flags) != null && Fe.collapsed || dx(e, y, _e, yt), ke.viewUnavailable = _e.failed, l) {
          const Dt = j({ ...He, display: cx(e, Ue) }, ft);
          Dt && (ke.status = Dt);
        }
      }
    } finally {
      X.inTick = !1;
    }
    (Ie || X.needsDraw) && !X.raf && (X.raf = requestAnimationFrame(g)), kk() && (!n.debugLastTs || le - n.debugLastTs > 1200) && (n.debugLastTs = le, n.mode, Nu(e), zo(m), zo(h), zo(y), zo(m.parentElement), zo((je = m.parentElement) == null ? void 0 : je.parentElement), Number(y.width || 0), Number(y.height || 0), void 0);
  }, S = ld({
    getView: () => (n.view || (n.view = { yaw: 0, pitch: 0, fov: 100 }), n.view),
    setView: (le) => {
      n.view = le;
    },
    getViewportSize: () => {
      const le = y.getBoundingClientRect();
      return {
        w: Math.max(1, Number(le.width || y.clientWidth || 0)),
        h: Math.max(1, Number(le.height || y.clientHeight || 0))
      };
    },
    getInvert: () => {
      const le = Sp();
      return {
        x: le.invert_view_x ? -1 : 1,
        y: le.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      J();
    }
  }), R = a ? h : m, x = (le) => {
    const Ie = y.getBoundingClientRect();
    return {
      x: (Number(le.clientX) - Ie.left) * (y.width / Math.max(1, Ie.width)),
      y: (Number(le.clientY) - Ie.top) * (y.height / Math.max(1, Ie.height))
    };
  }, F = (le) => {
    var Fe, je;
    if (!a || l || !d) return;
    const Ie = _n(e), Ae = mp(
      vu(Ie, vl(e)),
      String(((Fe = Ie == null ? void 0 : Ie.active) == null ? void 0 : Fe.selected_sticker_id) || ""),
      x(le),
      Cu(e, y.width, y.height)
    );
    if (!Ae) {
      y.style.cursor = "grab";
      return;
    }
    if (((je = Ae.item) == null ? void 0 : je.locked) === !0) {
      y.style.cursor = "default";
      return;
    }
    y.style.cursor = Ae.hit.cursor || "default";
  };
  y.addEventListener("pointerdown", (le) => {
    var ft, yt, Dt, Ct, An, qe, ln, Bt, gi, Br, yi;
    if (!Bn(le, R) || le.button !== 0) return;
    if (!a) {
      const sn = Ti(_n(e)), bn = n.cutoutFrame;
      if (!sn) {
        (ft = m.focus) == null || ft.call(m, { preventScroll: !0 }), (yt = y.setPointerCapture) == null || yt.call(y, le.pointerId), y.style.cursor = "grabbing", S.startDrag(le.clientX, le.clientY, le.pointerId);
        return;
      }
      if (sn.locked === !0 || !bn || !ne) return;
      const Yr = x(le);
      let hr;
      if (le.shiftKey) {
        const nr = Bg({
          frame: bn,
          point: Yr,
          startRollDeg: Number(sn.roll_deg ?? sn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!nr) return;
        hr = { kind: "roll", pointerId: le.pointerId, rollGesture: nr };
      } else {
        const nr = ((Dt = _n(e)) == null ? void 0 : Dt.ui_settings) || Sp();
        hr = {
          kind: "pan",
          pointerId: le.pointerId,
          startPoint: Yr,
          startShot: { ...sn },
          focalPx: Li(bn, sn),
          invertX: nr.invert_view_x === !0,
          invertY: nr.invert_view_y === !0
        };
      }
      Y(), (Ct = m.focus) == null || Ct.call(m, { preventScroll: !0 }), (An = y.setPointerCapture) == null || An.call(y, le.pointerId), y.style.cursor = "grabbing", ne.beginGesture(), D = hr;
      return;
    }
    if (!d) return;
    const Ie = x(le), Ae = _n(e), Fe = String(((qe = Ae == null ? void 0 : Ae.active) == null ? void 0 : qe.selected_sticker_id) || ""), je = Cu(e, y.width, y.height);
    (ln = m.focus) == null || ln.call(m, { preventScroll: !0 });
    const He = () => mp(vu(Ae, vl(e)), Fe, Ie, je);
    let Ue = l ? null : He();
    if (Ue && (ge != null && ge.playback.playing) && (Se(), Ue = He()), Ue && ne) {
      if (S.stopMotion(), Y(), String(((Bt = Ue.item) == null ? void 0 : Bt.id) || "") !== Fe && ne.apply({ type: "select-sticker", id: Ue.item.id }), ((gi = Ue.item) == null ? void 0 : gi.locked) === !0) {
        J();
        return;
      }
      const sn = Ie, bn = Ue.geometry.center;
      ee = {
        active: !0,
        kind: Ue.hit.kind,
        pointerId: le.pointerId,
        startPoint: sn,
        startCenter: { ...bn },
        startSticker: { ...Ue.item },
        startDistance: Math.max(1, Math.hypot(sn.x - bn.x, sn.y - bn.y)),
        startAngle: Math.atan2(sn.y - bn.y, sn.x - bn.x),
        projection: je
      }, ne.beginGesture(), (Br = y.setPointerCapture) == null || Br.call(y, le.pointerId), y.style.cursor = Ue.hit.kind === "rotate" ? "grabbing" : Ue.hit.kind === "move" ? "move" : Ue.hit.cursor, J();
      return;
    }
    (yi = y.setPointerCapture) == null || yi.call(y, le.pointerId), y.style.cursor = "grabbing", S.startDrag(le.clientX, le.clientY, le.pointerId);
  }), y.addEventListener("pointermove", (le) => {
    if (!a) {
      if (!D) {
        if (!S.state.drag.active) return;
        Bn(le, R), S.moveDrag(le.clientX, le.clientY, "pano");
        return;
      }
      if (D.pointerId !== le.pointerId || !ne) return;
      if (Bn(le, R), D.kind === "pan") {
        const Ae = x(le);
        ne.updateGesture({
          type: "pan-camera",
          startShot: D.startShot,
          dx: Ae.x - D.startPoint.x,
          dy: Ae.y - D.startPoint.y,
          focalPx: D.focalPx,
          invertX: D.invertX,
          invertY: D.invertY
        });
        return;
      }
      const Ie = Yg(D.rollGesture, x(le), le);
      if (!Ie) return;
      D.rollGesture = Ie.gesture, ne.updateGesture({ type: "set-roll", value: Ie.rollDeg });
      return;
    }
    if (!ee && !S.state.drag.active) {
      F(le);
      return;
    }
    if (ee) {
      if (ee.pointerId !== le.pointerId || !ne) return;
      Bn(le, R);
      const Ie = x(le);
      let Ae = ee.startSticker;
      if (ee.kind === "move")
        Ae = Bw(
          ee.startSticker,
          {
            x: ee.startCenter.x + Ie.x - ee.startPoint.x,
            y: ee.startCenter.y + Ie.y - ee.startPoint.y
          },
          ee.projection
        );
      else if (ee.kind === "scale") {
        const Fe = Math.hypot(Ie.x - ee.startCenter.x, Ie.y - ee.startCenter.y);
        Ae = Yw(ee.startSticker, ee.startDistance, Fe);
      } else if (ee.kind === "rotate") {
        const Fe = Math.atan2(Ie.y - ee.startCenter.y, Ie.x - ee.startCenter.x);
        Ae = qw(ee.startSticker, ee.startAngle, Fe, le.shiftKey === !0);
      }
      ne.updateGesture({ type: "set-transform", value: Ae }), J();
      return;
    }
    !d || !S.state.drag.active || (Bn(le, R), S.moveDrag(le.clientX, le.clientY, "pano"));
  });
  const L = () => {
    var Ie, Ae;
    if (!D && !ee) {
      if (!S.state.drag.active) return;
      S.endDrag(), y.style.cursor = "grab", J();
      return;
    }
    if (!ne) return;
    const le = (D == null ? void 0 : D.pointerId) ?? (ee == null ? void 0 : ee.pointerId);
    D = null, ee = null;
    try {
      (Ie = y.hasPointerCapture) != null && Ie.call(y, le) && ((Ae = y.releasePointerCapture) == null || Ae.call(y, le));
    } catch {
    }
    ne.cancelGesture(), y.style.cursor = "grab", J();
  }, I = (le, Ie = !1) => {
    var Ae, Fe, je, He;
    if (!a) {
      if (!D) {
        if (!S.state.drag.active) return;
        Bn(le, R), (Ae = y.releasePointerCapture) == null || Ae.call(y, le.pointerId), y.style.cursor = "grab", S.endDrag(), J();
        return;
      }
      if (D.pointerId !== le.pointerId || !ne) return;
      Bn(le, R), D = null, (Fe = y.releasePointerCapture) == null || Fe.call(y, le.pointerId), y.style.cursor = "grab", Ie ? ne.cancelGesture() : ne.commitGesture(), F(le), J();
      return;
    }
    if (ee) {
      if (ee.pointerId !== le.pointerId || !ne) return;
      Bn(le, R), ee = null, (je = y.releasePointerCapture) == null || je.call(y, le.pointerId), y.style.cursor = "grab", Ie ? ne.cancelGesture() : ne.commitGesture(), J();
      return;
    }
    !d || !S.state.drag.active || (Bn(le, R), (He = y.releasePointerCapture) == null || He.call(y, le.pointerId), y.style.cursor = "grab", S.endDrag(), J());
  };
  y.addEventListener("pointerup", I), y.addEventListener("pointercancel", (le) => I(le, !0)), y.addEventListener("lostpointercapture", L), y.addEventListener("pointerleave", (le) => {
    !a && D || ee || S.state.drag.active && I(le);
  });
  const N = (le) => {
    const Ie = document.activeElement;
    if (Ie !== m && !m.contains(Ie)) return;
    if (le.key === "Escape" && (D || ee) && ne) {
      L(), Iu(le);
      return;
    }
    if (!a || l || le.key !== "Delete" && le.key !== "Backspace" || !ne) return;
    const Ae = le.target, Fe = String((Ae == null ? void 0 : Ae.tagName) || "").toUpperCase();
    Fe === "INPUT" || Fe === "TEXTAREA" || Ae != null && Ae.isContentEditable || ke.canDelete === !0 && (Se(), Y(), ne.apply({ type: "delete-selected" }) && J(), Iu(le));
  };
  window.addEventListener("keydown", N, !0);
  const E = vk({
    requestFrame: (le) => requestAnimationFrame(le),
    cancelFrame: (le) => cancelAnimationFrame(le),
    restore: (le) => hx(le)
  }), _ = (le) => {
    var Ae, Fe, je, He, Ue, ft;
    if (!Bn(le, R)) return;
    if (!a) {
      const yt = Ti(_n(e));
      if (yt && yt.locked !== !0 && ne) {
        const Dt = Ya(le);
        Dt !== 0 && (U || (Y(), ne.beginGesture(), U = !0), ne.updateGesture({
          type: "step-fov",
          direction: Dt
        }) ? (se && clearTimeout(se), se = setTimeout(b, 180), J()) : ne.hasGestureChanges() || (ne.cancelGesture(), U = !1));
      } else if (!yt) {
        const Dt = Np();
        S.applyWheelEvent(le) && J(), E.schedule(Dt);
      }
      (Ae = le.preventDefault) == null || Ae.call(le), (Fe = le.stopPropagation) == null || Fe.call(le), (je = le.stopImmediatePropagation) == null || je.call(le);
      return;
    }
    if (!d) return;
    const Ie = Np();
    S.applyWheelEvent(le) && J(), (He = le.preventDefault) == null || He.call(le), (Ue = le.stopPropagation) == null || Ue.call(le), (ft = le.stopImmediatePropagation) == null || ft.call(le), E.schedule(Ie);
  }, O = a ? [h, y] : [h];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((le) => {
    O.forEach((Ie) => Ie.addEventListener(le, _, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((le) => {
    y.addEventListener(le, (Ie) => Bn(Ie, R)), h.addEventListener(le, (Ie) => Bn(Ie, R));
  });
  const Q = kr(e, "state_json");
  let me = null, ye = null;
  Q && !Q.__panoPreviewPatchedCb && (me = Q.callback, ye = (le) => {
    const Ie = me ? me(le) : void 0;
    return J(), Ie;
  }, Q.callback = ye, Q.__panoPreviewPatchedCb = ye);
  const xe = kr(e, "bg_color");
  let de = null, we = null;
  xe && !xe.__panoPreviewPatchedCb && (de = xe.callback, we = (le) => {
    const Ie = de ? de(le) : void 0;
    return J(), Ie;
  }, xe.callback = we, xe.__panoPreviewPatchedCb = we);
  const V = l ? kr(e, "output_size") : null, ce = V == null ? void 0 : V.callback, H = V ? (le) => {
    const Ie = ce ? ce(le) : void 0;
    return J(), Ie;
  } : null;
  V && (V.callback = H);
  const Z = e.onRemoved, G = e.onResize, q = e.onExecuted, K = e.onDragOver, M = e.onDragDrop;
  let te = null;
  const k = () => {
    a && (ke.dropActive = !0, te && clearTimeout(te), te = setTimeout(() => {
      te = null, ke.dropActive = !1;
    }, 140));
  }, oe = c ? function(le) {
    return (K ? K.apply(this, arguments) : !1) === !0 ? !0 : Wd(le == null ? void 0 : le.dataTransfer) ? (k(), !0) : !1;
  } : null, re = c ? function(le) {
    var Fe;
    if ((M ? M.apply(this, arguments) : !1) === !0) return !0;
    const Ae = Array.from(((Fe = le == null ? void 0 : le.dataTransfer) == null ? void 0 : Fe.files) || []).find((je) => ar(je));
    return Ae ? (te && clearTimeout(te), te = null, ke.dropActive = !1, A(Ae), !0) : !1;
  } : null;
  c && (e.onDragOver = oe, e.onDragDrop = re);
  const be = c ? bk(m, {
    onActive: (le) => {
      if (le) {
        k();
        return;
      }
      te && clearTimeout(te), te = null, ke.dropActive = !1;
    },
    onDrop: (le) => {
      A(le);
    }
  }) : () => {
  }, Ne = function(le) {
    i.outputFromRun = !0;
    const Ie = y0(e, le);
    ii(e, Ie ? "executed" : "sync", le), J();
    const Ae = q ? q.apply(this, arguments) : void 0;
    return Yo(e), Ae;
  };
  e.onExecuted = Ne;
  const Ee = e.onConnectionsChange, Ve = function(le, Ie) {
    const Ae = ip(e, le, Ie, [...Ad, ...Cd]), Fe = ip(e, le, Ie, fr), je = arguments, He = Ee ? Ee.apply(this, je) : void 0, Ue = () => {
      X.destroyed || (Fe && Hk(e), Ae && ii(e, "connection-change"), Yo(e), J());
    };
    return Ue(), queueMicrotask(Ue), He;
  };
  e.onConnectionsChange = Ve;
  const We = function() {
    const le = G ? G.apply(this, arguments) : void 0;
    return bt(this).userResized = !0, J(), le;
  };
  e.onResize = We;
  const Ge = function() {
    return Ce(), Au.unregister(this), Z ? Z.apply(this, arguments) : void 0;
  };
  e.onRemoved = Ge;
  const Ce = () => {
    var le, Ie, Ae, Fe, je, He, Ue;
    X.destroyed = !0, (le = B == null ? void 0 : B.disconnect) == null || le.call(B), a ? Y() : ue(), y.removeEventListener("lostpointercapture", L), be(), T(), window.removeEventListener("keydown", N, !0), o.flushers.delete(C), (Ie = ne == null ? void 0 : ne.destroy) == null || Ie.call(ne), (Ae = W == null ? void 0 : W.unmount) == null || Ae.call(W), ge && (ge.playback.dispose(), ge.video.remove(), ge.stickerVideo.remove(), n.playback === ge && (n.playback = null)), _e.dispose(), n.scene = null, (je = (Fe = n.rasterCache) == null ? void 0 : Fe.dispose) == null || je.call(Fe), n.rasterCache = null, n.rasterReady = null, fe(), E.dispose(), te && clearTimeout(te), te = null, Ud.disposeOwner(e), uo(e), qd(e), X.raf && cancelAnimationFrame(X.raf), X.raf = 0, ((He = n.cutout) == null ? void 0 : He.session) === ne && (n.cutout = null), ((Ue = n.stickers) == null ? void 0 : Ue.session) === ne && (n.stickers = null), n.cutoutState = null, n.stickersState = null, n.cutoutFrame = null, n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.dom = null, n.restore = null, e.onResize === We && (e.onResize = G), e.onExecuted === Ne && (e.onExecuted = q), e.onConnectionsChange === Ve && (e.onConnectionsChange = Ee), ye && (Q == null ? void 0 : Q.callback) === ye && (Q.callback = me), ye && (Q == null ? void 0 : Q.__panoPreviewPatchedCb) === ye && delete Q.__panoPreviewPatchedCb, we && (xe == null ? void 0 : xe.callback) === we && (xe.callback = de), we && (xe == null ? void 0 : xe.__panoPreviewPatchedCb) === we && delete xe.__panoPreviewPatchedCb, H && V.callback === H && (V.callback = ce), e.onDragOver === oe && (e.onDragOver = K), e.onDragDrop === re && (e.onDragDrop = M), e.onRemoved === Ge && (e.onRemoved = Z);
  };
  n.restore = Ce, n.cutout = ne && v && !a ? { session: ne, model: ke } : null, n.stickers = ne && v && a ? { session: ne, model: ke } : null, n.dom = {
    widget: P,
    root: m,
    canvas: y,
    requestDraw: J,
    state: X,
    emptyHintEl: z,
    nodeSurface: n.cutout
  }, Au.register(e), e.graph && ii(e, "attach"), J();
}
function Ap(e, t = {}) {
  u0(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Cp(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (c0(e) && !r) {
    Bd(e);
    return;
  }
  u0(e).attach(t);
}
function _x(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function wx(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, s = Number(e == null ? void 0 : e.width), a = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(s) ? s : 0) * o, c = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Number(r), u = d > 0 ? d : 1 / 0, f = Math.max(l, c);
  let p = f > 0 ? Math.min(1, u / f) : 1;
  return n && l > 0 && c > 0 && (p = Math.min(p, n.width * o / l, n.height * o / c)), {
    width: Math.max(1, Math.round(l * p)),
    height: Math.max(1, Math.round(c * p))
  };
}
function kx({
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
    var w, m, h;
    if (!s) {
      if (s = !0, (w = t == null ? void 0 : t.removeEventListener) == null || w.call(t, "fullscreenchange", d), l())
        try {
          const y = (m = t.exitFullscreen) == null ? void 0 : m.call(t);
          (h = y == null ? void 0 : y.catch) == null || h.call(y, () => {
          });
        } catch {
        }
      a = !1, i(!1);
    }
  } };
}
const xx = { class: "pano-preview-node-surface" }, Mx = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Re(), Le("div", xx, [
      Ye(tn, {
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
      e.model.viewUnavailable ? (Re(), Rn(ql, { key: 0 })) : lt("", !0)
    ]));
  }
}, pa = 140, Nx = 180, Ip = 40, Lc = 10;
function Ep(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function Op(e, t) {
  const r = Ep(e), n = Ep(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function Fp(e) {
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
      return Fp({
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
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Fp(e);
}
function b0(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Px(e) {
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
function Eu(e) {
  var i;
  const t = (i = cr) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Op(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (Op(o, r)) return t[o];
  return null;
}
function Ax(e) {
  var n, i;
  const t = Eu(e == null ? void 0 : e.id), r = [
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
function Cx(e, t = "erp_image") {
  var p, w, m, h, y, z, T;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((ie) => String((ie == null ? void 0 : ie.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((ie, P) => String((ie == null ? void 0 : ie.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(P))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const s = (m = (w = (p = cr) == null ? void 0 : p.graph) == null ? void 0 : w.getNodeById) == null ? void 0 : m.call(w, o), a = Eu(o), l = Eu(e == null ? void 0 : e.id), c = [
    (h = l == null ? void 0 : l.ui) == null ? void 0 : h.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    a == null ? void 0 : a.images,
    (y = a == null ? void 0 : a.ui) == null ? void 0 : y.pano_input_images,
    a == null ? void 0 : a.pano_input_images
  ];
  for (const ie of c)
    if (Array.isArray(ie))
      for (const P of ie) {
        const X = fo(P);
        if (X) return X;
      }
  let d = [];
  try {
    d = typeof ((z = cr) == null ? void 0 : z.getNodeImageUrls) == "function" ? cr.getNodeImageUrls(s) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const ie of d) {
      const P = fo(ie);
      if (P) return P;
    }
  if (s) {
    const ie = Array.isArray(s == null ? void 0 : s.imgs) ? s.imgs : [];
    for (const P of ie) {
      const X = fo(P);
      if (X) return X;
    }
  }
  const u = (T = s == null ? void 0 : s.widgets) == null ? void 0 : T.find((ie) => String((ie == null ? void 0 : ie.name) || "").toLowerCase() === "image"), f = String((u == null ? void 0 : u.value) || "").trim();
  return f ? hn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function Vc(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function Tp(e, t, r, n, i, o, s) {
  var c, d, u;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !b0(o) || r <= 1 || n <= 1) {
    Vc(t, r, n);
    return;
  }
  if (s.failed) {
    Vc(t, r, n);
    return;
  }
  const a = Number(((u = (d = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : d.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, l = s.render({
    width: r,
    height: n,
    camera: ll(i, r, n),
    background: { media: o, revision: Px(o), coverage: a },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : Vc(t, r, n);
}
function Dp(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class Ix {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = mg(() => this.requestDraw()), this.controller = ld({
      getView: () => this.view,
      setView: (n) => {
        this.view = {
          yaw: Kt(Number((n == null ? void 0 : n.yaw) || 0)),
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
            minWidth: Math.max(Nx, Number(o.minWidth || 0))
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
      return Gd(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ _o({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = kx({
        root: this.root,
        documentRef: document,
        onChange: (a) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = a), this.requestDraw();
        },
        onFallback: () => {
          var a, l;
          return (l = (a = this.options).onOpen) == null ? void 0 : l.call(a, this.node);
        }
      }), this.surfaceApp = rd(Mx, {
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
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = om(r), t.addEventListener("pointerdown", (o) => {
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
      _x(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !b0(this.img) || (this.img.paused ? this.img.play().catch(() => {
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
      return Dp(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      const o = Bk(this, r, n, i), s = t.getLegacyPreviewRect();
      if (!o || !Dp(o.x, o.y, s))
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
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - Lc * 2), r = Math.max(60, Number(((s = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : s[1]) || 0) - Ip - Lc);
    return { x: Lc, y: Ip, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), Tp(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? hg : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = wx(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, s;
    const t = Ax(this.node);
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
    const r = Cx(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), Tp(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, s, a, l, c, d, u, f, p, w, m, h, y;
    if (((r = Pg(this.node)) == null ? void 0 : r.runtime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (s = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || s.call(o), this.fullscreenController = null, (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (u = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || u.call(d), this.surfaceHost = null, this.surfaceModel = null, $r(this.node).surface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (w = (p = this.root) == null ? void 0 : p.remove) == null || w.call(p);
    } catch {
    }
    try {
      s0(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((y = (h = (m = this.node) == null ? void 0 : m.widgets) == null ? void 0 : h.find) == null ? void 0 : y.call(h, (z) => (z == null ? void 0 : z.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), $r(this.node).runtime = null;
  }
}
function Ex(e, t = {}) {
  if (!e || $r(e).runtime) return;
  const r = new Ix(e, t);
  $r(e).runtime = r, r.attach();
}
function v0(e, t, r) {
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
function Xd(e) {
  return !!(e != null && e.prototype);
}
function xs(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function Ox(e, t = {}) {
  Xd(e) || Ex(e, {
    ...t,
    onOpen: xs(e, t.onOpen)
  });
}
function Fx(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!Xd(e)) {
    Cp(e, {
      ...n,
      onOpen: xs(e, t.onOpen)
    });
    return;
  }
  v0(e, "stickers_node_preview", (i) => {
    Cp(i, {
      ...n,
      onOpen: xs(i, t.onOpen)
    });
  });
}
function Tx(e, t = {}) {
  if (!Xd(e)) {
    Ap(e, {
      ...t,
      onOpen: xs(e, t.onOpen)
    });
    return;
  }
  v0(e, "cutout_preview", (r) => {
    Ap(r, {
      ...t,
      onOpen: xs(r, t.onOpen)
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
function Rp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function Dx({ requestFrame: e, cancelFrame: t, tasks: r }) {
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
}), Rx = new Set(Object.values(pt));
function Lx({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, s = !1, a = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), d = 1, u = 0;
  function f(m) {
    try {
      m();
    } catch (h) {
      i(h);
    }
  }
  function p() {
    !o && !s && !a && (o = e(w));
  }
  function w(m) {
    o = 0, s = !0;
    try {
      const h = c;
      c = /* @__PURE__ */ new Map();
      for (const z of h.values()) f(() => z(m));
      if (a) return;
      const y = l;
      l = /* @__PURE__ */ new Set(), (y.size || n()) && f(() => r(m, y));
    } finally {
      s = !1;
    }
    (l.size || c.size || n()) && p();
  }
  return {
    requestDraw(m) {
      if (!Rx.has(m)) throw new Error(`Unknown draw reason: ${m}`);
      m === pt.STATE && (u += 1), l.add(m), p();
    },
    requestFrame(m) {
      const h = d++;
      return c.set(h, m), p(), h;
    },
    cancelFrame(m) {
      c.delete(m);
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
const Vx = { class: "pano-floating-right" }, $x = {
  key: 0,
  class: "pano-floating-space"
}, zx = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, jx = ["data-settled"], Hx = ["data-ready", "data-settled"], Gx = ["aria-label", "data-tip"], Kx = {
  key: 1,
  class: "pano-camera-preview-label"
}, Wx = {
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
    return (t, r) => (Re(), Le(Ze, null, [
      Me("div", Vx, [
        e.space ? jr((Re(), Le("div", $x, [
          Me("div", zx, [
            (Re(!0), Le(Ze, null, Mt(e.space.modes, (n) => (Re(), Rn(tn, {
              key: n.key,
              "extra-class": { active: n.key === e.space.mode },
              icon: n.icon,
              label: n.label,
              tip: n.tip,
              pressed: n.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": n.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Ye(tn, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Ri, e.space.visible]
        ]) : lt("", !0),
        (Re(!0), Le(Ze, null, Mt(e.buttons, (n) => (Re(), Rn(tn, {
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
          e.previewToggle.visible ? (Re(), Le("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Ye(zt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, Gx)) : lt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Re(), Le("div", Kx, tt(e.preview.label || "Preview unavailable"), 1)) : lt("", !0)
        ], 14, Hx)
      ], 8, jx), [
        [Ri, e.preview.visible]
      ])
    ], 64));
  }
}, Ux = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, Bx = ["y2", "transform"], Yx = ["transform"], qx = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = dt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => jr((Re(), Le("div", {
      class: mt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Re(), Le("svg", Ux, [
        o[1] || (o[1] = Me("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Re(!0), Le(Ze, null, Mt(rt(r), (s) => (Re(), Le("line", {
          key: s,
          class: mt(["pano-frame-roll-knob-tick", { zero: s === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: s % 45 === 0 ? 7 : 6,
          transform: `rotate(${s} 20 20)`
        }, null, 10, Bx))), 128)),
        Me("g", { transform: n.value }, [...o[0] || (o[0] = [
          Me("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, Yx),
        o[2] || (o[2] = Me("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Ri, e.model.visible === !0]
    ]);
  }
}, Xx = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Re(), Le("div", {
      class: mt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Ye(Xg, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Ye(tn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Ye(qx, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, Jx = ["aria-label"], Zx = { class: "pano-canvas-confirm-title" }, Qx = { class: "pano-canvas-confirm-text" }, eM = { class: "pano-canvas-confirm-actions" }, tM = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, nM = {
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
      var m;
      const u = n.value;
      if (!u) return;
      const f = u.querySelector("[data-action='confirm-accept']");
      if (f instanceof HTMLElement) {
        f.focus();
        return;
      }
      const w = o()[0] || u;
      (m = w == null ? void 0 : w.focus) == null || m.call(w);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function c(u) {
      var y;
      if (u.defaultPrevented) return;
      if (u.key === "Escape") {
        u.preventDefault(), u.stopPropagation(), s("confirm-cancel");
        return;
      }
      if (u.key !== "Tab") return;
      const f = o(), p = n.value;
      if (!f.length) {
        u.preventDefault(), (y = p == null ? void 0 : p.focus) == null || y.call(p);
        return;
      }
      const w = f[0], m = f[f.length - 1], h = document.activeElement;
      if (u.shiftKey) {
        (h === w || h === p || !(p != null && p.contains(h))) && (u.preventDefault(), m.focus());
        return;
      }
      (h === m || !(p != null && p.contains(h))) && (u.preventDefault(), w.focus());
    }
    function d(u) {
      u.target === r.value && s("confirm-cancel");
    }
    return Ei(() => t.model.visible, (u, f) => {
      if (u) {
        i = document.activeElement, El(() => {
          a();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), Cs(() => {
      l();
    }), (u, f) => e.model.visible === !0 ? (Re(), Le("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: xt(d, ["self"])
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
        Me("div", Zx, tt(e.model.title), 1),
        Me("div", Qx, tt(e.model.text), 1),
        Me("div", eM, [
          f[0] || (f[0] = Me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Me("button", tM, tt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, Jx)
    ], 512)) : lt("", !0);
  }
}, rM = ["data-paint-pane"], iM = ["hidden"], oM = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], sM = ["aria-pressed", "disabled"], aM = ["hidden"], lM = { class: "pano-paint-color-pop-head" }, cM = { class: "pano-paint-color-field" }, uM = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, dM = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, fM = { class: "pano-paint-color-field" }, pM = { class: "pano-paint-alpha-wrap" }, hM = ["value"], mM = { "data-paint-alpha-value": "" }, gM = ["hidden"], yM = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, bM = ["data-paint-history-index", "aria-label", "disabled"], vM = ["data-paint-footer"], SM = ["data-paint-group"], _M = ["hidden"], wM = ["value", "disabled"], kM = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, xM = ["hidden"], MM = {
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
    return (n, i) => (Re(), Le("div", {
      class: mt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Re(!0), Le(Ze, null, Mt(e.panes, (o) => {
        var s;
        return Re(), Le("div", {
          key: o.key,
          class: mt(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Re(), Le("div", {
            key: 0,
            class: mt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Re(!0), Le(Ze, null, Mt(e.paintSwatches, (a) => (Re(), Le("button", {
              key: a.id,
              class: mt(["pano-paint-color-dot", { active: e.state.activeSwatchId === a.id }]),
              type: "button",
              "data-paint-color-swatch": a.id,
              "aria-label": a.label,
              style: Et(t(a)),
              "aria-pressed": e.state.activeSwatchId === a.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, oM))), 128)),
            Me("button", {
              class: mt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Et({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, sM),
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
              Me("div", lM, [
                Me("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Et({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Me("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Me("div", cM, [
                Me("div", uM, [
                  Me("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Et({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Me("div", dM, [
                  Me("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Et({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Me("label", fM, [
                i[1] || (i[1] = Me("span", null, "Opacity", -1)),
                Me("div", pM, [
                  Me("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, hM),
                  Me("span", mM, tt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Me("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Me("div", yM, [
                  (Re(!0), Le(Ze, null, Mt(e.state.historyEntries || [], (a) => (Re(), Le("button", {
                    key: a.index,
                    class: mt(["pano-paint-color-history-dot", { empty: !a.color }]),
                    type: "button",
                    "data-paint-history-index": a.index,
                    "aria-label": `Recent color ${a.index + 1}`,
                    disabled: !a.color,
                    style: Et(r(a.color))
                  }, null, 14, bM))), 128))
                ])
              ], 8, gM)
            ], 12, aM)
          ], 10, iM)) : lt("", !0),
          Me("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Me("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Re(!0), Le(Ze, null, Mt(o.tools, (a) => {
                var l;
                return Re(), Rn(tn, {
                  key: `${o.key}-${a.key}`,
                  icon: a.icon,
                  label: a.label,
                  tip: a.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === a.key },
                  attrs: { [a.attr]: a.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, SM),
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
              }, null, 12, wM),
              Me("span", kM, tt(e.state.sizeText || "10"), 1)
            ], 10, _M),
            Me("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((s = e.state.clearVisible) == null ? void 0 : s[o.key]) ?? !o.clearHidden)
            }, [
              Ye(tn, {
                icon: rt(Ke).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, xM)
          ], 8, vM)
        ], 10, rM);
      }), 128))
    ], 2));
  }
}, NM = {
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
    return t({ getRefs: o }), (s, a) => (Re(), Le(Ze, null, [
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
}, PM = ["aria-label"], AM = ["data-tip", "aria-pressed"], CM = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = dt(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => (Re(), Le("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Et({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (Re(!0), Le(Ze, null, Mt(e.buttons, (o) => (Re(), Le("button", Tr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), tt(o.label), 17, AM))), 128))
    ], 12, PM));
  }
}, IM = {
  key: 0,
  class: "pano-cutout-menu"
}, EM = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, OM = ["data-aspect"], FM = ["data-action", "aria-label", "data-tip", "disabled"], TM = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Re(), Le("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Et({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Re(!0), Le(Ze, null, Mt(e.model.items || [], (n) => (Re(), Le(Ze, {
        key: n.key
      }, [
        n.kind === "aspect" ? (Re(), Le("div", IM, [
          Me("button", EM, [
            Ye(zt, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          Me("div", {
            class: mt(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Re(!0), Le(Ze, null, Mt(n.choices || [], (i) => (Re(), Le("button", {
              key: i.value,
              class: mt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, tt(i.label), 11, OM))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (Re(), Rn(CM, {
          key: 1,
          buttons: n.buttons || [],
          attr: n.attr,
          label: n.label
        }, null, 8, ["buttons", "attr", "label"])) : (Re(), Le("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": n.action,
          "aria-label": n.label,
          "data-tip": n.tip,
          disabled: n.disabled === !0
        }, [
          Ye(zt, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, FM))
      ], 64))), 128))
    ], 4));
  }
}, DM = {
  key: 0,
  class: "pano-easing"
}, RM = { class: "pano-section-title" }, LM = { class: "pano-easing-range" }, VM = { class: "pano-easing-modes" }, $M = ["aria-pressed", "onClick"], zM = ["viewBox"], jM = ["x", "y"], HM = ["x1", "y1", "x2", "y2"], GM = ["d"], KM = ["x1", "y1", "x2", "y2"], WM = ["x1", "y1", "x2", "y2"], UM = ["cx", "cy"], BM = ["cx", "cy"], YM = { class: "pano-easing-note" }, Er = 132, xi = 14, qM = {
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
    }), a = (w) => xi + w * Er, l = (w) => xi + (1 - w) * Er, c = dt(() => {
      var z;
      if (((z = r.model) == null ? void 0 : z.easing) === "hold") return `M${a(0)} ${l(0)} H${a(1)} V${l(1)}`;
      const [w, m, h, y] = s.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${a(0)} ${l(0)} C${a(w)} ${l(m)} ${a(h)} ${l(y)} ${a(1)} ${l(1)}`;
    }), d = dt(() => s.value ? s.value.map((w) => w.toFixed(2)).join(", ") : "");
    function u(w) {
      var m;
      return JSON.stringify(w.easing) === JSON.stringify((m = r.model) == null ? void 0 : m.easing);
    }
    function f(w, m) {
      n("timeline", { type: "easing", easing: w, commit: m });
    }
    function p(w, m) {
      var ie;
      if (w.button !== 0 || !s.value) return;
      const h = w.currentTarget;
      (ie = h.setPointerCapture) == null || ie.call(h, w.pointerId);
      let y = null;
      const z = (P) => {
        const X = o.value.getBoundingClientRect(), j = X.width / (Er + xi * 2), J = ((P.clientX - X.left) / j - xi) / Er, _e = 1 - ((P.clientY - X.top) / j - xi) / Er;
        y = [...y || s.value], y[m] = Math.round(Math.min(1, Math.max(0, J)) * 100) / 100, y[m + 1] = Math.round(Math.min(1, Math.max(0, _e)) * 100) / 100, f(y, !1);
      }, T = () => {
        h.removeEventListener("pointermove", z), h.removeEventListener("pointerup", T), h.removeEventListener("pointercancel", T), y && f(y, !0);
      };
      h.addEventListener("pointermove", z), h.addEventListener("pointerup", T), h.addEventListener("pointercancel", T);
    }
    return (w, m) => e.model ? (Re(), Le("div", DM, [
      Me("div", RM, [
        m[2] || (m[2] = Me("span", null, "Easing", -1)),
        Me("span", LM, tt(e.model.label), 1)
      ]),
      Me("div", VM, [
        (Re(), Le(Ze, null, Mt(i, (h) => Me("button", {
          key: h.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": u(h) ? "true" : "false",
          onClick: (y) => f(h.easing, !0)
        }, tt(h.label), 9, $M)), 64))
      ]),
      s.value || e.model.easing === "hold" ? (Re(), Le("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Er + xi * 2} ${Er + xi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Me("rect", {
          class: "pano-easing-square",
          x: a(0),
          y: l(1),
          width: Er,
          height: Er
        }, null, 8, jM),
        Me("line", {
          class: "pano-easing-diagonal",
          x1: a(0),
          y1: l(0),
          x2: a(1),
          y2: l(1)
        }, null, 8, HM),
        Me("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, GM),
        s.value ? (Re(), Le(Ze, { key: 0 }, [
          Me("line", {
            class: "pano-easing-arm",
            x1: a(0),
            y1: l(0),
            x2: a(s.value[0]),
            y2: l(s.value[1])
          }, null, 8, KM),
          Me("line", {
            class: "pano-easing-arm",
            x1: a(1),
            y1: l(1),
            x2: a(s.value[2]),
            y2: l(s.value[3])
          }, null, 8, WM),
          Me("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[0]),
            cy: l(s.value[1]),
            r: "6",
            onPointerdown: m[0] || (m[0] = (h) => p(h, 0))
          }, null, 40, UM),
          Me("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[2]),
            cy: l(s.value[3]),
            r: "6",
            onPointerdown: m[1] || (m[1] = (h) => p(h, 2))
          }, null, 40, BM)
        ], 64)) : lt("", !0)
      ], 8, zM)) : lt("", !0),
      Me("div", YM, [
        e.model.mixed ? (Re(), Le(Ze, { key: 0 }, [
          Go("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Re(), Le(Ze, { key: 1 }, [
          Go("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Re(), Le(Ze, { key: 2 }, [
          Go("Holds the value, then jumps to the next keyframe.")
        ], 64)) : s.value ? (Re(), Le(Ze, { key: 3 }, [
          Go("cubic-bezier(" + tt(d.value) + ")", 1)
        ], 64)) : lt("", !0)
      ])
    ])) : lt("", !0);
  }
}, XM = ["title"], JM = { class: "pano-ui-row" }, ZM = ["data-selected"], QM = ["aria-pressed", "disabled"], eN = ["aria-pressed", "disabled"], tN = { class: "pano-ui-row" }, nN = ["data-selected"], rN = ["aria-pressed", "disabled"], iN = ["aria-pressed", "disabled"], oN = { class: "pano-ui-row" }, sN = ["disabled"], aN = { class: "pano-upstream-lanes" }, lN = ["data-action", "data-lane", "disabled", "title"], cN = {
  __name: "PanoUpstreamOrigin",
  props: {
    model: { type: Object, default: null }
  },
  setup(e) {
    return (t, r) => e.model ? (Re(), Le("div", {
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
      ]),
      Me("div", oN, [
        r[2] || (r[2] = Me("label", null, "Revert to upstream", -1)),
        Me("button", {
          class: "pano-btn subtle",
          type: "button",
          "data-action": "revert-upstream",
          disabled: e.model.revertAll.disabled,
          title: "Revert all overrides of this element to upstream"
        }, "All", 8, sN)
      ]),
      Me("div", aN, [
        (Re(!0), Le(Ze, null, Mt(e.model.lanes, (n) => (Re(), Le("button", {
          key: n.name,
          class: "pano-btn subtle",
          type: "button",
          "data-action": n.action,
          "data-lane": n.name,
          disabled: n.disabled,
          title: `Revert ${n.label} to upstream`
        }, tt(n.label), 9, lN))), 128))
      ])
    ], 8, XM)) : lt("", !0);
  }
}, uN = {
  class: "pano-side",
  "data-side": ""
}, dN = { class: "pano-side-head" }, fN = { class: "pano-side-title" }, pN = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, hN = {
  key: 0,
  class: "pano-side-scroll"
}, mN = { class: "pano-inspector" }, gN = { class: "pano-ui-row pano-coverage-row" }, yN = ["data-selected"], bN = ["aria-pressed", "disabled"], vN = ["aria-pressed", "disabled"], SN = {
  key: 0,
  class: "pano-section-title"
}, _N = { class: "meta" }, wN = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, kN = {
  class: "pano-picker",
  "data-picker": "selection"
}, xN = ["disabled"], MN = { class: "pano-picker-label" }, NN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, PN = ["hidden"], AN = ["data-selection-id"], CN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, IN = {
  key: 2,
  class: "pano-state-actions"
}, EN = ["disabled"], ON = ["data-key"], FN = { class: "pano-field-group-values" }, TN = ["title", "onPointerdown"], DN = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], RN = ["data-key"], LN = ["min", "max", "step", "value", "disabled", "data-param-key"], VN = ["min", "max", "step", "value", "disabled", "data-param-key"], $N = ["open"], zN = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, jN = { class: "pano-ui-settings-body" }, HN = { class: "pano-ui-row" }, GN = ["data-selected"], KN = ["aria-pressed"], WN = ["aria-pressed"], UN = { class: "pano-ui-row" }, BN = ["data-selected"], YN = ["aria-pressed"], qN = ["aria-pressed"], XN = {
  key: 1,
  class: "pano-side-footer"
}, JN = ["data-action"], ZN = {
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
      let m = !1;
      f.setPointerCapture(c.pointerId);
      const h = (z) => {
        if (!m && Math.abs(z.clientX - p) < 3) return;
        m = !0;
        const T = w + (z.clientX - p) * d.drag * (z.shiftKey ? 0.1 : 1);
        u.value = String(Number(T.toFixed(3))), u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, y = () => {
        f.removeEventListener("pointermove", h), f.removeEventListener("pointerup", y), f.removeEventListener("pointercancel", y), f.removeEventListener("lostpointercapture", y), m ? u.dispatchEvent(new Event("change", { bubbles: !0 })) : u.focus();
      };
      f.addEventListener("pointermove", h), f.addEventListener("pointerup", y), f.addEventListener("pointercancel", y), f.addEventListener("lostpointercapture", y);
    }
    return (c, d) => {
      var u, f, p, w, m, h;
      return Re(), Le("div", uN, [
        Me("div", dN, [
          Me("div", fN, [
            Me("span", pN, [
              Ye(zt, {
                icon: rt(Ke).globe
              }, null, 8, ["icon"])
            ]),
            Me("span", null, tt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = Me("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = Me("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Re(), Le("div", hN, [
          Me("div", mN, [
            d[9] || (d[9] = Me("div", { class: "pano-section-title" }, [
              Me("span", null, "Scene")
            ], -1)),
            Me("div", gN, [
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
                }, "360", 8, bN),
                Me("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((w = e.model.coverage) == null ? void 0 : w.value) === 180 ? "true" : "false",
                  disabled: ((m = e.model.coverage) == null ? void 0 : m.disabled) === !0
                }, "180", 8, vN)
              ], 8, yN)
            ]),
            e.model.transformTitle !== !1 ? (Re(), Le("div", SN, [
              d[3] || (d[3] = Me("span", null, "Transform", -1)),
              Me("span", _N, tt(((h = e.model.upstream) == null ? void 0 : h.origin) || ""), 1)
            ])) : lt("", !0),
            e.model.selectionPicker ? (Re(), Le("div", wN, [
              Me("label", null, tt(e.model.selectionPicker.label), 1),
              Me("div", kN, [
                Me("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Me("span", MN, [
                    e.model.selectionPicker.currentIcon ? (Re(), Le("span", NN, [
                      Ye(zt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : lt("", !0),
                    Me("span", null, tt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = Me("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, xN),
                Me("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Re(!0), Le(Ze, null, Mt(e.model.selectionPicker.items || [], (y) => (Re(), Le("button", {
                    key: y.id,
                    type: "button",
                    class: mt(["pano-picker-item", { active: y.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": y.id
                  }, [
                    y.icon ? (Re(), Le("span", CN, [
                      Ye(zt, {
                        icon: y.icon
                      }, null, 8, ["icon"])
                    ])) : lt("", !0),
                    Me("span", null, tt(y.label), 1)
                  ], 10, AN))), 128))
                ], 8, PN)
              ])
            ])) : lt("", !0),
            e.model.copyStateButton ? (Re(), Le("div", IN, [
              Me("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Ye(zt, {
                  icon: rt(Ke).copy
                }, null, 8, ["icon"]),
                Me("span", null, tt(e.model.copyStateButton.label), 1)
              ], 8, EN)
            ])) : lt("", !0),
            Me("div", {
              class: mt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Re(!0), Le(Ze, { key: 0 }, Mt(e.model.notes, (y) => (Re(), Le("div", {
                key: y,
                class: "pano-param-note"
              }, tt(y), 1))), 128)) : (Re(!0), Le(Ze, { key: 1 }, Mt(e.model.rows || [], (y) => (Re(), Le(Ze, {
                key: y.key
              }, [
                y.grouped ? (Re(), Le("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": y.key
                }, [
                  Me("label", null, tt(y.label), 1),
                  Me("div", FN, [
                    (Re(!0), Le(Ze, null, Mt(y.fields, (z) => (Re(), Le("div", {
                      key: z.key,
                      class: "pano-axis-field"
                    }, [
                      Me("span", {
                        class: mt(["pano-axis", { disabled: s(z, e.model) }]),
                        title: z.label,
                        onPointerdown: (T) => l(T, z)
                      }, tt(z.short), 43, TN),
                      Me("input", {
                        ref_for: !0,
                        ref: (T) => {
                          a[z.key] = T;
                        },
                        type: "number",
                        min: z.min,
                        max: z.max,
                        step: z.step,
                        value: z.displayValue,
                        disabled: s(z, e.model),
                        "aria-label": `${y.label} ${z.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": z.key
                      }, null, 8, DN)
                    ]))), 128))
                  ])
                ], 8, ON)) : (Re(), Le("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": y.key
                }, [
                  Me("label", null, tt(y.label), 1),
                  Me("input", {
                    type: "range",
                    min: y.fields[0].min,
                    max: y.fields[0].max,
                    step: y.fields[0].step,
                    value: y.fields[0].value,
                    disabled: s(y.fields[0], e.model),
                    style: Et(o(y.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": y.fields[0].key
                  }, null, 12, LN),
                  Me("input", {
                    type: "number",
                    min: y.fields[0].min,
                    max: y.fields[0].max,
                    step: y.fields[0].step,
                    value: y.fields[0].displayValue,
                    disabled: s(y.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": y.fields[0].key
                  }, null, 8, VN)
                ], 8, RN))
              ], 64))), 128))
            ], 2),
            Ye(cN, {
              model: e.model.upstream
            }, null, 8, ["model"]),
            Ye(qM, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (y) => n("timeline", y))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Re(), Le("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Me("summary", null, [
                d[5] || (d[5] = Me("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Me("span", zN, [
                  Ye(zt, {
                    icon: rt(Ke).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Me("div", jN, [
                Me("div", HN, [
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
                    }, "Normal", 8, KN),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, WN)
                  ], 8, GN)
                ]),
                Me("div", UN, [
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
                    }, "Normal", 8, YN),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, qN)
                  ], 8, BN)
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
            ], 8, $N)) : lt("", !0)
          ])
        ])) : lt("", !0),
        (e.model.footerButtons || []).length ? (Re(), Le("div", XN, [
          (Re(!0), Le(Ze, null, Mt(e.model.footerButtons, (y) => (Re(), Le("button", {
            key: y.action,
            class: mt(["pano-btn", { "pano-btn-primary": y.primary === !0 }]),
            type: "button",
            "data-action": y.action
          }, tt(y.label), 11, JN))), 128))
        ])) : lt("", !0)
      ]);
    };
  }
}, QN = { class: "pano-timeline-group" }, eP = ["title"], tP = ["disabled"], nP = ["disabled"], rP = {
  __name: "PanoTimelineGroup",
  props: {
    group: { type: Object, required: !0 }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = t;
    return (n, i) => (Re(), Le("div", QN, [
      Me("span", {
        class: "pano-timeline-group-label",
        title: e.group.label
      }, tt(e.group.label), 9, eP),
      Me("button", {
        class: "pano-timeline-group-action",
        type: "button",
        disabled: e.group.revert.disabled,
        title: "Revert the scene and paint of this layer to upstream",
        onClick: i[0] || (i[0] = xt((o) => r("action", { type: "revert-upstream-layer", key: e.group.key }), ["stop"]))
      }, "Revert", 8, tP),
      Me("button", {
        class: "pano-timeline-group-action is-restore",
        type: "button",
        disabled: e.group.restore.disabled,
        title: "Show the elements of this layer deleted here again",
        onClick: i[1] || (i[1] = xt((o) => r("action", { type: "restore-upstream-deleted", key: e.group.key }), ["stop"]))
      }, tt(e.group.restore.label), 9, nP)
    ]));
  }
}, iP = { class: "pano-timeline-bar" }, oP = ["aria-label", "data-tip"], sP = ["aria-label", "data-tip"], aP = { class: "pano-timeline-time" }, lP = ["data-tip"], cP = { key: 0 }, uP = ["min", "max", "value"], dP = {
  class: "pano-timeline-setting",
  "data-tip": "Output length in frames; empty follows the inputs"
}, fP = ["max", "value"], pP = ["aria-expanded"], hP = ["inert"], mP = { class: "pano-timeline-name" }, gP = ["aria-pressed", "disabled", "aria-label", "data-tip", "onClick"], yP = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, bP = ["disabled", "aria-expanded", "aria-label", "onClick"], vP = ["title", "aria-current", "onClick"], SP = ["role", "aria-label", "data-tip"], _P = ["disabled", "data-keyed", "aria-label", "onClick"], wP = ["onPointerdown"], kP = ["onPointerdown"], xP = ["onPointerdown"], MP = ["onPointerdown"], NP = ["aria-label", "data-tip", "onPointerdown"], PP = { key: 0 }, AP = ["onPointerdown"], CP = ["aria-label", "data-tip", "onPointerdown"], IP = { key: 0 }, EP = 10, OP = {
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
      c = new ResizeObserver(([ae]) => {
        s.value = Math.max(1, ae.contentRect.width);
      }), i.value && c.observe(i.value), d = new ResizeObserver(([ae]) => {
        a.value = ae.contentRect.height;
      }), o.value && d.observe(o.value);
    }), Cs(() => {
      c == null || c.disconnect(), d == null || d.disconnect(), u == null || u();
    });
    const f = dt(() => Math.max(1, Number(r.model.span || 1))), p = dt(() => r.playhead.frame.value), w = dt(() => r.playhead.playing.value), m = dt(() => W1(p.value, Number(r.model.fps || 1))), h = dt(() => s.value / f.value), y = (ae) => `${ae / f.value * 100}%`, z = dt(() => iS(f.value, h.value));
    function T(ae) {
      const fe = i.value.getBoundingClientRect(), $ = Math.floor((ae - fe.left) / Math.max(1, fe.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, $));
    }
    function ie(ae, fe, $) {
      const A = Math.ceil(EP / Math.max(1e-6, h.value)), D = new Map(fe.map((ee) => [ee.frame, ee.full]));
      return oS(fe.map((ee) => ee.frame), A).map((ee, se) => ({
        ...ee,
        key: `${ae}:${se}`,
        partial: ee.frames.some((U) => !D.get(U)),
        selected: ee.frames.some((U) => $.includes(U))
      }));
    }
    const P = dt(() => [
      ...(r.model.rows || []).map((ae) => ({ key: ae.id, row: ae })),
      ...(r.model.groups || []).flatMap((ae) => [
        { key: `group:${ae.key}`, group: ae },
        ...ae.rows.map((fe) => ({ key: fe.id, row: fe }))
      ])
    ]), X = dt(() => {
      const ae = /* @__PURE__ */ new Map();
      for (const { row: fe } of P.value)
        if (fe) {
          ae.set(fe.id, ie(fe.id, fe.keys, fe.selectedFrames));
          for (const $ of fe.lanes) ae.set($.key, ie($.key, $.frames.map((A) => ({ frame: A, full: !0 })), $.selectedFrames));
        }
      return ae;
    });
    function j(ae) {
      const fe = ae.end === null ? f.value : ae.end;
      return { left: y(ae.start), width: y(Math.max(0, fe - ae.start)) };
    }
    function J(ae, fe) {
      const $ = ae.clientX, A = Math.max(1e-6, h.value);
      let D = 0;
      fe("start", 0, ae);
      const ee = (U) => {
        if (U.pointerId !== ae.pointerId) return;
        const b = Math.round((U.clientX - $) / A);
        b !== D && (D = b, fe("move", D, U));
      }, se = (U) => {
        U.pointerId === ae.pointerId && (u(), fe("end", D, U));
      };
      u == null || u(), u = () => {
        window.removeEventListener("pointermove", ee), window.removeEventListener("pointerup", se), window.removeEventListener("pointercancel", se), u = null;
      }, window.addEventListener("pointermove", ee), window.addEventListener("pointerup", se), window.addEventListener("pointercancel", se);
    }
    function _e(ae) {
      ae.button === 0 && J(ae, (fe, $, A) => n("action", { type: "seek", frame: T(A.clientX), phase: fe }));
    }
    function ke(ae, fe, $) {
      ae.button === 0 && (n("action", { type: "select-row", id: fe.id }), J(ae, (A, D) => n("action", { type: "clip", id: fe.id, mode: $, delta: D, phase: A })));
    }
    function ge(ae, fe, $, A, D) {
      if (ae.button === 0) {
        if (ae.shiftKey) {
          n("action", { type: "select-keys", owner: fe.id, lane: $, frames: A.frames, additive: !0 });
          return;
        }
        A.frames.every((ee) => D.includes(ee)) || n("action", { type: "select-keys", owner: fe.id, lane: $, frames: A.frames, additive: !1 }), J(ae, (ee, se) => n("action", { type: "move-keys", delta: se, phase: ee }));
      }
    }
    const ve = dt(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function he(ae, fe, $) {
      n("action", fe), await El(), ae.target.value = $();
    }
    function Se(ae) {
      he(ae, { type: "fps", fps: Number(ae.target.value) }, () => ve.value);
    }
    function pe(ae) {
      const fe = ae.target.value.trim();
      he(ae, { type: "length", length: fe ? Number(fe) : null }, () => r.model.length ?? "");
    }
    function ne(ae, fe, $) {
      ae.button !== 0 || ae.target !== ae.currentTarget || n("action", { type: "select-keys", owner: fe.id, lane: $, frames: [], additive: !1 });
    }
    return (ae, fe) => jr((Re(), Le("section", {
      class: mt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Me("div", iP, [
        Me("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": w.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": w.value ? "Pause (Space)" : "Play (Space)",
          onClick: fe[0] || (fe[0] = ($) => n("action", { type: "play" }))
        }, [
          Ye(zt, {
            icon: w.value ? rt(Ke).pause : rt(Ke).play
          }, null, 8, ["icon"])
        ], 8, oP),
        e.model.hasAudio ? (Re(), Le("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: fe[1] || (fe[1] = ($) => n("action", { type: "mute" }))
        }, [
          Ye(zt, {
            icon: e.model.muted ? rt(Ke).volume_muted : rt(Ke).volume2
          }, null, 8, ["icon"])
        ], 8, sP)) : lt("", !0),
        Me("span", aP, tt(m.value), 1),
        Me("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Re(), Le("span", cP, tt(ve.value), 1)) : (Re(), Le("input", {
            key: 1,
            type: "number",
            min: rt(_m),
            max: rt(hd),
            step: "any",
            value: ve.value,
            "aria-label": "Timeline fps",
            onChange: Se
          }, null, 40, uP)),
          fe[7] || (fe[7] = Me("span", null, "fps", -1))
        ], 8, lP),
        Me("label", dP, [
          fe[8] || (fe[8] = Me("span", null, "Length", -1)),
          Me("input", {
            type: "number",
            min: "1",
            max: rt(md),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: pe
          }, null, 40, fP)
        ]),
        Me("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: fe[2] || (fe[2] = ($) => n("action", { type: "toggle-expanded" }))
        }, [
          fe[9] || (fe[9] = Me("span", null, "Timeline", -1)),
          Ye(zt, {
            icon: rt(Ke).chevron
          }, null, 8, ["icon"])
        ], 8, pP)
      ]),
      Me("div", {
        class: mt(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: Et({ "--pano-timeline-rows": `${a.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: fe[4] || (fe[4] = xt(($) => l.value = !0, ["self"])),
        onTransitionend: fe[5] || (fe[5] = xt(($) => l.value = !1, ["self"])),
        onTransitioncancel: fe[6] || (fe[6] = xt(($) => l.value = !1, ["self"]))
      }, [
        Me("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          fe[10] || (fe[10] = Me("div", { class: "pano-timeline-corner" }, null, -1)),
          Me("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: _e
          }, [
            (Re(!0), Le(Ze, null, Mt(z.value, ($) => (Re(), Le("span", {
              key: $,
              class: "pano-timeline-tick",
              style: Et({ left: y($) })
            }, tt($), 5))), 128)),
            Me("span", {
              class: "pano-timeline-playhead",
              style: Et({ left: y(p.value + 0.5) })
            }, null, 4)
          ], 544),
          (Re(!0), Le(Ze, null, Mt(P.value, ({ key: $, row: A, group: D }) => (Re(), Le(Ze, { key: $ }, [
            D ? (Re(), Rn(rP, {
              key: 0,
              group: D,
              onAction: fe[3] || (fe[3] = (ee) => n("action", ee))
            }, null, 8, ["group"])) : lt("", !0),
            A ? (Re(), Le("div", {
              key: 1,
              class: mt(["pano-timeline-head", { selected: A.selected, "is-hidden": !A.visible }])
            }, [
              Me("div", mP, [
                A.hideable ? (Re(), Le("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": A.visible ? "true" : "false",
                  disabled: !A.editable,
                  "aria-label": `${A.label} visible`,
                  "data-tip": A.editable ? A.visible ? "Hide" : "Show" : "Inherited only: this node keeps no overrides of it",
                  onClick: xt((ee) => n("action", { type: "toggle-visible", id: A.id }), ["stop"])
                }, [
                  Ye(zt, {
                    icon: A.visible ? rt(Ke).eye : rt(Ke).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, gP)) : (Re(), Le("span", yP)),
                Me("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !A.keyable,
                  "aria-expanded": A.open ? "true" : "false",
                  "aria-label": A.open ? `Hide ${A.label} parameters` : `Show ${A.label} parameters`,
                  onClick: xt((ee) => n("action", { type: "toggle-row", id: A.id }), ["stop"])
                }, [
                  Ye(zt, {
                    icon: rt(Ke).chevron
                  }, null, 8, ["icon"])
                ], 8, bP),
                Me("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: A.label,
                  "aria-current": A.selected ? "true" : void 0,
                  onClick: (ee) => n("action", { type: "select-row", id: A.id })
                }, [
                  Ye(zt, {
                    icon: A.icon
                  }, null, 8, ["icon"]),
                  Me("span", null, tt(A.label), 1)
                ], 8, vP),
                A.upstream ? (Re(), Le("span", {
                  key: 2,
                  class: mt(["pano-timeline-override", { on: A.overridden }]),
                  role: A.overridden ? "img" : void 0,
                  "aria-label": A.overridden ? "Overridden in this node" : void 0,
                  "data-tip": A.overridden ? "Overridden in this node" : null
                }, null, 10, SP)) : lt("", !0),
                A.keyable ? (Re(), Le("button", {
                  key: 3,
                  class: mt(["pano-timeline-key", { keyed: rt(Nc)(A.keys, p.value) }]),
                  type: "button",
                  disabled: !A.editable,
                  "data-keyed": rt(Nc)(A.keys, p.value) ? "true" : "false",
                  "aria-label": rt(Nc)(A.keys, p.value) ? `Every ${A.label} parameter has a keyframe here; update them` : `Add keyframes for every ${A.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: xt((ee) => n("action", { type: "key-row", owner: A.id }), ["stop"])
                }, [
                  Ye(zt, {
                    icon: rt(Ke).keyframe
                  }, null, 8, ["icon"])
                ], 10, _P)) : lt("", !0)
              ]),
              A.open ? (Re(!0), Le(Ze, { key: 0 }, Mt(A.lanes, (ee) => (Re(), Le("div", {
                key: ee.key,
                class: "pano-timeline-lane-head"
              }, tt(ee.label), 1))), 128)) : lt("", !0)
            ], 2)) : lt("", !0),
            A ? (Re(), Le("div", {
              key: 2,
              class: mt(["pano-timeline-track", { selected: A.selected }])
            }, [
              Me("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (ee) => ne(ee, A, null)
              }, [
                A.clip ? (Re(), Le("div", {
                  key: 0,
                  class: mt(["pano-timeline-clip", { open: A.clip.end === null }]),
                  style: Et(j(A.clip)),
                  onPointerdown: xt((ee) => ke(ee, A, "move"), ["stop"])
                }, [
                  Me("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: xt((ee) => ke(ee, A, "start"), ["stop"])
                  }, null, 40, xP),
                  Me("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: xt((ee) => ke(ee, A, "end"), ["stop"])
                  }, null, 40, MP)
                ], 46, kP)) : lt("", !0),
                (Re(!0), Le(Ze, null, Mt(X.value.get(A.id), (ee) => (Re(), Le("button", {
                  key: ee.key,
                  type: "button",
                  class: mt(["pano-timeline-pin", { selected: ee.selected, cluster: ee.frames.length > 1, partial: ee.partial }]),
                  style: Et({ left: y(ee.frame + 0.5) }),
                  "aria-label": `${A.label}: ${ee.frames.length > 1 ? `${ee.frames.length} keyframes` : `keyframe at frame ${ee.frames[0]}`}`,
                  "data-tip": ee.frames.length > 1 ? `${ee.frames.length} keyframes` : `Frame ${ee.frames[0]}`,
                  onPointerdown: xt((se) => ge(se, A, null, ee, A.selectedFrames), ["stop"])
                }, [
                  ee.frames.length > 1 ? (Re(), Le("span", PP, tt(ee.frames.length), 1)) : lt("", !0)
                ], 46, NP))), 128))
              ], 40, wP),
              A.open ? (Re(!0), Le(Ze, { key: 0 }, Mt(A.lanes, (ee) => (Re(), Le("div", {
                key: ee.key,
                class: "pano-timeline-lane",
                onPointerdown: (se) => ne(se, A, ee.lane)
              }, [
                (Re(!0), Le(Ze, null, Mt(X.value.get(ee.key), (se) => (Re(), Le("button", {
                  key: se.key,
                  type: "button",
                  class: mt(["pano-timeline-pin", { selected: se.selected, cluster: se.frames.length > 1 }]),
                  style: Et({ left: y(se.frame + 0.5) }),
                  "aria-label": `${ee.label}: ${se.frames.length > 1 ? `${se.frames.length} keyframes` : `keyframe at frame ${se.frames[0]}`}`,
                  "data-tip": se.frames.length > 1 ? `${se.frames.length} keyframes` : `Frame ${se.frames[0]}`,
                  onPointerdown: xt((U) => ge(U, A, ee.lane, se, ee.selectedFrames), ["stop"])
                }, [
                  se.frames.length > 1 ? (Re(), Le("span", IP, tt(se.frames.length), 1)) : lt("", !0)
                ], 46, CP))), 128))
              ], 40, AP))), 128)) : lt("", !0),
              Me("span", {
                class: "pano-timeline-playhead",
                style: Et({ left: y(p.value + 0.5) })
              }, null, 4)
            ], 2)) : lt("", !0)
          ], 64))), 128))
        ], 512)
      ], 46, hP)
    ], 2)), [
      [Ri, e.model.visible]
    ]);
  }
}, FP = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Re(), Le("div", {
      class: mt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Et({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, tt(e.model.text || ""), 7));
  }
}, TP = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, DP = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Re(), Le("div", TP, [
      (Re(!0), Le(Ze, null, Mt(e.buttons, (n) => jr((Re(), Rn(tn, {
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
        [Ri, n.visible !== !1]
      ])), 128))
    ]));
  }
}, RP = ["data-video-ready"], LP = { class: "pano-video-transport-shell" }, VP = { class: "pano-video-controls-left" }, $P = { class: "pano-video-filmstrip" }, zP = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, jP = ["src", "onLoad"], HP = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, GP = ["max", "value", "disabled"], KP = { class: "pano-video-controls-right" }, WP = ["data-has-audio"], UP = { class: "pano-video-volume-pop" }, BP = ["value", "disabled"], YP = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = dt(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.playing) === !0 ? "Pause" : "Play";
    }), n = dt(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.playing) === !0 ? "Pause video" : "Play video";
    }), i = dt(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.playing) === !0 ? Ke.pause : Ke.play;
    }), o = dt(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.loop) === !1 ? "Enable loop" : "Disable loop";
    }), s = dt(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), a = dt(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.loop) === !1 ? Ke.loop_off : Ke.loop;
    }), l = dt(() => {
      var P, X;
      return ((P = t.state) == null ? void 0 : P.muted) === !0 || Number(((X = t.state) == null ? void 0 : X.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = dt(() => {
      var P, X, j;
      return ((P = t.state) == null ? void 0 : P.hasAudio) !== !0 ? Ke.volume : ((X = t.state) == null ? void 0 : X.muted) === !0 || Number(((j = t.state) == null ? void 0 : j.volume) ?? 1) <= 0 ? Ke.volume_muted : Ke.volume2;
    }), d = dt(() => {
      var P;
      return Math.max(0, Math.min(100, Number(((P = t.state) == null ? void 0 : P.progressPct) || 0)));
    }), u = dt(() => ({ left: `${d.value}%` })), f = dt(() => {
      var J, _e;
      const P = (J = t.state) == null ? void 0 : J.volumePct, X = Number(((_e = t.state) == null ? void 0 : _e.volume) ?? 1) * 100, j = Number(P ?? X ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, j))}%`
      };
    }), p = dt(() => {
      var j, J;
      const X = [
        String(((j = t.state) == null ? void 0 : j.currentTimeLabel) || "0:00"),
        String(((J = t.state) == null ? void 0 : J.durationLabel) || "0:00")
      ].reduce((_e, ke) => Math.max(_e, ke.length), 4);
      return `${Math.max(4, X)}ch`;
    }), w = dt(() => ({ "--pano-video-time-ch": p.value })), m = dt(() => {
      var j, J;
      const P = Array.isArray((j = t.state) == null ? void 0 : j.thumbnails) ? t.state.thumbnails : [];
      if (P.length) return P;
      const X = Math.max(7, Number(((J = t.state) == null ? void 0 : J.thumbnailCount) || 9));
      return Array.from({ length: X }, (_e, ke) => ({
        id: `placeholder-${ke}`,
        src: "",
        label: ""
      }));
    }), h = /* @__PURE__ */ Jt(/* @__PURE__ */ new Set()), y = (P) => String((P == null ? void 0 : P.id) || (P == null ? void 0 : P.src) || (P == null ? void 0 : P.label) || ""), z = (P) => h.value.has(y(P)), T = (P) => {
      const X = new Set(h.value);
      X.add(y(P)), h.value = X;
    };
    Ei(m, (P) => {
      const X = new Set(P.map(y)), j = /* @__PURE__ */ new Set();
      for (const J of h.value)
        X.has(J) && j.add(J);
      h.value = j;
    }, { immediate: !0 });
    const ie = dt(() => {
      var P;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((P = t.state) == null ? void 0 : P.shellMaxWidthPx) || 640))}px`
      };
    });
    return (P, X) => (Re(), Le("div", {
      class: mt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Et(ie.value)
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
      Me("div", LP, [
        Me("div", VP, [
          Ye(tn, {
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
          }, tt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Me("div", $P, [
          Me("div", zP, [
            (Re(!0), Le(Ze, null, Mt(m.value, (j) => (Re(), Le("div", {
              key: y(j),
              class: mt(["pano-video-thumb", {
                "is-placeholder": !j.src,
                "is-loaded": j.src && z(j)
              }])
            }, [
              j.src ? (Re(), Le("img", {
                key: 0,
                src: j.src,
                alt: "",
                draggable: "false",
                onLoad: (J) => T(j)
              }, null, 40, jP)) : (Re(), Le("span", HP))
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
          }, null, 8, GP)
        ]),
        Me("div", KP, [
          Me("div", {
            class: "pano-video-time pano-video-time-end",
            style: Et(w.value)
          }, tt(e.state.durationLabel || "0:00"), 5),
          Ye(tn, {
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
            Me("div", UP, [
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
              }, null, 12, BP)
            ]),
            Ye(tn, {
              "extra-class": "pano-video-control",
              icon: c.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, WP)
        ])
      ])
    ], 14, RP));
  }
}, qP = { class: "pano-floating-top" }, XP = ["data-selected", "data-view-count"], JP = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], ZP = { class: "label" }, QP = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return Re(), Le("div", qP, [
        Me("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Re(!0), Le(Ze, null, Mt(e.buttons, (i) => jr((Re(), Le("button", {
            key: i.key,
            class: mt(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Ye(zt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            Me("span", ZP, tt(i.label), 1)
          ], 10, JP)), [
            [Ri, i.visible !== !1]
          ])), 128))
        ], 8, XP)
      ]);
    };
  }
};
function S0(e = "stickers") {
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
const e2 = ["aria-label"], t2 = { class: "pano-stage-column" }, n2 = { class: "pano-stage-wrap" }, r2 = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, i2 = {
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
      var ge, ve;
      return ((ve = (ge = d.value) == null ? void 0 : ge.getRefs) == null ? void 0 : ve.call(ge)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(ge) {
      var ve, he;
      return ((he = (ve = c.value) == null ? void 0 : ve.open) == null ? void 0 : he.call(ve, ge)) === !0;
    }
    function p(ge) {
      i("image-file-selected", ge);
    }
    function w(ge) {
      i("image-file-cancelled", ge);
    }
    t({ getPaintOverlayRefs: u, openImagePicker: f });
    const m = dt(() => n.readOnly === !0), h = dt(() => n.shellPreset || S0(n.type)), y = dt(() => {
      var ve, he, Se;
      const ge = String((((ve = n.uiState) == null ? void 0 : ve.stageStatus) === "failed" ? (he = n.uiState) == null ? void 0 : he.stageStatusDetail : (Se = n.uiState) == null ? void 0 : Se.stageWarningDetail) ?? "");
      return ge === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : ge === "stickers" ? "One or more sticker previews are unavailable." : ge === "frame" ? "The editor hit a rendering error. Check the browser console for details." : ge === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : ge.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), z = dt(() => {
      var ge, ve, he;
      return ((ge = n.uiState) == null ? void 0 : ge.stageStatus) === "failed" || (ve = n.uiState) != null && ve.stageWarningDetail ? y.value : (he = n.uiState) == null ? void 0 : he.stageNotice;
    }), T = dt(() => {
      var ve;
      const ge = Array.isArray((ve = h.value) == null ? void 0 : ve.floatingButtons) ? h.value.floatingButtons.slice() : [];
      return m.value && ge.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ke.fullscreen
      }), ge;
    });
    function ie() {
      const ge = l.value;
      return ge ? Array.from(ge.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((ve) => ve instanceof HTMLElement ? !ve.hidden && ve.tabIndex >= 0 && ve.offsetParent !== null : !1) : [];
    }
    function P() {
      var he;
      const ve = ie()[0] || l.value;
      (he = ve == null ? void 0 : ve.focus) == null || he.call(ve);
    }
    function X() {
      var ge;
      a != null && a.isConnected && ((ge = a.focus) == null || ge.call(a)), a = null;
    }
    function j(ge) {
      var ve, he, Se, pe;
      if (!ge.defaultPrevented) {
        if (ge.key === "Tab") {
          const ne = ie();
          if (!ne.length) {
            ge.preventDefault(), (he = (ve = l.value) == null ? void 0 : ve.focus) == null || he.call(ve);
            return;
          }
          const ae = ne[0], fe = ne[ne.length - 1], $ = document.activeElement;
          if (ge.shiftKey) {
            ($ === ae || $ === l.value || !((Se = l.value) != null && Se.contains($))) && (ge.preventDefault(), fe.focus());
            return;
          }
          ($ === fe || !((pe = l.value) != null && pe.contains($))) && (ge.preventDefault(), ae.focus());
          return;
        }
        ge.key === "Escape" && i("close");
      }
    }
    function J() {
      s || (o = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function _e() {
      s && (document.body.style.overflow = o, s = !1);
    }
    function ke(ge) {
      document.removeEventListener("keydown", j), ge ? (a || (a = document.activeElement), J(), document.addEventListener("keydown", j), El(() => {
        P();
      })) : (_e(), X());
    }
    return Fl(() => {
      ke(n.open);
    }), Cs(() => {
      _e(), document.removeEventListener("keydown", j), X();
    }), Ei(() => n.open, (ge) => {
      ke(ge);
    }), (ge, ve) => e.open ? (Re(), Le("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: ve[2] || (ve[2] = xt((he) => i("close"), ["self"]))
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
        Me("div", t2, [
          Me("div", n2, [
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
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Re(), Le("div", r2, tt(z.value), 1)) : lt("", !0),
            ve[6] || (ve[6] = Me("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Me("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Ye(NM, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            Ye(Jg, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: p,
              onFileCancelled: w
            }, null, 512),
            m.value ? lt("", !0) : (Re(), Le(Ze, { key: 1 }, [
              Ye(DP, {
                buttons: e.uiState.toolButtons || h.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Ye(Xx, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Ye(MM, {
                "paint-swatches": e.paintSwatches,
                panes: h.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Ye(YP, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Ye(QP, {
              buttons: e.uiState.viewButtons || h.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Ye(Wx, {
              buttons: e.uiState.floatingButtons || T.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Ye(TM, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Ye(FP, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Ye(nM, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Ye(OP, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: ve[0] || (ve[0] = (he) => i("timeline", he))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? lt("", !0) : (Re(), Rn(ZN, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: ve[1] || (ve[1] = (he) => i("timeline", he))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, e2)
    ])) : lt("", !0);
  }
}, sr = "loading", Ms = "ready", Jn = "failed";
function _0(e, t = "") {
  return e && (e.__panoLoadState = sr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function w0(e, t = "") {
  return e && (e.__panoLoadState = Ms, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function k0(e, t = "") {
  return e && (e.__panoLoadState = Jn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Ou(e, t) {
  return e ? e.__panoLoadState === Jn ? Jn : typeof t == "function" && t(e) ? Ms : sr : Ms;
}
function Fu(e) {
  return Ou(e) === Jn;
}
function o2({ presented: e, background: t = Ms, stickers: r = [] } = {}) {
  if (!e) return { status: sr, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === sr, o = n.includes(sr);
  if (i && o) return { status: sr, detail: "mixed" };
  if (i) return { status: sr, detail: "background" };
  if (o) return { status: sr, detail: "stickers" };
  const s = t === Jn, a = n.includes(Jn);
  return s && a ? { status: Jn, detail: "mixed" } : s ? { status: Jn, detail: "background" } : a ? { status: Jn, detail: "stickers" } : { status: Ms, detail: "" };
}
const s2 = "state_json", a2 = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Jd = "sticker_image_1", l2 = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), x0 = 0.01, c2 = "external_image", Di = "pano_sticker_input_images", M0 = "pano_sticker_input_videos", N0 = "pano_sticker_input_frames", Tu = "pano_sticker_input_video_meta", u2 = !0, Xl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Nr = Math.PI / 180, Vi = 180 / Math.PI, Du = 1, P0 = "rgb(255, 221, 87)", d2 = "rgb(228, 228, 231)", f2 = "rgb(180, 150, 60)", p2 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, h2 = 64, Lp = 40, $c = 16, m2 = 0.45, Vp = 180, g2 = 160, Sl = 24, y2 = 4, b2 = 4;
function zc(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function v2(e) {
  return 1 - Math.pow(1 - e, 3);
}
function S2(e, t, r) {
  const n = Oe((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function _2(e) {
  return e * e * e;
}
function Jl(e, t, r) {
  return { x: e, y: t, z: r };
}
function $p(e, t) {
  return Jl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function zp(e, t) {
  return Jl(e.x * t, e.y * t, e.z * t);
}
function jc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function w2(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Jl(e.x / t, e.y / t, e.z / t);
}
function ha(e) {
  return {
    yaw: Kt(Math.atan2(e.x, e.z) * Vi),
    pitch: Oe(Math.asin(Oe(e.y, -1, 1)) * Vi, -90, 90)
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
function Hc(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), s = Number(e.y || 0) - Number(t.y || 0), a = n * n + i * i;
  if (a <= 1e-6) return qo(e, t);
  const l = Oe((o * n + s * i) / a, 0, 1), c = Number(t.x || 0) + n * l, d = Number(t.y || 0) + i * l, u = Number(e.x || 0) - c, f = Number(e.y || 0) - d;
  return u * u + f * f;
}
function qn(e, t, r) {
  return e + (t - e) * r;
}
function Sr(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Oe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Oe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Oe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Oe(r, 0, 1)})`;
}
function k2(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let ma = { fillStyle: "", url: "" };
function x2(e, t, r) {
  if (ma.url && ma.fillStyle === String(e || ""))
    return ma.url;
  const n = k2(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Sl}" height="${Sl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return ma = { fillStyle: String(e || ""), url: n }, n;
}
function _l(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function jn(e) {
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
function M2(e) {
  return Xl.some((t) => _l(e, t.color));
}
function Ru(e, t, r) {
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
function N2(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function jp(e) {
  const { paintCount: t, maskCount: r } = N2(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function A0(e, t, r, n, i) {
  const o = r.bbox, s = r.transform || {}, a = Number(o.u0 || 0) * n, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * n), d = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), u = a + c * 0.5 + Number(s.du || 0) * n, f = l + d * 0.5 + Number(s.dv || 0) * i, p = Number(s.rot_deg || 0) * Nr, w = Math.max(0.01, Number(s.scale || 1));
  for (const m of [-n, 0, n])
    e.save(), e.translate(u + m, f), e.rotate(p), e.scale(w, w), e.drawImage(t, -c * 0.5, -d * 0.5, c, d), e.restore();
}
function io(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function ga(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function P2(e, t) {
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
function A2(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function C2(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function I2(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const C0 = "pano_suite.ui_settings.v1", I0 = "pano_suite.node_grid_visibility.v1";
let to = null, gr = null;
function Va(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function E2() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(C0)) || "").trim();
    if (!t) return to ? Va(to) : null;
    const r = JSON.parse(t), n = Va(r);
    return to = n, n;
  } catch {
    return to ? Va(to) : null;
  }
}
function O2(e) {
  var r;
  const t = Va(e);
  to = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(C0, JSON.stringify(t));
  } catch {
  }
  return t;
}
function E0() {
  var e;
  if (gr && typeof gr == "object")
    return gr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(I0)) || "").trim();
    if (!t)
      return gr = {}, gr;
    const r = JSON.parse(t);
    return gr = r && typeof r == "object" ? r : {}, gr;
  } catch {
    return gr = {}, gr;
  }
}
function F2(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = E0()[r];
  return typeof i == "boolean" ? i : !!t;
}
function T2(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = E0();
  n[r] = !!t, gr = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(I0, JSON.stringify(n));
  } catch {
  }
}
function D2(e, t) {
  const r = { ...e }, n = t.map((i) => i(Gc(e, i.name)));
  for (const { connect: i, ...o } of n) {
    for (const s of Object.keys(o))
      if (s in r) throw new Error(`Panorama editor: ${s} is provided twice`);
    Object.assign(r, o);
  }
  return n.forEach((i, o) => i.connect(Gc(r, t[o].name))), Gc(r, "showEditor");
}
function Gc(e, t) {
  return new Proxy(e, {
    get(r, n) {
      if (!(n in r)) throw new Error(`Panorama editor: ${t} takes ${String(n)}, which nothing provides`);
      return r[n];
    }
  });
}
function R2(e, t) {
  if (t == null || t.layer !== e.id) return e;
  const r = t.fps === e.timeline.fps ? t : Em(t, e), n = new Set(r.deleted), i = new Map(r.stickers.map((a) => [a.id, a]));
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
const O0 = "PANO_SCENE";
function L2(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: Ln(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function V2(e) {
  return !e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length ? null : {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: Vn(e("pano_upstream_coverage")[0])
  };
}
const $2 = "bg_media is not used";
function z2(e, t) {
  return e === O0 && t === null;
}
function j2(e, t, r) {
  if (!e.painting_visible) return [];
  const { groups: n, raster_objects: i } = e.painting, o = [
    ...n.map((l) => ({ kind: "group", id: l.actionGroupId, zIndex: l.z_index })),
    ...i.filter((l) => l.layerKind === "paint").map((l) => ({ kind: "raster", id: l.id, zIndex: l.z_index, item: l }))
  ], s = Math.max(-1, ...o.map((l) => l.zIndex), ...e.stickers.map((l) => l.z_index ?? 0)) + 1, a = new Set(n.map((l) => l.actionGroupId));
  for (const l of t) a.has(l) || o.push({ kind: "group", id: l, zIndex: s });
  return r && o.push({ kind: "mask", id: "mask", zIndex: s }), o;
}
function Xn(e, t) {
  return Array.isArray(e[t]) ? e[t] : [];
}
function F0(e) {
  return e.map(({ sceneState: { id: t } }, r) => t && !e.slice(r + 1).some((n) => n.sceneState.id === t) ? t : `#${r}`);
}
function H2(e, t, r) {
  const n = F0(e);
  return e.map(({ sceneState: i, ui: o }, s) => {
    const l = i.id !== null && n[s] === i.id ? t.find((p) => p.layer === i.id) ?? null : null, c = R2(i, l), { painting: d } = c, u = { ...structuredClone({ ...c, painting: null }), painting: d }, f = u.timeline.fps === r ? u : { ...Mo(u, r), painting: d };
    for (const p of f.stickers)
      p.origin = { layer: n[s], id: p.id }, p.id = Zd(n[s], p.id);
    return { key: n[s], sceneState: f, ui: o, received: i };
  });
}
function Zd(e, t) {
  return `upstream:${e}:${t}`;
}
function Vu(e, t) {
  return Zd(e, t);
}
function Ht(e) {
  return !!e && typeof e == "object" && !!e.origin;
}
function wl(e) {
  return Ns(e.origin.layer);
}
function Ns(e) {
  return !e.startsWith("#");
}
function T0(e) {
  const t = e.placement === "world";
  return ["clip", "visible", "locked", "crop", ...(t ? hi : pi).map(([n]) => n), ...t ? [] : ["z_index"]];
}
function G2(e) {
  return Object.fromEntries(T0(e).map((t) => [t, JSON.stringify(e[t])]));
}
function D0(e) {
  return {
    visible: JSON.stringify(e.scene.visible),
    clip: JSON.stringify(e.scene.clip),
    painting_visible: JSON.stringify(e.painting_visible)
  };
}
function Qd(e) {
  return `layer:${e}`;
}
function Hp(e) {
  return new Map(e.flatMap(({ key: t, sceneState: r }) => [
    [Qd(t), D0(r)],
    ...r.stickers.map((n) => [n.id, G2(n)])
  ]));
}
function K2(e, t, r, n, i) {
  const o = [...e];
  let s = !1;
  const a = (l, c) => {
    s = !0;
    let d = o.findIndex((u) => u.layer === l);
    if (d < 0 && (d = o.push({ layer: l, fps: i, deleted: [], stickers: [], scene: {} }) - 1), o[d].fps !== i) {
      const u = t[c].sceneState;
      o[d] = Em(o[d], u.timeline.fps === i ? u : Mo(u, i));
    }
    return d;
  };
  return r.forEach(({ key: l, sceneState: c }, d) => {
    if (!Ns(l)) return;
    const u = n.get(Qd(l));
    if (u) {
      const f = D0(c), p = ["visible", "clip"].filter((w) => f[w] !== u[w]);
      if (p.length) {
        const w = a(l, d), m = { ...o[w].scene };
        for (const h of p) m[h] = structuredClone(c.scene[h]);
        o[w] = { ...o[w], scene: m };
      }
      if (f.painting_visible !== u.painting_visible) {
        const w = a(l, d);
        o[w] = { ...o[w], painting_visible: c.painting_visible };
      }
    }
    for (const f of c.stickers) {
      const p = n.get(f.id);
      if (!p) continue;
      const w = T0(f).filter((ie) => JSON.stringify(f[ie]) !== p[ie]);
      if (!w.length) continue;
      const m = a(l, d), { id: h } = f.origin, y = [...o[m].stickers], z = y.findIndex((ie) => ie.id === h), T = z >= 0 && y[z].placement === f.placement ? { ...y[z] } : { id: h, placement: f.placement };
      for (const ie of w) T[ie] = structuredClone(f[ie]);
      z >= 0 ? y[z] = T : y.push(T), o[m] = { ...o[m], stickers: y };
    }
  }), s ? Ln({ version: 2, upstream: o }).upstream : e;
}
function W2(e, t, r) {
  const n = [];
  return e.forEach(({ key: i, sceneState: o }, s) => {
    if (!Ns(i)) return;
    const a = t.find((d) => d.layer === i), l = r.get(Qd(i)), c = o.scene.clip;
    (a && Object.hasOwn(a.scene, "clip") || l && l.clip !== JSON.stringify(c)) && n.push({ index: s, clip: c, sticker: null });
    for (const d of o.stickers) {
      const u = a == null ? void 0 : a.stickers.some((p) => p.id === d.origin.id && p.placement === d.placement && Object.hasOwn(p, "clip")), f = r.has(d.id) && r.get(d.id).clip !== JSON.stringify(d.clip);
      (u || f) && n.push({ index: s, clip: d.clip, sticker: d });
    }
  }), n;
}
function Zl(e, t, r, n) {
  const i = e.findIndex((s) => s.layer === t), o = [...e];
  return i < 0 ? o.push(n({ layer: t, fps: r, deleted: [], stickers: [], scene: {} })) : o[i] = n(o[i]), Ln({ version: 2, upstream: o }).upstream;
}
function U2(e, t, r) {
  return t.reduce((n, { layer: i, id: o }) => Zl(n, i, r, (s) => ({
    ...s,
    deleted: [...s.deleted, o],
    stickers: s.stickers.filter((a) => a.id !== o)
  })), e);
}
const B2 = new Set([...pi, ...hi].map(([e]) => e));
function R0(e, { layer: t, id: r }) {
  var n;
  return ((n = e.find((i) => i.layer === t)) == null ? void 0 : n.stickers.find((i) => i.id === r)) ?? null;
}
function Y2(e, t, r = null) {
  const { origin: n } = t, i = R0(e, n);
  return !i || r !== null && !(B2.has(r) && i.placement === t.placement && Object.hasOwn(i, r)) ? e : Zl(e, n.layer, null, (o) => ({
    ...o,
    stickers: o.stickers.flatMap((s) => {
      if (s.id !== n.id) return [s];
      if (r === null) return [];
      const a = { ...s };
      return delete a[r], [a];
    })
  }));
}
function q2(e, t) {
  var n;
  const r = new Set((n = e.find((i) => i.layer === t.key)) == null ? void 0 : n.deleted);
  return t.received.stickers.filter((i) => r.has(i.id)).length;
}
function X2(e, t) {
  var r;
  return (r = e.find((n) => n.layer === t)) != null && r.deleted.length ? Zl(e, t, null, (n) => ({ ...n, deleted: [] })) : e;
}
function L0(e) {
  return !!e && (Object.keys(e.scene).length > 0 || Object.hasOwn(e, "painting_visible"));
}
function J2(e, t) {
  return L0(e.find((r) => r.layer === t)) ? Zl(e, t, null, ({ painting_visible: r, ...n }) => ({ ...n, scene: {} })) : e;
}
function Z2(e, t) {
  const r = F0(t), n = new Map(t.flatMap(({ sceneState: s }, a) => r[a] === s.id ? [[s.id, new Set(s.stickers.map((l) => l.id))]] : []));
  let i = !1;
  const o = e.map((s) => {
    const a = n.get(s.layer);
    if (!a) return s;
    const l = s.deleted.filter((d) => a.has(d)), c = s.stickers.filter((d) => a.has(d.id));
    return l.length === s.deleted.length && c.length === s.stickers.length ? s : (i = !0, { ...s, deleted: l, stickers: c });
  });
  return i ? Ln({ version: 2, upstream: o }).upstream : e;
}
function Q2(e, t, r, { media: n, paintLayers: i, source: o }) {
  const { sceneState: s, ui: a, received: l } = e, c = Os(s, r), d = (h) => h.visible ? n(h) : null, u = ug(s, r, { media: d, zIndex: (h) => h.z_index, paintLayers: i, evaluated: c }).map((h) => h.kind === "erp" ? { ...h, id: Zd(t, h.id) } : h), f = pg(s, r, s.stickers, { media: d, evaluated: c }), p = [], w = al(Xn(a, "pano_scene_files"), Xn(a, "pano_scene_meta"), o);
  w && p.push({ slot: `${t}:scene`, urls: w.urls.filter(Boolean), request: Nd(w, c.scene), value: c.scene, opacity: 1 });
  const m = al(Xn(a, "pano_sticker_files"), Xn(a, "pano_sticker_meta"), o);
  if (m) {
    const h = ng(m, s, c);
    p.push({ slot: `${t}:sticker`, urls: rg(m, l), request: h, value: (h == null ? void 0 : h.value) ?? null, opacity: (h == null ? void 0 : h.opacity) ?? 1 });
  }
  return { evaluated: c, sky: u, stickers: f, items: p };
}
const ri = /* @__PURE__ */ new Map(), eA = 12;
function tA(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = ri.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (ri.delete(t), ri.set(t, r), r);
}
function nA(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (ri.delete(r), ri.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); ri.size > eA; ) {
      const i = ri.keys().next().value;
      if (!i) break;
      ri.delete(i);
    }
}
function rA(e) {
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
    scheduler: m,
    stageWrap: h,
    state: y,
    stateV2: z,
    stillCanvas: T,
    studio: ie,
    timelinePlayhead: P,
    type: X,
    uiState: j,
    videoEl: J
  } = e;
  let _e, ke, ge, ve, he, Se;
  const pe = {
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
  }, ne = 9, ae = [];
  let fe = 0;
  const $ = () => {
    var Ce, ze;
    const k = (Ce = h == null ? void 0 : h.getBoundingClientRect) == null ? void 0 : Ce.call(h), oe = (ze = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : ze.call(i), re = Math.max(0, Number((k == null ? void 0 : k.width) || 0)), be = oe ? Math.max(0, Number(oe.width || 0)) : 0, Ve = be > 0 ? be + 14 + 12 : 72, We = Math.max(280, Math.floor(re - Ve * 2)), Ge = r.fullscreen ? Math.min(1200, We) : We;
    j.videoTransport.shellMaxWidthPx = Ge;
  }, A = () => {
    fe || (fe = m.requestFrame(() => {
      fe = 0, $();
    }));
  }, D = (k) => {
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
    return !!j.videoTransport.hasAudio;
  }, ee = typeof ResizeObserver < "u" ? new ResizeObserver(() => A()) : null;
  ee == null || ee.observe(h), i && (ee == null || ee.observe(i)), ae.push(() => {
    var k;
    fe && (m.cancelFrame(fe), fe = 0), (k = ee == null ? void 0 : ee.disconnect) == null || k.call(ee);
  }), A();
  const se = () => {
    pe.thumbnailJobId += 1, pe.thumbnailSrc = "", j.videoTransport.thumbnails = [], j.videoTransport.thumbnailCount = ne;
  }, U = async (k, oe, re) => {
    const be = String(k || "").trim();
    if (!be) {
      se();
      return;
    }
    const Ne = tA(be);
    if (Ne) {
      pe.thumbnailSrc = be, j.videoTransport.thumbnails = Ne.thumbnails, j.videoTransport.thumbnailCount = Ne.thumbnailCount;
      return;
    }
    const Ee = ++pe.thumbnailJobId;
    pe.thumbnailSrc = be, j.videoTransport.thumbnails = [], j.videoTransport.thumbnailCount = ne;
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
      if (pe.thumbnailJobId !== Ee) return;
      const Ce = Number(Ve.videoWidth || 0), ze = Number(Ve.videoHeight || 0);
      if (!Ge || Ce < 1 || ze < 1) {
        pe.thumbnailFailedSrcs.add(be);
        return;
      }
      const le = Math.max(0, Number(Ve.duration || oe || 0)), Ie = 46, Ae = Math.max(72, Math.round(Ce / ze * Ie));
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
        if (pe.thumbnailJobId !== Ee) return;
        const ft = ne <= 1 ? 0 : Ue / (ne - 1), yt = le > 0 ? Math.max(0, Math.min(le - Math.max(1e-3, 0.5 / Math.max(1, Number(re || 24))), le * ft)) : 0;
        if (await He(yt), pe.thumbnailJobId !== Ee) return;
        Fe.clearRect(0, 0, Ae, Ie), Fe.drawImage(Ve, 0, 0, Ae, Ie), je.push({
          id: `thumb-${Ue}`,
          src: We.toDataURL("image/jpeg", 0.72),
          time: yt,
          label: S(yt)
        });
      }
      if (pe.thumbnailJobId !== Ee) return;
      j.videoTransport.thumbnails = je, j.videoTransport.thumbnailCount = je.length || ne, nA(be, {
        thumbnails: je,
        thumbnailCount: je.length || ne,
        duration: le,
        fps: re
      });
    } finally {
      Ve.removeAttribute("src"), Ve.load(), hs(We);
    }
  };
  ae.push(() => {
    se();
  });
  const b = jg({
    video: J instanceof HTMLVideoElement ? J : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (k) => m.requestFrame(k),
      cancelFrame: (k) => m.cancelFrame(k)
    },
    fps: R,
    span: () => {
      if (z) return Se();
      const k = Math.round(Number(j.videoTransport.duration || 0) * R());
      return J.loop || !(k > 0) ? 1 / 0 : k;
    },
    loop: () => z,
    onFrame: (k) => {
      z ? ge(k) : x(), ke({ cause: "frame_view", localOnly: !0, reason: pt.PLAYHEAD });
    },
    onCapture: () => {
      N() && (w.backgroundDirty = !0);
    },
    onChange: () => {
      x(), P.playing.value = b.playing, he(), ke({ cause: "frame_view", localOnly: !0, reason: pt.PLAYHEAD });
    }
  });
  ae.push(() => b.dispose());
  const Y = z && f instanceof HTMLVideoElement ? $d({
    video: f,
    onCapture: () => {
      var re;
      const k = Number(f.videoWidth || 0), oe = Number(f.videoHeight || 0);
      k < 1 || oe < 1 || (u.width = k, u.height = oe, (re = u.getContext("2d")) == null || re.drawImage(f, 0, 0), u.__panoFrameIdx += 1, ke({ cause: "frame_view", localOnly: !0, reason: pt.MEDIA }));
    },
    onChange: () => ke({ cause: "frame_view", localOnly: !0, reason: pt.MEDIA })
  }) : null;
  Y && ae.push(() => Y.dispose());
  const ue = z ? Td({
    createImage: (k, oe) => {
      const re = new Image();
      return re.onload = oe, re.onerror = oe, re.src = k, re;
    },
    onLoad: () => ke({ cause: "frame_view", localOnly: !0, reason: pt.MEDIA })
  }) : null;
  if (J instanceof HTMLVideoElement) {
    const k = () => {
      O(), ke({ cause: "frame_view", localOnly: !0 });
    }, oe = () => {
      x({
        hasAudio: j.videoTransport.hasAudio,
        muted: J.muted,
        volume: Number(J.volume ?? j.videoTransport.volume ?? 1)
      });
    }, re = () => {
      const be = J.dataset.panoSrc;
      be && (pe.failedSrcs.add(be), O(), ke());
    };
    for (const [be, Ne] of [
      ["loadedmetadata", k],
      ["loadeddata", k],
      ["canplay", k],
      ["volumechange", oe],
      ["error", re]
    ])
      J.addEventListener(be, Ne), ae.push(() => J.removeEventListener(be, Ne));
  }
  function C(k) {
    return t.uiList(d, k);
  }
  function W(k) {
    return t.uiValue(d, k);
  }
  function v() {
    const k = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
    if (Ja(k))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const oe = Z();
    return oe ? { videoKey: oe.videoKey, metaKey: oe.metaKey } : X === "stickers" || X === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function B() {
    const { metaKey: k } = v(), oe = W(k);
    return Array.isArray(oe) && oe.length > 0 && oe[0] && typeof oe[0] == "object" ? oe[0] : oe && typeof oe == "object" ? oe : null;
  }
  function g(k) {
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
  function S(k) {
    const oe = Math.max(0, Math.floor(Number(k || 0))), re = Math.floor(oe / 60), be = oe % 60;
    return `${re}:${String(be).padStart(2, "0")}`;
  }
  function R() {
    return z ? y.timeline.fps : pe.metaFps || 1e3;
  }
  function x(k = {}) {
    const oe = Number(k.duration ?? j.videoTransport.duration ?? 0), re = Math.max(1, Number(k.fps ?? j.videoTransport.fps ?? 24)), be = b.frame / R(), Ne = Object.prototype.hasOwnProperty.call(k, "ready") ? !!k.ready : !!j.videoTransport.ready, Ee = b.playing, Ve = Object.prototype.hasOwnProperty.call(k, "visible") ? !!k.visible : !!j.videoTransport.visible, We = Object.prototype.hasOwnProperty.call(k, "muted") ? !!k.muted : !!(J instanceof HTMLVideoElement ? J.muted : j.videoTransport.muted), Ge = Number(
      Object.prototype.hasOwnProperty.call(k, "volume") ? k.volume : J instanceof HTMLVideoElement ? J.volume : j.videoTransport.volume
    ), Ce = Object.prototype.hasOwnProperty.call(k, "hasAudio") ? !!k.hasAudio : D(J), ze = Object.prototype.hasOwnProperty.call(k, "loop") ? !!k.loop : !!j.videoTransport.loop;
    Object.assign(j.videoTransport, {
      ready: Ne,
      playing: Ee,
      visible: Ve,
      loop: ze,
      currentTime: Number.isFinite(be) ? be : 0,
      duration: Number.isFinite(oe) ? oe : 0,
      progressPct: oe > 1e-6 ? Math.max(0, Math.min(100, be / oe * 100)) : 0,
      currentTimeLabel: S(be),
      durationLabel: S(oe),
      frameCount: Math.max(0, Number(k.frameCount ?? j.videoTransport.frameCount ?? 0)),
      fps: re,
      hasAudio: Ce,
      muted: We,
      volume: Math.max(0, Math.min(1, Number.isFinite(Ge) ? Ge : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(Ge) ? Ge : 1)) * 100),
      thumbnails: Array.isArray(k.thumbnails) ? k.thumbnails : j.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(k.thumbnailCount ?? j.videoTransport.thumbnailCount ?? ne))
    });
  }
  function F() {
    return !!(J instanceof HTMLVideoElement && !z && J.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function L() {
    if (!(J instanceof HTMLVideoElement) || !j.videoTransport.hasAudio) return;
    const k = !J.muted;
    J.muted = k, !k && Number(J.volume || 0) <= 0 && (J.volume = Math.max(0.01, Number(j.videoTransport.volume || 1))), x({
      hasAudio: j.videoTransport.hasAudio,
      muted: J.muted,
      volume: Number(J.volume ?? j.videoTransport.volume ?? 1)
    });
  }
  function I() {
    x({
      visible: F()
    });
  }
  function N() {
    if (!(J instanceof HTMLVideoElement) || Number(J.videoWidth || 0) < 1 || Number(J.videoHeight || 0) < 1) return !1;
    const k = Number(J.videoWidth || 0), oe = Number(J.videoHeight || 0);
    (T.width !== k || T.height !== oe) && (T.width = k, T.height = oe);
    const re = T.getContext("2d");
    return re ? (re.clearRect(0, 0, k, oe), re.drawImage(J, 0, 0, k, oe), T.__panoFrameIdx = Number(T.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function E() {
    return !b.showsVideo && Number(T.width || 0) > 0 && Number(T.height || 0) > 0 && Number(T.__panoFrameIdx || 0) > 0 ? T : J instanceof HTMLVideoElement && Number(J.videoWidth || 0) > 0 && Number(J.videoHeight || 0) > 0 && Number(J.readyState || 0) >= 2 ? J : null;
  }
  function _() {
    T.__panoFrameIdx = 0, w.backgroundDirty = !0;
  }
  function O() {
    if (!(J instanceof HTMLVideoElement)) return null;
    const { videoKey: k } = v(), oe = (Z() || Wt(d, "background")) && C(k)[0] || null, re = l(oe), be = [re, t.linkedVideoFile(d, q())].filter(Boolean), Ne = be.find((le) => !pe.failedSrcs.has(le)) || "";
    pe.videoFailed = !Ne && be.length > 0;
    const Ee = Ne && Ne === re ? B() : null;
    pe.metaFps = Number(Ee == null ? void 0 : Ee.fps) > 0 ? Number(Ee.fps) : 0;
    const Ve = Math.max(1, Number((Ee == null ? void 0 : Ee.fps) || (z ? y.timeline.fps : 24))), We = J.dataset.panoSrc === Ne && Number.isFinite(J.duration) ? J.duration : 0, Ge = Number((Ee == null ? void 0 : Ee.duration) || ((Ee == null ? void 0 : Ee.frames) > 0 ? Ee.frames / Ve : We)), Ce = Math.max(0, Number((Ee == null ? void 0 : Ee.frames) || Math.round(Ge * Ve))), ze = !!(Ee != null && Ee.has_audio) || D(J);
    return Ne && J.dataset.panoSrc !== Ne ? (J.pause(), _(), J.dataset.panoSrc = Ne, J.loop = !z && !!j.videoTransport.loop, J.muted = !!j.videoTransport.muted, J.volume = Math.max(0, Math.min(1, Number(j.videoTransport.volume ?? 1))), J.src = Ne, J.load(), b.setSource(!0), z || b.seek(0)) : !Ne && J.getAttribute("src") && (J.pause(), J.removeAttribute("src"), delete J.dataset.panoSrc, J.load(), _(), se(), b.setSource(!1)), z || (J.loop = !!j.videoTransport.loop), Ne && !z && pe.thumbnailSrc !== Ne && !pe.thumbnailFailedSrcs.has(Ne) && U(Ne, Ge, Ve), Ne || se(), x({
      ready: !!Ne,
      visible: !!Ne && F(),
      duration: Ge,
      frameCount: Ce,
      fps: Ve,
      hasAudio: ze,
      loop: !!J.loop,
      muted: !!J.muted,
      volume: Number(J.volume ?? j.videoTransport.volume ?? 1),
      thumbnailCount: j.videoTransport.thumbnailCount
    }), Ne || null;
  }
  function Q(k, oe = null) {
    return c(d, k, o, oe || (() => ke()));
  }
  function me(k = null) {
    return Wt(d, "external-sticker") ? Q(Di, k) : null;
  }
  function ye() {
    if (!Wt(d, "external-sticker")) return null;
    const k = C(Tu)[0];
    if (!k || typeof k != "object") return null;
    const oe = C(N0).map(l).filter(Boolean);
    if (oe.length) return { frames: oe, meta: k };
    const re = l(C(M0)[0] || null);
    return re ? { src: re, meta: k } : null;
  }
  function xe() {
    const k = y.stickers.find(_e), oe = k ? ye() : null, re = oe ? Ed(k.clip, r.frame, y.timeline.fps, oe.meta) : null;
    Y.follow({ src: (oe == null ? void 0 : oe.src) || "", time: re, playing: b.advancing, fps: y.timeline.fps });
    const be = k ? V(k) : null, Ne = oe != null && oe.frames ? ue.picture(oe.frames, re, oe.meta, be) : Y.picture(u, be);
    return Ne ? { media: Ne, revision: g(Ne), source: Fd(oe, be) } : null;
  }
  function de() {
    return !z || !Wt(d, "scene") ? null : al(C("pano_scene_files"), C("pano_scene_meta"), l);
  }
  function we() {
    return !z || !Wt(d, "external-sticker") ? null : al(C("pano_sticker_files"), C("pano_sticker_meta"), l);
  }
  function V(k) {
    var Ve;
    if (k && typeof k == "object" && (_e(k) || k.external === !0))
      return me(() => {
        ii(d, "image-loaded");
      });
    const oe = z ? ce(k) : String(k && typeof k == "object" ? k.asset_id || k.assetId || "" : k || "");
    if (!oe) return null;
    const re = o.get(oe);
    if (re) return re;
    const be = z ? sl(k.source) : (Ve = y.assets) == null ? void 0 : Ve[oe], Ne = a(be);
    if (!Ne) return null;
    const Ee = new Image();
    return _0(Ee, Ne), Ee.onload = () => {
      w0(Ee, Ne), ke();
    }, Ee.onerror = () => {
      k0(Ee, Ne), ke();
    }, Ee.src = Ne, o.set(oe, Ee), Ee;
  }
  function ce(k) {
    const { source: oe } = k;
    return oe.filename ? `file:${oe.storage}:${oe.subfolder}:${oe.filename}` : `sticker:${k.id}`;
  }
  function H() {
    if (X === "cutout") {
      const Ee = E();
      if (Ee) return Ee;
      const Ve = s(
        d,
        ["erp_image", "bg_erp"],
        () => ke(),
        "background:cutout:erp_image|bg_erp"
      );
      return Ve && !Fu(Ve) ? Ve : c(d, "pano_input_images", o, () => ke()) || Ve || null;
    }
    const k = E();
    if (k) return k;
    const oe = Z(), re = oe || Wt(d, "background") ? c(d, (oe == null ? void 0 : oe.imageKey) ?? "pano_input_images", o, () => ke()) : null;
    if (re && !Fu(re)) return re;
    if (J instanceof HTMLVideoElement && J.dataset.panoSrc) return J;
    if (oe) return re;
    const be = q();
    return s(d, be, () => ke(), `background:${be.join("|")}`) || re || null;
  }
  function Z() {
    return !ie || !Wt(d, "scene") ? null : V2(C);
  }
  function G() {
    var k;
    return ((k = Z()) == null ? void 0 : k.coverage) ?? Vn(y.coverage);
  }
  function q() {
    if (Z()) return [];
    if (X === "cutout") return ["erp_image", "bg_erp"];
    const k = Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs.map((be) => String((be == null ? void 0 : be.name) || "")) : [], oe = k.includes("erp_image"), re = k.includes("bg_erp");
    return p && (oe || re) ? oe ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : X === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function K(k) {
    return k ? k instanceof HTMLImageElement ? !!k.complete && Number(k.naturalWidth || k.width || 0) > 0 && Number(k.naturalHeight || k.height || 0) > 0 : k instanceof HTMLVideoElement ? Number(k.videoWidth || 0) > 0 && Number(k.videoHeight || 0) > 0 && Number(k.readyState || 0) >= 2 : Number(k.width || k.naturalWidth || 0) > 0 && Number(k.height || k.naturalHeight || 0) > 0 : !1;
  }
  function M() {
    if (n.failed) return { status: Jn, detail: "renderer" };
    if (!n.ready) return { status: sr, detail: "boot" };
    const k = H(), oe = pe.videoFailed ? Jn : Ou(k, K), re = [];
    for (const be of ve()) {
      if ((be == null ? void 0 : be.visible) === !1) continue;
      const Ne = V(be);
      re.push(Ou(Ne, K));
    }
    return o2({
      presented: w.hasPresentedFrame,
      background: oe,
      stickers: re
    });
  }
  function te() {
    J instanceof HTMLVideoElement && J.pause(), ae.forEach((k) => {
      try {
        k();
      } catch {
      }
    });
  }
  return {
    connect(k) {
      ({
        isExternalSticker: _e,
        requestDraw: ke,
        setTimelineFrame: ge,
        skyStickers: ve,
        syncTimeline: he,
        timelineSpanFrames: Se
      } = k);
    },
    videoState: pe,
    queueVideoTransportLayout: A,
    playback: b,
    portVideo: Y,
    getNodeUiValue: W,
    getMediaRevisionToken: g,
    playbackFps: R,
    syncVideoTransportState: x,
    toggleVideoMuted: L,
    syncVideoTransportVisibility: I,
    refreshModalVideoSource: O,
    getStickerUiImage: Q,
    getExternalStickerPreviewImage: me,
    getPortMedia: ye,
    followPortSticker: xe,
    getStickerImage: V,
    stickerImageKey: ce,
    getConnectedErpImage: H,
    backgroundCoverage: G,
    upstreamBackground: Z,
    isDecodedImageReady: K,
    getStageImageStatus: M,
    sceneFiles: de,
    stickerFiles: we,
    disposeMediaSession: te
  };
}
function iA(e = 80, t = null, r = 8) {
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
const oA = 80;
function V0(e) {
  return JSON.stringify(dS(e));
}
function sA(e) {
  return iA(oA, { entries: [V0(e)], index: 0 });
}
function $0(e, t) {
  var r, n;
  return (e === "stickers" ? (r = t.active) == null ? void 0 : r.selected_sticker_id : (n = t.active) == null ? void 0 : n.selected_shot_id) ?? null;
}
function aA(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: s,
    type: a
  } = e;
  let l, c, d, u, f, p, w, m, h, y, z, T, ie, P, X, j, J, _e, ke;
  function ge({ initial: Se = !1 } = {}) {
    r || (P(), j(), _e(), Se || m(), !(o && i.stickers.some(u)) && (t.historyController.commitActionGroup(V0(ie())), J()));
  }
  function ve(Se) {
    var fe, $;
    if (r) return;
    T();
    const pe = Se < 0 ? t.historyController.undo() : t.historyController.redo();
    if (J(), !pe) return;
    const ne = fS(i, pe), ae = (fe = i.timeline) == null ? void 0 : fe.fps;
    Object.keys(i).forEach((A) => delete i[A]), Object.assign(i, ne.state), P(!1), j({ restored: !0 }), o && h(), o && i.timeline.fps !== ae && w.seek(Math.round(t.frame * i.timeline.fps / ae)), t.selectedId = $0(a, i), s && !t.selectedId && i.active.selected_shot_id && (t.selectedId = (($ = d()) == null ? void 0 : $.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), y(), n.backgroundDirty = !0, ne.paintingChanged ? p() : f(), X(), ke(), c(), z({ cause: "cutout_frame" });
  }
  function he() {
    var ne, ae;
    const Se = Array.isArray((ne = t.historyController) == null ? void 0 : ne.entries) ? t.historyController.entries : [], pe = Number((ae = t.historyController) == null ? void 0 : ae.index);
    return {
      canUndo: !r && Se.length > 1 && pe > 0,
      canRedo: !r && Se.length > 1 && pe >= 0 && pe < Se.length - 1
    };
  }
  return {
    connect(Se) {
      ({
        clearWorldSelection: l,
        commitState: c,
        getActiveCutoutShot: d,
        isUploadingSticker: u,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: p,
        playback: w,
        pruneUpstreamRecords: m,
        rebuildUpstreamWorking: h,
        releaseHiddenSelection: y,
        requestDraw: z,
        stopTimelinePlayback: T,
        storedEditorState: ie,
        syncCutoutShot: P,
        syncPaintUi: X,
        syncPortHandoff: j,
        syncUndoRedoButtons: J,
        syncUpstreamEdits: _e,
        updateSidePanel: ke
      } = Se);
    },
    pushHistory: ge,
    restoreHistory: ve,
    getHistoryCapabilities: he
  };
}
function lA(e) {
  const {
    canvas: t,
    editor: r,
    sceneV2: n,
    state: i,
    stateV2: o,
    type: s
  } = e;
  let a, l, c, d, u, f, p, w, m, h;
  function y() {
    return s !== "stickers" ? i.shots : n ? [...z(), ...T()] : z();
  }
  function z() {
    return n ? i.stickers.filter((M) => M.placement === "sky") : i.stickers;
  }
  function T() {
    if (!n) return [];
    const M = h(), te = [...new Set(M.map((k) => k.origin.layer))];
    return M.filter((k) => k.placement === "sky").sort((k, oe) => te.indexOf(k.origin.layer) - te.indexOf(oe.origin.layer) || k.z_index - oe.z_index);
  }
  function ie(M) {
    return i.stickers.find((te) => te.id === M) || h().find((te) => te.id === M) || null;
  }
  function P(M) {
    return n && v(M);
  }
  function X(M) {
    return M.source.kind === "file" && !M.source.filename && !M.source.data_url;
  }
  function j(M) {
    if (!P(M)) return M;
    const te = de(M) ? Ht(M) ? m(M) : p(M) : null;
    return vd(M, r.frame, te && { width: te.naturalWidth || te.width, height: te.naturalHeight || te.height });
  }
  function J(M, te) {
    P(M) ? Gm(M, r.frame, te) : Object.assign(M, te);
  }
  function _e() {
    const M = i.painting || (i.painting = ko(null));
    return Array.isArray(M.groups) || (M.groups = []), M.groups;
  }
  function ke(M = "paint") {
    var re, be;
    const te = Array.isArray((be = (re = i.painting) == null ? void 0 : re[M]) == null ? void 0 : be.strokes) ? i.painting[M].strokes : [], k = [], oe = /* @__PURE__ */ new Set();
    for (const Ne of te) {
      const Ee = String((Ne == null ? void 0 : Ne.actionGroupId) || "").trim();
      !Ee || oe.has(Ee) || (oe.add(Ee), k.push(Ee));
    }
    return k;
  }
  function ge() {
    return ke("paint");
  }
  function ve(M, te) {
    const k = String(te || "").trim();
    return k ? `${M === "mask" ? "mask" : "paint"}:${k}` : "";
  }
  function he(M) {
    const te = String(M || "").trim();
    return te ? `raster:${te}` : "";
  }
  function Se(M) {
    const te = String(M || "").trim();
    if (!te) return "";
    const k = te.match(/^raster:(.*)$/);
    return String(k ? k[1] || "" : te).trim();
  }
  function pe(M, te = null) {
    const k = String(M || "").trim();
    if (!k) return { layerKind: "paint", actionGroupId: "" };
    const oe = k.match(/^(paint|mask):(.*)$/);
    return oe ? { layerKind: oe[1] === "mask" ? "mask" : "paint", actionGroupId: String(oe[2] || "").trim() } : { layerKind: te === "mask" ? "mask" : "paint", actionGroupId: k };
  }
  function ne() {
    var te;
    let M = -1;
    for (const k of z())
      M = Math.max(M, Number((k == null ? void 0 : k.z_index) || 0));
    for (const k of _e())
      M = Math.max(M, Number((k == null ? void 0 : k.z_index) || 0));
    for (const k of Array.isArray((te = i.painting) == null ? void 0 : te.raster_objects) ? i.painting.raster_objects : [])
      String((k == null ? void 0 : k.layerKind) || "paint") === "paint" && (M = Math.max(M, Number((k == null ? void 0 : k.z_index) || 0)));
    return M + 1;
  }
  function ae(M, te = null) {
    const k = String(M || "").trim();
    if (!k) return null;
    const oe = _e();
    let re = oe.find((be) => String((be == null ? void 0 : be.actionGroupId) || "") === k);
    return re ? te != null && (re.z_index = Math.max(0, Number(te || 0))) : (re = {
      id: k,
      type: "strokeGroup",
      actionGroupId: k,
      z_index: te == null ? ne() : Math.max(0, Number(te || 0)),
      locked: !1,
      frame: null
    }, oe.push(re)), re;
  }
  function fe(M) {
    if (!(M != null && M.centerUv)) return [];
    const te = Number(M.centerUv.u || 0), k = Number(M.centerUv.v || 0), oe = Number(M.halfW || 0), re = Number(M.halfH || 0);
    return [
      {
        u: ((te - oe) % 1 + 1) % 1,
        v: Oe(k - re, 0, 1)
      },
      {
        u: ((te + oe) % 1 + 1) % 1,
        v: Oe(k - re, 0, 1)
      },
      {
        u: ((te + oe) % 1 + 1) % 1,
        v: Oe(k + re, 0, 1)
      },
      {
        u: ((te - oe) % 1 + 1) % 1,
        v: Oe(k + re, 0, 1)
      }
    ];
  }
  function $() {
    const M = new Set(ge()), k = _e().filter((oe) => M.has(String((oe == null ? void 0 : oe.actionGroupId) || "")));
    return M.forEach((oe) => {
      k.some((re) => String((re == null ? void 0 : re.actionGroupId) || "") === oe) || k.push({
        id: oe,
        type: "strokeGroup",
        actionGroupId: oe,
        z_index: ne(),
        locked: !1,
        frame: null
      });
    }), k.sort((oe, re) => Number((oe == null ? void 0 : oe.z_index) || 0) - Number((re == null ? void 0 : re.z_index) || 0)), i.painting.groups = k, k;
  }
  function A(M, te, k) {
    var Ae;
    const oe = (Fe) => (Number(Fe || 0) % 1 + 1) % 1, re = [];
    for (const Fe of k) {
      const je = Fe == null ? void 0 : Fe.geometry, He = (je == null ? void 0 : je.geometryKind) === "lasso_fill" ? je == null ? void 0 : je.points : (je == null ? void 0 : je.processedPoints) || (je == null ? void 0 : je.rawPoints) || (je == null ? void 0 : je.points) || [];
      Array.isArray(He) && re.push(...He);
    }
    if (!re.length) return null;
    const be = oe(((Ae = re[0]) == null ? void 0 : Ae.u) || 0);
    let Ne = 0, Ee = 0;
    re.forEach((Fe) => {
      const je = oe((Fe == null ? void 0 : Fe.u) || 0);
      Ne += be + N(je, be), Ee += Number((Fe == null ? void 0 : Fe.v) || 0);
    });
    const Ve = (Ne / re.length % 1 + 1) % 1;
    let We = 1 / 0, Ge = -1 / 0, Ce = 1 / 0, ze = -1 / 0;
    re.forEach((Fe) => {
      const je = oe((Fe == null ? void 0 : Fe.u) || 0), He = N(je, Ve);
      We = Math.min(We, He), Ge = Math.max(Ge, He);
      const Ue = Number((Fe == null ? void 0 : Fe.v) || 0);
      Ce = Math.min(Ce, Ue), ze = Math.max(ze, Ue);
    });
    const le = k.reduce((Fe, je) => {
      const He = l(String((je == null ? void 0 : je.toolKind) || "pen")), Ue = Fn[He] || Fn[Dr], ft = Math.max(1, Number((je == null ? void 0 : je.size) || 10)) * Math.max(0.1, Number((Ue == null ? void 0 : Ue.sizeScale) ?? 1));
      return Math.max(Fe, ft);
    }, 0), Ie = Math.max(35e-4, le / 2048);
    return {
      centerUv: { u: ((Ve + (We + Ge) * 0.5) % 1 + 1) % 1, v: Oe((Ce + ze) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (Ge - We) * 0.5 + Ie,
      halfH: (ze - Ce) * 0.5 + Ie,
      uvPad: Ie
    };
  }
  function D(M, te, k) {
    const oe = String(M || "").trim();
    if (!oe) return null;
    const re = _e().find((Ne) => String((Ne == null ? void 0 : Ne.actionGroupId) || "") === oe);
    if (!re) return null;
    const be = k || F(oe, te);
    return re.frame = A(oe, te, be), re.frame;
  }
  function ee() {
    var oe;
    const M = z().map((re) => ({
      type: "sticker",
      id: String((re == null ? void 0 : re.id) || ""),
      z_index: Number((re == null ? void 0 : re.z_index) || 0),
      item: re
    })), te = $().map((re) => ({
      type: "strokeGroup",
      id: String((re == null ? void 0 : re.id) || (re == null ? void 0 : re.actionGroupId) || ""),
      actionGroupId: String((re == null ? void 0 : re.actionGroupId) || ""),
      z_index: Number((re == null ? void 0 : re.z_index) || 0),
      item: re
    })), k = (Array.isArray((oe = i.painting) == null ? void 0 : oe.raster_objects) ? i.painting.raster_objects : []).filter((re) => String((re == null ? void 0 : re.layerKind) || "paint") === "paint").map((re) => ({
      type: "rasterObject",
      id: String((re == null ? void 0 : re.id) || ""),
      z_index: Number((re == null ? void 0 : re.z_index) || 0),
      item: re
    }));
    return [...M, ...te, ...k].sort((re, be) => Number(re.z_index || 0) - Number(be.z_index || 0));
  }
  function se(M = !0) {
    var k, oe, re, be, Ne, Ee;
    const te = ee().filter((Ve) => Ve.type === "strokeGroup").map((Ve) => String(Ve.actionGroupId || "")).filter((Ve) => !!Ve);
    if (M) {
      const Ve = String(((oe = (k = r.interaction) == null ? void 0 : k.stroke) == null ? void 0 : oe.actionGroupId) || "").trim(), We = String(((be = (re = r.interaction) == null ? void 0 : re.stroke) == null ? void 0 : be.layerKind) || "").trim(), Ge = String(((Ee = (Ne = r.interaction) == null ? void 0 : Ne.stroke) == null ? void 0 : Ee.toolKind) || "").trim();
      Ve && We === "paint" && Ge !== "eraser" && !te.includes(Ve) && te.push(Ve);
    }
    return te;
  }
  function U(M = !0) {
    var Ee, Ve, We, Ge, Ce, ze;
    const te = ee();
    if (!M) return te;
    const k = String(((Ve = (Ee = r.interaction) == null ? void 0 : Ee.stroke) == null ? void 0 : Ve.actionGroupId) || "").trim(), oe = String(((Ge = (We = r.interaction) == null ? void 0 : We.stroke) == null ? void 0 : Ge.layerKind) || "").trim(), re = String(((ze = (Ce = r.interaction) == null ? void 0 : Ce.stroke) == null ? void 0 : ze.toolKind) || "").trim();
    if (!k || oe !== "paint" || re === "eraser" || te.some((le) => le.type === "strokeGroup" && String(le.actionGroupId || "") === k))
      return te;
    const be = f();
    let Ne = te.reduce((le, Ie) => Math.max(le, Number((Ie == null ? void 0 : Ie.z_index) || 0)), -1) + 1;
    return be && x(be) && String(be.actionGroupId || "") === k && (Ne = Number(be.z_index || 0)), [
      ...te,
      {
        type: "strokeGroup",
        id: k,
        actionGroupId: k,
        z_index: Ne,
        item: null
      }
    ].sort((le, Ie) => Number((le == null ? void 0 : le.z_index) || 0) - Number((Ie == null ? void 0 : Ie.z_index) || 0));
  }
  function b() {
    return _e().slice().sort((M, te) => Number((M == null ? void 0 : M.z_index) || 0) - Number((te == null ? void 0 : te.z_index) || 0)).map((M) => R(ve("paint", (M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))).filter(Boolean);
  }
  function Y() {
    var M;
    return (Array.isArray((M = i.painting) == null ? void 0 : M.raster_objects) ? i.painting.raster_objects : []).filter((te) => String((te == null ? void 0 : te.layerKind) || "paint") === "paint").slice().sort((te, k) => Number((te == null ? void 0 : te.z_index) || 0) - Number((k == null ? void 0 : k.z_index) || 0)).map((te) => g(he((te == null ? void 0 : te.id) || ""))).filter(Boolean);
  }
  function ue() {
    return Array.isArray(i.stickers) ? z() : [];
  }
  function C() {
    return [...Array.isArray(i.shots) ? i.shots : [], ...ue(), ...T()];
  }
  function W(M) {
    return !!M && Array.isArray(i.shots) && i.shots.includes(M);
  }
  function v(M) {
    return !!M && (Array.isArray(i.stickers) && i.stickers.includes(M) || Ht(M));
  }
  function B() {
    var M;
    return Array.isArray((M = i.painting) == null ? void 0 : M.raster_objects) ? i.painting.raster_objects : [];
  }
  function g(M) {
    const te = Se(M);
    if (!te) return null;
    const k = B().find((oe) => String((oe == null ? void 0 : oe.id) || "").trim() === te);
    return !k || String((k == null ? void 0 : k.layerKind) || "paint") !== "paint" ? null : {
      ...k,
      id: he(te),
      type: "rasterObject",
      rasterObjectId: te
    };
  }
  function S(M) {
    if (!M || typeof M != "object" || String(M.type || "") !== "rasterObject") return !1;
    const te = Se(M.rasterObjectId || M.id || "");
    return !!te && !!g(he(te));
  }
  function R(M) {
    const te = pe(M), k = String(te.actionGroupId || "").trim();
    if (!k) return null;
    const oe = _e().find((re) => String((re == null ? void 0 : re.id) || (re == null ? void 0 : re.actionGroupId) || "") === k || String((re == null ? void 0 : re.actionGroupId) || "") === k);
    return oe ? {
      ...oe,
      id: ve("paint", k),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: k
    } : null;
  }
  function x(M) {
    if (!M || typeof M != "object" || String(M.type || "") !== "strokeGroup") return !1;
    const te = String(M.actionGroupId || "").trim(), k = String(M.layerKind || "paint").trim() || "paint";
    return !!te && !!R(ve(k, te));
  }
  function F(M, te = null) {
    const k = pe(M, te), oe = String(k.actionGroupId || "").trim();
    return oe ? d(k.layerKind).filter((re) => String((re == null ? void 0 : re.actionGroupId) || "").trim() === oe) : [];
  }
  function L(M, te = "paint") {
    const k = String(M || "").trim(), re = `geomv5:${String(te || "paint").trim() || "paint"}:${k}:${r.mode}:${u()}`;
    if (r.mode === "frame") {
      const be = a(), Ne = String((be == null ? void 0 : be.id) || ""), Ee = be ? c(be) : null;
      return `${re}:frame:${Ne}:${Math.round(Number((be == null ? void 0 : be.yaw_deg) || 0) * 1e3)}:${Math.round(Number((be == null ? void 0 : be.pitch_deg) || 0) * 1e3)}:${Math.round(Number((be == null ? void 0 : be.roll_deg) ?? (be == null ? void 0 : be.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((be == null ? void 0 : be.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((be == null ? void 0 : be.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((Ee == null ? void 0 : Ee.x) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.y) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.w) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.h) || 0))}`;
    }
    return `${re}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function I(M, te, k) {
    return !M || typeof M != "object" ? M : {
      ...M,
      u: ((Number(M.u || 0) + Number(te || 0)) % 1 + 1) % 1,
      v: Oe(Number(M.v || 0) + Number(k || 0), 0, 1)
    };
  }
  function N(M, te) {
    let k = Number(M || 0) - Number(te || 0);
    for (; k > 0.5; ) k -= 1;
    for (; k < -0.5; ) k += 1;
    return k;
  }
  function E(M, te = null, k = null) {
    var We;
    const oe = pe(M, te), re = Array.isArray(k) ? k : F(oe.actionGroupId, oe.layerKind), be = [];
    if (re.forEach((Ge) => {
      const Ce = (Ge == null ? void 0 : Ge.geometry) || null, ze = (Ce == null ? void 0 : Ce.geometryKind) === "lasso_fill" ? Ce == null ? void 0 : Ce.points : (Ce == null ? void 0 : Ce.processedPoints) || (Ce == null ? void 0 : Ce.rawPoints) || (Ce == null ? void 0 : Ce.points) || [];
      Array.isArray(ze) && be.push(...ze);
    }), !be.length) return { u: 0.5, v: 0.5 };
    const Ne = Number(((We = be[0]) == null ? void 0 : We.u) || 0);
    let Ee = 0, Ve = 0;
    return be.forEach((Ge) => {
      Ee += Ne + N(Number((Ge == null ? void 0 : Ge.u) || 0), Ne), Ve += Number((Ge == null ? void 0 : Ge.v) || 0);
    }), {
      u: (Ee / be.length % 1 + 1) % 1,
      v: Oe(Ve / be.length, 0, 1)
    };
  }
  function _(M, te, k = 1, oe = 0) {
    if (!M || typeof M != "object") return M;
    const re = Number((te == null ? void 0 : te.u) || 0), be = Number((te == null ? void 0 : te.v) || 0), Ne = N(Number(M.u || 0), re), Ee = Number(M.v || 0) - be, Ve = Number(oe || 0) * Nr, We = Math.cos(Ve), Ge = Math.sin(Ve), Ce = Math.max(0.02, Number(k || 1)), ze = (Ne * We - Ee * Ge) * Ce, le = (Ne * Ge + Ee * We) * Ce;
    return {
      ...M,
      u: ((re + ze) % 1 + 1) % 1,
      v: Oe(be + le, 0, 1)
    };
  }
  function O(M, te, k, oe = null, re = null, be = null) {
    const Ne = pe(M, re), Ee = String(Ne.actionGroupId || "").trim();
    if (!Ee) return !1;
    const Ve = d(Ne.layerKind), We = Array.isArray(oe) ? new Map(oe.map((Ce) => [String((Ce == null ? void 0 : Ce.id) || ""), Ce])) : null;
    let Ge = !1;
    if (Ve.forEach((Ce) => {
      if (String((Ce == null ? void 0 : Ce.actionGroupId) || "").trim() !== Ee) return;
      const ze = (We == null ? void 0 : We.get(String((Ce == null ? void 0 : Ce.id) || ""))) || Ce, le = Ce == null ? void 0 : Ce.geometry, Ie = ze == null ? void 0 : ze.geometry;
      !le || !Ie || (Array.isArray(Ie.points) && (le.points = Ie.points.map((Ae) => I(Ae, te, k)), Ge = !0), Array.isArray(Ie.rawPoints) && (le.rawPoints = Ie.rawPoints.map((Ae) => I(Ae, te, k)), Ge = !0), Array.isArray(Ie.processedPoints) && (le.processedPoints = Ie.processedPoints.map((Ae) => I(Ae, te, k)), Ge = !0));
    }), Ge && be) {
      const Ce = _e().find((ze) => String((ze == null ? void 0 : ze.actionGroupId) || "") === Ee);
      Ce && (Ce.frame = null);
    }
    return Ge;
  }
  function Q(M, te = 1, k = 0, oe = null, re = null, be = null) {
    const Ne = pe(M, re), Ee = String(Ne.actionGroupId || "").trim();
    if (!Ee) return !1;
    const Ve = d(Ne.layerKind), We = Array.isArray(oe) ? oe : F(Ee, Ne.layerKind), Ge = Array.isArray(We) ? new Map(We.map((le) => [String((le == null ? void 0 : le.id) || ""), le])) : null, Ce = (be == null ? void 0 : be.centerUv) ?? E(Ee, Ne.layerKind, We);
    let ze = !1;
    if (Ve.forEach((le) => {
      if (String((le == null ? void 0 : le.actionGroupId) || "").trim() !== Ee) return;
      const Ie = (Ge == null ? void 0 : Ge.get(String((le == null ? void 0 : le.id) || ""))) || le, Ae = le == null ? void 0 : le.geometry, Fe = Ie == null ? void 0 : Ie.geometry;
      !Ae || !Fe || (Array.isArray(Fe.points) && (Ae.points = Fe.points.map((je) => _(je, Ce, te, k)), ze = !0), Array.isArray(Fe.rawPoints) && (Ae.rawPoints = Fe.rawPoints.map((je) => _(je, Ce, te, k)), ze = !0), Array.isArray(Fe.processedPoints) && (Ae.processedPoints = Fe.processedPoints.map((je) => _(je, Ce, te, k)), ze = !0));
    }), ze && be) {
      const le = _e().find((Ie) => String((Ie == null ? void 0 : Ie.actionGroupId) || "") === Ee);
      le && (le.frame = null);
    }
    return ze;
  }
  function me(M, te, k, oe = null) {
    const re = Se(M);
    if (!re) return !1;
    const be = B().find((Ge) => String((Ge == null ? void 0 : Ge.id) || "").trim() === re);
    if (!be) return !1;
    const Ne = oe && typeof oe == "object" ? oe : be, Ee = (Ne == null ? void 0 : Ne.transform) || {}, Ve = Number(Ee.du || 0) + Number(te || 0), We = Oe(Number(Ee.dv || 0) + Number(k || 0), -1, 1);
    return be.transform || (be.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), be.transform.du = Ve, be.transform.dv = We, !0;
  }
  function ye(M, te = 1, k = null) {
    const oe = Se(M);
    if (!oe) return !1;
    const re = B().find((We) => String((We == null ? void 0 : We.id) || "").trim() === oe);
    if (!re) return !1;
    const be = k && typeof k == "object" ? k : re, Ne = (be == null ? void 0 : be.transform) || {}, Ee = Math.max(0.01, Number(Ne.scale || 1)), Ve = Oe(Ee * Math.max(0.01, Number(te || 1)), 0.01, 100);
    return re.transform || (re.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), re.transform.scale = Ve, !0;
  }
  function xe() {
    return ne();
  }
  function de(M) {
    var te;
    return !M || typeof M != "object" ? !1 : o ? ((te = M.source) == null ? void 0 : te.kind) === "port" : String(M.id || "") === Jd || String(M.source_kind || "") === c2;
  }
  function we(M) {
    return !!(M && typeof M == "object" && M.visible === !1);
  }
  function V(M) {
    return de(M) && we(M) ? sg : 1;
  }
  function ce(M, te, k = 1, oe = 0) {
    if (!M || typeof M != "object") return M;
    const re = Number((te == null ? void 0 : te.u) || 0), be = Number((te == null ? void 0 : te.v) || 0), Ne = N(Number(M.u || 0), re), Ee = Number(M.v || 0) - be, Ve = Math.max(0.02, Number(k || 1)), We = Number(oe || 0) * Nr, Ge = Math.cos(We), Ce = Math.sin(We), ze = Ne / Ve, le = Ee / Ve, Ie = ze * Ge + le * Ce, Ae = -ze * Ce + le * Ge;
    return {
      ...M,
      u: ((re + Ie) % 1 + 1) % 1,
      v: be + Ae
    };
  }
  function H(M) {
    const te = (M == null ? void 0 : M.bbox) || null, k = (M == null ? void 0 : M.transform) || {};
    return te ? {
      u: (((Number(te.u0 || 0) + Number(te.u1 || 0)) * 0.5 + Number(k.du || 0)) % 1 + 1) % 1,
      v: Oe((Number(te.v0 || 0) + Number(te.v1 || 0)) * 0.5 + Number(k.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Z(M) {
    var Ve, We, Ge, Ce;
    const te = (M == null ? void 0 : M.bbox) || null;
    if (!te) return [];
    const k = {
      u: (Number(te.u0 || 0) + Number(te.u1 || 0)) * 0.5,
      v: (Number(te.v0 || 0) + Number(te.v1 || 0)) * 0.5
    }, oe = Math.max(0.01, Number(((Ve = M == null ? void 0 : M.transform) == null ? void 0 : Ve.scale) || 1)), re = Number(((We = M == null ? void 0 : M.transform) == null ? void 0 : We.rot_deg) || 0), be = Number(((Ge = M == null ? void 0 : M.transform) == null ? void 0 : Ge.du) || 0), Ne = Number(((Ce = M == null ? void 0 : M.transform) == null ? void 0 : Ce.dv) || 0);
    return [
      { u: Number(te.u0 || 0), v: Number(te.v0 || 0) },
      { u: Number(te.u1 || 0), v: Number(te.v0 || 0) },
      { u: Number(te.u1 || 0), v: Number(te.v1 || 0) },
      { u: Number(te.u0 || 0), v: Number(te.v1 || 0) }
    ].map((ze) => I(_(ze, k, oe, re), be, Ne));
  }
  function G(M) {
    const te = Se((M == null ? void 0 : M.rasterObjectId) || (M == null ? void 0 : M.id) || ""), k = (M == null ? void 0 : M.transform) || {}, oe = (M == null ? void 0 : M.bbox) || {}, re = `${te}:${r.mode}:${u()}:${oe.u0}:${oe.v0}:${oe.u1}:${oe.v1}:${k.du}:${k.dv}:${k.rot_deg}:${k.scale}`;
    if (r.mode === "frame") {
      const be = a(), Ne = be ? c(be) : null;
      return `${re}:frame:${String((be == null ? void 0 : be.id) || "")}:${Math.round(Number((Ne == null ? void 0 : Ne.x) || 0))}:${Math.round(Number((Ne == null ? void 0 : Ne.y) || 0))}:${Math.round(Number((Ne == null ? void 0 : Ne.w) || 0))}:${Math.round(Number((Ne == null ? void 0 : Ne.h) || 0))}`;
    }
    return `${re}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function q(M) {
    const te = String((M == null ? void 0 : M.id) || ""), k = W(M) ? "frame" : v(M) ? "sticker" : "item", oe = j(M), re = [
      k,
      te,
      r.mode,
      Number((oe == null ? void 0 : oe.yaw_deg) || 0).toFixed(4),
      Number((oe == null ? void 0 : oe.pitch_deg) || 0).toFixed(4),
      Number((oe == null ? void 0 : oe.hFOV_deg) || 0).toFixed(4),
      Number((oe == null ? void 0 : oe.vFOV_deg) || 0).toFixed(4),
      Number((oe == null ? void 0 : oe.rot_deg) || 0).toFixed(4),
      Number((oe == null ? void 0 : oe.roll_deg) || 0).toFixed(4),
      Vr(oe),
      P(M) && w(M)
    ].join(":");
    if (r.mode === "frame") {
      const be = a(), Ne = be ? c(be) : null;
      return `${re}:frame:${String((be == null ? void 0 : be.id) || "")}:${Math.round(Number((Ne == null ? void 0 : Ne.x) || 0))}:${Math.round(Number((Ne == null ? void 0 : Ne.y) || 0))}:${Math.round(Number((Ne == null ? void 0 : Ne.w) || 0))}:${Math.round(Number((Ne == null ? void 0 : Ne.h) || 0))}`;
    }
    return `${re}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function K() {
    ee().forEach((te, k) => {
      te.type === "sticker" && te.item && (te.item.z_index = k), te.type === "strokeGroup" && te.item && (te.item.z_index = k), te.type === "rasterObject" && te.item && (te.item.z_index = k);
    });
  }
  return {
    connect(M) {
      ({
        getActiveCutoutShot: a,
        getBrushPresetIdForTool: l,
        getFrameViewRect: c,
        getPaintingLayerList: d,
        getPaintingRevisionKey: u,
        getSelected: f,
        getStickerImage: p,
        sceneStickerShown: w,
        upstreamStickerImage: m,
        upstreamStickers: h
      } = M);
    },
    getList: y,
    skyStickers: z,
    upstreamSkyStickers: T,
    stickerById: ie,
    isSceneSticker: P,
    isUploadingSticker: X,
    poseOf: j,
    writePose: J,
    getPaintingGroupList: _e,
    makeStrokeGroupSelectionId: ve,
    makeRasterObjectSelectionId: he,
    parseRasterObjectSelectionId: Se,
    ensurePaintingGroupEntry: ae,
    getFrameCornersUv: fe,
    ensureGroupFrame: D,
    getDisplayListObjects: ee,
    getOrderedPaintGroupIds: se,
    getOrderedDisplayListObjects: U,
    getSelectableStrokeGroupItems: b,
    getSelectableRasterObjectItems: Y,
    cutoutStickers: ue,
    getCutoutSelectableItems: C,
    isShotItem: W,
    isStickerItem: v,
    getRasterObjectList: B,
    getRasterObjectItem: g,
    isRasterObjectItem: S,
    getStrokeGroupItem: R,
    isStrokeGroupItem: x,
    getStrokeGroupStrokes: F,
    getStrokeGeomCacheKey: L,
    shortestWrappedDelta: N,
    getStrokeGroupCenterUv: E,
    applyStrokeGroupOffset: O,
    applyStrokeGroupTransform: Q,
    applyRasterObjectOffset: me,
    applyRasterObjectTransform: ye,
    getNextStickerZIndex: xe,
    isExternalSticker: de,
    isStickerHidden: we,
    getStickerDisplayAlpha: V,
    inverseTransformErpPointAround: ce,
    getRasterObjectCenterUv: H,
    getRasterObjectTransformedErpPoints: Z,
    getRasterObjectGeomCacheKey: G,
    getSceneItemGeomCacheKey: q,
    normalizeDisplayZIndices: K
  };
}
function cA(e) {
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
  let c, d, u, f, p, w, m, h, y, z, T, ie, P, X, j, J, _e, ke, ge, ve, he, Se, pe, ne, ae, fe, $, A, D, ee, se, U, b;
  function Y() {
    const G = String(t.selectedId || "");
    if (!G) return null;
    const q = P(G);
    if (q) return q;
    const K = z(G);
    return K || (o ? w().find((M) => String((M == null ? void 0 : M.id) || "") === G) || null : h().find((M) => String((M == null ? void 0 : M.id) || "") === G) || null);
  }
  function ue() {
    const G = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], q = [], K = /* @__PURE__ */ new Set();
    return G.forEach((M) => {
      const te = String(M || "").trim();
      if (!te || K.has(te)) return;
      K.add(te);
      const k = te === String(t.selectedId || "") ? Y() : P(te) || z(te) || (o ? w().find((oe) => String((oe == null ? void 0 : oe.id) || "") === te) : h().find((oe) => String((oe == null ? void 0 : oe.id) || "") === te));
      k && q.push(k);
    }), q;
  }
  function C(G = null) {
    const q = Array.isArray(G) ? G : ue();
    if (!q || q.length < 2) return null;
    const K = q.map((Ne) => ne(Ne)).filter((Ne) => (Ne == null ? void 0 : Ne.visible) && Array.isArray(Ne.corners) && Ne.corners.length);
    if (!K.length) return null;
    const M = K.flatMap((Ne) => Ne.corners.map((Ee) => Number((Ee == null ? void 0 : Ee.x) || 0))), te = K.flatMap((Ne) => Ne.corners.map((Ee) => Number((Ee == null ? void 0 : Ee.y) || 0))), k = Math.min(...M), oe = Math.max(...M), re = Math.min(...te), be = Math.max(...te);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (k + oe) * 0.5, y: (re + be) * 0.5 },
      corners: [
        { x: k, y: re },
        { x: oe, y: re },
        { x: oe, y: be },
        { x: k, y: be }
      ],
      edgeMidpoints: [
        { edge: "top", x: (k + oe) * 0.5, y: re, a: { x: k, y: re }, b: { x: oe, y: re } },
        { edge: "right", x: oe, y: (re + be) * 0.5, a: { x: oe, y: re }, b: { x: oe, y: be } },
        { edge: "bottom", x: (k + oe) * 0.5, y: be, a: { x: oe, y: be }, b: { x: k, y: be } },
        { edge: "left", x: k, y: (re + be) * 0.5, a: { x: k, y: be }, b: { x: k, y: re } }
      ],
      rotateStemBase: { x: (k + oe) * 0.5, y: re },
      rotateHandle: { x: (k + oe) * 0.5, y: re - 30 }
    };
  }
  function W(G) {
    const q = String((G == null ? void 0 : G.id) || "").trim();
    return !!q && Array.isArray(t.selectedIds) && t.selectedIds.includes(q);
  }
  function v() {
    const G = Y();
    return G ? he(G) || J(G) ? "stroke" : ke(G) ? "frame" : "image" : null;
  }
  function B(G) {
    if (!G || typeof G != "object") return !1;
    if (he(G)) {
      const q = String(G.actionGroupId || G.id || "").trim(), K = y().find((M) => String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || "").trim() === q);
      return (K == null ? void 0 : K.locked) === !0;
    }
    if (J(G)) {
      const q = fe(G.rasterObjectId || G.id || ""), K = T().find((M) => String((M == null ? void 0 : M.id) || "").trim() === q);
      return (K == null ? void 0 : K.locked) === !0;
    }
    return Ht(G) && !wl(G) ? !0 : G.locked === !0;
  }
  function g(G = null) {
    const q = Array.isArray(G) ? G : ue();
    return q.length > 0 && q.every((K) => B(K));
  }
  function S(G, q) {
    const K = q === !0;
    if (!G || typeof G != "object") return !1;
    if (he(G)) {
      const M = String(G.actionGroupId || G.id || "").trim(), te = y().find((k) => String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim() === M);
      return !te || te.locked === K ? !1 : (te.locked = K, !0);
    }
    if (J(G)) {
      const M = fe(G.rasterObjectId || G.id || ""), te = T().find((k) => String((k == null ? void 0 : k.id) || "").trim() === M);
      return !te || te.locked === K ? !1 : (te.locked = K, !0);
    }
    return G.locked === K || Ht(G) && !wl(G) ? !1 : (G.locked = K, !0);
  }
  function R() {
    if (r) return;
    const G = ue();
    if (!G.length) return;
    const q = !g(G);
    let K = !1;
    G.forEach((M) => {
      S(M, q) && (K = !0);
    }), K && (A(), d(), U(), b(), D());
  }
  function x(G) {
    de(), a.selection = null, t.selectedId = (G == null ? void 0 : G.id) || null, t.selectedIds = G != null && G.id ? [G.id] : [], G && ve(G) && !Ht(G) ? s.active.selected_sticker_id = G.id || null : s.active.selected_sticker_id = null, G && ke(G) ? s.active.selected_shot_id = G.id || null : G ? ke(G) || (s.active.selected_shot_id = s.active.selected_shot_id) : s.active.selected_shot_id = null;
  }
  function F(G, q = null) {
    const K = [], M = /* @__PURE__ */ new Set();
    (Array.isArray(G) ? G : []).forEach((oe) => {
      const re = String((oe == null ? void 0 : oe.id) || "").trim();
      !re || M.has(re) || (M.add(re), K.push(re));
    }), t.selectedIds = K, de(), a.selection = null;
    const te = String(q || "").trim();
    t.selectedId = te && K.includes(te) ? te : K[K.length - 1] || null;
    const k = Y();
    s.active.selected_sticker_id = k && ve(k) && !Ht(k) && k.id || null, k && ke(k) ? s.active.selected_shot_id = k.id || null : K.length || (s.active.selected_shot_id = null);
  }
  function L() {
    const G = (Array.isArray(s.shots) ? s.shots : []).map((K, M) => ({
      kind: "frame",
      item: K,
      label: String((K == null ? void 0 : K.label) || `Frame ${M + 1}`)
    })), q = f().map((K, M) => {
      var k, oe;
      const te = j(K) ? String(K.id || Jd) : String(((oe = (k = s.assets) == null ? void 0 : k[K.asset_id]) == null ? void 0 : oe.name) || K.asset_id || K.id || `Image ${M + 1}`);
      return {
        kind: "image",
        item: K,
        label: te
      };
    });
    return [...G, ...q];
  }
  function I(G) {
    return G === "frame" ? Ke.camera : G === "stroke" ? Ke.paintbrush_vertical_tool : Ke.image;
  }
  function N(G) {
    return !G || !G.item ? {
      label: String((G == null ? void 0 : G.label) || ""),
      icon: null
    } : {
      label: String(G.label || ""),
      icon: I(G.kind)
    };
  }
  function E() {
    if (r) return;
    const G = Y();
    !G || !j(G) || (G.visible = ge(G), ce(), Se(), A(), d(), b(), U(), D());
  }
  function _() {
    if (r || l !== "stickers") return;
    const G = Y();
    if (!G || !j(G)) return;
    const q = G.initial_pose;
    if (!q || typeof q != "object") return;
    G.yaw_deg = Number(q.yaw_deg ?? G.yaw_deg ?? 0), G.pitch_deg = Number(q.pitch_deg ?? G.pitch_deg ?? 0), G.hFOV_deg = Number(q.hFOV_deg ?? G.hFOV_deg ?? 30);
    const K = ie(Di, () => {
      D();
    });
    K && (K.complete || K.naturalWidth || K.width) ? G.vFOV_deg = u(
      Number(q.hFOV_deg ?? G.hFOV_deg ?? 30),
      Number(K.naturalWidth || K.width || 1),
      Number(K.naturalHeight || K.height || 1)
    ) : G.vFOV_deg = Number(q.vFOV_deg ?? G.vFOV_deg ?? 30), G.rot_deg = Number(q.rot_deg ?? G.rot_deg ?? 0), A(), d(), b(), U(), D();
  }
  function O(G) {
    if (!G || !j(G)) return null;
    const q = G.initial_pose;
    if (!q || typeof q != "object") return null;
    const K = {
      yaw_deg: Number(q.yaw_deg ?? G.yaw_deg ?? 0),
      pitch_deg: Number(q.pitch_deg ?? G.pitch_deg ?? 0),
      hFOV_deg: Number(q.hFOV_deg ?? G.hFOV_deg ?? 30),
      vFOV_deg: Number(q.vFOV_deg ?? G.vFOV_deg ?? 30),
      rot_deg: Number(q.rot_deg ?? G.rot_deg ?? 0)
    }, M = ie(Di, () => {
      D();
    });
    return M && (M.complete || M.naturalWidth || M.width) && (K.vFOV_deg = u(
      K.hFOV_deg,
      Number(M.naturalWidth || M.width || 1),
      Number(M.naturalHeight || M.height || 1)
    )), K;
  }
  function Q() {
    const G = Y();
    if (!G || !j(G)) return !1;
    const q = O(G);
    if (!q) return !1;
    const K = (M, te) => Math.abs(Number(M || 0) - Number(te || 0)) <= 1e-4;
    return !(K(G.yaw_deg, q.yaw_deg) && K(G.pitch_deg, q.pitch_deg) && K(G.hFOV_deg, q.hFOV_deg) && K(G.vFOV_deg, q.vFOV_deg) && K(G.rot_deg, q.rot_deg));
  }
  function me(G = {}) {
    const K = G.preservePanelValues !== !1 ? $(Y()) : null;
    K && (t.panelLastValues = {
      yaw_deg: Number(K.yaw_deg || 0),
      pitch_deg: Number(K.pitch_deg || 0),
      hFOV_deg: Number(K.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(K.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(K.rot_deg || 0),
      roll_deg: Number(K.roll_deg || 0),
      aspect_id: Vr(K)
    }), t.selectedId = null, t.selectedIds = [], de(), t.cutoutAspectOpen = !1, s.active.selected_sticker_id = null, s.active.selected_shot_id = null;
  }
  function ye() {
    if (!i || !t.worldSelectedId) return null;
    const G = se(t.worldSelectedId);
    return (G == null ? void 0 : G.placement) === "world" ? G : null;
  }
  function xe(G) {
    x(null), t.worldSelectedId = G, n.backgroundDirty = !0;
  }
  function de() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function we(G) {
    return !!G && !r && !B(G);
  }
  function V() {
    if (l !== "cutout") return;
    const G = p();
    G && (t.selectedId = String(G.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function ce() {
    var q;
    const G = Y();
    (_e(G) && !ee(G) || t.selectedId === Sd && X() && !c() || v() === "stroke" && !ae()) && x(null), ((q = ye()) == null ? void 0 : q.visible) === !1 && de();
  }
  function H() {
    if (r) return;
    const G = ue();
    if (!Y() || G.length === 0 || G.some(Ht) || G.some((re) => B(re))) return;
    pe();
    const K = m(), M = new Set(G.map((re) => ve(re) ? `sticker:${String(re.id || "")}` : J(re) ? `rasterObject:${fe(re.rasterObjectId || re.id || "")}` : `strokeGroup:${String(re.actionGroupId || re.id || "")}`)), te = [], k = [];
    if (K.forEach((re) => {
      var Ne, Ee;
      const be = re.type === "sticker" ? `sticker:${String(((Ne = re.item) == null ? void 0 : Ne.id) || "")}` : re.type === "rasterObject" ? `rasterObject:${String(((Ee = re.item) == null ? void 0 : Ee.id) || re.id || "")}` : `strokeGroup:${String(re.actionGroupId || "")}`;
      M.has(be) ? te.push(re) : k.push(re);
    }), !te.length || te[te.length - 1] === K[K.length - 1]) return;
    [...k, ...te].forEach((re, be) => {
      re.type === "sticker" && re.item && (re.item.z_index = be), re.type === "strokeGroup" && re.item && (re.item.z_index = be), re.type === "rasterObject" && re.item && (re.item.z_index = be);
    }), Se(), A(), d(), U(), D();
  }
  function Z() {
    if (r) return;
    const G = ue();
    if (!Y() || G.length === 0 || G.some(Ht) || G.some((re) => B(re))) return;
    pe();
    const K = m(), M = new Set(G.map((re) => ve(re) ? `sticker:${String(re.id || "")}` : J(re) ? `rasterObject:${fe(re.rasterObjectId || re.id || "")}` : `strokeGroup:${String(re.actionGroupId || re.id || "")}`)), te = [], k = [];
    if (K.forEach((re) => {
      var Ne, Ee;
      const be = re.type === "sticker" ? `sticker:${String(((Ne = re.item) == null ? void 0 : Ne.id) || "")}` : re.type === "rasterObject" ? `rasterObject:${String(((Ee = re.item) == null ? void 0 : Ee.id) || re.id || "")}` : `strokeGroup:${String(re.actionGroupId || "")}`;
      M.has(be) ? te.push(re) : k.push(re);
    }), !te.length || te[0] === K[0]) return;
    [...te, ...k].forEach((re, be) => {
      re.type === "sticker" && re.item && (re.item.z_index = be), re.type === "strokeGroup" && re.item && (re.item.z_index = be), re.type === "rasterObject" && re.item && (re.item.z_index = be);
    }), Se(), A(), d(), U(), D();
  }
  return {
    connect(G) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: d,
        computeStickerVFov: u,
        cutoutStickers: f,
        getActiveCutoutShot: p,
        getCutoutSelectableItems: w,
        getDisplayListObjects: m,
        getList: h,
        getPaintingGroupList: y,
        getRasterObjectItem: z,
        getRasterObjectList: T,
        getStickerUiImage: ie,
        getStrokeGroupItem: P,
        hasCamera: X,
        isExternalSticker: j,
        isRasterObjectItem: J,
        isSceneSticker: _e,
        isShotItem: ke,
        isStickerHidden: ge,
        isStickerItem: ve,
        isStrokeGroupItem: he,
        markObjectVisualsDirty: Se,
        normalizeDisplayZIndices: pe,
        objectGeom: ne,
        paintingShown: ae,
        parseRasterObjectSelectionId: fe,
        poseOf: $,
        pushHistory: A,
        requestDraw: D,
        sceneStickerShown: ee,
        stickerById: se,
        updateSelectionMenu: U,
        updateSidePanel: b
      } = G);
    },
    getSelected: Y,
    getSelectedItems: ue,
    getMultiSelectionGeom: C,
    isItemSelected: W,
    getSelectedKind: v,
    isItemLocked: B,
    areAllSelectedItemsLocked: g,
    toggleSelectedLock: R,
    setSelectedItem: x,
    setSelectedItems: F,
    getCutoutInspectorItems: L,
    getSelectionItemIcon: I,
    getSelectionItemLabelData: N,
    toggleSelectedExternalStickerVisibility: E,
    restoreSelectedToInitialPose: _,
    canRestoreSelectedToInitial: Q,
    clearSelection: me,
    selectedWorldSticker: ye,
    selectWorldSticker: xe,
    clearWorldSelection: de,
    worldStickerEditable: we,
    applyInitialCutoutFocus: V,
    releaseHiddenSelection: ce,
    bringSelectedToFront: H,
    sendSelectedToBack: Z
  };
}
function uA(e) {
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
    const Y = J({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !Y || Y.length !== 4 ? !1 : Y[0].y >= Y[3].y;
  }
  function m() {
    return ag({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function h() {
    const b = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return b.some((Y, ue) => Y !== f.key[ue]) && (f = { key: b, projection: cg(m(), r.width, r.height) }), f.projection;
  }
  function y(b) {
    const Y = h().project(b);
    return Y.z > 1e-4 ? Y : null;
  }
  function z(b, Y) {
    return h().ray(b, Y);
  }
  function T() {
    const b = r.width, Y = r.height, ue = 2;
    if (b / Math.max(Y, 1) >= ue) {
      const g = Y, S = g * ue;
      return { x: (b - S) * 0.5, y: 0, w: S, h: g };
    }
    const W = b, v = W / ue;
    return { x: 0, y: (Y - v) * 0.5, w: W, h: v };
  }
  function ie(b) {
    return {
      lon: Math.atan2(b.x, b.z),
      lat: Math.asin(Oe(b.y, -1, 1))
    };
  }
  function P(b, Y = null) {
    const { lon: ue, lat: C } = ie(b), W = T();
    let v = W.x + (ue / (2 * Math.PI) + 0.5) * W.w;
    const B = W.y + (0.5 - C / Math.PI) * W.h;
    if (Y !== null) {
      for (; v - Y > W.w / 2; ) v -= W.w;
      for (; v - Y < -W.w / 2; ) v += W.w;
    }
    return { x: v, y: B, z: 1 };
  }
  function X(b) {
    const Y = c(b), ue = wo(
      Number(Y.yaw_deg || 0),
      Number(Y.pitch_deg || 0),
      Number(Y.rot_deg || Y.roll_deg || 0)
    ), C = Math.tan(Oe(Number(Y.hFOV_deg || 20), 0.1, 179) * 0.5 * Nr), W = Math.tan(Oe(Number(Y.vFOV_deg || 20), 0.1, 179) * 0.5 * Nr);
    return {
      centerDir: ue.fwd,
      right: ue.right,
      up: ue.up,
      tanX: C,
      tanY: W
    };
  }
  function j(b, Y, ue) {
    return w2($p($p(b.centerDir, zp(b.right, Y)), zp(b.up, ue)));
  }
  function J(b) {
    const Y = X(b);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: C, v: W }) => j(Y, C * Y.tanX, W * Y.tanY));
  }
  function _e(b, Y, ue) {
    const C = X(b), W = (Y * 2 - 1) * C.tanX, v = (1 - ue * 2) * C.tanY;
    return j(C, W, v);
  }
  function ke(b) {
    const Y = t.width / Math.max(1, r.width), ue = t.height / Math.max(1, r.height);
    return { x: b.x * Y, y: b.y * ue, w: b.w * Y, h: b.h * ue };
  }
  function ge(b, Y = null, ue = null, C = null) {
    if (n.mode === "frame") {
      const W = Y || a();
      if (!W) return [];
      const v = ue || l(W);
      return A(b, W, v);
    }
    return ae(b, C);
  }
  function ve(b, Y = null, ue = null, C = null, W = null) {
    if (!b) return null;
    if (n.mode === "unwrap") {
      const B = ae([b], W);
      return B[0] ? { x: B[0].x, y: B[0].y, z: 1 } : null;
    }
    const v = Se(b);
    return v ? d(v, Y, ue, C) : null;
  }
  function he(b, Y) {
    if (!b || !Y) return null;
    const ue = Number(Y.x || 0), C = Number(Y.y || 0);
    return _e(b, ue, C);
  }
  function Se(b) {
    if (!b) return null;
    const Y = (Number(b.u || 0) - 0.5) * (2 * Math.PI), ue = (0.5 - Number(b.v || 0)) * Math.PI, C = Math.cos(ue);
    return Jl(C * Math.sin(Y), Math.sin(ue), C * Math.cos(Y));
  }
  function pe(b, Y) {
    if (!b || !Y) return null;
    const ue = X(b), C = jc(Y, ue.centerDir);
    if (!Number.isFinite(C) || C <= 1e-6) return null;
    const W = jc(Y, ue.right) / C, v = jc(Y, ue.up) / C;
    return {
      x: (W / Math.max(1e-6, ue.tanX) + 1) * 0.5,
      y: (1 - v / Math.max(1e-6, ue.tanY)) * 0.5
    };
  }
  function ne(b) {
    if (!Array.isArray(b) || b.length < 3) return [];
    if (n.mode === "unwrap") {
      const ue = T();
      return b.map((C) => ({
        x: ue.x + Number(C.u || 0) * ue.w,
        y: ue.y + Number(C.v || 0) * ue.h
      }));
    }
    const Y = b.map((ue) => y(Se(ue))).filter(Boolean);
    return Y.every((ue) => Number(ue.z || 0) > 0) ? Y.map((ue) => ({ x: Number(ue.x || 0), y: Number(ue.y || 0) })) : [];
  }
  function ae(b, Y = null) {
    if (!Array.isArray(b) || b.length < 1) return [];
    if (n.mode === "unwrap") {
      const C = T();
      return b.map((W) => {
        const v = (Number(W.u || 0) % 1 + 1) % 1, B = Y == null ? v : Number(Y || 0) + u(v, Y);
        return {
          x: C.x + B * C.w,
          y: C.y + Number(W.v || 0) * C.h
        };
      });
    }
    const ue = b.map((C) => y(Se(C))).filter(Boolean);
    return ue.every((C) => Number(C.z || 0) > 0) ? ue.map((C) => ({ x: Number(C.x || 0), y: Number(C.y || 0) })) : [];
  }
  function fe(b, Y = 160) {
    if (!Array.isArray(b) || b.length < 3) return !1;
    for (let ue = 0; ue < b.length; ue += 1) {
      const C = b[ue], W = b[(ue + 1) % b.length];
      if (!C || !W || !Number.isFinite(C.x) || !Number.isFinite(C.y) || !Number.isFinite(W.x) || !Number.isFinite(W.y) || Math.hypot(Number(W.x) - Number(C.x), Number(W.y) - Number(C.y)) > Y) return !1;
    }
    return !0;
  }
  function $(b, Y, ue) {
    if (!Array.isArray(b) || b.length < 3 || !Y || !ue) return [];
    const C = [];
    for (const W of b) {
      const v = Se(W), B = pe(Y, v);
      if (!B) return [];
      C.push({
        x: Number(ue.x || 0) + Number(B.x || 0) * Number(ue.w || 0),
        y: Number(ue.y || 0) + Number(B.y || 0) * Number(ue.h || 0)
      });
    }
    return fe(C, Math.max(80, Math.max(ue.w, ue.h) * 0.75)) ? C : [];
  }
  function A(b, Y, ue) {
    if (!Array.isArray(b) || b.length < 1 || !Y || !ue) return [];
    const C = [];
    for (const W of b) {
      const v = Se(W), B = pe(Y, v);
      B && C.push({
        x: Number(ue.x || 0) + Number(B.x || 0) * Number(ue.w || 0),
        y: Number(ue.y || 0) + Number(B.y || 0) * Number(ue.h || 0)
      });
    }
    return C;
  }
  function D(b) {
    const Y = r.getBoundingClientRect();
    return {
      x: (b.clientX - Y.left) / Y.width * r.width,
      y: (b.clientY - Y.top) / Y.height * r.height
    };
  }
  function ee(b) {
    const Y = r.getBoundingClientRect();
    return {
      x: Number(b.clientX) - Number(Y.left || 0),
      y: Number(b.clientY) - Number(Y.top || 0)
    };
  }
  function se(b, Y = performance.now()) {
    if (n.mode === "unwrap") {
      const v = T(), B = (b.x - v.x) / Math.max(1, v.w), g = (b.y - v.y) / Math.max(1, v.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (B % 1 + 1) % 1,
        v: Oe(g, 0, 1),
        t: Number(Y || 0)
      };
    }
    const ue = z(b.x, b.y), { lon: C, lat: W } = ie(ue);
    return {
      targetKind: "ERP_GLOBAL",
      u: (C / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Oe(0.5 - W / Math.PI, 0, 1),
      t: Number(Y || 0)
    };
  }
  function U(b, Y, ue = performance.now()) {
    const C = l(Y);
    if (!C) return null;
    const W = {
      x: (Number(b.x) - C.x) / Math.max(1, C.w),
      y: (Number(b.y) - C.y) / Math.max(1, C.h)
    };
    if (W.x < 0 || W.x > 1 || W.y < 0 || W.y > 1) return null;
    const v = he(Y, W);
    if (!v) return null;
    const { lon: B, lat: g } = ie(v);
    return {
      targetKind: "ERP_GLOBAL",
      u: (B / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Oe(0.5 - g / Math.PI, 0, 1),
      t: Number(ue || 0)
    };
  }
  return {
    connect(b) {
      ({
        cameraShoots: s,
        getActiveCutoutShot: a,
        getFrameViewRect: l,
        poseOf: c,
        projectSceneItemDir: d,
        shortestWrappedDelta: u
      } = b);
    },
    isErpCamera: p,
    currentViewCamera: m,
    currentViewProjection: h,
    projectDir: y,
    screenToWorldDir: z,
    getUnwrapRect: T,
    projectDirUnwrap: P,
    getStickerFrame: X,
    stickerDirFromFrame: j,
    stickerCornersDir: J,
    stickerSampleDir: _e,
    stickerCornerOrderSanity: w,
    projectEditorPoints: ge,
    projectErpPointToEditor: ve,
    frameLocalPointToWorldDir: he,
    erpPointToWorldDir: Se,
    worldDirToFrameLocalPoint: pe,
    projectLassoPointsToCurrentView: ne,
    projectErpLassoPointsToFrameRect: $,
    screenPos: D,
    screenPosCss: ee,
    screenPosToErpPoint: se,
    screenPosToFrameAsErpPoint: U,
    deviceRect: ke
  };
}
function dA(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, s, a, l, c, d, u, f, p, w, m, h, y, z, T, ie, P, X, j, J, _e, ke, ge, ve, he, Se, pe, ne, ae, fe, $, A;
  function D(v, B) {
    const g = String(v.actionGroupId || v.id || "").trim(), S = T(g, v.layerKind), R = a(g, v.layerKind, S), x = (R == null ? void 0 : R.centerUv) || z(g, v.layerKind, S), F = n.mode === "unwrap" ? Number((x == null ? void 0 : x.u) || 0) : null, L = [], I = n.mode === "frame" ? l() : null, N = I ? u(I) : null;
    for (const V of S) {
      const ce = (V == null ? void 0 : V.geometry) || null, H = (ce == null ? void 0 : ce.geometryKind) === "lasso_fill" ? ce == null ? void 0 : ce.points : (ce == null ? void 0 : ce.processedPoints) || (ce == null ? void 0 : ce.rawPoints) || (ce == null ? void 0 : ce.points) || [], Z = Se(H, I, N, F).filter((K) => Number.isFinite(K == null ? void 0 : K.x) && Number.isFinite(K == null ? void 0 : K.y));
      if (!Z.length) continue;
      const G = c(String((V == null ? void 0 : V.toolKind) || "pen")), q = Fn[G] || Fn[Dr];
      L.push({
        points: Z,
        closed: String((ce == null ? void 0 : ce.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((V == null ? void 0 : V.size) || 10) * Math.max(0.1, Number((q == null ? void 0 : q.sizeScale) ?? 1)) + 10),
        layerKind: String((V == null ? void 0 : V.layerKind) || v.layerKind || "paint")
      });
    }
    const E = pe(x, null, I, N, F);
    if (!E) {
      const V = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(B, V), V;
    }
    const O = d(R).map((V) => pe(V, E.x, I, N, F)).filter((V) => Number.isFinite(V == null ? void 0 : V.x) && Number.isFinite(V == null ? void 0 : V.y)).map((V) => ({ x: Number(V.x || 0), y: Number(V.y || 0) }));
    if (O.length < 4) {
      const V = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(B, V), V;
    }
    const Q = (V, ce) => ({
      x: (Number((V == null ? void 0 : V.x) || 0) + Number((ce == null ? void 0 : ce.x) || 0)) * 0.5,
      y: (Number((V == null ? void 0 : V.y) || 0) + Number((ce == null ? void 0 : ce.y) || 0)) * 0.5,
      a: V,
      b: ce
    }), me = Q(O[0], O[1]), ye = Q(O[1], O[2]), xe = Q(O[2], O[3]), de = Q(O[3], O[0]), we = {
      kind: "strokeGroup",
      center: { x: Number(E.x || 0), y: Number(E.y || 0) },
      corners: O,
      edgeMidpoints: [
        { edge: "top", ...me },
        { edge: "right", ...ye },
        { edge: "bottom", ...xe },
        { edge: "left", ...de }
      ],
      rotateStemBase: { x: me.x, y: me.y },
      rotateHandle: { x: me.x, y: me.y - 30 },
      strokePaths: L,
      visible: !0
    };
    return n._strokeGeomCache.set(B, we), we;
  }
  function ee(v, B) {
    const g = n.mode === "frame" ? l() : null, S = g ? u(g) : null, R = f(v), x = n.mode === "unwrap" ? Number((R == null ? void 0 : R.u) || 0) : null, F = pe(R, null, g, S, x), I = w(v).map((O) => pe(O, (F == null ? void 0 : F.x) ?? null, g, S, x)).filter((O) => Number.isFinite(O == null ? void 0 : O.x) && Number.isFinite(O == null ? void 0 : O.y));
    if (!Array.isArray(I) || I.length < 4) {
      const O = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(B, O), O;
    }
    const N = I.slice(0, 4).map((O) => ({ x: Number((O == null ? void 0 : O.x) || 0), y: Number((O == null ? void 0 : O.y) || 0) })), _ = {
      kind: "rasterObject",
      center: {
        x: N.reduce((O, Q) => O + Number(Q.x || 0), 0) / N.length,
        y: N.reduce((O, Q) => O + Number(Q.y || 0), 0) / N.length
      },
      corners: N,
      visible: !0
    };
    return n._strokeGeomCache.set(B, _), _;
  }
  function se(v, B = null, g = null, S = null, R = {}) {
    if (n.mode === "frame") {
      const E = g || l(), _ = S || u(E);
      if (!E || !_) return null;
      const O = E ? A(E, v) : null;
      return O ? {
        x: Number(_.x || 0) + Number(O.x || 0) * Number(_.w || 0),
        y: Number(_.y || 0) + Number(O.y || 0) * Number(_.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return he(v, B);
    const x = 1e-4, F = o().project(v, x);
    if (!Number.isFinite(F.z) || F.z <= x && !(R != null && R.clipBehind)) return null;
    const L = r.width, I = r.height, N = Math.max(L, I) * 2;
    return {
      x: Oe(F.x, -N, L + N),
      y: Oe(F.y, -N, I + N),
      z: Math.max(F.z, x),
      rawZ: F.z,
      clipped: F.z <= x
    };
  }
  function U(v, B = []) {
    if (n.mode !== "pano" || J(v)) return 1;
    const g = B.map((S) => Number((S == null ? void 0 : S.rawZ) ?? (S == null ? void 0 : S.z))).filter((S) => Number.isFinite(S));
    return g.length ? S2(0.035, 0.2, Math.min(...g)) : 1;
  }
  function b(v) {
    if (X(v) && !ne(v)) return { visible: !1 };
    const B = ge(v), g = Tn(Number(B.yaw_deg || 0), Number(B.pitch_deg || 0)), S = n.mode === "frame" ? l() : null, R = S ? u(S) : null, x = n.mode === "pano" && (J(v) || j(v)), F = x ? { clipBehind: !0 } : null, L = se(g, null, S, R, F);
    if (!L) return { visible: !1 };
    const I = h(v), E = ae(v).map((M) => se(M, L.x, S, R, F)).filter((M) => Number.isFinite(M == null ? void 0 : M.x) && Number.isFinite(M == null ? void 0 : M.y));
    if (E.length < 4) return { visible: !1 };
    const _ = fe(I, 0, I.tanY), O = fe(I, 0, I.tanY + Math.max(I.tanY * 0.43, 0.053)), Q = se(_, L.x, S, R, F);
    if (!Q) return { visible: !1 };
    const me = se(O, (Q == null ? void 0 : Q.x) ?? L.x, S, R, F), ye = ((me == null ? void 0 : me.x) ?? Q.x) - Q.x, xe = ((me == null ? void 0 : me.y) ?? Q.y) - Q.y, de = Math.hypot(ye, xe) || 1, we = {
      x: Q.x + ye / de * 30,
      y: Q.y + xe / de * 30
    }, V = se(fe(I, 0, I.tanY), L.x, S, R, F), ce = se(fe(I, I.tanX, 0), L.x, S, R, F), H = se(fe(I, 0, -I.tanY), L.x, S, R, F), Z = se(fe(I, -I.tanX, 0), L.x, S, R, F);
    if (!V || !ce || !H || !Z) return { visible: !1 };
    const G = [
      L,
      ...E,
      Q,
      me,
      V,
      ce,
      H,
      Z
    ];
    if (x && !G.some((M) => Number((M == null ? void 0 : M.rawZ) ?? (M == null ? void 0 : M.z)) > 1e-4)) return { visible: !1 };
    const q = U(v, G), K = [
      {
        edge: "top",
        x: V.x,
        y: V.y,
        a: { x: E[0].x, y: E[0].y },
        b: { x: E[1].x, y: E[1].y }
      },
      {
        edge: "right",
        x: ce.x,
        y: ce.y,
        a: { x: E[1].x, y: E[1].y },
        b: { x: E[2].x, y: E[2].y }
      },
      {
        edge: "bottom",
        x: H.x,
        y: H.y,
        a: { x: E[2].x, y: E[2].y },
        b: { x: E[3].x, y: E[3].y }
      },
      {
        edge: "left",
        x: Z.x,
        y: Z.y,
        a: { x: E[3].x, y: E[3].y },
        b: { x: E[0].x, y: E[0].y }
      }
    ];
    return {
      center: { x: L.x, y: L.y },
      corners: E.map((M) => ({ x: M.x, y: M.y })),
      edgeMidpoints: K,
      rotateStemBase: { x: Q.x, y: Q.y },
      rotateHandle: we,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: q,
      visible: !0
    };
  }
  function Y(v) {
    if (t && j(v) && ie()) return { visible: !1 };
    if (!ke() && (_e(v) || P(v))) return { visible: !1 };
    if (_e(v)) {
      const R = String(v.actionGroupId || v.id || "").trim(), x = y(R, v.layerKind), F = n._strokeGeomCache.get(x);
      return F || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), D(v, x));
    }
    if (P(v)) {
      const R = p(v), x = n._strokeGeomCache.get(R);
      return x || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), ee(v, R));
    }
    const B = m(v), g = n._strokeGeomCache.get(B);
    if (g) return g;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const S = b(v);
    return n._strokeGeomCache.set(B, S), S;
  }
  function ue(v, B, g, S = null) {
    const R = [];
    for (let x = 0; x <= g; x += 1) {
      const F = x / g;
      let L = 0, I = 0;
      B === 0 ? (L = F, I = 0) : B === 1 ? (L = 1, I = F) : B === 2 ? (L = 1 - F, I = 1) : (L = 0, I = 1 - F);
      const N = $(v, L, I), E = n.mode === "unwrap" ? he(N, S) : ve(N);
      E && R.push(E);
    }
    return R;
  }
  function C() {
    const v = [...Array.isArray(i.shots) ? i.shots : []], B = [...s()].sort((g, S) => Number(g.z_index || 0) - Number(S.z_index || 0));
    return [...v, ...B];
  }
  function W() {
    const v = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...s()].sort((g, S) => Number(S.z_index || 0) - Number(g.z_index || 0)), ...v];
  }
  return {
    connect(v) {
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
        getSceneItemGeomCacheKey: m,
        getStickerFrame: h,
        getStrokeGeomCacheKey: y,
        getStrokeGroupCenterUv: z,
        getStrokeGroupStrokes: T,
        isFreeSpaceView: ie,
        isRasterObjectItem: P,
        isSceneSticker: X,
        isShotItem: j,
        isStickerItem: J,
        isStrokeGroupItem: _e,
        paintingShown: ke,
        poseOf: ge,
        projectDir: ve,
        projectDirUnwrap: he,
        projectEditorPoints: Se,
        projectErpPointToEditor: pe,
        sceneStickerShown: ne,
        stickerCornersDir: ae,
        stickerDirFromFrame: fe,
        stickerSampleDir: $,
        worldDirToFrameLocalPoint: A
      } = v);
    },
    projectSceneItemDir: se,
    objectGeom: Y,
    sampleStickerEdge: ue,
    getCutoutSelectableItemsForDisplay: C,
    getCutoutSelectableItemsForHit: W
  };
}
const ya = /* @__PURE__ */ new Map();
function fA(e) {
  const {
    api: t,
    editor: r,
    node: n,
    rasterErpCanvasCache: i,
    rasterImageAlphaCache: o,
    rasterImageCache: s,
    state: a
  } = e;
  let l, c, d, u, f, p, w, m, h, y, z, T, ie, P, X, j, J, _e, ke, ge;
  function ve(x = r.interaction) {
    const F = String((x == null ? void 0 : x.kind) || "");
    if (F === "paint_stroke" || F === "paint_lasso_fill" || F === "move_stroke_group" || F === "scale_stroke_group" || F === "rotate_stroke_group" || F === "move_raster_object" || F === "scale_raster_object") return !0;
    if (F === "move_multi") {
      const L = Array.isArray(x == null ? void 0 : x.strokeSnapshots) && x.strokeSnapshots.length > 0, I = Array.isArray(x == null ? void 0 : x.rasterSnapshots) && x.rasterSnapshots.length > 0;
      return L || I;
    }
    return !1;
  }
  function he() {
    var F, L, I, N;
    let x = null;
    try {
      const E = m(), _ = ((N = (I = (L = (F = r.paintEngine) == null ? void 0 : F.getErpTarget) == null ? void 0 : L.call(F, E)) == null ? void 0 : I.displayPaint) == null ? void 0 : N.canvas) || null;
      _ && (x = {
        source: _,
        revision: `${h()}:${Se()}`
      });
    } catch {
      x = null;
    }
    return x;
  }
  function Se() {
    var N, E, _, O, Q, me, ye;
    const x = r.interaction, F = String((x == null ? void 0 : x.kind) || "");
    if (!ve(x)) return "";
    if (F === "paint_stroke" || F === "paint_lasso_fill") {
      const xe = ((N = x == null ? void 0 : x.stroke) == null ? void 0 : N.geometry) || null, de = String(((E = x == null ? void 0 : x.stroke) == null ? void 0 : E.layerKind) || ""), we = ((_ = xe == null ? void 0 : xe.rawPoints) == null ? void 0 : _.length) ?? ((O = xe == null ? void 0 : xe.points) == null ? void 0 : O.length) ?? 0, V = String((x == null ? void 0 : x._livePreviewToken) || "");
      return `_${de || "paint"}_${F}_live${V}_${we}_${r.livePaintInteractionRevision}`;
    }
    const L = String(((Q = x == null ? void 0 : x.item) == null ? void 0 : Q.actionGroupId) || ""), I = String(((me = x == null ? void 0 : x.item) == null ? void 0 : me.rasterObjectId) || ((ye = x == null ? void 0 : x.item) == null ? void 0 : ye.id) || "");
    return `_${F}_${L || I || "active"}_${r.livePaintInteractionRevision}`;
  }
  function pe(x, F = null) {
    const L = String((x == null ? void 0 : x.rasterDataUrl) || "").trim();
    if (!L) return null;
    const I = s.get(L);
    if (I)
      return I.complete || I.width || I.naturalWidth, I;
    const N = new Image();
    return N.onload = () => {
      typeof F == "function" && F();
    }, N.src = L, s.set(L, N), N;
  }
  function ne(x) {
    const F = String((x == null ? void 0 : x.rasterDataUrl) || "").trim();
    if (!F) return null;
    const L = o.get(F);
    if (L) return L.ready ? L : null;
    const I = pe(x, () => {
      const ye = o.get(F);
      ye && (ye.ready = !1), _e({ localOnly: !0 });
    });
    if (!I || !(I.complete || I.width || I.naturalWidth)) return null;
    const N = Number(I.naturalWidth || I.width || 0), E = Number(I.naturalHeight || I.height || 0);
    if (N < 1 || E < 1) return null;
    const _ = on({ label: "editor.image-pixels" });
    _.width = N, _.height = E;
    const O = _.getContext("2d", { willReadFrequently: !0 });
    if (!O) return null;
    O.clearRect(0, 0, N, E), O.drawImage(I, 0, 0, N, E);
    const Q = O.getImageData(0, 0, N, E).data, me = { canvas: _, width: N, height: E, alpha: Q, ready: !0 };
    return o.set(F, me), me;
  }
  function ae(x, F) {
    if (!x || !F) return null;
    const L = (x == null ? void 0 : x.bbox) || null;
    if (!L) return null;
    const I = (x == null ? void 0 : x.transform) || {}, N = {
      u: (Number(L.u0 || 0) + Number(L.u1 || 0)) * 0.5,
      v: (Number(L.v0 || 0) + Number(L.v1 || 0)) * 0.5
    }, E = {
      u: ((Number(F.u || 0) - Number(I.du || 0)) % 1 + 1) % 1,
      v: Number(F.v || 0) - Number(I.dv || 0)
    }, _ = T(
      E,
      N,
      Number(I.scale || 1),
      Number(I.rot_deg || 0)
    ), O = Number(L.u1 || 0) - Number(L.u0 || 0), Q = Number(L.v1 || 0) - Number(L.v0 || 0);
    if (!(O > 1e-6) || !(Q > 1e-6)) return null;
    const me = ge(Number(_.u || 0), Number(L.u0 || 0)) / O, ye = (Number(_.v || 0) - Number(L.v0 || 0)) / Q;
    if (me < 0 || me > 1 || ye < 0 || ye > 1) return 0;
    const xe = ne(x);
    if (!xe) return null;
    const de = Oe(Math.floor(me * xe.width), 0, xe.width - 1), we = Oe(Math.floor(ye * xe.height), 0, xe.height - 1);
    return Number(xe.alpha[(we * xe.width + de) * 4 + 3] || 0);
  }
  function fe(x, F, L, I = null) {
    if (!(F != null && F.visible) || !Qr(L, F.corners)) return !1;
    const N = I || ke(L, performance.now()), E = ae(x, N);
    return E === null ? !0 : E > 8;
  }
  function $() {
    var I, N, E, _, O, Q, me, ye;
    const x = ((N = (I = r.paintEngine) == null ? void 0 : I.getErpTarget) == null ? void 0 : N.call(I, m(!1))) || null, F = Math.max(1, Number(((E = x == null ? void 0 : x.descriptor) == null ? void 0 : E.width) || ((O = (_ = x == null ? void 0 : x.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : O.width) || 2048)), L = Math.max(1, Number(((Q = x == null ? void 0 : x.descriptor) == null ? void 0 : Q.height) || ((ye = (me = x == null ? void 0 : x.displayPaint) == null ? void 0 : me.canvas) == null ? void 0 : ye.height) || 1024));
    return { width: F, height: L };
  }
  function A() {
    var we, V, ce;
    const x = r.interaction;
    if ((x == null ? void 0 : x.kind) !== "paint_stroke") return null;
    const F = (x == null ? void 0 : x.stroke) || null;
    if (!F || String((F == null ? void 0 : F.layerKind) || "") !== "paint" || String((F == null ? void 0 : F.toolKind) || "") !== "eraser") return null;
    const L = u(), I = `${Se()}:${L.width}:${L.height}`;
    if (((we = r._activePaintEraserPreviewInfo) == null ? void 0 : we.cacheKey) === I)
      return r._activePaintEraserPreviewInfo.value || null;
    const N = dn(F), E = (N == null ? void 0 : N.geometry) || null;
    if (E && String(E.geometryKind || "") !== "lasso_fill") {
      const H = Array.isArray(E.rawPoints) && E.rawPoints.length ? E.rawPoints : Array.isArray(E.points) ? E.points : [];
      E.processedPoints = X(H, N.targetSpace, !0);
    }
    const _ = c(L.width, L.height, { readback: !0 });
    if (!j(_, N, { w: L.width, h: L.height })) return null;
    const O = ((ce = (V = _.ctx) == null ? void 0 : V.getImageData(0, 0, L.width, L.height)) == null ? void 0 : ce.data) || null;
    if (!O) return null;
    let Q = L.width, me = L.height, ye = -1, xe = -1;
    for (let H = 0; H < L.height; H += 1)
      for (let Z = 0; Z < L.width; Z += 1)
        O[(H * L.width + Z) * 4 + 3] <= 8 || (Z < Q && (Q = Z), H < me && (me = H), Z > ye && (ye = Z), H > xe && (xe = H));
    if (ye < Q || xe < me)
      return r._activePaintEraserPreviewInfo = { cacheKey: I, value: null }, null;
    const de = {
      surface: _,
      bounds: { minX: Q, minY: me, maxX: ye, maxY: xe },
      key: `${I}:${Q}:${me}:${ye}:${xe}`
    };
    return r._activePaintEraserPreviewInfo = { cacheKey: I, value: de }, r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), de;
  }
  function D() {
    r._activePaintEraserPreviewInfo = null, r._liveEraserPreviewCanvasCache = null;
  }
  function ee(x, F, L) {
    var I, N;
    if (!x) return null;
    if (x.type === "rasterObject" && ((I = x.item) != null && I.bbox)) {
      const E = x.item.bbox, _ = ((N = x.item) == null ? void 0 : N.transform) || {}, O = Number(E.u0 || 0) + Number(_.du || 0), Q = Number(E.u1 || 0) + Number(_.du || 0), me = Number(E.v0 || 0) + Number(_.dv || 0), ye = Number(E.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((O % 1 + 1) % 1 * F),
        maxX: Math.ceil((Q % 1 + 1) % 1 * F),
        minY: Math.floor(Oe(me, 0, 1) * L),
        maxY: Math.ceil(Oe(ye, 0, 1) * L),
        wraps: Q - O >= 1 || O < 0 || Q > 1
      };
    }
    if (x.type === "strokeGroup") {
      const E = z(x.actionGroupId, "paint"), _ = d(x.actionGroupId, "paint", E);
      if (!_) return null;
      const O = _.centerUv.u - _.halfW, Q = _.centerUv.u + _.halfW, me = _.centerUv.v - _.halfH, ye = _.centerUv.v + _.halfH;
      return {
        minX: Math.floor((O % 1 + 1) % 1 * F),
        maxX: Math.ceil((Q % 1 + 1) % 1 * F),
        minY: Math.floor(Oe(me, 0, 1) * L),
        maxY: Math.ceil(Oe(ye, 0, 1) * L),
        wraps: Q - O >= 1 || O < 0 || Q > 1
      };
    }
    return null;
  }
  function se(x, F, L) {
    if (!x || !F) return !1;
    const I = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: L - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], N = I(x), E = I(F);
    return N.some((_) => E.some((O) => !(_.maxX < O.minX || O.maxX < _.minX || _.maxY < O.minY || O.maxY < _.minY)));
  }
  function U(x, F, L) {
    var K, M, te, k, oe, re, be;
    if (!x || !F || !((K = L == null ? void 0 : L.surface) != null && K.canvas) || F.type !== "rasterObject") return x;
    const I = Number(x.width || L.surface.canvas.width || 0), N = Number(x.height || L.surface.canvas.height || 0);
    if (I < 1 || N < 1) return x;
    const E = ee(F, I, N);
    if (E && !se(E, L.bounds, I)) return x;
    const _ = String(((M = F.item) == null ? void 0 : M.id) || F.id || ""), O = ((te = F.item) == null ? void 0 : te.transform) || {}, Q = `${L.key}:${_}:${I}:${N}:${Number(O.du || 0).toFixed(6)}:${Number(O.dv || 0).toFixed(6)}:${Number(O.rot_deg || 0).toFixed(3)}:${Number(O.scale || 1).toFixed(4)}`, me = r._liveEraserPreviewCanvasCache instanceof Map ? r._liveEraserPreviewCanvasCache : r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (me.has(Q)) return me.get(Q);
    const ye = Oe(Math.floor(Number(((k = L.bounds) == null ? void 0 : k.minX) || 0)), 0, Math.max(0, I - 1)), xe = Oe(Math.floor(Number(((oe = L.bounds) == null ? void 0 : oe.minY) || 0)), 0, Math.max(0, N - 1)), de = Oe(Math.ceil(Number(((re = L.bounds) == null ? void 0 : re.maxX) || 0)), ye, Math.max(0, I - 1)), we = Oe(Math.ceil(Number(((be = L.bounds) == null ? void 0 : be.maxY) || 0)), xe, Math.max(0, N - 1)), V = Math.max(1, de - ye + 1), ce = Math.max(1, we - xe + 1), H = c(I, N, { readback: !0 });
    H.ctx.clearRect(0, 0, I, N), H.ctx.drawImage(x, 0, 0);
    const Z = H.ctx.getImageData(ye, xe, V, ce);
    H.ctx.save(), H.ctx.globalCompositeOperation = "destination-out", H.ctx.drawImage(L.surface.canvas, 0, 0), H.ctx.restore();
    const G = H.ctx.getImageData(ye, xe, V, ce);
    let q = !1;
    for (let Ne = 0; Ne < V * ce; Ne += 1) {
      const Ee = Z.data[Ne * 4 + 3], Ve = G.data[Ne * 4 + 3];
      if (Ee > Ve) {
        q = !0;
        break;
      }
    }
    return q ? (me.size > 64 && me.clear(), me.set(Q, H.canvas), H.canvas) : (me.set(Q, x), x);
  }
  function b(x, F = null) {
    const L = P((x == null ? void 0 : x.rasterObjectId) || (x == null ? void 0 : x.id) || ""), I = (x == null ? void 0 : x.bbox) || null;
    if (!L || !I) return null;
    const N = pe(x, F);
    if (!N || !(N.complete || N.width || N.naturalWidth)) return null;
    const { width: E, height: _ } = $(), O = (x == null ? void 0 : x.transform) || {}, Q = [
      L,
      E,
      _,
      I.u0,
      I.v0,
      I.u1,
      I.v1,
      O.du,
      O.dv,
      O.rot_deg,
      O.scale,
      y()
    ].join(":"), me = i.get(Q);
    if (me) return me;
    i.size > 64 && i.clear();
    const ye = on({ label: "editor.raster-erp" });
    ye.width = E, ye.height = _;
    const xe = ye.getContext("2d");
    return xe ? (A0(xe, N, x, E, _), i.set(Q, ye), ye) : null;
  }
  async function Y(x, F) {
    const L = await new Promise((O) => x.toBlob(O, "image/png")), I = new FormData();
    I.append("image", L, F), I.append("type", "input"), I.append("subfolder", "panorama_stickers"), I.append("overwrite", "1");
    const N = await t.fetchApi("/upload/image", { method: "POST", body: I });
    if (!N || N.status !== 200) throw new Error(`upload failed (${N == null ? void 0 : N.status})`);
    const E = await N.json(), _ = String((E == null ? void 0 : E.name) || "").trim();
    if (!_) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: _,
      subfolder: String((E == null ? void 0 : E.subfolder) || "panorama_stickers"),
      storage: String((E == null ? void 0 : E.type) || "input")
    };
  }
  let ue = null, C = !1;
  function W() {
    const x = jp(a.painting), { width: F, height: L } = f();
    return pS(a.painting_layer, { paintCount: x.totalPaintCount, maskCount: x.totalMaskCount, width: F, height: L, nodeId: String(n.id ?? "0") });
  }
  function v() {
    const x = String(n.id ?? "0"), F = ya.get(x);
    if (C && F) return F;
    const L = (async () => {
      var E, _, O, Q, me, ye, xe, de, we, V, ce, H;
      const I = h(), N = jp(a.painting);
      if (N.totalPaintCount <= 0 && N.totalMaskCount <= 0) {
        a.painting_layer !== null && (a.painting_layer = null, ue = I, l());
        return;
      }
      if (ue !== I && !C) {
        C = !0;
        try {
          J();
          const Z = m(!1), G = ((_ = (E = r.paintEngine) == null ? void 0 : E.getErpTarget) == null ? void 0 : _.call(E, Z)) || null, q = ((O = G == null ? void 0 : G.displayPaint) == null ? void 0 : O.canvas) || null, K = ((Q = G == null ? void 0 : G.committedMask) == null ? void 0 : Q.canvas) || null, M = Math.max(1, Number(((me = G == null ? void 0 : G.descriptor) == null ? void 0 : me.width) || (q == null ? void 0 : q.width) || (K == null ? void 0 : K.width) || 2048)), te = Math.max(1, Number(((ye = G == null ? void 0 : G.descriptor) == null ? void 0 : ye.height) || (q == null ? void 0 : q.height) || (K == null ? void 0 : K.height) || 1024));
          (!q && N.totalPaintCount > 0 || !K && N.totalMaskCount > 0) && ((!r._paintLayerSyncBlankSurface || Number(((xe = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : xe.width) || 0) !== M || Number(((de = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : de.height) || 0) !== te) && (r._paintLayerSyncBlankSurface = c(M, te)), r._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, M, te));
          const k = q || N.totalPaintCount > 0 && ((we = r._paintLayerSyncBlankSurface) == null ? void 0 : we.canvas) || null, oe = K || N.totalMaskCount > 0 && ((V = r._paintLayerSyncBlankSurface) == null ? void 0 : V.canvas) || null;
          if (!k && !oe) return;
          let re = null, be = null;
          const Ne = [];
          if (N.totalPaintCount > 0) {
            re = await Y(k, `pano_paint_${x}.png`);
            for (const Ee of Z) {
              const Ve = String(Ee || "").trim();
              if (!Ve) continue;
              const We = ((H = (ce = r.paintEngine) == null ? void 0 : ce.getGroupDisplayCanvas) == null ? void 0 : H.call(ce, Ve)) || null;
              if (!We) continue;
              const Ge = Ve.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ce = await Y(We, `pano_group_${x}_${Ge}.png`);
              Ce && Ne.push({
                id: Ve,
                actionGroupId: Ve,
                image: Ce
              });
            }
          }
          N.totalMaskCount > 0 && (be = await Y(oe, `pano_mask_${x}.png`)), I === h() && (a.painting_layer = {
            paint: re,
            mask: be,
            groups: Ne,
            revision: I
          }, ue = I, l());
        } catch (Z) {
          throw Z;
        } finally {
          C = !1;
        }
      }
    })();
    return ya.set(x, L), L.finally(() => {
      ya.get(x) === L && ya.delete(x);
    }), L;
  }
  function B(x) {
    var _;
    const F = ((_ = r.paintEngine) == null ? void 0 : _.getMaskDisplayCanvas()) || null;
    if (!F) return x;
    const L = `mask_display:${r.paintEngine.getMaskDisplayRevision()}`, I = x.reduce((O, Q) => Math.max(O, Number((Q == null ? void 0 : Q.zIndex) || 0)), -1), N = (Array.isArray(a.stickers) ? a.stickers : []).reduce((O, Q) => Math.max(O, Number((Q == null ? void 0 : Q.z_index) || 0)), -1), E = Math.max(I, N);
    return x.push({
      id: "mask_display",
      source: F,
      revision: L,
      zIndex: E + 1,
      opacity: 1,
      visible: !0
    }), x;
  }
  function g() {
    var I, N;
    const x = w(!0), F = A(), L = [];
    for (const E of x) {
      if ((E == null ? void 0 : E.type) === "strokeGroup") {
        const _ = String(E.actionGroupId || E.id || "");
        if (!_) continue;
        const O = ((N = (I = r.paintEngine) == null ? void 0 : I.getGroupDisplayCanvas) == null ? void 0 : N.call(I, _)) || null;
        if (!O) continue;
        L.push({
          id: `paint_group:${_}`,
          source: O,
          revision: `${p()}:${_}`,
          zIndex: Number((E == null ? void 0 : E.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((E == null ? void 0 : E.type) === "rasterObject") {
        const _ = E.item || null, O = P((_ == null ? void 0 : _.id) || E.id || "");
        if (!O) continue;
        const Q = b(_, () => _e());
        if (!Q) continue;
        const me = U(Q, E, F), ye = (_ == null ? void 0 : _.transform) || {};
        L.push({
          id: `raster:${O}`,
          source: me,
          revision: [
            h(),
            (F == null ? void 0 : F.key) || "",
            O,
            Number(ye.du || 0).toFixed(6),
            Number(ye.dv || 0).toFixed(6),
            Number(ye.rot_deg || 0).toFixed(3),
            Number(ye.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((E == null ? void 0 : E.z_index) || 0),
          opacity: 1,
          visible: (_ == null ? void 0 : _.visible) !== !1
        });
      }
    }
    return B(L);
  }
  function S() {
    return ie() ? g().filter((x) => x.visible !== !1).map((x) => ({ id: x.id, media: x.source, revision: x.revision, opacity: x.opacity, zIndex: x.zIndex })) : [];
  }
  function R() {
    a.painting_layer !== null && (a.painting_layer = null), ue = "";
  }
  return {
    connect(x) {
      ({
        commitState: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        getActivePaintTargetDescriptor: u,
        getDesiredPaintTargetDescriptor: f,
        getDisplayPaintRevisionKey: p,
        getOrderedDisplayListObjects: w,
        getOrderedPaintGroupIds: m,
        getPaintingCompositeRevisionKey: h,
        getPaintingRevisionKey: y,
        getStrokeGroupStrokes: z,
        inverseTransformErpPointAround: T,
        paintingShown: ie,
        parseRasterObjectSelectionId: P,
        processFreehandPoints: X,
        rasterizeStrokeToSurface: j,
        rebuildPaintEngineIfNeeded: J,
        requestDraw: _e,
        screenPosToErpPoint: ke,
        shortestWrappedDelta: ge
      } = x);
    },
    getSharedLivePaintSurface: he,
    getLivePaintRevisionSuffix: Se,
    isPaintCompositeInteraction: ve,
    hitRasterObjectAt: fe,
    invalidateLivePaintPreviewCaches: D,
    buildRasterObjectEditCanvas: b,
    needsPaintingLayerSync: W,
    syncPaintingLayerAsync: v,
    invalidatePaintingLayerState: R,
    buildEditorViewPaintLayers: S
  };
}
function pA(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, s, a;
  function l(U) {
    return !U || typeof U != "object" ? { x: 0, y: 0 } : { x: Number((U == null ? void 0 : U.u) || 0), y: Number((U == null ? void 0 : U.v) || 0) };
  }
  function c(U, b, Y, ue = {}) {
    return { ...{
      ...U,
      t: Number((U == null ? void 0 : U.t) || 0),
      widthScale: f(U, "widthScale", 1),
      pressureLike: f(U, "pressureLike", 1)
    }, ...ue, u: b, v: Y };
  }
  function d(U, b = !1) {
    return b ? 12e-4 : 18e-4;
  }
  function u(U, b, Y = !1) {
    if (!Array.isArray(U) || !U.length) return [];
    const ue = String((b == null ? void 0 : b.kind) || "") === "ERP_GLOBAL", C = /* @__PURE__ */ new WeakMap();
    if (ue) {
      let N = null;
      U.forEach((E) => {
        const _ = Number((E == null ? void 0 : E.u) || 0), O = Number((E == null ? void 0 : E.v) || 0), Q = (_ % 1 + 1) % 1, me = N == null ? Q : N + a(Q, (N % 1 + 1) % 1);
        C.set(E, { x: me, y: O }), N = me;
      });
    }
    const W = (N) => !N || typeof N != "object" ? { x: 0, y: 0 } : C.get(N) || l(N), v = (N, E, _, O = {}) => {
      const Q = ue ? (Number(E) % 1 + 1) % 1 : Number(E), me = c(N, Q, _, O);
      return C.set(me, { x: Number(E), y: Number(_) }), me;
    }, B = (N, E, _) => {
      const O = W(N), Q = W(E);
      return v(N, qn(O.x, Q.x, _), qn(O.y, Q.y, _), {
        t: qn(Number((N == null ? void 0 : N.t) || 0), Number((E == null ? void 0 : E.t) || 0), _),
        widthScale: qn(f(N, "widthScale", 1), f(E, "widthScale", 1), _),
        pressureLike: qn(f(N, "pressureLike", 1), f(E, "pressureLike", 1), _)
      });
    };
    if (U.length === 1) {
      const N = W(U[0]);
      return [v(U[0], N.x, N.y)];
    }
    const g = d(b, Y), S = (N, E) => {
      const _ = [0];
      for (let V = 1; V < N.length; V += 1) {
        const ce = W(N[V - 1]), H = W(N[V]);
        _.push(_[V - 1] + Math.hypot(H.x - ce.x, H.y - ce.y));
      }
      const O = _[_.length - 1] || 0;
      if (O <= 1e-8) {
        const V = N[0], ce = W(V);
        return [v(V, ce.x, ce.y)];
      }
      const Q = [];
      let me = 0;
      for (let V = 0; V <= O + 1e-9; V += E) {
        for (; me < _.length - 2 && _[me + 1] < V; ) me += 1;
        const ce = _[me], H = _[me + 1], Z = Math.max(1e-8, H - ce);
        Q.push(B(N[me], N[me + 1], Oe((V - ce) / Z, 0, 1)));
      }
      const ye = N[N.length - 1], xe = W(ye), de = Q[Q.length - 1], we = de ? W(de) : null;
      return (!we || Math.hypot(we.x - xe.x, we.y - xe.y) > E * 0.35) && Q.push(v(ye, xe.x, xe.y)), Q;
    }, R = (N) => {
      if (!Array.isArray(N) || N.length < 3) return N ? N.slice() : [];
      const E = W(N[0]), _ = [v(N[0], E.x, E.y)];
      for (let me = 0; me < N.length - 1; me += 1) {
        const ye = N[me], xe = N[me + 1], de = W(ye), we = W(xe), V = v(
          ye,
          de.x * 0.75 + we.x * 0.25,
          de.y * 0.75 + we.y * 0.25,
          {
            t: Number(ye.t || 0) * 0.75 + Number(xe.t || 0) * 0.25,
            widthScale: f(ye, "widthScale", 1) * 0.75 + f(xe, "widthScale", 1) * 0.25,
            pressureLike: f(ye, "pressureLike", 1) * 0.75 + f(xe, "pressureLike", 1) * 0.25
          }
        ), ce = v(
          ye,
          de.x * 0.25 + we.x * 0.75,
          de.y * 0.25 + we.y * 0.75,
          {
            t: Number(ye.t || 0) * 0.25 + Number(xe.t || 0) * 0.75,
            widthScale: f(ye, "widthScale", 1) * 0.25 + f(xe, "widthScale", 1) * 0.75,
            pressureLike: f(ye, "pressureLike", 1) * 0.25 + f(xe, "pressureLike", 1) * 0.75
          }
        );
        _.push(V, ce);
      }
      const O = N[N.length - 1], Q = W(O);
      return _.push(v(O, Q.x, Q.y)), _;
    }, x = S(U, g);
    if (x.length < 3) return x;
    const F = Y ? 2 : 1;
    let L = x.slice();
    for (let N = 0; N < F; N += 1) L = R(L);
    return S(L, Math.max(g * 0.75, 55e-5));
  }
  function f(U, b, Y = 1) {
    const ue = Number(U == null ? void 0 : U[b]);
    return Number.isFinite(ue) ? Math.max(0, ue) : Y;
  }
  function p(U) {
    const b = Number(U == null ? void 0 : U.radiusValue);
    if (Number.isFinite(b) && b > 0) {
      const Y = String((U == null ? void 0 : U.radiusModel) || "").trim() || "erp_uv_norm";
      return Y === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((U == null ? void 0 : U.size) || 10) * 0.5 / 2048)
      } : {
        model: Y,
        value: b
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((U == null ? void 0 : U.size) || 10) * 0.5 / 2048)
    };
  }
  function w(U, b, Y = {}) {
    const ue = on({ label: "editor.raster-surface" });
    ue.width = Math.max(1, Math.round(U)), ue.height = Math.max(1, Math.round(b));
    const C = ue.getContext("2d", Y.readback ? { willReadFrequently: !0 } : void 0);
    return C && (C.clearRect(0, 0, ue.width, ue.height), C.imageSmoothingEnabled = !0), { canvas: ue, ctx: C };
  }
  function m() {
    const U = ke();
    return `${String(t.paintStrokeRevision)}:${U.width}x${U.height}`;
  }
  function h() {
    const U = ke();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${U.width}x${U.height}`;
  }
  function y() {
    const U = i(), b = h();
    return U ? `${b}:${U}` : b;
  }
  function z() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function T() {
    t.paintCompositeRevision += 1;
  }
  function ie() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function P() {
    var U, b;
    t.paintEngineRevisionKey = null, (b = (U = t.paintEngine) == null ? void 0 : U.rebuildCommitted) == null || b.call(U, n), t.paintEngineRevisionKey = m();
  }
  function X() {
    ie(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function j({ rebuildPaintEngine: U = !1 } = {}) {
    o(), z(), X(), U && P();
  }
  function J() {
    o(), T(), X();
  }
  function _e() {
    var ue;
    const U = ke(), b = `${U.width}x${U.height}`;
    t.paintEngineDescriptorKey !== b && (t.paintEngine = Ll(U), t.paintEngineDescriptorKey = b, t.paintEngineRevisionKey = "");
    const Y = m();
    t.paintEngineRevisionKey !== Y && (t.paintEngineRevisionKey = Y, (ue = t.paintEngine) == null || ue.rebuildCommitted(n));
  }
  function ke() {
    const U = Math.max(1, s(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: U,
      height: Math.max(1, Math.round(U * 0.5))
    };
  }
  function ge() {
    return ke();
  }
  function ve(U, b, Y, ue, C = null) {
    const W = p(U), v = f(b, "widthScale", 1) * f(b, "pressureLike", 1);
    return W.model === "erp_uv_norm" ? Math.max(0.5, W.value * Y * v) : W.model === "world_angle" ? C ? Math.max(0.5, W.value / Math.max(1e-6, Number(C.hFOV_deg || 90) * Nr) * Y * v) : Math.max(0.5, W.value / (2 * Math.PI) * Y * v) : Math.max(0.5, Number((U == null ? void 0 : U.size) || 10) * 0.5 * v);
  }
  function he(U, b, Y = {}) {
    const ue = String((b == null ? void 0 : b.layerKind) || "paint"), C = String((b == null ? void 0 : b.toolKind) || "pen"), W = Y.preview === !0, v = W ? 0.78 : 1;
    if (U.globalAlpha = C === "marker" ? 0.7 * v : 1, ue === "mask") {
      U.fillStyle = W ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (C === "eraser") {
      U.globalCompositeOperation = "destination-out", U.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const B = String((b == null ? void 0 : b.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (b == null ? void 0 : b.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, g = W ? Math.max(0.28, Number(B.a ?? 1) * 0.88) : Math.max(0.12, Number(B.a ?? 1));
    U.fillStyle = `rgba(${Math.round(Number(B.r || 0) * 255)}, ${Math.round(Number(B.g || 0) * 255)}, ${Math.round(Number(B.b || 0) * 255)}, ${g})`;
  }
  function Se(U, b, Y) {
    const ue = Math.max(0.5, Math.min(Y, Number((b == null ? void 0 : b.radiusPx) || 0.5)));
    !Number.isFinite(b == null ? void 0 : b.x) || !Number.isFinite(b == null ? void 0 : b.y) || !Number.isFinite(ue) || (U.beginPath(), U.arc(Number(b.x || 0), Number(b.y || 0), ue, 0, Math.PI * 2), U.fill());
  }
  function pe(U, b, Y, ue, C = {}) {
    if (!U || !Array.isArray(b) || !b.length) return;
    const W = Math.max(ue.w, ue.h) * 0.25;
    U.save(), he(U, Y, C);
    const v = (B) => Se(U, B, W);
    if (b.length === 1) {
      v(b[0]), U.restore();
      return;
    }
    for (let B = 0; B < b.length - 1; B += 1) {
      const g = b[B], S = b[B + 1];
      if (!g || !S) continue;
      const R = Number(g.x || 0), x = Number(g.y || 0), F = Number(S.x || 0), L = Number(S.y || 0), I = Math.max(0.5, Math.min(W, Number(g.radiusPx || 0.5))), N = Math.max(0.5, Math.min(W, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite(R) || !Number.isFinite(x) || !Number.isFinite(F) || !Number.isFinite(L) || !Number.isFinite(I) || !Number.isFinite(N)) continue;
      const E = F - R, _ = L - x, O = Math.hypot(E, _);
      if (!Number.isFinite(O) || O < 1e-6) {
        v(g);
        continue;
      }
      if (O > Math.max(ue.w, ue.h) * 0.5) continue;
      const Q = Math.max(0.5, Math.min(I, N)), me = Math.max(0.35, Math.min(Q * 0.4, 2.25)), ye = Math.max(1, Math.ceil(O / me));
      for (let xe = 0; xe <= ye; xe += 1) {
        const de = xe / ye;
        v({
          x: qn(R, F, de),
          y: qn(x, L, de),
          radiusPx: qn(I, N, de)
        });
      }
    }
    v(b[b.length - 1]), U.restore();
  }
  function ne(U, b, Y, ue) {
    pe(U, b, Y, ue, { preview: !1 });
  }
  function ae(U, b, Y, ue, C) {
    var B, g, S, R;
    if (!U || !Array.isArray(b) || b.length < 3) return;
    const W = "u", v = "v";
    if (U.save(), String((Y == null ? void 0 : Y.layerKind) || "") === "mask")
      U.fillStyle = "rgba(255,255,255,1)";
    else if (String((Y == null ? void 0 : Y.toolKind) || "") === "eraser")
      U.globalCompositeOperation = "destination-out", U.fillStyle = "rgba(0,0,0,1)";
    else {
      const x = (Y == null ? void 0 : Y.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      U.fillStyle = `rgba(${Math.round(Number(x.r || 0) * 255)}, ${Math.round(Number(x.g || 0) * 255)}, ${Math.round(Number(x.b || 0) * 255)}, ${Number(x.a ?? 1)})`;
    }
    U.beginPath(), U.moveTo(Number(((B = b[0]) == null ? void 0 : B[W]) || 0) * ue.w, Number(((g = b[0]) == null ? void 0 : g[v]) || 0) * ue.h);
    for (let x = 1; x < b.length; x += 1)
      U.lineTo(Number(((S = b[x]) == null ? void 0 : S[W]) || 0) * ue.w, Number(((R = b[x]) == null ? void 0 : R[v]) || 0) * ue.h);
    U.closePath(), U.fill(), U.restore();
  }
  function fe(U) {
    const b = (U == null ? void 0 : U.geometry) || null;
    return b ? String(b.geometryKind || "") === "lasso_fill" ? Array.isArray(b.points) ? b.points : [] : Array.isArray(b.processedPoints) && b.processedPoints.length ? b.processedPoints : Array.isArray(b.rawPoints) && b.rawPoints.length ? b.rawPoints : Array.isArray(b.points) ? b.points : [] : [];
  }
  function $(U, b) {
    const Y = fe(U);
    return !Array.isArray(Y) || !Y.length ? [] : Y.map((ue) => ({
      x: Number((ue == null ? void 0 : ue.u) || 0) * Number((b == null ? void 0 : b.w) || 1),
      y: Number((ue == null ? void 0 : ue.v) || 0) * Number((b == null ? void 0 : b.h) || 1),
      radiusPx: ve(U, ue, Number((b == null ? void 0 : b.w) || 1), Number((b == null ? void 0 : b.h) || 1))
    }));
  }
  function A(U, b, Y = null) {
    var B, g, S, R;
    if (!(U != null && U.ctx) || !b) return !1;
    const ue = Y || { w: Number(((B = U.canvas) == null ? void 0 : B.width) || 0), h: Number(((g = U.canvas) == null ? void 0 : g.height) || 0) }, C = String((b == null ? void 0 : b.toolKind) || "") === "eraser" ? {
      ...b,
      layerKind: "mask",
      toolKind: String(((S = b == null ? void 0 : b.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : b;
    if (String(((R = b == null ? void 0 : b.geometry) == null ? void 0 : R.geometryKind) || "") === "lasso_fill")
      return ae(U.ctx, fe(C), C, ue), !0;
    const v = $(C, ue);
    return v.length ? (ne(U.ctx, v, C, ue), !0) : !1;
  }
  function D(U, b, Y, ue = 8) {
    const C = new Uint8Array(b * Y), W = [], v = new Int32Array(b * Y), B = new Int32Array(b * Y);
    for (let g = 0; g < Y; g += 1)
      for (let S = 0; S < b; S += 1) {
        const R = g * b + S;
        if (C[R] || U[R] <= ue) continue;
        let x = 0, F = 0;
        v[F] = S, B[F] = g, F += 1, C[R] = 1;
        const L = [];
        let I = S, N = g, E = S, _ = g;
        for (; x < F; ) {
          const O = v[x], Q = B[x];
          x += 1, L.push({ x: O, y: Q }), O < I && (I = O), Q < N && (N = Q), O > E && (E = O), Q > _ && (_ = Q);
          const me = [
            [(O - 1 + b) % b, Q],
            [(O + 1) % b, Q],
            [O, Q - 1],
            [O, Q + 1]
          ];
          for (const [ye, xe] of me) {
            if (xe < 0 || xe >= Y) continue;
            const de = xe * b + ye;
            C[de] || U[de] <= ue || (C[de] = 1, v[F] = ye, B[F] = xe, F += 1);
          }
        }
        W.push({ pixels: L, minX: I, minY: N, maxX: E, maxY: _ });
      }
    return W;
  }
  function ee(U, b) {
    const Y = [...new Set((Array.isArray(U == null ? void 0 : U.pixels) ? U.pixels : []).map((g) => Number((g == null ? void 0 : g.x) || 0)).filter((g) => Number.isFinite(g)))].sort((g, S) => g - S);
    if (!Y.length) return null;
    if (Y.length === 1)
      return { startX: Y[0], widthPx: 1 };
    let ue = -1, C = 0;
    for (let g = 0; g < Y.length; g += 1) {
      const S = Y[g], x = (g === Y.length - 1 ? Y[0] + b : Y[g + 1]) - S - 1;
      x > ue && (ue = x, C = g);
    }
    const W = (Y[(C + 1) % Y.length] + b) % b;
    let v = 1 / 0, B = -1 / 0;
    for (const g of Y) {
      const S = (g - W + b) % b;
      v = Math.min(v, S), B = Math.max(B, S);
    }
    return {
      startX: W,
      widthPx: Math.max(1, B - v + 1)
    };
  }
  function se(U, b, Y = {}) {
    var S;
    const ue = Number((U == null ? void 0 : U.width) || 0), C = Number((U == null ? void 0 : U.height) || 0), W = (S = U == null ? void 0 : U.getContext) == null ? void 0 : S.call(U, "2d");
    if (!W || ue < 1 || C < 1) return [];
    const v = W.getImageData(0, 0, ue, C), B = new Uint8Array(ue * C);
    for (let R = 0; R < B.length; R += 1) B[R] = v.data[R * 4 + 3];
    return D(B, ue, C, 8).map((R, x) => {
      const F = ee(R, ue);
      if (!F) return null;
      const L = Number(F.widthPx || 0), I = R.maxY - R.minY + 1, N = Number(F.startX || 0), E = on({ label: "editor.lasso-fill" });
      E.width = L, E.height = I;
      const _ = E.getContext("2d");
      if (!_) return null;
      const O = _.createImageData(L, I);
      return R.pixels.forEach(({ x: Q, y: me }) => {
        const ye = (me * ue + Q) * 4, xe = (Number(Q || 0) - N + ue) % ue, de = ((me - R.minY) * L + xe) * 4;
        O.data[de + 0] = v.data[ye + 0], O.data[de + 1] = v.data[ye + 1], O.data[de + 2] = v.data[ye + 2], O.data[de + 3] = v.data[ye + 3];
      }), _.putImageData(O, 0, 0), {
        id: io("raster"),
        type: "raster_frozen",
        layerKind: b === "mask" ? "mask" : "paint",
        z_index: Number((Y == null ? void 0 : Y.z_index) || 0) + x * 1e-3,
        locked: (Y == null ? void 0 : Y.locked) === !0,
        bbox: {
          u0: 0,
          v0: R.minY / C,
          u1: L / ue,
          v1: (R.maxY + 1) / C
        },
        rasterDataUrl: E.toDataURL("image/png"),
        transform: {
          du: N / ue,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(U) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: s,
        shortestWrappedDelta: a
      } = U);
    },
    processFreehandPoints: u,
    createRasterSurface: w,
    getPaintingRevisionKey: m,
    getPaintingCompositeRevisionKey: h,
    getDisplayPaintRevisionKey: y,
    refreshPaintEngineRevisionCache: P,
    markObjectVisualsDirty: X,
    markPaintStrokeVisualsDirty: j,
    markPaintCompositeVisualsDirty: J,
    rebuildPaintEngineIfNeeded: _e,
    getDesiredPaintTargetDescriptor: ke,
    getActivePaintTargetDescriptor: ge,
    rasterizeStrokeToSurface: A,
    createRasterFrozenObjectsFromCanvas: se
  };
}
function hA(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: s
  } = e;
  let a, l, c, d, u, f, p, w, m, h = { stored: null, shown: null, handoff: null, fps: null };
  function y($, A = null) {
    var D;
    if ($ && typeof $ == "object" && !Array.isArray($)) return $;
    if (Array.isArray($) && $.length > 0) {
      const ee = $[0];
      if (ee && typeof ee == "object" && !Array.isArray(ee)) return ee;
    }
    if (Array.isArray(A) && A.length > 0) {
      const ee = (D = A[0]) == null ? void 0 : D.parsed_state;
      if (ee && typeof ee == "object" && !Array.isArray(ee))
        return {
          yaw_deg: Number(ee.yaw_deg || 0),
          pitch_deg: Number(ee.pitch_deg || 0),
          hFOV_deg: Number(ee.hFOV_deg || 30),
          rot_deg: Number(ee.roll_deg || 0)
        };
    }
    return null;
  }
  function z($, A, D) {
    const ee = Math.max(1, Number(A || 1)), se = Math.max(1, Number(D || 1)), U = Oe(Number($ || 30), 0.1, 179) * Nr, b = 2 * Math.atan(Math.tan(U * 0.5) * (se / ee));
    return Oe(b * Vi, 0.1, 179);
  }
  function T($) {
    const A = String($ || "").trim();
    if (!A) return null;
    try {
      const D = JSON.parse(A);
      if (!D || typeof D != "object" || String(D.kind || "") !== "pano_sticker_state") return null;
      const ee = D.version;
      let se = null;
      if (typeof ee == "number" && Number.isInteger(ee) ? se = ee : typeof ee == "string" && /^\d+$/.test(ee) && (se = Number.parseInt(ee, 10)), se !== 1) return null;
      const U = D.pose;
      if (!U || typeof U != "object") return null;
      const b = Number(U.yaw_deg), Y = Number(U.pitch_deg), ue = Number(U.roll_deg), C = Number(U.hFOV_deg);
      if (![b, Y, ue, C].every((g) => Number.isFinite(g))) return null;
      let W = ((b + 180) % 360 + 360) % 360 - 180;
      Object.is(W, -0) && (W = 0);
      const v = {
        yaw_deg: W,
        pitch_deg: Oe(Y, -89.9, 89.9),
        roll_deg: ue,
        hFOV_deg: Oe(C, 0.1, 179)
      }, B = Number(D.source_aspect);
      return Number.isFinite(B) && B > 0 && (v.source_aspect = B), v;
    } catch {
      return null;
    }
  }
  function ie($) {
    const A = Number($ == null ? void 0 : $.yaw_deg), D = Number($ == null ? void 0 : $.pitch_deg), ee = Number(($ == null ? void 0 : $.roll_deg) ?? ($ == null ? void 0 : $.rot_deg)), se = Number($ == null ? void 0 : $.hFOV_deg), U = zi($);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Kt(Number.isFinite(A) ? A : 0),
        pitch_deg: Oe(Number.isFinite(D) ? D : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(ee) ? ee : 0,
        hFOV_deg: Oe(Number.isFinite(se) ? se : 90, 0.1, 179)
      },
      source_aspect: U
    };
  }
  function P($) {
    var Y;
    if (!$ || typeof $ != "object") return ie(null);
    const A = Number($ == null ? void 0 : $.yaw_deg), D = Number($ == null ? void 0 : $.pitch_deg), ee = Number(($ == null ? void 0 : $.roll_deg) ?? ($ == null ? void 0 : $.rot_deg)), se = Number($ == null ? void 0 : $.hFOV_deg), U = Number($ == null ? void 0 : $.vFOV_deg);
    let b = 1;
    if (Number.isFinite(se) && Number.isFinite(U)) {
      const ue = Oe(se, 0.1, 179) * Nr, C = Oe(U, 0.1, 179) * Nr, W = Math.tan(C * 0.5);
      if (Math.abs(W) > 1e-6) {
        const v = Math.tan(ue * 0.5) / W;
        Number.isFinite(v) && v > 0 && (b = v);
      }
    }
    if ($ != null && $.asset_id && ((Y = o == null ? void 0 : o.assets) != null && Y[$.asset_id])) {
      const ue = o.assets[$.asset_id], C = Number((ue == null ? void 0 : ue.w) || 0), W = Number((ue == null ? void 0 : ue.h) || 0);
      C > 0 && W > 0 && (b = C / W);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Kt(Number.isFinite(A) ? A : 0),
        pitch_deg: Oe(Number.isFinite(D) ? D : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(ee) ? ee : 0,
        hFOV_deg: Oe(Number.isFinite(se) ? se : 30, 0.1, 179)
      },
      source_aspect: b
    };
  }
  function X($) {
    return t.linkedValue(n, $);
  }
  function j($, A, D) {
    const ee = $ && typeof $ == "object" ? {
      yaw_deg: Number($.yaw_deg || 0),
      pitch_deg: Number($.pitch_deg || 0),
      roll_deg: Number($.rot_deg ?? $.roll_deg ?? 0),
      hFOV_deg: Number($.hFOV_deg || 30)
    } : T(A);
    if (ee) {
      const b = Number((D == null ? void 0 : D.naturalWidth) || (D == null ? void 0 : D.width) || ee.source_aspect || 1), Y = Number((D == null ? void 0 : D.naturalHeight) || (D == null ? void 0 : D.height) || 1);
      return {
        yaw_deg: Number(ee.yaw_deg || 0),
        pitch_deg: Number(ee.pitch_deg || 0),
        hFOV_deg: Number(ee.hFOV_deg || 30),
        vFOV_deg: z(ee.hFOV_deg, b, Y),
        rot_deg: Number(ee.roll_deg || 0)
      };
    }
    const se = Number((D == null ? void 0 : D.naturalWidth) || (D == null ? void 0 : D.width) || 1), U = Number((D == null ? void 0 : D.naturalHeight) || (D == null ? void 0 : D.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: z(30, se, U),
      rot_deg: 0
    };
  }
  function J() {
    const $ = Wt(n, "external-sticker") ? y(c("pano_sticker_input_pose"), null) : null;
    return $g(o, Lg(n, { pose: $, handoff: _e() }));
  }
  function _e() {
    return Wt(n, "sticker-handoff") ? G_(n, c("pano_sticker_handoff")) : null;
  }
  function ke() {
    return s === "stickers" && !i && n.__panoSceneStateV2 === !0;
  }
  function ge($, A, D) {
    return structuredClone(Mo(Ln({ version: 2, timeline: { fps: A }, stickers: [$] }), D).stickers[0]);
  }
  function ve({ record: $ = !0, restored: A = !1 } = {}) {
    var ue;
    if (!ke()) return !1;
    const D = o.stickers.find((C) => {
      var W;
      return ((W = C.source) == null ? void 0 : W.kind) === "port";
    });
    if (!D)
      return h = { stored: null, shown: null, handoff: null, fps: null }, !1;
    const { fps: ee } = o.timeline;
    let se;
    if (A || !h.handoff || ((ue = h.stored) == null ? void 0 : ue.id) !== D.id)
      se = structuredClone(D);
    else {
      const C = (W) => h.fps === ee ? W : ge(W, h.fps, ee);
      $ && V_(D, C(h.shown)), se = $_(D, C(h.stored));
    }
    const U = _e(), b = U ? Dd(o, se, U) : structuredClone(se), Y = JSON.stringify(b) !== JSON.stringify(D);
    if (Y) {
      for (const C of Object.keys(D)) delete D[C];
      Object.assign(D, b);
    }
    return h = { stored: se, shown: structuredClone(b), handoff: U, fps: ee }, Y;
  }
  function he() {
    return h.handoff ? { ...o, stickers: o.stickers.map(($) => {
      var A;
      return ((A = $.source) == null ? void 0 : A.kind) === "port" ? h.stored : $;
    }) } : o;
  }
  function Se($) {
    var ee;
    if (!ke() || ((ee = $ == null ? void 0 : $.source) == null ? void 0 : ee.kind) !== "port") return null;
    const { handoff: A } = h, D = !!A && A.placement === $.placement;
    return bo[$.placement].map((se) => ({ name: se, overridden: D && $.handoff_overrides.includes(se) }));
  }
  function pe($) {
    ve();
    const A = o.stickers.find((D) => {
      var ee;
      return ((ee = D.source) == null ? void 0 : ee.kind) === "port";
    });
    !A || A.locked || !h.handoff || !z_(o, A, h.handoff, $) || (h.shown = structuredClone(A), h.stored[$] = structuredClone(A[$]), f(), a(), u(), m(), p());
  }
  function ne() {
    var Y;
    const $ = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((ue) => String((ue == null ? void 0 : ue.name) || "") === "sticker_image") : -1, A = $ >= 0 ? ((Y = n.getInputLink($)) == null ? void 0 : Y.id) ?? null : null, D = l(() => {
      ii(n, "image-loaded");
    }), ee = y(c("pano_sticker_input_pose"), null), se = X("sticker_state"), U = t.externalStateHash(n, se), b = A == null ? null : j(ee, se, D);
    return Rg(o, {
      connected: A != null,
      linkId: A,
      stateHash: U,
      pose: b,
      imageWidth: Number((D == null ? void 0 : D.naturalWidth) || (D == null ? void 0 : D.width) || 0),
      imageHeight: Number((D == null ? void 0 : D.naturalHeight) || (D == null ? void 0 : D.height) || 0)
    });
  }
  function ae($ = "sync") {
    if (s !== "stickers" || i) return;
    const A = n.__panoSceneStateV2 ? J() : ne();
    if (A.changed) {
      const D = o.stickers.find(d);
      o.stickers = A.state.stickers, o.active = A.state.active, D && r.selectedId === D.id && !o.stickers.some((ee) => ee.id === D.id) && (r.selectedId = null, r.selectedIds = []), a(), m(), w();
    } else ve({ restored: $ === "open" }) ? (u(), m()) : $ === "image-loaded" && m();
    p();
  }
  function fe() {
    const $ = Array.isArray(o.stickers) ? o.stickers : [], A = [];
    for (const D of $)
      d(D) && (D.visible = !1, A.push(D));
    return A;
  }
  return {
    connect($) {
      ({
        commitAndRefreshNode: a,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: d,
        markObjectVisualsDirty: u,
        pushHistory: f,
        requestDraw: p,
        updateSelectionMenu: w,
        updateSidePanel: m
      } = $);
    },
    computeStickerVFov: z,
    buildCanonicalCutoutStickerState: ie,
    buildCanonicalSelectedStickerState: P,
    reconcileExternalStickerFromInputs: ae,
    collectExternalStickersForClearAll: fe,
    syncPortHandoff: ve,
    storedEditorState: he,
    portHandoffLanes: Se,
    revertPortHandoffLane: pe
  };
}
function no(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function mA(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function gA({
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
  var T, ie;
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
    historyEntries: Array.from({ length: 8 }, (P, X) => ({ index: X, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return d;
  const u = ((T = t.find((P) => i(e.paintColor, P.color))) == null ? void 0 : T.id) || "", f = !u, p = o(e.customPaintColor), w = Math.round(Math.max(0, Math.min(1, Number(((ie = e.customPaintColor) == null ? void 0 : ie.a) ?? 1))) * 100), m = a(e.primaryTool === "paint" ? e.paintTool : e.maskTool), h = e.brushSizes[m] ?? 10, y = l(), z = Array.from({ length: 8 }, (P, X) => e.customPaintHistory[X] || null);
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
    historyEntries: z.map((P, X) => ({
      index: X,
      color: P ? { cssColor: n(P, 1) } : null
    })),
    sizeValue: h,
    sizeText: String(h),
    sizeFill: `${Math.max(0, Math.min(100, (h - 1) / 119 * 100))}%`,
    sizeDisabled: y,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function yA({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
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
const bA = {
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
function vA(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = bA[r.key] || [], s = t[t.length - 1];
    n && (s != null && s.grouped) && s.label === n ? s.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function Kc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function SA({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
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
function z0({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function _A(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
function wA(e, { port: t = !1 } = {}) {
  return !(t && e === "vFOV_deg");
}
const So = "erp", kA = ["1:1", "4:3", "3:2", "16:9"];
function j0(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...kA.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: So, label: Number(r) === 180 ? "180°" : "360°", active: e === So }] : []
  ];
}
const xA = { direction: "Direction", roll: "Roll", size: "Size", position: "Position", rotation: "Rotation", scale: "Scale" }, MA = { sky: ["direction", "roll", "size", "opacity"], world: ["position", "rotation", "scale", "opacity"] }, NA = { ...xA, opacity: "Opacity" };
function ef(e) {
  return `Upstream · ${e}`;
}
function PA({ layer: e, editable: t, visible: r, locked: n, readOnly: i, placement: o, override: s = null, handoff: a = null }) {
  const l = e !== null && !t, c = e === null || i || !t, d = !c && !n && !!s, u = (f) => !i && !n && !!(a != null && a.some((p) => p.name === f && p.overridden));
  return {
    origin: e === null ? "" : `${ef(e)}${l ? " · inherited only" : ""}`,
    note: l ? "Inherited only: edits of this upstream scene cannot be kept here. Edit it in its own Panorama Studio." : "",
    visible: r,
    locked: n,
    disabled: c,
    revertAll: { disabled: !d },
    lanes: MA[o].map((f) => ({
      name: f,
      label: NA[f],
      action: e === null && a ? "revert-handoff-lane" : "revert-upstream",
      // An override made for the other placement has none of this one's Lanes.
      disabled: e === null ? !u(f) : !d || s.placement !== o || !Object.hasOwn(s, f)
    }))
  };
}
function AA({
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
  upstream: d = null
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
    rows: vA(s),
    notes: a,
    upstream: d,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function CA({
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
  coverage: m = 360,
  // Upstream elements in the selection (ADR 0030): null, or { editable }. Only Lock and Delete act on them,
  // while their layers keep overrides; the other buttons stay in place, disabled.
  upstream: h = null
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let y = [];
  if (r.length > 1)
    y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: p.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: p.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!s }
    ];
  else if (n === "stroke")
    y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: p.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: p.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!a }
    ];
  else if (n === "image") {
    if (y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: p.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: p.send_back, disabled: !!a }
    ], d(t) || (y.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: p.duplicate }), y.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: p.replace_image })), d(t)) {
      const z = f(), T = u(t);
      y.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: z ? "Back to initial position" : "Already at initial position",
        icon: p.back_initial,
        disabled: !z
      }), y.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: T ? "Show" : "Hide",
        tip: T ? "Show input image" : "Hide input image",
        icon: T ? p.eye : p.eye_dashed
      });
    }
    y.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? p.lock_open : p.lock_closed }), (!d(t) || h) && y.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!a });
  } else
    y = [
      {
        key: "aspect",
        kind: "aspect",
        icon: p.aspect,
        open: !!c,
        choices: j0(l, { erp: w, coverage: m })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: p.rotate_90, disabled: l === So }
    ], w ? y.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete }) : y.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!a }
    );
  return h && (y = y.map((z) => ({
    ...z,
    disabled: z.key === "toggle-lock" ? !h.editable : z.key === "delete" ? !h.editable || !!z.disabled : !0
  }))), H0(i.corners, y);
}
const Gp = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function IA({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1 }) {
  const i = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], o = n ? Gp.filter((s) => s.cameraTip) : Gp;
  return H0([...e, ...i], [
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
function EA(e, t, r, n, i) {
  const { minX: a, maxX: l, minY: c, maxY: d } = e || {};
  if (![a, l, c, d].every(Number.isFinite)) return null;
  const u = Math.min(Math.max((a + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), p = d + 18, w = c - 18 - r;
  let m;
  return p <= f ? m = Math.max(p, 14) : w >= 14 ? m = Math.min(w, f) : m = Math.min(Math.max(p, 14), f), { left: u, top: m };
}
function H0(e, t) {
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
const G0 = "painting";
function OA(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const FA = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function TA(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: s = null, fpsLocked: a = !1, camera: l = !1, cameraHideable: c = !1, scene: d = !1, upstream: u = [] }) {
  const f = (m, h, y, z, T, ie, { keyable: P = !0, hideable: X = !0, origin: j = null } = {}) => {
    const J = (_e) => (r == null ? void 0 : r.owner) === m && r.lane === _e ? r.frames.map((ke) => ke + ie) : [];
    return {
      id: m,
      label: y,
      icon: z,
      clip: T,
      selected: m === n,
      hideable: X,
      visible: h.visible,
      ...Kp(j),
      keyable: P,
      open: P && o.has(m),
      keys: K1(h).map((_e) => ({ frame: _e.frame + ie, full: _e.full })),
      selectedFrames: J(null),
      lanes: (P ? No(h) : []).map((_e) => ({
        key: `${m}:${_e}`,
        lane: _e,
        label: FA[_e],
        frames: h[_e].keyframes.map((ke) => ke.frame + ie),
        selectedFrames: J(_e)
      }))
    };
  }, p = ({ start: m, in: h, duration: y }) => ({ clip: { start: m, end: y === null ? null : m + y }, offset: m - h }), w = (m, { idOf: h = (T) => T, sceneRow: y, origin: z = null }) => {
    const T = m.stickers.filter((P) => P.placement === "sky").sort((P, X) => X.z_index - P.z_index), ie = m.stickers.filter((P) => P.placement === "world");
    return [
      ...[...T, ...ie].map((P) => {
        const { clip: X, offset: j } = p(P.clip), J = Wm(z ? { ...P, id: P.origin.id } : P);
        return f(P.id, P, J, Ke.image, X, j, { origin: z && { ...z, overridden: z.stickerOverridden(P) } });
      }),
      ...OA(m.painting) || !m.painting_visible ? [{
        id: h(G0),
        label: "Paint",
        icon: Ke.paintbrush_vertical_tool,
        clip: null,
        selected: !1,
        hideable: !0,
        visible: m.painting_visible,
        ...Kp(z && { ...z, overridden: z.paintingOverridden }),
        keyable: !1,
        open: !1,
        keys: [],
        selectedFrames: [],
        lanes: []
      }] : [],
      ...y || il(m.scene) ? [(() => {
        const { clip: P, offset: X } = p(m.scene.clip);
        return f(h("scene"), m.scene, "Scene", Ke.box, P, X, {
          keyable: !1,
          origin: z && { ...z, overridden: z.sceneOverridden }
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
    groups: u.map(({ key: m, sceneState: h, editable: y, record: z, scene: T, deleted: ie }) => ({
      key: m,
      label: `${ef(m)}${y ? "" : " · inherited only"}`,
      revert: { disabled: !y || !L0(z) },
      restore: { label: `Restore deleted (${ie})`, disabled: !y || ie === 0 },
      rows: w(h, {
        idOf: (P) => Vu(m, P),
        sceneRow: T || !h.scene.visible,
        origin: {
          editable: y,
          stickerOverridden: (P) => !!(z != null && z.stickers.some((X) => X.id === P.origin.id && X.placement === P.placement)),
          paintingOverridden: !!z && Object.hasOwn(z, "painting_visible"),
          sceneOverridden: !!z && Object.keys(z.scene).length > 0
        }
      })
    }))
  };
}
function Kp(e) {
  return e ? { upstream: !0, overridden: e.overridden, editable: e.editable } : { upstream: !1, overridden: !1, editable: !0 };
}
function DA(e, t, r, n) {
  const i = Y1(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, s = Math.max(...r) + n;
  return { label: o === s ? `Frame ${o}` : `${o} – ${s}`, ...i };
}
const RA = 4, LA = 0.25, K0 = {
  KeyW: ["forward", 1],
  KeyS: ["forward", -1],
  KeyD: ["right", 1],
  KeyA: ["right", -1],
  KeyE: ["up", 1],
  KeyQ: ["up", -1]
};
function W0(e) {
  return Object.hasOwn(K0, e);
}
function U0(e, t, r) {
  const { forward: n, right: i } = ji(e.yaw_deg, 0), o = [0, 1, 2].map((a) => n[a] * t.forward + i[a] * t.right + (a === 1 ? t.up : 0)), s = Math.hypot(...o);
  return !(s > 0) || !(r > 0) ? e : { ...e, position: e.position.map((a, l) => a + o[l] * r / s) };
}
function VA() {
  const e = /* @__PURE__ */ new Set();
  let t = !1, r = !1, n = 0;
  function i() {
    e.clear(), t = !1, r = !1;
  }
  return {
    // Holds a movement key down at time ts (ms); false for another key. The first one starts the clock.
    press(o, s) {
      return W0(o) ? (e.size || (n = s), e.add(o), !0) : !1;
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
        const [a, l] = K0[s];
        o[a] += l;
      }
      return o;
    },
    // How far a second takes the view for content of size `scale`.
    speed(o) {
      return o * (t ? RA : 1) * (r ? LA : 1);
    },
    // The seconds since the last call, or since the first key went down; 0 with no key held.
    elapsed(o) {
      if (!e.size) return 0;
      const s = Math.max(0, o - n) / 1e3;
      return n = Math.max(n, o), s;
    }
  };
}
const $A = /* @__PURE__ */ new Set(["pano", "unwrap", "frame"]), zA = /* @__PURE__ */ new Set(["3dof", "6dof"]);
function jA(e) {
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
function Wp(e, t, r) {
  return Number.isFinite(e) && e >= t && e <= r;
}
function HA(e, { frame: t }) {
  if (!e) return null;
  const { mode: r, spaceMode: n, position: i, yaw_deg: o, pitch_deg: s, hFOV_deg: a, distance: l, moved: c } = e;
  return $A.has(r) && (r !== "frame" || t) && zA.has(n) && Array.isArray(i) && i.length === 3 && i.every(Number.isFinite) && Number.isFinite(o) && Wp(s, -89.9, 89.9) && Wp(a, 35, 140) && Number.isFinite(l) && l > 0 && typeof c == "boolean" ? {
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
const GA = 250, KA = 600, WA = 180, UA = 2;
function BA(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Jo(e, t, r) {
  return e + (t - e) * r;
}
function YA(e, t, r = 1) {
  const n = Math.max(
    Math.abs(ad(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((s, a) => s - e.position[a])) / Math.max(r, 1e-6), o = Math.min(1, n / WA + i / UA);
  return Math.round(Jo(GA, KA, o));
}
function qA(e, t, r) {
  const n = BA(Oe(r, 0, 1));
  return {
    position: e.position.map((i, o) => Jo(i, t.position[o], n)),
    yaw_deg: Kt(e.yaw_deg + ad(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Jo(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Jo(e.hFOV_deg, t.hFOV_deg, n),
    distance: Jo(e.distance, t.distance, n)
  };
}
function XA(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(ad(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function JA(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return XA(e, t) ? null : { from: e, to: t, startTs: r, durationMs: YA(e, t, n), end: i };
}
function ZA(e, t) {
  const r = Oe((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: qA(e.from, e.to, r), done: !1 };
}
function kl(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function QA(e, t, r) {
  const n = kl(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function eC(e) {
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
  let w, m, h, y, z, T, ie, P, X, j, J, _e, ke, ge, ve = null;
  function he(V, ce = null) {
    const H = b();
    J(() => {
      i.viewTransition = JA(H, V, performance.now(), { scale: R(), end: ce });
    }), !i.viewTransition && ce && Se(ce), p.state.inertia.active = !1, p.state.inertia.vx = 0, p.state.inertia.vy = 0, ke(), X({ localOnly: !0, reason: pt.VIEW });
  }
  function Se(V) {
    se(du({ ...ee(), moved: V.moved }, V.mode, Y())), a.backgroundDirty = !0;
  }
  function pe() {
    i.viewTransition && (i.viewTransition = null, ke());
  }
  function ne(V, ce) {
    he({ ...b(), yaw_deg: V, pitch_deg: ce });
  }
  function ae() {
    return !f || C() && !z();
  }
  function fe() {
    return i.mode === "pano" && $();
  }
  function $() {
    return u && KS({ sceneLinked: l && !!Bl(s).scene, files: j(), stickers: d.stickers });
  }
  function A() {
    return i.spaceMode === "6dof" && fe();
  }
  function D() {
    var V, ce, H;
    return ik((H = (ce = (V = t.ui) == null ? void 0 : V.settings) == null ? void 0 : ce.getSettingValue) == null ? void 0 : H.call(ce, r0));
  }
  function ee() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function se(V) {
    i.spaceMode = V.mode, i.viewPosition = V.position, i.viewMoved = V.moved;
  }
  function U(V) {
    var H;
    const ce = QA(i.spaceMode, i.viewTransition, V);
    if (ce !== "keep") {
      if (ce === "return") {
        he({ ...b(), position: Y(), distance: ((H = g()) == null ? void 0 : H.radius) || dr }, { mode: V, moved: !1 });
        return;
      }
      pe(), se(du({ ...ee(), position: b().position }, V, Y())), a.backgroundDirty = !0, ke(), X({ localOnly: !0, reason: pt.VIEW });
    }
  }
  function b() {
    var H;
    const V = i.viewMoved ? i.viewDistance : ((H = g()) == null ? void 0 : H.radius) || dr, ce = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: V };
    return VS(i.spaceMode, ce, Y());
  }
  function Y() {
    return C() ? B().position : [0, 0, 0];
  }
  function ue() {
    return r && d.camera !== null;
  }
  function C() {
    return ue() && d.camera.visible;
  }
  function W() {
    return d.painting_visible !== !1;
  }
  function v(V) {
    return V.visible && xo(V.clip, i.frame);
  }
  function B() {
    return $l(d.camera, i.frame);
  }
  function g() {
    var ce;
    const V = w();
    return ((ce = V.space ?? V.content) == null ? void 0 : ce.sphere) ?? null;
  }
  function S(V) {
    i.viewPosition = V.position, i.viewYaw = V.yaw_deg, i.viewPitch = V.pitch_deg, i.viewDistance = V.distance, i.viewMoved = !0, a.backgroundDirty = !0, X({ localOnly: !0, reason: pt.VIEW });
  }
  function R() {
    var V;
    return ((V = g()) == null ? void 0 : V.radius) || dr;
  }
  function x() {
    var k;
    const V = w().space, ce = m(), H = i.worldSelectedId || i.selectedId, Z = ce.stickers.findIndex((oe) => oe.id === H), G = Z < 0 ? _e(H) : null, q = Z < 0 ? (k = V.upstreamItems.find((oe) => {
      var re;
      return ((re = oe.request) == null ? void 0 : re.id) === H;
    })) == null ? void 0 : k.request : V.sticker, K = Z < 0 && !Ht(G) ? null : {
      sticker: G ?? ce.stickers[Z],
      value: G ? Wr(G, i.frame) : Os(ce, i.frame).stickers[Z],
      plane: [...V.stickers, ...V.upstreamStickers].find((oe) => oe.id === H) ?? null,
      item: (q == null ? void 0 : q.id) === H && q.url ? { kind: q.kind, box: o.sceneBox(q.url) } : null
    }, M = y() ? xe() : YS(g(), K);
    if (!M) return;
    const te = b();
    i.viewDistance = te.distance, i.viewMoved = !0, he(GS(te, M, n.width, n.height));
  }
  function F(V) {
    return o.pickSurface(we(), V.x, V.y, n.width, n.height);
  }
  function L(V, ce) {
    var H;
    return fu(V, ce, i.viewMoved ? null : (H = g()) == null ? void 0 : H.center, R());
  }
  function I() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function N(V, ce) {
    const H = performance.now(), Z = { x: V.x, y: V.y, time: H, key: o.contentRevision(), view: I() };
    if (!Xm(ve, Z)) {
      const q = F(V);
      ve = { ...Z, cost: performance.now() - H, hit: q };
    }
    const G = b();
    S(Qm(G, L(G, ve.hit), ce, R())), ve.view = I(), ve.wheelTime = H;
  }
  function E(V, ce, H) {
    const Z = b();
    i.interaction = V === "orbit" ? { kind: "space_orbit", last: ce, pivot: L(Z, F(ce)) } : { kind: "space_pan", last: ce, depth: qm(Z, R()) }, ge(ce), n.setPointerCapture(H);
  }
  function _() {
    return A() || T();
  }
  function O(V) {
    const ce = P.elapsed(V);
    if (!ce || i.viewTransition) return !1;
    const H = P.speed(R()) * ce;
    if (T()) return ie(P.direction(), H);
    if (!A()) return !1;
    const Z = b(), G = U0(Z, P.direction(), H);
    return G === Z ? !1 : (i.viewPosition = G.position, i.viewDistance = Z.distance, i.viewMoved = !0, !0);
  }
  function Q() {
    dl(s).view = jA(i);
  }
  function me() {
    const V = c && !z0({ hasShot: !!h(), erp: z() }).disabled, ce = HA(dl(s).view, { frame: V });
    ce && Object.assign(i, ce);
  }
  function ye(V) {
    return V * 0.2;
  }
  function xe() {
    return { center: B().position, radius: ye(R()) };
  }
  function de(V, ce) {
    const { yaw_deg: H, pitch_deg: Z } = ig(V.position, ce);
    return { ...V, yaw_deg: H, pitch_deg: Z };
  }
  function we() {
    return Md(b(), n.width, n.height, g());
  }
  return {
    connect(V) {
      ({
        editorViewInput: w,
        editorViewSceneState: m,
        getActiveCutoutShot: h,
        isCameraSelected: y,
        isErpCamera: z,
        isFreeFrameView: T,
        moveFrameByKeys: ie,
        moveKeys: P,
        requestDraw: X,
        sceneFiles: j,
        startAnimation: J,
        stickerById: _e,
        syncFloatingViewButtonState: ke,
        updateCursor: ge
      } = V);
    },
    transitionView: he,
    applyViewTransitionEnd: Se,
    cancelViewTransition: pe,
    turnViewTo: ne,
    cameraPreviewShown: ae,
    isSpaceView: fe,
    hasSpaceContent: $,
    isFreeSpaceView: A,
    viewControls: D,
    spaceModeState: ee,
    applySpaceMode: se,
    setSpaceMode: U,
    spaceViewState: b,
    spaceOrigin: Y,
    hasCamera: ue,
    cameraShoots: C,
    paintingShown: W,
    sceneStickerShown: v,
    cutoutCamera: B,
    contentSphere: g,
    setSpaceView: S,
    spaceScale: R,
    frameSpaceContent: x,
    zoomSpaceAt: N,
    startSpaceDrag: E,
    canKeyMove: _,
    stepKeyMove: O,
    saveView: Q,
    restoreView: me,
    currentSpaceCamera: we,
    cameraFrustumLength: ye,
    cameraSphere: xe,
    lookingAt: de
  };
}
function tC(e) {
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
  let u, f, p, w, m, h, y, z, T, ie, P, X, j, J, _e, ke, ge, ve, he, Se, pe, ne, ae, fe, $, A, D, ee, se, U, b, Y, ue, C, W = { revision: -1, sceneState: null }, v = null;
  function B() {
    return v || (v = R()), v;
  }
  function g() {
    v = null;
  }
  function S() {
    return W.sceneState;
  }
  function R() {
    const de = X(), we = p(), V = { ...a.assets };
    for (const Ne of l ? [] : a.stickers) {
      const Ee = String((Ne == null ? void 0 : Ne.asset_id) || "");
      Ee && !V[Ee] && i.has(Ee) && (V[Ee] = { type: "comfy_image", filename: Ee });
    }
    const ce = l ? a.stickers.map((Ne) => Se(Ne) ? { ...Ne, source: { kind: "file", filename: se(Ne) } } : Ne) : a.stickers;
    W.revision !== s.stateRevision && (W = { revision: s.stateRevision, sceneState: Ln({ ...a, stickers: ce, assets: V, painting: null }) }), l && x(W.sceneState);
    const H = Os(W.sceneState, r.frame), Z = ne ? ie() : null, G = (Ne) => {
      if (l && !Ne.visible) return null;
      if (ne && ge(Ne)) return Z;
      const Ee = J(Ne);
      return Ee ? { media: Ee, revision: j(Ee) } : null;
    }, q = ue(), K = [...q.sky, ...dg(W.sceneState, r.frame, a.stickers, { media: G, paintLayers: we, evaluated: H })], M = de && (de === d || de === c) ? d.dataset.panoSrc : de, te = ke(de) ? { media: de, revision: j(de), coverage: f(), source: M } : null, k = _e(), oe = $S($(), k, A());
    oe.mode !== r.spaceMode && h(), u(oe);
    const re = k ? F(W.sceneState, H, G, q) : null, be = he() ? { ...re, ...L(re) } : null;
    return { background: te, layers: K, space: be, content: re };
  }
  function x(de) {
    const we = new Map(a.stickers.map((V) => [V.id, V.clip]));
    de.scene.clip = { ...a.scene.clip };
    for (const V of de.stickers) {
      const ce = we.get(V.id);
      ce && (V.clip = { ...ce });
    }
  }
  function F(de, we, V, ce) {
    const H = ae(), Z = Nd(H, we.scene), G = Z != null && Z.url ? n.sceneBox(Z.url) : null, q = G && Aa(Z.kind, G), K = ee(), M = ng(K, de, we), te = M != null && M.url ? n.sceneBox(M.url) : null, k = te ? [{ box: Aa(M.kind, te), value: M.value }] : [], oe = pg(de, r.frame, a.stickers, { media: V, evaluated: we });
    for (const { request: be, value: Ne } of ce.items) {
      const Ee = be != null && be.url ? n.sceneBox(be.url) : null;
      Ee && k.push({ box: Aa(be.kind, Ee), value: Ne });
    }
    const re = gu(US(we, q, [...oe, ...ce.stickers], k));
    return {
      evaluated: we,
      sceneUrls: H ? H.urls.filter(Boolean) : [],
      scene: Z,
      stickerUrls: rg(K, de),
      sticker: M,
      stickers: oe,
      upstreamStickers: ce.stickers,
      upstreamItems: ce.items,
      sphere: re
    };
  }
  function L(de) {
    var V;
    const we = ((V = de.sphere) == null ? void 0 : V.radius) || dr;
    return {
      gizmo: N() ? O() : I(de.evaluated),
      grid: r.showGrid && !r.fullscreen ? o_(we) : null,
      lines: m() ? _(we) : []
    };
  }
  function I(de) {
    const we = fe(), V = Ht(we) ? Wr(we, r.frame) : de.stickers.find((ce) => ce.id === (we == null ? void 0 : we.id));
    return !C(we) || !(V != null && V.active) ? null : { mode: r.gizmoMode, transform: pu(V) };
  }
  function N() {
    return m() && r.selectedId === Sd;
  }
  let E = { revision: -1, span: -1, segments: [] };
  function _(de) {
    const we = b();
    (E.revision !== s.stateRevision || E.span !== we) && (E = { revision: s.stateRevision, span: we, segments: a_(l_(a, we)) });
    const { segments: V } = E, ce = V.length ? [{ segments: V, color: f2 }] : [];
    if (!ve()) return ce;
    const H = N() ? P0 : d2;
    return [...ce, { segments: og(z(), w(de)), color: H }];
  }
  function O() {
    return !ve() || !N() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: pu({ ...z(), scale: 1 }) };
  }
  function Q() {
    const { background: de, layers: we, space: V } = B(), ce = t.width, H = t.height, Z = T({ x: 0, y: 0, w: ce, h: H });
    let G = !1;
    return !de && !we.length && !V ? (n.clear(460551), G = n.ready) : (n.clear(), G = !!n.render({
      rect: Z,
      camera: V ? Md(D(), ce, H, V.sphere) : y(),
      background: de,
      layers: we,
      space: V
    })), U(), (r.worldSelectedId || N() || pe()) && Y(), G;
  }
  function me(de) {
    const { content: we } = B();
    return !we || !de.position ? as(de) : eg(as(de), de.position, P(), we.sphere);
  }
  function ye(de, we, V, ce = null) {
    const { background: H, layers: Z, content: G } = B();
    if (!H && !Z.length && !G) return null;
    const q = G && we.position ? G : null;
    return n.render({ rect: de, camera: me(we), background: H, layers: Z, space: q, owner: V, clearColor: ce });
  }
  function xe(de) {
    return n.clear(460551), !!n.renderUnwrap({ rect: T(de), ...B() });
  }
  return {
    connect(de) {
      ({
        applySpaceMode: u,
        backgroundCoverage: f,
        buildEditorViewPaintLayers: p,
        cameraFrustumLength: w,
        cameraShoots: m,
        cancelViewTransition: h,
        currentViewCamera: y,
        cutoutCamera: z,
        deviceRect: T,
        followPortSticker: ie,
        frameViewDistance: P,
        getConnectedErpImage: X,
        getMediaRevisionToken: j,
        getStickerImage: J,
        hasSpaceContent: _e,
        isDecodedImageReady: ke,
        isExternalSticker: ge,
        isFreeSpaceView: ve,
        isSpaceView: he,
        isUploadingSticker: Se,
        isWorldMenuShown: pe,
        portVideo: ne,
        sceneFiles: ae,
        selectedWorldSticker: fe,
        spaceModeState: $,
        spaceOrigin: A,
        spaceViewState: D,
        stickerFiles: ee,
        stickerImageKey: se,
        syncFloatingViewButtonState: U,
        timelineSpanFrames: b,
        updateSelectionMenu: Y,
        upstreamViewInput: ue,
        worldStickerEditable: C
      } = de);
    },
    editorViewInput: B,
    endEditorViewFrame: g,
    editorViewSceneState: S,
    isCameraSelected: N,
    renderEditorView: Q,
    shotViewCamera: me,
    drawEditorViewShot: ye,
    renderEditorViewUnwrap: xe
  };
}
function nC(e) {
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
  const w = /* @__PURE__ */ new Map(), m = () => u({ cause: "frame_view", localOnly: !0, reason: pt.MEDIA });
  function h(C) {
    if (!C) return null;
    let W = w.get(C);
    return W || (W = new Image(), W.onload = m, W.onerror = m, W.src = C, w.set(C, W)), W;
  }
  function y({ sceneState: C, ui: W }) {
    return [
      ...C.stickers.filter((v) => v.source.kind !== "port").map((v) => n(sl(v.source))),
      i(Xn(W, Di)[0] || null),
      ...C.painting.raster_objects.map((v) => v.rasterDataUrl)
    ].filter(Boolean);
  }
  function z() {
    return a && (rp(o, "scene") === O0 || !!T());
  }
  function T() {
    const C = a && Wt(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, W = Array.isArray(C) ? C : null;
    if (f.list !== W) {
      f.entries.forEach(Y), f = { list: W, entries: W ? L2(W).map((B) => ({ layer: B })) : [], fps: null };
      const v = new Set(f.entries.flatMap((B) => y(B.layer)));
      for (const B of [...w.keys()]) v.has(B) || w.delete(B);
    }
    return W && f.fps !== s.timeline.fps && ie(), W && f.entries;
  }
  function ie() {
    if (!f.list) return;
    const C = H2(f.entries.map((W) => W.layer), s.upstream, s.timeline.fps);
    f.entries.forEach((W, v) => {
      W.working = C[v];
    }), f.fps = s.timeline.fps, p = Hp(C);
  }
  function P() {
    if (!f.list) return;
    const C = f.entries.map((v) => v.working), W = K2(s.upstream, f.entries.map((v) => v.layer), C, p, f.fps);
    W !== s.upstream && (s.upstream = W, p = Hp(C));
  }
  function X() {
    const C = T();
    C && (s.upstream = Z2(s.upstream, C.map((W) => W.layer)));
  }
  function j(C) {
    P();
    const W = C(s.upstream);
    return W === s.upstream ? !1 : (s.upstream = W, ie(), !0);
  }
  function J(C) {
    const W = C.map((v) => v.origin);
    return j((v) => U2(v, W, s.timeline.fps));
  }
  function _e(C, W = null) {
    return j((v) => Y2(v, C, W));
  }
  function ke(C) {
    return j((W) => J2(W, C));
  }
  function ge(C) {
    return j((W) => X2(W, C));
  }
  function ve() {
    return (T() ?? []).flatMap((C) => C.working.sceneState.stickers);
  }
  function he(C) {
    const W = f.entries.find((v) => {
      var B;
      return ((B = v.working) == null ? void 0 : B.key) === C.origin.layer;
    });
    return W ? h(i(Xn(W.layer.ui, Di)[0] || null)) : null;
  }
  function Se(C = null) {
    const W = T();
    if (!W) return 0;
    const [v] = t.uiValue(o, "pano_timeline_frames") || [];
    let B = Number(v) > 0 ? Number(v) : 0;
    const g = W.map((S) => S.working);
    for (const { index: S, clip: R, sticker: x } of W2(g, s.upstream, p)) {
      const F = Xn(W[S].layer.ui, Tu)[0], L = R === C ? R.start + 1 : R.duration !== null ? R.start + R.duration : (x == null ? void 0 : x.source.kind) === "port" && F && typeof F == "object" ? Od(R, s.timeline.fps, F) : 0;
      B = Math.max(B, L);
    }
    return B;
  }
  function pe() {
    return (T() ?? []).flatMap(({ working: C }) => [C.sceneState.scene, ...C.sceneState.stickers]);
  }
  function ne() {
    return (T() ?? []).map(({ layer: C, working: W }) => {
      const v = Ns(W.key);
      return {
        key: W.key,
        sceneState: W.sceneState,
        editable: v,
        record: v ? s.upstream.find((B) => B.layer === W.key) ?? null : null,
        scene: Xn(C.ui, "pano_scene_files").length > 0,
        deleted: v ? q2(s.upstream, W) : 0
      };
    });
  }
  function ae(C) {
    for (const { working: W } of T() ?? []) {
      const { key: v, sceneState: B } = W, g = Ns(v);
      if (C === Vu(v, "scene")) return { editable: g, part: "scene", owner: B.scene, sceneState: B };
      if (C === Vu(v, "painting")) return { editable: g, part: "painting", owner: null, sceneState: B };
      const S = B.stickers.find((R) => R.id === C);
      if (S) return { editable: g, part: "sticker", owner: S, sceneState: B };
    }
    return null;
  }
  function fe() {
    if (!a) return "";
    const C = T();
    if (z2(rp(o, "scene"), C)) return "Run the workflow to show the upstream scene.";
    if (!C) return "";
    const W = t.uiList(o, "pano_sticker_warnings");
    return String(W.find((v) => String(v).startsWith($2)) ?? "");
  }
  function $(C, W, v) {
    const { ui: B } = C.layer, g = s.timeline.fps, S = Xn(B, Tu)[0], R = Xn(B, N0).map(i).filter(Boolean), x = i(Xn(B, M0)[0] || null), F = S && typeof S == "object" ? R.length ? { frames: R, meta: S } : x ? { src: x, meta: S } : null : null, L = h(i(Xn(B, Di)[0] || null)), I = F ? Ed(W.clip, v, g, F.meta) : null;
    let N = L;
    if (F != null && F.frames)
      C.frames || (C.frames = Td({
        createImage: (E, _) => {
          const O = new Image();
          return O.onload = _, O.onerror = _, O.src = E, O;
        },
        onLoad: m
      })), N = C.frames.picture(F.frames, I, F.meta, L);
    else if (F != null && F.src) {
      const E = A(C);
      E.follow({ src: F.src, time: I, playing: d.advancing, fps: g }), N = E.picture(C.still, L);
    }
    return N ? { media: N, revision: c(N), source: Fd(F, L) } : null;
  }
  function A(C) {
    if (C.follower) return C.follower;
    const W = Es(document, "editor.upstream-port-video");
    W.playsInline = !0, W.preload = "auto";
    const v = on({ label: "editor.upstream-port-still" });
    return v.__panoFrameIdx = 0, C.video = W, C.still = v, C.follower = $d({
      video: W,
      onCapture: () => {
        var S;
        const B = Number(W.videoWidth || 0), g = Number(W.videoHeight || 0);
        B < 1 || g < 1 || (v.width = B, v.height = g, (S = v.getContext("2d")) == null || S.drawImage(W, 0, 0), v.__panoFrameIdx += 1, m());
      },
      onChange: m
    }), C.follower;
  }
  function D(C, W, v) {
    if (W.source.kind === "port") return $(C, W, v);
    const B = h(n(sl(W.source)));
    return B ? { media: B, revision: c(B) } : null;
  }
  function ee(C) {
    var L;
    const { sceneState: W } = C.working, { painting: v } = W, B = v.paint.strokes.length + v.mask.strokes.length;
    if (!W.painting_visible || !B && !v.raster_objects.length) return [];
    const g = l(), S = `${g.width}x${g.height}`;
    C.paintSize !== S && (U(C), C.paintSize = S, C.paintEngine = B ? Ll(g) : null, (L = C.paintEngine) == null || L.rebuildCommitted({ painting: v }), C.rasters = /* @__PURE__ */ new Map());
    const R = C.paintEngine, x = (R == null ? void 0 : R.getMaskDisplayCanvas()) || null, F = [];
    for (const I of j2(W, R ? R.getAllGroupIds() : [], !!x)) {
      const N = I.kind === "group" ? R == null ? void 0 : R.getGroupDisplayCanvas(I.id) : I.kind === "mask" ? x : se(C, I.item, g);
      N && F.push({ id: `${I.kind}:${I.id}`, media: N, revision: S, opacity: 1, zIndex: I.zIndex });
    }
    return F;
  }
  function se(C, W, { width: v, height: B }) {
    if (C.rasters.has(W.id)) return C.rasters.get(W.id);
    const g = h(W.rasterDataUrl);
    if (!g.complete || !g.naturalWidth) return null;
    const S = on({ label: "editor.upstream-raster-erp", width: v, height: B }), R = S.getContext("2d");
    return R ? (A0(R, g, W, v, B), C.rasters.set(W.id, S), S) : null;
  }
  function U(C) {
    var W;
    (W = C.rasters) == null || W.forEach((v) => hs(v)), C.rasters = null, C.paintEngine = null, C.paintSize = null;
  }
  function b() {
    const C = T() ?? [], W = { sky: [], stickers: [], items: [] }, v = r.frame;
    return C.forEach((B) => {
      const g = Q2(B.working, B.working.key, v, {
        media: (S) => D(B, S, v),
        paintLayers: ee(B),
        source: i
      });
      W.sky.push(...g.sky), W.stickers.push(...g.stickers), W.items.push(...g.items);
    }), W;
  }
  function Y(C) {
    var W;
    (W = C.follower) == null || W.dispose(), C.still && hs(C.still), U(C);
  }
  function ue() {
    f.entries.forEach(Y), f = { list: null, entries: [], fps: null }, p = /* @__PURE__ */ new Map(), w.clear();
  }
  return {
    connect(C) {
      ({ getDesiredPaintTargetDescriptor: l, getMediaRevisionToken: c, playback: d, requestDraw: u } = C);
    },
    upstreamEntries: T,
    upstreamLinked: z,
    upstreamNotice: fe,
    upstreamSpanFrames: Se,
    upstreamViewInput: b,
    rebuildUpstreamWorking: ie,
    syncUpstreamEdits: P,
    pruneUpstreamRecords: X,
    deleteUpstreamStickers: J,
    revertUpstreamSticker: _e,
    revertUpstreamLayer: ke,
    restoreUpstreamDeleted: ge,
    upstreamStickers: ve,
    upstreamStickerImage: he,
    upstreamTimelineLayers: ne,
    upstreamTimelineOwners: pe,
    upstreamRow: ae,
    disposeUpstream: ue
  };
}
const $u = "camera_preview";
function rC(e) {
  return e === $u ? pt.SPLAT_PREVIEW : pt.SPLAT_STAGE;
}
function iC(e) {
  return [...e].some((t) => t !== pt.VIEW && t !== pt.OVERLAY && t !== pt.SPLAT_STAGE);
}
function B0(e, t = !1) {
  const r = Oe(zi(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function oC(e) {
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
  let d, u, f, p, w = null, m = !1, h = !1;
  function y() {
    m && (m = !1, o.releaseSplats($u));
  }
  function z() {
    w = null, h = !1, y();
  }
  function T(_e) {
    if (!n || !_e) return !1;
    const ke = n.closest(".pano-camera-preview");
    if (!ke) return !1;
    const ge = Math.round(Number(ke.clientWidth || n.clientWidth || 0)), ve = Math.round(Number(ke.clientHeight || n.clientHeight || 0));
    return Math.abs(ge - Number(_e.width || 0)) <= 1 && Math.abs(ve - Number(_e.height || 0)) <= 1;
  }
  function ie(_e, ke) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !a || !c.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, z();
      return;
    }
    const ge = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !ge || !r) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = ge ? "Preview unavailable" : "Add Frame to preview", z();
      return;
    }
    const ve = B0(ge, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = ve.width, c.cameraPreview.height = ve.height, h) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, y();
      return;
    }
    const he = window.devicePixelRatio || 1, Se = Math.max(1, ve.width * he), pe = Math.max(1, ve.height * he), ne = Math.min(1, t.width / Se, t.height / pe), ae = { width: Math.max(1, Math.floor(Se * ne)), height: Math.max(1, Math.floor(pe * ne)) }, fe = !w || w.width !== ae.width || w.height !== ae.height || iC(ke);
    if (_e && fe) {
      m = !0;
      const A = u({ x: 0, y: t.height - ae.height, w: ae.width, h: ae.height }, ge, $u);
      w = A ? ae : null, A && J(A);
    }
    if (!w) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = p() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const $ = T(ve);
    c.cameraPreview.ready = !0, c.cameraPreview.label = $ ? "" : "Loading preview", c.cameraPreview.settled = $ && s.pendingStableLayoutFrames <= 0 && s.hasPresentedFrame;
  }
  function P() {
    w = null, h = !1;
  }
  let X = 0, j = !1;
  function J(_e) {
    const ke = ++X;
    createImageBitmap(_e.canvas, _e.x, _e.y, _e.width, _e.height).then((ge) => {
      var ve;
      if (ke !== X || !s.running) {
        ge.close();
        return;
      }
      (ve = r.getContext("bitmaprenderer")) == null || ve.transferFromImageBitmap(ge);
    }).catch((ge) => {
      ke !== X || !s.running || (h = !0, w = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !j && (j = !0, console.error("[PanoramaStickers] camera preview frame failed", ge)));
    });
  }
  return {
    connect(_e) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: p
      } = _e);
    },
    drawCutoutOutputPreview: ie,
    forgetCameraPreviewFrame: P
  };
}
function sC(e) {
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
  let u, f, p, w, m, h, y, z, T, ie, P, X, j, J, _e, ke, ge, ve, he, Se, pe, ne, ae, fe, $, A, D, ee, se, U, b, Y, ue, C, W, v, B, g;
  function S(V) {
    const ce = r.width, H = r.height, Z = J();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, ce, H), Y(), V && (a.backgroundDirty = !W(Z)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let q = 0; q <= 16; q += 1) {
        const K = Z.x + Z.w * q / 16;
        n.beginPath(), n.moveTo(K, Z.y), n.lineTo(K, Z.y + Z.h), n.stroke();
      }
      for (let q = 0; q <= 8; q += 1) {
        const K = Z.y + Z.h * q / 8;
        n.beginPath(), n.moveTo(Z.x, K), n.lineTo(Z.x + Z.w, K), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(Z.x, Z.y + Z.h / 2), n.lineTo(Z.x + Z.w, Z.y + Z.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const G = Z.y + Z.h * 0.57;
      n.fillText("Left", Z.x + Z.w * 0.25, G), n.fillText("Front", Z.x + Z.w * 0.5, G), n.fillText("Right", Z.x + Z.w * 0.75, G), n.fillText("Back", Z.x + 38, G), n.fillText("Back", Z.x + Z.w - 38, G);
    }
  }
  function R(V, ce, H = 1) {
    let Z = !1;
    n.strokeStyle = ce, n.lineWidth = H, n.beginPath();
    for (const G of V) {
      const q = ee(G);
      if (!q) {
        Z = !1;
        continue;
      }
      Z ? n.lineTo(q.x, q.y) : (n.moveTo(q.x, q.y), Z = !0);
    }
    n.stroke();
  }
  function x(V) {
    const ce = r.width, H = r.height;
    if (n.clearRect(0, 0, ce, H), Y(), V && (a.backgroundDirty = !C()), i.showGrid && !i.fullscreen && m().space)
      F();
    else if (i.showGrid && !i.fullscreen) {
      for (let G = -180; G <= 180; G += 15) {
        const q = [];
        for (let K = -89; K <= 89; K += 4) q.push(Tn(G, K));
        R(q, "#3f3f46", G % 90 === 0 ? 1.3 : 1);
      }
      for (let G = -75; G <= 75; G += 15) {
        const q = [];
        for (let K = -180; K <= 180; K += 4) q.push(Tn(K, G));
        R(q, G === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", G === 0 ? 1.5 : 1);
      }
      const Z = [
        { name: "Left", dir: Tn(-90, 0) },
        { name: "Front", dir: Tn(0, 0) },
        { name: "Right", dir: Tn(90, 0) },
        { name: "Back", dir: Tn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", Z.forEach((G) => {
        const q = ee(G.dir);
        q && n.fillText(G.name, q.x, q.y + 24);
      });
    }
  }
  function F() {
    const V = Md(g(), r.width, r.height, f()), ce = Ss(V, [0, 0, 0], r.width, r.height);
    ce && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", ce.x, ce.y - 12));
  }
  function L(V, ce) {
    const H = D(V), Z = Tn(Number(H.yaw_deg || 0), Number(H.pitch_deg || 0)), G = i.mode === "unwrap" ? se(Z) : null, q = G ? G.x : null, K = i.mode === "pano" ? 28 : 20, M = [
      v(V, 0, K, q),
      v(V, 1, K, q),
      v(V, 2, K, q),
      v(V, 3, K, q)
    ];
    jd(n, M, { selected: ce });
  }
  function I(V, ce = []) {
    if (!(!V || !Array.isArray(ce) || ce.length < 4)) {
      V.beginPath(), V.moveTo(ce[0].x, ce[0].y);
      for (let H = 1; H < 4; H += 1) V.lineTo(ce[H].x, ce[H].y);
      V.closePath();
    }
  }
  function N(V, ce, H) {
    const Z = Array.isArray(V == null ? void 0 : V.corners) ? V.corners : [];
    if (Z.length < 4) return;
    const G = Oe(Number((V == null ? void 0 : V.visibilityAlpha) ?? 1), 0, 1);
    if (G <= 0.01) return;
    const q = n.globalAlpha;
    n.globalAlpha = q * G;
    const K = H ? "rgba(255, 116, 116, 0.96)" : ce ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", M = H ? "rgba(255, 89, 89, 0.08)" : ce ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", te = ce ? 3.2 : 2.6;
    I(n, Z), n.fillStyle = M, n.fill(), n.strokeStyle = K, n.lineWidth = te, n.stroke(), n.save(), n.strokeStyle = K, n.lineWidth = ce ? 3.2 : 2.6, n.lineCap = "round";
    const k = Array.isArray(V == null ? void 0 : V.edgeMidpoints) && V.edgeMidpoints.length >= 4 ? V.edgeMidpoints : [
      { edge: "top", x: (Z[0].x + Z[1].x) * 0.5, y: (Z[0].y + Z[1].y) * 0.5 },
      { edge: "right", x: (Z[1].x + Z[2].x) * 0.5, y: (Z[1].y + Z[2].y) * 0.5 },
      { edge: "bottom", x: (Z[2].x + Z[3].x) * 0.5, y: (Z[2].y + Z[3].y) * 0.5 },
      { edge: "left", x: (Z[3].x + Z[0].x) * 0.5, y: (Z[3].y + Z[0].y) * 0.5 }
    ], oe = { top: "bottom", right: "left", bottom: "top", left: "right" }, re = ce ? 12 : 9;
    k.forEach((be) => {
      const Ee = k.find((Ce) => (Ce == null ? void 0 : Ce.edge) === oe[be == null ? void 0 : be.edge]) || {
        x: (Z[0].x + Z[1].x + Z[2].x + Z[3].x) * 0.25,
        y: (Z[0].y + Z[1].y + Z[2].y + Z[3].y) * 0.25
      }, Ve = Ee.x - be.x, We = Ee.y - be.y, Ge = Math.hypot(Ve, We) || 1;
      n.beginPath(), n.moveTo(be.x, be.y), n.lineTo(be.x + Ve / Ge * re, be.y + We / Ge * re), n.stroke();
    }), n.restore(), n.globalAlpha = q;
  }
  function E(V, ce, H, Z) {
    const G = Oe(Number((ce == null ? void 0 : ce.visibilityAlpha) ?? 1), 0, 1);
    if (G <= 0.01) return;
    if (ae(V)) {
      N(ce, H, Z);
      return;
    }
    if (fe(V)) {
      const K = n.globalAlpha;
      n.globalAlpha = K * j(V) * G, i.mode === "frame" ? (n.strokeStyle = H ? "rgba(250, 250, 250, 0.9)" : Z ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = H ? 2 : 1, I(n, ce.corners), n.stroke()) : L(V, H), n.globalAlpha = K;
      return;
    }
    const q = n.globalAlpha;
    n.globalAlpha = q * G, n.fillStyle = H ? "rgba(0, 112, 243, 0.24)" : Z ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", I(n, ce.corners), n.fill(), n.strokeStyle = H ? "rgba(255, 255, 255, 1)" : Z ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = H ? 2.8 : 1.9, I(n, ce.corners), n.stroke(), n.globalAlpha = q;
  }
  function _(V, ce, H) {
    if (fe(V)) {
      t0(n, ce, { accent: H });
      return;
    }
    const Z = !(ae(V) && ke());
    n.fillStyle = H, Z && ce.corners.forEach((G) => {
      n.beginPath(), n.arc(G.x, G.y, 6.5, 0, Math.PI * 2), n.fill();
    }), Z && ae(V) && (n.strokeStyle = H, n.lineCap = "round", n.lineWidth = 4, ce.edgeMidpoints.forEach((G) => {
      var re, be, Ne, Ee;
      const q = (((re = G.b) == null ? void 0 : re.x) ?? G.x) - (((be = G.a) == null ? void 0 : be.x) ?? G.x), K = (((Ne = G.b) == null ? void 0 : Ne.y) ?? G.y) - (((Ee = G.a) == null ? void 0 : Ee.y) ?? G.y), M = Math.hypot(q, K) || 1, te = q / M, k = K / M, oe = 10;
      n.beginPath(), n.moveTo(G.x - te * oe, G.y - k * oe), n.lineTo(G.x + te * oe, G.y + k * oe), n.stroke();
    }), n.lineCap = "butt"), $(V) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(ce.rotateStemBase.x, ce.rotateStemBase.y), n.lineTo(ce.rotateHandle.x, ce.rotateHandle.y), n.stroke(), n.fillStyle = H, n.beginPath(), n.arc(ce.rotateHandle.x, ce.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function O() {
    var q;
    const V = i.mode === "frame" ? [] : X(), ce = V.length > 1, H = l ? y() : ie(), Z = H.map((K) => `${String((K == null ? void 0 : K.id) || "")}:${ae(K) ? "frame" : Number((K == null ? void 0 : K.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== H || i._sortedItemsCache.orderKey !== Z) && (i._sortedItemsCache = {
      src: H,
      orderKey: Z,
      sorted: [...H]
    });
    const G = [...V.filter(Ht), ...i._sortedItemsCache.sorted];
    for (const K of G) {
      const M = i.mode !== "frame" && !ce && Se(K);
      if (i.mode === "frame" && !M) continue;
      const te = fe(K), k = ae(K), oe = he(K);
      if (!te && !k || ne(K) && !B(K)) continue;
      const re = A(K);
      if (d !== "stickers" && !re.visible)
        continue;
      const be = Oe(Number((re == null ? void 0 : re.visibilityAlpha) ?? 1), 0, 1);
      if (be <= 0.01) continue;
      const Ne = k && l && i.mode === "pano" ? Oe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= Ne, E(K, re, M, oe), M && re.visible) {
        const Ee = oe ? "#ff4d4f" : te && ge(K) ? "#f59e0b" : "#0070f3", Ve = n.globalAlpha;
        n.globalAlpha = Ve * be, _(K, re, Ee), n.globalAlpha = Ve;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !h() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const K = i.cutoutPanoFrameVisual, M = Oe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= M, N(K.geom, K.selected, K.locked), K.selected && _(
        K.item,
        K.geom,
        K.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (ce) {
      const K = P(V);
      if (K != null && K.visible) {
        const M = u(V) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(K.corners[0].x, K.corners[0].y);
        for (let te = 1; te < K.corners.length; te += 1) n.lineTo(K.corners[te].x, K.corners[te].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = M, K.corners.forEach((te) => {
          n.beginPath(), n.arc(te.x, te.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      V.forEach((K) => {
        if (!$(K) && !pe(K)) return;
        const M = A(K);
        if (!(M != null && M.visible)) return;
        const te = he(K) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(M.corners[0].x, M.corners[0].y);
        for (let k = 1; k < M.corners.length; k += 1) n.lineTo(M.corners[k].x, M.corners[k].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = te, M.corners.forEach((k) => {
          n.beginPath(), n.arc(k.x, k.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((q = i.interaction) == null ? void 0 : q.kind) === "marquee_select") {
      const K = ue(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(K.x0, K.y0, K.x1 - K.x0, K.y1 - K.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function Q(V) {
    const ce = h(), H = z(ce);
    if (!ce || !H)
      return n.clearRect(0, 0, r.width, r.height), V && o.clear(657930), !1;
    const Z = { x: H.x, y: H.y, w: H.w, h: H.h }, { rect: G, shot: q } = lg(ce, H, { width: r.width, height: r.height }), K = me(Z);
    if (n.clearRect(0, 0, r.width, r.height), V) {
      o.clear(657930);
      const M = p(G), te = !!w(M, q, void 0, 657930);
      te || o.clear(1118481, M), a.backgroundDirty = !te;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(Z.x, Z.y, Z.w, Z.h, K), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = P0, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(Z.x + 1, Z.y + 1, Z.w - 2, Z.h - 2, Math.max(0, K - 1)), n.stroke(), n.restore(), !0;
  }
  function me(V) {
    const ce = Math.max(1e-6, Number(a.frameCanvasScale || 1));
    return Math.min(s * ce, Number((V == null ? void 0 : V.w) || 0) * 0.5, Number((V == null ? void 0 : V.h) || 0) * 0.5);
  }
  function ye() {
    var te, k;
    if (((te = i.interaction) == null ? void 0 : te.kind) !== "paint_lasso_fill") return;
    const V = i.interaction.stroke, ce = (k = V == null ? void 0 : V.geometry) == null ? void 0 : k.points;
    let H;
    if (i.mode === "frame") {
      const oe = h(), re = T(oe);
      H = U(ce, oe, re);
    } else
      H = b(ce);
    if (!Array.isArray(H) || H.length < 3) return;
    const Z = String((V == null ? void 0 : V.layerKind) || "") === "mask", G = (V == null ? void 0 : V.color) || { r: 1, g: 0.25, b: 0.25 }, q = Math.round(Number(G.r || 0) * 255), K = Math.round(Number(G.g || 0) * 255), M = Math.round(Number(G.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(H[0].x || 0), Number(H[0].y || 0));
    for (let oe = 1; oe < H.length; oe++) n.lineTo(Number(H[oe].x || 0), Number(H[oe].y || 0));
    n.closePath(), Z ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${q},${K},${M},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function xe() {
    const V = i.frameRollOverlayVisual, ce = Oe(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(V != null && V.shot) || ce <= 1e-4) return;
    const H = T(V.shot);
    if (!H) return;
    const Z = { x: H.x + H.w * 0.5, y: H.y + H.h * 0.5 }, G = Number(V.shot.roll_deg ?? V.shot.rot_deg ?? 0) * Nr, q = Math.hypot(H.w, H.h) * 0.55, K = Math.cos(G) * q, M = Math.sin(G) * q;
    n.save(), n.globalAlpha *= ce, n.beginPath(), n.rect(H.x, H.y, H.w, H.h), n.clip(), n.translate(Z.x, Z.y), n.rotate(G);
    const te = Math.max(12, Math.min(H.w, H.h) / 6);
    n.beginPath();
    for (let k = -q; k <= q; k += te)
      n.moveTo(k, -q), n.lineTo(k, q);
    for (let k = -q; k <= q; k += te)
      n.moveTo(-q, k), n.lineTo(q, k);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(Z.x - K, Z.y - M), n.lineTo(Z.x + K, Z.y + M), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function de() {
    return !l || !h() || t && ve() || c && !_e() ? 0 : m2;
  }
  function we() {
    const V = Oe(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (V <= 1e-4 || !l || i.mode !== "pano") return;
    const ce = h(), H = ce ? A(ce) : null, Z = Array.isArray(H == null ? void 0 : H.corners) && H.corners.length >= 4 ? H.corners.map((K) => ({ x: Number(K.x || 0), y: Number(K.y || 0) })) : null;
    H != null && H.visible && Z && (i.cutoutPanoDimCorners = Z), ce && (H != null && H.visible) && Z && (i.cutoutPanoFrameVisual = {
      item: ce,
      geom: H,
      selected: Se(ce),
      locked: he(ce)
    });
    const G = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, q = H != null && H.visible ? Z : G ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${V})`, n.beginPath(), n.rect(0, 0, r.width, r.height), q.length >= 4) {
      n.moveTo(q[0].x, q[0].y);
      for (let K = 1; K < 4; K += 1) n.lineTo(q[K].x, q[K].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(V) {
      ({
        areAllSelectedItemsLocked: u,
        contentSphere: f,
        deviceRect: p,
        drawEditorViewShot: w,
        editorViewInput: m,
        getActiveCutoutShot: h,
        getCutoutSelectableItemsForDisplay: y,
        getFrameViewLayout: z,
        getFrameViewRect: T,
        getList: ie,
        getMultiSelectionGeom: P,
        getSelectedItems: X,
        getStickerDisplayAlpha: j,
        getUnwrapRect: J,
        isCameraSelected: _e,
        isErpCamera: ke,
        isExternalSticker: ge,
        isFreeSpaceView: ve,
        isItemLocked: he,
        isItemSelected: Se,
        isRasterObjectItem: pe,
        isSceneSticker: ne,
        isShotItem: ae,
        isStickerItem: fe,
        isStrokeGroupItem: $,
        objectGeom: A,
        poseOf: D,
        projectDir: ee,
        projectDirUnwrap: se,
        projectErpLassoPointsToFrameRect: U,
        projectLassoPointsToCurrentView: b,
        rebuildPaintEngineIfNeeded: Y,
        rectFromPoints: ue,
        renderEditorView: C,
        renderEditorViewUnwrap: W,
        sampleStickerEdge: v,
        sceneStickerShown: B,
        spaceViewState: g
      } = V);
    },
    drawGridUnwrap: S,
    drawGridPano: x,
    drawObjects: O,
    drawFrameViewBackground: Q,
    drawLassoOutlineOverlay: ye,
    drawFrameRollOverlay: xe,
    getCutoutPanoDimTarget: de,
    drawCutoutPanoPassepartout: we
  };
}
function aC(e) {
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
    uiState: m,
    viewController: h
  } = e;
  let y, z, T, ie, P, X, j, J, _e, ke, ge, ve, he, Se, pe, ne, ae, fe, $, A, D, ee, se, U, b, Y, ue, C = () => {
  };
  function W(de = /* @__PURE__ */ new Set()) {
    ke();
    const we = l.backgroundDirty;
    d && ($(), z(we, de)), i.mode === "frame" ? (l.frameSafeRect = ne(), P(we)) : i.mode === "unwrap" ? j(we) : X(we), T(), _e(), se(), J(), ie(), m.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && Y(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), d && m.cameraPreview && (m.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const V = Se();
    m.stageStatus = V.status, m.stageStatusDetail = V.detail, m.stageNotice = ue(), V.status === sr ? (u == null || u.removeAttribute("data-stage-ready"), u == null || u.setAttribute("data-stage-loading-kind", V.detail)) : (u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind"));
  }
  function v(de = i.interaction) {
    if (w !== "stickers" || i.mode !== "pano") return !1;
    const we = String((de == null ? void 0 : de.kind) || "");
    return we === "move" || we === "scale" || we === "scale_x" || we === "scale_y" || we === "rotate" ? !0 : we === "move_multi" ? Array.isArray(de == null ? void 0 : de.stickerSnapshots) && de.stickerSnapshots.length > 0 : !1;
  }
  function B() {
    return !!i.interaction || !!p.drag;
  }
  function g() {
    l.nodePreviewPending = !1;
    const de = Kn(s);
    de.liveState = f, de.liveStateVersion += 1, he();
  }
  function S(de = {}) {
    var K, M, te, k, oe, re, be, Ne;
    const we = de.reason ?? pt.STATE, V = !!de.localOnly, ce = de.externalSync === !0, H = String(de.cause || ""), Z = String(((K = i.interaction) == null ? void 0 : K.kind) || "");
    (!V || Z === "view" || Z === "pan_frame" || v() || !!i.viewTransition || H === "mode" || H === "frame_view" || H === "cutout_frame") && (l.backgroundDirty = !0), V && pe() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!V || H === "selection" || H === "mode" || H === "cutout_frame") && (U(), b()), B() ? l.nodePreviewPending = !0 : g(), ce && ((te = (M = bt(s).dom) == null ? void 0 : M.requestDraw) == null || te.call(M), (k = s.setDirtyCanvas) == null || k.call(s, !0, !1)), ce && !V && ((re = (oe = s.graph) == null ? void 0 : oe.setDirtyCanvas) == null || re.call(oe, !0, !0), (Ne = (be = t == null ? void 0 : t.canvas) == null ? void 0 : be.setDirty) == null || Ne.call(be, !0, !0)), c.requestDraw(we);
  }
  function R() {
    const de = n.getBoundingClientRect(), we = Math.max(2, Math.round(de.width)), V = Math.max(2, Math.round(de.height)), ce = window.devicePixelRatio || 1, H = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== we || n.height !== V) && (n.width = we, n.height = V);
    const Z = c_(de.width || we, de.height || V, ce, window.innerWidth || de.width, window.innerHeight || de.height);
    return o.resize(Z.width, Z.height), [n.width, n.height, r.width, r.height].join("x") === H ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && x(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function x(de) {
    de(), c.wake();
  }
  function F() {
    return !!i.viewTransition || ae.held || !!h.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || B();
  }
  function L(de = performance.now(), we = /* @__PURE__ */ new Set()) {
    var G;
    l.nodePreviewPending && !B() && g(), we.forEach((q) => l.reasons.add(q)), we.size && (l.dirty = !0), [...we].some((q) => q !== pt.OVERLAY) && (l.backgroundDirty = !0), D(), l.lastTickTs > 0 ? Math.max(1e-3, (de - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = de;
    const V = i.mode === "frame" && ((G = i.interaction) == null ? void 0 : G.kind) === "roll_frame" ? i.interaction : null;
    V != null && V.shot && (i.frameRollOverlayVisual = { shot: V.shot });
    const ce = V ? 1 : 0;
    if (Math.abs(ce - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = ce, i.frameRollOverlayStartTs = de), Math.abs(Number(i.frameRollOverlayAlpha || 0) - ce) > 1e-6) {
      const q = Oe(
        (de - Number(i.frameRollOverlayStartTs || de)) / g2,
        0,
        1
      );
      i.frameRollOverlayAlpha = qn(
        Number(i.frameRollOverlayFrom || 0),
        ce,
        zc(q)
      ), q >= 1 && (i.frameRollOverlayAlpha = ce, ce === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const H = ve();
    if (Math.abs(H - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = H, i.cutoutPanoDimStartTs = de), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - H) > 1e-6) {
      const q = Oe(
        (de - Number(i.cutoutPanoDimStartTs || de)) / Vp,
        0,
        1
      );
      i.cutoutPanoDimAlpha = qn(
        Number(i.cutoutPanoDimFrom || 0),
        H,
        zc(q)
      ), q >= 1 && (i.cutoutPanoDimAlpha = H), q >= 1 && H === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const Z = d && ge() ? 1 : 0;
    if (Math.abs(Z - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = Z, i.cutoutPanoFrameStartTs = de), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Z) > 1e-6) {
      const q = Oe(
        (de - Number(i.cutoutPanoFrameStartTs || de)) / Vp,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = qn(
        Number(i.cutoutPanoFrameFrom || 0),
        Z,
        zc(q)
      ), q >= 1 && (i.cutoutPanoFrameAlpha = Z, Z === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const q = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), K = Oe((de - Number(i.outputPreviewAnimStartTs || 0)) / q, 0, 1), te = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? v2(K) : _2(K);
      i.outputPreviewAnim = qn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, te), l.dirty = !0, K >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: q, done: K } = ZA(i.viewTransition, de);
      if (i.viewPosition = q.position, i.viewYaw = q.yaw_deg, i.viewPitch = q.pitch_deg, i.viewFov = q.hFOV_deg, i.viewDistance = q.distance, K) {
        const { end: M } = i.viewTransition;
        i.viewTransition = null, M && y(M), ee();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (A(de) && (l.backgroundDirty = !0, l.dirty = !0), i.viewInertia.vx = Number(h.state.inertia.vx || 0), i.viewInertia.vy = Number(h.state.inertia.vy || 0), i.viewInertia.active = !!h.state.inertia.active, h.stepInertia(de) && (i.viewInertia.vx = Number(h.state.inertia.vx || 0), i.viewInertia.vy = Number(h.state.inertia.vy || 0), i.viewInertia.active = !!h.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const q = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), W(q);
    }
  }
  function I(de) {
    try {
      de();
    } catch (we) {
      const V = String((we == null ? void 0 : we.stack) || (we == null ? void 0 : we.message) || we || "unknown editor frame error");
      l.tickErrorSignature !== V && (l.tickErrorSignature = V, console.error("[PanoramaStickers] editor frame failed", we)), m.stageStatus = Jn, m.stageStatusDetail = "frame", u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind");
    }
  }
  function N(de = performance.now(), we = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const V = Nv();
    I(() => L(de, we)), Pv(V);
  }
  function E() {
    !l.running || !R() || I(() => {
      l.dirty = !1, W(/* @__PURE__ */ new Set([pt.RESIZE]));
    });
  }
  const _ = new ResizeObserver(E);
  let O = null;
  function Q() {
    O == null || O.removeEventListener("change", me), O = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), O.addEventListener("change", me);
  }
  function me() {
    Q(), E();
  }
  function ye() {
    C = Mv("editor", () => {
      var de;
      return {
        type: w,
        readOnly: a,
        mode: i.mode,
        interaction: ((de = i.interaction) == null ? void 0 : de.kind) ?? null,
        timelineDrag: !!p.drag,
        playing: !!fe.playing
      };
    });
  }
  function xe() {
    C(), l.running = !1, c.stop(), _.disconnect(), O.removeEventListener("change", me);
  }
  return {
    connect(de) {
      ({
        applyViewTransitionEnd: y,
        drawCutoutOutputPreview: z,
        drawCutoutPanoPassepartout: T,
        drawFrameRollOverlay: ie,
        drawFrameViewBackground: P,
        drawGridPano: X,
        drawGridUnwrap: j,
        drawLassoOutlineOverlay: J,
        drawObjects: _e,
        endEditorViewFrame: ke,
        getActiveCutoutShot: ge,
        getCutoutPanoDimTarget: ve,
        getSharedLivePaintSurface: he,
        getStageImageStatus: Se,
        isPaintCompositeInteraction: pe,
        measureFrameSafeRect: ne,
        moveKeys: ae,
        playback: fe,
        rebuildPaintEngineIfNeeded: $,
        stepKeyMove: A,
        syncCutoutShot: D,
        syncFloatingViewButtonState: ee,
        syncFrameRollKnob: se,
        syncLookAtFrameButtonState: U,
        syncViewToggleState: b,
        updateSelectionMenu: Y,
        upstreamNotice: ue
      } = de);
    },
    requestDraw: S,
    syncCanvasSize: R,
    startAnimation: x,
    editorAnimating: F,
    tick: N,
    stageResizeObserver: _,
    watchPixelRatio: Q,
    sampleEditorDiagnostics: ye,
    stopRenderLoop: xe
  };
}
function lC(e) {
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
    type: m,
    uiState: h
  } = e;
  let y, z, T, ie, P, X, j, J, _e, ke, ge, ve, he, Se, pe, ne, ae, fe, $, A, D, ee, se, U, b, Y, ue, C, W, v, B, g, S, R = 0;
  function x() {
    h.toolButtons.forEach((de) => {
      const we = de.attr === "data-tool-mode", V = de.attr === "data-paint-tool", ce = de.attr === "data-mask-tool";
      de.active = we ? de.value === r.primaryTool : V ? de.key === r.paintTool : ce ? de.key === r.maskTool : !1, de.pressed = de.active ? "true" : de.pressed == null ? null : "false";
    });
  }
  function F() {
    if (w && no(h.toolButtons, "value", "add-camera", { disabled: he() }), m !== "cutout") return;
    const de = T();
    no(h.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: de ? "Look At Frame" : "Add Frame",
      tip: de ? "Look at frame" : "Add frame",
      icon: de ? Ke.camera : Ke.plus_circle
    });
  }
  function L() {
    const de = SA({
      spaceView: ee(),
      spaceMode: kl(r.spaceMode, r.viewTransition),
      readOnly: c,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    h.space && Object.assign(h.space, de.space);
    for (const [we, V] of Object.entries(de.buttons)) no(h.floatingButtons, "action", we, V);
  }
  function I() {
    var V;
    const de = z0({ hasShot: !!T(), erp: ne(), hidden: he() && !z(), studio: w });
    r.mode === "frame" && de.disabled && (w ? U(T()) : r.mode = "pano"), r.outputPreviewRect = null, h.viewButtons.forEach((ce) => {
      const H = ce.key === r.mode;
      ce.pressed = H ? "true" : "false", ce.visible = !(ce.key === "frame" && !f), ce.key === "frame" ? Object.assign(ce, de) : ce.disabled = !1;
    });
    const we = f && r.mode === "frame" ? T() : null;
    h.frameRail.visible = !!we, h.frameRail.disabled = c || (we == null ? void 0 : we.locked) === !0, h.frameRollKnob.visible = !!we && !c && we.locked !== !0, h.frameRollKnob.disabled = c || (we == null ? void 0 : we.locked) === !0, h.frameRollKnob.rollDeg = Number((we == null ? void 0 : we.roll_deg) ?? (we == null ? void 0 : we.rot_deg) ?? 0), h.frameRollKnob.displayValue = po(h.frameRollKnob.rollDeg), h.frameRollKnob.dragging = ((V = r.interaction) == null ? void 0 : V.kind) === "roll_frame", h.frameRollKnob.armed = !!we && r.altModifier === !0, h.frameRail.rollKnob = h.frameRollKnob, h.frameRail.aspectLabel = we ? Vr(we) : "", h.frameRail.aspectChoices = j0(we ? String(Vr(we)) : null, { erp: w, coverage: p.coverage }), we || (h.frameRail.aspectOpen = !1), h.outputPreviewToggle.visible = m === "cutout" && r.mode !== "frame" && !!T(), f && h.cameraPreview && (h.cameraPreview.visible = r.mode !== "frame" && y(), h.cameraPreview.expanded = !!r.outputPreviewExpanded, h.cameraPreview.settled = h.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), L(), $() ? g(r.pointerPos) : C(r.mode === "pano" ? "grab" : "default");
  }
  function N() {
    var we;
    const de = r.mode === "frame" ? T() : null;
    h.frameRollKnob.visible = !!de && !c && de.locked !== !0, h.frameRollKnob.rollDeg = Number((de == null ? void 0 : de.roll_deg) ?? (de == null ? void 0 : de.rot_deg) ?? 0), h.frameRollKnob.displayValue = po(h.frameRollKnob.rollDeg), h.frameRollKnob.dragging = ((we = r.interaction) == null ? void 0 : we.kind) === "roll_frame", h.frameRollKnob.armed = !!de && r.altModifier === !0;
  }
  function E() {
    x();
    const de = gA({
      editor: r,
      swatches: Xl,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: Sr,
      colorsApproximatelyEqual: _l,
      rgb01ToHsv: Lu,
      hsv01ToRgb: Ru,
      getBrushPresetIdForTool: ie,
      isActiveLassoTool: pe
    });
    if (Object.assign(h.paintDock, de), B(), !de.visible) {
      i && (i.hidden = !0);
      return;
    }
    R && (clearTimeout(R), R = 0), o && (!de.colorEnabled && i && !i.hidden && (R = window.setTimeout(() => {
      i.hidden = !0, h.paintDock.colorPopOpen = !1, R = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", de.pickerHueColor), i.style.setProperty("--picker-sat", de.pickerSat), i.style.setProperty("--picker-val", de.pickerVal), i.style.setProperty("--picker-hue", de.pickerHue)), s && (s.style.left = de.pickerSvLeft, s.style.top = de.pickerSvTop), a && (a.style.left = de.pickerHueLeft));
  }
  function _() {
    const de = Y(f && r.mode === "frame" ? T() : J());
    de && (r.panelLastValues = {
      yaw_deg: Number(de.yaw_deg || 0),
      pitch_deg: Number(de.pitch_deg || 0),
      hFOV_deg: Number(de.hFOV_deg || (m === "stickers" ? 30 : 90)),
      vFOV_deg: Number(de.vFOV_deg || (m === "stickers" ? 30 : 60)),
      rot_deg: Number(de.rot_deg || 0),
      roll_deg: Number(de.roll_deg || 0),
      aspect_id: Vr(de)
    }, O());
  }
  function O() {
    W(), v(), me();
  }
  function Q() {
    const de = f && r.mode === "frame" ? T() : null;
    return [..._e(), ue(), de].some((we) => A(we) ? il(we) : D(we) && he() && il(p.camera));
  }
  function me() {
    if (n) return;
    p.ui_settings = p.ui_settings || {};
    const de = mA(p.ui_settings);
    if (l) {
      h.sidePanel = yA({
        coverage: p.coverage,
        uiSettings: de,
        normalizeCoverageValue: Vn
      });
      return;
    }
    const we = J(), V = f && r.mode === "frame" ? T() : null, ce = V || we, H = V ? [V] : _e(), Z = V ? "shot" : ke();
    if (H.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), ce && Z !== "stroke") {
      const Ve = Y(ce);
      r.panelLastValues = {
        yaw_deg: Number(Ve.yaw_deg || 0),
        pitch_deg: Number(Ve.pitch_deg || 0),
        hFOV_deg: Number(Ve.hFOV_deg || (Z === "image" ? 30 : 90)),
        vFOV_deg: Number(Ve.vFOV_deg || (Z === "image" ? 30 : 60)),
        rot_deg: Number(Ve.rot_deg || 0),
        roll_deg: Number(Ve.roll_deg || 0),
        aspect_id: Vr(Ve)
      }, A(ce) && (r.panelLastValues.opacity = Wr(ce, r.frame).opacity * 100);
    }
    const G = r.panelLastValues || (m === "stickers" || Z === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), q = Z === "stroke" ? null : ce, K = ue(), M = t && (Z === "shot" || Z === "frame") && Se(), te = K ? kS(K, r.frame) : M ? { ...q, ...SS(p.camera, r.frame), vFOV_deg: q.vFOV_deg } : A(q) ? r.panelLastValues : q || G, k = K ? S(K) : !!q && !fe(q);
    r.panelWasEnabled = k, F();
    let oe = null;
    if (V) {
      const Ve = ve({ item: V, kind: "shot", label: "Frame" });
      oe = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: Ve.label,
        currentIcon: Ve.icon || null,
        items: [{
          id: String(V.id || ""),
          label: Ve.label,
          icon: Ve.icon || null,
          active: !0
        }]
      };
    } else if (m === "stickers" || m === "cutout") {
      const Ve = [{
        id: "",
        label: m === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (m === "stickers") {
        const Ce = T();
        Ce && Ve.push({ id: Ce.id, label: "Camera", icon: ge("frame"), item: Ce, kind: "frame" }), j().forEach((ze, le) => {
          var je, He;
          if (!ze || A(ze) && !ze.visible) return;
          const Ie = u ? ye(ze) : ae(ze) ? String(ze.id || Jd) : String(((He = (je = p.assets) == null ? void 0 : je[ze.asset_id]) == null ? void 0 : He.name) || ze.asset_id || ze.id), Ae = `${le + 1}. ${Ie}${ae(ze) && se(ze) ? " (hidden)" : ""}`, Fe = ve({ item: ze, label: Ae, kind: "image" });
          Ve.push({ id: ze.id, label: Fe.label, icon: Fe.icon, item: ze, kind: "image" });
        });
      } else
        P().forEach((Ce) => {
          if (!(Ce != null && Ce.item)) return;
          const ze = ve(Ce);
          Ve.push({ id: Ce.item.id, label: ze.label, icon: ze.icon, item: Ce.item, kind: Ce.kind });
        });
      const We = (q == null ? void 0 : q.id) || "", Ge = K ? { label: ye(K), icon: Ke.globe } : Ve.find((Ce) => Ce.id === We) || Ve[0];
      oe = {
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
    const re = [], be = (Ve, We, Ge, Ce, ze) => {
      const le = Oe(Number(te[Ve] || 0), Ge, Ce);
      re.push({
        key: Ve,
        label: We,
        min: Ge,
        max: Ce,
        step: ze,
        value: le,
        displayValue: po(le),
        fillPct: Oe((le - Ge) / Math.max(1e-6, Ce - Ge) * 100, 0, 100),
        enabled: k && !c
      });
    }, Ne = [];
    if (K) {
      for (const [Ve, We] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Ge = Kc(te[Ve]);
        be(Ve, We, -Ge, Ge, 0.01);
      }
      be("yaw_deg", "Yaw", -180, 180, 0.1), be("pitch_deg", "Pitch", -90, 90, 0.1), be("roll_deg", "Roll", -180, 180, 0.1), be("scale", "Scale", x0, Kc(te.scale), 0.01), be("opacity", "Opacity", 0, 100, 1);
    } else if (H.length > 1)
      Ne.push(`Selected objects: ${H.length}`), Ne.push("Multi-selection supports z-order and delete.");
    else {
      const Ve = Z === "shot" || Z === "frame";
      if (M)
        for (const [We, Ge] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Ce = Kc(te[We]);
          be(We, Ge, -Ce, Ce, 0.01);
        }
      be("yaw_deg", "Yaw", -180, 180, 0.1), be("pitch_deg", "Pitch", -90, 90, 0.1), be(Z === "image" || m === "stickers" && !Ve ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), be("hFOV_deg", "H FOV", 1, 179, 0.1), be("vFOV_deg", "V FOV", 1, 179, 0.1), Ve && re.forEach((We) => {
        We.enabled = We.enabled && _A(We.key, { erp: ne() });
      }), A(q) && !Ve && re.forEach((We) => {
        We.enabled = We.enabled && wA(We.key, { port: ae(q) });
      }), u && !Ve && be("opacity", "Opacity", 0, 100, 1);
    }
    const Ee = H.length > 1 ? null : K || q;
    h.sidePanel = AA({
      coverage: p.coverage,
      readOnly: c,
      selectionPicker: oe,
      enabled: k,
      selectedKind: K ? "world" : Z,
      selectedItems: H,
      params: re,
      notes: Ne,
      uiSettings: de,
      normalizeCoverageValue: Vn,
      // Every Sticker of Panorama Studio has the rows, so selecting an upstream one does not move the panel.
      upstream: w && Ee && (Ee === K || A(Ee)) ? PA({
        layer: Ht(Ee) ? Ee.origin.layer : null,
        editable: Ht(Ee) && wl(Ee),
        visible: Ee.visible,
        locked: Ee.locked === !0,
        readOnly: c,
        placement: Ee.placement,
        override: Ht(Ee) ? R0(p.upstream, Ee.origin) : null,
        // An upstream element's port Sticker is not the node's own, whose Pose handoff this is.
        handoff: Ht(Ee) ? null : b(Ee)
      }) : null
    });
  }
  function ye(de) {
    const we = Wm(de);
    return Ht(de) ? `${ef(de.origin.layer)} · ${we}` : we;
  }
  function xe() {
    const { canUndo: de, canRedo: we } = X();
    no(h.toolButtons, "value", "undo", { disabled: !de }), no(h.toolButtons, "value", "redo", { disabled: !we });
  }
  return {
    connect(de) {
      ({
        cameraPreviewShown: y,
        cameraShoots: z,
        getActiveCutoutShot: T,
        getBrushPresetIdForTool: ie,
        getCutoutInspectorItems: P,
        getHistoryCapabilities: X,
        getList: j,
        getSelected: J,
        getSelectedItems: _e,
        getSelectedKind: ke,
        getSelectionItemIcon: ge,
        getSelectionItemLabelData: ve,
        hasCamera: he,
        hasSpaceContent: Se,
        isActiveLassoTool: pe,
        isErpCamera: ne,
        isExternalSticker: ae,
        isItemLocked: fe,
        isPaintCursorEnabled: $,
        isSceneSticker: A,
        isShotItem: D,
        isSpaceView: ee,
        isStickerHidden: se,
        leaveFrameView: U,
        portHandoffLanes: b,
        poseOf: Y,
        selectedWorldSticker: ue,
        setCanvasCursor: C,
        syncCutoutShot: W,
        syncTimeline: v,
        syncVideoTransportVisibility: B,
        updateCursor: g,
        worldStickerEditable: S
      } = de);
    },
    syncLookAtFrameButtonState: F,
    syncFloatingViewButtonState: L,
    syncViewToggleState: I,
    syncFrameRollKnob: N,
    syncPaintUi: E,
    syncSidePanelControls: _,
    updateSidePanel: O,
    inspectorTimed: Q,
    syncSidePanelModel: me,
    syncUndoRedoButtons: xe
  };
}
function cC(e) {
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
  let p, w, m, h, y, z, T, ie, P, X, j, J, _e, ke, ge, ve, he, Se, pe, ne, ae, fe;
  function $() {
    if (!s || n) return;
    const I = D(), N = l.selection, E = N && ee(N.owner);
    if (N) {
      const _ = E ? U(N) : [];
      N.frames = N.frames.filter((O) => _.some((Q) => E[Q].keyframes.some((me) => me.frame === O))), N.frames.length || (l.selection = null);
    }
    d.timeline = TA(o, {
      span: I,
      selection: l.selection,
      selectedId: t.worldSelectedId || t.selectedId,
      expanded: l.expanded ?? A(),
      openRows: l.openRows,
      audio: W() && d.videoTransport.hasAudio ? { muted: u.muted } : null,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: f(r) !== null || bg(r, ["bg_media", "sticker"]),
      // Panorama Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: m(),
      cameraHideable: a,
      // Another Studio's Scene on `scene` is upstream: its own `scene` is not drawn (#90), and its elements have
      // rows of their own below (ADR 0030).
      scene: i && !!Bl(r).scene && !Se(),
      upstream: ae()
    }), d.easing = l.selection && ue(l.selection.owner) ? DA(E, U(l.selection), l.selection.frames, b(l.selection.owner)) : null;
  }
  function A() {
    return Rm(o, { camera: a });
  }
  function D(I = null) {
    const N = o.timeline.fps, E = o.stickers.find(y), _ = E ? w() : null, O = Math.max(
      d.videoTransport.ready && !he() ? Math.round(Number(d.videoTransport.duration || 0) * N) : 0,
      _ ? Od(E.clip, N, _.meta) : 0,
      ne(I)
    ), Q = Lm(o, { minimum: Math.round(N * 5), frames: O, openClip: I, camera: a });
    return Math.max(Q, Vm(fe(), I));
  }
  function ee(I) {
    if (I === "camera") return m() ? o.camera : null;
    if (I === "scene") return i ? o.scene : null;
    const N = pe(I);
    return N ? N.owner : _e(I);
  }
  function se(I) {
    var N;
    return ((N = pe(I)) == null ? void 0 : N.editable) ?? !0;
  }
  function U(I) {
    return I.lane ? [I.lane] : No(ee(I.owner));
  }
  function b(I) {
    var E;
    if (I === "camera") return 0;
    const N = (E = ee(I)) == null ? void 0 : E.clip;
    return N ? N.start - N.in : 0;
  }
  function Y(I) {
    return `${xo(I, t.frame)}:${I.start - I.in}`;
  }
  function ue(I) {
    var E;
    const N = ee(I);
    return !!N && N.locked !== !0 && se(I) && ((E = pe(I)) == null ? void 0 : E.part) !== "scene";
  }
  function C(I) {
    const N = Math.max(0, Math.round(I));
    if (N === t.frame) return;
    J(), t.frame = N, c.frame.value = N, J();
    const E = [t.selectedId, t.worldSelectedId];
    X(), z(), E[0] !== t.selectedId || E[1] !== t.worldSelectedId ? ve() : h() && ke(), ge(), j({ reason: pt.PLAYHEAD });
  }
  function W() {
    return u instanceof HTMLVideoElement && !!u.getAttribute("src");
  }
  function v(I) {
    P(), T.seek(I);
  }
  function B() {
    s && T.stop();
  }
  function g() {
    P(), T.toggle();
  }
  function S() {
    J(), z(), ve(), ge(), j();
  }
  function R() {
    ie(), p(), S();
  }
  function x() {
    const { selection: I } = l;
    ue(I.owner) && (B(), U1(ee(I.owner), U(I), I.frames, t.frame - b(I.owner)), l.selection = null, R());
  }
  function F(I) {
    const N = fi(I);
    if (N === null || N === o.timeline.fps) return;
    B();
    const E = Math.round(t.frame * N / o.timeline.fps);
    hS(o, N), l.selection = null, T.seek(E), R();
  }
  function L() {
    const I = f(r);
    I !== null && I !== o.timeline.fps && F(I);
  }
  return {
    connect(I) {
      ({
        commitAndRefreshNode: p,
        getPortMedia: w,
        hasCamera: m,
        inspectorTimed: h,
        isExternalSticker: y,
        markObjectVisualsDirty: z,
        playback: T,
        pushHistory: ie,
        refreshModalVideoSource: P,
        releaseHiddenSelection: X,
        requestDraw: j,
        syncCutoutShot: J,
        stickerById: _e,
        syncSidePanelModel: ke,
        updateSelectionMenu: ge,
        updateSidePanel: ve,
        upstreamBackground: he,
        upstreamLinked: Se,
        upstreamRow: pe,
        upstreamSpanFrames: ne,
        upstreamTimelineLayers: ae,
        upstreamTimelineOwners: fe
      } = I);
    },
    syncTimeline: $,
    timelineTimed: A,
    timelineSpanFrames: D,
    timelineOwner: ee,
    selectedLanes: U,
    timelineOffset: b,
    clipView: Y,
    timelineEditable: ue,
    rowEditable: se,
    setTimelineFrame: C,
    jumpTimelineTo: v,
    stopTimelinePlayback: B,
    togglePlayback: g,
    refreshTimelineEdit: S,
    commitTimelineEdit: R,
    deleteSelectedKeyframes: x,
    changeTimelineFps: F,
    applyVideoTimelineFps: L
  };
}
function uC(e) {
  const {
    dragFrames: t,
    editor: r,
    readOnly: n,
    state: i,
    stateV2: o,
    timeline: s,
    uiState: a
  } = e;
  let l, c, d, u, f, p, w, m, h, y, z, T, ie, P, X, j, J, _e, ke, ge, ve, he, Se, pe, ne, ae, fe, $, A, D, ee, se;
  function U(b) {
    var Y, ue;
    if (!(n || !o)) {
      if (b.type === "seek") {
        if (b.phase === "move") {
          s.scrubFrame = b.frame, t.request("seek");
          return;
        }
        t.cancel(), b.phase === "start" && h(), m.seek(b.frame);
        return;
      }
      if (b.type === "play") {
        $();
        return;
      }
      if (b.type === "mute") {
        A(), he();
        return;
      }
      if (b.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? fe()), s.selection = null, he();
        return;
      }
      if (b.type === "restore-upstream-deleted" || b.type === "revert-upstream-layer") {
        const C = (ue = (Y = a.timeline) == null ? void 0 : Y.groups) == null ? void 0 : ue.find((v) => v.key === b.key), W = b.type === "restore-upstream-deleted" ? C == null ? void 0 : C.restore : C == null ? void 0 : C.revert;
        if (!W || W.disabled) return;
        b.type === "restore-upstream-deleted" ? ie(b.key) : P(b.key), he();
        return;
      }
      if (b.type === "toggle-row") {
        s.openRows.has(b.id) ? s.openRows.delete(b.id) : s.openRows.add(b.id), he();
        return;
      }
      if (b.type === "toggle-visible") {
        if (!X(b.id)) return;
        const C = se(b.id);
        if (b.id === G0) i.painting_visible = !i.painting_visible;
        else if ((C == null ? void 0 : C.part) === "painting") C.sceneState.painting_visible = !C.sceneState.painting_visible;
        else {
          const W = ne(b.id);
          if (!W) return;
          W.visible = !W.visible;
        }
        z(), u();
        return;
      }
      if (b.type === "select-row") {
        const C = ke(b.id);
        if (C && !C.visible || b.id === "camera" && !l()) return;
        C && !xo(C.clip, r.frame) && w(C.clip.start), (C == null ? void 0 : C.placement) === "world" ? j(C.id) : b.id === "camera" ? _e(f()) : _e(p().find((W) => W.id === b.id) || null), ve(), s.selection = null, ee(), D(), T();
        return;
      }
      if (b.type === "select-keys") {
        const C = pe(b.owner), W = b.frames.map((g) => g - C), v = s.selection, B = (v == null ? void 0 : v.owner) === b.owner && v.lane === b.lane;
        if (b.additive && B) {
          const g = new Set(v.frames);
          for (const S of W)
            g.has(S) ? g.delete(S) : g.add(S);
          v.frames = [...g].sort((S, R) => S - R);
        } else
          s.selection = W.length ? { owner: b.owner, lane: b.lane, frames: W } : null;
        he();
        return;
      }
      if (b.type === "move-keys") {
        const C = s.selection;
        if (!C || !Se(C.owner)) return;
        const W = ne(C.owner), v = J(C);
        if (b.phase === "start") {
          ge(), s.drag = { keyframes: v.map((S) => structuredClone(W[S].keyframes)), frames: C.frames };
          return;
        }
        const { drag: B } = s;
        if (!(B != null && B.keyframes)) return;
        v.forEach((S, R) => {
          W[S].keyframes = structuredClone(B.keyframes[R]);
        });
        const g = B1(W, v, B.frames, b.delta, -pe(C.owner));
        if (C.frames = B.frames.map((S) => S + g), b.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, g ? u() : y();
        return;
      }
      if (b.type === "clip") {
        const C = ne(b.id);
        if (!(C != null && C.clip) || C.locked || !X(b.id)) return;
        if (b.phase === "start") {
          ge(), s.drag = { clip: { ...C.clip }, span: ae(C.clip) };
          return;
        }
        const { drag: W } = s;
        if (!(W != null && W.clip)) return;
        const v = W.clip, B = d(C.clip);
        if (C.clip = { ...v }, b.delta && b.mode === "move" ? X1(C.clip, b.delta) : b.delta && b.mode === "start" ? J1(C.clip, v.start + b.delta) : b.delta && Z1(C.clip, (v.duration === null ? W.span : v.start + v.duration) + b.delta, W.span), b.phase !== "end") {
          t.request("timeline"), d(C.clip) !== B && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, z(), JSON.stringify(C.clip) !== JSON.stringify(v) ? u() : y();
        return;
      }
      if (b.type === "key-row") {
        if (b.owner === "scene" || !Se(b.owner)) return;
        ge(), G1(ne(b.owner), r.frame - pe(b.owner)), u();
        return;
      }
      if (b.type === "fps") {
        const C = tS(b.fps);
        if (C === null || C === i.timeline.fps || a.timeline.fpsLocked) {
          he();
          return;
        }
        c(C);
        return;
      }
      if (b.type === "length") {
        const C = nS(b.length);
        if (C === void 0 || C === i.timeline.length) {
          he();
          return;
        }
        ge(), i.timeline.length = C, u();
        return;
      }
      if (b.type === "easing") {
        const C = s.selection;
        if (!C || !Se(C.owner)) return;
        ge(), q1(ne(C.owner), J(C), C.frames, b.easing), b.commit ? u() : y();
      }
    }
  }
  return {
    connect(b) {
      ({
        cameraShoots: l,
        changeTimelineFps: c,
        clipView: d,
        commitTimelineEdit: u,
        getActiveCutoutShot: f,
        getList: p,
        jumpTimelineTo: w,
        playback: m,
        refreshModalVideoSource: h,
        refreshTimelineEdit: y,
        releaseHiddenSelection: z,
        requestDraw: T,
        restoreUpstreamDeletedCommand: ie,
        revertUpstreamLayerCommand: P,
        rowEditable: X,
        selectWorldSticker: j,
        selectedLanes: J,
        setSelectedItem: _e,
        stickerById: ke,
        stopTimelinePlayback: ge,
        syncFloatingViewButtonState: ve,
        syncTimeline: he,
        timelineEditable: Se,
        timelineOffset: pe,
        timelineOwner: ne,
        timelineSpanFrames: ae,
        timelineTimed: fe,
        togglePlayback: $,
        toggleVideoMuted: A,
        updateSelectionMenu: D,
        updateSidePanel: ee,
        upstreamRow: se
      } = b);
    },
    onTimelineAction: U
  };
}
function dC(e) {
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
  let d, u, f, p, w, m, h;
  function y() {
    a || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", s && (l.output_preset = u(Number(l.output_preset || 2048))), i && (l.coverage = Vn(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), z(), o.setDirtyCanvas(!0, !0));
  }
  function z() {
    var _e;
    if (a || (p(), m(), h(), l.coverage = Vn(l.coverage), Bm(o, l.active), !c)) return;
    const j = f(), J = Ym(o, j, String(c.value ?? ""), { rebased: n });
    J !== null && (j !== l && (l.id = j.id), c.value = J, (_e = c.callback) == null || _e.call(c, J));
  }
  function T() {
    l.ui_settings = O2(l.ui_settings), a || z();
  }
  function ie() {
    var j;
    a || (z(), (j = o.setDirtyCanvas) == null || j.call(o, !0, !0));
  }
  function P() {
    a || d() && w().catch((j) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", j);
    });
  }
  function X(j = {}) {
    var ke, ge, ve, he, Se, pe, ne, ae, fe, $, A;
    const J = j.syncPreview !== !1, _e = j.syncGraph !== !1;
    J && ((ve = (ge = (ke = Pg(o)) == null ? void 0 : ke.runtime) == null ? void 0 : ge.requestDraw) == null || ve.call(ge), (pe = (Se = (he = Ng(o)) == null ? void 0 : he.dom) == null ? void 0 : Se.requestDraw) == null || pe.call(Se), (ne = o.setDirtyCanvas) == null || ne.call(o, !0, !1)), _e && ((fe = (ae = o.graph) == null ? void 0 : ae.setDirtyCanvas) == null || fe.call(ae, !0, !0), (A = ($ = t == null ? void 0 : t.canvas) == null ? void 0 : $.setDirty) == null || A.call($, !0, !0));
  }
  return {
    connect(j) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: u,
        storedEditorState: f,
        syncCutoutShot: p,
        syncPaintingLayerAsync: w,
        syncPortHandoff: m,
        syncUpstreamEdits: h
      } = j);
    },
    apply: y,
    commitState: z,
    persistUiSettings: T,
    commitAndRefreshNode: ie,
    triggerBackgroundPersistenceOnClose: P,
    syncCoverageChangeToNodePreviews: X
  };
}
function fC(e) {
  const {
    editor: t,
    readOnly: r,
    sceneV2: n,
    state: i,
    studio: o,
    type: s,
    uiState: a
  } = e;
  let l, c, d, u, f, p, w, m, h, y, z, T, ie, P, X, j, J, _e, ke, ge, ve, he, Se, pe, ne, ae, fe, $, A, D, ee, se, U, b, Y, ue, C, W, v;
  function B(_, O, Q = "Clear") {
    return new Promise((me) => {
      a.confirmDialog = {
        visible: !0,
        title: String(_ || ""),
        text: String(O || ""),
        confirmLabel: String(Q || "Confirm"),
        resolve: me
      };
    });
  }
  async function g() {
    var Q, me;
    if (r || !await B(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    i.painting = ko(null), ne();
    const O = d();
    if (s === "stickers")
      i.stickers = n ? i.stickers.filter((ye) => ye.placement === "world" || O.includes(ye)) : O, n || (i.assets = {}), t.selectedId = ((Q = O[0]) == null ? void 0 : Q.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = ((me = O[0]) == null ? void 0 : me.id) || null, fe();
    else {
      const ye = uS(i.shots, i.active.selected_shot_id);
      i.stickers = O, i.assets = {}, i.shots = ye.shots, t.selectedId = ye.selectedShotId, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = null, i.active.selected_shot_id = ye.selectedShotId, !ye.selectedShotId && t.mode === "frame" && (t.mode = "pano"), t.cutoutAspectOpen = !1, fe();
    }
    $(), u(), W(), C(), D();
  }
  async function S(_) {
    var xe, de, we, V;
    if (r) return;
    const O = _ === "mask" ? "mask" : "paint", Q = O === "mask" ? "Mask" : "Paint", me = z(O);
    if (!(!me.length && !(((xe = t.interaction) == null ? void 0 : xe.kind) === "draw" && ((de = t.interaction) == null ? void 0 : de.layerKind) === O) || !await B(
      `Clear ${Q}`,
      `This will remove all ${O} strokes in the current node.`,
      `Clear ${Q}`
    ))) {
      if (((we = t.interaction) == null ? void 0 : we.kind) === "draw" && ((V = t.interaction) == null ? void 0 : V.layerKind) === O) {
        const ce = w(t.interaction);
        ce && t.paintEngine.cancelActiveStroke(ce), t.interaction = null;
      }
      me.length = 0, i.painting.raster_objects = T().filter((ce) => String((ce == null ? void 0 : ce.layerKind) || "paint") !== O), O === "paint" && (y().length = 0), ne(), $(), u(), W(), C(), ue(), D();
    }
  }
  function R() {
    if (r) return;
    const _ = ie();
    if (!_ || !ge(_) || X(_) || Ht(_) || n && he(_)) return;
    let O;
    n ? O = AS(_, Wl(i), h()) : (O = JSON.parse(JSON.stringify(_)), O.id = Xo("st"), O.yaw_deg = Kt((O.yaw_deg || 0) + 8), O.z_index = h()), i.stickers.push(O), i.active.selected_sticker_id = O.id, t.selectedId = O.id, t.selectedIds = [O.id], Se(), $(), u(), C(), W(), D();
  }
  function x() {
    const _ = U();
    return _ ? (v(_) && (b(), Ht(_) ? p([_]) : NS(i, _.id), c(), Se(), $(), u(), W(), C(), Y(), D()), !0) : !1;
  }
  function F() {
    var me, ye, xe, de, we;
    if (r) return;
    const _ = P(), O = ie();
    if (!O && _.length === 0 || _.some((V) => j(V))) return;
    b();
    const Q = _.filter(Ht);
    if (Q.length && (p(Q), Se()), _.length > 1 || Q.length) {
      const V = new Set(_.filter((Z) => ve(Z)).map((Z) => String(Z.actionGroupId || Z.id || ""))), ce = new Set(_.filter((Z) => J(Z)).map((Z) => ae(Z.rasterObjectId || Z.id || ""))), H = new Set(_.filter(ge).map((Z) => String(Z.id || "")));
      V.size > 0 && (i.painting.paint.strokes = (Array.isArray((ye = (me = i.painting) == null ? void 0 : me.paint) == null ? void 0 : ye.strokes) ? i.painting.paint.strokes : []).filter((Z) => !V.has(String((Z == null ? void 0 : Z.actionGroupId) || ""))), i.painting.groups = y().filter((Z) => !V.has(String((Z == null ? void 0 : Z.actionGroupId) || (Z == null ? void 0 : Z.id) || ""))), ne()), ce.size > 0 && (i.painting.raster_objects = T().filter((Z) => !ce.has(String((Z == null ? void 0 : Z.id) || ""))), pe()), H.size > 0 && (i.stickers = (Array.isArray(i.stickers) ? i.stickers : []).filter((Z) => H.has(String((Z == null ? void 0 : Z.id) || "")) ? X(Z) ? (ke(Z) || (Z.visible = !1), !0) : !1 : !0), fe(), Se()), t.selectedId = null, t.selectedIds = [], $(), u(), W(), C(), D();
      return;
    }
    if (ve(O)) {
      const V = String(O.actionGroupId || O.id || "").trim();
      i.painting.paint.strokes = (Array.isArray((de = (xe = i.painting) == null ? void 0 : xe.paint) == null ? void 0 : de.strokes) ? i.painting.paint.strokes : []).filter((ce) => String((ce == null ? void 0 : ce.actionGroupId) || "").trim() !== V), i.painting.groups = y().filter((ce) => String((ce == null ? void 0 : ce.actionGroupId) || (ce == null ? void 0 : ce.id) || "").trim() !== V), ne(), t.selectedId = null, t.selectedIds = [], $(), u(), W(), C(), D();
      return;
    }
    if (J(O)) {
      const V = ae(O.rasterObjectId || O.id || "");
      i.painting.raster_objects = T().filter((ce) => String((ce == null ? void 0 : ce.id) || "").trim() !== V), pe(), t.selectedId = null, t.selectedIds = [], $(), u(), W(), C(), D();
      return;
    }
    if (o && _e(O)) {
      f();
      return;
    }
    if (s === "stickers" || ge(O)) {
      if (X(O)) {
        if (ke(O)) return;
        O.visible = !1, Se(), $(), u(), W(), C(), D();
        return;
      }
      i.stickers = i.stickers.filter((V) => V.id !== O.id), fe(), Se(), t.selectedId = ((we = m()[0]) == null ? void 0 : we.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = t.selectedId, $(), u(), W(), C(), D();
      return;
    }
    l();
  }
  function L(_, O) {
    r || (b(), _(O) && (A(), Se(), $(), u(), W(), C(), D()));
  }
  function I(_) {
    L(ee, _);
  }
  function N(_) {
    L(se, _);
  }
  function E() {
    t.primaryTool !== "cursor" && (t.primaryTool = "cursor", ue(), W());
  }
  return {
    connect(_) {
      ({
        clearCutoutFrame: l,
        clearWorldSelection: c,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: u,
        deleteStudioCamera: f,
        deleteUpstreamStickers: p,
        getActivePaintTargetDescriptor: w,
        getList: m,
        getNextStickerZIndex: h,
        getPaintingGroupList: y,
        getPaintingLayerList: z,
        getRasterObjectList: T,
        getSelected: ie,
        getSelectedItems: P,
        isExternalSticker: X,
        isItemLocked: j,
        isRasterObjectItem: J,
        isShotItem: _e,
        isStickerHidden: ke,
        isStickerItem: ge,
        isStrokeGroupItem: ve,
        isUploadingSticker: he,
        markObjectVisualsDirty: Se,
        markPaintCompositeVisualsDirty: pe,
        markPaintStrokeVisualsDirty: ne,
        parseRasterObjectSelectionId: ae,
        pruneUnusedAssets: fe,
        pushHistory: $,
        releaseHiddenSelection: A,
        requestDraw: D,
        restoreUpstreamDeleted: ee,
        revertUpstreamLayer: se,
        selectedWorldSticker: U,
        stopTimelinePlayback: b,
        syncFloatingViewButtonState: Y,
        syncPaintUi: ue,
        updateSelectionMenu: C,
        updateSidePanel: W,
        worldStickerEditable: v
      } = _);
    },
    clearAll: g,
    clearPaintingLayer: S,
    duplicateSelected: R,
    deleteSelectedWorldSticker: x,
    deleteSelected: F,
    restoreUpstreamDeletedCommand: I,
    revertUpstreamLayerCommand: N,
    forceCursorTool: E
  };
}
function pC(e) {
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
  let w, m, h, y, z, T, ie, P, X, j, J, _e, ke, ge, ve, he, Se, pe, ne, ae, fe;
  function $(N) {
    return Wd(N == null ? void 0 : N.dataTransfer);
  }
  function A(N) {
    const E = !!N;
    n.active !== E && (n.active = E, d.classList.toggle("drop-active", E));
  }
  function D() {
    const N = new Set(
      (u.stickers || []).map((E) => String((E == null ? void 0 : E.asset_id) || "")).filter((E) => !!E)
    );
    Object.keys(u.assets || {}).forEach((E) => {
      N.has(E) || (delete u.assets[E], s.delete(E));
    });
  }
  async function ee(N) {
    if (l || f !== "stickers" && f !== "cutout" || !ar(N)) return;
    if (c) {
      ne(), await ue(N);
      return;
    }
    const E = Xo("asset"), _ = Uo(a, `add:${E}`, async () => {
      try {
        const { image: O } = await Bo(N);
        s.set(E, O);
        const Q = Xo("st");
        u.stickers.push({
          id: Q,
          asset_id: E,
          yaw_deg: i.viewYaw,
          pitch_deg: i.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: h(30, Number(O.naturalWidth || O.width || 1), Number(O.naturalHeight || O.height || 1)),
          rot_deg: 0,
          z_index: ie()
        }), he(u.stickers[u.stickers.length - 1]), T(), fe(), ae(), ge();
        const me = await Pi(N, {
          fetchApi: (de, we) => t.fetchApi(de, we)
        });
        if (!(Array.isArray(u.stickers) ? u.stickers : []).filter((de) => String((de == null ? void 0 : de.asset_id) || "") === E).length) return;
        u.assets[E] = me, D(), ke(), m(), fe(), ae(), ge();
      } catch (O) {
        delete u.assets[E], s.delete(E);
        const Q = Array.isArray(u.stickers) ? u.stickers : [], me = Q.filter((ye) => String((ye == null ? void 0 : ye.asset_id) || "") === E);
        throw me.length && (u.stickers = Q.filter((ye) => String((ye == null ? void 0 : ye.asset_id) || "") !== E), me.some((ye) => String((ye == null ? void 0 : ye.id) || "") === String(i.selectedId || "")) && he(null), fe(), ae(), ge(), m()), O;
      }
    });
    try {
      await _;
    } catch {
    }
  }
  function se() {
    var N;
    l || f !== "stickers" && f !== "cutout" || (N = p == null ? void 0 : p.openImagePicker) == null || N.call(p, "add");
  }
  function U() {
    var N;
    l || !c || (N = p == null ? void 0 : p.openImagePicker) == null || N.call(p, "add-world");
  }
  async function b(N) {
    l || !c || !ar(N) || (ne(), await ue(N, "world"));
  }
  function Y() {
    const N = { x: r.width / 2, y: r.height / 2 }, E = j() ? o.pick(z(), N.x, N.y, r.width, r.height) : null;
    return ZS(Se(), E, y());
  }
  async function ue(N, E = "sky") {
    const _ = Wl(u), O = Uo(a, `add:${_}`, async () => {
      const { image: Q } = await Bo(N), me = {
        yaw_deg: i.viewYaw,
        pitch_deg: i.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: h(30, Number(Q.naturalWidth || Q.width || 1), Number(Q.naturalHeight || Q.height || 1)),
        rot_deg: 0
      }, ye = { kind: "file", filename: "" }, xe = E === "world" ? PS(_, ye, Y()) : _d(_, ye, me, ie());
      s.set(pe(xe), Q), u.stickers.push(xe), E === "world" ? ve(_) : he(xe), T(), fe(), ae(), ge();
      try {
        const de = await Pi(N, {
          fetchApi: (V, ce) => t.fetchApi(V, ce)
        }), we = u.stickers.find((V) => V.id === _);
        if (!we) return;
        we.source = Pa(de), s.set(pe(we), Q), ke(), m();
      } catch (de) {
        throw u.stickers = u.stickers.filter((we) => we.id !== _), i.selectedId === _ && he(null), i.worldSelectedId === _ && w(), ke(), m(), de;
      } finally {
        fe(), ae(), ge();
      }
    });
    try {
      await O;
    } catch {
    }
  }
  async function C(N, E) {
    const _ = Uo(a, `replace:${E}:${Xo("asset")}`, async () => {
      const { image: O } = await Bo(N), Q = await Pi(N, {
        fetchApi: (ye, xe) => t.fetchApi(ye, xe)
      }), me = u.stickers.find((ye) => ye.id === E);
      if (me) {
        me.source = Pa(Q), me.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const ye of [me.size.value, ...me.size.keyframes.map((xe) => xe.value)])
          ye.vFOV_deg = h(ye.hFOV_deg, Number(O.naturalWidth || O.width || 1), Number(O.naturalHeight || O.height || 1));
        s.set(pe(me), O), _e(), ke(), m(), fe(), ae(), ge();
      }
    });
    try {
      await _;
    } catch {
    }
  }
  async function W(N) {
    if (l || f !== "stickers" && f !== "cutout") return;
    const E = P();
    if (!E || !J(E) || X(E) || Ht(E) || !ar(N)) return;
    if (c) {
      await C(N, E.id);
      return;
    }
    const _ = String(E.id || ""), O = Xo("asset"), Q = Uo(a, `replace:${_}:${O}`, async () => {
      var V;
      const me = (Array.isArray(u.stickers) ? u.stickers : []).find((ce) => String((ce == null ? void 0 : ce.id) || "") === _) || null;
      if (!me || !J(me) || X(me)) return;
      const ye = String(me.asset_id || ""), xe = ye ? dn(((V = u.assets) == null ? void 0 : V[ye]) || null) : null, de = Number(me.vFOV_deg || 0), we = me.crop && typeof me.crop == "object" ? { ...me.crop } : null;
      try {
        const { image: ce } = await Bo(N);
        s.set(O, ce), me.asset_id = O, me.vFOV_deg = h(
          Number(me.hFOV_deg || 30),
          Number(ce.naturalWidth || ce.width || 1),
          Number(ce.naturalHeight || ce.height || 1)
        ), me.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, _e(), fe(), ae(), ge();
        const H = await Pi(N, {
          fetchApi: (G, q) => t.fetchApi(G, q)
        }), Z = (Array.isArray(u.stickers) ? u.stickers : []).find((G) => String((G == null ? void 0 : G.id) || "") === _) || null;
        if (!Z || String(Z.asset_id || "") !== O) return;
        u.assets[O] = H, D(), ke(), m(), fe(), ae(), ge();
      } catch (ce) {
        delete u.assets[O], s.delete(O);
        const H = (Array.isArray(u.stickers) ? u.stickers : []).find((Z) => String((Z == null ? void 0 : Z.id) || "") === _) || null;
        throw H && String(H.asset_id || "") === O && (ye && xe && (u.assets[ye] = xe), H.asset_id = ye, H.vFOV_deg = de, H.crop = we ? { ...we } : null), _e(), m(), fe(), ae(), ge(), ce;
      }
    });
    try {
      await Q;
    } catch {
    }
  }
  function v() {
    var E;
    if (l) return;
    const N = P();
    !N || !J(N) || X(N) || Ht(N) || (E = p == null ? void 0 : p.openImagePicker) == null || E.call(p, "replace");
  }
  async function B() {
    if (l || f !== "stickers") return;
    if (c) {
      await g();
      return;
    }
    const N = u.assets && typeof u.assets == "object" ? u.assets : {}, E = Object.entries(N).filter(([, O]) => {
      const Q = String((O == null ? void 0 : O.type) || "").toLowerCase(), me = String((O == null ? void 0 : O.value) || "");
      return Q === "dataurl" && me.startsWith("data:image");
    });
    if (!E.length) return;
    let _ = !1;
    for (const [O, Q] of E)
      try {
        const me = String((Q == null ? void 0 : Q.value) || "");
        if (!me) continue;
        const ye = await fetch(me).then((ce) => ce.blob()), xe = String(ye.type || "image/png").split("/")[1] || "png", de = String((Q == null ? void 0 : Q.name) || `${O}.${xe}`), we = new File([ye], de, { type: ye.type || "image/png" }), V = await Pi(we, {
          fetchApi: (ce, H) => t.fetchApi(ce, H)
        });
        u.assets[O] = {
          ...V,
          w: Number((Q == null ? void 0 : Q.w) || 0),
          h: Number((Q == null ? void 0 : Q.h) || 0)
        }, _ = !0;
      } catch {
      }
    _ && (m(), ge());
  }
  async function g() {
    let N = !1;
    for (const E of u.stickers) {
      const _ = E.source.data_url;
      if (_)
        try {
          const O = await fetch(_).then((xe) => xe.blob()), Q = String(O.type || "image/png").split("/")[1] || "png", me = new File([O], `${E.id}.${Q}`, { type: O.type || "image/png" }), ye = await Pi(me, {
            fetchApi: (xe, de) => t.fetchApi(xe, de)
          });
          E.source = Pa(ye), N = !0;
        } catch {
        }
    }
    N && (m(), ge());
  }
  function S(N) {
    f !== "stickers" && f !== "cutout" || l || (N.preventDefault(), A(!0));
  }
  function R(N) {
    var O;
    if (f !== "stickers" && f !== "cutout" || l) return;
    N.preventDefault(), N.stopPropagation(), n.depth = 0, A(!1);
    const _ = Array.from(((O = N.dataTransfer) == null ? void 0 : O.files) || []).find((Q) => ar(Q));
    _ && ee(_);
  }
  function x(N) {
    f !== "stickers" && f !== "cutout" || l || $(N) && (n.depth += 1, A(!0), N.preventDefault());
  }
  function F(N) {
    f !== "stickers" && f !== "cutout" || l || (!n.active && $(N) && A(!0), n.active && N.preventDefault());
  }
  function L(N) {
    if (f !== "stickers" && f !== "cutout" || l || !n.active) return;
    n.depth = Math.max(0, n.depth - 1);
    const E = Number(N.clientX) <= 0 && Number(N.clientY) <= 0;
    (n.depth === 0 || E) && A(!1);
  }
  function I(N) {
    f !== "stickers" && f !== "cutout" || l || (n.depth = 0, A(!1), $(N) && N.preventDefault());
  }
  return {
    connect(N) {
      ({
        clearWorldSelection: w,
        commitAndRefreshNode: m,
        computeStickerVFov: h,
        contentSphere: y,
        currentSpaceCamera: z,
        forceCursorTool: T,
        getNextStickerZIndex: ie,
        getSelected: P,
        isExternalSticker: X,
        isSpaceView: j,
        isStickerItem: J,
        markObjectVisualsDirty: _e,
        pushHistory: ke,
        requestDraw: ge,
        selectWorldSticker: ve,
        setSelectedItem: he,
        spaceViewState: Se,
        stickerImageKey: pe,
        stopTimelinePlayback: ne,
        updateSelectionMenu: ae,
        updateSidePanel: fe
      } = N);
    },
    addImageStickerFromFile: ee,
    addImageSticker: se,
    addWorldImageSticker: U,
    addWorldStickerFromFile: b,
    replaceSelectedImageFromFile: W,
    replaceSelectedImage: v,
    migrateLegacyEmbeddedAssets: B,
    pruneUnusedAssets: D,
    setDropCue: A,
    onCanvasDragOver: S,
    onCanvasDrop: R,
    onWindowDragEnter: x,
    onWindowDragOver: F,
    onWindowDragLeave: L,
    onWindowDrop: I
  };
}
function hC(e) {
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
  let m, h, y, z, T, ie, P, X, j, J, _e, ke, ge, ve, he, Se, pe, ne, ae, fe, $, A, D, ee, se, U, b, Y, ue, C, W = o;
  function v(H, Z) {
    var K;
    const G = (K = P().space) == null ? void 0 : K.gizmo;
    if (ge() && G && C("hover", Z) !== null && C("down", Z))
      return n.interaction = { kind: "world_gizmo", camera: !0, mode: G.mode, start: G.transform, base: ie(), changed: !1 }, r.setPointerCapture(H.pointerId), b(Z), !0;
    const q = og(ie(), h(fe()));
    return s_(T(), q, Z, r.width, r.height) ? (ge() || (ae(O()), ue(), Y(), pe()), n.interaction = { kind: "world_select" }, r.setPointerCapture(H.pointerId), !0) : !1;
  }
  function B() {
    if (s || p !== "cutout") return;
    const H = O();
    if (H) {
      ae(H), n.mode = "pano", U(Kt(Number(H.yaw_deg || 0)), Oe(Number(H.pitch_deg || 0), -89.9, 89.9)), ue(), Y(), pe({ cause: "cutout_frame" });
      return;
    }
    const Z = cm({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Kt(Number(n.viewYaw || 0)),
      pitchDeg: Number(n.viewPitch || 0),
      viewFovDeg: Number(n.viewFov || 90)
    });
    d.shots = [Z], ae(Z), X(), n.mode = "pano", Se(), z(), ue(), Y(), pe({ cause: "cutout_frame" });
  }
  function g() {
    s || !u || J() || (A(), d.camera = yS($()), E(), ae(O()), X(), Se(), z(), ue(), Y(), pe({ cause: "cutout_frame" }));
  }
  function S() {
    A(), d.camera = null, ae(null), E(), Se(), z(), ue(), Y(), pe({ cause: "cutout_frame" });
  }
  function R(H, Z) {
    u && ve(H) && (d.camera.projection = Z === So ? "erp" : "perspective", Z === So) || L(H, Z);
  }
  function x() {
    s || p !== "cutout" || (d.shots = [], n.selectedId = null, n.selectedIds = [], n.mode === "frame" && (n.mode = "pano"), n.cutoutAspectOpen = !1, d.active.selected_shot_id = null, Se(), z(), ue(), Y(), pe());
  }
  function F(H, Z) {
    const G = a.frameSafeRect;
    if (!H || !G || n.mode !== "frame") return !1;
    const q = Du * Li(G, H), K = dd(ud(G, Z), q);
    return H.hFOV_deg = K.hFOV_deg, H.vFOV_deg = K.vFOV_deg, !0;
  }
  function L(H, Z) {
    if (!H || H.locked === !0) return;
    const G = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, q = (() => {
      const k = String(H.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(k)) {
        const [be, Ne] = k.split(":").map((Ee) => Number(Ee));
        if (Number.isFinite(be) && Number.isFinite(Ne)) return be >= Ne;
      }
      const oe = Number(H.hFOV_deg || 64), re = Number(H.vFOV_deg || 40);
      return Math.abs(oe - re) > 1e-6 ? oe >= re : zi(H) >= 1;
    })();
    let [K, M] = G[String(Z)] || G["1:1"];
    K >= M !== q && ([K, M] = [M, K]);
    const te = K / M;
    if (!F(H, te)) {
      const k = Oe(Number(H.vFOV_deg || 40), 1, 179);
      H.vFOV_deg = k, H.hFOV_deg = xa(k, te);
    }
    H.aspect_id = `${K}:${M}`;
  }
  function I(H, Z, G) {
    if (!H || H.locked === !0) return !1;
    const q = ws(Z, G);
    if (!q) return !1;
    const K = q.ratio;
    if (!F(H, K)) {
      const M = Oe(Number(H.vFOV_deg || 40), 1, 179);
      H.vFOV_deg = M, H.hFOV_deg = xa(M, K);
    }
    return H.aspect_id = q.label, !0;
  }
  function N(H) {
    if (!H || H.locked === !0) return;
    const Z = String(H.aspect_id || "").trim(), G = ui(H), q = G.tanHalfX / Math.max(1e-12, G.tanHalfY), K = 1 / Math.max(1e-12, q);
    if (!F(H, K)) {
      const M = Oe(Number(H.vFOV_deg || 60), 1, 179);
      H.vFOV_deg = M, H.hFOV_deg = xa(M, K);
    }
    if (/^\d+:\d+$/.test(Z)) {
      const [M, te] = Z.split(":");
      H.aspect_id = `${te}:${M}`;
    } else
      H.aspect_id = Fi(H);
  }
  function E(H = !0) {
    var q, K;
    if (!t) return;
    const Z = W;
    if (!y()) {
      W = null, (q = d.shots) != null && q.length && (d.shots = []), Z && _(Z, null);
      return;
    }
    const G = (K = d.shots) == null ? void 0 : K[0];
    H && G && W && vS(d.camera, n.frame, G, W), W = Km(d.camera, n.frame), G ? Object.assign(G, W, { position: [...W.position] }) : d.shots = [{ ...W, position: [...W.position] }], Z || _(null, W);
  }
  function _(H, Z) {
    var M, te;
    !Z && n.mode === "frame" && he(H);
    const G = (Z == null ? void 0 : Z.position) ?? [0, 0, 0];
    if (((te = (M = n.viewTransition) == null ? void 0 : M.end) == null ? void 0 : te.mode) === "3dof") {
      se({ ...$(), position: G }, n.viewTransition.end);
      return;
    }
    if (n.mode !== "pano" || n.spaceMode !== "3dof" || !_e()) return;
    const q = (H == null ? void 0 : H.position) ?? [0, 0, 0];
    if (q.every((k, oe) => k === G[oe])) return;
    const K = { ...$(), position: q };
    m({ mode: "6dof", position: q, moved: !0 }), n.viewDistance = K.distance, se({ ...K, position: G }, { mode: "3dof", moved: !1 });
  }
  function O() {
    if (!l) return null;
    const H = Array.isArray(d.shots) ? d.shots : [];
    if (!H.length) return null;
    const Z = String(d.active.selected_shot_id || "");
    return H.find((G) => String((G == null ? void 0 : G.id) || "") === Z) || H[0] || null;
  }
  function Q(H, Z, G = {}) {
    var M;
    if ((H == null ? void 0 : H.kind) !== "roll_frame" || !H.shot) return;
    H.accumulatedRad += sm(Z, H.lastAngle), H.lastAngle = Z;
    const q = am(H.start.roll_deg, H.accumulatedRad, {
      shiftKey: G.shiftKey,
      altKey: H.altStarted ? !1 : G.altKey
    });
    H.shot.roll_deg = q, H.changed = H.changed || Math.abs(H.accumulatedRad) > 1e-9;
    const K = (((M = w.sidePanel) == null ? void 0 : M.params) || []).find((te) => te.key === "roll_deg");
    K && (K.value = q, K.displayValue = po(q), K.fillPct = (q + 180) / 360 * 100), D(), xe(H), pe({ localOnly: !0 });
  }
  function me(H, Z, G = {}) {
    var M;
    if ((H == null ? void 0 : H.kind) !== "roll_frame" || !H.shot || !H.rollGesture) return;
    const q = Yg(H.rollGesture, Z, G);
    if (!q) return;
    H.rollGesture = q.gesture, H.center = q.gesture.center, H.lastAngle = q.gesture.lastAngle, H.accumulatedRad = q.gesture.accumulatedRad, H.shot.roll_deg = q.rollDeg, H.changed = H.changed || Math.abs(q.gesture.accumulatedRad) > 1e-9;
    const K = (((M = w.sidePanel) == null ? void 0 : M.params) || []).find((te) => te.key === "roll_deg");
    K && (K.value = q.rollDeg, K.displayValue = po(q.rollDeg), K.fillPct = (q.rollDeg + 180) / 360 * 100), D(), xe(H), pe({ localOnly: !0 });
  }
  function ye(H, Z) {
    const G = ne(H);
    return Math.atan2(G.y - Z.y, G.x - Z.x);
  }
  function xe(H) {
    var te, k;
    if ((H == null ? void 0 : H.kind) !== "roll_frame" || !H.shot) return;
    f.timer && (clearTimeout(f.timer), f.timer = 0), f.target = null;
    const Z = j(H.shot), G = (te = r.getBoundingClientRect) == null ? void 0 : te.call(r), q = (k = c.getBoundingClientRect) == null ? void 0 : k.call(c);
    if (!Z || !G || !q || r.width <= 0 || r.height <= 0) return;
    const K = G.width / r.width, M = G.height / r.height;
    w.tooltip.text = `${po(H.shot.roll_deg)}°`, w.tooltip.left = G.left - q.left + (Z.x + Z.w * 0.5) * K, w.tooltip.top = G.top - q.top + (Z.y + Z.h * 0.5) * M + 12, w.tooltip.variant = "roll", w.tooltip.visible = !0;
  }
  function de(H) {
    var M;
    if (H.button !== 0 || s || n.mode !== "frame") return;
    const Z = O();
    if (!Z || Z.locked === !0) return;
    const G = j(Z);
    if (!G) return;
    const q = { x: G.x + G.w * 0.5, y: G.y + G.h * 0.5 }, K = ye(H, q);
    n.interaction = {
      kind: "roll_frame",
      shot: Z,
      center: q,
      lastAngle: K,
      accumulatedRad: 0,
      start: { roll_deg: Number(Z.roll_deg ?? Z.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (M = i.setPointerCapture) == null || M.call(i, H.pointerId), H.preventDefault(), D(), xe(n.interaction), pe({ localOnly: !0 });
  }
  function we(H) {
    var Z;
    ((Z = n.interaction) == null ? void 0 : Z.kind) !== "roll_frame" || n.interaction.source !== "knob" || Q(
      n.interaction,
      ye(H, n.interaction.center),
      H
    );
  }
  function V() {
    const H = n.interaction;
    (H == null ? void 0 : H.kind) !== "roll_frame" || H.source !== "knob" || (H.changed && (Se(), z(), ue()), n.interaction = null, ke(), ee(), D(), pe());
  }
  function ce(H) {
    const Z = n.mode === "frame" && !s ? O() : null;
    !Z || Z.locked === !0 || Math.abs(Number(Z.roll_deg ?? Z.rot_deg ?? 0)) <= 1e-9 || (Z.roll_deg = 0, Se(), z(), ue(), D(), pe(), H.preventDefault());
  }
  return {
    connect(H) {
      ({
        applySpaceMode: m,
        cameraFrustumLength: h,
        cameraShoots: y,
        commitAndRefreshNode: z,
        currentSpaceCamera: T,
        cutoutCamera: ie,
        editorViewInput: P,
        forceCursorTool: X,
        getFrameViewRect: j,
        hasCamera: J,
        hasSpaceContent: _e,
        hideTooltip: ke,
        isCameraSelected: ge,
        isShotItem: ve,
        leaveFrameView: he,
        pushHistory: Se,
        requestDraw: pe,
        screenPos: ne,
        setSelectedItem: ae,
        spaceScale: fe,
        spaceViewState: $,
        stopTimelinePlayback: A,
        syncFrameRollKnob: D,
        syncViewToggleState: ee,
        transitionView: se,
        turnViewTo: U,
        updateCursor: b,
        updateSelectionMenu: Y,
        updateSidePanel: ue,
        worldGizmoPointer: C
      } = H);
    },
    addCutoutFrame: B,
    addStudioCamera: g,
    deleteStudioCamera: S,
    setShotAspect: R,
    clearCutoutFrame: x,
    applyCutoutAspectCustom: I,
    rotateCutoutAspect90: N,
    syncCutoutShot: E,
    getActiveCutoutShot: O,
    startCameraPress: v,
    applySharedRollInteractionPoint: me,
    onFrameRollKnobPointerDown: de,
    onFrameRollKnobPointerMove: we,
    finishKnobRoll: V,
    onFrameRollKnobDoubleClick: ce
  };
}
function mC(e) {
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
  let m, h, y, z, T, ie, P, X, j, J, _e, ke, ge, ve, he, Se, pe, ne = null, ae = !1;
  function fe(_) {
    if (n.mode = "pano", !_) return;
    h();
    const O = ge().distance;
    n.viewYaw = Kt(_.yaw_deg), n.viewPitch = Oe(_.pitch_deg, -89.9, 89.9), n.viewFov = Oe(_.hFOV_deg, 35, 140), n.spaceMode === "6dof" && m({ mode: "6dof", position: [..._.position], moved: !0 }), n.viewDistance = O, d.backgroundDirty = !0;
  }
  function $() {
    var q, K, M, te, k;
    if (!r) return null;
    const _ = (q = r.getBoundingClientRect) == null ? void 0 : q.call(r), O = Number((_ == null ? void 0 : _.width) || 0) > 0 ? r.width / _.width : 1, Q = Number((_ == null ? void 0 : _.height) || 0) > 0 ? r.height / _.height : 1;
    d.frameCanvasScale = Math.min(O, Q);
    let me = 24, ye = 24;
    const xe = Math.max(me + 1, r.width - 24);
    let de = Math.max(ye + 1, r.height - 24);
    const we = (K = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : K.call(f), V = (M = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : M.call(a);
    let ce = 24;
    we && _ && we.width > 0 && we.height > 0 && (ce = Math.max(ce, (we.right - _.left) * O + Lp)), V && _ && V.width > 0 && V.height > 0 && ((te = p.frameRail) == null ? void 0 : te.visible) === !0 && (ce = Math.max(ce, (_.right - V.left) * O + Lp)), me = Math.max(me, ce);
    const H = Math.min(xe, r.width - ce);
    let Z = 24;
    const G = (k = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : k.call(s);
    if (G && _ && G.width > 0 && G.height > 0 && (Z = Math.max(Z, (G.bottom - _.top) * Q + $c)), [l, w].forEach((oe) => {
      var Ne;
      if (!oe || !_) return;
      const re = getComputedStyle(oe);
      if (re.display === "none" || re.visibility === "hidden" || Number(re.opacity) <= 0) return;
      const be = (Ne = oe.getBoundingClientRect) == null ? void 0 : Ne.call(oe);
      !be || be.width <= 0 || be.height <= 0 || (Z = Math.max(Z, (_.bottom - be.top) * Q + $c));
    }), o && _) {
      const oe = getComputedStyle(o);
      oe.display !== "none" && oe.visibility !== "hidden" && Number(oe.opacity) > 0 && (Z = Math.max(Z, (h2 + $c) * Q));
    }
    return ye = Math.max(ye, Z), de = Math.max(ye + 1, Math.min(de, r.height - Z)), {
      x: me,
      y: ye,
      w: Math.max(1, H - me),
      h: Math.max(1, de - ye)
    };
  }
  function A(_ = T()) {
    if (!_ || !r) return null;
    const O = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return i1(O, _, Du * Li(O, _));
  }
  function D(_ = T()) {
    const O = A(_);
    return O ? { x: O.x, y: O.y, w: O.w, h: O.h } : null;
  }
  function ee() {
    return u && !!T();
  }
  function se(_, O) {
    const Q = T();
    if (!Q || Q.locked === !0) return !1;
    const me = Number(O) > 0, ye = dm(Q, O);
    if (!ye) return !1;
    if (me) {
      const xe = Du * Li(
        d.frameSafeRect || { w: r.width, h: r.height },
        ye
      ), de = fd({ width: r.width, height: r.height }, xe);
      if (de.halfW < r.width * 0.5 - 1e-6 || de.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return Q.hFOV_deg = ye.hFOV_deg, Q.vFOV_deg = ye.vFOV_deg, U(), pe(), !0;
  }
  function U() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, j(), y(), pe());
    }, 180);
  }
  function b() {
    return t && n.mode === "frame" && ie();
  }
  function Y() {
    const _ = T(), O = A(_);
    return _ && O ? lg(_, O, { width: r.width, height: r.height }) : null;
  }
  function ue() {
    var _;
    return ((_ = z()) == null ? void 0 : _.radius) || dr;
  }
  function C(_) {
    const { position: O, yaw_deg: Q, pitch_deg: me, roll_deg: ye, hFOV_deg: xe } = _.shot;
    return { position: O, yaw_deg: Q, pitch_deg: me, roll_deg: ye, hFOV_deg: xe, distance: ue() };
  }
  function W(_, O) {
    const { rect: Q } = _;
    return i.pickSurface(_e(_.shot), O.x - Q.x, O.y - Q.y, Q.w, Q.h);
  }
  function v(_, O, Q) {
    return fu(O, W(_, Q), null, ke());
  }
  function B(_) {
    return JSON.stringify([C(_), _.rect]);
  }
  function g(_) {
    const O = T();
    O.position = [..._.position], O.yaw_deg = _.yaw_deg, O.pitch_deg = _.pitch_deg;
  }
  function S(_, O) {
    const Q = T();
    !Q || c || Q.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: Q,
      last: _,
      start: { yaw_deg: Number(Q.yaw_deg || 0), pitch_deg: Number(Q.pitch_deg || 0) },
      changed: !1
    }, Se(_), r.setPointerCapture(O));
  }
  function R(_, O, Q) {
    const me = Y();
    if (!me || c) return;
    const ye = C(me);
    n.interaction = _ === "orbit" ? { kind: "frame_orbit", last: O, pivot: v(me, ye, O), changed: !1 } : { kind: "frame_pan", last: O, depth: qm(ye, ke()), changed: !1 }, Se(O), r.setPointerCapture(Q);
  }
  function x(_, O) {
    const Q = Y();
    if (!Q) return;
    const me = C(Q), ye = O.x - _.last.x, xe = O.y - _.last.y;
    g(_.kind === "frame_pan" ? Zm(me, ye, xe, Q.rect.w, Q.rect.h, _.depth) : Jm(me, ye, xe, r.height, _.pivot)), _.changed = _.changed || ye !== 0 || xe !== 0, _.last = O, J({ localOnly: !0, cause: "frame_view" });
  }
  function F(_, O) {
    const Q = Y();
    if (!Q || c) return;
    const me = C(Q), ye = performance.now(), xe = { x: _.x, y: _.y, time: ye, key: i.contentRevision(), view: B(Q) };
    if (!Xm(ne, xe)) {
      const de = W(Q, _);
      ne = { ...xe, cost: performance.now() - ye, hit: de };
    }
    g(Qm(me, fu(me, ne.hit, null, ke()), O, ke())), ne.view = B(Y() ?? Q), ne.wheelTime = ye, U(), pe(), J({ localOnly: !0, cause: "frame_view" });
  }
  function L(_, O) {
    const Q = T();
    if (!Q || c || Q.locked === !0) return !1;
    const me = U0(Q, _, O);
    return me === Q ? !1 : (ve(), Q.position = me.position, ae = !0, !0);
  }
  function I() {
    return ae ? (ae = !1, j(), y(), pe(), !0) : !1;
  }
  function N() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, j(), y(), pe(), !0) : !1;
  }
  function E() {
    const _ = n.interaction;
    if (!(_ != null && _.shot) || !_.start || _.kind !== "pan_frame" && _.kind !== "roll_frame") return !1;
    const O = _.kind === "roll_frame";
    return _.kind === "pan_frame" ? (_.shot.yaw_deg = _.start.yaw_deg, _.shot.pitch_deg = _.start.pitch_deg) : _.shot.roll_deg = _.start.roll_deg, O && P(), n.interaction = null, X(), he(), pe(), Se(n.pointerPos), J({ localOnly: !0 }), !0;
  }
  return {
    connect(_) {
      ({
        applySpaceMode: m,
        cancelViewTransition: h,
        commitAndRefreshNode: y,
        contentSphere: z,
        getActiveCutoutShot: T,
        hasSpaceContent: ie,
        hideTooltip: P,
        invalidateLivePaintPreviewCaches: X,
        pushHistory: j,
        requestDraw: J,
        shotViewCamera: _e,
        spaceScale: ke,
        spaceViewState: ge,
        stopTimelinePlayback: ve,
        syncViewToggleState: he,
        updateCursor: Se,
        updateSidePanel: pe
      } = _);
    },
    leaveFrameView: fe,
    measureFrameSafeRect: $,
    getFrameViewLayout: A,
    getFrameViewRect: D,
    supportsFramePainting: ee,
    zoomFrameViewAt: se,
    isFreeFrameView: b,
    frameContext: Y,
    frameViewDistance: ue,
    frameSpaceView: C,
    frameTarget: v,
    startPanFrame: S,
    startFrameDrag: R,
    dragFrame: x,
    zoomFrameAt: F,
    flushFrameWheelCommit: N,
    cancelFrameCameraGesture: E,
    moveFrameByKeys: L,
    endFrameKeyMove: I
  };
}
function gC(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let s, a, l, c, d, u, f, p, w, m, h, y, z, T, ie, P, X, j, J = 0;
  function _e() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function ke() {
    return String(_e() || "") === "lasso_fill";
  }
  function ge() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function ve(v, B) {
    const g = Number(B || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, g / 2048)
    };
  }
  function he(v) {
    const B = String(v || "").trim();
    return B === "eraser" ? Dr : Fn[B] ? B : t.activeBrushPresetId || Dr;
  }
  function Se() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (ge() || j());
  }
  function pe() {
    var v;
    return Se() && ((v = t.pointerPos) == null ? void 0 : v.inside) === !0;
  }
  function ne(v, B = !0) {
    const g = Number((v == null ? void 0 : v.x) || 0), S = Number((v == null ? void 0 : v.y) || 0), R = B !== !1, x = t.pointerPos || { x: 0, y: 0, inside: !1 }, F = x.inside !== R || Math.abs(x.x - g) > 0.01 || Math.abs(x.y - S) > 0.01;
    return t.pointerPos = { x: g, y: S, inside: R }, F;
  }
  function ae() {
    var E, _;
    if (!pe()) return null;
    const v = t.primaryTool === "mask" ? "mask" : "paint", B = v === "mask" ? t.maskTool : t.paintTool, g = he(B), S = Fn[g] || Fn[Dr], R = Number(t.brushSizes[g] ?? 10), x = Math.max(1, R) * Math.max(0.1, Number(S.sizeScale ?? 1)), F = Math.max(3, x * 0.5), L = v === "mask" ? B === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : B === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : jn(t.paintColor), I = v === "mask" ? B === "lasso_fill" ? 0.18 : 0.2 : B === "eraser" ? 0.06 : Oe(Math.max(0.16, Number(L.a ?? 1) * 0.3), 0.16, 0.52), N = v === "mask" ? 0.95 : B === "eraser" ? 0.75 : Oe(Math.max(0.46, Number(L.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: v,
      toolKind: B,
      preset: S,
      radius: F,
      fillStyle: Sr(L, I),
      strokeStyle: Sr(L, N),
      x: Number(((E = t.pointerPos) == null ? void 0 : E.x) || 0),
      y: Number(((_ = t.pointerPos) == null ? void 0 : _.y) || 0),
      hotspotX: F,
      hotspotY: F
    };
  }
  function fe() {
    var O, Q, me;
    const v = ae();
    if (!r) return;
    if (!v) {
      r.style.display = "none";
      return;
    }
    let B = v.radius * 2, g = v.radius * 2, S = "999px", R = 0, x = v.fillStyle, F = "1px solid rgba(222, 222, 222, 0.72)", L = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const I = "rgba(222, 222, 222, 0.72)", N = "rgba(52, 52, 52, 0.72)";
    let E = Number(v.hotspotX ?? B * 0.5), _ = Number(v.hotspotY ?? g * 0.5);
    if (v.toolKind === "lasso_fill")
      B = Sl, g = Sl, S = "0", F = "0", L = "none", E = y2, _ = b2, x = x2(v.fillStyle, N, I);
    else if (v.layerKind === "mask")
      x = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (v.toolKind === "marker") {
      const ye = Math.max(1, Number(((O = v.preset) == null ? void 0 : O.aspect) ?? 1));
      B = Math.max(10, v.radius * 2 * ye), g = Math.max(6, v.radius * 2), S = `${Math.min(6, g * 0.42)}px`, R = Number(((me = (Q = v.preset) == null ? void 0 : Q.angle) == null ? void 0 : me.value) || 0) * Vi;
    } else v.toolKind === "brush" ? x = `radial-gradient(circle at 50% 50%, ${v.strokeStyle} 0%, ${v.fillStyle} 45%, rgba(0,0,0,0) 100%)` : v.toolKind === "eraser" && (x = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(B)}px`, r.style.height = `${Math.round(g)}px`, r.style.borderRadius = S, r.style.border = F, r.style.boxShadow = L, r.style.background = x, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(v.x - E)}px, ${Math.round(v.y - _)}px) rotate(${R}deg)`;
  }
  function $() {
    var we;
    if (!n || !i) return;
    const v = t.primaryTool === "mask" ? "mask" : "paint", B = v === "mask" ? t.maskTool : t.paintTool;
    if (B === "lasso_fill") return;
    const g = he(B), S = Fn[g] || Fn[Dr], R = Number(t.brushSizes[g] ?? 10), x = Math.max(1, R) * Math.max(0.1, Number(S.sizeScale ?? 1)), F = Math.max(6, x * 0.5), L = B === "eraser", I = v === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : L ? { r: 1, g: 1, b: 1, a: 0.22 } : jn(t.paintColor), N = v === "mask" ? Sr(I, 0.22) : L ? "rgba(255,255,255,0.14)" : Sr(I, Oe(Math.max(0.18, Number(I.a ?? 1) * 0.34), 0.18, 0.56)), E = v === "mask" ? Sr(I, 0.96) : L ? "rgba(255,255,255,0.72)" : Sr(I, Oe(Math.max(0.56, Number(I.a ?? 1) * 0.96), 0.56, 1));
    let _ = F * 2, O = F * 2, Q = "999px", me = 0, ye = N;
    const xe = "rgba(222, 222, 222, 0.72)", de = "rgba(52, 52, 52, 0.72)";
    if (v === "mask")
      ye = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (B === "marker") {
      const V = Math.max(1, Number((S == null ? void 0 : S.aspect) ?? 1));
      _ = Math.max(16, F * 2 * V), O = Math.max(10, F * 2), Q = `${Math.min(8, O * 0.42)}px`, me = Number(((we = S == null ? void 0 : S.angle) == null ? void 0 : we.value) || 0) * Vi;
    } else B === "brush" ? ye = `radial-gradient(circle at 50% 50%, ${E} 0%, ${N} 48%, rgba(0,0,0,0) 100%)` : B === "lasso_fill" ? (_ = Math.max(18, F * 1.8), O = _, ye = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${E} 43%, ${E} 58%, rgba(0,0,0,0) 59%)`) : L && (ye = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(_)}px`, i.style.height = `${Math.round(O)}px`, i.style.borderRadius = Q, i.style.background = ye, i.style.border = `1px solid ${xe}`, i.style.boxShadow = `0 0 0 1px ${de}`, i.style.transform = `rotate(${me}deg)`, J && (clearTimeout(J), J = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function A() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), J && clearTimeout(J), J = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), J = 0;
    }, 180));
  }
  function D(v, B, g, S) {
    const R = he(B), x = Fn[R] || Fn[Dr], F = t.brushSizes[R] ?? 10, L = Math.max(1, F) * Math.max(0.1, x.sizeScale ?? 1), I = ve(S, L), N = g.map((_) => ({
      ..._,
      t: Number((_ == null ? void 0 : _.t) || 0),
      widthScale: Number.isFinite(Number(_ == null ? void 0 : _.widthScale)) ? Math.max(0, Number(_.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(_ == null ? void 0 : _.pressureLike)) ? Math.max(0, Number(_.pressureLike)) : 1
    })), E = {
      id: io(v),
      actionGroupId: io("ag"),
      targetSpace: S && typeof S == "object" ? { ...S, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: v,
      toolKind: B,
      size: L,
      createdAt: Date.now(),
      color: v === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: I.radiusModel,
      radiusValue: I.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: N.map((_) => ({ ..._ })),
        points: N.map((_) => ({ ..._ }))
      }
    };
    return Rp(E, x), t.mode, Number(x.aspect ?? 1), Number(E.aspect ?? 1), String(E.stampKind || ""), Number(E.size || 0), String(E.radiusModel || ""), Number(E.radiusValue || 0), { ...E.targetSpace }, E;
  }
  function ee(v, B, g, S) {
    const R = g.map((I) => ({
      ...I,
      t: Number((I == null ? void 0 : I.t) || 0),
      widthScale: Number.isFinite(Number(I == null ? void 0 : I.widthScale)) ? Math.max(0, Number(I.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(I == null ? void 0 : I.pressureLike)) ? Math.max(0, Number(I.pressureLike)) : 1
    })), x = he(B), F = Fn[x] || Fn[Dr], L = {
      id: io(v),
      actionGroupId: io("ag"),
      targetSpace: S && typeof S == "object" ? { ...S, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: v,
      toolKind: B,
      size: 10,
      createdAt: Date.now(),
      color: v === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: R.map((I) => ({ ...I }))
      }
    };
    return Rp(L, F), t.mode, Number(F.aspect ?? 1), Number(L.aspect ?? 1), String(L.stampKind || ""), { ...L.targetSpace }, L;
  }
  function se(v) {
    const B = o.painting || (o.painting = ko(null)), g = B[v] || (B[v] = { strokes: [] });
    return Array.isArray(g.strokes) || (g.strokes = []), g.strokes;
  }
  function U(v, B, g = performance.now()) {
    let S;
    if (t.mode === "frame") {
      const N = f();
      if (!N || (S = X(B, N, g), !S)) return !1;
    } else
      S = P(B, g);
    if (!S) return !1;
    const R = v.stroke.geometry.rawPoints || v.stroke.geometry.points, x = v.stroke.geometry.points, F = R[R.length - 1];
    if (F) {
      const N = Math.abs(Number(S.u ?? S.x ?? 0) - Number(F.u ?? F.x ?? 0)), E = Math.abs(Number(S.v ?? S.y ?? 0) - Number(F.v ?? F.y ?? 0));
      if (N < 15e-4 && E < 15e-4) return !1;
    }
    const L = {
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    R.push({ ...L }), x.push({ ...L });
    const I = p(v);
    if (I) {
      const N = t.paintEngine.ensureTarget(I);
      t.paintEngine.appendStrokePoint(N, Number(L.u ?? 0), Number(L.v ?? 0), v.stroke);
    }
    return !0;
  }
  function b(v, B, g = performance.now()) {
    var F, L;
    let S;
    if (t.mode === "frame") {
      const I = f();
      if (!I) return !1;
      S = X(B, I, g);
    } else
      S = P(B, g);
    const R = (L = (F = v == null ? void 0 : v.stroke) == null ? void 0 : F.geometry) == null ? void 0 : L.points;
    if (!S || !Array.isArray(R)) return !1;
    const x = R[R.length - 1];
    if (x) {
      const I = Math.abs(Number(S.u ?? S.x ?? 0) - Number(x.u ?? x.x ?? 0)), N = Math.abs(Number(S.v ?? S.y ?? 0) - Number(x.v ?? x.y ?? 0));
      if (I < 15e-4 && N < 15e-4) return !1;
    }
    return R.push({
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Y(v) {
    var V, ce, H, Z, G;
    const B = (v == null ? void 0 : v.stroke) || null;
    if (!B || (v == null ? void 0 : v.layerKind) !== "paint" || String((B == null ? void 0 : B.toolKind) || "") !== "eraser") return !1;
    ie();
    const g = p(), S = c(g.width, g.height);
    if (!T(S, B, { w: g.width, h: g.height })) return !1;
    const R = ((ce = (V = S.ctx) == null ? void 0 : V.getImageData(0, 0, g.width, g.height)) == null ? void 0 : ce.data) || null;
    if (!R) return !1;
    const x = new Map(m().map((q) => [String((q == null ? void 0 : q.actionGroupId) || (q == null ? void 0 : q.id) || "").trim(), q ? { ...q } : null])), F = [], L = [], I = [...h().filter((q) => String((q == null ? void 0 : q.layerKind) || "paint") !== "paint")];
    let N = !1, E = w().reduce((q, K) => Math.max(q, Number((K == null ? void 0 : K.z_index) || 0)), -1) + 1;
    function _(q, K, M, te = 8) {
      let k = K, oe = M, re = -1, be = -1;
      for (let Ne = 0; Ne < M; Ne += 1)
        for (let Ee = 0; Ee < K; Ee += 1)
          q[(Ne * K + Ee) * 4 + 3] <= te || (Ee < k && (k = Ee), Ne < oe && (oe = Ne), Ee > re && (re = Ee), Ne > be && (be = Ne));
      return re < k || be < oe ? null : { minX: k, minY: oe, maxX: re, maxY: be };
    }
    const O = _(R, g.width, g.height, 8);
    if (!O) return !1;
    function Q(q, K) {
      return !q || !K ? !1 : !(q.maxX < K.minX || K.maxX < q.minX || q.maxY < K.minY || K.maxY < q.minY);
    }
    function me(q, K) {
      const M = d((q == null ? void 0 : q.actionGroupId) || (q == null ? void 0 : q.id) || "", "paint", K);
      if (!M) return null;
      const te = M.centerUv.u - M.halfW, k = M.centerUv.u + M.halfW, oe = M.centerUv.v - M.halfH, re = M.centerUv.v + M.halfH, be = g.width, Ne = g.height;
      return {
        minX: Math.floor((te % 1 + 1) % 1 * be),
        maxX: Math.ceil((k % 1 + 1) % 1 * be),
        minY: Math.floor(Oe(oe, 0, 1) * Ne),
        maxY: Math.ceil(Oe(re, 0, 1) * Ne),
        wraps: k - te >= 1 || te < 0 || k > 1
      };
    }
    function ye(q) {
      const K = (q == null ? void 0 : q.bbox) || null;
      if (!K) return null;
      const M = (q == null ? void 0 : q.transform) || {}, te = g.width, k = g.height, oe = Number(K.u0 || 0) + Number(M.du || 0), re = Number(K.u1 || 0) + Number(M.du || 0), be = Number(K.v0 || 0) + Number(M.dv || 0), Ne = Number(K.v1 || 0) + Number(M.dv || 0);
      return {
        minX: Math.floor((oe % 1 + 1) % 1 * te),
        maxX: Math.ceil((re % 1 + 1) % 1 * te),
        minY: Math.floor(Oe(be, 0, 1) * k),
        maxY: Math.ceil(Oe(Ne, 0, 1) * k),
        wraps: re - oe >= 1 || oe < 0 || re > 1
      };
    }
    function xe(q) {
      return q ? q.wraps ? Q(O, { minX: 0, maxX: q.maxX, minY: q.minY, maxY: q.maxY }) || Q(O, { minX: q.minX, maxX: g.width - 1, minY: q.minY, maxY: q.maxY }) : Q(O, q) : !0;
    }
    function de(q) {
      if (!q) return { touched: !1, canvas: null };
      const K = c(g.width, g.height, { readback: !0 });
      K.ctx.drawImage(q, 0, 0);
      const M = K.ctx.getImageData(0, 0, g.width, g.height);
      K.ctx.save(), K.ctx.globalCompositeOperation = "destination-out", K.ctx.drawImage(S.canvas, 0, 0), K.ctx.restore();
      const te = K.ctx.getImageData(0, 0, g.width, g.height);
      for (let k = 0; k < g.width * g.height; k += 1) {
        if (R[k * 4 + 3] <= 8) continue;
        const re = M.data[k * 4 + 3], be = te.data[k * 4 + 3];
        if (re > be)
          return { touched: !0, canvas: K.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function we(q, K, M) {
      const te = Number(M == null ? void 0 : M.z_index), k = l(q, K, M).map((oe, re) => ({
        ...oe,
        z_index: Number.isFinite(te) ? te + re * 1e-3 : E + re * 1e-3
      }));
      return k.length && (E = Math.max(E, ...k.map((oe) => Number((oe == null ? void 0 : oe.z_index) || 0))) + 1), k;
    }
    for (const q of m()) {
      const K = String((q == null ? void 0 : q.actionGroupId) || (q == null ? void 0 : q.id) || "").trim();
      if (!K) continue;
      const M = y(K, "paint");
      if (!xe(me(q, M))) {
        L.push(q), F.push(...M);
        continue;
      }
      const te = ((Z = (H = t.paintEngine) == null ? void 0 : H.getGroupTarget) == null ? void 0 : Z.call(H, K)) || null, k = ((G = te == null ? void 0 : te.committedPaint) == null ? void 0 : G.canvas) || null;
      if (!k) {
        L.push(q), F.push(...M);
        continue;
      }
      const oe = de(k);
      if (!oe.touched || !oe.canvas) {
        L.push(q), F.push(...M);
        continue;
      }
      N = !0;
      const re = we(oe.canvas, "paint", x.get(K) || q || {});
      I.push(...re);
    }
    for (const q of h().filter((K) => String((K == null ? void 0 : K.layerKind) || "paint") === "paint")) {
      if (!xe(ye(q))) {
        I.push(q);
        continue;
      }
      const K = s(q, null);
      if (!K) {
        I.push(q);
        continue;
      }
      const M = de(K);
      if (!M.touched || !M.canvas) {
        I.push(q);
        continue;
      }
      N = !0;
      const te = we(M.canvas, "paint", q);
      I.push(...te);
    }
    return N ? (o.painting.paint.strokes = F, o.painting.groups = L.sort((q, K) => Number((q == null ? void 0 : q.z_index) || 0) - Number((K == null ? void 0 : K.z_index) || 0)), o.painting.raster_objects = I.sort((q, K) => Number((q == null ? void 0 : q.z_index) || 0) - Number((K == null ? void 0 : K.z_index) || 0)), a({ preservePanelValues: !1 }), !0) : !1;
  }
  function ue(v) {
    var F, L, I, N, E;
    if ((((L = (F = v.stroke) == null ? void 0 : F.geometry) == null ? void 0 : L.rawPoints) || ((N = (I = v.stroke) == null ? void 0 : I.geometry) == null ? void 0 : N.points) || []).length >= 1) {
      W(v);
      const _ = p(v);
      _ && (String(((E = v.stroke) == null ? void 0 : E.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(_) : t.paintEngine.commitActiveStroke(v.stroke, _)), v._hasCommittedSegments = !0;
    }
    const g = v.stroke, S = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, R = D(v.layerKind, g.toolKind, [], S);
    R.actionGroupId = g.actionGroupId, v.stroke = R;
    const x = p(v);
    x && t.paintEngine.beginStroke(R, x);
  }
  function C(v) {
    var F, L;
    if ((((L = (F = v.stroke) == null ? void 0 : F.geometry) == null ? void 0 : L.points) || []).length >= 3) {
      W(v);
      const I = p(v);
      I && t.paintEngine.commitActiveStroke(v.stroke, I), v._hasCommittedSegments = !0;
    }
    const g = v.stroke, S = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, R = ee(v.layerKind, g.toolKind, [], S);
    R.actionGroupId = g.actionGroupId, v.stroke = R;
    const x = p(v);
    x && t.paintEngine.beginStroke(R, x);
  }
  function W(v) {
    var x, F, L, I;
    const B = ((x = v == null ? void 0 : v.stroke) == null ? void 0 : x.geometry) || null;
    if (!B) return !1;
    const g = String(((F = v == null ? void 0 : v.stroke) == null ? void 0 : F.toolKind) || "pen");
    if (v.layerKind === "paint" && g === "eraser")
      return B.geometryKind !== "lasso_fill" && (B.processedPoints = z(B.rawPoints || B.points || [], v.stroke.targetSpace, !0)), Y(v);
    const S = v.layerKind === "paint" && g !== "eraser";
    if (B.geometryKind === "lasso_fill")
      return (Array.isArray(B.points) ? B.points : []).length < 3 ? !1 : (S && u((L = v.stroke) == null ? void 0 : L.actionGroupId), se(v.layerKind).push(v.stroke), !0);
    const R = B.rawPoints || B.points || [];
    return R.length < 1 ? !1 : (B.processedPoints = z(R, v.stroke.targetSpace, !0), S && u((I = v.stroke) == null ? void 0 : I.actionGroupId), se(v.layerKind).push(v.stroke), !0);
  }
  return {
    connect(v) {
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
        getPaintingGroupList: m,
        getRasterObjectList: h,
        getStrokeGroupStrokes: y,
        processFreehandPoints: z,
        rasterizeStrokeToSurface: T,
        rebuildPaintEngineIfNeeded: ie,
        screenPosToErpPoint: P,
        screenPosToFrameAsErpPoint: X,
        supportsFramePainting: j
      } = v);
    },
    isActiveLassoTool: ke,
    supportsErpPainting: ge,
    getBrushPresetIdForTool: he,
    isPaintCursorEnabled: Se,
    isActivePaintCursorVisible: pe,
    setPointerPos: ne,
    syncPaintCursorElement: fe,
    showPaintSizePreview: $,
    hidePaintSizePreview: A,
    buildFreehandStrokeRecord: D,
    buildLassoFillStrokeRecord: ee,
    getPaintingLayerList: se,
    appendPaintPoint: U,
    appendLassoPoint: b,
    _segmentFrameStroke: ue,
    _segmentFrameLassoFill: C,
    commitPaintInteraction: W
  };
}
function yC(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, s, a, l, c, d, u, f, p, w, m, h, y, z, T, ie, P, X, j, J, _e, ke, ge, ve;
  function he() {
    return ge().reverse();
  }
  function Se(A) {
    var ee;
    if (n && t.mode === "frame") {
      const se = s(), U = l(se);
      if (!se || !U || !(Number((A == null ? void 0 : A.x) || 0) >= Number(U.x || 0) && Number((A == null ? void 0 : A.x) || 0) <= Number(U.x || 0) + Number(U.w || 0) && Number((A == null ? void 0 : A.y) || 0) >= Number(U.y || 0) && Number((A == null ? void 0 : A.y) || 0) <= Number(U.y || 0) + Number(U.h || 0))) return null;
      const Y = J(A, se, performance.now()), ue = Y ? o(Y) : null;
      if (ue)
        for (const W of a()) {
          if (!T(W)) continue;
          const v = ve(W, ue);
          if (v && Number(v.x) >= 0 && Number(v.x) <= 1 && Number(v.y) >= 0 && Number(v.y) <= 1) {
            const B = j(W);
            if (B != null && B.visible) return { item: W, geom: B };
          }
        }
      const C = c(!1).slice().sort((W, v) => Number((v == null ? void 0 : v.z_index) || 0) - Number((W == null ? void 0 : W.z_index) || 0));
      for (const W of C) {
        if (W.type === "strokeGroup") {
          const g = f(X("paint", W.actionGroupId || W.id || ""));
          if (!g) continue;
          const S = j(g);
          if (!(S != null && S.visible)) continue;
          const R = Array.isArray(S.strokePaths) ? S.strokePaths : [];
          for (const x of R) {
            const F = Array.isArray(x == null ? void 0 : x.points) ? x.points : [];
            if (!F.length) continue;
            if (x.closed && F.length >= 3 && Qr(A, F)) return { item: g, geom: S };
            const L = Math.max(8, Number((x == null ? void 0 : x.lineWidth) || 0) * 0.5 + 6);
            for (let I = 0; I < F.length - 1; I += 1)
              if (Hc(A, F[I], F[I + 1]) <= L * L) return { item: g, geom: S };
            if (F.length === 1 && qo(A, F[0]) <= L * L) return { item: g, geom: S };
          }
          continue;
        }
        if (W.type === "rasterObject") {
          const g = d(P(((ee = W.item) == null ? void 0 : ee.id) || W.id || ""));
          if (!g) continue;
          const S = j(g);
          if (p(g, S, A, Y)) return { item: g, geom: S };
          continue;
        }
        const v = W.item;
        if (!v || !T(v) || !ue) continue;
        const B = ve(v, ue);
        if (B && Number(B.x) >= 0 && Number(B.x) <= 1 && Number(B.y) >= 0 && Number(B.y) <= 1) {
          const g = j(v);
          if (g != null && g.visible) return { item: v, geom: g };
        }
      }
      if (!ue) return null;
      for (const W of he()) {
        const v = ve(W, ue);
        if (!v || !(Number(v.x) >= 0 && Number(v.x) <= 1 && Number(v.y) >= 0 && Number(v.y) <= 1)) continue;
        const B = j(W);
        if (B != null && B.visible) return { item: W, geom: B };
      }
      return null;
    }
    const D = [
      ...c(!1).slice().sort((se, U) => Number((U == null ? void 0 : U.z_index) || 0) - Number((se == null ? void 0 : se.z_index) || 0)).map((se) => {
        var U;
        return se.type === "strokeGroup" ? f(X("paint", se.actionGroupId || se.id || "")) : se.type === "rasterObject" ? d(P(((U = se.item) == null ? void 0 : U.id) || se.id || "")) : se.item;
      }).filter(Boolean),
      ...he(),
      ...n ? a().filter((se) => z(se)) : []
    ];
    for (const se of D) {
      if (ie(se)) {
        const b = j(se);
        if (!(b != null && b.visible)) continue;
        const Y = Array.isArray(b.strokePaths) ? b.strokePaths : [];
        for (const ue of Y) {
          const C = Array.isArray(ue == null ? void 0 : ue.points) ? ue.points : [];
          if (!C.length) continue;
          if (ue.closed && C.length >= 3 && Qr(A, C)) return { item: se, geom: b };
          const W = Math.max(8, Number((ue == null ? void 0 : ue.lineWidth) || 0) * 0.5 + 6);
          for (let v = 0; v < C.length - 1; v += 1)
            if (Hc(A, C[v], C[v + 1]) <= W * W) return { item: se, geom: b };
          if (C.length === 1 && qo(A, C[0]) <= W * W) return { item: se, geom: b };
        }
        continue;
      }
      if (y(se)) {
        const b = j(se);
        if (!(b != null && b.visible)) continue;
        if (p(se, b, A)) return { item: se, geom: b };
        continue;
      }
      const U = j(se);
      if (U.visible && Qr(A, U.corners))
        return { item: se, geom: U };
    }
    return null;
  }
  function pe(A, D, ee = null) {
    if (!A || !A.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (T(ee)) return wu(A, D);
    if (A.kind === "strokeGroup") {
      const se = A.corners.findIndex((b) => qo(b, D) <= 121);
      if (se >= 0) {
        const b = A.corners[se], Y = b.x - A.center.x, ue = b.y - A.center.y, C = Y * ue >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: se, cursor: C };
      }
      const U = Array.isArray(A.strokePaths) ? A.strokePaths : [];
      for (const b of U) {
        const Y = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
        if (b.closed && Y.length >= 3 && Qr(D, Y)) return { kind: "move", cursor: "default" };
        const ue = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
        for (let C = 0; C < Y.length - 1; C += 1)
          if (Hc(D, Y[C], Y[C + 1]) <= ue * ue) return { kind: "move", cursor: "default" };
      }
      return Qr(D, A.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (A.kind === "rasterObject") {
      const se = A.corners.findIndex((U) => qo(U, D) <= 121);
      if (se >= 0) {
        const U = A.corners[se], b = U.x - A.center.x, Y = U.y - A.center.y, ue = b * Y >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: se, cursor: ue };
      }
      return Qr(D, A.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return Ww(A, D, {
      edges: i === "cutout" || z(ee),
      resize: !(z(ee) && m()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function ne(A, D) {
    return {
      x0: Math.min(Number((A == null ? void 0 : A.x) || 0), Number((D == null ? void 0 : D.x) || 0)),
      y0: Math.min(Number((A == null ? void 0 : A.y) || 0), Number((D == null ? void 0 : D.y) || 0)),
      x1: Math.max(Number((A == null ? void 0 : A.x) || 0), Number((D == null ? void 0 : D.x) || 0)),
      y1: Math.max(Number((A == null ? void 0 : A.y) || 0), Number((D == null ? void 0 : D.y) || 0))
    };
  }
  function ae(A, D) {
    return !!A && !!D && Number(D.x) >= Number(A.x0) && Number(D.x) <= Number(A.x1) && Number(D.y) >= Number(A.y0) && Number(D.y) <= Number(A.y1);
  }
  function fe(A, D) {
    if (!A || !(D != null && D.visible) || !Array.isArray(D.corners)) return !1;
    if (D.corners.some((U) => ae(A, U))) return !0;
    const ee = (Number(A.x0) + Number(A.x1)) * 0.5, se = (Number(A.y0) + Number(A.y1)) * 0.5;
    return !!Qr({ x: ee, y: se }, D.corners);
  }
  function $(A) {
    if (ke(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? _e("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? _e("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? _e("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? _e("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? _e("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? _e(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? _e("grabbing") : _e("default");
      return;
    }
    if (w()) {
      _e("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        _e(p2);
        return;
      }
      if (t.primaryTool !== "cursor") {
        _e("default");
        return;
      }
      _e("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      _e("default");
      return;
    }
    if (t.gizmoAxis) {
      _e("grab");
      return;
    }
    const D = u(), ee = D ? j(D) : null, se = D ? h(D) : !1, U = se ? { kind: "none", cursor: "default" } : pe(ee, A, D);
    if (!se && U.kind !== "none") {
      _e(U.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && Se(A)) {
      _e("default");
      return;
    }
    _e(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(A) {
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
        isErpCamera: m,
        isItemLocked: h,
        isRasterObjectItem: y,
        isShotItem: z,
        isStickerItem: T,
        isStrokeGroupItem: ie,
        makeRasterObjectSelectionId: P,
        makeStrokeGroupSelectionId: X,
        objectGeom: j,
        screenPosToFrameAsErpPoint: J,
        setCanvasCursor: _e,
        syncPaintCursorElement: ke,
        upstreamSkyStickers: ge,
        worldDirToFrameLocalPoint: ve
      } = A);
    },
    hitObjectAt: Se,
    handleHit: pe,
    rectFromPoints: ne,
    rectIntersectsGeom: fe,
    updateCursor: $
  };
}
function bC(e) {
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
  let f, p, w, m, h, y, z, T, ie, P, X, j, J, _e, ke, ge, ve, he = !1;
  function Se() {
    return he;
  }
  function pe() {
    if (!o) return;
    if (he = !1, n.mode === "frame") {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || ie() && j()) {
      const b = ae();
      he = b.visible, fe(b);
      return;
    }
    const D = y(), ee = z();
    if (!D && ee.length === 0 || n.interaction) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const se = T(), U = CA({
      type: d,
      selected: D,
      selectedItems: ee,
      selectedKind: se,
      geom: ee.length > 1 ? h(ee) : ve(D),
      allLocked: f(ee),
      anyLocked: ee.some((b) => J(b)),
      selectedLocked: J(D),
      activeAspect: _e(D) && P() ? So : Vr(D),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: X,
      isStickerHidden: ge,
      canRestoreSelectedToInitial: p,
      iconSet: Ke,
      cameraShot: t,
      coverage: a.coverage,
      upstream: ne(ee)
    });
    fe(U);
  }
  function ne(D) {
    const ee = D.filter(Ht);
    return ee.length ? { editable: ee.every(wl) } : null;
  }
  function ae() {
    const D = ke() && !n.interaction ? m().space : null;
    if (!(D != null && D.gizmo)) return { visible: !1 };
    const ee = w(), se = [...D.stickers, ...D.upstreamStickers].find((ue) => ue.id === n.worldSelectedId), b = (se ? Pd(se) : [D.gizmo.transform.position]).map((ue) => Ss(ee, ue, r.width, r.height)).filter(Boolean), Y = r_(ee, D.gizmo.transform.position, D.gizmo.mode, r.width, r.height);
    return IA({ corners: b, gizmoBox: Y, gizmoMode: D.gizmo.mode, camera: ie() });
  }
  function fe(D) {
    var Y, ue;
    if (!D.visible) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const ee = (C, W) => EA(D.anchor, C, W, r.width, r.height), se = Math.max(1, Number(((Y = n.menuSize) == null ? void 0 : Y.w) || 220)), U = Math.max(1, Number(((ue = n.menuSize) == null ? void 0 : ue.h) || 40)), b = ee(se, U);
    if (!b) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    u.selectionMenu = {
      visible: !0,
      left: b.left,
      top: b.top,
      items: D.items
    }, i.requestFrame(() => {
      if (!o || u.selectionMenu.visible !== !0) return;
      const C = o.getBoundingClientRect(), W = Math.round(Number((C == null ? void 0 : C.width) || 0)) || 220, v = Math.round(Number((C == null ? void 0 : C.height) || 0)) || 40;
      n.menuSize = { w: W, h: v, measured: !0 };
      const B = ee(W, v);
      B && (u.selectionMenu.left = B.left, u.selectionMenu.top = B.top);
    });
  }
  function $() {
    l.timer && (clearTimeout(l.timer), l.timer = 0), l.target = null, u.tooltip.visible = !1;
  }
  function A(D) {
    if (!c || !D || !D.isConnected) return;
    const ee = String(D.getAttribute("data-tip") || "").trim();
    if (!ee) return;
    u.tooltip.text = ee, u.tooltip.visible = !0;
    const se = D;
    i.requestFrame(() => {
      var F, L;
      if (l.target !== se || !c || !(se != null && se.isConnected)) return;
      const U = s.getBoundingClientRect(), b = se.getBoundingClientRect(), Y = 8, ue = 12, C = Math.round(Number(((F = c.getBoundingClientRect()) == null ? void 0 : F.width) || 0)) || 100, W = Math.round(Number(((L = c.getBoundingClientRect()) == null ? void 0 : L.height) || 0)) || 24, v = !!se.closest(".pano-floating-left"), B = !!se.closest(".pano-frame-rail"), g = !!se.closest(".pano-paint-footer") || !!se.closest(".pano-paint-color-float");
      let S = "", R = b.left - U.left + b.width * 0.5 - C * 0.5, x = b.top - U.top - W - ue;
      if (se.closest(".pano-floating-top") && (x = b.bottom - U.top + ue), v)
        S = "tool-rail", R = b.right - U.left + 10, x = b.top - U.top + b.height * 0.5 - W * 0.5, R = Oe(R, Y, Math.max(Y, U.width - C - Y)), x = Oe(x, Y, Math.max(Y, U.height - W - Y));
      else if (B)
        S = "frame-rail", R = b.left - U.left - C - 10, x = b.top - U.top + b.height * 0.5 - W * 0.5, R = Oe(R, Y, Math.max(Y, U.width - C - Y)), x = Oe(x, Y, Math.max(Y, U.height - W - Y));
      else if (g) {
        S = "footer";
        const I = se.closest(".pano-paint-footer"), N = I ? I.getBoundingClientRect() : b;
        R = N.left - U.left + N.width * 0.5 - C * 0.5, x = N.bottom - U.top + 5, R = Oe(R, Y, Math.max(Y, U.width - C - Y)), x = Math.max(Y, x);
      }
      R = Oe(R, Y, Math.max(Y, U.width - C - Y)), x = Math.max(Y, x), u.tooltip.left = R, u.tooltip.top = x, u.tooltip.variant = S, u.tooltip.visible = !0;
    });
  }
  return {
    connect(D) {
      ({
        areAllSelectedItemsLocked: f,
        canRestoreSelectedToInitial: p,
        currentSpaceCamera: w,
        editorViewInput: m,
        getMultiSelectionGeom: h,
        getSelected: y,
        getSelectedItems: z,
        getSelectedKind: T,
        isCameraSelected: ie,
        isErpCamera: P,
        isExternalSticker: X,
        isFreeSpaceView: j,
        isItemLocked: J,
        isShotItem: _e,
        isSpaceView: ke,
        isStickerHidden: ge,
        objectGeom: ve
      } = D);
    },
    isWorldMenuShown: Se,
    updateSelectionMenu: pe,
    hideTooltip: $,
    showTooltipFor: A
  };
}
function vC(e) {
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
    viewController: m
  } = e;
  let h, y, z, T, ie, P, X, j, J, _e, ke, ge, ve, he, Se, pe, ne, ae, fe, $, A, D, ee, se, U, b, Y, ue, C, W, v, B, g, S, R, x, F, L, I, N, E, _, O, Q, me, ye, xe, de, we, V, ce, H, Z, G, q, K, M, te, k, oe, re, be, Ne, Ee, Ve, We, Ge, Ce, ze, le, Ie, Ae, Fe, je, He, Ue, ft, yt, Dt, Ct, An, qe, ln, Bt, gi, Br, yi, sn, bn, Yr, hr, nr, Ts, Hi, Po, Ao, Ds, Rs, Ls, Gi, Nt, Un, rr, Co, $n, Vs, $s, zs, qr = null;
  function Ql(De) {
    p.selection && (p.selection = null, Ls());
    const Te = Fe(De);
    qr = Te, Ct(Te, !0), he(), m.state.inertia.active = !1, m.state.inertia.vx = 0, m.state.inertia.vy = 0;
    const Pe = H(), vt = ce(), nt = Pe || vt ? ok(Co(), De) : null;
    if (vt && nt) {
      De.preventDefault(), nt === "look" ? bn(Te, De.pointerId) : sn(nt, Te, De.pointerId);
      return;
    }
    if (nt === "look") {
      De.preventDefault();
      const Xe = je(De);
      n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, m.startDrag(Xe.x, Xe.y, De.pointerId, performance.now()), Nt(Te), t.setPointerCapture(De.pointerId);
      return;
    }
    if (nt) {
      De.preventDefault(), Yr(nt, Te, De.pointerId);
      return;
    }
    if ((Pe || vt) && De.button !== 0) {
      De.preventDefault();
      return;
    }
    if (De.button === 1) {
      if (De.preventDefault(), n.mode === "frame") {
        const Xe = ue();
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
        n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, m.startDrag(Xe.x, Xe.y, De.pointerId, performance.now());
      }
      Nt(Te), t.setPointerCapture(De.pointerId);
      return;
    }
    if (De.button !== 0) return;
    if (n.mode === "frame" && (De.altKey || De.shiftKey) && !a) {
      const Xe = ue(), Be = g(Xe);
      if (!Xe || Xe.locked === !0 || !Be) return;
      const Qe = Bg({
        frame: Be,
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
      const Xe = n.primaryTool === "mask" ? "mask" : "paint", Be = n.primaryTool === "mask" ? n.maskTool : n.paintTool, Qe = n.mode === "frame" && Hi() ? ue() : null, Yt = { kind: "ERP_GLOBAL" }, At = Qe ? Ue(Te, Qe, performance.now()) : He(Te, performance.now());
      if (!At) {
        Nt(Te);
        return;
      }
      n.interaction = {
        kind: Be === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: Xe,
        _livePreviewToken: io("live"),
        stroke: Be === "lasso_fill" ? ke(Xe, Be, [At], Yt) : _e(Xe, Be, [At], Yt)
      }, we();
      const Cr = C(n.interaction);
      if (Cr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, Cr), n.interaction.kind === "paint_stroke") {
          const Ki = n.paintEngine.ensureTarget(Cr), Wi = Number((At == null ? void 0 : At.u) ?? (At == null ? void 0 : At.x) ?? 0), Ui = Number((At == null ? void 0 : At.v) ?? (At == null ? void 0 : At.y) ?? 0);
          n.paintEngine.appendStrokePoint(Ki, Wi, Ui, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, Cr);
      Nt(Te), t.setPointerCapture(De.pointerId), Ae();
      return;
    }
    const Pt = _(), Je = E(), et = Pt.length > 1 ? R(Pt) : Je ? Ne(Je) : null;
    if (n.primaryTool === "cursor" && (De.ctrlKey || De.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Te, current: Te }, Nt(Te), t.setPointerCapture(De.pointerId), Ae({ localOnly: !0, reason: pt.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && ge() && H() && yi(De, Te) || n.primaryTool === "cursor" && c && M() && js(De, Te)) return;
    if (Pt.length > 1 && (et != null && et.visible)) {
      if ((Pt.some((Be) => Z(Be)) ? { kind: "none" } : ye(et, Te)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: Pt.map((Be) => Be),
          offset: { x: Te.x - et.center.x, y: Te.y - et.center.y },
          startCenter: { x: et.center.x, y: et.center.y },
          stickerSnapshots: Pt.filter((Be) => te(Be)).map((Be) => ({
            id: String(Be.id || ""),
            yaw_deg: Number(Ge(Be).yaw_deg || 0),
            pitch_deg: Number(Ge(Be).pitch_deg || 0),
            center: (() => {
              var Yt, At;
              const Qe = Ne(Be);
              return Qe != null && Qe.visible ? { x: Number(((Yt = Qe.center) == null ? void 0 : Yt.x) || 0), y: Number(((At = Qe.center) == null ? void 0 : At.y) || 0) } : { x: Te.x, y: Te.y };
            })()
          })),
          strokeSnapshots: Pt.filter((Be) => k(Be)).map((Be) => ({
            id: String(Be.actionGroupId || Be.id || ""),
            layerKind: String(Be.layerKind || "paint"),
            snapshot: dn(Q(Be.actionGroupId, Be.layerKind)),
            frameSnapshot: dn(ee(Be.actionGroupId, Be.layerKind)),
            center: (() => {
              var Yt, At;
              const Qe = Ne(Be);
              return Qe != null && Qe.visible ? { x: Number(((Yt = Qe.center) == null ? void 0 : Yt.x) || 0), y: Number(((At = Qe.center) == null ? void 0 : At.y) || 0) } : { x: Te.x, y: Te.y };
            })(),
            centerUv: O(Be.actionGroupId, Be.layerKind)
          })),
          rasterSnapshots: Pt.filter((Be) => G(Be)).map((Be) => ({
            id: Ve(Be.rasterObjectId || Be.id || ""),
            snapshot: dn(L().find((Qe) => String((Qe == null ? void 0 : Qe.id) || "") === Ve(Be.rasterObjectId || Be.id || ""))),
            center: (() => {
              var Yt, At;
              const Qe = Ne(Be);
              return Qe != null && Qe.visible ? { x: Number(((Yt = Qe.center) == null ? void 0 : Yt.x) || 0), y: Number(((At = Qe.center) == null ? void 0 : At.y) || 0) } : { x: Te.x, y: Te.y };
            })(),
            centerUv: F(Be)
          }))
        }, Nt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
    } else if (Je && (et != null && et.visible)) {
      const Xe = Z(Je) ? { kind: "none" } : ye(et, Te, Je);
      if (Xe.kind === "scale") {
        n.interaction = k(Je) ? {
          kind: "scale_stroke_group",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          snapshot: dn(Q(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: dn(ee(Je.actionGroupId, Je.layerKind)),
          cursor: Xe.cursor
        } : G(Je) ? {
          kind: "scale_raster_object",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          snapshot: dn(L().find((Be) => String((Be == null ? void 0 : Be.id) || "") === Ve(Je.rasterObjectId || Je.id || ""))),
          cursor: Xe.cursor
        } : {
          kind: "scale",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          startHFOV: Number(Ge(Je).hFOV_deg || 20),
          startVFOV: Number(Ge(Je).vFOV_deg || 20),
          cursor: Xe.cursor
        }, Nt(Te), t.setPointerCapture(De.pointerId);
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
        }, Nt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
      if (Xe.kind === "rotate") {
        n.interaction = k(Je) ? {
          kind: "rotate_stroke_group",
          item: Je,
          center: et.center,
          startAng: Math.atan2(Te.y - et.center.y, Te.x - et.center.x),
          snapshot: dn(Q(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: dn(ee(Je.actionGroupId, Je.layerKind))
        } : {
          kind: "rotate",
          item: Je,
          center: et.center,
          startRot: Number(Ge(Je).rot_deg || Ge(Je).roll_deg || 0),
          startAng: Math.atan2(Te.y - et.center.y, Te.x - et.center.x)
        }, Nt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
      if (Xe.kind === "move") {
        if (k(Je)) {
          const Be = n.mode === "frame" ? (() => {
            const Qe = ue();
            return Qe ? Ue(Te, Qe, performance.now()) : null;
          })() : He(Te, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Je,
            startUv: Be,
            snapshot: dn(Q(Je.actionGroupId, Je.layerKind)),
            frameSnapshot: dn(ee(Je.actionGroupId, Je.layerKind))
          }, Nt(Te), t.setPointerCapture(De.pointerId);
          return;
        }
        if (G(Je)) {
          const Be = n.mode === "frame" ? (() => {
            const Qe = ue();
            return Qe ? Ue(Te, Qe, performance.now()) : null;
          })() : He(Te, performance.now());
          n.interaction = {
            kind: "move_raster_object",
            item: Je,
            startUv: Be,
            snapshot: dn(L().find((Qe) => String((Qe == null ? void 0 : Qe.id) || "") === Ve(Je.rasterObjectId || Je.id || "")))
          }, Nt(Te), t.setPointerCapture(De.pointerId);
          return;
        }
        n.interaction = {
          kind: "move",
          item: Je,
          offset: { x: Te.x - et.center.x, y: Te.y - et.center.y }
        }, Nt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
    }
    const st = de(Te);
    if (st) {
      const Xe = n.selectedId !== st.item.id;
      if (Xe && n.selectedId && (Ce(), ae()), An(st.item), d && Xe && (n.cutoutAspectOpen = !1), Xe && rr(), Un(), Ae(), Z(st.item)) {
        Nt(Te);
        return;
      }
      n.interaction = {
        kind: k(st.item) ? "move_stroke_group" : G(st.item) ? "move_raster_object" : "move",
        item: st.item,
        offset: { x: Te.x - st.geom.center.x, y: Te.y - st.geom.center.y },
        startUv: k(st.item) || G(st.item) ? n.mode === "frame" ? (() => {
          const Be = ue();
          return Be ? Ue(Te, Be, performance.now()) : null;
        })() : He(Te, performance.now()) : null,
        snapshot: k(st.item) ? dn(Q(st.item.actionGroupId, st.item.layerKind)) : G(st.item) ? dn(L().find((Be) => String((Be == null ? void 0 : Be.id) || "") === Ve(st.item.rasterObjectId || st.item.id || ""))) : null,
        frameSnapshot: k(st.item) ? dn(ee(st.item.actionGroupId, st.item.layerKind)) : null
      }, Nt(Te), t.setPointerCapture(De.pointerId);
      return;
    }
    const zn = !!n.selectedId;
    zn && (Ce(), ae()), Se(), zn && rr(), Un(), Ae(), n.mode === "pano" && Oo(De, Te);
  }
  function Xr(De, Te) {
    return i.gizmoPointer(De, fe(), Te.x, Te.y, t.width, t.height);
  }
  function js(De, Te) {
    var et, st;
    const Pe = (et = D().space) == null ? void 0 : et.gizmo;
    if (Pe && Xr("hover", Te) !== null && Xr("down", Te))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: Pe.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: Pe.transform,
        base: Wr(Dt(), n.frame),
        changed: !1
      }, t.setPointerCapture(De.pointerId), Nt(Te), !0;
    const vt = _(), nt = E(), Pt = vt.length > 1 ? vt.some((zn) => Z(zn)) ? "none" : ye(R(vt), Te).kind : nt && !Z(nt) ? ye(Ne(nt), Te, nt).kind : "none";
    if (Pt !== "none" && Pt !== "move") return !1;
    const Je = i.pickSticker(fe(), Te.x, Te.y, t.width, t.height);
    return ((st = hr(Je)) == null ? void 0 : st.placement) !== "world" ? !1 : (n.worldSelectedId !== Je && (n.selectedId && (Ce(), ae()), yt(Je), rr(), Un(), Ao(), Ae()), n.interaction = { kind: "world_select" }, t.setPointerCapture(De.pointerId), !0);
  }
  function Io(De) {
    var vt;
    const Pe = !!(n.worldSelectedId || V()) && n.primaryTool === "cursor" && M() && !!((vt = D().space) != null && vt.gizmo) ? Xr("hover", De) : null;
    Pe !== n.gizmoAxis && (n.gizmoAxis = Pe, l.backgroundDirty = !0, Ae({ localOnly: !0, reason: pt.VIEW }));
  }
  function ec(De, Te) {
    const Pe = Xr("move", Te);
    if (Pe && De.camera) {
      for (const [nt, Pt] of Object.entries(np(De.mode, De.base, De.start, Pe))) mn(u.camera, nt, n.frame, Pt);
      Po(), De.changed = !0, r.request("sidePanel"), Ae({ localOnly: !0 });
      return;
    }
    const vt = hr(De.id);
    !Pe || !vt || (MS(vt, n.frame, np(De.mode, De.base, De.start, Pe)), De.changed = !0, oe(), r.request("sidePanel"), Ae({ localOnly: !0 }));
  }
  function Eo(De) {
    n.interaction = null, n.gizmoAxis = null, De.kind === "world_gizmo" && (Xr("up", n.pointerPos), l.backgroundDirty = !0, De.changed && (Ce(), pe(), rr())), Nt(n.pointerPos), Ae();
  }
  function Oo(De, Te) {
    if (H()) {
      const vt = Co().emptyLeft;
      vt && Yr(vt, Te, De.pointerId);
      return;
    }
    const Pe = je(De);
    n.interaction = { kind: "view", last: Pe, lastTs: performance.now() }, m.startDrag(Pe.x, Pe.y, De.pointerId, performance.now()), Nt(Te), t.setPointerCapture(De.pointerId);
  }
  function Hs(De, Te) {
    if (!f || !We.playing || (We.stop(), De.kind === "frame_pan")) return;
    if (De.kind === "frame_orbit") {
      const nt = se();
      nt && (De.pivot = Y(nt, b(nt), Te));
      return;
    }
    if (De.kind === "world_gizmo") {
      const nt = hr(De.id);
      De.camera ? De.base = $() : nt && (De.base = Wr(nt, n.frame));
      return;
    }
    if (De.kind === "move_multi") {
      const nt = R(De.items);
      if (!(nt != null && nt.visible)) return;
      De.offset = { x: Te.x - nt.center.x, y: Te.y - nt.center.y }, De.startCenter = { x: nt.center.x, y: nt.center.y };
      for (const Pt of De.stickerSnapshots) {
        const Je = De.items.find((st) => String((st == null ? void 0 : st.id) || "") === Pt.id), et = Je ? Ne(Je) : null;
        et != null && et.visible && (Pt.yaw_deg = Number(Ge(Je).yaw_deg || 0), Pt.pitch_deg = Number(Ge(Je).pitch_deg || 0), Pt.center = { x: et.center.x, y: et.center.y });
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
    var vt, nt, Pt, Je, et, st, zn, Xe, Be, Qe, Yt, At, Cr, Ki, Wi, Ui, Bs, Ys, qs, Xs, Js, Zs;
    const Te = Fe(De);
    if (Ct(Te, !0), !n.interaction) {
      Io(Te), Nt(Te);
      return;
    }
    Nt(Te);
    const Pe = n.interaction;
    if (qr && (Te.x !== qr.x || Te.y !== qr.y)) {
      const ct = qr;
      qr = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(Pe.kind) || Hs(Pe, ct);
    }
    if (Pe.kind !== "world_select") {
      if (Pe.kind === "world_gizmo") {
        ec(Pe, Te);
        return;
      }
      if (Pe.kind === "paint_stroke") {
        const ct = typeof De.getCoalescedEvents == "function" ? De.getCoalescedEvents() : [De];
        let ht = !1;
        ct.forEach((gt) => {
          const St = Fe(gt);
          if (n.mode === "frame") {
            const vn = ue(), en = vn ? g(vn) : null;
            if (en) {
              const Cn = (St.x - en.x) / Math.max(1, en.w), Rt = (St.y - en.y) / Math.max(1, en.h);
              if (!(Cn >= 0 && Cn <= 1 && Rt >= 0 && Rt <= 1)) {
                Pe._outOfFrame = !0;
                return;
              }
              Pe._outOfFrame && (Pe._outOfFrame = !1, y(Pe));
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
            const vn = ue(), en = vn ? g(vn) : null;
            if (en) {
              const Cn = (St.x - en.x) / Math.max(1, en.w), Rt = (St.y - en.y) / Math.max(1, en.h);
              if (!(Cn >= 0 && Cn <= 1 && Rt >= 0 && Rt <= 1)) {
                Pe._outOfFrame = !0;
                return;
              }
              Pe._outOfFrame && (Pe._outOfFrame = !1, h(Pe));
            }
          }
          z(Pe, St, performance.now()) && (ht = !0);
        }), ht) {
          const gt = C(Pe);
          gt && n.paintEngine.updateActiveStroke(Pe.stroke, gt), Ae({ localOnly: !0, reason: pt.PAINT });
        }
        return;
      }
      if (Pe.kind === "view") {
        const ct = performance.now(), ht = n.mode === "unwrap" ? Te : je(De);
        m.moveDrag(ht.x, ht.y, n.mode === "unwrap" ? "unwrap" : "pano", ct), Pe.lastTs = ct, Pe.last = ht, Ae({ localOnly: !0, reason: pt.VIEW });
        return;
      }
      if (Pe.kind === "frame_pan" || Pe.kind === "frame_orbit") {
        A(Pe, Te);
        return;
      }
      if (Pe.kind === "space_pan" || Pe.kind === "space_orbit") {
        const ct = gi();
        ln(Pe.kind === "space_pan" ? Zm(ct, Te.x - Pe.last.x, Te.y - Pe.last.y, t.width, t.height, Pe.depth) : Jm(ct, Te.x - Pe.last.x, Te.y - Pe.last.y, t.height, Pe.pivot)), Pe.last = Te;
        return;
      }
      if (Pe.kind === "pan_frame") {
        const ct = B(Pe.shot);
        if (!ct || !Pe.shot) return;
        const ht = Te.x - Pe.last.x, gt = Te.y - Pe.last.y, St = qg(Pe.shot, {
          dx: ht,
          dy: gt,
          focalPx: ct.focalPx,
          invertX: ((vt = u.ui_settings) == null ? void 0 : vt.invert_view_x) === !0,
          invertY: ((nt = u.ui_settings) == null ? void 0 : nt.invert_view_y) === !0
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
          const gt = ue(), St = g(gt);
          if (!gt || !St) return;
          const vn = {
            x: Oe((ct - St.x) / Math.max(1, St.w), 0, 1),
            y: Oe((ht - St.y) / Math.max(1, St.h), 0, 1)
          }, en = U(gt, vn);
          if (!en) return;
          const Cn = ha(en);
          $n(Pe.item, { yaw_deg: Cn.yaw, pitch_deg: Cn.pitch });
        } else if (n.mode === "unwrap") {
          const gt = me(), St = Oe((ct - gt.x) / Math.max(gt.w, 1), 0, 1), vn = Oe((ht - gt.y) / Math.max(gt.h, 1), 0, 1);
          $n(Pe.item, { yaw_deg: Kt(St * 360 - 180), pitch_deg: Oe(90 - vn * 180, -90, 90) });
        } else {
          const gt = ft(ct, ht), St = ha(gt);
          $n(Pe.item, { yaw_deg: St.yaw, pitch_deg: St.pitch });
        }
        te(Pe.item) && oe(), Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "move_stroke_group") {
        const ct = n.mode === "frame" ? (() => {
          const St = ue();
          return St ? Ue(Te, St, performance.now()) : null;
        })() : He(Te, performance.now());
        if (!ct || !Pe.startUv) return;
        const ht = Bt(Number(ct.u || 0), Number(Pe.startUv.u || 0)), gt = Number(ct.v || 0) - Number(Pe.startUv.v || 0);
        j((Pt = Pe.item) == null ? void 0 : Pt.actionGroupId, ht, gt, Pe.snapshot, (Je = Pe.item) == null ? void 0 : Je.layerKind, Pe.frameSnapshot) && (be({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: pt.PAINT }));
        return;
      }
      if (Pe.kind === "move_raster_object") {
        const ct = n.mode === "frame" ? (() => {
          const St = ue();
          return St ? Ue(Te, St, performance.now()) : null;
        })() : He(Te, performance.now());
        if (!ct || !Pe.startUv) return;
        const ht = Bt(Number(ct.u || 0), Number(Pe.startUv.u || 0)), gt = Number(ct.v || 0) - Number(Pe.startUv.v || 0);
        ie(((et = Pe.item) == null ? void 0 : et.rasterObjectId) || ((st = Pe.item) == null ? void 0 : st.id) || "", ht, gt, Pe.snapshot) && (re(), Ae({ localOnly: !0, reason: pt.PAINT }));
        return;
      }
      if (Pe.kind === "scale_raster_object") {
        const ht = Math.max(1, Math.hypot(Te.x - Pe.center.x, Te.y - Pe.center.y)) / Math.max(1, Number(Pe.startDist || 1));
        P(((zn = Pe.item) == null ? void 0 : zn.rasterObjectId) || ((Xe = Pe.item) == null ? void 0 : Xe.id) || "", ht, Pe.snapshot) && (re(), Ae({ localOnly: !0, reason: pt.PAINT }));
        return;
      }
      if (Pe.kind === "move_multi") {
        const ct = Te.x - Number(((Be = Pe.offset) == null ? void 0 : Be.x) || 0), ht = Te.y - Number(((Qe = Pe.offset) == null ? void 0 : Qe.y) || 0);
        let gt = !1, St = !1, vn = !1;
        const en = ct - Number(((Yt = Pe.startCenter) == null ? void 0 : Yt.x) || ct), Cn = ht - Number(((At = Pe.startCenter) == null ? void 0 : At.y) || ht);
        for (const Rt of Array.isArray(Pe.stickerSnapshots) ? Pe.stickerSnapshots : []) {
          const an = (w === "cutout" ? W() : S()).find(($t) => String(($t == null ? void 0 : $t.id) || "") === String(Rt.id || ""));
          if (!an || !te(an)) continue;
          const rn = {
            x: Number(((Cr = Rt.center) == null ? void 0 : Cr.x) || 0) + en,
            y: Number(((Ki = Rt.center) == null ? void 0 : Ki.y) || 0) + Cn
          };
          if (n.mode === "frame" && d) {
            const $t = ue(), Ft = g($t);
            if (!$t || !Ft) continue;
            const ir = {
              x: Oe((rn.x - Ft.x) / Math.max(1, Ft.w), 0, 1),
              y: Oe((rn.y - Ft.y) / Math.max(1, Ft.h), 0, 1)
            }, In = U($t, ir);
            if (!In) continue;
            const Fo = ha(In);
            $n(an, { yaw_deg: Fo.yaw, pitch_deg: Fo.pitch });
          } else if (n.mode === "unwrap") {
            const $t = me(), Ft = Oe((rn.x - $t.x) / Math.max($t.w, 1), 0, 1), ir = Oe((rn.y - $t.y) / Math.max($t.h, 1), 0, 1);
            $n(an, { yaw_deg: Kt(Ft * 360 - 180), pitch_deg: Oe(90 - ir * 180, -90, 90) });
          } else {
            const $t = ft(rn.x, rn.y), Ft = ha($t);
            $n(an, { yaw_deg: Ft.yaw, pitch_deg: Ft.pitch });
          }
          gt = !0;
        }
        for (const Rt of Array.isArray(Pe.strokeSnapshots) ? Pe.strokeSnapshots : []) {
          const an = {
            x: Number(((Wi = Rt.center) == null ? void 0 : Wi.x) || 0) + en,
            y: Number(((Ui = Rt.center) == null ? void 0 : Ui.y) || 0) + Cn
          }, rn = n.mode === "frame" ? (() => {
            const Ft = ue();
            return Ft ? Ue(an, Ft, performance.now()) : null;
          })() : He(an, performance.now()), $t = Rt.centerUv || null;
          if (rn && $t) {
            const Ft = Bt(Number(rn.u || 0), Number($t.u || 0)), ir = Number(rn.v || 0) - Number($t.v || 0);
            j(Rt.id, Ft, ir, Rt.snapshot, Rt.layerKind, Rt.frameSnapshot) && (gt = !0, St = !0);
          }
        }
        for (const Rt of Array.isArray(Pe.rasterSnapshots) ? Pe.rasterSnapshots : []) {
          const an = {
            x: Number(((Bs = Rt.center) == null ? void 0 : Bs.x) || 0) + en,
            y: Number(((Ys = Rt.center) == null ? void 0 : Ys.y) || 0) + Cn
          }, rn = n.mode === "frame" ? (() => {
            const Ft = ue();
            return Ft ? Ue(an, Ft, performance.now()) : null;
          })() : He(an, performance.now()), $t = Rt.centerUv || null;
          if (rn && $t) {
            const Ft = Bt(Number(rn.u || 0), Number($t.u || 0)), ir = Number(rn.v || 0) - Number($t.v || 0);
            ie(Rt.id, Ft, ir, Rt.snapshot) && (gt = !0, vn = !0);
          }
        }
        gt && (St ? be({ rebuildPaintEngine: !1 }) : vn ? re() : oe(), Ae({ localOnly: !0 }));
        return;
      }
      if (Pe.kind === "scale_stroke_group") {
        const ht = Math.max(1, Math.hypot(Te.x - Pe.center.x, Te.y - Pe.center.y)) / Math.max(1, Number(Pe.startDist || 1));
        J((qs = Pe.item) == null ? void 0 : qs.actionGroupId, ht, 0, Pe.snapshot, (Xs = Pe.item) == null ? void 0 : Xs.layerKind, Pe.frameSnapshot) && (be({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: pt.PAINT }));
        return;
      }
      if (Pe.kind === "rotate_stroke_group") {
        let ct = (Math.atan2(Te.y - Pe.center.y, Te.x - Pe.center.x) - Number(Pe.startAng || 0)) * Vi;
        De.shiftKey && (ct = Math.round(ct / 45) * 45), J((Js = Pe.item) == null ? void 0 : Js.actionGroupId, 1, ct, Pe.snapshot, (Zs = Pe.item) == null ? void 0 : Zs.layerKind, Pe.frameSnapshot) && (be({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: pt.PAINT }));
        return;
      }
      if (Pe.kind === "marquee_select") {
        Pe.current = Te, Ae({ localOnly: !0, reason: pt.OVERLAY });
        return;
      }
      if (Pe.kind === "scale") {
        const ht = Math.max(1, Math.hypot(Te.x - Pe.center.x, Te.y - Pe.center.y)) / Pe.startDist;
        $n(Pe.item, { hFOV_deg: Oe(Pe.startHFOV * ht, 1, 179), vFOV_deg: Oe(Pe.startVFOV * ht, 1, 179) }), q(Pe.item) || (Pe.item.aspect_id = Fi(Pe.item)), te(Pe.item) && oe(), Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "scale_x") {
        const ht = Math.max(1, Math.hypot(Te.x - Pe.center.x, Te.y - Pe.center.y)) / Pe.startDist;
        $n(Pe.item, { hFOV_deg: Oe(Pe.startHFOV * ht, 1, 179) }), q(Pe.item) || (Pe.item.aspect_id = Fi(Pe.item)), te(Pe.item) && oe(), Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "scale_y") {
        const ht = Math.max(1, Math.hypot(Te.x - Pe.center.x, Te.y - Pe.center.y)) / Pe.startDist;
        $n(Pe.item, { vFOV_deg: Oe(Pe.startVFOV * ht, 1, 179) }), q(Pe.item) || (Pe.item.aspect_id = Fi(Pe.item)), te(Pe.item) && oe(), Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "rotate") {
        let ht = (Math.atan2(Te.y - Pe.center.y, Te.x - Pe.center.x) - Pe.startAng) * Vi, gt = Pe.startRot - ht;
        De.shiftKey && (gt = Math.round(gt / 45) * 45), $n(Pe.item, { [te(Pe.item) ? "rot_deg" : "roll_deg"]: gt }), te(Pe.item) && oe(), Ae({ localOnly: !0 });
      }
    }
  }
  function Ks() {
    var Te, Pe, vt, nt, Pt, Je, et;
    const De = n.interaction;
    if (!((De == null ? void 0 : De.kind) === "roll_frame" && De.source === "knob")) {
      if ((De == null ? void 0 : De.kind) === "space_pan" || (De == null ? void 0 : De.kind) === "space_orbit") {
        n.interaction = null, Nt(n.pointerPos), Un();
        return;
      }
      if ((De == null ? void 0 : De.kind) === "world_select" || (De == null ? void 0 : De.kind) === "world_gizmo") {
        Eo(De);
        return;
      }
      if (((Te = n.interaction) == null ? void 0 : Te.kind) === "paint_stroke" || ((Pe = n.interaction) == null ? void 0 : Pe.kind) === "paint_lasso_fill") {
        we();
        const st = ne(n.interaction), zn = !!n.interaction._hasCommittedSegments;
        if (st || zn) {
          be();
          const Xe = String(((vt = n.interaction.stroke) == null ? void 0 : vt.actionGroupId) || "").trim();
          if (Xe) {
            const Qe = x().find((Yt) => String((Yt == null ? void 0 : Yt.actionGroupId) || "") === Xe);
            Qe && (Qe.frame = null);
          }
          const Be = C(n.interaction);
          Be && (st ? String(((nt = n.interaction.stroke) == null ? void 0 : nt.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(Be), Ie()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, Be) : n.paintEngine.cancelActiveStroke(Be)), Ce(), ae(), rr(), Un(), o.setDirtyCanvas(!0, !0), Ae();
        } else {
          const Xe = C(n.interaction);
          Xe && n.paintEngine.cancelActiveStroke(Xe);
        }
      } else if (((Pt = n.interaction) == null ? void 0 : Pt.kind) === "marquee_select") {
        const st = ze(n.interaction.start, n.interaction.current), Xe = [
          ...w === "cutout" ? v().filter((Be) => !K(Be)) : [...S()],
          ...N(),
          ...I()
        ].filter((Be) => le(st, Ne(Be)));
        qe(Xe, ((Je = Xe[Xe.length - 1]) == null ? void 0 : Je.id) || null), d && Xe.length && (n.cutoutAspectOpen = !1), rr(), Un(), Ae();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((et = n.interaction) == null ? void 0 : et.kind))
        n.interaction.changed && (Ce(), pe(), rr());
      else if (n.interaction && n.interaction.kind !== "view") {
        let st = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (st = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (st = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (st = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (st = !0), st && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? be({ rebuildPaintEngine: !0 }) : re()), Ce(), ae(), o.setDirtyCanvas(!0, !0), Rs(), Un(), Ae();
      }
      n.interaction = null, (De == null ? void 0 : De.kind) === "roll_frame" && xe(), we(), De && De.kind === "view" && Br(() => m.endDrag(performance.now())), Gi(), Un(), Nt(n.pointerPos), Ae();
    }
  }
  function Ws() {
    var De, Te, Pe, vt, nt;
    if (!ve()) {
      if (((De = n.interaction) == null ? void 0 : De.kind) === "world_select" || ((Te = n.interaction) == null ? void 0 : Te.kind) === "world_gizmo") {
        Eo(n.interaction);
        return;
      }
      if (((Pe = n.interaction) == null ? void 0 : Pe.kind) === "view" && Br(() => m.endDrag(performance.now())), ((vt = n.interaction) == null ? void 0 : vt.kind) === "paint_stroke" || ((nt = n.interaction) == null ? void 0 : nt.kind) === "paint_lasso_fill") {
        we();
        const Pt = C(n.interaction);
        Pt && n.paintEngine.cancelActiveStroke(Pt);
      }
      n.interaction = null, we(), Gi(), Nt(n.pointerPos), Ae({ localOnly: !0 });
    }
  }
  function Us(De) {
    const Te = Fe(De), Pe = Ct(Te, !0);
    n.interaction || (Nt(Te), Pe && n.mode === "frame" && n.primaryTool === "cursor" && Ae({ localOnly: !0, reason: pt.OVERLAY }));
  }
  function tc(De) {
    if (n.mode === "frame") {
      const Te = Fe(De), Pe = Ya(De);
      Pe && nr(), Pe && ce() ? Vs(Te, -Pe) : Pe && $s(Te, Pe) && Ae({ localOnly: !0 }), De.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (he(), H()) {
        const Te = Ya(De);
        Te && zs(Fe(De), -Te);
      } else m.applyWheelEvent(De) && Ae({ localOnly: !0, reason: pt.VIEW });
      De.preventDefault();
    }
  }
  return {
    connect(De) {
      ({
        _segmentFrameLassoFill: h,
        _segmentFrameStroke: y,
        appendLassoPoint: z,
        appendPaintPoint: T,
        applyRasterObjectOffset: ie,
        applyRasterObjectTransform: P,
        applySharedRollInteractionPoint: X,
        applyStrokeGroupOffset: j,
        applyStrokeGroupTransform: J,
        buildFreehandStrokeRecord: _e,
        buildLassoFillStrokeRecord: ke,
        cameraShoots: ge,
        cancelFrameCameraGesture: ve,
        cancelViewTransition: he,
        clearSelection: Se,
        commitAndRefreshNode: pe,
        commitPaintInteraction: ne,
        commitState: ae,
        currentSpaceCamera: fe,
        cutoutCamera: $,
        dragFrame: A,
        editorViewInput: D,
        ensureGroupFrame: ee,
        frameContext: se,
        frameLocalPointToWorldDir: U,
        frameSpaceView: b,
        frameTarget: Y,
        getActiveCutoutShot: ue,
        getActivePaintTargetDescriptor: C,
        getCutoutSelectableItems: W,
        getCutoutSelectableItemsForHit: v,
        getFrameViewLayout: B,
        getFrameViewRect: g,
        getList: S,
        getMultiSelectionGeom: R,
        getPaintingGroupList: x,
        getRasterObjectCenterUv: F,
        getRasterObjectList: L,
        getSelectableRasterObjectItems: I,
        getSelectableStrokeGroupItems: N,
        getSelected: E,
        getSelectedItems: _,
        getStrokeGroupCenterUv: O,
        getStrokeGroupStrokes: Q,
        getUnwrapRect: me,
        handleHit: ye,
        hideTooltip: xe,
        hitObjectAt: de,
        invalidateLivePaintPreviewCaches: we,
        isCameraSelected: V,
        isFreeFrameView: ce,
        isFreeSpaceView: H,
        isItemLocked: Z,
        isRasterObjectItem: G,
        isSceneSticker: q,
        isShotItem: K,
        isSpaceView: M,
        isStickerItem: te,
        isStrokeGroupItem: k,
        markObjectVisualsDirty: oe,
        markPaintCompositeVisualsDirty: re,
        markPaintStrokeVisualsDirty: be,
        objectGeom: Ne,
        paintingShown: Ee,
        parseRasterObjectSelectionId: Ve,
        playback: We,
        poseOf: Ge,
        pushHistory: Ce,
        rectFromPoints: ze,
        rectIntersectsGeom: le,
        refreshPaintEngineRevisionCache: Ie,
        requestDraw: Ae,
        screenPos: Fe,
        screenPosCss: je,
        screenPosToErpPoint: He,
        screenPosToFrameAsErpPoint: Ue,
        screenToWorldDir: ft,
        selectWorldSticker: yt,
        selectedWorldSticker: Dt,
        setPointerPos: Ct,
        setSelectedItem: An,
        setSelectedItems: qe,
        setSpaceView: ln,
        shortestWrappedDelta: Bt,
        spaceViewState: gi,
        startAnimation: Br,
        startCameraPress: yi,
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
        syncSidePanelControls: Rs,
        syncTimeline: Ls,
        syncViewToggleState: Gi,
        updateCursor: Nt,
        updateSelectionMenu: Un,
        updateSidePanel: rr,
        viewControls: Co,
        writePose: $n,
        zoomFrameAt: Vs,
        zoomFrameViewAt: $s,
        zoomSpaceAt: zs
      } = De);
    },
    onCanvasPointerDown: Ql,
    worldGizmoPointer: Xr,
    hoverWorldGizmo: Io,
    onCanvasPointerMove: Gs,
    onCanvasPointerUp: Ks,
    onCanvasPointerCancel: Ws,
    onCanvasMouseMove: Us,
    onCanvasWheel: tc
  };
}
function SC(e) {
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
  let f, p, w, m, h, y, z, T, ie, P, X, j, J, _e, ke, ge, ve, he, Se, pe, ne, ae, fe, $, A, D, ee, se, U, b, Y, ue, C;
  function W(F, L, I = !1) {
    var ye;
    D();
    const N = a && n.mode === "frame" ? z() : null, E = N || P(), _ = N ? "shot" : j(), O = $();
    if (O && !ue(O) || !O && (!E || _ === "stroke" || J(E))) return;
    const Q = (((ye = u.sidePanel) == null ? void 0 : ye.params) || []).find((xe) => xe.key === F);
    if (!Q || Q.enabled === !1) return;
    let me = Number(L);
    if (Number.isNaN(me) && (me = 0), (O || t) && l2.has(F) ? me = F === "scale" ? Math.max(me, x0) : me : me = Oe(me, Number(Q.min), Number(Q.max)), F === "yaw_deg" && (me = Kt(me)), !O && t && F.startsWith("position_")) {
      se(), _S(l.camera, n.frame, F, me), Y(), ne(), I && Se();
      return;
    }
    if (O) {
      xS(O, n.frame, F, me), ge(), Y(), ne(), I && Se();
      return;
    }
    F === "opacity" ? wS(E, n.frame, me / 100) : C(E, { [F]: me }), a && !_e(E) && (F === "hFOV_deg" || F === "vFOV_deg") && (E.aspect_id = Fi(E)), Y(), ne(), I && Se();
  }
  function v(F, L) {
    var N, E;
    const I = $() || P();
    !Ht(I) || ((E = (N = u.sidePanel) == null ? void 0 : N.upstream) == null ? void 0 : E.disabled) !== !1 || I[F] === L || (D(), I[F] = L, pe(), ge(), Se(), h(), Y(), b(), ne());
  }
  function B(F, L) {
    var E;
    const I = (E = u.sidePanel) == null ? void 0 : E.upstream;
    if (!I) return !1;
    const N = L ? I.lanes.find((_) => _.name === L && _.action === F) : F === "revert-upstream" ? I.revertAll : null;
    return !!N && !N.disabled;
  }
  function g(F) {
    const L = $() || P();
    Ht(L) && (D(), fe(L, F) && (pe(), ge(), Se(), h(), Y(), b(), ne()));
  }
  async function S(F) {
    var N, E, _, O, Q, me, ye;
    const L = F.target.closest("[data-action]");
    if (!L) return;
    const I = String(L.getAttribute("data-action") || "");
    if (I === "coverage-set") {
      const xe = Vn(L.getAttribute("data-coverage"));
      if (xe === Vn(l.coverage)) return;
      l.coverage = xe, n.coverage = xe, r && (r.value = String(xe)), o ? s.backgroundDirty = !0 : (y(), ee({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), Y(), b(), ne();
      return;
    }
    if (I === "revert-handoff-lane" || I === "revert-upstream") {
      const xe = L.getAttribute("data-lane") || null;
      if (!B(I, xe)) return;
      I === "revert-handoff-lane" ? (D(), ae(xe)) : g(xe);
      return;
    }
    if (I === "upstream-visible" || I === "upstream-locked") {
      v(I === "upstream-visible" ? "visible" : "locked", L.getAttribute("data-value") === "1");
      return;
    }
    if (I === "toggle-selection-picker") {
      if ((E = (N = u.sidePanel) == null ? void 0 : N.selectionPicker) != null && E.disabled) return;
      u.sidePanel.selectionPicker.open = !u.sidePanel.selectionPicker.open;
      return;
    }
    if (I === "select-picker-item") {
      u.sidePanel.selectionPicker.open = !1;
      const xe = String(L.getAttribute("data-selection-id") || "");
      let de = null;
      if (xe && (d === "stickers" ? de = [...ie(), ...c ? l.shots : []].find((we) => String((we == null ? void 0 : we.id) || "") === xe) || null : de = ((_ = T().find((we) => {
        var V;
        return String(((V = we == null ? void 0 : we.item) == null ? void 0 : V.id) || "") === xe;
      })) == null ? void 0 : _.item) || null), A(de || null), de && !ke(de)) {
        const we = he(de);
        U(Kt(Number(we.yaw_deg || 0)), Oe(Number(we.pitch_deg || 0), -89.9, 89.9));
      }
      Y(), b(), ne();
      return;
    }
    if (I === "copy-state-inline") {
      const xe = P(), de = j();
      if (!xe || de === "stroke" || X().length > 1) return;
      const we = JSON.stringify(a && de !== "image" ? p(xe) : w(he(xe)));
      try {
        await navigator.clipboard.writeText(we), (O = u.sidePanel) != null && O.copyStateButton && (u.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var V;
          (V = u.sidePanel) != null && V.copyStateButton && (u.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (I === "set-invert-x") {
      l.ui_settings.invert_view_x = L.getAttribute("data-value") === "1", ve(), Y(), (Q = i.setDirtyCanvas) == null || Q.call(i, !0, !0), ne();
      return;
    }
    if (I === "set-invert-y") {
      l.ui_settings.invert_view_y = L.getAttribute("data-value") === "1", ve(), Y(), (me = i.setDirtyCanvas) == null || me.call(i, !0, !0), ne();
      return;
    }
    if (I === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, ve(), Y(), (ye = i.setDirtyCanvas) == null || ye.call(i, !0, !0), ne();
      return;
    }
    if (I === "close-preview") {
      m();
      return;
    }
    if (I === "cancel-close") {
      m();
      return;
    }
    I === "save-close" && (f(), m());
  }
  function R(F) {
    const L = F.target.closest("[data-action='param-input']");
    L && W(String(L.getAttribute("data-param-key") || ""), L.value, !1);
  }
  function x(F) {
    const L = F.target.closest("[data-action='param-input']");
    L && W(String(L.getAttribute("data-param-key") || ""), L.value, !0);
  }
  return {
    connect(F) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: p,
        buildCanonicalSelectedStickerState: w,
        closeEditor: m,
        commitAndRefreshNode: h,
        commitState: y,
        getActiveCutoutShot: z,
        getCutoutInspectorItems: T,
        getList: ie,
        getSelected: P,
        getSelectedItems: X,
        getSelectedKind: j,
        isItemLocked: J,
        isSceneSticker: _e,
        isStrokeGroupItem: ke,
        markObjectVisualsDirty: ge,
        persistUiSettings: ve,
        poseOf: he,
        pushHistory: Se,
        releaseHiddenSelection: pe,
        requestDraw: ne,
        revertPortHandoffLane: ae,
        revertUpstreamSticker: fe,
        selectedWorldSticker: $,
        setSelectedItem: A,
        stopTimelinePlayback: D,
        syncCoverageChangeToNodePreviews: ee,
        syncCutoutShot: se,
        turnViewTo: U,
        updateSelectionMenu: b,
        updateSidePanel: Y,
        worldStickerEditable: ue,
        writePose: C
      } = F);
    },
    onSidePanelClick: S,
    onSidePanelInput: R,
    onSidePanelChange: x
  };
}
function _C(e) {
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
  let w, m, h, y, z, T, ie, P, X, j, J, _e, ke, ge, ve, he, Se, pe, ne, ae, fe, $, A, D, ee, se, U, b, Y, ue, C, W, v, B, g, S, R, x, F, L, I, N, E, _, O, Q, me, ye, xe, de, we;
  const V = () => {
    if (!t.customPaintSessionStart) return;
    if (_l(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (M2(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const Ce = [
      jn(t.customPaintColor),
      ...t.customPaintHistory.filter((ze) => !_l(ze, t.customPaintColor))
    ];
    t.customPaintHistory = Ce.slice(0, 8), t.customPaintSessionStart = null;
  }, ce = (Ce = !1) => {
    !i || i.hidden || (Ce ? V() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, H = () => {
    i && (i.hidden && (t.customPaintSessionStart = jn(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function Z() {
    F();
  }
  function G(Ce) {
    var ft, yt, Dt, Ct, An;
    if ((yt = (ft = Ce.target) == null ? void 0 : ft.matches) != null && yt.call(ft, "[data-confirm-overlay]")) {
      const qe = (Dt = f.confirmDialog) == null ? void 0 : Dt.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, qe == null || qe(!1);
      return;
    }
    const ze = Ce.target.closest("[data-space-mode]");
    if (ze) {
      B(ze.getAttribute("data-space-mode"));
      return;
    }
    const le = Ce.target.closest("[data-gizmo-mode]");
    if (le) {
      t.gizmoMode = le.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, xe(), b({ localOnly: !0, reason: pt.VIEW });
      return;
    }
    const Ie = Ce.target.closest("[data-view]");
    if (Ie) {
      if (Ie.getAttribute("aria-disabled") === "true") return;
      const qe = t.mode;
      t.mode = String(Ie.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (qe !== "frame" && (c.frameSafeRect = null), de(), xe()), ge(), E(), b();
      return;
    }
    const Ae = Ce.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ae && !a) {
      if (Ae.matches("[data-tool-mode]")) {
        const qe = String(Ae.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = qe, (qe === "paint" || qe === "mask") && X({ preservePanelValues: !0 }), L(), de(), xe(), b();
        return;
      }
      if (Ae.matches("[data-tool-ui-action]")) {
        const qe = String(Ae.getAttribute("data-tool-ui-action") || "");
        if ((qe === "undo" || qe === "redo") && Ae.disabled) return;
        qe === "undo" ? Y(-1) : qe === "redo" ? Y(1) : qe === "clear" ? ie() : qe === "add" || qe === "add-image" ? m() : qe === "add-world" ? y() : qe === "add-or-look" ? w() : qe === "add-camera" && h();
        return;
      }
      if (Ae.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const qe = String(Ae.getAttribute("data-paint-tool") || "pen");
        t.paintTool = qe, X({ preservePanelValues: !0 }), Fn[qe] && (t.activeBrushPresetId = qe), L(), de(), xe(), b();
        return;
      }
      if (Ae.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ae.getAttribute("data-mask-tool") || "pen"), X({ preservePanelValues: !0 }), L(), de(), xe(), b();
        return;
      }
      if (Ae.matches("[data-paint-layer-clear-current]")) {
        const qe = String(Ae.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        P(qe);
        return;
      }
      if (Ae.matches("[data-paint-color-swatch]")) {
        const qe = Xl.find((ln) => ln.id === Ae.getAttribute("data-paint-color-swatch"));
        if (!qe) return;
        t.paintColor = jn(qe.color), ce(!0), L();
        return;
      }
      if (Ae.matches("[data-paint-color-custom]")) {
        Ce.preventDefault(), Ce.stopPropagation(), i && !i.hidden ? ce(!0) : H(), L();
        return;
      }
    }
    const Fe = String(((Ct = Ae == null ? void 0 : Ae.getAttribute) == null ? void 0 : Ct.call(Ae, "data-action")) || "");
    if (Fe === "video-play-toggle") {
      if (Ce.preventDefault(), Ce.stopPropagation(), !(p instanceof HTMLVideoElement)) return;
      we.resumeAfterScrub = !1, _();
      return;
    }
    if (Fe === "video-audio-toggle") {
      Ce.preventDefault(), Ce.stopPropagation(), me(), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (Fe === "video-loop-toggle") {
      if (Ce.preventDefault(), Ce.stopPropagation(), !(p instanceof HTMLVideoElement)) return;
      const qe = !f.videoTransport.loop;
      f.videoTransport.loop = qe, p.loop = qe, N({
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
        const qe = t.mode === "frame" ? he() : null;
        if (!qe || qe.locked === !0) return;
        v(qe, String(Ae.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, I(), ee(), j(), E(), de(), xe(), b();
        return;
      }
      if (Fe === "frame-aspect-custom") {
        const qe = t.mode === "frame" ? he() : null, ln = Ae.getAttribute("data-custom-width"), Bt = Ae.getAttribute("data-custom-height");
        if (!qe || !z(qe, ln, Bt)) return;
        f.frameRail.aspectOpen = !1, I(), ee(), j(), E(), b();
        return;
      }
      if (Fe === "frame-rotate-90") {
        const qe = t.mode === "frame" ? he() : null;
        if (!qe || qe.locked === !0) return;
        C(qe), f.frameRail.aspectOpen = !1, I(), ee(), j(), E(), b();
        return;
      }
      if (Fe === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, xe(), b();
        return;
      }
      if (Fe === "aspect-set") {
        const qe = pe();
        if (!qe) return;
        const ln = String(Ae.getAttribute("data-aspect") || "1:1");
        v(qe, ln), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, I(), ee(), j(), xe(), b();
        return;
      }
      if (Fe === "rotate-90") {
        const qe = pe();
        if (!qe || fe()) return;
        C(qe), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, I(), ee(), j(), xe(), b();
        return;
      }
      if (Fe === "bring-front") {
        T();
        return;
      }
      if (Fe === "send-back") {
        W();
        return;
      }
      if (Fe === "duplicate") {
        ke();
        return;
      }
      if (Fe === "replace-image") {
        U();
        return;
      }
      if (Fe === "toggle-lock") {
        Q();
        return;
      }
      if (Fe === "back-initial") {
        ue();
        return;
      }
      if (Fe === "toggle-visible") {
        O();
        return;
      }
      if (Fe === "delete") {
        _e();
        return;
      }
    }
    if (Fe === "reset-view") {
      if (t.mode === "frame") return;
      ye(
        { position: R(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((An = J()) == null ? void 0 : An.radius) || dr },
        { mode: kl(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (Fe === "frame-view") {
      if (!$() || kl(t.spaceMode, t.viewTransition) !== "6dof") return;
      ve();
      return;
    }
    if (Fe === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, T2(r == null ? void 0 : r.id, t.showGrid), Z(), b();
      return;
    }
    if (Fe === "toggle-fullscreen") {
      Ce.preventDefault(), Ce.stopPropagation(), Ve();
      return;
    }
    if (Fe === "toggle-output-preview-size") {
      Ce.preventDefault(), Ce.stopPropagation();
      const qe = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = qe, x(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = qe ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), Ge(), b();
      return;
    }
    const je = Ce.target.closest("[data-paint-history-index]");
    if (!je) return;
    const He = Number(je.getAttribute("data-paint-history-index")), Ue = t.customPaintHistory[He];
    Ue && (t.customPaintColor = jn(Ue), t.paintColor = jn(Ue), L());
  }
  function q(Ce) {
    const ze = Ce.target.closest("[data-video-seek]");
    if (ze) {
      if (!(p instanceof HTMLVideoElement)) return;
      A.playing && (we.resumeAfterScrub = !0), A.seek(Ni(Number(ze.value || 0), D()));
      return;
    }
    const le = Ce.target.closest("[data-video-volume]");
    if (le) {
      if (!(p instanceof HTMLVideoElement)) return;
      const Fe = Oe(Number(le.value || 0), 0, 1);
      p.volume = Fe, p.muted = Fe <= 1e-4, N({
        hasAudio: f.videoTransport.hasAudio,
        muted: p.muted,
        volume: Fe
      });
      return;
    }
    const Ie = Ce.target.closest("[data-paint-size-slider]");
    if (Ie) {
      if (Ie.disabled) return;
      const Fe = Math.max(1, Math.min(120, Math.round(Number(Ie.value)))), je = Se(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[je] = Fe, L(), g();
      return;
    }
    const Ae = Ce.target.closest("[data-paint-alpha-slider]");
    if (Ae) {
      const Fe = { ...t.customPaintColor, a: Oe(Number(Ae.value) / 100, 0, 1) };
      t.customPaintColor = jn(Fe), t.paintColor = jn(Fe), L();
    }
  }
  function K(Ce) {
    var ze;
    if (Ce.target.closest("[data-video-seek]")) {
      if (!(p instanceof HTMLVideoElement)) return;
      we.resumeAfterScrub && A.play(), we.resumeAfterScrub = !1;
      return;
    }
    if (Ce.target.closest("[data-video-volume]")) {
      typeof ((ze = Ce.target) == null ? void 0 : ze.blur) == "function" && Ce.target.blur();
      return;
    }
    Ce.target.closest("[data-paint-size-slider]") && ne();
  }
  function M(Ce) {
    const ze = Ce.target.closest("[data-tip]");
    !ze || !l.contains(ze) || u.target !== ze && (u.target = ze, u.timer && clearTimeout(u.timer), u.timer = window.setTimeout(() => {
      u.target === ze && S(ze);
    }, 220));
  }
  function te(Ce) {
    var Ie, Ae;
    const ze = Ce.target.closest("[data-tip]");
    !ze || u.target !== ze || (Ce.relatedTarget instanceof Element ? (Ae = (Ie = Ce.relatedTarget).closest) == null ? void 0 : Ae.call(Ie, "[data-tip]") : null) === ze || ae();
  }
  function k(Ce, ze) {
    var He;
    if (!o) return;
    const le = o.getBoundingClientRect(), Ie = Oe((Ce - le.left) / Math.max(1, le.width), 0, 1), Ae = 1 - Oe((ze - le.top) / Math.max(1, le.height), 0, 1), Fe = Lu(t.customPaintColor), je = { ...Ru(Fe.h, Ie, Ae), a: Number(((He = t.customPaintColor) == null ? void 0 : He.a) ?? 1) };
    t.customPaintColor = jn(je), t.paintColor = jn(je), L();
  }
  function oe(Ce) {
    var Fe;
    if (!s) return;
    const ze = s.getBoundingClientRect(), le = Oe((Ce - ze.left) / Math.max(1, ze.width), 0, 1), Ie = Lu(t.customPaintColor), Ae = { ...Ru(le, Ie.s, Ie.v), a: Number(((Fe = t.customPaintColor) == null ? void 0 : Fe.a) ?? 1) };
    t.customPaintColor = jn(Ae), t.paintColor = jn(Ae), L();
  }
  function re(Ce, ze) {
    const le = Ce.pointerId;
    ze(Ce);
    const Ie = (Fe) => {
      Fe.pointerId === le && ze(Fe);
    }, Ae = (Fe) => {
      Fe.pointerId === le && (window.removeEventListener("pointermove", Ie), window.removeEventListener("pointerup", Ae), window.removeEventListener("pointercancel", Ae));
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
    t.fullscreen !== ze && (t.fullscreen = ze, l.classList.toggle("pano-modal-fullscreen", ze), ze ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), Z(), be(), se(), b());
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
        addImageSticker: m,
        addStudioCamera: h,
        addWorldImageSticker: y,
        applyCutoutAspectCustom: z,
        bringSelectedToFront: T,
        clearAll: ie,
        clearPaintingLayer: P,
        clearSelection: X,
        commitAndRefreshNode: j,
        contentSphere: J,
        deleteSelected: _e,
        duplicateSelected: ke,
        forceCursorTool: ge,
        frameSpaceContent: ve,
        getActiveCutoutShot: he,
        getBrushPresetIdForTool: Se,
        getSelected: pe,
        hidePaintSizePreview: ne,
        hideTooltip: ae,
        isErpCamera: fe,
        isFreeSpaceView: $,
        playback: A,
        playbackFps: D,
        pushHistory: ee,
        queueVideoTransportLayout: se,
        replaceSelectedImage: U,
        requestDraw: b,
        restoreHistory: Y,
        restoreSelectedToInitialPose: ue,
        rotateCutoutAspect90: C,
        sendSelectedToBack: W,
        setShotAspect: v,
        setSpaceMode: B,
        showPaintSizePreview: g,
        showTooltipFor: S,
        spaceOrigin: R,
        startAnimation: x,
        syncFloatingViewButtonState: F,
        syncPaintUi: L,
        syncSidePanelControls: I,
        syncVideoTransportState: N,
        syncViewToggleState: E,
        togglePlayback: _,
        toggleSelectedExternalStickerVisibility: O,
        toggleSelectedLock: Q,
        toggleVideoMuted: me,
        transitionView: ye,
        updateSelectionMenu: xe,
        updateSidePanel: de,
        videoState: we
      } = Ce);
    },
    closePaintColorPop: ce,
    syncGridToggleButton: Z,
    onRootClick: G,
    onRootInput: q,
    onRootChange: K,
    onRootPointerOver: M,
    onRootPointerOut: te,
    updatePaintColorFromSv: k,
    updatePaintColorFromHue: oe,
    bindDrag: re,
    syncFullscreenButton: be,
    setFullscreenState: Ne,
    onFullscreenChange: We,
    syncOutputPreviewToggleButton: Ge
  };
}
function wC(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: s
  } = e;
  let a, l, c, d, u, f, p, w, m, h, y, z, T, ie, P, X;
  const j = VA();
  function J(se) {
    var U, b, Y, ue, C;
    if (se.key === "Escape") {
      if (l()) {
        se.preventDefault(), se.stopPropagation(), (U = se.stopImmediatePropagation) == null || U.call(se);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        se.preventDefault(), se.stopPropagation(), (b = se.stopImmediatePropagation) == null || b.call(se), (Y = document.exitFullscreen) == null || Y.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        se.preventDefault(), se.stopPropagation(), (ue = se.stopImmediatePropagation) == null || ue.call(se), z(!1);
        return;
      }
      se.preventDefault(), se.stopPropagation(), (C = se.stopImmediatePropagation) == null || C.call(se), d();
    }
  }
  function _e(se) {
    const U = String(se.key || ""), b = String(se.code || ""), Y = Number(se.keyCode || 0);
    if (!(U === "Delete" || b === "Delete" || Y === 46) && !(U === "Backspace" || b === "Backspace" || Y === 8)) return;
    const W = se.target, v = ((W == null ? void 0 : W.tagName) || "").toUpperCase();
    if (v === "INPUT" || v === "TEXTAREA" || W != null && W.isContentEditable) return;
    if (o.selection) {
      f(), se.preventDefault(), se.stopPropagation();
      return;
    }
    if (p()) {
      se.preventDefault(), se.stopPropagation();
      return;
    }
    h() && (u(), se.preventDefault(), se.stopPropagation());
  }
  function ke(se) {
    if (s.confirmDialog.visible) return !1;
    const U = se.composedPath()[0];
    if (U !== document.body && U !== document.documentElement && !r.contains(U)) return !1;
    const b = ((U == null ? void 0 : U.tagName) || "").toUpperCase();
    return b === "INPUT" ? !a2.has(String(U.type || "text").toLowerCase()) : b !== "TEXTAREA" && b !== "SELECT" && !(U != null && U.isContentEditable);
  }
  function ge(se) {
    return se.code !== "Space" || se.ctrlKey || se.metaKey || se.altKey || n || !i || !s.timeline.visible ? !1 : ke(se);
  }
  function ve(se) {
    ge(se) && (se.preventDefault(), se.stopPropagation(), se.repeat || P());
  }
  function he(se) {
    ge(se) && (se.preventDefault(), se.stopPropagation());
  }
  function Se(se) {
    if (j.modifiers(se), !!W0(se.code)) {
      if (!ke(se)) {
        ne(se.code);
        return;
      }
      se.ctrlKey || se.metaKey || (se.preventDefault(), se.stopPropagation(), a() && (j.press(se.code, se.timeStamp), se.repeat || c(), T(() => {
      })));
    }
  }
  function pe(se) {
    j.modifiers(se), se.key === "Meta" && ae(), ne(se.code) && (se.preventDefault(), se.stopPropagation());
  }
  function ne(se) {
    return j.release(se) ? (j.held || w(), !0) : !1;
  }
  function ae() {
    j.held && (j.releaseAll(), w());
  }
  function fe() {
    document.hidden && ae();
  }
  function $() {
    ae();
  }
  function A(se) {
    const U = !!(se.ctrlKey || se.metaKey), b = !!se.altKey;
    t.marqueeModifier === U && t.altModifier === b || (t.marqueeModifier = U, t.altModifier = b, ie(), X(t.pointerPos));
  }
  function D() {
    ae(), t.marqueeModifier = !1, t.altModifier = !1, ie(), X(t.pointerPos);
  }
  function ee(se) {
    if (n || !se.ctrlKey && !se.metaKey) return;
    const U = String(se.key || "").toLowerCase(), b = String(se.code || "");
    if (U !== "z" && b !== "KeyZ") return;
    const Y = se.target, ue = ((Y == null ? void 0 : Y.tagName) || "").toUpperCase();
    if (ue === "INPUT" || ue === "TEXTAREA" || Y != null && Y.isContentEditable) return;
    const { canUndo: C, canRedo: W } = m();
    se.shiftKey && !W || !se.shiftKey && !C || (y(se.shiftKey ? 1 : -1), se.preventDefault(), se.stopPropagation());
  }
  return {
    connect(se) {
      ({
        canKeyMove: a,
        cancelFrameCameraGesture: l,
        cancelViewTransition: c,
        closeEditor: d,
        deleteSelected: u,
        deleteSelectedKeyframes: f,
        deleteSelectedWorldSticker: p,
        endFrameKeyMove: w,
        getHistoryCapabilities: m,
        getSelected: h,
        restoreHistory: y,
        setFullscreenState: z,
        startAnimation: T,
        syncFrameRollKnob: ie,
        togglePlayback: P,
        updateCursor: X
      } = se);
    },
    moveKeys: j,
    onEscClose: J,
    onDeleteKey: _e,
    onSpaceKey: ve,
    onSpaceKeyUp: he,
    onMoveKeyDown: Se,
    onMoveKeyUp: pe,
    onVisibilityChange: fe,
    onContextMenu: $,
    onModifierKeyChange: A,
    onWindowBlur: D,
    onUndoRedoKey: ee
  };
}
const Up = /* @__PURE__ */ new Map(), ci = Ag({
  app: cr,
  api: hn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Fu,
    markImageFailed: k0,
    markImageLoading: _0,
    markImageReady: w0
  }
});
function Bp(e) {
  if (!Wt(e, "background") || !Wt(e, "external-sticker")) return null;
  const t = ci.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? fi(t[0]) : null;
}
const kC = ci.assetSource, xC = ci.source, MC = ci.uiImage, NC = ci.invalidateUiImage, Yp = ci.loadPreferredExactLinkedImage;
async function PC(e, t, r = {}) {
  var Fo, tf;
  await i0(e, { tolerateOperationFailure: !0 }), ci.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, s = P2(e, t);
  await Gd();
  const a = ga(e, "output_preset"), l = ga(e, "coverage"), c = ga(e, "bg_color"), d = ga(e, s2), u = () => {
    const $e = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Yp(
      e,
      $e,
      () => nt(),
      `background:size:${$e.join("|")}`
    );
  }, f = () => {
    const $e = u();
    return I2($e);
  }, p = ($e = 2048) => {
    const at = a == null ? void 0 : a.value;
    return C2(at) ? f() || Math.max(1, Math.round(Number($e || 2048))) : A2(at, $e);
  }, w = e.__panoSceneStateV2 === !0, m = t === "stickers" && w, h = m && e.__panoStudio === !0, y = h, z = t === "cutout" || h, T = (w ? jm : zm)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: p(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: Vn(l == null ? void 0 : l.value),
    sharedUiSettings: E2(),
    active: Um(e),
    fps: w ? Bp(e) : null
  });
  Kn(e).liveState = T, Kn(e).liveStateVersion = 0;
  let ie = null;
  y ? (ie = T.camera && T.camera.visible !== !1 ? Km(T.camera, 0) : null, T.shots = ie ? [{ ...ie, position: [...ie.position] }] : [], T.active.selected_shot_id = null) : t === "cutout" && (T.shots = Array.isArray(T.shots) ? T.shots.slice(0, 1) : [], T.shots.length || (T.active.selected_shot_id = null));
  const P = t === "cutout" ? (() => {
    var or;
    const $e = Array.isArray(T.shots) ? T.shots : [], at = String(((or = T == null ? void 0 : T.active) == null ? void 0 : or.selected_shot_id) || "");
    return $e.find((cn) => String((cn == null ? void 0 : cn.id) || "") === at) || $e[0] || null;
  })() : null, X = P ? B0(P, !1) : { width: 220, height: 132 }, j = S0(h ? "studio" : t), J = /* @__PURE__ */ _o({
    stageStatus: sr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: (j.viewButtons || []).map(($e) => ({ ...$e, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Fo = j.spaceButtons) != null && Fo.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: j.spaceButtons, frame: j.spaceFrameButton } : null,
    // Only the Stickers editor of state v2 places images in space.
    toolButtons: (j.toolButtons || []).map(($e) => ({
      ...$e,
      disabled: !1,
      ...$e.key === "add-world" ? { visible: m } : {}
    })),
    floatingButtons: [
      ...(j.floatingButtons || []).map(($e) => ({ ...$e, disabled: !1 })),
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
      historyEntries: Array.from({ length: 8 }, ($e, at) => ({ index: at, color: null })),
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
      label: P ? "Loading preview" : "Add Frame to preview"
    }
  }), _e = { frame: /* @__PURE__ */ $a(0), playing: /* @__PURE__ */ $a(!1) }, ke = document.createElement("div");
  document.body.appendChild(ke);
  const ge = ({ intent: $e, file: at } = {}) => {
    if (ar(at)) {
      if ($e === "add") {
        Ee(at);
        return;
      }
      if ($e === "add-world") {
        Ve(at);
        return;
      }
      $e === "replace" && vt(at);
    }
  }, ve = ({ intent: $e } = {}) => {
  }, he = rd(i2, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: s,
    shellPreset: j,
    paintSwatches: Xl.map(($e) => ({
      id: $e.id,
      label: $e.label,
      cssColor: Sr($e.color, 1)
    })),
    uiState: J,
    playhead: _e,
    onClose: () => {
      ir();
    },
    onTimeline: ($e) => ec($e),
    onImageFileSelected: ge,
    onImageFileCancelled: ve
  });
  let Se = null;
  try {
    Se = he.mount(ke);
  } catch ($e) {
    try {
      he.unmount();
    } catch {
    }
    throw ke.remove(), $e;
  }
  const pe = ke.querySelector(".pano-modal-overlay"), ne = ke.querySelector(".pano-modal"), ae = ne == null ? void 0 : ne.querySelector("[data-stage-overlay]"), fe = ne == null ? void 0 : ne.querySelector("[data-stage-background]"), $ = ne == null ? void 0 : ne.querySelector(".pano-stage-wrap"), A = ((tf = Se == null ? void 0 : Se.getPaintOverlayRefs) == null ? void 0 : tf.call(Se)) || {}, D = A.cursor || null, ee = A.sizePreview || null, se = A.sizeSample || null;
  if (!pe || !ne || !ae || !fe || !$ || !D || !ee || !se)
    throw he.unmount(), ke.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const U = ae.getContext("2d"), b = ne.querySelector("[data-side]"), Y = ne.querySelector("[data-video-element]"), ue = ne.querySelector("[data-port-video-element]");
  hc(ae, "editor.stage-overlay"), hc(fe, "editor.stage-background"), zf(Y, "editor.video"), zf(ue, "editor.port-video");
  const C = ne.querySelector(".pano-floating-right"), W = ne.querySelector(".pano-floating-top"), v = ne.querySelector("[data-tool-rail]"), B = ne.querySelector("[data-frame-rail]"), g = ne.querySelector("[data-frame-roll-knob]"), S = ne.querySelector("[data-paint-dock]"), R = ne.querySelector(".pano-video-transport"), x = ne.querySelector("[data-selection-menu]"), F = ne.querySelector("[data-tooltip]"), L = ne.querySelector("[data-camera-preview-host]"), I = ne.querySelector("[data-camera-preview-canvas]");
  hc(I, "editor.camera-preview");
  const N = ne.querySelector("[data-paint-color-row]"), E = ne.querySelector("[data-paint-color-pop]"), _ = ne.querySelector("[data-paint-color-sv]"), O = ne.querySelector("[data-paint-color-sv-cursor]"), Q = ne.querySelector("[data-paint-hue-strip]"), me = ne.querySelector("[data-paint-hue-handle]");
  $ == null || $.removeAttribute("data-stage-ready"), $ == null || $.setAttribute("data-stage-loading-kind", "boot"), ae.style.opacity = "1", fe.style.opacity = "0", i && (b == null || b.remove(), ne.classList.add("pano-modal-readonly")), ne.addEventListener("pointerdown", () => K.wake(), !0), ne.addEventListener("pointerdown", ($e) => {
    var at;
    $e.target.closest("[data-frame-roll-knob]") || An(), !$e.target.closest(".pano-picker") && ($e.target.closest("[data-paint-color-row]") || (ne.querySelectorAll(".pano-picker-pop").forEach((or) => {
      or.hidden = !0;
    }), le(!0), z && xe.cutoutAspectOpen && !$e.target.closest(".pano-aspect-popover") && !$e.target.closest("[data-action='aspect']") && (xe.cutoutAspectOpen = !1, xe.menuMode = "", xe.menuSize.measured = !1, St(), nt()), (at = J.frameRail) != null && at.aspectOpen && !$e.target.closest(".pano-frame-aspect-control") && (J.frameRail.aspectOpen = !1)));
  });
  const xe = {
    mode: "pano",
    selectedId: $0(t, T),
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
    coverage: Vn(T.coverage),
    historyController: sA(T),
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
    showGrid: F2(e == null ? void 0 : e.id, !0),
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
    paintEngine: Ll(),
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
  }, de = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (xe.selectedId = null, T.active.selected_sticker_id = null), xe.selectedIds = xe.selectedId ? [xe.selectedId] : [];
  const we = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Z = on({ label: "editor.still" });
  Z.__panoFrameIdx = 0;
  const G = on({ label: "editor.port-still" });
  G.__panoFrameIdx = 0;
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
  }, K = Lx({
    requestAnimationFrame: ($e) => requestAnimationFrame($e),
    cancelAnimationFrame: ($e) => cancelAnimationFrame($e),
    draw: ($e, at) => Js($e, at),
    animating: () => je()
  }), M = Dx({
    requestFrame: ($e) => K.requestFrame($e),
    cancelFrame: ($e) => K.cancelFrame($e),
    tasks: {
      seek: () => tc.seek(de.scrubFrame),
      timeline: () => qs(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        At(), nt({ localOnly: !0, reason: pt.STATE });
      },
      sidePanel: () => vn()
    }
  }), te = u_({
    canvas: fe,
    onReady: () => {
      Yt(), nt({ reason: pt.CONTEXT });
    },
    onFailed: () => nt(),
    onUpdate: () => nt({ localOnly: !0, reason: pt.MEDIA }),
    onSplats: ($e) => nt({ localOnly: !0, reason: rC($e) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      yt(), Yt(), nt({ reason: pt.CONTEXT });
    }
  }), k = Number.parseFloat(
    getComputedStyle(ne).getPropertyValue("--pano-float-radius")
  ) || 10, oe = ($e) => {
    const at = String($e || "default");
    ae.style.cursor !== at && (ae.style.cursor = at);
  }, re = {
    timer: 0,
    target: null
  }, be = {
    active: !1,
    depth: 0
  }, Ne = ld({
    getView: () => ({ yaw: xe.viewYaw, pitch: xe.viewPitch, fov: xe.viewFov }),
    setView: ($e) => {
      xe.viewYaw = Kt(Number($e.yaw || 0)), xe.viewPitch = Oe(Number($e.pitch || 0), -89.9, 89.9), xe.viewFov = Oe(Number($e.fov || xe.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const $e = ae.getBoundingClientRect();
      return {
        w: Math.max(1, Number($e.width || ae.clientWidth || 0)),
        h: Math.max(1, Number($e.height || ae.clientHeight || 0))
      };
    },
    getInvert: () => {
      var $e, at;
      return {
        x: ($e = T.ui_settings) != null && $e.invert_view_x ? -1 : 1,
        y: (at = T.ui_settings) != null && at.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => Dt(),
    onInteraction: () => K.requestDraw(pt.VIEW)
  }), {
    addImageStickerFromFile: Ee,
    addWorldStickerFromFile: Ve,
    applyInitialCutoutFocus: We,
    applyVideoTimelineFps: Ge,
    bindDrag: Ce,
    cancelFrameCameraGesture: ze,
    closePaintColorPop: le,
    commitState: Ie,
    disposeMediaSession: Ae,
    disposeUpstream: Fe,
    editorAnimating: je,
    endFrameKeyMove: He,
    finishKnobRoll: Ue,
    flushFrameWheelCommit: ft,
    forgetCameraPreviewFrame: yt,
    getUnwrapRect: Dt,
    hidePaintSizePreview: Ct,
    hideTooltip: An,
    hoverWorldGizmo: qe,
    isFreeFrameView: ln,
    isFreeSpaceView: Bt,
    migrateLegacyEmbeddedAssets: gi,
    onCanvasDragOver: Br,
    onCanvasDrop: yi,
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
    onFrameRollKnobPointerDown: Rs,
    onFrameRollKnobPointerMove: Ls,
    onFullscreenChange: Gi,
    onModifierKeyChange: Nt,
    onMoveKeyDown: Un,
    onMoveKeyUp: rr,
    onRootChange: Co,
    onRootClick: $n,
    onRootInput: Vs,
    onRootPointerOut: $s,
    onRootPointerOver: zs,
    onSidePanelChange: qr,
    onSidePanelClick: Ql,
    onSidePanelInput: Xr,
    onSpaceKey: js,
    onSpaceKeyUp: Io,
    onTimelineAction: ec,
    onUndoRedoKey: Eo,
    onVisibilityChange: Oo,
    onWindowBlur: Hs,
    onWindowDragEnter: Gs,
    onWindowDragLeave: Ks,
    onWindowDragOver: Ws,
    onWindowDrop: Us,
    playback: tc,
    pushHistory: De,
    reconcileExternalStickerFromInputs: Te,
    refreshModalVideoSource: Pe,
    replaceSelectedImageFromFile: vt,
    requestDraw: nt,
    restoreView: Pt,
    sampleEditorDiagnostics: Je,
    saveView: et,
    setDropCue: st,
    setPointerPos: zn,
    stageResizeObserver: Xe,
    stickerCornerOrderSanity: Be,
    stopRenderLoop: Qe,
    syncCanvasSize: Yt,
    syncCutoutShot: At,
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
  } = D2({
    api: hn,
    app: cr,
    backgroundCanvas: fe,
    bgWidget: c,
    cameraV2: y,
    canvas: ae,
    closeEditor: ir,
    comfyMedia: ci,
    coverageWidget: l,
    ctx: U,
    cutoutPreviewCanvas: I,
    cutoutPreviewHost: L,
    dragCue: be,
    dragFrames: M,
    editor: xe,
    editorView: te,
    floatingRightEl: C,
    floatingTopEl: W,
    frameGateCssRadius: k,
    frameRailEl: B,
    frameRollKnobEl: g,
    hideSidebar: i,
    imageCache: we,
    initialShotBase: ie,
    loadPreferredExactLinkedImage: Yp,
    mediaAssetSource: kC,
    mediaSource: xC,
    mediaUiImage: MC,
    node: e,
    overlay: pe,
    paintColorPop: E,
    paintColorRow: N,
    paintColorSv: _,
    paintColorSvCursor: O,
    paintCursorEl: D,
    paintDockEl: S,
    paintHueHandle: me,
    paintHueStrip: Q,
    paintSizePreviewEl: ee,
    paintSizePreviewSampleEl: se,
    portStillCanvas: G,
    portVideoEl: ue,
    presetWidget: a,
    previewMode: o,
    rasterErpCanvasCache: H,
    rasterImageAlphaCache: ce,
    rasterImageCache: V,
    readOnly: n,
    resolveEditorOutputPresetWidth: p,
    root: ne,
    runtime: q,
    sceneV2: m,
    scheduler: K,
    selectionMenu: x,
    setCanvasCursor: oe,
    shotEditor: z,
    stageWrap: $,
    state: T,
    stateV2: w,
    stateWidget: d,
    stillCanvas: Z,
    studio: h,
    timeline: de,
    timelinePlayhead: _e,
    toolRailEl: v,
    tooltip: re,
    tooltipEl: F,
    type: t,
    uiState: J,
    videoEl: Y,
    videoTimelineFps: Bp,
    videoTransportEl: R,
    viewController: Ne,
    vueModal: Se
  }, [
    rA,
    aA,
    lA,
    cA,
    uA,
    dA,
    fA,
    pA,
    hA,
    eC,
    tC,
    nC,
    oC,
    sC,
    aC,
    lC,
    cC,
    uC,
    dC,
    fC,
    pC,
    hC,
    mC,
    gC,
    yC,
    bC,
    vC,
    SC,
    _C,
    wC
  ]);
  Be(), Xe.observe(ae), Cn();
  const Rt = () => Ie();
  n || (dl(e).flushBeforeQueue = Rt), g == null || g.addEventListener("pointerdown", Rs), g == null || g.addEventListener("pointermove", Ls), g == null || g.addEventListener("pointerup", Ue), g == null || g.addEventListener("pointercancel", () => ze()), g == null || g.addEventListener("lostpointercapture", () => {
    var $e;
    (($e = xe.interaction) == null ? void 0 : $e.source) === "knob" && ze();
  }), g == null || g.addEventListener("dblclick", Ds), ae.onpointerdown = Yr, ae.onpointermove = hr, ae.onpointerup = nr, ae.onpointercancel = bn, ae.onlostpointercapture = () => {
    ze();
  }, ae.onauxclick = ($e) => {
    $e.button === 1 && $e.preventDefault();
  }, ae.oncontextmenu = ($e) => {
    (Bt() || ln()) && sk(en(), 2) && $e.preventDefault();
  }, ae.onmousemove = sn, ae.onpointerleave = () => {
    xe.interaction || qe({ x: -1e6, y: -1e6 });
  }, ae.onmouseleave = () => {
    zn(xe.pointerPos, !1), ct(xe.pointerPos), xe.mode === "frame" && xe.primaryTool === "cursor" && nt({ localOnly: !0, reason: pt.OVERLAY });
  }, ae.onwheel = Ts, ae.ondragover = Br, ae.ondrop = yi, window.addEventListener("dragenter", Gs, !0), window.addEventListener("dragover", Ws, !0), window.addEventListener("dragleave", Ks, !0), window.addEventListener("drop", Us, !0), b == null || b.addEventListener("click", Ql), b == null || b.addEventListener("input", Xr), b == null || b.addEventListener("change", qr), Ki(), ne.addEventListener("click", $n), ne.addEventListener("input", Vs), ne.addEventListener("change", Co), ne.addEventListener("pointerup", ($e) => {
    var at;
    if ($e.target.closest("[data-video-volume]")) {
      typeof ((at = $e.target) == null ? void 0 : at.blur) == "function" && $e.target.blur();
      return;
    }
    $e.target.closest("[data-paint-size-slider]") && Ct();
  }), ne.addEventListener("pointercancel", ($e) => {
    var at;
    if ($e.target.closest("[data-video-volume]")) {
      typeof ((at = $e.target) == null ? void 0 : at.blur) == "function" && $e.target.blur();
      return;
    }
    $e.target.closest("[data-paint-size-slider]") && Ct();
  }), ne.addEventListener("focusout", ($e) => {
    $e.target.closest("[data-paint-size-slider]") && Ct();
  }), ne.addEventListener("pointerover", zs), ne.addEventListener("pointerout", $s), ne.addEventListener("pointerdown", ($e) => {
    $e.target.closest("[data-frame-roll-knob]") || An();
  }), _ && (_.onpointerdown = ($e) => {
    $e.preventDefault(), $e.stopPropagation(), Ce($e, (at) => gt(at.clientX, at.clientY));
  }), Q && (Q.onpointerdown = ($e) => {
    $e.preventDefault(), $e.stopPropagation(), Ce($e, (at) => ht(at.clientX));
  }), ne.addEventListener("click", ($e) => {
    var bi;
    const at = $e.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!at) return;
    const or = at.getAttribute("data-action") === "confirm-accept", cn = (bi = J.confirmDialog) == null ? void 0 : bi.resolve;
    J.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, cn == null || cn(or);
  }), document.addEventListener("fullscreenchange", Gi), Cr(), Ui();
  const an = e.onConnectionsChange;
  let rn = null, $t = () => {
  };
  !n && t === "stickers" && ($t = n0(e, ($e = "sync") => {
    $e === "executed" && (NC(we, Di), Pe(), m && Ge()), Te($e);
  }, { editor: !0 }), rn = function(...at) {
    typeof an == "function" && an.apply(this, at), Pe(), ii(this, "connections");
  }, e.onConnectionsChange = rn), n || Up.set(String(e.id ?? "0"), () => Ys());
  let Ft = null;
  async function ir() {
    return Ft || (Ft = (async () => {
      var at, or, cn, bi, Jr, Qs, nf, ea, rf;
      Up.delete(String(e.id ?? "0")), ft(), He(), n || Ie(), et(), document.fullscreenElement === pe && ((at = document.exitFullscreen) == null || at.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Gi), Kn(e).liveState = null;
      const $e = x_(e);
      return ($e == null ? void 0 : $e.flushBeforeQueue) === Rt && ($e.flushBeforeQueue = null), (bi = (cn = (or = Ng(e)) == null ? void 0 : or.dom) == null ? void 0 : cn.requestDraw) == null || bi.call(cn), (Qs = (Jr = e.graph) == null ? void 0 : Jr.setDirtyCanvas) == null || Qs.call(Jr, !0, !0), (rf = (ea = (nf = cr) == null ? void 0 : nf.canvas) == null ? void 0 : ea.setDirty) == null || rf.call(ea, !0, !0), An(), M.cancel(), Qe(), Ae(), Fe(), te.dispose(), st(!1), window.removeEventListener("keydown", Ao, !0), window.removeEventListener("keydown", Po, !0), window.removeEventListener("keydown", js, !0), window.removeEventListener("keyup", Io, !0), window.removeEventListener("keydown", Un, !0), window.removeEventListener("keyup", rr, !0), document.removeEventListener("visibilitychange", Oo), window.removeEventListener("contextmenu", Hi, !0), window.removeEventListener("keydown", Nt, !0), window.removeEventListener("keyup", Nt, !0), window.removeEventListener("blur", Hs), window.removeEventListener("keydown", Eo, !0), window.removeEventListener("dragenter", Gs, !0), window.removeEventListener("dragover", Ws, !0), window.removeEventListener("dragleave", Ks, !0), window.removeEventListener("drop", Us, !0), !n && t === "stickers" && (e.onConnectionsChange === rn && (e.onConnectionsChange = an), $t()), he.unmount(), ke.remove(), Zs(), Ft = null, !0;
    })().catch(($e) => (console.error("[PanoramaCutoutSync] closeEditor failed", $e), Ft = null, !1)), Ft);
  }
  window.addEventListener("keydown", Ao, !0), window.addEventListener("keydown", Po, !0), window.addEventListener("keydown", js, !0), window.addEventListener("keyup", Io, !0), window.addEventListener("keydown", Un, !0), window.addEventListener("keyup", rr, !0), document.addEventListener("visibilitychange", Oo), window.addEventListener("contextmenu", Hi, !0), window.addEventListener("keydown", Nt, !0), window.addEventListener("keyup", Nt, !0), window.addEventListener("blur", Hs), window.addEventListener("keydown", Eo, !0), pe.addEventListener("pointerdown", ($e) => {
    $e.target === pe && ir();
  });
  function In($e, at, { rollbackState: or = !1 } = {}) {
    let cn = "";
    try {
      or && (cn = JSON.stringify(T)), at();
    } catch (bi) {
      if (cn)
        try {
          const Jr = JSON.parse(cn);
          Object.keys(T).forEach((Qs) => delete T[Qs]), Object.assign(T, Jr), n || Ie();
        } catch (Jr) {
          console.error(`[PanoramaStickers] editor boot step "${$e}" rollback failed`, Jr);
        }
      J.stageWarningDetail = `boot:${$e}`, console.error(`[PanoramaStickers] editor boot step "${$e}" failed`, bi);
    }
  }
  In("view", Pt), In("cutout-focus", We), !n && t === "stickers" && In("external-sticker-sync", () => Te("open"), { rollbackState: !0 }), gi().catch(($e) => {
    J.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', $e);
  }), In("history", () => De({ initial: !0 })), In("undo-redo", Xs), In("paint-ui", Bs), In("side-panel", vn), In("look-at-frame", Wi), In("video-source", Pe), In("canvas-size", Yt), In("cursor", () => ct(xe.pointerPos)), nt(), Je();
}
cr.registerExtension(gk({
  app: cr,
  openEditor: PC,
  attachStickers: Fx,
  attachCutout: Tx,
  attachPreview: Ox,
  restoreOutput: vx,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: u2
}));
