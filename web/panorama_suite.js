import * as xs from "../../scripts/app.js";
import { app as ir } from "../../scripts/app.js";
import { api as fn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Xu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ft = {}, mo = [], wr = () => {
}, pm = () => !1, wl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), xl = (e) => e.startsWith("onUpdate:"), gn = Object.assign, Ju = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, q1 = Object.prototype.hasOwnProperty, Mt = (e, t) => q1.call(e, t), st = Array.isArray, go = (e) => za(e) === "[object Map]", hm = (e) => za(e) === "[object Set]", wp = (e) => za(e) === "[object Date]", ut = (e) => typeof e == "function", Jt = (e) => typeof e == "string", Pr = (e) => typeof e == "symbol", Et = (e) => e !== null && typeof e == "object", mm = (e) => (Et(e) || ut(e)) && ut(e.then) && ut(e.catch), gm = Object.prototype.toString, za = (e) => gm.call(e), X1 = (e) => za(e).slice(8, -1), ym = (e) => za(e) === "[object Object]", Zu = (e) => Jt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, pa = /* @__PURE__ */ Xu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), kl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, J1 = /-\w/g, wn = kl(
  (e) => e.replace(J1, (t) => t.slice(1).toUpperCase())
), Z1 = /\B([A-Z])/g, $i = kl(
  (e) => e.replace(Z1, "-$1").toLowerCase()
), Ml = kl((e) => e.charAt(0).toUpperCase() + e.slice(1)), mc = kl(
  (e) => e ? `on${Ml(e)}` : ""
), _r = (e, t) => !Object.is(e, t), ks = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, bm = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Qu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let xp;
const Pl = () => xp || (xp = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function It(e) {
  if (st(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = Jt(r) ? nv(r) : It(r);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Jt(e) || Et(e))
    return e;
}
const Q1 = /;(?![^(]*\))/g, ev = /:([^]+)/, tv = /\/\*[^]*?\*\//g;
function nv(e) {
  const t = {};
  return e.replace(tv, "").split(Q1).forEach((n) => {
    if (n) {
      const r = n.split(ev);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ht(e) {
  let t = "";
  if (Jt(e))
    t = e;
  else if (st(e))
    for (let n = 0; n < e.length; n++) {
      const r = ht(e[n]);
      r && (t += r + " ");
    }
  else if (Et(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const rv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", iv = /* @__PURE__ */ Xu(rv);
function vm(e) {
  return !!e || e === "";
}
function ov(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = ed(e[r], t[r]);
  return n;
}
function ed(e, t) {
  if (e === t) return !0;
  let n = wp(e), r = wp(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Pr(e), r = Pr(t), n || r)
    return e === t;
  if (n = st(e), r = st(t), n || r)
    return n && r ? ov(e, t) : !1;
  if (n = Et(e), r = Et(t), n || r) {
    if (!n || !r)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const a in e) {
      const s = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (s && !l || !s && l || !ed(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const _m = (e) => !!(e && e.__v_isRef === !0), ct = (e) => Jt(e) ? e : e == null ? "" : st(e) || Et(e) && (e.toString === gm || !ut(e.toString)) ? _m(e) ? ct(e.value) : JSON.stringify(e, Sm, 2) : String(e), Sm = (e, t) => _m(t) ? Sm(e, t.value) : go(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], o) => (n[gc(r, o) + " =>"] = i, n),
    {}
  )
} : hm(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => gc(n))
} : Pr(t) ? gc(t) : Et(t) && !st(t) && !ym(t) ? String(t) : t, gc = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Pr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Pn;
class av {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Pn, !t && Pn && (this.index = (Pn.scopes || (Pn.scopes = [])).push(
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
      const n = Pn;
      try {
        return Pn = this, t();
      } finally {
        Pn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Pn, Pn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Pn = this.prevScope, this.prevScope = void 0);
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
function sv() {
  return Pn;
}
let Dt;
const yc = /* @__PURE__ */ new WeakSet();
class wm {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Pn && Pn.active && Pn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, yc.has(this) && (yc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || km(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, kp(this), Mm(this);
    const t = Dt, n = or;
    Dt = this, or = !0;
    try {
      return this.fn();
    } finally {
      Pm(this), Dt = t, or = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        rd(t);
      this.deps = this.depsTail = void 0, kp(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? yc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    nu(this) && this.run();
  }
  get dirty() {
    return nu(this);
  }
}
let xm = 0, ha, ma;
function km(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ma, ma = e;
    return;
  }
  e.next = ha, ha = e;
}
function td() {
  xm++;
}
function nd() {
  if (--xm > 0)
    return;
  if (ma) {
    let t = ma;
    for (ma = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; ha; ) {
    let t = ha;
    for (ha = void 0; t; ) {
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
function Mm(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Pm(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), rd(r), lv(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function nu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Nm(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Nm(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ka) || (e.globalVersion = ka, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !nu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Dt, r = or;
  Dt = e, or = !0;
  try {
    Mm(e);
    const i = e.fn(e._value);
    (t.version === 0 || _r(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Dt = n, or = r, Pm(e), e.flags &= -3;
  }
}
function rd(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      rd(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function lv(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let or = !0;
const Am = [];
function Wr() {
  Am.push(or), or = !1;
}
function Kr() {
  const e = Am.pop();
  or = e === void 0 ? !0 : e;
}
function kp(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Dt;
    Dt = void 0;
    try {
      t();
    } finally {
      Dt = n;
    }
  }
}
let ka = 0;
class cv {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class id {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Dt || !or || Dt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Dt)
      n = this.activeLink = new cv(Dt, this), Dt.deps ? (n.prevDep = Dt.depsTail, Dt.depsTail.nextDep = n, Dt.depsTail = n) : Dt.deps = Dt.depsTail = n, Cm(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Dt.depsTail, n.nextDep = void 0, Dt.depsTail.nextDep = n, Dt.depsTail = n, Dt.deps === n && (Dt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, ka++, this.notify(t);
  }
  notify(t) {
    td();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      nd();
    }
  }
}
function Cm(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Cm(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ru = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ Symbol(
  ""
), iu = /* @__PURE__ */ Symbol(
  ""
), Ma = /* @__PURE__ */ Symbol(
  ""
);
function un(e, t, n) {
  if (or && Dt) {
    let r = ru.get(e);
    r || ru.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new id()), i.map = r, i.key = n), i.track();
  }
}
function Vr(e, t, n, r, i, o) {
  const a = ru.get(e);
  if (!a) {
    ka++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (td(), t === "clear")
    a.forEach(s);
  else {
    const l = st(e), d = l && Zu(n);
    if (l && n === "length") {
      const u = Number(r);
      a.forEach((f, h) => {
        (h === "length" || h === Ma || !Pr(h) && h >= u) && s(f);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && s(a.get(n)), d && s(a.get(Ma)), t) {
        case "add":
          l ? d && s(a.get("length")) : (s(a.get(Ei)), go(e) && s(a.get(iu)));
          break;
        case "delete":
          l || (s(a.get(Ei)), go(e) && s(a.get(iu)));
          break;
        case "set":
          go(e) && s(a.get(Ei));
          break;
      }
  }
  nd();
}
function no(e) {
  const t = /* @__PURE__ */ kt(e);
  return t === e ? t : (un(t, "iterate", Ma), /* @__PURE__ */ Bn(e) ? t : t.map(lr));
}
function Nl(e) {
  return un(e = /* @__PURE__ */ kt(e), "iterate", Ma), e;
}
function br(e, t) {
  return /* @__PURE__ */ Br(e) ? Po(/* @__PURE__ */ Oi(e) ? lr(t) : t) : lr(t);
}
const uv = {
  __proto__: null,
  [Symbol.iterator]() {
    return bc(this, Symbol.iterator, (e) => br(this, e));
  },
  concat(...e) {
    return no(this).concat(
      ...e.map((t) => st(t) ? no(t) : t)
    );
  },
  entries() {
    return bc(this, "entries", (e) => (e[1] = br(this, e[1]), e));
  },
  every(e, t) {
    return Or(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Or(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => br(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Or(
      this,
      "find",
      e,
      t,
      (n) => br(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Or(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Or(
      this,
      "findLast",
      e,
      t,
      (n) => br(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Or(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Or(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return vc(this, "includes", e);
  },
  indexOf(...e) {
    return vc(this, "indexOf", e);
  },
  join(e) {
    return no(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return vc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Or(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Xo(this, "pop");
  },
  push(...e) {
    return Xo(this, "push", e);
  },
  reduce(e, ...t) {
    return Mp(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Mp(this, "reduceRight", e, t);
  },
  shift() {
    return Xo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Or(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Xo(this, "splice", e);
  },
  toReversed() {
    return no(this).toReversed();
  },
  toSorted(e) {
    return no(this).toSorted(e);
  },
  toSpliced(...e) {
    return no(this).toSpliced(...e);
  },
  unshift(...e) {
    return Xo(this, "unshift", e);
  },
  values() {
    return bc(this, "values", (e) => br(this, e));
  }
};
function bc(e, t, n) {
  const r = Nl(e), i = r[t]();
  return r !== e && !/* @__PURE__ */ Bn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const dv = Array.prototype;
function Or(e, t, n, r, i, o) {
  const a = Nl(e), s = a !== e && !/* @__PURE__ */ Bn(e), l = a[t];
  if (l !== dv[t]) {
    const f = l.apply(e, o);
    return s ? lr(f) : f;
  }
  let d = n;
  a !== e && (s ? d = function(f, h) {
    return n.call(this, br(e, f), h, e);
  } : n.length > 2 && (d = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const u = l.call(a, d, r);
  return s && i ? i(u) : u;
}
function Mp(e, t, n, r) {
  const i = Nl(e), o = i !== e && !/* @__PURE__ */ Bn(e);
  let a = n, s = !1;
  i !== e && (o ? (s = r.length === 0, a = function(d, u, f) {
    return s && (s = !1, d = br(e, d)), n.call(this, d, br(e, u), f, e);
  }) : n.length > 3 && (a = function(d, u, f) {
    return n.call(this, d, u, f, e);
  }));
  const l = i[t](a, ...r);
  return s ? br(e, l) : l;
}
function vc(e, t, n) {
  const r = /* @__PURE__ */ kt(e);
  un(r, "iterate", Ma);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ sd(n[0]) ? (n[0] = /* @__PURE__ */ kt(n[0]), r[t](...n)) : i;
}
function Xo(e, t, n = []) {
  Wr(), td();
  const r = (/* @__PURE__ */ kt(e))[t].apply(e, n);
  return nd(), Kr(), r;
}
const fv = /* @__PURE__ */ Xu("__proto__,__v_isRef,__isVue"), Im = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pr)
);
function pv(e) {
  Pr(e) || (e = String(e));
  const t = /* @__PURE__ */ kt(this);
  return un(t, "has", e), t.hasOwnProperty(e);
}
class Em {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (i ? o ? xv : Dm : o ? Tm : Fm).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const a = st(t);
    if (!i) {
      let l;
      if (a && (l = uv[n]))
        return l;
      if (n === "hasOwnProperty")
        return pv;
    }
    const s = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ hn(t) ? t : r
    );
    if ((Pr(n) ? Im.has(n) : fv(n)) || (i || un(t, "get", n), o))
      return s;
    if (/* @__PURE__ */ hn(s)) {
      const l = a && Zu(n) ? s : s.value;
      return i && Et(l) ? /* @__PURE__ */ au(l) : l;
    }
    return Et(s) ? i ? /* @__PURE__ */ au(s) : /* @__PURE__ */ Eo(s) : s;
  }
}
class Om extends Em {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let o = t[n];
    const a = st(t) && Zu(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ Br(o);
      if (!/* @__PURE__ */ Bn(r) && !/* @__PURE__ */ Br(r) && (o = /* @__PURE__ */ kt(o), r = /* @__PURE__ */ kt(r)), !a && /* @__PURE__ */ hn(o) && !/* @__PURE__ */ hn(r))
        return d || (o.value = r), !0;
    }
    const s = a ? Number(n) < t.length : Mt(t, n), l = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ hn(t) ? t : i
    );
    return t === /* @__PURE__ */ kt(i) && (s ? _r(r, o) && Vr(t, "set", n, r) : Vr(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = Mt(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && Vr(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Pr(n) || !Im.has(n)) && un(t, "has", n), r;
  }
  ownKeys(t) {
    return un(
      t,
      "iterate",
      st(t) ? "length" : Ei
    ), Reflect.ownKeys(t);
  }
}
class hv extends Em {
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
const mv = /* @__PURE__ */ new Om(), gv = /* @__PURE__ */ new hv(), yv = /* @__PURE__ */ new Om(!0);
const ou = (e) => e, as = (e) => Reflect.getPrototypeOf(e);
function bv(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, o = /* @__PURE__ */ kt(i), a = go(o), s = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, d = i[e](...r), u = n ? ou : t ? Po : lr;
    return !t && un(
      o,
      "iterate",
      l ? iu : Ei
    ), gn(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: f, done: h } = d.next();
          return h ? { value: f, done: h } : {
            value: s ? [u(f[0]), u(f[1])] : u(f),
            done: h
          };
        }
      }
    );
  };
}
function ss(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function vv(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ kt(o), s = /* @__PURE__ */ kt(i);
      e || (_r(i, s) && un(a, "get", i), un(a, "get", s));
      const { has: l } = as(a), d = t ? ou : e ? Po : lr;
      if (l.call(a, i))
        return d(o.get(i));
      if (l.call(a, s))
        return d(o.get(s));
      o !== a && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && un(/* @__PURE__ */ kt(i), "iterate", Ei), i.size;
    },
    has(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ kt(o), s = /* @__PURE__ */ kt(i);
      return e || (_r(i, s) && un(a, "has", i), un(a, "has", s)), i === s ? o.has(i) : o.has(i) || o.has(s);
    },
    forEach(i, o) {
      const a = this, s = a.__v_raw, l = /* @__PURE__ */ kt(s), d = t ? ou : e ? Po : lr;
      return !e && un(l, "iterate", Ei), s.forEach((u, f) => i.call(o, d(u), d(f), a));
    }
  };
  return gn(
    n,
    e ? {
      add: ss("add"),
      set: ss("set"),
      delete: ss("delete"),
      clear: ss("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ kt(this), a = as(o), s = /* @__PURE__ */ kt(i), l = !t && !/* @__PURE__ */ Bn(i) && !/* @__PURE__ */ Br(i) ? s : i;
        return a.has.call(o, l) || _r(i, l) && a.has.call(o, i) || _r(s, l) && a.has.call(o, s) || (o.add(l), Vr(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Bn(o) && !/* @__PURE__ */ Br(o) && (o = /* @__PURE__ */ kt(o));
        const a = /* @__PURE__ */ kt(this), { has: s, get: l } = as(a);
        let d = s.call(a, i);
        d || (i = /* @__PURE__ */ kt(i), d = s.call(a, i));
        const u = l.call(a, i);
        return a.set(i, o), d ? _r(o, u) && Vr(a, "set", i, o) : Vr(a, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ kt(this), { has: a, get: s } = as(o);
        let l = a.call(o, i);
        l || (i = /* @__PURE__ */ kt(i), l = a.call(o, i)), s && s.call(o, i);
        const d = o.delete(i);
        return l && Vr(o, "delete", i, void 0), d;
      },
      clear() {
        const i = /* @__PURE__ */ kt(this), o = i.size !== 0, a = i.clear();
        return o && Vr(
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
    n[i] = bv(i, e, t);
  }), n;
}
function od(e, t) {
  const n = vv(e, t);
  return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    Mt(n, i) && i in r ? n : r,
    i,
    o
  );
}
const _v = {
  get: /* @__PURE__ */ od(!1, !1)
}, Sv = {
  get: /* @__PURE__ */ od(!1, !0)
}, wv = {
  get: /* @__PURE__ */ od(!0, !1)
};
const Fm = /* @__PURE__ */ new WeakMap(), Tm = /* @__PURE__ */ new WeakMap(), Dm = /* @__PURE__ */ new WeakMap(), xv = /* @__PURE__ */ new WeakMap();
function kv(e) {
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
function Mv(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : kv(X1(e));
}
// @__NO_SIDE_EFFECTS__
function Eo(e) {
  return /* @__PURE__ */ Br(e) ? e : ad(
    e,
    !1,
    mv,
    _v,
    Fm
  );
}
// @__NO_SIDE_EFFECTS__
function Pv(e) {
  return ad(
    e,
    !1,
    yv,
    Sv,
    Tm
  );
}
// @__NO_SIDE_EFFECTS__
function au(e) {
  return ad(
    e,
    !0,
    gv,
    wv,
    Dm
  );
}
function ad(e, t, n, r, i) {
  if (!Et(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = Mv(e);
  if (o === 0)
    return e;
  const a = i.get(e);
  if (a)
    return a;
  const s = new Proxy(
    e,
    o === 2 ? r : n
  );
  return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Oi(e) {
  return /* @__PURE__ */ Br(e) ? /* @__PURE__ */ Oi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Br(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Bn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function sd(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ kt(t) : e;
}
function Nv(e) {
  return !Mt(e, "__v_skip") && Object.isExtensible(e) && bm(e, "__v_skip", !0), e;
}
const lr = (e) => Et(e) ? /* @__PURE__ */ Eo(e) : e, Po = (e) => Et(e) ? /* @__PURE__ */ au(e) : e;
// @__NO_SIDE_EFFECTS__
function hn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  return Lm(e, !1);
}
// @__NO_SIDE_EFFECTS__
function js(e) {
  return Lm(e, !0);
}
function Lm(e, t) {
  return /* @__PURE__ */ hn(e) ? e : new Av(e, t);
}
class Av {
  constructor(t, n) {
    this.dep = new id(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ kt(t), this._value = n ? t : lr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ Bn(t) || /* @__PURE__ */ Br(t);
    t = r ? t : /* @__PURE__ */ kt(t), _r(t, n) && (this._rawValue = t, this._value = r ? t : lr(t), this.dep.trigger());
  }
}
function at(e) {
  return /* @__PURE__ */ hn(e) ? e.value : e;
}
const Cv = {
  get: (e, t, n) => t === "__v_raw" ? e : at(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ hn(i) && !/* @__PURE__ */ hn(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Rm(e) {
  return /* @__PURE__ */ Oi(e) ? e : new Proxy(e, Cv);
}
class Iv {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new id(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ka - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Dt !== this)
      return km(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Nm(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ev(e, t, n = !1) {
  let r, i;
  return ut(e) ? r = e : (r = e.get, i = e.set), new Iv(r, i, n);
}
const ls = {}, Hs = /* @__PURE__ */ new WeakMap();
let ki;
function Ov(e, t = !1, n = ki) {
  if (n) {
    let r = Hs.get(n);
    r || Hs.set(n, r = []), r.push(e);
  }
}
function Fv(e, t, n = Ft) {
  const { immediate: r, deep: i, once: o, scheduler: a, augmentJob: s, call: l } = n, d = (O) => i ? O : /* @__PURE__ */ Bn(O) || i === !1 || i === 0 ? $r(O, 1) : $r(O);
  let u, f, h, g, b = !1, _ = !1;
  if (/* @__PURE__ */ hn(e) ? (f = () => e.value, b = /* @__PURE__ */ Bn(e)) : /* @__PURE__ */ Oi(e) ? (f = () => d(e), b = !0) : st(e) ? (_ = !0, b = e.some((O) => /* @__PURE__ */ Oi(O) || /* @__PURE__ */ Bn(O)), f = () => e.map((O) => {
    if (/* @__PURE__ */ hn(O))
      return O.value;
    if (/* @__PURE__ */ Oi(O))
      return d(O);
    if (ut(O))
      return l ? l(O, 2) : O();
  })) : ut(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (h) {
      Wr();
      try {
        h();
      } finally {
        Kr();
      }
    }
    const O = ki;
    ki = u;
    try {
      return l ? l(e, 3, [g]) : e(g);
    } finally {
      ki = O;
    }
  } : f = wr, t && i) {
    const O = f, S = i === !0 ? 1 / 0 : i;
    f = () => $r(O(), S);
  }
  const v = sv(), P = () => {
    u.stop(), v && v.active && Ju(v.effects, u);
  };
  if (o && t) {
    const O = t;
    t = (...S) => {
      O(...S), P();
    };
  }
  let W = _ ? new Array(e.length).fill(ls) : ls;
  const D = (O) => {
    if (!(!(u.flags & 1) || !u.dirty && !O))
      if (t) {
        const S = u.run();
        if (i || b || (_ ? S.some(($, z) => _r($, W[z])) : _r(S, W))) {
          h && h();
          const $ = ki;
          ki = u;
          try {
            const z = [
              S,
              // pass undefined as the old value when it's changed for the first time
              W === ls ? void 0 : _ && W[0] === ls ? [] : W,
              g
            ];
            W = S, l ? l(t, 3, z) : (
              // @ts-expect-error
              t(...z)
            );
          } finally {
            ki = $;
          }
        }
      } else
        u.run();
  };
  return s && s(D), u = new wm(f), u.scheduler = a ? () => a(D, !1) : D, g = (O) => Ov(O, !1, u), h = u.onStop = () => {
    const O = Hs.get(u);
    if (O) {
      if (l)
        l(O, 4);
      else
        for (const S of O) S();
      Hs.delete(u);
    }
  }, t ? r ? D(!0) : W = u.run() : a ? a(D.bind(null, !0), !0) : u.run(), P.pause = u.pause.bind(u), P.resume = u.resume.bind(u), P.stop = P, P;
}
function $r(e, t = 1 / 0, n) {
  if (t <= 0 || !Et(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ hn(e))
    $r(e.value, t, n);
  else if (st(e))
    for (let r = 0; r < e.length; r++)
      $r(e[r], t, n);
  else if (hm(e) || go(e))
    e.forEach((r) => {
      $r(r, t, n);
    });
  else if (ym(e)) {
    for (const r in e)
      $r(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && $r(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ja(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    Al(i, t, n);
  }
}
function Nr(e, t, n, r) {
  if (ut(e)) {
    const i = ja(e, t, n, r);
    return i && mm(i) && i.catch((o) => {
      Al(o, t, n);
    }), i;
  }
  if (st(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Nr(e[o], t, n, r));
    return i;
  }
}
function Al(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: a } = t && t.appContext.config || Ft;
  if (t) {
    let s = t.parent;
    const l = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](e, l, d) === !1)
            return;
      }
      s = s.parent;
    }
    if (o) {
      Wr(), ja(o, null, 10, [
        e,
        l,
        d
      ]), Kr();
      return;
    }
  }
  Tv(e, n, i, r, a);
}
function Tv(e, t, n, r = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Sn = [];
let yr = -1;
const yo = [];
let ti = null, oo = 0;
const Vm = /* @__PURE__ */ Promise.resolve();
let Gs = null;
function Cl(e) {
  const t = Gs || Vm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Dv(e) {
  let t = yr + 1, n = Sn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = Sn[r], o = Pa(i);
    o < e || o === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function ld(e) {
  if (!(e.flags & 1)) {
    const t = Pa(e), n = Sn[Sn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Pa(n) ? Sn.push(e) : Sn.splice(Dv(t), 0, e), e.flags |= 1, $m();
  }
}
function $m() {
  Gs || (Gs = Vm.then(jm));
}
function Lv(e) {
  st(e) ? yo.push(...e) : ti && e.id === -1 ? ti.splice(oo + 1, 0, e) : e.flags & 1 || (yo.push(e), e.flags |= 1), $m();
}
function Pp(e, t, n = yr + 1) {
  for (; n < Sn.length; n++) {
    const r = Sn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Sn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function zm(e) {
  if (yo.length) {
    const t = [...new Set(yo)].sort(
      (n, r) => Pa(n) - Pa(r)
    );
    if (yo.length = 0, ti) {
      ti.push(...t);
      return;
    }
    for (ti = t, oo = 0; oo < ti.length; oo++) {
      const n = ti[oo];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ti = null, oo = 0;
  }
}
const Pa = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function jm(e) {
  try {
    for (yr = 0; yr < Sn.length; yr++) {
      const t = Sn[yr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ja(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; yr < Sn.length; yr++) {
      const t = Sn[yr];
      t && (t.flags &= -2);
    }
    yr = -1, Sn.length = 0, zm(), Gs = null, (Sn.length || yo.length) && jm();
  }
}
let Ln = null, Hm = null;
function Ws(e) {
  const t = Ln;
  return Ln = e, Hm = e && e.type.__scopeId || null, t;
}
function Gm(e, t = Ln, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && Vp(-1);
    const o = Ws(t);
    let a;
    try {
      a = e(...i);
    } finally {
      Ws(o), r._d && Vp(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Hr(e, t) {
  if (Ln === null)
    return e;
  const n = Tl(Ln), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, a, s, l = Ft] = t[i];
    o && (ut(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && $r(a), r.push({
      dir: o,
      instance: n,
      value: a,
      oldValue: void 0,
      arg: s,
      modifiers: l
    }));
  }
  return e;
}
function bi(e, t, n, r) {
  const i = e.dirs, o = t && t.dirs;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    o && (s.oldValue = o[a].value);
    let l = s.dir[r];
    l && (Wr(), Nr(l, n, 8, [
      e.el,
      s,
      e,
      t
    ]), Kr());
  }
}
function Rv(e, t) {
  if (dn) {
    let n = dn.provides;
    const r = dn.parent && dn.parent.provides;
    r === n && (n = dn.provides = Object.create(r)), n[e] = t;
  }
}
function Ms(e, t, n = !1) {
  const r = D_();
  if (r || bo) {
    let i = bo ? bo._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && ut(t) ? t.call(r && r.proxy) : t;
  }
}
const Vv = /* @__PURE__ */ Symbol.for("v-scx"), $v = () => Ms(Vv);
function Fi(e, t, n) {
  return Wm(e, t, n);
}
function Wm(e, t, n = Ft) {
  const { immediate: r, deep: i, flush: o, once: a } = n, s = gn({}, n), l = t && r || !t && o !== "post";
  let d;
  if (Aa) {
    if (o === "sync") {
      const g = $v();
      d = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!l) {
      const g = () => {
      };
      return g.stop = wr, g.resume = wr, g.pause = wr, g;
    }
  }
  const u = dn;
  s.call = (g, b, _) => Nr(g, u, b, _);
  let f = !1;
  o === "post" ? s.scheduler = (g) => {
    Mn(g, u && u.suspense);
  } : o !== "sync" && (f = !0, s.scheduler = (g, b) => {
    b ? g() : ld(g);
  }), s.augmentJob = (g) => {
    t && (g.flags |= 4), f && (g.flags |= 2, u && (g.id = u.uid, g.i = u));
  };
  const h = Fv(e, t, s);
  return Aa && (d ? d.push(h) : l && h()), h;
}
function zv(e, t, n) {
  const r = this.proxy, i = Jt(e) ? e.includes(".") ? Km(r, e) : () => r[e] : e.bind(r, r);
  let o;
  ut(t) ? o = t : (o = t.handler, n = t);
  const a = Ga(this), s = Wm(i, o.bind(r), n);
  return a(), s;
}
function Km(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const jv = /* @__PURE__ */ Symbol("_vte"), Hv = (e) => e.__isTeleport, Gv = /* @__PURE__ */ Symbol("_leaveCb");
function cd(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, cd(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Bm(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Np(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ks = /* @__PURE__ */ new WeakMap();
function ga(e, t, n, r, i = !1) {
  if (st(e)) {
    e.forEach(
      (_, v) => ga(
        _,
        t && (st(t) ? t[v] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (ya(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ga(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? Tl(r.component) : r.el, a = i ? null : o, { i: s, r: l } = e, d = t && t.r, u = s.refs === Ft ? s.refs = {} : s.refs, f = s.setupState, h = /* @__PURE__ */ kt(f), g = f === Ft ? pm : (_) => Np(u, _) ? !1 : Mt(h, _), b = (_, v) => !(v && Np(u, v));
  if (d != null && d !== l) {
    if (Ap(t), Jt(d))
      u[d] = null, g(d) && (f[d] = null);
    else if (/* @__PURE__ */ hn(d)) {
      const _ = t;
      b(d, _.k) && (d.value = null), _.k && (u[_.k] = null);
    }
  }
  if (ut(l))
    ja(l, s, 12, [a, u]);
  else {
    const _ = Jt(l), v = /* @__PURE__ */ hn(l);
    if (_ || v) {
      const P = () => {
        if (e.f) {
          const W = _ ? g(l) ? f[l] : u[l] : b() || !e.k ? l.value : u[e.k];
          if (i)
            st(W) && Ju(W, o);
          else if (st(W))
            W.includes(o) || W.push(o);
          else if (_)
            u[l] = [o], g(l) && (f[l] = u[l]);
          else {
            const D = [o];
            b(l, e.k) && (l.value = D), e.k && (u[e.k] = D);
          }
        } else _ ? (u[l] = a, g(l) && (f[l] = a)) : v && (b(l, e.k) && (l.value = a), e.k && (u[e.k] = a));
      };
      if (a) {
        const W = () => {
          P(), Ks.delete(e);
        };
        W.id = -1, Ks.set(e, W), Mn(W, n);
      } else
        Ap(e), P();
    }
  }
}
function Ap(e) {
  const t = Ks.get(e);
  t && (t.flags |= 8, Ks.delete(e));
}
Pl().requestIdleCallback;
Pl().cancelIdleCallback;
const ya = (e) => !!e.type.__asyncLoader, Um = (e) => e.type.__isKeepAlive;
function Wv(e, t) {
  Ym(e, "a", t);
}
function Kv(e, t) {
  Ym(e, "da", t);
}
function Ym(e, t, n = dn) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Il(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Um(i.parent.vnode) && Bv(r, t, n, i), i = i.parent;
  }
}
function Bv(e, t, n, r) {
  const i = Il(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  qm(() => {
    Ju(r[t], i);
  }, n);
}
function Il(e, t, n = dn, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...a) => {
      Wr();
      const s = Ga(n), l = Nr(t, n, e, a);
      return s(), Kr(), l;
    });
    return r ? i.unshift(o) : i.push(o), o;
  }
}
const Ur = (e) => (t, n = dn) => {
  (!Aa || e === "sp") && Il(e, (...r) => t(...r), n);
}, Uv = Ur("bm"), El = Ur("m"), Yv = Ur(
  "bu"
), qv = Ur("u"), Ha = Ur(
  "bum"
), qm = Ur("um"), Xv = Ur(
  "sp"
), Jv = Ur("rtg"), Zv = Ur("rtc");
function Qv(e, t = dn) {
  Il("ec", e, t);
}
const e_ = "components", Xm = /* @__PURE__ */ Symbol.for("v-ndc");
function t_(e) {
  return Jt(e) ? n_(e_, e, !1) || e : e || Xm;
}
function n_(e, t, n = !0, r = !1) {
  const i = Ln || dn;
  if (i) {
    const o = i.type;
    {
      const s = z_(
        o,
        !1
      );
      if (s && (s === t || s === wn(t) || s === Ml(wn(t))))
        return o;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Cp(i[e] || o[e], t) || // global registration
      Cp(i.appContext[e], t)
    );
    return !a && r ? o : a;
  }
}
function Cp(e, t) {
  return e && (e[t] || e[wn(t)] || e[Ml(wn(t))]);
}
function At(e, t, n, r) {
  let i;
  const o = n, a = st(e);
  if (a || Jt(e)) {
    const s = a && /* @__PURE__ */ Oi(e);
    let l = !1, d = !1;
    s && (l = !/* @__PURE__ */ Bn(e), d = /* @__PURE__ */ Br(e), e = Nl(e)), i = new Array(e.length);
    for (let u = 0, f = e.length; u < f; u++)
      i[u] = t(
        l ? d ? Po(lr(e[u])) : lr(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let s = 0; s < e; s++)
      i[s] = t(s + 1, s, void 0, o);
  } else if (Et(e))
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
const su = (e) => e ? yg(e) ? Tl(e) : su(e.parent) : null, ba = (
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
    $parent: (e) => su(e.parent),
    $root: (e) => su(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Zm(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ld(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Cl.bind(e.proxy)),
    $watch: (e) => zv.bind(e)
  })
), _c = (e, t) => e !== Ft && !e.__isScriptSetup && Mt(e, t), r_ = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: o, accessCache: a, type: s, appContext: l } = e;
    if (t[0] !== "$") {
      const h = a[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (_c(r, t))
          return a[t] = 1, r[t];
        if (i !== Ft && Mt(i, t))
          return a[t] = 2, i[t];
        if (Mt(o, t))
          return a[t] = 3, o[t];
        if (n !== Ft && Mt(n, t))
          return a[t] = 4, n[t];
        lu && (a[t] = 0);
      }
    }
    const d = ba[t];
    let u, f;
    if (d)
      return t === "$attrs" && un(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = s.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Ft && Mt(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, Mt(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: o } = e;
    return _c(i, t) ? (i[t] = n, !0) : r !== Ft && Mt(r, t) ? (r[t] = n, !0) : Mt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: o, type: a }
  }, s) {
    let l;
    return !!(n[s] || e !== Ft && s[0] !== "$" && Mt(e, s) || _c(t, s) || Mt(o, s) || Mt(r, s) || Mt(ba, s) || Mt(i.config.globalProperties, s) || (l = a.__cssModules) && l[s]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Mt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ip(e) {
  return st(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let lu = !0;
function i_(e) {
  const t = Zm(e), n = e.proxy, r = e.ctx;
  lu = !1, t.beforeCreate && Ep(t.beforeCreate, e, "bc");
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
    beforeMount: f,
    mounted: h,
    beforeUpdate: g,
    updated: b,
    activated: _,
    deactivated: v,
    beforeDestroy: P,
    beforeUnmount: W,
    destroyed: D,
    unmounted: O,
    render: S,
    renderTracked: $,
    renderTriggered: z,
    errorCaptured: te,
    serverPrefetch: ie,
    // public API
    expose: G,
    inheritAttrs: j,
    // assets
    components: K,
    directives: ce,
    filters: Se
  } = t;
  if (d && o_(d, r, null), a)
    for (const X in a) {
      const A = a[X];
      ut(A) && (r[X] = A.bind(n));
    }
  if (i) {
    const X = i.call(n, n);
    Et(X) && (e.data = /* @__PURE__ */ Eo(X));
  }
  if (lu = !0, o)
    for (const X in o) {
      const A = o[X], T = ut(A) ? A.bind(n, n) : ut(A.get) ? A.get.bind(n, n) : wr, de = !ut(A) && ut(A.set) ? A.set.bind(n) : wr, he = dt({
        get: T,
        set: de
      });
      Object.defineProperty(r, X, {
        enumerable: !0,
        configurable: !0,
        get: () => he.value,
        set: (xe) => he.value = xe
      });
    }
  if (s)
    for (const X in s)
      Jm(s[X], r, n, X);
  if (l) {
    const X = ut(l) ? l.call(n) : l;
    Reflect.ownKeys(X).forEach((A) => {
      Rv(A, X[A]);
    });
  }
  u && Ep(u, e, "c");
  function ge(X, A) {
    st(A) ? A.forEach((T) => X(T.bind(n))) : A && X(A.bind(n));
  }
  if (ge(Uv, f), ge(El, h), ge(Yv, g), ge(qv, b), ge(Wv, _), ge(Kv, v), ge(Qv, te), ge(Zv, $), ge(Jv, z), ge(Ha, W), ge(qm, O), ge(Xv, ie), st(G))
    if (G.length) {
      const X = e.exposed || (e.exposed = {});
      G.forEach((A) => {
        Object.defineProperty(X, A, {
          get: () => n[A],
          set: (T) => n[A] = T,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === wr && (e.render = S), j != null && (e.inheritAttrs = j), K && (e.components = K), ce && (e.directives = ce), ie && Bm(e);
}
function o_(e, t, n = wr) {
  st(e) && (e = cu(e));
  for (const r in e) {
    const i = e[r];
    let o;
    Et(i) ? "default" in i ? o = Ms(
      i.from || r,
      i.default,
      !0
    ) : o = Ms(i.from || r) : o = Ms(i), /* @__PURE__ */ hn(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : t[r] = o;
  }
}
function Ep(e, t, n) {
  Nr(
    st(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Jm(e, t, n, r) {
  let i = r.includes(".") ? Km(n, r) : () => n[r];
  if (Jt(e)) {
    const o = t[e];
    ut(o) && Fi(i, o);
  } else if (ut(e))
    Fi(i, e.bind(n));
  else if (Et(e))
    if (st(e))
      e.forEach((o) => Jm(o, t, n, r));
    else {
      const o = ut(e.handler) ? e.handler.bind(n) : t[e.handler];
      ut(o) && Fi(i, o, e);
    }
}
function Zm(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: a }
  } = e.appContext, s = o.get(t);
  let l;
  return s ? l = s : !i.length && !n && !r ? l = t : (l = {}, i.length && i.forEach(
    (d) => Bs(l, d, a, !0)
  ), Bs(l, t, a)), Et(t) && o.set(t, l), l;
}
function Bs(e, t, n, r = !1) {
  const { mixins: i, extends: o } = t;
  o && Bs(e, o, n, !0), i && i.forEach(
    (a) => Bs(e, a, n, !0)
  );
  for (const a in t)
    if (!(r && a === "expose")) {
      const s = a_[a] || n && n[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const a_ = {
  data: Op,
  props: Fp,
  emits: Fp,
  // objects
  methods: ia,
  computed: ia,
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
  components: ia,
  directives: ia,
  // watch
  watch: l_,
  // provide / inject
  provide: Op,
  inject: s_
};
function Op(e, t) {
  return t ? e ? function() {
    return gn(
      ut(e) ? e.call(this, this) : e,
      ut(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function s_(e, t) {
  return ia(cu(e), cu(t));
}
function cu(e) {
  if (st(e)) {
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
function ia(e, t) {
  return e ? gn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Fp(e, t) {
  return e ? st(e) && st(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : gn(
    /* @__PURE__ */ Object.create(null),
    Ip(e),
    Ip(t ?? {})
  ) : t;
}
function l_(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = gn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = _n(e[r], t[r]);
  return n;
}
function Qm() {
  return {
    app: null,
    config: {
      isNativeTag: pm,
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
let c_ = 0;
function u_(e, t) {
  return function(r, i = null) {
    ut(r) || (r = gn({}, r)), i != null && !Et(i) && (i = null);
    const o = Qm(), a = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const d = o.app = {
      _uid: c_++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: H_,
      get config() {
        return o.config;
      },
      set config(u) {
      },
      use(u, ...f) {
        return a.has(u) || (u && ut(u.install) ? (a.add(u), u.install(d, ...f)) : ut(u) && (a.add(u), u(d, ...f))), d;
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), d;
      },
      component(u, f) {
        return f ? (o.components[u] = f, d) : o.components[u];
      },
      directive(u, f) {
        return f ? (o.directives[u] = f, d) : o.directives[u];
      },
      mount(u, f, h) {
        if (!l) {
          const g = d._ceVNode || tt(r, i);
          return g.appContext = o, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(g, u, h), l = !0, d._container = u, u.__vue_app__ = d, Tl(g.component);
        }
      },
      onUnmount(u) {
        s.push(u);
      },
      unmount() {
        l && (Nr(
          s,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, f) {
        return o.provides[u] = f, d;
      },
      runWithContext(u) {
        const f = bo;
        bo = d;
        try {
          return u();
        } finally {
          bo = f;
        }
      }
    };
    return d;
  };
}
let bo = null;
const d_ = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${wn(t)}Modifiers`] || e[`${$i(t)}Modifiers`];
function f_(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ft;
  let i = n;
  const o = t.startsWith("update:"), a = o && d_(r, t.slice(7));
  a && (a.trim && (i = n.map((u) => Jt(u) ? u.trim() : u)), a.number && (i = n.map(Qu)));
  let s, l = r[s = mc(t)] || // also try camelCase event handler (#2249)
  r[s = mc(wn(t))];
  !l && o && (l = r[s = mc($i(t))]), l && Nr(
    l,
    e,
    6,
    i
  );
  const d = r[s + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, Nr(
      d,
      e,
      6,
      i
    );
  }
}
const p_ = /* @__PURE__ */ new WeakMap();
function eg(e, t, n = !1) {
  const r = n ? p_ : t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let a = {}, s = !1;
  if (!ut(e)) {
    const l = (d) => {
      const u = eg(d, t, !0);
      u && (s = !0, gn(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !s ? (Et(e) && r.set(e, null), null) : (st(o) ? o.forEach((l) => a[l] = null) : gn(a, o), Et(e) && r.set(e, a), a);
}
function Ol(e, t) {
  return !e || !wl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Mt(e, t[0].toLowerCase() + t.slice(1)) || Mt(e, $i(t)) || Mt(e, t));
}
function Tp(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [o],
    slots: a,
    attrs: s,
    emit: l,
    render: d,
    renderCache: u,
    props: f,
    data: h,
    setupState: g,
    ctx: b,
    inheritAttrs: _
  } = e, v = Ws(e);
  let P, W;
  try {
    if (n.shapeFlag & 4) {
      const O = i || r, S = O;
      P = vr(
        d.call(
          S,
          O,
          u,
          f,
          g,
          h,
          b
        )
      ), W = s;
    } else {
      const O = t;
      P = vr(
        O.length > 1 ? O(
          f,
          { attrs: s, slots: a, emit: l }
        ) : O(
          f,
          null
        )
      ), W = t.props ? s : h_(s);
    }
  } catch (O) {
    va.length = 0, Al(O, e, 1), P = tt(ii);
  }
  let D = P;
  if (W && _ !== !1) {
    const O = Object.keys(W), { shapeFlag: S } = D;
    O.length && S & 7 && (o && O.some(xl) && (W = m_(
      W,
      o
    )), D = No(D, W, !1, !0));
  }
  return n.dirs && (D = No(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && cd(D, n.transition), P = D, Ws(v), P;
}
const h_ = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || wl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, m_ = (e, t) => {
  const n = {};
  for (const r in e)
    (!xl(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function g_(e, t, n) {
  const { props: r, children: i, component: o } = e, { props: a, children: s, patchFlag: l } = t, d = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Dp(r, a, d) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (tg(a, r, h) && !Ol(d, h))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : r === a ? !1 : r ? a ? Dp(r, a, d) : !0 : !!a;
  return !1;
}
function Dp(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (tg(t, e, o) && !Ol(n, o))
      return !0;
  }
  return !1;
}
function tg(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && Et(r) && Et(i) ? !ed(r, i) : r !== i;
}
function y_({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = r, e = i), i === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const ng = {}, rg = () => Object.create(ng), ig = (e) => Object.getPrototypeOf(e) === ng;
function b_(e, t, n, r = !1) {
  const i = {}, o = rg();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), og(e, t, i, o);
  for (const a in e.propsOptions[0])
    a in i || (i[a] = void 0);
  n ? e.props = r ? i : /* @__PURE__ */ Pv(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function v_(e, t, n, r) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: a }
  } = e, s = /* @__PURE__ */ kt(i), [l] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (Ol(e.emitsOptions, h))
          continue;
        const g = t[h];
        if (l)
          if (Mt(o, h))
            g !== o[h] && (o[h] = g, d = !0);
          else {
            const b = wn(h);
            i[b] = uu(
              l,
              s,
              b,
              g,
              e,
              !1
            );
          }
        else
          g !== o[h] && (o[h] = g, d = !0);
      }
    }
  } else {
    og(e, t, i, o) && (d = !0);
    let u;
    for (const f in s)
      (!t || // for camelCase
      !Mt(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = $i(f)) === f || !Mt(t, u))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[f] = uu(
        l,
        s,
        f,
        void 0,
        e,
        !0
      )) : delete i[f]);
    if (o !== s)
      for (const f in o)
        (!t || !Mt(t, f)) && (delete o[f], d = !0);
  }
  d && Vr(e.attrs, "set", "");
}
function og(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let l in t) {
      if (pa(l))
        continue;
      const d = t[l];
      let u;
      i && Mt(i, u = wn(l)) ? !o || !o.includes(u) ? n[u] = d : (s || (s = {}))[u] = d : Ol(e.emitsOptions, l) || (!(l in r) || d !== r[l]) && (r[l] = d, a = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ kt(n), d = s || Ft;
    for (let u = 0; u < o.length; u++) {
      const f = o[u];
      n[f] = uu(
        i,
        l,
        f,
        d[f],
        e,
        !Mt(d, f)
      );
    }
  }
  return a;
}
function uu(e, t, n, r, i, o) {
  const a = e[n];
  if (a != null) {
    const s = Mt(a, "default");
    if (s && r === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && ut(l)) {
        const { propsDefaults: d } = i;
        if (n in d)
          r = d[n];
        else {
          const u = Ga(i);
          r = d[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        r = l;
      i.ce && i.ce._setProp(n, r);
    }
    a[
      0
      /* shouldCast */
    ] && (o && !s ? r = !1 : a[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === $i(n)) && (r = !0));
  }
  return r;
}
const __ = /* @__PURE__ */ new WeakMap();
function ag(e, t, n = !1) {
  const r = n ? __ : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const o = e.props, a = {}, s = [];
  let l = !1;
  if (!ut(e)) {
    const u = (f) => {
      l = !0;
      const [h, g] = ag(f, t, !0);
      gn(a, h), g && s.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l)
    return Et(e) && r.set(e, mo), mo;
  if (st(o))
    for (let u = 0; u < o.length; u++) {
      const f = wn(o[u]);
      Lp(f) && (a[f] = Ft);
    }
  else if (o)
    for (const u in o) {
      const f = wn(u);
      if (Lp(f)) {
        const h = o[u], g = a[f] = st(h) || ut(h) ? { type: h } : gn({}, h), b = g.type;
        let _ = !1, v = !0;
        if (st(b))
          for (let P = 0; P < b.length; ++P) {
            const W = b[P], D = ut(W) && W.name;
            if (D === "Boolean") {
              _ = !0;
              break;
            } else D === "String" && (v = !1);
          }
        else
          _ = ut(b) && b.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = _, g[
          1
          /* shouldCastTrue */
        ] = v, (_ || Mt(g, "default")) && s.push(f);
      }
    }
  const d = [a, s];
  return Et(e) && r.set(e, d), d;
}
function Lp(e) {
  return e[0] !== "$" && !pa(e);
}
const ud = (e) => e === "_" || e === "_ctx" || e === "$stable", dd = (e) => st(e) ? e.map(vr) : [vr(e)], S_ = (e, t, n) => {
  if (t._n)
    return t;
  const r = Gm((...i) => dd(t(...i)), n);
  return r._c = !1, r;
}, sg = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (ud(i)) continue;
    const o = e[i];
    if (ut(o))
      t[i] = S_(i, o, r);
    else if (o != null) {
      const a = dd(o);
      t[i] = () => a;
    }
  }
}, lg = (e, t) => {
  const n = dd(t);
  e.slots.default = () => n;
}, cg = (e, t, n) => {
  for (const r in t)
    (n || !ud(r)) && (e[r] = t[r]);
}, w_ = (e, t, n) => {
  const r = e.slots = rg();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (cg(r, t, n), n && bm(r, "_", i, !0)) : sg(t, r);
  } else t && lg(e, t);
}, x_ = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let o = !0, a = Ft;
  if (r.shapeFlag & 32) {
    const s = t._;
    s ? n && s === 1 ? o = !1 : cg(i, t, n) : (o = !t.$stable, sg(t, i)), a = t;
  } else t && (lg(e, t), a = { default: 1 });
  if (o)
    for (const s in i)
      !ud(s) && a[s] == null && delete i[s];
}, Mn = A_;
function k_(e) {
  return M_(e);
}
function M_(e, t) {
  const n = Pl();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: o,
    createElement: a,
    createText: s,
    createComment: l,
    setText: d,
    setElementText: u,
    parentNode: f,
    nextSibling: h,
    setScopeId: g = wr,
    insertStaticContent: b
  } = e, _ = (x, N, U, ue = null, M = null, Z = null, re = void 0, I = null, E = !!N.dynamicChildren) => {
    if (x === N)
      return;
    x && !Jo(x, N) && (ue = me(x), xe(x, M, Z, !0), x = null), N.patchFlag === -2 && (E = !1, N.dynamicChildren = null);
    const { type: F, ref: B, shapeFlag: Y } = N;
    switch (F) {
      case Fl:
        v(x, N, U, ue);
        break;
      case ii:
        P(x, N, U, ue);
        break;
      case wc:
        x == null && W(N, U, ue, re);
        break;
      case ot:
        K(
          x,
          N,
          U,
          ue,
          M,
          Z,
          re,
          I,
          E
        );
        break;
      default:
        Y & 1 ? S(
          x,
          N,
          U,
          ue,
          M,
          Z,
          re,
          I,
          E
        ) : Y & 6 ? ce(
          x,
          N,
          U,
          ue,
          M,
          Z,
          re,
          I,
          E
        ) : (Y & 64 || Y & 128) && F.process(
          x,
          N,
          U,
          ue,
          M,
          Z,
          re,
          I,
          E,
          oe
        );
    }
    B != null && M ? ga(B, x && x.ref, Z, N || x, !N) : B == null && x && x.ref != null && ga(x.ref, null, Z, x, !0);
  }, v = (x, N, U, ue) => {
    if (x == null)
      r(
        N.el = s(N.children),
        U,
        ue
      );
    else {
      const M = N.el = x.el;
      N.children !== x.children && d(M, N.children);
    }
  }, P = (x, N, U, ue) => {
    x == null ? r(
      N.el = l(N.children || ""),
      U,
      ue
    ) : N.el = x.el;
  }, W = (x, N, U, ue) => {
    [x.el, x.anchor] = b(
      x.children,
      N,
      U,
      ue,
      x.el,
      x.anchor
    );
  }, D = ({ el: x, anchor: N }, U, ue) => {
    let M;
    for (; x && x !== N; )
      M = h(x), r(x, U, ue), x = M;
    r(N, U, ue);
  }, O = ({ el: x, anchor: N }) => {
    let U;
    for (; x && x !== N; )
      U = h(x), i(x), x = U;
    i(N);
  }, S = (x, N, U, ue, M, Z, re, I, E) => {
    if (N.type === "svg" ? re = "svg" : N.type === "math" && (re = "mathml"), x == null)
      $(
        N,
        U,
        ue,
        M,
        Z,
        re,
        I,
        E
      );
    else {
      const F = x.el && x.el._isVueCE ? x.el : null;
      try {
        F && F._beginPatch(), ie(
          x,
          N,
          M,
          Z,
          re,
          I,
          E
        );
      } finally {
        F && F._endPatch();
      }
    }
  }, $ = (x, N, U, ue, M, Z, re, I) => {
    let E, F;
    const { props: B, shapeFlag: Y, transition: Q, dirs: V } = x;
    if (E = x.el = a(
      x.type,
      Z,
      B && B.is,
      B
    ), Y & 8 ? u(E, x.children) : Y & 16 && te(
      x.children,
      E,
      null,
      ue,
      M,
      Sc(x, Z),
      re,
      I
    ), V && bi(x, null, ue, "created"), z(E, x, x.scopeId, re, ue), B) {
      for (const Pe in B)
        Pe !== "value" && !pa(Pe) && o(E, Pe, null, B[Pe], Z, ue);
      "value" in B && o(E, "value", null, B.value, Z), (F = B.onVnodeBeforeMount) && hr(F, ue, x);
    }
    V && bi(x, null, ue, "beforeMount");
    const ne = P_(M, Q);
    ne && Q.beforeEnter(E), r(E, N, U), ((F = B && B.onVnodeMounted) || ne || V) && Mn(() => {
      try {
        F && hr(F, ue, x), ne && Q.enter(E), V && bi(x, null, ue, "mounted");
      } finally {
      }
    }, M);
  }, z = (x, N, U, ue, M) => {
    if (U && g(x, U), ue)
      for (let Z = 0; Z < ue.length; Z++)
        g(x, ue[Z]);
    if (M) {
      let Z = M.subTree;
      if (N === Z || pg(Z.type) && (Z.ssContent === N || Z.ssFallback === N)) {
        const re = M.vnode;
        z(
          x,
          re,
          re.scopeId,
          re.slotScopeIds,
          M.parent
        );
      }
    }
  }, te = (x, N, U, ue, M, Z, re, I, E = 0) => {
    for (let F = E; F < x.length; F++) {
      const B = x[F] = I ? Lr(x[F]) : vr(x[F]);
      _(
        null,
        B,
        N,
        U,
        ue,
        M,
        Z,
        re,
        I
      );
    }
  }, ie = (x, N, U, ue, M, Z, re) => {
    const I = N.el = x.el;
    let { patchFlag: E, dynamicChildren: F, dirs: B } = N;
    E |= x.patchFlag & 16;
    const Y = x.props || Ft, Q = N.props || Ft;
    let V;
    if (U && vi(U, !1), (V = Q.onVnodeBeforeUpdate) && hr(V, U, N, x), B && bi(N, x, U, "beforeUpdate"), U && vi(U, !0), (Y.innerHTML && Q.innerHTML == null || Y.textContent && Q.textContent == null) && u(I, ""), F ? G(
      x.dynamicChildren,
      F,
      I,
      U,
      ue,
      Sc(N, M),
      Z
    ) : re || A(
      x,
      N,
      I,
      null,
      U,
      ue,
      Sc(N, M),
      Z,
      !1
    ), E > 0) {
      if (E & 16)
        j(I, Y, Q, U, M);
      else if (E & 2 && Y.class !== Q.class && o(I, "class", null, Q.class, M), E & 4 && o(I, "style", Y.style, Q.style, M), E & 8) {
        const ne = N.dynamicProps;
        for (let Pe = 0; Pe < ne.length; Pe++) {
          const Re = ne[Pe], le = Y[Re], ve = Q[Re];
          (ve !== le || Re === "value") && o(I, Re, le, ve, M, U);
        }
      }
      E & 1 && x.children !== N.children && u(I, N.children);
    } else !re && F == null && j(I, Y, Q, U, M);
    ((V = Q.onVnodeUpdated) || B) && Mn(() => {
      V && hr(V, U, N, x), B && bi(N, x, U, "updated");
    }, ue);
  }, G = (x, N, U, ue, M, Z, re) => {
    for (let I = 0; I < N.length; I++) {
      const E = x[I], F = N[I], B = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === ot || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Jo(E, F) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 198) ? f(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          U
        )
      );
      _(
        E,
        F,
        B,
        null,
        ue,
        M,
        Z,
        re,
        !0
      );
    }
  }, j = (x, N, U, ue, M) => {
    if (N !== U) {
      if (N !== Ft)
        for (const Z in N)
          !pa(Z) && !(Z in U) && o(
            x,
            Z,
            N[Z],
            null,
            M,
            ue
          );
      for (const Z in U) {
        if (pa(Z)) continue;
        const re = U[Z], I = N[Z];
        re !== I && Z !== "value" && o(x, Z, I, re, M, ue);
      }
      "value" in U && o(x, "value", N.value, U.value, M);
    }
  }, K = (x, N, U, ue, M, Z, re, I, E) => {
    const F = N.el = x ? x.el : s(""), B = N.anchor = x ? x.anchor : s("");
    let { patchFlag: Y, dynamicChildren: Q, slotScopeIds: V } = N;
    V && (I = I ? I.concat(V) : V), x == null ? (r(F, U, ue), r(B, U, ue), te(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      N.children || [],
      U,
      B,
      M,
      Z,
      re,
      I,
      E
    )) : Y > 0 && Y & 64 && Q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    x.dynamicChildren && x.dynamicChildren.length === Q.length ? (G(
      x.dynamicChildren,
      Q,
      U,
      M,
      Z,
      re,
      I
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (N.key != null || M && N === M.subTree) && ug(
      x,
      N,
      !0
      /* shallow */
    )) : A(
      x,
      N,
      U,
      B,
      M,
      Z,
      re,
      I,
      E
    );
  }, ce = (x, N, U, ue, M, Z, re, I, E) => {
    N.slotScopeIds = I, x == null ? N.shapeFlag & 512 ? M.ctx.activate(
      N,
      U,
      ue,
      re,
      E
    ) : Se(
      N,
      U,
      ue,
      M,
      Z,
      re,
      E
    ) : be(x, N, E);
  }, Se = (x, N, U, ue, M, Z, re) => {
    const I = x.component = T_(
      x,
      ue,
      M
    );
    if (Um(x) && (I.ctx.renderer = oe), L_(I, !1, re), I.asyncDep) {
      if (M && M.registerDep(I, ge, re), !x.el) {
        const E = I.subTree = tt(ii);
        P(null, E, N, U), x.placeholder = E.el;
      }
    } else
      ge(
        I,
        x,
        N,
        U,
        M,
        Z,
        re
      );
  }, be = (x, N, U) => {
    const ue = N.component = x.component;
    if (g_(x, N, U))
      if (ue.asyncDep && !ue.asyncResolved) {
        X(ue, N, U);
        return;
      } else
        ue.next = N, ue.update();
    else
      N.el = x.el, ue.vnode = N;
  }, ge = (x, N, U, ue, M, Z, re) => {
    const I = () => {
      if (x.isMounted) {
        let { next: Y, bu: Q, u: V, parent: ne, vnode: Pe } = x;
        {
          const m = dg(x);
          if (m) {
            Y && (Y.el = Pe.el, X(x, Y, re)), m.asyncDep.then(() => {
              Mn(() => {
                x.isUnmounted || F();
              }, M);
            });
            return;
          }
        }
        let Re = Y, le;
        vi(x, !1), Y ? (Y.el = Pe.el, X(x, Y, re)) : Y = Pe, Q && ks(Q), (le = Y.props && Y.props.onVnodeBeforeUpdate) && hr(le, ne, Y, Pe), vi(x, !0);
        const ve = Tp(x), we = x.subTree;
        x.subTree = ve, _(
          we,
          ve,
          // parent may have changed if it's in a teleport
          f(we.el),
          // anchor may have changed if it's in a fragment
          me(we),
          x,
          M,
          Z
        ), Y.el = ve.el, Re === null && y_(x, ve.el), V && Mn(V, M), (le = Y.props && Y.props.onVnodeUpdated) && Mn(
          () => hr(le, ne, Y, Pe),
          M
        );
      } else {
        let Y;
        const { el: Q, props: V } = N, { bm: ne, m: Pe, parent: Re, root: le, type: ve } = x, we = ya(N);
        vi(x, !1), ne && ks(ne), !we && (Y = V && V.onVnodeBeforeMount) && hr(Y, Re, N), vi(x, !0);
        {
          le.ce && le.ce._hasShadowRoot() && le.ce._injectChildStyle(
            ve,
            x.parent ? x.parent.type : void 0
          );
          const m = x.subTree = Tp(x);
          _(
            null,
            m,
            U,
            ue,
            x,
            M,
            Z
          ), N.el = m.el;
        }
        if (Pe && Mn(Pe, M), !we && (Y = V && V.onVnodeMounted)) {
          const m = N;
          Mn(
            () => hr(Y, Re, m),
            M
          );
        }
        (N.shapeFlag & 256 || Re && ya(Re.vnode) && Re.vnode.shapeFlag & 256) && x.a && Mn(x.a, M), x.isMounted = !0, N = U = ue = null;
      }
    };
    x.scope.on();
    const E = x.effect = new wm(I);
    x.scope.off();
    const F = x.update = E.run.bind(E), B = x.job = E.runIfDirty.bind(E);
    B.i = x, B.id = x.uid, E.scheduler = () => ld(B), vi(x, !0), F();
  }, X = (x, N, U) => {
    N.component = x;
    const ue = x.vnode.props;
    x.vnode = N, x.next = null, v_(x, N.props, ue, U), x_(x, N.children, U), Wr(), Pp(x), Kr();
  }, A = (x, N, U, ue, M, Z, re, I, E = !1) => {
    const F = x && x.children, B = x ? x.shapeFlag : 0, Y = N.children, { patchFlag: Q, shapeFlag: V } = N;
    if (Q > 0) {
      if (Q & 128) {
        de(
          F,
          Y,
          U,
          ue,
          M,
          Z,
          re,
          I,
          E
        );
        return;
      } else if (Q & 256) {
        T(
          F,
          Y,
          U,
          ue,
          M,
          Z,
          re,
          I,
          E
        );
        return;
      }
    }
    V & 8 ? (B & 16 && ae(F, M, Z), Y !== F && u(U, Y)) : B & 16 ? V & 16 ? de(
      F,
      Y,
      U,
      ue,
      M,
      Z,
      re,
      I,
      E
    ) : ae(F, M, Z, !0) : (B & 8 && u(U, ""), V & 16 && te(
      Y,
      U,
      ue,
      M,
      Z,
      re,
      I,
      E
    ));
  }, T = (x, N, U, ue, M, Z, re, I, E) => {
    x = x || mo, N = N || mo;
    const F = x.length, B = N.length, Y = Math.min(F, B);
    let Q;
    for (Q = 0; Q < Y; Q++) {
      const V = N[Q] = E ? Lr(N[Q]) : vr(N[Q]);
      _(
        x[Q],
        V,
        U,
        null,
        M,
        Z,
        re,
        I,
        E
      );
    }
    F > B ? ae(
      x,
      M,
      Z,
      !0,
      !1,
      Y
    ) : te(
      N,
      U,
      ue,
      M,
      Z,
      re,
      I,
      E,
      Y
    );
  }, de = (x, N, U, ue, M, Z, re, I, E) => {
    let F = 0;
    const B = N.length;
    let Y = x.length - 1, Q = B - 1;
    for (; F <= Y && F <= Q; ) {
      const V = x[F], ne = N[F] = E ? Lr(N[F]) : vr(N[F]);
      if (Jo(V, ne))
        _(
          V,
          ne,
          U,
          null,
          M,
          Z,
          re,
          I,
          E
        );
      else
        break;
      F++;
    }
    for (; F <= Y && F <= Q; ) {
      const V = x[Y], ne = N[Q] = E ? Lr(N[Q]) : vr(N[Q]);
      if (Jo(V, ne))
        _(
          V,
          ne,
          U,
          null,
          M,
          Z,
          re,
          I,
          E
        );
      else
        break;
      Y--, Q--;
    }
    if (F > Y) {
      if (F <= Q) {
        const V = Q + 1, ne = V < B ? N[V].el : ue;
        for (; F <= Q; )
          _(
            null,
            N[F] = E ? Lr(N[F]) : vr(N[F]),
            U,
            ne,
            M,
            Z,
            re,
            I,
            E
          ), F++;
      }
    } else if (F > Q)
      for (; F <= Y; )
        xe(x[F], M, Z, !0), F++;
    else {
      const V = F, ne = F, Pe = /* @__PURE__ */ new Map();
      for (F = ne; F <= Q; F++) {
        const H = N[F] = E ? Lr(N[F]) : vr(N[F]);
        H.key != null && Pe.set(H.key, F);
      }
      let Re, le = 0;
      const ve = Q - ne + 1;
      let we = !1, m = 0;
      const p = new Array(ve);
      for (F = 0; F < ve; F++) p[F] = 0;
      for (F = V; F <= Y; F++) {
        const H = x[F];
        if (le >= ve) {
          xe(H, M, Z, !0);
          continue;
        }
        let k;
        if (H.key != null)
          k = Pe.get(H.key);
        else
          for (Re = ne; Re <= Q; Re++)
            if (p[Re - ne] === 0 && Jo(H, N[Re])) {
              k = Re;
              break;
            }
        k === void 0 ? xe(H, M, Z, !0) : (p[k - ne] = F + 1, k >= m ? m = k : we = !0, _(
          H,
          N[k],
          U,
          null,
          M,
          Z,
          re,
          I,
          E
        ), le++);
      }
      const L = we ? N_(p) : mo;
      for (Re = L.length - 1, F = ve - 1; F >= 0; F--) {
        const H = ne + F, k = N[H], ee = N[H + 1], _e = H + 1 < B ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ee.el || fg(ee)
        ) : ue;
        p[F] === 0 ? _(
          null,
          k,
          U,
          _e,
          M,
          Z,
          re,
          I,
          E
        ) : we && (Re < 0 || F !== L[Re] ? he(k, U, _e, 2) : Re--);
      }
    }
  }, he = (x, N, U, ue, M = null) => {
    const { el: Z, type: re, transition: I, children: E, shapeFlag: F } = x;
    if (F & 6) {
      he(x.component.subTree, N, U, ue);
      return;
    }
    if (F & 128) {
      x.suspense.move(N, U, ue);
      return;
    }
    if (F & 64) {
      re.move(x, N, U, oe);
      return;
    }
    if (re === ot) {
      r(Z, N, U);
      for (let Y = 0; Y < E.length; Y++)
        he(E[Y], N, U, ue);
      r(x.anchor, N, U);
      return;
    }
    if (re === wc) {
      D(x, N, U);
      return;
    }
    if (ue !== 2 && F & 1 && I)
      if (ue === 0)
        I.beforeEnter(Z), r(Z, N, U), Mn(() => I.enter(Z), M);
      else {
        const { leave: Y, delayLeave: Q, afterLeave: V } = I, ne = () => {
          x.ctx.isUnmounted ? i(Z) : r(Z, N, U);
        }, Pe = () => {
          Z._isLeaving && Z[Gv](
            !0
            /* cancelled */
          ), Y(Z, () => {
            ne(), V && V();
          });
        };
        Q ? Q(Z, ne, Pe) : Pe();
      }
    else
      r(Z, N, U);
  }, xe = (x, N, U, ue = !1, M = !1) => {
    const {
      type: Z,
      props: re,
      ref: I,
      children: E,
      dynamicChildren: F,
      shapeFlag: B,
      patchFlag: Y,
      dirs: Q,
      cacheIndex: V,
      memo: ne
    } = x;
    if (Y === -2 && (M = !1), I != null && (Wr(), ga(I, null, U, x, !0), Kr()), V != null && (N.renderCache[V] = void 0), B & 256) {
      N.ctx.deactivate(x);
      return;
    }
    const Pe = B & 1 && Q, Re = !ya(x);
    let le;
    if (Re && (le = re && re.onVnodeBeforeUnmount) && hr(le, N, x), B & 6)
      R(x.component, U, ue);
    else {
      if (B & 128) {
        x.suspense.unmount(U, ue);
        return;
      }
      Pe && bi(x, null, N, "beforeUnmount"), B & 64 ? x.type.remove(
        x,
        N,
        U,
        oe,
        ue
      ) : F && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !F.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Z !== ot || Y > 0 && Y & 64) ? ae(
        F,
        N,
        U,
        !1,
        !0
      ) : (Z === ot && Y & 384 || !M && B & 16) && ae(E, N, U), ue && He(x);
    }
    const ve = ne != null && V == null;
    (Re && (le = re && re.onVnodeUnmounted) || Pe || ve) && Mn(() => {
      le && hr(le, N, x), Pe && bi(x, null, N, "unmounted"), ve && (x.el = null);
    }, U);
  }, He = (x) => {
    const { type: N, el: U, anchor: ue, transition: M } = x;
    if (N === ot) {
      se(U, ue);
      return;
    }
    if (N === wc) {
      O(x);
      return;
    }
    const Z = () => {
      i(U), M && !M.persisted && M.afterLeave && M.afterLeave();
    };
    if (x.shapeFlag & 1 && M && !M.persisted) {
      const { leave: re, delayLeave: I } = M, E = () => re(U, Z);
      I ? I(x.el, Z, E) : E();
    } else
      Z();
  }, se = (x, N) => {
    let U;
    for (; x !== N; )
      U = h(x), i(x), x = U;
    i(N);
  }, R = (x, N, U) => {
    const { bum: ue, scope: M, job: Z, subTree: re, um: I, m: E, a: F } = x;
    Rp(E), Rp(F), ue && ks(ue), M.stop(), Z && (Z.flags |= 8, xe(re, x, N, U)), I && Mn(I, N), Mn(() => {
      x.isUnmounted = !0;
    }, N);
  }, ae = (x, N, U, ue = !1, M = !1, Z = 0) => {
    for (let re = Z; re < x.length; re++)
      xe(x[re], N, U, ue, M);
  }, me = (x) => {
    if (x.shapeFlag & 6)
      return me(x.component.subTree);
    if (x.shapeFlag & 128)
      return x.suspense.next();
    const N = h(x.anchor || x.el), U = N && N[jv];
    return U ? h(U) : N;
  };
  let Ne = !1;
  const Te = (x, N, U) => {
    let ue;
    x == null ? N._vnode && (xe(N._vnode, null, null, !0), ue = N._vnode.component) : _(
      N._vnode || null,
      x,
      N,
      null,
      null,
      null,
      U
    ), N._vnode = x, Ne || (Ne = !0, Pp(ue), zm(), Ne = !1);
  }, oe = {
    p: _,
    um: xe,
    m: he,
    r: He,
    mt: Se,
    mc: te,
    pc: A,
    pbc: G,
    n: me,
    o: e
  };
  return {
    render: Te,
    hydrate: void 0,
    createApp: u_(Te)
  };
}
function Sc({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function vi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function P_(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ug(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (st(r) && st(i))
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      let s = i[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = Lr(i[o]), s.el = a.el), !n && s.patchFlag !== -2 && ug(a, s)), s.type === Fl && (s.patchFlag === -1 && (s = i[o] = Lr(s)), s.el = a.el), s.type === ii && !s.el && (s.el = a.el);
    }
}
function N_(e) {
  const t = e.slice(), n = [0];
  let r, i, o, a, s;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const d = e[r];
    if (d !== 0) {
      if (i = n[n.length - 1], e[i] < d) {
        t[r] = i, n.push(r);
        continue;
      }
      for (o = 0, a = n.length - 1; o < a; )
        s = o + a >> 1, e[n[s]] < d ? o = s + 1 : a = s;
      d < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, a = n[o - 1]; o-- > 0; )
    n[o] = a, a = t[a];
  return n;
}
function dg(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : dg(t);
}
function Rp(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function fg(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? fg(t.subTree) : null;
}
const pg = (e) => e.__isSuspense;
function A_(e, t) {
  t && t.pendingBranch ? st(e) ? t.effects.push(...e) : t.effects.push(e) : Lv(e);
}
const ot = /* @__PURE__ */ Symbol.for("v-fgt"), Fl = /* @__PURE__ */ Symbol.for("v-txt"), ii = /* @__PURE__ */ Symbol.for("v-cmt"), wc = /* @__PURE__ */ Symbol.for("v-stc"), va = [];
let Rn = null;
function $e(e = !1) {
  va.push(Rn = e ? null : []);
}
function C_() {
  va.pop(), Rn = va[va.length - 1] || null;
}
let Na = 1;
function Vp(e, t = !1) {
  Na += e, e < 0 && Rn && t && (Rn.hasOnce = !0);
}
function hg(e) {
  return e.dynamicChildren = Na > 0 ? Rn || mo : null, C_(), Na > 0 && Rn && Rn.push(e), e;
}
function je(e, t, n, r, i, o) {
  return hg(
    Me(
      e,
      t,
      n,
      r,
      i,
      o,
      !0
    )
  );
}
function Yn(e, t, n, r, i) {
  return hg(
    tt(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function mg(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Jo(e, t) {
  return e.type === t.type && e.key === t.key;
}
const gg = ({ key: e }) => e ?? null, Ps = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Jt(e) || /* @__PURE__ */ hn(e) || ut(e) ? { i: Ln, r: e, k: t, f: !!n } : e : null);
function Me(e, t = null, n = null, r = 0, i = null, o = e === ot ? 0 : 1, a = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && gg(t),
    ref: t && Ps(t),
    scopeId: Hm,
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
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Ln
  };
  return s ? (fd(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= Jt(n) ? 8 : 16), Na > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Rn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Rn.push(l), l;
}
const tt = I_;
function I_(e, t = null, n = null, r = 0, i = null, o = !1) {
  if ((!e || e === Xm) && (e = ii), mg(e)) {
    const s = No(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && fd(s, n), Na > 0 && !o && Rn && (s.shapeFlag & 6 ? Rn[Rn.indexOf(e)] = s : Rn.push(s)), s.patchFlag = -2, s;
  }
  if (j_(e) && (e = e.__vccOpts), t) {
    t = E_(t);
    let { class: s, style: l } = t;
    s && !Jt(s) && (t.class = ht(s)), Et(l) && (/* @__PURE__ */ sd(l) && !st(l) && (l = gn({}, l)), t.style = It(l));
  }
  const a = Jt(e) ? 1 : pg(e) ? 128 : Hv(e) ? 64 : Et(e) ? 4 : ut(e) ? 2 : 0;
  return Me(
    e,
    t,
    n,
    r,
    i,
    a,
    o,
    !0
  );
}
function E_(e) {
  return e ? /* @__PURE__ */ sd(e) || ig(e) ? gn({}, e) : e : null;
}
function No(e, t, n = !1, r = !1) {
  const { props: i, ref: o, patchFlag: a, children: s, transition: l } = e, d = t ? Rr(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && gg(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? st(o) ? o.concat(Ps(t)) : [o, Ps(t)] : Ps(t)
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
    patchFlag: t && e.type !== ot ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: e.ssContent && No(e.ssContent),
    ssFallback: e.ssFallback && No(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && cd(
    u,
    l.clone(u)
  ), u;
}
function oa(e = " ", t = 0) {
  return tt(Fl, null, e, t);
}
function mt(e = "", t = !1) {
  return t ? ($e(), Yn(ii, null, e)) : tt(ii, null, e);
}
function vr(e) {
  return e == null || typeof e == "boolean" ? tt(ii) : st(e) ? tt(
    ot,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : mg(e) ? Lr(e) : tt(Fl, null, String(e));
}
function Lr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : No(e);
}
function fd(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (st(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), fd(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !ig(t) ? t._ctx = Ln : i === 3 && Ln && (Ln.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ut(t) ? (t = { default: t, _ctx: Ln }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [oa(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Rr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = ht([t.class, r.class]));
      else if (i === "style")
        t.style = It([t.style, r.style]);
      else if (wl(i)) {
        const o = t[i], a = r[i];
        a && o !== a && !(st(o) && o.includes(a)) ? t[i] = o ? [].concat(o, a) : a : a == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !xl(i) && (t[i] = a);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function hr(e, t, n, r = null) {
  Nr(e, t, 7, [
    n,
    r
  ]);
}
const O_ = Qm();
let F_ = 0;
function T_(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || O_, o = {
    uid: F_++,
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
    scope: new av(
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
    propsOptions: ag(r, i),
    emitsOptions: eg(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ft,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Ft,
    data: Ft,
    props: Ft,
    attrs: Ft,
    slots: Ft,
    refs: Ft,
    setupState: Ft,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = f_.bind(null, o), e.ce && e.ce(o), o;
}
let dn = null;
const D_ = () => dn || Ln;
let Us, du;
{
  const e = Pl(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (o) => {
      i.length > 1 ? i.forEach((a) => a(o)) : i[0](o);
    };
  };
  Us = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => dn = n
  ), du = t(
    "__VUE_SSR_SETTERS__",
    (n) => Aa = n
  );
}
const Ga = (e) => {
  const t = dn;
  return Us(e), e.scope.on(), () => {
    e.scope.off(), Us(t);
  };
}, $p = () => {
  dn && dn.scope.off(), Us(null);
};
function yg(e) {
  return e.vnode.shapeFlag & 4;
}
let Aa = !1;
function L_(e, t = !1, n = !1) {
  t && du(t);
  const { props: r, children: i } = e.vnode, o = yg(e);
  b_(e, r, o, t), w_(e, i, n || t);
  const a = o ? R_(e, t) : void 0;
  return t && du(!1), a;
}
function R_(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, r_);
  const { setup: r } = n;
  if (r) {
    Wr();
    const i = e.setupContext = r.length > 1 ? $_(e) : null, o = Ga(e), a = ja(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), s = mm(a);
    if (Kr(), o(), (s || e.sp) && !ya(e) && Bm(e), s) {
      if (a.then($p, $p), t)
        return a.then((l) => {
          zp(e, l);
        }).catch((l) => {
          Al(l, e, 0);
        });
      e.asyncDep = a;
    } else
      zp(e, a);
  } else
    bg(e);
}
function zp(e, t, n) {
  ut(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Et(t) && (e.setupState = Rm(t)), bg(e);
}
function bg(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || wr);
  {
    const i = Ga(e);
    Wr();
    try {
      i_(e);
    } finally {
      Kr(), i();
    }
  }
}
const V_ = {
  get(e, t) {
    return un(e, "get", ""), e[t];
  }
};
function $_(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, V_),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Tl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Rm(Nv(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ba)
        return ba[n](e);
    },
    has(t, n) {
      return n in t || n in ba;
    }
  })) : e.proxy;
}
function z_(e, t = !0) {
  return ut(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function j_(e) {
  return ut(e) && "__vccOpts" in e;
}
const dt = (e, t) => /* @__PURE__ */ Ev(e, t, Aa), H_ = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let fu;
const jp = typeof window < "u" && window.trustedTypes;
if (jp)
  try {
    fu = /* @__PURE__ */ jp.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const vg = fu ? (e) => fu.createHTML(e) : (e) => e, G_ = "http://www.w3.org/2000/svg", W_ = "http://www.w3.org/1998/Math/MathML", Tr = typeof document < "u" ? document : null, Hp = Tr && /* @__PURE__ */ Tr.createElement("template"), K_ = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? Tr.createElementNS(G_, e) : t === "mathml" ? Tr.createElementNS(W_, e) : n ? Tr.createElement(e, { is: n }) : Tr.createElement(e);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
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
  insertStaticContent(e, t, n, r, i, o) {
    const a = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Hp.innerHTML = vg(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const s = Hp.content;
      if (r === "svg" || r === "mathml") {
        const l = s.firstChild;
        for (; l.firstChild; )
          s.appendChild(l.firstChild);
        s.removeChild(l);
      }
      t.insertBefore(s, n);
    }
    return [
      // first
      a ? a.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, B_ = /* @__PURE__ */ Symbol("_vtc");
function U_(e, t, n) {
  const r = e[B_];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ys = /* @__PURE__ */ Symbol("_vod"), _g = /* @__PURE__ */ Symbol("_vsh"), Ri = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ys] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Zo(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Zo(e, !0), r.enter(e)) : r.leave(e, () => {
      Zo(e, !1);
    }) : Zo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Zo(e, t);
  }
};
function Zo(e, t) {
  e.style.display = t ? e[Ys] : "none", e[_g] = !t;
}
const Y_ = /* @__PURE__ */ Symbol(""), q_ = /(?:^|;)\s*display\s*:/;
function X_(e, t, n) {
  const r = e.style, i = Jt(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (Jt(t))
        for (const a of t.split(";")) {
          const s = a.slice(0, a.indexOf(":")).trim();
          n[s] == null && Ns(r, s, "");
        }
      else
        for (const a in t)
          n[a] == null && Ns(r, a, "");
    for (const a in n)
      a === "display" && (o = !0), Ns(r, a, n[a]);
  } else if (i) {
    if (t !== n) {
      const a = r[Y_];
      a && (n += ";" + a), r.cssText = n, o = q_.test(n);
    }
  } else t && e.removeAttribute("style");
  Ys in e && (e[Ys] = o ? r.display : "", e[_g] && (r.display = "none"));
}
const Gp = /\s*!important$/;
function Ns(e, t, n) {
  if (st(n))
    n.forEach((r) => Ns(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = J_(e, t);
    Gp.test(n) ? e.setProperty(
      $i(r),
      n.replace(Gp, ""),
      "important"
    ) : e[r] = n;
  }
}
const Wp = ["Webkit", "Moz", "ms"], xc = {};
function J_(e, t) {
  const n = xc[t];
  if (n)
    return n;
  let r = wn(t);
  if (r !== "filter" && r in e)
    return xc[t] = r;
  r = Ml(r);
  for (let i = 0; i < Wp.length; i++) {
    const o = Wp[i] + r;
    if (o in e)
      return xc[t] = o;
  }
  return t;
}
const Kp = "http://www.w3.org/1999/xlink";
function Bp(e, t, n, r, i, o = iv(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Kp, t.slice(6, t.length)) : e.setAttributeNS(Kp, t, n) : n == null || o && !vm(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Pr(n) ? String(n) : n
  );
}
function Up(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? vg(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const s = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (s !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const s = typeof e[t];
    s === "boolean" ? n = vm(n) : n == null && s === "string" ? (n = "", a = !0) : s === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(i || t);
}
function ao(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Z_(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Yp = /* @__PURE__ */ Symbol("_vei");
function Q_(e, t, n, r, i = null) {
  const o = e[Yp] || (e[Yp] = {}), a = o[t];
  if (r && a)
    a.value = r;
  else {
    const [s, l] = eS(t);
    if (r) {
      const d = o[t] = rS(
        r,
        i
      );
      ao(e, s, d, l);
    } else a && (Z_(e, s, a, l), o[t] = void 0);
  }
}
const qp = /(?:Once|Passive|Capture)$/;
function eS(e) {
  let t;
  if (qp.test(e)) {
    t = {};
    let r;
    for (; r = e.match(qp); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : $i(e.slice(2)), t];
}
let kc = 0;
const tS = /* @__PURE__ */ Promise.resolve(), nS = () => kc || (tS.then(() => kc = 0), kc = Date.now());
function rS(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Nr(
      iS(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = nS(), n;
}
function iS(e, t) {
  if (st(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (i) => !i._stopped && r && r(i)
    );
  } else
    return t;
}
const Xp = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, oS = (e, t, n, r, i, o) => {
  const a = i === "svg";
  t === "class" ? U_(e, r, a) : t === "style" ? X_(e, n, r) : wl(t) ? xl(t) || Q_(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : aS(e, t, r, a)) ? (Up(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Bp(e, t, r, a, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (sS(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Jt(r))) ? Up(e, wn(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Bp(e, t, r, a));
};
function aS(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Xp(t) && ut(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Xp(t) && Jt(n) ? !1 : t in e;
}
function sS(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = wn(t);
  return Array.isArray(n) ? n.some((i) => wn(i) === r) : Object.keys(n).some((i) => wn(i) === r);
}
const Jp = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return st(t) ? (n) => ks(t, n) : t;
};
function lS(e) {
  e.target.composing = !0;
}
function Zp(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Mc = /* @__PURE__ */ Symbol("_assign");
function Qp(e, t, n) {
  return t && (e = e.trim()), n && (e = Qu(e)), e;
}
const eh = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e[Mc] = Jp(i);
    const o = r || i.props && i.props.type === "number";
    ao(e, t ? "change" : "input", (a) => {
      a.target.composing || e[Mc](Qp(e.value, n, o));
    }), (n || o) && ao(e, "change", () => {
      e.value = Qp(e.value, n, o);
    }), t || (ao(e, "compositionstart", lS), ao(e, "compositionend", Zp), ao(e, "change", Zp));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: o } }, a) {
    if (e[Mc] = Jp(a), e.composing) return;
    const s = (o || e.type === "number") && !/^0\d/.test(e.value) ? Qu(e.value) : e.value, l = t ?? "";
    if (s === l)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === l) || (e.value = l);
  }
}, cS = ["ctrl", "shift", "alt", "meta"], uS = {
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
  exact: (e, t) => cS.some((n) => e[`${n}Key`] && !t.includes(n))
}, Lt = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((i, ...o) => {
    for (let a = 0; a < t.length; a++) {
      const s = uS[t[a]];
      if (s && s(i, t)) return;
    }
    return e(i, ...o);
  }));
}, dS = /* @__PURE__ */ gn({ patchProp: oS }, K_);
let th;
function fS() {
  return th || (th = k_(dS));
}
const pd = ((...e) => {
  const t = fS().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = hS(r);
    if (!i) return;
    const o = t._component;
    !ut(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const a = n(i, !1, pS(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, t;
});
function pS(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function hS(e) {
  return Jt(e) ? document.querySelector(e) : e;
}
const mS = "PanoramaSuite.Debug.Diagnostics", gS = "PanoramaSuite.Debug.ExportDiagnostics", Pc = "pano_suite.diagnostics.v1", nh = "pano_suite.diagnostics.previous.v1", yS = 300, bS = 2e5, vS = 100, _S = 20, SS = 1e3, wS = 2, cs = 1024 * 1024;
function Qr(e, t = 2) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
function xS() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function kS() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: xS,
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
function MS(e = {}) {
  const t = { ...kS(), ...e };
  let n = !1, r = !1, i = null, o = null, a = 0, s = null, l = 0, d = 0;
  const u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), h = { created: 0, released: 0, collected: 0 }, g = { created: 0, collected: 0 }, b = t.FinalizationRegistry ? new t.FinalizationRegistry((oe) => {
    u.delete(oe), h.collected += 1;
  }) : null, _ = t.FinalizationRegistry ? new t.FinalizationRegistry((oe) => {
    f.delete(oe), g.collected += 1;
  }) : null, v = /* @__PURE__ */ new Set(), P = { created: 0, lost: 0, restored: 0, disposed: 0 }, W = [], D = /* @__PURE__ */ new Map();
  let O = { count: 0, maxMs: 0 }, S = /* @__PURE__ */ new Map(), $ = { count: 0, maxMs: 0 };
  const z = [];
  function te(oe, Ae, x = void 0) {
    W.push(x === void 0 ? { t: t.clock(), type: oe, label: Ae } : { t: t.clock(), type: oe, label: Ae, detail: x }), W.length > vS && W.shift();
  }
  function ie(oe, Ae, x, N, U) {
    if (!n || !N || !t.WeakRef) return N;
    const ue = { ref: new t.WeakRef(N), label: U };
    return oe.add(ue), Ae == null || Ae.register(N, ue), x.created += 1, N;
  }
  function G(oe, Ae = "") {
    return ie(u, b, h, oe, Ae);
  }
  function j(oe, Ae = "") {
    return ie(f, _, g, oe, Ae);
  }
  function K({ label: oe = "", width: Ae, height: x, offscreen: N = !1 } = {}) {
    const U = globalThis.OffscreenCanvas;
    let ue;
    return N && typeof U < "u" ? ue = new U(Ae, x) : (ue = t.document().createElement("canvas"), Ae !== void 0 && x !== void 0 && (ue.width = Ae, ue.height = x)), G(ue, oe);
  }
  function ce(oe) {
    oe.width = 0, oe.height = 0, n && (h.released += 1);
  }
  function Se(oe = t.document(), Ae = "") {
    var x;
    return j(((x = oe == null ? void 0 : oe.createElement) == null ? void 0 : x.call(oe, "video")) || null, Ae);
  }
  function be(oe, Ae) {
    if (!n || !oe) return () => {
    };
    const x = { label: Ae, lost: !1, disposed: !1 };
    v.add(x), P.created += 1, te("webgl-created", Ae);
    const N = () => {
      x.disposed || (x.lost = !0, P.lost += 1, te("webglcontextlost", Ae));
    }, U = () => {
      x.disposed || (x.lost = !1, P.restored += 1, te("webglcontextrestored", Ae));
    };
    return oe.addEventListener("webglcontextlost", N), oe.addEventListener("webglcontextrestored", U), () => {
      x.disposed || (x.disposed = !0, v.delete(x), P.disposed += 1, te("webgl-disposed", Ae));
    };
  }
  function ge(oe, Ae) {
    return D.set(oe, Ae), () => {
      D.get(oe) === Ae && D.delete(oe);
    };
  }
  function X() {
    return n ? t.now() : -1;
  }
  function A(oe) {
    if (oe < 0 || !n) return;
    const Ae = t.now() - oe;
    O.count += 1, O.maxMs = Math.max(O.maxMs, Ae);
  }
  function T(oe, Ae) {
    if (Ae < 0 || !n) return;
    const x = t.now() - Ae, N = S.get(oe) ?? { count: 0, maxMs: 0 };
    N.count += 1, N.maxMs = Math.max(N.maxMs, x), S.set(oe, N);
  }
  function de() {
    let oe = 0, Ae = 0, x = 0, N = [0, 0];
    const U = {};
    for (const ue of u) {
      const M = ue.ref.deref();
      if (!M) continue;
      oe += 1;
      const Z = M.width * M.height;
      Z > 0 && (Ae += 1), x += Z, Z > N[0] * N[1] && (N = [M.width, M.height]);
      const re = U[ue.label] ?? (U[ue.label] = [0, 0]);
      re[0] += 1, re[1] += Z;
    }
    return { ...h, alive: oe, sized: Ae, pixels: x, mb: Qr(x * 4 / cs, 1), largest: N, byLabel: U };
  }
  function he() {
    const oe = [];
    let Ae = 0, x = 0;
    for (const N of f) {
      const U = N.ref.deref();
      if (!U) continue;
      Ae += 1;
      const ue = !U.paused && !U.ended;
      ue && (x += 1), oe.length < _S && oe.push({
        label: N.label,
        playing: ue,
        src: !!(U.currentSrc || U.src),
        size: [U.videoWidth || 0, U.videoHeight || 0],
        ready: U.readyState ?? 0,
        connected: !!U.isConnected
      });
    }
    return { ...g, alive: Ae, playing: x, list: oe };
  }
  function xe() {
    const oe = t.now(), Ae = t.memory(), x = {
      t: t.clock(),
      heap: Ae ? { used: Qr(Ae.usedJSHeapSize / cs, 1), total: Qr(Ae.totalJSHeapSize / cs, 1), limit: Qr(Ae.jsHeapSizeLimit / cs, 1) } : null,
      canvas: de(),
      webgl: { ...P, alive: [...v].filter((N) => !N.lost).length },
      video: he(),
      frame: { count: O.count, maxMs: Qr(O.maxMs), longTasks: $.count, longTaskMaxMs: Qr($.maxMs) },
      renders: Object.fromEntries([...S].map(([N, U]) => [N, { count: U.count, maxMs: Qr(U.maxMs) }])),
      sources: Object.fromEntries([...D].map(([N, U]) => [N, U()])),
      costMs: Qr(d, 3)
    };
    return O = { count: 0, maxMs: 0 }, S = /* @__PURE__ */ new Map(), $ = { count: 0, maxMs: 0 }, z.push({ record: x, text: JSON.stringify(x) }), z.length > yS && z.shift(), l += 1, l % wS === 0 && se(), d = t.now() - oe, x;
  }
  function He(oe = bS) {
    const Ae = JSON.stringify({ ...o, events: W }).slice(0, -1);
    let x = oe - Ae.length - 14, N = z.length;
    for (; N > 0 && x - z[N - 1].text.length - 1 >= 0; )
      N -= 1, x -= z[N].text.length + 1;
    return `${Ae},"records":[${z.slice(N).map((U) => U.text).join(",")}]}`;
  }
  function se() {
    if (!o) return;
    const oe = t.storage();
    if (oe) {
      o.savedAt = t.clock();
      try {
        oe.setItem(Pc, He());
      } catch {
      }
    }
  }
  function R() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", se();
  }
  function ae() {
    var U;
    if (r) return i;
    r = !0;
    const oe = t.storage();
    if (!oe) return null;
    let Ae = null;
    try {
      if (Ae = oe.getItem(Pc), Ae === null) {
        const ue = oe.getItem(nh);
        return i = ue === null ? null : JSON.parse(ue), i;
      }
      oe.setItem(nh, Ae), oe.removeItem(Pc), i = JSON.parse(Ae);
    } catch {
      return i;
    }
    const x = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], N = x.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${x.length} records kept. Its last records:`,
      JSON.stringify(N)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((U = x.at(-1)) == null ? void 0 : U.t) || 0).toISOString()}; ${x.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(N)
    ), i;
  }
  function me(oe) {
    const Ae = oe === !0;
    if (ae(), Ae !== n) {
      if (n = Ae, n) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, z.length = 0, s = t.observeLongTasks((x) => {
          for (const N of x)
            $.count += 1, $.maxMs = Math.max($.maxMs, N.duration);
        }), t.addUnload(R), a = t.setInterval(xe, SS), se();
        return;
      }
      t.clearInterval(a), a = 0, s == null || s(), s = null, t.removeUnload(R), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", se();
    }
  }
  function Ne() {
    return {
      exportedAt: t.clock(),
      enabled: n,
      current: o ? { ...o, events: [...W], records: z.map((oe) => oe.record) } : null,
      previous: i
    };
  }
  function Te() {
    const oe = t.document(), Ae = new Blob([JSON.stringify(Ne(), null, 1)], { type: "application/json" }), x = URL.createObjectURL(Ae), N = oe.createElement("a");
    N.href = x, N.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, N.click(), setTimeout(() => URL.revokeObjectURL(x), 0);
  }
  return {
    get enabled() {
      return n;
    },
    createCanvas: K,
    releaseCanvas: ce,
    trackCanvas: G,
    createVideo: Se,
    trackVideo: j,
    watchContext: be,
    addSource: ge,
    frameStart: X,
    frameEnd: A,
    renderEnd: T,
    sample: xe,
    serialize: He,
    recoverPrevious: ae,
    setEnabled: me,
    exportData: Ne,
    download: Te
  };
}
const Cn = MS(), mn = Cn.createCanvas, pu = Cn.releaseCanvas, Nc = Cn.trackCanvas, Dl = Cn.createVideo, rh = Cn.trackVideo, PS = Cn.addSource, NS = Cn.frameStart, AS = Cn.frameEnd;
function Sg(e, t) {
  const n = Cn.watchContext(e.canvas, t), r = Cn.addSource(`three.${t}`, () => e.stats()), i = (o) => (a) => {
    const s = Cn.frameStart(), l = o(a);
    return Cn.renderEnd(t, s), l;
  };
  return {
    ...e,
    render: i(e.render),
    renderUnwrap: i(e.renderUnwrap),
    // A view let go because its context was lost ({ lost: true }) stays counted as that context's until it
    // is disposed again, so the context's restore is counted too.
    dispose(o) {
      e.dispose(o), !(o != null && o.lost) && (r(), n());
    }
  };
}
const CS = {
  id: mS,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Cn.setEnabled(e === !0)
}, ih = {
  id: gS,
  label: "Export Panorama Suite diagnostics",
  function: () => Cn.download()
};
function so(e, t) {
  const n = mn({ label: "paint.surface" });
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function IS() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function oh(e, t = 8) {
  var u;
  const n = (u = e == null ? void 0 : e.getContext) == null ? void 0 : u.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || i < 1) return null;
  const o = n.getImageData(0, 0, r, i).data;
  let a = r, s = i, l = -1, d = -1;
  for (let f = 0; f < i; f += 1)
    for (let h = 0; h < r; h += 1)
      o[(f * r + h) * 4 + 3] <= t || (h < a && (a = h), f < s && (s = f), h > l && (l = h), f > d && (d = f));
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
function hd(e, t) {
  return mn({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function ni(e, t, n) {
  if (!e) return so(t, n);
  const r = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== i) && (e.canvas.width = r, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Ut(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function ln(e) {
  e.displayDirty = !0, e.revision += 1;
}
let Ac = null, Cc = null, ah = null, sh = null, Bt = null, Qo = null;
function ES() {
  if (Cc) return Cc;
  const e = 6, t = 17, n = mn({ label: "paint.hatch" });
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), Cc = n, n;
}
function Ic(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Ac = ni(Ac, n, r);
  const i = Ac;
  Ut(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", sh !== i.ctx && (ah = i.ctx.createPattern(ES(), "repeat"), sh = i.ctx), i.ctx.fillStyle = ah, i.ctx.fillRect(0, 0, n, r), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function OS(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function FS(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function TS(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * i) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function DS(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const $t = /* @__PURE__ */ new Map(), md = 128;
function LS(e, t, n, r, i, o) {
  const a = Math.max(1, Math.round(e)), s = Math.max(0, Math.min(1, t)), l = `${a}:${s.toFixed(2)}:${n}:${r}:${i}:${o.toFixed(3)}`;
  if ($t.has(l)) {
    const W = $t.get(l);
    return $t.delete(l), $t.set(l, W), W;
  }
  $t.size >= md && $t.delete($t.keys().next().value);
  const d = a * 2 + 2, u = a + 1, f = hd(d, d), h = f.getContext("2d"), g = s * a, b = a + 1, _ = `rgba(${n},${r},${i},${o})`, v = `rgba(${n},${r},${i},0)`, P = h.createRadialGradient(u, u, g, u, u, b);
  return P.addColorStop(0, _), P.addColorStop(1, v), h.fillStyle = P, h.fillRect(0, 0, d, d), $t.set(l, f), f;
}
function RS(e, t, n, r, i, o, a) {
  const { r: s, g: l, b: d, a: u } = r, f = Math.max(2, Math.ceil(e) * 2), h = Math.max(2, Math.ceil(t) * 2), g = Math.max(0, i), b = Math.max(0, Math.min(0.99, o)), _ = Math.max(0, Math.min(1, a ?? 0)), v = `chisel:${f}:${h}:${n.toFixed(2)}:${s}:${l}:${d}:${u.toFixed(3)}:${g.toFixed(2)}:${b.toFixed(2)}:${_.toFixed(2)}`;
  if ($t.has(v)) {
    const te = $t.get(v);
    return $t.delete(v), $t.set(v, te), te;
  }
  $t.size >= md && $t.delete($t.keys().next().value);
  const P = hd(f, h), W = P.getContext("2d"), D = W.createImageData(f, h), O = D.data, S = Math.max(0, e - t), $ = Math.max(0, Math.min(1, n)), z = 1 + g;
  for (let te = 0; te < h; te++)
    for (let ie = 0; ie < f; ie++) {
      const G = ie + 0.5 - e, j = te + 0.5 - t, K = Math.max(Math.abs(G) - S, 0), Se = Math.hypot(K, j) / t;
      if (Se >= 1) continue;
      const be = Se <= $ ? 1 : Math.max(0, (1 - Se) / Math.max(1e-4, 1 - $)), ge = 1 - Se, X = 1 + g * (1 - ge) * (1 - ge), A = 1 - b * ge * ge, T = X * A / z;
      let de = 1;
      if (_ > 0) {
        const He = Math.floor((j + t) / 1.5), se = Math.floor((G + e) / 8), R = Ti(vo(He * 41 + 500, se * 19 + 300));
        de = 1 - _ * 0.42 * R;
      }
      const he = Math.round(255 * Math.min(1, u * be * T * de));
      if (he <= 0) continue;
      const xe = (te * f + ie) * 4;
      O[xe] = s, O[xe + 1] = l, O[xe + 2] = d, O[xe + 3] = he;
    }
  return W.putImageData(D, 0, 0), $t.set(v, P), P;
}
function vo(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i >>> 0;
}
function Ti(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function VS(e, t, n, r, i, o, a) {
  const s = e + 0.5 - n, l = t + 0.5 - r, d = Math.max(0, n - r), u = Math.max(Math.abs(s) - d, 0), f = Math.hypot(u, l) / r;
  if (f >= 1) return 0;
  const h = Ti(vo(e * 17 + 3, t * 13 + 7)), g = f + o * 0.22 * (h - 0.5);
  if (g >= 1) return 0;
  const b = g <= i ? 1 : Math.max(0, (1 - g) / Math.max(1e-4, 1 - i)), _ = $S(e, t, s, l, n, r), v = o * 0.55;
  if (_ < v) return 0;
  const W = 0.45 + 0.55 * ((_ - v) / Math.max(1e-4, 1 - v));
  return Math.round(255 * Math.min(1, a * b * W));
}
function $S(e, t, n, r, i, o) {
  const a = Math.floor((n + i) / 3), s = Math.floor((r + o) / 2), l = Ti(vo(a * 13 + 700, s * 17 + 400)), d = Math.floor((n + i) / 1.5), u = Math.floor((r + o) / 1.5), f = Ti(vo(d * 23 + 800, u * 29 + 500)), h = Ti(vo(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + f * 0.3 + h * 0.15;
}
function zS(e, t, n, r, i) {
  const { r: o, g: a, b: s, a: l } = r, d = Math.max(2, Math.ceil(e) * 2), u = Math.max(2, Math.ceil(t) * 2), f = Math.max(0, Math.min(1, i)), h = `crayon:${d}:${u}:${n.toFixed(2)}:${o}:${a}:${s}:${l.toFixed(3)}:${f.toFixed(2)}`;
  if ($t.has(h)) {
    const W = $t.get(h);
    return $t.delete(h), $t.set(h, W), W;
  }
  $t.size >= md && $t.delete($t.keys().next().value);
  const g = hd(d, u), b = g.getContext("2d"), _ = b.createImageData(d, u), v = _.data, P = Math.max(0, Math.min(1, n));
  for (let W = 0; W < u; W++)
    for (let D = 0; D < d; D++) {
      const O = VS(D, W, e, t, P, f, l);
      if (O <= 0) continue;
      const S = (W * d + D) * 4;
      v[S] = o, v[S + 1] = a, v[S + 2] = s, v[S + 3] = O;
    }
  return b.putImageData(_, 0, 0), $t.set(h, g), g;
}
function wg(e, t, n) {
  var _, v;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), i = TS(t, n), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), a = jS(t), s = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((_ = t == null ? void 0 : t.angle) == null ? void 0 : _.value) ?? 0), d = DS(t, i), u = String(((v = t == null ? void 0 : t.targetSpace) == null ? void 0 : v.viewMode) || ""), f = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && u !== "unwrap", h = t == null ? void 0 : t.scatter, g = h ? { radius: Number(h.radius ?? 1.5), count: Math.max(1, Math.round(h.count ?? 6)) } : null;
  let b;
  if (r === "chisel") {
    const P = i * s, W = i, D = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), O = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), S = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    b = RS(P, W, o, a, D, O, S);
  } else if (r === "crayon") {
    const P = i * s, W = i, D = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    b = zS(P, W, o, a, D);
  } else
    b = LS(i, o, a.r, a.g, a.b, a.a);
  return { ctx: e, stampTex: b, radiusPx: i, spacingPx: d, desc: n, aspect: s, angle: l, stampKind: r, scatter: g, latitudeCorrection: f };
}
function jS(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), o = Math.max(0, Math.min(1, Number(r.a ?? 1))) * i;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(r.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(r.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(r.b || 0))) * 255),
    a: o
  };
}
function HS(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${i})`;
}
function lh(e, t, n, r, i) {
  const o = e.angle, a = e.desc.width;
  function s(d, u) {
    o === 0 ? e.ctx.drawImage(e.stampTex, d - i, u - r, i * 2, r * 2) : (e.ctx.save(), e.ctx.translate(d, u), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -r, i * 2, r * 2), e.ctx.restore());
  }
  s(t, n);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + r * Math.abs(Math.sin(o));
  t - l < 0 && s(t + a, n), t + l > a && s(t - a, n);
}
function gd(e, t, n, r) {
  const i = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: d, count: u } = e.scatter, f = d * e.radiusPx * i, h = vo(t, n);
    for (let g = 0; g < u; g++) {
      const b = Ti(h + g * 2) * Math.PI * 2, _ = Math.sqrt(Ti(h + g * 2 + 1)) * f, v = t + Math.cos(b) * _, P = n + Math.sin(b) * _, W = Math.max(0.5, e.radiusPx * i * 0.48), D = (0.5 - P / Math.max(1, e.desc.height)) * Math.PI, O = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(D)) : 1, S = W * e.aspect * O;
      lh(e, v, P, W, S);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), a = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, s = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(a)) : 1, l = o * e.aspect * s;
  lh(e, t, n, o, l);
}
function ch(e, t, n) {
  const r = FS(t);
  if (!e || r.length === 0) return;
  const i = n.width, o = n.height, a = wg(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const s = [];
  for (let h = 0; h < r.length; h++) {
    let g = Number(r[h].u || 0) * i;
    const b = Number(r[h].v || 0) * o;
    h > 0 && Math.abs(g - s[h - 1].x) > i * 0.5 && (g += g < s[h - 1].x ? i : -i), s.push({ x: g, y: b });
  }
  if (gd(a, s[0].x, s[0].y, 1), s.length === 1) {
    e.restore();
    return;
  }
  let l = s[0], d = s[0], u = s[0], f = 0;
  for (let h = 1; h < s.length; h++) {
    const g = s[h], b = { x: (d.x + g.x) * 0.5, y: (d.y + g.y) * 0.5 };
    h === 1 ? f = Ca(a, u.x, u.y, b.x, b.y, f) : f = qs(a, l, u, b, g, f), l = d, d = g, u = b;
  }
  s.length === 2 ? Ca(a, u.x, u.y, d.x, d.y, f) : qs(a, l, u, d, d, f), e.restore();
}
function As(e, t, n) {
  var f;
  const r = Array.isArray((f = t == null ? void 0 : t.geometry) == null ? void 0 : f.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const i = n.width, o = n.height, a = HS(t), s = [];
  let l = 1 / 0, d = -1 / 0;
  for (let h = 0; h < r.length; h++) {
    const g = OS(r[h]);
    let b = Number(g.x || 0) * i;
    h > 0 && Math.abs(b - s[h - 1].x) > i * 0.5 && (b += b < s[h - 1].x ? i : -i), s.push({ x: b, y: Number(g.y || 0) * o }), b < l && (l = b), b > d && (d = b);
  }
  function u(h) {
    e.beginPath(), e.moveTo(s[0].x + h, s[0].y);
    for (let g = 1; g < s.length; g++) e.lineTo(s[g].x + h, s[g].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = a, u(0), l < 0 && u(i), d > i && u(-i), e.restore();
}
function us(e, t, n) {
  var a;
  if (String(((a = t == null ? void 0 : t.geometry) == null ? void 0 : a.geometryKind) || "") === "lasso_fill") {
    As(e, t, n);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? ch(e, t, n) : (Qo = ni(Qo, n.width, n.height), Ut(Qo), ch(Qo.ctx, t, n), e.save(), e.globalAlpha = o, e.drawImage(Qo.canvas, 0, 0), e.restore());
}
function _i(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Ca(e, t, n, r, i, o) {
  const a = r - t, s = i - n, l = Math.hypot(a, s);
  if (l < 1e-9) return o;
  let d = e.spacingPx - o;
  for (; d <= l; ) {
    const u = d / l;
    gd(e, t + a * u, n + s * u, 1), d += e.spacingPx;
  }
  return l - d + e.spacingPx;
}
function qs(e, t, n, r, i, o) {
  const s = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, d = Math.sqrt(Math.hypot(i.x - r.x, i.y - r.y)) + 1e-4, u = 0, f = s, h = f + l, g = h + d, b = h - f, _ = 16;
  let v = o, P = n.x, W = n.y;
  for (let D = 1; D <= _; D++) {
    const O = f + b * D / _, S = ((f - O) * t.x + (O - u) * n.x) / (f - u), $ = ((f - O) * t.y + (O - u) * n.y) / (f - u), z = ((h - O) * n.x + (O - f) * r.x) / (h - f), te = ((h - O) * n.y + (O - f) * r.y) / (h - f), ie = ((g - O) * r.x + (O - h) * i.x) / (g - h), G = ((g - O) * r.y + (O - h) * i.y) / (g - h), j = ((h - O) * S + (O - u) * z) / (h - u), K = ((h - O) * $ + (O - u) * te) / (h - u), ce = ((g - O) * z + (O - f) * ie) / (g - f), Se = ((g - O) * te + (O - f) * G) / (g - f), be = ((h - O) * j + (O - f) * ce) / (h - f), ge = ((h - O) * K + (O - f) * Se) / (h - f);
    v = Ca(e, P, W, be, ge, v), P = be, W = ge;
  }
  return v;
}
function GS(e, t, n, r) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, a = o.width, s = n * o.height, l = e.activeStroke;
  let d = t * a;
  if (l && Math.abs(d - l.prev.x) > a * 0.5 && (d += d < l.prev.x ? a : -a), !l) {
    const g = wg(i, r, o), b = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), _ = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), v = String((r == null ? void 0 : r.toolKind) || "") === "eraser", P = String((r == null ? void 0 : r.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", gd(g, d, s, 1), e.activeStroke = {
      pprev: { x: d, y: s },
      prev: { x: d, y: s },
      lastMidX: d,
      lastMidY: s,
      stampTex: g.stampTex,
      radiusPx: g.radiusPx,
      spacingPx: g.spacingPx,
      aspect: g.aspect,
      angle: g.angle,
      stampKind: g.stampKind,
      scatter: g.scatter,
      latitudeCorrection: g.latitudeCorrection,
      strokeOpacity: b,
      velocityWidthFactor: _,
      distSinceStamp: 0,
      isEraser: v,
      layerKind: P,
      pointCount: 1
    }, ln(e);
    return;
  }
  const u = (l.prev.x + d) * 0.5, f = (l.prev.y + s) * 0.5;
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
  l.pointCount === 1 ? l.distSinceStamp = Ca(h, l.lastMidX, l.lastMidY, u, f, l.distSinceStamp) : l.distSinceStamp = qs(
    h,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: u, y: f },
    { x: d, y: s },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: d, y: s }, l.lastMidX = u, l.lastMidY = f, l.pointCount++, ln(e);
}
function yd(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, i = /* @__PURE__ */ new Map(), o = so(t, n), a = {
    descriptor: r,
    committedMask: so(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    // Whether a mask stroke was drawn since the last rebuild; until then the committed mask is empty.
    painted: !1,
    lassoPreviewActive: !1
  }, s = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: so(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = so(t, n);
  let d = null, u = "", f = null;
  const h = /* @__PURE__ */ new Map();
  let g = null;
  function b(ce) {
    return {
      actionGroupId: ce,
      descriptor: r,
      committedPaint: so(t, n),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function _(ce) {
    let Se = i.get(ce);
    return Se || (Se = b(ce), i.set(ce, Se)), Se;
  }
  function v(ce) {
    return u === "mask" ? a : d ? _(d) : s;
  }
  function P(ce) {
    var T;
    const Se = !f || f.length !== ce.length || ce.some((de, he) => de !== f[he]), be = u === "paint" && ((T = d ? i.get(d) : s) == null ? void 0 : T.activeStroke) || null;
    let ge = a.displayDirty || s.displayDirty || Se;
    for (const de of ce) {
      const he = i.get(de);
      if (he != null && he.displayDirty) {
        ge = !0;
        break;
      }
    }
    if (be && (ge = !0), !ge) return;
    a.displayDirty = !1, s.displayDirty = !1;
    for (const de of ce) {
      const he = i.get(de);
      he && (he.displayDirty = !1);
    }
    f = [...ce];
    const X = l.ctx;
    Ut(l);
    const A = !!(be != null && be.isEraser);
    for (const de of ce) {
      const he = i.get(de);
      if (!he) continue;
      const He = d === he.actionGroupId && u === "paint" ? he.activeStroke : null;
      if (A)
        Bt = ni(Bt, t, n), Ut(Bt), Bt.ctx.drawImage(he.committedPaint.canvas, 0, 0), _i(Bt.ctx, o.canvas), X.drawImage(Bt.canvas, 0, 0);
      else if (X.drawImage(he.committedPaint.canvas, 0, 0), He) {
        const se = he.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, He.strokeOpacity ?? 1));
        X.save(), X.globalAlpha = se, X.drawImage(o.canvas, 0, 0), X.restore();
      }
    }
  }
  function W(ce) {
    var be, ge, X, A, T;
    for (const de of i.values())
      Ut(de.committedPaint), Ut(de.currentStroke), de.activeStroke = null, ln(de);
    Ut(a.committedMask), Ut(a.currentStroke), a.activeStroke = null, a.painted = !1, h.clear(), ln(a), ln(s), f = null;
    const Se = [
      ...Array.isArray((ge = (be = ce == null ? void 0 : ce.painting) == null ? void 0 : be.paint) == null ? void 0 : ge.strokes) ? ce.painting.paint.strokes : [],
      ...Array.isArray((A = (X = ce == null ? void 0 : ce.painting) == null ? void 0 : X.mask) == null ? void 0 : A.strokes) ? ce.painting.mask.strokes : []
    ];
    for (const de of Se) {
      if (((T = de == null ? void 0 : de.targetSpace) == null ? void 0 : T.kind) !== "ERP_GLOBAL") continue;
      const he = String((de == null ? void 0 : de.layerKind) || "paint"), He = String((de == null ? void 0 : de.toolKind) || "pen") === "eraser";
      if (he === "mask") {
        const se = a.descriptor;
        He ? (Bt = ni(Bt, se.width, se.height), Ut(Bt), us(Bt.ctx, de, se), _i(a.committedMask.ctx, Bt.canvas)) : (us(a.committedMask.ctx, de, se), a.painted = !0);
        continue;
      }
      if (He) {
        Bt = ni(Bt, r.width, r.height), Ut(Bt), us(Bt.ctx, de, r);
        for (const se of i.values())
          _i(se.committedPaint.ctx, Bt.canvas), ln(se);
      } else {
        const se = String((de == null ? void 0 : de.actionGroupId) || "__default__"), R = _(se), ae = R.descriptor;
        us(R.committedPaint.ctx, de, ae), ln(R);
      }
    }
    P([...i.keys()]);
  }
  function D(ce, Se) {
    u = String((ce == null ? void 0 : ce.layerKind) || "");
    const be = String((ce == null ? void 0 : ce.toolKind) || "") === "eraser";
    if (u === "mask")
      d = null, Ut(a.currentStroke), a.activeStroke = null, ln(a);
    else {
      const ge = be ? s : _(String((ce == null ? void 0 : ce.actionGroupId) || "__default__"));
      d = be ? "" : String((ce == null ? void 0 : ce.actionGroupId) || "__default__"), Ut(ge.currentStroke), ge.activeStroke = null, ln(ge);
    }
  }
  function O(ce, Se) {
    var he;
    const be = String((ce == null ? void 0 : ce.layerKind) || "paint"), ge = String((ce == null ? void 0 : ce.toolKind) || "") === "eraser", X = be === "mask" ? a : ge ? s : _(String((ce == null ? void 0 : ce.actionGroupId) || d || "__default__")), A = X.activeStroke, T = X.descriptor;
    if (A && A.pointCount > 1) {
      const xe = X.currentStroke.ctx;
      xe.globalCompositeOperation = "source-over";
      const He = {
        ctx: xe,
        stampTex: A.stampTex,
        radiusPx: A.radiusPx,
        spacingPx: A.spacingPx,
        desc: T,
        aspect: A.aspect,
        angle: A.angle,
        stampKind: A.stampKind,
        scatter: A.scatter,
        latitudeCorrection: A.latitudeCorrection
      };
      A.pointCount === 2 ? Ca(He, A.lastMidX, A.lastMidY, A.prev.x, A.prev.y, A.distSinceStamp) : qs(He, A.pprev, { x: A.lastMidX, y: A.lastMidY }, A.prev, A.prev, A.distSinceStamp);
    }
    X.lassoPreviewActive && (Ut(X.currentStroke), As(X.currentStroke.ctx, ce, T), X.lassoPreviewActive = !1);
    const de = be === "mask" ? a.committedMask : X.committedPaint;
    if (ge && be === "paint")
      for (const xe of i.values())
        _i(xe.committedPaint.ctx, X.currentStroke.canvas), ln(xe);
    else if (ge)
      _i(de.ctx, X.currentStroke.canvas);
    else {
      be === "mask" && (a.painted = !0);
      const xe = Math.max(0, Math.min(1, (A == null ? void 0 : A.strokeOpacity) ?? 1));
      de.ctx.save(), de.ctx.globalAlpha = xe, de.ctx.drawImage(X.currentStroke.canvas, 0, 0), de.ctx.restore();
    }
    IS() && (String((ce == null ? void 0 : ce.toolKind) || ""), String((T == null ? void 0 : T.kind) || ""), Number((T == null ? void 0 : T.width) || 0), Number((T == null ? void 0 : T.height) || 0), String(((he = ce == null ? void 0 : ce.targetSpace) == null ? void 0 : he.viewMode) || ""), Number((ce == null ? void 0 : ce.aspect) ?? 1), oh(X.currentStroke.canvas), oh(de.canvas), void 0), Ut(X.currentStroke), X.activeStroke = null, ln(X), h.clear(), d = null, u = "", P([...i.keys()]);
  }
  function S(ce) {
    if (u === "mask")
      Ut(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, ln(a);
    else if (u === "paint" && !d)
      Ut(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, ln(s);
    else if (d) {
      const Se = i.get(d);
      Se && (Ut(Se.currentStroke), Se.activeStroke = null, Se.lassoPreviewActive = !1, ln(Se));
    }
    h.clear(), d = null, u = "", P([...i.keys()]);
  }
  function $(ce, Se) {
    var ge;
    if (u = String((ce == null ? void 0 : ce.layerKind) || ""), String(((ge = ce == null ? void 0 : ce.geometry) == null ? void 0 : ge.geometryKind) || "") === "lasso_fill") {
      if (u === "mask")
        Ut(a.currentStroke), As(a.currentStroke.ctx, ce, a.descriptor), a.lassoPreviewActive = !0, ln(a);
      else {
        const X = String((ce == null ? void 0 : ce.toolKind) || "") === "eraser", A = X ? s : _(String((ce == null ? void 0 : ce.actionGroupId) || d || "__default__"));
        d = X ? "" : String((ce == null ? void 0 : ce.actionGroupId) || d || "__default__"), Ut(A.currentStroke), As(A.currentStroke.ctx, ce, A.descriptor), A.lassoPreviewActive = !0, ln(A);
      }
      P([...i.keys()]);
    }
  }
  function z(ce) {
    return P(ce ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: a.committedMask,
      descriptor: r
    };
  }
  function te(ce) {
    return i.get(String(ce)) ?? null;
  }
  function ie() {
    return [...i.keys()];
  }
  function G(ce) {
    var xe;
    const Se = i.get(String(ce));
    if (!Se) return null;
    const be = u === "paint" && d === Se.actionGroupId, ge = u === "paint" && ((xe = d ? i.get(d) : s) == null ? void 0 : xe.activeStroke) || null, X = !!(ge != null && ge.isEraser), A = be ? Se.activeStroke : null;
    if (!X && !A) return Se.committedPaint.canvas;
    const T = `${Se.revision}:${s.revision}:${X}`, de = h.get(Se.actionGroupId);
    if ((de == null ? void 0 : de.key) === T) return de.surface.canvas;
    const he = ni((de == null ? void 0 : de.surface) ?? null, t, n);
    return Ut(he), he.ctx.drawImage(Se.committedPaint.canvas, 0, 0), X ? _i(he.ctx, o.canvas) : (he.ctx.save(), he.ctx.globalAlpha = Se.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, A.strokeOpacity ?? 1)), he.ctx.drawImage(o.canvas, 0, 0), he.ctx.restore()), h.set(Se.actionGroupId, { key: T, surface: he }), he.canvas;
  }
  function j() {
    const ce = u === "mask" ? a.activeStroke : null;
    return !a.painted && (!ce || ce.isEraser) ? null : `${a.revision}:${!!ce}`;
  }
  function K() {
    const ce = j();
    if (ce === null)
      return g = null, null;
    if ((g == null ? void 0 : g.key) === ce) return g.surface.canvas;
    const Se = ni((g == null ? void 0 : g.surface) ?? null, t, n);
    Ut(Se);
    const be = u === "mask" ? a.activeStroke : null;
    return be != null && be.isEraser ? (Bt = ni(Bt, t, n), Ut(Bt), Bt.ctx.drawImage(a.committedMask.canvas, 0, 0), _i(Bt.ctx, o.canvas), Ic(Se.ctx, Bt.canvas)) : (Ic(Se.ctx, a.committedMask.canvas), be && Ic(Se.ctx, o.canvas)), g = { key: ce, surface: Se }, Se.canvas;
  }
  return {
    rebuildCommitted: W,
    beginStroke: D,
    appendStrokePoint: GS,
    updateActiveStroke: $,
    commitActiveStroke: O,
    cancelActiveStroke: S,
    getErpTarget: z,
    ensureTarget: v,
    getGroupTarget: te,
    getGroupDisplayCanvas: G,
    getMaskDisplayCanvas: K,
    getMaskDisplayRevision: j,
    getAllGroupIds: ie
  };
}
function Fe(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function zt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function bd(e, t) {
  let n = zt(t) - zt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const hu = 3;
function ea(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Xs(e, t = 0) {
  const n = ea(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = ea(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const i = ea(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = ea(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(ea(t) || 0);
}
function xg(e) {
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
const uh = Math.PI / 180, dh = 0.12, WS = hu, KS = 35, BS = 140, aa = 100, US = 20, fh = 0.8;
function YS(e, t, n) {
  const r = Math.max(1, Number(t || 1)), i = Math.max(1, Number(n || 1)), o = Fe(Number(e || aa), 1, 179) * uh;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / r)) / uh;
}
function vd(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: aa })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), a = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), s = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function d(W, D = null) {
    s && s(W, D);
  }
  function u(W, D, O = null, S = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(W || 0), l.drag.lastY = Number(D || 0), l.drag.lastTs = Number(S || performance.now()), l.drag.pointerId = O, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], d("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: O }), !0;
  }
  function f(W, D, O = "pano", S = performance.now()) {
    if (!l.drag.active) return !1;
    const $ = Number(S || performance.now()), z = Number(W), te = Number(D), ie = z - l.drag.lastX, G = te - l.drag.lastY;
    l.drag.lastX = z, l.drag.lastY = te, l.drag.lastTs = $;
    const j = r() || { x: 1, y: 1 }, K = Number(j.x || 1), ce = Number(j.y || 1), Se = { ...t() };
    let be = 0, ge = 0;
    if (O === "unwrap") {
      const A = i() || { w: 1, h: 1 }, T = Math.max(1, Number(A.w || 1)), de = Math.max(1, Number(A.h || 1)), he = ie / T, xe = G / de;
      be = -he * 360 * K, ge = xe * 180 * ce;
    } else {
      const A = o() || { w: 0, h: 0 }, T = Math.max(1, Number(A.w || 0)), de = Math.max(1, Number(A.h || 0));
      if (T > 1 && de > 1) {
        const he = Fe(Number(Se.fov || aa), 1, 179), xe = Fe(YS(he, T, de), 0.1, 179);
        be = -(ie / T) * he * K, ge = G / de * xe * ce;
      } else
        be = -ie * dh * K, ge = G * dh * ce;
    }
    Se.yaw = zt(Number(Se.yaw || 0) + be), Se.pitch = Fe(Number(Se.pitch || 0) + ge, -89.9, 89.9), n(Se), l.velHistory.push({ ts: $, yaw: Se.yaw, pitch: Se.pitch });
    let X = 0;
    for (; X < l.velHistory.length - 1 && l.velHistory[X].ts < $ - 100; ) X++;
    return X > 0 && l.velHistory.splice(0, X), l.inertia.active = !1, l.inertia.lastTs = $, a(), d("drag", { phase: "move", dx: ie, dy: G, dYaw: be, dPitch: ge }), !0;
  }
  function h(W = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const D = Number(W || performance.now());
    l.drag.lastTs = D;
    const O = l.velHistory.filter(($) => D - $.ts <= 80);
    if (O.length >= 2) {
      const $ = O[0], z = O.at(-1), te = Math.max(1e-3, (z.ts - $.ts) / 1e3);
      let ie = z.yaw - $.yaw;
      ie > 180 && (ie -= 360), ie < -180 && (ie += 360), l.inertia.vx = ie / te, l.inertia.vy = (z.pitch - $.pitch) / te;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const S = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = S > US, l.inertia.lastTs = D, d("drag", { phase: "end", speed: S, inertiaActive: l.inertia.active }), !0;
  }
  function g(W = performance.now()) {
    if (!l.inertia.active) return !1;
    const D = Number(W || performance.now()), O = Math.max(1e-3, (D - (l.inertia.lastTs || D)) / 1e3);
    l.inertia.lastTs = D;
    const S = { ...t() };
    S.yaw = zt(Number(S.yaw || 0) + l.inertia.vx * O), S.pitch = Fe(Number(S.pitch || 0) + l.inertia.vy * O, -89.9, 89.9);
    const $ = Math.exp(-5.5 * O);
    return l.inertia.vx *= $, l.inertia.vy *= $, Math.abs(l.inertia.vx) < fh && Math.abs(l.inertia.vy) < fh && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), n(S), a(), l.inertia.active;
  }
  function b() {
    const W = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], W;
  }
  function _(W) {
    const D = Math.sign(Number(W || 0));
    if (!D) return !1;
    const O = { ...t() }, S = Number(O.fov || aa);
    return O.fov = Fe(S + D * WS, KS, BS), n(O), a(), d("wheel", { deltaSign: D, fovBefore: S, fovAfter: O.fov }), !0;
  }
  function v(W, D = 0) {
    return _(Xs(W, D));
  }
  function P() {
    n({ yaw: 0, pitch: 0, fov: aa }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, a();
  }
  return {
    state: l,
    startDrag: u,
    moveDrag: f,
    endDrag: h,
    stepInertia: g,
    stopMotion: b,
    applyWheel: _,
    applyWheelEvent: v,
    resetView: P
  };
}
const Pt = Math.PI / 180, nn = 180 / Math.PI;
function Un(e, t, n) {
  return { x: e, y: t, z: n };
}
function Js(e, t) {
  return Un(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Zs(e, t) {
  return Un(e.x * t, e.y * t, e.z * t);
}
function Ec(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function _d(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Un(e.x / t, e.y / t, e.z / t);
}
function An(e, t) {
  const n = e * Pt, r = t * Pt, i = Math.cos(r);
  return Un(i * Math.sin(n), Math.sin(r), i * Math.cos(n));
}
function Oo(e, t, n = 0) {
  const r = Number(e || 0) * Pt, i = Number(t || 0) * Pt, o = n * Pt, a = Math.cos(r), s = Math.sin(r), l = Math.cos(i), d = Math.sin(i), u = Math.cos(o), f = Math.sin(o);
  return {
    right: Un(
      a * u - s * d * f,
      l * f,
      -s * u - a * d * f
    ),
    up: Un(
      -a * f - s * d * u,
      l * u,
      s * f - a * d * u
    ),
    fwd: Un(s * l, d, a * l)
  };
}
function Qs(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function Ct(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function qS() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function XS(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const i = String(r.actionGroupId || r.id || "").trim();
    if (!i || n.has(i)) continue;
    n.add(i);
    const o = Ct(r.z_index ?? r.zIndex, t.length);
    t.push({
      id: String(r.id || i),
      type: "strokeGroup",
      actionGroupId: i,
      z_index: Math.max(0, Math.round(o ?? t.length)),
      locked: r.locked === !0
    });
  }
  return t;
}
function JS(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function ZS(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = Ct(e.t, 0), r = Ct(e.widthScale, null), i = Ct(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = Ct(e.u, null), a = Ct(e.v, null);
    if (o == null || a == null) return null;
    const s = {
      targetKind: "ERP_GLOBAL",
      u: (o % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, a)),
      t: n
    };
    return r != null && (s.widthScale = Math.max(0, r)), i != null && (s.pressureLike = Math.max(0, i)), s;
  }
  if (t.kind === "FRAME_LOCAL") {
    const o = Ct(e.u, null), a = Ct(e.v, null);
    if (o == null || a == null) return null;
    const s = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: o,
      v: a,
      t: n
    };
    return r != null && (s.widthScale = Math.max(0, r)), i != null && (s.pressureLike = Math.max(0, i)), s;
  }
  return null;
}
function ds(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const i of e) {
    const o = ZS(i, t);
    if (!o) return null;
    r.push(o);
  }
  return r.length >= n ? r : null;
}
function QS(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const l = ds(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || n === "lasso_fill") return null;
  const o = ds(e.points, t, 1);
  if (!o) return null;
  const a = ds(e.rawPoints, t, 1), s = ds(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: a || o.map((l) => ({ ...l })),
    processedPoints: s || o.map((l) => ({ ...l }))
  };
}
function ew(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = JS(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), i = QS(e.geometry, n, r, t === "paint");
  if (!i) return null;
  const o = Ct(e.size, null), a = Ct(e.opacity, null);
  if (o == null || a == null) return null;
  const s = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!s || !l) return null;
  const d = Ct(e.radiusValue, null), u = String(e.radiusModel || "").trim() || null;
  let f = null;
  if (t === "paint") {
    const h = e.color;
    if (!h || typeof h != "object") return null;
    f = {
      r: Math.max(0, Math.min(1, Ct(h.r, 0))),
      g: Math.max(0, Math.min(1, Ct(h.g, 0))),
      b: Math.max(0, Math.min(1, Ct(h.b, 0))),
      a: Math.max(0, Math.min(1, Ct(h.a, 1)))
    };
  }
  return {
    id: s,
    actionGroupId: l,
    targetSpace: n,
    layerKind: t,
    toolKind: r,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, o),
    opacity: Math.max(0, Math.min(1, a)),
    hardness: Ct(e.hardness, null),
    flow: Ct(e.flow, null),
    spacing: Ct(e.spacing, null),
    createdAt: Math.trunc(Ct(e.createdAt, 0)),
    color: f,
    radiusModel: u,
    radiusValue: d == null ? null : Math.max(0, d),
    geometry: i
  };
}
function ph(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const i = ew(r, t);
    i && n.strokes.push(i);
  }
  return n;
}
function tw(e) {
  if (!e || typeof e != "object") return null;
  const t = Ct(e.u0, null), n = Ct(e.v0, null), r = Ct(e.u1, null), i = Ct(e.v1, null);
  if (t == null || n == null || r == null || i == null) return null;
  const o = (s) => Math.max(0, Math.min(1, s)), a = { u0: o(t), v0: o(n), u1: o(r), v1: o(i) };
  return a.u1 <= a.u0 || a.v1 <= a.v0 ? null : a;
}
function nw(e) {
  const t = e || {};
  return {
    du: Ct(t.du, 0) ?? 0,
    dv: Ct(t.dv, 0) ?? 0,
    rot_deg: Ct(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Ct(t.scale, 1) ?? 1)
  };
}
function rw(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = tw(e.bbox);
  return o ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, Ct(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: nw(e.transform)
  } : null;
}
function iw(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const i = rw(r, t.length);
    !i || n.has(i.id) || (n.add(i.id), t.push(i));
  }
  return t;
}
function Fo(e) {
  const t = qS();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: XS(e.groups),
    paint: ph(e.paint, "paint"),
    mask: ph(e.mask, "mask"),
    raster_objects: iw(e.raster_objects)
  };
}
const qn = 1, Xn = 179, mu = 85;
function Ll(e) {
  const t = ((lt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function kg(e, t) {
  let n = lt(e, 0) - lt(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function Mg(e, t, { shiftKey: n = !1 } = {}) {
  let r = lt(e, 0) + lt(t, 0) * nn;
  return n && (r = Math.round(r / 15) * 15), Ll(r);
}
function lt(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function si(e = {}) {
  const t = Fe(lt(e.hFOV_deg || 90, 90), qn, Xn), n = Fe(lt(e.vFOV_deg || 60, 60), qn, Xn), r = Math.tan(t * Pt * 0.5), i = Math.tan(n * Pt * 0.5);
  return {
    yawDeg: lt(e.yaw_deg, 0),
    pitchDeg: lt(e.pitch_deg, 0),
    rollDeg: lt(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: i,
    aspect: r / Math.max(1e-12, i)
  };
}
function Di(e, t) {
  const n = Math.max(1, lt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, lt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = si(t);
  return Math.max(1, Math.min(
    n / (2 * i.tanHalfX),
    r / (2 * i.tanHalfY)
  ));
}
function Sd(e, t) {
  const n = Math.max(1, lt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, lt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, lt(t, 1)), o = Math.min(n, r * i);
  return { width: o, height: o / i };
}
function wd(e, t) {
  const n = Math.max(1e-12, lt(t, 1)), r = Math.max(1e-6, lt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, lt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Fe(2 * Math.atan(r / (2 * n)) * nn, qn, Xn), a = Fe(2 * Math.atan(i / (2 * n)) * nn, qn, Xn);
  return { hFOV_deg: o, vFOV_deg: a };
}
function ow(e, t, n) {
  const r = lt(e == null ? void 0 : e.x, 0), i = lt(e == null ? void 0 : e.y, 0), o = Math.max(1, lt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), a = Math.max(1, lt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), s = si(t), l = Math.max(1e-12, lt(n, 1)), d = 2 * l * s.tanHalfX, u = 2 * l * s.tanHalfY;
  return {
    x: r + (o - d) * 0.5,
    y: i + (a - u) * 0.5,
    w: d,
    h: u,
    focalPx: l
  };
}
function xd(e, t, n = mu) {
  const r = Math.max(1e-12, lt(t, 1)), i = Fe(lt(n, mu), 1, 89.999), o = r * Math.tan(i * Pt), a = Math.max(1, lt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), s = Math.max(1, lt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(a * 0.5, o),
    halfH: Math.min(s * 0.5, o)
  };
}
function Pg(e, t, n) {
  const r = Math.max(1e-12, lt(t, 1));
  return {
    x: (lt(n == null ? void 0 : n.x, 0) - lt(e == null ? void 0 : e.x, 0)) / r,
    y: -(lt(n == null ? void 0 : n.y, 0) - lt(e == null ? void 0 : e.y, 0)) / r
  };
}
function aw(e, t) {
  const n = Fe(lt(e, 90), qn, Xn), r = Math.max(1e-6, lt(t, 1));
  return Fe(
    2 * Math.atan(Math.tan(n * Pt * 0.5) / r) * nn,
    qn,
    Xn
  );
}
function Cs(e, t) {
  const n = Fe(lt(e, 60), qn, Xn), r = Math.max(1e-6, lt(t, 1));
  return Fe(
    2 * Math.atan(Math.tan(n * Pt * 0.5) * r) * nn,
    qn,
    Xn
  );
}
function hh(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function sw(e, t) {
  const n = hh(e, 1), r = hh(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(n * i)), a = Math.max(1, Math.round(r * i)), s = (d, u) => u ? s(u, d % u) : d, l = s(o, a) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(a / l))}`;
}
function zi(e) {
  const t = Fe(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Pt, n = Fe(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Pt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Ni(e) {
  const t = zi(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (r == null ? void 0 : r[0]) || sw(t, 1);
}
function kd(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Ni(t), t;
}
function Ng({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const a = o == null || String(o).trim() === "" ? NaN : Number(o), s = Number.isFinite(a) ? Fe(a, qn, Xn) : Fe(Math.min(42, lt(i, 100) * 0.42), 8, 96);
  return kd({
    id: String(e),
    label: "Frame 1",
    yaw_deg: lt(t, 0),
    pitch_deg: Fe(lt(n, 0), -89.9, 89.9),
    roll_deg: Ll(r),
    hFOV_deg: s,
    vFOV_deg: s,
    locked: !1
  });
}
function zr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Ni(e);
}
function Ag(e, t) {
  const n = si(e), r = lt(t, 1);
  if (!(r > 0)) return null;
  const i = 2 * Math.atan(n.tanHalfX * r) * nn, o = 2 * Math.atan(n.tanHalfY * r) * nn;
  return i < qn || i > Xn || o < qn || o > Xn ? null : { hFOV_deg: i, vFOV_deg: o };
}
function Cg(e, t, n = hu) {
  const r = Math.sign(lt(t, 0)), i = Math.abs(lt(n, hu));
  if (!r || !(i > 0)) return null;
  const o = si(e), a = o.hFovDeg + r * i;
  if (a < qn || a > Xn) return null;
  const s = Math.tan(a * Pt * 0.5);
  return Ag(e, s / o.tanHalfX);
}
function Ig(e, t) {
  const n = si(e), r = Oo(n.yawDeg, n.pitchDeg, n.rollDeg), i = lt(t == null ? void 0 : t.x, 0), o = lt(t == null ? void 0 : t.y, 0);
  return _d(Js(Js(r.fwd, Zs(r.right, i)), Zs(r.up, o)));
}
function lw(e) {
  return Un(e.x, e.y, -e.z);
}
function Is(e) {
  return Un(e.x, e.y, -e.z);
}
function On(e, t, n = 0) {
  const { right: r, up: i, fwd: o } = Oo(e, t, n);
  return [
    [r.x, i.x, -o.x],
    [r.y, i.y, -o.y],
    [-r.z, -i.z, o.z]
  ];
}
function Eg(e) {
  const t = Is(Un(e[0][0], e[1][0], e[2][0])), n = Is(Un(e[0][1], e[1][1], e[2][1])), r = Is(Un(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(r.x + 0, r.z + 0), o = Math.atan2(r.y, Math.hypot(r.x, r.z)), a = Math.cos(i), s = Math.sin(i), l = Math.atan2(s * n.z - a * n.x, a * t.x - s * t.z);
  return { yawDeg: i * nn, pitchDeg: o * nn, rollDeg: l * nn };
}
function Ia(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (r * r + i * i), 2 * (n * r - i * o), 2 * (n * i + r * o)],
    [2 * (n * r + i * o), 1 - 2 * (n * n + i * i), 2 * (r * i - n * o)],
    [2 * (n * i - r * o), 2 * (r * i + n * o), 1 - 2 * (n * n + r * r)]
  ];
}
function ji(e) {
  const [[t, n, r], [i, o, a], [s, l, d]] = e, u = t + o + d;
  if (u > 0) {
    const h = 0.5 / Math.sqrt(u + 1);
    return { x: (l - a) * h, y: (r - s) * h, z: (i - n) * h, w: 0.25 / h };
  }
  if (t > o && t > d) {
    const h = 2 * Math.sqrt(1 + t - o - d);
    return { x: 0.25 * h, y: (n + i) / h, z: (r + s) / h, w: (l - a) / h };
  }
  if (o > d) {
    const h = 2 * Math.sqrt(1 + o - t - d);
    return { x: (n + i) / h, y: 0.25 * h, z: (a + l) / h, w: (r - s) / h };
  }
  const f = 2 * Math.sqrt(1 + d - t - o);
  return { x: (r + s) / f, y: (a + l) / f, z: 0.25 * f, w: (i - n) / f };
}
function fs(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const Ci = 1e-6, gu = 1e-6, cw = 1e-9;
function Ea(e, t, n, r, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * n + i * i * i * r;
}
function uw(e, t) {
  if (e === "auto") return t;
  const [n, r, i, o] = e;
  let a = 0, s = 1;
  for (let l = 0; l < 50; l += 1) {
    const d = 0.5 * (a + s);
    Ea(0, n, i, 1, d) < t ? a = d : s = d;
  }
  return Ea(0, r, o, 1, 0.5 * (a + s));
}
function Ao(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function Co(e, t, n, r) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], a = n.map((h) => -h / i), s = r.map((h) => h / o);
  if (a.reduce((h, g, b) => h + g * s[b], 0) < 0) return n.map(() => 0);
  const l = a.map((h, g) => (h * o + s[g] * i) / (i + o)), d = (h) => Math.sqrt(h.reduce((g, b) => g + b * b, 0)), u = 3 * Math.min(d(a), d(s)), f = d(l);
  return f <= u ? l : l.map((h) => h * u / f);
}
function Og(e, t, n, r) {
  const i = n[r], o = n[r + 1], a = t[r + 1] - t[r], s = i.map((u, f) => o[f] - u);
  let l = s;
  Ao(e, r) && (l = Co(t, r, n[r - 1].map((u, f) => u - i[f]), s).map((u) => u * a));
  let d = s;
  return Ao(e, r + 1) && (d = Co(t, r + 1, s.map((u) => -u), n[r + 2].map((u, f) => u - o[f])).map((u) => u * a)), [l.map((u) => u / 3), d.map((u) => -u / 3)];
}
function Fg(e, t, n, r, i) {
  const [[o], [a]] = Og(e, t, n.map((s) => [s]), r);
  return Ea(n[r], n[r] + o, n[r + 1] + a, n[r + 1], i);
}
function dw(e, t, n, r) {
  var d, u;
  const i = e.map((f) => f.value);
  let [o, a] = Og(e, t, i, n);
  o = ((d = e[n].handles) == null ? void 0 : d.out) ?? o, a = ((u = e[n + 1].handles) == null ? void 0 : u.in) ?? a;
  const s = i[n], l = i[n + 1];
  return [0, 1, 2].map((f) => Ea(s[f], s[f] + o[f], l[f] + a[f], l[f], r));
}
function el([e, t, n, r], [i, o, a, s]) {
  return [
    r * i + e * s + t * a - n * o,
    r * o - e * a + t * s + n * i,
    r * a + e * o - t * i + n * s,
    r * s - e * i - t * o - n * a
  ];
}
function fw(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Oc(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function pw([e, t, n, r]) {
  const i = Math.sqrt(e * e + t * t + n * n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return [e * o, t * o, n * o];
}
function yu(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function ho(e, t) {
  return pw(el([-e[0], -e[1], -e[2], e[3]], t));
}
function Fc(e, t, n) {
  return el(e, yu(ho(e, t).map((r) => n * r)));
}
function Tc(e, t) {
  const n = fw(e, t);
  if (Math.abs(n) > gu) return n < 0;
  const [r, i, o] = ho(e, t);
  for (const a of [-i, r, o])
    if (Math.abs(a) > gu) return a < 0;
  return !1;
}
function ps(e) {
  const { x: t, y: n, z: r, w: i } = ji(On(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, i];
}
function bu(e, t, n, r) {
  const i = t + (n - t) * r;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function hw(e, t, n, r) {
  const i = ps(e[n].value);
  let o = ps(e[n + 1].value);
  Tc(i, o) && (o = Oc(o));
  const a = t[n + 1] - t[n], s = ho(i, o);
  let l = s;
  if (Ao(e, n)) {
    let S = ps(e[n - 1].value);
    Tc(S, i) && (S = Oc(S)), l = Co(t, n, ho(i, S), s).map(($) => $ * a);
  }
  let d = s;
  if (Ao(e, n + 1)) {
    let S = ps(e[n + 2].value);
    Tc(o, S) && (S = Oc(S)), d = Co(t, n + 1, ho(o, i), ho(o, S)).map(($) => $ * a);
  }
  const u = el(i, yu(l.map((S, $) => 0.5 * (S - s[$])))), f = el(o, yu(s.map((S, $) => 0.5 * (S - d[$])))), [h, g, b, _] = Fc(Fc(i, o, r), Fc(u, f, r), 2 * r * (1 - r)), { yawDeg: v, pitchDeg: P, rollDeg: W } = Eg(Ia({ x: h, y: g, z: b, w: _ })), D = e[n].value, O = e[n + 1].value;
  return {
    yaw_deg: bu(v, D.yaw_deg, O.yaw_deg, r),
    pitch_deg: P,
    roll_deg: bu(W, D.roll_deg, O.roll_deg, r)
  };
}
function Oa(e, t) {
  return e.reduce((n, r, i) => n + r * t[i], 0);
}
function tl(e) {
  return Math.sqrt(Oa(e, e));
}
function nl(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function Tg(e, t) {
  const n = Oa(e, t), r = t.map((a, s) => a - n * e[s]), i = tl(r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return r.map((a) => a * o);
}
function lo(e, t) {
  const n = tl(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((i, o) => Math.cos(n) * i + r * t[o]);
}
function hs(e, t, n) {
  return lo(e, Tg(e, t).map((r) => n * r));
}
function Dc(e, t) {
  const n = nl(e[t].value), r = nl(e[t + 1].value), i = Oa(n, r), o = i < 0 && tl(r.map((l, d) => l - i * n[d])) <= gu;
  let a;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    a = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    a = Tg(n, r);
  const s = tl(a);
  return [a, a.map((l, d) => Math.cos(s) * l - s * Math.sin(s) * n[d]), o];
}
function mw(e, t, n, r) {
  const i = nl(e[n].value), o = nl(e[n + 1].value), [a, s, l] = Dc(e, n);
  let d = a, u = s;
  const f = t[n + 1] - t[n];
  Ao(e, n) && (d = Co(t, n, Dc(e, n - 1)[1].map((D) => -D), d).map((D) => D * f)), Ao(e, n + 1) && (u = Co(t, n + 1, u.map((D) => -D), Dc(e, n + 1)[0]).map((D) => D * f));
  let h, g, b;
  if (l) {
    const D = Math.PI, O = Ea(0, Oa(d, a) / D / 3, D - Oa(u, s) / D / 3, D, r);
    [h, g, b] = lo(i, a.map((S) => O * S / D));
  } else {
    const D = hs(lo(i, d.map(($) => $ / 3)), lo(o, u.map(($) => -$ / 3)), r), O = hs(lo(i, d.map(($) => r * $ / 3)), D, r), S = hs(D, lo(o, u.map(($) => -(1 - r) * $ / 3)), r);
    [h, g, b] = hs(O, S, r);
  }
  const _ = Math.hypot(h, b), v = e[n].value.yaw_deg, P = e[n + 1].value.yaw_deg;
  return { yaw_deg: _ <= cw ? v + (P - v) * r : bu(Math.atan2(h, b) * 180 / Math.PI, v, P, r), pitch_deg: Math.atan2(g, _) * 180 / Math.PI };
}
function gw(e, t, n, r) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = Fg(e, t, e.map((a) => a.value[o]), n, r);
  return i;
}
function yw(e, t, n, r) {
  return Fg(e, t, e.map((i) => i.value), n, r);
}
const bw = { position: dw, rotation: hw, direction: mw, size: gw };
function Gt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return fs(e[t].value);
  if (n <= r[0].frame + Ci) return fs(r[0].value);
  const i = r[r.length - 1];
  if (n >= i.frame - Ci) return fs(i.value);
  let o = 0;
  for (; r[o + 1].frame <= n + Ci; ) o += 1;
  const a = r[o];
  if (Math.abs(n - a.frame) <= Ci || a.easing === "hold") return fs(a.value);
  const s = r.map((d) => d.frame), l = uw(a.easing, (n - s[o]) / (s[o + 1] - s[o]));
  return (bw[t] ?? yw)(r, s, o, l);
}
function vu(e) {
  return Math.min(179, Math.max(0.1, e));
}
function vw(e) {
  return Math.min(1, Math.max(0, e));
}
function Dg(e) {
  return Math.max(1e-6, e);
}
function Lg(e, t) {
  return t - (e.start - e.in);
}
function To(e, t) {
  return t >= e.start - Ci && (e.duration === null || t < e.start + e.duration - Ci);
}
function Md(e, t) {
  return {
    position: Gt(e, "position", t),
    ...Gt(e, "rotation", t),
    hFOV_deg: vu(Gt(e, "fov", t)),
    aspect: e.aspect
  };
}
function Rl(e, t) {
  const n = Number(t), { camera: r, scene: i } = e, o = Lg(i.clip, n);
  return {
    frame: n,
    camera: r == null ? null : Md(r, n),
    scene: {
      active: i.visible && To(i.clip, n),
      clip_frame: o,
      position: Gt(i, "position", o),
      ...Gt(i, "rotation", o),
      scale: Dg(Gt(i, "scale", o))
    },
    stickers: e.stickers.map((a) => Vi(a, n))
  };
}
function _w(e, t) {
  if (e.placement === "world")
    return {
      position: Gt(e, "position", t),
      ...Gt(e, "rotation", t),
      scale: Dg(Gt(e, "scale", t))
    };
  const n = Gt(e, "size", t);
  return {
    ...Gt(e, "direction", t),
    roll_deg: Gt(e, "roll", t),
    hFOV_deg: vu(n.hFOV_deg),
    vFOV_deg: vu(n.vFOV_deg)
  };
}
function Vi(e, t) {
  const n = Lg(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && To(e.clip, t),
    clip_frame: n,
    ..._w(e, n),
    opacity: vw(Gt(e, "opacity", n))
  };
}
const Sw = 2, ww = ["sky", "world"], _u = ["perspective", "erp"], xw = ["input", "output", "temp"], Rg = [0.42, 0, 0.58, 1], Vg = 1, Pd = 1e3, Su = 1e7, Nd = Su;
function rn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function qt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Ad(e, t) {
  const n = qt(e, t);
  return n !== null && n > 0 ? n : t;
}
function In(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Vl(e) {
  const t = qt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Es(e) {
  const t = Vl(e);
  return t === null ? null : In(t, -Su, Su);
}
function Do(e) {
  const t = Ad(e, null);
  return t === null ? null : In(t, Vg, Pd);
}
function $g(e) {
  const t = Vl(e);
  return t !== null && t >= 1 ? Math.min(t, Nd) : null;
}
function Fa(e, t) {
  return typeof e == "boolean" ? e : t;
}
function zg(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => qt(n, null));
  return t.includes(null) ? null : t;
}
function jg(e) {
  return zg(e) || [0, 0, 0];
}
function Hg(e) {
  const t = rn(e) ? e : {};
  return {
    yaw_deg: qt(t.yaw_deg, 0),
    pitch_deg: In(qt(t.pitch_deg, 0), -90, 90),
    roll_deg: qt(t.roll_deg, 0)
  };
}
function kw(e) {
  return In(qt(e, 90), 0.1, 179);
}
function Mw(e) {
  return Ad(e, 1);
}
function Pw(e) {
  const t = rn(e) ? e : {};
  return {
    yaw_deg: qt(t.yaw_deg, 0),
    pitch_deg: In(qt(t.pitch_deg, 0), -90, 90)
  };
}
function Nw(e) {
  return qt(e, 0);
}
function Aw(e) {
  const t = rn(e) ? e : {};
  return {
    hFOV_deg: In(qt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: In(qt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Gg(e) {
  return In(qt(e, 1), 0, 1);
}
const Cd = [["position", jg], ["rotation", Hg], ["fov", kw]], $l = [["position", jg], ["rotation", Hg], ["scale", Mw]], Id = [["direction", Pw], ["roll", Nw], ["size", Aw], ["opacity", Gg]], Ed = [...$l, ["opacity", Gg]];
function Cw(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => qt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...Rg];
}
function Iw(e) {
  if (!rn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = zg(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function Ew(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!rn(i)) continue;
    const o = Es(i.frame);
    if (o === null) continue;
    const a = { frame: o, value: t(i.value), easing: Cw(i.easing) }, s = n ? Iw(i.handles) : null;
    s && (a.handles = s), r.set(o, a);
  }
  return [...r.keys()].sort((i, o) => i - o).map((i) => r.get(i));
}
function Od(e, t) {
  const n = {};
  for (const [r, i] of t) {
    const o = rn(e[r]) ? e[r] : {};
    n[r] = { value: i(o.value), keyframes: Ew(o.keyframes, i, r === "position") };
  }
  return n;
}
function Wg(e) {
  const t = rn(e) ? e : {}, n = Es(t.start), r = Es(t.in), i = Es(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: i === null ? null : Math.max(1, i)
  };
}
function Ow(e) {
  const t = rn(e) ? e : {}, n = In(qt(t.x0, 0), 0, 1), r = In(qt(t.y0, 0), 0, 1), i = In(qt(t.x1, 1), 0, 1), o = In(qt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, i), y0: Math.min(r, o), x1: Math.max(n, i), y1: Math.max(r, o) };
}
function Fw(e) {
  if (!rn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: xw.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function Tw(e) {
  const t = Fw(e.source);
  if (!t) return null;
  const n = ww.includes(e.placement) ? e.placement : "sky", r = n === "world", i = {
    id: e.id,
    placement: n,
    source: t,
    clip: Wg(e.clip),
    visible: Fa(e.visible, !0),
    locked: Fa(e.locked, !1),
    crop: Ow(e.crop),
    ...Od(e, r ? Ed : Id)
  };
  return r || (i.z_index = Vl(e.z_index) ?? 0), i;
}
function Dw(e) {
  const t = [];
  let n = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const a = rn(o) ? Tw(o) : null;
    if (a) {
      if (a.source.kind === "port") {
        if (n) continue;
        n = !0;
      }
      t.push(a);
    }
  }
  const r = /* @__PURE__ */ new Set();
  for (const o of t)
    typeof o.id == "string" && o.id && !r.has(o.id) ? r.add(o.id) : o.id = null;
  let i = 1;
  for (const o of t)
    if (o.id === null) {
      for (; r.has(`sticker_${i}`); ) i += 1;
      o.id = `sticker_${i}`, r.add(o.id);
    }
  return t;
}
function Kg(e) {
  if (!rn(e)) return null;
  const t = _u.includes(e.projection) ? e.projection : _u[0];
  return { aspect: Ad(e.aspect, 1), projection: t, visible: Fa(e.visible, !0), ...Od(e, Cd) };
}
function Fd() {
  return Kg({});
}
function rl(e) {
  const t = rn(e.timeline) ? e.timeline : {}, n = rn(e.scene) ? e.scene : {};
  return {
    version: Sw,
    timeline: {
      fps: Do(t.fps) ?? 24,
      length: $g(t.length)
    },
    camera: Kg(e.camera),
    scene: { clip: Wg(n.clip), visible: Fa(n.visible, !0), ...Od(n, $l) },
    stickers: Dw(e.stickers),
    painting: Fo(e.painting),
    painting_layer: rn(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: Fa(e.painting_visible, !0)
  };
}
function Lw(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!rn(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function Rw(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!rn(t)) return null;
  const n = In(qt(t.hFOV_deg, 90), 1, 179), r = In(qt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(n * i * 0.5) / Math.tan(r * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function Vw(e) {
  const t = rn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(rn) : [];
  return n.sort((r, i) => qt(r.z_index, 0) - qt(i.z_index, 0)), rl({
    camera: Rw(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: Lw(r, t),
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
function xr(e) {
  if (e == null || typeof e == "string" && !e.trim()) return rl({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!rn(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? Vw(t) : rl(t);
}
const Lc = {
  state: { painting_visible: !0 },
  camera: { projection: _u[0], visible: !0 },
  scene: { visible: !0 }
};
function Rc(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([n, r]) => !Object.hasOwn(t, n) || r !== t[n]));
}
function wu(e) {
  return JSON.stringify({
    ...Rc(e, Lc.state),
    camera: e.camera && Rc(e.camera, Lc.camera),
    scene: Rc(e.scene, Lc.scene)
  });
}
function Vc(e, t, n, r, i) {
  const o = {};
  for (const [a] of t)
    o[a] = {
      value: e[a].value,
      keyframes: e[a].keyframes.map((s) => ({ ...s, frame: n(r + s.frame) - i }))
    };
  return o;
}
function mh(e, t) {
  const n = t(e.start), r = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: i }, anchor: e.start - e.in, newAnchor: r };
}
function Ta(e, t) {
  const n = Do(t);
  if (n === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const r = n / e.timeline.fps, i = (s) => Vl(s * r), { length: o } = e.timeline, a = mh(e.scene.clip, i);
  return rl({
    timeline: { fps: n, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...Vc(e.camera, Cd, i, 0, 0) },
    scene: { clip: a.clip, visible: e.scene.visible, ...Vc(e.scene, $l, i, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((s) => {
      const { clip: l, anchor: d, newAnchor: u } = mh(s.clip, i), f = s.placement === "world" ? Ed : Id;
      return { ...s, clip: l, ...Vc(s, f, i, d, u) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function $c(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Bg(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Ug(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= Ci);
}
function Yg(e, t, n) {
  const r = e.keyframes.findIndex((o) => o.frame > t), i = r > 0 ? Bg(e.keyframes[r - 1].easing) : [...Rg];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: i });
}
function pn(e, t, n, r) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = $c(i.value, r);
    return;
  }
  const o = Ug(i, n);
  o ? o.value = $c(o.value, r) : Yg(i, n, $c(Gt(e, t, n), r));
}
function Lo(e) {
  return e.placement === "world" ? Ed.map(([t]) => t) : e.placement === "sky" ? Id.map(([t]) => t) : (e.clip ? $l : Cd).map(([t]) => t);
}
function $w(e, t) {
  for (const n of Lo(e))
    Ug(e[n], t) || Yg(e[n], t, Gt(e, n, t));
}
function zw(e) {
  const t = Lo(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const i of e[r].keyframes) n.set(i.frame, (n.get(i.frame) || 0) + 1);
  return [...n].sort((r, i) => r[0] - i[0]).map(([r, i]) => ({ frame: r, full: i === t.length }));
}
function zc(e, t) {
  return e.some((n) => n.full && n.frame === t);
}
function jw(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function Hw(e, t, n, r) {
  const i = new Set(n);
  for (const o of t) {
    const a = e[o];
    if (!a.keyframes.some((l) => i.has(l.frame))) continue;
    const s = Gt(e, o, r);
    a.keyframes = a.keyframes.filter((l) => !i.has(l.frame)), a.keyframes.length || (a.value = s);
  }
}
function Gw(e, t, n, r, i) {
  r = Math.max(r, Math.min(0, i - Math.min(...n)));
  const o = new Set(n);
  for (const a of t) {
    const s = e[a], l = s.keyframes.filter((u) => o.has(u.frame)).map((u) => ({ ...u, frame: u.frame + r })), d = new Set(l.map((u) => u.frame));
    s.keyframes = [
      ...s.keyframes.filter((u) => !o.has(u.frame) && !d.has(u.frame)),
      ...l
    ].sort((u, f) => u.frame - f.frame);
  }
  return r;
}
function qg(e, t, n) {
  const r = Math.min(...n), i = Math.max(...n);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((a) => n.length > 1 ? a.frame >= r && a.frame < i : a.frame === r));
}
function Ww(e, t, n) {
  const r = qg(e, t, n);
  if (!r.length) return null;
  const i = r.some((o) => JSON.stringify(o.easing) !== JSON.stringify(r[0].easing));
  return { easing: i ? null : r[0].easing, mixed: i };
}
function Kw(e, t, n, r) {
  for (const i of qg(e, t, n)) i.easing = Bg(r);
}
function Bw(e, t) {
  e.start = Math.max(0, e.start + t);
}
function Uw(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), i = r - e.start;
  e.start = r, e.in += i, e.duration !== null && (e.duration -= i);
}
function Yw(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function qw(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function il(e) {
  return Lo(e).map((t) => e[t]);
}
function Xw(e, { cameraOnly: t = !1, camera: n = !1 } = {}) {
  return t ? il(e.camera).some((r) => r.keyframes.length > 0) : Xg(e, { camera: n });
}
function ol(e) {
  return il(e).some((t) => t.keyframes.length > 0) || !!e.clip && !qw(e.clip);
}
function Xg(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(ol);
}
const Jw = 1e5;
function Jg(e, { minimum: t, frames: n = 0, openClip: r = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, n);
  if (i && e.camera)
    for (const a of il(e.camera))
      for (const s of a.keyframes) o = Math.max(o, s.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: s } = a;
    o = Math.max(o, s.duration === null || s === r ? s.start + 1 : s.start + s.duration);
    for (const l of il(a))
      for (const d of l.keyframes) o = Math.max(o, s.start - s.in + d.frame + 1);
  }
  return Number.isFinite(o) ? o : Jw;
}
function Zw(e) {
  return e > 0 ? Do(Math.min(e, Pd)) : null;
}
function Qw(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : $g(Math.max(1, Math.min(e, Nd)));
}
const jc = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], ex = 2e3;
function tx(e, t, n = 56) {
  const r = jc.find((o) => o * t >= n) || jc[jc.length - 1], i = [];
  for (let o = 0; o < e && i.length < ex; o += r) i.push(o);
  return i;
}
function nx(e, t) {
  const n = [];
  for (const r of e) {
    const i = n[n.length - 1];
    i && r - i.frames[i.frames.length - 1] < t ? i.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let ms = { text: null, parsed: null };
function En(e) {
  return Number(e) === 180 ? 180 : 360;
}
function al(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function rx({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: En(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Fo(null),
    painting_layer: null,
    ui_settings: al(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Zg(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, i = Number(r);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function ix(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function ox(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function ax(e) {
  return Array.isArray(e) ? e.map((t) => kd(t)) : [];
}
function sx(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), i = n.find((a) => String((a == null ? void 0 : a.id) || "") === r) || n[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function Qg(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = rx(n), i = String(e || "").trim();
  if (!i) return r;
  try {
    let o = null;
    if (ms.text === i ? o = ms.parsed : (o = JSON.parse(i), ms = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return r;
    const a = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, s = {
      ...r,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: ix(o.assets),
      stickers: ox(o.stickers),
      shots: ax(o.shots),
      painting: Fo(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: al(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...r.active }
    };
    return a && (s.ui_settings = al({ ...s.ui_settings, ...a })), s.output_preset = Zg(
      n.outputPreset,
      Number(s.output_preset || r.output_preset)
    ), s.bg_color = String(n.backgroundColor || s.bg_color || r.bg_color), s.coverage = En(n.coverage), delete s.editor_history, s;
  } catch {
    return ms = { text: i, parsed: null }, r;
  }
}
function lx(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function cx(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function ux(e, { paintCount: t, maskCount: n, width: r, height: i, nodeId: o }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${i}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || n > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function e0(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: a, scene: s = null, camera: l = !1 } = t, d = Do(t.fps);
  let u;
  try {
    u = xr(e);
  } catch {
    u = xr(null);
  }
  d && d !== u.timeline.fps && (u = Ta(u, d));
  const f = l && u.camera === null;
  if (f && (u = { ...u, camera: Fd() }), s) {
    let h = xr(s);
    d && d !== h.timeline.fps && (h = Ta(h, d)), u = { ...h, camera: u.camera, cutout_state: u };
  }
  return {
    ...u,
    ...f ? { default_camera: !0 } : {},
    coverage: En(i),
    bg_color: r,
    output_preset: Zg(n),
    ui_settings: al(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...a }
  };
}
function dx(e, t) {
  e.cutout_state && (e.cutout_state = Ta(e.cutout_state, t));
  const n = Ta(e, t), r = new Map(n.stickers.map((o) => [o.id, o]));
  e.timeline = n.timeline;
  const i = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((o) => [o, r.get(o.id)])];
  for (const [o, a] of i)
    if (a) {
      o.clip && (o.clip = a.clip);
      for (const s of Lo(o)) o[s].keyframes = a[s].keyframes;
    }
}
function Td(e, t) {
  const n = Vi(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const fx = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function gh(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function px(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[fx[n]].keyframes.length));
}
function t0(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), i = gh(n, ["yaw_deg", "pitch_deg"]), o = gh(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && pn(e, "direction", r, i), n.rot_deg !== void 0 && pn(e, "roll", r, n.rot_deg), Object.keys(o).length && pn(e, "size", r, o);
}
const zl = ["position_x", "position_y", "position_z"], jl = "camera";
function yh(e, t) {
  const n = Md(e, t);
  return kd({
    id: jl,
    label: "Camera",
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: n.hFOV_deg,
    vFOV_deg: aw(n.hFOV_deg, e.aspect),
    position: n.position,
    locked: !1
  });
}
function hx(e) {
  return xr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: zt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function mx(e) {
  return e - 360 * Math.round(e / 360);
}
function gx(e, t, n, r) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    n[o] !== r[o] && (i[o] = r[o] + mx(n[o] - r[o]));
  Object.keys(i).length && pn(e, "rotation", t, i), n.hFOV_deg !== r.hFOV_deg && pn(e, "fov", t, n.hFOV_deg), (n.hFOV_deg !== r.hFOV_deg || n.vFOV_deg !== r.vFOV_deg) && (e.aspect = Math.tan(n.hFOV_deg * Pt * 0.5) / Math.tan(n.vFOV_deg * Pt * 0.5)), n.position.some((o, a) => o !== r.position[a]) && pn(e, "position", t, [...n.position]);
}
function yx(e, t) {
  const n = Gt(e, "position", t), r = Gt(e, "rotation", t);
  return {
    ...Object.fromEntries(zl.map((i, o) => [i, n[o]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Gt(e, "fov", t)
  };
}
function bx(e, t, n, r) {
  const i = zl.indexOf(n);
  if (i >= 0) {
    const o = Gt(e, "position", t);
    o[i] = r, pn(e, "position", t, o);
  } else n === "hFOV_deg" ? pn(e, "fov", t, r) : pn(e, "rotation", t, { [n]: r });
}
function vx(e, t, n) {
  pn(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function _x(e, t) {
  const n = Vi(e, t);
  return {
    ...Object.fromEntries(zl.map((r, i) => [r, n.position[i]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function Sx(e, t, n, r) {
  const i = t - (e.clip.start - e.clip.in), o = zl.indexOf(n);
  if (o >= 0) {
    const a = Gt(e, "position", i);
    a[o] = r, pn(e, "position", i, a);
  } else n === "scale" ? pn(e, "scale", i, r) : n === "opacity" ? pn(e, "opacity", i, r / 100) : pn(e, "rotation", i, { [n]: r });
}
function wx(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    n[i] !== void 0 && pn(e, i, r, n[i]);
}
function xx(e, t) {
  const n = e.stickers.find((r) => r.id === t && r.placement === "world");
  n && (n.source.kind === "port" ? n.visible = !1 : e.stickers = e.stickers.filter((r) => r !== n));
}
function kx(e, t, n) {
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
function Os(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function n0(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Dd(e, t, n, r) {
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
function Mx(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = zt(r.direction.value.yaw_deg + 8);
  for (const i of r.direction.keyframes) i.value.yaw_deg += 8;
  return r;
}
function xu(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function r0(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function i0(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function o0(e) {
  e.default_camera && JSON.stringify(xr({ version: 2, camera: e.camera }).camera) !== JSON.stringify(Fd()) && delete e.default_camera;
}
function a0(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const n = xr(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(n.camera) === JSON.stringify(Fd()) && (n.camera = null), wu(n);
}
function s0(e, t, n, { rebased: r = !1 } = {}) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = xr(n);
    if (wu(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return r && o !== i.timeline.fps && wu(Ta(i, o)) === t;
  } catch {
    return !1;
  }
}
const Hc = 0.15, Px = 0.01, Nx = 1e-3, Ax = 0.05, Cx = 4, bh = 250, Ix = 16, ar = 1, Ex = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Vn(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function kr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Hl(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function Ro(e, t, n = 0) {
  const r = On(e, t, n), i = kr(r, 2);
  return { right: kr(r, 0), up: kr(r, 1), forward: [-i[0], -i[1], -i[2]] };
}
function Ox(e, t, n = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...n] };
}
function ku(e, t, n = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...n], moved: !1 } : { ...e, mode: t };
}
function Fx(e, t, n = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : ku(e, "3dof", n);
}
function Tx(e) {
  return Ro(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function Dx(e) {
  return Vn(e.position, Ro(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function li(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function _a(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Ld(e, t) {
  return _a(li(t, e.position), Ro(e.yaw_deg, e.pitch_deg).forward);
}
function Rd(e) {
  return Math.max(e, 1e-6) * Ax;
}
function Mu(e, t, n = null, r = ar) {
  if (t) return t;
  const i = Rd(r);
  if (n && Ld(e, n) > 0) {
    const o = li(n, e.position), a = Math.hypot(...o);
    return a >= i ? n : Vn(e.position, o, i / a);
  }
  return Vn(e.position, Ro(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function l0(e, t = ar) {
  return Math.max(e.distance, Rd(t));
}
function c0(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > Cx ? !1 : t.time - e.time < bh || e.cost > Ix && t.time - e.wheelTime < bh;
}
function Vd(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * Pt);
  return { tanX: r, tanY: r * n / t };
}
function vh(e, t, n, r, i = Dx(e)) {
  const o = e.roll_deg ?? 0, [a, s] = Lx(t, n, o), l = zt(e.yaw_deg + a / r * 360), d = Fe(e.pitch_deg - s / r * 360, -89.9, 89.9), u = On(e.yaw_deg, e.pitch_deg, o), f = On(l, d, o), h = li(e.position, i), g = [0, 1, 2].map((_) => _a(kr(u, _), h)), b = { ...e, yaw_deg: l, pitch_deg: d, position: Vn(i, Hl(f, g)) };
  return { ...b, distance: Ld(b, i) };
}
function Lx(e, t, n) {
  const r = Math.cos(n * Pt), i = Math.sin(n * Pt);
  return [e * r + t * i, t * r - e * i];
}
function _h(e, t, n, r, i, o = e.distance) {
  const { right: a, up: s } = Tx(e), l = 2 * o * Vd(e, r, i).tanY / i;
  return { ...e, position: Vn(Vn(e.position, a, -t * l), s, n * l), distance: o };
}
function u0(e, t, n, r = ar) {
  const i = li(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !n) return e;
  const a = Math.max(r, 1e-6), s = a * Px, l = n > 0 ? Math.min(Math.max(o * Hc, s), o - a * Nx) : -Math.max(o * Hc / (1 - Hc), s);
  if (n > 0 && l <= 0) return e;
  const d = { ...e, position: Vn(e.position, i, l / o) };
  return { ...d, distance: Math.max(Ld(d, t), Rd(r)) };
}
function d0(e, t, n, r) {
  const { tanX: i, tanY: o } = Vd(e, n, r), a = Math.atan(Math.min(i, o)), s = Math.max(t.radius, 1e-6) / Math.sin(a) * 1.1, { forward: l } = Ro(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Vn(t.center, l, -s), distance: s };
}
function $d(e, t, n, r = null) {
  return f0({
    quaternion: ji(On(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Vd(e, t, n).tanY) * nn,
    aspect: t / n
  }, e.position, e.distance, r);
}
function f0(e, t, n, r = null) {
  const { center: i, radius: o } = r ?? { center: [0, 0, 0], radius: ar }, a = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), s = Math.max(a + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(n * 0.01, o * 1e-4),
    far: s * 2
  };
}
function Da(e, t, n, r) {
  const { right: i, up: o, forward: a } = p0(e), s = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = s[0] * a[0] + s[1] * a[1] + s[2] * a[2];
  if (!(l > e.near)) return null;
  const d = Math.tan(e.fovY_deg * 0.5 * Pt), u = d * e.aspect, f = s[0] * i[0] + s[1] * i[1] + s[2] * i[2], h = s[0] * o[0] + s[1] * o[1] + s[2] * o[2];
  return { x: n * 0.5 * (1 + f / l / u), y: r * 0.5 * (1 - h / l / d), z: l };
}
function p0(e) {
  const t = Ia(e.quaternion), n = kr(t, 2);
  return { right: kr(t, 0), up: kr(t, 1), forward: n.map((r) => -r) };
}
function Sh(e, t, n) {
  var i;
  const r = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((o) => o ? n(o) : null) };
}
function Rx({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function h0(e, t) {
  if (!e || !t.active) return null;
  const n = zx(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: Pu(t),
    itemQuaternion: e.kind === "splat" ? Ex : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function Vx(e, t, n) {
  const r = t.stickers.findIndex((s) => s.source.kind === "port"), i = t.stickers[r];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = n.stickers[r], a = h0(e, o);
  return a && { ...a, id: i.id, opacity: o.opacity, value: o };
}
function $x(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function zx(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function Pu(e) {
  return {
    position: [...e.position],
    quaternion: ji(On(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Nu(e, t) {
  return Vn(e.position, Hl(On(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function Au(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function Cu({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) n.push([r, i, o]);
  return n;
}
function Iu(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((a) => a[o]))), n = [0, 1, 2].map((o) => Math.max(...e.map((a) => a[o]))), r = t.map((o, a) => (o + n[a]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - r[0], o[1] - r[1], o[2] - r[2])));
  return { center: r, radius: i };
}
function jx(e, t, n, r = []) {
  const i = [];
  t && e.scene.active && i.push(...Cu(t).map((o) => Nu(e.scene, o)));
  for (const o of n) i.push(...zd(o));
  for (const { box: o, value: a } of r) i.push(...Cu(o).map((s) => Nu(a, s)));
  return i;
}
function Hx(e, t, n, r) {
  const i = (t.x1 - t.x0) * n, o = (t.y1 - t.y0) * r;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: ji(On(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: On(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function zd(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, i]) => Vn(e.position, Hl(e.rotation, [r, i, 0])));
}
function Gx(e, t = null) {
  const { sticker: n, value: r, plane: i, item: o } = t ?? {};
  return (n == null ? void 0 : n.placement) !== "world" || !(r != null && r.active) ? e : i ? Iu(zd(i)) : o != null && o.box ? Iu(Cu(Au(o.kind, o.box)).map((a) => Nu(r, a))) : { center: [...r.position], radius: r.scale };
}
const Wx = 2, Kx = 0.5, Bx = 30;
function m0(e, t) {
  const n = li(t, e), r = Math.atan2(n[0], -n[2]) * nn, i = Math.atan2(n[1], Math.hypot(n[0], n[2])) * nn;
  return { yaw_deg: r + 0, pitch_deg: i, roll_deg: 0 };
}
function Ux(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, i = r ? r * Kx : Wx, o = t ? [...t] : Vn(e.position, Ro(e.yaw_deg, e.pitch_deg).forward, i), a = Math.hypot(...li(o, e.position)), s = a > 0 ? m0(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(a, 1e-3) * Math.tan(Bx * 0.5 * Pt);
  return { position: o, rotation: s, scale: l };
}
function wh(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function Yx(e) {
  return [0, 1, 2].map((t) => kr(e, t));
}
function xh(e, t, n, r) {
  if (e === "translate") return { position: Vn(t.position, li(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * Qx(n.scale, r.scale) / n.scale };
  const i = wh(Ia(r.quaternion), Yx(Ia(n.quaternion))), o = wh(i, On(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: a, pitchDeg: s, rollDeg: l } = Eg(o);
  return Math.abs(s) <= qx ? { rotation: { yaw_deg: a + 0, pitch_deg: s, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: s, roll_deg: Xx(o, t.yaw_deg) } };
}
const qx = 89.9;
function Xx(e, t) {
  const n = kr(e, 0), r = kr(e, 1), i = Math.cos(t * Pt), o = Math.sin(t * Pt);
  return Math.atan2(o * -r[2] - i * r[0], i * n[0] - o * -n[2]) * nn + 0;
}
const Jx = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function Zx(e, t, n, r, i) {
  if (!Da(e, t, r, i)) return null;
  const { right: o, up: a, forward: s } = p0(e), l = li(t, e.position), d = _a(l, o), u = _a(l, a), f = _a(l, s), h = Math.tan(e.fovY_deg * 0.5 * Pt), g = h * e.aspect, b = Math.hypot(d, u, f) * Jx[n] * Math.min(1.9 * h, 7) / 4;
  if (!(f > b)) return { minX: 0, maxX: r, minY: 0, maxY: i };
  const _ = (O) => {
    const S = b * Math.sqrt(O * O + f * f - b * b);
    return [(O * f - S) / (f * f - b * b), (O * f + S) / (f * f - b * b)];
  }, [v, P] = _(d), [W, D] = _(u);
  return {
    minX: r * 0.5 * (1 + v / g),
    maxX: r * 0.5 * (1 + P / g),
    minY: i * 0.5 * (1 - D / h),
    maxY: i * 0.5 * (1 - W / h)
  };
}
function Qx(e, [t, n, r]) {
  const i = [t, n, r].reduce((o, a) => Math.abs(a - e) > Math.abs(o - e) ? a : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function ek(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function g0(e, t) {
  const n = On(e.yaw_deg, e.pitch_deg, e.roll_deg), r = Math.tan(e.hFOV_deg * 0.5 * Pt) * t, i = r / e.aspect, o = (d, u, f) => Vn(e.position, Hl(n, [d, u, f])), a = [o(-r, -i, -t), o(r, -i, -t), o(r, i, -t), o(-r, i, -t)], s = a.map((d) => [e.position, d]);
  a.forEach((d, u) => s.push([d, a[(u + 1) % 4]]));
  const l = [o(-r * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(r * 0.5, i * 1.1, -t)];
  return s.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), s;
}
function tk(e, t, n, r, i, o = 6) {
  return t.some(([a, s]) => {
    const l = Da(e, a, r, i), d = Da(e, s, r, i);
    if (!l || !d) return !1;
    const u = d.x - l.x, f = d.y - l.y, h = Fe(((n.x - l.x) * u + (n.y - l.y) * f) / Math.max(u * u + f * f, 1e-12), 0, 1);
    return Math.hypot(l.x + u * h - n.x, l.y + f * h - n.y) <= o;
  });
}
function nk(e) {
  return e.slice(1).map((t, n) => [e[n], t]);
}
function rk(e, t, n = 2e3) {
  const { camera: r } = e;
  if (!r.position.keyframes.length) return [Gt(r, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(n, i + 1);
  return Array.from({ length: o }, (a, s) => {
    const l = o === 1 ? 0 : s * i / (o - 1);
    return Gt(r, "position", l);
  });
}
function ik(e, t, n, r, i) {
  const o = Math.max(0, e) * n, a = Math.max(0, t) * n, s = Math.min(1, r * n / Math.max(o, 1), i * n / Math.max(a, 1));
  return {
    width: Math.max(1, Math.round(o * s)),
    height: Math.max(1, Math.round(a * s))
  };
}
const y0 = 0.28;
function b0(e, t, n) {
  const r = t / n, i = Math.tan(e.hFOV_deg * 0.5 * Pt);
  return {
    quaternion: ji(On(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / r) * nn,
    aspect: r
  };
}
function Sa(e) {
  const t = si(e);
  return {
    quaternion: ji(On(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function v0(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: i, halfH: o } = xd(n, r), a = t.x + t.w * 0.5, s = t.y + t.h * 0.5;
  return {
    rect: { x: a - i, y: s - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / r) * nn,
      vFOV_deg: 2 * Math.atan(o / r) * nn
    }
  };
}
function _0(e, t, n) {
  const [[r, i, o], [a, s, l], [d, u, f]] = Ia(e.quaternion), h = Math.tan(e.fovY_deg * 0.5 * Pt), g = h * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(b, _ = 1e-4) {
      const v = lw(b), P = r * v.x + a * v.y + d * v.z, W = i * v.x + s * v.y + u * v.z, D = -(o * v.x + l * v.y + f * v.z), O = Math.max(D, _);
      return {
        x: t * 0.5 * (1 + P / O / g),
        y: n * 0.5 * (1 - W / O / h),
        z: D
      };
    },
    // The unit direction seen at the point (x, y).
    ray(b, _) {
      const v = (b / t * 2 - 1) * g, P = (1 - _ / n * 2) * h;
      return _d(Is({
        x: r * v + i * P - o,
        y: a * v + s * P - l,
        z: d * v + u * P - f
      }));
    }
  };
}
function ok(e, t, { media: n, zIndex: r, paintLayers: i, evaluated: o = Rl(e, t) }) {
  const a = [];
  e.stickers.forEach((s, l) => {
    const d = o.stickers[l];
    if (s.placement !== "sky") return;
    const u = s.source.kind === "port" && !s.visible;
    if (!d.active && !u) return;
    const f = n(s);
    if (!f) return;
    const h = Math.tan(d.hFOV_deg * 0.5 * Pt), g = Math.tan(d.vFOV_deg * 0.5 * Pt), { crop: b } = s;
    a.push({
      kind: "sticker",
      id: s.id,
      media: f.media,
      revision: f.revision,
      source: f.source,
      opacity: u ? y0 : d.opacity,
      zIndex: r(s),
      quaternion: ji(On(d.yaw_deg, d.pitch_deg, d.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * b.x0 - 1) * h,
        x1: (2 * b.x1 - 1) * h,
        y0: (1 - 2 * b.y1) * g,
        y1: (1 - 2 * b.y0) * g
      }
    });
  });
  for (const s of i) a.push({ kind: "erp", ...s });
  return a.sort((s, l) => s.zIndex - l.zIndex);
}
function S0(e, t, n, { media: r, paintLayers: i, evaluated: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const s of n)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !a.has(s.id) && a.set(s.id, s);
  return ok(e, t, {
    media: (s) => {
      const l = a.get(s.id);
      return l ? r(l) : null;
    },
    zIndex: (s) => {
      var l;
      return Number(((l = a.get(s.id)) == null ? void 0 : l.z_index) || 0);
    },
    paintLayers: i,
    evaluated: o
  });
}
function ak(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function sk(e, t, n, { media: r, evaluated: i = Rl(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const s of n)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !o.has(s.id) && o.set(s.id, s);
  const a = [];
  return e.stickers.forEach((s, l) => {
    const d = i.stickers[l];
    if (s.placement !== "world" || !d.active) return;
    const u = o.get(s.id), f = u ? r(u) : null;
    if (!f) return;
    const { width: h, height: g } = ak(f.media), b = Hx(d, s.crop, h, g);
    b && a.push({
      id: s.id,
      media: f.media,
      revision: f.revision,
      source: f.source,
      opacity: d.opacity,
      position: b.position,
      quaternion: b.quaternion,
      rotation: b.rotation,
      width: b.width,
      height: b.height,
      crop: s.crop
    });
  }), a;
}
function lk({ canvas: e, onReady: t, onFailed: n, onUpdate: r = () => {
}, onRestored: i = () => {
}, load: o = () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((a) => a.$) }) {
  let a = null, s = null, l = !1, d = 0;
  const u = () => {
    s = Sg(a.createThreeView({ onUpdate: r, createCanvas: () => e }), "editor");
  }, f = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(b) {
      return s && !f.lost ? s.render(b) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(b) {
      return s && !f.lost ? s.renderUnwrap(b) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(b, _) {
      return s && !f.lost ? s.resize(b, _) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(b, _) {
      s && !f.lost && s.clear(b, _);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(b) {
      return s ? s.sceneBox(b) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(b, _, v, P, W) {
      return s && !f.lost ? s.pick(b, _, v, P, W) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(b, _, v, P, W) {
      return s && !f.lost ? s.pickSurface(b, _, v, P, W) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(b, _, v, P, W) {
      return s && !f.lost ? s.pickSticker(b, _, v, P, W) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(b, _, v, P, W, D) {
      return s && !f.lost ? s.gizmoPointer(b, _, v, P, W, D) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (s ? s.contentRevision() : 0);
    },
    dispose() {
      l = !0, e.removeEventListener("webglcontextlost", h), e.removeEventListener("webglcontextrestored", g), s == null || s.dispose(), s = null;
    }
  };
  function h(b) {
    b.preventDefault(), !(l || f.lost) && (f.lost = !0, f.ready = !1, s == null || s.dispose({ lost: !0 }));
  }
  function g() {
    l || !f.lost || queueMicrotask(() => {
      l || !f.lost || (s && (d += s.contentRevision() + 1), s == null || s.dispose(), s = null, f.lost = !1, a && (u(), f.ready = !0, i()));
    });
  }
  return e.addEventListener("webglcontextlost", h), e.addEventListener("webglcontextrestored", g), o().then((b) => {
    l || (a = b, !f.lost && (u(), f.ready = !0, t()));
  }).catch((b) => {
    console.error("[PanoramaStickers] three.js view is unavailable", b), f.failed = !0, n();
  }), f;
}
const w0 = "3D view unavailable. Check the browser console.";
function sl(e, t, n) {
  return b0({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function ck(e) {
  let t = null, n = !1, r = !1;
  const i = /* @__PURE__ */ new Set();
  function o() {
    t || n || r || (n = !0, e().then((a) => {
      if (n = !1, !i.size) {
        a.dispose();
        return;
      }
      t = a, i.forEach((s) => s.onChange());
    }).catch((a) => {
      n = !1, i.size && (r = !0, console.error("[PanoramaStickers] three.js view is unavailable", a), i.forEach((s) => s.onChange()));
    }));
  }
  return function(s) {
    const l = { onChange: s };
    let d = !1;
    return i.add(l), {
      get failed() {
        return r;
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
        d || (d = !0, i.delete(l), t == null || t.release(l), !i.size && (r = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const x0 = ck(
  () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((e) => e.$).then((e) => Sg(e.createThreeView({ createCanvas: () => mn({ label: "three.node" }) }), "node"))
), ci = ["erp_image", "bg_erp", "bg_media"], Fs = ["source"], jd = ["sticker_image", "sticker"], k0 = ["scene"], uk = {
  background: [...ci, ...Fs],
  "external-sticker": [...jd, ...Fs],
  scene: [...k0, ...Fs]
};
function M0(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Hd(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const i = M0(e.graph ? e.getInputLink(r) : null);
    i && (t[String((n == null ? void 0 : n.name) || "")] = i);
  }), t;
}
function dk(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var i;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((i = e.getInputLink(r)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function P0(e, t) {
  var i;
  const n = String(t).split(":");
  let r = e;
  for (let o = 0; ; o += 1) {
    const a = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((s) => String(s == null ? void 0 : s.id) === n[o]);
    if (!a || o === n.length - 1) return { graph: r, entry: a };
    r = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((s) => (s == null ? void 0 : s.id) === a.type);
  }
}
function fk(e, t) {
  const { graph: n, entry: r } = P0(e, t), i = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((a) => Array.isArray(a) ? [a[0], { origin_id: a[1], origin_slot: a[2] }] : [a == null ? void 0 : a.id, a])), o = {};
  for (const a of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const s = M0(i.get(a == null ? void 0 : a.link));
    s && (o[String((a == null ? void 0 : a.name) || "")] = s);
  }
  return o;
}
const N0 = [...ci, ...jd, ...k0, ...Fs], pk = 256, co = /* @__PURE__ */ new Map(), Gc = /* @__PURE__ */ new WeakMap();
let A0 = () => null;
function C0(e) {
  return Gc.has(e) || Gc.set(e, JSON.stringify(e)), Gc.get(e);
}
function hk(e) {
  A0 = e;
}
function ll(e, t) {
  const n = C0(e);
  co.delete(n), co.set(n, t), co.size > pk && co.delete(co.keys().next().value);
}
function sn(e, t) {
  var o;
  const n = e ? A0(e) : null;
  if (!n) return !0;
  const r = Hd(e);
  let i = co.get(C0(n));
  if (i)
    ll(n, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((a) => N0.includes(a == null ? void 0 : a.name)))) return !0;
    ll(n, r), i = r;
  }
  return uk[t].every((a) => i[a] === r[a]);
}
const cl = /* @__PURE__ */ new WeakSet();
async function Eu(e, t) {
  if (cl.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && cl.add(e), n.ok && r !== void 0 ? r : null;
}
function I0(e, t) {
  var o, a, s, l, d;
  const n = (s = (a = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : a.extra_pnginfo) == null ? void 0 : s.workflow, { entry: r } = P0(n, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((d = r == null ? void 0 : r.inputs) != null && d.some((u) => N0.includes(u == null ? void 0 : u.name))) ? null : { output: i, inputs: fk(n, t) };
}
const Ts = /* @__PURE__ */ new Map();
function mk(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && Ts.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const i = await Eu(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const a = I0(i, o);
        a && ll(a.output, a.inputs);
      }
    });
}
const gk = 5;
function yk(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${gk}`, r = Eu(e, `/jobs?${n}`).then((a) => (a == null ? void 0 : a.jobs) || []), i = /* @__PURE__ */ new Map(), o = (a) => (i.has(a) || i.set(a, Eu(e, `/jobs/${encodeURIComponent(a)}`)), i.get(a));
  return {
    async lastNodeOutput(a, s) {
      var d, u, f, h;
      const l = String(a.id);
      for (const { id: g } of await r) {
        if (!s()) return null;
        const b = await o(g);
        if ((d = b == null ? void 0 : b.outputs) != null && d[l])
          return ((h = (f = (u = b.workflow) == null ? void 0 : u.prompt) == null ? void 0 : f[l]) == null ? void 0 : h.class_type) !== a.comfyClass ? null : I0(b, l);
      }
      return null;
    }
  };
}
function bk(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((i) => {
    var o, a;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((a = i.changeTracker) == null ? void 0 : a.nodeOutputs);
  });
}
let ro = null;
async function vk(e, t, n) {
  var s;
  const r = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!o() || cl.has(n) || (s = Ts.get(i)) != null && s.has(r) || bk(t)) return null;
  (ro == null ? void 0 : ro.workflowId) !== i && (ro = { workflowId: i, history: yk(n, i) }, queueMicrotask(() => {
    ro = null;
  }));
  const a = await ro.history.lastNodeOutput(e, o);
  return o() ? a ? (ll(a.output, a.inputs), t.nodeOutputs[r] = a.output, a.output) : (cl.has(n) || Ts.set(i, (Ts.get(i) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function kh(e, t, n, r = ci) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const a = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((a == null ? void 0 : a.name) || ""));
}
const Mh = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Ds(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Mh.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Mh.test(String((e == null ? void 0 : e.filename) || ""));
}
const Wc = /* @__PURE__ */ new WeakMap();
function _k(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function Ou(e) {
  return _k(e) ? (Wc.has(e) || Wc.set(e, Math.random().toString(36).slice(2, 10)), Wc.get(e)) : "run";
}
function E0(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function Sk(e, t, n) {
  const r = /* @__PURE__ */ new Set(), i = (o, a) => {
    for (const s of a) {
      const l = n(o, s);
      (l == null ? void 0 : l.id) == null || r.has(String(l.id)) || (r.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((d, u) => u)));
    }
  };
  return i(e, t), r;
}
function Gd(e, t = [], n = null) {
  var i;
  const r = typeof n == "function" ? n : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const a = [(i = e == null ? void 0 : e.ui) == null ? void 0 : i[o], e == null ? void 0 : e[o]];
    for (const s of a)
      if (Array.isArray(s))
        for (const l of s) {
          const d = r(l);
          if (d && (/\.mp4(\?|$)/i.test(d) || String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4"))
            return d;
        }
  }
  return "";
}
function wk({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  const r = Dl(e, "looping-preview");
  if (!r || !t) return null;
  const i = typeof n == "function" ? n : () => {
  };
  let o = !1, a = 0;
  const s = typeof r.requestVideoFrameCallback == "function", l = () => {
    o || !s || a || r.paused || r.ended || (a = r.requestVideoFrameCallback(() => {
      a = 0, !o && (i(), l());
    }));
  }, d = () => {
    o || i();
  }, u = () => i(), f = () => {
    i(), l();
  }, h = () => i();
  let g = !1;
  const b = () => {
    g = !0, i();
  };
  r.muted = !0, r.loop = !0, r.autoplay = !1, r.preload = "auto", r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", d, { once: !0 }), r.addEventListener("loadeddata", d, { once: !0 }), s || r.addEventListener("timeupdate", u), r.addEventListener("play", f), r.addEventListener("pause", h), r.addEventListener("error", b), r.src = t, r.load();
  const _ = () => {
    o || g || !r.paused || Promise.resolve(r.play()).catch(() => {
    });
  }, v = () => {
    !o && !r.paused && r.pause();
  };
  return {
    video: r,
    destroy: () => {
      var W, D;
      o || (o = !0, a && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(a), a = 0), r.removeEventListener("loadedmetadata", d), r.removeEventListener("loadeddata", d), r.removeEventListener("timeupdate", u), r.removeEventListener("play", f), r.removeEventListener("pause", h), r.removeEventListener("error", b), r.pause(), (W = r.removeAttribute) == null || W.call(r, "src"), (D = r.load) == null || D.call(r));
    },
    failed: () => g,
    play: _,
    pause: v,
    toggle() {
      r.paused ? _() : v();
    },
    get playing() {
      return !o && !r.paused && !r.ended;
    }
  };
}
function Si(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const i = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function xk(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Ph(e, t, n = null) {
  var i, o;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((i = r == null ? void 0 : r.isSubgraphNode) != null && i.call(r))
    try {
      const a = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, s = a ? (o = r.resolveSubgraphOutputLink) == null ? void 0 : o.call(r, Number(a.origin_slot ?? 0)) : null;
      s != null && s.outputNode && (r = s.outputNode);
    } catch {
    }
  return !r && n != null && (r = xk(e == null ? void 0 : e.graph, n)), r;
}
function kk(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function Mk(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function Pk(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function O0({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const i = (S) => {
    if (!S) return "";
    if (typeof S == "string") return String(S || "").trim();
    if (Array.isArray(S)) {
      if (S.length === 0) return "";
      if (S.length === 1) return i(S[0]);
      const $ = String(S[0] || "").trim();
      if ($)
        return Si(t, {
          filename: $,
          subfolder: String(S[1] || "").trim(),
          type: String(S[2] || "output").trim() || "output"
        });
      for (const z of S) {
        const te = i(z);
        if (te) return te;
      }
      return "";
    }
    return typeof (S == null ? void 0 : S.src) == "string" && S.src ? S.src : typeof (S == null ? void 0 : S.url) == "string" && S.url ? S.url : Si(t, S);
  }, o = (S) => {
    if (!S || typeof S != "object") return "";
    const $ = String(S.type || "").trim().toLowerCase();
    if ($ === "dataurl") return String(S.value || "");
    if ($ !== "comfy_image") return "";
    const z = String(S.filename || "").trim();
    return z ? Si(t, {
      filename: z,
      subfolder: String(S.subfolder || ""),
      type: String(S.storage || "input")
    }) : "";
  }, a = (S) => {
    const $ = e == null ? void 0 : e.nodeOutputs;
    if (!$ || S == null) return null;
    const z = String(S);
    return $ instanceof Map ? $.get(S) || $.get(z) || $.get(Number(z)) || null : $[S] || $[z] || null;
  }, s = (S, $) => {
    var te;
    const z = a(S == null ? void 0 : S.id);
    return Array.isArray((te = z == null ? void 0 : z.ui) == null ? void 0 : te[$]) ? z.ui[$] : Array.isArray(z == null ? void 0 : z[$]) ? z[$] : [];
  }, l = (S, $) => {
    const z = a(S == null ? void 0 : S.id);
    return z != null && z.ui && Object.prototype.hasOwnProperty.call(z.ui, $) ? z.ui[$] : z && Object.prototype.hasOwnProperty.call(z, $) ? z[$] : null;
  }, d = (S, $) => {
    const z = l(S, "pano_sticker_input_state_hash"), te = Array.isArray(z) ? z[0] : z;
    return String(te ?? "").trim() || Pk($);
  }, u = (S) => {
    const $ = [], z = /* @__PURE__ */ new Set();
    for (const te of S || []) {
      const ie = i(te);
      !ie || z.has(ie) || (z.add(ie), $.push(ie));
    }
    return $;
  }, f = (S, $) => {
    var ie;
    const z = [];
    Array.isArray(S == null ? void 0 : S.images) && S.images.length && z.push(S.images), Array.isArray((ie = S == null ? void 0 : S.ui) == null ? void 0 : ie.images) && S.ui.images.length && z.push(S.ui.images);
    const te = [];
    for (const G of z)
      $ >= 0 && $ < G.length && te.push(G[$]), te.push(...G);
    return te;
  }, h = (S, $) => {
    var T;
    const z = String($ || "").trim();
    if (!z) return { src: "", sourceType: "", inputName: "" };
    const ie = (Array.isArray(S == null ? void 0 : S.inputs) ? S.inputs : []).findIndex((de) => String((de == null ? void 0 : de.name) || "") === z);
    if (ie < 0) return { src: "", sourceType: "", inputName: z };
    const G = S.graph ? S.getInputLink(ie) : null;
    if ((G == null ? void 0 : G.origin_id) == null) return { src: "", sourceType: "", inputName: z };
    const j = G.origin_id, K = Ph(S, ie, j);
    if (!K) return { src: "", sourceType: "", inputName: z };
    const ce = Number(G.origin_slot ?? 0);
    let Se = [];
    try {
      Se = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(K) || [] : [];
    } catch {
      Se = [];
    }
    if (Array.isArray(Se) && Se.length) {
      const de = [];
      ce >= 0 && ce < Se.length && de.push(Se[ce]), de.push(...Se);
      const he = u(de.filter((xe) => !Ds(xe)));
      if (he.length)
        return { src: he[0], srcCandidates: he, sourceType: "appNodeImageUrls", inputName: z };
    }
    const be = a((K == null ? void 0 : K.id) ?? j), ge = u(f(be, ce).filter((de) => !Ds(de))).map((de) => `${de}&pano_src=${Ou(be)}`);
    if (ge.length)
      return { src: ge[0], srcCandidates: ge, sourceType: "nodeOutputs", inputName: z };
    const X = Array.isArray(K == null ? void 0 : K.imgs) ? K.imgs : [];
    if (X.length) {
      const de = [];
      ce >= 0 && ce < X.length && de.push(X[ce]), de.push(...X);
      const he = u(de);
      if (he.length)
        return { src: he[0], srcCandidates: he, sourceType: "nodeImgs", inputName: z };
    }
    const A = (T = K == null ? void 0 : K.widgets) == null ? void 0 : T.find((de) => String((de == null ? void 0 : de.name) || "").toLowerCase() === "image");
    if (A) {
      let de = i(A.value);
      if (de && !de.includes("/") && !de.includes(":") && (K.comfyClass === "LoadImage" || K.type === "LoadImage") && (de = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(de)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(de)}&type=input&subfolder=`), de) return { src: de, sourceType: "widget", inputName: z };
    }
    return { src: "", sourceType: "", inputName: z };
  }, g = (S, $ = []) => {
    var te;
    const z = Array.isArray(S == null ? void 0 : S.inputs) ? S.inputs : [];
    for (const ie of $) {
      const G = z.findIndex((Se) => String((Se == null ? void 0 : Se.name) || "") === ie), j = G >= 0 && S.graph ? S.getInputLink(G) : null;
      if ((j == null ? void 0 : j.origin_id) == null) continue;
      const K = a(((te = Ph(S, G, j.origin_id)) == null ? void 0 : te.id) ?? j.origin_id), ce = (Array.isArray(K == null ? void 0 : K.images) ? K.images : []).find(Ds);
      return ce ? `${Si(t, ce)}&pano_src=${Ou(K)}` : "";
    }
    return "";
  }, b = (S, $ = []) => {
    const z = Array.isArray($) ? $ : [$];
    for (const te of z) {
      const ie = h(S, te);
      if (String((ie == null ? void 0 : ie.src) || "").trim()) return ie;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, _ = (S) => {
    const $ = String(S || "").trim();
    if (!$) return [];
    if (kk($)) return [$];
    const { filename: z, subfolder: te } = Mk($);
    return z ? u([
      Si(t, { filename: z, subfolder: te, type: "temp" }),
      Si(t, { filename: z, subfolder: te, type: "output" }),
      Si(t, { filename: z, subfolder: te, type: "input" }),
      $
    ]) : [$];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (S) => {
      var $, z;
      try {
        (z = ($ = S == null ? void 0 : S.__panoLinkedInputImageCache) == null ? void 0 : $.forEach) == null || z.call($, (te, ie, G) => {
          var j;
          te != null && te.img && ((j = r == null ? void 0 : r.isImageLoadFailed) != null && j.call(r, te.img)) && G.delete(ie);
        });
      } catch {
      }
    },
    externalStateHash: d,
    invalidateUiImage: (S, $) => {
      var z;
      (z = S == null ? void 0 : S.delete) == null || z.call(S, `__ui__${String($ || "")}`);
    },
    linkedValue: (S, $) => {
      var j, K, ce, Se;
      const z = String($ || ""), te = Array.isArray(S == null ? void 0 : S.inputs) ? S.inputs.findIndex((be) => String((be == null ? void 0 : be.name) || "") === z) : -1, ie = te >= 0 && S.graph ? S.getInputLink(te) : null;
      if (ie) {
        const be = a(ie.origin_id), ge = [
          be == null ? void 0 : be.output,
          be == null ? void 0 : be.result,
          (j = be == null ? void 0 : be.data) == null ? void 0 : j.output,
          (K = be == null ? void 0 : be.data) == null ? void 0 : K.result,
          (ce = be == null ? void 0 : be.ui) == null ? void 0 : ce.output,
          (Se = be == null ? void 0 : be.ui) == null ? void 0 : Se.result
        ];
        for (const X of ge) {
          if (!Array.isArray(X)) continue;
          const A = X[Number(ie.origin_slot || 0)];
          if (typeof A == "string" && A.trim()) return A;
        }
      }
      const G = Array.isArray(S == null ? void 0 : S.widgets) ? S.widgets.find((be) => String((be == null ? void 0 : be.name) || "") === z) : null;
      return String((G == null ? void 0 : G.value) || "");
    },
    linkedVideoFile: g,
    loadPreferredExactLinkedImage: (S, $ = [], z = null, te = "") => {
      var He;
      const ie = Array.isArray($) ? $ : [$], G = b(S, ie), K = (Array.isArray(G == null ? void 0 : G.srcCandidates) && G.srcCandidates.length ? G.srcCandidates : [G == null ? void 0 : G.src]).map((se) => String(se || "").trim()).filter(Boolean);
      if (!K.length) return null;
      const ce = u(K.flatMap((se) => _(se)));
      if (!ce.length) return null;
      S.__panoLinkedInputImageCache || (S.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const Se = String(te || ie.join("|") || "image_exact"), be = K.join(`
`), ge = S.__panoLinkedInputImageCache.get(Se);
      if (ge && ge.srcRaw === be && ge.img) return ge.img;
      const X = n || globalThis.Image;
      if (typeof X != "function") return null;
      const A = new X();
      (He = r == null ? void 0 : r.markImageLoading) == null || He.call(r, A, be);
      const T = { srcRaw: be, resolvedSrc: "", img: A };
      S.__panoLinkedInputImageCache.set(Se, T);
      let de = -1;
      const he = (se) => {
        var R, ae, me;
        se === "ready" ? (R = r == null ? void 0 : r.markImageReady) == null || R.call(r, A, be) : (ae = r == null ? void 0 : r.markImageFailed) == null || ae.call(r, A, be), z == null || z(A), (me = S.setDirtyCanvas) == null || me.call(S, !0, !0);
      }, xe = () => {
        if (de += 1, de >= ce.length) {
          he("failed");
          return;
        }
        T.resolvedSrc = ce[de], A.src = T.resolvedSrc;
      };
      return A.onload = () => he("ready"), A.onerror = () => {
        if (de + 1 < ce.length) {
          xe();
          return;
        }
        he("failed");
      }, xe(), A;
    },
    output: a,
    resolvePreferredExactLinkedSource: b,
    source: i,
    uiImage: (S, $, z, te = null) => {
      var be, ge, X;
      const ie = s(S, $)[0] || null, G = i(ie);
      if (!G) return null;
      const j = `__ui__${$}`, K = (be = z == null ? void 0 : z.get) == null ? void 0 : be.call(z, j);
      if (K && K.__panoSrc === G) return K;
      const ce = n || globalThis.Image;
      if (typeof ce != "function") return null;
      const Se = new ce();
      return Se.__panoSrc = G, (ge = r == null ? void 0 : r.markImageLoading) == null || ge.call(r, Se, G), Se.onload = () => {
        var A;
        (A = r == null ? void 0 : r.markImageReady) == null || A.call(r, Se, G), te == null || te(Se);
      }, Se.onerror = () => {
        var A;
        (A = r == null ? void 0 : r.markImageFailed) == null || A.call(r, Se, G), te == null || te(Se);
      }, Se.src = G, (X = z == null ? void 0 : z.set) == null || X.call(z, j, Se), Se;
    },
    uiList: s,
    uiValue: l
  };
}
const Nk = 1e-3;
function F0(e, t, n, r) {
  if (!To(e, t)) return null;
  const i = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const a = Math.floor(i + 0.5);
    return a >= 0 && a < r.frames ? (a + 0.5) / r.fps : null;
  }
  const o = i / n + Math.max(Nk / n, Number(r.pts_tolerance) || 0);
  return o >= 0 && o < r.duration ? o : null;
}
function T0(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function Ak(e, t) {
  return Math.floor(e * t.fps);
}
function D0(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const Nh = 4;
function L0({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let i = null;
  function o(a) {
    return r.has(a) || r.set(a, e(n[a], t)), r.get(a);
  }
  return {
    picture(a, s, l, d) {
      if ((a.length !== n.length || a.some((h, g) => h !== n[g])) && (n = a, r.clear(), i = null), s === null) return null;
      const u = Ak(s, l);
      for (let h = u; h < Math.min(n.length, u + Nh + 1); h += 1) o(h);
      for (const h of r.keys())
        (h < u || h > u + Nh) && h !== i && r.delete(h);
      const f = r.get(u);
      return f != null && f.complete && f.naturalWidth > 0 && (i !== null && i !== u && r.delete(i), i = u), i === null ? d : r.get(i);
    }
  };
}
function R0({
  readState: e,
  reduce: t,
  projectModel: n,
  publishLiveState: r = () => {
  },
  commitState: i,
  onChange: o = () => {
  }
} = {}) {
  if (typeof e != "function" || typeof t != "function" || typeof n != "function" || typeof i != "function")
    throw new TypeError("Node surface session requires readState, reduce, projectModel, and commitState.");
  let a = null, s = !1, l = !1;
  const d = () => a || e(), u = () => o(n(d()));
  return {
    model: () => n(d()),
    refresh() {
      return l ? this.model() : (u(), this.model());
    },
    beginGesture() {
      return l || a ? !1 : (a = e(), s = !1, u(), !0);
    },
    updateGesture(f) {
      if (l) return !1;
      a || this.beginGesture();
      const h = t(a, f);
      return h.changed ? (a = h.state, s = !0, r(a), u(), !0) : !1;
    },
    hasGestureChanges() {
      return a != null && s;
    },
    commitGesture() {
      if (l || !a) return !1;
      const f = s;
      return f && i(a), a = null, s = !1, r(null), u(), f;
    },
    cancelGesture() {
      return l || !a ? !1 : (a = null, s = !1, r(null), u(), !0);
    },
    apply(f) {
      if (l) return !1;
      a && this.commitGesture();
      const h = t(e(), f);
      return h.changed ? (i(h.state), u(), !0) : !1;
    },
    destroy() {
      if (l) return;
      l = !0;
      const f = a != null;
      a = null, s = !1, f && r(null);
    }
  };
}
const Ls = "sticker_image_1", V0 = "external_image", Io = 0;
function _o(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function Kc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function oi(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function Fu(e, t = Io) {
  return (e == null ? void 0 : e.version) !== 2 ? oi(e) : oi(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: Vi(n, t).active,
    external: n.source.kind === "port",
    ...Td(n, t)
  }));
}
function Wd(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && oi(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function $0(e) {
  return String((e == null ? void 0 : e.id) || "") === Ls || String((e == null ? void 0 : e.source_kind) || "") === V0;
}
function Kd(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : $0(t);
}
const z0 = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function j0(e) {
  return !$0(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(z0.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(r) ? r : n];
  }));
}
function H0(e) {
  const t = j0(e);
  return t ? z0.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function G0(e, t = {}) {
  var O, S, $;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((z) => String((z == null ? void 0 : z.id) || "") === Ls);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const z = String(((O = e.active) == null ? void 0 : O.selected_sticker_id) || "") === Ls;
    return {
      state: {
        ...e,
        stickers: n.filter((te, ie) => ie !== r),
        active: z ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), a = r >= 0 ? n[r] : null, s = !a || Number(a.source_link_id ?? -1) !== i || String(a.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), d = Number(t.imageHeight || 0), u = l > 0 && d > 0, f = Math.max(1, l), h = Math.max(1, d), g = t.pose && typeof t.pose == "object" ? t.pose : {}, b = s ? g.hFOV_deg || (a == null ? void 0 : a.hFOV_deg) || 30 : (a == null ? void 0 : a.hFOV_deg) || g.hFOV_deg || 30, _ = Math.min(179, Math.max(0.1, Number(b)));
  if (!s) {
    if (!u) return { state: e, changed: !1 };
    const z = _o(_, f, h), te = Number(((S = a == null ? void 0 : a.initial_pose) == null ? void 0 : S.hFOV_deg) ?? _), ie = _o(te, f, h), G = Number((($ = a == null ? void 0 : a.initial_pose) == null ? void 0 : $.vFOV_deg) ?? ie);
    return Math.abs(Number((a == null ? void 0 : a.vFOV_deg) || 0) - z) <= 1e-6 && Math.abs(G - ie) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((j, K) => K === r ? {
          ...j,
          vFOV_deg: z,
          initial_pose: j.initial_pose && typeof j.initial_pose == "object" ? { ...j.initial_pose, vFOV_deg: ie } : j.initial_pose
        } : j)
      },
      changed: !0
    };
  }
  const v = n.reduce((z, te) => Math.max(z, Number((te == null ? void 0 : te.z_index) || 0)), -1), P = {
    yaw_deg: Number(g.yaw_deg || 0),
    pitch_deg: Number(g.pitch_deg || 0),
    hFOV_deg: _,
    vFOV_deg: u ? _o(_, f, h) : Number(g.vFOV_deg || (a == null ? void 0 : a.vFOV_deg) || _),
    rot_deg: Number(g.rot_deg ?? g.roll_deg ?? 0)
  }, W = {
    ...a || {},
    id: Ls,
    source_kind: V0,
    source_link_id: i,
    source_state_hash: o,
    ...P,
    initial_pose: { ...P },
    visible: !0,
    z_index: v + 1
  }, D = r >= 0 ? n.map((z, te) => te === r ? W : z) : [...n, W];
  return { state: { ...e, stickers: D }, changed: !0 };
}
function Ah(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const Ck = ["IMAGE", "VIDEO"];
function Ch(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => Ck.includes(n)) ? "2d" : null;
}
function Ik(e, t) {
  var i, o, a, s, l, d;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((u) => (u == null ? void 0 : u.name) === t), r = n >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, n) : null;
  return r ? Ch(r.type) ?? Ch((d = (l = (s = (a = (o = e.graph).getNodeById) == null ? void 0 : a.call(o, r.origin_id)) == null ? void 0 : s.outputs) == null ? void 0 : l[r.origin_slot]) == null ? void 0 : d.type) : null;
}
function W0(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: Ah(e, "sticker"),
    awaitingPose: !t && (Ah(e, "sticker_state") || Ik(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function Ih(e, t) {
  const n = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return xr({ version: 2, stickers: [n] }).stickers[0];
}
function K0(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: i = 0, imageHeight: o = 0 } = {}) {
  var _;
  const a = e.stickers.findIndex((v) => Kd(e, v)), s = a >= 0 ? e.stickers[a] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const v = ((_ = e.active) == null ? void 0 : _.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((P, W) => W !== a),
        active: v ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const l = i > 0 && o > 0;
  if (s && (r == null ? void 0 : r.placement) === "world" && r.replace && s.placement === "sky") {
    const v = { ...Ih(s.id, r), clip: s.clip, visible: s.visible, locked: s.locked };
    return { state: { ...e, stickers: e.stickers.map((P, W) => W === a ? v : P) }, changed: !0 };
  }
  if (s) {
    if (!l || s.placement !== "sky") return { state: e, changed: !1 };
    const v = [s.size.value, ...s.size.keyframes.map((D) => D.value)], P = v.map((D) => _o(D.hFOV_deg, i, o));
    if (v.every((D, O) => Math.abs(D.vFOV_deg - P[O]) <= 1e-6)) return { state: e, changed: !1 };
    const W = {
      value: { ...s.size.value, vFOV_deg: P[0] },
      keyframes: s.size.keyframes.map((D, O) => ({ ...D, value: { ...D.value, vFOV_deg: P[O + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((D, O) => O === a ? { ...D, size: W } : D) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const d = new Set(e.stickers.map((v) => v.id));
  let u = 1;
  for (; d.has(`sticker_${u}`); ) u += 1;
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, Ih(`sticker_${u}`, r)] }, changed: !0 };
  const f = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), h = (v) => l ? _o(v, i, o) : v, g = Dd(`sticker_${u}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: f,
    vFOV_deg: h(f)
  }, oi(e).reduce((v, P) => Math.max(v, P.z_index), -1) + 1), b = (r == null ? void 0 : r.keyframes) ?? {};
  return g.direction.keyframes = b.direction ?? [], g.roll.keyframes = b.roll ?? [], g.size.keyframes = (b.size ?? []).map((v) => ({ ...v, value: { ...v.value, vFOV_deg: h(v.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, g] }, changed: !0 };
}
function Bd(e) {
  const t = oi(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: Kc(o.z_index),
    item: o
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: Kc(o.z_index),
    item: o
  })), i = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: Kc(o.z_index),
    item: o
  }));
  return [...t, ...r, ...i].sort((o, a) => o.z_index - a.z_index);
}
function B0(e) {
  const t = Wd(e), n = Kd(e, t), r = oi(e).some((s) => s && s.visible !== !1), i = Bd(e), o = t ? i.findIndex((s) => s.type === "sticker" && s.item === t) : -1, a = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: H0(t),
    selectedId: t ? String(t.id || "") : null,
    locked: a,
    canDelete: !!t && !a,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function Ek(e) {
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
function Eh(e, t) {
  const n = Wd(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = Ek(e), i = String(n.id || ""), o = Bd(r), a = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (a < 0) return { state: e, changed: !1 };
  if (t === "front" && a === o.length - 1 || t === "back" && a === 0)
    return { state: e, changed: !1 };
  const [s] = o.splice(a, 1);
  return t === "front" ? o.push(s) : o.unshift(s), o.forEach((l, d) => {
    l.item.z_index = d;
  }), { state: r, changed: !0 };
}
function Ok(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function Fk(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return G0(e, t.value);
  if (t.type === "sync-port") return K0(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), a = String(i.assetId || "").trim();
    if (!o || !a || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((h) => String((h == null ? void 0 : h.id) || "") === o))
      return { state: e, changed: !1 };
    const l = Bd(e).reduce((h, g) => Math.max(h, Number(g.z_index || 0)), -1), d = 30, u = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: d,
      vFOV_deg: _o(d, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, Dd(o, Os(i.asset), u, l + 1)],
          active: { ...e.active || {}, selected_sticker_id: o }
        },
        changed: !0
      };
    const f = { id: o, asset_id: a, ...u, z_index: l + 1 };
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
    return !i || !oi(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const n = Wd(e);
  if (!n) return { state: e, changed: !1 };
  if (t.type === "toggle-lock") {
    const i = n.locked !== !0;
    return {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === n ? { ...o, locked: i } : o)
      },
      changed: !0
    };
  }
  if (t.type === "restore-initial") {
    const i = j0(n);
    return !i || !H0(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === n ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Eh(e, "front");
  if (t.type === "send-back") return Eh(e, "back");
  if (t.type === "delete-selected") {
    if (Kd(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === n ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== n), o = oi({ ...e, stickers: i })[0], a = (o == null ? void 0 : o.id) == null ? null : String(o.id), s = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: a }
    };
    return e.version !== 2 && (s.assets = Ok(s)), { state: s, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], a = e.version === 2 ? Td(n, Io) : n, s = {};
    if (o.forEach((l) => {
      const d = Number(i[l]);
      Number.isFinite(d) && Math.abs(d - Number(a[l] || 0)) > 1e-12 && (s[l] = d);
    }), !Object.keys(s).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = px(n, s);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const d = structuredClone(n);
      return t0(d, Io, l), { state: { ...e, stickers: e.stickers.map((u) => u === n ? d : u) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((l) => l === n ? { ...l, ...s } : l)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function Tk(e = {}) {
  return R0({
    ...e,
    reduce: Fk,
    projectModel: B0
  });
}
const Tu = 2;
function Mi(e, t) {
  return Math.floor(e * t + 0.5);
}
function Dk(e, t) {
  return Math.floor(e * t + 1e-3);
}
function U0({ video: e, clock: t, fps: n, span: r, loop: i, onFrame: o, onCapture: a, onChange: s }) {
  let l = 0, d = !1, u = !1, f = { name: "idle" }, h = [];
  const g = () => d && !u, b = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function _() {
    for (const T of h) T();
    h = [];
  }
  function v(T, de = {}) {
    return _(), f = { name: T, ...de }, s(), f;
  }
  function P(T, de, he) {
    const xe = () => {
      f === T && he();
    };
    e.addEventListener(de, xe), h.push(() => e.removeEventListener(de, xe));
  }
  function W(T, de) {
    let he = t.requestFrame(function xe(He) {
      f === T && (de(He), f === T && (he = t.requestFrame(xe)));
    });
    h.push(() => t.cancelFrame(he));
  }
  function D(T) {
    l = T, o(l);
  }
  function O() {
    return v(u ? "error" : "idle");
  }
  function S() {
    u = !0, O();
  }
  function $() {
    const { seekable: T } = e, de = T != null && T.length ? T.end(T.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / n(), Number.isFinite(de) ? de : 1 / 0));
  }
  function z(T) {
    if (!g()) return T === "play" ? K() : O();
    if (e.readyState < Tu) {
      const de = v("loading", { then: T });
      return P(de, "loadeddata", () => z(de.then)), P(de, "error", S), de;
    }
    return T === "play" && l / n() >= Number(e.duration) ? K() : te(T, !1);
  }
  function te(T, de) {
    const he = $();
    if (!e.ended && Mi(Number(e.currentTime), n()) === Mi(he, n())) return ie(T);
    const xe = v("seeking", { then: T, frame: l, retried: de });
    return P(xe, "seeked", () => {
      const He = Mi(Number(e.currentTime), n()) === Mi($(), n()), se = l === xe.frame;
      He || se && xe.retried ? ie(xe.then) : te(xe.then, se);
    }), P(xe, "error", S), e.currentTime = he, xe;
  }
  function ie(T) {
    return T === "play" ? G() : (a(), O());
  }
  function G() {
    const T = v("playingVideo", { shown: !1 });
    if (P(T, "pause", () => e.ended ? j() : be()), P(T, "ended", j), P(T, "error", S), i() && Mi(Number(e.duration), n()) >= r()) {
      const he = e.loop;
      e.loop = !0, h.push(() => {
        e.loop = he;
      });
    }
    const de = (he, xe) => {
      xe && !T.shown && (T.shown = !0, s()), ce(Mi(he, n()));
    };
    if (b()) {
      let he = e.requestVideoFrameCallback(function xe(He, se) {
        f === T && (de(Number(se.mediaTime), !0), f === T && (he = e.requestVideoFrameCallback(xe)));
      });
      h.push(() => {
        var xe;
        return (xe = e.cancelVideoFrameCallback) == null ? void 0 : xe.call(e, he);
      });
    } else
      W(T, () => de(Number(e.currentTime), e.readyState >= Tu));
    return Promise.resolve(e.play()).catch(() => {
      f === T && be();
    }), T;
  }
  function j() {
    a(), K();
  }
  function K() {
    const T = v("playingClock", { startTs: t.now(), startFrame: l });
    return W(T, (de) => ce(T.startFrame + Math.floor((de - T.startTs) / 1e3 * n()))), T;
  }
  function ce(T) {
    if (T < r()) {
      D(T);
      return;
    }
    if (!i()) {
      Se(r() - 1);
      return;
    }
    f.name === "playingVideo" && (_(), e.pause()), D(0), z("play");
  }
  function Se(T) {
    f.name === "playingVideo" ? (_(), e.pause(), D(Math.max(0, T)), a()) : D(Math.max(0, T)), z("still");
  }
  function be() {
    if (f.name === "loading" || f.name === "seeking")
      f.then = "still", s();
    else if (f.name === "playingVideo") {
      _(), e.pause();
      const T = Dk(Number(e.currentTime), n());
      D(Math.min(T, r() - 1)), a(), l === T ? O() : z("still");
    } else f.name === "playingClock" && Se(Math.min(l, r() - 1));
  }
  function ge() {
    if (!A()) {
      if (l >= r() - 1 && D(0), f.name === "loading" || f.name === "seeking") {
        f.then = "play", s();
        return;
      }
      z("play");
    }
  }
  function X(T) {
    const de = Math.max(0, Math.round(T));
    if (f.name === "loading" || f.name === "seeking") {
      f.then = "still", D(de), s();
      return;
    }
    f.name === "playingVideo" && (_(), e.pause()), D(de), z("still");
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
    play: ge,
    stop: be,
    seek: X,
    toggle() {
      A() ? be() : ge();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(T) {
      _(), d = !!T, u = !1, z("still");
    },
    dispose() {
      _(), d = !1, f = { name: "idle" };
    }
  };
}
function Y0({ video: e, onCapture: t, onChange: n }) {
  let r = "", i = !1, o = { time: null, playing: !1, fps: 1 }, a = null, s = null, l = !1;
  function d(_) {
    s = _, t();
  }
  function u(_) {
    a = _, e.currentTime = _;
  }
  function f() {
    const _ = l;
    h(), l !== _ && n();
  }
  function h() {
    if (!r || i || e.readyState < Tu) return;
    const { time: _, playing: v, fps: P } = o;
    if (_ === null) {
      e.pause(), l = !1;
      return;
    }
    if (v) {
      if (a !== null) return;
      const W = Number(e.duration), D = Number.isFinite(W) ? Math.min(_, W) : _, O = Math.abs(Number(e.currentTime) - D) > 1.5 / P;
      if (e.ended && !O) return;
      O && u(D), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, d(NaN)), !(a !== null || s === _) && (Number(e.currentTime) === _ ? d(_) : u(_));
  }
  const g = {
    loadeddata: f,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: f,
    seeked: () => {
      const _ = a;
      a = null, !o.playing && _ === o.time ? d(_) : f();
    },
    playing: () => {
      !o.playing || l || (l = !0, n());
    },
    error: () => {
      r && (i = !0, n());
    }
  };
  e.muted = !0;
  for (const [_, v] of Object.entries(g)) e.addEventListener(_, v);
  function b(_) {
    r = _, i = !1, a = null, s = null, l = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: _ = "", time: v = null, playing: P = !1, fps: W }) {
      _ !== r && (b(_), n()), o = { time: v, playing: P, fps: W }, f();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(_, v) {
      return !r || i ? v : o.time === null ? null : o.playing && l ? e : s === null ? v : _;
    },
    dispose() {
      for (const [_, v] of Object.entries(g)) e.removeEventListener(_, v);
      b("");
    }
  };
}
function Du(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function Lk({ video: e, stickerVideo: t, createImage: n, clock: r, readState: i, onFrame: o, onCapture: a, onStickerCapture: s, onChange: l, camera: d = !1 }) {
  let u = "", f = "", h = 0;
  const g = /* @__PURE__ */ new Set();
  let b = null, _ = null;
  const v = () => i().timeline.fps, P = (j) => j.stickers.find((K) => K.source.kind === "port"), W = () => {
    const j = i(), K = P(j);
    return Jg(j, {
      minimum: Math.round(v() * 5),
      frames: Math.max(
        u ? Math.round(h * v()) : 0,
        b && K ? T0(K.clip, v(), b.meta) : 0
      ),
      camera: d
    });
  }, D = U0({
    video: e,
    clock: r,
    fps: v,
    span: W,
    loop: () => !0,
    onFrame: o,
    onCapture: a,
    onChange: l
  }), O = () => {
    f === u && Number.isFinite(e.duration) && (h = e.duration);
  }, S = () => {
    f && (g.add(f), l());
  }, $ = Y0({ video: t, onCapture: s, onChange: l }), z = L0({ createImage: n, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", O), e.addEventListener("error", S);
  function te(j) {
    j !== f && (f = j, e.pause(), j ? e.src = j : e.removeAttribute("src"), e.load(), D.setSource(!!j));
  }
  function ie() {
    D.playing && D.stop();
  }
  function G(j) {
    const K = P(j);
    _ = b && K ? F0(K.clip, D.frame, j.timeline.fps, b.meta) : null, $.follow({
      src: (b == null ? void 0 : b.src) || "",
      time: _,
      playing: D.advancing,
      fps: j.timeline.fps
    });
  }
  return {
    get frame() {
      return D.frame;
    },
    get playing() {
      return D.playing;
    },
    get showsVideo() {
      return D.showsVideo;
    },
    get source() {
      return f;
    },
    pause: ie,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return b;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(j, K) {
      return b != null && b.frames ? z.picture(b.frames, _, b.meta, K) : $.picture(j, K);
    },
    toggle() {
      D.playing ? D.stop() : D.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: j, sources: K, state: ce, sticker: Se = null }) {
      if (b = j ? Se : null, !j)
        return ie(), te(""), G(ce), !1;
      for (const T of g)
        K.includes(T) || g.delete(T);
      const be = K.find((T) => T && !g.has(T)) || "", ge = be !== u;
      ge && (u = be, h = 0), te(u);
      const X = Xg(ce, { camera: d }) || !!u && D.state !== "error" || !!b;
      return X || ie(), (ge || !X || !D.playing && D.frame >= W()) && D.frame !== Io && D.seek(Io), G(ce), X;
    },
    dispose() {
      D.dispose(), $.dispose(), e.removeEventListener("loadedmetadata", O), e.removeEventListener("error", S), e.pause(), e.removeAttribute("src"), e.load(), f = "";
    }
  };
}
const ul = Math.PI / 180, Sr = 180 / Math.PI, Rk = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), Vk = 260;
function Oh(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function q0(e, t) {
  return t ? q0(t, e % t) : e;
}
function $k(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = r ? 1e3 : 1e6, o = r ? 1 : Math.max(e, t), a = Math.max(1, Math.round(e / o * i)), s = Math.max(1, Math.round(t / o * i)), l = q0(a, s) || 1;
  return `${Math.round(a / l)}:${Math.round(s / l)}`;
}
function La(e, t) {
  const n = Oh(e), r = Oh(t);
  if (n == null || r == null) return null;
  const i = n / r;
  return !Number.isFinite(i) || i <= 0 ? null : { width: n, height: r, ratio: i, label: $k(n, r) };
}
function Li(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === n) || t[0] || null;
}
function X0(e) {
  const t = Li(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? zr(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function Ud(e, t, n = Rk) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), a = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), s = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), l = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), d = (v, P, W) => {
    const D = v + P, O = Math.max(0, W - 1), S = D > O && D > 0 ? O / D : 1;
    return [v * S, P * S];
  }, [u, f] = d(l, a, r), [h, g] = d(o, s, i), b = {
    x: u,
    y: h,
    w: Math.max(1, r - u - f),
    h: Math.max(1, i - h - g)
  }, _ = Sd(b, t);
  return {
    x: b.x + (b.w - _.width) * 0.5,
    y: b.y + (b.h - _.height) * 0.5,
    w: _.width,
    h: _.height,
    safeRect: b
  };
}
function zk(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Ud({ width: n, height: r }, 1), o = Fe(Number((e == null ? void 0 : e.fov) || 100), 1, 179), a = n / (2 * Math.tan(o * ul * 0.5)), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, d = Ig(l, Pg(
    { x: n * 0.5, y: r * 0.5 },
    a,
    s
  )), u = jk(d, Oo(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), f = wd({ width: i.w, height: i.h }, a);
  return {
    type: "add-frame",
    yawDeg: u.yaw,
    pitchDeg: u.pitch,
    rollDeg: u.roll,
    frameFovDeg: f.hFOV_deg
  };
}
function J0(e) {
  return {
    yaw: zt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Sr),
    pitch: Fe(Math.asin(Fe(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Sr, -89.9, 89.9)
  };
}
function jk(e, t) {
  const n = J0(e), r = Oo(n.yaw, n.pitch, 0), i = Ec(t, e), o = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * i,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * i,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * i
  }, a = Math.hypot(o.x, o.y, o.z);
  if (!(a > 1e-8)) return { ...n, roll: 0 };
  const s = {
    x: o.x / a,
    y: o.y / a,
    z: o.z / a
  };
  return {
    ...n,
    roll: Ll(Math.atan2(
      Ec(s, r.up),
      Ec(s, r.right)
    ) * Sr)
  };
}
function Z0(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Ud({ width: n, height: r }, zi(e)), o = Di(i, e), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, s = Ig(e, Pg(
    a,
    o,
    { x: n * 0.5, y: r * 0.5 }
  )), l = J0(s);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Fe(2 * Math.atan(n / (2 * o)) * Sr, 1, 179)
  };
}
function Hk(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, a = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, s = Di(t, n), l = {
    width: Math.max(o, r - o) * 2,
    height: Math.max(a, i - a) * 2
  }, { halfW: d, halfH: u } = xd(l, s), f = {
    x: o - d,
    y: a - u,
    w: d * 2,
    h: u * 2
  }, h = f.x <= 0 && f.y <= 0 && f.x + f.w >= r && f.y + f.h >= i, g = r / i, b = Math.tan(mu * ul), _ = g >= 1 ? b : b * g, v = g >= 1 ? b / g : b;
  return {
    focalPx: s,
    rect: f,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(d / s) * Sr,
      vFOV_deg: 2 * Math.atan(u / s) * Sr
    },
    fallback: h ? null : {
      rect: { x: 0, y: 0, w: r, h: i },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(_) * Sr,
        vFOV_deg: 2 * Math.atan(v) * Sr
      }
    }
  };
}
function io(e, t) {
  const n = Li(e);
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
function Gk(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), i = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(i) && i > 0) {
    const a = Di(n, e);
    return wd(Sd(n, t), a);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: Cs(o, t) };
}
function Fh(e, t, n, { preserveOrientation: r = !1, safeRect: i = null } = {}) {
  let o = La(t, n);
  if (!o) return e;
  const a = zi(e) >= 1;
  r && o.ratio >= 1 !== a && (o = La(o.height, o.width));
  const s = Gk(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - s.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - s.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...s, aspect_id: o.label };
}
function Q0(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Li(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), i = Ng({
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
    const r = Li(e);
    if (!r) return { state: e, changed: !1 };
    const i = (Array.isArray(e.shots) ? e.shots : []).filter((a) => a !== r), o = ((n = i[0]) == null ? void 0 : n.id) == null ? null : String(i[0].id);
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
    return io(e, (r) => Fh(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return io(e, (r) => {
      const o = String(zr(r) || "").match(/^([0-9.]+):([0-9.]+)$/), a = o ? La(o[1], o[2]) : La(zi(r), 1);
      return a ? Fh(r, a.height, a.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? io(e, (i) => {
      const o = Ll(r), a = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(a - o) <= 1e-12) return i;
      const s = { ...i, roll_deg: o };
      return delete s.rot_deg, s;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? io(e, (r) => {
    const i = Ag(r, t.scale);
    return i ? { ...r, ...i } : r;
  }) : t.type === "step-fov" ? io(e, (r) => {
    const i = Cg(r, t.direction);
    return i ? { ...r, ...i } : r;
  }) : t.type === "pan-camera" ? io(e, (r) => {
    const i = ny(t.startShot || r, t);
    return Math.abs(Number(i.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function ey({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: r = !1,
  altKey: i = !1,
  allowAlt: o = !1,
  deadZoneRatio: a = 0.05
} = {}) {
  const s = o && i ? "alt" : r ? "shift" : "";
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
  const f = Math.atan2(Number(t.y || 0) - d.y, Number(t.x || 0) - d.x);
  return {
    source: s,
    frame: l,
    center: d,
    startRollDeg: Number(n || 0),
    lastAngle: f,
    accumulatedRad: 0
  };
}
function ty(e, t, n = {}) {
  var a, s;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((a = e.center) == null ? void 0 : a.y) || 0),
    Number(t.x || 0) - Number(((s = e.center) == null ? void 0 : s.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + kg(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: i },
    rollDeg: Mg(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function ny(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * r, a = Number(t.dy || 0) * i, s = Number(e.roll_deg ?? e.rot_deg ?? 0) * ul, l = Math.cos(s), d = Math.sin(s), u = o / n, f = -a / n, h = u * l - f * d, g = u * d + f * l, b = Number(e.pitch_deg || 0) * ul, _ = Math.max(0.25, Math.abs(Math.cos(b)));
  return {
    ...e,
    yaw_deg: zt(Number(e.yaw_deg || 0) - Math.atan(h) / _ * Sr),
    pitch_deg: Fe(Number(e.pitch_deg || 0) - Math.atan(g) * Sr, -90, 90)
  };
}
function Wk({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return R0({
    readState: e,
    reduce: Q0,
    projectModel: X0,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Ye = Object.freeze({
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
}), Kk = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, Bk = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: Kk(t[2])
})), Uk = {
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
}, Th = Object.fromEntries(
  Object.entries(Uk).map(([e, t]) => [e, {
    name: t.name,
    elements: Bk(t.body)
  }])
), jt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = dt(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Th, r) ? Th[r] : null;
    });
    return (r, i) => n.value ? ($e(), je("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: ht(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      ($e(!0), je(ot, null, At(n.value.elements, (o, a) => ($e(), je(ot, {
        key: `${n.value.name || e.icon || "icon"}-${o.tag}-${a}`
      }, [
        o.tag === "path" ? ($e(), je("path", Rr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? ($e(), je("circle", Rr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? ($e(), je("rect", Rr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? ($e(), je("line", Rr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? ($e(), je("polyline", Rr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? ($e(), je("polygon", Rr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : mt("", !0)
      ], 64))), 128))
    ], 2)) : mt("", !0);
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
    const t = e, n = dt(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, i) => ($e(), Yn(t_(e.tag), Rr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Gm(() => [
        tt(jt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, Yk = ["aria-expanded", "disabled"], qk = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, Xk = ["data-aspect", "disabled", "onClick"], Jk = { class: "pano-cutout-aspect-custom" }, Zk = ["disabled"], Qk = ["disabled"], eM = ["data-custom-width", "data-custom-height", "disabled"], ry = {
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
    ]), o = /* @__PURE__ */ Yt("1"), a = /* @__PURE__ */ Yt("1"), s = /* @__PURE__ */ Yt(null), l = dt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), d = dt(() => {
      const _ = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], v = String(n.model.aspectLabel || "");
      return _.length ? _.map((P) => {
        const W = typeof P == "string" ? P : String((P == null ? void 0 : P.value) || ""), D = typeof P == "string" ? P : String((P == null ? void 0 : P.label) || W);
        return {
          ...typeof P == "object" && P ? P : {},
          value: W,
          label: D,
          active: v ? W === v : (P == null ? void 0 : P.active) === !0
        };
      }) : i.map((P) => ({
        ...P,
        active: P.value === v
      }));
    }), u = dt(() => {
      var v;
      const _ = String(n.model.aspectLabel || "").trim();
      return _ || String(((v = d.value.find((P) => P.active === !0)) == null ? void 0 : v.label) || "Aspect");
    });
    Fi(u, (_) => {
      const v = String(_ || "").match(/^([0-9.]+):([0-9.]+)$/);
      v && (o.value = v[1], a.value = v[2]);
    }, { immediate: !0 });
    function f(_) {
      r("action", _);
    }
    function h(_) {
      var v;
      n.model.aspectOpen === !0 && ((v = s.value) != null && v.contains(_.target) || f({ type: "close-aspect" }));
    }
    El(() => {
      document.addEventListener("pointerdown", h, !0);
    }), Ha(() => {
      document.removeEventListener("pointerdown", h, !0);
    });
    function g(_) {
      const [v, P] = String(_.value || "").split(":");
      f({
        type: "set-aspect",
        width: v,
        height: P,
        preserveOrientation: !0
      });
    }
    function b() {
      f({
        type: "set-aspect",
        width: o.value,
        height: a.value,
        preserveOrientation: !1
      });
    }
    return (_, v) => ($e(), je("div", {
      ref_key: "rootElement",
      ref: s,
      class: ht(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? ($e(), Yn(tn, {
        key: 0,
        icon: e.model.aspectIcon || at(Ye).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: v[0] || (v[0] = (P) => f({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : ($e(), je("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: v[1] || (v[1] = (P) => f({ type: "toggle-aspect" }))
      }, [
        tt(jt, {
          icon: e.model.aspectIcon || at(Ye).aspect
        }, null, 8, ["icon"]),
        Me("span", null, ct(u.value), 1),
        tt(jt, {
          icon: at(Ye).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, Yk)),
      Hr(Me("div", qk, [
        ($e(!0), je(ot, null, At(d.value, (P) => ($e(), je("button", {
          key: P.value,
          class: ht(["pano-btn pano-frame-aspect-choice", { active: P.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": P.value,
          disabled: l.value,
          onClick: (W) => g(P)
        }, ct(P.label), 11, Xk))), 128)),
        Me("div", Jk, [
          Hr(Me("input", {
            "onUpdate:modelValue": v[2] || (v[2] = (P) => o.value = P),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, Zk), [
            [eh, o.value]
          ]),
          v[4] || (v[4] = Me("span", { "aria-hidden": "true" }, ":", -1)),
          Hr(Me("input", {
            "onUpdate:modelValue": v[3] || (v[3] = (P) => a.value = P),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, Qk), [
            [eh, a.value]
          ]),
          Me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": a.value,
            disabled: l.value,
            onClick: b
          }, "Apply", 8, eM)
        ])
      ], 512), [
        [Ri, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, tM = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, nM = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Yt(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, i) => ($e(), je("div", {
      class: ht(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Lt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Lt(() => {
      }, ["stop"]))
    }, [
      tt(tn, {
        icon: at(Ye).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Lt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", tM, [
        i[3] || (i[3] = Me("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        ($e(!0), je(ot, null, At(at(n), (o) => ($e(), je("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Me("kbd", null, ct(o[0]), 1),
          Me("span", null, ct(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, rM = {
  class: "pano-view-unavailable",
  role: "status"
}, Yd = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => ($e(), je("div", rM, ct(at(w0)), 1));
  }
}, iM = { class: "pano-cutout-node-surface" }, oM = ["title", "disabled"], aM = { class: "value" }, sM = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, lM = {
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
    return (r, i) => ($e(), je("div", iM, [
      Me("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = Lt(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = Lt(() => {
        }, ["stop"]))
      }, [
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => n({ type: "open-editor" }))
        }, [
          tt(jt, {
            icon: at(Ye).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Me("span", { class: "label" }, "Full Editor", -1))
        ]),
        tt(tn, {
          icon: e.model.hasShot ? at(Ye).delete : at(Ye).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        tt(ry, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        Me("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = Lt((o) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          tt(jt, {
            icon: at(Ye).roll
          }, null, 8, ["icon"]),
          Me("span", aM, ct(e.model.rollLabel || "0.0°"), 1)
        ], 40, oM),
        tt(tn, {
          icon: at(Ye).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        tt(nM)
      ], 32),
      e.model.hasShot === !1 ? ($e(), je("div", sM, " Choose a view · + Add Frame ")) : mt("", !0),
      e.model.viewUnavailable ? ($e(), Yn(Yd, { key: 1 })) : mt("", !0)
    ]));
  }
}, iy = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, i = /* @__PURE__ */ Yt(null);
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
    function d(f) {
      var _, v;
      const { active: h, intent: g } = s();
      if (!h) return;
      const b = ((v = (_ = f.target) == null ? void 0 : _.files) == null ? void 0 : v[0]) || null;
      if (b) {
        r("file-selected", { intent: g, file: b });
        return;
      }
      r("file-cancelled", { intent: g });
    }
    function u() {
      const { active: f, intent: h } = s();
      f && r("file-cancelled", { intent: h });
    }
    return t({ open: l }), (f, h) => ($e(), je("input", {
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
}, cM = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, uM = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Yt(!1), n = Object.freeze([
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
    return (r, i) => ($e(), je("div", {
      class: ht(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Lt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Lt(() => {
      }, ["stop"]))
    }, [
      tt(tn, {
        icon: at(Ye).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Lt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", cM, [
        i[3] || (i[3] = Me("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        ($e(!0), je(ot, null, At(at(n), (o) => ($e(), je("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Me("kbd", null, ct(o[0]), 1),
          Me("span", null, ct(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, dM = { class: "pano-stickers-node-surface" }, fM = ["disabled"], pM = ["aria-label", "data-tip"], hM = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, mM = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, gM = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Yt(null);
    function r(a) {
      var s;
      (s = t.onAction) == null || s.call(t, a);
    }
    function i() {
      var a, s;
      (s = (a = n.value) == null ? void 0 : a.open) == null || s.call(a, "add");
    }
    function o(a) {
      r({ type: "add-image-file", file: (a == null ? void 0 : a.file) || null });
    }
    return (a, s) => ($e(), je("div", dM, [
      Me("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: s[5] || (s[5] = Lt(() => {
        }, ["stop"])),
        onWheel: s[6] || (s[6] = Lt(() => {
        }, ["stop"]))
      }, [
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: s[0] || (s[0] = (l) => r({ type: "open-editor" }))
        }, [
          tt(jt, {
            icon: at(Ye).fullscreen
          }, null, 8, ["icon"]),
          s[10] || (s[10] = Me("span", { class: "label" }, "Full Editor", -1))
        ]),
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          tt(jt, {
            icon: at(Ye).image
          }, null, 8, ["icon"]),
          s[11] || (s[11] = Me("span", { class: "label" }, "Add Image", -1))
        ], 8, fM),
        tt(tn, {
          icon: e.model.locked ? at(Ye).lock_closed : at(Ye).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: s[1] || (s[1] = (l) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        tt(tn, {
          icon: at(Ye).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: s[2] || (s[2] = (l) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        tt(tn, {
          icon: at(Ye).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: s[3] || (s[3] = (l) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        tt(tn, {
          icon: e.model.isExternalSelection ? at(Ye).back_initial : at(Ye).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: s[4] || (s[4] = (l) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        tt(uM)
      ], 32),
      e.model.playable === !0 ? ($e(), je("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: s[7] || (s[7] = Lt(() => {
        }, ["stop"])),
        onWheel: s[8] || (s[8] = Lt(() => {
        }, ["stop"])),
        onClick: s[9] || (s[9] = (l) => r({ type: "toggle-playback" }))
      }, [
        tt(jt, {
          icon: e.model.playing ? at(Ye).pause : at(Ye).play
        }, null, 8, ["icon"])
      ], 40, pM)) : mt("", !0),
      e.model.hasStickers === !1 ? ($e(), je("div", hM, " Add Image to place a sticker ")) : mt("", !0),
      e.model.dropActive === !0 ? ($e(), je("div", mM, "Drop image to add")) : mt("", !0),
      tt(iy, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? ($e(), Yn(Yd, { key: 3 })) : mt("", !0)
    ]));
  }
}, Dh = 24;
function yM(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function wa(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function oy(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r, r += 1) {
    const o = t[r], a = t[i];
    o.y > e.y != a.y > e.y && e.x < (a.x - o.x) * (e.y - o.y) / (a.y - o.y || 1e-12) + o.x && (n = !n);
  }
  return n;
}
function Lu(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => wa(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], i = r.x - e.center.x, o = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return wa(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : oy(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function bM(e, t, { edges: n = !1, resize: r = !0, emptyCursor: i = "default" } = {}) {
  if (r && n && Array.isArray(e.edgeMidpoints)) {
    const a = e.edgeMidpoints.find((s) => wa(s, t) <= 169);
    if (a) {
      const s = a.edge === "left" || a.edge === "right";
      return { kind: s ? "scale_x" : "scale_y", cursor: s ? "ew-resize" : "ns-resize", edge: a.edge, mid: a };
    }
  }
  const o = r ? e.corners.findIndex((a) => wa(a, t) <= 121) : -1;
  if (o >= 0) {
    const a = e.corners[o], s = a.x - e.center.x, l = a.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: s * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return wa(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : oy(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function qd(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    r ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function ay(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function ta(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: Fe(n.x, -r, t.width + r),
    y: Fe(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function vM(e) {
  const t = Oo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Fe(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Pt * 0.5),
    tanY: Math.tan(Fe(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Pt * 0.5)
  };
}
function wi(e, t, n) {
  return _d(Js(
    Js(e.centerDir, Zs(e.right, t)),
    Zs(e.up, n)
  ));
}
function Xd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = vM(e), r = ta(n.centerDir, t);
  if (!r) return { visible: !1 };
  const i = [
    wi(n, -n.tanX, n.tanY),
    wi(n, n.tanX, n.tanY),
    wi(n, n.tanX, -n.tanY),
    wi(n, -n.tanX, -n.tanY)
  ].map((h) => ta(h, t)), o = Array.from({ length: 4 }, (h, g) => {
    const b = [];
    for (let _ = 0; _ <= 28; _ += 1) {
      const v = _ / 28;
      let P, W;
      g === 0 ? (P = -n.tanX + 2 * n.tanX * v, W = n.tanY) : g === 1 ? (P = n.tanX, W = n.tanY - 2 * n.tanY * v) : g === 2 ? (P = n.tanX - 2 * n.tanX * v, W = -n.tanY) : (P = -n.tanX, W = -n.tanY + 2 * n.tanY * v);
      const D = ta(wi(n, P, W), t);
      D && b.push({ x: D.x, y: D.y });
    }
    return b;
  }), a = ta(wi(n, 0, n.tanY), t), s = ta(
    wi(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), l = [r, ...i, a, s];
  if (l.some((h) => !h || !Number.isFinite(h.x) || !Number.isFinite(h.y)))
    return { visible: !1 };
  if (!l.some((h) => h.rawZ > 1e-4)) return { visible: !1 };
  const d = s.x - a.x, u = s.y - a.y, f = Math.hypot(d, u) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: i.map((h) => ({ x: h.x, y: h.y })),
    boundaryEdges: o,
    rotateStemBase: { x: a.x, y: a.y },
    rotateHandle: {
      x: a.x + d / f * Dh,
      y: a.y + u / f * Dh
    },
    visible: !0
  };
}
function Lh(e, t, n, r) {
  const i = (Array.isArray(e) ? e : []).filter((a) => a && a.visible !== !1).map((a) => ({ item: a, geometry: Xd(a, r) })).filter((a) => a.geometry.visible).sort((a, s) => {
    var l, d;
    return Number(((l = s.item) == null ? void 0 : l.z_index) || 0) - Number(((d = a.item) == null ? void 0 : d.z_index) || 0);
  }), o = i.find((a) => {
    var s;
    return String(((s = a.item) == null ? void 0 : s.id) || "") === String(t || "");
  });
  if (o) {
    const a = Lu(o.geometry, n);
    if (a.kind === "scale" || a.kind === "rotate") return { ...o, hit: a };
  }
  for (const a of i) {
    const s = Lu(a.geometry, n);
    if (s.kind !== "none") return { ...a, hit: s };
  }
  return null;
}
function _M(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: zt(Math.atan2(r.x, r.z) * nn),
    pitch_deg: Math.asin(Fe(r.y, -1, 1)) * nn
  };
}
function SM(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Fe(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: Fe(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function wM(e, t, n, r = !1) {
  const i = (Number(n || 0) - Number(t || 0)) * nn;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return r && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let gs = null;
function Jd() {
  return gs || (gs = new Promise((e) => {
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
  }), gs);
}
function Gn(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function xM(e, t = 1024) {
  const n = Math.max(1, Math.round(Gn(e, 2048))), r = Math.min(n, Math.max(1, Math.round(Gn(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function kM(e, t, n) {
  const r = Gn(t), i = Gn(n), o = e == null ? void 0 : e.bbox;
  if (!o || r < 1 || i < 1) return null;
  const a = Gn(o.u0), s = Gn(o.v0), l = Gn(o.u1), d = Gn(o.v1);
  if (l <= a || d <= s) return null;
  const u = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((a + l) * 0.5 + Gn(u.du)) * r,
    centerY: ((s + d) * 0.5 + Gn(u.dv)) * i,
    width: (l - a) * r,
    height: (d - s) * i,
    rotationRad: Gn(u.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Gn(u.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function MM(e, t, n) {
  const r = String((e == null ? void 0 : e.rasterDataUrl) || ""), i = (e == null ? void 0 : e.bbox) || {}, o = (e == null ? void 0 : e.transform) || {};
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
    o.du,
    o.dv,
    o.rot_deg,
    o.scale
  ].join(":");
}
function PM() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function n() {
    if (!(e.size <= 16))
      for (const [o, a] of e) {
        if (e.size <= 16) break;
        a.settled && (a.image.onload = null, a.image.onerror = null, e.delete(o));
      }
  }
  function r(o, a) {
    let s = e.get(o);
    if (s)
      return e.delete(o), e.set(o, s), !s.settled && typeof a == "function" && s.listeners.add(a), s.image;
    const l = new Image();
    s = { image: l, listeners: new Set(typeof a == "function" ? [a] : []), settled: !1 }, e.set(o, s);
    const d = () => {
      s.settled = !0;
      const u = [...s.listeners];
      s.listeners.clear(), u.forEach((f) => f()), n();
    };
    return l.onload = d, l.onerror = d, l.src = o, n(), l;
  }
  function i(o, a, s, l = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const d = String(o.rasterDataUrl || "").trim(), u = kM(o, a, s);
    if (!d.startsWith("data:") || !u) return null;
    const f = MM(o, a, s), h = String((o == null ? void 0 : o.id) || "").trim() || f, g = t.get(h);
    if ((g == null ? void 0 : g.revision) === f) return { source: g.source, revision: f };
    const b = r(d, l), _ = Number(b.naturalWidth || b.width || 0), v = Number(b.naturalHeight || b.height || 0);
    if (!b.complete || _ < 1 || v < 1) return null;
    const P = mn({ label: "raster-object" });
    P.width = Math.max(1, Math.round(a)), P.height = Math.max(1, Math.round(s));
    const W = P.getContext("2d");
    return W ? (u.wrapOffsets.forEach((D) => {
      W.save(), W.translate(u.centerX + D, u.centerY), W.rotate(u.rotationRad), W.scale(u.scale, u.scale), W.drawImage(
        b,
        -u.width * 0.5,
        -u.height * 0.5,
        u.width,
        u.height
      ), W.restore();
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
function NM(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function AM(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function CM({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(f) {
    if (!f) return;
    f.entry.listeners.delete(f);
    const h = r.get(f.owner);
    (h == null ? void 0 : h.get(f.key)) === f && h.delete(f.key);
  }
  function a(f, h, g, b) {
    if (!f || typeof b != "function" || g.settled) return;
    let _ = r.get(f);
    _ || (_ = /* @__PURE__ */ new Map(), r.set(f, _));
    const v = _.get(h);
    if ((v == null ? void 0 : v.entry) === g) {
      v.callback = b;
      return;
    }
    o(v);
    const P = { owner: f, key: h, entry: g, callback: b };
    _.set(h, P), g.listeners.add(P);
  }
  function s(f, h) {
    f.settled || (f.settled = !0, f.image.onload = null, f.image.onerror = null, !h && n.get(f.key) === f && n.delete(f.key), [...f.listeners].forEach((g) => {
      o(g);
      try {
        g.callback(f.image, h);
      } catch {
      }
    }), l(i));
  }
  function l(f) {
    if (!(n.size <= f))
      for (const [h, g] of n) {
        if (n.size <= f) break;
        !g.settled || g.listeners.size > 0 || (g.image.onload = null, g.image.onerror = null, n.delete(h));
      }
  }
  function d(f, h, g, b = null) {
    const _ = String(h || ""), v = String(g || "");
    if (!_ || !v) return null;
    let P = n.get(_);
    if (P)
      n.delete(_), n.set(_, P);
    else {
      l(i - 1);
      const D = e || globalThis.Image;
      if (typeof D != "function") return null;
      const O = new D();
      P = { key: _, image: O, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(_, P), O.onload = () => s(P, !0), O.onerror = () => s(P, !1), O.src = v;
    }
    return P.settled || P.image.complete && Number(P.image.naturalWidth || P.image.width || 0) > 0 || a(f, _, P, b), P.image;
  }
  function u(f) {
    const h = r.get(f);
    h && ([...h.values()].forEach(o), r.delete(f), l(i));
  }
  return { get: d, disposeOwner: u };
}
const sa = /* @__PURE__ */ new WeakMap();
function sy(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = sa.get(e);
  r || (r = [], sa.set(e, r));
  const i = { handler: t, editor: n };
  r.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const a = sa.get(e);
    if (!a) return;
    const s = a.indexOf(i);
    s >= 0 && a.splice(s, 1), a.length === 0 && sa.delete(e);
  };
}
function Gr(e, ...t) {
  const n = sa.get(e), r = (n == null ? void 0 : n.findLast((i) => i.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const Rs = Object.freeze({
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
}), ly = "PanoramaSuite.Editor.ViewControls", IM = {
  id: ly,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Rs).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function EM(e) {
  return Object.hasOwn(Rs, e) ? Rs[e] : Rs.default;
}
function OM(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const a = e.bindings.find((s) => s.button === t && !!s.shift === n && !!s.alt === r);
  return (a == null ? void 0 : a.action) ?? null;
}
function FM(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const dl = "state_json";
function jr(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function TM(e) {
  var a, s;
  const t = jr(e, dl);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = Qg(n, {
    coverage: (a = jr(e, "coverage")) == null ? void 0 : a.value
  }), i = Q0(r, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (s = t.callback) == null || s.call(t, o), !0;
}
function Zd(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = jr(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...i) {
    var a, s, l, d, u, f, h, g, b;
    const o = r ? r(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (s = (a = e.__panoPreviewNodeRuntime) == null ? void 0 : a.requestDraw) == null || s.call(a), (d = (l = e.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || d.call(l), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (h = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || h.call(f, !0, !0), (b = (g = t == null ? void 0 : t.canvas) == null ? void 0 : g.setDirty) == null || b.call(g, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function DM(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Rh(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function LM(e) {
  var u, f, h, g, b, _;
  if (!e) return;
  const t = jr(e, "coverage"), n = jr(e, "bg_color"), r = jr(e, dl), i = jr(e, "sticker_state");
  if (!t || !n || !r) return;
  const o = String(t.value ?? "").trim(), a = String(n.value ?? "").trim(), s = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && DM(o) && (Rh(a) || a === ""))) return;
  let d = "360";
  if (Rh(a))
    try {
      d = String(En((u = JSON.parse(a)) == null ? void 0 : u.coverage));
    } catch {
      d = "360";
    }
  t.value = d, (f = t.callback) == null || f.call(t, d), n.value = o, (h = n.callback) == null || h.call(n, o), r.value = a, (g = r.callback) == null || g.call(r, a), i && (i.value = s, (b = i.callback) == null || b.call(i, s)), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
}
function Vs(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var o, a;
    const i = String((r == null ? void 0 : r.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (o = r.element) != null && o.style && (r.element.style.display = "none"), (a = r.parentEl) != null && a.style && (r.parentEl.style.display = "none")));
  });
}
function Ru(e, t, n) {
  var o, a;
  if (!e || typeof e.addWidget != "function") return null;
  let i = (Array.isArray(e.widgets) ? e.widgets : []).find((s) => String((s == null ? void 0 : s.name) || "") === String(t));
  if (i) {
    i.callback = n, i.hidden = !1, i.__panoHidden = !1, i.type = "button", i.options = { ...i.options || {}, hidden: !1 }, typeof i.__panoComputeSizeBeforeHide == "function" && (i.computeSize = i.__panoComputeSizeBeforeHide), delete i.__panoComputeSizeBeforeHide, (o = i.element) != null && o.style && (i.element.style.display = ""), (a = i.parentEl) != null && a.style && (i.parentEl.style.display = "");
    const s = typeof i.computeSize == "function" ? i.computeSize() : null;
    return (!Array.isArray(s) || Number(s[0] || 0) <= 0 || Number(s[1] || 0) <= 0) && (i.computeSize = () => {
      var l;
      return [Math.max(120, Number(((l = e == null ? void 0 : e.size) == null ? void 0 : l[0]) || 0) - 20), 30];
    }), i;
  }
  return i = e.addWidget("button", t, null, n), i && (i.serialize = !1), i;
}
async function RM(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, i]) => i)) : await Promise.all(r.map(([, i]) => i)), r.forEach(([i, o]) => {
        n.get(i) === o && n.delete(i);
      });
    }
}
function la(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, o = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), a = o.catch(() => {
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
async function cy(e, t = {}) {
  var r;
  await RM(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const i of n) await i();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function VM(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await cy(e), n ? n.apply(this, r) : this.value;
  };
}
function $M(e) {
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
function zM(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function na(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: i,
  attachStickers: o,
  attachCutout: a,
  enableStickersPreview: s,
  sceneStateV2: l = !1,
  studio: d = !1
}) {
  if (!(e != null && e.prototype)) return;
  function u(f) {
    var b;
    const h = `editor_btn|${n}`;
    if (f.__panoPreviewAttached === !0 && f.__panoPreviewMountKey === h) return;
    $M(f), Zd(f, t), Vs(f, dl);
    const g = jr(f, dl);
    if (VM(f, g), g && !g.__panoPreviewPatchedCb) {
      g.__panoPreviewPatchedCb = !0;
      const _ = g.callback;
      g.callback = (v) => {
        var W;
        const P = _ ? _(v) : void 0;
        return (W = f.setDirtyCanvas) == null || W.call(f, !0, !1), P;
      };
    }
    if (n === "PanoramaStickers") {
      f.__panoSceneStateV2 = l, f.__panoStudio = d;
      const _ = jr(f, "bg_color");
      !l && _ && (_.value == null || String(_.value).trim() === "" || String(_.value).toLowerCase() === "#000000") && (_.value = "#00ff00", (b = _.callback) == null || b.call(_, "#00ff00")), Ru(f, r, () => i(f, "stickers")), s && (o(f, {
        enabled: !0,
        buttonText: r,
        onOpen: () => i(f, "stickers")
      }), f.__panoStickersNodeSurface && Vs(f, r), (!Array.isArray(f.size) || f.size[0] < 10 || f.size[1] < 10) && (f.size = [360, 260])), f.__panoPreviewAttached = !0, f.__panoPreviewMountKey = h;
      return;
    }
    f.__panoSceneStateV2 = l, Ru(f, r, () => i(f, "cutout")), l || a(f, {
      buttonText: r,
      onOpen: () => i(f, "cutout")
    }), f.__panoCutoutNodeSurface && Vs(f, r), (!Array.isArray(f.size) || f.size[0] < 10 || f.size[1] < 10) && (f.size = [360, 260]), f.__panoPreviewAttached = !0, f.__panoPreviewMountKey = h;
  }
  for (const f of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const h = e.prototype[f];
    e.prototype[f] = function() {
      const g = h ? h.apply(this, arguments) : void 0;
      f === "onNodeCreated" && n === "PanoramaCutout" && !l && TM(this), f === "onConfigure" && n === "PanoramaStickers" && !l && this.widgets && LM(this);
      const b = !!this.__panoPreviewAttached;
      return (f === "onNodeCreated" || this.widgets) && u(this), f === "onAdded" && b && Gr(this, "attach"), g;
    };
  }
}
function jM(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return zM(this), r;
  };
}
function HM(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
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
    Zd(e, t);
    const l = (d = e) => n(d, "stickers", { readOnly: !0, hideSidebar: !1 });
    Ru(e, "Open Preview", () => l(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: l
    }), e.__panoPreviewNodeSurface && Vs(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  i(o);
}
function GM({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: r,
  attachPreview: i,
  restoreOutput: o,
  requestFrame: a,
  enableStickersPreview: s = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [IM, CS],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [ih],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [ih.id] }],
    beforeRegisterNodeDef(l, d) {
      const u = String((d == null ? void 0 : d.name) || "");
      (u === "PanoramaStickers" || u === "Panorama Stickers") && na(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: s
      }), u === "PanoramaStickersNode" && na(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), u === "PanoramaStudio" && na(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: s,
        sceneStateV2: !0,
        studio: !0
      }), (u === "PanoramaCutout" || u === "Panorama Cutout") && na(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: s
      }), u === "PanoramaCutoutNode" && na(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), Qs(u) && jM(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      l.__panoPreviewAttached && o(l);
    },
    nodeCreated(l) {
      const d = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      Zd(l, e), Qs(d) && HM(l, { app: e, openEditor: t, attachPreview: i, requestFrame: a });
    }
  };
}
const WM = /\.(png|jpe?g|webp|gif|bmp)$/i;
function rr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : WM.test(String(e.name || "")) : !1;
}
function Qd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => rr(n)) : !1;
}
function KM(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var d, u, f;
    (d = l == null ? void 0 : l.preventDefault) == null || d.call(l), (u = l == null ? void 0 : l.stopPropagation) == null || u.call(l), (f = l == null ? void 0 : l.stopImmediatePropagation) == null || f.call(l);
  }, o = (l) => {
    if (Qd(l == null ? void 0 : l.dataTransfer)) {
      i(l);
      try {
        l.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, a = (l) => {
    var d;
    l != null && l.relatedTarget && ((d = e.contains) != null && d.call(e, l.relatedTarget)) || n(!1);
  }, s = (l) => {
    var u;
    const d = Array.from(((u = l == null ? void 0 : l.dataTransfer) == null ? void 0 : u.files) || []).find((f) => rr(f));
    if (!d) {
      n(!1);
      return;
    }
    i(l), n(!1), r(d);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", a, !0), e.addEventListener("drop", s, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", a, !0), e.removeEventListener("drop", s, !0), n(!1);
  };
}
async function ca(e, t = {}) {
  var a, s, l, d;
  if (!rr(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((s = (a = globalThis.URL) == null ? void 0 : a.createObjectURL) == null ? void 0 : s.bind(globalThis.URL)), i = t.revokeObjectURL || ((d = (l = globalThis.URL) == null ? void 0 : l.revokeObjectURL) == null ? void 0 : d.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const o = r(e);
  try {
    const u = await new Promise((f, h) => {
      const g = new n();
      g.onload = () => f(g), g.onerror = () => h(new Error("image load failed")), g.src = o;
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
async function Pi(e, { fetchApi: t } = {}) {
  if (!rr(e)) throw new TypeError("A supported image file is required.");
  if (typeof t != "function") throw new TypeError("fetchApi is required.");
  const n = new FormData();
  n.append("image", e), n.append("type", "input"), n.append("subfolder", "panorama_stickers");
  const r = await t("/upload/image", { method: "POST", body: n });
  if (!r || r.status !== 200)
    throw new Error(`upload failed (${(r == null ? void 0 : r.status) || "no-response"})`);
  const i = await r.json(), o = String((i == null ? void 0 : i.name) || "").trim();
  if (!o) throw new Error("upload response missing filename");
  return {
    type: "comfy_image",
    filename: o,
    subfolder: String((i == null ? void 0 : i.subfolder) || "panorama_stickers"),
    storage: String((i == null ? void 0 : i.type) || "input"),
    name: String((e == null ? void 0 : e.name) || "sticker.png")
  };
}
const Vh = /* @__PURE__ */ new WeakSet(), $h = /* @__PURE__ */ new WeakSet();
let zh = 0;
function Vu(e) {
  if (!e || typeof e != "object" || $h.has(e)) return e;
  const t = String(e.type || "preview");
  return zh += 1, e.type = `${t}:pano-${zh}`, $h.add(e), e;
}
function fl(e) {
  if (!e || typeof e != "object" || Vh.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, Vh.add(e), e;
}
function uy(e, t) {
  var r, i;
  if (!t || ((i = (r = fl(t)) == null ? void 0 : r.onRemove) == null || i.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function BM({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, i = null, o = !1;
  return { schedule: (l) => o || r || typeof e != "function" ? !1 : (i = l, r = e(() => {
    r = 0;
    const d = i;
    i = null, o || n == null || n(d);
  }), !0), dispose: () => {
    o || (o = !0, r && typeof t == "function" && t(r), r = 0, i = null);
  } };
}
const { app: Ht } = xs;
hk((e) => ai(e.id));
mk(fn);
const ef = CM(), { linkedVideoFile: UM } = O0({ app: Ht, api: fn });
function $u() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (xs == null ? void 0 : xs.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const YM = "pano_suite.ui_settings.v1", qM = 120, XM = 2048;
function jh() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(YM)) || "").trim();
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
function JM() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function ra(e) {
  var n, r, i, o, a;
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
    stylePos: String(((o = e.style) == null ? void 0 : o.position) || ""),
    styleTransform: String(((a = e.style) == null ? void 0 : a.transform) || "")
  };
}
function ZM() {
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
function zu(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (r, i) => {
    const o = Number(r), a = Number(i);
    return !Number.isFinite(o) || !Number.isFinite(a) ? null : [o, a];
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
function dy(e) {
  const t = zu(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function QM(e, t, n) {
  dy(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function ju(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function tf(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function fy(e) {
  return Qs(tf(e));
}
function Hh(e = null) {
  var o, a;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((a = (o = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : o.constructor) == null ? void 0 : a.name) || "");
  return [t, r, n, i].join("|");
}
function py(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", i = "dom", o = ju(e);
      this.activeBackend = o;
      const a = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", s = e.__panoPreviewNoPreview === !0, l = n.noPreview === !0;
      if (o === i && o !== "none" && a === r && s === l) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = l, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && $s(e), WP(e, { ...n, mode: r, __panoForcedPath: i }), this.activeBackend = ju(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      $s(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      $s(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function eP(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function $s(e, t = {}) {
  var r, i, o, a, s;
  if (!e) return;
  Hu.unregister(e), eP(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      (o = n.state) != null && o.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (s = (a = n.root) == null ? void 0 : a.remove) == null || s.call(a);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((d) => {
      if (d === (n == null ? void 0 : n.widget)) return !0;
      const u = String((d == null ? void 0 : d.name) || ""), f = String((d == null ? void 0 : d.type) || ""), h = $u();
      return u === h || f === h || u === "pano_preview" || f === "pano_preview" ? !0 : u === "preview" && f === "pano_preview";
    }).forEach((d) => SP(e, d));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function tP(e, t = "#00ff00") {
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
function nP(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = So(e, "state_json")) == null ? void 0 : n.value) || "");
}
function kn(e) {
  var s, l;
  const t = nP(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((s = So(e, "bg_color")) == null ? void 0 : s.value) || "#1a1a1e"), i = Number(((l = So(e, "coverage")) == null ? void 0 : l.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === n && o.bg === r && o.coverage === i)
    return o.parsed;
  const a = e.__panoSceneStateV2 && typeof t == "string" ? e0(t, { backgroundColor: r, coverage: i, active: r0(e) }) : tP(t, r);
  return a.coverage = i, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: i, parsed: a }, a;
}
function So(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function rP(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function hy(e, t, n = null) {
  var i, o;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((i = r == null ? void 0 : r.isSubgraphNode) != null && i.call(r))
    try {
      const a = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, s = a ? (o = r.resolveSubgraphOutputLink) == null ? void 0 : o.call(r, Number(a.origin_slot ?? 0)) : null;
      s != null && s.outputNode && (r = s.outputNode);
    } catch {
    }
  return !r && n != null && (r = rP(e == null ? void 0 : e.graph, n)), r;
}
function iP(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function my(e, t = []) {
  const n = iP(e), r = [];
  return t.forEach((i) => {
    n.includes(String(i)) && r.push(String(i));
  }), n.forEach((i) => {
    ci.includes(i) && !r.includes(i) && r.push(i);
  }), r.length ? r : t;
}
function Gh(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function pl(e, t) {
  const n = Gh(e), r = Gh(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function oP(e, t) {
  var n;
  return hy(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function aP(e, t = ci) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const i = my(e, t).map((s) => n.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(s))).filter((s) => s >= 0), o = n.map((s, l) => ({ input: s, idx: l })).filter(({ input: s }) => String((s == null ? void 0 : s.type) || "").toUpperCase() === "IMAGE").map(({ idx: s }) => s), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  return Sk(e, a, oP);
}
const Hu = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = fn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, d, u, f, h;
        if (!o) return;
        const a = pl(r, o == null ? void 0 : o.id);
        String(o.__panoPreviewMode || "") === "cutout" && !a || !a && ![...aP(o)].some((g) => pl(r, g)) || E0(o.__panoExecutedOutputs ?? (o.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (gy(o), (d = (l = o.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || d.call(l), (u = o.setDirtyCanvas) == null || u.call(o, !0, !0), (h = (f = o.graph) == null ? void 0 : f.setDirtyCanvas) == null || h.call(f, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
      });
    }, fn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = fn) != null && e.removeEventListener) || (fn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function hl(e) {
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
  const i = `/view?${n.toString()}`;
  return typeof ((o = fn) == null ? void 0 : o.apiURL) == "function" ? fn.apiURL(i) : i;
}
function sP(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function lP(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const i = String(r.pop() || "").trim(), o = r.join("/");
  return { filename: i, subfolder: o };
}
function cP(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const i = String(r || "").trim();
    !i || n.has(i) || (n.add(i), t.push(i));
  }), t;
}
function uP(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (sP(t)) return [t];
  const { filename: n, subfolder: r } = lP(t);
  if (!n) return [t];
  const i = ["temp", "output", "input"].map((o) => hl({
    filename: n,
    subfolder: r,
    type: o
  }));
  return cP([...i, t]);
}
function dP(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? hl({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function ai(e) {
  const t = Ht == null ? void 0 : Ht.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const i = n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (pl(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const a of o)
      if (pl(a, i)) return t[a];
  }
  return null;
}
function xa(e, t, n = null) {
  const r = n || ai(e == null ? void 0 : e.id), i = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
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
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return hl({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = Dn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : hl(e);
}
function ml(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Bc(e) {
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
function nf(e, t) {
  var r;
  const n = String(e || "").trim();
  if (!n) return "";
  try {
    const i = typeof window < "u" && ((r = window == null ? void 0 : window.location) != null && r.href) ? window.location.href : "http://127.0.0.1/", o = new URL(n, i);
    return t > 0 && o.searchParams.set("pano_rev", String(t)), o.toString();
  } catch {
    const i = n.includes("?") ? "&" : "?";
    return t > 0 ? `${n}${i}pano_rev=${t}` : n;
  }
}
function fP(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (o) => {
    Array.isArray(o) && o.forEach((a) => t.push(a));
  }, i = (o, a = 0) => {
    !o || a > 3 || n.has(o) || typeof o == "object" && (n.add(o), r(o.images), i(o.output, a + 1), i(o.ui, a + 1), i(o.data, a + 1), i(o.result, a + 1));
  };
  return i(e, 0), t;
}
function pP(e, t) {
  try {
    e.__panoOwnOutputRev = NM(e.__panoOwnOutputRev);
    const n = fP(t);
    let r = "";
    for (const i of n)
      if (r = Dn(i), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), nf(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function wo(e) {
  var t;
  (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null || t.player.destroy(), e && (e.__panoOwnOutputVideoCache = null);
}
function hP(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!sn(e, "background"))
    return wo(e), null;
  const i = ai(r), o = Gd(i, t, Dn);
  if (!o)
    return wo(e), null;
  const a = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), s = nf(o, a), l = `${t.join("|")}:${s}`, d = e.__panoOwnOutputVideoCache;
  if (d && d.key === l) return d.player.failed() ? null : d.player.video;
  wo(e);
  const u = wk({
    documentRef: document,
    src: s,
    onFrame: n
  });
  return u ? (e.__panoOwnOutputVideoCache = { key: l, player: u }, u.video) : null;
}
function mP(e, t = []) {
  var d, u;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const i = my(e, t).map((f) => n.findIndex((h) => String((h == null ? void 0 : h.name) || "") === String(f))).filter((f) => f >= 0), o = n.map((f, h) => ({ input: f, idx: h })).filter(({ input: f }) => String((f == null ? void 0 : f.type) || "").toUpperCase() === "IMAGE").map(({ idx: f }) => f), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const f of a) {
    const h = n[f], g = e.graph ? e.getInputLink(f) : null;
    if ((g == null ? void 0 : g.origin_id) == null) continue;
    const b = g.origin_id, _ = hy(e, f, b);
    if (!_) continue;
    const v = Number(g.origin_slot ?? 0), P = ai((_ == null ? void 0 : _.id) ?? b), W = Array.isArray(P == null ? void 0 : P.images) ? P.images : [];
    if (W.length) {
      const $ = [];
      v >= 0 && v < W.length && $.push(W[v]), $.push(...W);
      for (const z of $.filter((te) => !Ds(te))) {
        const te = Dn(z);
        if (te)
          return String((h == null ? void 0 : h.name) || ""), { src: `${te}&pano_src=${Ou(P)}`, sourceType: "nodeOutputs", inputName: String((h == null ? void 0 : h.name) || "") };
      }
    }
    let D = [];
    try {
      D = typeof (Ht == null ? void 0 : Ht.getNodeImageUrls) == "function" ? Ht.getNodeImageUrls(_) || [] : [];
    } catch {
      D = [];
    }
    if (Array.isArray(D) && D.length) {
      const $ = [];
      v >= 0 && v < D.length && $.push(D[v]), $.push(...D);
      for (const z of $) {
        const te = Dn(z);
        if (te)
          return String((h == null ? void 0 : h.name) || ""), { src: te, sourceType: "appNodeImageUrls", inputName: String((h == null ? void 0 : h.name) || "") };
      }
    }
    const O = Array.isArray(_ == null ? void 0 : _.imgs) ? _.imgs : [];
    if (O.length) {
      const $ = [];
      v >= 0 && v < O.length && $.push(O[v]), $.push(...O);
      for (const z of $) {
        const te = Dn(z);
        if (te)
          return String((h == null ? void 0 : h.name) || ""), { src: te, sourceType: "nodeImgs", inputName: String((h == null ? void 0 : h.name) || "") };
      }
    }
    const S = (d = _ == null ? void 0 : _.widgets) == null ? void 0 : d.find(($) => String(($ == null ? void 0 : $.name) || "").toLowerCase() === "image");
    if (S) {
      let $ = Dn(S.value);
      if ($ && !$.includes("/") && !$.includes(":") && (_.comfyClass === "LoadImage" || _.type === "LoadImage") && ($ = fn.apiURL(`/view?filename=${encodeURIComponent($)}&type=input&subfolder=`)), $)
        return String((h == null ? void 0 : h.name) || ""), { src: $, sourceType: "widget", inputName: String((h == null ? void 0 : h.name) || "") };
    }
  }
  const s = sn(e, "background") ? ai(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(s == null ? void 0 : s.pano_input_images) && l.push(...s.pano_input_images), Array.isArray((u = s == null ? void 0 : s.ui) == null ? void 0 : u.pano_input_images) && l.push(...s.ui.pano_input_images), l.length > 0)
    for (const f of l) {
      const h = Dn(f);
      if (h)
        return { src: h, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function gP(e, t = [], n = {}) {
  const r = mP(e, t), i = String((r == null ? void 0 : r.src) || "").trim();
  if (!i) return null;
  const o = uP(i);
  if (!o.length) return null;
  const a = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = t.join("|") || "image", l = e.__panoLinkedInputImageCache.get(s);
  if (l && l.srcRaw === i && l.img) return l.img;
  if (l && l.pendingSrcRaw === i && l.pendingImg)
    return a && l.img && (l.img.complete || l.img.naturalWidth || l.img.width) ? l.img : l.pendingImg;
  const d = new Image(), u = l || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  u.pendingSrcRaw = i, u.pendingResolvedSrc = "", u.pendingImg = d, e.__panoLinkedInputImageCache.set(s, u);
  let f = -1;
  const h = () => {
    var b, _, v, P;
    if (f += 1, f >= o.length) {
      if (((_ = (b = e.__panoLinkedInputImageCache) == null ? void 0 : b.get) == null ? void 0 : _.call(b, s)) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, !u.img))
        try {
          (P = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.delete) == null || P.call(v, s);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), o.length;
      return;
    }
    const g = o[f];
    u.pendingResolvedSrc = g, d.src = g;
  };
  return d.onload = () => {
    var g, b, _;
    ((b = (g = e.__panoLinkedInputImageCache) == null ? void 0 : g.get) == null ? void 0 : b.call(g, s)) === u && u.pendingImg === d && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || d.src || ""), u.img = d, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || d.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
  }, d.onerror = (g) => {
    var b, _, v, P;
    if (f + 1 < o.length) {
      h();
      return;
    }
    if (((_ = (b = e.__panoLinkedInputImageCache) == null ? void 0 : b.get) == null ? void 0 : _.call(b, s)) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, !u.img))
      try {
        (P = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.delete) == null || P.call(v, s);
      } catch {
      }
    String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((g == null ? void 0 : g.type) || "error");
  }, h(), a && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : d;
}
function yP(e, t = [], n = null, r = {}) {
  const i = gP(e, t, r);
  return i ? (typeof n == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => n(), { once: !0 })), i) : null;
}
function gy(e) {
  var t, n;
  if (e) {
    ef.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, wo(e), e.__panoWrappedErpCache = null;
  }
}
function bP(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, wo(e), e.__panoWrappedErpCache = null;
  }
}
function yy(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function ys(e, t, n = "") {
  const r = yy(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), i = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = i), !0) : r.isLoading ? i - Number(r.loadingSinceTs || 0) < qM ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function Wh(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), a = n / i, s = r / o, l = Math.min(a, s);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function vP(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), a = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || a <= 0) return;
  const s = Math.max(14, Math.round(14 * n)), l = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), o * 0.44)), d = Math.max(Math.round(34 * n), s + Math.round(14 * n)), u = r + (o - l) * 0.5, f = i + (a - d) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(u, f, l, d, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", u + l * 0.5, f + d * 0.5 + 0.5), e.restore();
}
function Uc(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function _P(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  if (n) {
    const i = t.find((o) => String((o == null ? void 0 : o.id) || "") === n);
    if (i) return i;
  }
  return t[0] || null;
}
function SP(e, t) {
  return uy(e, t);
}
function Ra(e, t, n, r = null) {
  var h;
  if (!String(t || "")) return null;
  let o = dP(n);
  if (!o && (r != null && r.external)) {
    if (!sn(e, "external-sticker")) return null;
    const g = ai(e == null ? void 0 : e.id), b = ((h = g == null ? void 0 : g.ui) == null ? void 0 : h.pano_sticker_input_images) || (g == null ? void 0 : g.pano_sticker_input_images) || [];
    for (const _ of Array.isArray(b) ? b : [b])
      if (o = Dn(_), o) break;
  }
  if (!o) return null;
  const a = xa(e, "pano_sticker_input_state_hash"), s = r != null && r.external ? String(a ?? "") : "", l = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, d = r != null && r.external ? nf(o, l) : o, u = AM(o, s, l);
  return ef.get(e, u, d, (g, b) => {
    var _, v;
    b && (r != null && r.external && e.__panoOutputFromRun && Gr(e, "image-loaded"), (v = (_ = e.__panoDomPreview) == null ? void 0 : _.requestDraw) == null || v.call(_));
  }) || null;
}
function wP(e, t) {
  var f, h, g, b;
  const n = NP(e, t), r = AP(t), i = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.groups) ? t.painting.groups : [], o = new Map(
    i.filter((_) => _ && typeof _ == "object").map((_) => [String((_ == null ? void 0 : _.actionGroupId) || (_ == null ? void 0 : _.id) || "").trim(), Number((_ == null ? void 0 : _.z_index) || 0)])
  ), a = n ? r.map((_) => {
    const v = n.getGroupDisplayCanvas(_);
    return v ? {
      id: `paint_group:${_}`,
      source: v,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${_}`,
      zIndex: Number(o.get(_) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], s = Array.isArray((h = t == null ? void 0 : t.painting) == null ? void 0 : h.raster_objects) ? t.painting.raster_objects : [];
  if (s.length === 0)
    return (b = (g = e.__panoRasterObjectSurfaceCache) == null ? void 0 : g.retain) == null || b.call(g, []), a;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = PM()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var _, v;
    return (v = (_ = e.__panoDomPreview) == null ? void 0 : _.requestDraw) == null ? void 0 : v.call(_);
  });
  const l = xM(t == null ? void 0 : t.output_preset), d = s.filter((_) => (_ == null ? void 0 : _.visible) !== !1 && String((_ == null ? void 0 : _.layerKind) || "paint") === "paint").map((_) => String((_ == null ? void 0 : _.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(d);
  const u = s.map((_) => {
    const v = e.__panoRasterObjectSurfaceCache.get(
      _,
      l.width,
      l.height,
      e.__panoRasterObjectReady
    );
    return v ? {
      id: `raster:${String((_ == null ? void 0 : _.id) || "")}`,
      source: v.source,
      revision: v.revision,
      zIndex: Number((_ == null ? void 0 : _.z_index) || 0),
      opacity: 1,
      visible: (_ == null ? void 0 : _.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...u];
}
function xP(e, t, n, r) {
  var o, a, s, l, d, u;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
    };
  if (r && typeof r.convertEventToCanvasOffset == "function" && t)
    try {
      const f = r.convertEventToCanvasOffset(t);
      if (Array.isArray(f) && f.length >= 2)
        return {
          x: Number(f[0]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[0]) || 0),
          y: Number(f[1]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[0]) || 0),
      y: Number(t.canvasY) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[1]) || 0)
    };
  const i = MP(e, t, r);
  return i || null;
}
function kP(e, t) {
  var f, h;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (f = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : f.call(i), a = (t == null ? void 0 : t.ds) || ((h = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : h.ds);
  if (!o || !a) return null;
  const s = Number(a.scale || 1);
  if (!Number.isFinite(s) || Math.abs(s) < 1e-6) return null;
  const l = Array.isArray(a.offset) ? a.offset : [0, 0], d = (n - Number(o.left || 0)) / s - Number(l[0] || 0), u = (r - Number(o.top || 0)) / s - Number(l[1] || 0);
  return !Number.isFinite(d) || !Number.isFinite(u) ? null : { x: d, y: u };
}
function MP(e, t, n) {
  var i, o;
  const r = kP(t, n || (Ht == null ? void 0 : Ht.canvas));
  return r ? {
    x: r.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: r.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function PP(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function NP(e, t) {
  var d, u, f, h, g, b, _, v, P, W, D, O;
  const n = (u = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.paint) == null ? void 0 : u.strokes, r = (h = (f = t == null ? void 0 : t.painting) == null ? void 0 : f.mask) == null ? void 0 : h.strokes, i = Array.isArray(n) && n.length > 0, o = Array.isArray(r) && r.length > 0;
  if (!i && !o) return null;
  const a = PP(e, t), s = `${a.width}x${a.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== s) && (e.__panoPreviewPaintEngine = yd(a), e.__panoPreviewPaintDescriptorKey = s, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const l = {
    paint: n || null,
    mask: r || null,
    groups: ((g = t == null ? void 0 : t.painting) == null ? void 0 : g.groups) || null,
    rasterObjects: ((b = t == null ? void 0 : t.painting) == null ? void 0 : b.raster_objects) || null
  };
  return (((_ = e.__panoPreviewPaintRevision) == null ? void 0 : _.paint) !== l.paint || ((v = e.__panoPreviewPaintRevision) == null ? void 0 : v.mask) !== l.mask || ((P = e.__panoPreviewPaintRevision) == null ? void 0 : P.groups) !== l.groups || ((W = e.__panoPreviewPaintRevision) == null ? void 0 : W.rasterObjects) !== l.rasterObjects) && (e.__panoPreviewPaintRevision = l, e.__panoPreviewPaintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((D = t == null ? void 0 : t.painting) == null ? void 0 : D.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((O = t == null ? void 0 : t.painting) == null ? void 0 : O.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function AP(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, i) => Number((r == null ? void 0 : r.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function CP(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function IP(e, t, n) {
  const r = Xd(t, n);
  r.visible && qd(e, r.boundaryEdges, { selected: !1 });
}
function EP(e, t, n) {
  const r = Xd(t, n);
  r.visible && (e.save(), qd(e, r.boundaryEdges, { selected: !0 }), ay(e, r, { accent: yM(t) }), e.restore());
}
function Gu(e, t, n) {
  return _0(sl(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function gl(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? Io;
}
function OP(e) {
  return [sn(e, "background") ? Gd(ai(e.id), ["pano_input_videos"], Dn) : "", UM(e, ci)];
}
function FP(e) {
  var o;
  if (!sn(e, "external-sticker")) return null;
  const t = ai(e.id), n = xa(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(Dn), meta: n };
  const i = Gd(t, ["pano_sticker_input_videos"], Dn);
  return i ? { src: i, meta: n } : null;
}
function TP({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function Kh(e, t, n) {
  var o;
  ((o = e.__panoSurfaceScene) == null ? void 0 : o.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: xr({ ...t, painting: null }) });
  const r = (a) => {
    var l;
    if (a.visible === !1) return null;
    let s;
    if (t.version === 2) {
      s = Ra(e, a.id, n0(a.source), { external: a.source.kind === "port" });
      const d = e.__panoSurfacePlayback;
      if (a.source.kind === "port" && d) {
        const u = d.playback.stickerPicture(d.stickerStill, s), f = D0(d.playback.stickerMedia, s);
        return u ? { media: u, revision: Bc(u), source: f } : null;
      }
    } else {
      const d = a.type === "external_image" || a.source_kind === "external_image", u = String(a.asset_id || "") || (d ? String(a.id || "") : "");
      s = Ra(e, u, (l = t.assets) == null ? void 0 : l[a.asset_id], { external: d });
    }
    return ml(s) ? { media: s, revision: Bc(s) } : null;
  }, i = (t.painting_visible === !1 ? [] : wP(e, t)).filter((a) => a.visible !== !1).map((a) => ({ id: a.id, media: a.source, revision: a.revision, opacity: a.opacity, zIndex: a.zIndex }));
  return {
    background: ml(n) ? { media: n, revision: Bc(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: S0(e.__panoSurfaceScene.sceneState, gl(e), t.stickers, { media: r, paintLayers: i })
  };
}
function DP(e, t, n) {
  var O, S, $, z, te, ie, G;
  const r = String(e.__panoPreviewMode || "stickers");
  yy(e, r);
  const i = kn(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== i ? (e.__panoCutoutNodeSurfaceState = i, ($ = (S = (O = e.__panoCutoutNodeSurface) == null ? void 0 : O.session) == null ? void 0 : S.refresh) == null || $.call(S)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== i && (e.__panoStickersNodeSurfaceState = i, (ie = (te = (z = e.__panoStickersNodeSurface) == null ? void 0 : z.session) == null ? void 0 : te.refresh) == null || ie.call(te));
  const o = t.parentElement, a = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientWidth) || t.clientWidth || 0))), s = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientHeight) || t.clientHeight || 0))), l = t.getContext("2d");
  if (!l) return;
  (t.width !== a || t.height !== s) && (t.width = a, t.height = s);
  const d = { x: 0, y: 0, w: a, h: s };
  l.setTransform(1, 0, 0, 1, 0, 0), l.fillStyle = "#070707", l.fillRect(0, 0, a, s);
  const u = (e.__panoSurfacePlayback ? TP(e.__panoSurfacePlayback) : hP(e, ["pano_input_videos"], () => {
    var j, K;
    return (K = (j = e.__panoDomPreview) == null ? void 0 : j.requestDraw) == null ? void 0 : K.call(j);
  })) || yP(
    e,
    ci,
    () => {
      var j, K;
      return (K = (j = e.__panoDomPreview) == null ? void 0 : j.requestDraw) == null ? void 0 : K.call(j);
    },
    { preserveReadyWhilePending: !1 }
  ), f = ml(u);
  let h = null;
  const g = (j, K) => {
    h || (h = Kh(e, i, u));
    const ce = n.render({ width: j.w, height: j.h, camera: K, ...h });
    return ce && l.drawImage(ce.canvas, ce.x, ce.y, ce.width, ce.height, j.x, j.y, j.w, j.h), !!ce;
  };
  if (r === "cutout") {
    const j = _P(i), K = CP(u), ce = j ? Fe(si(j).aspect, 0.1, 10) : f ? Fe(Number(K.width / K.height), 0.05, 20) : 1, Se = Ud(d, ce);
    e.__panoCutoutNodeFrame = Se;
    let be = "none";
    const ge = String((u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "");
    if (j)
      if (u && !f)
        be = "loading";
      else if (f) {
        const X = Hk({ width: a, height: s }, Se, j);
        [
          !X.fallback || g(X.fallback.rect, Sa(X.fallback.shot)),
          g(X.rect, Sa(X.shot)),
          !X.fallback || g(Se, Sa(j))
        ].every(Boolean) || (be = "loading");
      } else
        be = "empty";
    else {
      const X = e.__panoLastCutoutShot;
      X ? (e.__panoPreviewView = Z0(X, { width: a, height: s }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), f ? g(d, sl(e.__panoPreviewView, a, s)) || (be = "loading") : u ? be = "loading" : be = "empty";
    }
    f || n.release(), n.failed && be === "loading" && (be = "none"), j && (e.__panoLastCutoutShot = { ...j }, l.save(), l.fillStyle = "rgba(0,0,0,0.58)", l.beginPath(), l.rect(0, 0, a, s), l.rect(Se.x, Se.y, Se.w, Se.h), l.fill("evenodd"), l.restore(), l.save(), l.strokeStyle = "rgba(255,221,87,0.72)", l.lineWidth = 2, l.strokeRect(Se.x + 0.5, Se.y + 0.5, Math.max(0, Se.w - 1), Math.max(0, Se.h - 1)), l.restore()), be === "loading" ? (Uc(e, !1), ys(e, !0, ge)) : be === "empty" ? (Uc(e, !0), ys(e, !1, "")) : (Uc(e, !1), ys(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let b = !1;
  (!u || f) && (h = Kh(e, i, u), !h.background && !h.layers.length ? (n.release(), b = !0) : b = g(d, sl(e.__panoPreviewView, a, s)));
  const _ = !b && !n.failed;
  ys(e, _, _ ? String((u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "") : ""), _ && vP(l, d, Wh(t, d));
  const v = Gu(e, a, s);
  !u && b && LP(l, v, Wh(t, d));
  const P = String(((G = i == null ? void 0 : i.active) == null ? void 0 : G.selected_sticker_id) || ""), W = Fu(i, gl(e)), D = b ? W.find((j) => String((j == null ? void 0 : j.id) || "") === P && (j == null ? void 0 : j.visible) !== !1) : null;
  b && W.filter((j) => j !== D && (j == null ? void 0 : j.visible) !== !1 && (j.external || j.source_kind === "external_image")).filter((j) => !ml(Ra(e, j.id, null, { external: !0 }))).forEach((j) => IP(l, j, v)), D && EP(l, D, v);
}
function Bh(e, t, n, r, i = 1) {
  let o = !1;
  e.strokeStyle = r, e.lineWidth = i, e.beginPath();
  for (const a of t) {
    const s = n.project(a);
    if (s.z <= 1e-4) {
      o = !1;
      continue;
    }
    o ? e.lineTo(s.x, s.y) : (e.moveTo(s.x, s.y), o = !0);
  }
  e.stroke();
}
function LP(e, t, n) {
  e.save();
  const r = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let s = -75; s <= 75; s += 15) {
    const l = [];
    for (let d = -180; d <= 180; d += 4) l.push(An(d, s));
    Bh(e, l, t, s === 0 ? i : r, s === 0 ? 1.5 : 1);
  }
  for (let s = -180; s <= 180; s += 15) {
    const l = [];
    for (let d = -89; d <= 89; d += 4) l.push(An(s, d));
    Bh(e, l, t, r, s % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: An(0, 0) },
    { name: "Right", dir: An(90, 0) },
    { name: "Back", dir: An(180, 0) },
    { name: "Left", dir: An(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const a = Math.max(9, Math.round(11 * n));
  e.font = `500 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((s) => {
    const l = t.project(s.dir);
    l.z > 1e-4 && e.fillText(s.name, l.x, l.y + 24 * n);
  }), e.restore();
}
function Wu(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function RP(e, t, n = 20) {
  var a;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (a = t.getBoundingClientRect) == null ? void 0 : a.call(t);
  if (!r) return !1;
  const i = Number(e.clientX) - Number(r.left || 0), o = Number(e.clientY) - Number(r.top || 0);
  return i >= r.width - n && o >= r.height - n;
}
function Hn(e, t) {
  return RP(e, t) ? !1 : (Wu(e), !0);
}
function Uh() {
  var n;
  const e = (n = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function VP(e) {
  var n;
  if (!e) return;
  const t = (n = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function $P(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !dy(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (i) {
    String((i == null ? void 0 : i.message) || i || "unknown");
  }
}
function zP(e, t = 0, n = null, r = 1200) {
  const i = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = i > 0, !(i <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var o, a;
    e.__panoBootMinHeightTimer = null, (o = e == null ? void 0 : e.__panoDomPreview) != null && o.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Yh(e, t = null, n = 0, r = 0, i = !0) {
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
      e.__panoUserResized = !0, t == null || t(), i && jP(e, 180, t);
    }
  };
}
function jP(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function ua(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const HP = /* @__PURE__ */ new WeakMap();
function by(e, t) {
  return E0(HP, e, t) ? !1 : (pP(e, t), gy(e), ua(e), !0);
}
async function GP(e) {
  var n, r;
  const t = await vk(e, Ht, fn);
  t && (by(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function WP(e, t = {}) {
  var Oe;
  const n = t.__allowStandalone === !0, r = fy(e);
  if (r && !n) {
    tf(e);
    return;
  }
  r && $P(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const i = e.__panoPreviewMode === "stickers", o = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const a = {
    signature: Hh(e)
  }, s = "dom", l = a.signature || Hh(e);
  if (Number(e.__panoRebindGeneration || 0), ju(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, zu(e), e.__panoFrontendSig = l, e.__panoStickersPath = s, (Oe = e.__panoDomPreview) != null && Oe.widget || (e.__panoLegacyPreviewHooked && $s(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const d = t.noPreview === !0, u = d ? 0 : 56, f = d ? 0 : Vk, h = document.createElement("div");
  if (ZM(), h.className = "pano-node-preview-dom", h.classList.add(i ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), d && h.classList.add("pano-node-preview--no-preview"), h.setAttribute("data-capture-wheel", "true"), h.tabIndex = 0, h.style.cssText = [
    "width:100%",
    d ? "height:auto" : "height:100%",
    f > 0 ? `min-height:${f}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), d) {
    const C = fl(Vu(
      e.addDOMWidget($u(), "preview", h, Yh(e, null))
    ));
    ua(e), e.__panoDomPreview = { widget: C, root: h, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const g = document.createElement("div");
  g.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const b = mn({ label: "node.surface" });
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
  const _ = document.createElement("div");
  _.style.cssText = [
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
  ].join(";"), _.textContent = "Connect ERP image", g.appendChild(b), g.appendChild(_), h.appendChild(g);
  const v = xg(h), P = document.createElement("div");
  P && (P.className = i ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", P.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", h.appendChild(P)), QM(e, 120, 120), ua(e);
  let W = null;
  try {
    zP(e, u, () => {
      var C, ye;
      return (ye = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : ye.call(C);
    }), W = fl(Vu(e.addDOMWidget(
      $u(),
      "preview",
      h,
      Yh(
        e,
        () => {
          var C, ye;
          return (ye = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : ye.call(C);
        },
        u,
        f,
        !1
      )
    )));
  } catch {
    return;
  }
  const D = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, O = () => {
    D.destroyed || (D.needsDraw = !0, !D.inTick && !D.raf && (D.raf = requestAnimationFrame(Ne)));
  }, S = x0(O), $ = /* @__PURE__ */ Eo(i ? { ...B0(kn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...X0(kn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((C) => ({ value: C, label: C }))
  });
  let z = null;
  if (i && e.__panoSceneStateV2) {
    const [C, ye] = [0, 1].map(() => {
      const Ue = Dl(document, "node.playback");
      return Ue.playsInline = !0, Ue.preload = "auto", Ue.crossOrigin = "anonymous", Ue.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", g.appendChild(Ue), Ue;
    }), Ie = mn({ label: "node.still" });
    Ie.__panoFrameIdx = 0;
    const De = mn({ label: "node.port-still" });
    De.__panoFrameIdx = 0;
    const Be = Lk({
      video: C,
      stickerVideo: ye,
      createImage: (Ue, Ke) => {
        const Qe = new Image();
        return Qe.onload = Ke, Qe.onerror = Ke, Qe.src = Ue, Qe;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ue) => requestAnimationFrame(Ue),
        cancelFrame: (Ue) => cancelAnimationFrame(Ue)
      },
      readState: () => kn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: O,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ke;
        if (!(C.videoWidth > 0 && C.videoHeight > 0)) return;
        const Ue = Math.min(1, XM / C.videoWidth);
        Ie.width = Math.round(C.videoWidth * Ue), Ie.height = Math.round(C.videoHeight * Ue), (Ke = Ie.getContext("2d")) == null || Ke.drawImage(C, 0, 0, Ie.width, Ie.height), Ie.__panoFrameIdx += 1, O();
      },
      onStickerCapture: () => {
        var Ue;
        ye.videoWidth > 0 && ye.videoHeight > 0 && (De.width = ye.videoWidth, De.height = ye.videoHeight, (Ue = De.getContext("2d")) == null || Ue.drawImage(ye, 0, 0), De.__panoFrameIdx += 1, O());
      },
      onChange: () => {
        $.playing = Be.playing, O();
      }
    });
    z = { playback: Be, video: C, still: Ie, stickerVideo: ye, stickerStill: De, stickerSource: "" }, e.__panoSurfacePlayback = z;
  }
  const te = () => {
    var Qe;
    const { playback: C, still: ye, stickerStill: Ie } = z, De = Du(g, !!((Qe = e.flags) != null && Qe.collapsed)), Be = C.source, Ue = De ? FP(e) : null, Ke = C.follow({
      shown: De,
      sources: De ? OP(e) : [],
      state: kn(e),
      sticker: Ue
    });
    ((Ue == null ? void 0 : Ue.src) || "") !== z.stickerSource && (z.stickerSource = (Ue == null ? void 0 : Ue.src) || "", pu(Ie)), C.source !== Be && (pu(ye), ye.__panoFrameIdx = 0), $.playable = Ke, $.playing = C.playing;
  }, ie = () => {
    var ye, Ie;
    const C = ((ye = e.__panoOwnOutputVideoCache) == null ? void 0 : ye.player) ?? null;
    C && !Du(g, !!((Ie = e.flags) != null && Ie.collapsed)) && C.pause(), i && ($.playable = !!C && !C.failed(), $.playing = !!(C != null && C.playing));
  }, G = () => {
    var C;
    z == null || z.playback.pause(), (C = e.__panoOwnOutputVideoCache) == null || C.player.pause();
  };
  let j = null;
  const K = (i ? Tk : Wk)({
    readState: () => kn(e),
    publishLiveState: (C) => {
      C ? (j = C, e.__panoLiveStateOverride = C) : (e.__panoLiveStateOverride === j && (e.__panoLiveStateOverride = null), j = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, O();
    },
    commitState: (C) => {
      var De, Be, Ue, Ke;
      const ye = So(e, "state_json");
      if (!ye) return;
      i0(e, C.active);
      const Ie = a0(e, C);
      s0(e, Ie, String(ye.value ?? "")) || (ye.value = Ie, (De = ye.callback) == null || De.call(ye, Ie), e.__panoStateCache = null, (Be = e.setDirtyCanvas) == null || Be.call(e, !0, !0), (Ke = (Ue = e.graph) == null ? void 0 : Ue.setDirtyCanvas) == null || Ke.call(Ue, !0, !0));
    },
    onChange: (C) => Object.assign($, C)
  }), Se = i ? sy(e, (C = "sync", ye = null) => {
    var on;
    if (!i || !e.graph || !K || K.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Zt = sn(e, "external-sticker"), ui = kn(e).stickers.find((di) => di.source.kind === "port");
      return K.apply({
        type: "sync-port",
        value: W0(e, {
          pose: Zt ? xa(e, "pano_sticker_input_pose", ye) : null,
          image: ui ? Ra(e, ui.id, null, { external: !0 }) : null
        })
      });
    }
    const Ie = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Zt) => String((Zt == null ? void 0 : Zt.name) || "") === "sticker_image") : -1, De = Ie >= 0 ? ((on = e.getInputLink(Ie)) == null ? void 0 : on.id) ?? null : null;
    if (De == null)
      return K.apply({ type: "sync-external", value: { connected: !1 } });
    if (!sn(e, "external-sticker")) return !1;
    const Be = xa(e, "pano_sticker_input_pose", ye), Ue = Array.isArray(Be) ? Be[0] : Be, Ke = String(xa(e, "pano_sticker_input_state_hash", ye) ?? ""), Qe = e.__panoPreviewView || { yaw: 0, pitch: 0 }, wt = kn(e), pt = (Array.isArray(wt == null ? void 0 : wt.stickers) ? wt.stickers : []).find((Zt) => String((Zt == null ? void 0 : Zt.id) || "") === "sticker_image_1"), Wt = Ra(e, "sticker_image_1", null, { external: !0 }), yn = Ue && typeof Ue == "object" ? Ue : pt || { yaw_deg: Qe.yaw, pitch_deg: Qe.pitch, hFOV_deg: 30, rot_deg: 0 };
    return K.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: De,
        stateHash: Ke,
        pose: yn,
        imageWidth: Number((Wt == null ? void 0 : Wt.naturalWidth) || (Wt == null ? void 0 : Wt.width) || 0),
        imageHeight: Number((Wt == null ? void 0 : Wt.naturalHeight) || (Wt == null ? void 0 : Wt.height) || 0)
      }
    });
  }) : () => {
  };
  let be = 0;
  const ge = async (C) => {
    if (!i || !K || !rr(C)) return !1;
    G();
    const ye = `asset_${Math.random().toString(16).slice(2, 10)}`, Ie = `st_${Math.random().toString(16).slice(2, 10)}`, De = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    be += 1, $.importing = !0;
    const Be = la(e, `add:${ye}`, async () => {
      const Ue = await ca(C), Ke = await Pi(C, {
        fetchApi: (Qe, wt) => fn.fetchApi(Qe, wt)
      });
      return xe(), K.apply({
        type: "add-sticker",
        value: {
          stickerId: Ie,
          assetId: ye,
          asset: Ke,
          imageWidth: Ue.width,
          imageHeight: Ue.height,
          yaw_deg: Number(De.yaw || 0),
          pitch_deg: Number(De.pitch || 0)
        }
      });
    });
    try {
      return await Be;
    } catch {
      return !1;
    } finally {
      be = Math.max(0, be - 1), $.importing = be > 0, O();
    }
  };
  let X = null, A = null, T = null, de = !1;
  const he = () => {
    var C;
    return T && (clearTimeout(T), T = null), de ? (de = !1, ((C = K == null ? void 0 : K.commitGesture) == null ? void 0 : C.call(K)) ?? !1) : !1;
  }, xe = () => {
    var De, Be, Ue;
    const C = he(), ye = (X == null ? void 0 : X.pointerId) ?? (A == null ? void 0 : A.pointerId);
    if (X = null, A = null, ye != null) {
      try {
        (De = b.hasPointerCapture) != null && De.call(b, ye) && ((Be = b.releasePointerCapture) == null || Be.call(b, ye));
      } catch {
      }
      b.style.cursor = "grab";
    }
    const Ie = ((Ue = K == null ? void 0 : K.commitGesture) == null ? void 0 : Ue.call(K)) ?? !1;
    return C || Ie;
  }, He = () => {
    var De, Be, Ue;
    const C = he(), ye = X == null ? void 0 : X.pointerId;
    if (X = null, ye != null) {
      try {
        (De = b.hasPointerCapture) != null && De.call(b, ye) && ((Be = b.releasePointerCapture) == null || Be.call(b, ye));
      } catch {
      }
      b.style.cursor = "grab";
    }
    const Ie = ((Ue = K == null ? void 0 : K.cancelGesture) == null ? void 0 : Ue.call(K)) ?? !1;
    return C || Ie;
  }, se = () => xe();
  K && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(se));
  let R = null, ae = !1;
  if (P && K)
    try {
      Jd(), R = pd(i ? gM : lM, {
        model: $,
        onAction: (C) => {
          var De, Be, Ue;
          if ((C == null ? void 0 : C.type) === "toggle-playback") {
            xe(), z ? z.playback.toggle() : (De = e.__panoOwnOutputVideoCache) == null || De.player.toggle(), O();
            return;
          }
          if (G(), (C == null ? void 0 : C.type) === "open-editor") {
            xe(), i || ($.aspectOpen = !1), (Be = e.__panoOpenEditor) == null || Be.call(e);
            return;
          }
          if (i) {
            if ((C == null ? void 0 : C.type) === "add-image-file") {
              ge(C.file);
              return;
            }
            K.apply(C) && O();
            return;
          }
          if ((C == null ? void 0 : C.type) === "toggle-aspect") {
            $.aspectOpen = !$.aspectOpen;
            return;
          }
          if ((C == null ? void 0 : C.type) === "close-aspect") {
            $.aspectOpen = !1;
            return;
          }
          let ye = C;
          if ((C == null ? void 0 : C.type) === "add-frame") {
            const Ke = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            ye = {
              ...C,
              ...zk(Ke, {
                width: b.width,
                height: b.height
              })
            };
          } else if ((C == null ? void 0 : C.type) === "delete-frame") {
            const Ke = Li(kn(e));
            Ke && (e.__panoPreviewView = Z0(Ke, {
              width: b.width,
              height: b.height
            }));
          }
          const Ie = ((Ue = e.__panoCutoutNodeFrame) == null ? void 0 : Ue.safeRect) || null;
          $.aspectOpen = !1, K.apply({ ...ye, safeRect: Ie }) && O();
        }
      }), R.mount(P), ae = !0;
    } catch {
      R = null, ae = !1;
    }
  const me = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    z && te(), O();
  }) : null;
  me == null || me.observe(g);
  const Ne = (C) => {
    var Ie, De;
    D.raf = 0, D.inTick = !0;
    let ye = !1;
    try {
      ye = Te.stepInertia(C), (D.needsDraw || ye) && (D.needsDraw = !1, z ? te() : ie(), (Ie = e.flags) != null && Ie.collapsed || DP(e, b, S), $.viewUnavailable = S.failed);
    } finally {
      D.inTick = !1;
    }
    (ye || D.needsDraw) && !D.raf && (D.raf = requestAnimationFrame(Ne)), JM() && (!e.__panoDebugLastTs || C - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = C, e.__panoPreviewMode, zu(e), ra(h), ra(g), ra(b), ra(h.parentElement), ra((De = h.parentElement) == null ? void 0 : De.parentElement), Number(b.width || 0), Number(b.height || 0), void 0);
  }, Te = vd({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (C) => {
      e.__panoPreviewView = C;
    },
    getViewportSize: () => {
      const C = b.getBoundingClientRect();
      return {
        w: Math.max(1, Number(C.width || b.clientWidth || 0)),
        h: Math.max(1, Number(C.height || b.clientHeight || 0))
      };
    },
    getInvert: () => {
      const C = jh();
      return {
        x: C.invert_view_x ? -1 : 1,
        y: C.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      O();
    }
  }), oe = i ? g : h, Ae = (C) => {
    const ye = b.getBoundingClientRect();
    return {
      x: (Number(C.clientX) - ye.left) * (b.width / Math.max(1, ye.width)),
      y: (Number(C.clientY) - ye.top) * (b.height / Math.max(1, ye.height))
    };
  }, x = (C) => {
    var De, Be;
    if (!i || !o) return;
    const ye = kn(e), Ie = Lh(
      Fu(ye, gl(e)),
      String(((De = ye == null ? void 0 : ye.active) == null ? void 0 : De.selected_sticker_id) || ""),
      Ae(C),
      Gu(e, b.width, b.height)
    );
    if (!Ie) {
      b.style.cursor = "grab";
      return;
    }
    if (((Be = Ie.item) == null ? void 0 : Be.locked) === !0) {
      b.style.cursor = "default";
      return;
    }
    b.style.cursor = Ie.hit.cursor || "default";
  };
  b.addEventListener("pointerdown", (C) => {
    var Qe, wt, pt, Wt, yn, $n, on, Zt, ui, di, Wa;
    if (!Hn(C, oe) || C.button !== 0) return;
    if (!i) {
      const bn = Li(kn(e)), zn = e.__panoCutoutNodeFrame;
      if (!bn) {
        (Qe = h.focus) == null || Qe.call(h, { preventScroll: !0 }), (wt = b.setPointerCapture) == null || wt.call(b, C.pointerId), b.style.cursor = "grabbing", Te.startDrag(C.clientX, C.clientY, C.pointerId);
        return;
      }
      if (bn.locked === !0 || !zn || !K) return;
      const Vo = Ae(C);
      let $o;
      if (C.shiftKey) {
        const fi = ey({
          frame: zn,
          point: Vo,
          startRollDeg: Number(bn.roll_deg ?? bn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!fi) return;
        $o = { kind: "roll", pointerId: C.pointerId, rollGesture: fi };
      } else {
        const fi = ((pt = kn(e)) == null ? void 0 : pt.ui_settings) || jh();
        $o = {
          kind: "pan",
          pointerId: C.pointerId,
          startPoint: Vo,
          startShot: { ...bn },
          focalPx: Di(zn, bn),
          invertX: fi.invert_view_x === !0,
          invertY: fi.invert_view_y === !0
        };
      }
      xe(), (Wt = h.focus) == null || Wt.call(h, { preventScroll: !0 }), (yn = b.setPointerCapture) == null || yn.call(b, C.pointerId), b.style.cursor = "grabbing", K.beginGesture(), X = $o;
      return;
    }
    if (!o) return;
    const ye = Ae(C), Ie = kn(e), De = String((($n = Ie == null ? void 0 : Ie.active) == null ? void 0 : $n.selected_sticker_id) || ""), Be = Gu(e, b.width, b.height);
    (on = h.focus) == null || on.call(h, { preventScroll: !0 });
    const Ue = () => Lh(Fu(Ie, gl(e)), De, ye, Be);
    let Ke = Ue();
    if (Ke && (z != null && z.playback.playing) && (G(), Ke = Ue()), Ke && K) {
      if (Te.stopMotion(), xe(), String(((Zt = Ke.item) == null ? void 0 : Zt.id) || "") !== De && K.apply({ type: "select-sticker", id: Ke.item.id }), ((ui = Ke.item) == null ? void 0 : ui.locked) === !0) {
        O();
        return;
      }
      const bn = ye, zn = Ke.geometry.center;
      A = {
        active: !0,
        kind: Ke.hit.kind,
        pointerId: C.pointerId,
        startPoint: bn,
        startCenter: { ...zn },
        startSticker: { ...Ke.item },
        startDistance: Math.max(1, Math.hypot(bn.x - zn.x, bn.y - zn.y)),
        startAngle: Math.atan2(bn.y - zn.y, bn.x - zn.x),
        projection: Be
      }, K.beginGesture(), (di = b.setPointerCapture) == null || di.call(b, C.pointerId), b.style.cursor = Ke.hit.kind === "rotate" ? "grabbing" : Ke.hit.kind === "move" ? "move" : Ke.hit.cursor, O();
      return;
    }
    (Wa = b.setPointerCapture) == null || Wa.call(b, C.pointerId), b.style.cursor = "grabbing", Te.startDrag(C.clientX, C.clientY, C.pointerId);
  }), b.addEventListener("pointermove", (C) => {
    if (!i) {
      if (!X) {
        if (!Te.state.drag.active) return;
        Hn(C, oe), Te.moveDrag(C.clientX, C.clientY, "pano");
        return;
      }
      if (X.pointerId !== C.pointerId || !K) return;
      if (Hn(C, oe), X.kind === "pan") {
        const Ie = Ae(C);
        K.updateGesture({
          type: "pan-camera",
          startShot: X.startShot,
          dx: Ie.x - X.startPoint.x,
          dy: Ie.y - X.startPoint.y,
          focalPx: X.focalPx,
          invertX: X.invertX,
          invertY: X.invertY
        });
        return;
      }
      const ye = ty(X.rollGesture, Ae(C), C);
      if (!ye) return;
      X.rollGesture = ye.gesture, K.updateGesture({ type: "set-roll", value: ye.rollDeg });
      return;
    }
    if (!A && !Te.state.drag.active) {
      x(C);
      return;
    }
    if (A) {
      if (A.pointerId !== C.pointerId || !K) return;
      Hn(C, oe);
      const ye = Ae(C);
      let Ie = A.startSticker;
      if (A.kind === "move")
        Ie = _M(
          A.startSticker,
          {
            x: A.startCenter.x + ye.x - A.startPoint.x,
            y: A.startCenter.y + ye.y - A.startPoint.y
          },
          A.projection
        );
      else if (A.kind === "scale") {
        const De = Math.hypot(ye.x - A.startCenter.x, ye.y - A.startCenter.y);
        Ie = SM(A.startSticker, A.startDistance, De);
      } else if (A.kind === "rotate") {
        const De = Math.atan2(ye.y - A.startCenter.y, ye.x - A.startCenter.x);
        Ie = wM(A.startSticker, A.startAngle, De, C.shiftKey === !0);
      }
      K.updateGesture({ type: "set-transform", value: Ie }), O();
      return;
    }
    !o || !Te.state.drag.active || (Hn(C, oe), Te.moveDrag(C.clientX, C.clientY, "pano"));
  });
  const N = () => {
    var ye, Ie;
    if (!X && !A) {
      if (!Te.state.drag.active) return;
      Te.endDrag(), b.style.cursor = "grab", O();
      return;
    }
    if (!K) return;
    const C = (X == null ? void 0 : X.pointerId) ?? (A == null ? void 0 : A.pointerId);
    X = null, A = null;
    try {
      (ye = b.hasPointerCapture) != null && ye.call(b, C) && ((Ie = b.releasePointerCapture) == null || Ie.call(b, C));
    } catch {
    }
    K.cancelGesture(), b.style.cursor = "grab", O();
  }, U = (C, ye = !1) => {
    var Ie, De, Be, Ue;
    if (!i) {
      if (!X) {
        if (!Te.state.drag.active) return;
        Hn(C, oe), (Ie = b.releasePointerCapture) == null || Ie.call(b, C.pointerId), b.style.cursor = "grab", Te.endDrag(), O();
        return;
      }
      if (X.pointerId !== C.pointerId || !K) return;
      Hn(C, oe), X = null, (De = b.releasePointerCapture) == null || De.call(b, C.pointerId), b.style.cursor = "grab", ye ? K.cancelGesture() : K.commitGesture(), x(C), O();
      return;
    }
    if (A) {
      if (A.pointerId !== C.pointerId || !K) return;
      Hn(C, oe), A = null, (Be = b.releasePointerCapture) == null || Be.call(b, C.pointerId), b.style.cursor = "grab", ye ? K.cancelGesture() : K.commitGesture(), O();
      return;
    }
    !o || !Te.state.drag.active || (Hn(C, oe), (Ue = b.releasePointerCapture) == null || Ue.call(b, C.pointerId), b.style.cursor = "grab", Te.endDrag(), O());
  };
  b.addEventListener("pointerup", U), b.addEventListener("pointercancel", (C) => U(C, !0)), b.addEventListener("lostpointercapture", N), b.addEventListener("pointerleave", (C) => {
    !i && X || A || Te.state.drag.active && U(C);
  });
  const ue = (C) => {
    const ye = document.activeElement;
    if (ye !== h && !h.contains(ye)) return;
    if (C.key === "Escape" && (X || A) && K) {
      N(), Wu(C);
      return;
    }
    if (!i || C.key !== "Delete" && C.key !== "Backspace" || !K) return;
    const Ie = C.target, De = String((Ie == null ? void 0 : Ie.tagName) || "").toUpperCase();
    De === "INPUT" || De === "TEXTAREA" || Ie != null && Ie.isContentEditable || $.canDelete === !0 && (G(), xe(), K.apply({ type: "delete-selected" }) && O(), Wu(C));
  };
  window.addEventListener("keydown", ue, !0);
  const M = BM({
    requestFrame: (C) => requestAnimationFrame(C),
    cancelFrame: (C) => cancelAnimationFrame(C),
    restore: (C) => VP(C)
  }), Z = (C) => {
    var Ie, De, Be, Ue, Ke, Qe;
    if (!Hn(C, oe)) return;
    if (!i) {
      const wt = Li(kn(e));
      if (wt && wt.locked !== !0 && K) {
        const pt = Xs(C);
        pt !== 0 && (de || (xe(), K.beginGesture(), de = !0), K.updateGesture({
          type: "step-fov",
          direction: pt
        }) ? (T && clearTimeout(T), T = setTimeout(he, 180), O()) : K.hasGestureChanges() || (K.cancelGesture(), de = !1));
      } else if (!wt) {
        const pt = Uh();
        Te.applyWheelEvent(C) && O(), M.schedule(pt);
      }
      (Ie = C.preventDefault) == null || Ie.call(C), (De = C.stopPropagation) == null || De.call(C), (Be = C.stopImmediatePropagation) == null || Be.call(C);
      return;
    }
    if (!o) return;
    const ye = Uh();
    Te.applyWheelEvent(C) && O(), (Ue = C.preventDefault) == null || Ue.call(C), (Ke = C.stopPropagation) == null || Ke.call(C), (Qe = C.stopImmediatePropagation) == null || Qe.call(C), M.schedule(ye);
  }, re = i ? [g, b] : [g];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((C) => {
    re.forEach((ye) => ye.addEventListener(C, Z, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((C) => {
    b.addEventListener(C, (ye) => Hn(ye, oe)), g.addEventListener(C, (ye) => Hn(ye, oe));
  });
  const I = So(e, "state_json");
  let E = null, F = null;
  I && !I.__panoPreviewPatchedCb && (E = I.callback, F = (C) => {
    const ye = E ? E(C) : void 0;
    return O(), ye;
  }, I.callback = F, I.__panoPreviewPatchedCb = F);
  const B = So(e, "bg_color");
  let Y = null, Q = null;
  B && !B.__panoPreviewPatchedCb && (Y = B.callback, Q = (C) => {
    const ye = Y ? Y(C) : void 0;
    return O(), ye;
  }, B.callback = Q, B.__panoPreviewPatchedCb = Q);
  const V = e.onRemoved, ne = e.onResize, Pe = e.onExecuted, Re = e.onDragOver, le = e.onDragDrop;
  let ve = null;
  const we = () => {
    i && ($.dropActive = !0, ve && clearTimeout(ve), ve = setTimeout(() => {
      ve = null, $.dropActive = !1;
    }, 140));
  }, m = i ? function(C) {
    return (Re ? Re.apply(this, arguments) : !1) === !0 ? !0 : Qd(C == null ? void 0 : C.dataTransfer) ? (we(), !0) : !1;
  } : null, p = i ? function(C) {
    var De;
    if ((le ? le.apply(this, arguments) : !1) === !0) return !0;
    const Ie = Array.from(((De = C == null ? void 0 : C.dataTransfer) == null ? void 0 : De.files) || []).find((Be) => rr(Be));
    return Ie ? (ve && clearTimeout(ve), ve = null, $.dropActive = !1, ge(Ie), !0) : !1;
  } : null;
  i && (e.onDragOver = m, e.onDragDrop = p);
  const L = i ? KM(h, {
    onActive: (C) => {
      if (C) {
        we();
        return;
      }
      ve && clearTimeout(ve), ve = null, $.dropActive = !1;
    },
    onDrop: (C) => {
      ge(C);
    }
  }) : () => {
  }, H = function(C) {
    e.__panoOutputFromRun = !0;
    const ye = by(e, C);
    Gr(e, ye ? "executed" : "sync", C), O();
    const Ie = Pe ? Pe.apply(this, arguments) : void 0;
    return ua(e), Ie;
  };
  e.onExecuted = H;
  const k = e.onConnectionsChange, ee = function(C, ye) {
    const Ie = kh(e, C, ye, jd), De = kh(e, C, ye, ci), Be = arguments, Ue = k ? k.apply(this, Be) : void 0, Ke = () => {
      D.destroyed || (De && bP(e), Ie && Gr(e, "connection-change"), ua(e), O());
    };
    return Ke(), queueMicrotask(Ke), Ue;
  };
  e.onConnectionsChange = ee;
  const _e = function() {
    const C = ne ? ne.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, O(), C;
  };
  e.onResize = _e;
  const pe = function() {
    return Le(), Hu.unregister(this), V ? V.apply(this, arguments) : void 0;
  };
  e.onRemoved = pe;
  const Le = () => {
    var C, ye, Ie, De, Be, Ue, Ke, Qe, wt;
    D.destroyed = !0, (C = me == null ? void 0 : me.disconnect) == null || C.call(me), i ? xe() : He(), b.removeEventListener("lostpointercapture", N), L(), v(), window.removeEventListener("keydown", ue, !0), (Ie = (ye = e.__panoStateFlushers) == null ? void 0 : ye.delete) == null || Ie.call(ye, se), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (De = K == null ? void 0 : K.destroy) == null || De.call(K), (Be = R == null ? void 0 : R.unmount) == null || Be.call(R), z && (z.playback.dispose(), z.video.remove(), z.stickerVideo.remove(), e.__panoSurfacePlayback === z && (e.__panoSurfacePlayback = null)), S.dispose(), e.__panoSurfaceScene = null, (Ke = (Ue = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ue.dispose) == null || Ke.call(Ue), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, Se(), M.dispose(), ve && clearTimeout(ve), ve = null, ef.disposeOwner(e), wo(e), D.raf && cancelAnimationFrame(D.raf), D.raf = 0, ((Qe = e.__panoCutoutNodeSurface) == null ? void 0 : Qe.session) === K && (e.__panoCutoutNodeSurface = null), ((wt = e.__panoStickersNodeSurface) == null ? void 0 : wt.session) === K && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === _e && (e.onResize = ne), e.onExecuted === H && (e.onExecuted = Pe), e.onConnectionsChange === ee && (e.onConnectionsChange = k), F && (I == null ? void 0 : I.callback) === F && (I.callback = E), F && (I == null ? void 0 : I.__panoPreviewPatchedCb) === F && delete I.__panoPreviewPatchedCb, Q && (B == null ? void 0 : B.callback) === Q && (B.callback = Y), Q && (B == null ? void 0 : B.__panoPreviewPatchedCb) === Q && delete B.__panoPreviewPatchedCb, e.onDragOver === m && (e.onDragOver = Re), e.onDragDrop === p && (e.onDragDrop = le), e.onRemoved === pe && (e.onRemoved = V);
  };
  e.__panoDomRestore = Le, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = K && ae && !i ? { session: K, model: $ } : null, e.__panoStickersNodeSurface = K && ae && i ? { session: K, model: $ } : null, e.__panoDomPreview = {
    widget: W,
    root: h,
    canvas: b,
    requestDraw: O,
    state: D,
    emptyHintEl: _,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Hu.register(e), e.graph && Gr(e, "attach"), O();
}
function qh(e, t = {}) {
  py(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Xh(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (fy(e) && !n) {
    tf(e);
    return;
  }
  py(e).attach(t);
}
function KP(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function BP(e, t = 1, n = 1 / 0, r = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, a = Number(e == null ? void 0 : e.width), s = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(s) ? s : 0) * o, u = Number(n), f = u > 0 ? u : 1 / 0, h = Math.max(l, d);
  let g = h > 0 ? Math.min(1, f / h) : 1;
  return r && l > 0 && d > 0 && (g = Math.min(g, r.width * o / l, r.height * o / d)), {
    width: Math.max(1, Math.round(l * g)),
    height: Math.max(1, Math.round(d * g))
  };
}
function UP({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var g;
  const i = typeof n == "function" ? n : () => {
  }, o = typeof r == "function" ? r : () => {
  };
  let a = !1, s = null;
  const l = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, d = () => {
    const b = l();
    return b === s || (s = b, i(b)), b;
  }, u = () => d();
  return (g = t == null ? void 0 : t.addEventListener) == null || g.call(t, "fullscreenchange", u), d(), { toggle: async () => {
    var b;
    if (a || !e || !t) return !1;
    if (l()) {
      try {
        await ((b = t.exitFullscreen) == null ? void 0 : b.call(t));
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
    var b, _, v;
    if (!a) {
      if (a = !0, (b = t == null ? void 0 : t.removeEventListener) == null || b.call(t, "fullscreenchange", u), l())
        try {
          const P = (_ = t.exitFullscreen) == null ? void 0 : _.call(t);
          (v = P == null ? void 0 : P.catch) == null || v.call(P, () => {
          });
        } catch {
        }
      s = !1, i(!1);
    }
  } };
}
const YP = { class: "pano-preview-node-surface" }, qP = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => ($e(), je("div", YP, [
      tt(tn, {
        icon: e.model.fullscreen ? at(Ye).fullscreen_close : at(Ye).fullscreen,
        label: e.model.fullscreen ? "Exit Fullscreen" : "Fullscreen",
        tip: e.model.fullscreen ? "Exit fullscreen" : "Fullscreen",
        pressed: e.model.fullscreen ? "true" : "false",
        "extra-class": "pano-preview-node-fullscreen",
        attrs: { "data-action": "toggle-fullscreen" },
        onClick: r[0] || (r[0] = (i) => {
          var o;
          return (o = t.onAction) == null ? void 0 : o.call(t, { type: "toggle-fullscreen" });
        })
      }, null, 8, ["icon", "label", "tip", "pressed"]),
      e.model.viewUnavailable ? ($e(), Yn(Yd, { key: 0 })) : mt("", !0)
    ]));
  }
}, bs = 140, XP = 180, Jh = 40, Yc = 10;
function Zh(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Qh(e, t) {
  const n = Zh(e), r = Zh(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function em(e) {
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
  const i = `/view?${n.toString()}`;
  return typeof ((o = fn) == null ? void 0 : o.apiURL) == "function" ? fn.apiURL(i) : i;
}
function xo(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return xo(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return em({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = xo(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : em(e);
}
function vy(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function JP(e) {
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
function Ku(e) {
  var i;
  const t = (i = ir) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Qh(o, n)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (Qh(o, n)) return t[o];
  return null;
}
function ZP(e) {
  var r, i;
  const t = Ku(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of n)
    if (Array.isArray(o))
      for (const a of o) {
        const s = xo(a);
        if (s && /\.mp4(\?|$)/i.test(s) || s && String((a == null ? void 0 : a.format) || "").toLowerCase() === "video/mp4") return s;
      }
  return "";
}
function QP(e, t = "erp_image") {
  var g, b, _, v, P, W, D;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((O) => String((O == null ? void 0 : O.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((O, S) => String((O == null ? void 0 : O.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(S))), r < 0) return "";
  const i = e.getInputLink(r);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const a = (_ = (b = (g = ir) == null ? void 0 : g.graph) == null ? void 0 : b.getNodeById) == null ? void 0 : _.call(b, o), s = Ku(o), l = Ku(e == null ? void 0 : e.id), d = [
    (v = l == null ? void 0 : l.ui) == null ? void 0 : v.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    s == null ? void 0 : s.images,
    (P = s == null ? void 0 : s.ui) == null ? void 0 : P.pano_input_images,
    s == null ? void 0 : s.pano_input_images
  ];
  for (const O of d)
    if (Array.isArray(O))
      for (const S of O) {
        const $ = xo(S);
        if ($) return $;
      }
  let u = [];
  try {
    u = typeof ((W = ir) == null ? void 0 : W.getNodeImageUrls) == "function" ? ir.getNodeImageUrls(a) || [] : [];
  } catch {
    u = [];
  }
  if (Array.isArray(u) && u.length > 0)
    for (const O of u) {
      const S = xo(O);
      if (S) return S;
    }
  if (a) {
    const O = Array.isArray(a == null ? void 0 : a.imgs) ? a.imgs : [];
    for (const S of O) {
      const $ = xo(S);
      if ($) return $;
    }
  }
  const f = (D = a == null ? void 0 : a.widgets) == null ? void 0 : D.find((O) => String((O == null ? void 0 : O.name) || "").toLowerCase() === "image"), h = String((f == null ? void 0 : f.value) || "").trim();
  return h ? fn.apiURL(`/view?filename=${encodeURIComponent(h)}&type=input&subfolder=`) : "";
}
function qc(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function tm(e, t, n, r, i, o, a) {
  var d, u, f;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !vy(o) || n <= 1 || r <= 1) {
    qc(t, n, r);
    return;
  }
  if (a.failed) {
    qc(t, n, r);
    return;
  }
  const s = Number(((f = (u = (d = e == null ? void 0 : e.widgets) == null ? void 0 : d.find) == null ? void 0 : u.call(d, (h) => (h == null ? void 0 : h.name) === "coverage")) == null ? void 0 : f.value) || 360) === 180 ? 180 : 360, l = a.render({
    width: n,
    height: r,
    camera: sl(i, n, r),
    background: { media: o, revision: JP(o), coverage: s },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, n, r) : qc(t, n, r);
}
function nm(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class eN {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = x0(() => this.requestDraw()), this.controller = vd({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: zt(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: Fe(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: Fe(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var i, o, a, s;
        const r = (o = (i = this.canvas) == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : o.call(i);
        return {
          w: Math.max(1, Number((r == null ? void 0 : r.width) || ((a = this.canvas) == null ? void 0 : a.clientWidth) || 0)),
          h: Math.max(1, Number((r == null ? void 0 : r.height) || ((s = this.canvas) == null ? void 0 : s.clientHeight) || 0))
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
    var r, i, o;
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
    const n = ((o = (i = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : i.find) == null ? void 0 : o.call(i, (a) => (a == null ? void 0 : a.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...a) => {
      const s = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...a) : void 0;
      return t.requestDraw(), s;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      var o;
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (o = this.flags) != null && o.collapsed || !t.errorText) return r;
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
        `min-height:${bs}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = mn({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const n = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return bs;
        },
        getHeight() {
          return bs;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = fl(Vu(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = r ? r(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(bs, Number(o.minHeight || 0)),
            minWidth: Math.max(XP, Number(o.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, n, r, i, o, a;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return Jd(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Eo({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = UP({
        root: this.root,
        documentRef: document,
        onChange: (s) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = s), this.requestDraw();
        },
        onFallback: () => {
          var s, l;
          return (l = (s = this.options).onOpen) == null ? void 0 : l.call(s, this.node);
        }
      }), this.surfaceApp = pd(qP, {
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
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (i = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || i.call(r), this.surfaceApp = null, (a = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || a.call(o), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = xg(n), t.addEventListener("pointerdown", (o) => {
      var a, s, l;
      o.button === 0 && ((a = n.focus) == null || a.call(n, { preventScroll: !0 }), (s = t.setPointerCapture) == null || s.call(t, o.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (l = o.stopImmediatePropagation) == null || l.call(o));
    }), t.addEventListener("pointermove", (o) => {
      var a;
      this.controller.state.drag.active && (this.controller.moveDrag(o.clientX, o.clientY, "pano"), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
    const r = (o) => {
      var a, s;
      this.controller.state.drag.active && ((a = t.releasePointerCapture) == null || a.call(t, o.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (o) => {
      var a;
      this.controller.applyWheelEvent(o), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (o) => {
      var a;
      this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o);
    }), n.addEventListener("keydown", (o) => {
      var a;
      KP(o, n) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !vy(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, n, r;
    return this.root ? Du(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((n = this.node.flags) != null && n.collapsed) && (!((r = ir.canvas) != null && r.graph) || this.node.graph === ir.canvas.graph);
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), r;
    }, this.node.onMouseDown = function(n, r) {
      var a;
      const i = t.localPoint(r);
      if (!i) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const o = t.getLegacyPreviewRect();
      return nm(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var a;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const i = t.localPoint(r);
      if (!i) return !0;
      const o = t.getLegacyPreviewRect();
      return t.controller.moveDrag(i.x - o.x, i.y - o.y, "pano"), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, i) {
      var l, d, u, f, h, g;
      const o = xP(this, n, r, i), a = t.getLegacyPreviewRect();
      if (!o || !nm(o.x, o.y, a))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const s = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((d = t.view) == null ? void 0 : d.fov) || 100), s && ((u = this.setDirtyCanvas) == null || u.call(this, !0, !1)), (f = n == null ? void 0 : n.preventDefault) == null || f.call(n), (h = n == null ? void 0 : n.stopPropagation) == null || h.call(n), (g = n == null ? void 0 : n.stopImmediatePropagation) == null || g.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, i, o, a;
    const t = Math.max(80, Number(((i = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : i[0]) || 0) - Yc * 2), n = Math.max(60, Number(((a = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : a[1]) || 0) - Jh - Yc);
    return { x: Yc, y: Jh, w: t, h: n };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), tm(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? w0 : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = BP(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var i, o, a;
    const t = ZP(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const s = Dl(document, "preview-node.video");
      s.muted = !0, s.loop = !0, s.preload = "auto", s.playsInline = !0, s.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = s, this.requestDraw());
      }, d = () => this.requestDraw();
      s.addEventListener("loadedmetadata", l), s.addEventListener("loadeddata", l), s.addEventListener("timeupdate", d), s.addEventListener("play", d), s.addEventListener("pause", d), s.src = t, s.load(), this.mediaCleanup = () => {
        s.pause(), s.removeEventListener("loadedmetadata", l), s.removeEventListener("loadeddata", l), s.removeEventListener("timeupdate", d), s.removeEventListener("play", d), s.removeEventListener("pause", d), s.removeAttribute("src"), s.load();
      };
      return;
    }
    const n = QP(this.node, this.imageInputName);
    if (!n) {
      (o = this.mediaCleanup) == null || o.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (a = this.mediaCleanup) == null || a.call(this), this.mediaCleanup = null, this.imgSrc = n;
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
    var i, o;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1, this.img instanceof HTMLVideoElement && !this.img.paused && !this.shown() && this.img.pause();
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (this.syncCanvasSize(), tm(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, i, o, a, s, l, d, u, f, h, g, b, _, v, P;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || i.call(r), this.resizeObserver = null, (a = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || a.call(o), this.fullscreenController = null, (s = this.wheelCaptureCleanup) == null || s.call(this), this.wheelCaptureCleanup = null, (d = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || d.call(l), this.surfaceApp = null, (f = (u = this.surfaceHost) == null ? void 0 : u.remove) == null || f.call(u), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (h = this.mediaCleanup) == null || h.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (b = (g = this.root) == null ? void 0 : g.remove) == null || b.call(g);
    } catch {
    }
    try {
      uy(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((P = (v = (_ = this.node) == null ? void 0 : _.widgets) == null ? void 0 : v.find) == null ? void 0 : P.call(v, (W) => (W == null ? void 0 : W.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function tN(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new eN(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function _y(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[r]) return;
  e[r] = !0;
  const i = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const s = i ? i.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return s;
  };
  const o = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const s = o ? o.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return s;
  };
  const a = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const s = a ? a.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return s;
  };
}
function rf(e) {
  return !!(e != null && e.prototype);
}
function Va(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function nN(e, t = {}) {
  rf(e) || tN(e, {
    ...t,
    onOpen: Va(e, t.onOpen)
  });
}
function rN(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!rf(e)) {
    Xh(e, {
      ...r,
      onOpen: Va(e, t.onOpen)
    });
    return;
  }
  _y(e, "stickers_node_preview", (i) => {
    Xh(i, {
      ...r,
      onOpen: Va(i, t.onOpen)
    });
  });
}
function iN(e, t = {}) {
  if (!rf(e)) {
    qh(e, {
      ...t,
      onOpen: Va(e, t.onOpen)
    });
    return;
  }
  _y(e, "cutout_preview", (n) => {
    qh(n, {
      ...t,
      onOpen: Va(n, t.onOpen)
    });
  });
}
const Nn = {
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
function rm(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function oN({ requestFrame: e, cancelFrame: t, tasks: n }) {
  const r = /* @__PURE__ */ new Set();
  let i = null;
  function o() {
    i = null;
    for (const [a, s] of Object.entries(n))
      r.delete(a) && s();
  }
  return {
    request(a) {
      r.add(a), i ?? (i = e(o));
    },
    cancel() {
      r.clear(), i !== null && t(i), i = null;
    }
  };
}
const bt = Object.freeze({
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
}), aN = new Set(Object.values(bt));
function sN({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: n, animating: r, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, a = !1, s = !1, l = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), u = 1, f = 0;
  function h(_) {
    try {
      _();
    } catch (v) {
      i(v);
    }
  }
  function g() {
    !o && !a && !s && (o = e(b));
  }
  function b(_) {
    o = 0, a = !0;
    try {
      const v = d;
      d = /* @__PURE__ */ new Map();
      for (const W of v.values()) h(() => W(_));
      if (s) return;
      const P = l;
      l = /* @__PURE__ */ new Set(), (P.size || r()) && h(() => n(_, P));
    } finally {
      a = !1;
    }
    (l.size || d.size || r()) && g();
  }
  return {
    requestDraw(_) {
      if (!aN.has(_)) throw new Error(`Unknown draw reason: ${_}`);
      _ === bt.STATE && (f += 1), l.add(_), g();
    },
    requestFrame(_) {
      const v = u++;
      return d.set(v, _), g(), v;
    },
    cancelFrame(_) {
      d.delete(_);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      g();
    },
    get stateRevision() {
      return f;
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
const lN = 250, cN = 600, uN = 180, dN = 2;
function fN(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function da(e, t, n) {
  return e + (t - e) * n;
}
function pN(e, t, n = 1) {
  const r = Math.max(
    Math.abs(bd(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((a, s) => a - e.position[s])) / Math.max(n, 1e-6), o = Math.min(1, r / uN + i / dN);
  return Math.round(da(lN, cN, o));
}
function hN(e, t, n) {
  const r = fN(Fe(n, 0, 1));
  return {
    position: e.position.map((i, o) => da(i, t.position[o], r)),
    yaw_deg: zt(e.yaw_deg + bd(e.yaw_deg, t.yaw_deg) * r),
    pitch_deg: da(e.pitch_deg, t.pitch_deg, r),
    hFOV_deg: da(e.hFOV_deg, t.hFOV_deg, r),
    distance: da(e.distance, t.distance, r)
  };
}
function mN(e, t) {
  return e.position.every((n, r) => Math.abs(n - t.position[r]) < 1e-9) && Math.abs(bd(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function gN(e, t, n, { scale: r = 1, end: i = null } = {}) {
  return mN(e, t) ? null : { from: e, to: t, startTs: n, durationMs: pN(e, t, r), end: i };
}
function yN(e, t) {
  const n = Fe((t - e.startTs) / e.durationMs, 0, 1);
  return n >= 1 ? { view: e.to, done: !0 } : { view: hN(e.from, e.to, n), done: !1 };
}
function yl(e, t) {
  var n;
  return ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e;
}
function bN(e, t, n) {
  const r = yl(e, t);
  return n === "3dof" ? e === "3dof" || r === "3dof" ? "keep" : "return" : e === n && r === n ? "keep" : "switch";
}
function uo(e, t, n, r) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(n || "")) : null;
  i && Object.assign(i, r);
}
function vN(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function _N({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: i,
  rgb01ToHsv: o,
  hsv01ToRgb: a,
  getBrushPresetIdForTool: s,
  isActiveLassoTool: l
}) {
  var D, O;
  const d = e.primaryTool === "paint" || e.primaryTool === "mask", u = {
    visible: d,
    activePane: d ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: r(e.customPaintColor, 1),
    colorPopOpen: d ? !!n : !1,
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
    historyEntries: Array.from({ length: 8 }, (S, $) => ({ index: $, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!d) return u;
  const f = ((D = t.find((S) => i(e.paintColor, S.color))) == null ? void 0 : D.id) || "", h = !f, g = o(e.customPaintColor), b = Math.round(Math.max(0, Math.min(1, Number(((O = e.customPaintColor) == null ? void 0 : O.a) ?? 1))) * 100), _ = s(e.primaryTool === "paint" ? e.paintTool : e.maskTool), v = e.brushSizes[_] ?? 10, P = l(), W = Array.from({ length: 8 }, (S, $) => e.customPaintHistory[$] || null);
  return {
    ...u,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: f,
    customColorActive: h,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...a(g.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, g.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, g.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, g.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, g.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, g.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, g.h)) * 100}%`,
    alphaValue: b,
    alphaText: `${b}%`,
    historyEntries: W.map((S, $) => ({
      index: $,
      color: S ? { cssColor: r(S, 1) } : null
    })),
    sizeValue: v,
    sizeText: String(v),
    sizeFill: `${Math.max(0, Math.min(100, (v - 1) / 119 * 100))}%`,
    sizeDisabled: P,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function SN({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
const wN = {
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
function xN(e) {
  const t = [];
  for (const n of e) {
    const [r, i, o] = wN[n.key] || [], a = t[t.length - 1];
    r && (a != null && a.grouped) && a.label === r ? a.fields.push({ ...n, short: i, drag: o }) : t.push({ key: n.key, label: r || n.label, grouped: !!r, fields: [{ ...n, short: i, drag: o }] });
  }
  return t;
}
function Xc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function kN({ spaceView: e, spaceMode: t, readOnly: n, frameMode: r, showGrid: i }) {
  const o = !r && !!i;
  return {
    space: {
      visible: !!e,
      mode: t,
      frameDisabled: !!n || !e || t !== "6dof"
    },
    buttons: {
      "reset-view": { disabled: !!n || !!r },
      "toggle-grid": {
        icon: o ? Ye.eye : Ye.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!n || !!r
      }
    }
  };
}
function MN({ hasShot: e, erp: t = !1, hidden: n = !1, studio: r = !1 }) {
  const i = !e || t;
  let o = null;
  return r && i && (n ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function PN(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const ko = "erp", NN = ["1:1", "4:3", "3:2", "16:9"];
function Sy(e, { erp: t = !1, coverage: n = 360 } = {}) {
  return [
    ...NN.map((r) => ({ value: r, label: r, active: e === r })),
    ...t ? [{ value: ko, label: Number(n) === 180 ? "180°" : "360°", active: e === ko }] : []
  ];
}
function AN({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
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
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || i === "stroke" || i === "camera" || i === "world" || o.length > 1,
      label: "Copy State"
    },
    params: a,
    rows: xN(a),
    notes: s,
    paramsDisabled: !r,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function CN({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: i,
  allLocked: o,
  anyLocked: a,
  selectedLocked: s,
  activeAspect: l,
  cutoutAspectOpen: d,
  isExternalSticker: u,
  isStickerHidden: f,
  canRestoreSelectedToInitial: h,
  iconSet: g,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: b = !1,
  cameraDeletable: _ = !1,
  erpChoice: v = !1,
  coverage: P = 360
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let W = [];
  if (n.length > 1)
    W = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: g.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: g.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!a }
    ];
  else if (r === "stroke")
    W = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: g.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: g.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!s }
    ];
  else if (r === "image") {
    if (W = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: g.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: g.send_back, disabled: !!s }
    ], u(t) || (W.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: g.duplicate }), W.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: g.replace_image })), u(t)) {
      const D = h(), O = f(t);
      W.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: D ? "Back to initial position" : "Already at initial position",
        icon: g.back_initial,
        disabled: !D
      }), W.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: O ? "Show" : "Hide",
        tip: O ? "Show input image" : "Hide input image",
        icon: O ? g.eye : g.eye_dashed
      });
    }
    W.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? g.lock_open : g.lock_closed }), u(t) || W.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!s });
  } else
    W = [
      {
        key: "aspect",
        kind: "aspect",
        icon: g.aspect,
        open: !!d,
        choices: Sy(l, { erp: v, coverage: P })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: g.rotate_90, disabled: l === ko }
    ], b ? _ && W.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete }) : W.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!s }
    );
  return wy(i.corners, W);
}
const im = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function IN({ corners: e, gizmoBox: t = null, gizmoMode: n, camera: r = !1, deletable: i = !1 }) {
  const o = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], a = r ? im.filter((s) => s.cameraTip) : im;
  return wy([...e, ...o], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: a.map(({ key: s, label: l, tip: d, cameraTip: u }) => ({ key: s, label: l, tip: r ? u : d, pressed: s === n ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...i ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: Ye.delete }] : []
  ]);
}
function EN(e, t, n, r, i) {
  const { minX: s, maxX: l, minY: d, maxY: u } = e || {};
  if (![s, l, d, u].every(Number.isFinite)) return null;
  const f = Math.min(Math.max((s + l) * 0.5 - t * 0.5, 14), Math.max(14, r - t - 14)), h = Math.max(14, i - n - 14), g = u + 18, b = d - 18 - n;
  let _;
  return g <= h ? _ = Math.max(g, 14) : b >= 14 ? _ = Math.min(b, h) : _ = Math.min(Math.max(g, 14), h), { left: f, top: _ };
}
function wy(e, t) {
  const n = e.map((d) => ({ x: Number(d == null ? void 0 : d.x), y: Number(d == null ? void 0 : d.y) })).filter((d) => Number.isFinite(d.x) && Number.isFinite(d.y));
  if (!n.length) return { visible: !1, left: 0, top: 0, items: [] };
  const r = n.map((d) => d.x), i = n.map((d) => d.y), o = Math.min(...r), a = Math.max(...r), s = Math.min(...i), l = Math.max(...i);
  return {
    visible: !0,
    left: (o + a) * 0.5,
    top: l + 18,
    items: t,
    anchor: { minX: o, maxX: a, minY: s, maxY: l }
  };
}
const xy = "painting";
function ON(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const FN = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function TN(e, { span: t, selection: n, selectedId: r, expanded: i, openRows: o, audio: a = null, fpsLocked: s = !1, camera: l = !1, cameraHideable: d = !1, stickers: u = !0, scene: f = !1, sceneLocked: h = !1 }) {
  const g = (W, D, O, S, $, z, { keyable: te = !0, hideable: ie = !0 } = {}) => {
    const G = (j) => (n == null ? void 0 : n.owner) === W && n.lane === j ? n.frames.map((K) => K + z) : [];
    return {
      id: W,
      label: O,
      icon: S,
      clip: $,
      selected: W === r,
      hideable: ie,
      visible: D.visible,
      keyable: te,
      open: te && o.has(W),
      keys: zw(D).map((j) => ({ frame: j.frame + z, full: j.full })),
      selectedFrames: G(null),
      lanes: (te ? Lo(D) : []).map((j) => ({
        key: `${W}:${j}`,
        lane: j,
        label: FN[j],
        frames: D[j].keyframes.map((K) => K.frame + z),
        selectedFrames: G(j)
      }))
    };
  }, b = u ? e.stickers : [], _ = b.filter((W) => W.placement === "sky").sort((W, D) => D.z_index - W.z_index), v = b.filter((W) => W.placement === "world"), P = ({ start: W, in: D, duration: O }) => ({ clip: { start: W, end: O === null ? null : W + O }, offset: W - D });
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
      ...l ? [g("camera", e.camera, "Camera", Ye.camera, null, 0, { hideable: d })] : [],
      ...[..._, ...v].map((W) => {
        const { clip: D, offset: O } = P(W.clip);
        return g(W.id, W, xu(W), Ye.image, D, O);
      }),
      ...u && (ON(e.painting) || !e.painting_visible) ? [{
        id: xy,
        label: "Paint",
        icon: Ye.paintbrush_vertical_tool,
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
      ...u && (f || ol(e.scene)) ? [(() => {
        const { clip: W, offset: D } = P(e.scene.clip);
        return g("scene", e.scene, "Scene", Ye.box, W, D, { keyable: !1 });
      })()] : []
    ]
  };
}
function DN(e, t, n, r) {
  const i = Ww(e, t, n);
  if (!i) return null;
  const o = Math.min(...n) + r, a = Math.max(...n) + r;
  return { label: o === a ? `Frame ${o}` : `${o} – ${a}`, ...i };
}
const LN = { class: "pano-floating-right" }, RN = {
  key: 0,
  class: "pano-floating-space"
}, VN = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, $N = ["data-settled"], zN = ["data-ready", "data-settled"], jN = ["aria-label", "data-tip"], HN = {
  key: 1,
  class: "pano-camera-preview-label"
}, GN = {
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
    return (t, n) => ($e(), je(ot, null, [
      Me("div", LN, [
        e.space ? Hr(($e(), je("div", RN, [
          Me("div", VN, [
            ($e(!0), je(ot, null, At(e.space.modes, (r) => ($e(), Yn(tn, {
              key: r.key,
              "extra-class": { active: r.key === e.space.mode },
              icon: r.icon,
              label: r.label,
              tip: r.tip,
              pressed: r.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": r.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          tt(tn, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Ri, e.space.visible]
        ]) : mt("", !0),
        ($e(!0), je(ot, null, At(e.buttons, (r) => ($e(), Yn(tn, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Hr(Me("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Me("div", {
          class: ht(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: It({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = Me("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            Me("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? ($e(), je("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            tt(jt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, jN)) : mt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? ($e(), je("div", HN, ct(e.preview.label || "Preview unavailable"), 1)) : mt("", !0)
        ], 14, zN)
      ], 8, $N), [
        [Ri, e.preview.visible]
      ])
    ], 64));
  }
}, WN = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, KN = ["y2", "transform"], BN = ["transform"], UN = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (i, o) => o * 15), r = dt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => Hr(($e(), je("div", {
      class: ht(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      ($e(), je("svg", WN, [
        o[1] || (o[1] = Me("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        ($e(!0), je(ot, null, At(at(n), (a) => ($e(), je("line", {
          key: a,
          class: ht(["pano-frame-roll-knob-tick", { zero: a === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: a % 45 === 0 ? 7 : 6,
          transform: `rotate(${a} 20 20)`
        }, null, 10, KN))), 128)),
        Me("g", { transform: r.value }, [...o[0] || (o[0] = [
          Me("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, BN),
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
}, YN = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => ($e(), je("div", {
      class: ht(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      tt(ry, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      tt(tn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      tt(UN, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, qN = ["aria-label"], XN = { class: "pano-canvas-confirm-title" }, JN = { class: "pano-canvas-confirm-text" }, ZN = { class: "pano-canvas-confirm-actions" }, QN = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, e2 = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Yt(null), r = /* @__PURE__ */ Yt(null);
    let i = null;
    function o() {
      const f = r.value;
      return f ? Array.from(f.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((h) => h instanceof HTMLElement ? !h.hidden && h.tabIndex >= 0 && h.offsetParent !== null : !1) : [];
    }
    function a(f) {
      const h = r.value;
      if (!h) return;
      const g = h.querySelector(`[data-action='${f}']`);
      g instanceof HTMLButtonElement && g.click();
    }
    function s() {
      var _;
      const f = r.value;
      if (!f) return;
      const h = f.querySelector("[data-action='confirm-accept']");
      if (h instanceof HTMLElement) {
        h.focus();
        return;
      }
      const b = o()[0] || f;
      (_ = b == null ? void 0 : b.focus) == null || _.call(b);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function d(f) {
      var P;
      if (f.defaultPrevented) return;
      if (f.key === "Escape") {
        f.preventDefault(), f.stopPropagation(), a("confirm-cancel");
        return;
      }
      if (f.key !== "Tab") return;
      const h = o(), g = r.value;
      if (!h.length) {
        f.preventDefault(), (P = g == null ? void 0 : g.focus) == null || P.call(g);
        return;
      }
      const b = h[0], _ = h[h.length - 1], v = document.activeElement;
      if (f.shiftKey) {
        (v === b || v === g || !(g != null && g.contains(v))) && (f.preventDefault(), _.focus());
        return;
      }
      (v === _ || !(g != null && g.contains(v))) && (f.preventDefault(), b.focus());
    }
    function u(f) {
      f.target === n.value && a("confirm-cancel");
    }
    return Fi(() => t.model.visible, (f, h) => {
      if (f) {
        i = document.activeElement, Cl(() => {
          s();
        });
        return;
      }
      h && l();
    }, { immediate: !0 }), Ha(() => {
      l();
    }), (f, h) => e.model.visible === !0 ? ($e(), je("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Lt(u, ["self"])
    }, [
      Me("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: d
      }, [
        Me("div", XN, ct(e.model.title), 1),
        Me("div", JN, ct(e.model.text), 1),
        Me("div", ZN, [
          h[0] || (h[0] = Me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Me("button", QN, ct(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, qN)
    ], 512)) : mt("", !0);
  }
}, t2 = ["data-paint-pane"], n2 = ["hidden"], r2 = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], i2 = ["aria-pressed", "disabled"], o2 = ["hidden"], a2 = { class: "pano-paint-color-pop-head" }, s2 = { class: "pano-paint-color-field" }, l2 = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, c2 = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, u2 = { class: "pano-paint-color-field" }, d2 = { class: "pano-paint-alpha-wrap" }, f2 = ["value"], p2 = { "data-paint-alpha-value": "" }, h2 = ["hidden"], m2 = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, g2 = ["data-paint-history-index", "aria-label", "disabled"], y2 = ["data-paint-footer"], b2 = ["data-paint-group"], v2 = ["hidden"], _2 = ["value", "disabled"], S2 = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, w2 = ["hidden"], x2 = {
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
    return (r, i) => ($e(), je("div", {
      class: ht(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      ($e(!0), je(ot, null, At(e.panes, (o) => {
        var a;
        return $e(), je("div", {
          key: o.key,
          class: ht(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? ($e(), je("div", {
            key: 0,
            class: ht(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            ($e(!0), je(ot, null, At(e.paintSwatches, (s) => ($e(), je("button", {
              key: s.id,
              class: ht(["pano-paint-color-dot", { active: e.state.activeSwatchId === s.id }]),
              type: "button",
              "data-paint-color-swatch": s.id,
              "aria-label": s.label,
              style: It(t(s)),
              "aria-pressed": e.state.activeSwatchId === s.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, r2))), 128)),
            Me("button", {
              class: ht(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: It({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, i2),
            Me("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: It({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              Me("div", a2, [
                Me("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: It({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Me("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Me("div", s2, [
                Me("div", l2, [
                  Me("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: It({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Me("div", c2, [
                  Me("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: It({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Me("label", u2, [
                i[1] || (i[1] = Me("span", null, "Opacity", -1)),
                Me("div", d2, [
                  Me("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, f2),
                  Me("span", p2, ct(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Me("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Me("div", m2, [
                  ($e(!0), je(ot, null, At(e.state.historyEntries || [], (s) => ($e(), je("button", {
                    key: s.index,
                    class: ht(["pano-paint-color-history-dot", { empty: !s.color }]),
                    type: "button",
                    "data-paint-history-index": s.index,
                    "aria-label": `Recent color ${s.index + 1}`,
                    disabled: !s.color,
                    style: It(n(s.color))
                  }, null, 14, g2))), 128))
                ])
              ], 8, h2)
            ], 12, o2)
          ], 10, n2)) : mt("", !0),
          Me("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Me("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              ($e(!0), je(ot, null, At(o.tools, (s) => {
                var l;
                return $e(), Yn(tn, {
                  key: `${o.key}-${s.key}`,
                  icon: s.icon,
                  label: s.label,
                  tip: s.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === s.key },
                  attrs: { [s.attr]: s.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, b2),
            Me("div", {
              class: ht(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
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
                style: It({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, _2),
              Me("span", S2, ct(e.state.sizeText || "10"), 1)
            ], 10, v2),
            Me("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((a = e.state.clearVisible) == null ? void 0 : a[o.key]) ?? !o.clearHidden)
            }, [
              tt(tn, {
                icon: at(Ye).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, w2)
          ], 8, y2)
        ], 10, t2);
      }), 128))
    ], 2));
  }
}, k2 = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Yt(null), r = /* @__PURE__ */ Yt(null), i = /* @__PURE__ */ Yt(null);
    function o() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (a, s) => ($e(), je(ot, null, [
      Me("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      Me("div", {
        ref_key: "sizePreviewRef",
        ref: r,
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
}, M2 = ["aria-label"], P2 = ["data-tip", "aria-pressed"], N2 = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = dt(() => Math.max(0, t.buttons.findIndex((r) => r.pressed === "true")));
    return (r, i) => ($e(), je("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: It({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": n.value })
    }, [
      ($e(!0), je(ot, null, At(e.buttons, (o) => ($e(), je("button", Rr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), ct(o.label), 17, P2))), 128))
    ], 12, M2));
  }
}, A2 = {
  key: 0,
  class: "pano-cutout-menu"
}, C2 = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, I2 = ["data-aspect"], E2 = ["data-action", "aria-label", "data-tip", "disabled"], O2 = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => ($e(), je("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: It({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      ($e(!0), je(ot, null, At(e.model.items || [], (r) => ($e(), je(ot, {
        key: r.key
      }, [
        r.kind === "aspect" ? ($e(), je("div", A2, [
          Me("button", C2, [
            tt(jt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          Me("div", {
            class: ht(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            ($e(!0), je(ot, null, At(r.choices || [], (i) => ($e(), je("button", {
              key: i.value,
              class: ht(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, ct(i.label), 11, I2))), 128))
          ], 2)
        ])) : r.kind === "segments" ? ($e(), Yn(N2, {
          key: 1,
          buttons: r.buttons || [],
          attr: r.attr,
          label: r.label
        }, null, 8, ["buttons", "attr", "label"])) : ($e(), je("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          tt(jt, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, E2))
      ], 64))), 128))
    ], 4));
  }
}, F2 = {
  key: 0,
  class: "pano-easing"
}, T2 = { class: "pano-section-title" }, D2 = { class: "pano-easing-range" }, L2 = { class: "pano-easing-modes" }, R2 = ["aria-pressed", "onClick"], V2 = ["viewBox"], $2 = ["x", "y"], z2 = ["x1", "y1", "x2", "y2"], j2 = ["d"], H2 = ["x1", "y1", "x2", "y2"], G2 = ["x1", "y1", "x2", "y2"], W2 = ["cx", "cy"], K2 = ["cx", "cy"], B2 = { class: "pano-easing-note" }, Fr = 132, xi = 14, U2 = {
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
    ], o = /* @__PURE__ */ Yt(null), a = dt(() => {
      var b;
      return Array.isArray((b = n.model) == null ? void 0 : b.easing) ? n.model.easing : null;
    }), s = (b) => xi + b * Fr, l = (b) => xi + (1 - b) * Fr, d = dt(() => {
      var W;
      if (((W = n.model) == null ? void 0 : W.easing) === "hold") return `M${s(0)} ${l(0)} H${s(1)} V${l(1)}`;
      const [b, _, v, P] = a.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${s(0)} ${l(0)} C${s(b)} ${l(_)} ${s(v)} ${l(P)} ${s(1)} ${l(1)}`;
    }), u = dt(() => a.value ? a.value.map((b) => b.toFixed(2)).join(", ") : "");
    function f(b) {
      var _;
      return JSON.stringify(b.easing) === JSON.stringify((_ = n.model) == null ? void 0 : _.easing);
    }
    function h(b, _) {
      r("timeline", { type: "easing", easing: b, commit: _ });
    }
    function g(b, _) {
      var O;
      if (b.button !== 0 || !a.value) return;
      const v = b.currentTarget;
      (O = v.setPointerCapture) == null || O.call(v, b.pointerId);
      let P = null;
      const W = (S) => {
        const $ = o.value.getBoundingClientRect(), z = $.width / (Fr + xi * 2), te = ((S.clientX - $.left) / z - xi) / Fr, ie = 1 - ((S.clientY - $.top) / z - xi) / Fr;
        P = [...P || a.value], P[_] = Math.round(Math.min(1, Math.max(0, te)) * 100) / 100, P[_ + 1] = Math.round(Math.min(1, Math.max(0, ie)) * 100) / 100, h(P, !1);
      }, D = () => {
        v.removeEventListener("pointermove", W), v.removeEventListener("pointerup", D), v.removeEventListener("pointercancel", D), P && h(P, !0);
      };
      v.addEventListener("pointermove", W), v.addEventListener("pointerup", D), v.addEventListener("pointercancel", D);
    }
    return (b, _) => e.model ? ($e(), je("div", F2, [
      Me("div", T2, [
        _[2] || (_[2] = Me("span", null, "Easing", -1)),
        Me("span", D2, ct(e.model.label), 1)
      ]),
      Me("div", L2, [
        ($e(), je(ot, null, At(i, (v) => Me("button", {
          key: v.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": f(v) ? "true" : "false",
          onClick: (P) => h(v.easing, !0)
        }, ct(v.label), 9, R2)), 64))
      ]),
      a.value || e.model.easing === "hold" ? ($e(), je("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Fr + xi * 2} ${Fr + xi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Me("rect", {
          class: "pano-easing-square",
          x: s(0),
          y: l(1),
          width: Fr,
          height: Fr
        }, null, 8, $2),
        Me("line", {
          class: "pano-easing-diagonal",
          x1: s(0),
          y1: l(0),
          x2: s(1),
          y2: l(1)
        }, null, 8, z2),
        Me("path", {
          class: "pano-easing-curve",
          d: d.value
        }, null, 8, j2),
        a.value ? ($e(), je(ot, { key: 0 }, [
          Me("line", {
            class: "pano-easing-arm",
            x1: s(0),
            y1: l(0),
            x2: s(a.value[0]),
            y2: l(a.value[1])
          }, null, 8, H2),
          Me("line", {
            class: "pano-easing-arm",
            x1: s(1),
            y1: l(1),
            x2: s(a.value[2]),
            y2: l(a.value[3])
          }, null, 8, G2),
          Me("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[0]),
            cy: l(a.value[1]),
            r: "6",
            onPointerdown: _[0] || (_[0] = (v) => g(v, 0))
          }, null, 40, W2),
          Me("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[2]),
            cy: l(a.value[3]),
            r: "6",
            onPointerdown: _[1] || (_[1] = (v) => g(v, 2))
          }, null, 40, K2)
        ], 64)) : mt("", !0)
      ], 8, V2)) : mt("", !0),
      Me("div", B2, [
        e.model.mixed ? ($e(), je(ot, { key: 0 }, [
          oa("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? ($e(), je(ot, { key: 1 }, [
          oa("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? ($e(), je(ot, { key: 2 }, [
          oa("Holds the value, then jumps to the next keyframe.")
        ], 64)) : a.value ? ($e(), je(ot, { key: 3 }, [
          oa("cubic-bezier(" + ct(u.value) + ")", 1)
        ], 64)) : mt("", !0)
      ])
    ])) : mt("", !0);
  }
}, Y2 = {
  class: "pano-side",
  "data-side": ""
}, q2 = { class: "pano-side-head" }, X2 = { class: "pano-side-title" }, J2 = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, Z2 = {
  key: 0,
  class: "pano-side-scroll"
}, Q2 = { class: "pano-inspector" }, eA = { class: "pano-ui-row pano-coverage-row" }, tA = ["data-selected"], nA = ["aria-pressed", "disabled"], rA = ["aria-pressed", "disabled"], iA = {
  key: 0,
  class: "pano-section-title"
}, oA = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, aA = {
  class: "pano-picker",
  "data-picker": "selection"
}, sA = ["disabled"], lA = { class: "pano-picker-label" }, cA = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, uA = ["hidden"], dA = ["data-selection-id"], fA = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, pA = {
  key: 2,
  class: "pano-state-actions"
}, hA = ["disabled"], mA = ["data-key"], gA = { class: "pano-field-group-values" }, yA = ["title", "onPointerdown"], bA = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], vA = ["data-key"], _A = ["min", "max", "step", "value", "disabled", "data-param-key"], SA = ["min", "max", "step", "value", "disabled", "data-param-key"], wA = ["open"], xA = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, kA = { class: "pano-ui-settings-body" }, MA = { class: "pano-ui-row" }, PA = ["data-selected"], NA = ["aria-pressed"], AA = ["aria-pressed"], CA = { class: "pano-ui-row" }, IA = ["data-selected"], EA = ["aria-pressed"], OA = ["aria-pressed"], FA = {
  key: 1,
  class: "pano-side-footer"
}, TA = ["data-action"], DA = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = dt(() => {
      const d = n.model;
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
      const f = s[u.key];
      if (d.button !== 0 || !f || a(u, n.model)) return;
      d.preventDefault();
      const h = d.currentTarget, g = d.clientX, b = Number(f.value) || 0;
      let _ = !1;
      h.setPointerCapture(d.pointerId);
      const v = (W) => {
        if (!_ && Math.abs(W.clientX - g) < 3) return;
        _ = !0;
        const D = b + (W.clientX - g) * u.drag * (W.shiftKey ? 0.1 : 1);
        f.value = String(Number(D.toFixed(3))), f.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, P = () => {
        h.removeEventListener("pointermove", v), h.removeEventListener("pointerup", P), h.removeEventListener("pointercancel", P), h.removeEventListener("lostpointercapture", P), _ ? f.dispatchEvent(new Event("change", { bubbles: !0 })) : f.focus();
      };
      h.addEventListener("pointermove", v), h.addEventListener("pointerup", P), h.addEventListener("pointercancel", P), h.addEventListener("lostpointercapture", P);
    }
    return (d, u) => {
      var f, h, g, b, _;
      return $e(), je("div", Y2, [
        Me("div", q2, [
          Me("div", X2, [
            Me("span", J2, [
              tt(jt, {
                icon: at(Ye).globe
              }, null, 8, ["icon"])
            ]),
            Me("span", null, ct(e.nodeTitle), 1)
          ]),
          u[1] || (u[1] = Me("div", { class: "pano-side-actions" }, null, -1))
        ]),
        u[10] || (u[10] = Me("div", { class: "pano-divider" }, null, -1)),
        i.value ? ($e(), je("div", Z2, [
          Me("div", Q2, [
            u[9] || (u[9] = Me("div", { class: "pano-section-title" }, [
              Me("span", null, "Scene")
            ], -1)),
            Me("div", eA, [
              u[2] || (u[2] = Me("label", null, "Coverage", -1)),
              Me("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((f = e.model.coverage) == null ? void 0 : f.value) === 180 ? "1" : "0"
              }, [
                Me("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((h = e.model.coverage) == null ? void 0 : h.value) === 360 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "360", 8, nA),
                Me("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((b = e.model.coverage) == null ? void 0 : b.value) === 180 ? "true" : "false",
                  disabled: ((_ = e.model.coverage) == null ? void 0 : _.disabled) === !0
                }, "180", 8, rA)
              ], 8, tA)
            ]),
            e.model.transformTitle !== !1 ? ($e(), je("div", iA, [...u[3] || (u[3] = [
              Me("span", null, "Transform", -1)
            ])])) : mt("", !0),
            e.model.selectionPicker ? ($e(), je("div", oA, [
              Me("label", null, ct(e.model.selectionPicker.label), 1),
              Me("div", aA, [
                Me("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Me("span", lA, [
                    e.model.selectionPicker.currentIcon ? ($e(), je("span", cA, [
                      tt(jt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : mt("", !0),
                    Me("span", null, ct(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  u[4] || (u[4] = Me("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, sA),
                Me("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  ($e(!0), je(ot, null, At(e.model.selectionPicker.items || [], (v) => ($e(), je("button", {
                    key: v.id,
                    type: "button",
                    class: ht(["pano-picker-item", { active: v.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": v.id
                  }, [
                    v.icon ? ($e(), je("span", fA, [
                      tt(jt, {
                        icon: v.icon
                      }, null, 8, ["icon"])
                    ])) : mt("", !0),
                    Me("span", null, ct(v.label), 1)
                  ], 10, dA))), 128))
                ], 8, uA)
              ])
            ])) : mt("", !0),
            e.model.copyStateButton ? ($e(), je("div", pA, [
              Me("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                tt(jt, {
                  icon: at(Ye).copy
                }, null, 8, ["icon"]),
                Me("span", null, ct(e.model.copyStateButton.label), 1)
              ], 8, hA)
            ])) : mt("", !0),
            Me("div", {
              class: ht(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? ($e(!0), je(ot, { key: 0 }, At(e.model.notes, (v) => ($e(), je("div", {
                key: v,
                class: "pano-param-note"
              }, ct(v), 1))), 128)) : ($e(!0), je(ot, { key: 1 }, At(e.model.rows || [], (v) => ($e(), je(ot, {
                key: v.key
              }, [
                v.grouped ? ($e(), je("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": v.key
                }, [
                  Me("label", null, ct(v.label), 1),
                  Me("div", gA, [
                    ($e(!0), je(ot, null, At(v.fields, (P) => ($e(), je("div", {
                      key: P.key,
                      class: "pano-axis-field"
                    }, [
                      Me("span", {
                        class: ht(["pano-axis", { disabled: a(P, e.model) }]),
                        title: P.label,
                        onPointerdown: (W) => l(W, P)
                      }, ct(P.short), 43, yA),
                      Me("input", {
                        ref_for: !0,
                        ref: (W) => {
                          s[P.key] = W;
                        },
                        type: "number",
                        min: P.min,
                        max: P.max,
                        step: P.step,
                        value: P.displayValue,
                        disabled: a(P, e.model),
                        "aria-label": `${v.label} ${P.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": P.key
                      }, null, 8, bA)
                    ]))), 128))
                  ])
                ], 8, mA)) : ($e(), je("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": v.key
                }, [
                  Me("label", null, ct(v.label), 1),
                  Me("input", {
                    type: "range",
                    min: v.fields[0].min,
                    max: v.fields[0].max,
                    step: v.fields[0].step,
                    value: v.fields[0].value,
                    disabled: a(v.fields[0], e.model),
                    style: It(o(v.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": v.fields[0].key
                  }, null, 12, _A),
                  Me("input", {
                    type: "number",
                    min: v.fields[0].min,
                    max: v.fields[0].max,
                    step: v.fields[0].step,
                    value: v.fields[0].displayValue,
                    disabled: a(v.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": v.fields[0].key
                  }, null, 8, SA)
                ], 8, vA))
              ], 64))), 128))
            ], 2),
            tt(U2, {
              model: e.easing,
              onTimeline: u[0] || (u[0] = (v) => r("timeline", v))
            }, null, 8, ["model"]),
            e.model.uiSettings ? ($e(), je("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Me("summary", null, [
                u[5] || (u[5] = Me("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Me("span", xA, [
                  tt(jt, {
                    icon: at(Ye).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Me("div", kA, [
                Me("div", MA, [
                  u[6] || (u[6] = Me("label", null, "Drag X", -1)),
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
                    }, "Normal", 8, NA),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, AA)
                  ], 8, PA)
                ]),
                Me("div", CA, [
                  u[7] || (u[7] = Me("label", null, "Drag Y", -1)),
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
                    }, "Normal", 8, EA),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, OA)
                  ], 8, IA)
                ]),
                u[8] || (u[8] = Me("div", { class: "pano-ui-row" }, [
                  Me("span"),
                  Me("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, wA)) : mt("", !0)
          ])
        ])) : mt("", !0),
        (e.model.footerButtons || []).length ? ($e(), je("div", FA, [
          ($e(!0), je(ot, null, At(e.model.footerButtons, (v) => ($e(), je("button", {
            key: v.action,
            class: ht(["pano-btn", { "pano-btn-primary": v.primary === !0 }]),
            type: "button",
            "data-action": v.action
          }, ct(v.label), 11, TA))), 128))
        ])) : mt("", !0)
      ]);
    };
  }
}, LA = { class: "pano-timeline-bar" }, RA = ["aria-label", "data-tip"], VA = ["aria-label", "data-tip"], $A = { class: "pano-timeline-time" }, zA = ["data-tip"], jA = { key: 0 }, HA = ["min", "max", "value"], GA = ["data-tip"], WA = { key: 0 }, KA = ["max", "value"], BA = ["aria-expanded"], UA = ["inert"], YA = { class: "pano-timeline-name" }, qA = ["aria-pressed", "aria-label", "data-tip", "onClick"], XA = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, JA = ["disabled", "aria-expanded", "aria-label", "onClick"], ZA = ["title", "aria-current", "onClick"], QA = ["data-keyed", "aria-label", "onClick"], eC = ["onPointerdown"], tC = ["onPointerdown"], nC = ["onPointerdown"], rC = ["onPointerdown"], iC = ["aria-label", "data-tip", "onPointerdown"], oC = { key: 0 }, aC = ["onPointerdown"], sC = ["aria-label", "data-tip", "onPointerdown"], lC = { key: 0 }, cC = 10, uC = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ js(0), playing: /* @__PURE__ */ js(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = /* @__PURE__ */ Yt(null), o = /* @__PURE__ */ Yt(null), a = /* @__PURE__ */ Yt(1), s = /* @__PURE__ */ Yt(0), l = /* @__PURE__ */ Yt(!1);
    let d = null, u = null, f = null;
    El(() => {
      d = new ResizeObserver(([ge]) => {
        a.value = Math.max(1, ge.contentRect.width);
      }), i.value && d.observe(i.value), u = new ResizeObserver(([ge]) => {
        s.value = ge.contentRect.height;
      }), o.value && u.observe(o.value);
    }), Ha(() => {
      d == null || d.disconnect(), u == null || u.disconnect(), f == null || f();
    });
    const h = dt(() => Math.max(1, Number(n.model.span || 1))), g = dt(() => n.playhead.frame.value), b = dt(() => n.playhead.playing.value), _ = dt(() => jw(g.value, Number(n.model.fps || 1))), v = dt(() => a.value / h.value), P = (ge) => `${ge / h.value * 100}%`, W = dt(() => tx(h.value, v.value));
    function D(ge) {
      const X = i.value.getBoundingClientRect(), A = Math.floor((ge - X.left) / Math.max(1, X.width) * h.value);
      return Math.min(h.value - 1, Math.max(0, A));
    }
    function O(ge, X, A) {
      const T = Math.ceil(cC / Math.max(1e-6, v.value)), de = new Map(X.map((he) => [he.frame, he.full]));
      return nx(X.map((he) => he.frame), T).map((he, xe) => ({
        ...he,
        key: `${ge}:${xe}`,
        partial: he.frames.some((He) => !de.get(He)),
        selected: he.frames.some((He) => A.includes(He))
      }));
    }
    const S = dt(() => {
      const ge = /* @__PURE__ */ new Map();
      for (const X of n.model.rows || []) {
        ge.set(X.id, O(X.id, X.keys, X.selectedFrames));
        for (const A of X.lanes) ge.set(A.key, O(A.key, A.frames.map((T) => ({ frame: T, full: !0 })), A.selectedFrames));
      }
      return ge;
    });
    function $(ge) {
      const X = ge.end === null ? h.value : ge.end;
      return { left: P(ge.start), width: P(Math.max(0, X - ge.start)) };
    }
    function z(ge, X) {
      const A = ge.clientX, T = Math.max(1e-6, v.value);
      let de = 0;
      X("start", 0, ge);
      const he = (He) => {
        if (He.pointerId !== ge.pointerId) return;
        const se = Math.round((He.clientX - A) / T);
        se !== de && (de = se, X("move", de, He));
      }, xe = (He) => {
        He.pointerId === ge.pointerId && (f(), X("end", de, He));
      };
      f == null || f(), f = () => {
        window.removeEventListener("pointermove", he), window.removeEventListener("pointerup", xe), window.removeEventListener("pointercancel", xe), f = null;
      }, window.addEventListener("pointermove", he), window.addEventListener("pointerup", xe), window.addEventListener("pointercancel", xe);
    }
    function te(ge) {
      ge.button === 0 && z(ge, (X, A, T) => r("action", { type: "seek", frame: D(T.clientX), phase: X }));
    }
    function ie(ge, X, A) {
      ge.button === 0 && (r("action", { type: "select-row", id: X.id }), z(ge, (T, de) => r("action", { type: "clip", id: X.id, mode: A, delta: de, phase: T })));
    }
    function G(ge, X, A, T, de) {
      if (ge.button === 0) {
        if (ge.shiftKey) {
          r("action", { type: "select-keys", owner: X.id, lane: A, frames: T.frames, additive: !0 });
          return;
        }
        T.frames.every((he) => de.includes(he)) || r("action", { type: "select-keys", owner: X.id, lane: A, frames: T.frames, additive: !1 }), z(ge, (he, xe) => r("action", { type: "move-keys", delta: xe, phase: he }));
      }
    }
    const j = dt(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function K(ge, X, A) {
      r("action", X), await Cl(), ge.target.value = A();
    }
    function ce(ge) {
      K(ge, { type: "fps", fps: Number(ge.target.value) }, () => j.value);
    }
    function Se(ge) {
      const X = ge.target.value.trim();
      K(ge, { type: "length", length: X ? Number(X) : null }, () => n.model.length ?? "");
    }
    function be(ge, X, A) {
      ge.button !== 0 || ge.target !== ge.currentTarget || r("action", { type: "select-keys", owner: X.id, lane: A, frames: [], additive: !1 });
    }
    return (ge, X) => Hr(($e(), je("section", {
      class: ht(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Me("div", LA, [
        Me("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": b.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": b.value ? "Pause (Space)" : "Play (Space)",
          onClick: X[0] || (X[0] = (A) => r("action", { type: "play" }))
        }, [
          tt(jt, {
            icon: b.value ? at(Ye).pause : at(Ye).play
          }, null, 8, ["icon"])
        ], 8, RA),
        e.model.hasAudio ? ($e(), je("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: X[1] || (X[1] = (A) => r("action", { type: "mute" }))
        }, [
          tt(jt, {
            icon: e.model.muted ? at(Ye).volume_muted : at(Ye).volume2
          }, null, 8, ["icon"])
        ], 8, VA)) : mt("", !0),
        Me("span", $A, ct(_.value), 1),
        Me("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? ($e(), je("span", jA, ct(j.value), 1)) : ($e(), je("input", {
            key: 1,
            type: "number",
            min: at(Vg),
            max: at(Pd),
            step: "any",
            value: j.value,
            "aria-label": "Timeline fps",
            onChange: ce
          }, null, 40, HA)),
          X[6] || (X[6] = Me("span", null, "fps", -1))
        ], 8, zA),
        Me("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          X[7] || (X[7] = Me("span", null, "Length", -1)),
          e.model.lengthLocked ? ($e(), je("span", WA, ct(e.model.length), 1)) : ($e(), je("input", {
            key: 1,
            type: "number",
            min: "1",
            max: at(Nd),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: Se
          }, null, 40, KA))
        ], 8, GA),
        Me("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: X[2] || (X[2] = (A) => r("action", { type: "toggle-expanded" }))
        }, [
          X[8] || (X[8] = Me("span", null, "Timeline", -1)),
          tt(jt, {
            icon: at(Ye).chevron
          }, null, 8, ["icon"])
        ], 8, BA)
      ]),
      Me("div", {
        class: ht(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: It({ "--pano-timeline-rows": `${s.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: X[3] || (X[3] = Lt((A) => l.value = !0, ["self"])),
        onTransitionend: X[4] || (X[4] = Lt((A) => l.value = !1, ["self"])),
        onTransitioncancel: X[5] || (X[5] = Lt((A) => l.value = !1, ["self"]))
      }, [
        Me("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          X[9] || (X[9] = Me("div", { class: "pano-timeline-corner" }, null, -1)),
          Me("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: te
          }, [
            ($e(!0), je(ot, null, At(W.value, (A) => ($e(), je("span", {
              key: A,
              class: "pano-timeline-tick",
              style: It({ left: P(A) })
            }, ct(A), 5))), 128)),
            Me("span", {
              class: "pano-timeline-playhead",
              style: It({ left: P(g.value + 0.5) })
            }, null, 4)
          ], 544),
          ($e(!0), je(ot, null, At(e.model.rows || [], (A) => ($e(), je(ot, {
            key: A.id
          }, [
            Me("div", {
              class: ht(["pano-timeline-head", { selected: A.selected, "is-hidden": !A.visible }])
            }, [
              Me("div", YA, [
                A.hideable ? ($e(), je("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": A.visible ? "true" : "false",
                  "aria-label": `${A.label} visible`,
                  "data-tip": A.visible ? "Hide" : "Show",
                  onClick: Lt((T) => r("action", { type: "toggle-visible", id: A.id }), ["stop"])
                }, [
                  tt(jt, {
                    icon: A.visible ? at(Ye).eye : at(Ye).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, qA)) : ($e(), je("span", XA)),
                Me("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !A.keyable,
                  "aria-expanded": A.open ? "true" : "false",
                  "aria-label": A.open ? `Hide ${A.label} parameters` : `Show ${A.label} parameters`,
                  onClick: Lt((T) => r("action", { type: "toggle-row", id: A.id }), ["stop"])
                }, [
                  tt(jt, {
                    icon: at(Ye).chevron
                  }, null, 8, ["icon"])
                ], 8, JA),
                Me("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: A.label,
                  "aria-current": A.selected ? "true" : void 0,
                  onClick: (T) => r("action", { type: "select-row", id: A.id })
                }, [
                  tt(jt, {
                    icon: A.icon
                  }, null, 8, ["icon"]),
                  Me("span", null, ct(A.label), 1)
                ], 8, ZA),
                A.keyable ? ($e(), je("button", {
                  key: 2,
                  class: ht(["pano-timeline-key", { keyed: at(zc)(A.keys, g.value) }]),
                  type: "button",
                  "data-keyed": at(zc)(A.keys, g.value) ? "true" : "false",
                  "aria-label": at(zc)(A.keys, g.value) ? `Every ${A.label} parameter has a keyframe here; update them` : `Add keyframes for every ${A.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Lt((T) => r("action", { type: "key-row", owner: A.id }), ["stop"])
                }, [
                  tt(jt, {
                    icon: at(Ye).keyframe
                  }, null, 8, ["icon"])
                ], 10, QA)) : mt("", !0)
              ]),
              A.open ? ($e(!0), je(ot, { key: 0 }, At(A.lanes, (T) => ($e(), je("div", {
                key: T.key,
                class: "pano-timeline-lane-head"
              }, ct(T.label), 1))), 128)) : mt("", !0)
            ], 2),
            Me("div", {
              class: ht(["pano-timeline-track", { selected: A.selected }])
            }, [
              Me("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (T) => be(T, A, null)
              }, [
                A.clip ? ($e(), je("div", {
                  key: 0,
                  class: ht(["pano-timeline-clip", { open: A.clip.end === null }]),
                  style: It($(A.clip)),
                  onPointerdown: Lt((T) => ie(T, A, "move"), ["stop"])
                }, [
                  Me("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Lt((T) => ie(T, A, "start"), ["stop"])
                  }, null, 40, nC),
                  Me("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Lt((T) => ie(T, A, "end"), ["stop"])
                  }, null, 40, rC)
                ], 46, tC)) : mt("", !0),
                ($e(!0), je(ot, null, At(S.value.get(A.id), (T) => ($e(), je("button", {
                  key: T.key,
                  type: "button",
                  class: ht(["pano-timeline-pin", { selected: T.selected, cluster: T.frames.length > 1, partial: T.partial }]),
                  style: It({ left: P(T.frame + 0.5) }),
                  "aria-label": `${A.label}: ${T.frames.length > 1 ? `${T.frames.length} keyframes` : `keyframe at frame ${T.frames[0]}`}`,
                  "data-tip": T.frames.length > 1 ? `${T.frames.length} keyframes` : `Frame ${T.frames[0]}`,
                  onPointerdown: Lt((de) => G(de, A, null, T, A.selectedFrames), ["stop"])
                }, [
                  T.frames.length > 1 ? ($e(), je("span", oC, ct(T.frames.length), 1)) : mt("", !0)
                ], 46, iC))), 128))
              ], 40, eC),
              A.open ? ($e(!0), je(ot, { key: 0 }, At(A.lanes, (T) => ($e(), je("div", {
                key: T.key,
                class: "pano-timeline-lane",
                onPointerdown: (de) => be(de, A, T.lane)
              }, [
                ($e(!0), je(ot, null, At(S.value.get(T.key), (de) => ($e(), je("button", {
                  key: de.key,
                  type: "button",
                  class: ht(["pano-timeline-pin", { selected: de.selected, cluster: de.frames.length > 1 }]),
                  style: It({ left: P(de.frame + 0.5) }),
                  "aria-label": `${T.label}: ${de.frames.length > 1 ? `${de.frames.length} keyframes` : `keyframe at frame ${de.frames[0]}`}`,
                  "data-tip": de.frames.length > 1 ? `${de.frames.length} keyframes` : `Frame ${de.frames[0]}`,
                  onPointerdown: Lt((he) => G(he, A, T.lane, de, T.selectedFrames), ["stop"])
                }, [
                  de.frames.length > 1 ? ($e(), je("span", lC, ct(de.frames.length), 1)) : mt("", !0)
                ], 46, sC))), 128))
              ], 40, aC))), 128)) : mt("", !0),
              Me("span", {
                class: "pano-timeline-playhead",
                style: It({ left: P(g.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, UA)
    ], 2)), [
      [Ri, e.model.visible]
    ]);
  }
}, dC = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => ($e(), je("div", {
      class: ht(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: It({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, ct(e.model.text || ""), 7));
  }
}, fC = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, pC = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => ($e(), je("div", fC, [
      ($e(!0), je(ot, null, At(e.buttons, (r) => Hr(($e(), Yn(tn, {
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
        [Ri, r.visible !== !1]
      ])), 128))
    ]));
  }
}, hC = ["data-video-ready"], mC = { class: "pano-video-transport-shell" }, gC = { class: "pano-video-controls-left" }, yC = { class: "pano-video-filmstrip" }, bC = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, vC = ["src", "onLoad"], _C = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, SC = ["max", "value", "disabled"], wC = { class: "pano-video-controls-right" }, xC = ["data-has-audio"], kC = { class: "pano-video-volume-pop" }, MC = ["value", "disabled"], PC = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = dt(() => {
      var S;
      return ((S = t.state) == null ? void 0 : S.playing) === !0 ? "Pause" : "Play";
    }), r = dt(() => {
      var S;
      return ((S = t.state) == null ? void 0 : S.playing) === !0 ? "Pause video" : "Play video";
    }), i = dt(() => {
      var S;
      return ((S = t.state) == null ? void 0 : S.playing) === !0 ? Ye.pause : Ye.play;
    }), o = dt(() => {
      var S;
      return ((S = t.state) == null ? void 0 : S.loop) === !1 ? "Enable loop" : "Disable loop";
    }), a = dt(() => {
      var S;
      return ((S = t.state) == null ? void 0 : S.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), s = dt(() => {
      var S;
      return ((S = t.state) == null ? void 0 : S.loop) === !1 ? Ye.loop_off : Ye.loop;
    }), l = dt(() => {
      var S, $;
      return ((S = t.state) == null ? void 0 : S.muted) === !0 || Number((($ = t.state) == null ? void 0 : $.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), d = dt(() => {
      var S, $, z;
      return ((S = t.state) == null ? void 0 : S.hasAudio) !== !0 ? Ye.volume : (($ = t.state) == null ? void 0 : $.muted) === !0 || Number(((z = t.state) == null ? void 0 : z.volume) ?? 1) <= 0 ? Ye.volume_muted : Ye.volume2;
    }), u = dt(() => {
      var S;
      return Math.max(0, Math.min(100, Number(((S = t.state) == null ? void 0 : S.progressPct) || 0)));
    }), f = dt(() => ({ left: `${u.value}%` })), h = dt(() => {
      var te, ie;
      const S = (te = t.state) == null ? void 0 : te.volumePct, $ = Number(((ie = t.state) == null ? void 0 : ie.volume) ?? 1) * 100, z = Number(S ?? $ ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, z))}%`
      };
    }), g = dt(() => {
      var z, te;
      const $ = [
        String(((z = t.state) == null ? void 0 : z.currentTimeLabel) || "0:00"),
        String(((te = t.state) == null ? void 0 : te.durationLabel) || "0:00")
      ].reduce((ie, G) => Math.max(ie, G.length), 4);
      return `${Math.max(4, $)}ch`;
    }), b = dt(() => ({ "--pano-video-time-ch": g.value })), _ = dt(() => {
      var z, te;
      const S = Array.isArray((z = t.state) == null ? void 0 : z.thumbnails) ? t.state.thumbnails : [];
      if (S.length) return S;
      const $ = Math.max(7, Number(((te = t.state) == null ? void 0 : te.thumbnailCount) || 9));
      return Array.from({ length: $ }, (ie, G) => ({
        id: `placeholder-${G}`,
        src: "",
        label: ""
      }));
    }), v = /* @__PURE__ */ Yt(/* @__PURE__ */ new Set()), P = (S) => String((S == null ? void 0 : S.id) || (S == null ? void 0 : S.src) || (S == null ? void 0 : S.label) || ""), W = (S) => v.value.has(P(S)), D = (S) => {
      const $ = new Set(v.value);
      $.add(P(S)), v.value = $;
    };
    Fi(_, (S) => {
      const $ = new Set(S.map(P)), z = /* @__PURE__ */ new Set();
      for (const te of v.value)
        $.has(te) && z.add(te);
      v.value = z;
    }, { immediate: !0 });
    const O = dt(() => {
      var S;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((S = t.state) == null ? void 0 : S.shellMaxWidthPx) || 640))}px`
      };
    });
    return (S, $) => ($e(), je("div", {
      class: ht(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: It(O.value)
    }, [
      $[1] || ($[1] = Me("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      $[2] || ($[2] = Me("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Me("div", mC, [
        Me("div", gC, [
          tt(tn, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          Me("div", {
            class: "pano-video-time pano-video-time-start",
            style: It(b.value)
          }, ct(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Me("div", yC, [
          Me("div", bC, [
            ($e(!0), je(ot, null, At(_.value, (z) => ($e(), je("div", {
              key: P(z),
              class: ht(["pano-video-thumb", {
                "is-placeholder": !z.src,
                "is-loaded": z.src && W(z)
              }])
            }, [
              z.src ? ($e(), je("img", {
                key: 0,
                src: z.src,
                alt: "",
                draggable: "false",
                onLoad: (te) => D(z)
              }, null, 40, vC)) : ($e(), je("span", _C))
            ], 2))), 128))
          ]),
          Me("div", {
            class: "pano-video-playhead",
            style: It(f.value),
            "aria-hidden": "true"
          }, [...$[0] || ($[0] = [
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
          }, null, 8, SC)
        ]),
        Me("div", wC, [
          Me("div", {
            class: "pano-video-time pano-video-time-end",
            style: It(b.value)
          }, ct(e.state.durationLabel || "0:00"), 5),
          tt(tn, {
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
          Me("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            Me("div", kC, [
              Me("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: It(h.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, MC)
            ]),
            tt(tn, {
              "extra-class": "pano-video-control",
              icon: d.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, xC)
        ])
      ])
    ], 14, hC));
  }
}, NC = { class: "pano-floating-top" }, AC = ["data-selected", "data-view-count"], CC = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], IC = { class: "label" }, EC = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return $e(), je("div", NC, [
        Me("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          ($e(!0), je(ot, null, At(e.buttons, (i) => Hr(($e(), je("button", {
            key: i.key,
            class: ht(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            tt(jt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            Me("span", IC, ct(i.label), 1)
          ], 10, CC)), [
            [Ri, i.visible !== !1]
          ])), 128))
        ], 8, AC)
      ]);
    };
  }
};
function ky(e = "stickers") {
  const t = String(e || "stickers") === "cutout", n = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Ye.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Ye.unwrap, pressed: "false", extraClass: "" },
      ...t || n ? [{ key: "frame", label: "Frame", icon: Ye.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue). The Cutout editor shows them for a PANO_SCENE with World content (#77).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: Ye.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: Ye.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: Ye.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Ye.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Ye.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Ye.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Ye.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Ye.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Ye.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: Ye.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...n ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: Ye.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Ye.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Ye.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Ye.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Ye.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Ye.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Ye.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Ye.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Ye.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Ye.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Ye.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Ye.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Ye.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Ye.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Ye.lasso_tool }
        ]
      }
    ]
  };
}
const OC = ["aria-label"], FC = { class: "pano-stage-column" }, TC = { class: "pano-stage-wrap" }, DC = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, LC = {
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
    let o = "", a = !1, s = null;
    const l = /* @__PURE__ */ Yt(null), d = /* @__PURE__ */ Yt(null), u = /* @__PURE__ */ Yt(null);
    function f() {
      var G, j;
      return ((j = (G = u.value) == null ? void 0 : G.getRefs) == null ? void 0 : j.call(G)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function h(G) {
      var j, K;
      return ((K = (j = d.value) == null ? void 0 : j.open) == null ? void 0 : K.call(j, G)) === !0;
    }
    function g(G) {
      i("image-file-selected", G);
    }
    function b(G) {
      i("image-file-cancelled", G);
    }
    t({ getPaintOverlayRefs: f, openImagePicker: h });
    const _ = dt(() => r.readOnly === !0), v = dt(() => r.shellPreset || ky(r.type)), P = dt(() => {
      var j, K, ce;
      const G = String((((j = r.uiState) == null ? void 0 : j.stageStatus) === "failed" ? (K = r.uiState) == null ? void 0 : K.stageStatusDetail : (ce = r.uiState) == null ? void 0 : ce.stageWarningDetail) ?? "");
      return G === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : G === "stickers" ? "One or more sticker previews are unavailable." : G === "frame" ? "The editor hit a rendering error. Check the browser console for details." : G === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : G.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), W = dt(() => {
      var j;
      const G = Array.isArray((j = v.value) == null ? void 0 : j.floatingButtons) ? v.value.floatingButtons.slice() : [];
      return _.value && G.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ye.fullscreen
      }), G;
    });
    function D() {
      const G = l.value;
      return G ? Array.from(G.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((j) => j instanceof HTMLElement ? !j.hidden && j.tabIndex >= 0 && j.offsetParent !== null : !1) : [];
    }
    function O() {
      var K;
      const j = D()[0] || l.value;
      (K = j == null ? void 0 : j.focus) == null || K.call(j);
    }
    function S() {
      var G;
      s != null && s.isConnected && ((G = s.focus) == null || G.call(s)), s = null;
    }
    function $(G) {
      var j, K, ce, Se;
      if (!G.defaultPrevented) {
        if (G.key === "Tab") {
          const be = D();
          if (!be.length) {
            G.preventDefault(), (K = (j = l.value) == null ? void 0 : j.focus) == null || K.call(j);
            return;
          }
          const ge = be[0], X = be[be.length - 1], A = document.activeElement;
          if (G.shiftKey) {
            (A === ge || A === l.value || !((ce = l.value) != null && ce.contains(A))) && (G.preventDefault(), X.focus());
            return;
          }
          (A === X || !((Se = l.value) != null && Se.contains(A))) && (G.preventDefault(), ge.focus());
          return;
        }
        G.key === "Escape" && i("close");
      }
    }
    function z() {
      a || (o = document.body.style.overflow, document.body.style.overflow = "hidden", a = !0);
    }
    function te() {
      a && (document.body.style.overflow = o, a = !1);
    }
    function ie(G) {
      document.removeEventListener("keydown", $), G ? (s || (s = document.activeElement), z(), document.addEventListener("keydown", $), Cl(() => {
        O();
      })) : (te(), S());
    }
    return El(() => {
      ie(r.open);
    }), Ha(() => {
      te(), document.removeEventListener("keydown", $), S();
    }), Fi(() => r.open, (G) => {
      ie(G);
    }), (G, j) => e.open ? ($e(), je("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: j[2] || (j[2] = Lt((K) => i("close"), ["self"]))
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
        Me("div", FC, [
          Me("div", TC, [
            j[3] || (j[3] = Me("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            j[4] || (j[4] = Me("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            j[5] || (j[5] = Me("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? ($e(), je("div", DC, ct(P.value), 1)) : mt("", !0),
            j[6] || (j[6] = Me("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Me("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            tt(k2, {
              ref_key: "paintOverlaysRef",
              ref: u
            }, null, 512),
            tt(iy, {
              ref_key: "imageFilePickerRef",
              ref: d,
              onFileSelected: g,
              onFileCancelled: b
            }, null, 512),
            _.value ? mt("", !0) : ($e(), je(ot, { key: 1 }, [
              tt(pC, {
                buttons: e.uiState.toolButtons || v.value.toolButtons || []
              }, null, 8, ["buttons"]),
              tt(YN, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              tt(x2, {
                "paint-swatches": e.paintSwatches,
                panes: v.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            tt(PC, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            tt(EC, {
              buttons: e.uiState.viewButtons || v.value.viewButtons || []
            }, null, 8, ["buttons"]),
            tt(GN, {
              buttons: e.uiState.floatingButtons || W.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            tt(O2, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            tt(dC, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            tt(e2, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          tt(uC, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: j[0] || (j[0] = (K) => i("timeline", K))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? mt("", !0) : ($e(), Yn(DA, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: j[1] || (j[1] = (K) => i("timeline", K))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, OC)
    ])) : mt("", !0);
  }
}, nr = "loading", $a = "ready", Kn = "failed";
function My(e, t = "") {
  return e && (e.__panoLoadState = nr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Py(e, t = "") {
  return e && (e.__panoLoadState = $a, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Ny(e, t = "") {
  return e && (e.__panoLoadState = Kn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Bu(e, t) {
  return e ? e.__panoLoadState === Kn ? Kn : typeof t == "function" && t(e) ? $a : nr : $a;
}
function Uu(e) {
  return Bu(e) === Kn;
}
function RC({ presented: e, background: t = $a, stickers: n = [] } = {}) {
  if (!e) return { status: nr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], i = t === nr, o = r.includes(nr);
  if (i && o) return { status: nr, detail: "mixed" };
  if (i) return { status: nr, detail: "background" };
  if (o) return { status: nr, detail: "stickers" };
  const a = t === Kn, s = r.includes(Kn);
  return a && s ? { status: Kn, detail: "mixed" } : a ? { status: Kn, detail: "background" } : s ? { status: Kn, detail: "stickers" } : { status: $a, detail: "" };
}
const VC = "state_json", $C = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), of = "sticker_image_1", zC = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), Ay = 0.01, jC = "external_image", bl = "pano_sticker_input_images", HC = "pano_sticker_input_videos", GC = "pano_sticker_input_frames", WC = "pano_sticker_input_video_meta", KC = !0, vl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Mr = Math.PI / 180, Ii = 180 / Math.PI, Jc = 1, Cy = "rgb(255, 221, 87)", BC = "rgb(228, 228, 231)", UC = "rgb(180, 150, 60)", YC = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, qC = 64, om = 40, Zc = 16, XC = 0.45, am = 180, JC = 160, _l = 24, ZC = 4, QC = 4, eI = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function Qc(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function tI(e) {
  return 1 - Math.pow(1 - e, 3);
}
function nI(e, t, n) {
  const r = Fe((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function rI(e) {
  return e * e * e;
}
function Gl(e, t, n) {
  return { x: e, y: t, z: n };
}
function sm(e, t) {
  return Gl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function lm(e, t) {
  return Gl(e.x * t, e.y * t, e.z * t);
}
function eu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function iI(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Gl(e.x / t, e.y / t, e.z / t);
}
function vs(e) {
  return {
    yaw: zt(Math.atan2(e.x, e.z) * Ii),
    pitch: Fe(Math.asin(Fe(e.y, -1, 1)) * Ii, -90, 90)
  };
}
function ei(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
    const o = t[r].x, a = t[r].y, s = t[i].x, l = t[i].y;
    a > e.y != l > e.y && e.x < (s - o) * (e.y - a) / (l - a || 1e-6) + o && (n = !n);
  }
  return n;
}
function fa(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function tu(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), i = Number(n.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), a = Number(e.y || 0) - Number(t.y || 0), s = r * r + i * i;
  if (s <= 1e-6) return fa(e, t);
  const l = Fe((o * r + a * i) / s, 0, 1), d = Number(t.x || 0) + r * l, u = Number(t.y || 0) + i * l, f = Number(e.x || 0) - d, h = Number(e.y || 0) - u;
  return f * f + h * h;
}
function Wn(e, t, n) {
  return e + (t - e) * n;
}
function mr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Fe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Fe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Fe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Fe(n, 0, 1)})`;
}
function oI(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let _s = { fillStyle: "", url: "" };
function aI(e, t, n) {
  if (_s.url && _s.fillStyle === String(e || ""))
    return _s.url;
  const r = oI(`
<svg xmlns="http://www.w3.org/2000/svg" width="${_l}" height="${_l}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return _s = { fillStyle: String(e || ""), url: r }, r;
}
function Sl(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function Tn(e) {
  return {
    r: Fe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Fe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Fe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Fe(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function cn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function sI(e) {
  return vl.some((t) => Sl(e, t.color));
}
function Yu(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, i = Fe(Number(t), 0, 1), o = Fe(Number(n), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const a = Math.floor(r * 6), s = r * 6 - a, l = o * (1 - i), d = o * (1 - s * i), u = o * (1 - (1 - s) * i);
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
function qu(e) {
  const t = Fe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = Fe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = Fe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, n, r), o = Math.min(t, n, r), a = i - o;
  let s = 0;
  a > 1e-6 && (i === t ? s = ((n - r) / a + (n < r ? 6 : 0)) / 6 : i === n ? s = ((r - t) / a + 2) / 6 : s = ((t - n) / a + 4) / 6);
  const l = i <= 1e-6 ? 0 : a / i;
  return { h: s, s: l, v: i };
}
function Mo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function lI(e) {
  var r, i;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function cm(e) {
  const { paintCount: t, maskCount: n } = lI(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let i = 0, o = 0;
  return r.forEach((a) => {
    String((a == null ? void 0 : a.layerKind) || "paint") === "mask" ? o += 1 : i += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: i,
    maskRasterCount: o,
    totalPaintCount: t + i,
    totalMaskCount: n + o
  };
}
function fo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Ss(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function cI(e, t) {
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
function Ai(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function uI(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, i = Number(r);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function dI(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function fI(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const Iy = "pano_suite.ui_settings.v1", Ey = "pano_suite.node_grid_visibility.v1";
let po = null, gr = null;
function zs(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function pI() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Iy)) || "").trim();
    if (!t) return po ? zs(po) : null;
    const n = JSON.parse(t), r = zs(n);
    return po = r, r;
  } catch {
    return po ? zs(po) : null;
  }
}
function hI(e) {
  var n;
  const t = zs(e);
  po = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Iy, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Oy() {
  var e;
  if (gr && typeof gr == "object")
    return gr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Ey)) || "").trim();
    if (!t)
      return gr = {}, gr;
    const n = JSON.parse(t);
    return gr = n && typeof n == "object" ? n : {}, gr;
  } catch {
    return gr = {}, gr;
  }
}
function mI(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const i = Oy()[n];
  return typeof i == "boolean" ? i : !!t;
}
function gI(e, t) {
  var i;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = Oy();
  r[n] = !!t, gr = r;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(Ey, JSON.stringify(r));
  } catch {
  }
}
function yI(e, t) {
  const n = { ...e }, r = t.map((i) => i(e));
  for (const { connect: i, ...o } of r) {
    for (const a of Object.keys(o))
      if (a in n) throw new Error(`Panorama editor: ${a} is provided twice`);
    Object.assign(n, o);
  }
  for (const i of r) i.connect(n);
  return n;
}
const ri = /* @__PURE__ */ new Map(), bI = 12;
function vI(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = ri.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (ri.delete(t), ri.set(t, n), n);
}
function _I(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (ri.delete(n), ri.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); ri.size > bI; ) {
      const i = ri.keys().next().value;
      if (!i) break;
      ri.delete(i);
    }
}
function SI(e) {
  const {
    comfyMedia: t,
    cutoutV2: n,
    editor: r,
    editorView: i,
    floatingRightEl: o,
    imageCache: a,
    loadPreferredExactLinkedImage: s,
    mediaAssetSource: l,
    mediaSource: d,
    mediaUiImage: u,
    node: f,
    portStillCanvas: h,
    portVideoEl: g,
    readOnly: b,
    runtime: _,
    scheduler: v,
    stageWrap: P,
    state: W,
    stateV2: D,
    stillCanvas: O,
    timelinePlayhead: S,
    type: $,
    uiState: z,
    videoEl: te
  } = e;
  let ie, G, j, K, ce, Se;
  const be = {
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
  }, ge = 9, X = [];
  let A = 0;
  const T = () => {
    var De, Be;
    const k = (De = P == null ? void 0 : P.getBoundingClientRect) == null ? void 0 : De.call(P), ee = (Be = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : Be.call(o), _e = Math.max(0, Number((k == null ? void 0 : k.width) || 0)), pe = ee ? Math.max(0, Number(ee.width || 0)) : 0, C = pe > 0 ? pe + 14 + 12 : 72, ye = Math.max(280, Math.floor(_e - C * 2)), Ie = r.fullscreen ? Math.min(1200, ye) : ye;
    z.videoTransport.shellMaxWidthPx = Ie;
  }, de = () => {
    A || (A = v.requestFrame(() => {
      A = 0, T();
    }));
  }, he = (k) => {
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
  }, xe = typeof ResizeObserver < "u" ? new ResizeObserver(() => de()) : null;
  xe == null || xe.observe(P), o && (xe == null || xe.observe(o)), X.push(() => {
    var k;
    A && (v.cancelFrame(A), A = 0), (k = xe == null ? void 0 : xe.disconnect) == null || k.call(xe);
  }), de();
  const He = () => {
    be.thumbnailJobId += 1, be.thumbnailSrc = "", z.videoTransport.thumbnails = [], z.videoTransport.thumbnailCount = ge;
  }, se = async (k, ee, _e) => {
    const pe = String(k || "").trim();
    if (!pe) {
      He();
      return;
    }
    const Le = vI(pe);
    if (Le) {
      be.thumbnailSrc = pe, z.videoTransport.thumbnails = Le.thumbnails, z.videoTransport.thumbnailCount = Le.thumbnailCount;
      return;
    }
    const Oe = ++be.thumbnailJobId;
    be.thumbnailSrc = pe, z.videoTransport.thumbnails = [], z.videoTransport.thumbnailCount = ge;
    const C = Dl(document, "editor.thumbnails");
    C.preload = "auto", C.muted = !0, C.playsInline = !0, C.crossOrigin = "anonymous";
    const ye = mn({ label: "editor.thumbnail" });
    try {
      const Ie = await new Promise((yn) => {
        let $n = !1;
        const on = (Zt) => {
          $n || ($n = !0, yn(Zt));
        };
        C.addEventListener("loadedmetadata", () => on(!0), { once: !0 }), C.addEventListener("canplay", () => on(!0), { once: !0 }), C.addEventListener("error", () => on(!1), { once: !0 }), C.src = pe, C.load();
      });
      if (be.thumbnailJobId !== Oe) return;
      const De = Number(C.videoWidth || 0), Be = Number(C.videoHeight || 0);
      if (!Ie || De < 1 || Be < 1) {
        be.thumbnailFailedSrcs.add(pe);
        return;
      }
      const Ue = Math.max(0, Number(C.duration || ee || 0)), Ke = 46, Qe = Math.max(72, Math.round(De / Be * Ke));
      ye.width = Qe, ye.height = Ke;
      const wt = ye.getContext("2d");
      if (!wt) return;
      const pt = [], Wt = (yn) => new Promise(($n) => {
        let on = !1;
        const Zt = () => {
          on || (on = !0, $n());
        };
        C.addEventListener("seeked", Zt, { once: !0 }), C.addEventListener("error", Zt, { once: !0 });
        try {
          C.currentTime = yn;
        } catch {
          Zt();
        }
      });
      for (let yn = 0; yn < ge; yn += 1) {
        if (be.thumbnailJobId !== Oe) return;
        const $n = ge <= 1 ? 0 : yn / (ge - 1), on = Ue > 0 ? Math.max(0, Math.min(Ue - Math.max(1e-3, 0.5 / Math.max(1, Number(_e || 24))), Ue * $n)) : 0;
        if (await Wt(on), be.thumbnailJobId !== Oe) return;
        wt.clearRect(0, 0, Qe, Ke), wt.drawImage(C, 0, 0, Qe, Ke), pt.push({
          id: `thumb-${yn}`,
          src: ye.toDataURL("image/jpeg", 0.72),
          time: on,
          label: N(on)
        });
      }
      if (be.thumbnailJobId !== Oe) return;
      z.videoTransport.thumbnails = pt, z.videoTransport.thumbnailCount = pt.length || ge, _I(pe, {
        thumbnails: pt,
        thumbnailCount: pt.length || ge,
        duration: Ue,
        fps: _e
      });
    } finally {
      C.removeAttribute("src"), C.load(), pu(ye);
    }
  };
  X.push(() => {
    He();
  });
  const R = U0({
    video: te instanceof HTMLVideoElement ? te : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (k) => v.requestFrame(k),
      cancelFrame: (k) => v.cancelFrame(k)
    },
    fps: U,
    span: () => {
      if (D) return Se();
      const k = Math.round(Number(z.videoTransport.duration || 0) * U());
      return te.loop || !(k > 0) ? 1 / 0 : k;
    },
    loop: () => D,
    onFrame: (k) => {
      D ? j(k) : ue(), G({ cause: "frame_view", localOnly: !0, reason: bt.PLAYHEAD });
    },
    onCapture: () => {
      I() && (_.backgroundDirty = !0);
    },
    onChange: () => {
      ue(), S.playing.value = R.playing, ce(), G({ cause: "frame_view", localOnly: !0, reason: bt.PLAYHEAD });
    }
  });
  X.push(() => R.dispose());
  const ae = D && g instanceof HTMLVideoElement ? Y0({
    video: g,
    onCapture: () => {
      var _e;
      const k = Number(g.videoWidth || 0), ee = Number(g.videoHeight || 0);
      k < 1 || ee < 1 || (h.width = k, h.height = ee, (_e = h.getContext("2d")) == null || _e.drawImage(g, 0, 0), h.__panoFrameIdx += 1, G({ cause: "frame_view", localOnly: !0, reason: bt.MEDIA }));
    },
    onChange: () => G({ cause: "frame_view", localOnly: !0, reason: bt.MEDIA })
  }) : null;
  ae && X.push(() => ae.dispose());
  const me = D ? L0({
    createImage: (k, ee) => {
      const _e = new Image();
      return _e.onload = ee, _e.onerror = ee, _e.src = k, _e;
    },
    onLoad: () => G({ cause: "frame_view", localOnly: !0, reason: bt.MEDIA })
  }) : null;
  if (te instanceof HTMLVideoElement) {
    const k = () => {
      B(), G({ cause: "frame_view", localOnly: !0 });
    }, ee = () => {
      ue({
        hasAudio: z.videoTransport.hasAudio,
        muted: te.muted,
        volume: Number(te.volume ?? z.videoTransport.volume ?? 1)
      });
    }, _e = () => {
      const pe = te.dataset.panoSrc;
      pe && (be.failedSrcs.add(pe), B(), G());
    };
    for (const [pe, Le] of [
      ["loadedmetadata", k],
      ["loadeddata", k],
      ["canplay", k],
      ["volumechange", ee],
      ["error", _e]
    ])
      te.addEventListener(pe, Le), X.push(() => te.removeEventListener(pe, Le));
  }
  function Ne(k) {
    return t.uiList(f, k);
  }
  function Te(k) {
    return t.uiValue(f, k);
  }
  function oe() {
    const k = String((f == null ? void 0 : f.comfyClass) || (f == null ? void 0 : f.type) || (f == null ? void 0 : f.title) || "");
    return Qs(k) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : $ === "stickers" || $ === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Ae() {
    const { metaKey: k } = oe(), ee = Te(k);
    return Array.isArray(ee) && ee.length > 0 && ee[0] && typeof ee[0] == "object" ? ee[0] : ee && typeof ee == "object" ? ee : null;
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
  function N(k) {
    const ee = Math.max(0, Math.floor(Number(k || 0))), _e = Math.floor(ee / 60), pe = ee % 60;
    return `${_e}:${String(pe).padStart(2, "0")}`;
  }
  function U() {
    return D ? W.timeline.fps : be.metaFps || 1e3;
  }
  function ue(k = {}) {
    const ee = Number(k.duration ?? z.videoTransport.duration ?? 0), _e = Math.max(1, Number(k.fps ?? z.videoTransport.fps ?? 24)), pe = R.frame / U(), Le = Object.prototype.hasOwnProperty.call(k, "ready") ? !!k.ready : !!z.videoTransport.ready, Oe = R.playing, C = Object.prototype.hasOwnProperty.call(k, "visible") ? !!k.visible : !!z.videoTransport.visible, ye = Object.prototype.hasOwnProperty.call(k, "muted") ? !!k.muted : !!(te instanceof HTMLVideoElement ? te.muted : z.videoTransport.muted), Ie = Number(
      Object.prototype.hasOwnProperty.call(k, "volume") ? k.volume : te instanceof HTMLVideoElement ? te.volume : z.videoTransport.volume
    ), De = Object.prototype.hasOwnProperty.call(k, "hasAudio") ? !!k.hasAudio : he(te), Be = Object.prototype.hasOwnProperty.call(k, "loop") ? !!k.loop : !!z.videoTransport.loop;
    Object.assign(z.videoTransport, {
      ready: Le,
      playing: Oe,
      visible: C,
      loop: Be,
      currentTime: Number.isFinite(pe) ? pe : 0,
      duration: Number.isFinite(ee) ? ee : 0,
      progressPct: ee > 1e-6 ? Math.max(0, Math.min(100, pe / ee * 100)) : 0,
      currentTimeLabel: N(pe),
      durationLabel: N(ee),
      frameCount: Math.max(0, Number(k.frameCount ?? z.videoTransport.frameCount ?? 0)),
      fps: _e,
      hasAudio: De,
      muted: ye,
      volume: Math.max(0, Math.min(1, Number.isFinite(Ie) ? Ie : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(Ie) ? Ie : 1)) * 100),
      thumbnails: Array.isArray(k.thumbnails) ? k.thumbnails : z.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(k.thumbnailCount ?? z.videoTransport.thumbnailCount ?? ge))
    });
  }
  function M() {
    return !!(te instanceof HTMLVideoElement && !D && te.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function Z() {
    if (!(te instanceof HTMLVideoElement) || !z.videoTransport.hasAudio) return;
    const k = !te.muted;
    te.muted = k, !k && Number(te.volume || 0) <= 0 && (te.volume = Math.max(0.01, Number(z.videoTransport.volume || 1))), ue({
      hasAudio: z.videoTransport.hasAudio,
      muted: te.muted,
      volume: Number(te.volume ?? z.videoTransport.volume ?? 1)
    });
  }
  function re() {
    ue({
      visible: M()
    });
  }
  function I() {
    if (!(te instanceof HTMLVideoElement) || Number(te.videoWidth || 0) < 1 || Number(te.videoHeight || 0) < 1) return !1;
    const k = Number(te.videoWidth || 0), ee = Number(te.videoHeight || 0);
    (O.width !== k || O.height !== ee) && (O.width = k, O.height = ee);
    const _e = O.getContext("2d");
    return _e ? (_e.clearRect(0, 0, k, ee), _e.drawImage(te, 0, 0, k, ee), O.__panoFrameIdx = Number(O.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function E() {
    return !R.showsVideo && Number(O.width || 0) > 0 && Number(O.height || 0) > 0 && Number(O.__panoFrameIdx || 0) > 0 ? O : te instanceof HTMLVideoElement && Number(te.videoWidth || 0) > 0 && Number(te.videoHeight || 0) > 0 && Number(te.readyState || 0) >= 2 ? te : null;
  }
  function F() {
    O.__panoFrameIdx = 0, _.backgroundDirty = !0;
  }
  function B() {
    if (!(te instanceof HTMLVideoElement)) return null;
    const { videoKey: k } = oe(), ee = sn(f, "background") && Ne(k)[0] || null, _e = d(ee), pe = [_e, t.linkedVideoFile(f, p())].filter(Boolean), Le = pe.find((Ue) => !be.failedSrcs.has(Ue)) || "";
    be.videoFailed = !Le && pe.length > 0;
    const Oe = Le && Le === _e ? Ae() : null;
    be.metaFps = Number(Oe == null ? void 0 : Oe.fps) > 0 ? Number(Oe.fps) : 0;
    const C = Math.max(1, Number((Oe == null ? void 0 : Oe.fps) || (D ? W.timeline.fps : 24))), ye = te.dataset.panoSrc === Le && Number.isFinite(te.duration) ? te.duration : 0, Ie = Number((Oe == null ? void 0 : Oe.duration) || ((Oe == null ? void 0 : Oe.frames) > 0 ? Oe.frames / C : ye)), De = Math.max(0, Number((Oe == null ? void 0 : Oe.frames) || Math.round(Ie * C))), Be = !!(Oe != null && Oe.has_audio) || he(te);
    return Le && te.dataset.panoSrc !== Le ? (te.pause(), F(), te.dataset.panoSrc = Le, te.loop = !D && !!z.videoTransport.loop, te.muted = !!z.videoTransport.muted, te.volume = Math.max(0, Math.min(1, Number(z.videoTransport.volume ?? 1))), te.src = Le, te.load(), R.setSource(!0), D || R.seek(0)) : !Le && te.getAttribute("src") && (te.pause(), te.removeAttribute("src"), delete te.dataset.panoSrc, te.load(), F(), He(), R.setSource(!1)), D || (te.loop = !!z.videoTransport.loop), Le && !D && be.thumbnailSrc !== Le && !be.thumbnailFailedSrcs.has(Le) && se(Le, Ie, C), Le || He(), ue({
      ready: !!Le,
      visible: !!Le && M(),
      duration: Ie,
      frameCount: De,
      fps: C,
      hasAudio: Be,
      loop: !!te.loop,
      muted: !!te.muted,
      volume: Number(te.volume ?? z.videoTransport.volume ?? 1),
      thumbnailCount: z.videoTransport.thumbnailCount
    }), Le || null;
  }
  function Y(k, ee = null) {
    return u(f, k, a, ee || (() => G()));
  }
  function Q(k = null) {
    return sn(f, "external-sticker") ? Y(bl, k) : null;
  }
  function V() {
    if (!sn(f, "external-sticker")) return null;
    const k = Ne(WC)[0];
    if (!k || typeof k != "object") return null;
    const ee = Ne(GC).map(d).filter(Boolean);
    if (ee.length) return { frames: ee, meta: k };
    const _e = d(Ne(HC)[0] || null);
    return _e ? { src: _e, meta: k } : null;
  }
  function ne() {
    const k = W.stickers.find(ie), ee = k ? V() : null, _e = ee ? F0(k.clip, r.frame, W.timeline.fps, ee.meta) : null;
    ae.follow({ src: (ee == null ? void 0 : ee.src) || "", time: _e, playing: R.advancing, fps: W.timeline.fps });
    const pe = k ? le(k) : null, Le = ee != null && ee.frames ? me.picture(ee.frames, _e, ee.meta, pe) : ae.picture(h, pe);
    return Le ? { media: Le, revision: x(Le), source: D0(ee, pe) } : null;
  }
  function Pe() {
    return !D || !sn(f, "scene") ? null : Sh(Ne("pano_scene_files"), Ne("pano_scene_meta"), d);
  }
  function Re() {
    return !D || !sn(f, "external-sticker") ? null : Sh(Ne("pano_sticker_files"), Ne("pano_sticker_meta"), d);
  }
  function le(k) {
    var C;
    if (k && typeof k == "object" && (ie(k) || k.external === !0))
      return Q(() => {
        Gr(f, "image-loaded");
      });
    const ee = D ? ve(k) : String(k && typeof k == "object" ? k.asset_id || k.assetId || "" : k || "");
    if (!ee) return null;
    const _e = a.get(ee);
    if (_e) return _e;
    const pe = D ? n0(k.source) : (C = W.assets) == null ? void 0 : C[ee], Le = l(pe);
    if (!Le) return null;
    const Oe = new Image();
    return My(Oe, Le), Oe.onload = () => {
      Py(Oe, Le), G();
    }, Oe.onerror = () => {
      Ny(Oe, Le), G();
    }, Oe.src = Le, a.set(ee, Oe), Oe;
  }
  function ve(k) {
    const { source: ee } = k;
    return ee.filename ? `file:${ee.storage}:${ee.subfolder}:${ee.filename}` : `sticker:${k.id}`;
  }
  function we() {
    if ($ === "cutout" && !n) {
      const Le = E();
      if (Le) return Le;
      const Oe = s(
        f,
        ["erp_image", "bg_erp"],
        () => G(),
        "background:cutout:erp_image|bg_erp"
      );
      return Oe && !Uu(Oe) ? Oe : u(f, "pano_input_images", a, () => G()) || Oe || null;
    }
    const k = E();
    if (k) return k;
    const ee = sn(f, "background") ? u(f, "pano_input_images", a, () => G()) : null;
    if (ee && !Uu(ee)) return ee;
    if (te instanceof HTMLVideoElement && te.dataset.panoSrc) return te;
    const _e = p();
    return s(f, _e, () => G(), `background:${_e.join("|")}`) || ee || null;
  }
  function m() {
    var ee;
    const k = (Array.isArray(f == null ? void 0 : f.inputs) ? f.inputs : []).findIndex((_e) => (_e == null ? void 0 : _e.name) === "source");
    return k >= 0 && f.graph ? String(((ee = f.getInputLink(k)) == null ? void 0 : ee.type) || "") : "";
  }
  function p() {
    if ($ === "cutout") return n ? m() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const k = Array.isArray(f == null ? void 0 : f.inputs) ? f.inputs.map((pe) => String((pe == null ? void 0 : pe.name) || "")) : [], ee = k.includes("erp_image"), _e = k.includes("bg_erp");
    return b && (ee || _e) ? ee ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : $ === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function L(k) {
    return k ? k instanceof HTMLImageElement ? !!k.complete && Number(k.naturalWidth || k.width || 0) > 0 && Number(k.naturalHeight || k.height || 0) > 0 : k instanceof HTMLVideoElement ? Number(k.videoWidth || 0) > 0 && Number(k.videoHeight || 0) > 0 && Number(k.readyState || 0) >= 2 : Number(k.width || k.naturalWidth || 0) > 0 && Number(k.height || k.naturalHeight || 0) > 0 : !1;
  }
  function H() {
    if (i.failed) return { status: Kn, detail: "renderer" };
    if (!i.ready) return { status: nr, detail: "boot" };
    const k = we(), ee = be.videoFailed ? Kn : Bu(k, L), _e = [];
    for (const pe of K()) {
      if ((pe == null ? void 0 : pe.visible) === !1) continue;
      const Le = le(pe);
      _e.push(Bu(Le, L));
    }
    return RC({
      presented: _.hasPresentedFrame,
      background: ee,
      stickers: _e
    });
  }
  return {
    connect(k) {
      ({
        isExternalSticker: ie,
        requestDraw: G,
        setTimelineFrame: j,
        skyStickers: K,
        syncTimeline: ce,
        timelineSpanFrames: Se
      } = k);
    },
    videoState: be,
    videoCleanupFns: X,
    queueVideoTransportLayout: de,
    playback: R,
    portVideo: ae,
    getNodeUiValue: Te,
    getMediaRevisionToken: x,
    playbackFps: U,
    syncVideoTransportState: ue,
    toggleVideoMuted: Z,
    syncVideoTransportVisibility: re,
    refreshModalVideoSource: B,
    getStickerUiImage: Y,
    getExternalStickerPreviewImage: Q,
    getPortMedia: V,
    followPortSticker: ne,
    getStickerImage: le,
    stickerImageKey: ve,
    getConnectedErpImage: we,
    isDecodedImageReady: L,
    getStageImageStatus: H,
    sceneFiles: Pe,
    stickerFiles: Re
  };
}
function wI(e = 80, t = null, n = 8) {
  const r = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), a = Math.max(1, Number(n || 8));
  function s(d) {
    if (r.splice(0, r.length), i = -1, !d || typeof d != "object" || !Array.isArray(d.entries) || (d.entries.forEach((f) => {
      r.push(String(f || ""));
    }), !r.length)) return;
    const u = Number(d.index);
    Number.isInteger(u) ? u === -1 ? i = -1 : i = Math.max(0, Math.min(r.length - 1, u)) : i = r.length - 1;
  }
  function l(d) {
    r[i] !== d && (r.splice(i + 1), r.push(d), r.length > o && r.shift(), i = r.length - 1);
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
      return d < 0 || d >= r.length ? null : (i = d, r[i]);
    },
    redo() {
      const d = i + 1;
      return d < 0 || d >= r.length ? null : (i = d, r[i]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return i;
    },
    serialize() {
      const d = r.length, u = Math.max(0, d - a), f = i >= 0 ? Math.max(0, Math.min(i, u)) : u, h = r.slice(f, f + a), g = i < 0 ? -1 : Math.max(-1, Math.min(h.length - 1, i - f));
      return {
        version: 1,
        entries: h,
        index: g
      };
    },
    hydrate: s
  };
}
const xI = 80;
function Fy(e) {
  return JSON.stringify(lx(e));
}
function kI(e) {
  return wI(xI, { entries: [Fy(e)], index: 0 });
}
function MI(e) {
  const {
    editor: t,
    readOnly: n,
    runtime: r,
    state: i,
    stateV2: o,
    studio: a,
    type: s
  } = e;
  let l, d, u, f, h, g, b, _, v, P, W, D, O, S;
  function $() {
    n || (W(), o0(i), !(o && i.stickers.some(f)) && (t.historyController.commitActionGroup(Fy(i)), O()));
  }
  function z(ie) {
    var ce, Se;
    if (n) return;
    P();
    const G = ie < 0 ? t.historyController.undo() : t.historyController.redo();
    if (O(), !G) return;
    const j = cx(i, G), K = (ce = i.timeline) == null ? void 0 : ce.fps;
    Object.keys(i).forEach((be) => delete i[be]), Object.assign(i, j.state), W(!1), o && i.timeline.fps !== K && b.seek(Math.round(t.frame * i.timeline.fps / K)), t.selectedId = s === "stickers" || s === "cutout" ? i.active.selected_sticker_id : i.active.selected_shot_id, a && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((Se = u()) == null ? void 0 : Se.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), _(), r.backgroundDirty = !0, j.paintingChanged ? g() : h(), D(), S(), d(), v({ cause: "cutout_frame" });
  }
  function te() {
    var j, K;
    const ie = Array.isArray((j = t.historyController) == null ? void 0 : j.entries) ? t.historyController.entries : [], G = Number((K = t.historyController) == null ? void 0 : K.index);
    return {
      canUndo: !n && ie.length > 1 && G > 0,
      canRedo: !n && ie.length > 1 && G >= 0 && G < ie.length - 1
    };
  }
  return {
    connect(ie) {
      ({
        clearWorldSelection: l,
        commitState: d,
        getActiveCutoutShot: u,
        isUploadingSticker: f,
        markObjectVisualsDirty: h,
        markPaintStrokeVisualsDirty: g,
        playback: b,
        releaseHiddenSelection: _,
        requestDraw: v,
        stopTimelinePlayback: P,
        syncCutoutShot: W,
        syncPaintUi: D,
        syncUndoRedoButtons: O,
        updateSidePanel: S
      } = ie);
    },
    pushHistory: $,
    restoreHistory: z,
    getHistoryCapabilities: te
  };
}
function PI(e) {
  const {
    canvas: t,
    cutoutV2: n,
    editor: r,
    sceneV2: i,
    state: o,
    stateV2: a,
    type: s
  } = e;
  let l, d, u, f, h, g, b;
  function _() {
    return s === "stickers" ? v() : o.shots;
  }
  function v() {
    return i ? o.stickers.filter((m) => m.placement === "sky") : o.stickers;
  }
  function P(m) {
    return i && ae(m);
  }
  function W(m) {
    return m.source.kind === "file" && !m.source.filename && !m.source.data_url;
  }
  function D(m) {
    return P(m) ? Td(m, r.frame) : m;
  }
  function O(m, p) {
    P(m) ? t0(m, r.frame, p) : Object.assign(m, p);
  }
  function S() {
    const m = o.painting || (o.painting = Fo(null));
    return Array.isArray(m.groups) || (m.groups = []), m.groups;
  }
  function $(m = "paint") {
    var k, ee;
    const p = Array.isArray((ee = (k = o.painting) == null ? void 0 : k[m]) == null ? void 0 : ee.strokes) ? o.painting[m].strokes : [], L = [], H = /* @__PURE__ */ new Set();
    for (const _e of p) {
      const pe = String((_e == null ? void 0 : _e.actionGroupId) || "").trim();
      !pe || H.has(pe) || (H.add(pe), L.push(pe));
    }
    return L;
  }
  function z() {
    return $("paint");
  }
  function te(m, p) {
    const L = String(p || "").trim();
    return L ? `${m === "mask" ? "mask" : "paint"}:${L}` : "";
  }
  function ie(m) {
    const p = String(m || "").trim();
    return p ? `raster:${p}` : "";
  }
  function G(m) {
    const p = String(m || "").trim();
    if (!p) return "";
    const L = p.match(/^raster:(.*)$/);
    return String(L ? L[1] || "" : p).trim();
  }
  function j(m, p = null) {
    const L = String(m || "").trim();
    if (!L) return { layerKind: "paint", actionGroupId: "" };
    const H = L.match(/^(paint|mask):(.*)$/);
    return H ? { layerKind: H[1] === "mask" ? "mask" : "paint", actionGroupId: String(H[2] || "").trim() } : { layerKind: p === "mask" ? "mask" : "paint", actionGroupId: L };
  }
  function K() {
    var p;
    let m = -1;
    for (const L of v())
      m = Math.max(m, Number((L == null ? void 0 : L.z_index) || 0));
    for (const L of S())
      m = Math.max(m, Number((L == null ? void 0 : L.z_index) || 0));
    for (const L of Array.isArray((p = o.painting) == null ? void 0 : p.raster_objects) ? o.painting.raster_objects : [])
      String((L == null ? void 0 : L.layerKind) || "paint") === "paint" && (m = Math.max(m, Number((L == null ? void 0 : L.z_index) || 0)));
    return m + 1;
  }
  function ce(m, p = null) {
    const L = String(m || "").trim();
    if (!L) return null;
    const H = S();
    let k = H.find((ee) => String((ee == null ? void 0 : ee.actionGroupId) || "") === L);
    return k ? p != null && (k.z_index = Math.max(0, Number(p || 0))) : (k = {
      id: L,
      type: "strokeGroup",
      actionGroupId: L,
      z_index: p == null ? K() : Math.max(0, Number(p || 0)),
      locked: !1,
      frame: null
    }, H.push(k)), k;
  }
  function Se(m) {
    if (!(m != null && m.centerUv)) return [];
    const p = Number(m.centerUv.u || 0), L = Number(m.centerUv.v || 0), H = Number(m.halfW || 0), k = Number(m.halfH || 0);
    return [
      {
        u: ((p - H) % 1 + 1) % 1,
        v: Fe(L - k, 0, 1)
      },
      {
        u: ((p + H) % 1 + 1) % 1,
        v: Fe(L - k, 0, 1)
      },
      {
        u: ((p + H) % 1 + 1) % 1,
        v: Fe(L + k, 0, 1)
      },
      {
        u: ((p - H) % 1 + 1) % 1,
        v: Fe(L + k, 0, 1)
      }
    ];
  }
  function be() {
    const m = new Set(z()), L = S().filter((H) => m.has(String((H == null ? void 0 : H.actionGroupId) || "")));
    return m.forEach((H) => {
      L.some((k) => String((k == null ? void 0 : k.actionGroupId) || "") === H) || L.push({
        id: H,
        type: "strokeGroup",
        actionGroupId: H,
        z_index: K(),
        locked: !1,
        frame: null
      });
    }), L.sort((H, k) => Number((H == null ? void 0 : H.z_index) || 0) - Number((k == null ? void 0 : k.z_index) || 0)), o.painting.groups = L, L;
  }
  function ge(m, p, L) {
    var Ue;
    const H = (Ke) => (Number(Ke || 0) % 1 + 1) % 1, k = [];
    for (const Ke of L) {
      const Qe = Ke == null ? void 0 : Ke.geometry, wt = (Qe == null ? void 0 : Qe.geometryKind) === "lasso_fill" ? Qe == null ? void 0 : Qe.points : (Qe == null ? void 0 : Qe.processedPoints) || (Qe == null ? void 0 : Qe.rawPoints) || (Qe == null ? void 0 : Qe.points) || [];
      Array.isArray(wt) && k.push(...wt);
    }
    if (!k.length) return null;
    const ee = H(((Ue = k[0]) == null ? void 0 : Ue.u) || 0);
    let _e = 0, pe = 0;
    k.forEach((Ke) => {
      const Qe = H((Ke == null ? void 0 : Ke.u) || 0);
      _e += ee + ue(Qe, ee), pe += Number((Ke == null ? void 0 : Ke.v) || 0);
    });
    const Le = (_e / k.length % 1 + 1) % 1;
    let Oe = 1 / 0, C = -1 / 0, ye = 1 / 0, Ie = -1 / 0;
    k.forEach((Ke) => {
      const Qe = H((Ke == null ? void 0 : Ke.u) || 0), wt = ue(Qe, Le);
      Oe = Math.min(Oe, wt), C = Math.max(C, wt);
      const pt = Number((Ke == null ? void 0 : Ke.v) || 0);
      ye = Math.min(ye, pt), Ie = Math.max(Ie, pt);
    });
    const De = L.reduce((Ke, Qe) => {
      const wt = d(String((Qe == null ? void 0 : Qe.toolKind) || "pen")), pt = Nn[wt] || Nn[Dr], Wt = Math.max(1, Number((Qe == null ? void 0 : Qe.size) || 10)) * Math.max(0.1, Number((pt == null ? void 0 : pt.sizeScale) ?? 1));
      return Math.max(Ke, Wt);
    }, 0), Be = Math.max(35e-4, De / 2048);
    return {
      centerUv: { u: ((Le + (Oe + C) * 0.5) % 1 + 1) % 1, v: Fe((ye + Ie) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (C - Oe) * 0.5 + Be,
      halfH: (Ie - ye) * 0.5 + Be,
      uvPad: Be
    };
  }
  function X(m, p, L) {
    const H = String(m || "").trim();
    if (!H) return null;
    const k = S().find((_e) => String((_e == null ? void 0 : _e.actionGroupId) || "") === H);
    if (!k) return null;
    const ee = L || x(H, p);
    return k.frame = ge(H, p, ee), k.frame;
  }
  function A() {
    var H;
    const m = v().map((k) => ({
      type: "sticker",
      id: String((k == null ? void 0 : k.id) || ""),
      z_index: Number((k == null ? void 0 : k.z_index) || 0),
      item: k
    })), p = be().map((k) => ({
      type: "strokeGroup",
      id: String((k == null ? void 0 : k.id) || (k == null ? void 0 : k.actionGroupId) || ""),
      actionGroupId: String((k == null ? void 0 : k.actionGroupId) || ""),
      z_index: Number((k == null ? void 0 : k.z_index) || 0),
      item: k
    })), L = (Array.isArray((H = o.painting) == null ? void 0 : H.raster_objects) ? o.painting.raster_objects : []).filter((k) => String((k == null ? void 0 : k.layerKind) || "paint") === "paint").map((k) => ({
      type: "rasterObject",
      id: String((k == null ? void 0 : k.id) || ""),
      z_index: Number((k == null ? void 0 : k.z_index) || 0),
      item: k
    }));
    return [...m, ...p, ...L].sort((k, ee) => Number(k.z_index || 0) - Number(ee.z_index || 0));
  }
  function T(m = !0) {
    var L, H, k, ee, _e, pe;
    const p = A().filter((Le) => Le.type === "strokeGroup").map((Le) => String(Le.actionGroupId || "")).filter((Le) => !!Le);
    if (m) {
      const Le = String(((H = (L = r.interaction) == null ? void 0 : L.stroke) == null ? void 0 : H.actionGroupId) || "").trim(), Oe = String(((ee = (k = r.interaction) == null ? void 0 : k.stroke) == null ? void 0 : ee.layerKind) || "").trim(), C = String(((pe = (_e = r.interaction) == null ? void 0 : _e.stroke) == null ? void 0 : pe.toolKind) || "").trim();
      Le && Oe === "paint" && C !== "eraser" && !p.includes(Le) && p.push(Le);
    }
    return p;
  }
  function de(m = !0) {
    var pe, Le, Oe, C, ye, Ie;
    const p = A();
    if (!m) return p;
    const L = String(((Le = (pe = r.interaction) == null ? void 0 : pe.stroke) == null ? void 0 : Le.actionGroupId) || "").trim(), H = String(((C = (Oe = r.interaction) == null ? void 0 : Oe.stroke) == null ? void 0 : C.layerKind) || "").trim(), k = String(((Ie = (ye = r.interaction) == null ? void 0 : ye.stroke) == null ? void 0 : Ie.toolKind) || "").trim();
    if (!L || H !== "paint" || k === "eraser" || p.some((De) => De.type === "strokeGroup" && String(De.actionGroupId || "") === L))
      return p;
    const ee = g();
    let _e = p.reduce((De, Be) => Math.max(De, Number((Be == null ? void 0 : Be.z_index) || 0)), -1) + 1;
    return ee && Ae(ee) && String(ee.actionGroupId || "") === L && (_e = Number(ee.z_index || 0)), [
      ...p,
      {
        type: "strokeGroup",
        id: L,
        actionGroupId: L,
        z_index: _e,
        item: null
      }
    ].sort((De, Be) => Number((De == null ? void 0 : De.z_index) || 0) - Number((Be == null ? void 0 : Be.z_index) || 0));
  }
  function he() {
    return S().slice().sort((m, p) => Number((m == null ? void 0 : m.z_index) || 0) - Number((p == null ? void 0 : p.z_index) || 0)).map((m) => oe(te("paint", (m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || ""))).filter(Boolean);
  }
  function xe() {
    var m;
    return (Array.isArray((m = o.painting) == null ? void 0 : m.raster_objects) ? o.painting.raster_objects : []).filter((p) => String((p == null ? void 0 : p.layerKind) || "paint") === "paint").slice().sort((p, L) => Number((p == null ? void 0 : p.z_index) || 0) - Number((L == null ? void 0 : L.z_index) || 0)).map((p) => Ne(ie((p == null ? void 0 : p.id) || ""))).filter(Boolean);
  }
  function He() {
    return n || !Array.isArray(o.stickers) ? [] : v();
  }
  function se() {
    return [...Array.isArray(o.shots) ? o.shots : [], ...He()];
  }
  function R(m) {
    return !!m && Array.isArray(o.shots) && o.shots.includes(m);
  }
  function ae(m) {
    return !!m && Array.isArray(o.stickers) && o.stickers.includes(m);
  }
  function me() {
    var m;
    return Array.isArray((m = o.painting) == null ? void 0 : m.raster_objects) ? o.painting.raster_objects : [];
  }
  function Ne(m) {
    const p = G(m);
    if (!p) return null;
    const L = me().find((H) => String((H == null ? void 0 : H.id) || "").trim() === p);
    return !L || String((L == null ? void 0 : L.layerKind) || "paint") !== "paint" ? null : {
      ...L,
      id: ie(p),
      type: "rasterObject",
      rasterObjectId: p
    };
  }
  function Te(m) {
    if (!m || typeof m != "object" || String(m.type || "") !== "rasterObject") return !1;
    const p = G(m.rasterObjectId || m.id || "");
    return !!p && !!Ne(ie(p));
  }
  function oe(m) {
    const p = j(m), L = String(p.actionGroupId || "").trim();
    if (!L) return null;
    const H = S().find((k) => String((k == null ? void 0 : k.id) || (k == null ? void 0 : k.actionGroupId) || "") === L || String((k == null ? void 0 : k.actionGroupId) || "") === L);
    return H ? {
      ...H,
      id: te("paint", L),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: L
    } : null;
  }
  function Ae(m) {
    if (!m || typeof m != "object" || String(m.type || "") !== "strokeGroup") return !1;
    const p = String(m.actionGroupId || "").trim(), L = String(m.layerKind || "paint").trim() || "paint";
    return !!p && !!oe(te(L, p));
  }
  function x(m, p = null) {
    const L = j(m, p), H = String(L.actionGroupId || "").trim();
    return H ? f(L.layerKind).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() === H) : [];
  }
  function N(m, p = "paint") {
    const L = String(m || "").trim(), k = `geomv5:${String(p || "paint").trim() || "paint"}:${L}:${r.mode}:${h()}`;
    if (r.mode === "frame") {
      const ee = l(), _e = String((ee == null ? void 0 : ee.id) || ""), pe = ee ? u(ee) : null;
      return `${k}:frame:${_e}:${Math.round(Number((ee == null ? void 0 : ee.yaw_deg) || 0) * 1e3)}:${Math.round(Number((ee == null ? void 0 : ee.pitch_deg) || 0) * 1e3)}:${Math.round(Number((ee == null ? void 0 : ee.roll_deg) ?? (ee == null ? void 0 : ee.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((ee == null ? void 0 : ee.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((ee == null ? void 0 : ee.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((pe == null ? void 0 : pe.x) || 0))}:${Math.round(Number((pe == null ? void 0 : pe.y) || 0))}:${Math.round(Number((pe == null ? void 0 : pe.w) || 0))}:${Math.round(Number((pe == null ? void 0 : pe.h) || 0))}`;
    }
    return `${k}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function U(m, p, L) {
    return !m || typeof m != "object" ? m : {
      ...m,
      u: ((Number(m.u || 0) + Number(p || 0)) % 1 + 1) % 1,
      v: Fe(Number(m.v || 0) + Number(L || 0), 0, 1)
    };
  }
  function ue(m, p) {
    let L = Number(m || 0) - Number(p || 0);
    for (; L > 0.5; ) L -= 1;
    for (; L < -0.5; ) L += 1;
    return L;
  }
  function M(m, p = null, L = null) {
    var Oe;
    const H = j(m, p), k = Array.isArray(L) ? L : x(H.actionGroupId, H.layerKind), ee = [];
    if (k.forEach((C) => {
      const ye = (C == null ? void 0 : C.geometry) || null, Ie = (ye == null ? void 0 : ye.geometryKind) === "lasso_fill" ? ye == null ? void 0 : ye.points : (ye == null ? void 0 : ye.processedPoints) || (ye == null ? void 0 : ye.rawPoints) || (ye == null ? void 0 : ye.points) || [];
      Array.isArray(Ie) && ee.push(...Ie);
    }), !ee.length) return { u: 0.5, v: 0.5 };
    const _e = Number(((Oe = ee[0]) == null ? void 0 : Oe.u) || 0);
    let pe = 0, Le = 0;
    return ee.forEach((C) => {
      pe += _e + ue(Number((C == null ? void 0 : C.u) || 0), _e), Le += Number((C == null ? void 0 : C.v) || 0);
    }), {
      u: (pe / ee.length % 1 + 1) % 1,
      v: Fe(Le / ee.length, 0, 1)
    };
  }
  function Z(m, p, L = 1, H = 0) {
    if (!m || typeof m != "object") return m;
    const k = Number((p == null ? void 0 : p.u) || 0), ee = Number((p == null ? void 0 : p.v) || 0), _e = ue(Number(m.u || 0), k), pe = Number(m.v || 0) - ee, Le = Number(H || 0) * Mr, Oe = Math.cos(Le), C = Math.sin(Le), ye = Math.max(0.02, Number(L || 1)), Ie = (_e * Oe - pe * C) * ye, De = (_e * C + pe * Oe) * ye;
    return {
      ...m,
      u: ((k + Ie) % 1 + 1) % 1,
      v: Fe(ee + De, 0, 1)
    };
  }
  function re(m, p, L, H = null, k = null, ee = null) {
    const _e = j(m, k), pe = String(_e.actionGroupId || "").trim();
    if (!pe) return !1;
    const Le = f(_e.layerKind), Oe = Array.isArray(H) ? new Map(H.map((ye) => [String((ye == null ? void 0 : ye.id) || ""), ye])) : null;
    let C = !1;
    if (Le.forEach((ye) => {
      if (String((ye == null ? void 0 : ye.actionGroupId) || "").trim() !== pe) return;
      const Ie = (Oe == null ? void 0 : Oe.get(String((ye == null ? void 0 : ye.id) || ""))) || ye, De = ye == null ? void 0 : ye.geometry, Be = Ie == null ? void 0 : Ie.geometry;
      !De || !Be || (Array.isArray(Be.points) && (De.points = Be.points.map((Ue) => U(Ue, p, L)), C = !0), Array.isArray(Be.rawPoints) && (De.rawPoints = Be.rawPoints.map((Ue) => U(Ue, p, L)), C = !0), Array.isArray(Be.processedPoints) && (De.processedPoints = Be.processedPoints.map((Ue) => U(Ue, p, L)), C = !0));
    }), C && ee) {
      const ye = S().find((Ie) => String((Ie == null ? void 0 : Ie.actionGroupId) || "") === pe);
      ye && (ye.frame = null);
    }
    return C;
  }
  function I(m, p = 1, L = 0, H = null, k = null, ee = null) {
    const _e = j(m, k), pe = String(_e.actionGroupId || "").trim();
    if (!pe) return !1;
    const Le = f(_e.layerKind), Oe = Array.isArray(H) ? H : x(pe, _e.layerKind), C = Array.isArray(Oe) ? new Map(Oe.map((De) => [String((De == null ? void 0 : De.id) || ""), De])) : null, ye = (ee == null ? void 0 : ee.centerUv) ?? M(pe, _e.layerKind, Oe);
    let Ie = !1;
    if (Le.forEach((De) => {
      if (String((De == null ? void 0 : De.actionGroupId) || "").trim() !== pe) return;
      const Be = (C == null ? void 0 : C.get(String((De == null ? void 0 : De.id) || ""))) || De, Ue = De == null ? void 0 : De.geometry, Ke = Be == null ? void 0 : Be.geometry;
      !Ue || !Ke || (Array.isArray(Ke.points) && (Ue.points = Ke.points.map((Qe) => Z(Qe, ye, p, L)), Ie = !0), Array.isArray(Ke.rawPoints) && (Ue.rawPoints = Ke.rawPoints.map((Qe) => Z(Qe, ye, p, L)), Ie = !0), Array.isArray(Ke.processedPoints) && (Ue.processedPoints = Ke.processedPoints.map((Qe) => Z(Qe, ye, p, L)), Ie = !0));
    }), Ie && ee) {
      const De = S().find((Be) => String((Be == null ? void 0 : Be.actionGroupId) || "") === pe);
      De && (De.frame = null);
    }
    return Ie;
  }
  function E(m, p, L, H = null) {
    const k = G(m);
    if (!k) return !1;
    const ee = me().find((C) => String((C == null ? void 0 : C.id) || "").trim() === k);
    if (!ee) return !1;
    const _e = H && typeof H == "object" ? H : ee, pe = (_e == null ? void 0 : _e.transform) || {}, Le = Number(pe.du || 0) + Number(p || 0), Oe = Fe(Number(pe.dv || 0) + Number(L || 0), -1, 1);
    return ee.transform || (ee.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), ee.transform.du = Le, ee.transform.dv = Oe, !0;
  }
  function F(m, p = 1, L = null) {
    const H = G(m);
    if (!H) return !1;
    const k = me().find((Oe) => String((Oe == null ? void 0 : Oe.id) || "").trim() === H);
    if (!k) return !1;
    const ee = L && typeof L == "object" ? L : k, _e = (ee == null ? void 0 : ee.transform) || {}, pe = Math.max(0.01, Number(_e.scale || 1)), Le = Fe(pe * Math.max(0.01, Number(p || 1)), 0.01, 100);
    return k.transform || (k.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), k.transform.scale = Le, !0;
  }
  function B() {
    return K();
  }
  function Y(m) {
    var p;
    return !m || typeof m != "object" ? !1 : a ? ((p = m.source) == null ? void 0 : p.kind) === "port" : String(m.id || "") === of || String(m.source_kind || "") === jC;
  }
  function Q(m) {
    return !!(m && typeof m == "object" && m.visible === !1);
  }
  function V(m) {
    return Y(m) && Q(m) ? y0 : 1;
  }
  function ne(m, p, L = 1, H = 0) {
    if (!m || typeof m != "object") return m;
    const k = Number((p == null ? void 0 : p.u) || 0), ee = Number((p == null ? void 0 : p.v) || 0), _e = ue(Number(m.u || 0), k), pe = Number(m.v || 0) - ee, Le = Math.max(0.02, Number(L || 1)), Oe = Number(H || 0) * Mr, C = Math.cos(Oe), ye = Math.sin(Oe), Ie = _e / Le, De = pe / Le, Be = Ie * C + De * ye, Ue = -Ie * ye + De * C;
    return {
      ...m,
      u: ((k + Be) % 1 + 1) % 1,
      v: ee + Ue
    };
  }
  function Pe(m) {
    const p = (m == null ? void 0 : m.bbox) || null, L = (m == null ? void 0 : m.transform) || {};
    return p ? {
      u: (((Number(p.u0 || 0) + Number(p.u1 || 0)) * 0.5 + Number(L.du || 0)) % 1 + 1) % 1,
      v: Fe((Number(p.v0 || 0) + Number(p.v1 || 0)) * 0.5 + Number(L.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Re(m) {
    var Le, Oe, C, ye;
    const p = (m == null ? void 0 : m.bbox) || null;
    if (!p) return [];
    const L = {
      u: (Number(p.u0 || 0) + Number(p.u1 || 0)) * 0.5,
      v: (Number(p.v0 || 0) + Number(p.v1 || 0)) * 0.5
    }, H = Math.max(0.01, Number(((Le = m == null ? void 0 : m.transform) == null ? void 0 : Le.scale) || 1)), k = Number(((Oe = m == null ? void 0 : m.transform) == null ? void 0 : Oe.rot_deg) || 0), ee = Number(((C = m == null ? void 0 : m.transform) == null ? void 0 : C.du) || 0), _e = Number(((ye = m == null ? void 0 : m.transform) == null ? void 0 : ye.dv) || 0);
    return [
      { u: Number(p.u0 || 0), v: Number(p.v0 || 0) },
      { u: Number(p.u1 || 0), v: Number(p.v0 || 0) },
      { u: Number(p.u1 || 0), v: Number(p.v1 || 0) },
      { u: Number(p.u0 || 0), v: Number(p.v1 || 0) }
    ].map((Ie) => U(Z(Ie, L, H, k), ee, _e));
  }
  function le(m) {
    const p = G((m == null ? void 0 : m.rasterObjectId) || (m == null ? void 0 : m.id) || ""), L = (m == null ? void 0 : m.transform) || {}, H = (m == null ? void 0 : m.bbox) || {}, k = `${p}:${r.mode}:${h()}:${H.u0}:${H.v0}:${H.u1}:${H.v1}:${L.du}:${L.dv}:${L.rot_deg}:${L.scale}`;
    if (r.mode === "frame") {
      const ee = l(), _e = ee ? u(ee) : null;
      return `${k}:frame:${String((ee == null ? void 0 : ee.id) || "")}:${Math.round(Number((_e == null ? void 0 : _e.x) || 0))}:${Math.round(Number((_e == null ? void 0 : _e.y) || 0))}:${Math.round(Number((_e == null ? void 0 : _e.w) || 0))}:${Math.round(Number((_e == null ? void 0 : _e.h) || 0))}`;
    }
    return `${k}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function ve(m) {
    const p = String((m == null ? void 0 : m.id) || ""), L = R(m) ? "frame" : ae(m) ? "sticker" : "item", H = D(m), k = [
      L,
      p,
      r.mode,
      Number((H == null ? void 0 : H.yaw_deg) || 0).toFixed(4),
      Number((H == null ? void 0 : H.pitch_deg) || 0).toFixed(4),
      Number((H == null ? void 0 : H.hFOV_deg) || 0).toFixed(4),
      Number((H == null ? void 0 : H.vFOV_deg) || 0).toFixed(4),
      Number((H == null ? void 0 : H.rot_deg) || 0).toFixed(4),
      Number((H == null ? void 0 : H.roll_deg) || 0).toFixed(4),
      zr(H),
      P(m) && b(m)
    ].join(":");
    if (r.mode === "frame") {
      const ee = l(), _e = ee ? u(ee) : null;
      return `${k}:frame:${String((ee == null ? void 0 : ee.id) || "")}:${Math.round(Number((_e == null ? void 0 : _e.x) || 0))}:${Math.round(Number((_e == null ? void 0 : _e.y) || 0))}:${Math.round(Number((_e == null ? void 0 : _e.w) || 0))}:${Math.round(Number((_e == null ? void 0 : _e.h) || 0))}`;
    }
    return `${k}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function we() {
    A().forEach((p, L) => {
      p.type === "sticker" && p.item && (p.item.z_index = L), p.type === "strokeGroup" && p.item && (p.item.z_index = L), p.type === "rasterObject" && p.item && (p.item.z_index = L);
    });
  }
  return {
    connect(m) {
      ({
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: d,
        getFrameViewRect: u,
        getPaintingLayerList: f,
        getPaintingRevisionKey: h,
        getSelected: g,
        sceneStickerShown: b
      } = m);
    },
    getList: _,
    skyStickers: v,
    isSceneSticker: P,
    isUploadingSticker: W,
    poseOf: D,
    writePose: O,
    getPaintingGroupList: S,
    makeStrokeGroupSelectionId: te,
    makeRasterObjectSelectionId: ie,
    parseRasterObjectSelectionId: G,
    ensurePaintingGroupEntry: ce,
    getFrameCornersUv: Se,
    ensureGroupFrame: X,
    getDisplayListObjects: A,
    getOrderedPaintGroupIds: T,
    getOrderedDisplayListObjects: de,
    getSelectableStrokeGroupItems: he,
    getSelectableRasterObjectItems: xe,
    cutoutStickers: He,
    getCutoutSelectableItems: se,
    isShotItem: R,
    isStickerItem: ae,
    getRasterObjectList: me,
    getRasterObjectItem: Ne,
    isRasterObjectItem: Te,
    getStrokeGroupItem: oe,
    isStrokeGroupItem: Ae,
    getStrokeGroupStrokes: x,
    getStrokeGeomCacheKey: N,
    shortestWrappedDelta: ue,
    getStrokeGroupCenterUv: M,
    applyStrokeGroupOffset: re,
    applyStrokeGroupTransform: I,
    applyRasterObjectOffset: E,
    applyRasterObjectTransform: F,
    getNextStickerZIndex: B,
    isExternalSticker: Y,
    isStickerHidden: Q,
    getStickerDisplayAlpha: V,
    inverseTransformErpPointAround: ne,
    getRasterObjectCenterUv: Pe,
    getRasterObjectTransformedErpPoints: Re,
    getRasterObjectGeomCacheKey: le,
    getSceneItemGeomCacheKey: ve,
    normalizeDisplayZIndices: we
  };
}
function NI(e) {
  const {
    editor: t,
    readOnly: n,
    runtime: r,
    sceneV2: i,
    shotEditor: o,
    state: a,
    timeline: s,
    type: l
  } = e;
  let d, u, f, h, g, b, _, v, P, W, D, O, S, $, z, te, ie, G, j, K, ce, Se, be, ge, X, A, T, de, he, xe, He, se;
  function R() {
    const m = String(t.selectedId || "");
    if (!m) return null;
    const p = S(m);
    if (p) return p;
    const L = W(m);
    return L || (o ? b().find((H) => String((H == null ? void 0 : H.id) || "") === m) || null : v().find((H) => String((H == null ? void 0 : H.id) || "") === m) || null);
  }
  function ae() {
    const m = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], p = [], L = /* @__PURE__ */ new Set();
    return m.forEach((H) => {
      const k = String(H || "").trim();
      if (!k || L.has(k)) return;
      L.add(k);
      const ee = k === String(t.selectedId || "") ? R() : S(k) || W(k) || (o ? b().find((_e) => String((_e == null ? void 0 : _e.id) || "") === k) : v().find((_e) => String((_e == null ? void 0 : _e.id) || "") === k));
      ee && p.push(ee);
    }), p;
  }
  function me(m = null) {
    const p = Array.isArray(m) ? m : ae();
    if (!p || p.length < 2) return null;
    const L = p.map((Oe) => ge(Oe)).filter((Oe) => (Oe == null ? void 0 : Oe.visible) && Array.isArray(Oe.corners) && Oe.corners.length);
    if (!L.length) return null;
    const H = L.flatMap((Oe) => Oe.corners.map((C) => Number((C == null ? void 0 : C.x) || 0))), k = L.flatMap((Oe) => Oe.corners.map((C) => Number((C == null ? void 0 : C.y) || 0))), ee = Math.min(...H), _e = Math.max(...H), pe = Math.min(...k), Le = Math.max(...k);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (ee + _e) * 0.5, y: (pe + Le) * 0.5 },
      corners: [
        { x: ee, y: pe },
        { x: _e, y: pe },
        { x: _e, y: Le },
        { x: ee, y: Le }
      ],
      edgeMidpoints: [
        { edge: "top", x: (ee + _e) * 0.5, y: pe, a: { x: ee, y: pe }, b: { x: _e, y: pe } },
        { edge: "right", x: _e, y: (pe + Le) * 0.5, a: { x: _e, y: pe }, b: { x: _e, y: Le } },
        { edge: "bottom", x: (ee + _e) * 0.5, y: Le, a: { x: _e, y: Le }, b: { x: ee, y: Le } },
        { edge: "left", x: ee, y: (pe + Le) * 0.5, a: { x: ee, y: Le }, b: { x: ee, y: pe } }
      ],
      rotateStemBase: { x: (ee + _e) * 0.5, y: pe },
      rotateHandle: { x: (ee + _e) * 0.5, y: pe - 30 }
    };
  }
  function Ne(m) {
    const p = String((m == null ? void 0 : m.id) || "").trim();
    return !!p && Array.isArray(t.selectedIds) && t.selectedIds.includes(p);
  }
  function Te() {
    const m = R();
    return m ? ce(m) || te(m) ? "stroke" : G(m) ? "frame" : "image" : null;
  }
  function oe(m) {
    if (!m || typeof m != "object") return !1;
    if (ce(m)) {
      const p = String(m.actionGroupId || m.id || "").trim(), L = P().find((H) => String((H == null ? void 0 : H.actionGroupId) || (H == null ? void 0 : H.id) || "").trim() === p);
      return (L == null ? void 0 : L.locked) === !0;
    }
    if (te(m)) {
      const p = A(m.rasterObjectId || m.id || ""), L = D().find((H) => String((H == null ? void 0 : H.id) || "").trim() === p);
      return (L == null ? void 0 : L.locked) === !0;
    }
    return m.locked === !0;
  }
  function Ae(m = null) {
    const p = Array.isArray(m) ? m : ae();
    return p.length > 0 && p.every((L) => oe(L));
  }
  function x(m, p) {
    const L = p === !0;
    if (!m || typeof m != "object") return !1;
    if (ce(m)) {
      const H = String(m.actionGroupId || m.id || "").trim(), k = P().find((ee) => String((ee == null ? void 0 : ee.actionGroupId) || (ee == null ? void 0 : ee.id) || "").trim() === H);
      return !k || k.locked === L ? !1 : (k.locked = L, !0);
    }
    if (te(m)) {
      const H = A(m.rasterObjectId || m.id || ""), k = D().find((ee) => String((ee == null ? void 0 : ee.id) || "").trim() === H);
      return !k || k.locked === L ? !1 : (k.locked = L, !0);
    }
    return m.locked === L ? !1 : (m.locked = L, !0);
  }
  function N() {
    if (n) return;
    const m = ae();
    if (!m.length) return;
    const p = !Ae(m);
    let L = !1;
    m.forEach((H) => {
      x(H, p) && (L = !0);
    }), L && (de(), u(), He(), se(), he());
  }
  function U(m) {
    ne(), s.selection = null, t.selectedId = (m == null ? void 0 : m.id) || null, t.selectedIds = m != null && m.id ? [m.id] : [], m && K(m) ? a.active.selected_sticker_id = m.id || null : a.active.selected_sticker_id = null, m && G(m) ? a.active.selected_shot_id = m.id || null : m ? G(m) || (a.active.selected_shot_id = a.active.selected_shot_id) : a.active.selected_shot_id = null;
  }
  function ue(m, p = null) {
    const L = [], H = /* @__PURE__ */ new Set();
    (Array.isArray(m) ? m : []).forEach((_e) => {
      const pe = String((_e == null ? void 0 : _e.id) || "").trim();
      !pe || H.has(pe) || (H.add(pe), L.push(pe));
    }), t.selectedIds = L, ne(), s.selection = null;
    const k = String(p || "").trim();
    t.selectedId = k && L.includes(k) ? k : L[L.length - 1] || null;
    const ee = R();
    a.active.selected_sticker_id = ee && K(ee) && ee.id || null, ee && G(ee) ? a.active.selected_shot_id = ee.id || null : L.length || (a.active.selected_shot_id = null);
  }
  function M() {
    const m = (Array.isArray(a.shots) ? a.shots : []).map((L, H) => ({
      kind: "frame",
      item: L,
      label: String((L == null ? void 0 : L.label) || `Frame ${H + 1}`)
    })), p = h().map((L, H) => {
      var ee, _e;
      const k = z(L) ? String(L.id || of) : String(((_e = (ee = a.assets) == null ? void 0 : ee[L.asset_id]) == null ? void 0 : _e.name) || L.asset_id || L.id || `Image ${H + 1}`);
      return {
        kind: "image",
        item: L,
        label: k
      };
    });
    return [...m, ...p];
  }
  function Z(m) {
    return m === "frame" ? Ye.camera : m === "stroke" ? Ye.paintbrush_vertical_tool : Ye.image;
  }
  function re(m) {
    return !m || !m.item ? {
      label: String((m == null ? void 0 : m.label) || ""),
      icon: null
    } : {
      label: String(m.label || ""),
      icon: Z(m.kind)
    };
  }
  function I() {
    if (n) return;
    const m = R();
    !m || !z(m) || (m.visible = j(m), le(), Se(), de(), u(), se(), He(), he());
  }
  function E() {
    if (n || l !== "stickers") return;
    const m = R();
    if (!m || !z(m)) return;
    const p = m.initial_pose;
    if (!p || typeof p != "object") return;
    m.yaw_deg = Number(p.yaw_deg ?? m.yaw_deg ?? 0), m.pitch_deg = Number(p.pitch_deg ?? m.pitch_deg ?? 0), m.hFOV_deg = Number(p.hFOV_deg ?? m.hFOV_deg ?? 30);
    const L = O(bl, () => {
      he();
    });
    L && (L.complete || L.naturalWidth || L.width) ? m.vFOV_deg = f(
      Number(p.hFOV_deg ?? m.hFOV_deg ?? 30),
      Number(L.naturalWidth || L.width || 1),
      Number(L.naturalHeight || L.height || 1)
    ) : m.vFOV_deg = Number(p.vFOV_deg ?? m.vFOV_deg ?? 30), m.rot_deg = Number(p.rot_deg ?? m.rot_deg ?? 0), de(), u(), se(), He(), he();
  }
  function F(m) {
    if (!m || !z(m)) return null;
    const p = m.initial_pose;
    if (!p || typeof p != "object") return null;
    const L = {
      yaw_deg: Number(p.yaw_deg ?? m.yaw_deg ?? 0),
      pitch_deg: Number(p.pitch_deg ?? m.pitch_deg ?? 0),
      hFOV_deg: Number(p.hFOV_deg ?? m.hFOV_deg ?? 30),
      vFOV_deg: Number(p.vFOV_deg ?? m.vFOV_deg ?? 30),
      rot_deg: Number(p.rot_deg ?? m.rot_deg ?? 0)
    }, H = O(bl, () => {
      he();
    });
    return H && (H.complete || H.naturalWidth || H.width) && (L.vFOV_deg = f(
      L.hFOV_deg,
      Number(H.naturalWidth || H.width || 1),
      Number(H.naturalHeight || H.height || 1)
    )), L;
  }
  function B() {
    const m = R();
    if (!m || !z(m)) return !1;
    const p = F(m);
    if (!p) return !1;
    const L = (H, k) => Math.abs(Number(H || 0) - Number(k || 0)) <= 1e-4;
    return !(L(m.yaw_deg, p.yaw_deg) && L(m.pitch_deg, p.pitch_deg) && L(m.hFOV_deg, p.hFOV_deg) && L(m.vFOV_deg, p.vFOV_deg) && L(m.rot_deg, p.rot_deg));
  }
  function Y(m = {}) {
    const L = m.preservePanelValues !== !1 ? T(R()) : null;
    L && (t.panelLastValues = {
      yaw_deg: Number(L.yaw_deg || 0),
      pitch_deg: Number(L.pitch_deg || 0),
      hFOV_deg: Number(L.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(L.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(L.rot_deg || 0),
      roll_deg: Number(L.roll_deg || 0),
      aspect_id: zr(L)
    }), t.selectedId = null, t.selectedIds = [], ne(), t.cutoutAspectOpen = !1, a.active.selected_sticker_id = null, a.active.selected_shot_id = null;
  }
  function Q() {
    return !i || !t.worldSelectedId ? null : a.stickers.find((m) => m.id === t.worldSelectedId && m.placement === "world") || null;
  }
  function V(m) {
    U(null), t.worldSelectedId = m, r.backgroundDirty = !0;
  }
  function ne() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, r.backgroundDirty = !0);
  }
  function Pe(m) {
    return !!m && !n && !m.locked;
  }
  function Re() {
    if (l !== "cutout") return;
    const m = g();
    m && (t.selectedId = String(m.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function le() {
    var p;
    const m = R();
    (ie(m) && !xe(m) || t.selectedId === jl && $() && !d() || Te() === "stroke" && !X()) && U(null), ((p = Q()) == null ? void 0 : p.visible) === !1 && ne();
  }
  function ve() {
    if (n) return;
    const m = ae();
    if (!R() || m.length === 0 || m.some((pe) => oe(pe))) return;
    be();
    const L = _(), H = new Set(m.map((pe) => K(pe) ? `sticker:${String(pe.id || "")}` : te(pe) ? `rasterObject:${A(pe.rasterObjectId || pe.id || "")}` : `strokeGroup:${String(pe.actionGroupId || pe.id || "")}`)), k = [], ee = [];
    if (L.forEach((pe) => {
      var Oe, C;
      const Le = pe.type === "sticker" ? `sticker:${String(((Oe = pe.item) == null ? void 0 : Oe.id) || "")}` : pe.type === "rasterObject" ? `rasterObject:${String(((C = pe.item) == null ? void 0 : C.id) || pe.id || "")}` : `strokeGroup:${String(pe.actionGroupId || "")}`;
      H.has(Le) ? k.push(pe) : ee.push(pe);
    }), !k.length || k[k.length - 1] === L[L.length - 1]) return;
    [...ee, ...k].forEach((pe, Le) => {
      pe.type === "sticker" && pe.item && (pe.item.z_index = Le), pe.type === "strokeGroup" && pe.item && (pe.item.z_index = Le), pe.type === "rasterObject" && pe.item && (pe.item.z_index = Le);
    }), Se(), de(), u(), He(), he();
  }
  function we() {
    if (n) return;
    const m = ae();
    if (!R() || m.length === 0 || m.some((pe) => oe(pe))) return;
    be();
    const L = _(), H = new Set(m.map((pe) => K(pe) ? `sticker:${String(pe.id || "")}` : te(pe) ? `rasterObject:${A(pe.rasterObjectId || pe.id || "")}` : `strokeGroup:${String(pe.actionGroupId || pe.id || "")}`)), k = [], ee = [];
    if (L.forEach((pe) => {
      var Oe, C;
      const Le = pe.type === "sticker" ? `sticker:${String(((Oe = pe.item) == null ? void 0 : Oe.id) || "")}` : pe.type === "rasterObject" ? `rasterObject:${String(((C = pe.item) == null ? void 0 : C.id) || pe.id || "")}` : `strokeGroup:${String(pe.actionGroupId || "")}`;
      H.has(Le) ? k.push(pe) : ee.push(pe);
    }), !k.length || k[0] === L[0]) return;
    [...k, ...ee].forEach((pe, Le) => {
      pe.type === "sticker" && pe.item && (pe.item.z_index = Le), pe.type === "strokeGroup" && pe.item && (pe.item.z_index = Le), pe.type === "rasterObject" && pe.item && (pe.item.z_index = Le);
    }), Se(), de(), u(), He(), he();
  }
  return {
    connect(m) {
      ({
        cameraShoots: d,
        commitAndRefreshNode: u,
        computeStickerVFov: f,
        cutoutStickers: h,
        getActiveCutoutShot: g,
        getCutoutSelectableItems: b,
        getDisplayListObjects: _,
        getList: v,
        getPaintingGroupList: P,
        getRasterObjectItem: W,
        getRasterObjectList: D,
        getStickerUiImage: O,
        getStrokeGroupItem: S,
        hasCamera: $,
        isExternalSticker: z,
        isRasterObjectItem: te,
        isSceneSticker: ie,
        isShotItem: G,
        isStickerHidden: j,
        isStickerItem: K,
        isStrokeGroupItem: ce,
        markObjectVisualsDirty: Se,
        normalizeDisplayZIndices: be,
        objectGeom: ge,
        paintingShown: X,
        parseRasterObjectSelectionId: A,
        poseOf: T,
        pushHistory: de,
        requestDraw: he,
        sceneStickerShown: xe,
        updateSelectionMenu: He,
        updateSidePanel: se
      } = m);
    },
    getSelected: R,
    getSelectedItems: ae,
    getMultiSelectionGeom: me,
    isItemSelected: Ne,
    getSelectedKind: Te,
    isItemLocked: oe,
    areAllSelectedItemsLocked: Ae,
    toggleSelectedLock: N,
    setSelectedItem: U,
    setSelectedItems: ue,
    getCutoutInspectorItems: M,
    getSelectionItemIcon: Z,
    getSelectionItemLabelData: re,
    toggleSelectedExternalStickerVisibility: I,
    restoreSelectedToInitialPose: E,
    canRestoreSelectedToInitial: B,
    clearSelection: Y,
    selectedWorldSticker: Q,
    selectWorldSticker: V,
    clearWorldSelection: ne,
    worldStickerEditable: Pe,
    applyInitialCutoutFocus: Re,
    releaseHiddenSelection: le,
    bringSelectedToFront: ve,
    sendSelectedToBack: we
  };
}
function AI(e) {
  const {
    backgroundCanvas: t,
    canvas: n,
    editor: r,
    state: i,
    studio: o
  } = e;
  let a, s, l, d, u, f, h = { key: [], projection: null };
  function g() {
    return o && a() && i.camera.projection === "erp";
  }
  function b() {
    const ae = te({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !ae || ae.length !== 4 ? !1 : ae[0].y >= ae[3].y;
  }
  function _() {
    return b0({ yaw_deg: r.viewYaw, pitch_deg: r.viewPitch, roll_deg: 0, hFOV_deg: r.viewFov }, n.width, n.height);
  }
  function v() {
    const R = [r.viewYaw, r.viewPitch, r.viewFov, n.width, n.height];
    return R.some((ae, me) => ae !== h.key[me]) && (h = { key: R, projection: _0(_(), n.width, n.height) }), h.projection;
  }
  function P(R) {
    const ae = v().project(R);
    return ae.z > 1e-4 ? ae : null;
  }
  function W(R, ae) {
    return v().ray(R, ae);
  }
  function D() {
    const R = n.width, ae = n.height, me = 2;
    if (R / Math.max(ae, 1) >= me) {
      const x = ae, N = x * me;
      return { x: (R - N) * 0.5, y: 0, w: N, h: x };
    }
    const Te = R, oe = Te / me;
    return { x: 0, y: (ae - oe) * 0.5, w: Te, h: oe };
  }
  function O(R) {
    return {
      lon: Math.atan2(R.x, R.z),
      lat: Math.asin(Fe(R.y, -1, 1))
    };
  }
  function S(R, ae = null) {
    const { lon: me, lat: Ne } = O(R), Te = D();
    let oe = Te.x + (me / (2 * Math.PI) + 0.5) * Te.w;
    const Ae = Te.y + (0.5 - Ne / Math.PI) * Te.h;
    if (ae !== null) {
      for (; oe - ae > Te.w / 2; ) oe -= Te.w;
      for (; oe - ae < -Te.w / 2; ) oe += Te.w;
    }
    return { x: oe, y: Ae, z: 1 };
  }
  function $(R) {
    const ae = d(R), me = Oo(
      Number(ae.yaw_deg || 0),
      Number(ae.pitch_deg || 0),
      Number(ae.rot_deg || ae.roll_deg || 0)
    ), Ne = Math.tan(Fe(Number(ae.hFOV_deg || 20), 0.1, 179) * 0.5 * Mr), Te = Math.tan(Fe(Number(ae.vFOV_deg || 20), 0.1, 179) * 0.5 * Mr);
    return {
      centerDir: me.fwd,
      right: me.right,
      up: me.up,
      tanX: Ne,
      tanY: Te
    };
  }
  function z(R, ae, me) {
    return iI(sm(sm(R.centerDir, lm(R.right, ae)), lm(R.up, me)));
  }
  function te(R) {
    const ae = $(R);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: Ne, v: Te }) => z(ae, Ne * ae.tanX, Te * ae.tanY));
  }
  function ie(R, ae, me) {
    const Ne = $(R), Te = (ae * 2 - 1) * Ne.tanX, oe = (1 - me * 2) * Ne.tanY;
    return z(Ne, Te, oe);
  }
  function G(R) {
    const ae = t.width / Math.max(1, n.width), me = t.height / Math.max(1, n.height);
    return { x: R.x * ae, y: R.y * me, w: R.w * ae, h: R.h * me };
  }
  function j(R, ae = null, me = null, Ne = null) {
    if (r.mode === "frame") {
      const Te = ae || s();
      if (!Te) return [];
      const oe = me || l(Te);
      return de(R, Te, oe);
    }
    return X(R, Ne);
  }
  function K(R, ae = null, me = null, Ne = null, Te = null) {
    if (!R) return null;
    if (r.mode === "unwrap") {
      const Ae = X([R], Te);
      return Ae[0] ? { x: Ae[0].x, y: Ae[0].y, z: 1 } : null;
    }
    const oe = Se(R);
    return oe ? u(oe, ae, me, Ne) : null;
  }
  function ce(R, ae) {
    if (!R || !ae) return null;
    const me = Number(ae.x || 0), Ne = Number(ae.y || 0);
    return ie(R, me, Ne);
  }
  function Se(R) {
    if (!R) return null;
    const ae = (Number(R.u || 0) - 0.5) * (2 * Math.PI), me = (0.5 - Number(R.v || 0)) * Math.PI, Ne = Math.cos(me);
    return Gl(Ne * Math.sin(ae), Math.sin(me), Ne * Math.cos(ae));
  }
  function be(R, ae) {
    if (!R || !ae) return null;
    const me = $(R), Ne = eu(ae, me.centerDir);
    if (!Number.isFinite(Ne) || Ne <= 1e-6) return null;
    const Te = eu(ae, me.right) / Ne, oe = eu(ae, me.up) / Ne;
    return {
      x: (Te / Math.max(1e-6, me.tanX) + 1) * 0.5,
      y: (1 - oe / Math.max(1e-6, me.tanY)) * 0.5
    };
  }
  function ge(R) {
    if (!Array.isArray(R) || R.length < 3) return [];
    if (r.mode === "unwrap") {
      const me = D();
      return R.map((Ne) => ({
        x: me.x + Number(Ne.u || 0) * me.w,
        y: me.y + Number(Ne.v || 0) * me.h
      }));
    }
    const ae = R.map((me) => P(Se(me))).filter(Boolean);
    return ae.every((me) => Number(me.z || 0) > 0) ? ae.map((me) => ({ x: Number(me.x || 0), y: Number(me.y || 0) })) : [];
  }
  function X(R, ae = null) {
    if (!Array.isArray(R) || R.length < 1) return [];
    if (r.mode === "unwrap") {
      const Ne = D();
      return R.map((Te) => {
        const oe = (Number(Te.u || 0) % 1 + 1) % 1, Ae = ae == null ? oe : Number(ae || 0) + f(oe, ae);
        return {
          x: Ne.x + Ae * Ne.w,
          y: Ne.y + Number(Te.v || 0) * Ne.h
        };
      });
    }
    const me = R.map((Ne) => P(Se(Ne))).filter(Boolean);
    return me.every((Ne) => Number(Ne.z || 0) > 0) ? me.map((Ne) => ({ x: Number(Ne.x || 0), y: Number(Ne.y || 0) })) : [];
  }
  function A(R, ae = 160) {
    if (!Array.isArray(R) || R.length < 3) return !1;
    for (let me = 0; me < R.length; me += 1) {
      const Ne = R[me], Te = R[(me + 1) % R.length];
      if (!Ne || !Te || !Number.isFinite(Ne.x) || !Number.isFinite(Ne.y) || !Number.isFinite(Te.x) || !Number.isFinite(Te.y) || Math.hypot(Number(Te.x) - Number(Ne.x), Number(Te.y) - Number(Ne.y)) > ae) return !1;
    }
    return !0;
  }
  function T(R, ae, me) {
    if (!Array.isArray(R) || R.length < 3 || !ae || !me) return [];
    const Ne = [];
    for (const Te of R) {
      const oe = Se(Te), Ae = be(ae, oe);
      if (!Ae) return [];
      Ne.push({
        x: Number(me.x || 0) + Number(Ae.x || 0) * Number(me.w || 0),
        y: Number(me.y || 0) + Number(Ae.y || 0) * Number(me.h || 0)
      });
    }
    return A(Ne, Math.max(80, Math.max(me.w, me.h) * 0.75)) ? Ne : [];
  }
  function de(R, ae, me) {
    if (!Array.isArray(R) || R.length < 1 || !ae || !me) return [];
    const Ne = [];
    for (const Te of R) {
      const oe = Se(Te), Ae = be(ae, oe);
      Ae && Ne.push({
        x: Number(me.x || 0) + Number(Ae.x || 0) * Number(me.w || 0),
        y: Number(me.y || 0) + Number(Ae.y || 0) * Number(me.h || 0)
      });
    }
    return Ne;
  }
  function he(R) {
    const ae = n.getBoundingClientRect();
    return {
      x: (R.clientX - ae.left) / ae.width * n.width,
      y: (R.clientY - ae.top) / ae.height * n.height
    };
  }
  function xe(R) {
    const ae = n.getBoundingClientRect();
    return {
      x: Number(R.clientX) - Number(ae.left || 0),
      y: Number(R.clientY) - Number(ae.top || 0)
    };
  }
  function He(R, ae = performance.now()) {
    if (r.mode === "unwrap") {
      const oe = D(), Ae = (R.x - oe.x) / Math.max(1, oe.w), x = (R.y - oe.y) / Math.max(1, oe.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (Ae % 1 + 1) % 1,
        v: Fe(x, 0, 1),
        t: Number(ae || 0)
      };
    }
    const me = W(R.x, R.y), { lon: Ne, lat: Te } = O(me);
    return {
      targetKind: "ERP_GLOBAL",
      u: (Ne / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Fe(0.5 - Te / Math.PI, 0, 1),
      t: Number(ae || 0)
    };
  }
  function se(R, ae, me = performance.now()) {
    const Ne = l(ae);
    if (!Ne) return null;
    const Te = {
      x: (Number(R.x) - Ne.x) / Math.max(1, Ne.w),
      y: (Number(R.y) - Ne.y) / Math.max(1, Ne.h)
    };
    if (Te.x < 0 || Te.x > 1 || Te.y < 0 || Te.y > 1) return null;
    const oe = ce(ae, Te);
    if (!oe) return null;
    const { lon: Ae, lat: x } = O(oe);
    return {
      targetKind: "ERP_GLOBAL",
      u: (Ae / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Fe(0.5 - x / Math.PI, 0, 1),
      t: Number(me || 0)
    };
  }
  return {
    connect(R) {
      ({
        cameraShoots: a,
        getActiveCutoutShot: s,
        getFrameViewRect: l,
        poseOf: d,
        projectSceneItemDir: u,
        shortestWrappedDelta: f
      } = R);
    },
    isErpCamera: g,
    currentViewCamera: _,
    currentViewProjection: v,
    projectDir: P,
    screenToWorldDir: W,
    getUnwrapRect: D,
    projectDirUnwrap: S,
    getStickerFrame: $,
    stickerDirFromFrame: z,
    stickerCornersDir: te,
    stickerSampleDir: ie,
    stickerCornerOrderSanity: b,
    projectEditorPoints: j,
    projectErpPointToEditor: K,
    frameLocalPointToWorldDir: ce,
    erpPointToWorldDir: Se,
    worldDirToFrameLocalPoint: be,
    projectLassoPointsToCurrentView: ge,
    projectErpLassoPointsToFrameRect: T,
    screenPos: he,
    screenPosCss: xe,
    screenPosToErpPoint: He,
    screenPosToFrameAsErpPoint: se,
    deviceRect: G
  };
}
function CI(e) {
  const {
    cameraV2: t,
    canvas: n,
    editor: r,
    state: i
  } = e;
  let o, a, s, l, d, u, f, h, g, b, _, v, P, W, D, O, S, $, z, te, ie, G, j, K, ce, Se, be, ge, X, A, T, de;
  function he(oe, Ae) {
    const x = String(oe.actionGroupId || oe.id || "").trim(), N = D(x, oe.layerKind), U = s(x, oe.layerKind, N), ue = (U == null ? void 0 : U.centerUv) || W(x, oe.layerKind, N), M = r.mode === "unwrap" ? Number((ue == null ? void 0 : ue.u) || 0) : null, Z = [], re = r.mode === "frame" ? l() : null, I = re ? f(re) : null;
    for (const le of N) {
      const ve = (le == null ? void 0 : le.geometry) || null, we = (ve == null ? void 0 : ve.geometryKind) === "lasso_fill" ? ve == null ? void 0 : ve.points : (ve == null ? void 0 : ve.processedPoints) || (ve == null ? void 0 : ve.rawPoints) || (ve == null ? void 0 : ve.points) || [], m = Se(we, re, I, M).filter((H) => Number.isFinite(H == null ? void 0 : H.x) && Number.isFinite(H == null ? void 0 : H.y));
      if (!m.length) continue;
      const p = d(String((le == null ? void 0 : le.toolKind) || "pen")), L = Nn[p] || Nn[Dr];
      Z.push({
        points: m,
        closed: String((ve == null ? void 0 : ve.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((le == null ? void 0 : le.size) || 10) * Math.max(0.1, Number((L == null ? void 0 : L.sizeScale) ?? 1)) + 10),
        layerKind: String((le == null ? void 0 : le.layerKind) || oe.layerKind || "paint")
      });
    }
    const E = be(ue, null, re, I, M);
    if (!E) {
      const le = { visible: !1, kind: "strokeGroup" };
      return r._strokeGeomCache.set(Ae, le), le;
    }
    const B = u(U).map((le) => be(le, E.x, re, I, M)).filter((le) => Number.isFinite(le == null ? void 0 : le.x) && Number.isFinite(le == null ? void 0 : le.y)).map((le) => ({ x: Number(le.x || 0), y: Number(le.y || 0) }));
    if (B.length < 4) {
      const le = { visible: !1, kind: "strokeGroup" };
      return r._strokeGeomCache.set(Ae, le), le;
    }
    const Y = (le, ve) => ({
      x: (Number((le == null ? void 0 : le.x) || 0) + Number((ve == null ? void 0 : ve.x) || 0)) * 0.5,
      y: (Number((le == null ? void 0 : le.y) || 0) + Number((ve == null ? void 0 : ve.y) || 0)) * 0.5,
      a: le,
      b: ve
    }), Q = Y(B[0], B[1]), V = Y(B[1], B[2]), ne = Y(B[2], B[3]), Pe = Y(B[3], B[0]), Re = {
      kind: "strokeGroup",
      center: { x: Number(E.x || 0), y: Number(E.y || 0) },
      corners: B,
      edgeMidpoints: [
        { edge: "top", ...Q },
        { edge: "right", ...V },
        { edge: "bottom", ...ne },
        { edge: "left", ...Pe }
      ],
      rotateStemBase: { x: Q.x, y: Q.y },
      rotateHandle: { x: Q.x, y: Q.y - 30 },
      strokePaths: Z,
      visible: !0
    };
    return r._strokeGeomCache.set(Ae, Re), Re;
  }
  function xe(oe, Ae) {
    const x = r.mode === "frame" ? l() : null, N = x ? f(x) : null, U = h(oe), ue = r.mode === "unwrap" ? Number((U == null ? void 0 : U.u) || 0) : null, M = be(U, null, x, N, ue), re = b(oe).map((B) => be(B, (M == null ? void 0 : M.x) ?? null, x, N, ue)).filter((B) => Number.isFinite(B == null ? void 0 : B.x) && Number.isFinite(B == null ? void 0 : B.y));
    if (!Array.isArray(re) || re.length < 4) {
      const B = { visible: !1, kind: "rasterObject" };
      return r._strokeGeomCache.set(Ae, B), B;
    }
    const I = re.slice(0, 4).map((B) => ({ x: Number((B == null ? void 0 : B.x) || 0), y: Number((B == null ? void 0 : B.y) || 0) })), F = {
      kind: "rasterObject",
      center: {
        x: I.reduce((B, Y) => B + Number(Y.x || 0), 0) / I.length,
        y: I.reduce((B, Y) => B + Number(Y.y || 0), 0) / I.length
      },
      corners: I,
      visible: !0
    };
    return r._strokeGeomCache.set(Ae, F), F;
  }
  function He(oe, Ae = null, x = null, N = null, U = {}) {
    if (r.mode === "frame") {
      const E = x || l(), F = N || f(E);
      if (!E || !F) return null;
      const B = E ? de(E, oe) : null;
      return B ? {
        x: Number(F.x || 0) + Number(B.x || 0) * Number(F.w || 0),
        y: Number(F.y || 0) + Number(B.y || 0) * Number(F.h || 0),
        z: 1
      } : null;
    }
    if (r.mode === "unwrap") return ce(oe, Ae);
    const ue = 1e-4, M = o().project(oe, ue);
    if (!Number.isFinite(M.z) || M.z <= ue && !(U != null && U.clipBehind)) return null;
    const Z = n.width, re = n.height, I = Math.max(Z, re) * 2;
    return {
      x: Fe(M.x, -I, Z + I),
      y: Fe(M.y, -I, re + I),
      z: Math.max(M.z, ue),
      rawZ: M.z,
      clipped: M.z <= ue
    };
  }
  function se(oe, Ae = []) {
    if (r.mode !== "pano" || te(oe)) return 1;
    const x = Ae.map((N) => Number((N == null ? void 0 : N.rawZ) ?? (N == null ? void 0 : N.z))).filter((N) => Number.isFinite(N));
    return x.length ? nI(0.035, 0.2, Math.min(...x)) : 1;
  }
  function R(oe) {
    if ($(oe) && !ge(oe)) return { visible: !1 };
    const Ae = j(oe), x = An(Number(Ae.yaw_deg || 0), Number(Ae.pitch_deg || 0)), N = r.mode === "frame" ? l() : null, U = N ? f(N) : null, ue = r.mode === "pano" && (te(oe) || z(oe)), M = ue ? { clipBehind: !0 } : null, Z = He(x, null, N, U, M);
    if (!Z) return { visible: !1 };
    const re = v(oe), E = X(oe).map((k) => He(k, Z.x, N, U, M)).filter((k) => Number.isFinite(k == null ? void 0 : k.x) && Number.isFinite(k == null ? void 0 : k.y));
    if (E.length < 4) return { visible: !1 };
    const F = A(re, 0, re.tanY), B = A(re, 0, re.tanY + Math.max(re.tanY * 0.43, 0.053)), Y = He(F, Z.x, N, U, M);
    if (!Y) return { visible: !1 };
    const Q = He(B, (Y == null ? void 0 : Y.x) ?? Z.x, N, U, M), V = ((Q == null ? void 0 : Q.x) ?? Y.x) - Y.x, ne = ((Q == null ? void 0 : Q.y) ?? Y.y) - Y.y, Pe = Math.hypot(V, ne) || 1, Re = {
      x: Y.x + V / Pe * 30,
      y: Y.y + ne / Pe * 30
    }, le = He(A(re, 0, re.tanY), Z.x, N, U, M), ve = He(A(re, re.tanX, 0), Z.x, N, U, M), we = He(A(re, 0, -re.tanY), Z.x, N, U, M), m = He(A(re, -re.tanX, 0), Z.x, N, U, M);
    if (!le || !ve || !we || !m) return { visible: !1 };
    const p = [
      Z,
      ...E,
      Y,
      Q,
      le,
      ve,
      we,
      m
    ];
    if (ue && !p.some((k) => Number((k == null ? void 0 : k.rawZ) ?? (k == null ? void 0 : k.z)) > 1e-4)) return { visible: !1 };
    const L = se(oe, p), H = [
      {
        edge: "top",
        x: le.x,
        y: le.y,
        a: { x: E[0].x, y: E[0].y },
        b: { x: E[1].x, y: E[1].y }
      },
      {
        edge: "right",
        x: ve.x,
        y: ve.y,
        a: { x: E[1].x, y: E[1].y },
        b: { x: E[2].x, y: E[2].y }
      },
      {
        edge: "bottom",
        x: we.x,
        y: we.y,
        a: { x: E[2].x, y: E[2].y },
        b: { x: E[3].x, y: E[3].y }
      },
      {
        edge: "left",
        x: m.x,
        y: m.y,
        a: { x: E[3].x, y: E[3].y },
        b: { x: E[0].x, y: E[0].y }
      }
    ];
    return {
      center: { x: Z.x, y: Z.y },
      corners: E.map((k) => ({ x: k.x, y: k.y })),
      edgeMidpoints: H,
      rotateStemBase: { x: Y.x, y: Y.y },
      rotateHandle: Re,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: L,
      visible: !0
    };
  }
  function ae(oe) {
    if (t && z(oe) && O()) return { visible: !1 };
    if (!G() && (ie(oe) || S(oe))) return { visible: !1 };
    if (ie(oe)) {
      const U = String(oe.actionGroupId || oe.id || "").trim(), ue = P(U, oe.layerKind), M = r._strokeGeomCache.get(ue);
      return M || (r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear(), he(oe, ue));
    }
    if (S(oe)) {
      const U = g(oe), ue = r._strokeGeomCache.get(U);
      return ue || (r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear(), xe(oe, U));
    }
    const Ae = _(oe), x = r._strokeGeomCache.get(Ae);
    if (x) return x;
    r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear();
    const N = R(oe);
    return r._strokeGeomCache.set(Ae, N), N;
  }
  function me(oe, Ae, x, N = null) {
    const U = [];
    for (let ue = 0; ue <= x; ue += 1) {
      const M = ue / x;
      let Z = 0, re = 0;
      Ae === 0 ? (Z = M, re = 0) : Ae === 1 ? (Z = 1, re = M) : Ae === 2 ? (Z = 1 - M, re = 1) : (Z = 0, re = 1 - M);
      const I = T(oe, Z, re), E = r.mode === "unwrap" ? ce(I, N) : K(I);
      E && U.push(E);
    }
    return U;
  }
  function Ne() {
    const oe = [...Array.isArray(i.shots) ? i.shots : []], Ae = [...a()].sort((x, N) => Number(x.z_index || 0) - Number(N.z_index || 0));
    return [...oe, ...Ae];
  }
  function Te() {
    const oe = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...a()].sort((x, N) => Number(N.z_index || 0) - Number(x.z_index || 0)), ...oe];
  }
  return {
    connect(oe) {
      ({
        currentViewProjection: o,
        cutoutStickers: a,
        ensureGroupFrame: s,
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: d,
        getFrameCornersUv: u,
        getFrameViewRect: f,
        getRasterObjectCenterUv: h,
        getRasterObjectGeomCacheKey: g,
        getRasterObjectTransformedErpPoints: b,
        getSceneItemGeomCacheKey: _,
        getStickerFrame: v,
        getStrokeGeomCacheKey: P,
        getStrokeGroupCenterUv: W,
        getStrokeGroupStrokes: D,
        isFreeSpaceView: O,
        isRasterObjectItem: S,
        isSceneSticker: $,
        isShotItem: z,
        isStickerItem: te,
        isStrokeGroupItem: ie,
        paintingShown: G,
        poseOf: j,
        projectDir: K,
        projectDirUnwrap: ce,
        projectEditorPoints: Se,
        projectErpPointToEditor: be,
        sceneStickerShown: ge,
        stickerCornersDir: X,
        stickerDirFromFrame: A,
        stickerSampleDir: T,
        worldDirToFrameLocalPoint: de
      } = oe);
    },
    projectSceneItemDir: He,
    objectGeom: ae,
    sampleStickerEdge: me,
    getCutoutSelectableItemsForDisplay: Ne,
    getCutoutSelectableItemsForHit: Te
  };
}
const ws = /* @__PURE__ */ new Map();
function II(e) {
  const {
    api: t,
    cutoutV2: n,
    editor: r,
    node: i,
    rasterErpCanvasCache: o,
    rasterImageAlphaCache: a,
    rasterImageCache: s,
    state: l
  } = e;
  let d, u, f, h, g, b, _, v, P, W, D, O, S, $, z, te, ie, G, j, K;
  function ce(M = r.interaction) {
    const Z = String((M == null ? void 0 : M.kind) || "");
    if (Z === "paint_stroke" || Z === "paint_lasso_fill" || Z === "move_stroke_group" || Z === "scale_stroke_group" || Z === "rotate_stroke_group" || Z === "move_raster_object" || Z === "scale_raster_object") return !0;
    if (Z === "move_multi") {
      const re = Array.isArray(M == null ? void 0 : M.strokeSnapshots) && M.strokeSnapshots.length > 0, I = Array.isArray(M == null ? void 0 : M.rasterSnapshots) && M.rasterSnapshots.length > 0;
      return re || I;
    }
    return !1;
  }
  function Se() {
    var Z, re, I, E;
    let M = null;
    try {
      const F = v(), B = ((E = (I = (re = (Z = r.paintEngine) == null ? void 0 : Z.getErpTarget) == null ? void 0 : re.call(Z, F)) == null ? void 0 : I.displayPaint) == null ? void 0 : E.canvas) || null;
      B && (M = {
        source: B,
        revision: `${P()}:${be()}`
      });
    } catch {
      M = null;
    }
    return M;
  }
  function be() {
    var E, F, B, Y, Q, V, ne;
    const M = r.interaction, Z = String((M == null ? void 0 : M.kind) || "");
    if (!ce(M)) return "";
    if (Z === "paint_stroke" || Z === "paint_lasso_fill") {
      const Pe = ((E = M == null ? void 0 : M.stroke) == null ? void 0 : E.geometry) || null, Re = String(((F = M == null ? void 0 : M.stroke) == null ? void 0 : F.layerKind) || ""), le = ((B = Pe == null ? void 0 : Pe.rawPoints) == null ? void 0 : B.length) ?? ((Y = Pe == null ? void 0 : Pe.points) == null ? void 0 : Y.length) ?? 0, ve = String((M == null ? void 0 : M._livePreviewToken) || "");
      return `_${Re || "paint"}_${Z}_live${ve}_${le}_${r.livePaintInteractionRevision}`;
    }
    const re = String(((Q = M == null ? void 0 : M.item) == null ? void 0 : Q.actionGroupId) || ""), I = String(((V = M == null ? void 0 : M.item) == null ? void 0 : V.rasterObjectId) || ((ne = M == null ? void 0 : M.item) == null ? void 0 : ne.id) || "");
    return `_${Z}_${re || I || "active"}_${r.livePaintInteractionRevision}`;
  }
  function ge(M, Z = null) {
    const re = String((M == null ? void 0 : M.rasterDataUrl) || "").trim();
    if (!re) return null;
    const I = s.get(re);
    if (I)
      return I.complete || I.width || I.naturalWidth, I;
    const E = new Image();
    return E.onload = () => {
      typeof Z == "function" && Z();
    }, E.src = re, s.set(re, E), E;
  }
  function X(M) {
    const Z = String((M == null ? void 0 : M.rasterDataUrl) || "").trim();
    if (!Z) return null;
    const re = a.get(Z);
    if (re) return re.ready ? re : null;
    const I = ge(M, () => {
      const ne = a.get(Z);
      ne && (ne.ready = !1), G({ localOnly: !0 });
    });
    if (!I || !(I.complete || I.width || I.naturalWidth)) return null;
    const E = Number(I.naturalWidth || I.width || 0), F = Number(I.naturalHeight || I.height || 0);
    if (E < 1 || F < 1) return null;
    const B = mn({ label: "editor.image-pixels" });
    B.width = E, B.height = F;
    const Y = B.getContext("2d", { willReadFrequently: !0 });
    if (!Y) return null;
    Y.clearRect(0, 0, E, F), Y.drawImage(I, 0, 0, E, F);
    const Q = Y.getImageData(0, 0, E, F).data, V = { canvas: B, width: E, height: F, alpha: Q, ready: !0 };
    return a.set(Z, V), V;
  }
  function A(M, Z) {
    if (!M || !Z) return null;
    const re = (M == null ? void 0 : M.bbox) || null;
    if (!re) return null;
    const I = (M == null ? void 0 : M.transform) || {}, E = {
      u: (Number(re.u0 || 0) + Number(re.u1 || 0)) * 0.5,
      v: (Number(re.v0 || 0) + Number(re.v1 || 0)) * 0.5
    }, F = {
      u: ((Number(Z.u || 0) - Number(I.du || 0)) % 1 + 1) % 1,
      v: Number(Z.v || 0) - Number(I.dv || 0)
    }, B = O(
      F,
      E,
      Number(I.scale || 1),
      Number(I.rot_deg || 0)
    ), Y = Number(re.u1 || 0) - Number(re.u0 || 0), Q = Number(re.v1 || 0) - Number(re.v0 || 0);
    if (!(Y > 1e-6) || !(Q > 1e-6)) return null;
    const V = K(Number(B.u || 0), Number(re.u0 || 0)) / Y, ne = (Number(B.v || 0) - Number(re.v0 || 0)) / Q;
    if (V < 0 || V > 1 || ne < 0 || ne > 1) return 0;
    const Pe = X(M);
    if (!Pe) return null;
    const Re = Fe(Math.floor(V * Pe.width), 0, Pe.width - 1), le = Fe(Math.floor(ne * Pe.height), 0, Pe.height - 1);
    return Number(Pe.alpha[(le * Pe.width + Re) * 4 + 3] || 0);
  }
  function T(M, Z, re, I = null) {
    if (!(Z != null && Z.visible) || !ei(re, Z.corners)) return !1;
    const E = I || j(re, performance.now()), F = A(M, E);
    return F === null ? !0 : F > 8;
  }
  function de() {
    var I, E, F, B, Y, Q, V, ne;
    const M = ((E = (I = r.paintEngine) == null ? void 0 : I.getErpTarget) == null ? void 0 : E.call(I, v(!1))) || null, Z = Math.max(1, Number(((F = M == null ? void 0 : M.descriptor) == null ? void 0 : F.width) || ((Y = (B = M == null ? void 0 : M.displayPaint) == null ? void 0 : B.canvas) == null ? void 0 : Y.width) || 2048)), re = Math.max(1, Number(((Q = M == null ? void 0 : M.descriptor) == null ? void 0 : Q.height) || ((ne = (V = M == null ? void 0 : M.displayPaint) == null ? void 0 : V.canvas) == null ? void 0 : ne.height) || 1024));
    return { width: Z, height: re };
  }
  function he() {
    var le, ve, we;
    const M = r.interaction;
    if ((M == null ? void 0 : M.kind) !== "paint_stroke") return null;
    const Z = (M == null ? void 0 : M.stroke) || null;
    if (!Z || String((Z == null ? void 0 : Z.layerKind) || "") !== "paint" || String((Z == null ? void 0 : Z.toolKind) || "") !== "eraser") return null;
    const re = h(), I = `${be()}:${re.width}:${re.height}`;
    if (((le = r._activePaintEraserPreviewInfo) == null ? void 0 : le.cacheKey) === I)
      return r._activePaintEraserPreviewInfo.value || null;
    const E = cn(Z), F = (E == null ? void 0 : E.geometry) || null;
    if (F && String(F.geometryKind || "") !== "lasso_fill") {
      const m = Array.isArray(F.rawPoints) && F.rawPoints.length ? F.rawPoints : Array.isArray(F.points) ? F.points : [];
      F.processedPoints = z(m, E.targetSpace, !0);
    }
    const B = u(re.width, re.height, { readback: !0 });
    if (!te(B, E, { w: re.width, h: re.height })) return null;
    const Y = ((we = (ve = B.ctx) == null ? void 0 : ve.getImageData(0, 0, re.width, re.height)) == null ? void 0 : we.data) || null;
    if (!Y) return null;
    let Q = re.width, V = re.height, ne = -1, Pe = -1;
    for (let m = 0; m < re.height; m += 1)
      for (let p = 0; p < re.width; p += 1)
        Y[(m * re.width + p) * 4 + 3] <= 8 || (p < Q && (Q = p), m < V && (V = m), p > ne && (ne = p), m > Pe && (Pe = m));
    if (ne < Q || Pe < V)
      return r._activePaintEraserPreviewInfo = { cacheKey: I, value: null }, null;
    const Re = {
      surface: B,
      bounds: { minX: Q, minY: V, maxX: ne, maxY: Pe },
      key: `${I}:${Q}:${V}:${ne}:${Pe}`
    };
    return r._activePaintEraserPreviewInfo = { cacheKey: I, value: Re }, r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), Re;
  }
  function xe() {
    r._activePaintEraserPreviewInfo = null, r._liveEraserPreviewCanvasCache = null;
  }
  function He(M, Z, re) {
    var I, E;
    if (!M) return null;
    if (M.type === "rasterObject" && ((I = M.item) != null && I.bbox)) {
      const F = M.item.bbox, B = ((E = M.item) == null ? void 0 : E.transform) || {}, Y = Number(F.u0 || 0) + Number(B.du || 0), Q = Number(F.u1 || 0) + Number(B.du || 0), V = Number(F.v0 || 0) + Number(B.dv || 0), ne = Number(F.v1 || 0) + Number(B.dv || 0);
      return {
        minX: Math.floor((Y % 1 + 1) % 1 * Z),
        maxX: Math.ceil((Q % 1 + 1) % 1 * Z),
        minY: Math.floor(Fe(V, 0, 1) * re),
        maxY: Math.ceil(Fe(ne, 0, 1) * re),
        wraps: Q - Y >= 1 || Y < 0 || Q > 1
      };
    }
    if (M.type === "strokeGroup") {
      const F = D(M.actionGroupId, "paint"), B = f(M.actionGroupId, "paint", F);
      if (!B) return null;
      const Y = B.centerUv.u - B.halfW, Q = B.centerUv.u + B.halfW, V = B.centerUv.v - B.halfH, ne = B.centerUv.v + B.halfH;
      return {
        minX: Math.floor((Y % 1 + 1) % 1 * Z),
        maxX: Math.ceil((Q % 1 + 1) % 1 * Z),
        minY: Math.floor(Fe(V, 0, 1) * re),
        maxY: Math.ceil(Fe(ne, 0, 1) * re),
        wraps: Q - Y >= 1 || Y < 0 || Q > 1
      };
    }
    return null;
  }
  function se(M, Z, re) {
    if (!M || !Z) return !1;
    const I = (B) => B.wraps ? [
      { minX: 0, maxX: B.maxX, minY: B.minY, maxY: B.maxY, wraps: !1 },
      { minX: B.minX, maxX: re - 1, minY: B.minY, maxY: B.maxY, wraps: !1 }
    ] : [B], E = I(M), F = I(Z);
    return E.some((B) => F.some((Y) => !(B.maxX < Y.minX || Y.maxX < B.minX || B.maxY < Y.minY || Y.maxY < B.minY)));
  }
  function R(M, Z, re) {
    var k, ee, _e, pe, Le, Oe, C;
    if (!M || !Z || !((k = re == null ? void 0 : re.surface) != null && k.canvas) || Z.type !== "rasterObject") return M;
    const I = Number(M.width || re.surface.canvas.width || 0), E = Number(M.height || re.surface.canvas.height || 0);
    if (I < 1 || E < 1) return M;
    const F = He(Z, I, E);
    if (F && !se(F, re.bounds, I)) return M;
    const B = String(((ee = Z.item) == null ? void 0 : ee.id) || Z.id || ""), Y = ((_e = Z.item) == null ? void 0 : _e.transform) || {}, Q = `${re.key}:${B}:${I}:${E}:${Number(Y.du || 0).toFixed(6)}:${Number(Y.dv || 0).toFixed(6)}:${Number(Y.rot_deg || 0).toFixed(3)}:${Number(Y.scale || 1).toFixed(4)}`, V = r._liveEraserPreviewCanvasCache instanceof Map ? r._liveEraserPreviewCanvasCache : r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (V.has(Q)) return V.get(Q);
    const ne = Fe(Math.floor(Number(((pe = re.bounds) == null ? void 0 : pe.minX) || 0)), 0, Math.max(0, I - 1)), Pe = Fe(Math.floor(Number(((Le = re.bounds) == null ? void 0 : Le.minY) || 0)), 0, Math.max(0, E - 1)), Re = Fe(Math.ceil(Number(((Oe = re.bounds) == null ? void 0 : Oe.maxX) || 0)), ne, Math.max(0, I - 1)), le = Fe(Math.ceil(Number(((C = re.bounds) == null ? void 0 : C.maxY) || 0)), Pe, Math.max(0, E - 1)), ve = Math.max(1, Re - ne + 1), we = Math.max(1, le - Pe + 1), m = u(I, E, { readback: !0 });
    m.ctx.clearRect(0, 0, I, E), m.ctx.drawImage(M, 0, 0);
    const p = m.ctx.getImageData(ne, Pe, ve, we);
    m.ctx.save(), m.ctx.globalCompositeOperation = "destination-out", m.ctx.drawImage(re.surface.canvas, 0, 0), m.ctx.restore();
    const L = m.ctx.getImageData(ne, Pe, ve, we);
    let H = !1;
    for (let ye = 0; ye < ve * we; ye += 1) {
      const Ie = p.data[ye * 4 + 3], De = L.data[ye * 4 + 3];
      if (Ie > De) {
        H = !0;
        break;
      }
    }
    return H ? (V.size > 64 && V.clear(), V.set(Q, m.canvas), m.canvas) : (V.set(Q, M), M);
  }
  function ae(M, Z = null) {
    const re = $((M == null ? void 0 : M.rasterObjectId) || (M == null ? void 0 : M.id) || ""), I = (M == null ? void 0 : M.bbox) || null;
    if (!re || !I) return null;
    const E = ge(M, Z);
    if (!E || !(E.complete || E.width || E.naturalWidth)) return null;
    const { width: F, height: B } = de(), Y = (M == null ? void 0 : M.transform) || {}, Q = [
      re,
      F,
      B,
      I.u0,
      I.v0,
      I.u1,
      I.v1,
      Y.du,
      Y.dv,
      Y.rot_deg,
      Y.scale,
      W()
    ].join(":"), V = o.get(Q);
    if (V) return V;
    o.size > 64 && o.clear();
    const ne = mn({ label: "editor.raster-erp" });
    ne.width = F, ne.height = B;
    const Pe = ne.getContext("2d");
    if (!Pe) return null;
    const Re = Number(I.u0 || 0) * F, le = Number(I.v0 || 0) * B, ve = Math.max(1, (Number(I.u1 || 0) - Number(I.u0 || 0)) * F), we = Math.max(1, (Number(I.v1 || 0) - Number(I.v0 || 0)) * B), m = Re + ve * 0.5 + Number(Y.du || 0) * F, p = le + we * 0.5 + Number(Y.dv || 0) * B, L = Number(Y.rot_deg || 0) * Mr, H = Math.max(0.01, Number(Y.scale || 1));
    for (const k of [-F, 0, F])
      Pe.save(), Pe.translate(m + k, p), Pe.rotate(L), Pe.scale(H, H), Pe.drawImage(E, -ve * 0.5, -we * 0.5, ve, we), Pe.restore();
    return o.set(Q, ne), ne;
  }
  async function me(M, Z) {
    const re = await new Promise((Y) => M.toBlob(Y, "image/png")), I = new FormData();
    I.append("image", re, Z), I.append("type", "input"), I.append("subfolder", "panorama_stickers"), I.append("overwrite", "1");
    const E = await t.fetchApi("/upload/image", { method: "POST", body: I });
    if (!E || E.status !== 200) throw new Error(`upload failed (${E == null ? void 0 : E.status})`);
    const F = await E.json(), B = String((F == null ? void 0 : F.name) || "").trim();
    if (!B) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: B,
      subfolder: String((F == null ? void 0 : F.subfolder) || "panorama_stickers"),
      storage: String((F == null ? void 0 : F.type) || "input")
    };
  }
  let Ne = null, Te = !1;
  function oe() {
    if (n) return !1;
    const M = cm(l.painting), { width: Z, height: re } = g();
    return ux(l.painting_layer, { paintCount: M.totalPaintCount, maskCount: M.totalMaskCount, width: Z, height: re, nodeId: String(i.id ?? "0") });
  }
  function Ae() {
    const M = String(i.id ?? "0"), Z = ws.get(M);
    if (Te && Z) return Z;
    const re = (async () => {
      var F, B, Y, Q, V, ne, Pe, Re, le, ve, we, m;
      const I = P(), E = cm(l.painting);
      if (E.totalPaintCount <= 0 && E.totalMaskCount <= 0) {
        l.painting_layer !== null && (l.painting_layer = null, Ne = I, d());
        return;
      }
      if (Ne !== I && !Te) {
        Te = !0;
        try {
          ie();
          const p = v(!1), L = ((B = (F = r.paintEngine) == null ? void 0 : F.getErpTarget) == null ? void 0 : B.call(F, p)) || null, H = ((Y = L == null ? void 0 : L.displayPaint) == null ? void 0 : Y.canvas) || null, k = ((Q = L == null ? void 0 : L.committedMask) == null ? void 0 : Q.canvas) || null, ee = Math.max(1, Number(((V = L == null ? void 0 : L.descriptor) == null ? void 0 : V.width) || (H == null ? void 0 : H.width) || (k == null ? void 0 : k.width) || 2048)), _e = Math.max(1, Number(((ne = L == null ? void 0 : L.descriptor) == null ? void 0 : ne.height) || (H == null ? void 0 : H.height) || (k == null ? void 0 : k.height) || 1024));
          (!H && E.totalPaintCount > 0 || !k && E.totalMaskCount > 0) && ((!r._paintLayerSyncBlankSurface || Number(((Pe = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Pe.width) || 0) !== ee || Number(((Re = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Re.height) || 0) !== _e) && (r._paintLayerSyncBlankSurface = u(ee, _e)), r._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, ee, _e));
          const pe = H || E.totalPaintCount > 0 && ((le = r._paintLayerSyncBlankSurface) == null ? void 0 : le.canvas) || null, Le = k || E.totalMaskCount > 0 && ((ve = r._paintLayerSyncBlankSurface) == null ? void 0 : ve.canvas) || null;
          if (!pe && !Le) return;
          let Oe = null, C = null;
          const ye = [];
          if (E.totalPaintCount > 0) {
            Oe = await me(pe, `pano_paint_${M}.png`);
            for (const Ie of p) {
              const De = String(Ie || "").trim();
              if (!De) continue;
              const Be = ((m = (we = r.paintEngine) == null ? void 0 : we.getGroupDisplayCanvas) == null ? void 0 : m.call(we, De)) || null;
              if (!Be) continue;
              const Ue = De.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ke = await me(Be, `pano_group_${M}_${Ue}.png`);
              Ke && ye.push({
                id: De,
                actionGroupId: De,
                image: Ke
              });
            }
          }
          E.totalMaskCount > 0 && (C = await me(Le, `pano_mask_${M}.png`)), I === P() && (l.painting_layer = {
            paint: Oe,
            mask: C,
            groups: ye,
            revision: I
          }, Ne = I, d());
        } catch (p) {
          throw p;
        } finally {
          Te = !1;
        }
      }
    })();
    return ws.set(M, re), re.finally(() => {
      ws.get(M) === re && ws.delete(M);
    }), re;
  }
  function x(M) {
    var B;
    const Z = ((B = r.paintEngine) == null ? void 0 : B.getMaskDisplayCanvas()) || null;
    if (!Z) return M;
    const re = `mask_display:${r.paintEngine.getMaskDisplayRevision()}`, I = M.reduce((Y, Q) => Math.max(Y, Number((Q == null ? void 0 : Q.zIndex) || 0)), -1), E = (Array.isArray(l.stickers) ? l.stickers : []).reduce((Y, Q) => Math.max(Y, Number((Q == null ? void 0 : Q.z_index) || 0)), -1), F = Math.max(I, E);
    return M.push({
      id: "mask_display",
      source: Z,
      revision: re,
      zIndex: F + 1,
      opacity: 1,
      visible: !0
    }), M;
  }
  function N() {
    var I, E;
    const M = _(!0), Z = he(), re = [];
    for (const F of M) {
      if ((F == null ? void 0 : F.type) === "strokeGroup") {
        const B = String(F.actionGroupId || F.id || "");
        if (!B) continue;
        const Y = ((E = (I = r.paintEngine) == null ? void 0 : I.getGroupDisplayCanvas) == null ? void 0 : E.call(I, B)) || null;
        if (!Y) continue;
        re.push({
          id: `paint_group:${B}`,
          source: Y,
          revision: `${b()}:${B}`,
          zIndex: Number((F == null ? void 0 : F.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((F == null ? void 0 : F.type) === "rasterObject") {
        const B = F.item || null, Y = $((B == null ? void 0 : B.id) || F.id || "");
        if (!Y) continue;
        const Q = ae(B, () => G());
        if (!Q) continue;
        const V = R(Q, F, Z), ne = (B == null ? void 0 : B.transform) || {};
        re.push({
          id: `raster:${Y}`,
          source: V,
          revision: [
            P(),
            (Z == null ? void 0 : Z.key) || "",
            Y,
            Number(ne.du || 0).toFixed(6),
            Number(ne.dv || 0).toFixed(6),
            Number(ne.rot_deg || 0).toFixed(3),
            Number(ne.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((F == null ? void 0 : F.z_index) || 0),
          opacity: 1,
          visible: (B == null ? void 0 : B.visible) !== !1
        });
      }
    }
    return x(re);
  }
  function U() {
    return S() ? N().filter((M) => M.visible !== !1).map((M) => ({ id: M.id, media: M.source, revision: M.revision, opacity: M.opacity, zIndex: M.zIndex })) : [];
  }
  function ue() {
    l.painting_layer !== null && (l.painting_layer = null), Ne = "";
  }
  return {
    connect(M) {
      ({
        commitState: d,
        createRasterSurface: u,
        ensureGroupFrame: f,
        getActivePaintTargetDescriptor: h,
        getDesiredPaintTargetDescriptor: g,
        getDisplayPaintRevisionKey: b,
        getOrderedDisplayListObjects: _,
        getOrderedPaintGroupIds: v,
        getPaintingCompositeRevisionKey: P,
        getPaintingRevisionKey: W,
        getStrokeGroupStrokes: D,
        inverseTransformErpPointAround: O,
        paintingShown: S,
        parseRasterObjectSelectionId: $,
        processFreehandPoints: z,
        rasterizeStrokeToSurface: te,
        rebuildPaintEngineIfNeeded: ie,
        requestDraw: G,
        screenPosToErpPoint: j,
        shortestWrappedDelta: K
      } = M);
    },
    getSharedLivePaintSurface: Se,
    getLivePaintRevisionSuffix: be,
    isPaintCompositeInteraction: ce,
    hitRasterObjectAt: T,
    invalidateLivePaintPreviewCaches: xe,
    buildRasterObjectEditCanvas: ae,
    needsPaintingLayerSync: oe,
    syncPaintingLayerAsync: Ae,
    invalidatePaintingLayerState: ue,
    buildEditorViewPaintLayers: U
  };
}
function EI(e) {
  const {
    editor: t,
    runtime: n,
    state: r
  } = e;
  let i, o, a, s;
  function l(se) {
    return !se || typeof se != "object" ? { x: 0, y: 0 } : { x: Number((se == null ? void 0 : se.u) || 0), y: Number((se == null ? void 0 : se.v) || 0) };
  }
  function d(se, R, ae, me = {}) {
    return { ...{
      ...se,
      t: Number((se == null ? void 0 : se.t) || 0),
      widthScale: h(se, "widthScale", 1),
      pressureLike: h(se, "pressureLike", 1)
    }, ...me, u: R, v: ae };
  }
  function u(se, R = !1) {
    return R ? 12e-4 : 18e-4;
  }
  function f(se, R, ae = !1) {
    if (!Array.isArray(se) || !se.length) return [];
    const me = String((R == null ? void 0 : R.kind) || "") === "ERP_GLOBAL", Ne = /* @__PURE__ */ new WeakMap();
    if (me) {
      let I = null;
      se.forEach((E) => {
        const F = Number((E == null ? void 0 : E.u) || 0), B = Number((E == null ? void 0 : E.v) || 0), Y = (F % 1 + 1) % 1, Q = I == null ? Y : I + s(Y, (I % 1 + 1) % 1);
        Ne.set(E, { x: Q, y: B }), I = Q;
      });
    }
    const Te = (I) => !I || typeof I != "object" ? { x: 0, y: 0 } : Ne.get(I) || l(I), oe = (I, E, F, B = {}) => {
      const Y = me ? (Number(E) % 1 + 1) % 1 : Number(E), Q = d(I, Y, F, B);
      return Ne.set(Q, { x: Number(E), y: Number(F) }), Q;
    }, Ae = (I, E, F) => {
      const B = Te(I), Y = Te(E);
      return oe(I, Wn(B.x, Y.x, F), Wn(B.y, Y.y, F), {
        t: Wn(Number((I == null ? void 0 : I.t) || 0), Number((E == null ? void 0 : E.t) || 0), F),
        widthScale: Wn(h(I, "widthScale", 1), h(E, "widthScale", 1), F),
        pressureLike: Wn(h(I, "pressureLike", 1), h(E, "pressureLike", 1), F)
      });
    };
    if (se.length === 1) {
      const I = Te(se[0]);
      return [oe(se[0], I.x, I.y)];
    }
    const x = u(R, ae), N = (I, E) => {
      const F = [0];
      for (let le = 1; le < I.length; le += 1) {
        const ve = Te(I[le - 1]), we = Te(I[le]);
        F.push(F[le - 1] + Math.hypot(we.x - ve.x, we.y - ve.y));
      }
      const B = F[F.length - 1] || 0;
      if (B <= 1e-8) {
        const le = I[0], ve = Te(le);
        return [oe(le, ve.x, ve.y)];
      }
      const Y = [];
      let Q = 0;
      for (let le = 0; le <= B + 1e-9; le += E) {
        for (; Q < F.length - 2 && F[Q + 1] < le; ) Q += 1;
        const ve = F[Q], we = F[Q + 1], m = Math.max(1e-8, we - ve);
        Y.push(Ae(I[Q], I[Q + 1], Fe((le - ve) / m, 0, 1)));
      }
      const V = I[I.length - 1], ne = Te(V), Pe = Y[Y.length - 1], Re = Pe ? Te(Pe) : null;
      return (!Re || Math.hypot(Re.x - ne.x, Re.y - ne.y) > E * 0.35) && Y.push(oe(V, ne.x, ne.y)), Y;
    }, U = (I) => {
      if (!Array.isArray(I) || I.length < 3) return I ? I.slice() : [];
      const E = Te(I[0]), F = [oe(I[0], E.x, E.y)];
      for (let Q = 0; Q < I.length - 1; Q += 1) {
        const V = I[Q], ne = I[Q + 1], Pe = Te(V), Re = Te(ne), le = oe(
          V,
          Pe.x * 0.75 + Re.x * 0.25,
          Pe.y * 0.75 + Re.y * 0.25,
          {
            t: Number(V.t || 0) * 0.75 + Number(ne.t || 0) * 0.25,
            widthScale: h(V, "widthScale", 1) * 0.75 + h(ne, "widthScale", 1) * 0.25,
            pressureLike: h(V, "pressureLike", 1) * 0.75 + h(ne, "pressureLike", 1) * 0.25
          }
        ), ve = oe(
          V,
          Pe.x * 0.25 + Re.x * 0.75,
          Pe.y * 0.25 + Re.y * 0.75,
          {
            t: Number(V.t || 0) * 0.25 + Number(ne.t || 0) * 0.75,
            widthScale: h(V, "widthScale", 1) * 0.25 + h(ne, "widthScale", 1) * 0.75,
            pressureLike: h(V, "pressureLike", 1) * 0.25 + h(ne, "pressureLike", 1) * 0.75
          }
        );
        F.push(le, ve);
      }
      const B = I[I.length - 1], Y = Te(B);
      return F.push(oe(B, Y.x, Y.y)), F;
    }, ue = N(se, x);
    if (ue.length < 3) return ue;
    const M = ae ? 2 : 1;
    let Z = ue.slice();
    for (let I = 0; I < M; I += 1) Z = U(Z);
    return N(Z, Math.max(x * 0.75, 55e-5));
  }
  function h(se, R, ae = 1) {
    const me = Number(se == null ? void 0 : se[R]);
    return Number.isFinite(me) ? Math.max(0, me) : ae;
  }
  function g(se) {
    const R = Number(se == null ? void 0 : se.radiusValue);
    if (Number.isFinite(R) && R > 0) {
      const ae = String((se == null ? void 0 : se.radiusModel) || "").trim() || "erp_uv_norm";
      return ae === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((se == null ? void 0 : se.size) || 10) * 0.5 / 2048)
      } : {
        model: ae,
        value: R
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((se == null ? void 0 : se.size) || 10) * 0.5 / 2048)
    };
  }
  function b(se, R, ae = {}) {
    const me = mn({ label: "editor.raster-surface" });
    me.width = Math.max(1, Math.round(se)), me.height = Math.max(1, Math.round(R));
    const Ne = me.getContext("2d", ae.readback ? { willReadFrequently: !0 } : void 0);
    return Ne && (Ne.clearRect(0, 0, me.width, me.height), Ne.imageSmoothingEnabled = !0), { canvas: me, ctx: Ne };
  }
  function _() {
    const se = G();
    return `${String(t.paintStrokeRevision)}:${se.width}x${se.height}`;
  }
  function v() {
    const se = G();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${se.width}x${se.height}`;
  }
  function P() {
    const se = i(), R = v();
    return se ? `${R}:${se}` : R;
  }
  function W() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function D() {
    t.paintCompositeRevision += 1;
  }
  function O() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function S() {
    var se, R;
    t.paintEngineRevisionKey = null, (R = (se = t.paintEngine) == null ? void 0 : se.rebuildCommitted) == null || R.call(se, r), t.paintEngineRevisionKey = _();
  }
  function $() {
    O(), n.backgroundDirty = !0, n.dirty = !0;
  }
  function z({ rebuildPaintEngine: se = !1 } = {}) {
    o(), W(), $(), se && S();
  }
  function te() {
    o(), D(), $();
  }
  function ie() {
    var me;
    const se = G(), R = `${se.width}x${se.height}`;
    t.paintEngineDescriptorKey !== R && (t.paintEngine = yd(se), t.paintEngineDescriptorKey = R, t.paintEngineRevisionKey = "");
    const ae = _();
    t.paintEngineRevisionKey !== ae && (t.paintEngineRevisionKey = ae, (me = t.paintEngine) == null || me.rebuildCommitted(r));
  }
  function G() {
    const se = Math.max(1, a(Number((r == null ? void 0 : r.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: se,
      height: Math.max(1, Math.round(se * 0.5))
    };
  }
  function j() {
    return G();
  }
  function K(se, R, ae, me, Ne = null) {
    const Te = g(se), oe = h(R, "widthScale", 1) * h(R, "pressureLike", 1);
    return Te.model === "erp_uv_norm" ? Math.max(0.5, Te.value * ae * oe) : Te.model === "world_angle" ? Ne ? Math.max(0.5, Te.value / Math.max(1e-6, Number(Ne.hFOV_deg || 90) * Mr) * ae * oe) : Math.max(0.5, Te.value / (2 * Math.PI) * ae * oe) : Math.max(0.5, Number((se == null ? void 0 : se.size) || 10) * 0.5 * oe);
  }
  function ce(se, R, ae = {}) {
    const me = String((R == null ? void 0 : R.layerKind) || "paint"), Ne = String((R == null ? void 0 : R.toolKind) || "pen"), Te = ae.preview === !0, oe = Te ? 0.78 : 1;
    if (se.globalAlpha = Ne === "marker" ? 0.7 * oe : 1, me === "mask") {
      se.fillStyle = Te ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (Ne === "eraser") {
      se.globalCompositeOperation = "destination-out", se.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const Ae = String((R == null ? void 0 : R.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (R == null ? void 0 : R.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, x = Te ? Math.max(0.28, Number(Ae.a ?? 1) * 0.88) : Math.max(0.12, Number(Ae.a ?? 1));
    se.fillStyle = `rgba(${Math.round(Number(Ae.r || 0) * 255)}, ${Math.round(Number(Ae.g || 0) * 255)}, ${Math.round(Number(Ae.b || 0) * 255)}, ${x})`;
  }
  function Se(se, R, ae) {
    const me = Math.max(0.5, Math.min(ae, Number((R == null ? void 0 : R.radiusPx) || 0.5)));
    !Number.isFinite(R == null ? void 0 : R.x) || !Number.isFinite(R == null ? void 0 : R.y) || !Number.isFinite(me) || (se.beginPath(), se.arc(Number(R.x || 0), Number(R.y || 0), me, 0, Math.PI * 2), se.fill());
  }
  function be(se, R, ae, me, Ne = {}) {
    if (!se || !Array.isArray(R) || !R.length) return;
    const Te = Math.max(me.w, me.h) * 0.25;
    se.save(), ce(se, ae, Ne);
    const oe = (Ae) => Se(se, Ae, Te);
    if (R.length === 1) {
      oe(R[0]), se.restore();
      return;
    }
    for (let Ae = 0; Ae < R.length - 1; Ae += 1) {
      const x = R[Ae], N = R[Ae + 1];
      if (!x || !N) continue;
      const U = Number(x.x || 0), ue = Number(x.y || 0), M = Number(N.x || 0), Z = Number(N.y || 0), re = Math.max(0.5, Math.min(Te, Number(x.radiusPx || 0.5))), I = Math.max(0.5, Math.min(Te, Number(N.radiusPx || 0.5)));
      if (!Number.isFinite(U) || !Number.isFinite(ue) || !Number.isFinite(M) || !Number.isFinite(Z) || !Number.isFinite(re) || !Number.isFinite(I)) continue;
      const E = M - U, F = Z - ue, B = Math.hypot(E, F);
      if (!Number.isFinite(B) || B < 1e-6) {
        oe(x);
        continue;
      }
      if (B > Math.max(me.w, me.h) * 0.5) continue;
      const Y = Math.max(0.5, Math.min(re, I)), Q = Math.max(0.35, Math.min(Y * 0.4, 2.25)), V = Math.max(1, Math.ceil(B / Q));
      for (let ne = 0; ne <= V; ne += 1) {
        const Pe = ne / V;
        oe({
          x: Wn(U, M, Pe),
          y: Wn(ue, Z, Pe),
          radiusPx: Wn(re, I, Pe)
        });
      }
    }
    oe(R[R.length - 1]), se.restore();
  }
  function ge(se, R, ae, me) {
    be(se, R, ae, me, { preview: !1 });
  }
  function X(se, R, ae, me, Ne) {
    var Ae, x, N, U;
    if (!se || !Array.isArray(R) || R.length < 3) return;
    const Te = "u", oe = "v";
    if (se.save(), String((ae == null ? void 0 : ae.layerKind) || "") === "mask")
      se.fillStyle = "rgba(255,255,255,1)";
    else if (String((ae == null ? void 0 : ae.toolKind) || "") === "eraser")
      se.globalCompositeOperation = "destination-out", se.fillStyle = "rgba(0,0,0,1)";
    else {
      const ue = (ae == null ? void 0 : ae.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      se.fillStyle = `rgba(${Math.round(Number(ue.r || 0) * 255)}, ${Math.round(Number(ue.g || 0) * 255)}, ${Math.round(Number(ue.b || 0) * 255)}, ${Number(ue.a ?? 1)})`;
    }
    se.beginPath(), se.moveTo(Number(((Ae = R[0]) == null ? void 0 : Ae[Te]) || 0) * me.w, Number(((x = R[0]) == null ? void 0 : x[oe]) || 0) * me.h);
    for (let ue = 1; ue < R.length; ue += 1)
      se.lineTo(Number(((N = R[ue]) == null ? void 0 : N[Te]) || 0) * me.w, Number(((U = R[ue]) == null ? void 0 : U[oe]) || 0) * me.h);
    se.closePath(), se.fill(), se.restore();
  }
  function A(se) {
    const R = (se == null ? void 0 : se.geometry) || null;
    return R ? String(R.geometryKind || "") === "lasso_fill" ? Array.isArray(R.points) ? R.points : [] : Array.isArray(R.processedPoints) && R.processedPoints.length ? R.processedPoints : Array.isArray(R.rawPoints) && R.rawPoints.length ? R.rawPoints : Array.isArray(R.points) ? R.points : [] : [];
  }
  function T(se, R) {
    const ae = A(se);
    return !Array.isArray(ae) || !ae.length ? [] : ae.map((me) => ({
      x: Number((me == null ? void 0 : me.u) || 0) * Number((R == null ? void 0 : R.w) || 1),
      y: Number((me == null ? void 0 : me.v) || 0) * Number((R == null ? void 0 : R.h) || 1),
      radiusPx: K(se, me, Number((R == null ? void 0 : R.w) || 1), Number((R == null ? void 0 : R.h) || 1))
    }));
  }
  function de(se, R, ae = null) {
    var Ae, x, N, U;
    if (!(se != null && se.ctx) || !R) return !1;
    const me = ae || { w: Number(((Ae = se.canvas) == null ? void 0 : Ae.width) || 0), h: Number(((x = se.canvas) == null ? void 0 : x.height) || 0) }, Ne = String((R == null ? void 0 : R.toolKind) || "") === "eraser" ? {
      ...R,
      layerKind: "mask",
      toolKind: String(((N = R == null ? void 0 : R.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : R;
    if (String(((U = R == null ? void 0 : R.geometry) == null ? void 0 : U.geometryKind) || "") === "lasso_fill")
      return X(se.ctx, A(Ne), Ne, me), !0;
    const oe = T(Ne, me);
    return oe.length ? (ge(se.ctx, oe, Ne, me), !0) : !1;
  }
  function he(se, R, ae, me = 8) {
    const Ne = new Uint8Array(R * ae), Te = [], oe = new Int32Array(R * ae), Ae = new Int32Array(R * ae);
    for (let x = 0; x < ae; x += 1)
      for (let N = 0; N < R; N += 1) {
        const U = x * R + N;
        if (Ne[U] || se[U] <= me) continue;
        let ue = 0, M = 0;
        oe[M] = N, Ae[M] = x, M += 1, Ne[U] = 1;
        const Z = [];
        let re = N, I = x, E = N, F = x;
        for (; ue < M; ) {
          const B = oe[ue], Y = Ae[ue];
          ue += 1, Z.push({ x: B, y: Y }), B < re && (re = B), Y < I && (I = Y), B > E && (E = B), Y > F && (F = Y);
          const Q = [
            [(B - 1 + R) % R, Y],
            [(B + 1) % R, Y],
            [B, Y - 1],
            [B, Y + 1]
          ];
          for (const [V, ne] of Q) {
            if (ne < 0 || ne >= ae) continue;
            const Pe = ne * R + V;
            Ne[Pe] || se[Pe] <= me || (Ne[Pe] = 1, oe[M] = V, Ae[M] = ne, M += 1);
          }
        }
        Te.push({ pixels: Z, minX: re, minY: I, maxX: E, maxY: F });
      }
    return Te;
  }
  function xe(se, R) {
    const ae = [...new Set((Array.isArray(se == null ? void 0 : se.pixels) ? se.pixels : []).map((x) => Number((x == null ? void 0 : x.x) || 0)).filter((x) => Number.isFinite(x)))].sort((x, N) => x - N);
    if (!ae.length) return null;
    if (ae.length === 1)
      return { startX: ae[0], widthPx: 1 };
    let me = -1, Ne = 0;
    for (let x = 0; x < ae.length; x += 1) {
      const N = ae[x], ue = (x === ae.length - 1 ? ae[0] + R : ae[x + 1]) - N - 1;
      ue > me && (me = ue, Ne = x);
    }
    const Te = (ae[(Ne + 1) % ae.length] + R) % R;
    let oe = 1 / 0, Ae = -1 / 0;
    for (const x of ae) {
      const N = (x - Te + R) % R;
      oe = Math.min(oe, N), Ae = Math.max(Ae, N);
    }
    return {
      startX: Te,
      widthPx: Math.max(1, Ae - oe + 1)
    };
  }
  function He(se, R, ae = {}) {
    var N;
    const me = Number((se == null ? void 0 : se.width) || 0), Ne = Number((se == null ? void 0 : se.height) || 0), Te = (N = se == null ? void 0 : se.getContext) == null ? void 0 : N.call(se, "2d");
    if (!Te || me < 1 || Ne < 1) return [];
    const oe = Te.getImageData(0, 0, me, Ne), Ae = new Uint8Array(me * Ne);
    for (let U = 0; U < Ae.length; U += 1) Ae[U] = oe.data[U * 4 + 3];
    return he(Ae, me, Ne, 8).map((U, ue) => {
      const M = xe(U, me);
      if (!M) return null;
      const Z = Number(M.widthPx || 0), re = U.maxY - U.minY + 1, I = Number(M.startX || 0), E = mn({ label: "editor.lasso-fill" });
      E.width = Z, E.height = re;
      const F = E.getContext("2d");
      if (!F) return null;
      const B = F.createImageData(Z, re);
      return U.pixels.forEach(({ x: Y, y: Q }) => {
        const V = (Q * me + Y) * 4, ne = (Number(Y || 0) - I + me) % me, Pe = ((Q - U.minY) * Z + ne) * 4;
        B.data[Pe + 0] = oe.data[V + 0], B.data[Pe + 1] = oe.data[V + 1], B.data[Pe + 2] = oe.data[V + 2], B.data[Pe + 3] = oe.data[V + 3];
      }), F.putImageData(B, 0, 0), {
        id: fo("raster"),
        type: "raster_frozen",
        layerKind: R === "mask" ? "mask" : "paint",
        z_index: Number((ae == null ? void 0 : ae.z_index) || 0) + ue * 1e-3,
        locked: (ae == null ? void 0 : ae.locked) === !0,
        bbox: {
          u0: 0,
          v0: U.minY / Ne,
          u1: Z / me,
          v1: (U.maxY + 1) / Ne
        },
        rasterDataUrl: E.toDataURL("image/png"),
        transform: {
          du: I / me,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(se) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: a,
        shortestWrappedDelta: s
      } = se);
    },
    processFreehandPoints: f,
    createRasterSurface: b,
    getPaintingRevisionKey: _,
    getPaintingCompositeRevisionKey: v,
    getDisplayPaintRevisionKey: P,
    refreshPaintEngineRevisionCache: S,
    markObjectVisualsDirty: $,
    markPaintStrokeVisualsDirty: z,
    markPaintCompositeVisualsDirty: te,
    rebuildPaintEngineIfNeeded: ie,
    getDesiredPaintTargetDescriptor: G,
    getActivePaintTargetDescriptor: j,
    rasterizeStrokeToSurface: de,
    createRasterFrozenObjectsFromCanvas: He
  };
}
function OI(e) {
  const {
    comfyMedia: t,
    editor: n,
    node: r,
    readOnly: i,
    state: o,
    type: a
  } = e;
  let s, l, d, u, f, h, g;
  function b(ie, G = null) {
    var j;
    if (ie && typeof ie == "object" && !Array.isArray(ie)) return ie;
    if (Array.isArray(ie) && ie.length > 0) {
      const K = ie[0];
      if (K && typeof K == "object" && !Array.isArray(K)) return K;
    }
    if (Array.isArray(G) && G.length > 0) {
      const K = (j = G[0]) == null ? void 0 : j.parsed_state;
      if (K && typeof K == "object" && !Array.isArray(K))
        return {
          yaw_deg: Number(K.yaw_deg || 0),
          pitch_deg: Number(K.pitch_deg || 0),
          hFOV_deg: Number(K.hFOV_deg || 30),
          rot_deg: Number(K.roll_deg || 0)
        };
    }
    return null;
  }
  function _(ie, G, j) {
    const K = Math.max(1, Number(G || 1)), ce = Math.max(1, Number(j || 1)), Se = Fe(Number(ie || 30), 0.1, 179) * Mr, be = 2 * Math.atan(Math.tan(Se * 0.5) * (ce / K));
    return Fe(be * Ii, 0.1, 179);
  }
  function v(ie) {
    const G = String(ie || "").trim();
    if (!G) return null;
    try {
      const j = JSON.parse(G);
      if (!j || typeof j != "object" || String(j.kind || "") !== "pano_sticker_state") return null;
      const K = j.version;
      let ce = null;
      if (typeof K == "number" && Number.isInteger(K) ? ce = K : typeof K == "string" && /^\d+$/.test(K) && (ce = Number.parseInt(K, 10)), ce !== 1) return null;
      const Se = j.pose;
      if (!Se || typeof Se != "object") return null;
      const be = Number(Se.yaw_deg), ge = Number(Se.pitch_deg), X = Number(Se.roll_deg), A = Number(Se.hFOV_deg);
      if (![be, ge, X, A].every((xe) => Number.isFinite(xe))) return null;
      let T = ((be + 180) % 360 + 360) % 360 - 180;
      Object.is(T, -0) && (T = 0);
      const de = {
        yaw_deg: T,
        pitch_deg: Fe(ge, -89.9, 89.9),
        roll_deg: X,
        hFOV_deg: Fe(A, 0.1, 179)
      }, he = Number(j.source_aspect);
      return Number.isFinite(he) && he > 0 && (de.source_aspect = he), de;
    } catch {
      return null;
    }
  }
  function P(ie) {
    const G = Number(ie == null ? void 0 : ie.yaw_deg), j = Number(ie == null ? void 0 : ie.pitch_deg), K = Number((ie == null ? void 0 : ie.roll_deg) ?? (ie == null ? void 0 : ie.rot_deg)), ce = Number(ie == null ? void 0 : ie.hFOV_deg), Se = zi(ie);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: zt(Number.isFinite(G) ? G : 0),
        pitch_deg: Fe(Number.isFinite(j) ? j : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(K) ? K : 0,
        hFOV_deg: Fe(Number.isFinite(ce) ? ce : 90, 0.1, 179)
      },
      source_aspect: Se
    };
  }
  function W(ie) {
    var ge;
    if (!ie || typeof ie != "object") return P(null);
    const G = Number(ie == null ? void 0 : ie.yaw_deg), j = Number(ie == null ? void 0 : ie.pitch_deg), K = Number((ie == null ? void 0 : ie.roll_deg) ?? (ie == null ? void 0 : ie.rot_deg)), ce = Number(ie == null ? void 0 : ie.hFOV_deg), Se = Number(ie == null ? void 0 : ie.vFOV_deg);
    let be = 1;
    if (Number.isFinite(ce) && Number.isFinite(Se)) {
      const X = Fe(ce, 0.1, 179) * Mr, A = Fe(Se, 0.1, 179) * Mr, T = Math.tan(A * 0.5);
      if (Math.abs(T) > 1e-6) {
        const de = Math.tan(X * 0.5) / T;
        Number.isFinite(de) && de > 0 && (be = de);
      }
    }
    if (ie != null && ie.asset_id && ((ge = o == null ? void 0 : o.assets) != null && ge[ie.asset_id])) {
      const X = o.assets[ie.asset_id], A = Number((X == null ? void 0 : X.w) || 0), T = Number((X == null ? void 0 : X.h) || 0);
      A > 0 && T > 0 && (be = A / T);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: zt(Number.isFinite(G) ? G : 0),
        pitch_deg: Fe(Number.isFinite(j) ? j : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(K) ? K : 0,
        hFOV_deg: Fe(Number.isFinite(ce) ? ce : 30, 0.1, 179)
      },
      source_aspect: be
    };
  }
  function D(ie) {
    return t.linkedValue(r, ie);
  }
  function O(ie, G, j) {
    const K = ie && typeof ie == "object" ? {
      yaw_deg: Number(ie.yaw_deg || 0),
      pitch_deg: Number(ie.pitch_deg || 0),
      roll_deg: Number(ie.rot_deg ?? ie.roll_deg ?? 0),
      hFOV_deg: Number(ie.hFOV_deg || 30)
    } : v(G);
    if (K) {
      const be = Number((j == null ? void 0 : j.naturalWidth) || (j == null ? void 0 : j.width) || K.source_aspect || 1), ge = Number((j == null ? void 0 : j.naturalHeight) || (j == null ? void 0 : j.height) || 1);
      return {
        yaw_deg: Number(K.yaw_deg || 0),
        pitch_deg: Number(K.pitch_deg || 0),
        hFOV_deg: Number(K.hFOV_deg || 30),
        vFOV_deg: _(K.hFOV_deg, be, ge),
        rot_deg: Number(K.roll_deg || 0)
      };
    }
    const ce = Number((j == null ? void 0 : j.naturalWidth) || (j == null ? void 0 : j.width) || 1), Se = Number((j == null ? void 0 : j.naturalHeight) || (j == null ? void 0 : j.height) || 1);
    return {
      yaw_deg: Number(n.viewYaw || 0),
      pitch_deg: Number(n.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: _(30, ce, Se),
      rot_deg: 0
    };
  }
  function S() {
    const ie = l(() => {
      Gr(r, "image-loaded");
    }), G = sn(r, "external-sticker") ? b(d("pano_sticker_input_pose"), null) : null;
    return K0(o, W0(r, { pose: G, image: ie }));
  }
  function $() {
    var ge;
    const ie = Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs.findIndex((X) => String((X == null ? void 0 : X.name) || "") === "sticker_image") : -1, G = ie >= 0 ? ((ge = r.getInputLink(ie)) == null ? void 0 : ge.id) ?? null : null, j = l(() => {
      Gr(r, "image-loaded");
    }), K = b(d("pano_sticker_input_pose"), null), ce = D("sticker_state"), Se = t.externalStateHash(r, ce), be = G == null ? null : O(K, ce, j);
    return G0(o, {
      connected: G != null,
      linkId: G,
      stateHash: Se,
      pose: be,
      imageWidth: Number((j == null ? void 0 : j.naturalWidth) || (j == null ? void 0 : j.width) || 0),
      imageHeight: Number((j == null ? void 0 : j.naturalHeight) || (j == null ? void 0 : j.height) || 0)
    });
  }
  function z(ie = "sync") {
    if (a !== "stickers" || i) return;
    const G = r.__panoSceneStateV2 ? S() : $();
    if (G.changed) {
      const j = o.stickers.find(u);
      o.stickers = G.state.stickers, o.active = G.state.active, j && n.selectedId === j.id && !o.stickers.some((K) => K.id === j.id) && (n.selectedId = null, n.selectedIds = []), s(), g(), h();
    }
    f();
  }
  function te() {
    const ie = Array.isArray(o.stickers) ? o.stickers : [], G = [];
    for (const j of ie)
      u(j) && (j.visible = !1, G.push(j));
    return G;
  }
  return {
    connect(ie) {
      ({
        commitAndRefreshNode: s,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: d,
        isExternalSticker: u,
        requestDraw: f,
        updateSelectionMenu: h,
        updateSidePanel: g
      } = ie);
    },
    computeStickerVFov: _,
    buildCanonicalCutoutStickerState: P,
    buildCanonicalSelectedStickerState: W,
    reconcileExternalStickerFromInputs: z,
    collectExternalStickersForClearAll: te
  };
}
function FI(e) {
  const {
    app: t,
    cameraV2: n,
    canvas: r,
    editor: i,
    editorView: o,
    node: a,
    runtime: s,
    sceneV2: l,
    state: d,
    stateV2: u,
    studio: f,
    viewController: h
  } = e;
  let g, b, _, v, P, W, D, O, S, $ = null;
  function z(I, E = null) {
    const F = T();
    D(() => {
      i.viewTransition = gN(F, I, performance.now(), { scale: Ne(), end: E });
    }), !i.viewTransition && E && te(E), h.state.inertia.active = !1, h.state.inertia.vx = 0, h.state.inertia.vy = 0, O(), P({ localOnly: !0, reason: bt.VIEW });
  }
  function te(I) {
    X(ku({ ...ge(), moved: I.moved }, I.mode, de())), s.backgroundDirty = !0;
  }
  function ie() {
    i.viewTransition && (i.viewTransition = null, O());
  }
  function G(I, E) {
    z({ ...T(), yaw_deg: I, pitch_deg: E });
  }
  function j() {
    return !f || xe() && !v();
  }
  function K() {
    return i.mode === "pano" && ce();
  }
  function ce() {
    return u && Rx({ sceneLinked: l && !!Hd(a).scene, files: W(), stickers: d.stickers });
  }
  function Se() {
    return i.spaceMode === "6dof" && K();
  }
  function be() {
    var I, E, F;
    return EM((F = (E = (I = t.ui) == null ? void 0 : I.settings) == null ? void 0 : E.getSettingValue) == null ? void 0 : F.call(E, ly));
  }
  function ge() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function X(I) {
    i.spaceMode = I.mode, i.viewPosition = I.position, i.viewMoved = I.moved;
  }
  function A(I) {
    var F;
    const E = bN(i.spaceMode, i.viewTransition, I);
    if (E !== "keep") {
      if (E === "return") {
        z({ ...T(), position: de(), distance: ((F = ae()) == null ? void 0 : F.radius) || ar }, { mode: I, moved: !1 });
        return;
      }
      ie(), X(ku({ ...ge(), position: T().position }, I, de())), s.backgroundDirty = !0, O(), P({ localOnly: !0, reason: bt.VIEW });
    }
  }
  function T() {
    var F;
    const I = i.viewMoved ? i.viewDistance : ((F = ae()) == null ? void 0 : F.radius) || ar, E = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: I };
    return Ox(i.spaceMode, E, de());
  }
  function de() {
    return xe() ? R().position : [0, 0, 0];
  }
  function he() {
    return n && d.camera !== null;
  }
  function xe() {
    return he() && (!f || d.camera.visible);
  }
  function He() {
    return d.painting_visible !== !1;
  }
  function se(I) {
    return I.visible && To(I.clip, i.frame);
  }
  function R() {
    return Md(d.camera, i.frame);
  }
  function ae() {
    var E;
    const I = g();
    return ((E = I.space ?? I.content) == null ? void 0 : E.sphere) ?? null;
  }
  function me(I) {
    i.viewPosition = I.position, i.viewYaw = I.yaw_deg, i.viewPitch = I.pitch_deg, i.viewDistance = I.distance, i.viewMoved = !0, s.backgroundDirty = !0, P({ localOnly: !0, reason: bt.VIEW });
  }
  function Ne() {
    var I;
    return ((I = ae()) == null ? void 0 : I.radius) || ar;
  }
  function Te() {
    var ne;
    const I = g().space, E = b(), F = i.worldSelectedId || i.selectedId, B = E.stickers.findIndex((Pe) => Pe.id === F), Y = B < 0 ? null : {
      sticker: E.stickers[B],
      value: Rl(E, i.frame).stickers[B],
      plane: I.stickers.find((Pe) => Pe.id === F) ?? null,
      item: ((ne = I.sticker) == null ? void 0 : ne.id) === F && I.sticker.url ? { kind: I.sticker.kind, box: o.sceneBox(I.sticker.url) } : null
    }, Q = _() ? M() : Gx(ae(), Y);
    if (!Q) return;
    const V = T();
    i.viewDistance = V.distance, i.viewMoved = !0, z(d0(V, Q, r.width, r.height));
  }
  function oe(I) {
    return o.pickSurface(re(), I.x, I.y, r.width, r.height);
  }
  function Ae(I, E) {
    var F;
    return Mu(I, E, i.viewMoved ? null : (F = ae()) == null ? void 0 : F.center, Ne());
  }
  function x() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function N(I, E) {
    const F = performance.now(), B = { x: I.x, y: I.y, time: F, key: o.contentRevision(), view: x() };
    if (!c0($, B)) {
      const Q = oe(I);
      $ = { ...B, cost: performance.now() - F, hit: Q };
    }
    const Y = T();
    me(u0(Y, Ae(Y, $.hit), E, Ne())), $.view = x(), $.wheelTime = F;
  }
  function U(I, E, F) {
    const B = T();
    i.interaction = I === "orbit" ? { kind: "space_orbit", last: E, pivot: Ae(B, oe(E)) } : { kind: "space_pan", last: E, depth: l0(B, Ne()) }, S(E), r.setPointerCapture(F);
  }
  function ue(I) {
    return I * 0.2;
  }
  function M() {
    return { center: R().position, radius: ue(Ne()) };
  }
  function Z(I, E) {
    const { yaw_deg: F, pitch_deg: B } = m0(I.position, E);
    return { ...I, yaw_deg: F, pitch_deg: B };
  }
  function re() {
    return $d(T(), r.width, r.height, ae());
  }
  return {
    connect(I) {
      ({
        editorViewInput: g,
        editorViewSceneState: b,
        isCameraSelected: _,
        isErpCamera: v,
        requestDraw: P,
        sceneFiles: W,
        startAnimation: D,
        syncFloatingViewButtonState: O,
        updateCursor: S
      } = I);
    },
    transitionView: z,
    applyViewTransitionEnd: te,
    cancelViewTransition: ie,
    turnViewTo: G,
    cameraPreviewShown: j,
    isSpaceView: K,
    hasSpaceContent: ce,
    isFreeSpaceView: Se,
    viewControls: be,
    spaceModeState: ge,
    applySpaceMode: X,
    setSpaceMode: A,
    spaceViewState: T,
    spaceOrigin: de,
    hasCamera: he,
    cameraShoots: xe,
    paintingShown: He,
    sceneStickerShown: se,
    cutoutCamera: R,
    contentSphere: ae,
    setSpaceView: me,
    spaceScale: Ne,
    frameSpaceContent: Te,
    zoomSpaceAt: N,
    startSpaceDrag: U,
    currentSpaceCamera: re,
    cameraFrustumLength: ue,
    cameraSphere: M,
    lookingAt: Z
  };
}
function TI(e) {
  const {
    canvas: t,
    editor: n,
    editorView: r,
    imageCache: i,
    readOnly: o,
    scheduler: a,
    state: s,
    stateV2: l,
    stillCanvas: d,
    videoEl: u
  } = e;
  let f, h, g, b, _, v, P, W, D, O, S, $, z, te, ie, G, j, K, ce, Se, be, ge, X, A, T, de, he, xe, He, se, R, ae, me = { revision: -1, sceneState: null }, Ne = null;
  function Te() {
    return Ne || (Ne = x()), Ne;
  }
  function oe() {
    Ne = null;
  }
  function Ae() {
    return me.sceneState;
  }
  function x() {
    const V = S(), ne = h(), Pe = { ...s.assets };
    for (const pe of l ? [] : s.stickers) {
      const Le = String((pe == null ? void 0 : pe.asset_id) || "");
      Le && !Pe[Le] && i.has(Le) && (Pe[Le] = { type: "comfy_image", filename: Le });
    }
    const Re = l ? s.stickers.map((pe) => ce(pe) ? { ...pe, source: { kind: "file", filename: xe(pe) } } : pe) : s.stickers;
    me.revision !== a.stateRevision && (me = { revision: a.stateRevision, sceneState: xr({ ...s, stickers: Re, assets: Pe, painting: null }) }), l && N(me.sceneState);
    const le = Rl(me.sceneState, n.frame), ve = be ? D() : null, we = (pe) => {
      if (l && !pe.visible) return null;
      if (be && G(pe)) return ve;
      const Le = z(pe);
      return Le ? { media: Le, revision: $(Le) } : null;
    }, m = S0(me.sceneState, n.frame, s.stickers, { media: we, paintLayers: ne, evaluated: le }), p = V && (V === u || V === d) ? u.dataset.panoSrc : V, L = ie(V) ? { media: V, revision: $(V), coverage: En(s.coverage), source: p } : null, H = te(), k = Fx(A(), H, T());
    k.mode !== n.spaceMode && _(), f(k);
    const ee = H ? U(me.sceneState, le, we) : null, _e = K() ? { ...ee, ...ue(ee) } : null;
    return { background: L, layers: m, space: _e, content: ee };
  }
  function N(V) {
    const ne = new Map(s.stickers.map((Pe) => [Pe.id, Pe.clip]));
    V.scene.clip = { ...s.scene.clip };
    for (const Pe of V.stickers) {
      const Re = ne.get(Pe.id);
      Re && (Pe.clip = { ...Re });
    }
  }
  function U(V, ne, Pe) {
    const Re = ge(), le = h0(Re, ne.scene), ve = le != null && le.url ? r.sceneBox(le.url) : null, we = ve && Au(le.kind, ve), m = he(), p = Vx(m, V, ne), L = p != null && p.url ? r.sceneBox(p.url) : null, H = L ? [{ box: Au(p.kind, L), value: p.value }] : [], k = sk(V, n.frame, s.stickers, { media: Pe, evaluated: ne }), ee = Iu(jx(ne, we, k, H));
    return {
      evaluated: ne,
      sceneUrls: Re ? Re.urls.filter(Boolean) : [],
      scene: le,
      stickerUrls: $x(m, V),
      sticker: p,
      stickers: k,
      sphere: ee
    };
  }
  function ue(V) {
    var Pe;
    const ne = ((Pe = V.sphere) == null ? void 0 : Pe.radius) || ar;
    return {
      gizmo: Z() ? E() : M(V.evaluated),
      grid: n.showGrid && !n.fullscreen ? ek(ne) : null,
      lines: b() ? I(ne) : []
    };
  }
  function M(V) {
    const ne = X(), Pe = V.stickers.find((Re) => Re.id === (ne == null ? void 0 : ne.id));
    return !ae(ne) || !(Pe != null && Pe.active) ? null : { mode: n.gizmoMode, transform: Pu(Pe) };
  }
  function Z() {
    return b() && n.selectedId === jl;
  }
  let re = { revision: -1, span: -1, segments: [] };
  function I(V) {
    const ne = se();
    (re.revision !== a.stateRevision || re.span !== ne) && (re = { revision: a.stateRevision, span: ne, segments: nk(rk(s, ne)) });
    const { segments: Pe } = re, Re = Pe.length ? [{ segments: Pe, color: UC }] : [];
    if (!j()) return Re;
    const le = Z() ? Cy : BC;
    return [...Re, { segments: g0(P(), g(V)), color: le }];
  }
  function E() {
    return !j() || !Z() || o ? null : { mode: n.gizmoMode === "rotate" ? "rotate" : "translate", transform: Pu({ ...P(), scale: 1 }) };
  }
  function F() {
    const { background: V, layers: ne, space: Pe } = Te(), Re = t.width, le = t.height, ve = W({ x: 0, y: 0, w: Re, h: le });
    let we = !1;
    return !V && !ne.length && !Pe ? (r.clear(460551), we = r.ready) : (r.clear(), we = !!r.render({
      rect: ve,
      camera: Pe ? $d(de(), Re, le, Pe.sphere) : v(),
      background: V,
      layers: ne,
      space: Pe
    })), He(), (n.worldSelectedId || Z() || Se()) && R(), we;
  }
  function B(V) {
    const { content: ne } = Te();
    return !ne || !V.position ? Sa(V) : f0(Sa(V), V.position, O(), ne.sphere);
  }
  function Y(V, ne, Pe, Re = null) {
    const { background: le, layers: ve, content: we } = Te();
    if (!le && !ve.length && !we) return null;
    const m = we && ne.position ? we : null;
    return r.render({ rect: V, camera: B(ne), background: le, layers: ve, space: m, owner: Pe, clearColor: Re });
  }
  function Q(V) {
    return r.clear(460551), !!r.renderUnwrap({ rect: W(V), ...Te() });
  }
  return {
    connect(V) {
      ({
        applySpaceMode: f,
        buildEditorViewPaintLayers: h,
        cameraFrustumLength: g,
        cameraShoots: b,
        cancelViewTransition: _,
        currentViewCamera: v,
        cutoutCamera: P,
        deviceRect: W,
        followPortSticker: D,
        frameViewDistance: O,
        getConnectedErpImage: S,
        getMediaRevisionToken: $,
        getStickerImage: z,
        hasSpaceContent: te,
        isDecodedImageReady: ie,
        isExternalSticker: G,
        isFreeSpaceView: j,
        isSpaceView: K,
        isUploadingSticker: ce,
        isWorldMenuShown: Se,
        portVideo: be,
        sceneFiles: ge,
        selectedWorldSticker: X,
        spaceModeState: A,
        spaceOrigin: T,
        spaceViewState: de,
        stickerFiles: he,
        stickerImageKey: xe,
        syncFloatingViewButtonState: He,
        timelineSpanFrames: se,
        updateSelectionMenu: R,
        worldStickerEditable: ae
      } = V);
    },
    editorViewInput: Te,
    endEditorViewFrame: oe,
    editorViewSceneState: Ae,
    isCameraSelected: Z,
    renderEditorView: F,
    shotViewCamera: B,
    drawEditorViewShot: Y,
    renderEditorViewUnwrap: Q
  };
}
function Ty(e, t = !1) {
  const n = Fe(zi(e), 0.05, 20), r = t ? 320 : 220;
  return n >= 1 ? { width: r, height: Math.max(1, Math.round(r / n)) } : { width: Math.max(1, Math.round(r * n)), height: r };
}
function DI(e) {
  const {
    backgroundCanvas: t,
    cutoutPreviewCanvas: n,
    cutoutPreviewHost: r,
    editor: i,
    runtime: o,
    shotEditor: a,
    studio: s,
    uiState: l
  } = e;
  let d, u, f, h, g = null;
  function b(O) {
    if (!r || !O) return !1;
    const S = r.closest(".pano-camera-preview");
    if (!S) return !1;
    const $ = Math.round(Number(S.clientWidth || r.clientWidth || 0)), z = Math.round(Number(S.clientHeight || r.clientHeight || 0));
    return Math.abs($ - Number(O.width || 0)) <= 1 && Math.abs(z - Number(O.height || 0)) <= 1;
  }
  function _(O, S) {
    if (i.outputPreviewRect = null, l.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), s && (l.outputPreviewToggle.visible = !1), !a || !l.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      l.cameraPreview.visible = !1, l.cameraPreview.settled = !1, g = null;
      return;
    }
    const $ = f();
    if (l.cameraPreview.visible = !0, l.cameraPreview.expanded = !!i.outputPreviewExpanded, !$ || !n) {
      l.cameraPreview.ready = !1, l.cameraPreview.settled = !1, l.cameraPreview.width = 220, l.cameraPreview.height = 132, l.cameraPreview.label = $ ? "Preview unavailable" : "Add Frame to preview", g = null;
      return;
    }
    const z = Ty($, !!i.outputPreviewExpanded);
    l.cameraPreview.width = z.width, l.cameraPreview.height = z.height;
    const te = window.devicePixelRatio || 1, ie = Math.max(1, z.width * te), G = Math.max(1, z.height * te), j = Math.min(1, t.width / ie, t.height / G), K = { width: Math.max(1, Math.floor(ie * j)), height: Math.max(1, Math.floor(G * j)) }, ce = [...S].some((ge) => ge !== bt.VIEW && ge !== bt.OVERLAY), Se = !g || g.width !== K.width || g.height !== K.height || ce;
    if (O && Se) {
      const ge = u({ x: 0, y: t.height - K.height, w: K.width, h: K.height }, $, "camera_preview");
      g = ge ? K : null, ge && D(ge);
    }
    if (!g) {
      l.cameraPreview.ready = !1, l.cameraPreview.label = h() ? "Loading preview" : "Connect ERP image", l.cameraPreview.settled = !1;
      return;
    }
    const be = b(z);
    l.cameraPreview.ready = !0, l.cameraPreview.label = be ? "" : "Loading preview", l.cameraPreview.settled = be && o.pendingStableLayoutFrames <= 0 && o.hasPresentedFrame;
  }
  function v() {
    g = null;
  }
  let P = 0, W = !1;
  function D(O) {
    const S = ++P;
    createImageBitmap(O.canvas, O.x, O.y, O.width, O.height).then(($) => {
      var z;
      if (S !== P || !o.running) {
        $.close();
        return;
      }
      (z = n.getContext("bitmaprenderer")) == null || z.transferFromImageBitmap($);
    }).catch(($) => {
      W || (W = !0, console.error("[PanoramaStickers] camera preview frame failed", $));
    });
  }
  return {
    connect(O) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: h
      } = O);
    },
    drawCutoutOutputPreview: _,
    forgetCameraPreviewFrame: v
  };
}
function LI(e) {
  const {
    cameraV2: t,
    canvas: n,
    ctx: r,
    editor: i,
    editorView: o,
    frameGateCssRadius: a,
    runtime: s,
    shotEditor: l,
    studio: d,
    type: u
  } = e;
  let f, h, g, b, _, v, P, W, D, O, S, $, z, te, ie, G, j, K, ce, Se, be, ge, X, A, T, de, he, xe, He, se, R, ae, me, Ne, Te, oe, Ae, x;
  function N(le) {
    const ve = n.width, we = n.height, m = te();
    if (r.globalAlpha = 1, r.lineWidth = 1, r.clearRect(0, 0, ve, we), ae(), le && (s.backgroundDirty = !Te(m)), i.showGrid && !i.fullscreen) {
      r.strokeStyle = "#3f3f46";
      for (let L = 0; L <= 16; L += 1) {
        const H = m.x + m.w * L / 16;
        r.beginPath(), r.moveTo(H, m.y), r.lineTo(H, m.y + m.h), r.stroke();
      }
      for (let L = 0; L <= 8; L += 1) {
        const H = m.y + m.h * L / 8;
        r.beginPath(), r.moveTo(m.x, H), r.lineTo(m.x + m.w, H), r.stroke();
      }
      r.strokeStyle = "rgba(250, 250, 250, 0.86)", r.lineWidth = 1.2, r.beginPath(), r.moveTo(m.x, m.y + m.h / 2), r.lineTo(m.x + m.w, m.y + m.h / 2), r.stroke(), r.fillStyle = "rgba(250, 250, 250, 0.42)", r.font = "500 11px Geist, sans-serif", r.textAlign = "center";
      const p = m.y + m.h * 0.57;
      r.fillText("Left", m.x + m.w * 0.25, p), r.fillText("Front", m.x + m.w * 0.5, p), r.fillText("Right", m.x + m.w * 0.75, p), r.fillText("Back", m.x + 38, p), r.fillText("Back", m.x + m.w - 38, p);
    }
  }
  function U(le, ve, we = 1) {
    let m = !1;
    r.strokeStyle = ve, r.lineWidth = we, r.beginPath();
    for (const p of le) {
      const L = xe(p);
      if (!L) {
        m = !1;
        continue;
      }
      m ? r.lineTo(L.x, L.y) : (r.moveTo(L.x, L.y), m = !0);
    }
    r.stroke();
  }
  function ue(le) {
    const ve = n.width, we = n.height;
    if (r.clearRect(0, 0, ve, we), ae(), le && (s.backgroundDirty = !Ne()), i.showGrid && !i.fullscreen && _().space)
      M();
    else if (i.showGrid && !i.fullscreen) {
      for (let p = -180; p <= 180; p += 15) {
        const L = [];
        for (let H = -89; H <= 89; H += 4) L.push(An(p, H));
        U(L, "#3f3f46", p % 90 === 0 ? 1.3 : 1);
      }
      for (let p = -75; p <= 75; p += 15) {
        const L = [];
        for (let H = -180; H <= 180; H += 4) L.push(An(H, p));
        U(L, p === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", p === 0 ? 1.5 : 1);
      }
      const m = [
        { name: "Left", dir: An(-90, 0) },
        { name: "Front", dir: An(0, 0) },
        { name: "Right", dir: An(90, 0) },
        { name: "Back", dir: An(180, 0) }
      ];
      r.fillStyle = "rgba(250, 250, 250, 0.42)", r.font = "500 11px Geist, sans-serif", r.textAlign = "center", m.forEach((p) => {
        const L = xe(p.dir);
        L && r.fillText(p.name, L.x, L.y + 24);
      });
    }
  }
  function M() {
    const le = $d(x(), n.width, n.height, h()), ve = Da(le, [0, 0, 0], n.width, n.height);
    ve && (r.fillStyle = "rgba(255, 221, 87, 0.9)", r.font = "500 11px Geist, sans-serif", r.textAlign = "center", r.fillText("ERP origin", ve.x, ve.y - 12));
  }
  function Z(le, ve) {
    const we = he(le), m = An(Number(we.yaw_deg || 0), Number(we.pitch_deg || 0)), p = i.mode === "unwrap" ? He(m) : null, L = p ? p.x : null, H = i.mode === "pano" ? 28 : 20, k = [
      oe(le, 0, H, L),
      oe(le, 1, H, L),
      oe(le, 2, H, L),
      oe(le, 3, H, L)
    ];
    qd(r, k, { selected: ve });
  }
  function re(le, ve = []) {
    if (!(!le || !Array.isArray(ve) || ve.length < 4)) {
      le.beginPath(), le.moveTo(ve[0].x, ve[0].y);
      for (let we = 1; we < 4; we += 1) le.lineTo(ve[we].x, ve[we].y);
      le.closePath();
    }
  }
  function I(le, ve, we) {
    const m = Array.isArray(le == null ? void 0 : le.corners) ? le.corners : [];
    if (m.length < 4) return;
    const p = Fe(Number((le == null ? void 0 : le.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    const L = r.globalAlpha;
    r.globalAlpha = L * p;
    const H = we ? "rgba(255, 116, 116, 0.96)" : ve ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", k = we ? "rgba(255, 89, 89, 0.08)" : ve ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", ee = ve ? 3.2 : 2.6;
    re(r, m), r.fillStyle = k, r.fill(), r.strokeStyle = H, r.lineWidth = ee, r.stroke(), r.save(), r.strokeStyle = H, r.lineWidth = ve ? 3.2 : 2.6, r.lineCap = "round";
    const _e = Array.isArray(le == null ? void 0 : le.edgeMidpoints) && le.edgeMidpoints.length >= 4 ? le.edgeMidpoints : [
      { edge: "top", x: (m[0].x + m[1].x) * 0.5, y: (m[0].y + m[1].y) * 0.5 },
      { edge: "right", x: (m[1].x + m[2].x) * 0.5, y: (m[1].y + m[2].y) * 0.5 },
      { edge: "bottom", x: (m[2].x + m[3].x) * 0.5, y: (m[2].y + m[3].y) * 0.5 },
      { edge: "left", x: (m[3].x + m[0].x) * 0.5, y: (m[3].y + m[0].y) * 0.5 }
    ], pe = { top: "bottom", right: "left", bottom: "top", left: "right" }, Le = ve ? 12 : 9;
    _e.forEach((Oe) => {
      const ye = _e.find((Ue) => (Ue == null ? void 0 : Ue.edge) === pe[Oe == null ? void 0 : Oe.edge]) || {
        x: (m[0].x + m[1].x + m[2].x + m[3].x) * 0.25,
        y: (m[0].y + m[1].y + m[2].y + m[3].y) * 0.25
      }, Ie = ye.x - Oe.x, De = ye.y - Oe.y, Be = Math.hypot(Ie, De) || 1;
      r.beginPath(), r.moveTo(Oe.x, Oe.y), r.lineTo(Oe.x + Ie / Be * Le, Oe.y + De / Be * Le), r.stroke();
    }), r.restore(), r.globalAlpha = L;
  }
  function E(le, ve, we, m) {
    const p = Fe(Number((ve == null ? void 0 : ve.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    if (X(le)) {
      I(ve, we, m);
      return;
    }
    if (A(le)) {
      const H = r.globalAlpha;
      r.globalAlpha = H * z(le) * p, i.mode === "frame" ? (r.strokeStyle = we ? "rgba(250, 250, 250, 0.9)" : m ? "rgba(255, 89, 89, 0.72)" : "#71717a", r.lineWidth = we ? 2 : 1, re(r, ve.corners), r.stroke()) : Z(le, we), r.globalAlpha = H;
      return;
    }
    const L = r.globalAlpha;
    r.globalAlpha = L * p, r.fillStyle = we ? "rgba(0, 112, 243, 0.24)" : m ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", re(r, ve.corners), r.fill(), r.strokeStyle = we ? "rgba(255, 255, 255, 1)" : m ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", r.lineWidth = we ? 2.8 : 1.9, re(r, ve.corners), r.stroke(), r.globalAlpha = L;
  }
  function F(le, ve, we) {
    if (A(le)) {
      ay(r, ve, { accent: we });
      return;
    }
    const m = !(X(le) && G());
    r.fillStyle = we, m && ve.corners.forEach((p) => {
      r.beginPath(), r.arc(p.x, p.y, 6.5, 0, Math.PI * 2), r.fill();
    }), m && X(le) && (r.strokeStyle = we, r.lineCap = "round", r.lineWidth = 4, ve.edgeMidpoints.forEach((p) => {
      var Le, Oe, C, ye;
      const L = (((Le = p.b) == null ? void 0 : Le.x) ?? p.x) - (((Oe = p.a) == null ? void 0 : Oe.x) ?? p.x), H = (((C = p.b) == null ? void 0 : C.y) ?? p.y) - (((ye = p.a) == null ? void 0 : ye.y) ?? p.y), k = Math.hypot(L, H) || 1, ee = L / k, _e = H / k, pe = 10;
      r.beginPath(), r.moveTo(p.x - ee * pe, p.y - _e * pe), r.lineTo(p.x + ee * pe, p.y + _e * pe), r.stroke();
    }), r.lineCap = "butt"), T(le) || (r.strokeStyle = "rgba(250, 250, 250, 0.9)", r.lineWidth = 1.8, r.beginPath(), r.moveTo(ve.rotateStemBase.x, ve.rotateStemBase.y), r.lineTo(ve.rotateHandle.x, ve.rotateHandle.y), r.stroke(), r.fillStyle = we, r.beginPath(), r.arc(ve.rotateHandle.x, ve.rotateHandle.y, 10, 0, Math.PI * 2), r.fill());
  }
  function B() {
    var L;
    const le = i.mode === "frame" ? [] : $(), ve = le.length > 1, we = l ? P() : O(), m = we.map((H) => `${String((H == null ? void 0 : H.id) || "")}:${X(H) ? "frame" : Number((H == null ? void 0 : H.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== we || i._sortedItemsCache.orderKey !== m) && (i._sortedItemsCache = {
      src: we,
      orderKey: m,
      sorted: [...we]
    });
    const p = i._sortedItemsCache.sorted;
    for (const H of p) {
      const k = i.mode !== "frame" && !ve && Se(H);
      if (i.mode === "frame" && !k) continue;
      const ee = A(H), _e = X(H), pe = ce(H);
      if (!ee && !_e || ge(H) && !Ae(H)) continue;
      const Le = de(H);
      if (u !== "stickers" && !Le.visible)
        continue;
      const Oe = Fe(Number((Le == null ? void 0 : Le.visibilityAlpha) ?? 1), 0, 1);
      if (Oe <= 0.01) continue;
      const C = _e && l && i.mode === "pano" ? Fe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (r.save(), r.globalAlpha *= C, E(H, Le, k, pe), k && Le.visible) {
        const ye = pe ? "#ff4d4f" : ee && j(H) ? "#f59e0b" : "#0070f3", Ie = r.globalAlpha;
        r.globalAlpha = Ie * Oe, F(H, Le, ye), r.globalAlpha = Ie;
      }
      r.restore();
    }
    if (l && i.mode === "pano" && !v() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const H = i.cutoutPanoFrameVisual, k = Fe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      r.save(), r.globalAlpha *= k, I(H.geom, H.selected, H.locked), H.selected && F(
        H.item,
        H.geom,
        H.locked ? "#ff4d4f" : "#0070f3"
      ), r.restore();
    }
    if (ve) {
      const H = S(le);
      if (H != null && H.visible) {
        const k = f(le) ? "#ff4d4f" : "#0070f3";
        r.save(), r.strokeStyle = "rgba(255, 255, 255, 0.95)", r.lineWidth = 2, r.setLineDash([6, 4]), r.beginPath(), r.moveTo(H.corners[0].x, H.corners[0].y);
        for (let ee = 1; ee < H.corners.length; ee += 1) r.lineTo(H.corners[ee].x, H.corners[ee].y);
        r.closePath(), r.stroke(), r.setLineDash([]), r.fillStyle = k, H.corners.forEach((ee) => {
          r.beginPath(), r.arc(ee.x, ee.y, 6.5, 0, Math.PI * 2), r.fill();
        }), r.restore();
      }
    } else
      le.forEach((H) => {
        if (!T(H) && !be(H)) return;
        const k = de(H);
        if (!(k != null && k.visible)) return;
        const ee = ce(H) ? "#ff4d4f" : "#0070f3";
        r.save(), r.strokeStyle = "rgba(255, 255, 255, 0.95)", r.lineWidth = 2, r.setLineDash([6, 4]), r.beginPath(), r.moveTo(k.corners[0].x, k.corners[0].y);
        for (let _e = 1; _e < k.corners.length; _e += 1) r.lineTo(k.corners[_e].x, k.corners[_e].y);
        r.closePath(), r.stroke(), r.setLineDash([]), r.fillStyle = ee, k.corners.forEach((_e) => {
          r.beginPath(), r.arc(_e.x, _e.y, 6.5, 0, Math.PI * 2), r.fill();
        }), r.restore();
      });
    if (((L = i.interaction) == null ? void 0 : L.kind) === "marquee_select") {
      const H = me(i.interaction.start, i.interaction.current);
      r.save(), r.strokeStyle = "rgba(255, 255, 255, 0.9)", r.fillStyle = "rgba(255, 255, 255, 0.08)", r.lineWidth = 1, r.setLineDash([5, 4]), r.beginPath(), r.rect(H.x0, H.y0, H.x1 - H.x0, H.y1 - H.y0), r.fill(), r.stroke(), r.restore();
    }
  }
  function Y(le) {
    const ve = v(), we = W(ve);
    if (!ve || !we)
      return r.clearRect(0, 0, n.width, n.height), le && o.clear(657930), !1;
    const m = { x: we.x, y: we.y, w: we.w, h: we.h }, { rect: p, shot: L } = v0(ve, we, { width: n.width, height: n.height }), H = Q(m);
    if (r.clearRect(0, 0, n.width, n.height), le) {
      o.clear(657930);
      const k = g(p), ee = !!b(k, L, void 0, 657930);
      ee || o.clear(1118481, k), s.backgroundDirty = !ee;
    }
    return r.save(), r.fillStyle = "rgba(0, 0, 0, 0.58)", r.beginPath(), r.rect(0, 0, n.width, n.height), r.roundRect(m.x, m.y, m.w, m.h, H), r.fill("evenodd"), r.restore(), r.save(), r.strokeStyle = Cy, r.globalAlpha = 0.62, r.lineWidth = 2, r.beginPath(), r.roundRect(m.x + 1, m.y + 1, m.w - 2, m.h - 2, Math.max(0, H - 1)), r.stroke(), r.restore(), !0;
  }
  function Q(le) {
    const ve = Math.max(1e-6, Number(s.frameCanvasScale || 1));
    return Math.min(a * ve, Number((le == null ? void 0 : le.w) || 0) * 0.5, Number((le == null ? void 0 : le.h) || 0) * 0.5);
  }
  function V() {
    var ee, _e;
    if (((ee = i.interaction) == null ? void 0 : ee.kind) !== "paint_lasso_fill") return;
    const le = i.interaction.stroke, ve = (_e = le == null ? void 0 : le.geometry) == null ? void 0 : _e.points;
    let we;
    if (i.mode === "frame") {
      const pe = v(), Le = D(pe);
      we = se(ve, pe, Le);
    } else
      we = R(ve);
    if (!Array.isArray(we) || we.length < 3) return;
    const m = String((le == null ? void 0 : le.layerKind) || "") === "mask", p = (le == null ? void 0 : le.color) || { r: 1, g: 0.25, b: 0.25 }, L = Math.round(Number(p.r || 0) * 255), H = Math.round(Number(p.g || 0) * 255), k = Math.round(Number(p.b || 0) * 255);
    r.save(), r.beginPath(), r.moveTo(Number(we[0].x || 0), Number(we[0].y || 0));
    for (let pe = 1; pe < we.length; pe++) r.lineTo(Number(we[pe].x || 0), Number(we[pe].y || 0));
    r.closePath(), m ? (r.lineWidth = 2, r.setLineDash([6, 6]), r.lineDashOffset = 0, r.strokeStyle = "rgba(0,0,0,0.96)", r.stroke(), r.lineDashOffset = -6, r.strokeStyle = "rgba(255,255,255,0.96)", r.stroke(), r.setLineDash([]), r.lineDashOffset = 0) : (r.lineWidth = 1.5, r.setLineDash([6, 4]), r.strokeStyle = `rgba(${L},${H},${k},1)`, r.stroke(), r.setLineDash([])), r.restore();
  }
  function ne() {
    const le = i.frameRollOverlayVisual, ve = Fe(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(le != null && le.shot) || ve <= 1e-4) return;
    const we = D(le.shot);
    if (!we) return;
    const m = { x: we.x + we.w * 0.5, y: we.y + we.h * 0.5 }, p = Number(le.shot.roll_deg ?? le.shot.rot_deg ?? 0) * Mr, L = Math.hypot(we.w, we.h) * 0.55, H = Math.cos(p) * L, k = Math.sin(p) * L;
    r.save(), r.globalAlpha *= ve, r.beginPath(), r.rect(we.x, we.y, we.w, we.h), r.clip(), r.translate(m.x, m.y), r.rotate(p);
    const ee = Math.max(12, Math.min(we.w, we.h) / 6);
    r.beginPath();
    for (let _e = -L; _e <= L; _e += ee)
      r.moveTo(_e, -L), r.lineTo(_e, L);
    for (let _e = -L; _e <= L; _e += ee)
      r.moveTo(-L, _e), r.lineTo(L, _e);
    r.lineWidth = 1, r.strokeStyle = "rgba(255, 255, 255, 0.22)", r.stroke(), r.setTransform(1, 0, 0, 1, 0, 0), r.beginPath(), r.moveTo(m.x - H, m.y - k), r.lineTo(m.x + H, m.y + k), r.lineWidth = 1.5, r.setLineDash([8, 6]), r.strokeStyle = "rgba(255, 255, 255, 0.92)", r.shadowColor = "rgba(0, 0, 0, 0.8)", r.shadowBlur = 3, r.stroke(), r.setLineDash([]), r.restore();
  }
  function Pe() {
    return !l || !v() || t && K() || d && !ie() ? 0 : XC;
  }
  function Re() {
    const le = Fe(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (le <= 1e-4 || !l || i.mode !== "pano") return;
    const ve = v(), we = ve ? de(ve) : null, m = Array.isArray(we == null ? void 0 : we.corners) && we.corners.length >= 4 ? we.corners.map((H) => ({ x: Number(H.x || 0), y: Number(H.y || 0) })) : null;
    we != null && we.visible && m && (i.cutoutPanoDimCorners = m), ve && (we != null && we.visible) && m && (i.cutoutPanoFrameVisual = {
      item: ve,
      geom: we,
      selected: Se(ve),
      locked: ce(ve)
    });
    const p = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, L = we != null && we.visible ? m : p ? i.cutoutPanoDimCorners || [] : [];
    if (r.save(), r.fillStyle = `rgba(0, 0, 0, ${le})`, r.beginPath(), r.rect(0, 0, n.width, n.height), L.length >= 4) {
      r.moveTo(L[0].x, L[0].y);
      for (let H = 1; H < 4; H += 1) r.lineTo(L[H].x, L[H].y);
      r.closePath();
    }
    r.fill("evenodd"), r.restore();
  }
  return {
    connect(le) {
      ({
        areAllSelectedItemsLocked: f,
        contentSphere: h,
        deviceRect: g,
        drawEditorViewShot: b,
        editorViewInput: _,
        getActiveCutoutShot: v,
        getCutoutSelectableItemsForDisplay: P,
        getFrameViewLayout: W,
        getFrameViewRect: D,
        getList: O,
        getMultiSelectionGeom: S,
        getSelectedItems: $,
        getStickerDisplayAlpha: z,
        getUnwrapRect: te,
        isCameraSelected: ie,
        isErpCamera: G,
        isExternalSticker: j,
        isFreeSpaceView: K,
        isItemLocked: ce,
        isItemSelected: Se,
        isRasterObjectItem: be,
        isSceneSticker: ge,
        isShotItem: X,
        isStickerItem: A,
        isStrokeGroupItem: T,
        objectGeom: de,
        poseOf: he,
        projectDir: xe,
        projectDirUnwrap: He,
        projectErpLassoPointsToFrameRect: se,
        projectLassoPointsToCurrentView: R,
        rebuildPaintEngineIfNeeded: ae,
        rectFromPoints: me,
        renderEditorView: Ne,
        renderEditorViewUnwrap: Te,
        sampleStickerEdge: oe,
        sceneStickerShown: Ae,
        spaceViewState: x
      } = le);
    },
    drawGridUnwrap: N,
    drawGridPano: ue,
    drawObjects: B,
    drawFrameViewBackground: Y,
    drawLassoOutlineOverlay: V,
    drawFrameRollOverlay: ne,
    getCutoutPanoDimTarget: Pe,
    drawCutoutPanoPassepartout: Re
  };
}
function RI(e) {
  const {
    app: t,
    backgroundCanvas: n,
    canvas: r,
    editor: i,
    editorView: o,
    node: a,
    readOnly: s,
    runtime: l,
    scheduler: d,
    shotEditor: u,
    stageWrap: f,
    state: h,
    timeline: g,
    type: b,
    uiState: _,
    viewController: v
  } = e;
  let P, W, D, O, S, $, z, te, ie, G, j, K, ce, Se, be, ge, X, A, T, de, he, xe, He, se, R = () => {
  };
  function ae(Q = /* @__PURE__ */ new Set()) {
    G();
    const V = l.backgroundDirty;
    u && (A(), W(V, Q)), i.mode === "frame" ? (l.frameSafeRect = ge(), S(V)) : i.mode === "unwrap" ? z(V) : $(V), D(), ie(), he(), te(), O(), _.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && se(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, n.style.opacity = "1"), u && _.cameraPreview && (_.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const ne = Se();
    _.stageStatus = ne.status, _.stageStatusDetail = ne.detail, ne.status === nr ? (f == null || f.removeAttribute("data-stage-ready"), f == null || f.setAttribute("data-stage-loading-kind", ne.detail)) : (f == null || f.setAttribute("data-stage-ready", ""), f == null || f.removeAttribute("data-stage-loading-kind"));
  }
  function me(Q = i.interaction) {
    if (b !== "stickers" || i.mode !== "pano") return !1;
    const V = String((Q == null ? void 0 : Q.kind) || "");
    return V === "move" || V === "scale" || V === "scale_x" || V === "scale_y" || V === "rotate" ? !0 : V === "move_multi" ? Array.isArray(Q == null ? void 0 : Q.stickerSnapshots) && Q.stickerSnapshots.length > 0 : !1;
  }
  function Ne() {
    return !!i.interaction || !!g.drag;
  }
  function Te() {
    l.nodePreviewPending = !1, a.__panoLiveStateOverride = h, a.__panoLiveStateVersion = Number(a.__panoLiveStateVersion || 0) + 1, a.__panoLivePaintSurface = ce();
  }
  function oe(Q = {}) {
    var m, p, L, H, k, ee, _e, pe;
    const V = Q.reason ?? bt.STATE, ne = !!Q.localOnly, Pe = Q.externalSync === !0, Re = String(Q.cause || ""), le = String(((m = i.interaction) == null ? void 0 : m.kind) || "");
    (!ne || le === "view" || le === "pan_frame" || me() || !!i.viewTransition || Re === "mode" || Re === "frame_view" || Re === "cutout_frame") && (l.backgroundDirty = !0), ne && be() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!ne || Re === "selection" || Re === "mode" || Re === "cutout_frame") && (xe(), He()), Ne() ? l.nodePreviewPending = !0 : Te(), Pe && ((L = (p = a.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || L.call(p), (H = a.setDirtyCanvas) == null || H.call(a, !0, !1)), Pe && !ne && ((ee = (k = a.graph) == null ? void 0 : k.setDirtyCanvas) == null || ee.call(k, !0, !0), (pe = (_e = t == null ? void 0 : t.canvas) == null ? void 0 : _e.setDirty) == null || pe.call(_e, !0, !0)), d.requestDraw(V);
  }
  function Ae() {
    const Q = r.getBoundingClientRect(), V = Math.max(2, Math.round(Q.width)), ne = Math.max(2, Math.round(Q.height)), Pe = window.devicePixelRatio || 1, Re = [r.width, r.height, n.width, n.height].join("x");
    (r.width !== V || r.height !== ne) && (r.width = V, r.height = ne);
    const le = ik(Q.width || V, Q.height || ne, Pe, window.innerWidth || Q.width, window.innerHeight || Q.height);
    return o.resize(le.width, le.height), [r.width, r.height, n.width, n.height].join("x") === Re ? !1 : (l.backgroundDirty = !0, l.dirty = !0, u && x(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function x(Q) {
    Q(), d.wake();
  }
  function N() {
    return !!i.viewTransition || !!v.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || Ne();
  }
  function U(Q = performance.now(), V = /* @__PURE__ */ new Set()) {
    var ve;
    l.nodePreviewPending && !Ne() && Te(), V.forEach((we) => l.reasons.add(we)), V.size && (l.dirty = !0), [...V].some((we) => we !== bt.OVERLAY) && (l.backgroundDirty = !0), T(), l.lastTickTs > 0 ? Math.max(1e-3, (Q - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = Q;
    const ne = i.mode === "frame" && ((ve = i.interaction) == null ? void 0 : ve.kind) === "roll_frame" ? i.interaction : null;
    ne != null && ne.shot && (i.frameRollOverlayVisual = { shot: ne.shot });
    const Pe = ne ? 1 : 0;
    if (Math.abs(Pe - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = Pe, i.frameRollOverlayStartTs = Q), Math.abs(Number(i.frameRollOverlayAlpha || 0) - Pe) > 1e-6) {
      const we = Fe(
        (Q - Number(i.frameRollOverlayStartTs || Q)) / JC,
        0,
        1
      );
      i.frameRollOverlayAlpha = Wn(
        Number(i.frameRollOverlayFrom || 0),
        Pe,
        Qc(we)
      ), we >= 1 && (i.frameRollOverlayAlpha = Pe, Pe === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const Re = K();
    if (Math.abs(Re - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = Re, i.cutoutPanoDimStartTs = Q), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Re) > 1e-6) {
      const we = Fe(
        (Q - Number(i.cutoutPanoDimStartTs || Q)) / am,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Wn(
        Number(i.cutoutPanoDimFrom || 0),
        Re,
        Qc(we)
      ), we >= 1 && (i.cutoutPanoDimAlpha = Re), we >= 1 && Re === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const le = u && j() ? 1 : 0;
    if (Math.abs(le - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = le, i.cutoutPanoFrameStartTs = Q), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - le) > 1e-6) {
      const we = Fe(
        (Q - Number(i.cutoutPanoFrameStartTs || Q)) / am,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Wn(
        Number(i.cutoutPanoFrameFrom || 0),
        le,
        Qc(we)
      ), we >= 1 && (i.cutoutPanoFrameAlpha = le, le === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const we = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), m = Fe((Q - Number(i.outputPreviewAnimStartTs || 0)) / we, 0, 1), L = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? tI(m) : rI(m);
      i.outputPreviewAnim = Wn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, L), l.dirty = !0, m >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: we, done: m } = yN(i.viewTransition, Q);
      if (i.viewPosition = we.position, i.viewYaw = we.yaw_deg, i.viewPitch = we.pitch_deg, i.viewFov = we.hFOV_deg, i.viewDistance = we.distance, m) {
        const { end: p } = i.viewTransition;
        i.viewTransition = null, p && P(p), de();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (i.viewInertia.vx = Number(v.state.inertia.vx || 0), i.viewInertia.vy = Number(v.state.inertia.vy || 0), i.viewInertia.active = !!v.state.inertia.active, v.stepInertia(Q) && (i.viewInertia.vx = Number(v.state.inertia.vx || 0), i.viewInertia.vy = Number(v.state.inertia.vy || 0), i.viewInertia.active = !!v.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const we = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), ae(we);
    }
  }
  function ue(Q) {
    try {
      Q();
    } catch (V) {
      const ne = String((V == null ? void 0 : V.stack) || (V == null ? void 0 : V.message) || V || "unknown editor frame error");
      l.tickErrorSignature !== ne && (l.tickErrorSignature = ne, console.error("[PanoramaStickers] editor frame failed", V)), _.stageStatus = Kn, _.stageStatusDetail = "frame", f == null || f.setAttribute("data-stage-ready", ""), f == null || f.removeAttribute("data-stage-loading-kind");
    }
  }
  function M(Q = performance.now(), V = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const ne = NS();
    ue(() => U(Q, V)), AS(ne);
  }
  function Z() {
    !l.running || !Ae() || ue(() => {
      l.dirty = !1, ae(/* @__PURE__ */ new Set([bt.RESIZE]));
    });
  }
  const re = new ResizeObserver(Z);
  let I = null;
  function E() {
    I == null || I.removeEventListener("change", F), I = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), I.addEventListener("change", F);
  }
  function F() {
    E(), Z();
  }
  function B() {
    R = PS("editor", () => {
      var Q;
      return {
        type: b,
        readOnly: s,
        mode: i.mode,
        interaction: ((Q = i.interaction) == null ? void 0 : Q.kind) ?? null,
        timelineDrag: !!g.drag,
        playing: !!X.playing
      };
    });
  }
  function Y() {
    R(), l.running = !1, d.stop(), re.disconnect(), I.removeEventListener("change", F);
  }
  return {
    connect(Q) {
      ({
        applyViewTransitionEnd: P,
        drawCutoutOutputPreview: W,
        drawCutoutPanoPassepartout: D,
        drawFrameRollOverlay: O,
        drawFrameViewBackground: S,
        drawGridPano: $,
        drawGridUnwrap: z,
        drawLassoOutlineOverlay: te,
        drawObjects: ie,
        endEditorViewFrame: G,
        getActiveCutoutShot: j,
        getCutoutPanoDimTarget: K,
        getSharedLivePaintSurface: ce,
        getStageImageStatus: Se,
        isPaintCompositeInteraction: be,
        measureFrameSafeRect: ge,
        playback: X,
        rebuildPaintEngineIfNeeded: A,
        syncCutoutShot: T,
        syncFloatingViewButtonState: de,
        syncFrameRollKnob: he,
        syncLookAtFrameButtonState: xe,
        syncViewToggleState: He,
        updateSelectionMenu: se
      } = Q);
    },
    requestDraw: oe,
    syncCanvasSize: Ae,
    startAnimation: x,
    editorAnimating: N,
    tick: M,
    stageResizeObserver: re,
    watchPixelRatio: E,
    sampleEditorDiagnostics: B,
    stopRenderLoop: Y
  };
}
function VI(e) {
  const {
    cameraV2: t,
    editor: n,
    hideSidebar: r,
    paintColorPop: i,
    paintColorRow: o,
    paintColorSvCursor: a,
    paintHueHandle: s,
    previewMode: l,
    readOnly: d,
    runtime: u,
    sceneV2: f,
    shotEditor: h,
    state: g,
    studio: b,
    type: _,
    uiState: v
  } = e;
  let P, W, D, O, S, $, z, te, ie, G, j, K, ce, Se, be, ge, X, A, T, de, he, xe, He, se, R, ae, me, Ne, Te, oe, Ae, x, N = 0;
  function U() {
    v.toolButtons.forEach((V) => {
      const ne = V.attr === "data-tool-mode", Pe = V.attr === "data-paint-tool", Re = V.attr === "data-mask-tool";
      V.active = ne ? V.value === n.primaryTool : Pe ? V.key === n.paintTool : Re ? V.key === n.maskTool : !1, V.pressed = V.active ? "true" : V.pressed == null ? null : "false";
    });
  }
  function ue() {
    if (b && uo(v.toolButtons, "value", "add-camera", { disabled: ce() }), _ !== "cutout") return;
    const V = D();
    uo(v.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: V ? "Look At Frame" : "Add Frame",
      tip: V ? "Look at frame" : "Add frame",
      icon: V ? Ye.camera : Ye.plus_circle
    });
  }
  function M() {
    const V = kN({
      spaceView: xe(),
      spaceMode: yl(n.spaceMode, n.viewTransition),
      readOnly: d,
      frameMode: h && n.mode === "frame",
      showGrid: n.showGrid
    });
    v.space && Object.assign(v.space, V.space);
    for (const [ne, Pe] of Object.entries(V.buttons)) uo(v.floatingButtons, "action", ne, Pe);
  }
  function Z() {
    var Pe;
    const V = MN({ hasShot: !!D(), erp: ge(), hidden: ce() && !W(), studio: b });
    n.mode === "frame" && V.disabled && (b ? se(D()) : n.mode = "pano"), n.outputPreviewRect = null, v.viewButtons.forEach((Re) => {
      const le = Re.key === n.mode;
      Re.pressed = le ? "true" : "false", Re.visible = !(Re.key === "frame" && !h), Re.key === "frame" ? Object.assign(Re, V) : Re.disabled = !1;
    });
    const ne = h && n.mode === "frame" ? D() : null;
    v.frameRail.visible = !!ne, v.frameRail.disabled = d || (ne == null ? void 0 : ne.locked) === !0, v.frameRollKnob.visible = !!ne && !d && ne.locked !== !0, v.frameRollKnob.disabled = d || (ne == null ? void 0 : ne.locked) === !0, v.frameRollKnob.rollDeg = Number((ne == null ? void 0 : ne.roll_deg) ?? (ne == null ? void 0 : ne.rot_deg) ?? 0), v.frameRollKnob.displayValue = Mo(v.frameRollKnob.rollDeg), v.frameRollKnob.dragging = ((Pe = n.interaction) == null ? void 0 : Pe.kind) === "roll_frame", v.frameRollKnob.armed = !!ne && n.altModifier === !0, v.frameRail.rollKnob = v.frameRollKnob, v.frameRail.aspectLabel = ne ? zr(ne) : "", v.frameRail.aspectChoices = Sy(ne ? String(zr(ne)) : null, { erp: b, coverage: g.coverage }), ne || (v.frameRail.aspectOpen = !1), v.outputPreviewToggle.visible = _ === "cutout" && n.mode !== "frame" && !!D(), h && v.cameraPreview && (v.cameraPreview.visible = n.mode !== "frame" && P(), v.cameraPreview.expanded = !!n.outputPreviewExpanded, v.cameraPreview.settled = v.cameraPreview.settled === !0 && u.pendingStableLayoutFrames <= 0 && u.hasPresentedFrame), M(), T() ? Ae(n.pointerPos) : me(n.mode === "pano" ? "grab" : "default");
  }
  function re() {
    var ne;
    const V = n.mode === "frame" ? D() : null;
    v.frameRollKnob.visible = !!V && !d && V.locked !== !0, v.frameRollKnob.rollDeg = Number((V == null ? void 0 : V.roll_deg) ?? (V == null ? void 0 : V.rot_deg) ?? 0), v.frameRollKnob.displayValue = Mo(v.frameRollKnob.rollDeg), v.frameRollKnob.dragging = ((ne = n.interaction) == null ? void 0 : ne.kind) === "roll_frame", v.frameRollKnob.armed = !!V && n.altModifier === !0;
  }
  function I() {
    U();
    const V = _N({
      editor: n,
      swatches: vl,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: mr,
      colorsApproximatelyEqual: Sl,
      rgb01ToHsv: qu,
      hsv01ToRgb: Yu,
      getBrushPresetIdForTool: O,
      isActiveLassoTool: be
    });
    if (Object.assign(v.paintDock, V), oe(), !V.visible) {
      i && (i.hidden = !0);
      return;
    }
    N && (clearTimeout(N), N = 0), o && (!V.colorEnabled && i && !i.hidden && (N = window.setTimeout(() => {
      i.hidden = !0, v.paintDock.colorPopOpen = !1, N = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", V.pickerHueColor), i.style.setProperty("--picker-sat", V.pickerSat), i.style.setProperty("--picker-val", V.pickerVal), i.style.setProperty("--picker-hue", V.pickerHue)), a && (a.style.left = V.pickerSvLeft, a.style.top = V.pickerSvTop), s && (s.style.left = V.pickerHueLeft));
  }
  function E() {
    const V = R(h && n.mode === "frame" ? D() : te());
    V && (n.panelLastValues = {
      yaw_deg: Number(V.yaw_deg || 0),
      pitch_deg: Number(V.pitch_deg || 0),
      hFOV_deg: Number(V.hFOV_deg || (_ === "stickers" ? 30 : 90)),
      vFOV_deg: Number(V.vFOV_deg || (_ === "stickers" ? 30 : 60)),
      rot_deg: Number(V.rot_deg || 0),
      roll_deg: Number(V.roll_deg || 0),
      aspect_id: zr(V)
    }, F());
  }
  function F() {
    Ne(), Te(), Y();
  }
  function B() {
    const V = h && n.mode === "frame" ? D() : null;
    return [...ie(), ae(), V].some((ne) => de(ne) ? ol(ne) : he(ne) && ce() && ol(g.camera));
  }
  function Y() {
    if (r) return;
    g.ui_settings = g.ui_settings || {};
    const V = vN(g.ui_settings);
    if (l) {
      v.sidePanel = SN({
        coverage: g.coverage,
        uiSettings: V,
        normalizeCoverageValue: En
      });
      return;
    }
    const ne = te(), Pe = h && n.mode === "frame" ? D() : null, Re = Pe || ne, le = Pe ? [Pe] : ie(), ve = Pe ? "shot" : G();
    if (le.length > 1 && (n.panelLastValues = n.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), Re && ve !== "stroke") {
      const Oe = R(Re);
      n.panelLastValues = {
        yaw_deg: Number(Oe.yaw_deg || 0),
        pitch_deg: Number(Oe.pitch_deg || 0),
        hFOV_deg: Number(Oe.hFOV_deg || (ve === "image" ? 30 : 90)),
        vFOV_deg: Number(Oe.vFOV_deg || (ve === "image" ? 30 : 60)),
        rot_deg: Number(Oe.rot_deg || 0),
        roll_deg: Number(Oe.roll_deg || 0),
        aspect_id: zr(Oe)
      }, de(Re) && (n.panelLastValues.opacity = Vi(Re, n.frame).opacity * 100);
    }
    const we = n.panelLastValues || (_ === "stickers" || ve === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), m = ve === "stroke" ? null : Re, p = ae(), L = t && (ve === "shot" || ve === "frame") && Se(), H = p ? _x(p, n.frame) : L ? { ...m, ...yx(g.camera, n.frame), vFOV_deg: m.vFOV_deg } : de(m) ? n.panelLastValues : m || we, k = p ? x(p) : !!m && !A(m);
    n.panelWasEnabled = k, ue();
    let ee = null;
    if (Pe) {
      const Oe = K({ item: Pe, kind: "shot", label: "Frame" });
      ee = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: Oe.label,
        currentIcon: Oe.icon || null,
        items: [{
          id: String(Pe.id || ""),
          label: Oe.label,
          icon: Oe.icon || null,
          active: !0
        }]
      };
    } else if (_ === "stickers" || _ === "cutout") {
      const Oe = [{
        id: "",
        label: _ === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (_ === "stickers") {
        const Ie = D();
        Ie && Oe.push({ id: Ie.id, label: "Camera", icon: j("frame"), item: Ie, kind: "frame" }), z().forEach((De, Be) => {
          var wt, pt;
          if (!De || de(De) && !De.visible) return;
          const Ue = f ? xu(De) : X(De) ? String(De.id || of) : String(((pt = (wt = g.assets) == null ? void 0 : wt[De.asset_id]) == null ? void 0 : pt.name) || De.asset_id || De.id), Ke = `${Be + 1}. ${Ue}${X(De) && He(De) ? " (hidden)" : ""}`, Qe = K({ item: De, label: Ke, kind: "image" });
          Oe.push({ id: De.id, label: Qe.label, icon: Qe.icon, item: De, kind: "image" });
        });
      } else
        S().forEach((Ie) => {
          if (!(Ie != null && Ie.item)) return;
          const De = K(Ie);
          Oe.push({ id: Ie.item.id, label: De.label, icon: De.icon, item: Ie.item, kind: Ie.kind });
        });
      const C = (m == null ? void 0 : m.id) || "", ye = p ? { label: xu(p), icon: Ye.globe } : Oe.find((Ie) => Ie.id === C) || Oe[0];
      ee = {
        label: "Selection",
        open: !1,
        disabled: Oe.length <= 1,
        currentLabel: ye.label,
        currentIcon: ye.icon || null,
        items: Oe.map((Ie) => ({
          id: Ie.id,
          label: Ie.label,
          icon: Ie.icon || null,
          active: Ie.id === C
        }))
      };
    }
    const _e = [], pe = (Oe, C, ye, Ie, De) => {
      const Be = Fe(Number(H[Oe] || 0), ye, Ie);
      _e.push({
        key: Oe,
        label: C,
        min: ye,
        max: Ie,
        step: De,
        value: Be,
        displayValue: Mo(Be),
        fillPct: Fe((Be - ye) / Math.max(1e-6, Ie - ye) * 100, 0, 100),
        enabled: k && !d
      });
    }, Le = [];
    if (p) {
      for (const [Oe, C] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const ye = Xc(H[Oe]);
        pe(Oe, C, -ye, ye, 0.01);
      }
      pe("yaw_deg", "Yaw", -180, 180, 0.1), pe("pitch_deg", "Pitch", -90, 90, 0.1), pe("roll_deg", "Roll", -180, 180, 0.1), pe("scale", "Scale", Ay, Xc(H.scale), 0.01), pe("opacity", "Opacity", 0, 100, 1);
    } else if (le.length > 1)
      Le.push(`Selected objects: ${le.length}`), Le.push("Multi-selection supports z-order and delete.");
    else {
      const Oe = ve === "shot" || ve === "frame";
      if (L)
        for (const [C, ye] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Ie = Xc(H[C]);
          pe(C, ye, -Ie, Ie, 0.01);
        }
      pe("yaw_deg", "Yaw", -180, 180, 0.1), pe("pitch_deg", "Pitch", -90, 90, 0.1), pe(ve === "image" || _ === "stickers" && !Oe ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), pe("hFOV_deg", "H FOV", 1, 179, 0.1), pe("vFOV_deg", "V FOV", 1, 179, 0.1), Oe && _e.forEach((C) => {
        C.enabled = C.enabled && PN(C.key, { erp: ge() });
      }), f && !Oe && pe("opacity", "Opacity", 0, 100, 1);
    }
    v.sidePanel = AN({
      coverage: g.coverage,
      readOnly: d,
      selectionPicker: ee,
      enabled: k,
      selectedKind: p ? "world" : ve,
      selectedItems: le,
      params: _e,
      notes: Le,
      uiSettings: V,
      normalizeCoverageValue: En
    });
  }
  function Q() {
    const { canUndo: V, canRedo: ne } = $();
    uo(v.toolButtons, "value", "undo", { disabled: !V }), uo(v.toolButtons, "value", "redo", { disabled: !ne });
  }
  return {
    connect(V) {
      ({
        cameraPreviewShown: P,
        cameraShoots: W,
        getActiveCutoutShot: D,
        getBrushPresetIdForTool: O,
        getCutoutInspectorItems: S,
        getHistoryCapabilities: $,
        getList: z,
        getSelected: te,
        getSelectedItems: ie,
        getSelectedKind: G,
        getSelectionItemIcon: j,
        getSelectionItemLabelData: K,
        hasCamera: ce,
        hasSpaceContent: Se,
        isActiveLassoTool: be,
        isErpCamera: ge,
        isExternalSticker: X,
        isItemLocked: A,
        isPaintCursorEnabled: T,
        isSceneSticker: de,
        isShotItem: he,
        isSpaceView: xe,
        isStickerHidden: He,
        leaveFrameView: se,
        poseOf: R,
        selectedWorldSticker: ae,
        setCanvasCursor: me,
        syncCutoutShot: Ne,
        syncTimeline: Te,
        syncVideoTransportVisibility: oe,
        updateCursor: Ae,
        worldStickerEditable: x
      } = V);
    },
    syncLookAtFrameButtonState: ue,
    syncFloatingViewButtonState: M,
    syncViewToggleState: Z,
    syncFrameRollKnob: re,
    syncPaintUi: I,
    syncSidePanelControls: E,
    updateSidePanel: F,
    inspectorTimed: B,
    syncSidePanelModel: Y,
    syncUndoRedoButtons: Q
  };
}
function $I(e) {
  const {
    capture: t,
    cutoutV2: n,
    editor: r,
    node: i,
    readOnly: o,
    sceneV2: a,
    state: s,
    stateV2: l,
    studio: d,
    timeline: u,
    timelinePlayhead: f,
    uiState: h,
    videoEl: g,
    videoTimelineFps: b
  } = e;
  let _, v, P, W, D, O, S, $, z, te, ie, G, j, K, ce;
  function Se() {
    if (!l || o) return;
    const x = ge(), N = u.selection, U = N && X(N.owner);
    if (N) {
      const ue = U ? A(N) : [];
      N.frames = N.frames.filter((M) => ue.some((Z) => U[Z].keyframes.some((re) => re.frame === M))), N.frames.length || (u.selection = null);
    }
    h.timeline = TN(s, {
      span: x,
      selection: u.selection,
      selectedId: r.worldSelectedId || r.selectedId,
      expanded: u.expanded ?? be(),
      openRows: u.openRows,
      audio: He() && h.videoTransport.hasAudio ? { muted: g.muted } : null,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: b(i) !== null || dk(i, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: P(),
      cameraHideable: d,
      stickers: !n,
      scene: a && !!Hd(i).scene,
      sceneLocked: !!t
    }), h.easing = u.selection ? DN(U, A(u.selection), u.selection.frames, T(u.selection.owner)) : null;
  }
  function be() {
    return Xw(s, { cameraOnly: n, camera: d });
  }
  function ge(x = null) {
    if (t != null && t.frames) return t.frames;
    const N = s.timeline.fps, U = s.stickers.find(D), ue = U ? v() : null, M = Math.max(
      h.videoTransport.ready ? Math.round(Number(h.videoTransport.duration || 0) * N) : 0,
      ue ? T0(U.clip, N, ue.meta) : 0
    );
    return Jg(s, { minimum: Math.round(N * 5), frames: M, openClip: x, camera: n && !t || d });
  }
  function X(x) {
    return x === "camera" ? P() ? s.camera : null : x === "scene" ? a ? s.scene : null : s.stickers.find((N) => N.id === x) || null;
  }
  function A(x) {
    return x.lane ? [x.lane] : Lo(X(x.owner));
  }
  function T(x) {
    if (x === "camera") return 0;
    const { clip: N } = X(x);
    return N.start - N.in;
  }
  function de(x) {
    return `${To(x, r.frame)}:${x.start - x.in}`;
  }
  function he(x) {
    const N = X(x);
    return !!N && N.locked !== !0;
  }
  function xe(x) {
    const N = Math.max(0, Math.round(x));
    if (N === r.frame) return;
    G(), r.frame = N, f.frame.value = N, G();
    const U = [r.selectedId, r.worldSelectedId];
    te(), O(), U[0] !== r.selectedId || U[1] !== r.worldSelectedId ? ce() : W() && j(), K(), ie({ reason: bt.PLAYHEAD });
  }
  function He() {
    return g instanceof HTMLVideoElement && !!g.getAttribute("src");
  }
  function se(x) {
    z(), S.seek(x);
  }
  function R() {
    l && S.stop();
  }
  function ae() {
    z(), S.toggle();
  }
  function me() {
    G(), O(), ce(), K(), ie();
  }
  function Ne() {
    $(), _(), me();
  }
  function Te() {
    const { selection: x } = u;
    he(x.owner) && (R(), Hw(X(x.owner), A(x), x.frames, r.frame - T(x.owner)), u.selection = null, Ne());
  }
  function oe(x) {
    const N = Do(x);
    if (N === null || N === s.timeline.fps) return;
    R();
    const U = Math.round(r.frame * N / s.timeline.fps);
    dx(s, N), u.selection = null, S.seek(U), Ne();
  }
  function Ae() {
    const x = b(i);
    x !== null && x !== s.timeline.fps && oe(x);
  }
  return {
    connect(x) {
      ({
        commitAndRefreshNode: _,
        getPortMedia: v,
        hasCamera: P,
        inspectorTimed: W,
        isExternalSticker: D,
        markObjectVisualsDirty: O,
        playback: S,
        pushHistory: $,
        refreshModalVideoSource: z,
        releaseHiddenSelection: te,
        requestDraw: ie,
        syncCutoutShot: G,
        syncSidePanelModel: j,
        updateSelectionMenu: K,
        updateSidePanel: ce
      } = x);
    },
    syncTimeline: Se,
    timelineTimed: be,
    timelineSpanFrames: ge,
    timelineOwner: X,
    selectedLanes: A,
    timelineOffset: T,
    clipView: de,
    timelineEditable: he,
    setTimelineFrame: xe,
    jumpTimelineTo: se,
    stopTimelinePlayback: R,
    togglePlayback: ae,
    refreshTimelineEdit: me,
    commitTimelineEdit: Ne,
    deleteSelectedKeyframes: Te,
    changeTimelineFps: oe,
    applyVideoTimelineFps: Ae
  };
}
function zI(e) {
  const {
    dragFrames: t,
    editor: n,
    readOnly: r,
    state: i,
    stateV2: o,
    studio: a,
    timeline: s,
    uiState: l
  } = e;
  let d, u, f, h, g, b, _, v, P, W, D, O, S, $, z, te, ie, G, j, K, ce, Se, be, ge, X, A, T;
  function de(he) {
    if (!(r || !o)) {
      if (he.type === "seek") {
        if (he.phase === "move") {
          s.scrubFrame = he.frame, t.request("seek");
          return;
        }
        t.cancel(), he.phase === "start" && P(), v.seek(he.frame);
        return;
      }
      if (he.type === "play") {
        ge();
        return;
      }
      if (he.type === "mute") {
        X(), G();
        return;
      }
      if (he.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? be()), s.selection = null, G();
        return;
      }
      if (he.type === "toggle-row") {
        s.openRows.has(he.id) ? s.openRows.delete(he.id) : s.openRows.add(he.id), G();
        return;
      }
      if (he.type === "toggle-visible") {
        if (he.id === xy) i.painting_visible = !i.painting_visible;
        else {
          const xe = ce(he.id);
          if (!xe || he.id === "camera" && !a) return;
          xe.visible = !xe.visible;
        }
        D(), h();
        return;
      }
      if (he.type === "select-row") {
        const xe = i.stickers.find((He) => He.id === he.id);
        if (xe && !xe.visible || he.id === "camera" && !d()) return;
        xe && !To(xe.clip, n.frame) && _(xe.clip.start), (xe == null ? void 0 : xe.placement) === "world" ? S(xe.id) : he.id === "camera" ? z(g()) : z(b().find((He) => He.id === he.id) || null), ie(), s.selection = null, T(), A(), O();
        return;
      }
      if (he.type === "select-keys") {
        const xe = K(he.owner), He = he.frames.map((ae) => ae - xe), se = s.selection, R = (se == null ? void 0 : se.owner) === he.owner && se.lane === he.lane;
        if (he.additive && R) {
          const ae = new Set(se.frames);
          for (const me of He)
            ae.has(me) ? ae.delete(me) : ae.add(me);
          se.frames = [...ae].sort((me, Ne) => me - Ne);
        } else
          s.selection = He.length ? { owner: he.owner, lane: he.lane, frames: He } : null;
        G();
        return;
      }
      if (he.type === "move-keys") {
        const xe = s.selection;
        if (!xe || !j(xe.owner)) return;
        const He = ce(xe.owner), se = $(xe);
        if (he.phase === "start") {
          te(), s.drag = { keyframes: se.map((me) => structuredClone(He[me].keyframes)), frames: xe.frames };
          return;
        }
        const { drag: R } = s;
        if (!(R != null && R.keyframes)) return;
        se.forEach((me, Ne) => {
          He[me].keyframes = structuredClone(R.keyframes[Ne]);
        });
        const ae = Gw(He, se, R.frames, he.delta, -K(xe.owner));
        if (xe.frames = R.frames.map((me) => me + ae), he.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, ae ? h() : W();
        return;
      }
      if (he.type === "clip") {
        const xe = he.id === "scene" ? ce("scene") : i.stickers.find((ae) => ae.id === he.id);
        if (!xe || xe.locked) return;
        if (he.phase === "start") {
          te(), s.drag = { clip: { ...xe.clip }, span: Se(xe.clip) };
          return;
        }
        const { drag: He } = s;
        if (!(He != null && He.clip)) return;
        const se = He.clip, R = f(xe.clip);
        if (xe.clip = { ...se }, he.delta && he.mode === "move" ? Bw(xe.clip, he.delta) : he.delta && he.mode === "start" ? Uw(xe.clip, se.start + he.delta) : he.delta && Yw(xe.clip, (se.duration === null ? He.span : se.start + se.duration) + he.delta, He.span), he.phase !== "end") {
          t.request("timeline"), f(xe.clip) !== R && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, D(), JSON.stringify(xe.clip) !== JSON.stringify(se) ? h() : W();
        return;
      }
      if (he.type === "key-row") {
        if (he.owner === "scene" || !j(he.owner)) return;
        te(), $w(ce(he.owner), n.frame - K(he.owner)), h();
        return;
      }
      if (he.type === "fps") {
        const xe = Zw(he.fps);
        if (xe === null || xe === i.timeline.fps || l.timeline.fpsLocked) {
          G();
          return;
        }
        u(xe);
        return;
      }
      if (he.type === "length") {
        const xe = Qw(he.length);
        if (xe === void 0 || xe === i.timeline.length) {
          G();
          return;
        }
        te(), i.timeline.length = xe, h();
        return;
      }
      if (he.type === "easing") {
        const xe = s.selection;
        if (!xe || !j(xe.owner)) return;
        te(), Kw(ce(xe.owner), $(xe), xe.frames, he.easing), he.commit ? h() : W();
      }
    }
  }
  return {
    connect(he) {
      ({
        cameraShoots: d,
        changeTimelineFps: u,
        clipView: f,
        commitTimelineEdit: h,
        getActiveCutoutShot: g,
        getList: b,
        jumpTimelineTo: _,
        playback: v,
        refreshModalVideoSource: P,
        refreshTimelineEdit: W,
        releaseHiddenSelection: D,
        requestDraw: O,
        selectWorldSticker: S,
        selectedLanes: $,
        setSelectedItem: z,
        stopTimelinePlayback: te,
        syncFloatingViewButtonState: ie,
        syncTimeline: G,
        timelineEditable: j,
        timelineOffset: K,
        timelineOwner: ce,
        timelineSpanFrames: Se,
        timelineTimed: be,
        togglePlayback: ge,
        toggleVideoMuted: X,
        updateSelectionMenu: A,
        updateSidePanel: T
      } = he);
    },
    onTimelineAction: de
  };
}
function jI(e) {
  const {
    app: t,
    bgWidget: n,
    cameraV2: r,
    coverageWidget: i,
    node: o,
    presetWidget: a,
    readOnly: s,
    state: l,
    stateWidget: d
  } = e;
  let u, f, h, g;
  function b() {
    s || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", a && (l.output_preset = f(Number(l.output_preset || 2048))), i && (l.coverage = En(i.value)), n && (l.bg_color = String(n.value || l.bg_color || "#00ff00")), _(), o.setDirtyCanvas(!0, !0));
  }
  function _() {
    var S;
    if (s) return;
    h(), o0(l), l.coverage = En(l.coverage), i0(o, l.active);
    const O = a0(o, l);
    d && !s0(o, O, String(d.value ?? ""), { rebased: r }) && (d.value = O, (S = d.callback) == null || S.call(d, O));
  }
  function v() {
    l.ui_settings = hI(l.ui_settings), s || _();
  }
  function P() {
    var O;
    s || (_(), (O = o.setDirtyCanvas) == null || O.call(o, !0, !0));
  }
  function W() {
    s || u() && g().catch((O) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", O);
    });
  }
  function D(O = {}) {
    var z, te, ie, G, j, K, ce, Se, be;
    const S = O.syncPreview !== !1, $ = O.syncGraph !== !1;
    S && ((te = (z = o.__panoPreviewNodeRuntime) == null ? void 0 : z.requestDraw) == null || te.call(z), (G = (ie = o.__panoDomPreview) == null ? void 0 : ie.requestDraw) == null || G.call(ie), (j = o.setDirtyCanvas) == null || j.call(o, !0, !1)), $ && ((ce = (K = o.graph) == null ? void 0 : K.setDirtyCanvas) == null || ce.call(K, !0, !0), (be = (Se = t == null ? void 0 : t.canvas) == null ? void 0 : Se.setDirty) == null || be.call(Se, !0, !0));
  }
  return {
    connect(O) {
      ({
        needsPaintingLayerSync: u,
        resolveEditorOutputPresetWidth: f,
        syncCutoutShot: h,
        syncPaintingLayerAsync: g
      } = O);
    },
    apply: b,
    commitState: _,
    persistUiSettings: v,
    commitAndRefreshNode: P,
    triggerBackgroundPersistenceOnClose: W,
    syncCoverageChangeToNodePreviews: D
  };
}
function HI(e) {
  const {
    cutoutV2: t,
    editor: n,
    readOnly: r,
    sceneV2: i,
    state: o,
    studio: a,
    type: s,
    uiState: l
  } = e;
  let d, u, f, h, g, b, _, v, P, W, D, O, S, $, z, te, ie, G, j, K, ce, Se, be, ge, X, A, T, de, he, xe, He, se, R, ae, me;
  function Ne(ue, M, Z = "Clear") {
    return new Promise((re) => {
      l.confirmDialog = {
        visible: !0,
        title: String(ue || ""),
        text: String(M || ""),
        confirmLabel: String(Z || "Confirm"),
        resolve: re
      };
    });
  }
  async function Te() {
    var Z, re;
    if (r || !await Ne(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    o.painting = Fo(null), ge();
    const M = f();
    if (s === "stickers")
      o.stickers = i ? o.stickers.filter((I) => I.placement === "world" || M.includes(I)) : M, i || (o.assets = {}), n.selectedId = ((Z = M[0]) == null ? void 0 : Z.id) || null, n.selectedIds = n.selectedId ? [n.selectedId] : [], o.active.selected_sticker_id = ((re = M[0]) == null ? void 0 : re.id) || null, A();
    else {
      const I = sx(o.shots, o.active.selected_shot_id);
      o.stickers = M, o.assets = {}, o.shots = I.shots, n.selectedId = I.selectedShotId, n.selectedIds = n.selectedId ? [n.selectedId] : [], o.active.selected_sticker_id = null, o.active.selected_shot_id = I.selectedShotId, !I.selectedShotId && n.mode === "frame" && (n.mode = "pano"), n.cutoutAspectOpen = !1, A();
    }
    T(), h(), ae(), R(), de();
  }
  async function oe(ue) {
    var E, F, B, Y;
    if (r) return;
    const M = ue === "mask" ? "mask" : "paint", Z = M === "mask" ? "Mask" : "Paint", re = W(M);
    if (!(!re.length && !(((E = n.interaction) == null ? void 0 : E.kind) === "draw" && ((F = n.interaction) == null ? void 0 : F.layerKind) === M) || !await Ne(
      `Clear ${Z}`,
      `This will remove all ${M} strokes in the current node.`,
      `Clear ${Z}`
    ))) {
      if (((B = n.interaction) == null ? void 0 : B.kind) === "draw" && ((Y = n.interaction) == null ? void 0 : Y.layerKind) === M) {
        const Q = b(n.interaction);
        Q && n.paintEngine.cancelActiveStroke(Q), n.interaction = null;
      }
      re.length = 0, o.painting.raster_objects = D().filter((Q) => String((Q == null ? void 0 : Q.layerKind) || "paint") !== M), M === "paint" && (P().length = 0), ge(), T(), h(), ae(), R(), se(), de();
    }
  }
  function Ae() {
    if (r) return;
    const ue = O();
    if (!ue || !j(ue) || $(ue) || i && ce(ue)) return;
    let M;
    i ? M = Mx(ue, Ai("st"), v()) : (M = JSON.parse(JSON.stringify(ue)), M.id = Ai("st"), M.yaw_deg = zt((M.yaw_deg || 0) + 8), M.z_index = v()), o.stickers.push(M), o.active.selected_sticker_id = M.id, n.selectedId = M.id, n.selectedIds = [M.id], Se(), T(), h(), R(), ae(), de();
  }
  function x() {
    const ue = he();
    return ue ? (me(ue) && (xe(), xx(o, ue.id), u(), Se(), T(), h(), ae(), R(), He(), de()), !0) : !1;
  }
  function N() {
    var Z, re, I, E, F;
    if (r || t) return;
    const ue = S(), M = O();
    if (!(!M && ue.length === 0) && !ue.some((B) => z(B))) {
      if (xe(), ue.length > 1) {
        const B = new Set(ue.filter((V) => K(V)).map((V) => String(V.actionGroupId || V.id || ""))), Y = new Set(ue.filter((V) => te(V)).map((V) => X(V.rasterObjectId || V.id || ""))), Q = new Set(ue.filter(j).map((V) => String(V.id || "")));
        B.size > 0 && (o.painting.paint.strokes = (Array.isArray((re = (Z = o.painting) == null ? void 0 : Z.paint) == null ? void 0 : re.strokes) ? o.painting.paint.strokes : []).filter((V) => !B.has(String((V == null ? void 0 : V.actionGroupId) || ""))), o.painting.groups = P().filter((V) => !B.has(String((V == null ? void 0 : V.actionGroupId) || (V == null ? void 0 : V.id) || ""))), ge()), Y.size > 0 && (o.painting.raster_objects = D().filter((V) => !Y.has(String((V == null ? void 0 : V.id) || ""))), be()), Q.size > 0 && (o.stickers = (Array.isArray(o.stickers) ? o.stickers : []).filter((V) => Q.has(String((V == null ? void 0 : V.id) || "")) ? $(V) ? (G(V) || (V.visible = !1), !0) : !1 : !0), A(), Se()), n.selectedId = null, n.selectedIds = [], T(), h(), ae(), R(), de();
        return;
      }
      if (K(M)) {
        const B = String(M.actionGroupId || M.id || "").trim();
        o.painting.paint.strokes = (Array.isArray((E = (I = o.painting) == null ? void 0 : I.paint) == null ? void 0 : E.strokes) ? o.painting.paint.strokes : []).filter((Y) => String((Y == null ? void 0 : Y.actionGroupId) || "").trim() !== B), o.painting.groups = P().filter((Y) => String((Y == null ? void 0 : Y.actionGroupId) || (Y == null ? void 0 : Y.id) || "").trim() !== B), ge(), n.selectedId = null, n.selectedIds = [], T(), h(), ae(), R(), de();
        return;
      }
      if (te(M)) {
        const B = X(M.rasterObjectId || M.id || "");
        o.painting.raster_objects = D().filter((Y) => String((Y == null ? void 0 : Y.id) || "").trim() !== B), be(), n.selectedId = null, n.selectedIds = [], T(), h(), ae(), R(), de();
        return;
      }
      if (a && ie(M)) {
        g();
        return;
      }
      if (s === "stickers" || j(M)) {
        if ($(M)) {
          if (G(M)) return;
          M.visible = !1, Se(), T(), h(), ae(), R(), de();
          return;
        }
        o.stickers = o.stickers.filter((B) => B.id !== M.id), A(), Se(), n.selectedId = ((F = _()[0]) == null ? void 0 : F.id) || null, n.selectedIds = n.selectedId ? [n.selectedId] : [], o.active.selected_sticker_id = n.selectedId, T(), h(), ae(), R(), de();
        return;
      }
      d();
    }
  }
  function U() {
    n.primaryTool !== "cursor" && (n.primaryTool = "cursor", se(), ae());
  }
  return {
    connect(ue) {
      ({
        clearCutoutFrame: d,
        clearWorldSelection: u,
        collectExternalStickersForClearAll: f,
        commitAndRefreshNode: h,
        deleteStudioCamera: g,
        getActivePaintTargetDescriptor: b,
        getList: _,
        getNextStickerZIndex: v,
        getPaintingGroupList: P,
        getPaintingLayerList: W,
        getRasterObjectList: D,
        getSelected: O,
        getSelectedItems: S,
        isExternalSticker: $,
        isItemLocked: z,
        isRasterObjectItem: te,
        isShotItem: ie,
        isStickerHidden: G,
        isStickerItem: j,
        isStrokeGroupItem: K,
        isUploadingSticker: ce,
        markObjectVisualsDirty: Se,
        markPaintCompositeVisualsDirty: be,
        markPaintStrokeVisualsDirty: ge,
        parseRasterObjectSelectionId: X,
        pruneUnusedAssets: A,
        pushHistory: T,
        requestDraw: de,
        selectedWorldSticker: he,
        stopTimelinePlayback: xe,
        syncFloatingViewButtonState: He,
        syncPaintUi: se,
        updateSelectionMenu: R,
        updateSidePanel: ae,
        worldStickerEditable: me
      } = ue);
    },
    clearAll: Te,
    clearPaintingLayer: oe,
    duplicateSelected: Ae,
    deleteSelectedWorldSticker: x,
    deleteSelected: N,
    forceCursorTool: U
  };
}
function GI(e) {
  const {
    api: t,
    canvas: n,
    cutoutV2: r,
    dragCue: i,
    editor: o,
    editorView: a,
    imageCache: s,
    node: l,
    readOnly: d,
    sceneV2: u,
    stageWrap: f,
    state: h,
    type: g,
    vueModal: b
  } = e;
  let _, v, P, W, D, O, S, $, z, te, ie, G, j, K, ce, Se, be, ge, X, A, T;
  function de(E) {
    return Qd(E == null ? void 0 : E.dataTransfer);
  }
  function he(E) {
    const F = !!E;
    i.active !== F && (i.active = F, f.classList.toggle("drop-active", F));
  }
  function xe() {
    const E = new Set(
      (h.stickers || []).map((F) => String((F == null ? void 0 : F.asset_id) || "")).filter((F) => !!F)
    );
    Object.keys(h.assets || {}).forEach((F) => {
      E.has(F) || (delete h.assets[F], s.delete(F));
    });
  }
  async function He(E) {
    if (d || r || g !== "stickers" && g !== "cutout" || !rr(E)) return;
    if (u) {
      X(), await Ne(E);
      return;
    }
    const F = Ai("asset"), B = la(l, `add:${F}`, async () => {
      try {
        const { image: Y } = await ca(E);
        s.set(F, Y);
        const Q = Ai("st");
        h.stickers.push({
          id: Q,
          asset_id: F,
          yaw_deg: o.viewYaw,
          pitch_deg: o.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: P(30, Number(Y.naturalWidth || Y.width || 1), Number(Y.naturalHeight || Y.height || 1)),
          rot_deg: 0,
          z_index: S()
        }), Se(h.stickers[h.stickers.length - 1]), O(), T(), A(), K();
        const V = await Pi(E, {
          fetchApi: (Re, le) => t.fetchApi(Re, le)
        });
        if (!(Array.isArray(h.stickers) ? h.stickers : []).filter((Re) => String((Re == null ? void 0 : Re.asset_id) || "") === F).length) return;
        h.assets[F] = V, xe(), j(), v(), T(), A(), K();
      } catch (Y) {
        delete h.assets[F], s.delete(F);
        const Q = Array.isArray(h.stickers) ? h.stickers : [], V = Q.filter((ne) => String((ne == null ? void 0 : ne.asset_id) || "") === F);
        throw V.length && (h.stickers = Q.filter((ne) => String((ne == null ? void 0 : ne.asset_id) || "") !== F), V.some((ne) => String((ne == null ? void 0 : ne.id) || "") === String(o.selectedId || "")) && Se(null), T(), A(), K(), v()), Y;
      }
    });
    try {
      await B;
    } catch {
    }
  }
  function se() {
    var E;
    d || g !== "stickers" && g !== "cutout" || (E = b == null ? void 0 : b.openImagePicker) == null || E.call(b, "add");
  }
  function R() {
    var E;
    d || !u || (E = b == null ? void 0 : b.openImagePicker) == null || E.call(b, "add-world");
  }
  async function ae(E) {
    d || !u || !rr(E) || (X(), await Ne(E, "world"));
  }
  function me() {
    const E = { x: n.width / 2, y: n.height / 2 }, F = te() ? a.pick(D(), E.x, E.y, n.width, n.height) : null;
    return Ux(be(), F, W());
  }
  async function Ne(E, F = "sky") {
    const B = Ai("st"), Y = la(l, `add:${B}`, async () => {
      const { image: Q } = await ca(E), V = {
        yaw_deg: o.viewYaw,
        pitch_deg: o.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: P(30, Number(Q.naturalWidth || Q.width || 1), Number(Q.naturalHeight || Q.height || 1)),
        rot_deg: 0
      }, ne = { kind: "file", filename: "" }, Pe = F === "world" ? kx(B, ne, me()) : Dd(B, ne, V, S());
      s.set(ge(Pe), Q), h.stickers.push(Pe), F === "world" ? ce(B) : Se(Pe), O(), T(), A(), K();
      try {
        const Re = await Pi(E, {
          fetchApi: (ve, we) => t.fetchApi(ve, we)
        }), le = h.stickers.find((ve) => ve.id === B);
        if (!le) return;
        le.source = Os(Re), s.set(ge(le), Q), j(), v();
      } catch (Re) {
        throw h.stickers = h.stickers.filter((le) => le.id !== B), o.selectedId === B && Se(null), o.worldSelectedId === B && _(), j(), v(), Re;
      } finally {
        T(), A(), K();
      }
    });
    try {
      await Y;
    } catch {
    }
  }
  async function Te(E, F) {
    const B = la(l, `replace:${F}:${Ai("asset")}`, async () => {
      const { image: Y } = await ca(E), Q = await Pi(E, {
        fetchApi: (ne, Pe) => t.fetchApi(ne, Pe)
      }), V = h.stickers.find((ne) => ne.id === F);
      if (V) {
        V.source = Os(Q), V.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const ne of [V.size.value, ...V.size.keyframes.map((Pe) => Pe.value)])
          ne.vFOV_deg = P(ne.hFOV_deg, Number(Y.naturalWidth || Y.width || 1), Number(Y.naturalHeight || Y.height || 1));
        s.set(ge(V), Y), G(), j(), v(), T(), A(), K();
      }
    });
    try {
      await B;
    } catch {
    }
  }
  async function oe(E) {
    if (d || g !== "stickers" && g !== "cutout") return;
    const F = $();
    if (!F || !ie(F) || z(F) || !rr(E)) return;
    if (u) {
      await Te(E, F.id);
      return;
    }
    const B = String(F.id || ""), Y = Ai("asset"), Q = la(l, `replace:${B}:${Y}`, async () => {
      var ve;
      const V = (Array.isArray(h.stickers) ? h.stickers : []).find((we) => String((we == null ? void 0 : we.id) || "") === B) || null;
      if (!V || !ie(V) || z(V)) return;
      const ne = String(V.asset_id || ""), Pe = ne ? cn(((ve = h.assets) == null ? void 0 : ve[ne]) || null) : null, Re = Number(V.vFOV_deg || 0), le = V.crop && typeof V.crop == "object" ? { ...V.crop } : null;
      try {
        const { image: we } = await ca(E);
        s.set(Y, we), V.asset_id = Y, V.vFOV_deg = P(
          Number(V.hFOV_deg || 30),
          Number(we.naturalWidth || we.width || 1),
          Number(we.naturalHeight || we.height || 1)
        ), V.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, G(), T(), A(), K();
        const m = await Pi(E, {
          fetchApi: (L, H) => t.fetchApi(L, H)
        }), p = (Array.isArray(h.stickers) ? h.stickers : []).find((L) => String((L == null ? void 0 : L.id) || "") === B) || null;
        if (!p || String(p.asset_id || "") !== Y) return;
        h.assets[Y] = m, xe(), j(), v(), T(), A(), K();
      } catch (we) {
        delete h.assets[Y], s.delete(Y);
        const m = (Array.isArray(h.stickers) ? h.stickers : []).find((p) => String((p == null ? void 0 : p.id) || "") === B) || null;
        throw m && String(m.asset_id || "") === Y && (ne && Pe && (h.assets[ne] = Pe), m.asset_id = ne, m.vFOV_deg = Re, m.crop = le ? { ...le } : null), G(), v(), T(), A(), K(), we;
      }
    });
    try {
      await Q;
    } catch {
    }
  }
  function Ae() {
    var F;
    if (d) return;
    const E = $();
    !E || !ie(E) || z(E) || (F = b == null ? void 0 : b.openImagePicker) == null || F.call(b, "replace");
  }
  async function x() {
    if (d || g !== "stickers") return;
    if (u) {
      await N();
      return;
    }
    const E = h.assets && typeof h.assets == "object" ? h.assets : {}, F = Object.entries(E).filter(([, Y]) => {
      const Q = String((Y == null ? void 0 : Y.type) || "").toLowerCase(), V = String((Y == null ? void 0 : Y.value) || "");
      return Q === "dataurl" && V.startsWith("data:image");
    });
    if (!F.length) return;
    let B = !1;
    for (const [Y, Q] of F)
      try {
        const V = String((Q == null ? void 0 : Q.value) || "");
        if (!V) continue;
        const ne = await fetch(V).then((we) => we.blob()), Pe = String(ne.type || "image/png").split("/")[1] || "png", Re = String((Q == null ? void 0 : Q.name) || `${Y}.${Pe}`), le = new File([ne], Re, { type: ne.type || "image/png" }), ve = await Pi(le, {
          fetchApi: (we, m) => t.fetchApi(we, m)
        });
        h.assets[Y] = {
          ...ve,
          w: Number((Q == null ? void 0 : Q.w) || 0),
          h: Number((Q == null ? void 0 : Q.h) || 0)
        }, B = !0;
      } catch {
      }
    B && (v(), K());
  }
  async function N() {
    let E = !1;
    for (const F of h.stickers) {
      const B = F.source.data_url;
      if (B)
        try {
          const Y = await fetch(B).then((Pe) => Pe.blob()), Q = String(Y.type || "image/png").split("/")[1] || "png", V = new File([Y], `${F.id}.${Q}`, { type: Y.type || "image/png" }), ne = await Pi(V, {
            fetchApi: (Pe, Re) => t.fetchApi(Pe, Re)
          });
          F.source = Os(ne), E = !0;
        } catch {
        }
    }
    E && (v(), K());
  }
  function U(E) {
    g !== "stickers" && g !== "cutout" || d || (E.preventDefault(), he(!0));
  }
  function ue(E) {
    var Y;
    if (g !== "stickers" && g !== "cutout" || d) return;
    E.preventDefault(), E.stopPropagation(), i.depth = 0, he(!1);
    const B = Array.from(((Y = E.dataTransfer) == null ? void 0 : Y.files) || []).find((Q) => rr(Q));
    B && He(B);
  }
  function M(E) {
    g !== "stickers" && g !== "cutout" || d || de(E) && (i.depth += 1, he(!0), E.preventDefault());
  }
  function Z(E) {
    g !== "stickers" && g !== "cutout" || d || (!i.active && de(E) && he(!0), i.active && E.preventDefault());
  }
  function re(E) {
    if (g !== "stickers" && g !== "cutout" || d || !i.active) return;
    i.depth = Math.max(0, i.depth - 1);
    const F = Number(E.clientX) <= 0 && Number(E.clientY) <= 0;
    (i.depth === 0 || F) && he(!1);
  }
  function I(E) {
    g !== "stickers" && g !== "cutout" || d || (i.depth = 0, he(!1), de(E) && E.preventDefault());
  }
  return {
    connect(E) {
      ({
        clearWorldSelection: _,
        commitAndRefreshNode: v,
        computeStickerVFov: P,
        contentSphere: W,
        currentSpaceCamera: D,
        forceCursorTool: O,
        getNextStickerZIndex: S,
        getSelected: $,
        isExternalSticker: z,
        isSpaceView: te,
        isStickerItem: ie,
        markObjectVisualsDirty: G,
        pushHistory: j,
        requestDraw: K,
        selectWorldSticker: ce,
        setSelectedItem: Se,
        spaceViewState: be,
        stickerImageKey: ge,
        stopTimelinePlayback: X,
        updateSelectionMenu: A,
        updateSidePanel: T
      } = E);
    },
    addImageStickerFromFile: He,
    addImageSticker: se,
    addWorldImageSticker: R,
    addWorldStickerFromFile: ae,
    replaceSelectedImageFromFile: oe,
    replaceSelectedImage: Ae,
    migrateLegacyEmbeddedAssets: x,
    pruneUnusedAssets: xe,
    setDropCue: he,
    onCanvasDragOver: U,
    onCanvasDrop: ue,
    onWindowDragEnter: M,
    onWindowDragOver: Z,
    onWindowDragLeave: re,
    onWindowDrop: I
  };
}
const um = /* @__PURE__ */ new Map(), sr = O0({
  app: ir,
  api: fn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Uu,
    markImageFailed: Ny,
    markImageLoading: My,
    markImageReady: Py
  }
});
function dm(e) {
  if (!sn(e, "background") || !sn(e, "external-sticker")) return null;
  const t = sr.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? Do(t[0]) : null;
}
function WI(e) {
  if (!sn(e, "background")) return null;
  const [t] = sr.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [n] = sr.uiValue(e, "pano_timeline_frames") || [], [r] = sr.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(n) > 0 ? Number(n) : null, coverage: En(r) };
}
const KI = sr.assetSource, BI = sr.source, UI = sr.uiImage, YI = sr.invalidateUiImage, fm = sr.loadPreferredExactLinkedImage;
async function qI(e, t, n = {}) {
  var bp, vp;
  await cy(e, { tolerateOperationFailure: !0 }), sr.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, i = (n == null ? void 0 : n.hideSidebar) ?? r, o = r, a = cI(e, t);
  await Jd();
  const s = Ss(e, "output_preset"), l = Ss(e, "coverage"), d = Ss(e, "bg_color"), u = Ss(e, VC), f = () => {
    const c = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return fm(
      e,
      c,
      () => Ze(),
      `background:size:${c.join("|")}`
    );
  }, h = () => {
    const c = f();
    return fI(c);
  }, g = (c = 2048) => {
    const y = s == null ? void 0 : s.value;
    return dI(y) ? h() || Math.max(1, Math.round(Number(c || 2048))) : uI(y, c);
  }, b = e.__panoSceneStateV2 === !0, _ = t === "stickers" && b, v = t === "cutout" && b, P = _ && e.__panoStudio === !0, W = v || P, D = t === "cutout" || P, O = v ? WI(e) : null, S = (b ? e0 : Qg)(String((u == null ? void 0 : u.value) || ""), {
    outputPreset: g(2048),
    backgroundColor: String((d == null ? void 0 : d.value) || "#00ff00"),
    coverage: O ? O.coverage : En(l == null ? void 0 : l.value),
    sharedUiSettings: pI(),
    active: r0(e),
    fps: b ? dm(e) : null,
    scene: (O == null ? void 0 : O.state) ?? null,
    camera: v
  });
  e.__panoLiveStateOverride = S, e.__panoLiveStateVersion = 0;
  let $ = null;
  W ? ($ = S.camera && (!P || S.camera.visible !== !1) ? yh(S.camera, 0) : null, S.shots = $ ? [{ ...$, position: [...$.position] }] : [], S.active.selected_shot_id = $ && v ? jl : null) : t === "cutout" && (S.shots = Array.isArray(S.shots) ? S.shots.slice(0, 1) : [], S.shots.length || (S.active.selected_shot_id = null));
  const z = t === "cutout" ? (() => {
    var w;
    const c = Array.isArray(S.shots) ? S.shots : [], y = String(((w = S == null ? void 0 : S.active) == null ? void 0 : w.selected_shot_id) || "");
    return c.find((q) => String((q == null ? void 0 : q.id) || "") === y) || c[0] || null;
  })() : null, te = z ? Ty(z, !1) : { width: 220, height: 132 }, ie = ky(P ? "studio" : t), G = /* @__PURE__ */ Eo({
    stageStatus: nr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (ie.viewButtons || []).map((c) => ({ ...c, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (bp = ie.spaceButtons) != null && bp.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: ie.spaceButtons, frame: ie.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (ie.toolButtons || []).map((c) => ({
      ...c,
      disabled: !1,
      ...c.key === "add-world" ? { visible: _ } : {},
      ...v && eI.has(c.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(ie.floatingButtons || []).map((c) => ({ ...c, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Ye.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Ye.aspect,
      rotateIcon: Ye.rotate_90,
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
      icon: Ye.fullscreen,
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
      customColorCss: mr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: mr({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (c, y) => ({ index: y, color: null })),
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
      label: z ? "Loading preview" : "Add Frame to preview"
    }
  }), j = { frame: /* @__PURE__ */ js(0), playing: /* @__PURE__ */ js(!1) }, K = document.createElement("div");
  document.body.appendChild(K);
  const ce = ({ intent: c, file: y } = {}) => {
    if (rr(y)) {
      if (c === "add") {
        yn(y);
        return;
      }
      if (c === "add-world") {
        on(y);
        return;
      }
      c === "replace" && Sb(y);
    }
  }, Se = ({ intent: c } = {}) => {
  }, be = pd(LC, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: i,
    nodeTitle: a,
    shellPreset: ie,
    paintSwatches: vl.map((c) => ({
      id: c.id,
      label: c.label,
      cssColor: mr(c.color, 1)
    })),
    uiState: G,
    playhead: j,
    onClose: () => {
      to();
    },
    onTimeline: (c) => pb(c),
    onImageFileSelected: ce,
    onImageFileCancelled: Se
  });
  let ge = null;
  try {
    ge = be.mount(K);
  } catch (c) {
    try {
      be.unmount();
    } catch {
    }
    throw K.remove(), c;
  }
  const X = K.querySelector(".pano-modal-overlay"), A = K.querySelector(".pano-modal"), T = A == null ? void 0 : A.querySelector("[data-stage-overlay]"), de = A == null ? void 0 : A.querySelector("[data-stage-background]"), he = A == null ? void 0 : A.querySelector(".pano-stage-wrap"), xe = ((vp = ge == null ? void 0 : ge.getPaintOverlayRefs) == null ? void 0 : vp.call(ge)) || {}, He = xe.cursor || null, se = xe.sizePreview || null, R = xe.sizeSample || null;
  if (!X || !A || !T || !de || !he || !He || !se || !R)
    throw be.unmount(), K.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const ae = T.getContext("2d"), me = A.querySelector("[data-side]"), Ne = A.querySelector("[data-video-element]"), Te = A.querySelector("[data-port-video-element]");
  Nc(T, "editor.stage-overlay"), Nc(de, "editor.stage-background"), rh(Ne, "editor.video"), rh(Te, "editor.port-video");
  const oe = A.querySelector(".pano-floating-right"), Ae = A.querySelector(".pano-floating-top"), x = A.querySelector("[data-tool-rail]"), N = A.querySelector("[data-frame-rail]"), U = A.querySelector("[data-frame-roll-knob]"), ue = A.querySelector("[data-paint-dock]"), M = A.querySelector(".pano-video-transport"), Z = A.querySelector("[data-selection-menu]");
  let re = !1;
  const I = A.querySelector("[data-tooltip]"), E = A.querySelector("[data-camera-preview-host]"), F = A.querySelector("[data-camera-preview-canvas]");
  Nc(F, "editor.camera-preview");
  const B = A.querySelector("[data-paint-color-row]"), Y = A.querySelector("[data-paint-color-pop]"), Q = A.querySelector("[data-paint-color-sv]"), V = A.querySelector("[data-paint-color-sv-cursor]"), ne = A.querySelector("[data-paint-hue-strip]"), Pe = A.querySelector("[data-paint-hue-handle]");
  let Re = 0;
  he == null || he.removeAttribute("data-stage-ready"), he == null || he.setAttribute("data-stage-loading-kind", "boot"), T.style.opacity = "1", de.style.opacity = "0", i && (me == null || me.remove(), A.classList.add("pano-modal-readonly"));
  const le = () => {
    if (!p.customPaintSessionStart) return;
    if (Sl(p.customPaintSessionStart, p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    if (sI(p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    const c = [
      Tn(p.customPaintColor),
      ...p.customPaintHistory.filter((y) => !Sl(y, p.customPaintColor))
    ];
    p.customPaintHistory = c.slice(0, 8), p.customPaintSessionStart = null;
  }, ve = (c = !1) => {
    !Y || Y.hidden || (c ? le() : p.customPaintSessionStart = null, Y.hidden = !0, G.paintDock.colorPopOpen = !1);
  }, we = () => {
    Y && (Y.hidden && (p.customPaintSessionStart = Tn(p.customPaintColor)), Y.hidden = !1, G.paintDock.colorPopOpen = !0);
  };
  A.addEventListener("pointerdown", () => ye.wake(), !0), A.addEventListener("pointerdown", (c) => {
    var y;
    c.target.closest("[data-frame-roll-knob]") || mi(), !c.target.closest(".pano-picker") && (c.target.closest("[data-paint-color-row]") || (A.querySelectorAll(".pano-picker-pop").forEach((w) => {
      w.hidden = !0;
    }), ve(!0), D && p.cutoutAspectOpen && !c.target.closest(".pano-aspect-popover") && !c.target.closest("[data-action='aspect']") && (p.cutoutAspectOpen = !1, p.menuMode = "", p.menuSize.measured = !1, Ot(), Ze()), (y = G.frameRail) != null && y.aspectOpen && !c.target.closest(".pano-frame-aspect-control") && (G.frameRail.aspectOpen = !1)));
  });
  const p = {
    mode: "pano",
    selectedId: t === "stickers" ? S.active.selected_sticker_id : S.active.selected_shot_id,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: ar,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: En(S.coverage),
    historyController: kI(S),
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
    showGrid: mI(e == null ? void 0 : e.id, !0),
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
    paintEngine: yd(),
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
  }, L = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  let H = null;
  t === "stickers" && (p.selectedId = null, S.active.selected_sticker_id = null), p.selectedIds = p.selectedId ? [p.selectedId] : [];
  const k = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), Le = mn({ label: "editor.still" });
  Le.__panoFrameIdx = 0;
  const Oe = mn({ label: "editor.port-still" });
  Oe.__panoFrameIdx = 0;
  const C = {
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
  }, ye = sN({
    requestAnimationFrame: (c) => requestAnimationFrame(c),
    cancelAnimationFrame: (c) => cancelAnimationFrame(c),
    draw: (c, y) => $b(c, y),
    animating: () => Yy()
  }), Ie = oN({
    requestFrame: (c) => ye.requestFrame(c),
    cancelFrame: (c) => ye.cancelFrame(c),
    tasks: {
      seek: () => qi.seek(L.scrubFrame),
      timeline: () => Cf(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        Zi(), Ze({ localOnly: !0, reason: bt.STATE });
      },
      sidePanel: () => vt()
    }
  }), De = lk({
    canvas: de,
    onReady: () => {
      ic(), Ze({ reason: bt.CONTEXT });
    },
    onFailed: () => Ze(),
    onUpdate: () => Ze({ localOnly: !0, reason: bt.MEDIA }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      Xy(), ic(), Ze({ reason: bt.CONTEXT });
    }
  });
  let Be = null;
  const Ue = Number.parseFloat(
    getComputedStyle(A).getPropertyValue("--pano-float-radius")
  ) || 10, Ke = (c) => {
    const y = String(c || "default");
    T.style.cursor !== y && (T.style.cursor = y);
  }, Qe = {
    timer: 0,
    target: null
  }, wt = {
    active: !1,
    depth: 0
  }, pt = vd({
    getView: () => ({ yaw: p.viewYaw, pitch: p.viewPitch, fov: p.viewFov }),
    setView: (c) => {
      p.viewYaw = zt(Number(c.yaw || 0)), p.viewPitch = Fe(Number(c.pitch || 0), -89.9, 89.9), p.viewFov = Fe(Number(c.fov || p.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const c = T.getBoundingClientRect();
      return {
        w: Math.max(1, Number(c.width || T.clientWidth || 0)),
        h: Math.max(1, Number(c.height || T.clientHeight || 0))
      };
    },
    getInvert: () => {
      var c, y;
      return {
        x: (c = S.ui_settings) != null && c.invert_view_x ? -1 : 1,
        y: (y = S.ui_settings) != null && y.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => Jl(),
    onInteraction: () => ye.requestDraw(bt.VIEW)
  }), {
    addImageSticker: Wt,
    addImageStickerFromFile: yn,
    addWorldImageSticker: $n,
    addWorldStickerFromFile: on,
    apply: Zt,
    applyInitialCutoutFocus: ui,
    applyRasterObjectOffset: di,
    applyRasterObjectTransform: Wa,
    applySpaceMode: bn,
    applyStrokeGroupOffset: zn,
    applyStrokeGroupTransform: Vo,
    applyVideoTimelineFps: $o,
    areAllSelectedItemsLocked: fi,
    bringSelectedToFront: Dy,
    buildCanonicalCutoutStickerState: Ly,
    buildCanonicalSelectedStickerState: Ry,
    buildRasterObjectEditCanvas: Vy,
    cameraFrustumLength: $y,
    cameraShoots: af,
    cameraSphere: zy,
    canRestoreSelectedToInitial: jy,
    cancelViewTransition: Wl,
    clearAll: Hy,
    clearPaintingLayer: Gy,
    clearSelection: zo,
    commitAndRefreshNode: vn,
    commitState: Ar,
    contentSphere: sf,
    createRasterFrozenObjectsFromCanvas: Wy,
    createRasterSurface: lf,
    currentSpaceCamera: Ka,
    cutoutCamera: Kl,
    deleteSelected: cf,
    deleteSelectedKeyframes: Ky,
    deleteSelectedWorldSticker: By,
    duplicateSelected: Uy,
    editorAnimating: Yy,
    editorViewInput: Ba,
    ensureGroupFrame: Hi,
    ensurePaintingGroupEntry: uf,
    erpPointToWorldDir: qy,
    forceCursorTool: Bl,
    forgetCameraPreviewFrame: Xy,
    frameLocalPointToWorldDir: df,
    frameSpaceContent: Jy,
    getActivePaintTargetDescriptor: Jn,
    getCutoutInspectorItems: Zy,
    getCutoutSelectableItems: Qy,
    getCutoutSelectableItemsForHit: Ul,
    getDisplayListObjects: eb,
    getHistoryCapabilities: tb,
    getList: Yl,
    getMultiSelectionGeom: Ua,
    getOrderedDisplayListObjects: ff,
    getPaintingGroupList: ql,
    getRasterObjectCenterUv: nb,
    getRasterObjectItem: pf,
    getRasterObjectList: Gi,
    getSelectableRasterObjectItems: rb,
    getSelectableStrokeGroupItems: ib,
    getSelected: Cr,
    getSelectedItems: Ya,
    getSelectedKind: Xl,
    getStrokeGroupCenterUv: ob,
    getStrokeGroupItem: hf,
    getStrokeGroupStrokes: Wi,
    getUnwrapRect: Jl,
    hasCamera: ab,
    hasSpaceContent: mf,
    hitRasterObjectAt: gf,
    invalidateLivePaintPreviewCaches: Ki,
    isCameraSelected: Bi,
    isErpCamera: Zl,
    isExternalSticker: sb,
    isFreeSpaceView: Yr,
    isItemLocked: Ir,
    isRasterObjectItem: pi,
    isSceneSticker: qa,
    isShotItem: Ui,
    isSpaceView: Ql,
    isStickerHidden: lb,
    isStickerItem: Zn,
    isStrokeGroupItem: cr,
    lookingAt: cb,
    makeRasterObjectSelectionId: yf,
    makeStrokeGroupSelectionId: bf,
    markObjectVisualsDirty: qr,
    markPaintCompositeVisualsDirty: Xa,
    markPaintStrokeVisualsDirty: Yi,
    migrateLegacyEmbeddedAssets: ub,
    objectGeom: an,
    onCanvasDragOver: db,
    onCanvasDrop: fb,
    onTimelineAction: pb,
    onWindowDragEnter: vf,
    onWindowDragLeave: _f,
    onWindowDragOver: Sf,
    onWindowDrop: wf,
    paintingShown: hb,
    parseRasterObjectSelectionId: jo,
    persistUiSettings: ec,
    playback: qi,
    playbackFps: mb,
    poseOf: Fn,
    processFreehandPoints: xf,
    pushHistory: Rt,
    queueVideoTransportLayout: gb,
    rasterizeStrokeToSurface: yb,
    rebuildPaintEngineIfNeeded: bb,
    reconcileExternalStickerFromInputs: kf,
    refreshModalVideoSource: tc,
    refreshPaintEngineRevisionCache: vb,
    replaceSelectedImage: _b,
    replaceSelectedImageFromFile: Sb,
    requestDraw: Ze,
    restoreHistory: nc,
    restoreSelectedToInitialPose: wb,
    sampleEditorDiagnostics: xb,
    screenPos: Xr,
    screenPosCss: Ja,
    screenPosToErpPoint: ur,
    screenPosToFrameAsErpPoint: Qn,
    screenToWorldDir: Mf,
    selectWorldSticker: kb,
    selectedWorldSticker: Pf,
    sendSelectedToBack: Mb,
    setDropCue: Pb,
    setSelectedItem: hi,
    setSelectedItems: Nb,
    setSpaceMode: Ab,
    setSpaceView: Cb,
    shortestWrappedDelta: Za,
    shotViewCamera: Ib,
    spaceOrigin: Eb,
    spaceScale: Ho,
    spaceViewState: Xi,
    stageResizeObserver: Ob,
    startAnimation: rc,
    startSpaceDrag: Nf,
    stickerCornerOrderSanity: Fb,
    stopRenderLoop: Tb,
    stopTimelinePlayback: Go,
    syncCanvasSize: ic,
    syncCoverageChangeToNodePreviews: Db,
    syncFloatingViewButtonState: Af,
    syncFrameRollKnob: Jr,
    syncLookAtFrameButtonState: Lb,
    syncPaintUi: er,
    syncPaintingLayerAsync: Rb,
    syncSidePanelControls: Ji,
    syncTimeline: Cf,
    syncUndoRedoButtons: Vb,
    syncVideoTransportState: If,
    syncViewToggleState: Zr,
    tick: $b,
    togglePlayback: Ef,
    toggleSelectedExternalStickerVisibility: zb,
    toggleSelectedLock: jb,
    toggleVideoMuted: Hb,
    transitionView: Qa,
    triggerBackgroundPersistenceOnClose: Gb,
    turnViewTo: Of,
    updateSidePanel: vt,
    videoCleanupFns: Wb,
    videoState: es,
    viewControls: oc,
    watchPixelRatio: Kb,
    worldDirToFrameLocalPoint: Ff,
    worldStickerEditable: Bb,
    writePose: tr,
    zoomSpaceAt: Ub
  } = yI({
    api: fn,
    app: ir,
    backgroundCanvas: de,
    bgWidget: d,
    cameraV2: W,
    canvas: T,
    capture: O,
    clearCutoutFrame: e1,
    comfyMedia: sr,
    coverageWidget: l,
    ctx: ae,
    cutoutPreviewCanvas: F,
    cutoutPreviewHost: E,
    cutoutV2: v,
    deleteStudioCamera: Qb,
    dragCue: wt,
    dragFrames: Ie,
    editor: p,
    editorView: De,
    floatingRightEl: oe,
    frameGateCssRadius: Ue,
    frameViewDistance: jf,
    getActiveCutoutShot: _t,
    getBrushPresetIdForTool: Qi,
    getFrameViewLayout: ts,
    getFrameViewRect: Er,
    getPaintingLayerList: cc,
    hideSidebar: i,
    imageCache: k,
    isActiveLassoTool: qb,
    isPaintCursorEnabled: Uf,
    isWorldMenuShown: _1,
    leaveFrameView: $f,
    loadPreferredExactLinkedImage: fm,
    measureFrameSafeRect: r1,
    mediaAssetSource: KI,
    mediaSource: BI,
    mediaUiImage: UI,
    node: e,
    paintColorPop: Y,
    paintColorRow: B,
    paintColorSvCursor: V,
    paintHueHandle: Pe,
    portStillCanvas: Oe,
    portVideoEl: Te,
    presetWidget: s,
    previewMode: o,
    rasterErpCanvasCache: pe,
    rasterImageAlphaCache: _e,
    rasterImageCache: ee,
    readOnly: r,
    rectFromPoints: Zf,
    resolveEditorOutputPresetWidth: g,
    runtime: C,
    sceneV2: _,
    scheduler: ye,
    setCanvasCursor: Ke,
    shotEditor: D,
    stageWrap: he,
    state: S,
    stateV2: b,
    stateWidget: u,
    stillCanvas: Le,
    studio: P,
    syncCutoutShot: Zi,
    timeline: L,
    timelinePlayhead: j,
    type: t,
    uiState: G,
    updateCursor: xt,
    updateSelectionMenu: Ot,
    videoEl: Ne,
    videoTimelineFps: dm,
    viewController: pt,
    vueModal: ge
  }, [
    SI,
    MI,
    PI,
    NI,
    AI,
    CI,
    II,
    EI,
    OI,
    FI,
    TI,
    DI,
    LI,
    RI,
    VI,
    $I,
    zI,
    jI,
    HI,
    GI
  ]);
  Fb();
  function Yb() {
    return p.primaryTool === "mask" ? p.maskTool : p.paintTool;
  }
  function qb() {
    return String(Yb() || "") === "lasso_fill";
  }
  function Xb(c, y) {
    var J;
    const w = (J = Ba().space) == null ? void 0 : J.gizmo;
    if (Bi() && w && gi("hover", y) !== null && gi("down", y))
      return p.interaction = { kind: "world_gizmo", camera: !0, mode: w.mode, start: w.transform, base: Kl(), changed: !1 }, T.setPointerCapture(c.pointerId), xt(y), !0;
    const q = g0(Kl(), $y(Ho()));
    return tk(Ka(), q, y, T.width, T.height) ? (Bi() || (hi(_t()), vt(), Ot(), Ze()), p.interaction = { kind: "world_select" }, T.setPointerCapture(c.pointerId), !0) : !1;
  }
  Ob.observe(T), Kb();
  function Jb() {
    if (r || t !== "cutout") return;
    const c = _t();
    if (c) {
      hi(c), p.mode = "pano", v && Yr() ? Qa(d0(cb(Xi(), c.position), zy(), T.width, T.height)) : Of(zt(Number(c.yaw_deg || 0)), Fe(Number(c.pitch_deg || 0), -89.9, 89.9)), vt(), Ot(), Ze({ cause: "cutout_frame" });
      return;
    }
    const y = Ng({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: zt(Number(p.viewYaw || 0)),
      pitchDeg: Number(p.viewPitch || 0),
      viewFovDeg: Number(p.viewFov || 90)
    });
    S.shots = [y], hi(y), Bl(), p.mode = "pano", Rt(), vn(), vt(), Ot(), Ze({ cause: "cutout_frame" });
  }
  function Zb() {
    r || !P || ab() || (Go(), S.camera = hx(Xi()), Zi(), hi(_t()), Bl(), Rt(), vn(), vt(), Ot(), Ze({ cause: "cutout_frame" }));
  }
  function Qb() {
    Go(), S.camera = null, hi(null), Zi(), Rt(), vn(), vt(), Ot(), Ze({ cause: "cutout_frame" });
  }
  function Tf(c, y) {
    P && Ui(c) && (S.camera.projection = y === ko ? "erp" : "perspective", y === ko) || t1(c, y);
  }
  function e1() {
    r || t !== "cutout" || (S.shots = [], p.selectedId = null, p.selectedIds = [], p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, S.active.selected_shot_id = null, Rt(), vn(), vt(), Ot(), Ze());
  }
  function ac(c, y) {
    const w = C.frameSafeRect;
    if (!c || !w || p.mode !== "frame") return !1;
    const q = Jc * Di(w, c), J = wd(Sd(w, y), q);
    return c.hFOV_deg = J.hFOV_deg, c.vFOV_deg = J.vFOV_deg, !0;
  }
  function t1(c, y) {
    if (!c || c.locked === !0) return;
    const w = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, q = (() => {
      const Ce = String(c.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(Ce)) {
        const [ze, Ve] = Ce.split(":").map((We) => Number(We));
        if (Number.isFinite(ze) && Number.isFinite(Ve)) return ze >= Ve;
      }
      const Ee = Number(c.hFOV_deg || 64), Xe = Number(c.vFOV_deg || 40);
      return Math.abs(Ee - Xe) > 1e-6 ? Ee >= Xe : zi(c) >= 1;
    })();
    let [J, fe] = w[String(y)] || w["1:1"];
    J >= fe !== q && ([J, fe] = [fe, J]);
    const ke = J / fe;
    if (!ac(c, ke)) {
      const Ce = Fe(Number(c.vFOV_deg || 40), 1, 179);
      c.vFOV_deg = Ce, c.hFOV_deg = Cs(Ce, ke);
    }
    c.aspect_id = `${J}:${fe}`;
  }
  function n1(c, y, w) {
    if (!c || c.locked === !0) return !1;
    const q = La(y, w);
    if (!q) return !1;
    const J = q.ratio;
    if (!ac(c, J)) {
      const fe = Fe(Number(c.vFOV_deg || 40), 1, 179);
      c.vFOV_deg = fe, c.hFOV_deg = Cs(fe, J);
    }
    return c.aspect_id = q.label, !0;
  }
  function Df(c) {
    if (!c || c.locked === !0) return;
    const y = String(c.aspect_id || "").trim(), w = si(c), q = w.tanHalfX / Math.max(1e-12, w.tanHalfY), J = 1 / Math.max(1e-12, q);
    if (!ac(c, J)) {
      const fe = Fe(Number(c.vFOV_deg || 60), 1, 179);
      c.vFOV_deg = fe, c.hFOV_deg = Cs(fe, J);
    }
    if (/^\d+:\d+$/.test(y)) {
      const [fe, ke] = y.split(":");
      c.aspect_id = `${ke}:${fe}`;
    } else
      c.aspect_id = Ni(c);
  }
  const Lf = () => Ar();
  r || (e.__panoFlushStateBeforeQueue = Lf);
  function Rf() {
    return p.mode === "pano" || p.mode === "unwrap";
  }
  function Zi(c = !0) {
    var q, J;
    if (!W) return;
    const y = $;
    if (!af()) {
      $ = null, (q = S.shots) != null && q.length && (S.shots = []), y && Vf(y, null);
      return;
    }
    const w = (J = S.shots) == null ? void 0 : J[0];
    c && w && $ && gx(S.camera, p.frame, w, $), $ = yh(S.camera, p.frame), w ? Object.assign(w, $, { position: [...$.position] }) : S.shots = [{ ...$, position: [...$.position] }], y || Vf(null, $);
  }
  function Vf(c, y) {
    var fe, ke;
    !y && p.mode === "frame" && $f(c);
    const w = (y == null ? void 0 : y.position) ?? [0, 0, 0];
    if (((ke = (fe = p.viewTransition) == null ? void 0 : fe.end) == null ? void 0 : ke.mode) === "3dof") {
      Qa({ ...Xi(), position: w }, p.viewTransition.end);
      return;
    }
    if (p.mode !== "pano" || p.spaceMode !== "3dof" || !mf()) return;
    const q = (c == null ? void 0 : c.position) ?? [0, 0, 0];
    if (q.every((Ce, Ee) => Ce === w[Ee])) return;
    const J = { ...Xi(), position: q };
    bn({ mode: "6dof", position: q, moved: !0 }), p.viewDistance = J.distance, Qa({ ...J, position: w }, { mode: "3dof", moved: !1 });
  }
  function $f(c) {
    if (p.mode = "pano", !c) return;
    Wl();
    const y = Xi().distance;
    p.viewYaw = zt(c.yaw_deg), p.viewPitch = Fe(c.pitch_deg, -89.9, 89.9), p.viewFov = Fe(c.hFOV_deg, 35, 140), p.spaceMode === "6dof" && bn({ mode: "6dof", position: [...c.position], moved: !0 }), p.viewDistance = y, C.backgroundDirty = !0;
  }
  function _t() {
    if (!D) return null;
    const c = Array.isArray(S.shots) ? S.shots : [];
    if (!c.length) return null;
    const y = String(S.active.selected_shot_id || "");
    return c.find((w) => String((w == null ? void 0 : w.id) || "") === y) || c[0] || null;
  }
  function r1() {
    var nt, Ge, ft, Tt, Qt;
    if (!T) return null;
    const c = (nt = T.getBoundingClientRect) == null ? void 0 : nt.call(T), y = Number((c == null ? void 0 : c.width) || 0) > 0 ? T.width / c.width : 1, w = Number((c == null ? void 0 : c.height) || 0) > 0 ? T.height / c.height : 1;
    C.frameCanvasScale = Math.min(y, w);
    let q = 24, J = 24;
    const fe = Math.max(q + 1, T.width - 24);
    let ke = Math.max(J + 1, T.height - 24);
    const Ce = (Ge = x == null ? void 0 : x.getBoundingClientRect) == null ? void 0 : Ge.call(x), Ee = (ft = N == null ? void 0 : N.getBoundingClientRect) == null ? void 0 : ft.call(N);
    let Xe = 24;
    Ce && c && Ce.width > 0 && Ce.height > 0 && (Xe = Math.max(Xe, (Ce.right - c.left) * y + om)), Ee && c && Ee.width > 0 && Ee.height > 0 && ((Tt = G.frameRail) == null ? void 0 : Tt.visible) === !0 && (Xe = Math.max(Xe, (c.right - Ee.left) * y + om)), q = Math.max(q, Xe);
    const ze = Math.min(fe, T.width - Xe);
    let Ve = 24;
    const We = (Qt = Ae == null ? void 0 : Ae.getBoundingClientRect) == null ? void 0 : Qt.call(Ae);
    if (We && c && We.width > 0 && We.height > 0 && (Ve = Math.max(Ve, (We.bottom - c.top) * w + Zc)), [ue, M].forEach((Nt) => {
      var pr;
      if (!Nt || !c) return;
      const jn = getComputedStyle(Nt);
      if (jn.display === "none" || jn.visibility === "hidden" || Number(jn.opacity) <= 0) return;
      const fr = (pr = Nt.getBoundingClientRect) == null ? void 0 : pr.call(Nt);
      !fr || fr.width <= 0 || fr.height <= 0 || (Ve = Math.max(Ve, (c.bottom - fr.top) * w + Zc));
    }), oe && c) {
      const Nt = getComputedStyle(oe);
      Nt.display !== "none" && Nt.visibility !== "hidden" && Number(Nt.opacity) > 0 && (Ve = Math.max(Ve, (qC + Zc) * w));
    }
    return J = Math.max(J, Ve), ke = Math.max(J + 1, Math.min(ke, T.height - Ve)), {
      x: q,
      y: J,
      w: Math.max(1, ze - q),
      h: Math.max(1, ke - J)
    };
  }
  function ts(c = _t()) {
    if (!c || !T) return null;
    const y = C.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, T.width - 48),
      h: Math.max(1, T.height - 48)
    };
    return ow(y, c, Jc * Di(y, c));
  }
  function Er(c = _t()) {
    const y = ts(c);
    return y ? { x: y.x, y: y.y, w: y.w, h: y.h } : null;
  }
  function sc() {
    return D && !!_t();
  }
  function i1(c, y) {
    const w = _t();
    if (!w || w.locked === !0) return !1;
    const q = Number(y) > 0, J = Cg(w, y);
    if (!J) return !1;
    if (q) {
      const fe = Jc * Di(
        C.frameSafeRect || { w: T.width, h: T.height },
        J
      ), ke = xd({ width: T.width, height: T.height }, fe);
      if (ke.halfW < T.width * 0.5 - 1e-6 || ke.halfH < T.height * 0.5 - 1e-6) return !1;
    }
    return w.hFOV_deg = J.hFOV_deg, w.vFOV_deg = J.vFOV_deg, zf(), vt(), !0;
  }
  function zf() {
    p.frameWheelChanged = !0, p.frameWheelCommitTimer && window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = window.setTimeout(() => {
      p.frameWheelCommitTimer = 0, p.frameWheelChanged && (p.frameWheelChanged = !1, Rt(), vn(), vt());
    }, 180);
  }
  function lc() {
    return W && p.mode === "frame" && mf();
  }
  function Wo() {
    const c = _t(), y = ts(c);
    return c && y ? v0(c, y, { width: T.width, height: T.height }) : null;
  }
  function jf() {
    var c;
    return ((c = sf()) == null ? void 0 : c.radius) || ar;
  }
  function Ko(c) {
    const { position: y, yaw_deg: w, pitch_deg: q, roll_deg: J, hFOV_deg: fe } = c.shot;
    return { position: y, yaw_deg: w, pitch_deg: q, roll_deg: J, hFOV_deg: fe, distance: jf() };
  }
  function Hf(c, y) {
    const { rect: w } = c;
    return De.pickSurface(Ib(c.shot), y.x - w.x, y.y - w.y, w.w, w.h);
  }
  function Gf(c, y, w) {
    return Mu(y, Hf(c, w), null, Ho());
  }
  function Wf(c) {
    return JSON.stringify([Ko(c), c.rect]);
  }
  function Kf(c) {
    const y = _t();
    y.position = [...c.position], y.yaw_deg = c.yaw_deg, y.pitch_deg = c.pitch_deg;
  }
  function Bf(c, y) {
    const w = _t();
    !w || r || w.locked === !0 || (p.interaction = {
      kind: "pan_frame",
      shot: w,
      last: c,
      start: { yaw_deg: Number(w.yaw_deg || 0), pitch_deg: Number(w.pitch_deg || 0) },
      changed: !1
    }, xt(c), T.setPointerCapture(y));
  }
  function o1(c, y, w) {
    const q = Wo();
    if (!q || r) return;
    const J = Ko(q);
    p.interaction = c === "orbit" ? { kind: "frame_orbit", last: y, pivot: Gf(q, J, y), changed: !1 } : { kind: "frame_pan", last: y, depth: l0(J, Ho()), changed: !1 }, xt(y), T.setPointerCapture(w);
  }
  function a1(c, y) {
    const w = Wo();
    if (!w) return;
    const q = Ko(w), J = y.x - c.last.x, fe = y.y - c.last.y;
    Kf(c.kind === "frame_pan" ? _h(q, J, fe, w.rect.w, w.rect.h, c.depth) : vh(q, J, fe, T.height, c.pivot)), c.changed = c.changed || J !== 0 || fe !== 0, c.last = y, Ze({ localOnly: !0, cause: "frame_view" });
  }
  function s1(c, y) {
    const w = Wo();
    if (!w || r) return;
    const q = Ko(w), J = performance.now(), fe = { x: c.x, y: c.y, time: J, key: De.contentRevision(), view: Wf(w) };
    if (!c0(Be, fe)) {
      const ke = Hf(w, c);
      Be = { ...fe, cost: performance.now() - J, hit: ke };
    }
    Kf(u0(q, Mu(q, Be.hit, null, Ho()), y, Ho())), Be.view = Wf(Wo() ?? w), Be.wheelTime = J, zf(), vt(), Ze({ localOnly: !0, cause: "frame_view" });
  }
  function l1() {
    return p.frameWheelCommitTimer && (window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = 0), p.frameWheelChanged ? (p.frameWheelChanged = !1, Rt(), vn(), vt(), !0) : !1;
  }
  function Bo() {
    const c = p.interaction;
    if (!(c != null && c.shot) || !c.start || c.kind !== "pan_frame" && c.kind !== "roll_frame") return !1;
    const y = c.kind === "roll_frame";
    return c.kind === "pan_frame" ? (c.shot.yaw_deg = c.start.yaw_deg, c.shot.pitch_deg = c.start.pitch_deg) : c.shot.roll_deg = c.start.roll_deg, y && mi(), p.interaction = null, Ki(), Zr(), vt(), xt(p.pointerPos), Ze({ localOnly: !0 }), !0;
  }
  function c1(c, y) {
    const w = Number(y || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, w / 2048)
    };
  }
  function Qi(c) {
    const y = String(c || "").trim();
    return y === "eraser" ? Dr : Nn[y] ? y : p.activeBrushPresetId || Dr;
  }
  function Uf() {
    return (p.primaryTool === "paint" || p.primaryTool === "mask") && (Rf() || sc());
  }
  function Yf() {
    var c;
    return Uf() && ((c = p.pointerPos) == null ? void 0 : c.inside) === !0;
  }
  function ns(c, y = !0) {
    const w = Number((c == null ? void 0 : c.x) || 0), q = Number((c == null ? void 0 : c.y) || 0), J = y !== !1, fe = p.pointerPos || { x: 0, y: 0, inside: !1 }, ke = fe.inside !== J || Math.abs(fe.x - w) > 0.01 || Math.abs(fe.y - q) > 0.01;
    return p.pointerPos = { x: w, y: q, inside: J }, ke;
  }
  function u1() {
    var ze, Ve;
    if (!Yf()) return null;
    const c = p.primaryTool === "mask" ? "mask" : "paint", y = c === "mask" ? p.maskTool : p.paintTool, w = Qi(y), q = Nn[w] || Nn[Dr], J = Number(p.brushSizes[w] ?? 10), fe = Math.max(1, J) * Math.max(0.1, Number(q.sizeScale ?? 1)), ke = Math.max(3, fe * 0.5), Ce = c === "mask" ? y === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : y === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Tn(p.paintColor), Ee = c === "mask" ? y === "lasso_fill" ? 0.18 : 0.2 : y === "eraser" ? 0.06 : Fe(Math.max(0.16, Number(Ce.a ?? 1) * 0.3), 0.16, 0.52), Xe = c === "mask" ? 0.95 : y === "eraser" ? 0.75 : Fe(Math.max(0.46, Number(Ce.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: c,
      toolKind: y,
      preset: q,
      radius: ke,
      fillStyle: mr(Ce, Ee),
      strokeStyle: mr(Ce, Xe),
      x: Number(((ze = p.pointerPos) == null ? void 0 : ze.x) || 0),
      y: Number(((Ve = p.pointerPos) == null ? void 0 : Ve.y) || 0),
      hotspotX: ke,
      hotspotY: ke
    };
  }
  function d1() {
    var We, nt, Ge;
    const c = u1();
    if (!He) return;
    if (!c) {
      He.style.display = "none";
      return;
    }
    let y = c.radius * 2, w = c.radius * 2, q = "999px", J = 0, fe = c.fillStyle, ke = "1px solid rgba(222, 222, 222, 0.72)", Ce = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const Ee = "rgba(222, 222, 222, 0.72)", Xe = "rgba(52, 52, 52, 0.72)";
    let ze = Number(c.hotspotX ?? y * 0.5), Ve = Number(c.hotspotY ?? w * 0.5);
    if (c.toolKind === "lasso_fill")
      y = _l, w = _l, q = "0", ke = "0", Ce = "none", ze = ZC, Ve = QC, fe = aI(c.fillStyle, Xe, Ee);
    else if (c.layerKind === "mask")
      fe = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (c.toolKind === "marker") {
      const ft = Math.max(1, Number(((We = c.preset) == null ? void 0 : We.aspect) ?? 1));
      y = Math.max(10, c.radius * 2 * ft), w = Math.max(6, c.radius * 2), q = `${Math.min(6, w * 0.42)}px`, J = Number(((Ge = (nt = c.preset) == null ? void 0 : nt.angle) == null ? void 0 : Ge.value) || 0) * Ii;
    } else c.toolKind === "brush" ? fe = `radial-gradient(circle at 50% 50%, ${c.strokeStyle} 0%, ${c.fillStyle} 45%, rgba(0,0,0,0) 100%)` : c.toolKind === "eraser" && (fe = "rgba(255,255,255,0.14)");
    He.style.display = "block", He.style.width = `${Math.round(y)}px`, He.style.height = `${Math.round(w)}px`, He.style.borderRadius = q, He.style.border = ke, He.style.boxShadow = Ce, He.style.background = fe, He.style.backgroundRepeat = "no-repeat", He.style.backgroundPosition = "center", He.style.backgroundSize = "contain", He.style.transform = `translate(${Math.round(c.x - ze)}px, ${Math.round(c.y - Ve)}px) rotate(${J}deg)`;
  }
  function f1() {
    var Nt;
    if (!se || !R) return;
    const c = p.primaryTool === "mask" ? "mask" : "paint", y = c === "mask" ? p.maskTool : p.paintTool;
    if (y === "lasso_fill") return;
    const w = Qi(y), q = Nn[w] || Nn[Dr], J = Number(p.brushSizes[w] ?? 10), fe = Math.max(1, J) * Math.max(0.1, Number(q.sizeScale ?? 1)), ke = Math.max(6, fe * 0.5), Ce = y === "eraser", Ee = c === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : Ce ? { r: 1, g: 1, b: 1, a: 0.22 } : Tn(p.paintColor), Xe = c === "mask" ? mr(Ee, 0.22) : Ce ? "rgba(255,255,255,0.14)" : mr(Ee, Fe(Math.max(0.18, Number(Ee.a ?? 1) * 0.34), 0.18, 0.56)), ze = c === "mask" ? mr(Ee, 0.96) : Ce ? "rgba(255,255,255,0.72)" : mr(Ee, Fe(Math.max(0.56, Number(Ee.a ?? 1) * 0.96), 0.56, 1));
    let Ve = ke * 2, We = ke * 2, nt = "999px", Ge = 0, ft = Xe;
    const Tt = "rgba(222, 222, 222, 0.72)", Qt = "rgba(52, 52, 52, 0.72)";
    if (c === "mask")
      ft = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (y === "marker") {
      const jn = Math.max(1, Number((q == null ? void 0 : q.aspect) ?? 1));
      Ve = Math.max(16, ke * 2 * jn), We = Math.max(10, ke * 2), nt = `${Math.min(8, We * 0.42)}px`, Ge = Number(((Nt = q == null ? void 0 : q.angle) == null ? void 0 : Nt.value) || 0) * Ii;
    } else y === "brush" ? ft = `radial-gradient(circle at 50% 50%, ${ze} 0%, ${Xe} 48%, rgba(0,0,0,0) 100%)` : y === "lasso_fill" ? (Ve = Math.max(18, ke * 1.8), We = Ve, ft = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${ze} 43%, ${ze} 58%, rgba(0,0,0,0) 59%)`) : Ce && (ft = "rgba(255,255,255,0.12)");
    R.style.width = `${Math.round(Ve)}px`, R.style.height = `${Math.round(We)}px`, R.style.borderRadius = nt, R.style.background = ft, R.style.border = `1px solid ${Tt}`, R.style.boxShadow = `0 0 0 1px ${Qt}`, R.style.transform = `rotate(${Ge}deg)`, Re && (clearTimeout(Re), Re = 0), se.classList.remove("fade-out"), se.classList.add("show");
  }
  function rs() {
    !se || !se.classList.contains("show") || (se.classList.add("fade-out"), Re && clearTimeout(Re), Re = window.setTimeout(() => {
      se.classList.remove("show", "fade-out"), Re = 0;
    }, 180));
  }
  function qf(c, y, w, q) {
    const J = Qi(y), fe = Nn[J] || Nn[Dr], ke = p.brushSizes[J] ?? 10, Ce = Math.max(1, ke) * Math.max(0.1, fe.sizeScale ?? 1), Ee = c1(q, Ce), Xe = w.map((Ve) => ({
      ...Ve,
      t: Number((Ve == null ? void 0 : Ve.t) || 0),
      widthScale: Number.isFinite(Number(Ve == null ? void 0 : Ve.widthScale)) ? Math.max(0, Number(Ve.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(Ve == null ? void 0 : Ve.pressureLike)) ? Math.max(0, Number(Ve.pressureLike)) : 1
    })), ze = {
      id: fo(c),
      actionGroupId: fo("ag"),
      targetSpace: q && typeof q == "object" ? { ...q, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: c,
      toolKind: y,
      size: Ce,
      createdAt: Date.now(),
      color: c === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: Ee.radiusModel,
      radiusValue: Ee.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: Xe.map((Ve) => ({ ...Ve })),
        points: Xe.map((Ve) => ({ ...Ve }))
      }
    };
    return rm(ze, fe), p.mode, Number(fe.aspect ?? 1), Number(ze.aspect ?? 1), String(ze.stampKind || ""), Number(ze.size || 0), String(ze.radiusModel || ""), Number(ze.radiusValue || 0), { ...ze.targetSpace }, ze;
  }
  function Xf(c, y, w, q) {
    const J = w.map((Ee) => ({
      ...Ee,
      t: Number((Ee == null ? void 0 : Ee.t) || 0),
      widthScale: Number.isFinite(Number(Ee == null ? void 0 : Ee.widthScale)) ? Math.max(0, Number(Ee.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(Ee == null ? void 0 : Ee.pressureLike)) ? Math.max(0, Number(Ee.pressureLike)) : 1
    })), fe = Qi(y), ke = Nn[fe] || Nn[Dr], Ce = {
      id: fo(c),
      actionGroupId: fo("ag"),
      targetSpace: q && typeof q == "object" ? { ...q, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: c,
      toolKind: y,
      size: 10,
      createdAt: Date.now(),
      color: c === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: J.map((Ee) => ({ ...Ee }))
      }
    };
    return rm(Ce, ke), p.mode, Number(ke.aspect ?? 1), Number(Ce.aspect ?? 1), String(Ce.stampKind || ""), { ...Ce.targetSpace }, Ce;
  }
  function cc(c) {
    const y = S.painting || (S.painting = Fo(null)), w = y[c] || (y[c] = { strokes: [] });
    return Array.isArray(w.strokes) || (w.strokes = []), w.strokes;
  }
  function p1(c, y, w = performance.now()) {
    let q;
    if (p.mode === "frame") {
      const Xe = _t();
      if (!Xe || (q = Qn(y, Xe, w), !q)) return !1;
    } else
      q = ur(y, w);
    if (!q) return !1;
    const J = c.stroke.geometry.rawPoints || c.stroke.geometry.points, fe = c.stroke.geometry.points, ke = J[J.length - 1];
    if (ke) {
      const Xe = Math.abs(Number(q.u ?? q.x ?? 0) - Number(ke.u ?? ke.x ?? 0)), ze = Math.abs(Number(q.v ?? q.y ?? 0) - Number(ke.v ?? ke.y ?? 0));
      if (Xe < 15e-4 && ze < 15e-4) return !1;
    }
    const Ce = {
      ...q,
      t: Number((q == null ? void 0 : q.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    J.push({ ...Ce }), fe.push({ ...Ce });
    const Ee = Jn(c);
    if (Ee) {
      const Xe = p.paintEngine.ensureTarget(Ee);
      p.paintEngine.appendStrokePoint(Xe, Number(Ce.u ?? 0), Number(Ce.v ?? 0), c.stroke);
    }
    return !0;
  }
  function h1(c, y, w = performance.now()) {
    var ke, Ce;
    let q;
    if (p.mode === "frame") {
      const Ee = _t();
      if (!Ee) return !1;
      q = Qn(y, Ee, w);
    } else
      q = ur(y, w);
    const J = (Ce = (ke = c == null ? void 0 : c.stroke) == null ? void 0 : ke.geometry) == null ? void 0 : Ce.points;
    if (!q || !Array.isArray(J)) return !1;
    const fe = J[J.length - 1];
    if (fe) {
      const Ee = Math.abs(Number(q.u ?? q.x ?? 0) - Number(fe.u ?? fe.x ?? 0)), Xe = Math.abs(Number(q.v ?? q.y ?? 0) - Number(fe.v ?? fe.y ?? 0));
      if (Ee < 15e-4 && Xe < 15e-4) return !1;
    }
    return J.push({
      ...q,
      t: Number((q == null ? void 0 : q.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function m1(c) {
    var jn, fr, pr, Yo, qo;
    const y = (c == null ? void 0 : c.stroke) || null;
    if (!y || (c == null ? void 0 : c.layerKind) !== "paint" || String((y == null ? void 0 : y.toolKind) || "") !== "eraser") return !1;
    bb();
    const w = Jn(), q = lf(w.width, w.height);
    if (!yb(q, y, { w: w.width, h: w.height })) return !1;
    const J = ((fr = (jn = q.ctx) == null ? void 0 : jn.getImageData(0, 0, w.width, w.height)) == null ? void 0 : fr.data) || null;
    if (!J) return !1;
    const fe = new Map(ql().map((Je) => [String((Je == null ? void 0 : Je.actionGroupId) || (Je == null ? void 0 : Je.id) || "").trim(), Je ? { ...Je } : null])), ke = [], Ce = [], Ee = [...Gi().filter((Je) => String((Je == null ? void 0 : Je.layerKind) || "paint") !== "paint")];
    let Xe = !1, ze = eb().reduce((Je, qe) => Math.max(Je, Number((qe == null ? void 0 : qe.z_index) || 0)), -1) + 1;
    function Ve(Je, qe, et, it = 8) {
      let rt = qe, St = et, gt = -1, Vt = -1;
      for (let yt = 0; yt < et; yt += 1)
        for (let Xt = 0; Xt < qe; Xt += 1)
          Je[(yt * qe + Xt) * 4 + 3] <= it || (Xt < rt && (rt = Xt), yt < St && (St = yt), Xt > gt && (gt = Xt), yt > Vt && (Vt = yt));
      return gt < rt || Vt < St ? null : { minX: rt, minY: St, maxX: gt, maxY: Vt };
    }
    const We = Ve(J, w.width, w.height, 8);
    if (!We) return !1;
    function nt(Je, qe) {
      return !Je || !qe ? !1 : !(Je.maxX < qe.minX || qe.maxX < Je.minX || Je.maxY < qe.minY || qe.maxY < Je.minY);
    }
    function Ge(Je, qe) {
      const et = Hi((Je == null ? void 0 : Je.actionGroupId) || (Je == null ? void 0 : Je.id) || "", "paint", qe);
      if (!et) return null;
      const it = et.centerUv.u - et.halfW, rt = et.centerUv.u + et.halfW, St = et.centerUv.v - et.halfH, gt = et.centerUv.v + et.halfH, Vt = w.width, yt = w.height;
      return {
        minX: Math.floor((it % 1 + 1) % 1 * Vt),
        maxX: Math.ceil((rt % 1 + 1) % 1 * Vt),
        minY: Math.floor(Fe(St, 0, 1) * yt),
        maxY: Math.ceil(Fe(gt, 0, 1) * yt),
        wraps: rt - it >= 1 || it < 0 || rt > 1
      };
    }
    function ft(Je) {
      const qe = (Je == null ? void 0 : Je.bbox) || null;
      if (!qe) return null;
      const et = (Je == null ? void 0 : Je.transform) || {}, it = w.width, rt = w.height, St = Number(qe.u0 || 0) + Number(et.du || 0), gt = Number(qe.u1 || 0) + Number(et.du || 0), Vt = Number(qe.v0 || 0) + Number(et.dv || 0), yt = Number(qe.v1 || 0) + Number(et.dv || 0);
      return {
        minX: Math.floor((St % 1 + 1) % 1 * it),
        maxX: Math.ceil((gt % 1 + 1) % 1 * it),
        minY: Math.floor(Fe(Vt, 0, 1) * rt),
        maxY: Math.ceil(Fe(yt, 0, 1) * rt),
        wraps: gt - St >= 1 || St < 0 || gt > 1
      };
    }
    function Tt(Je) {
      return Je ? Je.wraps ? nt(We, { minX: 0, maxX: Je.maxX, minY: Je.minY, maxY: Je.maxY }) || nt(We, { minX: Je.minX, maxX: w.width - 1, minY: Je.minY, maxY: Je.maxY }) : nt(We, Je) : !0;
    }
    function Qt(Je) {
      if (!Je) return { touched: !1, canvas: null };
      const qe = lf(w.width, w.height, { readback: !0 });
      qe.ctx.drawImage(Je, 0, 0);
      const et = qe.ctx.getImageData(0, 0, w.width, w.height);
      qe.ctx.save(), qe.ctx.globalCompositeOperation = "destination-out", qe.ctx.drawImage(q.canvas, 0, 0), qe.ctx.restore();
      const it = qe.ctx.getImageData(0, 0, w.width, w.height);
      for (let rt = 0; rt < w.width * w.height; rt += 1) {
        if (J[rt * 4 + 3] <= 8) continue;
        const gt = et.data[rt * 4 + 3], Vt = it.data[rt * 4 + 3];
        if (gt > Vt)
          return { touched: !0, canvas: qe.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function Nt(Je, qe, et) {
      const it = Number(et == null ? void 0 : et.z_index), rt = Wy(Je, qe, et).map((St, gt) => ({
        ...St,
        z_index: Number.isFinite(it) ? it + gt * 1e-3 : ze + gt * 1e-3
      }));
      return rt.length && (ze = Math.max(ze, ...rt.map((St) => Number((St == null ? void 0 : St.z_index) || 0))) + 1), rt;
    }
    for (const Je of ql()) {
      const qe = String((Je == null ? void 0 : Je.actionGroupId) || (Je == null ? void 0 : Je.id) || "").trim();
      if (!qe) continue;
      const et = Wi(qe, "paint");
      if (!Tt(Ge(Je, et))) {
        Ce.push(Je), ke.push(...et);
        continue;
      }
      const it = ((Yo = (pr = p.paintEngine) == null ? void 0 : pr.getGroupTarget) == null ? void 0 : Yo.call(pr, qe)) || null, rt = ((qo = it == null ? void 0 : it.committedPaint) == null ? void 0 : qo.canvas) || null;
      if (!rt) {
        Ce.push(Je), ke.push(...et);
        continue;
      }
      const St = Qt(rt);
      if (!St.touched || !St.canvas) {
        Ce.push(Je), ke.push(...et);
        continue;
      }
      Xe = !0;
      const gt = Nt(St.canvas, "paint", fe.get(qe) || Je || {});
      Ee.push(...gt);
    }
    for (const Je of Gi().filter((qe) => String((qe == null ? void 0 : qe.layerKind) || "paint") === "paint")) {
      if (!Tt(ft(Je))) {
        Ee.push(Je);
        continue;
      }
      const qe = Vy(Je, null);
      if (!qe) {
        Ee.push(Je);
        continue;
      }
      const et = Qt(qe);
      if (!et.touched || !et.canvas) {
        Ee.push(Je);
        continue;
      }
      Xe = !0;
      const it = Nt(et.canvas, "paint", Je);
      Ee.push(...it);
    }
    return Xe ? (S.painting.paint.strokes = ke, S.painting.groups = Ce.sort((Je, qe) => Number((Je == null ? void 0 : Je.z_index) || 0) - Number((qe == null ? void 0 : qe.z_index) || 0)), S.painting.raster_objects = Ee.sort((Je, qe) => Number((Je == null ? void 0 : Je.z_index) || 0) - Number((qe == null ? void 0 : qe.z_index) || 0)), zo({ preservePanelValues: !1 }), !0) : !1;
  }
  function g1(c) {
    var ke, Ce, Ee, Xe, ze;
    if ((((Ce = (ke = c.stroke) == null ? void 0 : ke.geometry) == null ? void 0 : Ce.rawPoints) || ((Xe = (Ee = c.stroke) == null ? void 0 : Ee.geometry) == null ? void 0 : Xe.points) || []).length >= 1) {
      uc(c);
      const Ve = Jn(c);
      Ve && (String(((ze = c.stroke) == null ? void 0 : ze.toolKind) || "") === "eraser" ? p.paintEngine.cancelActiveStroke(Ve) : p.paintEngine.commitActiveStroke(c.stroke, Ve)), c._hasCommittedSegments = !0;
    }
    const w = c.stroke, q = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, J = qf(c.layerKind, w.toolKind, [], q);
    J.actionGroupId = w.actionGroupId, c.stroke = J;
    const fe = Jn(c);
    fe && p.paintEngine.beginStroke(J, fe);
  }
  function y1(c) {
    var ke, Ce;
    if ((((Ce = (ke = c.stroke) == null ? void 0 : ke.geometry) == null ? void 0 : Ce.points) || []).length >= 3) {
      uc(c);
      const Ee = Jn(c);
      Ee && p.paintEngine.commitActiveStroke(c.stroke, Ee), c._hasCommittedSegments = !0;
    }
    const w = c.stroke, q = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, J = Xf(c.layerKind, w.toolKind, [], q);
    J.actionGroupId = w.actionGroupId, c.stroke = J;
    const fe = Jn(c);
    fe && p.paintEngine.beginStroke(J, fe);
  }
  function uc(c) {
    var fe, ke, Ce, Ee;
    const y = ((fe = c == null ? void 0 : c.stroke) == null ? void 0 : fe.geometry) || null;
    if (!y) return !1;
    const w = String(((ke = c == null ? void 0 : c.stroke) == null ? void 0 : ke.toolKind) || "pen");
    if (c.layerKind === "paint" && w === "eraser")
      return y.geometryKind !== "lasso_fill" && (y.processedPoints = xf(y.rawPoints || y.points || [], c.stroke.targetSpace, !0)), m1(c);
    const q = c.layerKind === "paint" && w !== "eraser";
    if (y.geometryKind === "lasso_fill")
      return (Array.isArray(y.points) ? y.points : []).length < 3 ? !1 : (q && uf((Ce = c.stroke) == null ? void 0 : Ce.actionGroupId), cc(c.layerKind).push(c.stroke), !0);
    const J = y.rawPoints || y.points || [];
    return J.length < 1 ? !1 : (y.processedPoints = xf(J, c.stroke.targetSpace, !0), q && uf((Ee = c.stroke) == null ? void 0 : Ee.actionGroupId), cc(c.layerKind).push(c.stroke), !0);
  }
  function Jf(c) {
    var w;
    if (D && p.mode === "frame") {
      const q = _t(), J = Er(q);
      if (!q || !J || !(Number((c == null ? void 0 : c.x) || 0) >= Number(J.x || 0) && Number((c == null ? void 0 : c.x) || 0) <= Number(J.x || 0) + Number(J.w || 0) && Number((c == null ? void 0 : c.y) || 0) >= Number(J.y || 0) && Number((c == null ? void 0 : c.y) || 0) <= Number(J.y || 0) + Number(J.h || 0))) return null;
      const ke = Qn(c, q, performance.now()), Ce = ke ? qy(ke) : null;
      if (Ce)
        for (const Xe of Ul()) {
          if (!Zn(Xe)) continue;
          const ze = Ff(Xe, Ce);
          if (ze && Number(ze.x) >= 0 && Number(ze.x) <= 1 && Number(ze.y) >= 0 && Number(ze.y) <= 1) {
            const Ve = an(Xe);
            if (Ve != null && Ve.visible) return { item: Xe, geom: Ve };
          }
        }
      const Ee = ff(!1).slice().sort((Xe, ze) => Number((ze == null ? void 0 : ze.z_index) || 0) - Number((Xe == null ? void 0 : Xe.z_index) || 0));
      for (const Xe of Ee) {
        if (Xe.type === "strokeGroup") {
          const We = hf(bf("paint", Xe.actionGroupId || Xe.id || ""));
          if (!We) continue;
          const nt = an(We);
          if (!(nt != null && nt.visible)) continue;
          const Ge = Array.isArray(nt.strokePaths) ? nt.strokePaths : [];
          for (const ft of Ge) {
            const Tt = Array.isArray(ft == null ? void 0 : ft.points) ? ft.points : [];
            if (!Tt.length) continue;
            if (ft.closed && Tt.length >= 3 && ei(c, Tt)) return { item: We, geom: nt };
            const Qt = Math.max(8, Number((ft == null ? void 0 : ft.lineWidth) || 0) * 0.5 + 6);
            for (let Nt = 0; Nt < Tt.length - 1; Nt += 1)
              if (tu(c, Tt[Nt], Tt[Nt + 1]) <= Qt * Qt) return { item: We, geom: nt };
            if (Tt.length === 1 && fa(c, Tt[0]) <= Qt * Qt) return { item: We, geom: nt };
          }
          continue;
        }
        if (Xe.type === "rasterObject") {
          const We = pf(yf(((w = Xe.item) == null ? void 0 : w.id) || Xe.id || ""));
          if (!We) continue;
          const nt = an(We);
          if (gf(We, nt, c, ke)) return { item: We, geom: nt };
          continue;
        }
        const ze = Xe.item;
        if (!ze || !Zn(ze) || !Ce) continue;
        const Ve = Ff(ze, Ce);
        if (Ve && Number(Ve.x) >= 0 && Number(Ve.x) <= 1 && Number(Ve.y) >= 0 && Number(Ve.y) <= 1) {
          const We = an(ze);
          if (We != null && We.visible) return { item: ze, geom: We };
        }
      }
      return null;
    }
    const y = [
      ...ff(!1).slice().sort((q, J) => Number((J == null ? void 0 : J.z_index) || 0) - Number((q == null ? void 0 : q.z_index) || 0)).map((q) => {
        var J;
        return q.type === "strokeGroup" ? hf(bf("paint", q.actionGroupId || q.id || "")) : q.type === "rasterObject" ? pf(yf(((J = q.item) == null ? void 0 : J.id) || q.id || "")) : q.item;
      }).filter(Boolean),
      ...D ? Ul().filter((q) => Ui(q)) : []
    ];
    for (const q of y) {
      if (cr(q)) {
        const fe = an(q);
        if (!(fe != null && fe.visible)) continue;
        const ke = Array.isArray(fe.strokePaths) ? fe.strokePaths : [];
        for (const Ce of ke) {
          const Ee = Array.isArray(Ce == null ? void 0 : Ce.points) ? Ce.points : [];
          if (!Ee.length) continue;
          if (Ce.closed && Ee.length >= 3 && ei(c, Ee)) return { item: q, geom: fe };
          const Xe = Math.max(8, Number((Ce == null ? void 0 : Ce.lineWidth) || 0) * 0.5 + 6);
          for (let ze = 0; ze < Ee.length - 1; ze += 1)
            if (tu(c, Ee[ze], Ee[ze + 1]) <= Xe * Xe) return { item: q, geom: fe };
          if (Ee.length === 1 && fa(c, Ee[0]) <= Xe * Xe) return { item: q, geom: fe };
        }
        continue;
      }
      if (pi(q)) {
        const fe = an(q);
        if (!(fe != null && fe.visible)) continue;
        if (gf(q, fe, c)) return { item: q, geom: fe };
        continue;
      }
      const J = an(q);
      if (J.visible && ei(c, J.corners))
        return { item: q, geom: J };
    }
    return null;
  }
  function Uo(c, y, w = null) {
    if (!c || !c.visible) return { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (Zn(w)) return Lu(c, y);
    if (c.kind === "strokeGroup") {
      const q = c.corners.findIndex((fe) => fa(fe, y) <= 121);
      if (q >= 0) {
        const fe = c.corners[q], ke = fe.x - c.center.x, Ce = fe.y - c.center.y, Ee = ke * Ce >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: q, cursor: Ee };
      }
      const J = Array.isArray(c.strokePaths) ? c.strokePaths : [];
      for (const fe of J) {
        const ke = Array.isArray(fe == null ? void 0 : fe.points) ? fe.points : [];
        if (fe.closed && ke.length >= 3 && ei(y, ke)) return { kind: "move", cursor: "default" };
        const Ce = Math.max(8, Number((fe == null ? void 0 : fe.lineWidth) || 0) * 0.5 + 6);
        for (let Ee = 0; Ee < ke.length - 1; Ee += 1)
          if (tu(y, ke[Ee], ke[Ee + 1]) <= Ce * Ce) return { kind: "move", cursor: "default" };
      }
      return ei(y, c.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (c.kind === "rasterObject") {
      const q = c.corners.findIndex((J) => fa(J, y) <= 121);
      if (q >= 0) {
        const J = c.corners[q], fe = J.x - c.center.x, ke = J.y - c.center.y, Ce = fe * ke >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: q, cursor: Ce };
      }
      return ei(y, c.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    return bM(c, y, {
      edges: t === "cutout" || Ui(w),
      resize: !(Ui(w) && Zl()),
      emptyCursor: p.mode === "pano" ? "grab" : "default"
    });
  }
  function Zf(c, y) {
    return {
      x0: Math.min(Number((c == null ? void 0 : c.x) || 0), Number((y == null ? void 0 : y.x) || 0)),
      y0: Math.min(Number((c == null ? void 0 : c.y) || 0), Number((y == null ? void 0 : y.y) || 0)),
      x1: Math.max(Number((c == null ? void 0 : c.x) || 0), Number((y == null ? void 0 : y.x) || 0)),
      y1: Math.max(Number((c == null ? void 0 : c.y) || 0), Number((y == null ? void 0 : y.y) || 0))
    };
  }
  function b1(c, y) {
    return !!c && !!y && Number(y.x) >= Number(c.x0) && Number(y.x) <= Number(c.x1) && Number(y.y) >= Number(c.y0) && Number(y.y) <= Number(c.y1);
  }
  function v1(c, y) {
    if (!c || !(y != null && y.visible) || !Array.isArray(y.corners)) return !1;
    if (y.corners.some((J) => b1(c, J))) return !0;
    const w = (Number(c.x0) + Number(c.x1)) * 0.5, q = (Number(c.y0) + Number(c.y1)) * 0.5;
    return !!ei({ x: w, y: q }, y.corners);
  }
  function xt(c) {
    if (d1(), p.interaction) {
      p.interaction.kind === "paint_stroke" || p.interaction.kind === "paint_lasso_fill" ? Ke("none") : p.interaction.kind === "view" || p.interaction.kind === "pan_frame" ? Ke("grabbing") : p.interaction.kind === "space_pan" || p.interaction.kind === "frame_pan" ? Ke("move") : p.interaction.kind === "space_orbit" || p.interaction.kind === "frame_orbit" || p.interaction.kind === "world_gizmo" || p.interaction.kind === "roll_frame" ? Ke("grabbing") : p.interaction.kind === "move" || p.interaction.kind === "move_multi" || p.interaction.kind === "move_stroke_group" || p.interaction.kind === "move_raster_object" ? Ke("move") : p.interaction.kind === "scale" || p.interaction.kind === "scale_x" || p.interaction.kind === "scale_y" || p.interaction.kind === "scale_raster_object" ? Ke(p.interaction.cursor || "nwse-resize") : p.interaction.kind === "rotate" ? Ke("grabbing") : Ke("default");
      return;
    }
    if (Yf()) {
      Ke("none");
      return;
    }
    if (p.mode === "frame") {
      if (p.altModifier && !r) {
        Ke(YC);
        return;
      }
      if (p.primaryTool !== "cursor") {
        Ke("default");
        return;
      }
      Ke("grab");
      return;
    }
    if (p.primaryTool === "cursor" && p.marqueeModifier) {
      Ke("default");
      return;
    }
    if (p.gizmoAxis) {
      Ke("grab");
      return;
    }
    const y = Cr(), w = y ? an(y) : null, q = y ? Ir(y) : !1, J = q ? { kind: "none", cursor: "default" } : Uo(w, c, y);
    if (!q && J.kind !== "none") {
      Ke(J.cursor);
      return;
    }
    if (p.primaryTool === "cursor" && Jf(c)) {
      Ke("default");
      return;
    }
    Ke(p.mode === "pano" ? "grab" : "default");
  }
  function _1() {
    return re;
  }
  function Ot() {
    if (!Z) return;
    if (re = !1, p.mode === "frame") {
      G.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (p.worldSelectedId || Bi() && Yr()) {
      const J = S1();
      re = J.visible, Qf(J);
      return;
    }
    const c = Cr(), y = Ya();
    if (!c && y.length === 0 || p.interaction) {
      G.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const w = Xl(), q = CN({
      type: t,
      selected: c,
      selectedItems: y,
      selectedKind: w,
      geom: y.length > 1 ? Ua(y) : an(c),
      allLocked: fi(y),
      anyLocked: y.some((J) => Ir(J)),
      selectedLocked: Ir(c),
      activeAspect: Ui(c) && Zl() ? ko : zr(c),
      cutoutAspectOpen: p.cutoutAspectOpen,
      isExternalSticker: sb,
      isStickerHidden: lb,
      canRestoreSelectedToInitial: jy,
      iconSet: Ye,
      cameraShot: W,
      cameraDeletable: P,
      erpChoice: P,
      coverage: S.coverage
    });
    Qf(q);
  }
  function S1() {
    const c = Ql() && !p.interaction ? Ba().space : null;
    if (!(c != null && c.gizmo)) return { visible: !1 };
    const y = Ka(), w = c.stickers.find((ke) => ke.id === p.worldSelectedId), J = (w ? zd(w) : [c.gizmo.transform.position]).map((ke) => Da(y, ke, T.width, T.height)).filter(Boolean), fe = Zx(y, c.gizmo.transform.position, c.gizmo.mode, T.width, T.height);
    return IN({ corners: J, gizmoBox: fe, gizmoMode: c.gizmo.mode, camera: Bi(), deletable: P && Bi() });
  }
  function Qf(c) {
    var fe, ke;
    if (!c.visible) {
      G.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const y = (Ce, Ee) => EN(c.anchor, Ce, Ee, T.width, T.height), w = Math.max(1, Number(((fe = p.menuSize) == null ? void 0 : fe.w) || 220)), q = Math.max(1, Number(((ke = p.menuSize) == null ? void 0 : ke.h) || 40)), J = y(w, q);
    if (!J) {
      G.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    G.selectionMenu = {
      visible: !0,
      left: J.left,
      top: J.top,
      items: c.items
    }, ye.requestFrame(() => {
      if (!Z || G.selectionMenu.visible !== !0) return;
      const Ce = Z.getBoundingClientRect(), Ee = Math.round(Number((Ce == null ? void 0 : Ce.width) || 0)) || 220, Xe = Math.round(Number((Ce == null ? void 0 : Ce.height) || 0)) || 40;
      p.menuSize = { w: Ee, h: Xe, measured: !0 };
      const ze = y(Ee, Xe);
      ze && (G.selectionMenu.left = ze.left, G.selectionMenu.top = ze.top);
    });
  }
  function mi() {
    Qe.timer && (clearTimeout(Qe.timer), Qe.timer = 0), Qe.target = null, G.tooltip.visible = !1;
  }
  function w1(c) {
    if (!I || !c || !c.isConnected) return;
    const y = String(c.getAttribute("data-tip") || "").trim();
    if (!y) return;
    G.tooltip.text = y, G.tooltip.visible = !0;
    const w = c;
    ye.requestFrame(() => {
      var ft, Tt;
      if (Qe.target !== w || !I || !(w != null && w.isConnected)) return;
      const q = he.getBoundingClientRect(), J = w.getBoundingClientRect(), fe = 8, ke = 12, Ce = Math.round(Number(((ft = I.getBoundingClientRect()) == null ? void 0 : ft.width) || 0)) || 100, Ee = Math.round(Number(((Tt = I.getBoundingClientRect()) == null ? void 0 : Tt.height) || 0)) || 24, Xe = !!w.closest(".pano-floating-left"), ze = !!w.closest(".pano-frame-rail"), Ve = !!w.closest(".pano-paint-footer") || !!w.closest(".pano-paint-color-float");
      let We = "", nt = J.left - q.left + J.width * 0.5 - Ce * 0.5, Ge = J.top - q.top - Ee - ke;
      if (w.closest(".pano-floating-top") && (Ge = J.bottom - q.top + ke), Xe)
        We = "tool-rail", nt = J.right - q.left + 10, Ge = J.top - q.top + J.height * 0.5 - Ee * 0.5, nt = Fe(nt, fe, Math.max(fe, q.width - Ce - fe)), Ge = Fe(Ge, fe, Math.max(fe, q.height - Ee - fe));
      else if (ze)
        We = "frame-rail", nt = J.left - q.left - Ce - 10, Ge = J.top - q.top + J.height * 0.5 - Ee * 0.5, nt = Fe(nt, fe, Math.max(fe, q.width - Ce - fe)), Ge = Fe(Ge, fe, Math.max(fe, q.height - Ee - fe));
      else if (Ve) {
        We = "footer";
        const Qt = w.closest(".pano-paint-footer"), Nt = Qt ? Qt.getBoundingClientRect() : J;
        nt = Nt.left - q.left + Nt.width * 0.5 - Ce * 0.5, Ge = Nt.bottom - q.top + 5, nt = Fe(nt, fe, Math.max(fe, q.width - Ce - fe)), Ge = Math.max(fe, Ge);
      }
      nt = Fe(nt, fe, Math.max(fe, q.width - Ce - fe)), Ge = Math.max(fe, Ge), G.tooltip.left = nt, G.tooltip.top = Ge, G.tooltip.variant = We, G.tooltip.visible = !0;
    });
  }
  function x1(c, y, w = {}) {
    var fe;
    if ((c == null ? void 0 : c.kind) !== "roll_frame" || !c.shot) return;
    c.accumulatedRad += kg(y, c.lastAngle), c.lastAngle = y;
    const q = Mg(c.start.roll_deg, c.accumulatedRad, {
      shiftKey: w.shiftKey,
      altKey: c.altStarted ? !1 : w.altKey
    });
    c.shot.roll_deg = q, c.changed = c.changed || Math.abs(c.accumulatedRad) > 1e-9;
    const J = (((fe = G.sidePanel) == null ? void 0 : fe.params) || []).find((ke) => ke.key === "roll_deg");
    J && (J.value = q, J.displayValue = Mo(q), J.fillPct = (q + 180) / 360 * 100), Jr(), dc(c), Ze({ localOnly: !0 });
  }
  function k1(c, y, w = {}) {
    var fe;
    if ((c == null ? void 0 : c.kind) !== "roll_frame" || !c.shot || !c.rollGesture) return;
    const q = ty(c.rollGesture, y, w);
    if (!q) return;
    c.rollGesture = q.gesture, c.center = q.gesture.center, c.lastAngle = q.gesture.lastAngle, c.accumulatedRad = q.gesture.accumulatedRad, c.shot.roll_deg = q.rollDeg, c.changed = c.changed || Math.abs(q.gesture.accumulatedRad) > 1e-9;
    const J = (((fe = G.sidePanel) == null ? void 0 : fe.params) || []).find((ke) => ke.key === "roll_deg");
    J && (J.value = q.rollDeg, J.displayValue = Mo(q.rollDeg), J.fillPct = (q.rollDeg + 180) / 360 * 100), Jr(), dc(c), Ze({ localOnly: !0 });
  }
  function ep(c, y) {
    const w = Xr(c);
    return Math.atan2(w.y - y.y, w.x - y.x);
  }
  function dc(c) {
    var ke, Ce;
    if ((c == null ? void 0 : c.kind) !== "roll_frame" || !c.shot) return;
    Qe.timer && (clearTimeout(Qe.timer), Qe.timer = 0), Qe.target = null;
    const y = Er(c.shot), w = (ke = T.getBoundingClientRect) == null ? void 0 : ke.call(T), q = (Ce = he.getBoundingClientRect) == null ? void 0 : Ce.call(he);
    if (!y || !w || !q || T.width <= 0 || T.height <= 0) return;
    const J = w.width / T.width, fe = w.height / T.height;
    G.tooltip.text = `${Mo(c.shot.roll_deg)}°`, G.tooltip.left = w.left - q.left + (y.x + y.w * 0.5) * J, G.tooltip.top = w.top - q.top + (y.y + y.h * 0.5) * fe + 12, G.tooltip.variant = "roll", G.tooltip.visible = !0;
  }
  function M1(c) {
    var fe;
    if (c.button !== 0 || r || p.mode !== "frame") return;
    const y = _t();
    if (!y || y.locked === !0) return;
    const w = Er(y);
    if (!w) return;
    const q = { x: w.x + w.w * 0.5, y: w.y + w.h * 0.5 }, J = ep(c, q);
    p.interaction = {
      kind: "roll_frame",
      shot: y,
      center: q,
      lastAngle: J,
      accumulatedRad: 0,
      start: { roll_deg: Number(y.roll_deg ?? y.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (fe = U.setPointerCapture) == null || fe.call(U, c.pointerId), c.preventDefault(), Jr(), dc(p.interaction), Ze({ localOnly: !0 });
  }
  U == null || U.addEventListener("pointerdown", M1);
  function P1(c) {
    var y;
    ((y = p.interaction) == null ? void 0 : y.kind) !== "roll_frame" || p.interaction.source !== "knob" || x1(
      p.interaction,
      ep(c, p.interaction.center),
      c
    );
  }
  U == null || U.addEventListener("pointermove", P1);
  function N1() {
    const c = p.interaction;
    (c == null ? void 0 : c.kind) !== "roll_frame" || c.source !== "knob" || (c.changed && (Rt(), vn(), vt()), p.interaction = null, mi(), Zr(), Jr(), Ze());
  }
  U == null || U.addEventListener("pointerup", N1), U == null || U.addEventListener("pointercancel", () => Bo()), U == null || U.addEventListener("lostpointercapture", () => {
    var c;
    ((c = p.interaction) == null ? void 0 : c.source) === "knob" && Bo();
  });
  function A1(c) {
    const y = p.mode === "frame" && !r ? _t() : null;
    !y || y.locked === !0 || Math.abs(Number(y.roll_deg ?? y.rot_deg ?? 0)) <= 1e-9 || (y.roll_deg = 0, Rt(), vn(), vt(), Jr(), Ze(), c.preventDefault());
  }
  U == null || U.addEventListener("dblclick", A1);
  function C1(c) {
    L.selection && (L.selection = null, Cf());
    const y = Xr(c);
    H = y, ns(y, !0), Wl(), pt.state.inertia.active = !1, pt.state.inertia.vx = 0, pt.state.inertia.vy = 0;
    const w = Yr(), q = lc(), J = w || q ? OM(oc(), c) : null;
    if (q && J) {
      c.preventDefault(), J === "look" ? Bf(y, c.pointerId) : o1(J, y, c.pointerId);
      return;
    }
    if (J === "look") {
      c.preventDefault();
      const ze = Ja(c);
      p.interaction = { kind: "view", last: ze, lastTs: performance.now() }, pt.startDrag(ze.x, ze.y, c.pointerId, performance.now()), xt(y), T.setPointerCapture(c.pointerId);
      return;
    }
    if (J) {
      c.preventDefault(), Nf(J, y, c.pointerId);
      return;
    }
    if ((w || q) && c.button !== 0) {
      c.preventDefault();
      return;
    }
    if (c.button === 1) {
      if (c.preventDefault(), p.mode === "frame") {
        const ze = _t();
        if (!ze || r || ze.locked === !0) return;
        p.interaction = {
          kind: "pan_frame",
          shot: ze,
          last: y,
          start: {
            yaw_deg: Number(ze.yaw_deg || 0),
            pitch_deg: Number(ze.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const ze = p.mode === "unwrap" ? y : Ja(c);
        p.interaction = { kind: "view", last: ze, lastTs: performance.now() }, pt.startDrag(ze.x, ze.y, c.pointerId, performance.now());
      }
      xt(y), T.setPointerCapture(c.pointerId);
      return;
    }
    if (c.button !== 0) return;
    if (p.mode === "frame" && (c.altKey || c.shiftKey) && !r) {
      const ze = _t(), Ve = Er(ze);
      if (!ze || ze.locked === !0 || !Ve) return;
      const We = ey({
        frame: Ve,
        point: y,
        startRollDeg: Number(ze.roll_deg ?? ze.rot_deg ?? 0),
        shiftKey: c.shiftKey,
        altKey: c.altKey,
        allowAlt: !0
      });
      if (!We) return;
      p.interaction = {
        kind: "roll_frame",
        shot: ze,
        center: We.center,
        lastAngle: We.lastAngle,
        accumulatedRad: We.accumulatedRad,
        rollGesture: We,
        start: { roll_deg: Number(ze.roll_deg ?? ze.rot_deg ?? 0) },
        changed: !1,
        altStarted: We.source === "alt",
        source: We.source
      }, T.setPointerCapture(c.pointerId), c.preventDefault(), Jr(), Ze({ localOnly: !0 });
      return;
    }
    if (p.mode === "frame" && p.primaryTool === "cursor") {
      Bf(y, c.pointerId), c.preventDefault();
      return;
    }
    if (r) {
      p.mode === "pano" && rp(c, y);
      return;
    }
    if (Y && !Y.hidden)
      return;
    if ((p.primaryTool === "paint" || p.primaryTool === "mask") && (Rf() || sc())) {
      if (!hb()) return;
      Go();
      const ze = p.primaryTool === "mask" ? "mask" : "paint", Ve = p.primaryTool === "mask" ? p.maskTool : p.paintTool, We = p.mode === "frame" && sc() ? _t() : null, nt = { kind: "ERP_GLOBAL" }, Ge = We ? Qn(y, We, performance.now()) : ur(y, performance.now());
      if (!Ge) {
        xt(y);
        return;
      }
      p.interaction = {
        kind: Ve === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: ze,
        _livePreviewToken: fo("live"),
        stroke: Ve === "lasso_fill" ? Xf(ze, Ve, [Ge], nt) : qf(ze, Ve, [Ge], nt)
      }, Ki();
      const ft = Jn(p.interaction);
      if (ft)
        if (p.paintEngine.beginStroke(p.interaction.stroke, ft), p.interaction.kind === "paint_stroke") {
          const Tt = p.paintEngine.ensureTarget(ft), Qt = Number((Ge == null ? void 0 : Ge.u) ?? (Ge == null ? void 0 : Ge.x) ?? 0), Nt = Number((Ge == null ? void 0 : Ge.v) ?? (Ge == null ? void 0 : Ge.y) ?? 0);
          p.paintEngine.appendStrokePoint(Tt, Qt, Nt, p.interaction.stroke);
        } else
          p.paintEngine.updateActiveStroke(p.interaction.stroke, ft);
      xt(y), T.setPointerCapture(c.pointerId), Ze();
      return;
    }
    const fe = Ya(), ke = Cr(), Ce = fe.length > 1 ? Ua(fe) : ke ? an(ke) : null;
    if (p.primaryTool === "cursor" && (c.ctrlKey || c.metaKey)) {
      p.interaction = { kind: "marquee_select", start: y, current: y }, xt(y), T.setPointerCapture(c.pointerId), Ze({ localOnly: !0, reason: bt.OVERLAY });
      return;
    }
    if (p.primaryTool === "cursor" && af() && Yr() && Xb(c, y) || p.primaryTool === "cursor" && _ && Ql() && I1(c, y)) return;
    if (fe.length > 1 && (Ce != null && Ce.visible)) {
      if ((fe.some((Ve) => Ir(Ve)) ? { kind: "none" } : Uo(Ce, y)).kind === "move") {
        p.interaction = {
          kind: "move_multi",
          items: fe.map((Ve) => Ve),
          offset: { x: y.x - Ce.center.x, y: y.y - Ce.center.y },
          startCenter: { x: Ce.center.x, y: Ce.center.y },
          stickerSnapshots: fe.filter((Ve) => Zn(Ve)).map((Ve) => ({
            id: String(Ve.id || ""),
            yaw_deg: Number(Fn(Ve).yaw_deg || 0),
            pitch_deg: Number(Fn(Ve).pitch_deg || 0),
            center: (() => {
              var nt, Ge;
              const We = an(Ve);
              return We != null && We.visible ? { x: Number(((nt = We.center) == null ? void 0 : nt.x) || 0), y: Number(((Ge = We.center) == null ? void 0 : Ge.y) || 0) } : { x: y.x, y: y.y };
            })()
          })),
          strokeSnapshots: fe.filter((Ve) => cr(Ve)).map((Ve) => ({
            id: String(Ve.actionGroupId || Ve.id || ""),
            layerKind: String(Ve.layerKind || "paint"),
            snapshot: cn(Wi(Ve.actionGroupId, Ve.layerKind)),
            frameSnapshot: cn(Hi(Ve.actionGroupId, Ve.layerKind)),
            center: (() => {
              var nt, Ge;
              const We = an(Ve);
              return We != null && We.visible ? { x: Number(((nt = We.center) == null ? void 0 : nt.x) || 0), y: Number(((Ge = We.center) == null ? void 0 : Ge.y) || 0) } : { x: y.x, y: y.y };
            })(),
            centerUv: ob(Ve.actionGroupId, Ve.layerKind)
          })),
          rasterSnapshots: fe.filter((Ve) => pi(Ve)).map((Ve) => ({
            id: jo(Ve.rasterObjectId || Ve.id || ""),
            snapshot: cn(Gi().find((We) => String((We == null ? void 0 : We.id) || "") === jo(Ve.rasterObjectId || Ve.id || ""))),
            center: (() => {
              var nt, Ge;
              const We = an(Ve);
              return We != null && We.visible ? { x: Number(((nt = We.center) == null ? void 0 : nt.x) || 0), y: Number(((Ge = We.center) == null ? void 0 : Ge.y) || 0) } : { x: y.x, y: y.y };
            })(),
            centerUv: nb(Ve)
          }))
        }, xt(y), T.setPointerCapture(c.pointerId);
        return;
      }
    } else if (ke && (Ce != null && Ce.visible)) {
      const ze = Ir(ke) ? { kind: "none" } : Uo(Ce, y, ke);
      if (ze.kind === "scale") {
        p.interaction = cr(ke) ? {
          kind: "scale_stroke_group",
          item: ke,
          center: Ce.center,
          startDist: Math.max(1, Math.hypot(y.x - Ce.center.x, y.y - Ce.center.y)),
          snapshot: cn(Wi(ke.actionGroupId, ke.layerKind)),
          frameSnapshot: cn(Hi(ke.actionGroupId, ke.layerKind)),
          cursor: ze.cursor
        } : pi(ke) ? {
          kind: "scale_raster_object",
          item: ke,
          center: Ce.center,
          startDist: Math.max(1, Math.hypot(y.x - Ce.center.x, y.y - Ce.center.y)),
          snapshot: cn(Gi().find((Ve) => String((Ve == null ? void 0 : Ve.id) || "") === jo(ke.rasterObjectId || ke.id || ""))),
          cursor: ze.cursor
        } : {
          kind: "scale",
          item: ke,
          center: Ce.center,
          startDist: Math.max(1, Math.hypot(y.x - Ce.center.x, y.y - Ce.center.y)),
          startHFOV: Number(Fn(ke).hFOV_deg || 20),
          startVFOV: Number(Fn(ke).vFOV_deg || 20),
          cursor: ze.cursor
        }, xt(y), T.setPointerCapture(c.pointerId);
        return;
      }
      if (ze.kind === "scale_x" || ze.kind === "scale_y") {
        p.interaction = {
          kind: ze.kind,
          item: ke,
          center: Ce.center,
          startDist: Math.max(1, Math.hypot(y.x - Ce.center.x, y.y - Ce.center.y)),
          startHFOV: Number(Fn(ke).hFOV_deg || 20),
          startVFOV: Number(Fn(ke).vFOV_deg || 20),
          cursor: ze.cursor,
          edge: ze.edge
        }, xt(y), T.setPointerCapture(c.pointerId);
        return;
      }
      if (ze.kind === "rotate") {
        p.interaction = cr(ke) ? {
          kind: "rotate_stroke_group",
          item: ke,
          center: Ce.center,
          startAng: Math.atan2(y.y - Ce.center.y, y.x - Ce.center.x),
          snapshot: cn(Wi(ke.actionGroupId, ke.layerKind)),
          frameSnapshot: cn(Hi(ke.actionGroupId, ke.layerKind))
        } : {
          kind: "rotate",
          item: ke,
          center: Ce.center,
          startRot: Number(Fn(ke).rot_deg || Fn(ke).roll_deg || 0),
          startAng: Math.atan2(y.y - Ce.center.y, y.x - Ce.center.x)
        }, xt(y), T.setPointerCapture(c.pointerId);
        return;
      }
      if (ze.kind === "move") {
        if (cr(ke)) {
          const Ve = p.mode === "frame" ? (() => {
            const We = _t();
            return We ? Qn(y, We, performance.now()) : null;
          })() : ur(y, performance.now());
          p.interaction = {
            kind: "move_stroke_group",
            item: ke,
            startUv: Ve,
            snapshot: cn(Wi(ke.actionGroupId, ke.layerKind)),
            frameSnapshot: cn(Hi(ke.actionGroupId, ke.layerKind))
          }, xt(y), T.setPointerCapture(c.pointerId);
          return;
        }
        if (pi(ke)) {
          const Ve = p.mode === "frame" ? (() => {
            const We = _t();
            return We ? Qn(y, We, performance.now()) : null;
          })() : ur(y, performance.now());
          p.interaction = {
            kind: "move_raster_object",
            item: ke,
            startUv: Ve,
            snapshot: cn(Gi().find((We) => String((We == null ? void 0 : We.id) || "") === jo(ke.rasterObjectId || ke.id || "")))
          }, xt(y), T.setPointerCapture(c.pointerId);
          return;
        }
        p.interaction = {
          kind: "move",
          item: ke,
          offset: { x: y.x - Ce.center.x, y: y.y - Ce.center.y }
        }, xt(y), T.setPointerCapture(c.pointerId);
        return;
      }
    }
    const Ee = Jf(y);
    if (Ee) {
      const ze = p.selectedId !== Ee.item.id;
      if (ze && p.selectedId && (Rt(), Ar()), hi(Ee.item), D && ze && (p.cutoutAspectOpen = !1), ze && vt(), Ot(), Ze(), Ir(Ee.item)) {
        xt(y);
        return;
      }
      p.interaction = {
        kind: cr(Ee.item) ? "move_stroke_group" : pi(Ee.item) ? "move_raster_object" : "move",
        item: Ee.item,
        offset: { x: y.x - Ee.geom.center.x, y: y.y - Ee.geom.center.y },
        startUv: cr(Ee.item) || pi(Ee.item) ? p.mode === "frame" ? (() => {
          const Ve = _t();
          return Ve ? Qn(y, Ve, performance.now()) : null;
        })() : ur(y, performance.now()) : null,
        snapshot: cr(Ee.item) ? cn(Wi(Ee.item.actionGroupId, Ee.item.layerKind)) : pi(Ee.item) ? cn(Gi().find((Ve) => String((Ve == null ? void 0 : Ve.id) || "") === jo(Ee.item.rasterObjectId || Ee.item.id || ""))) : null,
        frameSnapshot: cr(Ee.item) ? cn(Hi(Ee.item.actionGroupId, Ee.item.layerKind)) : null
      }, xt(y), T.setPointerCapture(c.pointerId);
      return;
    }
    const Xe = !!p.selectedId;
    Xe && (Rt(), Ar()), zo(), Xe && vt(), Ot(), Ze(), p.mode === "pano" && rp(c, y);
  }
  T.onpointerdown = C1;
  function gi(c, y) {
    return De.gizmoPointer(c, Ka(), y.x, y.y, T.width, T.height);
  }
  function I1(c, y) {
    var Ce;
    const w = (Ce = Ba().space) == null ? void 0 : Ce.gizmo;
    if (w && gi("hover", y) !== null && gi("down", y))
      return p.interaction = {
        kind: "world_gizmo",
        id: p.worldSelectedId,
        mode: w.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: w.transform,
        base: Vi(Pf(), p.frame),
        changed: !1
      }, T.setPointerCapture(c.pointerId), xt(y), !0;
    const q = Ya(), J = Cr(), fe = q.length > 1 ? q.some((Ee) => Ir(Ee)) ? "none" : Uo(Ua(q), y).kind : J && !Ir(J) ? Uo(an(J), y, J).kind : "none";
    if (fe !== "none" && fe !== "move") return !1;
    const ke = De.pickSticker(Ka(), y.x, y.y, T.width, T.height);
    return S.stickers.some((Ee) => Ee.id === ke && Ee.placement === "world") ? (p.worldSelectedId !== ke && (p.selectedId && (Rt(), Ar()), kb(ke), vt(), Ot(), Af(), Ze()), p.interaction = { kind: "world_select" }, T.setPointerCapture(c.pointerId), !0) : !1;
  }
  function tp(c) {
    var q;
    const w = !!(p.worldSelectedId || Bi()) && p.primaryTool === "cursor" && Ql() && !!((q = Ba().space) != null && q.gizmo) ? gi("hover", c) : null;
    w !== p.gizmoAxis && (p.gizmoAxis = w, C.backgroundDirty = !0, Ze({ localOnly: !0, reason: bt.VIEW }));
  }
  function E1(c, y) {
    const w = gi("move", y);
    if (w && c.camera) {
      for (const [J, fe] of Object.entries(xh(c.mode, c.base, c.start, w))) pn(S.camera, J, p.frame, fe);
      Zi(), c.changed = !0, Ie.request("sidePanel"), Ze({ localOnly: !0 });
      return;
    }
    const q = S.stickers.find((J) => J.id === c.id);
    !w || !q || (wx(q, p.frame, xh(c.mode, c.base, c.start, w)), c.changed = !0, qr(), Ie.request("sidePanel"), Ze({ localOnly: !0 }));
  }
  function np(c) {
    p.interaction = null, p.gizmoAxis = null, c.kind === "world_gizmo" && (gi("up", p.pointerPos), C.backgroundDirty = !0, c.changed && (Rt(), vn(), vt())), xt(p.pointerPos), Ze();
  }
  function rp(c, y) {
    if (Yr()) {
      const q = oc().emptyLeft;
      q && Nf(q, y, c.pointerId);
      return;
    }
    const w = Ja(c);
    p.interaction = { kind: "view", last: w, lastTs: performance.now() }, pt.startDrag(w.x, w.y, c.pointerId, performance.now()), xt(y), T.setPointerCapture(c.pointerId);
  }
  function O1(c, y) {
    if (!b || !qi.playing || (qi.stop(), c.kind === "frame_pan")) return;
    if (c.kind === "frame_orbit") {
      const J = Wo();
      J && (c.pivot = Gf(J, Ko(J), y));
      return;
    }
    if (c.kind === "world_gizmo") {
      const J = S.stickers.find((fe) => fe.id === c.id);
      c.camera ? c.base = Kl() : J && (c.base = Vi(J, p.frame));
      return;
    }
    if (c.kind === "move_multi") {
      const J = Ua(c.items);
      if (!(J != null && J.visible)) return;
      c.offset = { x: y.x - J.center.x, y: y.y - J.center.y }, c.startCenter = { x: J.center.x, y: J.center.y };
      for (const fe of c.stickerSnapshots) {
        const ke = c.items.find((Ee) => String((Ee == null ? void 0 : Ee.id) || "") === fe.id), Ce = ke ? an(ke) : null;
        Ce != null && Ce.visible && (fe.yaw_deg = Number(Fn(ke).yaw_deg || 0), fe.pitch_deg = Number(Fn(ke).pitch_deg || 0), fe.center = { x: Ce.center.x, y: Ce.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(c.kind)) return;
    const w = an(c.item);
    if (!(w != null && w.visible)) return;
    const q = Fn(c.item);
    if (c.kind === "move") {
      c.offset = { x: y.x - w.center.x, y: y.y - w.center.y };
      return;
    }
    if (c.center = w.center, c.kind === "rotate") {
      c.startRot = Number(q.rot_deg || q.roll_deg || 0), c.startAng = Math.atan2(y.y - w.center.y, y.x - w.center.x);
      return;
    }
    c.startDist = Math.max(1, Math.hypot(y.x - w.center.x, y.y - w.center.y)), c.startHFOV = Number(q.hFOV_deg || 20), c.startVFOV = Number(q.vFOV_deg || 20);
  }
  function F1(c) {
    var q, J, fe, ke, Ce, Ee, Xe, ze, Ve, We, nt, Ge, ft, Tt, Qt, Nt, jn, fr, pr, Yo, qo, Je;
    const y = Xr(c);
    if (ns(y, !0), !p.interaction) {
      tp(y), xt(y);
      return;
    }
    xt(y);
    const w = p.interaction;
    if (H && (y.x !== H.x || y.y !== H.y)) {
      const qe = H;
      H = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(w.kind) || O1(w, qe);
    }
    if (w.kind !== "world_select") {
      if (w.kind === "world_gizmo") {
        E1(w, y);
        return;
      }
      if (w.kind === "paint_stroke") {
        const qe = typeof c.getCoalescedEvents == "function" ? c.getCoalescedEvents() : [c];
        let et = !1;
        qe.forEach((it) => {
          const rt = Xr(it);
          if (p.mode === "frame") {
            const St = _t(), gt = St ? Er(St) : null;
            if (gt) {
              const Vt = (rt.x - gt.x) / Math.max(1, gt.w), yt = (rt.y - gt.y) / Math.max(1, gt.h);
              if (!(Vt >= 0 && Vt <= 1 && yt >= 0 && yt <= 1)) {
                w._outOfFrame = !0;
                return;
              }
              w._outOfFrame && (w._outOfFrame = !1, g1(w));
            }
          }
          p1(w, rt, performance.now()) && (et = !0);
        }), et && Ze({ localOnly: !0, reason: bt.PAINT });
        return;
      }
      if (w.kind === "paint_lasso_fill") {
        const qe = typeof c.getCoalescedEvents == "function" ? c.getCoalescedEvents() : [c];
        let et = !1;
        if (qe.forEach((it) => {
          const rt = Xr(it);
          if (p.mode === "frame") {
            const St = _t(), gt = St ? Er(St) : null;
            if (gt) {
              const Vt = (rt.x - gt.x) / Math.max(1, gt.w), yt = (rt.y - gt.y) / Math.max(1, gt.h);
              if (!(Vt >= 0 && Vt <= 1 && yt >= 0 && yt <= 1)) {
                w._outOfFrame = !0;
                return;
              }
              w._outOfFrame && (w._outOfFrame = !1, y1(w));
            }
          }
          h1(w, rt, performance.now()) && (et = !0);
        }), et) {
          const it = Jn(w);
          it && p.paintEngine.updateActiveStroke(w.stroke, it), Ze({ localOnly: !0, reason: bt.PAINT });
        }
        return;
      }
      if (w.kind === "view") {
        const qe = performance.now(), et = p.mode === "unwrap" ? y : Ja(c);
        pt.moveDrag(et.x, et.y, p.mode === "unwrap" ? "unwrap" : "pano", qe), w.lastTs = qe, w.last = et, Ze({ localOnly: !0, reason: bt.VIEW });
        return;
      }
      if (w.kind === "frame_pan" || w.kind === "frame_orbit") {
        a1(w, y);
        return;
      }
      if (w.kind === "space_pan" || w.kind === "space_orbit") {
        const qe = Xi();
        Cb(w.kind === "space_pan" ? _h(qe, y.x - w.last.x, y.y - w.last.y, T.width, T.height, w.depth) : vh(qe, y.x - w.last.x, y.y - w.last.y, T.height, w.pivot)), w.last = y;
        return;
      }
      if (w.kind === "pan_frame") {
        const qe = ts(w.shot);
        if (!qe || !w.shot) return;
        const et = y.x - w.last.x, it = y.y - w.last.y, rt = ny(w.shot, {
          dx: et,
          dy: it,
          focalPx: qe.focalPx,
          invertX: ((q = S.ui_settings) == null ? void 0 : q.invert_view_x) === !0,
          invertY: ((J = S.ui_settings) == null ? void 0 : J.invert_view_y) === !0
        });
        w.shot.yaw_deg = rt.yaw_deg, w.shot.pitch_deg = rt.pitch_deg, w.changed = w.changed || Math.abs(et) > 0 || Math.abs(it) > 0, w.last = y, Ze({ localOnly: !0 });
        return;
      }
      if (w.kind === "roll_frame") {
        if (w.source === "knob") return;
        k1(w, y, c);
        return;
      }
      if (w.kind === "move") {
        const qe = y.x - w.offset.x, et = y.y - w.offset.y;
        if (p.mode === "frame" && D) {
          const it = _t(), rt = Er(it);
          if (!it || !rt) return;
          const St = {
            x: Fe((qe - rt.x) / Math.max(1, rt.w), 0, 1),
            y: Fe((et - rt.y) / Math.max(1, rt.h), 0, 1)
          }, gt = df(it, St);
          if (!gt) return;
          const Vt = vs(gt);
          tr(w.item, { yaw_deg: Vt.yaw, pitch_deg: Vt.pitch });
        } else if (p.mode === "unwrap") {
          const it = Jl(), rt = Fe((qe - it.x) / Math.max(it.w, 1), 0, 1), St = Fe((et - it.y) / Math.max(it.h, 1), 0, 1);
          tr(w.item, { yaw_deg: zt(rt * 360 - 180), pitch_deg: Fe(90 - St * 180, -90, 90) });
        } else {
          const it = Mf(qe, et), rt = vs(it);
          tr(w.item, { yaw_deg: rt.yaw, pitch_deg: rt.pitch });
        }
        Zn(w.item) && qr(), Ze({ localOnly: !0 });
        return;
      }
      if (w.kind === "move_stroke_group") {
        const qe = p.mode === "frame" ? (() => {
          const rt = _t();
          return rt ? Qn(y, rt, performance.now()) : null;
        })() : ur(y, performance.now());
        if (!qe || !w.startUv) return;
        const et = Za(Number(qe.u || 0), Number(w.startUv.u || 0)), it = Number(qe.v || 0) - Number(w.startUv.v || 0);
        zn((fe = w.item) == null ? void 0 : fe.actionGroupId, et, it, w.snapshot, (ke = w.item) == null ? void 0 : ke.layerKind, w.frameSnapshot) && (Yi({ rebuildPaintEngine: !1 }), Ze({ localOnly: !0, reason: bt.PAINT }));
        return;
      }
      if (w.kind === "move_raster_object") {
        const qe = p.mode === "frame" ? (() => {
          const rt = _t();
          return rt ? Qn(y, rt, performance.now()) : null;
        })() : ur(y, performance.now());
        if (!qe || !w.startUv) return;
        const et = Za(Number(qe.u || 0), Number(w.startUv.u || 0)), it = Number(qe.v || 0) - Number(w.startUv.v || 0);
        di(((Ce = w.item) == null ? void 0 : Ce.rasterObjectId) || ((Ee = w.item) == null ? void 0 : Ee.id) || "", et, it, w.snapshot) && (Xa(), Ze({ localOnly: !0, reason: bt.PAINT }));
        return;
      }
      if (w.kind === "scale_raster_object") {
        const et = Math.max(1, Math.hypot(y.x - w.center.x, y.y - w.center.y)) / Math.max(1, Number(w.startDist || 1));
        Wa(((Xe = w.item) == null ? void 0 : Xe.rasterObjectId) || ((ze = w.item) == null ? void 0 : ze.id) || "", et, w.snapshot) && (Xa(), Ze({ localOnly: !0, reason: bt.PAINT }));
        return;
      }
      if (w.kind === "move_multi") {
        const qe = y.x - Number(((Ve = w.offset) == null ? void 0 : Ve.x) || 0), et = y.y - Number(((We = w.offset) == null ? void 0 : We.y) || 0);
        let it = !1, rt = !1, St = !1;
        const gt = qe - Number(((nt = w.startCenter) == null ? void 0 : nt.x) || qe), Vt = et - Number(((Ge = w.startCenter) == null ? void 0 : Ge.y) || et);
        for (const yt of Array.isArray(w.stickerSnapshots) ? w.stickerSnapshots : []) {
          const Xt = (t === "cutout" ? Qy() : Yl()).find((Kt) => String((Kt == null ? void 0 : Kt.id) || "") === String(yt.id || ""));
          if (!Xt || !Zn(Xt)) continue;
          const xn = {
            x: Number(((ft = yt.center) == null ? void 0 : ft.x) || 0) + gt,
            y: Number(((Tt = yt.center) == null ? void 0 : Tt.y) || 0) + Vt
          };
          if (p.mode === "frame" && D) {
            const Kt = _t(), en = Er(Kt);
            if (!Kt || !en) continue;
            const yi = {
              x: Fe((xn.x - en.x) / Math.max(1, en.w), 0, 1),
              y: Fe((xn.y - en.y) / Math.max(1, en.h), 0, 1)
            }, _p = df(Kt, yi);
            if (!_p) continue;
            const Sp = vs(_p);
            tr(Xt, { yaw_deg: Sp.yaw, pitch_deg: Sp.pitch });
          } else if (p.mode === "unwrap") {
            const Kt = Jl(), en = Fe((xn.x - Kt.x) / Math.max(Kt.w, 1), 0, 1), yi = Fe((xn.y - Kt.y) / Math.max(Kt.h, 1), 0, 1);
            tr(Xt, { yaw_deg: zt(en * 360 - 180), pitch_deg: Fe(90 - yi * 180, -90, 90) });
          } else {
            const Kt = Mf(xn.x, xn.y), en = vs(Kt);
            tr(Xt, { yaw_deg: en.yaw, pitch_deg: en.pitch });
          }
          it = !0;
        }
        for (const yt of Array.isArray(w.strokeSnapshots) ? w.strokeSnapshots : []) {
          const Xt = {
            x: Number(((Qt = yt.center) == null ? void 0 : Qt.x) || 0) + gt,
            y: Number(((Nt = yt.center) == null ? void 0 : Nt.y) || 0) + Vt
          }, xn = p.mode === "frame" ? (() => {
            const en = _t();
            return en ? Qn(Xt, en, performance.now()) : null;
          })() : ur(Xt, performance.now()), Kt = yt.centerUv || null;
          if (xn && Kt) {
            const en = Za(Number(xn.u || 0), Number(Kt.u || 0)), yi = Number(xn.v || 0) - Number(Kt.v || 0);
            zn(yt.id, en, yi, yt.snapshot, yt.layerKind, yt.frameSnapshot) && (it = !0, rt = !0);
          }
        }
        for (const yt of Array.isArray(w.rasterSnapshots) ? w.rasterSnapshots : []) {
          const Xt = {
            x: Number(((jn = yt.center) == null ? void 0 : jn.x) || 0) + gt,
            y: Number(((fr = yt.center) == null ? void 0 : fr.y) || 0) + Vt
          }, xn = p.mode === "frame" ? (() => {
            const en = _t();
            return en ? Qn(Xt, en, performance.now()) : null;
          })() : ur(Xt, performance.now()), Kt = yt.centerUv || null;
          if (xn && Kt) {
            const en = Za(Number(xn.u || 0), Number(Kt.u || 0)), yi = Number(xn.v || 0) - Number(Kt.v || 0);
            di(yt.id, en, yi, yt.snapshot) && (it = !0, St = !0);
          }
        }
        it && (rt ? Yi({ rebuildPaintEngine: !1 }) : St ? Xa() : qr(), Ze({ localOnly: !0 }));
        return;
      }
      if (w.kind === "scale_stroke_group") {
        const et = Math.max(1, Math.hypot(y.x - w.center.x, y.y - w.center.y)) / Math.max(1, Number(w.startDist || 1));
        Vo((pr = w.item) == null ? void 0 : pr.actionGroupId, et, 0, w.snapshot, (Yo = w.item) == null ? void 0 : Yo.layerKind, w.frameSnapshot) && (Yi({ rebuildPaintEngine: !1 }), Ze({ localOnly: !0, reason: bt.PAINT }));
        return;
      }
      if (w.kind === "rotate_stroke_group") {
        let qe = (Math.atan2(y.y - w.center.y, y.x - w.center.x) - Number(w.startAng || 0)) * Ii;
        c.shiftKey && (qe = Math.round(qe / 45) * 45), Vo((qo = w.item) == null ? void 0 : qo.actionGroupId, 1, qe, w.snapshot, (Je = w.item) == null ? void 0 : Je.layerKind, w.frameSnapshot) && (Yi({ rebuildPaintEngine: !1 }), Ze({ localOnly: !0, reason: bt.PAINT }));
        return;
      }
      if (w.kind === "marquee_select") {
        w.current = y, Ze({ localOnly: !0, reason: bt.OVERLAY });
        return;
      }
      if (w.kind === "scale") {
        const et = Math.max(1, Math.hypot(y.x - w.center.x, y.y - w.center.y)) / w.startDist;
        tr(w.item, { hFOV_deg: Fe(w.startHFOV * et, 1, 179), vFOV_deg: Fe(w.startVFOV * et, 1, 179) }), qa(w.item) || (w.item.aspect_id = Ni(w.item)), Zn(w.item) && qr(), Ze({ localOnly: !0 });
        return;
      }
      if (w.kind === "scale_x") {
        const et = Math.max(1, Math.hypot(y.x - w.center.x, y.y - w.center.y)) / w.startDist;
        tr(w.item, { hFOV_deg: Fe(w.startHFOV * et, 1, 179) }), qa(w.item) || (w.item.aspect_id = Ni(w.item)), Zn(w.item) && qr(), Ze({ localOnly: !0 });
        return;
      }
      if (w.kind === "scale_y") {
        const et = Math.max(1, Math.hypot(y.x - w.center.x, y.y - w.center.y)) / w.startDist;
        tr(w.item, { vFOV_deg: Fe(w.startVFOV * et, 1, 179) }), qa(w.item) || (w.item.aspect_id = Ni(w.item)), Zn(w.item) && qr(), Ze({ localOnly: !0 });
        return;
      }
      if (w.kind === "rotate") {
        let et = (Math.atan2(y.y - w.center.y, y.x - w.center.x) - w.startAng) * Ii, it = w.startRot - et;
        c.shiftKey && (it = Math.round(it / 45) * 45), tr(w.item, { [Zn(w.item) ? "rot_deg" : "roll_deg"]: it }), Zn(w.item) && qr(), Ze({ localOnly: !0 });
      }
    }
  }
  T.onpointermove = F1;
  function T1() {
    var y, w, q, J, fe, ke, Ce;
    const c = p.interaction;
    if (!((c == null ? void 0 : c.kind) === "roll_frame" && c.source === "knob")) {
      if ((c == null ? void 0 : c.kind) === "space_pan" || (c == null ? void 0 : c.kind) === "space_orbit") {
        p.interaction = null, xt(p.pointerPos), Ot();
        return;
      }
      if ((c == null ? void 0 : c.kind) === "world_select" || (c == null ? void 0 : c.kind) === "world_gizmo") {
        np(c);
        return;
      }
      if (((y = p.interaction) == null ? void 0 : y.kind) === "paint_stroke" || ((w = p.interaction) == null ? void 0 : w.kind) === "paint_lasso_fill") {
        Ki();
        const Ee = uc(p.interaction), Xe = !!p.interaction._hasCommittedSegments;
        if (Ee || Xe) {
          Yi();
          const ze = String(((q = p.interaction.stroke) == null ? void 0 : q.actionGroupId) || "").trim();
          if (ze) {
            const We = ql().find((nt) => String((nt == null ? void 0 : nt.actionGroupId) || "") === ze);
            We && (We.frame = null);
          }
          const Ve = Jn(p.interaction);
          Ve && (Ee ? String(((J = p.interaction.stroke) == null ? void 0 : J.toolKind) || "") === "eraser" ? (p.paintEngine.cancelActiveStroke(Ve), vb()) : p.paintEngine.commitActiveStroke(p.interaction.stroke, Ve) : p.paintEngine.cancelActiveStroke(Ve)), Rt(), Ar(), vt(), Ot(), e.setDirtyCanvas(!0, !0), Ze();
        } else {
          const ze = Jn(p.interaction);
          ze && p.paintEngine.cancelActiveStroke(ze);
        }
      } else if (((fe = p.interaction) == null ? void 0 : fe.kind) === "marquee_select") {
        const Ee = Zf(p.interaction.start, p.interaction.current), ze = [
          ...t === "cutout" ? Ul().filter((Ve) => !Ui(Ve)) : [...Yl()],
          ...ib(),
          ...rb()
        ].filter((Ve) => v1(Ee, an(Ve)));
        Nb(ze, ((ke = ze[ze.length - 1]) == null ? void 0 : ke.id) || null), D && ze.length && (p.cutoutAspectOpen = !1), vt(), Ot(), Ze();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((Ce = p.interaction) == null ? void 0 : Ce.kind))
        p.interaction.changed && (Rt(), vn(), vt());
      else if (p.interaction && p.interaction.kind !== "view") {
        let Ee = !1;
        (p.interaction.kind === "move_stroke_group" || p.interaction.kind === "scale_stroke_group" || p.interaction.kind === "rotate_stroke_group") && (Ee = !0), (p.interaction.kind === "move_raster_object" || p.interaction.kind === "scale_raster_object") && (Ee = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length && (Ee = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.rasterSnapshots) && p.interaction.rasterSnapshots.length && (Ee = !0), Ee && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(p.interaction.kind) || p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length ? Yi({ rebuildPaintEngine: !0 }) : Xa()), Rt(), Ar(), e.setDirtyCanvas(!0, !0), Ji(), Ot(), Ze();
      }
      p.interaction = null, (c == null ? void 0 : c.kind) === "roll_frame" && mi(), Ki(), c && c.kind === "view" && rc(() => pt.endDrag(performance.now())), Zr(), Ot(), xt(p.pointerPos), Ze();
    }
  }
  T.onpointerup = T1;
  function D1() {
    var c, y, w, q, J;
    if (!Bo()) {
      if (((c = p.interaction) == null ? void 0 : c.kind) === "world_select" || ((y = p.interaction) == null ? void 0 : y.kind) === "world_gizmo") {
        np(p.interaction);
        return;
      }
      if (((w = p.interaction) == null ? void 0 : w.kind) === "view" && rc(() => pt.endDrag(performance.now())), ((q = p.interaction) == null ? void 0 : q.kind) === "paint_stroke" || ((J = p.interaction) == null ? void 0 : J.kind) === "paint_lasso_fill") {
        Ki();
        const fe = Jn(p.interaction);
        fe && p.paintEngine.cancelActiveStroke(fe);
      }
      p.interaction = null, Ki(), Zr(), xt(p.pointerPos), Ze({ localOnly: !0 });
    }
  }
  T.onpointercancel = D1, T.onlostpointercapture = () => {
    Bo();
  }, T.onauxclick = (c) => {
    c.button === 1 && c.preventDefault();
  }, T.oncontextmenu = (c) => {
    (Yr() || lc()) && FM(oc(), 2) && c.preventDefault();
  };
  function L1(c) {
    const y = Xr(c), w = ns(y, !0);
    p.interaction || (xt(y), w && p.mode === "frame" && p.primaryTool === "cursor" && Ze({ localOnly: !0, reason: bt.OVERLAY }));
  }
  T.onmousemove = L1, T.onpointerleave = () => {
    p.interaction || tp({ x: -1e6, y: -1e6 });
  }, T.onmouseleave = () => {
    ns(p.pointerPos, !1), xt(p.pointerPos), p.mode === "frame" && p.primaryTool === "cursor" && Ze({ localOnly: !0, reason: bt.OVERLAY });
  };
  function R1(c) {
    if (p.mode === "frame") {
      const y = Xr(c), w = Xs(c);
      w && Go(), w && lc() ? s1(y, -w) : w && i1(y, w) && Ze({ localOnly: !0 }), c.preventDefault();
      return;
    }
    if (p.mode === "pano") {
      if (Wl(), Yr()) {
        const y = Xs(c);
        y && Ub(Xr(c), -y);
      } else pt.applyWheelEvent(c) && Ze({ localOnly: !0, reason: bt.VIEW });
      c.preventDefault();
    }
  }
  T.onwheel = R1, T.ondragover = db, T.ondrop = fb, window.addEventListener("dragenter", vf, !0), window.addEventListener("dragover", Sf, !0), window.addEventListener("dragleave", _f, !0), window.addEventListener("drop", wf, !0);
  function ip(c, y, w = !1) {
    var Xe;
    Go();
    const q = D && p.mode === "frame" ? _t() : null, J = q || Cr(), fe = q ? "shot" : Xl(), ke = Pf();
    if (ke && !Bb(ke) || !ke && (!J || fe === "stroke" || Ir(J))) return;
    const Ce = (((Xe = G.sidePanel) == null ? void 0 : Xe.params) || []).find((ze) => ze.key === c);
    if (!Ce || Ce.enabled === !1) return;
    let Ee = Number(y);
    if (Number.isNaN(Ee) && (Ee = 0), (ke || W) && zC.has(c) ? Ee = c === "scale" ? Math.max(Ee, Ay) : Ee : Ee = Fe(Ee, Number(Ce.min), Number(Ce.max)), c === "yaw_deg" && (Ee = zt(Ee)), !ke && W && c.startsWith("position_")) {
      Zi(), bx(S.camera, p.frame, c, Ee), vt(), Ze(), w && Rt();
      return;
    }
    if (ke) {
      Sx(ke, p.frame, c, Ee), qr(), vt(), Ze(), w && Rt();
      return;
    }
    c === "opacity" ? vx(J, p.frame, Ee / 100) : tr(J, { [c]: Ee }), D && !qa(J) && (c === "hFOV_deg" || c === "vFOV_deg") && (J.aspect_id = Ni(J)), vt(), Ze(), w && Rt();
  }
  async function V1(c) {
    var q, J, fe, ke, Ce, Ee, Xe;
    const y = c.target.closest("[data-action]");
    if (!y) return;
    const w = String(y.getAttribute("data-action") || "");
    if (w === "coverage-set") {
      const ze = En(y.getAttribute("data-coverage"));
      if (ze === En(S.coverage)) return;
      S.coverage = ze, p.coverage = ze, l && (l.value = String(ze)), o ? C.backgroundDirty = !0 : (Ar(), Db({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), vt(), Ot(), Ze();
      return;
    }
    if (w === "toggle-selection-picker") {
      if ((J = (q = G.sidePanel) == null ? void 0 : q.selectionPicker) != null && J.disabled) return;
      G.sidePanel.selectionPicker.open = !G.sidePanel.selectionPicker.open;
      return;
    }
    if (w === "select-picker-item") {
      G.sidePanel.selectionPicker.open = !1;
      const ze = String(y.getAttribute("data-selection-id") || "");
      let Ve = null;
      if (ze && (t === "stickers" ? Ve = [...Yl(), ...P ? S.shots : []].find((We) => String((We == null ? void 0 : We.id) || "") === ze) || null : Ve = ((fe = Zy().find((We) => {
        var nt;
        return String(((nt = We == null ? void 0 : We.item) == null ? void 0 : nt.id) || "") === ze;
      })) == null ? void 0 : fe.item) || null), hi(Ve || null), Ve && !cr(Ve)) {
        const We = Fn(Ve);
        Of(zt(Number(We.yaw_deg || 0)), Fe(Number(We.pitch_deg || 0), -89.9, 89.9));
      }
      vt(), Ot(), Ze();
      return;
    }
    if (w === "copy-state-inline") {
      const ze = Cr(), Ve = Xl();
      if (!ze || Ve === "stroke" || Ya().length > 1) return;
      const We = JSON.stringify(D && Ve !== "image" ? Ly(ze) : Ry(Fn(ze)));
      try {
        await navigator.clipboard.writeText(We), (ke = G.sidePanel) != null && ke.copyStateButton && (G.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var nt;
          (nt = G.sidePanel) != null && nt.copyStateButton && (G.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (w === "set-invert-x") {
      S.ui_settings.invert_view_x = y.getAttribute("data-value") === "1", ec(), vt(), (Ce = e.setDirtyCanvas) == null || Ce.call(e, !0, !0), Ze();
      return;
    }
    if (w === "set-invert-y") {
      S.ui_settings.invert_view_y = y.getAttribute("data-value") === "1", ec(), vt(), (Ee = e.setDirtyCanvas) == null || Ee.call(e, !0, !0), Ze();
      return;
    }
    if (w === "ui-reset-defaults") {
      S.ui_settings.invert_view_x = !1, S.ui_settings.invert_view_y = !1, ec(), vt(), (Xe = e.setDirtyCanvas) == null || Xe.call(e, !0, !0), Ze();
      return;
    }
    if (w === "close-preview") {
      to();
      return;
    }
    if (w === "cancel-close") {
      to();
      return;
    }
    w === "save-close" && (Zt(), to());
  }
  me == null || me.addEventListener("click", V1);
  function $1(c) {
    const y = c.target.closest("[data-action='param-input']");
    y && ip(String(y.getAttribute("data-param-key") || ""), y.value, !1);
  }
  me == null || me.addEventListener("input", $1);
  function z1(c) {
    const y = c.target.closest("[data-action='param-input']");
    y && ip(String(y.getAttribute("data-param-key") || ""), y.value, !0);
  }
  me == null || me.addEventListener("change", z1);
  function fc() {
    Af();
  }
  fc();
  function j1(c) {
    var Xe, ze, Ve, We, nt;
    if ((ze = (Xe = c.target) == null ? void 0 : Xe.matches) != null && ze.call(Xe, "[data-confirm-overlay]")) {
      const Ge = (Ve = G.confirmDialog) == null ? void 0 : Ve.resolve;
      G.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Ge == null || Ge(!1);
      return;
    }
    const y = c.target.closest("[data-space-mode]");
    if (y) {
      Ab(y.getAttribute("data-space-mode"));
      return;
    }
    const w = c.target.closest("[data-gizmo-mode]");
    if (w) {
      p.gizmoMode = w.getAttribute("data-gizmo-mode"), C.backgroundDirty = !0, Ot(), Ze({ localOnly: !0, reason: bt.VIEW });
      return;
    }
    const q = c.target.closest("[data-view]");
    if (q) {
      if (q.getAttribute("aria-disabled") === "true") return;
      const Ge = p.mode;
      p.mode = String(q.getAttribute("data-view") || "pano"), D && p.mode === "frame" && (Ge !== "frame" && (C.frameSafeRect = null), vt(), Ot()), Bl(), Zr(), Ze();
      return;
    }
    const J = c.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (J && !r) {
      if (J.matches("[data-tool-mode]")) {
        const Ge = String(J.getAttribute("data-tool-mode") || "cursor");
        p.primaryTool = Ge, (Ge === "paint" || Ge === "mask") && zo({ preservePanelValues: !0 }), er(), vt(), Ot(), Ze();
        return;
      }
      if (J.matches("[data-tool-ui-action]")) {
        const Ge = String(J.getAttribute("data-tool-ui-action") || "");
        if ((Ge === "undo" || Ge === "redo") && J.disabled) return;
        Ge === "undo" ? nc(-1) : Ge === "redo" ? nc(1) : Ge === "clear" ? Hy() : Ge === "add" || Ge === "add-image" ? Wt() : Ge === "add-world" ? $n() : Ge === "add-or-look" ? Jb() : Ge === "add-camera" && Zb();
        return;
      }
      if (J.matches("[data-paint-tool]")) {
        p.primaryTool = "paint";
        const Ge = String(J.getAttribute("data-paint-tool") || "pen");
        p.paintTool = Ge, zo({ preservePanelValues: !0 }), Nn[Ge] && (p.activeBrushPresetId = Ge), er(), vt(), Ot(), Ze();
        return;
      }
      if (J.matches("[data-mask-tool]")) {
        p.primaryTool = "mask", p.maskTool = String(J.getAttribute("data-mask-tool") || "pen"), zo({ preservePanelValues: !0 }), er(), vt(), Ot(), Ze();
        return;
      }
      if (J.matches("[data-paint-layer-clear-current]")) {
        const Ge = String(J.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Gy(Ge);
        return;
      }
      if (J.matches("[data-paint-color-swatch]")) {
        const Ge = vl.find((ft) => ft.id === J.getAttribute("data-paint-color-swatch"));
        if (!Ge) return;
        p.paintColor = Tn(Ge.color), ve(!0), er();
        return;
      }
      if (J.matches("[data-paint-color-custom]")) {
        c.preventDefault(), c.stopPropagation(), Y && !Y.hidden ? ve(!0) : we(), er();
        return;
      }
    }
    const fe = String(((We = J == null ? void 0 : J.getAttribute) == null ? void 0 : We.call(J, "data-action")) || "");
    if (fe === "video-play-toggle") {
      if (c.preventDefault(), c.stopPropagation(), !(Ne instanceof HTMLVideoElement)) return;
      es.resumeAfterScrub = !1, Ef();
      return;
    }
    if (fe === "video-audio-toggle") {
      c.preventDefault(), c.stopPropagation(), Hb(), typeof (J == null ? void 0 : J.blur) == "function" && J.blur();
      return;
    }
    if (fe === "video-loop-toggle") {
      if (c.preventDefault(), c.stopPropagation(), !(Ne instanceof HTMLVideoElement)) return;
      const Ge = !G.videoTransport.loop;
      G.videoTransport.loop = Ge, Ne.loop = Ge, If({
        hasAudio: G.videoTransport.hasAudio,
        loop: Ge,
        muted: Ne.muted,
        volume: Number(Ne.volume ?? G.videoTransport.volume ?? 1)
      }), typeof (J == null ? void 0 : J.blur) == "function" && J.blur();
      return;
    }
    if (!r) {
      if (fe === "frame-aspect") {
        G.frameRail.aspectOpen = !G.frameRail.aspectOpen;
        return;
      }
      if (fe === "frame-aspect-set") {
        const Ge = p.mode === "frame" ? _t() : null;
        if (!Ge || Ge.locked === !0) return;
        Tf(Ge, String(J.getAttribute("data-aspect") || "1:1")), G.frameRail.aspectOpen = !1, Ji(), Rt(), vn(), Zr(), vt(), Ot(), Ze();
        return;
      }
      if (fe === "frame-aspect-custom") {
        const Ge = p.mode === "frame" ? _t() : null, ft = J.getAttribute("data-custom-width"), Tt = J.getAttribute("data-custom-height");
        if (!Ge || !n1(Ge, ft, Tt)) return;
        G.frameRail.aspectOpen = !1, Ji(), Rt(), vn(), Zr(), Ze();
        return;
      }
      if (fe === "frame-rotate-90") {
        const Ge = p.mode === "frame" ? _t() : null;
        if (!Ge || Ge.locked === !0) return;
        Df(Ge), G.frameRail.aspectOpen = !1, Ji(), Rt(), vn(), Zr(), Ze();
        return;
      }
      if (fe === "aspect") {
        p.cutoutAspectOpen = !p.cutoutAspectOpen, p.menuSize.measured = !1, Ot(), Ze();
        return;
      }
      if (fe === "aspect-set") {
        const Ge = Cr();
        if (!Ge) return;
        const ft = String(J.getAttribute("data-aspect") || "1:1");
        Tf(Ge, ft), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, Ji(), Rt(), vn(), Ot(), Ze();
        return;
      }
      if (fe === "rotate-90") {
        const Ge = Cr();
        if (!Ge || Zl()) return;
        Df(Ge), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, Ji(), Rt(), vn(), Ot(), Ze();
        return;
      }
      if (fe === "bring-front") {
        Dy();
        return;
      }
      if (fe === "send-back") {
        Mb();
        return;
      }
      if (fe === "duplicate") {
        Uy();
        return;
      }
      if (fe === "replace-image") {
        _b();
        return;
      }
      if (fe === "toggle-lock") {
        jb();
        return;
      }
      if (fe === "back-initial") {
        wb();
        return;
      }
      if (fe === "toggle-visible") {
        zb();
        return;
      }
      if (fe === "delete") {
        cf();
        return;
      }
    }
    if (fe === "reset-view") {
      if (p.mode === "frame") return;
      Qa(
        { position: Eb(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((nt = sf()) == null ? void 0 : nt.radius) || ar },
        { mode: yl(p.spaceMode, p.viewTransition), moved: !1 }
      );
      return;
    }
    if (fe === "frame-view") {
      if (!Yr() || yl(p.spaceMode, p.viewTransition) !== "6dof") return;
      Jy();
      return;
    }
    if (fe === "toggle-grid") {
      if (p.mode === "frame") return;
      p.showGrid = !p.showGrid, gI(e == null ? void 0 : e.id, p.showGrid), fc(), Ze();
      return;
    }
    if (fe === "toggle-fullscreen") {
      c.preventDefault(), c.stopPropagation(), Y1();
      return;
    }
    if (fe === "toggle-output-preview-size") {
      c.preventDefault(), c.stopPropagation();
      const Ge = !p.outputPreviewExpanded;
      p.outputPreviewExpanded = Ge, rc(() => {
        p.outputPreviewAnimFrom = p.outputPreviewAnim, p.outputPreviewAnimTo = Ge ? 1 : 0, p.outputPreviewAnimStartTs = performance.now();
      }), cp(), Ze();
      return;
    }
    const ke = c.target.closest("[data-paint-history-index]");
    if (!ke) return;
    const Ce = Number(ke.getAttribute("data-paint-history-index")), Ee = p.customPaintHistory[Ce];
    Ee && (p.customPaintColor = Tn(Ee), p.paintColor = Tn(Ee), er());
  }
  A.addEventListener("click", j1);
  function H1(c) {
    const y = c.target.closest("[data-video-seek]");
    if (y) {
      if (!(Ne instanceof HTMLVideoElement)) return;
      qi.playing && (es.resumeAfterScrub = !0), qi.seek(Mi(Number(y.value || 0), mb()));
      return;
    }
    const w = c.target.closest("[data-video-volume]");
    if (w) {
      if (!(Ne instanceof HTMLVideoElement)) return;
      const fe = Fe(Number(w.value || 0), 0, 1);
      Ne.volume = fe, Ne.muted = fe <= 1e-4, If({
        hasAudio: G.videoTransport.hasAudio,
        muted: Ne.muted,
        volume: fe
      });
      return;
    }
    const q = c.target.closest("[data-paint-size-slider]");
    if (q) {
      if (q.disabled) return;
      const fe = Math.max(1, Math.min(120, Math.round(Number(q.value)))), ke = Qi(p.primaryTool === "paint" ? p.paintTool : p.maskTool);
      p.brushSizes[ke] = fe, er(), f1();
      return;
    }
    const J = c.target.closest("[data-paint-alpha-slider]");
    if (J) {
      const fe = { ...p.customPaintColor, a: Fe(Number(J.value) / 100, 0, 1) };
      p.customPaintColor = Tn(fe), p.paintColor = Tn(fe), er();
    }
  }
  A.addEventListener("input", H1);
  function G1(c) {
    var y;
    if (c.target.closest("[data-video-seek]")) {
      if (!(Ne instanceof HTMLVideoElement)) return;
      es.resumeAfterScrub && qi.play(), es.resumeAfterScrub = !1;
      return;
    }
    if (c.target.closest("[data-video-volume]")) {
      typeof ((y = c.target) == null ? void 0 : y.blur) == "function" && c.target.blur();
      return;
    }
    c.target.closest("[data-paint-size-slider]") && rs();
  }
  A.addEventListener("change", G1), A.addEventListener("pointerup", (c) => {
    var y;
    if (c.target.closest("[data-video-volume]")) {
      typeof ((y = c.target) == null ? void 0 : y.blur) == "function" && c.target.blur();
      return;
    }
    c.target.closest("[data-paint-size-slider]") && rs();
  }), A.addEventListener("pointercancel", (c) => {
    var y;
    if (c.target.closest("[data-video-volume]")) {
      typeof ((y = c.target) == null ? void 0 : y.blur) == "function" && c.target.blur();
      return;
    }
    c.target.closest("[data-paint-size-slider]") && rs();
  }), A.addEventListener("focusout", (c) => {
    c.target.closest("[data-paint-size-slider]") && rs();
  });
  function W1(c) {
    const y = c.target.closest("[data-tip]");
    !y || !A.contains(y) || Qe.target !== y && (Qe.target = y, Qe.timer && clearTimeout(Qe.timer), Qe.timer = window.setTimeout(() => {
      Qe.target === y && w1(y);
    }, 220));
  }
  A.addEventListener("pointerover", W1);
  function K1(c) {
    var q, J;
    const y = c.target.closest("[data-tip]");
    !y || Qe.target !== y || (c.relatedTarget instanceof Element ? (J = (q = c.relatedTarget).closest) == null ? void 0 : J.call(q, "[data-tip]") : null) === y || mi();
  }
  A.addEventListener("pointerout", K1), A.addEventListener("pointerdown", (c) => {
    c.target.closest("[data-frame-roll-knob]") || mi();
  });
  function B1(c, y) {
    var Ce;
    if (!Q) return;
    const w = Q.getBoundingClientRect(), q = Fe((c - w.left) / Math.max(1, w.width), 0, 1), J = 1 - Fe((y - w.top) / Math.max(1, w.height), 0, 1), fe = qu(p.customPaintColor), ke = { ...Yu(fe.h, q, J), a: Number(((Ce = p.customPaintColor) == null ? void 0 : Ce.a) ?? 1) };
    p.customPaintColor = Tn(ke), p.paintColor = Tn(ke), er();
  }
  function U1(c) {
    var fe;
    if (!ne) return;
    const y = ne.getBoundingClientRect(), w = Fe((c - y.left) / Math.max(1, y.width), 0, 1), q = qu(p.customPaintColor), J = { ...Yu(w, q.s, q.v), a: Number(((fe = p.customPaintColor) == null ? void 0 : fe.a) ?? 1) };
    p.customPaintColor = Tn(J), p.paintColor = Tn(J), er();
  }
  function op(c, y) {
    const w = c.pointerId;
    y(c);
    const q = (fe) => {
      fe.pointerId === w && y(fe);
    }, J = (fe) => {
      fe.pointerId === w && (window.removeEventListener("pointermove", q), window.removeEventListener("pointerup", J), window.removeEventListener("pointercancel", J));
    };
    window.addEventListener("pointermove", q), window.addEventListener("pointerup", J), window.addEventListener("pointercancel", J);
  }
  Q && (Q.onpointerdown = (c) => {
    c.preventDefault(), c.stopPropagation(), op(c, (y) => B1(y.clientX, y.clientY));
  }), ne && (ne.onpointerdown = (c) => {
    c.preventDefault(), c.stopPropagation(), op(c, (y) => U1(y.clientX));
  }), A.addEventListener("click", (c) => {
    var J;
    const y = c.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!y) return;
    const w = y.getAttribute("data-action") === "confirm-accept", q = (J = G.confirmDialog) == null ? void 0 : J.resolve;
    G.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, q == null || q(w);
  });
  function ap() {
    const c = !!p.fullscreen;
    uo(G.floatingButtons, "action", "toggle-fullscreen", {
      icon: c ? Ye.fullscreen_close : Ye.fullscreen,
      label: c ? "Exit Fullscreen" : "Fullscreen",
      tip: c ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function is(c) {
    const y = !!c;
    p.fullscreen !== y && (p.fullscreen = y, A.classList.toggle("pano-modal-fullscreen", y), y ? (p.fullscreenPrevShowGrid = !!p.showGrid, p.showGrid = !1) : p.fullscreenPrevShowGrid !== null && (p.showGrid = !!p.fullscreenPrevShowGrid, p.fullscreenPrevShowGrid = null), fc(), ap(), gb(), Ze());
  }
  function sp() {
    return document.fullscreenElement === X;
  }
  async function Y1() {
    var c, y;
    try {
      if (!document.fullscreenEnabled) {
        is(!p.fullscreen);
        return;
      }
      sp() ? await ((y = document.exitFullscreen) == null ? void 0 : y.call(document)) : await ((c = X.requestFullscreen) == null ? void 0 : c.call(X));
    } catch {
      is(!p.fullscreen);
    }
  }
  function lp() {
    document.fullscreenEnabled && is(sp());
  }
  document.addEventListener("fullscreenchange", lp), ap();
  function cp() {
    const c = !!p.outputPreviewExpanded;
    G.outputPreviewToggle.icon = c ? Ye.fullscreen_close : Ye.fullscreen, G.outputPreviewToggle.label = c ? "Reduce Preview" : "Expand Preview", G.outputPreviewToggle.tip = c ? "Reduce preview" : "Expand preview";
  }
  cp();
  const pc = e.onConnectionsChange;
  let hc = null, up = () => {
  };
  !r && t === "stickers" && (up = sy(e, (c = "sync") => {
    c === "executed" && (YI(k, bl), tc(), _ && $o()), kf(c);
  }, { editor: !0 }), hc = function(...y) {
    typeof pc == "function" && pc.apply(this, y), tc(), Gr(this, "connections");
  }, e.onConnectionsChange = hc), !r && !v && um.set(String(e.id ?? "0"), () => Rb());
  let eo = null;
  async function to() {
    return eo || (eo = (async () => {
      var c, y, w, q, J, fe, ke, Ce;
      return um.delete(String(e.id ?? "0")), l1(), r || Ar(), document.fullscreenElement === X && ((c = document.exitFullscreen) == null || c.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", lp), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Lf && (e.__panoFlushStateBeforeQueue = null), (w = (y = e.__panoDomPreview) == null ? void 0 : y.requestDraw) == null || w.call(y), (J = (q = e.graph) == null ? void 0 : q.setDirtyCanvas) == null || J.call(q, !0, !0), (Ce = (ke = (fe = ir) == null ? void 0 : fe.canvas) == null ? void 0 : ke.setDirty) == null || Ce.call(ke, !0, !0), mi(), Ie.cancel(), Tb(), Ne instanceof HTMLVideoElement && Ne.pause(), Wb.forEach((Ee) => {
        try {
          Ee();
        } catch {
        }
      }), De.dispose(), Pb(!1), window.removeEventListener("keydown", dp, !0), window.removeEventListener("keydown", fp, !0), window.removeEventListener("keydown", hp, !0), window.removeEventListener("keyup", mp, !0), window.removeEventListener("keydown", os, !0), window.removeEventListener("keyup", os, !0), window.removeEventListener("blur", gp), window.removeEventListener("keydown", yp, !0), window.removeEventListener("dragenter", vf, !0), window.removeEventListener("dragover", Sf, !0), window.removeEventListener("dragleave", _f, !0), window.removeEventListener("drop", wf, !0), !r && t === "stickers" && (e.onConnectionsChange === hc && (e.onConnectionsChange = pc), up()), be.unmount(), K.remove(), Gb(), eo = null, !0;
    })().catch((c) => (console.error("[PanoramaCutoutSync] closeEditor failed", c), eo = null, !1)), eo);
  }
  function dp(c) {
    var y, w, q, J, fe;
    if (c.key === "Escape") {
      if (Bo()) {
        c.preventDefault(), c.stopPropagation(), (y = c.stopImmediatePropagation) == null || y.call(c);
        return;
      }
      if (p.fullscreen && document.fullscreenElement === X) {
        c.preventDefault(), c.stopPropagation(), (w = c.stopImmediatePropagation) == null || w.call(c), (q = document.exitFullscreen) == null || q.call(document).catch(() => {
        });
        return;
      }
      if (p.fullscreen) {
        c.preventDefault(), c.stopPropagation(), (J = c.stopImmediatePropagation) == null || J.call(c), is(!1);
        return;
      }
      c.preventDefault(), c.stopPropagation(), (fe = c.stopImmediatePropagation) == null || fe.call(c), to();
    }
  }
  function fp(c) {
    const y = String(c.key || ""), w = String(c.code || ""), q = Number(c.keyCode || 0);
    if (!(y === "Delete" || w === "Delete" || q === 46) && !(y === "Backspace" || w === "Backspace" || q === 8)) return;
    const ke = c.target, Ce = ((ke == null ? void 0 : ke.tagName) || "").toUpperCase();
    if (Ce === "INPUT" || Ce === "TEXTAREA" || ke != null && ke.isContentEditable) return;
    if (L.selection) {
      Ky(), c.preventDefault(), c.stopPropagation();
      return;
    }
    if (By()) {
      c.preventDefault(), c.stopPropagation();
      return;
    }
    Cr() && (cf(), c.preventDefault(), c.stopPropagation());
  }
  function pp(c) {
    if (c.code !== "Space" || c.ctrlKey || c.metaKey || c.altKey || r || !b || !G.timeline.visible || G.confirmDialog.visible) return !1;
    const y = c.composedPath()[0];
    if (y !== document.body && y !== document.documentElement && !X.contains(y)) return !1;
    const w = ((y == null ? void 0 : y.tagName) || "").toUpperCase();
    return w === "INPUT" ? !$C.has(String(y.type || "text").toLowerCase()) : w !== "TEXTAREA" && w !== "SELECT" && !(y != null && y.isContentEditable);
  }
  function hp(c) {
    pp(c) && (c.preventDefault(), c.stopPropagation(), c.repeat || Ef());
  }
  function mp(c) {
    pp(c) && (c.preventDefault(), c.stopPropagation());
  }
  function os(c) {
    const y = !!(c.ctrlKey || c.metaKey), w = !!c.altKey;
    p.marqueeModifier === y && p.altModifier === w || (p.marqueeModifier = y, p.altModifier = w, Jr(), xt(p.pointerPos));
  }
  function gp() {
    p.marqueeModifier = !1, p.altModifier = !1, Jr(), xt(p.pointerPos);
  }
  function yp(c) {
    if (r || !c.ctrlKey && !c.metaKey) return;
    const y = String(c.key || "").toLowerCase(), w = String(c.code || "");
    if (y !== "z" && w !== "KeyZ") return;
    const q = c.target, J = ((q == null ? void 0 : q.tagName) || "").toUpperCase();
    if (J === "INPUT" || J === "TEXTAREA" || q != null && q.isContentEditable) return;
    const { canUndo: fe, canRedo: ke } = tb();
    c.shiftKey && !ke || !c.shiftKey && !fe || (nc(c.shiftKey ? 1 : -1), c.preventDefault(), c.stopPropagation());
  }
  window.addEventListener("keydown", dp, !0), window.addEventListener("keydown", fp, !0), window.addEventListener("keydown", hp, !0), window.addEventListener("keyup", mp, !0), window.addEventListener("keydown", os, !0), window.addEventListener("keyup", os, !0), window.addEventListener("blur", gp), window.addEventListener("keydown", yp, !0), X.addEventListener("pointerdown", (c) => {
    c.target === X && to();
  });
  function dr(c, y, { rollbackState: w = !1 } = {}) {
    let q = "";
    try {
      w && (q = JSON.stringify(S)), y();
    } catch (J) {
      if (q)
        try {
          const fe = JSON.parse(q);
          Object.keys(S).forEach((ke) => delete S[ke]), Object.assign(S, fe), r || Ar();
        } catch (fe) {
          console.error(`[PanoramaStickers] editor boot step "${c}" rollback failed`, fe);
        }
      G.stageWarningDetail = `boot:${c}`, console.error(`[PanoramaStickers] editor boot step "${c}" failed`, J);
    }
  }
  dr("cutout-focus", ui), !r && t === "stickers" && dr("external-sticker-sync", () => kf("open"), { rollbackState: !0 }), ub().catch((c) => {
    G.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', c);
  }), dr("history", Rt), dr("undo-redo", Vb), dr("paint-ui", er), dr("side-panel", vt), dr("look-at-frame", Lb), dr("video-source", tc), dr("canvas-size", ic), dr("cursor", () => xt(p.pointerPos)), Ze(), xb();
}
ir.registerExtension(GM({
  app: ir,
  openEditor: qI,
  attachStickers: rN,
  attachCutout: iN,
  attachPreview: nN,
  restoreOutput: GP,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: KC
}));
